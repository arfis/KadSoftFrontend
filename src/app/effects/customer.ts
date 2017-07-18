/**
 * Created by sevcik on 7/17/17.
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as customer from '../actions/customer';
import {CustomerService} from "../pages/customer/user.service";
import {Customer} from "../pages/customer/user.model";

@Injectable()
export class CustomerEffects {

    constructor(private actions$: Actions, private customerServ : CustomerService) { }
    /**
     * This effect makes use of the `startWith` operator to trigger
     * the effect immediately on startup.
     */
    @Effect()
    loadCollection$: Observable<Action> = this.actions$
        .ofType(customer.LOAD)
        .startWith(new customer.LoadAction())
        .switchMap(() =>
            this.customerServ.getCustomers()
                .toArray()
                .map((customers: Customer[]) => new customer.LoadSuccessAction(customers))
                .catch(error => of(new customer.LoadFailedAction(error)))
        );

    @Effect()
    addCustomerToCollection$: Observable<Action> = this.actions$
        .ofType(customer.CREATE)
        .map((action: customer.CreateAction) => action.payload)
        .mergeMap(newCustomer =>
            this.customerServ.createCustomer(newCustomer)
                .map(() => new customer.CreateSuccessAction(newCustomer))
                .catch(() => of(new customer.CreateFailureAction(newCustomer)))
        );
}