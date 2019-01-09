(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/user/user.component */ "./src/app/routes/user/user.component.ts");
/* harmony import */ var _routes_user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/user/user-add/user-add.component */ "./src/app/routes/user/user-add/user-add.component.ts");
/* harmony import */ var _routes_user_pay_add_pay_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/user/pay-add/pay-add.component */ "./src/app/routes/user/pay-add/pay-add.component.ts");
/* harmony import */ var _routes_goods_goods_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/goods/goods.component */ "./src/app/routes/goods/goods.component.ts");
/* harmony import */ var _routes_goods_good_add_good_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/goods/good-add/good-add.component */ "./src/app/routes/goods/good-add/good-add.component.ts");
/* harmony import */ var _routes_goods_good_change_good_change_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/goods/good-change/good-change.component */ "./src/app/routes/goods/good-change/good-change.component.ts");
/* harmony import */ var _routes_goods_good_category_good_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/goods/good-category/good-category.component */ "./src/app/routes/goods/good-category/good-category.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: _routes_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        children: [
            {
                path: '',
                redirectTo: 'pay-add',
                pathMatch: 'full'
            },
            {
                path: 'user-add',
                component: _routes_user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_3__["UserAddComponent"]
            },
            {
                path: 'pay-add',
                component: _routes_user_pay_add_pay_add_component__WEBPACK_IMPORTED_MODULE_4__["PayAddComponent"]
            }
        ]
    },
    {
        path: 'goods',
        component: _routes_goods_goods_component__WEBPACK_IMPORTED_MODULE_5__["GoodsComponent"],
        children: [
            {
                path: '',
                redirectTo: 'good-add',
                pathMatch: 'full'
            },
            {
                path: 'good-add',
                component: _routes_goods_good_add_good_add_component__WEBPACK_IMPORTED_MODULE_6__["GoodAddComponent"]
            },
            {
                path: 'good-change',
                component: _routes_goods_good_change_good_change_component__WEBPACK_IMPORTED_MODULE_7__["GoodChangeComponent"]
            },
            {
                path: 'good-category',
                component: _routes_goods_good_category_good_category_component__WEBPACK_IMPORTED_MODULE_8__["GoodCategoryComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- NG-ZORRO -->\n<nz-layout class=\"m-page\">\n  <nz-sider class=\"m-side\">\n    <app-side></app-side>\n  </nz-sider>\n  <router-outlet></router-outlet>\n</nz-layout>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-page {\n  width: 100%;\n  height: 100%; }\n  .m-page .m-side {\n    background-color: #fff; }\n  .m-page .m-cont {\n    flex: 1; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'userSystem';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
/* harmony import */ var _components_side_side_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/side/side.component */ "./src/app/components/side/side.component.ts");
/* harmony import */ var _components_head_head_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/head/head.component */ "./src/app/components/head/head.component.ts");
/* harmony import */ var _routes_user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/user/user.component */ "./src/app/routes/user/user.component.ts");
/* harmony import */ var _routes_user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/user/user-add/user-add.component */ "./src/app/routes/user/user-add/user-add.component.ts");
/* harmony import */ var _routes_user_pay_add_pay_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/user/pay-add/pay-add.component */ "./src/app/routes/user/pay-add/pay-add.component.ts");
/* harmony import */ var _routes_goods_goods_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/goods/goods.component */ "./src/app/routes/goods/goods.component.ts");
/* harmony import */ var _routes_goods_good_add_good_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes/goods/good-add/good-add.component */ "./src/app/routes/goods/good-add/good-add.component.ts");
/* harmony import */ var _routes_goods_good_change_good_change_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes/goods/good-change/good-change.component */ "./src/app/routes/goods/good-change/good-change.component.ts");
/* harmony import */ var _routes_goods_good_category_good_category_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes/goods/good-category/good-category.component */ "./src/app/routes/goods/good-category/good-category.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var icons = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["MailOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["UserAddOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["PayCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["UserOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["BarcodeOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["DashboardOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["PhoneOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["HomeOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["HddOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["ToolOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["BranchesOutline"]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_side_side_component__WEBPACK_IMPORTED_MODULE_9__["SideComponent"],
                _components_head_head_component__WEBPACK_IMPORTED_MODULE_10__["HeadComponent"],
                _routes_user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
                _routes_user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_12__["UserAddComponent"],
                _routes_user_pay_add_pay_add_component__WEBPACK_IMPORTED_MODULE_13__["PayAddComponent"],
                _routes_goods_goods_component__WEBPACK_IMPORTED_MODULE_14__["GoodsComponent"],
                _routes_goods_good_add_good_add_component__WEBPACK_IMPORTED_MODULE_15__["GoodAddComponent"],
                _routes_goods_good_change_good_change_component__WEBPACK_IMPORTED_MODULE_16__["GoodChangeComponent"],
                _routes_goods_good_category_good_category_component__WEBPACK_IMPORTED_MODULE_17__["GoodCategoryComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ],
            providers: [
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NZ_ICONS"], useValue: icons }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/head/head.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/head/head.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{page}}\n</p>\n"

/***/ }),

/***/ "./src/app/components/head/head.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/head/head.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/head/head.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/head/head.component.ts ***!
  \***************************************************/
/*! exports provided: HeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadComponent", function() { return HeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadComponent = /** @class */ (function () {
    function HeadComponent() {
    }
    HeadComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('page'),
        __metadata("design:type", String)
    ], HeadComponent.prototype, "page", void 0);
    HeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-head',
            template: __webpack_require__(/*! ./head.component.html */ "./src/app/components/head/head.component.html"),
            styles: [__webpack_require__(/*! ./head.component.scss */ "./src/app/components/head/head.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeadComponent);
    return HeadComponent;
}());



/***/ }),

/***/ "./src/app/components/side/side.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/side/side.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"s-menu\" nz-menu>\n  <li *ngFor=\"let item of menu; index as i\" nz-menu-item [routerLink]=\"item.link\" [nzSelected]=\"i == selected\">\n    <i nz-icon [type]=\"item.icon\" theme=\"outline\"></i>\n    {{item.title}}\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/side/side.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/side/side.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".s-menu {\n  text-align: center; }\n  .s-menu li {\n    outline: none; }\n"

/***/ }),

/***/ "./src/app/components/side/side.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/side/side.component.ts ***!
  \***************************************************/
/*! exports provided: SideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideComponent", function() { return SideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideComponent = /** @class */ (function () {
    function SideComponent(router) {
        var _this = this;
        this.menu = [
            { link: '/index', icon: 'user', title: '用户管理' },
            { link: '/goods', icon: 'barcode', title: '商品管理' },
            { link: '/goods', icon: 'dashboard', title: '数据分析' },
        ];
        this.selected = 0;
        router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                for (var i = 0; i < _this.menu.length; i++) {
                    var reg = new RegExp(_this.menu[i].link);
                    if (reg.test(e.url)) {
                        _this.selected = i;
                        break;
                    }
                }
            }
        });
    }
    SideComponent.prototype.ngOnInit = function () {
    };
    SideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side',
            template: __webpack_require__(/*! ./side.component.html */ "./src/app/components/side/side.component.html"),
            styles: [__webpack_require__(/*! ./side.component.scss */ "./src/app/components/side/side.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SideComponent);
    return SideComponent;
}());



