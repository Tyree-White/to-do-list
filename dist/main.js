/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/all.js":
/*!********************!*\
  !*** ./src/all.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   loadAllTask: () => (/* binding */ loadAllTask)
/* harmony export */ });
function loadAll() {
    const sidebar = document.querySelector('.sidebar');
    const all = document.createElement('div');
    all.textContent = 'All'
    all.classList.add('all');
    sidebar.appendChild(all);

    const content = document.querySelector('.content');
    const container = document.createElement('div');
    container.classList.add('allContainer');
    content.appendChild(container);

    const addTaskBtn  = document.createElement('button');
    addTaskBtn.textContent = 'Add Task';
    addTaskBtn.classList.add('allTaskBtn');
    content.appendChild(addTaskBtn);

    const form = document.querySelector('form');
    const allSubmitBtn = document.createElement('button');
    allSubmitBtn.type = 'submit';
    allSubmitBtn.textContent = 'Create Task';
    allSubmitBtn.style.background = '#3882f6'
    form.appendChild(allSubmitBtn);

    addTaskBtn.addEventListener('click', () => form.style.visibility = 'visible');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAll);

function loadAllTask() {
    
}

/***/ }),

/***/ "./src/important.js":
/*!**************************!*\
  !*** ./src/important.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadImportant() {
    const sidebar = document.querySelector('.sidebar');
    const important = document.createElement('div');
    important.textContent = 'Important';
    important.classList.add('important');
    sidebar.appendChild(important);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadImportant);

/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initialPageLoad() {
    const body = document.querySelector('body');
    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'To-Do List';
    body.appendChild(header);

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    body.appendChild(sidebar);

    const content = document.createElement('div');
    content.classList.add('content');
    body.appendChild(content)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPageLoad);

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadProjects() {
    const sidebar = document.querySelector('.sidebar');
    const projects = document.createElement('div');
    projects.textContent = 'Projects'
    projects.classList.add('projects');
    sidebar.appendChild(projects);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadProjects);

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadToday() {
    const sidebar = document.querySelector('.sidebar');
    const today = document.createElement('div');
    today.textContent = 'Today'
    today.classList.add('today');
    sidebar.appendChild(today);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadToday);

/***/ }),

/***/ "./src/week.js":
/*!*********************!*\
  !*** ./src/week.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadWeek() {
    const sidebar = document.querySelector('.sidebar');
    const week = document.createElement('div');
    week.textContent = 'Week'
    week.classList.add('week');
    sidebar.appendChild(week);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWeek);

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
/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialLoad */ "./src/initialLoad.js");
/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all */ "./src/all.js");
/* harmony import */ var _important__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./important */ "./src/important.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./today */ "./src/today.js");
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./week */ "./src/week.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects */ "./src/projects.js");







(0,_initialLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_all__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_important__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_today__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_week__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_projects__WEBPACK_IMPORTED_MODULE_5__["default"])();

let allLibrary = [];
let importantLibrary = [];
let todayLibrary = [];
let weekLibrary = [];
let projectLibrary = [];

function addTaskToAllLibrary(task) {
  allLibrary.push(task);
}

