import {Injectable, OnInit} from "@angular/core";
import {Invoice} from "./invoice.model";
import {Observable} from "rxjs/Observable";
import {CustomerService} from "../customer/user.service";
import {UserService} from "../../services/user.service";

import {RestService} from "../../services/rest.service";
import {CompanyPermissions} from "../../models/company-permisions.model";
import {Configuration} from "../../app.constants";

import * as invoices from '../../actions/invoice';

import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Action, Store} from "@ngrx/store";
import {of} from "rxjs/observable/of";
/**
 * Created by a619678 on 22. 5. 2017.
 */
@Injectable()
export class InvoiceService {


    public invoices: Invoice[] = new Array<Invoice>();

    constructor(private userSrv: CustomerService,
                private loggedUserService: UserService,
                private restServ: RestService,
                private actions$: Actions,
                private configuration: Configuration) {

    }

    @Effect()
    createInvoice$: Observable<Action> = this.actions$
        .ofType(invoices.ADD_INVOICE)
        .map((action: invoices.AddInvoiceAction) => action.payload)
        .mergeMap(newInvoice =>
            this.createInvoice(newInvoice)
                .map(() => new invoices.CreateSuccessAction(newInvoice))
                .catch(() => of(new invoices.CreateFailureAction(newInvoice)))
        );

    /**
     * This effect makes use of the `startWith` operator to trigger
     * the effect immediately on startup.
     */
    @Effect()
    loadAllInvoices$: Observable<Action> = this.actions$
        .ofType(invoices.GET_ALL_INVOICES)
        .do(result => console.log("getting invoices in effect"))
        .map(toPayload)
        .startWith(new invoices.LoadInvoiceAction)
        .switchMap(() =>
            this.getInvoices()
                .map((invoiceList: Invoice[]) => new invoices.LoadSuccessAction(invoiceList))
                .catch(error => of(new invoices.LoadFailedAction(error)))
        );


    public getCachedInvoices() {
        return this.invoices;
    }

    public getPermissions(companyId: number): Observable<CompanyPermissions> {
        return this.restServ.getCompanyPermissions(companyId);
    }


    public generateInvoiceId(): number {
        return 10001;
    }

    // TODO : If just going directly on an specific invoice, no data is cached
    public getInvoiceById(id: number) {

    }


    public getInvoice(id: number): Invoice {
        if (this.invoices.length > 0) {
            return this.invoices.find(invoice => invoice.id == id);
        }
        else {
            let newInvoice = new Invoice();
            newInvoice.id = id;
            return newInvoice;
        }
    }

    public getInvoices(): Observable<Invoice[]> {

        return this.restServ.getInvoices();
    }

    public generatePdfLink(invoice: Invoice) {
        return this.configuration.server + "invoice/" + invoice.id + ".pdf";
    }

    public generateHtmlLink(invoice: Invoice) {
        return this.configuration.server + "invoice/" + invoice.id + ".html";
    }

    public payInvoice(invoice: Invoice) {
        return this.restServ.payInvoice(invoice);
    }

    public generatePdfOfInvoice(invoice: Invoice) {
        return this.restServ.generatePdfOfInvoice(invoice);
    }

    public sendEmailForInvoice(invoice: Invoice) {
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