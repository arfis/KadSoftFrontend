import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../user.model";
import {Order} from "../../order/order.model";
import {OrderService} from "../../order/order.service";
import {RestService} from "../../../services/rest.service";
import {UserService} from "../../../services/user.service";
import {CustomerService} from "../user.service";
import {Observable} from "rxjs/Observable";
/**
 * Created by a619678 on 23. 5. 2017.
 */

@Component({
    selector: 'user-view',
    styleUrls: ['./user-view.component.css'],
    templateUrl: './user-view.component.html'
})

export class UserViewComponent implements OnInit {

    private buttonText = ['Zobraziť dodatočné informácie', 'Skryť dodatočné informácie'];

    public isCollapsed: boolean = true;
    private userInformation: Customer;
    private orders: Order[];
    private wasUserLoaded = false;
    private areOrdersLoaded = false;

    constructor(private activatedRoute: ActivatedRoute,
                public router: Router,
                private orderServ: OrderService,
                private restServ: RestService,
                private userSrv: CustomerService) {

    }

    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {

                this.userInformation = data['userInformation'];
                console.log(this.userInformation);

                if (!this.userInformation.mainContact) {
                    console.log("no user");
                }


                Observable.forkJoin(this.userSrv.getCustomers(), this.orderServ.getOrders())
                    .subscribe(
                        result => {

                            console.log('got result');
                            console.log(result);

                            this.userSrv.setCustomers(result[0]);
                            this.orderServ.setOrders(result[1]);
                            this.userInformation = this.userSrv.getUserById(this.userInformation.id);
                            this.orders = this.orderServ.getOrdersByClientId(this.userInformation.id)

                            console.log('filtered orders are: ');
                            console.log(this.orders);
                            console.log(!this.userInformation.mainContact);

                            if (!this.userInformation.mainContact) {
                                console.log('in if');
                                console.log(this.orders);
                                if (this.orders.length > 0) {

                                    this.userInformation.mainContact = this.orders[0].mainContact;
                                    console.log(this.userInformation);
                                    this.wasUserLoaded = true;
                                }

                            } else {
                                this.wasUserLoaded = true;
                            }
                        })
            }
        );
    }


    getButtonMessage() {
        return this.buttonText[this.isCollapsed ? 0 : 1];
    }

    updateInformation() {
        console.log("saving: " + this.userInformation.information);
        this.restServ.setCustomerInformation(this.userInformation.id, this.userInformation.information).subscribe(
            result => {
                console.log(result);
            },
            error => {
                console.log(error);
            }
        )
    }
}