/***/ }),

/***/ "./src/app/routes/goods/good-add/good-add.component.html":
/*!***************************************************************!*\
  !*** ./src/app/routes/goods/good-add/good-add.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ga-page\">\n  <h3 class=\"header\">添加商品</h3>\n  <!-- 商品名称 类别 进价 售价 -->\n  <div class=\"control\">\n    <nz-input-group nzAddOnBefore=\"商品名称: \" nzSize=\"large\">\n      <input type=\"text\" nz-input placeholder=\"请输入商品名称\">\n    </nz-input-group>\n\n    <nz-input-group nzAddOnBefore=\"商品类别: \" nzSize=\"large\">\n      <nz-select nzAllowClear nzPlaceHolder=\"选择商品类别\" style=\"display: block;\" nzSize=\"large\">\n        <nz-option nzValue=\"jack\" nzLabel=\"Jack\"></nz-option>\n        <nz-option nzValue=\"lucy\" nzLabel=\"Lucy\"></nz-option>\n      </nz-select>\n    </nz-input-group>\n\n    <nz-input-group nzAddOnBefore=\"商品进价: \" nzSize=\"large\" nzAddOnAfter=\"元\">\n      <input type=\"number\" nz-input placeholder=\"请输入商品进价\">\n    </nz-input-group>\n\n    <nz-input-group nzAddOnBefore=\"商品售价: \" nzSize=\"large\" nzAddOnAfter=\"元\">\n      <input type=\"number\" nz-input placeholder=\"请输入商品售价\" >\n    </nz-input-group>\n    <nz-input-group class=\"submit\" nzSize=\"large\">\n      <button nz-button nzType=\"primary\" nzSize=\"large\">添加商品</button>\n    </nz-input-group>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/goods/good-add/good-add.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/routes/goods/good-add/good-add.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .ga-page .control {\n  width: 80%;\n  margin: 20px auto; }\n  :host .ga-page .control nz-input-group {\n    margin-bottom: 20px; }\n  :host .ga-page .control .submit {\n    display: flex;\n    flex-direction: row-reverse; }\n"

/***/ }),

