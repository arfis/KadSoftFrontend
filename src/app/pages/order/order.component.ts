import {Component, OnInit, OnDestroy, Input, OnChanges} from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { Message } from '../../models/message';
import { MessagesService } from '../../services/messages.service';
import { User } from '../../models/user';
import {ActivatedRoute, Router} from "@angular/router";
import {Order} from "./order.model";
import {OrderService} from "./order.service";
import {InvoiceService} from "../invoice/invoice.service";
import {InvoiceCreation} from "../invoice/invoice-create.component";
import {getTranslation, InvoiceStatus} from "../invoice/invoiceStatus.model";
import {SortableTable} from "../../widgets/data-table/sortable-table.component";
import {Observable} from "rxjs/Observable";
import {Invoice} from "../invoice/invoice.model";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";

@Component({
    selector: 'order',
    styleUrls: ['./order.component.css'],
    templateUrl: './order.component.html'
})
export class OrderComponent extends SortableTable<Order> implements OnChanges,OnInit, OnDestroy {

    public date: Date = new Date();
    public orders : Order[] = new Array();
    public isFormCollapsed = true;


    public maxSize:number = 10;
    public bigTotalItems:number = 0;
    public bigCurrentPage:number = 1;
    public numPages:number = 0;

    public currentPage : number = 1;

    public showModal = false;
    public activeInvoices : Invoice[];

    public invoiceTypes = ["Zálohová faktúra","Ostrá faktúra","Posledná faktúra"];

    @Input()
    filteredOrders : Order[];

    constructor(
        private msgServ: MessagesService,
        private breadServ: BreadcrumbService,
        private invoiceServ : InvoiceService,
        private orderServ : OrderService,
        public router: Router,
        private loadingBar : SlimLoadingBarService
    ) {
        super();

        this.setOrders(this.orderServ.getCachedOrders());

        if (!this.filteredOrders) {
            this.loadingBar.start(()=>{
                console.log("complete");
            });
            Observable.forkJoin(orderServ.getOrders(),this.invoiceServ.getInvoices()).subscribe(
                result => {
                    this.setOrders(result[0]);
                    this.orderServ.setOrders(result[0]);
                    this.invoiceServ.setInvoices(result[1]);
                    this.getFirstRecords();
                },
                error =>{
                    console.log(error);
                },
                () =>{
                    this.loadingBar.complete();
                }
            );
        }
        else {
            this.totalRecords = this.filteredOrders;
            this.bigTotalItems = this.filteredOrders.length;
        }

    }

    public setActiveOrderForModal(order : Order){
        this.activeInvoices = order.invoices;
    }

    public setOrders(orders : Order[]){
        this.totalRecords = orders;
        this.bigTotalItems = orders.length;
        this.getFirstRecords();
    }

    public ngOnChanges(changes : any){
        if(changes.filteredOrders){
            this.totalRecords = this.filteredOrders;
            this.bigTotalItems = this.filteredOrders.length;
            this.getFirstRecords();
        }
    }

    private getFirstRecords(){
        this.orders = this.totalRecords.slice(0, this.maxSize);
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

    public toggleForm(){
        this.isFormCollapsed = !this.isFormCollapsed;
    }

    public updateOrderList(order : Order){
        console.log("Created order: ");
        console.log(order);
        this.isFormCollapsed = false;
    }

    getStatusMessage(status){
        if(!status) status = InvoiceStatus.created;
        return getTranslation(status);
    }

    setActiveRecords() {
        let startingIndex = ((this.currentPage) * this.maxSize);
        this.orders = this.totalRecords.slice(startingIndex, startingIndex+this.maxSize);
    }
}
