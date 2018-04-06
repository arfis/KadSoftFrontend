import { Action } from '@ngrx/store';

export const GET_INVOICES_FAILURE = '[INVOICE] Getting invoices failure';
export const GET_INVOICES_SUCCESS = '[INVOICE] Getting invoices success';
export const GET_INVOICES = '[INVOICE] Invoices';
export const UPDATE_PARAMETERS = '[INVOICE] Updating parameters';

export class GetInvoicesAction implements Action {
    readonly type = GET_INVOICES;

    constructor(public payload: any) {}
}

export class GetInvoicesSuccess implements Action {
    readonly type = GET_INVOICES_SUCCESS;

    constructor(public payload: any) {}
}

export class GetInvoicesFailure implements Action {
    readonly type = GET_INVOICES_FAILURE;

    constructor(public payload: any) {}
}

export class UpdateParametersAction implements Action {
    readonly type = UPDATE_PARAMETERS;

    constructor(public payload: any) {}
}

export type Actions =
    | GetInvoicesAction
    | GetInvoicesSuccess
    | GetInvoicesFailure
    | UpdateParametersAction;
