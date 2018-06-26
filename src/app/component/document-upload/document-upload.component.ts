import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FileUploader} from '../../shared/files/FileUploader';
import {HttpErrorResponse} from '@angular/common/http';
import {DocumentService} from '../../services/document.service';
import {NotificationService} from '../../services/notification.service';

import * as fromRoot from '../../app.reducer';
import {Store} from '@ngrx/store';
import {Roles} from '../../services/user.service';
import {GetDocumentsAction} from '../../shared/documents/documents.actions';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent extends FileUploader implements OnInit {

  name;
  text;

  pinned = false;
  roles;
  selectedRoles = [];
  uploadedFiles = [];

  constructor(public dialogRef: MatDialogRef<DocumentUploadComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _documentService: DocumentService,
              private notificationSrv: NotificationService,
              private _store: Store<fromRoot.State>) {
    super();
  }

  ngOnInit() {
    this._store.select(fromRoot.getRoles).subscribe(
        roles => {
          this.roles = roles.filter(role => role.role !== Roles.adminRole);
          this.selectedRoles = this.roles;
        }
    )
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
  fileUpload(filesToUpload) {
    this.convertToUploadFile(filesToUpload,
        result => {
          console.log('callback returned ', this.selectedRoles);
          const document = {
            name:this.name,
            text:this.text,
            allowedRoles : Array.from(this.selectedRoles),
            file: result.files[0],
            pinned: this.pinned
          };
          this._documentService.uploadDocument(document).subscribe(
              result => {
                this._store.dispatch(new GetDocumentsAction);
                this.dialogRef.close();
              },
              (err: HttpErrorResponse) => {
                this.notificationSrv.error('Subory', 'neboli uspesne nahrate');
              },
              () => this.isUploading = false
          );
        })
  }

}
