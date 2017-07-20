import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import {CustomerService} from "./user.service";
import {Customer} from "./user.model";
import {NotificationService} from "../../services/notification.service";
import {UserService} from "../../services/user.service";
import {Store} from "@ngrx/store";
import * as fromRoot from '../../reducers/app.reducer';
import * as customerActions from '../../actions/customer';

@Component({
  selector: 'customers',
  styleUrls: ['./customers.component.css'],
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit, OnDestroy {
  private id: number = 0;
  private sub: any;

  public customers : Customer[];

  constructor(
    private route: ActivatedRoute,
    private breadServ: BreadcrumbService,
    private customerServ : CustomerService,
    private notificationServ : NotificationService,
    private userServ : UserService,
    private _store: Store<fromRoot.State>
  ) {
    _store.dispatch(new customerActions.GetAllCustomersAction());
  }

  public ngOnInit() {
    // when calling routes change
    let idkey = 'id';
    this.sub = this.route.params.subscribe((data) => {
      this.id = data[idkey];
      // changing header
      this.breadServ.set({
        description: 'This is our ' + this.id + ' page',
        display: true,
        levels: [
          {
            icon: 'dashboard',
            link: ['/'],
            title: 'Home'
          },
          {
            icon: 'clock-o',
            link: ['/page/' + this.id],
            title: 'Page ' + this.id
          }
        ]
      });
    });

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

  public remove(customer : Customer){
    console.log("removing: ");
    console.log(customer);
    this.customerServ.removeCustomer(customer.id).subscribe(
        result => {
          this.customers.splice(this.customers.indexOf(customer),1);
          this.notificationServ.success("Customer " + customer.mainContact.name + " was removed","Customer");
        },
        error => {
          if (error.status === 401){
            this.userServ.logout();
          }
          this.notificationServ.error("Customer " + customer.mainContact.name + " was not removed","Customer");
        }
    )
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
    this.breadServ.clear();
    this.route = null;
  }
}
