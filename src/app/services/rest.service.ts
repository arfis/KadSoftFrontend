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
import {Type} from "../models/type";
import {UserService} from "./user.service";
import {Item} from "../component/product-list/item.model";

@Injectable()
export class RestService {
    public currentInvoices: ReplaySubject<Invoice[]> = new ReplaySubject<Invoice[]>();

    public modelName: string;
    private headers: Headers;
    private accessToken: string;

    // cache data
    public lastGetAll: Array<any>;
    public lastGet: any;

    constructor(private http: HttpClient,
                private config: Configuration) {
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

        return this.http.post(this.config.server + this.config.authUrl, data);

    }

    public post<T>(link): Observable<T> {
        return this.http.post<T>(link, {});
    }

    public get<T>(link): Observable<T> {
        return this.http.get<T>(link);
    }

    public setAccessToken(accessToken: string) {
        localStorage.setItem('accessToken', accessToken);
        console.log("set accessToken " + localStorage.getItem('accessToken'));
    }

    public getUser(): Observable<LoginUser> {

        return this.http.get<LoginUser>(this.config.server + this.config.userApi);
    }

    public updateActualUser(user): Observable<any> {
        return this.http.put<any>(this.config.server + this.config.userApi, user);
    }

    public updateUser(user, userId): Observable<any> {
        return this.http.put<any>(this.config.server + this.config.userApi + `/${userId}`, user);
    }

    public deleteUser(userId) {
        return this.http.delete<any>(this.config.server + this.config.userApi + `/${userId}`);
    }

    public getAllUsers(): Observable<LoginUser[]> {
        return this.http.get<LoginUser[]>(this.config.server + this.config.userApi + '/list');
    }

    getUserRoles(): Observable<any> {
        return this.http.get(this.config.server + this.config.rolesApi);
    }

    registerUser(user): Observable<any> {

        return this.http.post(this.config.server + this.config.userApi, user)

    }

    // ACTIONS
    public payInvoice(invoice: Invoice): Observable<Invoice> {
        return this.http.post<Invoice>(this.config.server + this.config.invoicesApi + "/" + invoice.id + "/actions/pay",
            null);
    }

    public cancelInvoice(invoice: Invoice): Observable<Invoice> {
        return this.http.post<Invoice>(this.config.server + this.config.invoicesApi + "/" + invoice.id + "/actions/cancel",
            null);
    }

    public generatePdfOfInvoice(invoice: Invoice): Observable<Invoice> {
        return this.http.post<Invoice>(this.config.server + this.config.invoicesApi + "/" + invoice.id + "/actions/generatePdf",
            null);
    }

    public sendEmailForInvoice(invoice: Invoice): Observable<Invoice> {
        return this.http.post<Invoice>(this.config.server + this.config.invoicesApi + "/" + invoice.id + "/actions/sendEmail",
            null);
    }

    public resetPassword(email) {
        return this.http.post<any>(this.config.server + `api/users/${email}/reset`, {});
    }

    // END OF ACTIONS
    public getCompanyPermissions(companyId): Observable<CompanyPermissions> {
        return this.http.get<CompanyPermissions>(this.config.server + "api/invoices/" + companyId + "/action");
    }

    public getEmails(): Observable<any[]> {
        console.log('getting emails');
        return this.http.get<any[]>(this.config.server + "api/email/text");
    }

    public createEmail(email): Observable<any>{
        return this.http.post<string[]>(this.config.server + "api/emails/texts", email);
    }

    public updateEmail(id, email): Observable<any> {
        return this.http.put<string[]>(this.config.server + `api/emails/${id}/text`, email);
    }

    public deleteEmail(id) {
        return this.http.delete<string[]>(this.config.server + `api/emails/${id}/text`);
    }

    /*Companies API*/
    public getCompanies(): Observable<Company[]> {
        return this.http.get(this.config.server + this.config.companiesApi);
    }


    public updateCompany(company: Company, id): Observable<Company> {

        let companyWithoutId = new Company();
        Object.assign(companyWithoutId, company);
        console.log(companyWithoutId);
        delete companyWithoutId.id;

        return this.http.put<Company>(this.config.server + this.config.companiesApi + `/${id}`, companyWithoutId);
    }

    public patchCompany(company: Company, id: number): Observable<Company> {
        return this.http.patch<Company>(this.config.server + this.config.companiesApi + `/${id}`, company);
    }

