import { Action } from '@ngrx/store';

export const GET_ROLES_FAILURE = '[ROLES] Getting orders failure';
export const GET_ROLES_SUCCESS = '[ROLES] Getting roles success';
export const GET_ROLES = '[ROLES] Roles';

export class GetRolesAction implements Action {
    readonly type = GET_ROLES;
}

export class GetRolesSuccessAction implements Action {
    readonly type = GET_ROLES_SUCCESS;

    constructor(public payload: any) {}
}

export class GetRolesFailure implements Action {
    readonly type = GET_ROLES_FAILURE;

    constructor(public payload: any) {}
}

export type Actions =
    | GetRolesAction
    | GetRolesSuccessAction
    | GetRolesFailure;
