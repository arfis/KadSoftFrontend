import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

const langs = ['en', 'sk'];
const langmatch = /en|fr|ru|he|zh|sk/;

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private _translateService: TranslateService,) {
        _translateService.addLangs(langs);
        _translateService.setDefaultLang('sk');

        // const browserLang = this._translateService.getBrowserLang();
        _translateService.use('sk');

        _translateService.get('test').subscribe(
            result => console.log('translation of test', result)
        )
        console.log('set translate service');
    }

    public ngOnInit() {
      // TODO
    }

}
