/**
 * Created by sevcik on 4/6/18.
 */
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';

import {
    GET_CONSTRUCTION_TYPE, GET_CONSTRUCTION_TYPE_FAILURE,
    GET_CONSTRUCTION_TYPE_SUCCESS
} from './construction-type.actions';
import {RestService} from '../../services/rest.service';
import {mapToLabelValue} from '../../services/service.helper';

@Injectable()
export class ConstructionTypeEffects {
    constructor(private actions$: Actions,
                private _restService: RestService) {
    }

    @Effect()
    getOrders$: Observable<Action> = this.actions$
        .ofType(GET_CONSTRUCTION_TYPE).pipe(
            mergeMap(action =>
                this._restService.getConstructionTypes().pipe(
                    map(res => ({
                        type: GET_CONSTRUCTION_TYPE_SUCCESS,
                        payload: res.map(item => mapToLabelValue(item))
                    })),
                    catchError(err =>
                        of({
                            type: GET_CONSTRUCTION_TYPE_FAILURE,
                            payload: err
                        })))
            )
        )
}