import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DocumentUploadComponent} from '../../component/document-upload/document-upload.component';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  selectedDocument;


  constructor(private dialog: MatDialog) { }

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
