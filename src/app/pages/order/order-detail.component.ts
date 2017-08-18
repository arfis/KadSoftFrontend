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
    _professions, getOrderTranslation, heating, lighting, Order, OrderStatus
} from "./order.model";
import {OrderService} from "./order.service";
import {Message, SelectItem} from "primeng/primeng";
import {invoiceTypes} from "../invoice/invoiceStatus.model";

@Component({
    selector: 'order-detail',
    styleUrls: ['./order-detail.component.css'],
    templateUrl: './order-detail.component.html'
})

export class OrderDetailComponent {

    private orders: Order[];
    private order: Order;
    public orderLoaded: boolean = false;
    public selectedUser = "Vyber uzivatela";
    public orderFiles = [{name:'Certifikat1.pdf', link:'certifikat1'}, {name:'Certifikat2.pdf', link:'certifikat2'}]
    uploadedFiles: any[] = [];
    professions: SelectItem[];
    buildingTypes: SelectItem[];
    productTypes: SelectItem[];

    selectedBuildingType: string;
    selectedProfessions: string[] = [];
    selectedProductType: string;
    msgs: Message[];
    area: number;

    constructor(private activatedRoute: ActivatedRoute,
                public router: Router,
                private _orderSrv: OrderService,
                private loadingBar: SlimLoadingBarService,
                private notificationSrv: NotificationService,
                private _loginServ: UserService) {

        this.professions = _professions;
        this.buildingTypes = _buildingTypes;
        this.productTypes = _productTypes;
    }

    ngOnInit() {
        console.log(this._loginServ.getLoggedInUser().role);
        this.activatedRoute.data.subscribe(data => {

            this.order = data['order'];
            console.log(this.order);

            if (this.order != null && !this.order.invoices) {

                console.log("company is undefined");

                this._orderSrv.getOrders().subscribe(
                    result => {
                        this._orderSrv.setOrders(result);
                        this.order = this._orderSrv.getOrder(this.order.id);

                        this.orderLoaded = true;
                    },
                    error => {
                        if (error.status === 401) {
                            this._loginServ.logout();
                        }
                    });
            }else {
                this.orderLoaded = true;
            }
        });
    }

    remove(uploadedFile) {
        if (window.confirm("Naozaj chcete vymazat danu polozku?")) {
            this.orderFiles.splice(this.orderFiles.indexOf(uploadedFile), 1);
        }
    }

    assign() {
        this._orderSrv.assignOrderToCurrentUser(this.orderId);
    }

    onUpload(event) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

    get orderId() { return this.order.id }
    get creator() { return this.order.createdBy }
    get createdDate() { return this.order.created }
    get assignee() { return this.order.assignedTo }
    get client() { return this.order.mainContact.name + this.order.mainContact.surname}
    get invoices() { return this.order.invoices }
    get state() { return getOrderTranslation(OrderStatus[this.order.state])};
    get invoiceTypes() { return invoiceTypes }

    get buildingInfo() { return _buildingTypesInfo[this.selectedBuildingType] }

    get isAreaShown() { return this.selectedProfessions.find(selected =>
                                        (selected === heating) || (selected === lighting))}
    get isAdministrator() { return this._loginServ.getLoggedInUser().role.indexOf("ROLE_ADMIN") > -1}
}
