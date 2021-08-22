(self["webpackChunkionic_app"] = self["webpackChunkionic_app"] || []).push([["src_app_bookings_bookings_module_ts"],{

/***/ 5083:
/*!*****************************************************!*\
  !*** ./src/app/bookings/bookings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsPageRoutingModule": () => (/* binding */ BookingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookings.page */ 3017);




const routes = [
    {
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_0__.BookingsPage
    }
];
let BookingsPageRoutingModule = class BookingsPageRoutingModule {
};
BookingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookingsPageRoutingModule);



/***/ }),

/***/ 7938:
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsPageModule": () => (/* binding */ BookingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookings-routing.module */ 5083);
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookings.page */ 3017);







let BookingsPageModule = class BookingsPageModule {
};
BookingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingsPageRoutingModule
        ],
        declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_1__.BookingsPage]
    })
], BookingsPageModule);



/***/ }),

/***/ 3017:
/*!*******************************************!*\
  !*** ./src/app/bookings/bookings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsPage": () => (/* binding */ BookingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_bookings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bookings.page.html */ 220);
/* harmony import */ var _bookings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookings.page.scss */ 9706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _bookings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookings.service */ 1398);






let BookingsPage = class BookingsPage {
    constructor(bookingsService, loadingCtrl) {
        this.bookingsService = bookingsService;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
    }
    ngOnInit() {
        this.bookingSub = this.bookingsService.bookings.subscribe(bookings => {
            this.loadedBookings = bookings;
        });
    }
    ionViewWillEnter() {
        this.isLoading = true;
        this.bookingsService.fetchBookings().subscribe(() => this.isLoading = false);
    }
    ngOnDestroy() {
        if (this.bookingSub) {
            this.bookingSub.unsubscribe();
        }
    }
    onCancelBooking(bookingId, slidingEl) {
        slidingEl.close();
        this.loadingCtrl.create({ message: 'Canceling...' }).then(loadingEl => {
            loadingEl.present();
            this.bookingsService.cancelBooking(bookingId).subscribe(() => loadingEl.dismiss());
        });
    }
};
BookingsPage.ctorParameters = () => [
    { type: _bookings_service__WEBPACK_IMPORTED_MODULE_2__.BookingsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController }
];
BookingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-bookings',
        template: _raw_loader_bookings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bookings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BookingsPage);



/***/ }),

/***/ 9706:
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5ncy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 220:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"m1\"></ion-menu-button>\n    </ion-buttons>\n\n\n    <ion-title>Your Bookings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col\n        size-md=\"6\"\n        offset-md=\"3\"\n        *ngIf=\"isLoading\"\n        text-center\n      >\n        <ion-spinner></ion-spinner>\n      </ion-col>\n      <ion-col\n        size-md=\"6\"\n        offset-md=\"3\"\n        *ngIf=\"!isLoading && !(loadedBookings && loadedBookings.length > 0)\"\n        text-center\n      >\n        <p>No Bookings found!</p>\n      </ion-col>\n      <ion-col\n        size-md=\"6\"\n        offset-md=\"3\"\n        *ngIf=\"!isLoading && loadedBookings && loadedBookings.length > 0\"\n      >\n        <ion-list>\n          <ion-item-sliding *ngFor= \"let booking of loadedBookings\" #slidingBooking>\n            <ion-item>\n              <ion-avatar slot=\"start\">\n                <ion-img [src] = \"booking.placeImage\"></ion-img>\n\n              </ion-avatar>\n              <ion-label>\n                <h5>{{ booking.placeTitle }}</h5>\n                <p>Guests: {{ booking.guestNumber }}</p>\n              </ion-label>\n            </ion-item>\n            <ion-item-options>\n              <ion-item-option color=\"danger\" (click) = \"onCancelBooking(booking.id, slidingBooking)\">\n                <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_bookings_bookings_module_ts.js.map