/***/ "./src/app/routes/goods/good-add/good-add.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/routes/goods/good-add/good-add.component.ts ***!
  \*************************************************************/
/*! exports provided: GoodAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodAddComponent", function() { return GoodAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoodAddComponent = /** @class */ (function () {
    function GoodAddComponent() {
    }
    GoodAddComponent.prototype.ngOnInit = function () {
    };
    GoodAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-good-add',
            template: __webpack_require__(/*! ./good-add.component.html */ "./src/app/routes/goods/good-add/good-add.component.html"),
            styles: [__webpack_require__(/*! ./good-add.component.scss */ "./src/app/routes/goods/good-add/good-add.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GoodAddComponent);
    return GoodAddComponent;
}());



/***/ }),

/***/ "./src/app/routes/goods/good-category/good-category.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/routes/goods/good-category/good-category.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"category\">\n  <h3 class=\"header\">添加类目</h3>\n  <div class=\"control\">\n    <!-- 添加商品类别 -->\n    <div class=\"search\">\n      <nz-input-group nzSearch nzSize=\"large\" [nzSuffix]=\"addButton\">\n        <input type=\"text\" nz-input placeholder=\"添加商品类别\">\n      </nz-input-group>\n      <ng-template #addButton>\n        <button nz-button nzType=\"primary\" nzSize=\"large\" nzSearch>添加</button>\n      </ng-template>\n    </div>\n    <!-- 搜索商品类别 -->\n    <div class=\"search\">\n      <nz-input-group nzSearch nzSize=\"large\" [nzSuffix]=\"searchButton\">\n        <input type=\"text\" nz-input placeholder=\"搜索商品类别\">\n      </nz-input-group>\n      <ng-template #searchButton>\n        <button nz-button nzType=\"primary\" nzSize=\"large\" nzSearch>搜索</button>\n      </ng-template>\n    </div>  \n  </div>\n  <!-- 商品分类查看 -->\n  <div class=\"table\">\n    <nz-table [nzData]=\"category\" nzPageSize=\"10\" [nzTotal]=\"category.length\" [(nzPageIndex)]=\"currentPage\">\n      <thead>\n        <tr>\n          <th>编号</th>\n          <th>商品分类</th>\n          <th>操作</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of category_show; index as i\">\n          <td>{{i+1}}</td>\n          <td>{{item.name}}</td>\n          <td>\n              <button nz-button nzType=\"primary\" nzSize=\"small\">修改</button> \n              /\n              <button nz-button nzType=\"danger\" nzSize=\"small\">删除</button>\n          </td>\n        </tr>\n      </tbody>\n    </nz-table>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/routes/goods/good-category/good-category.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/routes/goods/good-category/good-category.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .category .control {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center; }\n  :host .category .control .search {\n    width: 45%; }\n  :host .category .table {\n  padding-top: 20px; }\n  :host .category .table tr {\n    background-color: #f0f2f5; }\n"

