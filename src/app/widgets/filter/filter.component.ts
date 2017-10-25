import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectItem} from "primeng/primeng";
import {isUndefined} from "util";
import {invoiceStatesConst, invoiceStatuses} from "../../pages/invoice/invoiceStatus.model";
import {orderStatesConst} from "../../pages/order/order.model";
import {OrderService} from "../../pages/order/order.service";
import {UserService} from "../../services/user.service";

enum filterComponents {
    OrderStates,
    InvoiceStates
}

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})


export class FilterComponent implements OnInit {

    orderStates: SelectItem[];
    selectedOrderStates: string[] = new Array();

    invoiceStates: SelectItem[];
    selectedInvoiceStates: string[] = new Array();

    @Input() page: number;
    @Input() pageSize: number;

    filteredRecords: any;

    @Output()
    onUpdate = new EventEmitter<any>();

    constructor(private _orderSrv: OrderService,
                private _userSrv: UserService) {
        this.orderStates = orderStatesConst;
        this.invoiceStates = invoiceStatesConst;
    }

    ngOnInit() {
    }

    public stateFilterChange(filterType: filterComponents) {
        switch (filterType) {
            case filterComponents.OrderStates: {
                if (this.selectedOrderStates.length > 0) {
                    console.log(this.selectedOrderStates[0]);
                    this._orderSrv.getOrdersByStateFilter(this.page, this.pageSize,
                        this.selectedOrderStates[0]).subscribe(

                        result => {
                            this.onUpdate.emit(result.data);
                        })
                }
                else {
                    this._orderSrv.getOrders(this.page, this.pageSize).subscribe(

                        result => {
                            this.onUpdate.emit(result.data);
                        })
                }
            }

            case filterComponents.InvoiceStates: {

                    //     this.bigTotalItems = this.totalRecords.length;
                    //     console.log('totalRecords');
                    //     console.log(this.totalRecords);
                    //     this.getFirstRecords();

                this.onUpdate.next(this.filteredRecords);
            }
        }

        console.log('state filter has changed');
    }

    get invoiceStateComponent() {
        return filterComponents.InvoiceStates
    }

    get orderStateComponent() {
        return filterComponents.OrderStates
    }
}
