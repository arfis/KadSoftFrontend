/**
 * Created by a619678 on 7. 6. 2017.
 */

import {Component, Sanitizer} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Invoice} from "./invoice.model";
import {getTranslation, InvoiceStatus} from "./invoiceStatus.model";
import {InvoiceService} from "./invoice.service";
import {CompanyPermissions} from "../../models/company-permisions.model";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {NotificationService} from "../../services/notification.service";
import {UserService} from "../../services/user.service";
import {MenuItem} from "primeng/primeng";
import {Observable} from "rxjs/Observable";
import {RestService} from "../../services/rest.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'invoice-detail',
    styleUrls: ['./invoice-detail.component.css'],
    templateUrl: './invoice-detail.component.html'
})

export class InvoiceDetailComponent {

    public invoice: Invoice;
    public permissions: CompanyPermissions = new CompanyPermissions();
    public permissionLoaded: boolean = false;
    public invoiceActions: MenuItem[] = new Array();
    public base64image;
    public pdfLink;
    public pdfSafeLink;

    constructor(private activatedRoute: ActivatedRoute,
                public router: Router,
                private invoiceSrv: InvoiceService,
                private loadingBar: SlimLoadingBarService,
                private notificationSrv: NotificationService,
                private loginServ: UserService,
                private _restServ: RestService,
                private sanitizer: DomSanitizer) {

    }

    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {

           this.invoice = data['invoice'];
                    Observable.forkJoin(this.invoiceSrv.getPermissions(this.invoice.id),
                                        this.callMethod$(this.invoice.actions.base64File.href,
                                           this.invoice.actions.base64File.methods[0])).subscribe(
                        results => {
                            const [result, base64image] = results;
                            this.permissions = result;
                            this.permissionLoaded = true;
                            this.invoiceActions = new Array();
                            this.base64image = base64image;
                            this.downloadPDF();

                            this.setUpActions();

                        },
                        error => {
                            if (error.status === 401) {
                                this.loginServ.logout();
                            }
                        }
                    );
            

        });
    }

    setUpActions() {
        this.invoiceActions = [];
        if (this.invoice.actions.generatePdf) {
            this.invoiceActions.push({
                label: 'Vygeneruj PDF', icon: 'fa-rotate-left', command: () => {
                    this.callMethod(this.invoice.actions.generatePdf.href,
                        this.invoice.actions.generatePdf.methods[0]);
                }
            });
        }

        if (this.invoice.actions.cancelInvoice) {
            this.invoiceActions.push({
                label: 'Storno', icon: 'fa-close', command: () => {
                    this.callMethod(this.invoice.actions.cancelInvoice.href,
                        this.invoice.actions.cancelInvoice.methods[0]);
                }
            });
        }
        if (this.invoice.actions.sendEmail) {
            this.invoiceActions.push({
                label: 'Preposli notifikacny mail', icon: 'fa-mail-forward', command: () => {
                    this.callMethod(this.invoice.actions.sendEmail.href,
                        this.invoice.actions.sendEmail.methods[0]);
                }
            });
        }
        if (this.invoice.actions.payInvoice) {
            this.invoiceActions.push({
                label: 'Faktura bola uhradena', icon: 'fa-check', command: () => {
                    this.callMethod(this.invoice.actions.payInvoice.href,
                        this.invoice.actions.sendEmail.methods[0]);
                }
            });
        }

        if (this.invoice.actions.downloadFile) {
            this.invoiceActions.push({
                label: 'Pdf', icon: 'fa-download', command: () => {
                    window.location.href = this.pdfLink;
                }
            })
        }
    }
    callMethod$(link, method) {
        if (method === "GET") {
            return this._restServ.get<any>(link);
        }
        else {
            return this._restServ.post<any>(link);
        }
    }

    callMethod(link, method) {

           this.callMethod$(link, method).subscribe(
                result => {
                    this.invoiceSrv.getInvoice(this.invoice.id).subscribe(
                        invoiceResult =>  {
                            this.invoice = invoiceResult;
                            this.setUpActions();
                        }
                    )
                    this.notificationSrv.success('akcia bola uspesne ukoncena', 'akcia');
                },
                error => {
                    this.notificationSrv.error('akcia nebola uspesne ukoncena', 'akcia');
                }
            )

    }
    getStatusMessage(status) {
        if (!status) status = "created";
        return getTranslation(status);
    }

    getHtmlLink() {
        return this.invoiceSrv.generateHtmlLink(this.invoice);
    }

    generatePdf() {
        this.downloadPDF();
    }

    sentNotificationEmail() {
        this.loadingBar.start(() => {
        });

        this.invoiceSrv.sendEmailForInvoice(this.invoice).subscribe(
            result => {
                this.notificationSrv.success("Email bol úspešne odoslaný", "Email");
                this.loadingBar.complete();
            },
            error => {
                this.notificationSrv.error("Nastala chyba pri odosielaní emailu", "Email");
                this.loadingBar.complete();
                console.log(error);
            }
        )

    }

    payInvoice() {
        this.loadingBar.start(() => {

        });

        this.invoiceSrv.payInvoice(this.invoice).subscribe(
            result => {
                this.notificationSrv.success("Stav objednávky bola zmenená na zaplatenú", "Faktúra");
                this.loadingBar.complete();
                this.invoice = result;
            },
            error => {
                this.notificationSrv.error("Chyba pri zmene stavu objednávky", "Faktúra");
                this.loadingBar.complete();
                console.log(error);
            }
        )
    }

    stornoInvoice() {
        if (window.confirm('Faktura bude stornovana ')) {
            this.invoiceSrv.storno(this.invoice).subscribe(
                result => {
                    this.notificationSrv.success("Stav objednávky bola zmenená na stornovanú", "Faktúra");
                    this.loadingBar.complete();
                    this.invoice = result;
                },
                error => {
                    this.notificationSrv.error("Chyba pri zmene stavu objednávky", "Faktúra");
                    this.loadingBar.complete();
                    console.log(error);
                }
            );
        }

    }
    downloadPDF() {
        let sliceSize =  512;

        let base64 = this.base64image.base64.replace('data:application/pdf;base64,', '');
        let byteCharacters = atob(base64);
        var contentType = 'application/pdf';
        let byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            let slice = byteCharacters.slice(offset, offset + sliceSize);

            let byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            let byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        console.log(byteArrays);

        var blob = new Blob(byteArrays, {type: contentType});

        let blobUrl = URL.createObjectURL(blob);

        this.pdfSafeLink = this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl);
        this.pdfLink = blobUrl;

    }

    get price() {
        let sum = 0;
        for (let item of this.invoice.invoiceItems) {
            sum += item.price * item.count;
        }

        return sum;
    }
}