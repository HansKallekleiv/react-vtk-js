window["dash_vtk"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"async-ReactVTK":"async-ReactVTK"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };var getCurrentScript = function() {
/******/ 	    var script = document.currentScript;
/******/ 	    if (!script) {
/******/ 	        /* Shim for IE11 and below */
/******/ 	        /* Do not take into account async scripts and inline scripts */
/******/
/******/ 	        var doc_scripts = document.getElementsByTagName('script');
/******/ 	        var scripts = [];
/******/
/******/ 	        for (var i = 0; i < doc_scripts.length; i++) {
/******/ 	            scripts.push(doc_scripts[i]);
/******/ 	        }
/******/
/******/ 	        scripts = scripts.filter(function(s) { return !s.async && !s.text && !s.textContent; });
/******/ 	        script = scripts.slice(-1)[0];
/******/ 	    }
/******/
/******/ 	    return script;
/******/ 	};
/******/
/******/ 	var isLocalScript = function(script) {
/******/ 	    return /\/_dash-component-suites\//.test(script.src);
/******/ 	};
/******/
/******/ 	Object.defineProperty(__webpack_require__, 'p', {
/******/ 	    get: (function () {
/******/ 	        var script = getCurrentScript();
/******/
/******/ 	        var url = script.src.split('/').slice(0, -1).join('/') + '/';
/******/
/******/ 	        return function() {
/******/ 	            return url;
/******/ 	        };
/******/ 	    })()
/******/ 	});
/******/
/******/ 	if (typeof jsonpScriptSrc !== 'undefined') {
/******/ 	    var __jsonpScriptSrc__ = jsonpScriptSrc;
/******/ 	    jsonpScriptSrc = function(chunkId) {
/******/ 	        var script = getCurrentScript();
/******/ 	        var isLocal = isLocalScript(script);
/******/
/******/ 	        var src = __jsonpScriptSrc__(chunkId);
/******/
/******/ 	        if(!isLocal) {
/******/ 	            return src;
/******/ 	        }
/******/
/******/ 	        var srcFragments = src.split('/');
/******/ 	        var fileFragments = srcFragments.slice(-1)[0].split('.');
/******/
/******/ 	        fileFragments.splice(1, 0, "v0_0_9m1649513566");
/******/ 	        srcFragments.splice(-1, 1, fileFragments.join('.'))
/******/
/******/ 	        return srcFragments.join('/');
/******/ 	    };
/******/ 	}
/******/
/******/
/******/ 	var jsonpArray = window["webpackJsonpdash_vtk"] = window["webpackJsonpdash_vtk"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/AsyncReactVTK.js":
/*!**********************************!*\
  !*** ./src/lib/AsyncReactVTK.js ***!
  \**********************************/
/*! exports provided: Algorithm, Calculator, CellData, DataArray, FieldData, GeometryRepresentation, GlyphRepresentation, ImageData, PointCloudRepresentation, PointData, PolyData, Reader, SliceRepresentation, ShareDataSet, View, Volume, VolumeController, VolumeDataRepresentation, VolumeRepresentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Algorithm", function() { return Algorithm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calculator", function() { return Calculator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellData", function() { return CellData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataArray", function() { return DataArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldData", function() { return FieldData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeometryRepresentation", function() { return GeometryRepresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlyphRepresentation", function() { return GlyphRepresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageData", function() { return ImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointCloudRepresentation", function() { return PointCloudRepresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointData", function() { return PointData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolyData", function() { return PolyData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reader", function() { return Reader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliceRepresentation", function() { return SliceRepresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDataSet", function() { return ShareDataSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Volume", function() { return Volume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeController", function() { return VolumeController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeDataRepresentation", function() { return VolumeDataRepresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeRepresentation", function() { return VolumeRepresentation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/**
 * fakeModules: We need to trick React.lazy into thinking we are 
 * giving the output of an import("my-module.js") Promise.
 */

var asyncComponentBuilder = function asyncComponentBuilder(name) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var AsyncReactVTK, ReactVTK, reactComponent, fakeModule;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // eslint-disable-next-line
            AsyncReactVTK = __webpack_require__.e(/*! import() | ReactVTK */ "async-ReactVTK").then(__webpack_require__.bind(null, /*! ./ReactVTK */ "./src/lib/ReactVTK.js"));
            _context.next = 3;
            return AsyncReactVTK;

          case 3:
            ReactVTK = _context.sent;
            reactComponent = ReactVTK["default"][name];
            fakeModule = {
              "default": reactComponent
            };
            return _context.abrupt("return", fakeModule);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
};

