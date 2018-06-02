import {Action} from '@ngrx/store';
import {Actions} from '@ngrx/effects';
export interface ActionsWithPayload extends Actions {
    payload;
}