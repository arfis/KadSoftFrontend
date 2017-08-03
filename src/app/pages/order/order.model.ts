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
    state : number;
    modified : Date;
    files : string[];
    customerId : number;

}

export enum OrderStatus {
    notAssigned = 0,
    assigned = 1,
    waiting = 2,
    inProgress = 3,
    done = 4
}

export function getOrderTranslation(status : string){

    switch(status) {
        case "notAssigned" : return {text : "Nepriradena", label:"label-danger"};
        case "assigned" : return {text : "Priradena", label:"label-info"};
        case "waiting" : return {text : "Caka na schvalenie", label:"label-warning"};
        case "inProgress" : return {text : "Pracuje sa", label:"label-default"};
        case "done" : return {text : "Dokoncena", label:"label-success"};
        default: return {text:"Undefined: " + status, label:"label-danger"};
    }

}