var Algorithm = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("Algorithm"));
var Calculator = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("Calculator"));
var CellData = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("CellData"));
var DataArray = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("DataArray"));
var FieldData = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("FieldData"));
var GeometryRepresentation = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("GeometryRepresentation"));
var GlyphRepresentation = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("GlyphRepresentation"));
var ImageData = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("ImageData"));
var PointCloudRepresentation = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("PointCloudRepresentation"));
var PointData = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("PointData"));
var PolyData = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("PolyData"));
var Reader = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("Reader"));
var SliceRepresentation = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("SliceRepresentation"));
var ShareDataSet = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("ShareDataSet"));
var View = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("View"));
var Volume = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("Volume"));
var VolumeController = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("VolumeController"));
var VolumeDataRepresentation = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("VolumeDataRepresentation"));
var VolumeRepresentation = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(asyncComponentBuilder("VolumeRepresentation"));


/***/ }),

/***/ "./src/lib/components/Algorithm.react.js":
/*!***********************************************!*\
  !*** ./src/lib/components/Algorithm.react.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Algorithm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");



/**
 * Algorithm is exposing a source or filter to a downstream filter
 * It takes the following set of properties:
 *   - vtkClass: vtkClassName
 *   - state: {}
 */

function Algorithm(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["Algorithm"], props));
}
;
Algorithm.defaultProps = {
  port: 0,
  vtkClass: 'vtkConeSource',
  state: {}
};
Algorithm.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * downstream connection port
   */
  port: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * vtkClass name
   */
  vtkClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * set of property values for vtkClass
   */
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

/***/ }),

/***/ "./src/lib/components/Calculator.react.js":
/*!************************************************!*\
  !*** ./src/lib/components/Calculator.react.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calculator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");



/**
 * Calculator is exposing a source or filter to a downstream filter
 * It takes the following set of properties:
 *   - name: 'scalars'    // name of the generated field
 *   - location: 'POINT'  // POINT/CELL
 *   - arrays: []         // Name of array to have access in formula
 *   - formula: fn
 */

function Calculator(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["Calculator"], props));
}
;
Calculator.defaultProps = {
  port: 0,
  name: 'scalars',
  location: 'POINT',
  arrays: [],
  formula: function formula(xyz) {
    return xyz[0];
  }
};
Calculator.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * downstream connection port
   */
  port: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Field name
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Field location [POINT, CELL, COORDINATE, SCALARS, ]
   */
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * List of fields you want available for your formula
   */
  arrays: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),

  /**
   * Field formula
   */
  formula: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

/***/ }),

/***/ "./src/lib/components/CellData.react.js":
/*!**********************************************!*\
  !*** ./src/lib/components/CellData.react.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CellData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");



/**
 * CellData is exposing a vtkCellData to a downstream element
 */

function CellData(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["CellData"], props));
}
;
CellData.defaultProps = {};
CellData.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

/***/ }),

/***/ "./src/lib/components/DataArray.react.js":
/*!***********************************************!*\
  !*** ./src/lib/components/DataArray.react.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataArray; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");



/**
 * DataArray is creating a vtkDataArray for the container fields
 * It takes the following set of properties:
 *   - type: 'Float32Array', 'Float64Array', 'Uint16Array', ...
 *   - values: [number, number, ...]
 *   - numberOfComponents: 1,
 *   - registration: 'addArray', 'setScalars', ...
 */

function DataArray(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["DataArray"], props));
}
;
DataArray.defaultProps = {
  name: 'scalars',
  type: 'Float32Array',
  values: [],
  numberOfComponents: 1,
  registration: 'addArray'
};
DataArray.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Typed array name
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Field name
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Actual values to use inside our array
   */
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Number of components / Tuple size
   */
  numberOfComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Name of the method to call on the fieldData (addArray, setScalars, setVectors...)
   */
  registration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./src/lib/components/FieldData.react.js":
/*!***********************************************!*\
  !*** ./src/lib/components/FieldData.react.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FieldData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");



/**
 * FieldData is exposing a FieldData to a downstream element
 */

function FieldData(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["FieldData"], props));
}
;
FieldData.defaultProps = {};
FieldData.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

/***/ }),