/***/ }),

/***/ "./src/app/routes/goods/good-category/good-category.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/routes/goods/good-category/good-category.component.ts ***!
  \***********************************************************************/
/*! exports provided: GoodCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodCategoryComponent", function() { return GoodCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoodCategoryComponent = /** @class */ (function () {
    function GoodCategoryComponent() {
        this.category = [
            { name: '大米' },
            { name: '杂粮' },
            { name: '糕点' },
            { name: '冷冻食品' },
            { name: '调味品' },
            { name: '大米' },
            { name: '杂粮' },
            { name: '糕点' },
            { name: '冷冻食品' },
            { name: '调味品' },
            { name: '大米' },
            { name: '杂粮' },
            { name: '糕点' },
            { name: '冷冻食品' },
            { name: '调味品' },
        ];
        this.category_show = [];
        this.currentPage = 1;
    }
    GoodCategoryComponent.prototype.ngOnInit = function () {
    };
    GoodCategoryComponent.prototype.ngDoCheck = function () {
        var index = this.currentPage - 1;
        this.category_show = this.category.slice(index * 10, this.currentPage * 10);
    };
    GoodCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-good-category',
            template: __webpack_require__(/*! ./good-category.component.html */ "./src/app/routes/goods/good-category/good-category.component.html"),
            styles: [__webpack_require__(/*! ./good-category.component.scss */ "./src/app/routes/goods/good-category/good-category.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GoodCategoryComponent);
    return GoodCategoryComponent;
}());



/***/ }),

/***/ "./src/app/routes/goods/good-change/good-change.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/routes/goods/good-change/good-change.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gc-page\">\n  <h3 class=\"header\">修改商品</h3>\n  <div class=\"control\">\n    <!-- 搜索商品类别 -->\n    <div class=\"search\">\n      <nz-input-group nzSearch nzSize=\"large\" [nzSuffix]=\"searchButton\">\n        <input type=\"text\" nz-input placeholder=\"搜索商品\">\n      </nz-input-group>\n      <ng-template #searchButton>\n        <button nz-button nzType=\"primary\" nzSize=\"large\" nzSearch>搜索</button>\n      </ng-template>\n    </div>  \n  </div>\n\n  <div class=\"table\">\n    <nz-table [nzData]=\"goods\" nzPageSize=\"10\" [nzTotal]=\"goods.length\" [(nzPageIndex)]=\"currentPage\">\n      <thead>\n        <tr>\n          <th>编号</th>\n          <th>商品名称</th>\n          <th>商品分类</th>\n          <th>商品进价(元/单位)</th>\n          <th>商品售价(元/单位)</th>\n          <th>操作</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of goods_show; index as i\">\n          <td>{{i+1}}</td>\n          <td>{{item.name}}</td>\n          <td>{{item.category}}</td>\n          <td>{{item.price.inValue}} 元/单位</td>\n          <td>{{item.price.outValue}} 元/单位</td>\n          <td>\n              <button nz-button nzType=\"primary\" nzSize=\"small\">修改</button> \n              /\n              <button nz-button nzType=\"danger\" nzSize=\"small\">删除</button>\n          </td>\n        </tr>\n      </tbody>\n    </nz-table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/goods/good-change/good-change.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/routes/goods/good-change/good-change.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .gc-page .control {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center; }\n  :host .gc-page .control .search {\n    width: 90%; }\n  :host .gc-page .table {\n  padding-top: 20px; }\n  :host .gc-page .table tr {\n    background-color: #f0f2f5; }\n"

