/**
 * Created by a619678 on 23. 5. 2017.
 */
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {Invoice} from "./invoice.model";
import {InvoiceService} from "./invoice.service";
import {Observable} from "rxjs/Observable";
/**
 * Created by a619678 on 23. 5. 2017.
 */
@Injectable()
export class InvoiceResolve implements Resolve<Invoice> {

    constructor(private invoiceSrv: InvoiceService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Invoice> {

        let invoiceId : number = route.params['invoiceNumber'];

        if (!invoiceId)
            return null;

        return this.invoiceSrv.getInvoice(invoiceId);
    }
}