    public addComapny(company: Company): Observable<Company> {
        return this.http.post<Company>(this.config.server + this.config.companiesApi, company);
    }

    public removeCompany(companyId: number) {
        return this.http.delete(this.config.server + this.config.companiesApi + "/" + companyId);
    }

    /*Invoice API*/
    public getNextInvoiceNumber(companyId: number): Observable<any> {
        return this.http.get<any>(this.config.server + `api/invoices/${companyId}/next-number`);
    }

    public getInvoices(page, pageSize): Observable<Invoice[]> {
        return this.http.get<any>(this.config.server + this.config.invoicesApi + '?page=' + page + '&pageSize=' + pageSize);
    }

    public getInvoice(id): Observable<any> {
        return this.http.get<any>(this.config.server + this.config.invoicesApi + `/${id}`);
    }

    public getOrders(page, pageSize, sort, sortDirection, filterType, filter, isDealer): Observable<any> {

        let query = (!!sort) ? `&orderBy[]=${sort}=${sortDirection}` : '';
        query += (!!filter) ? `&filters[]=${filterType}=${filter}` : '';


        return this.http.get<any>(this.config.server + this.config.ordersApi + '?page=' + page + '&pageSize=' + pageSize + query);

    }

    public getOrder(orderId): Observable<any> {
        return this.http.get<any>(this.config.server + this.config.ordersApi + `/${orderId}`);
    }

    public createOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.config.server + this.config.ordersApi + '-dealer', order);
    }

    public updateOrder(order): Observable<Order> {
        let orderWithoutId = new Order();
        Object.assign(orderWithoutId, order);

        delete orderWithoutId.id;

        return this.http.put<Order>(this.config.server + this.config.ordersApi + `/${order.id}`, orderWithoutId);
    }

    public patchOrder(order, id) {
        return this.http.patch<Order>(this.config.server + this.config.ordersApi + `/${id}`, order);
    }

    public addInvoice(invoice: Invoice): Observable<Invoice> {
        return this.http.post<Invoice>(this.config.server + this.config.invoicesApi, invoice);
    }

    public getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.config.server + this.config.customerApi);
    }

    public removeCustomer(customerId: number) {
        return this.http.delete(this.config.server + this.config.customerApi + "/" + customerId);
    }

    public updateCustomer(customer: Customer): Observable<Customer> {
        return this.http.put<Customer>(this.config.server + this.config.customerApi + "/" + customer.id, {headers: this.headers});
    }

    public setCustomerInformation(customerId: number, customer: Customer) {
        return this.http.put(this.config.server + this.config.customerApi + "/" + customerId, customer);
    }

    private extractData(res: Response) {
        return res.text() ? res.json() : {};
    }

    public createCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(this.config.server + this.config.customerApi, customer);
    }

    public getConstructionTypes(): Observable<Type[]> {
        return this.http.get<Type[]>(this.config.server + 'api/construction-type/');
    }

    public getProductTypes(): Observable<Type[]> {
        return this.http.get<Type[]>(this.config.server + 'api/product-type/');
    }

    public getProfesionTypes(): Observable<Type[]> {
        return this.http.get<Type[]>(this.config.server + 'api/profession-type/');
    }

    public addFilesToOrder(orderId, files) {
        return this.http.patch(this.config.server + 'api/orders/' + orderId, files, {});
    }

    public removeFile(fileId) {
        console.log('TODO: removing: ' + fileId);
        return this.http.delete(this.config.server + 'api/items/' + `${fileId}`);
    }

    public getOrderStates(): Observable<any[]> {
        return this.http.get<any[]>(this.config.server + 'api/orders/states');
    }

    public addItem(item): Observable<any> {
        return this.http.post<any>(this.config.server + 'api/items', item);
    }

    public deleteItem(id): Observable<any> {
        return this.http.delete<any>(this.config.server + `api/items/${id}`);
    }

    public updateItem(item, id): Observable<Item> {
        return this.http.put<Item>(this.config.server + `api/items/${id}`, item);
    }

    public getItems(): Observable<any> {
        return this.http.get<Item[]>(this.config.server + `api/items`);
    }

    public getCustomersByEmail(searchString: string, users: Customer[]): Customer[] {
        return users.filter(user => (user.mainContact.email.indexOf(searchString) > -1) ||
        (user.mainContact.surname.indexOf(searchString) > -1) ||
        (user.mainContact.name.indexOf(searchString) > -1));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
