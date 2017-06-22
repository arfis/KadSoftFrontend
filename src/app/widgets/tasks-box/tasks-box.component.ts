import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';
import {InvoiceService} from "../../pages/invoice/invoice.service";
import {InvoiceStatus} from "../../pages/invoice/InvoiceStatus.model";

@Component( {
    /* tslint:disable */
    selector: '.tasksBox',
    /* tslint:enable */
    styleUrls: ['./tasks-box.component.css'],
    templateUrl: './tasks-box.component.html'
})
export class TasksBoxComponent implements OnInit {

    private messages: Message[];
    private tasksLength: {} = { 0: '9' };
    private expiredInvoices;

    @Input() public user;

    constructor(invoiceSrv : InvoiceService) {
        invoiceSrv.getInvoices().subscribe(
            invoices=>{
                this.expiredInvoices = invoices.filter(invoice => invoice.status == InvoiceStatus.expired);
            }
        )
        // TODO 
    }

    public ngOnInit() {
        // TODO
    }

}
