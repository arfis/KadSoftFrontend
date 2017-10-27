// external module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import {
    AlertModule, BsDropdownModule, CollapseModule, DatepickerModule, ModalModule, PaginationModule,
    TabsModule, TooltipModule
} from 'ngx-bootstrap';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    AccordionModule,
    ChartModule, FileUploadModule,
    InputTextareaModule, MultiSelectModule, SelectButtonModule,
    SplitButtonModule
} from "primeng/primeng";

// main bootstrap
import { routing } from './app.routes';
import {InvoiceModule} from "./pages/invoice/invoice.module";
import {UserViewComponent} from "./pages/users/user-view/user-view.component";
import {UserResolve} from "./pages/users/user-view/user-resolver.component";
import {OrderService} from "./pages/order/order.service";
import {InvoiceResolve} from "./pages/invoice/invoice-resolve.component";
import {InvoiceDetailComponent} from "./pages/invoice/invoice-detail.component";
import {RestService} from "./services/rest.service";
import {Configuration} from "./app.constants";
import {AdministrationModule} from "./pages/administration/administration.module";
import {SlimLoadingBarModule, SlimLoadingBarService} from "ng2-slim-loading-bar";
import {InvoiceService} from "./pages/invoice/invoice.service";
import { StatisticsComponent } from './pages/statistics/statistics.component';

import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {
    MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdIconModule, MdInputModule, MdStepperModule,
    MdTableModule
} from "@angular/material";

import { AppComponent } from './app.component';

import { AppHeaderComponent } from './widgets/app-header';
import { AppFooterComponent } from './widgets/app-footer';
import { MenuAsideComponent } from './widgets/menu-aside';
import { ControlSidebarComponent } from './widgets/control-sidebar';
import { MessagesBoxComponent } from './widgets/messages-box';
import { NotificationBoxComponent } from './widgets/notification-box';
import { TasksBoxComponent } from './widgets/tasks-box';
import { UserBoxComponent } from './widgets/user-box';
import { BreadcrumbComponent } from './widgets/breadcrumb';


import { UserService } from './services/user.service';
import { MessagesService } from './services/messages.service';
import { CanActivateGuard } from './services/guard.service';
import { NotificationService } from './services/notification.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { AdminLTETranslateService } from './services/translate.service';
import { LoggerService } from './services/logger.service';
import {InterceptorService} from "./services/interceptor-service.service";
import { StepComponent } from './component/step/step.component';
import { StepperComponent } from './container/stepper/stepper.component';
import {CommonModule} from "@angular/common";
import {FilterComponent} from "./widgets/filter/filter.component";
import {RequiredDirective} from "./widgets/required.directive";
import {OrderDetailComponent} from "./pages/order/order-detail.component";
import {OrderModal} from "./pages/order/order-modal.component";
import {OrderCreationComponent} from "./pages/order/order-creation.component";
import {OrderComponent} from "./pages/order/order.component";
import {OrderResolve} from "./pages/order/order-resolve.component";
import {ConfigurationService} from "./services/configuration.service";
import {CustomerService} from "./pages/users/user.service";

// les pages
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { LayoutsAuthComponent } from './pages/layouts/auth/auth';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { OrderSortDirective } from './pages/order/order-sort.directive';
import { ProfileComponent } from './pages/profile/profile.component';
import { TranslatePipe } from './component/step/translate.pipe';
import { ProductListComponent } from './component/product-list/product-list.component';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

let material = [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdIconModule,
    MdTableModule,
    MdDatepickerModule,
    MdStepperModule,
];

let modules = [
    material,
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
    TooltipModule.forRoot(),
    MdInputModule,
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
    TranslateModule.forRoot({
       loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http]
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
    FilterComponent,
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
    AdminLTETranslateService,
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

@NgModule( {
    bootstrap: [AppComponent],
    declarations: [
        ...widgets,
        ...pages,
        StatisticsComponent,
        OrderSortDirective,
        ProfileComponent,
        TranslatePipe,
        ProductListComponent,
    ],
    imports: [
        ...modules,
        routing
    ],
    providers: [
        ...services
    ]
})
export class AppModule { }
