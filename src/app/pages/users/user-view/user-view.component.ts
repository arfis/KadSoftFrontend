import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../user.model";
import {Order} from "../../order/order.model";
import {OrderService} from "../../order/order.service";
import {RestService} from "../../../services/rest.service";
import {UserService} from "../../../services/user.service";
import {CustomerService} from "../user.service";
import {Observable} from "rxjs/Observable";
import {NotificationService} from "../../../services/notification.service";
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

    public orders: Order[];
    public isCollapsed: boolean = true;
    private userInformation: Customer;
    private wasUserLoaded = false;
    private areOrdersLoaded = false;

    constructor(private activatedRoute: ActivatedRoute,
                public router: Router,
                private orderServ: OrderService,
                private restServ: RestService,
                private userSrv: CustomerService,
                private _notificationService: NotificationService) {

    }

    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {

            this.userInformation = data['userInformation'];

            if (!this.userInformation) {
                console.log("no user");
            } else {
                this.wasUserLoaded = true;
            }

        })
    }


    getButtonMessage() {
        return this.buttonText[this.isCollapsed ? 0 : 1];
    }

    updateInformation() {

        let idless = new Customer();
         Object.assign(idless, this.userInformation);

        delete idless.id;
        delete idless.mainContact.id;
        
        console.log("saving: " + this.userInformation.information);
        this.restServ.setCustomerInformation(this.userInformation.id, idless).subscribe(
            result => {
                this._notificationService.success('udaje boli aktualizovane','Uzivatel')
            },
            error => {
                this._notificationService.error('udaje neboli aktualizovane','Uzivatel')
            }
        )
    }
}