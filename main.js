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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 20px;\n    font-weight: 500;\n    overflow-x: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.container {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 25rem 1fr;\n}\n\n.leftPanel {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n    border-right: 3px solid rgb(0, 0, 0);\n    font-size: 30px;\n    font-weight: 600;\n    position: fixed;\n    width: 25rem;\n}\n\n.leftPanel .welcome {\n    display: flex;\n    gap: 1rem;\n    \n    margin-top: 4rem;\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.leftPanel .welcomeMessage{\n    font-size: 30px;\n    font-weight: 400;\n}\n\n.leftPanel img {\n    width: 40px;\n    height: 40px;\n}\n\n.leftPanel > div {\n    margin-left: 2rem;\n}\n\n\n.leftPanel .welcome img {\n    width: 80px;\n    height: 80px;\n}\n\n.leftPanel .projectPanel {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.leftPanel .projectPanelHeaderButton {\n    border: none;\n    border-radius: 0.7rem;\n    background: white;\n    color: black;\n    padding: 1rem 1.5rem;\n    text-transform: capitalize;\n    font-size: 30px;\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n.leftPanel .projectPanel .addProjectButton{\n    border: none;\n    background-color: black;\n    border-radius: 10px;\n    width: 35px;\n    height: 35px;\n    cursor: pointer;\n}\n.leftPanel .projectPanel .addProjectButton img{\n    fill: black;\n    width: 100%;\n    height: 100%;\n}\n.leftPanel .projectList{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: 500px;\n    padding-bottom: 1px;\n    padding-top: 1px;\n}\n\n.leftPanel .projectList button{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 3px solid rgb(180, 180,);\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-radius: 0.7rem;\n    margin-top: 1rem;\n    margin-right: 2rem;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    color: black;\n    width: 20rem;\n    height: min-content;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    text-transform: capitalize;\n    font-weight: 600;\n    transition: transform 0.2s ease-in-out;\n    text-align: center;\n    margin-left: 2rem;\n    word-break: break-all;\n}\n\n.leftPanel .projectList button:hover{\n    transform: scale(1.02);\n}\n\n\n\n.leftPanel .settingsOption{\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    margin-left: 3rem;\n    margin-top: 0.5rem;\n}\n\n\n\n.mainContent{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-column: 2 / 3;\n}\n.mainContent .pageHeading {\n    font-size: 50px;\n    font-weight: 900;\n    color: #fff;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    width: 100%;\n    height: 15rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 3px solid rgb(0, 0, 0);\n    text-align: center;\n    overflow: hidden;\n    word-break: break-all;\n}\n\n.newTodoButton{\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 0.7rem;\n    margin-top: 1rem;\n    align-self: flex-end;\n    margin-right: 2rem;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    color: black;\n    width: 300px;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    text-transform: capitalize;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.todoPanel {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    width: 95%;\n    margin-top: 1rem;\n}\n.todoItem{\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    width: 100%;\n    justify-content: space-between;\n    height: 100%;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    background-color: #4dbdfa00;\n    border: none;\n    cursor: pointer;\n    transition: background-color 0.2s ease-in-out;\n    border-radius: 0.7rem;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.todoItem:hover {\n    background-color: #ffffff;\n    color: black;\n\n}\n\n.todoContainer{\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    background-color: #000000;\n}\n\n.priorityIconContainer{\n    display: flex;\n    justify-content: space-around;\n    gap: 3px;\n}\n.priorityIconContainer > img{\n    width: 20px;\n}\n\n.completeButton {\n    border-left: none;\n    display: flex;\n    align-items: center;\n    border-radius: 0.7rem;\n    border: none;\n    padding: 1rem 0.8rem;\n    background-color: #000000;\n}\n \n\n.completeButton:hover {\n    background-color: black;\n    color: black;\n\n}\n\n\n.newProjectForm{\n    grid-template-rows: 1fr 2fr 1fr;\n    grid-template-columns: 1fr 4fr;\n    row-gap: 1rem;\n    column-gap:1px; \n}\n\n.newTodoForm{\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n    grid-template-columns: 1fr 4fr;\n}\n\nform {\n    box-sizing: border-box;\n    background-color: #000000;\n    border-radius: 1rem;\n    width: 50rem;\n    display: grid;\n    row-gap: 1rem;\n    column-gap:1px; \n    grid-template-rows: 1fr 2fr  1fr;\n    grid-template-columns: 1fr 4fr;\n    padding-left: 2rem;\n    padding-right: 0;\n    padding-bottom: 2rem;\n    padding-top: 1rem;\n    border: 5px solid #22d3ee;\n    grid-auto-flow: row;\n    justify-items: center;\n    align-items: center;\n    max-width: 60rem;\n    position: absolute;\n    top: 10rem;\n    color: white;\n    border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1;\n    position: fixed;\n}\n.formHeader{\n    display: grid;\n    grid-template-columns: 1fr 5rem;\n    justify-content: center;\n    grid-column: 1/ -1;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n}\n.formHeader .cancelButton{\n    cursor: pointer;\n    background: none;\n    border: none;\n    padding: 0;\n}\n.formHeader .cancelButton:hover{\n    transform: scale(1.03);\n    cursor: pointer;\n}\n.formHeader > h3{\n    justify-self: center;\n    margin-left: 6rem;\n}\n\nform > h3{\n    font-size: 30px;\n    grid-column: 1 / -1;\n}\nform > label{\n    grid-column: 1 / 2;\n}\nlabel{\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n}\n\ninput, select {\n    background-color: #FFFFFF;\n    border: 2px solid #D6D9DC;\n    border-radius: 3px;\n    width: 90%;\n    padding: 7px;\n    font-size: 14px;\n    box-sizing: border-box;\n    outline-style: none;\n    box-shadow: none;\n    justify-self: start;\n    border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1;\n}\ninput:focus {\n    border: 0.1rem solid #4997eb;\n    box-shadow: 0 9px 10px -10px #888;\n}\ninput:invalid {\n    border: 0.1rem solid red;\n}\ninput[type='text'] {\n    max-width: 40rem;\n}\ninput[type='number'] {\n    max-width: 6rem;\n}\n\ninput[type='checkbox'] {\n    width: 4rem;\n    height: 2rem;\n    border: 2px solid #22d3ee;\n}\n\nform button{\n    width: 100px;\n    height: 60px;\n    border-radius: 20px;\n    background: #0f172a;\n    color: white;\n    border: 5px solid transparent;\n    font-size: 20px;\n    font-weight: 900;\n    cursor: pointer;\n    border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1;\n}\n\n\n\n.resetButton {\n    justify-self: end;\n    margin-right: 1rem;\n}\n\n.priorityLabel{\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n}\n.prioritySelection {\n    display: flex;\n    gap: 3rem;\n    \n}\n.prioritySelection  div{\n    display: flex;\n    gap: 1rem;\n    /* border: 2px solid white;\n    border-top: 2px solid white;\n    border-right: 2px solid white; */\n    padding: 0.5rem;\n}\n.prioritySelection .priorityIconContainer{\n    border: 2px solid white;\n    border-radius:15px;\n    padding: 0.5rem 1rem;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 20px;\n    font-weight: 500;\n    overflow-x: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.container {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 25rem 1fr;\n}\n\n.leftPanel {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n    border-right: 3px solid rgb(0, 0, 0);\n    font-size: 30px;\n    font-weight: 600;\n    position: fixed;\n    width: 25rem;\n}\n\n.leftPanel .welcome {\n    display: flex;\n    gap: 1rem;\n    \n    margin-top: 4rem;\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.leftPanel .welcomeMessage{\n    font-size: 30px;\n    font-weight: 400;\n}\n\n.leftPanel img {\n    width: 40px;\n    height: 40px;\n}\n\n.leftPanel > div {\n    margin-left: 2rem;\n}\n\n\n.leftPanel .welcome img {\n    width: 80px;\n    height: 80px;\n}\n\n.leftPanel .projectPanel {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.leftPanel .projectPanelHeaderButton {\n    border: none;\n    border-radius: 0.7rem;\n    background: white;\n    color: black;\n    padding: 1rem 1.5rem;\n    text-transform: capitalize;\n    font-size: 30px;\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n.leftPanel .projectPanel .addProjectButton{\n    border: none;\n    background-color: black;\n    border-radius: 10px;\n    width: 35px;\n    height: 35px;\n    cursor: pointer;\n}\n.leftPanel .projectPanel .addProjectButton img{\n    fill: black;\n    width: 100%;\n    height: 100%;\n}\n.leftPanel .projectList{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: 500px;\n    padding-bottom: 1px;\n    padding-top: 1px;\n}\n\n.leftPanel .projectList button{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 3px solid rgb(180, 180,);\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-radius: 0.7rem;\n    margin-top: 1rem;\n    margin-right: 2rem;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    color: black;\n    width: 20rem;\n    height: min-content;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    text-transform: capitalize;\n    font-weight: 600;\n    transition: transform 0.2s ease-in-out;\n    text-align: center;\n    margin-left: 2rem;\n    word-break: break-all;\n}\n\n.leftPanel .projectList button:hover{\n    transform: scale(1.02);\n}\n\n\n\n.leftPanel .settingsOption{\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    margin-left: 3rem;\n    margin-top: 0.5rem;\n}\n\n\n\n.mainContent{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-column: 2 / 3;\n}\n.mainContent .pageHeading {\n    font-size: 50px;\n    font-weight: 900;\n    color: #fff;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    width: 100%;\n    height: 15rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 3px solid rgb(0, 0, 0);\n    text-align: center;\n    overflow: hidden;\n    word-break: break-all;\n}\n\n.newTodoButton{\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 0.7rem;\n    margin-top: 1rem;\n    align-self: flex-end;\n    margin-right: 2rem;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    color: black;\n    width: 300px;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    text-transform: capitalize;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.todoPanel {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    width: 95%;\n    margin-top: 1rem;\n}\n.todoItem{\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    width: 100%;\n    justify-content: space-between;\n    height: 100%;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    background-color: #4dbdfa00;\n    border: none;\n    cursor: pointer;\n    transition: background-color 0.2s ease-in-out;\n    border-radius: 0.7rem;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.todoItem:hover {\n    background-color: #ffffff;\n    color: black;\n\n}\n\n.todoContainer{\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    background-color: #000000;\n}\n\n.priorityIconContainer{\n    display: flex;\n    justify-content: space-around;\n    gap: 3px;\n}\n.priorityIconContainer > img{\n    width: 20px;\n}\n\n.completeButton {\n    border-left: none;\n    display: flex;\n    align-items: center;\n    border-radius: 0.7rem;\n    border: none;\n    padding: 1rem 0.8rem;\n    background-color: #000000;\n}\n \n\n.completeButton:hover {\n    background-color: black;\n    color: black;\n\n}\n\n\n.newProjectForm{\n    grid-template-rows: 1fr 2fr 1fr;\n    grid-template-columns: 1fr 4fr;\n    row-gap: 1rem;\n    column-gap:1px; \n}\n\n.newTodoForm{\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n    grid-template-columns: 1fr 4fr;\n}\n\nform {\n    box-sizing: border-box;\n    background-color: #000000;\n    border-radius: 1rem;\n    width: 50rem;\n    display: grid;\n    row-gap: 1rem;\n    column-gap:1px; \n    grid-template-rows: 1fr 2fr  1fr;\n    grid-template-columns: 1fr 4fr;\n    padding-left: 2rem;\n    padding-right: 0;\n    padding-bottom: 2rem;\n    padding-top: 1rem;\n    border: 5px solid #22d3ee;\n    grid-auto-flow: row;\n    justify-items: center;\n    align-items: center;\n    max-width: 60rem;\n    position: absolute;\n    top: 10rem;\n    color: white;\n    border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1;\n    position: fixed;\n}\n.formHeader{\n    display: grid;\n    grid-template-columns: 1fr 5rem;\n    justify-content: center;\n    grid-column: 1/ -1;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n}\n.formHeader .cancelButton{\n    cursor: pointer;\n    background: none;\n    border: none;\n    padding: 0;\n}\n.formHeader .cancelButton:hover{\n    transform: scale(1.03);\n    cursor: pointer;\n}\n.formHeader > h3{\n    justify-self: center;\n    margin-left: 6rem;\n}\n\nform > h3{\n    font-size: 30px;\n    grid-column: 1 / -1;\n}\nform > label{\n    grid-column: 1 / 2;\n}\nlabel{\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n}\n\ninput, select {\n    background-color: #FFFFFF;\n    border: 2px solid #D6D9DC;\n    border-radius: 3px;\n    width: 90%;\n    padding: 7px;\n    font-size: 14px;\n    box-sizing: border-box;\n    outline-style: none;\n    box-shadow: none;\n    justify-self: start;\n    border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1;\n}\ninput:focus {\n    border: 0.1rem solid #4997eb;\n    box-shadow: 0 9px 10px -10px #888;\n}\ninput:invalid {\n    border: 0.1rem solid red;\n}\ninput[type='text'] {\n    max-width: 40rem;\n}\ninput[type='number'] {\n    max-width: 6rem;\n}\n\ninput[type='checkbox'] {\n    width: 4rem;\n    height: 2rem;\n    border: 2px solid #22d3ee;\n}\n\nform button{\n    width: 100px;\n    height: 60px;\n    border-radius: 20px;\n    background: #0f172a;\n    color: white;\n    border: 5px solid transparent;\n    font-size: 20px;\n    font-weight: 900;\n    cursor: pointer;\n    border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1;\n}\n\n\n\n.resetButton {\n    justify-self: end;\n    margin-right: 1rem;\n}\n\n.priorityLabel{\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n}\n.prioritySelection {\n    display: flex;\n    gap: 3rem;\n    \n}\n.prioritySelection  div{\n    display: flex;\n    gap: 1rem;\n    /* border: 2px solid white;\n    border-top: 2px solid white;\n    border-right: 2px solid white; */\n    padding: 0.5rem;\n}\n.prioritySelection .priorityIconContainer{\n    border: 2px solid white;\n    border-radius:15px;\n    padding: 0.5rem 1rem;\n}\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _appLogic_toDoListObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appLogic/toDoListObject.js */ "./src/appLogic/toDoListObject.js");
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainContent */ "./src/GenerateDOM/mainContent.js");






const todoForm = document.querySelector('.newTodoForm');
const html = document.querySelector('.container');

function makeTodoFormVisible() {
  todoForm.style.visibility = 'visible';
  html.style.filter = 'blur(5px)';
  projectSelectionFiller();
}

function activateTodoFormEventListeners() {
  const todoForm = document.querySelector('.newTodoForm');

  const cancelButton = document.querySelector('.newTodoForm .cancelButton');

  cancelButton.addEventListener('click', () => {
    todoForm.reset();
    todoForm.style.visibility = 'hidden';
    html.style.filter = 'none';
  });

  const submitButton = document.querySelector('.newTodoForm .submitButton');

  submitButton.addEventListener('click', () => {
    const todoTitle = document.querySelector('#todoTitle').value;
    const todoDueDate = document.querySelector('#todoDueDate').value;
    const todoPriority = radioButtonChecker(todoForm.elements.priority);

    console.log('we in');

    console.log(todoTitle, todoDueDate, todoPriority);

    const newTodo = (0,_appLogic_toDoObject__WEBPACK_IMPORTED_MODULE_0__.todo)(
      todoTitle,
      'Filler Description',
      todoDueDate,
      todoPriority,
      false,
      _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.globalTodoCounter
    );
    (0,_appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.incrementTodoCounter)();

    const selectedProjectId = document.querySelector('#projectSelect').value;
    console.log(selectedProjectId);
    const selectedProject = _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.myProjects.getProjectById(parseInt(selectedProjectId));
    selectedProject.getTodoList().addTodo(newTodo);

    (0,_mainContent__WEBPACK_IMPORTED_MODULE_3__.displayNewTodo)(newTodo);

    todoForm.reset();
    todoForm.style.visibility = 'hidden';
    html.style.filter = 'none';
  });
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

    todoPanel.appendChild(todoContainer);
};

function generateMainContent(project){
    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    generatePageHeading(mainContent, project.getTitle());

    generateCreateNewItemButton(mainContent);

    (0,_createNewTodoForm__WEBPACK_IMPORTED_MODULE_4__.activateTodoFormEventListeners)();

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
        // make a add new item form visible.
        (0,_createNewTodoForm__WEBPACK_IMPORTED_MODULE_4__.makeTodoFormVisible)();
    });
};

function generateTodoPanel(container, todoList) {
    const todoPanel = document.createElement('div');
    todoPanel.classList.add('todoPanel');

    todoList.getTodos().forEach(todoItem => {
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todoContainer');
        
        // adding the left info component of the todo item.
        addTodoItem(todoContainer, todoItem);

        // adding the right complete button.
        addTodoCompleteButton(todoContainer, todoItem);

        todoPanel.appendChild(todoContainer);
    });

    container.appendChild(todoPanel);
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
/* harmony import */ var _createNewProjectForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createNewProjectForm */ "./src/GenerateDOM/createNewProjectForm.js");
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

  (0,_createNewProjectForm_js__WEBPACK_IMPORTED_MODULE_5__.activateProjectFormEventListeners)();

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
/* harmony export */   "removeCurrentPage": () => (/* binding */ removeCurrentPage)
/* harmony export */ });
/* harmony import */ var _GenerateDOM_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenerateDOM/sidebar */ "./src/GenerateDOM/sidebar.js");
/* harmony import */ var _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appLogic/initialSetup */ "./src/appLogic/initialSetup.js");
/* harmony import */ var _GenerateDOM_mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GenerateDOM/mainContent */ "./src/GenerateDOM/mainContent.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







