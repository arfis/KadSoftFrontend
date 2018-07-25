import {
    Component,
    OnInit,
    OnDestroy,
    Input,
    OnChanges,
    ViewChild,
    ChangeDetectorRef,
    AfterViewInit
} from '@angular/core';
import {BreadcrumbService} from '../../services/breadcrumb.service';
import {MessagesService} from '../../services/messages.service';
import {ActivatedRoute, Router} from "@angular/router";
import {getOrderTranslation, Order, orderStatesConst, OrderStatus} from "./order.model";
import {OrderService} from "./order.service";
import {InvoiceService} from "../invoice/invoice.service";
import {getTranslation, invoiceStatesConst, InvoiceStatus, invoiceStatuses} from "../invoice/invoiceStatus.model";
import {SortableTable} from "../../widgets/data-table/sortable-table.component";
import {Observable} from "rxjs/Observable";
import {Invoice} from "../invoice/invoice.model";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {Subject} from "rxjs/Subject";
import {PaginationMetadata} from "../../models/paginationMetadata";
import { DatePipe } from '@angular/common';
import {any} from 'codelyzer/util/function';
import {Store} from '@ngrx/store';
import {getOrders, State} from '../../app.reducer';
import {GetOrdersAction} from '../../shared/order/order.actions';
import * as fromRoot from "../../app.reducer";
import { MatPaginator, MatSort } from "@angular/material";
import { OrderTableDataSource } from "../../component/table/order-table-data-source";
import { fromEvent } from "rxjs/observable/fromEvent";

@Component({
    selector: 'order',
    styleUrls: ['./order.component.css'],
    templateUrl: './order.component.html'
})

export class OrderComponent implements OnChanges, OnInit, OnDestroy, AfterViewInit {

    public date: Date = new Date();
    public orders: Order[] = new Array();
    private allOrders: Order[];
    public isFormCollapsed = true;
    private paginationMeta: PaginationMetadata;

    public maxSize: number = 20;
    public bigTotalItems: number = 0;
    public bigCurrentPage: number = 1;
    public numPages: number = 0;
    public keyword;

    public currentPage = 1;
    public pageSize = 20;

    public activeInvoices: Invoice[];

    public sortOrientation = "asc";
    activeFilter;
    filterUser;
    webOnly;
    architect;
    length;
    loading;

    @Input() filteredOrders: Order[];
    @Input() filter = null;
    @Input() filterType = null;
    @Input() customer;

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('filter') filterInput;

    dataSource;
    displayedColumns = ['createdBy', 'status', 'invoice', 'name', 'description', 'price',  'assignedTo', 'createdAt', 'updatedAt']

    constructor(private msgServ: MessagesService,
                private breadServ: BreadcrumbService,
                public router: Router,
                public store: Store<State>,
                private ref: ChangeDetectorRef) {

    }

    ngAfterViewInit() {
        console.log('init');

        fromEvent(this.filterInput.nativeElement, 'keyup')
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(() => {
                console.log('hhereeeeee');
                if (!this.dataSource) {
                    return;
                }
                this.dataSource.filter = this.filterInput.nativeElement.value;
                this.paginator.firstPage();
            })
    }

    public setActiveOrderForModal(order: Order) {
        this.activeInvoices = order.invoices;
    }


    public ngOnChanges(changes: any) {
        if (changes.filteredOrders) {
            console.log('CANGEEES AND GETTING ORDERS');
            this.getOrders();
        }
    }

    updateTableParams(params) {
        console.log('update params', params);
        this.dataSource.params = params;
    }

    onRowClick(id) {
        console.log('asa');
        this.router.navigate([`/order/${id}`])
    }
    public ngOnInit() {
        console.log('init withh customer', this.customer);
        this.dataSource = new OrderTableDataSource(this.sort, this.paginator, this.store, this.customer);
        this.store.select(fromRoot.getOrders).subscribe(
            result => {
                this.length = result.meta.totalItems;
            }
        )

        this.store.select(fromRoot.areOrdersLoading).subscribe(
            loading => this.loading = loading
        )

        // setttings the header for the home
        this.breadServ.set({
            description: 'Objednavky',
            createLink: '/create',
            display: true,
            header: 'Objednavky',
            levels: [
                {
                    icon: 'order',
                    link: ['/orders'],
                    title: 'Objednavky'
                }
            ]
        });
    }

    search(keyword) {
        this.keyword = keyword;
        //this.getOrders();
    }

    private getOrders() {
        console.log('HEREEE: getting orders ', this.filter, this.filterType, this.webOnly);

        this.store.dispatch(new GetOrdersAction(
            {
                page: this.currentPage,
                pageSize: this.pageSize,
                filter: this.filter,
                filterType: this.filterType,
                activeFilter: this.activeFilter,
                keyword: this.keyword,
                sort: this.sort,
                sortOrientation: this.sortOrientation,
                user: this.filterUser,
                webOnly: this.webOnly,
                architect: this.architect
            }))
    }

    public ngOnDestroy() {
        // removing the header
        this.breadServ.clear();
    }

    public toggleForm() {
        this.isFormCollapsed = !this.isFormCollapsed;
    }

    public updateOrderList(order: Order) {
        this.isFormCollapsed = true;
        this.orders.push(order);
    }

    pageChanged(event) {
        this.currentPage = event.page;
        this.getOrders();
    }



    setNumberOfPages(pages) {
        console.log(pages, this.bigTotalItems, this.maxSize);
        this.numPages = pages;
    }

    orderBy(type) {
        if (this.sort === type) {
            this.sortOrientation = (this.sortOrientation === 'asc') ? 'desc' : 'asc';
        } else {
            this.sort = type;
            this.sortOrientation = 'asc';
        }

        this.getOrders();
    }
}
