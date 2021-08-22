(self["webpackChunkionic_app"] = self["webpackChunkionic_app"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 2276:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageRoutingModule": () => (/* binding */ AuthPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page */ 3561);




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage
    }
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageModule": () => (/* binding */ AuthPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 2276);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page */ 3561);







let AuthPageModule = class AuthPageModule {
};
AuthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthPageRoutingModule
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_1__.AuthPage]
    })
], AuthPageModule);



/***/ }),

/***/ 3561:
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPage": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./auth.page.html */ 8419);
/* harmony import */ var _auth_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page.scss */ 957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 384);







let AuthPage = class AuthPage {
    constructor(authService, router, loadingCtrl) {
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
        this.isLogin = true;
    }
    ngOnInit() {
    }
    onLogin() {
        this.authService.login();
        this.isLoading = true;
        this.loadingCtrl
            .create({ keyboardClose: true, message: 'Logging in...' })
            .then(loadingEl => {
            loadingEl.present();
            setTimeout(() => {
                this.isLoading = false;
                loadingEl.dismiss();
                this.router.navigateByUrl('/places/tabs/discover');
            }, 1500);
        });
    }
    onSubmit(form) {
        console.log(form);
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        console.log(email, password);
        if (this.isLogin) {
            //send a request to login servers
        }
        else {
            //send a request to signup servers
        }
    }
    onSwitchAuthMode() {
        this.isLogin = !this.isLogin;
    }
};
AuthPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
AuthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-auth',
        template: _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AuthPage);



/***/ }),

/***/ 957:
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-icon {\n  font-size: 128px;\n}\n\nion-text {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7QUFFRiIsImZpbGUiOiJhdXRoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxMjhweDtcbn1cbmlvbi10ZXh0IHtcbiAgY29sb3I6IHdoaXRlXG59XG5cbiJdfQ== */");

/***/ }),

/***/ 8419:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"mobile\">\n  <ion-header>\n        <ion-toolbar>\n          <ion-title>{{ isLogin ? 'Login' : 'Signup' }}</ion-title>\n        </ion-toolbar>\n  </ion-header>\n</div>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"4.5\" offset-sm=\"3.75\" text-center>\n        <ion-card>\n          <ion-card-header>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"5\" offset=\"4.5\">\n                  <h1>{{ isLogin ? 'Login' : 'Signup' }}</h1>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-header>\n          <ion-card-header>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"5\" offset=\"3.5\">\n                  <ion-icon name=\"person-circle-outline\"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-header>\n          <ion-card-content>\n            <form #f=\"ngForm\" (ngSubmit)= \"onSubmit(f)\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size-sm=\"10\" offset-sm=\"1\">\n                    <ion-list>\n                      <ion-item>\n                        <ion-label position=\"floating\">E-mail</ion-label>\n                        <ion-input\n                          type=\"email\"\n                          ngModel\n                          name=\"email\"\n                          required\n                          email\n                          #emailCtrl=\"ngModel\"\n                        ></ion-input>\n                      </ion-item>\n                      <ion-item\n                        *ngIf = \"!emailCtrl.valid && emailCtrl.touched\"\n                        lines = \"none\"\n                      >\n                        <p>Should be a valid email address.</p>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label position=\"floating\">Password</ion-label>\n                        <ion-input\n                          type=\"password\"\n                          ngModel\n                          name=\"password\"\n                          required\n                          minlength = \"6\"\n                          #passwordCtrl = \"ngModel\"\n                        ></ion-input>\n                      </ion-item>\n                      <ion-item\n                      *ngIf = \"!passwordCtrl.valid && passwordCtrl.touched\"\n                      lines = \"none\"\n                      >\n                      <p>Should at least be 6 characters long.</p>\n                      </ion-item>\n                    </ion-list>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size-sm=\"10\" offset-sm=\"1\">\n                    <ion-button\n                      shape = \"round\"\n                      type= \"button\"\n\n                      expand=\"full\"\n                      (click)=\"onSwitchAuthMode()\"\n                    >Switch to {{ isLogin ? 'Signup' : 'Login' }}</ion-button>\n                    <ion-button\n                      shape = \"round\"\n                      type = \"submit\"\n                      expand=\"full\"\n                      (click)=\"onLogin()\"\n                      [disabled]= \"!f.valid\"\n                    >Login</ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </form>\n            <!--\n            <ion-spinner color = \"primary\" *ngIf= \"isLoading\"></ion-spinner>\n            -->\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map