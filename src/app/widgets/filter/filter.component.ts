import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {SelectItem} from "primeng/primeng";
import {isUndefined} from "util";
import {invoiceStatesConst, invoiceStatuses} from "../../pages/invoice/invoiceStatus.model";
import {orderStatesConst} from "../../pages/order/order.model";
import {OrderService} from "../../pages/order/order.service";
import {UserService} from "../../services/user.service";

enum filterComponents {
    FilterStates,
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
    selectedInvoiceStates: string[] = new Array();

    @Input() page: number;
    @Input() pageSize: number;
    @Input() sort: string;
    @Input() sortOrientation: string;
    @Input('filter') activeFilter: string;
    @Input('filterType') activeFilterType: string;

    filteredRecords: any;

    @Output()
    onUpdate = new EventEmitter<any>();

    constructor(private _orderSrv: OrderService,
                private _userSrv: UserService) {
        this.orderStates = orderStatesConst;
        this.invoiceStates = invoiceStatesConst;

    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes) {
            this.doFilter();
        }
    }

    doFilter() {
        if (this.activeFilter && this.activeFilter !== '-1') {

            this._orderSrv.getOrders(this.page, this.pageSize, this.sort, this.activeFilterType,
                this.activeFilter).subscribe(
                result => {
                    console.log(result);
                    this.onUpdate.emit(result);
                })
        }
        else {
            this._orderSrv.getOrders(this.page, this.pageSize, this.sort).subscribe(
                result => {
                    this.onUpdate.emit(result);
                })
        }
    }

    public stateFilterChange(filterType: filterComponents) {


        switch (filterType) {
            case filterComponents.FilterStates: {
                console.log(this.selectedOrderState);
                this.activeFilter = this._orderSrv.states[this.selectedOrderState];
                this.activeFilterType = "state";
                this.doFilter();
            }

        }

    }

    get invoiceStateComponent() {
        return filterComponents.InvoiceStates
    }

    get orderStateComponent() {
        return filterComponents.FilterStates
    }
}
