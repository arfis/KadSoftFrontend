// external module
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {
    AlertModule, BsDropdownModule, CollapseModule, DatepickerModule, ModalModule, PaginationModule,
    TabsModule
} from 'ngx-bootstrap';
import {TooltipModule} from 'primeng/primeng';
import {ToasterModule} from 'angular2-toaster/angular2-toaster';
import {TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateService} from '@ngx-translate/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    AccordionModule,
    ChartModule, FileUploadModule,
    InputTextareaModule, MultiSelectModule, SelectButtonModule,
    SplitButtonModule
} from "primeng/primeng";

// main bootstrap
import {routing} from './app.routes';
import {InvoiceModule} from "./pages/invoice/invoice.module";
import {UserViewComponent} from "./pages/users/user-view/user-view.component";
import {UserResolve} from "./pages/users/user-view/user-resolver.component";
import {OrderService} from "./pages/order/order.service";
import {InvoiceResolve} from "./pages/invoice/invoice-resolve.component";
import {InvoiceDetailComponent} from "./pages/invoice/invoice-detail.component";
import {RestService} from "./services/rest.service";
import {Configuration} from "./app.constants";
import {SlimLoadingBarModule, SlimLoadingBarService} from "ng2-slim-loading-bar";
import {InvoiceService} from "./pages/invoice/invoice.service";
import {StatisticsComponent} from './pages/statistics/statistics.component';

import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule
} from "@angular/material";

import {AppComponent} from './app.component';

import {AppHeaderComponent} from './widgets/app-header';
import {AppFooterComponent} from './widgets/app-footer';
import {MenuAsideComponent} from './widgets/menu-aside';
import {ControlSidebarComponent} from './widgets/control-sidebar';
import {MessagesBoxComponent} from './widgets/messages-box';
import {NotificationBoxComponent} from './widgets/notification-box';
import {TasksBoxComponent} from './widgets/tasks-box';
import {UserBoxComponent} from './widgets/user-box';
import {BreadcrumbComponent} from './widgets/breadcrumb';


import {UserService} from './services/user.service';
import {MessagesService} from './services/messages.service';
import {CanActivateGuard} from './services/guard.service';
import {NotificationService} from './services/notification.service';
import {BreadcrumbService} from './services/breadcrumb.service';
import {LoggerService} from './services/logger.service';
import {InterceptorService} from "./services/interceptor-service.service";
import {StepComponent} from './component/step/step.component';
import {StepperComponent} from './container/stepper/stepper.component';
import {CommonModule} from "@angular/common";
import {RequiredDirective} from "./widgets/required.directive";
import {OrderDetailComponent} from "./pages/order/order-detail.component";
import {OrderModal} from "./pages/order/order-modal.component";
import {OrderCreationComponent} from "./pages/order/order-creation.component";
import {OrderComponent} from "./pages/order/order.component";
import {OrderResolve} from "./pages/order/order-resolve.component";
import {ConfigurationService} from "./services/configuration.service";
import {CustomerService} from "./pages/users/user.service";

// les pages
import {HomeComponent} from './pages/home/home.component';
import {PageNumComponent} from './pages/page-num/page-num.component';
import {LayoutsAuthComponent} from './pages/layouts/auth/auth';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {OrderSortDirective} from './pages/order/order-sort.directive';
import {ProfileComponent} from './pages/profile/profile.component';
import {ProductListComponent} from './component/product-list/product-list.component';
import {OrderStepperComponent} from './component/order-stepper/order-stepper.component';
import {MailSelectorComponent} from './component/mail-selector/mail-selector.component';
import {OrderCreationFormComponent} from './component/order-creation-form/order-creation-form.component';
import {FilterModule} from "./widgets/filter/filter.module";
import {SpinnerModule} from "./component/spinner/spinner.module";
import {MissingTranslation} from './shared/missing-translation/missing-translation';
import {EffectsModule} from '@ngrx/effects';
import {InvoiceEffects} from './shared/invoice/invoice.effect';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {OrderEffects} from './shared/order/order.effect';
import { TablePanelComponent } from './component/table-panel/table-panel.component';

export function HttpLoaderFactory(http: HttpClient) {
    // return new TranslateHttpLoader(http);
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

let material = [
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatDatepickerModule,
    MatStepperModule,
];

let modules = [
    SpinnerModule,
    material,
    FilterModule,
    MultiSelectModule,
    AccordionModule,
    SelectButtonModule,
    FileUploadModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    TooltipModule,
    BrowserModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    InputTextareaModule,
    SplitButtonModule,
    ChartModule,
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserModule,
    CollapseModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule,
    TabsModule.forRoot(),
    ReactiveFormsModule,
    RouterModule,
    EffectsModule.forRoot(
        [
            InvoiceEffects,
            OrderEffects
        ]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
        maxAge: 100
    }),
    TranslateModule.forRoot({
        missingTranslationHandler: {
            provide: MissingTranslationHandler,
            useClass: MissingTranslation
        },
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    ToasterModule,
    InvoiceModule,
    SlimLoadingBarModule.forRoot()
];


let widgets = [
    AppComponent,
    BreadcrumbComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MenuAsideComponent,
    ControlSidebarComponent,
    MessagesBoxComponent,
    NotificationBoxComponent,
    TasksBoxComponent,
    UserBoxComponent,
    OrderComponent,
    OrderCreationComponent,
    OrderModal,
    OrderDetailComponent,
    RequiredDirective,
    StepperComponent,
    StepComponent
];

let services = [
    InvoiceService,
    CustomerService,
    ConfigurationService,
    OrderService,
    RestService,
    OrderResolve,
    UserService,
    BreadcrumbService,
    MessagesService,
    CanActivateGuard,
    NotificationService,
    //AdminLTETranslateService,
    LoggerService,
    UserResolve,
    InvoiceResolve,
    Configuration,
    InterceptorService,
    SlimLoadingBarService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true,
    },
];


let pages = [
    HomeComponent,
    PageNumComponent,
    LayoutsAuthComponent,
    LoginComponent,
    RegisterComponent,
    UserViewComponent,
    InvoiceDetailComponent
];

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        ...widgets,
        ...pages,
        StatisticsComponent,
        OrderSortDirective,
        ProfileComponent,
        ProductListComponent,
        OrderStepperComponent,
        MailSelectorComponent,
        OrderCreationFormComponent,
    ],
    imports: [
        ...modules,
        routing
    ],
    providers: [
        TranslateService,
        ...services
    ],
    exports: []
})
export class AppModule {
}
