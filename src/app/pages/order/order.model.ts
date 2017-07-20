import {Invoice} from "../invoice/invoice.model";
import {InvoiceStatus} from "../invoice/invoiceStatus.model";
import {User} from "../../models/user";
import {Contact} from "../../models/contact.model";

/**
 * Created by a619678 on 23. 5. 2017.
 */

export class Order{
    id : number;
    text : string;
    mainContact : Contact;
    invoice: Invoice;
    invoices : Invoice[];
    createdBy : User;
    assignedTo : User;
    created : Date;
    modified : Date;
    files : string[];
    customerId : number;

}