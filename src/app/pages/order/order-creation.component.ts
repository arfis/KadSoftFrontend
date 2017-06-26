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

    public radioModel: string = 'Middle';

    constructor(private fb: FormBuilder,
                private invoiceSrv: InvoiceService,
                private userSrv: CustomerService,
                private notificationSrv: NotificationService,
                private loggedUserService: UserService,
                private configurationService: ConfigurationService,
                private orderSrv: OrderService,
                private restServ : RestService,
                private loginServ : UserService) {

        this.createForm();

        configurationService.currentCompany.subscribe(
            currentCompany => {
                this.currentCompany = currentCompany;
                this.invoiceForm.get('invoice').get('company').patchValue(currentCompany);
            }
        )


        restServ.getCompanies().subscribe(
            companies=>this.companies = companies,
            error=>{
                console.log("error");
                console.log(error.status);
                if (error.status === 401){
                    this.loginServ.logout();
                }
            }
        );
    }

    ngOnInit() {

        this.invoiceForm.get('invoice').get('customer').get('email')
            .valueChanges
            .filter((value: string) => {

                if (value && value.length > 1 && this.invoiceForm.get('invoice').get('type').value == 'person') {
                    this.disableCustomerInputs();
                    return true;
                }
                return false;
            })
            .debounceTime(600)
            .subscribe(
                value => {
                    console.log("finding user");
                    this.restServ.getCustomerByEmail(value).subscribe(
                        user => {
                            this.userFoundByMail = user;
                            if (!user) {
                                this.userFoundByMail = null;
                                this.enableCustomerInputs();
                                //this.resetClientInfo();
                            }
                            else {
                                this.enableCustomerInputs();
                                this.setClientInfo();
                            }
                        })
                }
            );

        this.invoiceForm.get('invoice').get('type')
            .valueChanges
            .subscribe(
                value => {
                    console.log("change type");
                    this.invoiceForm.get('invoice').get('customer').reset();
            })
    }

    createForm() {
        this.invoiceForm = this.fb.group({

            'description': ['simple desc', Validators.required],
            'assignedTo': [this.loggedUserService.getLoggedInUser().getName(), Validators.required],
            'invoice': this.fb.group({
                'company': this.fb.group({
                    'name': ['', Validators.required],
                    'ico': ['', Validators.required],
                    'dic': ['', Validators.required],
                    'mainContact': this.fb.group({
                        'name' : ['',Validators.required],
                        'surname' : ['',Validators.required],
                        'postcode' : ['',Validators.required],
                        'telephone' : ['', Validators.required],
                        'country' : ['',Validators.required],
                        'accountNumber': ['', Validators.required],
                        'email': ['', Validators.required],
                        'street': ['', Validators.required],
                        'city': ['', Validators.required],
                        'iban': ['', Validators.required],
                        'swift': ['', Validators.required]
                    })
                }),
                'name': ['name', Validators.required],
                'invoiceId': [this.invoiceSrv.generateInvoiceId(), Validators.required],
                'createdBy': [this.loggedUserService.getLoggedInUser().getName(), Validators.required],
                'status': [InvoiceStatus.created, Validators.required],
                'type': ['person'],
                'customer': this.fb.group({
                    'name': ['', Validators.required],
                    'ico': [{value:'12312',disabled:true}],
                    'dic': [{value:'12312',disabled:true}],
                    'surname': ['', Validators.required],
                    'email': ['', Validators.required],
                    'phone': ['', Validators.required]
                }),
                'products': this.fb.array([]),
                'variableSymbol': [this.invoiceSrv.generateInvoiceId(), Validators.required]
            })
        })

        this.clientFormControlls.push(this.invoiceForm.get('invoice').get('customer').get('name'));
        this.clientFormControlls.push(this.invoiceForm.get('invoice').get('customer').get('surname'));
        this.clientFormControlls.push(this.invoiceForm.get('invoice').get('customer').get('phone'));
        //this.fixedInputs.push(this.invoiceForm.get('variableSymbol'));
        //this.fixedInputs.push(this.invoiceForm.get('company'));

        //this.disableFixedInputs();
    }

    get products() {
        return this.invoiceForm.get('invoice').get('products') as FormArray;
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
            'product': '',
            'value': '',
            'investor' : '',
            'parcell' : ''
        });
        this.products.push(
            product
        )

        this.prices.push(product.get('value'));
    }

    disableCustomerInputs() {
        for (let clientFormControll of this.clientFormControlls) {
            clientFormControll.disable();
        }
    }

    enableCustomerInputs() {
        for (let clientFormControll of this.clientFormControlls) {
            clientFormControll.enable();
        }
    }

    setClientInfo() {
        this.invoiceForm.get('invoice').get('customer').get('name').setValue(this.userFoundByMail.name);
        this.invoiceForm.get('invoice').get('customer').get('surname').setValue(this.userFoundByMail.surname);
        this.invoiceForm.get('invoice').get('customer').get('phone').setValue(this.userFoundByMail.phone);
    }

    resetClientInfo() {
        this.invoiceForm.get('invoice').get('customer').get('name').setValue("");
        this.invoiceForm.get('invoice').get('customer').get('surname').setValue("");
        this.invoiceForm.get('invoice').get('customer').get('phone').setValue("");
    }

    removeProduct(index: number) {
        this.products.removeAt(index);
        this.prices.splice(index, 1);
    }

    selectCompany(company) {
        console.log("selecting company");
        this.configurationService.setCurrentCompany(company);
    }

    onSubmit({value}: { value: Order }) {

        value.invoice.variableSymbol = this.invoiceForm.get('invoice').get("variableSymbol").value;
        value.invoice.company = this.invoiceForm.get('invoice').get("company").value;
        value.invoice.totalPrice = this.getPrice();
        value.invoice.created = new Date();

        value.createdBy = this.loggedUserService.getLoggedInUser();
        value.created = new Date();

        console.log(value);

        this.invoiceSrv.createInvoice(value.invoice).subscribe(
            invoice => {
                value.invoice = invoice;
                console.log("created invoice:");
                console.log(invoice);
                this.orderSrv.createOrder(value).subscribe(
                    result => {
                        this.createEmitter.next(result);
                        this.notificationSrv.success("Nova objednávka bola vytvorena", "Objednávka");
                    }
                )
            }
        )

    }
}