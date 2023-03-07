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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n}\n\nbody{\n    width: 100vw;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 20px;\n    font-weight: 500;\n    overflow-x: hidden;\n    display: flex;\n    /* justify-content: space-evenly; */\n    align-items: center;\n    position: relative;\n    background-color: hsl(201deg 6% 96%);\n    flex-direction: column;\n    /* padding-bottom: 4r; Replace with the height of your footer */\n}\n\n.container {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 25rem 1fr;\n    background: hsl(201deg 6% 96%);\n}\n\n.leftPanel {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n    border-right: 3px solid rgb(0, 0, 0);\n    font-size: 30px;\n    font-weight: 600;\n    position: fixed;\n    width: 25rem;\n}\n\n.leftPanel .welcome {\n    display: flex;\n    gap: 1rem;\n    \n    margin-top: 4rem;\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.leftPanel .welcomeMessage{\n    font-size: 30px;\n    font-weight: 400;\n}\n\n.leftPanel img {\n    width: 40px;\n    height: 40px;\n}\n\n.leftPanel > div {\n    margin-left: 2rem;\n}\n\n\n.leftPanel .welcome img {\n    width: 80px;\n    height: 80px;\n}\n\n.leftPanel .projectPanel {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.leftPanel .projectPanelHeaderButton {\n    border: none;\n    border-radius: 0.7rem;\n    background: hsl(201deg 6% 96%);\n    color: black;\n    padding: 1rem 1.5rem;\n    text-transform: capitalize;\n    font-size: 30px;\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n.leftPanel .projectPanel .addProjectButton{\n    border: hsl(201deg 6% 96%);\n    border-radius: 10px;\n    width: 30px;\n    height: 30px;\n    cursor: pointer;\n    border-radius: 150px ;\n}\n.leftPanel .projectPanel .addProjectButton img{\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    width: 100%;\n    height: 100%;\n    border-radius: 200px ;\n}\n.leftPanel .projectList{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: 500px;\n    padding-bottom: 1px;\n    padding-top: 1px;\n}\n\n.leftPanel .projectList button{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 3px solid rgb(180, 180,);\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-radius: 0.7rem;\n    margin-top: 1rem;\n    margin-right: 2rem;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    color: black;\n    width: 20rem;\n    height: min-content;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    text-transform: capitalize;\n    font-weight: 600;\n    transition: transform 0.2s ease-in-out;\n    text-align: center;\n    margin-left: 2rem;\n    word-break: break-all;\n}\n\n.leftPanel .projectList button:hover{\n    transform: scale(1.02);\n}\n\n\n\n.leftPanel .settingsOption{\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    margin-left: 3rem;\n    margin-top: 0.5rem;\n}\n\n\n\n.mainContent{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-column: 2 / 3;\n    min-width: 50rem;\n}\n.mainContent .pageHeading {\n    font-size: 50px;\n    font-weight: 900;\n    color: #fff;\n    background: linear-gradient(to bottom right, hsl(201deg 100% 50%), hsl(153deg 91% 58%));\n    width: 100%;\n    height: 15rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 3px solid rgb(0, 0, 0);\n    text-align: center;\n    overflow: hidden;\n    word-break: break-all;\n}\n\n.newTodoButton{\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 0.7rem;\n    margin-top: 1rem;\n    align-self: flex-end;\n    margin-right: 2rem;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    color: black;\n    width: 300px;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    text-transform: capitalize;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.todoPanel {\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    gap: 1rem;\n    width: 95%;\n    margin: 1rem 0 2rem 0;\n}\n.todoItem{\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    width: 100%;\n    justify-content: space-between;\n    height: 100%;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    background-color: #4dbdfa00;\n    border: none;\n    cursor: pointer;\n    transition: background-color 0.2s ease-in-out;\n    border-radius: 0.7rem;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.todoItem:hover {\n    background-color: hsl(201deg 6% 96%);\n    color: black;\n\n}\n\n.todoContainer{\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    min-width: 40rem;\n    background-color: #000000;\n}\n\n.priorityIconContainer{\n    display: flex;\n    justify-content: space-around;\n    gap: 3px;\n}\n.priorityIconContainer > img{\n    width: 20px;\n}\n\n.completeButton {\n    border-left: none;\n    display: flex;\n    align-items: center;\n    border-radius: 0.7rem;\n    border: none;\n    padding: 1rem 0.8rem;\n    background-color: #000000;\n}\n \n\n.completeButton:hover {\n    background-color: black;\n    color: black;\n\n}\n\n.todoDescription {\n    padding: 0;\n    font-size: 18px;\n    font-weight: 600;\n    text-align: center;\n    letter-spacing: 0.1em;\n    color: white;\n    background-color: #3b3b3b;\n    border: none;\n    width: 90%;\n    border-radius: 0.7rem;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    margin-top: -1.2rem;\n    overflow-y: hidden;\n    max-height: 0;\n    transition: max-height 0.1s ease-out, padding 0.1s ease-in, border 0.1s ease-in;\n\n}\n.todoDescription.show{\n    max-height: 500px;\n    overflow-y: auto;\n    padding: 2rem 1.5rem;\n    border: 3px solid black ;\n    /* transition: max-height 0.1s ease-in, padding 0.1s ease-in, border 0.1s ease-in; */\n}\n\n.newProjectForm{\n    grid-template-rows: 1fr 3fr 1fr;\n    grid-template-columns: 1fr 4fr;\n    row-gap: 1rem;\n    column-gap:1px; \n}\n\n.newTodoForm{\n    grid-template-rows: 1fr 1fr 4fr 1fr 1fr 2fr 1fr;\n    grid-template-columns: 1fr 4fr;\n    top: 1rem;\n    row-gap: 1.5rem;\n}\n\nform {\n    box-sizing: border-box;\n    background-color: #000000;\n    border-radius: 1rem;\n    width: 50rem;\n    display: grid;\n    row-gap: 1rem;\n    column-gap:1px; \n    grid-template-rows: 1fr 2fr  1fr;\n    grid-template-columns: 1fr 4fr;\n    padding-left: 2rem;\n    padding-right: 0;\n    padding-bottom: 2rem;\n    padding-top: 1rem;\n    border: 5px solid #22d3ee;\n    grid-auto-flow: row;\n    justify-items: center;\n    align-items: center;\n    max-width: 60rem;\n    position: absolute;\n    top: 10rem;\n    color: white;\n    border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1;\n    position: fixed;\n}\n.formHeader{\n    display: grid;\n    grid-template-columns: 1fr 5rem;\n    justify-content: center;\n    grid-column: 1/ -1;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n}\n.formHeader .cancelButton{\n    cursor: pointer;\n    background: none;\n    border: none;\n    padding: 0;\n}\n.formHeader .cancelButton:hover{\n    transform: scale(1.03);\n    cursor: pointer;\n}\n.formHeader > h3{\n    justify-self: center;\n    margin-left: 6rem;\n}\n\nform > h3{\n    font-size: 30px;\n    grid-column: 1 / -1;\n}\nform > label{\n    grid-column: 1 / 2;\n}\nlabel{\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n}\n\ninput, select, textarea {\n    background-color: #FFFFFF;\n    border: 2px solid #D6D9DC;\n    border-radius: 3px;\n    width: 90%;\n    padding: 7px;\n    font-size: 14px;\n    box-sizing: border-box;\n    outline-style: none;\n    box-shadow: none;\n    justify-self: start;\n    border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1;\n    /* border: 3px solid #6fcdff; */\n\n}\ninput:focus {\n    /* border: 0.1rem solid #4997eb; */\n    box-shadow: 0 9px 10px -10px #888;\n}\ninput:invalid {\n    border: 0.1rem solid red;\n}\ninput[type='text'] {\n    max-width: 40rem;\n}\ninput[type='date'] {\n    max-width: 40rem;\n}\ninput[type='checkbox'] {\n    width: 4rem;\n    height: 2rem;\n    border: 2px solid #22d3ee;\n}\n\nform button{\n    width: 100px;\n    height: 60px;\n    border-radius: 10px;\n    background: #0f172a;\n    color: white;\n    border: 5px solid transparent;\n    font-size: 20px;\n    font-weight: 900;\n    cursor: pointer;\n    /* border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1; */\n    border: 3px solid #33f59f;\n}\n\n\n.resetButton {\n    justify-self: end;\n    margin-right: 1rem;\n}\n\n.priorityLabel{\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n}\n.prioritySelection {\n    display: flex;\n    gap: 3rem;\n    \n}\n.prioritySelection  div{\n    display: flex;\n    gap: 1rem;\n    /* border: 2px solid white;\n    border-top: 2px solid white;\n    border-right: 2px solid white; */\n    padding: 0.5rem;\n}\n.prioritySelection .priorityIconContainer{\n    border: 2px solid white;\n    border-radius:15px;\n    padding: 0.5rem 1rem;\n}\n\ninput:invalid {\n    border-color: rgb(0, 12, 182);\n    background-color: rgb(88, 188, 255);\n}\n\ninput:focus:invalid {\n    outline: none;\n}\n\n.inputContainer{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2rem;\n}\n\n.error {\n    width: 60%;\n\n    font-size: 80%;\n    color: white;\n    background-color: rgb(0, 12, 182);\n    border-radius: 0 0 5px 5px;\n\n    box-sizing: border-box;\n    padding: 0.3em;\n    visibility: hidden;\n    position: absolute;\n    margin-top:4rem ;\n}\n\n.error.active {\n    visibility: visible;\n}\n\nfooter{\n    background-color: #bebebe;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    padding-top: 2rem;\n    padding-bottom: 1rem;\n    margin-top: 10rem;\n    z-index: 1;\n    font-weight: 700;\n\n}\nfooter img {\n    width: 30px;\n    height: 30px;\n}\nfooter .attribute{\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    width: 100%;\n    justify-content: center;\n}\n  \n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n}\n\nbody{\n    width: 100vw;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 20px;\n    font-weight: 500;\n    overflow-x: hidden;\n    display: flex;\n    /* justify-content: space-evenly; */\n    align-items: center;\n    position: relative;\n    background-color: hsl(201deg 6% 96%);\n    flex-direction: column;\n    /* padding-bottom: 4r; Replace with the height of your footer */\n}\n\n.container {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 25rem 1fr;\n    background: hsl(201deg 6% 96%);\n}\n\n.leftPanel {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n    border-right: 3px solid rgb(0, 0, 0);\n    font-size: 30px;\n    font-weight: 600;\n    position: fixed;\n    width: 25rem;\n}\n\n.leftPanel .welcome {\n    display: flex;\n    gap: 1rem;\n    \n    margin-top: 4rem;\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.leftPanel .welcomeMessage{\n    font-size: 30px;\n    font-weight: 400;\n}\n\n.leftPanel img {\n    width: 40px;\n    height: 40px;\n}\n\n.leftPanel > div {\n    margin-left: 2rem;\n}\n\n\n.leftPanel .welcome img {\n    width: 80px;\n    height: 80px;\n}\n\n.leftPanel .projectPanel {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.leftPanel .projectPanelHeaderButton {\n    border: none;\n    border-radius: 0.7rem;\n    background: hsl(201deg 6% 96%);\n    color: black;\n    padding: 1rem 1.5rem;\n    text-transform: capitalize;\n    font-size: 30px;\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n.leftPanel .projectPanel .addProjectButton{\n    border: hsl(201deg 6% 96%);\n    border-radius: 10px;\n    width: 30px;\n    height: 30px;\n    cursor: pointer;\n    border-radius: 150px ;\n}\n.leftPanel .projectPanel .addProjectButton img{\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    width: 100%;\n    height: 100%;\n    border-radius: 200px ;\n}\n.leftPanel .projectList{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: 500px;\n    padding-bottom: 1px;\n    padding-top: 1px;\n}\n\n.leftPanel .projectList button{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 3px solid rgb(180, 180,);\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-radius: 0.7rem;\n    margin-top: 1rem;\n    margin-right: 2rem;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    color: black;\n    width: 20rem;\n    height: min-content;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    text-transform: capitalize;\n    font-weight: 600;\n    transition: transform 0.2s ease-in-out;\n    text-align: center;\n    margin-left: 2rem;\n    word-break: break-all;\n}\n\n.leftPanel .projectList button:hover{\n    transform: scale(1.02);\n}\n\n\n\n.leftPanel .settingsOption{\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    margin-left: 3rem;\n    margin-top: 0.5rem;\n}\n\n\n\n.mainContent{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-column: 2 / 3;\n    min-width: 50rem;\n}\n.mainContent .pageHeading {\n    font-size: 50px;\n    font-weight: 900;\n    color: #fff;\n    background: linear-gradient(to bottom right, hsl(201deg 100% 50%), hsl(153deg 91% 58%));\n    width: 100%;\n    height: 15rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 3px solid rgb(0, 0, 0);\n    text-align: center;\n    overflow: hidden;\n    word-break: break-all;\n}\n\n.newTodoButton{\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 0.7rem;\n    margin-top: 1rem;\n    align-self: flex-end;\n    margin-right: 2rem;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    color: black;\n    width: 300px;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    text-transform: capitalize;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.todoPanel {\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    gap: 1rem;\n    width: 95%;\n    margin: 1rem 0 2rem 0;\n}\n.todoItem{\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    width: 100%;\n    justify-content: space-between;\n    height: 100%;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    background-color: #4dbdfa00;\n    border: none;\n    cursor: pointer;\n    transition: background-color 0.2s ease-in-out;\n    border-radius: 0.7rem;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.todoItem:hover {\n    background-color: hsl(201deg 6% 96%);\n    color: black;\n\n}\n\n.todoContainer{\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    min-width: 40rem;\n    background-color: #000000;\n}\n\n.priorityIconContainer{\n    display: flex;\n    justify-content: space-around;\n    gap: 3px;\n}\n.priorityIconContainer > img{\n    width: 20px;\n}\n\n.completeButton {\n    border-left: none;\n    display: flex;\n    align-items: center;\n    border-radius: 0.7rem;\n    border: none;\n    padding: 1rem 0.8rem;\n    background-color: #000000;\n}\n \n\n.completeButton:hover {\n    background-color: black;\n    color: black;\n\n}\n\n.todoDescription {\n    padding: 0;\n    font-size: 18px;\n    font-weight: 600;\n    text-align: center;\n    letter-spacing: 0.1em;\n    color: white;\n    background-color: #3b3b3b;\n    border: none;\n    width: 90%;\n    border-radius: 0.7rem;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    margin-top: -1.2rem;\n    overflow-y: hidden;\n    max-height: 0;\n    transition: max-height 0.1s ease-out, padding 0.1s ease-in, border 0.1s ease-in;\n\n}\n.todoDescription.show{\n    max-height: 500px;\n    overflow-y: auto;\n    padding: 2rem 1.5rem;\n    border: 3px solid black ;\n    /* transition: max-height 0.1s ease-in, padding 0.1s ease-in, border 0.1s ease-in; */\n}\n\n.newProjectForm{\n    grid-template-rows: 1fr 3fr 1fr;\n    grid-template-columns: 1fr 4fr;\n    row-gap: 1rem;\n    column-gap:1px; \n}\n\n.newTodoForm{\n    grid-template-rows: 1fr 1fr 4fr 1fr 1fr 2fr 1fr;\n    grid-template-columns: 1fr 4fr;\n    top: 1rem;\n    row-gap: 1.5rem;\n}\n\nform {\n    box-sizing: border-box;\n    background-color: #000000;\n    border-radius: 1rem;\n    width: 50rem;\n    display: grid;\n    row-gap: 1rem;\n    column-gap:1px; \n    grid-template-rows: 1fr 2fr  1fr;\n    grid-template-columns: 1fr 4fr;\n    padding-left: 2rem;\n    padding-right: 0;\n    padding-bottom: 2rem;\n    padding-top: 1rem;\n    border: 5px solid #22d3ee;\n    grid-auto-flow: row;\n    justify-items: center;\n    align-items: center;\n    max-width: 60rem;\n    position: absolute;\n    top: 10rem;\n    color: white;\n    border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1;\n    position: fixed;\n}\n.formHeader{\n    display: grid;\n    grid-template-columns: 1fr 5rem;\n    justify-content: center;\n    grid-column: 1/ -1;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n}\n.formHeader .cancelButton{\n    cursor: pointer;\n    background: none;\n    border: none;\n    padding: 0;\n}\n.formHeader .cancelButton:hover{\n    transform: scale(1.03);\n    cursor: pointer;\n}\n.formHeader > h3{\n    justify-self: center;\n    margin-left: 6rem;\n}\n\nform > h3{\n    font-size: 30px;\n    grid-column: 1 / -1;\n}\nform > label{\n    grid-column: 1 / 2;\n}\nlabel{\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n}\n\ninput, select, textarea {\n    background-color: #FFFFFF;\n    border: 2px solid #D6D9DC;\n    border-radius: 3px;\n    width: 90%;\n    padding: 7px;\n    font-size: 14px;\n    box-sizing: border-box;\n    outline-style: none;\n    box-shadow: none;\n    justify-self: start;\n    border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1;\n    /* border: 3px solid #6fcdff; */\n\n}\ninput:focus {\n    /* border: 0.1rem solid #4997eb; */\n    box-shadow: 0 9px 10px -10px #888;\n}\ninput:invalid {\n    border: 0.1rem solid red;\n}\ninput[type='text'] {\n    max-width: 40rem;\n}\ninput[type='date'] {\n    max-width: 40rem;\n}\ninput[type='checkbox'] {\n    width: 4rem;\n    height: 2rem;\n    border: 2px solid #22d3ee;\n}\n\nform button{\n    width: 100px;\n    height: 60px;\n    border-radius: 10px;\n    background: #0f172a;\n    color: white;\n    border: 5px solid transparent;\n    font-size: 20px;\n    font-weight: 900;\n    cursor: pointer;\n    /* border-image: linear-gradient(to bottom, #33f59f, #6fcdff) 1; */\n    border: 3px solid #33f59f;\n}\n\n\n.resetButton {\n    justify-self: end;\n    margin-right: 1rem;\n}\n\n.priorityLabel{\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n}\n.prioritySelection {\n    display: flex;\n    gap: 3rem;\n    \n}\n.prioritySelection  div{\n    display: flex;\n    gap: 1rem;\n    /* border: 2px solid white;\n    border-top: 2px solid white;\n    border-right: 2px solid white; */\n    padding: 0.5rem;\n}\n.prioritySelection .priorityIconContainer{\n    border: 2px solid white;\n    border-radius:15px;\n    padding: 0.5rem 1rem;\n}\n\ninput:invalid {\n    border-color: rgb(0, 12, 182);\n    background-color: rgb(88, 188, 255);\n}\n\ninput:focus:invalid {\n    outline: none;\n}\n\n.inputContainer{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2rem;\n}\n\n.error {\n    width: 60%;\n\n    font-size: 80%;\n    color: white;\n    background-color: rgb(0, 12, 182);\n    border-radius: 0 0 5px 5px;\n\n    box-sizing: border-box;\n    padding: 0.3em;\n    visibility: hidden;\n    position: absolute;\n    margin-top:4rem ;\n}\n\n.error.active {\n    visibility: visible;\n}\n\nfooter{\n    background-color: #bebebe;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    padding-top: 2rem;\n    padding-bottom: 1rem;\n    margin-top: 10rem;\n    z-index: 1;\n    font-weight: 700;\n\n}\nfooter img {\n    width: 30px;\n    height: 30px;\n}\nfooter .attribute{\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    width: 100%;\n    justify-content: center;\n}\n  \n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _formValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formValidation */ "./src/GenerateDOM/formValidation.js");






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

    (0,_formValidation__WEBPACK_IMPORTED_MODULE_3__.projectFormValidation)();
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
/* harmony export */   "makeTodoFormVisible": () => (/* binding */ makeTodoFormVisible),
/* harmony export */   "projectSelectionFiller": () => (/* binding */ projectSelectionFiller)
/* harmony export */ });
/* harmony import */ var _appLogic_toDoObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appLogic/toDoObject */ "./src/appLogic/toDoObject.js");
/* harmony import */ var _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appLogic/initialSetup */ "./src/appLogic/initialSetup.js");
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainContent */ "./src/GenerateDOM/mainContent.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _formValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formValidation */ "./src/GenerateDOM/formValidation.js");







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
  
  
  cancelButton.addEventListener('click', () => {
    todoForm.reset();
    todoForm.style.visibility = 'hidden';
    html.style.filter = 'none';
  });
  

  
  submitButton.addEventListener('click', () => {
    const newTodoButton = document.querySelector('.newTodoButton');
    const todoTitleInput = document.querySelector('#todoTitle');
    const todoDescriptionInput = document.querySelector('#todoDescription');
    const todoDueDateInput = document.querySelector('#todoDueDate');
    const todoPriorityInput = todoForm.elements.priority;
    const projectSelectInput = document.querySelector('#projectSelect');
    const todoTitle = todoTitleInput.value;
    const todoDescription = todoDescriptionInput.value;
    const todoDueDate = todoDueDateInput.value;
    const todoPriority = radioButtonChecker(todoPriorityInput);
    const currentProjectID = newTodoButton.dataset.projectid;
  
    const newTodo = (0,_appLogic_toDoObject__WEBPACK_IMPORTED_MODULE_0__.todo)(
      todoTitle,
      todoDescription,
      convertDate(todoDueDate),
      todoPriority,
      false,
      _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.globalTodoCounter
    );
    (0,_appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.incrementTodoCounter)();
  
    const selectedProjectId = projectSelectInput.value;
    updateProjects(newTodo, selectedProjectId)

    // display the todo either if the user is on the project page or on the default project page
    if ((selectedProjectId == currentProjectID) || (currentProjectID == 0)){
      (0,_mainContent__WEBPACK_IMPORTED_MODULE_2__.displayNewTodo)(newTodo);
    };

    todoForm.reset();
    todoForm.style.visibility = 'hidden';
    html.style.filter = 'none';
  });

  function convertDate(date_str){
    let newDateStr = date_str.replace(/-/g, '/');
    let dateComponents = newDateStr.split('/');
    let finalDateStr = dateComponents[2] + '/' + dateComponents[1] + '/' + dateComponents[0];
    return finalDateStr;
  };

  function updateProjects(todo, projectID){
    const selectedProject = _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.myProjects.getProjectById(parseInt(projectID));
    selectedProject.getTodoList().addTodo(todo);
    _index__WEBPACK_IMPORTED_MODULE_3__.defaultProject.getTodoList().addTodo(todo);
  }
  
  // loads today's date into date form control
  document.querySelector('input[type="date"]').value = new Date().toISOString().split('T')[0];
  //  loads current projects into selection form control

  (0,_formValidation__WEBPACK_IMPORTED_MODULE_4__.todoFormValidation)();

};

