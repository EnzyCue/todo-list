/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/GenerateDOM/mainContent.js":
/*!****************************************!*\
  !*** ./src/GenerateDOM/mainContent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateMainContent": () => (/* binding */ generateMainContent)
/* harmony export */ });
/* harmony import */ var _svg_prioritySVGHigh_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg/prioritySVGHigh.png */ "./src/svg/prioritySVGHigh.png");
/* harmony import */ var _svg_prioritySVGMedium_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/prioritySVGMedium.png */ "./src/svg/prioritySVGMedium.png");
/* harmony import */ var _svg_prioritySVGLow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/prioritySVGLow.png */ "./src/svg/prioritySVGLow.png");
/* harmony import */ var _svg_progressIconComplete_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/progressIconComplete.png */ "./src/svg/progressIconComplete.png");
/* harmony import */ var _svg_progressIconUnfinished_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svg/progressIconUnfinished.png */ "./src/svg/progressIconUnfinished.png");
/* harmony import */ var _appLogic_projectObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../appLogic/projectObject */ "./src/appLogic/projectObject.js");











const html = document.querySelector('.container');

function addTodoButton(container){

    const todoButton = document.createElement('button'); 

    todoButton.classList.add('todoButton');

    todoButton.textContent = 'Add New To-Do Item';


    container.appendChild(todoButton);

};

function generateMainContent(project){
    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    generateHeading(mainContent, project.getTitle());

    generateTodoPanel(mainContent, project.getTodoList());

    addTodoButton(mainContent);
    
    html.appendChild(mainContent);

    console.log(project.getTodoList().getTodos());
};



function generateHeading(container, title){
    const pageHeading = document.createElement('div');
    pageHeading.classList.add('pageHeading');

    pageHeading.textContent = title;

    container.appendChild(pageHeading);
};

function generateTodoPanel(container, todoList){
    const todoPanel = document.createElement('div');
    todoPanel.classList.add('todoPanel');

    console.log({todoList});

    todoList.getTodos().forEach(todoItem => {
        generateTodo(todoPanel, todoItem);
    });

    container.appendChild(todoPanel);
};

function generateTodo(container, todo){
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todoContainer');

    generateTodoItem(todoContainer, todo);
    generateTodoIsCompleteButton(todoContainer, todo.getIsComplete());

    container.appendChild(todoContainer);
};

function generateTodoItem(container, todo){
    const todoButton = document.createElement('button');
    todoButton.classList.add('todoItem');
    
    generatePrioritySvg(todoButton, todo.getPriority());
    generateTodoTitle(todoButton, todo.getTitle());
    generateTodoDate(todoButton, todo.getDueDate());
    
    container.appendChild(todoButton);
};


function generateTodoIsCompleteButton(container, isComplete){

    const completeButton = document.createElement('button'); 
    completeButton.classList.add('completeButton');

    const completeIcon = document.createElement('img');
    completeIcon.classList.add('completeIcon');

    switch(isComplete){
        case true:
            completeIcon.src = _svg_progressIconComplete_png__WEBPACK_IMPORTED_MODULE_3__;
            break;

        case false:
            completeIcon.src = _svg_progressIconUnfinished_png__WEBPACK_IMPORTED_MODULE_4__;
            break;
    };

    completeButton.appendChild(completeIcon); 
    container.appendChild(completeButton); 
};


function generateTodoDate(container, date){
    const todoDate = document.createElement('span');
    todoDate.classList.add('todoDate');

    todoDate.textContent = date;

    container.appendChild(todoDate);
};

function generateTodoTitle(container, title){
    const todoTitle = document.createElement('span');
    todoTitle.classList.add('todoTitle');

    todoTitle.textContent = title;

    container.appendChild(todoTitle);
};


function generatePrioritySvg(container, priority){

    const priorityIcon = document.createElement('img');
    priorityIcon.classList.add('priorityIcon');

    switch(priority){
        case 'high':
            priorityIcon.src = _svg_prioritySVGHigh_png__WEBPACK_IMPORTED_MODULE_0__;
            break;

        case 'medium':
            priorityIcon.src = _svg_prioritySVGMedium_png__WEBPACK_IMPORTED_MODULE_1__;
            break;

        case 'low':
            priorityIcon.src = _svg_prioritySVGLow_png__WEBPACK_IMPORTED_MODULE_2__;
            break;
    };
    container.appendChild(priorityIcon);
};

/***/ }),

/***/ "./src/GenerateDOM/sidebar.js":
/*!************************************!*\
  !*** ./src/GenerateDOM/sidebar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "generateSidebar": () => (/* binding */ generateSidebar),
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appLogic/initialSetup */ "./src/appLogic/initialSetup.js");
/* harmony import */ var _svg_user_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/user.png */ "./src/svg/user.png");
/* harmony import */ var _svg_settings_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/settings.png */ "./src/svg/settings.png");





const html = document.querySelector('.container');


function addProject(project) {
    const projectList = document.querySelector('.projectList');

    const projectItemButton = document.createElement('projectItemButton');
    projectItemButton.textContent = project.getTitle();;
    projectItemButton.dataset.id = project.getId();
  
    projectList.appendChild(projectItemButton);
};

function removeProject(project) {
    const projectList = document.querySelector('.projectList');
    const projectItem = projectList.querySelector(`li[data-id="${project.getId()}"]`);
  
    projectList.removeChild(projectItem);
};


function generateSidebar(){
    const leftPanel = document.createElement('div');
    leftPanel.classList.add('leftPanel');

    generateWelcomePanel(leftPanel);

    generateProjectPanel(leftPanel);

    addSettingsOption(leftPanel);
    
    html.appendChild(leftPanel);
};

function generateWelcomePanel(container){
    const welcome = document.createElement('div');
    welcome.classList.add('welcome');

    addWelcomeImage(welcome);
    addWelcomeMessage(welcome);

    container.appendChild(welcome);
};


function addWelcomeImage(container){

    const welcomeImage = document.createElement('img');
    welcomeImage.src = _svg_user_png__WEBPACK_IMPORTED_MODULE_1__;
    welcomeImage.classList.add('welcomeImage');


    container.appendChild(welcomeImage);

};

function addWelcomeMessage(container){

    const welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('welcomeMessage');

    welcomeMessage.textContent = 'Welcome';

    addWelcomeName(container);
    container.appendChild(welcomeMessage);
};

function addWelcomeName(container) {
    const welcomeName = document.createElement('span');
    welcomeName.classList.add('welcomeName');
    welcomeName.textContent = 'John Doe';

    container.appendChild(welcomeName);
};
 

