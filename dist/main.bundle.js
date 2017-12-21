webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/administration/administration.module": [
		"../../../../../src/app/pages/administration/administration.module.ts",
		"administration.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppComponent = (function () {
    function AppComponent() {
        // TODO
    }
    AppComponent.prototype.ngOnInit = function () {
        // TODO
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Configuration = (function () {
    function Configuration() {
        this.server = "https://digitalwalk.sk/";
        // public server : string = "http://192.168.0.100:8000/"
        this.authUrl = "oauth/v2/token";
        this.apiUrl = 'php-crud-api/api.php/';
        this.userApi = "api/users";
        this.companiesApi = "api/companies";
        this.customerApi = "api/customers";
        this.invoicesApi = "api/invoices";
        this.ordersApi = "api/orders";
        this.ordersDealerApi = 'api/orders-dealer';
        this.rolesApi = "api/users/allowed/roles";
        this.serverWithApiUrl = this.server + this.apiUrl;
    }
    return Configuration;
}());
Configuration = __decorate([
    core_1.Injectable()
], Configuration);
exports.Configuration = Configuration;
//# sourceMappingURL=app.constants.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// external module
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var ngx_bootstrap_1 = __webpack_require__("../../../../ngx-bootstrap/index.js");
var primeng_1 = __webpack_require__("../../../../primeng/primeng.js");
var angular2_toaster_1 = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var core_2 = __webpack_require__("../../../../@ngx-translate/core/index.js");
var animations_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var primeng_2 = __webpack_require__("../../../../primeng/primeng.js");
// main bootstrap
var app_routes_1 = __webpack_require__("../../../../../src/app/app.routes.ts");
var invoice_module_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.module.ts");
var user_view_component_1 = __webpack_require__("../../../../../src/app/pages/users/user-view/user-view.component.ts");
var user_resolver_component_1 = __webpack_require__("../../../../../src/app/pages/users/user-view/user-resolver.component.ts");
var order_service_1 = __webpack_require__("../../../../../src/app/pages/order/order.service.ts");
var invoice_resolve_component_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice-resolve.component.ts");
var invoice_detail_component_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice-detail.component.ts");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var app_constants_1 = __webpack_require__("../../../../../src/app/app.constants.ts");
var ng2_slim_loading_bar_1 = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
var invoice_service_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.service.ts");
var statistics_component_1 = __webpack_require__("../../../../../src/app/pages/statistics/statistics.component.ts");
var http_loader_1 = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var app_header_1 = __webpack_require__("../../../../../src/app/widgets/app-header/index.ts");
var app_footer_1 = __webpack_require__("../../../../../src/app/widgets/app-footer/index.ts");
var menu_aside_1 = __webpack_require__("../../../../../src/app/widgets/menu-aside/index.ts");
var control_sidebar_1 = __webpack_require__("../../../../../src/app/widgets/control-sidebar/index.ts");
var messages_box_1 = __webpack_require__("../../../../../src/app/widgets/messages-box/index.ts");
var notification_box_1 = __webpack_require__("../../../../../src/app/widgets/notification-box/index.ts");
var tasks_box_1 = __webpack_require__("../../../../../src/app/widgets/tasks-box/index.ts");
var user_box_1 = __webpack_require__("../../../../../src/app/widgets/user-box/index.ts");
var breadcrumb_1 = __webpack_require__("../../../../../src/app/widgets/breadcrumb/index.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var messages_service_1 = __webpack_require__("../../../../../src/app/services/messages.service.ts");
var guard_service_1 = __webpack_require__("../../../../../src/app/services/guard.service.ts");
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var breadcrumb_service_1 = __webpack_require__("../../../../../src/app/services/breadcrumb.service.ts");
var translate_service_1 = __webpack_require__("../../../../../src/app/services/translate.service.ts");
var logger_service_1 = __webpack_require__("../../../../../src/app/services/logger.service.ts");
var interceptor_service_service_1 = __webpack_require__("../../../../../src/app/services/interceptor-service.service.ts");
var step_component_1 = __webpack_require__("../../../../../src/app/component/step/step.component.ts");
var stepper_component_1 = __webpack_require__("../../../../../src/app/container/stepper/stepper.component.ts");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var required_directive_1 = __webpack_require__("../../../../../src/app/widgets/required.directive.ts");
var order_detail_component_1 = __webpack_require__("../../../../../src/app/pages/order/order-detail.component.ts");
var order_modal_component_1 = __webpack_require__("../../../../../src/app/pages/order/order-modal.component.ts");
var order_creation_component_1 = __webpack_require__("../../../../../src/app/pages/order/order-creation.component.ts");
var order_component_1 = __webpack_require__("../../../../../src/app/pages/order/order.component.ts");
var order_resolve_component_1 = __webpack_require__("../../../../../src/app/pages/order/order-resolve.component.ts");
var configuration_service_1 = __webpack_require__("../../../../../src/app/services/configuration.service.ts");
var user_service_2 = __webpack_require__("../../../../../src/app/pages/users/user.service.ts");
// les pages
var home_component_1 = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
var page_num_component_1 = __webpack_require__("../../../../../src/app/pages/page-num/page-num.component.ts");
var auth_1 = __webpack_require__("../../../../../src/app/pages/layouts/auth/auth.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
var http_2 = __webpack_require__("../../../common/@angular/common/http.es5.js");
var order_sort_directive_1 = __webpack_require__("../../../../../src/app/pages/order/order-sort.directive.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/pages/profile/profile.component.ts");
var translate_pipe_1 = __webpack_require__("../../../../../src/app/component/step/translate.pipe.ts");
var product_list_component_1 = __webpack_require__("../../../../../src/app/component/product-list/product-list.component.ts");
var order_stepper_component_1 = __webpack_require__("../../../../../src/app/component/order-stepper/order-stepper.component.ts");
var mail_selector_component_1 = __webpack_require__("../../../../../src/app/component/mail-selector/mail-selector.component.ts");
var order_creation_form_component_1 = __webpack_require__("../../../../../src/app/component/order-creation-form/order-creation-form.component.ts");
var filter_module_1 = __webpack_require__("../../../../../src/app/widgets/filter/filter.module.ts");
var spinner_module_1 = __webpack_require__("../../../../../src/app/component/spinner/spinner.module.ts");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http);
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var material = [
    material_1.MdSelectModule,
    material_1.MdButtonModule,
    material_1.MdCheckboxModule,
    material_1.MdInputModule,
    material_1.MdIconModule,
    material_1.MdTableModule,
    material_1.MdDatepickerModule,
    material_1.MdStepperModule,
];
var modules = [
    spinner_module_1.SpinnerModule,
    material,
    filter_module_1.FilterModule,
    primeng_2.MultiSelectModule,
    primeng_2.AccordionModule,
    primeng_2.SelectButtonModule,
    primeng_2.FileUploadModule,
    router_1.RouterModule,
    common_1.CommonModule,
    forms_1.ReactiveFormsModule,
    ngx_bootstrap_1.CollapseModule.forRoot(),
    ngx_bootstrap_1.BsDropdownModule.forRoot(),
    ngx_bootstrap_1.PaginationModule.forRoot(),
    ngx_bootstrap_1.ModalModule.forRoot(),
    ng2_slim_loading_bar_1.SlimLoadingBarModule.forRoot(),
    primeng_1.TooltipModule,
    material_1.MdInputModule,
    platform_browser_1.BrowserModule,
    animations_1.BrowserAnimationsModule,
    primeng_2.MultiSelectModule,
    primeng_2.InputTextareaModule,
    primeng_2.SplitButtonModule,
    primeng_2.ChartModule,
    ngx_bootstrap_1.AlertModule.forRoot(),
    ngx_bootstrap_1.DatepickerModule.forRoot(),
    platform_browser_1.BrowserModule,
    ngx_bootstrap_1.CollapseModule.forRoot(),
    forms_1.FormsModule,
    http_1.HttpModule,
    http_2.HttpClientModule,
    ngx_bootstrap_1.TabsModule.forRoot(),
    forms_1.ReactiveFormsModule,
    router_1.RouterModule,
    core_2.TranslateModule.forRoot({
        loader: {
            provide: core_2.TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [http_1.Http]
        }
    }),
    angular2_toaster_1.ToasterModule,
    invoice_module_1.InvoiceModule,
    ng2_slim_loading_bar_1.SlimLoadingBarModule.forRoot()
];
var widgets = [
    app_component_1.AppComponent,
    breadcrumb_1.BreadcrumbComponent,
    app_header_1.AppHeaderComponent,
    app_footer_1.AppFooterComponent,
    menu_aside_1.MenuAsideComponent,
    control_sidebar_1.ControlSidebarComponent,
    messages_box_1.MessagesBoxComponent,
    notification_box_1.NotificationBoxComponent,
    tasks_box_1.TasksBoxComponent,
    user_box_1.UserBoxComponent,
    order_component_1.OrderComponent,
    order_creation_component_1.OrderCreationComponent,
    order_modal_component_1.OrderModal,
    order_detail_component_1.OrderDetailComponent,
    required_directive_1.RequiredDirective,
    stepper_component_1.StepperComponent,
    step_component_1.StepComponent
];
var services = [
    invoice_service_1.InvoiceService,
    user_service_2.CustomerService,
    configuration_service_1.ConfigurationService,
    order_service_1.OrderService,
    rest_service_1.RestService,
    order_resolve_component_1.OrderResolve,
    user_service_1.UserService,
    breadcrumb_service_1.BreadcrumbService,
    messages_service_1.MessagesService,
    guard_service_1.CanActivateGuard,
    notification_service_1.NotificationService,
    translate_service_1.AdminLTETranslateService,
    logger_service_1.LoggerService,
    user_resolver_component_1.UserResolve,
    invoice_resolve_component_1.InvoiceResolve,
    app_constants_1.Configuration,
    interceptor_service_service_1.InterceptorService,
    ng2_slim_loading_bar_1.SlimLoadingBarService,
    {
        provide: http_2.HTTP_INTERCEPTORS,
        useClass: interceptor_service_service_1.InterceptorService,
        multi: true,
    },
];
var pages = [
    home_component_1.HomeComponent,
    page_num_component_1.PageNumComponent,
    auth_1.LayoutsAuthComponent,
    login_component_1.LoginComponent,
    register_component_1.RegisterComponent,
    user_view_component_1.UserViewComponent,
    invoice_detail_component_1.InvoiceDetailComponent
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: widgets.concat(pages, [
            statistics_component_1.StatisticsComponent,
            order_sort_directive_1.OrderSortDirective,
            profile_component_1.ProfileComponent,
            translate_pipe_1.TranslatePipe,
            product_list_component_1.ProductListComponent,
            order_stepper_component_1.OrderStepperComponent,
            mail_selector_component_1.MailSelectorComponent,
            order_creation_form_component_1.OrderCreationFormComponent,
        ]),
        imports: modules.concat([
            app_routes_1.routing
        ]),
        providers: services.slice(),
        exports: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var guard_service_1 = __webpack_require__("../../../../../src/app/services/guard.service.ts");
// Components
var home_component_1 = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
var page_num_component_1 = __webpack_require__("../../../../../src/app/pages/page-num/page-num.component.ts");
var auth_1 = __webpack_require__("../../../../../src/app/pages/layouts/auth/auth.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
var invoice_component_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.component.ts");
var user_resolver_component_1 = __webpack_require__("../../../../../src/app/pages/users/user-view/user-resolver.component.ts");
var user_view_component_1 = __webpack_require__("../../../../../src/app/pages/users/user-view/user-view.component.ts");
var order_component_1 = __webpack_require__("../../../../../src/app/pages/order/order.component.ts");
var invoice_resolve_component_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice-resolve.component.ts");
var invoice_detail_component_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice-detail.component.ts");
var order_resolve_component_1 = __webpack_require__("../../../../../src/app/pages/order/order-resolve.component.ts");
var order_detail_component_1 = __webpack_require__("../../../../../src/app/pages/order/order-detail.component.ts");
var statistics_component_1 = __webpack_require__("../../../../../src/app/pages/statistics/statistics.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/pages/profile/profile.component.ts");
var product_list_component_1 = __webpack_require__("../../../../../src/app/component/product-list/product-list.component.ts");
var routes = [
    // logged routes
    {
        canActivate: [guard_service_1.CanActivateGuard],
        children: [
            {
                canActivate: [guard_service_1.CanActivateGuard],
                loadChildren: './pages/administration/administration.module#AdministrationModule',
                path: 'administration'
            },
            {
                canActivate: [guard_service_1.CanActivateGuard],
                component: home_component_1.HomeComponent,
                path: 'home'
            },
            {
                canActivate: [guard_service_1.CanActivateGuard],
                component: invoice_component_1.InvoiceComponent,
                path: 'invoices'
            },
            {
                canActivate: [guard_service_1.CanActivateGuard],
                path: 'invoice/:invoiceNumber',
                component: invoice_detail_component_1.InvoiceDetailComponent,
                resolve: {
                    invoice: invoice_resolve_component_1.InvoiceResolve
                }
            },
            {
                canActivate: [guard_service_1.CanActivateGuard],
                path: 'order/:orderNumber',
                component: order_detail_component_1.OrderDetailComponent,
                resolve: {
                    order: order_resolve_component_1.OrderResolve
                }
            },
            {
                canActivate: [guard_service_1.CanActivateGuard],
                component: order_component_1.OrderComponent,
                path: ''
            },
            {
                canActivate: [guard_service_1.CanActivateGuard],
                component: statistics_component_1.StatisticsComponent,
                path: 'stats'
            },
            {
                canActivate: [guard_service_1.CanActivateGuard],
                component: profile_component_1.ProfileComponent,
                path: 'profile'
            },
            {
                canActivate: [guard_service_1.CanActivateGuard],
                path: 'user/:userId',
                component: user_view_component_1.UserViewComponent,
                resolve: {
                    userInformation: user_resolver_component_1.UserResolve
                }
            },
            {
                canActivate: [guard_service_1.CanActivateGuard],
                component: page_num_component_1.PageNumComponent,
                path: 'page/:id'
            },
            {
                canActivate: [guard_service_1.CanActivateGuard],
                component: product_list_component_1.ProductListComponent,
                path: 'products'
            }
        ],
        component: auth_1.LayoutsAuthComponent,
        path: '',
    },
    // not logged routes
    {
        component: login_component_1.LoginComponent,
        path: 'login'
    },
    {
        component: register_component_1.RegisterComponent,
        path: 'register'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/component/mail-selector/mail-selector.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper-mail {\n    width: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.mat-form-field {\n    width: 100%;\n}\n\n.mat-select {\n    width:100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/mail-selector/mail-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-mail\">\n    <md-select (change)=\"onChange($event)\" placeholder=\"Sablona\">\n        <md-option *ngFor=\"let template of templates\" [value]=\"template\">\n            {{ template }}\n        </md-option>\n    </md-select>\n\n    <md-form-field>\n        <textarea mdInput [(ngModel)]=\"selectedMail\" placeholder=\"Text spravy\"></textarea>\n    </md-form-field>\n\n    <button md-Button (click)=\"onCreate()\">Vytvor objednavku</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/mail-selector/mail-selector.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var MailSelectorComponent = (function () {
    function MailSelectorComponent(_restService) {
        this._restService = _restService;
        this.createEmitter = new core_1.EventEmitter();
        this.templates = [];
    }
    MailSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._restService.getEmails().subscribe(function (results) {
            _this.templates = results.map(function (result) { return result.text; });
        });
    };
    MailSelectorComponent.prototype.onChange = function (event) {
        this.selectedMail = event.value;
    };
    MailSelectorComponent.prototype.onCreate = function () {
        this.createEmitter.emit(this.selectedMail);
    };
    return MailSelectorComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MailSelectorComponent.prototype, "createEmitter", void 0);
MailSelectorComponent = __decorate([
    core_1.Component({
        selector: 'app-mail-selector',
        template: __webpack_require__("../../../../../src/app/component/mail-selector/mail-selector.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/mail-selector/mail-selector.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _a || Object])
], MailSelectorComponent);
exports.MailSelectorComponent = MailSelectorComponent;
var _a;
//# sourceMappingURL=mail-selector.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/order-creation-form/order-creation-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".action {\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack:center;\n        -ms-flex-pack:center;\n            justify-content:center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/order-creation-form/order-creation-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(orderForm)\" [formGroup]=\"orderForm\">\n\n    <div class=\"form-group\">\n        <label for=\"name\">Meno</label>\n        <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\"/>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"companyString\">Firma:</label>\n        <input type=\"text\" id=\"companyString\" class=\"form-control\" formControlName=\"companyString\"/>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"description\">Popis:</label>\n        <input type=\"text\" id=\"description\" class=\"form-control\" formControlName=\"text\"/>\n    </div>\n\n    <!--<div formGroupName=\"survey\">-->\n        <!--<div class=\"form-group\">-->\n            <!--<label for=\"constructionOwner\">Meno majitela stavby:</label>-->\n            <!--<input type=\"text\" id=\"constructionOwner\" class=\"form-control\" formControlName=\"constructionOwner\"/>-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n            <!--<label for=\"constructionPlace\">Miesto stavby a katastralne uzemie:</label>-->\n            <!--<input type=\"text\" id=\"constructionPlace\" class=\"form-control\" formControlName=\"constructionPlace\"/>-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n            <!--<label for=\"parcel\">Parcela:</label>-->\n            <!--<input type=\"text\" id=\"parcel\" class=\"form-control\" formControlName=\"parcel\"/>-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n            <!--<md-select placeholder=\"Stavba\" formControlName=\"building\">-->\n                <!--<md-option *ngFor=\"let buildingType of buildingTypes\" [value]=\"buildingType\">-->\n                    <!--{{buildingType}}-->\n                <!--</md-option>-->\n            <!--</md-select>-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n            <!--<label for=\"otherBuilding\">Iny typ stavby:</label>-->\n            <!--<input type=\"text\" id=\"otherBuilding\" class=\"form-control\" formControlName=\"otherBuilding\"/>-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n            <!--<label for=\"buildingPermit\">Stavebne povolenie - rok:</label>-->\n            <!--<input type=\"text\" id=\"buildingPermit\" class=\"form-control\" formControlName=\"buildingPermit\"/>-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n            <!--<md-select placeholder=\"Pocet podlazi:\" formControlName=\"numberOfFloors\">-->\n                <!--<md-option *ngFor=\"let floor of numberOfFloors\" [value]=\"floor\">-->\n                    <!--{{floor}}-->\n                <!--</md-option>-->\n            <!--</md-select>-->\n        <!--</div>-->\n    <!--</div>-->\n    <div class=\"action\">\n        <button [disabled]=\"!orderForm.valid\" md-button mdStepperNext class=\"btn btn-success\" type=\"submit\">Dalej</button>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/component/order-creation-form/order-creation-form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var order_model_1 = __webpack_require__("../../../../../src/app/pages/order/order.model.ts");
var OrderCreationFormComponent = (function () {
    function OrderCreationFormComponent(fb, loggedUserService) {
        this.fb = fb;
        this.loggedUserService = loggedUserService;
        this.createEmitter = new core_1.EventEmitter();
        this.buildingTypes = ['Novostavba', 'Rekonstrukcia'];
        this.numberOfFloors = ['1PP', '1NP - nadzemne podlazie', '2NP - nedzemne podlazie', 'Ine'];
    }
    OrderCreationFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    OrderCreationFormComponent.prototype.createForm = function () {
        var disabledEmpty = { value: '', disabled: false };
        this.orderForm = this.fb.group({
            'text': ['', forms_1.Validators.required],
            'companyString': [''],
            'name': [''],
            'createdBy': [{
                    value: this.loggedUserService.getLoggedInUser().userName,
                    disabled: true
                }, forms_1.Validators.required],
            'survey': this.fb.group({
                'constructionOwner': [''],
                'constructionPlace': [''],
                'parcel': [''],
                'building': [''],
                'otherBuilding': [''],
                'buildingPermit': [''],
                'numberOfFloors': [''],
            })
        });
        if (this.order) {
            console.log('patching');
            console.log(this.order);
            this.orderForm.patchValue(this.order);
        }
    };
    OrderCreationFormComponent.prototype.onSubmit = function (_a) {
        var value = _a.value;
        this.createEmitter.emit(value);
    };
    return OrderCreationFormComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OrderCreationFormComponent.prototype, "createEmitter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof order_model_1.Order !== "undefined" && order_model_1.Order) === "function" && _a || Object)
], OrderCreationFormComponent.prototype, "order", void 0);
OrderCreationFormComponent = __decorate([
    core_1.Component({
        selector: 'app-order-creation-form',
        template: __webpack_require__("../../../../../src/app/component/order-creation-form/order-creation-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/order-creation-form/order-creation-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _c || Object])
], OrderCreationFormComponent);
exports.OrderCreationFormComponent = OrderCreationFormComponent;
var _a, _b, _c;
//# sourceMappingURL=order-creation-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/order-stepper/order-stepper.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/order-stepper/order-stepper.component.html":
/***/ (function(module, exports) {

module.exports = "<md-horizontal-stepper #stepper [linear]=\"isLinear\">\n  <md-step [stepControl]=\"firstFormGroup\">\n      <ng-template mdStepLabel>Objednavka</ng-template>\n      <app-order-creation-form [order]=\"order\" (createEmitter)=\"orderCreated($event)\"></app-order-creation-form>\n  </md-step>\n  <md-step [stepControl]=\"secondFormGroup\">\n      <ng-template mdStepLabel>Fakturacne Udaje</ng-template>\n      InvoiceCreation\n      <invoice-creation [invoice]=\"invoice\" (createEmitter)=\"invoiceCreated($event)\"></invoice-creation>\n  </md-step>\n  <md-step>\n    <ng-template mdStepLabel>Vyber Mailu</ng-template>\n    <app-mail-selector (createEmitter)=\"emailCreated($event)\" (finish)=\"create()\"></app-mail-selector>\n  </md-step>\n</md-horizontal-stepper>\n\n"

/***/ }),

/***/ "../../../../../src/app/component/order-stepper/order-stepper.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var invoice_model_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.model.ts");
var order_model_1 = __webpack_require__("../../../../../src/app/pages/order/order.model.ts");
var invoice_service_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.service.ts");
var order_service_1 = __webpack_require__("../../../../../src/app/pages/order/order.service.ts");
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var Product_1 = __webpack_require__("../../../../../src/app/models/Product.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var OrderStepperComponent = (function () {
    function OrderStepperComponent(_invoiceService, _orderService, _notificationService, router) {
        this._invoiceService = _invoiceService;
        this._orderService = _orderService;
        this._notificationService = _notificationService;
        this.router = router;
        this.isLinear = false;
        this.invoice = new invoice_model_1.Invoice();
        this.createEmitter = new core_1.EventEmitter();
    }
    OrderStepperComponent.prototype.ngOnInit = function () {
        if (this.order) {
            this.setUpInvoiceData();
        }
    };
    OrderStepperComponent.prototype.orderCreated = function (order) {
        var _this = this;
        if (this.order) {
            order.id = this.order.id;
            delete order.survey;
            if (this.order.mainContact) {
                order.mainContact = this.order.mainContact;
                delete order.mainContact.id;
            }
            this._orderService.updateOrder(order).subscribe(function (result) {
                _this.order = result;
                _this._notificationService.success('bola uspesne upravena', 'objednavka');
            }, function (error) {
                _this._notificationService.error('nebola uspesne upravena', 'objednavka');
            });
        }
        else {
            this.order = order;
        }
        this.scrollUp();
    };
    OrderStepperComponent.prototype.invoiceCreated = function (invoice) {
        this.invoice = invoice;
        this.scrollUp();
    };
    OrderStepperComponent.prototype.emailCreated = function (email) {
        this.email = email;
        this.create();
    };
    OrderStepperComponent.prototype.setUpInvoiceData = function () {
        this.invoice = new invoice_model_1.Invoice();
        console.log(this.order);
        if (this.order.mainContact) {
            this.invoice.customer.mainContact = this.order.mainContact;
        }
        if (this.order.invoiceContact) {
            this.invoice.customer.invoiceContact = this.order.invoiceContact;
        }
        var item1 = 'ECB pre RD v PDF + tlačenej forme - do 6 dní u Vás - 98 EUR';
        var item2 = 'tepelnotechnické, resp. energetické posúdenie pre RD (od 1.1.2016 musí byť v ener. triede A) - 109 EUR';
        if (this.order.energyCertificatesCount) {
            var product1 = new Product_1.Product();
            product1.count = this.order.energyCertificatesCount;
            product1.newItem = item1;
            product1.price = 98;
            this.invoice.invoiceItems.push(product1);
        }
        if (this.order.energyAuditsCount) {
            var product2 = new Product_1.Product();
            product2.count = this.order.energyAuditsCount;
            product2.newItem = item2;
            product2.price = 109;
            this.invoice.invoiceItems.push(product2);
        }
        this.invoice.order = this.order.id;
    };
    OrderStepperComponent.prototype.create = function () {
        if (this.order.state && this.order.state === 'draft') {
            this.createInvoice(this.order);
        }
        else {
            this.createOrderAndInvoice();
        }
    };
    OrderStepperComponent.prototype.createOrderAndInvoice = function () {
        var _this = this;
        delete this.order.survey;
        this.order.mainContact = this.invoice.customer.mainContact;
        this._orderService.createOrder(this.order).subscribe(function (resultInvoice) {
            _this._notificationService.success('objednavka vytvorena', 'objednavka');
            _this.createInvoice(resultInvoice);
        }, function (error) {
            _this._notificationService.error('objednavka nebola vytvorena', 'objednavka');
        });
    };
    OrderStepperComponent.prototype.createInvoice = function (order) {
        var _this = this;
        this.invoice.order = order.id;
        this.invoice.emailText = this.email;
        this._invoiceService.createInvoice(this.invoice).subscribe(function (result) {
            _this._notificationService.success('faktura vytvorena', 'faktura');
            order.invoices.push(result);
            _this.createEmitter.emit(order);
            _this.router.navigate(["/order/" + order.id]);
        }, function (error) {
            _this._notificationService.error('faktura nebola vytvorena', 'faktura');
        });
    };
    OrderStepperComponent.prototype.scrollUp = function () {
        window.scrollTo(0, 0);
    };
    return OrderStepperComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof order_model_1.Order !== "undefined" && order_model_1.Order) === "function" && _a || Object)
], OrderStepperComponent.prototype, "order", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OrderStepperComponent.prototype, "createEmitter", void 0);
__decorate([
    core_1.ViewChild('stepper'),
    __metadata("design:type", Object)
], OrderStepperComponent.prototype, "stepper", void 0);
OrderStepperComponent = __decorate([
    core_1.Component({
        selector: 'app-order-stepper',
        template: __webpack_require__("../../../../../src/app/component/order-stepper/order-stepper.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/order-stepper/order-stepper.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof invoice_service_1.InvoiceService !== "undefined" && invoice_service_1.InvoiceService) === "function" && _b || Object, typeof (_c = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" && _c || Object, typeof (_d = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object])
], OrderStepperComponent);
exports.OrderStepperComponent = OrderStepperComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=order-stepper.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/product-list/item.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Item = (function () {
    function Item() {
    }
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.model.js.map

/***/ }),

/***/ "../../../../../src/app/component/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<i>Zadajte produkt</i>\n<input type=\"text\" id=\"name\" [(ngModel)]=\"item\"/> <button class=\"btn btn-success\" (click)=\"saveItem()\">Uloz produkt</button>\n<table class=\"table table-bordered table-hover\">\n  <tbody>\n  <tr>\n    <th>Produkt</th>\n    <th>Odstranit</th>\n  </tr>\n\n  <tr *ngFor=\"let product of products\">\n    <td>{{product.name}}</td>\n    <td><span class=\"remove glyphicon glyphicon-remove-sign\" (click)=\"removeItem(product)\"></span></td>\n  </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/component/product-list/product-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var item_model_1 = __webpack_require__("../../../../../src/app/component/product-list/item.model.ts");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var ProductListComponent = (function () {
    function ProductListComponent(_restSrv, _notificationService) {
        var _this = this;
        this._restSrv = _restSrv;
        this._notificationService = _notificationService;
        _restSrv.getItems().subscribe(function (result) {
            _this.products = result;
        }, function (error) {
            console.log('error');
        });
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent.prototype.saveItem = function () {
        var _this = this;
        console.log(this.item);
        var tempItem = new item_model_1.Item();
        tempItem.name = this.item;
        console.log(this.item);
        console.log(tempItem.name);
        this._restSrv.addItem(tempItem).subscribe(function (result) {
            _this.products.push(result);
        });
    };
    ProductListComponent.prototype.removeItem = function (item) {
        var _this = this;
        this._restSrv.deleteItem(item.id).subscribe(function (result) {
            _this._notificationService.success('bola uspesne odstranena', 'polozka');
            _this.products.splice(_this.products.indexOf(item), 1);
        }, function (error) {
            console.log('problem');
        });
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/component/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/product-list/product-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _a || Object, typeof (_b = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _b || Object])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
var _a, _b;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/spinner/spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    background-color: rgba(128, 128, 128, 0.71);\n    position:absolute;\n    height:100%;\n    width:100%;\n    left:0;\n    z-index:10;\n}\n.sk-fading-circle {\n    margin: 100px auto;\n    width: 40px;\n    height: 40px;\n    position: relative;\n}\n\n.sk-fading-circle .sk-circle {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.sk-fading-circle .sk-circle:before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: #333;\n    border-radius: 100%;\n    -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n    animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n}\n.sk-fading-circle .sk-circle2 {\n    -webkit-transform: rotate(30deg);\n    transform: rotate(30deg);\n}\n.sk-fading-circle .sk-circle3 {\n    -webkit-transform: rotate(60deg);\n    transform: rotate(60deg);\n}\n.sk-fading-circle .sk-circle4 {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n}\n.sk-fading-circle .sk-circle5 {\n    -webkit-transform: rotate(120deg);\n    transform: rotate(120deg);\n}\n.sk-fading-circle .sk-circle6 {\n    -webkit-transform: rotate(150deg);\n    transform: rotate(150deg);\n}\n.sk-fading-circle .sk-circle7 {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n}\n.sk-fading-circle .sk-circle8 {\n    -webkit-transform: rotate(210deg);\n    transform: rotate(210deg);\n}\n.sk-fading-circle .sk-circle9 {\n    -webkit-transform: rotate(240deg);\n    transform: rotate(240deg);\n}\n.sk-fading-circle .sk-circle10 {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg);\n}\n.sk-fading-circle .sk-circle11 {\n    -webkit-transform: rotate(300deg);\n    transform: rotate(300deg);\n}\n.sk-fading-circle .sk-circle12 {\n    -webkit-transform: rotate(330deg);\n    transform: rotate(330deg);\n}\n.sk-fading-circle .sk-circle2:before {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s;\n}\n.sk-fading-circle .sk-circle3:before {\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n}\n.sk-fading-circle .sk-circle4:before {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n}\n.sk-fading-circle .sk-circle5:before {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s;\n}\n.sk-fading-circle .sk-circle6:before {\n    -webkit-animation-delay: -0.7s;\n    animation-delay: -0.7s;\n}\n.sk-fading-circle .sk-circle7:before {\n    -webkit-animation-delay: -0.6s;\n    animation-delay: -0.6s;\n}\n.sk-fading-circle .sk-circle8:before {\n    -webkit-animation-delay: -0.5s;\n    animation-delay: -0.5s;\n}\n.sk-fading-circle .sk-circle9:before {\n    -webkit-animation-delay: -0.4s;\n    animation-delay: -0.4s;\n}\n.sk-fading-circle .sk-circle10:before {\n    -webkit-animation-delay: -0.3s;\n    animation-delay: -0.3s;\n}\n.sk-fading-circle .sk-circle11:before {\n    -webkit-animation-delay: -0.2s;\n    animation-delay: -0.2s;\n}\n.sk-fading-circle .sk-circle12:before {\n    -webkit-animation-delay: -0.1s;\n    animation-delay: -0.1s;\n}\n\n@-webkit-keyframes sk-circleFadeDelay {\n    0%, 39%, 100% { opacity: 0; }\n    40% { opacity: 1; }\n}\n\n@keyframes sk-circleFadeDelay {\n    0%, 39%, 100% { opacity: 0; }\n    40% { opacity: 1; }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sk-fading-circle\">\n        <div class=\"sk-circle1 sk-circle\"></div>\n        <div class=\"sk-circle2 sk-circle\"></div>\n        <div class=\"sk-circle3 sk-circle\"></div>\n        <div class=\"sk-circle4 sk-circle\"></div>\n        <div class=\"sk-circle5 sk-circle\"></div>\n        <div class=\"sk-circle6 sk-circle\"></div>\n        <div class=\"sk-circle7 sk-circle\"></div>\n        <div class=\"sk-circle8 sk-circle\"></div>\n        <div class=\"sk-circle9 sk-circle\"></div>\n        <div class=\"sk-circle10 sk-circle\"></div>\n        <div class=\"sk-circle11 sk-circle\"></div>\n        <div class=\"sk-circle12 sk-circle\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/spinner/spinner.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var SpinnerComponent = (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    return SpinnerComponent;
}());
SpinnerComponent = __decorate([
    core_1.Component({
        selector: 'app-spinner',
        template: __webpack_require__("../../../../../src/app/component/spinner/spinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/spinner/spinner.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SpinnerComponent);
exports.SpinnerComponent = SpinnerComponent;
//# sourceMappingURL=spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/spinner/spinner.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var spinner_component_1 = __webpack_require__("../../../../../src/app/component/spinner/spinner.component.ts");
var SpinnerModule = (function () {
    function SpinnerModule() {
    }
    return SpinnerModule;
}());
SpinnerModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            spinner_component_1.SpinnerComponent
        ],
        exports: [
            spinner_component_1.SpinnerComponent
        ]
    })
], SpinnerModule);
exports.SpinnerModule = SpinnerModule;
//# sourceMappingURL=spinner.module.js.map

/***/ }),

/***/ "../../../../../src/app/component/step/step.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active {\n    background-color: #00a65a !important;\n}\n\n.current {\n    background-color: orange !important;\n}\n\n.step-number {\n    background-color:gray;\n    border-radius: 50%;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    height:25px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    color: white;\n    text-align:center;\n    width:25px;\n}\n\n.step-wrapper {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/step/step.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"step-wrapper\">\n    <div class=\"step-number\" [class.active]=\"active\" [class.current]=\"current\">\n        {{number}}\n    </div>\n    <div class=\"step-label\">\n        {{label | translate}}\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/step/step.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var StepComponent = (function () {
    function StepComponent() {
    }
    StepComponent.prototype.ngOnInit = function () {
    };
    return StepComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StepComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StepComponent.prototype, "number", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StepComponent.prototype, "current", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StepComponent.prototype, "active", void 0);
StepComponent = __decorate([
    core_1.Component({
        selector: 'app-step',
        template: __webpack_require__("../../../../../src/app/component/step/step.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/step/step.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StepComponent);
exports.StepComponent = StepComponent;
//# sourceMappingURL=step.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/step/translate.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var TranslatePipe = (function () {
    function TranslatePipe() {
    }
    TranslatePipe.prototype.transform = function (value, args) {
        switch (value) {
            case "draft": return "Nepripravena";
            case "preparing": return "Pripravovana";
            case "unassigned": return "Nepriradena";
            case "assigned": return "Priradena";
            case "finished": return "Dokoncena";
            case "dispatched": return "Odoslana";
            default: return value;
        }
    };
    return TranslatePipe;
}());
TranslatePipe = __decorate([
    core_1.Pipe({
        name: 'translate'
    })
], TranslatePipe);
exports.TranslatePipe = TranslatePipe;
//# sourceMappingURL=translate.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/container/stepper/stepper.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list {\n    background-color:white;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    z-index: 12;\n}\n\n.item {\n    background-color: white;\n    cursor: not-allowed;\n    min-width: 45px;\n    z-index: 20;\n}\n\n.active:hover, .current:hover {\n    background-color: gray;\n    border-radius: 5px;\n}\n\n.line {\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 1em 0;\n    margin-top: -32px;\n    padding: 0;\n    z-index: 11;\n}\n\n.stepper-wrapper {\n    margin-bottom: 35px;\n}\n\n.active {\n    cursor: pointer;\n}\n\n.current {\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/stepper/stepper.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"stepper-wrapper\">\n    <div class=\"list\">\n        <app-step class=\"item\" *ngFor=\"let step of steps; let i = index\"\n                  [class.active]=\"isStepActive(step)\" [class.current]=\"isStepCurrent(step)\"\n                  (click)=\"itemClick(step)\"\n                  [label]=\"step\" [number]=\"++i\"\n                  [active]=\"isStepActive(step)\" [current]=\"isStepCurrent(step)\"></app-step>\n    </div>\n    <div class=\"line\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/container/stepper/stepper.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var StepperComponent = (function () {
    function StepperComponent() {
        this.onClick = new core_1.EventEmitter();
    }
    StepperComponent.prototype.ngOnInit = function () {
    };
    StepperComponent.prototype.itemClick = function (step) {
        if (this.activeSteps[this.getMethodName(step)]) {
            this.onClick.emit(step);
        }
    };
    StepperComponent.prototype.isStepActive = function (step) {
        var methodName = this.getMethodName(step);
        return !!this.activeSteps[methodName];
    };
    StepperComponent.prototype.isStepCurrent = function (step) {
        return step === this.currentStep;
    };
    StepperComponent.prototype.getMethodName = function (step) {
        return 'to' + this.capitalizeFirstLetter(step);
    };
    StepperComponent.prototype.capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return StepperComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StepperComponent.prototype, "steps", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StepperComponent.prototype, "activeSteps", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StepperComponent.prototype, "currentStep", void 0);
__decorate([
    core_1.Output('onChange'),
    __metadata("design:type", Object)
], StepperComponent.prototype, "onClick", void 0);
StepperComponent = __decorate([
    core_1.Component({
        selector: 'app-stepper',
        template: __webpack_require__("../../../../../src/app/container/stepper/stepper.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/stepper/stepper.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StepperComponent);
exports.StepperComponent = StepperComponent;
//# sourceMappingURL=stepper.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/Product.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by a619678 on 6. 6. 2017.
 */
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=Product.js.map

/***/ }),

/***/ "../../../../../src/app/models/company-model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var recordObject_model_1 = __webpack_require__("../../../../../src/app/models/recordObject.model.ts");
/**
 * Created by a619678 on 6. 6. 2017.
 */
var Company = (function (_super) {
    __extends(Company, _super);
    function Company() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Company;
}(recordObject_model_1.RecordObject));
exports.Company = Company;
//# sourceMappingURL=company-model.js.map

/***/ }),

/***/ "../../../../../src/app/models/company-permisions.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by sevcik on 7/14/17.
 */
//TODO: change names in api
var CompanyPermissions = (function () {
    function CompanyPermissions() {
        this.sendEmail = false;
        this.pay = false;
        this.cancel = false;
        this.generatePdf = false;
    }
    return CompanyPermissions;
}());
exports.CompanyPermissions = CompanyPermissions;
//# sourceMappingURL=company-permisions.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/contact.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var recordObject_model_1 = __webpack_require__("../../../../../src/app/models/recordObject.model.ts");
/**
 * Created by a619678 on 23. 6. 2017.
 */
var Contact = (function (_super) {
    __extends(Contact, _super);
    function Contact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Contact;
}(recordObject_model_1.RecordObject));
exports.Contact = Contact;
//# sourceMappingURL=contact.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/file.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UploadFileInfo = (function () {
    function UploadFileInfo() {
    }
    return UploadFileInfo;
}());
exports.UploadFileInfo = UploadFileInfo;
//# sourceMappingURL=file.js.map

/***/ }),

/***/ "../../../../../src/app/models/message.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    function Message(data) {
        if (data === void 0) { data = {}; }
        this.content = data.content || '';
        this.title = data.title || '';
        this.author = data.author || null;
        this.destination = data.destination || null;
        this.date = data.date || Date.now();
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.js.map

/***/ }),

/***/ "../../../../../src/app/models/orderFiles.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OrderFiles = (function () {
    function OrderFiles() {
    }
    return OrderFiles;
}());
exports.OrderFiles = OrderFiles;
//# sourceMappingURL=orderFiles.js.map

/***/ }),

