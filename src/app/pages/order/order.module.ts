import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AccordionModule, BsDropdownModule, CollapseModule, PaginationModule} from "ng2-bootstrap";
import {RouterModule} from "@angular/router";
import {CustomerService} from "../users/user.service";
import {ConfigurationService} from "../../services/configuration.service";
import {OrderCreationComponent} from "./order-creation.component";
import {OrderComponent} from "./order.component";
import {InvoiceService} from "../invoice/invoice.service";
import {OrderService} from "./order.service";
import {UserService} from "../../services/user.service";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CollapseModule.forRoot(),
        AccordionModule.forRoot(),
        BsDropdownModule.forRoot(),
        PaginationModule.forRoot()
    ],
    declarations: [
        OrderComponent,
        OrderCreationComponent
    ],
    providers: [
        InvoiceService,
        CustomerService,
        ConfigurationService,
        OrderService,
        UserService
    ],
    exports : [
        OrderComponent,
        OrderCreationComponent
    ]
})
export class OrderModule { }