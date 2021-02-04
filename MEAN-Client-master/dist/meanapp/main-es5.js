function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n<header>\n  <div>\n      <h1>Destinations</h1>\n      <a [routerLink]=\"[ '/additem' ]\">Add a New Travel Destination</a>\n      <br>\n      <a [routerLink]=\"[ '/nearbylocations' ]\">See locations near you</a>\n\n  </div>\n\n</header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/destinationdetails/destinationdetails.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/destinationdetails/destinationdetails.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDestinationdetailsDestinationdetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div id=\"main\">\n  <div id=\"details\">\n<h1>{{item.name}}</h1>\n<h4><strong>Description: </strong>{{item.description}}</h4>\n<h4><strong>Costs: </strong>$${{item.amount}}</h4>\n<h4><strong>Latitude: </strong>{{item.latitude}}</h4>\n<h4><strong>Longitude: </strong>{{item.longitude}}</h4>\n</div>\n<div id=\"map\"\nleaflet\n(leafletMapReady)=\"onMapReady($event)\"\n[leafletOptions]=\"mapOptions\">\n</div>\n</div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nearbydestinations/nearbydestinations.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nearbydestinations/nearbydestinations.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNearbydestinationsNearbydestinationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\n\n        <form #locationForm=\"ngForm\" (ngSubmit)=\"submitForm()\">\n          <h2 class=\"transform\">Search for other Locations</h2>\n\n          <div class=\"form-group\">\n            <label>Location/Address</label>\n            <input type=\"text\" name=\"location\" class=\"form-control\" [(ngModel)]=\"location\">\n          </div>\n          <br>\n          <div class=\"form-group\">\n            <label>Number of Results</label>\n            <input type=\"text\" name=\"numberofresults\" class=\"form-control\" [(ngModel)]=\"numberofresults\">\n          </div>\n<br>\n          <button type=\"submit\">Submit form</button>\n\n        </form>\n\n  <div class=\"items\">\n    <div *ngFor=\"let item of distancessliced\">\n      <div class=\"itemsdiv\">\n      <img src=\"{{item.location.image}}\" style=\"width: 90%;\n      margin: 10px;\">\n\n     <div >\n      <h3>{{item.location.name}}</h3>\n      <a [routerLink]=\"[ '/details', item.location._id ]\">More Info</a>\n\n      <a [routerLink]=\"[ '/item', item.location._id ]\">Check/Edit Item</a>\n    </div>\n    </div>\n    </div>\n  </div>\n\n\n</section>\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _destinationdetails_destinationdetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./destinationdetails/destinationdetails.component */
    "./src/app/destinationdetails/destinationdetails.component.ts");
    /* harmony import */


    var _nearbydestinations_nearbydestinations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./nearbydestinations/nearbydestinations.component */
    "./src/app/nearbydestinations/nearbydestinations.component.ts");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | items-items-module */
        "items-items-module").then(__webpack_require__.bind(null,
        /*! ./items/items.module */
        "./src/app/items/items.module.ts")).then(function (m) {
          return m.ItemsModule;
        });
      }
    }, {
      path: 'additem',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | add-item-add-item-module */
        "add-item-add-item-module").then(__webpack_require__.bind(null,
        /*! ./add-item/add-item.module */
        "./src/app/add-item/add-item.module.ts")).then(function (m) {
          return m.AddItemModule;
        });
      }
    }, {
      path: 'item/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | item-item-module */
        "item-item-module").then(__webpack_require__.bind(null,
        /*! ./item/item.module */
        "./src/app/item/item.module.ts")).then(function (m) {
          return m.ItemModule;
        });
      }
    }, {
      path: 'details/:id',
      component: _destinationdetails_destinationdetails_component__WEBPACK_IMPORTED_MODULE_3__["DestinationdetailsComponent"]
    }, {
      path: 'nearbylocations',
      component: _nearbydestinations_nearbydestinations_component__WEBPACK_IMPORTED_MODULE_4__["NearbydestinationsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: "enabled"
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.addItem = true;
      }

      _createClass(AppComponent, [{
        key: "checkUrl",
        value: function checkUrl() {
          var _this = this;

          this.router.events.subscribe(function (x) {
            if (!_this.router.url.indexOf("/additem")) {
              _this.addItem = false;
            } else {
              _this.addItem = true;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkUrl();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @asymmetrik/ngx-leaflet */
    "./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/index.js");
    /* harmony import */


    var _destinationdetails_destinationdetails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./destinationdetails/destinationdetails.component */
    "./src/app/destinationdetails/destinationdetails.component.ts");
    /* harmony import */


    var _nearbydestinations_nearbydestinations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./nearbydestinations/nearbydestinations.component */
    "./src/app/nearbydestinations/nearbydestinations.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _destinationdetails_destinationdetails_component__WEBPACK_IMPORTED_MODULE_8__["DestinationdetailsComponent"], _nearbydestinations_nearbydestinations_component__WEBPACK_IMPORTED_MODULE_9__["NearbydestinationsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__["LeafletModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/destinationdetails/destinationdetails.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/destinationdetails/destinationdetails.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDestinationdetailsDestinationdetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\r\n  height: 400px;\r\n  width:600px;\r\n}\r\n#main{\r\n  margin:30px;\r\n  padding:30px;\r\n  background-color: #d3d3d3;\r\n  border-radius:10px;\r\n  margin-bottom:30px;\r\n  display:flex;\r\n  justify-content: space-between;\r\n  box-shadow:\r\n 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n 0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n 0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n 0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n 0 41.8px 33.4px rgba(0, 0, 0, 0.086),\r\n 0 100px 80px rgba(0, 0, 0, 0.12);\r\n}\r\n#details{\r\n  flex-wrap: wrap;\r\n  margin:30px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzdGluYXRpb25kZXRhaWxzL2Rlc3RpbmF0aW9uZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCOzs7Ozs7aUNBTStCO0FBQ2pDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL2Rlc3RpbmF0aW9uZGV0YWlscy9kZXN0aW5hdGlvbmRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgd2lkdGg6NjAwcHg7XHJcbn1cclxuI21haW57XHJcbiAgbWFyZ2luOjMwcHg7XHJcbiAgcGFkZGluZzozMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XHJcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206MzBweDtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJveC1zaGFkb3c6XHJcbiAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLFxyXG4gMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcclxuIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcclxuIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKSxcclxuIDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KSxcclxuIDAgMTAwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcbiNkZXRhaWxze1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46MzBweDtcclxuXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/destinationdetails/destinationdetails.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/destinationdetails/destinationdetails.component.ts ***!
    \********************************************************************/

  /*! exports provided: DestinationdetailsComponent */

  /***/
  function srcAppDestinationdetailsDestinationdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DestinationdetailsComponent", function () {
      return DestinationdetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../items.service */
    "./src/app/items.service.ts");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);

    var DestinationdetailsComponent = /*#__PURE__*/function () {
      function DestinationdetailsComponent(activatedRoute, itemsService) {
        _classCallCheck(this, DestinationdetailsComponent);

        this.activatedRoute = activatedRoute;
        this.itemsService = itemsService;
        this.idit = this.activatedRoute.snapshot.paramMap.get('id');
      }

      _createClass(DestinationdetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getItem();
        }
      }, {
        key: "onMapReady",
        value: function onMapReady(map) {
          this.map = map;
          this.addSampleMarker();
        }
      }, {
        key: "getItem",
        value: function getItem() {
          var _this2 = this;

          this.itemsService.getItem(this.idit).subscribe(function (item) {
            _this2.item = item["item"];

            _this2.initializeMapOptions(_this2.item);
          });
        }
      }, {
        key: "initializeMapOptions",
        value: function initializeMapOptions(item) {
          console.log("latlng");
          console.log(item.latitude, item.longitude);
          this.latitude = item.latitude;
          this.longitude = item.longitude;
          this.mapOptions = {
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["latLng"])(item.latitude, item.longitude),
            zoom: 12,
            layers: [Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 18,
              attribution: 'Map data © OpenStreetMap contributors'
            })]
          };
        }
      }, {
        key: "addSampleMarker",
        value: function addSampleMarker() {
          console.log("latitude and longitude");
          console.log(this.latitude);
          console.log(this.longitude);
          var marker = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Marker"]([this.latitude, this.longitude]).setIcon(Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"])({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/marker-icon.png'
          }));
          marker.addTo(this.map);
        }
      }]);

      return DestinationdetailsComponent;
    }();

    DestinationdetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _items_service__WEBPACK_IMPORTED_MODULE_3__["ItemsService"]
      }];
    };

    DestinationdetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-destinationdetails',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./destinationdetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/destinationdetails/destinationdetails.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./destinationdetails.component.css */
      "./src/app/destinationdetails/destinationdetails.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _items_service__WEBPACK_IMPORTED_MODULE_3__["ItemsService"]])], DestinationdetailsComponent);
    /***/
  },

  /***/
  "./src/app/items.service.ts":
  /*!**********************************!*\
    !*** ./src/app/items.service.ts ***!
    \**********************************/

  /*! exports provided: ItemsService */

  /***/
  function srcAppItemsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemsService", function () {
      return ItemsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ItemsService = /*#__PURE__*/function () {
      function ItemsService(httpClient) {
        _classCallCheck(this, ItemsService);

        this.httpClient = httpClient;
        this.server = process.env.PORT || "http://localhost:8000/";
      } //get all items


      _createClass(ItemsService, [{
        key: "getItems",
        value: function getItems() {
          //get the items
          return this.httpClient.get(this.server + "items");
        } //post an item

      }, {
        key: "postItem",
        value: function postItem(itemObj) {
          //headers
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
          var obj = {
            name: itemObj["name"],
            image: itemObj["image"],
            description: itemObj["description"],
            amount: itemObj["amount"],
            latitude: itemObj["latitude"],
            longitude: itemObj["longitude"]
          }; //post an item

          return this.httpClient.post(this.server + "items", JSON.stringify(obj), {
            headers: headers
          });
        } //get single item

      }, {
        key: "getItem",
        value: function getItem(itemId) {
          //get the item using the id
          return this.httpClient.get(this.server + "item/" + itemId);
        } //update item

      }, {
        key: "updateItem",
        value: function updateItem(itemId, itemObj) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
          var obj = {
            name: itemObj["name"],
            image: itemObj["image"],
            description: itemObj["description"],
            amount: itemObj["amount"],
            itemId: itemId
          };
          return this.httpClient.put(this.server + "item/" + itemId, JSON.stringify(obj), {
            headers: headers
          });
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(itemId) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
          var obj = {
            id: itemId
          };
          return this.httpClient.request("delete", this.server + "item/" + itemId, {
            headers: headers,
            body: JSON.stringify(obj)
          });
        }
      }]);

      return ItemsService;
    }();

    ItemsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ItemsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ItemsService);
    /***/
  },

  /***/
  "./src/app/nearbydestinations/nearbydestinations.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/nearbydestinations/nearbydestinations.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNearbydestinationsNearbydestinationsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "$ruler: 16px;\r\n$color-red: #AE1100;\r\n$color-bg: #EBECF0;\r\n$color-shadow: #BABECC;\r\n$color-white: #FFF;\r\ndiv, p {\r\n  color: $color-shadow;\r\n  text-shadow: 1px 1px 1px $color-white;\r\n}\r\nform {\r\npadding:30px;\r\n\r\n}\r\n.segment {\r\n  padding: $ruler*2 0;\r\n  text-align: center;\r\n}\r\nbutton, input {\r\n  border: 0;\r\n  outline: 0;\r\n  font-size: $ruler;\r\n  border-radius: $ruler*20;\r\n  padding: $ruler;\r\n  background-color:$color-bg;\r\n  text-shadow: 1px 1px 0 $color-white;\r\n}\r\nlabel {\r\n  display: block;\r\n  margin-bottom: $ruler*1.5;\r\n  width: 100%;\r\n}\r\ninput {\r\n  margin-right: $ruler/2;\r\n  box-shadow:  inset 2px 2px 5px $color-shadow, inset -5px -5px 10px $color-white;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  transition: all 0.2s ease-in-out;\r\n  -moz-appearance: none;\r\n       appearance: none;\r\n  -webkit-appearance: none;\r\n\r\n  &:focus {\r\n    box-shadow:  inset 1px 1px 2px $color-shadow, inset -1px -1px 2px $color-white;\r\n  }\r\n}\r\nbutton {\r\n  color:#61677C;\r\n  font-weight: bold;\r\n  box-shadow: -5px -5px 20px $color-white,  5px 5px 20px $color-shadow;\r\n  transition: all 0.2s ease-in-out;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n\r\n  &:hover {\r\n    box-shadow: -2px -2px 5px $color-white, 2px 2px 5px $color-shadow;\r\n  }\r\n\r\n  &:active {\r\n    box-shadow: inset 1px 1px 2px $color-shadow, inset -1px -1px 2px $color-white;\r\n  }\r\n\r\n  .icon {\r\n    margin-right: $ruler/2;\r\n  }\r\n\r\n  &.unit {\r\n    border-radius: $ruler/2;\r\n    line-height: 0;\r\n    width: $ruler*3;\r\n    height: $ruler*3;\r\n    display:inline-flex;\r\n    justify-content: center;\r\n    align-items:center;\r\n    margin: 0 $ruler/2;\r\n    font-size: $ruler*1.2;\r\n\r\n    .icon {\r\n      margin-right: 0;\r\n    }\r\n  }\r\n\r\n  &.red {\r\n    display: block;\r\n    width: 100%;\r\n    color:$color-red;\r\n  }\r\n}\r\n.input-group {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n\r\n  label {\r\n    margin: 0;\r\n    flex: 1;\r\n  }\r\n}\r\n.items{\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n  }\r\n.itemsdiv{\r\n  width:300px;\r\n  margin:30px;\r\n  padding:30px;\r\n  border-radius:30px;\r\n  box-shadow:\r\n 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n 0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n 0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n 0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n 0 41.8px 33.4px rgba(0, 0, 0, 0.086),\r\n 0 100px 80px rgba(0, 0, 0, 0.12);\r\n\r\n}\r\na{\r\n  margin:10px;\r\n\r\n}\r\nh3{\r\n  margin:10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVhcmJ5ZGVzdGluYXRpb25zL25lYXJieWRlc3RpbmF0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7QUFDWixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFJbEI7RUFDRSxvQkFBb0I7RUFDcEIscUNBQXFDO0FBQ3ZDO0FBR0E7QUFDQSxZQUFZOztBQUVaO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixtQ0FBbUM7QUFDckM7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsK0VBQStFO0VBQy9FLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLHFCQUFnQjtPQUFoQixnQkFBZ0I7RUFDaEIsd0JBQXdCOztFQUV4QjtJQUNFLDhFQUE4RTtFQUNoRjtBQUNGO0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9FQUFvRTtFQUNwRSxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGdCQUFnQjs7RUFFaEI7SUFDRSxpRUFBaUU7RUFDbkU7O0VBRUE7SUFDRSw2RUFBNkU7RUFDL0U7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjs7SUFFckI7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjs7RUFFM0I7SUFDRSxTQUFTO0lBQ1QsT0FBTztFQUNUO0FBQ0Y7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0FBQ0Y7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEI7Ozs7OztpQ0FNK0I7O0FBRWpDO0FBQ0E7RUFDRSxXQUFXOztBQUViO0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9uZWFyYnlkZXN0aW5hdGlvbnMvbmVhcmJ5ZGVzdGluYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcnVsZXI6IDE2cHg7XHJcbiRjb2xvci1yZWQ6ICNBRTExMDA7XHJcbiRjb2xvci1iZzogI0VCRUNGMDtcclxuJGNvbG9yLXNoYWRvdzogI0JBQkVDQztcclxuJGNvbG9yLXdoaXRlOiAjRkZGO1xyXG5cclxuXHJcblxyXG5kaXYsIHAge1xyXG4gIGNvbG9yOiAkY29sb3Itc2hhZG93O1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAkY29sb3Itd2hpdGU7XHJcbn1cclxuXHJcblxyXG5mb3JtIHtcclxucGFkZGluZzozMHB4O1xyXG5cclxufVxyXG5cclxuLnNlZ21lbnQge1xyXG4gIHBhZGRpbmc6ICRydWxlcioyIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24sIGlucHV0IHtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBmb250LXNpemU6ICRydWxlcjtcclxuICBib3JkZXItcmFkaXVzOiAkcnVsZXIqMjA7XHJcbiAgcGFkZGluZzogJHJ1bGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6JGNvbG9yLWJnO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDAgJGNvbG9yLXdoaXRlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogJHJ1bGVyKjEuNTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIG1hcmdpbi1yaWdodDogJHJ1bGVyLzI7XHJcbiAgYm94LXNoYWRvdzogIGluc2V0IDJweCAycHggNXB4ICRjb2xvci1zaGFkb3csIGluc2V0IC01cHggLTVweCAxMHB4ICRjb2xvci13aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6ICBpbnNldCAxcHggMXB4IDJweCAkY29sb3Itc2hhZG93LCBpbnNldCAtMXB4IC0xcHggMnB4ICRjb2xvci13aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgY29sb3I6IzYxNjc3QztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3gtc2hhZG93OiAtNXB4IC01cHggMjBweCAkY29sb3Itd2hpdGUsICA1cHggNXB4IDIwcHggJGNvbG9yLXNoYWRvdztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAtMnB4IC0ycHggNXB4ICRjb2xvci13aGl0ZSwgMnB4IDJweCA1cHggJGNvbG9yLXNoYWRvdztcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4ICRjb2xvci1zaGFkb3csIGluc2V0IC0xcHggLTFweCAycHggJGNvbG9yLXdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAkcnVsZXIvMjtcclxuICB9XHJcblxyXG4gICYudW5pdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6ICRydWxlciozO1xyXG4gICAgaGVpZ2h0OiAkcnVsZXIqMztcclxuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAkcnVsZXIvMjtcclxuICAgIGZvbnQtc2l6ZTogJHJ1bGVyKjEuMjtcclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYucmVkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjokY29sb3ItcmVkO1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLml0ZW1ze1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC13cmFwOndyYXA7XHJcbiAgfVxyXG4uaXRlbXNkaXZ7XHJcbiAgd2lkdGg6MzAwcHg7XHJcbiAgbWFyZ2luOjMwcHg7XHJcbiAgcGFkZGluZzozMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6MzBweDtcclxuICBib3gtc2hhZG93OlxyXG4gMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcclxuIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXHJcbiAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXHJcbiAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksXHJcbiAwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4NiksXHJcbiAwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbn1cclxuYXtcclxuICBtYXJnaW46MTBweDtcclxuXHJcbn1cclxuXHJcbmgze1xyXG4gIG1hcmdpbjoxMHB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nearbydestinations/nearbydestinations.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/nearbydestinations/nearbydestinations.component.ts ***!
    \********************************************************************/

  /*! exports provided: NearbydestinationsComponent */

  /***/
  function srcAppNearbydestinationsNearbydestinationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NearbydestinationsComponent", function () {
      return NearbydestinationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../items.service */
    "./src/app/items.service.ts");

    var NearbydestinationsComponent = /*#__PURE__*/function () {
      function NearbydestinationsComponent(activatedRoute, itemsService) {
        var _this3 = this;

        _classCallCheck(this, NearbydestinationsComponent);

        this.activatedRoute = activatedRoute;
        this.itemsService = itemsService;
        this.distances = [];
        this.distancessliced = [];

        this.submitForm = function () {
          if (_this3.location) {
            _this3.distances = [];
            _this3.distancessliced = [];
            fetch("https://us1.locationiq.com/v1/search.php?key=pk.f0df16ada8a560bbdd0a90118f1291fe&q=".concat(_this3.location, "&format=json")).then(function (response) {
              return response.json();
            }).then(function (data) {
              console.log(data[0]);
              _this3.latitude = parseFloat(data[0].lat);
              _this3.longitude = parseFloat(data[0].lon);

              _this3.getAllItems();
            });
          }

          ;
          _this3.distancessliced = _this3.distances.slice(0, _this3.numberofresults);
        };

        this.showPosition = function (position) {
          _this3.latitude = position.coords.latitude;
          _this3.longitude = position.coords.longitude;
        };

        this.finddistances = function (item) {
          var distance = Math.sqrt(Math.pow(Math.abs(item.latitude * 110.574) - Math.abs(_this3.latitude * 110.574), 2) + Math.pow(Math.abs(item.longitude * 111.320 * Math.cos(item.latitude / Math.PI / 180)) - Math.abs(_this3.longitude * 111.320 * Math.cos(_this3.latitude / Math.PI / 180)), 2));

          _this3.distances.push({
            distance: distance,
            location: item
          });

          _this3.distancessliced.push({
            distance: distance,
            location: item
          });
        };
      }

      _createClass(NearbydestinationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllItems();
          this.getLocation();
          this.numberofresults = 4;
        }
      }, {
        key: "getLocation",
        value: function getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
          }
        }
      }, {
        key: "getAllItems",
        value: function getAllItems() {
          var _this4 = this;

          this.itemsService.getItems().subscribe(function (items) {
            _this4.items = items["data"];

            _this4.items.forEach(_this4.finddistances);

            _this4.distances.sort(function (a, b) {
              return a.distance - b.distance;
            });

            _this4.distancessliced = _this4.distances.slice(0, _this4.numberofresults);
          });
        }
      }]);

      return NearbydestinationsComponent;
    }();

    NearbydestinationsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _items_service__WEBPACK_IMPORTED_MODULE_3__["ItemsService"]
      }];
    };

    NearbydestinationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nearbydestinations',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./nearbydestinations.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nearbydestinations/nearbydestinations.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./nearbydestinations.component.css */
      "./src/app/nearbydestinations/nearbydestinations.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _items_service__WEBPACK_IMPORTED_MODULE_3__["ItemsService"]])], NearbydestinationsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Toshiba\Desktop\simple MEAN apps\Mean-destinations\MEAN-Client-master\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map