/***/ "./src/lib/components/GeometryRepresentation.react.js":
/*!************************************************************!*\
  !*** ./src/lib/components/GeometryRepresentation.react.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeometryRepresentation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");



/**
 * GeometryRepresentation is responsible to convert a vtkPolyData into rendering
 * It takes the following set of properties:
 *   - actor: Properties to assign to the vtkActor
 *   - mapper: Properties to assign to the vtkMapper
 *   - property: Properties to assign to the vtkProperty (actor.getProperty())
 *   - colorMapPreset: Name of the preset to use for controlling the color mapping
 *   - colorDataRange: Range to use for the color scale
 */

function GeometryRepresentation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["GeometryRepresentation"], props));
}
;
GeometryRepresentation.defaultProps = {
  colorMapPreset: 'erdc_rainbow_bright',
  colorDataRange: [0, 1],
  showCubeAxes: false,
  showScalarBar: false,
  scalarBarTitle: ''
};
GeometryRepresentation.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Properties to set to the actor
   */
  actor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Properties to set to the actor
   */
  mapper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Properties to set to the actor.property
   */
  property: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Preset name for the lookup table color map
   */
  colorMapPreset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Data range use for the colorMap
   */
  colorDataRange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Show/Hide Cube Axes for the given representation
   */
  showCubeAxes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Configure cube Axes style by overriding the set of properties defined
   * https://github.com/Kitware/vtk-js/blob/HEAD/Sources/Rendering/Core/CubeAxesActor/index.js#L703-L719
   */
  cubeAxesStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Show hide scalar bar for that representation
   */
  showScalarBar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Use given string as title for scalar bar. By default it is empty (no title).
   */
  scalarBarTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Configure scalar bar style by overriding the set of properties defined
   * https://github.com/Kitware/vtk-js/blob/master/Sources/Rendering/Core/ScalarBarActor/index.js#L776-L796
   */
  scalarBarStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

/***/ }),

/***/ "./src/lib/components/GlyphRepresentation.react.js":
/*!*********************************************************!*\
  !*** ./src/lib/components/GlyphRepresentation.react.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeometryRepresentation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");



/**
 * GlyphRepresentation using a source on port=1 as Glyph and the points of the source on port=0 to position the given glyphs
 * It takes the following set of properties:
 * - actor: Properties to assign to the vtkActor
 * - mapper: Properties to assign to the vtkGlyph3DMapper
 * - property: Properties to assign to the vtkProperty (actor.getProperty())
 * - colorMapPreset: Name of the preset to use for controlling the color mapping
 * - colorDataRange: Range to use for the color scale
 */

function GeometryRepresentation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["GlyphRepresentation"], props));
}
;
GeometryRepresentation.defaultProps = {
  colorMapPreset: 'erdc_rainbow_bright',
  colorDataRange: [0, 1]
};
GeometryRepresentation.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Properties to set to the actor
   */
  actor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Properties to set to the vtkGlyph3DMapper
   */
  mapper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Properties to set to the actor.property
   */
  property: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Preset name for the lookup table color map
   */
  colorMapPreset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Data range use for the colorMap
   */
  colorDataRange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

/***/ }),

/***/ "./src/lib/components/ImageData.react.js":
/*!***********************************************!*\
  !*** ./src/lib/components/ImageData.react.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");



/**
 * ImageData is exposing a vtkImageData to a downstream filter
 * It takes the following set of properties:
 *   - dimensions: [nx, ny, nz],
 *   - origin: [0, 0, 0]
 *   - spacing: [1, 1, 1]
 *   - direction: [
 *       1, 0, 0,
 *       0, 1, 0,
 *       0, 0, 1
 *     ]
 */

function ImageData(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["ImageData"], props));
}
;
ImageData.defaultProps = {
  port: 0,
  dimensions: [1, 1, 1],
  spacing: [1, 1, 1],
  origin: [0, 0, 0],
  direction: [1, 0, 0, 0, 1, 0, 0, 0, 1]
};
ImageData.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * downstream connection port
   */
  port: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Number of points along x, y, z
   */
  dimensions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Spacing along x, y, z between points in world coordinates
   */
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * World coordinate of the lower left corner of your vtkImageData (i=0, j=0, k=0).
   */
  origin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * 3x3 matrix use to orient the image data
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

/***/ }),

