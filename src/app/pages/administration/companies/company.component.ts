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
import {RestService} from "../../../services/rest.service";
import {DownloadedFileInfo} from "../../../models/FileInfo";
import {UploadFileInfo} from "../../../models/file";

@Component({
    selector: 'company',
    styleUrls: ['./company.component.css'],
    templateUrl: './company.component.html'
})
export class CompanyComponent implements OnInit,OnDestroy {

    companies : Company[];

    constructor(
        private configurationServ : ConfigurationService,
        private msgServ: MessagesService,
        public router: Router,
        private notificationServ : NotificationService,
        private _restServ : RestService
    ) {
        // TODO

    }

    public ngOnInit(){
        this._restServ.getCompanies().subscribe(
            companies => {
                this.companies = companies;
                console.log(this.companies);
            }
        );
    }

    public onAdd(company : Company){
        this.companies.push(company);
    }

    public ngOnDestroy() {
        // removing the header
        console.log("destroying the component");
    }

    public removeCompany(company : Company){
        this._restServ.removeCompany(company.id).subscribe(
            result => {
                this.notificationServ.success("Company " + company.name + " was removed");
                this.companies.splice(this.companies.indexOf(company),1);
            }
        );
    }

    public toggleVatPayer(company: Company, event) {
        company.vatPayer = event.checked;

        let id = company.id;

        delete company.id;
        delete company.signature;
        delete company.stamp;
        delete company.mainContact.id;


        this._restServ.updateCompany(company, id).subscribe(
            result => {
                console.log(result);
            },
            error => {
                console.error('error updating company');
            }
        );
    }

    public mapDownloadDataToUpload(downloadedFileInfo: DownloadedFileInfo) {
        let uploadFileInfo: UploadFileInfo;
    }
}
