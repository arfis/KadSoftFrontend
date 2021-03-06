import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {
    AccordionModule, BsDropdownModule, CollapseModule, ModalModule, PaginationModule,
    TooltipModule
} from "ng2-bootstrap";
import {RouterModule} from "@angular/router";
import {CustomerService} from "../users/user.service";
import {ConfigurationService} from "../../services/configuration.service";
import {OrderCreationComponent} from "./order-creation.component";
import {OrderComponent} from "./order.component";
import {InvoiceService} from "../invoice/invoice.service";
import {OrderService} from "./order.service";
import {UserService} from "../../services/user.service";
import {OrderModal} from "./order-modal.component";
import {RestService} from "../../services/rest.service";
import {SlimLoadingBarModule, SlimLoadingBarService} from "ng2-slim-loading-bar";
import {RequiredDirective} from "../../widgets/required.directive";
import {OrderDetailComponent} from "./order-detail.component";
import {OrderResolve} from "./order-resolve.component";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CollapseModule.forRoot(),
        AccordionModule.forRoot(),
        BsDropdownModule.forRoot(),
        PaginationModule.forRoot(),
        ModalModule.forRoot(),
        SlimLoadingBarModule.forRoot(),
        TooltipModule.forRoot()
    ],
    declarations: [
        OrderComponent,
        OrderCreationComponent,
        OrderModal,
        OrderDetailComponent,
        RequiredDirective
    ],
    providers: [
        InvoiceService,
        CustomerService,
        ConfigurationService,
        OrderService,
        UserService,
        RestService,
        OrderResolve,
        SlimLoadingBarService
    ],
    exports : [
        OrderComponent,
        OrderCreationComponent
    ]
})
export class OrderModule { }