/***/ "./src/lib/components/Mesh.react.js":
/*!******************************************!*\
  !*** ./src/lib/components/Mesh.react.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mesh; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




/**
 * Mesh is exposing a vtkPolyData to a downstream filter
 * It takes the following set of properties:
 *   - state: { mesh: { ...polydata-props }, field: { ...dataArray } }
 */

function Mesh(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["PolyData"], _extends({
    id: props.id,
    port: props.port
  }, props.state.mesh), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["PointData"], null, props.state.field && props.state.field.location === 'PointData' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["DataArray"], _extends({
    registration: "setScalars"
  }, props.state.field)), props.state.pointArrays && props.state.pointArrays.map(function (array) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["DataArray"], _extends({
      key: array.name
    }, array));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["CellData"], null, props.state.field && props.state.field.location === 'CellData' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["DataArray"], _extends({
    registration: "setScalars"
  }, props.state.field)), props.state.cellArrays && props.state.cellArrays.map(function (array) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["DataArray"], _extends({
      key: array.name
    }, array));
  }))));
}
;
Mesh.defaultProps = {
  port: 0,
  state: {
    mesh: {
      points: []
    }
  }
};
Mesh.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * downstream connection port
   */
  port: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * State of the mesh
   */
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ }),

/***/ "./src/lib/components/PointCloudRepresentation.react.js":
/*!**************************************************************!*\
  !*** ./src/lib/components/PointCloudRepresentation.react.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointCloudRepresentation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");



/**
 * PointCloudRepresentation expect the following set of properties
 *   - xyz: [x0, y0, z0, x1, ..., zn]
 *   - rgb: [...]
 *   - rgba: [...]
 *   - scalars: [...]
 */

function PointCloudRepresentation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["PointCloudRepresentation"], props));
}
;
PointCloudRepresentation.defaultProps = {
  xyz: [0, 0, 0],
  colorMapPreset: 'erdc_rainbow_bright',
  colorDataRange: [0, 1],
  showCubeAxes: false,
  showScalarBar: false,
  scalarBarTitle: ''
};
PointCloudRepresentation.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Points coordinates
   */
  xyz: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Use RGB values to attach to the points/vertex
   */
  rgb: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Use RGBA values to attach to the points/vertex
   */
  rgba: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Field values to attach to the points
   */
  scalars: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Preset name for the lookup table color map
   */
  colorMapPreset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Data range use for the colorMap
   */
  colorDataRange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Properties to set to the actor.property
   */
  property: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Show/Hide Cube Axes for the given representation
   */
  showCubeAxes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Configure cube Axes style by overriding the set of properties defined
   * https://github.com/Kitware/vtk-js/blob/HEAD/Sources/Rendering/Core/CubeAxesActor/index.js#L703-L719
   */
  cubeAxesStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Show hide scalar bar for that representation
   */
  showScalarBar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Use given string as title for scalar bar. By default it is empty (no title).
   */
  scalarBarTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Configure scalar bar style by overriding the set of properties defined
   * https://github.com/Kitware/vtk-js/blob/master/Sources/Rendering/Core/ScalarBarActor/index.js#L776-L796
   */
  scalarBarStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ }),

/***/ "./src/lib/components/PointData.react.js":
/*!***********************************************!*\
  !*** ./src/lib/components/PointData.react.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");



/**
 * PointData is exposing a vtkPointData to a downstream element
 */

function PointData(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["PointData"], props));
}
;
PointData.defaultProps = {};
PointData.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

/***/ }),

/***/ "./src/lib/components/PolyData.react.js":
/*!**********************************************!*\
  !*** ./src/lib/components/PolyData.react.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolyData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");



/**
 * PolyData is exposing a vtkPolyData to a downstream filter
 * It takes the following set of properties:
 *   - points: [x, y, z, x, y, z, ...],
 *   - verts: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - lines: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - polys: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - strips: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 * Cell connectivity helper property:
 *   - connectivity: 'manual', // [manual, points, triangles, strips]
 */

function PolyData(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["PolyData"], props));
}
;
PolyData.defaultProps = {
  port: 0,
  points: [],
  connectivity: 'manual'
};
PolyData.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * downstream connection port
   */
  port: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * xyz coordinates
   */
  points: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * verts cells
   */
  verts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * lines cells
   */
  lines: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * polys cells
   */
  polys: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * strips cells
   */
  strips: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Type of connectivity `manual` or implicit such as `points`, `triangles`, `strips`
   */
  connectivity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

/***/ }),

