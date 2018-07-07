import {Component, OnInit, OnDestroy, Input, OnChanges} from '@angular/core';
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

@Component({
    selector: 'order',
    styleUrls: ['./order.component.css'],
    templateUrl: './order.component.html'
})

export class OrderComponent implements OnChanges, OnInit, OnDestroy {

    public date: Date = new Date();
    public orders: Order[] = new Array();
    private allOrders: Order[];
    public isFormCollapsed = true;
    private paginationMeta: PaginationMetadata;

    public maxSize: number = 10;
    public bigTotalItems: number = 0;
    public bigCurrentPage: number = 1;
    public numPages: number = 0;
    public keyword;

    public currentPage = 1;
    public pageSize = 10;

    public showModal = false;
    public activeInvoices: Invoice[];

    public invoiceTypes = ["Zálohová faktúra","Doklad o prijati platby","Faktura"];

    public stopChanel = new Subject<number>();

    public sort = "";
    public sortOrientation = "asc";
    activeFilter;
    filterUser;
    webOnly;
    architect;

    @Input() filteredOrders: Order[];
    @Input() filter = null;
    @Input() filterType = null;
    @Input() customer;

    constructor(private msgServ: MessagesService,
                private breadServ: BreadcrumbService,
                public router: Router,
                public store: Store<State>) {

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

    update(filteredOrders) {
        console.log('UPDATEEEEE');
        if (filteredOrders) {
            this.filter = filteredOrders.filter;
            this.filterType = filteredOrders.filterType;
            this.activeFilter = filteredOrders.activeFilter;
            this.filterUser = filteredOrders.user;
            this.webOnly = filteredOrders.webOnly;
            this.architect = filteredOrders.architect;
        }

        this.getOrders();
    }


    public ngOnInit() {
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

        this.store.select(getOrders).subscribe(
            orders => {
                const {data, meta} = orders;
                if (data && meta) {
                    console.log('orders ', orders);
                    this.orders = orders.data;
                    this.paginationMeta = orders.meta;
                    this.bigTotalItems = this.paginationMeta.totalItems;
                }
            }
        )

            // TODO: check dates
            this.getOrders();
    }
    search(keyword) {
        this.keyword = keyword;
        this.getOrders();
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
        console.log('page changed');
        this.getOrders();
    }
    getStatusMessage(status) {
        if (!status) status = "notAssigned";
        return getOrderTranslation(status);
    }

    getInvoiceStatusMessage(status) {

        if (!status) status = "created";
        return getTranslation(status);

    }

    orderBy(type) {
        console.log('TYPEEEEE: ', type);
        if (this.sort === type) {
            this.sortOrientation = (this.sortOrientation === 'asc') ? 'desc' : 'asc';
        } else {
            this.sort = type;
            this.sortOrientation = 'asc';
        }

        this.getOrders();
    }
}
