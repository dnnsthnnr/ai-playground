webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/sketch-classification/sketch-classification.module": [
		"../../../../../src/app/sketch-classification/sketch-classification.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInOutAnimation; });

var fadeInOutAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('fadeInOut', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
        opacity: 1,
        visibility: 'visible'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('invisible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
        opacity: 0,
        visibility: 'hidden'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('in => out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1000ms ease-out')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('out => in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1000ms ease-in'))
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_roadmap_roadmap_component__ = __webpack_require__("../../../../../src/app/components/roadmap/roadmap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_app_app_component__ = __webpack_require__("../../../../../src/app/components/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_3__components_app_app_component__["a" /* AppComponent */],
                    children: [
                        {
                            path: 'roadmap',
                            component: __WEBPACK_IMPORTED_MODULE_2__components_roadmap_roadmap_component__["a" /* RoadmapComponent */]
                        },
                        {
                            path: 'sketch',
                            loadChildren: 'app/sketch-classification/sketch-classification.module#SketchClassificationModule'
                        },
                        {
                            path: '**',
                            pathMatch: 'full',
                            redirectTo: '/sketch'
                        }
                    ]
                }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_app_app_component__ = __webpack_require__("../../../../../src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sketch_classification_sketch_classification_module__ = __webpack_require__("../../../../../src/app/sketch-classification/sketch-classification.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_roadmap_roadmap_component__ = __webpack_require__("../../../../../src/app/components/roadmap/roadmap.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__components_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_roadmap_roadmap_component__["a" /* RoadmapComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__sketch_classification_sketch_classification_module__["SketchClassificationModule"],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__components_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header #header>\r\n  <button class=\"btn btn-primary\" (click)=\"isCollapsed = !isCollapsed; $event.stopPropagation();\"><i\r\n    class=\"fa fa-bars\"></i></button>\r\n  <div class=\"navbar-brand\">AI Playground</div>\r\n</header>\r\n<nav class=\"aip-sidenav\" [ngbCollapse]=\"isCollapsed\">\r\n  <div class=\"list-group\">\r\n    <div class=\"list-group-item list-group-item-light\">Demos</div>\r\n    <a class=\"list-group-item\" routerLink=\"/sketch\" routerLinkActive=\"aip-active\">Draw Sketch</a>\r\n  </div>\r\n  <div class=\"list-group\">\r\n    <div class=\"list-group-item list-group-item-light\">Info</div>\r\n    <a class=\"list-group-item\" routerLink=\"/roadmap\" routerLinkActive=\"aip-active\">Roadmap</a>\r\n  </div>\r\n</nav>\r\n<div [style.marginTop]=\"getHeaderHeight()\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aip-title {\n  padding: 3rem;\n  text-align: center;\n  background-color: #868e96;\n  color: #dee2e6; }\n  .aip-title .aip-uppercase-let {\n    display: block;\n    font-weight: bold;\n    font-size: 500%; }\n\n.aip-sidenav {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background-color: #fff;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n  padding: 1rem 0;\n  z-index: 1000; }\n  .aip-sidenav .list-group .list-group-item {\n    padding: 0.75rem 2rem; }\n    .aip-sidenav .list-group .list-group-item.list-group-item-light {\n      padding-left: 1rem; }\n  .aip-sidenav .list-group a {\n    color: #495057; }\n    .aip-sidenav .list-group a.aip-active {\n      background-color: #007bff;\n      color: #fff; }\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: #007bff;\n  color: #dee2e6;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.24);\n  padding: 0.5rem;\n  z-index: 999; }\n  header button {\n    box-shadow: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.isCollapsed = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.body.onclick = function () {
            _this.isCollapsed = true;
        };
    };
    AppComponent.prototype.getHeaderHeight = function () {
        return getComputedStyle(this.header.nativeElement).height;
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('header'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AppComponent.prototype, "header", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app/app.component.scss")]
    })
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/roadmap/roadmap.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"aip-container-center\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h2>Roadmap</h2>\r\n      <div class=\"list-group\">\r\n        <div class=\"list-group-item\">\r\n          <h3>Improve Sketch Drawer</h3>\r\n          <ul>\r\n            <li>Add more object classes to recognize</li>\r\n            <li>Add neural network visualisation</li>\r\n            <li>Add layer activation visualization</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"list-group-item\">\r\n          <h3>Add new demos</h3>\r\n          <ul>\r\n            <li>2D collision avoidance car evolved with genetic algorithm</li>\r\n            <li>Text to image generation</li>\r\n            <li>AI Duett: Playing piano in turns with an AI</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/roadmap/roadmap.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/roadmap/roadmap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoadmapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoadmapComponent = (function () {
    function RoadmapComponent() {
    }
    RoadmapComponent.prototype.ngOnInit = function () {
    };
    return RoadmapComponent;
}());
RoadmapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'aip-roadmap',
        template: __webpack_require__("../../../../../src/app/components/roadmap/roadmap.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/roadmap/roadmap.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], RoadmapComponent);

//# sourceMappingURL=roadmap.component.js.map

/***/ }),

