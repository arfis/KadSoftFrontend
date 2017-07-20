import {Injectable} from "@angular/core";
import {Customer} from "./user.model";
import {Observable} from "rxjs/Observable";
import {RestService} from "../../services/rest.service";
import {Contact} from "../../models/contact.model";
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Action, Store} from "@ngrx/store";
import {of} from "rxjs/observable/of";
import * as customer from '../../actions/customer';
import * as fromRoot from '../../reducers/app.reducer';

/**
 * Created by a619678 on 23. 5. 2017.
 */
@Injectable()
export class CustomerService {

    private customers: Customer[];

    constructor(private restServ: RestService,
                private actions$: Actions,
                private _store: Store<fromRoot.State>) {

    }

    @Effect()
    createCustomer$: Observable<Action> = this.actions$
        .ofType(customer.ADD_CUSTOMER)
        .map((action: customer.AddCustomerAction) => action.payload)
        .mergeMap(newCustomer =>
            this.createCustomer(newCustomer)
                .map(() => new customer.CreateSuccessAction(newCustomer))
                .catch(() => of(new customer.CreateFailureAction(newCustomer)))
        );

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
            this.getCustomers()
                .map((customers: Customer[]) => new customer.LoadSuccessAction(customers))
                .catch(error => of(new customer.LoadFailedAction(error)))
        );

    getCustomers(): Observable<any> {
        return this.restServ.getCustomers();
    }

    removeCustomer(customer): Observable<any> {
        return this.restServ.removeCustomer(customer);
    }

    setCustomers(customers: Customer[]) {
        console.log(customers);
        this.customers = customers;
    }


    createCustomer(customer: Customer): Observable<Customer> {
        console.log("trying to create a customer");
        return this.restServ.addCustomer(customer);
    }

    getUserByMail(email: string): Observable<Customer> {
        let usr = this.customers.find(user => user.mainContact.email == email);
        return Observable.of(usr);
    }

    getUserById(userId: number): Customer {
        console.log("getting user");

        let usr = this.customers.find(user => user.id == userId);
        console.log(usr);
        return usr;
    }

    updateInformation(userId: number, information: string) {
        this.getUserById(userId).information = information;
    }
}