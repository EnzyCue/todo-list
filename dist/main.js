/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 20px;\n    font-weight: 500;\n    overflow-x: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    background-color: hsl(201deg 6% 96%);\n}\n\n.container {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 25rem 1fr;\n    background: hsl(201deg 6% 96%);\n}\n\n.leftPanel {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n    border-right: 3px solid rgb(0, 0, 0);\n    font-size: 30px;\n    font-weight: 600;\n    position: fixed;\n    width: 25rem;\n}\n\n.leftPanel .welcome {\n    display: flex;\n    gap: 1rem;\n    \n    margin-top: 4rem;\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.leftPanel .welcomeMessage{\n    font-size: 30px;\n    font-weight: 400;\n}\n\n.leftPanel img {\n    width: 40px;\n    height: 40px;\n}\n\n.leftPanel > div {\n    margin-left: 2rem;\n}\n\n\n.leftPanel .welcome img {\n    width: 80px;\n    height: 80px;\n}\n\n.leftPanel .projectPanel {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.leftPanel .projectPanelHeaderButton {\n    border: none;\n    border-radius: 0.7rem;\n    background: hsl(201deg 6% 96%);\n    color: black;\n    padding: 1rem 1.5rem;\n    text-transform: capitalize;\n    font-size: 30px;\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n.leftPanel .projectPanel .addProjectButton{\n    border: hsl(201deg 6% 96%);\n    border-radius: 10px;\n    width: 30px;\n    height: 30px;\n    cursor: pointer;\n    border-radius: 150px ;\n}\n.leftPanel .projectPanel .addProjectButton img{\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    width: 100%;\n    height: 100%;\n    border-radius: 200px ;\n}\n.leftPanel .projectList{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: 500px;\n    padding-bottom: 1px;\n    padding-top: 1px;\n}\n\n.leftPanel .projectList button{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 3px solid rgb(180, 180,);\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-radius: 0.7rem;\n    margin-top: 1rem;\n    margin-right: 2rem;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    color: black;\n    width: 20rem;\n    height: min-content;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    text-transform: capitalize;\n    font-weight: 600;\n    transition: transform 0.2s ease-in-out;\n    text-align: center;\n    margin-left: 2rem;\n    word-break: break-all;\n}\n\n.leftPanel .projectList button:hover{\n    transform: scale(1.02);\n}\n\n\n\n.leftPanel .settingsOption{\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    margin-left: 3rem;\n    margin-top: 0.5rem;\n}\n\n\n\n.mainContent{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-column: 2 / 3;\n    min-width: 50rem;\n}\n.mainContent .pageHeading {\n    font-size: 50px;\n    font-weight: 900;\n    color: #fff;\n    background: linear-gradient(to bottom right, hsl(201deg 100% 50%), hsl(153deg 91% 58%));\n    width: 100%;\n    height: 15rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 3px solid rgb(0, 0, 0);\n    text-align: center;\n    overflow: hidden;\n    word-break: break-all;\n}\n\n.newTodoButton{\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 0.7rem;\n    margin-top: 1rem;\n    align-self: flex-end;\n    margin-right: 2rem;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    color: black;\n    width: 300px;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    text-transform: capitalize;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.todoPanel {\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    gap: 1rem;\n    width: 95%;\n    margin: 1rem 0 2rem 0;\n}\n.todoItem{\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    width: 100%;\n    justify-content: space-between;\n    height: 100%;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    background-color: #4dbdfa00;\n    border: none;\n    cursor: pointer;\n    transition: background-color 0.2s ease-in-out;\n    border-radius: 0.7rem;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.todoItem:hover {\n    background-color: hsl(201deg 6% 96%);\n    color: black;\n\n}\n\n.todoContainer{\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    min-width: 40rem;\n    background-color: #000000;\n}\n\n.priorityIconContainer{\n    display: flex;\n    justify-content: space-around;\n    gap: 3px;\n}\n.priorityIconContainer > img{\n    width: 20px;\n}\n\n.completeButton {\n    border-left: none;\n    display: flex;\n    align-items: center;\n    border-radius: 0.7rem;\n    border: none;\n    padding: 1rem 0.8rem;\n    background-color: #000000;\n}\n \n\n.completeButton:hover {\n    background-color: black;\n    color: black;\n\n}\n\n.todoDescription {\n    padding: 0;\n    font-size: 18px;\n    font-weight: 600;\n    text-align: center;\n    letter-spacing: 0.1em;\n    color: white;\n    background-color: #3b3b3b;\n    border: none;\n    width: 90%;\n    border-radius: 0.7rem;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    margin-top: -1.2rem;\n    overflow-y: hidden;\n    max-height: 0;\n    transition: max-height 0.1s ease-out, padding 0.1s ease-in, border 0.1s ease-in;\n\n}\n.todoDescription.show{\n    max-height: 500px;\n    overflow-y: auto;\n    padding: 2rem 1.5rem;\n    border: 3px solid black ;\n    /* transition: max-height 0.1s ease-in, padding 0.1s ease-in, border 0.1s ease-in; */\n}\n\n.newProjectForm{\n    grid-template-rows: 1fr 2fr 1fr;\n    grid-template-columns: 1fr 4fr;\n    row-gap: 1rem;\n    column-gap:1px; \n}\n\n.newTodoForm{\n    grid-template-rows: 1fr 1fr 4fr 1fr 1fr 1fr 1fr;\n    grid-template-columns: 1fr 4fr;\n    top: 8rem;\n}\n\nform {\n    box-sizing: border-box;\n    background-color: #000000;\n    border-radius: 1rem;\n    width: 50rem;\n    display: grid;\n    row-gap: 1rem;\n    column-gap:1px; \n    grid-template-rows: 1fr 2fr  1fr;\n    grid-template-columns: 1fr 4fr;\n    padding-left: 2rem;\n    padding-right: 0;\n    padding-bottom: 2rem;\n    padding-top: 1rem;\n    border: 5px solid #22d3ee;\n    grid-auto-flow: row;\n    justify-items: center;\n    align-items: center;\n    max-width: 60rem;\n    position: absolute;\n    top: 10rem;\n    color: white;\n    border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1;\n    position: fixed;\n}\n.formHeader{\n    display: grid;\n    grid-template-columns: 1fr 5rem;\n    justify-content: center;\n    grid-column: 1/ -1;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n}\n.formHeader .cancelButton{\n    cursor: pointer;\n    background: none;\n    border: none;\n    padding: 0;\n}\n.formHeader .cancelButton:hover{\n    transform: scale(1.03);\n    cursor: pointer;\n}\n.formHeader > h3{\n    justify-self: center;\n    margin-left: 6rem;\n}\n\nform > h3{\n    font-size: 30px;\n    grid-column: 1 / -1;\n}\nform > label{\n    grid-column: 1 / 2;\n}\nlabel{\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n}\n\ninput, select, textarea {\n    background-color: #FFFFFF;\n    border: 2px solid #D6D9DC;\n    border-radius: 3px;\n    width: 90%;\n    padding: 7px;\n    font-size: 14px;\n    box-sizing: border-box;\n    outline-style: none;\n    box-shadow: none;\n    justify-self: start;\n    border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1;\n}\ninput:focus {\n    border: 0.1rem solid #4997eb;\n    box-shadow: 0 9px 10px -10px #888;\n}\ninput:invalid {\n    border: 0.1rem solid red;\n}\ninput[type='text'] {\n    max-width: 40rem;\n}\ninput[type='date'] {\n    max-width: 40rem;\n}\ninput[type='checkbox'] {\n    width: 4rem;\n    height: 2rem;\n    border: 2px solid #22d3ee;\n}\n\n\nform button{\n    width: 100px;\n    height: 60px;\n    border-radius: 20px;\n    background: #0f172a;\n    color: white;\n    border: 5px solid transparent;\n    font-size: 20px;\n    font-weight: 900;\n    cursor: pointer;\n    border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1;\n}\nno\n\n\n.resetButton {\n    justify-self: end;\n    margin-right: 1rem;\n}\n\n.priorityLabel{\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n}\n.prioritySelection {\n    display: flex;\n    gap: 3rem;\n    \n}\n.prioritySelection  div{\n    display: flex;\n    gap: 1rem;\n    /* border: 2px solid white;\n    border-top: 2px solid white;\n    border-right: 2px solid white; */\n    padding: 0.5rem;\n}\n.prioritySelection .priorityIconContainer{\n    border: 2px solid white;\n    border-radius:15px;\n    padding: 0.5rem 1rem;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 20px;\n    font-weight: 500;\n    overflow-x: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    background-color: hsl(201deg 6% 96%);\n}\n\n.container {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 25rem 1fr;\n    background: hsl(201deg 6% 96%);\n}\n\n.leftPanel {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n    border-right: 3px solid rgb(0, 0, 0);\n    font-size: 30px;\n    font-weight: 600;\n    position: fixed;\n    width: 25rem;\n}\n\n.leftPanel .welcome {\n    display: flex;\n    gap: 1rem;\n    \n    margin-top: 4rem;\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.leftPanel .welcomeMessage{\n    font-size: 30px;\n    font-weight: 400;\n}\n\n.leftPanel img {\n    width: 40px;\n    height: 40px;\n}\n\n.leftPanel > div {\n    margin-left: 2rem;\n}\n\n\n.leftPanel .welcome img {\n    width: 80px;\n    height: 80px;\n}\n\n.leftPanel .projectPanel {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.leftPanel .projectPanelHeaderButton {\n    border: none;\n    border-radius: 0.7rem;\n    background: hsl(201deg 6% 96%);\n    color: black;\n    padding: 1rem 1.5rem;\n    text-transform: capitalize;\n    font-size: 30px;\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n.leftPanel .projectPanel .addProjectButton{\n    border: hsl(201deg 6% 96%);\n    border-radius: 10px;\n    width: 30px;\n    height: 30px;\n    cursor: pointer;\n    border-radius: 150px ;\n}\n.leftPanel .projectPanel .addProjectButton img{\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    width: 100%;\n    height: 100%;\n    border-radius: 200px ;\n}\n.leftPanel .projectList{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: 500px;\n    padding-bottom: 1px;\n    padding-top: 1px;\n}\n\n.leftPanel .projectList button{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 3px solid rgb(180, 180,);\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-radius: 0.7rem;\n    margin-top: 1rem;\n    margin-right: 2rem;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    color: black;\n    width: 20rem;\n    height: min-content;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    text-transform: capitalize;\n    font-weight: 600;\n    transition: transform 0.2s ease-in-out;\n    text-align: center;\n    margin-left: 2rem;\n    word-break: break-all;\n}\n\n.leftPanel .projectList button:hover{\n    transform: scale(1.02);\n}\n\n\n\n.leftPanel .settingsOption{\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    margin-left: 3rem;\n    margin-top: 0.5rem;\n}\n\n\n\n.mainContent{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-column: 2 / 3;\n    min-width: 50rem;\n}\n.mainContent .pageHeading {\n    font-size: 50px;\n    font-weight: 900;\n    color: #fff;\n    background: linear-gradient(to bottom right, hsl(201deg 100% 50%), hsl(153deg 91% 58%));\n    width: 100%;\n    height: 15rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 3px solid rgb(0, 0, 0);\n    text-align: center;\n    overflow: hidden;\n    word-break: break-all;\n}\n\n.newTodoButton{\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 0.7rem;\n    margin-top: 1rem;\n    align-self: flex-end;\n    margin-right: 2rem;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    color: black;\n    width: 300px;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    text-transform: capitalize;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.todoPanel {\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    gap: 1rem;\n    width: 95%;\n    margin: 1rem 0 2rem 0;\n}\n.todoItem{\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    width: 100%;\n    justify-content: space-between;\n    height: 100%;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    background-color: #4dbdfa00;\n    border: none;\n    cursor: pointer;\n    transition: background-color 0.2s ease-in-out;\n    border-radius: 0.7rem;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.todoItem:hover {\n    background-color: hsl(201deg 6% 96%);\n    color: black;\n\n}\n\n.todoContainer{\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    min-width: 40rem;\n    background-color: #000000;\n}\n\n.priorityIconContainer{\n    display: flex;\n    justify-content: space-around;\n    gap: 3px;\n}\n.priorityIconContainer > img{\n    width: 20px;\n}\n\n.completeButton {\n    border-left: none;\n    display: flex;\n    align-items: center;\n    border-radius: 0.7rem;\n    border: none;\n    padding: 1rem 0.8rem;\n    background-color: #000000;\n}\n \n\n.completeButton:hover {\n    background-color: black;\n    color: black;\n\n}\n\n.todoDescription {\n    padding: 0;\n    font-size: 18px;\n    font-weight: 600;\n    text-align: center;\n    letter-spacing: 0.1em;\n    color: white;\n    background-color: #3b3b3b;\n    border: none;\n    width: 90%;\n    border-radius: 0.7rem;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    margin-top: -1.2rem;\n    overflow-y: hidden;\n    max-height: 0;\n    transition: max-height 0.1s ease-out, padding 0.1s ease-in, border 0.1s ease-in;\n\n}\n.todoDescription.show{\n    max-height: 500px;\n    overflow-y: auto;\n    padding: 2rem 1.5rem;\n    border: 3px solid black ;\n    /* transition: max-height 0.1s ease-in, padding 0.1s ease-in, border 0.1s ease-in; */\n}\n\n.newProjectForm{\n    grid-template-rows: 1fr 2fr 1fr;\n    grid-template-columns: 1fr 4fr;\n    row-gap: 1rem;\n    column-gap:1px; \n}\n\n.newTodoForm{\n    grid-template-rows: 1fr 1fr 4fr 1fr 1fr 1fr 1fr;\n    grid-template-columns: 1fr 4fr;\n    top: 8rem;\n}\n\nform {\n    box-sizing: border-box;\n    background-color: #000000;\n    border-radius: 1rem;\n    width: 50rem;\n    display: grid;\n    row-gap: 1rem;\n    column-gap:1px; \n    grid-template-rows: 1fr 2fr  1fr;\n    grid-template-columns: 1fr 4fr;\n    padding-left: 2rem;\n    padding-right: 0;\n    padding-bottom: 2rem;\n    padding-top: 1rem;\n    border: 5px solid #22d3ee;\n    grid-auto-flow: row;\n    justify-items: center;\n    align-items: center;\n    max-width: 60rem;\n    position: absolute;\n    top: 10rem;\n    color: white;\n    border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1;\n    position: fixed;\n}\n.formHeader{\n    display: grid;\n    grid-template-columns: 1fr 5rem;\n    justify-content: center;\n    grid-column: 1/ -1;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n}\n.formHeader .cancelButton{\n    cursor: pointer;\n    background: none;\n    border: none;\n    padding: 0;\n}\n.formHeader .cancelButton:hover{\n    transform: scale(1.03);\n    cursor: pointer;\n}\n.formHeader > h3{\n    justify-self: center;\n    margin-left: 6rem;\n}\n\nform > h3{\n    font-size: 30px;\n    grid-column: 1 / -1;\n}\nform > label{\n    grid-column: 1 / 2;\n}\nlabel{\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n}\n\ninput, select, textarea {\n    background-color: #FFFFFF;\n    border: 2px solid #D6D9DC;\n    border-radius: 3px;\n    width: 90%;\n    padding: 7px;\n    font-size: 14px;\n    box-sizing: border-box;\n    outline-style: none;\n    box-shadow: none;\n    justify-self: start;\n    border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1;\n}\ninput:focus {\n    border: 0.1rem solid #4997eb;\n    box-shadow: 0 9px 10px -10px #888;\n}\ninput:invalid {\n    border: 0.1rem solid red;\n}\ninput[type='text'] {\n    max-width: 40rem;\n}\ninput[type='date'] {\n    max-width: 40rem;\n}\ninput[type='checkbox'] {\n    width: 4rem;\n    height: 2rem;\n    border: 2px solid #22d3ee;\n}\n\n\nform button{\n    width: 100px;\n    height: 60px;\n    border-radius: 20px;\n    background: #0f172a;\n    color: white;\n    border: 5px solid transparent;\n    font-size: 20px;\n    font-weight: 900;\n    cursor: pointer;\n    border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1;\n}\nno\n\n\n.resetButton {\n    justify-self: end;\n    margin-right: 1rem;\n}\n\n.priorityLabel{\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n}\n.prioritySelection {\n    display: flex;\n    gap: 3rem;\n    \n}\n.prioritySelection  div{\n    display: flex;\n    gap: 1rem;\n    /* border: 2px solid white;\n    border-top: 2px solid white;\n    border-right: 2px solid white; */\n    padding: 0.5rem;\n}\n.prioritySelection .priorityIconContainer{\n    border: 2px solid white;\n    border-radius:15px;\n    padding: 0.5rem 1rem;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/GenerateDOM/createNewProjectForm.js":
/*!*************************************************!*\
  !*** ./src/GenerateDOM/createNewProjectForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateProjectFormEventListeners": () => (/* binding */ activateProjectFormEventListeners),
/* harmony export */   "makeProjectFormVisible": () => (/* binding */ makeProjectFormVisible)
/* harmony export */ });
/* harmony import */ var _appLogic_projectObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appLogic/projectObject */ "./src/appLogic/projectObject.js");
/* harmony import */ var _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appLogic/initialSetup */ "./src/appLogic/initialSetup.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/GenerateDOM/sidebar.js");





