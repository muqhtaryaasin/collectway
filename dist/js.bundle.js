/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/importer/js_importers.js":
/*!**************************************!*\
  !*** ./src/importer/js_importers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/nav.js */ \"./src/js/nav.js\");\n/* harmony import */ var _js_login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/login.js */ \"./src/js/login.js\");\n/* harmony import */ var _js_login_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_login_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\nwindow.onload = _js_nav_js__WEBPACK_IMPORTED_MODULE_0__.writeNavigation;\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1wb3J0ZXIvanNfaW1wb3J0ZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBNkM7QUFDN0MsZ0JBQWdCLHVEQUFlO0FBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29sbGVjdHdheS8uL3NyYy9pbXBvcnRlci9qc19pbXBvcnRlcnMuanM/NTFkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3dyaXRlTmF2aWdhdGlvbn0gZnJvbSBcIi4uL2pzL25hdi5qc1wiO1xyXG53aW5kb3cub25sb2FkID0gd3JpdGVOYXZpZ2F0aW9uO1xyXG5cclxuaW1wb3J0IHtmb3JtcywgcHdTaG93SGlkZSwgbGlua3N9IGZyb20gXCIuLi9qcy9sb2dpbi5qc1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/importer/js_importers.js\n");

/***/ }),

/***/ "./src/js/login.js":
/*!*************************!*\
  !*** ./src/js/login.js ***!
  \*************************/
/***/ (() => {

eval("const forms = document.querySelector(\".forms\"),\r\n      pwShowHide = document.querySelectorAll(\".eye-icon\"),\r\n      links = document.querySelectorAll(\".link\");\r\n\r\npwShowHide.forEach(eyeIcon => {\r\n    eyeIcon.addEventListener(\"click\", () => {\r\n        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(\".password\");\r\n        \r\n        pwFields.forEach(password => {\r\n            if(password.type === \"password\"){\r\n                password.type = \"text\";\r\n                eyeIcon.classList.replace(\"bx-hide\", \"bx-show\");\r\n                return;\r\n            }\r\n            password.type = \"password\";\r\n            eyeIcon.classList.replace(\"bx-show\", \"bx-hide\");\r\n        })\r\n        \r\n    })\r\n})      \r\n\r\nlinks.forEach(link => {\r\n    link.addEventListener(\"click\", e => {\r\n       e.preventDefault(); //preventing form submit\r\n       forms.classList.toggle(\"show-signup\");\r\n    })\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29sbGVjdHdheS8uL3NyYy9qcy9sb2dpbi5qcz9kZDQ4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3Jtc1wiKSxcclxuICAgICAgcHdTaG93SGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXllLWljb25cIiksXHJcbiAgICAgIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saW5rXCIpO1xyXG5cclxucHdTaG93SGlkZS5mb3JFYWNoKGV5ZUljb24gPT4ge1xyXG4gICAgZXllSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBwd0ZpZWxkcyA9IGV5ZUljb24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFzc3dvcmRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHdGaWVsZHMuZm9yRWFjaChwYXNzd29yZCA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBhc3N3b3JkLnR5cGUgPT09IFwicGFzc3dvcmRcIil7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgICAgICAgICBleWVJY29uLmNsYXNzTGlzdC5yZXBsYWNlKFwiYngtaGlkZVwiLCBcImJ4LXNob3dcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFzc3dvcmQudHlwZSA9IFwicGFzc3dvcmRcIjtcclxuICAgICAgICAgICAgZXllSWNvbi5jbGFzc0xpc3QucmVwbGFjZShcImJ4LXNob3dcIiwgXCJieC1oaWRlXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KSAgICAgIFxyXG5cclxubGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnRpbmcgZm9ybSBzdWJtaXRcclxuICAgICAgIGZvcm1zLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LXNpZ251cFwiKTtcclxuICAgIH0pXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/login.js\n");

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"writeNavigation\": () => (/* binding */ writeNavigation)\n/* harmony export */ });\nfunction writeNavigation() {\r\n    document.getElementById('navigation').innerHTML = `\r\n    <div class=\"menu\"> \r\n      <input type=\"checkbox\" id=\"check\">\r\n      <div class=\"logo\"><a href=\"#\">Collectway</a></div>\r\n      <ul>\r\n      <label class=\"btn cancel\" for=\"check\"><i class=\"fas fa-times\"></i></label>\r\n      <li><a href=\"index.html\">Home</a></li>\r\n      <li><a href=\"#\">Contact</a></li>\r\n      <li><a href=\"#\">Pricing</a></li>\r\n      <li><a href=\"login-signup.html\">Login</a></li>\r\n      </ul>\r\n      <label for=\"check\" class=\"btn bars\"><i class=\"fas fa-bars\"></i></label>\r\n    </div>\r\n    `\r\n  };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbmF2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbGxlY3R3YXkvLi9zcmMvanMvbmF2LmpzP2QyY2QiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHdyaXRlTmF2aWdhdGlvbigpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZpZ2F0aW9uJykuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cIm1lbnVcIj4gXHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+PGEgaHJlZj1cIiNcIj5Db2xsZWN0d2F5PC9hPjwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBjYW5jZWxcIiBmb3I9XCJjaGVja1wiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvbGFiZWw+XHJcbiAgICAgIDxsaT48YSBocmVmPVwiaW5kZXguaHRtbFwiPkhvbWU8L2E+PC9saT5cclxuICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICA8bGk+PGEgaHJlZj1cIiNcIj5QcmljaW5nPC9hPjwvbGk+XHJcbiAgICAgIDxsaT48YSBocmVmPVwibG9naW4tc2lnbnVwLmh0bWxcIj5Mb2dpbjwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8bGFiZWwgZm9yPVwiY2hlY2tcIiBjbGFzcz1cImJ0biBiYXJzXCI+PGkgY2xhc3M9XCJmYXMgZmEtYmFyc1wiPjwvaT48L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbiAgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/nav.js\n");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/importer/js_importers.js");
/******/ 	
/******/ })()
;