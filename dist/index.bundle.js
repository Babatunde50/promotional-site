/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/comment.js":
/*!************************!*\
  !*** ./src/comment.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Comment = /*#__PURE__*/function () {
  function Comment() {
    var _this = this;

    _classCallCheck(this, Comment);

    _defineProperty(this, "deleteCommentHandler", function (commentId) {
      var commentIndex = 0;

      var _iterator = _createForOfIteratorHelper(_this.comments),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var comment = _step.value;

          if (comment.id === commentId) {
            break;
          }

          commentIndex++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      _this.comments.splice(commentIndex, 1);

      _this.commentsContainer.children[commentIndex].remove();

      _this.updateUI();
    });

    this.commentsContainer = document.getElementById("comments");
    this.totalCommentsElem = document.getElementById("total-comments");
    this.commentTextArea = document.getElementById("comment-textarea-input");
    this.commentFormElem = document.getElementById("comment-form");
    this.comments = [];
    this.initEventListener();
    this.updateUI();
  }

  _createClass(Comment, [{
    key: "updateUI",
    value: function updateUI() {
      if (this.comments.length === 0) {
        this.totalCommentsElem.textContent = "";
      } else {
        this.totalCommentsElem.textContent = "(".concat(this.comments.length, ")");
      }
    }
  }, {
    key: "initEventListener",
    value: function initEventListener() {
      this.commentTextArea.onfocus = function () {
        this.style.background = "none";
      };

      this.commentTextArea.onblur = function () {
        if (this.value === "") {
          this.style.background = "url(https://css-tricks.com/examples/TextareaTricks/images/benice.png) center center no-repeat";
        }
      };

      this.commentFormElem.addEventListener("submit", this.addCommentHandler.bind(this));
    }
  }, {
    key: "addCommentHandler",
    value: function addCommentHandler(event) {
      event.preventDefault();
      var commentValue = event.target.elements[0].value;
      var nameValue = event.target.elements[1].value;

      if (commentValue.trim() === "" || nameValue.trim() === "") {
        alert("Comment or Name field cannot be empty");
        return;
      }

      var newComment = {
        comment: commentValue,
        name: nameValue,
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)()
      };
      this.comments.push(newComment);
      this.renderNewCommentElement(newComment);
      event.target.elements[0].value = "";
      event.target.elements[1].value = "";
    }
  }, {
    key: "getDateHandler",
    value: function getDateHandler() {
      function format(m) {
        var f = new Intl.DateTimeFormat("en", m);
        return f.format(new Date());
      }

      var a = [{
        day: "numeric"
      }, {
        month: "short"
      }, {
        year: "numeric"
      }];
      return a.map(format).join("-");
    }
  }, {
    key: "renderNewCommentElement",
    value: function renderNewCommentElement(_ref) {
      var comment = _ref.comment,
          name = _ref.name,
          id = _ref.id;
      var commentItem = document.createElement("div");
      commentItem.className = "comment-item";
      commentItem.innerHTML = "\n        <div class=\"comment-item__meta\">\n          <h3>".concat(name, "</h3>\n          <p>#").concat(this.getDateHandler(), "</p>\n        </div>\n        <div class=\"comment-item__text\">\n          <p>").concat(comment, "</p>\n          <div class=\"delete-containter\">\n            <button id=\"").concat(id, "\" class=\"delete\" > Delete </button>\n          </div>\n        </div>\n    ");
      this.commentsContainer.append(commentItem);
      document.getElementById(id).addEventListener("click", this.deleteCommentHandler.bind(this, id));
      this.updateUI();
    }
  }]);

  return Comment;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment */ "./src/comment.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, null, [{
    key: "init",
    value: function init() {
      new _comment__WEBPACK_IMPORTED_MODULE_1__.default();
      document.querySelector(".nav-button").addEventListener("click", function () {
        console.log("hello world!!!");
        document.querySelector("body").classList.toggle("show_menu");
        document.querySelector(".nav-wrap ul.top_nav").classList.toggle("show");
      });
      window.addEventListener("popstate", function () {
        document.querySelector("body").classList.toggle("show_menu");
        document.querySelector(".nav-wrap ul.top_nav").classList.toggle("show");
      });
      document.querySelector(".contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        var name = event.target.elements[0].value;
        var email = event.target.elements[1].value;
        var subject = event.target.elements[2].value;
        var message = event.target.elements[3].value;

        if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
          alert("All fields needs to be filled");
          return;
        }

        window.setTimeout(function () {
          alert("Your message has been delivered.");
          event.target.elements[0].value = "";
          event.target.elements[1].value = "";
          event.target.elements[2].value = "";
          event.target.elements[3].value = "";
        }, 1000);
      });
    }
  }]);

  return App;
}();

