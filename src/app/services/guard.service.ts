import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service';
import {User} from '../models/user';

@Injectable()
export class CanActivateGuard implements CanActivate {
    private connected: boolean = false;

    constructor(private router: Router,
                private user: UserService) {

        this.user.setCurrentUser(user.getLoggedInUser());

        if (user.getLoggedInUser()) {
            this.user.currentUser.subscribe((user) => {
                this.connected = user.connected;
            });
        }

    }

    public canActivate() {
        // test here if you user is logged
        if (!this.connected) {
            this.router.navigate(['login']);
        }
        else {
            return true;
        }
    }
}
