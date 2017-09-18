import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Configuration} from '../app.constants';
import {LoginUser} from "../pages/login/login-user.model";
import {LoginResponse} from "../models/login-response.model";
import {Company} from "../models/company-model";
import {Customer} from "../pages/users/user.model";
import {Invoice} from "../pages/invoice/invoice.model";
import {Contact} from "../models/contact.model";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Order} from "../pages/order/order.model";
import {CompanyPermissions} from "../models/company-permisions.model";

@Injectable()
export class RestService {
    public currentInvoices: ReplaySubject<Invoice[]> = new ReplaySubject<Invoice[]>();

    public modelName: string;
    private headers: Headers;
    private accessToken: string;

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

        return this.http.post(this.config.server + this.config.authUrl, data).map(
            response =>
                response.json(),
            error =>
                console.log("authenticate error")
        );

    }

    public setAccessToken(accessToken: string) {
        localStorage.setItem('accessToken', accessToken);
        console.log("set accessToken " + accessToken);
        this.accessToken = accessToken;
        this.headers.set("Authorization", "Bearer " + this.accessToken);
    }

    public getUser(): Observable<LoginUser> {

        this.headers = new Headers();
        this.headers.append("Authorization", "Bearer " + this.accessToken);

        return this.http.get(this.config.server + this.config.userApi, {headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }

    getUserRoles(): Observable<any> {
        return this.http.get(this.config.server + this.config.rolesApi, {headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }

    registerUser(user): Observable<any> {

        return this.http.post(this.config.server + this.config.userApi+'s',
            user,{headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }
    // ACTIONS
    public payInvoice(invoice: Invoice): Observable<Invoice> {
        console.log("trying to change state of invoice to payed");
        return this.http.post(this.config.server + this.config.invoicesApi + "/" + invoice.id +"/actions/pay",
            null,{headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }

    public cancelInvoice(invoice: Invoice): Observable<Invoice> {
        console.log(this.headers);
        return this.http.post(this.config.server + this.config.invoicesApi + "/" + invoice.id +"/actions/cancel",
            null,{headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }

    public generatePdfOfInvoice(invoice: Invoice): Observable<Invoice> {
        return this.http.post(this.config.server + this.config.invoicesApi + "/" + invoice.id +"/actions/generatePdf",
            null,{headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }

    public sendEmailForInvoice(invoice: Invoice): Observable<Invoice> {
        return this.http.post(this.config.server + this.config.invoicesApi + "/" + invoice.id +"/actions/sendEmail",
            null,{headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }
    // END OF ACTIONS
    public getCompanyPermissions(companyId) : Observable<CompanyPermissions>{
        return this.http.get(this.config.server + "api/invoices/"+companyId+"/action", {headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }

    public getEmails(){
        return this.http.get(this.config.server + "api/email/text", {headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }
    /*Companies API*/
    public getCompanies(): Observable<Company[]> {
        return this.http.get(this.config.server + this.config.companiesApi, {headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }


    public updateCompany(company: Company): Observable<Company> {
        return this.http.put(this.config.server + this.config.companiesApi, company, {headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }


    public addComapny(company: Company): Observable<Company> {
        return this.http.post(this.config.server + this.config.companiesApi, company, {headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }

    public removeCompany(companyId: number) {
        return this.http.delete(this.config.server + this.config.companiesApi + "/" + companyId, {headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }

    /*Invoice API*/
    public getNextInvoiceNumber(companyId: number) {
        return this.http.get(this.config.server + "api/nexts/" + companyId + "/invoice/number", {headers: this.headers})
            .map(
                response => response.json(),
                error => error.json()
            );
    }

    public getInvoices() : Observable<Invoice[]> {
        return this.http.get(this.config.server + this.config.invoicesApi, {headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }

    public getInvoiceById(invoiceId : number) : Observable<Invoice>{
        return this.http.put(this.config.server + this.config.invoicesApi, {headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }

    public getOrders(): Observable<Order[]> {
        return this.http.get(this.config.server + this.config.ordersApi, {headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }

    public createOrder(order : Order){

        return this.http.post(this.config.server + this.config.ordersApi, order, {headers: this.headers})
            .map((response) =>
                    <Order>response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }


    public addInvoice(invoice : Invoice) : Observable<Invoice>{

        return this.http.post(this.config.server + this.config.invoicesApi, invoice, {headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }

    public getCustomers(): Observable<Customer[]> {
        return this.http.get(this.config.server + this.config.customerApi, {headers: this.headers})
            .map(
                response => response.text() ? response.json() : {},
                error => console.log("error: " + error));
    }

    public removeCustomer(customerId: number) {
        return this.http.delete(this.config.server + this.config.customerApi + "/" + customerId, {headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }

    public updateCustomer(customer : Customer) {
        return this.http.put(this.config.server + this.config.customerApi + "/" + customer.id, {headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }
    public setCustomerInformation(customerId: number, information: string) {
        return this.http.put(this.config.server + this.config.customerApi + "/" + customerId, information, {headers: this.headers})
            .map((response) =>
                    response.json(),
                error =>
                    console.log("an error was thrown")
            );
    }

    private extractData(res: Response) {
        return res.text() ? res.json() : {};
        ;
    }

    public createCustomer(customer: Customer) {
        console.log("trying to save customer: ");


        return this.http.post(this.config.server + this.config.customerApi, customer, {headers: this.headers})
            .map(
                response => response.json(),
                error => console.log("error: " + error));
    }

    // HELPERS
    public getAllFromLS(maxtime = 0): Array<any> {
        let json = localStorage.getItem('rest_all_' + this.modelName);
        if (json) {
            let obj = JSON.parse(json);
            if (obj && (obj.date < (Date.now() - maxtime) )) {
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
    public getAll(link : string): Observable<any[]> {
        return this.http.get(this.config.server + link,{headers: this.headers})
            .map((response: Response) => {
                // getting an array having the same name as the model
                let data = response.json()[this.modelName];
                // transforming the array from indexed to associative
                let tab = data.records.map((elem) => {
                    let unit = {};
                    // using the columns order and number to rebuild the object
                    data.columns.forEach((champ, index) => {
                        unit[champ] = elem[index];
                    });
                    return unit;
                });
                this.lastGetAll = tab;
                let obj = {
                    data: tab,
                    date: Date.now()
                };
                localStorage.setItem('rest_all_' + this.modelName, JSON.stringify(obj));
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

        return this.http.post(this.getActionUrl(), toAdd, {headers: this.headers})
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    public addAll(tab: Array<any>): Observable<Array<number>> {
        let toAdd = JSON.stringify(tab);

        return this.http.post(this.getActionUrl(), toAdd, {headers: this.headers})
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    public update(id: number, itemToUpdate: any): Observable<number> {
        return this.http.put(this.getActionUrl() + id, JSON.stringify(itemToUpdate), {headers: this.headers})
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
