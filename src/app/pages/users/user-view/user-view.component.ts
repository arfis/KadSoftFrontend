import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../user.model";
import {Order} from "../../order/order.model";
import {OrderService} from "../../order/order.service";
import {RestService} from "../../../services/rest.service";
/**
 * Created by a619678 on 23. 5. 2017.
 */

@Component({
    selector: 'user-view',
    styleUrls: ['./user-view.component.css'],
    templateUrl: './user-view.component.html'
})

export class UserViewComponent implements OnInit {

    private buttonText = ['Zobraziť dodatočné informácie','Skryť dodatočné informácie'];

    public isCollapsed:boolean = true;
    private userInformation: Customer;
    private orders : Order[];

    constructor(private activatedRoute: ActivatedRoute,
                public router: Router,
                private orderServ : OrderService,
                private restServ : RestService) {

    }

    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {

            this.userInformation = data['userInformation'];

            console.log("customer:");
            console.log(this.userInformation);
            this.loadUserOrders();
        });
    }

    private loadUserOrders(){

        this.orderServ.getOrdersByClientId(this.userInformation.id).subscribe(
            result => {
                this.orders = result;
                console.log(this.orders);
            }
        );
    }

    getButtonMessage(){
        return this.buttonText[this.isCollapsed ? 0 : 1];
    }

    updateInformation(){
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