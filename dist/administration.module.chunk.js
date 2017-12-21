webpackJsonp(["administration.module"],{

/***/ "../../../../../src/app/helpers/GlobalValidator.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GlobalValidator = (function () {
    function GlobalValidator() {
    }
    GlobalValidator.mailFormat = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value.length === 0 ||
            (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value)))) {
            console.log(control.value);
            console.log('error');
            return { "incorrectMailFormat": true };
        }
        else {
            console.log('returning null');
            return null;
        }
    };
    return GlobalValidator;
}());
exports.GlobalValidator = GlobalValidator;
//# sourceMappingURL=GlobalValidator.js.map

/***/ }),

/***/ "../../../../../src/app/pages/administration/administration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/administration/administration.component.html":
/***/ (function(module, exports) {

module.exports = "Administracia\n<div>\n    <tabset>\n        <tab heading=\"Administrácia firiem\"><company></company></tab>\n        <tab heading=\"Vytvorenie Uživateľa\"><app-user></app-user></tab>\n        <tab heading=\"Vytvorenie Klienta\"><customer></customer></tab>\n        <tab heading=\"Emailove sablony\"><app-email-templates></app-email-templates></tab>\n    </tabset>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/administration/administration.component.ts":
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
 * Created by a619678 on 18. 6. 2017.
 */
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var breadcrumb_service_1 = __webpack_require__("../../../../../src/app/services/breadcrumb.service.ts");
var messages_service_1 = __webpack_require__("../../../../../src/app/services/messages.service.ts");
var configuration_service_1 = __webpack_require__("../../../../../src/app/services/configuration.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var AdministrationComponent = (function () {
    function AdministrationComponent(configurationServ, msgServ, breadServ, router) {
        // TODO
        this.configurationServ = configurationServ;
        this.msgServ = msgServ;
        this.breadServ = breadServ;
        this.router = router;
    }
    AdministrationComponent.prototype.ngOnDestroy = function () {
        // removing the header
        console.log("destroying the component");
        this.breadServ.clear();
    };
    return AdministrationComponent;
}());
AdministrationComponent = __decorate([
    core_1.Component({
        selector: 'administration',
        styles: [__webpack_require__("../../../../../src/app/pages/administration/administration.component.css")],
        template: __webpack_require__("../../../../../src/app/pages/administration/administration.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof configuration_service_1.ConfigurationService !== "undefined" && configuration_service_1.ConfigurationService) === "function" && _a || Object, typeof (_b = typeof messages_service_1.MessagesService !== "undefined" && messages_service_1.MessagesService) === "function" && _b || Object, typeof (_c = typeof breadcrumb_service_1.BreadcrumbService !== "undefined" && breadcrumb_service_1.BreadcrumbService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], AdministrationComponent);
exports.AdministrationComponent = AdministrationComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=administration.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/administration/administration.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by a619678 on 19. 6. 2017.
 */
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var ngx_bootstrap_1 = __webpack_require__("../../../../ngx-bootstrap/index.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/pages/users/user.service.ts");
var configuration_service_1 = __webpack_require__("../../../../../src/app/services/configuration.service.ts");
var messages_service_1 = __webpack_require__("../../../../../src/app/services/messages.service.ts");
var company_component_1 = __webpack_require__("../../../../../src/app/pages/administration/companies/company.component.ts");
var administration_component_1 = __webpack_require__("../../../../../src/app/pages/administration/administration.component.ts");
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var company_create_component_1 = __webpack_require__("../../../../../src/app/pages/administration/companies/company-create.component.ts");
var customer_component_1 = __webpack_require__("../../../../../src/app/pages/administration/customer/customer.component.ts");
var customer_create_component_1 = __webpack_require__("../../../../../src/app/pages/administration/customer/customer-create.component.ts");
var user_component_1 = __webpack_require__("../../../../../src/app/pages/administration/user/user.component.ts");
var primeng_1 = __webpack_require__("../../../../primeng/primeng.js");
var administrator_routing_1 = __webpack_require__("../../../../../src/app/pages/administration/administrator.routing.ts");
var email_templates_component_1 = __webpack_require__("../../../../../src/app/pages/administration/email-templates/email-templates.component.ts");
var spinner_module_1 = __webpack_require__("../../../../../src/app/component/spinner/spinner.module.ts");
var AdministrationModule = (function () {
    function AdministrationModule() {
    }
    return AdministrationModule;
}());
AdministrationModule = __decorate([
    core_1.NgModule({
        imports: [
            primeng_1.SelectButtonModule,
            primeng_1.MultiSelectModule,
            primeng_1.FileUploadModule,
            primeng_1.ToggleButtonModule,
            router_1.RouterModule,
            common_1.CommonModule,
            administrator_routing_1.routing,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ngx_bootstrap_1.CollapseModule.forRoot(),
            ngx_bootstrap_1.AccordionModule.forRoot(),
            ngx_bootstrap_1.BsDropdownModule.forRoot(),
            ngx_bootstrap_1.TabsModule.forRoot(),
            spinner_module_1.SpinnerModule,
        ],
        declarations: [
            company_component_1.CompanyComponent,
            administration_component_1.AdministrationComponent,
            company_create_component_1.CompanyCreation,
            customer_component_1.CustomerComponent,
            customer_create_component_1.CustomerCreation,
            user_component_1.UserComponent,
            email_templates_component_1.EmailTemplatesComponent,
        ],
        providers: [
            user_service_1.CustomerService,
            configuration_service_1.ConfigurationService,
            messages_service_1.MessagesService,
            notification_service_1.NotificationService
        ],
        exports: []
    })
], AdministrationModule);
exports.AdministrationModule = AdministrationModule;
//# sourceMappingURL=administration.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/administration/administrator.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var administration_component_1 = __webpack_require__("../../../../../src/app/pages/administration/administration.component.ts");
var routes = [
    { path: '', component: administration_component_1.AdministrationComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=administrator.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/administration/companies/company-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width{\n    width:100%;\n}\n\n.products{\n    margin-top:10px;\n}\n\n.remove-mark{\n    float:right;\n    cursor:pointer;\n}\n\n.remove-mark:hover{\n    color:red;\n}\n\n.dropdown-menu li{\n    cursor:pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/administration/companies/company-create.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(companyForm)\" [formGroup]=\"companyForm\">\n    <app-spinner *ngIf=\"isLoading\"></app-spinner>\n    <div class=\"form-group\">\n        <div>\n\n            <div class=\"col-lg-6 form-group\">\n                <label for=\"mainName\">Meno Firmy:</label>\n                <input type=\"text\" id=\"mainName\" class=\"form-control\" formControlName=\"name\"/>\n            </div>\n\n            <div formGroupName=\"mainContact\">\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"name\">Meno:</label>\n                    <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"surname\">Priezvisko:</label>\n                    <input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"postcode\">Poštové smerovacie číslo:</label>\n                    <input type=\"text\" id=\"postcode\" class=\"form-control\" formControlName=\"postcode\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"telephone\">Telefón:</label>\n                    <input type=\"text\" id=\"telephone\" class=\"form-control\" formControlName=\"telephone\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"name\">Krajina:</label>\n                    <input type=\"text\" id=\"country\" class=\"form-control\" formControlName=\"country\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"companyAccount\">Číslo účtu:</label>\n                    <input type=\"text\" id=\"companyAccount\" class=\"form-control\" formControlName=\"accountNumber\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"iban\">IBAN:</label>\n                    <input type=\"text\" id=\"iban\" class=\"form-control\" formControlName=\"iban\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"swift\">SWIFT:</label>\n                    <input type=\"text\" id=\"swift\" class=\"form-control\" formControlName=\"swift\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"street\">Ulica:</label>\n                    <input type=\"text\" id=\"street\" class=\"form-control\" formControlName=\"street\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"city\">Mesto:</label>\n                    <input type=\"text\" id=\"city\" class=\"form-control\" formControlName=\"city\"/>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"companyEmail\">Email:</label>\n                    <input type=\"text\" id=\"companyEmail\" class=\"form-control\" formControlName=\"email\" email/>\n                </div>\n            </div>\n\n            <div class=\"col-lg-6 form-group\">\n                <label for=\"ico\">ICO:</label>\n                <input type=\"text\" id=\"ico\" class=\"form-control\" formControlName=\"ico\"/>\n            </div>\n\n            <div class=\"col-lg-6 form-group\">\n                <label for=\"dic\">DIC:</label>\n                <input type=\"text\" id=\"dic\" class=\"form-control\" formControlName=\"dic\"/>\n            </div>\n        </div>\n\n        <div class=\"col-lg-6 form-group\">\n            <label for=\"token\">BankApi Token:</label>\n            <input type=\"text\" id=\"token\" class=\"form-control\" formControlName=\"bankApiToken\"/>\n        </div>\n\n        <ng-container *ngIf=\"company\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"logo\">Podpis: </label>\n                    <p-fileUpload id=\"logo\" name=\"logo\"\n                                  (onUpload)=\"onUpload($event)\" customUpload=\"true\"\n                                  (uploadHandler)=\"pictureUpload($event, 'signature')\">\n                    </p-fileUpload>\n\n                    <div *ngIf=\"signatureFile\" class=\"already-uploaded\">\n                        <div class=\"item\">\n                            <a [href]=\"signatureFile.downloadUrl\">\n                                {{signatureFile.fileName}}\n                            </a>\n                            <span class=\"remove glyphicon glyphicon-remove-sign\"\n                                  (click)=\"removeFile(signatureFile)\"></span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-6 form-group\">\n                    <label for=\"logo\">Logo: </label>\n                    <p-fileUpload id=\"logo\" name=\"logo\"\n                                  (onUpload)=\"onUpload($event)\" customUpload=\"true\"\n                                  (uploadHandler)=\"pictureUpload($event, 'logo')\">\n                    </p-fileUpload>\n\n                    <div *ngIf=\"logo\" class=\"already-uploaded\">\n                        <div class=\"item\">\n                            <a [href]=\"logo.downloadUrl\">\n                                {{logo.fileName}}\n                            </a>\n                            <span class=\"remove glyphicon glyphicon-remove-sign\"\n                                  (click)=\"removeFile(logo)\"></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n\n        <div class=\"col-lg-12 form-group\">\n            <button type=\"submit\" class=\"full-width btn btn-success\" *ngIf=\"!company\" [disabled]=\"!companyForm.valid\">\n                Pridaj firmu\n            </button>\n            <div class=\"btn-group full-width\">\n                <button type=\"submit\" class=\" col-lg-6 btn btn-warning\" *ngIf=\"company\" [disabled]=\"!companyForm.valid\">Uprav\n                    firmu\n                </button>\n                <button class=\"col-lg-6 btn btn-danger\" *ngIf=\"company\" (click)=\"reset()\">\n                    Reset\n                </button>\n            </div>\n        </div>\n\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/pages/administration/companies/company-create.component.ts":
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
var configuration_service_1 = __webpack_require__("../../../../../src/app/services/configuration.service.ts");
var company_model_1 = __webpack_require__("../../../../../src/app/models/company-model.ts");
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var file_1 = __webpack_require__("../../../../../src/app/models/file.ts");
var CompanyCreation = (function () {
    function CompanyCreation(fb, configurationService, notificationSrv, restServ) {
        this.fb = fb;
        this.configurationService = configurationService;
        this.notificationSrv = notificationSrv;
        this.restServ = restServ;
        this.clientFormControlls = new Array();
        this.fixedInputs = new Array();
        this.prices = new Array();
        this.uploadedFiles = [];
        this.isLoading = false;
        this.onAdd = new core_1.EventEmitter();
        this.onChange = new core_1.EventEmitter();
        this.createForm();
    }
    CompanyCreation.prototype.ngOnChanges = function (changes) {
        if (this.company && changes.company) {
            console.log('setting up company');
            this.companyForm.patchValue(this.company);
        }
    };
    CompanyCreation.prototype.ngOnInit = function () {
        this.createForm();
    };
    CompanyCreation.prototype.createForm = function () {
        this.companyForm = this.fb.group({
            'name': ['', forms_1.Validators.required],
            'mainContact': this.fb.group({
                'name': ['', forms_1.Validators.required],
                'surname': ['', forms_1.Validators.required],
                'postcode': ['', forms_1.Validators.required],
                'telephone': ['', forms_1.Validators.required],
                'country': ['', forms_1.Validators.required],
                'accountNumber': ['', forms_1.Validators.required],
                'email': ['', forms_1.Validators.required],
                'street': ['', forms_1.Validators.required],
                'city': ['', forms_1.Validators.required],
                'iban': ['', forms_1.Validators.required],
                'swift': ['', forms_1.Validators.required]
            }),
            'bankApiToken': ['', forms_1.Validators.required],
            'ico': ['', forms_1.Validators.required],
            'dic': ['', forms_1.Validators.required]
        });
    };
    Object.defineProperty(CompanyCreation.prototype, "products", {
        get: function () {
            return this.companyForm.get('products');
        },
        enumerable: true,
        configurable: true
    });
    CompanyCreation.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
    };
    CompanyCreation.prototype.pictureUpload = function (fileToUpload, type) {
        var _this = this;
        this.parseFiles(fileToUpload.files[0], function (base64hash) {
            var file = new file_1.UploadFileInfo();
            file.filename = 'test';
            file.base64File = base64hash;
            var updateCompany = new company_model_1.Company();
            if (type === 'logo') {
                updateCompany.logo = file;
            }
            else {
                updateCompany.signature = file;
            }
            _this.isLoading = true;
            _this.restServ.patchCompany(updateCompany, _this.company.id).subscribe(function (result) {
                _this.notificationSrv.success('Zmena suboru', 'bola uspesna');
                _this.company = result;
                _this.onChange.emit();
            }, function (err) {
                _this.notificationSrv.error('Zmena suboru', 'nebola uspesna');
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
            }, function () { return _this.isLoading = false; });
        });
    };
    CompanyCreation.prototype.parseFiles = function (file, onFinish) {
        var customFile = new file_1.UploadFileInfo();
        customFile.filename = 'test';
        this.getBase64fromFile(file, function (data) {
            onFinish(data);
        });
    };
    CompanyCreation.prototype.getBase64fromFile = function (file, callback) {
        var reader = new FileReader();
        console.log(file);
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
            callback(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    CompanyCreation.prototype.selectCompany = function (company) {
        this.configurationService.setCurrentCompany(company);
    };
    CompanyCreation.prototype.reset = function () {
        this.company = null;
        this.companyForm.reset();
    };
    CompanyCreation.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value;
        if (!this.company) {
            this.restServ.addComapny(value).subscribe(function (result) {
                _this.notificationSrv.success(value.name + " firma bola vytvorena", "Firma");
                _this.onAdd.next(result);
                // window.alert("Nova faktura bola vytvorena!");
                //this.invoiceForm.reset();
            }, function (error) {
                _this.notificationSrv.error("Problem pri vytvarani novej firmy", "Firma");
                console.log(error);
            });
        }
        else {
            this.restServ.patchCompany(value, this.company.id).subscribe(function (result) {
                _this.notificationSrv.success(value.name + " firma bola aktualizovana", "Firma");
                _this.onChange.next();
                // window.alert("Nova faktura bola vytvorena!");
                //this.invoiceForm.reset();
            }, function (error) {
                _this.notificationSrv.error("Problem pri aktualizacii firmy", "Firma");
                console.log(error);
            });
        }
    };
    CompanyCreation.prototype.removeFile = function (file) {
        console.log('removing file');
    };
    Object.defineProperty(CompanyCreation.prototype, "signatureFile", {
        get: function () {
            return this.company.signature;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyCreation.prototype, "logo", {
        get: function () {
            return this.company.logo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyCreation.prototype, "files", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return CompanyCreation;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CompanyCreation.prototype, "onAdd", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CompanyCreation.prototype, "onChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof company_model_1.Company !== "undefined" && company_model_1.Company) === "function" && _a || Object)
], CompanyCreation.prototype, "company", void 0);
CompanyCreation = __decorate([
    core_1.Component({
        selector: 'company-creation',
        styles: [__webpack_require__("../../../../../src/app/pages/administration/companies/company-create.component.css")],
        template: __webpack_require__("../../../../../src/app/pages/administration/companies/company-create.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof configuration_service_1.ConfigurationService !== "undefined" && configuration_service_1.ConfigurationService) === "function" && _c || Object, typeof (_d = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _d || Object, typeof (_e = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _e || Object])
], CompanyCreation);
exports.CompanyCreation = CompanyCreation;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=company-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/administration/companies/company.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/administration/companies/company.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Administrácia firiem</h3>\n\n<company-creation [company]=\"companyToUpdate\" (onChange)=\"companyChange()\" (onAdd)=\"onAdd($event)\"></company-creation>\n<table class=\"table table-bordered table-hover\">\n    <tbody>\n    <tr>\n        <th>Email</th>\n        <th>Meno</th>\n        <th>Adresa</th>\n        <th>Mesto</th>\n        <th style=\"width: 40px\">Ucet</th>\n        <th>IBAN</th>\n        <th>Platca DPH</th>\n        <th>Odstrániť</th>\n        <th>Upravit</th>\n    </tr>\n\n    <tr *ngFor=\"let company of companies\">\n        <td>{{company.mainContact?.email}}</td>\n        <td>{{company.name}}</td>\n        <td><a>{{company?.mainContact?.street}}</a></td>\n        <td>{{company?.mainContact?.city}}</td>\n        <td><a>{{company?.mainContact?.accountNumber}}</a></td>\n        <td>{{company?.mainContact?.iban}}</td>\n        <td>\n            <p-toggleButton onLabel=\"Ano\" offLabel=\"Nie\" (onChange)=\"toggleVatPayer(company, $event)\"\n                            [(ngModel)]=\"company.vatPayer\"></p-toggleButton>\n        </td>\n        <td><span class=\"remove clickable glyphicon glyphicon-remove-sign\" (click)=\"removeCompany(company)\"></span></td>\n        <td><span class=\"clickable glyphicon glyphicon-wrench\" (click)=\"setUpdateCompany(company)\"></span></td>\n    </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/pages/administration/companies/company.component.ts":
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
 * Created by a619678 on 19. 6. 2017.
 */
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var messages_service_1 = __webpack_require__("../../../../../src/app/services/messages.service.ts");
var configuration_service_1 = __webpack_require__("../../../../../src/app/services/configuration.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var CompanyComponent = (function () {
    function CompanyComponent(configurationServ, msgServ, router, notificationServ, _restServ) {
        // TODO
        this.configurationServ = configurationServ;
        this.msgServ = msgServ;
        this.router = router;
        this.notificationServ = notificationServ;
        this._restServ = _restServ;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.loadCompanies();
    };
    CompanyComponent.prototype.loadCompanies = function () {
        var _this = this;
        this._restServ.getCompanies().subscribe(function (companies) {
            console.log(companies);
            _this.companies = companies;
        });
    };
    CompanyComponent.prototype.onAdd = function (company) {
        this.companies.push(company);
    };
    CompanyComponent.prototype.ngOnDestroy = function () {
        // removing the header
        console.log("destroying the component");
    };
    CompanyComponent.prototype.removeCompany = function (company) {
        var _this = this;
        this._restServ.removeCompany(company.id).subscribe(function (result) {
            _this.notificationServ.success("Company " + company.name + " was removed");
            _this.companies.splice(_this.companies.indexOf(company), 1);
        });
    };
    CompanyComponent.prototype.toggleVatPayer = function (company, event) {
        company.vatPayer = event.checked;
        console.log(company);
        var id = company.id;
        delete company.signature;
        delete company.logo;
        delete company.mainContact.id;
        this._restServ.updateCompany(company, id).subscribe(function (result) {
            console.log(result);
        }, function (error) {
            console.error('error updating company');
        });
    };
    CompanyComponent.prototype.mapDownloadDataToUpload = function (downloadedFileInfo) {
        var uploadFileInfo;
    };
    CompanyComponent.prototype.setUpdateCompany = function (company) {
        this.companyToUpdate = company;
    };
    CompanyComponent.prototype.companyChange = function () {
        this.loadCompanies();
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    core_1.Component({
        selector: 'company',
        styles: [__webpack_require__("../../../../../src/app/pages/administration/companies/company.component.css")],
        template: __webpack_require__("../../../../../src/app/pages/administration/companies/company.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof configuration_service_1.ConfigurationService !== "undefined" && configuration_service_1.ConfigurationService) === "function" && _a || Object, typeof (_b = typeof messages_service_1.MessagesService !== "undefined" && messages_service_1.MessagesService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _d || Object, typeof (_e = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _e || Object])
], CompanyComponent);
exports.CompanyComponent = CompanyComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/administration/customer/customer-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width{\n    width:100%;\n}\n\n.products{\n    margin-top:10px;\n}\n\n.remove-mark{\n    float:right;\n    cursor:pointer;\n}\n\n.remove-mark:hover{\n    color:red;\n}\n\n.dropdown-menu li{\n    cursor:pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/administration/customer/customer-create.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(customerForm)\" [formGroup]=\"customerForm\">\n\n    <div class=\"form-group\">\n\n\n            <label class=\"md-check\">\n                <input type=\"radio\" [checked]=\"type == 'person'\" (click)=\"type = 'person'\" value=\"person\"\n                       name=\"type\">\n                Fyzická osoba\n            </label>\n\n            <label class=\"md-check\">\n                <input type=\"radio\" [checked]=\"type == 'company'\" (click)=\"type = 'company'\" value=\"company\"\n                       name=\"type\">\n                Firma\n            </label>\n\n\n                <div class=\"row\" *ngIf=\"type == 'company'\">\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"ico\">ICO:</label>\n                        <input type=\"text\" id=\"ico\" class=\"form-control\" formControlName=\"ico\"/>\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"dic\">DIC:</label>\n                        <input type=\"text\" id=\"dic\" class=\"form-control\" formControlName=\"dic\"/>\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"dic\">icDph:</label>\n                        <input type=\"text\" id=\"icDph\" class=\"form-control\" formControlName=\"icDph\"/>\n                    </div>\n\n                </div>\n\n                <div formGroupName=\"mainContact\">\n\n                    <h3>Klient</h3>\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"customerName\">Meno:</label>\n                        <input type=\"text\" id=\"customerName\" class=\"form-control\" formControlName=\"name\"/>\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"customerSurname\">Priezvisko:</label>\n                        <input type=\"text\" id=\"customerSurname\" class=\"form-control\" formControlName=\"surname\"\n                        />\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"customerPostcode\">Poštové smerovacie číslo:</label>\n                        <input type=\"text\" id=\"customerPostcode\" class=\"form-control\" formControlName=\"postcode\"/>\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"customerTelephone\">Telefón:</label>\n                        <input type=\"text\" id=\"customerTelephone\" class=\"form-control\" formControlName=\"telephone\"/>\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"customerCountry\">Krajina:</label>\n                        <input type=\"text\" id=\"customerCountry\" class=\"form-control\" formControlName=\"country\"/>\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"customerAccount\">Číslo účtu:</label>\n                        <input type=\"text\" id=\"customerAccount\" class=\"form-control\" formControlName=\"accountNumber\"\n                        />\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"customerIban\">IBAN:</label>\n                        <input type=\"text\" id=\"customerIban\" class=\"form-control\" formControlName=\"iban\"/>\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"customerSwift\">SWIFT:</label>\n                        <input type=\"text\" id=\"customerSwift\" class=\"form-control\" formControlName=\"swift\"/>\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"customerStreet\">Ulica:</label>\n                        <input type=\"text\" id=\"customerStreet\" class=\"form-control\" formControlName=\"street\"/>\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"customerCity\">Mesto:</label>\n                        <input type=\"text\" id=\"customerCity\" class=\"form-control\" formControlName=\"city\"/>\n                    </div>\n\n                    <div class=\"col-lg-6 form-group\">\n                        <label for=\"customerEmail\">Email:</label>\n                        <input type=\"text\" id=\"customerEmail\" class=\"form-control\" formControlName=\"email\" email/>\n                    </div>\n                    <div class=\"col-lg-6\">\n\n                    </div>\n                </div>\n\n                <div class=\"row\">\n\n                </div>\n\n                <ng-container *ngIf=\"invoiceContact\">\n\n                    <div formGroupName=\"invoiceContact\">\n                        <h3>Fakturačné údaje</h3>\n\n                        <div class=\"col-lg-6 form-group\">\n                            <label for=\"invoice_customerName\">Meno:</label>\n                            <input type=\"text\" id=\"invoice_customerName\" class=\"form-control\" formControlName=\"name\"/>\n                        </div>\n\n                        <div class=\"col-lg-6 form-group\">\n                            <label for=\"invoice_customerSurname\">Priezvisko:</label>\n                            <input type=\"text\" id=\"invoice_customerSurname\" class=\"form-control\"\n                                   formControlName=\"surname\"\n                            />\n                        </div>\n\n                        <div class=\"col-lg-6 form-group\">\n                            <label for=\"invoice_customerPostcode\">Poštové smerovacie číslo:</label>\n                            <input type=\"text\" id=\"invoice_customerPostcode\" class=\"form-control\"\n                                   formControlName=\"postcode\"/>\n                        </div>\n\n                        <div class=\"col-lg-6 form-group\">\n                            <label for=\"invoice_customerTelephone\">Telefón:</label>\n                            <input type=\"text\" id=\"invoice_customerTelephone\" class=\"form-control\"\n                                   formControlName=\"telephone\"/>\n                        </div>\n\n                        <div class=\"col-lg-6 form-group\">\n                            <label for=\"invoice_customerCountry\">Krajina:</label>\n                            <input type=\"text\" id=\"invoice_customerCountry\" class=\"form-control\"\n                                   formControlName=\"country\"/>\n                        </div>\n\n                        <div class=\"col-lg-6 form-group\">\n                            <label for=\"invoice_customerAccount\">Číslo účtu:</label>\n                            <input type=\"text\" id=\"invoice_customerAccount\" class=\"form-control\"\n                                   formControlName=\"accountNumber\"\n                            />\n                        </div>\n\n                        <div class=\"col-lg-6 form-group\">\n                            <label for=\"invoice_customerIban\">IBAN:</label>\n                            <input type=\"text\" id=\"invoice_customerIban\" class=\"form-control\" formControlName=\"iban\"/>\n                        </div>\n\n                        <div class=\"col-lg-6 form-group\">\n                            <label for=\"invoice_customerSwift\">SWIFT:</label>\n                            <input type=\"text\" id=\"invoice_customerSwift\" class=\"form-control\" formControlName=\"swift\"/>\n                        </div>\n\n                        <div class=\"col-lg-6 form-group\">\n                            <label for=\"invoice_customerStreet\">Ulica:</label>\n                            <input type=\"text\" id=\"invoice_customerStreet\" class=\"form-control\"\n                                   formControlName=\"street\"/>\n                        </div>\n\n                        <div class=\"col-lg-6 form-group\">\n                            <label for=\"invoice_customerCity\">Mesto:</label>\n                            <input type=\"text\" id=\"invoice_customerCity\" class=\"form-control\" formControlName=\"city\"/>\n                        </div>\n\n                        <div class=\"col-lg-6 form-group\">\n                            <label for=\"invoice_customerEmail\">Email:</label>\n                            <input type=\"text\" id=\"invoice_customerEmail\" class=\"form-control\" formControlName=\"email\"\n                                   email/>\n                        </div>\n                        <div class=\"col-lg-6\">\n\n                        </div>\n                    </div>\n                </ng-container>\n\n        <div class=\"col-lg-12 form-group\">\n            <button *ngIf=\"!edit\" type=\"submit\" class=\"full-width btn btn-success\" [disabled]=\"!customerForm.valid\">\n                Pridaj klienta\n            </button>\n\n            <button *ngIf=\"edit\" type=\"submit\" class=\"full-width btn btn-warning\" [disabled]=\"!customerForm.valid\">\n                Uprav klienta\n            </button>\n\n        </div>\n\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/pages/administration/customer/customer-create.component.ts":
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
var configuration_service_1 = __webpack_require__("../../../../../src/app/services/configuration.service.ts");
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var user_model_1 = __webpack_require__("../../../../../src/app/pages/users/user.model.ts");
var util_1 = __webpack_require__("../../../../util/util.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var CustomerCreation = (function () {
    function CustomerCreation(fb, loginSrv, configurationService, notificationSrv, restServ) {
        this.fb = fb;
        this.loginSrv = loginSrv;
        this.configurationService = configurationService;
        this.notificationSrv = notificationSrv;
        this.restServ = restServ;
        this.clientFormControlls = new Array();
        this.fixedInputs = new Array();
        this.prices = new Array();
        this.invoiceContact = false;
        this.type = 'company';
        this.onAdd = new core_1.EventEmitter();
        this.edit = false;
        this.createForm();
    }
    CustomerCreation.prototype.ngOnInit = function () {
        this.createForm();
    };
    CustomerCreation.prototype.ngOnChanges = function (changes) {
        if (changes.updateCustomer && !util_1.isUndefined(this.updateCustomer)) {
            this.customerForm.patchValue(this.updateCustomer);
            this.edit = true;
        }
        else if (util_1.isUndefined(this.updateCustomer)) {
            this.customerForm.reset();
            this.edit = false;
        }
    };
    CustomerCreation.prototype.createForm = function () {
        this.customerForm = this.fb.group({
            'ico': [],
            'dic': [],
            'icDph': [],
            'mainContact': this.fb.group({
                'name': ['', forms_1.Validators.required],
                'surname': ['', forms_1.Validators.required],
                'postcode': ['', forms_1.Validators.required],
                'telephone': ['', forms_1.Validators.required],
                'country': ['', forms_1.Validators.required],
                'accountNumber': [],
                'email': ['', forms_1.Validators.required],
                'street': ['', forms_1.Validators.required],
                'city': ['', forms_1.Validators.required],
                'iban': [],
                'swift': []
            }),
            'invoiceContact': {
                value: this.fb.group({
                    'name': [],
                    'surname': [],
                    'postcode': [],
                    'telephone': [],
                    'country': [],
                    'accountNumber': [],
                    'email': [],
                    'street': [],
                    'city': [],
                    'iban': [],
                    'swift': []
                }), disabled: true
            },
        });
    };
    Object.defineProperty(CustomerCreation.prototype, "products", {
        get: function () {
            return this.customerForm.get('products');
        },
        enumerable: true,
        configurable: true
    });
    CustomerCreation.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value;
        if (!this.edit) {
            this.restServ.createCustomer(value).subscribe(function (result) {
                console.log(result);
                _this.notificationSrv.success("Klient " + value.mainContact.name + " bola vytvoreny", "Klient");
                _this.onAdd.next(result);
                // window.alert("Nova faktura bola vytvorena!");
                //this.invoiceForm.reset();
            }, function (error) {
                _this.notificationSrv.error("Problem pri vytvarani klienta " + error._body, "Klient");
                if (error.status === 401) {
                    _this.loginSrv.logout();
                }
            });
        }
        else {
            this.restServ.updateCustomer(value).subscribe(function (result) {
                _this.notificationSrv.success("Klient " + value.mainContact.name + " bola vytvoreny", "Klient");
                _this.onAdd.next(result);
                // window.alert("Nova faktura bola vytvorena!");
                //this.invoiceForm.reset();
            }, function (error) {
                _this.notificationSrv.error("Problem pri upravovani klienta: " + error._body, "Klient");
                if (error.status === 401) {
                    _this.loginSrv.logout();
                }
            });
        }
    };
    return CustomerCreation;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CustomerCreation.prototype, "onAdd", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof user_model_1.Customer !== "undefined" && user_model_1.Customer) === "function" && _a || Object)
], CustomerCreation.prototype, "updateCustomer", void 0);
CustomerCreation = __decorate([
    core_1.Component({
        selector: 'customer-creation',
        styles: [__webpack_require__("../../../../../src/app/pages/administration/customer/customer-create.component.css")],
        template: __webpack_require__("../../../../../src/app/pages/administration/customer/customer-create.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _c || Object, typeof (_d = typeof configuration_service_1.ConfigurationService !== "undefined" && configuration_service_1.ConfigurationService) === "function" && _d || Object, typeof (_e = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _e || Object, typeof (_f = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _f || Object])
], CustomerCreation);
exports.CustomerCreation = CustomerCreation;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=customer-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/administration/customer/customer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/administration/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Administrácia klientov</h3>\n\n<button *ngIf=\"!!selectedCustomer\" class=\"btn btn-info btn-group-justified\" (click)=\"newClient()\">Novy klient</button>\n<customer-creation [updateCustomer]=\"selectedCustomer\" (onAdd)=\"onAdd($event)\"></customer-creation>\n<table class=\"table table-bordered table-hover\">\n    <tbody>\n    <tr>\n        <th>Email</th>\n        <th>Meno</th>\n        <th>Adresa</th>\n        <th>Mesto</th>\n        <th>ICO</th>\n        <th>DIC</th>\n        <th>Upraviť</th>\n    </tr>\n\n    <tr *ngFor=\"let customer of customers\">\n        <td>{{customer.mainContact?.email}}</td>\n        <td>{{customer.mainContact?.name + \" \" + customer.mainContact?.surname}}</td>\n        <td><a>{{customer?.mainContact?.city + \",\" + customer?.mainContact?.country}}</a></td>\n        <td>{{customer?.mainContact?.city}}</td>\n        <td><a>{{customer?.ico || '-'}}</a></td>\n        <td>{{customer?.dic || '-'}}</td>\n        <td><span class=\"clickable remove glyphicon glyphicon-remove-sign\" (click)=\"removeCustomer(customer)\"></span></td>\n        <td><span class=\"clickable glyphicon glyphicon-wrench\" (click)=\"updateCustomer(customer)\"></span></td>\n    </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/pages/administration/customer/customer.component.ts":
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
 * Created by a619678 on 19. 6. 2017.
 */
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var messages_service_1 = __webpack_require__("../../../../../src/app/services/messages.service.ts");
var configuration_service_1 = __webpack_require__("../../../../../src/app/services/configuration.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var rest_service_1 = __webpack_require__("../../../../../src/app/services/rest.service.ts");
var CustomerComponent = (function () {
    function CustomerComponent(configurationServ, msgServ, router, notificationServ, restServ) {
        // TODO
        this.configurationServ = configurationServ;
        this.msgServ = msgServ;
        this.router = router;
        this.notificationServ = notificationServ;
        this.restServ = restServ;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restServ.getCustomers().subscribe(function (customers) {
            _this.customers = customers;
            console.log("customers");
            console.log(_this.customers);
        });
    };
    CustomerComponent.prototype.onAdd = function (customer) {
        this.customers.push(customer);
    };
    CustomerComponent.prototype.ngOnDestroy = function () {
        // removing the header
        console.log("destroying the component");
    };
    CustomerComponent.prototype.removeCustomer = function (customer) {
        var _this = this;
        this.restServ.removeCompany(customer.id).subscribe(function (result) {
            _this.notificationServ.success("Company " + customer.mainContact.name + " was removed");
            _this.customers.splice(_this.customers.indexOf(customer), 1);
        });
    };
    CustomerComponent.prototype.updateCustomer = function (customer) {
        this.selectedCustomer = customer;
    };
    CustomerComponent.prototype.newClient = function () {
        this.selectedCustomer = undefined;
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    core_1.Component({
        selector: 'customer',
        styles: [__webpack_require__("../../../../../src/app/pages/administration/customer/customer.component.css")],
        template: __webpack_require__("../../../../../src/app/pages/administration/customer/customer.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof configuration_service_1.ConfigurationService !== "undefined" && configuration_service_1.ConfigurationService) === "function" && _a || Object, typeof (_b = typeof messages_service_1.MessagesService !== "undefined" && messages_service_1.MessagesService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _d || Object, typeof (_e = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _e || Object])
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/administration/email-templates/email-templates.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/administration/email-templates/email-templates.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" id=\"email\" [(ngModel)]=\"currentEmail\" class=\"form-control\"/>\n<button class=\"btn btn-success\" (click)=\"createEmail()\">Vytvor email</button>\n\n<table class=\"table table-bordered table-hover\">\n  <tbody>\n  <tr>\n    <th>Text</th>\n    <th>Odstrániť</th>\n  </tr>\n\n  <tr *ngFor=\"let email of emailTemplates\">\n    <td>{{email.text}}</td>\n    <td><span class=\"remove glyphicon glyphicon-remove-sign\" (click)=\"deleteEmail(email)\"></span></td>\n  </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/pages/administration/email-templates/email-templates.component.ts":
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
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var EmailTemplatesComponent = (function () {
    function EmailTemplatesComponent(_restService, _notificationService) {
        this._restService = _restService;
        this._notificationService = _notificationService;
    }
    EmailTemplatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._restService.getEmails().subscribe(function (results) {
            _this.emailTemplates = results;
        }, function (error) {
            _this._notificationService.error('problem pri ziskavani dat', 'Emaily');
        });
    };
    EmailTemplatesComponent.prototype.createEmail = function () {
        var _this = this;
        this._restService.createEmail({ text: this.currentEmail }).subscribe(function (result) {
            _this.emailTemplates.push(result);
            _this._notificationService.success('bol uspesne vytvoreny', 'Email');
        }, function (error) {
            _this._notificationService.error('bol uspesne vytvoreny', 'Email');
        });
    };
    EmailTemplatesComponent.prototype.setUpdate = function (email) {
    };
    EmailTemplatesComponent.prototype.deleteEmail = function (email) {
        var _this = this;
        this._restService.deleteEmail(email.id).subscribe(function (result) {
            _this.emailTemplates.splice(_this.emailTemplates.indexOf(email), 1);
            _this._notificationService.success('bol uspesne zmazany', 'Email');
        }, function (error) {
            _this._notificationService.error('nebol uspesne zmazany', 'Email');
        });
    };
    return EmailTemplatesComponent;
}());
EmailTemplatesComponent = __decorate([
    core_1.Component({
        selector: 'app-email-templates',
        template: __webpack_require__("../../../../../src/app/pages/administration/email-templates/email-templates.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/administration/email-templates/email-templates.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof rest_service_1.RestService !== "undefined" && rest_service_1.RestService) === "function" && _a || Object, typeof (_b = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _b || Object])
], EmailTemplatesComponent);
exports.EmailTemplatesComponent = EmailTemplatesComponent;
var _a, _b;
//# sourceMappingURL=email-templates.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/administration/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create-form {\n    text-align: center;\n}\n\n.create-form button {\n    margin-top: 10px;\n}\n\n.role-selection {\n    padding-top : 10px;\n}\n\n.role-selection i {\n    display: block;\n}\n\n.btn {\n    padding: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/administration/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"registerUser(userCreationForm)\" [formGroup]=\"userCreationForm\">\n    <h3>Vytvorenie uzivatela</h3>\n    <div class=\"create-form form-group\">\n        <i>Zadajte emailovu adresu: </i>\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\"/>\n\n        <div class=\"role-selection\">\n            <i>Vyberte role: </i>\n            <p-selectButton [options]=\"optionRoles\" formControlName=\"roles\"\n                            multiple=\"multiple\"></p-selectButton>\n        </div>\n        <button [disabled]=\"!userCreationForm.valid\"\n                class=\"btn btn-block btn-info\" type=\"submit\">Zaregistruj email\n        </button>\n    </div>\n</form>\n\n<form *ngIf=\"activeUserId\" (ngSubmit)=\"onSubmit(userDetailForm)\" [formGroup]=\"userDetailForm\">\n\n    <div class=\"form-group\">\n        <div>\n\n            <div class=\"col-lg-6 form-group\">\n                <label for=\"name\">Meno:</label>\n                <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\"/>\n            </div>\n\n            <div class=\"col-lg-6 form-group\">\n                <label for=\"surname\">Priezvisko:</label>\n                <input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\"/>\n            </div>\n\n            <!--<div class=\"col-lg-6 form-group\">-->\n                <!--<label for=\"tmpPassword\">Zmena Hesla:</label>-->\n                <!--<input #pass1 type=\"password\" id=\"tmpPassword\" class=\"form-control\" formControlName=\"tmpPass\"/>-->\n            <!--</div>-->\n\n            <div class=\"col-lg-12 form-group\">\n                <label for=\"email\">Email:</label>\n                <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\"/>\n            </div>\n\n            <div class=\"col-lg-12 form-group\">\n                <label for=\"role\">Role:</label>\n                <p-selectButton id=\"role\" [options]=\"optionRoles\" formControlName=\"roles\"\n                                multiple=\"multiple\"></p-selectButton>\n            </div>\n        </div>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-block btn-warning\">Uprav udaje</button>\n</form>\n\n    <div class=\"list\">\n        <table class=\"table table-bordered table-hover\">\n            <tbody>\n            <tr>\n                <th>Id</th>\n                <th>Email</th>\n                <th>Meno</th>\n                <th>Surname</th>\n                <th>Role</th>\n                <th>Uprav</th>\n            </tr>\n\n            <tr *ngFor=\"let user of users\">\n                <td>{{user?.id}}</td>\n                <td><a>{{user?.email}}</a></td>\n                <td>{{user?.name}}</td>\n                <td><a>{{user?.surname}}</a></td>\n                <td>{{user?.roles.toString()}}</td>\n                <td><span class=\"clickable open glyphicon glyphicon-wrench\" (click)=\"openUser(user)\"></span></td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/administration/user/user.component.ts":
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
var GlobalValidator_1 = __webpack_require__("../../../../../src/app/helpers/GlobalValidator.ts");
var notification_service_1 = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var UserComponent = (function () {
    function UserComponent(userServ, notificationSrv, fb) {
        var _this = this;
        this.userServ = userServ;
        this.notificationSrv = notificationSrv;
        this.fb = fb;
        this.userServ.getAllUsers().subscribe(function (users) {
            _this.users = users;
        }, function (error) {
            _this.notificationSrv.error('Uzivatelia', 'chyba pri ziskavani dat');
        });
        this.userCreationForm = this.fb.group({
            'email': ["", forms_1.Validators.compose([forms_1.Validators.required, GlobalValidator_1.GlobalValidator.mailFormat])],
            'roles': [[]]
        });
        this.userDetailForm = this.fb.group({
            'name': ["", forms_1.Validators.required],
            'surname': ["", forms_1.Validators.required],
            'email': ["", forms_1.Validators.required],
            'roles': ["", forms_1.Validators.required],
            'tmpPass': [""]
        });
        this.emailControl = this.userCreationForm.get('email');
    }
    UserComponent.prototype.registerUser = function (_a) {
        var _this = this;
        var value = _a.value;
        this.userServ.registerUser(value).subscribe(function (result) { return _this.onSuccesfullRegistration(_this.userCreationForm.value.email); }, function (error) { return _this.onErrorWhileRegistration(error); });
    };
    UserComponent.prototype.onSuccesfullRegistration = function (email) {
        this.notificationSrv.success('Registrcia uspesna', 'Na mailovy ucet: ' + email + ' bola uspesne odoslana registracna sprava');
        this.userCreationForm.reset();
    };
    UserComponent.prototype.onErrorWhileRegistration = function (error) {
        this.notificationSrv.error('Registracia neuspesna', 'Uzivatel uz existuje ');
    };
    UserComponent.prototype.removeUser = function (user) {
        var _this = this;
        window.confirm('Naozaj chcete odstranit pouzivatela? ');
        {
            this.userServ.deleteUser(user).subscribe(function () {
                _this.notificationSrv.success("Pouzivatel " + user.username, 'bol uspesne odstraneny');
            });
        }
    };
    UserComponent.prototype.openUser = function (user) {
        this.activeUserId = user.id;
        this.userDetailForm.patchValue(user);
    };
    Object.defineProperty(UserComponent.prototype, "optionRoles", {
        get: function () {
            var itemRoles = [];
            for (var _i = 0, _a = this.userServ.roles; _i < _a.length; _i++) {
                var role = _a[_i];
                itemRoles.push({ label: this.getRoleLabel(role), value: role });
            }
            return itemRoles;
        },
        enumerable: true,
        configurable: true
    });
    UserComponent.prototype.getRoleLabel = function (name) {
        switch (name) {
            case "ROLE_ADMIN": return 'Administrator';
            case "ROLE_TECHNICIAN": return 'Technik';
            case "ROLE_DEALER": return 'Obchodnik';
        }
    };
    UserComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value;
        delete value.email;
        if (value.tmpPass.length < 1) {
            delete value.tmpPass;
            console.log('removing password');
        }
        this.userServ.updateUser(value, this.activeUserId).subscribe(function (result) {
            _this.notificationSrv.success("Uzivatel " + value.name + " " + value.surname, 'Bol uspesne modifikovany');
        }, function (error) {
            _this.notificationSrv.error("Uzivatel " + value.name + " " + value.surname, 'Nebol uspesne modifikovany');
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/pages/administration/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/administration/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object])
], UserComponent);
exports.UserComponent = UserComponent;
var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../../../util/node_modules/inherits/inherits_browser.js":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../../../../util/support/isBufferBrowser.js":
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "../../../../util/util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__("../../../../util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__("../../../../util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js"), __webpack_require__("../../../../process/browser.js")))

/***/ })

});
//# sourceMappingURL=administration.module.chunk.js.map