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
    private type : string = "Person";

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

        //if the company is changed in the service, it is emmited here
        configurationService.currentCompany.subscribe(
            currentCompany => {
                this.currentCompany = currentCompany;
                console.log("selected company");

                console.log(currentCompany);

                if(currentCompany.mainContact) {
                    this.invoiceForm.get('invoice').get('companyContact').patchValue(currentCompany.mainContact);
                }
                this.invoiceForm.get('invoice').get('company').setValue(currentCompany.id);
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

        this.invoiceForm.get('invoice').get('customerContact').get('email')
            .valueChanges
            .filter((value: string) => {

                if (value && value.length > 1 && this.type == 'person') {
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
                                // this.enableCustomerInputs();
                                //this.resetClientInfo();
                            }
                            else {
                                // this.enableCustomerInputs();
                                this.setClientInfo();
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

    createForm() {

        let disabledEmpty = {value:'', disabled:false};
        this.invoiceForm = this.fb.group({

            'description': ['simple desc', Validators.required],
            'assignedTo': [this.loggedUserService.getLoggedInUser().getName(), Validators.required],
            'name': ['name', Validators.required],
            'createdBy': [this.loggedUserService.getLoggedInUser().getName(), Validators.required],
            // 'status': [InvoiceStatus.created, Validators.required],
            'invoice': this.fb.group({
                'company' : [''],
                // 'companyContact': this.fb.group({
                    // 'name': [disabledEmpty, Validators.required],
                    // 'ico': [disabledEmpty, Validators.required],
                    // 'dic': [disabledEmpty, Validators.required],
                    'companyContact': this.fb.group({
                        'name' : [disabledEmpty,Validators.required],
                        'surname' : [disabledEmpty,Validators.required],
                        'postcode' : [disabledEmpty,Validators.required],
                        'telephone' : [disabledEmpty, Validators.required],
                        'country' : [disabledEmpty,Validators.required],
                        'accountNumber': [disabledEmpty, Validators.required],
                        'email': [disabledEmpty, Validators.required],
                        'street': [disabledEmpty, Validators.required],
                        'city': [disabledEmpty, Validators.required],
                        'iban': [disabledEmpty, Validators.required],
                        'swift': [disabledEmpty, Validators.required]
                    // })
                }),
                "invoiceNumber": [this.invoiceSrv.generateInvoiceId(), Validators.required],
                'customerContact': this.fb.group({
                    'name' : [disabledEmpty,Validators.required],
                    'surname' : [disabledEmpty,Validators.required],
                    'postcode' : [disabledEmpty,Validators.required],
                    'telephone' : [disabledEmpty, Validators.required],
                    'country' : [disabledEmpty,Validators.required],
                    'accountNumber': [disabledEmpty, Validators.required],
                    'email': [disabledEmpty, Validators.required],
                    'street': [disabledEmpty, Validators.required],
                    'city': [disabledEmpty, Validators.required],
                    'iban': [disabledEmpty, Validators.required],
                    'swift': [disabledEmpty, Validators.required]
                    // 'name': ['', Validators.required],
                    // 'ico': [{value:'12312'}],
                    // 'dic': [{value:'12312'}],
                    // 'surname': ['', Validators.required],
                    // 'email': ['', Validators.required],
                    // 'phone': ['', Validators.required]
                }),
                'products': {value:this.fb.array([]),disabled:true},
                'variableSymbol': [{value:this.invoiceSrv.generateInvoiceId(), disabled:true},
                    Validators.required]
            })
        })

        this.clientFormControlls.push(this.invoiceForm.get('invoice').get('customerContact').get('name'));
        this.clientFormControlls.push(this.invoiceForm.get('invoice').get('customerContact').get('surname'));
        this.clientFormControlls.push(this.invoiceForm.get('invoice').get('customerContact').get('telephone'));
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
            // clientFormControll.disable();
        }
    }

    enableCustomerInputs() {
        for (let clientFormControll of this.clientFormControlls) {
            // clientFormControll.enable();
        }
    }

    setClientInfo() {
        this.invoiceForm.get('invoice').get('customerContact').get('name').setValue(this.userFoundByMail.name);
        this.invoiceForm.get('invoice').get('customerContact').get('surname').setValue(this.userFoundByMail.surname);
        this.invoiceForm.get('invoice').get('customerContact').get('telephone').setValue(this.userFoundByMail.phone);
    }

    resetClientInfo() {
        this.invoiceForm.get('invoice').get('customerContact').get('name').setValue("");
        this.invoiceForm.get('invoice').get('customerContact').get('surname').setValue("");
        this.invoiceForm.get('invoice').get('customerContact').get('telephone').setValue("");
    }

    removeProduct(index: number) {
        this.products.removeAt(index);
        this.prices.splice(index, 1);
    }

    setType(type : string){
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

        console.log("ddsads");
        // value.invoice.variableSymbol = this.invoiceForm.get('invoice').get("variableSymbol").value;
        // value.invoice.company = this.invoiceForm.get('invoice').get("company").value;
        // value.invoice.totalPrice = this.getPrice();
        value.created = new Date();

        value.createdBy = this.loggedUserService.getLoggedInUser();
        value.created = new Date();

        console.log(value);

        // this.orderSrv.createOrder(value).subscribe(
        //     result => {
        //         this.createEmitter.next(result);
        //         this.notificationSrv.success("Nova objednávka bola vytvorena", "Objednávka");
        //     },
        //     error=>{
        //         if (error.status === 401){
        //             this.loginServ.logout();
        //         }
        //     }
        // )

        this.invoiceSrv.createInvoice(value.invoice).subscribe(
            invoice => {
                value.invoice = invoice;
                console.log("created invoice:");
                console.log(invoice);
            },
            error => {
                console.log(error);
            }
        )

    }
}