const projectForm = document.querySelector('.newProjectForm');

const html = document.querySelector('.container');


function makeProjectFormVisible(){
    projectForm.style.visibility = 'visible';
    html.style.filter = 'blur(5px)';
};

function activateProjectFormEventListeners(){
    const projectForm = document.querySelector('.newProjectForm');
  
    const cancelButton = document.querySelector('.newProjectForm .cancelButton');
  
  
    cancelButton.addEventListener('click', () => {
        projectForm.reset();
        projectForm.style.visibility = 'hidden';
        html.style.filter = 'none';
    });
  
  
    const submitButton = document.querySelector('.newProjectForm .submitButton');
  
    submitButton.addEventListener('click', () => {
        const projectTitle= document.querySelector('#projectTitle').value;
  
        console.log('we in');
  
        console.log(projectTitle);
        const newProject = (0,_appLogic_projectObject__WEBPACK_IMPORTED_MODULE_0__.project)(projectTitle, _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.globalProjectCounter);
        (0,_appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.incrementProjectCounter)();
  
        _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.myProjects.addProject(newProject);
  
        projectForm.reset();
        projectForm.style.visibility = 'hidden';
        html.style.filter = 'none';
  
        (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.addProjectToSidebar)(newProject);
    
    });
};




/***/ }),

/***/ "./src/GenerateDOM/createNewTodoForm.js":
/*!**********************************************!*\
  !*** ./src/GenerateDOM/createNewTodoForm.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateTodoFormEventListeners": () => (/* binding */ activateTodoFormEventListeners),
/* harmony export */   "makeTodoFormVisible": () => (/* binding */ makeTodoFormVisible)
/* harmony export */ });
/* harmony import */ var _appLogic_toDoObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appLogic/toDoObject */ "./src/appLogic/toDoObject.js");
/* harmony import */ var _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appLogic/initialSetup */ "./src/appLogic/initialSetup.js");
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainContent */ "./src/GenerateDOM/mainContent.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./src/index.js");






const todoForm = document.querySelector('.newTodoForm');
const html = document.querySelector('.container');

function makeTodoFormVisible() {
  todoForm.style.visibility = 'visible';
  html.style.filter = 'blur(5px)';
}

function activateTodoFormEventListeners() {

    
    const todoForm = document.querySelector('.newTodoForm');
    const cancelButton = document.querySelector('.newTodoForm .cancelButton');
    const submitButton = document.querySelector('.newTodoForm .submitButton');

    const todoTitleInput = document.querySelector('#todoTitle');
    const todoDescriptionInput = document.querySelector('#todoDescription');
    const todoDueDateInput = document.querySelector('#todoDueDate');
    const todoPriorityInput = todoForm.elements.priority;
    const projectSelectInput = document.querySelector('#projectSelect');


    
    cancelButton.addEventListener('click', () => {
      todoForm.reset();
      todoForm.style.visibility = 'hidden';
      html.style.filter = 'none';
    });
    

    
    submitButton.addEventListener('click', () => {
      const todoTitle = todoTitleInput.value;
      const todoDescription = todoDescriptionInput.value;
      const todoDueDate = todoDueDateInput.value;
      const todoPriority = radioButtonChecker(todoPriorityInput);
    
      console.log('we in');
      console.log(todoTitle, todoDueDate, todoPriority);
    
      const newTodo = (0,_appLogic_toDoObject__WEBPACK_IMPORTED_MODULE_0__.todo)(
        todoTitle,
        todoDescription,
        todoDueDate,
        todoPriority,
        false,
        _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.globalTodoCounter
      );
      (0,_appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.incrementTodoCounter)();
    
      const selectedProjectId = projectSelectInput.value;
      console.log(selectedProjectId);
    
      const selectedProject = _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.myProjects.getProjectById(parseInt(selectedProjectId));
      selectedProject.getTodoList().addTodo(newTodo);
      _index__WEBPACK_IMPORTED_MODULE_3__.defaultProject.getTodoList().addTodo(newTodo);
    
      (0,_mainContent__WEBPACK_IMPORTED_MODULE_2__.displayNewTodo)(newTodo);
    
      todoForm.reset();
      todoForm.style.visibility = 'hidden';
      html.style.filter = 'none';
    });
    
    // loads today's date into date form control
    document.querySelector('input[type="date"]').value = new Date().toISOString().split('T')[0];
    //  loads current projects into selection form control
    projectSelectionFiller();

};

function projectSelectionFiller(){
    const projectSelect = document.querySelector('#projectSelect');
    const projectList = [];
    _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.myProjects.getProjectList().forEach(project => {
        projectList.push({id: project.getId(), title: project.getTitle()})
    });

    for (let i = 0; i < projectList.length; i++) {
        const option = document.createElement('option');
        option.value = projectList[i].id;
        option.textContent = projectList[i].title;
        projectSelect.appendChild(option);
    };
};


function radioButtonChecker(radios){
    let selectedValue;

    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedValue = radios[i].value;
        break;
      }
    }
    return selectedValue;
};

/***/ }),

/***/ "./src/GenerateDOM/mainContent.js":
/*!****************************************!*\
  !*** ./src/GenerateDOM/mainContent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayNewTodo": () => (/* binding */ displayNewTodo),
/* harmony export */   "generateMainContent": () => (/* binding */ generateMainContent)
/* harmony export */ });
/* harmony import */ var _svg_prioritySVGHigh_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg/prioritySVGHigh.png */ "./src/svg/prioritySVGHigh.png");
/* harmony import */ var _svg_progressIconComplete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/progressIconComplete.png */ "./src/svg/progressIconComplete.png");
/* harmony import */ var _svg_progressIconUnfinished_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/progressIconUnfinished.png */ "./src/svg/progressIconUnfinished.png");
/* harmony import */ var _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appLogic/initialSetup */ "./src/appLogic/initialSetup.js");
/* harmony import */ var _createNewTodoForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createNewTodoForm */ "./src/GenerateDOM/createNewTodoForm.js");











const html = document.querySelector('.container');

function displayNewTodo(todo){
    const todoPanel = document.querySelector('.todoPanel');

    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todoContainer');
    
    // adding the left info component of the todo item.
    addTodoItem(todoContainer, todo);

    // adding the right complete button.
    addTodoCompleteButton(todoContainer, todo);

    addTodoDescription(todoPanel, todo);

    todoPanel.appendChild(todoContainer);
};

function generateMainContent(project){
    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    generatePageHeading(mainContent, project.getTitle());

    generateCreateNewItemButton(mainContent);

    generateTodoPanel(mainContent, project.getTodoList());

    html.appendChild(mainContent);
};



function generatePageHeading(container, title){
    const pageHeading = document.createElement('div');
    pageHeading.classList.add('pageHeading');

    pageHeading.textContent = title;

    container.appendChild(pageHeading);
};



function generateCreateNewItemButton(container){
    const newItemButton = document.createElement('button'); 

    newItemButton.classList.add('newTodoButton');

    newItemButton.textContent = 'Add new item';
    container.appendChild(newItemButton);

    activateCreateNewItemButtonListener(newItemButton);
};

function activateCreateNewItemButtonListener(newItemButton){
    newItemButton.addEventListener('click', () => {
        (0,_createNewTodoForm__WEBPACK_IMPORTED_MODULE_4__.makeTodoFormVisible)();
    });
};

function generateTodoPanel(container, todoList) {
    const todoPanel = document.createElement('div');
    todoPanel.classList.add('todoPanel');

    todoList.getTodos().forEach(todo => {
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todoContainer');
        
        // adding the left info component of the todo item.
        addTodoItem(todoContainer, todo);

        // adding the right complete button.
        addTodoCompleteButton(todoContainer, todo);

        addTodoDescription(todoPanel, todo);

        todoPanel.appendChild(todoContainer);
    });

    container.appendChild(todoPanel);
};

function addTodoDescription(container, todo){
    const todoDescription = document.createElement('div');
    todoDescription.classList.add('todoDescription');
    todoDescription.textContent = todo.getDescription();
    // todoDescription.style.display = 'none';

    container.appendChild(todoDescription);
};

function addTodoItem(container, todo) {
    const todoButton = document.createElement('button');
    todoButton.classList.add('todoItem');


    const todoID = todo.getId();
    const parentProject = _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_3__.myProjects.getProjectByTodoId(todoID);
    const projectID = parentProject.getId();


    todoButton.dataset.todoid = todoID;
    todoButton.dataset.projectid = projectID;

    addPriorityIcon(todo.getPriority());
    addTodoTitle(todo.getTitle());
    addTodoDate(todo.getDueDate());


    container.appendChild(todoButton);

    function addTodoDate(date) {
        const todoDate = document.createElement('span');
        todoDate.classList.add('todoDate');
        todoDate.textContent = date;
        todoButton.appendChild(todoDate);
    };
    
    function addTodoTitle(title) {
        const todoTitle = document.createElement('span');
        todoTitle.classList.add('todoTitle');
        todoTitle.textContent = title;
        todoButton.appendChild(todoTitle);
    };

    function addPriorityIcon(priority) {
  
        switch (priority) {
          case 'high':
            todoButton.appendChild(addIcons(3));
            break;
      
          case 'medium':
            todoButton.appendChild(addIcons(2));
            break;
      
          case 'low':
            todoButton.appendChild(addIcons(1));
            break;
        };
    
        function addIcons (count) {
            const iconContainer = document.createElement('div');
            iconContainer.classList.add('priorityIconContainer');
          
            for (let i = 0; i < count; i++) {
              const svgIcon = document.createElement('img');
              svgIcon.classList.add('priorityIcon');
              svgIcon.src = _svg_prioritySVGHigh_png__WEBPACK_IMPORTED_MODULE_0__;
              iconContainer.appendChild(svgIcon);
            };
    
            return iconContainer;
        };
    };

    activateTodoButtonListener(todoButton);
};