App.init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlcnZpZXdfYXNzZXNtZW50Ly4vc3JjL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW50ZXJ2aWV3X2Fzc2VzbWVudC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzRlNDIiLCJ3ZWJwYWNrOi8vaW50ZXJ2aWV3X2Fzc2VzbWVudC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vaW50ZXJ2aWV3X2Fzc2VzbWVudC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2ludGVydmlld19hc3Nlc21lbnQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9pbnRlcnZpZXdfYXNzZXNtZW50Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9pbnRlcnZpZXdfYXNzZXNtZW50Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9pbnRlcnZpZXdfYXNzZXNtZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ludGVydmlld19hc3Nlc21lbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ludGVydmlld19hc3Nlc21lbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnRlcnZpZXdfYXNzZXNtZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW50ZXJ2aWV3X2Fzc2VzbWVudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb21tZW50IiwiY29tbWVudElkIiwiY29tbWVudEluZGV4IiwiY29tbWVudHMiLCJjb21tZW50IiwiaWQiLCJzcGxpY2UiLCJjb21tZW50c0NvbnRhaW5lciIsImNoaWxkcmVuIiwicmVtb3ZlIiwidXBkYXRlVUkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidG90YWxDb21tZW50c0VsZW0iLCJjb21tZW50VGV4dEFyZWEiLCJjb21tZW50Rm9ybUVsZW0iLCJpbml0RXZlbnRMaXN0ZW5lciIsImxlbmd0aCIsInRleHRDb250ZW50Iiwib25mb2N1cyIsInN0eWxlIiwiYmFja2dyb3VuZCIsIm9uYmx1ciIsInZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZENvbW1lbnRIYW5kbGVyIiwiYmluZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb21tZW50VmFsdWUiLCJ0YXJnZXQiLCJlbGVtZW50cyIsIm5hbWVWYWx1ZSIsInRyaW0iLCJhbGVydCIsIm5ld0NvbW1lbnQiLCJuYW1lIiwidXVpZHY0IiwicHVzaCIsInJlbmRlck5ld0NvbW1lbnRFbGVtZW50IiwiZm9ybWF0IiwibSIsImYiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJEYXRlIiwiYSIsImRheSIsIm1vbnRoIiwieWVhciIsIm1hcCIsImpvaW4iLCJjb21tZW50SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJnZXREYXRlSGFuZGxlciIsImFwcGVuZCIsImRlbGV0ZUNvbW1lbnRIYW5kbGVyIiwiQXBwIiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ3aW5kb3ciLCJlbWFpbCIsInN1YmplY3QiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLE87QUFDSixxQkFBYztBQUFBOztBQUFBOztBQUFBLGtEQWlHUyxVQUFDQyxTQUFELEVBQWU7QUFDcEMsVUFBSUMsWUFBWSxHQUFHLENBQW5COztBQURvQyxpREFFZCxLQUFJLENB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LFlBQUlhLElBQUksQ0FBQ0gsSUFBTCxPQUFnQixFQUFoQixJQUFzQmlDLEtBQUssQ0FBQ2pDLElBQU4sT0FBaUIsRUFBdkMsSUFBNkNrQyxPQUFPLENBQUNsQyxJQUFSLE9BQW1CLEVBQWhFLElBQXNFbUMsT0FBTyxDQUFDbkMsSUFBUixPQUFtQixFQUE3RixFQUFrRztBQUNoR0MsZUFBSyxDQUFDLCtCQUFELENBQUw7QUFDQTtBQUNEOztBQUVEK0IsY0FBTSxDQUFDSSxVQUFQLENBQWtCLFlBQU07QUFDdEJuQyxlQUFLLENBQUMsa0NBQUQsQ0FBTDtBQUNBUCxlQUFLLENBQUNHLE1BQU4sQ0FBYUMsUUFBYixDQUFzQixDQUF0QixFQUF5QlIsS0FBekIsR0FBaUMsRUFBakM7QUFDQUksZUFBSyxDQUFDRyxNQUFOLENBQWFDLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUJSLEtBQXpCLEdBQWlDLEVBQWpDO0FBQ0FJLGVBQUssQ0FBQ0csTUFBTixDQUFhQyxRQUFiLENBQXNCLENBQXRCLEVBQXlCUixLQUF6QixHQUFpQyxFQUFqQztBQUNBSSxlQUFLLENBQUNHLE1BQU4sQ0FBYUMsUUFBYixDQUFzQixDQUF0QixFQUF5QlIsS0FBekIsR0FBaUMsRUFBakM7QUFDRCxTQU5ELEVBTUcsSUFOSDtBQVFELE9BckJEO0FBc0JEOzs7Ozs7QUFHSG9DLEdBQUcsQ0FBQ1csSUFBSixHIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmNsYXNzIENvbW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbW1lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21tZW50c1wiKTtcbiAgICB0aGlzLnRvdGFsQ29tbWVudHNFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbC1jb21tZW50c1wiKTtcbiAgICB0aGlzLmNvbW1lbnRUZXh0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudC10ZXh0YXJlYS1pbnB1dFwiKTtcbiAgICB0aGlzLmNvbW1lbnRGb3JtRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudC1mb3JtXCIpO1xuICAgIHRoaXMuY29tbWVudHMgPSBbXTtcbiAgICB0aGlzLmluaXRFdmVudExpc3RlbmVyKCk7XG4gICAgdGhpcy51cGRhdGVVSSgpO1xuICB9XG5cbiAgdXBkYXRlVUkoKSB7XG4gICAgaWYgKHRoaXMuY29tbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnRvdGFsQ29tbWVudHNFbGVtLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3RhbENvbW1lbnRzRWxlbS50ZXh0Q29udGVudCA9IGAoJHt0aGlzLmNvbW1lbnRzLmxlbmd0aH0pYDtcbiAgICB9XG4gIH1cblxuICBpbml0RXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmNvbW1lbnRUZXh0QXJlYS5vbmZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCI7XG4gICAgfTtcblxuICAgIHRoaXMuY29tbWVudFRleHRBcmVhLm9uYmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9XG4gICAgICAgICAgXCJ1cmwoaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9leGFtcGxlcy9UZXh0YXJlYVRyaWNrcy9pbWFnZXMvYmVuaWNlLnBuZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5jb21tZW50Rm9ybUVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwic3VibWl0XCIsXG4gICAgICB0aGlzLmFkZENvbW1lbnRIYW5kbGVyLmJpbmQodGhpcylcbiAgICApO1xuICB9XG5cbiAgYWRkQ29tbWVudEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY29tbWVudFZhbHVlID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzBdLnZhbHVlO1xuICAgIGNvbnN0IG5hbWVWYWx1ZSA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1sxXS52YWx1ZTtcblxuICAgIGlmIChjb21tZW50VmFsdWUudHJpbSgpID09PSBcIlwiIHx8IG5hbWVWYWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiQ29tbWVudCBvciBOYW1lIGZpZWxkIGNhbm5vdCBiZSBlbXB0eVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdDb21tZW50ID0ge1xuICAgICAgY29tbWVudDogY29tbWVudFZhbHVlLFxuICAgICAgbmFtZTogbmFtZVZhbHVlLFxuICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgIH07XG5cbiAgICB0aGlzLmNvbW1lbnRzLnB1c2gobmV3Q29tbWVudCk7XG5cbiAgICB0aGlzLnJlbmRlck5ld0NvbW1lbnRFbGVtZW50KG5ld0NvbW1lbnQpO1xuXG4gICAgZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzBdLnZhbHVlID0gXCJcIjtcbiAgICBldmVudC50YXJnZXQuZWxlbWVudHNbMV0udmFsdWUgPSBcIlwiO1xuICB9XG5cbiAgZ2V0RGF0ZUhhbmRsZXIoKSB7XG4gICAgZnVuY3Rpb24gZm9ybWF0KG0pIHtcbiAgICAgIGxldCBmID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlblwiLCBtKTtcbiAgICAgIHJldHVybiBmLmZvcm1hdChuZXcgRGF0ZSgpKTtcbiAgICB9XG4gICAgbGV0IGEgPSBbeyBkYXk6IFwibnVtZXJpY1wiIH0sIHsgbW9udGg6IFwic2hvcnRcIiB9LCB7IHllYXI6IFwibnVtZXJpY1wiIH1dO1xuICAgIHJldHVybiBhLm1hcChmb3JtYXQpLmpvaW4oXCItXCIpO1xuICB9XG5cbiAgcmVuZGVyTmV3Q29tbWVudEVsZW1lbnQoeyBjb21tZW50LCBuYW1lLCBpZCB9KSB7XG4gICAgY29uc3QgY29tbWVudEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29tbWVudEl0ZW0uY2xhc3NOYW1lID0gXCJjb21tZW50LWl0ZW1cIjtcblxuICAgIGNvbW1lbnRJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtaXRlbV9fbWV0YVwiPlxuICAgICAgICAgIDxoMz4ke25hbWV9PC9oMz5cbiAgICAgICAgICA8cD4jJHt0aGlzLmdldERhdGVIYW5kbGVyKCl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtaXRlbV9fdGV4dFwiPlxuICAgICAgICAgIDxwPiR7Y29tbWVudH08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZS1jb250YWludGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHtpZH1cIiBjbGFzcz1cImRlbGV0ZVwiID4gRGVsZXRlIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgdGhpcy5jb21tZW50c0NvbnRhaW5lci5hcHBlbmQoY29tbWVudEl0ZW0pO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZChpZClcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5kZWxldGVDb21tZW50SGFuZGxlci5iaW5kKHRoaXMsIGlkKSk7XG5cbiAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gIH1cblxuICBkZWxldGVDb21tZW50SGFuZGxlciA9IChjb21tZW50SWQpID0+IHtcbiAgICBsZXQgY29tbWVudEluZGV4ID0gMDtcbiAgICBmb3IgKGNvbnN0IGNvbW1lbnQgb2YgdGhpcy5jb21tZW50cykge1xuICAgICAgaWYgKGNvbW1lbnQuaWQgPT09IGNvbW1lbnRJZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbW1lbnRJbmRleCsrO1xuICAgIH1cbiAgICB0aGlzLmNvbW1lbnRzLnNwbGljZShjb21tZW50SW5kZXgsIDEpO1xuICAgIHRoaXMuY29tbWVudHNDb250YWluZXIuY2hpbGRyZW5bY29tbWVudEluZGV4XS5yZW1vdmUoKTtcblxuICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5jc3NcIjtcbmltcG9ydCBDb21tZW50IGZyb20gXCIuL2NvbW1lbnRcIjtcblxuY2xhc3MgQXBwIHtcbiAgc3RhdGljIGluaXQoKSB7XG4gICAgbmV3IENvbW1lbnQoKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJ1dHRvblwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGQhISFcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93X21lbnVcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LXdyYXAgdWwudG9wX25hdlwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd19tZW51XCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtd3JhcCB1bC50b3BfbmF2XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQuZWxlbWVudHNbMF0udmFsdWU7XG4gICAgICBjb25zdCBlbWFpbCA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1sxXS52YWx1ZTtcbiAgICAgIGNvbnN0IHN1YmplY3QgPSBldmVudC50YXJnZXQuZWxlbWVudHNbMl0udmFsdWU7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzNdLnZhbHVlO1xuICBcbiAgICAgIGlmIChuYW1lLnRyaW0oKSA9PT0gXCJcIiB8fCBlbWFpbC50cmltKCkgPT09IFwiXCIgfHwgc3ViamVjdC50cmltKCkgPT09IFwiXCIgfHwgbWVzc2FnZS50cmltKCkgPT09IFwiXCIgKSB7XG4gICAgICAgIGFsZXJ0KFwiQWxsIGZpZWxkcyBuZWVkcyB0byBiZSBmaWxsZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhbGVydChcIllvdXIgbWVzc2FnZSBoYXMgYmVlbiBkZWxpdmVyZWQuXCIpXG4gICAgICAgIGV2ZW50LnRhcmdldC5lbGVtZW50c1swXS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGV2ZW50LnRhcmdldC5lbGVtZW50c1sxXS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGV2ZW50LnRhcmdldC5lbGVtZW50c1syXS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGV2ZW50LnRhcmdldC5lbGVtZW50c1szXS52YWx1ZSA9IFwiXCI7XG4gICAgICB9LCAxMDAwKVxuXG4gICAgfSlcbiAgfVxufVxuXG5BcHAuaW5pdCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==