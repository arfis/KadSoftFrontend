import {Contact} from "./contact.model";
import {RecordObject} from "./recordObject.model";
/**
 * Created by a619678 on 6. 6. 2017.
 */
export class Company extends RecordObject{

    mainContact : Contact;
    invoiceContact : Contact;

    name : string;
    ico : string;
    dic : string;

}