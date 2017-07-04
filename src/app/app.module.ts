// external module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule, CollapseModule, DatepickerModule, TabsModule} from 'ng2-bootstrap';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { environment } from '../environments/environment';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { AccordionModule } from 'ng2-bootstrap/accordion';

export function createTranslateLoader( http: Http ) {
    return new TranslateStaticLoader( http, '../public/assets/i18n', '.json' );
}

let modules = [
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserModule,
    CollapseModule.forRoot(),CollapseModule.forRoot(),
    FormsModule,
    HttpModule,
    TabsModule.forRoot(),
    ReactiveFormsModule,
    RouterModule,
    AngularFireModule.initializeApp( environment.firebase ),
    TranslateModule.forRoot({
        deps: [Http],
        provide: TranslateLoader,
        useFactory: (createTranslateLoader)
    }),
    ToasterModule,
    InvoiceModule,
    OrderModule,
    AdministrationModule
];

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
    UserBoxComponent
];

import { UserService } from './services/user.service';
import { MessagesService } from './services/messages.service';
import { CanActivateGuard } from './services/guard.service';
import { NotificationService } from './services/notification.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { AdminLTETranslateService } from './services/translate.service';
import { LoggerService } from './services/logger.service';

let services = [
    UserService,
    BreadcrumbService,
    MessagesService,
    CanActivateGuard,
    NotificationService,
    AdminLTETranslateService,
    LoggerService,
    OrderService,
    UserResolve,
    InvoiceResolve,
    RestService,
    Configuration,
    CompanyService
];

// les pages
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { ClientComponent } from './pages/client/client.component';
import { LayoutsAuthComponent } from './pages/layouts/auth/auth';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

let pages = [
    HomeComponent,
    PageNumComponent,
    ClientComponent,
    LayoutsAuthComponent,
    LoginComponent,
    RegisterComponent,
    UserViewComponent,
    InvoiceDetailComponent
];

// main bootstrap
import { routing } from './app.routes';
import {InvoiceModule} from "./pages/invoice/invoice.module";
import {UserViewComponent} from "./pages/users/user-view/user-view.component";
import {UserResolve} from "./pages/users/user-view/user-resolver.component";
import {OrderComponent} from "./pages/order/order.component";
import {OrderService} from "./pages/order/order.service";
import {InvoiceCreation} from "./pages/invoice/invoice-create.component";
import {OrderCreationComponent} from "./pages/order/order-creation.component";
import {OrderModule} from "./pages/order/order.module";
import {InvoiceResolve} from "./pages/invoice/invoice-resolve.component";
import {InvoiceDetailComponent} from "./pages/invoice/invoice-detail.component";
import {RestService} from "./services/rest.service";
import {Configuration} from "./app.constants";
import {AdministrationComponent} from "./pages/administration/administration.component";
import {AdministrationModule} from "./pages/administration/administration.module";
import {CompanyService} from "./pages/administration/companies/company.service";

@NgModule( {
    bootstrap: [AppComponent],
    declarations: [
        ...widgets,
        ...pages
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
