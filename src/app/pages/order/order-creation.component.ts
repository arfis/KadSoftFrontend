/**
 * Created by a619678 on 23. 5. 2017.
 */
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {InvoiceService} from "../invoice/invoice.service";
import {InvoiceStatus} from "../invoice/invoiceStatus.model";
import {Invoice} from "../invoice/invoice.model";
import {UserApplicationService} from "../users/user.service";
import {UserInformation} from "../users/user.model";
import {NotificationService} from "../../services/notification.service";
import {UserService} from "../../services/user.service";
import {Company} from "../../models/company-model";
import {ConfigurationService} from "../../services/configuration.service";
import {Order} from "./order.model";
import {OrderService} from "./order.service";

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
    private userFoundByMail: UserInformation;
    private clientFormControlls: any[] = new Array();
    private fixedInputs: any[] = new Array();

    private prices: any[] = new Array();
    private companies: Company[];

    public radioModel: string = 'Middle';

    constructor(private fb: FormBuilder,
                private invoiceSrv: InvoiceService,
                private userSrv: UserApplicationService,
                private notificationSrv: NotificationService,
                private loggedUserService: UserService,
                private configurationService: ConfigurationService,
                private orderSrv: OrderService) {

        this.createForm();

        configurationService.currentCompany.subscribe(
            currentCompany => {
                this.currentCompany = currentCompany;
                this.invoiceForm.get('invoice').get('company').patchValue(currentCompany);
            }
        )

        configurationService.getComapnies().subscribe(
            companies=>this.companies = companies
        );
    }

    ngOnInit() {

        this.invoiceForm.get('invoice').get('client').get('email')
            .valueChanges
            .filter((value: string) => {

                if (value && value.length > 1 && this.invoiceForm.get('invoice').get('type').value == 'person') {
                    this.disableClientInputs();
                    return true;
                }
                return false;
            })
            .debounceTime(600)
            .subscribe(
                value => {
                    console.log("finding user");
                    this.userSrv.getUserByMail(value).subscribe(
                        user => {
                            this.userFoundByMail = user;
                            if (!user) {
                                this.userFoundByMail = null;
                                this.enableClientInputs();
                                this.resetClientInfo();
                            }
                            else {
                                this.enableClientInputs();
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
                    this.invoiceForm.get('invoice').get('client').reset();
            })
    }

    createForm() {
        this.invoiceForm = this.fb.group({

            'description': ['simple desc', Validators.required],
            'assignedTo': [this.loggedUserService.getLoggedInUser().getName(), Validators.required],
            'invoice': this.fb.group({
                'company': this.fb.group({
                    'name': ['', Validators.required],
                    'accountNumber': ['', Validators.required],
                    'email': ['', Validators.required],
                    'address': ['', Validators.required],
                    'city': ['', Validators.required],
                    'IBAN': ['', Validators.required]
                }),
                'name': ['name', Validators.required],
                'invoiceId': [this.invoiceSrv.generateInvoiceId(), Validators.required],
                'createdBy': [this.loggedUserService.getLoggedInUser().getName(), Validators.required],
                'status': [InvoiceStatus.created, Validators.required],
                'type': ['person'],
                'client': this.fb.group({
                    'name': ['', Validators.required],
                    'ico': ['12312'],
                    'dic': ['41242'],
                    'surname': ['', Validators.required],
                    'email': ['', Validators.required],
                    'phone': ['', Validators.required],
                }),
                'products': this.fb.array([]),
                'variableSymbol': [this.invoiceSrv.generateInvoiceId(), Validators.required]
            })
        })

        this.clientFormControlls.push(this.invoiceForm.get('invoice').get('client').get('name'));
        this.clientFormControlls.push(this.invoiceForm.get('invoice').get('client').get('surname'));
        this.clientFormControlls.push(this.invoiceForm.get('invoice').get('client').get('phone'));
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

    disableClientInputs() {
        for (let clientFormControll of this.clientFormControlls) {
            clientFormControll.disable();
        }
    }

    enableClientInputs() {
        for (let clientFormControll of this.clientFormControlls) {
            clientFormControll.enable();
        }
    }

    setClientInfo() {
        this.invoiceForm.get('invoice').get('client').get('name').setValue(this.userFoundByMail.name);
        this.invoiceForm.get('invoice').get('client').get('surname').setValue(this.userFoundByMail.surname);
        this.invoiceForm.get('invoice').get('client').get('phone').setValue(this.userFoundByMail.phone);
    }

    resetClientInfo() {
        this.invoiceForm.get('invoice').get('client').get('name').setValue("");
        this.invoiceForm.get('invoice').get('client').get('surname').setValue("");
        this.invoiceForm.get('invoice').get('client').get('phone').setValue("");
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

        if (this.userFoundByMail) {
            value.invoice.client = this.userFoundByMail;
        }

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