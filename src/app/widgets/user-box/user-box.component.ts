import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import { Router } from '@angular/router';
import {LoginUser} from "../../pages/login/login-user.model";

@Component({
  /* tslint:disable */
  selector: '.userBox',
  /* tslint:enable */
  styleUrls: ['./user-box.component.css'],
  templateUrl: './user-box.component.html'
})
export class UserBoxComponent implements OnInit {
  private currentUser: LoginUser = new LoginUser();

  constructor(private userServ: UserService, private router: Router) {
    // se connecter au modif du user courant

      this.userServ.currentUser.subscribe((user: LoginUser) =>{
        this.currentUser = user;
      } );
  }

  public ngOnInit() {
    // TODO
  }

  private logout = (): void => {
    this.userServ.logout();
  }
}
