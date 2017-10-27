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
import {OrderModal} from "../order/order-modal.component";
import { InvoiceModalComponent } from './invoice-modal/invoice-modal.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CollapseModule.forRoot(),
        PaginationModule.forRoot(),
        BsDropdownModule.forRoot(),
        SlimLoadingBarModule.forRoot(),
        ModalModule.forRoot(),
    ],
    declarations: [
        InvoiceComponent,
        InvoiceCreation,
        InvoiceModalComponent,
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
