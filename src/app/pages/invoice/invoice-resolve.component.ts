/**
 * Created by a619678 on 23. 5. 2017.
 */
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {Invoice} from "./invoice.model";
import {InvoiceService} from "./invoice.service";
/**
 * Created by a619678 on 23. 5. 2017.
 */
@Injectable()
export class InvoiceResolve implements Resolve<Invoice> {

    constructor(private invoiceSrv: InvoiceService) {}

    resolve(route: ActivatedRouteSnapshot) {

        let invoiceId : number = route.params['invoiceNumber'];

        if (!invoiceId)
            return null;

        let invoice = this.invoiceSrv.getInvoice(invoiceId);

        return invoice;
    }
}