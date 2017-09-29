webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "ow-root",
        template: __webpack_require__("../../../../../src/app/app.template.html"),
        styles: [__webpack_require__("../../../../../src/app/app.style.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_common_module__ = __webpack_require__("../../../../../src/app/common/common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolbar_toolbar_module__ = __webpack_require__("../../../../../src/app/toolbar/toolbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__history_history_module__ = __webpack_require__("../../../../../src/app/history/history.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_layout_module__ = __webpack_require__("../../../../../src/app/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__toolbar_toolbar_module__["a" /* ToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__history_history_module__["a" /* HistoryModule */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_8__layout_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__common_common_module__["a" /* OverwatchCommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* APP_BASE_HREF */], useValue: "/" }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_history_component__ = __webpack_require__("../../../../../src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");




var appRoutes = [{
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    }, {
        path: "dashboard",
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* Dashboard */]
    }, {
        path: "history",
        component: __WEBPACK_IMPORTED_MODULE_2__history_history_component__["a" /* History */]
    }, {
        path: "layout",
        component: __WEBPACK_IMPORTED_MODULE_3__layout_layout_component__["a" /* Layout */]
    }];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/app.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar {\n  position: fixed;\n  height: 3em;\n  width: 100%;\n  z-index: 100; }\n\n.content {\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .content router-outlet {\n    display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n  <ow-toolbar></ow-toolbar>\n</div>\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/common/common.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverwatchCommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__join_pipe__ = __webpack_require__("../../../../../src/app/common/join.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timestamp_pipe__ = __webpack_require__("../../../../../src/app/common/timestamp.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__connector_service__ = __webpack_require__("../../../../../src/app/common/connector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__socket_service__ = __webpack_require__("../../../../../src/app/common/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OverwatchCommonModule = (function () {
    function OverwatchCommonModule() {
    }
    return OverwatchCommonModule;
}());
OverwatchCommonModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__join_pipe__["a" /* JoinPipe */], __WEBPACK_IMPORTED_MODULE_4__timestamp_pipe__["a" /* TimestampPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__join_pipe__["a" /* JoinPipe */], __WEBPACK_IMPORTED_MODULE_4__timestamp_pipe__["a" /* TimestampPipe */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__connector_service__["a" /* Connector */], __WEBPACK_IMPORTED_MODULE_6__socket_service__["a" /* SocketService */]]
    })
], OverwatchCommonModule);

//# sourceMappingURL=common.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/connector.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Connector = (function () {
    function Connector(http) {
        this.http = http;
        this.jsonHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
    }
    Connector.prototype.errorHandler = function (error) {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    };
    Connector.prototype.responseHandler = function (response) {
        if (response.status === 200) {
            return response.data;
        }
        else {
            // TODO exception
        }
    };
    Connector.prototype.get = function (url, params) {
        var _this = this;
        var urlParams;
        if (params) {
            urlParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
            for (var key in params) {
                if (key === undefined)
                    continue;
                urlParams.set(key, params[key]);
            }
        }
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            url: this.baseUrl + url,
            search: urlParams,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* ResponseContentType */].Json
        });
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](opt))
            .toPromise()
            .then(function (response) { return _this.responseHandler(response.json()); })
            .catch(this.errorHandler);
    };
    Connector.prototype.post = function (url, params) {
        var _this = this;
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            url: this.baseUrl + url,
            headers: this.jsonHeader,
            body: JSON.stringify(params),
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* ResponseContentType */].Json
        });
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](opt))
            .toPromise()
            .then(function (response) { return _this.responseHandler(response.json()); })
            .catch(this.errorHandler);
    };
    Connector.prototype.put = function (url, params) {
        var _this = this;
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put,
            url: this.baseUrl + url,
            headers: this.jsonHeader,
            body: JSON.stringify(params),
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* ResponseContentType */].Json
        });
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](opt))
            .toPromise()
            .then(function (response) { return _this.responseHandler(response.json()); })
            .catch(this.errorHandler);
    };
    Connector.prototype.delete = function (url, params) {
        var _this = this;
        var urlParams;
        if (params) {
            urlParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
            for (var key in params) {
                if (key === undefined)
                    continue;
                urlParams.set(key, params[key]);
            }
        }
        var opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Delete,
            url: this.baseUrl + url,
            search: urlParams,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* ResponseContentType */].Json
        });
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](opt))
            .toPromise()
            .then(function (response) { return _this.responseHandler(response.json()); })
            .catch(this.errorHandler);
    };
    return Connector;
}());
Connector = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], Connector);

var _a;
//# sourceMappingURL=connector.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/join.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JoinPipe = (function () {
    function JoinPipe() {
    }
    JoinPipe.prototype.transform = function (value, delimiter) {
        var result = "";
        var idx = 0;
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            result += item;
            if (idx < value.length - 1)
                result += delimiter;
            idx++;
        }
        return result;
    };
    return JoinPipe;
}());
JoinPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: "join" })
], JoinPipe);

//# sourceMappingURL=join.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/common/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService() {
        this.url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl;
        this.init();
    }
    SocketService.prototype.init = function () {
        // let socketUrl: URL = new URL(this.url);
        // let socketPath = "socket";
        // let path: string;
        // if (socketUrl.pathname.endsWith("/"))
        //     path = `${ socketUrl.pathname }${ socketPath }`;
        // else
        //     path = `${ socketUrl.pathname }/${ socketPath }`;
        // this.socket = scoket.connect(socketUrl.origin, { path: path });
        // this.socket.on("connect", () => console.log("socket connected"));
        // this.socket.on("disconnect", () => console.log("socket disconnected"));
        // this.socket.on("error", (error: string) => console.error(`scoket error: "${ error }"`));
    };
    SocketService.prototype.getSystemFailureTopic = function () {
        return "data_failure";
    };
    SocketService.prototype.getSystemStatsTopic = function () {
        return "data_stats";
    };
    SocketService.prototype.subscribe = function (topic, handler) {
        if (topic === null || topic === undefined)
            return;
        this.socket.emit("sub", topic);
        this.socket.on(topic, handler);
        console.log("subscribed to " + topic);
    };
    SocketService.prototype.unsubscribe = function (topic) {
        if (topic === null || topic === undefined)
            return;
        this.socket.emit("unsub", topic);
        console.log("unsubscribed from " + topic);
    };
    return SocketService;
}());
SocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/system-failure/system-failure.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemFailureService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connector_service__ = __webpack_require__("../../../../../src/app/common/connector.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SystemFailureService = (function () {
    function SystemFailureService(connector) {
        this.connector = connector;
    }
    SystemFailureService.prototype.getSystemFailure = function (opt) {
        var url = "/failure";
        if (opt.system)
            url = url + "/" + opt.system;
        opt.system = undefined;
        if (opt.count === undefined)
            opt.count = 20;
        else {
            if (opt.count < 1)
                opt.count = 1;
            if (opt.count > 100)
                opt.count = 100;
        }
        // return this.connector.get<Array<SystemFailureDto>>(url, opt);
        return new Promise(function (resolve, reject) {
            var data = new Array();
            var now = Math.floor(new Date().getTime() / 1000);
            var system = opt.system === undefined ? "serivce-A" : opt.system;
            for (var i = 0; i < 20; i++) {
                data.push({
                    id: i,
                    time: now - i * 5,
                    system: system,
                    host: "10.10.1.1",
                    url: "/test",
                    status: "timeout"
                });
            }
            resolve(data);
        });
    };
    return SystemFailureService;
}());
SystemFailureService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__connector_service__["a" /* Connector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__connector_service__["a" /* Connector */]) === "function" && _a || Object])
], SystemFailureService);

var _a;
//# sourceMappingURL=system-failure.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/system-info/system-info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connector_service__ = __webpack_require__("../../../../../src/app/common/connector.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SystemInfoService = (function () {
    function SystemInfoService(connector) {
        this.connector = connector;
    }
    SystemInfoService.prototype.getSystemList = function () {
        // return this.connector.get<Array<string>>(`/system/list`);
        return new Promise(function (resolve, reject) {
            var data = ["service-A", "service-B",
                "service-C", "service-D", "service-E",
                "service-F", "service-G", "service-H",
                "service-I", "service-J"];
            resolve(data);
        });
    };
    SystemInfoService.prototype.getSystemInfoDetail = function (system, begin, end) {
        if (begin >= end)
            throw new Error("begin >= end");
        if (end - begin > 2 * 60 * 60)
            throw new Error("too large");
        // return this.connector.get<SystemInfoDetailMapDto>(`/system/${ system }`, { begin: begin, end: end, detail: true, count: -1 })
        // .then((data: any) => {
        //     return SystemInfoDetailVo.parse(data);
        // });
        return new Promise(function (resolve, reject) {
            var now = Math.floor(new Date().getTime() / 1000);
            var data = new Array();
            for (var i = 0; i < 60; i++) {
                data.push({
                    time: now - i * 60,
                    nodes: [{
                            name: "10.10.1.1",
                            rpm: Math.round(1000 + Math.random() * 200),
                            fpm: Math.round(Math.random() * 10)
                        }]
                });
            }
            resolve(data);
        });
    };
    SystemInfoService.prototype.getSystemInfo = function (system, begin, end) {
        // return this.connector.get<SystemInfoMapDto>(`/system/${ system }`, { begin: begin, end: end, count: -1 })
        // .then((data: SystemInfoMapDto) => SystemInfoVo.parse(data));
        return new Promise(function (resolve, reject) {
            var now = Math.floor(new Date().getTime() / 1000);
            var data = new Array();
            for (var i = 0; i < 60; i++) {
                data.push({
                    time: now - i * 60,
                    rpm: Math.round(1000 + Math.random() * 200),
                    fpm: Math.round(Math.random() * 10)
                });
            }
            resolve(data);
        });
    };
    return SystemInfoService;
}());
SystemInfoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__connector_service__["a" /* Connector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__connector_service__["a" /* Connector */]) === "function" && _a || Object])
], SystemInfoService);

var _a;
//# sourceMappingURL=system-info.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/system-stats/system-stats.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemStatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connector_service__ = __webpack_require__("../../../../../src/app/common/connector.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SystemStatsService = (function () {
    function SystemStatsService(connector) {
        this.connector = connector;
    }
    SystemStatsService.prototype.getSystemStats = function () {
        // return this.connector.get<SystemStatsDto>("/stats")
        // .then((data: SystemStatsDto) => new SystemStats(data));
        return new Promise(function (resolve, reject) {
            var now = Math.floor(new Date().getTime() / 1000);
            var data = {
                time: now,
                nodes: [
                    { name: "gateway", rpm: [0, 0, 0], fpm: [0, 0, 0] },
                    { name: "service-A", rpm: [1000, 900, 800], fpm: [1, 1, 1] },
                    { name: "service-B", rpm: [5000, 4500, 4000], fpm: [50, 50, 0] },
                    { name: "service-C", rpm: [3000, 2800, 2600], fpm: [1000, 0, 0] },
                    { name: "service-D", rpm: [10000, 12000, 11000], fpm: [1000, 1200, 1100] },
                    { name: "service-E", rpm: [20000, 18000, 21000], fpm: [0, 0, 0] },
                    { name: "service-F", rpm: [6000, 4000, 8000], fpm: [0, 0, 0] },
                    { name: "service-G", rpm: [1000, 3000, 2000], fpm: [0, 0, 0] },
                    { name: "service-H", rpm: [3000, 4000, 5000], fpm: [0, 0, 0] },
                    { name: "service-I", rpm: [2000, 1500, 3000], fpm: [0, 0, 0] },
                    { name: "service-J", rpm: [1000, 2000, 3000], fpm: [0, 0, 0] }
                ],
                links: [
                    { source: "gateway", target: "service-A", rpm: [1000, 1000, 1000], fpm: [0, 0, 0] },
                    { source: "gateway", target: "service-B", rpm: [1000, 1000, 1000], fpm: [0, 0, 0] },
                    { source: "service-B", target: "service-C", rpm: [1000, 1000, 1000], fpm: [0, 0, 0] },
                    { source: "service-A", target: "service-D", rpm: [1000, 1000, 1000], fpm: [0, 0, 0] },
                    { source: "service-C", target: "service-D", rpm: [1000, 1000, 1000], fpm: [0, 0, 0] },
                    { source: "gateway", target: "service-E", rpm: [1000, 1000, 1000], fpm: [0, 0, 0] },
                    { source: "service-E", target: "service-F", rpm: [1000, 1000, 1000], fpm: [0, 0, 0] },
                    { source: "service-F", target: "service-G", rpm: [1000, 1000, 1000], fpm: [0, 0, 0] },
                    { source: "service-G", target: "service-H", rpm: [1000, 1000, 1000], fpm: [0, 0, 0] },
                    { source: "service-D", target: "service-H", rpm: [1000, 1000, 1000], fpm: [0, 0, 0] },
                    { source: "service-D", target: "service-I", rpm: [1000, 1000, 1000], fpm: [0, 0, 0] },
                    { source: "service-D", target: "service-J", rpm: [1000, 1000, 1000], fpm: [0, 0, 0] }
                ]
            };
            resolve(data);
        });
    };
    return SystemStatsService;
}());
SystemStatsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__connector_service__["a" /* Connector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__connector_service__["a" /* Connector */]) === "function" && _a || Object])
], SystemStatsService);

var _a;
//# sourceMappingURL=system-stats.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/timestamp.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimestampPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimestampPipe = (function () {
    function TimestampPipe() {
    }
    TimestampPipe.prototype.normalize = function (num) {
        return "" + (num > 9 ? num : "0" + num);
    };
    TimestampPipe.prototype.transform = function (value, format) {
        var date = new Date(value * 1000);
        if (format === "time") {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            return this.normalize(hours) + ":" + this.normalize(minutes);
        }
        else if (format === "date") {
            var month = date.getMonth() + 1;
            var day = date.getDate();
            return this.normalize(month) + "-" + this.normalize(day);
        }
        else {
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            return this.normalize(month) + "-" + this.normalize(day) + " " + this.normalize(hours) + ":" + this.normalize(minutes);
        }
    };
    return TimestampPipe;
}());
TimestampPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: "timestamp" })
], TimestampPipe);

//# sourceMappingURL=timestamp.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/common/user/layout.dto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutDto; });
var LayoutDto = (function () {
    function LayoutDto() {
        this.boxes = new Map();
        this.nodes = new Map();
    }
    LayoutDto.parse = function (data) {
        var layout = new LayoutDto();
        var parsed = JSON.parse(data);
        layout.name = parsed.name;
        for (var boxId in parsed.boxes) {
            if (boxId === undefined)
                continue;
            var boxData = parsed.boxes[boxId];
            layout.boxes.set(boxId, {
                x: boxData.x, y: boxData.y, width: boxData.width, height: boxData.height
            });
        }
        for (var nodeName in parsed.nodes) {
            if (nodeName === undefined)
                continue;
            layout.nodes.set(nodeName, parsed.nodes[nodeName]);
        }
        return layout;
    };
    LayoutDto.prototype.stringify = function () {
        var obj = {
            name: this.name,
            boxes: {},
            nodes: {}
        };
        this.boxes.forEach(function (boxVo, boxId) {
            obj.boxes[boxId] = {
                x: boxVo.x, y: boxVo.y, width: boxVo.width, height: boxVo.height
            };
        });
        this.nodes.forEach(function (boxId, nodeName) {
            obj.nodes[nodeName] = boxId;
        });
        return JSON.stringify(obj);
    };
    return LayoutDto;
}());

//# sourceMappingURL=layout.dto.js.map

/***/ }),

