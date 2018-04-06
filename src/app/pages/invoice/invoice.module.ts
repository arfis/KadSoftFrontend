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
import {MatButtonModule, MatIconModule, MatInputModule, MatStepperModule} from "@angular/material";
import {FilterModule} from "../../widgets/filter/filter.module";
import {AutoCompleteModule} from "primeng/primeng";
import {TablePanelComponent} from '../../component/table-panel/table-panel.component';
import {HttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from '../../app.module';
import {MissingTranslation} from '../../shared/missing-translation/missing-translation';
import {MissingTranslationHandler, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../shared/shared.module';

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
        MatInputModule,
        MatIconModule,
        SharedModule
    ],
    declarations: [
        InvoiceComponent,
        InvoiceCreation,
        InvoiceModalComponent,
        TablePanelComponent,
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
        InvoiceComponent,
        TablePanelComponent
    ]
})
export class InvoiceModule { }
