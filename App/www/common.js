(self["webpackChunkionic_app"] = self["webpackChunkionic_app"] || []).push([["common"],{

/***/ 6633:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 3150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 2954);
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ 7279);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 7330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 2377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 2954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 1269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 5528:
/*!*******************************************!*\
  !*** ./src/app/bookings/booking.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Booking": () => (/* binding */ Booking)
/* harmony export */ });
class Booking {
    constructor(id, placeId, userId, placeTitle, placeImage, firstName, lastName, guestNumber, bookedFrom, bookedTo) {
        this.id = id;
        this.placeId = placeId;
        this.userId = userId;
        this.placeTitle = placeTitle;
        this.placeImage = placeImage;
        this.firstName = firstName;
        this.lastName = lastName;
        this.guestNumber = guestNumber;
        this.bookedFrom = bookedFrom;
        this.bookedTo = bookedTo;
    }
}


/***/ }),

/***/ 1398:
/*!**********************************************!*\
  !*** ./src/app/bookings/bookings.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsService": () => (/* binding */ BookingsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _booking_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking.model */ 5528);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);







let BookingsService = class BookingsService {
    constructor(authService, http) {
        this.authService = authService;
        this.http = http;
        this.theBookings = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    get bookings() {
        return this.theBookings.asObservable();
    }
    addBooking(placeId, placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo) {
        console.log('test');
        let generatedId;
        const newBooking = new _booking_model__WEBPACK_IMPORTED_MODULE_0__.Booking(Math.random().toString(), placeId, this.authService.userId, placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo);
        return this.http.post('https://retoe-1-default-rtdb.europe-west1.firebasedatabase.app/bookings.json', Object.assign(Object.assign({}, newBooking), { id: null })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(resData => {
            generatedId = resData.name;
            return this.bookings;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(bookings => {
            newBooking.id = generatedId;
            this.theBookings.next(bookings.concat(newBooking));
        }));
        /*
              console.log(newBooking);
              return this.bookings.pipe(
                take(1),
                delay(1000),
                tap(bookings=> {
                  this.theBookings.next(bookings.concat(newBooking));
                })
              );
              */
    }
    cancelBooking(bookingId) {
        //todo
        return this.http.delete(`https://retoe-1-default-rtdb.europe-west1.firebasedatabase.app/bookings/${bookingId}.json?`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.bookings), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(bookings => this.theBookings.next(bookings.filter(b => b.id !== bookingId))));
    }
    fetchBookings() {
        return this.http.get(`https://retoe-1-default-rtdb.europe-west1.firebasedatabase.app/bookings.json?orderBy="userId"&equalTo="${this.authService.userId}"`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(bookingData => {
            const bookings = [];
            for (const key in bookingData) {
                if (bookingData.hasOwnProperty(key)) {
                    bookings.push(new _booking_model__WEBPACK_IMPORTED_MODULE_0__.Booking(key, bookingData[key].placeId, bookingData[key].userId, bookingData[key].placeTitle, bookingData[key].placeImage, bookingData[key].firstName, bookingData[key].lastName, bookingData[key].guestNumber, new Date(bookingData[key].bookedFrom), new Date(bookingData[key].bookedTo)));
                }
            }
            return bookings;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(bookings => {
            this.theBookings.next(bookings);
        }));
    }
};
BookingsService.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient }
];
BookingsService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({ providedIn: 'root' })
], BookingsService);



/***/ }),

/***/ 3972:
/*!***************************************!*\
  !*** ./src/app/places/place.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Place": () => (/* binding */ Place)
/* harmony export */ });
class Place {
    constructor(id, title, description, imageUrl, price, availableFrom, availableTo, userId, location) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.availableFrom = availableFrom;
        this.availableTo = availableTo;
        this.userId = userId;
        this.location = location;
    }
}


/***/ }),

/***/ 4395:
/*!******************************************!*\
  !*** ./src/app/places/places.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacesService": () => (/* binding */ PlacesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _place_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place.model */ 3972);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1841);







