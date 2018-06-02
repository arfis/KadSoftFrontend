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

import {GET_PRODUCT_TYPES, GET_PRODUCT_TYPES_SUCCESS, GET_PRODUCT_TYPES_FAILURE} from './product-type.actions';
import {mapToLabelValue} from '../../services/service.helper';

@Injectable()
export class ProductTypeEffects {
    constructor(private actions$: Actions,
                private _restService: RestService) {
    }

    @Effect()
    getProductTypes$: Observable<Action> = this.actions$
        .ofType(GET_PRODUCT_TYPES).pipe(
            mergeMap(() =>
                this._restService.getProductTypes().pipe(
                    map(res => ({
                        type: GET_PRODUCT_TYPES_SUCCESS,
                        payload: res.map(item => mapToLabelValue(item))
                    })),
                    catchError(err =>
                        of({
                            type: GET_PRODUCT_TYPES_FAILURE,
                            payload: err
                        })))
            )
        )
}