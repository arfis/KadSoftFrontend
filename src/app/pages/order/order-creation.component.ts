/**
 * Created by a619678 on 23. 5. 2017.
 */
import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {InvoiceService} from "../invoice/invoice.service";
import {InvoiceStatus} from "../invoice/invoiceStatus.model";
import {Invoice} from "../invoice/invoice.model";
import {CustomerService} from "../users/user.service";
import {Customer} from "../users/user.model";
import {NotificationService} from "../../services/notification.service";
import {UserService} from "../../services/user.service";
import {Company} from "../../models/company-model";
import {ConfigurationService} from "../../services/configuration.service";
import {Order} from "./order.model";
import {OrderService} from "./order.service";
import {RestService} from "../../services/rest.service";
import {Contact} from "../../models/contact.model";
import {Product} from "../../models/Product";

@Component({
    selector: 'order-creation',
    styleUrls: ['./order-creation.component.css'],
    templateUrl: './order-creation.component.html'
})

export class OrderCreationComponent {

    @Output() invoiceCreatedEmitted = new EventEmitter();
    @Input() order;
    @Input() duplicate;
    @Input() customer;

    invoiceCreated(order) {
        this.invoiceCreatedEmitted.emit(order);
    }
}