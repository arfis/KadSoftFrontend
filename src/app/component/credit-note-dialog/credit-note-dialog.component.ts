import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {RestService} from '../../services/rest.service';
import {InvoiceService} from '../../pages/invoice/invoice.service';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {defaultExpirationInDays} from "../../app.constants";

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
    creditItem;
    items;

    creditForm;
    item;

    constructor(public dialogRef: MatDialogRef<CreditNoteDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private _invoiceService: InvoiceService,
                private _restService: RestService,
                private fb: FormBuilder,
                private router: Router) {
        this.invoice = data.invoice;
        this.items = this.invoice.invoiceItems;

        this.creditForm = this.fb.group({
            'note' : ['',Validators.required],
            'invoiceItems': this.fb.group({
                'newItem': ['',Validators.required],
                'count': ['', Validators.required],
                'unit': ['', Validators.required],
                'price': ['', Validators.required],
                'contractor': ['', Validators.required],
                'parcel': ['', Validators.required],
            }),
        })
    }

    // "newItem": "zebrota",
    // "unit": "ks",
    // "price": "49",
    // "contractor": "Stefko",
    // "parcel": "Raz dva tri",
    // "count": 2

    submitCredit({value}) {
        this.sendCreditNote(value);
    }

    sendCreditNote(value) {
        this._restService.getNextCreditInvoiceNumber(this.invoice.company.id).subscribe(
            invoiceNumber => {

                value.invoiceNumber = invoiceNumber.nextInvoiceNumber;
                value.expiration = new Date(new Date().setDate(new Date().getDate() + defaultExpirationInDays)).toISOString().split('T')[0];
                value.invoiceItems = [value.invoiceItems];

                this._invoiceService.sendCreditNote(this.invoice.id,
                    value
                ).subscribe(
                    result => {
                        this.router.navigate(['/invoice/' + result.id]);
                        this.dialogRef.close();
                    },
                    error => console.log('error ', error)
                )
            }
        )
    }

    ngOnInit() {
    }

}