function addTodoCompleteButton(container, todo){

    const completeButton = document.createElement('button'); 
    completeButton.classList.add('completeButton');

    const todoID = todo.getId();
    const parentProject = _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_3__.myProjects.getProjectByTodoId(todoID);
    const projectID = parentProject.getId();
    
    completeButton.dataset.todoid = todoID;
    completeButton.dataset.projectid = projectID;

    const completeIcon = document.createElement('img');
    completeIcon.classList.add('completeIcon');

    switch(todo.getIsComplete()){
        case true:
            completeIcon.src = _svg_progressIconComplete_png__WEBPACK_IMPORTED_MODULE_1__;
            break;

        case false:
            completeIcon.src = _svg_progressIconUnfinished_png__WEBPACK_IMPORTED_MODULE_2__;
            break;
    };



    completeButton.appendChild(completeIcon); 
    container.appendChild(completeButton); 
    activateCompleteButtonListener(completeButton, completeIcon, todo);
};


function activateTodoButtonListener(todoButton){

    todoButton.addEventListener('click', () => {
        // selecting the previous sibling because the flex direction is reverse-column
        const todoContainer = todoButton.parentNode;
        const  todoDescription = todoContainer.previousElementSibling;


        todoDescription.classList.toggle('show');
    });
};


function activateCompleteButtonListener(completeButton, completeIcon, todo){
    
    completeButton.addEventListener('click', () => {
        const newComplete = !todo.getIsComplete();
        todo.setIsComplete(newComplete);

        changeTodoCompleteness(newComplete);
    });


    function changeTodoCompleteness(newComplete){

        switch(newComplete){
            case true:
                completeIcon.src = _svg_progressIconComplete_png__WEBPACK_IMPORTED_MODULE_1__;
                break;

            case false:
                completeIcon.src = _svg_progressIconUnfinished_png__WEBPACK_IMPORTED_MODULE_2__;
                break;
        };
    };

};

/***/ }),

/***/ "./src/GenerateDOM/sidebar.js":
/*!************************************!*\
  !*** ./src/GenerateDOM/sidebar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectToSidebar": () => (/* binding */ addProjectToSidebar),
/* harmony export */   "generateSidebar": () => (/* binding */ generateSidebar),
/* harmony export */   "removeProjectFromSidebar": () => (/* binding */ removeProjectFromSidebar)
/* harmony export */ });
/* harmony import */ var _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appLogic/initialSetup */ "./src/appLogic/initialSetup.js");
/* harmony import */ var _svg_user_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/user.png */ "./src/svg/user.png");
/* harmony import */ var _svg_settings_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/settings.png */ "./src/svg/settings.png");
/* harmony import */ var _svg_plus_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/plus.png */ "./src/svg/plus.png");
/* harmony import */ var _svg_layers_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svg/layers.png */ "./src/svg/layers.png");
/* harmony import */ var _createNewProjectForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createNewProjectForm.js */ "./src/GenerateDOM/createNewProjectForm.js");
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainContent */ "./src/GenerateDOM/mainContent.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../index.js */ "./src/index.js");












function addProjectToSidebar(project) {
  const projectList = document.querySelector('.projectList');

  const projectItemButton = document.createElement('button');
  projectItemButton.classList.add('projectItemButton');
  projectItemButton.textContent = project.getTitle();
  projectItemButton.dataset.projectid = project.getId();

  activateProjectItemButtonListener(projectItemButton);

  projectList.appendChild(projectItemButton);
};

function removeProjectFromSidebar(project) {
  const projectList = document.querySelector('.projectList');
  const projectItem = projectList.querySelector(`li[data-projectid="${project.getId()}"]`);

  projectList.removeChild(projectItem);
};

const html = document.querySelector('.container');

function generateSidebar(){
  const leftPanel = document.createElement('div');
  leftPanel.classList.add('leftPanel');

  generateWelcomePanel(leftPanel);

  generateProjectPanel(leftPanel);

  generateSettingsPanel(leftPanel);
  
  html.appendChild(leftPanel);
};



function generateWelcomePanel(container){
  const welcome = document.createElement('div');
  welcome.classList.add('welcome');

  const addWelcomeImage = () => {
    const welcomeImage = document.createElement('img');
    welcomeImage.src = _svg_user_png__WEBPACK_IMPORTED_MODULE_1__;
    welcomeImage.classList.add('welcomeImage');
    return welcomeImage;
  };

  const addWelcomePackage = () => {
    const welcomePackage = document.createElement('div');
    welcomePackage.classList.add('welcomePackage');
    welcomePackage.appendChild(addWelcomeMessage());
    welcomePackage.appendChild(addWelcomeName());
    return welcomePackage;
  };
  
  const addWelcomeMessage = () => {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('welcomeMessage');
    welcomeMessage.textContent = 'Welcome, ';
    return welcomeMessage;
  };

  const addWelcomeName = () => {
      const welcomeName = document.createElement('span');
      welcomeName.classList.add('welcomeName');
      welcomeName.textContent = 'Liu Fang';
      return welcomeName;
  };
  
  welcome.appendChild(addWelcomeImage());
  welcome.appendChild(addWelcomePackage());
  container.appendChild(welcome);
};

  

function generateSettingsPanel(container) {
  const settingsOption = document.createElement('div');
  settingsOption.classList.add('settingsOption');

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



function generateProjectPanel(container){
  const projectPanel = document.createElement('div');
  projectPanel.classList.add('projectPanel');

  addProjectPanelHeader(projectPanel);
  addProjectList(projectPanel);

  container.appendChild(projectPanel);
};

function addProjectPanelHeader(container) {
  const createProjectsButton = () => {
    const projectsButton = document.createElement('button');
    projectsButton.classList.add('projectPanelHeaderButton');
    projectsButton.textContent = 'Projects';
    return projectsButton;
  };

  const createProjectsIcon = () => {
    const projectsIcon = document.createElement('img');
    projectsIcon.classList.add('projectPanelSVG');
    projectsIcon.src = _svg_layers_png__WEBPACK_IMPORTED_MODULE_4__;
    return projectsIcon;
  };

  const createAddProjectButton = () => {
    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('addProjectButton');
    const addProjectIcon = document.createElement('img');
    addProjectIcon.classList.add('projectPlusSVG');
    addProjectIcon.src = _svg_plus_png__WEBPACK_IMPORTED_MODULE_3__;
    addProjectButton.appendChild(addProjectIcon);

    activateAddProjectButtonListener(addProjectButton);
    return addProjectButton;
  };

  const projectsButton = createProjectsButton();
  const projectsIcon = createProjectsIcon();
  const addProjectButton = createAddProjectButton();

  container.append(projectsIcon, projectsButton, addProjectButton);
};


function activateAddProjectButtonListener(addProjectButton){
    
  addProjectButton.addEventListener('click', () => {
      (0,_createNewProjectForm_js__WEBPACK_IMPORTED_MODULE_5__.makeProjectFormVisible)();
  });
};
  
function addProjectList(container){
  const projectList = document.createElement('div');
  projectList.classList.add('projectList');

  _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_0__.myProjects.getProjectList().forEach(project => {
    const projectItemButton = createProjectItemButton(project);
    projectList.appendChild(projectItemButton);
  });


  function createProjectItemButton(project) {
      const projectItemButton = document.createElement('button');
      projectItemButton.classList.add('projectItemButton');
      projectItemButton.textContent = project.getTitle();
      projectItemButton.dataset.projectid = project.getId();

      activateProjectItemButtonListener(projectItemButton);
      return projectItemButton;
  };

  container.appendChild(projectList);
};

function activateProjectItemButtonListener(projectItemButton){
  projectItemButton.addEventListener('click', () => {

      (0,_index_js__WEBPACK_IMPORTED_MODULE_7__.removeCurrentPage)();
  
      const projectID = parseInt(projectItemButton.dataset.projectid);
      const projectSelected = _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_0__.myProjects.getProjectById(projectID);
  
      (0,_mainContent__WEBPACK_IMPORTED_MODULE_6__.generateMainContent)(projectSelected);
  });
};






/***/ }),

/***/ "./src/appLogic/initialSetup.js":
/*!**************************************!*\
  !*** ./src/appLogic/initialSetup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProjectCounterValue": () => (/* binding */ getProjectCounterValue),
/* harmony export */   "getTodoCounterValue": () => (/* binding */ getTodoCounterValue),
/* harmony export */   "globalProjectCounter": () => (/* binding */ globalProjectCounter),
/* harmony export */   "globalTodoCounter": () => (/* binding */ globalTodoCounter),
/* harmony export */   "incrementProjectCounter": () => (/* binding */ incrementProjectCounter),
/* harmony export */   "incrementTodoCounter": () => (/* binding */ incrementTodoCounter),
/* harmony export */   "myProjects": () => (/* reexport safe */ _myProjectsObject__WEBPACK_IMPORTED_MODULE_3__.myProjects),
/* harmony export */   "setupInitalProjects": () => (/* binding */ setupInitalProjects)
/* harmony export */ });
/* harmony import */ var _toDoListObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoListObject */ "./src/appLogic/toDoListObject.js");
/* harmony import */ var _toDoObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoObject */ "./src/appLogic/toDoObject.js");
/* harmony import */ var _projectObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectObject */ "./src/appLogic/projectObject.js");
/* harmony import */ var _myProjectsObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myProjectsObject */ "./src/appLogic/myProjectsObject.js");








let globalProjectCounter = 0;
let globalTodoCounter = 0;

const incrementProjectCounter = () => {
  globalProjectCounter++;
};

const getProjectCounterValue = () => {
  return globalProjectCounter;
};

const incrementTodoCounter = () => {
  globalTodoCounter++;
};

const getTodoCounterValue = () => {
  return globalTodoCounter;
};

function setupInitalProjects() {

    const exampleTodos = [
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Update website design", "Revamp the website layout and make it more user-friendly", "01/04/2023", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Optimize server performance", "Analyze server logs and optimize server settings to improve performance", "02/04/2023", "medium", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Implement new feature", "Add a new feature to the website that allows users to save their preferences", "03/04/2023", "high", true, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Debug payment gateway", "Fix issues with payment gateway that are preventing customers from making purchases", "04/04/2023", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Write user documentation", "Create a user guide to help customers use our product more effectively", "05/04/2023", "low", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Update product specifications", "Update the product specifications document to reflect recent changes", "06/04/2023", "medium", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Test website on different devices", "Check website functionality and layout on different devices to ensure compatibility", "07/04/2023", "low", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Update website content", "Add new content to the website to keep it fresh and engaging for users", "08/04/2023", "medium", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Create marketing campaign", "Develop a marketing campaign to increase brand awareness and attract new customers", "09/04/2023", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Conduct user research", "Gather feedback from users to improve the product and address their needs", "10/04/2023", "medium", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Improve site speed", "Optimize website performance to improve site speed and reduce page load times", "11/04/2023", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Create training materials", "Develop training materials to help employees learn new skills and improve performance", "12/04/2023", "low", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Resolve customer complaints", "Address customer complaints and resolve issues to maintain customer satisfaction", "13/04/2023", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Improve search functionality", "Improve the search functionality of the website to make it easier for users to find what they need", "14/04/2023", "medium", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Create product roadmap", "Develop a roadmap for the product to guide future development and prioritize features", "15/04/2023", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Perform security audit", "Conduct a security audit of the website to identify vulnerabilities and implement fixes", "16/04/2023", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Improve user interface", "Redesign the user interface to improve user experience and make the website more intuitive to use", "17/04/2023", "medium", false, ++globalTodoCounter)
    ];

    const defaultProject = setupDefaultProject(exampleTodos);

    const todosSet1 = exampleTodos.slice(0, 6);
    const todosSet2 = exampleTodos.slice(6, 11);
    const todosSet3 = exampleTodos.slice(11);
  
    setupExampleProject("Website Redesign", todosSet1);
    setupExampleProject("Server Optimization", todosSet2);
    setupExampleProject("Product Development", todosSet3);


    

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

    const defaultProject = (0,_projectObject__WEBPACK_IMPORTED_MODULE_2__.project)("All Tasks", globalProjectCounter++);

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

  const getProjectByTodoId = (id) => {
    return getProjectList().find(project => project.getTodoList().getTodoById(id) != undefined);
  };

  return {
    addProject,
    removeProject,
    getProjectList,
    setProjectList,
    getProjectById,
    getProjectByTodoId,
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
  };

  const removeTodo = (todo) => {
    const index = todos.indexOf(todo);
    if (index !== -1) {
      todos.splice(index, 1);
      return true;
    }
  };

  const getTodos = () => {
    return todos;
  };

  const setTodos = (newTodos) => {
    todos = newTodos;
  };

  const getTodoById = (id) => {
    return getTodos().find(todo => todo.getId() === id);
  };

  const hasTodo = (todo) => {
    return todos.includes(todo);
  };

  return { addTodo, removeTodo, getTodos, setTodos, getTodoById, hasTodo };
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultProject": () => (/* binding */ defaultProject),
/* harmony export */   "removeCurrentPage": () => (/* binding */ removeCurrentPage)
/* harmony export */ });
/* harmony import */ var _GenerateDOM_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenerateDOM/sidebar */ "./src/GenerateDOM/sidebar.js");
/* harmony import */ var _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appLogic/initialSetup */ "./src/appLogic/initialSetup.js");
/* harmony import */ var _GenerateDOM_mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GenerateDOM/mainContent */ "./src/GenerateDOM/mainContent.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _GenerateDOM_createNewProjectForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GenerateDOM/createNewProjectForm.js */ "./src/GenerateDOM/createNewProjectForm.js");
/* harmony import */ var _GenerateDOM_createNewTodoForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GenerateDOM/createNewTodoForm */ "./src/GenerateDOM/createNewTodoForm.js");








