/**
 * Created by a619678 on 23. 5. 2017.
 */
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfigurationService} from "../../../services/configuration.service";
import {Company} from "../../../models/company-model";
import {NotificationService} from "../../../services/notification.service";
import {RestService} from "../../../services/rest.service";
import {Customer} from "../../customer/user.model";


@Component({
    selector: 'customer-creation',
    styleUrls: ['./customer-create.component.css'],
    templateUrl: './customer-create.component.html'
})

export class CustomerCreation implements OnInit {


    private customerForm: FormGroup;
    private clientFormControlls: any[] = new Array();
    private fixedInputs: any[] = new Array();

    private prices: any[] = new Array();

    private invoiceContact : boolean = false;

    private type = 'company';

    @Output()
    private onAdd = new EventEmitter<Company>();

    constructor(private fb: FormBuilder,
                private configurationService: ConfigurationService,
                private notificationSrv: NotificationService,
                private restServ : RestService) {

        this.createForm();


    }

    ngOnInit() {
        this.createForm();

    }
    createForm() {
        this.customerForm = this.fb.group({
                'ico': [],
                'dic': [],
                'mainContact' : this.fb.group({
                    'name': ['a',Validators.required],
                    'surname': ['a',Validators.required],
                    'postcode': ['a',Validators.required],
                    'telephone': ['0911220883',Validators.required],
                    'country': ['e',Validators.required],
                    'accountNumber': [],
                    'email': ['mail@mail.com',Validators.required],
                    'street': ['dsads',Validators.required],
                    'city': ['',Validators.required],
                    'iban': [],
                    'swift': []
                }),
                'invoiceContact' : {value:this.fb.group({
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
                }),disabled:true},
            })
    }

    get products() {
        return this.customerForm.get('products') as FormArray;
    }


    selectCompany(company) {
        this.configurationService.setCurrentCompany(company);
    }
    
    onSubmit({value}: { value: Customer }) {

        console.log(value);

        this.restServ.addCustomer(value).subscribe(
            result => {
                console.log(result);
                this.notificationSrv.success( "Klient " + value.mainContact.name + " bola vytvoreny", "Klient");
                this.onAdd.next(result);
                // window.alert("Nova faktura bola vytvorena!");
                //this.invoiceForm.reset();
            },
            error => {
                this.notificationSrv.error("Problem pri vytvarani klienta", "Klient");
                console.log(error._body);
                console.log(error);
            }
        )
    }
}