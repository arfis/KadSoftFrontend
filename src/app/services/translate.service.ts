import { Injectable, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './user.service';
import { User } from '../models/user';

const langs = ['en', 'fr', 'ru', 'he', 'zh', 'sk'];
const langmatch = /en|fr|ru|he|zh|sk/;

@Injectable()
export class AdminLTETranslateService implements OnInit {
    private lang: string = 'en';
    private currentUser: User;

    constructor( private userServ: UserService, private translate: TranslateService ) {
        translate.addLangs( langs );
        // // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang( 'sk' );
        let browserLang = this.translate.getBrowserLang();
        let useLang = 'sk';
        const prefLang = 'sk';


            if ( !prefLang ) {
                useLang = browserLang.match( langmatch ) ? browserLang : 'en';
            } else {
                console.log( 'Detected User preferred language: "' + prefLang + '"' );
                useLang = prefLang.match( langmatch ) ? prefLang : 'en';
            }
            console.log('using lang', useLang);
        this.translate.use( useLang );
        // this.userServ.currentUser.subscribe(( user: User ) => {
        //     this.currentUser = user;
        //
        //     // the lang to use, if the lang isn't available, it will use the current loader to get them
        //     let browserLang = this.translate.getBrowserLang();
        //     let browserCultureLang = this.translate.getBrowserCultureLang();
        //     console.log( 'Detected browser language: "' + browserCultureLang + '"' );
        //
        //     // check if current User has a Preferred Language set, and it differs from his browser lang
        //     let useLang = 'en';
        //     let prefLang = ( this.currentUser ) ? this.currentUser.preferredLang : null;
        //     if ( !prefLang ) {
        //         useLang = browserLang.match( langmatch ) ? browserLang : 'en';
        //     } else {
        //         console.log( 'Detected User preferred language: "' + prefLang + '"' );
        //         useLang = prefLang.match( langmatch ) ? prefLang : 'en';
        //     }
        //
        //     console.log( 'Translation language has been set to: "' + useLang + '"' );
        //     // translate.use( 'ru' );
        // });
    }

    public ngOnInit() {
        // TODO
    }

    public getTranslate(): TranslateService {
        return this.translate;
    }

}
