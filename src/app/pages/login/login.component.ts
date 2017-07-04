import {Component, OnInit, OnDestroy} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {Http} from "@angular/http";
import {RestService} from "../../services/rest.service";
import {NotificationService} from "../../services/notification.service";
import {CustomerService} from "../users/user.service";
import {InvoiceService} from "../invoice/invoice.service";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {CompanyService} from "../administration/companies/company.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    private password: string;
    private email: string;

    constructor(private userServ: UserService,
                private router: Router,
                private http: Http,
                private restService: RestService,
                private notificationServ: NotificationService,
                private customerServ: CustomerService,
                private invoiceServ : InvoiceService,
                private companyServ : CompanyService) {
    }

    public ngOnInit() {
        window.dispatchEvent(new Event('resize'));
    }

    // authenticate(credentials: AuthCredentials): Observable<any> {
    //
    //   const data = {
    //     grant_type: "password",
    //     client_id:"1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4",
    //     client_secret:"4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k",
    //     username: credentials.email,
    //     password: credentials.password
    //   };
    //
    //   return this.http.post('/oauth/v2/token', data)
    //       .do(
    //           res => {
    //             console.log('auth finished');
    //             let data = res.json();
    //             this.tokenService.processTokenData(data);
    //             this.api.get('/api/core/identity').subscribe(res => {
    //               this.setIdentity(res.json());
    //             });
    //             this.api.get('/api/vademecum/offices/distributors/actual').subscribe(res => {
    //               const data = res.json();
    //               this.setIdentityDistributor(data);
    //             });
    //           },
    //           error => {
    //             this.handleAuthError(error);
    //           });
    // }

    private login() {

        this.restService.authenticate(this.email, this.password).subscribe(
            response => {
                this.restService.setAccessToken(response.access_token);

                this.restService.getUser().subscribe(
                    response => {

                        console.log("response!:");
                        console.log(response);
                        let user1 = new User({
                            id: response.id,
                            avatarUrl: 'public/assets/img/stano.jpg',
                            email: response.email,
                            username: response.email,
                            firstname: 'Stani',
                            lastname: 'Kadlecik',
                            role: response.roles
                        });

                        user1.connected = true;

                        Observable.forkJoin(this.customerServ.getCustomers(), this.restService.getCompanies()).subscribe(
                            result => {
                                console.log("got users:");
                                console.log(result);
                                this.customerServ.cacheCustomers(result[0]);
                                this.companyServ.cacheCompanies(result[1]);
                                this.invoiceServ.loadInvoices();
                                this.userServ.setCurrentUser(user1);
                                this.router.navigate(['orders']);
                            }
                        )

                    },
                    error => {
                        this.notificationServ.error(error);
                        this.router.navigate(['login']);
                    }
                )
            },
            error => {
                this.notificationServ.error(error.error_description);
                console.log(error);
            }
        );
    }

}

