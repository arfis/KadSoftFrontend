import {Injectable, OnInit} from "@angular/core";
import {Invoice} from "./invoice.model";
import {Observable} from "rxjs/Observable";
import {CustomerService} from "../users/user.service";
import {UserService} from "../../services/user.service";
import {Product} from "../../models/Product";
import {InvoiceStatus} from "./invoiceStatus.model";
import {RestService} from "../../services/rest.service";
/**
 * Created by a619678 on 22. 5. 2017.
 */
@Injectable()
export class InvoiceService {


    public invoices: Invoice[];

    constructor(private userSrv: CustomerService,
                private loggedUserService: UserService,
                private restServ: RestService) {

    }

    public initializeInvoices(){
        this.restServ.getInvoices().subscribe(
            invoices => {
                this.invoices = invoices;
            },
            error => {
                console.log("error getting invoices");
                console.log(error);
            }
        )
    }

    public setInvoices(invoices : Invoice[]){
        this.invoices = invoices;
    }

    public generateInvoiceId(): number {
        return 10001;
    }

    public getInvoice(id: number): Observable<Invoice> {

        return Observable.of(this.invoices.find(invoice => invoice.id == id));
    }

    public getInvoices(): Observable<Invoice[]> {

        return this.restServ.getInvoices();
    }

    public storno(invoiceDelete: Invoice): Observable<Invoice> {
        let updatedInvoice = this.invoices.find(
            invoice => invoice.id == invoiceDelete.id);
        updatedInvoice.status = InvoiceStatus.canceled;

        return Observable.of(updatedInvoice);
    }

    public createInvoice(invoice: Invoice): Observable<Invoice> {

        return this.restServ.addInvoice(invoice);

    }

    public deleteInvoice(invoice: Invoice): Observable<Invoice[]> {
        this.invoices.splice(this.invoices.indexOf(invoice), 1);

        return Observable.of(this.invoices);
    }
}