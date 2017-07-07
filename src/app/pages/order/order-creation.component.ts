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
    private activeOrder : Order = null;

    private lockChange: boolean = false;

    private invoiceContact: boolean = false;

    private type: string = "person";
    private foundByMail: boolean = false;
    private foundCustomers : Customer[];
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
                else{
                    this.foundByMail = false;
                    return false;
                }
            })
            .debounceTime(600)
            .subscribe(
                value => {
                    console.log("finding user");
                    this.restServ.getCustomers().subscribe(
                        users => {

                            this.foundCustomers = this.orderSrv.getCustomersByEmail(value, users);
                            console.log(this.foundCustomers);
                            if (this.foundCustomers.length > 0) {
                                this.foundByMail = true;
                                this.userFoundByMail = null;
                                // this.enableCustomerInputs();
                                //this.resetClientInfo();
                            }
                            else {
                                // this.enableCustomerInputs();
                                this.foundByMail = false;

                            }
                        })
                }
            );

        // this.invoiceForm.get('invoice').get('type')
        //     .valueChanges
        //     .subscribe(
        //         value => {
        //             console.log("change type");
        //             this.invoiceForm.get('invoice').get('customerContact').reset();
        //     })
    }

    selectCustomer(customer : Customer){
        console.log(customer);
        this.userFoundByMail = customer;
        this.lockChange = true;
        this.setClientInfo();
        this.lockChange = false;
    }
    createForm() {

        let disabledEmpty = {value: '', disabled: false};
        this.invoiceForm = this.fb.group({

            'description': ['simple desc', Validators.required],
            'assignedTo': [this.loggedUserService.getLoggedInUser().getName(), Validators.required],
            'name': ['name', Validators.required],
            'createdBy': [this.loggedUserService.getLoggedInUser().getName(), Validators.required],
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
                "invoiceNumber": [this.invoiceSrv.generateInvoiceId(), Validators.required],
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
            'newItem': ['',Validators.required],
            'price': ['',Validators.required],
            'unit': ['ks',Validators.required],
            'count': ['',Validators.required],
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

        value.created = new Date();
        value.createdBy = this.loggedUserService.getLoggedInUser();
        value.created = new Date();

        this.activeOrder = value;

        this.showModal = true;

    }

    continueRequest(order : Order){

        this.showModal = false;

        console.log("trying to continue req");
        console.log(order);
        if(order !== null) {
            console.log("saving order");
            this.orderSrv.createOrder(order).subscribe(
                result => {
                    order.invoice = result;
                    this.createEmitter.next(order);
                    this.invoiceForm.reset();
                    this.notificationSrv.success("Nova objednávka bola vytvorena", "Objednávka");
                },
                error => {
                    if (error.status === 401) {
                        this.loginServ.logout();
                    }
                    else{
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