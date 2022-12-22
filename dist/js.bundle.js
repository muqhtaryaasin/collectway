/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/importer/js_importers.js":
/*!**************************************!*\
  !*** ./src/importer/js_importers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/nav.js */ \"./src/js/nav.js\");\n/* harmony import */ var _js_login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/login.js */ \"./src/js/login.js\");\n\r\nwindow.onload = _js_nav_js__WEBPACK_IMPORTED_MODULE_0__.writeNavigation;\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1wb3J0ZXIvanNfaW1wb3J0ZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUE2QztBQUM3QyxnQkFBZ0IsdURBQWU7QUFDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xsZWN0d2F5Ly4vc3JjL2ltcG9ydGVyL2pzX2ltcG9ydGVycy5qcz81MWRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7d3JpdGVOYXZpZ2F0aW9ufSBmcm9tIFwiLi4vanMvbmF2LmpzXCI7XHJcbndpbmRvdy5vbmxvYWQgPSB3cml0ZU5hdmlnYXRpb247XHJcblxyXG5pbXBvcnQge2Zvcm1zLCBwd1Nob3dIaWRlLCBsaW5rc30gZnJvbSBcIi4uL2pzL2xvZ2luLmpzXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/importer/js_importers.js\n");

/***/ }),

/***/ "./src/js/login.js":
/*!*************************!*\
  !*** ./src/js/login.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forms\": () => (/* binding */ forms),\n/* harmony export */   \"links\": () => (/* binding */ links),\n/* harmony export */   \"pwShowHide\": () => (/* binding */ pwShowHide)\n/* harmony export */ });\nconst forms = document.querySelector(\".forms\"),\r\n      pwShowHide = document.querySelectorAll(\".eye-icon\"),\r\n      links = document.querySelectorAll(\".link\");\r\n\r\npwShowHide.forEach(eyeIcon => {\r\n    eyeIcon.addEventListener(\"click\", () => {\r\n        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(\".password\");\r\n        \r\n        pwFields.forEach(password => {\r\n            if(password.type === \"password\"){\r\n                password.type = \"text\";\r\n                eyeIcon.classList.replace(\"bx-hide\", \"bx-show\");\r\n                return;\r\n            }\r\n            password.type = \"password\";\r\n            eyeIcon.classList.replace(\"bx-show\", \"bx-hide\");\r\n        })\r\n        \r\n    })\r\n})      \r\n\r\nlinks.forEach(link => {\r\n    link.addEventListener(\"click\", e => {\r\n       e.preventDefault(); //preventing form submit\r\n       forms.classList.toggle(\"show-signup\");\r\n    })\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29sbGVjdHdheS8uL3NyYy9qcy9sb2dpbi5qcz9kZDQ4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybXNcIiksXHJcbiAgICAgIHB3U2hvd0hpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV5ZS1pY29uXCIpLFxyXG4gICAgICBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlua1wiKTtcclxuXHJcbnB3U2hvd0hpZGUuZm9yRWFjaChleWVJY29uID0+IHtcclxuICAgIGV5ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBsZXQgcHdGaWVsZHMgPSBleWVJY29uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhc3N3b3JkXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB3RmllbGRzLmZvckVhY2gocGFzc3dvcmQgPT4ge1xyXG4gICAgICAgICAgICBpZihwYXNzd29yZC50eXBlID09PSBcInBhc3N3b3JkXCIpe1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICAgICAgZXllSWNvbi5jbGFzc0xpc3QucmVwbGFjZShcImJ4LWhpZGVcIiwgXCJieC1zaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInBhc3N3b3JkXCI7XHJcbiAgICAgICAgICAgIGV5ZUljb24uY2xhc3NMaXN0LnJlcGxhY2UoXCJieC1zaG93XCIsIFwiYngtaGlkZVwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkgICAgICBcclxuXHJcbmxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50aW5nIGZvcm0gc3VibWl0XHJcbiAgICAgICBmb3Jtcy5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1zaWdudXBcIik7XHJcbiAgICB9KVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/login.js\n");

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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