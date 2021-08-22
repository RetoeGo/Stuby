(self["webpackChunkionic_app"] = self["webpackChunkionic_app"] || []).push([["src_app_places_offers_new-offer_new-offer_module_ts"],{

/***/ 4021:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource),
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
    CameraSource["Prompt"] = "PROMPT";
    CameraSource["Camera"] = "CAMERA";
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 7673:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource),
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4021);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4028)).then(m => new m.CameraWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1114:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 1091:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 1114);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 3384)).then(m => new m.GeolocationWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8733:
/*!*********************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewOfferPageRoutingModule": () => (/* binding */ NewOfferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _new_offer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-offer.page */ 7687);




const routes = [
    {
        path: '',
        component: _new_offer_page__WEBPACK_IMPORTED_MODULE_0__.NewOfferPage
    }
];
let NewOfferPageRoutingModule = class NewOfferPageRoutingModule {
};
NewOfferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewOfferPageRoutingModule);



/***/ }),

/***/ 4757:
/*!*************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewOfferPageModule": () => (/* binding */ NewOfferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _new_offer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-offer-routing.module */ 8733);
/* harmony import */ var _new_offer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-offer.page */ 7687);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ 4466);








let NewOfferPageModule = class NewOfferPageModule {
};
NewOfferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _new_offer_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewOfferPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_new_offer_page__WEBPACK_IMPORTED_MODULE_1__.NewOfferPage]
    })
], NewOfferPageModule);



/***/ }),

/***/ 7687:
/*!***********************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewOfferPage": () => (/* binding */ NewOfferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_new_offer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./new-offer.page.html */ 7159);
/* harmony import */ var _new_offer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-offer.page.scss */ 1319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../places.service */ 4395);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);








let NewOfferPage = class NewOfferPage {
    constructor(placesService, router, loadingCtrl) {
        this.placesService = placesService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(180)]
            }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]
            }),
            dateFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            }),
            dateTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            }),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required] })
        });
    }
    onLocationPicked(location) {
        this.form.patchValue({ location });
    }
    onImagePicked(imageData) {
    }
    onCreateOffer() {
        if (!this.form.valid) {
            return;
        }
        this.loadingCtrl.create({
            message: 'Create place...'
        }).then(loadingEl => {
            loadingEl.present();
            this.placesService.addPlace(this.form.value.title, this.form.value.description, +this.form.value.price, //string convert door +
            new Date(this.form.value.dateFrom), new Date(this.form.value.dateTo), this.form.value.location).subscribe(() => {
                loadingEl.dismiss();
                this.form.reset();
                this.router.navigateByUrl('/places/tabs/offers');
            });
        });
        console.log(this.form);
    }
};
NewOfferPage.ctorParameters = () => [
    { type: _places_service__WEBPACK_IMPORTED_MODULE_2__.PlacesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
NewOfferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-new-offer',
        template: _raw_loader_new_offer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_new_offer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewOfferPage);



/***/ }),

/***/ 169:
/*!***********************************************************************!*\
  !*** ./src/app/shared/pickers/image-picker/image-picker.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePickerComponent": () => (/* binding */ ImagePickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_image_picker_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./image-picker.component.html */ 4483);
/* harmony import */ var _image_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-picker.component.scss */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 7673);





let ImagePickerComponent = class ImagePickerComponent {
    constructor() {
        //imagePick = string
        this.imagePick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() { }
    onPickImage() {
        if (_capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera) {
            _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                quality: 50,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt,
                correctOrientation: true,
                height: 320,
                width: 200,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.DataUrl
            }).then(image => {
                this.selectedImage = image.dataUrl;
                this.imagePick.emit(image.dataUrl);
            }).catch(error => {
                console.log(error);
                return false;
            });
        }
    }
};
ImagePickerComponent.ctorParameters = () => [];
ImagePickerComponent.propDecorators = {
    imagePick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
ImagePickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-image-picker',
        template: _raw_loader_image_picker_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_image_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ImagePickerComponent);



/***/ }),

/***/ 8042:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationPickerComponent": () => (/* binding */ LocationPickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_location_picker_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./location-picker.component.html */ 9685);
/* harmony import */ var _location_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-picker.component.scss */ 722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../map-modal/map-modal.component */ 1218);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/geolocation */ 1091);











