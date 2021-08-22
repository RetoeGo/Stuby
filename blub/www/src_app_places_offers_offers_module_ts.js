(self["webpackChunkionic_app"] = self["webpackChunkionic_app"] || []).push([["src_app_places_offers_offers_module_ts"],{

/***/ 2863:
/*!******************************************************************!*\
  !*** ./src/app/places/offers/offer-item/offer-item.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferItemComponent": () => (/* binding */ OfferItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_offer_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./offer-item.component.html */ 3158);
/* harmony import */ var _offer_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer-item.component.scss */ 4930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let OfferItemComponent = class OfferItemComponent {
    constructor() { }
    ngOnInit() { }
    getDummyDate() {
        return new Date();
    }
};
OfferItemComponent.ctorParameters = () => [];
OfferItemComponent.propDecorators = {
    offer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
OfferItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-offer-item',
        template: _raw_loader_offer_item_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_offer_item_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OfferItemComponent);



/***/ }),

/***/ 5562:
/*!********************************************************!*\
  !*** ./src/app/places/offers/offers-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPageRoutingModule": () => (/* binding */ OffersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers.page */ 4095);




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _offers_page__WEBPACK_IMPORTED_MODULE_0__.OffersPage,
            },
            {
                path: 'new',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_places_offers_new-offer_new-offer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./new-offer/new-offer.module */ 4757)).then(m => m.NewOfferPageModule)
            },
            {
                path: 'edit/:placeId',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_places_offers_edit-offer_edit-offer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-offer/edit-offer.module */ 6347)).then(m => m.EditOfferPageModule)
            },
            /*
            {
              path: ':placeId',
              loadChildren: () => import('./offer-bookings/offer-bookings.module').then( m => m.OfferBookingsPageModule)
            }
            */
        ]
    }
];
let OffersPageRoutingModule = class OffersPageRoutingModule {
};
OffersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OffersPageRoutingModule);



/***/ }),

/***/ 1355:
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPageModule": () => (/* binding */ OffersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers-routing.module */ 5562);
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers.page */ 4095);
/* harmony import */ var _offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offer-item/offer-item.component */ 2863);








let OffersPageModule = class OffersPageModule {
};
OffersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _offers_routing_module__WEBPACK_IMPORTED_MODULE_0__.OffersPageRoutingModule,
        ],
        declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_1__.OffersPage, _offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_2__.OfferItemComponent]
    })
], OffersPageModule);



/***/ }),

/***/ 4095:
/*!**********************************************!*\
  !*** ./src/app/places/offers/offers.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPage": () => (/* binding */ OffersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_offers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./offers.page.html */ 9970);
/* harmony import */ var _offers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers.page.scss */ 342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ 4395);






let OffersPage = class OffersPage {
    constructor(placeService, router) {
        this.placeService = placeService;
        this.router = router;
        this.isLoading = false;
    }
    ngOnInit() {
        this.placeService.places.subscribe(places => this.offers = places);
    }
    onEdit(offerId, slidingItem) {
        slidingItem.close();
        this.router.navigateByUrl('places/tabs/offers/edit/' + offerId);
        console.log('Editing item:', offerId);
    }
    ngOnDestroy() {
        if (this.placesSub) {
            this.placesSub.unsubscribe();
        }
    }
    ionViewWillEnter() {
        this.isLoading = true;
        this.placeService.fetchPlaces().subscribe(() => {
            this.isLoading = false;
        });
    }
};
OffersPage.ctorParameters = () => [
    { type: _places_service__WEBPACK_IMPORTED_MODULE_2__.PlacesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
OffersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-offers',
        template: _raw_loader_offers_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_offers_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OffersPage);



/***/ }),

/***/ 4930:
/*!********************************************************************!*\
  !*** ./src/app/places/offers/offer-item/offer-item.component.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".offer-details {\n  display: flex;\n  align-items: center;\n}\n.offer-details .space-left {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVyLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSiIsImZpbGUiOiJvZmZlci1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9mZmVyLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5zcGFjZS1sZWZ0IHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59XG5cbiJdfQ== */");

/***/ }),

/***/ 342:
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZlcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 3158:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-item/offer-item.component.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n<ion-item\n[routerLink]=\"['./', offer.id]\"\ndetail\n>\n-->\n<ion-item>\n  <ion-thumbnail slot=\"start\">\n    <ion-img [src]= \"offer.imageUrl\"></ion-img>\n  </ion-thumbnail>\n  <ion-label>\n    <h2> {{ offer.title }}</h2>\n\n    <div class=\"offer-details\">\n      <ion-icon name = \"calendar\"></ion-icon>\n      <ion-text color = \"primary\" class= \"space-left\"> {{ offer.availableFrom | date }}</ion-text>\n      <span class= \"space-left\">to</span>\n      <ion-icon name = \"calendar\" class= \"space-left\"></ion-icon>\n      <ion-text color = \"primary\" class= \"space-left\"> {{ offer.availableTo | date }}</ion-text>\n    </div>\n\n  </ion-label>\n</ion-item>\n");

/***/ }),

/***/ 9970:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"m1\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>My Offers</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"./new\">\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!--\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\n        <div *ngIf=\"isLoading\" class=\"ion-text-center\">\n          <ion-spinner color=\"primary\"></ion-spinner>\n        </div>\n        <div class=\"ion-text-center\" *ngIf=\"!isLoading && offers.length <= 0\">\n          <p>No offers found! Please create one first!</p>\n          <ion-button color=\"primary\" routerLink=\"/places/tabs/offers/new\"\n            >Offer New Place</ion-button\n          >\n        </div>\n        <ion-list *ngIf=\"!isLoading && offers.length > 0\">\n          <ion-item-sliding *ngFor=\"let offer of offers\" #slidingItem>\n            <app-offer-item [offer]=\"offer\"></app-offer-item>\n            <ion-item-options side=\"end\">\n              <ion-item-option\n                color=\"secondary\"\n                (click)=\"onEdit(offer.id, slidingItem)\"\n              >\n                <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n-->\n<ion-content padding>\n  <ion-grid>\n    <ion-row >\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <div *ngIf= \"!isLoading && offers.length <= 0\" class=\"ion-text-center\">\n          <p> No offers found! Please cteate one first!</p>\n          <ion-button color = \"primary\" [routerLink]= \"['./', 'new']\">Offer New Place</ion-button>\n        </div>\n        <ion-list *ngIf =\"!isLoading && offers.length > 0\">\n          <div *ngIf= \"isLoading\" class=\"ion-text-center\">\n            <ion-spinner> </ion-spinner>\n          </div>\n          <ion-item-sliding *ngFor= \"let offer of offers\" #slidingItem>\n            <app-offer-item [offer]= \"offer\"></app-offer-item>\n            <ion-item-options>\n              <ion-item-option color=\"secondary\" (click)=\"onEdit(offer.id, slidingItem)\">\n                <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_places_offers_offers_module_ts.js.map