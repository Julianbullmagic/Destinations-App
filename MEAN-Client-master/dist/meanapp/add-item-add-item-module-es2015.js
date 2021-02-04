(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-item-add-item-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"back\" routerLink='/'><i class=\"fas fa-arrow-left\"></i></a>\n<section class=\"additemsection\">\n\n  <form (ngSubmit)=\"addItem(itemsForm.value)\" [formGroup]=\"itemsForm\">\n\n    <h2>Product Form</h2>\n    <p>Fill the form to add a new item to the store.</p>\n\n   <div class=\"formcontrol\">\n    <label for=\"name\">Destination Name:</label>\n    <input type=\"text\" formControlName=\"name\">\n  </div>\n\n  <div class=\"formcontrol\">\n    <label for=\"description\">Description:</label>\n    <textarea formControlName=\"description\"></textarea>\n  </div>\n  <div class=\"formcontrol\">\n      <label for=\"image\">Image: </label>\n      <input type=\"url\" name=\"image\" formControlName=\"image\">\n  </div>\n  <div class=\"formcontrol\">\n      <label for=\"amount\"> Costs: </label>\n      <input type=\"number\" name=\"amount\" formControlName=\"amount\">\n  </div>\n  <div class=\"formcontrol\">\n      <label for=\"latitude\">Latitude</label>\n      <input type=\"number\" name=\"latitude\" formControlName=\"latitude\">\n  </div>\n  <div class=\"formcontrol\">\n      <label for=\"latitude\">Longitude</label>\n      <input type=\"number\" name=\"longitude\" formControlName=\"longitude\">\n  </div>\n    <input type=\"submit\" [disabled]=\"!itemsForm.valid\" value=\"Submit\">\n  </form>\n\n\n  <div class=\"previewsection\">\n    <h2>Product Preview</h2>\n\n    <div>\n      <p>Product Image:</p>\n      <div *ngIf=\"image && image.startsWith('https://'); else showPlaceholder\">\n        <p>In case you cant see a preview, check the url links to an image: </p>\n        <img class=\"image\"  [src]=image alt=\"product preview image\" />\n      </div>\n      <ng-template #showPlaceholder>\n        <img class=\"image\" src=\"../../assets/images.png\" alt=\"image placeholder\" />\n      </ng-template>\n\n    </div>\n    <div>\n      <p>Product price: <span>${{amount}}</span></p>\n    </div>\n    <div>\n      <p>Product Name: <span>{{name}}</span></p>\n      <p>Product description: <span>{{description}}</span></p>\n      <p>Latitude: <span>{{latitude}}</span></p>\n      <p>Longitude: <span>{{longitude}}</span></p>\n\n\n    </div>\n\n\n  </div>\n</section>\n");

/***/ }),

/***/ "./src/app/add-item/add-item-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-item/add-item-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddItemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemRoutingModule", function() { return AddItemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-item.component */ "./src/app/add-item/add-item.component.ts");




const routes = [
    { path: '', component: _add_item_component__WEBPACK_IMPORTED_MODULE_3__["AddItemComponent"] },
];
let AddItemRoutingModule = class AddItemRoutingModule {
};
AddItemRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddItemRoutingModule);



/***/ }),

/***/ "./src/app/add-item/add-item.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-item/add-item.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1pdGVtL2FkZC1pdGVtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/add-item/add-item.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-item/add-item.component.ts ***!
  \************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let AddItemComponent = class AddItemComponent {
    constructor(itemsService, router) {
        this.itemsService = itemsService;
        this.router = router;
        this.itemsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    //set the values when the form changes
    onFormChanges(values) {
        this.name = values.name;
        this.amount = values.amount;
        this.description = values.description;
        this.image = values.image;
        this.latitude = values.latitude;
        this.longitude = values.longitude;
    }
    addItem(formData) {
        this.itemsService.postItem(formData).subscribe(res => {
            console.log(res);
            this.router.navigate(["/"]);
        });
    }
    ngOnInit() {
        this.itemsForm.valueChanges.subscribe(values => {
            console.log(values);
            this.onFormChanges(values);
        });
    }
};
AddItemComponent.ctorParameters = () => [
    { type: _items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AddItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-item.component.css */ "./src/app/add-item/add-item.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AddItemComponent);



/***/ }),

/***/ "./src/app/add-item/add-item.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-item/add-item.module.ts ***!
  \*********************************************/
/*! exports provided: AddItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemModule", function() { return AddItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_item_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-item-routing.module */ "./src/app/add-item/add-item-routing.module.ts");
/* harmony import */ var _add_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-item.component */ "./src/app/add-item/add-item.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





//need to import ReactiveForms module here too

let AddItemModule = class AddItemModule {
};
AddItemModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _add_item_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddItemRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [_add_item_component__WEBPACK_IMPORTED_MODULE_4__["AddItemComponent"]]
    })
], AddItemModule);



/***/ })

}]);
//# sourceMappingURL=add-item-add-item-module-es2015.js.map