/***/ }),

/***/ "./src/app/routes/goods/good-change/good-change.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/routes/goods/good-change/good-change.component.ts ***!
  \*******************************************************************/
/*! exports provided: GoodChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodChangeComponent", function() { return GoodChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoodChangeComponent = /** @class */ (function () {
    function GoodChangeComponent() {
        this.goods = [
            { name: '东台香米', category: '大米', price: { inValue: 3.2, outValue: 4.5 } },
            { name: '酱油', category: '调味品', price: { inValue: 3, outValue: 5 } },
            { name: '油', category: '调味品', price: { inValue: 3.2, outValue: 4.5 } },
            { name: '盐', category: '调味品', price: { inValue: 3.2, outValue: 4.5 } },
            { name: '崇明香米', category: '大米', price: { inValue: 3.2, outValue: 4.5 } },
            { name: '水饺', category: '冷冻食品', price: { inValue: 3.2, outValue: 4.5 } },
            { name: '汤圆', category: '冷冻食品', price: { inValue: 3.2, outValue: 4.5 } },
            { name: '黄豆', category: '杂粮', price: { inValue: 3.2, outValue: 4.5 } },
            { name: '绿豆', category: '杂粮', price: { inValue: 3.2, outValue: 4.5 } },
            { name: '年糕', category: '糕点', price: { inValue: 3.2, outValue: 4.5 } },
            { name: '崇明糕', category: '糕点', price: { inValue: 3.2, outValue: 4.5 } },
        ];
        this.goods_show = [];
        this.currentPage = 1;
    }
    GoodChangeComponent.prototype.ngOnInit = function () {
    };
    GoodChangeComponent.prototype.ngDoCheck = function () {
        var index = this.currentPage - 1;
        this.goods_show = this.goods.slice(index * 10, this.currentPage * 10);
    };
    GoodChangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-good-change',
            template: __webpack_require__(/*! ./good-change.component.html */ "./src/app/routes/goods/good-change/good-change.component.html"),
            styles: [__webpack_require__(/*! ./good-change.component.scss */ "./src/app/routes/goods/good-change/good-change.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GoodChangeComponent);
    return GoodChangeComponent;
}());



/***/ }),

/***/ "./src/app/routes/goods/goods.component.html":
/*!***************************************************!*\
  !*** ./src/app/routes/goods/goods.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"g-page\">\n    <nz-header class=\"g-head\">\n      <app-head class=\"g-head\" page=\"商品管理\"></app-head>\n    </nz-header>\n    <nz-content class=\"g-cont\">\n      <ul nz-menu [nzMode]=\"'horizontal'\">\n        <li *ngFor=\"let item of menu; index as i\" nz-menu-item [nzSelected]=\"i==selected\" [routerLink]=\"item.link\">\n          <i nz-icon [type]=\"item.icon\" theme=\"outline\"></i> \n          {{item.title}}\n        </li>\n      </ul>\n      <router-outlet></router-outlet>\n    </nz-content>\n  </nz-layout>"

/***/ }),

/***/ "./src/app/routes/goods/goods.component.scss":
/*!***************************************************!*\
  !*** ./src/app/routes/goods/goods.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%; }\n  :host .g-page {\n    width: 100%;\n    height: 100%; }\n  :host .g-page .g-head {\n      background-color: #fff;\n      color: #97a8be;\n      border-bottom: 1px solid #97a8be; }\n  :host .g-page .g-cont {\n      display: flex;\n      flex-direction: column; }\n  :host .g-page .g-cont ul {\n        outline: none; }\n  :host .g-page .g-cont ul li {\n          outline: none; }\n  ::ng-deep .header {\n  padding-left: 10px; }\n"

/***/ }),

