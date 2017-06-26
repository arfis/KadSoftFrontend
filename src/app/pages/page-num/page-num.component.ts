import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import {CustomerService} from "../users/user.service";
import {Customer} from "../users/user.model";
import {NotificationService} from "../../services/notification.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-page-num',
  styleUrls: ['./page-num.component.css'],
  templateUrl: './page-num.component.html'
})
export class PageNumComponent implements OnInit, OnDestroy {
  private id: number = 0;
  private sub: any;

  private customers : Customer[];

  constructor(
    private route: ActivatedRoute,
    private breadServ: BreadcrumbService,
    private customerServ : CustomerService,
    private notificationServ : NotificationService,
    private userServ : UserService
  ) {
    // TODO
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

    this.customerServ.getUsers().subscribe(
        customers => { this.customers = customers }
    )
  }

  public remove(customer : Customer){
    console.log("removing: ");
    console.log(customer);
    this.customerServ.removeCustomer(customer.id).subscribe(
        result => {
          this.customers.splice(this.customers.indexOf(customer),1);
          this.notificationServ.success("Customer " + customer.name + " was removed","Customer");
        },
        error => {
          if (error.status === 401){
            this.userServ.logout();
          }
          this.notificationServ.error("Customer " + customer.name + " was not removed","Customer");
        }
    )
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
    this.breadServ.clear();
    this.route = null;
  }
}
