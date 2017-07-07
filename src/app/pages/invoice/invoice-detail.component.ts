/**
 * Created by a619678 on 7. 6. 2017.
 */

import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Invoice} from "./invoice.model";
import {getTranslation, InvoiceStatus} from "./invoiceStatus.model";
import {InvoiceService} from "./invoice.service";
@Component({
    selector: 'invoice-detail',
    styleUrls: ['./invoice-detail.component.css'],
    templateUrl: './invoice-detail.component.html'
})

export class InvoiceDetailComponent{

    private invoice : Invoice;

    constructor(private activatedRoute: ActivatedRoute,
                public router: Router,
                private invoiceSrv : InvoiceService){

    }

    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {

            this.invoice = data['invoice'];
            console.log(data);
            console.log(this.invoice);
            console.log("Invoice end");
        });
    }

    getStatusMessage(status){
        if (!status) status = InvoiceStatus.created;
        return getTranslation(status);
    }

    invoiceStorno(){
        if (window.confirm('Faktura bude stornovana ')) {
            this.invoiceSrv.storno(this.invoice).subscribe(response => {

            });
        }

    }
}