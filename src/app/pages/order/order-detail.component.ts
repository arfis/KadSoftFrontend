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
import {Order} from "./order.model";
import {OrderService} from "./order.service";

@Component({
    selector: 'order-detail',
    templateUrl: './order-detail.component.html'
})

export class OrderDetailComponent {

    private orders: Order[];
    private order: Order;
    public orderLoaded: boolean = false;

    public invoiceTypes = ["Proforma","Evidenčná","Zálohová faktúra"];

    constructor(private activatedRoute: ActivatedRoute,
                public router: Router,
                private orderSrv: OrderService,
                private loadingBar: SlimLoadingBarService,
                private notificationSrv: NotificationService,
                private loginServ: UserService) {

    }

    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {

            this.order = data['order'];
            console.log(this.order);

            if (this.order != null && !this.order.invoices) {

                console.log("company is undefined");

                this.orderSrv.getOrders().subscribe(
                    result => {
                        this.orderSrv.setOrders(result);
                        this.order = this.orderSrv.getOrder(this.order.id);

                        this.orderLoaded = true;
                    },
                    error => {
                        if (error.status === 401) {
                            this.loginServ.logout();
                        }
                    });
            }else {
                this.orderLoaded = true;
            }
        });
    }

}