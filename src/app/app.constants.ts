import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server: string = "https://digitalwalk.sk/";
    // public server : string = "http://192.168.0.100:8000/"
    public authUrl: string = "oauth/v2/token";
    public apiUrl: string = 'php-crud-api/api.php/';
    public userApi: string = "api/users";
    public companiesApi : string = "api/companies";
    public customerApi : string = "api/customers";
    public invoicesApi : string = "api/invoices";
    public ordersApi : string = "api/orders";
    public ordersDealerApi: string = 'api/orders-dealer';
    public rolesApi: string = "api/users/allowed/roles";

    public serverWithApiUrl = this.server + this.apiUrl;
}

export const defaultExpirationInDays = 15;