/***/ "../../../../../src/app/models/paginationMetadata.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by sevcik on 10/10/17.
 */
var PaginationMetadata = (function () {
    function PaginationMetadata() {
        this.totalItems = 0;
    }
    return PaginationMetadata;
}());
exports.PaginationMetadata = PaginationMetadata;
//# sourceMappingURL=paginationMetadata.js.map

/***/ }),

/***/ "../../../../../src/app/models/recordObject.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by a619678 on 23. 6. 2017.
 */
var RecordObject = (function () {
    function RecordObject() {
    }
    return RecordObject;
}());
exports.RecordObject = RecordObject;
//# sourceMappingURL=recordObject.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(data) {
        if (data === void 0) { data = {}; }
        this.connected = false;
        this.id = data.id || '';
        this.username = data.username || '';
        this.firstname = data.firstname || '';
        this.lastname = data.lastname || '';
        this.email = data.email || '';
        this.avatarUrl = data.avatarUrl || '';
        this.creationDate = data.creation_date || Date.now();
        this.preferredLang = data.preferredLang || null;
        this.connected = data.connected || false;
        this.role = data.roles || '';
        this.name = data.name || '';
        this.surname = data.surname || '';
    }
    User.prototype.getName = function () {
        return this.firstname + ' ' + this.lastname;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table tr td, table tr th{\n    width:10px;\n    height:10px;\n    border: solid 1px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    home works!\n\n    <alert type=\"info\">Hello from ng2-bootstrap {{\n        date.toDateString() }}\n    </alert>\n\n    <datepicker [(ngModel)]=\"date\" showWeeks=\"true\"></datepicker>\n</p>"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var breadcrumb_service_1 = __webpack_require__("../../../../../src/app/services/breadcrumb.service.ts");
var message_1 = __webpack_require__("../../../../../src/app/models/message.ts");
var messages_service_1 = __webpack_require__("../../../../../src/app/services/messages.service.ts");
var user_1 = __webpack_require__("../../../../../src/app/models/user.ts");
var HomeComponent = (function () {
    function HomeComponent(msgServ, breadServ) {
        this.msgServ = msgServ;
        this.breadServ = breadServ;
        this.date = new Date();
        this.test = new Array(400);
        // TODO
    }
    HomeComponent.prototype.ngOnInit = function () {
        // setttings the header for the home
        this.breadServ.set({
            description: 'HomePage',
            display: true,
            header: 'Dashboard',
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: 'Home'
                }
            ]
        });
        // defining some test users
        var user1 = new user_1.User({
            avatarUrl: 'public/assets/img/user2-160x160.jpg',
            email: 'weber.antoine.pro@gmail.com',
            firstname: 'WEBER',
            lastname: 'Antoine'
        });
        var user2 = new user_1.User({
            avatarUrl: 'public/assets/img/user2-160x160.jpg',
            email: 'EMAIL',
            firstname: 'FIRSTNAME',
            lastname: 'LASTNAME'
        });
        // sending a test message
        this.msgServ.addMessage(new message_1.Message({
            author: user2,
            content: 'le contenu d\'un message d\'une importance extreme',
            destination: user1,
            title: 'un message super important'
        }));
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // removing the header
        this.breadServ.clear();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.css")],
        template: __webpack_require__("../../../../../src/app/pages/home/home.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof messages_service_1.MessagesService !== "undefined" && messages_service_1.MessagesService) === "function" && _a || Object, typeof (_b = typeof breadcrumb_service_1.BreadcrumbService !== "undefined" && breadcrumb_service_1.BreadcrumbService) === "function" && _b || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".products{\n    margin-top:10px;\n}\n\n.remove-mark{\n    float:right;\n    cursor:pointer;\n}\n\n.remove-mark:hover{\n    color:red;\n}\n\n.dropdown-menu li{\n    cursor:pointer;\n}\n\n.action {\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.checks {\n    padding-left: 15px;\n}\n\n.message {\n    font-size: 14px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.message .highlight {\n    font-weight: bold;\n}\n\n.product-input {\n    display:block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice-create.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(invoiceForm)\" [formGroup]=\"invoiceForm\">\n    <div class=\"form-group\">\n        <label for=\"invoiceId\">Faktúra číslo:</label>\n        <input type=\"number\" id=\"invoiceId\" class=\"form-control\" formControlName=\"invoiceNumber\"/>\n    </div>\n\n    <div class=\"form-group\">\n        <!--<div formGroupName=\"companyContact\">-->\n\n        <div class=\"dropdown center-block\">\n            <i>Firma:</i>\n            <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n                {{currentCompany?.name || 'Vyberte firmu'}}\n                <span class=\"caret\"></span></button>\n            <ul class=\"dropdown-menu animated-dropdown-menu\">\n                <li *ngFor=\"let company of companies\">\n                    <a (click)=\"selectCompany(company)\">{{company.name}}</a>\n                </li>\n            </ul>\n        </div>\n\n        <div *ngIf=\"isCompanyTaxPayer\" class=\"col-lg-12 form-group\">\n            <label for=\"tax\">Dan:</label>\n            <input type=\"text\" id=\"tax\" class=\"form-control\" formControlName=\"tax\"/>\n        </div>\n\n        <div formGroupName=\"companyContact\">\n\n            <div class=\"col-lg-6 form-group\">\n                <label for=\"mainContactName\">Meno:</label>\n                <input type=\"text\" id=\"mainContactName\" class=\"form-control\" formControlName=\"name\"/>\n            </div>\n\n            <div class=\"col-lg-6 form-group\">\n                <label for=\"mainContactSurname\">Priezvisko:</label>\n                <input type=\"text\" id=\"mainContactSurname\" class=\"form-control\" formControlName=\"surname\"\n                />\n            </div>\n\n            <div class=\"col-lg-6 form-group\">\n                <label for=\"postcode\">Poštové smerovacie číslo:</label>\n                <input type=\"text\" id=\"postcode\" class=\"form-control\" formControlName=\"postcode\"/>\n            </div>\n\n            <div class=\"col-lg-6 form-group\">\n                <label for=\"telephone\">Telefón:</label>\n                <input type=\"text\" id=\"telephone\" class=\"form-control\" formControlName=\"telephone\"/>\n            </div>\n\n            <div class=\"col-lg-6 form-group\">\n                <label for=\"country\">Krajina:</label>\n                <input type=\"text\" id=\"country\" class=\"form-control\" formControlName=\"country\"/>\n            </div>\n\n            <div class=\"col-lg-6 form-group\">\n                <label for=\"companyAccount\">Číslo účtu:</label>\n                <input type=\"text\" id=\"companyAccount\" class=\"form-control\" formControlName=\"accountNumber\"\n                />\n            </div>\n\n            <div class=\"col-lg-6 form-group\">\n                <label for=\"iban\">IBAN:</label>\n                <input type=\"text\" id=\"iban\" class=\"form-control\" formControlName=\"iban\"/>\n            </div>\n\n            <div class=\"col-lg-6 form-group\">\n                <label for=\"swift\">SWIFT:</label>\n                <input type=\"text\" id=\"swift\" class=\"form-control\" formControlName=\"swift\"/>\n            </div>\n\n            <div class=\"col-lg-6 form-group\">\n                <label for=\"street\">Ulica:</label>\n                <input type=\"text\" id=\"street\" class=\"form-control\" formControlName=\"street\"/>\n            </div>\n\n            <div class=\"col-lg-6 form-group\">\n                <label for=\"city\">Mesto:</label>\n                <input type=\"text\" id=\"city\" class=\"form-control\" formControlName=\"city\"/>\n            </div>\n\n            <div class=\"col-lg-6 form-group\">\n                <label for=\"companyEmail\">Email:</label>\n                <input type=\"text\" id=\"companyEmail\" class=\"form-control\" formControlName=\"email\" email/>\n            </div>\n            <!--</div>-->\n        </div>\n\n\n        <div class=\"row\">\n\n        </div>\n\n\n        <div formGroupName=\"customer\">\n\n            <h3>Klient</h3>\n\n            <i>Líši sa fakturačná adresa od dodacej?</i>\n            <input type=\"checkbox\" (click)=\"switchInvoiceContact()\">\n\n            <div class=\"row checks\">\n                <label class=\"md-check\">\n                    <input type=\"radio\" [checked]=\"type == 'person'\" (click)=\"setType('person')\" value=\"person\"\n                           name=\"type\">\n                    Fyzická osoba\n                </label>\n\n                <label class=\"md-check\">\n                    <input type=\"radio\" [checked]=\"type == 'company'\" (click)=\"setType('company')\" value=\"company\"\n                           name=\"type\">\n                    Firma\n                </label>\n            </div>\n\n            <div *ngIf=\"type == 'company'\">\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"ico\">ICO:</label>\n                    <input type=\"text\" id=\"ico\" class=\"form-control\" formControlName=\"ico\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"dic\">DIC:</label>\n                    <input type=\"text\" id=\"dic\" class=\"form-control\" formControlName=\"dic\"/>\n                </div>\n\n                <div class=\"col-lg-12 form-group\">\n                    <label for=\"icDph\">IcDPH:</label>\n                    <input type=\"text\" id=\"icDph\" class=\"form-control\" formControlName=\"icDph\"/>\n                </div>\n\n            </div>\n            <div formGroupName=\"mainContact\">\n\n\n                <div class=\"form-group\">\n                    <label for=\"customerEmail\">Email<span tooltip=\"Vyhľadávanie podľa mena, priezviska, emailu.\">\n                            (Vyhľadávanie)</span>:</label>\n                    <input type=\"text\" id=\"customerEmail\" class=\"form-control\" formControlName=\"email\" email/>\n\n                    <ng-container *ngIf=\"userFoundByMail\">\n                        <div class=\"message\">\n                            Bude pouzity existujuci uzivatel: <span class=\"highlight\"> {{userFoundByMail.mainContact.name}} {{userFoundByMail.mainContact.surname}} </span>\n                            <span class=\"glyphicon glyphicon-remove-sign\" (click)=\"resetFoundCustomer()\"></span>\n                        </div>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"foundByMail\">\n                        <div class=\"dropdown open\">\n                            <ul class=\"dropdown-menu\">\n                                <li class=\"dropdown-item\" *ngFor=\"let customerEmail of foundCustomers\"\n                                    (click)=\"selectCustomer(customerEmail)\">\n                                    <a>{{customerEmail.mainContact.name}} {{customerEmail.mainContact.surname}}\n                                        [{{customerEmail.mainContact.email}}]</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </ng-container>\n\n\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"customerName\">Meno:</label>\n                    <input type=\"text\" id=\"customerName\" class=\"form-control\" formControlName=\"name\" required/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"customerSurname\">Priezvisko:</label>\n                    <input type=\"text\" id=\"customerSurname\" class=\"form-control\" formControlName=\"surname\"\n                    />\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"customerPostcode\">Poštové smerovacie číslo:</label>\n                    <input type=\"text\" id=\"customerPostcode\" class=\"form-control\" formControlName=\"postcode\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"customerTelephone\">Telefón:</label>\n                    <input type=\"text\" id=\"customerTelephone\" class=\"form-control\" formControlName=\"telephone\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"customerCountry\">Krajina:</label>\n                    <input type=\"text\" id=\"customerCountry\" class=\"form-control\" formControlName=\"country\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"customerAccount\">Číslo účtu:</label>\n                    <input type=\"text\" id=\"customerAccount\" class=\"form-control\" formControlName=\"accountNumber\"\n                    />\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"customerIban\">IBAN:</label>\n                    <input type=\"text\" id=\"customerIban\" class=\"form-control\" formControlName=\"iban\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"customerSwift\">SWIFT:</label>\n                    <input type=\"text\" id=\"customerSwift\" class=\"form-control\" formControlName=\"swift\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"customerStreet\">Ulica:</label>\n                    <input type=\"text\" id=\"customerStreet\" class=\"form-control\" formControlName=\"street\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"customerCity\">Mesto:</label>\n                    <input type=\"text\" id=\"customerCity\" class=\"form-control\" formControlName=\"city\"/>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n            </div>\n\n            <ng-container *ngIf=\"invoiceContact\">\n\n                <div formGroupName=\"invoiceContact\">\n                    <h3>Adresa dorucenia</h3>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"invoice_customerName\">Meno:</label>\n                        <input type=\"text\" id=\"invoice_customerName\" class=\"form-control\" formControlName=\"name\"/>\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"invoice_customerSurname\">Priezvisko:</label>\n                        <input type=\"text\" id=\"invoice_customerSurname\" class=\"form-control\"\n                               formControlName=\"surname\"\n                        />\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"invoice_customerPostcode\">Poštové smerovacie číslo:</label>\n                        <input type=\"text\" id=\"invoice_customerPostcode\" class=\"form-control\"\n                               formControlName=\"postcode\"/>\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"invoice_customerTelephone\">Telefón:</label>\n                        <input type=\"text\" id=\"invoice_customerTelephone\" class=\"form-control\"\n                               formControlName=\"telephone\"/>\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"invoice_customerCountry\">Krajina:</label>\n                        <input type=\"text\" id=\"invoice_customerCountry\" class=\"form-control\"\n                               formControlName=\"country\"/>\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"invoice_customerStreet\">Ulica:</label>\n                        <input type=\"text\" id=\"invoice_customerStreet\" class=\"form-control\"\n                               formControlName=\"street\"/>\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"invoice_customerCity\">Mesto:</label>\n                        <input type=\"text\" id=\"invoice_customerCity\" class=\"form-control\" formControlName=\"city\"/>\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"invoice_customerEmail\">Email:</label>\n                        <input type=\"text\" id=\"invoice_customerEmail\" class=\"form-control\" formControlName=\"email\"\n                               email/>\n                    </div>\n                    <div class=\"col-lg-6\">\n\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n        <button type=\"button\" class=\"btn btn-warning btn-block\" (click)=\"addProduct()\">Pridaj produkt</button>\n\n        <fieldset formArrayName=\"invoiceItems\">\n\n            <div class=\"well products\" *ngFor=\"let product of invoiceItems.controls; let j=index\"\n                 [formGroupName]=\"j\">\n\n                <div class=\"row\">\n                    <span class=\"remove-mark\" (click)=\"removeProduct(j)\">X</span>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12 form-group\">\n                        <label for=\"product\">Produkt:</label>\n                        <p-autoComplete class=\"product-input\" id='product' formControlName=\"newItem\" [suggestions]=\"results\"\n                                        (completeMethod)=\"search($event)\"></p-autoComplete>\n                    </div>\n\n                    <div class=\"col-lg-4 col-md-4 form-group\">\n                        <label for=\"valueL\">Hodnota:</label>\n                        <input type=\"number\" id=\"valueL\" class=\"form-control\" formControlName=\"price\"/>\n                    </div>\n\n                    <div class=\"col-lg-4 col-md-4 form-group\">\n                        <label for=\"unit\">Typ množstva:</label>\n                        <input type=\"text\" id=\"unit\" class=\"form-control\" formControlName=\"unit\"/>\n                    </div>\n\n                    <div class=\"col-lg-4 col-md-4 form-group\">\n                        <label for=\"count\">Množstvo:</label>\n                        <input type=\"number\" id=\"count\" class=\"form-control\" formControlName=\"count\"/>\n                    </div>\n                </div>\n\n            </div>\n        </fieldset>\n\n        <div class=\"row\">\n            <div class=\"col-lg-2\">\n                <p>Celková suma:</p>\n            </div>\n            <div class=\"col-lg-1\">\n                <i>{{getPrice()}}</i>\n            </div>\n        </div>\n\n        <div class=\"action\">\n            <button md-button mdStepperPrevious class=\"btn btn-warning\" type=\"button\">Spat</button>\n            <button [disabled]=\"!invoiceForm.valid\" md-button mdStepperNext class=\"btn btn-success\" type=\"submit\">\n                Dalej\n            </button>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice-create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by a619678 on 23. 5. 2017.
 */
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var invoice_service_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/pages/users/user.service.ts");
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var user_service_2 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var configuration_service_1 = __webpack_require__("../../../../../src/app/services/configuration.service.ts");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var invoice_model_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.model.ts");
var InvoiceCreation = (function () {
    function InvoiceCreation(fb, invoiceSrv, userSrv, notificationSrv, loggedUserService, configurationService, restServ, loginServ) {
        var _this = this;
        this.fb = fb;
        this.invoiceSrv = invoiceSrv;
        this.userSrv = userSrv;
        this.notificationSrv = notificationSrv;
        this.loggedUserService = loggedUserService;
        this.configurationService = configurationService;
        this.restServ = restServ;
        this.loginServ = loginServ;
        this.createEmitter = new core_1.EventEmitter();
        this.clientFormControlls = new Array();
        this.fixedInputs = new Array();
        this.priceProducts = new Array();
        this.lockChange = false;
        this.invoiceContact = false;
        this.type = "person";
        this.foundByMail = false;
        this.units = ["ks", "liter"];
        this.showModal = false;
        this.wasPatched = false;
        this.results = [];
        this.createForm();
        //if the company is changed in the service, it is emmited here
        configurationService.currentCompany.subscribe(function (currentCompany) {
            _this.currentCompany = currentCompany;
            if (currentCompany.mainContact) {
                _this.invoiceForm.get('companyContact')
                    .patchValue(currentCompany.mainContact);
            }
            _this.invoiceForm.get('company').setValue(currentCompany.id);
        });
        restServ.getCompanies().subscribe(function (companies) {
            _this.companies = companies;
        }, function (error) {
            if (error.status === 401) {
                _this.loginServ.logout();
            }
        });
        restServ.getItems().subscribe(function (products) { return _this.products = products; });
    }
    InvoiceCreation.prototype.ngOnChanges = function (changes) {
        console.log(changes.invoice);
        this.setFormValues();
    };
    InvoiceCreation.prototype.ngOnInit = function () {
        this.invoiceForm.reset();
        this.createForm();
    };
    InvoiceCreation.prototype.selectCustomer = function (customer) {
        this.userFoundByMail = customer;
        this.lockChange = true;
        this.setClientInfo();
        this.lockChange = false;
    };
    InvoiceCreation.prototype.resetFoundCustomer = function () {
        this.userFoundByMail = null;
    };
    InvoiceCreation.prototype.search = function ($event) {
        this.results = this.products.filter(function (product) {
            return product.name.indexOf($event.query) > -1;
        })
            .map(function (result) { return result.name; });
        console.log($event.query);
        console.log(this.results);
    };
    InvoiceCreation.prototype.createForm = function () {
        var _this = this;
        var disabledEmpty = { value: '', disabled: false };
        this.invoiceForm = this.fb.group({
            'company': [''],
            'companyContact': this.fb.group({
                'name': [disabledEmpty, forms_1.Validators.required],
                'surname': [disabledEmpty, forms_1.Validators.required],
                'postcode': [disabledEmpty, forms_1.Validators.required],
                'telephone': [disabledEmpty, forms_1.Validators.required],
                'country': [disabledEmpty, forms_1.Validators.required],
                'accountNumber': [disabledEmpty],
                'email': [disabledEmpty, forms_1.Validators.required],
                'street': [disabledEmpty, forms_1.Validators.required],
                'city': [disabledEmpty, forms_1.Validators.required],
                'iban': [disabledEmpty],
                'swift': [disabledEmpty]
            }),
            "invoiceNumber": [{ value: this.invoiceSrv.generateInvoiceId() }, forms_1.Validators.required],
            'customerId': [disabledEmpty],
            'customer': this.fb.group({
                'ico': [disabledEmpty],
                'dic': [disabledEmpty],
                'icDph': [disabledEmpty],
                'mainContact': this.fb.group({
                    'name': ['', forms_1.Validators.required],
                    'surname': ['', forms_1.Validators.required],
                    'postcode': ['', forms_1.Validators.required],
                    'telephone': ['', forms_1.Validators.required],
                    'country': ['', forms_1.Validators.required],
                    'accountNumber': [''],
                    'email': ['', forms_1.Validators.required],
                    'street': ['', forms_1.Validators.required],
                    'city': ['', forms_1.Validators.required],
                    'iban': [''],
                    'swift': ['']
                }),
                'invoiceContact': this.fb.group({
                    'name': [disabledEmpty],
                    'surname': [disabledEmpty],
                    'postcode': [disabledEmpty],
                    'telephone': [disabledEmpty],
                    'country': [disabledEmpty],
                    'accountNumber': [disabledEmpty],
                    'email': [disabledEmpty],
                    'street': [disabledEmpty],
                    'city': [disabledEmpty],
                    'iban': [disabledEmpty],
                    'swift': [disabledEmpty]
                }),
            }),
            'tax': ['20', forms_1.Validators.required],
            'invoiceItems': this.fb.array([])
        });
        this.clientFormControlls.push(this.invoiceForm.get('customer')
            .get('mainContact').get('name'));
        this.clientFormControlls.push(this.invoiceForm.get('customer')
            .get('mainContact').get('surname'));
        this.clientFormControlls.push(this.invoiceForm.get('customer')
            .get('mainContact').get('telephone'));
        this.invoiceForm.get('customer').get('mainContact').get('email')
            .valueChanges
            .filter(function (value) {
            if (value && value.length > 1 && !_this.lockChange) {
                _this.disableCustomerInputs();
                return true;
            }
            else {
                _this.foundByMail = false;
                return false;
            }
        })
            .debounceTime(200)
            .subscribe(function (value) {
            console.log('search');
            _this.restServ.getCustomers().subscribe(function (users) {
                _this.foundCustomers = _this.restServ.getCustomersByEmail(value, users);
                if (_this.foundCustomers.length > 0 && !_this.wasPatched) {
                    _this.foundByMail = true;
                    _this.userFoundByMail = null;
                }
                else {
                    _this.foundByMail = false;
                    _this.wasPatched = false;
                }
            });
        });
    };
    Object.defineProperty(InvoiceCreation.prototype, "invoiceItems", {
        get: function () {
            return this.invoiceForm.get('invoiceItems');
        },
        enumerable: true,
        configurable: true
    });
    InvoiceCreation.prototype.disableFixedInputs = function () {
        console.log(this.fixedInputs);
        for (var _i = 0, _a = this.fixedInputs; _i < _a.length; _i++) {
            var input = _a[_i];
            input.disable();
        }
    };
    InvoiceCreation.prototype.enableFixedInputs = function () {
        for (var _i = 0, _a = this.fixedInputs; _i < _a.length; _i++) {
            var input = _a[_i];
            input.enable();
        }
    };
    Object.defineProperty(InvoiceCreation.prototype, "isCompanyTaxPayer", {
        get: function () {
            if (this.currentCompany) {
                return this.currentCompany.vatPayer;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    InvoiceCreation.prototype.getPrice = function () {
        var sum = 0;
        for (var _i = 0, _a = this.priceProducts; _i < _a.length; _i++) {
            var price = _a[_i];
            sum += Number(price.price.value) * Number(price.count.value);
        }
        return sum;
    };
    InvoiceCreation.prototype.addProduct = function () {
        var product = this.fb.group({
            'newItem': ['', forms_1.Validators.required],
            'price': ['', forms_1.Validators.required],
            'unit': ['ks', forms_1.Validators.required],
            'count': ['', forms_1.Validators.required],
            'contractor': [''],
            'parcel': ['']
        });
        this.invoiceItems.push(product);
        this.priceProducts.push({ price: product.get('price'), count: product.get('count') });
    };
    InvoiceCreation.prototype.disableCustomerInputs = function () {
        for (var _i = 0, _a = this.clientFormControlls; _i < _a.length; _i++) {
            var clientFormControll = _a[_i];
            // clientFormControll.disable();
        }
    };
    InvoiceCreation.prototype.enableCustomerInputs = function () {
        for (var _i = 0, _a = this.clientFormControlls; _i < _a.length; _i++) {
            var clientFormControll = _a[_i];
            // clientFormControll.enable();
        }
    };
    InvoiceCreation.prototype.setClientInfo = function () {
        this.invoiceForm.get('customer')
            .patchValue(this.userFoundByMail);
    };
    InvoiceCreation.prototype.resetClientInfo = function () {
        this.invoiceForm.get('customer').get('mainContact')
            .reset();
    };
    InvoiceCreation.prototype.removeProduct = function (index) {
        this.invoiceItems.removeAt(index);
        this.priceProducts.splice(index, 1);
    };
    InvoiceCreation.prototype.setType = function (type) {
        this.type = type;
    };
    InvoiceCreation.prototype.selectCompany = function (company) {
        var _this = this;
        this.configurationService.setCurrentCompany(company);
        this.restServ.getNextInvoiceNumber(company.id).subscribe(function (result) {
            _this.invoiceForm.get('invoiceNumber').setValue(result.nextInvoiceNumber);
        }, function (error) { return console.log(error); });
    };
    InvoiceCreation.prototype.onSubmit = function (_a) {
        var value = _a.value;
        if (this.userFoundByMail) {
            value.customerId = this.userFoundByMail.id;
        }
        if (this.invoice) {
            value.order = this.invoice.order;
        }
        this.invoice = value;
        if (value.invoiceContact) {
            delete value.invoiceContact.id;
        }
        if (!this.isCompanyTaxPayer) {
            console.log('deleting tax');
            delete value.tax;
        }
        this.createEmitter.next(value);
    };
    InvoiceCreation.prototype.setFormValues = function () {
        if (this.invoiceItems.length < this.invoice.invoiceItems.length) {
            for (var _i = 0, _a = this.invoice.invoiceItems; _i < _a.length; _i++) {
                var item = _a[_i];
                this.addProduct();
            }
        }
        this.invoiceForm.patchValue(this.invoice);
        this.wasPatched = true;
    };
    InvoiceCreation.prototype.switchInvoiceContact = function () {
        this.invoiceContact = !this.invoiceContact;
        console.log(this.invoiceContact);
    };
    return InvoiceCreation;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], InvoiceCreation.prototype, "createEmitter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof invoice_model_1.Invoice !== "undefined" && invoice_model_1.Invoice) === "function" && _a || Object)
], InvoiceCreation.prototype, "invoice", void 0);
InvoiceCreation = __decorate([
    core_1.Component({
        selector: 'invoice-creation',
        styles: [__webpack_require__("../../../../../src/app/pages/invoice/invoice-create.component.css")],
        template: __webpack_require__("../../../../../src/app/pages/invoice/invoice-create.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof invoice_service_1.InvoiceService !== "undefined" && invoice_service_1.InvoiceService) === "function" && _c || Object, typeof (_d = typeof user_service_1.CustomerService !== "undefined" && user_service_1.CustomerService) === "function" && _d || Object, typeof (_e = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _e || Object, typeof (_f = typeof user_service_2.UserService !== "undefined" && user_service_2.UserService) === "function" && _f || Object, typeof (_g = typeof configuration_service_1.ConfigurationService !== "undefined" && configuration_service_1.ConfigurationService) === "function" && _g || Object, typeof (_h = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _h || Object, typeof (_j = typeof user_service_2.UserService !== "undefined" && user_service_2.UserService) === "function" && _j || Object])
], InvoiceCreation);
exports.InvoiceCreation = InvoiceCreation;
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=invoice-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".products h4{\n    font-weight: bold;\n}\n\n.title{\n    font-weight: bold;\n}\n\n.glyphicon-eye-open {\n    font-size: 24px;\n}\n\n.document {\n    margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar [height]=\"'8px'\"></ng2-slim-loading-bar>\n<ng-container *ngIf=\"permissionLoaded\">\n    <h2>Faktúra {{invoice.invoiceNumber}}</h2>\n\n    <h4>\n        <span class=\"label\" [ngClass]=\"getStatusMessage(invoice?.status).label\">\n\t\t{{getStatusMessage(invoice?.status).text}}\n        </span>\n    </h4>\n\n    <p-splitButton label=\"Vyber akciu\" icon=\"fa-check\" [model]=\"invoiceActions\"></p-splitButton>\n\n    <h3>Klient:</h3>\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <div class=\"col-lg-6\">\n                <i>Meno: </i><a *ngIf=\"invoice.customerId; else noLink\" [routerLink]=\"[ '/user/', invoice?.customerId?.id ]\">\n                {{invoice.customer.mainContact.name}} {{invoice.customer.mainContact.surname}} </a>\n                <ng-template #noLink>{{invoice.customer.mainContact.name}} {{invoice.customer.mainContact.surname}}</ng-template>\n            </div>\n            <div class=\"col-lg-6\">\n                <i>Mail: </i><a [href]=\"'mailto:'+ invoice?.customer?.mainContact.email\">{{invoice?.customer?.mainContact.email}}</a>\n            </div>\n            <div class=\"col-lg-6\">\n                <i>Telefón: </i>{{invoice?.customer?.mainContact.telephone}}\n            </div>\n        </div>\n    </div>\n\n    <h3>Produkty:</h3>\n    <div class=\"products well well-sm\" *ngFor=\"let product of invoice?.invoiceItems\">\n        <h4>{{product.item.name}}</h4>\n        <div>\n            <i>Cena: </i><span>{{product.price}}</span>\n        </div>\n        <div>\n            <i>Pocet: </i><span>{{product.count}}</span>\n        </div>\n        <div>\n            <i>Investor: </i><span>{{product.contractor}}</span>\n        </div>\n        <div>\n            <i>Parcela: </i><span>{{product.parcel}}</span>\n        </div>\n    </div>\n\n    <h4>Cena:</h4>\n    <i>{{price | currency:'EUR':false}}</i>\n\n    <ng-container *ngIf=\"pdfSafeLink\">\n        <iframe class=\"document\" [src]=\"pdfSafeLink\" type=\"application/pdf\" height=\"500px\" width=\"100%\"\n                webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n    </ng-container>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by a619678 on 7. 6. 2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var invoiceStatus_model_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoiceStatus.model.ts");
var invoice_service_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.service.ts");
var company_permisions_model_1 = __webpack_require__("../../../../../src/app/models/company-permisions.model.ts");
var ng2_slim_loading_bar_1 = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var InvoiceDetailComponent = (function () {
    function InvoiceDetailComponent(activatedRoute, router, invoiceSrv, loadingBar, notificationSrv, loginServ, _restServ, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.invoiceSrv = invoiceSrv;
        this.loadingBar = loadingBar;
        this.notificationSrv = notificationSrv;
        this.loginServ = loginServ;
        this._restServ = _restServ;
        this.sanitizer = sanitizer;
        this.permissions = new company_permisions_model_1.CompanyPermissions();
        this.permissionLoaded = false;
        this.invoiceActions = new Array();
    }
    InvoiceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.invoice = data['invoice'];
            Observable_1.Observable.forkJoin(_this.invoiceSrv.getPermissions(_this.invoice.id), _this.callMethod$(_this.invoice.actions.base64File.href, _this.invoice.actions.base64File.methods[0])).subscribe(function (results) {
                var result = results[0], base64image = results[1];
                _this.permissions = result;
                _this.permissionLoaded = true;
                _this.invoiceActions = new Array();
                _this.base64image = base64image;
                _this.downloadPDF();
                _this.setUpActions();
            }, function (error) {
                if (error.status === 401) {
                    _this.loginServ.logout();
                }
            });
        });
    };
    InvoiceDetailComponent.prototype.setUpActions = function () {
        var _this = this;
        this.invoiceActions = [];
        if (this.invoice.actions.generatePdf) {
            this.invoiceActions.push({
                label: 'Vygeneruj PDF', icon: 'fa-rotate-left', command: function () {
                    _this.callMethod(_this.invoice.actions.generatePdf.href, _this.invoice.actions.generatePdf.methods[0]);
                }
            });
        }
        if (this.invoice.actions.cancelInvoice) {
            this.invoiceActions.push({
                label: 'Storno', icon: 'fa-close', command: function () {
                    _this.callMethod(_this.invoice.actions.cancelInvoice.href, _this.invoice.actions.cancelInvoice.methods[0]);
                }
            });
        }
        if (this.invoice.actions.sendEmail) {
            this.invoiceActions.push({
                label: 'Preposli notifikacny mail', icon: 'fa-mail-forward', command: function () {
                    _this.callMethod(_this.invoice.actions.sendEmail.href, _this.invoice.actions.sendEmail.methods[0]);
                }
            });
        }
        if (this.invoice.actions.payInvoice) {
            this.invoiceActions.push({
                label: 'Faktura bola uhradena', icon: 'fa-check', command: function () {
                    _this.callMethod(_this.invoice.actions.payInvoice.href, _this.invoice.actions.sendEmail.methods[0]);
                }
            });
        }
        if (this.invoice.actions.downloadFile) {
            this.invoiceActions.push({
                label: 'Pdf', icon: 'fa-download', command: function () {
                    window.location.href = _this.pdfLink;
                }
            });
        }
    };
    InvoiceDetailComponent.prototype.callMethod$ = function (link, method) {
        if (method === "GET") {
            return this._restServ.get(link);
        }
        else {
            return this._restServ.post(link);
        }
    };
    InvoiceDetailComponent.prototype.callMethod = function (link, method) {
        var _this = this;
        this.callMethod$(link, method).subscribe(function (result) {
            _this.invoiceSrv.getInvoice(_this.invoice.id).subscribe(function (invoiceResult) {
                _this.invoice = invoiceResult;
                _this.setUpActions();
            });
            _this.notificationSrv.success('akcia bola uspesne ukoncena', 'akcia');
        }, function (error) {
            _this.notificationSrv.error('akcia nebola uspesne ukoncena', 'akcia');
        });
    };
    InvoiceDetailComponent.prototype.getStatusMessage = function (status) {
        if (!status)
            status = "created";
        return invoiceStatus_model_1.getTranslation(status);
    };
    InvoiceDetailComponent.prototype.getHtmlLink = function () {
        return this.invoiceSrv.generateHtmlLink(this.invoice);
    };
    InvoiceDetailComponent.prototype.generatePdf = function () {
        this.downloadPDF();
    };
    InvoiceDetailComponent.prototype.sentNotificationEmail = function () {
        var _this = this;
        this.loadingBar.start(function () {
        });
        this.invoiceSrv.sendEmailForInvoice(this.invoice).subscribe(function (result) {
            _this.notificationSrv.success("Email bol úspešne odoslaný", "Email");
            _this.loadingBar.complete();
        }, function (error) {
            _this.notificationSrv.error("Nastala chyba pri odosielaní emailu", "Email");
            _this.loadingBar.complete();
            console.log(error);
        });
    };
    InvoiceDetailComponent.prototype.payInvoice = function () {
        var _this = this;
        this.loadingBar.start(function () {
        });
        this.invoiceSrv.payInvoice(this.invoice).subscribe(function (result) {
            _this.notificationSrv.success("Stav objednávky bola zmenená na zaplatenú", "Faktúra");
            _this.loadingBar.complete();
            _this.invoice = result;
        }, function (error) {
            _this.notificationSrv.error("Chyba pri zmene stavu objednávky", "Faktúra");
            _this.loadingBar.complete();
            console.log(error);
        });
    };
    InvoiceDetailComponent.prototype.stornoInvoice = function () {
        var _this = this;
        if (window.confirm('Faktura bude stornovana ')) {
            this.invoiceSrv.storno(this.invoice).subscribe(function (result) {
                _this.notificationSrv.success("Stav objednávky bola zmenená na stornovanú", "Faktúra");
                _this.loadingBar.complete();
                _this.invoice = result;
            }, function (error) {
                _this.notificationSrv.error("Chyba pri zmene stavu objednávky", "Faktúra");
                _this.loadingBar.complete();
                console.log(error);
            });
        }
    };
    InvoiceDetailComponent.prototype.downloadPDF = function () {
        var sliceSize = 512;
        var base64 = this.base64image.base64.replace('data:application/pdf;base64,', '');
        console.log(base64);
        var byteCharacters = atob(base64);
        var contentType = 'application/pdf';
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        console.log(byteArrays);
        var blob = new Blob(byteArrays, { type: contentType });
        var blobUrl = URL.createObjectURL(blob);
        this.pdfSafeLink = this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl);
        this.pdfLink = blobUrl;
    };
    Object.defineProperty(InvoiceDetailComponent.prototype, "price", {
        get: function () {
            var sum = 0;
            for (var _i = 0, _a = this.invoice.invoiceItems; _i < _a.length; _i++) {
                var item = _a[_i];
                sum += item.price * item.count;
            }
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    return InvoiceDetailComponent;
}());
InvoiceDetailComponent = __decorate([
    core_1.Component({
        selector: 'invoice-detail',
        styles: [__webpack_require__("../../../../../src/app/pages/invoice/invoice-detail.component.css")],
        template: __webpack_require__("../../../../../src/app/pages/invoice/invoice-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof invoice_service_1.InvoiceService !== "undefined" && invoice_service_1.InvoiceService) === "function" && _c || Object, typeof (_d = typeof ng2_slim_loading_bar_1.SlimLoadingBarService !== "undefined" && ng2_slim_loading_bar_1.SlimLoadingBarService) === "function" && _d || Object, typeof (_e = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _e || Object, typeof (_f = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _f || Object, typeof (_g = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _g || Object, typeof (_h = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _h || Object])
], InvoiceDetailComponent);
exports.InvoiceDetailComponent = InvoiceDetailComponent;
var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=invoice-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice-modal/invoice-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice-modal/invoice-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showModal\" [config]=\"{ show: true }\" class=\"modal fade\" bsModal\n     #staticModal=\"bs-modal\"\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Notifikačný mail</h4>\n\n        <div class=\"modal-body\">\n          <div class=\"dropdown center-block\">\n            <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n              {{selectedMailTemplate || 'Vyberte sablonu'}}\n              <span class=\"caret\"></span></button>\n            <ul class=\"dropdown-menu animated-dropdown-menu\">\n              <li *ngFor=\"let currentTemplate of templates\">\n                <a (click)=\"selectTemplate(currentTemplate)\">{{currentTemplate}}</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"mailText\">Text Notifikačného mailu:</label>\n            <input #mailText [(ngModel)]=\"selectedMailTemplate\" type=\"text\" id=\"mailText\"\n                   class=\"form-control\"/>\n          </div>\n\n          <button class=\"btn btn-default\" (click)=\"returnOrderToParent(staticModal, mailText)\">\n            Create\n          </button>\n          <button class=\"btn btn-danger\" type=\"button\" aria-label=\"Close\"\n                  (click)=\"returnOrderToParent(staticModal, null)\">\n            Zrusit\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice-modal/invoice-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var invoice_model_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.model.ts");
var ngx_bootstrap_1 = __webpack_require__("../../../../ngx-bootstrap/index.js");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var InvoiceModalComponent = (function () {
    function InvoiceModalComponent(restSrv) {
        var _this = this;
        this.restSrv = restSrv;
        this.proceedRequest = new core_1.EventEmitter();
        this.isModalShown = false;
        this.templates = ["Dakujeme za zkupenie produktu", "Nedakujeme za zakupenie produktu"];
        this.selectedMailTemplate = this.templates[0];
        this.restSrv.getEmails().subscribe(function (emails) {
            _this.templates = emails;
        });
    }
    InvoiceModalComponent.prototype.ngOnChanges = function (changes) {
        if (changes.showModal && this.showModal) {
            this.showModalWindow();
        }
    };
    InvoiceModalComponent.prototype.selectTemplate = function (template) {
        this.selectedMailTemplate = template;
    };
    InvoiceModalComponent.prototype.showModalWindow = function () {
        console.log("trying to show modal:");
        console.log(this.invoice);
        // this.isModalShown = true;
    };
    InvoiceModalComponent.prototype.returnOrderToParent = function (staticModal, mailText) {
        //this.order.invoice.emailText = mailText;
        this.invoice.emailText = this.selectedMailTemplate;
        if (mailText == null) {
            this.proceedRequest.next(null);
        }
        else {
            //staticModal.hide();
            // this.isModalShown = false;
            this.proceedRequest.next(this.invoice);
        }
    };
    InvoiceModalComponent.prototype.ngOnInit = function () {
    };
    return InvoiceModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InvoiceModalComponent.prototype, "showModal", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof invoice_model_1.Invoice !== "undefined" && invoice_model_1.Invoice) === "function" && _a || Object)
], InvoiceModalComponent.prototype, "invoice", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], InvoiceModalComponent.prototype, "proceedRequest", void 0);
__decorate([
    core_1.ViewChild('staticModal'),
    __metadata("design:type", typeof (_b = typeof ngx_bootstrap_1.ModalDirective !== "undefined" && ngx_bootstrap_1.ModalDirective) === "function" && _b || Object)
], InvoiceModalComponent.prototype, "autoShownModal", void 0);
InvoiceModalComponent = __decorate([
    core_1.Component({
        selector: 'app-invoice-modal',
        template: __webpack_require__("../../../../../src/app/pages/invoice/invoice-modal/invoice-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/invoice/invoice-modal/invoice-modal.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _c || Object])
], InvoiceModalComponent);
exports.InvoiceModalComponent = InvoiceModalComponent;
var _a, _b, _c;
//# sourceMappingURL=invoice-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice-resolve.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var invoice_service_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.service.ts");
/**
 * Created by a619678 on 23. 5. 2017.
 */
var InvoiceResolve = (function () {
    function InvoiceResolve(invoiceSrv) {
        this.invoiceSrv = invoiceSrv;
    }
    InvoiceResolve.prototype.resolve = function (route) {
        var invoiceId = route.params['invoiceNumber'];
        if (!invoiceId)
            return null;
        var invoice = this.invoiceSrv.getInvoice(invoiceId);
        return invoice;
    };
    return InvoiceResolve;
}());
InvoiceResolve = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof invoice_service_1.InvoiceService !== "undefined" && invoice_service_1.InvoiceService) === "function" && _a || Object])
], InvoiceResolve);
exports.InvoiceResolve = InvoiceResolve;
var _a;
//# sourceMappingURL=invoice-resolve.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "tr a{\n    cursor:pointer;\n}\n\n.sortable {\n    cursor:pointer;\n}\n\n.sortable:hover {\n    color:lightgray;\n}\n\n.glyphicon {\n    z-index:100;\n}\n\n.glyphicon.glyphicon-save {\n    float:right;\n}\n\ntd {\n    padding: 2px !important;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar [height]=\"'8px'\"></ng2-slim-loading-bar>\n<app-filter [type]=\"'Invoice'\" [page]=\"currentPage\" [pageSize]=\"pageSize\" [sort]=\"sort\"\n            [sortOrientation]=\"sortOrientation\" [filter]=\"filter\"\n            [filterType]=\"filterType\" (onUpdate)=\"update($event)\"></app-filter>\n<table *ngIf=\"showList\" class=\"table table-bordered table-responsive table-hover\">\n    <thead>Faktúry</thead>\n    <tbody>\n    <tr>\n        <th style=\"width: 10px\">#</th>\n        <th>Číslo</th>\n        <th>Zadal</th>\n        <th>Klient</th>\n        <th class=\"sortable\" (click)=\"orderBy('totalPrice')\">Suma</th>\n        <th>položky</th>\n        <th>Typ</th>\n        <th>Status</th>\n        <th>Odoslane</th>\n    </tr>\n\n    <tr *ngFor=\"let invoice of invoices\" [routerLink]=\"[ '/invoice/', invoice.id ]\">\n        <td>{{invoice.id}}</td>\n        <td>{{invoice.invoiceNumber}}</td>\n        <td><a>{{invoice.company.name}}</a></td>\n\n        <td><a *ngIf=\"invoice.customerId; else noLink\" [routerLink]=\"[ '/user/', invoice?.customerId?.id ]\">\n            {{invoice.customer.mainContact.name}} {{invoice.customer.mainContact.surname}}</a>\n            <ng-template #noLink>{{invoice.customer.mainContact.name}} {{invoice.customer.mainContact.surname}}</ng-template>\n        </td>\n        <td>{{invoice.totalPrice | currency:'eur':true}}</td>\n        <td>{{invoice?.invoiceItems?.length}}</td>\n        <td>{{invoiceTypes[invoice?.type-1]}}</td>\n        <td><span class=\"label\" [ngClass]=\"getStatusMessage(invoice?.status).label\">\n                {{getStatusMessage(invoice?.status).text}}\n                </span>\n        </td>\n        <td>{{invoice?.sendByEmail === true ? 'áno' : 'nie'}}</td>\n    </tr>\n    </tbody>\n</table>\n\n\n<div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-4\">\n        <pagination [totalItems]=\"totalSize\" [(ngModel)]=\"currentPage\" [maxSize]=\"pageSize\"\n                    class=\"pagination-sm\"\n                    [boundaryLinks]=\"true\" [rotate]=\"false\"\n                    (numPages)=\"numPages = $event\" (pageChanged)=\"pageChanged($event)\"></pagination>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var breadcrumb_service_1 = __webpack_require__("../../../../../src/app/services/breadcrumb.service.ts");
var messages_service_1 = __webpack_require__("../../../../../src/app/services/messages.service.ts");
var invoice_service_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var invoiceStatus_model_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoiceStatus.model.ts");
var ng2_slim_loading_bar_1 = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
var user_service_1 = __webpack_require__("../../../../../src/app/pages/users/user.service.ts");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var user_service_2 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var paginationMetadata_1 = __webpack_require__("../../../../../src/app/models/paginationMetadata.ts");
var InvoiceComponent = (function () {
    function InvoiceComponent(msgServ, breadServ, invoiceServ, customerServ, router, loadingBar, loginServ) {
        this.msgServ = msgServ;
        this.breadServ = breadServ;
        this.invoiceServ = invoiceServ;
        this.customerServ = customerServ;
        this.router = router;
        this.loadingBar = loadingBar;
        this.loginServ = loginServ;
        this.date = new Date();
        this.invoices = null;
        this.isFormCollapsed = true;
        this.currentPage = 1;
        this.pageSize = 10;
        /*
         Pagination parameters
         */
        this.paginationInfo = new paginationMetadata_1.PaginationMetadata();
        this.showList = true;
        this.invoiceTypes = ["Zálohová faktúra", "Doklad o prijati platby", "Faktura"];
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        // setttings the header for the home
        this.loadingBar.start(function () {
            console.log("complete");
        });
        //loading all invoices and all customers, so the customers are cached
        Observable_1.Observable.forkJoin(this.invoiceServ.getInvoices(this.currentPage, this.pageSize), this.customerServ.getCustomers()).subscribe(function (result) {
            console.log(result[0]);
            _this.invoices = result[0].data;
            _this.paginationInfo = result[0].meta;
            _this.customerServ.setCustomers(result[1]);
            _this.loadingBar.complete();
        }, function (error) {
            if (error.status === 401) {
                _this.loginServ.logout();
            }
        });
        this.breadServ.set({
            description: 'Faktury',
            display: true,
            header: 'Faktury',
            levels: [
                {
                    icon: 'invoices',
                    link: ['/invoices'],
                    title: 'Faktury'
                }
            ]
        });
    };
    InvoiceComponent.prototype.update = function (filteredInvoices) {
        if (filteredInvoices) {
            console.log(filteredInvoices);
            this.invoices = filteredInvoices.data;
            this.paginationInfo.totalItems = filteredInvoices.meta.totalItems;
        }
    };
    InvoiceComponent.prototype.getHtmlLink = function (invoice) {
        return this.invoiceServ.generateHtmlLink(invoice);
    };
    InvoiceComponent.prototype.getPdfLink = function (invoice) {
        return this.invoiceServ.generatePdfLink(invoice);
    };
    InvoiceComponent.prototype.redirect = function (invoice) {
        console.log("redirecting");
        this.router.navigate(['/invoice/' + invoice.id]);
    };
    InvoiceComponent.prototype.ngOnDestroy = function () {
        // removing the header
        this.breadServ.clear();
    };
    InvoiceComponent.prototype.toggleForm = function () {
        this.isFormCollapsed = !this.isFormCollapsed;
    };
    InvoiceComponent.prototype.updateInvoiceList = function (invoice) {
        this.isFormCollapsed = true;
        this.invoices.push(invoice);
    };
    Object.defineProperty(InvoiceComponent.prototype, "totalSize", {
        get: function () {
            return this.paginationInfo.totalItems;
        },
        enumerable: true,
        configurable: true
    });
    InvoiceComponent.prototype.pageChanged = function (event) {
        var _this = this;
        this.invoiceServ.getInvoices(event.page, this.pageSize).subscribe(function (invoiceEnvelope) {
            _this.invoices = invoiceEnvelope.data;
        }, function (error) {
            console.log('error');
            console.log(error);
        });
    };
    InvoiceComponent.prototype.getStatusMessage = function (status) {
        if (!status)
            status = "created";
        return invoiceStatus_model_1.getTranslation(status);
    };
    return InvoiceComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], InvoiceComponent.prototype, "showList", void 0);
InvoiceComponent = __decorate([
    core_1.Component({
        selector: 'invoice',
        styles: [__webpack_require__("../../../../../src/app/pages/invoice/invoice.component.css")],
        template: __webpack_require__("../../../../../src/app/pages/invoice/invoice.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof messages_service_1.MessagesService !== "undefined" && messages_service_1.MessagesService) === "function" && _a || Object, typeof (_b = typeof breadcrumb_service_1.BreadcrumbService !== "undefined" && breadcrumb_service_1.BreadcrumbService) === "function" && _b || Object, typeof (_c = typeof invoice_service_1.InvoiceService !== "undefined" && invoice_service_1.InvoiceService) === "function" && _c || Object, typeof (_d = typeof user_service_1.CustomerService !== "undefined" && user_service_1.CustomerService) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object, typeof (_f = typeof ng2_slim_loading_bar_1.SlimLoadingBarService !== "undefined" && ng2_slim_loading_bar_1.SlimLoadingBarService) === "function" && _f || Object, typeof (_g = typeof user_service_2.UserService !== "undefined" && user_service_2.UserService) === "function" && _g || Object])
], InvoiceComponent);
exports.InvoiceComponent = InvoiceComponent;
var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=invoice.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = __webpack_require__("../../../../../src/app/pages/users/user.model.ts");
var company_model_1 = __webpack_require__("../../../../../src/app/models/company-model.ts");
var contact_model_1 = __webpack_require__("../../../../../src/app/models/contact.model.ts");
/**
 * Created by a619678 on 22. 5. 2017.
 */
var Invoice = (function () {
    function Invoice() {
        this.company = new company_model_1.Company();
        this.companyContact = new contact_model_1.Contact();
        this.invoiceContact = new contact_model_1.Contact();
        this.customer = new user_model_1.Customer();
        this.totalPrice = 0;
        this.invoiceItems = new Array();
    }
    return Invoice;
}());
exports.Invoice = Invoice;
//# sourceMappingURL=invoice.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var ngx_bootstrap_1 = __webpack_require__("../../../../ngx-bootstrap/index.js");
var invoice_service_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.service.ts");
var invoice_component_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.component.ts");
var invoice_create_component_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice-create.component.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/pages/users/user.service.ts");
var configuration_service_1 = __webpack_require__("../../../../../src/app/services/configuration.service.ts");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var user_service_2 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var ng2_slim_loading_bar_1 = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
var invoice_modal_component_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice-modal/invoice-modal.component.ts");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var filter_module_1 = __webpack_require__("../../../../../src/app/widgets/filter/filter.module.ts");
var primeng_1 = __webpack_require__("../../../../primeng/primeng.js");
var InvoiceModule = (function () {
    function InvoiceModule() {
    }
    return InvoiceModule;
}());
InvoiceModule = __decorate([
    core_1.NgModule({
        imports: [
            primeng_1.AutoCompleteModule,
            filter_module_1.FilterModule,
            router_1.RouterModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ngx_bootstrap_1.CollapseModule.forRoot(),
            ngx_bootstrap_1.PaginationModule.forRoot(),
            ngx_bootstrap_1.BsDropdownModule.forRoot(),
            ng2_slim_loading_bar_1.SlimLoadingBarModule.forRoot(),
            ngx_bootstrap_1.ModalModule.forRoot(),
            material_1.MdStepperModule,
            material_1.MdButtonModule,
        ],
        declarations: [
            invoice_component_1.InvoiceComponent,
            invoice_create_component_1.InvoiceCreation,
            invoice_modal_component_1.InvoiceModalComponent
        ],
        providers: [
            invoice_service_1.InvoiceService,
            user_service_1.CustomerService,
            configuration_service_1.ConfigurationService,
            rest_service_1.RestService,
            user_service_2.UserService,
            ng2_slim_loading_bar_1.SlimLoadingBarService
        ],
        exports: [
            invoice_create_component_1.InvoiceCreation,
            invoice_component_1.InvoiceComponent
        ]
    })
], InvoiceModule);
exports.InvoiceModule = InvoiceModule;
//# sourceMappingURL=invoice.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var user_service_1 = __webpack_require__("../../../../../src/app/pages/users/user.service.ts");
var user_service_2 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var app_constants_1 = __webpack_require__("../../../../../src/app/app.constants.ts");
/**
 * Created by a619678 on 22. 5. 2017.
 */
var InvoiceService = (function () {
    function InvoiceService(userSrv, loggedUserService, restServ, configuration) {
        this.userSrv = userSrv;
        this.loggedUserService = loggedUserService;
        this.restServ = restServ;
        this.configuration = configuration;
        this.invoices = new Array();
        this.directions = ['asc', 'desc'];
        this.activeSort = '';
        this.activeDirection = this.directions[0];
        this.states = ['created', 'paid', 'expired', 'canceled', 'late_paid', 'wrong_paid'];
    }
    InvoiceService.prototype.getCachedInvoices = function () {
        return this.invoices;
    };
    InvoiceService.prototype.getPermissions = function (companyId) {
        return this.restServ.getCompanyPermissions(companyId);
    };
    InvoiceService.prototype.setInvoices = function (invoices) {
        this.invoices = invoices;
    };
    InvoiceService.prototype.generateInvoiceId = function () {
        return 10001;
    };
    // TODO : If just going directly on an specific invoice, no data is cached
    InvoiceService.prototype.getInvoiceById = function (id) {
    };
    InvoiceService.prototype.getInvoice = function (id) {
        return this.restServ.getInvoice(id);
    };
    InvoiceService.prototype.getInvoices = function (page, pageSize, sort, filterType, filter) {
        if (sort === void 0) { sort = null; }
        if (filterType === void 0) { filterType = null; }
        if (filter === void 0) { filter = null; }
        if (sort === this.activeSort) {
            this.activeDirection = this.directions[(this.directions.indexOf(this.activeDirection) + 1) % 2];
        }
        this.activeSort = sort;
        return this.restServ.getInvoices(page, pageSize, sort, this.activeDirection, filterType, filter, false);
    };
    InvoiceService.prototype.generatePdfLink = function (invoice) {
        return this.configuration.server + "invoice/" + invoice.id + ".pdf";
    };
    InvoiceService.prototype.generateHtmlLink = function (invoice) {
        return this.configuration.server + "invoice/" + invoice.id + ".html";
    };
    InvoiceService.prototype.payInvoice = function (invoice) {
        return this.restServ.payInvoice(invoice);
    };
    InvoiceService.prototype.generatePdfOfInvoice = function (invoice) {
        return this.restServ.generatePdfOfInvoice(invoice);
    };
    InvoiceService.prototype.sendEmailForInvoice = function (invoice) {
        return this.restServ.sendEmailForInvoice(invoice);
    };
    InvoiceService.prototype.storno = function (invoice) {
        return this.restServ.cancelInvoice(invoice);
    };
    InvoiceService.prototype.createInvoice = function (invoice) {
        return this.restServ.addInvoice(invoice);
    };
    InvoiceService.prototype.deleteInvoice = function (invoice) {
        this.invoices.splice(this.invoices.indexOf(invoice), 1);
        return Observable_1.Observable.of(this.invoices);
    };
    return InvoiceService;
}());
InvoiceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.CustomerService !== "undefined" && user_service_1.CustomerService) === "function" && _a || Object, typeof (_b = typeof user_service_2.UserService !== "undefined" && user_service_2.UserService) === "function" && _b || Object, typeof (_c = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _c || Object, typeof (_d = typeof app_constants_1.Configuration !== "undefined" && app_constants_1.Configuration) === "function" && _d || Object])
], InvoiceService);
exports.InvoiceService = InvoiceService;
var _a, _b, _c, _d;
//# sourceMappingURL=invoice.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoiceStatus.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by a619678 on 23. 5. 2017.
 */
var InvoiceStatus;
(function (InvoiceStatus) {
    InvoiceStatus[InvoiceStatus["created"] = 0] = "created";
    InvoiceStatus[InvoiceStatus["payed"] = 1] = "payed";
    InvoiceStatus[InvoiceStatus["expired"] = 2] = "expired";
    InvoiceStatus[InvoiceStatus["canceled"] = 3] = "canceled";
    InvoiceStatus[InvoiceStatus["latePay"] = 4] = "latePay";
    InvoiceStatus[InvoiceStatus["wrongPay"] = 5] = "wrongPay";
})(InvoiceStatus = exports.InvoiceStatus || (exports.InvoiceStatus = {}));
var InvoiceStats = (function () {
    function InvoiceStats() {
    }
    return InvoiceStats;
}());
InvoiceStats.paid = "zaplatena";
InvoiceStats.created = "vystavena";
InvoiceStats.expired = "po splatnosti";
InvoiceStats.canceled = "storno";
InvoiceStats.latePay = "zaplatena po splatnosti";
InvoiceStats.wrongPay = "zla suma uhradena";
exports.InvoiceStats = InvoiceStats;
exports.invoiceTypes = ["Zálohová faktúra", "Doklad o prijati platby", "Faktura"];
exports.invoiceStatuses = ["created", "paid", "expired", "canceled", "latePay", "wrong_paid", "off"];
exports.invoiceStatesConst = [{ label: InvoiceStats.created, value: InvoiceStatus.created },
    { label: InvoiceStats.paid, value: InvoiceStatus.payed },
    { label: InvoiceStats.expired, value: InvoiceStatus.expired },
    { label: InvoiceStats.canceled, value: InvoiceStatus.canceled },
    { label: InvoiceStats.latePay, value: InvoiceStatus.latePay },
    { label: InvoiceStats.wrongPay, value: InvoiceStatus.wrongPay }, { label: "Vypnut", value: -1 }];
function getTranslation(status) {
    switch (status) {
        case "payed":
        case "paid": return { text: "Zaplatená", label: "label-success" };
        case "created": return { text: "Vystavená", label: "label-info" };
        case "expired": return { text: "Po splatnosti", label: "label-danger" };
        case "canceled": return { text: "Stornovaná", label: "label-default" };
        case "latePay": return { text: "Zaplatená po splatnosti", label: "label-success" };
        case "wrong_paid": return { text: "Zlá suma uhradená", label: "label-danger" };
        default: return { text: "Undefined: " + status, label: "label-danger" };
    }
}
exports.getTranslation = getTranslation;
function getInvoiceStatusFromEnum(status) {
    switch (status) {
        case InvoiceStatus.created: return "Vystavená";
        case InvoiceStatus.expired: return "Po splatnosti";
        case InvoiceStatus.canceled: return "Stornovaná";
        case InvoiceStatus.latePay: return "Zaplatená po splatnosti";
        case InvoiceStatus.wrongPay: return "Zlá suma uhradená";
        case InvoiceStatus.payed: return "Zaplatená";
    }
}
exports.getInvoiceStatusFromEnum = getInvoiceStatusFromEnum;
//# sourceMappingURL=invoiceStatus.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/layouts/auth/auth.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"hold-transition skin-blue sidebar-mini\">\n\t<div class=\"wrapper\">\n\t\t<app-header>{{ 'LOADING' | translate }} header...</app-header>\n\n\t\t<app-menu-aside [links]=\"mylinks\">{{ 'LOADING' | translate }} menu...</app-menu-aside>\n\n\t\t<!-- Content Wrapper. Contains page content -->\n\t\t<div class=\"content-wrapper\">\n\t\t\t<!-- Content Header (Page header) -->\n\t\t\t<toaster-container [toasterconfig]=\"toastrConfig\"></toaster-container>\n\t\t\t<app-breadcrumb></app-breadcrumb>\n\n\t\t\t<!-- Main content -->\n\t\t\t<section class=\"content\">\n\t\t\t\t<div class=\"box box-default\">\n\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<!-- /.content -->\n\t\t\t<app-menu-aside [links]=\"mylinks\">{{ 'LOADING' | translate }} menu...</app-menu-aside>\n\n\t\t</div>\n\t\t<!-- /.content-wrapper -->\n\t\t<app-footer>{{ 'LOADING' | translate }} footer...</app-footer>\n\t\t<app-aside>{{ 'LOADING' | translate }} control sidebar...</app-aside>\n\t</div>\n\t<!-- ./wrapper -->\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/pages/layouts/auth/auth.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var angular2_toaster_1 = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var translate_service_1 = __webpack_require__("../../../../../src/app/services/translate.service.ts");
var LayoutsAuthComponent = (function () {
    function LayoutsAuthComponent(userServ, toastr, translate) {
        this.userServ = userServ;
        this.toastr = toastr;
        this.translate = translate;
        this.mylinks = [];
        this.toastrConfig = new angular2_toaster_1.ToasterConfig({
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
        // this.translate = translate.getTranslate();
        // this.logger = new LoggerService( this.translate );
    }
    LayoutsAuthComponent.prototype.ngOnInit = function () {
        //  sedding the resize event, for AdminLTE to place the height
        var ie = this.detectIE();
        if (!ie) {
            window.dispatchEvent(new Event('resize'));
        }
        else {
            // solution for IE from @hakonamatata
            var event = document.createEvent('Event');
            event.initEvent('resize', false, true);
            window.dispatchEvent(event);
        }
        // define here your own links menu structure
        this.mylinks = [
            {
                'title': 'Objednávky',
                'icon': 'dashboard',
                'admin': false,
                'link': ['']
            },
            {
                'title': 'Faktúry',
                'icon': 'dashboard',
                'admin': false,
                'link': ['/invoices']
            },
            {
                'title': 'Administrácia',
                'icon': 'wrench',
                'admin': true,
                'link': ['/administration']
            },
            {
                'title': 'Zoznam Klientov',
                'icon': 'link',
                'admin': true,
                'link': ['/page/2'],
            },
            {
                'title': 'Statistiky',
                'icon': 'stats',
                'admin': true,
                'link': ['/stats']
            },
            {
                'title': 'Produkty',
                'icon': 'product',
                'admin': true,
                'link': ['/products']
            }
            // {
            //     'title': 'External Link',
            //     'icon': 'google',
            //     'link': ['http://google.com'],
            //     'external': true,
            //     'target': '_blank'
            // },
            // {
            //     'title': 'External Links',
            //     'icon': 'link',
            //     'sublinks': [
            //         {
            //             'title': 'Github',
            //             'link': ['http://github.com'],
            //             'icon': 'github',
            //             'external': true,
            //             'target': '_blank'
            //         },
            //         {
            //             'title': 'Yahoo',
            //             'link': ['http://yahoo.com'],
            //             'icon': 'yahoo',
            //             'external': true,
            //             'target': '_blank'
            //         }
            //     ]
            // }
        ];
    };
    LayoutsAuthComponent.prototype.detectIE = function () {
        var ua = window.navigator.userAgent;
        // Test values; Uncomment to check result …
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // IE 12 / Spartan
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // Edge (IE 12+)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
        // Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        // other browser
        return false;
    };
    return LayoutsAuthComponent;
}());
LayoutsAuthComponent = __decorate([
    core_1.Component({
        selector: 'app-layouts-auth',
        template: __webpack_require__("../../../../../src/app/pages/layouts/auth/auth.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof angular2_toaster_1.ToasterService !== "undefined" && angular2_toaster_1.ToasterService) === "function" && _b || Object, typeof (_c = typeof translate_service_1.AdminLTETranslateService !== "undefined" && translate_service_1.AdminLTETranslateService) === "function" && _c || Object])
], LayoutsAuthComponent);
exports.LayoutsAuthComponent = LayoutsAuthComponent;
var _a, _b, _c;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login-user.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LoginUser = (function () {
    function LoginUser() {
        this.avatarUrl = 'public/assets/img/stano.jpg';
    }
    Object.defineProperty(LoginUser.prototype, "userName", {
        get: function () {
            return this.name + ' ' + this.surname;
        },
        enumerable: true,
        configurable: true
    });
    return LoginUser;
}());
exports.LoginUser = LoginUser;
//# sourceMappingURL=login-user.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-full-width {\n    width: 100%;\n}\n\n.login-btn {\n    width: 80%;\n    left:12%;\n    color: white;\n    background-color:black;\n    border-radius: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\n    <div class=\"login-logo\">\n        <a href=\"../../index2.html\"><b>Kad</b>SOFT</a>\n    </div>\n    <!-- /.login-logo -->\n\n        <toaster-container [toasterconfig]=\"toastrConfig\"></toaster-container>\n        <form (submit)=\"login()\">\n\n            <div class=\"form-group has-feedback\">\n                <span class=\"glyphicon glyphicon-enveloppe form-control-feedback\"></span>\n                <md-form-field class=\"example-full-width\">\n                    <input mdInput placeholder=\"Email\" required minlength=\"8\" name=\"eml\" [(ngModel)]=\"email\"\n                           #eml=\"ngModel\">\n                    <md-icon mdSuffix>email</md-icon>\n                </md-form-field>\n            </div>\n\n            <div class=\"form-group has-feedback\">\n                <md-form-field class=\"example-full-width\">\n                    <input mdInput type=\"password\" class=\"form-control\" placeholder=\"Heslo\" required name=\"passwd\"\n                           [(ngModel)]=\"password\" #passwd=\"ngModel\"\n                           #eml=\"ngModel\">\n                    <md-icon mdSuffix>lock</md-icon>\n                </md-form-field>\n            </div>\n\n\n                    <button md-button type=\"submit\" class=\"login-btn\">Sign In</button>\n                <!-- /.col -->\n\n        </form>\n                    <a href=\"#\">Zabudnute heslo</a><br>\n\n\n    </div>\n    <!-- /.login-box-body -->\n<!-- /.login-box -->\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var LoginComponent = (function () {
    function LoginComponent(userServ, router, restService, notificationServ) {
        this.userServ = userServ;
        this.router = router;
        this.restService = restService;
        this.notificationServ = notificationServ;
    }
    LoginComponent.prototype.ngOnInit = function () {
        window.dispatchEvent(new Event('resize'));
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.restService.authenticate(this.email, this.password).subscribe(function (response) {
            _this.restService.setAccessToken(response.access_token);
            _this.restService.getUser().subscribe(function (response) {
                var user1 = response;
                user1.avatarUrl = 'public/assets/img/stano.jpg';
                user1.connected = true;
                _this.userServ.setCurrentUser(user1);
                _this.router.navigate(['']);
            }, function (error) {
                console.log(error);
                _this.notificationServ.error(error);
                _this.router.navigate(['login']);
            });
        }, function (error) {
            _this.notificationServ.error("zle meno alebo heslo");
            console.log(error);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _c || Object, typeof (_d = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _d || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/order/order-creation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".products{\n    margin-top:10px;\n}\n\n.remove-mark{\n    float:right;\n    cursor:pointer;\n}\n\n.remove-mark:hover{\n    color:red;\n}\n\n.dropdown-menu li{\n    cursor:pointer;\n}\n\n.dropdown-item{\n    cursor:pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/order/order-creation.component.html":
/***/ (function(module, exports) {

module.exports = "<app-order-stepper (createEmitter)=\"invoiceCreated($event)\"></app-order-stepper>"

/***/ }),

/***/ "../../../../../src/app/pages/order/order-creation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by a619678 on 23. 5. 2017.
 */
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var OrderCreationComponent = (function () {
    function OrderCreationComponent() {
        this.invoiceCreatedEmitted = new core_1.EventEmitter();
    }
    OrderCreationComponent.prototype.invoiceCreated = function (order) {
        this.invoiceCreatedEmitted.emit(order);
    };
    return OrderCreationComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OrderCreationComponent.prototype, "invoiceCreatedEmitted", void 0);
OrderCreationComponent = __decorate([
    core_1.Component({
        selector: 'order-creation',
        styles: [__webpack_require__("../../../../../src/app/pages/order/order-creation.component.css")],
        template: __webpack_require__("../../../../../src/app/pages/order/order-creation.component.html")
    })
], OrderCreationComponent);
exports.OrderCreationComponent = OrderCreationComponent;
//# sourceMappingURL=order-creation.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/order/order-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.section {\n    padding: 10px;\n    margin-top : 20px;\n    margin-bottom : 10px;\n    border-radius: 5px;\n    border: 1px solid darkgray;\n    /*background-color: #222d32;\n    color: whitesmoke;*/\n}\n\n.attribute {\n    text-decoration: underline;\n    font-size: 1em;\n}\n\n.attribute:after {\n    content:\": \";\n    text-decoration: none !important;\n}\n\n.invoices {\n    display:inline-block;\n}\n\n.invoice-item {\n    position: relative;\n    background: #fff;\n    border: 1px solid #f4f4f4;\n    border-radius: 4px;\n    padding: 10px;\n    margin: 5px 5px;\n    float: left;\n    cursor: pointer;\n    background-color: lightgray;\n}\n\n.invoice-item:hover{\n    background-color:#00a65a;\n}\n\n.invoice-item span {\n    cursor:pointer;\n}\n\n.file-upload {\n    margin-top : 10px;\n}\n.already-uploaded {\n    border: 0.2px solid darkgrey;\n    border-radius : 3px;\n    background-color: lightgray;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.item {\n    padding: 1px;\n}\n\n\n.already-uploaded span:hover {\n    color:#00a65a;\n}\n\n.already-uploaded .remove {\n    cursor: pointer;\n}\n\n.already-uploaded .remove:hover {\n    color: red;\n}\n\n.vertical-divider {\n    border-right: 1px solid darkgray;\n}\n\n.full-width {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/order/order-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"isLoaded\">\n\n    <app-spinner *ngIf=\"isUploading\"></app-spinner>\n\n    <h2>Objednavka [{{orderId}}]</h2>\n\n    <p><span class=\"attribute\">Klient</span><a *ngIf=\"order?.customerId; else noLink\"\n                                               [routerLink]=\"[ '/user/', order?.customerId ]\">\n        {{order?.mainContact?.name}} {{order?.mainContact?.surname}}</a>\n        <ng-template #noLink>{{order?.mainContact?.name}} {{order?.mainContact?.surname}}</ng-template>\n    </p>\n\n    <app-stepper (onChange)=\"changeState($event)\" [steps]=\"states\" [activeSteps]=\"actions\"\n                 [currentStep]=\"currentState\"></app-stepper>\n\n    <ng-container *ngIf=\"currentState === 'draft';else detail\">\n        <app-order-stepper (createEmitter)=\"toPreparing()\" [order]=\"order\"></app-order-stepper>\n    </ng-container>\n\n    <ng-template #detail>\n\n        <div class=\"invoices\">\n            <h4>Faktury</h4>\n            <div [routerLink]=\"[ '/invoice/', invoice.id ]\" class=\"invoice-item\" *ngFor=\"let invoice of invoices\">\n                <span>{{invoiceTypes[invoice.type - 1]}}</span>\n            </div>\n        </div>\n\n        <div class=\"section\">\n            <md-form-field class=\"full-width\">\n                <textarea mdInput [(ngModel)]='note' placeholder=\"Poznamka\"></textarea>\n            </md-form-field>\n        </div>\n\n        <div class=\"files section\">\n            <h4>Podklady:</h4>\n            <div class=\"file-upload row\">\n\n                <div class=\"col-lg-12 col-md-12 widget\">\n                    <p-fileUpload #uploader name=\"files[]\" multiple=\"multiple\"\n                                  (onUpload)=\"onUpload($event)\" customUpload=\"true\"\n                                  (uploadHandler)=\"fileUpload($event)\">\n                    </p-fileUpload>\n\n                    <div *ngIf=\"files.length > 0\" class=\"already-uploaded\">\n                        <div class=\"item\" *ngFor=\"let orderFile of files\">\n                            <a [href]=\"orderFile.downloadUrl\">\n                                {{orderFile.fileName}}\n                            </a>\n                            <span class=\"remove glyphicon glyphicon-remove-sign\"\n                                  (click)=\"remove(orderFile)\"></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"profession section\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 vertical-divider\">\n                    <h4>Profesie:</h4>\n                    <p-selectButton [options]=\"professions\" [(ngModel)]=\"selectedProfessions\"\n                                    multiple=\"multiple\"></p-selectButton>\n                    <div *ngIf=\"isAreaShown\">\n                        <h4>Rozloha:</h4>\n                        <input type=\"number\" min=\"1\" class=\"form-control\" [(ngModel)]=\"area\">\n                    </div>\n\n                    <ng-container *ngIf=\"isHeatingSelected\">\n                        <h4>Jednotkova cena kurenie:</h4>\n                        <input pTooltip=\"4€\" type=\"number\" min=\"1\" class=\"form-control\" [(ngModel)]=\"heatingPrice\">\n                    </ng-container>\n\n\n                    <ng-container *ngIf=\"isVztSelected\">\n                        <h4>Jednotkova cena vzduchotechnika:</h4>\n                        <input type=\"number\" min=\"1\" class=\"form-control\" [(ngModel)]=\"vztPrice\">\n                    </ng-container>\n\n\n                    <ng-container *ngIf=\"isLightingSelected\">\n                        <h4>Jednotkova cena osvetlenie:</h4>\n                        <input pTooltip=\"do 250m 40€\\ndo 1500m 60€\\ndo 2500m 80€\\ndo 5000m 120€\\n nad 5000m dohodou\" type=\"number\" min=\"1\" class=\"form-control\" [(ngModel)]=\"lightingPrice\">\n                    </ng-container>\n\n                    <p>Celkove naklady: {{totalCost}}</p>\n                </div>\n\n\n                <div class=\"product-type\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-6\">\n                            <h4>Typ produktu:</h4>\n                            <p-selectButton (onChange)=\"onValueChange(event)\" [options]=\"productTypes\"\n                                            [(ngModel)]=\"selectedProductType\"></p-selectButton>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"building-type section\">\n            <div class=\"row\">\n                <div class=\"col-lg-6\">\n                    <h4>Typ stavby:</h4>\n                    <p-selectButton [options]=\"buildingTypes\"\n                                    [(ngModel)]=\"selectedBuildingType\"></p-selectButton>\n                </div>\n                <div *ngIf=\"selectedBuildingType > -1\" class=\"col-lg-6\">\n                    {{buildingInfo}}\n                </div>\n            </div>\n        </div>\n\n        <button (click)=\"updateOrder()\" class=\"btn btn-success btn-block\">Uloz</button>\n        <p>Priradene: <i>{{order?.assignedTo?.email || '-'}}</i></p>\n\n        <!--<ng-container *ngIf=\"false\">-->\n        <!--<h4>Administrativne nastroje</h4>-->\n        <!--<div class=\"section\">-->\n        <!--<h4>Preradenie pouzivatela:</h4>-->\n        <!--<div class=\"btn-group\" dropdown>-->\n        <!--<button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">-->\n        <!--{{selectedUser?.name}} {{selectedUser?.surname}}<span class=\"caret\"></span>-->\n        <!--</button>-->\n        <!--<button class=\"btn btn-success\" (click)=\"reassing()\">Prirad</button>-->\n        <!--<ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">-->\n        <!--<li *ngFor=\"let user of users\" (click)=\"selectUser(user)\" role=\"menuitem\"><a class=\"dropdown-item\">{{user.name}} {{user.surname}}</a></li>-->\n        <!--<li class=\"divider dropdown-divider\"></li>-->\n        <!--<li role=\"menuitem\" (click)=\"selectUser(null)\"><a class=\"dropdown-item\">Nepriradene</a>-->\n        <!--</li>-->\n        <!--</ul>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--</ng-container>-->\n\n    </ng-template>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/pages/order/order-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var ng2_slim_loading_bar_1 = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var order_model_1 = __webpack_require__("../../../../../src/app/pages/order/order.model.ts");
var order_service_1 = __webpack_require__("../../../../../src/app/pages/order/order.service.ts");
var invoiceStatus_model_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoiceStatus.model.ts");
var file_1 = __webpack_require__("../../../../../src/app/models/file.ts");
var orderFiles_1 = __webpack_require__("../../../../../src/app/models/orderFiles.ts");
var order_constants_1 = __webpack_require__("../../../../../src/app/pages/order/order.constants.ts");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var OrderDetailComponent = (function () {
    function OrderDetailComponent(activatedRoute, router, _orderSrv, _usrService, loadingBar, notificationSrv, _loginServ, _restSrv, _notificationSrv) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._orderSrv = _orderSrv;
        this._usrService = _usrService;
        this.loadingBar = loadingBar;
        this.notificationSrv = notificationSrv;
        this._loginServ = _loginServ;
        this._restSrv = _restSrv;
        this._notificationSrv = _notificationSrv;
        this.isLoaded = false;
        this.orderFiles = [];
        this.uploadedFiles = [];
        this.professions = [];
        this.buildingTypes = [];
        this.productTypes = [];
        this.selectedProfessions = [];
        this.heatingPrice = order_constants_1.OrderConstants.heatingPrice;
        this.lightingPrice = order_constants_1.OrderConstants.lightingPrice;
        this.vztPrice = order_constants_1.OrderConstants.vztPrice;
        this.area = 0;
        this.note = '';
        this.isUploading = false;
        this.professions = _orderSrv.professionTypes;
        this.buildingTypes = _orderSrv.constructionTypes;
        this.productTypes = _orderSrv.productTypes;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.order = data['order'];
            _this.selectedBuildingType = (_this.order.constructionType) ? _this.order.constructionType.id : null;
            _this.selectedProductType = (_this.order.productType) ? _this.order.productType.id : null;
            _this.selectedProfessions = (_this.order.professions) ? _this.order.professions.map(function (profession) { return profession.id; }) : null;
            _this.note = _this.order.note;
            _this.area = _this.order.area;
            _this.vztPrice = _this.order.vztPrice;
            _this.lightingPrice = _this.order.lightingPrice;
            _this.heatingPrice = _this.order.heatingPrice;
            _this.selectedUser = _this.order.assignedTo;
            _this.isLoaded = true;
        });
        if (this._usrService.isAdmin()) {
            this._usrService.getAllUsers().subscribe(function (result) {
                _this.users = result;
                console.log(_this.users);
            });
        }
    };
    OrderDetailComponent.prototype.remove = function (uploadedFile) {
        if (window.confirm("Naozaj chcete vymazat danu polozku?")) {
            console.log('todo');
        }
    };
    OrderDetailComponent.prototype.updateStatus = function (action) {
        var _this = this;
        this._restSrv.post(action).subscribe(function (result) {
            _this.notificationSrv.success('bol uspesne aktualizovany', 'Stav');
            _this._orderSrv.getOrder(_this.order.id).subscribe(function (order) {
                _this.order = order;
            });
        }, function (error) {
            _this.notificationSrv.error('nebol uspesne aktualizovany', 'Stav');
        });
    };
    OrderDetailComponent.prototype.toPreparing = function () {
        this.updateStatus(this.order.actions.toPreparing);
    };
    OrderDetailComponent.prototype.toAssigned = function () {
        this.updateStatus(this.order.actions.toAssigned);
    };
    OrderDetailComponent.prototype.toFinished = function () {
        this.updateStatus(this.order.actions.toFinished);
    };
    OrderDetailComponent.prototype.toDispatched = function () {
        this.updateStatus(this.order.actions.toDispatched);
    };
    OrderDetailComponent.prototype.unassign = function () {
        this.updateStatus(this.order.actions.toUnassigned);
    };
    OrderDetailComponent.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    };
    OrderDetailComponent.prototype.fileUpload = function (filesToUpload) {
        var _this = this;
        this.parseFiles(filesToUpload, function (parsedFiles) {
            var orderFiles = new orderFiles_1.OrderFiles();
            orderFiles.text = 'subor';
            orderFiles.files = parsedFiles;
            _this.isUploading = true;
            _this._orderSrv.addFilesToOrder(_this.order.id, orderFiles).subscribe(function (result) {
                _this.order = result;
                _this.notificationSrv.success('Subory', 'boli uspesne nahrate');
                _this.uploader.clear();
            }, function (err) {
                _this.notificationSrv.error('Subory', 'neboli uspesne nahrate');
                if (err.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                    console.log('An error occurred:', err.error.message);
                }
                else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    console.log("Backend returned code " + err.status + ", body was:");
                    console.log(err.error);
                }
            }, function () { return _this.isUploading = false; });
        });
    };
    OrderDetailComponent.prototype.parseFiles = function (filesToUpload, onFinish) {
        var parsedFiles = 0;
        var totalFiles = filesToUpload.files.length;
        var arrayOfFiles = new Array();
        var _loop_1 = function (file) {
            var customFile = new file_1.UploadFileInfo();
            customFile.filename = 'test';
            this_1.getBase64fromFile(file, function (data) {
                parsedFiles++;
                var bannedStrings = ["vnd.openxmlformats-officedocument.wordprocessingml.document", "msword"];
                for (var _i = 0, bannedStrings_1 = bannedStrings; _i < bannedStrings_1.length; _i++) {
                    var bannedString = bannedStrings_1[_i];
                    if (data.indexOf(bannedString) > -1) {
                        console.log('bannedString is there');
                        data = data.replace(bannedString, 'docx');
                    }
                }
                customFile.base64File = data;
                arrayOfFiles.push(customFile);
                if (parsedFiles == totalFiles) {
                    onFinish(arrayOfFiles);
                }
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = filesToUpload.files; _i < _a.length; _i++) {
            var file = _a[_i];
            _loop_1(file);
        }
    };
    OrderDetailComponent.prototype.getBase64fromFile = function (file, callback) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
            callback(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    OrderDetailComponent.prototype.onValueChange = function (event) {
        console.log(event);
        console.log(this.selectedProductType);
    };
    OrderDetailComponent.prototype.updateOrder = function () {
        var _this = this;
        var updatedOrder = new order_model_1.Order;
        updatedOrder.professions = this.selectedProfessions;
        updatedOrder.productType = this.selectedProductType;
        updatedOrder.constructionType = this.selectedBuildingType;
        updatedOrder.note = this.note;
        updatedOrder.area = this.area;
        updatedOrder.price = this.totalCost;
        updatedOrder.vztPrice = this.vztPrice;
        updatedOrder.heatingPrice = this.heatingPrice;
        updatedOrder.lightingPrice = this.lightingPrice;
        this._orderSrv.patchOrder(updatedOrder, this.order.id).subscribe(function (result) {
            _this._notificationSrv.success('Objednavka', 'bola uspesne upravena');
        }, function (error) {
            _this._notificationSrv.error('Objednavka', 'nebola uspesne upravena');
        });
    };
    OrderDetailComponent.prototype.changeState = function (newState) {
        switch (newState) {
            case 'assigned': {
                this.toAssigned();
                break;
            }
            case 'unassigned': {
                this.unassign();
                break;
            }
            case 'finished': {
                this.toFinished();
                break;
            }
            case 'preparing': {
                this.toPreparing();
                break;
            }
            case 'dispatched': {
                this.toDispatched();
                break;
            }
        }
    };
    OrderDetailComponent.prototype.selectUser = function (user) {
        this.selectedUser = user;
    };
    // reassing() {
    //     let updatedOrder = new Order();
    //     updatedOrder.assignedTo = this.selectedUser;
    //     this._orderSrv.setAsignedTo(updatedOrder, this.order.id).subscribe(
    //         result => {
    //             console.log(result);
    //         },
    //         error => {
    //             console.log('error');
    //         }
    //     );
    // }
    OrderDetailComponent.prototype.onInvoiceCreated = function () {
        this.toPreparing();
    };
    Object.defineProperty(OrderDetailComponent.prototype, "orderId", {
        get: function () {
            return this.order.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "creator", {
        get: function () {
            return this.order.createdBy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "createdDate", {
        get: function () {
            return this.order.created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "isAssigned", {
        get: function () {
            return !(this.order.state === 'draft' || this.order.state === 'unassigned');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "client", {
        get: function () {
            return this.order.mainContact.name + this.order.mainContact.surname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "invoices", {
        get: function () {
            return this.order.invoices;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "isDealer", {
        get: function () {
            return this._usrService.isDealer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "state", {
        get: function () {
            return order_model_1.getOrderTranslation(order_model_1.OrderStatus[this.order.state]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "invoiceTypes", {
        get: function () {
            return invoiceStatus_model_1.invoiceTypes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "buildingInfo", {
        get: function () {
            return order_model_1._buildingTypesInfo[this.selectedBuildingType];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "isAreaShown", {
        get: function () {
            var _this = this;
            return this.selectedProfessions.find(function (selected) {
                return (selected === _this.professions[0].value) || (selected === _this.professions[2].value);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "isHeatingSelected", {
        get: function () {
            var _this = this;
            return this.selectedProfessions.find(function (selected) { return selected === _this.professions[0].value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "isVztSelected", {
        get: function () {
            var _this = this;
            return this.selectedProfessions.find(function (selected) { return selected === _this.professions[1].value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "isLightingSelected", {
        get: function () {
            var _this = this;
            return this.selectedProfessions.find(function (selected) { return selected === _this.professions[2].value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "totalCost", {
        get: function () {
            return this.area * (this.lightingPrice + this.heatingPrice) + this.vztPrice;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "isAdministrator", {
        get: function () {
            return this._loginServ.getLoggedInUser().roles.indexOf("ROLE_ADMIN") > -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "canBeUnassigned", {
        get: function () {
            return !!this.order.actions.toUnassigned;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "canBeAssigned", {
        get: function () {
            return !!this.order.actions.toAssigned;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "canBeFinished", {
        get: function () {
            return !!this.order.actions.toFinished;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "canBeDispatched", {
        get: function () {
            return !!this.order.actions.toDispatched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "canBePreparing", {
        get: function () {
            return !!this.order.actions.toPreparing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "actions", {
        get: function () {
            if (this.order.state === 'draft') {
                return [];
            }
            else {
                return this.order.actions;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "currentState", {
        get: function () {
            return this.order.state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "files", {
        get: function () {
            return this.order.files;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderDetailComponent.prototype, "states", {
        get: function () {
            return this._orderSrv.states;
        },
        enumerable: true,
        configurable: true
    });
    return OrderDetailComponent;
}());
__decorate([
    core_1.ViewChild('uploader'),
    __metadata("design:type", Object)
], OrderDetailComponent.prototype, "uploader", void 0);
OrderDetailComponent = __decorate([
    core_1.Component({
        selector: 'order-detail',
        styles: [__webpack_require__("../../../../../src/app/pages/order/order-detail.component.css")],
        template: __webpack_require__("../../../../../src/app/pages/order/order-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" && _c || Object, typeof (_d = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _d || Object, typeof (_e = typeof ng2_slim_loading_bar_1.SlimLoadingBarService !== "undefined" && ng2_slim_loading_bar_1.SlimLoadingBarService) === "function" && _e || Object, typeof (_f = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _f || Object, typeof (_g = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _g || Object, typeof (_h = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _h || Object, typeof (_j = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _j || Object])
], OrderDetailComponent);
exports.OrderDetailComponent = OrderDetailComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=order-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/order/order-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by sevcik on 7/6/17.
 */
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var order_model_1 = __webpack_require__("../../../../../src/app/pages/order/order.model.ts");
var ngx_bootstrap_1 = __webpack_require__("../../../../ngx-bootstrap/index.js");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var OrderModal = (function () {
    function OrderModal(restSrv) {
        var _this = this;
        this.restSrv = restSrv;
        this.proceedRequest = new core_1.EventEmitter();
        this.isModalShown = false;
        this.templates = ["Dakujeme za zkupenie produktu", "Nedakujeme za zakupenie produktu"];
        this.selectedMailTemplate = this.templates[0];
        this.restSrv.getEmails().subscribe(function (emails) {
            _this.templates = emails;
        });
    }
    OrderModal.prototype.ngOnChanges = function (changes) {
        if (changes.showModal && this.showModal) {
            console.log("change, show modal");
            this.showModalWindow();
        }
    };
    OrderModal.prototype.selectTemplate = function (template) {
        this.selectedMailTemplate = template;
    };
    OrderModal.prototype.showModalWindow = function () {
        console.log("trying to show modal:");
        console.log(this.order);
        // this.isModalShown = true;
    };
    OrderModal.prototype.returnOrderToParent = function (staticModal, mailText) {
        //this.order.invoice.emailText = mailText;
        this.order.invoice.emailText = this.selectedMailTemplate;
        if (mailText == null) {
            this.proceedRequest.next(null);
        }
        else {
            //staticModal.hide();
            // this.isModalShown = false;
            this.proceedRequest.next(this.order);
        }
    };
    OrderModal.prototype.ngOnInit = function () {
    };
    return OrderModal;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OrderModal.prototype, "showModal", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof order_model_1.Order !== "undefined" && order_model_1.Order) === "function" && _a || Object)
], OrderModal.prototype, "order", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OrderModal.prototype, "proceedRequest", void 0);
__decorate([
    core_1.ViewChild('staticModal'),
    __metadata("design:type", typeof (_b = typeof ngx_bootstrap_1.ModalDirective !== "undefined" && ngx_bootstrap_1.ModalDirective) === "function" && _b || Object)
], OrderModal.prototype, "autoShownModal", void 0);
OrderModal = __decorate([
    core_1.Component({
        selector: 'order-modal',
        template: "\n        <div *ngIf=\"showModal\" [config]=\"{ show: true }\" class=\"modal fade\" bsModal\n             #staticModal=\"bs-modal\"\n             tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-sm\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title pull-left\">Notifika\u010Dn\u00FD mail</h4>\n\n                        <div class=\"modal-body\">\n                            <div class=\"dropdown center-block\">\n                                <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n                                    {{selectedMailTemplate || 'Vyberte sablonu'}}\n                                    <span class=\"caret\"></span></button>\n                                <ul class=\"dropdown-menu animated-dropdown-menu\">\n                                    <li *ngFor=\"let currentTemplate of templates\">\n                                        <a (click)=\"selectTemplate(currentTemplate)\">{{currentTemplate}}</a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"mailText\">Text Notifika\u010Dn\u00E9ho mailu:</label>\n                                <input #mailText [(ngModel)]=\"selectedMailTemplate\" type=\"text\" id=\"mailText\"\n                                       class=\"form-control\"/>\n                            </div>\n\n                            <button class=\"btn btn-default\" (click)=\"returnOrderToParent(staticModal, mailText)\">\n                                Create\n                            </button>\n                            <button class=\"btn btn-danger\" type=\"button\" aria-label=\"Close\"\n                                    (click)=\"returnOrderToParent(staticModal, null)\">\n                                Zrusit\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _c || Object])
], OrderModal);
exports.OrderModal = OrderModal;
var _a, _b, _c;
//# sourceMappingURL=order-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/order/order-resolve.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var order_service_1 = __webpack_require__("../../../../../src/app/pages/order/order.service.ts");
/**
 * Created by a619678 on 23. 5. 2017.
 */
var OrderResolve = (function () {
    function OrderResolve(orderSrv) {
        this.orderSrv = orderSrv;
    }
    OrderResolve.prototype.resolve = function (route) {
        var orderId = route.params['orderNumber'];
        if (!orderId)
            return null;
        return this.orderSrv.getOrder(orderId);
    };
    return OrderResolve;
}());
OrderResolve = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" && _a || Object])
], OrderResolve);
exports.OrderResolve = OrderResolve;
var _a;
//# sourceMappingURL=order-resolve.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/order/order-sort.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var OrderSortDirective = (function () {
    function OrderSortDirective() {
    }
    return OrderSortDirective;
}());
OrderSortDirective = __decorate([
    core_1.Directive({
        selector: '[appOrderSort]'
    }),
    __metadata("design:paramtypes", [])
], OrderSortDirective);
exports.OrderSortDirective = OrderSortDirective;
//# sourceMappingURL=order-sort.directive.js.map

/***/ }),

/***/ "../../../../../src/app/pages/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sortable {\n    cursor: pointer;\n}\n\n.sortable:hover {\n    color: lightgray;\n}\n\n.modal-body {\n    margin-top: 20px;\n}\n\ntd {\n    padding: 2px !important;\n    text-align: center;\n}\n\n.client-link {\n    z-index: 99;\n}\n\n.table-wrapper {\n    /*overflow: auto;*/\n}\n\n@media (max-width: 991px) {\n    .table-wrapper {\n        font-size: 9px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar [height]=\"'8px'\"></ng2-slim-loading-bar>\n\n<ng-container *ngIf=\"!filteredOrders\">\n    <button type=\"button\" (click)=\"toggleForm()\" class=\"btn btn-success\">Vytvoriť novú objednávku</button>\n\n    <div class=\"well well-lg\" [collapse]=\"isFormCollapsed\">\n        <order-creation (invoiceCreatedEmitted)=\"updateOrderList($event)\"></order-creation>\n    </div>\n</ng-container>\n\n<app-filter [type]=\"'Order'\" [page]=\"currentPage\" [pageSize]=\"pageSize\" [sort]=\"sort\"\n            [sortOrientation]=\"sortOrientation\" [filter]=\"filter\"\n            [filterType]=\"filterType\" (onUpdate)=\"update($event)\"></app-filter>\n<div class=\"table-wrapper\">\n    <table class=\"table table-bordered table-responsive table-hover\">\n        <caption>Objednávky</caption>\n        <tbody>\n        <tr>\n            <th style=\"width: 10px\">#</th>\n            <th class=\"sortable\" (click)=\"orderBy('orderedBy')\">Vytvoril</th>\n            <th>Nazov</th>\n            <th>Stav</th>\n            <th>Faktura</th>\n            <th>Klient</th>\n            <th class=\"sortable\" (click)=\"orderBy('price')\">Cena</th>\n            <th>Priradené</th>\n            <th class=\"sortable\" (click)=\"orderBy('createdAt')\">Vytvorene</th>\n            <th class=\"sortable\" (click)=\"orderBy('updatedAt')\">Aktualizovane</th>\n        </tr>\n\n        <tr *ngFor=\"let order of orders\">\n            <td [routerLink]=\"[ '/order/', order.id ]\">{{order?.id}}</td>\n            <td [routerLink]=\"[ '/order/', order.id ]\"><a *ngIf=\"order?.orderedBy?.email; else web\"\n                                                          [routerLink]=\"[ '/user/'+order?.orderedBy?.id ]\">{{order?.orderedBy?.email}}</a>\n            </td>\n            <ng-template #web>\n                <td>Web</td>\n            </ng-template>\n            <!--// TODO: resolver and make a user type in the invoice -->\n            <td [routerLink]=\"[ '/order/', order.id ]\">{{order?.text}}</td>\n            <td [routerLink]=\"[ '/order/', order.id ]\">\n                <span class=\"label\" [ngClass]=\"getStatusMessage(order?.state).label\">\n                {{getStatusMessage(order?.state).text}}\n                </span>\n            </td>\n            <td [routerLink]=\"[ '/order/', order.id ]\"><span class=\"label\"\n                                                             [ngClass]=\"getInvoiceStatusMessage(order.invoices[0]?.status).label\">\n                {{getInvoiceStatusMessage(order.invoices[0]?.status).text}}\n                </span>\n            </td>\n            <td>\n                <a class=\"client-link\" *ngIf=\"order.customerId; else noLink\"\n                   [routerLink]=\"[ '/user/', order?.customerId ]\">\n                    {{order.mainContact.name}} {{order.mainContact.surname}}</a>\n                <ng-template #noLink>{{order.mainContact.name}} {{order.mainContact.surname}}</ng-template>\n            </td>\n            <td [routerLink]=\"[ '/order/', order.id ]\">\n                <ng-container *ngIf=\"order.invoices.length > 0\">\n                    {{order?.price}}\n                </ng-container>\n            </td>\n            <td [routerLink]=\"[ '/order/', order.id ]\">{{order?.assignedTo?.email || '-'}}</td>\n            <td [routerLink]=\"[ '/order/', order.id ]\">{{order?.createdAt | date:'dd.MM.yyyy HH:mm'}}</td>\n            <td [routerLink]=\"[ '/order/', order.id ]\">{{order?.updatedAt | date:'dd.MM.yyyy HH:mm'}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-4\">\n            <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\"\n                        class=\"pagination-sm\"\n                        [boundaryLinks]=\"true\" [rotate]=\"false\"\n                        (numPages)=\"numPages = $event\" (pageChanged)=\"pageChanged($event)\"></pagination>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/order/order.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var breadcrumb_service_1 = __webpack_require__("../../../../../src/app/services/breadcrumb.service.ts");
var messages_service_1 = __webpack_require__("../../../../../src/app/services/messages.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var order_model_1 = __webpack_require__("../../../../../src/app/pages/order/order.model.ts");
var order_service_1 = __webpack_require__("../../../../../src/app/pages/order/order.service.ts");
var invoice_service_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.service.ts");
var invoiceStatus_model_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoiceStatus.model.ts");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var ng2_slim_loading_bar_1 = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var OrderComponent = (function () {
    function OrderComponent(msgServ, breadServ, _invoiceServ, _orderServ, router, loadingBar) {
        this.msgServ = msgServ;
        this.breadServ = breadServ;
        this._invoiceServ = _invoiceServ;
        this._orderServ = _orderServ;
        this.router = router;
        this.loadingBar = loadingBar;
        this.date = new Date();
        this.orders = new Array();
        this.isFormCollapsed = true;
        this.maxSize = 10;
        this.bigTotalItems = 0;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.currentPage = 1;
        this.pageSize = 10;
        this.showModal = false;
        this.invoiceTypes = ["Zálohová faktúra", "Doklad o prijati platby", "Faktura"];
        this.stopChanel = new Subject_1.Subject();
        this.sort = "";
        this.sortOrientation = "asc";
        this.filter = null;
        this.filterType = null;
    }
    OrderComponent.prototype.setActiveOrderForModal = function (order) {
        this.activeInvoices = order.invoices;
    };
    OrderComponent.prototype.ngOnChanges = function (changes) {
        console.log('changes');
        if (changes.filteredOrders) {
            this.getOrders();
        }
    };
    OrderComponent.prototype.update = function (filteredOrders) {
        if (filteredOrders) {
            this.orders = filteredOrders.data;
            this.allOrders = filteredOrders.data;
            this.bigTotalItems = filteredOrders.meta.totalItems;
        }
    };
    OrderComponent.prototype.ngOnInit = function () {
        // setttings the header for the home
        this.breadServ.set({
            description: 'Objednavky',
            display: true,
            header: 'Objednavky',
            levels: [
                {
                    icon: 'order',
                    link: ['/orders'],
                    title: 'Objednavky'
                }
            ]
        });
        if (!this.filteredOrders) {
            this.loadingBar.start(function () {
            });
            // TODO: check dates
            this.getOrders();
        }
        else {
            this.orders = this.filteredOrders;
            this.bigTotalItems = this.paginationMeta.totalItems;
        }
    };
    OrderComponent.prototype.getOrders = function () {
        var _this = this;
        Observable_1.Observable.forkJoin(this._orderServ.getOrders(this.currentPage, this.pageSize, null, null, this.filterType, this.filter))
            .takeUntil(this.stopChanel)
            .subscribe(function (result) {
            _this.paginationMeta = result[0].meta;
            _this.orders = result[0].data;
            _this._orderServ.setOrders(result[0].data);
            _this.bigTotalItems = _this.paginationMeta.totalItems;
            _this.loadingBar.complete();
        }, function (error) {
        }, function () {
            _this.loadingBar.complete();
        });
    };
    OrderComponent.prototype.ngOnDestroy = function () {
        // removing the header
        this.breadServ.clear();
    };
    OrderComponent.prototype.toggleForm = function () {
        this.isFormCollapsed = !this.isFormCollapsed;
    };
    OrderComponent.prototype.updateOrderList = function (order) {
        this.isFormCollapsed = true;
        this.orders.push(order);
        this.setActiveRecords();
    };
    OrderComponent.prototype.pageChanged = function (event) {
        this.currentPage = event.page;
        // this.setActiveRecords();
    };
    OrderComponent.prototype.getStatusMessage = function (status) {
        if (!status)
            status = "notAssigned";
        return order_model_1.getOrderTranslation(status);
    };
    OrderComponent.prototype.getInvoiceStatusMessage = function (status) {
        if (!status)
            status = "created";
        return invoiceStatus_model_1.getTranslation(status);
    };
    OrderComponent.prototype.setActiveRecords = function (type) {
        var _this = this;
        if (type === void 0) { type = null; }
        this._orderServ.getOrders(this.currentPage, this.pageSize, this.filterType, this.sortOrientation, this.filter).subscribe(function (result) {
            _this.allOrders = result.data;
            _this.orders = result.data;
            _this.bigTotalItems = _this.paginationMeta.totalItems;
        });
    };
    OrderComponent.prototype.orderBy = function (type) {
        console.log(this.sort);
        console.log(type);
        console.log(this.sortOrientation);
        if (this.sort === type) {
            this.sortOrientation = (this.sortOrientation === 'asc') ? 'desc' : 'asc';
        }
        else {
            this.sort = type;
            this.sortOrientation = 'asc';
        }
    };
    return OrderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], OrderComponent.prototype, "filteredOrders", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OrderComponent.prototype, "filter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OrderComponent.prototype, "filterType", void 0);
OrderComponent = __decorate([
    core_1.Component({
        selector: 'order',
        styles: [__webpack_require__("../../../../../src/app/pages/order/order.component.css")],
        template: __webpack_require__("../../../../../src/app/pages/order/order.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof messages_service_1.MessagesService !== "undefined" && messages_service_1.MessagesService) === "function" && _a || Object, typeof (_b = typeof breadcrumb_service_1.BreadcrumbService !== "undefined" && breadcrumb_service_1.BreadcrumbService) === "function" && _b || Object, typeof (_c = typeof invoice_service_1.InvoiceService !== "undefined" && invoice_service_1.InvoiceService) === "function" && _c || Object, typeof (_d = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object, typeof (_f = typeof ng2_slim_loading_bar_1.SlimLoadingBarService !== "undefined" && ng2_slim_loading_bar_1.SlimLoadingBarService) === "function" && _f || Object])
], OrderComponent);
exports.OrderComponent = OrderComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/order/order.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by sevcik on 10/21/17.
 */
var OrderConstants = (function () {
    function OrderConstants() {
    }
    return OrderConstants;
}());
OrderConstants.heatingPrice = 10;
OrderConstants.lightingPrice = 10;
OrderConstants.vztPrice = 10;
exports.OrderConstants = OrderConstants;
//# sourceMappingURL=order.constants.js.map

/***/ }),

/***/ "../../../../../src/app/pages/order/order.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by a619678 on 23. 5. 2017.
 */
var Order = (function () {
    function Order() {
    }
    return Order;
}());
exports.Order = Order;
var Survey = (function () {
    function Survey() {
    }
    return Survey;
}());
exports.Survey = Survey;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["notPrepared"] = 0] = "notPrepared";
    OrderStatus[OrderStatus["notAssigned"] = 1] = "notAssigned";
    OrderStatus[OrderStatus["assigned"] = 2] = "assigned";
    OrderStatus[OrderStatus["done"] = 3] = "done";
    OrderStatus[OrderStatus["waiting"] = 4] = "waiting";
    OrderStatus[OrderStatus["expeded"] = 5] = "expeded";
    OrderStatus[OrderStatus["createdByAnonymous"] = 6] = "createdByAnonymous";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var Actions = (function () {
    function Actions() {
    }
    return Actions;
}());
exports.Actions = Actions;
var OrderStats = (function () {
    function OrderStats() {
    }
    return OrderStats;
}());
OrderStats.notPrepared = "Nepripravena";
OrderStats.notAssigned = "Pripravovana";
OrderStats.assigned = "Nepriradena";
OrderStats.done = "Priradena";
OrderStats.expeded = "Dokoncena";
OrderStats.createdByAnonymous = "Odoslana";
exports.OrderStats = OrderStats;
exports.orderStatesConst = [{ label: OrderStats.notPrepared, value: 0 },
    { label: OrderStats.notAssigned, value: 1 }, { label: OrderStats.assigned, value: 2 },
    { label: OrderStats.done, value: 3 }, { label: OrderStats.expeded, value: 4 },
    { label: OrderStats.createdByAnonymous, value: 5 }, { label: "Vypnut", value: -1 }];
exports.heating = '0';
exports.vzt = '1';
exports.lighting = '2';
exports._professions = [{ label: 'kurenie', value: exports.heating }, { label: 'vzt', value: exports.vzt }, {
        label: 'osvetlenie',
        value: exports.lighting
    }];
exports._buildingTypes = [{ label: 'typ1', value: 0 }, { label: 'typ2', value: 1 }, { label: 'typ3', value: 2 },
    { label: 'typ4', value: 3 }, { label: 'typ5', value: 4 }, { label: 'typ6', value: 5 },
    { label: 'typ7', value: 6 }, { label: 'typ8', value: 7 }, { label: 'ine', value: 8 }];
exports._productTypes = [{ label: 'EC', value: 0 }, { label: 'EC Bytu', value: 1 }, {
        label: 'PEH',
        value: 2
    }, { label: 'E4', value: 3 },
    { label: 'Horuco vod', value: 4 }];
exports._buildingTypesInfo = ["Duis malesuada neque elit, sit amet semper metus commodo non. Proin pellentesque lorem est, vitae efficitur elit hendrerit at. Integer vel sapien eget leo interdum aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nulla elit arcu, rhoncus sed blandit sit amet, vestibulum id neque. Praesent mattis lacinia felis, non ullamcorper lacus hendrerit in.",
    "Suspendisse suscipit vehicula enim, a pulvinar ex cursus vel. Donec tortor augue, consequat in sem nec, lobortis posuere orci. Fusce laoreet, massa",
    "Duis malesuada neque elit, sit amet semper metus commodo non. Proin pellentesque lorem est, vitae efficitur elit hendrerit at. Integer vel sapien eget leo interdum aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nulla elit arcu, rhoncus sed blandit sit amet, vestibulum id neque. Praesent mattis lacinia felis, non ullamcorper lacus hendrerit in.",
    "Suspendisse suscipit vehicula enim, a pulvinar ex cursus vel. Donec tortor augue, consequat in sem nec, lobortis posuere orci. Fusce laoreet, massa",
    "Duis malesuada neque elit, sit amet semper metus commodo non. Proin pellentesque lorem est, vitae efficitur elit hendrerit at. Integer vel sapien eget leo interdum aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nulla elit arcu, rhoncus sed blandit sit amet, vestibulum id neque. Praesent mattis lacinia felis, non ullamcorper lacus hendrerit in.",
    "Suspendisse suscipit vehicula enim, a pulvinar ex cursus vel. Donec tortor augue, consequat in sem nec, lobortis posuere orci. Fusce laoreet, massa",];
function getOrderTranslation(status) {
    switch (status) {
        case "draft":
            return { text: "Nepripravena", label: "label-danger" };
        case "unassigned":
            return { text: "Nepriradena", label: "label-danger" };
        case "assigned":
            return { text: "Priradena", label: "label-info" };
        case "preparing":
            return { text: "Pripravovana", label: "label-warning" };
        case "dispatched":
            return { text: "Odoslana", label: "label-default" };
        case "finished":
            return { text: "Dokoncena", label: "label-success" };
        default:
            return { text: "???", label: "label-danger" };
    }
}
exports.getOrderTranslation = getOrderTranslation;
//# sourceMappingURL=order.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/order/order.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var invoice_service_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
/**
 * Created by a619678 on 23. 5. 2017.
 */
var OrderService = (function () {
    function OrderService(invoiceSrv, usrService, restSrv) {
        var _this = this;
        this.invoiceSrv = invoiceSrv;
        this.usrService = usrService;
        this.restSrv = restSrv;
        this.orders = new Array();
        this.constructionTypes = [];
        this.productTypes = [];
        this.professionTypes = [];
        this.states = [];
        this.directions = ['asc', 'desc'];
        this.activeSort = '';
        this.activeDirection = this.directions[0];
        Observable_1.Observable.forkJoin(this.restSrv.getConstructionTypes(), this.restSrv.getProductTypes(), this.restSrv.getProfesionTypes(), this.restSrv.getOrderStates())
            .subscribe(function (results) {
            console.log(results);
            _this.constructionTypes = results[0].map(_this.mapToLabelValue);
            _this.productTypes = results[1].map(_this.mapToLabelValue);
            _this.professionTypes = results[2].map(_this.mapToLabelValue);
            _this.states = results[3];
            console.log('states: ' + _this.states);
        }, function (error) {
            console.log(error);
        });
    }
    OrderService.prototype.mapToLabelValue = function (item) {
        item.value = item.id;
        item.label = item.name;
        return item;
    };
    OrderService.prototype.assignOrderToCurrentUser = function (orderId) {
        //TODO
        console.log('todo, patch or smthing');
    };
    OrderService.prototype.setOrders = function (orders) {
        this.orders = orders;
    };
    OrderService.prototype.setAsignedTo = function (order, id) {
        return this.restSrv.patchOrder(order, id);
    };
    OrderService.prototype.getCachedOrders = function () {
        return this.orders;
    };
    OrderService.prototype.getOrdersByClientId = function (clientId) {
        var orders = this.orders.filter(function (order) {
            console.log(order.mainContact.id);
            if (order.mainContact) {
                return (order.mainContact.id == clientId);
            }
            else
                return false;
        });
        return orders;
    };
    OrderService.prototype.getOrders = function (page, pageSize, sort, sortOrientation, filterType, filter) {
        if (sort === void 0) { sort = null; }
        if (sortOrientation === void 0) { sortOrientation = null; }
        if (filterType === void 0) { filterType = null; }
        if (filter === void 0) { filter = null; }
        return this.restSrv.getOrders(page, pageSize, sort, sortOrientation, filterType, filter, this.usrService.isDealer());
    };
    OrderService.prototype.getOrder = function (orderId) {
        return this.restSrv.getOrder(orderId);
    };
    OrderService.prototype.createOrder = function (order) {
        return this.restSrv.createOrder(order);
    };
    OrderService.prototype.addFilesToOrder = function (orderId, files) {
        return this.restSrv.addFilesToOrder(orderId, files);
    };
    OrderService.prototype.removeFile = function (fileId) {
        return this.restSrv.removeFile(fileId);
    };
    OrderService.prototype.patchOrder = function (order, id) {
        return this.restSrv.patchOrder(order, id);
    };
    OrderService.prototype.getCustomersByEmail = function (searchString, users) {
        return users.filter(function (user) { return (user.mainContact.email.indexOf(searchString) > -1) ||
            (user.mainContact.surname.indexOf(searchString) > -1) ||
            (user.mainContact.name.indexOf(searchString) > -1); });
    };
    OrderService.prototype.updateOrder = function (order) {
        return this.restSrv.updateOrder(order);
    };
    return OrderService;
}());
OrderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof invoice_service_1.InvoiceService !== "undefined" && invoice_service_1.InvoiceService) === "function" && _a || Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _b || Object, typeof (_c = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _c || Object])
], OrderService);
exports.OrderService = OrderService;
var _a, _b, _c;
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/page-num/page-num.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/page-num/page-num.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-hover\">\n    <tbody>\n    <tr>\n        <th>Email</th>\n        <th>Meno</th>\n        <th>Priezvisko</th>\n        <th>Telefón</th>\n        <th>Odstrániť</th>\n    </tr>\n\n    <tr *ngFor=\"let customer of customers\" [routerLink]=\"[ '/user/', customer.id ]\">\n        <td>{{customer.mainContact.email}}</td>\n        <td>{{customer.mainContact.name}}</td>\n        <td><a>{{customer.mainContact.surname}}</a></td>\n        <td>{{customer.mainContact.telephone}}</td>\n        <td><span class=\"remove glyphicon glyphicon-remove-sign\" (click)=\"remove(customer)\"></span></td>\n    </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/pages/page-num/page-num.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var breadcrumb_service_1 = __webpack_require__("../../../../../src/app/services/breadcrumb.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/pages/users/user.service.ts");
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var user_service_2 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var PageNumComponent = (function () {
    function PageNumComponent(route, breadServ, customerServ, notificationServ, userServ) {
        this.route = route;
        this.breadServ = breadServ;
        this.customerServ = customerServ;
        this.notificationServ = notificationServ;
        this.userServ = userServ;
        this.id = 0;
        // TODO
    }
    PageNumComponent.prototype.ngOnInit = function () {
        var _this = this;
        // when calling routes change
        var idkey = 'id';
        this.sub = this.route.params.subscribe(function (data) {
            _this.id = data[idkey];
            // changing header
            _this.breadServ.set({
                description: 'This is our ' + _this.id + ' page',
                display: true,
                levels: [
                    {
                        icon: 'dashboard',
                        link: ['/'],
                        title: 'Home'
                    },
                    {
                        icon: 'clock-o',
                        link: ['/page/' + _this.id],
                        title: 'Page ' + _this.id
                    }
                ]
            });
        });
        this.customerServ.getCustomers().subscribe(function (customers) { _this.customers = customers; });
    };
    PageNumComponent.prototype.remove = function (customer) {
        var _this = this;
        console.log("removing: ");
        console.log(customer);
        this.customerServ.removeCustomer(customer.id).subscribe(function (result) {
            _this.customers.splice(_this.customers.indexOf(customer), 1);
            _this.notificationServ.success("Customer " + customer.mainContact.name + " was removed", "Customer");
        }, function (error) {
            if (error.status === 401) {
                _this.userServ.logout();
            }
            _this.notificationServ.error("Customer " + customer.mainContact.name + " was not removed", "Customer");
        });
    };
    PageNumComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.breadServ.clear();
        this.route = null;
    };
    return PageNumComponent;
}());
PageNumComponent = __decorate([
    core_1.Component({
        selector: 'app-page-num',
        styles: [__webpack_require__("../../../../../src/app/pages/page-num/page-num.component.css")],
        template: __webpack_require__("../../../../../src/app/pages/page-num/page-num.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof breadcrumb_service_1.BreadcrumbService !== "undefined" && breadcrumb_service_1.BreadcrumbService) === "function" && _b || Object, typeof (_c = typeof user_service_1.CustomerService !== "undefined" && user_service_1.CustomerService) === "function" && _c || Object, typeof (_d = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _d || Object, typeof (_e = typeof user_service_2.UserService !== "undefined" && user_service_2.UserService) === "function" && _e || Object])
], PageNumComponent);
exports.PageNumComponent = PageNumComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=page-num.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"updateUser(userUpdateForm)\" [formGroup]=\"userUpdateForm\">\n  <h3>Profil</h3>\n  <div class=\"create-form form-group\">\n    <i>Meno: </i>\n    <input type=\"email\" class=\"form-control\" formControlName=\"name\"/>\n    <i>Priezvisko: </i>\n    <input type=\"email\" class=\"form-control\" formControlName=\"surname\"/>\n    <i>Email: </i>\n    <input type=\"email\" class=\"form-control\" formControlName=\"email\"/>\n\n    <button type=\"submit\" class=\"btn btn-warning\">Uprav</button>\n    <button class=\"btn btn-danger\" (click)=\"resetPassword()\">Reset hesla</button>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/pages/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var ProfileComponent = (function () {
    function ProfileComponent(_userSrv, fb, _notificationSrv) {
        this._userSrv = _userSrv;
        this.fb = fb;
        this._notificationSrv = _notificationSrv;
        this.createForm();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var user = this._userSrv.getLoggedInUser();
        this.userUpdateForm.patchValue(user);
    };
    ProfileComponent.prototype.createForm = function () {
        this.userUpdateForm = this.fb.group({
            'name': [],
            'surname': [],
            'email': [{ value: '', disabled: true }],
        });
    };
    ProfileComponent.prototype.resetPassword = function () {
        var _this = this;
        this._userSrv.resetPassword(this._userSrv.getLoggedInUser().email).subscribe(function (result) {
            _this._notificationSrv.success('Reset hesla', 'Bol uspesne vykonany');
        }, function (error) {
            _this._notificationSrv.error('Reset hesla', 'Nastal problem pri resete hesla');
        });
    };
    ProfileComponent.prototype.updateUser = function (_a) {
        var _this = this;
        var value = _a.value;
        console.log('submitting');
        console.log(value);
        this._userSrv.updateCurrentUser(value).subscribe(function (result) {
            var currentUser = _this._userSrv.getLoggedInUser();
            currentUser.name = value.name;
            currentUser.surname = value.surname;
            _this._userSrv.setCurrentUser(currentUser);
            _this._notificationSrv.success('Boli uspesne zmenene', 'Udaje');
        }, function (error) {
            console.log('error');
            _this._notificationSrv.error('Neboli uspesne zmenene', 'Udaje');
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/pages/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _c || Object])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"hold-transition register-page\">\n<div class=\"register-box\">\n  <div class=\"register-logo\">\n    <a href=\"../../index2.html\"><b>Admin</b>LTE</a>\n  </div>\n\n  <div class=\"register-box-body\">\n    <p class=\"login-box-msg\">Register a new membership</p>\n\n    <form action=\"../../index.html\" method=\"post\">\n      <div class=\"form-group has-feedback\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Full name\">\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n        <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Retype password\">\n        <span class=\"glyphicon glyphicon-log-in form-control-feedback\"></span>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <div class=\"checkbox icheck\">\n            <label>\n              <input type=\"checkbox\"> I agree to the <a href=\"#\">terms</a>\n            </label>\n          </div>\n        </div>\n        <!-- /.col -->\n        <div class=\"col-xs-4\">\n          <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\">Register</button>\n        </div>\n        <!-- /.col -->\n      </div>\n    </form>\n\n    <div class=\"social-auth-links text-center\">\n      <p>- OR -</p>\n      <a href=\"#\" class=\"btn btn-block btn-social btn-facebook btn-flat\"><i class=\"fa fa-facebook\"></i> Sign up using\n        Facebook</a>\n      <a href=\"#\" class=\"btn btn-block btn-social btn-google btn-flat\"><i class=\"fa fa-google-plus\"></i> Sign up using\n        Google+</a>\n    </div>\n\n    <a routerLink=\"/login\" class=\"text-center\">I already have a membership</a>\n  </div>\n  <!-- /.form-box -->\n</div>\n<!-- /.register-box -->\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var RegisterComponent = (function () {
    function RegisterComponent() {
        // TODO
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // TODO
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/pages/register/register.component.html")
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/statistics/statistics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".statistics {\n    text-align:center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/statistics/statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Statistiky</h2>\n<input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\">\n<md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n<md-datepicker #picker></md-datepicker>\n<ng-container *ngIf=\"showChart && showOrderChart\">\n\n    <div class=\"statistics\">\n        <div class=\"col-lg-6\">\n            <h3>Faktury</h3>\n            <p-chart type=\"pie\" [data]=\"invoiceData\"></p-chart>\n        </div>\n        <div class=\"col-lg-6\">\n            <h3>Objednavky</h3>\n            <p-chart type=\"pie\" [data]=\"orderData\"></p-chart>\n        </div>\n        <div class=\"col-lg-4\">\n            <p-chart type=\"pie\" [data]=\"data\"></p-chart>\n        </div>\n    </div>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/pages/statistics/statistics.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var order_service_1 = __webpack_require__("../../../../../src/app/pages/order/order.service.ts");
var invoice_service_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.service.ts");
var invoiceStatus_model_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoiceStatus.model.ts");
var order_model_1 = __webpack_require__("../../../../../src/app/pages/order/order.model.ts");
var StatisticsComponent = (function () {
    function StatisticsComponent(_orderSrv, _invoiceSrv) {
        var _this = this;
        this._orderSrv = _orderSrv;
        this._invoiceSrv = _invoiceSrv;
        this.showChart = false;
        this.showOrderChart = false;
        this.hoverBackgroundColor = [
            "#12354d",
            "#4c110c",
            "#4d182f",
            "#4d3f1c",
            "#264f1c"
        ];
        this.backgroundColor = [
            "#36a2eb",
            "#ff3322",
            "#ff6384",
            "#ffce56",
            "#7aff51"
        ];
        this.orderHoverBackgroundColor = [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#7aff51"
        ];
        this.orderBackgroundColor = [
            "#ff6384",
            "#36a2eb",
            "#ffce56",
            "#7aff51"
        ];
        this.minDate = new Date(2017, 5, 10);
        this.maxDate = new Date(2018, 9, 15);
        this.orders$ = _orderSrv.getOrders(1, 10).subscribe(function (result) {
            _this.setupOrderStats(result);
        });
        this.invoices$ = _invoiceSrv.getInvoices(1, 10).subscribe(function (result) {
            _this.setupInvoiceStats(result);
        });
    }
    StatisticsComponent.prototype.setupOrderStats = function (orders) {
        this.orderData = {
            labels: [order_model_1.OrderStats.notAssigned,
                order_model_1.OrderStats.assigned,
                order_model_1.OrderStats.done,
                order_model_1.OrderStats.expeded
            ],
            datasets: [
                {
                    data: [orders.filter(function (order) { return order.state === order_model_1.OrderStats.notAssigned; }).length || orders.length,
                        orders.filter(function (order) { return order.state === order_model_1.OrderStats.assigned; }).length,
                        orders.filter(function (order) { return order.state === order_model_1.OrderStats.done; }).length,
                        orders.filter(function (order) { return order.state === order_model_1.OrderStats.expeded; }).length],
                    hoverBackgroundColor: this.orderHoverBackgroundColor,
                    backgroundColor: this.orderBackgroundColor
                }
            ]
        };
        this.showOrderChart = true;
    };
    StatisticsComponent.prototype.setupInvoiceStats = function (invoices) {
        var created = this.filterInvoices(invoices, invoiceStatus_model_1.InvoiceStatus.created).length;
        var canceled = this.filterInvoices(invoices, invoiceStatus_model_1.InvoiceStatus.canceled).length;
        var expired = this.filterInvoices(invoices, invoiceStatus_model_1.InvoiceStatus.expired).length;
        var latePay = this.filterInvoices(invoices, invoiceStatus_model_1.InvoiceStatus.latePay).length;
        var paid = this.filterInvoices(invoices, invoiceStatus_model_1.InvoiceStatus.payed).length;
        this.invoiceData = {
            labels: [this.getInvoiceStatusText(invoiceStatus_model_1.InvoiceStatus.created),
                this.getInvoiceStatusText(invoiceStatus_model_1.InvoiceStatus.canceled),
                this.getInvoiceStatusText(invoiceStatus_model_1.InvoiceStatus.expired),
                this.getInvoiceStatusText(invoiceStatus_model_1.InvoiceStatus.latePay),
                this.getInvoiceStatusText(invoiceStatus_model_1.InvoiceStatus.payed)],
            datasets: [
                {
                    data: [created, canceled, expired, latePay, paid],
                    hoverBackgroundColor: this.hoverBackgroundColor,
                    backgroundColor: this.backgroundColor
                }
            ]
        };
        this.showChart = true;
    };
    StatisticsComponent.prototype.getInvoiceStatusText = function (status) {
        return invoiceStatus_model_1.getInvoiceStatusFromEnum(status);
    };
    StatisticsComponent.prototype.filterInvoices = function (invoices, type) {
        return invoices.filter(function (invoice) { return invoice.status === invoiceStatus_model_1.invoiceStatuses[type]; });
    };
    StatisticsComponent.prototype.ngOnInit = function () {
    };
    StatisticsComponent.prototype.ngOnDestroy = function () {
        this.invoices$.unsubscribe();
        this.orders$.unsubscribe();
    };
    return StatisticsComponent;
}());
StatisticsComponent = __decorate([
    core_1.Component({
        selector: 'app-statistics',
        template: __webpack_require__("../../../../../src/app/pages/statistics/statistics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/statistics/statistics.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" && _a || Object, typeof (_b = typeof invoice_service_1.InvoiceService !== "undefined" && invoice_service_1.InvoiceService) === "function" && _b || Object])
], StatisticsComponent);
exports.StatisticsComponent = StatisticsComponent;
var _a, _b;
//# sourceMappingURL=statistics.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/users/user-view/user-resolver.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = __webpack_require__("../../../../../src/app/pages/users/user.service.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
/**
 * Created by a619678 on 23. 5. 2017.
 */
var UserResolve = (function () {
    function UserResolve(userSrv, _restService) {
        this.userSrv = userSrv;
        this._restService = _restService;
    }
    UserResolve.prototype.resolve = function (route) {
        var userId = route.params['userId'];
        if (!userId)
            return null;
        console.log("getting user by id " + userId);
        var foundUser = this._restService.getCustomers().map(function (customers) { return customers.find(function (customer) { return customer.id == userId; }); });
        return foundUser;
    };
    return UserResolve;
}());
UserResolve = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.CustomerService !== "undefined" && user_service_1.CustomerService) === "function" && _a || Object, typeof (_b = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _b || Object])
], UserResolve);
exports.UserResolve = UserResolve;
var _a, _b;
//# sourceMappingURL=user-resolver.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/users/user-view/user-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".order-section{\n    margin-top:10px;\n}\n\n.client-information{\n    margin-top:20px;\n}\n\n.client-information button{\n    width:100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/users/user-view/user-view.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"wasUserLoaded\">\n    <h4>{{userInformation?.mainContact.name}} {{userInformation?.mainContact.surname}}</h4>\n    <div class=\"row\">\n        <div class=\"col-lg-4\">\n            Meno: <i>{{userInformation?.mainContact.name}}</i>\n        </div>\n        <div class=\"col-lg-4\">\n            Priezvisko: <i>{{userInformation?.mainContact.surname}}</i>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-lg-4\">\n            Email: <i><a [href]=\"'mailto:'+ userInformation?.mainContact.email\">\n            {{userInformation?.mainContact.email}}</a></i>\n        </div>\n        <div class=\"col-lg-4\">\n            Telefón: <i>{{userInformation?.mainContact.telephone}}</i>\n        </div>\n    </div>\n\n    <div class=\"client-information\">\n        <hr>\n\n        <div class=\"card card-block card-header\">\n            <div class=\"form-group\">\n                <label for=\"comment\">Dodatočné informácie <a (click)=\"isCollapsed = !isCollapsed\">{{getButtonMessage()}}\n                </a>: </label>\n                <div [collapse]=\"isCollapsed\">\n                    <textarea class=\"form-control\" rows=\"5\" id=\"comment\"\n                              [(ngModel)]=\"userInformation.information\"></textarea>\n                    <button class=\"btn btn-success\" (click)=\"updateInformation()\">Ulož</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"order-section\">\n        <order [filterType]=\"'customerId'\" [filter]=\"userInformation.id\"></order>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"!wasUserLoaded\">\n    <h4>User was still not loaded, or doesnt exist</h4>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/pages/users/user-view/user-view.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_model_1 = __webpack_require__("../../../../../src/app/pages/users/user.model.ts");
var order_service_1 = __webpack_require__("../../../../../src/app/pages/order/order.service.ts");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/pages/users/user.service.ts");
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/**
 * Created by a619678 on 23. 5. 2017.
 */
var UserViewComponent = (function () {
    function UserViewComponent(activatedRoute, router, orderServ, restServ, userSrv, _notificationService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.orderServ = orderServ;
        this.restServ = restServ;
        this.userSrv = userSrv;
        this._notificationService = _notificationService;
        this.buttonText = ['Zobraziť dodatočné informácie', 'Skryť dodatočné informácie'];
        this.isCollapsed = false;
        this.wasUserLoaded = false;
        this.areOrdersLoaded = false;
    }
    UserViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.userInformation = data['userInformation'];
            if (!_this.userInformation) {
                console.log("no user");
            }
            else {
                _this.wasUserLoaded = true;
            }
        });
    };
    UserViewComponent.prototype.getButtonMessage = function () {
        return this.buttonText[this.isCollapsed ? 0 : 1];
    };
    UserViewComponent.prototype.updateInformation = function () {
        var _this = this;
        var idless = new user_model_1.Customer();
        Object.assign(idless, this.userInformation);
        delete idless.id;
        delete idless.mainContact.id;
        console.log("saving: " + this.userInformation.information);
        this.restServ.setCustomerInformation(this.userInformation.id, idless).subscribe(function (result) {
            _this._notificationService.success('udaje boli aktualizovane', 'Uzivatel');
        }, function (error) {
            _this._notificationService.error('udaje neboli aktualizovane', 'Uzivatel');
        });
    };
    return UserViewComponent;
}());
UserViewComponent = __decorate([
    core_1.Component({
        selector: 'user-view',
        styles: [__webpack_require__("../../../../../src/app/pages/users/user-view/user-view.component.css")],
        template: __webpack_require__("../../../../../src/app/pages/users/user-view/user-view.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" && _c || Object, typeof (_d = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _d || Object, typeof (_e = typeof user_service_1.CustomerService !== "undefined" && user_service_1.CustomerService) === "function" && _e || Object, typeof (_f = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _f || Object])
], UserViewComponent);
exports.UserViewComponent = UserViewComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=user-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/users/user.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by a619678 on 23. 5. 2017.
 */
var Customer = (function () {
    function Customer() {
    }
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/users/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var user_model_1 = __webpack_require__("../../../../../src/app/pages/users/user.model.ts");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
/**
 * Created by a619678 on 23. 5. 2017.
 */
var CustomerService = (function () {
    // TODO : invoice service wont inject
    function CustomerService(restServ) {
        this.restServ = restServ;
        this.customers = new Array();
    }
    CustomerService.prototype.getCustomers = function () {
        return this.restServ.getCustomers();
    };
    CustomerService.prototype.removeCustomer = function (customer) {
        return this.restServ.removeCustomer(customer);
    };
    CustomerService.prototype.setCustomers = function (customers) {
        this.customers = customers;
    };
    // setFakeData(){
    //     for (let i:number=0;i<10;i++){
    //         let user : Customer = new Customer();
    //         user.mainContact = new Contact();
    //
    //         user.id = i;
    //         user.mainContact.name = this.names[Math.floor(Math.random()*this.names.length)];
    //         user.mainContact.email = "michalsevcikk"+i+"@gmail.com";
    //         user.mainContact.telephone = "091232123";
    //         user.mainContact.surname = this.surnames[Math.floor(Math.random()*this.surnames.length)];
    //
    //         this.users.push(user);
    //     }
    // }
    CustomerService.prototype.getUserByMail = function (email) {
        var usr = this.customers.find(function (user) { return user.mainContact.email == email; });
        return Observable_1.Observable.of(usr);
    };
    CustomerService.prototype.getUserById = function (userId) {
        console.log("getting user");
        console.log(this.customers);
        var usr = this.customers.find(function (user) { return user.id == userId; });
        if (!usr) {
            usr = new user_model_1.Customer();
            usr.id = userId;
        }
        return usr;
    };
    CustomerService.prototype.updateInformation = function (userId, information) {
        this.getUserById(userId).information = information;
    };
    return CustomerService;
}());
CustomerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _a || Object])
], CustomerService);
exports.CustomerService = CustomerService;
var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/breadcrumb.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var BreadcrumbService = (function () {
    function BreadcrumbService() {
        this.initialData = {
            description: '',
            display: false,
            header: '',
            levels: [
                {
                    icon: 'clock-o',
                    link: ['/'],
                    title: 'Default'
                }
            ]
        };
        this.current = new rxjs_1.ReplaySubject(1);
        this.clear();
    }
    BreadcrumbService.prototype.set = function (data) {
        this.current.next(data);
    };
    BreadcrumbService.prototype.clear = function () {
        this.set(this.initialData);
    };
    return BreadcrumbService;
}());
BreadcrumbService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], BreadcrumbService);
exports.BreadcrumbService = BreadcrumbService;
//# sourceMappingURL=breadcrumb.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/configuration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ReplaySubject_1 = __webpack_require__("../../../../rxjs/ReplaySubject.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
/**
 * Created by a619678 on 6. 6. 2017.
 */
var ConfigurationService = (function () {
    function ConfigurationService() {
        this.currentCompany = new ReplaySubject_1.ReplaySubject();
        this.companies = new Array();
    }
    ConfigurationService.prototype.removeCompany = function (company) {
        this.companies.splice(this.companies.indexOf(company), 1);
        return Observable_1.Observable.of(this.companies);
    };
    // public getComapnies(): Observable<Company[]> {
    // if (this.customer.length < 1) {
    //     let company1 = new Company();
    //     let company2 = new Company();
    //
    //     company1.email = "podpora@energetickycertifikat.net";
    //     company1.name = "Ing. Jozef Kadlečík - Energetickycertifikat.net";
    //     company1.street = "M.R. Štefánika 3936/68";
    //     company1.city = "Hlohovec, 92001 SK";
    //     company1.accountNumber = "2312312312";
    //     company1.IBAN = "SK 932 1932 9129 129 93120";
    //     company1.SWIFT = "FIOZSKBAXXX";
    //     company1.accountNumber = "2189318293219/3213";
    //
    //     company2.email = "druha@firma.net";
    //     company2.name = "Ing. Stanislav Kadlečík - Firma.net";
    //     company2.street = "M.R. Štefánika 3936/68";
    //     company2.city = "Hlohovec, 92001 SK";
    //     company2.accountNumber = "2312312312";
    //     company2.IBAN = "SK 112 1222 3333 129 1120";
    //     company2.SWIFT = "FIOZSKBAXXX";
    //     company2.accountNumber = "1231213219/3213";
    //
    //     this.customer.push(company1);
    //     this.customer.push(company2);
    // }
    //
    // this.setCurrentCompany(this.customer[0]);
    // return Observable.of(this.customer);
    // }
    ConfigurationService.prototype.setCurrentCompany = function (company) {
        this.currentCompany.next(company);
    };
    ConfigurationService.prototype.isMobile = function () {
        if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
            return true;
        }
        else {
            return false;
        }
    };
    return ConfigurationService;
}());
ConfigurationService = __decorate([
    core_1.Injectable()
], ConfigurationService);
exports.ConfigurationService = ConfigurationService;
//# sourceMappingURL=configuration.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var CanActivateGuard = (function () {
    function CanActivateGuard(router, user) {
        var _this = this;
        this.router = router;
        this.user = user;
        this.connected = false;
        this.user.setCurrentUser(user.getLoggedInUser());
        if (user.getLoggedInUser()) {
            this.user.currentUser.subscribe(function (user) {
                _this.connected = user.connected;
            });
        }
    }
    CanActivateGuard.prototype.canActivate = function () {
        // test here if you user is logged
        if (!this.connected) {
            this.router.navigate(['login']);
        }
        else {
            return true;
        }
    };
    return CanActivateGuard;
}());
CanActivateGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _b || Object])
], CanActivateGuard);
exports.CanActivateGuard = CanActivateGuard;
var _a, _b;
//# sourceMappingURL=guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/interceptor-service.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var InterceptorService = (function () {
    function InterceptorService() {
        this.accessToken = localStorage.getItem('accessToken');
    }
    InterceptorService.prototype.intercept = function (req, next) {
        this.accessToken = localStorage.getItem('accessToken');
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + this.accessToken
            }
        });
        return next.handle(req);
    };
    return InterceptorService;
}());
InterceptorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], InterceptorService);
exports.InterceptorService = InterceptorService;
//# sourceMappingURL=interceptor-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/logger.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var translate_service_1 = __webpack_require__("../../../../../src/app/services/translate.service.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var LoggerService = (function () {
    function LoggerService(translate) {
        this.translate = translate;
        // TODO
    }
    LoggerService.prototype.log = function (component, msg, i18nRef, data) {
        if (!environment_1.environment.silent) {
            if (i18nRef) {
                var params = {};
                if (data) {
                    params = (data[0]) ? { 0: data[0] } : params;
                    params = (data[1]) ? { 0: data[0], 1: data[1] } : params;
                    params = (data[2]) ? { 0: data[0], 1: data[1], 2: data[2] } : params;
                }
                this.translate.getTranslate().get(i18nRef, params).subscribe(function (res) {
                    console.log(component + ': ' + res);
                });
            }
            else {
                console.log(component + ': ' + msg);
            }
        }
    };
    return LoggerService;
}());
LoggerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof translate_service_1.AdminLTETranslateService !== "undefined" && translate_service_1.AdminLTETranslateService) === "function" && _a || Object])
], LoggerService);
exports.LoggerService = LoggerService;
var _a;
//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/messages.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Rx_1 = __webpack_require__("../../../../rxjs/Rx.js");
var initialMessages = [];
var MessagesService = (function () {
    // public markThreadAsRead: Subject<any> = new Subject<any>();
    function MessagesService() {
        var _this = this;
        this.messagesList = [];
        // a stream that publishes new messages only once
        this.newMessages = new Rx_1.Subject();
        // `messages` is a stream that emits an array of the most up to date messages
        this.messages = new Rx_1.ReplaySubject(1);
        // `updates` receives _operations_ to be applied to our `messages`
        // it's a way we can perform changes on *all* messages (that are currently
        // stored in `messages`)
        this.updates = new Rx_1.Subject();
        // action streams
        this.create = new Rx_1.Subject();
        // recois des operation, et les fais sur la liste interne, puis diffuse le resultat sur messages
        this.updates.subscribe(function (ope) {
            _this.messagesList = ope(_this.messagesList);
            console.log(_this.messagesList);
            _this.messages.next(_this.messagesList);
        });
        this.newMessages
            .map(function (message) {
            return function (messages) {
                return messages.concat(message);
            };
        })
            .subscribe(this.updates);
    }
    // an imperative function call to this action stream
    MessagesService.prototype.addMessage = function (message) {
        this.newMessages.next(message);
    };
    return MessagesService;
}());
MessagesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/notification.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var angular2_toaster_1 = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var NotificationService = (function () {
    function NotificationService(toastr) {
        var _this = this;
        this.toastr = toastr;
        this.success = function (body, title) {
            if (title === void 0) { title = 'Operation successful'; }
            _this.toastr.pop({ body: body, title: title, type: 'success' });
        };
        this.error = function (body, title) {
            if (title === void 0) { title = 'An error occured'; }
            _this.toastr.pop({ body: body, title: title, type: 'error' });
        };
        this.warning = function (body, title) {
            if (title === void 0) { title = 'Something went wrong'; }
            _this.toastr.pop({ body: body, title: title, type: 'warning' });
        };
    }
    return NotificationService;
}());
NotificationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof angular2_toaster_1.ToasterService !== "undefined" && angular2_toaster_1.ToasterService) === "function" && _a || Object])
], NotificationService);
exports.NotificationService = NotificationService;
var _a;
//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/rest.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var app_constants_1 = __webpack_require__("../../../../../src/app/app.constants.ts");
var company_model_1 = __webpack_require__("../../../../../src/app/models/company-model.ts");
var ReplaySubject_1 = __webpack_require__("../../../../rxjs/ReplaySubject.js");
var order_model_1 = __webpack_require__("../../../../../src/app/pages/order/order.model.ts");
var http_2 = __webpack_require__("../../../common/@angular/common/http.es5.js");
var RestService = (function () {
    function RestService(http, config) {
        this.http = http;
        this.config = config;
        this.currentInvoices = new ReplaySubject_1.ReplaySubject();
        this.modelName = 'to-configure';
        this.accessToken = localStorage.getItem('accessToken');
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append("Authorization", "Bearer " + this.accessToken);
    }
    RestService.prototype.authenticate = function (email, password) {
        var data = {
            grant_type: "password",
            client_id: "1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4",
            client_secret: "4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k",
            username: email,
            password: password
        };
        return this.http.post(this.config.server + this.config.authUrl, data);
    };
    RestService.prototype.post = function (link) {
        return this.http.post(link, {});
    };
    RestService.prototype.get = function (link) {
        return this.http.get(link);
    };
    RestService.prototype.setAccessToken = function (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        console.log("set accessToken " + localStorage.getItem('accessToken'));
    };
    RestService.prototype.getUser = function () {
        return this.http.get(this.config.server + this.config.userApi);
    };
    RestService.prototype.updateActualUser = function (user) {
        return this.http.put(this.config.server + this.config.userApi, user);
    };
    RestService.prototype.updateUser = function (user, userId) {
        return this.http.put(this.config.server + this.config.userApi + ("/" + userId), user);
    };
    RestService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.config.server + this.config.userApi + ("/" + userId));
    };
    RestService.prototype.getAllUsers = function () {
        return this.http.get(this.config.server + this.config.userApi + '/list');
    };
    RestService.prototype.getUserRoles = function () {
        return this.http.get(this.config.server + this.config.rolesApi);
    };
    RestService.prototype.registerUser = function (user) {
        return this.http.post(this.config.server + this.config.userApi, user);
    };
    // ACTIONS
    RestService.prototype.payInvoice = function (invoice) {
        return this.http.post(this.config.server + this.config.invoicesApi + "/" + invoice.id + "/actions/pay", null);
    };
    RestService.prototype.cancelInvoice = function (invoice) {
        return this.http.post(this.config.server + this.config.invoicesApi + "/" + invoice.id + "/actions/cancel", null);
    };
    RestService.prototype.generatePdfOfInvoice = function (invoice) {
        return this.http.post(this.config.server + this.config.invoicesApi + "/" + invoice.id + "/actions/generatePdf", null);
    };
    RestService.prototype.sendEmailForInvoice = function (invoice) {
        return this.http.post(this.config.server + this.config.invoicesApi + "/" + invoice.id + "/actions/sendEmail", null);
    };
    RestService.prototype.resetPassword = function (email) {
        return this.http.post(this.config.server + ("api/users/" + email + "/reset"), {});
    };
    // END OF ACTIONS
    RestService.prototype.getCompanyPermissions = function (companyId) {
        return this.http.get(this.config.server + "api/invoices/" + companyId + "/action");
    };
    RestService.prototype.getEmails = function () {
        console.log('getting emails');
        return this.http.get(this.config.server + "api/email/text");
    };
    RestService.prototype.createEmail = function (email) {
        return this.http.post(this.config.server + "api/emails/texts", email);
    };
    RestService.prototype.updateEmail = function (id, email) {
        return this.http.put(this.config.server + ("api/emails/" + id + "/text"), email);
    };
    RestService.prototype.deleteEmail = function (id) {
        return this.http.delete(this.config.server + ("api/emails/" + id + "/text"));
    };
    /*Companies API*/
    RestService.prototype.getCompanies = function () {
        return this.http.get(this.config.server + this.config.companiesApi);
    };
    RestService.prototype.updateCompany = function (company, id) {
        var companyWithoutId = new company_model_1.Company();
        Object.assign(companyWithoutId, company);
        console.log(companyWithoutId);
        delete companyWithoutId.id;
        return this.http.put(this.config.server + this.config.companiesApi + ("/" + id), companyWithoutId);
    };
    RestService.prototype.patchCompany = function (company, id) {
        return this.http.patch(this.config.server + this.config.companiesApi + ("/" + id), company);
    };
    RestService.prototype.addComapny = function (company) {
        return this.http.post(this.config.server + this.config.companiesApi, company);
    };
    RestService.prototype.removeCompany = function (companyId) {
        return this.http.delete(this.config.server + this.config.companiesApi + "/" + companyId);
    };
    /*Invoice API*/
    RestService.prototype.getNextInvoiceNumber = function (companyId) {
        return this.http.get(this.config.server + ("api/invoices/" + companyId + "/next-number"));
    };
    RestService.prototype.getInvoices = function (page, pageSize, sort, sortDirection, filterType, filter, isDealer) {
        var query = (!!sort) ? "&orderBy[]=" + sort + "=" + sortDirection : '';
        query += (!!filter) ? "&filters[]=" + filterType + "=" + filter : '';
        console.log('query of invoices ' + query);
        return this.http.get(this.config.server + this.config.invoicesApi + '?page=' + page + '&pageSize=' + pageSize + query);
    };
    RestService.prototype.getInvoice = function (id) {
        return this.http.get(this.config.server + this.config.invoicesApi + ("/" + id));
    };
    RestService.prototype.getOrders = function (page, pageSize, sort, sortDirection, filterType, filter, isDealer) {
        console.log(sortDirection);
        var query = (!!sort) ? "&orderBy[]=" + sort + "=" + sortDirection : '';
        query += (!!filter) ? "&filters[]=" + filterType + "=" + filter : '';
        return this.http.get(this.config.server + this.config.ordersApi + '?page=' + page + '&pageSize=' + pageSize + query);
    };
    RestService.prototype.getOrder = function (orderId) {
        return this.http.get(this.config.server + this.config.ordersApi + ("/" + orderId));
    };
    RestService.prototype.createOrder = function (order) {
        return this.http.post(this.config.server + this.config.ordersApi + '-dealer', order);
    };
    RestService.prototype.updateOrder = function (order) {
        var orderWithoutId = new order_model_1.Order();
        Object.assign(orderWithoutId, order);
        delete orderWithoutId.id;
        return this.http.put(this.config.server + this.config.ordersApi + ("/" + order.id), orderWithoutId);
    };
    RestService.prototype.patchOrder = function (order, id) {
        return this.http.patch(this.config.server + this.config.ordersApi + ("/" + id), order);
    };
    RestService.prototype.addInvoice = function (invoice) {
        return this.http.post(this.config.server + this.config.invoicesApi, invoice);
    };
    RestService.prototype.getCustomers = function () {
        return this.http.get(this.config.server + this.config.customerApi);
    };
    RestService.prototype.removeCustomer = function (customerId) {
        return this.http.delete(this.config.server + this.config.customerApi + "/" + customerId);
    };
    RestService.prototype.updateCustomer = function (customer) {
        return this.http.put(this.config.server + this.config.customerApi + "/" + customer.id, { headers: this.headers });
    };
    RestService.prototype.setCustomerInformation = function (customerId, customer) {
        return this.http.put(this.config.server + this.config.customerApi + "/" + customerId, customer);
    };
    RestService.prototype.extractData = function (res) {
        return res.text() ? res.json() : {};
    };
    RestService.prototype.createCustomer = function (customer) {
        return this.http.post(this.config.server + this.config.customerApi, customer);
    };
    RestService.prototype.getConstructionTypes = function () {
        return this.http.get(this.config.server + 'api/construction-type/');
    };
    RestService.prototype.getProductTypes = function () {
        return this.http.get(this.config.server + 'api/product-type/');
    };
    RestService.prototype.getProfesionTypes = function () {
        return this.http.get(this.config.server + 'api/profession-type/');
    };
    RestService.prototype.addFilesToOrder = function (orderId, files) {
        return this.http.patch(this.config.server + 'api/orders/' + orderId, files, {});
    };
    RestService.prototype.removeFile = function (fileId) {
        console.log('TODO: removing: ' + fileId);
        return this.http.delete(this.config.server + 'api/items/' + ("" + fileId));
    };
    RestService.prototype.getOrderStates = function () {
        return this.http.get(this.config.server + 'api/orders/states');
    };
    RestService.prototype.addItem = function (item) {
        return this.http.post(this.config.server + 'api/items', item);
    };
    RestService.prototype.deleteItem = function (id) {
        return this.http.delete(this.config.server + ("api/items/" + id));
    };
    RestService.prototype.updateItem = function (item, id) {
        return this.http.put(this.config.server + ("api/items/" + id), item);
    };
    RestService.prototype.getItems = function () {
        return this.http.get(this.config.server + "api/items");
    };
    RestService.prototype.getCustomersByEmail = function (searchString, users) {
        return users.filter(function (user) { return (user.mainContact.email.indexOf(searchString) > -1) ||
            (user.mainContact.surname.indexOf(searchString) > -1) ||
            (user.mainContact.name.indexOf(searchString) > -1); });
    };
    RestService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return RestService;
}());
RestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_2.HttpClient !== "undefined" && http_2.HttpClient) === "function" && _a || Object, typeof (_b = typeof app_constants_1.Configuration !== "undefined" && app_constants_1.Configuration) === "function" && _b || Object])
], RestService);
exports.RestService = RestService;
var _a, _b;
//# sourceMappingURL=rest.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/translate.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var core_2 = __webpack_require__("../../../../@ngx-translate/core/index.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var langs = ['en', 'fr', 'ru', 'he', 'zh'];
var langmatch = /en|fr|ru|he|zh/;
var AdminLTETranslateService = (function () {
    function AdminLTETranslateService(userServ, translate) {
        // translate.addLangs( langs );
        // // this language will be used as a fallback when a translation isn't found in the current language
        // translate.setDefaultLang( 'en' );
        this.userServ = userServ;
        this.translate = translate;
        this.lang = 'us';
        // this.userServ.currentUser.subscribe(( user: User ) => {
        //     this.currentUser = user;
        //
        //     // the lang to use, if the lang isn't available, it will use the current loader to get them
        //     let browserLang = this.translate.getBrowserLang();
        //     let browserCultureLang = this.translate.getBrowserCultureLang();
        //     console.log( 'Detected browser language: "' + browserCultureLang + '"' );
        //
        //     // check if current User has a Preferred Language set, and it differs from his browser lang
        //     let useLang = 'en';
        //     let prefLang = ( this.currentUser ) ? this.currentUser.preferredLang : null;
        //     if ( !prefLang ) {
        //         useLang = browserLang.match( langmatch ) ? browserLang : 'en';
        //     } else {
        //         console.log( 'Detected User preferred language: "' + prefLang + '"' );
        //         useLang = prefLang.match( langmatch ) ? prefLang : 'en';
        //     }
        //     this.translate.use( useLang );
        //     console.log( 'Translation language has been set to: "' + useLang + '"' );
        //     // translate.use( 'ru' );
        // });
    }
    AdminLTETranslateService.prototype.ngOnInit = function () {
        // TODO
    };
    AdminLTETranslateService.prototype.getTranslate = function () {
        return this.translate;
    };
    return AdminLTETranslateService;
}());
AdminLTETranslateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof core_2.TranslateService !== "undefined" && core_2.TranslateService) === "function" && _b || Object])
], AdminLTETranslateService);
exports.AdminLTETranslateService = AdminLTETranslateService;
var _a, _b;
//# sourceMappingURL=translate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Rx_1 = __webpack_require__("../../../../rxjs/Rx.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var login_user_model_1 = __webpack_require__("../../../../../src/app/pages/login/login-user.model.ts");
var UserService = (function () {
    function UserService(router, restService) {
        this.router = router;
        this.restService = restService;
        this.currentUser = new Rx_1.ReplaySubject(1);
        this.adminRole = "ROLE_ADMIN";
        this.technician = "ROLE_TECHNICIAN";
        this.dealerRole = "ROLE_DEALER";
        this.roles = [];
        this.getUserRoles();
    }
    UserService.prototype.getUserRoles = function () {
        var _this = this;
        this.restService.getUserRoles().subscribe(function (result) {
            _this.roles = result;
        }, function (error) {
            console.log(error);
        });
    };
    UserService.prototype.resetPassword = function (email) {
        return this.restService.resetPassword(email);
    };
    UserService.prototype.deleteUser = function (user) {
        return this.restService.deleteUser(user);
    };
    UserService.prototype.isDealer = function () {
        var _this = this;
        var dealer = (!!this.getLoggedInUser().roles.find(function (role) { return role === _this.dealerRole; }) && this.getLoggedInUser().roles.length === 1);
        return dealer;
    };
    UserService.prototype.isAdmin = function () {
        var _this = this;
        var admin = (!!this.getLoggedInUser().roles.find(function (role) { return role === _this.adminRole; }));
        return admin;
    };
    UserService.prototype.registerUser = function (user) {
        return this.restService.registerUser(user);
    };
    UserService.prototype.getLoggedInUser = function () {
        var user = new login_user_model_1.LoginUser();
        var userData = JSON.parse(localStorage.getItem('user'));
        Object.assign(user, userData);
        return user;
    };
    UserService.prototype.setCurrentUser = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser.next(user);
    };
    UserService.prototype.logout = function () {
        var user = new login_user_model_1.LoginUser();
        user.connected = false;
        localStorage.removeItem('user');
        this.setCurrentUser(user);
        this.router.navigate(['login']);
    };
    UserService.prototype.getAllUsers = function () {
        return this.restService.getAllUsers();
    };
    UserService.prototype.updateCurrentUser = function (user) {
        return this.restService.updateActualUser(user);
    };
    UserService.prototype.updateUser = function (user, id) {
        return this.restService.updateUser(user, id);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _b || Object])
], UserService);
exports.UserService = UserService;
var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/app-footer/app-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/app-footer/app-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main Footer -->\n<footer class=\"main-footer\">\n\t<!-- To the right -->\n\t<div class=\"pull-right hidden-xs\">Volaco</div>\n\t<!-- Default to the left -->\n\t<strong>Copyright &copy; 2017 <a href=\"#\" routerLink=\"/\">KadSoft Company</a>.\n\t</strong> All rights reserved.\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/app-footer/app-footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppFooterComponent = (function () {
    function AppFooterComponent() {
        // TODO
    }
    return AppFooterComponent;
}());
AppFooterComponent = __decorate([
    core_1.Component({
        selector: 'app-footer',
        styles: [__webpack_require__("../../../../../src/app/widgets/app-footer/app-footer.component.css")],
        template: __webpack_require__("../../../../../src/app/widgets/app-footer/app-footer.component.html")
    }),
    __metadata("design:paramtypes", [])
], AppFooterComponent);
exports.AppFooterComponent = AppFooterComponent;
//# sourceMappingURL=app-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/app-footer/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_footer_component_1 = __webpack_require__("../../../../../src/app/widgets/app-footer/app-footer.component.ts");
exports.AppFooterComponent = app_footer_component_1.AppFooterComponent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/app-header/app-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main Header -->\n<header class=\"main-header\">\n\t<!-- Logo -->\n\t<a href=\"#\" routerLink=\"/\" class=\"logo\"> <!-- mini logo for sidebar mini 50x50 pixels -->\n\t\t<span class=\"logo-mini\"><b>A</b>LT</span> <!-- logo for regular state and mobile devices -->\n\t\t<span class=\"logo-lg\"><b>Kad</b>SOFT</span>\n\t</a>\n\t<!-- Header Navbar -->\n\t<nav class=\"navbar navbar-static-top\" role=\"navigation\">\n\t\t<!-- Sidebar toggle button-->\n\t\t<a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\"\n\t\t\trole=\"button\"> <span class=\"sr-only\">Toggle navigation</span>\n\t\t</a>\n\t\t<!-- Navbar Right Menu -->\n\t\t<div class=\"navbar-custom-menu\">\n\t\t\t<ul class=\"nav navbar-nav\" >\n\t\t\t\t<!-- Messages: style can be found in dropdown.less-->\n\t\t\t\t<!--<li class=\"dropdown messages-menu messagesBox\"></li>-->\n\t\t\t\t<!-- Notifications Menu -->\n\t\t\t\t<!--<li class=\"dropdown notifications-menu notificationsBox\"></li>-->\n\t\t\t\t<!-- Tasks Menu -->\n\t\t\t\t<li class=\"dropdown tasks-menu tasksBox\"></li>\n\t\t\t\t<!-- User Account Menu -->\n\t\t\t\t<li class=\"dropdown user user-menu userBox\"></li>\n\t\t\t\t<!-- Control Sidebar Toggle Button -->\n\t\t\t\t<li><a href=\"#\" data-toggle=\"control-sidebar\"\n\t\t\t\t\tclass=\"toggle-sidebar-right\"><i class=\"fa fa-gears\"></i></a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/app-header/app-header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppHeaderComponent = (function () {
    function AppHeaderComponent() {
        // TODO
    }
    return AppHeaderComponent;
}());
AppHeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        styles: [__webpack_require__("../../../../../src/app/widgets/app-header/app-header.component.css")],
        template: __webpack_require__("../../../../../src/app/widgets/app-header/app-header.component.html")
    }),
    __metadata("design:paramtypes", [])
], AppHeaderComponent);
exports.AppHeaderComponent = AppHeaderComponent;
//# sourceMappingURL=app-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/app-header/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_header_component_1 = __webpack_require__("../../../../../src/app/widgets/app-header/app-header.component.ts");
exports.AppHeaderComponent = app_header_component_1.AppHeaderComponent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\" *ngIf=\"display\">\n  <h1>\n    {{ header }}\n    <small>{{ description }}</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <ng-template let-item ngFor [ngForOf]=\"levels\">\n      <li [class.active]=\"item.active\">\n        <a [routerLink]=\"item.link\">\n          <i *ngIf=\"item.icon !=null\" class=\"fa fa-{{item.icon}}\"></i> {{ item.title }}\n        </a>\n      </li>\n    </ng-template>\n  </ol>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var breadcrumb_service_1 = __webpack_require__("../../../../../src/app/services/breadcrumb.service.ts");
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(breadServ) {
        var _this = this;
        this.breadServ = breadServ;
        this.display = false;
        this.header = '';
        this.description = '';
        this.levels = [];
        // getting the data from the services
        this.breadServ.current.subscribe(function (data) {
            _this.display = data.display;
            _this.header = data.header;
            _this.description = data.description;
            _this.levels = data.levels;
        });
    }
    return BreadcrumbComponent;
}());
BreadcrumbComponent = __decorate([
    core_1.Component({
        selector: 'app-breadcrumb',
        template: __webpack_require__("../../../../../src/app/widgets/breadcrumb/breadcrumb.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof breadcrumb_service_1.BreadcrumbService !== "undefined" && breadcrumb_service_1.BreadcrumbService) === "function" && _a || Object])
], BreadcrumbComponent);
exports.BreadcrumbComponent = BreadcrumbComponent;
var _a;
//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/breadcrumb/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var breadcrumb_component_1 = __webpack_require__("../../../../../src/app/widgets/breadcrumb/breadcrumb.component.ts");
exports.BreadcrumbComponent = breadcrumb_component_1.BreadcrumbComponent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/control-sidebar/control-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/control-sidebar/control-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Control Sidebar -->\n<aside class=\"control-sidebar control-sidebar-dark\">\n\t<!-- Create the tabs -->\n\t<ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n\t\t<li class=\"active\"><a href=\"#control-sidebar-home-tab\"\n\t\t\tdata-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n\t\t<li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i\n\t\t\t\tclass=\"fa fa-gears\"></i></a></li>\n\t</ul>\n\t<!-- Tab panes -->\n\t<div class=\"tab-content\">\n\t\t<!-- Home tab content -->\n\t\t<div class=\"tab-pane active\" id=\"control-sidebar-home-tab\">\n\t\t\t<h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n\t\t\t<ul class=\"control-sidebar-menu\">\n\t\t\t\t<li><a href=\"javascript::;\"> <i\n\t\t\t\t\t\tclass=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\t\t\t\t\t\t<div class=\"menu-info\">\n\t\t\t\t\t\t\t<h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\t\t\t\t\t\t\t<p>Will be 23 on April 24th</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t</a></li>\n\t\t\t</ul>\n\t\t\t<!-- /.control-sidebar-menu -->\n\n\t\t\t<h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n\t\t\t<ul class=\"control-sidebar-menu\">\n\t\t\t\t<li><a href=\"javascript::;\">\n\t\t\t\t\t\t<h4 class=\"control-sidebar-subheading\">\n\t\t\t\t\t\t\tCustom Template Design <span\n\t\t\t\t\t\t\t\tclass=\"label label-danger pull-right\">70%</span>\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<div class=\"progress progress-xxs\">\n\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</a></li>\n\t\t\t</ul>\n\t\t\t<!-- /.control-sidebar-menu -->\n\n\t\t</div>\n\t\t<!-- /.tab-pane -->\n\t\t<!-- Stats tab content -->\n\t\t<div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab\n\t\t\tContent</div>\n\t\t<!-- /.tab-pane -->\n\t\t<!-- Settings tab content -->\n\t\t<div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n\t\t\t<form method=\"post\">\n\t\t\t\t<h3 class=\"control-sidebar-heading\">General Settings</h3>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"control-sidebar-subheading\"> Report panel\n\t\t\t\t\t\tusage <input type=\"checkbox\" class=\"pull-right\" checked>\n\t\t\t\t\t</label>\n\t\t\t\t\t<p>Some information about this general settings option</p>\n\t\t\t\t</div>\n\t\t\t\t<!-- /.form-group -->\n\t\t\t</form>\n\t\t</div>\n\t\t<!-- /.tab-pane -->\n\t</div>\n</aside>\n<!-- /.control-sidebar -->\n<!-- Add the sidebar's background. This div must be placed\n               immediately after the control sidebar -->\n<div class=\"control-sidebar-bg\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/control-sidebar/control-sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ControlSidebarComponent = (function () {
    function ControlSidebarComponent() {
        // TODO
    }
    return ControlSidebarComponent;
}());
ControlSidebarComponent = __decorate([
    core_1.Component({
        selector: 'app-aside',
        styles: [__webpack_require__("../../../../../src/app/widgets/control-sidebar/control-sidebar.component.css")],
        template: __webpack_require__("../../../../../src/app/widgets/control-sidebar/control-sidebar.component.html")
    }),
    __metadata("design:paramtypes", [])
], ControlSidebarComponent);
exports.ControlSidebarComponent = ControlSidebarComponent;
//# sourceMappingURL=control-sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/control-sidebar/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var control_sidebar_component_1 = __webpack_require__("../../../../../src/app/widgets/control-sidebar/control-sidebar.component.ts");
exports.ControlSidebarComponent = control_sidebar_component_1.ControlSidebarComponent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/filter/filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/filter/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<p-accordion>\n    <p-accordionTab header=\"Filters\">\n        <div *ngIf=\"isOrder\" class=\"col-lg-12\">\n            <label for=\"orderStates\">Stav objednavky: </label>\n            <p-selectButton id=\"orderStates\" (onChange)=\"stateFilterChange(orderStateComponent)\" [options]=\"orderStates\"\n                            [(ngModel)]=\"selectedOrderState\"></p-selectButton>\n        </div>\n\n        <div *ngIf=\"isInvoice\" class=\"col-lg-12\">\n            <label for=\"orderStates\">Stav faktury: </label>\n            <p-selectButton id=\"invoiceState\" (onChange)=\"stateFilterChange(invoiceStateComponent)\" [options]=\"invoiceStates\"\n                            [(ngModel)]=\"selectedInvoiceState\"></p-selectButton>\n        </div>\n    </p-accordionTab>\n</p-accordion>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/filter/filter.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var invoiceStatus_model_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoiceStatus.model.ts");
var order_model_1 = __webpack_require__("../../../../../src/app/pages/order/order.model.ts");
var order_service_1 = __webpack_require__("../../../../../src/app/pages/order/order.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var invoice_service_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.service.ts");
var filterComponents;
(function (filterComponents) {
    filterComponents[filterComponents["OrderStates"] = 0] = "OrderStates";
    filterComponents[filterComponents["InvoiceStates"] = 1] = "InvoiceStates";
})(filterComponents || (filterComponents = {}));
var FilterComponent = (function () {
    function FilterComponent(_orderSrv, _userSrv, _invoiceService) {
        this._orderSrv = _orderSrv;
        this._userSrv = _userSrv;
        this._invoiceService = _invoiceService;
        this.type = "Order";
        this.onUpdate = new core_1.EventEmitter();
        this.orderStates = order_model_1.orderStatesConst;
        this.invoiceStates = invoiceStatus_model_1.invoiceStatesConst;
    }
    FilterComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes.activeFilter + ' active: ' + changes.activeFilterType);
        if (changes && !changes.type) {
            console.log(this.sortOrientation);
            this.doFilter();
        }
    };
    FilterComponent.prototype.doFilter = function () {
        var _this = this;
        console.log(this.sortOrientation);
        if (this.activeFilter && this.activeFilter !== '-1') {
            console.log(this.sortOrientation);
            if (this.isOrder) {
                this._orderSrv.getOrders(this.page, this.pageSize, this.sort, this.sortOrientation, this.activeFilterType, this.activeFilter).subscribe(function (result) {
                    console.log(result);
                    _this.onUpdate.emit(result);
                });
            }
            if (this.isInvoice) {
                this._invoiceService.getInvoices(this.page, this.pageSize, this.sort, this.activeFilterType, this.activeFilter).subscribe(function (result) {
                    console.log(result);
                    _this.onUpdate.emit(result);
                });
            }
        }
        else {
            if (this.isOrder) {
                this._orderSrv.getOrders(this.page, this.pageSize, this.sort, this.sortOrientation).subscribe(function (result) {
                    _this.onUpdate.emit(result);
                });
            }
            else {
                this._invoiceService.getInvoices(this.page, this.pageSize, this.sort, this.sortOrientation).subscribe(function (result) {
                    _this.onUpdate.emit(result);
                });
            }
        }
    };
    FilterComponent.prototype.stateFilterChange = function (filterType) {
        console.log('filterType: ' + filterType);
        switch (filterType) {
            case this.orderStateComponent: {
                console.log(this.selectedOrderState);
                this.activeFilter = this._orderSrv.states[this.selectedOrderState];
                this.activeFilterType = "state";
                this.doFilter();
                break;
            }
            case this.invoiceStateComponent: {
                console.log(this.selectedInvoiceState);
                this.activeFilter = this._invoiceService.states[this.selectedInvoiceState];
                this.activeFilterType = "status";
                this.doFilter();
                break;
            }
        }
    };
    Object.defineProperty(FilterComponent.prototype, "invoiceStateComponent", {
        get: function () {
            return filterComponents.InvoiceStates;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterComponent.prototype, "orderStateComponent", {
        get: function () {
            return filterComponents.OrderStates;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterComponent.prototype, "isOrder", {
        get: function () {
            return this.type === "Order";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterComponent.prototype, "isInvoice", {
        get: function () {
            return this.type === "Invoice";
        },
        enumerable: true,
        configurable: true
    });
    return FilterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FilterComponent.prototype, "page", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FilterComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FilterComponent.prototype, "sort", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FilterComponent.prototype, "sortOrientation", void 0);
__decorate([
    core_1.Input('filter'),
    __metadata("design:type", String)
], FilterComponent.prototype, "activeFilter", void 0);
__decorate([
    core_1.Input('filterType'),
    __metadata("design:type", String)
], FilterComponent.prototype, "activeFilterType", void 0);
__decorate([
    core_1.Input('type'),
    __metadata("design:type", String)
], FilterComponent.prototype, "type", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FilterComponent.prototype, "onUpdate", void 0);
FilterComponent = __decorate([
    core_1.Component({
        selector: 'app-filter',
        template: __webpack_require__("../../../../../src/app/widgets/filter/filter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/widgets/filter/filter.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" && _a || Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _b || Object, typeof (_c = typeof invoice_service_1.InvoiceService !== "undefined" && invoice_service_1.InvoiceService) === "function" && _c || Object])
], FilterComponent);
exports.FilterComponent = FilterComponent;
var _a, _b, _c;
//# sourceMappingURL=filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/filter/filter.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var filter_component_1 = __webpack_require__("../../../../../src/app/widgets/filter/filter.component.ts");
var primeng_1 = __webpack_require__("../../../../primeng/primeng.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var FilterModule = (function () {
    function FilterModule() {
    }
    return FilterModule;
}());
FilterModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            primeng_1.AccordionModule,
            primeng_1.SelectButtonModule,
            forms_1.FormsModule
        ],
        declarations: [
            filter_component_1.FilterComponent
        ],
        exports: [
            filter_component_1.FilterComponent
        ]
    })
], FilterModule);
exports.FilterModule = FilterModule;
//# sourceMappingURL=filter.module.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/menu-aside/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var menu_aside_component_1 = __webpack_require__("../../../../../src/app/widgets/menu-aside/menu-aside.component.ts");
exports.MenuAsideComponent = menu_aside_component_1.MenuAsideComponent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/menu-aside/menu-aside.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".info {\n    position: relative !important;\n    left: 0px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/menu-aside/menu-aside.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Left side column. contains the logo and sidebar -->\n<aside class=\"main-sidebar\">\n\t<!-- sidebar: style can be found in sidebar.less -->\n\t<section class=\"sidebar\" >\n\t\t<!-- Sidebar user panel (optional) -->\n\t\t<div class=\"user-panel\">\n\t\t\t<div class=\"pull-left image\">\n\t\t\t\t<!--<img [src]=\"currentUser?.avatarUrl\" class=\"img-circle\"-->\n\t\t\t\t\t<!--[alt]=\"currentUser?.name\">-->\n\t\t\t</div>\n\t\t\t<div class=\"pull-left info\">\n\t\t\t\t<b>{{currentUser.name}} {{currentUser.surname}}</b>\n\t\t\t\t<br>\n\t\t\t\t<i>({{currentUser?.email}})</i>\n\t\t\t\t<p>Role:{{currentUser?.roles}}</p>\n\n\n\t\t\t\t<div *ngIf=\"isAdmin\">\n\t\t\t\t\t<i>Administrator role is active!</i>\n\t\t\t\t</div>\n\t\t\t\t<!-- Status -->\n\t\t\t\t<!--<a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>-->\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- search form (Optional) -->\n\t\t<form action=\"#\" method=\"get\" class=\"sidebar-form\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<input type=\"text\" name=\"q\" class=\"form-control\"\n\t\t\t\t\tplaceholder=\"Search...\"> <span class=\"input-group-btn\">\n\t\t\t\t\t<button type=\"submit\" name=\"search\" id=\"search-btn\"\n\t\t\t\t\t\tclass=\"btn btn-flat\">\n\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</form>\n\t\t<!-- /.search form -->\n\t\t<!-- Sidebar Menu -->\n\t\t<ul class=\"sidebar-menu\">\n\t\t\t<li class=\"header\">NAVIGATION</li>\n\n\t\t\t<ng-template ngFor let-item [ngForOf]=\"links\"> <ng-template\n\t\t\t\t[ngIf]=\"!item.sublinks && !item.admin || (isAdmin && item.admin)\">\n\t\t\t<li [class.active]=\"item.link[0] === current_url\"><a\n\t\t\t\t*ngIf=\"!item.external\" [routerLink]=\"item.link\"> <i\n\t\t\t\t\tclass=\"fa fa-{{item.icon}}\"></i> <span>{{item.title}}</span>\n\t\t\t</a> <a *ngIf=\"item.external\" [href]=\"item.link\" [target]=\"item.target\">\n\t\t\t\t\t<i class=\"fa fa-{{item.icon}}\"></i> <span>{{item.title}}</span>\n\t\t\t</a></li>\n\t\t\t</ng-template> <ng-template [ngIf]=\"item.sublinks\">\n\t\t\t<li class=\"treeview\"><a href=\"#\"> <i *ngIf=\"item.icon\"\n\t\t\t\t\tclass=\"fa fa-{{item.icon}}\"></i> <span>{{item.title}}</span> <i\n\t\t\t\t\tclass=\"fa fa-angle-left pull-right\"></i>\n\t\t\t</a>\n\t\t\t\t<ul class=\"treeview-menu\">\n\t\t\t\t\t<ng-template ngFor let-subitem [ngForOf]=\"item.sublinks\">\n\t\t\t\t\t<li [class.active]=\"subitem.link[0] === current_url\"><a\n\t\t\t\t\t\t*ngIf=\"!subitem.external\" [routerLink]=\"subitem.link\"> <i\n\t\t\t\t\t\t\t*ngIf=\"subitem.icon\" class=\"fa fa-{{subitem.icon}}\"></i> <span>{{subitem.title}}</span>\n\t\t\t\t\t</a> <a *ngIf=\"subitem.external\" [href]=\"subitem.link\"\n\t\t\t\t\t\t[target]=\"subitem.target\"> <i *ngIf=\"subitem.icon\"\n\t\t\t\t\t\t\tclass=\"fa fa-{{subitem.icon}}\"></i> <span>{{subitem.title}}</span>\n\t\t\t\t\t</a></li>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ul></li>\n\t\t\t</ng-template> </ng-template>\n\t\t</ul>\n\t\t<!-- /.sidebar-menu -->\n\t</section>\n\t<!-- /.sidebar -->\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/menu-aside/menu-aside.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var login_user_model_1 = __webpack_require__("../../../../../src/app/pages/login/login-user.model.ts");
var MenuAsideComponent = (function () {
    function MenuAsideComponent(userServ, router) {
        var _this = this;
        this.userServ = userServ;
        this.router = router;
        this.currentUser = new login_user_model_1.LoginUser();
        this.links = [];
        // getting the current url
        // this.router.events.subscribe((evt: RouteConfigLoadStart) => this.currentUrl = evt.route.path);
        this.userServ.currentUser.subscribe(function (user) { return _this.currentUser = user; });
    }
    MenuAsideComponent.prototype.ngOnInit = function () {
        // TODO
    };
    Object.defineProperty(MenuAsideComponent.prototype, "isAdmin", {
        get: function () {
            if (this.userServ.getLoggedInUser() &&
                this.userServ.getLoggedInUser().roles &&
                this.userServ.getLoggedInUser().roles.indexOf('ROLE_ADMIN') > -1) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    return MenuAsideComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MenuAsideComponent.prototype, "links", void 0);
MenuAsideComponent = __decorate([
    core_1.Component({
        selector: 'app-menu-aside',
        styles: [__webpack_require__("../../../../../src/app/widgets/menu-aside/menu-aside.component.css")],
        template: __webpack_require__("../../../../../src/app/widgets/menu-aside/menu-aside.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], MenuAsideComponent);
exports.MenuAsideComponent = MenuAsideComponent;
var _a, _b;
//# sourceMappingURL=menu-aside.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/messages-box/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var messages_box_component_1 = __webpack_require__("../../../../../src/app/widgets/messages-box/messages-box.component.ts");
exports.MessagesBoxComponent = messages_box_component_1.MessagesBoxComponent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/messages-box/messages-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/messages-box/messages-box.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Menu toggle button -->\n<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <i\n\tclass=\"fa fa-envelope-o\"></i> <span class=\"label label-success\"\n\t[innerHTML]=\"'2'\"></span>\n</a>\n<ul class=\"dropdown-menu\">\n\t<li class=\"header\">{{ 'MSGBOX.COUNT' }}</li>\n\t<li>\n\t\t<!-- inner menu: contains the messages -->\n\t\t<ul class=\"menu\">\n\t\t\t<li>\n\t\t\t\t<!-- start message --> <a href=\"#\">\n\t\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t\t<!-- User Image -->\n\t\t\t\t\t</div> <!-- Message title and timestamp -->\n\n\t\t\t</a>\n\t\t\t</li>\n\t\t\t<!-- end message -->\n\t\t</ul> <!-- /.menu -->\n\t</li>\n\t<li class=\"footer\"><a href=\"#\">{{ 'MSGBOX.FOOTER' | translate\n\t\t\t}}</a></li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/messages-box/messages-box.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var MessagesBoxComponent = (function () {
    function MessagesBoxComponent() {
    }
    return MessagesBoxComponent;
}());
MessagesBoxComponent = __decorate([
    core_1.Component({
        /* tslint:disable */
        selector: '.messagesBox',
        /* tslint:enable */
        styles: [__webpack_require__("../../../../../src/app/widgets/messages-box/messages-box.component.css")],
        template: __webpack_require__("../../../../../src/app/widgets/messages-box/messages-box.component.html")
    })
], MessagesBoxComponent);
exports.MessagesBoxComponent = MessagesBoxComponent;
//# sourceMappingURL=messages-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/notification-box/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var notification_box_component_1 = __webpack_require__("../../../../../src/app/widgets/notification-box/notification-box.component.ts");
exports.NotificationBoxComponent = notification_box_component_1.NotificationBoxComponent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/notification-box/notification-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/notification-box/notification-box.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Menu toggle button -->\n<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <i\n\tclass=\"fa fa-bell-o\"></i> <span class=\"label label-warning\">10</span>\n</a>\n<ul class=\"dropdown-menu\">\n\t<li class=\"header\">{{ 'NOTIFBOX.COUNT' | translate:notifLength }}</li>\n\t<li>\n\t\t<!-- Inner Menu: contains the notifications -->\n\t\t<ul class=\"menu\">\n\t\t\t<li>\n\t\t\t\t<!-- start notification --> <a href=\"#\"> <i\n\t\t\t\t\tclass=\"fa fa-users text-aqua\"></i> 5 new members joined today\n\t\t\t</a>\n\t\t\t</li>\n\t\t\t<!-- end notification -->\n\t\t</ul>\n\t</li>\n\t<li class=\"footer\"><a href=\"#\">{{ 'NOTIFBOX.FOOTER' |\n\t\t\ttranslate }}</a></li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/notification-box/notification-box.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var NotificationBoxComponent = (function () {
    function NotificationBoxComponent() {
        this.notifLength = { 0: '10' };
        // TODO 
    }
    NotificationBoxComponent.prototype.ngOnInit = function () {
        // TODO
    };
    return NotificationBoxComponent;
}());
NotificationBoxComponent = __decorate([
    core_1.Component({
        /* tslint:disable */
        selector: '.notificationsBox',
        /* tslint:enable */
        styles: [__webpack_require__("../../../../../src/app/widgets/notification-box/notification-box.component.css")],
        template: __webpack_require__("../../../../../src/app/widgets/notification-box/notification-box.component.html")
    }),
    __metadata("design:paramtypes", [])
], NotificationBoxComponent);
exports.NotificationBoxComponent = NotificationBoxComponent;
//# sourceMappingURL=notification-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/required.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
/**
 * Created by sevcik on 7/22/17.
 */
var RequiredDirective = (function () {
    function RequiredDirective(el) {
        el.nativeElement.style.backgroundColor = 'yellow';
        console.log('labla: ' + el.nativeElement.innerHTML);
        console.log(el.nativeElement);
    }
    return RequiredDirective;
}());
RequiredDirective = __decorate([
    core_1.Directive({ selector: '[myRequired]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], RequiredDirective);
exports.RequiredDirective = RequiredDirective;
var _a;
//# sourceMappingURL=required.directive.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/tasks-box/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tasks_box_component_1 = __webpack_require__("../../../../../src/app/widgets/tasks-box/tasks-box.component.ts");
exports.TasksBoxComponent = tasks_box_component_1.TasksBoxComponent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/tasks-box/tasks-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/tasks-box/tasks-box.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Menu Toggle Button -->\n<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <i\n\tclass=\"fa fa-flag-o\"></i> <span class=\"label label-danger\">{{expiredInvoices?.length || 0}}</span>\n</a>\n\n<ul class=\"dropdown-menu\">\n\t<!--<li class=\"header\">{{ 'TASKBOX.COUNT' | translate:tasksLength }}</li>-->\n\t<li>\n\t\t<!-- Inner menu: contains the tasks -->\n\t\t<ul class=\"menu\">\n\t\t\t<li *ngFor=\"let expiredInvoice of expiredInvoices\">\n\n\t\t\t\t <a [routerLink]=\"[ '/invoice/', expiredInvoice.id ]\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t{{expiredInvoice?.customer.mainContact.name}} {{expiredInvoice.customer.mainContact.surname}}\n\t\t\t\t\t\t<!--<small class=\"pull-right\">20%</small>-->\n\t\t\t\t\t</h3> <!-- The progress bar -->\n\t\t\t\t\t<!--<div class=\"progress xs\">-->\n\t\t\t\t\t\t<!--&lt;!&ndash; Change the css width attribute to simulate progress &ndash;&gt;-->\n\t\t\t\t\t\t<!--<div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\"-->\n\t\t\t\t\t\t\t<!--role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\"-->\n\t\t\t\t\t\t\t<!--aria-valuemax=\"100\">-->\n\t\t\t\t\t\t\t<!--<span class=\"sr-only\">20% Complete</span>-->\n\t\t\t\t\t\t<!--</div>-->\n\t\t\t\t\t<!--</div>-->\n\t\t\t</a>\n\t\t\t</li>\n\t\t\t<!-- end task item -->\n\t\t</ul>\n\t</li>\n\t<li class=\"footer\"><a href=\"#\">{{ 'TASKBOX.FOOTER' | translate\n\t\t\t}}</a></li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/tasks-box/tasks-box.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var invoice_service_1 = __webpack_require__("../../../../../src/app/pages/invoice/invoice.service.ts");
var TasksBoxComponent = (function () {
    function TasksBoxComponent(invoiceSrv) {
        // TODO
        this.tasksLength = { 0: '9' };
        // TODO 
    }
    TasksBoxComponent.prototype.ngOnInit = function () {
        // TODO
    };
    return TasksBoxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TasksBoxComponent.prototype, "user", void 0);
TasksBoxComponent = __decorate([
    core_1.Component({
        /* tslint:disable */
        selector: '.tasksBox',
        /* tslint:enable */
        styles: [__webpack_require__("../../../../../src/app/widgets/tasks-box/tasks-box.component.css")],
        template: __webpack_require__("../../../../../src/app/widgets/tasks-box/tasks-box.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof invoice_service_1.InvoiceService !== "undefined" && invoice_service_1.InvoiceService) === "function" && _a || Object])
], TasksBoxComponent);
exports.TasksBoxComponent = TasksBoxComponent;
var _a;
//# sourceMappingURL=tasks-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/user-box/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var user_box_component_1 = __webpack_require__("../../../../../src/app/widgets/user-box/user-box.component.ts");
exports.UserBoxComponent = user_box_component_1.UserBoxComponent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/user-box/user-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/user-box/user-box.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Menu Toggle Button -->\n<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n  <!-- The user image in the navbar-->\n  <img [src]=\"currentUser.avatarUrl\" class=\"user-image\" [alt]=\"currentUser.name\">\n  <!-- hidden-xs hides the username on small devices so only the image appears. -->\n  <span class=\"hidden-xs\">{{currentUser.name}}</span>\n</a>\n<ul class=\"dropdown-menu\">\n  <!-- The user image in the menu -->\n  <li class=\"user-header\">\n    <img [src]=\"currentUser.avatarUrl\" class=\"img-circle\" [alt]=\"currentUser.name\">\n    <p>\n      {{currentUser.name}} - {{currentUser.roles}}\n      <small>Member since {{currentUser.creation_date}}</small>\n    </p>\n  </li>\n  <!-- Menu Body -->\n  <li class=\"user-body\">\n    <div class=\"col-xs-4 text-center\">\n      <a href=\"#\">Sales</a>\n    </div>\n  </li>\n  <!-- Menu Footer-->\n  <li class=\"user-footer\">\n    <div class=\"pull-left\">\n      <a href=\"/profile\" class=\"btn btn-default btn-flat\">Profile</a>\n    </div>\n    <div class=\"pull-right\">\n      <a (click)=\"logout()\" class=\"btn btn-default btn-flat\">Sign out</a>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/user-box/user-box.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var login_user_model_1 = __webpack_require__("../../../../../src/app/pages/login/login-user.model.ts");
var UserBoxComponent = (function () {
    function UserBoxComponent(userServ, router) {
        // se connecter au modif du user courant
        var _this = this;
        this.userServ = userServ;
        this.router = router;
        this.currentUser = new login_user_model_1.LoginUser();
        this.logout = function () {
            _this.userServ.logout();
        };
        this.userServ.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    UserBoxComponent.prototype.ngOnInit = function () {
        // TODO
    };
    return UserBoxComponent;
}());
UserBoxComponent = __decorate([
    core_1.Component({
        /* tslint:disable */
        selector: '.userBox',
        /* tslint:enable */
        styles: [__webpack_require__("../../../../../src/app/widgets/user-box/user-box.component.css")],
        template: __webpack_require__("../../../../../src/app/widgets/user-box/user-box.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], UserBoxComponent);
exports.UserBoxComponent = UserBoxComponent;
var _a, _b;
//# sourceMappingURL=user-box.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    apiUrl: "http://digitalwalk.sk/",
    silent: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../../../../../src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__("../../../../core-js/es6/symbol.js");
__webpack_require__("../../../../core-js/es6/object.js");
__webpack_require__("../../../../core-js/es6/function.js");
__webpack_require__("../../../../core-js/es6/parse-int.js");
__webpack_require__("../../../../core-js/es6/parse-float.js");
__webpack_require__("../../../../core-js/es6/number.js");
__webpack_require__("../../../../core-js/es6/math.js");
__webpack_require__("../../../../core-js/es6/string.js");
__webpack_require__("../../../../core-js/es6/date.js");
__webpack_require__("../../../../core-js/es6/array.js");
__webpack_require__("../../../../core-js/es6/regexp.js");
__webpack_require__("../../../../core-js/es6/map.js");
__webpack_require__("../../../../core-js/es6/set.js");
__webpack_require__("../../../../core-js/es6/reflect.js");
__webpack_require__("../../../../core-js/es7/reflect.js");
__webpack_require__("../../../../zone.js/dist/zone.js");
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map