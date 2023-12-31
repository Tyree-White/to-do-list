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