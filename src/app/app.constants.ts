import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";

@Injectable()
export class Configuration {
    //public server: string = "http://digitalwalk.sk/";
    public server : string = environment.apiUrl;
    public authUrl: string = "oauth/v2/token";
    public userApi: string = "api/user";
    public invoicesApi : string = "api/invoices";
    public ordersApi : string = "api/orders";
    public companiesApi : string = "api/companies";
    public customerApi : string = "api/customers";

}
