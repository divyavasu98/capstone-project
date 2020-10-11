(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registration_subComponents_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration/subComponents/contact-details/contact-details.component */ "./src/app/registration/subComponents/contact-details/contact-details.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_subComponents_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/subComponents/personal-details/personal-details.component */ "./src/app/registration/subComponents/personal-details/personal-details.component.ts");
/* harmony import */ var _registration_subComponents_kyc_details_kyc_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/subComponents/kyc-details/kyc-details.component */ "./src/app/registration/subComponents/kyc-details/kyc-details.component.ts");
/* harmony import */ var _registration_subComponents_address_details_address_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration/subComponents/address-details/address-details.component */ "./src/app/registration/subComponents/address-details/address-details.component.ts");
/* harmony import */ var _registration_subComponents_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration/subComponents/user-registration/user-registration.component */ "./src/app/registration/subComponents/user-registration/user-registration.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-home/user-home.component */ "./src/app/user-home/user-home.component.ts");
/* harmony import */ var _chequebook_request_chequebook_request_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chequebook-request/chequebook-request.component */ "./src/app/chequebook-request/chequebook-request.component.ts");
/* harmony import */ var _transfer_funds_transfer_funds_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transfer-funds/transfer-funds.component */ "./src/app/transfer-funds/transfer-funds.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _deposit_funds_deposit_funds_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deposit-funds/deposit-funds.component */ "./src/app/deposit-funds/deposit-funds.component.ts");
/* harmony import */ var _withdraw_fund_withdraw_fund_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./withdraw-fund/withdraw-fund.component */ "./src/app/withdraw-fund/withdraw-fund.component.ts");
/* harmony import */ var _service_route_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/route-guard.service */ "./src/app/service/route-guard.service.ts");
/* harmony import */ var _primary_account_primary_account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./primary-account/primary-account.component */ "./src/app/primary-account/primary-account.component.ts");
/* harmony import */ var _saving_account_saving_account_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./saving-account/saving-account.component */ "./src/app/saving-account/saving-account.component.ts");




















