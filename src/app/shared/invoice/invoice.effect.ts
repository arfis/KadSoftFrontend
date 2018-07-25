import {GET_INVOICES, GET_INVOICES_FAILURE, GET_INVOICES_SUCCESS} from './invoice.actions';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {InvoiceService} from '../../pages/invoice/invoice.service';
import {Effect, Actions} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';

@Injectable()
export class InvoiceEffects {
    constructor(private actions$: Actions,
                private _invoiceService: InvoiceService) {
    }

    @Effect()
    getInvoices$: Observable<Action> = this.actions$
        .ofType(GET_INVOICES).pipe(
            mergeMap(action =>
                this._invoiceService.getInvoices((action as any).payload).pipe(
                    map(res => ({
                        type: GET_INVOICES_SUCCESS,
                        payload: res
                    })),
                    catchError(err =>
                        of({
                            type: GET_INVOICES_FAILURE,
                            payload: err
                        })))
            )
        )
}