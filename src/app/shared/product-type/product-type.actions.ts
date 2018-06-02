import { Action } from '@ngrx/store';

export const GET_PRODUCT_TYPES_FAILURE = '[PRODUCT_TYPE] Getting product type failure';
export const GET_PRODUCT_TYPES_SUCCESS = '[PRODUCT_TYPE] Getting product type success';
export const GET_PRODUCT_TYPES = '[PRODUCT_TYPE] Product type';

export class GetProductTypeAction implements Action {
    readonly type = GET_PRODUCT_TYPES;
}

export class GetProductTypeSuccessAction implements Action {
    readonly type = GET_PRODUCT_TYPES_SUCCESS;

    constructor(public payload: any) {}
}

export class GetProductTypeFailureAction implements Action {
    readonly type = GET_PRODUCT_TYPES_FAILURE;

    constructor(public payload: any) {}
}

export type Actions =
    | GetProductTypeAction
    | GetProductTypeSuccessAction
    | GetProductTypeFailureAction;
