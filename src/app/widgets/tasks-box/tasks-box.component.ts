import {Component, OnInit, Input} from '@angular/core';
import {Message} from '../../models/message';
import {InvoiceService} from "../../pages/invoice/invoice.service";
import {InvoiceStatus} from "../../pages/invoice/InvoiceStatus.model";
import {CustomerService} from "../../pages/users/user.service";
import {Invoice} from "../../pages/invoice/invoice.model";

@Component({
    /* tslint:disable */
    selector: '.tasksBox',
    /* tslint:enable */
    styleUrls: ['./tasks-box.component.css'],
    templateUrl: './tasks-box.component.html'
})
export class TasksBoxComponent implements OnInit {

    private messages: Message[];
    private tasksLength: {} = {0: '9'};
    private expiredInvoices = new Array<Invoice>();

    @Input() public user;

    constructor(invoiceSrv: InvoiceService,
                private customerServ: CustomerService) {

        customerServ.getCustomers()
        {
            customers => {
                console.log("setting customers from tasks");
                console.log(customers);
                customerServ.cacheCustomers(customers);
                invoiceSrv.getInvoices().subscribe(
                    invoices => {

                        this.expiredInvoices = invoices.filter(invoice => invoice.status == InvoiceStatus.expired);
                    }
                )
                // TODO
            }
        }
    }

    public ngOnInit() {
        // TODO
    }

}
