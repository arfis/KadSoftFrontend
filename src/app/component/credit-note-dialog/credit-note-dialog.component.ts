import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-credit-note-dialog',
  templateUrl: './credit-note-dialog.component.html',
  styleUrls: ['./credit-note-dialog.component.css']
})
export class CreditNoteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreditNoteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  ngOnInit() {
  }

}
