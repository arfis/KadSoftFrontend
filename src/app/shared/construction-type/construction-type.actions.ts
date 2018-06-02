import { Action } from '@ngrx/store';

export const GET_CONSTRUCTION_TYPE_FAILURE = '[CONSTRUCTION_TYPE] Getting orders failure';
export const GET_CONSTRUCTION_TYPE_SUCCESS = '[CONSTRUCTION_TYPE] Getting orders success';
export const GET_CONSTRUCTION_TYPE = '[CONSTRUCTION_TYPE] Orders';

export class GetConstructionTypeAction implements Action {
    readonly type = GET_CONSTRUCTION_TYPE;

}

export class GetConstructionTypeSuccessAction implements Action {
    readonly type = GET_CONSTRUCTION_TYPE_SUCCESS;

    constructor(public payload: any) {}
}

export class GetConstructionTypeFailure implements Action {
    readonly type = GET_CONSTRUCTION_TYPE_FAILURE;

    constructor(public payload: any) {}
}

export type Actions =
    | GetConstructionTypeAction
    | GetConstructionTypeSuccessAction
    | GetConstructionTypeFailure;