/***/ "./src/app/routes/goods/goods.component.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/goods/goods.component.ts ***!
  \*************************************************/
/*! exports provided: GoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsComponent", function() { return GoodsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoodsComponent = /** @class */ (function () {
    function GoodsComponent(router) {
        var _this = this;
        this.menu = [
            { link: 'good-add', icon: 'hdd', title: '添加商品' },
            { link: 'good-change', icon: 'tool', title: '修改商品' },
            { link: 'good-category', icon: 'tool', title: '添加类目' },
        ];
        this.selected = 0;
        router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                for (var i = 0; i < _this.menu.length; i++) {
                    var reg = new RegExp(_this.menu[i].link);
                    if (reg.test(e.url)) {
                        _this.selected = i;
                        break;
                    }
                }
            }
        });
    }
    GoodsComponent.prototype.ngOnInit = function () {
    };
    GoodsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-goods',
            template: __webpack_require__(/*! ./goods.component.html */ "./src/app/routes/goods/goods.component.html"),
            styles: [__webpack_require__(/*! ./goods.component.scss */ "./src/app/routes/goods/goods.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GoodsComponent);
    return GoodsComponent;
}());



/***/ }),

/***/ "./src/app/routes/user/pay-add/pay-add.component.html":
/*!************************************************************!*\
  !*** ./src/app/routes/user/pay-add/pay-add.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pay-add works!\n</p>"

/***/ }),

/***/ "./src/app/routes/user/pay-add/pay-add.component.scss":
/*!************************************************************!*\
  !*** ./src/app/routes/user/pay-add/pay-add.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/user/pay-add/pay-add.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/user/pay-add/pay-add.component.ts ***!
  \**********************************************************/
/*! exports provided: PayAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayAddComponent", function() { return PayAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PayAddComponent = /** @class */ (function () {
    function PayAddComponent() {
    }
    PayAddComponent.prototype.ngOnInit = function () {
    };
    PayAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pay-add',
            template: __webpack_require__(/*! ./pay-add.component.html */ "./src/app/routes/user/pay-add/pay-add.component.html"),
            styles: [__webpack_require__(/*! ./pay-add.component.scss */ "./src/app/routes/user/pay-add/pay-add.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PayAddComponent);
    return PayAddComponent;
}());



/***/ }),

/***/ "./src/app/routes/user/user-add/user-add.component.html":
/*!**************************************************************!*\
  !*** ./src/app/routes/user/user-add/user-add.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cont\">\n  <h3>添加用户</h3>\n  <div class=\"form\">\n    <nz-input-group class=\"item\" nzCompact>\n      <i class=\"icon\" nz-icon type=\"phone\" theme=\"outline\" style=\"width:20%\"></i>\n      <input style=\"width: 80%\" type=\"text\" nzSize=\"large\" placeholder=\"手机号\" nz-input>\n    </nz-input-group>\n\n    <nz-input-group class=\"item\" nzCompact>\n      <i class=\"icon\" nz-icon type=\"home\" theme=\"outline\" style=\"width:20%\"></i>\n      <nz-select style=\"width: 20%;\" nzAllowClear nzPlaceHolder=\"选择区\">\n        <nz-option *ngFor=\"let area of areas; index as i\" [nzValue]=\"i\" [nzLabel]=\"area\"></nz-option>\n      </nz-select>\n      <input style=\"width: 60%\" type=\"text\" nzSize=\"large\" placeholder=\"具体家庭住址\" nz-input>\n    </nz-input-group>\n\n    <nz-input-group class=\"item\" nzCompact>\n      <i class=\"icon\" nz-icon type=\"user\" theme=\"outline\" style=\"width:20%\"></i>\n      <input style=\"width: 80%\" type=\"text\" nzSize=\"large\" placeholder=\"姓\" nz-input>\n    </nz-input-group>\n    <nz-input-group class=\"item\" nzCompact>\n      <i class=\"icon\" nz-icon type=\"user\" theme=\"outline\" style=\"width:20%\"></i>\n      <input style=\"width: 80%\" type=\"text\" nzSize=\"large\" placeholder=\"姓\" nz-input>\n    </nz-input-group>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/routes/user/user-add/user-add.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/routes/user/user-add/user-add.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont {\n  width: 80%;\n  margin: 20px auto; }\n  .cont .form {\n    background-color: white; }\n  .cont .form .item {\n      margin-bottom: 10px;\n      border: 1px solid #97a8be;\n      border-radius: 4px; }\n  .cont .form .item .icon {\n        background-color: #97a8be;\n        line-height: 32px; }\n"

/***/ }),

