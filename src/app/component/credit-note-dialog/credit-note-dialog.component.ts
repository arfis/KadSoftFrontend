import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {RestService} from '../../services/rest.service';
import {InvoiceService} from '../../pages/invoice/invoice.service';

@Component({
    selector: 'app-credit-note-dialog',
    templateUrl: './credit-note-dialog.component.html',
    styleUrls: ['./credit-note-dialog.component.css']
})
export class CreditNoteDialogComponent implements OnInit {

    reason;
    sum;
    product;
    invoice;

    constructor(public dialogRef: MatDialogRef<CreditNoteDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private _invoiceService: InvoiceService) {
        this.invoice = data.invoice;
    }

    sendCreditNote() {
        this._invoiceService.sendCreditNote({
            invoice: this.invoice,
            reason: this.reason,
            sum: this.sum,
            product: this.product
        }).subscribe(
            result => this.dialogRef.close(),
            error => console.log('error')
        )
    }

    ngOnInit() {
    }

}
