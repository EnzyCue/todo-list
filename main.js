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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 20px;\n    font-weight: 500;\n    overflow-x: hidden;\n}\n\n.container {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 25rem 1fr;\n}\n\n.leftPanel {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n    border-right: 3px solid rgb(0, 0, 0);\n    font-size: 30px;\n    font-weight: 600;\n    position: fixed;\n    width: 25rem;\n}\n\n.leftPanel .welcome {\n    display: flex;\n    gap: 1rem;\n    \n    margin-top: 4rem;\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.leftPanel .welcomeMessage{\n    font-size: 30px;\n    font-weight: 400;\n}\n\n.leftPanel img {\n    width: 40px;\n    height: 40px;\n}\n\n.leftPanel > div {\n    margin-left: 2rem;\n}\n\n\n.leftPanel .welcome img {\n    width: 80px;\n    height: 80px;\n}\n\n.leftPanel .projectPanel {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.leftPanel .projectPanelHeaderButton {\n    border: none;\n    border-radius: 0.7rem;\n    background: white;\n    color: black;\n    padding: 1rem 1.5rem;\n    text-transform: capitalize;\n    font-size: 30px;\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n.leftPanel .projectPanel .addProjectButton{\n    border: none;\n    background-color: black;\n    border-radius: 10px;\n    width: 35px;\n    height: 35px;\n}\n.leftPanel .projectPanel .addProjectButton img{\n    fill: black;\n    width: 100%;\n    height: 100%;\n}\n.leftPanel .projectList{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    overflow-y: auto;\n    max-height: 500px;\n    padding-bottom: 1px;\n}\n\n.leftPanel .projectList button{\n    display: flex;\n    align-items: center;\n    border: 3px solid rgb(180, 180,);\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-radius: 0.7rem;\n    margin-top: 1rem;\n    align-self: flex-end;\n    margin-right: 2rem;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    color: black;\n    width: 80%;\n    height: 4rem;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    text-transform: capitalize;\n    font-weight: 600;\n    transition: transform 0.2s ease-in-out;\n}\n\n.leftPanel .projectList button:hover{\n    transform: scale(1.02);\n}\n\n\n\n.leftPanel .settingsOption{\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    margin-left: 3rem;\n    margin-top: 2rem;\n}\n\n\n\n.mainContent{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-column: 2 / 3;\n}\n.mainContent .pageHeading {\n    \n    font-size: 80px;\n    font-weight: 900;\n    color: #fff;\n    background: linear-gradient(to right, #6fcdff, #33f59f);\n    width: 100%;\n    height: 15rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 3px solid rgb(0, 0, 0);\n    text-align: center;\n    overflow: hidden;\n}\n\n.todoButton{\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 0.7rem;\n    margin-top: 1rem;\n    align-self: flex-end;\n    margin-right: 2rem;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    color: black;\n    width: 300px;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    text-transform: capitalize;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.todoPanel {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    width: 95%;\n    margin-top: 1rem;\n}\n.todoItem{\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    width: 100%;\n    justify-content: space-between;\n    height: 100%;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    background-color: #4dbdfa00;\n    border: none;\n    cursor: pointer;\n    transition: background-color 0.2s ease-in-out;\n    border-radius: 0.7rem;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.todoItem:hover {\n    background-color: #ffffff;\n    color: black;\n\n}\n\n.todoContainer{\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    background-color: #000000;\n}\n\n.svgFlexContainer{\n    display: flex;\n    justify-content: space-around;\n    gap: 3px;\n}\n.svgFlexContainer > img{\n    width: 20px;\n}\n\n.completeButton {\n    border-left: none;\n    display: flex;\n    align-items: center;\n    border-radius: 0.7rem;\n    border: none;\n    padding: 1rem 0.8rem;\n    background-color: #000000;\n}\n \n\n.completeButton:hover {\n    background-color: black;\n    color: black;\n\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 20px;\n    font-weight: 500;\n    overflow-x: hidden;\n}\n\n.container {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 25rem 1fr;\n}\n\n.leftPanel {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n    border-right: 3px solid rgb(0, 0, 0);\n    font-size: 30px;\n    font-weight: 600;\n    position: fixed;\n    width: 25rem;\n}\n\n.leftPanel .welcome {\n    display: flex;\n    gap: 1rem;\n    \n    margin-top: 4rem;\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.leftPanel .welcomeMessage{\n    font-size: 30px;\n    font-weight: 400;\n}\n\n.leftPanel img {\n    width: 40px;\n    height: 40px;\n}\n\n.leftPanel > div {\n    margin-left: 2rem;\n}\n\n\n.leftPanel .welcome img {\n    width: 80px;\n    height: 80px;\n}\n\n.leftPanel .projectPanel {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.leftPanel .projectPanelHeaderButton {\n    border: none;\n    border-radius: 0.7rem;\n    background: white;\n    color: black;\n    padding: 1rem 1.5rem;\n    text-transform: capitalize;\n    font-size: 30px;\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n.leftPanel .projectPanel .addProjectButton{\n    border: none;\n    background-color: black;\n    border-radius: 10px;\n    width: 35px;\n    height: 35px;\n}\n.leftPanel .projectPanel .addProjectButton img{\n    fill: black;\n    width: 100%;\n    height: 100%;\n}\n.leftPanel .projectList{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    overflow-y: auto;\n    max-height: 500px;\n    padding-bottom: 1px;\n}\n\n.leftPanel .projectList button{\n    display: flex;\n    align-items: center;\n    border: 3px solid rgb(180, 180,);\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-radius: 0.7rem;\n    margin-top: 1rem;\n    align-self: flex-end;\n    margin-right: 2rem;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    color: black;\n    width: 80%;\n    height: 4rem;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    text-transform: capitalize;\n    font-weight: 600;\n    transition: transform 0.2s ease-in-out;\n}\n\n.leftPanel .projectList button:hover{\n    transform: scale(1.02);\n}\n\n\n\n.leftPanel .settingsOption{\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    margin-left: 3rem;\n    margin-top: 2rem;\n}\n\n\n\n.mainContent{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-column: 2 / 3;\n}\n.mainContent .pageHeading {\n    \n    font-size: 80px;\n    font-weight: 900;\n    color: #fff;\n    background: linear-gradient(to right, #6fcdff, #33f59f);\n    width: 100%;\n    height: 15rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 3px solid rgb(0, 0, 0);\n    text-align: center;\n    overflow: hidden;\n}\n\n.todoButton{\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 0.7rem;\n    margin-top: 1rem;\n    align-self: flex-end;\n    margin-right: 2rem;\n    background: linear-gradient(to bottom right, #6fcdff, #33f59f);\n    color: black;\n    width: 300px;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    text-transform: capitalize;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.todoPanel {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    width: 95%;\n    margin-top: 1rem;\n}\n.todoItem{\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    width: 100%;\n    justify-content: space-between;\n    height: 100%;\n    padding: 1rem 1.5rem;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    background-color: #4dbdfa00;\n    border: none;\n    cursor: pointer;\n    transition: background-color 0.2s ease-in-out;\n    border-radius: 0.7rem;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.todoItem:hover {\n    background-color: #ffffff;\n    color: black;\n\n}\n\n.todoContainer{\n    border: 3px solid rgb(0, 0, 0);\n    border-radius: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    background-color: #000000;\n}\n\n.svgFlexContainer{\n    display: flex;\n    justify-content: space-around;\n    gap: 3px;\n}\n.svgFlexContainer > img{\n    width: 20px;\n}\n\n.completeButton {\n    border-left: none;\n    display: flex;\n    align-items: center;\n    border-radius: 0.7rem;\n    border: none;\n    padding: 1rem 0.8rem;\n    background-color: #000000;\n}\n \n\n.completeButton:hover {\n    background-color: black;\n    color: black;\n\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _svg_progressIconComplete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/progressIconComplete.png */ "./src/svg/progressIconComplete.png");
/* harmony import */ var _svg_progressIconUnfinished_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/progressIconUnfinished.png */ "./src/svg/progressIconUnfinished.png");
/* harmony import */ var _appLogic_projectObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appLogic/projectObject */ "./src/appLogic/projectObject.js");









const html = document.querySelector('.container');

function addTodoButton(container){

    const todoButton = document.createElement('button'); 

    todoButton.classList.add('todoButton');

    todoButton.textContent = 'Add new item to the list';


    container.appendChild(todoButton);

};

function generateMainContent(project){
    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    generateHeading(mainContent, project.getTitle());

    addTodoButton(mainContent);

    generateTodoPanel(mainContent, project.getTodoList());

    
    
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
    generateTodoIsCompleteButton(todoContainer, todo);

    container.appendChild(todoContainer);
};

function generateTodoItem(container, todo){
    const todoButton = document.createElement('button');
    todoButton.classList.add('todoItem');

    todoButton.dataset.id = todo.getId();
    
    generatePrioritySvg(todoButton, todo.getPriority());
    generateTodoTitle(todoButton, todo.getTitle());
    generateTodoDate(todoButton, todo.getDueDate());
    
    container.appendChild(todoButton);
};


function generateTodoIsCompleteButton(container, todo){

    const completeButton = document.createElement('button'); 
    completeButton.classList.add('completeButton');
    completeButton.dataset.id = todo.getId();

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


function generatePrioritySvg(container, priority) {
    switch (priority) {
      case 'high':
        generateSvg(container, _svg_prioritySVGHigh_png__WEBPACK_IMPORTED_MODULE_0__, 3);
        break;
  
      case 'medium':
        generateSvg(container, _svg_prioritySVGHigh_png__WEBPACK_IMPORTED_MODULE_0__, 2);
        break;
  
      case 'low':
        generateSvg(container, _svg_prioritySVGHigh_png__WEBPACK_IMPORTED_MODULE_0__, 1);
        break;
    };
  };
  
  function generateSvg(container, svgSrc, count) {
    const flexContainer = document.createElement('div');
    flexContainer.classList.add('svgFlexContainer');
  
    for (let i = 0; i < count; i++) {
      const svgIcon = document.createElement('img');
      svgIcon.classList.add('priorityIcon');
      svgIcon.src = svgSrc;
      flexContainer.appendChild(svgIcon);
    }
  
    container.appendChild(flexContainer);
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








function addProjectToSidebar(project) {
    const projectList = document.querySelector('.projectList');

    const projectItemButton = document.createElement('projectItemButton');
    projectItemButton.textContent = project.getTitle();
    projectItemButton.dataset.id = project.getId();
  
    projectList.appendChild(projectItemButton);
};

function removeProjectFromSidebar(project) {
    const projectList = document.querySelector('.projectList');
    const projectItem = projectList.querySelector(`li[data-id="${project.getId()}"]`);
  
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
      return addProjectButton;
    };
  
    const projectsButton = createProjectsButton();
    const projectsIcon = createProjectsIcon();
    const addProjectButton = createAddProjectButton();
  
    container.append(projectsIcon, projectsButton, addProjectButton);
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
        projectItemButton.dataset.id = project.getId();
        return projectItemButton;
    };
  
    container.appendChild(projectList);
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
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Update website design", "Revamp the website layout and make it more user-friendly", "01/04/2023", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Optimize server performance", "Analyze server logs and optimize server settings to improve performance", "02/04/2023", "medium", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Implement new feature", "Add a new feature to the website that allows users to save their preferences", "03/04/2023", "high", true, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Debug payment gateway", "Fix issues with payment gateway that are preventing customers from making purchases", "04/04/2023", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Write user documentation", "Create a user guide to help customers use our product more effectively", "05/04/2023", "low", true, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Update product specifications", "Update the product specifications document to reflect recent changes", "06/04/2023", "medium", true, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Test website on different devices", "Check website functionality and layout on different devices to ensure compatibility", "07/04/2023", "low", true, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Update website content", "Add new content to the website to keep it fresh and engaging for users", "08/04/2023", "medium", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Create marketing campaign", "Develop a marketing campaign to increase brand awareness and attract new customers", "09/04/2023", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Conduct user research", "Gather feedback from users to improve the product and address their needs", "10/04/2023", "medium", true, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Improve site speed", "Optimize website performance to improve site speed and reduce page load times", "11/04/2023", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Create training materials", "Develop training materials to help employees learn new skills and improve performance", "12/04/2023", "low", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Resolve customer complaints", "Address customer complaints and resolve issues to maintain customer satisfaction", "13/04/2023", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Improve search functionality", "Improve the search functionality of the website to make it easier for users to find what they need", "14/04/2023", "medium", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Create product roadmap", "Develop a roadmap for the product to guide future development and prioritize features", "15/04/2023", "high", true, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Perform security audit", "Conduct a security audit of the website to identify vulnerabilities and implement fixes", "16/04/2023", "high", false, ++globalTodoCounter),
        (0,_toDoObject__WEBPACK_IMPORTED_MODULE_1__.todo)("Improve user interface", "Redesign the user interface to improve user experience and make the website more intuitive to use", "17/04/2023", "medium", false, ++globalTodoCounter)
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






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


// event listener for loading default project from sidebar by clicking on it

const defaultProjectButton = document.querySelector('.projectPanelHeaderButton');

defaultProjectButton.addEventListener('click', () => {

    removeCurrentPage();

    (0,_GenerateDOM_mainContent__WEBPACK_IMPORTED_MODULE_2__.generateMainContent)(defaultProject);
});

// event listener for clicking the check mark

const completeButton = document.querySelector('.completeButton');

completeButton.addEventListener('click', () => {
    const todoID = parseInt(completeButton.dataset.id);
    const projectSelected = _appLogic_initialSetup__WEBPACK_IMPORTED_MODULE_1__.myProjects.getProjectById(todoID);
    // need to implement a method for adding getting a todo through its id :(.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFNBQVMsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFlBQVksNkJBQTZCLGlCQUFpQixnQkFBZ0IsR0FBRyxTQUFTLG9CQUFvQixtQkFBbUIsMEpBQTBKLHNCQUFzQix1QkFBdUIseUJBQXlCLEdBQUcsZ0JBQWdCLGtCQUFrQixtQkFBbUIsb0JBQW9CLHVDQUF1QyxHQUFHLGdCQUFnQixvQkFBb0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IsMkNBQTJDLHNCQUFzQix1QkFBdUIsc0JBQXNCLG1CQUFtQixHQUFHLHlCQUF5QixvQkFBb0IsZ0JBQWdCLDZCQUE2QixzQkFBc0IsdUJBQXVCLEdBQUcsK0JBQStCLHNCQUFzQix1QkFBdUIsR0FBRyxvQkFBb0Isa0JBQWtCLG1CQUFtQixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRywrQkFBK0Isa0JBQWtCLG1CQUFtQixHQUFHLDhCQUE4QixvQkFBb0Isb0NBQW9DLDBCQUEwQixzQkFBc0IsR0FBRyx3Q0FBd0MsbUJBQW1CLDRCQUE0Qix3QkFBd0IsbUJBQW1CLDJCQUEyQixpQ0FBaUMsc0JBQXNCLHVCQUF1QixvQkFBb0IsMEJBQTBCLHNCQUFzQixHQUFHLDZDQUE2QyxtQkFBbUIsOEJBQThCLDBCQUEwQixrQkFBa0IsbUJBQW1CLEdBQUcsaURBQWlELGtCQUFrQixrQkFBa0IsbUJBQW1CLEdBQUcsMEJBQTBCLG9CQUFvQiw2QkFBNkIsb0NBQW9DLHVCQUF1Qix3QkFBd0IsMEJBQTBCLEdBQUcsbUNBQW1DLG9CQUFvQiwwQkFBMEIsdUNBQXVDLHVCQUF1Qix3QkFBd0IseUJBQXlCLDRCQUE0Qix1QkFBdUIsMkJBQTJCLHlCQUF5QixxRUFBcUUsbUJBQW1CLGlCQUFpQixtQkFBbUIsMkJBQTJCLHNCQUFzQixpQ0FBaUMsdUJBQXVCLDZDQUE2QyxHQUFHLHlDQUF5Qyw2QkFBNkIsR0FBRyxtQ0FBbUMsb0JBQW9CLDBCQUEwQixnQkFBZ0Isd0JBQXdCLHVCQUF1QixHQUFHLHFCQUFxQixvQkFBb0IsNkJBQTZCLDBCQUEwQix5QkFBeUIsR0FBRyw2QkFBNkIsNEJBQTRCLHVCQUF1QixrQkFBa0IsOERBQThELGtCQUFrQixvQkFBb0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsNENBQTRDLHlCQUF5Qix1QkFBdUIsR0FBRyxnQkFBZ0IscUNBQXFDLDRCQUE0Qix1QkFBdUIsMkJBQTJCLHlCQUF5QixxRUFBcUUsbUJBQW1CLG1CQUFtQiwyQkFBMkIsc0JBQXNCLGlDQUFpQyx1QkFBdUIsc0JBQXNCLEdBQUcsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsR0FBRyxZQUFZLG9CQUFvQiwwQkFBMEIsa0JBQWtCLGtCQUFrQixxQ0FBcUMsbUJBQW1CLDJCQUEyQixzQkFBc0IsdUJBQXVCLHlCQUF5Qiw0QkFBNEIsZ0NBQWdDLGtDQUFrQyxtQkFBbUIsc0JBQXNCLG9EQUFvRCw0QkFBNEIsb0NBQW9DLGlDQUFpQyxHQUFHLHFCQUFxQixnQ0FBZ0MsbUJBQW1CLEtBQUssbUJBQW1CLHFDQUFxQywwQkFBMEIsb0JBQW9CLHFDQUFxQywwQkFBMEIsa0JBQWtCLGdDQUFnQyxHQUFHLHNCQUFzQixvQkFBb0Isb0NBQW9DLGVBQWUsR0FBRywwQkFBMEIsa0JBQWtCLEdBQUcscUJBQXFCLHdCQUF3QixvQkFBb0IsMEJBQTBCLDRCQUE0QixtQkFBbUIsMkJBQTJCLGdDQUFnQyxHQUFHLDhCQUE4Qiw4QkFBOEIsbUJBQW1CLEtBQUsscUJBQXFCO0FBQ3JuWTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxRDs7QUFFYztBQUNJOztBQUVuQjs7QUFFdkI7O0FBRTdCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsMERBQW9CO0FBQ25EOztBQUVBO0FBQ0EsK0JBQStCLDREQUFzQjtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxREFBVztBQUMxQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SnNEO0FBQ2I7QUFDSztBQUNEO0FBQ0k7O0FBRXhCOztBQUVsQjtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsaUVBQWlFLGdCQUFnQjtBQUNqRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwwQ0FBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBDQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkVBQXlCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsOENBQVc7O0FBRWxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEtrRDtBQUNkO0FBQ007QUFDTTtBQUMxQjtBQUM2QjtBQUNwQjs7QUFFL0I7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQSxRQUFRLGlEQUFJO0FBQ1osUUFBUSxpREFBSTtBQUNaLFFBQVEsaURBQUk7QUFDWixRQUFRLGlEQUFJO0FBQ1osUUFBUSxpREFBSTtBQUNaLFFBQVEsaURBQUk7QUFDWixRQUFRLGlEQUFJO0FBQ1osUUFBUSxpREFBSTtBQUNaLFFBQVEsaURBQUk7QUFDWixRQUFRLGlEQUFJO0FBQ1osUUFBUSxpREFBSTtBQUNaLFFBQVEsaURBQUk7QUFDWixRQUFRLGlEQUFJO0FBQ1osUUFBUSxpREFBSTtBQUNaLFFBQVEsaURBQUk7QUFDWixRQUFRLGlEQUFJO0FBQ1osUUFBUSxpREFBSTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQSxxQkFBcUIsK0RBQWM7QUFDbkM7O0FBRUEsdUJBQXVCLHVEQUFPO0FBQzlCOztBQUVBLElBQUksb0VBQXFCOztBQUV6Qjs7O0FBR0E7O0FBRUEsd0JBQXdCLCtEQUFjO0FBQ3RDOztBQUVBLDJCQUEyQix1REFBTzs7QUFFbEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEZvQjs7QUFFcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7O0FDdENpQjtBQUNpQzs7QUFFbEQ7QUFDQSxpQkFBaUIsK0RBQWM7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJ3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7QUMxQmM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXdEO0FBQ007QUFDVDtBQUNXO0FBQzNDOztBQUVyQix1QkFBdUIsMkVBQW1COztBQUUxQyxxRUFBZTs7QUFFZiw2RUFBbUI7O0FBRW5COztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0MsNkVBQXlCOztBQUV6RCxRQUFRLDZFQUFtQjtBQUMzQixLQUFLO0FBQ0wsQ0FBQzs7O0FBR0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSSw2RUFBbUI7QUFDdkIsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLDZFQUF5QjtBQUNyRDs7QUFFQSxDQUFDOztBQUVEOzs7Ozs7QUFNQTs7Ozs7QUFLQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9HZW5lcmF0ZURPTS9tYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvR2VuZXJhdGVET00vc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwTG9naWMvaW5pdGlhbFNldHVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBMb2dpYy9teVByb2plY3RzT2JqZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBMb2dpYy9wcm9qZWN0T2JqZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBMb2dpYy90b0RvTGlzdE9iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwTG9naWMvdG9Eb09iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXJlbSAxZnI7XFxufVxcblxcbi5sZWZ0UGFuZWwge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRyZW07XFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAyNXJlbTtcXG59XFxuXFxuLmxlZnRQYW5lbCAud2VsY29tZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgXFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmxlZnRQYW5lbCAud2VsY29tZU1lc3NhZ2V7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmxlZnRQYW5lbCBpbWcge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4ubGVmdFBhbmVsID4gZGl2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcblxcblxcbi5sZWZ0UGFuZWwgLndlbGNvbWUgaW1nIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuLmxlZnRQYW5lbCAucHJvamVjdFBhbmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmxlZnRQYW5lbCAucHJvamVjdFBhbmVsSGVhZGVyQnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbCAuYWRkUHJvamVjdEJ1dHRvbntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuLmxlZnRQYW5lbCAucHJvamVjdFBhbmVsIC5hZGRQcm9qZWN0QnV0dG9uIGltZ3tcXG4gICAgZmlsbDogYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RMaXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XFxufVxcblxcbi5sZWZ0UGFuZWwgLnByb2plY3RMaXN0IGJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDE4MCwgMTgwLCk7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzZmY2RmZiwgIzMzZjU5Zik7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5sZWZ0UGFuZWwgLnByb2plY3RMaXN0IGJ1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG59XFxuXFxuXFxuXFxuLmxlZnRQYW5lbCAuc2V0dGluZ3NPcHRpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcblxcblxcbi5tYWluQ29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG4ubWFpbkNvbnRlbnQgLnBhZ2VIZWFkaW5nIHtcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZmY2RmZiwgIzMzZjU5Zik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udG9kb0J1dHRvbntcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM2ZmNkZmYsICMzM2Y1OWYpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9QYW5lbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLnRvZG9JdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRkYmRmYTAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuXFxuLnRvZG9JdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cXG4udG9kb0NvbnRhaW5lcntcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4uc3ZnRmxleENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGdhcDogM3B4O1xcbn1cXG4uc3ZnRmxleENvbnRhaW5lciA+IGltZ3tcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5jb21wbGV0ZUJ1dHRvbiB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMXJlbSAwLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcbiBcXG5cXG4uY29tcGxldGVCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUpBQW1KO0lBQ25KLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7O0lBRVQsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsOERBQThEO0lBQzlELFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHVEQUF1RDtJQUN2RCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiw4REFBOEQ7SUFDOUQsWUFBWTtJQUNaLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZUFBZTtJQUNmLDZDQUE2QztJQUM3QyxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsUUFBUTtBQUNaO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7O0FBRWhCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVyZW0gMWZyO1xcbn1cXG5cXG4ubGVmdFBhbmVsIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMjVyZW07XFxufVxcblxcbi5sZWZ0UGFuZWwgLndlbGNvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIFxcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5sZWZ0UGFuZWwgLndlbGNvbWVNZXNzYWdle1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5sZWZ0UGFuZWwgaW1nIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmxlZnRQYW5lbCA+IGRpdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG5cXG5cXG4ubGVmdFBhbmVsIC53ZWxjb21lIGltZyB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbEhlYWRlckJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubGVmdFBhbmVsIC5wcm9qZWN0UGFuZWwgLmFkZFByb2plY3RCdXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxufVxcbi5sZWZ0UGFuZWwgLnByb2plY3RQYW5lbCAuYWRkUHJvamVjdEJ1dHRvbiBpbWd7XFxuICAgIGZpbGw6IGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubGVmdFBhbmVsIC5wcm9qZWN0TGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xcbn1cXG5cXG4ubGVmdFBhbmVsIC5wcm9qZWN0TGlzdCBidXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigxODAsIDE4MCwpO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM2ZmNkZmYsICMzM2Y1OWYpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubGVmdFBhbmVsIC5wcm9qZWN0TGlzdCBidXR0b246aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxufVxcblxcblxcblxcbi5sZWZ0UGFuZWwgLnNldHRpbmdzT3B0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG5cXG5cXG4ubWFpbkNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuLm1haW5Db250ZW50IC5wYWdlSGVhZGluZyB7XFxuICAgIFxcbiAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2ZmNkZmYsICMzM2Y1OWYpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRvZG9CdXR0b257XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNmZjZGZmLCAjMzNmNTlmKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvUGFuZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbi50b2RvSXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZGJkZmEwMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxufVxcblxcbi50b2RvSXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG59XFxuXFxuLnRvZG9Db250YWluZXJ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLnN2Z0ZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDNweDtcXG59XFxuLnN2Z0ZsZXhDb250YWluZXIgPiBpbWd7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uY29tcGxldGVCdXR0b24ge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMC44cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG4gXFxuXFxuLmNvbXBsZXRlQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHByaW9yaXR5U1ZHIGZyb20gJy4uL3N2Zy9wcmlvcml0eVNWR0hpZ2gucG5nJztcblxuaW1wb3J0IHByb2dyZXNzSWNvbkNvbXBsZXRlIGZyb20gJy4uL3N2Zy9wcm9ncmVzc0ljb25Db21wbGV0ZS5wbmcnO1xuaW1wb3J0IHByb2dyZXNzSWNvblVuZmluaXNoZWQgZnJvbSAnLi4vc3ZnL3Byb2dyZXNzSWNvblVuZmluaXNoZWQucG5nJztcblxuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gJy4uL2FwcExvZ2ljL3Byb2plY3RPYmplY3QnO1xuXG5leHBvcnQge2dlbmVyYXRlTWFpbkNvbnRlbnR9O1xuXG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBhZGRUb2RvQnV0dG9uKGNvbnRhaW5lcil7XG5cbiAgICBjb25zdCB0b2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuXG4gICAgdG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvQnV0dG9uJyk7XG5cbiAgICB0b2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBuZXcgaXRlbSB0byB0aGUgbGlzdCc7XG5cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQnV0dG9uKTtcblxufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVNYWluQ29udGVudChwcm9qZWN0KXtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW5Db250ZW50Jyk7XG5cbiAgICBnZW5lcmF0ZUhlYWRpbmcobWFpbkNvbnRlbnQsIHByb2plY3QuZ2V0VGl0bGUoKSk7XG5cbiAgICBhZGRUb2RvQnV0dG9uKG1haW5Db250ZW50KTtcblxuICAgIGdlbmVyYXRlVG9kb1BhbmVsKG1haW5Db250ZW50LCBwcm9qZWN0LmdldFRvZG9MaXN0KCkpO1xuXG4gICAgXG4gICAgXG4gICAgaHRtbC5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG5cbn07XG5cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhlYWRpbmcoY29udGFpbmVyLCB0aXRsZSl7XG4gICAgY29uc3QgcGFnZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdwYWdlSGVhZGluZycpO1xuXG4gICAgcGFnZUhlYWRpbmcudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlSGVhZGluZyk7XG59O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRvZG9QYW5lbChjb250YWluZXIsIHRvZG9MaXN0KXtcbiAgICBjb25zdCB0b2RvUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvUGFuZWwuY2xhc3NMaXN0LmFkZCgndG9kb1BhbmVsJyk7XG5cblxuICAgIHRvZG9MaXN0LmdldFRvZG9zKCkuZm9yRWFjaCh0b2RvSXRlbSA9PiB7XG4gICAgICAgIGdlbmVyYXRlVG9kbyh0b2RvUGFuZWwsIHRvZG9JdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvUGFuZWwpO1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVUb2RvKGNvbnRhaW5lciwgdG9kbyl7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb0NvbnRhaW5lcicpO1xuXG4gICAgZ2VuZXJhdGVUb2RvSXRlbSh0b2RvQ29udGFpbmVyLCB0b2RvKTtcbiAgICBnZW5lcmF0ZVRvZG9Jc0NvbXBsZXRlQnV0dG9uKHRvZG9Db250YWluZXIsIHRvZG8pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVUb2RvSXRlbShjb250YWluZXIsIHRvZG8pe1xuICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9JdGVtJyk7XG5cbiAgICB0b2RvQnV0dG9uLmRhdGFzZXQuaWQgPSB0b2RvLmdldElkKCk7XG4gICAgXG4gICAgZ2VuZXJhdGVQcmlvcml0eVN2Zyh0b2RvQnV0dG9uLCB0b2RvLmdldFByaW9yaXR5KCkpO1xuICAgIGdlbmVyYXRlVG9kb1RpdGxlKHRvZG9CdXR0b24sIHRvZG8uZ2V0VGl0bGUoKSk7XG4gICAgZ2VuZXJhdGVUb2RvRGF0ZSh0b2RvQnV0dG9uLCB0b2RvLmdldER1ZURhdGUoKSk7XG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9CdXR0b24pO1xufTtcblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRvZG9Jc0NvbXBsZXRlQnV0dG9uKGNvbnRhaW5lciwgdG9kbyl7XG5cbiAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICBjb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZUJ1dHRvbicpO1xuICAgIGNvbXBsZXRlQnV0dG9uLmRhdGFzZXQuaWQgPSB0b2RvLmdldElkKCk7XG5cbiAgICBjb25zdCBjb21wbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb21wbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVJY29uJyk7XG5cbiAgICBzd2l0Y2godG9kby5nZXRJc0NvbXBsZXRlKCkpe1xuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICBjb21wbGV0ZUljb24uc3JjID0gcHJvZ3Jlc3NJY29uQ29tcGxldGU7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgY29tcGxldGVJY29uLnNyYyA9IHByb2dyZXNzSWNvblVuZmluaXNoZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9O1xuXG4gICAgY29tcGxldGVCdXR0b24uYXBwZW5kQ2hpbGQoY29tcGxldGVJY29uKTsgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTsgXG59O1xuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlVG9kb0RhdGUoY29udGFpbmVyLCBkYXRlKXtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0ZScpO1xuXG4gICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVG9kb1RpdGxlKGNvbnRhaW5lciwgdGl0bGUpe1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kb1RpdGxlJyk7XG5cbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xufTtcblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByaW9yaXR5U3ZnKGNvbnRhaW5lciwgcHJpb3JpdHkpIHtcbiAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgZ2VuZXJhdGVTdmcoY29udGFpbmVyLCBwcmlvcml0eVNWRywgMyk7XG4gICAgICAgIGJyZWFrO1xuICBcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIGdlbmVyYXRlU3ZnKGNvbnRhaW5lciwgcHJpb3JpdHlTVkcsIDIpO1xuICAgICAgICBicmVhaztcbiAgXG4gICAgICBjYXNlICdsb3cnOlxuICAgICAgICBnZW5lcmF0ZVN2Zyhjb250YWluZXIsIHByaW9yaXR5U1ZHLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfTtcbiAgfTtcbiAgXG4gIGZ1bmN0aW9uIGdlbmVyYXRlU3ZnKGNvbnRhaW5lciwgc3ZnU3JjLCBjb3VudCkge1xuICAgIGNvbnN0IGZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmbGV4Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N2Z0ZsZXhDb250YWluZXInKTtcbiAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBzdmdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBzdmdJY29uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5SWNvbicpO1xuICAgICAgc3ZnSWNvbi5zcmMgPSBzdmdTcmM7XG4gICAgICBmbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKHN2Z0ljb24pO1xuICAgIH1cbiAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZsZXhDb250YWluZXIpO1xuICB9OyIsImltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tICcuLi9hcHBMb2dpYy9pbml0aWFsU2V0dXAnO1xuaW1wb3J0IHByb2ZpbGVTVkcgZnJvbSAnLi4vc3ZnL3VzZXIucG5nJztcbmltcG9ydCBzZXR0aW5nc1NWRyBmcm9tICcuLi9zdmcvc2V0dGluZ3MucG5nJztcbmltcG9ydCBwcm9qZWN0UGx1c1NWRyBmcm9tICcuLi9zdmcvcGx1cy5wbmcnO1xuaW1wb3J0IHByb2plY3RIZWFkZXJTVkcgZnJvbSAnLi4vc3ZnL2xheWVycy5wbmcnO1xuXG5leHBvcnQge2dlbmVyYXRlU2lkZWJhcn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0VG9TaWRlYmFyKHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGlzdCcpO1xuXG4gICAgY29uc3QgcHJvamVjdEl0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcm9qZWN0SXRlbUJ1dHRvbicpO1xuICAgIHByb2plY3RJdGVtQnV0dG9uLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICAgIHByb2plY3RJdGVtQnV0dG9uLmRhdGFzZXQuaWQgPSBwcm9qZWN0LmdldElkKCk7XG4gIFxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RJdGVtQnV0dG9uKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0RnJvbVNpZGViYXIocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0Jyk7XG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBwcm9qZWN0TGlzdC5xdWVyeVNlbGVjdG9yKGBsaVtkYXRhLWlkPVwiJHtwcm9qZWN0LmdldElkKCl9XCJdYCk7XG4gIFxuICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKHByb2plY3RJdGVtKTtcbn07XG5cbmNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU2lkZWJhcigpe1xuICAgIGNvbnN0IGxlZnRQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRQYW5lbC5jbGFzc0xpc3QuYWRkKCdsZWZ0UGFuZWwnKTtcblxuICAgIGdlbmVyYXRlV2VsY29tZVBhbmVsKGxlZnRQYW5lbCk7XG5cbiAgICBnZW5lcmF0ZVByb2plY3RQYW5lbChsZWZ0UGFuZWwpO1xuXG4gICAgZ2VuZXJhdGVTZXR0aW5nc1BhbmVsKGxlZnRQYW5lbCk7XG4gICAgXG4gICAgaHRtbC5hcHBlbmRDaGlsZChsZWZ0UGFuZWwpO1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVXZWxjb21lUGFuZWwoY29udGFpbmVyKXtcbiAgICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VsY29tZS5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lJyk7XG4gIFxuICAgIGNvbnN0IGFkZFdlbGNvbWVJbWFnZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHdlbGNvbWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgd2VsY29tZUltYWdlLnNyYyA9IHByb2ZpbGVTVkc7XG4gICAgICB3ZWxjb21lSW1hZ2UuY2xhc3NMaXN0LmFkZCgnd2VsY29tZUltYWdlJyk7XG4gICAgICByZXR1cm4gd2VsY29tZUltYWdlO1xuICAgIH07XG4gIFxuICAgIGNvbnN0IGFkZFdlbGNvbWVQYWNrYWdlID0gKCkgPT4ge1xuICAgICAgY29uc3Qgd2VsY29tZVBhY2thZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHdlbGNvbWVQYWNrYWdlLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWVQYWNrYWdlJyk7XG4gICAgICB3ZWxjb21lUGFja2FnZS5hcHBlbmRDaGlsZChhZGRXZWxjb21lTWVzc2FnZSgpKTtcbiAgICAgIHdlbGNvbWVQYWNrYWdlLmFwcGVuZENoaWxkKGFkZFdlbGNvbWVOYW1lKCkpO1xuICAgICAgcmV0dXJuIHdlbGNvbWVQYWNrYWdlO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgYWRkV2VsY29tZU1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgICBjb25zdCB3ZWxjb21lTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgd2VsY29tZU1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnd2VsY29tZU1lc3NhZ2UnKTtcbiAgICAgIHdlbGNvbWVNZXNzYWdlLnRleHRDb250ZW50ID0gJ1dlbGNvbWUsICc7XG4gICAgICByZXR1cm4gd2VsY29tZU1lc3NhZ2U7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFdlbGNvbWVOYW1lID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB3ZWxjb21lTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgd2VsY29tZU5hbWUuY2xhc3NMaXN0LmFkZCgnd2VsY29tZU5hbWUnKTtcbiAgICAgICAgd2VsY29tZU5hbWUudGV4dENvbnRlbnQgPSAnTGl1IEZhbmcnO1xuICAgICAgICByZXR1cm4gd2VsY29tZU5hbWU7XG4gICAgfTtcbiAgICBcbiAgICB3ZWxjb21lLmFwcGVuZENoaWxkKGFkZFdlbGNvbWVJbWFnZSgpKTtcbiAgICB3ZWxjb21lLmFwcGVuZENoaWxkKGFkZFdlbGNvbWVQYWNrYWdlKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcbn07XG5cbiAgXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0UGFuZWwoY29udGFpbmVyKXtcbiAgICBjb25zdCBwcm9qZWN0UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0UGFuZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdFBhbmVsJyk7XG5cbiAgICBhZGRQcm9qZWN0UGFuZWxIZWFkZXIocHJvamVjdFBhbmVsKTtcbiAgICBhZGRQcm9qZWN0TGlzdChwcm9qZWN0UGFuZWwpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RQYW5lbCk7XG59O1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0UGFuZWxIZWFkZXIoY29udGFpbmVyKSB7XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdHNCdXR0b24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcHJvamVjdHNCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdFBhbmVsSGVhZGVyQnV0dG9uJyk7XG4gICAgICBwcm9qZWN0c0J1dHRvbi50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgICByZXR1cm4gcHJvamVjdHNCdXR0b247XG4gICAgfTtcbiAgXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdHNJY29uID0gKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdHNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBwcm9qZWN0c0ljb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdFBhbmVsU1ZHJyk7XG4gICAgICBwcm9qZWN0c0ljb24uc3JjID0gcHJvamVjdEhlYWRlclNWRztcbiAgICAgIHJldHVybiBwcm9qZWN0c0ljb247XG4gICAgfTtcbiAgXG4gICAgY29uc3QgY3JlYXRlQWRkUHJvamVjdEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xuICAgICAgY29uc3QgYWRkUHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGFkZFByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RQbHVzU1ZHJyk7XG4gICAgICBhZGRQcm9qZWN0SWNvbi5zcmMgPSBwcm9qZWN0UGx1c1NWRztcbiAgICAgIGFkZFByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEljb24pO1xuICAgICAgcmV0dXJuIGFkZFByb2plY3RCdXR0b247XG4gICAgfTtcbiAgXG4gICAgY29uc3QgcHJvamVjdHNCdXR0b24gPSBjcmVhdGVQcm9qZWN0c0J1dHRvbigpO1xuICAgIGNvbnN0IHByb2plY3RzSWNvbiA9IGNyZWF0ZVByb2plY3RzSWNvbigpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBjcmVhdGVBZGRQcm9qZWN0QnV0dG9uKCk7XG4gIFxuICAgIGNvbnRhaW5lci5hcHBlbmQocHJvamVjdHNJY29uLCBwcm9qZWN0c0J1dHRvbiwgYWRkUHJvamVjdEJ1dHRvbik7XG59O1xuICBcbmZ1bmN0aW9uIGFkZFByb2plY3RMaXN0KGNvbnRhaW5lcil7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGlzdCcpO1xuICBcbiAgICBteVByb2plY3RzLmdldFByb2plY3RMaXN0KCkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJdGVtQnV0dG9uID0gY3JlYXRlUHJvamVjdEl0ZW1CdXR0b24ocHJvamVjdCk7XG4gICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbUJ1dHRvbik7XG4gICAgfSk7XG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RJdGVtQnV0dG9uKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvamVjdEl0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdEl0ZW1CdXR0b24nKTtcbiAgICAgICAgcHJvamVjdEl0ZW1CdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gICAgICAgIHByb2plY3RJdGVtQnV0dG9uLmRhdGFzZXQuaWQgPSBwcm9qZWN0LmdldElkKCk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0SXRlbUJ1dHRvbjtcbiAgICB9O1xuICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xufTtcblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVNldHRpbmdzUGFuZWwoY29udGFpbmVyKSB7XG4gICAgY29uc3Qgc2V0dGluZ3NPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXR0aW5nc09wdGlvbi5jbGFzc0xpc3QuYWRkKCdzZXR0aW5nc09wdGlvbicpO1xuXG4gICAgY29uc3Qgc2V0dGluZ3NJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2V0dGluZ3NJY29uLmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzSWNvbicpO1xuICAgIHNldHRpbmdzSWNvbi5zcmMgPSBzZXR0aW5nc1NWRztcblxuICAgIGNvbnN0IHNldHRpbmdzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2V0dGluZ3NMYWJlbC5jbGFzc0xpc3QuYWRkKCdzZXR0aW5nc0xhYmVsJyk7XG4gICAgc2V0dGluZ3NMYWJlbC50ZXh0Q29udGVudCA9ICdTZXR0aW5ncyc7XG5cbiAgICBzZXR0aW5nc09wdGlvbi5hcHBlbmRDaGlsZChzZXR0aW5nc0ljb24pO1xuICAgIHNldHRpbmdzT3B0aW9uLmFwcGVuZENoaWxkKHNldHRpbmdzTGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXR0aW5nc09wdGlvbik7XG59OyIsImltcG9ydCB7IHRvZG9MaXN0TW9kdWxlIH0gZnJvbSBcIi4vdG9Eb0xpc3RPYmplY3RcIjtcbmltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLi90b0RvT2JqZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdE9iamVjdFwiO1xuaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gXCIuL215UHJvamVjdHNPYmplY3RcIjtcbmV4cG9ydCB7IG15UHJvamVjdHMgfTtcbmV4cG9ydCB7IGdsb2JhbFByb2plY3RDb3VudGVyLCBnbG9iYWxUb2RvQ291bnRlciB9O1xuZXhwb3J0IHsgc2V0dXBJbml0YWxQcm9qZWN0cyB9O1xuXG5sZXQgZ2xvYmFsUHJvamVjdENvdW50ZXIgPSAwO1xubGV0IGdsb2JhbFRvZG9Db3VudGVyID0gMDtcblxuXG5mdW5jdGlvbiBzZXR1cEluaXRhbFByb2plY3RzKCkge1xuXG4gICAgY29uc3QgZXhhbXBsZVRvZG9zID0gW1xuICAgICAgICB0b2RvKFwiVXBkYXRlIHdlYnNpdGUgZGVzaWduXCIsIFwiUmV2YW1wIHRoZSB3ZWJzaXRlIGxheW91dCBhbmQgbWFrZSBpdCBtb3JlIHVzZXItZnJpZW5kbHlcIiwgXCIwMS8wNC8yMDIzXCIsIFwiaGlnaFwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJPcHRpbWl6ZSBzZXJ2ZXIgcGVyZm9ybWFuY2VcIiwgXCJBbmFseXplIHNlcnZlciBsb2dzIGFuZCBvcHRpbWl6ZSBzZXJ2ZXIgc2V0dGluZ3MgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVwiLCBcIjAyLzA0LzIwMjNcIiwgXCJtZWRpdW1cIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiSW1wbGVtZW50IG5ldyBmZWF0dXJlXCIsIFwiQWRkIGEgbmV3IGZlYXR1cmUgdG8gdGhlIHdlYnNpdGUgdGhhdCBhbGxvd3MgdXNlcnMgdG8gc2F2ZSB0aGVpciBwcmVmZXJlbmNlc1wiLCBcIjAzLzA0LzIwMjNcIiwgXCJoaWdoXCIsIHRydWUsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiRGVidWcgcGF5bWVudCBnYXRld2F5XCIsIFwiRml4IGlzc3VlcyB3aXRoIHBheW1lbnQgZ2F0ZXdheSB0aGF0IGFyZSBwcmV2ZW50aW5nIGN1c3RvbWVycyBmcm9tIG1ha2luZyBwdXJjaGFzZXNcIiwgXCIwNC8wNC8yMDIzXCIsIFwiaGlnaFwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJXcml0ZSB1c2VyIGRvY3VtZW50YXRpb25cIiwgXCJDcmVhdGUgYSB1c2VyIGd1aWRlIHRvIGhlbHAgY3VzdG9tZXJzIHVzZSBvdXIgcHJvZHVjdCBtb3JlIGVmZmVjdGl2ZWx5XCIsIFwiMDUvMDQvMjAyM1wiLCBcImxvd1wiLCB0cnVlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIlVwZGF0ZSBwcm9kdWN0IHNwZWNpZmljYXRpb25zXCIsIFwiVXBkYXRlIHRoZSBwcm9kdWN0IHNwZWNpZmljYXRpb25zIGRvY3VtZW50IHRvIHJlZmxlY3QgcmVjZW50IGNoYW5nZXNcIiwgXCIwNi8wNC8yMDIzXCIsIFwibWVkaXVtXCIsIHRydWUsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiVGVzdCB3ZWJzaXRlIG9uIGRpZmZlcmVudCBkZXZpY2VzXCIsIFwiQ2hlY2sgd2Vic2l0ZSBmdW5jdGlvbmFsaXR5IGFuZCBsYXlvdXQgb24gZGlmZmVyZW50IGRldmljZXMgdG8gZW5zdXJlIGNvbXBhdGliaWxpdHlcIiwgXCIwNy8wNC8yMDIzXCIsIFwibG93XCIsIHRydWUsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiVXBkYXRlIHdlYnNpdGUgY29udGVudFwiLCBcIkFkZCBuZXcgY29udGVudCB0byB0aGUgd2Vic2l0ZSB0byBrZWVwIGl0IGZyZXNoIGFuZCBlbmdhZ2luZyBmb3IgdXNlcnNcIiwgXCIwOC8wNC8yMDIzXCIsIFwibWVkaXVtXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIkNyZWF0ZSBtYXJrZXRpbmcgY2FtcGFpZ25cIiwgXCJEZXZlbG9wIGEgbWFya2V0aW5nIGNhbXBhaWduIHRvIGluY3JlYXNlIGJyYW5kIGF3YXJlbmVzcyBhbmQgYXR0cmFjdCBuZXcgY3VzdG9tZXJzXCIsIFwiMDkvMDQvMjAyM1wiLCBcImhpZ2hcIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiQ29uZHVjdCB1c2VyIHJlc2VhcmNoXCIsIFwiR2F0aGVyIGZlZWRiYWNrIGZyb20gdXNlcnMgdG8gaW1wcm92ZSB0aGUgcHJvZHVjdCBhbmQgYWRkcmVzcyB0aGVpciBuZWVkc1wiLCBcIjEwLzA0LzIwMjNcIiwgXCJtZWRpdW1cIiwgdHJ1ZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJJbXByb3ZlIHNpdGUgc3BlZWRcIiwgXCJPcHRpbWl6ZSB3ZWJzaXRlIHBlcmZvcm1hbmNlIHRvIGltcHJvdmUgc2l0ZSBzcGVlZCBhbmQgcmVkdWNlIHBhZ2UgbG9hZCB0aW1lc1wiLCBcIjExLzA0LzIwMjNcIiwgXCJoaWdoXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIkNyZWF0ZSB0cmFpbmluZyBtYXRlcmlhbHNcIiwgXCJEZXZlbG9wIHRyYWluaW5nIG1hdGVyaWFscyB0byBoZWxwIGVtcGxveWVlcyBsZWFybiBuZXcgc2tpbGxzIGFuZCBpbXByb3ZlIHBlcmZvcm1hbmNlXCIsIFwiMTIvMDQvMjAyM1wiLCBcImxvd1wiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJSZXNvbHZlIGN1c3RvbWVyIGNvbXBsYWludHNcIiwgXCJBZGRyZXNzIGN1c3RvbWVyIGNvbXBsYWludHMgYW5kIHJlc29sdmUgaXNzdWVzIHRvIG1haW50YWluIGN1c3RvbWVyIHNhdGlzZmFjdGlvblwiLCBcIjEzLzA0LzIwMjNcIiwgXCJoaWdoXCIsIGZhbHNlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIkltcHJvdmUgc2VhcmNoIGZ1bmN0aW9uYWxpdHlcIiwgXCJJbXByb3ZlIHRoZSBzZWFyY2ggZnVuY3Rpb25hbGl0eSBvZiB0aGUgd2Vic2l0ZSB0byBtYWtlIGl0IGVhc2llciBmb3IgdXNlcnMgdG8gZmluZCB3aGF0IHRoZXkgbmVlZFwiLCBcIjE0LzA0LzIwMjNcIiwgXCJtZWRpdW1cIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpLFxuICAgICAgICB0b2RvKFwiQ3JlYXRlIHByb2R1Y3Qgcm9hZG1hcFwiLCBcIkRldmVsb3AgYSByb2FkbWFwIGZvciB0aGUgcHJvZHVjdCB0byBndWlkZSBmdXR1cmUgZGV2ZWxvcG1lbnQgYW5kIHByaW9yaXRpemUgZmVhdHVyZXNcIiwgXCIxNS8wNC8yMDIzXCIsIFwiaGlnaFwiLCB0cnVlLCArK2dsb2JhbFRvZG9Db3VudGVyKSxcbiAgICAgICAgdG9kbyhcIlBlcmZvcm0gc2VjdXJpdHkgYXVkaXRcIiwgXCJDb25kdWN0IGEgc2VjdXJpdHkgYXVkaXQgb2YgdGhlIHdlYnNpdGUgdG8gaWRlbnRpZnkgdnVsbmVyYWJpbGl0aWVzIGFuZCBpbXBsZW1lbnQgZml4ZXNcIiwgXCIxNi8wNC8yMDIzXCIsIFwiaGlnaFwiLCBmYWxzZSwgKytnbG9iYWxUb2RvQ291bnRlciksXG4gICAgICAgIHRvZG8oXCJJbXByb3ZlIHVzZXIgaW50ZXJmYWNlXCIsIFwiUmVkZXNpZ24gdGhlIHVzZXIgaW50ZXJmYWNlIHRvIGltcHJvdmUgdXNlciBleHBlcmllbmNlIGFuZCBtYWtlIHRoZSB3ZWJzaXRlIG1vcmUgaW50dWl0aXZlIHRvIHVzZVwiLCBcIjE3LzA0LzIwMjNcIiwgXCJtZWRpdW1cIiwgZmFsc2UsICsrZ2xvYmFsVG9kb0NvdW50ZXIpXG4gICAgXTtcblxuICAgIGNvbnN0IHRvZG9zU2V0MSA9IGV4YW1wbGVUb2Rvcy5zbGljZSgwLCA2KTtcbiAgICBjb25zdCB0b2Rvc1NldDIgPSBleGFtcGxlVG9kb3Muc2xpY2UoNiwgMTEpO1xuICAgIGNvbnN0IHRvZG9zU2V0MyA9IGV4YW1wbGVUb2Rvcy5zbGljZSgxMSk7XG4gIFxuICAgIHNldHVwRXhhbXBsZVByb2plY3QoXCJXZWJzaXRlIFJlZGVzaWduIFByb2plY3RcIiwgdG9kb3NTZXQxKTtcbiAgICBzZXR1cEV4YW1wbGVQcm9qZWN0KFwiU2VydmVyIE9wdGltaXphdGlvbiBQcm9qZWN0XCIsIHRvZG9zU2V0Mik7XG4gICAgc2V0dXBFeGFtcGxlUHJvamVjdChcIlByb2R1Y3QgRGV2ZWxvcG1lbnQgUHJvamVjdFwiLCB0b2Rvc1NldDMpO1xuXG5cbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHNldHVwRGVmYXVsdFByb2plY3QoZXhhbXBsZVRvZG9zKTtcblxuICAgIHJldHVybiBkZWZhdWx0UHJvamVjdDtcbiAgICBcbn07XG5cblxuXG5mdW5jdGlvbiBzZXR1cEV4YW1wbGVQcm9qZWN0KHRpdGxlLCB0b2RvU2V0KXtcblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gdG9kb0xpc3RNb2R1bGUoKTtcbiAgICB0b2RvTGlzdC5zZXRUb2Rvcyh0b2RvU2V0KTtcblxuICAgIGNvbnN0IHRoZVByb2plY3QgPSBwcm9qZWN0KHRpdGxlLCBnbG9iYWxQcm9qZWN0Q291bnRlcisrKTtcbiAgICB0aGVQcm9qZWN0LnNldFRvZG9MaXN0KHRvZG9MaXN0KTtcblxuICAgIG15UHJvamVjdHMuYWRkUHJvamVjdCh0aGVQcm9qZWN0KTtcblxufTtcblxuXG5mdW5jdGlvbiBzZXR1cERlZmF1bHRQcm9qZWN0KHRvZG9TZXQpe1xuXG4gICAgY29uc3QgZGVmYXVsdExpc3QgPSB0b2RvTGlzdE1vZHVsZSgpO1xuICAgIGRlZmF1bHRMaXN0LnNldFRvZG9zKHRvZG9TZXQpO1xuXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0KFwiQWxsIFRhc2tzXCIsIGdsb2JhbFByb2plY3RDb3VudGVyKyspO1xuXG4gICAgZGVmYXVsdFByb2plY3Quc2V0VG9kb0xpc3QoZGVmYXVsdExpc3QpO1xuXG4gICAgcmV0dXJuIGRlZmF1bHRQcm9qZWN0O1xufTtcblxuLy8gZnVuY3Rpb24gYWRkVG9kb1RvUHJvamVjdCh0b2RvLCBwcm9qZWN0KXtcbi8vICAgICBwcm9qZWN0LmdldFRvZG9MaXN0KCkuYWRkVG9kbyh0b2RvKTtcbi8vIH07XG5cbi8vIGZ1bmN0aW9uIHJlbW92ZVRvZG9mcm9tUHJvamVjdCh0b2RvLCBwcm9qZWN0KXtcbi8vICAgICBwcm9qZWN0LmdldFRvZG9MaXN0KCkucmVtb3ZlVG9kbyh0b2RvKTtcbi8vIH07XG5cbiIsImV4cG9ydCB7bXlQcm9qZWN0c307XG5cbmNvbnN0IG15UHJvamVjdHMgPSAoKCkgPT4ge1xuICBsZXQgcHJvamVjdExpc3QgPSBbXTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdExpc3QuaW5kZXhPZihwcm9qZWN0KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdExpc3Q7XG4gIH07XG5cbiAgY29uc3Qgc2V0UHJvamVjdExpc3QgPSAobmV3UHJvamVjdExpc3QpID0+IHtcbiAgICBwcm9qZWN0TGlzdCA9IG5ld1Byb2plY3RMaXN0O1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RCeUlkID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIGdldFByb2plY3RMaXN0KCkuZmluZChwcm9qZWN0ID0+IHByb2plY3QuZ2V0SWQoKSA9PT0gaWQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGdldFByb2plY3RMaXN0LFxuICAgIHNldFByb2plY3RMaXN0LFxuICAgIGdldFByb2plY3RCeUlkLFxuICB9O1xufSkoKTtcbiAgIiwiZXhwb3J0IHtwcm9qZWN0fTtcbmltcG9ydCB7IHRvZG9MaXN0TW9kdWxlIH0gZnJvbSBcIi4vdG9Eb0xpc3RPYmplY3RcIjtcblxuY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgaWQpID0+IHtcbiAgbGV0IHRvZG9MaXN0ID0gdG9kb0xpc3RNb2R1bGUoKTtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4gdGl0bGUgPSBuZXdUaXRsZTtcblxuICBjb25zdCBnZXRUb2RvTGlzdCA9ICgpID0+IHRvZG9MaXN0O1xuICBjb25zdCBzZXRUb2RvTGlzdCA9IChuZXdUb2RvTGlzdCkgPT4gdG9kb0xpc3QgPSBuZXdUb2RvTGlzdDtcblxuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuXG4gIHJldHVybiB7IGdldFRpdGxlLCBzZXRUaXRsZSwgZ2V0VG9kb0xpc3QsIHNldFRvZG9MaXN0LCBnZXRJZCB9O1xufTtcblxuICBcblxuXG4iLCJleHBvcnQge3RvZG9MaXN0TW9kdWxlfTtcblxuY29uc3QgdG9kb0xpc3RNb2R1bGUgPSAoKSA9PiB7XG4gICAgbGV0IHRvZG9zID0gW107XG4gIFxuICAgIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSB0b2Rvcy5pbmRleE9mKHRvZG8pO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGNvbnN0IGdldFRvZG9zID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHRvZG9zO1xuICAgIH1cbiAgXG4gICAgY29uc3Qgc2V0VG9kb3MgPSAobmV3VG9kb3MpID0+IHtcbiAgICAgIHRvZG9zID0gbmV3VG9kb3M7XG4gICAgfVxuICBcbiAgICByZXR1cm4geyBhZGRUb2RvLCByZW1vdmVUb2RvLCBnZXRUb2Rvcywgc2V0VG9kb3MgfTtcbn07IiwiZXhwb3J0IHt0b2RvfTtcblxuY29uc3QgdG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlLCBpZCkgPT4ge1xuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuICBcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHRpdGxlID0gbmV3VGl0bGU7XG4gIFxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4gZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgXG4gIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICBcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gIFxuICBjb25zdCBnZXRJc0NvbXBsZXRlID0gKCkgPT4gaXNDb21wbGV0ZTtcbiAgY29uc3Qgc2V0SXNDb21wbGV0ZSA9IChuZXdJc0NvbXBsZXRlKSA9PiBpc0NvbXBsZXRlID0gbmV3SXNDb21wbGV0ZTtcbiAgXG4gIHJldHVybiB7XG4gICAgZ2V0SWQsXG4gICAgZ2V0VGl0bGUsXG4gICAgc2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0RHVlRGF0ZSxcbiAgICBzZXREdWVEYXRlLFxuICAgIGdldFByaW9yaXR5LFxuICAgIHNldFByaW9yaXR5LFxuICAgIGdldElzQ29tcGxldGUsXG4gICAgc2V0SXNDb21wbGV0ZVxuICB9O1xufTtcblxuICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgZ2VuZXJhdGVTaWRlYmFyIH0gZnJvbSBcIi4vR2VuZXJhdGVET00vc2lkZWJhclwiO1xuaW1wb3J0IHsgc2V0dXBJbml0YWxQcm9qZWN0cyB9IGZyb20gXCIuL2FwcExvZ2ljL2luaXRpYWxTZXR1cFwiO1xuaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gXCIuL2FwcExvZ2ljL2luaXRpYWxTZXR1cFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVNYWluQ29udGVudCB9IGZyb20gXCIuL0dlbmVyYXRlRE9NL21haW5Db250ZW50XCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBzZXR1cEluaXRhbFByb2plY3RzKCk7XG5cbmdlbmVyYXRlU2lkZWJhcigpO1xuXG5nZW5lcmF0ZU1haW5Db250ZW50KGRlZmF1bHRQcm9qZWN0KTtcblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIGxvYWRpbmcgYSBwcm9qZWN0IGZyb20gc2lkZWJhciBieSBjbGlja2luZyBvbiBpdFxuXG5jb25zdCBwcm9qZWN0SXRlbUJ1dHRvbkdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RJdGVtQnV0dG9uJyk7XG5cbnByb2plY3RJdGVtQnV0dG9uR3JvdXAuZm9yRWFjaChwcm9qZWN0SXRlbUJ1dHRvbiA9PiB7XG4gICAgcHJvamVjdEl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgcmVtb3ZlQ3VycmVudFBhZ2UoKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0SUQgPSBwYXJzZUludChwcm9qZWN0SXRlbUJ1dHRvbi5kYXRhc2V0LmlkKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdGVkID0gbXlQcm9qZWN0cy5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SUQpO1xuXG4gICAgICAgIGdlbmVyYXRlTWFpbkNvbnRlbnQocHJvamVjdFNlbGVjdGVkKTtcbiAgICB9KTtcbn0pO1xuXG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBsb2FkaW5nIGRlZmF1bHQgcHJvamVjdCBmcm9tIHNpZGViYXIgYnkgY2xpY2tpbmcgb24gaXRcblxuY29uc3QgZGVmYXVsdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFBhbmVsSGVhZGVyQnV0dG9uJyk7XG5cbmRlZmF1bHRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgcmVtb3ZlQ3VycmVudFBhZ2UoKTtcblxuICAgIGdlbmVyYXRlTWFpbkNvbnRlbnQoZGVmYXVsdFByb2plY3QpO1xufSk7XG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBjbGlja2luZyB0aGUgY2hlY2sgbWFya1xuXG5jb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZUJ1dHRvbicpO1xuXG5jb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB0b2RvSUQgPSBwYXJzZUludChjb21wbGV0ZUJ1dHRvbi5kYXRhc2V0LmlkKTtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ZWQgPSBteVByb2plY3RzLmdldFByb2plY3RCeUlkKHRvZG9JRCk7XG4gICAgLy8gbmVlZCB0byBpbXBsZW1lbnQgYSBtZXRob2QgZm9yIGFkZGluZyBnZXR0aW5nIGEgdG9kbyB0aHJvdWdoIGl0cyBpZCA6KC5cblxufSk7XG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBhZGRpbmcgYSBwcm9qZWN0IGZyb20gc2lkZWJhclxuXG5cblxuXG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBhZGRpbmcgYSBuZXcgdG9kbyBpdGVtIGZyb20gc2lkZSBiYXIuXG5cblxuXG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBjbGlja2luZyBvbiB0aGUgdG9kbyBpdGVtLlxuXG5cblxuXG5mdW5jdGlvbiByZW1vdmVDdXJyZW50UGFnZSgpe1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyID4gOm5vdCgubGVmdFBhbmVsKScpO1xuICAgIGh0bWwuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfSk7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==