/***/ "./src/app/routes/user/user-add/user-add.component.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/user/user-add/user-add.component.ts ***!
  \************************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserAddComponent = /** @class */ (function () {
    function UserAddComponent() {
        this.areas = [
            '黄浦区',
            '静安区',
            '徐汇区',
            '浦东新区',
            '虹口区',
            '长宁区',
            '闵行区',
            '宝山区',
            '松江区',
            '嘉定区',
            '杨浦区',
            '普陀区',
            '奉贤区',
            '金山区',
            '青浦区',
            '崇明区',
        ];
    }
    UserAddComponent.prototype.ngOnInit = function () {
    };
    UserAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-add',
            template: __webpack_require__(/*! ./user-add.component.html */ "./src/app/routes/user/user-add/user-add.component.html"),
            styles: [__webpack_require__(/*! ./user-add.component.scss */ "./src/app/routes/user/user-add/user-add.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserAddComponent);
    return UserAddComponent;
}());



/***/ }),

/***/ "./src/app/routes/user/user.component.html":
/*!*************************************************!*\
  !*** ./src/app/routes/user/user.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"u-page\">\n  <nz-header class=\"u-head\">\n    <app-head class=\"u-head\" page=\"用户管理\"></app-head>\n  </nz-header>\n  <nz-content class=\"u-cont\">\n    <ul nz-menu [nzMode]=\"'horizontal'\">\n      <li *ngFor=\"let item of menu; index as i\" nz-menu-item [nzSelected]=\"i==selected\" [routerLink]=\"item.link\">\n        <i nz-icon [type]=\"item.icon\" theme=\"outline\"></i> \n        {{item.title}}\n      </li>\n    </ul>\n    <router-outlet></router-outlet>\n  </nz-content>\n</nz-layout>"

/***/ }),

/***/ "./src/app/routes/user/user.component.scss":
/*!*************************************************!*\
  !*** ./src/app/routes/user/user.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%; }\n  :host .u-page {\n    width: 100%;\n    height: 100%; }\n  :host .u-page .u-head {\n      background-color: #fff;\n      color: #97a8be;\n      border-bottom: 1px solid #97a8be; }\n  :host .u-page .u-cont ul {\n      outline: none; }\n  :host .u-page .u-cont ul li {\n        outline: none; }\n"

/***/ }),

/***/ "./src/app/routes/user/user.component.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/user/user.component.ts ***!
  \***********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(router) {
        var _this = this;
        this.menu = [
            { link: 'pay-add', icon: 'shopping-cart', title: '添加消费' },
            { link: 'user-add', icon: 'user-add', title: '修改用户' },
        ];
        this.selected = 0;
        router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                for (var i = 0; i < _this.menu.length; i++) {
                    var reg = new RegExp(_this.menu[i].link);
                    if (reg.test(e.url)) {
                        _this.selected = i;
                        break;
                    }
                }
            }
        });
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/routes/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/routes/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bhuang070/Desktop/testDemo/electorn_test/myproj/userSystem/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map