import {Invoice} from "../invoice/invoice.model";
import {InvoiceStatus} from "../invoice/invoiceStatus.model";
import {User} from "../../models/user";
import {Contact} from "../../models/contact.model";
import {OrderPerson} from "../../models/OrderPerson";
import {LoginUser} from "../login/login-user.model";

/**
 * Created by a619678 on 23. 5. 2017.
 */

export class Order{
    id : number;
    text : string;
    mainContact : Contact;
    invoiceContact: Contact;

    invoice: Invoice;
    invoices : Invoice[];
    createdBy : User;
    assignedTo : LoginUser;
    created : Date;
    state : string;
    modified : Date;
    files : string[];
    customerId : number;
    constructionType: any;
    productType: any;
    professions: any[];
    note: string;
    area: number;
    price: number;
    actions: Actions;

    createdAt: Date;
    updatedAt: Date;
    vztPrice: number;
    lightingPrice: number;
    heatingPrice: number;
    orderedBy: OrderPerson;

    energyCertificatesCount: number; //ECB
    energyAuditsCount: number; //TT

}

export enum OrderStatus {
    notPrepared = 0,
    notAssigned = 1,
    assigned = 2,
    done = 3,
    waiting = 4,
    expeded = 5,
    createdByAnonymous = 6
}

export class Actions {
    toPreparing: string;
    toUnassigned: string;
    toAssigned: string;
    toFinished: string;
    toDispatched: string;

}

export class OrderStats {
    public static notPrepared = "Nepripravena";
    public static notAssigned = "Pripravovana";
    public static assigned = "Nepriradena";
    public static done = "Priradena";
    public static expeded = "Dokoncena";
    public static createdByAnonymous = "Odoslana";
}

export const orderStatesConst = [{label:OrderStats.notPrepared, value:0},
    {label:OrderStats.notAssigned, value:1},{label:OrderStats.assigned, value:2},
    {label:OrderStats.done, value:3},{label:OrderStats.expeded, value:4},
    {label:OrderStats.createdByAnonymous, value:5}, {label:"Vypnut", value:-1}]
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
        case "draft" : return {text : "Nepripravena", label:"label-danger"};
        case "unassigned" : return {text : "Nepriradena", label:"label-danger"};
        case "assigned" : return {text : "Priradena", label:"label-info"};
        case "preparing" : return {text : "Pripravovana", label:"label-warning"};
        case "dispatched" : return {text : "Odoslana", label:"label-default"};
        case "finished" : return {text : "Dokoncena", label:"label-success"};
        default: return {text:"???", label:"label-danger"};
    }

}
