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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _pages_play_play_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/play/play.component */ "./src/app/pages/play/play.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/error404/error404.component */ "./src/app/pages/error404/error404.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: 'game/:playerName', component: _pages_play_play_component__WEBPACK_IMPORTED_MODULE_2__["PlayComponent"] },
    { path: '**', component: _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_4__["Error404Component"] }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6 text-center\">\n  <router-outlet></router-outlet>\n</div>\n\n"

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_play_play_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/play/play.component */ "./src/app/pages/play/play.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/error404/error404.component */ "./src/app/pages/error404/error404.component.ts");
/* harmony import */ var _pages_play_game_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/play/game/game.component */ "./src/app/pages/play/game/game.component.ts");
/* harmony import */ var _pages_play_players_players_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/play/players/players.component */ "./src/app/pages/play/players/players.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_play_play_component__WEBPACK_IMPORTED_MODULE_5__["PlayComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_8__["Error404Component"],
                _pages_play_game_game_component__WEBPACK_IMPORTED_MODULE_9__["GameComponent"],
                _pages_play_players_players_component__WEBPACK_IMPORTED_MODULE_10__["PlayersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/error404/error404.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/error404/error404.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/error404/error404.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/error404/error404.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"padding-top-lg\">\n  <img width=\"300\" alt=\"404 page not found\" src=\"assets/images/404.svg\">\n</p>\n<p>\n  Page not found\n</p>\n<p>\n  <button type=\"button\" class=\"btn btn-primary btn-lg\" routerLink=\"\">\n    Home\n  </button>\n</p>\n"

/***/ }),

/***/ "./src/app/pages/error404/error404.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/error404/error404.component.ts ***!
  \******************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
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

