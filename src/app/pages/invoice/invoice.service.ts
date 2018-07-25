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
    filter;
    filterType;
    states = ['created', 'paid', 'expired', 'canceled', 'late_paid', 'wrong_paid'];

    constructor(private restServ: RestService,
                private configuration : Configuration) {

    }

    public generateInvoiceId(){
        return 10001;
    }

    public getPermissions(companyId : number) : Observable<CompanyPermissions>{
        return this.restServ.getCompanyPermissions(companyId);
    }

    public getInvoice(id: number): Observable<Invoice> {
        return this.restServ.getInvoice(id);
    }

    public getInvoices(params): Observable<any> {

        return this.restServ.getInvoices(params,false);
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


    public sendEmailForInvoice(invoice : Invoice){
        return this.restServ.sendEmailForInvoice(invoice);
    }

    public storno(invoice: Invoice): Observable<Invoice> {
        return this.restServ.cancelInvoice(invoice);
    }

    public createInvoice(invoice: Invoice): Observable<Invoice> {

        return this.restServ.addInvoice(invoice);

    }

    public sendCreditNote(id, params): Observable<any>{

        return this.restServ.createCreditInvoice(id, params);
    }
}