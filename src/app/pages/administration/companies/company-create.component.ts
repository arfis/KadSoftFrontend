/**
 * Created by a619678 on 23. 5. 2017.
 */
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfigurationService} from "../../../services/configuration.service";
import {Company} from "../../../models/company-model";
import {NotificationService} from "../../../services/notification.service";
import {RestService} from "../../../services/rest.service";


@Component({
    selector: 'company-creation',
    styleUrls: ['./company-create.component.css'],
    templateUrl: './company-create.component.html'
})

export class CompanyCreation implements OnInit {


    private invoiceForm: FormGroup;
    private clientFormControlls: any[] = new Array();
    private fixedInputs: any[] = new Array();

    private prices: any[] = new Array();

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
        this.invoiceForm = this.fb.group({
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
        })
    }

    get products() {
        return this.invoiceForm.get('products') as FormArray;
    }


    selectCompany(company) {
        this.configurationService.setCurrentCompany(company);
    }

    onSubmit({value}: { value: Company }) {

        this.restServ.addComapny(value).subscribe(
            result => {
                this.notificationSrv.success( value.name + " firma bola vytvorena", "Firma");
                this.onAdd.next(result);
                // window.alert("Nova faktura bola vytvorena!");
                //this.invoiceForm.reset();
            },
            error => {
                this.notificationSrv.error("Problem pri vytvarani novej firmy", "Firma");
            }
        )
    }
}