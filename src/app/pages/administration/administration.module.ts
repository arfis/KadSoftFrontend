/**
 * Created by a619678 on 19. 6. 2017.
 */
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AccordionModule, BsDropdownModule, CollapseModule, TabsModule} from "ng2-bootstrap";
import {RouterModule} from "@angular/router";
import {CustomerService} from "../users/user.service";
import {ConfigurationService} from "../../services/configuration.service";
import {MessagesService} from "../../services/messages.service";
import {CompanyComponent} from "./companies/company.component";
import {AdministrationComponent} from "./administration.component";
import {NotificationService} from "../../services/notification.service";
import {CompanyCreation} from "./companies/company-create.component";
import {CustomerComponent} from "./customer/customer.component";
import {CustomerCreation} from "./customer/customer-create.component";
import { UserComponent } from './user/user.component';


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
        CompanyCreation,
        CustomerComponent,
        CustomerCreation,
        UserComponent
    ],
    providers: [
        CustomerService,
        ConfigurationService,
        MessagesService,
        NotificationService
    ],
    exports : [

    ]
})
export class AdministrationModule { }
