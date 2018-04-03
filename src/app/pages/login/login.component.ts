import {Component, OnInit, OnDestroy} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {Http} from "@angular/http";
import {RestService} from "../../services/rest.service";
import {NotificationService} from "../../services/notification.service";
import {LoginUser} from "./login-user.model";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    password: string;
    email: string;

    constructor(private userServ: UserService,
                private router: Router,
                private restService : RestService,
                private notificationServ : NotificationService) {
    }

    public ngOnInit() {
        window.dispatchEvent(new Event('resize'));
    }


    private login() {

        this.restService.authenticate(this.email, this.password).subscribe(
            response => {
                this.restService.setAccessToken(response.access_token);

                this.restService.getUser().subscribe(
                    response => {

                        let user1 = response;
                        user1.avatarUrl = 'assets/img/stano.jpg';

                        user1.connected = true;

                        this.userServ.setCurrentUser(user1);

                        this.router.navigate(['']);
                    },
                    error => {
                        console.log(error);
                        this.notificationServ.error(error);
                        this.router.navigate(['login']);
                    }
                )
            },
            error => {
                this.notificationServ.error("zle meno alebo heslo");
                console.log(error);
            }
        );
    }

}