/***/ "../../../../../src/app/sketch-classification/components/sketch-classifier/sketch-classifier.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"modelSvc.modelLoaded\">\r\n  <div class=\"card\">\r\n    <div class=\"aip-chart-container card-body\">\r\n      <canvas baseChart chartType=\"doughnut\" width=\"320\" height=\"320\" [labels]=\"modelSvc.classes\" [data]=\"modelSvc.classScores\"\r\n              [legend]=\"false\" [colors]=\"colors\"></canvas>\r\n      <div class=\"aip-classifier-result\" *ngIf=\"modelSvc.classScores.length\">\r\n        I think it's a <b>{{getMaxClass()}}</b>\r\n      </div>\r\n    </div>\r\n    <div class=\"aip-sketch-wait-overlay\" [@fadeInOut]=\"modelSvc.classScores.length > 0 && modelSvc.hasScores ? 'invisible' : 'visible'\">\r\n      <div>\r\n        <b>Waiting for You to draw something beautiful ;-)</b>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/sketch-classification/components/sketch-classifier/sketch-classifier.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.aip-chart-container {\n  position: relative; }\n  .aip-chart-container .aip-classifier-result {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    text-align: center;\n    transition: all 0.2s ease-in-out; }\n\n.card {\n  position: relative; }\n  .card .aip-sketch-wait-overlay {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: #f8f9fa; }\n    .card .aip-sketch-wait-overlay div {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sketch-classification/components/sketch-classifier/sketch-classifier.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("../../../../../src/app/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_sketch_classification_model_service__ = __webpack_require__("../../../../../src/app/sketch-classification/service/sketch-classification-model.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SketchClassifierComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SketchClassifierComponent = (function () {
    function SketchClassifierComponent(modelSvc, host) {
        this.modelSvc = modelSvc;
        this.host = host;
        this.colors = [
            {
                backgroundColor: '#2196F3'
            },
            {
                backgroundColor: '#4CAF50'
            },
            {
                backgroundColor: '#03A9F4'
            },
            {
                backgroundColor: '#00BCD4'
            },
            {
                backgroundColor: '#009688'
            },
            {
                backgroundColor: '#8BC34A'
            },
            {
                backgroundColor: '#CDDC39'
            },
            {
                backgroundColor: '#FFEB3B'
            },
            {
                backgroundColor: '#FFC107'
            },
            {
                backgroundColor: '#FF9800'
            },
            {
                backgroundColor: '#FF5722'
            },
            {
                backgroundColor: '#B71C1C'
            },
            {
                backgroundColor: '#795548'
            },
            {
                backgroundColor: '#9E9E9E'
            },
            {
                backgroundColor: '#607D8B'
            },
            {
                backgroundColor: '#E91E63'
            },
        ];
        console.debug(this.host);
    }
    SketchClassifierComponent.prototype.ngOnInit = function () {
        this.modelSvc.loadModel();
    };
    SketchClassifierComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.modelSvc.predictionFinished.subscribe(function () {
            var box = _this.host.nativeElement.getBoundingClientRect();
            // if less than half the host is visible scroll it into view TODO animate scrolling
            if (box.top > window.innerHeight - (box.bottom - box.top) / 2)
                _this.host.nativeElement.scrollIntoView(true);
        });
    };
    /**
     * get the current lead class name
     * @returns {string}
     */
    SketchClassifierComponent.prototype.getMaxClass = function () {
        var max = Math.max.apply(Math, this.modelSvc.classScores);
        var idx = this.modelSvc.classScores.indexOf(max);
        return this.modelSvc.classes[idx];
    };
    return SketchClassifierComponent;
}());
SketchClassifierComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'aip-sketch-classifier',
        template: __webpack_require__("../../../../../src/app/sketch-classification/components/sketch-classifier/sketch-classifier.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sketch-classification/components/sketch-classifier/sketch-classifier.component.scss")],
        animations: [
            __WEBPACK_IMPORTED_MODULE_2__animations__["a" /* fadeInOutAnimation */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_sketch_classification_model_service__["a" /* SketchClassificationModelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_sketch_classification_model_service__["a" /* SketchClassificationModelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], SketchClassifierComponent);

var _a, _b;
//# sourceMappingURL=sketch-classifier.component.js.map

/***/ }),

/***/ "../../../../../src/app/sketch-classification/components/sketch-draw/sketch-draw.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div><h2>Draw Something!</h2>\r\n      <canvas #drawCanvas [width]=\"10 * targetSize\" [height]=\"10 * targetSize\"\r\n              (mousedown)=\"startDrawing($event)\" (touchstart)=\"startDrawing($event)\" (mousemove)=\"draw($event)\"\r\n              (touchmove)=\"draw($event)\" (mouseleave)=\"stopDrawing()\"\r\n              (mouseup)=\"stopDrawing()\" (touchend)=\"stopDrawing()\"></canvas>\r\n    </div>\r\n    <div>\r\n      <button class=\"btn btn-secondary\" (click)=\"clearCanvas()\">Clear</button>\r\n      <button class=\"btn btn-light\" (click)=\"modalSvc.open(helpContent)\"><i class=\"fa fa-question\"></i></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"aip-model-load-overlay\" *ngIf=\"!modelSvc.modelLoaded\">\r\n    <div class=\"text-center\">\r\n      <div>Loading model..</div>\r\n      <div><i class=\"fa fa-spin fa-circle-o-notch\"></i></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #helpContent let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h2 class=\"modal-title\">Don't know what to draw?</h2>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div>Currently we can recognize drawings of these objects:</div>\r\n    <ul>\r\n      <li *ngFor=\"let c of modelSvc.classes\">{{c}}</li>\r\n    </ul>\r\n    <div>We will be adding more object classes in the future.</div>\r\n    <button type=\"button\" class=\"btn btn-secondary\" aria-label=\"Close\" (click)=\"d()\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/sketch-classification/components/sketch-draw/sketch-draw.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: inline-block; }\n\ndiv button + button {\n  margin-left: 0.5rem; }\n\ncanvas {\n  border: 1px solid #495057;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  canvas:hover {\n    cursor: crosshair; }\n\n.card {\n  position: relative; }\n  .card .aip-model-load-overlay {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: #f8f9fa; }\n    .card .aip-model-load-overlay > div {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sketch-classification/components/sketch-draw/sketch-draw.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_deeplearn__ = __webpack_require__("../../../../deeplearn/dist/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_deeplearn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_deeplearn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_sketch_classification_model_service__ = __webpack_require__("../../../../../src/app/sketch-classification/service/sketch-classification-model.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SketchDrawComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SketchDrawComponent = (function () {
    function SketchDrawComponent(modalSvc, modelSvc) {
        this.modalSvc = modalSvc;
        this.modelSvc = modelSvc;
        this.targetSize = 32;
        this.isDrawing = false;
    }
    SketchDrawComponent.prototype.ngAfterViewInit = function () {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 10;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
    };
    /**
     * start drawing
     * @param {MouseEvent} event
     */
    SketchDrawComponent.prototype.startDrawing = function (event) {
        this.isDrawing = true;
        this.ctx.beginPath();
        if (event instanceof TouchEvent) {
            var rect = this.canvas.nativeElement.getBoundingClientRect();
            this.ctx.moveTo(event.touches[0].clientX - rect.left, event.touches[0].clientY - rect.top);
        }
        if (event instanceof MouseEvent)
            this.ctx.moveTo(event.offsetX, event.offsetY);
        this.draw(event);
    };
    /**
     * draw line according to mouse position
     * @param {MouseEvent} event
     */
    SketchDrawComponent.prototype.draw = function (event) {
        event.preventDefault();
        if (this.isDrawing) {
            if (event instanceof MouseEvent) {
                this.ctx.lineTo(event.offsetX, event.offsetY);
            }
            if (event instanceof TouchEvent) {
                var rect = this.canvas.nativeElement.getBoundingClientRect();
                this.ctx.lineTo(event.touches[0].clientX - rect.left, event.touches[0].clientY - rect.top);
            }
            this.ctx.stroke();
        }
    };
    /**
     * stop drawing and emit draw finished event
     * with normalized and scaled image data
     */
    SketchDrawComponent.prototype.stopDrawing = function () {
        if (this.isDrawing) {
            this.isDrawing = false;
            this.ctx.closePath();
            var scaled = this.scaleImageDataToTargetSize();
            this.modelSvc.predict(this.normalizeToBWImageData(scaled));
        }
    };
    /**
     * clear canvas from any drawn paths
     */
    SketchDrawComponent.prototype.clearCanvas = function () {
        this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        this.modelSvc.clearScores();
    };
    /**
     * scale image to target size and return image data
     * @returns {ImageData}
     */
    SketchDrawComponent.prototype.scaleImageDataToTargetSize = function () {
        var tempCanvas = document.createElement('canvas');
        tempCanvas.height = this.targetSize;
        tempCanvas.width = this.targetSize;
        var tempCtx = tempCanvas.getContext('2d');
        tempCtx.drawImage(this.canvas.nativeElement, 0, 0, this.targetSize, this.targetSize);
        return tempCtx.getImageData(0, 0, this.targetSize, this.targetSize);
    };
    /**
     * transform 4 channel image data
     * to 1 channel image with values between [0, 1]
     * and transform flattened array to nested array
     * of shape (targetSize, targetSize)
     * @param {ImageData} data
     * @returns {Array}
     */
    SketchDrawComponent.prototype.normalizeToBWImageData = function (data) {
        var resultMatrix = [], row = [];
        // increase by 4 to get to next pixel cause of RGBA channels
        for (var i = 0; i < data.data.length; i = i + 4) {
            var alphaC = data.data[i + 3] / 255.0;
            row.push([alphaC]);
            if (row.length === this.targetSize) {
                resultMatrix.push(row);
                row = [];
            }
        }
        return __WEBPACK_IMPORTED_MODULE_1_deeplearn__["Array3D"].new([this.targetSize, this.targetSize, 1], resultMatrix);
    };
    return SketchDrawComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('drawCanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], SketchDrawComponent.prototype, "canvas", void 0);
SketchDrawComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'aip-sketch-draw',
        template: __webpack_require__("../../../../../src/app/sketch-classification/components/sketch-draw/sketch-draw.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sketch-classification/components/sketch-draw/sketch-draw.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_sketch_classification_model_service__["a" /* SketchClassificationModelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_sketch_classification_model_service__["a" /* SketchClassificationModelService */]) === "function" && _c || Object])
], SketchDrawComponent);

var _a, _b, _c;
//# sourceMappingURL=sketch-draw.component.js.map

/***/ }),

