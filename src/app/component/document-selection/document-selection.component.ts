import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../app.reducer';

@Component({
    selector: 'app-document-selection',
    templateUrl: './document-selection.component.html',
    styleUrls: ['./document-selection.component.css']
})
export class DocumentSelectionComponent {

    @Output() onSelection = new EventEmitter<any>();
    documents;

    constructor(private _store: Store<fromRoot.State>) { }

    ngOnInit() {
        this._store.select(fromRoot.getDocuments).subscribe(
            documents => {
                this.documents = documents;
            }
        )
    }

    selectDocument(document) {
        this.onSelection.next(document);
    }

}
