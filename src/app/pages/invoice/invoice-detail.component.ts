/**
 * Created by a619678 on 7. 6. 2017.
 */

import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Invoice} from "./invoice.model";
import {getTranslation, InvoiceStatus} from "./invoiceStatus.model";
import {InvoiceService} from "./invoice.service";
import {CompanyPermissions} from "../../models/company-permisions.model";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {NotificationService} from "../../services/notification.service";
import {UserService} from "../../services/user.service";
import {MenuItem} from "primeng/primeng";

@Component({
    selector: 'invoice-detail',
    styleUrls: ['./invoice-detail.component.css'],
    templateUrl: './invoice-detail.component.html'
})

export class InvoiceDetailComponent {

    private invoices: Invoice[];
    private invoice: Invoice;
    public permissions: CompanyPermissions = new CompanyPermissions();
    public invoiceLoaded: boolean = false;
    public permissionLoaded: boolean = false;
    public invoiceActions: MenuItem[] = new Array();

    constructor(private activatedRoute: ActivatedRoute,
                public router: Router,
                private invoiceSrv: InvoiceService,
                private loadingBar: SlimLoadingBarService,
                private notificationSrv: NotificationService,
                private loginServ: UserService) {

    }

// <button *ngIf="permissions.cancel"
//     (click)="stornoInvoice()" class="col-lg-2 btn btn-danger">
//         Storno faktúry
//     </button>
//
// <button *ngIf="permissions.pay"
//     (click)="payInvoice()" class="col-lg-2 btn btn-success">
//         Faktura bola zaplatena
//     </button>
//
// <button *ngIf="permissions.generatePdf" (click)="generatePdf()"
//     class="col-lg-2 btn btn-warning">
//         Vygeneruj znova pdf
//     </button>
//
// <button *ngIf="permissions.sendEmail" (click)="sentNotificationEmail()"
//     class="col-lg-2 btn btn-warning">
//         Odošli notifikačný mail
//     </button>
    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {

            this.invoice = data['invoice'];

            if (!this.invoice.company) {

                this.invoiceSrv.getInvoices().subscribe(
                    result => {
                        this.invoiceSrv.setInvoices(result);
                        this.invoice = this.invoiceSrv.getInvoice(this.invoice.id);
                        this.invoiceLoaded = true;
                    },
                    error => {
                        if (error.status === 401) {
                            this.loginServ.logout();
                        }
                    }
                )
            }
            else {
                this.invoiceLoaded = true;
            }

            this.invoiceSrv.getPermissions(this.invoice.id).subscribe(
                result => {
                    this.permissions = result;
                    this.permissionLoaded = true;
                    this.invoiceActions = new Array();

                    if (this.permissions.generatePdf) {
                        this.invoiceActions.push({
                            label: 'Vygeneruj PDF', icon: 'fa-rotate-left', command: () => {
                                this.generatePdf();
                            }
                        });
                    }

                    if (this.permissions.cancel) {
                        this.invoiceActions.push({
                            label: 'Storno', icon: 'fa-close', command: () => {
                                this.stornoInvoice();
                            }
                        });
                    }
                    if (this.permissions.sendEmail) {
                        this.invoiceActions.push({
                            label: 'Preposli notifikacny mail', icon: 'fa-mail-forward', command: () => {
                                this.sentNotificationEmail();
                            }
                        });
                    }
                    if (this.permissions.pay) {
                        this.invoiceActions.push({
                            label: 'Faktura bola uhradena', icon: 'fa-check', command: () => {
                                this.payInvoice()
                            }
                        });
                    }
                },
                error => {
                    if (error.status === 401) {
                        this.loginServ.logout();
                    }
                }
            );
        });
    }

    getStatusMessage(status) {
        if (!status) status = "created";
        return getTranslation(status);
    }

    getHtmlLink() {
        return this.invoiceSrv.generateHtmlLink(this.invoice);
    }

    generatePdf() {
        this.loadingBar.start(() => {

        });

        this.invoiceSrv.generatePdfOfInvoice(this.invoice).subscribe(
            result => {
                this.notificationSrv.success("Pdf súbor bol úspešne vygenerovaný", "PDF");
                this.loadingBar.complete();
            },
            error => {
                this.notificationSrv.error("Pri generovaní pdf súboru nastala chyba", "PDF");
                this.loadingBar.complete();
                console.log(error);
            }
        )
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
                this.invoice.status = "payed";
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
                    this.invoice.status = "canceled";
                },
                error => {
                    this.notificationSrv.error("Chyba pri zmene stavu objednávky", "Faktúra");
                    this.loadingBar.complete();
                    console.log(error);
                }
            );
        }

    }
}