/***/ "../../../../../src/app/common/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connector_service__ = __webpack_require__("../../../../../src/app/common/connector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_dto__ = __webpack_require__("../../../../../src/app/common/user/layout.dto.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// TODO:
// user account management
var UserService = (function () {
    function UserService(connector) {
        this.connector = connector;
    }
    UserService.prototype.mapToString = function (map) {
        var obj = {};
        map.forEach(function (value, key) { return obj[key] = value; });
        return JSON.stringify(obj);
    };
    UserService.prototype.strToMap = function (value) {
        var map = new Map();
        var obj;
        try {
            obj = JSON.parse(value);
        }
        catch (e) {
            obj = {};
        }
        for (var k in obj) {
            if (k === undefined)
                continue;
            map.set(k, obj[k]);
        }
        return map;
    };
    UserService.prototype.getUserPreferences = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.userPreferences)
                return resolve(_this.userPreferences);
            _this.userPreferences = _this.strToMap(window.localStorage.getItem("user_preferences"));
            if (!_this.userPreferences)
                _this.userPreferences = new Map();
            resolve(_this.userPreferences);
        });
    };
    UserService.prototype.updateUserPreferences = function (key, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userPreferences.set(key, value);
            window.localStorage.setItem("user_preferences", _this.mapToString(_this.userPreferences));
            resolve();
        });
    };
    UserService.prototype.getUserLayouts = function () {
        return this.getUserPreferences()
            .then(function (preferences) {
            var rawLayoutsData = preferences.get("layouts");
            var rawLayouts = rawLayoutsData !== undefined ? JSON.parse(rawLayoutsData) : [];
            return rawLayouts.map(__WEBPACK_IMPORTED_MODULE_2__layout_dto__["a" /* LayoutDto */].parse);
        });
    };
    UserService.prototype.saveLayout = function (layout) {
        var _this = this;
        return this.getUserLayouts()
            .then(function (layouts) {
            var found = layouts.find(function (i) { return i.name === layout.name; });
            if (found) {
                found.boxes = layout.boxes;
                found.nodes = layout.nodes;
            }
            else {
                layouts.push(layout);
            }
            return _this.updateUserPreferences("layouts", JSON.stringify(layouts.map(function (i) { return i.stringify(); })));
        });
    };
    UserService.prototype.deleteLayout = function (layoutName) {
        var _this = this;
        return this.getUserLayouts()
            .then(function (layouts) {
            var found = layouts.findIndex(function (i) { return i.name === layoutName; });
            layouts.splice(found, 1);
            return _this.updateUserPreferences("layouts", JSON.stringify(layouts.map(function (i) { return i.stringify(); })));
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__connector_service__["a" /* Connector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__connector_service__["a" /* Connector */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__failure_roller_failure_roller_component__ = __webpack_require__("../../../../../src/app/dashboard/failure-roller/failure-roller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__system_summary_system_summary_component__ = __webpack_require__("../../../../../src/app/dashboard/system-summary/system-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__system_detail_system_detail_component__ = __webpack_require__("../../../../../src/app/dashboard/system-detail/system-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__diagram_systems_rpc_graph_graph_component__ = __webpack_require__("../../../../../src/app/diagram/systems-rpc-graph/graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_system_stats_system_stats_service__ = __webpack_require__("../../../../../src/app/common/system-stats/system-stats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_system_failure_system_failure_service__ = __webpack_require__("../../../../../src/app/common/system-failure/system-failure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_socket_service__ = __webpack_require__("../../../../../src/app/common/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var Dashboard = (function () {
    function Dashboard(route, router, userService, systemStatsService, systemFailureService, socketService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.systemStatsService = systemStatsService;
        this.systemFailureService = systemFailureService;
        this.socketService = socketService;
        this.systemStats = null;
        this.detailState = "hidden";
        this.layoutInputCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.layouts = [];
        this.selectedLayout = "all";
        this.currentLayout = null;
        this.updateStats = function (systemStats) {
            _this.systemStats = systemStats;
            _this.systemSummary.summarize(systemStats);
        };
    }
    Dashboard.prototype.ngOnInit = function () {
        var _this = this;
        var loadStats = function () {
            console.log("updating stats...");
            _this.systemStatsService.getSystemStats()
                .then(function (systemStats) {
                _this.updateStats(systemStats);
            })
                .then(null, function (err) {
                console.log(err);
                console.log("failed to load system stats");
            });
            // this.updateStatsTimeoutId = window.setTimeout(loadStats, 120000);
        };
        loadStats();
        // load layouts
        this.userService.getUserLayouts()
            .then(function (layouts) {
            _this.layouts = layouts;
        });
        this.layoutInputCtrl.valueChanges.subscribe(function (layout) {
            if (layout === undefined)
                return;
            if (layout === "all")
                _this.currentLayout = null;
            else
                _this.currentLayout = _this.fromVo(layout);
        });
        // load system failures
        this.systemFailureService.getSystemFailure({ count: 20 })
            .then(function (systemFailures) { return systemFailures.map(_this.failureRoller.addLogItem); });
        // this.socketService.subscribe(this.socketService.getSystemFailureTopic(), this.failureRoller.addLogItem);
        // this.socketService.subscribe(this.socketService.getSystemStatsTopic(), (data) => {
        //     const stats = new SystemStats(data);
        //     this.updateStats(stats);
        // });
    };
    Dashboard.prototype.ngOnDestroy = function () {
        // this.socketService.unsubscribe(this.socketService.getSystemFailureTopic());
        // this.socketService.unsubscribe(this.socketService.getSystemStatsTopic());
        window.clearTimeout(this.updateStatsTimeoutId);
    };
    Dashboard.prototype.testDiagram = function () {
        var _this = this;
        var removedNodes = new Set();
        // randomly change & remove nodes & links
        this.systemStats.nodes = this.systemStats.nodes.filter(function (node) {
            if (Math.random() > 0.2) {
                node.rpm = [Math.round(Math.random() * 100000), Math.round(Math.random() * 100000), Math.round(Math.random() * 100000)];
                node.fpm = [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)];
                return true;
            }
            else {
                removedNodes.add(node.name);
                return false;
            }
        });
        this.systemStats.links = this.systemStats.links.filter(function (link) {
            if (!removedNodes.has(link.source) && !removedNodes.has(link.target)) {
                link.rpm = [Math.round(Math.random() * 100000), Math.round(Math.random() * 100000), Math.round(Math.random() * 100000)];
                link.fpm = [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)];
                return true;
            }
            else {
                return false;
            }
        });
        var _loop_1 = function (i) {
            if (Math.random() < 0.8)
                return "continue";
            var nodeName = "test-" + Math.round(Math.random() * 1000);
            this_1.systemStats.nodes.forEach(function (node) {
                if (Math.random() < 0.5) {
                    _this.systemStats.links.push({
                        source: nodeName,
                        target: node.name,
                        rpm: [Math.round(Math.random() * 100000), Math.round(Math.random() * 100000), Math.round(Math.random() * 100000)],
                        fpm: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                    });
                }
            });
            this_1.systemStats.nodes.push({
                name: nodeName,
                rpm: [Math.round(Math.random() * 100000), Math.round(Math.random() * 100000), Math.round(Math.random() * 100000)],
                fpm: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
            });
        };
        var this_1 = this;
        // randomly add nodes & links
        for (var i = 0; i < 5; i++) {
            _loop_1(i);
        }
        this.diagram.update();
    };
    Dashboard.prototype.fromVo = function (vo) {
        var result = {
            boundingBoxes: new Map(),
            nodeBoxMap: new Map()
        };
        vo.boxes.forEach(function (box, id) {
            result.boundingBoxes.set(id, new __WEBPACK_IMPORTED_MODULE_8__diagram_systems_rpc_graph_graph_component__["a" /* BoundingBox */](box.x, box.y, box.width, box.height));
        });
        vo.nodes.forEach(function (boxId, name) {
            result.nodeBoxMap.set(name, boxId);
        });
        return result;
    };
    Dashboard.prototype.showDetail = function (event) {
        if (event.eventType === "stats") {
            this.detailState = "shown";
            this.systemDetail.showDetail(event.system);
        }
        else {
            var begin = void 0;
            var end = void 0;
            var now = __WEBPACK_IMPORTED_MODULE_3_moment__();
            if (event.eventType === "stats_1h") {
                end = now.unix();
                begin = end - 3600;
            }
            else if (event.eventType === "stats_1d") {
                now.hours(0);
                now.minutes(0);
                now.seconds(0);
                now.milliseconds(0);
                begin = now.unix();
                now.days(now.days() + 1);
                end = now.unix();
            }
            else {
                return;
            }
            this.router.navigate(["history"], {
                queryParams: {
                    system: event.system,
                    begin: begin,
                    end: end
                }
            });
        }
    };
    Dashboard.prototype.hideDetail = function () {
        this.detailState = "hidden";
    };
    Dashboard.prototype.animationDone = function (event) {
        if (event.toState === "hidden")
            this.systemDetail.clearDetail();
        else
            this.systemDetail.drawDiagram();
    };
    return Dashboard;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("failureRoller"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__failure_roller_failure_roller_component__["a" /* FailureRoller */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__failure_roller_failure_roller_component__["a" /* FailureRoller */]) === "function" && _a || Object)
], Dashboard.prototype, "failureRoller", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("systemSummary"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__system_summary_system_summary_component__["a" /* SystemSummary */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__system_summary_system_summary_component__["a" /* SystemSummary */]) === "function" && _b || Object)
], Dashboard.prototype, "systemSummary", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("systemDetail"),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__system_detail_system_detail_component__["a" /* SystemDetail */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__system_detail_system_detail_component__["a" /* SystemDetail */]) === "function" && _c || Object)
], Dashboard.prototype, "systemDetail", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("diagram"),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__diagram_systems_rpc_graph_graph_component__["b" /* SystemsRpcGraph */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__diagram_systems_rpc_graph_graph_component__["b" /* SystemsRpcGraph */]) === "function" && _d || Object)
], Dashboard.prototype, "diagram", void 0);
Dashboard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "ow-dashboard",
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.template.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.style.scss")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["k" /* trigger */])("detailState", [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* state */])("hidden", Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({
                    display: "none",
                    opacity: 0,
                    transform: "scale(0.6)"
                })),
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* state */])("shown", Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({
                    display: "block",
                    opacity: 1,
                    transform: "scale(1)"
                })),
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* transition */])("hidden => shown", [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ display: "block" }),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])("200ms ease-in")
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* transition */])("shown => hidden", Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])("200ms ease-out"))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__common_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__common_user_user_service__["a" /* UserService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_10__common_system_stats_system_stats_service__["a" /* SystemStatsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__common_system_stats_system_stats_service__["a" /* SystemStatsService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_11__common_system_failure_system_failure_service__["a" /* SystemFailureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__common_system_failure_system_failure_service__["a" /* SystemFailureService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_12__common_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__common_socket_service__["a" /* SocketService */]) === "function" && _k || Object])
], Dashboard);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_common_module__ = __webpack_require__("../../../../../src/app/common/common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__diagram_diagram_module__ = __webpack_require__("../../../../../src/app/diagram/diagram.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_system_info_system_info_service__ = __webpack_require__("../../../../../src/app/common/system-info/system-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_system_stats_system_stats_service__ = __webpack_require__("../../../../../src/app/common/system-stats/system-stats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_system_failure_system_failure_service__ = __webpack_require__("../../../../../src/app/common/system-failure/system-failure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__system_detail_system_detail_component__ = __webpack_require__("../../../../../src/app/dashboard/system-detail/system-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__system_summary_system_summary_component__ = __webpack_require__("../../../../../src/app/dashboard/system-summary/system-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__failure_roller_failure_roller_component__ = __webpack_require__("../../../../../src/app/dashboard/failure-roller/failure-roller.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_4__common_common_module__["a" /* OverwatchCommonModule */], __WEBPACK_IMPORTED_MODULE_5__diagram_diagram_module__["a" /* DiagramModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_9__dashboard_component__["a" /* Dashboard */], __WEBPACK_IMPORTED_MODULE_10__system_detail_system_detail_component__["a" /* SystemDetail */], __WEBPACK_IMPORTED_MODULE_11__system_summary_system_summary_component__["a" /* SystemSummary */], __WEBPACK_IMPORTED_MODULE_12__failure_roller_failure_roller_component__["a" /* FailureRoller */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_10__system_detail_system_detail_component__["a" /* SystemDetail */]],
        exports: [__WEBPACK_IMPORTED_MODULE_9__dashboard_component__["a" /* Dashboard */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__common_system_info_system_info_service__["a" /* SystemInfoService */], __WEBPACK_IMPORTED_MODULE_7__common_system_stats_system_stats_service__["a" /* SystemStatsService */], __WEBPACK_IMPORTED_MODULE_8__common_system_failure_system_failure_service__["a" /* SystemFailureService */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n\n@-webkit-keyframes flash {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes flash {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.loading {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.diagram-wrapper {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.overlay {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n\n.layout-select {\n  margin-top: 5em;\n  margin-left: 5em; }\n  .layout-select .padding {\n    display: inline-block;\n    width: 15em; }\n\n.system-summary, .log-roller {\n  position: absolute;\n  width: 20em;\n  height: 100%;\n  top: 0;\n  padding-top: 10em; }\n\n.system-summary {\n  left: 0; }\n\n.log-roller {\n  right: 0; }\n\n@media screen and (max-width: 1000px) {\n  .hidden-md {\n    display: none !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\" *ngIf=\"systemStats === null\">\n  <md-spinner></md-spinner>\n</div>\n<div class=\"diagram-wrapper\" *ngIf=\"systemStats !== null\">\n  <ow-graph-sys-rpc #diagram [data]=\"systemStats\" [layout]=\"currentLayout\" (systemSelected)=\"showDetail($event)\"></ow-graph-sys-rpc>\n</div>\n\n<div class=\"system-summary hidden-md\">\n  <ow-system-summary #systemSummary (systemSelected)=\"showDetail({ system: $event, eventType: 'stats' })\"></ow-system-summary>\n</div>\n<div class=\"log-roller hidden-md\">\n  <ow-failure-roller #failureRoller (systemSelected)=\"showDetail({ system: $event, eventType: 'stats' })\"></ow-failure-roller>\n</div>\n\n<div class=\"layout-select\">\n  <div class=\"padding hidden-md\"></div>\n  <md-select placeholder=\"Layout\" [(ngModel)]=\"selectedLayout\" name=\"layout\" [formControl]=\"layoutInputCtrl\">\n    <md-option value=\"all\">All</md-option>\n    <md-option *ngFor=\"let layout of layouts\" [value]=\"layout\">\n      {{ layout.name }}\n    </md-option>\n  </md-select>\n</div>\n\n<div class=\"overlay\" [@detailState]=\"detailState\" (@detailState.done)=\"animationDone($event)\">\n  <ow-system-detail #systemDetail (exit)=\"hideDetail()\"></ow-system-detail>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/failure-roller/failure-roller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FailureRoller; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FailureRoller = (function () {
    function FailureRoller() {
        var _this = this;
        this.systemSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.failureRows = [];
        this.failureLookup = new Map();
        this.maxLogRows = 20;
        this.addLogItem = function (failure) {
            var id = _this.failureHash(failure);
            if (_this.failureLookup.has(id)) {
                var rowVo = _this.failureLookup.get(id);
                rowVo.failure.count++;
                rowVo.state = rowVo.state === "idle" ? "changed" : "idle";
            }
            else {
                var vo = {
                    time: failure.time,
                    system: failure.system,
                    status: failure.status,
                    count: 1
                };
                var newRow = {
                    id: id,
                    failure: vo,
                    state: "idle"
                };
                _this.failureLookup.set(id, newRow);
                _this.failureRows.unshift(newRow);
                _this.failureRows.sort(function (a, b) { return b.failure.time - a.failure.time; });
                if (_this.failureRows.length > _this.maxLogRows) {
                    var removed = _this.failureRows.pop();
                    _this.failureLookup.delete(removed.id);
                }
            }
        };
    }
    FailureRoller.prototype.ngOnInit = function () {
    };
    FailureRoller.prototype.onSystemSelected = function (system) {
        this.systemSelected.emit(system);
    };
    FailureRoller.prototype.failureHash = function (failure) {
        var time = failure.time;
        time = time - time % 60;
        return time + "_" + failure.system + "_" + failure.status;
    };
    return FailureRoller;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], FailureRoller.prototype, "systemSelected", void 0);
FailureRoller = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "ow-failure-roller",
        template: __webpack_require__("../../../../../src/app/dashboard/failure-roller/failure-roller.template.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/failure-roller/failure-roller.style.scss")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])("rowState", [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])("idle", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: "translateX(0)" })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])("changed", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: "translateX(0)" })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])("void => *", [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, transform: "translateX(-100%)" }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("0.2s ease-out")
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])("idle <=> changed", [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(1000, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0.3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0.3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1 })
                    ]))
                ])
            ])
        ]
    })
], FailureRoller);

