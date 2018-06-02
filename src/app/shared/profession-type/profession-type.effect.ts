/**
 * Created by sevcik on 4/6/18.
 */
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {OrderService} from '../../pages/order/order.service';
import {GET_PROFESSIONS, GET_PROFESSIONS_FAILURE, GET_PROFESSIONS_SUCCESS} from './profession-type.actions';
import {RestService} from '../../services/rest.service';
import {mapToLabelValue, normalizeToTypes} from '../../services/service.helper';

@Injectable()
export class ProfessionsEffects {
    constructor(private actions$: Actions,
                private _restService: RestService) {
    }

    @Effect()
    getProfessions$: Observable<Action> = this.actions$
        .ofType(GET_PROFESSIONS).pipe(
            mergeMap(action =>
                this._restService.getProfesionTypes().pipe(
                    map(res => ({
                        type: GET_PROFESSIONS_SUCCESS,
                        payload: res.map(item => mapToLabelValue(item))
                    })),
                    catchError(err =>
                        of({
                            type: GET_PROFESSIONS_FAILURE,
                            payload: err
                        })))
            )
        )


}