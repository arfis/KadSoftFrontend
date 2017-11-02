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

@Component({
    selector: 'invoice-creation',
    styleUrls: ['./invoice-create.component.css'],
    templateUrl: './invoice-create.component.html'
})

export class InvoiceCreation implements OnInit, OnChanges {

    @Output() createEmitter = new EventEmitter<Invoice>();
    @Input() invoice: Invoice;

    currentCompany: Company;

    public invoiceForm: FormGroup;
    public userFoundByMail: Customer;
    public clientFormControlls: any[] = new Array();
    public fixedInputs: any[] = new Array();

    public prices: any[] = new Array();
    public companies: Company[];

    public lockChange: boolean = false;

    public invoiceContact: boolean = false;

    public type: string = "person";
    public foundByMail: boolean = false;
    public foundCustomers: Customer[];
    public units: string[] = ["ks", "liter"];

    public showModal = false;

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
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes.invoice);

        this.setFormValues();
    }

    ngOnInit() {

        this.invoiceForm.get('customer').get('mainContact').get('email')
            .valueChanges
            .filter((value: string) => {
                if (value && value.length > 1 && this.type == 'person' && !this.lockChange) {
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
                    console.log('search');
                    this.restServ.getCustomers().subscribe(
                        users => {

                            this.foundCustomers = this.restServ.getCustomersByEmail(value, users);
                            if (this.foundCustomers.length > 0) {
                                this.foundByMail = true;
                                this.userFoundByMail = null;

                            }
                            else {
                                this.foundByMail = false;

                            }
                        })
                }
            );
    }

    selectCustomer(customer: Customer) {
        this.userFoundByMail = customer;
        this.lockChange = true;
        this.setClientInfo();
        this.lockChange = false;
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
                "invoiceNumber": [{value: this.invoiceSrv.generateInvoiceId()}, Validators.required],
                'customerId': [disabledEmpty],
                'customer': this.fb.group({
                    'ico': [disabledEmpty],
                    'dic': [disabledEmpty],
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
                'tax': [disabledEmpty],
                'invoiceItems': this.fb.array([]),
                'variableSymbol': [{value: this.invoiceSrv.generateInvoiceId(), disabled: true},
                    Validators.required]
        })

        this.clientFormControlls.push(this.invoiceForm.get('customer')
            .get('mainContact').get('name'));
        this.clientFormControlls.push(this.invoiceForm.get('customer')
            .get('mainContact').get('surname'));
        this.clientFormControlls.push(this.invoiceForm.get('customer')
            .get('mainContact').get('telephone'));
    }

    get invoiceItems() {
        return this.invoiceForm.get('invoiceItems') as FormArray;
    }

    disableFixedInputs() {
        console.log(this.fixedInputs);
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

        for (let price of this.prices) {
            sum += price.value;
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

        this.prices.push(product.get('price'));
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
        this.invoiceForm.get('customer').get('mainContact')
            .patchValue(this.userFoundByMail.mainContact);
    }

    resetClientInfo() {
        this.invoiceForm.get('customer').get('mainContact')
            .reset();
    }

    removeProduct(index: number) {
        this.invoiceItems.removeAt(index);
        this.prices.splice(index, 1);
    }

    setType(type: string) {
        this.type = type;
    }

    selectCompany(company) {
        this.configurationService.setCurrentCompany(company);
        this.restServ.getNextInvoiceNumber(company.id).subscribe(
            result => {
                this.invoiceForm.get('invoiceNumber').setValue(result.nextInvoiceNumber);
                this.invoiceForm.get('variableSymbol').setValue(result.nextInvoiceNumber);
            },
            error => console.log(error)
        )
    }

    onSubmit({value}: { value: Invoice }) {
        console.log('found user id: ');
        console.log(this.userFoundByMail.id);
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
        console.log(value);
        this.createEmitter.next(value);
    }

    continueRequest(value: Invoice) {

        this.showModal = false;

        this.invoiceSrv.createInvoice(value).subscribe(
            result => {
                // order.invoices = new Array();
                // order.invoices.push(result);

                this.invoiceForm.reset();
                this.notificationSrv.success("Nova faktura bola vytvorena", "Faktura");
                this.createForm();

                this.createEmitter.next(result);
            },
            error => {
                if (error.status === 401) {
                    this.loginServ.logout();
                }
                else {
                    this.notificationSrv.error("Nova faktura nebola vytvorena", "Faktura");
                    console.log(error);
                }
            }
        )


        this.showModal = true;

    }

    setFormValues() {

        if (this.invoiceItems.length < this.invoice.invoiceItems.length) {
            for (let item of this.invoice.invoiceItems) {
                this.addProduct()
            }
        }

        this.invoiceForm.patchValue(this.invoice);
    }
    switchInvoiceContact() {
        this.invoiceContact = !this.invoiceContact;
        console.log(this.invoiceContact);
    }
}