//# sourceMappingURL=failure-roller.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/failure-roller/failure-roller.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  margin-bottom: 0;\n  font-weight: 100;\n  font-size: 1.3em;\n  text-align: center; }\n\nhr {\n  border: none;\n  border-top: 1px solid rgba(255, 255, 255, 0.1); }\n\n.log-row {\n  overflow: hidden;\n  line-height: 1.5em;\n  cursor: pointer; }\n  .log-row:hover {\n    background-color: rgba(255, 255, 255, 0.3); }\n  .log-row > div {\n    overflow: hidden;\n    float: left;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .log-row .date {\n    width: 2.5em; }\n  .log-row .system {\n    width: 5em; }\n  .log-row .status {\n    width: 10em;\n    padding: 0 .5em;\n    color: #f44;\n    font-weight: bold; }\n  .log-row .count {\n    width: 2.5em;\n    text-align: right;\n    padding-right: .5em;\n    color: #f70; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/failure-roller/failure-roller.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main none-selectable\">\n  <h1 class=\"title\">Failure Log</h1>\n  <hr>\n  <div class=\"log-row\"\n    (click)=\"onSystemSelected(row.failure.system)\"\n    *ngFor=\"let row of failureRows; let i = index; trackBy: row?.id\"\n    [@rowState]=\"row.state\"\n  >\n    <div class=\"date\">{{ row.failure.time | timestamp: 'time' }}</div>\n    <div class=\"system\">{{ row.failure.system }}</div>\n    <div class=\"status\">{{ row.failure.status }}</div>\n    <div class=\"count\">{{ row.failure.count >= 1000 ? \"999+\" : row.failure.count }}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/system-detail/system-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_system_info_system_info_service__ = __webpack_require__("../../../../../src/app/common/system-info/system-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_system_failure_system_failure_service__ = __webpack_require__("../../../../../src/app/common/system-failure/system-failure.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SystemDetail = (function () {
    function SystemDetail(systemInfoService, systemFailureService) {
        this.systemInfoService = systemInfoService;
        this.systemFailureService = systemFailureService;
        this.exit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.requestsData = null;
        this.requestsDataDelayedHolder = null;
        this.delayNeeded = false;
    }
    SystemDetail.prototype.ngOnInit = function () {
        this.clearData();
    };
    SystemDetail.prototype.clearData = function () {
        this.systemInfo = {
            name: "N/A",
            rpm: 0,
            fpm: 0,
            hosts: ["N/A"]
        };
        this.requestsData = null;
        this.logItems = null;
    };
    SystemDetail.prototype.doExit = function (exit) {
        this.exit.emit();
    };
    SystemDetail.prototype.nodeSum = function (nodes) {
        var result = {
            rpm: 0,
            fpm: 0,
            hosts: []
        };
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            result.rpm += node.rpm;
            result.fpm += node.fpm;
            if (node.name !== "" && result.hosts.indexOf(node.name) < 0)
                result.hosts.push(node.name);
        }
        if (result.hosts.length === 0)
            result.hosts.push("N/A");
        return result;
    };
    SystemDetail.prototype.showDetail = function (systemName) {
        var _this = this;
        this.delayNeeded = true;
        this.systemName = systemName;
        if (systemName === null)
            return;
        var systemInfo = {
            name: systemName,
            rpm: 0,
            fpm: 0,
            hosts: []
        };
        var now = Math.round(new Date().getTime() / 1000);
        this.systemInfoService.getSystemInfoDetail(systemName, now - 3600, now)
            .then(function (data) {
            var requestsData = [];
            if (data.length >= 2) {
                var latest = 0;
                var latestSum = void 0;
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    var sum = _this.nodeSum(item.nodes);
                    requestsData.push({
                        time: item.time,
                        rpm: sum.rpm,
                        fpm: sum.fpm
                    });
                    if (item.time > latest) {
                        latest = item.time;
                        latestSum = sum;
                    }
                }
                systemInfo.rpm = latestSum.rpm;
                systemInfo.fpm = latestSum.fpm;
                systemInfo.hosts = latestSum.hosts;
                _this.systemInfo = systemInfo;
            }
            if (_this.delayNeeded)
                _this.requestsDataDelayedHolder = requestsData;
            else
                _this.requestsData = requestsData;
        });
        this.systemFailureService.getSystemFailure({
            system: systemName,
            begin: now - 3600,
            end: now
        })
            .then(function (data) {
            _this.logItems = data;
        });
    };
    SystemDetail.prototype.clearDetail = function () {
        this.clearData();
        this.requestsData = null;
    };
    SystemDetail.prototype.drawDiagram = function () {
        this.requestsData = this.requestsDataDelayedHolder;
        this.requestsDataDelayedHolder = null;
        this.delayNeeded = false;
    };
    return SystemDetail;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SystemDetail.prototype, "exit", void 0);
SystemDetail = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "ow-system-detail",
        template: __webpack_require__("../../../../../src/app/dashboard/system-detail/system-detail.template.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/system-detail/system-detail.style.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_system_info_system_info_service__["a" /* SystemInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_system_info_system_info_service__["a" /* SystemInfoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_system_failure_system_failure_service__["a" /* SystemFailureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_system_failure_system_failure_service__["a" /* SystemFailureService */]) === "function" && _b || Object])
], SystemDetail);

var _a, _b;
//# sourceMappingURL=system-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/system-detail/system-detail.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .main .card {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    overflow-x: hidden;\n    overflow-y: auto;\n    width: 800px;\n    height: 80%;\n    padding: 3em;\n    background-color: rgba(40, 44, 52, 0.8);\n    border: 1px solid #aaa;\n    border-radius: 20px;\n    box-shadow: 0 0 15px #aaa;\n    font-family: Monaco, Consolas, \"Courier new\", monospace; }\n    .main .card h1 {\n      font-family: 'Myriad Set Pro';\n      font-size: 2.5em; }\n    .main .card hr {\n      clear: both;\n      border: none;\n      border-top: 1px solid rgba(255, 255, 255, 0.5); }\n    .main .card .system-info {\n      font-size: .8em; }\n      .main .card .system-info dt {\n        display: inline-block;\n        float: left;\n        clear: left;\n        width: 10em;\n        line-height: 1.5em;\n        color: #aaa; }\n      .main .card .system-info dd {\n        margin-left: 10em;\n        line-height: 1.5em; }\n    .main .card .failure-log {\n      text-align: center; }\n      .main .card .failure-log h1 {\n        color: #aaa;\n        font-size: 2em; }\n      .main .card .failure-log .table-wrapper {\n        overflow-x: auto; }\n        .main .card .failure-log .table-wrapper table {\n          width: 100%;\n          text-align: left;\n          font-size: .8em; }\n          .main .card .failure-log .table-wrapper table thead {\n            color: #aaa;\n            line-height: 1.5em; }\n          .main .card .failure-log .table-wrapper table td, .main .card .failure-log .table-wrapper table th {\n            padding: .2em .5em;\n            white-space: nowrap; }\n  .main .chart-wrapper {\n    height: 300px; }\n    .main .chart-wrapper .loading {\n      text-align: center; }\n    .main .chart-wrapper > div {\n      height: 300px; }\n    .main .chart-wrapper ow-chart-rq-t {\n      height: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/system-detail/system-detail.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" (click)=\"doExit()\">\n  <div class=\"card no-scroll-bar\" (click)=\"$event.stopPropagation()\">\n    <h1>{{ systemName }}</h1>\n    <dl class=\"system-info\">\n      <dt>Requests</dt>\n      <dd>{{ systemInfo.rpm | number:'1.0' }} rpm</dd>\n      <dt>Failures</dt>\n      <dd>{{ systemInfo.fpm | number:'1.0' }} rpm</dd>\n      <dt>Success Rate</dt>\n      <dd>{{ (systemInfo.rpm - systemInfo.fpm) / systemInfo.rpm | percent:'1.2-2' }}</dd>\n      <dt>Hosts</dt>\n      <dd>{{ systemInfo.hosts | join: ' ' }}</dd>\n    </dl>\n    <hr>\n    <div class=\"chart-wrapper\">\n      <div class=\"loading\" *ngIf=\"requestsData === null\">Loading...</div>\n      <div class=\"loading\" *ngIf=\"requestsData !== null && requestsData.length === 0\">No Data</div>\n      <div *ngIf=\"requestsData !== null && requestsData.length > 0\">\n        <ow-chart-rq-t #chart [data]=\"requestsData\" height=\"300\"></ow-chart-rq-t>\n      </div>\n    </div>\n    <hr>\n    <div class=\"failure-log\">\n      <h1>Failure Log</h1>\n      <div *ngIf=\"logItems === null\">Loading...</div>\n      <div *ngIf=\"logItems !== null && logItems.length === 0\">No Data</div>\n      <div *ngIf=\"logItems !== null && logItems.length > 0\" class=\"table-wrapper\">\n        <table>\n          <thead>\n            <tr>\n              <th>Time</th>\n              <th>Status</th>\n              <th>Host</th>\n              <th>URL</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let logItem of logItems\">\n              <td>{{ logItem.time | timestamp: 'time' }}</td>\n              <td>{{ logItem.status }}</td>\n              <td>{{ logItem.host }}</td>\n              <td>{{ logItem.url }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/system-summary/system-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemSummary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SystemSummary = (function () {
    function SystemSummary() {
        this.systemSummaryItems = [];
        this.systemSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SystemSummary.prototype.ngOnInit = function () { };
    SystemSummary.prototype.onSystemSelected = function (system) {
        this.systemSelected.emit(system);
    };
    SystemSummary.prototype.sortItems = function (systemSummaryItems) {
        systemSummaryItems.sort(function (a, b) {
            if (a.priority[0] !== b.priority[0])
                return a.priority[0] - b.priority[0];
            else
                return b.priority[1] - a.priority[1];
        });
    };
    SystemSummary.prototype.summarize = function (systemInfo) {
        var systemSummaryItems = [];
        for (var _i = 0, _a = systemInfo.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            if (node.fpm[0] + node.fpm[1] + node.fpm[2] === 0)
                continue;
            var system = node.name;
            var summary = void 0;
            var priority = void 0;
            if (node.fpm[0] > 0) {
                summary = "now";
                priority = [0, node.fpm[0]];
            }
            else if (node.fpm[1] > 0) {
                summary = "in 5min";
                priority = [1, node.fpm[1]];
            }
            else if (node.fpm[2] > 0) {
                summary = "in 15min";
                priority = [2, node.fpm[2]];
            }
            systemSummaryItems.push({
                system: system,
                summary: "failures " + summary,
                priority: priority
            });
        }
        this.sortItems(systemSummaryItems);
        this.systemSummaryItems = systemSummaryItems;
    };
    return SystemSummary;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SystemSummary.prototype, "systemSelected", void 0);
SystemSummary = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "ow-system-summary",
        template: __webpack_require__("../../../../../src/app/dashboard/system-summary/system-summary.template.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/system-summary/system-summary.style.scss")]
    })
], SystemSummary);

//# sourceMappingURL=system-summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/system-summary/system-summary.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  margin-bottom: 0;\n  font-weight: 100;\n  font-size: 1.3em;\n  text-align: center; }\n\nhr {\n  border: none;\n  border-top: 1px solid rgba(255, 255, 255, 0.1); }\n\n.summary-wrapper {\n  text-align: center; }\n  .summary-wrapper .system-go {\n    color: #7f0;\n    font-size: 2em;\n    font-weight: bold;\n    line-height: 2em; }\n  .summary-wrapper .summary-item {\n    overflow: hidden;\n    cursor: pointer;\n    line-height: 1.5em;\n    padding-left: .5em;\n    padding-right: .5em; }\n    .summary-wrapper .summary-item:hover {\n      background-color: rgba(255, 255, 255, 0.3); }\n    .summary-wrapper .summary-item .system {\n      float: left;\n      overflow: hidden;\n      width: 10em;\n      word-wrap: break-word;\n      word-break: break-all;\n      white-space: nowrap;\n      text-align: right;\n      text-overflow: ellipsis; }\n    .summary-wrapper .summary-item .summary {\n      float: left;\n      width: 9em;\n      padding-left: .5em;\n      color: #f70;\n      font-weight: bold;\n      white-space: nowrap;\n      text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/system-summary/system-summary.template.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\">System Summary</h1>\n<hr>\n<div class=\"summary-wrapper\">\n  <div class=\"system-go\" *ngIf=\"systemSummaryItems !== null && systemSummaryItems.length === 0\">\n    All Systems GO\n  </div>\n  <div class=\"summary-item\" *ngFor=\"let summary of systemSummaryItems || []\" (click)=\"onSystemSelected(summary.system)\">\n    <div class=\"system\">{{ summary.system }}</div>\n    <div class=\"summary\">{{ summary.summary }}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/diagram/diagram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diagram; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Diagram = (function () {
    function Diagram() {
        this.data = null;
        this.drawOnInit = "true";
        this.widthInput = null;
        this.heightInput = null;
        this.updateCancelled = false;
    }
    Diagram.prototype.ngOnInit = function () {
        var _this = this;
        var el = this.canvasElement.nativeElement;
        this.canvas = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["f" /* select */](el);
        window.onresize = function () {
            _this.calcCanvasSize();
            _this.onResizeDiagram();
        };
        if (this.drawOnInit !== "false") {
            this.onDrawDiagram();
            this.updateDiagram();
        }
    };
    Diagram.prototype.calcCanvasSize = function () {
        var el = this.canvasElement.nativeElement;
        var boundingBox = el.getBoundingClientRect();
        this.width = this.widthInput || boundingBox.width;
        this.height = this.heightInput || boundingBox.height;
    };
    Diagram.prototype.drawLine = function (target, x1, y1, x2, y2, attr, percentage) {
        var line = target.append("line")
            .attr("x1", percentage === true ? x1 + "%" : x1)
            .attr("x2", percentage === true ? x2 + "%" : x2)
            .attr("y1", percentage === true ? y1 + "%" : y1)
            .attr("y2", percentage === true ? y2 + "%" : y2)
            .attr("stroke-width", 1).attr("stroke", "red");
        if (attr)
            attr.forEach(function (value, key) { return line.attr(key, value); });
        return line;
    };
    Diagram.prototype.drawBox = function (target, x1, y1, x2, y2, attr, percentage) {
        var group = target.append("g");
        this.drawLine(group, x1, y1, x2, y1, attr, percentage);
        this.drawLine(group, x2, y1, x2, y2, attr, percentage);
        this.drawLine(group, x2, y2, x1, y2, attr, percentage);
        this.drawLine(group, x1, y2, x1, y1, attr, percentage);
        return group;
    };
    Diagram.prototype.clearDiagram = function () {
        this.canvas.selectAll("*").remove();
    };
    Diagram.prototype.onDrawDiagram = function (cross) {
        // draw a placeholder by default
        this.calcCanvasSize();
        var attr = new Map();
        attr.set("stroke", "red");
        var border = this.drawBox(this.canvas, 0, 0, 100, 100, attr, true);
        if (cross !== false) {
            this.drawLine(border, 0, 0, 100, 100, attr, true);
            this.drawLine(border, 0, 100, 100, 0, attr, true);
        }
    };
    Diagram.prototype.updateDiagram = function () {
        if (this.data)
            this.onUpdateDiagram();
    };
    Diagram.prototype.update = function () {
        this.onUpdateDiagram();
    };
    return Diagram;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], Diagram.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Diagram.prototype, "drawOnInit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("width"),
    __metadata("design:type", Number)
], Diagram.prototype, "widthInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("height"),
    __metadata("design:type", Number)
], Diagram.prototype, "heightInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("canvas"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], Diagram.prototype, "canvasElement", void 0);
Diagram = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({})
], Diagram);

var _a;
//# sourceMappingURL=diagram.component.js.map

/***/ }),

/***/ "../../../../../src/app/diagram/diagram.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common_module__ = __webpack_require__("../../../../../src/app/common/common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requests_time_chart_chart_component__ = __webpack_require__("../../../../../src/app/diagram/requests-time-chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__systems_rpc_graph_graph_component__ = __webpack_require__("../../../../../src/app/diagram/systems-rpc-graph/graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_editor_layout_editor_component__ = __webpack_require__("../../../../../src/app/diagram/layout-editor/layout-editor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DiagramModule = (function () {
    function DiagramModule() {
    }
    return DiagramModule;
}());
DiagramModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__common_common_module__["a" /* OverwatchCommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__requests_time_chart_chart_component__["a" /* RequestsTimeChart */], __WEBPACK_IMPORTED_MODULE_4__systems_rpc_graph_graph_component__["b" /* SystemsRpcGraph */], __WEBPACK_IMPORTED_MODULE_5__layout_editor_layout_editor_component__["a" /* LayoutEditor */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__requests_time_chart_chart_component__["a" /* RequestsTimeChart */], __WEBPACK_IMPORTED_MODULE_4__systems_rpc_graph_graph_component__["b" /* SystemsRpcGraph */], __WEBPACK_IMPORTED_MODULE_5__layout_editor_layout_editor_component__["a" /* LayoutEditor */]]
    })
], DiagramModule);

//# sourceMappingURL=diagram.module.js.map

/***/ }),

/***/ "../../../../../src/app/diagram/diagram.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  width: 100%; }\n\nsvg {\n  width: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/diagram/diagram.template.html":
/***/ (function(module, exports) {

module.exports = "<svg #canvas></svg>\n"

/***/ }),

