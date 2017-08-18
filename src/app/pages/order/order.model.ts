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
    state : string;
    modified : Date;
    files : string[];
    customerId : number;

}

export enum OrderStatus {
    notAssigned = 0,
    assigned = 1,
    waiting = 2,
    inProgress = 3,
    done = 4,
    createdByAnonymous = 5
}

export class OrderStats {
    public static notAssigned = "Nepriradena";
    public static assigned = "Priradena";
    public static done = "Dokoncena";
    public static expeded = "Vyexpedovana";
    public static createdByAnonymous = "Vytvoreny vonkajsim uzivatelom";
}

export const heating = '0';
export const vzt = '1';
export const lighting = '2';


export const _professions = [{label:'kurenie',value: heating}, {label:'vzt',value: vzt}, {label:'osvetlenie',value: lighting}];
export const _buildingTypes = [ {label:'typ1',value: 0}, {label:'typ2',value: 1}, {label:'typ3',value: 2},
                                {label:'typ4',value: 3}, {label:'typ5',value: 4}, {label:'typ6',value: 5},
                                {label:'typ7',value: 6}, {label:'typ8',value: 7}, {label:'ine',value: 8}];
export const _productTypes = [{label:'EC',value:0},{label:'EC Bytu', value:1},{label:'PEH',value:2},{label:'E4',value:3},
                          {label:'Horuco vod',value:4}];

export const _buildingTypesInfo = ["Duis malesuada neque elit, sit amet semper metus commodo non. Proin pellentesque lorem est, vitae efficitur elit hendrerit at. Integer vel sapien eget leo interdum aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
"Nulla elit arcu, rhoncus sed blandit sit amet, vestibulum id neque. Praesent mattis lacinia felis, non ullamcorper lacus hendrerit in.",
"Suspendisse suscipit vehicula enim, a pulvinar ex cursus vel. Donec tortor augue, consequat in sem nec, lobortis posuere orci. Fusce laoreet, massa",
    "Duis malesuada neque elit, sit amet semper metus commodo non. Proin pellentesque lorem est, vitae efficitur elit hendrerit at. Integer vel sapien eget leo interdum aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nulla elit arcu, rhoncus sed blandit sit amet, vestibulum id neque. Praesent mattis lacinia felis, non ullamcorper lacus hendrerit in.",
    "Suspendisse suscipit vehicula enim, a pulvinar ex cursus vel. Donec tortor augue, consequat in sem nec, lobortis posuere orci. Fusce laoreet, massa",
    "Duis malesuada neque elit, sit amet semper metus commodo non. Proin pellentesque lorem est, vitae efficitur elit hendrerit at. Integer vel sapien eget leo interdum aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nulla elit arcu, rhoncus sed blandit sit amet, vestibulum id neque. Praesent mattis lacinia felis, non ullamcorper lacus hendrerit in.",
    "Suspendisse suscipit vehicula enim, a pulvinar ex cursus vel. Donec tortor augue, consequat in sem nec, lobortis posuere orci. Fusce laoreet, massa",];

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
