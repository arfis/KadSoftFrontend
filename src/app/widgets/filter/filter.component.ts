import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {SelectItem} from "primeng/primeng";
import {isUndefined} from "util";
import {invoiceStatesConst, invoiceStatuses} from "../../pages/invoice/invoiceStatus.model";
import {orderStatesConst} from "../../pages/order/order.model";
import {OrderService} from "../../pages/order/order.service";
import {UserService} from "../../services/user.service";
import {InvoiceService} from "../../pages/invoice/invoice.service";
import {GetInvoicesAction} from '../../shared/invoice/invoice.actions';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import {GetOrdersAction} from '../../shared/order/order.actions';
import {RestService} from "../../services/rest.service";

enum filterComponents {
    OrderStates,
    InvoiceStates
}

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})


export class FilterComponent implements OnChanges {

    orderStates: SelectItem[];
    selectedOrderState: string;

    invoiceStates: SelectItem[];
    selectedInvoiceState: string;

    @Input() page: number;
    @Input() pageSize: number;
    @Input() sort: string;
    @Input() sortOrientation: string;
    @Input('filter') activeFilter: string;
    @Input('filterType') activeFilterType: string;
    @Input('type') type: string = "Order";

    @Output() onUpdate = new EventEmitter<any>();

    filteredRecords: any;
    filteredUser;
    persons;
    webOnly;

    constructor(private _orderSrv: OrderService,
                private store: Store<fromRoot.State>,
                private _invoiceService: InvoiceService,
                private _restService: RestService) {
        this.orderStates = orderStatesConst;
        this.invoiceStates = invoiceStatesConst;

        this._restService.getFilterByUsers().subscribe(
            result => {
                this.persons = result;
                const nullUser = {name: '-', id: null};
                this.persons.push(nullUser);
                this.filteredUser = nullUser;
            }
        )
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes.activeFilter + ' active: ' + changes.activeFilterType);

        if (changes && !changes.type) {
            console.log(this.sortOrientation);
            this.doFilter();
        }
    }

    filterByWebOnly(event) {
        this.webOnly = event.checked;
        this.doFilter();
    }

    doFilter() {

        console.log(this.webOnly)
        this.onUpdate.emit(
            {
                page: this.page,
                pageSize: this.pageSize,
                sort: this.sort,
                sortOrientation: this.sortOrientation,
                activeFilter: this.activeFilter,
                filterType: this.activeFilterType,
                filter: this.activeFilter,
                user: this.filteredUser.id,
                webOnly: this.webOnly
            }
        )

        if (this.isInvoice) {
            this.store.dispatch(new GetInvoicesAction(
                {
                    currentPage: this.page,
                    pageSize: this.pageSize,
                    sort: this.sort,
                    filterType: this.activeFilterType,
                    filter: this.activeFilter,
                    user: this.filteredUser.id
                }
            ));
        }
    }

    filterByUser() {
        this.doFilter();
    }

    public stateFilterChange(filterType: filterComponents) {

        console.log('filterType: ' + filterType);
        switch (filterType) {
            case this.orderStateComponent: {
                console.log(this.selectedOrderState);
                this.activeFilter = this._orderSrv.states[this.selectedOrderState];
                this.activeFilterType = "state";
                this.doFilter();
                break;
            }
            case this.invoiceStateComponent: {
                console.log(this.selectedInvoiceState);
                this.activeFilter = this._invoiceService.states[this.selectedInvoiceState];
                this.activeFilterType = "status";
                this.doFilter();
                break;
            }
        }

    }

    get invoiceStateComponent() {
        return filterComponents.InvoiceStates
    }

    get orderStateComponent() {
        return filterComponents.OrderStates
    }

    get isOrder() {
        return this.type === "Order";
    }

    get isInvoice() {
        return this.type === "Invoice";
    }
}