/***/ "../../../../../src/app/diagram/layout-editor/layout-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__diagram_component__ = __webpack_require__("../../../../../src/app/diagram/diagram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayoutEditor = (function (_super) {
    __extends(LayoutEditor, _super);
    function LayoutEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeRemoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this.boxRemoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this.boxVo = new Array();
        _this.nodeVo = new Array();
        _this.startPos = null;
        _this.redrawNode = null;
        _this.action = null;
        _this.color = __WEBPACK_IMPORTED_MODULE_3_d3_scale__["b" /* scaleOrdinal */]().range(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["d" /* schemeCategory20 */]);
        _this.initBtnDel = function (d) {
            d.append("circle")
                .attr("cx", 0).attr("cy", 0)
                .attr("r", 5)
                .attr("fill", "red")
                .attr("stroke", "none");
            d.append("text")
                .attr("text-anchor", "middle")
                .attr("alignment-baseline", "central")
                .attr("fill", "white")
                .attr("font-size", 16)
                .text("-");
            d.style("cursor", "pointer");
        };
        _this.initBox = function (root) {
            root.append("rect")
                .attr("x", function (d) { return 0; })
                .attr("y", function (d) { return 0; })
                .attr("width", function (d) { return d.width; })
                .attr("height", function (d) { return d.height; })
                .attr("stroke", function (d, i) { return _this.color(i.toString()); })
                .attr("stroke-width", 2)
                .attr("fill", "transparent")
                .style("cursor", "move");
            root.on("mousedown", function (d, i, g) {
                _this.action = "drag";
                _this.redrawNode = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["f" /* select */](g[i]);
                var pos = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["d" /* mouse */](_this.redrawNode.node());
                _this.startPos = { x: pos[0], y: pos[1] };
            });
            var btnScale = root.append("circle")
                .attr("cx", function (d) { return d.width; })
                .attr("cy", function (d) { return d.height; })
                .attr("r", 5)
                .attr("stroke", "none")
                .attr("fill", function (d, i) { return _this.color(i.toString()); })
                .style("cursor", "nwse-resize");
            btnScale.on("mousedown", function (d, i, g) {
                var event = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["b" /* event */];
                event.stopPropagation();
                _this.action = "scale";
                var node = g[i].parentElement;
                _this.redrawNode = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["f" /* select */](node);
            });
            var btnDel = root.append("g")
                .attr("class", "btn-del")
                .attr("transform", function (d) { return "translate(" + d.width + ", 0)"; })
                .call(_this.initBtnDel);
            btnDel.on("click", function (d) { return _this.boxRemoved.emit(d.id); });
        };
        _this.initNode = function (root) {
            root.append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", 20)
                .attr("fill", "#0af")
                .attr("stroke", "none");
            root.append("text")
                .attr("text-anchor", "middle")
                .attr("alignment-baseline", "central")
                .attr("fill", "white")
                .attr("font-size", 16)
                .text(function (d) { return d.name; });
            var btnDel = root.append("g")
                .attr("class", "btn-del")
                .attr("transform", "translate(" + 20 / Math.sqrt(2) + ", " + -20 / Math.sqrt(2) + ")")
                .call(_this.initBtnDel);
            btnDel.on("click", function (d) { return _this.nodeRemoved.emit(d.name); });
            root.style("cursor", "move");
            root.on("mousedown", function (d, i, g) {
                _this.action = "drag";
                _this.redrawNode = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["f" /* select */](g[i]);
                var pos = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["d" /* mouse */](_this.redrawNode.node());
                _this.startPos = { x: pos[0], y: pos[1] };
            });
        };
        return _this;
    }
    LayoutEditor.prototype.addNode = function (name, boxId) {
        var x = 100;
        var y = 100;
        var box = this.boxVo.find(function (b) { return boxId === b.id; });
        if (box !== undefined) {
            x = box.x + box.width / 3 + box.width / 3 * Math.random();
            y = box.y + box.height / 3 + box.height / 3 * Math.random();
        }
        this.nodeVo.push({
            name: name,
            boxId: boxId,
            x: x,
            y: y
        });
        this.onUpdateDiagram();
    };
    LayoutEditor.prototype.removeNode = function (name) {
        this.nodeVo = this.nodeVo.filter(function (node) { return node.name !== name; });
        this.onUpdateDiagram();
    };
    LayoutEditor.prototype.addBox = function (id, x, y, width, height) {
        this.boxVo.push({
            id: id,
            width: width,
            height: height,
            x: x,
            y: y
        });
        this.onUpdateDiagram();
    };
    LayoutEditor.prototype.removeBox = function (boxId) {
        this.boxVo = this.boxVo.filter(function (box) { return box.id !== boxId; });
        this.onUpdateDiagram();
    };
    LayoutEditor.prototype.save = function () {
        var layoutVo = {
            boxes: new Map(),
            nodes: new Map()
        };
        this.boxes.selectAll(".box")
            .each(function (d) { return layoutVo.boxes.set(d.id, d); });
        this.nodes.selectAll(".node")
            .each(function (d) {
            var boxId = "";
            layoutVo.boxes.forEach(function (box, id) {
                var isInside = d.x > box.x
                    && d.x < box.x + box.width
                    && d.y > box.y
                    && d.y < box.y + box.height;
                if (d.x > box.x
                    && d.x < box.x + box.width
                    && d.y > box.y
                    && d.y < box.y + box.height)
                    boxId = id;
            });
            layoutVo.nodes.set(d.name, boxId);
        });
        return layoutVo;
    };
    LayoutEditor.prototype.onDrawDiagram = function () {
        var _this = this;
        this.boxes = this.canvas.append("g")
            .attr("class", "boxes");
        this.nodes = this.canvas.append("g")
            .attr("class", "nodes");
        this.canvas
            .on("mousemove", function () {
            if (_this.action === null)
                return;
            var vo = _this.redrawNode.data()[0];
            if (_this.action === "drag") {
                var pos = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["d" /* mouse */](_this.canvas.node());
                pos[0] -= _this.startPos.x;
                pos[1] -= _this.startPos.y;
                vo.x = pos[0] > 0 ? pos[0] : 0;
                vo.y = pos[1] > 0 ? pos[1] : 0;
                _this.redrawNode
                    .attr("transform", "translate(" + vo.x + ", " + vo.y + ")");
            }
            else if (_this.action === "scale") {
                var pos = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["d" /* mouse */](_this.redrawNode.node());
                vo.width = pos[0] > 30 ? pos[0] : 30;
                vo.height = pos[1] > 30 ? pos[1] : 30;
                _this.redrawNode.select("rect")
                    .attr("width", vo.width)
                    .attr("height", vo.height);
                _this.redrawNode.select("circle")
                    .attr("cx", vo.width)
                    .attr("cy", vo.height);
                _this.redrawNode.select(".btn-del")
                    .attr("transform", "translate(" + vo.width + ", 0)");
            }
        })
            .on("mouseup", function () {
            _this.action = null;
            _this.redrawNode = null;
        });
    };
    LayoutEditor.prototype.onUpdateDiagram = function () {
        var boxes = this.boxes.selectAll(".box")
            .data(this.boxVo, function (d) { return d.id; });
        boxes.enter().append("g")
            .attr("class", "box")
            .call(this.initBox)
            .merge(boxes)
            .attr("transform", function (d) { return "translate(" + d.x + ", " + d.y + ")"; });
        boxes.exit().remove();
        var nodes = this.nodes.selectAll(".node")
            .data(this.nodeVo, function (d) { return d.name; });
        nodes.enter().append("g")
            .attr("class", "node")
            .call(this.initNode)
            .merge(nodes)
            .attr("transform", function (d) { return "translate(" + d.x + ", " + d.y + ")"; });
        nodes.exit().remove();
    };
    LayoutEditor.prototype.onResizeDiagram = function () {
        // TODO
    };
    LayoutEditor.prototype.clear = function () {
        if (this.boxes)
            this.boxes.selectAll(".box").remove();
        if (this.nodes)
            this.nodes.selectAll(".node").remove();
        this.boxVo = new Array();
        this.nodeVo = new Array();
    };
    return LayoutEditor;
}(__WEBPACK_IMPORTED_MODULE_1__diagram_component__["a" /* Diagram */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], LayoutEditor.prototype, "nodeRemoved", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], LayoutEditor.prototype, "boxRemoved", void 0);
LayoutEditor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "ow-layout-editor",
        template: __webpack_require__("../../../../../src/app/diagram/diagram.template.html"),
        styles: [__webpack_require__("../../../../../src/app/diagram/diagram.style.scss")]
    })
], LayoutEditor);