var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error404',
            template: __webpack_require__(/*! ./error404.component.html */ "./src/app/pages/error404/error404.component.html"),
            styles: [__webpack_require__(/*! ./error404.component.css */ "./src/app/pages/error404/error404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Welcome to Math Game!\n</h1>\n\n<p>A realtime browser-based math game for up to 10 concurrent users</p>\n\n<p>\n  <img width=\"200\" alt=\"Math game logo\" src=\"assets/images/logo.svg\">\n</p>\n\n<h2>Challenge</h2>\n<p class=\"text-justify\">You will be presented with a simple math question, consisting of a basic operation (+ - * /), two operands in range 1..10\n  and a potential answer. Your goal is to tell whether the proposed answer is correct as fast as possible, using a simple\n  yes/no choice.</p>\n\n<h2>Scoring</h2>\n<p class=\"text-justify\">The first player to submit a correct answer gets 1 point for the round and completes the round. All incorrect answers subtract\n  a point from the players' score. Correct late answers do not affect the score. After completing the round all players are\n  informed that the round is over and a new round starts in 5 seconds after the end of last one.</p>\n\n<form (ngSubmit)=\"join()\" #joinForm=\"ngForm\">\n  <div class=\"form-group input-group pt-2 pb-2\">\n    <input type=\"text\" name=\"playerName\" class=\"form-control\" placeholder=\"Player's name\" [(ngModel)]=\"playerName\" required>\n    <div class=\"input-group-append\">\n      <button type=\"submit\" class=\"btn btn-primary btn-lg\" [disabled]=\"!joinForm.form.valid\">\n        Join\n      </button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.join = function () {
        this.router.navigate(['game', this.playerName]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/play/game/game.component.css":
/*!****************************************************!*\
  !*** ./src/app/pages/play/game/game.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/play/game/game.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/play/game/game.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-2 pb-2\" *ngIf=\"!isGameFull\">\n  <ngb-progressbar [type]=\"isRoundOpen ? 'primary' : 'warning'\" type=\"primary\" [value]=\"progress\">\n  </ngb-progressbar>\n</div>\n<div class=\"container\" *ngIf=\"!challenge && !isGameFull\">\n  <h2>Connected!</h2>\n  <h3>Waiting for the first challenge...</h3>\n</div>\n<div class=\"container\" *ngIf=\"isGameFull\">\n  <h3>Sorry, the game is full.</h3>\n  <h1>Try again later.</h1>\n</div>\n<div class=\"container\" *ngIf=\"isAnswerWrong\">\n  <h2>Wrong answer.</h2>\n  <h3>Waiting for the round to end...</h3>\n</div>\n<div class=\"container\" *ngIf=\"isRoundOpen && !isAnswerWrong\">\n  <h3>Round #{{round}}</h3>\n  <h1>{{challenge}}</h1>\n</div>\n<div class=\"container\" *ngIf=\"!isAnswerWrong && !isRoundOpen && challenge\">\n  <h2>Round #{{round}} ended.</h2>\n  <h3>Waiting for the next challenge...</h3>\n</div>\n<div class=\"container\">\n  <div class=\"row\" *ngIf=\"isRoundOpen && !isAnswerWrong\">\n    <div class=\"col-sm pr-0\">\n      <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"answer(true)\">\n        Correct\n      </button>\n    </div>\n    <div class=\"col-sm pl-0\">\n      <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"answer(false)\">\n        Wrong\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/play/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/play/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/socket.service */ "./src/app/services/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameComponent = /** @class */ (function () {
    function GameComponent(socketService) {
        this.socketService = socketService;
        this.mySocketId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.onStartRound()
            .subscribe(function (params) {
            _this.startRound(params['round'], params['challenge']);
        });
        this.socketService.onEndRound()
            .subscribe(function () {
            _this.endRound();
        });
        this.socketService.onGameFull()
            .subscribe(function () {
            _this.isGameFull = true;
        });
        this.socketService.onWrongAnswer()
            .subscribe(function () {
            _this.isAnswerWrong = true;
        });
        this.socketService.onGameJoined()
            .subscribe(function (params) {
            _this.roundSeconds = params['roundSeconds'];
            _this.breakSeconds = params['breakSeconds'];
            _this.mySocketId.emit(params['socketId']);
            _this.endRound();
        });
        this.socketService.joinGame(this.playerName);
    };
    GameComponent.prototype.answer = function (answer) {
        this.socketService.sendAnswer(answer);
    };
    GameComponent.prototype.startRound = function (round, challenge) {
        this.isRoundOpen = true;
        this.isAnswerWrong = false;
        this.round = round;
        this.challenge = challenge;
        this.moveProgress(this.roundSeconds, true, round);
    };
    GameComponent.prototype.moveProgress = function (remainingSeconds, isRoundOpen, myRound) {
        var _this = this;
        if (isRoundOpen === this.isRoundOpen && myRound === this.round) {
            var totalSeconds = this.isRoundOpen ? this.roundSeconds : this.breakSeconds;
            this.progress = (100 / totalSeconds) * remainingSeconds;
            if (remainingSeconds > 0) {
                remainingSeconds--;
                setTimeout(function () { return _this.moveProgress(remainingSeconds, isRoundOpen, myRound); }, 1000);
            }
        }
    };
    GameComponent.prototype.endRound = function () {
        this.isAnswerWrong = false;
        this.isRoundOpen = false;
        this.moveProgress(this.breakSeconds, false, this.round);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GameComponent.prototype, "playerName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GameComponent.prototype, "challenge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Boolean)
    ], GameComponent.prototype, "isRoundOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Boolean)
    ], GameComponent.prototype, "isGameFull", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Boolean)
    ], GameComponent.prototype, "isAnswerWrong", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Number)
    ], GameComponent.prototype, "progress", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Number)
    ], GameComponent.prototype, "round", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GameComponent.prototype, "mySocketId", void 0);
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/pages/play/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/pages/play/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/pages/play/play.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/play/play.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/play/play.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/play/play.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-8 pt-2 pb-2\" *ngIf=\"headerMessage\">\n    <p>\n      <ngb-progressbar [type]=\"progress < 100 ? 'primary' : 'danger'\" [value]=\"progress\">\n      </ngb-progressbar>\n    </p>\n    <h2>{{headerMessage}}</h2>\n  </div>\n  <div class=\"col-sm-8\" *ngIf=\"!headerMessage\">\n    <app-game (mySocketId)=\"onMySocketId($event)\" [playerName]=\"playerName\"></app-game>\n  </div>\n  <div class=\"col-sm-4\">\n    <app-players [mySocketId]=\"mySocketId\"></app-players>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/play/play.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/play/play.component.ts ***!
  \**********************************************/
/*! exports provided: PlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayComponent", function() { return PlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayComponent = /** @class */ (function () {
    function PlayComponent(socketService, route) {
        this.socketService = socketService;
        this.route = route;
        this.maxRetries = 10;
        this.retriesCount = 0;
        this.progress = 0;
        this.headerMessage = 'Connecting to server...';
    }
    PlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.playerName = params['playerName'];
            if (_this.playerName === 'undefined') {
                _this.playerName = null;
            }
        });
        this.socketService.connect();
        setTimeout(function () { return _this.checkConnection(); }, 1000);
    };
    PlayComponent.prototype.onMySocketId = function (mySocketId) {
        this.mySocketId = mySocketId;
    };
    PlayComponent.prototype.checkConnection = function () {
        var _this = this;
        if (this.socketService.isConnected()) {
            this.headerMessage = null;
        }
        else if (this.retriesCount < this.maxRetries) {
            this.retriesCount++;
            this.progress = (100 / this.maxRetries) * this.retriesCount;
        }
        else {
            this.headerMessage = 'Connection failed';
        }
        setTimeout(function () { return _this.checkConnection(); }, 1000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", String)
    ], PlayComponent.prototype, "playerName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", String)
    ], PlayComponent.prototype, "mySocketId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PlayComponent.prototype, "progress", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PlayComponent.prototype, "headerMessage", void 0);
    PlayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-play',
            template: __webpack_require__(/*! ./play.component.html */ "./src/app/pages/play/play.component.html"),
            styles: [__webpack_require__(/*! ./play.component.css */ "./src/app/pages/play/play.component.css")]
        }),
        __metadata("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PlayComponent);
    return PlayComponent;
}());



