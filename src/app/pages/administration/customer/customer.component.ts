/**
 * Created by a619678 on 19. 6. 2017.
 */
import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import { MessagesService } from '../../../services/messages.service';
import {ConfigurationService} from "../../../services/configuration.service";
import {Router} from "@angular/router";
import {Company} from "../../../models/company-model";
import {Observable} from "rxjs/Observable";
import {NotificationService} from "../../../services/notification.service";
import {RestService} from "../../../services/rest.service";
import {Customer} from "../../customer/user.model";
import {Store} from "@ngrx/store";
import * as fromRoot from '../../../reducers/app.reducer';
import * as customerActions from '../../../actions/customer';
import {CustomerService} from "../../customer/user.service";

@Component({
    selector: 'customer',
    styleUrls: ['./customer.component.css'],
    templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit,OnDestroy {

    customers : Customer[];

    constructor(
        private configurationServ : ConfigurationService,
        private msgServ: MessagesService,
        public router: Router,
        private notificationServ : NotificationService,
        private restServ : RestService,
        private _store: Store<fromRoot.State>,
        private customerSrv : CustomerService
) {
    _store.dispatch(new customerActions.GetAllCustomersAction());
}

    public ngOnInit(){
        this._store.select(fromRoot.getAllCustomers).subscribe(
            result => {
                console.log("customers from store");
                console.log(result);
                this.customers = result;
            },
            error => {
                console.log(error);
            }
        )
    }

    public onAdd(customer : Customer){
        this.customers.push(customer);
    }

    public ngOnDestroy() {
        // removing the header
        console.log("destroying the component");
    }

    public removeCompany(customer : Customer){
        this.restServ.removeCompany(customer.id).subscribe(
            result => {
                this.notificationServ.success("Company " + customer.mainContact.name + " was removed");
                this.customers.splice(this.customers.indexOf(customer),1);
            }
        );
    }
}
