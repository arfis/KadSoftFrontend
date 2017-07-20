/**
 * Created by sevcik on 7/17/17.
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {Effect, Actions, toPayload} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';

import * as customer from '../actions/customer';
import {CustomerService} from "../pages/customer/user.service";
import {Customer} from "../pages/customer/user.model";
import * as fromRoot from '../reducers/app.reducer';

@Injectable()
export class CustomerEffects {


    public listOffAllCustomers;
    /**
     * This effect makes use of the `startWith` operator to trigger
     * the effect immediately on startup.
     */
    @Effect()
    loadAllCustomers$: Observable<Action> = this.actions$
        .ofType(customer.GET_ALL_CUSTOMERS)
        .map(toPayload)
        .startWith(new customer.LoadAction)
        .switchMap(() =>
            this.customerServ.getCustomers()
                .map((customers: Customer[]) => new customer.LoadSuccessAction(customers))
                .catch(error => of(new customer.LoadFailedAction(error)))
        );

    constructor(
        private actions$: Actions,
        private _store: Store<fromRoot.State>,
        private customerServ: CustomerService
    ) {
        this._store.select(fromRoot.getAllCustomers).subscribe(list => {
            this.listOffAllCustomers = list;
        });
    }
}