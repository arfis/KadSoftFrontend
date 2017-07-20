/**
 * Created by sevcik on 7/19/17.
 */
import {Action} from "@ngrx/store";
import {Invoice} from "../pages/invoice/invoice.model";

export const LOAD =                         '[Invoice] Load invoice';
export const SELECT =                       '[Invoice] Selecting invoice';
export const GET_ALL_INVOICES =             '[Invoice] Get all invoices';
export const LOAD_SUCCESS =                 '[Invoice] Load was successful';
export const LOAD_ERROR =                   '[Invoice] Load had an error';
export const LOAD_INVOICE =                 '[Invoice] Loading invoice';
export const ADD_INVOICE =                  '[Invoice] Add customer';
export const CREATE_SUCCESS =               '[Invoice] Create success';
export const CREATE_FAIL =                  '[Invoice] Create failure';
export const ADD_ALL_INVOICES_TO_TABLE =    '[Invoice] Getting all Invoices';
export const LOAD_INVOICE_ERROR =           '[Invoice] Load invoice error';
export const LOAD_INVOICE_SUCCESS =         '[Invoice] Load invoice success';

export class AddAllInvoicesAction implements Action {
    readonly type = ADD_ALL_INVOICES_TO_TABLE;

    constructor(public payload : Invoice[]){}
}

export class SelectAction implements Action {
    readonly type = SELECT;

    constructor(public payload : Invoice){}
}

export class GetAllInvoicesAction implements Action {
    readonly type = GET_ALL_INVOICES;

    constructor(){}
}

export class LoadAction implements Action {
    readonly type = LOAD;

    constructor(public payload : Invoice) {}
}
export class LoadSuccessAction implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: Invoice[]) { }
}

export class LoadFailedAction implements Action {
    readonly type = LOAD_ERROR;

    constructor(public payload: any) { }
}

export class LoadInvoiceAction implements Action {
    readonly type = LOAD_INVOICE;

    constructor() { }
}

export class LoadInvoiceErrorAction implements Action {
    readonly type = LOAD_INVOICE_ERROR;

    constructor(public payload: Invoice) { }
}

export class LoadInvoiceSuccessAction implements Action {
    readonly type = LOAD_INVOICE_SUCCESS;

    constructor(public payload: Invoice) { }
}

export class AddInvoiceAction implements Action {
    readonly type = ADD_INVOICE;

    constructor(public payload: Invoice) { }
}

export class CreateSuccessAction implements Action {
    readonly type = CREATE_SUCCESS;

    constructor(public payload: Invoice) { }
}

export class CreateFailureAction implements Action {
    readonly type = CREATE_FAIL;

    constructor(public payload: Invoice) { }
}
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
    = AddAllInvoicesAction
    | GetAllInvoicesAction
    | LoadFailedAction
    | LoadSuccessAction
    | LoadInvoiceAction
    | CreateSuccessAction
    | CreateFailureAction
    | AddInvoiceAction
    | LoadInvoiceErrorAction
    | LoadInvoiceSuccessAction
    | LoadAction
    | SelectAction;