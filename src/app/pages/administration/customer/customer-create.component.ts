/**
 * Created by a619678 on 23. 5. 2017.
 */
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfigurationService} from "../../../services/configuration.service";
import {Company} from "../../../models/company-model";
import {NotificationService} from "../../../services/notification.service";
import {RestService} from "../../../services/rest.service";
import {Customer} from "../../users/user.model";
import {isUndefined} from "util";
import {UserService} from "../../../services/user.service";


@Component({
    selector: 'customer-creation',
    styleUrls: ['./customer-create.component.css'],
    templateUrl: './customer-create.component.html'
})

export class CustomerCreation implements OnInit, OnChanges {


    private customerForm: FormGroup;
    private clientFormControlls: any[] = new Array();
    private fixedInputs: any[] = new Array();

    private prices: any[] = new Array();

    private invoiceContact: boolean = false;

    private type = 'company';

    @Output()
    private onAdd = new EventEmitter<Company>();

    @Input()
    updateCustomer: Customer;

    private edit = false;

    constructor(private fb: FormBuilder,
                private loginSrv : UserService,
                private configurationService: ConfigurationService,
                private notificationSrv: NotificationService,
                private restServ: RestService) {

        this.createForm();


    }

    ngOnInit() {
        this.createForm();

    }

    ngOnChanges(changes: any) {
        if (changes.updateCustomer && !isUndefined(this.updateCustomer)) {
            this.customerForm.patchValue(this.updateCustomer);
            this.edit = true;
        }
        else if (isUndefined(this.updateCustomer)) {
            this.customerForm.reset();
            this.edit = false;
        }
    }

    createForm() {
        this.customerForm = this.fb.group({
            'ico': [],
            'dic': [],
            'mainContact': this.fb.group({
                'name': ['a', Validators.required],
                'surname': ['a', Validators.required],
                'postcode': ['a', Validators.required],
                'telephone': ['0911220883', Validators.required],
                'country': ['e', Validators.required],
                'accountNumber': [],
                'email': ['mail@mail.com', Validators.required],
                'street': ['dsads', Validators.required],
                'city': ['', Validators.required],
                'iban': [],
                'swift': []
            }),
            'invoiceContact': {
                value: this.fb.group({
                    'name': [],
                    'surname': [],
                    'postcode': [],
                    'telephone': [],
                    'country': [],
                    'accountNumber': [],
                    'email': [],
                    'street': [],
                    'city': [],
                    'iban': [],
                    'swift': []
                }), disabled: true
            },
        })
    }

    get products() {
        return this.customerForm.get('products') as FormArray;
    }

    onSubmit({value}: { value: Customer }) {

        if (!this.edit) {
            this.restServ.createCustomer(value).subscribe(
                result => {
                    console.log(result);
                    this.notificationSrv.success("Klient " + value.mainContact.name + " bola vytvoreny", "Klient");
                    this.onAdd.next(result);
                    // window.alert("Nova faktura bola vytvorena!");
                    //this.invoiceForm.reset();
                },
                error => {
                    this.notificationSrv.error("Problem pri vytvarani klienta " + error._body, "Klient");
                    if (error.status === 401){
                        this.loginSrv.logout();
                    }
                }
            )
        } else {
            this.restServ.updateCustomer(value).subscribe(
                result => {
                    console.log(result);
                    this.notificationSrv.success("Klient " + value.mainContact.name + " bola vytvoreny", "Klient");
                    this.onAdd.next(result);
                    // window.alert("Nova faktura bola vytvorena!");
                    //this.invoiceForm.reset();
                },
                error => {
                    this.notificationSrv.error("Problem pri upravovani klienta: " + error._body,
                        "Klient");
                    if (error.status === 401){
                        this.loginSrv.logout();
                    }
                }
            )
        }
    }
}