function addTaskToImportantLibrary(task) {
  importantLibrary.push(task);
}
function addTaskToTodayLibrary(task) {
  todayLibrary.push(task);
}
function addTaskToWeekLibrary(task) {
  weekLibrary.push(task);
}
function addTaskToProjectLibrary(task) {
  projectLibrary.push(task);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOztBQUVoQjtBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7O0FDUjVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNoQjlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7O0FDUjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDUnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7OztVQ1J2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDaEI7QUFDWTtBQUNSO0FBQ0Y7QUFDUTs7QUFFdEMsd0RBQWU7QUFDZixnREFBTztBQUNQLHNEQUFhO0FBQ2Isa0RBQVM7QUFDVCxpREFBUTtBQUNSLHFEQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9hbGwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2ltcG9ydGFudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5pdGlhbExvYWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy90b2RheS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvd2Vlay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9hZEFsbCgpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbGwudGV4dENvbnRlbnQgPSAnQWxsJ1xuICAgIGFsbC5jbGFzc0xpc3QuYWRkKCdhbGwnKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFsbCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWxsQ29udGFpbmVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgY29uc3QgYWRkVGFza0J0biAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FsbFRhc2tCdG4nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICBjb25zdCBhbGxTdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhbGxTdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnO1xuICAgIGFsbFN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUgVGFzayc7XG4gICAgYWxsU3VibWl0QnRuLnN0eWxlLmJhY2tncm91bmQgPSAnIzM4ODJmNidcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFsbFN1Ym1pdEJ0bik7XG5cbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEFsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRBbGxUYXNrKCkge1xuICAgIFxufSIsImZ1bmN0aW9uIGxvYWRJbXBvcnRhbnQoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1wb3J0YW50LnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gICAgaW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudCcpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaW1wb3J0YW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEltcG9ydGFudDsiLCJmdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1RvLURvIExpc3QnO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2VMb2FkOyIsImZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJ1xuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJyk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQcm9qZWN0czsiLCJmdW5jdGlvbiBsb2FkVG9kYXkoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheS50ZXh0Q29udGVudCA9ICdUb2RheSdcbiAgICB0b2RheS5jbGFzc0xpc3QuYWRkKCd0b2RheScpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodG9kYXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkVG9kYXk7IiwiZnVuY3Rpb24gbG9hZFdlZWsoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3Qgd2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlZWsudGV4dENvbnRlbnQgPSAnV2VlaydcbiAgICB3ZWVrLmNsYXNzTGlzdC5hZGQoJ3dlZWsnKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHdlZWspO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkV2VlazsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSBcIi4vaW5pdGlhbExvYWRcIjtcbmltcG9ydCBsb2FkQWxsIGZyb20gXCIuL2FsbFwiO1xuaW1wb3J0IGxvYWRJbXBvcnRhbnQgZnJvbSBcIi4vaW1wb3J0YW50XCI7XG5pbXBvcnQgbG9hZFRvZGF5IGZyb20gXCIuL3RvZGF5XCI7XG5pbXBvcnQgbG9hZFdlZWsgZnJvbSBcIi4vd2Vla1wiO1xuaW1wb3J0IGxvYWRQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5pbml0aWFsUGFnZUxvYWQoKTtcbmxvYWRBbGwoKTtcbmxvYWRJbXBvcnRhbnQoKTtcbmxvYWRUb2RheSgpO1xubG9hZFdlZWsoKTtcbmxvYWRQcm9qZWN0cygpO1xuXG5sZXQgYWxsTGlicmFyeSA9IFtdO1xubGV0IGltcG9ydGFudExpYnJhcnkgPSBbXTtcbmxldCB0b2RheUxpYnJhcnkgPSBbXTtcbmxldCB3ZWVrTGlicmFyeSA9IFtdO1xubGV0IHByb2plY3RMaWJyYXJ5ID0gW107XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb0FsbExpYnJhcnkodGFzaykge1xuICBhbGxMaWJyYXJ5LnB1c2godGFzayk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb0ltcG9ydGFudExpYnJhcnkodGFzaykge1xuICBpbXBvcnRhbnRMaWJyYXJ5LnB1c2godGFzayk7XG59XG5mdW5jdGlvbiBhZGRUYXNrVG9Ub2RheUxpYnJhcnkodGFzaykge1xuICB0b2RheUxpYnJhcnkucHVzaCh0YXNrKTtcbn1cbmZ1bmN0aW9uIGFkZFRhc2tUb1dlZWtMaWJyYXJ5KHRhc2spIHtcbiAgd2Vla0xpYnJhcnkucHVzaCh0YXNrKTtcbn1cbmZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3RMaWJyYXJ5KHRhc2spIHtcbiAgcHJvamVjdExpYnJhcnkucHVzaCh0YXNrKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==