function generateProjectPanel(container){
    const projectPanel = document.createElement('div');
    projectPanel.classList.add('projectPanel');

    addProjectPanelHeader(projectPanel);
    addProjectList(projectPanel);

    container.appendChild(projectPanel);

};

function addProjectPanelHeader(container){
    const projectPanelHeader = document.createElement('span');
    projectPanelHeader.classList.add('projectPanelHeader');
    projectPanelHeader.textContent = 'My Projects';

    addProjectPanelButton(container);

    container.appendChild(projectPanelHeader);
}

function addProjectPanelButton(container){
    const projectPanelButton = document.createElement('button');
    projectPanelButton.classList.add('projectPanelButton');

    container.appendChild(projectPanelButton);
};


function addProjectList(container) {
    const projectList = document.createElement('div');
    projectList.classList.add('projectList');

    _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_0__.myProjects.getProjectList().forEach(project => {
      const projectItemButton = document.createElement('button');
      projectItemButton.classList.add('projectItemButton');
      projectItemButton.textContent = project.getTitle();
      projectItemButton.dataset.id = project.getId();
    
      projectList.appendChild(projectItemButton);
    });
  
    container.appendChild(projectList);
};



function addSettingsOption(container) {
    const settingsOption = document.createElement('div');
    settingsOption.classList.add('settings-option');

    const settingsIcon = document.createElement('img');
    settingsIcon.classList.add('settingsIcon');
    settingsIcon.src = _svg_settings_png__WEBPACK_IMPORTED_MODULE_2__;

    const settingsLabel = document.createElement('span');
    settingsLabel.classList.add('settingsLabel');
    settingsLabel.textContent = 'Settings';

    settingsOption.appendChild(settingsIcon);
    settingsOption.appendChild(settingsLabel);
    container.appendChild(settingsOption);
};

/***/ }),

/***/ "./src/appLogic/initialSetup.js":
/*!**************************************!*\
  !*** ./src/appLogic/initialSetup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalProjectCounter": () => (/* binding */ globalProjectCounter),
/* harmony export */   "globalTodoCounter": () => (/* binding */ globalTodoCounter),
/* harmony export */   "myProjects": () => (/* reexport safe */ _myProjectsObject__WEBPACK_IMPORTED_MODULE_3__.myProjects),
/* harmony export */   "setupInitalProjects": () => (/* binding */ setupInitalProjects)
/* harmony export */ });
/* harmony import */ var _toDoListObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoListObject */ "./src/appLogic/toDoListObject.js");
/* harmony import */ var _toDoObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoObject */ "./src/appLogic/toDoObject.js");
/* harmony import */ var _projectObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectObject */ "./src/appLogic/projectObject.js");
/* harmony import */ var _myProjectsObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myProjectsObject */ "./src/appLogic/myProjectsObject.js");








let globalProjectCounter = 0;
let globalTodoCounter = 0;


function setupInitalProjects() {

    const exampleTodos = [
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Update website design", "Revamp the website layout and make it more user-friendly", "2023-04-01", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Optimize server performance", "Analyze server logs and optimize server settings to improve performance", "2023-04-02", "medium", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Implement new feature", "Add a new feature to the website that allows users to save their preferences", "2023-04-03", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Debug payment gateway", "Fix issues with payment gateway that are preventing customers from making purchases", "2023-04-04", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Write user documentation", "Create a user guide to help customers use our product more effectively", "2023-04-05", "low", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Update product specifications", "Update the product specifications document to reflect recent changes", "2023-04-06", "medium", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Test website on different devices", "Check website functionality and layout on different devices to ensure compatibility", "2023-04-07", "low", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Update website content", "Add new content to the website to keep it fresh and engaging for users", "2023-04-08", "medium", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Create marketing campaign", "Develop a marketing campaign to increase brand awareness and attract new customers", "2023-04-09", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Conduct user research", "Gather feedback from users to improve the product and address their needs", "2023-04-10", "medium", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Improve site speed", "Optimize website performance to improve site speed and reduce page load times", "2023-04-11", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Create training materials", "Develop training materials to help employees learn new skills and improve performance", "2023-04-12", "low", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Resolve customer complaints", "Address customer complaints and resolve issues to maintain customer satisfaction", "2023-04-13", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Improve search functionality", "Improve the search functionality of the website to make it easier for users to find what they need", "2023-04-14", "medium", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Create product roadmap", "Develop a roadmap for the product to guide future development and prioritize features", "2023-04-15", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Perform security audit", "Conduct a security audit of the website to identify vulnerabilities and implement fixes", "2023-04-16", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Improve user interface", "Redesign the user interface to improve user experience and make the website more intuitive to use", "2023-04-17", "medium", false, ++globalTodoCounter),
    ];


    const todosSet1 = exampleTodos.slice(0, 6);
    const todosSet2 = exampleTodos.slice(6, 11);
    const todosSet3 = exampleTodos.slice(11);
  
    setupExampleProject("Website Redesign Project", todosSet1);
    setupExampleProject("Server Optimization Project", todosSet2);
    setupExampleProject("Product Development Project", todosSet3);


    const defaultProject = setupDefaultProject(exampleTodos);

    return defaultProject;
    
};



function setupExampleProject(title, todoSet){

    const todoList = (0,_toDoListObject__WEBPACK_IMPORTED_MODULE_0__.todoListModule)();
    todoList.setTodos(todoSet);

    const theProject = (0,_projectObject__WEBPACK_IMPORTED_MODULE_2__.project)(title, globalProjectCounter++);
    theProject.setTodoList(todoList);

    _myProjectsObject__WEBPACK_IMPORTED_MODULE_3__.myProjects.addProject(theProject);

};


function setupDefaultProject(todoSet){

    const defaultList = (0,_toDoListObject__WEBPACK_IMPORTED_MODULE_0__.todoListModule)();
    defaultList.setTodos(todoSet);

    console.log(defaultList.getTodos());

    const defaultProject = (0,_projectObject__WEBPACK_IMPORTED_MODULE_2__.project)("My To Dos", globalProjectCounter++);

    defaultProject.setTodoList(defaultList);

    return defaultProject;
};

// function addTodoToProject(todo, project){
//     project.getTodoList().addTodo(todo);
// };

// function removeTodofromProject(todo, project){
//     project.getTodoList().removeTodo(todo);
// };

/***/ }),

/***/ "./src/appLogic/myProjectsObject.js":
/*!******************************************!*\
  !*** ./src/appLogic/myProjectsObject.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myProjects": () => (/* binding */ myProjects)
