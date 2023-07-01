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
      
        let i = 0;
        allLibrary.forEach(task => {
          i++;
  
          const allContainer = document.querySelector('.allContainer');
          const taskDiv = document.createElement('div');
          taskDiv.className = 'task';
          taskDiv.dataset.index = i;
          allContainer.appendChild(taskDiv);
  
          const titleDiv = document.createElement('div');
          titleDiv.className = 'title';
          titleDiv.dataset.index = `${i}-title`;
          const descriptionDiv = document.createElement('div');
          descriptionDiv.className = 'description';
          descriptionDiv.dataset.index = `${i}-description`;
          const priorityDiv = document.createElement('div');
          priorityDiv.className = 'priority';
          priorityDiv.dataset.index = `${i}-priority`;
          const dateDiv = document.createElement('div');
          dateDiv.className = 'date';
          dateDiv.dataset.index = `${i}-date`;
          const statusBtn = document.createElement('button');
          statusBtn.className = 'statusBtn';
          statusBtn.type = 'button';
          statusBtn.dataset.index =  i;
          statusBtn.textContent = 'Change date Status';
          const editBtn = document.createElement('button');
          editBtn.className = 'editBtn';
          editBtn.type = 'button';
          editBtn.dataset.index = i;
          editBtn.textContent = 'Edit';
          const deleteBtn = document.createElement('button');
          deleteBtn.className = 'deleteBtn';
          deleteBtn.type = 'button';
          deleteBtn.dataset.index = i;
          deleteBtn.textContent = 'Delete';
  
          taskDiv.appendChild(titleDiv);
          taskDiv.appendChild(descriptionDiv);
          taskDiv.appendChild(priorityDiv);
          taskDiv.appendChild(dateDiv);
          taskDiv.appendChild(statusBtn);
          taskDiv.appendChild(editBtn);
          taskDiv.appendChild(deleteBtn);
  
          titleDiv.textContent = `${task.title}`;
          descriptionDiv.textContent = `${task.description}`;
          priorityDiv.textContent = `${task.priority}`;
          dateDiv.textContent = `${task.date}`;
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsRUFBRTtBQUN4QztBQUNBO0FBQ0EsNENBQTRDLEVBQUU7QUFDOUM7QUFDQTtBQUNBLHlDQUF5QyxFQUFFO0FBQzNDO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQywwQ0FBMEMsaUJBQWlCO0FBQzNELHVDQUF1QyxjQUFjO0FBQ3JELG1DQUFtQyxVQUFVO0FBQzdDLFNBQVM7QUFDVDtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7QUFFaEI7QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7OztBQ1I1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDaEI5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7OztBQ1IzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7OztBQ1J4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7VUNSdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ2hCO0FBQ1k7QUFDUjtBQUNGO0FBQ1E7O0FBRXRDLHdEQUFlO0FBQ2YsZ0RBQU87QUFDUCxzREFBYTtBQUNiLGtEQUFTO0FBQ1QsaURBQVE7QUFDUixxREFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvYWxsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbXBvcnRhbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luaXRpYWxMb2FkLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3dlZWsuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRBbGwoKSB7XG4gICAgbGV0IGFsbExpYnJhcnkgPSBbXTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFsbC50ZXh0Q29udGVudCA9ICdBbGwnXG4gICAgYWxsLmNsYXNzTGlzdC5hZGQoJ2FsbCcpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWxsKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhbGxDb250YWluZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBhZGRUYXNrQnRuICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWxsVGFza0J0bicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIGNvbnN0IGFsbFN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFsbFN1Ym1pdEJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgYWxsU3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBUYXNrJztcbiAgICBhbGxTdWJtaXRCdG4uc3R5bGUuYmFja2dyb3VuZCA9ICcjMzg4MmY2JztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFsbFN1Ym1pdEJ0bik7XG5cbiAgICBhbGxTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUYXNrKTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IHRpdGxlSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuICAgICAgbGV0IGRlc2NyaXB0aW9uSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgbGV0IHByaW9yaXR5SW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpO1xuICAgICAgbGV0IGRhdGVJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcblxuICAgICAgaWYgKHRpdGxlSW5mby52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdGaWxsIGluIHRoZSB0aXRsZSBmaWVsZCcpO1xuICAgICAgfSBlbHNlIGlmIChkZXNjcmlwdGlvbkluZm8udmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBhbGVydCgnRmlsbCBpbiB0aGUgZGVzY3JpcHRpb24gZmllbGQnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHlJbmZvLnZhbHVlID09PSAnJykge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ0Nob29zZSBwcmlvaXR5IGxldmVsJyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGFkZFRhc2tUb0FsbExpYnJhcnkodGFzaykge1xuICAgICAgICBhbGxMaWJyYXJ5LnB1c2godGFzayk7XG4gICAgICB9ICAgICAgXG5cbiAgICAgIGNsYXNzIFRhc2sge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKSB7XG4gICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGVJbmZvLnZhbHVlLCBkZXNjcmlwdGlvbkluZm8udmFsdWUsIHByaW9yaXR5SW5mby52YWx1ZSwgZGF0ZUluZm8udmFsdWUpO1xuICAgICAgYWRkVGFza1RvQWxsTGlicmFyeShuZXdUYXNrKTtcbiAgICAgIGNvbnNvbGUubG9nKG5ld1Rhc2ssIGFsbExpYnJhcnkpO1xuXG4gICAgICB0aXRsZUluZm8udmFsdWUgPSAnJztcbiAgICAgIGRlc2NyaXB0aW9uSW5mby52YWx1ZSA9ICcnO1xuICAgICAgcHJpb3JpdHlJbmZvLnZhbHVlID0gJyc7XG5cbiAgICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgXG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgYWxsTGlicmFyeS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgIGkrKztcbiAgXG4gICAgICAgICAgY29uc3QgYWxsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbENvbnRhaW5lcicpO1xuICAgICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0YXNrRGl2LmNsYXNzTmFtZSA9ICd0YXNrJztcbiAgICAgICAgICB0YXNrRGl2LmRhdGFzZXQuaW5kZXggPSBpO1xuICAgICAgICAgIGFsbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgXG4gICAgICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0aXRsZURpdi5jbGFzc05hbWUgPSAndGl0bGUnO1xuICAgICAgICAgIHRpdGxlRGl2LmRhdGFzZXQuaW5kZXggPSBgJHtpfS10aXRsZWA7XG4gICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkZXNjcmlwdGlvbkRpdi5jbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nO1xuICAgICAgICAgIGRlc2NyaXB0aW9uRGl2LmRhdGFzZXQuaW5kZXggPSBgJHtpfS1kZXNjcmlwdGlvbmA7XG4gICAgICAgICAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBwcmlvcml0eURpdi5jbGFzc05hbWUgPSAncHJpb3JpdHknO1xuICAgICAgICAgIHByaW9yaXR5RGl2LmRhdGFzZXQuaW5kZXggPSBgJHtpfS1wcmlvcml0eWA7XG4gICAgICAgICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRhdGVEaXYuY2xhc3NOYW1lID0gJ2RhdGUnO1xuICAgICAgICAgIGRhdGVEaXYuZGF0YXNldC5pbmRleCA9IGAke2l9LWRhdGVgO1xuICAgICAgICAgIGNvbnN0IHN0YXR1c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgIHN0YXR1c0J0bi5jbGFzc05hbWUgPSAnc3RhdHVzQnRuJztcbiAgICAgICAgICBzdGF0dXNCdG4udHlwZSA9ICdidXR0b24nO1xuICAgICAgICAgIHN0YXR1c0J0bi5kYXRhc2V0LmluZGV4ID0gIGk7XG4gICAgICAgICAgc3RhdHVzQnRuLnRleHRDb250ZW50ID0gJ0NoYW5nZSBkYXRlIFN0YXR1cyc7XG4gICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgIGVkaXRCdG4uY2xhc3NOYW1lID0gJ2VkaXRCdG4nO1xuICAgICAgICAgIGVkaXRCdG4udHlwZSA9ICdidXR0b24nO1xuICAgICAgICAgIGVkaXRCdG4uZGF0YXNldC5pbmRleCA9IGk7XG4gICAgICAgICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICBkZWxldGVCdG4uY2xhc3NOYW1lID0gJ2RlbGV0ZUJ0bic7XG4gICAgICAgICAgZGVsZXRlQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgICBkZWxldGVCdG4uZGF0YXNldC5pbmRleCA9IGk7XG4gICAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gIFxuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG4gICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChzdGF0dXNCdG4pO1xuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICBcbiAgICAgICAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IGAke3Rhc2sudGl0bGV9YDtcbiAgICAgICAgICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IGAke3Rhc2suZGVzY3JpcHRpb259YDtcbiAgICAgICAgICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9IGAke3Rhc2sucHJpb3JpdHl9YDtcbiAgICAgICAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gYCR7dGFzay5kYXRlfWA7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEFsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRBbGxUYXNrKCkge1xuICAgIFxufSIsImZ1bmN0aW9uIGxvYWRJbXBvcnRhbnQoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1wb3J0YW50LnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gICAgaW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudCcpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaW1wb3J0YW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEltcG9ydGFudDsiLCJmdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1RvLURvIExpc3QnO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2VMb2FkOyIsImZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJ1xuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJyk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQcm9qZWN0czsiLCJmdW5jdGlvbiBsb2FkVG9kYXkoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheS50ZXh0Q29udGVudCA9ICdUb2RheSdcbiAgICB0b2RheS5jbGFzc0xpc3QuYWRkKCd0b2RheScpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodG9kYXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkVG9kYXk7IiwiZnVuY3Rpb24gbG9hZFdlZWsoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3Qgd2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlZWsudGV4dENvbnRlbnQgPSAnV2VlaydcbiAgICB3ZWVrLmNsYXNzTGlzdC5hZGQoJ3dlZWsnKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHdlZWspO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkV2VlazsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSBcIi4vaW5pdGlhbExvYWRcIjtcbmltcG9ydCBsb2FkQWxsIGZyb20gXCIuL2FsbFwiO1xuaW1wb3J0IGxvYWRJbXBvcnRhbnQgZnJvbSBcIi4vaW1wb3J0YW50XCI7XG5pbXBvcnQgbG9hZFRvZGF5IGZyb20gXCIuL3RvZGF5XCI7XG5pbXBvcnQgbG9hZFdlZWsgZnJvbSBcIi4vd2Vla1wiO1xuaW1wb3J0IGxvYWRQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5pbml0aWFsUGFnZUxvYWQoKTtcbmxvYWRBbGwoKTtcbmxvYWRJbXBvcnRhbnQoKTtcbmxvYWRUb2RheSgpO1xubG9hZFdlZWsoKTtcbmxvYWRQcm9qZWN0cygpO1xuXG5sZXQgaW1wb3J0YW50TGlicmFyeSA9IFtdO1xubGV0IHRvZGF5TGlicmFyeSA9IFtdO1xubGV0IHdlZWtMaWJyYXJ5ID0gW107XG5sZXQgcHJvamVjdExpYnJhcnkgPSBbXTtcblxuXG5mdW5jdGlvbiBhZGRUYXNrVG9JbXBvcnRhbnRMaWJyYXJ5KHRhc2spIHtcbiAgaW1wb3J0YW50TGlicmFyeS5wdXNoKHRhc2spO1xufVxuZnVuY3Rpb24gYWRkVGFza1RvVG9kYXlMaWJyYXJ5KHRhc2spIHtcbiAgdG9kYXlMaWJyYXJ5LnB1c2godGFzayk7XG59XG5mdW5jdGlvbiBhZGRUYXNrVG9XZWVrTGlicmFyeSh0YXNrKSB7XG4gIHdlZWtMaWJyYXJ5LnB1c2godGFzayk7XG59XG5mdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0TGlicmFyeSh0YXNrKSB7XG4gIHByb2plY3RMaWJyYXJ5LnB1c2godGFzayk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9