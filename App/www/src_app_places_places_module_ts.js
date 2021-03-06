(self["webpackChunkionic_app"] = self["webpackChunkionic_app"] || []).push([["src_app_places_places_module_ts"],{

/***/ 3417:
/*!*************************************************!*\
  !*** ./src/app/places/places-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacesPageRoutingModule": () => (/* binding */ PlacesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./places.page */ 714);




//import { AppRoutingModule } from '../app-routing.module';
//import { PlacesPage } from './places.page';
const routes = [
    {
        path: 'tabs',
        component: _places_page__WEBPACK_IMPORTED_MODULE_0__.PlacesPage,
        children: [
            {
                path: '',
                redirectTo: 'tabs/discover',
                pathMatch: 'full'
            },
            {
                path: 'discover',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_places_discover_discover_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./discover/discover.module */ 2460)).then(m => m.DiscoverPageModule)
            },
            {
                path: 'offers',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_places_offers_offers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./offers/offers.module */ 1355)).then(m => m.OffersPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/discover',
        pathMatch: 'full'
    }
];
let PlacesPageRoutingModule = class PlacesPageRoutingModule {
};
PlacesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlacesPageRoutingModule);



/***/ }),

/***/ 6023:
/*!*****************************************!*\
  !*** ./src/app/places/places.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacesPageModule": () => (/* binding */ PlacesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _places_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./places-routing.module */ 3417);
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./places.page */ 714);







let PlacesPageModule = class PlacesPageModule {
};
PlacesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _places_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlacesPageRoutingModule
        ],
        declarations: [_places_page__WEBPACK_IMPORTED_MODULE_1__.PlacesPage]
    })
], PlacesPageModule);



/***/ }),

/***/ 714:
/*!***************************************!*\
  !*** ./src/app/places/places.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacesPage": () => (/* binding */ PlacesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_places_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./places.page.html */ 4250);
/* harmony import */ var _places_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./places.page.scss */ 331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let PlacesPage = class PlacesPage {
    constructor() { }
    ngOnInit() {
    }
};
PlacesPage.ctorParameters = () => [];
PlacesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-places',
        template: _raw_loader_places_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_places_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PlacesPage);



/***/ }),

/***/ 331:
/*!*****************************************!*\
  !*** ./src/app/places/places.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFjZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 4250:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/places.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("  <ion-tabs>\n\n    <ion-tab-bar slot=\"bottem\">\n      <ion-tab-button tab=\"discover\">\n        <ion-label> Discover </ion-label>\n        <ion-icon name=\"search\"></ion-icon>\n\n      </ion-tab-button>\n      <ion-tab-button tab=\"offers\">\n        <ion-label> Offers </ion-label>\n        <ion-icon name=\"card\"></ion-icon>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_places_places_module_ts.js.map