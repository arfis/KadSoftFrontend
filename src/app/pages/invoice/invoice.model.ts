import {InvoiceStatus} from "./invoiceStatus.model";
import {Customer} from "../users/user.model";
import {Company} from "../../models/company-model";
import {Product} from "../../models/Product";
/**
 * Created by a619678 on 22. 5. 2017.
 */

export class Invoice{
    id : number;
    invoiceNumber : number;
    createdBy : string;
    created : Date;
    companyContact : Company;
    status : InvoiceStatus;
    customerContact : Customer;
    totalPrice : number;
    products : Product[];
    value : number;
    invoicePath : string;
    variableSymbol : number;
}
