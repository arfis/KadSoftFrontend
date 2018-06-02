import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DocumentUploadComponent} from '../../component/document-upload/document-upload.component';
import {FileUploader} from '../../shared/files/FileUploader';

import * as fromRoot from '../../app.reducer';
import {Store} from '@ngrx/store';
import {GetDocumentsAction} from '../../shared/documents/documents.actions';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  selectedDocument;

  constructor(private dialog: MatDialog,
              private _store: Store<fromRoot.State>) {
    this._store.dispatch(new GetDocumentsAction());
  }

  ngOnInit() {
  }

  showPreview(document) {
    this.selectedDocument = document;
  }

  showUploadDialog() {
    this.dialog.open(DocumentUploadComponent);
  }

  get isAdmin() {
    return true;
  }
}
