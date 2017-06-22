import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';
import {LoginUser} from "../pages/login/login-user.model";
import {LoginResponse} from "../models/login-response.model";

@Injectable()
export class RestService {
    public modelName: string;
    private headers: Headers;
    private accessToken : string;

    // cache data
    public lastGetAll: Array<any>;
    public lastGet: any;

    constructor(private http: Http, private config: Configuration) {
        this.modelName = 'to-configure';
        this.accessToken = localStorage.getItem('accessToken');

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append("Authorization", "Bearer " + this.accessToken);

    }

    public authenticate(email, password): Observable<LoginResponse> {
        const data = {
            grant_type: "password",
            client_id: "1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4",
            client_secret: "4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k",
            username: email,
            password: password
        };

        return this.http.post(this.config.server+this.config.authUrl, data).map(
            response =>
                response.json(),
            error =>
                console.log("authenticate error")
        );

    }

    public setAccessToken( accessToken: string ) {
        localStorage.setItem('accessToken', accessToken);
        console.log("set accessToken " + accessToken);
        this.accessToken = accessToken;
        this.headers.set("Authorization", "Bearer " + this.accessToken);
    }

    public getUser(): Observable<LoginUser> {

        this.headers = new Headers();
        this.headers.append("Authorization", "Bearer " + this.accessToken);

        console.log("token:");
        console.log(this.headers);
        console.log("token: " + this.accessToken);
        console.log("getting user for url: " + this.config.server+this.config.userApi);
        return this.http.get(this.config.server+this.config.userApi, {headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }

    // HELPERS
    public getAllFromLS(maxtime = 0): Array<any> {
      let json = localStorage.getItem( 'rest_all_' + this.modelName );
      if ( json ) {
        let obj = JSON.parse(json);
        if ( obj && (obj.date < (Date.now() - maxtime) ) ) {
          return obj;
        }
      }
    }


    public getFromCache(id): any {
      if (this.lastGetAll) {
        return this.lastGetAll.find((unit) => unit.id === id);
      } else {
        return null;
      }
    }

    private getActionUrl() {
      return this.config.serverWithApiUrl + this.modelName + '/';
    }


    // REST functions
    public getAll(): Observable<any[]> {
        return this.http.get(this.getActionUrl())
            .map((response: Response) => {
              // getting an array having the same name as the model
              let data = response.json()[this.modelName];
              // transforming the array from indexed to associative
              let tab = data.records.map((elem) => {
                let unit = {};
                // using the columns order and number to rebuild the object
                data.columns.forEach( (champ, index) => {
                  unit[champ] = elem[index];
                });
                return unit;
              });
              this.lastGetAll = tab;
              let obj = {
                data: tab,
                date: Date.now()
              };
              localStorage.setItem( 'rest_all_' + this.modelName, JSON.stringify(obj) );
              return tab;
            })
            .catch(this.handleError);
    }

    public get(id: number): Observable<any> {
        return this.http.get(this.getActionUrl() + id)
            .map((response: Response) => {
              let data = response.json();
              this.lastGet = data;
              return data;
            })
            .catch(this.handleError);
    }

    public add(item: any): Observable<number> {
        let toAdd = JSON.stringify(item);

        return this.http.post(this.getActionUrl(), toAdd, { headers: this.headers })
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    public addAll(tab: Array<any>): Observable<Array<number>> {
      let toAdd = JSON.stringify(tab);

      return this.http.post(this.getActionUrl(), toAdd, { headers: this.headers })
          .map((response: Response) => response.json())
          .catch(this.handleError);
    }

    public update(id: number, itemToUpdate: any): Observable<number> {
        return this.http.put(this.getActionUrl() + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    public delete(id: number): Observable<Response> {
        return this.http.delete(this.getActionUrl() + id)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
