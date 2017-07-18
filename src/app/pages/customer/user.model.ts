import {Contact} from "../../models/contact.model";
/**
 * Created by a619678 on 23. 5. 2017.
 */
export interface Customer{
    id : number;
    ico?:string;
    dic?:string;
    mainContact : Contact;
    invoiceContact? : Contact;
    information? : string;
}