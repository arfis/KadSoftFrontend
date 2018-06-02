import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import {RouteConfigLoadStart, Router} from '@angular/router';
import {Roles, UserService} from '../../services/user.service';
import {UserRole} from "../../models/user-roles.model";
import {LoginUser} from "../../pages/login/login-user.model";

@Component({
  selector: 'app-menu-aside',
  styleUrls: ['./menu-aside.component.css'],
  templateUrl: './menu-aside.component.html'
})
export class MenuAsideComponent implements OnInit {
  private currentUrl: string;
  public currentUser: LoginUser = new LoginUser();

  @Input() private links: Array<any> = [];

  constructor(private userServ: UserService, public router: Router) {
    // getting the current url
    // this.router.events.subscribe((evt: RouteConfigLoadStart) => this.currentUrl = evt.route.path);
    this.userServ.currentUser.subscribe((user) => this.currentUser = user);
  }

  public ngOnInit() {
    // TODO
  }

  checkPermission(itemRoles) {
    const {roles} = this.userServ.getLoggedInUser();

    if (roles.indexOf(Roles.adminRole) > -1) {
      return true;
    }
    else if (itemRoles) {
      for (let role of roles) {
        if (itemRoles.indexOf(role) > -1) {
          return true;
        }
      }
    }
    return false;
  }
  get isAdmin() {
    if(this.userServ.getLoggedInUser() &&
        this.userServ.getLoggedInUser().roles &&
        this.userServ.getLoggedInUser().roles.indexOf('ROLE_ADMIN') > -1){
      return true;
    } else {
      return false;
    }
  }
}