/***/ "./src/lib/components/Reader.react.js":
/*!********************************************!*\
  !*** ./src/lib/components/Reader.react.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");



/**
 * Reader is exposing a reader to a downstream filter
 * It takes the following set of properties:
 *   - vtkClass: vtk.js reader class name
 *   - url: string
 *   - parseAsText: string
 *   - parseAsArrayBuffer: base64String
 */

function Reader(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["Reader"], props));
}
;
Reader.defaultProps = {
  port: 0,
  vtkClass: '',
  renderOnUpdate: true,
  resetCameraOnUpdate: true
};
Reader.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * downstream connection port
   */
  port: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * vtkClass name
   */
  vtkClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * set of url to fetch data from
   */
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * set text data to process
   */
  parseAsText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * set binary data to process from base64 string
   */
  parseAsArrayBuffer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Automatically render on data loaded
   */
  renderOnUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Automatically reset camera on data loaded
   */
  resetCameraOnUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

/***/ }),

/***/ "./src/lib/components/ShareDataSet.react.js":
/*!**************************************************!*\
  !*** ./src/lib/components/ShareDataSet.react.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareDataSet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");



/**
 * ShareDataSet capture a dataset or a source and allow it to use it in another
 * pipeline or representation.
 */

function ShareDataSet(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["ShareDataSet"], props));
}
;
ShareDataSet.defaultProps = {
  port: 0,
  name: 'shared'
};
ShareDataSet.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * downstream connection port
   */
  port: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Unique dataset name to cross reference
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

/***/ }),

/***/ "./src/lib/components/SliceRepresentation.react.js":
/*!*********************************************************!*\
  !*** ./src/lib/components/SliceRepresentation.react.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliceRepresentation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");



/**
 * SliceRepresentation is responsible to convert a vtkPolyData into rendering
 * It takes the following set of properties:
 *   - colorBy: ['POINTS', ''],
 *   - pointSize: 1,
 *   - color: [1,1,1],
 */

function SliceRepresentation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["SliceRepresentation"], props));
}
;
SliceRepresentation.defaultProps = {
  colorMapPreset: 'erdc_rainbow_bright',
  colorDataRange: 'auto'
};
SliceRepresentation.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Properties to set to the mapper
   */
  mapper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Properties to set to the slice/actor
   */
  actor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Properties to set to the volume.property
   */
  property: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Preset name for the lookup table color map
   */
  colorMapPreset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Data range use for the colorMap
   */
  colorDataRange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),

  /**
   * index of the slice along i
   */
  iSlice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * index of the slice along j
   */
  jSlice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * index of the slice along k
   */
  kSlice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * index of the slice along x
   */
  xSlice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * index of the slice along y
   */
  ySlice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * index of the slice along z
   */
  zSlice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

/***/ }),

/***/ "./src/lib/components/View.react.js":
/*!******************************************!*\
  !*** ./src/lib/components/View.react.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");
/* eslint-disable no-magic-numbers */



/**
 * View is responsible to render vtk.js data.
 * It takes the following set of properties:
 *   - `background`: [0.2, 0.3, 0.4]
 *   - `cameraPosition`: [0, 0, 1]
 *   - `cameraViewUp`: [0, 1, 0]
 *   - `cameraParallelProjection`: false
 *   - `showOrientationAxes`: true
 */