let PlacesService = class PlacesService {
    constructor(authservice, http) {
        this.authservice = authservice;
        this.http = http;
        this.thePlaces = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    get places() {
        return this.thePlaces.asObservable();
    }
    fetchPlaces() {
        return this.http
            .get('https://retoe-1-default-rtdb.europe-west1.firebasedatabase.app/offered-places.json')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(resData => {
            const places = [];
            for (const key in resData) {
                if (resData.hasOwnProperty(key)) {
                    places.push(new _place_model__WEBPACK_IMPORTED_MODULE_0__.Place(key, resData[key].title, resData[key].description, resData[key].imageUrl, resData[key].price, new Date(resData[key].availableFrom), new Date(resData[key].availableTo), resData[key].userId, resData[key].location));
                }
            }
            return places;
            //return [];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(places => {
            this.thePlaces.next(places);
        }));
    }
    getPlace(id) {
        return this.http.get(`https://retoe-1-default-rtdb.europe-west1.firebasedatabase.app/offered-places/${id}.json`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(placeData => new _place_model__WEBPACK_IMPORTED_MODULE_0__.Place(id, placeData.title, placeData.description, placeData.imageUrl, placeData.price, new Date(placeData.availableFrom), new Date(placeData.availableTo), placeData.userId, placeData.location)));
    }
    /*
        this.places.pipe(
          take(1),
          map(places => Object.assign({},places.find(p => p.id === id)))
        );
        //map( (places: any) => [...places.find(p => p.id === id)])
      }
    */
    addPlace(title, description, price, dateFrom, dateTo, location) {
        let generatedId;
        const newPlace = new _place_model__WEBPACK_IMPORTED_MODULE_0__.Place(Math.random().toString(), title, description, 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg', price, dateFrom, dateTo, this.authservice.userId, location);
        return this.http
            .post('https://retoe-1-default-rtdb.europe-west1.firebasedatabase.app/offered-places.json', Object.assign(Object.assign({}, newPlace), { id: null }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(resData => {
            generatedId = resData.name;
            return this.places;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(places => {
            newPlace.id = generatedId;
            this.thePlaces.next(places.concat(newPlace));
        }));
        // return this.places
        // .pipe(take(1),
        //   delay(1000),
        // );
        // console.log(this.thePlaces);
    }
    updatePlace(placeId, title, description) {
        let updatedPlaces;
        return this.places.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(places => {
            if (!places || places.length <= 0) {
                return this.fetchPlaces();
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(places);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(places => {
            const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
            updatedPlaces = [...places];
            const oldPlace = updatedPlaces[updatedPlaceIndex];
            updatedPlaces[updatedPlaceIndex] = new _place_model__WEBPACK_IMPORTED_MODULE_0__.Place(oldPlace.id, title, description, oldPlace.imageUrl, oldPlace.price, oldPlace.availableFrom, oldPlace.availableTo, oldPlace.userId, oldPlace.location);
            return this.http.put(`https://retoe-1-default-rtdb.europe-west1.firebasedatabase.app/offered-places/${placeId}.json`, Object.assign(Object.assign({}, updatedPlaces[updatedPlaceIndex]), { id: null }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
            this.thePlaces.next(updatedPlaces);
        }));
    }
};
PlacesService.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient }
];
PlacesService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
        providedIn: 'root'
    })
], PlacesService);

/*

      )
      return this.places.pipe(
        take(1),
        delay(1000),
        tap (places => {
        const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
        const updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex];
        updatedPlaces[updatedPlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imageUrl,
          oldPlace.price,
          oldPlace.availableFrom,
          oldPlace.availableTo,
          oldPlace.userId
        );

      }));
  }
}
*/


/***/ }),

/***/ 1218:
/*!*********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapModalComponent": () => (/* binding */ MapModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_map_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./map-modal.component.html */ 8091);
/* harmony import */ var _map_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-modal.component.scss */ 7054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 2340);






let MapModalComponent = class MapModalComponent {
    constructor(modalCtrl, renderer) {
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.center = { lat: -34.397, lng: 150.644 };
        this.selectable = true;
        this.closeButtonText = 'Cancel';
        this.title = 'Pick Location';
    }
    ngOnInit() {
        //this.modalCtrl.dismiss();
    }
    ngAfterViewInit() {
        console.log('test 5');
        this.getGoogleMaps().then(googleMaps => {
            this.googleMaps = googleMaps;
            const mapEl = this.mapElementRef.nativeElement;
            const map = new googleMaps.Map(mapEl, {
                center: this.center,
                zoom: 16
            });
            this.googleMaps.event.addListenerOnce(map, 'idle', () => {
                this.renderer.addClass(mapEl, 'visible');
            });
            if (this.selectable) {
                this.clickListener = map.addListener('click', event => {
                    const selectedCoords = {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng()
                    };
                    this.modalCtrl.dismiss(selectedCoords);
                });
            }
            else {
                const marker = new googleMaps.marker({
                    position: this.center,
                    map,
                    title: 'Picked Location'
                });
                marker.setMap(map);
            }
        })
            .catch(err => {
            console.log(err);
            console.log('test 6');
            console.log(err);
            console.error('test');
        });
    }
    onCancel() {
        this.modalCtrl.dismiss();
    }
    ngOnDestroy() {
        if (this.clickListener) {
            this.googleMaps.event.removeListener(this.clickListener);
        }
    }
    getGoogleMaps() {
        const win = window;
        const googleModule = win.google;
        console.log('test 4');
        if (googleModule && googleModule.maps) {
            console.log('test 3');
            return Promise.resolve(googleModule.maps);
        }
        console.log('test 7');
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.googleMapsAPIKey}`;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script); // append child not more than 1 element child
            console.log('test 8');
            script.onload = () => {
                const loadedGoogleModule = win.google;
                if (loadedGoogleModule && loadedGoogleModule.maps) {
                    console.log('test 2');
                    resolve(loadedGoogleModule.maps);
                }
                else {
                    console.log('test 1');
                    reject('Google maps SDK not available.');
                }
            };
        });
    }
};
MapModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2 }
];
MapModalComponent.propDecorators = {
    mapElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['map',] }],
    center: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    closeButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
MapModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-map-modal',
        template: _raw_loader_map_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_map_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapModalComponent);



/***/ }),

/***/ 7054:
/*!***********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".map {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n\n.map.visible {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSw2QkFBQTtFQUVBLFVBQUE7RUFDQSxpQ0FBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtBQURGIiwiZmlsZSI6Im1hcC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xufVxuXG4ubWFwLnZpc2libGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4iXX0= */");

/***/ }),

/***/ 8091:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/map-modal/map-modal.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ title }}\n    </ion-title>\n    <ion-buttons slot=\"primary\">\n    <ion-button (click)=\"onCancel()\">\n      <ion-icon name=\"close-outline\" slot= \"icon-only\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"map\" #map> </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=common.js.map