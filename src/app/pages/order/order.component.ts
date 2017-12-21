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

    public currentPage = 1;
    public pageSize = 10;

    public showModal = false;
    public activeInvoices: Invoice[];

    public invoiceTypes = ["Zálohová faktúra","Doklad o prijati platby","Faktura"];

    public stopChanel = new Subject<number>();

    public sort = "";
    public sortOrientation = "asc";

    @Input()
    filteredOrders: Order[];

    @Input()
    filter = null;

    @Input()
    filterType = null;

    constructor(private msgServ: MessagesService,
                private breadServ: BreadcrumbService,
                private _invoiceServ: InvoiceService,
                private _orderServ: OrderService,
                public router: Router,
                private loadingBar: SlimLoadingBarService) {

    }

    public setActiveOrderForModal(order: Order) {
        this.activeInvoices = order.invoices;
    }


    public ngOnChanges(changes: any) {
        console.log('changes');
        if (changes.filteredOrders) {
            this.getOrders();

        }
    }

    update(filteredOrders) {
        if (filteredOrders) {
            this.orders = filteredOrders.data;
            this.allOrders = filteredOrders.data;
            this.bigTotalItems = filteredOrders.meta.totalItems;
        }
    }


    public ngOnInit() {
        // setttings the header for the home
        this.breadServ.set({
            description: 'Objednavky',
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

        if (!this.filteredOrders) {
            this.loadingBar.start(() => {

            });
            // TODO: check dates
            this.getOrders();
        }
        else {

            this.orders = this.filteredOrders;
            this.bigTotalItems = this.paginationMeta.totalItems;

        }

    }

    private getOrders() {
   Observable.forkJoin(this._orderServ.getOrders(this.currentPage, this.pageSize, null, null, this.filterType, this.filter))
            .takeUntil(this.stopChanel)
            .subscribe(
                result => {
                    this.paginationMeta = result[0].meta;
                    this.orders = result[0].data;
                    this._orderServ.setOrders(result[0].data);
                    this.bigTotalItems = this.paginationMeta.totalItems;

                    this.loadingBar.complete();
                },
                error => {

                },
                () => {
                    this.loadingBar.complete();
                }
            );
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
        this.setActiveRecords();
    }

    pageChanged(event) {
        this.currentPage = event.page;

        // this.setActiveRecords();
    }
    getStatusMessage(status) {
        if (!status) status = "notAssigned";
        return getOrderTranslation(status);
    }

    getInvoiceStatusMessage(status) {

        if (!status) status = "created";
        return getTranslation(status);

    }

    setActiveRecords(type = null) {
        this._orderServ.getOrders(this.currentPage, this.pageSize, this.filterType, this.sortOrientation, this.filter).subscribe(
            result => {
                this.allOrders = result.data;
                this.orders = result.data;
                this.bigTotalItems = this.paginationMeta.totalItems;
            }
        )
    }

    orderBy(type) {
        console.log(this.sort);
        console.log(type);
        console.log(this.sortOrientation);
        if (this.sort === type) {
            this.sortOrientation = (this.sortOrientation === 'asc') ? 'desc' : 'asc';
        } else {
            this.sort = type;
            this.sortOrientation = 'asc';
        }
    }
}
