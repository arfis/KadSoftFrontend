import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {BreadcrumbService} from '../../services/breadcrumb.service';
import {Message} from '../../models/message';
import {MessagesService} from '../../services/messages.service';
import {User} from '../../models/user';
import {InvoiceService} from "./invoice.service";
import {Invoice} from "./invoice.model";
import {ActivatedRoute, Router} from "@angular/router";
import {getTranslation, InvoiceStatus} from "./invoiceStatus.model";
import {SortableTable} from "../../widgets/data-table/sortable-table.component";
import {RestService} from "../../services/rest.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {CustomerService} from "../users/user.service";
import {Observable} from "rxjs/Observable";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'invoice',
    styleUrls: ['./invoice.component.css'],
    templateUrl: './invoice.component.html'
})
export class InvoiceComponent extends SortableTable<Invoice> implements OnInit, OnDestroy {

    public date: Date = new Date();
    public invoices: Invoice[] = null;
    public isFormCollapsed = true;

    /*
    Pagination parameters
     */
    public maxSize:number = 10;
    public bigTotalItems:number = 0;
    public bigCurrentPage:number = 1;
    public numPages:number = 0;

    @Input()
    showList: boolean = true;

    constructor(private msgServ: MessagesService,
                private breadServ: BreadcrumbService,
                private invoiceServ: InvoiceService,
                private customerServ : CustomerService,
                public router: Router,
                private loadingBar : SlimLoadingBarService,
                private loginServ : UserService) {
        // TODO
        super();
    }


    public ngOnInit(){
        // setttings the header for the home
        this.loadingBar.start(()=>{
            console.log("complete");
        });

        this.totalRecords = this.invoiceServ.getCachedInvoices();
        this.setActiveRecords();

        //loading all invoices and all customers, so the customers are cached
        Observable.forkJoin(this.invoiceServ.getInvoices(),
                            this.customerServ.getCustomers()).subscribe(
            result=>{
                console.log(result[0]);
                this.totalRecords = result[0];
                this.invoiceServ.setInvoices(this.totalRecords);
                this.customerServ.setCustomers(result[1]);
                this.setActiveRecords();
                this.loadingBar.complete();
            },
            error=>{
                if (error.status === 401){
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

    setActiveRecords(){

        this.bigTotalItems = this.totalRecords.length;
        let startingIndex = ((this.currentPage) * this.maxSize);
        console.log(startingIndex);
        console.log(this.maxSize);
        this.invoices = this.totalRecords.slice(startingIndex,
            this.bigTotalItems < this.maxSize ? this.bigTotalItems : startingIndex+this.maxSize);

        console.log("invoices");
        console.log(this.invoices);
        console.log(this.totalRecords);

        for (let invoice of this.invoices){
            invoice.totalPrice = 0;
            for (let product of invoice.invoiceItems) {
                invoice.totalPrice += ( product.price * product.count);
            }
        }
    }

    getHtmlLink(invoice : Invoice){
        return this.invoiceServ.generateHtmlLink(invoice);
    }

    getPdfLink(invoice : Invoice){
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

    getStatusMessage(status) {

        if(!status) status = "created";
        return getTranslation(status);
    }
}