var _a, _b;
//# sourceMappingURL=layout-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/diagram/requests-time-chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsTimeChart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__diagram_component__ = __webpack_require__("../../../../../src/app/diagram/diagram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_axis__ = __webpack_require__("../../../../d3-axis/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3_color__ = __webpack_require__("../../../../d3-color/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3_ease__ = __webpack_require__("../../../../d3-ease/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_d3_time__ = __webpack_require__("../../../../d3-time/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_d3_shape__ = __webpack_require__("../../../../d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_d3_transition__ = __webpack_require__("../../../../d3-transition/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PlotArea = (function () {
    function PlotArea(canvas, top, right, bottom, left) {
        this._canvas = canvas;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        this._width = this.right - this.left;
        this._height = this.bottom - this.top;
        this._area = canvas.append("g").attr("transform", "translate(" + left + ", " + top + ")");
    }
    Object.defineProperty(PlotArea.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlotArea.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlotArea.prototype, "area", {
        get: function () {
            return this._area;
        },
        enumerable: true,
        configurable: true
    });
    return PlotArea;
}());
var RequestsTimeChart = (function (_super) {
    __extends(RequestsTimeChart, _super);
    function RequestsTimeChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultRpmPlotColor = "#39c461";
        _this.defaultFpmPlotColor = "#df534f";
        _this.timeSortedData = [];
        _this.highlightedIdx = -1;
        _this.redrawDelay = -1;
        return _this;
    }
    RequestsTimeChart.prototype.ngOnChanges = function (changes) {
        if (changes.data && !changes.data.isFirstChange) {
            this.data = changes.data.currentValue;
            this.update();
        }
    };
    // for tests
    RequestsTimeChart.prototype.createDataStub = function (len) {
        if (len === undefined)
            len = 10;
        var data = [];
        for (var i = 0; i < len; i++) {
            data.push({
                time: 1491004800 + 60 * i,
                rpm: Math.round(Math.random() * 1000),
                fpm: Math.round(Math.random() * 100)
            });
        }
        this.data = data;
    };
    RequestsTimeChart.prototype.onDrawDiagram = function () {
        this.calcCanvasSize();
        this.clearDiagram();
        // this.createDataStub(500 + Math.round(Math.random() * 500));
        if (!this.data || this.data.length === 0)
            return;
        var margin = {
            left: 25,
            right: 25,
            top: 20,
            bottom: 20
        };
        var legendHeight = 30;
        var legendArea = new PlotArea(this.canvas, margin.top, this.width - margin.right, margin.top + legendHeight, margin.left);
        var plotArea = new PlotArea(this.canvas, margin.top + legendArea.height, this.width - margin.right, this.height - margin.bottom, margin.left);
        var timeSortedData = [];
        this.data.forEach(function (item) { return timeSortedData.push(item); });
        timeSortedData.sort(function (a, b) { return a.time - b.time; });
        this.timeSortedData = timeSortedData;
        var begin = timeSortedData[0].time;
        var end = timeSortedData[timeSortedData.length - 1].time;
        var time = __WEBPACK_IMPORTED_MODULE_3_d3_scale__["c" /* scaleTime */]()
            .domain([new Date(begin * 1000), new Date(end * 1000)])
            .range([0, plotArea.width]);
        var sortedData = [];
        this.data.forEach(function (item) { return sortedData.push(item); });
        sortedData.sort(function (a, b) { return a.rpm - b.rpm; });
        var maxRpm = sortedData[sortedData.length - 1].rpm;
        maxRpm = this.roundUp(maxRpm * 1.1);
        var rpm = __WEBPACK_IMPORTED_MODULE_3_d3_scale__["a" /* scaleLinear */]()
            .domain([0, maxRpm])
            .range([plotArea.height, 0]);
        sortedData.sort(function (a, b) { return a.fpm - b.fpm; });
        var maxFpm = sortedData[sortedData.length - 1].fpm;
        maxFpm = this.roundUp(maxFpm * 1.1);
        var fpm = __WEBPACK_IMPORTED_MODULE_3_d3_scale__["a" /* scaleLinear */]()
            .domain([0, maxFpm])
            .range([plotArea.height, 0]);
        var scales = {
            time: time,
            begin: begin,
            end: end,
            rpm: rpm,
            maxRpm: maxRpm,
            fpm: fpm,
            maxFpm: maxFpm
        };
        this.drawLegend(legendArea);
        this.plot(plotArea, scales);
        this.drawAxis(plotArea, scales);
        this.initTooltip(plotArea, scales);
    };
    RequestsTimeChart.prototype.roundUp = function (num) {
        if (num < 10)
            return 10;
        var order = Math.pow(10, Math.round(Math.log10(num)));
        if (order >= 100)
            order /= 10;
        var result = Math.ceil(num / order) * order;
        return result;
    };
    RequestsTimeChart.prototype.interpolate = function (num, count) {
        if (count === 0)
            return [0];
        if (count === 1)
            return [0, num];
        var result = [0];
        var i = 1;
        while (i <= count) {
            result.push(num * i / count);
            i++;
        }
        return result;
    };
    RequestsTimeChart.prototype.drawLegend = function (legendArea, opt) {
        var rpmPlotColor = __WEBPACK_IMPORTED_MODULE_5_d3_color__["a" /* color */](opt && opt.rpmPlotColor || this.defaultRpmPlotColor);
        var fpmPlotColor = __WEBPACK_IMPORTED_MODULE_5_d3_color__["a" /* color */](opt && opt.fpmPlotColor || this.defaultFpmPlotColor);
        var legend = legendArea.area;
        var rpmLegend = legend.append("g")
            .attr("font-size", 15)
            .attr("font-family", "monospace")
            .attr("transform", "translate(" + (legendArea.right - 200) + ", 0)");
        var legendShapeSize = 6;
        rpmLegend.append("circle")
            .attr("cx", legendShapeSize / 2)
            .attr("cy", legendShapeSize / 2)
            .attr("r", legendShapeSize / 2)
            .attr("fill", rpmPlotColor.toString());
        rpmLegend.append("text")
            .attr("x", legendShapeSize).attr("y", 0)
            .attr("dx", ".5em").attr("dy", legendShapeSize)
            .text("rpm")
            .attr("fill", "#aaa");
        var fpmLegend = legend.append("g")
            .attr("font-size", 15)
            .attr("font-family", "monospace")
            .attr("transform", "translate(" + (legendArea.right - 100) + ", 0)");
        fpmLegend.append("rect")
            .attr("x", 0).attr("y", 0)
            .attr("width", legendShapeSize)
            .attr("height", legendShapeSize)
            .attr("fill", fpmPlotColor.toString());
        fpmLegend.append("text")
            .attr("x", legendShapeSize).attr("y", 0)
            .attr("dx", ".5em").attr("dy", legendShapeSize)
            .text("fpm")
            .attr("fill", "#aaa");
    };
    RequestsTimeChart.prototype.plot = function (plotArea, scales, opt) {
        var rpmPlotColor = __WEBPACK_IMPORTED_MODULE_5_d3_color__["a" /* color */](opt && opt.rpmPlotColor || this.defaultRpmPlotColor);
        var fpmPlotColor = __WEBPACK_IMPORTED_MODULE_5_d3_color__["a" /* color */](opt && opt.fpmPlotColor || this.defaultFpmPlotColor);
        var time = function (d) { return scales.time(new Date(d.time * 1000)); };
        var rpm = function (d) { return scales.rpm(d.rpm); };
        var fpm = function (d) { return scales.fpm(d.fpm); };
        var clip = plotArea.area.append("defs")
            .append("clipPath").attr("id", "plotClip")
            .append("rect")
            .attr("x", 0).attr("y", 0)
            .attr("width", plotArea.width).attr("height", plotArea.height);
        // draw fpm bars
        var barWidth = plotArea.width / (this.timeSortedData.length - 1);
        var fpmPlot = plotArea.area.append("g")
            .attr("class", "fpm-plot")
            .attr("clip-path", "url(#plotClip)");
        fpmPlot.selectAll("rect")
            .data(this.timeSortedData).enter().append("rect")
            .attr("x", function (d) { return time(d) - barWidth; }).attr("y", plotArea.height)
            .attr("width", barWidth)
            .attr("height", 0)
            .attr("stroke", fpmPlotColor.brighter(0.2).toString())
            .attr("stroke-width", 1)
            .attr("fill", fpmPlotColor.toString())
            .transition()
            .duration(500).ease(__WEBPACK_IMPORTED_MODULE_6_d3_ease__["a" /* easeCircleOut */])
            .attr("height", function (d) { return Math.max(1, plotArea.height - fpm(d)); })
            .attr("y", fpm);
        var rpmPlot = plotArea.area.append("g")
            .attr("class", "rpm-plot");
        rpmPlot.append("defs").html("\n        <linearGradient id=\"rpmGrad\" gradientTransform=\"rotate(90)\">\n            <stop offset=\"20%\" stop-color=\"" + rpmPlotColor.darker().toString() + "\" stop-opacity=\"0.3\"/>\n            <stop offset=\"80%\" stop-color=\"" + rpmPlotColor.darker().toString() + "\" stop-opacity=\"0\"/>\n        </linearGradient>\n        ");
        // draw rpm areas
        var areaColor = rpmPlotColor.darker();
        areaColor.opacity = 0.2;
        var points = [];
        points.push([0, plotArea.height]);
        this.timeSortedData.forEach(function (item) { return points.push([time(item), rpm(item)]); });
        points.push([plotArea.width, plotArea.height]);
        rpmPlot.append("path")
            .attr("class", "rpm-area")
            .attr("d", __WEBPACK_IMPORTED_MODULE_8_d3_shape__["a" /* line */]().x(function (p) { return p[0]; }).y(function (p) { return p[1]; })(points))
            .attr("fill", "url(#rpmGrad)");
        // draw rpm lines
        var lineStrokeWidth = Math.max(1, Math.min(plotArea.width / this.timeSortedData.length / 2 * 0.4, 4));
        var line = __WEBPACK_IMPORTED_MODULE_8_d3_shape__["a" /* line */]().x(time).y(rpm);
        rpmPlot.append("path")
            .attr("class", "rpm-line")
            .attr("d", line(this.timeSortedData))
            .attr("stroke", rpmPlotColor.darker().toString())
            .attr("stroke-width", lineStrokeWidth)
            .attr("fill", "none");
        // draw rpm nodes
        var nodeRadius = Math.min(plotArea.width / this.timeSortedData.length / 2 * 0.4, 4);
        if (nodeRadius >= 1) {
            rpmPlot.selectAll("circle")
                .data(this.timeSortedData).enter()
                .append("circle")
                .attr("class", "rpm-node")
                .attr("cx", time).attr("cy", rpm)
                .attr("r", nodeRadius)
                .attr("r0", nodeRadius) // for easy scaling
                .attr("fill", rpmPlotColor.toString());
        }
    };
    RequestsTimeChart.prototype.drawAxis = function (plotArea, scales) {
        var timeAxis = __WEBPACK_IMPORTED_MODULE_4_d3_axis__["a" /* axisBottom */](scales.time).tickSize(0);
        var timeDiff = scales.end - scales.begin;
        if (timeDiff <= 3600) {
            if (timeDiff <= 600)
                timeAxis.ticks(__WEBPACK_IMPORTED_MODULE_7_d3_time__["d" /* timeMinute */].every(1));
            else
                timeAxis.ticks(__WEBPACK_IMPORTED_MODULE_7_d3_time__["d" /* timeMinute */].every(10));
            timeAxis.tickFormat(function (d) {
                return __WEBPACK_IMPORTED_MODULE_10_moment__(d).format("HH:mm");
            });
        }
        else if (timeDiff <= 24 * 3600) {
            if (timeDiff <= 12 * 3600)
                timeAxis.ticks(__WEBPACK_IMPORTED_MODULE_7_d3_time__["b" /* timeHour */].every(1));
            else
                timeAxis.ticks(__WEBPACK_IMPORTED_MODULE_7_d3_time__["b" /* timeHour */].every(2));
            timeAxis.tickFormat(function (d) {
                return __WEBPACK_IMPORTED_MODULE_10_moment__(d).format("HH:mm");
            });
        }
        else {
            timeAxis.ticks(__WEBPACK_IMPORTED_MODULE_7_d3_time__["a" /* timeDay */].every(1))
                .tickFormat(function (d) {
                return __WEBPACK_IMPORTED_MODULE_10_moment__(d).format("MM-DD");
            });
        }
        var maxRpm = scales.maxRpm;
        var rpmAxis = __WEBPACK_IMPORTED_MODULE_4_d3_axis__["c" /* axisRight */](scales.rpm)
            .tickValues(this.interpolate(maxRpm, 5))
            .tickSizeInner(plotArea.width)
            .tickSizeOuter(0);
        var maxFpm = scales.maxFpm;
        var fpmAxis = __WEBPACK_IMPORTED_MODULE_4_d3_axis__["b" /* axisLeft */](scales.fpm)
            .tickValues(this.interpolate(maxFpm, 5))
            .tickSize(0);
        var axisFontColor = "#aaa";
        var axisFont = "monospace";
        var axisTickLineColor = "rgba(32, 32, 32, 0.1)";
        var axisGroup = plotArea.area.append("g").attr("class", "axis");
        axisGroup.append("g").attr("class", "axis-time")
            .attr("transform", "translate(0, " + plotArea.height + ")")
            .call(function (g) {
            g.call(timeAxis);
            g.select(".domain").remove();
            g.attr("font-family", axisFont);
            g.selectAll(".tick text")
                .attr("font", axisFont)
                .attr("fill", axisFontColor)
                .attr("dy", "1em");
        });
        axisGroup.append("g").attr("class", "axis-rpm")
            .call(function (g) {
            g.call(rpmAxis);
            g.select(".domain").remove();
            g.select(".tick:first-of-type text").remove();
            g.attr("text-anchor", "start")
                .attr("font-family", axisFont);
            g.selectAll(".tick text")
                .attr("fill", axisFontColor)
                .attr("x", 0)
                .attr("dy", -3);
            g.selectAll(".tick line")
                .attr("stroke", axisTickLineColor);
        });
        axisGroup.append("g").attr("class", "axis-fpm")
            .call(function (g) {
            g.call(fpmAxis);
            g.select(".domain").remove();
            g.select(".tick:first-of-type text").remove();
            g.attr("text-anchor", "end")
                .attr("font-family", axisFont);
            g.selectAll(".tick text")
                .attr("fill", axisFontColor)
                .attr("dx", plotArea.width)
                .attr("dy", -3);
            g.selectAll(".tick line")
                .attr("stroke", axisTickLineColor);
        });
    };
    RequestsTimeChart.prototype.highlight = function (fpmPlot, rpmPlot, idx, opt) {
        if (idx === this.highlightedIdx)
            return;
        var rpmPlotColor = opt && opt.rpmPlotColor || this.defaultRpmPlotColor;
        var fpmPlotColor = opt && opt.fpmPlotColor || this.defaultFpmPlotColor;
        if (this.highlightedIdx !== -1) {
            this.clearHighlights(fpmPlot, rpmPlot);
        }
        this.highlightedIdx = idx;
        var bar = fpmPlot.select("rect:nth-child(" + (idx + 1) + ")");
        var color = __WEBPACK_IMPORTED_MODULE_5_d3_color__["a" /* color */](fpmPlotColor).brighter(0.6).toString();
        bar.interrupt("highlight");
        bar.transition("highlight")
            .duration(200).ease(__WEBPACK_IMPORTED_MODULE_6_d3_ease__["c" /* easeLinear */])
            .attr("fill", color);
        var circle = rpmPlot.select(".rpm-node:nth-of-type(" + (idx + 1) + ")");
        if (circle.size() > 0) {
            color = __WEBPACK_IMPORTED_MODULE_5_d3_color__["a" /* color */](rpmPlotColor).brighter(0.6).toString();
            circle.interrupt("highlight");
            circle.transition("highlight")
                .duration(200).ease(__WEBPACK_IMPORTED_MODULE_6_d3_ease__["c" /* easeLinear */])
                .attr("r", parseFloat(circle.attr("r0")) * 1.5)
                .attr("fill", color);
        }
    };
    RequestsTimeChart.prototype.clearHighlights = function (fpmPlot, rpmPlot, opt) {
        var rpmPlotColor = opt && opt.rpmPlotColor || this.defaultRpmPlotColor;
        var fpmPlotColor = opt && opt.fpmPlotColor || this.defaultFpmPlotColor;
        if (this.highlightedIdx === -1)
            return;
        var idx = this.highlightedIdx;
        this.highlightedIdx = -1;
        var bar = fpmPlot.select("rect:nth-child(" + (idx + 1) + ")");
        var color = __WEBPACK_IMPORTED_MODULE_5_d3_color__["a" /* color */](fpmPlotColor).toString();
        bar.interrupt("highlight");
        bar.transition("highlight")
            .duration(200).ease(__WEBPACK_IMPORTED_MODULE_6_d3_ease__["c" /* easeLinear */])
            .attr("fill", color);
        var circle = rpmPlot.select(".rpm-node:nth-of-type(" + (idx + 1) + ")");
        if (circle.size() > 0) {
            color = __WEBPACK_IMPORTED_MODULE_5_d3_color__["a" /* color */](rpmPlotColor).toString();
            circle.interrupt("highlight");
            circle.transition("highlight")
                .duration(200).ease(__WEBPACK_IMPORTED_MODULE_6_d3_ease__["c" /* easeLinear */])
                .attr("r", parseFloat(circle.attr("r0")))
                .attr("fill", color);
        }
    };
    RequestsTimeChart.prototype.shortenNumber = function (num) {
        if (num < 10000)
            return num.toString();
        if (num < 1000000)
            return (num / 1000).toFixed(1) + "k";
        if (num < 1000000000)
            return (num / 1000000).toFixed(1) + "m";
        if (num < 1000000000000)
            return (num / 1000000000).toFixed(1) + "b";
    };
    RequestsTimeChart.prototype.initTooltip = function (plotArea, scales, opt) {
        var _this = this;
        var rpmPlotColor = opt && opt.rpmPlotColor || this.defaultRpmPlotColor;
        var fpmPlotColor = opt && opt.fpmPlotColor || this.defaultFpmPlotColor;
        var tooltip = plotArea.area.append("g")
            .attr("class", "tooltip");
        var clip = tooltip.append("rect")
            .attr("x", 0).attr("y", 0)
            .attr("width", plotArea.width).attr("height", plotArea.height)
            .attr("fill", "transparent");
        var tooltipSize;
        if (plotArea.width >= plotArea.height) {
            tooltipSize = Math.min(60, 60 * plotArea.height / 300);
        }
        else {
            tooltipSize = Math.min(60, 60 * plotArea.width / 1000);
        }
        var line = tooltip.append("g")
            .attr("font-family", "monospace")
            .attr("font-size", tooltipSize / 5)
            .attr("visibility", "hidden");
        line.append("line")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", plotArea.height)
            .attr("stroke", "rgba(255, 255, 255, 0.5)")
            .attr("stroke-width", 1.5)
            .attr("stroke-dasharray", "4, 4");
        line.append("line")
            .attr("x1", -2).attr("y1", 0)
            .attr("x2", 2).attr("y2", 0)
            .attr("stroke", "#aaa")
            .attr("stroke-width", 1.5);
        var timeTooltipText = line.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "bottom")
            .attr("x", 0).attr("y", 0)
            .attr("dy", -5)
            .attr("fill", "#aaa");
        var rpmTooltip = line.append("g")
            .attr("transform", "translate(" + -tooltipSize * 1.2 + ", 0)");
        var rpmTooltipRect = rpmTooltip.append("rect")
            .attr("x", 0).attr("y", 0)
            .attr("width", tooltipSize).attr("height", tooltipSize / 2)
            .attr("stroke", rpmPlotColor)
            .attr("stroke-width", Math.max(1, 2 * tooltipSize / 60))
            .attr("fill", "none");
        var rpmTooltipText = rpmTooltip.append("text")
            .attr("text-anchor", "end")
            .attr("x", tooltipSize - tooltipSize * 0.2)
            .attr("y", tooltipSize / 4)
            .attr("fill", rpmPlotColor)
            .attr("alignment-baseline", "central");
        var fpmTooltip = line.append("g")
            .attr("transform", "translate(" + tooltipSize * 0.2 + ", 0)");
        var fpmTooltipRect = fpmTooltip.append("rect")
            .attr("x", 0).attr("y", 0)
            .attr("width", tooltipSize).attr("height", tooltipSize / 2)
            .attr("stroke", fpmPlotColor)
            .attr("stroke-width", Math.max(1, 2 * tooltipSize / 60))
            .attr("fill", "none");
        var fpmTooltipText = fpmTooltip.append("text")
            .attr("text-anchor", "start")
            .attr("x", tooltipSize * 0.2)
            .attr("y", tooltipSize / 4)
            .attr("fill", fpmPlotColor)
            .attr("alignment-baseline", "central");
        var fpmPlot = plotArea.area.select(".fpm-plot");
        var rpmPlot = plotArea.area.select(".rpm-plot");
        tooltip.on("mousemove", function () {
            var dx = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["d" /* mouse */](plotArea.area.node())[0];
            line.interrupt();
            line.attr("transform", "translate(" + dx + ", 0)");
            // FIXME: quick lookup
            var time = Math.round(scales.time.invert(dx).getTime() / 1000);
            var dataIdx = 0;
            while (dataIdx < _this.timeSortedData.length && _this.timeSortedData[dataIdx].time < time) {
                dataIdx++;
            }
            var data = _this.data[dataIdx];
            rpmTooltipText.text(_this.shortenNumber(data.rpm));
            var rpmTooltipTextBBox = rpmTooltipText.node().getBBox();
            rpmTooltipRect.attr("x", rpmTooltipTextBBox.x - tooltipSize * 0.2)
                .attr("width", rpmTooltipTextBBox.width + tooltipSize * 0.4);
            fpmTooltipText.text(_this.shortenNumber(data.fpm));
            var fpmTooltipTextBBox = fpmTooltipText.node().getBBox();
            fpmTooltipRect.attr("width", fpmTooltipTextBBox.width + tooltipSize * 0.4);
            timeTooltipText.text(__WEBPACK_IMPORTED_MODULE_10_moment__["unix"](data.time).format("MM-DD HH:mm"));
            _this.highlight(fpmPlot, rpmPlot, dataIdx);
        })
            .on("mouseleave", function () {
            line.attr("visibility", "hidden");
            _this.clearHighlights(fpmPlot, rpmPlot);
        })
            .on("mouseenter", function () {
            line.attr("visibility", "visible");
        });
    };
    RequestsTimeChart.prototype.onUpdateDiagram = function () {
        this.clearDiagram();
        this.onDrawDiagram();
    };
    RequestsTimeChart.prototype.onResizeDiagram = function () {
        var _this = this;
        if (this.redrawDelay >= 0)
            window.clearTimeout(this.redrawDelay);
        this.redrawDelay = window.setTimeout(function () {
            _this.clearDiagram();
            _this.onDrawDiagram();
            _this.redrawDelay = undefined;
        }, 500);
    };
    return RequestsTimeChart;
}(__WEBPACK_IMPORTED_MODULE_1__diagram_component__["a" /* Diagram */]));
RequestsTimeChart = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "ow-chart-rq-t",
        template: __webpack_require__("../../../../../src/app/diagram/diagram.template.html"),
        styles: [__webpack_require__("../../../../../src/app/diagram/diagram.style.scss")]
    })
], RequestsTimeChart);

