import {Component, ViewChild} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {NotificationService} from "../../services/notification.service";
import {UserService} from "../../services/user.service";
import {
    _buildingTypes, _buildingTypesInfo, _productTypes,
    _professions, getOrderTranslation, heating, lighting, vzt, Order, OrderStatus, OrderStats
} from "./order.model";
import {OrderService} from "./order.service";
import {Message, SelectItem} from "primeng/primeng";
import {invoiceTypes} from "../invoice/invoiceStatus.model";
import {UploadFileInfo} from "../../models/file";
import {OrderFiles} from "../../models/orderFiles";
import {HttpErrorResponse} from "@angular/common/http";
import {OrderConstants} from "./order.constants";
import {RestService} from "../../services/rest.service";
import {MatStep} from "@angular/material";
import {LoginUser} from "../login/login-user.model";
import {Invoice} from "../invoice/invoice.model";
import {Product} from "../../models/Product";
import * as fromRoot from "../../app.reducer";
import {Store} from '@ngrx/store';
import {mapToLabelValue} from '../../services/service.helper';

@Component({
    selector: 'order-detail',
    styleUrls: ['./order-detail.component.css'],
    templateUrl: './order-detail.component.html'
})

export class OrderDetailComponent {

    public order: Order;

    public isLoaded = false;
    public selectedUser: LoginUser;
    public orderFiles = [];
    uploadedFiles: any[] = [];
    professions: SelectItem[] = [];
    buildingTypes: SelectItem[] = [];
    productTypes: SelectItem[] = [];


    selectedBuildingType: string;
    selectedProfessions: string[] = [];
    selectedProductType: string;
    msgs: Message[];

    heatingPrice: number = OrderConstants.heatingPrice;
    lightingPrice: number = OrderConstants.lightingPrice;
    vztPrice: number = OrderConstants.vztPrice;
    area: number = 0;
    note = '';

    users;
    invoiceToBeCreated: Invoice;

    public isUploading = false;
    public duplicateCreation = false;
    @ViewChild('uploader') uploader;

    constructor(private activatedRoute: ActivatedRoute,
                public router: Router,
                private _orderSrv: OrderService,
                private _usrService: UserService,
                private store:Store<fromRoot.State>,
                private notificationSrv: NotificationService,
                private _loginServ: UserService,
                private _restSrv: RestService,
                private _notificationSrv: NotificationService) {


        this.store.select(fromRoot.getConstructionTypes).subscribe(
            buildingTypes => this.buildingTypes = buildingTypes
        )

        this.store.select(fromRoot.getProductTypes).subscribe(
            productTypes => {
                this.productTypes = productTypes;
            }
        )
    }

    ngOnInit() {

        this.activatedRoute.data.subscribe(data => {
            this.order = data['order'];

            this.selectedBuildingType = (this.order.constructionType) ? this.order.constructionType.id : null;
            this.selectedProductType = (this.order.productType) ? this.order.productType.id : null;
            this.selectedProfessions = (this.order.professions) ? this.order.professions.map(profession => profession.id) : null;
            this.note = this.order.note;
            this.area = this.order.area;
            this.vztPrice = this.order.vztPrice;
            this.lightingPrice = this.order.lightingPrice;
            this.heatingPrice = this.order.heatingPrice;
            this.selectedUser = this.order.assignedTo;

            this.loadProfessionsForProductType(this.productTypes.find(prodType => prodType.id === this.selectedProductType).professions);
            this.isLoaded = true;
        });

        if (this._usrService.isAdmin()) {
            this._usrService.getAllUsers().subscribe(
                result => {
                    this.users = result;
                    console.log(this.users);
                }
            );
        }
    }

    remove(uploadedFile) {
        if (window.confirm("Naozaj chcete vymazat danu polozku?")) {
            console.log('todo');
        }
    }

    updateStatus(action) {
        this._restSrv.post<Order>(action).subscribe(
            result => {
                this.notificationSrv.success('bol uspesne aktualizovany', 'Stav');
                this._orderSrv.getOrder(this.order.id).subscribe(
                    order => {
                        this.order = order;
                    }
                )
            },
            error => {
                this.notificationSrv.error('nebol uspesne aktualizovany', 'Stav');
            }
        );
    }

    toPreparing() {
        this.updateStatus(this.order.actions.toPreparing);
    }

    toAssigned() {
        this.updateStatus(this.order.actions.toAssigned);
    }

    toFinished() {
        this.updateStatus(this.order.actions.toFinished);
    }

    toDispatched() {
        this.updateStatus(this.order.actions.toDispatched);
    }

    unassign() {
        this.updateStatus(this.order.actions.toUnassigned);
    }

    onUpload(event) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

    fileUpload(filesToUpload) {
        this.parseFiles(filesToUpload,
            parsedFiles => {
                let orderFiles = new OrderFiles();
                orderFiles.text = 'subor';
                orderFiles.files = parsedFiles;

                this.isUploading = true;
                this._orderSrv.addFilesToOrder(this.order.id, orderFiles).subscribe(
                    result => {
                        this.order = result;
                        this.notificationSrv.success('Subory', 'boli uspesne nahrate');
                        this.uploader.clear();
                    },
                    (err: HttpErrorResponse) => {
                        this.notificationSrv.error('Subory', 'neboli uspesne nahrate');
                        if (err.error instanceof Error) {
                            // A client-side or network error occurred. Handle it accordingly.
                            console.log('An error occurred:', err.error.message);
                        } else {
                            // The backend returned an unsuccessful response code.
                            // The response body may contain clues as to what went wrong,
                            console.log(`Backend returned code ${err.status}, body was:`);
                            console.log(err.error);
                        }
                    },
                    () => this.isUploading=false
                );
            }
        )
    }

