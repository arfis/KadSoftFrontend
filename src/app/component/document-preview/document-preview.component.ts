import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DocumentService} from '../../services/document.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import {RestService} from '../../services/rest.service';
import {NotificationService} from '../../services/notification.service';
import * as fromRoot from '../../app.reducer';
import {Store} from '@ngrx/store';
import {GetDocumentsAction} from '../../shared/documents/documents.actions';

@Component({
    selector: 'app-document-preview',
    templateUrl: './document-preview.component.html',
    styleUrls: ['./document-preview.component.css']
})
export class DocumentPreviewComponent implements OnChanges {

    @Input() document;

    base64image;
    documentDetail;
    pdfSafeLink;
    pdfLink;
    actions;
    pinAction;
    unpinAction;
    deleteAction;

    constructor(private _documentService: DocumentService,
                private sanitizer: DomSanitizer,
                private _restService: RestService,
                private _notificationService: NotificationService,
                private _store: Store<fromRoot.State>) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.document) {

            this._documentService.getDocument(this.document.id).subscribe(
                result => {
                    console.log('result', result);
                    this.documentDetail = result;

                    if (this.documentDetail.actions) {
                        this.actions = this.documentDetail.actions;
                        const {detail} = this.actions;

                        this._restService.get(this.documentDetail.actions.base64File.href).subscribe(
                            result => {
                                console.log('base64file: ', result);
                                this.base64image = result;
                                this.downloadPDF();
                            }
                        )
                        this.deleteAction = this.actions.delete;
                        this.unpinAction = this.actions.unpinDocument;
                        this.pinAction = this.actions.pinDocument;

                        console.log(this.actions);
                    }
                }
            )
        }
    }

    deleteDocument() {
        console.log('deleting document');
        this._restService.delete(this.deleteAction.href).subscribe(
            result => {
                this._notificationService.success('Dokument bol odstraneny', this.document.name);
                this._store.dispatch(new GetDocumentsAction());
            }
        );
    }

    togglePin() {
        if (this.unpinAction) {
            this._restService.put(this.unpinAction.href).subscribe(
                result =>  {
                    this.document = result;
                    this._notificationService.success('Dokument bol od pinnuty', this.document.name)
                }
            )
        } else if(this.pinAction) {
            this._restService.put(this.pinAction.href).subscribe(
                result =>  {
                    this.document = result;
                    this._notificationService.success('Dokument bol pinnuty', this.document.name)
                }
            )
        }
    }

    downloadPDF() {
        let sliceSize = 512;

        let base64 = this.base64image.base64.replace('data:application/pdf;base64,', '');
        let byteCharacters = atob(base64);
        var contentType = 'application/pdf';
        let byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            let slice = byteCharacters.slice(offset, offset + sliceSize);

            let byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            let byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, {type: contentType});

        let blobUrl = URL.createObjectURL(blob);

        this.pdfSafeLink = this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl);
        this.pdfLink = blobUrl;

    }

    get pinIcon() {
        return this.pinAction ? 'bookmark_border' : 'bookmark';
    }

    get detailUrl() {
        if (this.documentDetail) {
            const {detail} = this.documentDetail.actions;
            return this.sanitizer.bypassSecurityTrustResourceUrl(detail.href);
        } else {
            return null;
        }
    }
}
