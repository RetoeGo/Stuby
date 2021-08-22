(self["webpackChunkionic_app"] = self["webpackChunkionic_app"] || []).push([["src_app_places_discover_place-detail_place-detail_module_ts"],{

/***/ 7004:
/*!*********************************************************************!*\
  !*** ./src/app/bookings/create-booking/create-booking.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBookingComponent": () => (/* binding */ CreateBookingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_create_booking_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-booking.component.html */ 1646);
/* harmony import */ var _create_booking_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-booking.component.scss */ 3658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let CreateBookingComponent = class CreateBookingComponent {
    constructor(modelCtrl) {
        this.modelCtrl = modelCtrl;
    }
    ngOnInit() {
        const availableFrom = new Date(this.selectedPlace.availableFrom);
        const availableTo = new Date(this.selectedPlace.availableTo);
        if (this.selectedMode === 'random') {
            this.startDate = new Date(availableFrom.getTime() +
                Math.random() *
                    (availableTo.getTime() - 7 * 24 * 60 * 60 * 1000)).toISOString();
            this.endDate = new Date(new Date(this.startDate).getTime() + Math.random() *
                (new Date(this.startDate).getTime() +
                    6 * 24 * 60 * 60 * 1000 -
                    new Date(this.startDate).getTime())).toISOString();
        }
    }
    onCancel() {
        this.modelCtrl.dismiss(null, 'cancel');
    }
    onBookPlace() {
        if (!this.form.valid || !this.datesValid()) {
            return;
        }
        this.modelCtrl.dismiss({
            firstName: this.form.value['first-name'],
            lastName: this.form.value['last-name'],
            guestNumber: +this.form.value['guest-number'],
            startDate: new Date(this.form.value['date-from']),
            endDate: new Date(this.form.value['date-to'])
        }, 'confirm');
    }
    datesValid() {
        const startDate = new Date(this.form.value['date-from']);
        const endDate = new Date(this.form.value['date-to']);
        return endDate > startDate;
    }
};
CreateBookingComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
CreateBookingComponent.propDecorators = {
    selectedPlace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    selectedMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['f', { static: true },] }]
};
CreateBookingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-create-booking',
        template: _raw_loader_create_booking_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_booking_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateBookingComponent);



/***/ }),

/***/ 8982:
/*!*****************************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailPageRoutingModule": () => (/* binding */ PlaceDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-detail.page */ 4042);




const routes = [
    {
        path: '',
        component: _place_detail_page__WEBPACK_IMPORTED_MODULE_0__.PlaceDetailPage
    }
];
let PlaceDetailPageRoutingModule = class PlaceDetailPageRoutingModule {
};
PlaceDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlaceDetailPageRoutingModule);



/***/ }),

/***/ 4631:
/*!*********************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailPageModule": () => (/* binding */ PlaceDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-detail-routing.module */ 8982);
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-detail.page */ 4042);
/* harmony import */ var _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bookings/create-booking/create-booking.component */ 7004);








let PlaceDetailPageModule = class PlaceDetailPageModule {
};
PlaceDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlaceDetailPageRoutingModule
        ],
        declarations: [_place_detail_page__WEBPACK_IMPORTED_MODULE_1__.PlaceDetailPage, _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_2__.CreateBookingComponent],
        entryComponents: [_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_2__.CreateBookingComponent]
    })
], PlaceDetailPageModule);



/***/ }),

/***/ 4042:
/*!*******************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailPage": () => (/* binding */ PlaceDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_place_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./place-detail.page.html */ 1043);
/* harmony import */ var _place_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-detail.page.scss */ 6691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../places.service */ 4395);
/* harmony import */ var _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../bookings/create-booking/create-booking.component */ 7004);
/* harmony import */ var src_app_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bookings/bookings.service */ 1398);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);
/* harmony import */ var _shared_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/map-modal/map-modal.component */ 1218);











