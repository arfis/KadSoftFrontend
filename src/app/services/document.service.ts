import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RestService} from './rest.service';

@Injectable()
export class DocumentService {

  constructor(private _restService: RestService) { }

  getDocument(documentId) {
    return this._restService.getDocumentById(documentId);
  }

  uploadDocument(document) {
    return this._restService.uploadDocument(document);
  }
}
