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
import {getTranslation} from "../invoice/InvoiceStatus.model";
import {SortableTable} from "../../widgets/data-table/sortable-table.component";

@Component({
    selector: 'order',
    styleUrls: ['./order.component.css'],
    templateUrl: './order.component.html'
})
export class OrderComponent extends SortableTable<Order> implements OnChanges,OnInit, OnDestroy {

    public date: Date = new Date();
    public orders : Order[] = null;
    public isFormCollapsed = true;


    public maxSize:number = 10;
    public bigTotalItems:number = 175;
    public bigCurrentPage:number = 1;
    public numPages:number = 0;

    public currentPage : number = 1;

    @Input()
    filteredOrders : Order[];

    constructor(
        private msgServ: MessagesService,
        private breadServ: BreadcrumbService,
        private invoiceServ : InvoiceService,
        private orderServ : OrderService,
        public router: Router
    ) {
        super();
        if(!this.filteredOrders) {

            orderServ.getOrders().subscribe(
                result => {
                    this.totalRecords = result;
                    this.bigTotalItems = result.length;
                }
            );
        }
        else{
            this.totalRecords = this.filteredOrders;
            this.bigTotalItems = this.filteredOrders.length;
        }

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
        this.isFormCollapsed = false;
    }

    getStatusMessage(status){
        return getTranslation(status);
    }

    setActiveRecords() {
        let startingIndex = ((this.currentPage) * this.maxSize);
        this.orders = this.totalRecords.slice(startingIndex, startingIndex+this.maxSize);
    }
}
