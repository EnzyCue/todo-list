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

    // console.log("Project Details:");
    // console.log("Title: ", theProject.getTitle());
    // console.log("Id: ", theProject.getId());
    // console.log("Todo List: ", theProject.getTodoList());

};


function setupDefaultProject(todoSet){

    const defaultList = (0,_toDoListObject__WEBPACK_IMPORTED_MODULE_0__.todoListModule)();
    defaultList.setTodos(todoSet);

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
    return getProjectList().find(project => project.getId() === id);
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





const defaultProject = (0,_appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.setupInitalProjects)();

(0,_GenerateDOM_sidebar__WEBPACK_IMPORTED_MODULE_0__.generateSidebar)();

(0,_GenerateDOM_mainContent__WEBPACK_IMPORTED_MODULE_2__.generateMainContent)(defaultProject);

// event listener for loading a project from sidebar by clicking on it

const projectItemButtonGroup = document.querySelectorAll('.projectItemButton');

projectItemButtonGroup.forEach(projectItemButton => {
    projectItemButton.addEventListener('click', () => {

        removeCurrentPage();

        const projectID = parseInt(projectItemButton.dataset.id);
        const projectSelected = _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.myProjects.getProjectById(projectID);

        (0,_GenerateDOM_mainContent__WEBPACK_IMPORTED_MODULE_2__.generateMainContent)(projectSelected);
    });
});

// event listener for adding a project from sidebar





// event listener for adding a new todo item from side bar.




// event listener for clicking on the todo item.




function removeCurrentPage(){
    const html = document.querySelectorAll('.container > :not(.leftPanel)');
    html.forEach((child) => {
        child.parentNode.removeChild(child);
    });
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZndEO0FBQ007QUFDVDtBQUNXOztBQUVoRSx1QkFBdUIsMkVBQW1COztBQUUxQyxxRUFBZTs7QUFFZiw2RUFBbUI7O0FBRW5COztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0MsNkVBQXlCOztBQUV6RCxRQUFRLDZFQUFtQjtBQUMzQixLQUFLO0FBQ0wsQ0FBQzs7QUFFRDs7Ozs7O0FBTUE7Ozs7O0FBS0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9HZW5lcmF0ZURPTS9tYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvR2VuZXJhdGVET00vc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwTG9naWMvaW5pdGlhbFNldHVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBMb2dpYy9teVByb2plY3RzT2JqZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBMb2dpYy9wcm9qZWN0T2JqZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBMb2dpYy90b0RvTGlzdE9iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwTG9naWMvdG9Eb09iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlvcml0eVNWR0hpZ2ggZnJvbSAnLi4vc3ZnL3ByaW9yaXR5U1ZHSGlnaC5wbmcnO1xuaW1wb3J0IHByaW9yaXR5U1ZHTWVkaXVtIGZyb20gJy4uL3N2Zy9wcmlvcml0eVNWR01lZGl1bS5wbmcnO1xuaW1wb3J0IHByaW9yaXR5U1ZHTG93IGZyb20gJy4uL3N2Zy9wcmlvcml0eVNWR0xvdy5wbmcnO1xuXG5pbXBvcnQgcHJvZ3Jlc3NJY29uQ29tcGxldGUgZnJvbSAnLi4vc3ZnL3Byb2dyZXNzSWNvbkNvbXBsZXRlLnBuZyc7XG5pbXBvcnQgcHJvZ3Jlc3NJY29uVW5maW5pc2hlZCBmcm9tICcuLi9zdmcvcHJvZ3Jlc3NJY29uVW5maW5pc2hlZC5wbmcnO1xuXG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSAnLi4vYXBwTG9naWMvcHJvamVjdE9iamVjdCc7XG5cbmV4cG9ydCB7Z2VuZXJhdGVNYWluQ29udGVudH07XG5cbmNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5cbmZ1bmN0aW9uIGFkZFRvZG9CdXR0b24oY29udGFpbmVyKXtcblxuICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG5cbiAgICB0b2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9CdXR0b24nKTtcblxuICAgIHRvZG9CdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIE5ldyBUby1EbyBJdGVtJztcblxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9CdXR0b24pO1xuXG59O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZU1haW5Db250ZW50KHByb2plY3Qpe1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbkNvbnRlbnQnKTtcblxuICAgIGdlbmVyYXRlSGVhZGluZyhtYWluQ29udGVudCwgcHJvamVjdC5nZXRUaXRsZSgpKTtcblxuICAgIGdlbmVyYXRlVG9kb1BhbmVsKG1haW5Db250ZW50LCBwcm9qZWN0LmdldFRvZG9MaXN0KCkpO1xuXG4gICAgYWRkVG9kb0J1dHRvbihtYWluQ29udGVudCk7XG4gICAgXG4gICAgaHRtbC5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG5cbn07XG5cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhlYWRpbmcoY29udGFpbmVyLCB0aXRsZSl7XG4gICAgY29uc3QgcGFnZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdwYWdlSGVhZGluZycpO1xuXG4gICAgcGFnZUhlYWRpbmcudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlSGVhZGluZyk7XG59O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRvZG9QYW5lbChjb250YWluZXIsIHRvZG9MaXN0KXtcbiAgICBjb25zdCB0b2RvUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvUGFuZWwuY2xhc3NMaXN0LmFkZCgndG9kb1BhbmVsJyk7XG5cblxuICAgIHRvZG9MaXN0LmdldFRvZG9zKCkuZm9yRWFjaCh0b2RvSXRlbSA9PiB7XG4gICAgICAgIGdlbmVyYXRlVG9kbyh0b2RvUGFuZWwsIHRvZG9JdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvUGFuZWwpO1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVUb2RvKGNvbnRhaW5lciwgdG9kbyl7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb0NvbnRhaW5lcicpO1xuXG4gICAgZ2VuZXJhdGVUb2RvSXRlbSh0b2RvQ29udGFpbmVyLCB0b2RvKTtcbiAgICBnZW5lcmF0ZVRvZG9Jc0NvbXBsZXRlQnV0dG9uKHRvZG9Db250YWluZXIsIHRvZG8uZ2V0SXNDb21wbGV0ZSgpKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVG9kb0l0ZW0oY29udGFpbmVyLCB0b2RvKXtcbiAgICBjb25zdCB0b2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvSXRlbScpO1xuICAgIFxuICAgIGdlbmVyYXRlUHJpb3JpdHlTdmcodG9kb0J1dHRvbiwgdG9kby5nZXRQcmlvcml0eSgpKTtcbiAgICBnZW5lcmF0ZVRvZG9UaXRsZSh0b2RvQnV0dG9uLCB0b2RvLmdldFRpdGxlKCkpO1xuICAgIGdlbmVyYXRlVG9kb0RhdGUodG9kb0J1dHRvbiwgdG9kby5nZXREdWVEYXRlKCkpO1xuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQnV0dG9uKTtcbn07XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVUb2RvSXNDb21wbGV0ZUJ1dHRvbihjb250YWluZXIsIGlzQ29tcGxldGUpe1xuXG4gICAgY29uc3QgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgY29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVCdXR0b24nKTtcblxuICAgIGNvbnN0IGNvbXBsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbXBsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZUljb24nKTtcblxuICAgIHN3aXRjaChpc0NvbXBsZXRlKXtcbiAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgY29tcGxldGVJY29uLnNyYyA9IHByb2dyZXNzSWNvbkNvbXBsZXRlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgIGNvbXBsZXRlSWNvbi5zcmMgPSBwcm9ncmVzc0ljb25VbmZpbmlzaGVkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfTtcblxuICAgIGNvbXBsZXRlQnV0dG9uLmFwcGVuZENoaWxkKGNvbXBsZXRlSWNvbik7IFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7IFxufTtcblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRvZG9EYXRlKGNvbnRhaW5lciwgZGF0ZSl7XG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGUnKTtcblxuICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG59O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRvZG9UaXRsZShjb250YWluZXIsIHRpdGxlKXtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG9UaXRsZScpO1xuXG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbn07XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcmlvcml0eVN2Zyhjb250YWluZXIsIHByaW9yaXR5KXtcblxuICAgIGNvbnN0IHByaW9yaXR5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByaW9yaXR5SWNvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eUljb24nKTtcblxuICAgIHN3aXRjaChwcmlvcml0eSl7XG4gICAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICAgICAgcHJpb3JpdHlJY29uLnNyYyA9IHByaW9yaXR5U1ZHSGlnaDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICBwcmlvcml0eUljb24uc3JjID0gcHJpb3JpdHlTVkdNZWRpdW07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdsb3cnOlxuICAgICAgICAgICAgcHJpb3JpdHlJY29uLnNyYyA9IHByaW9yaXR5U1ZHTG93O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlJY29uKTtcbn07IiwiaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gJy4uL2FwcExvZ2ljL2luaXRpYWxTZXR1cCc7XG5pbXBvcnQgcHJvZmlsZVNWRyBmcm9tICcuLi9zdmcvdXNlci5wbmcnO1xuaW1wb3J0IHNldHRpbmdzU1ZHIGZyb20gJy4uL3N2Zy9zZXR0aW5ncy5wbmcnO1xuZXhwb3J0IHtnZW5lcmF0ZVNpZGViYXIsIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3R9O1xuXG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG5cbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0SXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Byb2plY3RJdGVtQnV0dG9uJyk7XG4gICAgcHJvamVjdEl0ZW1CdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7O1xuICAgIHByb2plY3RJdGVtQnV0dG9uLmRhdGFzZXQuaWQgPSBwcm9qZWN0LmdldElkKCk7XG4gIFxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RJdGVtQnV0dG9uKTtcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0Jyk7XG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBwcm9qZWN0TGlzdC5xdWVyeVNlbGVjdG9yKGBsaVtkYXRhLWlkPVwiJHtwcm9qZWN0LmdldElkKCl9XCJdYCk7XG4gIFxuICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKHByb2plY3RJdGVtKTtcbn07XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVTaWRlYmFyKCl7XG4gICAgY29uc3QgbGVmdFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdFBhbmVsLmNsYXNzTGlzdC5hZGQoJ2xlZnRQYW5lbCcpO1xuXG4gICAgZ2VuZXJhdGVXZWxjb21lUGFuZWwobGVmdFBhbmVsKTtcblxuICAgIGdlbmVyYXRlUHJvamVjdFBhbmVsKGxlZnRQYW5lbCk7XG5cbiAgICBhZGRTZXR0aW5nc09wdGlvbihsZWZ0UGFuZWwpO1xuICAgIFxuICAgIGh0bWwuYXBwZW5kQ2hpbGQobGVmdFBhbmVsKTtcbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlV2VsY29tZVBhbmVsKGNvbnRhaW5lcil7XG4gICAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlbGNvbWUuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xuXG4gICAgYWRkV2VsY29tZUltYWdlKHdlbGNvbWUpO1xuICAgIGFkZFdlbGNvbWVNZXNzYWdlKHdlbGNvbWUpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWUpO1xufTtcblxuXG5mdW5jdGlvbiBhZGRXZWxjb21lSW1hZ2UoY29udGFpbmVyKXtcblxuICAgIGNvbnN0IHdlbGNvbWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHdlbGNvbWVJbWFnZS5zcmMgPSBwcm9maWxlU1ZHO1xuICAgIHdlbGNvbWVJbWFnZS5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lSW1hZ2UnKTtcblxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWVJbWFnZSk7XG5cbn07XG5cbmZ1bmN0aW9uIGFkZFdlbGNvbWVNZXNzYWdlKGNvbnRhaW5lcil7XG5cbiAgICBjb25zdCB3ZWxjb21lTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlbGNvbWVNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWVNZXNzYWdlJyk7XG5cbiAgICB3ZWxjb21lTWVzc2FnZS50ZXh0Q29udGVudCA9ICdXZWxjb21lJztcblxuICAgIGFkZFdlbGNvbWVOYW1lKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWVNZXNzYWdlKTtcbn07XG5cbmZ1bmN0aW9uIGFkZFdlbGNvbWVOYW1lKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IHdlbGNvbWVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHdlbGNvbWVOYW1lLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWVOYW1lJyk7XG4gICAgd2VsY29tZU5hbWUudGV4dENvbnRlbnQgPSAnSm9obiBEb2UnO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWVOYW1lKTtcbn07XG4gXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdFBhbmVsKGNvbnRhaW5lcil7XG4gICAgY29uc3QgcHJvamVjdFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFBhbmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RQYW5lbCcpO1xuXG4gICAgYWRkUHJvamVjdFBhbmVsSGVhZGVyKHByb2plY3RQYW5lbCk7XG4gICAgYWRkUHJvamVjdExpc3QocHJvamVjdFBhbmVsKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0UGFuZWwpO1xuXG59O1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0UGFuZWxIZWFkZXIoY29udGFpbmVyKXtcbiAgICBjb25zdCBwcm9qZWN0UGFuZWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJvamVjdFBhbmVsSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RQYW5lbEhlYWRlcicpO1xuICAgIHByb2plY3RQYW5lbEhlYWRlci50ZXh0Q29udGVudCA9ICdNeSBQcm9qZWN0cyc7XG5cbiAgICBhZGRQcm9qZWN0UGFuZWxCdXR0b24oY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0UGFuZWxIZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0UGFuZWxCdXR0b24oY29udGFpbmVyKXtcbiAgICBjb25zdCBwcm9qZWN0UGFuZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0UGFuZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdFBhbmVsQnV0dG9uJyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFBhbmVsQnV0dG9uKTtcbn07XG5cblxuZnVuY3Rpb24gYWRkUHJvamVjdExpc3QoY29udGFpbmVyKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGlzdCcpO1xuXG4gICAgbXlQcm9qZWN0cy5nZXRQcm9qZWN0TGlzdCgpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcHJvamVjdEl0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdEl0ZW1CdXR0b24nKTtcbiAgICAgIHByb2plY3RJdGVtQnV0dG9uLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICAgICAgcHJvamVjdEl0ZW1CdXR0b24uZGF0YXNldC5pZCA9IHByb2plY3QuZ2V0SWQoKTtcbiAgICBcbiAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RJdGVtQnV0dG9uKTtcbiAgICB9KTtcbiAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcbn07XG5cblxuXG5mdW5jdGlvbiBhZGRTZXR0aW5nc09wdGlvbihjb250YWluZXIpIHtcbiAgICBjb25zdCBzZXR0aW5nc09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldHRpbmdzT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzLW9wdGlvbicpO1xuXG4gICAgY29uc3Qgc2V0dGluZ3NJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2V0dGluZ3NJY29uLmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzSWNvbicpO1xuICAgIHNldHRpbmdzSWNvbi5zcmMgPSBzZXR0aW5nc1NWRztcblxuICAgIGNvbnN0IHNldHRpbmdzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2V0dGluZ3NMYWJlbC5jbGFzc0xpc3QuYWRkKCdzZXR0aW5nc0xhYmVsJyk7XG4gICAgc2V0dGluZ3NMYWJlbC50ZXh0Q29udGVudCA9ICdTZXR0aW5ncyc7XG5cbiAgICBzZXR0aW5nc09wdGlvbi5hcHBlbmRDaGlsZChzZXR0aW5nc0ljb24pO1xuICAgIHNldHRpbmdzT3B0aW9uLmFwcGVuZENoaWxkKHNldHRpbmdzTGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXR0aW5nc09wdGlvbik7XG59OyIsImltcG9ydCB7IHRvZG9MaXN0TW9kdWxlIH0gZnJvbSBcIi4vdG9Eb0xpc3RPYmplY3RcIjtcbmltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLi90b0RvT2JqZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdE9iamVjdFwiO1xuaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gXCIuL215UHJvamVjdHNPYmplY3RcIjtcbmV4cG9ydCB7IG15UHJvamVjdHMgfTtcbmV4cG9ydCB7IGdsb2JhbFByb2plY3RDb3VudGVyLCBnbG9iYWxUb2RvQ291bnRlciB9O1xuZXhwb3J0IHsgc2V0dXBJbml0YWxQcm9qZWN0cyB9O1xuXG5sZXQgZ2xvYmFsUHJvamVjdENvdW50ZXIgPSAwO1xubGV0IGdsb2JhbFRvZG9Db3VudGVyID0gMDtcblxuXG5mdW5jdGlvbiBzZXR1cEluaXRhbFByb2plY3RzKCkge1xuXG4gICAgY29uc3QgZXhhbXBsZVRvZG9zID0gW1xuICAgICAgICB0b2RvKFwiVXBkYXRlIHdlYnNpdGUgZGVzaWduXCIsIFwiUmV2YW1wIHRoZSB3ZWJzaXRlIGxheW91dCBhbmQgbWFrZSBpdCBtb3JlIHVzZXItZnJpZW5kbHlcIiwgXCIyMDIzLTA0LTAxXCIsIFwiaGlnaFwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJPcHRpbWl6ZSBzZXJ2ZXIgcGVyZm9ybWFuY2VcIiwgXCJBbmFseXplIHNlcnZlciBsb2dzIGFuZCBvcHRpbWl6ZSBzZXJ2ZXIgc2V0dGluZ3MgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVwiLCBcIjIwMjMtMDQtMDJcIiwgXCJtZWRpdW1cIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiSW1wbGVtZW50IG5ldyBmZWF0dXJlXCIsIFwiQWRkIGEgbmV3IGZlYXR1cmUgdG8gdGhlIHdlYnNpdGUgdGhhdCBhbGxvd3MgdXNlcnMgdG8gc2F2ZSB0aGVpciBwcmVmZXJlbmNlc1wiLCBcIjIwMjMtMDQtMDNcIiwgXCJoaWdoXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIkRlYnVnIHBheW1lbnQgZ2F0ZXdheVwiLCBcIkZpeCBpc3N1ZXMgd2l0aCBwYXltZW50IGdhdGV3YXkgdGhhdCBhcmUgcHJldmVudGluZyBjdXN0b21lcnMgZnJvbSBtYWtpbmcgcHVyY2hhc2VzXCIsIFwiMjAyMy0wNC0wNFwiLCBcImhpZ2hcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiV3JpdGUgdXNlciBkb2N1bWVudGF0aW9uXCIsIFwiQ3JlYXRlIGEgdXNlciBndWlkZSB0byBoZWxwIGN1c3RvbWVycyB1c2Ugb3VyIHByb2R1Y3QgbW9yZSBlZmZlY3RpdmVseVwiLCBcIjIwMjMtMDQtMDVcIiwgXCJsb3dcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiVXBkYXRlIHByb2R1Y3Qgc3BlY2lmaWNhdGlvbnNcIiwgXCJVcGRhdGUgdGhlIHByb2R1Y3Qgc3BlY2lmaWNhdGlvbnMgZG9jdW1lbnQgdG8gcmVmbGVjdCByZWNlbnQgY2hhbmdlc1wiLCBcIjIwMjMtMDQtMDZcIiwgXCJtZWRpdW1cIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiVGVzdCB3ZWJzaXRlIG9uIGRpZmZlcmVudCBkZXZpY2VzXCIsIFwiQ2hlY2sgd2Vic2l0ZSBmdW5jdGlvbmFsaXR5IGFuZCBsYXlvdXQgb24gZGlmZmVyZW50IGRldmljZXMgdG8gZW5zdXJlIGNvbXBhdGliaWxpdHlcIiwgXCIyMDIzLTA0LTA3XCIsIFwibG93XCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIlVwZGF0ZSB3ZWJzaXRlIGNvbnRlbnRcIiwgXCJBZGQgbmV3IGNvbnRlbnQgdG8gdGhlIHdlYnNpdGUgdG8ga2VlcCBpdCBmcmVzaCBhbmQgZW5nYWdpbmcgZm9yIHVzZXJzXCIsIFwiMjAyMy0wNC0wOFwiLCBcIm1lZGl1bVwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJDcmVhdGUgbWFya2V0aW5nIGNhbXBhaWduXCIsIFwiRGV2ZWxvcCBhIG1hcmtldGluZyBjYW1wYWlnbiB0byBpbmNyZWFzZSBicmFuZCBhd2FyZW5lc3MgYW5kIGF0dHJhY3QgbmV3IGN1c3RvbWVyc1wiLCBcIjIwMjMtMDQtMDlcIiwgXCJoaWdoXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIkNvbmR1Y3QgdXNlciByZXNlYXJjaFwiLCBcIkdhdGhlciBmZWVkYmFjayBmcm9tIHVzZXJzIHRvIGltcHJvdmUgdGhlIHByb2R1Y3QgYW5kIGFkZHJlc3MgdGhlaXIgbmVlZHNcIiwgXCIyMDIzLTA0LTEwXCIsIFwibWVkaXVtXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIkltcHJvdmUgc2l0ZSBzcGVlZFwiLCBcIk9wdGltaXplIHdlYnNpdGUgcGVyZm9ybWFuY2UgdG8gaW1wcm92ZSBzaXRlIHNwZWVkIGFuZCByZWR1Y2UgcGFnZSBsb2FkIHRpbWVzXCIsIFwiMjAyMy0wNC0xMVwiLCBcImhpZ2hcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiQ3JlYXRlIHRyYWluaW5nIG1hdGVyaWFsc1wiLCBcIkRldmVsb3AgdHJhaW5pbmcgbWF0ZXJpYWxzIHRvIGhlbHAgZW1wbG95ZWVzIGxlYXJuIG5ldyBza2lsbHMgYW5kIGltcHJvdmUgcGVyZm9ybWFuY2VcIiwgXCIyMDIzLTA0LTEyXCIsIFwibG93XCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIlJlc29sdmUgY3VzdG9tZXIgY29tcGxhaW50c1wiLCBcIkFkZHJlc3MgY3VzdG9tZXIgY29tcGxhaW50cyBhbmQgcmVzb2x2ZSBpc3N1ZXMgdG8gbWFpbnRhaW4gY3VzdG9tZXIgc2F0aXNmYWN0aW9uXCIsIFwiMjAyMy0wNC0xM1wiLCBcImhpZ2hcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiSW1wcm92ZSBzZWFyY2ggZnVuY3Rpb25hbGl0eVwiLCBcIkltcHJvdmUgdGhlIHNlYXJjaCBmdW5jdGlvbmFsaXR5IG9mIHRoZSB3ZWJzaXRlIHRvIG1ha2UgaXQgZWFzaWVyIGZvciB1c2VycyB0byBmaW5kIHdoYXQgdGhleSBuZWVkXCIsIFwiMjAyMy0wNC0xNFwiLCBcIm1lZGl1bVwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJDcmVhdGUgcHJvZHVjdCByb2FkbWFwXCIsIFwiRGV2ZWxvcCBhIHJvYWRtYXAgZm9yIHRoZSBwcm9kdWN0IHRvIGd1aWRlIGZ1dHVyZSBkZXZlbG9wbWVudCBhbmQgcHJpb3JpdGl6ZSBmZWF0dXJlc1wiLCBcIjIwMjMtMDQtMTVcIiwgXCJoaWdoXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIlBlcmZvcm0gc2VjdXJpdHkgYXVkaXRcIiwgXCJDb25kdWN0IGEgc2VjdXJpdHkgYXVkaXQgb2YgdGhlIHdlYnNpdGUgdG8gaWRlbnRpZnkgdnVsbmVyYWJpbGl0aWVzIGFuZCBpbXBsZW1lbnQgZml4ZXNcIiwgXCIyMDIzLTA0LTE2XCIsIFwiaGlnaFwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJJbXByb3ZlIHVzZXIgaW50ZXJmYWNlXCIsIFwiUmVkZXNpZ24gdGhlIHVzZXIgaW50ZXJmYWNlIHRvIGltcHJvdmUgdXNlciBleHBlcmllbmNlIGFuZCBtYWtlIHRoZSB3ZWJzaXRlIG1vcmUgaW50dWl0aXZlIHRvIHVzZVwiLCBcIjIwMjMtMDQtMTdcIiwgXCJtZWRpdW1cIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgIF07XG5cblxuICAgIGNvbnN0IHRvZG9zU2V0MSA9IGV4YW1wbGVUb2Rvcy5zbGljZSgwLCA2KTtcbiAgICBjb25zdCB0b2Rvc1NldDIgPSBleGFtcGxlVG9kb3Muc2xpY2UoNiwgMTEpO1xuICAgIGNvbnN0IHRvZG9zU2V0MyA9IGV4YW1wbGVUb2Rvcy5zbGljZSgxMSk7XG4gIFxuICAgIHNldHVwRXhhbXBsZVByb2plY3QoXCJXZWJzaXRlIFJlZGVzaWduIFByb2plY3RcIiwgdG9kb3NTZXQxKTtcbiAgICBzZXR1cEV4YW1wbGVQcm9qZWN0KFwiU2VydmVyIE9wdGltaXphdGlvbiBQcm9qZWN0XCIsIHRvZG9zU2V0Mik7XG4gICAgc2V0dXBFeGFtcGxlUHJvamVjdChcIlByb2R1Y3QgRGV2ZWxvcG1lbnQgUHJvamVjdFwiLCB0b2Rvc1NldDMpO1xuXG5cbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHNldHVwRGVmYXVsdFByb2plY3QoZXhhbXBsZVRvZG9zKTtcblxuICAgIHJldHVybiBkZWZhdWx0UHJvamVjdDtcbiAgICBcbn07XG5cblxuXG5mdW5jdGlvbiBzZXR1cEV4YW1wbGVQcm9qZWN0KHRpdGxlLCB0b2RvU2V0KXtcblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gdG9kb0xpc3RNb2R1bGUoKTtcbiAgICB0b2RvTGlzdC5zZXRUb2Rvcyh0b2RvU2V0KTtcblxuICAgIGNvbnN0IHRoZVByb2plY3QgPSBwcm9qZWN0KHRpdGxlLCBnbG9iYWxQcm9qZWN0Q291bnRlcisrKTtcbiAgICB0aGVQcm9qZWN0LnNldFRvZG9MaXN0KHRvZG9MaXN0KTtcblxuICAgIG15UHJvamVjdHMuYWRkUHJvamVjdCh0aGVQcm9qZWN0KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiUHJvamVjdCBEZXRhaWxzOlwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIlRpdGxlOiBcIiwgdGhlUHJvamVjdC5nZXRUaXRsZSgpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIklkOiBcIiwgdGhlUHJvamVjdC5nZXRJZCgpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIlRvZG8gTGlzdDogXCIsIHRoZVByb2plY3QuZ2V0VG9kb0xpc3QoKSk7XG5cbn07XG5cblxuZnVuY3Rpb24gc2V0dXBEZWZhdWx0UHJvamVjdCh0b2RvU2V0KXtcblxuICAgIGNvbnN0IGRlZmF1bHRMaXN0ID0gdG9kb0xpc3RNb2R1bGUoKTtcbiAgICBkZWZhdWx0TGlzdC5zZXRUb2Rvcyh0b2RvU2V0KTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdChcIk15IFRvIERvc1wiLCBnbG9iYWxQcm9qZWN0Q291bnRlcisrKTtcblxuICAgIGRlZmF1bHRQcm9qZWN0LnNldFRvZG9MaXN0KGRlZmF1bHRMaXN0KTtcblxuICAgIHJldHVybiBkZWZhdWx0UHJvamVjdDtcbn07XG5cbi8vIGZ1bmN0aW9uIGFkZFRvZG9Ub1Byb2plY3QodG9kbywgcHJvamVjdCl7XG4vLyAgICAgcHJvamVjdC5nZXRUb2RvTGlzdCgpLmFkZFRvZG8odG9kbyk7XG4vLyB9O1xuXG4vLyBmdW5jdGlvbiByZW1vdmVUb2RvZnJvbVByb2plY3QodG9kbywgcHJvamVjdCl7XG4vLyAgICAgcHJvamVjdC5nZXRUb2RvTGlzdCgpLnJlbW92ZVRvZG8odG9kbyk7XG4vLyB9O1xuXG4iLCJleHBvcnQge215UHJvamVjdHN9O1xuXG5jb25zdCBteVByb2plY3RzID0gKCgpID0+IHtcbiAgbGV0IHByb2plY3RMaXN0ID0gW107XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RMaXN0LmluZGV4T2YocHJvamVjdCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgcHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RMaXN0O1xuICB9O1xuXG4gIGNvbnN0IHNldFByb2plY3RMaXN0ID0gKG5ld1Byb2plY3RMaXN0KSA9PiB7XG4gICAgcHJvamVjdExpc3QgPSBuZXdQcm9qZWN0TGlzdDtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0QnlJZCA9IChpZCkgPT4ge1xuICAgIHJldHVybiBnZXRQcm9qZWN0TGlzdCgpLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmdldElkKCkgPT09IGlkKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0TGlzdCxcbiAgICBzZXRQcm9qZWN0TGlzdCxcbiAgICBnZXRQcm9qZWN0QnlJZCxcbiAgfTtcbn0pKCk7XG4gICIsImV4cG9ydCB7cHJvamVjdH07XG5pbXBvcnQgeyB0b2RvTGlzdE1vZHVsZSB9IGZyb20gXCIuL3RvRG9MaXN0T2JqZWN0XCI7XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUsIGlkKSA9PiB7XG4gIGxldCB0b2RvTGlzdCA9IHRvZG9MaXN0TW9kdWxlKCk7XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHRpdGxlID0gbmV3VGl0bGU7XG5cbiAgY29uc3QgZ2V0VG9kb0xpc3QgPSAoKSA9PiB0b2RvTGlzdDtcbiAgY29uc3Qgc2V0VG9kb0xpc3QgPSAobmV3VG9kb0xpc3QpID0+IHRvZG9MaXN0ID0gbmV3VG9kb0xpc3Q7XG5cbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZDtcblxuICByZXR1cm4geyBnZXRUaXRsZSwgc2V0VGl0bGUsIGdldFRvZG9MaXN0LCBzZXRUb2RvTGlzdCwgZ2V0SWQgfTtcbn07XG5cbiAgXG5cblxuIiwiZXhwb3J0IHt0b2RvTGlzdE1vZHVsZX07XG5cbmNvbnN0IHRvZG9MaXN0TW9kdWxlID0gKCkgPT4ge1xuICAgIGxldCB0b2RvcyA9IFtdO1xuICBcbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgIHRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuICBcbiAgICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0b2RvcztcbiAgICB9XG4gIFxuICAgIGNvbnN0IHNldFRvZG9zID0gKG5ld1RvZG9zKSA9PiB7XG4gICAgICB0b2RvcyA9IG5ld1RvZG9zO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIHsgYWRkVG9kbywgcmVtb3ZlVG9kbywgZ2V0VG9kb3MsIHNldFRvZG9zIH07XG4gIH07IiwiZXhwb3J0IHt0b2RvfTtcblxuY29uc3QgdG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlLCBpZCkgPT4ge1xuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuICBcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHRpdGxlID0gbmV3VGl0bGU7XG4gIFxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4gZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgXG4gIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICBcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gIFxuICBjb25zdCBnZXRJc0NvbXBsZXRlID0gKCkgPT4gaXNDb21wbGV0ZTtcbiAgY29uc3Qgc2V0SXNDb21wbGV0ZSA9IChuZXdJc0NvbXBsZXRlKSA9PiBpc0NvbXBsZXRlID0gbmV3SXNDb21wbGV0ZTtcbiAgXG4gIHJldHVybiB7XG4gICAgZ2V0SWQsXG4gICAgZ2V0VGl0bGUsXG4gICAgc2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0RHVlRGF0ZSxcbiAgICBzZXREdWVEYXRlLFxuICAgIGdldFByaW9yaXR5LFxuICAgIHNldFByaW9yaXR5LFxuICAgIGdldElzQ29tcGxldGUsXG4gICAgc2V0SXNDb21wbGV0ZVxuICB9O1xufTtcblxuICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBnZW5lcmF0ZVNpZGViYXIgfSBmcm9tIFwiLi9HZW5lcmF0ZURPTS9zaWRlYmFyXCI7XG5pbXBvcnQgeyBzZXR1cEluaXRhbFByb2plY3RzIH0gZnJvbSBcIi4vYXBwTG9naWMvaW5pdGlhbFNldHVwXCI7XG5pbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSBcIi4vYXBwTG9naWMvaW5pdGlhbFNldHVwXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU1haW5Db250ZW50IH0gZnJvbSBcIi4vR2VuZXJhdGVET00vbWFpbkNvbnRlbnRcIjtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBzZXR1cEluaXRhbFByb2plY3RzKCk7XG5cbmdlbmVyYXRlU2lkZWJhcigpO1xuXG5nZW5lcmF0ZU1haW5Db250ZW50KGRlZmF1bHRQcm9qZWN0KTtcblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIGxvYWRpbmcgYSBwcm9qZWN0IGZyb20gc2lkZWJhciBieSBjbGlja2luZyBvbiBpdFxuXG5jb25zdCBwcm9qZWN0SXRlbUJ1dHRvbkdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RJdGVtQnV0dG9uJyk7XG5cbnByb2plY3RJdGVtQnV0dG9uR3JvdXAuZm9yRWFjaChwcm9qZWN0SXRlbUJ1dHRvbiA9PiB7XG4gICAgcHJvamVjdEl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgcmVtb3ZlQ3VycmVudFBhZ2UoKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0SUQgPSBwYXJzZUludChwcm9qZWN0SXRlbUJ1dHRvbi5kYXRhc2V0LmlkKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdGVkID0gbXlQcm9qZWN0cy5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SUQpO1xuXG4gICAgICAgIGdlbmVyYXRlTWFpbkNvbnRlbnQocHJvamVjdFNlbGVjdGVkKTtcbiAgICB9KTtcbn0pO1xuXG4vLyBldmVudCBsaXN0ZW5lciBmb3IgYWRkaW5nIGEgcHJvamVjdCBmcm9tIHNpZGViYXJcblxuXG5cblxuXG4vLyBldmVudCBsaXN0ZW5lciBmb3IgYWRkaW5nIGEgbmV3IHRvZG8gaXRlbSBmcm9tIHNpZGUgYmFyLlxuXG5cblxuXG4vLyBldmVudCBsaXN0ZW5lciBmb3IgY2xpY2tpbmcgb24gdGhlIHRvZG8gaXRlbS5cblxuXG5cblxuZnVuY3Rpb24gcmVtb3ZlQ3VycmVudFBhZ2UoKXtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lciA+IDpub3QoLmxlZnRQYW5lbCknKTtcbiAgICBodG1sLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH0pO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=