function projectSelectionFiller(currentProject){

  // const submitButton = document.querySelector('.newTodoForm .submitButton');

  const projectSelect = document.querySelector('#projectSelect');
  const projectList = _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.myProjects.getProjectList();
  removeSelections();

  for (let i = 0; i < projectList.length; i++) {
    let option = document.createElement('option');
    option.value = projectList[i].getId();
    option.textContent = projectList[i].getTitle();
    projectSelect.appendChild(option);
  };

  projectSelect.value = currentProject.getId();


  function removeSelections(){
    while (projectSelect.firstChild) {
      projectSelect.removeChild(projectSelect.firstChild);
    }
  };

  // submitButton.addEventListener('click', () => { 
    
  //   if (projectSelect.value === currentProject.getID()){
  //     displayNewTodo();
  //   }

  // });
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

/***/ "./src/GenerateDOM/formValidation.js":
/*!*******************************************!*\
  !*** ./src/GenerateDOM/formValidation.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFormValidation": () => (/* binding */ projectFormValidation),
/* harmony export */   "todoFormValidation": () => (/* binding */ todoFormValidation)
/* harmony export */ });


function projectFormValidation(){
    const form = document.querySelector(".newProjectForm");
    const title = document.querySelector("#projectTitle");
    const titleError = document.querySelector("#projectTitle + span.error");
    const cancelButton = document.querySelector('.newProjectForm .cancelButton');

    
    cancelButton.addEventListener('click', () => {
        titleError.textContent = ""; 
        titleError.className = "error"; 
    });

    title.addEventListener("input", (event) => {
      
        if (title.validity.valid) {
          titleError.textContent = ""; 
          titleError.className = "error"; 
        } else {
            showError();
          }
    });
      
    form.addEventListener("submit", (event) => {
        if (!title.validity.valid) {
            showError();
            event.preventDefault();
        }
    });

    function showError() {
        if (title.validity.valueMissing) {
          titleError.textContent = "You need to enter a title for your project.";      
        } else if (title.validity.tooShort) {
          titleError.textContent = `Title should be at least ${title.minLength} characters; you entered ${title.value.length}.`;
        }
        titleError.className = "error active";
    }
};

function todoFormValidation(){
    const form = document.querySelector(".newTodoForm");
    const title = document.querySelector("#todoTitle");
    const titleError = document.querySelector("#todoTitle + span.error");
    const cancelButton = document.querySelector('.newTodoForm .cancelButton');

    
    cancelButton.addEventListener('click', () => {
        titleError.textContent = ""; 
        titleError.className = "error"; 
    });


    title.addEventListener("input", (event) => {
      
        if (title.validity.valid) {
          titleError.textContent = ""; 
          titleError.className = "error"; 
        } else {
            showError();
          }
    });
      
    form.addEventListener("submit", (event) => {
        if (!title.validity.valid) {
            showError();
            event.preventDefault();
        }
    });

    function showError() {
        if (title.validity.valueMissing) {
          titleError.textContent = "You need to enter a title for your task.";      
        } else if (title.validity.tooShort) {
          titleError.textContent = `Title should be at least ${title.minLength} characters; you entered ${title.value.length}.`;
        }
        titleError.className = "error active";
    }
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

    generateCreateNewItemButton(mainContent, project);

    generateTodoPanel(mainContent, project.getTodoList());

    html.appendChild(mainContent);
};



function generatePageHeading(container, title){
    const pageHeading = document.createElement('div');
    pageHeading.classList.add('pageHeading');

    pageHeading.textContent = title;

    container.appendChild(pageHeading);
};



