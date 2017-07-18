/**
 * Created by sevcik on 7/17/17.
 */
import { Action } from '@ngrx/store';
import {Customer} from "../pages/customer/user.model";

export const SEARCH =           '[Customer] Search';
export const SEARCH_COMPLETE =  '[Customer] Search Complete';
export const LOAD =             '[Customer] Load';
export const LOAD_SUCCESS =     '[Customer] Load was successful';
export const LOAD_ERROR =       '[Customer] Load had an error';
export const SELECT =           '[Customer] Select';
export const CREATE =           '[Customer] Create';
export const CREATE_SUCCESS =   '[Customer] Create success';
export const CREATE_FAIL =      '[Customer] Create failure';

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class SearchAction implements Action {
    readonly type = SEARCH;

    constructor(public payload: string) { }
}

export class SearchCompleteAction implements Action {
    readonly type = SEARCH_COMPLETE;

    constructor(public payload: Customer[]) { }
}

export class LoadAction implements Action {
    readonly type = LOAD;

    constructor(public payload : Customer[]){}
}

export class LoadSuccessAction implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: Customer[]) { }
}

export class LoadFailedAction implements Action {
    readonly type = LOAD_ERROR;

    constructor(public payload: any) { }
}

export class SelectAction implements Action {
    readonly type = SELECT;

    constructor(public payload: Customer) { }
}

export class CreateAction implements Action {
    readonly type = CREATE;

    constructor(public payload: Customer) { }
}

export class CreateSuccessAction implements Action {
    readonly type = CREATE_SUCCESS;

    constructor(public payload: Customer) { }
}

export class CreateFailureAction implements Action {
    readonly type = CREATE_FAIL;

    constructor(public payload: Customer) { }
}
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
    = SearchAction
    | SearchCompleteAction
    | LoadAction
    | LoadFailedAction
    | LoadSuccessAction
    | SelectAction
    | CreateAction
    | CreateSuccessAction
    | CreateFailureAction;
