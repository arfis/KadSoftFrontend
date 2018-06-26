/**
 * Created by a619678 on 23. 5. 2017.
 */
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {InvoiceService} from "../invoice/invoice.service";
import {CustomerService} from "../users/user.service";
import {Customer} from "../users/user.model";
import {NotificationService} from "../../services/notification.service";
import {UserService} from "../../services/user.service";
import {Company} from "../../models/company-model";
import {ConfigurationService} from "../../services/configuration.service";
import {RestService} from "../../services/rest.service";
import {Invoice} from "./invoice.model";
import {Order} from "../order/order.model";
import {Configuration, defaultExpirationInDays} from "../../app.constants";

@Component({
    selector: 'invoice-creation',
    styleUrls: ['./invoice-create.component.css'],
    templateUrl: './invoice-create.component.html'
})

export class InvoiceCreation implements OnInit, OnChanges {

    @Output() createEmitter = new EventEmitter<Invoice>();

    @Input() invoice: Invoice;
    @Input() customer;

    currentCompany: Company;

    public invoiceForm: FormGroup;
    public userFoundByMail: Customer;
    public clientFormControlls: any[] = new Array();
    public fixedInputs: any[] = new Array();

    public priceProducts: any[] = new Array();
    public companies: Company[];

    public lockChange: boolean = false;

    public invoiceContact: boolean = false;

    public type: string = "person";
    public foundByMail: boolean = false;
    public foundCustomers: Customer[];
    public units: string[] = ["ks", "liter"];

    public showModal = false;
    public wasPatched = false;
    public products;
    public results=[];

    constructor(private fb: FormBuilder,
                private invoiceSrv: InvoiceService,
                private userSrv: CustomerService,
                private notificationSrv: NotificationService,
                private loggedUserService: UserService,
                private configurationService: ConfigurationService,
                private restServ: RestService,
                private loginServ: UserService) {

        this.createForm();

        //if the company is changed in the service, it is emmited here
        configurationService.currentCompany.subscribe(
            currentCompany => {
                this.currentCompany = currentCompany;

                if (currentCompany.mainContact) {
                    this.invoiceForm.get('companyContact')
                        .patchValue(currentCompany.mainContact);
                }
                this.invoiceForm.get('company').setValue(currentCompany.id);
            }
        )


        restServ.getCompanies().subscribe(
            companies => {
                this.companies = companies;
            },
            error => {
                if (error.status === 401) {
                    this.loginServ.logout();
                }
            }
        );

        restServ.getItems().subscribe(
            products => this.products = products
        )
    }

    ngOnChanges(changes: SimpleChanges): void {

        this.setFormValues();
    }

    ngOnInit() {

        // this.invoiceForm.reset();
        this.createForm();
        this.setFormValues();
    }

    selectCustomer(customer: Customer) {
        this.userFoundByMail = customer;
        this.lockChange = true;
        this.setClientInfo();
        this.lockChange = false;
    }

    resetFoundCustomer() {
        this.userFoundByMail = null;
    }

    search($event) {
        this.results = this.products.filter(product =>
            product.name.indexOf($event.query) > -1
        )
            .map(result => result.name);

    }