//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/diagram/systems-rpc-graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoundingBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SystemsRpcGraph; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__diagram_component__ = __webpack_require__("../../../../../src/app/diagram/diagram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_force__ = __webpack_require__("../../../../d3-force/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_drag__ = __webpack_require__("../../../../d3-drag/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3_transition__ = __webpack_require__("../../../../d3-transition/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_d3_ease__ = __webpack_require__("../../../../d3-ease/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BoundingBox = (function () {
    function BoundingBox(_x, _y, _w, _h, forceDirection) {
        this._x = _x;
        this._y = _y;
        this._w = _w;
        this._h = _h;
        this._r = _x + _w;
        this._b = _y + _h;
        if (forceDirection)
            this._forceDirection = forceDirection;
        else
            this._forceDirection = "vertical";
    }
    Object.defineProperty(BoundingBox.prototype, "x", {
        get: function () { return this._x; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "y", {
        get: function () { return this._y; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "w", {
        get: function () { return this._w; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "h", {
        get: function () { return this._h; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "r", {
        get: function () { return this._r; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "b", {
        get: function () { return this._b; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "forceDirection", {
        get: function () { return this._forceDirection; },
        enumerable: true,
        configurable: true
    });
    BoundingBox.prototype.outOfXBound = function (x) {
        if (x < this._x)
            return x - this._x;
        if (x > this._x + this._w)
            return x - this._x - this._w;
        return 0;
    };
    BoundingBox.prototype.outOfYBound = function (y) {
        if (y < this._y)
            return y - this._y;
        if (y > this._y + this._h)
            return y - this._y - this._h;
        return 0;
    };
    BoundingBox.prototype.transform = function (x, y, w, h) {
        this._x = x;
        this._y = y;
        this._w = w;
        this._h = h;
        this._r = x + w;
        this._b = y + h;
    };
    BoundingBox.prototype.getRandomPos = function () {
        var result = [
            this._x + Math.random() * this._w,
            this._y + Math.random() * this._h
        ];
        return result;
    };
    BoundingBox.prototype.forceX = function (strength) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_d3_force__["d" /* forceX */]().x(this._x + this._w / 2)
            .strength(function (d) {
            if (d.boundingBox === _this)
                return strength || 0.2;
            return 0;
        });
    };
    BoundingBox.prototype.forceY = function (strength) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_d3_force__["e" /* forceY */]().y(this._y + this._h / 2)
            .strength(function (d) {
            if (d.boundingBox === _this)
                return strength || 0.2;
            return 0;
        });
    };
    return BoundingBox;
}());

var SystemsRpcGraph = (function (_super) {
    __extends(SystemsRpcGraph, _super);
    function SystemsRpcGraph() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.systemSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this.color = __WEBPACK_IMPORTED_MODULE_5_d3_scale__["a" /* scaleLinear */]()
            .domain([0, 0.99, 0.999, 1])
            .range(["#a00", "#a00", "#fc0", "#0af"]);
        _this.dataVo = null;
        _this.nodeSizeLarge = _this.nodeSize(12);
        _this.nodeSizeMedium = _this.nodeSize(9);
        _this.nodeSizeSmall = _this.nodeSize(6);
        _this.tooltipBgRadius = function (d) { return _this.nodeSizeLarge(d) + 80; };
        return _this;
    }
    SystemsRpcGraph.prototype.ngOnChanges = function (changes) {
        if (changes.layout) {
            this.layout = changes.layout.currentValue;
            if (changes.layout.firstChange)
                return;
            this.onUpdateDiagram();
        }
        else if (changes.data) {
            this.onUpdateDiagram();
        }
    };
    SystemsRpcGraph.prototype.ngOnDestroy = function () {
        if (this.forces) {
            this.forces.stop();
            if (this.lastReactiveTimeout)
                window.clearTimeout(this.lastReactiveTimeout);
        }
    };
    SystemsRpcGraph.prototype.nodeSize = function (base) {
        if (base === void 0) { base = 8; }
        return function (node) {
            var rpm = node.rpm[0];
            if (rpm === 0)
                return base;
            return base + Math.log10(rpm) * 4;
        };
    };
    SystemsRpcGraph.prototype.healthColor = function (idx) {
        var _this = this;
        if (idx === void 0) { idx = 0; }
        return function (node) {
            if (node.rpm[idx] === 0)
                return "#666";
            else
                return _this.color(node.health[idx]);
        };
    };
    SystemsRpcGraph.prototype.calcHealth = function (fpm, rpm) {
        var health = [0, 0, 0];
        for (var idx = 0; idx < 3; idx++) {
            var f = fpm[idx];
            var r = rpm[idx];
            var h = void 0;
            if (r === 0 && f === 0)
                h = 1;
            else if (r === 0)
                h = 0;
            else
                h = (r - f) / r;
            health[idx] = h;
        }
        return health;
    };
    SystemsRpcGraph.prototype.generateData = function (systemStats, layout) {
        var dataVo;
        if (this.dataVo == null) {
            dataVo = {
                nodes: new Array(),
                links: new Array()
            };
        }
        else {
            dataVo = this.dataVo;
        }
        var nodeIdxMap = new Map();
        var removedNodes = new Set();
        var _loop_1 = function (node) {
            var nodeVoIdx = dataVo.nodes.findIndex(function (nodeVo) { return nodeVo.name === node.name; });
            var isNew = nodeVoIdx === -1;
            if (layout) {
                if (!layout.nodeBoxMap.has(node.name)) {
                    removedNodes.add(node.name);
                    if (!isNew)
                        dataVo.nodes.splice(nodeVoIdx, 1);
                    return "continue";
                }
            }
            var nodeVo = void 0;
            if (isNew) {
                nodeVo = {
                    name: node.name,
                    rpm: node.rpm,
                    fpm: node.fpm,
                    health: this_1.calcHealth(node.fpm, node.rpm),
                    boundingBox: null,
                    tooltip: {}
                };
            }
            else {
                nodeVo = dataVo.nodes[nodeVoIdx];
                nodeVo.rpm = node.rpm;
                nodeVo.fpm = node.fpm;
                nodeVo.health = this_1.calcHealth(node.fpm, node.rpm);
                nodeVo.boundingBox = null;
            }
            if (layout && layout.nodeBoxMap.has(node.name)) {
                var boxName = layout.nodeBoxMap.get(node.name);
                if (layout.boundingBoxes.has(boxName)) {
                    var boundingBox = layout.boundingBoxes.get(boxName);
                    nodeVo.boundingBox = boundingBox;
                    if (isNew || boundingBox.outOfXBound(nodeVo.x) || boundingBox.outOfYBound(nodeVo.y)) {
                        var pos = nodeVo.boundingBox.getRandomPos();
                        nodeVo.x = pos[0];
                        nodeVo.y = pos[1];
                    }
                }
            }
            if (isNew)
                dataVo.nodes.push(nodeVo);
            nodeIdxMap.set(node.name, nodeVo);
        };
        var this_1 = this;
        for (var _i = 0, _a = systemStats.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            _loop_1(node);
        }
        dataVo.nodes = dataVo.nodes.filter(function (node) {
            return nodeIdxMap.has(node.name);
        });
        dataVo.links = [];
        for (var _c = 0, _d = systemStats.links; _c < _d.length; _c++) {
            var link = _d[_c];
            if (removedNodes.has(link.source) || removedNodes.has(link.target))
                continue;
            var sourceIdx = nodeIdxMap.get(link.source);
            var targetIdx = nodeIdxMap.get(link.target);
            dataVo.links.push({
                source: sourceIdx,
                target: targetIdx,
                rpm: link.rpm,
                fpm: link.fpm,
                health: this.calcHealth(link.fpm, link.rpm)
            });
        }
        this.dataVo = dataVo;
        return dataVo;
    };
    SystemsRpcGraph.prototype.drawTooltip = function (nodes) {
        var _this = this;
        var root = nodes.append("g").attr("class", "tooltip-wrapper");
        root.append("defs")
            .append("clipPath").attr("id", function (d, i) { return "tooltipClip-" + i; })
            .append("circle").attr("class", "mask").attr("cx", 0).attr("cy", 0);
        var tooltip = root.append("g")
            .attr("class", "tooltip")
            .attr("font-family", "monospace")
            .attr("transform", "scale(0)")
            .attr("visibility", "hidden")
            .attr("clip-path", function (d, i) { return "url(#tooltipClip-" + i + ")"; })
            .attr("opacity", 0);
        var background = tooltip.append("g").attr("class", "background");
        background.append("circle")
            .attr("cx", 0).attr("cy", 0)
            .attr("fill", "rgba(40, 44, 52, 0.9)")
            .attr("stroke-width", 2);
        background.append("line").attr("class", "line-nw-se")
            .attr("stroke", "rgb(54, 58, 66)")
            .attr("stroke-width", 1);
        background.append("line").attr("class", "line-ne-sw")
            .attr("stroke", "rgb(54, 58, 66)")
            .attr("stroke-width", 1);
        tooltip.append("circle")
            .attr("class", "ripple")
            .attr("cx", 0).attr("cy", 0)
            .attr("r", 0).attr("opacity", 0)
            .attr("stroke-width", 0)
            .attr("fill", "black");
        var pageStats = tooltip.append("g")
            .attr("class", "page-stats")
            .attr("transfrom", "translate(0, 0)");
        var stats1min = pageStats.append("g").attr("class", "stats-1min");
        stats1min.append("text")
            .attr("class", "rpm")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "baseline")
            .attr("font-size", 18)
            .attr("fill", "#39c461")
            .attr("x", 0).attr("y", -5);
        stats1min.append("text")
            .attr("class", "fpm")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "hanging")
            .attr("font-size", 18)
            .attr("fill", "#df534f")
            .attr("x", 0).attr("y", 0);
        stats1min.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "baseline")
            .attr("font-size", 8)
            .attr("fill", "#888")
            .attr("x", 0).attr("y", -25)
            .text("1min");
        var stats5min = pageStats.append("g").attr("class", "stats-5min");
        stats5min.append("text")
            .attr("class", "rpm")
            .attr("text-anchor", "end")
            .attr("alignment-baseline", "baseline")
            .attr("font-size", 14)
            .attr("fill", "#39c461")
            .attr("x", 0).attr("y", -5);
        stats5min.append("text")
            .attr("class", "fpm")
            .attr("text-anchor", "end")
            .attr("alignment-baseline", "hanging")
            .attr("font-size", 14)
            .attr("fill", "#df534f")
            .attr("x", 0).attr("y", 5);
        stats5min.append("text")
            .attr("text-anchor", "end")
            .attr("alignment-baseline", "baseline")
            .attr("font-size", 8)
            .attr("fill", "#888")
            .attr("x", 0).attr("y", -25)
            .text("5min Avg.");
        var stats15min = pageStats.append("g").attr("class", "stats-15min");
        stats15min.append("text")
            .attr("class", "rpm")
            .attr("text-anchor", "start")
            .attr("alignment-baseline", "baseline")
            .attr("font-size", 14)
            .attr("fill", "#39c461")
            .attr("x", 0).attr("y", -5);
        stats15min.append("text")
            .attr("class", "fpm")
            .attr("text-anchor", "start")
            .attr("alignment-baseline", "hanging")
            .attr("font-size", 14)
            .attr("fill", "#df534f")
            .attr("x", 0).attr("y", 5);
        stats15min.append("text")
            .attr("text-anchor", "start")
            .attr("alignment-baseline", "baseline")
            .attr("font-size", 8)
            .attr("fill", "#888")
            .attr("x", 0).attr("y", -25)
            .text("15min Avg.");
        pageStats.append("text")
            .attr("class", "tip")
            .attr("alignment-baseline", "hang")
            .attr("fill", "#888")
            .attr("font-size", 8)
            .text("* double click for stats");
        var btnMore = pageStats.append("g").attr("class", "btn-more");
        btnMore.append("rect")
            .attr("x", -20).attr("y", -5)
            .attr("width", 40).attr("height", 10)
            .attr("fill", "transparent");
        btnMore.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "central")
            .attr("font-size", 10)
            .attr("fill", "#aaa")
            .attr("x", 0).attr("y", 0)
            .text("more...");
        var pageHistory = tooltip.append("g").attr("class", "page-history");
        var statsNow = pageHistory.append("g").attr("class", "stats-now");
        statsNow.append("rect")
            .attr("fill", "transparent")
            .attr("x", -30).attr("y", -30)
            .attr("width", 60).attr("height", 60);
        statsNow.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "central")
            .attr("font-size", 18)
            .attr("font-family", "FontAwesome")
            .attr("fill", "#aaa")
            .attr("x", 0).attr("y", 0)
            .text("\uf201");
        statsNow.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "hang")
            .attr("font-size", 8)
            .attr("fill", "#aaa")
            .attr("x", 0).attr("y", 20)
            .text("Quick Stats");
        var statsHour = pageHistory.append("g").attr("class", "stats-hour");
        statsHour.append("rect")
            .attr("fill", "transparent")
            .attr("x", -30).attr("y", -30)
            .attr("width", 60).attr("height", 60);
        statsHour.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "central")
            .attr("font-size", 18)
            .attr("font-family", "FontAwesome")
            .attr("fill", "#aaa")
            .attr("x", 0).attr("y", 0)
            .text("\uf252");
        statsHour.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "hang")
            .attr("font-size", 8)
            .attr("fill", "#aaa")
            .attr("x", 0).attr("y", 20)
            .text("Hour Stats");
        var statsDay = pageHistory.append("g").attr("class", "stats-day");
        statsDay.append("rect")
            .attr("fill", "transparent")
            .attr("x", -30).attr("y", -30)
            .attr("width", 60).attr("height", 60);
        statsDay.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "central")
            .attr("font-size", 18)
            .attr("font-family", "FontAwesome")
            .attr("fill", "#aaa")
            .attr("x", 0).attr("y", 0)
            .text("\uf017");
        statsDay.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "hang")
            .attr("font-size", 8)
            .attr("fill", "#aaa")
            .attr("x", 0).attr("y", 20)
            .text("Day Stats");
        var btnBack = pageHistory.append("g").attr("class", "btn-back");
        btnBack.append("rect")
            .attr("x", -20).attr("y", -5)
            .attr("width", 40).attr("height", 10)
            .attr("fill", "transparent");
        btnBack.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "central")
            .attr("font-size", 10)
            .attr("fill", "#aaa")
            .attr("x", 0).attr("y", 0)
            .text("back");
        var togglePage = function (d, i, g) {
            // FIXME: how to select .tooltip elegantly
            var el = g[i].parentElement.parentElement;
            var target = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["f" /* select */](el);
            var pageHistoryTranslate;
            var pageStatsTranslate;
            if (d.tooltip.currentPage === "stats") {
                pageHistoryTranslate = "translate(0, 0)";
                pageStatsTranslate = "translate(-" + _this.tooltipBgRadius(d) * 2 + ", 0)";
                d.tooltip.currentPage = "history";
            }
            else {
                pageHistoryTranslate = "translate(" + _this.tooltipBgRadius(d) * 2 + ", 0)";
                pageStatsTranslate = "translate(0, 0)";
                d.tooltip.currentPage = "stats";
            }
            target.select(".page-history")
                .interrupt().transition()
                .duration(200).ease(__WEBPACK_IMPORTED_MODULE_7_d3_ease__["d" /* easeSinOut */])
                .attr("transform", pageHistoryTranslate);
            target.select(".page-stats")
                .interrupt().transition()
                .duration(200).ease(__WEBPACK_IMPORTED_MODULE_7_d3_ease__["d" /* easeSinOut */])
                .attr("transform", pageStatsTranslate);
        };
        var btnHightlight = function (d, i, g) {
            __WEBPACK_IMPORTED_MODULE_2_d3_selection__["f" /* select */](g[i]).selectAll("text")
                .attr("fill", "white");
        };
        var btnCancelHightlight = function (d, i, g) {
            __WEBPACK_IMPORTED_MODULE_2_d3_selection__["f" /* select */](g[i]).selectAll("text")
                .attr("fill", "#aaa");
        };
        btnMore.on("click", togglePage)
            .on("mouseenter", btnHightlight)
            .on("mouseleave", btnCancelHightlight);
        btnBack.on("click", togglePage)
            .on("mouseenter", btnHightlight)
            .on("mouseleave", btnCancelHightlight);
        statsNow.on("click", function (d) { return _this.systemSelected.emit({ system: d.name, eventType: "stats" }); })
            .on("mouseenter", btnHightlight)
            .on("mouseleave", btnCancelHightlight);
        statsHour.on("click", function (d) { return _this.systemSelected.emit({ system: d.name, eventType: "stats_1h" }); })
            .on("mouseenter", btnHightlight)
            .on("mouseleave", btnCancelHightlight);
        statsDay.on("click", function (d) { return _this.systemSelected.emit({ system: d.name, eventType: "stats_1d" }); })
            .on("mouseenter", btnHightlight)
            .on("mouseleave", btnCancelHightlight);
    };
    SystemsRpcGraph.prototype.updateTooltip = function (nodes) {
        var _this = this;
        var pointCoor = function (s) { return function (d) { return s * ((_this.tooltipBgRadius(d)) - 3) / Math.sqrt(2); }; };
        var root = nodes.selectAll(".tooltip-wrapper");
        root.selectAll("defs .mask").attr("r", function (d) { return _this.tooltipBgRadius(d); });
        var tooltip = root.selectAll(".tooltip");
        var background = tooltip.selectAll(".background");
        background.selectAll("circle")
            .attr("r", function (d) { return _this.tooltipBgRadius(d) - 2; })
            .attr("stroke", this.healthColor(0));
        background.selectAll(".line-nw-se")
            .attr("x1", pointCoor(-1)).attr("y1", pointCoor(-1))
            .attr("x2", pointCoor(1)).attr("y2", pointCoor(1));
        background.selectAll(".line-ne-sw")
            .attr("x1", pointCoor(-1)).attr("y1", pointCoor(1))
            .attr("x2", pointCoor(1)).attr("y2", pointCoor(-1));
        var pageStats = tooltip.selectAll(".page-stats");
        var stats1min = pageStats.select(".stats-1min")
            .attr("transform", function (d) { return "translate(0, " + (-_this.nodeSizeLarge(d) - (_this.tooltipBgRadius(d) - _this.nodeSizeLarge(d)) / 3) + ")"; });
        stats1min.select("text.rpm")
            .text(function (d) { return "" + d.rpm[0]; });
        stats1min.select("text.fpm")
            .text(function (d) { return "" + d.fpm[0]; });
        var stats5min = pageStats.select(".stats-5min")
            .attr("transform", function (d) { return "translate(" + (-_this.nodeSizeLarge(d) - 10) + ", 0)"; });
        stats5min.select("text.rpm")
            .text(function (d) { return "" + Math.round(d.rpm[1]); });
        stats5min.select("text.fpm")
            .text(function (d) { return "" + Math.round(d.fpm[1]); });
        var stats15min = pageStats.select(".stats-15min")
            .attr("transform", function (d) { return "translate(" + (_this.nodeSizeLarge(d) + 10) + ", 0)"; });
        stats15min.select("text.rpm")
            .text(function (d) { return "" + Math.round(d.rpm[2]); });
        stats15min.select("text.fpm")
            .text(function (d) { return "" + Math.round(d.fpm[2]); });
        pageStats.select("text.tip")
            .attr("x", 0).attr("y", function (d) { return _this.nodeSizeLarge(d) + (_this.tooltipBgRadius(d) - _this.nodeSizeLarge(d)) / 3 * 2; });
        var btnMore = pageStats.select(".btn-more")
            .attr("transform", function (d) { return "translate(0, " + (_this.nodeSizeLarge(d) + 20) + ")"; });
        var pageHistory = tooltip.select(".page-history")
            .attr("transform", function (d) { return "translate(" + _this.tooltipBgRadius(d) * 2 + ", 0)"; });
        var statsNow = pageHistory.select(".stats-now")
            .attr("transform", function (d) { return "translate(0, " + (-_this.nodeSizeLarge(d) - (_this.tooltipBgRadius(d) - _this.nodeSizeLarge(d)) / 2) + ")"; });
        var statsHour = pageHistory.select(".stats-hour")
            .attr("transform", function (d) { return "translate(" + (-_this.nodeSizeLarge(d) - (_this.tooltipBgRadius(d) - _this.nodeSizeLarge(d)) / 2) + ", 0)"; });
        var statsDay = pageHistory.select(".stats-day")
            .attr("transform", function (d) { return "translate(" + (_this.nodeSizeLarge(d) + (_this.tooltipBgRadius(d) - _this.nodeSizeLarge(d)) / 2) + ", 0)"; });
        var btnBack = pageHistory.select(".btn-back")
            .attr("transform", function (d) { return "translate(0, " + (_this.nodeSizeLarge(d) + 20) + ")"; });
    };
    SystemsRpcGraph.prototype.showTooltip = function (target) {
        var d = target.data()[0];
        target.select(".node-name").interrupt().transition()
            .duration(200).ease(__WEBPACK_IMPORTED_MODULE_7_d3_ease__["d" /* easeSinOut */])
            .attr("dy", this.nodeSizeLarge(d) + (this.tooltipBgRadius(d) - this.nodeSizeLarge(d)) / 3 * 2 - 15);
        d.tooltip.currentPage = "stats";
        target.select(".page-stats").attr("transform", "translate(0, 0)");
        target.select(".page-history").attr("transform", "translate(" + this.tooltipBgRadius(d) * 2 + ", 0)");
        target.select(".tooltip").attr("visibility", "visible")
            .interrupt().transition()
            .duration(200).ease(__WEBPACK_IMPORTED_MODULE_7_d3_ease__["d" /* easeSinOut */])
            .attr("opacity", 1)
            .attr("transform", "scale(1)");
        var ring = target.select(".ripple");
        target.select(".ripple")
            .attr("r", 0)
            .attr("opacity", 0.5)
            .attr("fill", this.healthColor(0))
            .interrupt().transition()
            .duration(400).ease(__WEBPACK_IMPORTED_MODULE_7_d3_ease__["d" /* easeSinOut */])
            .attr("r", this.tooltipBgRadius(d))
            .attr("opacity", 0)
            .on("end", function () { return ring.attr("r", 0); });
    };
    SystemsRpcGraph.prototype.hideTooltip = function (target) {
        target.select(".node-name").interrupt().transition()
            .duration(200).ease(__WEBPACK_IMPORTED_MODULE_7_d3_ease__["d" /* easeSinOut */])
            .attr("dy", 0);
        target.select(".tooltip").interrupt().transition()
            .duration(200).ease(__WEBPACK_IMPORTED_MODULE_7_d3_ease__["d" /* easeSinOut */])
            .attr("opacity", 0)
            .attr("transform", "scale(0)")
            .on("end", function (d, i, g) { return __WEBPACK_IMPORTED_MODULE_2_d3_selection__["f" /* select */](g[i]).attr("visibility", "hidden"); });
    };
    SystemsRpcGraph.prototype.drawNodeDetail = function (nodes) {
        var _this = this;
        if (nodes.size() === 0)
            return;
        nodes.attr("text-anchor", "middle")
            .attr("font-size", "15")
            .style("cursor", "pointer");
        this.drawTooltip(nodes);
        var rings = nodes.append("g").attr("class", "rings");
        // outter ring
        rings.append("circle").attr("class", "outter");
        // middle ring
        rings.append("circle").attr("class", "middle");
        // inner ring
        rings.append("circle").attr("class", "inner");
        // add text
        rings.append("text")
            .attr("class", "node-name")
            .attr("alignment-baseline", "central")
            .attr("fill", "white")
            .attr("x", 0).attr("y", 0).attr("dy", 0);
        // add open event
        rings.on("dblclick", function (d) { return _this.systemSelected.emit({ system: d.name, eventType: "stats" }); });
        // tooltip events
        nodes.on("mouseenter", function (d, i, g) {
            d.fx = d.x;
            d.fy = d.y;
            var node = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["f" /* select */](g[i]);
            node.raise();
            _this.showTooltip(node);
        })
            .on("mouseleave", function (d, i, g) {
            d.fx = null;
            d.fy = null;
            _this.hideTooltip(__WEBPACK_IMPORTED_MODULE_2_d3_selection__["f" /* select */](g[i]));
        });
    };
    SystemsRpcGraph.prototype.updateNodeDetail = function (nodes) {
        var rings = nodes.selectAll(".rings");
        this.updateTooltip(nodes);
        // outter ring
        rings.select(".outter")
            .attr("r", this.nodeSizeLarge)
            .attr("fill", this.healthColor(2));
        // middle ring
        rings.select(".middle")
            .attr("r", this.nodeSizeMedium)
            .attr("fill", this.healthColor(1));
        // inner ring
        rings.select(".inner")
            .attr("r", this.nodeSizeSmall)
            .attr("fill", this.healthColor(0));
        // text
        rings.select(".node-name")
            .text(function (d) { return d.name; });
    };
    SystemsRpcGraph.prototype.drawLinkDetail = function (links) {
        links.attr("stroke", this.healthColor(0))
            .attr("stroke-width", 2)
            .attr("stroke-linecap", "round")
            .attr("opacity", 0.8)
            .attr("stroke-dasharray", function (d) {
            var rpm = d.rpm[0];
            if (rpm > 10000)
                rpm = 10000;
            else if (rpm <= 0)
                rpm = 1;
            var result = 22 - Math.log10(rpm) * 5;
            return "2, " + result;
        })
            .style("animation", "lineFlow 40s linear infinite");
    };
    SystemsRpcGraph.prototype.onDrawDiagram = function () {
        var _this = this;
        this.calcCanvasSize();
        this.diagramRoot = this.canvas.append("g");
        this.links = this.diagramRoot.append("g").attr("class", "links");
        this.nodes = this.diagramRoot.append("g").attr("class", "nodes");
        var simulation = __WEBPACK_IMPORTED_MODULE_3_d3_force__["c" /* forceSimulation */]();
        var tick = function () {
            _this.nodes.selectAll(".node")
                .attr("transform", function (d) {
                var boundingBox = d.boundingBox;
                if (boundingBox) {
                    var outOfXBound = boundingBox.outOfXBound(d.x);
                    if (outOfXBound !== 0) {
                        if (outOfXBound < 0)
                            d.x = boundingBox.x;
                        else
                            d.x = boundingBox.r;
                    }
                    var outOfYBound = boundingBox.outOfYBound(d.y);
                    if (outOfYBound !== 0) {
                        if (outOfYBound < 0)
                            d.y = boundingBox.y;
                        else
                            d.y = boundingBox.b;
                    }
                }
                return "translate(" + d.x + ", " + d.y + ")";
            });
            _this.links.selectAll(".link")
                .attr("x1", function (d) { return d.source.x; })
                .attr("y1", function (d) { return d.source.y; })
                .attr("x2", function (d) { return d.target.x; })
                .attr("y2", function (d) { return d.target.y; });
        };
        var links = __WEBPACK_IMPORTED_MODULE_3_d3_force__["a" /* forceLink */]().strength(0.01);
        var charge = __WEBPACK_IMPORTED_MODULE_3_d3_force__["b" /* forceManyBody */]().strength(-300).distanceMax(1000);
        var x = __WEBPACK_IMPORTED_MODULE_3_d3_force__["d" /* forceX */]().x(this.width / 2).strength(0.1);
        var y = __WEBPACK_IMPORTED_MODULE_3_d3_force__["e" /* forceY */]().y(this.height / 2).strength(0.1);
        if (this.layout) {
            this.layout.boundingBoxes.forEach(function (boundingBox, name) {
                if (boundingBox.forceDirection === "horizontal" || boundingBox.forceDirection === "both")
                    simulation.force(name + "_x", boundingBox.forceX());
                if (boundingBox.forceDirection === "vertical" || boundingBox.forceDirection === "both")
                    simulation.force(name + "_y", boundingBox.forceY());
            });
        }
        simulation
            .force("links", links)
            .force("charge", charge)
            .force("x", x)
            .force("y", y)
            .on("tick", tick);
        this.forces = simulation;
    };
    SystemsRpcGraph.prototype.onUpdateDiagram = function () {
        var _this = this;
        if (!this.links || !this.nodes)
            return;
        var data = this.generateData(this.data, this.layout);
        var links = this.links.selectAll(".link").data(data.links, function (d) { return d.source.name + "-" + d.target.name; });
        links.exit().remove();
        links.enter().append("line")
            .attr("class", "link")
            .call(function (l) { return _this.drawLinkDetail(l); });
        var dragEvents = __WEBPACK_IMPORTED_MODULE_4_d3_drag__["a" /* drag */]()
            .on("start", function (target) {
            _this.nodes.selectAll(".node").data().forEach(function (d) {
                if (target.name !== d.name) {
                    d.fx = null;
                    d.fy = null;
                }
            });
            if (!__WEBPACK_IMPORTED_MODULE_2_d3_selection__["b" /* event */].active)
                _this.forces.alphaTarget(0.3).restart();
        })
            .on("drag", function (d) {
            _this.forces.restart();
            d.fx = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["b" /* event */].x;
            d.fy = __WEBPACK_IMPORTED_MODULE_2_d3_selection__["b" /* event */].y;
        })
            .on("end", function () {
            if (!__WEBPACK_IMPORTED_MODULE_2_d3_selection__["b" /* event */].active)
                _this.forces.alphaTarget(0).restart();
        });
        var nodes = this.nodes.selectAll(".node").data(data.nodes, function (d) { return d.name; });
        nodes.exit().remove();
        nodes.enter().append("g")
            .attr("class", "node")
            .call(function (n) { return _this.drawNodeDetail(n); })
            .call(dragEvents);
        this.nodes.selectAll(".node").call(function (n) { return _this.updateNodeDetail(n); });
        this.forces.nodes(data.nodes);
        this.forces.force("links").links(data.links);
        this.reactivate();
    };
    SystemsRpcGraph.prototype.onResizeDiagram = function () {
        if (this.forces) {
            this.forces.force("x").x(this.width / 2);
            this.forces.force("y").y(this.height / 2);
            this.reactivate();
        }
    };
    SystemsRpcGraph.prototype.reactivate = function () {
        var _this = this;
        if (!this.forces)
            return;
        this.forces.alphaTarget(0.3);
        this.forces.restart();
        if (this.lastReactiveTimeout)
            window.clearTimeout(this.lastReactiveTimeout);
        this.lastReactiveTimeout = window.setTimeout(function () {
            if (!_this.forces)
                return;
            _this.forces.alphaTarget(0);
            _this.lastReactiveTimeout = undefined;
        }, 5000);
    };
    return SystemsRpcGraph;
}(__WEBPACK_IMPORTED_MODULE_1__diagram_component__["a" /* Diagram */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SystemsRpcGraph.prototype, "layout", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SystemsRpcGraph.prototype, "systemSelected", void 0);
SystemsRpcGraph = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "ow-graph-sys-rpc",
        template: __webpack_require__("../../../../../src/app/diagram/diagram.template.html"),
        styles: [__webpack_require__("../../../../../src/app/diagram/diagram.style.scss"), __webpack_require__("../../../../../src/app/diagram/systems-rpc-graph/graph.style.scss")]
    })
], SystemsRpcGraph);

