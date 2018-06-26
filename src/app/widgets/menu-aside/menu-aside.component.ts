import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import {RouteConfigLoadStart, Router} from '@angular/router';
import {Roles, UserService} from '../../services/user.service';
import {UserRole} from "../../models/user-roles.model";
import {LoginUser} from "../../pages/login/login-user.model";
import {HelperService} from "../../helpers/helper.service";

@Component({
  selector: 'app-menu-aside',
  styleUrls: ['./menu-aside.component.css'],
  templateUrl: './menu-aside.component.html'
})
export class MenuAsideComponent implements OnInit {
  private currentUrl: string;
  public currentUser: LoginUser = new LoginUser();

  @Input() private links: Array<any> = [];

  constructor(private _userService: UserService,
              public router: Router) {
    // getting the current url
    // this.router.events.subscribe((evt: RouteConfigLoadStart) => this.currentUrl = evt.route.path);
    this._userService.currentUser.subscribe((user) => this.currentUser = user);
  }

  public ngOnInit() {
    // TODO
      console.log(this.currentUser);
  }

  checkPermission(itemRoles) {
    const {roles} = this._userService.getLoggedInUser();

    if (roles.find(role => role.role === Roles.adminRole)) {
      return true;
    }
    else if (itemRoles) {
      for (let role of roles) {
        if (itemRoles.indexOf(role.role) > -1) {
          return true;
        }
      }
    }
    return false;
  }

  get isAdmin() {
    return this._userService.isAdmin;
  }
}
