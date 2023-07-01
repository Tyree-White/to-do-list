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
    let allLibrary = [];

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
    allSubmitBtn.style.background = '#3882f6';
    form.appendChild(allSubmitBtn);

    allSubmitBtn.addEventListener('click', createTask);
    addTaskBtn.addEventListener('click', () => form.style.visibility = 'visible');

    function createTask() {
      event.preventDefault();
      const titleInfo = document.getElementById('title').value;
      const descriptionInfo = document.getElementById('description').value;
      const priorityInfo = document.getElementById('priority').value;
      const dateInfo = document.getElementById('date').value;

      function addTaskToAllLibrary(task) {
        allLibrary.push(task);
      }      

      class Task {
        constructor(title, description, priority, date) {
          this.title = title;
          this.description = description;
          this.priority = priority;
          this.date = date;
        }
      }

      const newTask = new Task(titleInfo, descriptionInfo, priorityInfo, dateInfo);
      addTaskToAllLibrary(newTask);
    }
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

let importantLibrary = [];
let todayLibrary = [];
let weekLibrary = [];
let projectLibrary = [];


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7QUFFaEI7QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7OztBQ1I1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDaEI5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7OztBQ1IzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7OztBQ1J4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7VUNSdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ2hCO0FBQ1k7QUFDUjtBQUNGO0FBQ1E7O0FBRXRDLHdEQUFlO0FBQ2YsZ0RBQU87QUFDUCxzREFBYTtBQUNiLGtEQUFTO0FBQ1QsaURBQVE7QUFDUixxREFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvYWxsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbXBvcnRhbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luaXRpYWxMb2FkLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3dlZWsuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRBbGwoKSB7XG4gICAgbGV0IGFsbExpYnJhcnkgPSBbXTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFsbC50ZXh0Q29udGVudCA9ICdBbGwnXG4gICAgYWxsLmNsYXNzTGlzdC5hZGQoJ2FsbCcpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWxsKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhbGxDb250YWluZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBhZGRUYXNrQnRuICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWxsVGFza0J0bicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIGNvbnN0IGFsbFN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFsbFN1Ym1pdEJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgYWxsU3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBUYXNrJztcbiAgICBhbGxTdWJtaXRCdG4uc3R5bGUuYmFja2dyb3VuZCA9ICcjMzg4MmY2JztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFsbFN1Ym1pdEJ0bik7XG5cbiAgICBhbGxTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUYXNrKTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdGl0bGVJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbkluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgIGNvbnN0IHByaW9yaXR5SW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuICAgICAgY29uc3QgZGF0ZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuXG4gICAgICBmdW5jdGlvbiBhZGRUYXNrVG9BbGxMaWJyYXJ5KHRhc2spIHtcbiAgICAgICAgYWxsTGlicmFyeS5wdXNoKHRhc2spO1xuICAgICAgfSAgICAgIFxuXG4gICAgICBjbGFzcyBUYXNrIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSkge1xuICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlSW5mbywgZGVzY3JpcHRpb25JbmZvLCBwcmlvcml0eUluZm8sIGRhdGVJbmZvKTtcbiAgICAgIGFkZFRhc2tUb0FsbExpYnJhcnkobmV3VGFzayk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEFsbFRhc2soKSB7XG4gICAgXG59IiwiZnVuY3Rpb24gbG9hZEltcG9ydGFudCgpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbXBvcnRhbnQudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcbiAgICBpbXBvcnRhbnQuY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50Jyk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChpbXBvcnRhbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSW1wb3J0YW50OyIsImZ1bmN0aW9uIGluaXRpYWxQYWdlTG9hZCgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnVG8tRG8gTGlzdCc7XG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsUGFnZUxvYWQ7IiwiZnVuY3Rpb24gbG9hZFByb2plY3RzKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHMudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnXG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFByb2plY3RzOyIsImZ1bmN0aW9uIGxvYWRUb2RheSgpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5LnRleHRDb250ZW50ID0gJ1RvZGF5J1xuICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ3RvZGF5Jyk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0b2RheSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRUb2RheTsiLCJmdW5jdGlvbiBsb2FkV2VlaygpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCB3ZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2Vlay50ZXh0Q29udGVudCA9ICdXZWVrJ1xuICAgIHdlZWsuY2xhc3NMaXN0LmFkZCgnd2VlaycpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQod2Vlayk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRXZWVrOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxQYWdlTG9hZCBmcm9tIFwiLi9pbml0aWFsTG9hZFwiO1xuaW1wb3J0IGxvYWRBbGwgZnJvbSBcIi4vYWxsXCI7XG5pbXBvcnQgbG9hZEltcG9ydGFudCBmcm9tIFwiLi9pbXBvcnRhbnRcIjtcbmltcG9ydCBsb2FkVG9kYXkgZnJvbSBcIi4vdG9kYXlcIjtcbmltcG9ydCBsb2FkV2VlayBmcm9tIFwiLi93ZWVrXCI7XG5pbXBvcnQgbG9hZFByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmluaXRpYWxQYWdlTG9hZCgpO1xubG9hZEFsbCgpO1xubG9hZEltcG9ydGFudCgpO1xubG9hZFRvZGF5KCk7XG5sb2FkV2VlaygpO1xubG9hZFByb2plY3RzKCk7XG5cbmxldCBpbXBvcnRhbnRMaWJyYXJ5ID0gW107XG5sZXQgdG9kYXlMaWJyYXJ5ID0gW107XG5sZXQgd2Vla0xpYnJhcnkgPSBbXTtcbmxldCBwcm9qZWN0TGlicmFyeSA9IFtdO1xuXG5cbmZ1bmN0aW9uIGFkZFRhc2tUb0ltcG9ydGFudExpYnJhcnkodGFzaykge1xuICBpbXBvcnRhbnRMaWJyYXJ5LnB1c2godGFzayk7XG59XG5mdW5jdGlvbiBhZGRUYXNrVG9Ub2RheUxpYnJhcnkodGFzaykge1xuICB0b2RheUxpYnJhcnkucHVzaCh0YXNrKTtcbn1cbmZ1bmN0aW9uIGFkZFRhc2tUb1dlZWtMaWJyYXJ5KHRhc2spIHtcbiAgd2Vla0xpYnJhcnkucHVzaCh0YXNrKTtcbn1cbmZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3RMaWJyYXJ5KHRhc2spIHtcbiAgcHJvamVjdExpYnJhcnkucHVzaCh0YXNrKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=