//# sourceMappingURL=graph.component.js.map

/***/ }),

/***/ "../../../../../src/app/diagram/systems-rpc-graph/graph.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes lineFlow {\n  0% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: -100%; } }\n@keyframes lineFlow {\n  0% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: -100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return History; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__diagram_requests_time_chart_chart_component__ = __webpack_require__("../../../../../src/app/diagram/requests-time-chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_system_info_system_info_service__ = __webpack_require__("../../../../../src/app/common/system-info/system-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_system_failure_system_failure_service__ = __webpack_require__("../../../../../src/app/common/system-failure/system-failure.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var History = (function () {
    function History(route, router, systemInfoService, systemFailureService) {
        this.route = route;
        this.router = router;
        this.systemInfoService = systemInfoService;
        this.systemFailureService = systemFailureService;
        this.chartData = [];
        this.systems = [];
        this.filteredSystems = [];
        this.systemInputCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.chartState = null;
        this.failureLogs = [];
        var begin = new Date();
        begin.setHours(0);
        begin.setMinutes(0);
        begin.setSeconds(0);
        begin.setMilliseconds(0);
        var end = new Date();
        end.setHours(23);
        end.setMinutes(59);
        end.setSeconds(59);
        end.setMilliseconds(999);
        this.chartOpt = {
            system: "",
            begin: begin,
            end: end
        };
    }
    History.prototype.loadSystems = function () {
        var _this = this;
        this.systemInfoService.getSystemList()
            .then(function (systems) {
            _this.systems = systems;
            _this.filterSystems(_this.systemInputCtrl.value);
        });
    };
    History.prototype.filterSystems = function (val) {
        if (val)
            this.filteredSystems = this.systems.filter(function (s) { return new RegExp("^" + val, "gi").test(s); });
        else
            this.filteredSystems = this.systems;
    };
    History.prototype.ngOnInit = function () {
        var _this = this;
        this.loadSystems();
        this.systemInputCtrl.valueChanges.subscribe(function (name) { return _this.filterSystems(name); });
        this.route.queryParams.subscribe(function (params) {
            if (params["system"])
                _this.chartOpt.system = params["system"];
            if (params["begin"])
                _this.chartOpt.begin = new Date(params["begin"] * 1000);
            if (params["end"])
                _this.chartOpt.end = new Date(params["end"] * 1000);
            if (_this.chartOpt.system.trim().length > 0)
                _this.go();
        });
    };
    History.prototype.testDiagram = function () {
        var data = new Array();
        var now = Math.round(new Date().getTime() / 1000);
        for (var i = 0; i < 100; i++) {
            data.push({
                time: now - i * 60,
                rpm: Math.round(Math.random() * 300) + 500,
                fpm: Math.round(Math.random() * 10)
            });
        }
        this.chartData = data;
        this.chartState = "shown";
    };
    History.prototype.beginDateChanged = function (date) {
        var begin = date.value;
        begin.setHours(0);
        begin.setMinutes(0);
        begin.setSeconds(0);
        begin.setMilliseconds(0);
        if (begin > this.chartOpt.end) {
            var end = new Date(begin);
            end.setHours(23);
            end.setMinutes(59);
            end.setSeconds(59);
            end.setMilliseconds(999);
            this.chartOpt.end = end;
        }
        this.chartOpt.begin = begin;
    };
    History.prototype.endDateChanged = function (date) {
        var end = date.value;
        end.setHours(23);
        end.setMinutes(59);
        end.setSeconds(59);
        end.setMilliseconds(999);
        if (end < this.chartOpt.begin) {
            var begin = new Date(end);
            begin.setHours(0);
            begin.setMinutes(0);
            begin.setSeconds(0);
            begin.setMilliseconds(0);
            this.chartOpt.begin = begin;
        }
        this.chartOpt.end = end;
    };
    History.prototype.go = function () {
        var _this = this;
        var system = this.chartOpt.system;
        if (system === "") {
            window.alert("please select a system");
            return;
        }
        var begin = Math.round(this.chartOpt.begin.getTime() / 1000);
        var end = Math.round(this.chartOpt.end.getTime() / 1000);
        this.chartState = "loading";
        this.systemInfoService.getSystemInfo(system, begin, end)
            .then(function (systemInfo) {
            if (systemInfo.length === 0) {
                _this.chartState = "noData";
                return;
            }
            var data = systemInfo.map(function (info) {
                return {
                    time: info.time,
                    rpm: info.rpm,
                    fpm: info.fpm
                };
            });
            _this.chartData = data;
            _this.chartState = "shown";
        });
        this.systemFailureService.getSystemFailure({
            system: system,
            begin: begin,
            end: end,
            count: 100
        })
            .then(function (systemFailures) {
            _this.failureLogs = systemFailures;
        });
    };
    return History;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("chart"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__diagram_requests_time_chart_chart_component__["a" /* RequestsTimeChart */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__diagram_requests_time_chart_chart_component__["a" /* RequestsTimeChart */]) === "function" && _a || Object)
], History.prototype, "chart", void 0);
History = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "ow-history",
        template: __webpack_require__("../../../../../src/app/history/history.template.html"),
        styles: [__webpack_require__("../../../../../src/app/history/history.style.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__common_system_info_system_info_service__["a" /* SystemInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_system_info_system_info_service__["a" /* SystemInfoService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__common_system_failure_system_failure_service__["a" /* SystemFailureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_system_failure_system_failure_service__["a" /* SystemFailureService */]) === "function" && _e || Object])
], History);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=history.component.js.map

/***/ }),

