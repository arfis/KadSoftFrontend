/**
 * Created by sevcik on 4/6/18.
 */
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {GET_ORDERS, GET_ORDERS_FAILURE, GET_ORDERS_SUCCESS} from './order.actions';
import {OrderService} from '../../pages/order/order.service';

@Injectable()
export class OrderEffects {
    constructor(private actions$: Actions,
                private _orderService: OrderService) {
    }

    @Effect()
    getOrders$: Observable<Action> = this.actions$
        .ofType(GET_ORDERS).pipe(
            mergeMap(action =>
                this._orderService.getOrders((action as any).payload).pipe(
                    map(res => ({
                        type: GET_ORDERS_SUCCESS,
                        payload: res
                    })),
                    catchError(err =>
                        of({
                            type: GET_ORDERS_FAILURE,
                            payload: err
                        })))
            )
        )
}