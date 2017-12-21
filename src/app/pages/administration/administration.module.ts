/**
 * Created by a619678 on 19. 6. 2017.
 */
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AccordionModule, BsDropdownModule, CollapseModule, TabsModule} from "ngx-bootstrap";
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
import {FileUploadModule, MultiSelectModule, SelectButtonModule, ToggleButtonModule} from "primeng/primeng";
import {routing} from "./administrator.routing";
import { EmailTemplatesComponent } from './email-templates/email-templates.component';
import {SpinnerModule} from "../../component/spinner/spinner.module";


@NgModule({
    imports: [
        SelectButtonModule,
        MultiSelectModule,
        FileUploadModule,
        ToggleButtonModule,
        RouterModule,
        CommonModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        CollapseModule.forRoot(),
        AccordionModule.forRoot(),
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        SpinnerModule,
    ],
    declarations: [
        CompanyComponent,
        AdministrationComponent,
        CompanyCreation,
        CustomerComponent,
        CustomerCreation,
        UserComponent,
        EmailTemplatesComponent,
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