    parseFiles(filesToUpload, onFinish) {

        let parsedFiles = 0;
        let totalFiles = filesToUpload.files.length;

        let arrayOfFiles = new Array<UploadFileInfo>();

        for (let file of filesToUpload.files) {
            let customFile = new UploadFileInfo();
            customFile.filename = 'test';

            this.getBase64fromFile(file,
                data => {
                    parsedFiles++;
                    let bannedStrings = ["vnd.openxmlformats-officedocument.wordprocessingml.document","msword"];
                    for (let bannedString of bannedStrings) {
                        if (data.indexOf(bannedString) > -1) {
                            console.log('bannedString is there');
                            data = data.replace(bannedString, 'docx');
                        }
                    }

                    customFile.base64File = data;
                    arrayOfFiles.push(customFile);
                    if (parsedFiles == totalFiles) {
                        onFinish(arrayOfFiles);
                    }
                }
            )

        }
    }

    getBase64fromFile(file, callback) {
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
            console.log(reader.result);
            callback(reader.result);
        };

        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    onValueChange(event) {
        let selectedProfessions = this.productTypes.find(type => type.id === this.selectedProductType).professions;

        this.loadProfessionsForProductType(selectedProfessions);
    }

    updateOrder() {
        let updatedOrder = new Order;
        updatedOrder.professions = this.selectedProfessions;
        updatedOrder.productType = this.selectedProductType;
        updatedOrder.constructionType = this.selectedBuildingType;
        updatedOrder.note = this.note;
        updatedOrder.area = this.area;
        updatedOrder.price = this.totalCost;
        updatedOrder.vztPrice = this.vztPrice;
        updatedOrder.heatingPrice = this.heatingPrice;
        updatedOrder.lightingPrice = this.lightingPrice;

        this._orderSrv.patchOrder(updatedOrder, this.order.id).subscribe(
            result => {
                this._notificationSrv.success('Objednavka', 'bola uspesne upravena');
            },
            error => {
                this._notificationSrv.error('Objednavka', 'nebola uspesne upravena');
            });
    }


    changeState(newState) {
        switch (newState) {
            case 'assigned' : {
                this.toAssigned();
                break;
            }
            case 'unassigned' : {
                this.unassign();
                break;
            }
            case 'finished' : {
                this.toFinished();
                break;
            }
            case 'preparing' : {
                this.toPreparing();
                break;
            }
            case 'dispatched' : {
                this.toDispatched();
                break;
            }
        }
    }

    selectUser(user) {
        this.selectedUser = user;
    }

    // reassing() {
    //     let updatedOrder = new Order();
    //     updatedOrder.assignedTo = this.selectedUser;
    //     this._orderSrv.setAsignedTo(updatedOrder, this.order.id).subscribe(
    //         result => {
    //             console.log(result);
    //         },
    //         error => {
    //             console.log('error');
    //         }
    //     );
    // }

    onInvoiceCreated() {
        this.toPreparing();
    }

    duplicate() {
        console.log('duplicate');
        this.duplicateCreation = !this.duplicateCreation;
        console.log(this.duplicateCreation);
    }

    private loadProfessionsForProductType(professions) {
        console.log(professions);
        this.professions = professions.map(mapToLabelValue);
    }

    get isDuplicateCreation() {
        return this.duplicateCreation;
    }

    get orderId() {
        return this.order.id
    }

    get creator() {
        return this.order.createdBy
    }

    get createdDate() {
        return this.order.created
    }

    get isAssigned() {
        return !(this.order.state === 'draft' || this.order.state === 'unassigned');
    }

    get client() {
        return this.order.mainContact.name + this.order.mainContact.surname
    }

    get invoices() {
        return this.order.invoices
    }

    get isDealer() {
        return this._usrService.isDealer();
    }

    get state() {
        return getOrderTranslation(OrderStatus[this.order.state])
    }


    get invoiceTypes() {
        return invoiceTypes
    }

    get buildingInfo() {
        return _buildingTypesInfo[this.selectedBuildingType]
    }

    get isAreaShown() {
        return this.selectedProfessions.find(selected =>
        (selected === this.professions[0].value) || (selected === this.professions[2].value))
    }

    get isHeatingSelected() {
        return this.selectedProfessions.find(selected => selected === this.professions[0].value)
    }

    get isVztSelected() {
        return this.selectedProfessions.find(selected => selected === this.professions[1].value)
    }

    get isLightingSelected() {
        return this.selectedProfessions.find(selected => selected === this.professions[2].value)
    }

    get totalCost() {
        return this.area * (this.lightingPrice + this.heatingPrice) + this.vztPrice;
    }

    get isAdministrator() {
        return this._loginServ.getLoggedInUser().roles.indexOf("ROLE_ADMIN") > -1
    }

    get canBeUnassigned() {
        return !!this.order.actions.toUnassigned;
    }

    get canBeAssigned() {
        return !!this.order.actions.toAssigned;
    }

    get canBeFinished() {
        return !!this.order.actions.toFinished;
    }

    get canBeDispatched() {
        return !!this.order.actions.toDispatched;
    }

    get canBePreparing() {
        return !!this.order.actions.toPreparing;
    }

    get actions() {
        if (this.order.state === 'draft') {
            return [];
        } else {
            return this.order.actions;
        }
    }

    get currentState() {
        return this.order.state
    }

    get files() {
        return this.order.files;
    }

    get states() {
        return this._orderSrv.states;
    }
}
