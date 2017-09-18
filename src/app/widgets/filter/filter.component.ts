import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectItem} from "primeng/primeng";
import {isUndefined} from "util";
import {invoiceStatesConst, invoiceStatuses} from "../../pages/invoice/invoiceStatus.model";
import {orderStatesConst} from "../../pages/order/order.model";

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

    @Input()
    items: any;

    filteredRecords: any;

    @Output()
    onUpdate = new EventEmitter<any>();

    constructor() {
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

                }
            }

            case filterComponents.InvoiceStates: {
                if (this.selectedInvoiceStates.length > 0) {
                    this.filteredRecords = new Array(...this.items.filter(order => {
                            if (!isUndefined(order.invoices[0])) {
                                const isStateInFiltered = this.selectedInvoiceStates.find(status => {
                                    if (status == String(invoiceStatuses.indexOf(order.invoices[0].status))) {
                                        return true;
                                    }
                                    else {
                                        return false;
                                    }
                                });
                                console.log('after find: ' + isStateInFiltered);
                                if (isStateInFiltered) {
                                    return order;
                                }
                            }
                        }
                    ));
                //     this.bigTotalItems = this.totalRecords.length;
                //     console.log('totalRecords');
                //     console.log(this.totalRecords);
                //     this.getFirstRecords();
                }
                else {
                    this.filteredRecords = this.items;
                }

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
