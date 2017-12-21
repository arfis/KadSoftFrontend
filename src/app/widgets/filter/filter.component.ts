import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {SelectItem} from "primeng/primeng";
import {isUndefined} from "util";
import {invoiceStatesConst, invoiceStatuses} from "../../pages/invoice/invoiceStatus.model";
import {orderStatesConst} from "../../pages/order/order.model";
import {OrderService} from "../../pages/order/order.service";
import {UserService} from "../../services/user.service";
import {InvoiceService} from "../../pages/invoice/invoice.service";

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

    filteredRecords: any;

    @Output()
    onUpdate = new EventEmitter<any>();

    constructor(private _orderSrv: OrderService,
                private _userSrv: UserService,
                private _invoiceService: InvoiceService) {
        this.orderStates = orderStatesConst;
        this.invoiceStates = invoiceStatesConst;

    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes.activeFilter + ' active: ' + changes.activeFilterType);

        if (changes && !changes.type) {
            console.log(this.sortOrientation);
            this.doFilter();
        }
    }

    doFilter() {
        console.log(this.sortOrientation);
        if (this.activeFilter && this.activeFilter !== '-1') {

            console.log(this.sortOrientation);
            if (this.isOrder) {
                this._orderSrv.getOrders(this.page, this.pageSize, this.sort, this.sortOrientation, this.activeFilterType,
                    this.activeFilter).subscribe(
                    result => {
                        console.log(result);
                        this.onUpdate.emit(result);
                    })
            }

            if (this.isInvoice) {
                this._invoiceService.getInvoices(this.page, this.pageSize, this.sort, this.activeFilterType,
                    this.activeFilter).subscribe(
                    result => {
                        console.log(result);
                        this.onUpdate.emit(result);
                    })
            }
        }
        else {
            if (this.isOrder) {
                this._orderSrv.getOrders(this.page, this.pageSize, this.sort, this.sortOrientation).subscribe(
                    result => {
                        this.onUpdate.emit(result);
                    })
            } else {
                this._invoiceService.getInvoices(this.page, this.pageSize, this.sort, this.sortOrientation).subscribe(
                    result => {
                        this.onUpdate.emit(result);
                    })
            }
        }
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
