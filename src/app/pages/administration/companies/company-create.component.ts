/**
 * Created by a619678 on 23. 5. 2017.
 */
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfigurationService} from "../../../services/configuration.service";
import {Company} from "../../../models/company-model";
import {NotificationService} from "../../../services/notification.service";
import {RestService} from "../../../services/rest.service";
import {OrderFiles} from "../../../models/orderFiles";
import {HttpErrorResponse} from "@angular/common/http";
import {UploadFileInfo} from "../../../models/file";


@Component({
    selector: 'company-creation',
    styleUrls: ['./company-create.component.css'],
    templateUrl: './company-create.component.html'
})

export class CompanyCreation implements OnInit, OnChanges {

    public companyForm: FormGroup;
    private clientFormControlls: any[] = new Array();
    private fixedInputs: any[] = new Array();

    private prices: any[] = new Array();

    public stampFile;
    public logoFile;

    public uploadedFiles: any[] = [];

    @Output() private onAdd = new EventEmitter<Company>();
    @Output() onChange = new EventEmitter();
    @Input() company;

    constructor(private fb: FormBuilder,
                private configurationService: ConfigurationService,
                private notificationSrv: NotificationService,
                private restServ : RestService) {

        this.createForm();


    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.company && changes.company) {
            console.log('setting up company');
            this.companyForm.patchValue(this.company);

        }
    }

    ngOnInit() {
        this.createForm();

    }

    createForm() {
        this.companyForm = this.fb.group({
            'name' : ['',Validators.required],
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
            }),
            'bankApiToken' : ['', Validators.required],
            'ico': ['', Validators.required],
            'dic': ['', Validators.required]
        })
    }

    get products() {
        return this.companyForm.get('products') as FormArray;
    }

    onUpload(event) {
        console.log('onUpload');
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }
    }

    pictureUpload(fileToUpload, type) {
        this.parseFiles(fileToUpload.files[0],
            base64hash => {

            console.log(base64hash);

                let file = new UploadFileInfo();
                file.filename = 'test';
                file.base64File = base64hash;

                let updateCompany = {...this.company};

                delete updateCompany.mainContact.id;
                if (type === 'stamp') {
                    delete updateCompany.signature;
                   updateCompany.stamp = file;
                } else {
                    delete updateCompany.stamp;
                    updateCompany.signature = file;
                }

                this.restServ.updateCompany(updateCompany, this.company.id).subscribe(
                    result => {
                        this.notificationSrv.success('Zmena suboru', 'bola uspesna');
                        this.company = result;
                        this.onChange.emit();
                    },
                    (err: HttpErrorResponse) => {
                        this.notificationSrv.error('Zmena suboru', 'nebola uspesna');
                        if (err.error instanceof Error) {
                            // A client-side or network error occurred. Handle it accordingly.
                            console.log('An error occurred:', err.error.message);
                        } else {
                            // The backend returned an unsuccessful response code.
                            // The response body may contain clues as to what went wrong,
                            console.log(`Backend returned code ${err.status}, body was:`);
                            console.log(err.error);
                        }
                    }
                );
            }
        )
    }

    parseFiles(file, onFinish) {

            let customFile = new UploadFileInfo();
            customFile.filename = 'test';

            this.getBase64fromFile(file,
                data => {
                    onFinish(data);
                }
            )


    }

    getBase64fromFile(file, callback) {
        var reader = new FileReader();
        console.log(file);
        reader.readAsDataURL(file);

        reader.onload = function () {
            console.log(reader.result);
            callback(reader.result);
        };

        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    selectCompany(company) {
        this.configurationService.setCurrentCompany(company);
    }

    onSubmit({value}: { value: Company }) {

        console.log(value);

        if (!this.company) {
            this.restServ.addComapny(value).subscribe(
                result => {
                    this.notificationSrv.success(value.name + " firma bola vytvorena", "Firma");
                    this.onAdd.next(result);
                    // window.alert("Nova faktura bola vytvorena!");
                    //this.invoiceForm.reset();
                },
                error => {
                    this.notificationSrv.error("Problem pri vytvarani novej firmy", "Firma");
                    console.log(error);
                }
            )
        }
        else {
            console.log(value);
            this.restServ.updateCompany(value, this.company.id).subscribe(
                result => {
                    this.notificationSrv.success(value.name + " firma bola aktualizovana", "Firma");
                    this.onChange.next();
                    // window.alert("Nova faktura bola vytvorena!");
                    //this.invoiceForm.reset();
                },
                error => {
                    this.notificationSrv.error("Problem pri aktualizacii firmy", "Firma");
                    console.log(error);
                }
            )
        }
    }

    removeFile(file) {
        console.log('removing file');
    }

    get files() {
        return null;
    }
}