/***/ "../../../../../src/app/history/history.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_common_module__ = __webpack_require__("../../../../../src/app/common/common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__diagram_diagram_module__ = __webpack_require__("../../../../../src/app/diagram/diagram.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__history_component__ = __webpack_require__("../../../../../src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_system_info_system_info_service__ = __webpack_require__("../../../../../src/app/common/system-info/system-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_system_failure_system_failure_service__ = __webpack_require__("../../../../../src/app/common/system-failure/system-failure.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HistoryModule = (function () {
    function HistoryModule() {
    }
    return HistoryModule;
}());
HistoryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdNativeDateModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDatepickerModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_4__common_common_module__["a" /* OverwatchCommonModule */], __WEBPACK_IMPORTED_MODULE_5__diagram_diagram_module__["a" /* DiagramModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__history_component__["a" /* History */]],
        exports: [__WEBPACK_IMPORTED_MODULE_6__history_component__["a" /* History */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__common_system_info_system_info_service__["a" /* SystemInfoService */], __WEBPACK_IMPORTED_MODULE_8__common_system_failure_system_failure_service__["a" /* SystemFailureService */]]
    })
], HistoryModule);

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ "../../../../../src/app/history/history.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  overflow-y: auto; }\n\n.main {\n  margin: auto;\n  width: 100%;\n  max-width: 1000px; }\n  .main form {\n    margin-top: 5em;\n    text-align: center;\n    font-size: 1em; }\n  .main .chart {\n    height: 400px;\n    box-shadow: 0 0 10px #666; }\n    .main .chart ow-chart-rq-t {\n      height: 400px; }\n    .main .chart md-spinner {\n      margin: auto;\n      height: 400px; }\n    .main .chart > div {\n      text-align: center;\n      line-height: 400px; }\n  .main .failure-log {\n    margin-top: 5em; }\n    .main .failure-log h1 {\n      text-align: center;\n      font-size: 1.5em; }\n    .main .failure-log .table-wrapper {\n      overflow-x: auto;\n      text-align: center;\n      margin-bottom: 5em; }\n      .main .failure-log .table-wrapper table {\n        width: 100%;\n        text-align: left;\n        font-size: 1em;\n        font-family: monospace; }\n        .main .failure-log .table-wrapper table thead {\n          color: #888;\n          line-height: 1.5em; }\n        .main .failure-log .table-wrapper table td, .main .failure-log .table-wrapper table th {\n          padding: .2em .5em;\n          white-space: nowrap; }\n        .main .failure-log .table-wrapper table td {\n          color: #ddd; }\n        .main .failure-log .table-wrapper table td.status {\n          color: #d44; }\n        .main .failure-log .table-wrapper table td.time {\n          color: #888; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/history/history.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <form action=\"javascript: void(0)\">\n\n    <md-form-field>\n      <input mdInput placeholder=\"System\" name=\"system\"\n        [mdAutocomplete]=\"auto\"\n        [formControl]=\"systemInputCtrl\"\n        [(ngModel)]=\"chartOpt.system\">\n    </md-form-field>\n    <md-autocomplete #auto=\"mdAutocomplete\">\n      <md-option *ngFor=\"let system of filteredSystems\" [value]=\"system\">\n        {{ system }}\n      </md-option>\n    </md-autocomplete>\n\n    <md-form-field>\n      <input mdInput placeholder=\"Begin\" name=\"begin\"\n        [mdDatepicker]=\"beginDatepicker\"\n        [value]=\"chartOpt.begin\"\n        (dateChange)=\"beginDateChanged($event)\">\n      <md-datepicker-toggle mdSuffix [for]=\"beginDatepicker\"></md-datepicker-toggle>\n      <md-datepicker #beginDatepicker [startAt]=\"chartOpt.begin\"></md-datepicker>\n    </md-form-field>\n\n    <md-form-field>\n      <input mdInput placeholder=\"End\" name=\"end\"\n        [mdDatepicker]=\"endDatepicker\"\n        [value]=\"chartOpt.end\"\n        (dateChange)=\"endDateChanged($event)\">\n      <md-datepicker-toggle mdSuffix [for]=\"endDatepicker\"></md-datepicker-toggle>\n      <md-datepicker #endDatepicker [startAt]=\"chartOpt.end\"></md-datepicker>\n    </md-form-field>\n\n    <button md-raised-button (click)=\"go()\" [disabled]=\"chartOpt.system.trim().length == 0\">GO</button>\n\n  </form>\n\n  <div class=\"chart\">\n    <ow-chart-rq-t #chart [data]=\"chartData\" *ngIf=\"chartState === 'shown'\"></ow-chart-rq-t>\n    <div *ngIf=\"chartState === null\">\n      Select system &amp; time\n    </div>\n    <div *ngIf=\"chartState === 'loading'\">\n      <md-spinner></md-spinner>\n    </div>\n    <div *ngIf=\"chartState === 'noData'\">\n      No Data\n    </div>\n  </div>\n\n  <div class=\"failure-log\">\n    <h1>Failure Log</h1>\n    <div class=\"table-wrapper\">\n      <table *ngIf=\"failureLogs.length > 0\">\n        <thead>\n          <tr>\n            <th>Time</th>\n            <th>Status</th>\n            <th>Host</th>\n            <th>URL</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let logItem of failureLogs\">\n            <td class=\"time\">{{ logItem.time | timestamp: 'time' }}</td>\n            <td class=\"status\">{{ logItem.status }}</td>\n            <td>{{ logItem.host }}</td>\n            <td>{{ logItem.url }}</td>\n          </tr>\n        </tbody>\n      </table>\n      <span *ngIf=\"failureLogs.length === 0\">No Data</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/layout-name-input-dialog.template.html":
/***/ (function(module, exports) {

module.exports = "<md-input-container>\n  <input mdInput placeholder=\"Layout Name\" name=\"layoutName\" [(ngModel)]=\"layoutName\">\n</md-input-container>\n<div>\n  <button md-button (click)=\"cancel()\">Cancel</button>\n  <button md-button (click)=\"confirm()\">Confirm</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LayoutNameInputDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__diagram_layout_editor_layout_editor_component__ = __webpack_require__("../../../../../src/app/diagram/layout-editor/layout-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_system_info_system_info_service__ = __webpack_require__("../../../../../src/app/common/system-info/system-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_user_layout_dto__ = __webpack_require__("../../../../../src/app/common/user/layout.dto.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Layout = (function () {
    function Layout(snackBar, dialog, userService, systemInfoService) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.userService = userService;
        this.systemInfoService = systemInfoService;
        this.newSystem = "";
        this.boxes = new Set();
        this.selectedLayout = "null";
        this.layouts = [];
        this.layoutInputCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.isNew = true;
    }
    Layout.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutInputCtrl.valueChanges.subscribe(function (input) {
            if (input === undefined)
                return;
            var layout;
            layout = input === "null" ? null : input;
            _this.isNew = layout === null;
            _this.layoutName = layout === null ? null : layout.name;
            if (layout !== null)
                _this.showLayout(layout);
            else
                _this.layoutEditor.clear();
        });
        this.userService.getUserLayouts()
            .then(function (layouts) {
            _this.layouts = layouts;
            _this.selectedLayout = "null";
        });
    };
    Layout.prototype.showLayout = function (layout) {
        var _this = this;
        this.layoutEditor.clear();
        this.boxes.clear();
        layout.boxes.forEach(function (box, id) { return _this.layoutEditor.addBox(id, box.x, box.y, box.width, box.height); });
        layout.nodes.forEach(function (boxId, name) { return _this.layoutEditor.addNode(name, boxId); });
    };
    Layout.prototype.addNode = function () {
        if (this.newSystem.trim().length === 0)
            return;
        this.layoutEditor.addNode(this.newSystem, "");
        this.newSystem = "";
    };
    Layout.prototype.removeNode = function (node) {
        this.layoutEditor.removeNode(node);
    };
    Layout.prototype.addBox = function () {
        if (this.boxes.size >= 10)
            return;
        var id;
        do {
            id = Math.round(Math.random() * 100).toString();
        } while (this.boxes.has(id));
        this.layoutEditor.addBox(id, 100, 100, 200, 100);
    };
    Layout.prototype.removeBox = function (boxId) {
        this.layoutEditor.removeBox(boxId);
        this.boxes.delete(boxId);
    };
    Layout.prototype.save = function () {
        var _this = this;
        if (this.isNew) {
            var dialogRef = this.dialog.open(LayoutNameInputDialog);
            dialogRef.afterClosed().subscribe(function (result) {
                if (result && result.trim().length > 0) {
                    _this.layoutName = result;
                    _this.doSave(result, true);
                }
            });
        }
        else {
            this.doSave(this.layoutName, false);
        }
    };
    Layout.prototype.doSave = function (layoutName, isNew) {
        var _this = this;
        var layoutVo = this.layoutEditor.save();
        var layoutDto = new __WEBPACK_IMPORTED_MODULE_6__common_user_layout_dto__["a" /* LayoutDto */]();
        layoutDto.name = layoutName;
        layoutVo.boxes.forEach(function (box, boxId) { return layoutDto.boxes.set(boxId, {
            x: box.x, y: box.y, width: box.width, height: box.height
        }); });
        layoutVo.nodes.forEach(function (boxId, name) { return layoutDto.nodes.set(name, boxId); });
        this.userService.saveLayout(layoutDto)
            .then(function () {
            if (isNew) {
                _this.layouts.push(layoutDto);
                _this.selectedLayout = layoutDto;
            }
            else {
                var layout = _this.layouts.find(function (l) { return layoutDto.name === l.name; });
                layout.nodes = layoutDto.nodes;
                layout.boxes = layoutDto.boxes;
            }
            _this.snackBar.open("Layout Saved!", "Done", {
                duration: 2000
            });
        });
    };
    Layout.prototype.delete = function () {
        var _this = this;
        var found = this.layouts.findIndex(function (layout) { return layout.name === _this.layoutName; });
        if (found < 0)
            return;
        this.userService.deleteLayout(this.layoutName)
            .then(function () {
            _this.layouts.splice(found, 1);
            _this.selectedLayout = "null";
            _this.layoutName = undefined;
            _this.snackBar.open("Layout Deleted!", "Done", {
                duration: 2000
            });
        });
    };
    return Layout;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("editor"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__diagram_layout_editor_layout_editor_component__["a" /* LayoutEditor */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__diagram_layout_editor_layout_editor_component__["a" /* LayoutEditor */]) === "function" && _a || Object)
], Layout.prototype, "layoutEditor", void 0);
Layout = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "ow-layout",
        template: __webpack_require__("../../../../../src/app/layout/layout.template.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.style.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__common_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_user_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__common_system_info_system_info_service__["a" /* SystemInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_system_info_system_info_service__["a" /* SystemInfoService */]) === "function" && _e || Object])
], Layout);

var LayoutNameInputDialog = (function () {
    function LayoutNameInputDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    LayoutNameInputDialog.prototype.cancel = function () {
        this.dialogRef.close();
    };
    LayoutNameInputDialog.prototype.confirm = function () {
        this.dialogRef.close(this.layoutName);
    };
    return LayoutNameInputDialog;
}());
LayoutNameInputDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "layout-name-input-dialog",
        template: __webpack_require__("../../../../../src/app/layout/layout-name-input-dialog.template.html"),
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialogRef */]) === "function" && _f || Object])
], LayoutNameInputDialog);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_common_module__ = __webpack_require__("../../../../../src/app/common/common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__diagram_diagram_module__ = __webpack_require__("../../../../../src/app/diagram/diagram.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_system_info_system_info_service__ = __webpack_require__("../../../../../src/app/common/system-info/system-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_system_failure_system_failure_service__ = __webpack_require__("../../../../../src/app/common/system-failure/system-failure.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MdSnackBarModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_4__common_common_module__["a" /* OverwatchCommonModule */], __WEBPACK_IMPORTED_MODULE_5__diagram_diagram_module__["a" /* DiagramModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__layout_component__["a" /* Layout */], __WEBPACK_IMPORTED_MODULE_6__layout_component__["b" /* LayoutNameInputDialog */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_6__layout_component__["b" /* LayoutNameInputDialog */]],
        exports: [__WEBPACK_IMPORTED_MODULE_6__layout_component__["a" /* Layout */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__common_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__common_system_info_system_info_service__["a" /* SystemInfoService */], __WEBPACK_IMPORTED_MODULE_9__common_system_failure_system_failure_service__["a" /* SystemFailureService */]]
    })
], LayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/layout.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n\n.ops-wrapper {\n  padding: 1em;\n  margin-top: 5em;\n  overflow: hidden; }\n  .ops-wrapper > div {\n    display: inline-block;\n    padding-left: 5em; }\n\n.full-width {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/layout.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ops-wrapper\">\n\n  <div>\n    <md-select placeholder=\"Layout\" [(ngModel)]=\"selectedLayout\" name=\"layout\" [formControl]=\"layoutInputCtrl\">\n      <md-option *ngFor=\"let layout of layouts; trackBy: layout?.name\" [value]=\"layout\">\n        {{ layout.name }}\n      </md-option>\n      <md-option value=\"null\">&lt;New&gt;</md-option>\n    </md-select>\n  </div>\n\n  <div>\n    <md-input-container>\n      <input mdInput placeholder=\"System\" name=\"system\" [(ngModel)]=\"newSystem\" (keyup.enter)=\"addNode()\">\n    </md-input-container>\n    <button md-button [disabled]=\"newSystem.trim().length === 0\" (click)=\"addNode()\">Add</button>\n    <button md-button [disabled]=\"boxes.size >= 10\" (click)=\"addBox()\">Add Box</button>\n  </div>\n\n  <div>\n    <button md-raised-button (click)=\"save()\">Save</button>\n    <button md-raised-button (click)=\"delete()\">Delete</button>\n  </div>\n\n</div>\n\n<ow-layout-editor #editor\n  [data]=\"currentLayout\"\n  (nodeRemoved)=\"removeNode($event)\"\n  (boxRemoved)=\"removeBox($event)\"></ow-layout-editor>\n"

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toolbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Toolbar = (function () {
    function Toolbar(route, router) {
        this.route = route;
        this.router = router;
    }
    Toolbar.prototype.goto = function (page) {
        this.router.navigate(["/" + page]);
    };
    return Toolbar;
}());
Toolbar = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "ow-toolbar",
        template: __webpack_require__("../../../../../src/app/toolbar/toolbar.template.html"),
        styles: [__webpack_require__("../../../../../src/app/toolbar/toolbar.style.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], Toolbar);

var _a, _b;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common_module__ = __webpack_require__("../../../../../src/app/common/common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbar_component__ = __webpack_require__("../../../../../src/app/toolbar/toolbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ToolbarModule = (function () {
    function ToolbarModule() {
    }
    return ToolbarModule;
}());
ToolbarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__common_common_module__["a" /* OverwatchCommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__toolbar_component__["a" /* Toolbar */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__toolbar_component__["a" /* Toolbar */]],
        providers: []
    })
], ToolbarModule);

//# sourceMappingURL=toolbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  background-color: rgba(255, 255, 255, 0.1); }\n\n.menu-items {\n  overflow: hidden;\n  padding-left: 2em;\n  padding-right: 2em;\n  margin: 0; }\n  .menu-items .menu-item {\n    float: left;\n    padding: 1em; }\n    .menu-items .menu-item.right {\n      float: right; }\n    .menu-items .menu-item:hover {\n      background-color: rgba(255, 255, 255, 0.1);\n      cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <nav class=\"menu-items\">\n    <a class=\"menu-item\" (click)=\"goto('dashboard')\">\n      <i class=\"fa fa-dashboard fa-fw\" aria-hidden=\"true\"></i>&nbsp; Dashboard\n    </a>\n    <a class=\"menu-item\" (click)=\"goto('history')\">\n      <i class=\"fa fa-history fa-fw\" aria-hidden=\"true\"></i>&nbsp; History\n    </a>\n    <a class=\"menu-item\" (click)=\"goto('layout')\">\n      <i class=\"fa fa-th-large fa-fw\" aria-hidden=\"true\"></i>&nbsp; Layout\n    </a>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: "http://localhost:3000"
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
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