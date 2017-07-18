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
@Component({
    selector: 'invoice-detail',
    styleUrls: ['./invoice-detail.component.css'],
    templateUrl: './invoice-detail.component.html'
})

export class InvoiceDetailComponent {

    private invoices : Invoice[];
    private invoice: Invoice;
    public permissions: CompanyPermissions = new CompanyPermissions();
    public dataLoaded: boolean = false;

    constructor(private activatedRoute: ActivatedRoute,
                public router: Router,
                private invoiceSrv: InvoiceService,
                private loadingBar: SlimLoadingBarService,
                private notificationSrv: NotificationService) {

    }

    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {

            this.invoice = data['invoice'];

            console.log("invoice:");
            console.log(this.invoice);

            if (!this.invoice.company){

                console.log("company is undefined");

                this.invoiceSrv.getInvoices().subscribe(
                    result => {
                        this.invoice = this.invoiceSrv.getInvoice(this.invoice.id);
                        this.dataLoaded = true;
                    }
                )
            }

            this.invoiceSrv.getPermissions(this.invoice.id).subscribe(
                result => {
                    this.permissions = result;
                    this.dataLoaded = true;
                },
                error => {
                    console.log(error);
                }
            );
        });
    }

    getStatusMessage(status) {
        if (!status) status = "created";
        return getTranslation(status);
    }

    getHtmlLink(){
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