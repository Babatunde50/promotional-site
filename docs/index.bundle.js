/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/comment.js":
/*!********************************!*\
  !*** ./src/scripts/comment.js ***!
  \********************************/
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
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment */ "./src/scripts/comment.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlcnZpZXdfYXNzZXNtZW50Ly4vc3JjL3NjcmlwdHMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9pbnRlcnZpZXdfYXNzZXNtZW50Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NGU0MiIsIndlYnBhY2s6Ly9pbnRlcnZpZXdfYXNzZXNtZW50Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9pbnRlcnZpZXdfYXNzZXNtZW50Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vaW50ZXJ2aWV3X2Fzc2VzbWVudC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2ludGVydmlld19hc3Nlc21lbnQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2ludGVydmlld19hc3Nlc21lbnQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2ludGVydmlld19hc3Nlc21lbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50ZXJ2aWV3X2Fzc2VzbWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW50ZXJ2aWV3X2Fzc2VzbWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ludGVydmlld19hc3Nlc21lbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbnRlcnZpZXdfYXNzZXNtZW50Ly4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29tbWVudCIsImNvbW1lbnRJZCIsImNvbW1lbnRJbmRleCIsImNvbW1lbnRzIiwiY29tbWVudCIsImlkIiwic3BsaWNlIiwiY29tbWVudHNDb250YWluZXIiLCJjaGlsZHJlbiIsInJlbW92ZSIsInVwZGF0ZVVJIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvdGFsQ29tbWVudHNFbGVtIiwiY29tbWVudFRleHRBcmVhIiwiY29tbWVudEZvcm1FbGVtIiwiaW5pdEV2ZW50TGlzdGVuZXIiLCJsZW5ndGgiLCJ0ZXh0Q29udGVudCIsIm9uZm9jdXMiLCJzdHlsZSIsImJhY2tncm91bmQiLCJvbmJsdXIiLCJ2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRDb21tZW50SGFuZGxlciIsImJpbmQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29tbWVudFZhbHVlIiwidGFyZ2V0IiwiZWxlbWVudHMiLCJuYW1lVmFsdWUiLCJ0cmltIiwiYWxlcnQiLCJuZXdDb21tZW50IiwibmFtZSIsInV1aWR2NCIsInB1c2giLCJyZW5kZXJOZXdDb21tZW50RWxlbWVudCIsImZvcm1hdCIsIm0iLCJmIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwiRGF0ZSIsImEiLCJkYXkiLCJtb250aCIsInllYXIiLCJtYXAiLCJqb2luIiwiY29tbWVudEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiZ2V0RGF0ZUhhbmRsZXIiLCJhcHBlbmQiLCJkZWxldGVDb21tZW50SGFuZGxlciIsIkFwcCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwid2luZG93IiwiZW1haWwiLCJzdWJqZWN0IiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNQSxPO0FBQ0oscUJBQWM7QUFBQTs7QUFBQTs7QUFBQSxrREFpR1MsVUFBQ0MsU0FBRCxFQUFlO0FBQ3BDLFVBQUlDLFlBQVksR0FBRyxDQUFuQjs7QUFE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QXlCUixLQUF6Qzs7QUFFQSxZQUFJYSxJQUFJLENBQUNILElBQUwsT0FBZ0IsRUFBaEIsSUFBc0JpQyxLQUFLLENBQUNqQyxJQUFOLE9BQWlCLEVBQXZDLElBQTZDa0MsT0FBTyxDQUFDbEMsSUFBUixPQUFtQixFQUFoRSxJQUFzRW1DLE9BQU8sQ0FBQ25DLElBQVIsT0FBbUIsRUFBN0YsRUFBa0c7QUFDaEdDLGVBQUssQ0FBQywrQkFBRCxDQUFMO0FBQ0E7QUFDRDs7QUFFRCtCLGNBQU0sQ0FBQ0ksVUFBUCxDQUFrQixZQUFNO0FBQ3RCbkMsZUFBSyxDQUFDLGtDQUFELENBQUw7QUFDQVAsZUFBSyxDQUFDRyxNQUFOLENBQWFDLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUJSLEtBQXpCLEdBQWlDLEVBQWpDO0FBQ0FJLGVBQUssQ0FBQ0csTUFBTixDQUFhQyxRQUFiLENBQXNCLENBQXRCLEVBQXlCUixLQUF6QixHQUFpQyxFQUFqQztBQUNBSSxlQUFLLENBQUNHLE1BQU4sQ0FBYUMsUUFBYixDQUFzQixDQUF0QixFQUF5QlIsS0FBekIsR0FBaUMsRUFBakM7QUFDQUksZUFBSyxDQUFDRyxNQUFOLENBQWFDLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUJSLEtBQXpCLEdBQWlDLEVBQWpDO0FBQ0QsU0FORCxFQU1HLElBTkg7QUFRRCxPQXJCRDtBQXNCRDs7Ozs7O0FBR0hvQyxHQUFHLENBQUNXLElBQUosRyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5jbGFzcyBDb21tZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudHNcIik7XG4gICAgdGhpcy50b3RhbENvbW1lbnRzRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWwtY29tbWVudHNcIik7XG4gICAgdGhpcy5jb21tZW50VGV4dEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbW1lbnQtdGV4dGFyZWEtaW5wdXRcIik7XG4gICAgdGhpcy5jb21tZW50Rm9ybUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbW1lbnQtZm9ybVwiKTtcbiAgICB0aGlzLmNvbW1lbnRzID0gW107XG4gICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcigpO1xuICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgfVxuXG4gIHVwZGF0ZVVJKCkge1xuICAgIGlmICh0aGlzLmNvbW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy50b3RhbENvbW1lbnRzRWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG90YWxDb21tZW50c0VsZW0udGV4dENvbnRlbnQgPSBgKCR7dGhpcy5jb21tZW50cy5sZW5ndGh9KWA7XG4gICAgfVxuICB9XG5cbiAgaW5pdEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5jb21tZW50VGV4dEFyZWEub25mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9IFwibm9uZVwiO1xuICAgIH07XG5cbiAgICB0aGlzLmNvbW1lbnRUZXh0QXJlYS5vbmJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmQgPVxuICAgICAgICAgIFwidXJsKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZXhhbXBsZXMvVGV4dGFyZWFUcmlja3MvaW1hZ2VzL2JlbmljZS5wbmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuY29tbWVudEZvcm1FbGVtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInN1Ym1pdFwiLFxuICAgICAgdGhpcy5hZGRDb21tZW50SGFuZGxlci5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIGFkZENvbW1lbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGNvbW1lbnRWYWx1ZSA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1swXS52YWx1ZTtcbiAgICBjb25zdCBuYW1lVmFsdWUgPSBldmVudC50YXJnZXQuZWxlbWVudHNbMV0udmFsdWU7XG5cbiAgICBpZiAoY29tbWVudFZhbHVlLnRyaW0oKSA9PT0gXCJcIiB8fCBuYW1lVmFsdWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICBhbGVydChcIkNvbW1lbnQgb3IgTmFtZSBmaWVsZCBjYW5ub3QgYmUgZW1wdHlcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3Q29tbWVudCA9IHtcbiAgICAgIGNvbW1lbnQ6IGNvbW1lbnRWYWx1ZSxcbiAgICAgIG5hbWU6IG5hbWVWYWx1ZSxcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICB9O1xuXG4gICAgdGhpcy5jb21tZW50cy5wdXNoKG5ld0NvbW1lbnQpO1xuXG4gICAgdGhpcy5yZW5kZXJOZXdDb21tZW50RWxlbWVudChuZXdDb21tZW50KTtcblxuICAgIGV2ZW50LnRhcmdldC5lbGVtZW50c1swXS52YWx1ZSA9IFwiXCI7XG4gICAgZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzFdLnZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIGdldERhdGVIYW5kbGVyKCkge1xuICAgIGZ1bmN0aW9uIGZvcm1hdChtKSB7XG4gICAgICBsZXQgZiA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW5cIiwgbSk7XG4gICAgICByZXR1cm4gZi5mb3JtYXQobmV3IERhdGUoKSk7XG4gICAgfVxuICAgIGxldCBhID0gW3sgZGF5OiBcIm51bWVyaWNcIiB9LCB7IG1vbnRoOiBcInNob3J0XCIgfSwgeyB5ZWFyOiBcIm51bWVyaWNcIiB9XTtcbiAgICByZXR1cm4gYS5tYXAoZm9ybWF0KS5qb2luKFwiLVwiKTtcbiAgfVxuXG4gIHJlbmRlck5ld0NvbW1lbnRFbGVtZW50KHsgY29tbWVudCwgbmFtZSwgaWQgfSkge1xuICAgIGNvbnN0IGNvbW1lbnRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbW1lbnRJdGVtLmNsYXNzTmFtZSA9IFwiY29tbWVudC1pdGVtXCI7XG5cbiAgICBjb21tZW50SXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWl0ZW1fX21ldGFcIj5cbiAgICAgICAgICA8aDM+JHtuYW1lfTwvaDM+XG4gICAgICAgICAgPHA+IyR7dGhpcy5nZXREYXRlSGFuZGxlcigpfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWl0ZW1fX3RleHRcIj5cbiAgICAgICAgICA8cD4ke2NvbW1lbnR9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGUtY29udGFpbnRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7aWR9XCIgY2xhc3M9XCJkZWxldGVcIiA+IERlbGV0ZSA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIHRoaXMuY29tbWVudHNDb250YWluZXIuYXBwZW5kKGNvbW1lbnRJdGVtKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZGVsZXRlQ29tbWVudEhhbmRsZXIuYmluZCh0aGlzLCBpZCkpO1xuXG4gICAgdGhpcy51cGRhdGVVSSgpO1xuICB9XG5cbiAgZGVsZXRlQ29tbWVudEhhbmRsZXIgPSAoY29tbWVudElkKSA9PiB7XG4gICAgbGV0IGNvbW1lbnRJbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBjb21tZW50IG9mIHRoaXMuY29tbWVudHMpIHtcbiAgICAgIGlmIChjb21tZW50LmlkID09PSBjb21tZW50SWQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb21tZW50SW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy5jb21tZW50cy5zcGxpY2UoY29tbWVudEluZGV4LCAxKTtcbiAgICB0aGlzLmNvbW1lbnRzQ29udGFpbmVyLmNoaWxkcmVuW2NvbW1lbnRJbmRleF0ucmVtb3ZlKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4vY29tbWVudFwiO1xuXG5jbGFzcyBBcHAge1xuICBzdGF0aWMgaW5pdCgpIHtcbiAgICBuZXcgQ29tbWVudCgpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5uYXYtYnV0dG9uXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZCEhIVwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dfbWVudVwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtd3JhcCB1bC50b3BfbmF2XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93X21lbnVcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi13cmFwIHVsLnRvcF9uYXZcIikuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1swXS52YWx1ZTtcbiAgICAgIGNvbnN0IGVtYWlsID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzFdLnZhbHVlO1xuICAgICAgY29uc3Qgc3ViamVjdCA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1syXS52YWx1ZTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBldmVudC50YXJnZXQuZWxlbWVudHNbM10udmFsdWU7XG4gIFxuICAgICAgaWYgKG5hbWUudHJpbSgpID09PSBcIlwiIHx8IGVtYWlsLnRyaW0oKSA9PT0gXCJcIiB8fCBzdWJqZWN0LnRyaW0oKSA9PT0gXCJcIiB8fCBtZXNzYWdlLnRyaW0oKSA9PT0gXCJcIiApIHtcbiAgICAgICAgYWxlcnQoXCJBbGwgZmllbGRzIG5lZWRzIHRvIGJlIGZpbGxlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiWW91ciBtZXNzYWdlIGhhcyBiZWVuIGRlbGl2ZXJlZC5cIilcbiAgICAgICAgZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzBdLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzFdLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzJdLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzNdLnZhbHVlID0gXCJcIjtcbiAgICAgIH0sIDEwMDApXG5cbiAgICB9KVxuICB9XG59XG5cbkFwcC5pbml0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9