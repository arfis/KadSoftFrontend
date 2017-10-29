import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Invoice} from "../../pages/invoice/invoice.model";
import {Order} from "../../pages/order/order.model";
import {InvoiceService} from "../../pages/invoice/invoice.service";
import {OrderService} from "../../pages/order/order.service";
import {NotificationService} from "../../services/notification.service";

@Component({
    selector: 'app-order-stepper',
    templateUrl: './order-stepper.component.html',
    styleUrls: ['./order-stepper.component.css']
})
export class OrderStepperComponent implements OnInit {

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    order: Order;
    invoice: Invoice;
    email: string;

    @Output() createEmitter = new EventEmitter();

    constructor(private _formBuilder: FormBuilder,
                private _invoiceService: InvoiceService,
                private _orderService: OrderService,
                private _notificationService: NotificationService) {
    }

    ngOnInit() {
    }

    orderCreated(order: Order) {
        this.order = order;
    }

    invoiceCreated(invoice: Invoice) {
        this.invoice = invoice;
    }

    emailCreated(email: string) {
        this.email = email;

        this.create();
    }

    create() {
        this.invoice.emailText = this.email;
        this.order.mainContact = this.invoice.customer.mainContact;
        this._orderService.createOrder(this.order).subscribe(
                resultInvoice => {
                    this._notificationService.success('faktura vytvorena','faktura')
                    this.invoice.order = resultInvoice.id;

        this._invoiceService.createInvoice(this.invoice).subscribe(

                    result => {
                        this._notificationService.success('objednavka vytvorena','objednavka');
                        resultInvoice.invoices.push(result);
                        this.createEmitter.emit(resultInvoice);
                    },
                    error => {
                        this._notificationService.error('objednavka nebola vytvorena','objednavka')
                    })
            },
            error => {
                this._notificationService.error('faktura nebola vytvorena','faktura')
            }
        )
    }
}