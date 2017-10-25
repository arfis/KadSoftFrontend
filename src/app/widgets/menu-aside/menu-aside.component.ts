import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import {RouteConfigLoadStart, Router} from '@angular/router';
import { UserService } from '../../services/user.service';
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

  checkPermission(role : UserRole){
    if(role === UserRole.admin){
      return true;
    }
  }
}