let LocationPickerComponent = class LocationPickerComponent {
    constructor(modalCtrl, http, actionSheetCtrl, alertController) {
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertController = alertController;
        this.locationPick = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.isLoading = false;
    }
    ngOnInit() { }
    onPickLocation() {
        this.actionSheetCtrl.create({
            header: 'Please Choose',
            buttons: [
                { text: 'Auto-Locate', handler: () => {
                        this.locateUser();
                    } },
                { text: 'Pick on Map', handler: () => {
                        this.openMap();
                    } },
                { text: 'Cancel', role: 'cancel' },
            ]
        }).then(actionSheetEl => actionSheetEl.present());
    }
    locateUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!_capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation) {
                this.showErrorAlert();
                return;
            }
            this.isLoading = true;
            /*
            const test = await Geolocation.getCurrentPosition();
            console.log('Current position:', test);
            const coordinates: Coordinates = {
              lat: test.coords.latitude,
              lng: test.coords.longitude
            };
            this.createPlace(coordinates.lat, coordinates.lng);
        
            */
            _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation.getCurrentPosition().then(geoPosition => {
                //this.isLoading = false;
                console.log(geoPosition);
                const coordinates = {
                    lat: geoPosition.coords.latitude,
                    lng: geoPosition.coords.longitude
                };
                this.createPlace(coordinates.lat, coordinates.lng);
                this.isLoading = false;
            }).catch(err => {
                console.log(err);
                this.showErrorAlert();
            });
        });
    }
    createPlace(lat, lng) {
        const pickedLocation = {
            lat,
            lng,
            address: null,
            staticMapImageUrl: null
        };
        this.isLoading = true;
        this.getAddress(lat, lng).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(address => {
            pickedLocation.address = address;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this.getMapImage(pickedLocation.lat, pickedLocation.lng, 14));
        })).subscribe(staticMapImageUrl => {
            pickedLocation.staticMapImageUrl = staticMapImageUrl;
            this.selectedLocationImage = staticMapImageUrl;
            this.locationPick.emit(pickedLocation);
        });
    }
    showErrorAlert() {
        this.alertController.create({
            header: 'Could not fetch location',
            message: 'Please use the map to pick a location!',
            buttons: ['Okay']
        }).then(alertEl => { alertEl.present(); this.isLoading = false; });
    }
    openMap() {
        this.modalCtrl.create({
            component: _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_2__.MapModalComponent
        }).then(modalEl => {
            modalEl.onDidDismiss().then(modalData => {
                if (!modalData.data) {
                    return;
                }
                const coordinates = {
                    lat: modalData.data.lat,
                    lng: modalData.data.lng
                };
                this.createPlace(coordinates.lat, coordinates.lng);
            });
            modalEl.present();
        });
    }
    getAddress(lat, lng) {
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.googleMapsAPIKey}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(geoData => {
            if (!geoData || !geoData.results || geoData.results.length === 0) {
                return null;
            }
            return geoData.results[0].formatted_address;
        }));
    }
    getMapImage(lat, lng, zoom) {
        return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=500x300&maptype=roadmap
    &markers=color:red%7Clabel:Place%7C${lat},${lng}
    &key=${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.googleMapsAPIKey}`;
    }
};
LocationPickerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController }
];
LocationPickerComponent.propDecorators = {
    locationPick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
LocationPickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-location-picker',
        template: _raw_loader_location_picker_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_location_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LocationPickerComponent);



/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pickers/location-picker/location-picker.component */ 8042);
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-modal/map-modal.component */ 1218);
/* harmony import */ var _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pickers/image-picker/image-picker.component */ 169);







let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_0__.LocationPickerComponent, _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_1__.MapModalComponent, _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_2__.ImagePickerComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule],
        exports: [_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_0__.LocationPickerComponent, _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_1__.MapModalComponent, _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_2__.ImagePickerComponent],
        entryComponents: [_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_1__.MapModalComponent]
    })
], SharedModule);



/***/ }),

/***/ 1319:
/*!*************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctb2ZmZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 8418:
/*!*************************************************************************!*\
  !*** ./src/app/shared/pickers/image-picker/image-picker.component.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS1waWNrZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 722:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.location-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.select {\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQUFGIiwiZmlsZSI6ImxvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWNrZXIge1xuICB3aWR0aDogMzByZW07XG4gIG1heC13aWR0aDogODAlO1xuICBoZWlnaHQ6IDIwcmVtO1xuICBtYXgtaGVpZ2h0OiAzMHZoO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2NhdGlvbi1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uc2VsZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgb3BhY2l0eTogMC42O1xufVxuIl19 */");

/***/ }),

/***/ 7159:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/offers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>New Offer</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)= \"onCreateOffer()\" [disabled]= \"!form.valid\">\n      <ion-icon name=\"checkmark\" slot= \"icon-only\"></ion-icon>\n    </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]= \"form\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm = \"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input\n              type=\"text\"\n              autocomplete\n              autocorrect\n              formControlName=\"title\"\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Short Description</ion-label>\n            <ion-textarea rows =\"3\" formControlName=\"description\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf = \"!form.get('description').valid && form.get('description').touched\">\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <p>Description must not be between 1 and 180 characters</p>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm = \"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Price</ion-label>\n            <ion-input type=\"number\" formControlName=\"price\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm = \"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Available from</ion-label>\n            <ion-datetime min = \"2019-01-01\" max= \"2022-12-31\" formControlName=\"dateFrom\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm = \"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Available to</ion-label>\n            <ion-datetime min = \"2019-01-02\" max= \"2022-12-31\" formControlName=\"dateTo\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm = \"3\" offset-sm=\"3\">\n          <app-location-picker (locationPick)=\"onLocationPicked($event)\"></app-location-picker>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm = \"3\" offset-sm=\"3\">\n          <app-image-picker (imagePick)=\"onImagePicked($event)\"></app-image-picker>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ 4483:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pickers/image-picker/image-picker.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"picker\">\n  <ion-img\n    role=\"button\"\n    class=\"image\"\n    (click)=\"onPickImage()\"\n    [src]=\"selectedImage\"\n    *ngIf=\"selectedImage\"\n  ></ion-img>\n  <ion-button\n    color=\"primary\"\n    (click)=\"onPickImage()\"\n    *ngIf=\"!selectedImage\"\n  >\n    <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n    <ion-label>Take Picture</ion-label>\n  </ion-button>\n</div>\n");

/***/ }),

/***/ 9685:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pickers/location-picker/location-picker.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"picker\">\n  <ion-spinner color=\"primary\" *ngIf=\"isLoading\"></ion-spinner>\n  <ion-img\n    role=\"button\"\n    class=\"location-image\"\n    (click)=\"onPickLocation()\"\n    [src]=\"selectedLocationImage\"\n    *ngIf=\"selectedLocationImage && !isLoading\"\n  ></ion-img>\n  <div class=\"select\" *ngIf=\"selectedLocationImage && !isLoading\">Select Location</div>\n  <ion-button\n    color=\"primary\"\n    (click)=\"onPickLocation()\"\n    *ngIf=\"!selectedLocationImage && !isLoading\"\n  >\n    <ion-icon name=\"map\" slot=\"start\"></ion-icon>\n    <ion-label>Select Location</ion-label>\n  </ion-button>\n</div>\n\n<!--\n\n<div class=\"picker\">\n  <ion-spinner color = \"primary\" *ngIf=\"isLoading\"></ion-spinner>\n  <ion-image\n\n</div>\n\n\n<div class=\"picker\">\n  <ion-spinner color = \"primary\" *ngIf=\"isLoading\"></ion-spinner>\n  <input class=\"location-image\" type = 'image' [src]=\"selectedLocationImage\" width='25' height='25' (click)=\"onPickLocation()\" *ngIf=\"selectedLocationImage && !isLoading\"/>\n  <div class=\"select\" *ngIf=\"selectedLocationImage && !isLoading\">Select Location</div>\n  <ion-button\n  color=\"primary\"\n  (click)=\"onPickLocation()\"\n  *ngIf=\"!selectedLocationImage && !isLoading\"\n  >\n    <ion-icon name=\"map\" slot=\"start\"></ion-icon>\n    <ion-label>\n      Select Location\n    </ion-label>\n  </ion-button>\n\n</div>\n-->\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_places_offers_new-offer_new-offer_module_ts.js.map