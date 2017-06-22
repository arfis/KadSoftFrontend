/**
 * Created by a619678 on 18. 6. 2017.
 */
import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { MessagesService } from '../../services/messages.service';
import {ConfigurationService} from "../../services/configuration.service";
import {Router} from "@angular/router";

@Component({
    selector: 'administration',
    styleUrls: ['./administration.component.css'],
    templateUrl: './administration.component.html'
})
export class AdministrationComponent implements OnDestroy {

    constructor(
        private configurationServ : ConfigurationService,
        private msgServ: MessagesService,
        private breadServ: BreadcrumbService,
        public router: Router
    ) {
        // TODO

    }

    public ngOnDestroy() {
        // removing the header
        console.log("destroying the component");
        this.breadServ.clear();
    }

}