const routes = [
    { path: "register/contactDetails", component: _registration_subComponents_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_2__["ContactDetailsComponent"] },
    { path: "register/personalDetails", component: _registration_subComponents_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_4__["PersonalDetailsComponent"] },
    { path: "register/kycDetails", component: _registration_subComponents_kyc_details_kyc_details_component__WEBPACK_IMPORTED_MODULE_5__["KycDetailsComponent"] },
    { path: "register/addressDetails", component: _registration_subComponents_address_details_address_details_component__WEBPACK_IMPORTED_MODULE_6__["AddressDetailsComponent"] },
    { path: "register/userRegistration", component: _registration_subComponents_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_7__["UserRegistrationComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "register", component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"] },
    { path: "user/home", component: _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_9__["UserHomeComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_15__["RouteGuardService"]] },
    { path: "user/chequeBookRequest", component: _chequebook_request_chequebook_request_component__WEBPACK_IMPORTED_MODULE_10__["ChequebookRequestComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_15__["RouteGuardService"]] },
    { path: "user/transferFundRequest", component: _transfer_funds_transfer_funds_component__WEBPACK_IMPORTED_MODULE_11__["TransferFundsComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_15__["RouteGuardService"]] },
    { path: "user/profile", component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_12__["UserProfileComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_15__["RouteGuardService"]] },
    { path: "user/depositFund", component: _deposit_funds_deposit_funds_component__WEBPACK_IMPORTED_MODULE_13__["DepositFundsComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_15__["RouteGuardService"]] },
    { path: "user/withdrawFund", component: _withdraw_fund_withdraw_fund_component__WEBPACK_IMPORTED_MODULE_14__["WithdrawFundComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_15__["RouteGuardService"]] },
    { path: "user/primaryAccount", component: _primary_account_primary_account_component__WEBPACK_IMPORTED_MODULE_16__["PrimaryAccountComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_15__["RouteGuardService"]] },
    { path: "user/savingAccount", component: _saving_account_saving_account_component__WEBPACK_IMPORTED_MODULE_17__["SavingAccountComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_15__["RouteGuardService"]] },
    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'ICIN-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\t background: #8eebb5;\n    font-family: 'Roboto', sans-serif;\n}\n\n\n.form-control[_ngcontent-%COMP%] {\n\tfont-size: 15px;\n}\n\n\n.form-control[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:focus, .input-group-text[_ngcontent-%COMP%] {\n\tborder-color: #e1e1e1;\n}\n\n\n.form-control[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {        \n\tborder-radius: 3px;\n}\n\n\n.signup-form[_ngcontent-%COMP%] {\n\twidth: 400px;\n\tmargin: 0 auto;\n\tpadding: 30px 0;\t\t\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n\tcolor: #999;\n\tborder-radius: 3px;\n\tmargin-bottom: 15px;\n\tbackground: #fff;\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    padding: 30px;\n    height:50%;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n\tcolor: #333;\n\tfont-weight: bold;\n\tmargin-top: 0;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n\tmargin: 0 -30px 20px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n\tmargin-bottom: 20px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n\tfont-weight: normal;\n\tfont-size: 15px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n\tmin-height: 38px;\n\tbox-shadow: none !important;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n\tmax-width: 42px;\n\ttext-align: center;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {        \n\tfont-size: 16px;\n\tfont-weight: bold;\n\tbackground: #19aa8d !important;\n\tborder: none;\n\tmin-width: 140px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n\tbackground: #179b81 !important;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff;\t\n\ttext-decoration: underline;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\ttext-decoration: none;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #19aa8d;\n\ttext-decoration: none;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\ttext-decoration: underline;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n\tfont-size: 21px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa-paper-plane[_ngcontent-%COMP%] {\n\tfont-size: 18px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\tleft: 17px;\n\ttop: 18px;\n\tfont-size: 7px;\n\tposition: absolute;\n}\n\n\n#signUp[_ngcontent-%COMP%]{\n    position:relative;\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7RUFDVixtQkFBbUI7SUFDakIsaUNBQWlDO0FBQ3JDOzs7QUFHQTtDQUNDLGVBQWU7QUFDaEI7OztBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCOzs7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjs7O0FBQ0E7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLGVBQWU7QUFDaEI7OztBQUNBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLDBDQUEwQztJQUN2QyxhQUFhO0lBQ2IsVUFBVTtBQUNkOzs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsYUFBYTtBQUNkOzs7QUFDQTtDQUNDLG9CQUFvQjtBQUNyQjs7O0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7OztBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7OztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtBQUM1Qjs7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COzs7QUFDQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7OztBQUNBO0NBQ0MsOEJBQThCO0FBQy9COzs7QUFDQTtDQUNDLFdBQVc7Q0FDWCwwQkFBMEI7QUFDM0I7OztBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCOzs7QUFDQTtDQUNDLGNBQWM7Q0FDZCxxQkFBcUI7QUFDdEI7OztBQUNBO0NBQ0MsMEJBQTBCO0FBQzNCOzs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7OztBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtDQUNWLFNBQVM7Q0FDVCxjQUFjO0NBQ2Qsa0JBQWtCO0FBQ25COzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuXHRjb2xvcjogI2ZmZjtcblx0IGJhY2tncm91bmQ6ICM4ZWViYjU7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5cbi5mb3JtLWNvbnRyb2wge1xuXHRmb250LXNpemU6IDE1cHg7XG59XG4uZm9ybS1jb250cm9sLCAuZm9ybS1jb250cm9sOmZvY3VzLCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG5cdGJvcmRlci1jb2xvcjogI2UxZTFlMTtcbn1cbi5mb3JtLWNvbnRyb2wsIC5idG4geyAgICAgICAgXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5zaWdudXAtZm9ybSB7XG5cdHdpZHRoOiA0MDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDMwcHggMDtcdFx0XG59XG4uc2lnbnVwLWZvcm0gZm9ybSB7XG5cdGNvbG9yOiAjOTk5O1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGhlaWdodDo1MCU7XG59XG4uc2lnbnVwLWZvcm0gaDIge1xuXHRjb2xvcjogIzMzMztcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdG1hcmdpbi10b3A6IDA7XG59XG4uc2lnbnVwLWZvcm0gaHIge1xuXHRtYXJnaW46IDAgLTMwcHggMjBweDtcbn1cbi5zaWdudXAtZm9ybSAuZm9ybS1ncm91cCB7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2lnbnVwLWZvcm0gbGFiZWwge1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRmb250LXNpemU6IDE1cHg7XG59XG4uc2lnbnVwLWZvcm0gLmZvcm0tY29udHJvbCB7XG5cdG1pbi1oZWlnaHQ6IDM4cHg7XG5cdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cdFxuLnNpZ251cC1mb3JtIC5pbnB1dC1ncm91cC1hZGRvbiB7XG5cdG1heC13aWR0aDogNDJweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVx0XG4uc2lnbnVwLWZvcm0gLmJ0biwgLnNpZ251cC1mb3JtIC5idG46YWN0aXZlIHsgICAgICAgIFxuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRiYWNrZ3JvdW5kOiAjMTlhYThkICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogbm9uZTtcblx0bWluLXdpZHRoOiAxNDBweDtcbn1cbi5zaWdudXAtZm9ybSAuYnRuOmhvdmVyLCAuc2lnbnVwLWZvcm0gLmJ0bjpmb2N1cyB7XG5cdGJhY2tncm91bmQ6ICMxNzliODEgIWltcG9ydGFudDtcbn1cbi5zaWdudXAtZm9ybSBhIHtcblx0Y29sb3I6ICNmZmY7XHRcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uc2lnbnVwLWZvcm0gYTpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zaWdudXAtZm9ybSBmb3JtIGEge1xuXHRjb2xvcjogIzE5YWE4ZDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVx0XG4uc2lnbnVwLWZvcm0gZm9ybSBhOmhvdmVyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uc2lnbnVwLWZvcm0gLmZhIHtcblx0Zm9udC1zaXplOiAyMXB4O1xufVxuLnNpZ251cC1mb3JtIC5mYS1wYXBlci1wbGFuZSB7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cbi5zaWdudXAtZm9ybSAuZmEtY2hlY2sge1xuXHRjb2xvcjogI2ZmZjtcblx0bGVmdDogMTdweDtcblx0dG9wOiAxOHB4O1xuXHRmb250LXNpemU6IDdweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG5cbiNzaWduVXB7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _registration_subComponents_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration/subComponents/personal-details/personal-details.component */ "./src/app/registration/subComponents/personal-details/personal-details.component.ts");
/* harmony import */ var _registration_subComponents_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registration/subComponents/contact-details/contact-details.component */ "./src/app/registration/subComponents/contact-details/contact-details.component.ts");
/* harmony import */ var _registration_subComponents_kyc_details_kyc_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registration/subComponents/kyc-details/kyc-details.component */ "./src/app/registration/subComponents/kyc-details/kyc-details.component.ts");
/* harmony import */ var _registration_subComponents_address_details_address_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registration/subComponents/address-details/address-details.component */ "./src/app/registration/subComponents/address-details/address-details.component.ts");
/* harmony import */ var _registration_subComponents_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./registration/subComponents/user-registration/user-registration.component */ "./src/app/registration/subComponents/user-registration/user-registration.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-home/user-home.component */ "./src/app/user-home/user-home.component.ts");
/* harmony import */ var _chequebook_request_chequebook_request_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chequebook-request/chequebook-request.component */ "./src/app/chequebook-request/chequebook-request.component.ts");
/* harmony import */ var _transfer_funds_transfer_funds_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transfer-funds/transfer-funds.component */ "./src/app/transfer-funds/transfer-funds.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _deposit_funds_deposit_funds_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./deposit-funds/deposit-funds.component */ "./src/app/deposit-funds/deposit-funds.component.ts");
/* harmony import */ var _withdraw_fund_withdraw_fund_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./withdraw-fund/withdraw-fund.component */ "./src/app/withdraw-fund/withdraw-fund.component.ts");
/* harmony import */ var _primary_account_primary_account_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./primary-account/primary-account.component */ "./src/app/primary-account/primary-account.component.ts");
/* harmony import */ var _saving_account_saving_account_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./saving-account/saving-account.component */ "./src/app/saving-account/saving-account.component.ts");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
        _registration_subComponents_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_7__["PersonalDetailsComponent"],
        _registration_subComponents_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_8__["ContactDetailsComponent"],
        _registration_subComponents_kyc_details_kyc_details_component__WEBPACK_IMPORTED_MODULE_9__["KycDetailsComponent"],
        _registration_subComponents_address_details_address_details_component__WEBPACK_IMPORTED_MODULE_10__["AddressDetailsComponent"],
        _registration_subComponents_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_11__["UserRegistrationComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
        _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_14__["UserHomeComponent"],
        _chequebook_request_chequebook_request_component__WEBPACK_IMPORTED_MODULE_15__["ChequebookRequestComponent"],
        _transfer_funds_transfer_funds_component__WEBPACK_IMPORTED_MODULE_16__["TransferFundsComponent"],
        _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__["UserProfileComponent"],
        _deposit_funds_deposit_funds_component__WEBPACK_IMPORTED_MODULE_19__["DepositFundsComponent"],
        _withdraw_fund_withdraw_fund_component__WEBPACK_IMPORTED_MODULE_20__["WithdrawFundComponent"],
        _primary_account_primary_account_component__WEBPACK_IMPORTED_MODULE_21__["PrimaryAccountComponent"],
        _saving_account_saving_account_component__WEBPACK_IMPORTED_MODULE_22__["SavingAccountComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
                    _registration_subComponents_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_7__["PersonalDetailsComponent"],
                    _registration_subComponents_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_8__["ContactDetailsComponent"],
                    _registration_subComponents_kyc_details_kyc_details_component__WEBPACK_IMPORTED_MODULE_9__["KycDetailsComponent"],
                    _registration_subComponents_address_details_address_details_component__WEBPACK_IMPORTED_MODULE_10__["AddressDetailsComponent"],
                    _registration_subComponents_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_11__["UserRegistrationComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                    _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_14__["UserHomeComponent"],
                    _chequebook_request_chequebook_request_component__WEBPACK_IMPORTED_MODULE_15__["ChequebookRequestComponent"],
                    _transfer_funds_transfer_funds_component__WEBPACK_IMPORTED_MODULE_16__["TransferFundsComponent"],
                    _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__["UserProfileComponent"],
                    _deposit_funds_deposit_funds_component__WEBPACK_IMPORTED_MODULE_19__["DepositFundsComponent"],
                    _withdraw_fund_withdraw_fund_component__WEBPACK_IMPORTED_MODULE_20__["WithdrawFundComponent"],
                    _primary_account_primary_account_component__WEBPACK_IMPORTED_MODULE_21__["PrimaryAccountComponent"],
                    _saving_account_saving_account_component__WEBPACK_IMPORTED_MODULE_22__["SavingAccountComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chequebook-request/chequebook-request.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/chequebook-request/chequebook-request.component.ts ***!
  \********************************************************************/
/*! exports provided: ChequeBook, ChequebookRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeBook", function() { return ChequeBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequebookRequestComponent", function() { return ChequebookRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_user_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user-services.service */ "./src/app/service/user-services.service.ts");






class ChequeBook {
    constructor(accepted, user) {
        this.accepted = accepted;
        this.user = user;
    }
}
class ChequebookRequestComponent {
    constructor(route, formbuilder, service) {
        this.route = route;
        this.formbuilder = formbuilder;
        this.service = service;
        this.account = this.getAccountPassedByParent();
    }
    ngOnInit() {
        this.chequeBookRequestForm = this.formbuilder.group({
            accountType: [this.account, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    getAccountPassedByParent() {
        return history.state.data;
    }
    get f() {
        return this.chequeBookRequestForm.controls;
    }
    handleChequebookRequest() {
        let userObj = JSON.parse(sessionStorage.getItem("userObj"));
        this.service.requestChequeBook(new ChequeBook(false, userObj), userObj).subscribe(response => {
            alert("Chequebook request submiited");
            console.log(response);
            this.route.navigate(["user", "home"]);
        }, error => {
            alert("Chequebook request failed");
            console.log(error);
        });
    }
}
ChequebookRequestComponent.ɵfac = function ChequebookRequestComponent_Factory(t) { return new (t || ChequebookRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_services_service__WEBPACK_IMPORTED_MODULE_3__["UserServicesService"])); };
ChequebookRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChequebookRequestComponent, selectors: [["app-chequebook-request"]], decls: 16, vars: 1, consts: [[1, "jumbotron", "bg-light", "text-dark", "p-10"], [3, "formGroup"], [1, "form-group"], ["for", "accountType"], ["id", "accountType", "name", "accountType", "formControlName", "accountType", 1, "form-control"], ["for", "Description"], ["id", "description", "rows", "2", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]], template: function ChequebookRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please select your account type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Primary Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Saving Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequebookRequestComponent_Template_button_click_14_listener() { return ctx.handleChequebookRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Submit Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.chequeBookRequestForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".jumbotron[_ngcontent-%COMP%]{\n    margin:15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jaGVxdWVib29rLXJlcXVlc3QvY2hlcXVlYm9vay1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoiYXBwL2NoZXF1ZWJvb2stcmVxdWVzdC9jaGVxdWVib29rLXJlcXVlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XG4gICAgbWFyZ2luOjE1JTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChequebookRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chequebook-request',
                templateUrl: './chequebook-request.component.html',
                styleUrls: ['./chequebook-request.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _service_user_services_service__WEBPACK_IMPORTED_MODULE_3__["UserServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/deposit-funds/deposit-funds.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/deposit-funds/deposit-funds.component.ts ***!
  \**********************************************************/
/*! exports provided: Deposit, DepositFundsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deposit", function() { return Deposit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositFundsComponent", function() { return DepositFundsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_user_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user-services.service */ "./src/app/service/user-services.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function DepositFundsComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DepositFundsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepositFundsComponent_div_18_div_1_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.amountToBeDeposited.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class Deposit {
    constructor(accType, accNo, amount) {
        this.accType = accType;
        this.accNo = accNo;
        this.amount = amount;
    }
}
class DepositFundsComponent {
    constructor(route, formBuilder, service) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.service = service;
        this.submitted = false;
    }
    ngOnInit() {
        this.depositFundForm = this.formBuilder.group({
            accountType: ["Primary Account"],
            balance: [this.balanceFund],
            amountToBeDeposited: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.getBalanceAsPerAccountType(this.depositFundForm.get("accountType").value);
    }
    getBalanceAsPerAccountType(accountType) {
        if (accountType === "Primary Account")
            this.getBalance(sessionStorage.getItem("primaryAccountNumber"));
        else
            this.balanceFund = Number(sessionStorage.getItem("savingAccountBalance"));
    }
    get f() {
        return this.depositFundForm.controls;
    }
    getBalance(account) {
        this.service.getAccountBalance(Number(account)).subscribe(response => {
            this.balanceFund = Number(response);
        }, error => {
            console.log(error);
        });
    }
    handleTransferFund() {
        this.submitted = true;
        if (this.depositFundForm.invalid) {
            console.log("Invalid");
        }
        else {
            if (this.depositFundForm.get("accountType").value === "Primary Account") {
                this.service.depositMoney("Primary", Number(sessionStorage.getItem("primaryAccountNumber")), Number(this.depositFundForm.get("amountToBeDeposited").value)).subscribe(response => {
                    console.log(response);
                    alert("Money deposited successfully!!");
                    this.route.navigate(["user", "home"]);
                }, error => {
                    alert("Transaction Failed");
                    console.log(error);
                });
            }
            else {
                this.service.depositMoney("Savings", Number(sessionStorage.getItem("savingAccountNumber")), Number(this.depositFundForm.get("amountToBeDeposited").value)).subscribe(response => {
                    console.log(response);
                    let updatedBalance = Number(this.depositFundForm.get("amountToBeDeposited").value) + Number(sessionStorage.getItem("savingAccountBalance"));
                    sessionStorage.setItem("savingAccountBalance", String(updatedBalance));
                    alert("Money deposited successfully!!");
                    this.route.navigate(["user", "home"]);
                }, error => {
                    alert("Transaction Failed");
                    console.log(error);
                });
            }
        }
    }
    onChange(event) {
        const newVal = event.target.value;
        this.getBalanceAsPerAccountType(newVal);
        // console.log(newVal);
    }
}
DepositFundsComponent.ɵfac = function DepositFundsComponent_Factory(t) { return new (t || DepositFundsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_services_service__WEBPACK_IMPORTED_MODULE_3__["UserServicesService"])); };
DepositFundsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepositFundsComponent, selectors: [["app-deposit-funds"]], decls: 21, vars: 6, consts: [[1, "jumbotron", "bg-light", "text-dark", "p-10"], [3, "formGroup"], [1, "form-group"], ["for", "accountType"], ["id", "accountType", "name", "accountType", "formControlName", "accountType", 1, "form-control", 3, "change"], ["for", "accountBalance"], ["type", "text", "readonly", "", "id", "accountBalance", "placeholder", "", "formControlName", "balance", 1, "form-control", 3, "value"], ["for", "amountToBeDeposited"], ["type", "number", "id", "amountToBeDeposited", "formControlName", "amountToBeDeposited", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "button", "id", "depositMoneyButton", 1, "btn", "btn-primary", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], [1, "alert", "alert-warning", "mt-2"]], template: function DepositFundsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Account type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DepositFundsComponent_Template_select_change_5_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Primary Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Saving Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Amount to be deposited");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DepositFundsComponent_div_18_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepositFundsComponent_Template_button_click_19_listener() { return ctx.handleTransferFund(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Deposit Money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.depositFundForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.balanceFund);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.submitted && ctx.f.amountToBeDeposited.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.amountToBeDeposited.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".jumbotron[_ngcontent-%COMP%]{\n    margin-top:3%;\n    margin-right:15%;\n    margin-left: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kZXBvc2l0LWZ1bmRzL2RlcG9zaXQtZnVuZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImFwcC9kZXBvc2l0LWZ1bmRzL2RlcG9zaXQtZnVuZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XG4gICAgbWFyZ2luLXRvcDozJTtcbiAgICBtYXJnaW4tcmlnaHQ6MTUlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepositFundsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deposit-funds',
                templateUrl: './deposit-funds.component.html',
                styleUrls: ['./deposit-funds.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _service_user_services_service__WEBPACK_IMPORTED_MODULE_3__["UserServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomepageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    redirectToRegister() {
        this.router.navigate(["register", "personalDetails"]);
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 0, vars: 0, template: function HomepageComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _registration_subComponents_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../registration/subComponents/user-registration/user-registration.component */ "./src/app/registration/subComponents/user-registration/user-registration.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_user_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user-services.service */ "./src/app/service/user-services.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_13_div_1_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_13_div_2_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email);
} }
function LoginComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_20_div_1_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(router, formbuilder, service) {
        this.router = router;
        this.formbuilder = formbuilder;
        this.service = service;
        this.submitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formbuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    validateLogin() {
        this.submitted = true;
        //  console.log(this.loginForm.get("username").value);
        if (!this.loginForm.invalid) {
            let newUser = new _registration_subComponents_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__["User"]("", "", this.loginForm.get("email").value, null, "", this.loginForm.get("password").value, null, null);
            this.service.authenticateUser(newUser).subscribe(response => {
                console.log(response),
                    sessionStorage.removeItem("password");
                sessionStorage.setItem("isAuthenticatedUser", response["fullname"]);
                sessionStorage.setItem("mailid", response["mailid"]);
                sessionStorage.setItem("phonenumber", response["phonenumber"]);
                sessionStorage.setItem("firstname", response["fullname"]);
                sessionStorage.setItem("lastname", response["surname"]);
                sessionStorage.setItem("address", response["address"]);
                sessionStorage.setItem("primaryAccountNumber", response["primaryAccount"]["accountNumber"]);
                sessionStorage.setItem("primaryAccountBalance", response["primaryAccount"]["accountBalance"]);
                sessionStorage.setItem("savingAccountNumber", response["savingsAccount"]["accountNumber"]);
                sessionStorage.setItem("savingAccountBalance", response["savingsAccount"]["accountBalance"]);
                sessionStorage.setItem("accountID", response["id"]);
                sessionStorage.setItem("userObj", JSON.stringify(response));
                console.log("Json object is ");
                let u = JSON.parse(sessionStorage.getItem("userObj"));
                console.log(u);
                //primaryAccount: {accountNumber: 22113346, accountBalance: 0}
                this.router.navigate(["user", "home"]);
            }, error => {
                // alert("Invalid Credentials") 
                alert("Login failed!!");
            });
        }
    }
    get f() { return this.loginForm.controls; }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_services_service__WEBPACK_IMPORTED_MODULE_4__["UserServicesService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 28, vars: 9, consts: [[1, "signup-form"], [3, "formGroup"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user"], ["type", "text", "name", "email", "placeholder", "Email address", "required", "required", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "fa", "fa-lock"], ["type", "password", "name", "password", "placeholder", "Password", "required", "required", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["type", "button", "id", "loginButton", 1, "btn", "btn-primary", "btn-lg", "float-center", 3, "click"], [1, "text-center"], ["href", "#", "routerLink", "/register", 1, "text-white"], [1, "invalid-feedback"], [4, "ngIf"], [1, "alert", "alert-warning", "mt-2"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login with your credentials to start exploring our digital services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() { return ctx.validateLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "New user? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Register Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.password.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".fa[_ngcontent-%COMP%]{\n    width:20px;\n}\n\n\nbody[_ngcontent-%COMP%] {\n\tcolor: #fff;\n    font-family: 'Roboto', sans-serif;\n}\n\n\n.form-control[_ngcontent-%COMP%] {\n\tfont-size: 15px;\n}\n\n\n.form-control[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:focus, .input-group-text[_ngcontent-%COMP%] {\n\tborder-color: #e1e1e1;\n}\n\n\n.form-control[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {        \n\tborder-radius: 3px;\n}\n\n\n.signup-form[_ngcontent-%COMP%] {\n\twidth: 400px;\n\tmargin: 0 auto;\n\tpadding: 30px 0;\t\t\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n\tcolor: black;\n\tborder-radius: 3px;\n\tmargin-bottom: 15px;\n\tbackground: #fff;\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    padding: 30px;\n    height:50%;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n\tcolor: black;\n\tfont-weight: bold;\n\tmargin-top: 0;\n\tfont-family: 'Times New Roman';\n}\n\n\n.signup-form[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n\tmargin: 0 -30px 20px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n\tmargin-bottom: 20px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n\tfont-weight: normal;\n\tfont-size: 15px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n\tmin-height: 38px;\n\tbox-shadow: none !important;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n\tmax-width: 42px;\n\ttext-align: center;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {        \n\tfont-size: 16px;\n\tfont-weight: bold;\n\tbackground: blue !important;\n\tborder: none;\n\tmin-width: 140px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n\tbackground: lightblue !important;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff;\t\n\ttext-decoration: underline;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\ttext-decoration: none;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: blue;\n\ttext-decoration: none;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\ttext-decoration: underline;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n\tfont-size: 21px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa-paper-plane[_ngcontent-%COMP%] {\n\tfont-size: 18px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\tleft: 17px;\n\ttop: 18px;\n\tfont-size: 7px;\n\tposition: absolute;\n}\n\n\n#signUp[_ngcontent-%COMP%]{\n    position:relative;\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtDQUNDLFdBQVc7SUFDUixpQ0FBaUM7QUFDckM7OztBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7O0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7OztBQUNBO0NBQ0Msa0JBQWtCO0FBQ25COzs7QUFDQTtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2QsZUFBZTtBQUNoQjs7O0FBQ0E7Q0FDQyxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsMENBQTBDO0lBQ3ZDLGFBQWE7SUFDYixVQUFVO0FBQ2Q7OztBQUNBO0NBQ0MsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsOEJBQThCO0FBQy9COzs7QUFDQTtDQUNDLG9CQUFvQjtBQUNyQjs7O0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7OztBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7OztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtBQUM1Qjs7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COzs7QUFDQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsMkJBQTJCO0NBQzNCLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7OztBQUNBO0NBQ0MsZ0NBQWdDO0FBQ2pDOzs7QUFDQTtDQUNDLFdBQVc7Q0FDWCwwQkFBMEI7QUFDM0I7OztBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCOzs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEI7OztBQUNBO0NBQ0MsMEJBQTBCO0FBQzNCOzs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7OztBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtDQUNWLFNBQVM7Q0FDVCxjQUFjO0NBQ2Qsa0JBQWtCO0FBQ25COzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCIiwiZmlsZSI6ImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhe1xuICAgIHdpZHRoOjIwcHg7XG59XG5cblxuYm9keSB7XG5cdGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cbi5mb3JtLWNvbnRyb2wge1xuXHRmb250LXNpemU6IDE1cHg7XG59XG4uZm9ybS1jb250cm9sLCAuZm9ybS1jb250cm9sOmZvY3VzLCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG5cdGJvcmRlci1jb2xvcjogI2UxZTFlMTtcbn1cbi5mb3JtLWNvbnRyb2wsIC5idG4geyAgICAgICAgXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5zaWdudXAtZm9ybSB7XG5cdHdpZHRoOiA0MDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDMwcHggMDtcdFx0XG59XG4uc2lnbnVwLWZvcm0gZm9ybSB7XG5cdGNvbG9yOiBibGFjaztcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBoZWlnaHQ6NTAlO1xufVxuLnNpZ251cC1mb3JtIGgyIHtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWFyZ2luLXRvcDogMDtcblx0Zm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nO1xufVxuLnNpZ251cC1mb3JtIGhyIHtcblx0bWFyZ2luOiAwIC0zMHB4IDIwcHg7XG59XG4uc2lnbnVwLWZvcm0gLmZvcm0tZ3JvdXAge1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnNpZ251cC1mb3JtIGxhYmVsIHtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0Zm9udC1zaXplOiAxNXB4O1xufVxuLnNpZ251cC1mb3JtIC5mb3JtLWNvbnRyb2wge1xuXHRtaW4taGVpZ2h0OiAzOHB4O1xuXHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XHRcbi5zaWdudXAtZm9ybSAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuXHRtYXgtd2lkdGg6IDQycHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cdFxuLnNpZ251cC1mb3JtIC5idG4sIC5zaWdudXAtZm9ybSAuYnRuOmFjdGl2ZSB7ICAgICAgICBcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0YmFja2dyb3VuZDogYmx1ZSAhaW1wb3J0YW50O1xuXHRib3JkZXI6IG5vbmU7XG5cdG1pbi13aWR0aDogMTQwcHg7XG59XG4uc2lnbnVwLWZvcm0gLmJ0bjpob3ZlciwgLnNpZ251cC1mb3JtIC5idG46Zm9jdXMge1xuXHRiYWNrZ3JvdW5kOiBsaWdodGJsdWUgIWltcG9ydGFudDtcbn1cbi5zaWdudXAtZm9ybSBhIHtcblx0Y29sb3I6ICNmZmY7XHRcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uc2lnbnVwLWZvcm0gYTpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zaWdudXAtZm9ybSBmb3JtIGEge1xuXHRjb2xvcjogYmx1ZTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVx0XG4uc2lnbnVwLWZvcm0gZm9ybSBhOmhvdmVyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uc2lnbnVwLWZvcm0gLmZhIHtcblx0Zm9udC1zaXplOiAyMXB4O1xufVxuLnNpZ251cC1mb3JtIC5mYS1wYXBlci1wbGFuZSB7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cbi5zaWdudXAtZm9ybSAuZmEtY2hlY2sge1xuXHRjb2xvcjogI2ZmZjtcblx0bGVmdDogMTdweDtcblx0dG9wOiAxOHB4O1xuXHRmb250LXNpemU6IDdweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG5cbiNzaWduVXB7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _service_user_services_service__WEBPACK_IMPORTED_MODULE_4__["UserServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_user_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user-services.service */ "./src/app/service/user-services.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");






function NavbarComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Accounts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_10_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.handleAccount("Primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_10_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.handleAccount("Saving"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Saving");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_11_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.handleTransferFundRequest("Primary Account"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_11_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.handleTransferFundRequest("Primary Account"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Transfer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Request ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_12_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.handleChequeBookRequest("Primary Account"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Chequebook for Primary Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_12_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.handleChequeBookRequest("Saving Account"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Chequebook for Saving Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_14_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.isView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_15_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.isView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_16_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.viewProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_16_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.handleLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.service.getUserName(), " ");
} }
function NavbarComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-homepage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.view = true;
    }
    ngOnInit() {
    }
    isView() {
        this.view = false;
    }
    handleChequeBookRequest(account) {
        this.router.navigate(["user", "chequeBookRequest"], { state: { data: account } });
    }
    handleTransferFundRequest(account) {
        this.router.navigate(["user", "transferFundRequest"], { state: { data: account } });
    }
    handleLogout() {
        sessionStorage.removeItem("isAuthenticatedUser");
        sessionStorage.clear();
        this.router.navigate(["login"]);
    }
    viewProfile() {
        this.router.navigate(["user", "profile"]);
    }
    handleHome() {
        if (this.service.isUserLogin()) {
            this.router.navigate(["user", "home"]);
        }
        else {
            this.router.navigate(["login"]);
        }
    }
    handleAccount(account) {
        if (account === "Primary")
            this.router.navigate(["user", "primaryAccount"]);
        else
            this.router.navigate(["user", "savingAccount"]);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_services_service__WEBPACK_IMPORTED_MODULE_2__["UserServicesService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 18, vars: 8, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-success", "static-top"], [1, "container"], [1, "navbar-brand", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-tree"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "text-white"], ["class", "nav-item  ml-2", 4, "ngIf"], ["class", "nav-item dropdown", 4, "ngIf"], ["class", "nav-item ", 3, "click", 4, "ngIf"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item", 4, "ngIf"], [4, "ngIf"], [1, "nav-item", "ml-2"], ["routerLink", "user/home", 1, "nav-link"], [1, "sr-only"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "ml-2"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "bg-light"], [1, "dropdown-item", 3, "click"], [1, "nav-item", 3, "click"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "ml-2", 3, "click"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "nav-item"], ["routerLink", "/login", 1, "nav-link", 3, "click"], ["routerLink", "/register", 1, "nav-link", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_2_listener() { return ctx.handleHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ICIN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavbarComponent_li_9_Template, 5, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_li_10_Template, 8, 0, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavbarComponent_li_11_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_li_12_Template, 8, 0, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_li_14_Template, 3, 0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_li_15_Template, 3, 0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavbarComponent_li_16_Template, 8, 1, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavbarComponent_div_17_Template, 2, 0, "div", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.isUserLogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.isUserLogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.isUserLogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.isUserLogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.service.isUserLogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.service.isUserLogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.isUserLogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_user_services_service__WEBPACK_IMPORTED_MODULE_2__["UserServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/primary-account/primary-account.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/primary-account/primary-account.component.ts ***!
  \**************************************************************/
/*! exports provided: PrimaryAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryAccountComponent", function() { return PrimaryAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_user_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user-services.service */ "./src/app/service/user-services.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function PrimaryAccountComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1["transactionId"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1["description"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1["destinationAccountnumber"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", transaction_r1["transactionAmount"], " Rs");
} }
class PrimaryAccountComponent {
    constructor(service) {
        this.service = service;
        this.acocuntNumber = sessionStorage.getItem("primaryAccountNumber");
        this.balance = sessionStorage.getItem("primaryAccountBalance");
    }
    ngOnInit() {
        this.getUserTransactions();
    }
    getUserTransactions() {
        this.service.getTransactions(sessionStorage.getItem("primaryAccountNumber")).subscribe(response => {
            this.transactions = response;
            console.log(this.transactions);
        }, error => console.log(error));
    }
}
PrimaryAccountComponent.ɵfac = function PrimaryAccountComponent_Factory(t) { return new (t || PrimaryAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_services_service__WEBPACK_IMPORTED_MODULE_1__["UserServicesService"])); };
PrimaryAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrimaryAccountComponent, selectors: [["app-primary-account"]], decls: 22, vars: 3, consts: [[1, "card", "account"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function PrimaryAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Recent Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Transaction Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Benificiary's Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Amount Transferred");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PrimaryAccountComponent_tr_21_Template, 9, 4, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Primary Account: ", ctx.acocuntNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Account Balance: ", ctx.balance, " Rs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transactions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".account[_ngcontent-%COMP%]{\n    margin:7%;\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcmltYXJ5LWFjY291bnQvcHJpbWFyeS1hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQiIsImZpbGUiOiJhcHAvcHJpbWFyeS1hY2NvdW50L3ByaW1hcnktYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnR7XG4gICAgbWFyZ2luOjclO1xuICAgIGNvbG9yOiBibGFjaztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimaryAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-primary-account',
                templateUrl: './primary-account.component.html',
                styleUrls: ['./primary-account.component.css']
            }]
    }], function () { return [{ type: _service_user_services_service__WEBPACK_IMPORTED_MODULE_1__["UserServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _subComponents_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subComponents/personal-details/personal-details.component */ "./src/app/registration/subComponents/personal-details/personal-details.component.ts");





class RegistrationComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        //   this.router.navigate(["register","personalDetails"]);
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 13, vars: 0, consts: [[1, "signup-form"], [1, "text-center", "text-dark"], ["href", "#", "routerLink", "/login", 1, "text-dark"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please fill in this form to create an account!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-personal-details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _subComponents_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_3__["PersonalDetailsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\tbackground: #32d4cc;\n    font-family: 'Roboto', sans-serif;\n}\n.form-control[_ngcontent-%COMP%] {\n\tfont-size: 15px;\n}\n.form-control[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:focus, .input-group-text[_ngcontent-%COMP%] {\n\tborder-color: #e1e1e1;\n}\n.form-control[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {        \n\tborder-radius: 3px;\n}\n.signup-form[_ngcontent-%COMP%] {\n\twidth: 400px;\n\tmargin: 0 auto;\n\tpadding: 30px 0;\t\t\n}\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n\tcolor: #999;\n\tborder-radius: 3px;\n\tmargin-bottom: 15px;\n\tbackground: #fff;\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    padding: 30px;\n    height:50%;\n}\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n\tcolor: #333;\n\tfont-weight: bold;\n\tmargin-top: 0;\n}\n.signup-form[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n\tmargin: 0 -30px 20px;\n}\n.signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n\tmargin-bottom: 20px;\n}\n.signup-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n\tfont-weight: normal;\n\tfont-size: 15px;\n}\n.signup-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n\tmin-height: 38px;\n\tbox-shadow: none !important;\n}\n.signup-form[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n\tmax-width: 42px;\n\ttext-align: center;\n}\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {        \n\tfont-size: 16px;\n\tfont-weight: bold;\n\tbackground: #19aa8d !important;\n\tborder: none;\n\tmin-width: 140px;\n}\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n\tbackground: #179b81 !important;\n}\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff;\t\n\ttext-decoration: underline;\n}\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\ttext-decoration: none;\n}\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #19aa8d;\n\ttext-decoration: none;\n}\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\ttext-decoration: underline;\n}\n.signup-form[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n\tfont-size: 21px;\n}\n.signup-form[_ngcontent-%COMP%]   .fa-paper-plane[_ngcontent-%COMP%] {\n\tfont-size: 18px;\n}\n.signup-form[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\tleft: 17px;\n\ttop: 18px;\n\tfont-size: 7px;\n\tposition: absolute;\n}\n#signUp[_ngcontent-%COMP%]{\n    position:relative;\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7SUFDaEIsaUNBQWlDO0FBQ3JDO0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7Q0FDZCxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsMENBQTBDO0lBQ3ZDLGFBQWE7SUFDYixVQUFVO0FBQ2Q7QUFDQTtDQUNDLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxvQkFBb0I7QUFDckI7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQiwyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0MsV0FBVztDQUNYLDBCQUEwQjtBQUMzQjtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQywwQkFBMEI7QUFDM0I7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsU0FBUztDQUNULGNBQWM7Q0FDZCxrQkFBa0I7QUFDbkI7QUFJQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCIiwiZmlsZSI6ImFwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuYm9keSB7XG5cdGNvbG9yOiAjZmZmO1xuXHRiYWNrZ3JvdW5kOiAjMzJkNGNjO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cbi5mb3JtLWNvbnRyb2wge1xuXHRmb250LXNpemU6IDE1cHg7XG59XG4uZm9ybS1jb250cm9sLCAuZm9ybS1jb250cm9sOmZvY3VzLCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG5cdGJvcmRlci1jb2xvcjogI2UxZTFlMTtcbn1cbi5mb3JtLWNvbnRyb2wsIC5idG4geyAgICAgICAgXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5zaWdudXAtZm9ybSB7XG5cdHdpZHRoOiA0MDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDMwcHggMDtcdFx0XG59XG4uc2lnbnVwLWZvcm0gZm9ybSB7XG5cdGNvbG9yOiAjOTk5O1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGhlaWdodDo1MCU7XG59XG4uc2lnbnVwLWZvcm0gaDIge1xuXHRjb2xvcjogIzMzMztcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdG1hcmdpbi10b3A6IDA7XG59XG4uc2lnbnVwLWZvcm0gaHIge1xuXHRtYXJnaW46IDAgLTMwcHggMjBweDtcbn1cbi5zaWdudXAtZm9ybSAuZm9ybS1ncm91cCB7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2lnbnVwLWZvcm0gbGFiZWwge1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRmb250LXNpemU6IDE1cHg7XG59XG4uc2lnbnVwLWZvcm0gLmZvcm0tY29udHJvbCB7XG5cdG1pbi1oZWlnaHQ6IDM4cHg7XG5cdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cdFxuLnNpZ251cC1mb3JtIC5pbnB1dC1ncm91cC1hZGRvbiB7XG5cdG1heC13aWR0aDogNDJweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVx0XG4uc2lnbnVwLWZvcm0gLmJ0biwgLnNpZ251cC1mb3JtIC5idG46YWN0aXZlIHsgICAgICAgIFxuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRiYWNrZ3JvdW5kOiAjMTlhYThkICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogbm9uZTtcblx0bWluLXdpZHRoOiAxNDBweDtcbn1cbi5zaWdudXAtZm9ybSAuYnRuOmhvdmVyLCAuc2lnbnVwLWZvcm0gLmJ0bjpmb2N1cyB7XG5cdGJhY2tncm91bmQ6ICMxNzliODEgIWltcG9ydGFudDtcbn1cbi5zaWdudXAtZm9ybSBhIHtcblx0Y29sb3I6ICNmZmY7XHRcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uc2lnbnVwLWZvcm0gYTpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zaWdudXAtZm9ybSBmb3JtIGEge1xuXHRjb2xvcjogIzE5YWE4ZDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVx0XG4uc2lnbnVwLWZvcm0gZm9ybSBhOmhvdmVyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uc2lnbnVwLWZvcm0gLmZhIHtcblx0Zm9udC1zaXplOiAyMXB4O1xufVxuLnNpZ251cC1mb3JtIC5mYS1wYXBlci1wbGFuZSB7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cbi5zaWdudXAtZm9ybSAuZmEtY2hlY2sge1xuXHRjb2xvcjogI2ZmZjtcblx0bGVmdDogMTdweDtcblx0dG9wOiAxOHB4O1xuXHRmb250LXNpemU6IDdweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG5cblxuI3NpZ25VcHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBmbG9hdDogcmlnaHQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/registration/subComponents/address-details/address-details.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/registration/subComponents/address-details/address-details.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddressDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressDetailsComponent", function() { return AddressDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AddressDetailsComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "House Number and building name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddressDetailsComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Street Name or Locality is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddressDetailsComponent_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Town or village name is rquired");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddressDetailsComponent_p_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "City or state name is rquired");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddressDetailsComponent_p_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pincode is rquired");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddressDetailsComponent {
    constructor(router) {
        this.router = router;
        this.invalidAddressLine1 = false;
        this.invalidAddressLine2 = false;
        this.invalidAddressLine3 = false;
        this.invalidAddressLine4 = false;
        this.invalidAddressLine5 = false;
        this.addressLine1 = "";
        this.addressLine2 = "";
        this.addressLine3 = "";
        this.addressLine4 = "";
        this.addressLine5 = "";
        this.areAllFieldsValid = true;
    }
    ngOnInit() {
    }
    validateAddress() {
        if (this.addressLine1.length === 0) {
            this.invalidAddressLine1 = true;
        }
        if (this.addressLine2.length === 0) {
            this.invalidAddressLine2 = true;
        }
        if (this.addressLine3.length === 0) {
            this.invalidAddressLine3 = true;
        }
        if (this.addressLine4.length === 0) {
            this.invalidAddressLine4 = true;
        }
        if (this.addressLine5.length === 0) {
            this.invalidAddressLine5 = true;
        }
        else {
            this.fullAddress = this.addressLine1 + " " + this.addressLine2 + " " + this.addressLine3 + " " + this.addressLine4 + " " + this.addressLine5;
            sessionStorage.setItem("address", this.fullAddress);
            this.router.navigate(["register", "userRegistration"]);
        }
    }
}
AddressDetailsComponent.ɵfac = function AddressDetailsComponent_Factory(t) { return new (t || AddressDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AddressDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddressDetailsComponent, selectors: [["app-address-details"]], decls: 52, vars: 10, consts: [[1, "signup-form"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-building"], ["type", "text", "name", "addressLine1", "id", "addressLine1", "placeholder", "House Number - Building Name", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-warning mt-2", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-road"], ["type", "text", "name", "addressLine2", "id", "addressLine2", "placeholder", "Street Name or Locality", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-location-arrow"], ["type", "text", "name", "addressLine3", "id", "addressLine3", "placeholder", "Town or Village Name", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-globe"], ["type", "text", "name", "addressLine4", "id", "addressLine4", "placeholder", "City and State Name", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-map-marker"], ["type", "number", "name", "addressLine5", "id", "addressLine5", "placeholder", "Pincode", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "id", "next", 1, "btn", "btn-primary", "btn-md", "m-4", "float-right", "d-block", 3, "click"], [1, "form-check-label"], [1, "text-center"], ["href", "#", "routerLink", "/login", 1, "text-white"], [1, "alert", "alert-warning", "mt-2"]], template: function AddressDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please fill in this form to create an account!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddressDetailsComponent_Template_input_ngModelChange_13_listener($event) { return ctx.addressLine1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddressDetailsComponent_p_14_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddressDetailsComponent_Template_input_ngModelChange_20_listener($event) { return ctx.addressLine2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddressDetailsComponent_p_21_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddressDetailsComponent_Template_input_ngModelChange_27_listener($event) { return ctx.addressLine3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddressDetailsComponent_p_28_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddressDetailsComponent_Template_input_ngModelChange_34_listener($event) { return ctx.addressLine4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddressDetailsComponent_p_35_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddressDetailsComponent_Template_input_ngModelChange_41_listener($event) { return ctx.addressLine5 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AddressDetailsComponent_p_42_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddressDetailsComponent_Template_button_click_44_listener() { return ctx.validateAddress(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Login here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addressLine1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidAddressLine1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addressLine2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidAddressLine2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addressLine3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidAddressLine3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addressLine4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidAddressLine4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addressLine5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidAddressLine5);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".fa[_ngcontent-%COMP%]{\n    width: 20px;\n}\n\n\nbody[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\tbackground: #19aa8d;\n    font-family: 'Roboto', sans-serif;\n}\n\n\n.form-control[_ngcontent-%COMP%] {\n\tfont-size: 15px;\n}\n\n\n.form-control[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:focus, .input-group-text[_ngcontent-%COMP%] {\n\tborder-color: #e1e1e1;\n}\n\n\n.form-control[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {        \n\tborder-radius: 3px;\n}\n\n\n.signup-form[_ngcontent-%COMP%] {\n\twidth: 400px;\n\tmargin: 0 auto;\n\tpadding: 30px 0;\t\t\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n\tcolor: #999;\n\tborder-radius: 3px;\n\tmargin-bottom: 15px;\n\tbackground: #fff;\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    padding: 30px;\n    height:50%;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n\tcolor: #333;\n\tfont-weight: bold;\n\tmargin-top: 0;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n\tmargin: 0 -30px 20px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n\tmargin-bottom: 20px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n\tfont-weight: normal;\n\tfont-size: 15px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n\tmin-height: 38px;\n\tbox-shadow: none !important;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n\tmax-width: 42px;\n\ttext-align: center;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {        \n\tfont-size: 16px;\n\tfont-weight: bold;\n\tbackground: #19aa8d !important;\n\tborder: none;\n\tmin-width: 140px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n\tbackground: #179b81 !important;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff;\t\n\ttext-decoration: underline;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\ttext-decoration: none;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #19aa8d;\n\ttext-decoration: none;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\ttext-decoration: underline;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n\tfont-size: 21px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa-paper-plane[_ngcontent-%COMP%] {\n\tfont-size: 18px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\tleft: 17px;\n\ttop: 18px;\n\tfont-size: 7px;\n\tposition: absolute;\n}\n\n\n#signUp[_ngcontent-%COMP%]{\n    position:relative;\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3RyYXRpb24vc3ViQ29tcG9uZW50cy9hZGRyZXNzLWRldGFpbHMvYWRkcmVzcy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtJQUNoQixpQ0FBaUM7QUFDckM7OztBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7O0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7OztBQUNBO0NBQ0Msa0JBQWtCO0FBQ25COzs7QUFDQTtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2QsZUFBZTtBQUNoQjs7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsMENBQTBDO0lBQ3ZDLGFBQWE7SUFDYixVQUFVO0FBQ2Q7OztBQUNBO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixhQUFhO0FBQ2Q7OztBQUNBO0NBQ0Msb0JBQW9CO0FBQ3JCOzs7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjs7O0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7O0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsMkJBQTJCO0FBQzVCOzs7QUFDQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7OztBQUNBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQiw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7O0FBQ0E7Q0FDQyw4QkFBOEI7QUFDL0I7OztBQUNBO0NBQ0MsV0FBVztDQUNYLDBCQUEwQjtBQUMzQjs7O0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7OztBQUNBO0NBQ0MsY0FBYztDQUNkLHFCQUFxQjtBQUN0Qjs7O0FBQ0E7Q0FDQywwQkFBMEI7QUFDM0I7OztBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOzs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsU0FBUztDQUNULGNBQWM7Q0FDZCxrQkFBa0I7QUFDbkI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEIiLCJmaWxlIjoiYXBwL3JlZ2lzdHJhdGlvbi9zdWJDb21wb25lbnRzL2FkZHJlc3MtZGV0YWlscy9hZGRyZXNzLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuXG5ib2R5IHtcblx0Y29sb3I6ICNmZmY7XG5cdGJhY2tncm91bmQ6ICMxOWFhOGQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuLmZvcm0tY29udHJvbCB7XG5cdGZvbnQtc2l6ZTogMTVweDtcbn1cbi5mb3JtLWNvbnRyb2wsIC5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5pbnB1dC1ncm91cC10ZXh0IHtcblx0Ym9yZGVyLWNvbG9yOiAjZTFlMWUxO1xufVxuLmZvcm0tY29udHJvbCwgLmJ0biB7ICAgICAgICBcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xufVxuLnNpZ251cC1mb3JtIHtcblx0d2lkdGg6IDQwMHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogMzBweCAwO1x0XHRcbn1cbi5zaWdudXAtZm9ybSBmb3JtIHtcblx0Y29sb3I6ICM5OTk7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0Ym94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgaGVpZ2h0OjUwJTtcbn1cbi5zaWdudXAtZm9ybSBoMiB7XG5cdGNvbG9yOiAjMzMzO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWFyZ2luLXRvcDogMDtcbn1cbi5zaWdudXAtZm9ybSBociB7XG5cdG1hcmdpbjogMCAtMzBweCAyMHB4O1xufVxuLnNpZ251cC1mb3JtIC5mb3JtLWdyb3VwIHtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5zaWdudXAtZm9ybSBsYWJlbCB7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zaWdudXAtZm9ybSAuZm9ybS1jb250cm9sIHtcblx0bWluLWhlaWdodDogMzhweDtcblx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVx0XG4uc2lnbnVwLWZvcm0gLmlucHV0LWdyb3VwLWFkZG9uIHtcblx0bWF4LXdpZHRoOiA0MnB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XHRcbi5zaWdudXAtZm9ybSAuYnRuLCAuc2lnbnVwLWZvcm0gLmJ0bjphY3RpdmUgeyAgICAgICAgXG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGJhY2tncm91bmQ6ICMxOWFhOGQgIWltcG9ydGFudDtcblx0Ym9yZGVyOiBub25lO1xuXHRtaW4td2lkdGg6IDE0MHB4O1xufVxuLnNpZ251cC1mb3JtIC5idG46aG92ZXIsIC5zaWdudXAtZm9ybSAuYnRuOmZvY3VzIHtcblx0YmFja2dyb3VuZDogIzE3OWI4MSAhaW1wb3J0YW50O1xufVxuLnNpZ251cC1mb3JtIGEge1xuXHRjb2xvcjogI2ZmZjtcdFxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5zaWdudXAtZm9ybSBhOmhvdmVyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNpZ251cC1mb3JtIGZvcm0gYSB7XG5cdGNvbG9yOiAjMTlhYThkO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XHRcbi5zaWdudXAtZm9ybSBmb3JtIGE6aG92ZXIge1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5zaWdudXAtZm9ybSAuZmEge1xuXHRmb250LXNpemU6IDIxcHg7XG59XG4uc2lnbnVwLWZvcm0gLmZhLXBhcGVyLXBsYW5lIHtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuLnNpZ251cC1mb3JtIC5mYS1jaGVjayB7XG5cdGNvbG9yOiAjZmZmO1xuXHRsZWZ0OiAxN3B4O1xuXHR0b3A6IDE4cHg7XG5cdGZvbnQtc2l6ZTogN3B4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cblxuI3NpZ25VcHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBmbG9hdDogcmlnaHQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddressDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-address-details',
                templateUrl: './address-details.component.html',
                styleUrls: ['./address-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/registration/subComponents/contact-details/contact-details.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/registration/subComponents/contact-details/contact-details.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ContactDetailsComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactDetailsComponent_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactDetailsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactDetailsComponent_div_14_div_1_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactDetailsComponent_div_14_div_2_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email);
} }
function ContactDetailsComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mobile number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactDetailsComponent_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Mobile number must be of 10 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactDetailsComponent_div_21_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Only numbers are allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactDetailsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactDetailsComponent_div_21_div_1_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactDetailsComponent_div_21_div_2_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactDetailsComponent_div_21_div_3_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.phone.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.phone.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.phone.errors.pattern);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ContactDetailsComponent {
    constructor(router, formbuilder) {
        this.router = router;
        this.formbuilder = formbuilder;
        this.submitted = false;
    }
    ngOnInit() {
        this.contactForm = this.formbuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
        });
    }
    validateContactDetails() {
        if (this.contactForm.valid) {
            sessionStorage.setItem("phonenumber", this.contactForm.get("phone").value);
            sessionStorage.setItem("mailid", this.contactForm.get("email").value);
            this.router.navigate(["register", "kycDetails"]);
        }
    }
    get f() { return this.contactForm.controls; }
}
ContactDetailsComponent.ɵfac = function ContactDetailsComponent_Factory(t) { return new (t || ContactDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ContactDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactDetailsComponent, selectors: [["app-contact-details"]], decls: 31, vars: 9, consts: [[1, "signup-form"], [3, "formGroup"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-paper-plane"], ["type", "email", "name", "email", "placeholder", "Email Address", "required", "required", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "fa", "fa-mobile"], ["type", "text", "formControlName", "phone", "name", "phone", 1, "form-control", 3, "ngClass"], ["type", "button", "id", "next", 1, "btn", "btn-primary", "btn-md", "m-4", "float-right", "d-block", 3, "click"], [1, "form-check-label"], [1, "text-center"], ["href", "#", "routerLink", "/login", 1, "text-white"], [1, "invalid-feedback"], [4, "ngIf"], [1, "alert", "alert-warning", "mt-2"]], template: function ContactDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please fill in this form to create an account!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ContactDetailsComponent_div_14_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ContactDetailsComponent_div_21_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDetailsComponent_Template_button_click_23_listener() { return ctx.validateContactDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Login here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.f.phone.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.phone.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".fa[_ngcontent-%COMP%]{\n    width:20px;\n}\n\n\nbody[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\tbackground: #1cad5e;\n    font-family: 'Roboto', sans-serif;\n}\n\n\n.form-control[_ngcontent-%COMP%] {\n\tfont-size: 15px;\n}\n\n\n.form-control[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:focus, .input-group-text[_ngcontent-%COMP%] {\n\tborder-color: #e1e1e1;\n}\n\n\n.form-control[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {        \n\tborder-radius: 3px;\n}\n\n\n.signup-form[_ngcontent-%COMP%] {\n\twidth: 400px;\n\tmargin: 0 auto;\n\tpadding: 30px 0;\t\t\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n\tcolor: #999;\n\tborder-radius: 3px;\n\tmargin-bottom: 15px;\n\tbackground: #fff;\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    padding: 30px;\n    height:50%;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n\tcolor: #333;\n\tfont-weight: bold;\n\tmargin-top: 0;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n\tmargin: 0 -30px 20px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n\tmargin-bottom: 20px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n\tfont-weight: normal;\n\tfont-size: 15px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n\tmin-height: 38px;\n\tbox-shadow: none !important;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n\tmax-width: 42px;\n\ttext-align: center;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {        \n\tfont-size: 16px;\n\tfont-weight: bold;\n\tbackground: #19aa8d !important;\n\tborder: none;\n\tmin-width: 140px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n\tbackground: #179b81 !important;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff;\t\n\ttext-decoration: underline;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\ttext-decoration: none;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #19aa8d;\n\ttext-decoration: none;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\ttext-decoration: underline;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n\tfont-size: 21px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa-paper-plane[_ngcontent-%COMP%] {\n\tfont-size: 18px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\tleft: 17px;\n\ttop: 18px;\n\tfont-size: 7px;\n\tposition: absolute;\n}\n\n\n#signUp[_ngcontent-%COMP%]{\n    position:relative;\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3RyYXRpb24vc3ViQ29tcG9uZW50cy9jb250YWN0LWRldGFpbHMvY29udGFjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtJQUNoQixpQ0FBaUM7QUFDckM7OztBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7O0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7OztBQUNBO0NBQ0Msa0JBQWtCO0FBQ25COzs7QUFDQTtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2QsZUFBZTtBQUNoQjs7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsMENBQTBDO0lBQ3ZDLGFBQWE7SUFDYixVQUFVO0FBQ2Q7OztBQUNBO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixhQUFhO0FBQ2Q7OztBQUNBO0NBQ0Msb0JBQW9CO0FBQ3JCOzs7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjs7O0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7O0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsMkJBQTJCO0FBQzVCOzs7QUFDQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7OztBQUNBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQiw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7O0FBQ0E7Q0FDQyw4QkFBOEI7QUFDL0I7OztBQUNBO0NBQ0MsV0FBVztDQUNYLDBCQUEwQjtBQUMzQjs7O0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7OztBQUNBO0NBQ0MsY0FBYztDQUNkLHFCQUFxQjtBQUN0Qjs7O0FBQ0E7Q0FDQywwQkFBMEI7QUFDM0I7OztBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOzs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsU0FBUztDQUNULGNBQWM7Q0FDZCxrQkFBa0I7QUFDbkI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEIiLCJmaWxlIjoiYXBwL3JlZ2lzdHJhdGlvbi9zdWJDb21wb25lbnRzL2NvbnRhY3QtZGV0YWlscy9jb250YWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXtcbiAgICB3aWR0aDoyMHB4O1xufVxuXG5cbmJvZHkge1xuXHRjb2xvcjogI2ZmZjtcblx0YmFja2dyb3VuZDogIzFjYWQ1ZTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG4uZm9ybS1jb250cm9sIHtcblx0Zm9udC1zaXplOiAxNXB4O1xufVxuLmZvcm0tY29udHJvbCwgLmZvcm0tY29udHJvbDpmb2N1cywgLmlucHV0LWdyb3VwLXRleHQge1xuXHRib3JkZXItY29sb3I6ICNlMWUxZTE7XG59XG4uZm9ybS1jb250cm9sLCAuYnRuIHsgICAgICAgIFxuXHRib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uc2lnbnVwLWZvcm0ge1xuXHR3aWR0aDogNDAwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwYWRkaW5nOiAzMHB4IDA7XHRcdFxufVxuLnNpZ251cC1mb3JtIGZvcm0ge1xuXHRjb2xvcjogIzk5OTtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBoZWlnaHQ6NTAlO1xufVxuLnNpZ251cC1mb3JtIGgyIHtcblx0Y29sb3I6ICMzMzM7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRtYXJnaW4tdG9wOiAwO1xufVxuLnNpZ251cC1mb3JtIGhyIHtcblx0bWFyZ2luOiAwIC0zMHB4IDIwcHg7XG59XG4uc2lnbnVwLWZvcm0gLmZvcm0tZ3JvdXAge1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnNpZ251cC1mb3JtIGxhYmVsIHtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0Zm9udC1zaXplOiAxNXB4O1xufVxuLnNpZ251cC1mb3JtIC5mb3JtLWNvbnRyb2wge1xuXHRtaW4taGVpZ2h0OiAzOHB4O1xuXHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XHRcbi5zaWdudXAtZm9ybSAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuXHRtYXgtd2lkdGg6IDQycHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cdFxuLnNpZ251cC1mb3JtIC5idG4sIC5zaWdudXAtZm9ybSAuYnRuOmFjdGl2ZSB7ICAgICAgICBcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0YmFja2dyb3VuZDogIzE5YWE4ZCAhaW1wb3J0YW50O1xuXHRib3JkZXI6IG5vbmU7XG5cdG1pbi13aWR0aDogMTQwcHg7XG59XG4uc2lnbnVwLWZvcm0gLmJ0bjpob3ZlciwgLnNpZ251cC1mb3JtIC5idG46Zm9jdXMge1xuXHRiYWNrZ3JvdW5kOiAjMTc5YjgxICFpbXBvcnRhbnQ7XG59XG4uc2lnbnVwLWZvcm0gYSB7XG5cdGNvbG9yOiAjZmZmO1x0XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnNpZ251cC1mb3JtIGE6aG92ZXIge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc2lnbnVwLWZvcm0gZm9ybSBhIHtcblx0Y29sb3I6ICMxOWFhOGQ7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cdFxuLnNpZ251cC1mb3JtIGZvcm0gYTpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnNpZ251cC1mb3JtIC5mYSB7XG5cdGZvbnQtc2l6ZTogMjFweDtcbn1cbi5zaWdudXAtZm9ybSAuZmEtcGFwZXItcGxhbmUge1xuXHRmb250LXNpemU6IDE4cHg7XG59XG4uc2lnbnVwLWZvcm0gLmZhLWNoZWNrIHtcblx0Y29sb3I6ICNmZmY7XG5cdGxlZnQ6IDE3cHg7XG5cdHRvcDogMThweDtcblx0Zm9udC1zaXplOiA3cHg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuXG4jc2lnblVwe1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGZsb2F0OiByaWdodDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-details',
                templateUrl: './contact-details.component.html',
                styleUrls: ['./contact-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/registration/subComponents/kyc-details/kyc-details.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/registration/subComponents/kyc-details/kyc-details.component.ts ***!
  \*********************************************************************************/
/*! exports provided: KycDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycDetailsComponent", function() { return KycDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function KycDetailsComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Date of birth is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KycDetailsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KycDetailsComponent_div_14_div_1_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.dob.errors.required);
} }
function KycDetailsComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Should be minimum 10 years old ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KycDetailsComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pan card Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KycDetailsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KycDetailsComponent_div_22_div_1_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.pan.errors.required);
} }
function KycDetailsComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pan number must be alpha numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class KycDetailsComponent {
    constructor(router, formbuilder) {
        this.router = router;
        this.formbuilder = formbuilder;
        this.invalidAge = false;
    }
    ngOnInit() {
        this.kycForm = this.formbuilder.group({
            pan: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dob: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    validateKyc() {
        console.log(this.kycForm.get("dob").value);
        let currentDate = new Date(this.kycForm.get("dob").value);
        let timeDiff = Math.abs(Date.now() - currentDate);
        this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        console.log(this.age);
        if (this.age < 10) {
            this.invalidAge = true;
            return;
        }
        if (!this.checkPancardValidity(this.kycForm.get("pan").value)) {
            this.invalidPan = true;
            return;
        }
        //age =  2020-this.kycForm.get("dob").value;
        if (!this.kycForm.invalid)
            this.router.navigate(["register", "addressDetails"]);
    }
    checkPancardValidity(pan) {
        let letter = /[a-zA-Z]/;
        let number = /[0-9]/;
        let valid = number.test(pan) && letter.test(pan); //match a letter _and_ a number
        console.log(valid);
        return valid;
    }
    get f() { return this.kycForm.controls; }
}
KycDetailsComponent.ɵfac = function KycDetailsComponent_Factory(t) { return new (t || KycDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
KycDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KycDetailsComponent, selectors: [["app-kyc-details"]], decls: 33, vars: 11, consts: [[1, "signup-form"], [3, "formGroup"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-calendar"], ["type", "text", "name", "dob", "placeholder", "Date of birth", "onfocus", "(this.type='date')", "onblur", "(this.type='text')", "required", "required", "formControlName", "dob", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "alert alert-warning mt-2", 4, "ngIf"], [1, "fa", "fa-id-card-o"], ["type", "text", "name", "pancard", "placeholder", "Pancard Number", "required", "required", "formControlName", "pan", "ng-pattern", "/^[a-zA-Z0-9]+$/", "required", "", 1, "form-control", 3, "ngClass"], ["type", "button", "id", "next", 1, "btn", "btn-primary", "btn-md", "m-4", "float-right", "d-block", 3, "click"], [1, "form-check-label"], [1, "text-center"], ["href", "#", "routerLink", "/login", 1, "text-white"], [1, "invalid-feedback"], [4, "ngIf"], [1, "alert", "alert-warning", "mt-2"]], template: function KycDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please fill in this form to create an account!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, KycDetailsComponent_div_14_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, KycDetailsComponent_p_15_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, KycDetailsComponent_div_22_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, KycDetailsComponent_p_23_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycDetailsComponent_Template_button_click_25_listener() { return ctx.validateKyc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Login here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.kycForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.f.dob.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.dob.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidAge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.f.pan.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.pan.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidPan);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".fa[_ngcontent-%COMP%]{\n    width:20px;\n}\n\n\nbody[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\tbackground: #1cad5e;\n    font-family: 'Roboto', sans-serif;\n}\n\n\n.form-control[_ngcontent-%COMP%] {\n\tfont-size: 15px;\n}\n\n\n.form-control[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:focus, .input-group-text[_ngcontent-%COMP%] {\n\tborder-color: #e1e1e1;\n}\n\n\n.form-control[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {        \n\tborder-radius: 3px;\n}\n\n\n.signup-form[_ngcontent-%COMP%] {\n\twidth: 400px;\n\tmargin: 0 auto;\n\tpadding: 30px 0;\t\t\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n\tcolor: #999;\n\tborder-radius: 3px;\n\tmargin-bottom: 15px;\n\tbackground: #fff;\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    padding: 30px;\n    height:50%;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n\tcolor: #333;\n\tfont-weight: bold;\n\tmargin-top: 0;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n\tmargin: 0 -30px 20px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n\tmargin-bottom: 20px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n\tfont-weight: normal;\n\tfont-size: 15px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n\tmin-height: 38px;\n\tbox-shadow: none !important;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n\tmax-width: 42px;\n\ttext-align: center;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {        \n\tfont-size: 16px;\n\tfont-weight: bold;\n\tbackground: #19aa8d !important;\n\tborder: none;\n\tmin-width: 140px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n\tbackground: #179b81 !important;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff;\t\n\ttext-decoration: underline;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\ttext-decoration: none;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #19aa8d;\n\ttext-decoration: none;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\ttext-decoration: underline;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n\tfont-size: 21px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa-paper-plane[_ngcontent-%COMP%] {\n\tfont-size: 18px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\tleft: 17px;\n\ttop: 18px;\n\tfont-size: 7px;\n\tposition: absolute;\n}\n\n\n#signUp[_ngcontent-%COMP%]{\n    position:relative;\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3RyYXRpb24vc3ViQ29tcG9uZW50cy9reWMtZGV0YWlscy9reWMtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7SUFDaEIsaUNBQWlDO0FBQ3JDOzs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7OztBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCOzs7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjs7O0FBQ0E7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLGVBQWU7QUFDaEI7OztBQUNBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLDBDQUEwQztJQUN2QyxhQUFhO0lBQ2IsVUFBVTtBQUNkOzs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsYUFBYTtBQUNkOzs7QUFDQTtDQUNDLG9CQUFvQjtBQUNyQjs7O0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7OztBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7OztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtBQUM1Qjs7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COzs7QUFDQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7OztBQUNBO0NBQ0MsOEJBQThCO0FBQy9COzs7QUFDQTtDQUNDLFdBQVc7Q0FDWCwwQkFBMEI7QUFDM0I7OztBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCOzs7QUFDQTtDQUNDLGNBQWM7Q0FDZCxxQkFBcUI7QUFDdEI7OztBQUNBO0NBQ0MsMEJBQTBCO0FBQzNCOzs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7OztBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtDQUNWLFNBQVM7Q0FDVCxjQUFjO0NBQ2Qsa0JBQWtCO0FBQ25COzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCIiwiZmlsZSI6ImFwcC9yZWdpc3RyYXRpb24vc3ViQ29tcG9uZW50cy9reWMtZGV0YWlscy9reWMtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhe1xuICAgIHdpZHRoOjIwcHg7XG59XG5cblxuYm9keSB7XG5cdGNvbG9yOiAjZmZmO1xuXHRiYWNrZ3JvdW5kOiAjMWNhZDVlO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cbi5mb3JtLWNvbnRyb2wge1xuXHRmb250LXNpemU6IDE1cHg7XG59XG4uZm9ybS1jb250cm9sLCAuZm9ybS1jb250cm9sOmZvY3VzLCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG5cdGJvcmRlci1jb2xvcjogI2UxZTFlMTtcbn1cbi5mb3JtLWNvbnRyb2wsIC5idG4geyAgICAgICAgXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5zaWdudXAtZm9ybSB7XG5cdHdpZHRoOiA0MDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDMwcHggMDtcdFx0XG59XG4uc2lnbnVwLWZvcm0gZm9ybSB7XG5cdGNvbG9yOiAjOTk5O1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGhlaWdodDo1MCU7XG59XG4uc2lnbnVwLWZvcm0gaDIge1xuXHRjb2xvcjogIzMzMztcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdG1hcmdpbi10b3A6IDA7XG59XG4uc2lnbnVwLWZvcm0gaHIge1xuXHRtYXJnaW46IDAgLTMwcHggMjBweDtcbn1cbi5zaWdudXAtZm9ybSAuZm9ybS1ncm91cCB7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2lnbnVwLWZvcm0gbGFiZWwge1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRmb250LXNpemU6IDE1cHg7XG59XG4uc2lnbnVwLWZvcm0gLmZvcm0tY29udHJvbCB7XG5cdG1pbi1oZWlnaHQ6IDM4cHg7XG5cdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cdFxuLnNpZ251cC1mb3JtIC5pbnB1dC1ncm91cC1hZGRvbiB7XG5cdG1heC13aWR0aDogNDJweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVx0XG4uc2lnbnVwLWZvcm0gLmJ0biwgLnNpZ251cC1mb3JtIC5idG46YWN0aXZlIHsgICAgICAgIFxuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRiYWNrZ3JvdW5kOiAjMTlhYThkICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogbm9uZTtcblx0bWluLXdpZHRoOiAxNDBweDtcbn1cbi5zaWdudXAtZm9ybSAuYnRuOmhvdmVyLCAuc2lnbnVwLWZvcm0gLmJ0bjpmb2N1cyB7XG5cdGJhY2tncm91bmQ6ICMxNzliODEgIWltcG9ydGFudDtcbn1cbi5zaWdudXAtZm9ybSBhIHtcblx0Y29sb3I6ICNmZmY7XHRcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uc2lnbnVwLWZvcm0gYTpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zaWdudXAtZm9ybSBmb3JtIGEge1xuXHRjb2xvcjogIzE5YWE4ZDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVx0XG4uc2lnbnVwLWZvcm0gZm9ybSBhOmhvdmVyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uc2lnbnVwLWZvcm0gLmZhIHtcblx0Zm9udC1zaXplOiAyMXB4O1xufVxuLnNpZ251cC1mb3JtIC5mYS1wYXBlci1wbGFuZSB7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cbi5zaWdudXAtZm9ybSAuZmEtY2hlY2sge1xuXHRjb2xvcjogI2ZmZjtcblx0bGVmdDogMTdweDtcblx0dG9wOiAxOHB4O1xuXHRmb250LXNpemU6IDdweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG5cbiNzaWduVXB7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KycDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kyc-details',
                templateUrl: './kyc-details.component.html',
                styleUrls: ['./kyc-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/registration/subComponents/personal-details/personal-details.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/registration/subComponents/personal-details/personal-details.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsComponent", function() { return PersonalDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function PersonalDetailsComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PersonalDetailsComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PersonalDetailsComponent {
    constructor(router) {
        this.router = router;
        this.invalidFirstName = false;
        this.invalidLasttName = false;
    }
    ngOnInit() {
    }
    handlePersonalDetailsValidation() {
        if (this.firstName === undefined) {
            this.invalidFirstName = true;
        }
        if (this.lastName === undefined) {
            this.invalidLasttName = true;
        }
        else {
            sessionStorage.setItem("firstName", this.firstName);
            sessionStorage.setItem("lastName", this.lastName);
            this.router.navigate(["register", "contactDetails"]);
        }
    }
}
PersonalDetailsComponent.ɵfac = function PersonalDetailsComponent_Factory(t) { return new (t || PersonalDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PersonalDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalDetailsComponent, selectors: [["app-personal-details"]], decls: 18, vars: 4, consts: [[1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user"], ["type", "text", "name", "firstName", "id", "firstName", "placeholder", "First Name", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-warning mt-2", 4, "ngIf"], ["type", "text", "name", "lastName", "placeholder", "Last Name", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "id", "next", 1, "btn", "btn-primary", "btn-md", "m-4", "float-right", "d-block", 3, "click"], [1, "form-check-label"], [1, "alert", "alert-warning", "mt-2"]], template: function PersonalDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalDetailsComponent_Template_input_ngModelChange_5_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PersonalDetailsComponent_p_6_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalDetailsComponent_Template_input_ngModelChange_12_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PersonalDetailsComponent_p_13_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalDetailsComponent_Template_button_click_14_listener() { return ctx.handlePersonalDetailsValidation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidFirstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidLasttName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".fa[_ngcontent-%COMP%]{\n    width:20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3RyYXRpb24vc3ViQ29tcG9uZW50cy9wZXJzb25hbC1kZXRhaWxzL3BlcnNvbmFsLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJhcHAvcmVnaXN0cmF0aW9uL3N1YkNvbXBvbmVudHMvcGVyc29uYWwtZGV0YWlscy9wZXJzb25hbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmF7XG4gICAgd2lkdGg6MjBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-personal-details',
                templateUrl: './personal-details.component.html',
                styleUrls: ['./personal-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/registration/subComponents/user-registration/user-registration.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/registration/subComponents/user-registration/user-registration.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: User, UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_service_user_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user-services.service */ "./src/app/service/user-services.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function UserRegistrationComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is invalid It must be minimum 8 digits and should contain alteast one letter,number or special symbol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm password is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please accept terms and conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class User {
    constructor(fullname, surname, mailid, phonenumber, address, password, PrimaryAccount, SavingAccount) {
        this.fullname = fullname;
        this.surname = surname;
        this.mailid = mailid;
        this.phonenumber = phonenumber;
        this.address = address;
        this.password = password;
        this.PrimaryAccount = PrimaryAccount;
        this.SavingAccount = SavingAccount;
    }
}
class UserRegistrationComponent {
    constructor(router, formbuilder, service) {
        this.router = router;
        this.formbuilder = formbuilder;
        this.service = service;
        this.userName = "";
        this.password = "";
        this.confirmPassword = "";
        this.invalidUserName = false;
        this.invalidPassword = false;
        this.invalidConfirmPassword = false;
    }
    ngOnInit() {
    }
    validateUserDetails() {
        if (this.userName.length === 0) {
            this.invalidUserName = true;
            return;
        }
        if (this.password.length < 8) {
            this.invalidPassword = true;
            return;
        }
        if (!this.checkPassword(this.password)) {
            this.invalidPassword = true;
        }
        if (this.confirmPassword.length < 8 || this.confirmPassword !== this.password) {
            this.invalidConfirmPassword = true;
            return;
        }
        if (!this.checked) {
            this.invalidTnc = true;
            return;
        }
        else {
            sessionStorage.setItem("password", this.password);
            console.log("Done");
            this.service.addUSerToDb().subscribe(response => {
                if (response) {
                    sessionStorage.removeItem("firstName");
                    sessionStorage.removeItem("lastName");
                    sessionStorage.removeItem("address");
                    sessionStorage.removeItem("mailid");
                    sessionStorage.removeItem("phonenumber");
                    this.router.navigate(["login"]);
                }
            }, error => {
                console.log(error);
                alert("Registration Failed");
            });
        }
    }
    checkPassword(password) {
        let letter = /[a-zA-Z]/;
        let number = /[0-9]/;
        let symbol = /[,_#@]*$/;
        let valid = number.test(password) && letter.test(password); //match a letter _and_ a number
        return valid;
    }
}
UserRegistrationComponent.ɵfac = function UserRegistrationComponent_Factory(t) { return new (t || UserRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_services_service__WEBPACK_IMPORTED_MODULE_3__["UserServicesService"])); };
UserRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserRegistrationComponent, selectors: [["app-user-registration"]], decls: 46, vars: 8, consts: [[1, "signup-form"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user"], ["type", "text", "name", "userName", "id", "userName", "placeholder", "User Name", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-warning mt-2", 4, "ngIf"], [1, "fa", "fa-lock"], ["type", "password", "name", "password", "placeholder", "Password (min 8 characters)", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "confirm_password", "placeholder", "Confirm Password", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-check-label"], ["type", "checkbox", "name", "tnc", "required", "required", 3, "ngModel", "ngModelChange"], ["href", "#"], ["class", "alert alert-warning mt-2", "name", "tnc", 4, "ngIf"], ["type", "button", "id", "signUpButton", 1, "btn", "btn-primary", "btn-md", 3, "click"], [1, "text-center"], ["href", "#", "routerLink", "/login", 1, "text-white"], [1, "alert", "alert-warning", "mt-2"], ["name", "tnc", 1, "alert", "alert-warning", "mt-2"]], template: function UserRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please fill in this form to create an account!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_13_listener($event) { return ctx.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserRegistrationComponent_p_14_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_20_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UserRegistrationComponent_p_21_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_27_listener($event) { return ctx.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserRegistrationComponent_p_28_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_31_listener($event) { return ctx.checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " I accept the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, UserRegistrationComponent_p_38_Template, 2, 0, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRegistrationComponent_Template_button_click_40_listener() { return ctx.validateUserDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Login here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidUserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidConfirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidTnc);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".fa[_ngcontent-%COMP%]{\n    width:20px;\n}\n\n\nbody[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\tbackground: #19aa8d;\n    font-family: 'Roboto', sans-serif;\n}\n\n\n.form-control[_ngcontent-%COMP%] {\n\tfont-size: 15px;\n}\n\n\n.form-control[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:focus, .input-group-text[_ngcontent-%COMP%] {\n\tborder-color: #e1e1e1;\n}\n\n\n.form-control[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {        \n\tborder-radius: 3px;\n}\n\n\n.signup-form[_ngcontent-%COMP%] {\n\twidth: 400px;\n\tmargin: 0 auto;\n\tpadding: 30px 0;\t\t\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n\tcolor: #999;\n\tborder-radius: 3px;\n\tmargin-bottom: 15px;\n\tbackground: #fff;\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    padding: 30px;\n    height:50%;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n\tcolor: #333;\n\tfont-weight: bold;\n\tmargin-top: 0;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n\tmargin: 0 -30px 20px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n\tmargin-bottom: 20px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n\tfont-weight: normal;\n\tfont-size: 15px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n\tmin-height: 38px;\n\tbox-shadow: none !important;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n\tmax-width: 42px;\n\ttext-align: center;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {        \n\tfont-size: 16px;\n\tfont-weight: bold;\n\tbackground: #19aa8d !important;\n\tborder: none;\n\tmin-width: 140px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n\tbackground: #179b81 !important;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff;\t\n\ttext-decoration: underline;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\ttext-decoration: none;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #19aa8d;\n\ttext-decoration: none;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\ttext-decoration: underline;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n\tfont-size: 21px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa-paper-plane[_ngcontent-%COMP%] {\n\tfont-size: 18px;\n}\n\n\n.signup-form[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\tleft: 17px;\n\ttop: 18px;\n\tfont-size: 7px;\n\tposition: absolute;\n}\n\n\n#signUp[_ngcontent-%COMP%]{\n    position:relative;\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3RyYXRpb24vc3ViQ29tcG9uZW50cy91c2VyLXJlZ2lzdHJhdGlvbi91c2VyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7SUFDaEIsaUNBQWlDO0FBQ3JDOzs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7OztBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCOzs7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjs7O0FBQ0E7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLGVBQWU7QUFDaEI7OztBQUNBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLDBDQUEwQztJQUN2QyxhQUFhO0lBQ2IsVUFBVTtBQUNkOzs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsYUFBYTtBQUNkOzs7QUFDQTtDQUNDLG9CQUFvQjtBQUNyQjs7O0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7OztBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7OztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtBQUM1Qjs7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COzs7QUFDQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7OztBQUNBO0NBQ0MsOEJBQThCO0FBQy9COzs7QUFDQTtDQUNDLFdBQVc7Q0FDWCwwQkFBMEI7QUFDM0I7OztBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCOzs7QUFDQTtDQUNDLGNBQWM7Q0FDZCxxQkFBcUI7QUFDdEI7OztBQUNBO0NBQ0MsMEJBQTBCO0FBQzNCOzs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7OztBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtDQUNWLFNBQVM7Q0FDVCxjQUFjO0NBQ2Qsa0JBQWtCO0FBQ25COzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCIiwiZmlsZSI6ImFwcC9yZWdpc3RyYXRpb24vc3ViQ29tcG9uZW50cy91c2VyLXJlZ2lzdHJhdGlvbi91c2VyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhe1xuICAgIHdpZHRoOjIwcHg7XG59XG5cblxuYm9keSB7XG5cdGNvbG9yOiAjZmZmO1xuXHRiYWNrZ3JvdW5kOiAjMTlhYThkO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cbi5mb3JtLWNvbnRyb2wge1xuXHRmb250LXNpemU6IDE1cHg7XG59XG4uZm9ybS1jb250cm9sLCAuZm9ybS1jb250cm9sOmZvY3VzLCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG5cdGJvcmRlci1jb2xvcjogI2UxZTFlMTtcbn1cbi5mb3JtLWNvbnRyb2wsIC5idG4geyAgICAgICAgXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5zaWdudXAtZm9ybSB7XG5cdHdpZHRoOiA0MDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDMwcHggMDtcdFx0XG59XG4uc2lnbnVwLWZvcm0gZm9ybSB7XG5cdGNvbG9yOiAjOTk5O1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGhlaWdodDo1MCU7XG59XG4uc2lnbnVwLWZvcm0gaDIge1xuXHRjb2xvcjogIzMzMztcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdG1hcmdpbi10b3A6IDA7XG59XG4uc2lnbnVwLWZvcm0gaHIge1xuXHRtYXJnaW46IDAgLTMwcHggMjBweDtcbn1cbi5zaWdudXAtZm9ybSAuZm9ybS1ncm91cCB7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2lnbnVwLWZvcm0gbGFiZWwge1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRmb250LXNpemU6IDE1cHg7XG59XG4uc2lnbnVwLWZvcm0gLmZvcm0tY29udHJvbCB7XG5cdG1pbi1oZWlnaHQ6IDM4cHg7XG5cdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cdFxuLnNpZ251cC1mb3JtIC5pbnB1dC1ncm91cC1hZGRvbiB7XG5cdG1heC13aWR0aDogNDJweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVx0XG4uc2lnbnVwLWZvcm0gLmJ0biwgLnNpZ251cC1mb3JtIC5idG46YWN0aXZlIHsgICAgICAgIFxuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRiYWNrZ3JvdW5kOiAjMTlhYThkICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogbm9uZTtcblx0bWluLXdpZHRoOiAxNDBweDtcbn1cbi5zaWdudXAtZm9ybSAuYnRuOmhvdmVyLCAuc2lnbnVwLWZvcm0gLmJ0bjpmb2N1cyB7XG5cdGJhY2tncm91bmQ6ICMxNzliODEgIWltcG9ydGFudDtcbn1cbi5zaWdudXAtZm9ybSBhIHtcblx0Y29sb3I6ICNmZmY7XHRcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uc2lnbnVwLWZvcm0gYTpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zaWdudXAtZm9ybSBmb3JtIGEge1xuXHRjb2xvcjogIzE5YWE4ZDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVx0XG4uc2lnbnVwLWZvcm0gZm9ybSBhOmhvdmVyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uc2lnbnVwLWZvcm0gLmZhIHtcblx0Zm9udC1zaXplOiAyMXB4O1xufVxuLnNpZ251cC1mb3JtIC5mYS1wYXBlci1wbGFuZSB7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cbi5zaWdudXAtZm9ybSAuZmEtY2hlY2sge1xuXHRjb2xvcjogI2ZmZjtcblx0bGVmdDogMTdweDtcblx0dG9wOiAxOHB4O1xuXHRmb250LXNpemU6IDdweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG5cbiNzaWduVXB7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-registration',
                templateUrl: './user-registration.component.html',
                styleUrls: ['./user-registration.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_service_user_services_service__WEBPACK_IMPORTED_MODULE_3__["UserServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/saving-account/saving-account.component.ts":
/*!************************************************************!*\
  !*** ./src/app/saving-account/saving-account.component.ts ***!
  \************************************************************/
/*! exports provided: SavingAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingAccountComponent", function() { return SavingAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SavingAccountComponent {
    constructor() {
        this.acocuntNumber = sessionStorage.getItem("savingAccountNumber");
        this.balance = sessionStorage.getItem("savingAccountBalance");
    }
    ngOnInit() {
    }
}
SavingAccountComponent.ɵfac = function SavingAccountComponent_Factory(t) { return new (t || SavingAccountComponent)(); };
SavingAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SavingAccountComponent, selectors: [["app-saving-account"]], decls: 9, vars: 2, consts: [[1, "card", "account"], [1, "card-header"], [1, "card-title"], [1, "card-body"]], template: function SavingAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Saving Account Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Saving Account Number: ", ctx.acocuntNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Account Balance: ", ctx.balance, " Rs");
    } }, styles: [".account[_ngcontent-%COMP%]{\n    margin:7%;\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zYXZpbmctYWNjb3VudC9zYXZpbmctYWNjb3VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFlBQVk7QUFDaEIiLCJmaWxlIjoiYXBwL3NhdmluZy1hY2NvdW50L3NhdmluZy1hY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudHtcbiAgICBtYXJnaW46NyU7XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavingAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-saving-account',
                templateUrl: './saving-account.component.html',
                styleUrls: ['./saving-account.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/route-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/route-guard.service.ts ***!
  \************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-services.service */ "./src/app/service/user-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class RouteGuardService {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.service.isUserLogin()) {
            return true;
        }
        else {
            this.router.navigate(["login"]);
        }
    }
}
RouteGuardService.ɵfac = function RouteGuardService_Factory(t) { return new (t || RouteGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_services_service__WEBPACK_IMPORTED_MODULE_1__["UserServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RouteGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouteGuardService, factory: RouteGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _user_services_service__WEBPACK_IMPORTED_MODULE_1__["UserServicesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/user-services.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/user-services.service.ts ***!
  \**************************************************/
/*! exports provided: UserServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServicesService", function() { return UserServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _registration_subComponents_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../registration/subComponents/user-registration/user-registration.component */ "./src/app/registration/subComponents/user-registration/user-registration.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UserServicesService {
    constructor(http) {
        this.http = http;
    }
    addUSerToDb() {
        console.log("Calling backend end point");
        //this.http.post("http://localhost:8090/register",user);
        //return this.http.get("http://localhost:8090/hello",{responseType: 'text'})
        return this.http.post("http://localhost:8090/register", new _registration_subComponents_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_1__["User"](sessionStorage.getItem("firstName"), sessionStorage.getItem("lastName"), sessionStorage.getItem("mailid"), Number(sessionStorage.getItem("phonenumber")), sessionStorage.getItem("address"), sessionStorage.getItem("password"), null, null));
    }
    authenticateUser(user) {
        console.log("Verifying user");
        return this.http.post("http://localhost:8090/login", user);
    }
    isUserLogin() {
        let user = sessionStorage.getItem("isAuthenticatedUser");
        return !(user === null);
    }
    getUserName() {
        return (sessionStorage.getItem("isAuthenticatedUser"));
    }
    transferFund(obj) {
        return this.http.post("http://localhost:8090/transfer", obj);
    }
    getAccountBalance(accountId) {
        return this.http.get(`http://localhost:8090//accounts/${accountId}/balance`);
    }
    depositMoney(accType, accNo, amount) {
        return this.http.post(`http://localhost:8090/deposit/${accType}/${accNo}/${amount}`, null);
    }
    requestChequeBook(chequeObj, userObj) {
        let objs = {
            "chequebook": chequeObj,
            "user": userObj
        };
        return this.http.post("http://localhost:8090//createcheque", chequeObj);
    }
    withdrawMoney(accType, accNo, amount) {
        return this.http.post(`http://localhost:8090/withdraw/${accType}/${accNo}/${amount}`, null);
    }
    getTransactions(accountId) {
        console.log(accountId);
        return this.http.get(`http://localhost:8090//accounts/${accountId}/transactions`);
    }
}
UserServicesService.ɵfac = function UserServicesService_Factory(t) { return new (t || UserServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserServicesService, factory: UserServicesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/transfer-funds/transfer-funds.component.ts":
/*!************************************************************!*\
  !*** ./src/app/transfer-funds/transfer-funds.component.ts ***!
  \************************************************************/
/*! exports provided: Transaction, TransferFundsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferFundsComponent", function() { return TransferFundsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_user_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user-services.service */ "./src/app/service/user-services.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function TransferFundsComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Beneficiary Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransferFundsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransferFundsComponent_div_16_div_1_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.beneficiaryName.errors.required);
} }
function TransferFundsComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Beneficiary's Account Number is required!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransferFundsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransferFundsComponent_div_21_div_1_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.beneficiaryAccountNumber.errors.required);
} }
function TransferFundsComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Beneficiary's IFSC code is required!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransferFundsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransferFundsComponent_div_26_div_1_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.beneficiaryIFSCCode.errors.required);
} }
function TransferFundsComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransferFundsComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransferFundsComponent_div_31_div_1_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.amountToBeTransfered.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class Transaction {
    constructor(description, transactionAmount, sourceAccountnumber, destinationAccountnumber, IFSC) {
        this.description = description;
        this.transactionAmount = transactionAmount;
        this.sourceAccountnumber = sourceAccountnumber;
        this.destinationAccountnumber = destinationAccountnumber;
        this.IFSC = IFSC;
    }
}
class TransferFundsComponent {
    constructor(route, formBuilder, service) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.service = service;
        this.account = history.state.data;
        this.submitted = false;
    }
    ngOnInit() {
        this.transferFundForm = this.formBuilder.group({
            accountType: ["Primary Account"],
            balance: [this.balanceFund],
            beneficiaryName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            beneficiaryAccountNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            beneficiaryIFSCCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            amountToBeTransfered: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            transferType: ["IMPS"],
            optionalMessage: [""]
        });
        this.getBalance();
    }
    get f() {
        return this.transferFundForm.controls;
    }
    getBalance() {
        (this.service.getAccountBalance(sessionStorage.getItem("primaryAccountNumber"))).subscribe(response => {
            this.balanceFund = Number(response);
        });
    }
    handleTransferFund() {
        this.submitted = true;
        if (this.transferFundForm.invalid) {
            console.log("Invalid");
        }
        else {
            let description = this.transferFundForm.get("optionalMessage").value ? this.transferFundForm.get("optionalMessage").value : "Fund Transfer";
            let newTransaction = new Transaction(description, Number(this.transferFundForm.get("amountToBeTransfered").value), Number(sessionStorage.getItem("primaryAccountNumber")), Number(this.transferFundForm.get("beneficiaryAccountNumber").value), "ICN0001");
            console.log(newTransaction);
            this.service.transferFund(newTransaction).subscribe(response => alert("Transaction Successfull"), error => alert("Transaction failed"));
        }
    }
    onChange(event) {
        const newVal = event.target.value;
        // this.balanceFund = this.getBalance(newVal);
        // console.log(newVal);
    }
}
TransferFundsComponent.ɵfac = function TransferFundsComponent_Factory(t) { return new (t || TransferFundsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_services_service__WEBPACK_IMPORTED_MODULE_3__["UserServicesService"])); };
TransferFundsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransferFundsComponent, selectors: [["app-transfer-funds"]], decls: 48, vars: 18, consts: [[1, "jumbotron", "bg-light", "text-dark", "p-10"], [3, "formGroup"], [1, "form-group"], ["for", "accountType"], ["id", "accountType", "name", "accountType", "formControlName", "accountType", 1, "form-control", 3, "change"], ["for", "accountBalance"], ["type", "text", "readonly", "", "id", "accountBalance", "placeholder", "", "formControlName", "balance", 1, "form-control", 3, "value"], ["for", "beneficiaryName"], ["type", "text", "id", "beneficiaryName", "fromControlName", "beneficiaryName", "required", "required", "formControlName", "beneficiaryName", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "beneficiaryAccountNumber"], ["type", "text", "id", "beneficiaryAccountNumber", "formControlName", "beneficiaryAccountNumber", 1, "form-control", 3, "ngClass"], ["for", "beneficiaryIFSCCode"], ["type", "text", "id", "beneficiaryIFSCCode", "formControlName", "beneficiaryIFSCCode", 1, "form-control", 3, "ngClass"], ["for", "amountToBeTransfered"], ["type", "number", "id", "amountToBeTransfered", "formControlName", "amountToBeTransfered", 1, "form-control", 3, "ngClass"], ["for", "transferType"], ["id", "accountType", "name", "transferType", "formControlName", "transferType", 1, "form-control"], ["for", "Description"], ["id", "description", "rows", "1", "formControlName", "optionalMessage", 1, "form-control"], ["type", "button", "id", "tranferFundButton", 1, "btn", "btn-primary", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], [1, "alert", "alert-warning", "mt-2"]], template: function TransferFundsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Account Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TransferFundsComponent_Template_select_change_5_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Primary Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Beneficiary Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TransferFundsComponent_div_16_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Beneficiary's Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TransferFundsComponent_div_21_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Beneficiary IFSC Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TransferFundsComponent_div_26_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Amount to be transferred");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TransferFundsComponent_div_31_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Transfer Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "IMPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "NEFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "RTGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Optional Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransferFundsComponent_Template_button_click_46_listener() { return ctx.handleTransferFund(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Transfer Funds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.transferFundForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.balanceFund);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.f.beneficiaryName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.beneficiaryName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.submitted && ctx.f.beneficiaryAccountNumber.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.beneficiaryAccountNumber.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.submitted && ctx.f.beneficiaryIFSCCode.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.beneficiaryIFSCCode.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.submitted && ctx.f.amountToBeTransfered.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.amountToBeTransfered.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [".jumbotron[_ngcontent-%COMP%]{\n    margin-top:2%;\n    margin-right:15%;\n    margin-left: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90cmFuc2Zlci1mdW5kcy90cmFuc2Zlci1mdW5kcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiYXBwL3RyYW5zZmVyLWZ1bmRzL3RyYW5zZmVyLWZ1bmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9ue1xuICAgIG1hcmdpbi10b3A6MiU7XG4gICAgbWFyZ2luLXJpZ2h0OjE1JTtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransferFundsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transfer-funds',
                templateUrl: './transfer-funds.component.html',
                styleUrls: ['./transfer-funds.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _service_user_services_service__WEBPACK_IMPORTED_MODULE_3__["UserServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user-home/user-home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-home/user-home.component.ts ***!
  \**************************************************/
/*! exports provided: UserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function() { return UserHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_user_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user-services.service */ "./src/app/service/user-services.service.ts");




class UserHomeComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }
    ngOnInit() {
        this.savingAccountBalance = sessionStorage.getItem("savingAccountBalance");
        this.service.getAccountBalance(Number(sessionStorage.getItem("primaryAccountNumber"))).subscribe(response => {
            this.primaryAccountBalance = response;
            sessionStorage.setItem("primaryAccountBalance", this.primaryAccountBalance);
        }, error => {
            console.log(error);
        });
        this.service.getAccountBalance(Number(sessionStorage.getItem("savingAccountNumber"))).subscribe(response => {
            this.savingAccountBalance = response;
            sessionStorage.setItem("savingAccountBalance", this.savingAccountBalance);
        }, error => {
            console.log(error);
        });
    }
    handleDeposit(account) {
        this.router.navigate(["user", "depositFund"]);
    }
    handleWithdraw(account) {
        this.router.navigate(["user", "withdrawFund"]);
    }
    handleAccount(account) {
        if (account === "Primary") {
            this.router.navigate(["user", "primaryAccount"]);
        }
    }
    handlePrimaryAccount() {
        this.router.navigate(["user", "primaryAccount"]);
    }
    handleSavingAccount() {
        this.router.navigate(["user", "savingAccount"]);
    }
}
UserHomeComponent.ɵfac = function UserHomeComponent_Factory(t) { return new (t || UserHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_services_service__WEBPACK_IMPORTED_MODULE_2__["UserServicesService"])); };
UserHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserHomeComponent, selectors: [["app-user-home"]], decls: 57, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col-sm"], [1, "account-container"], [1, "top-section"], [1, "balance", "float-right"], [1, "account", "type"], [1, "solid"], ["id", "viewPrimaryAccountDetails", 1, "bottom-section", 3, "click"], [1, "details", "float-right"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right"], ["id", "viewSavingAccountDetails", 1, "bottom-section", 3, "click"], [1, "transaction"], [1, "float-right"], ["aria-hidden", "true", 1, "fa", "fa-credit-card"], ["id", "depositFundSection", 1, "bottom-section", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-money"], ["id", "withdrawFudSection", 1, "bottom-section", 3, "click"]], template: function UserHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_Template_div_click_10_listener() { return ctx.handlePrimaryAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " View Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Saving Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_Template_div_click_23_listener() { return ctx.handleSavingAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " View Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Deposit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_Template_div_click_38_listener() { return ctx.handleDeposit("Primary Account"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Go to deposits ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Withdrawal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_Template_div_click_52_listener() { return ctx.handleWithdraw("Primary Account"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Go to Withdrawal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.primaryAccountBalance, " Rs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.savingAccountBalance, " Rs ");
    } }, styles: ["body[_ngcontent-%COMP%]{\n    background-color: oldlace;\n}\n.account-container[_ngcontent-%COMP%]{\n    margin-top:10%;\n    color: orange;\n    padding:0;\n    background: white;\n}\n.top-section[_ngcontent-%COMP%]{\n    font-size: 2.5em;\n    background-color:#04c1c4;\n    padding: 5%;\n    color: #031c63;\n    \n}\n.bottom-section[_ngcontent-%COMP%]{\n    padding-left: 5%;\n    padding-right: 5%;\n    padding-top:2%;\n    padding-bottom:2%;\n    color: #048ec4;\n}\nhr[_ngcontent-%COMP%]{\n    padding: 0%;\n    margin: 0%;\n}\n.transaction[_ngcontent-%COMP%]{\n    margin-top: 22%;\n    background-color: white;\n    padding:0;\n    \n}\n.transaction[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    font-size: 0.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyLWhvbWUvdXNlci1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsU0FBUztJQUNULGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsY0FBYzs7QUFFbEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFNBQVM7O0FBRWI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJhcHAvdXNlci1ob21lL3VzZXItaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvbGRsYWNlO1xufVxuLmFjY291bnQtY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6MTAlO1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgcGFkZGluZzowO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnRvcC1zZWN0aW9ue1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDRjMWM0O1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIGNvbG9yOiAjMDMxYzYzO1xuICAgIFxufVxuLmJvdHRvbS1zZWN0aW9ue1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgcGFkZGluZy10b3A6MiU7XG4gICAgcGFkZGluZy1ib3R0b206MiU7XG4gICAgY29sb3I6ICMwNDhlYzQ7XG59XG5ocntcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBtYXJnaW46IDAlO1xufVxuLnRyYW5zYWN0aW9ue1xuICAgIG1hcmdpbi10b3A6IDIyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOjA7XG4gICAgXG59XG4udHJhbnNhY3Rpb24gc3BhbntcbiAgICBmb250LXNpemU6IDAuN2VtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-home',
                templateUrl: './user-home.component.html',
                styleUrls: ['./user-home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_user_services_service__WEBPACK_IMPORTED_MODULE_2__["UserServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_user_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user-services.service */ "./src/app/service/user-services.service.ts");



class UserProfileComponent {
    constructor(service) {
        this.service = service;
        this.userName = this.service.getUserName();
        this.firstname = sessionStorage.getItem("firstname");
        this.lastname = sessionStorage.getItem("lastname");
        this.phonenumber = sessionStorage.getItem("phonenumber");
        this.email = sessionStorage.getItem("mailid");
        this.address = sessionStorage.getItem("address");
    }
    ngOnInit() {
        this.savingAccountNumber = sessionStorage.getItem("savingAccountNumber");
        this.savingAccountBalance = sessionStorage.getItem("savingAccountBalance");
        this.primaryAccountBalance = sessionStorage.getItem("primaryAccountBalance");
        this.primaryAccountNumber = sessionStorage.getItem("primaryAccountNumber");
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_services_service__WEBPACK_IMPORTED_MODULE_1__["UserServicesService"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 42, vars: 10, consts: [[1, "container"], [1, "row"], [1, "col-md"], [1, "card", "account", "profile"], [1, "card-header"], ["src", "https://image.flaticon.com/icons/svg/151/151782.svg", "alt", "User photo", 1, "profile-pic"], [1, "user"], [1, "card-body"], [1, "card-text"], [1, "card", "account"], [1, "card-title"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Primary Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Saving Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.userName, "'s profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("First Name: ", ctx.firstname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last Name: ", ctx.lastname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mobile Number: ", ctx.phonenumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email id: ", ctx.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Address : ", ctx.address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Account Number: ", ctx.primaryAccountNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Account Balance: ", ctx.primaryAccountBalance, " Rs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Account Number: ", ctx.savingAccountNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Account Balance: ", ctx.savingAccountBalance, " Rs");
    } }, styles: [".account[_ngcontent-%COMP%]{\n    margin:7%;\n    color: black;\n}\n\n.span[_ngcontent-%COMP%]{\n    font-size: 1.5em;\n}\n\n.profile[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    font-size: 2em;\n    text-align: center;\n    padding: 0%;\n   }\n\n.profile-pic[_ngcontent-%COMP%]{\n    width:50%;\n    height:50%;\n    margin-top: 10%;\n    padding: 0%;\n}\n\n.profile[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztHQUNaOztBQUNIO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUdBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6ImFwcC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudHtcbiAgICBtYXJnaW46NyU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uc3BhbntcbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuLnByb2ZpbGUgLmNhcmQtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCU7XG4gICB9XG4ucHJvZmlsZS1waWN7XG4gICAgd2lkdGg6NTAlO1xuICAgIGhlaWdodDo1MCU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHBhZGRpbmc6IDAlO1xufVxuXG5cbi5wcm9maWxle1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.css']
            }]
    }], function () { return [{ type: _service_user_services_service__WEBPACK_IMPORTED_MODULE_1__["UserServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/withdraw-fund/withdraw-fund.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/withdraw-fund/withdraw-fund.component.ts ***!
  \**********************************************************/
/*! exports provided: WithdrawFundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawFundComponent", function() { return WithdrawFundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_user_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user-services.service */ "./src/app/service/user-services.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function WithdrawFundComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WithdrawFundComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WithdrawFundComponent_div_18_div_1_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.amountToBeDeposited.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class WithdrawFundComponent {
    constructor(route, formBuilder, service) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.service = service;
        this.submitted = false;
    }
    ngOnInit() {
        this.withdrawFundForm = this.formBuilder.group({
            accountType: ["Primary Account"],
            balance: [this.balanceFund],
            amountToBeDeposited: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.getBalanceAsPerAccountType(this.withdrawFundForm.get("accountType").value);
    }
    getBalanceAsPerAccountType(accountType) {
        if (accountType === "Primary Account")
            this.getBalance(sessionStorage.getItem("primaryAccountNumber"));
        else
            this.balanceFund = Number(sessionStorage.getItem("savingAccountBalance"));
    }
    get f() {
        return this.withdrawFundForm.controls;
    }
    getBalance(account) {
        this.service.getAccountBalance(Number(account)).subscribe(response => {
            this.balanceFund = Number(response);
        }, error => {
            console.log(error);
        });
    }
    handleTransferFund() {
        this.submitted = true;
        if (this.withdrawFundForm.invalid) {
            console.log("Invalid");
        }
        else {
            if (this.withdrawFundForm.get("accountType").value === "Primary Account") {
                this.service.withdrawMoney("Primary", Number(sessionStorage.getItem("primaryAccountNumber")), Number(this.withdrawFundForm.get("amountToBeDeposited").value)).subscribe(response => {
                    console.log(response);
                    alert("Money Withdrawn successfully!!");
                    this.route.navigate(["user", "home"]);
                }, error => {
                    alert("Transaction Failed");
                    console.log(error);
                });
            }
            else {
                this.service.withdrawMoney("Savings", Number(sessionStorage.getItem("savingAccountNumber")), Number(this.withdrawFundForm.get("amountToBeDeposited").value)).subscribe(response => {
                    let updatedBalance;
                    console.log(response);
                    if (this.withdrawFundForm.get("amountToBeDeposited").value > Number(sessionStorage.getItem("savingAccountBalance"))) {
                        updatedBalance = Number(this.withdrawFundForm.get("amountToBeDeposited").value) - Number(sessionStorage.getItem("savingAccountBalance"));
                        sessionStorage.setItem("savingAccountBalance", String(updatedBalance));
                    }
                    alert("Money Withdrawn successfully!!");
                    this.route.navigate(["user", "home"]);
                }, error => {
                    alert("Transaction Failed");
                    console.log(error);
                });
            }
        }
    }
    onChange(event) {
        const newVal = event.target.value;
        this.getBalanceAsPerAccountType(newVal);
        // console.log(newVal);
    }
}
WithdrawFundComponent.ɵfac = function WithdrawFundComponent_Factory(t) { return new (t || WithdrawFundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_services_service__WEBPACK_IMPORTED_MODULE_3__["UserServicesService"])); };
WithdrawFundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WithdrawFundComponent, selectors: [["app-withdraw-fund"]], decls: 21, vars: 6, consts: [[1, "jumbotron", "bg-light", "text-dark", "p-10"], [3, "formGroup"], [1, "form-group"], ["for", "accountType"], ["id", "accountType", "name", "accountType", "formControlName", "accountType", 1, "form-control", 3, "change"], ["for", "accountBalance"], ["type", "text", "readonly", "", "id", "accountBalance", "placeholder", "", "formControlName", "balance", 1, "form-control", 3, "value"], ["for", "amountToBeDeposited"], ["type", "number", "id", "amountToWithdrawn", "formControlName", "amountToBeDeposited", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "button", "id", "withdrawMoneyButton", 1, "btn", "btn-primary", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], [1, "alert", "alert-warning", "mt-2"]], template: function WithdrawFundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please select your account type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function WithdrawFundComponent_Template_select_change_5_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Primary Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Saving Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Amount to be withdrawn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WithdrawFundComponent_div_18_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WithdrawFundComponent_Template_button_click_19_listener() { return ctx.handleTransferFund(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Withdraw Money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.withdrawFundForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.balanceFund);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.submitted && ctx.f.amountToBeDeposited.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.amountToBeDeposited.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".jumbotron[_ngcontent-%COMP%]{\n    margin-top:2%;\n    margin-right:15%;\n    margin-left: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93aXRoZHJhdy1mdW5kL3dpdGhkcmF3LWZ1bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImFwcC93aXRoZHJhdy1mdW5kL3dpdGhkcmF3LWZ1bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XG4gICAgbWFyZ2luLXRvcDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MTUlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithdrawFundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-withdraw-fund',
                templateUrl: './withdraw-fund.component.html',
                styleUrls: ['./withdraw-fund.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _service_user_services_service__WEBPACK_IMPORTED_MODULE_3__["UserServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ddevarapalli\Downloads\ICIN-Bank-Project-master\bank frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map