/* harmony export */ });


const myProjects = (() => {
  let projectList = [];

  const addProject = (project) => {
    projectList.push(project);
  };

  const removeProject = (project) => {
    const index = projectList.indexOf(project);
    if (index !== -1) {
      projectList.splice(index, 1);
      return true;
    }
    return false;
  };

  const getProjectList = () => {
    return projectList;
  };

  const setProjectList = (newProjectList) => {
    projectList = newProjectList;
  };

  const getProjectById = (id) => {
    return projectList.find(project => project.getId() === id);
  };

  return {
    addProject,
    removeProject,
    getProjectList,
    setProjectList,
    getProjectById,
  };
})();
  

/***/ }),

/***/ "./src/appLogic/projectObject.js":
/*!***************************************!*\
  !*** ./src/appLogic/projectObject.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });
/* harmony import */ var _toDoListObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoListObject */ "./src/appLogic/toDoListObject.js");



const project = (title, id) => {
  let todoList = (0,_toDoListObject__WEBPACK_IMPORTED_MODULE_0__.todoListModule)();

  const getTitle = () => title;
  const setTitle = (newTitle) => title = newTitle;

  const getTodoList = () => todoList;
  const setTodoList = (newTodoList) => todoList = newTodoList;

  const getId = () => id;

  return { getTitle, setTitle, getTodoList, setTodoList, getId };
};

  




/***/ }),

/***/ "./src/appLogic/toDoListObject.js":
/*!****************************************!*\
  !*** ./src/appLogic/toDoListObject.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoListModule": () => (/* binding */ todoListModule)
/* harmony export */ });


const todoListModule = () => {
    let todos = [];
  
    const addTodo = (todo) => {
      todos.push(todo);
    }
  
    const removeTodo = (todo) => {
      const index = todos.indexOf(todo);
      if (index !== -1) {
        todos.splice(index, 1);
        return true;
      }
    }
  
    const getTodos = () => {
      return todos;
    }
  
    const setTodos = (newTodos) => {
      todos = newTodos;
    }
  
    return { addTodo, removeTodo, getTodos, setTodos };
  };

/***/ }),

/***/ "./src/appLogic/toDoObject.js":
/*!************************************!*\
  !*** ./src/appLogic/toDoObject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });


const todo = (title, description, dueDate, priority, isComplete, id) => {
  const getId = () => id;
  
  const getTitle = () => title;
  const setTitle = (newTitle) => title = newTitle;
  
  const getDescription = () => description;
  const setDescription = (newDescription) => description = newDescription;
  
  const getDueDate = () => dueDate;
  const setDueDate = (newDueDate) => dueDate = newDueDate;
  
  const getPriority = () => priority;
  const setPriority = (newPriority) => priority = newPriority;
  
  const getIsComplete = () => isComplete;
  const setIsComplete = (newIsComplete) => isComplete = newIsComplete;
  
  return {
    getId,
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getDueDate,
    setDueDate,
    getPriority,
    setPriority,
    getIsComplete,
    setIsComplete
  };
};

  

/***/ }),

/***/ "./src/svg/prioritySVGHigh.png":
/*!*************************************!*\
  !*** ./src/svg/prioritySVGHigh.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d72b6fa5600de9b7dab6.png";

/***/ }),

/***/ "./src/svg/prioritySVGLow.png":
/*!************************************!*\
  !*** ./src/svg/prioritySVGLow.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b80731eb7d757d53d488.png";

/***/ }),

/***/ "./src/svg/prioritySVGMedium.png":
/*!***************************************!*\
  !*** ./src/svg/prioritySVGMedium.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ae44c4b96c5ff7aab93.png";

/***/ }),

/***/ "./src/svg/progressIconComplete.png":
/*!******************************************!*\
  !*** ./src/svg/progressIconComplete.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3c024e88a39bb3e01ef.png";

/***/ }),

/***/ "./src/svg/progressIconUnfinished.png":
/*!********************************************!*\
  !*** ./src/svg/progressIconUnfinished.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41222c9817d515b5c640.png";

/***/ }),

/***/ "./src/svg/settings.png":
/*!******************************!*\
  !*** ./src/svg/settings.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "967e7232ac21c483ae90.png";

/***/ }),

/***/ "./src/svg/user.png":
/*!**************************!*\
  !*** ./src/svg/user.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95f3b11e31e941222745.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _GenerateDOM_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenerateDOM/sidebar */ "./src/GenerateDOM/sidebar.js");
/* harmony import */ var _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appLogic/initialSetup */ "./src/appLogic/initialSetup.js");
/* harmony import */ var _GenerateDOM_mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GenerateDOM/mainContent */ "./src/GenerateDOM/mainContent.js");


// import { defaultProject } from "./appLogic/initialSetup";



const defaultProject = (0,_appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.setupInitalProjects)();

(0,_GenerateDOM_sidebar__WEBPACK_IMPORTED_MODULE_0__.generateSidebar)();

(0,_GenerateDOM_mainContent__WEBPACK_IMPORTED_MODULE_2__.generateMainContent)(defaultProject);

// event listener for loading a project from sidebar by clicking on it

const projectItemButtonGroup = document.querySelectorAll('.projectItemButton');

projectItemButtonGroup.forEach(projectItemButton => {
    projectItemButton.addEventListener('click', () => {

        removeCurrentPage();

        const projectID = projectItemButton.dataset.id;
        const project = _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.myProjects.getProjectById(projectID);
        (0,_GenerateDOM_mainContent__WEBPACK_IMPORTED_MODULE_2__.generateMainContent)(project);

    });
});

// event listener for adding a project from sidebar





// event listener for adding a new todo item from side bar.




// event listener for clicking on the todo item.