function removeCurrentPage(){
    const html = document.querySelectorAll('.container > :not(.leftPanel)');
    html.forEach((child) => {
        child.parentNode.removeChild(child);
    });
};


const defaultProject = (0,_appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.setupInitalProjects)();

(0,_GenerateDOM_sidebar__WEBPACK_IMPORTED_MODULE_0__.generateSidebar)();

(0,_GenerateDOM_mainContent__WEBPACK_IMPORTED_MODULE_2__.generateMainContent)(defaultProject);

// event listener for loading default project from sidebar by clicking on it

const defaultProjectButton = document.querySelector('.projectPanelHeaderButton');

defaultProjectButton.addEventListener('click', () => {

    removeCurrentPage();

    (0,_GenerateDOM_mainContent__WEBPACK_IMPORTED_MODULE_2__.generateMainContent)(defaultProject);
});


// event listener for adding a new todo item from side bar.




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

module.exports = __webpack_require__.p + "9ce57d393c2f39d257a2.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGlCQUFpQixnQkFBZ0IsR0FBRyxTQUFTLG9CQUFvQixtQkFBbUIsMEpBQTBKLHNCQUFzQix1QkFBdUIseUJBQXlCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsZ0JBQWdCLGtCQUFrQixtQkFBbUIsb0JBQW9CLHVDQUF1QyxHQUFHLGdCQUFnQixvQkFBb0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IsMkNBQTJDLHNCQUFzQix1QkFBdUIsc0JBQXNCLG1CQUFtQixHQUFHLHlCQUF5QixvQkFBb0IsZ0JBQWdCLDZCQUE2QixzQkFBc0IsdUJBQXVCLEdBQUcsK0JBQStCLHNCQUFzQix1QkFBdUIsR0FBRyxvQkFBb0Isa0JBQWtCLG1CQUFtQixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRywrQkFBK0Isa0JBQWtCLG1CQUFtQixHQUFHLDhCQUE4QixvQkFBb0Isb0NBQW9DLDBCQUEwQixzQkFBc0IsR0FBRyx3Q0FBd0MsbUJBQW1CLDRCQUE0Qix3QkFBd0IsbUJBQW1CLDJCQUEyQixpQ0FBaUMsc0JBQXNCLHVCQUF1QixvQkFBb0IsMEJBQTBCLHNCQUFzQixHQUFHLDZDQUE2QyxtQkFBbUIsOEJBQThCLDBCQUEwQixrQkFBa0IsbUJBQW1CLHNCQUFzQixHQUFHLGlEQUFpRCxrQkFBa0Isa0JBQWtCLG1CQUFtQixHQUFHLDBCQUEwQixvQkFBb0IsNkJBQTZCLG9DQUFvQywwQkFBMEIsdUJBQXVCLHlCQUF5Qix3QkFBd0IsMEJBQTBCLHVCQUF1QixHQUFHLG1DQUFtQyxvQkFBb0IsMEJBQTBCLDhCQUE4Qix1Q0FBdUMsdUJBQXVCLHdCQUF3Qix5QkFBeUIsNEJBQTRCLHVCQUF1Qix5QkFBeUIscUVBQXFFLG1CQUFtQixtQkFBbUIsMEJBQTBCLDJCQUEyQixzQkFBc0IsaUNBQWlDLHVCQUF1Qiw2Q0FBNkMseUJBQXlCLHdCQUF3Qiw0QkFBNEIsR0FBRyx5Q0FBeUMsNkJBQTZCLEdBQUcsbUNBQW1DLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLHdCQUF3Qix5QkFBeUIsR0FBRyxxQkFBcUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIseUJBQXlCLEdBQUcsNkJBQTZCLHNCQUFzQix1QkFBdUIsa0JBQWtCLHFFQUFxRSxrQkFBa0Isb0JBQW9CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDRDQUE0Qyx5QkFBeUIsdUJBQXVCLDRCQUE0QixHQUFHLG1CQUFtQixxQ0FBcUMsNEJBQTRCLHVCQUF1QiwyQkFBMkIseUJBQXlCLHFFQUFxRSxtQkFBbUIsbUJBQW1CLDJCQUEyQixzQkFBc0IsaUNBQWlDLHVCQUF1QixzQkFBc0IsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IsaUJBQWlCLHVCQUF1QixHQUFHLFlBQVksb0JBQW9CLDBCQUEwQixrQkFBa0Isa0JBQWtCLHFDQUFxQyxtQkFBbUIsMkJBQTJCLHNCQUFzQix1QkFBdUIseUJBQXlCLDRCQUE0QixnQ0FBZ0Msa0NBQWtDLG1CQUFtQixzQkFBc0Isb0RBQW9ELDRCQUE0QixvQ0FBb0MsaUNBQWlDLEdBQUcscUJBQXFCLGdDQUFnQyxtQkFBbUIsS0FBSyxtQkFBbUIscUNBQXFDLDBCQUEwQixvQkFBb0IscUNBQXFDLDBCQUEwQixrQkFBa0IsZ0NBQWdDLEdBQUcsMkJBQTJCLG9CQUFvQixvQ0FBb0MsZUFBZSxHQUFHLCtCQUErQixrQkFBa0IsR0FBRyxxQkFBcUIsd0JBQXdCLG9CQUFvQiwwQkFBMEIsNEJBQTRCLG1CQUFtQiwyQkFBMkIsZ0NBQWdDLEdBQUcsOEJBQThCLDhCQUE4QixtQkFBbUIsS0FBSyxzQkFBc0Isc0NBQXNDLHFDQUFxQyxvQkFBb0Isc0JBQXNCLEdBQUcsaUJBQWlCLDhDQUE4QyxxQ0FBcUMsR0FBRyxVQUFVLDZCQUE2QixnQ0FBZ0MsMEJBQTBCLG1CQUFtQixvQkFBb0Isb0JBQW9CLHNCQUFzQix1Q0FBdUMscUNBQXFDLHlCQUF5Qix1QkFBdUIsMkJBQTJCLHdCQUF3QixnQ0FBZ0MsMEJBQTBCLDRCQUE0QiwwQkFBMEIsdUJBQXVCLHlCQUF5QixpQkFBaUIsbUJBQW1CLG1FQUFtRSxzQkFBc0IsR0FBRyxjQUFjLG9CQUFvQixzQ0FBc0MsOEJBQThCLHlCQUF5QixrQkFBa0IsOEJBQThCLDBCQUEwQixHQUFHLDRCQUE0QixzQkFBc0IsdUJBQXVCLG1CQUFtQixpQkFBaUIsR0FBRyxrQ0FBa0MsNkJBQTZCLHNCQUFzQixHQUFHLG1CQUFtQiwyQkFBMkIsd0JBQXdCLEdBQUcsY0FBYyxzQkFBc0IsMEJBQTBCLEdBQUcsZUFBZSx5QkFBeUIsR0FBRyxRQUFRLHNCQUFzQix1QkFBdUIseUJBQXlCLEdBQUcsbUJBQW1CLGdDQUFnQyxnQ0FBZ0MseUJBQXlCLGlCQUFpQixtQkFBbUIsc0JBQXNCLDZCQUE2QiwwQkFBMEIsdUJBQXVCLDBCQUEwQixtRUFBbUUsR0FBRyxlQUFlLG1DQUFtQyx3Q0FBd0MsR0FBRyxpQkFBaUIsK0JBQStCLEdBQUcsc0JBQXNCLHVCQUF1QixHQUFHLHdCQUF3QixzQkFBc0IsR0FBRyw0QkFBNEIsa0JBQWtCLG1CQUFtQixnQ0FBZ0MsR0FBRyxnQkFBZ0IsbUJBQW1CLG1CQUFtQiwwQkFBMEIsMEJBQTBCLG1CQUFtQixvQ0FBb0Msc0JBQXNCLHVCQUF1QixzQkFBc0IsbUVBQW1FLEdBQUcsc0JBQXNCLHdCQUF3Qix5QkFBeUIsR0FBRyxtQkFBbUIsc0JBQXNCLHVCQUF1Qix5QkFBeUIsR0FBRyxzQkFBc0Isb0JBQW9CLGdCQUFnQixTQUFTLDBCQUEwQixvQkFBb0IsZ0JBQWdCLGlDQUFpQyxrQ0FBa0MscUNBQXFDLHdCQUF3QixHQUFHLDRDQUE0Qyw4QkFBOEIseUJBQXlCLDJCQUEyQixHQUFHLFdBQVcsZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFNBQVMsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcs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QiwyRUFBbUI7O0FBRTFDLHFFQUFlOztBQUVmLDZFQUFtQjs7QUFFbkI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSSw2RUFBbUI7QUFDdkIsQ0FBQzs7O0FBR0Q7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9HZW5lcmF0ZURPTS9jcmVhdGVOZXdQcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvR2VuZXJhdGVET00vY3JlYXRlTmV3VG9kb0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0dlbmVyYXRlRE9NL21haW5Db250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9HZW5lcmF0ZURPTS9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBMb2dpYy9pbml0aWFsU2V0dXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcExvZ2ljL215UHJvamVjdHNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcExvZ2ljL3Byb2plY3RPYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcExvZ2ljL3RvRG9MaXN0T2JqZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBMb2dpYy90b0RvT2JqZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVyZW0gMWZyO1xcbn1cXG5cXG4ubGVmdFBhbmVsIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMjVyZW07XFxufVxcblxcbi5sZWZ0UGFuZWwgLndlbGNvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIFxcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5sZWZ0UGFuZWwgLndlbGNvbWVNZXNzYWdle1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5sZWZ0UGFuZWwgaW1nIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmxlZnRQYW5lbCA+IGRpdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG5cXG5cXG4ubGVmdFBhbmVsIC53ZWxjb21lIGltZyB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbEhlYWRlckJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubGVmdFBhbmVsIC5wcm9qZWN0UGFuZWwgLmFkZFByb2plY3RCdXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxlZnRQYW5lbCAucHJvamVjdFBhbmVsIC5hZGRQcm9qZWN0QnV0dG9uIGltZ3tcXG4gICAgZmlsbDogYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RMaXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcXG4gICAgcGFkZGluZy10b3A6IDFweDtcXG59XFxuXFxuLmxlZnRQYW5lbCAucHJvamVjdExpc3QgYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDE4MCwgMTgwLCk7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNmZjZGZmLCAjMzNmNTlmKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4ubGVmdFBhbmVsIC5wcm9qZWN0TGlzdCBidXR0b246aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxufVxcblxcblxcblxcbi5sZWZ0UGFuZWwgLnNldHRpbmdzT3B0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcblxcblxcbi5tYWluQ29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG4ubWFpbkNvbnRlbnQgLnBhZ2VIZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzZmY2RmZiwgIzMzZjU5Zik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi5uZXdUb2RvQnV0dG9ue1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzZmY2RmZiwgIzMzZjU5Zik7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb1BhbmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4udG9kb0l0ZW17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGRiZGZhMDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG5cXG4udG9kb0l0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxufVxcblxcbi50b2RvQ29udGFpbmVye1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5wcmlvcml0eUljb25Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDNweDtcXG59XFxuLnByaW9yaXR5SWNvbkNvbnRhaW5lciA+IGltZ3tcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5jb21wbGV0ZUJ1dHRvbiB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMXJlbSAwLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcbiBcXG5cXG4uY29tcGxldGVCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cXG5cXG4ubmV3UHJvamVjdEZvcm17XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgcm93LWdhcDogMXJlbTtcXG4gICAgY29sdW1uLWdhcDoxcHg7IFxcbn1cXG5cXG4ubmV3VG9kb0Zvcm17XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgd2lkdGg6IDUwcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICByb3ctZ2FwOiAxcmVtO1xcbiAgICBjb2x1bW4tZ2FwOjFweDsgXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMjJkM2VlO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogNjByZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzM2Y1OWYsICM2ZmNkZmYpIDE7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLmZvcm1IZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMS8gLTE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvcm1IZWFkZXIgLmNhbmNlbEJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbi5mb3JtSGVhZGVyIC5jYW5jZWxCdXR0b246aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZvcm1IZWFkZXIgPiBoM3tcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiA2cmVtO1xcbn1cXG5cXG5mb3JtID4gaDN7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuZm9ybSA+IGxhYmVse1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcbmxhYmVse1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQsIHNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNENkQ5REM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzMzZjU5ZiwgIzZmY2RmZikgMTtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjNDk5N2ViO1xcbiAgICBib3gtc2hhZG93OiAwIDlweCAxMHB4IC0xMHB4ICM4ODg7XFxufVxcbmlucHV0OmludmFsaWQge1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZWQ7XFxufVxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIG1heC13aWR0aDogNDByZW07XFxufVxcbmlucHV0W3R5cGU9J251bWJlciddIHtcXG4gICAgbWF4LXdpZHRoOiA2cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzIyZDNlZTtcXG59XFxuXFxuZm9ybSBidXR0b257XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzNmNTlmLCAjNmZjZGZmKSAxO1xcbn1cXG5cXG5cXG5cXG4ucmVzZXRCdXR0b24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ucHJpb3JpdHlMYWJlbHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wcmlvcml0eVNlbGVjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgXFxufVxcbi5wcmlvcml0eVNlbGVjdGlvbiAgZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlOyAqL1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5wcmlvcml0eVNlbGVjdGlvbiAucHJpb3JpdHlJY29uQ29udGFpbmVye1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1KQUFtSjtJQUNuSixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTOztJQUVULGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdB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QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7O0FBRWI7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1Q7O29DQUVnQztJQUNoQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXJlbSAxZnI7XFxufVxcblxcbi5sZWZ0UGFuZWwge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRyZW07XFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAyNXJlbTtcXG59XFxuXFxuLmxlZnRQYW5lbCAud2VsY29tZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgXFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmxlZnRQYW5lbCAud2VsY29tZU1lc3NhZ2V7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmxlZnRQYW5lbCBpbWcge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4ubGVmdFBhbmVsID4gZGl2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcblxcblxcbi5sZWZ0UGFuZWwgLndlbGNvbWUgaW1nIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuLmxlZnRQYW5lbCAucHJvamVjdFBhbmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmxlZnRQYW5lbCAucHJvamVjdFBhbmVsSGVhZGVyQnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbCAuYWRkUHJvamVjdEJ1dHRvbntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubGVmdFBhbmVsIC5wcm9qZWN0UGFuZWwgLmFkZFByb2plY3RCdXR0b24gaW1ne1xcbiAgICBmaWxsOiBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLmxlZnRQYW5lbCAucHJvamVjdExpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xcbn1cXG5cXG4ubGVmdFBhbmVsIC5wcm9qZWN0TGlzdCBidXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMTgwLCAxODAsKTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM2ZmNkZmYsICMzM2Y1OWYpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi5sZWZ0UGFuZWwgLnByb2plY3RMaXN0IGJ1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG59XFxuXFxuXFxuXFxuLmxlZnRQYW5lbCAuc2V0dGluZ3NPcHRpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuXFxuXFxuLm1haW5Db250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcbi5tYWluQ29udGVudCAucGFnZUhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNmZjZGZmLCAjMzNmNTlmKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLm5ld1RvZG9CdXR0b257XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNmZjZGZmLCAjMzNmNTlmKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvUGFuZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbi50b2RvSXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZGJkZmEwMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxufVxcblxcbi50b2RvSXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG59XFxuXFxuLnRvZG9Db250YWluZXJ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLnByaW9yaXR5SWNvbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGdhcDogM3B4O1xcbn1cXG4ucHJpb3JpdHlJY29uQ29udGFpbmVyID4gaW1ne1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuLmNvbXBsZXRlQnV0dG9uIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxcmVtIDAuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuIFxcblxcbi5jb21wbGV0ZUJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxufVxcblxcblxcbi5uZXdQcm9qZWN0Rm9ybXtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICByb3ctZ2FwOiAxcmVtO1xcbiAgICBjb2x1bW4tZ2FwOjFweDsgXFxufVxcblxcbi5uZXdUb2RvRm9ybXtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufVxcblxcbmZvcm0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICB3aWR0aDogNTByZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHJvdy1nYXA6IDFyZW07XFxuICAgIGNvbHVtbi1nYXA6MXB4OyBcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyICAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMyMmQzZWU7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiA2MHJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzMzZjU5ZiwgIzZmY2RmZikgMTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG4uZm9ybUhlYWRlcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAxLyAtMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9ybUhlYWRlciAuY2FuY2VsQnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuLmZvcm1IZWFkZXIgLmNhbmNlbEJ1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZm9ybUhlYWRlciA+IGgze1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDZyZW07XFxufVxcblxcbmZvcm0gPiBoM3tcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbn1cXG5mb3JtID4gbGFiZWx7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxubGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5pbnB1dCwgc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0Q2RDlEQztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzNmNTlmLCAjNmZjZGZmKSAxO1xcbn1cXG5pbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICM0OTk3ZWI7XFxuICAgIGJveC1zaGFkb3c6IDAgOXB4IDEwcHggLTEwcHggIzg4ODtcXG59XFxuaW5wdXQ6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJlZDtcXG59XFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcXG59XFxuaW5wdXRbdHlwZT0nbnVtYmVyJ10ge1xcbiAgICBtYXgtd2lkdGg6IDZyZW07XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjJkM2VlO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbntcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMwZjE3MmE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzM2Y1OWYsICM2ZmNkZmYpIDE7XFxufVxcblxcblxcblxcbi5yZXNldEJ1dHRvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5wcmlvcml0eUxhYmVse1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnByaW9yaXR5U2VsZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBcXG59XFxuLnByaW9yaXR5U2VsZWN0aW9uICBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7ICovXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLnByaW9yaXR5U2VsZWN0aW9uIC5wcmlvcml0eUljb25Db250YWluZXJ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4uL2FwcExvZ2ljL3Byb2plY3RPYmplY3RcIjtcbmltcG9ydCB7IGdsb2JhbFByb2plY3RDb3VudGVyLCBpbmNyZW1lbnRQcm9qZWN0Q291bnRlciB9IGZyb20gXCIuLi9hcHBMb2dpYy9pbml0aWFsU2V0dXBcIjtcbmltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tIFwiLi4vYXBwTG9naWMvaW5pdGlhbFNldHVwXCI7XG5pbXBvcnQge2FkZFByb2plY3RUb1NpZGViYXJ9IGZyb20gJy4vc2lkZWJhcidcblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdEZvcm0nKTtcblxuY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVByb2plY3RGb3JtVmlzaWJsZSgpe1xuICAgIHByb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgaHRtbC5zdHlsZS5maWx0ZXIgPSAnYmx1cig1cHgpJztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZVByb2plY3RGb3JtRXZlbnRMaXN0ZW5lcnMoKXtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0Rm9ybScpO1xuICBcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdEZvcm0gLmNhbmNlbEJ1dHRvbicpO1xuICBcbiAgXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIGh0bWwuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICAgIH0pO1xuICBcbiAgXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3RGb3JtIC5zdWJtaXRCdXR0b24nKTtcbiAgXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGU9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGUnKS52YWx1ZTtcbiAgXG4gICAgICAgIGNvbnNvbGUubG9nKCd3ZSBpbicpO1xuICBcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFRpdGxlKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QocHJvamVjdFRpdGxlLCBnbG9iYWxQcm9qZWN0Q291bnRlcik7XG4gICAgICAgIGluY3JlbWVudFByb2plY3RDb3VudGVyKCk7XG4gIFxuICAgICAgICBteVByb2plY3RzLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gIFxuICAgICAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIGh0bWwuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICBcbiAgICAgICAgYWRkUHJvamVjdFRvU2lkZWJhcihuZXdQcm9qZWN0KTtcbiAgICBcbiAgICB9KTtcbn07XG5cblxuIiwiaW1wb3J0IHsgdG9kbyB9IGZyb20gXCIuLi9hcHBMb2dpYy90b0RvT2JqZWN0XCI7XG5pbXBvcnQgeyBnbG9iYWxUb2RvQ291bnRlciwgaW5jcmVtZW50VG9kb0NvdW50ZXIgfSBmcm9tIFwiLi4vYXBwTG9naWMvaW5pdGlhbFNldHVwXCI7XG5pbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSBcIi4uL2FwcExvZ2ljL2luaXRpYWxTZXR1cFwiO1xuaW1wb3J0IHsgYWRkVG9kb0l0ZW0gfSBmcm9tICcuLi9hcHBMb2dpYy90b0RvTGlzdE9iamVjdC5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5TmV3VG9kbyB9IGZyb20gXCIuL21haW5Db250ZW50XCI7XG5cbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1RvZG9Gb3JtJyk7XG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVRvZG9Gb3JtVmlzaWJsZSgpIHtcbiAgdG9kb0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgaHRtbC5zdHlsZS5maWx0ZXIgPSAnYmx1cig1cHgpJztcbiAgcHJvamVjdFNlbGVjdGlvbkZpbGxlcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVUb2RvRm9ybUV2ZW50TGlzdGVuZXJzKCkge1xuICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUb2RvRm9ybScpO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUb2RvRm9ybSAuY2FuY2VsQnV0dG9uJyk7XG5cbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZG9Gb3JtLnJlc2V0KCk7XG4gICAgdG9kb0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGh0bWwuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICB9KTtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VG9kb0Zvcm0gLnN1Ym1pdEJ1dHRvbicpO1xuXG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb1RpdGxlJykudmFsdWU7XG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0R1ZURhdGUnKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSByYWRpb0J1dHRvbkNoZWNrZXIodG9kb0Zvcm0uZWxlbWVudHMucHJpb3JpdHkpO1xuXG4gICAgY29uc29sZS5sb2coJ3dlIGluJyk7XG5cbiAgICBjb25zb2xlLmxvZyh0b2RvVGl0bGUsIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHkpO1xuXG4gICAgY29uc3QgbmV3VG9kbyA9IHRvZG8oXG4gICAgICB0b2RvVGl0bGUsXG4gICAgICAnRmlsbGVyIERlc2NyaXB0aW9uJyxcbiAgICAgIHRvZG9EdWVEYXRlLFxuICAgICAgdG9kb1ByaW9yaXR5LFxuICAgICAgZmFsc2UsXG4gICAgICBnbG9iYWxUb2RvQ291bnRlclxuICAgICk7XG4gICAgaW5jcmVtZW50VG9kb0NvdW50ZXIoKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RTZWxlY3QnKS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3RJZCk7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gbXlQcm9qZWN0cy5nZXRQcm9qZWN0QnlJZChwYXJzZUludChzZWxlY3RlZFByb2plY3RJZCkpO1xuICAgIHNlbGVjdGVkUHJvamVjdC5nZXRUb2RvTGlzdCgpLmFkZFRvZG8obmV3VG9kbyk7XG5cbiAgICBkaXNwbGF5TmV3VG9kbyhuZXdUb2RvKTtcblxuICAgIHRvZG9Gb3JtLnJlc2V0KCk7XG4gICAgdG9kb0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGh0bWwuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIHByb2plY3RTZWxlY3Rpb25GaWxsZXIoKXtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RTZWxlY3QnKTtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuICAgIG15UHJvamVjdHMuZ2V0UHJvamVjdExpc3QoKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHtpZDogcHJvamVjdC5nZXRJZCgpLCB0aXRsZTogcHJvamVjdC5nZXRUaXRsZSgpfSlcbiAgICB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3RMaXN0W2ldLmlkO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdFtpXS50aXRsZTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH07XG59O1xuXG5cbmZ1bmN0aW9uIHJhZGlvQnV0dG9uQ2hlY2tlcihyYWRpb3Mpe1xuICAgIGxldCBzZWxlY3RlZFZhbHVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyYWRpb3NbaV0uY2hlY2tlZCkge1xuICAgICAgICBzZWxlY3RlZFZhbHVlID0gcmFkaW9zW2ldLnZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkVmFsdWU7XG59OyIsImltcG9ydCBwcmlvcml0eVNWRyBmcm9tICcuLi9zdmcvcHJpb3JpdHlTVkdIaWdoLnBuZyc7XG5cbmltcG9ydCBwcm9ncmVzc0ljb25Db21wbGV0ZSBmcm9tICcuLi9zdmcvcHJvZ3Jlc3NJY29uQ29tcGxldGUucG5nJztcbmltcG9ydCBwcm9ncmVzc0ljb25VbmZpbmlzaGVkIGZyb20gJy4uL3N2Zy9wcm9ncmVzc0ljb25VbmZpbmlzaGVkLnBuZyc7XG5cbmltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tIFwiLi4vYXBwTG9naWMvaW5pdGlhbFNldHVwXCI7XG5cbmltcG9ydCB7IG1ha2VUb2RvRm9ybVZpc2libGUsIGFjdGl2YXRlVG9kb0Zvcm1FdmVudExpc3RlbmVycyB9IGZyb20gJy4vY3JlYXRlTmV3VG9kb0Zvcm0nO1xuXG5leHBvcnQge2dlbmVyYXRlTWFpbkNvbnRlbnR9O1xuXG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU5ld1RvZG8odG9kbyl7XG4gICAgY29uc3QgdG9kb1BhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9QYW5lbCcpO1xuXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb0NvbnRhaW5lcicpO1xuICAgIFxuICAgIC8vIGFkZGluZyB0aGUgbGVmdCBpbmZvIGNvbXBvbmVudCBvZiB0aGUgdG9kbyBpdGVtLlxuICAgIGFkZFRvZG9JdGVtKHRvZG9Db250YWluZXIsIHRvZG8pO1xuXG4gICAgLy8gYWRkaW5nIHRoZSByaWdodCBjb21wbGV0ZSBidXR0b24uXG4gICAgYWRkVG9kb0NvbXBsZXRlQnV0dG9uKHRvZG9Db250YWluZXIsIHRvZG8pO1xuXG4gICAgdG9kb1BhbmVsLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVNYWluQ29udGVudChwcm9qZWN0KXtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW5Db250ZW50Jyk7XG5cbiAgICBnZW5lcmF0ZVBhZ2VIZWFkaW5nKG1haW5Db250ZW50LCBwcm9qZWN0LmdldFRpdGxlKCkpO1xuXG4gICAgZ2VuZXJhdGVDcmVhdGVOZXdJdGVtQnV0dG9uKG1haW5Db250ZW50KTtcblxuICAgIGFjdGl2YXRlVG9kb0Zvcm1FdmVudExpc3RlbmVycygpO1xuXG4gICAgZ2VuZXJhdGVUb2RvUGFuZWwobWFpbkNvbnRlbnQsIHByb2plY3QuZ2V0VG9kb0xpc3QoKSk7XG5cbiAgICBodG1sLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbn07XG5cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVBhZ2VIZWFkaW5nKGNvbnRhaW5lciwgdGl0bGUpe1xuICAgIGNvbnN0IHBhZ2VIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncGFnZUhlYWRpbmcnKTtcblxuICAgIHBhZ2VIZWFkaW5nLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUhlYWRpbmcpO1xufTtcblxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ3JlYXRlTmV3SXRlbUJ1dHRvbihjb250YWluZXIpe1xuICAgIGNvbnN0IG5ld0l0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG5cbiAgICBuZXdJdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ld1RvZG9CdXR0b24nKTtcblxuICAgIG5ld0l0ZW1CdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIG5ldyBpdGVtJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SXRlbUJ1dHRvbik7XG5cbiAgICBhY3RpdmF0ZUNyZWF0ZU5ld0l0ZW1CdXR0b25MaXN0ZW5lcihuZXdJdGVtQnV0dG9uKTtcbn07XG5cbmZ1bmN0aW9uIGFjdGl2YXRlQ3JlYXRlTmV3SXRlbUJ1dHRvbkxpc3RlbmVyKG5ld0l0ZW1CdXR0b24pe1xuICAgIG5ld0l0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIG1ha2UgYSBhZGQgbmV3IGl0ZW0gZm9ybSB2aXNpYmxlLlxuICAgICAgICBtYWtlVG9kb0Zvcm1WaXNpYmxlKCk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRvZG9QYW5lbChjb250YWluZXIsIHRvZG9MaXN0KSB7XG4gICAgY29uc3QgdG9kb1BhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1BhbmVsLmNsYXNzTGlzdC5hZGQoJ3RvZG9QYW5lbCcpO1xuXG4gICAgdG9kb0xpc3QuZ2V0VG9kb3MoKS5mb3JFYWNoKHRvZG9JdGVtID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9Db250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZGluZyB0aGUgbGVmdCBpbmZvIGNvbXBvbmVudCBvZiB0aGUgdG9kbyBpdGVtLlxuICAgICAgICBhZGRUb2RvSXRlbSh0b2RvQ29udGFpbmVyLCB0b2RvSXRlbSk7XG5cbiAgICAgICAgLy8gYWRkaW5nIHRoZSByaWdodCBjb21wbGV0ZSBidXR0b24uXG4gICAgICAgIGFkZFRvZG9Db21wbGV0ZUJ1dHRvbih0b2RvQ29udGFpbmVyLCB0b2RvSXRlbSk7XG5cbiAgICAgICAgdG9kb1BhbmVsLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9QYW5lbCk7XG59O1xuXG5mdW5jdGlvbiBhZGRUb2RvSXRlbShjb250YWluZXIsIHRvZG8pIHtcbiAgICBjb25zdCB0b2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvSXRlbScpO1xuXG5cbiAgICBjb25zdCB0b2RvSUQgPSB0b2RvLmdldElkKCk7XG4gICAgY29uc3QgcGFyZW50UHJvamVjdCA9IG15UHJvamVjdHMuZ2V0UHJvamVjdEJ5VG9kb0lkKHRvZG9JRCk7XG4gICAgY29uc3QgcHJvamVjdElEID0gcGFyZW50UHJvamVjdC5nZXRJZCgpO1xuXG5cbiAgICB0b2RvQnV0dG9uLmRhdGFzZXQudG9kb2lkID0gdG9kb0lEO1xuICAgIHRvZG9CdXR0b24uZGF0YXNldC5wcm9qZWN0aWQgPSBwcm9qZWN0SUQ7XG5cbiAgICBhZGRQcmlvcml0eUljb24odG9kby5nZXRQcmlvcml0eSgpKTtcbiAgICBhZGRUb2RvVGl0bGUodG9kby5nZXRUaXRsZSgpKTtcbiAgICBhZGRUb2RvRGF0ZSh0b2RvLmdldER1ZURhdGUoKSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0J1dHRvbik7XG5cbiAgICBmdW5jdGlvbiBhZGRUb2RvRGF0ZShkYXRlKSB7XG4gICAgICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0ZScpO1xuICAgICAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGRhdGU7XG4gICAgICAgIHRvZG9CdXR0b24uYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkVG9kb1RpdGxlKHRpdGxlKSB7XG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG9UaXRsZScpO1xuICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgdG9kb0J1dHRvbi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRQcmlvcml0eUljb24ocHJpb3JpdHkpIHtcbiAgXG4gICAgICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgICAgIHRvZG9CdXR0b24uYXBwZW5kQ2hpbGQoYWRkSWNvbnMoMykpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICBcbiAgICAgICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICAgICAgdG9kb0J1dHRvbi5hcHBlbmRDaGlsZChhZGRJY29ucygyKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgIFxuICAgICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgICB0b2RvQnV0dG9uLmFwcGVuZENoaWxkKGFkZEljb25zKDEpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICBmdW5jdGlvbiBhZGRJY29ucyAoY291bnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlJY29uQ29udGFpbmVyJyk7XG4gICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3ZnSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICBzdmdJY29uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5SWNvbicpO1xuICAgICAgICAgICAgICBzdmdJY29uLnNyYyA9IHByaW9yaXR5U1ZHO1xuICAgICAgICAgICAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN2Z0ljb24pO1xuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBpY29uQ29udGFpbmVyO1xuICAgICAgICB9O1xuICAgIH07XG59O1xuXG5cblxuZnVuY3Rpb24gYWRkVG9kb0NvbXBsZXRlQnV0dG9uKGNvbnRhaW5lciwgdG9kbyl7XG5cbiAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICBjb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZUJ1dHRvbicpO1xuXG4gICAgY29uc3QgdG9kb0lEID0gdG9kby5nZXRJZCgpO1xuICAgIGNvbnN0IHBhcmVudFByb2plY3QgPSBteVByb2plY3RzLmdldFByb2plY3RCeVRvZG9JZCh0b2RvSUQpO1xuICAgIGNvbnN0IHByb2plY3RJRCA9IHBhcmVudFByb2plY3QuZ2V0SWQoKTtcbiAgICBcbiAgICBjb21wbGV0ZUJ1dHRvbi5kYXRhc2V0LnRvZG9pZCA9IHRvZG9JRDtcbiAgICBjb21wbGV0ZUJ1dHRvbi5kYXRhc2V0LnByb2plY3RpZCA9IHByb2plY3RJRDtcblxuICAgIGNvbnN0IGNvbXBsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbXBsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZUljb24nKTtcblxuICAgIHN3aXRjaCh0b2RvLmdldElzQ29tcGxldGUoKSl7XG4gICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgIGNvbXBsZXRlSWNvbi5zcmMgPSBwcm9ncmVzc0ljb25Db21wbGV0ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICBjb21wbGV0ZUljb24uc3JjID0gcHJvZ3Jlc3NJY29uVW5maW5pc2hlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH07XG5cblxuXG4gICAgY29tcGxldGVCdXR0b24uYXBwZW5kQ2hpbGQoY29tcGxldGVJY29uKTsgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTsgXG4gICAgYWN0aXZhdGVDb21wbGV0ZUJ1dHRvbkxpc3RlbmVyKGNvbXBsZXRlQnV0dG9uLCBjb21wbGV0ZUljb24sIHRvZG8pO1xufTtcblxuXG5mdW5jdGlvbiBhY3RpdmF0ZUNvbXBsZXRlQnV0dG9uTGlzdGVuZXIoY29tcGxldGVCdXR0b24sIGNvbXBsZXRlSWNvbiwgdG9kbyl7XG4gICAgXG4gICAgY29tcGxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NvbXBsZXRlID0gIXRvZG8uZ2V0SXNDb21wbGV0ZSgpO1xuICAgICAgICB0b2RvLnNldElzQ29tcGxldGUobmV3Q29tcGxldGUpO1xuXG4gICAgICAgIGNoYW5nZVRvZG9Db21wbGV0ZW5lc3MobmV3Q29tcGxldGUpO1xuICAgIH0pO1xuXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VUb2RvQ29tcGxldGVuZXNzKG5ld0NvbXBsZXRlKXtcblxuICAgICAgICBzd2l0Y2gobmV3Q29tcGxldGUpe1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIGNvbXBsZXRlSWNvbi5zcmMgPSBwcm9ncmVzc0ljb25Db21wbGV0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUljb24uc3JjID0gcHJvZ3Jlc3NJY29uVW5maW5pc2hlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICB9O1xuXG59OyIsImltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tICcuLi9hcHBMb2dpYy9pbml0aWFsU2V0dXAnO1xuaW1wb3J0IHByb2ZpbGVTVkcgZnJvbSAnLi4vc3ZnL3VzZXIucG5nJztcbmltcG9ydCBzZXR0aW5nc1NWRyBmcm9tICcuLi9zdmcvc2V0dGluZ3MucG5nJztcbmltcG9ydCBwcm9qZWN0UGx1c1NWRyBmcm9tICcuLi9zdmcvcGx1cy5wbmcnO1xuaW1wb3J0IHByb2plY3RIZWFkZXJTVkcgZnJvbSAnLi4vc3ZnL2xheWVycy5wbmcnO1xuXG5pbXBvcnQgeyBtYWtlUHJvamVjdEZvcm1WaXNpYmxlIH0gZnJvbSAnLi9jcmVhdGVOZXdQcm9qZWN0Rm9ybS5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZU1haW5Db250ZW50IH0gZnJvbSAnLi9tYWluQ29udGVudCc7XG5pbXBvcnQgeyByZW1vdmVDdXJyZW50UGFnZSB9IGZyb20gJy4uL2luZGV4LmpzJztcblxuaW1wb3J0IHsgYWN0aXZhdGVQcm9qZWN0Rm9ybUV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi9jcmVhdGVOZXdQcm9qZWN0Rm9ybSc7XG5leHBvcnQge2dlbmVyYXRlU2lkZWJhcn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0VG9TaWRlYmFyKHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcblxuICBjb25zdCBwcm9qZWN0SXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm9qZWN0SXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SXRlbUJ1dHRvbicpO1xuICBwcm9qZWN0SXRlbUJ1dHRvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgcHJvamVjdEl0ZW1CdXR0b24uZGF0YXNldC5wcm9qZWN0aWQgPSBwcm9qZWN0LmdldElkKCk7XG5cbiAgYWN0aXZhdGVQcm9qZWN0SXRlbUJ1dHRvbkxpc3RlbmVyKHByb2plY3RJdGVtQnV0dG9uKTtcblxuICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbUJ1dHRvbik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEZyb21TaWRlYmFyKHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbiAgY29uc3QgcHJvamVjdEl0ZW0gPSBwcm9qZWN0TGlzdC5xdWVyeVNlbGVjdG9yKGBsaVtkYXRhLXByb2plY3RpZD1cIiR7cHJvamVjdC5nZXRJZCgpfVwiXWApO1xuXG4gIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKHByb2plY3RJdGVtKTtcbn07XG5cbmNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU2lkZWJhcigpe1xuICBjb25zdCBsZWZ0UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGVmdFBhbmVsLmNsYXNzTGlzdC5hZGQoJ2xlZnRQYW5lbCcpO1xuXG4gIGdlbmVyYXRlV2VsY29tZVBhbmVsKGxlZnRQYW5lbCk7XG5cbiAgZ2VuZXJhdGVQcm9qZWN0UGFuZWwobGVmdFBhbmVsKTtcblxuICBhY3RpdmF0ZVByb2plY3RGb3JtRXZlbnRMaXN0ZW5lcnMoKTtcblxuICBnZW5lcmF0ZVNldHRpbmdzUGFuZWwobGVmdFBhbmVsKTtcbiAgXG4gIGh0bWwuYXBwZW5kQ2hpbGQobGVmdFBhbmVsKTtcbn07XG5cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVdlbGNvbWVQYW5lbChjb250YWluZXIpe1xuICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlbGNvbWUuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xuXG4gIGNvbnN0IGFkZFdlbGNvbWVJbWFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB3ZWxjb21lSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB3ZWxjb21lSW1hZ2Uuc3JjID0gcHJvZmlsZVNWRztcbiAgICB3ZWxjb21lSW1hZ2UuY2xhc3NMaXN0LmFkZCgnd2VsY29tZUltYWdlJyk7XG4gICAgcmV0dXJuIHdlbGNvbWVJbWFnZTtcbiAgfTtcblxuICBjb25zdCBhZGRXZWxjb21lUGFja2FnZSA9ICgpID0+IHtcbiAgICBjb25zdCB3ZWxjb21lUGFja2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlbGNvbWVQYWNrYWdlLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWVQYWNrYWdlJyk7XG4gICAgd2VsY29tZVBhY2thZ2UuYXBwZW5kQ2hpbGQoYWRkV2VsY29tZU1lc3NhZ2UoKSk7XG4gICAgd2VsY29tZVBhY2thZ2UuYXBwZW5kQ2hpbGQoYWRkV2VsY29tZU5hbWUoKSk7XG4gICAgcmV0dXJuIHdlbGNvbWVQYWNrYWdlO1xuICB9O1xuICBcbiAgY29uc3QgYWRkV2VsY29tZU1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2VsY29tZU1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWxjb21lTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lTWVzc2FnZScpO1xuICAgIHdlbGNvbWVNZXNzYWdlLnRleHRDb250ZW50ID0gJ1dlbGNvbWUsICc7XG4gICAgcmV0dXJuIHdlbGNvbWVNZXNzYWdlO1xuICB9O1xuXG4gIGNvbnN0IGFkZFdlbGNvbWVOYW1lID0gKCkgPT4ge1xuICAgICAgY29uc3Qgd2VsY29tZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB3ZWxjb21lTmFtZS5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lTmFtZScpO1xuICAgICAgd2VsY29tZU5hbWUudGV4dENvbnRlbnQgPSAnTGl1IEZhbmcnO1xuICAgICAgcmV0dXJuIHdlbGNvbWVOYW1lO1xuICB9O1xuICBcbiAgd2VsY29tZS5hcHBlbmRDaGlsZChhZGRXZWxjb21lSW1hZ2UoKSk7XG4gIHdlbGNvbWUuYXBwZW5kQ2hpbGQoYWRkV2VsY29tZVBhY2thZ2UoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcbn07XG5cbiAgXG5cbmZ1bmN0aW9uIGdlbmVyYXRlU2V0dGluZ3NQYW5lbChjb250YWluZXIpIHtcbiAgY29uc3Qgc2V0dGluZ3NPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2V0dGluZ3NPcHRpb24uY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3NPcHRpb24nKTtcblxuICBjb25zdCBzZXR0aW5nc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc2V0dGluZ3NJY29uLmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzSWNvbicpO1xuICBzZXR0aW5nc0ljb24uc3JjID0gc2V0dGluZ3NTVkc7XG5cbiAgY29uc3Qgc2V0dGluZ3NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc2V0dGluZ3NMYWJlbC5jbGFzc0xpc3QuYWRkKCdzZXR0aW5nc0xhYmVsJyk7XG4gIHNldHRpbmdzTGFiZWwudGV4dENvbnRlbnQgPSAnU2V0dGluZ3MnO1xuXG4gIHNldHRpbmdzT3B0aW9uLmFwcGVuZENoaWxkKHNldHRpbmdzSWNvbik7XG4gIHNldHRpbmdzT3B0aW9uLmFwcGVuZENoaWxkKHNldHRpbmdzTGFiZWwpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0dGluZ3NPcHRpb24pO1xufTtcblxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdFBhbmVsKGNvbnRhaW5lcil7XG4gIGNvbnN0IHByb2plY3RQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0UGFuZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdFBhbmVsJyk7XG5cbiAgYWRkUHJvamVjdFBhbmVsSGVhZGVyKHByb2plY3RQYW5lbCk7XG4gIGFkZFByb2plY3RMaXN0KHByb2plY3RQYW5lbCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RQYW5lbCk7XG59O1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0UGFuZWxIZWFkZXIoY29udGFpbmVyKSB7XG4gIGNvbnN0IGNyZWF0ZVByb2plY3RzQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdHNCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdFBhbmVsSGVhZGVyQnV0dG9uJyk7XG4gICAgcHJvamVjdHNCdXR0b24udGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIHJldHVybiBwcm9qZWN0c0J1dHRvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0c0ljb24gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJvamVjdHNJY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RQYW5lbFNWRycpO1xuICAgIHByb2plY3RzSWNvbi5zcmMgPSBwcm9qZWN0SGVhZGVyU1ZHO1xuICAgIHJldHVybiBwcm9qZWN0c0ljb247XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQWRkUHJvamVjdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG4gICAgY29uc3QgYWRkUHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBhZGRQcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0UGx1c1NWRycpO1xuICAgIGFkZFByb2plY3RJY29uLnNyYyA9IHByb2plY3RQbHVzU1ZHO1xuICAgIGFkZFByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEljb24pO1xuXG4gICAgYWN0aXZhdGVBZGRQcm9qZWN0QnV0dG9uTGlzdGVuZXIoYWRkUHJvamVjdEJ1dHRvbik7XG4gICAgcmV0dXJuIGFkZFByb2plY3RCdXR0b247XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdHNCdXR0b24gPSBjcmVhdGVQcm9qZWN0c0J1dHRvbigpO1xuICBjb25zdCBwcm9qZWN0c0ljb24gPSBjcmVhdGVQcm9qZWN0c0ljb24oKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGNyZWF0ZUFkZFByb2plY3RCdXR0b24oKTtcblxuICBjb250YWluZXIuYXBwZW5kKHByb2plY3RzSWNvbiwgcHJvamVjdHNCdXR0b24sIGFkZFByb2plY3RCdXR0b24pO1xufTtcblxuXG5mdW5jdGlvbiBhY3RpdmF0ZUFkZFByb2plY3RCdXR0b25MaXN0ZW5lcihhZGRQcm9qZWN0QnV0dG9uKXtcbiAgICBcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1ha2VQcm9qZWN0Rm9ybVZpc2libGUoKTtcbiAgfSk7XG59O1xuICBcbmZ1bmN0aW9uIGFkZFByb2plY3RMaXN0KGNvbnRhaW5lcil7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0Jyk7XG5cbiAgbXlQcm9qZWN0cy5nZXRQcm9qZWN0TGlzdCgpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgY29uc3QgcHJvamVjdEl0ZW1CdXR0b24gPSBjcmVhdGVQcm9qZWN0SXRlbUJ1dHRvbihwcm9qZWN0KTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbUJ1dHRvbik7XG4gIH0pO1xuXG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEl0ZW1CdXR0b24ocHJvamVjdCkge1xuICAgICAgY29uc3QgcHJvamVjdEl0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHByb2plY3RJdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJdGVtQnV0dG9uJyk7XG4gICAgICBwcm9qZWN0SXRlbUJ1dHRvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgICAgIHByb2plY3RJdGVtQnV0dG9uLmRhdGFzZXQucHJvamVjdGlkID0gcHJvamVjdC5nZXRJZCgpO1xuXG4gICAgICBhY3RpdmF0ZVByb2plY3RJdGVtQnV0dG9uTGlzdGVuZXIocHJvamVjdEl0ZW1CdXR0b24pO1xuICAgICAgcmV0dXJuIHByb2plY3RJdGVtQnV0dG9uO1xuICB9O1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG59O1xuXG5mdW5jdGlvbiBhY3RpdmF0ZVByb2plY3RJdGVtQnV0dG9uTGlzdGVuZXIocHJvamVjdEl0ZW1CdXR0b24pe1xuICBwcm9qZWN0SXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgcmVtb3ZlQ3VycmVudFBhZ2UoKTtcbiAgXG4gICAgICBjb25zdCBwcm9qZWN0SUQgPSBwYXJzZUludChwcm9qZWN0SXRlbUJ1dHRvbi5kYXRhc2V0LnByb2plY3RpZCk7XG4gICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ZWQgPSBteVByb2plY3RzLmdldFByb2plY3RCeUlkKHByb2plY3RJRCk7XG4gIFxuICAgICAgZ2VuZXJhdGVNYWluQ29udGVudChwcm9qZWN0U2VsZWN0ZWQpO1xuICB9KTtcbn07XG5cblxuXG5cbiIsImltcG9ydCB7IHRvZG9MaXN0TW9kdWxlIH0gZnJvbSBcIi4vdG9Eb0xpc3RPYmplY3RcIjtcbmltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLi90b0RvT2JqZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdE9iamVjdFwiO1xuaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gXCIuL215UHJvamVjdHNPYmplY3RcIjtcbmV4cG9ydCB7IG15UHJvamVjdHMgfTtcbmV4cG9ydCB7IGdsb2JhbFByb2plY3RDb3VudGVyLCBnbG9iYWxUb2RvQ291bnRlciB9O1xuZXhwb3J0IHsgc2V0dXBJbml0YWxQcm9qZWN0cyB9O1xuXG5sZXQgZ2xvYmFsUHJvamVjdENvdW50ZXIgPSAwO1xubGV0IGdsb2JhbFRvZG9Db3VudGVyID0gMDtcblxuZXhwb3J0IGNvbnN0IGluY3JlbWVudFByb2plY3RDb3VudGVyID0gKCkgPT4ge1xuICBnbG9iYWxQcm9qZWN0Q291bnRlcisrO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFByb2plY3RDb3VudGVyVmFsdWUgPSAoKSA9PiB7XG4gIHJldHVybiBnbG9iYWxQcm9qZWN0Q291bnRlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRUb2RvQ291bnRlciA9ICgpID0+IHtcbiAgZ2xvYmFsVG9kb0NvdW50ZXIrKztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUb2RvQ291bnRlclZhbHVlID0gKCkgPT4ge1xuICByZXR1cm4gZ2xvYmFsVG9kb0NvdW50ZXI7XG59O1xuXG5mdW5jdGlvbiBzZXR1cEluaXRhbFByb2plY3RzKCkge1xuXG4gICAgY29uc3QgZXhhbXBsZVRvZG9zID0gW1xuICAgICAgICB0b2RvKFwiVXBkYXRlIHdlYnNpdGUgZGVzaWduXCIsIFwiUmV2YW1wIHRoZSB3ZWJzaXRlIGxheW91dCBhbmQgbWFrZSBpdCBtb3JlIHVzZXItZnJpZW5kbHlcIiwgXCIwMS8wNC8yMDIzXCIsIFwiaGlnaFwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJPcHRpbWl6ZSBzZXJ2ZXIgcGVyZm9ybWFuY2VcIiwgXCJBbmFseXplIHNlcnZlciBsb2dzIGFuZCBvcHRpbWl6ZSBzZXJ2ZXIgc2V0dGluZ3MgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVwiLCBcIjAyLzA0LzIwMjNcIiwgXCJtZWRpdW1cIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiSW1wbGVtZW50IG5ldyBmZWF0dXJlXCIsIFwiQWRkIGEgbmV3IGZlYXR1cmUgdG8gdGhlIHdlYnNpdGUgdGhhdCBhbGxvd3MgdXNlcnMgdG8gc2F2ZSB0aGVpciBwcmVmZXJlbmNlc1wiLCBcIjAzLzA0LzIwMjNcIiwgXCJoaWdoXCIsIHRydWUsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiRGVidWcgcGF5bWVudCBnYXRld2F5XCIsIFwiRml4IGlzc3VlcyB3aXRoIHBheW1lbnQgZ2F0ZXdheSB0aGF0IGFyZSBwcmV2ZW50aW5nIGN1c3RvbWVycyBmcm9tIG1ha2luZyBwdXJjaGFzZXNcIiwgXCIwNC8wNC8yMDIzXCIsIFwiaGlnaFwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJXcml0ZSB1c2VyIGRvY3VtZW50YXRpb25cIiwgXCJDcmVhdGUgYSB1c2VyIGd1aWRlIHRvIGhlbHAgY3VzdG9tZXJzIHVzZSBvdXIgcHJvZHVjdCBtb3JlIGVmZmVjdGl2ZWx5XCIsIFwiMDUvMDQvMjAyM1wiLCBcImxvd1wiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJVcGRhdGUgcHJvZHVjdCBzcGVjaWZpY2F0aW9uc1wiLCBcIlVwZGF0ZSB0aGUgcHJvZHVjdCBzcGVjaWZpY2F0aW9ucyBkb2N1bWVudCB0byByZWZsZWN0IHJlY2VudCBjaGFuZ2VzXCIsIFwiMDYvMDQvMjAyM1wiLCBcIm1lZGl1bVwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJUZXN0IHdlYnNpdGUgb24gZGlmZmVyZW50IGRldmljZXNcIiwgXCJDaGVjayB3ZWJzaXRlIGZ1bmN0aW9uYWxpdHkgYW5kIGxheW91dCBvbiBkaWZmZXJlbnQgZGV2aWNlcyB0byBlbnN1cmUgY29tcGF0aWJpbGl0eVwiLCBcIjA3LzA0LzIwMjNcIiwgXCJsb3dcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiVXBkYXRlIHdlYnNpdGUgY29udGVudFwiLCBcIkFkZCBuZXcgY29udGVudCB0byB0aGUgd2Vic2l0ZSB0byBrZWVwIGl0IGZyZXNoIGFuZCBlbmdhZ2luZyBmb3IgdXNlcnNcIiwgXCIwOC8wNC8yMDIzXCIsIFwibWVkaXVtXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIkNyZWF0ZSBtYXJrZXRpbmcgY2FtcGFpZ25cIiwgXCJEZXZlbG9wIGEgbWFya2V0aW5nIGNhbXBhaWduIHRvIGluY3JlYXNlIGJyYW5kIGF3YXJlbmVzcyBhbmQgYXR0cmFjdCBuZXcgY3VzdG9tZXJzXCIsIFwiMDkvMDQvMjAyM1wiLCBcImhpZ2hcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiQ29uZHVjdCB1c2VyIHJlc2VhcmNoXCIsIFwiR2F0aGVyIGZlZWRiYWNrIGZyb20gdXNlcnMgdG8gaW1wcm92ZSB0aGUgcHJvZHVjdCBhbmQgYWRkcmVzcyB0aGVpciBuZWVkc1wiLCBcIjEwLzA0LzIwMjNcIiwgXCJtZWRpdW1cIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiSW1wcm92ZSBzaXRlIHNwZWVkXCIsIFwiT3B0aW1pemUgd2Vic2l0ZSBwZXJmb3JtYW5jZSB0byBpbXByb3ZlIHNpdGUgc3BlZWQgYW5kIHJlZHVjZSBwYWdlIGxvYWQgdGltZXNcIiwgXCIxMS8wNC8yMDIzXCIsIFwiaGlnaFwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJDcmVhdGUgdHJhaW5pbmcgbWF0ZXJpYWxzXCIsIFwiRGV2ZWxvcCB0cmFpbmluZyBtYXRlcmlhbHMgdG8gaGVscCBlbXBsb3llZXMgbGVhcm4gbmV3IHNraWxscyBhbmQgaW1wcm92ZSBwZXJmb3JtYW5jZVwiLCBcIjEyLzA0LzIwMjNcIiwgXCJsb3dcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiUmVzb2x2ZSBjdXN0b21lciBjb21wbGFpbnRzXCIsIFwiQWRkcmVzcyBjdXN0b21lciBjb21wbGFpbnRzIGFuZCByZXNvbHZlIGlzc3VlcyB0byBtYWludGFpbiBjdXN0b21lciBzYXRpc2ZhY3Rpb25cIiwgXCIxMy8wNC8yMDIzXCIsIFwiaGlnaFwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJJbXByb3ZlIHNlYXJjaCBmdW5jdGlvbmFsaXR5XCIsIFwiSW1wcm92ZSB0aGUgc2VhcmNoIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHdlYnNpdGUgdG8gbWFrZSBpdCBlYXNpZXIgZm9yIHVzZXJzIHRvIGZpbmQgd2hhdCB0aGV5IG5lZWRcIiwgXCIxNC8wNC8yMDIzXCIsIFwibWVkaXVtXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIkNyZWF0ZSBwcm9kdWN0IHJvYWRtYXBcIiwgXCJEZXZlbG9wIGEgcm9hZG1hcCBmb3IgdGhlIHByb2R1Y3QgdG8gZ3VpZGUgZnV0dXJlIGRldmVsb3BtZW50IGFuZCBwcmlvcml0aXplIGZlYXR1cmVzXCIsIFwiMTUvMDQvMjAyM1wiLCBcImhpZ2hcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiUGVyZm9ybSBzZWN1cml0eSBhdWRpdFwiLCBcIkNvbmR1Y3QgYSBzZWN1cml0eSBhdWRpdCBvZiB0aGUgd2Vic2l0ZSB0byBpZGVudGlmeSB2dWxuZXJhYmlsaXRpZXMgYW5kIGltcGxlbWVudCBmaXhlc1wiLCBcIjE2LzA0LzIwMjNcIiwgXCJoaWdoXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIkltcHJvdmUgdXNlciBpbnRlcmZhY2VcIiwgXCJSZWRlc2lnbiB0aGUgdXNlciBpbnRlcmZhY2UgdG8gaW1wcm92ZSB1c2VyIGV4cGVyaWVuY2UgYW5kIG1ha2UgdGhlIHdlYnNpdGUgbW9yZSBpbnR1aXRpdmUgdG8gdXNlXCIsIFwiMTcvMDQvMjAyM1wiLCBcIm1lZGl1bVwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlcilcbiAgICBdO1xuXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBzZXR1cERlZmF1bHRQcm9qZWN0KGV4YW1wbGVUb2Rvcyk7XG5cbiAgICBjb25zdCB0b2Rvc1NldDEgPSBleGFtcGxlVG9kb3Muc2xpY2UoMCwgNik7XG4gICAgY29uc3QgdG9kb3NTZXQyID0gZXhhbXBsZVRvZG9zLnNsaWNlKDYsIDExKTtcbiAgICBjb25zdCB0b2Rvc1NldDMgPSBleGFtcGxlVG9kb3Muc2xpY2UoMTEpO1xuICBcbiAgICBzZXR1cEV4YW1wbGVQcm9qZWN0KFwiV2Vic2l0ZSBSZWRlc2lnblwiLCB0b2Rvc1NldDEpO1xuICAgIHNldHVwRXhhbXBsZVByb2plY3QoXCJTZXJ2ZXIgT3B0aW1pemF0aW9uXCIsIHRvZG9zU2V0Mik7XG4gICAgc2V0dXBFeGFtcGxlUHJvamVjdChcIlByb2R1Y3QgRGV2ZWxvcG1lbnRcIiwgdG9kb3NTZXQzKTtcblxuXG4gICAgXG5cbiAgICByZXR1cm4gZGVmYXVsdFByb2plY3Q7XG4gICAgXG59O1xuXG5cblxuZnVuY3Rpb24gc2V0dXBFeGFtcGxlUHJvamVjdCh0aXRsZSwgdG9kb1NldCl7XG5cbiAgICBjb25zdCB0b2RvTGlzdCA9IHRvZG9MaXN0TW9kdWxlKCk7XG4gICAgdG9kb0xpc3Quc2V0VG9kb3ModG9kb1NldCk7XG5cbiAgICBjb25zdCB0aGVQcm9qZWN0ID0gcHJvamVjdCh0aXRsZSwgZ2xvYmFsUHJvamVjdENvdW50ZXIrKyk7XG4gICAgdGhlUHJvamVjdC5zZXRUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgbXlQcm9qZWN0cy5hZGRQcm9qZWN0KHRoZVByb2plY3QpO1xuXG59O1xuXG5cbmZ1bmN0aW9uIHNldHVwRGVmYXVsdFByb2plY3QodG9kb1NldCl7XG5cbiAgICBjb25zdCBkZWZhdWx0TGlzdCA9IHRvZG9MaXN0TW9kdWxlKCk7XG4gICAgZGVmYXVsdExpc3Quc2V0VG9kb3ModG9kb1NldCk7XG5cbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3QoXCJBbGwgVGFza3NcIiwgZ2xvYmFsUHJvamVjdENvdW50ZXIrKyk7XG5cbiAgICBkZWZhdWx0UHJvamVjdC5zZXRUb2RvTGlzdChkZWZhdWx0TGlzdCk7XG5cbiAgICByZXR1cm4gZGVmYXVsdFByb2plY3Q7XG59O1xuXG4vLyBmdW5jdGlvbiBhZGRUb2RvVG9Qcm9qZWN0KHRvZG8sIHByb2plY3Qpe1xuLy8gICAgIHByb2plY3QuZ2V0VG9kb0xpc3QoKS5hZGRUb2RvKHRvZG8pO1xuLy8gfTtcblxuLy8gZnVuY3Rpb24gcmVtb3ZlVG9kb2Zyb21Qcm9qZWN0KHRvZG8sIHByb2plY3Qpe1xuLy8gICAgIHByb2plY3QuZ2V0VG9kb0xpc3QoKS5yZW1vdmVUb2RvKHRvZG8pO1xuLy8gfTtcblxuIiwiZXhwb3J0IHtteVByb2plY3RzfTtcblxuY29uc3QgbXlQcm9qZWN0cyA9ICgoKSA9PiB7XG4gIGxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0TGlzdC5pbmRleE9mKHByb2plY3QpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0TGlzdDtcbiAgfTtcblxuICBjb25zdCBzZXRQcm9qZWN0TGlzdCA9IChuZXdQcm9qZWN0TGlzdCkgPT4ge1xuICAgIHByb2plY3RMaXN0ID0gbmV3UHJvamVjdExpc3Q7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdEJ5SWQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gZ2V0UHJvamVjdExpc3QoKS5maW5kKHByb2plY3QgPT4gcHJvamVjdC5nZXRJZCgpID09PSBpZCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdEJ5VG9kb0lkID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIGdldFByb2plY3RMaXN0KCkuZmluZChwcm9qZWN0ID0+IHByb2plY3QuZ2V0VG9kb0xpc3QoKS5nZXRUb2RvQnlJZChpZCkgIT0gdW5kZWZpbmVkKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0TGlzdCxcbiAgICBzZXRQcm9qZWN0TGlzdCxcbiAgICBnZXRQcm9qZWN0QnlJZCxcbiAgICBnZXRQcm9qZWN0QnlUb2RvSWQsXG4gIH07XG59KSgpO1xuICAiLCJleHBvcnQge3Byb2plY3R9O1xuaW1wb3J0IHsgdG9kb0xpc3RNb2R1bGUgfSBmcm9tIFwiLi90b0RvTGlzdE9iamVjdFwiO1xuXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlLCBpZCkgPT4ge1xuICBsZXQgdG9kb0xpc3QgPSB0b2RvTGlzdE1vZHVsZSgpO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB0aXRsZSA9IG5ld1RpdGxlO1xuXG4gIGNvbnN0IGdldFRvZG9MaXN0ID0gKCkgPT4gdG9kb0xpc3Q7XG4gIGNvbnN0IHNldFRvZG9MaXN0ID0gKG5ld1RvZG9MaXN0KSA9PiB0b2RvTGlzdCA9IG5ld1RvZG9MaXN0O1xuXG4gIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG5cbiAgcmV0dXJuIHsgZ2V0VGl0bGUsIHNldFRpdGxlLCBnZXRUb2RvTGlzdCwgc2V0VG9kb0xpc3QsIGdldElkIH07XG59O1xuXG4gIFxuXG5cbiIsImV4cG9ydCB7dG9kb0xpc3RNb2R1bGV9O1xuXG5jb25zdCB0b2RvTGlzdE1vZHVsZSA9ICgpID0+IHtcbiAgbGV0IHRvZG9zID0gW107XG5cbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRvZG9zLmluZGV4T2YodG9kbyk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdG9kb3M7XG4gIH07XG5cbiAgY29uc3Qgc2V0VG9kb3MgPSAobmV3VG9kb3MpID0+IHtcbiAgICB0b2RvcyA9IG5ld1RvZG9zO1xuICB9O1xuXG4gIGNvbnN0IGdldFRvZG9CeUlkID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIGdldFRvZG9zKCkuZmluZCh0b2RvID0+IHRvZG8uZ2V0SWQoKSA9PT0gaWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhc1RvZG8gPSAodG9kbykgPT4ge1xuICAgIHJldHVybiB0b2Rvcy5pbmNsdWRlcyh0b2RvKTtcbiAgfTtcblxuICByZXR1cm4geyBhZGRUb2RvLCByZW1vdmVUb2RvLCBnZXRUb2Rvcywgc2V0VG9kb3MsIGdldFRvZG9CeUlkLCBoYXNUb2RvIH07XG59O1xuIiwiZXhwb3J0IHt0b2RvfTtcblxuY29uc3QgdG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlLCBpZCkgPT4ge1xuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuICBcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHRpdGxlID0gbmV3VGl0bGU7XG4gIFxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4gZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgXG4gIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICBcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gIFxuICBjb25zdCBnZXRJc0NvbXBsZXRlID0gKCkgPT4gaXNDb21wbGV0ZTtcbiAgY29uc3Qgc2V0SXNDb21wbGV0ZSA9IChuZXdJc0NvbXBsZXRlKSA9PiBpc0NvbXBsZXRlID0gbmV3SXNDb21wbGV0ZTtcbiAgXG4gIHJldHVybiB7XG4gICAgZ2V0SWQsXG4gICAgZ2V0VGl0bGUsXG4gICAgc2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0RHVlRGF0ZSxcbiAgICBzZXREdWVEYXRlLFxuICAgIGdldFByaW9yaXR5LFxuICAgIHNldFByaW9yaXR5LFxuICAgIGdldElzQ29tcGxldGUsXG4gICAgc2V0SXNDb21wbGV0ZVxuICB9O1xufTtcblxuICAiLCJpbXBvcnQgeyBnZW5lcmF0ZVNpZGViYXIgfSBmcm9tIFwiLi9HZW5lcmF0ZURPTS9zaWRlYmFyXCI7XG5pbXBvcnQgeyBzZXR1cEluaXRhbFByb2plY3RzIH0gZnJvbSBcIi4vYXBwTG9naWMvaW5pdGlhbFNldHVwXCI7XG5pbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSBcIi4vYXBwTG9naWMvaW5pdGlhbFNldHVwXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU1haW5Db250ZW50IH0gZnJvbSBcIi4vR2VuZXJhdGVET00vbWFpbkNvbnRlbnRcIjtcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDdXJyZW50UGFnZSgpe1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyID4gOm5vdCgubGVmdFBhbmVsKScpO1xuICAgIGh0bWwuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfSk7XG59O1xuXG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gc2V0dXBJbml0YWxQcm9qZWN0cygpO1xuXG5nZW5lcmF0ZVNpZGViYXIoKTtcblxuZ2VuZXJhdGVNYWluQ29udGVudChkZWZhdWx0UHJvamVjdCk7XG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBsb2FkaW5nIGRlZmF1bHQgcHJvamVjdCBmcm9tIHNpZGViYXIgYnkgY2xpY2tpbmcgb24gaXRcblxuY29uc3QgZGVmYXVsdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFBhbmVsSGVhZGVyQnV0dG9uJyk7XG5cbmRlZmF1bHRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgcmVtb3ZlQ3VycmVudFBhZ2UoKTtcblxuICAgIGdlbmVyYXRlTWFpbkNvbnRlbnQoZGVmYXVsdFByb2plY3QpO1xufSk7XG5cblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIGFkZGluZyBhIG5ldyB0b2RvIGl0ZW0gZnJvbSBzaWRlIGJhci5cblxuXG5cblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIGNsaWNraW5nIG9uIHRoZSB0b2RvIGl0ZW0uXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=