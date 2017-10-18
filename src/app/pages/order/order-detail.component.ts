/**
 * Created by a619678 on 16. 6. 2017.
 */
/**
 * Created by a619678 on 7. 6. 2017.
 */

import {Component} from "@angular/core";
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

@Component({
    selector: 'order-detail',
    styleUrls: ['./order-detail.component.css'],
    templateUrl: './order-detail.component.html'
})

export class OrderDetailComponent {

    private order: Order;

    public isLoaded = false;
    public selectedUser = "Vyber uzivatela";
    public orderFiles = [];
    uploadedFiles: any[] = [];
    professions: SelectItem[];
    buildingTypes: SelectItem[];
    productTypes: SelectItem[];

    selectedBuildingType: string;
    selectedProfessions: string[] = [];
    selectedProductType: string;
    msgs: Message[];

    heatingPrice: number = 0;
    lightingPrice: number = 0;
    vztPrice: number = 0;
    area: number = 0;

    constructor(private activatedRoute: ActivatedRoute,
                public router: Router,
                private _orderSrv: OrderService,
                private _usrService: UserService,
                private loadingBar: SlimLoadingBarService,
                private notificationSrv: NotificationService,
                private _loginServ: UserService) {

        this.professions = _orderSrv.professionTypes;
        this.buildingTypes = _orderSrv.constructionTypes;
        this.productTypes = _orderSrv.productTypes;
    }

    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            console.log('activated route');
            console.log(data);
            this.order = data['order'];
            this.isLoaded = true;
            console.log(this.order);
        });
    }

    remove(uploadedFile) {
        if (window.confirm("Naozaj chcete vymazat danu polozku?")) {
            this._orderSrv.removeFile(uploadedFile.id).subscribe(
                result => {
                    this.orderFiles.splice(this.orderFiles.indexOf(uploadedFile), 1);
                }
            );
        }
    }

    assign() {
        this.order.assignedTo = this._usrService.getLoggedInUser();
        this.order.state = OrderStats.assigned;
        this._orderSrv.assignOrderToCurrentUser(this.orderId);
        console.log(this.order);
    }

    onUpload(event) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

    pictureUpload(filesToUpload) {
        this.parseFiles(filesToUpload,
            parsedFiles => {
                let orderFiles = new OrderFiles();
                orderFiles.text = 'test';
                orderFiles.files = parsedFiles;

                console.log('got files: ');
                console.log(orderFiles);
                this._orderSrv.addFilesToOrder(this.order.id, orderFiles).subscribe(
                    result => {
                        console.log('upload success');
                        console.log(result);
                    },
                    (err: HttpErrorResponse) => {
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

    get orderId() {
        return this.order.id
    }

    get creator() {
        return this.order.createdBy
    }

    get createdDate() {
        return this.order.created
    }

    get assignee() {
        return this.order.assignedTo
    }

    get client() {
        return this.order.mainContact.name + this.order.mainContact.surname
    }

    get invoices() {
        return this.order.invoices
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
        (selected === heating) || (selected === lighting))
    }

    get isHeatingSelected() {
        return this.selectedProfessions.find(selected => selected === heating)
    }

    get isVztSelected() {
        return this.selectedProfessions.find(selected => selected === vzt)
    }

    get isLightingSelected() {
        return this.selectedProfessions.find(selected => selected === lighting)
    }

    get totalCost() {
        return this.area * (this.lightingPrice + this.heatingPrice) + this.vztPrice;
    }

    get isAdministrator() {
        return this._loginServ.getLoggedInUser().role.indexOf("ROLE_ADMIN") > -1
    }

    get files() {
        return this.order.files;
    }
}
