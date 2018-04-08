import { Action } from '@ngrx/store';

export const GET_PROFESSIONS_FAILURE = '[PROFFESIONS] Getting professions failure';
export const GET_PROFESSIONS_SUCCESS = '[PROFFESIONS] Getting professions success';
export const GET_PROFESSIONS = '[PROFFESIONS] Professions';

export class GetProfessionsAction implements Action {
    readonly type = GET_PROFESSIONS;

}

export class GetProfessionsSuccessAction implements Action {
    readonly type = GET_PROFESSIONS_SUCCESS;

    constructor(public payload: any) {}
}

export class GetProfessionsFailureAction implements Action {
    readonly type = GET_PROFESSIONS_FAILURE;

    constructor(public payload: any) {}
}


export type Actions =
    | GetProfessionsAction
    | GetProfessionsSuccessAction
    | GetProfessionsFailureAction;
