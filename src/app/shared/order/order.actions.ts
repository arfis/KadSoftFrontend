import { Action } from '@ngrx/store';

export const GET_ORDERS_FAILURE = '[ORDERS] Getting orders failure';
export const GET_ORDERS_SUCCESS = '[ORDERS] Getting orders success';
export const GET_ORDERS = '[ORDERS] Orders';
export const UPDATE_PARAMETERS = '[ORDERS] Updating parameters';

export class GetOrdersAction implements Action {
    readonly type = GET_ORDERS;

    constructor(public payload: any) {}
}

export class GetOrdersSuccessAction implements Action {
    readonly type = GET_ORDERS_SUCCESS;

    constructor(public payload: any) {}
}

export class GetOrdersFailure implements Action {
    readonly type = GET_ORDERS_FAILURE;

    constructor(public payload: any) {}
}

export class UpdateParametersAction implements Action {
    readonly type = UPDATE_PARAMETERS;

    constructor(public payload: any) {}
}

export type Actions =
    | GetOrdersAction
    | GetOrdersSuccessAction
    | GetOrdersFailure
    | UpdateParametersAction;