function View(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["View"], props));
}
;
View.defaultProps = {
  style: {
    width: '100%',
    height: '100%'
  },
  triggerRender: 0,
  triggerResetCamera: 0,
  background: [0.2, 0.3, 0.4],
  cameraPosition: [0, 0, 1],
  cameraViewUp: [0, 1, 0],
  cameraParallelProjection: false,
  interactorSettings: [{
    button: 1,
    action: 'Rotate'
  }, {
    button: 2,
    action: 'Pan'
  }, {
    button: 3,
    action: 'Zoom',
    scrollEnabled: true
  }, {
    button: 1,
    action: 'Pan',
    shift: true
  }, {
    button: 1,
    action: 'Zoom',
    alt: true
  }, {
    button: 1,
    action: 'ZoomToMouse',
    control: true
  }, {
    button: 1,
    action: 'Roll',
    alt: true,
    shift: true
  }],
  showOrientationAxes: true
};
View.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Allow user to override the default View style { width: '100%', height: '100%' }
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Allow user to provide custom className associated to root element
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The color of the view background using 3 floating numbers
   * between 0-1 of Red, Green, Blue component.
   */
  background: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Configure the interactions
   */
  interactorSettings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Initial camera position from an object in [0,0,0]
   */
  cameraPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Initial camera position from an object in [0,0,0]
   */
  cameraViewUp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Use parallel projection (default: false)
   */
  cameraParallelProjection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Property use to trigger a render when changing.
   */
  triggerRender: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Property use to trigger a resetCamera when changing.
   */
  triggerResetCamera: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * List of picking listeners to bind. The supported values are `click` and `hover`. By default it is disabled (empty array).
   */
  pickingModes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),

  /**
   * Read-only prop. To use this, make sure that `pickingModes` contains `click`.
   * This prop is updated when an element in the map is clicked. This contains
   * the picking info describing the object being clicked on.
   */
  clickInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Read-only prop. To use this, make sure that `pickingModes` contains `hover`.
   * This prop is updated when an element in the map is hovered. This contains
   * the picking info describing the object being hovered.
   */
  hoverInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * List of representation to show
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),

  /**
   * Show/Hide orientation axes.
   */
  showOrientationAxes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./src/lib/components/Volume.react.js":
/*!********************************************!*\
  !*** ./src/lib/components/Volume.react.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Volume; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




/**
 * Volume is exposing a vtkImageData to a downstream filter
 * It takes the following set of properties:
 *   - state: { image: { ...imagedata-props }, field: { ...dataArray } }
 */

function Volume(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["ImageData"], _extends({
    id: props.id,
    port: props.port
  }, props.state.image), props.state.field && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["PointData"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["DataArray"], _extends({
    registration: "setScalars"
  }, props.state.field))));
}
;
Volume.defaultProps = {
  port: 0,
  state: {
    image: {
      dimension: [10, 10, 10]
    }
  }
};
Volume.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * downstream connection port
   */
  port: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * State of the volume
   */
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ }),

/***/ "./src/lib/components/VolumeController.react.js":
/*!******************************************************!*\
  !*** ./src/lib/components/VolumeController.react.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VolumeController; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");
/* eslint-disable no-magic-numbers */



/**
 * VolumeController is a GUI to control the piecewise function
 */

function VolumeController(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["VolumeController"], props));
}
;
VolumeController.defaultProps = {
  size: [400, 150],
  rescaleColorMap: true
};
VolumeController.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Controller size in pixels
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Use opacity range to rescale color map
   */
  rescaleColorMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./src/lib/components/VolumeDataRepresentation.react.js":
/*!**************************************************************!*\
  !*** ./src/lib/components/VolumeDataRepresentation.react.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VolumeDataRepresentation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");
/* eslint-disable no-magic-numbers */



/**
 * VolumeDataRepresentation expect the following set of properties
 *   - dimensions: [10, 20, 5]
 *   - spacing: [1, 1, 1]
 *   - origin: [0, 0, 0]
 *   - rgb: [...]
 *   - rgba: [...]
 *   - scalars: [...]
 *   - scalarsType: Float32Array
 */

function VolumeDataRepresentation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["VolumeDataRepresentation"], props));
}
;
VolumeDataRepresentation.defaultProps = {
  scalarsType: 'Float32Array',
  colorMapPreset: 'erdc_rainbow_bright',
  colorDataRange: 'auto',
  volumeController: true,
  rescaleColorMap: true,
  controllerSize: [400, 150]
};
VolumeDataRepresentation.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Number of points along x, y, z
   */
  dimensions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Spacing along x, y, z between points in world coordinates
   */
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * World coordinate of the lower left corner of your vtkImageData (i=0, j=0, k=0).
   */
  origin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Use RGB values to attach to the points/vertex
   */
  rgb: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Use RGBA values to attach to the points/vertex
   */
  rgba: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Field values to attach to the points
   */
  scalars: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Types of numbers provided in scalars
   */
  scalarsType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Properties to set to the mapper
   */
  mapper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Properties to set to the volume
   */
  volume: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Properties to set to the volume.property
   */
  property: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Preset name for the lookup table color map
   */
  colorMapPreset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Show volumeController
   */
  volumeController: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Controller size in pixels
   */
  controllerSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Use opacity range to rescale color map
   */
  rescaleColorMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Data range use for the colorMap
   */
  colorDataRange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

/***/ }),