/***/ }),

/***/ "./src/app/pages/play/players/players.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pages/play/players/players.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/play/players/players.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/play/players/players.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group pt-2 pb-2\" *ngIf=\"players.length > 0\">\n  <li class=\"list-group-item list-group-item-secondary\">Scoreboard</li>\n  <li class=\"list-group-item text-left\" *ngFor=\"let player of players; let i = index\" [ngClass]=\"{'active' : player.socketId == mySocketId }\">\n    {{i+1}}. {{player.name}}\n    <span class=\"badge badge-warning badge-pill pull-right\">{{player.score}}</span>\n  </li>\n</ul>\n\n<p class=\"pt-2 pb-2\">\n  <button type=\"button\" class=\"btn btn-danger btn-lg\" routerLink=\"\" (click)=\"exit()\">\n    Exit\n  </button>\n</p>\n"

/***/ }),

/***/ "./src/app/pages/play/players/players.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/play/players/players.component.ts ***!
  \*********************************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/socket.service */ "./src/app/services/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayersComponent = /** @class */ (function () {
    function PlayersComponent(socketService) {
        this.socketService = socketService;
        this.players = [];
    }
    PlayersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.onPlayers()
            .subscribe(function (players) {
            _this.players = players;
            _this.players = _this.players.sort(function (a, b) { return b.score - a.score; });
        });
    };
    PlayersComponent.prototype.exit = function () {
        if (this.socketService != null) {
            this.socketService.disconnect();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PlayersComponent.prototype, "mySocketId", void 0);
    PlayersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-players',
            template: __webpack_require__(/*! ./players.component.html */ "./src/app/pages/play/players/players.component.html"),
            styles: [__webpack_require__(/*! ./players.component.css */ "./src/app/pages/play/players/players.component.css")]
        }),
        __metadata("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]])
    ], PlayersComponent);
    return PlayersComponent;
}());



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var config = __webpack_require__(/*! ../../assets/server-config.json */ "./src/assets/server-config.json");
var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.prototype.connect = function () {
        var serverUrl = config.url;
        if (config.port) {
            serverUrl += ':' + config.port;
        }
        console.log('Connecting to %s', serverUrl);
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(serverUrl);
    };
    SocketService.prototype.isConnected = function () {
        return this.socket.connected;
    };
    SocketService.prototype.joinGame = function (playerName) {
        this.socket.emit('joinGame', playerName);
    };
    SocketService.prototype.sendAnswer = function (answer) {
        if (this.socket != null) {
            this.socket.emit('answer', answer);
        }
        else {
            console.log('Error: send failed because socket is not initialized');
        }
    };
    SocketService.prototype.disconnect = function () {
        if (this.socket != null) {
            this.socket.disconnect();
        }
        else {
            console.log('Error: disconnect failed because socket is not initialized');
        }
    };
    SocketService.prototype.onStartRound = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('startRound', function (round, challenge) { return observer.next({ round: round, challenge: challenge }); });
        });
    };
    SocketService.prototype.onEndRound = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('endRound', function () { return observer.next(); });
        });
    };
    SocketService.prototype.onGameFull = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('gameFull', function () { return observer.next(); });
        });
    };
    SocketService.prototype.onWrongAnswer = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('wrongAnswer', function () { return observer.next(); });
        });
    };
    SocketService.prototype.onGameJoined = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('gameJoined', function (roundSeconds, breakSeconds, socketId) {
                return observer.next({ roundSeconds: roundSeconds, breakSeconds: breakSeconds, socketId: socketId });
            });
        });
    };
    SocketService.prototype.onPlayers = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('players', function (players) { return observer.next(players); });
        });
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/assets/server-config.json":
/*!***************************************!*\
  !*** ./src/assets/server-config.json ***!
  \***************************************/
/*! exports provided: url, port, default */
/***/ (function(module) {

module.exports = {"url":"https://dry-scrubland-70164.herokuapp.com","port":null};

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

module.exports = __webpack_require__(/*! C:\Users\Marco\src\math-game\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map