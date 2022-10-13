/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://js-kisalatt/./src/style.css?");

/***/ }),

/***/ "./src/Food.js":
/*!*********************!*\
  !*** ./src/Food.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Food\": () => (/* binding */ Food)\n/* harmony export */ });\nclass Food {\n  name;\n  calories;\n\n  constructor(name, calories) {\n    this.name = name;\n    this.calories = parseInt(calories);\n  }\n}\n\n//# sourceURL=webpack://js-kisalatt/./src/Food.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Food */ \"./src/Food.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n// import { animateCSS } from \"./animatecss\";\n\nlet images = document.querySelectorAll(\"#food-grid > img\");\nlet food_list = document.querySelector(\"#food-list\");\nlet healthy_food_list = document.querySelector(\"#healthy-food-list\");\nlet calories = document.querySelector(\"#calories\");\nlet reset = document.querySelector(\"#reset\");\nlet stats = document.querySelector(\"#stats\");\n\nlet foods = [];\n\nimages.forEach((img) => {\n  img.addEventListener(\"click\", () => {\n    let span = document.createElement(\"span\");\n    span.innerHTML = `${img.dataset.foodname} <i>(${img.dataset.calories})</i>`;\n\n    foods.push(new _Food__WEBPACK_IMPORTED_MODULE_0__.Food(img.dataset.foodname, img.dataset.calories));\n\n    calories.textContent = parseInt(calories.textContent) + parseInt(img.dataset.calories);\n\n    food_list.appendChild(span);\n  });\n});\n\nreset.addEventListener(\"click\", () => {\n  food_list.innerHTML = \"\";\n  healthy_food_list.classList.add(\"hide\");\n  calories.textContent = 0;\n  foods = [];\n});\n\nstats.addEventListener(\"click\", () => {\n  healthy_food_list.classList.remove(\"hide\");\n  healthy_food_list.innerHTML = \"\";\n  let healthy_foods = [];\n\n  for (const food of foods) {\n    if (food.calories < 200){\n      healthy_foods.push(food);\n    }\n  }\n\n  healthy_foods.sort((a, b) => a.calories - b.calories);\n\n  let healthy_foods_sum = [];\n\n  for (const food of healthy_foods) {\n    if (!(food.name in healthy_foods_sum)) {\n      healthy_foods_sum[food.name] = {quantity: 0, total_calories: 0};\n    }\n\n    healthy_foods_sum[food.name].quantity += 1;\n    healthy_foods_sum[food.name].total_calories += food.calories;\n\n  }\n\n  for (const food in healthy_foods_sum) {\n    let span = document.createElement(\"span\");\n    span.textContent = `${healthy_foods_sum[food].quantity} ${food} - ${healthy_foods_sum[food].total_calories} cal`;\n    healthy_food_list.appendChild(span);\n  }\n\n});\n\n//# sourceURL=webpack://js-kisalatt/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;