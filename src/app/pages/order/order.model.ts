import {Invoice} from "../invoice/invoice.model";
import {InvoiceStatus} from "../invoice/invoiceStatus.model";
import {User} from "../../models/user";

/**
 * Created by a619678 on 23. 5. 2017.
 */

export class Order{
    id : number;
    description : string;
    invoice : Invoice;
    createdBy : User;
    assignedTo : User;
    created : Date;
    modified : Date;
    files : string[];

}