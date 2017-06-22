import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserInformation} from "../user.model";
import {Order} from "../../order/order.model";
import {OrderService} from "../../order/order.service";
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
    private userInformation: UserInformation;
    private orders : Order[];

    constructor(private activatedRoute: ActivatedRoute,
                public router: Router,
                private orderServ : OrderService) {

    }

    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {

            this.userInformation = data['userInformation'];
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
    }
}