import {
    Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
    ViewChild
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Invoice} from "../../pages/invoice/invoice.model";
import {Order} from "../../pages/order/order.model";
import {InvoiceService} from "../../pages/invoice/invoice.service";
import {OrderService} from "../../pages/order/order.service";
import {NotificationService} from "../../services/notification.service";
import {Product} from "../../models/Product";
import {Router} from "@angular/router";
import {Customer} from '../../pages/users/user.model';

@Component({
    selector: 'app-order-stepper',
    templateUrl: './order-stepper.component.html',
    styleUrls: ['./order-stepper.component.css']
})
export class OrderStepperComponent implements OnInit, OnChanges {

    isLinear = true;
    orderFormGroup: FormGroup;
    invoiceFormGroup: FormGroup;

    architectOrder = false;
    invoice: Invoice = new Invoice();
    email: string;
    wasTypeSelected = false;
    askForType = false;

    @Input() duplicate: boolean = false;
    @Input() order: Order;
    @Input() customer: Customer;
    @Output() createEmitter = new EventEmitter();

    @ViewChild('stepper') stepper;

    constructor(private _invoiceService: InvoiceService,
                private _orderService: OrderService,
                private _notificationService: NotificationService,
                private router: Router) {
    }

    ngOnChanges(changes: SimpleChanges): void {

        if (this.order) {
            console.log('order: ', this.order);
            const {id} = this.order.invoices[0];
            this._invoiceService.getInvoice(id).subscribe(
              result => {
                  this.invoice = result;
              }
            )
        }
    }

    ngOnInit() {
        if (this.order) {
           this.setUpInvoiceData();
        }
    }

    orderFormChanged(form) {
        this.orderFormGroup = form;
    }

    invoiceFormChanged(form) {
        this.invoiceFormGroup = form;
    }

    orderCreated(order: Order) {
        if (this.order && !this.duplicate) {
            order.id = this.order.id;
            delete order.survey;
            
            if (this.order.mainContact) {
                order.mainContact = this.order.mainContact;
                delete order.mainContact.id;
            }
            
            this._orderService.updateOrder(order).subscribe(
                result => {
                    this.order = result;
                    this._notificationService.success('bola uspesne upravena', 'objednavka');
                },
                error => {
                    this._notificationService.error('nebola uspesne upravena', 'objednavka');
                }
            )
        } else {
            this.order = order;
        }

        this.scrollUp();
    }

    invoiceCreated(invoice: Invoice) {
        this.invoice = invoice;
        this.scrollUp();
    }

    emailCreated(email: string) {
        this.email = email;

        this.create();
    }

    setUpInvoiceData() {
        this.invoice = new Invoice();

        console.log(this.order);
        if (this.order.mainContact) {
            this.invoice.customer.mainContact = this.order.mainContact;
        }
        if (this.order.invoiceContact) {
            this.invoice.customer.invoiceContact = this.order.invoiceContact;
        }
        let item1 = 'ECB pre RD v PDF + tlačenej forme - do 6 dní u Vás - 98 EUR';
        let item2 = 'tepelnotechnické, resp. energetické posúdenie pre RD (od 1.1.2016 musí byť v ener. triede A) - 109 EUR';

        if (this.order.energyCertificatesCount) {
            let product1 = new Product();
            product1.count = this.order.energyCertificatesCount;
            product1.newItem = item1;
            product1.price = 98;
            this.invoice.invoiceItems.push(product1);
        }
        if (this.order.energyAuditsCount) {
            let product2 = new Product();
            product2.count = this.order.energyAuditsCount;
            product2.newItem = item2;
            product2.price = 109;
            this.invoice.invoiceItems.push(product2);
        }

        this.invoice.order = this.order.id;
    }


    create() {
        console.log('create');
        if (this.order) {
            if (this.order.state && this.order.state === 'draft') {
                this.createInvoice(this.order);
            } else {
                this.createOrderAndInvoice();
            }
        }
    }

    createOrderAndInvoice() {

        delete this.order.survey;
        this.order.architect = this.architectOrder;
        this.order.mainContact = this.invoice.customer.mainContact;

        this._orderService.createOrder(this.order).subscribe(
            resultInvoice => {
                this._notificationService.success('objednavka vytvorena', 'objednavka')
                this.createInvoice(resultInvoice);
            },
            error => {
                this._notificationService.error('objednavka nebola vytvorena', 'objednavka')
            }
        )
    }

    createInvoice(order) {
        this.invoice.order = order.id;
        this.invoice.emailText = this.email;
        this._invoiceService.createInvoice(this.invoice).subscribe(

            result => {
                this._notificationService.success('faktura vytvorena','faktura');
                order.invoices.push(result);
                this.createEmitter.emit(order);
                this.router.navigate([`/order/${order.id}`]);
            },
            error => {
                this._notificationService.error('faktura nebola vytvorena','faktura')
            })
    }

    scrollUp() {
        window.scrollTo(0,0);
    }
}