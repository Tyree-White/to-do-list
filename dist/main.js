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
      let titleInfo = document.getElementById('title');
      let descriptionInfo = document.getElementById('description');
      let priorityInfo = document.getElementById('priority');
      let dateInfo = document.getElementById('date');

      if (titleInfo.value === '') {
        return alert('Fill in the title field');
      } else if (descriptionInfo.value === '') {
        return alert('Fill in the description field');
      } else if (priorityInfo.value === '') {
        return alert('Choose prioity level');
      }

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

      const newTask = new Task(titleInfo.value, descriptionInfo.value, priorityInfo.value, dateInfo.value);
      addTaskToAllLibrary(newTask);
      console.log(newTask, allLibrary);

      titleInfo.value = '';
      descriptionInfo.value = '';
      priorityInfo.value = '';

      form.style.visibility = 'hidden';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7O0FBRWhCO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7QUNSNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7OztBQ2hCOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUNSM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUNSeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7O1VDUnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ040QztBQUNoQjtBQUNZO0FBQ1I7QUFDRjtBQUNROztBQUV0Qyx3REFBZTtBQUNmLGdEQUFPO0FBQ1Asc0RBQWE7QUFDYixrREFBUztBQUNULGlEQUFRO0FBQ1IscURBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2FsbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW1wb3J0YW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbml0aWFsTG9hZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy93ZWVrLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsb2FkQWxsKCkge1xuICAgIGxldCBhbGxMaWJyYXJ5ID0gW107XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbGwudGV4dENvbnRlbnQgPSAnQWxsJ1xuICAgIGFsbC5jbGFzc0xpc3QuYWRkKCdhbGwnKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFsbCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWxsQ29udGFpbmVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgY29uc3QgYWRkVGFza0J0biAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FsbFRhc2tCdG4nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICBjb25zdCBhbGxTdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhbGxTdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnO1xuICAgIGFsbFN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUgVGFzayc7XG4gICAgYWxsU3VibWl0QnRuLnN0eWxlLmJhY2tncm91bmQgPSAnIzM4ODJmNic7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhbGxTdWJtaXRCdG4pO1xuXG4gICAgYWxsU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlVGFzayk7XG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJyk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCB0aXRsZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICAgIGxldCBkZXNjcmlwdGlvbkluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgIGxldCBwcmlvcml0eUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKTtcbiAgICAgIGxldCBkYXRlSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG5cbiAgICAgIGlmICh0aXRsZUluZm8udmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBhbGVydCgnRmlsbCBpbiB0aGUgdGl0bGUgZmllbGQnKTtcbiAgICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb25JbmZvLnZhbHVlID09PSAnJykge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ0ZpbGwgaW4gdGhlIGRlc2NyaXB0aW9uIGZpZWxkJyk7XG4gICAgICB9IGVsc2UgaWYgKHByaW9yaXR5SW5mby52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdDaG9vc2UgcHJpb2l0eSBsZXZlbCcpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBhZGRUYXNrVG9BbGxMaWJyYXJ5KHRhc2spIHtcbiAgICAgICAgYWxsTGlicmFyeS5wdXNoKHRhc2spO1xuICAgICAgfSAgICAgIFxuXG4gICAgICBjbGFzcyBUYXNrIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSkge1xuICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlSW5mby52YWx1ZSwgZGVzY3JpcHRpb25JbmZvLnZhbHVlLCBwcmlvcml0eUluZm8udmFsdWUsIGRhdGVJbmZvLnZhbHVlKTtcbiAgICAgIGFkZFRhc2tUb0FsbExpYnJhcnkobmV3VGFzayk7XG4gICAgICBjb25zb2xlLmxvZyhuZXdUYXNrLCBhbGxMaWJyYXJ5KTtcblxuICAgICAgdGl0bGVJbmZvLnZhbHVlID0gJyc7XG4gICAgICBkZXNjcmlwdGlvbkluZm8udmFsdWUgPSAnJztcbiAgICAgIHByaW9yaXR5SW5mby52YWx1ZSA9ICcnO1xuXG4gICAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRBbGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQWxsVGFzaygpIHtcbiAgICBcbn0iLCJmdW5jdGlvbiBsb2FkSW1wb3J0YW50KCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltcG9ydGFudC50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuICAgIGltcG9ydGFudC5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQnKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGltcG9ydGFudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRJbXBvcnRhbnQ7IiwiZnVuY3Rpb24gaW5pdGlhbFBhZ2VMb2FkKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdUby1EbyBMaXN0JztcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxQYWdlTG9hZDsiLCJmdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0cy50ZXh0Q29udGVudCA9ICdQcm9qZWN0cydcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUHJvamVjdHM7IiwiZnVuY3Rpb24gbG9hZFRvZGF5KCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXkudGV4dENvbnRlbnQgPSAnVG9kYXknXG4gICAgdG9kYXkuY2xhc3NMaXN0LmFkZCgndG9kYXknKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvZGF5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFRvZGF5OyIsImZ1bmN0aW9uIGxvYWRXZWVrKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IHdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWVrLnRleHRDb250ZW50ID0gJ1dlZWsnXG4gICAgd2Vlay5jbGFzc0xpc3QuYWRkKCd3ZWVrJyk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh3ZWVrKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFdlZWs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbFBhZ2VMb2FkIGZyb20gXCIuL2luaXRpYWxMb2FkXCI7XG5pbXBvcnQgbG9hZEFsbCBmcm9tIFwiLi9hbGxcIjtcbmltcG9ydCBsb2FkSW1wb3J0YW50IGZyb20gXCIuL2ltcG9ydGFudFwiO1xuaW1wb3J0IGxvYWRUb2RheSBmcm9tIFwiLi90b2RheVwiO1xuaW1wb3J0IGxvYWRXZWVrIGZyb20gXCIuL3dlZWtcIjtcbmltcG9ydCBsb2FkUHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuaW5pdGlhbFBhZ2VMb2FkKCk7XG5sb2FkQWxsKCk7XG5sb2FkSW1wb3J0YW50KCk7XG5sb2FkVG9kYXkoKTtcbmxvYWRXZWVrKCk7XG5sb2FkUHJvamVjdHMoKTtcblxubGV0IGltcG9ydGFudExpYnJhcnkgPSBbXTtcbmxldCB0b2RheUxpYnJhcnkgPSBbXTtcbmxldCB3ZWVrTGlicmFyeSA9IFtdO1xubGV0IHByb2plY3RMaWJyYXJ5ID0gW107XG5cblxuZnVuY3Rpb24gYWRkVGFza1RvSW1wb3J0YW50TGlicmFyeSh0YXNrKSB7XG4gIGltcG9ydGFudExpYnJhcnkucHVzaCh0YXNrKTtcbn1cbmZ1bmN0aW9uIGFkZFRhc2tUb1RvZGF5TGlicmFyeSh0YXNrKSB7XG4gIHRvZGF5TGlicmFyeS5wdXNoKHRhc2spO1xufVxuZnVuY3Rpb24gYWRkVGFza1RvV2Vla0xpYnJhcnkodGFzaykge1xuICB3ZWVrTGlicmFyeS5wdXNoKHRhc2spO1xufVxuZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdExpYnJhcnkodGFzaykge1xuICBwcm9qZWN0TGlicmFyeS5wdXNoKHRhc2spO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==