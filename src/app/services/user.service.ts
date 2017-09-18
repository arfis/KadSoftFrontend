import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Router } from '@angular/router';
import {RestService} from "./rest.service";

@Injectable()
export class UserService {
    public currentUser: ReplaySubject<User> = new ReplaySubject<User>( 1 );
    public roles;

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
    public registerUser(user) {
        this.restService.registerUser(user).subscribe(
            result => console.log('user was registered'),
            error => console.log('error')
        )
    }

    public getLoggedInUser() : User{
        let user = new User();
        let userData = JSON.parse(localStorage.getItem('user'));
        Object.assign(user, userData);
        return user;
    }

    public setCurrentUser( user: User ) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser.next( user );
    }

    public logout() {
      let user = new User();
      user.connected = false;
      localStorage.removeItem('user');
      this.setCurrentUser( user );
      this.router.navigate(['login']);
    }

    public checkCredentials(email, password){
        if(email === "test@test.com" && password === "test"){
            return true;
        }
        else return false;
    }
}
