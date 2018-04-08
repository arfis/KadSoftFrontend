import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {BreadcrumbService} from '../../services/breadcrumb.service';
import {MessagesService} from '../../services/messages.service';
import {InvoiceService} from "./invoice.service";
import {Invoice} from "./invoice.model";
import {Router} from "@angular/router";
import {getTranslation} from "./invoiceStatus.model";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {CustomerService} from "../users/user.service";
import {UserService} from "../../services/user.service";
import {PaginationMetadata} from "../../models/paginationMetadata";
import {Store} from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import {GET_INVOICES, GetInvoicesAction} from '../../shared/invoice/invoice.actions';
import {Observable} from 'rxjs/Observable';
import {select} from '@ngrx/core';
import {MatDialog} from '@angular/material';
import {CreditNoteDialogComponent} from '../../component/credit-note-dialog/credit-note-dialog.component';

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
    public sort: string;
    public sortOrientation: string;
    public filter: string;
    public filterType: string;

    /*
     Pagination parameters
     */

    private paginationInfo = new PaginationMetadata();
    @Input() showList: boolean = true;

    public invoiceTypes = ["Zálohová faktúra", "Doklad o prijati platby", "Faktura"];

    constructor(private breadServ: BreadcrumbService,
                private invoiceServ: InvoiceService,
                public router: Router,
                private loadingBar: SlimLoadingBarService,
                private store: Store<fromRoot.State>) {
    }


    public ngOnInit() {
        // setttings the header for the home
        this.loadingBar.start(() => {
        });

        this.store.dispatch(new GetInvoicesAction(
            {
                currentPage: this.currentPage,
                pageSize: this.pageSize
            }
        ));

        this.store.select(fromRoot.getInvoices).subscribe(
            result => {
                const {data, meta} = result;
                if (data && meta) {
                    this.invoices = data;
                    this.paginationInfo = meta;
                    this.loadingBar.complete();
                }
            }
        )

        this.breadServ.set({
            description: 'Faktury',
            display: true,
            header: 'Faktury',
            levels: [
                {
                    icon: 'invoices',
                    link: ['/invoices'],
                    title: 'Faktury'
                }
            ]
        });

    }

    update(filteredInvoices) {
        if (filteredInvoices) {
            this.invoices = filteredInvoices.data;
            this.paginationInfo.totalItems = filteredInvoices.meta.totalItems;
        }
    }

    getHtmlLink(invoice: Invoice) {
        return this.invoiceServ.generateHtmlLink(invoice);
    }

    getPdfLink(invoice: Invoice) {
        return this.invoiceServ.generatePdfLink(invoice);
    }

    redirect(invoice: Invoice) {
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
        this.store.dispatch(new GetInvoicesAction(
            {
                currentPage: event.page,
                pageSize: this.pageSize
            }
        ));
    }

    getStatusMessage(status) {

        if (!status) status = "created";
        return getTranslation(status);
    }
}