    createForm() {

        let disabledEmpty = {value: '', disabled: false};
        this.invoiceForm = this.fb.group({
                'company': [''],
                'companyContact': this.fb.group({
                    'name': [disabledEmpty, Validators.required],
                    'surname': [disabledEmpty, Validators.required],
                    'postcode': [disabledEmpty, Validators.required],
                    'telephone': [disabledEmpty, Validators.required],
                    'country': [disabledEmpty, Validators.required],
                    'accountNumber': [disabledEmpty],
                    'email': [disabledEmpty, Validators.required],
                    'street': [disabledEmpty, Validators.required],
                    'city': [disabledEmpty, Validators.required],
                    'iban': [disabledEmpty],
                    'swift': [disabledEmpty]
                }),
                "expiration": [defaultExpirationInDays, Validators.required],
                "invoiceNumber": [{value: this.invoiceSrv.generateInvoiceId()}, Validators.required],
                'customerId': [disabledEmpty],
                'customer': this.fb.group({
                    'ico': [disabledEmpty],
                    'dic': [disabledEmpty],
                    'icDph': [disabledEmpty],
                    'mainContact': this.fb.group({
                        'name': ['', Validators.required],
                        'surname': ['', Validators.required],
                        'postcode': ['', Validators.required],
                        'telephone': ['', Validators.required],
                        'country': ['', Validators.required],
                        'accountNumber': [''],
                        'email': ['', Validators.required],
                        'street': ['', Validators.required],
                        'city': ['', Validators.required],
                        'iban': [''],
                        'swift': ['']
                    }),
                    'invoiceContact': this.fb.group({
                        'name': [disabledEmpty],
                        'surname': [disabledEmpty],
                        'postcode': [disabledEmpty],
                        'telephone': [disabledEmpty],
                        'country': [disabledEmpty],
                        'accountNumber': [disabledEmpty],
                        'email': [disabledEmpty],
                        'street': [disabledEmpty],
                        'city': [disabledEmpty],
                        'iban': [disabledEmpty],
                        'swift': [disabledEmpty]
                    }),
                }),
                'tax': ['20', Validators.required],
                'invoiceItems': this.fb.array([])
        })

        this.clientFormControlls.push(this.invoiceForm.get('customer')
            .get('mainContact').get('name'));
        this.clientFormControlls.push(this.invoiceForm.get('customer')
            .get('mainContact').get('surname'));
        this.clientFormControlls.push(this.invoiceForm.get('customer')
            .get('mainContact').get('telephone'));

        this.invoiceForm.get('customer').get('mainContact').get('email')
            .valueChanges
            .filter((value: string) => {
                if (value && value.length > 1 && !this.lockChange) {
                    this.disableCustomerInputs();
                    return true;
                }
                else {
                    this.foundByMail = false;
                    return false;
                }
            })
            .debounceTime(200)
            .subscribe(
                value => {
                    this.restServ.getCustomers().subscribe(
                        users => {

                            this.foundCustomers = this.restServ.getCustomersByEmail(value, users);
                            if (this.foundCustomers.length > 0 && !this.wasPatched) {
                                this.foundByMail = true;
                                this.userFoundByMail = null;

                            }
                            else {
                                this.foundByMail = false;
                                this.wasPatched = false;
                            }
                        })
                }
            );
    }

    get invoiceItems() {
        return this.invoiceForm.get('invoiceItems') as FormArray;
    }

    disableFixedInputs() {
        for (let input of this.fixedInputs) {
            input.disable();
        }
    }

    enableFixedInputs() {
        for (let input of this.fixedInputs) {
            input.enable();
        }
    }

    get isCompanyTaxPayer() {
        if (this.currentCompany) {
            return this.currentCompany.vatPayer;
        } else {
            return false;
        }

    }

    getPrice() {
        let sum: number = 0;

        for (let price of this.priceProducts) {
            sum += Number(price.price.value) * Number(price.count.value);
        }

        return sum;
    }

    addProduct() {
        let product = this.fb.group({
            'newItem': ['', Validators.required],
            'price': ['', Validators.required],
            'unit': ['ks', Validators.required],
            'count': ['', Validators.required],
            'contractor': [''],
            'parcel': ['']
        });
        this.invoiceItems.push(
            product
        )

        this.priceProducts.push({price:product.get('price'), count:product.get('count')});
    }

    disableCustomerInputs() {
        for (let clientFormControll of this.clientFormControlls) {
            // clientFormControll.disable();
        }
    }

    enableCustomerInputs() {
        for (let clientFormControll of this.clientFormControlls) {
            // clientFormControll.enable();
        }
    }

    setClientInfo() {

        console.log('patching: ', this.userFoundByMail);
        this.invoiceForm.get('customer')
            .patchValue(this.userFoundByMail);
    }

    removeProduct(index: number) {
        this.invoiceItems.removeAt(index);
        this.priceProducts.splice(index, 1);
    }

    setType(type: string) {
        this.type = type;
    }

    selectCompany(company) {
        if (company && company.id) {
            this.configurationService.setCurrentCompany(company);
            this.restServ.getNextInvoiceNumber(company.id).subscribe(
                result => {
                    this.invoiceForm.get('invoiceNumber').setValue(result.nextInvoiceNumber);
                }
            )
        }
    }

    onSubmit({value}: { value: Invoice }) {

        if (this.userFoundByMail) {
            value.customerId = this.userFoundByMail.id;
        }

        if (this.invoice) {
            value.order = this.invoice.order;
        }

        this.invoice = value;
        if (value.invoiceContact) {
            delete value.invoiceContact.id;
        }

        if (!this.isCompanyTaxPayer) {
            delete value.tax;
        }
        this.createEmitter.next(value);
    }

    setFormValues() {

        if (this.invoiceItems.length < this.invoice.invoiceItems.length) {
            for (let item of this.invoice.invoiceItems) {
                this.addProduct()
            }
        }


        this.invoiceForm.patchValue(this.invoice);

        if (this.customer) {
            this.userFoundByMail = this.customer;
            this.selectCustomer(this.customer);
        }

        this.selectCompany(this.invoice.company);
        this.wasPatched = true;
    }
    switchInvoiceContact() {
        this.invoiceContact = !this.invoiceContact;
    }
}