function removeCurrentPage(){
    const html = document.querySelectorAll('.container > :not(.leftPanel)');
    html.forEach((child) => {
        child.parentNode.removeChild(child);
    });
};


const defaultProject = (0,_appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.setupInitalProjects)();

(0,_GenerateDOM_sidebar__WEBPACK_IMPORTED_MODULE_0__.generateSidebar)();

(0,_GenerateDOM_createNewProjectForm_js__WEBPACK_IMPORTED_MODULE_4__.activateProjectFormEventListeners)();

(0,_GenerateDOM_mainContent__WEBPACK_IMPORTED_MODULE_2__.generateMainContent)(defaultProject);

(0,_GenerateDOM_createNewTodoForm__WEBPACK_IMPORTED_MODULE_5__.activateTodoFormEventListeners)();

// event listener for loading default project from sidebar by clicking on it

const defaultProjectButton = document.querySelector('.projectPanelHeaderButton');

defaultProjectButton.addEventListener('click', () => {

    removeCurrentPage();

    (0,_GenerateDOM_mainContent__WEBPACK_IMPORTED_MODULE_2__.generateMainContent)(defaultProject);
});


// event listener for clicking on the todo item.





/***/ }),

/***/ "./src/svg/layers.png":
/*!****************************!*\
  !*** ./src/svg/layers.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4473a5995bd4076cf10.png";

/***/ }),

/***/ "./src/svg/plus.png":
/*!**************************!*\
  !*** ./src/svg/plus.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eceab58b23603ac5047e.png";

/***/ }),

