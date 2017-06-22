import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server: string = "http://digitalwalk.sk/";
    public authUrl: string = "oauth/v2/token";
    public apiUrl: string = 'php-crud-api/api.php/';
    public userApi: string = "api/user";
    public serverWithApiUrl = this.server + this.apiUrl;
}
