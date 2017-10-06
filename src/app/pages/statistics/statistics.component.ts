import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderService} from "../order/order.service";
import {InvoiceService} from "../invoice/invoice.service";
import {getInvoiceStatusFromEnum, InvoiceStats, InvoiceStatus, invoiceStatuses} from "../invoice/invoiceStatus.model";
import {Invoice} from "../invoice/invoice.model";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {Order, OrderStats, OrderStatus} from "../order/order.model";
import {DateAdapter, NativeDateAdapter} from "@angular/material";

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit, OnDestroy {

    invoiceData: any;
    orderData: any;
    showChart = false;
    showOrderChart = false;
    hoverBackgroundColor = [
        "#12354d",
        "#4c110c",
        "#4d182f",
        "#4d3f1c",
        "#264f1c"
    ];
    backgroundColor = [
        "#36a2eb",
        "#ff3322",
        "#ff6384",
        "#ffce56",
        "#7aff51"
    ];

    orderHoverBackgroundColor = [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#7aff51"
    ];
    orderBackgroundColor = [
        "#ff6384",
        "#36a2eb",
        "#ffce56",
        "#7aff51"
    ];
    invoices$ : Subscription;
    orders$ : Subscription;
    minDate = new Date(2017, 5, 10);
    maxDate = new Date(2018, 9, 15);
    _bsValue: Date;

    constructor(private _orderSrv: OrderService,
                private _invoiceSrv: InvoiceService) {

        this.orders$ = _orderSrv.getOrders().subscribe(
            result => {
                this.setupOrderStats(result);
            }
        )

        this.invoices$ = _invoiceSrv.getInvoices().subscribe(
            result => {
                this.setupInvoiceStats(result);
            }
        )

    }


    setupOrderStats(orders: Order[]) {

        this.orderData = {
            labels: [   OrderStats.notAssigned,
                        OrderStats.assigned,
                        OrderStats.done,
                        OrderStats.expeded
                    ],
            datasets: [
                {
                    data: [orders.filter(order => order.state === OrderStats.notAssigned).length || orders.length,
                        orders.filter(order => order.state === OrderStats.assigned).length,
                        orders.filter(order => order.state === OrderStats.done).length,
                        orders.filter(order => order.state === OrderStats.expeded).length],
                    hoverBackgroundColor: this.orderHoverBackgroundColor,
                    backgroundColor: this.orderBackgroundColor
                }]
        };

        this.showOrderChart = true;

    }

    setupInvoiceStats(invoices) {
        const created = this.filterInvoices(invoices, InvoiceStatus.created).length;
        const canceled = this.filterInvoices(invoices, InvoiceStatus.canceled).length;
        const expired = this.filterInvoices(invoices, InvoiceStatus.expired).length;
        const latePay = this.filterInvoices(invoices, InvoiceStatus.latePay).length;
        const paid = this.filterInvoices(invoices, InvoiceStatus.payed).length;

        this.invoiceData = {
            labels: [this.getInvoiceStatusText(InvoiceStatus.created),
                this.getInvoiceStatusText(InvoiceStatus.canceled),
                this.getInvoiceStatusText(InvoiceStatus.expired),
                this.getInvoiceStatusText(InvoiceStatus.latePay),
                this.getInvoiceStatusText(InvoiceStatus.payed)],
            datasets: [
                {
                    data: [created, canceled, expired, latePay, paid],
                    hoverBackgroundColor: this.hoverBackgroundColor,
                    backgroundColor: this.backgroundColor
                }]
        };

        this.showChart = true;

    }

    getInvoiceStatusText(status): String{
        return getInvoiceStatusFromEnum(status);
    }

    filterInvoices(invoices, type): Array<Invoice> {
        return invoices.filter(invoice => invoice.status === invoiceStatuses[type]);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.invoices$.unsubscribe();
        this.orders$.unsubscribe();
    }

}