/***/ "../../../../../src/app/sketch-classification/components/sketch-root/sketch-root.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"aip-demo-content-center\">\r\n  <div>\r\n    <div>\r\n      <aip-sketch-draw (aipOnDrawFinished)=\"predict($event)\" (aipOnClear)=\"clearScores()\"></aip-sketch-draw>\r\n    </div>\r\n    <div>\r\n      <aip-sketch-classifier></aip-sketch-classifier>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/sketch-classification/components/sketch-root/sketch-root.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "aip-sketch-draw, aip-sketch-classifier {\n  margin: 1rem; }\n\n.aip-demo-content-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .aip-demo-content-center :first-child > * {\n    transition: all 0.2s ease-in-out; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sketch-classification/components/sketch-root/sketch-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SketchRootComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SketchRootComponent = (function () {
    function SketchRootComponent() {
    }
    return SketchRootComponent;
}());
SketchRootComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'aip-sketch-root',
        template: __webpack_require__("../../../../../src/app/sketch-classification/components/sketch-root/sketch-root.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sketch-classification/components/sketch-root/sketch-root.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SketchRootComponent);

//# sourceMappingURL=sketch-root.component.js.map

/***/ }),

/***/ "../../../../../src/app/sketch-classification/service/sketch-classification-model.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_deeplearn__ = __webpack_require__("../../../../deeplearn/dist/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_deeplearn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_deeplearn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_deeplearn_dist_src_util__ = __webpack_require__("../../../../deeplearn/dist/src/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_deeplearn_dist_src_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_deeplearn_dist_src_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SketchClassificationModelService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SketchClassificationModelService = (function () {
    function SketchClassificationModelService() {
        this._modelLoaded = false;
        this.g = new __WEBPACK_IMPORTED_MODULE_1_deeplearn__["Graph"]();
        this._predictionFinished = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._classes = [
            'Circle',
            'Square',
            'Line',
            'Baseball',
            'Apple',
            'Door',
            'Book',
            'Triangle',
            'Hexagon',
            'Octagon',
            'Laptop',
            'Pizza',
            'Envelope',
            'Clock',
            'Camera',
            'Face'
        ];
        this._classScores = [];
        this._hasScores = false;
        try {
            this.math = new __WEBPACK_IMPORTED_MODULE_1_deeplearn__["NDArrayMathGPU"]();
            console.debug('using gpu');
        }
        catch (err) {
            console.debug(err);
            console.debug('using cpu');
            this.math = new __WEBPACK_IMPORTED_MODULE_1_deeplearn__["NDArrayMathCPU"]();
        }
    }
    /**
     * initialize model graph and load model weights
     * @returns {Promise<any>}
     */
    SketchClassificationModelService.prototype.loadModel = function () {
        var _this = this;
        var varLoader = new __WEBPACK_IMPORTED_MODULE_1_deeplearn__["CheckpointLoader"](document.head.baseURI + 'assets/deeplearn/sketch_classification/');
        this.modelReady = new Promise(function (resolve, reject) {
            varLoader.getAllVariables().then(function (vars) {
                _this.inputTensor = _this.g.placeholder('input', [32, 32, 1]);
                var conv1 = _this.g.conv2d(_this.inputTensor, _this.g.constant(vars['conv2d_1/kernel']), _this.g.constant(vars['conv2d_1/bias']), 3, 32, 1, 1);
                var conv1_relu = _this.g.relu(conv1);
                var conv2 = _this.g.conv2d(conv1_relu, _this.g.constant(vars['conv2d_2/kernel']), _this.g.constant(vars['conv2d_2/bias']), 3, 32, 1, 1);
                var conv2_relu = _this.g.relu(conv2);
                var conv3 = _this.g.conv2d(conv2_relu, _this.g.constant(vars['conv2d_3/kernel']), _this.g.constant(vars['conv2d_3/bias']), 3, 32, 1, 1);
                var conv3_relu = _this.g.relu(conv3);
                var maxPool1 = _this.g.maxPool(conv3_relu, 2, 2, 0);
                var conv4 = _this.g.conv2d(maxPool1, _this.g.constant(vars['conv2d_4/kernel']), _this.g.constant(vars['conv2d_4/bias']), 3, 64, 1, 1);
                var conv4_relu = _this.g.relu(conv4);
                var conv5 = _this.g.conv2d(conv4_relu, _this.g.constant(vars['conv2d_5/kernel']), _this.g.constant(vars['conv2d_5/bias']), 3, 64, 1, 1);
                var conv5_relu = _this.g.relu(conv5);
                var conv6 = _this.g.conv2d(conv5_relu, _this.g.constant(vars['conv2d_6/kernel']), _this.g.constant(vars['conv2d_6/bias']), 3, 64, 1, 1);
                var conv6_relu = _this.g.relu(conv6);
                var maxPool2 = _this.g.maxPool(conv6_relu, 2, 2, 0);
                var conv7 = _this.g.conv2d(maxPool2, _this.g.constant(vars['conv2d_7/kernel']), _this.g.constant(vars['conv2d_7/bias']), 3, 128, 1, 1);
                var conv7_relu = _this.g.relu(conv7);
                var conv8 = _this.g.conv2d(conv7_relu, _this.g.constant(vars['conv2d_8/kernel']), _this.g.constant(vars['conv2d_8/bias']), 3, 128, 1, 1);
                var conv8_relu = _this.g.relu(conv8);
                var conv9 = _this.g.conv2d(conv8_relu, _this.g.constant(vars['conv2d_9/kernel']), _this.g.constant(vars['conv2d_9/bias']), 3, 128, 1, 1);
                var conv9_relu = _this.g.relu(conv9);
                var maxPool3 = _this.g.maxPool(conv9_relu, 2, 2, 0);
                var reshape = _this.g.reshape(maxPool3, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_deeplearn_dist_src_util__["sizeFromShape"])(maxPool3.shape)]);
                var dense1 = _this.g.layers.dense('dense1', reshape, 512, null, true, new __WEBPACK_IMPORTED_MODULE_1_deeplearn__["NDArrayInitializer"](vars['dense_1/kernel']), new __WEBPACK_IMPORTED_MODULE_1_deeplearn__["NDArrayInitializer"](vars['dense_1/bias']));
                var dense1_relu = _this.g.relu(dense1);
                var dense2 = _this.g.layers.dense('dense2', dense1_relu, 512, null, true, new __WEBPACK_IMPORTED_MODULE_1_deeplearn__["NDArrayInitializer"](vars['dense_2/kernel']), new __WEBPACK_IMPORTED_MODULE_1_deeplearn__["NDArrayInitializer"](vars['dense_2/bias']));
                var dense2_relu = _this.g.relu(dense2);
                var dense3 = _this.g.layers.dense('dense3', dense2_relu, 16, null, true, new __WEBPACK_IMPORTED_MODULE_1_deeplearn__["NDArrayInitializer"](vars['dense_3/kernel']), new __WEBPACK_IMPORTED_MODULE_1_deeplearn__["NDArrayInitializer"](vars['dense_3/bias']));
                _this.predictionTensor = _this.g.softmax(dense3);
                _this._modelLoaded = true;
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * let the model predict
     * @param data
     */
    SketchClassificationModelService.prototype.predict = function (data) {
        var _this = this;
        this._classScores = [];
        this.modelReady.then(function () {
            var sess = new __WEBPACK_IMPORTED_MODULE_1_deeplearn__["Session"](_this.g, _this.math);
            _this.math.scope(function (keep, track) {
                var mapping = [{
                        tensor: _this.inputTensor,
                        data: data
                    }];
                var result = sess.eval(_this.predictionTensor, mapping);
                var tmpClassScores = [];
                result.getValues().forEach(function (score, index) {
                    tmpClassScores.push(Math.round(score * 100));
                });
                _this._classScores = tmpClassScores;
                _this._hasScores = true;
                _this.predictionFinished.emit();
            });
        }).catch(function (error) {
            console.debug(error);
        });
    };
    /**
     * clear the class scores to prevent from displaying
     */
    SketchClassificationModelService.prototype.clearScores = function () {
        this._hasScores = false;
    };
    Object.defineProperty(SketchClassificationModelService.prototype, "classes", {
        // getter
        get: function () {
            return this._classes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SketchClassificationModelService.prototype, "classScores", {
        get: function () {
            return this._classScores;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SketchClassificationModelService.prototype, "hasScores", {
        get: function () {
            return this._hasScores;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SketchClassificationModelService.prototype, "modelLoaded", {
        get: function () {
            return this._modelLoaded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SketchClassificationModelService.prototype, "predictionFinished", {
        get: function () {
            return this._predictionFinished;
        },
        enumerable: true,
        configurable: true
    });
    return SketchClassificationModelService;
}());
SketchClassificationModelService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SketchClassificationModelService);

//# sourceMappingURL=sketch-classification-model.service.js.map

/***/ }),

/***/ "../../../../../src/app/sketch-classification/sketch-classification-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sketch_root_sketch_root_component__ = __webpack_require__("../../../../../src/app/sketch-classification/components/sketch-root/sketch-root.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SketchClassificationRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SketchClassificationRoutingModule = (function () {
    function SketchClassificationRoutingModule() {
    }
    return SketchClassificationRoutingModule;
}());
SketchClassificationRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_2__components_sketch_root_sketch_root_component__["a" /* SketchRootComponent */]
                },
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], SketchClassificationRoutingModule);

//# sourceMappingURL=sketch-classification-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/sketch-classification/sketch-classification.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sketch_draw_sketch_draw_component__ = __webpack_require__("../../../../../src/app/sketch-classification/components/sketch-draw/sketch-draw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_sketch_root_sketch_root_component__ = __webpack_require__("../../../../../src/app/sketch-classification/components/sketch-root/sketch-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sketch_classification_routing_module__ = __webpack_require__("../../../../../src/app/sketch-classification/sketch-classification-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sketch_classifier_sketch_classifier_component__ = __webpack_require__("../../../../../src/app/sketch-classification/components/sketch-classifier/sketch-classifier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_sketch_classification_model_service__ = __webpack_require__("../../../../../src/app/sketch-classification/service/sketch-classification-model.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SketchClassificationModule", function() { return SketchClassificationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SketchClassificationModule = (function () {
    function SketchClassificationModule() {
    }
    return SketchClassificationModule;
}());
SketchClassificationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_4__sketch_classification_routing_module__["a" /* SketchClassificationRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__components_sketch_draw_sketch_draw_component__["a" /* SketchDrawComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_sketch_root_sketch_root_component__["a" /* SketchRootComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_sketch_classifier_sketch_classifier_component__["a" /* SketchClassifierComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__service_sketch_classification_model_service__["a" /* SketchClassificationModelService */]
        ]
    })
], SketchClassificationModule);

//# sourceMappingURL=sketch-classification.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map