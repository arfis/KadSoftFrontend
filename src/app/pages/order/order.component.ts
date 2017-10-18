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

@Component({
    selector: 'order',
    styleUrls: ['./order.component.css'],
    templateUrl: './order.component.html'
})

export class OrderComponent extends SortableTable<Order> implements OnChanges, OnInit, OnDestroy {

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

    public invoiceTypes = ["Proforma", "Evidenčná", "Zálohová faktúra"];

    public stopChanel = new Subject<number>();

    @Input()
    filteredOrders: Order[];

    constructor(private msgServ: MessagesService,
                private breadServ: BreadcrumbService,
                private _invoiceServ: InvoiceService,
                private _orderServ: OrderService,
                public router: Router,
                private loadingBar: SlimLoadingBarService) {
        super();

        if (!this.filteredOrders) {
            this.loadingBar.start(() => {

            });
            
            Observable.forkJoin(_orderServ.getOrders(this.currentPage, this.pageSize), this._invoiceServ.getInvoices())
                .takeUntil(this.stopChanel)
                .subscribe(
                    result => {
                        this.paginationMeta = result[0].meta;
                        this.orders = result[0].data;
                        this._orderServ.setOrders(result[0].data);
                        this._invoiceServ.setInvoices(result[1]);
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
        else {

            this.totalRecords = this.filteredOrders;
            this.bigTotalItems = this.paginationMeta.totalItems;

        }

    }

    public setActiveOrderForModal(order: Order) {
        this.activeInvoices = order.invoices;
    }

    // public setOrders(orders: Order[]) {
    //     this.allOrders = orders;
    //     this.totalRecords = orders;
    //     this.bigTotalItems = this.paginationMeta.totalItems;
    //
    // }

    public ngOnChanges(changes: any) {
        console.log('changes');
        if (changes.filteredOrders) {
            this.stopChanel.next(1);
            this.totalRecords = this.filteredOrders;
            this.bigTotalItems = this.paginationMeta.totalItems;
        }
    }

    update(event) {
        this.totalRecords = event;
    }


    public ngOnInit() {
        // setttings the header for the home
        this.breadServ.set({
            description: 'Orders',
            display: true,
            header: 'Orders',
            levels: [
                {
                    icon: 'order',
                    link: ['/orders'],
                    title: 'Orders'
                }
            ]
        });

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
        this.totalRecords.push(order);
        this.setActiveRecords();
    }

    getStatusMessage(status) {
        if (!status) status = "notAssigned";
        return getOrderTranslation(status);
    }

    getInvoiceStatusMessage(status) {

        if (!status) status = "created";
        return getTranslation(status);

    }

    setActiveRecords() {
        console.log('set active records');
        this._orderServ.getOrders(this.currentPage + 1, this.pageSize).subscribe(
            result => {
                this.allOrders = result.data;
                this.orders = result.data;
                this._orderServ.setOrders(result.data);
                this.bigTotalItems = this.paginationMeta.totalItems;
            }
        )
    }

    totalPrice(orderId: number){ this._invoiceServ.getInvoice(orderId).totalPrice}

}
