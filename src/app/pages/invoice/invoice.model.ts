import {InvoiceStatus} from "./invoiceStatus.model";
import {Customer} from "../users/user.model";
import {Company} from "../../models/company-model";
import {Product} from "../../models/Product";
import {Contact} from "../../models/contact.model";
/**
 * Created by a619678 on 22. 5. 2017.
 */

export class Invoice{
    id : number;
    invoiceNumber : number;
    createdBy : string;
    order : number;
    created : Date;
    company : Company;
    companyContact : Contact;
    status : string;
    customer : Customer;
    totalPrice : number = 0;
    invoiceItems : Product[];
    value : number;
    invoicePath : string;
    variableSymbol : number;
    emailText?: string;

    customerId : number;
    sendByEmail : string;
    type : string;
}