function generateCreateNewItemButton(container, project){
    const newItemButton = document.createElement('button'); 

    newItemButton.classList.add('newTodoButton');

    newItemButton.textContent = 'Add new item';

    const projectID = project.getId();
    
    newItemButton.dataset.projectid = projectID;

    container.appendChild(newItemButton);

    activateCreateNewItemButtonListener(newItemButton, project) ;
};

function activateCreateNewItemButtonListener(newItemButton, project){
    newItemButton.addEventListener('click', () => {
        (0,_createNewTodoForm__WEBPACK_IMPORTED_MODULE_4__.makeTodoFormVisible)();
        (0,_createNewTodoForm__WEBPACK_IMPORTED_MODULE_4__.projectSelectionFiller)(project);
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
    (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Update website design", "Revamp the website layout and make it more user-friendly. Create new graphics to replace outdated ones. Conduct user testing to ensure the changes are effective.", "01/04/2023", "high", false, ++globalTodoCounter),
    (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Optimize server performance", "Analyze server logs and optimize server settings to improve performance. Implement caching to speed up page load times. Upgrade hardware if necessary.", "02/04/2023", "medium", false, ++globalTodoCounter),
    (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Implement new feature", "Add a new feature to the website that allows users to save their preferences. Create a database to store user preferences. Test the feature thoroughly before release.", "03/04/2023", "high", true, ++globalTodoCounter),
    (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Debug payment gateway", "Fix issues with payment gateway that are preventing customers from making purchases. Check for server-side errors and correct them. Test the gateway with multiple payment methods to ensure it works properly.", "04/04/2023", "high", false, ++globalTodoCounter),
    (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Write user documentation", "Create a user guide to help customers use our product more effectively. Organize the documentation into sections for ease of use. Include screenshots and step-by-step instructions.", "05/04/2023", "low", false, ++globalTodoCounter),
    (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Update product specifications", "Update the product specifications document to reflect recent changes. Review feedback from customers and stakeholders. Consult with the development team to ensure accuracy.", "06/04/2023", "medium", false, ++globalTodoCounter),
    (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Test website on different devices", "Check website functionality and layout on different devices to ensure compatibility. Use emulators and real devices to test. Take note of any inconsistencies or bugs.", "07/04/2023", "low", false, ++globalTodoCounter),
    (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Update website content", "Add new content to the website to keep it fresh and engaging for users. Brainstorm ideas for new content. Ensure the content aligns with the company's values and mission.", "08/04/2023", "medium", false, ++globalTodoCounter),
    (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Create marketing campaign", "Develop a marketing campaign to increase brand awareness and attract new customers. Identify target audience and create personas. Plan out social media posts and email blasts.", "09/04/2023", "high", false, ++globalTodoCounter),
    (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Conduct user research", "Gather feedback from users to improve the product and address their needs. Create surveys and distribute to users. Analyze the data to identify trends and patterns.", "10/04/2023", "medium", false, ++globalTodoCounter),
    (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Improve site speed", "Optimize website performance to improve site speed and reduce page load times. Minimize image sizes and enable compression. Utilize a content delivery network (CDN).", "11/04/2023", "high", false, ++globalTodoCounter),
    (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Create training materials", "Develop training materials to help employees learn new skills and improve performance. Identify areas where employees need training. Create instructional videos and written materials.", "12/04/2023", "low", false, ++globalTodoCounter),
    (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Resolve customer complaints", "Address customer complaints and resolve issues to maintain customer satisfaction. Respond promptly to complaints. Follow up with customers to ensure the issue has been resolved.", "13/04/2023", "high", false, ++globalTodoCounter), (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Perform security audit", "Conduct a security audit of the website to identify vulnerabilities and implement fixes", "16/04/2023", "high", false, ++globalTodoCounter),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFh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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9HZW5lcmF0ZURPTS9jcmVhdGVOZXdQcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvR2VuZXJhdGVET00vY3JlYXRlTmV3VG9kb0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0dlbmVyYXRlRE9NL2Zvcm1WYWxpZGF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9HZW5lcmF0ZURPTS9tYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvR2VuZXJhdGVET00vc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwTG9naWMvaW5pdGlhbFNldHVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBMb2dpYy9teVByb2plY3RzT2JqZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBMb2dpYy9wcm9qZWN0T2JqZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBMb2dpYy90b0RvTGlzdE9iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwTG9naWMvdG9Eb09iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHl7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwMWRlZyA2JSA5NiUpO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogNHI7IFJlcGxhY2Ugd2l0aCB0aGUgaGVpZ2h0IG9mIHlvdXIgZm9vdGVyICovXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cmVtIDFmcjtcXG4gICAgYmFja2dyb3VuZDogaHNsKDIwMWRlZyA2JSA5NiUpO1xcbn1cXG5cXG4ubGVmdFBhbmVsIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMjVyZW07XFxufVxcblxcbi5sZWZ0UGFuZWwgLndlbGNvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIFxcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5sZWZ0UGFuZWwgLndlbGNvbWVNZXNzYWdle1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5sZWZ0UGFuZWwgaW1nIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmxlZnRQYW5lbCA+IGRpdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG5cXG5cXG4ubGVmdFBhbmVsIC53ZWxjb21lIGltZyB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbEhlYWRlckJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBoc2woMjAxZGVnIDYlIDk2JSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxlZnRQYW5lbCAucHJvamVjdFBhbmVsIC5hZGRQcm9qZWN0QnV0dG9ue1xcbiAgICBib3JkZXI6IGhzbCgyMDFkZWcgNiUgOTYlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNTBweCA7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbCAuYWRkUHJvamVjdEJ1dHRvbiBpbWd7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM2ZmNkZmYsICMzM2Y1OWYpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweCA7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RMaXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcXG4gICAgcGFkZGluZy10b3A6IDFweDtcXG59XFxuXFxuLmxlZnRQYW5lbCAucHJvamVjdExpc3QgYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDE4MCwgMTgwLCk7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNmZjZGZmLCAjMzNmNTlmKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4ubGVmdFBhbmVsIC5wcm9qZWN0TGlzdCBidXR0b246aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxufVxcblxcblxcblxcbi5sZWZ0UGFuZWwgLnNldHRpbmdzT3B0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcblxcblxcbi5tYWluQ29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBtaW4td2lkdGg6IDUwcmVtO1xcbn1cXG4ubWFpbkNvbnRlbnQgLnBhZ2VIZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgaHNsKDIwMWRlZyAxMDAlIDUwJSksIGhzbCgxNTNkZWcgOTElIDU4JSkpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4ubmV3VG9kb0J1dHRvbntcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM2ZmNkZmYsICMzM2Y1OWYpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9QYW5lbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBtYXJnaW46IDFyZW0gMCAycmVtIDA7XFxufVxcbi50b2RvSXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZGJkZmEwMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxufVxcblxcbi50b2RvSXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDFkZWcgNiUgOTYlKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cXG4udG9kb0NvbnRhaW5lcntcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDQwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4ucHJpb3JpdHlJY29uQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ2FwOiAzcHg7XFxufVxcbi5wcmlvcml0eUljb25Db250YWluZXIgPiBpbWd7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uY29tcGxldGVCdXR0b24ge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMC44cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG4gXFxuXFxuLmNvbXBsZXRlQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG59XFxuXFxuLnRvZG9EZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAtMS4ycmVtO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4xcyBlYXNlLW91dCwgcGFkZGluZyAwLjFzIGVhc2UtaW4sIGJvcmRlciAwLjFzIGVhc2UtaW47XFxuXFxufVxcbi50b2RvRGVzY3JpcHRpb24uc2hvd3tcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjayA7XFxuICAgIC8qIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4xcyBlYXNlLWluLCBwYWRkaW5nIDAuMXMgZWFzZS1pbiwgYm9yZGVyIDAuMXMgZWFzZS1pbjsgKi9cXG59XFxuXFxuLm5ld1Byb2plY3RGb3Jte1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIHJvdy1nYXA6IDFyZW07XFxuICAgIGNvbHVtbi1nYXA6MXB4OyBcXG59XFxuXFxuLm5ld1RvZG9Gb3Jte1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgNGZyIDFmciAxZnIgMmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJvdy1nYXA6IDEuNXJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHdpZHRoOiA1MHJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcm93LWdhcDogMXJlbTtcXG4gICAgY29sdW1uLWdhcDoxcHg7IFxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzIyZDNlZTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDYwcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTByZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzNmNTlmLCAjNmZjZGZmKSAxO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcbi5mb3JtSGVhZGVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvIC0xO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb3JtSGVhZGVyIC5jYW5jZWxCdXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG4uZm9ybUhlYWRlciAuY2FuY2VsQnV0dG9uOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mb3JtSGVhZGVyID4gaDN7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogNnJlbTtcXG59XFxuXFxuZm9ybSA+IGgze1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcbmZvcm0gPiBsYWJlbHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5sYWJlbHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0Q2RDlEQztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzNmNTlmLCAjNmZjZGZmKSAxO1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCAjNmZjZGZmOyAqL1xcblxcbn1cXG5pbnB1dDpmb2N1cyB7XFxuICAgIC8qIGJvcmRlcjogMC4xcmVtIHNvbGlkICM0OTk3ZWI7ICovXFxuICAgIGJveC1zaGFkb3c6IDAgOXB4IDEwcHggLTEwcHggIzg4ODtcXG59XFxuaW5wdXQ6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJlZDtcXG59XFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcXG59XFxuaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcXG59XFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMmQzZWU7XFxufVxcblxcbmZvcm0gYnV0dG9ue1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZDogIzBmMTcyYTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC8qIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzMzZjU5ZiwgIzZmY2RmZikgMTsgKi9cXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzMzZjU5ZjtcXG59XFxuXFxuXFxuLnJlc2V0QnV0dG9uIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnByaW9yaXR5TGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucHJpb3JpdHlTZWxlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDNyZW07XFxuICAgIFxcbn1cXG4ucHJpb3JpdHlTZWxlY3Rpb24gIGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4ucHJpb3JpdHlTZWxlY3Rpb24gLnByaW9yaXR5SWNvbkNvbnRhaW5lcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6MTVweDtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcblxcbmlucHV0OmludmFsaWQge1xcbiAgICBib3JkZXItY29sb3I6IHJnYigwLCAxMiwgMTgyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCAxODgsIDI1NSk7XFxufVxcblxcbmlucHV0OmZvY3VzOmludmFsaWQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uaW5wdXRDb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICB3aWR0aDogNjAlO1xcblxcbiAgICBmb250LXNpemU6IDgwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTIsIDE4Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwLjNlbTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi10b3A6NHJlbSA7XFxufVxcblxcbi5lcnJvci5hY3RpdmUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG5mb290ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZWJlYmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMTByZW07XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxufVxcbmZvb3RlciBpbWcge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5mb290ZXIgLmF0dHJpYnV0ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiAgXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUpBQW1KO0lBQ25KLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLCtEQUErRDtBQUNuRTs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztJQUNoQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLGVB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QUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7O0FBRWI7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1Q7O29DQUVnQztJQUNoQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7O0lBRVYsY0FBYztJQUNkLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsMEJBQTBCOztJQUUxQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHl7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwMWRlZyA2JSA5NiUpO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogNHI7IFJlcGxhY2Ugd2l0aCB0aGUgaGVpZ2h0IG9mIHlvdXIgZm9vdGVyICovXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cmVtIDFmcjtcXG4gICAgYmFja2dyb3VuZDogaHNsKDIwMWRlZyA2JSA5NiUpO1xcbn1cXG5cXG4ubGVmdFBhbmVsIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMjVyZW07XFxufVxcblxcbi5sZWZ0UGFuZWwgLndlbGNvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIFxcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5sZWZ0UGFuZWwgLndlbGNvbWVNZXNzYWdle1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5sZWZ0UGFuZWwgaW1nIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmxlZnRQYW5lbCA+IGRpdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG5cXG5cXG4ubGVmdFBhbmVsIC53ZWxjb21lIGltZyB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbEhlYWRlckJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBoc2woMjAxZGVnIDYlIDk2JSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxlZnRQYW5lbCAucHJvamVjdFBhbmVsIC5hZGRQcm9qZWN0QnV0dG9ue1xcbiAgICBib3JkZXI6IGhzbCgyMDFkZWcgNiUgOTYlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNTBweCA7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbCAuYWRkUHJvamVjdEJ1dHRvbiBpbWd7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM2ZmNkZmYsICMzM2Y1OWYpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweCA7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RMaXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcXG4gICAgcGFkZGluZy10b3A6IDFweDtcXG59XFxuXFxuLmxlZnRQYW5lbCAucHJvamVjdExpc3QgYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDE4MCwgMTgwLCk7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNmZjZGZmLCAjMzNmNTlmKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4ubGVmdFBhbmVsIC5wcm9qZWN0TGlzdCBidXR0b246aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxufVxcblxcblxcblxcbi5sZWZ0UGFuZWwgLnNldHRpbmdzT3B0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcblxcblxcbi5tYWluQ29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBtaW4td2lkdGg6IDUwcmVtO1xcbn1cXG4ubWFpbkNvbnRlbnQgLnBhZ2VIZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgaHNsKDIwMWRlZyAxMDAlIDUwJSksIGhzbCgxNTNkZWcgOTElIDU4JSkpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4ubmV3VG9kb0J1dHRvbntcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM2ZmNkZmYsICMzM2Y1OWYpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9QYW5lbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBtYXJnaW46IDFyZW0gMCAycmVtIDA7XFxufVxcbi50b2RvSXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZGJkZmEwMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxufVxcblxcbi50b2RvSXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDFkZWcgNiUgOTYlKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cXG4udG9kb0NvbnRhaW5lcntcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDQwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4ucHJpb3JpdHlJY29uQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ2FwOiAzcHg7XFxufVxcbi5wcmlvcml0eUljb25Db250YWluZXIgPiBpbWd7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uY29tcGxldGVCdXR0b24ge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMC44cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG4gXFxuXFxuLmNvbXBsZXRlQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG59XFxuXFxuLnRvZG9EZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAtMS4ycmVtO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4xcyBlYXNlLW91dCwgcGFkZGluZyAwLjFzIGVhc2UtaW4sIGJvcmRlciAwLjFzIGVhc2UtaW47XFxuXFxufVxcbi50b2RvRGVzY3JpcHRpb24uc2hvd3tcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjayA7XFxuICAgIC8qIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4xcyBlYXNlLWluLCBwYWRkaW5nIDAuMXMgZWFzZS1pbiwgYm9yZGVyIDAuMXMgZWFzZS1pbjsgKi9cXG59XFxuXFxuLm5ld1Byb2plY3RGb3Jte1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIHJvdy1nYXA6IDFyZW07XFxuICAgIGNvbHVtbi1nYXA6MXB4OyBcXG59XFxuXFxuLm5ld1RvZG9Gb3Jte1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgNGZyIDFmciAxZnIgMmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJvdy1nYXA6IDEuNXJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHdpZHRoOiA1MHJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcm93LWdhcDogMXJlbTtcXG4gICAgY29sdW1uLWdhcDoxcHg7IFxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzIyZDNlZTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDYwcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTByZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzNmNTlmLCAjNmZjZGZmKSAxO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcbi5mb3JtSGVhZGVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvIC0xO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb3JtSGVhZGVyIC5jYW5jZWxCdXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG4uZm9ybUhlYWRlciAuY2FuY2VsQnV0dG9uOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mb3JtSGVhZGVyID4gaDN7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogNnJlbTtcXG59XFxuXFxuZm9ybSA+IGgze1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcbmZvcm0gPiBsYWJlbHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5sYWJlbHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0Q2RDlEQztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzNmNTlmLCAjNmZjZGZmKSAxO1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCAjNmZjZGZmOyAqL1xcblxcbn1cXG5pbnB1dDpmb2N1cyB7XFxuICAgIC8qIGJvcmRlcjogMC4xcmVtIHNvbGlkICM0OTk3ZWI7ICovXFxuICAgIGJveC1zaGFkb3c6IDAgOXB4IDEwcHggLTEwcHggIzg4ODtcXG59XFxuaW5wdXQ6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJlZDtcXG59XFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcXG59XFxuaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcXG59XFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMmQzZWU7XFxufVxcblxcbmZvcm0gYnV0dG9ue1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZDogIzBmMTcyYTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC8qIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzMzZjU5ZiwgIzZmY2RmZikgMTsgKi9cXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzMzZjU5ZjtcXG59XFxuXFxuXFxuLnJlc2V0QnV0dG9uIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnByaW9yaXR5TGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucHJpb3JpdHlTZWxlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDNyZW07XFxuICAgIFxcbn1cXG4ucHJpb3JpdHlTZWxlY3Rpb24gIGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4ucHJpb3JpdHlTZWxlY3Rpb24gLnByaW9yaXR5SWNvbkNvbnRhaW5lcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6MTVweDtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcblxcbmlucHV0OmludmFsaWQge1xcbiAgICBib3JkZXItY29sb3I6IHJnYigwLCAxMiwgMTgyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCAxODgsIDI1NSk7XFxufVxcblxcbmlucHV0OmZvY3VzOmludmFsaWQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uaW5wdXRDb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICB3aWR0aDogNjAlO1xcblxcbiAgICBmb250LXNpemU6IDgwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTIsIDE4Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwLjNlbTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi10b3A6NHJlbSA7XFxufVxcblxcbi5lcnJvci5hY3RpdmUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG5mb290ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZWJlYmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMTByZW07XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxufVxcbmZvb3RlciBpbWcge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5mb290ZXIgLmF0dHJpYnV0ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiAgXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuLi9hcHBMb2dpYy9wcm9qZWN0T2JqZWN0XCI7XG5pbXBvcnQgeyBnbG9iYWxQcm9qZWN0Q291bnRlciwgaW5jcmVtZW50UHJvamVjdENvdW50ZXIgfSBmcm9tIFwiLi4vYXBwTG9naWMvaW5pdGlhbFNldHVwXCI7XG5pbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSBcIi4uL2FwcExvZ2ljL2luaXRpYWxTZXR1cFwiO1xuaW1wb3J0IHthZGRQcm9qZWN0VG9TaWRlYmFyfSBmcm9tICcuL3NpZGViYXInXG5pbXBvcnQgeyBwcm9qZWN0Rm9ybVZhbGlkYXRpb24gfSBmcm9tIFwiLi9mb3JtVmFsaWRhdGlvblwiO1xuXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0Rm9ybScpO1xuXG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHJvamVjdEZvcm1WaXNpYmxlKCl7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBodG1sLnN0eWxlLmZpbHRlciA9ICdibHVyKDVweCknO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlUHJvamVjdEZvcm1FdmVudExpc3RlbmVycygpe1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3RGb3JtJyk7XG4gIFxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0Rm9ybSAuY2FuY2VsQnV0dG9uJyk7XG4gIFxuICBcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgaHRtbC5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgfSk7XG4gIFxuICBcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdEZvcm0gLnN1Ym1pdEJ1dHRvbicpO1xuICBcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpLnZhbHVlO1xuICBcbiAgICAgICAgY29uc29sZS5sb2coJ3dlIGluJyk7XG4gIFxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0VGl0bGUpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdChwcm9qZWN0VGl0bGUsIGdsb2JhbFByb2plY3RDb3VudGVyKTtcbiAgICAgICAgaW5jcmVtZW50UHJvamVjdENvdW50ZXIoKTtcbiAgXG4gICAgICAgIG15UHJvamVjdHMuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgXG4gICAgICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgaHRtbC5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gIFxuICAgICAgICBhZGRQcm9qZWN0VG9TaWRlYmFyKG5ld1Byb2plY3QpO1xuICAgIFxuICAgIH0pO1xuXG4gICAgcHJvamVjdEZvcm1WYWxpZGF0aW9uKCk7XG59OyIsImltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLi4vYXBwTG9naWMvdG9Eb09iamVjdFwiO1xuaW1wb3J0IHsgZ2xvYmFsVG9kb0NvdW50ZXIsIGluY3JlbWVudFRvZG9Db3VudGVyIH0gZnJvbSBcIi4uL2FwcExvZ2ljL2luaXRpYWxTZXR1cFwiO1xuaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gXCIuLi9hcHBMb2dpYy9pbml0aWFsU2V0dXBcIjtcbmltcG9ydCB7IGRpc3BsYXlOZXdUb2RvIH0gZnJvbSBcIi4vbWFpbkNvbnRlbnRcIjtcbmltcG9ydCB7IGRlZmF1bHRQcm9qZWN0IH0gZnJvbSAnLi4vaW5kZXgnXG5pbXBvcnQgeyB0b2RvRm9ybVZhbGlkYXRpb24gfSBmcm9tIFwiLi9mb3JtVmFsaWRhdGlvblwiO1xuXG5jb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUb2RvRm9ybScpO1xuY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VUb2RvRm9ybVZpc2libGUoKSB7XG4gIHRvZG9Gb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIGh0bWwuc3R5bGUuZmlsdGVyID0gJ2JsdXIoNXB4KSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZVRvZG9Gb3JtRXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VG9kb0Zvcm0nKTtcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1RvZG9Gb3JtIC5jYW5jZWxCdXR0b24nKTtcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1RvZG9Gb3JtIC5zdWJtaXRCdXR0b24nKTtcbiAgXG4gIFxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9kb0Zvcm0ucmVzZXQoKTtcbiAgICB0b2RvRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgaHRtbC5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gIH0pO1xuICBcblxuICBcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VG9kb0J1dHRvbicpO1xuICAgIGNvbnN0IHRvZG9UaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9UaXRsZScpO1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9EZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHRvZG9EdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0R1ZURhdGUnKTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHlJbnB1dCA9IHRvZG9Gb3JtLmVsZW1lbnRzLnByaW9yaXR5O1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0U2VsZWN0Jyk7XG4gICAgY29uc3QgdG9kb1RpdGxlID0gdG9kb1RpdGxlSW5wdXQudmFsdWU7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gdG9kb0Rlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSB0b2RvRHVlRGF0ZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IHJhZGlvQnV0dG9uQ2hlY2tlcih0b2RvUHJpb3JpdHlJbnB1dCk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJRCA9IG5ld1RvZG9CdXR0b24uZGF0YXNldC5wcm9qZWN0aWQ7XG4gIFxuICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvKFxuICAgICAgdG9kb1RpdGxlLFxuICAgICAgdG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgY29udmVydERhdGUodG9kb0R1ZURhdGUpLFxuICAgICAgdG9kb1ByaW9yaXR5LFxuICAgICAgZmFsc2UsXG4gICAgICBnbG9iYWxUb2RvQ291bnRlclxuICAgICk7XG4gICAgaW5jcmVtZW50VG9kb0NvdW50ZXIoKTtcbiAgXG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBwcm9qZWN0U2VsZWN0SW5wdXQudmFsdWU7XG4gICAgdXBkYXRlUHJvamVjdHMobmV3VG9kbywgc2VsZWN0ZWRQcm9qZWN0SWQpXG5cbiAgICAvLyBkaXNwbGF5IHRoZSB0b2RvIGVpdGhlciBpZiB0aGUgdXNlciBpcyBvbiB0aGUgcHJvamVjdCBwYWdlIG9yIG9uIHRoZSBkZWZhdWx0IHByb2plY3QgcGFnZVxuICAgIGlmICgoc2VsZWN0ZWRQcm9qZWN0SWQgPT0gY3VycmVudFByb2plY3RJRCkgfHwgKGN1cnJlbnRQcm9qZWN0SUQgPT0gMCkpe1xuICAgICAgZGlzcGxheU5ld1RvZG8obmV3VG9kbyk7XG4gICAgfTtcblxuICAgIHRvZG9Gb3JtLnJlc2V0KCk7XG4gICAgdG9kb0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGh0bWwuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICB9KTtcblxuICBmdW5jdGlvbiBjb252ZXJ0RGF0ZShkYXRlX3N0cil7XG4gICAgbGV0IG5ld0RhdGVTdHIgPSBkYXRlX3N0ci5yZXBsYWNlKC8tL2csICcvJyk7XG4gICAgbGV0IGRhdGVDb21wb25lbnRzID0gbmV3RGF0ZVN0ci5zcGxpdCgnLycpO1xuICAgIGxldCBmaW5hbERhdGVTdHIgPSBkYXRlQ29tcG9uZW50c1syXSArICcvJyArIGRhdGVDb21wb25lbnRzWzFdICsgJy8nICsgZGF0ZUNvbXBvbmVudHNbMF07XG4gICAgcmV0dXJuIGZpbmFsRGF0ZVN0cjtcbiAgfTtcblxuICBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0cyh0b2RvLCBwcm9qZWN0SUQpe1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IG15UHJvamVjdHMuZ2V0UHJvamVjdEJ5SWQocGFyc2VJbnQocHJvamVjdElEKSk7XG4gICAgc2VsZWN0ZWRQcm9qZWN0LmdldFRvZG9MaXN0KCkuYWRkVG9kbyh0b2RvKTtcbiAgICBkZWZhdWx0UHJvamVjdC5nZXRUb2RvTGlzdCgpLmFkZFRvZG8odG9kbyk7XG4gIH1cbiAgXG4gIC8vIGxvYWRzIHRvZGF5J3MgZGF0ZSBpbnRvIGRhdGUgZm9ybSBjb250cm9sXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJkYXRlXCJdJykudmFsdWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgLy8gIGxvYWRzIGN1cnJlbnQgcHJvamVjdHMgaW50byBzZWxlY3Rpb24gZm9ybSBjb250cm9sXG5cbiAgdG9kb0Zvcm1WYWxpZGF0aW9uKCk7XG5cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0U2VsZWN0aW9uRmlsbGVyKGN1cnJlbnRQcm9qZWN0KXtcblxuICAvLyBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VG9kb0Zvcm0gLnN1Ym1pdEJ1dHRvbicpO1xuXG4gIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFNlbGVjdCcpO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IG15UHJvamVjdHMuZ2V0UHJvamVjdExpc3QoKTtcbiAgcmVtb3ZlU2VsZWN0aW9ucygpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdExpc3RbaV0uZ2V0SWQoKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdFtpXS5nZXRUaXRsZSgpO1xuICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfTtcblxuICBwcm9qZWN0U2VsZWN0LnZhbHVlID0gY3VycmVudFByb2plY3QuZ2V0SWQoKTtcblxuXG4gIGZ1bmN0aW9uIHJlbW92ZVNlbGVjdGlvbnMoKXtcbiAgICB3aGlsZSAocHJvamVjdFNlbGVjdC5maXJzdENoaWxkKSB7XG4gICAgICBwcm9qZWN0U2VsZWN0LnJlbW92ZUNoaWxkKHByb2plY3RTZWxlY3QuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgXG4gICAgXG4gIC8vICAgaWYgKHByb2plY3RTZWxlY3QudmFsdWUgPT09IGN1cnJlbnRQcm9qZWN0LmdldElEKCkpe1xuICAvLyAgICAgZGlzcGxheU5ld1RvZG8oKTtcbiAgLy8gICB9XG5cbiAgLy8gfSk7XG59O1xuXG5cbmZ1bmN0aW9uIHJhZGlvQnV0dG9uQ2hlY2tlcihyYWRpb3Mpe1xuICBsZXQgc2VsZWN0ZWRWYWx1ZTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhZGlvcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyYWRpb3NbaV0uY2hlY2tlZCkge1xuICAgICAgc2VsZWN0ZWRWYWx1ZSA9IHJhZGlvc1tpXS52YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2VsZWN0ZWRWYWx1ZTtcbiAgXG59OyIsIlxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEZvcm1WYWxpZGF0aW9uKCl7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3UHJvamVjdEZvcm1cIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RUaXRsZVwiKTtcbiAgICBjb25zdCB0aXRsZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0VGl0bGUgKyBzcGFuLmVycm9yXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0Rm9ybSAuY2FuY2VsQnV0dG9uJyk7XG5cbiAgICBcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRpdGxlRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiOyBcbiAgICAgICAgdGl0bGVFcnJvci5jbGFzc05hbWUgPSBcImVycm9yXCI7IFxuICAgIH0pO1xuXG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICAgICAgXG4gICAgICAgIGlmICh0aXRsZS52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgIHRpdGxlRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiOyBcbiAgICAgICAgICB0aXRsZUVycm9yLmNsYXNzTmFtZSA9IFwiZXJyb3JcIjsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93RXJyb3IoKTtcbiAgICAgICAgICB9XG4gICAgfSk7XG4gICAgICBcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghdGl0bGUudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgIHNob3dFcnJvcigpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gc2hvd0Vycm9yKCkge1xuICAgICAgICBpZiAodGl0bGUudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICAgICAgdGl0bGVFcnJvci50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gZW50ZXIgYSB0aXRsZSBmb3IgeW91ciBwcm9qZWN0LlwiOyAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKHRpdGxlLnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgICAgICAgdGl0bGVFcnJvci50ZXh0Q29udGVudCA9IGBUaXRsZSBzaG91bGQgYmUgYXQgbGVhc3QgJHt0aXRsZS5taW5MZW5ndGh9IGNoYXJhY3RlcnM7IHlvdSBlbnRlcmVkICR7dGl0bGUudmFsdWUubGVuZ3RofS5gO1xuICAgICAgICB9XG4gICAgICAgIHRpdGxlRXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvciBhY3RpdmVcIjtcbiAgICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0Zvcm1WYWxpZGF0aW9uKCl7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3VG9kb0Zvcm1cIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9UaXRsZVwiKTtcbiAgICBjb25zdCB0aXRsZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvVGl0bGUgKyBzcGFuLmVycm9yXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUb2RvRm9ybSAuY2FuY2VsQnV0dG9uJyk7XG5cbiAgICBcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRpdGxlRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiOyBcbiAgICAgICAgdGl0bGVFcnJvci5jbGFzc05hbWUgPSBcImVycm9yXCI7IFxuICAgIH0pO1xuXG5cbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBcbiAgICAgICAgaWYgKHRpdGxlLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgICAgdGl0bGVFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7IFxuICAgICAgICAgIHRpdGxlRXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvclwiOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dFcnJvcigpO1xuICAgICAgICAgIH1cbiAgICB9KTtcbiAgICAgIFxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCF0aXRsZS52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgc2hvd0Vycm9yKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzaG93RXJyb3IoKSB7XG4gICAgICAgIGlmICh0aXRsZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgICB0aXRsZUVycm9yLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBlbnRlciBhIHRpdGxlIGZvciB5b3VyIHRhc2suXCI7ICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAodGl0bGUudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICAgICAgICB0aXRsZUVycm9yLnRleHRDb250ZW50ID0gYFRpdGxlIHNob3VsZCBiZSBhdCBsZWFzdCAke3RpdGxlLm1pbkxlbmd0aH0gY2hhcmFjdGVyczsgeW91IGVudGVyZWQgJHt0aXRsZS52YWx1ZS5sZW5ndGh9LmA7XG4gICAgICAgIH1cbiAgICAgICAgdGl0bGVFcnJvci5jbGFzc05hbWUgPSBcImVycm9yIGFjdGl2ZVwiO1xuICAgIH1cbn07IiwiaW1wb3J0IHByaW9yaXR5U1ZHIGZyb20gJy4uL3N2Zy9wcmlvcml0eVNWR0hpZ2gucG5nJztcblxuaW1wb3J0IHByb2dyZXNzSWNvbkNvbXBsZXRlIGZyb20gJy4uL3N2Zy9wcm9ncmVzc0ljb25Db21wbGV0ZS5wbmcnO1xuaW1wb3J0IHByb2dyZXNzSWNvblVuZmluaXNoZWQgZnJvbSAnLi4vc3ZnL3Byb2dyZXNzSWNvblVuZmluaXNoZWQucG5nJztcblxuaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gXCIuLi9hcHBMb2dpYy9pbml0aWFsU2V0dXBcIjtcblxuaW1wb3J0IHsgbWFrZVRvZG9Gb3JtVmlzaWJsZSwgcHJvamVjdFNlbGVjdGlvbkZpbGxlciB9IGZyb20gJy4vY3JlYXRlTmV3VG9kb0Zvcm0nO1xuXG5leHBvcnQge2dlbmVyYXRlTWFpbkNvbnRlbnR9O1xuXG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU5ld1RvZG8odG9kbyl7XG4gICAgY29uc3QgdG9kb1BhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9QYW5lbCcpO1xuXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb0NvbnRhaW5lcicpO1xuICAgIFxuICAgIC8vIGFkZGluZyB0aGUgbGVmdCBpbmZvIGNvbXBvbmVudCBvZiB0aGUgdG9kbyBpdGVtLlxuICAgIGFkZFRvZG9JdGVtKHRvZG9Db250YWluZXIsIHRvZG8pO1xuXG4gICAgLy8gYWRkaW5nIHRoZSByaWdodCBjb21wbGV0ZSBidXR0b24uXG4gICAgYWRkVG9kb0NvbXBsZXRlQnV0dG9uKHRvZG9Db250YWluZXIsIHRvZG8pO1xuXG4gICAgYWRkVG9kb0Rlc2NyaXB0aW9uKHRvZG9QYW5lbCwgdG9kbyk7XG5cbiAgICB0b2RvUGFuZWwuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG59O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZU1haW5Db250ZW50KHByb2plY3Qpe1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbkNvbnRlbnQnKTtcblxuICAgIGdlbmVyYXRlUGFnZUhlYWRpbmcobWFpbkNvbnRlbnQsIHByb2plY3QuZ2V0VGl0bGUoKSk7XG5cbiAgICBnZW5lcmF0ZUNyZWF0ZU5ld0l0ZW1CdXR0b24obWFpbkNvbnRlbnQsIHByb2plY3QpO1xuXG4gICAgZ2VuZXJhdGVUb2RvUGFuZWwobWFpbkNvbnRlbnQsIHByb2plY3QuZ2V0VG9kb0xpc3QoKSk7XG5cbiAgICBodG1sLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbn07XG5cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVBhZ2VIZWFkaW5nKGNvbnRhaW5lciwgdGl0bGUpe1xuICAgIGNvbnN0IHBhZ2VIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncGFnZUhlYWRpbmcnKTtcblxuICAgIHBhZ2VIZWFkaW5nLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUhlYWRpbmcpO1xufTtcblxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ3JlYXRlTmV3SXRlbUJ1dHRvbihjb250YWluZXIsIHByb2plY3Qpe1xuICAgIGNvbnN0IG5ld0l0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG5cbiAgICBuZXdJdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ld1RvZG9CdXR0b24nKTtcblxuICAgIG5ld0l0ZW1CdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIG5ldyBpdGVtJztcblxuICAgIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3QuZ2V0SWQoKTtcbiAgICBcbiAgICBuZXdJdGVtQnV0dG9uLmRhdGFzZXQucHJvamVjdGlkID0gcHJvamVjdElEO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0l0ZW1CdXR0b24pO1xuXG4gICAgYWN0aXZhdGVDcmVhdGVOZXdJdGVtQnV0dG9uTGlzdGVuZXIobmV3SXRlbUJ1dHRvbiwgcHJvamVjdCkgO1xufTtcblxuZnVuY3Rpb24gYWN0aXZhdGVDcmVhdGVOZXdJdGVtQnV0dG9uTGlzdGVuZXIobmV3SXRlbUJ1dHRvbiwgcHJvamVjdCl7XG4gICAgbmV3SXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFrZVRvZG9Gb3JtVmlzaWJsZSgpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0aW9uRmlsbGVyKHByb2plY3QpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVUb2RvUGFuZWwoY29udGFpbmVyLCB0b2RvTGlzdCkge1xuICAgIGNvbnN0IHRvZG9QYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9QYW5lbC5jbGFzc0xpc3QuYWRkKCd0b2RvUGFuZWwnKTtcblxuICAgIHRvZG9MaXN0LmdldFRvZG9zKCkuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9Db250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZGluZyB0aGUgbGVmdCBpbmZvIGNvbXBvbmVudCBvZiB0aGUgdG9kbyBpdGVtLlxuICAgICAgICBhZGRUb2RvSXRlbSh0b2RvQ29udGFpbmVyLCB0b2RvKTtcblxuICAgICAgICAvLyBhZGRpbmcgdGhlIHJpZ2h0IGNvbXBsZXRlIGJ1dHRvbi5cbiAgICAgICAgYWRkVG9kb0NvbXBsZXRlQnV0dG9uKHRvZG9Db250YWluZXIsIHRvZG8pO1xuXG4gICAgICAgIGFkZFRvZG9EZXNjcmlwdGlvbih0b2RvUGFuZWwsIHRvZG8pO1xuXG4gICAgICAgIHRvZG9QYW5lbC5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvUGFuZWwpO1xufTtcblxuZnVuY3Rpb24gYWRkVG9kb0Rlc2NyaXB0aW9uKGNvbnRhaW5lciwgdG9kbyl7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZXNjcmlwdGlvbicpO1xuICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAvLyB0b2RvRGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xufTtcblxuZnVuY3Rpb24gYWRkVG9kb0l0ZW0oY29udGFpbmVyLCB0b2RvKSB7XG4gICAgY29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb0l0ZW0nKTtcblxuXG4gICAgY29uc3QgdG9kb0lEID0gdG9kby5nZXRJZCgpO1xuICAgIGNvbnN0IHBhcmVudFByb2plY3QgPSBteVByb2plY3RzLmdldFByb2plY3RCeVRvZG9JZCh0b2RvSUQpO1xuICAgIGNvbnN0IHByb2plY3RJRCA9IHBhcmVudFByb2plY3QuZ2V0SWQoKTtcblxuXG4gICAgdG9kb0J1dHRvbi5kYXRhc2V0LnRvZG9pZCA9IHRvZG9JRDtcbiAgICB0b2RvQnV0dG9uLmRhdGFzZXQucHJvamVjdGlkID0gcHJvamVjdElEO1xuXG4gICAgYWRkUHJpb3JpdHlJY29uKHRvZG8uZ2V0UHJpb3JpdHkoKSk7XG4gICAgYWRkVG9kb1RpdGxlKHRvZG8uZ2V0VGl0bGUoKSk7XG4gICAgYWRkVG9kb0RhdGUodG9kby5nZXREdWVEYXRlKCkpO1xuXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0J1dHRvbik7XG5cbiAgICBmdW5jdGlvbiBhZGRUb2RvRGF0ZShkYXRlKSB7XG4gICAgICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0ZScpO1xuICAgICAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGRhdGU7XG4gICAgICAgIHRvZG9CdXR0b24uYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkVG9kb1RpdGxlKHRpdGxlKSB7XG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG9UaXRsZScpO1xuICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgdG9kb0J1dHRvbi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRQcmlvcml0eUljb24ocHJpb3JpdHkpIHtcbiAgXG4gICAgICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgICAgIHRvZG9CdXR0b24uYXBwZW5kQ2hpbGQoYWRkSWNvbnMoMykpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICBcbiAgICAgICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICAgICAgdG9kb0J1dHRvbi5hcHBlbmRDaGlsZChhZGRJY29ucygyKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgIFxuICAgICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgICB0b2RvQnV0dG9uLmFwcGVuZENoaWxkKGFkZEljb25zKDEpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICBmdW5jdGlvbiBhZGRJY29ucyAoY291bnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlJY29uQ29udGFpbmVyJyk7XG4gICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3ZnSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICBzdmdJY29uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5SWNvbicpO1xuICAgICAgICAgICAgICBzdmdJY29uLnNyYyA9IHByaW9yaXR5U1ZHO1xuICAgICAgICAgICAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN2Z0ljb24pO1xuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBpY29uQ29udGFpbmVyO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBhY3RpdmF0ZVRvZG9CdXR0b25MaXN0ZW5lcih0b2RvQnV0dG9uKTtcbn07XG5cblxuXG5mdW5jdGlvbiBhZGRUb2RvQ29tcGxldGVCdXR0b24oY29udGFpbmVyLCB0b2RvKXtcblxuICAgIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIGNvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlQnV0dG9uJyk7XG5cbiAgICBjb25zdCB0b2RvSUQgPSB0b2RvLmdldElkKCk7XG4gICAgY29uc3QgcGFyZW50UHJvamVjdCA9IG15UHJvamVjdHMuZ2V0UHJvamVjdEJ5VG9kb0lkKHRvZG9JRCk7XG4gICAgY29uc3QgcHJvamVjdElEID0gcGFyZW50UHJvamVjdC5nZXRJZCgpO1xuICAgIFxuICAgIGNvbXBsZXRlQnV0dG9uLmRhdGFzZXQudG9kb2lkID0gdG9kb0lEO1xuICAgIGNvbXBsZXRlQnV0dG9uLmRhdGFzZXQucHJvamVjdGlkID0gcHJvamVjdElEO1xuXG4gICAgY29uc3QgY29tcGxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29tcGxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlSWNvbicpO1xuXG4gICAgc3dpdGNoKHRvZG8uZ2V0SXNDb21wbGV0ZSgpKXtcbiAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgY29tcGxldGVJY29uLnNyYyA9IHByb2dyZXNzSWNvbkNvbXBsZXRlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgIGNvbXBsZXRlSWNvbi5zcmMgPSBwcm9ncmVzc0ljb25VbmZpbmlzaGVkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfTtcblxuXG5cbiAgICBjb21wbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChjb21wbGV0ZUljb24pOyBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pOyBcbiAgICBhY3RpdmF0ZUNvbXBsZXRlQnV0dG9uTGlzdGVuZXIoY29tcGxldGVCdXR0b24sIGNvbXBsZXRlSWNvbiwgdG9kbyk7XG59O1xuXG5cbmZ1bmN0aW9uIGFjdGl2YXRlVG9kb0J1dHRvbkxpc3RlbmVyKHRvZG9CdXR0b24pe1xuXG4gICAgdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBwcmV2aW91cyBzaWJsaW5nIGJlY2F1c2UgdGhlIGZsZXggZGlyZWN0aW9uIGlzIHJldmVyc2UtY29sdW1uXG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSB0b2RvQnV0dG9uLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0ICB0b2RvRGVzY3JpcHRpb24gPSB0b2RvQ29udGFpbmVyLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cblxuICAgICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIH0pO1xufTtcblxuXG5mdW5jdGlvbiBhY3RpdmF0ZUNvbXBsZXRlQnV0dG9uTGlzdGVuZXIoY29tcGxldGVCdXR0b24sIGNvbXBsZXRlSWNvbiwgdG9kbyl7XG4gICAgXG4gICAgY29tcGxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NvbXBsZXRlID0gIXRvZG8uZ2V0SXNDb21wbGV0ZSgpO1xuICAgICAgICB0b2RvLnNldElzQ29tcGxldGUobmV3Q29tcGxldGUpO1xuXG4gICAgICAgIGNoYW5nZVRvZG9Db21wbGV0ZW5lc3MobmV3Q29tcGxldGUpO1xuICAgIH0pO1xuXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VUb2RvQ29tcGxldGVuZXNzKG5ld0NvbXBsZXRlKXtcblxuICAgICAgICBzd2l0Y2gobmV3Q29tcGxldGUpe1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIGNvbXBsZXRlSWNvbi5zcmMgPSBwcm9ncmVzc0ljb25Db21wbGV0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUljb24uc3JjID0gcHJvZ3Jlc3NJY29uVW5maW5pc2hlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICB9O1xuXG59OyIsImltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tICcuLi9hcHBMb2dpYy9pbml0aWFsU2V0dXAnO1xuaW1wb3J0IHByb2ZpbGVTVkcgZnJvbSAnLi4vc3ZnL3VzZXIucG5nJztcbmltcG9ydCBzZXR0aW5nc1NWRyBmcm9tICcuLi9zdmcvc2V0dGluZ3MucG5nJztcbmltcG9ydCBwcm9qZWN0UGx1c1NWRyBmcm9tICcuLi9zdmcvcGx1cy5wbmcnO1xuaW1wb3J0IHByb2plY3RIZWFkZXJTVkcgZnJvbSAnLi4vc3ZnL2xheWVycy5wbmcnO1xuXG5pbXBvcnQgeyBtYWtlUHJvamVjdEZvcm1WaXNpYmxlIH0gZnJvbSAnLi9jcmVhdGVOZXdQcm9qZWN0Rm9ybS5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZU1haW5Db250ZW50IH0gZnJvbSAnLi9tYWluQ29udGVudCc7XG5pbXBvcnQgeyByZW1vdmVDdXJyZW50UGFnZSB9IGZyb20gJy4uL2luZGV4LmpzJztcblxuZXhwb3J0IHtnZW5lcmF0ZVNpZGViYXJ9O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdFRvU2lkZWJhcihwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0Jyk7XG5cbiAgY29uc3QgcHJvamVjdEl0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJvamVjdEl0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdEl0ZW1CdXR0b24nKTtcbiAgcHJvamVjdEl0ZW1CdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gIHByb2plY3RJdGVtQnV0dG9uLmRhdGFzZXQucHJvamVjdGlkID0gcHJvamVjdC5nZXRJZCgpO1xuXG4gIGFjdGl2YXRlUHJvamVjdEl0ZW1CdXR0b25MaXN0ZW5lcihwcm9qZWN0SXRlbUJ1dHRvbik7XG5cbiAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1CdXR0b24pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3RGcm9tU2lkZWJhcihwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0Jyk7XG4gIGNvbnN0IHByb2plY3RJdGVtID0gcHJvamVjdExpc3QucXVlcnlTZWxlY3RvcihgbGlbZGF0YS1wcm9qZWN0aWQ9XCIke3Byb2plY3QuZ2V0SWQoKX1cIl1gKTtcblxuICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0SXRlbSk7XG59O1xuXG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVNpZGViYXIoKXtcbiAgY29uc3QgbGVmdFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxlZnRQYW5lbC5jbGFzc0xpc3QuYWRkKCdsZWZ0UGFuZWwnKTtcblxuICBnZW5lcmF0ZVdlbGNvbWVQYW5lbChsZWZ0UGFuZWwpO1xuXG4gIGdlbmVyYXRlUHJvamVjdFBhbmVsKGxlZnRQYW5lbCk7XG5cbiAgZ2VuZXJhdGVTZXR0aW5nc1BhbmVsKGxlZnRQYW5lbCk7XG4gIFxuICBodG1sLmFwcGVuZENoaWxkKGxlZnRQYW5lbCk7XG59O1xuXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVXZWxjb21lUGFuZWwoY29udGFpbmVyKXtcbiAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWxjb21lLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUnKTtcblxuICBjb25zdCBhZGRXZWxjb21lSW1hZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2VsY29tZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgd2VsY29tZUltYWdlLnNyYyA9IHByb2ZpbGVTVkc7XG4gICAgd2VsY29tZUltYWdlLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWVJbWFnZScpO1xuICAgIHJldHVybiB3ZWxjb21lSW1hZ2U7XG4gIH07XG5cbiAgY29uc3QgYWRkV2VsY29tZVBhY2thZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2VsY29tZVBhY2thZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWxjb21lUGFja2FnZS5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lUGFja2FnZScpO1xuICAgIHdlbGNvbWVQYWNrYWdlLmFwcGVuZENoaWxkKGFkZFdlbGNvbWVNZXNzYWdlKCkpO1xuICAgIHdlbGNvbWVQYWNrYWdlLmFwcGVuZENoaWxkKGFkZFdlbGNvbWVOYW1lKCkpO1xuICAgIHJldHVybiB3ZWxjb21lUGFja2FnZTtcbiAgfTtcbiAgXG4gIGNvbnN0IGFkZFdlbGNvbWVNZXNzYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHdlbGNvbWVNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VsY29tZU1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnd2VsY29tZU1lc3NhZ2UnKTtcbiAgICB3ZWxjb21lTWVzc2FnZS50ZXh0Q29udGVudCA9ICdXZWxjb21lLCAnO1xuICAgIHJldHVybiB3ZWxjb21lTWVzc2FnZTtcbiAgfTtcblxuICBjb25zdCBhZGRXZWxjb21lTmFtZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHdlbGNvbWVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgd2VsY29tZU5hbWUuY2xhc3NMaXN0LmFkZCgnd2VsY29tZU5hbWUnKTtcbiAgICAgIHdlbGNvbWVOYW1lLnRleHRDb250ZW50ID0gJ0xpdSBGYW5nJztcbiAgICAgIHJldHVybiB3ZWxjb21lTmFtZTtcbiAgfTtcbiAgXG4gIHdlbGNvbWUuYXBwZW5kQ2hpbGQoYWRkV2VsY29tZUltYWdlKCkpO1xuICB3ZWxjb21lLmFwcGVuZENoaWxkKGFkZFdlbGNvbWVQYWNrYWdlKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG59O1xuXG4gIFxuXG5mdW5jdGlvbiBnZW5lcmF0ZVNldHRpbmdzUGFuZWwoY29udGFpbmVyKSB7XG4gIGNvbnN0IHNldHRpbmdzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNldHRpbmdzT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzT3B0aW9uJyk7XG5cbiAgY29uc3Qgc2V0dGluZ3NJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHNldHRpbmdzSWNvbi5jbGFzc0xpc3QuYWRkKCdzZXR0aW5nc0ljb24nKTtcbiAgc2V0dGluZ3NJY29uLnNyYyA9IHNldHRpbmdzU1ZHO1xuXG4gIGNvbnN0IHNldHRpbmdzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNldHRpbmdzTGFiZWwuY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3NMYWJlbCcpO1xuICBzZXR0aW5nc0xhYmVsLnRleHRDb250ZW50ID0gJ1NldHRpbmdzJztcblxuICBzZXR0aW5nc09wdGlvbi5hcHBlbmRDaGlsZChzZXR0aW5nc0ljb24pO1xuICBzZXR0aW5nc09wdGlvbi5hcHBlbmRDaGlsZChzZXR0aW5nc0xhYmVsKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNldHRpbmdzT3B0aW9uKTtcbn07XG5cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RQYW5lbChjb250YWluZXIpe1xuICBjb25zdCBwcm9qZWN0UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdFBhbmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RQYW5lbCcpO1xuXG4gIGFkZFByb2plY3RQYW5lbEhlYWRlcihwcm9qZWN0UGFuZWwpO1xuICBhZGRQcm9qZWN0TGlzdChwcm9qZWN0UGFuZWwpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0UGFuZWwpO1xufTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdFBhbmVsSGVhZGVyKGNvbnRhaW5lcikge1xuICBjb25zdCBjcmVhdGVQcm9qZWN0c0J1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RQYW5lbEhlYWRlckJ1dHRvbicpO1xuICAgIHByb2plY3RzQnV0dG9uLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICByZXR1cm4gcHJvamVjdHNCdXR0b247XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdHNJY29uID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plY3RzSWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0UGFuZWxTVkcnKTtcbiAgICBwcm9qZWN0c0ljb24uc3JjID0gcHJvamVjdEhlYWRlclNWRztcbiAgICByZXR1cm4gcHJvamVjdHNJY29uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUFkZFByb2plY3RCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xuICAgIGNvbnN0IGFkZFByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYWRkUHJvamVjdEljb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdFBsdXNTVkcnKTtcbiAgICBhZGRQcm9qZWN0SWNvbi5zcmMgPSBwcm9qZWN0UGx1c1NWRztcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZFByb2plY3RJY29uKTtcblxuICAgIGFjdGl2YXRlQWRkUHJvamVjdEJ1dHRvbkxpc3RlbmVyKGFkZFByb2plY3RCdXR0b24pO1xuICAgIHJldHVybiBhZGRQcm9qZWN0QnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RzQnV0dG9uID0gY3JlYXRlUHJvamVjdHNCdXR0b24oKTtcbiAgY29uc3QgcHJvamVjdHNJY29uID0gY3JlYXRlUHJvamVjdHNJY29uKCk7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBjcmVhdGVBZGRQcm9qZWN0QnV0dG9uKCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZChwcm9qZWN0c0ljb24sIHByb2plY3RzQnV0dG9uLCBhZGRQcm9qZWN0QnV0dG9uKTtcbn07XG5cblxuZnVuY3Rpb24gYWN0aXZhdGVBZGRQcm9qZWN0QnV0dG9uTGlzdGVuZXIoYWRkUHJvamVjdEJ1dHRvbil7XG4gICAgXG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtYWtlUHJvamVjdEZvcm1WaXNpYmxlKCk7XG4gIH0pO1xufTtcbiAgXG5mdW5jdGlvbiBhZGRQcm9qZWN0TGlzdChjb250YWluZXIpe1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGlzdCcpO1xuXG4gIG15UHJvamVjdHMuZ2V0UHJvamVjdExpc3QoKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJdGVtQnV0dG9uID0gY3JlYXRlUHJvamVjdEl0ZW1CdXR0b24ocHJvamVjdCk7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1CdXR0b24pO1xuICB9KTtcblxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RJdGVtQnV0dG9uKHByb2plY3QpIHtcbiAgICAgIGNvbnN0IHByb2plY3RJdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBwcm9qZWN0SXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SXRlbUJ1dHRvbicpO1xuICAgICAgcHJvamVjdEl0ZW1CdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gICAgICBwcm9qZWN0SXRlbUJ1dHRvbi5kYXRhc2V0LnByb2plY3RpZCA9IHByb2plY3QuZ2V0SWQoKTtcblxuICAgICAgYWN0aXZhdGVQcm9qZWN0SXRlbUJ1dHRvbkxpc3RlbmVyKHByb2plY3RJdGVtQnV0dG9uKTtcbiAgICAgIHJldHVybiBwcm9qZWN0SXRlbUJ1dHRvbjtcbiAgfTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xufTtcblxuZnVuY3Rpb24gYWN0aXZhdGVQcm9qZWN0SXRlbUJ1dHRvbkxpc3RlbmVyKHByb2plY3RJdGVtQnV0dG9uKXtcbiAgcHJvamVjdEl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgIHJlbW92ZUN1cnJlbnRQYWdlKCk7XG4gIFxuICAgICAgY29uc3QgcHJvamVjdElEID0gcGFyc2VJbnQocHJvamVjdEl0ZW1CdXR0b24uZGF0YXNldC5wcm9qZWN0aWQpO1xuICAgICAgY29uc3QgcHJvamVjdFNlbGVjdGVkID0gbXlQcm9qZWN0cy5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SUQpO1xuICBcbiAgICAgIGdlbmVyYXRlTWFpbkNvbnRlbnQocHJvamVjdFNlbGVjdGVkKTtcbiAgfSk7XG59O1xuXG5cblxuXG4iLCJpbXBvcnQgeyB0b2RvTGlzdE1vZHVsZSB9IGZyb20gXCIuL3RvRG9MaXN0T2JqZWN0XCI7XG5pbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vdG9Eb09iamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RPYmplY3RcIjtcbmltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tIFwiLi9teVByb2plY3RzT2JqZWN0XCI7XG5leHBvcnQgeyBteVByb2plY3RzIH07XG5leHBvcnQgeyBnbG9iYWxQcm9qZWN0Q291bnRlciwgZ2xvYmFsVG9kb0NvdW50ZXIgfTtcbmV4cG9ydCB7IHNldHVwSW5pdGFsUHJvamVjdHMgfTtcblxubGV0IGdsb2JhbFByb2plY3RDb3VudGVyID0gMDtcbmxldCBnbG9iYWxUb2RvQ291bnRlciA9IDA7XG5cbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRQcm9qZWN0Q291bnRlciA9ICgpID0+IHtcbiAgZ2xvYmFsUHJvamVjdENvdW50ZXIrKztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9qZWN0Q291bnRlclZhbHVlID0gKCkgPT4ge1xuICByZXR1cm4gZ2xvYmFsUHJvamVjdENvdW50ZXI7XG59O1xuXG5leHBvcnQgY29uc3QgaW5jcmVtZW50VG9kb0NvdW50ZXIgPSAoKSA9PiB7XG4gIGdsb2JhbFRvZG9Db3VudGVyKys7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VG9kb0NvdW50ZXJWYWx1ZSA9ICgpID0+IHtcbiAgcmV0dXJuIGdsb2JhbFRvZG9Db3VudGVyO1xufTtcblxuZnVuY3Rpb24gc2V0dXBJbml0YWxQcm9qZWN0cygpIHtcblxuICAgIGNvbnN0IGV4YW1wbGVUb2RvcyA9IFsgICAgICAgIFxuICAgIHRvZG8oXCJVcGRhdGUgd2Vic2l0ZSBkZXNpZ25cIiwgXCJSZXZhbXAgdGhlIHdlYnNpdGUgbGF5b3V0IGFuZCBtYWtlIGl0IG1vcmUgdXNlci1mcmllbmRseS4gQ3JlYXRlIG5ldyBncmFwaGljcyB0byByZXBsYWNlIG91dGRhdGVkIG9uZXMuIENvbmR1Y3QgdXNlciB0ZXN0aW5nIHRvIGVuc3VyZSB0aGUgY2hhbmdlcyBhcmUgZWZmZWN0aXZlLlwiLCBcIjAxLzA0LzIwMjNcIiwgXCJoaWdoXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICB0b2RvKFwiT3B0aW1pemUgc2VydmVyIHBlcmZvcm1hbmNlXCIsIFwiQW5hbHl6ZSBzZXJ2ZXIgbG9ncyBhbmQgb3B0aW1pemUgc2VydmVyIHNldHRpbmdzIHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuIEltcGxlbWVudCBjYWNoaW5nIHRvIHNwZWVkIHVwIHBhZ2UgbG9hZCB0aW1lcy4gVXBncmFkZSBoYXJkd2FyZSBpZiBuZWNlc3NhcnkuXCIsIFwiMDIvMDQvMjAyM1wiLCBcIm1lZGl1bVwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgdG9kbyhcIkltcGxlbWVudCBuZXcgZmVhdHVyZVwiLCBcIkFkZCBhIG5ldyBmZWF0dXJlIHRvIHRoZSB3ZWJzaXRlIHRoYXQgYWxsb3dzIHVzZXJzIHRvIHNhdmUgdGhlaXIgcHJlZmVyZW5jZXMuIENyZWF0ZSBhIGRhdGFiYXNlIHRvIHN0b3JlIHVzZXIgcHJlZmVyZW5jZXMuIFRlc3QgdGhlIGZlYXR1cmUgdGhvcm91Z2hseSBiZWZvcmUgcmVsZWFzZS5cIiwgXCIwMy8wNC8yMDIzXCIsIFwiaGlnaFwiLCB0cnVlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICB0b2RvKFwiRGVidWcgcGF5bWVudCBnYXRld2F5XCIsIFwiRml4IGlzc3VlcyB3aXRoIHBheW1lbnQgZ2F0ZXdheSB0aGF0IGFyZSBwcmV2ZW50aW5nIGN1c3RvbWVycyBmcm9tIG1ha2luZyBwdXJjaGFzZXMuIENoZWNrIGZvciBzZXJ2ZXItc2lkZSBlcnJvcnMgYW5kIGNvcnJlY3QgdGhlbS4gVGVzdCB0aGUgZ2F0ZXdheSB3aXRoIG11bHRpcGxlIHBheW1lbnQgbWV0aG9kcyB0byBlbnN1cmUgaXQgd29ya3MgcHJvcGVybHkuXCIsIFwiMDQvMDQvMjAyM1wiLCBcImhpZ2hcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgIHRvZG8oXCJXcml0ZSB1c2VyIGRvY3VtZW50YXRpb25cIiwgXCJDcmVhdGUgYSB1c2VyIGd1aWRlIHRvIGhlbHAgY3VzdG9tZXJzIHVzZSBvdXIgcHJvZHVjdCBtb3JlIGVmZmVjdGl2ZWx5LiBPcmdhbml6ZSB0aGUgZG9jdW1lbnRhdGlvbiBpbnRvIHNlY3Rpb25zIGZvciBlYXNlIG9mIHVzZS4gSW5jbHVkZSBzY3JlZW5zaG90cyBhbmQgc3RlcC1ieS1zdGVwIGluc3RydWN0aW9ucy5cIiwgXCIwNS8wNC8yMDIzXCIsIFwibG93XCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICB0b2RvKFwiVXBkYXRlIHByb2R1Y3Qgc3BlY2lmaWNhdGlvbnNcIiwgXCJVcGRhdGUgdGhlIHByb2R1Y3Qgc3BlY2lmaWNhdGlvbnMgZG9jdW1lbnQgdG8gcmVmbGVjdCByZWNlbnQgY2hhbmdlcy4gUmV2aWV3IGZlZWRiYWNrIGZyb20gY3VzdG9tZXJzIGFuZCBzdGFrZWhvbGRlcnMuIENvbnN1bHQgd2l0aCB0aGUgZGV2ZWxvcG1lbnQgdGVhbSB0byBlbnN1cmUgYWNjdXJhY3kuXCIsIFwiMDYvMDQvMjAyM1wiLCBcIm1lZGl1bVwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgdG9kbyhcIlRlc3Qgd2Vic2l0ZSBvbiBkaWZmZXJlbnQgZGV2aWNlc1wiLCBcIkNoZWNrIHdlYnNpdGUgZnVuY3Rpb25hbGl0eSBhbmQgbGF5b3V0IG9uIGRpZmZlcmVudCBkZXZpY2VzIHRvIGVuc3VyZSBjb21wYXRpYmlsaXR5LiBVc2UgZW11bGF0b3JzIGFuZCByZWFsIGRldmljZXMgdG8gdGVzdC4gVGFrZSBub3RlIG9mIGFueSBpbmNvbnNpc3RlbmNpZXMgb3IgYnVncy5cIiwgXCIwNy8wNC8yMDIzXCIsIFwibG93XCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICB0b2RvKFwiVXBkYXRlIHdlYnNpdGUgY29udGVudFwiLCBcIkFkZCBuZXcgY29udGVudCB0byB0aGUgd2Vic2l0ZSB0byBrZWVwIGl0IGZyZXNoIGFuZCBlbmdhZ2luZyBmb3IgdXNlcnMuIEJyYWluc3Rvcm0gaWRlYXMgZm9yIG5ldyBjb250ZW50LiBFbnN1cmUgdGhlIGNvbnRlbnQgYWxpZ25zIHdpdGggdGhlIGNvbXBhbnkncyB2YWx1ZXMgYW5kIG1pc3Npb24uXCIsIFwiMDgvMDQvMjAyM1wiLCBcIm1lZGl1bVwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgdG9kbyhcIkNyZWF0ZSBtYXJrZXRpbmcgY2FtcGFpZ25cIiwgXCJEZXZlbG9wIGEgbWFya2V0aW5nIGNhbXBhaWduIHRvIGluY3JlYXNlIGJyYW5kIGF3YXJlbmVzcyBhbmQgYXR0cmFjdCBuZXcgY3VzdG9tZXJzLiBJZGVudGlmeSB0YXJnZXQgYXVkaWVuY2UgYW5kIGNyZWF0ZSBwZXJzb25hcy4gUGxhbiBvdXQgc29jaWFsIG1lZGlhIHBvc3RzIGFuZCBlbWFpbCBibGFzdHMuXCIsIFwiMDkvMDQvMjAyM1wiLCBcImhpZ2hcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgIHRvZG8oXCJDb25kdWN0IHVzZXIgcmVzZWFyY2hcIiwgXCJHYXRoZXIgZmVlZGJhY2sgZnJvbSB1c2VycyB0byBpbXByb3ZlIHRoZSBwcm9kdWN0IGFuZCBhZGRyZXNzIHRoZWlyIG5lZWRzLiBDcmVhdGUgc3VydmV5cyBhbmQgZGlzdHJpYnV0ZSB0byB1c2Vycy4gQW5hbHl6ZSB0aGUgZGF0YSB0byBpZGVudGlmeSB0cmVuZHMgYW5kIHBhdHRlcm5zLlwiLCBcIjEwLzA0LzIwMjNcIiwgXCJtZWRpdW1cIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgIHRvZG8oXCJJbXByb3ZlIHNpdGUgc3BlZWRcIiwgXCJPcHRpbWl6ZSB3ZWJzaXRlIHBlcmZvcm1hbmNlIHRvIGltcHJvdmUgc2l0ZSBzcGVlZCBhbmQgcmVkdWNlIHBhZ2UgbG9hZCB0aW1lcy4gTWluaW1pemUgaW1hZ2Ugc2l6ZXMgYW5kIGVuYWJsZSBjb21wcmVzc2lvbi4gVXRpbGl6ZSBhIGNvbnRlbnQgZGVsaXZlcnkgbmV0d29yayAoQ0ROKS5cIiwgXCIxMS8wNC8yMDIzXCIsIFwiaGlnaFwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgdG9kbyhcIkNyZWF0ZSB0cmFpbmluZyBtYXRlcmlhbHNcIiwgXCJEZXZlbG9wIHRyYWluaW5nIG1hdGVyaWFscyB0byBoZWxwIGVtcGxveWVlcyBsZWFybiBuZXcgc2tpbGxzIGFuZCBpbXByb3ZlIHBlcmZvcm1hbmNlLiBJZGVudGlmeSBhcmVhcyB3aGVyZSBlbXBsb3llZXMgbmVlZCB0cmFpbmluZy4gQ3JlYXRlIGluc3RydWN0aW9uYWwgdmlkZW9zIGFuZCB3cml0dGVuIG1hdGVyaWFscy5cIiwgXCIxMi8wNC8yMDIzXCIsIFwibG93XCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICB0b2RvKFwiUmVzb2x2ZSBjdXN0b21lciBjb21wbGFpbnRzXCIsIFwiQWRkcmVzcyBjdXN0b21lciBjb21wbGFpbnRzIGFuZCByZXNvbHZlIGlzc3VlcyB0byBtYWludGFpbiBjdXN0b21lciBzYXRpc2ZhY3Rpb24uIFJlc3BvbmQgcHJvbXB0bHkgdG8gY29tcGxhaW50cy4gRm9sbG93IHVwIHdpdGggY3VzdG9tZXJzIHRvIGVuc3VyZSB0aGUgaXNzdWUgaGFzIGJlZW4gcmVzb2x2ZWQuXCIsIFwiMTMvMDQvMjAyM1wiLCBcImhpZ2hcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLCB0b2RvKFwiUGVyZm9ybSBzZWN1cml0eSBhdWRpdFwiLCBcIkNvbmR1Y3QgYSBzZWN1cml0eSBhdWRpdCBvZiB0aGUgd2Vic2l0ZSB0byBpZGVudGlmeSB2dWxuZXJhYmlsaXRpZXMgYW5kIGltcGxlbWVudCBmaXhlc1wiLCBcIjE2LzA0LzIwMjNcIiwgXCJoaWdoXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICB0b2RvKFwiSW1wcm92ZSB1c2VyIGludGVyZmFjZVwiLCBcIlJlZGVzaWduIHRoZSB1c2VyIGludGVyZmFjZSB0byBpbXByb3ZlIHVzZXIgZXhwZXJpZW5jZSBhbmQgbWFrZSB0aGUgd2Vic2l0ZSBtb3JlIGludHVpdGl2ZSB0byB1c2VcIiwgXCIxNy8wNC8yMDIzXCIsIFwibWVkaXVtXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKVxuICAgIF07XG5cbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHNldHVwRGVmYXVsdFByb2plY3QoZXhhbXBsZVRvZG9zKTtcblxuICAgIGNvbnN0IHRvZG9zU2V0MSA9IGV4YW1wbGVUb2Rvcy5zbGljZSgwLCA2KTtcbiAgICBjb25zdCB0b2Rvc1NldDIgPSBleGFtcGxlVG9kb3Muc2xpY2UoNiwgMTEpO1xuICAgIGNvbnN0IHRvZG9zU2V0MyA9IGV4YW1wbGVUb2Rvcy5zbGljZSgxMSk7XG4gIFxuICAgIHNldHVwRXhhbXBsZVByb2plY3QoXCJXZWJzaXRlIFJlZGVzaWduXCIsIHRvZG9zU2V0MSk7XG4gICAgc2V0dXBFeGFtcGxlUHJvamVjdChcIlNlcnZlciBPcHRpbWl6YXRpb25cIiwgdG9kb3NTZXQyKTtcbiAgICBzZXR1cEV4YW1wbGVQcm9qZWN0KFwiUHJvZHVjdCBEZXZlbG9wbWVudFwiLCB0b2Rvc1NldDMpO1xuXG5cbiAgICBcblxuICAgIHJldHVybiBkZWZhdWx0UHJvamVjdDtcbiAgICBcbn07XG5cblxuXG5mdW5jdGlvbiBzZXR1cEV4YW1wbGVQcm9qZWN0KHRpdGxlLCB0b2RvU2V0KXtcblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gdG9kb0xpc3RNb2R1bGUoKTtcbiAgICB0b2RvTGlzdC5zZXRUb2Rvcyh0b2RvU2V0KTtcblxuICAgIGNvbnN0IHRoZVByb2plY3QgPSBwcm9qZWN0KHRpdGxlLCBnbG9iYWxQcm9qZWN0Q291bnRlcisrKTtcbiAgICB0aGVQcm9qZWN0LnNldFRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICBteVByb2plY3RzLmFkZFByb2plY3QodGhlUHJvamVjdCk7XG5cbn07XG5cblxuZnVuY3Rpb24gc2V0dXBEZWZhdWx0UHJvamVjdCh0b2RvU2V0KXtcblxuICAgIGNvbnN0IGRlZmF1bHRMaXN0ID0gdG9kb0xpc3RNb2R1bGUoKTtcbiAgICBkZWZhdWx0TGlzdC5zZXRUb2Rvcyh0b2RvU2V0KTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdChcIkFsbCBUYXNrc1wiLCBnbG9iYWxQcm9qZWN0Q291bnRlcisrKTtcblxuICAgIGRlZmF1bHRQcm9qZWN0LnNldFRvZG9MaXN0KGRlZmF1bHRMaXN0KTtcblxuICAgIHJldHVybiBkZWZhdWx0UHJvamVjdDtcbn07XG5cbi8vIGZ1bmN0aW9uIGFkZFRvZG9Ub1Byb2plY3QodG9kbywgcHJvamVjdCl7XG4vLyAgICAgcHJvamVjdC5nZXRUb2RvTGlzdCgpLmFkZFRvZG8odG9kbyk7XG4vLyB9O1xuXG4vLyBmdW5jdGlvbiByZW1vdmVUb2RvZnJvbVByb2plY3QodG9kbywgcHJvamVjdCl7XG4vLyAgICAgcHJvamVjdC5nZXRUb2RvTGlzdCgpLnJlbW92ZVRvZG8odG9kbyk7XG4vLyB9O1xuXG4iLCJleHBvcnQge215UHJvamVjdHN9O1xuXG5jb25zdCBteVByb2plY3RzID0gKCgpID0+IHtcbiAgbGV0IHByb2plY3RMaXN0ID0gW107XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RMaXN0LmluZGV4T2YocHJvamVjdCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgcHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RMaXN0O1xuICB9O1xuXG4gIGNvbnN0IHNldFByb2plY3RMaXN0ID0gKG5ld1Byb2plY3RMaXN0KSA9PiB7XG4gICAgcHJvamVjdExpc3QgPSBuZXdQcm9qZWN0TGlzdDtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0QnlJZCA9IChpZCkgPT4ge1xuICAgIHJldHVybiBnZXRQcm9qZWN0TGlzdCgpLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmdldElkKCkgPT09IGlkKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0QnlUb2RvSWQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gZ2V0UHJvamVjdExpc3QoKS5maW5kKHByb2plY3QgPT4gcHJvamVjdC5nZXRUb2RvTGlzdCgpLmdldFRvZG9CeUlkKGlkKSAhPSB1bmRlZmluZWQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGdldFByb2plY3RMaXN0LFxuICAgIHNldFByb2plY3RMaXN0LFxuICAgIGdldFByb2plY3RCeUlkLFxuICAgIGdldFByb2plY3RCeVRvZG9JZCxcbiAgfTtcbn0pKCk7XG4gICIsImV4cG9ydCB7cHJvamVjdH07XG5pbXBvcnQgeyB0b2RvTGlzdE1vZHVsZSB9IGZyb20gXCIuL3RvRG9MaXN0T2JqZWN0XCI7XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUsIGlkKSA9PiB7XG4gIGxldCB0b2RvTGlzdCA9IHRvZG9MaXN0TW9kdWxlKCk7XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHRpdGxlID0gbmV3VGl0bGU7XG5cbiAgY29uc3QgZ2V0VG9kb0xpc3QgPSAoKSA9PiB0b2RvTGlzdDtcbiAgY29uc3Qgc2V0VG9kb0xpc3QgPSAobmV3VG9kb0xpc3QpID0+IHRvZG9MaXN0ID0gbmV3VG9kb0xpc3Q7XG5cbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZDtcblxuICByZXR1cm4geyBnZXRUaXRsZSwgc2V0VGl0bGUsIGdldFRvZG9MaXN0LCBzZXRUb2RvTGlzdCwgZ2V0SWQgfTtcbn07XG5cbiAgXG5cblxuIiwiZXhwb3J0IHt0b2RvTGlzdE1vZHVsZX07XG5cbmNvbnN0IHRvZG9MaXN0TW9kdWxlID0gKCkgPT4ge1xuICBsZXQgdG9kb3MgPSBbXTtcblxuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFRvZG9zID0gKCkgPT4ge1xuICAgIHJldHVybiB0b2RvcztcbiAgfTtcblxuICBjb25zdCBzZXRUb2RvcyA9IChuZXdUb2RvcykgPT4ge1xuICAgIHRvZG9zID0gbmV3VG9kb3M7XG4gIH07XG5cbiAgY29uc3QgZ2V0VG9kb0J5SWQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gZ2V0VG9kb3MoKS5maW5kKHRvZG8gPT4gdG9kby5nZXRJZCgpID09PSBpZCk7XG4gIH07XG5cbiAgY29uc3QgaGFzVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgcmV0dXJuIHRvZG9zLmluY2x1ZGVzKHRvZG8pO1xuICB9O1xuXG4gIHJldHVybiB7IGFkZFRvZG8sIHJlbW92ZVRvZG8sIGdldFRvZG9zLCBzZXRUb2RvcywgZ2V0VG9kb0J5SWQsIGhhc1RvZG8gfTtcbn07XG4iLCJleHBvcnQge3RvZG99O1xuXG5jb25zdCB0b2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGUsIGlkKSA9PiB7XG4gIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG4gIFxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4gdGl0bGUgPSBuZXdUaXRsZTtcbiAgXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICBcbiAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gIGNvbnN0IHNldER1ZURhdGUgPSAobmV3RHVlRGF0ZSkgPT4gZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gIFxuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgXG4gIGNvbnN0IGdldElzQ29tcGxldGUgPSAoKSA9PiBpc0NvbXBsZXRlO1xuICBjb25zdCBzZXRJc0NvbXBsZXRlID0gKG5ld0lzQ29tcGxldGUpID0+IGlzQ29tcGxldGUgPSBuZXdJc0NvbXBsZXRlO1xuICBcbiAgcmV0dXJuIHtcbiAgICBnZXRJZCxcbiAgICBnZXRUaXRsZSxcbiAgICBzZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBzZXREZXNjcmlwdGlvbixcbiAgICBnZXREdWVEYXRlLFxuICAgIHNldER1ZURhdGUsXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgc2V0UHJpb3JpdHksXG4gICAgZ2V0SXNDb21wbGV0ZSxcbiAgICBzZXRJc0NvbXBsZXRlXG4gIH07XG59O1xuXG4gICIsImltcG9ydCB7IGdlbmVyYXRlU2lkZWJhciB9IGZyb20gXCIuL0dlbmVyYXRlRE9NL3NpZGViYXJcIjtcbmltcG9ydCB7IHNldHVwSW5pdGFsUHJvamVjdHMgfSBmcm9tIFwiLi9hcHBMb2dpYy9pbml0aWFsU2V0dXBcIjtcbmltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tIFwiLi9hcHBMb2dpYy9pbml0aWFsU2V0dXBcIjtcbmltcG9ydCB7IGdlbmVyYXRlTWFpbkNvbnRlbnQgfSBmcm9tIFwiLi9HZW5lcmF0ZURPTS9tYWluQ29udGVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdFByb2plY3QgfTtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgYWN0aXZhdGVQcm9qZWN0Rm9ybUV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi9HZW5lcmF0ZURPTS9jcmVhdGVOZXdQcm9qZWN0Rm9ybS5qcyc7XG5pbXBvcnQgeyBhY3RpdmF0ZVRvZG9Gb3JtRXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9HZW5lcmF0ZURPTS9jcmVhdGVOZXdUb2RvRm9ybVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUN1cnJlbnRQYWdlKCl7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWluZXIgPiA6bm90KC5sZWZ0UGFuZWwpJyk7XG4gICAgaHRtbC5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9KTtcbn07XG5cblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBzZXR1cEluaXRhbFByb2plY3RzKCk7XG5cbmdlbmVyYXRlU2lkZWJhcigpO1xuXG5hY3RpdmF0ZVByb2plY3RGb3JtRXZlbnRMaXN0ZW5lcnMoKTtcblxuZ2VuZXJhdGVNYWluQ29udGVudChkZWZhdWx0UHJvamVjdCk7XG5cbmFjdGl2YXRlVG9kb0Zvcm1FdmVudExpc3RlbmVycygpO1xuXG4vLyBldmVudCBsaXN0ZW5lciBmb3IgbG9hZGluZyBkZWZhdWx0IHByb2plY3QgZnJvbSBzaWRlYmFyIGJ5IGNsaWNraW5nIG9uIGl0XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RQYW5lbEhlYWRlckJ1dHRvbicpO1xuXG5kZWZhdWx0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIHJlbW92ZUN1cnJlbnRQYWdlKCk7XG5cbiAgICBnZW5lcmF0ZU1haW5Db250ZW50KGRlZmF1bHRQcm9qZWN0KTtcbn0pO1xuXG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBjbGlja2luZyBvbiB0aGUgdG9kbyBpdGVtLlxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9