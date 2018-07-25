import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatSort, MatPaginator } from '@angular/material';

import * as fromRoot from '../../app.reducer';

import { Store } from '@ngrx/store';
import * as fromOrders from '../../shared/order/order.reducer';
import { getTranslation } from "../../pages/invoice/invoiceStatus.model";
import { GetOrdersAction } from "../../shared/order/order.actions";
import { TableSettings } from "./TableSettings";
import { getOrderTranslation } from "../../pages/order/order.model";
import { GetInvoicesAction } from "../../shared/invoice/invoice.actions";


export class InvoiceTableDataSource extends DataSource<any> {
    subscriptions;
    _filterChange = new BehaviorSubject('');
    _paramsChange = new BehaviorSubject('');
    _length = new BehaviorSubject(0);

    displayDataChanges: Array<any>;
    tableSettings = new TableSettings();

    get params(): any {
        return this._paramsChange.value;
    }

    set params(params) {
        this._paramsChange.next(params);
    }

    get filter(): string {
        return this._filterChange.value;
    }

    set filter(filter: string) {
        this._filterChange.next(filter);
    }

    constructor(
        private _sort: MatSort,
        private _paginator: MatPaginator,
        private _store: Store<fromRoot.State>,
    ) {
        super();

        console.log(_sort, _paginator, _store);
        this.displayDataChanges = [this._sort.sortChange, this._filterChange, this._paramsChange];

        if (this._paginator) {
            this.displayDataChanges.push(this._paginator.page);
        }
    }

    connect(): Observable<any[]> {
        this.subscriptions = Observable.merge(...this.displayDataChanges).subscribe(() => {
            // this.tableSettings = new any();
            //     ? MatrixSearchConstants.columns.find(
            //         column => column.label === this._sort.active
            //     ).sort
            //     : null;
            // const {page, pageSize, sort, sortOrientation, filterType, filter, keyword, user, webOnly, architect}
            // = params.payload;
            console.log('hereeeee', this.params);
            this.tableSettings = {...this.tableSettings};
            this.tableSettings.sortOrientation = this._sort.direction;
            this.tableSettings.sort = this._sort.active;
            if (this._paginator) {
                console.log(this._paginator.pageIndex);
                this.tableSettings.page = this._paginator.pageIndex + 1;
                this.tableSettings.pageSize = this._paginator.pageSize;
            }
            this.tableSettings.keyword = this.filter;
            this.tableSettings.sortOrientation = this._sort.direction;
            this.tableSettings = {...this.tableSettings, ...this.params};
            //TODO
            console.log(this.tableSettings)
            this._store.dispatch(
                new GetInvoicesAction(this.tableSettings)
            );

        });

        return this._store.select(fromRoot.getInvoices).pipe(map(result => {
            if (result.data) {
                console.log('GOT: ', result.data);
                let invoices = result.data.map(
                    invoice => {
                        if (invoice.status) {
                            const invoiceStatus = this.getInvoiceStatusMessage(invoice.status);

                            const updated = {
                                ...invoice,
                                invoiceStatusText: invoiceStatus.text,
                                invoiceStatusLabel: invoiceStatus.label,
                            }
                            return updated;
                        }
                        return invoice;
                    })
                this._length.next(result.meta.totalItems);
                console.log(result);
                return invoices;
            }
        }));
    }

    getInvoiceStatusMessage(status) {

        if (!status) status = "created";
        return getTranslation(status);

    }

    disconnect() {
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
    }
}
