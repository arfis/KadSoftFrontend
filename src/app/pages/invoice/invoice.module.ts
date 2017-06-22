import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BsDropdownModule, CollapseModule, PaginationModule} from "ng2-bootstrap";
import {InvoiceService} from "./invoice.service";
import {InvoiceComponent} from "./invoice.component";
import {InvoiceCreation} from "./invoice-create.component";
import {RouterModule} from "@angular/router";
import {UserApplicationService} from "../users/user.service";
import {ConfigurationService} from "../../services/configuration.service";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CollapseModule.forRoot(),
        PaginationModule.forRoot(),
        BsDropdownModule.forRoot(),
    ],
    declarations: [
        InvoiceComponent,
        InvoiceCreation
    ],
    providers: [
        InvoiceService,
        UserApplicationService,
        ConfigurationService
    ],
    exports : [
        InvoiceCreation,
        InvoiceComponent
    ]
})
export class InvoiceModule { }
