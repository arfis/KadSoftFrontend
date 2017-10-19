import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {BreadcrumbService} from '../../services/breadcrumb.service';
import {MessagesService} from '../../services/messages.service';
import {InvoiceService} from "./invoice.service";
import {Invoice} from "./invoice.model";
import {Router} from "@angular/router";
import {getTranslation} from "./invoiceStatus.model";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {CustomerService} from "../users/user.service";
import {Observable} from "rxjs/Observable";
import {UserService} from "../../services/user.service";
import {PaginationMetadata} from "../../models/paginationMetadata";

@Component({
    selector: 'invoice',
    styleUrls: ['./invoice.component.css'],
    templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit, OnDestroy {

    public date: Date = new Date();
    public invoices: Invoice[] = null;
    public isFormCollapsed = true;

    public currentPage = 1;
    public pageSize = 10;
    /*
     Pagination parameters
     */

    private paginationInfo = new PaginationMetadata();
    @Input() showList: boolean = true;

    public invoiceTypes = ["Proforma", "Evidenčná", "Zálohová faktúra"];

    constructor(private msgServ: MessagesService,
                private breadServ: BreadcrumbService,
                private invoiceServ: InvoiceService,
                private customerServ: CustomerService,
                public router: Router,
                private loadingBar: SlimLoadingBarService,
                private loginServ: UserService) {
    }


    public ngOnInit() {
        // setttings the header for the home
        this.loadingBar.start(() => {
            console.log("complete");
        });

        //loading all invoices and all customers, so the customers are cached
        Observable.forkJoin(this.invoiceServ.getInvoices(this.currentPage, this.pageSize),
            this.customerServ.getCustomers()).subscribe(
            result => {
                console.log(result[0]);
                this.invoices = result[0].data;
                this.paginationInfo = result[0].meta;
                this.customerServ.setCustomers(result[1]);
                this.loadingBar.complete();
            },
            error => {
                if (error.status === 401) {
                    this.loginServ.logout();
                }
            }
        )

        this.breadServ.set({
            description: 'Invoices',
            display: true,
            header: 'Invoices',
            levels: [
                {
                    icon: 'invoices',
                    link: ['/invoices'],
                    title: 'Invoices'
                }
            ]
        });

    }

    getHtmlLink(invoice: Invoice) {
        return this.invoiceServ.generateHtmlLink(invoice);
    }

    getPdfLink(invoice: Invoice) {
        return this.invoiceServ.generatePdfLink(invoice);
    }

    redirect(invoice: Invoice) {
        console.log("redirecting");
        this.router.navigate(['/invoice/' + invoice.id]);
    }

    public ngOnDestroy() {
        // removing the header
        this.breadServ.clear();
    }

    public toggleForm() {
        this.isFormCollapsed = !this.isFormCollapsed;
    }

    public updateInvoiceList(invoice: Invoice) {
        this.isFormCollapsed = true;
        this.invoices.push(invoice);
    }

    get totalSize() {
        return this.paginationInfo.totalItems;
    }

    pageChanged(event) {
        this.invoiceServ.getInvoices(event.page, this.pageSize).subscribe(
            invoiceEnvelope => {
                this.invoices = invoiceEnvelope.data;
            },
            error => {
                console.log('error');
                console.log(error);
            }
        )
    }

    getStatusMessage(status) {

        if (!status) status = "created";
        return getTranslation(status);
    }
}
