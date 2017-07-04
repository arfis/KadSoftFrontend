import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {BreadcrumbService} from '../../services/breadcrumb.service';
import {Message} from '../../models/message';
import {MessagesService} from '../../services/messages.service';
import {User} from '../../models/user';
import {InvoiceService} from "./invoice.service";
import {Invoice} from "./invoice.model";
import {ActivatedRoute, Router} from "@angular/router";
import {getTranslation} from "./invoiceStatus.model";
import {SortableTable} from "../../widgets/data-table/sortable-table.component";

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
    public bigTotalItems:number = 175;
    public bigCurrentPage:number = 1;
    public numPages:number = 0;

    @Input()
    showList: boolean = true;

    constructor(private msgServ: MessagesService,
                private breadServ: BreadcrumbService,
                private invoiceServ: InvoiceService,
                public router: Router) {
        // TODO
        super();
    }


    public ngOnInit() {
        // setttings the header for the home

        this.invoiceServ.getInvoices().subscribe(
            result => {
                this.totalRecords = result;
                console.log(this.totalRecords);
                this.invoices = result.slice(0, this.maxSize);
                this.bigTotalItems = this.totalRecords.length;
            }
        );
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

        let startingIndex = ((this.currentPage) * this.maxSize);
        this.invoices = this.totalRecords.slice(startingIndex, startingIndex+this.maxSize);
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

        return getTranslation(status);
    }
}
