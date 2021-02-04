(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-item-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"back\" routerLink='/'><i class=\"fas fa-arrow-left\"></i></a>\n<section class=\"updateitemsection\">\n\n  <form (ngSubmit)=\"updateItem(updateItemForm.value)\" [formGroup]=\"updateItemForm\">\n\n    <h2>Update Product Form</h2>\n    <p>Change the form values to update the current item in the store.</p>\n\n   <div class=\"formcontrol\">\n    <label for=\"name\">Product Name:</label>\n    <input type=\"text\" formControlName=\"name\">\n  </div>\n\n  <div class=\"formcontrol\">\n    <label for=\"description\">Product Description:</label>\n    <textarea formControlName=\"description\"></textarea>\n  </div>\n  <div class=\"formcontrol\">\n      <label for=\"image\"> Product Image: </label>\n      <input type=\"url\" name=\"image\" formControlName=\"image\">\n  </div>\n  <div class=\"formcontrol\">\n      <label for=\"amount\"> Product Price Per Item: </label>\n      <input type=\"number\" name=\"amount\" formControlName=\"amount\">\n  </div>\n  <div class=\"formcontrol\">\n      <label for=\"latitude\"> Latitude: </label>\n      <input type=\"number\" name=\"amount\" formControlName=\"latitude\">\n  </div>\n  <div class=\"formcontrol\">\n      <label for=\"longitude\"> Longitude: </label>\n      <input type=\"number\" name=\"amount\" formControlName=\"longitude\">\n  </div>\n    <input type=\"submit\" [disabled]=\"!updateItemForm.valid\" value=\"Submit\">\n  </form>\n\n\n  <div class=\"previewsection\">\n    <button (click)=\"deleteItem(item._id)\">Delete this item</button>\n\n    <h2>Product Preview</h2>\n\n    <div>\n      <p>Product Image:</p>\n      <div *ngIf=\"item\">\n        <img class=\"image\" [src]=\"item.image\" alt=\"image placeholder\" />\n      </div>\n    </div>\n    <div>\n      <p>Product price: <span>{{amount}}</span></p>\n    </div>\n    <div>\n      <p>Product Name: <span>{{name}}</span></p>\n      <p>Product description: <span>{{description}}</span></p>\n      <p>Latitude: <span>{{latitude}}</span></p>\n      <p>Longiude: <span>{{longitude}}</span></p>\n\n    </div>\n\n\n  </div>\n</section>\n");

/***/ }),

/***/ "./src/app/item/item-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/item/item-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ItemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRoutingModule", function() { return ItemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item.component */ "./src/app/item/item.component.ts");




const routes = [
    { path: '', component: _item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"] },
];
let ItemRoutingModule = class ItemRoutingModule {
};
ItemRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ItemRoutingModule);



/***/ }),

/***/ "./src/app/item/item.component.css":
/*!*****************************************!*\
  !*** ./src/app/item/item.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");





let ItemComponent = class ItemComponent {
    constructor(route, itemsService, router) {
        this.route = route;
        this.itemsService = itemsService;
        this.router = router;
        //get the id passed on the url
        this.itemId = this.route.snapshot.paramMap.get("id");
        this.updateItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    updateItem(formData) {
        let confirmSubmit = confirm("Are you sure you want to update this item?");
        console.log(formData);
        if (confirmSubmit) {
            console.log("you clicked yes");
            this.itemsService.updateItem(this.itemId, formData).subscribe(data => {
                console.log(data);
                //refresh the current page
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(["item", this.itemId]));
            });
        }
        else {
            console.log("you clicked NO");
            return false;
        }
    }
    getItem() {
        this.itemsService.getItem(this.itemId).subscribe(item => {
            this.item = item["item"];
            this.updateItemForm.setValue({
                name: item["item"]["name"],
                description: item["item"]["description"],
                amount: item["item"]["amount"],
                image: item["item"]["image"]
            });
        });
    }
    onFormChanges(values) {
        this.name = values.name;
        this.amount = values.amount;
        this.description = values.description;
        this.image = values.image;
    }
    deleteItem(itemId) {
        this.itemsService.deleteItem(itemId).subscribe(data => {
            console.log(data);
            this.router.navigate(["/"]);
        });
    }
    ngOnInit() {
        this.getItem();
        this.updateItemForm.valueChanges.subscribe(values => {
            console.log(values);
            this.onFormChanges(values);
        });
    }
};
ItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item.component.css */ "./src/app/item/item.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ItemComponent);



/***/ }),

/***/ "./src/app/item/item.module.ts":
/*!*************************************!*\
  !*** ./src/app/item/item.module.ts ***!
  \*************************************/
/*! exports provided: ItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemModule", function() { return ItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _item_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-routing.module */ "./src/app/item/item-routing.module.ts");
/* harmony import */ var _item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





//need to import ReactiveForms module here too

let ItemModule = class ItemModule {
};
ItemModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _item_routing_module__WEBPACK_IMPORTED_MODULE_3__["ItemRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [_item_component__WEBPACK_IMPORTED_MODULE_4__["ItemComponent"]]
    })
], ItemModule);



/***/ })

}]);
//# sourceMappingURL=item-item-module-es2015.js.map