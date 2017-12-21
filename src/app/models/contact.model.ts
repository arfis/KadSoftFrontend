import {RecordObject} from "./recordObject.model";
/**
 * Created by a619678 on 23. 6. 2017.
 */
export class Contact extends RecordObject
{
    name: string;
    surname : string;
    street : string;
    city : string;
    postcode : string;
    telephone: string;
    email : string;
    country : string;
    iban? : string;
    accountNumber? : string;
    swift? : string;
}