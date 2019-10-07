(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

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


    __webpack_exports__["default"] = "<app-home></app-home>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/folder/folder.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/folder/folder.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiFolderFolderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Left side folder Menu section-->\n<ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\" *ngIf=\"showFolder\">\n    <a class=\"sidebar-brand d-flex align-items-center\">\n        <i class=\"fa fa-arrow-circle-left pointer updated-i\" aria-hidden=\"true\" title=\"Back\"\n            (click)=\"backToFolder()\"></i>\n    </a>\n    <hr class=\"sidebar-divider my-0\">\n    <hr class=\"sidebar-divider\">\n    <div class=\"sidebar-heading active-path\" (click)=\"backToFolder()\" [textContent]=\"updateContent\"></div>\n    <li class=\"nav-item pointer\" *ngFor=\"let folder of folders\" (click)=\"selectFolder(folder)\">\n        <a class=\"nav-link collapsed\" aria-expanded=\"true\" aria-controls=\"collapsePages\">\n            <i class=\"fas fa-fw fa-folder updated-i\"></i>\n            <span>{{folder.name}}</span>\n        </a>\n    </li>\n    <hr class=\"sidebar-divider d-none d-md-block\">\n    <div class=\"text-left d-none d-md-inline\">\n        <i class=\"fa fa-plus-circle pointer updated-i create-folder-i\" aria-hidden=\"true\" title=\"Create new folder\"\n            (click)=\"createFolder($event)\"> New Folder</i>\n    </div>\n</ul>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/home/home.component.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/home/home.component.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\" *ngIf=\"jsonData\">\n    <div *ngIf=\"folders && showFolder\" style=\"width:15vw\">\n        <app-folder [folders]=\"folders\" (moveBack)=\"backToFolder($event)\" \n            [parentId]=\"parentFolderId\" [showFolder]=\"showFolder\" \n            (activeFolder)=\"selectFolder($event)\" (addFolder)=\"createFolder($event)\" [updateContent]=\"activeDirectory\"></app-folder>\n    </div>\n    <div *ngIf=\"notesList\" [ngStyle]=\"{'width':showFolder ? '85vw' : '100vw' }\">\n        <app-notes [notesList]=\"notesList\" [selectedNote]=\"selectedNote\" \n            [isView]=\"isView\" [showFolder]=\"showFolder\" (hideFolderView)=\"updateFolderView($event)\"\n            (update)=\"updateNote($event)\" (delete)=\"deleteNote($event)\" (add)=\"createNotes($event)\"\n            (search)=\"searchTerm($event)\" ></app-notes>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/notes/notes.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/notes/notes.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiNotesNotesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Main section-->\n<div id=\"content-wrapper\" class=\"d-flex flex-column\">\n    <div id=\"content\">\n        <!--Header section-->\n        <nav class=\"navbar navbar-expand navbar-light topbar mb-4 static-top shadow\">\n            <div class=\"col-lg-4 fa-pull-left p-0\">\n                <div class=\"input-group\">\n                    <div class=\"p-l-r-5 pointer m-0\">\n                        <a class=\"cursorPointer\" (click)=\"setFolderVew(showFolder = !showFolder)\">\n                            <i class=\"fa fa-folder-open-o\" aria-hidden=\"true\" title=\"Show/Hide Folder\"></i>\n                        </a>\n                    </div>\n                    <div class=\"p-l-r-5 pointer\">\n                        <button class=\"normal-button\" [disabled]=\"!selectedNote\" (click)=\"deleteNote(selectedNote.id)\">\n                            <i class=\"fa fa-trash\" aria-hidden=\"true\" title=\"Delete selected\"\n                                ></i>\n                        </button>\n                    </div>\n                    <div class=\"p-l-r-5 pointer\">\n                        <i class=\"fa fa-edit\" title=\"Create New Note\" (click)=\"createNotes($event)\"></i>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"col-lg-8 pull-right p-0\">\n                <!-- <form  class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search fa-pull-right\"> -->\n                <div class=\"input-group search-container\">\n                    <input (keyup.enter)=\"searchTerm(search.value)\" type=\"text\"\n                        class=\"form-control bg-white small\" placeholder=\"Search for...\" aria-label=\"Search\"\n                        aria-describedby=\"basic-addon2\" #search>\n                    <!--<div class=\"input-group-append\">\n                        <button class=\"btn btn-basic\" type=\"button\" (click)=\"searchTerm(search.value)\">\n                            <i class=\"fas fa-search fa-sm\"></i>\n                        </button>\n                    </div>-->\n                </div>\n                <!-- </form> -->\n            </div>\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item dropdown no-arrow d-sm-none\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"searchDropdown\" role=\"button\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"fas fa-search fa-fw\"></i>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\"\n                        aria-labelledby=\"searchDropdown\">\n                        <form class=\"form-inline mr-auto w-100 navbar-search\">\n                            <div class=\"input-group\">\n                                <input type=\"text\" class=\"form-control bg-light border-0 small\"\n                                    placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-primary\" type=\"button\">\n                                        <i class=\"fas fa-search fa-sm\"></i>\n                                    </button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </li>\n            </ul>\n        </nav>\n        <!--Note section-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 notes-list\">\n                    <div class=\"card pointer\" *ngFor=\"let notes of notesList\" id=\"cardVisited\"\n                        (click)=\"selectNote(notes)\">\n                        <div [ngClass]=\"{'note-active': selectedNote && selectedNote.id == notes.id}\">\n                            <div class=\"pad-title py-3 d-flex flex-row align-items-center justify-content-between\">\n                                <h6 class=\"m-0 font-weight-bold \">{{notes.title}}</h6>\n                            </div>\n                            <div class=\"card-body notes-description pointer\">\n                                {{notes.description}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-8\" style=\"min-height:100%\">\r\n                    <div class=\"card bg-white\" *ngIf=\"selectedNote && isView\">\r\n                        <div class=\"card-body\">\r\n                            <h5>Title</h5>\r\n                            <input type=\"text\" id=\"noteTitle\" [(ngModel)]='selectedNote.title' class=\"form-control\">\r\n                            <h5 class=\"m-t-10\">Description</h5>\r\n                            <textarea class=\"form-control\" id=\"desc\" [(ngModel)]='selectedNote.description' rows=\"10\">                             \r\n                            </textarea>\r\n                        </div>\r\n                        <div class=\"col-sm-2 save\">\r\n                            <button class=\"btn btn-success\" (click)=\"updateNote(selectedNote)\">Save</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card\" *ngIf=\"!selectedNote && !isView\">\r\n                        <div class=\"card-body\">\r\n                            Please Select a Folder / File to View Notes\r\n                        </div>\r\n                    </div>\r\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
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
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        this.title = 'explorer';
      }

      var _proto = AppComponent.prototype;

      _proto.ngOnInit = function ngOnInit() {};

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
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
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ui_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ui/home/home.component */
    "./src/app/ui/home/home.component.ts");
    /* harmony import */


    var _ui_folder_folder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ui/folder/folder.component */
    "./src/app/ui/folder/folder.component.ts");
    /* harmony import */


    var _ui_notes_notes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ui/notes/notes.component */
    "./src/app/ui/notes/notes.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = function AppModule() {};

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _ui_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _ui_folder_folder_component__WEBPACK_IMPORTED_MODULE_6__["FolderComponent"], _ui_notes_notes_component__WEBPACK_IMPORTED_MODULE_7__["NotesComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/service/api.service.ts":
  /*!****************************************!*\
    !*** ./src/app/service/api.service.ts ***!
    \****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServiceApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var httpOptions = {
      // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS'
      })
    };

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(http) {
        this.http = http;
      }

      var _proto2 = ApiService.prototype;

      _proto2.getFolderDetails = function getFolderDetails() {
        var URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURI + 'data';
        return this.http.get(URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
          return res;
        }));
      } //add file
      ;

      _proto2.addData = function addData(payload) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURI + 'data', payload, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
          return res;
        }));
      };

      _proto2.updateData = function updateData(list) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURI + 'data', list, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
          return res;
        }));
      };

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/ui/folder/folder.component.css":
  /*!************************************************!*\
    !*** ./src/app/ui/folder/folder.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiFolderFolderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2ZvbGRlci9mb2xkZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ui/folder/folder.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/ui/folder/folder.component.ts ***!
    \***********************************************/

  /*! exports provided: FolderComponent */

  /***/
  function srcAppUiFolderFolderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderComponent", function () {
      return FolderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FolderComponent =
    /*#__PURE__*/
    function () {
      function FolderComponent() {
        this.moveBack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeFolder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addFolder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      var _proto3 = FolderComponent.prototype;

      _proto3.ngOnInit = function ngOnInit() {
        console.log(this.folders);
      };

      _proto3.backToFolder = function backToFolder() {
        this.moveBack.emit(this.parentId);
      };

      _proto3.selectFolder = function selectFolder(data) {
        this.activeFolder.emit(data);
      };

      _proto3.createFolder = function createFolder(ev) {
        this.addFolder.emit(ev);
      };

      return FolderComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FolderComponent.prototype, "folders", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FolderComponent.prototype, "parentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FolderComponent.prototype, "updateContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FolderComponent.prototype, "showFolder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FolderComponent.prototype, "moveBack", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FolderComponent.prototype, "activeFolder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FolderComponent.prototype, "addFolder", void 0);
    FolderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-folder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./folder.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/folder/folder.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./folder.component.css */
      "./src/app/ui/folder/folder.component.css")).default]
    })], FolderComponent);
    /***/
  },

  /***/
  "./src/app/ui/home/home.component.css":
  /*!********************************************!*\
    !*** ./src/app/ui/home/home.component.css ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ui/home/home.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/ui/home/home.component.ts ***!
    \*******************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppUiHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/api.service */
    "./src/app/service/api.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(dataService) {
        this.dataService = dataService;
        this.title = 'explorer';
        this.folders = [];
        this.parentFolderId = null;
        this.notesList = [];
        this.selectedNote = null;
        this.isView = false;
        this.activeDirectory = '/';
        this.showFolder = true;
      }

      var _proto4 = HomeComponent.prototype;

      _proto4.ngOnInit = function ngOnInit() {
        this.getData();
      };

      _proto4.getData = function getData() {
        var _this = this;

        this.dataService.getFolderDetails().subscribe(function (res) {
          _this.jsonData = res;

          _this.loadFolders();
        });
      } //load folder details
      ;

      _proto4.loadFolders = function loadFolders() {
        var _this2 = this;

        this.folders = [];
        this.notesList = [];
        this.selectedNote = null;

        if (this.jsonData && this.jsonData.folder) {
          if (this.parentFolderId) {
            this.folders = this.jsonData.folder.filter(function (item) {
              return item.parent == _this2.parentFolderId;
            });
          } else {
            this.folders = this.jsonData.folder.filter(function (item) {
              return item.parent == null;
            });
          }

          if (this.folders) {
            this.jsonData.folder.sort(function (a, b) {
              var nameA = a.name;
              var nameB = b.name;
              if (nameA < nameB) return -1;
              if (nameA > nameB) return 1;
              return 0;
            });
          } else {
            this.folders = [];
          }
        }

        this.loadNotes();
      } //folder click
      ;

      _proto4.selectFolder = function selectFolder(item) {
        this.isView = false;
        this.activeDirectory = item ? '/' + item.name : '/';
        this.parentFolderId = item.id;
        this.loadFolders();
      } //back button click
      ;

      _proto4.backToFolder = function backToFolder(id) {
        var _this3 = this;

        this.isView = false;

        if (id) {
          var par = this.jsonData.folder.filter(function (item) {
            return item.id == id;
          });
          this.parentFolderId = par ? par[0].parent : '';

          if (this.parentFolderId) {
            var path = this.jsonData.folder.filter(function (item) {
              return item.id == _this3.parentFolderId;
            });
            this.activeDirectory = path ? '/' + path[0].name : '/';
          } else {
            this.activeDirectory = '/';
          }
        } else {
          this.activeDirectory = '/';
        }

        this.loadFolders();
      };

      _proto4.updateFolderView = function updateFolderView(item) {
        this.showFolder = item;
      } //add new folder
      ;

      _proto4.createFolder = function createFolder(ev) {
        var _this4 = this;

        var folderName = prompt("Folder Name", "");
        var newFolder = {
          id: Math.floor(100000000 + Math.random() * 900000000),
          name: folderName ? folderName : "New Folder " + (this.folders.length + 1),
          type: "folder",
          parent: this.parentFolderId
        };

        if (this.jsonData && this.jsonData.file && this.jsonData.file.length > 0) {
          this.jsonData.folder.push(newFolder);
        } else {
          var list = {
            "folder": [],
            "file": []
          };
          list.folder.push(newFolder);
          this.jsonData = list;
        }

        this.dataService.addData(this.jsonData).subscribe(function (res) {
          _this4.jsonData = res;

          _this4.loadFolders();
        });
      } //current active path
      ;

      _proto4.getFolderName = function getFolderName() {
        var _this5 = this;

        var name = null;

        if (this.jsonData) {
          var cFolder = this.jsonData.folder.filter(function (item) {
            return item.id == _this5.parentFolderId;
          });
          this.activeDirectory = "/" + (cFolder && cFolder.length > 0 ? cFolder[0].name : '');
          return this.activeDirectory;
        }
      } //load notes
      ;

      _proto4.loadNotes = function loadNotes() {
        var _this6 = this;

        this.isView = false;
        this.notesList = [];
        this.selectedNote = null;

        if (this.jsonData && this.jsonData.file) {
          this.notesList = this.jsonData.file.filter(function (item) {
            return item.parentID == _this6.parentFolderId;
          });

          if (this.notesList) {
            this.notesList.sort(function (a, b) {
              var dateA = new Date(a.date).getTime();
              var dateB = new Date(b.date).getTime();
              return dateA < dateB ? 1 : -1;
            });
          } else {
            this.notesList = [];
          }
        }
      } //update particular notes 
      ;

      _proto4.updateNote = function updateNote(data) {
        var _this7 = this;

        var isUpdate = false;

        for (var i in this.jsonData.file) {
          if (this.jsonData.file[i].id == data.id) {
            isUpdate = true;
            this.jsonData.file[i] = data;
            break; //Stop this loop, we found it!
          }
        }

        if (isUpdate) {
          this.dataService.addData(this.jsonData).subscribe(function (res) {
            _this7.jsonData = res;

            _this7.loadFolders();
          });
          this.isView = false;
          this.selectedNote = null;
        }
      } //add new notes
      ;

      _proto4.createNotes = function createNotes(ev) {
        var _this8 = this;

        if (this.parentFolderId) {
          var newNotes = {
            id: Math.floor(100000000 + Math.random() * 900000000),
            title: "New note " + (this.notesList.length + 1),
            description: "New note " + (this.notesList.length + 1),
            type: "file",
            date: new Date().toString(),
            parentID: this.parentFolderId
          };

          if (this.jsonData && this.jsonData.file && this.jsonData.file.length > 0) {
            this.jsonData.file.unshift(newNotes);
          } else {
            var file = [];
            file.push(newNotes);
            this.jsonData.file = file;
          }

          this.selectedNote = newNotes;
          this.isView = true;
          this.dataService.addData(this.jsonData).subscribe(function (res) {
            _this8.jsonData = res;
            _this8.notesList = _this8.jsonData.file.filter(function (item) {
              return item.parentID == _this8.parentFolderId;
            });

            if (_this8.notesList) {
              _this8.notesList.sort(function (a, b) {
                var dateA = new Date(a.date).getTime();
                var dateB = new Date(b.date).getTime();
                return dateA < dateB ? 1 : -1;
              });
            } else {
              _this8.notesList = [];
            }
          });
        } else {
          alert("Please choose folder");
        }
      } //remove notes
      ;

      _proto4.deleteNote = function deleteNote(id) {
        var _this9 = this;

        var ind = this.jsonData.file.findIndex(function (item) {
          return item.id == id;
        });
        this.jsonData.file.splice(ind, 1);
        this.dataService.updateData(this.jsonData).subscribe(function (res) {
          _this9.jsonData = res;
          _this9.notesList = _this9.jsonData.file.filter(function (item) {
            return item.parentID == _this9.parentFolderId;
          });

          if (_this9.notesList) {
            _this9.notesList.sort(function (a, b) {
              var dateA = new Date(a.date).getTime();
              var dateB = new Date(b.date).getTime();
              return dateA < dateB ? 1 : -1;
            });
          } else {
            _this9.notesList = [];
          }
        });
        this.isView = false;
        this.selectedNote = null;
      } //search notes
      ;

      _proto4.searchTerm = function searchTerm(val) {
        this.notesList = [];

        if (this.jsonData && this.jsonData.file) {
          this.notesList = this.jsonData.file.filter(function (item) {
            return item.title.toLowerCase().indexOf(val.toLowerCase()) != -1 || item.description.toLowerCase().indexOf(val.toLowerCase()) != -1;
          });
        }
      };

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/ui/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/ui/notes/notes.component.css":
  /*!**********************************************!*\
    !*** ./src/app/ui/notes/notes.component.css ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiNotesNotesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ui/notes/notes.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/ui/notes/notes.component.ts ***!
    \*********************************************/

  /*! exports provided: NotesComponent */

  /***/
  function srcAppUiNotesNotesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesComponent", function () {
      return NotesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotesComponent =
    /*#__PURE__*/
    function () {
      function NotesComponent() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hideFolderView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      var _proto5 = NotesComponent.prototype;

      _proto5.ngOnInit = function ngOnInit() {};

      _proto5.updateNote = function updateNote(data) {
        this.update.emit(data);
        this.isView = false;
      };

      _proto5.deleteNote = function deleteNote(id) {
        this.delete.emit(id);
        this.isView = false;
      };

      _proto5.createNotes = function createNotes(ev) {
        this.add.emit(ev);
      };

      _proto5.searchTerm = function searchTerm(text) {
        this.search.emit(text);
      } //selected note
      ;

      _proto5.selectNote = function selectNote(note) {
        this.selectedNote = note;
        this.isView = true;
      };

      _proto5.setFolderVew = function setFolderVew(data) {
        this.hideFolderView.emit(data);
      };

      return NotesComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NotesComponent.prototype, "notesList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NotesComponent.prototype, "showFolder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NotesComponent.prototype, "isView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NotesComponent.prototype, "selectedNote", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NotesComponent.prototype, "update", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NotesComponent.prototype, "delete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NotesComponent.prototype, "add", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NotesComponent.prototype, "search", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NotesComponent.prototype, "hideFolderView", void 0);
    NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/notes/notes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notes.component.css */
      "./src/app/ui/notes/notes.component.css")).default]
    })], NotesComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      serverURI: "http://my-json-server.typicode.com/codersundarraj/Interview_Test/blob/master/"
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
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
    /*! C:\Users\Admin\Downloads\NotesAppDemo\notesAppDemo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map