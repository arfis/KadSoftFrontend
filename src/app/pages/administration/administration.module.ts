/**
 * Created by a619678 on 19. 6. 2017.
 */
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AccordionModule, BsDropdownModule, CollapseModule, TabsModule} from "ng2-bootstrap";
import {RouterModule} from "@angular/router";
import {UserApplicationService} from "../users/user.service";
import {ConfigurationService} from "../../services/configuration.service";
import {MessagesService} from "../../services/messages.service";
import {CompanyComponent} from "./companies/company.component";
import {AdministrationComponent} from "./administration.component";
import {NotificationService} from "../../services/notification.service";
import {CompanyCreation} from "./companies/company-create.component";


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CollapseModule.forRoot(),
        AccordionModule.forRoot(),
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
    ],
    declarations: [
        CompanyComponent,
        AdministrationComponent,
        CompanyCreation
    ],
    providers: [
        UserApplicationService,
        ConfigurationService,
        MessagesService,
        NotificationService
    ],
    exports : [

    ]
})
export class AdministrationModule { }
