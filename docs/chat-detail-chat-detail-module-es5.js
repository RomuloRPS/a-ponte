function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-detail-chat-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail/chat-detail.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail/chat-detail.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatDetailChatDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\n  Generated template for the ChatDetailPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Conversa</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor=\"let message of chat.messages\" class=\"message-wrapper rlt\"\n       (hold)=\"onMessageHold($event, $index, message)\">\n\n    <div *ngIf=\"message.type == 'received'\">\n\n      <img class=\"profile-picture left\" src=\"{{ chat.face }}\"/>\n\n      <div class=\"chat-bubble left\">\n\n        <div class=\"message\">\n          {{ message.text }}e\n          <img src=\"{{ message.image }}\" class=\"block\" *ngIf=\"message.image\" alt=\"\"/>\n        </div>\n\n        <div class=\"message-detail\">\n          <span class=\"message-time\">{{ message.time }}</span>\n        </div>\n\n      </div>\n    </div>\n\n    <div *ngIf=\"message.type == 'sent'\">\n\n      <img class=\"profile-picture right\" src=\"./assets/img/thumb/adam.jpg\"/>\n\n      <div class=\"chat-bubble right\">\n\n        <div class=\"message\" ng-bind-html=\"message.text\">\n          {{ message.text }}\n        </div>\n\n        <div class=\"message-detail\">\n          <span class=\"message-time\">{{ message.time }}</span>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"cf\"></div>\n\n  </div>\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar class=\"no-border\" color=\"light\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon name=\"camera\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-input [(ngModel)]=\"newMessage\" placeholder=\"Escreva sua mensagem\"></ion-input>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"sendMessage()\">\n        <ion-icon name=\"send\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/chat-detail/chat-detail-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/chat-detail/chat-detail-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ChatDetailPageRoutingModule */

  /***/
  function srcAppChatDetailChatDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatDetailPageRoutingModule", function () {
      return ChatDetailPageRoutingModule;
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


    var _chat_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat-detail.page */
    "./src/app/chat-detail/chat-detail.page.ts");

    var routes = [{
      path: '',
      component: _chat_detail_page__WEBPACK_IMPORTED_MODULE_3__["ChatDetailPage"]
    }];

    var ChatDetailPageRoutingModule = function ChatDetailPageRoutingModule() {
      _classCallCheck(this, ChatDetailPageRoutingModule);
    };

    ChatDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chat-detail/chat-detail.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/chat-detail/chat-detail.module.ts ***!
    \***************************************************/

  /*! exports provided: ChatDetailPageModule */

  /***/
  function srcAppChatDetailChatDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatDetailPageModule", function () {
      return ChatDetailPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _chat_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chat-detail-routing.module */
    "./src/app/chat-detail/chat-detail-routing.module.ts");
    /* harmony import */


    var _chat_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-detail.page */
    "./src/app/chat-detail/chat-detail.page.ts");

    var ChatDetailPageModule = function ChatDetailPageModule() {
      _classCallCheck(this, ChatDetailPageModule);
    };

    ChatDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatDetailPageRoutingModule"]],
      declarations: [_chat_detail_page__WEBPACK_IMPORTED_MODULE_6__["ChatDetailPage"]]
    })], ChatDetailPageModule);
    /***/
  },

  /***/
  "./src/app/chat-detail/chat-detail.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/chat-detail/chat-detail.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatDetailChatDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\nimg.profile-picture {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  bottom: 10px;\n}\nimg.profile-picture.left {\n  left: 10px;\n}\nimg.profile-picture.right {\n  right: 10px;\n}\n.ion-email {\n  float: right;\n  font-size: 32px;\n  vertical-align: middle;\n}\n.message {\n  font-size: 14px;\n}\n.message-detail {\n  white-space: nowrap;\n  font-size: 14px;\n}\n.bar.item-input-inset .item-input-wrapper input {\n  width: 100% !important;\n}\n.message-wrapper {\n  position: relative;\n}\n.message-wrapper:last-child {\n  margin-bottom: 10px;\n}\n.chat-bubble {\n  border-radius: 5px;\n  display: inline-block;\n  padding: 10px 18px;\n  position: relative;\n  margin: 10px;\n  max-width: 80%;\n}\n.chat-bubble .message-time {\n  font-size: 0.7em;\n  display: block;\n}\n.chat-bubble:before {\n  content: \" \";\n  display: block;\n  height: 16px;\n  width: 9px;\n  position: absolute;\n  bottom: -7.5px;\n}\n.chat-bubble.left {\n  background-color: #e6e5eb;\n  float: left;\n  margin-left: 55px;\n}\n.chat-bubble.left:before {\n  background-color: #e6e5eb;\n  left: 10px;\n  -webkit-transform: rotate(70deg) skew(5deg);\n}\n.chat-bubble.right {\n  background-color: #158ffe;\n  color: #fff;\n  float: right;\n  margin-right: 55px;\n}\n.chat-bubble.right:before {\n  background-color: #158ffe;\n  right: 10px;\n  -webkit-transform: rotate(118deg) skew(-5deg);\n}\n.chat-bubble.right a.autolinker {\n  color: #fff;\n  font-weight: bold;\n}\n.chat-bubble.right .message-time {\n  text-align: right;\n}\n.bar-footer {\n  height: auto;\n  overflow: visible !important;\n}\n.bar-footer .item-input-inset {\n  padding-left: 0;\n  padding-right: 0;\n}\n.bar-footer textarea {\n  resize: none;\n  height: 1.5em;\n  width: 100%;\n  background: none;\n}\n.bar-footer .footer-btn-wrap {\n  align-self: flex-end;\n}\n.bar-footer .footer-btn-wrap .button-icon:before {\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1kZXRhaWwvY2hhdC1kZXRhaWwucGFnZS5zY3NzIiwiL1VzZXJzL3JvbXVsb3JhbW9zZGVzaXF1ZWlyYS9Eb3dubG9hZHMvcHJvamV0by1yZWRlLXNvY2lhbC9zcmMvYXBwL2NoYXQtZGV0YWlsL2NoYXQtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBRENGO0FDQ0U7RUFDRSxVQUFBO0FEQ0o7QUNFRTtFQUNFLFdBQUE7QURBSjtBQ0lBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBRERGO0FDSUE7RUFDRSxlQUFBO0FEREY7QUNJQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBRERGO0FDTUk7RUFDRSxzQkFBQTtBREhOO0FDUUE7RUFDRSxrQkFBQTtBRExGO0FDT0U7RUFDRSxtQkFBQTtBRExKO0FDU0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FETkY7QUNRRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBRE5KO0FDU0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEUEo7QUNVRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEUko7QUNVSTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FEUk47QUNZRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRFZKO0FDWUk7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtBRFZOO0FDYUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QURYTjtBQ2NJO0VBQ0UsaUJBQUE7QURaTjtBQ2lCQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtBRGRGO0FDZ0JFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FEZEo7QUNpQkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRGZKO0FDa0JFO0VBQ0Usb0JBQUE7QURoQko7QUNrQkk7RUFDRSxnQkFBQTtBRGhCTiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtZGV0YWlsL2NoYXQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmltZy5wcm9maWxlLXBpY3R1cmUge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbn1cbmltZy5wcm9maWxlLXBpY3R1cmUubGVmdCB7XG4gIGxlZnQ6IDEwcHg7XG59XG5pbWcucHJvZmlsZS1waWN0dXJlLnJpZ2h0IHtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5pb24tZW1haWwge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tZXNzYWdlLWRldGFpbCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJhci5pdGVtLWlucHV0LWluc2V0IC5pdGVtLWlucHV0LXdyYXBwZXIgaW5wdXQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ubWVzc2FnZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1lc3NhZ2Utd3JhcHBlcjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNoYXQtYnViYmxlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMThweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwcHg7XG4gIG1heC13aWR0aDogODAlO1xufVxuLmNoYXQtYnViYmxlIC5tZXNzYWdlLXRpbWUge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jaGF0LWJ1YmJsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIsKgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiA5cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNy41cHg7XG59XG4uY2hhdC1idWJibGUubGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU1ZWI7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNTVweDtcbn1cbi5jaGF0LWJ1YmJsZS5sZWZ0OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU1ZWI7XG4gIGxlZnQ6IDEwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzBkZWcpIHNrZXcoNWRlZyk7XG59XG4uY2hhdC1idWJibGUucmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU4ZmZlO1xuICBjb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDU1cHg7XG59XG4uY2hhdC1idWJibGUucmlnaHQ6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1OGZmZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTE4ZGVnKSBza2V3KC01ZGVnKTtcbn1cbi5jaGF0LWJ1YmJsZS5yaWdodCBhLmF1dG9saW5rZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2hhdC1idWJibGUucmlnaHQgLm1lc3NhZ2UtdGltZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYmFyLWZvb3RlciB7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbn1cbi5iYXItZm9vdGVyIC5pdGVtLWlucHV0LWluc2V0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLmJhci1mb290ZXIgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLmJhci1mb290ZXIgLmZvb3Rlci1idG4td3JhcCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuLmJhci1mb290ZXIgLmZvb3Rlci1idG4td3JhcCAuYnV0dG9uLWljb246YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn0iLCJcbmltZy5wcm9maWxlLXBpY3R1cmUge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcblxuICAmLmxlZnQge1xuICAgIGxlZnQ6IDEwcHg7XG4gIH1cblxuICAmLnJpZ2h0IHtcbiAgICByaWdodDogMTBweDtcbiAgfVxufVxuXG4uaW9uLWVtYWlsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDMycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWVzc2FnZS1kZXRhaWwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5iYXIuaXRlbS1pbnB1dC1pbnNldCB7XG4gIC5pdGVtLWlucHV0LXdyYXBwZXIge1xuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5tZXNzYWdlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG5cbi5jaGF0LWJ1YmJsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcblxuICAubWVzc2FnZS10aW1lIHtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwwMGEwXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiA5cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTcuNXB4O1xuICB9XG5cbiAgJi5sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNWViO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTVlYjtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcwZGVnKSBza2V3KDVkZWcpO1xuICAgIH1cbiAgfVxuXG4gICYucmlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNThmZmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogNTVweDtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNThmZmU7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTE4ZGVnKSBza2V3KC01ZGVnKTtcbiAgICB9XG5cbiAgICBhLmF1dG9saW5rZXIge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAubWVzc2FnZS10aW1lIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgfVxufVxuXG4uYmFyLWZvb3RlciB7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcblxuICAuaXRlbS1pbnB1dC1pbnNldCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cblxuICB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuXG4gIC5mb290ZXItYnRuLXdyYXAge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXG4gICAgLmJ1dHRvbi1pY29uOmJlZm9yZSB7XG4gICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cbiAgfVxufVxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/chat-detail/chat-detail.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/chat-detail/chat-detail.page.ts ***!
    \*************************************************/

  /*! exports provided: ChatDetailPage */

  /***/
  function srcAppChatDetailChatDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatDetailPage", function () {
      return ChatDetailPage;
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


    var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /*
     Generated class for the LoginPage page.
    
     See http://ionicframework.com/docs/v2/components/#navigation for more info on
     Ionic pages and navigation.
     */


    var ChatDetailPage = /*#__PURE__*/function () {
      function ChatDetailPage(chatService) {
        _classCallCheck(this, ChatDetailPage);

        this.chatService = chatService; // get sample data only
        // this.chat = chatService.getItem(activatedRoute.snapshot.paramMap.get('id'));

        this.chat = chatService.getItem(0);
      } // send message


      _createClass(ChatDetailPage, [{
        key: "sendMessage",
        value: function sendMessage() {
          var _this = this;

          if (this.newMessage) {
            this.chat.messages.push({
              type: 'sent',
              text: this.newMessage,
              image: '',
              time: 'Agora mesmo'
            }); // clear input

            this.newMessage = ''; // scroll to bottom

            setTimeout(function () {
              // scroll to bottom
              _this.content.scrollToBottom();
            }, 200);
          }
        }
      }]);

      return ChatDetailPage;
    }();

    ChatDetailPage.ctorParameters = function () {
      return [{
        type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])], ChatDetailPage.prototype, "content", void 0);
    ChatDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chat-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail/chat-detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./chat-detail.page.scss */
      "./src/app/chat-detail/chat-detail.page.scss"))["default"]]
    })], ChatDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=chat-detail-chat-detail-module-es5.js.map