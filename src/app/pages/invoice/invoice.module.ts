import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BsDropdownModule, CollapseModule, ModalModule, PaginationModule} from "ngx-bootstrap";
import {InvoiceService} from "./invoice.service";
import {InvoiceComponent} from "./invoice.component";
import {InvoiceCreation} from "./invoice-create.component";
import {RouterModule} from "@angular/router";
import {CustomerService} from "../users/user.service";
import {ConfigurationService} from "../../services/configuration.service";
import {RestService} from "../../services/rest.service";
import {UserService} from "../../services/user.service";
import {SlimLoadingBarModule, SlimLoadingBarService} from "ng2-slim-loading-bar";
import { InvoiceModalComponent } from './invoice-modal/invoice-modal.component';
import {MatButtonModule, MatStepperModule} from "@angular/material";
import {FilterModule} from "../../widgets/filter/filter.module";
import {AutoCompleteModule} from "primeng/primeng";

@NgModule({
    imports: [
        AutoCompleteModule,
        FilterModule,
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CollapseModule.forRoot(),
        PaginationModule.forRoot(),
        BsDropdownModule.forRoot(),
        SlimLoadingBarModule.forRoot(),
        ModalModule.forRoot(),
        MatStepperModule,
        MatButtonModule,
    ],
    declarations: [
        InvoiceComponent,
        InvoiceCreation,
        InvoiceModalComponent
    ],
    providers: [
        InvoiceService,
        CustomerService,
        ConfigurationService,
        RestService,
        UserService,
        SlimLoadingBarService
    ],
    exports : [
        InvoiceCreation,
        InvoiceComponent
    ]
})
export class InvoiceModule { }
