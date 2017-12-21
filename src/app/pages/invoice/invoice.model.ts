import {InvoiceStatus} from "./invoiceStatus.model";
import {Customer} from "../users/user.model";
import {Company} from "../../models/company-model";
import {Product} from "../../models/Product";
import {Contact} from "../../models/contact.model";
import {InvoiceAction} from "./invoice-action.model";
/**
 * Created by a619678 on 22. 5. 2017.
 */

export class Invoice{
    id : number;
    invoiceNumber : number;
    createdBy : string;
    order : number;
    created : Date;
    company : Company = new Company();
    companyContact : Contact = new Contact();
    invoiceContact: Contact = new Contact();
    status : string;
    customer : Customer = new Customer();
    totalPrice : number = 0;
    invoiceItems : Product[] = new Array<Product>();
    value : number;
    variableSymbol : number;
    emailText?: string;

    customerId : number;
    sendByEmail : string;
    type : string;
    actions: InvoiceAction;
    tax: number;
}