let PlaceDetailPage = class PlaceDetailPage {
    constructor(router, route, navCtrl, placesService, modalCtrl, actionSheetCtrl, bookingService, loadingCtrl, authService, alertCtrl) {
        this.router = router;
        this.route = route;
        this.navCtrl = navCtrl;
        this.placesService = placesService;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.bookingService = bookingService;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.isBookable = false;
        this.isLoading = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('placeId')) {
                this.navCtrl.navigateBack('/places/tabs/discover');
                return;
            }
            this.isLoading = true;
            this.placeSub = this.placesService
                .getPlace(paramMap.get('placeId'))
                .subscribe(place => {
                this.place = place;
                this.isBookable = place.userId !== this.authService.userId;
                this.isLoading = false;
            }, error => {
                this.alertCtrl.create({
                    header: 'An error occured!',
                    message: 'Place could not be fetched. Please try again later.',
                    buttons: [{ text: 'Okay', handler: () => {
                                this.router.navigateByUrl('places/tabs/discover');
                            } }]
                }).then(alertEl => {
                    alertEl.present();
                });
            });
        });
    }
    ngOnDestroy() {
        if (this.placeSub) {
            this.placeSub.unsubscribe();
        }
    }
    onShowFullMap() {
        this.modalCtrl.create({
            component: _shared_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_6__.MapModalComponent,
            componentProps: {
                center: { lat: this.place.location.lat, lng: this.place.location.lng },
                selectable: false,
                closeButtonText: 'Close',
                title: this.place.location.address
            }
        })
            .then(modalEl => {
            modalEl.present();
        });
    }
    onBookPlace() {
        //this.router.navigateByUrl('/places/tabs/discover');
        //this.navCtrl.navigateBack('/places/tabs/discover');
        this.actionSheetCtrl.create({
            header: 'Choose an Action',
            buttons: [
                {
                    text: 'Select Date',
                    handler: () => {
                        this.openBookingModal('select');
                    }
                },
                {
                    text: 'Random Date',
                    handler: () => {
                        this.openBookingModal('random');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        }).then(actionSheetEl => {
            actionSheetEl.present();
        });
    }
    openBookingModal(mode) {
        console.log(mode);
        this.modalCtrl.create({
            component: _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_3__.CreateBookingComponent,
            componentProps: { selectedPlace: this.place, selectedMode: mode }
        }).then(modalEl => {
            modalEl.present();
            return modalEl.onDidDismiss();
        }).then(resultData => {
            if (resultData.role === 'confirm') {
                console.log('test1');
                this.loadingCtrl.create({ message: 'Booking place...' }).then(loadingEl => {
                    loadingEl.present();
                    const data = resultData.data;
                    console.log('test2');
                    this.bookingService.addBooking(this.place.id, this.place.title, this.place.imageUrl, data.firstName, //data type any
                    data.lastName, data.guestNumber, data.startDate, new Date(this.place.availableTo)).subscribe(() => {
                        console.log('test3');
                        loadingEl.dismiss();
                        this.router.navigateByUrl('/bookings');
                    }, error => {
                        this.alertCtrl.create({
                            header: 'An error ocurred',
                            message: 'Could not load place.',
                            buttons: [{
                                    text: 'Okay',
                                    handler: () => {
                                        this.router.navigateByUrl('../');
                                    }
                                }]
                        }).then(alertEl => alertEl.present());
                    });
                });
            }
        });
    }
};
PlaceDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _places_service__WEBPACK_IMPORTED_MODULE_2__.PlacesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: src_app_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_4__.BookingsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
PlaceDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-place-detail',
        template: _raw_loader_place_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_place_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PlaceDetailPage);



/***/ }),

/***/ 3658:
/*!***********************************************************************!*\
  !*** ./src/app/bookings/create-booking/create-booking.component.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtYm9va2luZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 6691:
/*!*********************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".location-image {\n  width: 100%;\n  height: 25rem;\n  max-height: 30vh;\n  object-fit: cover;\n}\n\np {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWNlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7QUFDRiIsImZpbGUiOiJwbGFjZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2F0aW9uLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjVyZW07XG4gIG1heC1oZWlnaHQ6IDMwdmg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */");

/***/ }),

/***/ 1646:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/create-booking/create-booking.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title> {{ selectedPlace.title }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)= \"onCancel()\">\n        <ion-icon name= \"close\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\" padding>\n  <form (ngSubmit) = \"onBookPlace()\" #f= \"ngForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position =\"floating\">First Name</ion-label>\n            <ion-input type=\"text\" ngModel name=\"first-name\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position =\"floating\">Last Name</ion-label>\n            <ion-input type=\"text\" ngModel name=\"last-name\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position =\"floating\">Number of Guests</ion-label>\n            <ion-select [ngModel]=\"'2'\" name=\"guest-number\">\n              <ion-select-option value = \"1\">1</ion-select-option>\n              <ion-select-option value = \"2\">2</ion-select-option>\n              <ion-select-option value = \"3\">3</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position =\"floating\">From</ion-label>\n            <ion-datetime\n              display-format=\"MMM DD YYYY\"\n              picker-format=\"YY MMM DD\"\n              [min]=\"selectedPlace.availableFrom.toISOString()\"\n              [max]=\"selectedPlace.availableTo.toISOString()\"\n              [ngModel] = \"startDate\"\n              name=\"date-from\"\n              required\n              #startDateCtrl=\"ngModel\"\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"3\">\n          <ion-item>\n            <ion-label position =\"floating\">To</ion-label>\n            <ion-datetime\n              display-format=\"MMM DD YYYY\"\n              picker-format=\"YY MMM DD\"\n              [min]=\"startDateCtrl.value\"\n              [max]=\"selectedPlace.availableTo.toISOString()\"\n              [ngModel] = \"endDate\"\n              name=\"date-to\"\n              required\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button\n            type=\"submit\"\n            color = \"primary\"\n            (click)= \"onBookPlace()\"\n            expand=\"block\"\n            [disabled] = \"!f.valid || !datesValid()\"\n          >Book!</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>\n\nAIzaSyDB7LWmMXn_9g3zv7Ut5ij8CvrU0Uj6tJ4\n");

/***/ }),

/***/ 1043:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/place-detail/place-detail.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"places/tabs/discover\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ isLoading ? 'Loading...' : place.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div text-center *ngIf=\"isLoading\">\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-grid no-padding *ngIf=\"!isLoading\">\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\" no-padding>\n        <ion-img [src]=\"place.imageUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row >\n      <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-text-center\" padding>\n        <p>{{ place.description }}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-text-center\" padding>\n        <p>{{ place.location.address }}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\" no-padding>\n        <ion-img role=\"button\" (click)=\"onShowFullMap()\" class=\"location-image\" [src]=\"place.location.staticMapImageUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row *ngIf=\"isBookable\">\n      <ion-col size-sm=\"6\" offset-sm=\"3\" class= \"ion-text-center\">\n        <ion-button color=\"primary\" class=\"margin\" (click)=\"onBookPlace()\">Book </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_places_discover_place-detail_place-detail_module_ts.js.map