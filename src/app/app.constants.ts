import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server: string = "http://digitalwalk.sk/";
    // public server : string = "http://127.0.0.1:8000/"
    public authUrl: string = "oauth/v2/token";
    public apiUrl: string = 'php-crud-api/api.php/';
    public userApi: string = "api/user";
    public companiesApi : string = "api/companies";
    public customerApi : string = "api/customers";
    public invoicesApi : string = "api/invoices";
    public ordersApi : string = "api/orders";

    public serverWithApiUrl = this.server + this.apiUrl;
}
