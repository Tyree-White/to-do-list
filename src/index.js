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
