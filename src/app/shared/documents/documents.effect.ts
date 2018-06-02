/**
 * Created by sevcik on 4/6/18.
 */
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {RestService} from '../../services/rest.service';
import {GET_DOCUMENTS, GET_DOCUMENTS_FAILURE, GET_DOCUMENTS_SUCCESS} from './documents.actions';

@Injectable()
export class DocumentsEffects {
    constructor(private actions$: Actions,
                private _restService: RestService) {
    }

    @Effect()
    getDocuments$: Observable<Action> = this.actions$
        .ofType(GET_DOCUMENTS).pipe(
            mergeMap(action =>
                this._restService.getDocuments().pipe(
                    map(res => ({
                        type: GET_DOCUMENTS_SUCCESS,
                        payload: res.data
                    })),
                    catchError(err =>
                        of({
                            type: GET_DOCUMENTS_FAILURE,
                            payload: err
                        })))
            )
        )


}