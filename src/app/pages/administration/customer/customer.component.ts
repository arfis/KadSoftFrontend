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
import {Customer} from "../../users/user.model";

@Component({
    selector: 'customer',
    styleUrls: ['./customer.component.css'],
    templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit,OnDestroy {

    customers : Customer[];
    public selectedCustomer : Customer;

    constructor(
        private configurationServ : ConfigurationService,
        private msgServ: MessagesService,
        public router: Router,
        private notificationServ : NotificationService,
        private restServ : RestService
    ) {
        // TODO

    }

    public ngOnInit(){
        this.restServ.getCustomers().subscribe(
            customers => {
                this.customers = customers;
                console.log("customers");
                console.log(this.customers);
            }
        );
    }

    public onAdd(customer : Customer){
        this.customers.push(customer);
    }

    public ngOnDestroy() {
        // removing the header
        console.log("destroying the component");
    }

    public removeCustomer(customer : Customer) {
        this.restServ.removeCompany(customer.id).subscribe(
            result => {
                this.notificationServ.success("Company " + customer.mainContact.name + " was removed");
                this.customers.splice(this.customers.indexOf(customer),1);
            }
        );
    }

    public updateCustomer(customer : Customer) {
        this.selectedCustomer = customer;
    }

    public newClient(){
        this.selectedCustomer = undefined;
    }
}
