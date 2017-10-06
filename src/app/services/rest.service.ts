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
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";

@Injectable()
export class RestService {
    public currentInvoices: ReplaySubject<Invoice[]> = new ReplaySubject<Invoice[]>();

    public modelName: string;
    private headers: Headers;
    private accessToken: string;

    // cache data
    public lastGetAll: Array<any>;
    public lastGet: any;

    constructor(private http: HttpClient, private config: Configuration) {
        this.modelName = 'to-configure';
        this.accessToken = localStorage.getItem('accessToken');

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append("Authorization", "Bearer " + this.accessToken);

    }


    interceptResponse(res: HttpResponse<any>, next: HttpHandler): any {
        res = res.clone({
        });

        console.log('intercepting response');

    }
    public authenticate(email, password): Observable<LoginResponse> {
        const data = {
            grant_type: "password",
            client_id: "1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4",
            client_secret: "4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k",
            username: email,
            password: password
        };

        return this.http.post(this.config.server + this.config.authUrl, data);

    }

    public setAccessToken(accessToken: string) {
        localStorage.setItem('accessToken', accessToken);
        console.log("set accessToken " + accessToken);
        this.accessToken = accessToken;
        this.headers.set("Authorization", "Bearer " + this.accessToken);
    }

    public getUser(): Observable<LoginUser> {

        return this.http.get<LoginUser>(this.config.server + this.config.userApi);
    }

    getUserRoles(): Observable<any> {
        return this.http.get(this.config.server + this.config.rolesApi);
    }

    registerUser(user): Observable<any> {

        return this.http.post(this.config.server + this.config.userApi+'s',
            user)
        
    }
    // ACTIONS
    public payInvoice(invoice: Invoice): Observable<Invoice> {
        return this.http.post<Invoice>(this.config.server + this.config.invoicesApi + "/" + invoice.id +"/actions/pay",
            null);
    }

    public cancelInvoice(invoice: Invoice): Observable<Invoice> {
        return this.http.post<Invoice>(this.config.server + this.config.invoicesApi + "/" + invoice.id +"/actions/cancel",
            null);
    }

    public generatePdfOfInvoice(invoice: Invoice): Observable<Invoice> {
        return this.http.post<Invoice>(this.config.server + this.config.invoicesApi + "/" + invoice.id +"/actions/generatePdf",
            null);
    }

    public sendEmailForInvoice(invoice: Invoice): Observable<Invoice> {
        return this.http.post<Invoice>(this.config.server + this.config.invoicesApi + "/" + invoice.id +"/actions/sendEmail",
            null);
    }
    // END OF ACTIONS
    public getCompanyPermissions(companyId) : Observable<CompanyPermissions>{
        return this.http.get<CompanyPermissions>(this.config.server + "api/invoices/"+companyId+"/action");
    }

    public getEmails(): Observable<string[]>{
        return this.http.get<string[]>(this.config.server + "api/email/text");
    }
    /*Companies API*/
    public getCompanies(): Observable<Company[]> {
        return this.http.get(this.config.server + this.config.companiesApi);
    }


    public updateCompany(company: Company): Observable<Company> {
        return this.http.put<Company>(this.config.server + this.config.companiesApi, company);
    }


    public addComapny(company: Company): Observable<Company> {
        return this.http.post<Company>(this.config.server + this.config.companiesApi, company);
    }

    public removeCompany(companyId: number) {
        return this.http.delete(this.config.server + this.config.companiesApi + "/" + companyId);
    }

    /*Invoice API*/
    public getNextInvoiceNumber(companyId: number):Observable<any> {
        return this.http.get<any>(this.config.server + "api/nexts/" + companyId + "/invoice/number");
    }

    public getInvoices() : Observable<Invoice[]> {
        return this.http.get<Invoice[]>(this.config.server + this.config.invoicesApi)
    }


    public getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.config.server + this.config.ordersApi);
    }

    public createOrder(order : Order): Observable<Order>{
        return this.http.post<Order>(this.config.server + this.config.ordersApi, order);
    }


    public addInvoice(invoice : Invoice) : Observable<Invoice>{
        return this.http.post<Invoice>(this.config.server + this.config.invoicesApi, invoice);
    }

    public getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.config.server + this.config.customerApi);
    }

    public removeCustomer(customerId: number) {
        return this.http.delete(this.config.server + this.config.customerApi + "/" + customerId);
    }

    public updateCustomer(customer : Customer): Observable<Customer> {
        return this.http.put<Customer>(this.config.server + this.config.customerApi + "/" + customer.id, {headers: this.headers});
    }
    public setCustomerInformation(customerId: number, information: string) {
        return this.http.put(this.config.server + this.config.customerApi + "/" + customerId, information);
    }

    private extractData(res: Response) {
        return res.text() ? res.json() : {};
    }

    public createCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(this.config.server + this.config.customerApi, customer);
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
