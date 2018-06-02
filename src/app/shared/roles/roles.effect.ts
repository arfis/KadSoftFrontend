/**
 * Created by sevcik on 4/6/18.
 */
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {GET_ROLES, GET_ROLES_FAILURE, GET_ROLES_SUCCESS} from './roles.actions';
import {RestService} from '../../services/rest.service';
import {mapToLabelValue} from '../../services/service.helper';

@Injectable()
export class RoleEffects {
    constructor(private actions$: Actions,
                private _restService: RestService) {
    }

    @Effect()
    getRoles$: Observable<Action> = this.actions$
        .ofType(GET_ROLES).pipe(
            mergeMap(action =>
                this._restService.getUserRoles().pipe(
                    map(res => ({
                        type: GET_ROLES_SUCCESS,
                        payload: res
                    })),
                    catchError(err =>
                        of({
                            type: GET_ROLES_FAILURE,
                            payload: err
                        })))
            )
        )
}