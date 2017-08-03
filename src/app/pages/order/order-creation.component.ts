/**
 * Created by a619678 on 23. 5. 2017.
 */
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

@Component({
    selector: 'order-creation',
    styleUrls: ['./order-creation.component.css'],
    templateUrl: './order-creation.component.html'
})

export class OrderCreationComponent implements OnInit {

    @Output()
    createEmitter = new EventEmitter<Order>();
    currentCompany: Company;

    private invoiceForm: FormGroup;
    private userFoundByMail: Customer;
    private clientFormControlls: any[] = new Array();
    private fixedInputs: any[] = new Array();

    private prices: any[] = new Array();
    private companies: Company[];
    private activeOrder: Order = null;

    private lockChange: boolean = false;

    private invoiceContact: boolean = false;

    private type: string = "person";
    private foundByMail: boolean = false;
    private foundCustomers: Customer[];
    private units: string[] = ["ks", "liter"];

    private showModal = false;

    constructor(private fb: FormBuilder,
                private invoiceSrv: InvoiceService,
                private userSrv: CustomerService,
                private notificationSrv: NotificationService,
                private loggedUserService: UserService,
                private configurationService: ConfigurationService,
                private orderSrv: OrderService,
                private restServ: RestService,
                private loginServ: UserService) {

        this.createForm();

        //if the company is changed in the service, it is emmited here
        configurationService.currentCompany.subscribe(
            currentCompany => {
                this.currentCompany = currentCompany;

                if (currentCompany.mainContact) {
                    this.invoiceForm.get('invoice').get('companyContact')
                        .patchValue(currentCompany.mainContact);
                }
                this.invoiceForm.get('invoice').get('company').setValue(currentCompany.id);
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

    ngOnInit() {

        this.invoiceForm.get('invoice').get('customer').get('mainContact').get('email')
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
                    this.restServ.getCustomers().subscribe(
                        users => {

                            this.foundCustomers = this.orderSrv.getCustomersByEmail(value, users);
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

            'text': ['simple desc', Validators.required],
            'assignedTo': [{
                value: this.loggedUserService.getLoggedInUser().getName(),
                disabled: true
            }, Validators.required],
            'name': [{value: 'name', disabled: true}, Validators.required],
            'createdBy': [{
                value: this.loggedUserService.getLoggedInUser().getName(),
                disabled: true
            }, Validators.required],
            // 'status': [InvoiceStatus.created, Validators.required],
            'invoice': this.fb.group({
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
                'customerId': [],
                'customer': this.fb.group({
                    'ico': [],
                    'dic': [],
                    'mainContact': this.fb.group({
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
                'invoiceItems': this.fb.array([]),
                'variableSymbol': [{value: this.invoiceSrv.generateInvoiceId(), disabled: true},
                    Validators.required]
            })
        })

        this.clientFormControlls.push(this.invoiceForm.get('invoice').get('customer')
            .get('mainContact').get('name'));
        this.clientFormControlls.push(this.invoiceForm.get('invoice').get('customer')
            .get('mainContact').get('surname'));
        this.clientFormControlls.push(this.invoiceForm.get('invoice').get('customer')
            .get('mainContact').get('telephone'));
    }

    get invoiceItems() {
        return this.invoiceForm.get('invoice').get('invoiceItems') as FormArray;
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
        this.invoiceForm.get('invoice').get('customer').get('mainContact')
            .patchValue(this.userFoundByMail.mainContact);
    }

    resetClientInfo() {
        this.invoiceForm.get('invoice').get('customer').get('mainContact')
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
        console.log("selecting company");
        this.configurationService.setCurrentCompany(company);

        this.restServ.getNextInvoiceNumber(company.id).subscribe(
            result => {
                this.invoiceForm.get('invoice').get('invoiceNumber').setValue(result.nextInvoiceNumber);
                this.invoiceForm.get('invoice').get('variableSymbol').setValue(result.nextInvoiceNumber);
            },
            error => console.log(error)
        )
    }

    onSubmit({value}: { value: Order }) {

        // value.created = new Date();
        // value.createdBy = this.loggedUserService.getLoggedInUser();
        // value.created = new Date();

        console.log("value:");
        console.log(value);

        this.activeOrder = value;

        this.showModal = true;

    }

    continueRequest(order: Order) {

        this.showModal = false;

        console.log("trying to continue req");
        console.log(order);
        if (order !== null) {
            console.log("saving order");
            console.log(order);

            let invoice = order.invoice;

            delete order.invoice;

            invoice.customerId = this.userFoundByMail.id;
            // there is no data about the main contact in the form yet
            order.mainContact = invoice.customer.mainContact;
            this.orderSrv.createOrder(order).subscribe(
                order => {

                    invoice.order = order.id;
                    this.notificationSrv.success("Nova objednavka bola vytvorena", "Objednavka");

                    this.invoiceSrv.createInvoice(invoice).subscribe(
                        result => {
                            order.invoices = new Array();
                            order.invoices.push(result);

                            this.invoiceForm.reset();
                            this.notificationSrv.success("Nova faktura bola vytvorena", "Faktura");
                            this.createForm();

                            this.createEmitter.next(order);
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

                },
                error => {
                    if (error.status === 401) {
                        this.loginServ.logout();
                    }
                    else {
                        console.log(error);
                        this.notificationSrv.error("Nova objednávka nebola vytvorena", "Objednávka");
                    }
                }
            )
        }
    }

    switchInvoiceContact() {
        this.invoiceContact = !this.invoiceContact;
        console.log(this.invoiceContact);
    }
}