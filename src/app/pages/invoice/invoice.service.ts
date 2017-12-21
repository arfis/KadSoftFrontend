import {Injectable, OnInit} from "@angular/core";
import {Invoice} from "./invoice.model";
import {Observable} from "rxjs/Observable";
import {CustomerService} from "../users/user.service";
import {UserService} from "../../services/user.service";
import {Product} from "../../models/Product";
import {InvoiceStatus} from "./invoiceStatus.model";
import {RestService} from "../../services/rest.service";
import {CompanyPermissions} from "../../models/company-permisions.model";
import {Configuration} from "../../app.constants";
/**
 * Created by a619678 on 22. 5. 2017.
 */
@Injectable()
export class InvoiceService {


    public invoices: Invoice[] = new Array<Invoice>();

    directions = ['asc', 'desc'];

    activeSort = '';
    activeDirection = this.directions[0];
    activePage;
    pageSize;
    states = ['created', 'paid', 'expired', 'canceled', 'late_paid', 'wrong_paid'];

    constructor(private userSrv: CustomerService,
                private loggedUserService: UserService,
                private restServ: RestService,
                private configuration : Configuration) {

    }

    public getCachedInvoices(){
        return this.invoices;
    }

    public getPermissions(companyId : number) : Observable<CompanyPermissions>{
        return this.restServ.getCompanyPermissions(companyId);
    }

    public setInvoices(invoices : Invoice[]){
        this.invoices = invoices;
    }

    public generateInvoiceId(): number {
        return 10001;
    }

    // TODO : If just going directly on an specific invoice, no data is cached
    public getInvoiceById(id : number){

    }


    public getInvoice(id: number): Observable<Invoice> {
        return this.restServ.getInvoice(id);
    }

    public getInvoices(page: number, pageSize: number, sort=null, filterType=null, filter=null): Observable<any> {
        if (sort === this.activeSort) {
            this.activeDirection = this.directions[(this.directions.indexOf(this.activeDirection) + 1) % 2];
        }

        this.activeSort = sort;

        return this.restServ.getInvoices(page, pageSize, sort, this.activeDirection, filterType, filter,
            false);
    }

    public generatePdfLink(invoice : Invoice){
        return this.configuration.server + "invoice/" + invoice.id + ".pdf";
    }

    public generateHtmlLink(invoice : Invoice){
        return this.configuration.server + "invoice/" + invoice.id + ".html";
    }

    public payInvoice(invoice : Invoice){
        return this.restServ.payInvoice(invoice);
    }

    public generatePdfOfInvoice(invoice : Invoice){
        return this.restServ.generatePdfOfInvoice(invoice);
    }

    public sendEmailForInvoice(invoice : Invoice){
        return this.restServ.sendEmailForInvoice(invoice);
    }

    public storno(invoice: Invoice): Observable<Invoice> {
        return this.restServ.cancelInvoice(invoice);
    }

    public createInvoice(invoice: Invoice): Observable<Invoice> {

        return this.restServ.addInvoice(invoice);

    }

    public deleteInvoice(invoice: Invoice): Observable<Invoice[]> {
        this.invoices.splice(this.invoices.indexOf(invoice), 1);

        return Observable.of(this.invoices);
    }
}