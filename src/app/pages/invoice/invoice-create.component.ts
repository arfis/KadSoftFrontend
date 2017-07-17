/**
 * Created by a619678 on 23. 5. 2017.
 */
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {InvoiceService} from "./invoice.service";
import {InvoiceStatus} from "./invoiceStatus.model";
import {Invoice} from "./invoice.model";
import {CustomerService} from "../users/user.service";
import {Customer} from "../users/user.model";
import {NotificationService} from "../../services/notification.service";
import {UserService} from "../../services/user.service";
import {Company} from "../../models/company-model";
import {ConfigurationService} from "../../services/configuration.service";
import {RestService} from "../../services/rest.service";

@Component({
    selector: 'invoice-creation',
    styleUrls: ['./invoice-create.component.css'],
    templateUrl: './invoice-create.component.html'
})

export class InvoiceCreation implements OnInit {

    @Output()
    createEmitter = new EventEmitter<Invoice>();
    currentCompany : Company;

    private invoiceForm: FormGroup;
    private userFoundByMail : Customer;
    private clientFormControlls : any[] = new Array();
    private fixedInputs : any[] = new Array();

    private prices : any[] = new Array();
    private companies : Company[];

    constructor(private fb: FormBuilder,
                private invoiceSrv: InvoiceService,
                private userSrv : CustomerService,
                private notificationSrv : NotificationService,
                private loggedUserService : UserService,
                private configurationService : ConfigurationService,
                private restServ : RestService,
                private loginServ : UserService) {

        this.createForm();

        configurationService.currentCompany.subscribe(
            currentCompany=> {
                this.currentCompany = currentCompany;
                this.invoiceForm.get('company').patchValue(currentCompany);
            }
        )

        restServ.getCompanies().subscribe(
            companies => this.companies = companies,
            error=>{
                if (error.status === 401){
                    this.loginServ.logout();
                }
            }
        );
    }

    ngOnInit() {


        this.invoiceForm.get('client').get('email')
            .valueChanges
            .filter((value: string) => {

                if (value && value.length > 1) {
                    this.disableClientInputs();
                    return true;
                }
                return false;
            })
            .debounceTime(100)
            .subscribe(

                value => this.userSrv.getUserByMail(value).subscribe(
                    user => {
                    this.userFoundByMail = user;
                        if(!user){
                            this.userFoundByMail = null;
                            this.enableClientInputs();
                            this.resetClientInfo();
                        }
                        else{
                            this.enableClientInputs();
                            this.setClientInfo();
                        }
                    })
            );
    }

    createForm() {
        this.invoiceForm = this.fb.group({

            'company': this.fb.group({
                'name':['',Validators.required],
                'accountNumber':['',Validators.required],
                'email':['',Validators.required],
                'address':['',Validators.required],
                'city':['',Validators.required],
                'IBAN':['',Validators.required]
            }),
            'name': ['name', Validators.required],
            'invoiceNumber': [this.invoiceSrv.generateInvoiceId(), Validators.required],
            'createdBy': [this.loggedUserService.getLoggedInUser().getName(), Validators.required],
            'status': [InvoiceStatus.created, Validators.required],
            'client': this.fb.group({
                'name':['',Validators.required],
                'surname':['',Validators.required],
                'email':['',Validators.required],
                'phone':['',Validators.required],
            }),
            'products' : this.fb.array([]),
            'variableSymbol' : [this.invoiceSrv.generateInvoiceId(),Validators.required]
        })

        this.clientFormControlls.push(this.invoiceForm.get('client').get('name'));
        this.clientFormControlls.push(this.invoiceForm.get('client').get('surname'));
        this.clientFormControlls.push(this.invoiceForm.get('client').get('phone'));
        //this.fixedInputs.push(this.invoiceForm.get('variableSymbol'));
        //this.fixedInputs.push(this.invoiceForm.get('company'));

        //this.disableFixedInputs();
    }

    get products(){
        return this.invoiceForm.get('products') as FormArray;
    }

    getPrice(){
        let sum : number = 0;

        for(let price of this.prices){
            console.log(price);
            sum += price.value;
        }

        return sum;
    }

    addProduct(){
        let product = this.fb.group({
            'product' : '',
            'value' : '',
            'investor' : '',
            'parcell' : ''
        });

        this.products.push(
            product
        )

        this.prices.push(product.get('value'));
    }

    disableClientInputs(){
        for (let clientFormControll of this.clientFormControlls){
            clientFormControll.disable();
        }
    }

    enableClientInputs(){
        for (let clientFormControll of this.clientFormControlls){
            clientFormControll.enable();
        }
    }

    setClientInfo(){
        this.invoiceForm.get('client').get('name').setValue(this.userFoundByMail.mainContact.name);
        this.invoiceForm.get('client').get('surname').setValue(this.userFoundByMail.mainContact.surname);
        this.invoiceForm.get('client').get('phone').setValue(this.userFoundByMail.mainContact.telephone);
    }

    resetClientInfo(){
        this.invoiceForm.get('client').get('name').setValue("");
        this.invoiceForm.get('client').get('surname').setValue("");
        this.invoiceForm.get('client').get('phone').setValue("");
    }

    removeProduct(index : number){
        this.products.removeAt(index);
        this.prices.splice(index,1);
    }

    selectCompany(company){
        this.configurationService.setCurrentCompany(company);
    }

    onSubmit({value}: { value: Invoice }) {

        // this.enableFixedInputs();

        console.log(value);
        value.variableSymbol = this.invoiceForm.get("variableSymbol").value;
        value.companyContact = this.invoiceForm.get("companyContact").value;
        value.totalPrice = this.getPrice();


        this.invoiceSrv.createInvoice(value).subscribe(
            result => {
                this.createEmitter.next(result);
                this.notificationSrv.success("Nova faktura bola vytvorena","Faktura");
                // window.alert("Nova faktura bola vytvorena!");
                //this.invoiceForm.reset();
            }
    )}
}