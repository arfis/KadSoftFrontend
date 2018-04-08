import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import * as fromRoot from './app.reducer';
import {Store} from '@ngrx/store';
import {GetProfessionsAction} from './shared/profession-type/profession-type.actions';
import {GetConstructionTypeAction} from './shared/construction-type/construction-type.actions';
import {GetProductTypeAction} from './shared/product-type/product-type.actions';
import {GetRolesAction} from './shared/roles/roles.actions';

const langs = ['en', 'sk'];
const langmatch = /en|fr|ru|he|zh|sk/;

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private _translateService: TranslateService,
                private store: Store<fromRoot.State>) {
        _translateService.addLangs(langs);
        _translateService.setDefaultLang('sk');

        // const browserLang = this._translateService.getBrowserLang();
        _translateService.use('sk');

        _translateService.get('test').subscribe(
            result => console.log('translation of test', result)
        )

        this.store.dispatch(new GetProfessionsAction());
        this.store.dispatch(new GetConstructionTypeAction());
        this.store.dispatch(new GetProductTypeAction());
        this.store.dispatch(new GetRolesAction());
    }

    public ngOnInit() {
      // TODO
    }

}
