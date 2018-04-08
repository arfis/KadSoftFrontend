import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-document-selection',
    templateUrl: './document-selection.component.html',
    styleUrls: ['./document-selection.component.css']
})
export class DocumentSelectionComponent {

    @Output() onSelection = new EventEmitter<any>();

    documents = [
        {
            name: 'Vseobecne pravo',
            description: 'Vseobecne pravo slovenskej republiky'
        },
        {
            name: 'Architektura',
            description: 'Nove vydobitky architektury'
        },
        {
            name: 'GDPR',
            description: 'Chrante svoje data'
        },
        {
            name: 'Korenove rastliny',
            description: 'Vsetko o korenovych rastlinach a ich posobeni na zdravie'
        },
    ]

    selectDocument(document) {
        this.onSelection.next(document);
    }
}
