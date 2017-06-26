import {InvoiceStatus} from "./InvoiceStatus.model";
import {Customer} from "../users/user.model";
import {Company} from "../../models/company-model";
import {Product} from "../../models/Product";
/**
 * Created by a619678 on 22. 5. 2017.
 */

export class Invoice{
    id : number;
    invoiceId : number;
    createdBy : string;
    created : Date;
    company : Company;
    status : InvoiceStatus;
    customer : Customer;
    totalPrice : number;
    products : Product[];
    value : number;
    invoicePath : string;
    variableSymbol : number;
}
