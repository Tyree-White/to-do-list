import initialPageLoad from "./initialLoad";
import loadAll from "./all";
import loadImportant from "./important";
import loadToday from "./today";
import loadWeek from "./week";
import loadProjects from "./projects";

initialPageLoad();
loadAll();
loadImportant();
loadToday();
loadWeek();
loadProjects();

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

class Task {
  constructor(title, description, priority, date) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.date = date;
  }
}
