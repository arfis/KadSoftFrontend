/**
 * Created by a619678 on 19. 6. 2017.
 */
import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import { MessagesService } from '../../../services/messages.service';
import {ConfigurationService} from "../../../services/configuration.service";
import {Router} from "@angular/router";
import {Company} from "../../../models/company-model";
import {Observable} from "rxjs/Observable";
import {NotificationService} from "../../../services/notification.service";

@Component({
    selector: 'company',
    styleUrls: ['./company.component.css'],
    templateUrl: './company.component.html'
})
export class CompanyComponent implements OnInit,OnDestroy {

    companies : Observable<Company[]>;

    constructor(
        private configurationServ : ConfigurationService,
        private msgServ: MessagesService,
        public router: Router,
        private notificationServ : NotificationService
    ) {
        // TODO

    }

    public ngOnInit(){
        this.companies = this.configurationServ.getComapnies();
    }

    public ngOnDestroy() {
        // removing the header
        console.log("destroying the component");
    }

    public removeCompany(company : Company){
        this.configurationServ.removeCompany(company).subscribe(
            result => this.notificationServ.success("Company " + company.name + " was removed")
        );
    }
}
