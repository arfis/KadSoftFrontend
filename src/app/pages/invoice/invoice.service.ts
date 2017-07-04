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

    makeFakeInvoices() {
        this.invoices = new Array<Invoice>();
        this.userSrv.setFakeData();

        for (let i = 0; i < 400; i++) {
            let invoice: Invoice = new Invoice();

            invoice.value = Math.round(Math.random() * 560 + 1);
            invoice.id = i;
            invoice.customerContact = this.userSrv.getUserById(Math.floor(Math.random() * 5));
            invoice.createdBy = this.loggedUserService.getLoggedInUser().getName();
            invoice.status = Math.round(Math.random() * 4);
            invoice.invoiceNumber = 1000 + i;
            invoice.invoicePath = "public/assets/invoices/invoice1.pdf";
            invoice.totalPrice = invoice.value;

            let products = new Array<Product>();

            for (let i = 0; i < 3; i++) {
                let product = new Product();
                product.investor = "Marian Investor";
                product.parcell = "1232132321";
                product.product = "Rodinny dom";
                product.value = 123 + i;

                products.push(product);
            }

            invoice.products = products;

            this.invoices.push(invoice);
        }
    }

    public generateInvoiceId(): number {
        return 10001;
    }

    public getInvoice(id: number): Observable<Invoice> {
        if (!this.invoices) {
            this.makeFakeInvoices();
        }
        console.log("getting invoice by id: " + id);
        return Observable.of(this.invoices.find(invoice => invoice.id == id));
    }

    public getInvoices(): Observable<Invoice[]> {
        if (!this.invoices || this.invoices.length < 1) {
            this.makeFakeInvoices();
        }
        return Observable.of(this.invoices);
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