/***/ "./src/svg/prioritySVGHigh.png":
/*!*************************************!*\
  !*** ./src/svg/prioritySVGHigh.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d72b6fa5600de9b7dab6.png";

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

module.exports = __webpack_require__.p + "74529c1cfb9229c7d69f.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFB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LElBQUksNkVBQW1CO0FBQ3ZCLENBQUM7OztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvR2VuZXJhdGVET00vY3JlYXRlTmV3UHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0dlbmVyYXRlRE9NL2NyZWF0ZU5ld1RvZG9Gb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9HZW5lcmF0ZURPTS9tYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvR2VuZXJhdGVET00vc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwTG9naWMvaW5pdGlhbFNldHVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBMb2dpYy9teVByb2plY3RzT2JqZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBMb2dpYy9wcm9qZWN0T2JqZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBMb2dpYy90b0RvTGlzdE9iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwTG9naWMvdG9Eb09iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwMWRlZyA2JSA5NiUpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXJlbSAxZnI7XFxuICAgIGJhY2tncm91bmQ6IGhzbCgyMDFkZWcgNiUgOTYlKTtcXG59XFxuXFxuLmxlZnRQYW5lbCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNHJlbTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDI1cmVtO1xcbn1cXG5cXG4ubGVmdFBhbmVsIC53ZWxjb21lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBcXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubGVmdFBhbmVsIC53ZWxjb21lTWVzc2FnZXtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ubGVmdFBhbmVsIGltZyB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5sZWZ0UGFuZWwgPiBkaXYge1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuXFxuXFxuLmxlZnRQYW5lbCAud2VsY29tZSBpbWcge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4ubGVmdFBhbmVsIC5wcm9qZWN0UGFuZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubGVmdFBhbmVsIC5wcm9qZWN0UGFuZWxIZWFkZXJCdXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgYmFja2dyb3VuZDogaHNsKDIwMWRlZyA2JSA5NiUpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbCAuYWRkUHJvamVjdEJ1dHRvbntcXG4gICAgYm9yZGVyOiBoc2woMjAxZGVnIDYlIDk2JSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHggO1xcbn1cXG4ubGVmdFBhbmVsIC5wcm9qZWN0UGFuZWwgLmFkZFByb2plY3RCdXR0b24gaW1ne1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNmZjZGZmLCAjMzNmNTlmKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjAwcHggO1xcbn1cXG4ubGVmdFBhbmVsIC5wcm9qZWN0TGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxcHg7XFxufVxcblxcbi5sZWZ0UGFuZWwgLnByb2plY3RMaXN0IGJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigxODAsIDE4MCwpO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzZmY2RmZiwgIzMzZjU5Zik7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLmxlZnRQYW5lbCAucHJvamVjdExpc3QgYnV0dG9uOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbn1cXG5cXG5cXG5cXG4ubGVmdFBhbmVsIC5zZXR0aW5nc09wdGlvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG5cXG5cXG4ubWFpbkNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgbWluLXdpZHRoOiA1MHJlbTtcXG59XFxuLm1haW5Db250ZW50IC5wYWdlSGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIGhzbCgyMDFkZWcgMTAwJSA1MCUpLCBoc2woMTUzZGVnIDkxJSA1OCUpKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLm5ld1RvZG9CdXR0b257XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNmZjZGZmLCAjMzNmNTlmKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvUGFuZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWFyZ2luOiAxcmVtIDAgMnJlbSAwO1xcbn1cXG4udG9kb0l0ZW17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGRiZGZhMDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG5cXG4udG9kb0l0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjAxZGVnIDYlIDk2JSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG59XFxuXFxuLnRvZG9Db250YWluZXJ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLXdpZHRoOiA0MHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLnByaW9yaXR5SWNvbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGdhcDogM3B4O1xcbn1cXG4ucHJpb3JpdHlJY29uQ29udGFpbmVyID4gaW1ne1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuLmNvbXBsZXRlQnV0dG9uIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxcmVtIDAuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuIFxcblxcbi5jb21wbGV0ZUJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxufVxcblxcbi50b2RvRGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgbWFyZ2luLXRvcDogLTEuMnJlbTtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMXMgZWFzZS1vdXQsIHBhZGRpbmcgMC4xcyBlYXNlLWluLCBib3JkZXIgMC4xcyBlYXNlLWluO1xcblxcbn1cXG4udG9kb0Rlc2NyaXB0aW9uLnNob3d7XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2sgO1xcbiAgICAvKiB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMXMgZWFzZS1pbiwgcGFkZGluZyAwLjFzIGVhc2UtaW4sIGJvcmRlciAwLjFzIGVhc2UtaW47ICovXFxufVxcblxcbi5uZXdQcm9qZWN0Rm9ybXtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICByb3ctZ2FwOiAxcmVtO1xcbiAgICBjb2x1bW4tZ2FwOjFweDsgXFxufVxcblxcbi5uZXdUb2RvRm9ybXtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDRmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgdG9wOiA4cmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgd2lkdGg6IDUwcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICByb3ctZ2FwOiAxcmVtO1xcbiAgICBjb2x1bW4tZ2FwOjFweDsgXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMjJkM2VlO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogNjByZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzM2Y1OWYsICM2ZmNkZmYpIDE7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLmZvcm1IZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMS8gLTE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvcm1IZWFkZXIgLmNhbmNlbEJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbi5mb3JtSGVhZGVyIC5jYW5jZWxCdXR0b246aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZvcm1IZWFkZXIgPiBoM3tcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiA2cmVtO1xcbn1cXG5cXG5mb3JtID4gaDN7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuZm9ybSA+IGxhYmVse1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcbmxhYmVse1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRDZEOURDO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzM2Y1OWYsICM2ZmNkZmYpIDE7XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgIzQ5OTdlYjtcXG4gICAgYm94LXNoYWRvdzogMCA5cHggMTBweCAtMTBweCAjODg4O1xcbn1cXG5pbnB1dDppbnZhbGlkIHtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmVkO1xcbn1cXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICBtYXgtd2lkdGg6IDQwcmVtO1xcbn1cXG5pbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICBtYXgtd2lkdGg6IDQwcmVtO1xcbn1cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzIyZDNlZTtcXG59XFxuXFxuXFxuZm9ybSBidXR0b257XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzNmNTlmLCAjNmZjZGZmKSAxO1xcbn1cXG5ub1xcblxcblxcbi5yZXNldEJ1dHRvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5wcmlvcml0eUxhYmVse1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnByaW9yaXR5U2VsZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBcXG59XFxuLnByaW9yaXR5U2VsZWN0aW9uICBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7ICovXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLnByaW9yaXR5U2VsZWN0aW9uIC5wcmlvcml0eUljb25Db250YWluZXJ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUpBQW1KO0lBQ25KLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7O0lBRVQsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLDBCQUEw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SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDREQUE0RDtBQUNoRTtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsNERBQTREO0FBQ2hFO0FBQ0E7Ozs7SUFJSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTOztBQUViO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNUOztvQ0FFZ0M7SUFDaEMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjAxZGVnIDYlIDk2JSk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cmVtIDFmcjtcXG4gICAgYmFja2dyb3VuZDogaHNsKDIwMWRlZyA2JSA5NiUpO1xcbn1cXG5cXG4ubGVmdFBhbmVsIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMjVyZW07XFxufVxcblxcbi5sZWZ0UGFuZWwgLndlbGNvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIFxcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5sZWZ0UGFuZWwgLndlbGNvbWVNZXNzYWdle1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5sZWZ0UGFuZWwgaW1nIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmxlZnRQYW5lbCA+IGRpdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG5cXG5cXG4ubGVmdFBhbmVsIC53ZWxjb21lIGltZyB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbEhlYWRlckJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBoc2woMjAxZGVnIDYlIDk2JSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxlZnRQYW5lbCAucHJvamVjdFBhbmVsIC5hZGRQcm9qZWN0QnV0dG9ue1xcbiAgICBib3JkZXI6IGhzbCgyMDFkZWcgNiUgOTYlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNTBweCA7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbCAuYWRkUHJvamVjdEJ1dHRvbiBpbWd7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM2ZmNkZmYsICMzM2Y1OWYpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweCA7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RMaXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcXG4gICAgcGFkZGluZy10b3A6IDFweDtcXG59XFxuXFxuLmxlZnRQYW5lbCAucHJvamVjdExpc3QgYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDE4MCwgMTgwLCk7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNmZjZGZmLCAjMzNmNTlmKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4ubGVmdFBhbmVsIC5wcm9qZWN0TGlzdCBidXR0b246aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxufVxcblxcblxcblxcbi5sZWZ0UGFuZWwgLnNldHRpbmdzT3B0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcblxcblxcbi5tYWluQ29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBtaW4td2lkdGg6IDUwcmVtO1xcbn1cXG4ubWFpbkNvbnRlbnQgLnBhZ2VIZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgaHNsKDIwMWRlZyAxMDAlIDUwJSksIGhzbCgxNTNkZWcgOTElIDU4JSkpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4ubmV3VG9kb0J1dHRvbntcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM2ZmNkZmYsICMzM2Y1OWYpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9QYW5lbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBtYXJnaW46IDFyZW0gMCAycmVtIDA7XFxufVxcbi50b2RvSXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZGJkZmEwMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxufVxcblxcbi50b2RvSXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDFkZWcgNiUgOTYlKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cXG4udG9kb0NvbnRhaW5lcntcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDQwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4ucHJpb3JpdHlJY29uQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ2FwOiAzcHg7XFxufVxcbi5wcmlvcml0eUljb25Db250YWluZXIgPiBpbWd7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uY29tcGxldGVCdXR0b24ge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMC44cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG4gXFxuXFxuLmNvbXBsZXRlQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG59XFxuXFxuLnRvZG9EZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAtMS4ycmVtO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4xcyBlYXNlLW91dCwgcGFkZGluZyAwLjFzIGVhc2UtaW4sIGJvcmRlciAwLjFzIGVhc2UtaW47XFxuXFxufVxcbi50b2RvRGVzY3JpcHRpb24uc2hvd3tcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjayA7XFxuICAgIC8qIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4xcyBlYXNlLWluLCBwYWRkaW5nIDAuMXMgZWFzZS1pbiwgYm9yZGVyIDAuMXMgZWFzZS1pbjsgKi9cXG59XFxuXFxuLm5ld1Byb2plY3RGb3Jte1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIHJvdy1nYXA6IDFyZW07XFxuICAgIGNvbHVtbi1nYXA6MXB4OyBcXG59XFxuXFxuLm5ld1RvZG9Gb3Jte1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgNGZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICB0b3A6IDhyZW07XFxufVxcblxcbmZvcm0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICB3aWR0aDogNTByZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHJvdy1nYXA6IDFyZW07XFxuICAgIGNvbHVtbi1nYXA6MXB4OyBcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyICAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMyMmQzZWU7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiA2MHJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzMzZjU5ZiwgIzZmY2RmZikgMTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG4uZm9ybUhlYWRlcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAxLyAtMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9ybUhlYWRlciAuY2FuY2VsQnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuLmZvcm1IZWFkZXIgLmNhbmNlbEJ1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZm9ybUhlYWRlciA+IGgze1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDZyZW07XFxufVxcblxcbmZvcm0gPiBoM3tcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbn1cXG5mb3JtID4gbGFiZWx7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxubGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNENkQ5REM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzMzZjU5ZiwgIzZmY2RmZikgMTtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjNDk5N2ViO1xcbiAgICBib3gtc2hhZG93OiAwIDlweCAxMHB4IC0xMHB4ICM4ODg7XFxufVxcbmlucHV0OmludmFsaWQge1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZWQ7XFxufVxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIG1heC13aWR0aDogNDByZW07XFxufVxcbmlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICAgIG1heC13aWR0aDogNDByZW07XFxufVxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjJkM2VlO1xcbn1cXG5cXG5cXG5mb3JtIGJ1dHRvbntcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMwZjE3MmE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzM2Y1OWYsICM2ZmNkZmYpIDE7XFxufVxcbm5vXFxuXFxuXFxuLnJlc2V0QnV0dG9uIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnByaW9yaXR5TGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucHJpb3JpdHlTZWxlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDNyZW07XFxuICAgIFxcbn1cXG4ucHJpb3JpdHlTZWxlY3Rpb24gIGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4ucHJpb3JpdHlTZWxlY3Rpb24gLnByaW9yaXR5SWNvbkNvbnRhaW5lcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6MTVweDtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi4vYXBwTG9naWMvcHJvamVjdE9iamVjdFwiO1xuaW1wb3J0IHsgZ2xvYmFsUHJvamVjdENvdW50ZXIsIGluY3JlbWVudFByb2plY3RDb3VudGVyIH0gZnJvbSBcIi4uL2FwcExvZ2ljL2luaXRpYWxTZXR1cFwiO1xuaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gXCIuLi9hcHBMb2dpYy9pbml0aWFsU2V0dXBcIjtcbmltcG9ydCB7YWRkUHJvamVjdFRvU2lkZWJhcn0gZnJvbSAnLi9zaWRlYmFyJ1xuXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0Rm9ybScpO1xuXG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHJvamVjdEZvcm1WaXNpYmxlKCl7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBodG1sLnN0eWxlLmZpbHRlciA9ICdibHVyKDVweCknO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlUHJvamVjdEZvcm1FdmVudExpc3RlbmVycygpe1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3RGb3JtJyk7XG4gIFxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0Rm9ybSAuY2FuY2VsQnV0dG9uJyk7XG4gIFxuICBcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgaHRtbC5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgfSk7XG4gIFxuICBcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdEZvcm0gLnN1Ym1pdEJ1dHRvbicpO1xuICBcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpLnZhbHVlO1xuICBcbiAgICAgICAgY29uc29sZS5sb2coJ3dlIGluJyk7XG4gIFxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0VGl0bGUpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdChwcm9qZWN0VGl0bGUsIGdsb2JhbFByb2plY3RDb3VudGVyKTtcbiAgICAgICAgaW5jcmVtZW50UHJvamVjdENvdW50ZXIoKTtcbiAgXG4gICAgICAgIG15UHJvamVjdHMuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgXG4gICAgICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgaHRtbC5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gIFxuICAgICAgICBhZGRQcm9qZWN0VG9TaWRlYmFyKG5ld1Byb2plY3QpO1xuICAgIFxuICAgIH0pO1xufTtcblxuXG4iLCJpbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4uL2FwcExvZ2ljL3RvRG9PYmplY3RcIjtcbmltcG9ydCB7IGdsb2JhbFRvZG9Db3VudGVyLCBpbmNyZW1lbnRUb2RvQ291bnRlciB9IGZyb20gXCIuLi9hcHBMb2dpYy9pbml0aWFsU2V0dXBcIjtcbmltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tIFwiLi4vYXBwTG9naWMvaW5pdGlhbFNldHVwXCI7XG5pbXBvcnQgeyBkaXNwbGF5TmV3VG9kbyB9IGZyb20gXCIuL21haW5Db250ZW50XCI7XG5pbXBvcnQgeyBkZWZhdWx0UHJvamVjdCB9IGZyb20gJy4uL2luZGV4J1xuXG5jb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUb2RvRm9ybScpO1xuY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VUb2RvRm9ybVZpc2libGUoKSB7XG4gIHRvZG9Gb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIGh0bWwuc3R5bGUuZmlsdGVyID0gJ2JsdXIoNXB4KSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZVRvZG9Gb3JtRXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgICBcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUb2RvRm9ybScpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUb2RvRm9ybSAuY2FuY2VsQnV0dG9uJyk7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1RvZG9Gb3JtIC5zdWJtaXRCdXR0b24nKTtcblxuICAgIGNvbnN0IHRvZG9UaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9UaXRsZScpO1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9EZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHRvZG9EdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0R1ZURhdGUnKTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHlJbnB1dCA9IHRvZG9Gb3JtLmVsZW1lbnRzLnByaW9yaXR5O1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0U2VsZWN0Jyk7XG5cblxuICAgIFxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRvZG9Gb3JtLnJlc2V0KCk7XG4gICAgICB0b2RvRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBodG1sLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICB9KTtcbiAgICBcblxuICAgIFxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IHRvZG9UaXRsZUlucHV0LnZhbHVlO1xuICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gdG9kb0Rlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IHRvZG9EdWVEYXRlSW5wdXQudmFsdWU7XG4gICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSByYWRpb0J1dHRvbkNoZWNrZXIodG9kb1ByaW9yaXR5SW5wdXQpO1xuICAgIFxuICAgICAgY29uc29sZS5sb2coJ3dlIGluJyk7XG4gICAgICBjb25zb2xlLmxvZyh0b2RvVGl0bGUsIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHkpO1xuICAgIFxuICAgICAgY29uc3QgbmV3VG9kbyA9IHRvZG8oXG4gICAgICAgIHRvZG9UaXRsZSxcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgICB0b2RvRHVlRGF0ZSxcbiAgICAgICAgdG9kb1ByaW9yaXR5LFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZ2xvYmFsVG9kb0NvdW50ZXJcbiAgICAgICk7XG4gICAgICBpbmNyZW1lbnRUb2RvQ291bnRlcigpO1xuICAgIFxuICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBwcm9qZWN0U2VsZWN0SW5wdXQudmFsdWU7XG4gICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3RJZCk7XG4gICAgXG4gICAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBteVByb2plY3RzLmdldFByb2plY3RCeUlkKHBhcnNlSW50KHNlbGVjdGVkUHJvamVjdElkKSk7XG4gICAgICBzZWxlY3RlZFByb2plY3QuZ2V0VG9kb0xpc3QoKS5hZGRUb2RvKG5ld1RvZG8pO1xuICAgICAgZGVmYXVsdFByb2plY3QuZ2V0VG9kb0xpc3QoKS5hZGRUb2RvKG5ld1RvZG8pO1xuICAgIFxuICAgICAgZGlzcGxheU5ld1RvZG8obmV3VG9kbyk7XG4gICAgXG4gICAgICB0b2RvRm9ybS5yZXNldCgpO1xuICAgICAgdG9kb0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgaHRtbC5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAgXG4gICAgLy8gbG9hZHMgdG9kYXkncyBkYXRlIGludG8gZGF0ZSBmb3JtIGNvbnRyb2xcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZGF0ZVwiXScpLnZhbHVlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gICAgLy8gIGxvYWRzIGN1cnJlbnQgcHJvamVjdHMgaW50byBzZWxlY3Rpb24gZm9ybSBjb250cm9sXG4gICAgcHJvamVjdFNlbGVjdGlvbkZpbGxlcigpO1xuXG59O1xuXG5mdW5jdGlvbiBwcm9qZWN0U2VsZWN0aW9uRmlsbGVyKCl7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0U2VsZWN0Jyk7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBbXTtcbiAgICBteVByb2plY3RzLmdldFByb2plY3RMaXN0KCkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdExpc3QucHVzaCh7aWQ6IHByb2plY3QuZ2V0SWQoKSwgdGl0bGU6IHByb2plY3QuZ2V0VGl0bGUoKX0pXG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0TGlzdFtpXS5pZDtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdExpc3RbaV0udGl0bGU7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9O1xufTtcblxuXG5mdW5jdGlvbiByYWRpb0J1dHRvbkNoZWNrZXIocmFkaW9zKXtcbiAgICBsZXQgc2VsZWN0ZWRWYWx1ZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmFkaW9zW2ldLmNoZWNrZWQpIHtcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZSA9IHJhZGlvc1tpXS52YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFZhbHVlO1xufTsiLCJpbXBvcnQgcHJpb3JpdHlTVkcgZnJvbSAnLi4vc3ZnL3ByaW9yaXR5U1ZHSGlnaC5wbmcnO1xuXG5pbXBvcnQgcHJvZ3Jlc3NJY29uQ29tcGxldGUgZnJvbSAnLi4vc3ZnL3Byb2dyZXNzSWNvbkNvbXBsZXRlLnBuZyc7XG5pbXBvcnQgcHJvZ3Jlc3NJY29uVW5maW5pc2hlZCBmcm9tICcuLi9zdmcvcHJvZ3Jlc3NJY29uVW5maW5pc2hlZC5wbmcnO1xuXG5pbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSBcIi4uL2FwcExvZ2ljL2luaXRpYWxTZXR1cFwiO1xuXG5pbXBvcnQgeyBtYWtlVG9kb0Zvcm1WaXNpYmxlIH0gZnJvbSAnLi9jcmVhdGVOZXdUb2RvRm9ybSc7XG5cbmV4cG9ydCB7Z2VuZXJhdGVNYWluQ29udGVudH07XG5cbmNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TmV3VG9kbyh0b2RvKXtcbiAgICBjb25zdCB0b2RvUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb1BhbmVsJyk7XG5cbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvQ29udGFpbmVyJyk7XG4gICAgXG4gICAgLy8gYWRkaW5nIHRoZSBsZWZ0IGluZm8gY29tcG9uZW50IG9mIHRoZSB0b2RvIGl0ZW0uXG4gICAgYWRkVG9kb0l0ZW0odG9kb0NvbnRhaW5lciwgdG9kbyk7XG5cbiAgICAvLyBhZGRpbmcgdGhlIHJpZ2h0IGNvbXBsZXRlIGJ1dHRvbi5cbiAgICBhZGRUb2RvQ29tcGxldGVCdXR0b24odG9kb0NvbnRhaW5lciwgdG9kbyk7XG5cbiAgICBhZGRUb2RvRGVzY3JpcHRpb24odG9kb1BhbmVsLCB0b2RvKTtcblxuICAgIHRvZG9QYW5lbC5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTWFpbkNvbnRlbnQocHJvamVjdCl7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluQ29udGVudCcpO1xuXG4gICAgZ2VuZXJhdGVQYWdlSGVhZGluZyhtYWluQ29udGVudCwgcHJvamVjdC5nZXRUaXRsZSgpKTtcblxuICAgIGdlbmVyYXRlQ3JlYXRlTmV3SXRlbUJ1dHRvbihtYWluQ29udGVudCk7XG5cbiAgICBnZW5lcmF0ZVRvZG9QYW5lbChtYWluQ29udGVudCwgcHJvamVjdC5nZXRUb2RvTGlzdCgpKTtcblxuICAgIGh0bWwuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xufTtcblxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUGFnZUhlYWRpbmcoY29udGFpbmVyLCB0aXRsZSl7XG4gICAgY29uc3QgcGFnZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdwYWdlSGVhZGluZycpO1xuXG4gICAgcGFnZUhlYWRpbmcudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlSGVhZGluZyk7XG59O1xuXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVDcmVhdGVOZXdJdGVtQnV0dG9uKGNvbnRhaW5lcil7XG4gICAgY29uc3QgbmV3SXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcblxuICAgIG5ld0l0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3VG9kb0J1dHRvbicpO1xuXG4gICAgbmV3SXRlbUJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgbmV3IGl0ZW0nO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdJdGVtQnV0dG9uKTtcblxuICAgIGFjdGl2YXRlQ3JlYXRlTmV3SXRlbUJ1dHRvbkxpc3RlbmVyKG5ld0l0ZW1CdXR0b24pO1xufTtcblxuZnVuY3Rpb24gYWN0aXZhdGVDcmVhdGVOZXdJdGVtQnV0dG9uTGlzdGVuZXIobmV3SXRlbUJ1dHRvbil7XG4gICAgbmV3SXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFrZVRvZG9Gb3JtVmlzaWJsZSgpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVUb2RvUGFuZWwoY29udGFpbmVyLCB0b2RvTGlzdCkge1xuICAgIGNvbnN0IHRvZG9QYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9QYW5lbC5jbGFzc0xpc3QuYWRkKCd0b2RvUGFuZWwnKTtcblxuICAgIHRvZG9MaXN0LmdldFRvZG9zKCkuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9Db250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZGluZyB0aGUgbGVmdCBpbmZvIGNvbXBvbmVudCBvZiB0aGUgdG9kbyBpdGVtLlxuICAgICAgICBhZGRUb2RvSXRlbSh0b2RvQ29udGFpbmVyLCB0b2RvKTtcblxuICAgICAgICAvLyBhZGRpbmcgdGhlIHJpZ2h0IGNvbXBsZXRlIGJ1dHRvbi5cbiAgICAgICAgYWRkVG9kb0NvbXBsZXRlQnV0dG9uKHRvZG9Db250YWluZXIsIHRvZG8pO1xuXG4gICAgICAgIGFkZFRvZG9EZXNjcmlwdGlvbih0b2RvUGFuZWwsIHRvZG8pO1xuXG4gICAgICAgIHRvZG9QYW5lbC5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvUGFuZWwpO1xufTtcblxuZnVuY3Rpb24gYWRkVG9kb0Rlc2NyaXB0aW9uKGNvbnRhaW5lciwgdG9kbyl7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZXNjcmlwdGlvbicpO1xuICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAvLyB0b2RvRGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xufTtcblxuZnVuY3Rpb24gYWRkVG9kb0l0ZW0oY29udGFpbmVyLCB0b2RvKSB7XG4gICAgY29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb0l0ZW0nKTtcblxuXG4gICAgY29uc3QgdG9kb0lEID0gdG9kby5nZXRJZCgpO1xuICAgIGNvbnN0IHBhcmVudFByb2plY3QgPSBteVByb2plY3RzLmdldFByb2plY3RCeVRvZG9JZCh0b2RvSUQpO1xuICAgIGNvbnN0IHByb2plY3RJRCA9IHBhcmVudFByb2plY3QuZ2V0SWQoKTtcblxuXG4gICAgdG9kb0J1dHRvbi5kYXRhc2V0LnRvZG9pZCA9IHRvZG9JRDtcbiAgICB0b2RvQnV0dG9uLmRhdGFzZXQucHJvamVjdGlkID0gcHJvamVjdElEO1xuXG4gICAgYWRkUHJpb3JpdHlJY29uKHRvZG8uZ2V0UHJpb3JpdHkoKSk7XG4gICAgYWRkVG9kb1RpdGxlKHRvZG8uZ2V0VGl0bGUoKSk7XG4gICAgYWRkVG9kb0RhdGUodG9kby5nZXREdWVEYXRlKCkpO1xuXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0J1dHRvbik7XG5cbiAgICBmdW5jdGlvbiBhZGRUb2RvRGF0ZShkYXRlKSB7XG4gICAgICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0ZScpO1xuICAgICAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGRhdGU7XG4gICAgICAgIHRvZG9CdXR0b24uYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkVG9kb1RpdGxlKHRpdGxlKSB7XG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG9UaXRsZScpO1xuICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgdG9kb0J1dHRvbi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRQcmlvcml0eUljb24ocHJpb3JpdHkpIHtcbiAgXG4gICAgICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgICAgIHRvZG9CdXR0b24uYXBwZW5kQ2hpbGQoYWRkSWNvbnMoMykpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICBcbiAgICAgICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICAgICAgdG9kb0J1dHRvbi5hcHBlbmRDaGlsZChhZGRJY29ucygyKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgIFxuICAgICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgICB0b2RvQnV0dG9uLmFwcGVuZENoaWxkKGFkZEljb25zKDEpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICBmdW5jdGlvbiBhZGRJY29ucyAoY291bnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlJY29uQ29udGFpbmVyJyk7XG4gICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3ZnSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICBzdmdJY29uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5SWNvbicpO1xuICAgICAgICAgICAgICBzdmdJY29uLnNyYyA9IHByaW9yaXR5U1ZHO1xuICAgICAgICAgICAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN2Z0ljb24pO1xuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBpY29uQ29udGFpbmVyO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBhY3RpdmF0ZVRvZG9CdXR0b25MaXN0ZW5lcih0b2RvQnV0dG9uKTtcbn07XG5cblxuXG5mdW5jdGlvbiBhZGRUb2RvQ29tcGxldGVCdXR0b24oY29udGFpbmVyLCB0b2RvKXtcblxuICAgIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIGNvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlQnV0dG9uJyk7XG5cbiAgICBjb25zdCB0b2RvSUQgPSB0b2RvLmdldElkKCk7XG4gICAgY29uc3QgcGFyZW50UHJvamVjdCA9IG15UHJvamVjdHMuZ2V0UHJvamVjdEJ5VG9kb0lkKHRvZG9JRCk7XG4gICAgY29uc3QgcHJvamVjdElEID0gcGFyZW50UHJvamVjdC5nZXRJZCgpO1xuICAgIFxuICAgIGNvbXBsZXRlQnV0dG9uLmRhdGFzZXQudG9kb2lkID0gdG9kb0lEO1xuICAgIGNvbXBsZXRlQnV0dG9uLmRhdGFzZXQucHJvamVjdGlkID0gcHJvamVjdElEO1xuXG4gICAgY29uc3QgY29tcGxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29tcGxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlSWNvbicpO1xuXG4gICAgc3dpdGNoKHRvZG8uZ2V0SXNDb21wbGV0ZSgpKXtcbiAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgY29tcGxldGVJY29uLnNyYyA9IHByb2dyZXNzSWNvbkNvbXBsZXRlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgIGNvbXBsZXRlSWNvbi5zcmMgPSBwcm9ncmVzc0ljb25VbmZpbmlzaGVkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfTtcblxuXG5cbiAgICBjb21wbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChjb21wbGV0ZUljb24pOyBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pOyBcbiAgICBhY3RpdmF0ZUNvbXBsZXRlQnV0dG9uTGlzdGVuZXIoY29tcGxldGVCdXR0b24sIGNvbXBsZXRlSWNvbiwgdG9kbyk7XG59O1xuXG5cbmZ1bmN0aW9uIGFjdGl2YXRlVG9kb0J1dHRvbkxpc3RlbmVyKHRvZG9CdXR0b24pe1xuXG4gICAgdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBwcmV2aW91cyBzaWJsaW5nIGJlY2F1c2UgdGhlIGZsZXggZGlyZWN0aW9uIGlzIHJldmVyc2UtY29sdW1uXG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSB0b2RvQnV0dG9uLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0ICB0b2RvRGVzY3JpcHRpb24gPSB0b2RvQ29udGFpbmVyLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cblxuICAgICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIH0pO1xufTtcblxuXG5mdW5jdGlvbiBhY3RpdmF0ZUNvbXBsZXRlQnV0dG9uTGlzdGVuZXIoY29tcGxldGVCdXR0b24sIGNvbXBsZXRlSWNvbiwgdG9kbyl7XG4gICAgXG4gICAgY29tcGxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NvbXBsZXRlID0gIXRvZG8uZ2V0SXNDb21wbGV0ZSgpO1xuICAgICAgICB0b2RvLnNldElzQ29tcGxldGUobmV3Q29tcGxldGUpO1xuXG4gICAgICAgIGNoYW5nZVRvZG9Db21wbGV0ZW5lc3MobmV3Q29tcGxldGUpO1xuICAgIH0pO1xuXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VUb2RvQ29tcGxldGVuZXNzKG5ld0NvbXBsZXRlKXtcblxuICAgICAgICBzd2l0Y2gobmV3Q29tcGxldGUpe1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIGNvbXBsZXRlSWNvbi5zcmMgPSBwcm9ncmVzc0ljb25Db21wbGV0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUljb24uc3JjID0gcHJvZ3Jlc3NJY29uVW5maW5pc2hlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICB9O1xuXG59OyIsImltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tICcuLi9hcHBMb2dpYy9pbml0aWFsU2V0dXAnO1xuaW1wb3J0IHByb2ZpbGVTVkcgZnJvbSAnLi4vc3ZnL3VzZXIucG5nJztcbmltcG9ydCBzZXR0aW5nc1NWRyBmcm9tICcuLi9zdmcvc2V0dGluZ3MucG5nJztcbmltcG9ydCBwcm9qZWN0UGx1c1NWRyBmcm9tICcuLi9zdmcvcGx1cy5wbmcnO1xuaW1wb3J0IHByb2plY3RIZWFkZXJTVkcgZnJvbSAnLi4vc3ZnL2xheWVycy5wbmcnO1xuXG5pbXBvcnQgeyBtYWtlUHJvamVjdEZvcm1WaXNpYmxlIH0gZnJvbSAnLi9jcmVhdGVOZXdQcm9qZWN0Rm9ybS5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZU1haW5Db250ZW50IH0gZnJvbSAnLi9tYWluQ29udGVudCc7XG5pbXBvcnQgeyByZW1vdmVDdXJyZW50UGFnZSB9IGZyb20gJy4uL2luZGV4LmpzJztcblxuZXhwb3J0IHtnZW5lcmF0ZVNpZGViYXJ9O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdFRvU2lkZWJhcihwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0Jyk7XG5cbiAgY29uc3QgcHJvamVjdEl0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJvamVjdEl0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdEl0ZW1CdXR0b24nKTtcbiAgcHJvamVjdEl0ZW1CdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gIHByb2plY3RJdGVtQnV0dG9uLmRhdGFzZXQucHJvamVjdGlkID0gcHJvamVjdC5nZXRJZCgpO1xuXG4gIGFjdGl2YXRlUHJvamVjdEl0ZW1CdXR0b25MaXN0ZW5lcihwcm9qZWN0SXRlbUJ1dHRvbik7XG5cbiAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1CdXR0b24pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3RGcm9tU2lkZWJhcihwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0Jyk7XG4gIGNvbnN0IHByb2plY3RJdGVtID0gcHJvamVjdExpc3QucXVlcnlTZWxlY3RvcihgbGlbZGF0YS1wcm9qZWN0aWQ9XCIke3Byb2plY3QuZ2V0SWQoKX1cIl1gKTtcblxuICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0SXRlbSk7XG59O1xuXG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVNpZGViYXIoKXtcbiAgY29uc3QgbGVmdFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxlZnRQYW5lbC5jbGFzc0xpc3QuYWRkKCdsZWZ0UGFuZWwnKTtcblxuICBnZW5lcmF0ZVdlbGNvbWVQYW5lbChsZWZ0UGFuZWwpO1xuXG4gIGdlbmVyYXRlUHJvamVjdFBhbmVsKGxlZnRQYW5lbCk7XG5cbiAgZ2VuZXJhdGVTZXR0aW5nc1BhbmVsKGxlZnRQYW5lbCk7XG4gIFxuICBodG1sLmFwcGVuZENoaWxkKGxlZnRQYW5lbCk7XG59O1xuXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVXZWxjb21lUGFuZWwoY29udGFpbmVyKXtcbiAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWxjb21lLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUnKTtcblxuICBjb25zdCBhZGRXZWxjb21lSW1hZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2VsY29tZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgd2VsY29tZUltYWdlLnNyYyA9IHByb2ZpbGVTVkc7XG4gICAgd2VsY29tZUltYWdlLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWVJbWFnZScpO1xuICAgIHJldHVybiB3ZWxjb21lSW1hZ2U7XG4gIH07XG5cbiAgY29uc3QgYWRkV2VsY29tZVBhY2thZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2VsY29tZVBhY2thZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWxjb21lUGFja2FnZS5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lUGFja2FnZScpO1xuICAgIHdlbGNvbWVQYWNrYWdlLmFwcGVuZENoaWxkKGFkZFdlbGNvbWVNZXNzYWdlKCkpO1xuICAgIHdlbGNvbWVQYWNrYWdlLmFwcGVuZENoaWxkKGFkZFdlbGNvbWVOYW1lKCkpO1xuICAgIHJldHVybiB3ZWxjb21lUGFja2FnZTtcbiAgfTtcbiAgXG4gIGNvbnN0IGFkZFdlbGNvbWVNZXNzYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHdlbGNvbWVNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VsY29tZU1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnd2VsY29tZU1lc3NhZ2UnKTtcbiAgICB3ZWxjb21lTWVzc2FnZS50ZXh0Q29udGVudCA9ICdXZWxjb21lLCAnO1xuICAgIHJldHVybiB3ZWxjb21lTWVzc2FnZTtcbiAgfTtcblxuICBjb25zdCBhZGRXZWxjb21lTmFtZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHdlbGNvbWVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgd2VsY29tZU5hbWUuY2xhc3NMaXN0LmFkZCgnd2VsY29tZU5hbWUnKTtcbiAgICAgIHdlbGNvbWVOYW1lLnRleHRDb250ZW50ID0gJ0xpdSBGYW5nJztcbiAgICAgIHJldHVybiB3ZWxjb21lTmFtZTtcbiAgfTtcbiAgXG4gIHdlbGNvbWUuYXBwZW5kQ2hpbGQoYWRkV2VsY29tZUltYWdlKCkpO1xuICB3ZWxjb21lLmFwcGVuZENoaWxkKGFkZFdlbGNvbWVQYWNrYWdlKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG59O1xuXG4gIFxuXG5mdW5jdGlvbiBnZW5lcmF0ZVNldHRpbmdzUGFuZWwoY29udGFpbmVyKSB7XG4gIGNvbnN0IHNldHRpbmdzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNldHRpbmdzT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzT3B0aW9uJyk7XG5cbiAgY29uc3Qgc2V0dGluZ3NJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHNldHRpbmdzSWNvbi5jbGFzc0xpc3QuYWRkKCdzZXR0aW5nc0ljb24nKTtcbiAgc2V0dGluZ3NJY29uLnNyYyA9IHNldHRpbmdzU1ZHO1xuXG4gIGNvbnN0IHNldHRpbmdzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNldHRpbmdzTGFiZWwuY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3NMYWJlbCcpO1xuICBzZXR0aW5nc0xhYmVsLnRleHRDb250ZW50ID0gJ1NldHRpbmdzJztcblxuICBzZXR0aW5nc09wdGlvbi5hcHBlbmRDaGlsZChzZXR0aW5nc0ljb24pO1xuICBzZXR0aW5nc09wdGlvbi5hcHBlbmRDaGlsZChzZXR0aW5nc0xhYmVsKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNldHRpbmdzT3B0aW9uKTtcbn07XG5cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RQYW5lbChjb250YWluZXIpe1xuICBjb25zdCBwcm9qZWN0UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdFBhbmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RQYW5lbCcpO1xuXG4gIGFkZFByb2plY3RQYW5lbEhlYWRlcihwcm9qZWN0UGFuZWwpO1xuICBhZGRQcm9qZWN0TGlzdChwcm9qZWN0UGFuZWwpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0UGFuZWwpO1xufTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdFBhbmVsSGVhZGVyKGNvbnRhaW5lcikge1xuICBjb25zdCBjcmVhdGVQcm9qZWN0c0J1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RQYW5lbEhlYWRlckJ1dHRvbicpO1xuICAgIHByb2plY3RzQnV0dG9uLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICByZXR1cm4gcHJvamVjdHNCdXR0b247XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdHNJY29uID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plY3RzSWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0UGFuZWxTVkcnKTtcbiAgICBwcm9qZWN0c0ljb24uc3JjID0gcHJvamVjdEhlYWRlclNWRztcbiAgICByZXR1cm4gcHJvamVjdHNJY29uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUFkZFByb2plY3RCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xuICAgIGNvbnN0IGFkZFByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYWRkUHJvamVjdEljb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdFBsdXNTVkcnKTtcbiAgICBhZGRQcm9qZWN0SWNvbi5zcmMgPSBwcm9qZWN0UGx1c1NWRztcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZFByb2plY3RJY29uKTtcblxuICAgIGFjdGl2YXRlQWRkUHJvamVjdEJ1dHRvbkxpc3RlbmVyKGFkZFByb2plY3RCdXR0b24pO1xuICAgIHJldHVybiBhZGRQcm9qZWN0QnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RzQnV0dG9uID0gY3JlYXRlUHJvamVjdHNCdXR0b24oKTtcbiAgY29uc3QgcHJvamVjdHNJY29uID0gY3JlYXRlUHJvamVjdHNJY29uKCk7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBjcmVhdGVBZGRQcm9qZWN0QnV0dG9uKCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZChwcm9qZWN0c0ljb24sIHByb2plY3RzQnV0dG9uLCBhZGRQcm9qZWN0QnV0dG9uKTtcbn07XG5cblxuZnVuY3Rpb24gYWN0aXZhdGVBZGRQcm9qZWN0QnV0dG9uTGlzdGVuZXIoYWRkUHJvamVjdEJ1dHRvbil7XG4gICAgXG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtYWtlUHJvamVjdEZvcm1WaXNpYmxlKCk7XG4gIH0pO1xufTtcbiAgXG5mdW5jdGlvbiBhZGRQcm9qZWN0TGlzdChjb250YWluZXIpe1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGlzdCcpO1xuXG4gIG15UHJvamVjdHMuZ2V0UHJvamVjdExpc3QoKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJdGVtQnV0dG9uID0gY3JlYXRlUHJvamVjdEl0ZW1CdXR0b24ocHJvamVjdCk7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1CdXR0b24pO1xuICB9KTtcblxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RJdGVtQnV0dG9uKHByb2plY3QpIHtcbiAgICAgIGNvbnN0IHByb2plY3RJdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBwcm9qZWN0SXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SXRlbUJ1dHRvbicpO1xuICAgICAgcHJvamVjdEl0ZW1CdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gICAgICBwcm9qZWN0SXRlbUJ1dHRvbi5kYXRhc2V0LnByb2plY3RpZCA9IHByb2plY3QuZ2V0SWQoKTtcblxuICAgICAgYWN0aXZhdGVQcm9qZWN0SXRlbUJ1dHRvbkxpc3RlbmVyKHByb2plY3RJdGVtQnV0dG9uKTtcbiAgICAgIHJldHVybiBwcm9qZWN0SXRlbUJ1dHRvbjtcbiAgfTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xufTtcblxuZnVuY3Rpb24gYWN0aXZhdGVQcm9qZWN0SXRlbUJ1dHRvbkxpc3RlbmVyKHByb2plY3RJdGVtQnV0dG9uKXtcbiAgcHJvamVjdEl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgIHJlbW92ZUN1cnJlbnRQYWdlKCk7XG4gIFxuICAgICAgY29uc3QgcHJvamVjdElEID0gcGFyc2VJbnQocHJvamVjdEl0ZW1CdXR0b24uZGF0YXNldC5wcm9qZWN0aWQpO1xuICAgICAgY29uc3QgcHJvamVjdFNlbGVjdGVkID0gbXlQcm9qZWN0cy5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SUQpO1xuICBcbiAgICAgIGdlbmVyYXRlTWFpbkNvbnRlbnQocHJvamVjdFNlbGVjdGVkKTtcbiAgfSk7XG59O1xuXG5cblxuXG4iLCJpbXBvcnQgeyB0b2RvTGlzdE1vZHVsZSB9IGZyb20gXCIuL3RvRG9MaXN0T2JqZWN0XCI7XG5pbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vdG9Eb09iamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RPYmplY3RcIjtcbmltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tIFwiLi9teVByb2plY3RzT2JqZWN0XCI7XG5leHBvcnQgeyBteVByb2plY3RzIH07XG5leHBvcnQgeyBnbG9iYWxQcm9qZWN0Q291bnRlciwgZ2xvYmFsVG9kb0NvdW50ZXIgfTtcbmV4cG9ydCB7IHNldHVwSW5pdGFsUHJvamVjdHMgfTtcblxubGV0IGdsb2JhbFByb2plY3RDb3VudGVyID0gMDtcbmxldCBnbG9iYWxUb2RvQ291bnRlciA9IDA7XG5cbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRQcm9qZWN0Q291bnRlciA9ICgpID0+IHtcbiAgZ2xvYmFsUHJvamVjdENvdW50ZXIrKztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9qZWN0Q291bnRlclZhbHVlID0gKCkgPT4ge1xuICByZXR1cm4gZ2xvYmFsUHJvamVjdENvdW50ZXI7XG59O1xuXG5leHBvcnQgY29uc3QgaW5jcmVtZW50VG9kb0NvdW50ZXIgPSAoKSA9PiB7XG4gIGdsb2JhbFRvZG9Db3VudGVyKys7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VG9kb0NvdW50ZXJWYWx1ZSA9ICgpID0+IHtcbiAgcmV0dXJuIGdsb2JhbFRvZG9Db3VudGVyO1xufTtcblxuZnVuY3Rpb24gc2V0dXBJbml0YWxQcm9qZWN0cygpIHtcblxuICAgIGNvbnN0IGV4YW1wbGVUb2RvcyA9IFtcbiAgICAgICAgdG9kbyhcIlVwZGF0ZSB3ZWJzaXRlIGRlc2lnblwiLCBcIlJldmFtcCB0aGUgd2Vic2l0ZSBsYXlvdXQgYW5kIG1ha2UgaXQgbW9yZSB1c2VyLWZyaWVuZGx5XCIsIFwiMDEvMDQvMjAyM1wiLCBcImhpZ2hcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiT3B0aW1pemUgc2VydmVyIHBlcmZvcm1hbmNlXCIsIFwiQW5hbHl6ZSBzZXJ2ZXIgbG9ncyBhbmQgb3B0aW1pemUgc2VydmVyIHNldHRpbmdzIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcIiwgXCIwMi8wNC8yMDIzXCIsIFwibWVkaXVtXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIkltcGxlbWVudCBuZXcgZmVhdHVyZVwiLCBcIkFkZCBhIG5ldyBmZWF0dXJlIHRvIHRoZSB3ZWJzaXRlIHRoYXQgYWxsb3dzIHVzZXJzIHRvIHNhdmUgdGhlaXIgcHJlZmVyZW5jZXNcIiwgXCIwMy8wNC8yMDIzXCIsIFwiaGlnaFwiLCB0cnVlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIkRlYnVnIHBheW1lbnQgZ2F0ZXdheVwiLCBcIkZpeCBpc3N1ZXMgd2l0aCBwYXltZW50IGdhdGV3YXkgdGhhdCBhcmUgcHJldmVudGluZyBjdXN0b21lcnMgZnJvbSBtYWtpbmcgcHVyY2hhc2VzXCIsIFwiMDQvMDQvMjAyM1wiLCBcImhpZ2hcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiV3JpdGUgdXNlciBkb2N1bWVudGF0aW9uXCIsIFwiQ3JlYXRlIGEgdXNlciBndWlkZSB0byBoZWxwIGN1c3RvbWVycyB1c2Ugb3VyIHByb2R1Y3QgbW9yZSBlZmZlY3RpdmVseVwiLCBcIjA1LzA0LzIwMjNcIiwgXCJsb3dcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiVXBkYXRlIHByb2R1Y3Qgc3BlY2lmaWNhdGlvbnNcIiwgXCJVcGRhdGUgdGhlIHByb2R1Y3Qgc3BlY2lmaWNhdGlvbnMgZG9jdW1lbnQgdG8gcmVmbGVjdCByZWNlbnQgY2hhbmdlc1wiLCBcIjA2LzA0LzIwMjNcIiwgXCJtZWRpdW1cIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiVGVzdCB3ZWJzaXRlIG9uIGRpZmZlcmVudCBkZXZpY2VzXCIsIFwiQ2hlY2sgd2Vic2l0ZSBmdW5jdGlvbmFsaXR5IGFuZCBsYXlvdXQgb24gZGlmZmVyZW50IGRldmljZXMgdG8gZW5zdXJlIGNvbXBhdGliaWxpdHlcIiwgXCIwNy8wNC8yMDIzXCIsIFwibG93XCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIlVwZGF0ZSB3ZWJzaXRlIGNvbnRlbnRcIiwgXCJBZGQgbmV3IGNvbnRlbnQgdG8gdGhlIHdlYnNpdGUgdG8ga2VlcCBpdCBmcmVzaCBhbmQgZW5nYWdpbmcgZm9yIHVzZXJzXCIsIFwiMDgvMDQvMjAyM1wiLCBcIm1lZGl1bVwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJDcmVhdGUgbWFya2V0aW5nIGNhbXBhaWduXCIsIFwiRGV2ZWxvcCBhIG1hcmtldGluZyBjYW1wYWlnbiB0byBpbmNyZWFzZSBicmFuZCBhd2FyZW5lc3MgYW5kIGF0dHJhY3QgbmV3IGN1c3RvbWVyc1wiLCBcIjA5LzA0LzIwMjNcIiwgXCJoaWdoXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIkNvbmR1Y3QgdXNlciByZXNlYXJjaFwiLCBcIkdhdGhlciBmZWVkYmFjayBmcm9tIHVzZXJzIHRvIGltcHJvdmUgdGhlIHByb2R1Y3QgYW5kIGFkZHJlc3MgdGhlaXIgbmVlZHNcIiwgXCIxMC8wNC8yMDIzXCIsIFwibWVkaXVtXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIkltcHJvdmUgc2l0ZSBzcGVlZFwiLCBcIk9wdGltaXplIHdlYnNpdGUgcGVyZm9ybWFuY2UgdG8gaW1wcm92ZSBzaXRlIHNwZWVkIGFuZCByZWR1Y2UgcGFnZSBsb2FkIHRpbWVzXCIsIFwiMTEvMDQvMjAyM1wiLCBcImhpZ2hcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiQ3JlYXRlIHRyYWluaW5nIG1hdGVyaWFsc1wiLCBcIkRldmVsb3AgdHJhaW5pbmcgbWF0ZXJpYWxzIHRvIGhlbHAgZW1wbG95ZWVzIGxlYXJuIG5ldyBza2lsbHMgYW5kIGltcHJvdmUgcGVyZm9ybWFuY2VcIiwgXCIxMi8wNC8yMDIzXCIsIFwibG93XCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIlJlc29sdmUgY3VzdG9tZXIgY29tcGxhaW50c1wiLCBcIkFkZHJlc3MgY3VzdG9tZXIgY29tcGxhaW50cyBhbmQgcmVzb2x2ZSBpc3N1ZXMgdG8gbWFpbnRhaW4gY3VzdG9tZXIgc2F0aXNmYWN0aW9uXCIsIFwiMTMvMDQvMjAyM1wiLCBcImhpZ2hcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiSW1wcm92ZSBzZWFyY2ggZnVuY3Rpb25hbGl0eVwiLCBcIkltcHJvdmUgdGhlIHNlYXJjaCBmdW5jdGlvbmFsaXR5IG9mIHRoZSB3ZWJzaXRlIHRvIG1ha2UgaXQgZWFzaWVyIGZvciB1c2VycyB0byBmaW5kIHdoYXQgdGhleSBuZWVkXCIsIFwiMTQvMDQvMjAyM1wiLCBcIm1lZGl1bVwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJDcmVhdGUgcHJvZHVjdCByb2FkbWFwXCIsIFwiRGV2ZWxvcCBhIHJvYWRtYXAgZm9yIHRoZSBwcm9kdWN0IHRvIGd1aWRlIGZ1dHVyZSBkZXZlbG9wbWVudCBhbmQgcHJpb3JpdGl6ZSBmZWF0dXJlc1wiLCBcIjE1LzA0LzIwMjNcIiwgXCJoaWdoXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIlBlcmZvcm0gc2VjdXJpdHkgYXVkaXRcIiwgXCJDb25kdWN0IGEgc2VjdXJpdHkgYXVkaXQgb2YgdGhlIHdlYnNpdGUgdG8gaWRlbnRpZnkgdnVsbmVyYWJpbGl0aWVzIGFuZCBpbXBsZW1lbnQgZml4ZXNcIiwgXCIxNi8wNC8yMDIzXCIsIFwiaGlnaFwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJJbXByb3ZlIHVzZXIgaW50ZXJmYWNlXCIsIFwiUmVkZXNpZ24gdGhlIHVzZXIgaW50ZXJmYWNlIHRvIGltcHJvdmUgdXNlciBleHBlcmllbmNlIGFuZCBtYWtlIHRoZSB3ZWJzaXRlIG1vcmUgaW50dWl0aXZlIHRvIHVzZVwiLCBcIjE3LzA0LzIwMjNcIiwgXCJtZWRpdW1cIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpXG4gICAgXTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gc2V0dXBEZWZhdWx0UHJvamVjdChleGFtcGxlVG9kb3MpO1xuXG4gICAgY29uc3QgdG9kb3NTZXQxID0gZXhhbXBsZVRvZG9zLnNsaWNlKDAsIDYpO1xuICAgIGNvbnN0IHRvZG9zU2V0MiA9IGV4YW1wbGVUb2Rvcy5zbGljZSg2LCAxMSk7XG4gICAgY29uc3QgdG9kb3NTZXQzID0gZXhhbXBsZVRvZG9zLnNsaWNlKDExKTtcbiAgXG4gICAgc2V0dXBFeGFtcGxlUHJvamVjdChcIldlYnNpdGUgUmVkZXNpZ25cIiwgdG9kb3NTZXQxKTtcbiAgICBzZXR1cEV4YW1wbGVQcm9qZWN0KFwiU2VydmVyIE9wdGltaXphdGlvblwiLCB0b2Rvc1NldDIpO1xuICAgIHNldHVwRXhhbXBsZVByb2plY3QoXCJQcm9kdWN0IERldmVsb3BtZW50XCIsIHRvZG9zU2V0Myk7XG5cblxuICAgIFxuXG4gICAgcmV0dXJuIGRlZmF1bHRQcm9qZWN0O1xuICAgIFxufTtcblxuXG5cbmZ1bmN0aW9uIHNldHVwRXhhbXBsZVByb2plY3QodGl0bGUsIHRvZG9TZXQpe1xuXG4gICAgY29uc3QgdG9kb0xpc3QgPSB0b2RvTGlzdE1vZHVsZSgpO1xuICAgIHRvZG9MaXN0LnNldFRvZG9zKHRvZG9TZXQpO1xuXG4gICAgY29uc3QgdGhlUHJvamVjdCA9IHByb2plY3QodGl0bGUsIGdsb2JhbFByb2plY3RDb3VudGVyKyspO1xuICAgIHRoZVByb2plY3Quc2V0VG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIG15UHJvamVjdHMuYWRkUHJvamVjdCh0aGVQcm9qZWN0KTtcblxufTtcblxuXG5mdW5jdGlvbiBzZXR1cERlZmF1bHRQcm9qZWN0KHRvZG9TZXQpe1xuXG4gICAgY29uc3QgZGVmYXVsdExpc3QgPSB0b2RvTGlzdE1vZHVsZSgpO1xuICAgIGRlZmF1bHRMaXN0LnNldFRvZG9zKHRvZG9TZXQpO1xuXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0KFwiQWxsIFRhc2tzXCIsIGdsb2JhbFByb2plY3RDb3VudGVyKyspO1xuXG4gICAgZGVmYXVsdFByb2plY3Quc2V0VG9kb0xpc3QoZGVmYXVsdExpc3QpO1xuXG4gICAgcmV0dXJuIGRlZmF1bHRQcm9qZWN0O1xufTtcblxuLy8gZnVuY3Rpb24gYWRkVG9kb1RvUHJvamVjdCh0b2RvLCBwcm9qZWN0KXtcbi8vICAgICBwcm9qZWN0LmdldFRvZG9MaXN0KCkuYWRkVG9kbyh0b2RvKTtcbi8vIH07XG5cbi8vIGZ1bmN0aW9uIHJlbW92ZVRvZG9mcm9tUHJvamVjdCh0b2RvLCBwcm9qZWN0KXtcbi8vICAgICBwcm9qZWN0LmdldFRvZG9MaXN0KCkucmVtb3ZlVG9kbyh0b2RvKTtcbi8vIH07XG5cbiIsImV4cG9ydCB7bXlQcm9qZWN0c307XG5cbmNvbnN0IG15UHJvamVjdHMgPSAoKCkgPT4ge1xuICBsZXQgcHJvamVjdExpc3QgPSBbXTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdExpc3QuaW5kZXhPZihwcm9qZWN0KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdExpc3Q7XG4gIH07XG5cbiAgY29uc3Qgc2V0UHJvamVjdExpc3QgPSAobmV3UHJvamVjdExpc3QpID0+IHtcbiAgICBwcm9qZWN0TGlzdCA9IG5ld1Byb2plY3RMaXN0O1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RCeUlkID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIGdldFByb2plY3RMaXN0KCkuZmluZChwcm9qZWN0ID0+IHByb2plY3QuZ2V0SWQoKSA9PT0gaWQpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RCeVRvZG9JZCA9IChpZCkgPT4ge1xuICAgIHJldHVybiBnZXRQcm9qZWN0TGlzdCgpLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmdldFRvZG9MaXN0KCkuZ2V0VG9kb0J5SWQoaWQpICE9IHVuZGVmaW5lZCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgZ2V0UHJvamVjdExpc3QsXG4gICAgc2V0UHJvamVjdExpc3QsXG4gICAgZ2V0UHJvamVjdEJ5SWQsXG4gICAgZ2V0UHJvamVjdEJ5VG9kb0lkLFxuICB9O1xufSkoKTtcbiAgIiwiZXhwb3J0IHtwcm9qZWN0fTtcbmltcG9ydCB7IHRvZG9MaXN0TW9kdWxlIH0gZnJvbSBcIi4vdG9Eb0xpc3RPYmplY3RcIjtcblxuY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgaWQpID0+IHtcbiAgbGV0IHRvZG9MaXN0ID0gdG9kb0xpc3RNb2R1bGUoKTtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4gdGl0bGUgPSBuZXdUaXRsZTtcblxuICBjb25zdCBnZXRUb2RvTGlzdCA9ICgpID0+IHRvZG9MaXN0O1xuICBjb25zdCBzZXRUb2RvTGlzdCA9IChuZXdUb2RvTGlzdCkgPT4gdG9kb0xpc3QgPSBuZXdUb2RvTGlzdDtcblxuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuXG4gIHJldHVybiB7IGdldFRpdGxlLCBzZXRUaXRsZSwgZ2V0VG9kb0xpc3QsIHNldFRvZG9MaXN0LCBnZXRJZCB9O1xufTtcblxuICBcblxuXG4iLCJleHBvcnQge3RvZG9MaXN0TW9kdWxlfTtcblxuY29uc3QgdG9kb0xpc3RNb2R1bGUgPSAoKSA9PiB7XG4gIGxldCB0b2RvcyA9IFtdO1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG9zLnB1c2godG9kbyk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0b2Rvcy5pbmRleE9mKHRvZG8pO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRvZG9zO1xuICB9O1xuXG4gIGNvbnN0IHNldFRvZG9zID0gKG5ld1RvZG9zKSA9PiB7XG4gICAgdG9kb3MgPSBuZXdUb2RvcztcbiAgfTtcblxuICBjb25zdCBnZXRUb2RvQnlJZCA9IChpZCkgPT4ge1xuICAgIHJldHVybiBnZXRUb2RvcygpLmZpbmQodG9kbyA9PiB0b2RvLmdldElkKCkgPT09IGlkKTtcbiAgfTtcblxuICBjb25zdCBoYXNUb2RvID0gKHRvZG8pID0+IHtcbiAgICByZXR1cm4gdG9kb3MuaW5jbHVkZXModG9kbyk7XG4gIH07XG5cbiAgcmV0dXJuIHsgYWRkVG9kbywgcmVtb3ZlVG9kbywgZ2V0VG9kb3MsIHNldFRvZG9zLCBnZXRUb2RvQnlJZCwgaGFzVG9kbyB9O1xufTtcbiIsImV4cG9ydCB7dG9kb307XG5cbmNvbnN0IHRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNDb21wbGV0ZSwgaWQpID0+IHtcbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZDtcbiAgXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB0aXRsZSA9IG5ld1RpdGxlO1xuICBcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIFxuICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gZHVlRGF0ZTtcbiAgY29uc3Qgc2V0RHVlRGF0ZSA9IChuZXdEdWVEYXRlKSA9PiBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgXG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG4gIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICBcbiAgY29uc3QgZ2V0SXNDb21wbGV0ZSA9ICgpID0+IGlzQ29tcGxldGU7XG4gIGNvbnN0IHNldElzQ29tcGxldGUgPSAobmV3SXNDb21wbGV0ZSkgPT4gaXNDb21wbGV0ZSA9IG5ld0lzQ29tcGxldGU7XG4gIFxuICByZXR1cm4ge1xuICAgIGdldElkLFxuICAgIGdldFRpdGxlLFxuICAgIHNldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIHNldERlc2NyaXB0aW9uLFxuICAgIGdldER1ZURhdGUsXG4gICAgc2V0RHVlRGF0ZSxcbiAgICBnZXRQcmlvcml0eSxcbiAgICBzZXRQcmlvcml0eSxcbiAgICBnZXRJc0NvbXBsZXRlLFxuICAgIHNldElzQ29tcGxldGVcbiAgfTtcbn07XG5cbiAgIiwiaW1wb3J0IHsgZ2VuZXJhdGVTaWRlYmFyIH0gZnJvbSBcIi4vR2VuZXJhdGVET00vc2lkZWJhclwiO1xuaW1wb3J0IHsgc2V0dXBJbml0YWxQcm9qZWN0cyB9IGZyb20gXCIuL2FwcExvZ2ljL2luaXRpYWxTZXR1cFwiO1xuaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gXCIuL2FwcExvZ2ljL2luaXRpYWxTZXR1cFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVNYWluQ29udGVudCB9IGZyb20gXCIuL0dlbmVyYXRlRE9NL21haW5Db250ZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0UHJvamVjdCB9O1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBhY3RpdmF0ZVByb2plY3RGb3JtRXZlbnRMaXN0ZW5lcnMgfSBmcm9tICcuL0dlbmVyYXRlRE9NL2NyZWF0ZU5ld1Byb2plY3RGb3JtLmpzJztcbmltcG9ydCB7IGFjdGl2YXRlVG9kb0Zvcm1FdmVudExpc3RlbmVycyB9IGZyb20gXCIuL0dlbmVyYXRlRE9NL2NyZWF0ZU5ld1RvZG9Gb3JtXCI7XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ3VycmVudFBhZ2UoKXtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lciA+IDpub3QoLmxlZnRQYW5lbCknKTtcbiAgICBodG1sLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH0pO1xufTtcblxuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IHNldHVwSW5pdGFsUHJvamVjdHMoKTtcblxuZ2VuZXJhdGVTaWRlYmFyKCk7XG5cbmFjdGl2YXRlUHJvamVjdEZvcm1FdmVudExpc3RlbmVycygpO1xuXG5nZW5lcmF0ZU1haW5Db250ZW50KGRlZmF1bHRQcm9qZWN0KTtcblxuYWN0aXZhdGVUb2RvRm9ybUV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBsb2FkaW5nIGRlZmF1bHQgcHJvamVjdCBmcm9tIHNpZGViYXIgYnkgY2xpY2tpbmcgb24gaXRcblxuY29uc3QgZGVmYXVsdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFBhbmVsSGVhZGVyQnV0dG9uJyk7XG5cbmRlZmF1bHRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgcmVtb3ZlQ3VycmVudFBhZ2UoKTtcblxuICAgIGdlbmVyYXRlTWFpbkNvbnRlbnQoZGVmYXVsdFByb2plY3QpO1xufSk7XG5cblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIGNsaWNraW5nIG9uIHRoZSB0b2RvIGl0ZW0uXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=