/***/ "./src/lib/components/VolumeRepresentation.react.js":
/*!**********************************************************!*\
  !*** ./src/lib/components/VolumeRepresentation.react.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VolumeRepresentation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsyncReactVTK */ "./src/lib/AsyncReactVTK.js");



/**
 * VolumeRepresentation is responsible to convert a vtkPolyData into rendering
 * It takes the following set of properties:
 *   - colorBy: ['POINTS', ''],
 *   - pointSize: 1,
 *   - color: [1,1,1],
 */

function VolumeRepresentation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_2__["VolumeRepresentation"], props));
}
;
VolumeRepresentation.defaultProps = {
  colorMapPreset: 'erdc_rainbow_bright',
  colorDataRange: 'auto'
};
VolumeRepresentation.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Properties to set to the mapper
   */
  mapper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Properties to set to the volume
   */
  volume: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Properties to set to the volume.property
   */
  property: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Preset name for the lookup table color map
   */
  colorMapPreset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Data range use for the colorMap
   */
  colorDataRange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: Algorithm, Calculator, CellData, DataArray, FieldData, GeometryRepresentation, GlyphRepresentation, ImageData, Mesh, PointCloudRepresentation, PointData, PolyData, Reader, ShareDataSet, SliceRepresentation, View, Volume, VolumeController, VolumeDataRepresentation, VolumeRepresentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Algorithm_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Algorithm.react */ "./src/lib/components/Algorithm.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Algorithm", function() { return _components_Algorithm_react__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_Calculator_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Calculator.react */ "./src/lib/components/Calculator.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Calculator", function() { return _components_Calculator_react__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_CellData_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CellData.react */ "./src/lib/components/CellData.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CellData", function() { return _components_CellData_react__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_DataArray_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DataArray.react */ "./src/lib/components/DataArray.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataArray", function() { return _components_DataArray_react__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _components_FieldData_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FieldData.react */ "./src/lib/components/FieldData.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldData", function() { return _components_FieldData_react__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _components_GeometryRepresentation_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/GeometryRepresentation.react */ "./src/lib/components/GeometryRepresentation.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeometryRepresentation", function() { return _components_GeometryRepresentation_react__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _components_GlyphRepresentation_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/GlyphRepresentation.react */ "./src/lib/components/GlyphRepresentation.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlyphRepresentation", function() { return _components_GlyphRepresentation_react__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _components_ImageData_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ImageData.react */ "./src/lib/components/ImageData.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageData", function() { return _components_ImageData_react__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _components_Mesh_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Mesh.react */ "./src/lib/components/Mesh.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return _components_Mesh_react__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _components_PointCloudRepresentation_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/PointCloudRepresentation.react */ "./src/lib/components/PointCloudRepresentation.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointCloudRepresentation", function() { return _components_PointCloudRepresentation_react__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _components_PointData_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/PointData.react */ "./src/lib/components/PointData.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointData", function() { return _components_PointData_react__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _components_PolyData_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/PolyData.react */ "./src/lib/components/PolyData.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolyData", function() { return _components_PolyData_react__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _components_Reader_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Reader.react */ "./src/lib/components/Reader.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reader", function() { return _components_Reader_react__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _components_ShareDataSet_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ShareDataSet.react */ "./src/lib/components/ShareDataSet.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShareDataSet", function() { return _components_ShareDataSet_react__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _components_SliceRepresentation_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/SliceRepresentation.react */ "./src/lib/components/SliceRepresentation.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliceRepresentation", function() { return _components_SliceRepresentation_react__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _components_View_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/View.react */ "./src/lib/components/View.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _components_View_react__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _components_Volume_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Volume.react */ "./src/lib/components/Volume.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Volume", function() { return _components_Volume_react__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _components_VolumeController_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/VolumeController.react */ "./src/lib/components/VolumeController.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VolumeController", function() { return _components_VolumeController_react__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _components_VolumeDataRepresentation_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/VolumeDataRepresentation.react */ "./src/lib/components/VolumeDataRepresentation.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VolumeDataRepresentation", function() { return _components_VolumeDataRepresentation_react__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _components_VolumeRepresentation_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/VolumeRepresentation.react */ "./src/lib/components/VolumeRepresentation.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VolumeRepresentation", function() { return _components_VolumeRepresentation_react__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* eslint-disable import/prefer-default-export */






















/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["PropTypes"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=dash_vtk.dev.js.map
//# sourceMappingURL=dash_vtk.dev.js.map