function removeCurrentPage(){
    const html = document.querySelector('.container');
    html.forEach((child) => {
        child.parentNode.removeChild(child);
    });
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZndEO0FBQ007QUFDOUQsWUFBWSxpQkFBaUI7QUFDd0I7QUFDVzs7QUFFaEUsdUJBQXVCLDJFQUFtQjs7QUFFMUMscUVBQWU7O0FBRWYsNkVBQW1COztBQUVuQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCLDZFQUF5QjtBQUNqRCxRQUFRLDZFQUFtQjs7QUFFM0IsS0FBSztBQUNMLENBQUM7O0FBRUQ7Ozs7OztBQU1BOzs7OztBQUtBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvR2VuZXJhdGVET00vbWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0dlbmVyYXRlRE9NL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcExvZ2ljL2luaXRpYWxTZXR1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwTG9naWMvbXlQcm9qZWN0c09iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwTG9naWMvcHJvamVjdE9iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwTG9naWMvdG9Eb0xpc3RPYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcExvZ2ljL3RvRG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpb3JpdHlTVkdIaWdoIGZyb20gJy4uL3N2Zy9wcmlvcml0eVNWR0hpZ2gucG5nJztcbmltcG9ydCBwcmlvcml0eVNWR01lZGl1bSBmcm9tICcuLi9zdmcvcHJpb3JpdHlTVkdNZWRpdW0ucG5nJztcbmltcG9ydCBwcmlvcml0eVNWR0xvdyBmcm9tICcuLi9zdmcvcHJpb3JpdHlTVkdMb3cucG5nJztcblxuaW1wb3J0IHByb2dyZXNzSWNvbkNvbXBsZXRlIGZyb20gJy4uL3N2Zy9wcm9ncmVzc0ljb25Db21wbGV0ZS5wbmcnO1xuaW1wb3J0IHByb2dyZXNzSWNvblVuZmluaXNoZWQgZnJvbSAnLi4vc3ZnL3Byb2dyZXNzSWNvblVuZmluaXNoZWQucG5nJztcblxuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gJy4uL2FwcExvZ2ljL3Byb2plY3RPYmplY3QnO1xuXG5leHBvcnQge2dlbmVyYXRlTWFpbkNvbnRlbnR9O1xuXG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBhZGRUb2RvQnV0dG9uKGNvbnRhaW5lcil7XG5cbiAgICBjb25zdCB0b2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuXG4gICAgdG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvQnV0dG9uJyk7XG5cbiAgICB0b2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBOZXcgVG8tRG8gSXRlbSc7XG5cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQnV0dG9uKTtcblxufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVNYWluQ29udGVudChwcm9qZWN0KXtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW5Db250ZW50Jyk7XG5cbiAgICBnZW5lcmF0ZUhlYWRpbmcobWFpbkNvbnRlbnQsIHByb2plY3QuZ2V0VGl0bGUoKSk7XG5cbiAgICBnZW5lcmF0ZVRvZG9QYW5lbChtYWluQ29udGVudCwgcHJvamVjdC5nZXRUb2RvTGlzdCgpKTtcblxuICAgIGFkZFRvZG9CdXR0b24obWFpbkNvbnRlbnQpO1xuICAgIFxuICAgIGh0bWwuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG4gICAgY29uc29sZS5sb2cocHJvamVjdC5nZXRUb2RvTGlzdCgpLmdldFRvZG9zKCkpO1xufTtcblxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlSGVhZGluZyhjb250YWluZXIsIHRpdGxlKXtcbiAgICBjb25zdCBwYWdlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3BhZ2VIZWFkaW5nJyk7XG5cbiAgICBwYWdlSGVhZGluZy50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VIZWFkaW5nKTtcbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVG9kb1BhbmVsKGNvbnRhaW5lciwgdG9kb0xpc3Qpe1xuICAgIGNvbnN0IHRvZG9QYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9QYW5lbC5jbGFzc0xpc3QuYWRkKCd0b2RvUGFuZWwnKTtcblxuICAgIGNvbnNvbGUubG9nKHt0b2RvTGlzdH0pO1xuXG4gICAgdG9kb0xpc3QuZ2V0VG9kb3MoKS5mb3JFYWNoKHRvZG9JdGVtID0+IHtcbiAgICAgICAgZ2VuZXJhdGVUb2RvKHRvZG9QYW5lbCwgdG9kb0l0ZW0pO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9QYW5lbCk7XG59O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRvZG8oY29udGFpbmVyLCB0b2RvKXtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvQ29udGFpbmVyJyk7XG5cbiAgICBnZW5lcmF0ZVRvZG9JdGVtKHRvZG9Db250YWluZXIsIHRvZG8pO1xuICAgIGdlbmVyYXRlVG9kb0lzQ29tcGxldGVCdXR0b24odG9kb0NvbnRhaW5lciwgdG9kby5nZXRJc0NvbXBsZXRlKCkpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVUb2RvSXRlbShjb250YWluZXIsIHRvZG8pe1xuICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9JdGVtJyk7XG4gICAgXG4gICAgZ2VuZXJhdGVQcmlvcml0eVN2Zyh0b2RvQnV0dG9uLCB0b2RvLmdldFByaW9yaXR5KCkpO1xuICAgIGdlbmVyYXRlVG9kb1RpdGxlKHRvZG9CdXR0b24sIHRvZG8uZ2V0VGl0bGUoKSk7XG4gICAgZ2VuZXJhdGVUb2RvRGF0ZSh0b2RvQnV0dG9uLCB0b2RvLmdldER1ZURhdGUoKSk7XG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9CdXR0b24pO1xufTtcblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRvZG9Jc0NvbXBsZXRlQnV0dG9uKGNvbnRhaW5lciwgaXNDb21wbGV0ZSl7XG5cbiAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICBjb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZUJ1dHRvbicpO1xuXG4gICAgY29uc3QgY29tcGxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29tcGxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlSWNvbicpO1xuXG4gICAgc3dpdGNoKGlzQ29tcGxldGUpe1xuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICBjb21wbGV0ZUljb24uc3JjID0gcHJvZ3Jlc3NJY29uQ29tcGxldGU7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgY29tcGxldGVJY29uLnNyYyA9IHByb2dyZXNzSWNvblVuZmluaXNoZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9O1xuXG4gICAgY29tcGxldGVCdXR0b24uYXBwZW5kQ2hpbGQoY29tcGxldGVJY29uKTsgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTsgXG59O1xuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlVG9kb0RhdGUoY29udGFpbmVyLCBkYXRlKXtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0ZScpO1xuXG4gICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVG9kb1RpdGxlKGNvbnRhaW5lciwgdGl0bGUpe1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kb1RpdGxlJyk7XG5cbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xufTtcblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByaW9yaXR5U3ZnKGNvbnRhaW5lciwgcHJpb3JpdHkpe1xuXG4gICAgY29uc3QgcHJpb3JpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJpb3JpdHlJY29uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5SWNvbicpO1xuXG4gICAgc3dpdGNoKHByaW9yaXR5KXtcbiAgICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgICAgICBwcmlvcml0eUljb24uc3JjID0gcHJpb3JpdHlTVkdIaWdoO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgICAgIHByaW9yaXR5SWNvbi5zcmMgPSBwcmlvcml0eVNWR01lZGl1bTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgICBwcmlvcml0eUljb24uc3JjID0gcHJpb3JpdHlTVkdMb3c7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9O1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUljb24pO1xufTsiLCJpbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSAnLi4vYXBwTG9naWMvaW5pdGlhbFNldHVwJztcbmltcG9ydCBwcm9maWxlU1ZHIGZyb20gJy4uL3N2Zy91c2VyLnBuZyc7XG5pbXBvcnQgc2V0dGluZ3NTVkcgZnJvbSAnLi4vc3ZnL3NldHRpbmdzLnBuZyc7XG5leHBvcnQge2dlbmVyYXRlU2lkZWJhciwgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdH07XG5cbmNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5cblxuZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcblxuICAgIGNvbnN0IHByb2plY3RJdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJvamVjdEl0ZW1CdXR0b24nKTtcbiAgICBwcm9qZWN0SXRlbUJ1dHRvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTs7XG4gICAgcHJvamVjdEl0ZW1CdXR0b24uZGF0YXNldC5pZCA9IHByb2plY3QuZ2V0SWQoKTtcbiAgXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1CdXR0b24pO1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IHByb2plY3RMaXN0LnF1ZXJ5U2VsZWN0b3IoYGxpW2RhdGEtaWQ9XCIke3Byb2plY3QuZ2V0SWQoKX1cIl1gKTtcbiAgXG4gICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQocHJvamVjdEl0ZW0pO1xufTtcblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVNpZGViYXIoKXtcbiAgICBjb25zdCBsZWZ0UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0UGFuZWwuY2xhc3NMaXN0LmFkZCgnbGVmdFBhbmVsJyk7XG5cbiAgICBnZW5lcmF0ZVdlbGNvbWVQYW5lbChsZWZ0UGFuZWwpO1xuXG4gICAgZ2VuZXJhdGVQcm9qZWN0UGFuZWwobGVmdFBhbmVsKTtcblxuICAgIGFkZFNldHRpbmdzT3B0aW9uKGxlZnRQYW5lbCk7XG4gICAgXG4gICAgaHRtbC5hcHBlbmRDaGlsZChsZWZ0UGFuZWwpO1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVXZWxjb21lUGFuZWwoY29udGFpbmVyKXtcbiAgICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VsY29tZS5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lJyk7XG5cbiAgICBhZGRXZWxjb21lSW1hZ2Uod2VsY29tZSk7XG4gICAgYWRkV2VsY29tZU1lc3NhZ2Uod2VsY29tZSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG59O1xuXG5cbmZ1bmN0aW9uIGFkZFdlbGNvbWVJbWFnZShjb250YWluZXIpe1xuXG4gICAgY29uc3Qgd2VsY29tZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgd2VsY29tZUltYWdlLnNyYyA9IHByb2ZpbGVTVkc7XG4gICAgd2VsY29tZUltYWdlLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWVJbWFnZScpO1xuXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZUltYWdlKTtcblxufTtcblxuZnVuY3Rpb24gYWRkV2VsY29tZU1lc3NhZ2UoY29udGFpbmVyKXtcblxuICAgIGNvbnN0IHdlbGNvbWVNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VsY29tZU1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnd2VsY29tZU1lc3NhZ2UnKTtcblxuICAgIHdlbGNvbWVNZXNzYWdlLnRleHRDb250ZW50ID0gJ1dlbGNvbWUnO1xuXG4gICAgYWRkV2VsY29tZU5hbWUoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZU1lc3NhZ2UpO1xufTtcblxuZnVuY3Rpb24gYWRkV2VsY29tZU5hbWUoY29udGFpbmVyKSB7XG4gICAgY29uc3Qgd2VsY29tZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgd2VsY29tZU5hbWUuY2xhc3NMaXN0LmFkZCgnd2VsY29tZU5hbWUnKTtcbiAgICB3ZWxjb21lTmFtZS50ZXh0Q29udGVudCA9ICdKb2huIERvZSc7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZU5hbWUpO1xufTtcbiBcblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0UGFuZWwoY29udGFpbmVyKXtcbiAgICBjb25zdCBwcm9qZWN0UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0UGFuZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdFBhbmVsJyk7XG5cbiAgICBhZGRQcm9qZWN0UGFuZWxIZWFkZXIocHJvamVjdFBhbmVsKTtcbiAgICBhZGRQcm9qZWN0TGlzdChwcm9qZWN0UGFuZWwpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RQYW5lbCk7XG5cbn07XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RQYW5lbEhlYWRlcihjb250YWluZXIpe1xuICAgIGNvbnN0IHByb2plY3RQYW5lbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcm9qZWN0UGFuZWxIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdFBhbmVsSGVhZGVyJyk7XG4gICAgcHJvamVjdFBhbmVsSGVhZGVyLnRleHRDb250ZW50ID0gJ015IFByb2plY3RzJztcblxuICAgIGFkZFByb2plY3RQYW5lbEJ1dHRvbihjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RQYW5lbEhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RQYW5lbEJ1dHRvbihjb250YWluZXIpe1xuICAgIGNvbnN0IHByb2plY3RQYW5lbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RQYW5lbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0UGFuZWxCdXR0b24nKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0UGFuZWxCdXR0b24pO1xufTtcblxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0TGlzdChjb250YWluZXIpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0Jyk7XG5cbiAgICBteVByb2plY3RzLmdldFByb2plY3RMaXN0KCkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBwcm9qZWN0SXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SXRlbUJ1dHRvbicpO1xuICAgICAgcHJvamVjdEl0ZW1CdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gICAgICBwcm9qZWN0SXRlbUJ1dHRvbi5kYXRhc2V0LmlkID0gcHJvamVjdC5nZXRJZCgpO1xuICAgIFxuICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1CdXR0b24pO1xuICAgIH0pO1xuICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xufTtcblxuXG5cbmZ1bmN0aW9uIGFkZFNldHRpbmdzT3B0aW9uKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IHNldHRpbmdzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V0dGluZ3NPcHRpb24uY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3Mtb3B0aW9uJyk7XG5cbiAgICBjb25zdCBzZXR0aW5nc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzZXR0aW5nc0ljb24uY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3NJY29uJyk7XG4gICAgc2V0dGluZ3NJY29uLnNyYyA9IHNldHRpbmdzU1ZHO1xuXG4gICAgY29uc3Qgc2V0dGluZ3NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzZXR0aW5nc0xhYmVsLmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzTGFiZWwnKTtcbiAgICBzZXR0aW5nc0xhYmVsLnRleHRDb250ZW50ID0gJ1NldHRpbmdzJztcblxuICAgIHNldHRpbmdzT3B0aW9uLmFwcGVuZENoaWxkKHNldHRpbmdzSWNvbik7XG4gICAgc2V0dGluZ3NPcHRpb24uYXBwZW5kQ2hpbGQoc2V0dGluZ3NMYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNldHRpbmdzT3B0aW9uKTtcbn07IiwiaW1wb3J0IHsgdG9kb0xpc3RNb2R1bGUgfSBmcm9tIFwiLi90b0RvTGlzdE9iamVjdFwiO1xuaW1wb3J0IHsgdG9kbyB9IGZyb20gXCIuL3RvRG9PYmplY3RcIjtcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0T2JqZWN0XCI7XG5pbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSBcIi4vbXlQcm9qZWN0c09iamVjdFwiO1xuZXhwb3J0IHsgbXlQcm9qZWN0cyB9O1xuZXhwb3J0IHsgZ2xvYmFsUHJvamVjdENvdW50ZXIsIGdsb2JhbFRvZG9Db3VudGVyIH07XG5leHBvcnQgeyBzZXR1cEluaXRhbFByb2plY3RzIH07XG5cbmxldCBnbG9iYWxQcm9qZWN0Q291bnRlciA9IDA7XG5sZXQgZ2xvYmFsVG9kb0NvdW50ZXIgPSAwO1xuXG5cbmZ1bmN0aW9uIHNldHVwSW5pdGFsUHJvamVjdHMoKSB7XG5cbiAgICBjb25zdCBleGFtcGxlVG9kb3MgPSBbXG4gICAgICAgIHRvZG8oXCJVcGRhdGUgd2Vic2l0ZSBkZXNpZ25cIiwgXCJSZXZhbXAgdGhlIHdlYnNpdGUgbGF5b3V0IGFuZCBtYWtlIGl0IG1vcmUgdXNlci1mcmllbmRseVwiLCBcIjIwMjMtMDQtMDFcIiwgXCJoaWdoXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIk9wdGltaXplIHNlcnZlciBwZXJmb3JtYW5jZVwiLCBcIkFuYWx5emUgc2VydmVyIGxvZ3MgYW5kIG9wdGltaXplIHNlcnZlciBzZXR0aW5ncyB0byBpbXByb3ZlIHBlcmZvcm1hbmNlXCIsIFwiMjAyMy0wNC0wMlwiLCBcIm1lZGl1bVwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJJbXBsZW1lbnQgbmV3IGZlYXR1cmVcIiwgXCJBZGQgYSBuZXcgZmVhdHVyZSB0byB0aGUgd2Vic2l0ZSB0aGF0IGFsbG93cyB1c2VycyB0byBzYXZlIHRoZWlyIHByZWZlcmVuY2VzXCIsIFwiMjAyMy0wNC0wM1wiLCBcImhpZ2hcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiRGVidWcgcGF5bWVudCBnYXRld2F5XCIsIFwiRml4IGlzc3VlcyB3aXRoIHBheW1lbnQgZ2F0ZXdheSB0aGF0IGFyZSBwcmV2ZW50aW5nIGN1c3RvbWVycyBmcm9tIG1ha2luZyBwdXJjaGFzZXNcIiwgXCIyMDIzLTA0LTA0XCIsIFwiaGlnaFwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJXcml0ZSB1c2VyIGRvY3VtZW50YXRpb25cIiwgXCJDcmVhdGUgYSB1c2VyIGd1aWRlIHRvIGhlbHAgY3VzdG9tZXJzIHVzZSBvdXIgcHJvZHVjdCBtb3JlIGVmZmVjdGl2ZWx5XCIsIFwiMjAyMy0wNC0wNVwiLCBcImxvd1wiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJVcGRhdGUgcHJvZHVjdCBzcGVjaWZpY2F0aW9uc1wiLCBcIlVwZGF0ZSB0aGUgcHJvZHVjdCBzcGVjaWZpY2F0aW9ucyBkb2N1bWVudCB0byByZWZsZWN0IHJlY2VudCBjaGFuZ2VzXCIsIFwiMjAyMy0wNC0wNlwiLCBcIm1lZGl1bVwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJUZXN0IHdlYnNpdGUgb24gZGlmZmVyZW50IGRldmljZXNcIiwgXCJDaGVjayB3ZWJzaXRlIGZ1bmN0aW9uYWxpdHkgYW5kIGxheW91dCBvbiBkaWZmZXJlbnQgZGV2aWNlcyB0byBlbnN1cmUgY29tcGF0aWJpbGl0eVwiLCBcIjIwMjMtMDQtMDdcIiwgXCJsb3dcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiVXBkYXRlIHdlYnNpdGUgY29udGVudFwiLCBcIkFkZCBuZXcgY29udGVudCB0byB0aGUgd2Vic2l0ZSB0byBrZWVwIGl0IGZyZXNoIGFuZCBlbmdhZ2luZyBmb3IgdXNlcnNcIiwgXCIyMDIzLTA0LTA4XCIsIFwibWVkaXVtXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIkNyZWF0ZSBtYXJrZXRpbmcgY2FtcGFpZ25cIiwgXCJEZXZlbG9wIGEgbWFya2V0aW5nIGNhbXBhaWduIHRvIGluY3JlYXNlIGJyYW5kIGF3YXJlbmVzcyBhbmQgYXR0cmFjdCBuZXcgY3VzdG9tZXJzXCIsIFwiMjAyMy0wNC0wOVwiLCBcImhpZ2hcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiQ29uZHVjdCB1c2VyIHJlc2VhcmNoXCIsIFwiR2F0aGVyIGZlZWRiYWNrIGZyb20gdXNlcnMgdG8gaW1wcm92ZSB0aGUgcHJvZHVjdCBhbmQgYWRkcmVzcyB0aGVpciBuZWVkc1wiLCBcIjIwMjMtMDQtMTBcIiwgXCJtZWRpdW1cIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiSW1wcm92ZSBzaXRlIHNwZWVkXCIsIFwiT3B0aW1pemUgd2Vic2l0ZSBwZXJmb3JtYW5jZSB0byBpbXByb3ZlIHNpdGUgc3BlZWQgYW5kIHJlZHVjZSBwYWdlIGxvYWQgdGltZXNcIiwgXCIyMDIzLTA0LTExXCIsIFwiaGlnaFwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJDcmVhdGUgdHJhaW5pbmcgbWF0ZXJpYWxzXCIsIFwiRGV2ZWxvcCB0cmFpbmluZyBtYXRlcmlhbHMgdG8gaGVscCBlbXBsb3llZXMgbGVhcm4gbmV3IHNraWxscyBhbmQgaW1wcm92ZSBwZXJmb3JtYW5jZVwiLCBcIjIwMjMtMDQtMTJcIiwgXCJsb3dcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiUmVzb2x2ZSBjdXN0b21lciBjb21wbGFpbnRzXCIsIFwiQWRkcmVzcyBjdXN0b21lciBjb21wbGFpbnRzIGFuZCByZXNvbHZlIGlzc3VlcyB0byBtYWludGFpbiBjdXN0b21lciBzYXRpc2ZhY3Rpb25cIiwgXCIyMDIzLTA0LTEzXCIsIFwiaGlnaFwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJJbXByb3ZlIHNlYXJjaCBmdW5jdGlvbmFsaXR5XCIsIFwiSW1wcm92ZSB0aGUgc2VhcmNoIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHdlYnNpdGUgdG8gbWFrZSBpdCBlYXNpZXIgZm9yIHVzZXJzIHRvIGZpbmQgd2hhdCB0aGV5IG5lZWRcIiwgXCIyMDIzLTA0LTE0XCIsIFwibWVkaXVtXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIkNyZWF0ZSBwcm9kdWN0IHJvYWRtYXBcIiwgXCJEZXZlbG9wIGEgcm9hZG1hcCBmb3IgdGhlIHByb2R1Y3QgdG8gZ3VpZGUgZnV0dXJlIGRldmVsb3BtZW50IGFuZCBwcmlvcml0aXplIGZlYXR1cmVzXCIsIFwiMjAyMy0wNC0xNVwiLCBcImhpZ2hcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiUGVyZm9ybSBzZWN1cml0eSBhdWRpdFwiLCBcIkNvbmR1Y3QgYSBzZWN1cml0eSBhdWRpdCBvZiB0aGUgd2Vic2l0ZSB0byBpZGVudGlmeSB2dWxuZXJhYmlsaXRpZXMgYW5kIGltcGxlbWVudCBmaXhlc1wiLCBcIjIwMjMtMDQtMTZcIiwgXCJoaWdoXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIkltcHJvdmUgdXNlciBpbnRlcmZhY2VcIiwgXCJSZWRlc2lnbiB0aGUgdXNlciBpbnRlcmZhY2UgdG8gaW1wcm92ZSB1c2VyIGV4cGVyaWVuY2UgYW5kIG1ha2UgdGhlIHdlYnNpdGUgbW9yZSBpbnR1aXRpdmUgdG8gdXNlXCIsIFwiMjAyMy0wNC0xN1wiLCBcIm1lZGl1bVwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgXTtcblxuXG4gICAgY29uc3QgdG9kb3NTZXQxID0gZXhhbXBsZVRvZG9zLnNsaWNlKDAsIDYpO1xuICAgIGNvbnN0IHRvZG9zU2V0MiA9IGV4YW1wbGVUb2Rvcy5zbGljZSg2LCAxMSk7XG4gICAgY29uc3QgdG9kb3NTZXQzID0gZXhhbXBsZVRvZG9zLnNsaWNlKDExKTtcbiAgXG4gICAgc2V0dXBFeGFtcGxlUHJvamVjdChcIldlYnNpdGUgUmVkZXNpZ24gUHJvamVjdFwiLCB0b2Rvc1NldDEpO1xuICAgIHNldHVwRXhhbXBsZVByb2plY3QoXCJTZXJ2ZXIgT3B0aW1pemF0aW9uIFByb2plY3RcIiwgdG9kb3NTZXQyKTtcbiAgICBzZXR1cEV4YW1wbGVQcm9qZWN0KFwiUHJvZHVjdCBEZXZlbG9wbWVudCBQcm9qZWN0XCIsIHRvZG9zU2V0Myk7XG5cblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gc2V0dXBEZWZhdWx0UHJvamVjdChleGFtcGxlVG9kb3MpO1xuXG4gICAgcmV0dXJuIGRlZmF1bHRQcm9qZWN0O1xuICAgIFxufTtcblxuXG5cbmZ1bmN0aW9uIHNldHVwRXhhbXBsZVByb2plY3QodGl0bGUsIHRvZG9TZXQpe1xuXG4gICAgY29uc3QgdG9kb0xpc3QgPSB0b2RvTGlzdE1vZHVsZSgpO1xuICAgIHRvZG9MaXN0LnNldFRvZG9zKHRvZG9TZXQpO1xuXG4gICAgY29uc3QgdGhlUHJvamVjdCA9IHByb2plY3QodGl0bGUsIGdsb2JhbFByb2plY3RDb3VudGVyKyspO1xuICAgIHRoZVByb2plY3Quc2V0VG9kb0xpc3QodG9kb0xpc3QpO1xuXG4gICAgbXlQcm9qZWN0cy5hZGRQcm9qZWN0KHRoZVByb2plY3QpO1xuXG59O1xuXG5cbmZ1bmN0aW9uIHNldHVwRGVmYXVsdFByb2plY3QodG9kb1NldCl7XG5cbiAgICBjb25zdCBkZWZhdWx0TGlzdCA9IHRvZG9MaXN0TW9kdWxlKCk7XG4gICAgZGVmYXVsdExpc3Quc2V0VG9kb3ModG9kb1NldCk7XG5cbiAgICBjb25zb2xlLmxvZyhkZWZhdWx0TGlzdC5nZXRUb2RvcygpKTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdChcIk15IFRvIERvc1wiLCBnbG9iYWxQcm9qZWN0Q291bnRlcisrKTtcblxuICAgIGRlZmF1bHRQcm9qZWN0LnNldFRvZG9MaXN0KGRlZmF1bHRMaXN0KTtcblxuICAgIHJldHVybiBkZWZhdWx0UHJvamVjdDtcbn07XG5cbi8vIGZ1bmN0aW9uIGFkZFRvZG9Ub1Byb2plY3QodG9kbywgcHJvamVjdCl7XG4vLyAgICAgcHJvamVjdC5nZXRUb2RvTGlzdCgpLmFkZFRvZG8odG9kbyk7XG4vLyB9O1xuXG4vLyBmdW5jdGlvbiByZW1vdmVUb2RvZnJvbVByb2plY3QodG9kbywgcHJvamVjdCl7XG4vLyAgICAgcHJvamVjdC5nZXRUb2RvTGlzdCgpLnJlbW92ZVRvZG8odG9kbyk7XG4vLyB9OyIsImV4cG9ydCB7bXlQcm9qZWN0c307XG5cbmNvbnN0IG15UHJvamVjdHMgPSAoKCkgPT4ge1xuICBsZXQgcHJvamVjdExpc3QgPSBbXTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdExpc3QuaW5kZXhPZihwcm9qZWN0KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdExpc3Q7XG4gIH07XG5cbiAgY29uc3Qgc2V0UHJvamVjdExpc3QgPSAobmV3UHJvamVjdExpc3QpID0+IHtcbiAgICBwcm9qZWN0TGlzdCA9IG5ld1Byb2plY3RMaXN0O1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RCeUlkID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RMaXN0LmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmdldElkKCkgPT09IGlkKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0TGlzdCxcbiAgICBzZXRQcm9qZWN0TGlzdCxcbiAgICBnZXRQcm9qZWN0QnlJZCxcbiAgfTtcbn0pKCk7XG4gICIsImV4cG9ydCB7cHJvamVjdH07XG5pbXBvcnQgeyB0b2RvTGlzdE1vZHVsZSB9IGZyb20gXCIuL3RvRG9MaXN0T2JqZWN0XCI7XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUsIGlkKSA9PiB7XG4gIGxldCB0b2RvTGlzdCA9IHRvZG9MaXN0TW9kdWxlKCk7XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHRpdGxlID0gbmV3VGl0bGU7XG5cbiAgY29uc3QgZ2V0VG9kb0xpc3QgPSAoKSA9PiB0b2RvTGlzdDtcbiAgY29uc3Qgc2V0VG9kb0xpc3QgPSAobmV3VG9kb0xpc3QpID0+IHRvZG9MaXN0ID0gbmV3VG9kb0xpc3Q7XG5cbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZDtcblxuICByZXR1cm4geyBnZXRUaXRsZSwgc2V0VGl0bGUsIGdldFRvZG9MaXN0LCBzZXRUb2RvTGlzdCwgZ2V0SWQgfTtcbn07XG5cbiAgXG5cblxuIiwiZXhwb3J0IHt0b2RvTGlzdE1vZHVsZX07XG5cbmNvbnN0IHRvZG9MaXN0TW9kdWxlID0gKCkgPT4ge1xuICAgIGxldCB0b2RvcyA9IFtdO1xuICBcbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgIHRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuICBcbiAgICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0b2RvcztcbiAgICB9XG4gIFxuICAgIGNvbnN0IHNldFRvZG9zID0gKG5ld1RvZG9zKSA9PiB7XG4gICAgICB0b2RvcyA9IG5ld1RvZG9zO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIHsgYWRkVG9kbywgcmVtb3ZlVG9kbywgZ2V0VG9kb3MsIHNldFRvZG9zIH07XG4gIH07IiwiZXhwb3J0IHt0b2RvfTtcblxuY29uc3QgdG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlLCBpZCkgPT4ge1xuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuICBcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHRpdGxlID0gbmV3VGl0bGU7XG4gIFxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4gZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgXG4gIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICBcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gIFxuICBjb25zdCBnZXRJc0NvbXBsZXRlID0gKCkgPT4gaXNDb21wbGV0ZTtcbiAgY29uc3Qgc2V0SXNDb21wbGV0ZSA9IChuZXdJc0NvbXBsZXRlKSA9PiBpc0NvbXBsZXRlID0gbmV3SXNDb21wbGV0ZTtcbiAgXG4gIHJldHVybiB7XG4gICAgZ2V0SWQsXG4gICAgZ2V0VGl0bGUsXG4gICAgc2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0RHVlRGF0ZSxcbiAgICBzZXREdWVEYXRlLFxuICAgIGdldFByaW9yaXR5LFxuICAgIHNldFByaW9yaXR5LFxuICAgIGdldElzQ29tcGxldGUsXG4gICAgc2V0SXNDb21wbGV0ZVxuICB9O1xufTtcblxuICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBnZW5lcmF0ZVNpZGViYXIgfSBmcm9tIFwiLi9HZW5lcmF0ZURPTS9zaWRlYmFyXCI7XG5pbXBvcnQgeyBzZXR1cEluaXRhbFByb2plY3RzIH0gZnJvbSBcIi4vYXBwTG9naWMvaW5pdGlhbFNldHVwXCI7XG4vLyBpbXBvcnQgeyBkZWZhdWx0UHJvamVjdCB9IGZyb20gXCIuL2FwcExvZ2ljL2luaXRpYWxTZXR1cFwiO1xuaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gXCIuL2FwcExvZ2ljL2luaXRpYWxTZXR1cFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVNYWluQ29udGVudCB9IGZyb20gXCIuL0dlbmVyYXRlRE9NL21haW5Db250ZW50XCI7XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gc2V0dXBJbml0YWxQcm9qZWN0cygpO1xuXG5nZW5lcmF0ZVNpZGViYXIoKTtcblxuZ2VuZXJhdGVNYWluQ29udGVudChkZWZhdWx0UHJvamVjdCk7XG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBsb2FkaW5nIGEgcHJvamVjdCBmcm9tIHNpZGViYXIgYnkgY2xpY2tpbmcgb24gaXRcblxuY29uc3QgcHJvamVjdEl0ZW1CdXR0b25Hcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0SXRlbUJ1dHRvbicpO1xuXG5wcm9qZWN0SXRlbUJ1dHRvbkdyb3VwLmZvckVhY2gocHJvamVjdEl0ZW1CdXR0b24gPT4ge1xuICAgIHByb2plY3RJdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgIHJlbW92ZUN1cnJlbnRQYWdlKCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdEl0ZW1CdXR0b24uZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG15UHJvamVjdHMuZ2V0UHJvamVjdEJ5SWQocHJvamVjdElEKTtcbiAgICAgICAgZ2VuZXJhdGVNYWluQ29udGVudChwcm9qZWN0KTtcblxuICAgIH0pO1xufSk7XG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBhZGRpbmcgYSBwcm9qZWN0IGZyb20gc2lkZWJhclxuXG5cblxuXG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBhZGRpbmcgYSBuZXcgdG9kbyBpdGVtIGZyb20gc2lkZSBiYXIuXG5cblxuXG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBjbGlja2luZyBvbiB0aGUgdG9kbyBpdGVtLlxuXG5cblxuXG5mdW5jdGlvbiByZW1vdmVDdXJyZW50UGFnZSgpe1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgaHRtbC5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9KTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9