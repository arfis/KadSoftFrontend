import { Action } from '@ngrx/store';

export const GET_DOCUMENTS_FAILURE = '[DOCUMENTS] Getting documents failure';
export const GET_DOCUMENTS_SUCCESS = '[DOCUMENTS] Getting documents success';
export const GET_DOCUMENTS = '[DOCUMENTS] Getting documents';

export class GetDocumentsAction implements Action {
    readonly type = GET_DOCUMENTS;

}

export class GetDocumentsSuccessAction implements Action {
    readonly type = GET_DOCUMENTS_SUCCESS;

    constructor(public payload: any) {}
}

export class GetDocumentsFailureAction implements Action {
    readonly type = GET_DOCUMENTS_FAILURE;

    constructor(public payload: any) {}
}


export type Actions =
    | GetDocumentsAction
    | GetDocumentsSuccessAction
    | GetDocumentsFailureAction;
