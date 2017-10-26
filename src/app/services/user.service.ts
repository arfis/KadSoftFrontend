import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Router } from '@angular/router';
import {RestService} from "./rest.service";
import {LoginUser} from "../pages/login/login-user.model";

@Injectable()
export class UserService {

    public currentUser: ReplaySubject<LoginUser> = new ReplaySubject<LoginUser>( 1 );
    public adminRole = "ROLE_ADMIN";
    public technician = "ROLE_TECHNICIAN";
    public dealerRole = "ROLE_DEALER";

    public roles = [];

    constructor(
      private router: Router,
      private restService: RestService
    ) {
      this.getUserRoles();
    }

    public getUserRoles() {
        this.restService.getUserRoles().subscribe(
            result => {
                this.roles = result;
            },
            error => {
                console.log(error);
            }
        )
    }

    public resetPassword(email) {
        return this.restService.resetPassword(email);
    }
    
    public deleteUser(user) {
        return this.restService.deleteUser(user);
    }
    public isDealer() {
        let dealer = (!!this.getLoggedInUser().roles.find(role => role === this.dealerRole) && this.getLoggedInUser().roles.length === 1);
        return dealer;
    }

    public isAdmin() {
        let admin = (!!this.getLoggedInUser().roles.find(role => role === this.adminRole));
        return admin;
    }

    public registerUser(user) {
        return this.restService.registerUser(user);
    }

    public getLoggedInUser() : LoginUser{
        let user = new LoginUser();
        let userData = JSON.parse(localStorage.getItem('user'));
        Object.assign(user, userData);
        return user;
    }

    public setCurrentUser( user: LoginUser ) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser.next( user );
    }

    public logout() {
      let user = new LoginUser();
      user.connected = false;
      localStorage.removeItem('user');
      this.setCurrentUser( user );
      this.router.navigate(['login']);
    }

    public getAllUsers(): Observable<LoginUser[]> {
        return this.restService.getAllUsers();
    }

    public updateCurrentUser(user): Observable<any> {
        return this.restService.updateActualUser(user);
    }

    public updateUser(user, id): Observable<any> {
        return this.restService.updateUser(user, id);
    }
}
