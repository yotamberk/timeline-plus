/**
 * timeline plus
 * https://yotamberk.github.io/timeline-plus
 *
 * @version 2.1.7
 * @date    2018-09-18
 *
 */

"use strict";

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["timeline"] = factory();
	else
		root["timeline"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(121);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.easingFunctions = exports.option = undefined;

var _create = __webpack_require__(33);

var _create2 = _interopRequireDefault(_create);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(24);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _typeof2 = __webpack_require__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.isNumber = isNumber;
exports.recursiveDOMDelete = recursiveDOMDelete;
exports.isString = isString;
exports.isDate = isDate;
exports.randomUUID = randomUUID;
exports.fillIfDefined = fillIfDefined;
exports.extend = extend;
exports.selectiveExtend = selectiveExtend;
exports.selectiveDeepExtend = selectiveDeepExtend;
exports.selectiveNotDeepExtend = selectiveNotDeepExtend;
exports.deepExtend = deepExtend;
exports.equalArray = equalArray;
exports.convert = convert;
exports.getType = getType;
exports.copyAndExtendArray = copyAndExtendArray;
exports.copyArray = copyArray;
exports.getAbsoluteLeft = getAbsoluteLeft;
exports.getAbsoluteRight = getAbsoluteRight;
exports.getAbsoluteTop = getAbsoluteTop;
exports.addClassName = addClassName;
exports.removeClassName = removeClassName;
exports.forEach = forEach;
exports.toArray = toArray;
exports.updateProperty = updateProperty;
exports.throttle = throttle;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.preventDefault = preventDefault;
exports.getTarget = getTarget;
exports.hasParent = hasParent;
exports.hexToRGB = hexToRGB;
exports.overrideOpacity = overrideOpacity;
exports.RGBToHex = RGBToHex;
exports.parseColor = parseColor;
exports.RGBToHSV = RGBToHSV;
exports.addCssText = addCssText;
exports.removeCssText = removeCssText;
exports.HSVToRGB = HSVToRGB;
exports.HSVToHex = HSVToHex;
exports.hexToHSV = hexToHSV;
exports.isValidHex = isValidHex;
exports.isValidRGB = isValidRGB;
exports.isValidRGBA = isValidRGBA;
exports.selectiveBridgeObject = selectiveBridgeObject;
exports.bridgeObject = bridgeObject;
exports.insertSort = insertSort;
exports.mergeOptions = mergeOptions;
exports.binarySearchCustom = binarySearchCustom;
exports.binarySearchValue = binarySearchValue;
exports.getScrollBarWidth = getScrollBarWidth;
exports.topMost = topMost;

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _uuid = __webpack_require__(118);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Test whether given object is a number
 * @param {*} object
 * @return {Boolean} isNumber
 */
// utility functions

// first check if moment.js is already loaded in the browser window, if so,
// use this instance. Else, load via commonjs.


function isNumber(object) {
  return object instanceof Number || typeof object == 'number';
}

/**
 * Remove everything in the DOM object
 * @param {Element} DOMobject
 */
function recursiveDOMDelete(DOMobject) {
  if (DOMobject) {
    while (DOMobject.hasChildNodes() === true) {
      exports.recursiveDOMDelete(DOMobject.firstChild);
      DOMobject.removeChild(DOMobject.firstChild);
    }
  }
}

/**
 * Test whether given object is a string
 * @param {*} object
 * @return {Boolean} isString
 */
function isString(object) {
  return object instanceof String || typeof object == 'string';
}

/**
 * Test whether given object is a Date, or a String containing a Date
 * @param {Date | String} object
 * @return {Boolean} isDate
 */
function isDate(object) {
  if (object instanceof Date) {
    return true;
  } else if (exports.isString(object)) {
    // test whether this string contains a date
    var match = ASPDateRegex.exec(object);
    if (match) {
      return true;
    } else if (!isNaN(Date.parse(object))) {
      return true;
    }
  }

  return false;
}

/**
 * Create a UUID
 * @return {string} uuid
 */
function randomUUID() {
  return _uuid2['default'].v4();
}

/**
 * Copy property from b to a if property present in a.
 * If property in b explicitly set to null, delete it if `allowDeletion` set.
 *
 * Internal helper routine, should not be exported. Not added to `exports` for that reason.
 *
 * @param {object} a  target object
 * @param {object} b  source object
 * @param {string} prop  name of property to copy to a
 * @param {boolean} allowDeletion  if true, delete property in a if explicitly set to null in b 
 * @private
 */
function copyOrDelete(a, b, prop, allowDeletion) {
  var doDeletion = false;
  if (allowDeletion === true) {
    doDeletion = b[prop] === null && a[prop] !== undefined;
  }

  if (doDeletion) {
    delete a[prop];
  } else {
    a[prop] = b[prop]; // Remember, this is a reference copy!
  }
}

/**
 * Fill an object with a possibly partially defined other object.
 *
 * Only copies values for the properties already present in a.
 * That means an object is not created on a property if only the b object has it.
 *
 * @param {object} a
 * @param {object} b
 * @param {boolean} [allowDeletion=false]  if true, delete properties in a that are explicitly set to null in b 
 */
function fillIfDefined(a, b) {
  var allowDeletion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  // NOTE: iteration of properties of a
  // NOTE: prototype properties iterated over as well
  for (var prop in a) {
    if (b[prop] !== undefined) {
      if (b[prop] === null || (0, _typeof3['default'])(b[prop]) !== 'object') {
        // Note: typeof null === 'object'
        copyOrDelete(a, b, prop, allowDeletion);
      } else {
        if ((0, _typeof3['default'])(a[prop]) === 'object') {
          exports.fillIfDefined(a[prop], b[prop], allowDeletion);
        }
      }
    }
  }
}

/**
 * Extend object a with the properties of object b or a series of objects
 * Only properties with defined values are copied
 * @param {Object} a
 * @param {...Object} b
 * @return {Object} a
 */
function extend(a, b) {
  // eslint-disable-line no-unused-vars
  for (var i = 1; i < arguments.length; i++) {
    var other = arguments[i];
    for (var prop in other) {
      if (other.hasOwnProperty(prop)) {
        a[prop] = other[prop];
      }
    }
  }
  return a;
}

/**
 * Extend object a with selected properties of object b or a series of objects
 * Only properties with defined values are copied
 * @param {Array.<string>} props
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 */
function selectiveExtend(props, a, b) {
  // eslint-disable-line no-unused-vars
  if (!Array.isArray(props)) {
    throw new Error('Array with property names expected as first argument');
  }

  for (var i = 2; i < arguments.length; i++) {
    var other = arguments[i];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3['default'])(props), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var prop = _step.value;

        if (other && other.hasOwnProperty(prop)) {
          a[prop] = other[prop];
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  return a;
}

/**
 * Extend object a with selected properties of object b.
 * Only properties with defined values are copied.
 *
 * **Note:** Previous version of this routine implied that multiple source objects
 *           could be used; however, the implementation was **wrong**.
 *           Since multiple (>1) sources weren't used anywhere in the `timeline.js` code,
 *           this has been removed
 *
 * @param {Array.<string>} props names of first-level properties to copy over
 * @param {object} a  target object
 * @param {object} b  source object
 * @param {boolean} [allowDeletion=false]  if true, delete property in a if explicitly set to null in b 
 * @returns {Object} a
 */
function selectiveDeepExtend(props, a, b) {
  var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  // TODO: add support for Arrays to deepExtend
  if (Array.isArray(b)) {
    throw new TypeError('Arrays are not supported by deepExtend');
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = (0, _getIterator3['default'])(props), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var prop = _step2.value;

      if (b.hasOwnProperty(prop)) {
        if (b[prop] && b[prop].constructor === Object) {
          if (a[prop] === undefined) {
            a[prop] = {};
          }
          if (a[prop].constructor === Object) {
            exports.deepExtend(a[prop], b[prop], false, allowDeletion);
          } else {
            copyOrDelete(a, b, prop, allowDeletion);
          }
        } else if (Array.isArray(b[prop])) {
          throw new TypeError('Arrays are not supported by deepExtend');
        } else {
          copyOrDelete(a, b, prop, allowDeletion);
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2['return']) {
        _iterator2['return']();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return a;
}

/**
 * Extend object `a` with properties of object `b`, ignoring properties which are explicitly 
 * specified to be excluded.
 * 
 * The properties of `b` are considered for copying.
 * Properties which are themselves objects are are also extended.
 * Only properties with defined values are copied
 *
 * @param {Array.<string>} propsToExclude  names of properties which should *not* be copied
 * @param {Object}                      a  object to extend
 * @param {Object}                      b  object to take properties from for extension
 * @param {boolean} [allowDeletion=false]  if true, delete properties in a that are explicitly set to null in b 
 * @return {Object} a
 */
function selectiveNotDeepExtend(propsToExclude, a, b) {
  var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  // TODO: add support for Arrays to deepExtend
  // NOTE: array properties have an else-below; apparently, there is a problem here. 
  if (Array.isArray(b)) {
    throw new TypeError('Arrays are not supported by deepExtend');
  }

  for (var prop in b) {
    if (!b.hasOwnProperty(prop)) continue; // Handle local properties only 
    if (propsToExclude.includes(prop)) continue; // In exclusion list, skip

    if (b[prop] && b[prop].constructor === Object) {
      if (a[prop] === undefined) {
        a[prop] = {};
      }
      if (a[prop].constructor === Object) {
        exports.deepExtend(a[prop], b[prop]); // NOTE: allowDeletion not propagated!
      } else {
        copyOrDelete(a, b, prop, allowDeletion);
      }
    } else if (Array.isArray(b[prop])) {
      a[prop] = [];
      for (var i = 0; i < b[prop].length; i++) {
        a[prop].push(b[prop][i]);
      }
    } else {
      copyOrDelete(a, b, prop, allowDeletion);
    }
  }

  return a;
}

/**
 * Deep extend an object a with the properties of object b
 *
 * @param {Object} a
 * @param {Object} b
 * @param {boolean} [protoExtend=false]  If true, the prototype values will also be extended.
 *                          (ie. the options objects that inherit from others will also get the inherited options)
 * @param {boolean} [allowDeletion=false] If true, the values of fields that are null will be deleted
 * @returns {Object}
 */
function deepExtend(a, b) {
  var protoExtend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  for (var prop in b) {
    if (b.hasOwnProperty(prop) || protoExtend === true) {
      if (b[prop] && b[prop].constructor === Object) {
        if (a[prop] === undefined) {
          a[prop] = {};
        }
        if (a[prop].constructor === Object) {
          exports.deepExtend(a[prop], b[prop], protoExtend); // NOTE: allowDeletion not propagated!
        } else {
          copyOrDelete(a, b, prop, allowDeletion);
        }
      } else if (Array.isArray(b[prop])) {
        a[prop] = [];
        for (var i = 0; i < b[prop].length; i++) {
          a[prop].push(b[prop][i]);
        }
      } else {
        copyOrDelete(a, b, prop, allowDeletion);
      }
    }
  }
  return a;
}

/**
 * Test whether all elements in two arrays are equal.
 * @param {Array} a
 * @param {Array} b
 * @return {boolean} Returns true if both arrays have the same length and same
 *                   elements.
 */
function equalArray(a, b) {
  if (a.length != b.length) return false;

  for (var i = 0, len = a.length; i < len; i++) {
    if (a[i] != b[i]) return false;
  }

  return true;
}

/**
 * Convert an object to another type
 * @param {boolean | number | string | Date | Moment | Null | undefined} object
 * @param {string | undefined} type   Name of the type. Available types:
 *                                    'Boolean', 'Number', 'String',
 *                                    'Date', 'Moment', ISODate', 'ASPDate'.
 * @return {*} object
 * @throws Error
 */
function convert(object, type) {
  var match = void 0;

  if (object === undefined) {
    return undefined;
  }
  if (object === null) {
    return null;
  }

  if (!type) {
    return object;
  }
  if (!(typeof type === 'string') && !(type instanceof String)) {
    throw new Error('Type must be a string');
  }

  //noinspection FallthroughInSwitchStatementJS
  switch (type) {
    case 'boolean':
    case 'Boolean':
      return Boolean(object);

    case 'number':
    case 'Number':
      if (exports.isString(object) && !isNaN(Date.parse(object))) {
        return (0, _moment2['default'])(object).valueOf();
      } else {
        return Number(object.valueOf());
      }
    case 'string':
    case 'String':
      return String(object);

    case 'Date':
      if (exports.isNumber(object)) {
        return new Date(object);
      }
      if (object instanceof Date) {
        return new Date(object.valueOf());
      } else if (_moment2['default'].isMoment(object)) {
        return new Date(object.valueOf());
      }
      if (exports.isString(object)) {
        match = ASPDateRegex.exec(object);
        if (match) {
          // object is an ASP date
          return new Date(Number(match[1])); // parse number
        } else {
          return (0, _moment2['default'])(new Date(object)).toDate(); // parse string
        }
      } else {
        throw new Error('Cannot convert object of type ' + exports.getType(object) + ' to type Date');
      }

    case 'Moment':
      if (exports.isNumber(object)) {
        return (0, _moment2['default'])(object);
      }
      if (object instanceof Date) {
        return (0, _moment2['default'])(object.valueOf());
      } else if (_moment2['default'].isMoment(object)) {
        return (0, _moment2['default'])(object);
      }
      if (exports.isString(object)) {
        match = ASPDateRegex.exec(object);
        if (match) {
          // object is an ASP date
          return (0, _moment2['default'])(Number(match[1])); // parse number
        } else {
          return (0, _moment2['default'])(object); // parse string
        }
      } else {
        throw new Error('Cannot convert object of type ' + exports.getType(object) + ' to type Date');
      }

    case 'ISODate':
      if (exports.isNumber(object)) {
        return new Date(object);
      } else if (object instanceof Date) {
        return object.toISOString();
      } else if (_moment2['default'].isMoment(object)) {
        return object.toDate().toISOString();
      } else if (exports.isString(object)) {
        match = ASPDateRegex.exec(object);
        if (match) {
          // object is an ASP date
          return new Date(Number(match[1])).toISOString(); // parse number
        } else {
          return (0, _moment2['default'])(object).format(); // ISO 8601
        }
      } else {
        throw new Error('Cannot convert object of type ' + exports.getType(object) + ' to type ISODate');
      }

    case 'ASPDate':
      if (exports.isNumber(object)) {
        return '/Date(' + object + ')/';
      } else if (object instanceof Date) {
        return '/Date(' + object.valueOf() + ')/';
      } else if (exports.isString(object)) {
        match = ASPDateRegex.exec(object);
        var value = void 0;
        if (match) {
          // object is an ASP date
          value = new Date(Number(match[1])).valueOf(); // parse number
        } else {
          value = new Date(object).valueOf(); // parse string
        }
        return '/Date(' + value + ')/';
      } else {
        throw new Error('Cannot convert object of type ' + exports.getType(object) + ' to type ASPDate');
      }

    default:
      throw new Error('Unknown type "' + type + '"');
  }
}

// parse ASP.Net Date pattern,
// for example '/Date(1198908717056)/' or '/Date(1198908717056-0700)/'
// code from http://momentjs.com/
var ASPDateRegex = /^\/?Date\((\-?\d+)/i;

/**
 * Get the type of an object, for example exports.getType([]) returns 'Array'
 * @param {*} object
 * @return {string} type
 */
function getType(object) {
  var type = typeof object === 'undefined' ? 'undefined' : (0, _typeof3['default'])(object);

  if (type == 'object') {
    if (object === null) {
      return 'null';
    }
    if (object instanceof Boolean) {
      return 'Boolean';
    }
    if (object instanceof Number) {
      return 'Number';
    }
    if (object instanceof String) {
      return 'String';
    }
    if (Array.isArray(object)) {
      return 'Array';
    }
    if (object instanceof Date) {
      return 'Date';
    }
    return 'Object';
  } else if (type == 'number') {
    return 'Number';
  } else if (type == 'boolean') {
    return 'Boolean';
  } else if (type == 'string') {
    return 'String';
  } else if (type === undefined) {
    return 'undefined';
  }

  return type;
}

/**
 * Used to extend an array and copy it. This is used to propagate paths recursively.
 *
 * @param {Array} arr
 * @param {*} newValue
 * @returns {Array}
 */
function copyAndExtendArray(arr, newValue) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  newArr.push(newValue);
  return newArr;
}

/**
 * Used to extend an array and copy it. This is used to propagate paths recursively.
 *
 * @param {Array} arr
 * @returns {Array}
 */
function copyArray(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

/**
 * Retrieve the absolute left value of a DOM element
 * @param {Element} elem        A dom element, for example a div
 * @return {number} left        The absolute left position of this element
 *                              in the browser page.
 */
function getAbsoluteLeft(elem) {
  return elem.getBoundingClientRect().left;
}

function getAbsoluteRight(elem) {
  return elem.getBoundingClientRect().right;
}

/**
 * Retrieve the absolute top value of a DOM element
 * @param {Element} elem        A dom element, for example a div
 * @return {number} top        The absolute top position of this element
 *                              in the browser page.
 */
function getAbsoluteTop(elem) {
  return elem.getBoundingClientRect().top;
}

/**
 * add a className to the given elements style
 * @param {Element} elem
 * @param {string} classNames
 */
function addClassName(elem, classNames) {
  var classes = elem.className.split(' ');
  var newClasses = classNames.split(' ');
  classes = classes.concat(newClasses.filter(function (className) {
    return !classes.includes(className);
  }));
  elem.className = classes.join(' ');
}

/**
 * add a className to the given elements style
 * @param {Element} elem
 * @param {string} classNames
 */
function removeClassName(elem, classNames) {
  var classes = elem.className.split(' ');
  var oldClasses = classNames.split(' ');
  classes = classes.filter(function (className) {
    return !oldClasses.includes(className);
  });
  elem.className = classes.join(' ');
}

/**
 * For each method for both arrays and objects.
 * In case of an array, the built-in Array.forEach() is applied. (**No, it's not!**)
 * In case of an Object, the method loops over all properties of the object.
 * @param {Object | Array} object   An Object or Array
 * @param {function} callback       Callback method, called for each item in
 *                                  the object or array with three parameters:
 *                                  callback(value, index, object)
 */
function forEach(object, callback) {
  var i = void 0;
  var len = void 0;
  if (Array.isArray(object)) {
    // array
    for (i = 0, len = object.length; i < len; i++) {
      callback(object[i], i, object);
    }
  } else {
    // object
    for (i in object) {
      if (object.hasOwnProperty(i)) {
        callback(object[i], i, object);
      }
    }
  }
}

/**
 * Convert an object into an array: all objects properties are put into the
 * array. The resulting array is unordered.
 * @param {Object} object
 * @returns {Array} array
 */
function toArray(object) {
  var array = [];

  for (var prop in object) {
    if (object.hasOwnProperty(prop)) array.push(object[prop]);
  }

  return array;
}

/**
 * Update a property in an object
 * @param {Object} object
 * @param {string} key
 * @param {*} value
 * @return {Boolean} changed
 */
function updateProperty(object, key, value) {
  if (object[key] !== value) {
    object[key] = value;
    return true;
  } else {
    return false;
  }
}

/**
 * Throttle the given function to be only executed once per animation frame
 * @param {function} fn
 * @returns {function} Returns the throttled function
 */
function throttle(fn) {
  var scheduled = false;

  return function throttled() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(function () {
        scheduled = false;
        fn();
      });
    }
  };
}

/**
 * Add and event listener. Works for all browsers
 * @param {Element}     element    An html element
 * @param {string}      action     The action, for example "click",
 *                                 without the prefix "on"
 * @param {function}    listener   The callback function to be executed
 * @param {boolean}     [useCapture]
 */
function addEventListener(element, action, listener, useCapture) {
  if (element.addEventListener) {
    if (useCapture === undefined) useCapture = false;

    if (action === "mousewheel" && navigator.userAgent.includes("Firefox")) {
      action = "DOMMouseScroll"; // For Firefox
    }

    element.addEventListener(action, listener, useCapture);
  } else {
    element.attachEvent('on' + action, listener); // IE browsers
  }
}

/**
 * Remove an event listener from an element
 * @param {Element}     element         An html dom element
 * @param {string}      action          The name of the event, for example "mousedown"
 * @param {function}    listener        The listener function
 * @param {boolean}     [useCapture]
 */
function removeEventListener(element, action, listener, useCapture) {
  if (element.removeEventListener) {
    // non-IE browsers
    if (useCapture === undefined) useCapture = false;

    if (action === "mousewheel" && navigator.userAgent.includes("Firefox")) {
      action = "DOMMouseScroll"; // For Firefox
    }

    element.removeEventListener(action, listener, useCapture);
  } else {
    // IE browsers
    element.detachEvent('on' + action, listener);
  }
}

/**
 * Cancels the event if it is cancelable, without stopping further propagation of the event.
 * @param {Event} event
 */
function preventDefault(event) {
  if (!event) event = window.event;

  if (event.preventDefault) {
    event.preventDefault(); // non-IE browsers
  } else {
    event.returnValue = false; // IE browsers
  }
}

/**
 * Get HTML element which is the target of the event
 * @param {Event} event
 * @return {Element} target element
 */
function getTarget(event) {
  // code from http://www.quirksmode.org/js/events_properties.html
  if (!event) {
    event = window.event;
  }

  var target = void 0;

  if (event.target) {
    target = event.target;
  } else if (event.srcElement) {
    target = event.srcElement;
  }

  if (target.nodeType != undefined && target.nodeType == 3) {
    // defeat Safari bug
    target = target.parentNode;
  }

  return target;
}

/**
 * Check if given element contains given parent somewhere in the DOM tree
 * @param {Element} element
 * @param {Element} parent
 * @returns {boolean}
 */
function hasParent(element, parent) {
  var e = element;

  while (e) {
    if (e === parent) {
      return true;
    }
    e = e.parentNode;
  }

  return false;
}

var option = exports.option = {};

/**
 * Convert a value into a boolean
 * @param {Boolean | function | undefined} value
 * @param {boolean} [defaultValue]
 * @returns {Boolean} bool
 */
exports.option.asBoolean = function (value, defaultValue) {
  if (typeof value == 'function') {
    value = value();
  }

  if (value != null) {
    return value != false;
  }

  return defaultValue || null;
};

/**
 * Convert a value into a number
 * @param {Boolean | function | undefined} value
 * @param {number} [defaultValue]
 * @returns {number} number
 */
exports.option.asNumber = function (value, defaultValue) {
  if (typeof value == 'function') {
    value = value();
  }

  if (value != null) {
    return Number(value) || defaultValue || null;
  }

  return defaultValue || null;
};

/**
 * Convert a value into a string
 * @param {string | function | undefined} value
 * @param {string} [defaultValue]
 * @returns {String} str
 */
exports.option.asString = function (value, defaultValue) {
  if (typeof value == 'function') {
    value = value();
  }

  if (value != null) {
    return String(value);
  }

  return defaultValue || null;
};

/**
 * Convert a size or location into a string with pixels or a percentage
 * @param {string | number | function | undefined} value
 * @param {string} [defaultValue]
 * @returns {String} size
 */
exports.option.asSize = function (value, defaultValue) {
  if (typeof value == 'function') {
    value = value();
  }

  if (exports.isString(value)) {
    return value;
  } else if (exports.isNumber(value)) {
    return value + 'px';
  } else {
    return defaultValue || null;
  }
};

/**
 * Convert a value into a DOM element
 * @param {HTMLElement | function | undefined} value
 * @param {HTMLElement} [defaultValue]
 * @returns {HTMLElement | null} dom
 */
exports.option.asElement = function (value, defaultValue) {
  if (typeof value == 'function') {
    value = value();
  }

  return value || defaultValue || null;
};

/**
 * http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
 *
 * @param {string} hex
 * @returns {{r: *, g: *, b: *}} | 255 range
 */
function hexToRGB(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * This function takes color in hex format or rgb() or rgba() format and overrides the opacity. Returns rgba() string.
 * @param {string} color
 * @param {number} opacity
 * @returns {String}
 */
function overrideOpacity(color, opacity) {
  var rgb = void 0;
  if (color.includes("rgba")) {
    return color;
  } else if (color.includes("rgb")) {
    rgb = color.substr(color.indexOf("(") + 1).replace(")", "").split(",");
    return 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + opacity + ')';
  } else {
    rgb = exports.hexToRGB(color);
    if (rgb == null) {
      return color;
    } else {
      return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + opacity + ')';
    }
  }
}

/**
 *
 * @param {number} red     0 -- 255
 * @param {number} green   0 -- 255
 * @param {number} blue    0 -- 255
 * @returns {String}
 * @constructor
 */
function RGBToHex(red, green, blue) {
  return '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
}

/**
 * Parse a color property into an object with border, background, and
 * highlight colors
 * @param {Object | String} color
 * @return {Object} colorObject
 */
function parseColor(color) {
  var c = void 0;
  if (exports.isString(color) === true) {
    if (exports.isValidRGB(color) === true) {
      var rgb = color.substr(4).substr(0, color.length - 5).split(',').map(function (value) {
        return parseInt(value);
      });
      color = exports.RGBToHex(rgb[0], rgb[1], rgb[2]);
    }
    if (exports.isValidHex(color) === true) {
      var hsv = exports.hexToHSV(color);
      var lighterColorHSV = { h: hsv.h, s: hsv.s * 0.8, v: Math.min(1, hsv.v * 1.02) };
      var darkerColorHSV = { h: hsv.h, s: Math.min(1, hsv.s * 1.25), v: hsv.v * 0.8 };
      var darkerColorHex = exports.HSVToHex(darkerColorHSV.h, darkerColorHSV.s, darkerColorHSV.v);
      var lighterColorHex = exports.HSVToHex(lighterColorHSV.h, lighterColorHSV.s, lighterColorHSV.v);
      c = {
        background: color,
        border: darkerColorHex,
        highlight: {
          background: lighterColorHex,
          border: darkerColorHex
        },
        hover: {
          background: lighterColorHex,
          border: darkerColorHex
        }
      };
    } else {
      c = {
        background: color,
        border: color,
        highlight: {
          background: color,
          border: color
        },
        hover: {
          background: color,
          border: color
        }
      };
    }
  } else {
    c = {};
    c.background = color.background || undefined;
    c.border = color.border || undefined;

    if (exports.isString(color.highlight)) {
      c.highlight = {
        border: color.highlight,
        background: color.highlight
      };
    } else {
      c.highlight = {};
      c.highlight.background = color.highlight && color.highlight.background || undefined;
      c.highlight.border = color.highlight && color.highlight.border || undefined;
    }

    if (exports.isString(color.hover)) {
      c.hover = {
        border: color.hover,
        background: color.hover
      };
    } else {
      c.hover = {};
      c.hover.background = color.hover && color.hover.background || undefined;
      c.hover.border = color.hover && color.hover.border || undefined;
    }
  }

  return c;
}

/**
 * http://www.javascripter.net/faq/rgb2hsv.htm
 *
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @returns {{h: number, s: number, v: number}}
 * @constructor
 */
function RGBToHSV(red, green, blue) {
  red = red / 255;green = green / 255;blue = blue / 255;
  var minRGB = Math.min(red, Math.min(green, blue));
  var maxRGB = Math.max(red, Math.max(green, blue));

  // Black-gray-white
  if (minRGB == maxRGB) {
    return { h: 0, s: 0, v: minRGB };
  }

  // Colors other than black-gray-white:
  var d = red == minRGB ? green - blue : blue == minRGB ? red - green : blue - red;
  var h = red == minRGB ? 3 : blue == minRGB ? 1 : 5;
  var hue = 60 * (h - d / (maxRGB - minRGB)) / 360;
  var saturation = (maxRGB - minRGB) / maxRGB;
  var value = maxRGB;
  return { h: hue, s: saturation, v: value };
}

var cssUtil = {
  // split a string with css styles into an object with key/values
  split: function split(cssText) {
    var styles = {};

    cssText.split(';').forEach(function (style) {
      if (style.trim() != '') {
        var parts = style.split(':');
        var key = parts[0].trim();
        var value = parts[1].trim();
        styles[key] = value;
      }
    });

    return styles;
  },


  // build a css text string from an object with key/values
  join: function join(styles) {
    return (0, _keys2['default'])(styles).map(function (key) {
      return key + ': ' + styles[key];
    }).join('; ');
  }
};

/**
 * Append a string with css styles to an element
 * @param {Element} element
 * @param {string} cssText
 */
function addCssText(element, cssText) {
  var currentStyles = cssUtil.split(element.style.cssText);
  var newStyles = cssUtil.split(cssText);
  var styles = exports.extend(currentStyles, newStyles);

  element.style.cssText = cssUtil.join(styles);
}

/**
 * Remove a string with css styles from an element
 * @param {Element} element
 * @param {string} cssText
 */
function removeCssText(element, cssText) {
  var styles = cssUtil.split(element.style.cssText);
  var removeStyles = cssUtil.split(cssText);

  for (var key in removeStyles) {
    if (removeStyles.hasOwnProperty(key)) {
      delete styles[key];
    }
  }

  element.style.cssText = cssUtil.join(styles);
}

/**
 * https://gist.github.com/mjijackson/5311256
 * @param {number} h
 * @param {number} s
 * @param {number} v
 * @returns {{r: number, g: number, b: number}}
 * @constructor
 */
function HSVToRGB(h, s, v) {
  var r = void 0;
  var g = void 0;
  var b = void 0;

  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      r = v, g = t, b = p;break;
    case 1:
      r = q, g = v, b = p;break;
    case 2:
      r = p, g = v, b = t;break;
    case 3:
      r = p, g = q, b = v;break;
    case 4:
      r = t, g = p, b = v;break;
    case 5:
      r = v, g = p, b = q;break;
  }

  return { r: Math.floor(r * 255), g: Math.floor(g * 255), b: Math.floor(b * 255) };
}

function HSVToHex(h, s, v) {
  var rgb = exports.HSVToRGB(h, s, v);
  return exports.RGBToHex(rgb.r, rgb.g, rgb.b);
}

function hexToHSV(hex) {
  var rgb = exports.hexToRGB(hex);
  return exports.RGBToHSV(rgb.r, rgb.g, rgb.b);
}

function isValidHex(hex) {
  var isOk = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
  return isOk;
}

function isValidRGB(rgb) {
  rgb = rgb.replace(" ", "");
  var isOk = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/i.test(rgb);
  return isOk;
}

function isValidRGBA(rgba) {
  rgba = rgba.replace(" ", "");
  var isOk = /rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(.{1,3})\)/i.test(rgba);
  return isOk;
}

/**
 * This recursively redirects the prototype of JSON objects to the referenceObject
 * This is used for default options.
 *
 * @param {Array.<string>} fields
 * @param {Object} referenceObject
 * @returns {*}
 */
function selectiveBridgeObject(fields, referenceObject) {
  if (referenceObject !== null && (typeof referenceObject === 'undefined' ? 'undefined' : (0, _typeof3['default'])(referenceObject)) === "object") {
    // !!! typeof null === 'object'
    var objectTo = (0, _create2['default'])(referenceObject);
    for (var i = 0; i < fields.length; i++) {
      if (referenceObject.hasOwnProperty(fields[i])) {
        if ((0, _typeof3['default'])(referenceObject[fields[i]]) == "object") {
          objectTo[fields[i]] = exports.bridgeObject(referenceObject[fields[i]]);
        }
      }
    }
    return objectTo;
  } else {
    return null;
  }
}

/**
 * This recursively redirects the prototype of JSON objects to the referenceObject
 * This is used for default options.
 *
 * @param {Object} referenceObject
 * @returns {*}
 */
function bridgeObject(referenceObject) {
  if (referenceObject !== null && (typeof referenceObject === 'undefined' ? 'undefined' : (0, _typeof3['default'])(referenceObject)) === "object") {
    // !!! typeof null === 'object'
    var objectTo = (0, _create2['default'])(referenceObject);
    if (referenceObject instanceof Element) {
      // Avoid bridging DOM objects
      objectTo = referenceObject;
    } else {
      objectTo = (0, _create2['default'])(referenceObject);
      for (var i in referenceObject) {
        if (referenceObject.hasOwnProperty(i)) {
          if ((0, _typeof3['default'])(referenceObject[i]) == "object") {
            objectTo[i] = exports.bridgeObject(referenceObject[i]);
          }
        }
      }
    }
    return objectTo;
  } else {
    return null;
  }
}

/**
 * This method provides a stable sort implementation, very fast for presorted data
 *
 * @param {Array} a the array
 * @param {function} compare an order comparator
 * @returns {Array}
 */
function insertSort(a, compare) {
  for (var i = 0; i < a.length; i++) {
    var k = a[i];
    for (var _j = i; _j > 0 && compare(k, a[_j - 1]) < 0; _j--) {
      a[_j] = a[_j - 1];
    }
    a[j] = k;
  }
  return a;
}

/**
 * This is used to set the options of subobjects in the options object.
 *
 * A requirement of these subobjects is that they have an 'enabled' element
 * which is optional for the user but mandatory for the program.
 *
 * The added value here of the merge is that option 'enabled' is set as required.
 *
 *
 * @param {object} mergeTarget   | either this.options or the options used for the groups.
 * @param {object} options       | options
 * @param {string} option        | option key in the options argument
 * @param {object} globalOptions | global options, passed in to determine value of option 'enabled'
 */
function mergeOptions(mergeTarget, options, option) {
  var globalOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  // Local helpers
  var isPresent = function isPresent(obj) {
    return obj !== null && obj !== undefined;
  };

  var isObject = function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3['default'])(obj)) === 'object';
  };

  // https://stackoverflow.com/a/34491287/1223531
  var isEmpty = function isEmpty(obj) {
    for (var x in obj) {
      if (obj.hasOwnProperty(x)) return false;
    }
    return true;
  };

  // Guards
  if (!isObject(mergeTarget)) {
    throw new Error('Parameter mergeTarget must be an object');
  }

  if (!isObject(options)) {
    throw new Error('Parameter options must be an object');
  }

  if (!isPresent(option)) {
    throw new Error('Parameter option must have a value');
  }

  if (!isObject(globalOptions)) {
    throw new Error('Parameter globalOptions must be an object');
  }

  //
  // Actual merge routine, separated from main logic
  // Only a single level of options is merged. Deeper levels are ref'd. This may actually be an issue.
  //
  var doMerge = function doMerge(target, options, option) {
    if (!isObject(target[option])) {
      target[option] = {};
    }

    var src = options[option];
    var dst = target[option];
    for (var prop in src) {
      if (src.hasOwnProperty(prop)) {
        dst[prop] = src[prop];
      }
    }
  };

  // Local initialization
  var srcOption = options[option];
  var globalPassed = isObject(globalOptions) && !isEmpty(globalOptions);
  var globalOption = globalPassed ? globalOptions[option] : undefined;
  var globalEnabled = globalOption ? globalOption.enabled : undefined;

  /////////////////////////////////////////
  // Main routine
  /////////////////////////////////////////
  if (srcOption === undefined) {
    return; // Nothing to do
  }

  if (typeof srcOption === 'boolean') {
    if (!isObject(mergeTarget[option])) {
      mergeTarget[option] = {};
    }

    mergeTarget[option].enabled = srcOption;
    return;
  }

  if (srcOption === null && !isObject(mergeTarget[option])) {
    // If possible, explicit copy from globals
    if (isPresent(globalOption)) {
      mergeTarget[option] = (0, _create2['default'])(globalOption);
    } else {
      return; // Nothing to do
    }
  }

  if (!isObject(srcOption)) {
    return;
  }

  //
  // Ensure that 'enabled' is properly set. It is required internally
  // Note that the value from options will always overwrite the existing value
  //
  var enabled = true; // default value

  if (srcOption.enabled !== undefined) {
    enabled = srcOption.enabled;
  } else {
    // Take from globals, if present
    if (globalEnabled !== undefined) {
      enabled = globalOption.enabled;
    }
  }

  doMerge(mergeTarget, options, option);
  mergeTarget[option].enabled = enabled;
}

/**
 * This function does a binary search for a visible item in a sorted list. If we find a visible item, the code that uses
 * this function will then iterate in both directions over this sorted list to find all visible items.
 *
 * @param {Item[]} orderedItems       | Items ordered by start
 * @param {function} comparator       | -1 is lower, 0 is equal, 1 is higher
 * @param {string} field
 * @param {string} field2
 * @returns {number}
 * @private
 */
function binarySearchCustom(orderedItems, comparator, field, field2) {
  var maxIterations = 10000;
  var iteration = 0;
  var low = 0;
  var high = orderedItems.length - 1;

  while (low <= high && iteration < maxIterations) {
    var middle = Math.floor((low + high) / 2);

    var item = orderedItems[middle];
    var value = field2 === undefined ? item[field] : item[field][field2];

    var searchResult = comparator(value);
    if (searchResult == 0) {
      // jihaa, found a visible item!
      return middle;
    } else if (searchResult == -1) {
      // it is too small --> increase low
      low = middle + 1;
    } else {
      // it is too big --> decrease high
      high = middle - 1;
    }

    iteration++;
  }

  return -1;
}

/**
 * This function does a binary search for a specific value in a sorted array. If it does not exist but is in between of
 * two values, we return either the one before or the one after, depending on user input
 * If it is found, we return the index, else -1.
 *
 * @param {Array} orderedItems
 * @param {{start: number, end: number}} target
 * @param {string} field
 * @param {string} sidePreference   'before' or 'after'
 * @param {function} comparator an optional comparator, returning -1,0,1 for <,==,>.
 * @returns {number}
 * @private
 */
function binarySearchValue(orderedItems, target, field, sidePreference, comparator) {
  var maxIterations = 10000;
  var iteration = 0;
  var low = 0;
  var high = orderedItems.length - 1;
  var prevValue = void 0;
  var value = void 0;
  var nextValue = void 0;
  var middle = void 0;

  comparator = comparator != undefined ? comparator : function (a, b) {
    return a == b ? 0 : a < b ? -1 : 1;
  };

  while (low <= high && iteration < maxIterations) {
    // get a new guess
    middle = Math.floor(0.5 * (high + low));
    prevValue = orderedItems[Math.max(0, middle - 1)][field];
    value = orderedItems[middle][field];
    nextValue = orderedItems[Math.min(orderedItems.length - 1, middle + 1)][field];

    if (comparator(value, target) == 0) {
      // we found the target
      return middle;
    } else if (comparator(prevValue, target) < 0 && comparator(value, target) > 0) {
      // target is in between of the previous and the current
      return sidePreference == 'before' ? Math.max(0, middle - 1) : middle;
    } else if (comparator(value, target) < 0 && comparator(nextValue, target) > 0) {
      // target is in between of the current and the next
      return sidePreference == 'before' ? middle : Math.min(orderedItems.length - 1, middle + 1);
    } else {
      // didnt find the target, we need to change our boundaries.
      if (comparator(value, target) < 0) {
        // it is too small --> increase low
        low = middle + 1;
      } else {
        // it is too big --> decrease high
        high = middle - 1;
      }
    }
    iteration++;
  }

  // didnt find anything. Return -1.
  return -1;
}

/*
 * Easing Functions - inspired from http://gizma.com/easing/
 * only considering the t value for the range [0, 1] => [0, 1]
 * https://gist.github.com/gre/1650294
 */
var easingFunctions = exports.easingFunctions = {
  // no easing, no acceleration
  linear: function linear(t) {
    return t;
  },

  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },

  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },

  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },

  // accelerating from zero velocity
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },

  // decelerating to zero velocity
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },

  // acceleration until halfway, then deceleration
  easeInOutCubic: function easeInOutCubic(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },

  // accelerating from zero velocity
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },

  // decelerating to zero velocity
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },

  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },

  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },

  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },

  // acceleration until halfway, then deceleration
  easeInOutQuint: function easeInOutQuint(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};

function getScrollBarWidth() {
  var inner = document.createElement('p');
  inner.style.width = "100%";
  inner.style.height = "200px";

  var outer = document.createElement('div');
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild(inner);

  document.body.appendChild(outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 == w2) w2 = outer.clientWidth;

  document.body.removeChild(outer);

  return w1 - w2;
}

function topMost(pile, accessors) {
  var candidate = void 0;
  if (!Array.isArray(accessors)) {
    accessors = [accessors];
  }
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = (0, _getIterator3['default'])(pile), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var member = _step3.value;

      if (member) {
        candidate = member[accessors[0]];
        for (var i = 1; i < accessors.length; i++) {
          if (candidate) {
            candidate = candidate[accessors[i]];
          }
        }
        if (typeof candidate != 'undefined') {
          break;
        }
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3['return']) {
        _iterator3['return']();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return candidate;
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(127);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(33);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(103);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(105);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// first check if moment.js is already loaded in the browser window, if so,
// use this instance. Else, load via commonjs.
exports['default'] = typeof window !== 'undefined' && window['moment'] || __webpack_require__(115);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(40)('wks');
var uid = __webpack_require__(30);
var Symbol = __webpack_require__(9).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(55);
var toPrimitive = __webpack_require__(34);
var dP = Object.defineProperty;

exports.f = __webpack_require__(13) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(23)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/** Prototype for visual components */
var Component = function () {
  /**
  * @param {{dom: Object, domProps: Object, emitter: Emitter, range: Range}} [body]
  * @param {Object} [options]
  */
  function Component(body, options) {
    (0, _classCallCheck3['default'])(this, Component);
    // eslint-disable-line no-unused-vars
    this.options = null;
    this.props = null;
  }

  /**
   * Set options for the component. The new options will be merged into the
   * current options.
   * @param {Object} options
   */


  (0, _createClass3['default'])(Component, [{
    key: 'setOptions',
    value: function setOptions(options) {
      if (options) {
        util.extend(this.options, options);
      }
    }

    /**
     * Repaint the component
     * @return {boolean} Returns true if the component is resized
     */

  }, {
    key: 'redraw',
    value: function redraw() {
      // should be implemented by the component
      return false;
    }

    /**
     * Destroy the component. Cleanup DOM and event listeners
     */

  }, {
    key: 'destroy',
    value: function destroy() {}
    // should be implemented by the component


    /**
     * Test whether the component is resized since the last time _isResized() was
     * called.
     * @return {Boolean} Returns true if the component is resized
     * @protected
     */

  }, {
    key: '_isResized',
    value: function _isResized() {
      var resized = this.props._previousWidth !== this.props.width || this.props._previousHeight !== this.props.height;

      this.props._previousWidth = this.props.width;
      this.props._previousHeight = this.props.height;

      return resized;
    }
  }]);
  return Component;
}();

exports['default'] = Component;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Setup a mock hammer.js object, for unit testing.
 *
 * Inspiration: https://github.com/uber/deck.gl/pull/658
 *
 * @returns {{on: noop, off: noop, destroy: noop, emit: noop, get: get}}
 */
function hammerMock() {
  var noop = function noop() {};

  return {
    on: noop,
    off: noop,
    destroy: noop,
    emit: noop,

    get: function get(m) {
      //eslint-disable-line no-unused-vars
      return {
        set: noop
      };
    }
  };
}

if (typeof window !== 'undefined') {
  var propagating = __webpack_require__(131);
  var Hammer = window['Hammer'] || __webpack_require__(132);
  module.exports = propagating(Hammer, {
    preventDefault: 'mouse'
  });
} else {
  module.exports = function () {
    return (// hammer.js is only available in a browser, not in node.js. Replacing it with a mock object.
      hammerMock()
    );
  };
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(3);
var ctx = __webpack_require__(54);
var hide = __webpack_require__(18);
var has = __webpack_require__(14);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var createDesc = __webpack_require__(27);
module.exports = __webpack_require__(13) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(87);
var defined = __webpack_require__(37);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertHiddenOptions = convertHiddenOptions;
exports.updateHiddenDates = updateHiddenDates;
exports.removeDuplicates = removeDuplicates;
exports.printDates = printDates;
exports.stepOverHiddenDates = stepOverHiddenDates;
exports.toScreen = toScreen;
exports.toTime = toTime;
exports.getHiddenDurationBetween = getHiddenDurationBetween;
exports.getHiddenDurationBeforeStart = getHiddenDurationBeforeStart;
exports.correctTimeForHidden = correctTimeForHidden;
exports.getHiddenDurationBefore = getHiddenDurationBefore;
exports.getAccumulatedHiddenDuration = getAccumulatedHiddenDuration;
exports.snapAwayFromHidden = snapAwayFromHidden;
exports.isHidden = isHidden;

/**
 * used in Core to convert the options into a volatile variable
 * 
 * @param {function} moment
 * @param {Object} body
 * @param {Array | Object} hiddenDates
 * @returns {number}
 */
function convertHiddenOptions(moment, body, hiddenDates) {
  if (hiddenDates && !Array.isArray(hiddenDates)) {
    return exports.convertHiddenOptions(moment, body, [hiddenDates]);
  }

  body.hiddenDates = [];
  if (hiddenDates) {
    if (Array.isArray(hiddenDates) == true) {
      for (var i = 0; i < hiddenDates.length; i++) {
        if (hiddenDates[i].repeat === undefined) {
          var dateItem = {};
          dateItem.start = moment(hiddenDates[i].start).toDate().valueOf();
          dateItem.end = moment(hiddenDates[i].end).toDate().valueOf();
          body.hiddenDates.push(dateItem);
        }
      }
      body.hiddenDates.sort(function (a, b) {
        return a.start - b.start;
      }); // sort by start time
    }
  }
}

/**
 * create new entrees for the repeating hidden dates
 *
 * @param {function} moment
 * @param {Object} body
 * @param {Array | Object} hiddenDates
 * @returns {null}
 */
function updateHiddenDates(moment, body, hiddenDates) {
  if (hiddenDates && !Array.isArray(hiddenDates)) {
    return exports.updateHiddenDates(moment, body, [hiddenDates]);
  }

  if (hiddenDates && body.domProps.centerContainer.width !== undefined) {
    exports.convertHiddenOptions(moment, body, hiddenDates);

    var start = moment(body.range.start);
    var end = moment(body.range.end);

    var totalRange = body.range.end - body.range.start;
    var pixelTime = totalRange / body.domProps.centerContainer.width;

    for (var i = 0; i < hiddenDates.length; i++) {
      if (hiddenDates[i].repeat !== undefined) {
        var startDate = moment(hiddenDates[i].start);
        var endDate = moment(hiddenDates[i].end);

        if (startDate._d == "Invalid Date") {
          throw new Error("Supplied start date is not valid: " + hiddenDates[i].start);
        }
        if (endDate._d == "Invalid Date") {
          throw new Error("Supplied end date is not valid: " + hiddenDates[i].end);
        }

        var duration = endDate - startDate;
        if (duration >= 4 * pixelTime) {

          var offset = 0;
          var runUntil = end.clone();
          switch (hiddenDates[i].repeat) {
            case "daily":
              // case of time
              if (startDate.day() != endDate.day()) {
                offset = 1;
              }
              startDate.dayOfYear(start.dayOfYear());
              startDate.year(start.year());
              startDate.subtract(7, 'days');

              endDate.dayOfYear(start.dayOfYear());
              endDate.year(start.year());
              endDate.subtract(7 - offset, 'days');

              runUntil.add(1, 'weeks');
              break;
            case "weekly":
              var dayOffset = endDate.diff(startDate, 'days');
              var day = startDate.day();

              // set the start date to the range.start
              startDate.date(start.date());
              startDate.month(start.month());
              startDate.year(start.year());
              endDate = startDate.clone();

              // force
              startDate.day(day);
              endDate.day(day);
              endDate.add(dayOffset, 'days');

              startDate.subtract(1, 'weeks');
              endDate.subtract(1, 'weeks');

              runUntil.add(1, 'weeks');
              break;
            case "monthly":
              if (startDate.month() != endDate.month()) {
                offset = 1;
              }
              startDate.month(start.month());
              startDate.year(start.year());
              startDate.subtract(1, 'months');

              endDate.month(start.month());
              endDate.year(start.year());
              endDate.subtract(1, 'months');
              endDate.add(offset, 'months');

              runUntil.add(1, 'months');
              break;
            case "yearly":
              if (startDate.year() != endDate.year()) {
                offset = 1;
              }
              startDate.year(start.year());
              startDate.subtract(1, 'years');
              endDate.year(start.year());
              endDate.subtract(1, 'years');
              endDate.add(offset, 'years');

              runUntil.add(1, 'years');
              break;
            default:
              console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:", hiddenDates[i].repeat);
              return;
          }
          while (startDate < runUntil) {
            body.hiddenDates.push({ start: startDate.valueOf(), end: endDate.valueOf() });
            switch (hiddenDates[i].repeat) {
              case "daily":
                startDate.add(1, 'days');
                endDate.add(1, 'days');
                break;
              case "weekly":
                startDate.add(1, 'weeks');
                endDate.add(1, 'weeks');
                break;
              case "monthly":
                startDate.add(1, 'months');
                endDate.add(1, 'months');
                break;
              case "yearly":
                startDate.add(1, 'y');
                endDate.add(1, 'y');
                break;
              default:
                console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:", hiddenDates[i].repeat);
                return;
            }
          }
          body.hiddenDates.push({ start: startDate.valueOf(), end: endDate.valueOf() });
        }
      }
    }
    // remove duplicates, merge where possible
    exports.removeDuplicates(body);
    // ensure the new positions are not on hidden dates
    var startHidden = exports.isHidden(body.range.start, body.hiddenDates);
    var endHidden = exports.isHidden(body.range.end, body.hiddenDates);
    var rangeStart = body.range.start;
    var rangeEnd = body.range.end;
    if (startHidden.hidden == true) {
      rangeStart = body.range.startToFront == true ? startHidden.startDate - 1 : startHidden.endDate + 1;
    }
    if (endHidden.hidden == true) {
      rangeEnd = body.range.endToFront == true ? endHidden.startDate - 1 : endHidden.endDate + 1;
    }
    if (startHidden.hidden == true || endHidden.hidden == true) {
      body.range._applyRange(rangeStart, rangeEnd);
    }
  }
}

/**
 * remove duplicates from the hidden dates list. Duplicates are evil. They mess everything up.
 * Scales with N^2
 *
 * @param {Object} body
 */
function removeDuplicates(body) {
  var hiddenDates = body.hiddenDates;
  var safeDates = [];
  for (var i = 0; i < hiddenDates.length; i++) {
    for (var j = 0; j < hiddenDates.length; j++) {
      if (i != j && hiddenDates[j].remove != true && hiddenDates[i].remove != true) {
        // j inside i
        if (hiddenDates[j].start >= hiddenDates[i].start && hiddenDates[j].end <= hiddenDates[i].end) {
          hiddenDates[j].remove = true;
        }
        // j start inside i
        else if (hiddenDates[j].start >= hiddenDates[i].start && hiddenDates[j].start <= hiddenDates[i].end) {
            hiddenDates[i].end = hiddenDates[j].end;
            hiddenDates[j].remove = true;
          }
          // j end inside i
          else if (hiddenDates[j].end >= hiddenDates[i].start && hiddenDates[j].end <= hiddenDates[i].end) {
              hiddenDates[i].start = hiddenDates[j].start;
              hiddenDates[j].remove = true;
            }
      }
    }
  }

  for (i = 0; i < hiddenDates.length; i++) {
    if (hiddenDates[i].remove !== true) {
      safeDates.push(hiddenDates[i]);
    }
  }

  body.hiddenDates = safeDates;
  body.hiddenDates.sort(function (a, b) {
    return a.start - b.start;
  }); // sort by start time
}

function printDates(dates) {
  for (var i = 0; i < dates.length; i++) {
    console.log(i, new Date(dates[i].start), new Date(dates[i].end), dates[i].start, dates[i].end, dates[i].remove);
  }
}

/**
 * Used in TimeStep to avoid the hidden times.
 * @param {function} moment
 * @param {TimeStep} timeStep
 * @param {Date} previousTime
 */
function stepOverHiddenDates(moment, timeStep, previousTime) {
  var stepInHidden = false;
  var currentValue = timeStep.current.valueOf();
  for (var i = 0; i < timeStep.hiddenDates.length; i++) {
    var startDate = timeStep.hiddenDates[i].start;
    var endDate = timeStep.hiddenDates[i].end;
    if (currentValue >= startDate && currentValue < endDate) {
      stepInHidden = true;
      break;
    }
  }

  if (stepInHidden == true && currentValue < timeStep._end.valueOf() && currentValue != previousTime) {
    var prevValue = moment(previousTime);
    var newValue = moment(endDate);
    //check if the next step should be major
    if (prevValue.year() != newValue.year()) {
      timeStep.switchedYear = true;
    } else if (prevValue.month() != newValue.month()) {
      timeStep.switchedMonth = true;
    } else if (prevValue.dayOfYear() != newValue.dayOfYear()) {
      timeStep.switchedDay = true;
    }

    timeStep.current = newValue;
  }
}

///**
// * Used in TimeStep to avoid the hidden times.
// * @param timeStep
// * @param previousTime
// */
//exports.checkFirstStep = function(timeStep) {
//  var stepInHidden = false;
//  var currentValue = timeStep.current.valueOf();
//  for (var i = 0; i < timeStep.hiddenDates.length; i++) {
//    var startDate = timeStep.hiddenDates[i].start;
//    var endDate = timeStep.hiddenDates[i].end;
//    if (currentValue >= startDate && currentValue < endDate) {
//      stepInHidden = true;
//      break;
//    }
//  }
//
//  if (stepInHidden == true && currentValue <= timeStep._end.valueOf()) {
//    var newValue = moment(endDate);
//    timeStep.current = newValue.toDate();
//  }
//};

/**
 * replaces the Core toScreen methods
 *
 * @param {timeline.Core} Core
 * @param {Date} time
 * @param {number} width
 * @returns {number}
 */
function toScreen(Core, time, width) {
  var conversion = void 0;
  if (Core.body.hiddenDates.length == 0) {
    conversion = Core.range.conversion(width);
    return (time.valueOf() - conversion.offset) * conversion.scale;
  } else {
    var hidden = exports.isHidden(time, Core.body.hiddenDates);
    if (hidden.hidden == true) {
      time = hidden.startDate;
    }

    var duration = exports.getHiddenDurationBetween(Core.body.hiddenDates, Core.range.start, Core.range.end);
    if (time < Core.range.start) {
      conversion = Core.range.conversion(width, duration);
      var hiddenBeforeStart = exports.getHiddenDurationBeforeStart(Core.body.hiddenDates, time, conversion.offset);
      time = Core.options.moment(time).toDate().valueOf();
      time = time + hiddenBeforeStart;
      return -(conversion.offset - time.valueOf()) * conversion.scale;
    } else if (time > Core.range.end) {
      var rangeAfterEnd = { start: Core.range.start, end: time };
      time = exports.correctTimeForHidden(Core.options.moment, Core.body.hiddenDates, rangeAfterEnd, time);
      conversion = Core.range.conversion(width, duration);
      return (time.valueOf() - conversion.offset) * conversion.scale;
    } else {
      time = exports.correctTimeForHidden(Core.options.moment, Core.body.hiddenDates, Core.range, time);
      conversion = Core.range.conversion(width, duration);
      return (time.valueOf() - conversion.offset) * conversion.scale;
    }
  }
}

/**
 * Replaces the core toTime methods
 *
 * @param {timeline.Core} Core
 * @param {number} x
 * @param {number} width
 * @returns {Date}
 */
function toTime(Core, x, width) {
  if (Core.body.hiddenDates.length == 0) {
    var conversion = Core.range.conversion(width);
    return new Date(x / conversion.scale + conversion.offset);
  } else {
    var hiddenDuration = exports.getHiddenDurationBetween(Core.body.hiddenDates, Core.range.start, Core.range.end);
    var totalDuration = Core.range.end - Core.range.start - hiddenDuration;
    var partialDuration = totalDuration * x / width;
    var accumulatedHiddenDuration = exports.getAccumulatedHiddenDuration(Core.body.hiddenDates, Core.range, partialDuration);

    return new Date(accumulatedHiddenDuration + partialDuration + Core.range.start);
  }
}

/**
 * Support function
 *
 * @param {Array.<{start: Window.start, end: *}>} hiddenDates
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
function getHiddenDurationBetween(hiddenDates, start, end) {
  var duration = 0;
  for (var i = 0; i < hiddenDates.length; i++) {
    var startDate = hiddenDates[i].start;
    var endDate = hiddenDates[i].end;
    // if time after the cutout, and the
    if (startDate >= start && endDate < end) {
      duration += endDate - startDate;
    }
  }
  return duration;
}

/**
 * Support function
 *
 * @param {Array.<{start: Window.start, end: *}>} hiddenDates
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
function getHiddenDurationBeforeStart(hiddenDates, start, end) {
  var duration = 0;
  for (var i = 0; i < hiddenDates.length; i++) {
    var startDate = hiddenDates[i].start;
    var endDate = hiddenDates[i].end;

    if (startDate >= start && endDate <= end) {
      duration += endDate - startDate;
    }
  }
  return duration;
}

/**
 * Support function
 * @param {function} moment
 * @param {Array.<{start: Window.start, end: *}>} hiddenDates
 * @param {{start: number, end: number}} range
 * @param {Date} time
 * @returns {number}
 */
function correctTimeForHidden(moment, hiddenDates, range, time) {
  time = moment(time).toDate().valueOf();
  time -= exports.getHiddenDurationBefore(moment, hiddenDates, range, time);
  return time;
}

function getHiddenDurationBefore(moment, hiddenDates, range, time) {
  var timeOffset = 0;
  time = moment(time).toDate().valueOf();

  for (var i = 0; i < hiddenDates.length; i++) {
    var startDate = hiddenDates[i].start;
    var endDate = hiddenDates[i].end;
    // if time after the cutout, and the
    if (startDate >= range.start && endDate < range.end) {
      if (time >= endDate) {
        timeOffset += endDate - startDate;
      }
    }
  }
  return timeOffset;
}

/**
 * sum the duration from start to finish, including the hidden duration,
 * until the required amount has been reached, return the accumulated hidden duration
 * @param {Array.<{start: Window.start, end: *}>} hiddenDates
 * @param {{start: number, end: number}} range
 * @param {number} [requiredDuration=0]
 * @returns {number}
 */
function getAccumulatedHiddenDuration(hiddenDates, range, requiredDuration) {
  var hiddenDuration = 0;
  var duration = 0;
  var previousPoint = range.start;
  //exports.printDates(hiddenDates)
  for (var i = 0; i < hiddenDates.length; i++) {
    var startDate = hiddenDates[i].start;
    var endDate = hiddenDates[i].end;
    // if time after the cutout, and the
    if (startDate >= range.start && endDate < range.end) {
      duration += startDate - previousPoint;
      previousPoint = endDate;
      if (duration >= requiredDuration) {
        break;
      } else {
        hiddenDuration += endDate - startDate;
      }
    }
  }

  return hiddenDuration;
}

/**
 * used to step over to either side of a hidden block. Correction is disabled on tablets, might be set to true
 * @param {Array.<{start: Window.start, end: *}>} hiddenDates
 * @param {Date} time
 * @param {number} direction
 * @param {boolean} correctionEnabled
 * @returns {Date|number}
 */
function snapAwayFromHidden(hiddenDates, time, direction, correctionEnabled) {
  var isHidden = exports.isHidden(time, hiddenDates);
  if (isHidden.hidden == true) {
    if (direction < 0) {
      if (correctionEnabled == true) {
        return isHidden.startDate - (isHidden.endDate - time) - 1;
      } else {
        return isHidden.startDate - 1;
      }
    } else {
      if (correctionEnabled == true) {
        return isHidden.endDate + (time - isHidden.startDate) + 1;
      } else {
        return isHidden.endDate + 1;
      }
    }
  } else {
    return time;
  }
}

/**
 * Check if a time is hidden
 *
 * @param {Date} time
 * @param {Array.<{start: Window.start, end: *}>} hiddenDates
 * @returns {{hidden: boolean, startDate: Window.start, endDate: *}}
 */
function isHidden(time, hiddenDates) {
  for (var i = 0; i < hiddenDates.length; i++) {
    var startDate = hiddenDates[i].start;
    var endDate = hiddenDates[i].end;

    if (time >= startDate && time < endDate) {
      // if the start is entering a hidden zone
      return { hidden: true, startDate: startDate, endDate: endDate };
    }
  }
  return { hidden: false, startDate: startDate, endDate: endDate };
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _getIterator2 = __webpack_require__(24);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _hammer = __webpack_require__(16);

var _hammer2 = _interopRequireDefault(_hammer);

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Item
 */
var Item = function () {
  /**
  * @constructor Item
  * @param {Object} data             Object containing (optional) parameters type,
  *                                  start, end, content, group, className.
  * @param {{toScreen: function, toTime: function}} conversion
  *                                  Conversion functions from time to screen and vice versa
  * @param {Object} options          Configuration options
  *                                  // TODO: describe available options
  */
  function Item(data, conversion, options) {
    (0, _classCallCheck3['default'])(this, Item);

    this.id = null;
    this.parent = null;
    this.data = data;
    this.dom = null;
    this.conversion = conversion || {};
    this.options = options || {};
    this.selected = false;
    this.displayed = false;
    this.groupShowing = true;
    this.dirty = true;

    this.top = null;
    this.right = null;
    this.left = null;
    this.width = null;
    this.height = null;

    this.editable = null;
    this._updateEditStatus();
  }

  /**
   * Select current item
   */


  (0, _createClass3['default'])(Item, [{
    key: 'select',
    value: function select() {
      this.selected = true;
      this.dirty = true;
      if (this.displayed) this.redraw();
    }

    /**
     * Unselect current item
     */

  }, {
    key: 'unselect',
    value: function unselect() {
      this.selected = false;
      this.dirty = true;
      if (this.displayed) this.redraw();
    }

    /**
     * Set data for the item. Existing data will be updated. The id should not
     * be changed. When the item is displayed, it will be redrawn immediately.
     * @param {Object} data
     */

  }, {
    key: 'setData',
    value: function setData(data) {
      var groupChanged = data.group != undefined && this.data.group != data.group;
      if (groupChanged && this.parent != null) {
        this.parent.itemSet._moveToGroup(this, data.group);
      }

      if (this.parent) {
        this.parent.stackDirty = true;
      }

      var subGroupChanged = data.subgroup != undefined && this.data.subgroup != data.subgroup;
      if (subGroupChanged && this.parent != null) {
        this.parent.changeSubgroup(this, this.data.subgroup, data.subgroup);
      }

      this.data = data;
      this._updateEditStatus();
      this.dirty = true;
      if (this.displayed) this.redraw();
    }

    /**
     * Set a parent for the item
     * @param {Group} parent
     */

  }, {
    key: 'setParent',
    value: function setParent(parent) {
      if (this.displayed) {
        this.hide();
        this.parent = parent;
        if (this.parent) {
          this.show();
        }
      } else {
        this.parent = parent;
      }
    }

    /**
     * Check whether this item is visible inside given range
     * @param {timeline.Range} range with a timestamp for start and end
     * @returns {boolean} True if visible
     */

  }, {
    key: 'isVisible',
    value: function isVisible(range) {
      // eslint-disable-line no-unused-vars
      return false;
    }

    /**
     * Show the Item in the DOM (when not already visible)
     * @return {Boolean} changed
     */

  }, {
    key: 'show',
    value: function show() {
      return false;
    }

    /**
     * Hide the Item from the DOM (when visible)
     * @return {Boolean} changed
     */

  }, {
    key: 'hide',
    value: function hide() {
      return false;
    }

    /**
     * Repaint the item
     */

  }, {
    key: 'redraw',
    value: function redraw() {}
    // should be implemented by the item


    /**
     * Reposition the Item horizontally
     */

  }, {
    key: 'repositionX',
    value: function repositionX() {}
    // should be implemented by the item


    /**
     * Reposition the Item vertically
     */

  }, {
    key: 'repositionY',
    value: function repositionY() {}
    // should be implemented by the item


    /**
     * Repaint a drag area on the center of the item when the item is selected
     * @protected
     */

  }, {
    key: '_repaintDragCenter',
    value: function _repaintDragCenter() {
      if (this.selected && this.options.editable.updateTime && !this.dom.dragCenter) {
        var me = this;
        // create and show drag area
        var dragCenter = document.createElement('div');
        dragCenter.className = 'timeline-drag-center';
        dragCenter.dragCenterItem = this;
        this.hammerDragCenter = new _hammer2['default'](dragCenter);

        this.hammerDragCenter.on('tap', function (event) {
          me.parent.itemSet.body.emitter.emit('click', {
            event: event,
            item: me.id
          });
        });
        this.hammerDragCenter.on('doubletap', function (event) {
          event.stopPropagation();
          me.parent.itemSet._onUpdateItem(me);
          me.parent.itemSet.body.emitter.emit('doubleClick', {
            event: event,
            item: me.id
          });
        });

        if (this.dom.box) {
          if (this.dom.dragLeft) {
            this.dom.box.insertBefore(dragCenter, this.dom.dragLeft);
          } else {
            this.dom.box.appendChild(dragCenter);
          }
        } else if (this.dom.point) {
          this.dom.point.appendChild(dragCenter);
        }

        this.dom.dragCenter = dragCenter;
      } else if (!this.selected && this.dom.dragCenter) {
        // delete drag area
        if (this.dom.dragCenter.parentNode) {
          this.dom.dragCenter.parentNode.removeChild(this.dom.dragCenter);
        }
        this.dom.dragCenter = null;

        if (this.hammerDragCenter) {
          this.hammerDragCenter.destroy();
          this.hammerDragCenter = null;
        }
      }
    }

    /**
     * Repaint a delete button on the top right of the item when the item is selected
     * @param {HTMLElement} anchor
     * @protected
     */

  }, {
    key: '_repaintDeleteButton',
    value: function _repaintDeleteButton(anchor) {
      var editable = (this.options.editable.overrideItems || this.editable == null) && this.options.editable.remove || !this.options.editable.overrideItems && this.editable != null && this.editable.remove;

      if (this.selected && editable && !this.dom.deleteButton) {
        // create and show button
        var me = this;

        var deleteButton = document.createElement('div');

        if (this.options.rtl) {
          deleteButton.className = 'timeline-delete-rtl';
        } else {
          deleteButton.className = 'timeline-delete';
        }
        deleteButton.title = 'Delete this item';

        // TODO: be able to destroy the delete button
        this.hammerDeleteButton = new _hammer2['default'](deleteButton).on('tap', function (event) {
          event.stopPropagation();
          me.parent.removeFromDataSet(me);
        });

        anchor.appendChild(deleteButton);
        this.dom.deleteButton = deleteButton;
      } else if (!this.selected && this.dom.deleteButton) {
        // remove button
        if (this.dom.deleteButton.parentNode) {
          this.dom.deleteButton.parentNode.removeChild(this.dom.deleteButton);
        }
        this.dom.deleteButton = null;

        if (this.hammerDeleteButton) {
          this.hammerDeleteButton.destroy();
          this.hammerDeleteButton = null;
        }
      }
    }

    /**
     * Repaint a onChange tooltip on the top right of the item when the item is selected
     * @param {HTMLElement} anchor
     * @protected
     */

  }, {
    key: '_repaintOnItemUpdateTimeTooltip',
    value: function _repaintOnItemUpdateTimeTooltip(anchor) {
      if (!this.options.tooltipOnItemUpdateTime) return;

      var editable = (this.options.editable.updateTime || this.data.editable === true) && this.data.editable !== false;

      if (this.selected && editable && !this.dom.onItemUpdateTimeTooltip) {
        var onItemUpdateTimeTooltip = document.createElement('div');

        onItemUpdateTimeTooltip.className = 'timeline-onUpdateTime-tooltip';
        anchor.appendChild(onItemUpdateTimeTooltip);
        this.dom.onItemUpdateTimeTooltip = onItemUpdateTimeTooltip;
      } else if (!this.selected && this.dom.onItemUpdateTimeTooltip) {
        // remove button
        if (this.dom.onItemUpdateTimeTooltip.parentNode) {
          this.dom.onItemUpdateTimeTooltip.parentNode.removeChild(this.dom.onItemUpdateTimeTooltip);
        }
        this.dom.onItemUpdateTimeTooltip = null;
      }

      // position onChange tooltip
      if (this.dom.onItemUpdateTimeTooltip) {

        // only show when editing
        this.dom.onItemUpdateTimeTooltip.style.visibility = this.parent.itemSet.touchParams.itemIsDragging ? 'visible' : 'hidden';

        // position relative to item's content
        if (this.options.rtl) {
          this.dom.onItemUpdateTimeTooltip.style.right = this.dom.content.style.right;
        } else {
          this.dom.onItemUpdateTimeTooltip.style.left = this.dom.content.style.left;
        }

        // position above or below the item depending on the item's position in the window
        var tooltipOffset = 50; // TODO: should be tooltip height (depends on template)
        var scrollTop = this.parent.itemSet.body.domProps.scrollTop;

        // TODO: this.top for orientation:true is actually the items distance from the bottom... 
        // (should be this.bottom)
        var itemDistanceFromTop = void 0;
        if (this.options.orientation.item == 'top') {
          itemDistanceFromTop = this.top;
        } else {
          itemDistanceFromTop = this.parent.height - this.top - this.height;
        }
        var isCloseToTop = itemDistanceFromTop + this.parent.top - tooltipOffset < -scrollTop;

        if (isCloseToTop) {
          this.dom.onItemUpdateTimeTooltip.style.bottom = "";
          this.dom.onItemUpdateTimeTooltip.style.top = this.height + 2 + 'px';
        } else {
          this.dom.onItemUpdateTimeTooltip.style.top = "";
          this.dom.onItemUpdateTimeTooltip.style.bottom = this.height + 2 + 'px';
        }

        // handle tooltip content
        var content = void 0;
        var templateFunction = void 0;

        if (this.options.tooltipOnItemUpdateTime && this.options.tooltipOnItemUpdateTime.template) {
          templateFunction = this.options.tooltipOnItemUpdateTime.template.bind(this);
          content = templateFunction(this.data);
        } else {
          content = 'start: ' + (0, _moment2['default'])(this.data.start).format('MM/DD/YYYY hh:mm');
          if (this.data.end) {
            content += '<br> end: ' + (0, _moment2['default'])(this.data.end).format('MM/DD/YYYY hh:mm');
          }
        }
        this.dom.onItemUpdateTimeTooltip.innerHTML = content;
      }
    }

    /**
     * Set HTML contents for the item
     * @param {Element} element   HTML element to fill with the contents
     * @private
     */

  }, {
    key: '_updateContents',
    value: function _updateContents(element) {
      var content = void 0;
      var changed = void 0;
      var templateFunction = void 0;
      var itemVisibleFrameContent = void 0;
      var visibleFrameTemplateFunction = void 0;
      var itemData = this.parent.itemSet.itemsData.get(this.id); // get a clone of the data from the dataset

      var frameElement = this.dom.box || this.dom.point;
      var itemVisibleFrameContentElement = frameElement.getElementsByClassName('timeline-item-visible-frame')[0];

      if (this.options.visibleFrameTemplate) {
        visibleFrameTemplateFunction = this.options.visibleFrameTemplate.bind(this);
        itemVisibleFrameContent = visibleFrameTemplateFunction(itemData, itemVisibleFrameContentElement);
      } else {
        itemVisibleFrameContent = '';
      }

      if (itemVisibleFrameContentElement) {
        if (itemVisibleFrameContent instanceof Object && !(itemVisibleFrameContent instanceof Element)) {
          visibleFrameTemplateFunction(itemData, itemVisibleFrameContentElement);
        } else {
          changed = this._contentToString(this.itemVisibleFrameContent) !== this._contentToString(itemVisibleFrameContent);
          if (changed) {
            // only replace the content when changed
            if (itemVisibleFrameContent instanceof Element) {
              itemVisibleFrameContentElement.innerHTML = '';
              itemVisibleFrameContentElement.appendChild(itemVisibleFrameContent);
            } else if (itemVisibleFrameContent != undefined) {
              itemVisibleFrameContentElement.innerHTML = itemVisibleFrameContent;
            } else {
              if (!(this.data.type == 'background' && this.data.content === undefined)) {
                throw new Error('Property "content" missing in item ' + this.id);
              }
            }

            this.itemVisibleFrameContent = itemVisibleFrameContent;
          }
        }
      }

      if (this.options.template) {
        templateFunction = this.options.template.bind(this);
        content = templateFunction(itemData, element, this.data);
      } else {
        content = this.data.content;
      }

      if (content instanceof Object && !(content instanceof Element)) {
        templateFunction(itemData, element);
      } else {
        changed = this._contentToString(this.content) !== this._contentToString(content);
        if (changed) {
          // only replace the content when changed
          if (content instanceof Element) {
            element.innerHTML = '';
            element.appendChild(content);
          } else if (content != undefined) {
            element.innerHTML = content;
          } else {
            if (!(this.data.type == 'background' && this.data.content === undefined)) {
              throw new Error('Property "content" missing in item ' + this.id);
            }
          }
          this.content = content;
        }
      }
    }

    /**
     * Process dataAttributes timeline option and set as data- attributes on dom.content
     * @param {Element} element   HTML element to which the attributes will be attached
     * @private
     */

  }, {
    key: '_updateDataAttributes',
    value: function _updateDataAttributes(element) {
      if (this.options.dataAttributes && this.options.dataAttributes.length > 0) {
        var attributes = [];

        if (Array.isArray(this.options.dataAttributes)) {
          attributes = this.options.dataAttributes;
        } else if (this.options.dataAttributes == 'all') {
          attributes = (0, _keys2['default'])(this.data);
        } else {
          return;
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3['default'])(attributes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var name = _step.value;

            var value = this.data[name];

            if (value != null) {
              element.setAttribute('data-' + name, value);
            } else {
              element.removeAttribute('data-' + name);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }

    /**
     * Update custom styles of the element
     * @param {Element} element
     * @private
     */

  }, {
    key: '_updateStyle',
    value: function _updateStyle(element) {
      // remove old styles
      if (this.style) {
        util.removeCssText(element, this.style);
        this.style = null;
      }

      // append new styles
      if (this.data.style) {
        util.addCssText(element, this.data.style);
        this.style = this.data.style;
      }
    }

    /**
     * Stringify the items contents
     * @param {string | Element | undefined} content
     * @returns {string | undefined}
     * @private
     */

  }, {
    key: '_contentToString',
    value: function _contentToString(content) {
      if (typeof content === 'string') return content;
      if (content && 'outerHTML' in content) return content.outerHTML;
      return content;
    }

    /**
     * Update the editability of this item.
     */

  }, {
    key: '_updateEditStatus',
    value: function _updateEditStatus() {
      if (this.options) {
        if (typeof this.options.editable === 'boolean') {
          this.editable = {
            updateTime: this.options.editable,
            updateGroup: this.options.editable,
            remove: this.options.editable
          };
        } else if ((0, _typeof3['default'])(this.options.editable) === 'object') {
          this.editable = {};
          util.selectiveExtend(['updateTime', 'updateGroup', 'remove'], this.editable, this.options.editable);
        }
      }
      // Item data overrides, except if options.editable.overrideItems is set.
      if (!this.options || !this.options.editable || this.options.editable.overrideItems !== true) {
        if (this.data) {
          if (typeof this.data.editable === 'boolean') {
            this.editable = {
              updateTime: this.data.editable,
              updateGroup: this.data.editable,
              remove: this.data.editable
            };
          } else if ((0, _typeof3['default'])(this.data.editable) === 'object') {
            // TODO: in timeline.js 5.0, we should change this to not reset options from the timeline configuration.
            // Basically just remove the next line...
            this.editable = {};
            util.selectiveExtend(['updateTime', 'updateGroup', 'remove'], this.editable, this.data.editable);
          }
        }
      }
    }

    /**
     * Return the width of the item left from its start date
     * @return {number}
     */

  }, {
    key: 'getWidthLeft',
    value: function getWidthLeft() {
      return 0;
    }

    /**
     * Return the width of the item right from the max of its start and end date
     * @return {number}
     */

  }, {
    key: 'getWidthRight',
    value: function getWidthRight() {
      return 0;
    }

    /**
     * Return the title of the item
     * @return {string | undefined}
     */

  }, {
    key: 'getTitle',
    value: function getTitle() {
      return this.data.title;
    }
  }]);
  return Item;
}();

Item.prototype.stack = true;

exports['default'] = Item;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(57);
var enumBugKeys = __webpack_require__(41);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(22);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

var _Queue = __webpack_require__(68);

var Queue = _interopRequireWildcard(_Queue);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * DataSet
 * // TODO: add a DataSet constructor DataSet(data, options)
 *
 * Usage:
 *     var dataSet = new DataSet({
 *         fieldId: '_id',
 *         type: {
 *             // ...
 *         }
 *     });
 *
 *     dataSet.add(item);
 *     dataSet.add(data);
 *     dataSet.update(item);
 *     dataSet.update(data);
 *     dataSet.remove(id);
 *     dataSet.remove(ids);
 *     var data = dataSet.get();
 *     var data = dataSet.get(id);
 *     var data = dataSet.get(ids);
 *     var data = dataSet.get(ids, options, data);
 *     dataSet.clear();
 *
 * A data set can:
 * - add/remove/update data
 * - gives triggers upon changes in the data
 * - can  import/export data in various data formats
 *
 * @param {Array} [data]    Optional array with initial data
 * @param {Object} [options]   Available options:
 *                             {string} fieldId Field name of the id in the
 *                                              items, 'id' by default.
 *                             {Object.<string, string} type
 *                                              A map with field names as key,
 *                                              and the field type as value.
 *                             {Object} queue   Queue changes to the DataSet,
 *                                              flush them all at once.
 *                                              Queue options:
 *                                              - {number} delay  Delay in ms, null by default
 *                                              - {number} max    Maximum number of entries in the queue, Infinity by default
 * @constructor DataSet
 */
var DataSet = function () {
  function DataSet(data, options) {
    (0, _classCallCheck3['default'])(this, DataSet);

    // correctly read optional arguments
    if (data && !Array.isArray(data)) {
      options = data;
      data = null;
    }

    this._options = options || {};
    this._data = {}; // map with data indexed by id
    this.length = 0; // number of items in the DataSet
    this._fieldId = this._options.fieldId || 'id'; // name of the field containing id
    this._type = {}; // internal field types (NOTE: this can differ from this._options.type)

    // all variants of a Date are internally stored as Date, so we can convert
    // from everything to everything (also from ISODate to Number for example)
    if (this._options.type) {
      var fields = (0, _keys2['default'])(this._options.type);
      for (var i = 0, len = fields.length; i < len; i++) {
        var field = fields[i];
        var value = this._options.type[field];
        if (value == 'Date' || value == 'ISODate' || value == 'ASPDate') {
          this._type[field] = 'Date';
        } else {
          this._type[field] = value;
        }
      }
    }

    this._subscribers = {}; // event subscribers

    // add initial data when provided
    if (data) {
      this.add(data);
    }

    this.setOptions(options);
  }

  /**
   * @param {Object} options   Available options:
   *                             {Object} queue   Queue changes to the DataSet,
   *                                              flush them all at once.
   *                                              Queue options:
   *                                              - {number} delay  Delay in ms, null by default
   *                                              - {number} max    Maximum number of entries in the queue, Infinity by default
   */


  (0, _createClass3['default'])(DataSet, [{
    key: 'setOptions',
    value: function setOptions(options) {
      if (options && options.queue !== undefined) {
        if (options.queue === false) {
          // delete queue if loaded
          if (this._queue) {
            this._queue.destroy();
            delete this._queue;
          }
        } else {
          // create queue and update its options
          if (!this._queue) {
            this._queue = Queue.extend(this, {
              replace: ['add', 'update', 'remove']
            });
          }

          if ((0, _typeof3['default'])(options.queue) === 'object') {
            this._queue.setOptions(options.queue);
          }
        }
      }
    }

    /**
     * Subscribe to an event, add an event listener
     * @param {string} event        Event name. Available events: 'add', 'update',
     *                              'remove'
     * @param {function} callback   Callback method. Called with three parameters:
     *                                  {string} event
     *                                  {Object | null} params
     *                                  {string | number} senderId
     */

  }, {
    key: 'on',
    value: function on(event, callback) {
      var subscribers = this._subscribers[event];
      if (!subscribers) {
        subscribers = [];
        this._subscribers[event] = subscribers;
      }

      subscribers.push({
        callback: callback
      });
    }

    /**
     * Unsubscribe from an event, remove an event listener
     * @param {string} event
     * @param {function} callback
     */

  }, {
    key: 'off',
    value: function off(event, callback) {
      var subscribers = this._subscribers[event];
      if (subscribers) {
        this._subscribers[event] = subscribers.filter(function (listener) {
          return listener.callback != callback;
        });
      }
    }

    /**
     * Trigger an event
     * @param {string} event
     * @param {Object | null} params
     * @param {string} [senderId]       Optional id of the sender.
     * @private
     */

  }, {
    key: '_trigger',
    value: function _trigger(event, params, senderId) {
      if (event == '*') {
        throw new Error('Cannot trigger event *');
      }

      var subscribers = [];
      if (event in this._subscribers) {
        subscribers = subscribers.concat(this._subscribers[event]);
      }
      if ('*' in this._subscribers) {
        subscribers = subscribers.concat(this._subscribers['*']);
      }

      for (var i = 0, len = subscribers.length; i < len; i++) {
        var subscriber = subscribers[i];
        if (subscriber.callback) {
          subscriber.callback(event, params, senderId || null);
        }
      }
    }

    /**
     * Add data.
     * Adding an item will fail when there already is an item with the same id.
     * @param {Object | Array} data
     * @param {string} [senderId] Optional sender id
     * @return {Array.<string|number>} addedIds      Array with the ids of the added items
     */

  }, {
    key: 'add',
    value: function add(data, senderId) {
      var addedIds = [];
      var id = void 0;
      var me = this;

      if (Array.isArray(data)) {
        // Array
        for (var i = 0, len = data.length; i < len; i++) {
          id = me._addItem(data[i]);
          addedIds.push(id);
        }
      } else if (data && (typeof data === 'undefined' ? 'undefined' : (0, _typeof3['default'])(data)) === 'object') {
        // Single item
        id = me._addItem(data);
        addedIds.push(id);
      } else {
        throw new Error('Unknown dataType');
      }

      if (addedIds.length) {
        this._trigger('add', { items: addedIds }, senderId);
      }

      return addedIds;
    }

    /**
     * Update existing items. When an item does not exist, it will be created
     * @param {Object | Array} data
     * @param {string} [senderId] Optional sender id
     * @return {Array.<string|number>} updatedIds     The ids of the added or updated items
     * @throws {Error} Unknown Datatype
     */

  }, {
    key: 'update',
    value: function update(data, senderId) {
      var addedIds = [];
      var updatedIds = [];
      var oldData = [];
      var updatedData = [];
      var me = this;
      var fieldId = me._fieldId;

      var addOrUpdate = function addOrUpdate(item) {
        var id = item[fieldId];
        if (me._data[id]) {
          var oldItem = util.extend({}, me._data[id]);
          // update item
          id = me._updateItem(item);
          updatedIds.push(id);
          updatedData.push(item);
          oldData.push(oldItem);
        } else {
          // add new item
          id = me._addItem(item);
          addedIds.push(id);
        }
      };

      if (Array.isArray(data)) {
        // Array
        for (var i = 0, len = data.length; i < len; i++) {
          if (data[i] && (0, _typeof3['default'])(data[i]) === 'object') {
            addOrUpdate(data[i]);
          } else {
            console.warn('Ignoring input item, which is not an object at index ' + i);
          }
        }
      } else if (data && (typeof data === 'undefined' ? 'undefined' : (0, _typeof3['default'])(data)) === 'object') {
        // Single item
        addOrUpdate(data);
      } else {
        throw new Error('Unknown dataType');
      }

      if (addedIds.length) {
        this._trigger('add', { items: addedIds }, senderId);
      }
      if (updatedIds.length) {
        var props = { items: updatedIds, oldData: oldData, data: updatedData };
        // TODO: remove deprecated property 'data' some day
        //Object.defineProperty(props, 'data', {
        //  'get': (function() {
        //    console.warn('Property data is deprecated. Use DataSet.get(ids) to retrieve the new data, use the oldData property on this object to get the old data');
        //    return updatedData;
        //  }).bind(this)
        //});
        this._trigger('update', props, senderId);
      }

      return addedIds.concat(updatedIds);
    }

    /**
     * Get a data item or multiple items.
     *
     * Usage:
     *
     *     get()
     *     get(options: Object)
     *
     *     get(id: number | string)
     *     get(id: number | string, options: Object)
     *
     *     get(ids: number[] | string[])
     *     get(ids: number[] | string[], options: Object)
     *
     * Where:
     *
     * {number | string} id         The id of an item
     * {number[] | string{}} ids    An array with ids of items
     * {Object} options             An Object with options. Available options:
     * {string} [returnType]        Type of data to be returned.
     *                              Can be 'Array' (default) or 'Object'.
     * {Object.<string, string>} [type]
     * {string[]} [fields]          field names to be returned
     * {function} [filter]          filter items
     * {string | function} [order]  Order the items by a field name or custom sort function.
     * @param {Array} args
     * @returns {DataSet}
     * @throws Error
     */

  }, {
    key: 'get',
    value: function get(args) {
      // eslint-disable-line no-unused-vars
      var me = this;

      // parse the arguments
      var id = void 0;

      var ids = void 0;
      var options = void 0;
      var firstType = util.getType(arguments[0]);
      if (firstType == 'String' || firstType == 'Number') {
        // get(id [, options])
        id = arguments[0];
        options = arguments[1];
      } else if (firstType == 'Array') {
        // get(ids [, options])
        ids = arguments[0];
        options = arguments[1];
      } else {
        // get([, options])
        options = arguments[0];
      }

      // determine the return type
      var returnType = void 0;
      if (options && options.returnType) {
        var allowedValues = ['Array', 'Object'];
        returnType = !allowedValues.includes(options.returnType) ? 'Array' : options.returnType;
      } else {
        returnType = 'Array';
      }

      // build options
      var type = options && options.type || this._options.type;
      var filter = options && options.filter;
      var items = [];
      var item = void 0;
      var itemIds = void 0;
      var itemId = void 0;
      var i = void 0;
      var len = void 0;

      // convert items
      if (id != undefined) {
        // return a single item
        item = me._getItem(id, type);
        if (item && filter && !filter(item)) {
          item = null;
        }
      } else if (ids != undefined) {
        // return a subset of items
        for (i = 0, len = ids.length; i < len; i++) {
          item = me._getItem(ids[i], type);
          if (!filter || filter(item)) {
            items.push(item);
          }
        }
      } else {
        // return all items
        itemIds = (0, _keys2['default'])(this._data);
        for (i = 0, len = itemIds.length; i < len; i++) {
          itemId = itemIds[i];
          item = me._getItem(itemId, type);
          if (!filter || filter(item)) {
            items.push(item);
          }
        }
      }

      // order the results
      if (options && options.order && id == undefined) {
        this._sort(items, options.order);
      }

      // filter fields of the items
      if (options && options.fields) {
        var fields = options.fields;
        if (id != undefined) {
          item = this._filterFields(item, fields);
        } else {
          for (i = 0, len = items.length; i < len; i++) {
            items[i] = this._filterFields(items[i], fields);
          }
        }
      }

      // return the results
      if (returnType == 'Object') {
        var result = {};
        var resultant = void 0;
        for (i = 0, len = items.length; i < len; i++) {
          resultant = items[i];
          result[resultant.id] = resultant;
        }
        return result;
      } else {
        if (id != undefined) {
          // a single item
          return item;
        } else {
          // just return our array
          return items;
        }
      }
    }

    /**
     * Get ids of all items or from a filtered set of items.
     * @param {Object} [options]    An Object with options. Available options:
     *                              {function} [filter] filter items
     *                              {string | function} [order] Order the items by
     *                                  a field name or custom sort function.
     * @return {Array.<string|number>} ids
     */

  }, {
    key: 'getIds',
    value: function getIds(options) {
      var data = this._data;
      var filter = options && options.filter;
      var order = options && options.order;
      var type = options && options.type || this._options.type;
      var itemIds = (0, _keys2['default'])(data);
      var i = void 0;
      var len = void 0;
      var id = void 0;
      var item = void 0;
      var items = void 0;
      var ids = [];

      if (filter) {
        // get filtered items
        if (order) {
          // create ordered list
          items = [];
          for (i = 0, len = itemIds.length; i < len; i++) {
            id = itemIds[i];
            item = this._getItem(id, type);
            if (filter(item)) {
              items.push(item);
            }
          }

          this._sort(items, order);

          for (i = 0, len = items.length; i < len; i++) {
            ids.push(items[i][this._fieldId]);
          }
        } else {
          // create unordered list
          for (i = 0, len = itemIds.length; i < len; i++) {
            id = itemIds[i];
            item = this._getItem(id, type);
            if (filter(item)) {
              ids.push(item[this._fieldId]);
            }
          }
        }
      } else {
        // get all items
        if (order) {
          // create an ordered list
          items = [];
          for (i = 0, len = itemIds.length; i < len; i++) {
            id = itemIds[i];
            items.push(data[id]);
          }

          this._sort(items, order);

          for (i = 0, len = items.length; i < len; i++) {
            ids.push(items[i][this._fieldId]);
          }
        } else {
          // create unordered list
          for (i = 0, len = itemIds.length; i < len; i++) {
            id = itemIds[i];
            item = data[id];
            ids.push(item[this._fieldId]);
          }
        }
      }

      return ids;
    }

    /**
     * Returns the DataSet itself. Is overwritten for example by the DataView,
     * which returns the DataSet it is connected to instead.
     * @returns {DataSet}
     */

  }, {
    key: 'getDataSet',
    value: function getDataSet() {
      return this;
    }

    /**
     * Execute a callback function for every item in the dataset.
     * @param {function} callback
     * @param {Object} [options]    Available options:
     *                              {Object.<string, string>} [type]
     *                              {string[]} [fields] filter fields
     *                              {function} [filter] filter items
     *                              {string | function} [order] Order the items by
     *                                  a field name or custom sort function.
     */

  }, {
    key: 'forEach',
    value: function forEach(callback, options) {
      var filter = options && options.filter;
      var type = options && options.type || this._options.type;
      var data = this._data;
      var itemIds = (0, _keys2['default'])(data);
      var i = void 0;
      var len = void 0;
      var item = void 0;
      var id = void 0;

      if (options && options.order) {
        // execute forEach on ordered list
        var items = this.get(options);

        for (i = 0, len = items.length; i < len; i++) {
          item = items[i];
          id = item[this._fieldId];
          callback(item, id);
        }
      } else {
        // unordered
        for (i = 0, len = itemIds.length; i < len; i++) {
          id = itemIds[i];
          item = this._getItem(id, type);
          if (!filter || filter(item)) {
            callback(item, id);
          }
        }
      }
    }

    /**
     * Map every item in the dataset.
     * @param {function} callback
     * @param {Object} [options]    Available options:
     *                              {Object.<string, string>} [type]
     *                              {string[]} [fields] filter fields
     *                              {function} [filter] filter items
     *                              {string | function} [order] Order the items by
     *                                  a field name or custom sort function.
     * @return {Object[]} mappedItems
     */

  }, {
    key: 'map',
    value: function map(callback, options) {
      var filter = options && options.filter;
      var type = options && options.type || this._options.type;
      var mappedItems = [];
      var data = this._data;
      var itemIds = (0, _keys2['default'])(data);
      var i = void 0;
      var len = void 0;
      var id = void 0;
      var item = void 0;

      // convert and filter items
      for (i = 0, len = itemIds.length; i < len; i++) {
        id = itemIds[i];
        item = this._getItem(id, type);
        if (!filter || filter(item)) {
          mappedItems.push(callback(item, id));
        }
      }

      // order items
      if (options && options.order) {
        this._sort(mappedItems, options.order);
      }

      return mappedItems;
    }

    /**
     * Filter the fields of an item
     * @param {Object | null} item
     * @param {string[]} fields     Field names
     * @return {Object | null} filteredItem or null if no item is provided
     * @private
     */

  }, {
    key: '_filterFields',
    value: function _filterFields(item, fields) {
      if (!item) {
        // item is null
        return item;
      }

      var filteredItem = {};
      var itemFields = (0, _keys2['default'])(item);
      var len = itemFields.length;
      var i = void 0;
      var field = void 0;

      if (Array.isArray(fields)) {
        for (i = 0; i < len; i++) {
          field = itemFields[i];
          if (fields.includes(field)) {
            filteredItem[field] = item[field];
          }
        }
      } else {
        for (i = 0; i < len; i++) {
          field = itemFields[i];
          if (fields.hasOwnProperty(field)) {
            filteredItem[fields[field]] = item[field];
          }
        }
      }

      return filteredItem;
    }

    /**
     * Sort the provided array with items
     * @param {Object[]} items
     * @param {string | function} order      A field name or custom sort function.
     * @private
     */

  }, {
    key: '_sort',
    value: function _sort(items, order) {
      if (util.isString(order)) {
        // order by provided field name
        var name = order; // field name
        items.sort(function (a, b) {
          var av = a[name];
          var bv = b[name];
          return av > bv ? 1 : av < bv ? -1 : 0;
        });
      } else if (typeof order === 'function') {
        // order by sort function
        items.sort(order);
      }
      // TODO: extend order by an Object {field:string, direction:string}
      //       where direction can be 'asc' or 'desc'
      else {
          throw new TypeError('Order must be a function or a string');
        }
    }

    /**
     * Remove an object by pointer or by id
     * @param {string | number | Object | Array.<string|number>} id Object or id, or an array with
     *                                              objects or ids to be removed
     * @param {string} [senderId] Optional sender id
     * @return {Array.<string|number>} removedIds
     */

  }, {
    key: 'remove',
    value: function remove(id, senderId) {
      var removedIds = [];
      var removedItems = [];
      var ids = [];
      var i = void 0;
      var len = void 0;
      var itemId = void 0;
      var item = void 0;

      // force everything to be an array for simplicity
      ids = Array.isArray(id) ? id : [id];

      for (i = 0, len = ids.length; i < len; i++) {
        item = this._remove(ids[i]);
        if (item) {
          itemId = item[this._fieldId];
          if (itemId != undefined) {
            removedIds.push(itemId);
            removedItems.push(item);
          }
        }
      }

      if (removedIds.length) {
        this._trigger('remove', { items: removedIds, oldData: removedItems }, senderId);
      }

      return removedIds;
    }

    /**
     * Remove an item by its id
     * @param {number | string | Object} id   id or item
     * @returns {number | string | null} id
     * @private
     */

  }, {
    key: '_remove',
    value: function _remove(id) {
      var item = void 0;
      var ident = void 0;

      // confirm the id to use based on the args type
      if (util.isNumber(id) || util.isString(id)) {
        ident = id;
      } else if (id && (typeof id === 'undefined' ? 'undefined' : (0, _typeof3['default'])(id)) === 'object') {
        ident = id[this._fieldId]; // look for the identifier field using _fieldId
      }

      // do the remove if the item is found
      if (ident !== undefined && this._data[ident]) {
        item = this._data[ident];
        delete this._data[ident];
        this.length--;
        return item;
      }
      return null;
    }

    /**
     * Clear the data
     * @param {string} [senderId] Optional sender id
     * @return {Array.<string|number>} removedIds    The ids of all removed items
     */

  }, {
    key: 'clear',
    value: function clear(senderId) {
      var i = void 0;
      var len = void 0;
      var ids = (0, _keys2['default'])(this._data);
      var items = [];

      for (i = 0, len = ids.length; i < len; i++) {
        items.push(this._data[ids[i]]);
      }

      this._data = {};
      this.length = 0;

      this._trigger('remove', { items: ids, oldData: items }, senderId);

      return ids;
    }

    /**
     * Find the item with maximum value of a specified field
     * @param {string} field
     * @return {Object | null} item  Item containing max value, or null if no items
     */

  }, {
    key: 'max',
    value: function max(field) {
      var data = this._data;
      var itemIds = (0, _keys2['default'])(data);
      var max = null;
      var maxField = null;
      var i = void 0;
      var len = void 0;

      for (i = 0, len = itemIds.length; i < len; i++) {
        var id = itemIds[i];
        var item = data[id];
        var itemField = item[field];
        if (itemField != null && (!max || itemField > maxField)) {
          max = item;
          maxField = itemField;
        }
      }

      return max;
    }

    /**
     * Find the item with minimum value of a specified field
     * @param {string} field
     * @return {Object | null} item  Item containing max value, or null if no items
     */

  }, {
    key: 'min',
    value: function min(field) {
      var data = this._data;
      var itemIds = (0, _keys2['default'])(data);
      var min = null;
      var minField = null;
      var i = void 0;
      var len = void 0;

      for (i = 0, len = itemIds.length; i < len; i++) {
        var id = itemIds[i];
        var item = data[id];
        var itemField = item[field];
        if (itemField != null && (!min || itemField < minField)) {
          min = item;
          minField = itemField;
        }
      }

      return min;
    }

    /**
     * Find all distinct values of a specified field
     * @param {string} field
     * @return {Array} values  Array containing all distinct values. If data items
     *                         do not contain the specified field are ignored.
     *                         The returned array is unordered.
     */

  }, {
    key: 'distinct',
    value: function distinct(field) {
      var data = this._data;
      var itemIds = (0, _keys2['default'])(data);
      var values = [];
      var fieldType = this._options.type && this._options.type[field] || null;
      var count = 0;
      var i = void 0;
      var j = void 0;
      var len = void 0;

      for (i = 0, len = itemIds.length; i < len; i++) {
        var id = itemIds[i];
        var item = data[id];
        var value = item[field];
        var exists = false;
        for (j = 0; j < count; j++) {
          if (values[j] == value) {
            exists = true;
            break;
          }
        }
        if (!exists && value !== undefined) {
          values[count] = value;
          count++;
        }
      }

      if (fieldType) {
        for (i = 0, len = values.length; i < len; i++) {
          values[i] = util.convert(values[i], fieldType);
        }
      }

      return values;
    }

    /**
     * Add a single item. Will fail when an item with the same id already exists.
     * @param {Object} item
     * @return {string} id
     * @private
     */

  }, {
    key: '_addItem',
    value: function _addItem(item) {
      var id = item[this._fieldId];

      if (id != undefined) {
        // check whether this id is already taken
        if (this._data[id]) {
          // item already exists
          throw new Error('Cannot add item: item with id ' + id + ' already exists');
        }
      } else {
        // generate an id
        id = util.randomUUID();
        item[this._fieldId] = id;
      }

      var d = {};
      var fields = (0, _keys2['default'])(item);
      var i = void 0;
      var len = void 0;
      for (i = 0, len = fields.length; i < len; i++) {
        var field = fields[i];
        var fieldType = this._type[field]; // type may be undefined
        d[field] = util.convert(item[field], fieldType);
      }
      this._data[id] = d;
      this.length++;

      return id;
    }

    /**
     * Get an item. Fields can be converted to a specific type
     * @param {string} id
     * @param {Object.<string, string>} [types]  field types to convert
     * @return {Object | null} item
     * @private
     */

  }, {
    key: '_getItem',
    value: function _getItem(id, types) {
      var field = void 0;
      var value = void 0;
      var i = void 0;
      var len = void 0;

      // get the item from the dataset
      var raw = this._data[id];
      if (!raw) {
        return null;
      }

      // convert the items field types
      var converted = {};

      var fields = (0, _keys2['default'])(raw);

      if (types) {
        for (i = 0, len = fields.length; i < len; i++) {
          field = fields[i];
          value = raw[field];
          converted[field] = util.convert(value, types[field]);
        }
      } else {
        // no field types specified, no converting needed
        for (i = 0, len = fields.length; i < len; i++) {
          field = fields[i];
          value = raw[field];
          converted[field] = value;
        }
      }

      if (!converted[this._fieldId]) {
        converted[this._fieldId] = raw.id;
      }

      return converted;
    }

    /**
     * Update a single item: merge with existing item.
     * Will fail when the item has no id, or when there does not exist an item
     * with the same id.
     * @param {Object} item
     * @return {string} id
     * @private
     */

  }, {
    key: '_updateItem',
    value: function _updateItem(item) {
      var id = item[this._fieldId];
      if (id == undefined) {
        throw new Error('Cannot update item: item has no id (item: ' + (0, _stringify2['default'])(item) + ')');
      }
      var d = this._data[id];
      if (!d) {
        // item doesn't exist
        throw new Error('Cannot update item: no item with id ' + id + ' found');
      }

      // merge with current item
      var fields = (0, _keys2['default'])(item);
      for (var i = 0, len = fields.length; i < len; i++) {
        var field = fields[i];
        var fieldType = this._type[field]; // type may be undefined
        d[field] = util.convert(item[field], fieldType);
      }

      return id;
    }
  }]);
  return DataSet;
}();

exports['default'] = DataSet;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(20);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(19);
var dPs = __webpack_require__(86);
var enumBugKeys = __webpack_require__(41);
var IE_PROTO = __webpack_require__(39)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(56)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(91).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(40)('keys');
var uid = __webpack_require__(30);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var global = __webpack_require__(9);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(29) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(37);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f;
var has = __webpack_require__(14);
var TAG = __webpack_require__(11)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(11);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(3);
var LIBRARY = __webpack_require__(29);
var wksExt = __webpack_require__(44);
var defineProperty = __webpack_require__(12).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

var _DataSet = __webpack_require__(32);

var _DataSet2 = _interopRequireDefault(_DataSet);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * DataView
 *
 * a dataview offers a filtered view on a dataset or an other dataview.
 *
 * @param {DataSet | DataView} data
 * @param {Object} [options]   Available options: see method get
 *
 * @constructor DataView
 */
var DataView = function () {
  function DataView(data, options) {
    (0, _classCallCheck3['default'])(this, DataView);

    this._data = null;
    this._ids = {}; // ids of the items currently in memory (just contains a boolean true)
    this.length = 0; // number of items in the DataView
    this._options = options || {};
    this._fieldId = 'id'; // name of the field containing id
    this._subscribers = {}; // event subscribers

    var me = this;
    this.listener = function () {
      me._onEvent.apply(me, arguments);
    };

    this.setData(data);
  }

  // TODO: implement a function .config() to dynamically update things like configured filter
  // and trigger changes accordingly

  /**
   * Set a data source for the view
   * @param {DataSet | DataView} data
   */


  (0, _createClass3['default'])(DataView, [{
    key: 'setData',
    value: function setData(data) {
      var ids = void 0;
      var id = void 0;
      var i = void 0;
      var len = void 0;
      var items = void 0;

      if (this._data) {
        // unsubscribe from current dataset
        if (this._data.off) {
          this._data.off('*', this.listener);
        }

        // trigger a remove of all items in memory
        ids = this._data.getIds({ filter: this._options && this._options.filter });
        items = [];

        for (i = 0, len = ids.length; i < len; i++) {
          items.push(this._data._data[ids[i]]);
        }

        this._ids = {};
        this.length = 0;
        this._trigger('remove', { items: ids, oldData: items });
      }

      this._data = data;

      if (this._data) {
        // update fieldId
        this._fieldId = this._options.fieldId || this._data && this._data.options && this._data.options.fieldId || 'id';

        // trigger an add of all added items
        ids = this._data.getIds({ filter: this._options && this._options.filter });
        for (i = 0, len = ids.length; i < len; i++) {
          id = ids[i];
          this._ids[id] = true;
        }
        this.length = ids.length;
        this._trigger('add', { items: ids });

        // subscribe to new dataset
        if (this._data.on) {
          this._data.on('*', this.listener);
        }
      }
    }

    /**
     * Refresh the DataView. Useful when the DataView has a filter function
     * containing a variable parameter.
     */

  }, {
    key: 'refresh',
    value: function refresh() {
      var id = void 0;
      var i = void 0;
      var len = void 0;
      var ids = this._data.getIds({ filter: this._options && this._options.filter });
      var oldIds = (0, _keys2['default'])(this._ids);
      var newIds = {};
      var addedIds = [];
      var removedIds = [];
      var removedItems = [];

      // check for additions
      for (i = 0, len = ids.length; i < len; i++) {
        id = ids[i];
        newIds[id] = true;
        if (!this._ids[id]) {
          addedIds.push(id);
          this._ids[id] = true;
        }
      }

      // check for removals
      for (i = 0, len = oldIds.length; i < len; i++) {
        id = oldIds[i];
        if (!newIds[id]) {
          removedIds.push(id);
          removedItems.push(this._data._data[id]);
          delete this._ids[id];
        }
      }

      this.length += addedIds.length - removedIds.length;

      // trigger events
      if (addedIds.length) {
        this._trigger('add', { items: addedIds });
      }
      if (removedIds.length) {
        this._trigger('remove', { items: removedIds, oldData: removedItems });
      }
    }

    /**
     * Get data from the data view
     *
     * Usage:
     *
     *     get()
     *     get(options: Object)
     *     get(options: Object, data: Array | DataTable)
     *
     *     get(id: Number)
     *     get(id: Number, options: Object)
     *     get(id: Number, options: Object, data: Array | DataTable)
     *
     *     get(ids: Number[])
     *     get(ids: Number[], options: Object)
     *     get(ids: Number[], options: Object, data: Array | DataTable)
     *
     * Where:
     *
     * {number | string} id         The id of an item
     * {number[] | string{}} ids    An array with ids of items
     * {Object} options             An Object with options. Available options:
     *                              {string} [type] Type of data to be returned. Can
     *                                              be 'DataTable' or 'Array' (default)
     *                              {Object.<string, string>} [convert]
     *                              {string[]} [fields] field names to be returned
     *                              {function} [filter] filter items
     *                              {string | function} [order] Order the items by
     *                                  a field name or custom sort function.
     * {Array | DataTable} [data]   If provided, items will be appended to this
     *                              array or table. Required in case of Google
     *                              DataTable.
     * @param {Array} args
     * @return {DataSet|DataView}
     */

  }, {
    key: 'get',
    value: function get(args) {
      var _data;

      // eslint-disable-line no-unused-vars
      var me = this;

      // parse the arguments
      var ids = void 0;

      var options = void 0;
      var data = void 0;
      var firstType = util.getType(arguments[0]);
      if (firstType == 'String' || firstType == 'Number' || firstType == 'Array') {
        // get(id(s) [, options] [, data])
        ids = arguments[0]; // can be a single id or an array with ids
        options = arguments[1];
        data = arguments[2];
      } else {
        // get([, options] [, data])
        options = arguments[0];
        data = arguments[1];
      }

      // extend the options with the default options and provided options
      var viewOptions = util.extend({}, this._options, options);

      // create a combined filter method when needed
      if (this._options.filter && options && options.filter) {
        viewOptions.filter = function (item) {
          return me._options.filter(item) && options.filter(item);
        };
      }

      // build up the call to the linked data set
      var getArguments = [];
      if (ids != undefined) {
        getArguments.push(ids);
      }
      getArguments.push(viewOptions);
      getArguments.push(data);

      return this._data && (_data = this._data).get.apply(_data, getArguments);
    }

    /**
     * Get ids of all items or from a filtered set of items.
     * @param {Object} [options]    An Object with options. Available options:
     *                              {function} [filter] filter items
     *                              {string | function} [order] Order the items by
     *                                  a field name or custom sort function.
     * @return {Array.<string|number>} ids
     */

  }, {
    key: 'getIds',
    value: function getIds(options) {
      var ids = void 0;

      if (this._data) {
        var defaultFilter = this._options.filter;
        var filter = void 0;

        if (options && options.filter) {
          if (defaultFilter) {
            filter = function filter(item) {
              return defaultFilter(item) && options.filter(item);
            };
          } else {
            filter = options.filter;
          }
        } else {
          filter = defaultFilter;
        }

        ids = this._data.getIds({
          filter: filter,
          order: options && options.order
        });
      } else {
        ids = [];
      }

      return ids;
    }

    /**
     * Map every item in the dataset.
     * @param {function} callback
     * @param {Object} [options]    Available options:
     *                              {Object.<string, string>} [type]
     *                              {string[]} [fields] filter fields
     *                              {function} [filter] filter items
     *                              {string | function} [order] Order the items by
     *                                  a field name or custom sort function.
     * @return {Object[]} mappedItems
     */

  }, {
    key: 'map',
    value: function map(callback, options) {
      var mappedItems = [];
      if (this._data) {
        var defaultFilter = this._options.filter;
        var filter = void 0;

        if (options && options.filter) {
          if (defaultFilter) {
            filter = function filter(item) {
              return defaultFilter(item) && options.filter(item);
            };
          } else {
            filter = options.filter;
          }
        } else {
          filter = defaultFilter;
        }

        mappedItems = this._data.map(callback, {
          filter: filter,
          order: options && options.order
        });
      } else {
        mappedItems = [];
      }

      return mappedItems;
    }

    /**
     * Get the DataSet to which this DataView is connected. In case there is a chain
     * of multiple DataViews, the root DataSet of this chain is returned.
     * @return {DataSet} dataSet
     */

  }, {
    key: 'getDataSet',
    value: function getDataSet() {
      var dataSet = this;
      while (dataSet instanceof DataView) {
        dataSet = dataSet._data;
      }
      return dataSet || null;
    }

    /**
     * Event listener. Will propagate all events from the connected data set to
     * the subscribers of the DataView, but will filter the items and only trigger
     * when there are changes in the filtered data set.
     * @param {string} event
     * @param {Object | null} params
     * @param {string} senderId
     * @private
     */

  }, {
    key: '_onEvent',
    value: function _onEvent(event, params, senderId) {
      var i = void 0;
      var len = void 0;
      var id = void 0;
      var item = void 0;
      var ids = params && params.items;
      var addedIds = [];
      var updatedIds = [];
      var removedIds = [];
      var oldItems = [];
      var updatedItems = [];
      var removedItems = [];

      if (ids && this._data) {
        switch (event) {
          case 'add':
            // filter the ids of the added items
            for (i = 0, len = ids.length; i < len; i++) {
              id = ids[i];
              item = this.get(id);
              if (item) {
                this._ids[id] = true;
                addedIds.push(id);
              }
            }

            break;

          case 'update':
            // determine the event from the views viewpoint: an updated
            // item can be added, updated, or removed from this view.
            for (i = 0, len = ids.length; i < len; i++) {
              id = ids[i];
              item = this.get(id);

              if (item) {
                if (this._ids[id]) {
                  updatedIds.push(id);
                  updatedItems.push(params.data[i]);
                  oldItems.push(params.oldData[i]);
                } else {
                  this._ids[id] = true;
                  addedIds.push(id);
                }
              } else {
                if (this._ids[id]) {
                  delete this._ids[id];
                  removedIds.push(id);
                  removedItems.push(params.oldData[i]);
                } else {
                  // nothing interesting for me :-(
                }
              }
            }

            break;

          case 'remove':
            // filter the ids of the removed items
            for (i = 0, len = ids.length; i < len; i++) {
              id = ids[i];
              if (this._ids[id]) {
                delete this._ids[id];
                removedIds.push(id);
                removedItems.push(params.oldData[i]);
              }
            }

            break;
        }

        this.length += addedIds.length - removedIds.length;

        if (addedIds.length) {
          this._trigger('add', { items: addedIds }, senderId);
        }
        if (updatedIds.length) {
          this._trigger('update', { items: updatedIds, oldData: oldItems, data: updatedItems }, senderId);
        }
        if (removedIds.length) {
          this._trigger('remove', { items: removedIds, oldData: removedItems }, senderId);
        }
      }
    }
  }]);
  return DataView;
}();

// copy subscription functionality from DataSet


DataView.prototype.on = _DataSet2['default'].prototype.on;
DataView.prototype.off = _DataSet2['default'].prototype.off;
DataView.prototype._trigger = _DataSet2['default'].prototype._trigger;

// TODO: make these functions deprecated (replaced with `on` and `off` since version 0.5)
DataView.prototype.subscribe = DataView.prototype.on;
DataView.prototype.unsubscribe = DataView.prototype.off;

exports['default'] = DataView;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

var _Component2 = __webpack_require__(15);

var _Component3 = _interopRequireDefault(_Component2);

var _TimeStep = __webpack_require__(49);

var _TimeStep2 = _interopRequireDefault(_TimeStep);

var _DateUtil = __webpack_require__(25);

var DateUtil = _interopRequireWildcard(_DateUtil);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/** A horizontal time axis */
var TimeAxis = function (_Component) {
  (0, _inherits3['default'])(TimeAxis, _Component);

  /**
  * @param {{dom: Object, domProps: Object, emitter: Emitter, range: Range}} body
  * @param {Object} [options]        See TimeAxis.setOptions for the available
  *                                  options.
  * @constructor TimeAxis
  * @extends Component
  */
  function TimeAxis(body, options) {
    (0, _classCallCheck3['default'])(this, TimeAxis);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (TimeAxis.__proto__ || (0, _getPrototypeOf2['default'])(TimeAxis)).call(this));

    _this.dom = {
      foreground: null,
      lines: [],
      majorTexts: [],
      minorTexts: [],
      redundant: {
        lines: [],
        majorTexts: [],
        minorTexts: []
      }
    };
    _this.props = {
      range: {
        start: 0,
        end: 0,
        minimumStep: 0
      },
      lineTop: 0
    };

    _this.defaultOptions = {
      orientation: {
        axis: 'bottom'
      }, // axis orientation: 'top' or 'bottom'
      showMinorLabels: true,
      showMajorLabels: true,
      maxMinorChars: 7,
      format: _TimeStep2['default'].FORMAT,
      moment: _moment2['default'],
      timeAxis: null
    };
    _this.options = util.extend({}, _this.defaultOptions);

    _this.body = body;

    // create the HTML DOM
    _this._create();

    _this.setOptions(options);
    return _this;
  }

  /**
   * Set options for the TimeAxis.
   * Parameters will be merged in current options.
   * @param {Object} options  Available options:
   *                          {string} [orientation.axis]
   *                          {boolean} [showMinorLabels]
   *                          {boolean} [showMajorLabels]
   */


  (0, _createClass3['default'])(TimeAxis, [{
    key: 'setOptions',
    value: function setOptions(options) {
      if (options) {
        // copy all options that we know
        util.selectiveExtend(['showMinorLabels', 'showMajorLabels', 'maxMinorChars', 'hiddenDates', 'timeAxis', 'moment', 'rtl'], this.options, options);

        // deep copy the format options
        util.selectiveDeepExtend(['format'], this.options, options);

        if ('orientation' in options) {
          if (typeof options.orientation === 'string') {
            this.options.orientation.axis = options.orientation;
          } else if ((0, _typeof3['default'])(options.orientation) === 'object' && 'axis' in options.orientation) {
            this.options.orientation.axis = options.orientation.axis;
          }
        }

        // apply locale to moment.js
        // TODO: not so nice, this is applied globally to moment.js
        if ('locale' in options) {
          if (typeof _moment2['default'].locale === 'function') {
            // moment.js 2.8.1+
            _moment2['default'].locale(options.locale);
          } else {
            _moment2['default'].lang(options.locale);
          }
        }
      }
    }

    /**
     * Create the HTML DOM for the TimeAxis
     */

  }, {
    key: '_create',
    value: function _create() {
      this.dom.foreground = document.createElement('div');
      this.dom.background = document.createElement('div');

      this.dom.foreground.className = 'timeline-time-axis timeline-foreground';
      this.dom.background.className = 'timeline-time-axis timeline-background';
    }

    /**
     * Destroy the TimeAxis
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      // remove from DOM
      if (this.dom.foreground.parentNode) {
        this.dom.foreground.parentNode.removeChild(this.dom.foreground);
      }
      if (this.dom.background.parentNode) {
        this.dom.background.parentNode.removeChild(this.dom.background);
      }

      this.body = null;
    }

    /**
     * Repaint the component
     * @return {boolean} Returns true if the component is resized
     */

  }, {
    key: 'redraw',
    value: function redraw() {
      var props = this.props;
      var foreground = this.dom.foreground;
      var background = this.dom.background;

      // determine the correct parent DOM element (depending on option orientation)
      var parent = this.options.orientation.axis == 'top' ? this.body.dom.top : this.body.dom.bottom;
      var parentChanged = foreground.parentNode !== parent;

      // calculate character width and height
      this._calculateCharSize();

      // TODO: recalculate sizes only needed when parent is resized or options is changed
      var showMinorLabels = this.options.showMinorLabels && this.options.orientation.axis !== 'none';
      var showMajorLabels = this.options.showMajorLabels && this.options.orientation.axis !== 'none';

      // determine the width and height of the elemens for the axis
      props.minorLabelHeight = showMinorLabels ? props.minorCharHeight : 0;
      props.majorLabelHeight = showMajorLabels ? props.majorCharHeight : 0;
      props.height = props.minorLabelHeight + props.majorLabelHeight;
      props.width = foreground.offsetWidth;

      props.minorLineHeight = this.body.domProps.root.height - props.majorLabelHeight - (this.options.orientation.axis == 'top' ? this.body.domProps.bottom.height : this.body.domProps.top.height);
      props.minorLineWidth = 1; // TODO: really calculate width
      props.majorLineHeight = props.minorLineHeight + props.majorLabelHeight;
      props.majorLineWidth = 1; // TODO: really calculate width

      //  take foreground and background offline while updating (is almost twice as fast)
      var foregroundNextSibling = foreground.nextSibling;
      var backgroundNextSibling = background.nextSibling;
      foreground.parentNode && foreground.parentNode.removeChild(foreground);
      background.parentNode && background.parentNode.removeChild(background);

      foreground.style.height = this.props.height + 'px';

      this._repaintLabels();

      // put DOM online again (at the same place)
      if (foregroundNextSibling) {
        parent.insertBefore(foreground, foregroundNextSibling);
      } else {
        parent.appendChild(foreground);
      }
      if (backgroundNextSibling) {
        this.body.dom.backgroundVertical.insertBefore(background, backgroundNextSibling);
      } else {
        this.body.dom.backgroundVertical.appendChild(background);
      }
      return this._isResized() || parentChanged;
    }

    /**
     * Repaint major and minor text labels and vertical grid lines
     * @private
     */

  }, {
    key: '_repaintLabels',
    value: function _repaintLabels() {
      var orientation = this.options.orientation.axis;

      // calculate range and step (step such that we have space for 7 characters per label)
      var start = util.convert(this.body.range.start, 'Number');
      var end = util.convert(this.body.range.end, 'Number');
      var timeLabelsize = this.body.util.toTime((this.props.minorCharWidth || 10) * this.options.maxMinorChars).valueOf();
      var minimumStep = timeLabelsize - DateUtil.getHiddenDurationBefore(this.options.moment, this.body.hiddenDates, this.body.range, timeLabelsize);
      minimumStep -= this.body.util.toTime(0).valueOf();

      var step = new _TimeStep2['default'](new Date(start), new Date(end), minimumStep, this.body.hiddenDates, this.options);
      step.setMoment(this.options.moment);
      if (this.options.format) {
        step.setFormat(this.options.format);
      }
      if (this.options.timeAxis) {
        step.setScale(this.options.timeAxis);
      }
      this.step = step;

      // Move all DOM elements to a "redundant" list, where they
      // can be picked for re-use, and clear the lists with lines and texts.
      // At the end of the function _repaintLabels, left over elements will be cleaned up
      var dom = this.dom;
      dom.redundant.lines = dom.lines;
      dom.redundant.majorTexts = dom.majorTexts;
      dom.redundant.minorTexts = dom.minorTexts;
      dom.lines = [];
      dom.majorTexts = [];
      dom.minorTexts = [];

      var current = void 0;
      var next = void 0;
      var x = void 0;
      var xNext = void 0;
      var isMajor = void 0;
      var showMinorGrid = void 0;
      var width = 0;
      var prevWidth = void 0;
      var line = void 0;
      var xFirstMajorLabel = undefined;
      var count = 0;
      var MAX = 1000;
      var className = void 0;

      step.start();
      next = step.getCurrent();
      xNext = this.body.util.toScreen(next);
      while (step.hasNext() && count < MAX) {
        count++;

        isMajor = step.isMajor();
        className = step.getClassName();

        current = next;
        x = xNext;

        step.next();
        next = step.getCurrent();
        xNext = this.body.util.toScreen(next);

        prevWidth = width;
        width = xNext - x;
        switch (step.scale) {
          case 'week':
            showMinorGrid = true;break;
          default:
            showMinorGrid = width >= prevWidth * 0.4;break; // prevent displaying of the 31th of the month on a scale of 5 days
        }

        if (this.options.showMinorLabels && showMinorGrid) {
          var label = this._repaintMinorText(x, step.getLabelMinor(current), orientation, className);
          label.style.width = width + 'px'; // set width to prevent overflow
        }

        if (isMajor && this.options.showMajorLabels) {
          if (x > 0) {
            if (xFirstMajorLabel == undefined) {
              xFirstMajorLabel = x;
            }
            label = this._repaintMajorText(x, step.getLabelMajor(current), orientation, className);
          }
          line = this._repaintMajorLine(x, width, orientation, className);
        } else {
          // minor line
          if (showMinorGrid) {
            line = this._repaintMinorLine(x, width, orientation, className);
          } else {
            if (line) {
              // adjust the width of the previous grid
              line.style.width = parseInt(line.style.width) + width + 'px';
            }
          }
        }
      }

      if (count === MAX && !warnedForOverflow) {
        console.warn('Something is wrong with the Timeline scale. Limited drawing of grid lines to ' + MAX + ' lines.');
        warnedForOverflow = true;
      }

      // create a major label on the left when needed
      if (this.options.showMajorLabels) {
        var leftTime = this.body.util.toTime(0); // upper bound estimation
        var leftText = step.getLabelMajor(leftTime);
        var widthText = leftText.length * (this.props.majorCharWidth || 10) + 10;

        if (xFirstMajorLabel == undefined || widthText < xFirstMajorLabel) {
          this._repaintMajorText(0, leftText, orientation, className);
        }
      }

      // Cleanup leftover DOM elements from the redundant list
      util.forEach(this.dom.redundant, function (arr) {
        while (arr.length) {
          var elem = arr.pop();
          if (elem && elem.parentNode) {
            elem.parentNode.removeChild(elem);
          }
        }
      });
    }

    /**
     * Create a minor label for the axis at position x
     * @param {number} x
     * @param {string} text
     * @param {string} orientation   "top" or "bottom" (default)
     * @param {string} className
     * @return {Element} Returns the HTML element of the created label
     * @private
     */

  }, {
    key: '_repaintMinorText',
    value: function _repaintMinorText(x, text, orientation, className) {
      // reuse redundant label
      var label = this.dom.redundant.minorTexts.shift();

      if (!label) {
        // create new label
        var content = document.createTextNode('');
        label = document.createElement('div');
        label.appendChild(content);
        this.dom.foreground.appendChild(label);
      }
      this.dom.minorTexts.push(label);
      label.innerHTML = text;

      label.style.top = orientation == 'top' ? this.props.majorLabelHeight + 'px' : '0';

      if (this.options.rtl) {
        label.style.left = "";
        label.style.right = x + 'px';
      } else {
        label.style.left = x + 'px';
      }
      label.className = 'timeline-text timeline-minor ' + className;
      //label.title = title;  // TODO: this is a heavy operation

      return label;
    }

    /**
     * Create a Major label for the axis at position x
     * @param {number} x
     * @param {string} text
     * @param {string} orientation   "top" or "bottom" (default)
     * @param {string} className
     * @return {Element} Returns the HTML element of the created label
     * @private
     */

  }, {
    key: '_repaintMajorText',
    value: function _repaintMajorText(x, text, orientation, className) {
      // reuse redundant label
      var label = this.dom.redundant.majorTexts.shift();

      if (!label) {
        // create label
        var content = document.createElement('div');
        label = document.createElement('div');
        label.appendChild(content);
        this.dom.foreground.appendChild(label);
      }

      label.childNodes[0].innerHTML = text;
      label.className = 'timeline-text timeline-major ' + className;
      //label.title = title; // TODO: this is a heavy operation

      label.style.top = orientation == 'top' ? '0' : this.props.minorLabelHeight + 'px';
      if (this.options.rtl) {
        label.style.left = "";
        label.style.right = x + 'px';
      } else {
        label.style.left = x + 'px';
      }

      this.dom.majorTexts.push(label);
      return label;
    }

    /**
     * Create a minor line for the axis at position x
     * @param {number} x
     * @param {number} width
     * @param {string} orientation   "top" or "bottom" (default)
     * @param {string} className
     * @return {Element} Returns the created line
     * @private
     */

  }, {
    key: '_repaintMinorLine',
    value: function _repaintMinorLine(x, width, orientation, className) {
      // reuse redundant line
      var line = this.dom.redundant.lines.shift();
      if (!line) {
        // create vertical line
        line = document.createElement('div');
        this.dom.background.appendChild(line);
      }
      this.dom.lines.push(line);

      var props = this.props;
      if (orientation == 'top') {
        line.style.top = props.majorLabelHeight + 'px';
      } else {
        line.style.top = this.body.domProps.top.height + 'px';
      }
      line.style.height = props.minorLineHeight + 'px';
      if (this.options.rtl) {
        line.style.left = "";
        line.style.right = x - props.minorLineWidth / 2 + 'px';
        line.className = 'timeline-grid timeline-vertical-rtl timeline-minor ' + className;
      } else {
        line.style.left = x - props.minorLineWidth / 2 + 'px';
        line.className = 'timeline-grid timeline-vertical timeline-minor ' + className;
      }
      line.style.width = width + 'px';

      return line;
    }

    /**
     * Create a Major line for the axis at position x
     * @param {number} x
     * @param {number} width
     * @param {string} orientation   "top" or "bottom" (default)
     * @param {string} className
     * @return {Element} Returns the created line
     * @private
     */

  }, {
    key: '_repaintMajorLine',
    value: function _repaintMajorLine(x, width, orientation, className) {
      // reuse redundant line
      var line = this.dom.redundant.lines.shift();
      if (!line) {
        // create vertical line
        line = document.createElement('div');
        this.dom.background.appendChild(line);
      }
      this.dom.lines.push(line);

      var props = this.props;
      if (orientation == 'top') {
        line.style.top = '0';
      } else {
        line.style.top = this.body.domProps.top.height + 'px';
      }

      if (this.options.rtl) {
        line.style.left = "";
        line.style.right = x - props.majorLineWidth / 2 + 'px';
        line.className = 'timeline-grid timeline-vertical-rtl timeline-major ' + className;
      } else {
        line.style.left = x - props.majorLineWidth / 2 + 'px';
        line.className = 'timeline-grid timeline-vertical timeline-major ' + className;
      }

      line.style.height = props.majorLineHeight + 'px';
      line.style.width = width + 'px';

      return line;
    }

    /**
     * Determine the size of text on the axis (both major and minor axis).
     * The size is calculated only once and then cached in this.props.
     * @private
     */

  }, {
    key: '_calculateCharSize',
    value: function _calculateCharSize() {
      // Note: We calculate char size with every redraw. Size may change, for
      // example when any of the timelines parents had display:none for example.

      // determine the char width and height on the minor axis
      if (!this.dom.measureCharMinor) {
        this.dom.measureCharMinor = document.createElement('DIV');
        this.dom.measureCharMinor.className = 'timeline-text timeline-minor timeline-measure';
        this.dom.measureCharMinor.style.position = 'absolute';

        this.dom.measureCharMinor.appendChild(document.createTextNode('0'));
        this.dom.foreground.appendChild(this.dom.measureCharMinor);
      }
      this.props.minorCharHeight = this.dom.measureCharMinor.clientHeight;
      this.props.minorCharWidth = this.dom.measureCharMinor.clientWidth;

      // determine the char width and height on the major axis
      if (!this.dom.measureCharMajor) {
        this.dom.measureCharMajor = document.createElement('DIV');
        this.dom.measureCharMajor.className = 'timeline-text timeline-major timeline-measure';
        this.dom.measureCharMajor.style.position = 'absolute';

        this.dom.measureCharMajor.appendChild(document.createTextNode('0'));
        this.dom.foreground.appendChild(this.dom.measureCharMajor);
      }
      this.props.majorCharHeight = this.dom.measureCharMajor.clientHeight;
      this.props.majorCharWidth = this.dom.measureCharMajor.clientWidth;
    }
  }]);
  return TimeAxis;
}(_Component3['default']);

var warnedForOverflow = false;

exports['default'] = TimeAxis;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _moment2 = __webpack_require__(8);

var _moment3 = _interopRequireDefault(_moment2);

var _DateUtil = __webpack_require__(25);

var DateUtil = _interopRequireWildcard(_DateUtil);

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * The class TimeStep is an iterator for dates. You provide a start date and an
 * end date. The class itself determines the best scale (step size) based on the
 * provided start Date, end Date, and minimumStep.
 *
 * If minimumStep is provided, the step size is chosen as close as possible
 * to the minimumStep but larger than minimumStep. If minimumStep is not
 * provided, the scale is set to 1 DAY.
 * The minimumStep should correspond with the onscreen size of about 6 characters
 *
 * Alternatively, you can set a scale by hand.
 * After creation, you can initialize the class by executing first(). Then you
 * can iterate from the start date to the end date via next(). You can check if
 * the end date is reached with the function hasNext(). After each step, you can
 * retrieve the current date via getCurrent().
 * The TimeStep has scales ranging from milliseconds, seconds, minutes, hours,
 * days, to years.
 *
 * Version: 1.2
 *
 * @param {Date} [start]         The start date, for example new Date(2010, 9, 21)
 *                               or new Date(2010, 9, 21, 23, 45, 00)
 * @param {Date} [end]           The end date
 * @param {number} [minimumStep] Optional. Minimum step size in milliseconds
 * @param {Date|Array.<Date>} [hiddenDates] Optional.
 * @param {{showMajorLabels: boolean}} [options] Optional.
 * @constructor  TimeStep
 */
var TimeStep = function () {
  function TimeStep(start, end, minimumStep, hiddenDates, options) {
    (0, _classCallCheck3['default'])(this, TimeStep);

    this.moment = _moment3['default'];

    // variables
    this.current = this.moment();
    this._start = this.moment();
    this._end = this.moment();

    this.autoScale = true;
    this.scale = 'day';
    this.step = 1;

    // initialize the range
    this.setRange(start, end, minimumStep);

    // hidden Dates options
    this.switchedDay = false;
    this.switchedMonth = false;
    this.switchedYear = false;
    if (Array.isArray(hiddenDates)) {
      this.hiddenDates = hiddenDates;
    } else if (hiddenDates != undefined) {
      this.hiddenDates = [hiddenDates];
    } else {
      this.hiddenDates = [];
    }

    this.format = TimeStep.FORMAT; // default formatting
    this.options = options ? options : {};
  }

  /**
   * Set custom constructor function for moment. Can be used to set dates
   * to UTC or to set a utcOffset.
   * @param {function} moment
   */


  (0, _createClass3['default'])(TimeStep, [{
    key: 'setMoment',
    value: function setMoment(moment) {
      this.moment = moment;

      // update the date properties, can have a new utcOffset
      this.current = this.moment(this.current.valueOf());
      this._start = this.moment(this._start.valueOf());
      this._end = this.moment(this._end.valueOf());
    }

    /**
     * Set custom formatting for the minor an major labels of the TimeStep.
     * Both `minorLabels` and `majorLabels` are an Object with properties:
     * 'millisecond', 'second', 'minute', 'hour', 'weekday', 'day', 'week', 'month', 'year'.
     * @param {{minorLabels: Object, majorLabels: Object}} format
     */

  }, {
    key: 'setFormat',
    value: function setFormat(format) {
      var defaultFormat = util.deepExtend({}, TimeStep.FORMAT);
      this.format = util.deepExtend(defaultFormat, format);
    }

    /**
     * Set a new range
     * If minimumStep is provided, the step size is chosen as close as possible
     * to the minimumStep but larger than minimumStep. If minimumStep is not
     * provided, the scale is set to 1 DAY.
     * The minimumStep should correspond with the onscreen size of about 6 characters
     * @param {Date} [start]      The start date and time.
     * @param {Date} [end]        The end date and time.
     * @param {int} [minimumStep] Optional. Minimum step size in milliseconds
     */

  }, {
    key: 'setRange',
    value: function setRange(start, end, minimumStep) {
      if (!(start instanceof Date) || !(end instanceof Date)) {
        throw "No legal start or end date in method setRange";
      }

      this._start = start != undefined ? this.moment(start.valueOf()) : new Date();
      this._end = end != undefined ? this.moment(end.valueOf()) : new Date();

      if (this.autoScale) {
        this.setMinimumStep(minimumStep);
      }
    }

    /**
     * Set the range iterator to the start date.
     */

  }, {
    key: 'start',
    value: function start() {
      this.current = this._start.clone();
      this.roundToMinor();
    }

    /**
     * Round the current date to the first minor date value
     * This must be executed once when the current date is set to start Date
     */

  }, {
    key: 'roundToMinor',
    value: function roundToMinor() {
      // round to floor
      // to prevent year & month scales rounding down to the first day of week we perform this separately
      if (this.scale == 'week') {
        this.current.weekday(0);
      }
      // IMPORTANT: we have no breaks in this switch! (this is no bug)
      // noinspection FallThroughInSwitchStatementJS
      switch (this.scale) {
        case 'year':
          this.current.year(this.step * Math.floor(this.current.year() / this.step));
          this.current.month(0);
        case 'month':
          this.current.date(1); // eslint-disable-line no-fallthrough
        case 'week': // eslint-disable-line no-fallthrough
        case 'day': // eslint-disable-line no-fallthrough
        case 'weekday':
          this.current.hours(0); // eslint-disable-line no-fallthrough
        case 'hour':
          this.current.minutes(0); // eslint-disable-line no-fallthrough
        case 'minute':
          this.current.seconds(0); // eslint-disable-line no-fallthrough
        case 'second':
          this.current.milliseconds(0); // eslint-disable-line no-fallthrough
        //case 'millisecond': // nothing to do for milliseconds
      }

      if (this.step != 1) {
        // round down to the first minor value that is a multiple of the current step size
        switch (this.scale) {
          case 'millisecond':
            this.current.subtract(this.current.milliseconds() % this.step, 'milliseconds');break;
          case 'second':
            this.current.subtract(this.current.seconds() % this.step, 'seconds');break;
          case 'minute':
            this.current.subtract(this.current.minutes() % this.step, 'minutes');break;
          case 'hour':
            this.current.subtract(this.current.hours() % this.step, 'hours');break;
          case 'weekday': // intentional fall through
          case 'day':
            this.current.subtract((this.current.date() - 1) % this.step, 'day');break;
          case 'week':
            this.current.subtract(this.current.week() % this.step, 'week');break;
          case 'month':
            this.current.subtract(this.current.month() % this.step, 'month');break;
          case 'year':
            this.current.subtract(this.current.year() % this.step, 'year');break;
          default:
            break;
        }
      }
    }

    /**
     * Check if the there is a next step
     * @return {boolean}  true if the current date has not passed the end date
     */

  }, {
    key: 'hasNext',
    value: function hasNext() {
      return this.current.valueOf() <= this._end.valueOf();
    }

    /**
     * Do the next step
     */

  }, {
    key: 'next',
    value: function next() {
      var prev = this.current.valueOf();

      // Two cases, needed to prevent issues with switching daylight savings
      // (end of March and end of October)
      switch (this.scale) {
        case 'millisecond':
          this.current.add(this.step, 'millisecond');break;
        case 'second':
          this.current.add(this.step, 'second');break;
        case 'minute':
          this.current.add(this.step, 'minute');break;
        case 'hour':
          this.current.add(this.step, 'hour');

          if (this.current.month() < 6) {
            this.current.subtract(this.current.hours() % this.step, 'hour');
          } else {
            if (this.current.hours() % this.step !== 0) {
              this.current.add(this.step - this.current.hours() % this.step, 'hour');
            }
          }
          break;
        case 'weekday': // intentional fall through
        case 'day':
          this.current.add(this.step, 'day');break;
        case 'week':
          if (this.current.weekday() !== 0) {
            // we had a month break not correlating with a week's start before
            this.current.weekday(0); // switch back to week cycles
            this.current.add(this.step, 'week');
          } else if (this.options.showMajorLabels === false) {
            this.current.add(this.step, 'week'); // the default case
          } else {
            // first day of the week
            var nextWeek = this.current.clone();
            nextWeek.add(1, 'week');
            if (nextWeek.isSame(this.current, 'month')) {
              // is the first day of the next week in the same month?
              this.current.add(this.step, 'week'); // the default case
            } else {
              // inject a step at each first day of the month
              this.current.add(this.step, 'week');
              this.current.date(1);
            }
          }
          break;
        case 'month':
          this.current.add(this.step, 'month');break;
        case 'year':
          this.current.add(this.step, 'year');break;
        default:
          break;
      }

      if (this.step != 1) {
        // round down to the correct major value
        switch (this.scale) {
          case 'millisecond':
            if (this.current.milliseconds() > 0 && this.current.milliseconds() < this.step) this.current.milliseconds(0);break;
          case 'second':
            if (this.current.seconds() > 0 && this.current.seconds() < this.step) this.current.seconds(0);break;
          case 'minute':
            if (this.current.minutes() > 0 && this.current.minutes() < this.step) this.current.minutes(0);break;
          case 'hour':
            if (this.current.hours() > 0 && this.current.hours() < this.step) this.current.hours(0);break;
          case 'weekday': // intentional fall through
          case 'day':
            if (this.current.date() < this.step + 1) this.current.date(1);break;
          case 'week':
            if (this.current.week() < this.step) this.current.week(1);break; // week numbering starts at 1, not 0
          case 'month':
            if (this.current.month() < this.step) this.current.month(0);break;
          case 'year':
            break; // nothing to do for year
          default:
            break;
        }
      }

      // safety mechanism: if current time is still unchanged, move to the end
      if (this.current.valueOf() == prev) {
        this.current = this._end.clone();
      }

      // Reset switches for year, month and day. Will get set to true where appropriate in DateUtil.stepOverHiddenDates
      this.switchedDay = false;
      this.switchedMonth = false;
      this.switchedYear = false;

      DateUtil.stepOverHiddenDates(this.moment, this, prev);
    }

    /**
     * Get the current datetime
     * @return {Moment}  current The current date
     */

  }, {
    key: 'getCurrent',
    value: function getCurrent() {
      return this.current.clone();
    }

    /**
     * Set a custom scale. Autoscaling will be disabled.
     * For example setScale('minute', 5) will result
     * in minor steps of 5 minutes, and major steps of an hour.
     *
     * @param {{scale: string, step: number}} params
     *                               An object containing two properties:
     *                               - A string 'scale'. Choose from 'millisecond', 'second',
     *                                 'minute', 'hour', 'weekday', 'day', 'week', 'month', 'year'.
     *                               - A number 'step'. A step size, by default 1.
     *                                 Choose for example 1, 2, 5, or 10.
     */

  }, {
    key: 'setScale',
    value: function setScale(params) {
      if (params && typeof params.scale == 'string') {
        this.scale = params.scale;
        this.step = params.step > 0 ? params.step : 1;
        this.autoScale = false;
      }
    }

    /**
     * Enable or disable autoscaling
     * @param {boolean} enable  If true, autoascaling is set true
     */

  }, {
    key: 'setAutoScale',
    value: function setAutoScale(enable) {
      this.autoScale = enable;
    }

    /**
     * Automatically determine the scale that bests fits the provided minimum step
     * @param {number} [minimumStep]  The minimum step size in milliseconds
     */

  }, {
    key: 'setMinimumStep',
    value: function setMinimumStep(minimumStep) {
      if (minimumStep == undefined) {
        return;
      }

      //var b = asc + ds;

      var stepYear = 1000 * 60 * 60 * 24 * 30 * 12;
      var stepMonth = 1000 * 60 * 60 * 24 * 30;
      var stepDay = 1000 * 60 * 60 * 24;
      var stepHour = 1000 * 60 * 60;
      var stepMinute = 1000 * 60;
      var stepSecond = 1000;
      var stepMillisecond = 1;

      // find the smallest step that is larger than the provided minimumStep
      if (stepYear * 1000 > minimumStep) {
        this.scale = 'year';this.step = 1000;
      }
      if (stepYear * 500 > minimumStep) {
        this.scale = 'year';this.step = 500;
      }
      if (stepYear * 100 > minimumStep) {
        this.scale = 'year';this.step = 100;
      }
      if (stepYear * 50 > minimumStep) {
        this.scale = 'year';this.step = 50;
      }
      if (stepYear * 10 > minimumStep) {
        this.scale = 'year';this.step = 10;
      }
      if (stepYear * 5 > minimumStep) {
        this.scale = 'year';this.step = 5;
      }
      if (stepYear > minimumStep) {
        this.scale = 'year';this.step = 1;
      }
      if (stepMonth * 3 > minimumStep) {
        this.scale = 'month';this.step = 3;
      }
      if (stepMonth > minimumStep) {
        this.scale = 'month';this.step = 1;
      }
      if (stepDay * 7 > minimumStep) {
        this.scale = 'week';this.step = 1;
      }
      if (stepDay * 2 > minimumStep) {
        this.scale = 'day';this.step = 2;
      }
      if (stepDay > minimumStep) {
        this.scale = 'day';this.step = 1;
      }
      if (stepDay / 2 > minimumStep) {
        this.scale = 'weekday';this.step = 1;
      }
      if (stepHour * 4 > minimumStep) {
        this.scale = 'hour';this.step = 4;
      }
      if (stepHour > minimumStep) {
        this.scale = 'hour';this.step = 1;
      }
      if (stepMinute * 15 > minimumStep) {
        this.scale = 'minute';this.step = 15;
      }
      if (stepMinute * 10 > minimumStep) {
        this.scale = 'minute';this.step = 10;
      }
      if (stepMinute * 5 > minimumStep) {
        this.scale = 'minute';this.step = 5;
      }
      if (stepMinute > minimumStep) {
        this.scale = 'minute';this.step = 1;
      }
      if (stepSecond * 15 > minimumStep) {
        this.scale = 'second';this.step = 15;
      }
      if (stepSecond * 10 > minimumStep) {
        this.scale = 'second';this.step = 10;
      }
      if (stepSecond * 5 > minimumStep) {
        this.scale = 'second';this.step = 5;
      }
      if (stepSecond > minimumStep) {
        this.scale = 'second';this.step = 1;
      }
      if (stepMillisecond * 200 > minimumStep) {
        this.scale = 'millisecond';this.step = 200;
      }
      if (stepMillisecond * 100 > minimumStep) {
        this.scale = 'millisecond';this.step = 100;
      }
      if (stepMillisecond * 50 > minimumStep) {
        this.scale = 'millisecond';this.step = 50;
      }
      if (stepMillisecond * 10 > minimumStep) {
        this.scale = 'millisecond';this.step = 10;
      }
      if (stepMillisecond * 5 > minimumStep) {
        this.scale = 'millisecond';this.step = 5;
      }
      if (stepMillisecond > minimumStep) {
        this.scale = 'millisecond';this.step = 1;
      }
    }

    /**
     * Snap a date to a rounded value.
     * The snap intervals are dependent on the current scale and step.
     * Static function
     * @param {Date} date    the date to be snapped.
     * @param {string} scale Current scale, can be 'millisecond', 'second',
     *                       'minute', 'hour', 'weekday, 'day', 'week', 'month', 'year'.
     * @param {number} step  Current step (1, 2, 4, 5, ...
     * @return {Date} snappedDate
     */

  }, {
    key: 'isMajor',


    /**
     * Check if the current value is a major value (for example when the step
     * is DAY, a major value is each first day of the MONTH)
     * @return {boolean} true if current date is major, else false.
     */
    value: function isMajor() {
      if (this.switchedYear == true) {
        switch (this.scale) {
          case 'year':
          case 'month':
          case 'week':
          case 'weekday':
          case 'day':
          case 'hour':
          case 'minute':
          case 'second':
          case 'millisecond':
            return true;
          default:
            return false;
        }
      } else if (this.switchedMonth == true) {
        switch (this.scale) {
          case 'week':
          case 'weekday':
          case 'day':
          case 'hour':
          case 'minute':
          case 'second':
          case 'millisecond':
            return true;
          default:
            return false;
        }
      } else if (this.switchedDay == true) {
        switch (this.scale) {
          case 'millisecond':
          case 'second':
          case 'minute':
          case 'hour':
            return true;
          default:
            return false;
        }
      }

      var date = this.moment(this.current);
      switch (this.scale) {
        case 'millisecond':
          return date.milliseconds() == 0;
        case 'second':
          return date.seconds() == 0;
        case 'minute':
          return date.hours() == 0 && date.minutes() == 0;
        case 'hour':
          return date.hours() == 0;
        case 'weekday': // intentional fall through
        case 'day':
          return date.date() == 1;
        case 'week':
          return date.date() == 1;
        case 'month':
          return date.month() == 0;
        case 'year':
          return false;
        default:
          return false;
      }
    }

    /**
     * Returns formatted text for the minor axislabel, depending on the current
     * date and the scale. For example when scale is MINUTE, the current time is
     * formatted as "hh:mm".
     * @param {Date} [date=this.current] custom date. if not provided, current date is taken
     * @returns {String}
     */

  }, {
    key: 'getLabelMinor',
    value: function getLabelMinor(date) {
      if (date == undefined) {
        date = this.current;
      }
      if (date instanceof Date) {
        date = this.moment(date);
      }

      if (typeof this.format.minorLabels === "function") {
        return this.format.minorLabels(date, this.scale, this.step);
      }

      var format = this.format.minorLabels[this.scale];
      // noinspection FallThroughInSwitchStatementJS
      switch (this.scale) {
        case 'week':
          if (this.isMajor() && date.weekday() !== 0) {
            return "";
          }
        default:
          // eslint-disable-line no-fallthrough
          return format && format.length > 0 ? this.moment(date).format(format) : '';
      }
    }

    /**
     * Returns formatted text for the major axis label, depending on the current
     * date and the scale. For example when scale is MINUTE, the major scale is
     * hours, and the hour will be formatted as "hh".
     * @param {Date} [date=this.current] custom date. if not provided, current date is taken
     * @returns {String}
     */

  }, {
    key: 'getLabelMajor',
    value: function getLabelMajor(date) {
      if (date == undefined) {
        date = this.current;
      }
      if (date instanceof Date) {
        date = this.moment(date);
      }

      if (typeof this.format.majorLabels === "function") {
        return this.format.majorLabels(date, this.scale, this.step);
      }

      var format = this.format.majorLabels[this.scale];
      return format && format.length > 0 ? this.moment(date).format(format) : '';
    }
  }, {
    key: 'getClassName',
    value: function getClassName() {
      var _moment = this.moment;
      var m = this.moment(this.current);
      var current = m.locale ? m.locale('en') : m.lang('en'); // old versions of moment have .lang() function
      var step = this.step;
      var classNames = [];

      /**
       *
       * @param {number} value
       * @returns {String}
       */
      function even(value) {
        return value / step % 2 == 0 ? ' timeline-even' : ' timeline-odd';
      }

      /**
       *
       * @param {Date} date
       * @returns {String}
       */
      function today(date) {
        if (date.isSame(new Date(), 'day')) {
          return ' timeline-today';
        }
        if (date.isSame(_moment().add(1, 'day'), 'day')) {
          return ' timeline-tomorrow';
        }
        if (date.isSame(_moment().add(-1, 'day'), 'day')) {
          return ' timeline-yesterday';
        }
        return '';
      }

      /**
       *
       * @param {Date} date
       * @returns {String}
       */
      function currentWeek(date) {
        return date.isSame(new Date(), 'week') ? ' timeline-current-week' : '';
      }

      /**
       *
       * @param {Date} date
       * @returns {String}
       */
      function currentMonth(date) {
        return date.isSame(new Date(), 'month') ? ' timeline-current-month' : '';
      }

      /**
       *
       * @param {Date} date
       * @returns {String}
       */
      function currentYear(date) {
        return date.isSame(new Date(), 'year') ? ' timeline-current-year' : '';
      }

      switch (this.scale) {
        case 'millisecond':
          classNames.push(today(current));
          classNames.push(even(current.milliseconds()));
          break;
        case 'second':
          classNames.push(today(current));
          classNames.push(even(current.seconds()));
          break;
        case 'minute':
          classNames.push(today(current));
          classNames.push(even(current.minutes()));
          break;
        case 'hour':
          classNames.push('timeline-h' + current.hours() + (this.step == 4 ? '-h' + (current.hours() + 4) : ''));
          classNames.push(today(current));
          classNames.push(even(current.hours()));
          break;
        case 'weekday':
          classNames.push('timeline-' + current.format('dddd').toLowerCase());
          classNames.push(today(current));
          classNames.push(currentWeek(current));
          classNames.push(even(current.date()));
          break;
        case 'day':
          classNames.push('timeline-day' + current.date());
          classNames.push('timeline-' + current.format('MMMM').toLowerCase());
          classNames.push(today(current));
          classNames.push(currentMonth(current));
          classNames.push(this.step <= 2 ? today(current) : '');
          classNames.push(this.step <= 2 ? 'timeline-' + current.format('dddd').toLowerCase() : '');
          classNames.push(even(current.date() - 1));
          break;
        case 'week':
          classNames.push('timeline-week' + current.format('w'));
          classNames.push(currentWeek(current));
          classNames.push(even(current.week()));
          break;
        case 'month':
          classNames.push('timeline-' + current.format('MMMM').toLowerCase());
          classNames.push(currentMonth(current));
          classNames.push(even(current.month()));
          break;
        case 'year':
          classNames.push('timeline-year' + current.year());
          classNames.push(currentYear(current));
          classNames.push(even(current.year()));
          break;
      }
      return classNames.filter(String).join(" ");
    }
  }], [{
    key: 'snap',
    value: function snap(date, scale, step) {
      var clone = (0, _moment3['default'])(date);

      if (scale == 'year') {
        var year = clone.year() + Math.round(clone.month() / 12);
        clone.year(Math.round(year / step) * step);
        clone.month(0);
        clone.date(0);
        clone.hours(0);
        clone.minutes(0);
        clone.seconds(0);
        clone.milliseconds(0);
      } else if (scale == 'month') {
        if (clone.date() > 15) {
          clone.date(1);
          clone.add(1, 'month');
          // important: first set Date to 1, after that change the month.
        } else {
          clone.date(1);
        }

        clone.hours(0);
        clone.minutes(0);
        clone.seconds(0);
        clone.milliseconds(0);
      } else if (scale == 'week') {
        if (clone.weekday() > 2) {
          // doing it the momentjs locale aware way
          clone.weekday(0);
          clone.add(1, 'week');
        } else {
          clone.weekday(0);
        }

        clone.hours(0);
        clone.minutes(0);
        clone.seconds(0);
        clone.milliseconds(0);
      } else if (scale == 'day') {
        //noinspection FallthroughInSwitchStatementJS
        switch (step) {
          case 5:
          case 2:
            clone.hours(Math.round(clone.hours() / 24) * 24);break;
          default:
            clone.hours(Math.round(clone.hours() / 12) * 12);break;
        }
        clone.minutes(0);
        clone.seconds(0);
        clone.milliseconds(0);
      } else if (scale == 'weekday') {
        //noinspection FallthroughInSwitchStatementJS
        switch (step) {
          case 5:
          case 2:
            clone.hours(Math.round(clone.hours() / 12) * 12);break;
          default:
            clone.hours(Math.round(clone.hours() / 6) * 6);break;
        }
        clone.minutes(0);
        clone.seconds(0);
        clone.milliseconds(0);
      } else if (scale == 'hour') {
        switch (step) {
          case 4:
            clone.minutes(Math.round(clone.minutes() / 60) * 60);break;
          default:
            clone.minutes(Math.round(clone.minutes() / 30) * 30);break;
        }
        clone.seconds(0);
        clone.milliseconds(0);
      } else if (scale == 'minute') {
        //noinspection FallthroughInSwitchStatementJS
        switch (step) {
          case 15:
          case 10:
            clone.minutes(Math.round(clone.minutes() / 5) * 5);
            clone.seconds(0);
            break;
          case 5:
            clone.seconds(Math.round(clone.seconds() / 60) * 60);break;
          default:
            clone.seconds(Math.round(clone.seconds() / 30) * 30);break;
        }
        clone.milliseconds(0);
      } else if (scale == 'second') {
        //noinspection FallthroughInSwitchStatementJS
        switch (step) {
          case 15:
          case 10:
            clone.seconds(Math.round(clone.seconds() / 5) * 5);
            clone.milliseconds(0);
            break;
          case 5:
            clone.milliseconds(Math.round(clone.milliseconds() / 1000) * 1000);break;
          default:
            clone.milliseconds(Math.round(clone.milliseconds() / 500) * 500);break;
        }
      } else if (scale == 'millisecond') {
        var _step = step > 5 ? step / 2 : 1;
        clone.milliseconds(Math.round(clone.milliseconds() / _step) * _step);
      }

      return clone;
    }
  }]);
  return TimeStep;
}();

// Time formatting


TimeStep.FORMAT = {
  minorLabels: {
    millisecond: 'SSS',
    second: 's',
    minute: 'HH:mm',
    hour: 'HH:mm',
    weekday: 'ddd D',
    day: 'D',
    week: 'D',
    month: 'MMM',
    year: 'YYYY'
  },
  majorLabels: {
    millisecond: 'HH:mm:ss',
    second: 'D MMMM HH:mm',
    minute: 'ddd D MMMM',
    hour: 'ddd D MMMM',
    weekday: 'MMMM YYYY',
    day: 'MMMM YYYY',
    week: 'MMMM YYYY',
    month: 'YYYY',
    year: ''
  }
};

exports['default'] = TimeStep;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _hammer = __webpack_require__(16);

var _hammer2 = _interopRequireDefault(_hammer);

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

var _Component2 = __webpack_require__(15);

var _Component3 = _interopRequireDefault(_Component2);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _locales = __webpack_require__(74);

var _locales2 = _interopRequireDefault(_locales);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/** A custom time bar */
var CustomTime = function (_Component) {
  (0, _inherits3['default'])(CustomTime, _Component);

  /**
  * @param {{range: Range, dom: Object}} body
  * @param {Object} [options]        Available parameters:
  *                                  {number | string} id
  *                                  {string} locales
  *                                  {string} locale
  * @constructor CustomTime
  * @extends Component
  */
  function CustomTime(body, options) {
    (0, _classCallCheck3['default'])(this, CustomTime);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (CustomTime.__proto__ || (0, _getPrototypeOf2['default'])(CustomTime)).call(this));

    _this.body = body;

    // default options
    _this.defaultOptions = {
      moment: _moment2['default'],
      locales: _locales2['default'],
      locale: 'en',
      id: undefined,
      title: undefined
    };
    _this.options = util.extend({}, _this.defaultOptions);

    if (options && options.time) {
      _this.customTime = options.time;
    } else {
      _this.customTime = new Date();
    }

    _this.eventParams = {}; // stores state parameters while dragging the bar

    _this.setOptions(options);

    // create the DOM
    _this._create();
    return _this;
  }

  /**
   * Set options for the component. Options will be merged in current options.
   * @param {Object} options  Available parameters:
   *                                  {number | string} id
   *                                  {string} locales
   *                                  {string} locale
   */


  (0, _createClass3['default'])(CustomTime, [{
    key: 'setOptions',
    value: function setOptions(options) {
      if (options) {
        // copy all options that we know
        util.selectiveExtend(['moment', 'locale', 'locales', 'id', 'title'], this.options, options);
      }
    }

    /**
     * Create the DOM for the custom time
     * @private
     */

  }, {
    key: '_create',
    value: function _create() {
      var bar = document.createElement('div');
      bar['custom-time'] = this;
      bar.className = 'timeline-custom-time ' + (this.options.id || '');
      bar.style.position = 'absolute';
      bar.style.top = '0px';
      bar.style.height = '100%';
      this.bar = bar;

      var drag = document.createElement('div');
      drag.style.position = 'relative';
      drag.style.top = '0px';
      drag.style.left = '-10px';
      drag.style.height = '100%';
      drag.style.width = '20px';

      /**
       *
       * @param {WheelEvent} e
       */
      function onMouseWheel(e) {
        this.body.range._onMouseWheel(e);
      }

      if (drag.addEventListener) {
        // IE9, Chrome, Safari, Opera
        drag.addEventListener("mousewheel", onMouseWheel.bind(this), false);
        // Firefox
        drag.addEventListener("DOMMouseScroll", onMouseWheel.bind(this), false);
      } else {
        // IE 6/7/8
        drag.attachEvent("onmousewheel", onMouseWheel.bind(this));
      }

      bar.appendChild(drag);
      // attach event listeners
      this.hammer = new _hammer2['default'](drag);
      this.hammer.on('panstart', this._onDragStart.bind(this));
      this.hammer.on('panmove', this._onDrag.bind(this));
      this.hammer.on('panend', this._onDragEnd.bind(this));
      this.hammer.get('pan').set({ threshold: 5, direction: _hammer2['default'].DIRECTION_HORIZONTAL });
    }

    /**
     * Destroy the CustomTime bar
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.hide();

      this.hammer.destroy();
      this.hammer = null;

      this.body = null;
    }

    /**
     * Repaint the component
     * @return {boolean} Returns true if the component is resized
     */

  }, {
    key: 'redraw',
    value: function redraw() {
      var parent = this.body.dom.backgroundVertical;
      if (this.bar.parentNode != parent) {
        // attach to the dom
        if (this.bar.parentNode) {
          this.bar.parentNode.removeChild(this.bar);
        }
        parent.appendChild(this.bar);
      }

      var x = this.body.util.toScreen(this.customTime);

      var locale = this.options.locales[this.options.locale];
      if (!locale) {
        if (!this.warned) {
          console.log('WARNING: options.locales[\'' + this.options.locale + '\'] not found. See http://visjs.org/docs/timeline/#Localization');
          this.warned = true;
        }
        locale = this.options.locales['en']; // fall back on english when not available
      }

      var title = this.options.title;
      // To hide the title completely use empty string ''.
      if (title === undefined) {
        title = locale.time + ': ' + this.options.moment(this.customTime).format('dddd, MMMM Do YYYY, H:mm:ss');
        title = title.charAt(0).toUpperCase() + title.substring(1);
      } else if (typeof title === "function") {
        title = title.call(this.customTime);
      }

      this.bar.style.left = x + 'px';
      this.bar.title = title;

      return false;
    }

    /**
     * Remove the CustomTime from the DOM
     */

  }, {
    key: 'hide',
    value: function hide() {
      // remove the line from the DOM
      if (this.bar.parentNode) {
        this.bar.parentNode.removeChild(this.bar);
      }
    }

    /**
     * Set custom time.
     * @param {Date | number | string} time
     */

  }, {
    key: 'setCustomTime',
    value: function setCustomTime(time) {
      this.customTime = util.convert(time, 'Date');
      this.redraw();
    }

    /**
     * Retrieve the current custom time.
     * @return {Date} customTime
     */

  }, {
    key: 'getCustomTime',
    value: function getCustomTime() {
      return new Date(this.customTime.valueOf());
    }

    /**
      * Set custom title.
      * @param {Date | number | string} title
      */

  }, {
    key: 'setCustomTitle',
    value: function setCustomTitle(title) {
      this.options.title = title;
    }

    /**
     * Start moving horizontally
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onDragStart',
    value: function _onDragStart(event) {
      this.eventParams.dragging = true;
      this.eventParams.customTime = this.customTime;

      event.stopPropagation();
    }

    /**
     * Perform moving operating.
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onDrag',
    value: function _onDrag(event) {
      if (!this.eventParams.dragging) return;

      var x = this.body.util.toScreen(this.eventParams.customTime) + event.deltaX;
      var time = this.body.util.toTime(x);

      this.setCustomTime(time);

      // fire a timechange event
      this.body.emitter.emit('timechange', {
        id: this.options.id,
        time: new Date(this.customTime.valueOf()),
        event: event
      });

      event.stopPropagation();
    }

    /**
     * Stop moving operating.
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onDragEnd',
    value: function _onDragEnd(event) {
      if (!this.eventParams.dragging) return;

      // fire a timechanged event
      this.body.emitter.emit('timechanged', {
        id: this.options.id,
        time: new Date(this.customTime.valueOf()),
        event: event
      });

      event.stopPropagation();
    }

    /**
     * Find a custom time from an event target:
     * searches for the attribute 'custom-time' in the event target's element tree
     * @param {Event} event
     * @return {CustomTime | null} customTime
     */

  }], [{
    key: 'customTimeFromTarget',
    value: function customTimeFromTarget(event) {
      var target = event.target;
      while (target) {
        if (target.hasOwnProperty('custom-time')) {
          return target['custom-time'];
        }
        target = target.parentNode;
      }

      return null;
    }
  }]);
  return CustomTime;
}(_Component3['default']);

exports['default'] = CustomTime;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

var _Stack = __webpack_require__(77);

var stack = _interopRequireWildcard(_Stack);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * @constructor Group
 */
var Group = function () {
  /**
  * @param {number | string} groupId
  * @param {Object} data
  * @param {ItemSet} itemSet
  * @constructor Group
  */
  function Group(groupId, data, itemSet) {
    (0, _classCallCheck3['default'])(this, Group);

    this.groupId = groupId;
    this.subgroups = {};
    this.subgroupStack = {};
    this.subgroupStackAll = false;
    this.doInnerStack = false;
    this.shouldBailStackItems = false;
    this.subgroupIndex = 0;
    this.subgroupOrderer = data && data.subgroupOrder;
    this.itemSet = itemSet;
    this.isVisible = null;
    this.stackDirty = true; // if true, items will be restacked on next redraw

    if (data && data.nestedGroups) {
      this.nestedGroups = data.nestedGroups;
      if (data.showNested == false) {
        this.showNested = false;
      } else {
        this.showNested = true;
      }
    }

    if (data && data.subgroupStack) {
      if (typeof data.subgroupStack === "boolean") {
        this.doInnerStack = data.subgroupStack;
        this.subgroupStackAll = data.subgroupStack;
      } else {
        // We might be doing stacking on specific sub groups, but only
        // if at least one is set to do stacking
        for (var key in data.subgroupStack) {
          this.subgroupStack[key] = data.subgroupStack[key];
          this.doInnerStack = this.doInnerStack || data.subgroupStack[key];
        }
      }
    }

    if (data && data.heightMode) {
      this.heightMode = data.heightMode;
    } else {
      this.heightMode = itemSet.options.groupHeightMode;
    }

    this.nestedInGroup = null;

    this.dom = {};
    this.props = {
      label: {
        width: 0,
        height: 0
      }
    };
    this.className = null;

    this.items = {}; // items filtered by groupId of this group
    this.visibleItems = []; // items currently visible in window
    this.itemsInRange = []; // items currently in range
    this.orderedItems = {
      byStart: [],
      byEnd: []
    };
    this.checkRangedItems = false; // needed to refresh the ranged items if the window is programatically changed with NO overlap.
    var me = this;
    this.itemSet.body.emitter.on("checkRangedItems", function () {
      me.checkRangedItems = true;
    });

    this._create();

    this.setData(data);
  }

  /**
   * Create DOM elements for the group
   * @private
   */


  (0, _createClass3['default'])(Group, [{
    key: '_create',
    value: function _create() {
      var label = document.createElement('div');
      if (this.itemSet.options.groupEditable.order) {
        label.className = 'timeline-label draggable';
      } else {
        label.className = 'timeline-label';
      }
      this.dom.label = label;

      var inner = document.createElement('div');
      inner.className = 'timeline-inner';
      label.appendChild(inner);
      this.dom.inner = inner;

      var foreground = document.createElement('div');
      foreground.className = 'timeline-group';
      foreground['timeline-group'] = this;
      this.dom.foreground = foreground;

      this.dom.background = document.createElement('div');
      this.dom.background.className = 'timeline-group';

      this.dom.axis = document.createElement('div');
      this.dom.axis.className = 'timeline-group';

      // create a hidden marker to detect when the Timelines container is attached
      // to the DOM, or the style of a parent of the Timeline is changed from
      // display:none is changed to visible.
      this.dom.marker = document.createElement('div');
      this.dom.marker.style.visibility = 'hidden';
      this.dom.marker.style.position = 'absolute';
      this.dom.marker.innerHTML = '';
      this.dom.background.appendChild(this.dom.marker);
    }

    /**
     * Set the group data for this group
     * @param {Object} data   Group data, can contain properties content and className
     */

  }, {
    key: 'setData',
    value: function setData(data) {
      // update contents
      var content = void 0;
      var templateFunction = void 0;

      if (this.itemSet.options && this.itemSet.options.groupTemplate) {
        templateFunction = this.itemSet.options.groupTemplate.bind(this);
        content = templateFunction(data, this.dom.inner);
      } else {
        content = data && data.content;
      }

      if (content instanceof Element) {
        while (this.dom.inner.firstChild) {
          this.dom.inner.removeChild(this.dom.inner.firstChild);
        }
        this.dom.inner.appendChild(content);
      } else if (content instanceof Object && content.isReactComponent) {
        // Do nothing. Component was rendered into the node be ReactDOM.render.
        // That branch is necessary for evasion of a second call templateFunction.
        // Supports only React < 16(due to the asynchronous nature of React 16).
      } else if (content instanceof Object) {
        templateFunction(data, this.dom.inner);
      } else if (content !== undefined && content !== null) {
        this.dom.inner.innerHTML = content;
      } else {
        this.dom.inner.innerHTML = this.groupId || ''; // groupId can be null
      }

      // update title
      this.dom.label.title = data && data.title || '';
      if (!this.dom.inner.firstChild) {
        util.addClassName(this.dom.inner, 'timeline-hidden');
      } else {
        util.removeClassName(this.dom.inner, 'timeline-hidden');
      }

      if (data && data.nestedGroups) {
        if (!this.nestedGroups || this.nestedGroups != data.nestedGroups) {
          this.nestedGroups = data.nestedGroups;
        }

        if (data.showNested !== undefined || this.showNested === undefined) {
          if (data.showNested == false) {
            this.showNested = false;
          } else {
            this.showNested = true;
          }
        }

        util.addClassName(this.dom.label, 'timeline-nesting-group');
        var collapsedDirClassName = this.itemSet.options.rtl ? 'collapsed-rtl' : 'collapsed';
        if (this.showNested) {
          util.removeClassName(this.dom.label, collapsedDirClassName);
          util.addClassName(this.dom.label, 'expanded');
        } else {
          util.removeClassName(this.dom.label, 'expanded');
          util.addClassName(this.dom.label, collapsedDirClassName);
        }
      } else if (this.nestedGroups) {
        this.nestedGroups = null;
        collapsedDirClassName = this.itemSet.options.rtl ? 'collapsed-rtl' : 'collapsed';
        util.removeClassName(this.dom.label, collapsedDirClassName);
        util.removeClassName(this.dom.label, 'expanded');
        util.removeClassName(this.dom.label, 'timeline-nesting-group');
      }

      if (data && (data.treeLevel || data.nestedInGroup)) {
        var indent = 15 * (data.treeLevel || 2);
        if (!data.nestedGroups) {
          indent = indent + 15;
        }
        util.addClassName(this.dom.label, 'vis-nested-group');
        if (this.itemSet.options && this.itemSet.options.rtl) {
          this.dom.inner.style.paddingRight = indent + 'px';
        } else {
          this.dom.inner.style.paddingLeft = indent + 'px';
        }
      }

      // update className
      var className = data && data.className || null;
      if (className != this.className) {
        if (this.className) {
          util.removeClassName(this.dom.label, this.className);
          util.removeClassName(this.dom.foreground, this.className);
          util.removeClassName(this.dom.background, this.className);
          util.removeClassName(this.dom.axis, this.className);
        }
        util.addClassName(this.dom.label, className);
        util.addClassName(this.dom.foreground, className);
        util.addClassName(this.dom.background, className);
        util.addClassName(this.dom.axis, className);
        this.className = className;
      }

      // update style
      if (this.style) {
        util.removeCssText(this.dom.label, this.style);
        this.style = null;
      }
      if (data && data.style) {
        util.addCssText(this.dom.label, data.style);
        this.style = data.style;
      }
    }

    /**
     * Get the width of the group label
     * @return {number} width
     */

  }, {
    key: 'getLabelWidth',
    value: function getLabelWidth() {
      return this.props.label.width;
    }
  }, {
    key: '_didMarkerHeightChange',
    value: function _didMarkerHeightChange() {
      var markerHeight = this.dom.marker.clientHeight;
      if (markerHeight != this.lastMarkerHeight) {
        this.lastMarkerHeight = markerHeight;
        var redrawQueue = {};
        var redrawQueueLength = 0;

        util.forEach(this.items, function (item, key) {
          item.dirty = true;
          if (item.displayed) {
            var returnQueue = true;
            redrawQueue[key] = item.redraw(returnQueue);
            redrawQueueLength = redrawQueue[key].length;
          }
        });

        var needRedraw = redrawQueueLength > 0;
        if (needRedraw) {
          var _loop = function _loop(i) {
            util.forEach(redrawQueue, function (fns) {
              fns[i]();
            });
          };

          // redraw all regular items
          for (var i = 0; i < redrawQueueLength; i++) {
            _loop(i);
          }
        }
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: '_calculateGroupSizeAndPosition',
    value: function _calculateGroupSizeAndPosition() {
      var offsetTop = this.dom.foreground.offsetTop;
      var offsetLeft = this.dom.foreground.offsetLeft;
      var offsetWidth = this.dom.foreground.offsetWidth;
      this.top = offsetTop;
      this.right = offsetLeft;
      this.width = offsetWidth;
    }
  }, {
    key: '_shouldBailItemsRedraw',
    value: function _shouldBailItemsRedraw() {
      var me = this;
      var timeoutOptions = this.itemSet.options.onTimeout;
      var bailOptions = {
        relativeBailingTime: this.itemSet.itemsSettingTime,
        bailTimeMs: timeoutOptions && timeoutOptions.timeoutMs,
        userBailFunction: timeoutOptions && timeoutOptions.callback,
        shouldBailStackItems: this.shouldBailStackItems
      };
      var bail = null;
      if (!this.itemSet.initialDrawDone) {
        if (bailOptions.shouldBailStackItems) {
          return true;
        }
        if (Math.abs(new Date() - new Date(bailOptions.relativeBailingTime)) > bailOptions.bailTimeMs) {
          if (bailOptions.userBailFunction && this.itemSet.userContinueNotBail == null) {
            bailOptions.userBailFunction(function (didUserContinue) {
              me.itemSet.userContinueNotBail = didUserContinue;
              bail = !didUserContinue;
            });
          } else if (me.itemSet.userContinueNotBail == false) {
            bail = true;
          } else {
            bail = false;
          }
        }
      }

      return bail;
    }
  }, {
    key: '_redrawItems',
    value: function _redrawItems(forceRestack, lastIsVisible, margin, range) {
      var _this = this;

      var restack = forceRestack || this.stackDirty || this.isVisible && !lastIsVisible;

      // if restacking, reposition visible items vertically
      if (restack) {
        var visibleSubgroups = {};
        var subgroup = null;

        if (typeof this.itemSet.options.order === 'function') {
          (function () {
            // a custom order function
            // brute force restack of all items

            // show all items
            var me = _this;
            var limitSize = false;

            var redrawQueue = {};
            var redrawQueueLength = 0;

            util.forEach(_this.items, function (item, key) {
              if (!item.displayed && (item.isVisible(range) || !item.dom)) {
                var returnQueue = true;
                redrawQueue[key] = item.show(returnQueue);
                redrawQueueLength = redrawQueue[key].length;
                me.visibleItems.push(item);
              }
            });

            var needRedraw = redrawQueueLength > 0;
            if (needRedraw) {
              var _loop2 = function _loop2(i) {
                util.forEach(redrawQueue, function (fns) {
                  fns[i]();
                });
              };

              // redraw all regular items
              for (var i = 0; i < redrawQueueLength; i++) {
                _loop2(i);
              }
            }

            util.forEach(_this.items, function (item) {
              if (item.displayed) {
                item.repositionX(limitSize);
              }
            });

            if (_this.doInnerStack && _this.itemSet.options.stackSubgroups) {
              // Order the items within each subgroup
              for (var _subgroup in _this.subgroups) {
                visibleSubgroups[_subgroup] = _this.subgroups[_subgroup].items.slice().sort(function (a, b) {
                  return me.itemSet.options.order(a.data, b.data);
                });
              }

              stack.stackSubgroupsWithInnerStack(visibleSubgroups, margin, _this.subgroups);
            } else {
              // order all items and force a restacking
              var customOrderedItems = _this.orderedItems.byStart.slice().sort(function (a, b) {
                return me.itemSet.options.order(a.data, b.data);
              });
              _this.shouldBailStackItems = stack.stack(customOrderedItems, margin, true, _this._shouldBailItemsRedraw.bind(_this));
            }

            _this.visibleItems = _this._updateItemsInRange(_this.orderedItems, _this.visibleItems, range);
          })();
        } else {
          // no custom order function, lazy stacking
          this.visibleItems = this._updateItemsInRange(this.orderedItems, this.visibleItems, range);

          if (this.itemSet.options.stack) {
            if (this.doInnerStack && this.itemSet.options.stackSubgroups) {
              for (var _subgroup2 in this.subgroups) {
                visibleSubgroups[_subgroup2] = this.subgroups[_subgroup2].items;
              }

              stack.stackSubgroupsWithInnerStack(visibleSubgroups, margin, this.subgroups);
            } else {
              // TODO: ugly way to access options...
              this.shouldBailStackItems = stack.stack(this.visibleItems, margin, true, this._shouldBailItemsRedraw.bind(this));
            }
          } else {
            // no stacking
            stack.nostack(this.visibleItems, margin, this.subgroups, this.itemSet.options.stackSubgroups);
          }
        }

        if (this.shouldBailStackItems) {
          this.itemSet.body.emitter.emit('destroyTimeline');
        }
        this.stackDirty = false;
      }
    }
  }, {
    key: '_didResize',
    value: function _didResize(resized, height) {
      resized = util.updateProperty(this, 'height', height) || resized;
      // recalculate size of label
      var labelWidth = this.dom.inner.clientWidth;
      var labelHeight = this.dom.inner.clientHeight;
      resized = util.updateProperty(this.props.label, 'width', labelWidth) || resized;
      resized = util.updateProperty(this.props.label, 'height', labelHeight) || resized;
      return resized;
    }
  }, {
    key: '_applyGroupHeight',
    value: function _applyGroupHeight(height) {
      this.dom.background.style.height = height + 'px';
      this.dom.foreground.style.height = height + 'px';
      this.dom.label.style.height = height + 'px';
    }

    // update vertical position of items after they are re-stacked and the height of the group is calculated

  }, {
    key: '_updateItemsVerticalPosition',
    value: function _updateItemsVerticalPosition(margin) {
      for (var i = 0, ii = this.visibleItems.length; i < ii; i++) {
        var item = this.visibleItems[i];
        item.repositionY(margin);
        if (!this.isVisible && this.groupId != "__background__") {
          if (item.displayed) item.hide();
        }
      }
    }

    /**
     * Repaint this group
     * @param {{start: number, end: number}} range
     * @param {{item: {horizontal: number, vertical: number}, axis: number}} margin
     * @param {boolean} [forceRestack=false]  Force restacking of all items
     * @param {boolean} [returnQueue=false]  return the queue or if the group resized
     * @return {boolean} Returns true if the group is resized or the redraw queue if returnQueue=true
     */

  }, {
    key: 'redraw',
    value: function redraw(range, margin, forceRestack, returnQueue) {
      var _this2 = this;

      var resized = false;
      var lastIsVisible = this.isVisible;
      var height = void 0;

      var queue = [function () {
        forceRestack = _this2._didMarkerHeightChange.call(_this2) || forceRestack;
      },

      // recalculate the height of the subgroups
      this._updateSubGroupHeights.bind(this, margin),

      // calculate actual size and position
      this._calculateGroupSizeAndPosition.bind(this), function () {
        _this2.isVisible = _this2._isGroupVisible.bind(_this2)(range, margin);
      }, function () {
        _this2._redrawItems.bind(_this2)(forceRestack, lastIsVisible, margin, range);
      },

      // update subgroups
      this._updateSubgroupsSizes.bind(this), function () {
        height = _this2._calculateHeight.bind(_this2)(margin);
      },

      // calculate actual size and position again
      this._calculateGroupSizeAndPosition.bind(this), function () {
        resized = _this2._didResize.bind(_this2)(resized, height);
      }, function () {
        _this2._applyGroupHeight.bind(_this2)(height);
      }, function () {
        _this2._updateItemsVerticalPosition.bind(_this2)(margin);
      }, function () {
        if (!_this2.isVisible && _this2.height) {
          resized = false;
        }
        return resized;
      }];

      if (returnQueue) {
        return queue;
      } else {
        var result = void 0;
        queue.forEach(function (fn) {
          result = fn();
        });
        return result;
      }
    }

    /**
     * recalculate the height of the subgroups
     *
     * @param {{item: timeline.Item}} margin
     * @private
     */

  }, {
    key: '_updateSubGroupHeights',
    value: function _updateSubGroupHeights(margin) {
      if ((0, _keys2['default'])(this.subgroups).length > 0) {
        var me = this;

        this.resetSubgroups();

        util.forEach(this.visibleItems, function (item) {
          if (item.data.subgroup !== undefined) {
            me.subgroups[item.data.subgroup].height = Math.max(me.subgroups[item.data.subgroup].height, item.height + margin.item.vertical);
            me.subgroups[item.data.subgroup].visible = true;
          }
        });
      }
    }

    /**
     * check if group is visible
     *
     * @param {timeline.Range} range
     * @param {{axis: timeline.DataAxis}} margin
     * @returns {boolean} is visible
     * @private
     */

  }, {
    key: '_isGroupVisible',
    value: function _isGroupVisible(range, margin) {
      return this.top <= range.body.domProps.centerContainer.height - range.body.domProps.scrollTop + margin.axis && this.top + this.height + margin.axis >= -range.body.domProps.scrollTop;
    }

    /**
     * recalculate the height of the group
     * @param {{item: {horizontal: number, vertical: number}, axis: number}} margin
     * @returns {number} Returns the height
     * @private
     */

  }, {
    key: '_calculateHeight',
    value: function _calculateHeight(margin) {
      // recalculate the height of the group
      var height = void 0;

      var items = void 0;

      if (this.heightMode === 'fixed') {
        items = util.toArray(this.items);
      } else {
        // default or 'auto'
        items = this.visibleItems;
      }

      if (items.length > 0) {
        var min = items[0].top;
        var max = items[0].top + items[0].height;
        util.forEach(items, function (item) {
          min = Math.min(min, item.top);
          max = Math.max(max, item.top + item.height);
        });
        if (min > margin.axis) {
          // there is an empty gap between the lowest item and the axis
          var offset = min - margin.axis;
          max -= offset;
          util.forEach(items, function (item) {
            item.top -= offset;
          });
        }
        height = max + margin.item.vertical / 2;
      } else {
        height = 0;
      }
      height = Math.max(height, this.props.label.height);

      return height;
    }

    /**
     * Show this group: attach to the DOM
     */

  }, {
    key: 'show',
    value: function show() {
      if (!this.dom.label.parentNode) {
        this.itemSet.dom.labelSet.appendChild(this.dom.label);
      }

      if (!this.dom.foreground.parentNode) {
        this.itemSet.dom.foreground.appendChild(this.dom.foreground);
      }

      if (!this.dom.background.parentNode) {
        this.itemSet.dom.background.appendChild(this.dom.background);
      }

      if (!this.dom.axis.parentNode) {
        this.itemSet.dom.axis.appendChild(this.dom.axis);
      }
    }

    /**
     * Hide this group: remove from the DOM
     */

  }, {
    key: 'hide',
    value: function hide() {
      var label = this.dom.label;
      if (label.parentNode) {
        label.parentNode.removeChild(label);
      }

      var foreground = this.dom.foreground;
      if (foreground.parentNode) {
        foreground.parentNode.removeChild(foreground);
      }

      var background = this.dom.background;
      if (background.parentNode) {
        background.parentNode.removeChild(background);
      }

      var axis = this.dom.axis;
      if (axis.parentNode) {
        axis.parentNode.removeChild(axis);
      }
    }

    /**
     * Add an item to the group
     * @param {Item} item
     */

  }, {
    key: 'add',
    value: function add(item) {
      this.items[item.id] = item;
      item.setParent(this);
      this.stackDirty = true;
      // add to
      if (item.data.subgroup !== undefined) {
        this._addToSubgroup(item);
        this.orderSubgroups();
      }

      if (!this.visibleItems.includes(item)) {
        var range = this.itemSet.body.range; // TODO: not nice accessing the range like this
        this._checkIfVisible(item, this.visibleItems, range);
      }
    }
  }, {
    key: '_addToSubgroup',
    value: function _addToSubgroup(item) {
      var subgroupId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : item.data.subgroup;

      if (subgroupId != undefined && this.subgroups[subgroupId] === undefined) {
        this.subgroups[subgroupId] = {
          height: 0,
          top: 0,
          start: item.data.start,
          end: item.data.end || item.data.start,
          visible: false,
          index: this.subgroupIndex,
          items: [],
          stack: this.subgroupStackAll || this.subgroupStack[subgroupId] || false
        };
        this.subgroupIndex++;
      }

      if (new Date(item.data.start) < new Date(this.subgroups[subgroupId].start)) {
        this.subgroups[subgroupId].start = item.data.start;
      }

      var itemEnd = item.data.end || item.data.start;
      if (new Date(itemEnd) > new Date(this.subgroups[subgroupId].end)) {
        this.subgroups[subgroupId].end = itemEnd;
      }

      this.subgroups[subgroupId].items.push(item);
    }
  }, {
    key: '_updateSubgroupsSizes',
    value: function _updateSubgroupsSizes() {
      var me = this;
      if (me.subgroups) {
        var _loop3 = function _loop3(subgroup) {
          var initialEnd = me.subgroups[subgroup].items[0].data.end || me.subgroups[subgroup].items[0].data.start;
          var newStart = me.subgroups[subgroup].items[0].data.start;
          var newEnd = initialEnd - 1;

          me.subgroups[subgroup].items.forEach(function (item) {
            if (new Date(item.data.start) < new Date(newStart)) {
              newStart = item.data.start;
            }

            var itemEnd = item.data.end || item.data.start;
            if (new Date(itemEnd) > new Date(newEnd)) {
              newEnd = itemEnd;
            }
          });

          me.subgroups[subgroup].start = newStart;
          me.subgroups[subgroup].end = new Date(newEnd - 1); // -1 to compensate for colliding end to start subgroups;
        };

        for (var subgroup in me.subgroups) {
          _loop3(subgroup);
        }
      }
    }
  }, {
    key: 'orderSubgroups',
    value: function orderSubgroups() {
      if (this.subgroupOrderer !== undefined) {
        var sortArray = [];
        var subgroup = void 0;
        if (typeof this.subgroupOrderer == 'string') {
          for (var _subgroup3 in this.subgroups) {
            sortArray.push({ subgroup: _subgroup3, sortField: this.subgroups[_subgroup3].items[0].data[this.subgroupOrderer] });
          }
          sortArray.sort(function (a, b) {
            return a.sortField - b.sortField;
          });
        } else if (typeof this.subgroupOrderer == 'function') {
          for (var _subgroup4 in this.subgroups) {
            sortArray.push(this.subgroups[_subgroup4].items[0].data);
          }
          sortArray.sort(this.subgroupOrderer);
        }

        if (sortArray.length > 0) {
          for (var i = 0; i < sortArray.length; i++) {
            this.subgroups[sortArray[i].subgroup].index = i;
          }
        }
      }
    }
  }, {
    key: 'resetSubgroups',
    value: function resetSubgroups() {
      for (var subgroup in this.subgroups) {
        if (this.subgroups.hasOwnProperty(subgroup)) {
          this.subgroups[subgroup].visible = false;
          this.subgroups[subgroup].height = 0;
        }
      }
    }

    /**
     * Remove an item from the group
     * @param {Item} item
     */

  }, {
    key: 'remove',
    value: function remove(item) {
      delete this.items[item.id];
      item.setParent(null);
      this.stackDirty = true;

      // remove from visible items
      var index = this.visibleItems.indexOf(item);
      if (index != -1) this.visibleItems.splice(index, 1);

      if (item.data.subgroup !== undefined) {
        this._removeFromSubgroup(item);
        this.orderSubgroups();
      }
    }
  }, {
    key: '_removeFromSubgroup',
    value: function _removeFromSubgroup(item) {
      var subgroupId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : item.data.subgroup;

      if (subgroupId != undefined) {
        var subgroup = this.subgroups[subgroupId];
        if (subgroup) {
          var itemIndex = subgroup.items.indexOf(item);
          //  Check the item is actually in this subgroup. How should items not in the group be handled?
          if (itemIndex >= 0) {
            subgroup.items.splice(itemIndex, 1);
            if (!subgroup.items.length) {
              delete this.subgroups[subgroupId];
            } else {
              this._updateSubgroupsSizes();
            }
          }
        }
      }
    }

    /**
     * Remove an item from the corresponding DataSet
     * @param {Item} item
     */

  }, {
    key: 'removeFromDataSet',
    value: function removeFromDataSet(item) {
      this.itemSet.removeItem(item.id);
    }

    /**
     * Reorder the items
     */

  }, {
    key: 'order',
    value: function order() {
      var array = util.toArray(this.items);
      var startArray = [];
      var endArray = [];

      for (var i = 0; i < array.length; i++) {
        if (array[i].data.end !== undefined) {
          endArray.push(array[i]);
        }
        startArray.push(array[i]);
      }
      this.orderedItems = {
        byStart: startArray,
        byEnd: endArray
      };

      stack.orderByStart(this.orderedItems.byStart);
      stack.orderByEnd(this.orderedItems.byEnd);
    }

    /**
     * Update the visible items
     * @param {{byStart: Item[], byEnd: Item[]}} orderedItems   All items ordered by start date and by end date
     * @param {Item[]} oldVisibleItems                          The previously visible items.
     * @param {{start: number, end: number}} range              Visible range
     * @return {Item[]} visibleItems                            The new visible items.
     * @private
     */

  }, {
    key: '_updateItemsInRange',
    value: function _updateItemsInRange(orderedItems, oldVisibleItems, range) {
      var visibleItems = [];
      var visibleItemsLookup = {}; // we keep this to quickly look up if an item already exists in the list without using indexOf on visibleItems

      var interval = (range.end - range.start) / 4;
      var lowerBound = range.start - interval;
      var upperBound = range.end + interval;

      // this function is used to do the binary search.
      var searchFunction = function searchFunction(value) {
        if (value < lowerBound) {
          return -1;
        } else if (value <= upperBound) {
          return 0;
        } else {
          return 1;
        }
      };

      // first check if the items that were in view previously are still in view.
      // IMPORTANT: this handles the case for the items with startdate before the window and enddate after the window!
      // also cleans up invisible items.
      if (oldVisibleItems.length > 0) {
        for (var i = 0; i < oldVisibleItems.length; i++) {
          this._checkIfVisibleWithReference(oldVisibleItems[i], visibleItems, visibleItemsLookup, range);
        }
      }

      // we do a binary search for the items that have only start values.
      var initialPosByStart = util.binarySearchCustom(orderedItems.byStart, searchFunction, 'data', 'start');

      // trace the visible items from the inital start pos both ways until an invisible item is found, we only look at the start values.
      this._traceVisible(initialPosByStart, orderedItems.byStart, visibleItems, visibleItemsLookup, function (item) {
        return item.data.start < lowerBound || item.data.start > upperBound;
      });

      // if the window has changed programmatically without overlapping the old window, the ranged items with start < lowerBound and end > upperbound are not shown.
      // We therefore have to brute force check all items in the byEnd list
      if (this.checkRangedItems == true) {
        this.checkRangedItems = false;
        for (i = 0; i < orderedItems.byEnd.length; i++) {
          this._checkIfVisibleWithReference(orderedItems.byEnd[i], visibleItems, visibleItemsLookup, range);
        }
      } else {
        // we do a binary search for the items that have defined end times.
        var initialPosByEnd = util.binarySearchCustom(orderedItems.byEnd, searchFunction, 'data', 'end');

        // trace the visible items from the inital start pos both ways until an invisible item is found, we only look at the end values.
        this._traceVisible(initialPosByEnd, orderedItems.byEnd, visibleItems, visibleItemsLookup, function (item) {
          return item.data.end < lowerBound || item.data.end > upperBound;
        });
      }

      var redrawQueue = {};
      var redrawQueueLength = 0;

      for (i = 0; i < visibleItems.length; i++) {
        var item = visibleItems[i];
        if (!item.displayed) {
          var returnQueue = true;
          redrawQueue[i] = item.redraw(returnQueue);
          redrawQueueLength = redrawQueue[i].length;
        }
      }

      var needRedraw = redrawQueueLength > 0;
      if (needRedraw) {
        var _loop4 = function _loop4(j) {
          util.forEach(redrawQueue, function (fns) {
            fns[j]();
          });
        };

        // redraw all regular items
        for (var j = 0; j < redrawQueueLength; j++) {
          _loop4(j);
        }
      }

      for (i = 0; i < visibleItems.length; i++) {
        visibleItems[i].repositionX();
      }
      return visibleItems;
    }
  }, {
    key: '_traceVisible',
    value: function _traceVisible(initialPos, items, visibleItems, visibleItemsLookup, breakCondition) {
      if (initialPos != -1) {
        var i = void 0;
        var item = void 0;
        for (i = initialPos; i >= 0; i--) {
          item = items[i];
          if (breakCondition(item)) {
            break;
          } else {
            if (visibleItemsLookup[item.id] === undefined) {
              visibleItemsLookup[item.id] = true;
              visibleItems.push(item);
            }
          }
        }

        for (i = initialPos + 1; i < items.length; i++) {
          item = items[i];
          if (breakCondition(item)) {
            break;
          } else {
            if (visibleItemsLookup[item.id] === undefined) {
              visibleItemsLookup[item.id] = true;
              visibleItems.push(item);
            }
          }
        }
      }
    }

    /**
     * this function is very similar to the _checkIfInvisible() but it does not
     * return booleans, hides the item if it should not be seen and always adds to
     * the visibleItems.
     * this one is for brute forcing and hiding.
     *
     * @param {Item} item
     * @param {Array} visibleItems
     * @param {{start:number, end:number}} range
     * @private
     */

  }, {
    key: '_checkIfVisible',
    value: function _checkIfVisible(item, visibleItems, range) {
      if (item.isVisible(range)) {
        if (!item.displayed) item.show();
        // reposition item horizontally
        item.repositionX();
        visibleItems.push(item);
      } else {
        if (item.displayed) item.hide();
      }
    }

    /**
     * this function is very similar to the _checkIfInvisible() but it does not
     * return booleans, hides the item if it should not be seen and always adds to
     * the visibleItems.
     * this one is for brute forcing and hiding.
     *
     * @param {Item} item
     * @param {Array.<timeline.Item>} visibleItems
     * @param {Object<number, boolean>} visibleItemsLookup
     * @param {{start:number, end:number}} range
     * @private
     */

  }, {
    key: '_checkIfVisibleWithReference',
    value: function _checkIfVisibleWithReference(item, visibleItems, visibleItemsLookup, range) {
      if (item.isVisible(range)) {
        if (visibleItemsLookup[item.id] === undefined) {
          visibleItemsLookup[item.id] = true;
          visibleItems.push(item);
        }
      } else {
        if (item.displayed) item.hide();
      }
    }
  }, {
    key: 'changeSubgroup',
    value: function changeSubgroup(item, oldSubgroup, newSubgroup) {
      this._removeFromSubgroup(item, oldSubgroup);
      this._addToSubgroup(item, newSubgroup);
      this.orderSubgroups();
    }
  }]);
  return Group;
}();

exports['default'] = Group;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Group2 = __webpack_require__(51);

var _Group3 = _interopRequireDefault(_Group2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * @constructor BackgroundGroup
 * @extends Group
 */
var BackgroundGroup = function (_Group) {
  (0, _inherits3['default'])(BackgroundGroup, _Group);

  /**
  * @param {number | string} groupId
  * @param {Object} data
  * @param {ItemSet} itemSet
  */
  function BackgroundGroup(groupId, data, itemSet) {
    (0, _classCallCheck3['default'])(this, BackgroundGroup);

    // Group.call(this, groupId, data, itemSet);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (BackgroundGroup.__proto__ || (0, _getPrototypeOf2['default'])(BackgroundGroup)).call(this, groupId, data, itemSet));

    _this.width = 0;
    _this.height = 0;
    _this.top = 0;
    _this.left = 0;
    return _this;
  }

  /**
   * Repaint this group
   * @param {{start: number, end: number}} range
   * @param {{item: {horizontal: number, vertical: number}, axis: number}} margin
   * @param {boolean} [forceRestack=false]  Force restacking of all items
   * @return {boolean} Returns true if the group is resized
   */


  (0, _createClass3['default'])(BackgroundGroup, [{
    key: 'redraw',
    value: function redraw(range, margin, forceRestack) {
      // eslint-disable-line no-unused-vars
      var resized = false;

      this.visibleItems = this._updateItemsInRange(this.orderedItems, this.visibleItems, range);

      // calculate actual size
      this.width = this.dom.background.offsetWidth;

      // apply new height (just always zero for BackgroundGroup
      this.dom.background.style.height = '0';

      // update vertical position of items after they are re-stacked and the height of the group is calculated
      for (var i = 0, ii = this.visibleItems.length; i < ii; i++) {
        var item = this.visibleItems[i];
        item.repositionY(margin);
      }

      return resized;
    }

    /**
     * Show this group: attach to the DOM
     */

  }, {
    key: 'show',
    value: function show() {
      if (!this.dom.background.parentNode) {
        this.itemSet.dom.background.appendChild(this.dom.background);
      }
    }
  }]);
  return BackgroundGroup;
}(_Group3['default']);

exports['default'] = BackgroundGroup;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Item2 = __webpack_require__(26);

var _Item3 = _interopRequireDefault(_Item2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * @constructor RangeItem
 * @extends Item
 */
var RangeItem = function (_Item) {
  (0, _inherits3['default'])(RangeItem, _Item);

  /**
  * @param {Object} data             Object containing parameters start, end
  *                                  content, className.
  * @param {{toScreen: function, toTime: function}} conversion
  *                                  Conversion functions from time to screen and vice versa
  * @param {Object} [options]        Configuration options
  *                                  // TODO: describe options
  */
  function RangeItem(data, conversion, options) {
    (0, _classCallCheck3['default'])(this, RangeItem);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (RangeItem.__proto__ || (0, _getPrototypeOf2['default'])(RangeItem)).call(this));

    _this.props = {
      content: {
        width: 0
      }
    };
    _this.overflow = false; // if contents can overflow (css styling), this flag is set to true
    _this.options = options;
    // validate data
    if (data) {
      if (data.start == undefined) {
        throw new Error('Property "start" missing in item ' + data.id);
      }
      if (data.end == undefined) {
        throw new Error('Property "end" missing in item ' + data.id);
      }
    }

    _Item3['default'].call(_this, data, conversion, options);
    return _this;
  }

  /**
   * Check whether this item is visible inside given range
   *
   * @param {timeline.Range} range with a timestamp for start and end
   * @returns {boolean} True if visible
   */


  (0, _createClass3['default'])(RangeItem, [{
    key: 'isVisible',
    value: function isVisible(range) {
      // determine visibility
      return this.data.start < range.end && this.data.end > range.start;
    }
  }, {
    key: '_createDomElement',
    value: function _createDomElement() {
      if (!this.dom) {
        // create DOM
        this.dom = {};

        // background box
        this.dom.box = document.createElement('div');
        // className is updated in redraw()

        // frame box (to prevent the item contents from overflowing)
        this.dom.frame = document.createElement('div');
        this.dom.frame.className = 'timeline-item-overflow';
        this.dom.box.appendChild(this.dom.frame);

        // visible frame box (showing the frame that is always visible)
        this.dom.visibleFrame = document.createElement('div');
        this.dom.visibleFrame.className = 'timeline-item-visible-frame';
        this.dom.box.appendChild(this.dom.visibleFrame);

        // contents box
        this.dom.content = document.createElement('div');
        this.dom.content.className = 'timeline-item-content';
        this.dom.frame.appendChild(this.dom.content);

        // attach this item as attribute
        this.dom.box['timeline-item'] = this;

        this.dirty = true;
      }
    }
  }, {
    key: '_appendDomElement',
    value: function _appendDomElement() {
      if (!this.parent) {
        throw new Error('Cannot redraw item: no parent attached');
      }
      if (!this.dom.box.parentNode) {
        var foreground = this.parent.dom.foreground;
        if (!foreground) {
          throw new Error('Cannot redraw item: parent has no foreground container element');
        }
        foreground.appendChild(this.dom.box);
      }
      this.displayed = true;
    }
  }, {
    key: '_updateDirtyDomComponents',
    value: function _updateDirtyDomComponents() {
      // update dirty DOM. An item is marked dirty when:
      // - the item is not yet rendered
      // - the item's data is changed
      // - the item is selected/deselected
      if (this.dirty) {
        this._updateContents(this.dom.content);
        this._updateDataAttributes(this.dom.box);
        this._updateStyle(this.dom.box);

        var editable = this.editable.updateTime || this.editable.updateGroup;

        // update class
        var className = (this.data.className ? ' ' + this.data.className : '') + (this.selected ? ' timeline-selected' : '') + (editable ? ' timeline-editable' : ' timeline-readonly');
        this.dom.box.className = this.baseClassName + className;

        // turn off max-width to be able to calculate the real width
        // this causes an extra browser repaint/reflow, but so be it
        this.dom.content.style.maxWidth = 'none';
      }
    }
  }, {
    key: '_getDomComponentsSizes',
    value: function _getDomComponentsSizes() {
      // determine from css whether this box has overflow
      this.overflow = window.getComputedStyle(this.dom.frame).overflow !== 'hidden';
      return {
        content: {
          width: this.dom.content.offsetWidth
        },
        box: {
          height: this.dom.box.offsetHeight
        }
      };
    }
  }, {
    key: '_updateDomComponentsSizes',
    value: function _updateDomComponentsSizes(sizes) {
      this.props.content.width = sizes.content.width;
      this.height = sizes.box.height;
      this.dom.content.style.maxWidth = '';
      this.dirty = false;
    }
  }, {
    key: '_repaintDomAdditionals',
    value: function _repaintDomAdditionals() {
      this._repaintOnItemUpdateTimeTooltip(this.dom.box);
      this._repaintDeleteButton(this.dom.box);
      this._repaintDragCenter();
      this._repaintDragLeft();
      this._repaintDragRight();
    }

    /**
     * Repaint the item
     * @param {boolean} [returnQueue=false]  return the queue
     * @return {boolean} the redraw queue if returnQueue=true
     */

  }, {
    key: 'redraw',
    value: function redraw(returnQueue) {
      var _this2 = this;

      var sizes = void 0;
      var queue = [
      // create item DOM
      this._createDomElement.bind(this),

      // append DOM to parent DOM
      this._appendDomElement.bind(this),

      // update dirty DOM 
      this._updateDirtyDomComponents.bind(this), function () {
        if (_this2.dirty) {
          sizes = _this2._getDomComponentsSizes.bind(_this2)();
        }
      }, function () {
        if (_this2.dirty) {
          _this2._updateDomComponentsSizes.bind(_this2)(sizes);
        }
      },

      // repaint DOM additionals
      this._repaintDomAdditionals.bind(this)];

      if (returnQueue) {
        return queue;
      } else {
        var result = void 0;
        queue.forEach(function (fn) {
          result = fn();
        });
        return result;
      }
    }

    /**
     * Show the item in the DOM (when not already visible). The items DOM will
     * be created when needed.
     * @param {boolean} [returnQueue=false]  whether to return a queue of functions to execute instead of just executing them
     * @return {boolean} the redraw queue if returnQueue=true
     */

  }, {
    key: 'show',
    value: function show(returnQueue) {
      if (!this.displayed) {
        return this.redraw(returnQueue);
      }
    }

    /**
     * Hide the item from the DOM (when visible)
     */

  }, {
    key: 'hide',
    value: function hide() {
      if (this.displayed) {
        var box = this.dom.box;

        if (box.parentNode) {
          box.parentNode.removeChild(box);
        }

        this.displayed = false;
      }
    }

    /**
     * Reposition the item horizontally
     * @param {boolean} [limitSize=true] If true (default), the width of the range
     *                                   item will be limited, as the browser cannot
     *                                   display very wide divs. This means though
     *                                   that the applied left and width may
     *                                   not correspond to the ranges start and end
     * @Override
     */

  }, {
    key: 'repositionX',
    value: function repositionX(limitSize) {
      var parentWidth = this.parent.width;
      var start = this.conversion.toScreen(this.data.start);
      var end = this.conversion.toScreen(this.data.end);
      var align = this.data.align === undefined ? this.options.align : this.data.align;
      var contentStartPosition = void 0;
      var contentWidth = void 0;

      // limit the width of the range, as browsers cannot draw very wide divs
      // unless limitSize: false is explicitly set in item data
      if (this.data.limitSize !== false && (limitSize === undefined || limitSize === true)) {
        if (start < -parentWidth) {
          start = -parentWidth;
        }
        if (end > 2 * parentWidth) {
          end = 2 * parentWidth;
        }
      }

      // add 0.5 to compensate floating-point values rounding
      var boxWidth = Math.max(end - start + 0.5, 1);

      if (this.overflow) {
        if (this.options.rtl) {
          this.right = start;
        } else {
          this.left = start;
        }
        this.width = boxWidth + this.props.content.width;
        contentWidth = this.props.content.width;

        // Note: The calculation of width is an optimistic calculation, giving
        //       a width which will not change when moving the Timeline
        //       So no re-stacking needed, which is nicer for the eye;
      } else {
        if (this.options.rtl) {
          this.right = start;
        } else {
          this.left = start;
        }
        this.width = boxWidth;
        contentWidth = Math.min(end - start, this.props.content.width);
      }

      if (this.options.rtl) {
        this.dom.box.style.right = this.right + 'px';
      } else {
        this.dom.box.style.left = this.left + 'px';
      }
      this.dom.box.style.width = boxWidth + 'px';

      switch (align) {
        case 'left':
          if (this.options.rtl) {
            this.dom.content.style.right = '0';
          } else {
            this.dom.content.style.left = '0';
          }
          break;

        case 'right':
          if (this.options.rtl) {
            this.dom.content.style.right = Math.max(boxWidth - contentWidth, 0) + 'px';
          } else {
            this.dom.content.style.left = Math.max(boxWidth - contentWidth, 0) + 'px';
          }
          break;

        case 'center':
          if (this.options.rtl) {
            this.dom.content.style.right = Math.max((boxWidth - contentWidth) / 2, 0) + 'px';
          } else {
            this.dom.content.style.left = Math.max((boxWidth - contentWidth) / 2, 0) + 'px';
          }

          break;

        default:
          // 'auto'
          // when range exceeds left of the window, position the contents at the left of the visible area
          if (this.overflow) {
            if (end > 0) {
              contentStartPosition = Math.max(-start, 0);
            } else {
              contentStartPosition = -contentWidth; // ensure it's not visible anymore
            }
          } else {
            if (start < 0) {
              contentStartPosition = -start;
            } else {
              contentStartPosition = 0;
            }
          }
          if (this.options.rtl) {
            this.dom.content.style.right = contentStartPosition + 'px';
          } else {
            this.dom.content.style.left = contentStartPosition + 'px';
            // this.dom.content.style.width = `calc(100% - ${contentStartPosition}px)`;
          }
      }
    }

    /**
     * Reposition the item vertically
     * @Override
     */

  }, {
    key: 'repositionY',
    value: function repositionY() {
      var orientation = this.options.orientation.item;
      var box = this.dom.box;

      if (orientation == 'top') {
        box.style.top = this.top + 'px';
      } else {
        box.style.top = this.parent.height - this.top - this.height + 'px';
      }
    }

    /**
     * Repaint a drag area on the left side of the range when the range is selected
     * @protected
     */

  }, {
    key: '_repaintDragLeft',
    value: function _repaintDragLeft() {
      if ((this.selected || this.options.itemsAlwaysDraggable.range) && this.options.editable.updateTime && !this.dom.dragLeft) {
        // create and show drag area
        var dragLeft = document.createElement('div');
        dragLeft.className = 'timeline-drag-left';
        dragLeft.dragLeftItem = this;

        this.dom.box.appendChild(dragLeft);
        this.dom.dragLeft = dragLeft;
      } else if (!this.selected && !this.options.itemsAlwaysDraggable.range && this.dom.dragLeft) {
        // delete drag area
        if (this.dom.dragLeft.parentNode) {
          this.dom.dragLeft.parentNode.removeChild(this.dom.dragLeft);
        }
        this.dom.dragLeft = null;
      }
    }

    /**
     * Repaint a drag area on the right side of the range when the range is selected
     * @protected
     */

  }, {
    key: '_repaintDragRight',
    value: function _repaintDragRight() {
      if ((this.selected || this.options.itemsAlwaysDraggable.range) && this.options.editable.updateTime && !this.dom.dragRight) {
        // create and show drag area
        var dragRight = document.createElement('div');
        dragRight.className = 'timeline-drag-right';
        dragRight.dragRightItem = this;

        this.dom.box.appendChild(dragRight);
        this.dom.dragRight = dragRight;
      } else if (!this.selected && !this.options.itemsAlwaysDraggable.range && this.dom.dragRight) {
        // delete drag area
        if (this.dom.dragRight.parentNode) {
          this.dom.dragRight.parentNode.removeChild(this.dom.dragRight);
        }
        this.dom.dragRight = null;
      }
    }
  }]);
  return RangeItem;
}(_Item3['default']);

RangeItem.prototype.baseClassName = 'timeline-item timeline-range';

exports['default'] = RangeItem;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(85);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(13) && !__webpack_require__(23)(function () {
  return Object.defineProperty(__webpack_require__(56)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
var document = __webpack_require__(9).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(14);
var toIObject = __webpack_require__(21);
var arrayIndexOf = __webpack_require__(88)(false);
var IE_PROTO = __webpack_require__(39)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(17);
var core = __webpack_require__(3);
var fails = __webpack_require__(23);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
var global = __webpack_require__(9);
var hide = __webpack_require__(18);
var Iterators = __webpack_require__(31);
var TO_STRING_TAG = __webpack_require__(11)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(29);
var $export = __webpack_require__(17);
var redefine = __webpack_require__(61);
var hide = __webpack_require__(18);
var Iterators = __webpack_require__(31);
var $iterCreate = __webpack_require__(98);
var setToStringTag = __webpack_require__(43);
var getPrototypeOf = __webpack_require__(62);
var ITERATOR = __webpack_require__(11)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(14);
var toObject = __webpack_require__(42);
var IE_PROTO = __webpack_require__(39)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(99)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(60)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 64 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(57);
var hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(46);
var createDesc = __webpack_require__(27);
var toIObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(34);
var has = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(55);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(13) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareElements = prepareElements;
exports.cleanupElements = cleanupElements;
exports.resetElements = resetElements;
exports.getSVGElement = getSVGElement;
exports.getDOMElement = getDOMElement;
exports.drawPoint = drawPoint;
exports.drawBar = drawBar;
// DOM utility methods

/**
 * this prepares the JSON container for allocating SVG elements
 * @param {Object} JSONcontainer
 * @private
 */
function prepareElements(JSONcontainer) {
  // cleanup the redundant svgElements;
  for (var elementType in JSONcontainer) {
    if (JSONcontainer.hasOwnProperty(elementType)) {
      JSONcontainer[elementType].redundant = JSONcontainer[elementType].used;
      JSONcontainer[elementType].used = [];
    }
  }
}

/**
 * this cleans up all the unused SVG elements. By asking for the parentNode, we only need to supply the JSON container from
 * which to remove the redundant elements.
 *
 * @param {Object} JSONcontainer
 * @private
 */
function cleanupElements(JSONcontainer) {
  // cleanup the redundant svgElements;
  for (var elementType in JSONcontainer) {
    if (JSONcontainer.hasOwnProperty(elementType)) {
      if (JSONcontainer[elementType].redundant) {
        for (var i = 0; i < JSONcontainer[elementType].redundant.length; i++) {
          JSONcontainer[elementType].redundant[i].parentNode.removeChild(JSONcontainer[elementType].redundant[i]);
        }
        JSONcontainer[elementType].redundant = [];
      }
    }
  }
}

/**
 * Ensures that all elements are removed first up so they can be recreated cleanly
 * @param {Object} JSONcontainer
 */
function resetElements(JSONcontainer) {
  exports.prepareElements(JSONcontainer);
  exports.cleanupElements(JSONcontainer);
  exports.prepareElements(JSONcontainer);
}

/**
 * Allocate or generate an SVG element if needed. Store a reference to it in the JSON container and draw it in the svgContainer
 * the JSON container and the SVG container have to be supplied so other svg containers (like the legend) can use this.
 *
 * @param {string} elementType
 * @param {Object} JSONcontainer
 * @param {Object} svgContainer
 * @returns {Element}
 * @private
 */
function getSVGElement(elementType, JSONcontainer, svgContainer) {
  var element = void 0;
  // allocate SVG element, if it doesnt yet exist, create one.
  if (JSONcontainer.hasOwnProperty(elementType)) {
    // this element has been created before
    // check if there is an redundant element
    if (JSONcontainer[elementType].redundant.length > 0) {
      element = JSONcontainer[elementType].redundant[0];
      JSONcontainer[elementType].redundant.shift();
    } else {
      // create a new element and add it to the SVG
      element = document.createElementNS('http://www.w3.org/2000/svg', elementType);
      svgContainer.appendChild(element);
    }
  } else {
    // create a new element and add it to the SVG, also create a new object in the svgElements to keep track of it.
    element = document.createElementNS('http://www.w3.org/2000/svg', elementType);
    JSONcontainer[elementType] = { used: [], redundant: [] };
    svgContainer.appendChild(element);
  }
  JSONcontainer[elementType].used.push(element);
  return element;
}

/**
 * Allocate or generate an SVG element if needed. Store a reference to it in the JSON container and draw it in the svgContainer
 * the JSON container and the SVG container have to be supplied so other svg containers (like the legend) can use this.
 *
 * @param {string} elementType
 * @param {Object} JSONcontainer
 * @param {Element} DOMContainer
 * @param {Element} insertBefore
 * @returns {*}
 */
function getDOMElement(elementType, JSONcontainer, DOMContainer, insertBefore) {
  var element = void 0;
  // allocate DOM element, if it doesnt yet exist, create one.
  if (JSONcontainer.hasOwnProperty(elementType)) {
    // this element has been created before
    // check if there is an redundant element
    if (JSONcontainer[elementType].redundant.length > 0) {
      element = JSONcontainer[elementType].redundant[0];
      JSONcontainer[elementType].redundant.shift();
    } else {
      // create a new element and add it to the SVG
      element = document.createElement(elementType);
      if (insertBefore !== undefined) {
        DOMContainer.insertBefore(element, insertBefore);
      } else {
        DOMContainer.appendChild(element);
      }
    }
  } else {
    // create a new element and add it to the SVG, also create a new object in the svgElements to keep track of it.
    element = document.createElement(elementType);
    JSONcontainer[elementType] = { used: [], redundant: [] };
    if (insertBefore !== undefined) {
      DOMContainer.insertBefore(element, insertBefore);
    } else {
      DOMContainer.appendChild(element);
    }
  }
  JSONcontainer[elementType].used.push(element);
  return element;
}

/**
 * Draw a point object. This is a separate function because it can also be called by the legend.
 * The reason the JSONcontainer and the target SVG svgContainer have to be supplied is so the legend can use these functions
 * as well.
 *
 * @param {number} x
 * @param {number} y
 * @param {Object} groupTemplate: A template containing the necessary information to draw the datapoint e.g., {style: 'circle', size: 5, className: 'className' }
 * @param {Object} JSONcontainer
 * @param {Object} svgContainer
 * @param {Object} labelObj
 * @returns {timeline.PointItem}
 */
function drawPoint(x, y, groupTemplate, JSONcontainer, svgContainer, labelObj) {
  var point = void 0;
  if (groupTemplate.style == 'circle') {
    point = exports.getSVGElement('circle', JSONcontainer, svgContainer);
    point.setAttributeNS(null, "cx", x);
    point.setAttributeNS(null, "cy", y);
    point.setAttributeNS(null, "r", 0.5 * groupTemplate.size);
  } else {
    point = exports.getSVGElement('rect', JSONcontainer, svgContainer);
    point.setAttributeNS(null, "x", x - 0.5 * groupTemplate.size);
    point.setAttributeNS(null, "y", y - 0.5 * groupTemplate.size);
    point.setAttributeNS(null, "width", groupTemplate.size);
    point.setAttributeNS(null, "height", groupTemplate.size);
  }

  if (groupTemplate.styles !== undefined) {
    point.setAttributeNS(null, "style", groupTemplate.styles);
  }
  point.setAttributeNS(null, "class", groupTemplate.className + ' timeline-point');
  //handle label


  if (labelObj) {
    var label = exports.getSVGElement('text', JSONcontainer, svgContainer);
    if (labelObj.xOffset) {
      x = x + labelObj.xOffset;
    }

    if (labelObj.yOffset) {
      y = y + labelObj.yOffset;
    }
    if (labelObj.content) {
      label.textContent = labelObj.content;
    }

    if (labelObj.className) {
      label.setAttributeNS(null, "class", labelObj.className + ' timeline-label');
    }
    label.setAttributeNS(null, "x", x);
    label.setAttributeNS(null, "y", y);
  }

  return point;
}

/**
 * draw a bar SVG element centered on the X coordinate
 *
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {string} className
 * @param {Object} JSONcontainer
 * @param {Object} svgContainer
 * @param {string} style
 */
function drawBar(x, y, width, height, className, JSONcontainer, svgContainer, style) {
  if (height != 0) {
    if (height < 0) {
      height *= -1;
      y -= height;
    }
    var rect = exports.getSVGElement('rect', JSONcontainer, svgContainer);
    rect.setAttributeNS(null, "x", x - 0.5 * width);
    rect.setAttributeNS(null, "y", y);
    rect.setAttributeNS(null, "width", width);
    rect.setAttributeNS(null, "height", height);
    rect.setAttributeNS(null, "class", className);
    if (style) {
      rect.setAttributeNS(null, "style", style);
    }
  }
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(24);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * A queue
 * @param {Object} options
 *            Available options:
 *            - delay: number    When provided, the queue will be flushed
 *                               automatically after an inactivity of this delay
 *                               in milliseconds.
 *                               Default value is null.
 *            - max: number      When the queue exceeds the given maximum number
 *                               of entries, the queue is flushed automatically.
 *                               Default value of max is Infinity.
 * @constructor Queue
 */
var Queue = function () {
  function Queue(options) {
    (0, _classCallCheck3['default'])(this, Queue);

    // options
    this.delay = null;
    this.max = Infinity;

    // properties
    this._queue = [];
    this._timeout = null;
    this._extended = null;

    this.setOptions(options);
  }

  /**
   * Update the configuration of the queue
   * @param {Object} options
   *            Available options:
   *            - delay: number    When provided, the queue will be flushed
   *                               automatically after an inactivity of this delay
   *                               in milliseconds.
   *                               Default value is null.
   *            - max: number      When the queue exceeds the given maximum number
   *                               of entries, the queue is flushed automatically.
   *                               Default value of max is Infinity.
   */


  (0, _createClass3['default'])(Queue, [{
    key: 'setOptions',
    value: function setOptions(options) {
      if (options && typeof options.delay !== 'undefined') {
        this.delay = options.delay;
      }
      if (options && typeof options.max !== 'undefined') {
        this.max = options.max;
      }

      this._flushIfNeeded();
    }

    /**
     * Extend an object with queuing functionality.
     * The object will be extended with a function flush, and the methods provided
     * in options.replace will be replaced with queued ones.
     * @param {Object} object
     * @param {Object} options
     *            Available options:
     *            - replace: Array.<string>
     *                               A list with method names of the methods
     *                               on the object to be replaced with queued ones.
     *            - delay: number    When provided, the queue will be flushed
     *                               automatically after an inactivity of this delay
     *                               in milliseconds.
     *                               Default value is null.
     *            - max: number      When the queue exceeds the given maximum number
     *                               of entries, the queue is flushed automatically.
     *                               Default value of max is Infinity.
     * @return {Queue} Returns the created queue
     */

  }, {
    key: 'destroy',


    /**
     * Destroy the queue. The queue will first flush all queued actions, and in
     * case it has extended an object, will restore the original object.
     */
    value: function destroy() {
      this.flush();

      if (this._extended) {
        var object = this._extended.object;
        var methods = this._extended.methods;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3['default'])(methods), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var method = _step.value;

            if (method.original) {
              object[method.name] = method.original;
            } else {
              delete object[method.name];
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this._extended = null;
      }
    }

    /**
     * Replace a method on an object with a queued version
     * @param {Object} object   Object having the method
     * @param {string} method   The method name
     */

  }, {
    key: 'replace',
    value: function replace(object, method) {
      var me = this;
      var original = object[method];
      if (!original) {
        throw new Error('Method ' + method + ' undefined');
      }

      object[method] = function () {
        // create an Array with the arguments
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args[i] = arguments[i];
        }

        // add this call to the queue
        me.queue({
          args: args,
          fn: original,
          context: this
        });
      };
    }

    /**
     * Queue a call
     * @param {function | {fn: function, args: Array} | {fn: function, args: Array, context: Object}} entry
     */

  }, {
    key: 'queue',
    value: function queue(entry) {
      if (typeof entry === 'function') {
        this._queue.push({ fn: entry });
      } else {
        this._queue.push(entry);
      }

      this._flushIfNeeded();
    }

    /**
     * Check whether the queue needs to be flushed
     * @private
     */

  }, {
    key: '_flushIfNeeded',
    value: function _flushIfNeeded() {
      // flush when the maximum is exceeded.
      if (this._queue.length > this.max) {
        this.flush();
      }

      // flush after a period of inactivity when a delay is configured
      clearTimeout(this._timeout);
      if (this.queue.length > 0 && typeof this.delay === 'number') {
        var me = this;
        this._timeout = setTimeout(function () {
          me.flush();
        }, this.delay);
      }
    }

    /**
     * Flush all queued calls
     */

  }, {
    key: 'flush',
    value: function flush() {
      while (this._queue.length > 0) {
        var entry = this._queue.shift();
        entry.fn.apply(entry.context || entry.fn, entry.args || []);
      }
    }
  }], [{
    key: 'extend',
    value: function extend(object, options) {
      var queue = new Queue(options);

      if (object.flush !== undefined) {
        throw new Error('Target object already has a property flush');
      }
      object.flush = function () {
        queue.flush();
      };

      var methods = [{
        name: 'flush',
        original: undefined
      }];

      if (options && options.replace) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3['default'])(options.replace), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var name = _step2.value;

            methods.push({
              name: name,
              original: object[name]
            });
            queue.replace(object, name);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
              _iterator2['return']();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      queue._extended = {
        object: object,
        methods: methods
      };

      return queue;
    }
  }]);
  return Queue;
}();

exports['default'] = Queue;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(22);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _Component2 = __webpack_require__(15);

var _Component3 = _interopRequireDefault(_Component2);

var _DateUtil = __webpack_require__(25);

var DateUtil = _interopRequireWildcard(_DateUtil);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * A Range controls a numeric range with a start and end value.
 * The Range adjusts the range based on mouse events or programmatic changes,
 * and triggers events when the range is changing or has been changed.
 */
var Range = function (_Component) {
  (0, _inherits3['default'])(Range, _Component);

  /**
  * @param {{dom: Object, domProps: Object, emitter: Emitter}} body
  * @param {Object} [options]    See description at Range.setOptions
  * @constructor Range
  * @extends Component
  */
  function Range(body, options) {
    (0, _classCallCheck3['default'])(this, Range);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Range.__proto__ || (0, _getPrototypeOf2['default'])(Range)).call(this));

    var now = (0, _moment2['default'])().hours(0).minutes(0).seconds(0).milliseconds(0);
    var start = now.clone().add(-3, 'days').valueOf();
    var end = now.clone().add(3, 'days').valueOf();
    _this.millisecondsPerPixelCache = undefined;

    if (options === undefined) {
      _this.start = start;
      _this.end = end;
    } else {
      _this.start = options.start || start;
      _this.end = options.end || end;
    }

    _this.rolling = false;

    _this.body = body;
    _this.deltaDifference = 0;
    _this.scaleOffset = 0;
    _this.startToFront = false;
    _this.endToFront = true;

    // default options
    _this.defaultOptions = {
      rtl: false,
      start: null,
      end: null,
      moment: _moment2['default'],
      direction: 'horizontal', // 'horizontal' or 'vertical'
      moveable: true,
      zoomable: true,
      min: null,
      max: null,
      zoomMin: 10, // milliseconds
      zoomMax: 1000 * 60 * 60 * 24 * 365 * 10000, // milliseconds
      rollingMode: {
        follow: false,
        offset: 0.5
      }
    };
    _this.options = util.extend({}, _this.defaultOptions);
    _this.props = {
      touch: {}
    };
    _this.animationTimer = null;

    // drag listeners for dragging
    _this.body.emitter.on('panstart', _this._onDragStart.bind(_this));
    _this.body.emitter.on('panmove', _this._onDrag.bind(_this));
    _this.body.emitter.on('panend', _this._onDragEnd.bind(_this));

    // mouse wheel for zooming
    _this.body.emitter.on('mousewheel', _this._onMouseWheel.bind(_this));

    // pinch to zoom
    _this.body.emitter.on('touch', _this._onTouch.bind(_this));
    _this.body.emitter.on('pinch', _this._onPinch.bind(_this));

    // on click of rolling mode button
    _this.body.dom.rollingModeBtn.addEventListener('click', _this.startRolling.bind(_this));

    _this.setOptions(options);
    return _this;
  }

  /**
   * Set options for the range controller
   * @param {Object} options      Available options:
   *                              {number | Date | String} start  Start date for the range
   *                              {number | Date | String} end    End date for the range
   *                              {number} min    Minimum value for start
   *                              {number} max    Maximum value for end
   *                              {number} zoomMin    Set a minimum value for
   *                                                  (end - start).
   *                              {number} zoomMax    Set a maximum value for
   *                                                  (end - start).
   *                              {boolean} moveable Enable moving of the range
   *                                                 by dragging. True by default
   *                              {boolean} zoomable Enable zooming of the range
   *                                                 by pinching/scrolling. True by default
   */


  (0, _createClass3['default'])(Range, [{
    key: 'setOptions',
    value: function setOptions(options) {
      if (options) {
        // copy the options that we know
        var fields = ['animation', 'direction', 'min', 'max', 'zoomMin', 'zoomMax', 'moveable', 'zoomable', 'moment', 'activate', 'hiddenDates', 'zoomKey', 'rtl', 'showCurrentTime', 'rollingMode', 'horizontalScroll'];
        util.selectiveExtend(fields, this.options, options);

        if (options.rollingMode && options.rollingMode.follow) {
          this.startRolling();
        }
        if ('start' in options || 'end' in options) {
          // apply a new range. both start and end are optional
          this.setRange(options.start, options.end);
        }
      }
    }

    /**
     * Start auto refreshing the current time bar
     */

  }, {
    key: 'startRolling',
    value: function startRolling() {
      var me = this;

      /**
       *  Updates the current time.
       */
      function update() {
        me.stopRolling();
        me.rolling = true;

        var interval = me.end - me.start;
        var t = util.convert(new Date(), 'Date').valueOf();
        var rollingModeOffset = me.options.rollingMode && me.options.rollingMode.offset || 0.5;

        var start = t - interval * rollingModeOffset;
        var end = t + interval * (1 - rollingModeOffset);

        var options = {
          animation: false
        };
        me.setRange(start, end, options);

        // determine interval to refresh
        var scale = me.conversion(me.body.domProps.center.width).scale;
        interval = 1 / scale / 10;
        if (interval < 30) interval = 30;
        if (interval > 1000) interval = 1000;

        me.body.dom.rollingModeBtn.style.visibility = "hidden";
        // start a renderTimer to adjust for the new time
        me.currentTimeTimer = setTimeout(update, interval);
      }

      update();
    }

    /**
     * Stop auto refreshing the current time bar
     */

  }, {
    key: 'stopRolling',
    value: function stopRolling() {
      if (this.currentTimeTimer !== undefined) {
        clearTimeout(this.currentTimeTimer);
        this.rolling = false;
        this.body.dom.rollingModeBtn.style.visibility = "visible";
      }
    }

    /**
     * Set a new start and end range
     * @param {Date | number | string} [start]
     * @param {Date | number | string} [end]
     * @param {Object} options      Available options:
     *                              {boolean | {duration: number, easingFunction: string}} [animation=false]
     *                                    If true, the range is animated
     *                                    smoothly to the new window. An object can be
     *                                    provided to specify duration and easing function.
     *                                    Default duration is 500 ms, and default easing
     *                                    function is 'easeInOutQuad'.
     *                              {boolean} [byUser=false]
     *                              {Event}  event  Mouse event
     * @param {Function} callback     a callback function to be executed at the end of this function  
     * @param {Function} frameCallback    a callback function executed each frame of the range animation.
     *                                    The callback will be passed three parameters:
     *                                    {number} easeCoefficient    an easing coefficent
     *                                    {boolean} willDraw          If true the caller will redraw after the callback completes
     *                                    {boolean} done              If true then animation is ending after the current frame
     */

  }, {
    key: 'setRange',
    value: function setRange(start, end, options, callback, frameCallback) {
      if (!options) {
        options = {};
      }
      if (options.byUser !== true) {
        options.byUser = false;
      }
      var me = this;
      var finalStart = start != undefined ? util.convert(start, 'Date').valueOf() : null;
      var finalEnd = end != undefined ? util.convert(end, 'Date').valueOf() : null;
      this._cancelAnimation();
      this.millisecondsPerPixelCache = undefined;

      if (options.animation) {
        // true or an Object
        var initStart = this.start;
        var initEnd = this.end;
        var duration = (0, _typeof3['default'])(options.animation) === 'object' && 'duration' in options.animation ? options.animation.duration : 500;
        var easingName = (0, _typeof3['default'])(options.animation) === 'object' && 'easingFunction' in options.animation ? options.animation.easingFunction : 'easeInOutQuad';
        var easingFunction = util.easingFunctions[easingName];
        if (!easingFunction) {
          throw new Error('Unknown easing function ' + (0, _stringify2['default'])(easingName) + '. Choose from: ' + (0, _keys2['default'])(util.easingFunctions).join(', '));
        }

        var initTime = new Date().valueOf();
        var anyChanged = false;

        var next = function next() {
          if (!me.props.touch.dragging) {
            var now = new Date().valueOf();
            var time = now - initTime;
            var ease = easingFunction(time / duration);
            var done = time > duration;
            var s = done || finalStart === null ? finalStart : initStart + (finalStart - initStart) * ease;
            var e = done || finalEnd === null ? finalEnd : initEnd + (finalEnd - initEnd) * ease;

            changed = me._applyRange(s, e);
            DateUtil.updateHiddenDates(me.options.moment, me.body, me.options.hiddenDates);
            anyChanged = anyChanged || changed;

            var params = {
              start: new Date(me.start),
              end: new Date(me.end),
              byUser: options.byUser,
              event: options.event
            };

            if (frameCallback) {
              frameCallback(ease, changed, done);
            }

            if (changed) {
              me.body.emitter.emit('rangechange', params);
            }

            if (done) {
              if (anyChanged) {
                me.body.emitter.emit('rangechanged', params);
                if (callback) {
                  return callback();
                }
              }
            } else {
              // animate with as high as possible frame rate, leave 20 ms in between
              // each to prevent the browser from blocking
              me.animationTimer = setTimeout(next, 20);
            }
          }
        };

        return next();
      } else {
        var changed = this._applyRange(finalStart, finalEnd);
        DateUtil.updateHiddenDates(this.options.moment, this.body, this.options.hiddenDates);
        if (changed) {
          var params = {
            start: new Date(this.start),
            end: new Date(this.end),
            byUser: options.byUser,
            event: options.event
          };

          this.body.emitter.emit('rangechange', params);
          clearTimeout(me.timeoutID);
          me.timeoutID = setTimeout(function () {
            me.body.emitter.emit('rangechanged', params);
          }, 200);
          if (callback) {
            return callback();
          }
        }
      }
    }

    /**
     * Get the number of milliseconds per pixel.
     *
     * @returns {undefined|number}
     */

  }, {
    key: 'getMillisecondsPerPixel',
    value: function getMillisecondsPerPixel() {
      if (this.millisecondsPerPixelCache === undefined) {
        this.millisecondsPerPixelCache = (this.end - this.start) / this.body.dom.center.clientWidth;
      }
      return this.millisecondsPerPixelCache;
    }

    /**
     * Stop an animation
     * @private
     */

  }, {
    key: '_cancelAnimation',
    value: function _cancelAnimation() {
      if (this.animationTimer) {
        clearTimeout(this.animationTimer);
        this.animationTimer = null;
      }
    }

    /**
     * Set a new start and end range. This method is the same as setRange, but
     * does not trigger a range change and range changed event, and it returns
     * true when the range is changed
     * @param {number} [start]
     * @param {number} [end]
     * @return {boolean} changed
     * @private
     */

  }, {
    key: '_applyRange',
    value: function _applyRange(start, end) {
      var newStart = start != null ? util.convert(start, 'Date').valueOf() : this.start;
      var newEnd = end != null ? util.convert(end, 'Date').valueOf() : this.end;
      var max = this.options.max != null ? util.convert(this.options.max, 'Date').valueOf() : null;
      var min = this.options.min != null ? util.convert(this.options.min, 'Date').valueOf() : null;
      var diff = void 0;

      // check for valid number
      if (isNaN(newStart) || newStart === null) {
        throw new Error('Invalid start "' + start + '"');
      }
      if (isNaN(newEnd) || newEnd === null) {
        throw new Error('Invalid end "' + end + '"');
      }

      // prevent end < start
      if (newEnd < newStart) {
        newEnd = newStart;
      }

      // prevent start < min
      if (min !== null) {
        if (newStart < min) {
          diff = min - newStart;
          newStart += diff;
          newEnd += diff;

          // prevent end > max
          if (max != null) {
            if (newEnd > max) {
              newEnd = max;
            }
          }
        }
      }

      // prevent end > max
      if (max !== null) {
        if (newEnd > max) {
          diff = newEnd - max;
          newStart -= diff;
          newEnd -= diff;

          // prevent start < min
          if (min != null) {
            if (newStart < min) {
              newStart = min;
            }
          }
        }
      }

      // prevent (end-start) < zoomMin
      if (this.options.zoomMin !== null) {
        var zoomMin = parseFloat(this.options.zoomMin);
        if (zoomMin < 0) {
          zoomMin = 0;
        }
        if (newEnd - newStart < zoomMin) {
          // compensate for a scale of 0.5 ms
          var compensation = 0.5;
          if (this.end - this.start === zoomMin && newStart >= this.start - compensation && newEnd <= this.end) {
            // ignore this action, we are already zoomed to the minimum
            newStart = this.start;
            newEnd = this.end;
          } else {
            // zoom to the minimum
            diff = zoomMin - (newEnd - newStart);
            newStart -= diff / 2;
            newEnd += diff / 2;
          }
        }
      }

      // prevent (end-start) > zoomMax
      if (this.options.zoomMax !== null) {
        var zoomMax = parseFloat(this.options.zoomMax);
        if (zoomMax < 0) {
          zoomMax = 0;
        }

        if (newEnd - newStart > zoomMax) {
          if (this.end - this.start === zoomMax && newStart < this.start && newEnd > this.end) {
            // ignore this action, we are already zoomed to the maximum
            newStart = this.start;
            newEnd = this.end;
          } else {
            // zoom to the maximum
            diff = newEnd - newStart - zoomMax;
            newStart += diff / 2;
            newEnd -= diff / 2;
          }
        }
      }

      var changed = this.start != newStart || this.end != newEnd;

      // if the new range does NOT overlap with the old range, emit checkRangedItems to avoid not showing ranged items (ranged meaning has end time, not necessarily of type Range)
      if (!(newStart >= this.start && newStart <= this.end || newEnd >= this.start && newEnd <= this.end) && !(this.start >= newStart && this.start <= newEnd || this.end >= newStart && this.end <= newEnd)) {
        this.body.emitter.emit('checkRangedItems');
      }

      this.start = newStart;
      this.end = newEnd;
      return changed;
    }

    /**
     * Retrieve the current range.
     * @return {Object} An object with start and end properties
     */

  }, {
    key: 'getRange',
    value: function getRange() {
      return {
        start: this.start,
        end: this.end
      };
    }

    /**
     * Calculate the conversion offset and scale for current range, based on
     * the provided width
     * @param {number} width
     * @param {number} [totalHidden=0]
     * @returns {{offset: number, scale: number}} conversion
     */

  }, {
    key: 'conversion',
    value: function conversion(width, totalHidden) {
      return Range.conversion(this.start, this.end, width, totalHidden);
    }

    /**
     * Static method to calculate the conversion offset and scale for a range,
     * based on the provided start, end, and width
     * @param {number} start
     * @param {number} end
     * @param {number} width
     * @param {number} [totalHidden=0]
     * @returns {{offset: number, scale: number}} conversion
     */

  }, {
    key: '_onDragStart',


    /**
     * Start dragging horizontally or vertically
     * @param {Event} event
     * @private
     */
    value: function _onDragStart(event) {
      this.deltaDifference = 0;
      this.previousDelta = 0;

      // only allow dragging when configured as movable
      if (!this.options.moveable) return;

      // only start dragging when the mouse is inside the current range
      if (!this._isInsideRange(event)) return;

      // refuse to drag when we where pinching to prevent the timeline make a jump
      // when releasing the fingers in opposite order from the touch screen
      if (!this.props.touch.allowDragging) return;

      this.stopRolling();

      this.props.touch.start = this.start;
      this.props.touch.end = this.end;
      this.props.touch.dragging = true;

      if (this.body.dom.root) {
        this.body.dom.root.style.cursor = 'move';
      }
    }

    /**
     * Perform dragging operation
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onDrag',
    value: function _onDrag(event) {
      if (!event) return;

      if (!this.props.touch.dragging) return;

      // only allow dragging when configured as movable
      if (!this.options.moveable) return;

      // TODO: this may be redundant in hammerjs2
      // refuse to drag when we where pinching to prevent the timeline make a jump
      // when releasing the fingers in opposite order from the touch screen
      if (!this.props.touch.allowDragging) return;

      var direction = this.options.direction;
      validateDirection(direction);
      var delta = direction == 'horizontal' ? event.deltaX : event.deltaY;
      delta -= this.deltaDifference;
      var interval = this.props.touch.end - this.props.touch.start;

      // normalize dragging speed if cutout is in between.
      var duration = DateUtil.getHiddenDurationBetween(this.body.hiddenDates, this.start, this.end);
      interval -= duration;

      var width = direction == 'horizontal' ? this.body.domProps.center.width : this.body.domProps.center.height;
      var diffRange = void 0;
      if (this.options.rtl) {
        diffRange = delta / width * interval;
      } else {
        diffRange = -delta / width * interval;
      }

      var newStart = this.props.touch.start + diffRange;
      var newEnd = this.props.touch.end + diffRange;

      // snapping times away from hidden zones
      var safeStart = DateUtil.snapAwayFromHidden(this.body.hiddenDates, newStart, this.previousDelta - delta, true);
      var safeEnd = DateUtil.snapAwayFromHidden(this.body.hiddenDates, newEnd, this.previousDelta - delta, true);
      if (safeStart != newStart || safeEnd != newEnd) {
        this.deltaDifference += delta;
        this.props.touch.start = safeStart;
        this.props.touch.end = safeEnd;
        this._onDrag(event);
        return;
      }

      this.previousDelta = delta;
      this._applyRange(newStart, newEnd);

      var startDate = new Date(this.start);
      var endDate = new Date(this.end);

      // fire a rangechange event
      this.body.emitter.emit('rangechange', {
        start: startDate,
        end: endDate,
        byUser: true,
        event: event
      });

      // fire a panmove event
      this.body.emitter.emit('panmove');
    }

    /**
     * Stop dragging operation
     * @param {event} event
     * @private
     */

  }, {
    key: '_onDragEnd',
    value: function _onDragEnd(event) {
      if (!this.props.touch.dragging) return;

      // only allow dragging when configured as movable
      if (!this.options.moveable) return;

      // TODO: this may be redundant in hammerjs2
      // refuse to drag when we where pinching to prevent the timeline make a jump
      // when releasing the fingers in opposite order from the touch screen
      if (!this.props.touch.allowDragging) return;

      this.props.touch.dragging = false;
      if (this.body.dom.root) {
        this.body.dom.root.style.cursor = 'auto';
      }

      // fire a rangechanged event
      this.body.emitter.emit('rangechanged', {
        start: new Date(this.start),
        end: new Date(this.end),
        byUser: true,
        event: event
      });
    }

    /**
     * Event handler for mouse wheel event, used to zoom
     * Code from http://adomas.org/javascript-mouse-wheel/
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onMouseWheel',
    value: function _onMouseWheel(event) {
      // retrieve delta
      var delta = 0;
      if (event.wheelDelta) {
        /* IE/Opera. */
        delta = event.wheelDelta / 120;
      } else if (event.detail) {
        /* Mozilla case. */
        // In Mozilla, sign of delta is different than in IE.
        // Also, delta is multiple of 3.
        delta = -event.detail / 3;
      }

      // don't allow zoom when the according key is pressed and the zoomKey option or not zoomable but movable
      if (this.options.zoomKey && !event[this.options.zoomKey] && this.options.zoomable || !this.options.zoomable && this.options.moveable) {
        return;
      }

      // only allow zooming when configured as zoomable and moveable
      if (!(this.options.zoomable && this.options.moveable)) return;

      // only zoom when the mouse is inside the current range
      if (!this._isInsideRange(event)) return;

      // If delta is nonzero, handle it.
      // Basically, delta is now positive if wheel was scrolled up,
      // and negative, if wheel was scrolled down.
      if (delta) {
        // perform the zoom action. Delta is normally 1 or -1

        // adjust a negative delta such that zooming in with delta 0.1
        // equals zooming out with a delta -0.1
        var scale = void 0;
        if (delta < 0) {
          scale = 1 - delta / 5;
        } else {
          scale = 1 / (1 + delta / 5);
        }

        // calculate center, the date to zoom around
        var pointerDate = void 0;
        if (this.rolling) {
          var rollingModeOffset = this.options.rollingMode && this.options.rollingMode.offset || 0.5;
          pointerDate = this.start + (this.end - this.start) * rollingModeOffset;
        } else {
          var pointer = this.getPointer({ x: event.clientX, y: event.clientY }, this.body.dom.center);
          pointerDate = this._pointerToDate(pointer);
        }
        this.zoom(scale, pointerDate, delta, event);

        // Prevent default actions caused by mouse wheel
        // (else the page and timeline both scroll)
        event.preventDefault();
      }
    }

    /**
     * Start of a touch gesture
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onTouch',
    value: function _onTouch(event) {
      // eslint-disable-line no-unused-vars
      this.props.touch.start = this.start;
      this.props.touch.end = this.end;
      this.props.touch.allowDragging = true;
      this.props.touch.center = null;
      this.scaleOffset = 0;
      this.deltaDifference = 0;
      // Disable the browser default handling of this event.
      util.preventDefault(event);
    }

    /**
     * Handle pinch event
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onPinch',
    value: function _onPinch(event) {
      // only allow zooming when configured as zoomable and moveable
      if (!(this.options.zoomable && this.options.moveable)) return;

      // Disable the browser default handling of this event.
      util.preventDefault(event);

      this.props.touch.allowDragging = false;

      if (!this.props.touch.center) {
        this.props.touch.center = this.getPointer(event.center, this.body.dom.center);
      }

      this.stopRolling();

      var scale = 1 / (event.scale + this.scaleOffset);
      var centerDate = this._pointerToDate(this.props.touch.center);

      var hiddenDuration = DateUtil.getHiddenDurationBetween(this.body.hiddenDates, this.start, this.end);
      var hiddenDurationBefore = DateUtil.getHiddenDurationBefore(this.options.moment, this.body.hiddenDates, this, centerDate);
      var hiddenDurationAfter = hiddenDuration - hiddenDurationBefore;

      // calculate new start and end
      var newStart = centerDate - hiddenDurationBefore + (this.props.touch.start - (centerDate - hiddenDurationBefore)) * scale;
      var newEnd = centerDate + hiddenDurationAfter + (this.props.touch.end - (centerDate + hiddenDurationAfter)) * scale;

      // snapping times away from hidden zones
      this.startToFront = 1 - scale <= 0; // used to do the right auto correction with periodic hidden times
      this.endToFront = scale - 1 <= 0; // used to do the right auto correction with periodic hidden times

      var safeStart = DateUtil.snapAwayFromHidden(this.body.hiddenDates, newStart, 1 - scale, true);
      var safeEnd = DateUtil.snapAwayFromHidden(this.body.hiddenDates, newEnd, scale - 1, true);
      if (safeStart != newStart || safeEnd != newEnd) {
        this.props.touch.start = safeStart;
        this.props.touch.end = safeEnd;
        this.scaleOffset = 1 - event.scale;
        newStart = safeStart;
        newEnd = safeEnd;
      }

      var options = {
        animation: false,
        byUser: true,
        event: event
      };
      this.setRange(newStart, newEnd, options);

      this.startToFront = false; // revert to default
      this.endToFront = true; // revert to default
    }

    /**
     * Test whether the mouse from a mouse event is inside the visible window,
     * between the current start and end date
     * @param {Object} event
     * @return {boolean} Returns true when inside the visible window
     * @private
     */

  }, {
    key: '_isInsideRange',
    value: function _isInsideRange(event) {
      // calculate the time where the mouse is, check whether inside
      // and no scroll action should happen.
      var clientX = event.center ? event.center.x : event.clientX;
      var x = void 0;
      if (this.options.rtl) {
        x = clientX - util.getAbsoluteLeft(this.body.dom.centerContainer);
      } else {
        x = util.getAbsoluteRight(this.body.dom.centerContainer) - clientX;
      }
      var time = this.body.util.toTime(x);

      return time >= this.start && time <= this.end;
    }

    /**
     * Helper function to calculate the center date for zooming
     * @param {{x: number, y: number}} pointer
     * @return {number} date
     * @private
     */

  }, {
    key: '_pointerToDate',
    value: function _pointerToDate(pointer) {
      var conversion = void 0;
      var direction = this.options.direction;

      validateDirection(direction);

      if (direction == 'horizontal') {
        return this.body.util.toTime(pointer.x).valueOf();
      } else {
        var height = this.body.domProps.center.height;
        conversion = this.conversion(height);
        return pointer.y / conversion.scale + conversion.offset;
      }
    }

    /**
     * Get the pointer location relative to the location of the dom element
     * @param {{x: number, y: number}} touch
     * @param {Element} element   HTML DOM element
     * @return {{x: number, y: number}} pointer
     * @private
     */

  }, {
    key: 'getPointer',
    value: function getPointer(touch, element) {
      if (this.options.rtl) {
        return {
          x: util.getAbsoluteRight(element) - touch.x,
          y: touch.y - util.getAbsoluteTop(element)
        };
      } else {
        return {
          x: touch.x - util.getAbsoluteLeft(element),
          y: touch.y - util.getAbsoluteTop(element)
        };
      }
    }

    /**
     * Zoom the range the given scale in or out. Start and end date will
     * be adjusted, and the timeline will be redrawn. You can optionally give a
     * date around which to zoom.
     * For example, try scale = 0.9 or 1.1
     * @param {number} scale      Scaling factor. Values above 1 will zoom out,
     *                            values below 1 will zoom in.
     * @param {number} [center]   Value representing a date around which will
     *                            be zoomed.
     * @param {number} delta
     * @param {Event} event
     */

  }, {
    key: 'zoom',
    value: function zoom(scale, center, delta, event) {
      // if centerDate is not provided, take it half between start Date and end Date
      if (center == null) {
        center = (this.start + this.end) / 2;
      }

      var hiddenDuration = DateUtil.getHiddenDurationBetween(this.body.hiddenDates, this.start, this.end);
      var hiddenDurationBefore = DateUtil.getHiddenDurationBefore(this.options.moment, this.body.hiddenDates, this, center);
      var hiddenDurationAfter = hiddenDuration - hiddenDurationBefore;

      // calculate new start and end
      var newStart = center - hiddenDurationBefore + (this.start - (center - hiddenDurationBefore)) * scale;
      var newEnd = center + hiddenDurationAfter + (this.end - (center + hiddenDurationAfter)) * scale;

      // snapping times away from hidden zones
      this.startToFront = delta > 0 ? false : true; // used to do the right autocorrection with periodic hidden times
      this.endToFront = -delta > 0 ? false : true; // used to do the right autocorrection with periodic hidden times
      var safeStart = DateUtil.snapAwayFromHidden(this.body.hiddenDates, newStart, delta, true);
      var safeEnd = DateUtil.snapAwayFromHidden(this.body.hiddenDates, newEnd, -delta, true);
      if (safeStart != newStart || safeEnd != newEnd) {
        newStart = safeStart;
        newEnd = safeEnd;
      }

      var options = {
        animation: false,
        byUser: true,
        event: event
      };
      this.setRange(newStart, newEnd, options);

      this.startToFront = false; // revert to default
      this.endToFront = true; // revert to default
    }

    /**
     * Move the range with a given delta to the left or right. Start and end
     * value will be adjusted. For example, try delta = 0.1 or -0.1
     * @param {number}  delta     Moving amount. Positive value will move right,
     *                            negative value will move left
     */

  }, {
    key: 'move',
    value: function move(delta) {
      // zoom start Date and end Date relative to the centerDate
      var diff = this.end - this.start;

      // apply new values
      var newStart = this.start + diff * delta;
      var newEnd = this.end + diff * delta;

      // TODO: reckon with min and max range

      this.start = newStart;
      this.end = newEnd;
    }

    /**
     * Move the range to a new center point
     * @param {number} moveTo      New center point of the range
     */

  }, {
    key: 'moveTo',
    value: function moveTo(_moveTo) {
      var center = (this.start + this.end) / 2;

      var diff = center - _moveTo;

      // calculate new start and end
      var newStart = this.start - diff;
      var newEnd = this.end - diff;

      var options = {
        animation: false,
        byUser: true,
        event: null
      };
      this.setRange(newStart, newEnd, options);
    }
  }], [{
    key: 'conversion',
    value: function conversion(start, end, width, totalHidden) {
      if (totalHidden === undefined) {
        totalHidden = 0;
      }
      if (width != 0 && end - start != 0) {
        return {
          offset: start,
          scale: width / (end - start - totalHidden)
        };
      } else {
        return {
          offset: 0,
          scale: 1
        };
      }
    }
  }]);
  return Range;
}(_Component3['default']);

/**
 * Test whether direction has a valid value
 * @param {string} direction    'horizontal' or 'vertical'
 */


exports['default'] = Range;
function validateDirection(direction) {
  if (direction != 'horizontal' && direction != 'vertical') {
    throw new TypeError('Unknown direction "' + direction + '". Choose "horizontal" or "vertical".');
  }
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(22);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _emitterComponent = __webpack_require__(71);

var _emitterComponent2 = _interopRequireDefault(_emitterComponent);

var _hammer = __webpack_require__(16);

var _hammer2 = _interopRequireDefault(_hammer);

var _hammerUtil = __webpack_require__(72);

var hammerUtil = _interopRequireWildcard(_hammerUtil);

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

var _DateUtil = __webpack_require__(25);

var DateUtil = _interopRequireWildcard(_DateUtil);

var _TimeAxis = __webpack_require__(48);

var _TimeAxis2 = _interopRequireDefault(_TimeAxis);

var _Activator = __webpack_require__(133);

var _Activator2 = _interopRequireDefault(_Activator);

var _CustomTime = __webpack_require__(50);

var _CustomTime2 = _interopRequireDefault(_CustomTime);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Create a timeline visualization
 * @constructor Core
 */
var Core = function () {
  function Core() {
    (0, _classCallCheck3['default'])(this, Core);
  }

  (0, _createClass3['default'])(Core, [{
    key: '_create',

    /**
     * Create the main DOM for the Core: a root panel containing left, right,
     * top, bottom, content, and background panel.
     * @param {Element} container  The container element where the Core will
     *                             be attached.
     * @protected
     */
    value: function _create(container) {
      var _this = this;

      this.dom = {};

      this.dom.container = container;
      this.dom.container.style.position = 'relative';

      this.dom.root = document.createElement('div');
      this.dom.background = document.createElement('div');
      this.dom.backgroundVertical = document.createElement('div');
      this.dom.backgroundHorizontal = document.createElement('div');
      this.dom.centerContainer = document.createElement('div');
      this.dom.leftContainer = document.createElement('div');
      this.dom.rightContainer = document.createElement('div');
      this.dom.center = document.createElement('div');
      this.dom.left = document.createElement('div');
      this.dom.right = document.createElement('div');
      this.dom.top = document.createElement('div');
      this.dom.bottom = document.createElement('div');
      this.dom.shadowTop = document.createElement('div');
      this.dom.shadowBottom = document.createElement('div');
      this.dom.shadowTopLeft = document.createElement('div');
      this.dom.shadowBottomLeft = document.createElement('div');
      this.dom.shadowTopRight = document.createElement('div');
      this.dom.shadowBottomRight = document.createElement('div');
      this.dom.rollingModeBtn = document.createElement('div');
      this.dom.loadingScreen = document.createElement('div');

      this.dom.root.className = 'timeline-timeline';
      this.dom.background.className = 'timeline-panel timeline-background';
      this.dom.backgroundVertical.className = 'timeline-panel timeline-background timeline-vertical';
      this.dom.backgroundHorizontal.className = 'timeline-panel timeline-background timeline-horizontal';
      this.dom.centerContainer.className = 'timeline-panel timeline-center';
      this.dom.leftContainer.className = 'timeline-panel timeline-left';
      this.dom.rightContainer.className = 'timeline-panel timeline-right';
      this.dom.top.className = 'timeline-panel timeline-top';
      this.dom.bottom.className = 'timeline-panel timeline-bottom';
      this.dom.left.className = 'timeline-content';
      this.dom.center.className = 'timeline-content';
      this.dom.right.className = 'timeline-content';
      this.dom.shadowTop.className = 'timeline-shadow timeline-top';
      this.dom.shadowBottom.className = 'timeline-shadow timeline-bottom';
      this.dom.shadowTopLeft.className = 'timeline-shadow timeline-top';
      this.dom.shadowBottomLeft.className = 'timeline-shadow timeline-bottom';
      this.dom.shadowTopRight.className = 'timeline-shadow timeline-top';
      this.dom.shadowBottomRight.className = 'timeline-shadow timeline-bottom';
      this.dom.rollingModeBtn.className = 'timeline-rolling-mode-btn';
      this.dom.loadingScreen.className = 'timeline-loading-screen';

      this.dom.root.appendChild(this.dom.background);
      this.dom.root.appendChild(this.dom.backgroundVertical);
      this.dom.root.appendChild(this.dom.backgroundHorizontal);
      this.dom.root.appendChild(this.dom.centerContainer);
      this.dom.root.appendChild(this.dom.leftContainer);
      this.dom.root.appendChild(this.dom.rightContainer);
      this.dom.root.appendChild(this.dom.top);
      this.dom.root.appendChild(this.dom.bottom);
      this.dom.root.appendChild(this.dom.rollingModeBtn);

      this.dom.centerContainer.appendChild(this.dom.center);
      this.dom.leftContainer.appendChild(this.dom.left);
      this.dom.rightContainer.appendChild(this.dom.right);
      this.dom.centerContainer.appendChild(this.dom.shadowTop);
      this.dom.centerContainer.appendChild(this.dom.shadowBottom);
      this.dom.leftContainer.appendChild(this.dom.shadowTopLeft);
      this.dom.leftContainer.appendChild(this.dom.shadowBottomLeft);
      this.dom.rightContainer.appendChild(this.dom.shadowTopRight);
      this.dom.rightContainer.appendChild(this.dom.shadowBottomRight);

      // size properties of each of the panels
      this.props = {
        root: {},
        background: {},
        centerContainer: {},
        leftContainer: {},
        rightContainer: {},
        center: {},
        left: {},
        right: {},
        top: {},
        bottom: {},
        border: {},
        scrollTop: 0,
        scrollTopMin: 0
      };

      this.on('rangechange', function () {
        if (_this.initialDrawDone === true) {
          _this._redraw();
        }
      });
      this.on('rangechanged', function () {
        if (!_this.initialRangeChangeDone) {
          _this.initialRangeChangeDone = true;
        }
      });
      this.on('touch', this._onTouch.bind(this));
      this.on('panmove', this._onDrag.bind(this));

      var me = this;
      this._origRedraw = this._redraw.bind(this);
      this._redraw = util.throttle(this._origRedraw);

      this.on('_change', function (properties) {
        if (me.itemSet && me.itemSet.initialItemSetDrawn && properties && properties.queue == true) {
          me._redraw();
        } else {
          me._origRedraw();
        }
      });

      // create event listeners for all interesting events, these events will be
      // emitted via emitter
      this.hammer = new _hammer2['default'](this.dom.root);
      var pinchRecognizer = this.hammer.get('pinch').set({ enable: true });
      pinchRecognizer && hammerUtil.disablePreventDefaultVertically(pinchRecognizer);
      this.hammer.get('pan').set({ threshold: 5, direction: _hammer2['default'].DIRECTION_HORIZONTAL });
      this.listeners = {};

      var events = ['tap', 'doubletap', 'press', 'pinch', 'pan', 'panstart', 'panmove', 'panend'
      // TODO: cleanup
      //'touch', 'pinch',
      //'tap', 'doubletap', 'hold',
      //'dragstart', 'drag', 'dragend',
      //'mousewheel', 'DOMMouseScroll' // DOMMouseScroll is needed for Firefox
      ];
      events.forEach(function (type) {
        var listener = function listener(event) {
          if (me.isActive()) {
            me.emit(type, event);
          }
        };
        me.hammer.on(type, listener);
        me.listeners[type] = listener;
      });

      // emulate a touch event (emitted before the start of a pan, pinch, tap, or press)
      hammerUtil.onTouch(this.hammer, function (event) {
        me.emit('touch', event);
      });

      // emulate a release event (emitted after a pan, pinch, tap, or press)
      hammerUtil.onRelease(this.hammer, function (event) {
        me.emit('release', event);
      });

      /**
       *
       * @param {WheelEvent} event
       */
      function onMouseWheel(event) {

        // Reasonable default wheel deltas
        var LINE_HEIGHT = 40;
        var PAGE_HEIGHT = 800;

        if (this.isActive()) {
          this.emit('mousewheel', event);
        }

        // deltaX and deltaY normalization from jquery.mousewheel.js
        var deltaX = 0;
        var deltaY = 0;

        // Old school scrollwheel delta
        if ('detail' in event) {
          deltaY = event.detail * -1;
        }
        if ('wheelDelta' in event) {
          deltaY = event.wheelDelta;
        }
        if ('wheelDeltaY' in event) {
          deltaY = event.wheelDeltaY;
        }
        if ('wheelDeltaX' in event) {
          deltaX = event.wheelDeltaX * -1;
        }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
          deltaX = deltaY * -1;
          deltaY = 0;
        }

        // New school wheel delta (wheel event)
        if ('deltaY' in event) {
          deltaY = event.deltaY * -1;
        }
        if ('deltaX' in event) {
          deltaX = event.deltaX;
        }

        // Normalize deltas
        if (event.deltaMode) {
          if (event.deltaMode === 1) {
            // delta in LINE units
            deltaX *= LINE_HEIGHT;
            deltaY *= LINE_HEIGHT;
          } else {
            // delta in PAGE units
            deltaX *= LINE_HEIGHT;
            deltaY *= PAGE_HEIGHT;
          }
        }

        // Prevent scrolling when zooming (no zoom key, or pressing zoom key)
        if (this.options.zoomKey && event[this.options.zoomKey]) return;

        // Don't preventDefault if you can't scroll
        if (!this.options.verticalScroll && !this.options.horizontalScroll) return;

        // Prevent default actions caused by mouse wheel
        // (else the page and timeline both scroll)
        event.preventDefault();

        if (this.options.verticalScroll && Math.abs(deltaY) >= Math.abs(deltaX)) {
          var current = this.props.scrollTop;
          var adjusted = current + deltaY;

          if (this.isActive()) {
            this._setScrollTop(adjusted);
            this._redraw();
            this.emit('scroll', event);
          }
        } else if (this.options.horizontalScroll) {
          var delta = Math.abs(deltaX) >= Math.abs(deltaY) ? deltaX : deltaY;

          // calculate a single scroll jump relative to the range scale
          var diff = delta / 120 * (this.range.end - this.range.start) / 20;
          // calculate new start and end
          var newStart = this.range.start + diff;
          var newEnd = this.range.end + diff;

          var options = {
            animation: false,
            byUser: true,
            event: event
          };
          this.range.setRange(newStart, newEnd, options);
        }
      }

      // Add modern wheel event listener
      var wheelType = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
      document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
      this.dom.centerContainer.addEventListener ? "DOMMouseScroll" : // Older Firefox versions use "DOMMouseScroll"
      "onmousewheel"; // All the use "onmousewheel"
      this.dom.centerContainer.addEventListener(wheelType, onMouseWheel.bind(this), false);

      /**
       *
       * @param {scroll} event
       */
      function onMouseScrollSide(event) {
        if (!me.options.verticalScroll) return;
        event.preventDefault();
        if (me.isActive()) {
          var adjusted = -event.target.scrollTop;
          me._setScrollTop(adjusted);
          me._redraw();
          me.emit('scrollSide', event);
        }
      }

      this.dom.left.parentNode.addEventListener('scroll', onMouseScrollSide.bind(this));
      this.dom.right.parentNode.addEventListener('scroll', onMouseScrollSide.bind(this));

      var itemAddedToTimeline = false;

      /**
       *
       * @param {dragover} event
       * @returns {boolean}
       */
      function handleDragOver(event) {
        if (event.preventDefault) {
          event.preventDefault(); // Necessary. Allows us to drop.
        }

        // make sure your target is a timeline element
        if (!event.target.className.indexOf("timeline") > -1) return;

        // make sure only one item is added every time you're over the timeline
        if (itemAddedToTimeline) return;

        event.dataTransfer.dropEffect = 'move';
        itemAddedToTimeline = true;
        return false;
      }

      /**
       *
       * @param {drop} event
       * @returns {boolean}
       */
      function handleDrop(event) {
        // prevent redirect to blank page - Firefox
        if (event.preventDefault) {
          event.preventDefault();
        }
        if (event.stopPropagation) {
          event.stopPropagation();
        }
        // return when dropping non-timeline items
        try {
          var itemData = JSON.parse(event.dataTransfer.getData("text"));
          if (!itemData || !itemData.content) return;
        } catch (err) {
          return false;
        }

        itemAddedToTimeline = false;
        event.center = {
          x: event.clientX,
          y: event.clientY
        };

        if (itemData.target !== 'item') {
          me.itemSet._onAddItem(event);
        } else {
          me.itemSet._onDropObjectOnItem(event);
        }
        me.emit('drop', me.getEventProperties(event));
        return false;
      }

      this.dom.center.addEventListener('dragover', handleDragOver.bind(this), false);
      this.dom.center.addEventListener('drop', handleDrop.bind(this), false);

      this.customTimes = [];

      // store state information needed for touch events
      this.touch = {};

      this.redrawCount = 0;
      this.initialDrawDone = false;
      this.initialRangeChangeDone = false;

      // attach the root panel to the provided container
      if (!container) throw new Error('No container provided');
      container.appendChild(this.dom.root);
      container.appendChild(this.dom.loadingScreen);
    }

    /**
     * Set options. Options will be passed to all components loaded in the Timeline.
     * @param {Object} [options]
     *                           {String} orientation
     *                              Vertical orientation for the Timeline,
     *                              can be 'bottom' (default) or 'top'.
     *                           {string | number} width
     *                              Width for the timeline, a number in pixels or
     *                              a css string like '1000px' or '75%'. '100%' by default.
     *                           {string | number} height
     *                              Fixed height for the Timeline, a number in pixels or
     *                              a css string like '400px' or '75%'. If undefined,
     *                              The Timeline will automatically size such that
     *                              its contents fit.
     *                           {string | number} minHeight
     *                              Minimum height for the Timeline, a number in pixels or
     *                              a css string like '400px' or '75%'.
     *                           {string | number} maxHeight
     *                              Maximum height for the Timeline, a number in pixels or
     *                              a css string like '400px' or '75%'.
     *                           {number | Date | string} start
     *                              Start date for the visible window
     *                           {number | Date | string} end
     *                              End date for the visible window
     */

  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      if (options) {
        // copy the known options
        var fields = ['width', 'height', 'minHeight', 'maxHeight', 'autoResize', 'start', 'end', 'clickToUse', 'dataAttributes', 'hiddenDates', 'locale', 'locales', 'moment', 'rtl', 'zoomKey', 'horizontalScroll', 'verticalScroll'];
        util.selectiveExtend(fields, this.options, options);

        this.dom.rollingModeBtn.style.visibility = 'hidden';

        if (this.options.rtl) {
          this.dom.container.style.direction = "rtl";
          this.dom.backgroundVertical.className = 'timeline-panel timeline-background timeline-vertical-rtl';
        }

        if (this.options.verticalScroll) {
          if (this.options.rtl) {
            this.dom.rightContainer.className = 'timeline-panel timeline-right timeline-vertical-scroll';
          } else {
            this.dom.leftContainer.className = 'timeline-panel timeline-left timeline-vertical-scroll';
          }
        }

        if ((0, _typeof3['default'])(this.options.orientation) !== 'object') {
          this.options.orientation = { item: undefined, axis: undefined };
        }
        if ('orientation' in options) {
          if (typeof options.orientation === 'string') {
            this.options.orientation = {
              item: options.orientation,
              axis: options.orientation
            };
          } else if ((0, _typeof3['default'])(options.orientation) === 'object') {
            if ('item' in options.orientation) {
              this.options.orientation.item = options.orientation.item;
            }
            if ('axis' in options.orientation) {
              this.options.orientation.axis = options.orientation.axis;
            }
          }
        }

        if (this.options.orientation.axis === 'both') {
          if (!this.timeAxis2) {
            var timeAxis2 = this.timeAxis2 = new _TimeAxis2['default'](this.body);
            timeAxis2.setOptions = function (options) {
              var _options = options ? util.extend({}, options) : {};
              _options.orientation = 'top'; // override the orientation option, always top
              _TimeAxis2['default'].prototype.setOptions.call(timeAxis2, _options);
            };
            this.components.push(timeAxis2);
          }
        } else {
          if (this.timeAxis2) {
            var index = this.components.indexOf(this.timeAxis2);
            if (index !== -1) {
              this.components.splice(index, 1);
            }
            this.timeAxis2.destroy();
            this.timeAxis2 = null;
          }
        }

        // if the graph2d's drawPoints is a function delegate the callback to the onRender property
        if (typeof options.drawPoints == 'function') {
          options.drawPoints = {
            onRender: options.drawPoints
          };
        }

        if ('hiddenDates' in this.options) {
          DateUtil.convertHiddenOptions(this.options.moment, this.body, this.options.hiddenDates);
        }

        if ('clickToUse' in options) {
          if (options.clickToUse) {
            if (!this.activator) {
              this.activator = new _Activator2['default'](this.dom.root);
            }
          } else {
            if (this.activator) {
              this.activator.destroy();
              delete this.activator;
            }
          }
        }

        if ('showCustomTime' in options) {
          throw new Error('Option `showCustomTime` is deprecated. Create a custom time bar via timeline.addCustomTime(time [, id])');
        }

        // enable/disable autoResize
        this._initAutoResize();
      }

      // propagate options to all components
      this.components.forEach(function (component) {
        return component.setOptions(options);
      });

      // enable/disable configure
      if ('configure' in options) {
        if (!this.configurator) {
          this.configurator = this._createConfigurator();
        }

        this.configurator.setOptions(options.configure);

        // collect the settings of all components, and pass them to the configuration system
        var appliedOptions = util.deepExtend({}, this.options);
        this.components.forEach(function (component) {
          util.deepExtend(appliedOptions, component.options);
        });
        this.configurator.setModuleOptions({ global: appliedOptions });
      }

      this._redraw();
    }

    /**
     * Returns true when the Timeline is active.
     * @returns {boolean}
     */

  }, {
    key: 'isActive',
    value: function isActive() {
      return !this.activator || this.activator.active;
    }

    /**
     * Destroy the Core, clean up all DOM elements and event listeners.
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      // unbind datasets
      this.setItems(null);
      this.setGroups(null);

      // remove all event listeners
      this.off();

      // stop checking for changed size
      this._stopAutoResize();

      // remove from DOM
      if (this.dom.root.parentNode) {
        this.dom.root.parentNode.removeChild(this.dom.root);
      }
      this.dom = null;

      // remove Activator
      if (this.activator) {
        this.activator.destroy();
        delete this.activator;
      }

      // cleanup hammer touch events
      for (var event in this.listeners) {
        if (this.listeners.hasOwnProperty(event)) {
          delete this.listeners[event];
        }
      }
      this.listeners = null;
      this.hammer && this.hammer.destroy();
      this.hammer = null;

      // give all components the opportunity to cleanup
      this.components.forEach(function (component) {
        return component.destroy();
      });

      this.body = null;
    }

    /**
     * Set a custom time bar
     * @param {Date} time
     * @param {number} [id=undefined] Optional id of the custom time bar to be adjusted.
     */

  }, {
    key: 'setCustomTime',
    value: function setCustomTime(time, id) {
      var customTimes = this.customTimes.filter(function (component) {
        return id === component.options.id;
      });

      if (customTimes.length === 0) {
        throw new Error('No custom time bar found with id ' + (0, _stringify2['default'])(id));
      }

      if (customTimes.length > 0) {
        customTimes[0].setCustomTime(time);
      }
    }

    /**
     * Retrieve the current custom time.
     * @param {number} [id=undefined]    Id of the custom time bar.
     * @return {Date | undefined} customTime
     */

  }, {
    key: 'getCustomTime',
    value: function getCustomTime(id) {
      var customTimes = this.customTimes.filter(function (component) {
        return component.options.id === id;
      });

      if (customTimes.length === 0) {
        throw new Error('No custom time bar found with id ' + (0, _stringify2['default'])(id));
      }
      return customTimes[0].getCustomTime();
    }

    /**
     * Set a custom title for the custom time bar.
     * @param {string} [title] Custom title
     * @param {number} [id=undefined]    Id of the custom time bar.
     * @returns {*}
     */

  }, {
    key: 'setCustomTimeTitle',
    value: function setCustomTimeTitle(title, id) {
      var customTimes = this.customTimes.filter(function (component) {
        return component.options.id === id;
      });

      if (customTimes.length === 0) {
        throw new Error('No custom time bar found with id ' + (0, _stringify2['default'])(id));
      }
      if (customTimes.length > 0) {
        return customTimes[0].setCustomTitle(title);
      }
    }

    /**
     * Retrieve meta information from an event.
     * Should be overridden by classes extending Core
     * @param {Event} event
     * @return {Object} An object with related information.
     */

  }, {
    key: 'getEventProperties',
    value: function getEventProperties(event) {
      return { event: event };
    }

    /**
     * Add custom vertical bar
     * @param {Date | string | number} [time]  A Date, unix timestamp, or
     *                                         ISO date string. Time point where
     *                                         the new bar should be placed.
     *                                         If not provided, `new Date()` will
     *                                         be used.
     * @param {number | string} [id=undefined] Id of the new bar. Optional
     * @return {number | string}               Returns the id of the new bar
     */

  }, {
    key: 'addCustomTime',
    value: function addCustomTime(time, id) {
      var timestamp = time !== undefined ? util.convert(time, 'Date').valueOf() : new Date();

      var exists = this.customTimes.some(function (customTime) {
        return customTime.options.id === id;
      });
      if (exists) {
        throw new Error('A custom time with id ' + (0, _stringify2['default'])(id) + ' already exists');
      }

      var customTime = new _CustomTime2['default'](this.body, util.extend({}, this.options, {
        time: timestamp,
        id: id
      }));

      this.customTimes.push(customTime);
      this.components.push(customTime);
      this._redraw();

      return id;
    }

    /**
     * Remove previously added custom bar
     * @param {int} id ID of the custom bar to be removed
     * [at]returns {boolean} True if the bar exists and is removed, false otherwise
     */

  }, {
    key: 'removeCustomTime',
    value: function removeCustomTime(id) {
      var _this2 = this;

      var customTimes = this.customTimes.filter(function (bar) {
        return bar.options.id === id;
      });

      if (customTimes.length === 0) {
        throw new Error('No custom time bar found with id ' + (0, _stringify2['default'])(id));
      }

      customTimes.forEach(function (customTime) {
        _this2.customTimes.splice(_this2.customTimes.indexOf(customTime), 1);
        _this2.components.splice(_this2.components.indexOf(customTime), 1);
        customTime.destroy();
      });
    }

    /**
     * Get the id's of the currently visible items.
     * @returns {Array} The ids of the visible items
     */

  }, {
    key: 'getVisibleItems',
    value: function getVisibleItems() {
      return this.itemSet && this.itemSet.getVisibleItems() || [];
    }

    /**
     * Get the id's of the currently visible groups.
     * @returns {Array} The ids of the visible groups
     */

  }, {
    key: 'getVisibleGroups',
    value: function getVisibleGroups() {
      return this.itemSet && this.itemSet.getVisibleGroups() || [];
    }

    /**
     * Set Core window such that it fits all items
     * @param {Object} [options]  Available options:
     *                                `animation: boolean | {duration: number, easingFunction: string}`
     *                                    If true (default), the range is animated
     *                                    smoothly to the new window. An object can be
     *                                    provided to specify duration and easing function.
     *                                    Default duration is 500 ms, and default easing
     *                                    function is 'easeInOutQuad'.
     * @param {function} [callback] a callback funtion to be executed at the end of this function
     */

  }, {
    key: 'fit',
    value: function fit(options, callback) {
      var range = this.getDataRange();

      // skip range set if there is no min and max date
      if (range.min === null && range.max === null) {
        return;
      }

      // apply a margin of 1% left and right of the data
      var interval = range.max - range.min;
      var min = new Date(range.min.valueOf() - interval * 0.01);
      var max = new Date(range.max.valueOf() + interval * 0.01);
      var animation = options && options.animation !== undefined ? options.animation : true;
      this.range.setRange(min, max, { animation: animation }, callback);
    }

    /**
     * Calculate the data range of the items start and end dates
     * [at]returns {{min: [Date], max: [Date]}}
     * @protected
     */

  }, {
    key: 'getDataRange',
    value: function getDataRange() {
      // must be implemented by Timeline and Graph2d
      throw new Error('Cannot invoke abstract method getDataRange');
    }

    /**
     * Set the visible window. Both parameters are optional, you can change only
     * start or only end. Syntax:
     *
     *     TimeLine.setWindow(start, end)
     *     TimeLine.setWindow(start, end, options)
     *     TimeLine.setWindow(range)
     *
     * Where start and end can be a Date, number, or string, and range is an
     * object with properties start and end.
     *
     * @param {Date | number | string | Object} [start] Start date of visible window
     * @param {Date | number | string} [end]            End date of visible window
     * @param {Object} [options]  Available options:
     *                                `animation: boolean | {duration: number, easingFunction: string}`
     *                                    If true (default), the range is animated
     *                                    smoothly to the new window. An object can be
     *                                    provided to specify duration and easing function.
     *                                    Default duration is 500 ms, and default easing
     *                                    function is 'easeInOutQuad'.
     * @param {function} [callback] a callback funtion to be executed at the end of this function
     */

  }, {
    key: 'setWindow',
    value: function setWindow(start, end, options, callback) {
      if (typeof arguments[2] == "function") {
        callback = arguments[2];
        options = {};
      }
      var animation = void 0;
      var range = void 0;
      if (arguments.length == 1) {
        range = arguments[0];
        animation = range.animation !== undefined ? range.animation : true;
        this.range.setRange(range.start, range.end, { animation: animation });
      } else if (arguments.length == 2 && typeof arguments[1] == "function") {
        range = arguments[0];
        callback = arguments[1];
        animation = range.animation !== undefined ? range.animation : true;
        this.range.setRange(range.start, range.end, { animation: animation }, callback);
      } else {
        animation = options && options.animation !== undefined ? options.animation : true;
        this.range.setRange(start, end, { animation: animation }, callback);
      }
    }

    /**
     * Move the window such that given time is centered on screen.
     * @param {Date | number | string} time
     * @param {Object} [options]  Available options:
     *                                `animation: boolean | {duration: number, easingFunction: string}`
     *                                    If true (default), the range is animated
     *                                    smoothly to the new window. An object can be
     *                                    provided to specify duration and easing function.
     *                                    Default duration is 500 ms, and default easing
     *                                    function is 'easeInOutQuad'.
     * @param {function} [callback] a callback funtion to be executed at the end of this function
     */

  }, {
    key: 'moveTo',
    value: function moveTo(time, options, callback) {
      if (typeof arguments[1] == "function") {
        callback = arguments[1];
        options = {};
      }
      var interval = this.range.end - this.range.start;
      var t = util.convert(time, 'Date').valueOf();

      var start = t - interval / 2;
      var end = t + interval / 2;
      var animation = options && options.animation !== undefined ? options.animation : true;

      this.range.setRange(start, end, { animation: animation }, callback);
    }

    /**
     * Get the visible window
     * @return {{start: Date, end: Date}}   Visible range
     */

  }, {
    key: 'getWindow',
    value: function getWindow() {
      var range = this.range.getRange();
      return {
        start: new Date(range.start),
        end: new Date(range.end)
      };
    }

    /**
     * Zoom in the window such that given time is centered on screen.
     * @param {number} percentage - must be between [0..1]
     * @param {Object} [options]  Available options:
     *                                `animation: boolean | {duration: number, easingFunction: string}`
     *                                    If true (default), the range is animated
     *                                    smoothly to the new window. An object can be
     *                                    provided to specify duration and easing function.
     *                                    Default duration is 500 ms, and default easing
     *                                    function is 'easeInOutQuad'.
     * @param {function} [callback] a callback funtion to be executed at the end of this function
     */

  }, {
    key: 'zoomIn',
    value: function zoomIn(percentage, options, callback) {
      if (!percentage || percentage < 0 || percentage > 1) return;
      if (typeof arguments[1] == "function") {
        callback = arguments[1];
        options = {};
      }
      var range = this.getWindow();
      var start = range.start.valueOf();
      var end = range.end.valueOf();
      var interval = end - start;
      var newInterval = interval / (1 + percentage);
      var distance = (interval - newInterval) / 2;
      var newStart = start + distance;
      var newEnd = end - distance;

      this.setWindow(newStart, newEnd, options, callback);
    }

    /**
     * Zoom out the window such that given time is centered on screen.
     * @param {number} percentage - must be between [0..1]
     * @param {Object} [options]  Available options:
     *                                `animation: boolean | {duration: number, easingFunction: string}`
     *                                    If true (default), the range is animated
     *                                    smoothly to the new window. An object can be
     *                                    provided to specify duration and easing function.
     *                                    Default duration is 500 ms, and default easing
     *                                    function is 'easeInOutQuad'.
     * @param {function} [callback] a callback funtion to be executed at the end of this function
     */

  }, {
    key: 'zoomOut',
    value: function zoomOut(percentage, options, callback) {
      if (!percentage || percentage < 0 || percentage > 1) return;
      if (typeof arguments[1] == "function") {
        callback = arguments[1];
        options = {};
      }
      var range = this.getWindow();
      var start = range.start.valueOf();
      var end = range.end.valueOf();
      var interval = end - start;
      var newStart = start - interval * percentage / 2;
      var newEnd = end + interval * percentage / 2;

      this.setWindow(newStart, newEnd, options, callback);
    }

    /**
     * Force a redraw. Can be overridden by implementations of Core
     *
     * Note: this function will be overridden on construction with a trottled version
     */

  }, {
    key: 'redraw',
    value: function redraw() {
      this._redraw();
    }

    /**
     * Redraw for internal use. Redraws all components. See also the public
     * method redraw.
     * @protected
     */

  }, {
    key: '_redraw',
    value: function _redraw() {
      this.redrawCount++;
      var resized = false;
      var options = this.options;
      var props = this.props;
      var dom = this.dom;

      if (!dom || !dom.container || dom.root.offsetWidth == 0) return; // when destroyed, or invisible

      DateUtil.updateHiddenDates(this.options.moment, this.body, this.options.hiddenDates);

      // update class names
      if (options.orientation == 'top') {
        util.addClassName(dom.root, 'timeline-top');
        util.removeClassName(dom.root, 'timeline-bottom');
      } else {
        util.removeClassName(dom.root, 'timeline-top');
        util.addClassName(dom.root, 'timeline-bottom');
      }

      // update root width and height options
      dom.root.style.maxHeight = util.option.asSize(options.maxHeight, '');
      dom.root.style.minHeight = util.option.asSize(options.minHeight, '');
      dom.root.style.width = util.option.asSize(options.width, '');

      // calculate border widths
      props.border.left = (dom.centerContainer.offsetWidth - dom.centerContainer.clientWidth) / 2;
      props.border.right = props.border.left;
      props.border.top = (dom.centerContainer.offsetHeight - dom.centerContainer.clientHeight) / 2;
      props.border.bottom = props.border.top;
      props.borderRootHeight = dom.root.offsetHeight - dom.root.clientHeight;
      props.borderRootWidth = dom.root.offsetWidth - dom.root.clientWidth;

      // workaround for a bug in IE: the clientWidth of an element with
      // a height:0px and overflow:hidden is not calculated and always has value 0
      if (dom.centerContainer.clientHeight === 0) {
        props.border.left = props.border.top;
        props.border.right = props.border.left;
      }
      if (dom.root.clientHeight === 0) {
        props.borderRootWidth = props.borderRootHeight;
      }

      // calculate the heights. If any of the side panels is empty, we set the height to
      // minus the border width, such that the border will be invisible
      props.center.height = dom.center.offsetHeight;
      props.left.height = dom.left.offsetHeight;
      props.right.height = dom.right.offsetHeight;
      props.top.height = dom.top.clientHeight || -props.border.top;
      props.bottom.height = dom.bottom.clientHeight || -props.border.bottom;

      // TODO: compensate borders when any of the panels is empty.

      // apply auto height
      // TODO: only calculate autoHeight when needed (else we cause an extra reflow/repaint of the DOM)
      var contentHeight = Math.max(props.left.height, props.center.height, props.right.height);
      var autoHeight = props.top.height + contentHeight + props.bottom.height + props.borderRootHeight + props.border.top + props.border.bottom;
      dom.root.style.height = util.option.asSize(options.height, autoHeight + 'px');

      // calculate heights of the content panels
      props.root.height = dom.root.offsetHeight;
      props.background.height = props.root.height - props.borderRootHeight;
      var containerHeight = props.root.height - props.top.height - props.bottom.height - props.borderRootHeight;
      props.centerContainer.height = containerHeight;
      props.leftContainer.height = containerHeight;
      props.rightContainer.height = props.leftContainer.height;

      // calculate the widths of the panels
      props.root.width = dom.root.offsetWidth;
      props.background.width = props.root.width - props.borderRootWidth;

      if (!this.initialDrawDone) {
        props.scrollbarWidth = util.getScrollBarWidth();
      }

      if (options.verticalScroll) {
        if (options.rtl) {
          props.left.width = dom.leftContainer.clientWidth || -props.border.left;
          props.right.width = dom.rightContainer.clientWidth + props.scrollbarWidth || -props.border.right;
        } else {
          props.left.width = dom.leftContainer.clientWidth + props.scrollbarWidth || -props.border.left;
          props.right.width = dom.rightContainer.clientWidth || -props.border.right;
        }
      } else {
        props.left.width = dom.leftContainer.clientWidth || -props.border.left;
        props.right.width = dom.rightContainer.clientWidth || -props.border.right;
      }

      this._setDOM();

      // update the scrollTop, feasible range for the offset can be changed
      // when the height of the Core or of the contents of the center changed
      var offset = this._updateScrollTop();

      // reposition the scrollable contents
      if (options.orientation.item != 'top') {
        offset += Math.max(props.centerContainer.height - props.center.height - props.border.top - props.border.bottom, 0);
      }
      dom.center.style.top = offset + 'px';

      // show shadows when vertical scrolling is available
      var visibilityTop = props.scrollTop == 0 ? 'hidden' : '';
      var visibilityBottom = props.scrollTop == props.scrollTopMin ? 'hidden' : '';
      dom.shadowTop.style.visibility = visibilityTop;
      dom.shadowBottom.style.visibility = visibilityBottom;
      dom.shadowTopLeft.style.visibility = visibilityTop;
      dom.shadowBottomLeft.style.visibility = visibilityBottom;
      dom.shadowTopRight.style.visibility = visibilityTop;
      dom.shadowBottomRight.style.visibility = visibilityBottom;

      if (options.verticalScroll) {
        dom.rightContainer.className = 'timeline-panel timeline-right timeline-vertical-scroll';
        dom.leftContainer.className = 'timeline-panel timeline-left timeline-vertical-scroll';

        dom.shadowTopRight.style.visibility = "hidden";
        dom.shadowBottomRight.style.visibility = "hidden";
        dom.shadowTopLeft.style.visibility = "hidden";
        dom.shadowBottomLeft.style.visibility = "hidden";

        dom.left.style.top = '0px';
        dom.right.style.top = '0px';
      }

      if (!options.verticalScroll || props.center.height < props.centerContainer.height) {
        dom.left.style.top = offset + 'px';
        dom.right.style.top = offset + 'px';
        dom.rightContainer.className = dom.rightContainer.className.replace(new RegExp('(?:^|\\s)' + 'timeline-vertical-scroll' + '(?:\\s|$)'), ' ');
        dom.leftContainer.className = dom.leftContainer.className.replace(new RegExp('(?:^|\\s)' + 'timeline-vertical-scroll' + '(?:\\s|$)'), ' ');
        props.left.width = dom.leftContainer.clientWidth || -props.border.left;
        props.right.width = dom.rightContainer.clientWidth || -props.border.right;
        this._setDOM();
      }

      // enable/disable vertical panning
      var contentsOverflow = props.center.height > props.centerContainer.height;
      this.hammer.get('pan').set({
        direction: contentsOverflow ? _hammer2['default'].DIRECTION_ALL : _hammer2['default'].DIRECTION_HORIZONTAL
      });

      // redraw all components
      this.components.forEach(function (component) {
        resized = component.redraw() || resized;
      });
      var MAX_REDRAW = 5;
      if (resized) {
        if (this.redrawCount < MAX_REDRAW) {
          this.body.emitter.emit('_change');
          return;
        } else {
          console.log('WARNING: infinite loop in redraw?');
        }
      } else {
        this.redrawCount = 0;
      }

      //Emit public 'changed' event for UI updates, see issue #1592
      this.body.emitter.emit("changed");
    }
  }, {
    key: '_setDOM',
    value: function _setDOM() {
      var props = this.props;
      var dom = this.dom;

      props.leftContainer.width = props.left.width;
      props.rightContainer.width = props.right.width;
      var centerWidth = props.root.width - props.left.width - props.right.width - props.borderRootWidth;
      props.center.width = centerWidth;
      props.centerContainer.width = centerWidth;
      props.top.width = centerWidth;
      props.bottom.width = centerWidth;

      // resize the panels
      dom.background.style.height = props.background.height + 'px';
      dom.backgroundVertical.style.height = props.background.height + 'px';
      dom.backgroundHorizontal.style.height = props.centerContainer.height + 'px';
      dom.centerContainer.style.height = props.centerContainer.height + 'px';
      dom.leftContainer.style.height = props.leftContainer.height + 'px';
      dom.rightContainer.style.height = props.rightContainer.height + 'px';

      dom.background.style.width = props.background.width + 'px';
      dom.backgroundVertical.style.width = props.centerContainer.width + 'px';
      dom.backgroundHorizontal.style.width = props.background.width + 'px';
      dom.centerContainer.style.width = props.center.width + 'px';
      dom.top.style.width = props.top.width + 'px';
      dom.bottom.style.width = props.bottom.width + 'px';

      // reposition the panels
      dom.background.style.left = '0';
      dom.background.style.top = '0';
      dom.backgroundVertical.style.left = props.left.width + props.border.left + 'px';
      dom.backgroundVertical.style.top = '0';
      dom.backgroundHorizontal.style.left = '0';
      dom.backgroundHorizontal.style.top = props.top.height + 'px';
      dom.centerContainer.style.left = props.left.width + 'px';
      dom.centerContainer.style.top = props.top.height + 'px';
      dom.leftContainer.style.left = '0';
      dom.leftContainer.style.top = props.top.height + 'px';
      dom.rightContainer.style.left = props.left.width + props.center.width + 'px';
      dom.rightContainer.style.top = props.top.height + 'px';
      dom.top.style.left = props.left.width + 'px';
      dom.top.style.top = '0';
      dom.bottom.style.left = props.left.width + 'px';
      dom.bottom.style.top = props.top.height + props.centerContainer.height + 'px';
      dom.center.style.left = '0';
      dom.left.style.left = '0';
      dom.right.style.left = '0';
    }

    // TODO: deprecated since version 1.1.0, remove some day

  }, {
    key: 'repaint',
    value: function repaint() {
      throw new Error('Function repaint is deprecated. Use redraw instead.');
    }

    /**
     * Set a current time. This can be used for example to ensure that a client's
     * time is synchronized with a shared server time.
     * Only applicable when option `showCurrentTime` is true.
     * @param {Date | string | number} time     A Date, unix timestamp, or
     *                                          ISO date string.
     */

  }, {
    key: 'setCurrentTime',
    value: function setCurrentTime(time) {
      if (!this.currentTime) {
        throw new Error('Option showCurrentTime must be true');
      }

      this.currentTime.setCurrentTime(time);
    }

    /**
     * Get the current time.
     * Only applicable when option `showCurrentTime` is true.
     * @return {Date} Returns the current time.
     */

  }, {
    key: 'getCurrentTime',
    value: function getCurrentTime() {
      if (!this.currentTime) {
        throw new Error('Option showCurrentTime must be true');
      }

      return this.currentTime.getCurrentTime();
    }

    /**
     * Convert a position on screen (pixels) to a datetime
     * @param {int}     x    Position on the screen in pixels
     * @return {Date}   time The datetime the corresponds with given position x
     * @protected
     */
    // TODO: move this function to Range

  }, {
    key: '_toTime',
    value: function _toTime(x) {
      return DateUtil.toTime(this, x, this.props.center.width);
    }

    /**
     * Convert a position on the global screen (pixels) to a datetime
     * @param {int}     x    Position on the screen in pixels
     * @return {Date}   time The datetime the corresponds with given position x
     * @protected
     */
    // TODO: move this function to Range

  }, {
    key: '_toGlobalTime',
    value: function _toGlobalTime(x) {
      return DateUtil.toTime(this, x, this.props.root.width);
      //var conversion = this.range.conversion(this.props.root.width);
      //return new Date(x / conversion.scale + conversion.offset);
    }

    /**
     * Convert a datetime (Date object) into a position on the screen
     * @param {Date}   time A date
     * @return {int}   x    The position on the screen in pixels which corresponds
     *                      with the given date.
     * @protected
     */
    // TODO: move this function to Range

  }, {
    key: '_toScreen',
    value: function _toScreen(time) {
      return DateUtil.toScreen(this, time, this.props.center.width);
    }

    /**
     * Convert a datetime (Date object) into a position on the root
     * This is used to get the pixel density estimate for the screen, not the center panel
     * @param {Date}   time A date
     * @return {int}   x    The position on root in pixels which corresponds
     *                      with the given date.
     * @protected
     */
    // TODO: move this function to Range

  }, {
    key: '_toGlobalScreen',
    value: function _toGlobalScreen(time) {
      return DateUtil.toScreen(this, time, this.props.root.width);
      //var conversion = this.range.conversion(this.props.root.width);
      //return (time.valueOf() - conversion.offset) * conversion.scale;
    }

    /**
     * Initialize watching when option autoResize is true
     * @private
     */

  }, {
    key: '_initAutoResize',
    value: function _initAutoResize() {
      if (this.options.autoResize == true) {
        this._startAutoResize();
      } else {
        this._stopAutoResize();
      }
    }

    /**
     * Watch for changes in the size of the container. On resize, the Panel will
     * automatically redraw itself.
     * @private
     */

  }, {
    key: '_startAutoResize',
    value: function _startAutoResize() {
      var me = this;

      this._stopAutoResize();

      this._onResize = function () {
        if (me.options.autoResize != true) {
          // stop watching when the option autoResize is changed to false
          me._stopAutoResize();
          return;
        }

        if (me.dom.root) {
          // check whether the frame is resized
          // Note: we compare offsetWidth here, not clientWidth. For some reason,
          // IE does not restore the clientWidth from 0 to the actual width after
          // changing the timeline's container display style from none to visible
          if (me.dom.root.offsetWidth != me.props.lastWidth || me.dom.root.offsetHeight != me.props.lastHeight) {
            me.props.lastWidth = me.dom.root.offsetWidth;
            me.props.lastHeight = me.dom.root.offsetHeight;
            me.props.scrollbarWidth = util.getScrollBarWidth();

            me.body.emitter.emit('_change');
          }
        }
      };

      // add event listener to window resize
      util.addEventListener(window, 'resize', this._onResize);

      //Prevent initial unnecessary redraw
      if (me.dom.root) {
        me.props.lastWidth = me.dom.root.offsetWidth;
        me.props.lastHeight = me.dom.root.offsetHeight;
      }

      this.watchTimer = setInterval(this._onResize, 1000);
    }

    /**
     * Stop watching for a resize of the frame.
     * @private
     */

  }, {
    key: '_stopAutoResize',
    value: function _stopAutoResize() {
      if (this.watchTimer) {
        clearInterval(this.watchTimer);
        this.watchTimer = undefined;
      }

      // remove event listener on window.resize
      if (this._onResize) {
        util.removeEventListener(window, 'resize', this._onResize);
        this._onResize = null;
      }
    }

    /**
     * Start moving the timeline vertically
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onTouch',
    value: function _onTouch(event) {
      // eslint-disable-line no-unused-vars
      this.touch.allowDragging = true;
      this.touch.initialScrollTop = this.props.scrollTop;
    }

    /**
     * Start moving the timeline vertically
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onPinch',
    value: function _onPinch(event) {
      // eslint-disable-line no-unused-vars
      this.touch.allowDragging = false;
    }

    /**
     * Move the timeline vertically
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onDrag',
    value: function _onDrag(event) {
      if (!event) return;
      // refuse to drag when we where pinching to prevent the timeline make a jump
      // when releasing the fingers in opposite order from the touch screen
      if (!this.touch.allowDragging) return;

      var delta = event.deltaY;

      var oldScrollTop = this._getScrollTop();
      var newScrollTop = this._setScrollTop(this.touch.initialScrollTop + delta);

      if (this.options.verticalScroll) {
        this.dom.left.parentNode.scrollTop = -this.props.scrollTop;
        this.dom.right.parentNode.scrollTop = -this.props.scrollTop;
      }

      if (newScrollTop != oldScrollTop) {
        this.emit("verticalDrag");
      }
    }

    /**
     * Apply a scrollTop
     * @param {number} scrollTop
     * @returns {number} scrollTop  Returns the applied scrollTop
     * @private
     */

  }, {
    key: '_setScrollTop',
    value: function _setScrollTop(scrollTop) {
      this.props.scrollTop = scrollTop;
      this._updateScrollTop();
      return this.props.scrollTop;
    }

    /**
     * Update the current scrollTop when the height of  the containers has been changed
     * @returns {number} scrollTop  Returns the applied scrollTop
     * @private
     */

  }, {
    key: '_updateScrollTop',
    value: function _updateScrollTop() {
      // recalculate the scrollTopMin
      var scrollTopMin = Math.min(this.props.centerContainer.height - this.props.center.height, 0); // is negative or zero
      if (scrollTopMin != this.props.scrollTopMin) {
        // in case of bottom orientation, change the scrollTop such that the contents
        // do not move relative to the time axis at the bottom
        if (this.options.orientation.item != 'top') {
          this.props.scrollTop += scrollTopMin - this.props.scrollTopMin;
        }
        this.props.scrollTopMin = scrollTopMin;
      }

      // limit the scrollTop to the feasible scroll range
      if (this.props.scrollTop > 0) this.props.scrollTop = 0;
      if (this.props.scrollTop < scrollTopMin) this.props.scrollTop = scrollTopMin;

      if (this.options.verticalScroll) {
        this.dom.left.parentNode.scrollTop = -this.props.scrollTop;
        this.dom.right.parentNode.scrollTop = -this.props.scrollTop;
      }

      return this.props.scrollTop;
    }

    /**
     * Get the current scrollTop
     * @returns {number} scrollTop
     * @private
     */

  }, {
    key: '_getScrollTop',
    value: function _getScrollTop() {
      return this.props.scrollTop;
    }

    /**
     * Load a configurator
     * [at]returns {Object}
     * @private
     */

  }, {
    key: '_createConfigurator',
    value: function _createConfigurator() {
      throw new Error('Cannot invoke abstract method _createConfigurator');
    }
  }]);
  return Core;
}();

// turn Core into an event emitter


(0, _emitterComponent2['default'])(Core.prototype);

exports['default'] = Core;

/***/ }),
/* 71 */
/***/ (function(module, exports) {


/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onTouch = onTouch;
exports.onRelease = onRelease;
exports.offTouch = offTouch;
exports.disablePreventDefaultVertically = disablePreventDefaultVertically;
/**
 * Register a touch event, taking place before a gesture
 * @param {Hammer} hammer       A hammer instance
 * @param {function} callback   Callback, called as callback(event)
 */
function onTouch(hammer, callback) {
  callback.inputHandler = function (event) {
    if (event.isFirst) {
      callback(event);
    }
  };

  hammer.on('hammer.input', callback.inputHandler);
}

/**
 * Register a release event, taking place after a gesture
 * @param {Hammer} hammer       A hammer instance
 * @param {function} callback   Callback, called as callback(event)
 * @returns {*}
 */
function onRelease(hammer, callback) {
  callback.inputHandler = function (event) {
    if (event.isFinal) {
      callback(event);
    }
  };

  return hammer.on('hammer.input', callback.inputHandler);
}

/**
 * Unregister a touch event, taking place before a gesture
 * @param {Hammer} hammer       A hammer instance
 * @param {function} callback   Callback, called as callback(event)
 */
function offTouch(hammer, callback) {
  hammer.off('hammer.input', callback.inputHandler);
}

/**
 * Unregister a release event, taking place before a gesture
 * @param {Hammer} hammer       A hammer instance
 * @param {function} callback   Callback, called as callback(event)
 */
var offRelease = exports.offRelease = exports.offTouch;

/**
 * Hack the PinchRecognizer such that it doesn't prevent default behavior
 * for vertical panning.
 *
 * Yeah ... this is quite a hack ... see https://github.com/hammerjs/hammer.js/issues/932
 *
 * @param {Hammer.Pinch} pinchRecognizer
 * @return {Hammer.Pinch} returns the pinchRecognizer
 */
function disablePreventDefaultVertically(pinchRecognizer) {
  var TOUCH_ACTION_PAN_Y = 'pan-y';

  pinchRecognizer.getTouchAction = function () {
    return (// default method returns [TOUCH_ACTION_NONE]
      [TOUCH_ACTION_PAN_Y]
    );
  };

  return pinchRecognizer;
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * Created by Alex on 11/6/2014.
 */

// https://github.com/umdjs/umd/blob/master/returnExports.js#L40-L60
// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.keycharm = factory();
  }
}(this, function () {

  function keycharm(options) {
    var preventDefault = options && options.preventDefault || false;

    var container = options && options.container || window;

    var _exportFunctions = {};
    var _bound = {keydown:{}, keyup:{}};
    var _keys = {};
    var i;

    // a - z
    for (i = 97; i <= 122; i++) {_keys[String.fromCharCode(i)] = {code:65 + (i - 97), shift: false};}
    // A - Z
    for (i = 65; i <= 90; i++) {_keys[String.fromCharCode(i)] = {code:i, shift: true};}
    // 0 - 9
    for (i = 0;  i <= 9;   i++) {_keys['' + i] = {code:48 + i, shift: false};}
    // F1 - F12
    for (i = 1;  i <= 12;   i++) {_keys['F' + i] = {code:111 + i, shift: false};}
    // num0 - num9
    for (i = 0;  i <= 9;   i++) {_keys['num' + i] = {code:96 + i, shift: false};}

    // numpad misc
    _keys['num*'] = {code:106, shift: false};
    _keys['num+'] = {code:107, shift: false};
    _keys['num-'] = {code:109, shift: false};
    _keys['num/'] = {code:111, shift: false};
    _keys['num.'] = {code:110, shift: false};
    // arrows
    _keys['left']  = {code:37, shift: false};
    _keys['up']    = {code:38, shift: false};
    _keys['right'] = {code:39, shift: false};
    _keys['down']  = {code:40, shift: false};
    // extra keys
    _keys['space'] = {code:32, shift: false};
    _keys['enter'] = {code:13, shift: false};
    _keys['shift'] = {code:16, shift: undefined};
    _keys['esc']   = {code:27, shift: false};
    _keys['backspace'] = {code:8, shift: false};
    _keys['tab']       = {code:9, shift: false};
    _keys['ctrl']      = {code:17, shift: false};
    _keys['alt']       = {code:18, shift: false};
    _keys['delete']    = {code:46, shift: false};
    _keys['pageup']    = {code:33, shift: false};
    _keys['pagedown']  = {code:34, shift: false};
    // symbols
    _keys['=']     = {code:187, shift: false};
    _keys['-']     = {code:189, shift: false};
    _keys[']']     = {code:221, shift: false};
    _keys['[']     = {code:219, shift: false};



    var down = function(event) {handleEvent(event,'keydown');};
    var up = function(event) {handleEvent(event,'keyup');};

    // handle the actualy bound key with the event
    var handleEvent = function(event,type) {
      if (_bound[type][event.keyCode] !== undefined) {
        var bound = _bound[type][event.keyCode];
        for (var i = 0; i < bound.length; i++) {
          if (bound[i].shift === undefined) {
            bound[i].fn(event);
          }
          else if (bound[i].shift == true && event.shiftKey == true) {
            bound[i].fn(event);
          }
          else if (bound[i].shift == false && event.shiftKey == false) {
            bound[i].fn(event);
          }
        }

        if (preventDefault == true) {
          event.preventDefault();
        }
      }
    };

    // bind a key to a callback
    _exportFunctions.bind = function(key, callback, type) {
      if (type === undefined) {
        type = 'keydown';
      }
      if (_keys[key] === undefined) {
        throw new Error("unsupported key: " + key);
      }
      if (_bound[type][_keys[key].code] === undefined) {
        _bound[type][_keys[key].code] = [];
      }
      _bound[type][_keys[key].code].push({fn:callback, shift:_keys[key].shift});
    };


    // bind all keys to a call back (demo purposes)
    _exportFunctions.bindAll = function(callback, type) {
      if (type === undefined) {
        type = 'keydown';
      }
      for (var key in _keys) {
        if (_keys.hasOwnProperty(key)) {
          _exportFunctions.bind(key,callback,type);
        }
      }
    };

    // get the key label from an event
    _exportFunctions.getKey = function(event) {
      for (var key in _keys) {
        if (_keys.hasOwnProperty(key)) {
          if (event.shiftKey == true && _keys[key].shift == true && event.keyCode == _keys[key].code) {
            return key;
          }
          else if (event.shiftKey == false && _keys[key].shift == false && event.keyCode == _keys[key].code) {
            return key;
          }
          else if (event.keyCode == _keys[key].code && key == 'shift') {
            return key;
          }
        }
      }
      return "unknown key, currently not supported";
    };

    // unbind either a specific callback from a key or all of them (by leaving callback undefined)
    _exportFunctions.unbind = function(key, callback, type) {
      if (type === undefined) {
        type = 'keydown';
      }
      if (_keys[key] === undefined) {
        throw new Error("unsupported key: " + key);
      }
      if (callback !== undefined) {
        var newBindings = [];
        var bound = _bound[type][_keys[key].code];
        if (bound !== undefined) {
          for (var i = 0; i < bound.length; i++) {
            if (!(bound[i].fn == callback && bound[i].shift == _keys[key].shift)) {
              newBindings.push(_bound[type][_keys[key].code][i]);
            }
          }
        }
        _bound[type][_keys[key].code] = newBindings;
      }
      else {
        _bound[type][_keys[key].code] = [];
      }
    };

    // reset all bound variables.
    _exportFunctions.reset = function() {
      _bound = {keydown:{}, keyup:{}};
    };

    // unbind all listeners and reset all variables.
    _exportFunctions.destroy = function() {
      _bound = {keydown:{}, keyup:{}};
      container.removeEventListener('keydown', down, true);
      container.removeEventListener('keyup', up, true);
    };

    // create listeners.
    container.addEventListener('keydown',down,true);
    container.addEventListener('keyup',up,true);

    // return the public functions.
    return _exportFunctions;
  }

  return keycharm;
}));




/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// English
exports['en'] = {
  current: 'current',
  time: 'time'
};
exports['en_EN'] = exports['en'];
exports['en_US'] = exports['en'];

// Italiano
exports['it'] = {
  current: 'attuale',
  time: 'tempo'
};
exports['it_IT'] = exports['it'];
exports['it_CH'] = exports['it'];

// Dutch
exports['nl'] = {
  current: 'huidige',
  time: 'tijd'
};
exports['nl_NL'] = exports['nl'];
exports['nl_BE'] = exports['nl'];

// German
exports['de'] = {
  current: 'Aktuelle',
  time: 'Zeit'
};
exports['de_DE'] = exports['de'];

// French
exports['fr'] = {
  current: 'actuel',
  time: 'heure'
};
exports['fr_FR'] = exports['fr'];
exports['fr_CA'] = exports['fr'];
exports['fr_BE'] = exports['fr'];

// Espanol
exports['es'] = {
  current: 'corriente',
  time: 'hora'
};
exports['es_ES'] = exports['es'];

// Ukrainian
exports['uk'] = {
  current: 'поточний',
  time: 'час'
};
exports['uk_UA'] = exports['uk'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

var _Component2 = __webpack_require__(15);

var _Component3 = _interopRequireDefault(_Component2);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _locales = __webpack_require__(74);

var _locales2 = _interopRequireDefault(_locales);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * A current time bar
 * @param {{range: Range, dom: Object, domProps: Object}} body
 * @param {Object} [options]        Available parameters:
 *                                  {Boolean} [showCurrentTime]
 *                                  {String}  [alignCurrentTime]
 * @constructor CurrentTime
 * @extends Component
 */
var CurrentTime = function (_Component) {
  (0, _inherits3['default'])(CurrentTime, _Component);

  function CurrentTime(body, options) {
    (0, _classCallCheck3['default'])(this, CurrentTime);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (CurrentTime.__proto__ || (0, _getPrototypeOf2['default'])(CurrentTime)).call(this));

    _this.body = body;

    // default options
    _this.defaultOptions = {
      rtl: false,
      showCurrentTime: true,
      alignCurrentTime: undefined,

      moment: _moment2['default'],
      locales: _locales2['default'],
      locale: 'en'
    };
    _this.options = util.extend({}, _this.defaultOptions);
    _this.offset = 0;

    _this._create();

    _this.setOptions(options);
    return _this;
  }

  /**
   * Create the HTML DOM for the current time bar
   * @private
   */


  (0, _createClass3['default'])(CurrentTime, [{
    key: '_create',
    value: function _create() {
      var bar = document.createElement('div');
      bar.className = 'timeline-current-time';
      bar.style.position = 'absolute';
      bar.style.top = '0px';
      bar.style.height = '100%';

      this.bar = bar;
    }

    /**
     * Destroy the CurrentTime bar
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.options.showCurrentTime = false;
      this.redraw(); // will remove the bar from the DOM and stop refreshing

      this.body = null;
    }

    /**
     * Set options for the component. Options will be merged in current options.
     * @param {Object} options  Available parameters:
     *                          {boolean} [showCurrentTime]
     *                          {String}  [alignCurrentTime]
     */

  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      if (options) {
        // copy all options that we know
        util.selectiveExtend(['rtl', 'showCurrentTime', 'alignCurrentTime', 'moment', 'locale', 'locales'], this.options, options);
      }
    }

    /**
     * Repaint the component
     * @return {boolean} Returns true if the component is resized
     */

  }, {
    key: 'redraw',
    value: function redraw() {
      if (this.options.showCurrentTime) {
        var parent = this.body.dom.backgroundVertical;
        if (this.bar.parentNode != parent) {
          // attach to the dom
          if (this.bar.parentNode) {
            this.bar.parentNode.removeChild(this.bar);
          }
          parent.appendChild(this.bar);

          this.start();
        }

        var now = this.options.moment(new Date().valueOf() + this.offset);

        if (this.options.alignCurrentTime) {
          now = now.startOf(this.options.alignCurrentTime);
        }

        var x = this.body.util.toScreen(now);

        var locale = this.options.locales[this.options.locale];
        if (!locale) {
          if (!this.warned) {
            console.log('WARNING: options.locales[\'' + this.options.locale + '\'] not found. See http://visjs.org/docs/timeline/#Localization');
            this.warned = true;
          }
          locale = this.options.locales['en']; // fall back on english when not available
        }
        var title = locale.current + ' ' + locale.time + ': ' + now.format('dddd, MMMM Do YYYY, H:mm:ss');
        title = title.charAt(0).toUpperCase() + title.substring(1);

        if (this.options.rtl) {
          this.bar.style.right = x + 'px';
        } else {
          this.bar.style.left = x + 'px';
        }
        this.bar.title = title;
      } else {
        // remove the line from the DOM
        if (this.bar.parentNode) {
          this.bar.parentNode.removeChild(this.bar);
        }
        this.stop();
      }

      return false;
    }

    /**
     * Start auto refreshing the current time bar
     */

  }, {
    key: 'start',
    value: function start() {
      var me = this;

      /**
       *  Updates the current time.
       */
      function update() {
        me.stop();

        // determine interval to refresh
        var scale = me.body.range.conversion(me.body.domProps.center.width).scale;
        var interval = 1 / scale / 10;
        if (interval < 30) interval = 30;
        if (interval > 1000) interval = 1000;

        me.redraw();
        me.body.emitter.emit('currentTimeTick');

        // start a renderTimer to adjust for the new time
        me.currentTimeTimer = setTimeout(update, interval);
      }

      update();
    }

    /**
     * Stop auto refreshing the current time bar
     */

  }, {
    key: 'stop',
    value: function stop() {
      if (this.currentTimeTimer !== undefined) {
        clearTimeout(this.currentTimeTimer);
        delete this.currentTimeTimer;
      }
    }

    /**
     * Set a current time. This can be used for example to ensure that a client's
     * time is synchronized with a shared server time.
     * @param {Date | string | number} time     A Date, unix timestamp, or
     *                                          ISO date string.
     */

  }, {
    key: 'setCurrentTime',
    value: function setCurrentTime(time) {
      var t = util.convert(time, 'Date').valueOf();
      var now = new Date().valueOf();
      this.offset = t - now;
      this.redraw();
    }

    /**
     * Get the current time.
     * @return {Date} Returns the current time.
     */

  }, {
    key: 'getCurrentTime',
    value: function getCurrentTime() {
      return new Date(new Date().valueOf() + this.offset);
    }
  }]);
  return CurrentTime;
}(_Component3['default']);

exports['default'] = CurrentTime;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create2 = __webpack_require__(33);

var _create3 = _interopRequireDefault(_create2);

var _getIterator2 = __webpack_require__(24);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _typeof2 = __webpack_require__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _hammer = __webpack_require__(16);

var _hammer2 = _interopRequireDefault(_hammer);

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

var _DataSet = __webpack_require__(32);

var _DataSet2 = _interopRequireDefault(_DataSet);

var _DataView = __webpack_require__(47);

var _DataView2 = _interopRequireDefault(_DataView);

var _TimeStep = __webpack_require__(49);

var _TimeStep2 = _interopRequireDefault(_TimeStep);

var _Component2 = __webpack_require__(15);

var _Component3 = _interopRequireDefault(_Component2);

var _Group = __webpack_require__(51);

var _Group2 = _interopRequireDefault(_Group);

var _BackgroundGroup = __webpack_require__(52);

var _BackgroundGroup2 = _interopRequireDefault(_BackgroundGroup);

var _BoxItem = __webpack_require__(78);

var _BoxItem2 = _interopRequireDefault(_BoxItem);

var _PointItem = __webpack_require__(79);

var _PointItem2 = _interopRequireDefault(_PointItem);

var _RangeItem = __webpack_require__(53);

var _RangeItem2 = _interopRequireDefault(_RangeItem);

var _BackgroundItem = __webpack_require__(80);

var _BackgroundItem2 = _interopRequireDefault(_BackgroundItem);

var _Popup = __webpack_require__(134);

var _Popup2 = _interopRequireDefault(_Popup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var UNGROUPED = '__ungrouped__'; // reserved group id for ungrouped items
var BACKGROUND = '__background__'; // reserved group id for background items without group

/**
 * An ItemSet holds a set of items and ranges which can be displayed in a
 * range. The width is determined by the parent of the ItemSet, and the height
 * is determined by the size of the items.
 */

var ItemSet = function (_Component) {
  (0, _inherits3['default'])(ItemSet, _Component);

  /**
  * @param {{dom: Object, domProps: Object, emitter: Emitter, range: Range}} body
  * @param {Object} [options]      See ItemSet.setOptions for the available options.
  * @constructor ItemSet
  * @extends Component
  */
  function ItemSet(body, options) {
    (0, _classCallCheck3['default'])(this, ItemSet);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (ItemSet.__proto__ || (0, _getPrototypeOf2['default'])(ItemSet)).call(this));

    _this.body = body;
    _this.defaultOptions = {
      type: null, // 'box', 'point', 'range', 'background'
      orientation: {
        item: 'bottom' // item orientation: 'top' or 'bottom'
      },
      align: 'auto', // alignment of box items
      stack: true,
      stackSubgroups: true,
      groupOrderSwap: function groupOrderSwap(fromGroup, toGroup, groups) {
        // eslint-disable-line no-unused-vars
        var targetOrder = toGroup.order;
        toGroup.order = fromGroup.order;
        fromGroup.order = targetOrder;
      },

      groupOrder: 'order',

      selectable: true,
      multiselect: false,
      itemsAlwaysDraggable: {
        item: false,
        range: false
      },

      editable: {
        updateTime: false,
        updateGroup: false,
        add: false,
        remove: false,
        overrideItems: false
      },

      groupEditable: {
        order: false,
        add: false,
        remove: false
      },

      snap: _TimeStep2['default'].snap,

      // Only called when `objectData.target === 'item'.
      onDropObjectOnItem: function onDropObjectOnItem(objectData, item, callback) {
        callback(item);
      },
      onAdd: function onAdd(item, callback) {
        callback(item);
      },
      onUpdate: function onUpdate(item, callback) {
        callback(item);
      },
      onMove: function onMove(item, callback) {
        callback(item);
      },
      onRemove: function onRemove(item, callback) {
        callback(item);
      },
      onMoving: function onMoving(item, callback) {
        callback(item);
      },
      onAddGroup: function onAddGroup(item, callback) {
        callback(item);
      },
      onMoveGroup: function onMoveGroup(item, callback) {
        callback(item);
      },
      onRemoveGroup: function onRemoveGroup(item, callback) {
        callback(item);
      },


      margin: {
        item: {
          horizontal: 10,
          vertical: 10
        },
        axis: 20
      },

      showTooltips: true,

      tooltip: {
        followMouse: false,
        overflowMethod: 'flip'
      },

      tooltipOnItemUpdateTime: false
    };

    // options is shared by this ItemSet and all its items
    _this.options = util.extend({}, _this.defaultOptions);
    _this.options.rtl = options.rtl;
    _this.options.onTimeout = options.onTimeout;

    // options for getting items from the DataSet with the correct type
    _this.itemOptions = {
      type: { start: 'Date', end: 'Date' }
    };

    _this.conversion = {
      toScreen: body.util.toScreen,
      toTime: body.util.toTime
    };
    _this.dom = {};
    _this.props = {};
    _this.hammer = null;

    var me = _this;
    _this.itemsData = null; // DataSet
    _this.groupsData = null; // DataSet
    _this.itemsSettingTime = null;
    _this.initialItemSetDrawn = false;
    _this.userContinueNotBail = null;

    // listeners for the DataSet of the items
    _this.itemListeners = {
      'add': function add(event, params, senderId) {
        // eslint-disable-line no-unused-vars
        me._onAdd(params.items);
      },
      'update': function update(event, params, senderId) {
        // eslint-disable-line no-unused-vars
        me._onUpdate(params.items);
      },
      'remove': function remove(event, params, senderId) {
        // eslint-disable-line no-unused-vars
        me._onRemove(params.items);
      }
    };

    // listeners for the DataSet of the groups
    _this.groupListeners = {
      'add': function add(event, params, senderId) {
        // eslint-disable-line no-unused-vars
        me._onAddGroups(params.items);

        if (me.groupsData && me.groupsData.length > 0) {
          var groupsData = me.groupsData.getDataSet();
          groupsData.get().forEach(function (groupData) {
            if (groupData.nestedGroups) {
              if (groupData.showNested != false) {
                groupData.showNested = true;
              }
              var updatedGroups = [];
              groupData.nestedGroups.forEach(function (nestedGroupId) {
                var updatedNestedGroup = groupsData.get(nestedGroupId);
                if (!updatedNestedGroup) {
                  return;
                }
                updatedNestedGroup.nestedInGroup = groupData.id;
                if (groupData.showNested == false) {
                  updatedNestedGroup.visible = false;
                }
                updatedGroups = updatedGroups.concat(updatedNestedGroup);
              });
              groupsData.update(updatedGroups, senderId);
            }
          });
        }
      },
      'update': function update(event, params, senderId) {
        // eslint-disable-line no-unused-vars
        me._onUpdateGroups(params.items);
      },
      'remove': function remove(event, params, senderId) {
        // eslint-disable-line no-unused-vars
        me._onRemoveGroups(params.items);
      }
    };

    _this.items = {}; // object with an Item for every data item
    _this.groups = {}; // Group object for every group
    _this.groupIds = [];

    _this.selection = []; // list with the ids of all selected nodes

    _this.popup = null;

    _this.touchParams = {}; // stores properties while dragging
    _this.groupTouchParams = {};
    // create the HTML DOM

    _this._create();

    _this.setOptions(options);
    return _this;
  }

  /**
   * Create the HTML DOM for the ItemSet
   */


  (0, _createClass3['default'])(ItemSet, [{
    key: '_create',
    value: function _create() {
      var _this2 = this;

      var frame = document.createElement('div');
      frame.className = 'timeline-itemset';
      frame['timeline-itemset'] = this;
      this.dom.frame = frame;

      // create background panel
      var background = document.createElement('div');
      background.className = 'timeline-background';
      frame.appendChild(background);
      this.dom.background = background;

      // create foreground panel
      var foreground = document.createElement('div');
      foreground.className = 'timeline-foreground';
      frame.appendChild(foreground);
      this.dom.foreground = foreground;

      // create axis panel
      var axis = document.createElement('div');
      axis.className = 'timeline-axis';
      this.dom.axis = axis;

      // create labelset
      var labelSet = document.createElement('div');
      labelSet.className = 'timeline-labelset';
      this.dom.labelSet = labelSet;

      // create ungrouped Group
      this._updateUngrouped();

      // create background Group
      var backgroundGroup = new _BackgroundGroup2['default'](BACKGROUND, null, this);
      backgroundGroup.show();
      this.groups[BACKGROUND] = backgroundGroup;

      // attach event listeners
      // Note: we bind to the centerContainer for the case where the height
      //       of the center container is larger than of the ItemSet, so we
      //       can click in the empty area to create a new item or deselect an item.
      this.hammer = new _hammer2['default'](this.body.dom.centerContainer);

      // drag items when selected
      this.hammer.on('hammer.input', function (event) {
        if (event.isFirst) {
          _this2._onTouch(event);
        }
      });
      this.hammer.on('panstart', this._onDragStart.bind(this));
      this.hammer.on('panmove', this._onDrag.bind(this));
      this.hammer.on('panend', this._onDragEnd.bind(this));
      this.hammer.get('pan').set({ threshold: 5, direction: _hammer2['default'].DIRECTION_HORIZONTAL });

      // single select (or unselect) when tapping an item
      this.hammer.on('tap', this._onSelectItem.bind(this));

      // multi select when holding mouse/touch, or on ctrl+click
      this.hammer.on('press', this._onMultiSelectItem.bind(this));

      // add item on doubletap
      this.hammer.on('doubletap', this._onAddItem.bind(this));

      if (this.options.rtl) {
        this.groupHammer = new _hammer2['default'](this.body.dom.rightContainer);
      } else {
        this.groupHammer = new _hammer2['default'](this.body.dom.leftContainer);
      }

      this.groupHammer.on('tap', this._onGroupClick.bind(this));
      this.groupHammer.on('panstart', this._onGroupDragStart.bind(this));
      this.groupHammer.on('panmove', this._onGroupDrag.bind(this));
      this.groupHammer.on('panend', this._onGroupDragEnd.bind(this));
      this.groupHammer.get('pan').set({ threshold: 5, direction: _hammer2['default'].DIRECTION_VERTICAL });

      this.body.dom.centerContainer.addEventListener('mouseover', this._onMouseOver.bind(this));
      this.body.dom.centerContainer.addEventListener('mouseout', this._onMouseOut.bind(this));
      this.body.dom.centerContainer.addEventListener('mousemove', this._onMouseMove.bind(this));
      // right-click on timeline 
      this.body.dom.centerContainer.addEventListener('contextmenu', this._onDragEnd.bind(this));

      this.body.dom.centerContainer.addEventListener('mousewheel', this._onMouseWheel.bind(this));

      // attach to the DOM
      this.show();
    }

    /**
     * Set options for the ItemSet. Existing options will be extended/overwritten.
     * @param {Object} [options] The following options are available:
     *                           {string} type
     *                              Default type for the items. Choose from 'box'
     *                              (default), 'point', 'range', or 'background'.
     *                              The default style can be overwritten by
     *                              individual items.
     *                           {string} align
     *                              Alignment for the items, only applicable for
     *                              BoxItem. Choose 'center' (default), 'left', or
     *                              'right'.
     *                           {string} orientation.item
     *                              Orientation of the item set. Choose 'top' or
     *                              'bottom' (default).
     *                           {Function} groupOrder
     *                              A sorting function for ordering groups
     *                           {boolean} stack
     *                              If true (default), items will be stacked on
     *                              top of each other.
     *                           {number} margin.axis
     *                              Margin between the axis and the items in pixels.
     *                              Default is 20.
     *                           {number} margin.item.horizontal
     *                              Horizontal margin between items in pixels.
     *                              Default is 10.
     *                           {number} margin.item.vertical
     *                              Vertical Margin between items in pixels.
     *                              Default is 10.
     *                           {number} margin.item
     *                              Margin between items in pixels in both horizontal
     *                              and vertical direction. Default is 10.
     *                           {number} margin
     *                              Set margin for both axis and items in pixels.
     *                           {boolean} selectable
     *                              If true (default), items can be selected.
     *                           {boolean} multiselect
     *                              If true, multiple items can be selected.
     *                              False by default.
     *                           {boolean} editable
     *                              Set all editable options to true or false
     *                           {boolean} editable.updateTime
     *                              Allow dragging an item to an other moment in time
     *                           {boolean} editable.updateGroup
     *                              Allow dragging an item to an other group
     *                           {boolean} editable.add
     *                              Allow creating new items on double tap
     *                           {boolean} editable.remove
     *                              Allow removing items by clicking the delete button
     *                              top right of a selected item.
     *                           {Function(item: Item, callback: Function)} onAdd
     *                              Callback function triggered when an item is about to be added:
     *                              when the user double taps an empty space in the Timeline.
     *                           {Function(item: Item, callback: Function)} onUpdate
     *                              Callback function fired when an item is about to be updated.
     *                              This function typically has to show a dialog where the user
     *                              change the item. If not implemented, nothing happens.
     *                           {Function(item: Item, callback: Function)} onMove
     *                              Fired when an item has been moved. If not implemented,
     *                              the move action will be accepted.
     *                           {Function(item: Item, callback: Function)} onRemove
     *                              Fired when an item is about to be deleted.
     *                              If not implemented, the item will be always removed.
     */

  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this3 = this;

      if (options) {
        // copy all options that we know
        var fields = ['type', 'rtl', 'align', 'order', 'stack', 'stackSubgroups', 'selectable', 'multiselect', 'multiselectPerGroup', 'groupOrder', 'dataAttributes', 'template', 'groupTemplate', 'visibleFrameTemplate', 'hide', 'snap', 'groupOrderSwap', 'showTooltips', 'tooltip', 'tooltipOnItemUpdateTime', 'groupHeightMode', 'onTimeout'];
        util.selectiveExtend(fields, this.options, options);

        if ('itemsAlwaysDraggable' in options) {
          if (typeof options.itemsAlwaysDraggable === 'boolean') {
            this.options.itemsAlwaysDraggable.item = options.itemsAlwaysDraggable;
            this.options.itemsAlwaysDraggable.range = false;
          } else if ((0, _typeof3['default'])(options.itemsAlwaysDraggable) === 'object') {
            util.selectiveExtend(['item', 'range'], this.options.itemsAlwaysDraggable, options.itemsAlwaysDraggable);
            // only allow range always draggable when item is always draggable as well
            if (!this.options.itemsAlwaysDraggable.item) {
              this.options.itemsAlwaysDraggable.range = false;
            }
          }
        }

        if ('orientation' in options) {
          if (typeof options.orientation === 'string') {
            this.options.orientation.item = options.orientation === 'top' ? 'top' : 'bottom';
          } else if ((0, _typeof3['default'])(options.orientation) === 'object' && 'item' in options.orientation) {
            this.options.orientation.item = options.orientation.item;
          }
        }

        if ('margin' in options) {
          if (typeof options.margin === 'number') {
            this.options.margin.axis = options.margin;
            this.options.margin.item.horizontal = options.margin;
            this.options.margin.item.vertical = options.margin;
          } else if ((0, _typeof3['default'])(options.margin) === 'object') {
            util.selectiveExtend(['axis'], this.options.margin, options.margin);
            if ('item' in options.margin) {
              if (typeof options.margin.item === 'number') {
                this.options.margin.item.horizontal = options.margin.item;
                this.options.margin.item.vertical = options.margin.item;
              } else if ((0, _typeof3['default'])(options.margin.item) === 'object') {
                util.selectiveExtend(['horizontal', 'vertical'], this.options.margin.item, options.margin.item);
              }
            }
          }
        }

        if ('editable' in options) {
          if (typeof options.editable === 'boolean') {
            this.options.editable.updateTime = options.editable;
            this.options.editable.updateGroup = options.editable;
            this.options.editable.add = options.editable;
            this.options.editable.remove = options.editable;
            this.options.editable.overrideItems = false;
          } else if ((0, _typeof3['default'])(options.editable) === 'object') {
            util.selectiveExtend(['updateTime', 'updateGroup', 'add', 'remove', 'overrideItems'], this.options.editable, options.editable);
          }
        }

        if ('groupEditable' in options) {
          if (typeof options.groupEditable === 'boolean') {
            this.options.groupEditable.order = options.groupEditable;
            this.options.groupEditable.add = options.groupEditable;
            this.options.groupEditable.remove = options.groupEditable;
          } else if ((0, _typeof3['default'])(options.groupEditable) === 'object') {
            util.selectiveExtend(['order', 'add', 'remove'], this.options.groupEditable, options.groupEditable);
          }
        }

        // callback functions
        var addCallback = function addCallback(name) {
          var fn = options[name];
          if (fn) {
            if (!(typeof fn === 'function')) {
              throw new Error('option ' + name + ' must be a function ' + name + '(item, callback)');
            }
            _this3.options[name] = fn;
          }
        };
        ['onDropObjectOnItem', 'onAdd', 'onUpdate', 'onRemove', 'onMove', 'onMoving', 'onAddGroup', 'onMoveGroup', 'onRemoveGroup'].forEach(addCallback);

        // force the itemSet to refresh: options like orientation and margins may be changed
        this.markDirty();
      }
    }

    /**
     * Mark the ItemSet dirty so it will refresh everything with next redraw.
     * Optionally, all items can be marked as dirty and be refreshed.
     * @param {{refreshItems: boolean}} [options]
     */

  }, {
    key: 'markDirty',
    value: function markDirty(options) {
      this.groupIds = [];

      if (options && options.refreshItems) {
        util.forEach(this.items, function (item) {
          item.dirty = true;
          if (item.displayed) item.redraw();
        });
      }
    }

    /**
     * Destroy the ItemSet
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.hide();
      this.setItems(null);
      this.setGroups(null);

      this.hammer && this.hammer.destroy();
      this.groupHammer && this.groupHammer.destroy();
      this.hammer = null;

      this.body = null;
      this.conversion = null;
    }

    /**
     * Hide the component from the DOM
     */

  }, {
    key: 'hide',
    value: function hide() {
      // remove the frame containing the items
      if (this.dom.frame.parentNode) {
        this.dom.frame.parentNode.removeChild(this.dom.frame);
      }

      // remove the axis with dots
      if (this.dom.axis.parentNode) {
        this.dom.axis.parentNode.removeChild(this.dom.axis);
      }

      // remove the labelset containing all group labels
      if (this.dom.labelSet.parentNode) {
        this.dom.labelSet.parentNode.removeChild(this.dom.labelSet);
      }
    }

    /**
     * Show the component in the DOM (when not already visible).
     */

  }, {
    key: 'show',
    value: function show() {
      // show frame containing the items
      if (!this.dom.frame.parentNode) {
        this.body.dom.center.appendChild(this.dom.frame);
      }

      // show axis with dots
      if (!this.dom.axis.parentNode) {
        this.body.dom.backgroundVertical.appendChild(this.dom.axis);
      }

      // show labelset containing labels
      if (!this.dom.labelSet.parentNode) {
        if (this.options.rtl) {
          this.body.dom.right.appendChild(this.dom.labelSet);
        } else {
          this.body.dom.left.appendChild(this.dom.labelSet);
        }
      }
    }

    /**
     * Set selected items by their id. Replaces the current selection
     * Unknown id's are silently ignored.
     * @param {string[] | string} [ids] An array with zero or more id's of the items to be
     *                                  selected, or a single item id. If ids is undefined
     *                                  or an empty array, all items will be unselected.
     */

  }, {
    key: 'setSelection',
    value: function setSelection(ids) {
      var i = void 0;
      var ii = void 0;
      var id = void 0;
      var item = void 0;

      if (ids == undefined) ids = [];
      if (!Array.isArray(ids)) ids = [ids];

      // unselect currently selected items
      for (i = 0, ii = this.selection.length; i < ii; i++) {
        id = this.selection[i];
        item = this.items[id];
        if (item && ids.indexOf(id) < 0) item.unselect();
      }

      // select items
      this.selection = [];
      for (i = 0, ii = ids.length; i < ii; i++) {
        id = ids[i];
        item = this.items[id];
        if (item) {
          this.selection.push(id);
          item.select();
        }
      }
    }

    /**
     * Get the selected items by their id
     * @return {Array} ids  The ids of the selected items
     */

  }, {
    key: 'getSelection',
    value: function getSelection() {
      return this.selection.concat([]);
    }

    /**
     * Get the id's of the currently visible items.
     * @returns {Array} The ids of the visible items
     */

  }, {
    key: 'getVisibleItems',
    value: function getVisibleItems() {
      var range = this.body.range.getRange();
      var right = void 0;
      var left = void 0;

      if (this.options.rtl) {
        right = this.body.util.toScreen(range.start);
        left = this.body.util.toScreen(range.end);
      } else {
        left = this.body.util.toScreen(range.start);
        right = this.body.util.toScreen(range.end);
      }

      var ids = [];
      for (var groupId in this.groups) {
        if (this.groups.hasOwnProperty(groupId)) {
          var group = this.groups[groupId];
          var rawVisibleItems = group.isVisible ? group.visibleItems : [];

          // filter the "raw" set with visibleItems into a set which is really
          // visible by pixels
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator3['default'])(rawVisibleItems), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;

              // TODO: also check whether visible vertically
              if (this.options.rtl) {
                if (item.right < left && item.right + item.width > right) {
                  ids.push(item.id);
                }
              } else {
                if (item.left < right && item.left + item.width > left) {
                  ids.push(item.id);
                }
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }

      return ids;
    }

    /**
     * Get the id's of the currently visible groups.
     * @returns {Array} The ids of the visible groups
     */

  }, {
    key: 'getVisibleGroups',
    value: function getVisibleGroups() {
      var ids = [];

      for (var groupId in this.groups) {
        if (this.groups.hasOwnProperty(groupId)) {
          var group = this.groups[groupId];
          if (group.isVisible) {
            ids.push(groupId);
          }
        }
      }

      return ids;
    }

    /**
     * Deselect a selected item
     * @param {string | number} id
     * @private
     */

  }, {
    key: '_deselect',
    value: function _deselect(id) {
      var selection = this.selection;
      for (var i = 0, ii = selection.length; i < ii; i++) {
        if (selection[i] == id) {
          // non-strict comparison!
          selection.splice(i, 1);
          break;
        }
      }
    }

    /**
     * Repaint the component
     * @return {boolean} Returns true if the component is resized
     */

  }, {
    key: 'redraw',
    value: function redraw() {
      var _this4 = this;

      var margin = this.options.margin;
      var range = this.body.range;
      var asSize = util.option.asSize;
      var options = this.options;
      var orientation = options.orientation.item;
      var resized = false;
      var frame = this.dom.frame;

      // recalculate absolute position (before redrawing groups)
      this.props.top = this.body.domProps.top.height + this.body.domProps.border.top;

      if (this.options.rtl) {
        this.props.right = this.body.domProps.right.width + this.body.domProps.border.right;
      } else {
        this.props.left = this.body.domProps.left.width + this.body.domProps.border.left;
      }

      // update class name
      frame.className = 'timeline-itemset';

      // reorder the groups (if needed)
      resized = this._orderGroups() || resized;

      // check whether zoomed (in that case we need to re-stack everything)
      // TODO: would be nicer to get this as a trigger from Range
      var visibleInterval = range.end - range.start;
      var zoomed = visibleInterval != this.lastVisibleInterval || this.props.width != this.props.lastWidth;
      var scrolled = range.start != this.lastRangeStart;
      var changedStackOption = options.stack != this.lastStack;
      var changedStackSubgroupsOption = options.stackSubgroups != this.lastStackSubgroups;
      var forceRestack = zoomed || scrolled || changedStackOption || changedStackSubgroupsOption;
      this.lastVisibleInterval = visibleInterval;
      this.lastRangeStart = range.start;
      this.lastStack = options.stack;
      this.lastStackSubgroups = options.stackSubgroups;

      this.props.lastWidth = this.props.width;
      var firstGroup = this._firstGroup();
      var firstMargin = {
        item: margin.item,
        axis: margin.axis
      };
      var nonFirstMargin = {
        item: margin.item,
        axis: margin.item.vertical / 2
      };
      var height = 0;
      var minHeight = margin.axis + margin.item.vertical;

      // redraw the background group
      this.groups[BACKGROUND].redraw(range, nonFirstMargin, forceRestack);

      var redrawQueue = {};
      var redrawQueueLength = 0;

      // collect redraw functions
      util.forEach(this.groups, function (group, key) {
        if (key === BACKGROUND) return;
        var groupMargin = group == firstGroup ? firstMargin : nonFirstMargin;
        var returnQueue = true;
        redrawQueue[key] = group.redraw(range, groupMargin, forceRestack, returnQueue);
        redrawQueueLength = redrawQueue[key].length;
      });

      var needRedraw = redrawQueueLength > 0;
      if (needRedraw) {
        (function () {
          var redrawResults = {};

          var _loop = function _loop(i) {
            util.forEach(redrawQueue, function (fns, key) {
              redrawResults[key] = fns[i]();
            });
          };

          for (var i = 0; i < redrawQueueLength; i++) {
            _loop(i);
          }

          // redraw all regular groups
          util.forEach(_this4.groups, function (group, key) {
            if (key === BACKGROUND) return;
            var groupResized = redrawResults[key];
            resized = groupResized || resized;
            height += group.height;
          });
          height = Math.max(height, minHeight);
        })();
      }

      height = Math.max(height, minHeight);

      // update frame height
      frame.style.height = asSize(height);

      // calculate actual size
      this.props.width = frame.offsetWidth;
      this.props.height = height;

      // reposition axis
      this.dom.axis.style.top = asSize(orientation == 'top' ? this.body.domProps.top.height + this.body.domProps.border.top : this.body.domProps.top.height + this.body.domProps.centerContainer.height);
      if (this.options.rtl) {
        this.dom.axis.style.right = '0';
      } else {
        this.dom.axis.style.left = '0';
      }

      this.initialItemSetDrawn = true;
      // check if this component is resized
      resized = this._isResized() || resized;

      return resized;
    }

    /**
     * Get the first group, aligned with the axis
     * @return {Group | null} firstGroup
     * @private
     */

  }, {
    key: '_firstGroup',
    value: function _firstGroup() {
      var firstGroupIndex = this.options.orientation.item == 'top' ? 0 : this.groupIds.length - 1;
      var firstGroupId = this.groupIds[firstGroupIndex];
      var firstGroup = this.groups[firstGroupId] || this.groups[UNGROUPED];

      return firstGroup || null;
    }

    /**
     * Create or delete the group holding all ungrouped items. This group is used when
     * there are no groups specified.
     * @protected
     */

  }, {
    key: '_updateUngrouped',
    value: function _updateUngrouped() {
      var ungrouped = this.groups[UNGROUPED];
      var item = void 0;
      var itemId = void 0;

      if (this.groupsData) {
        // remove the group holding all ungrouped items
        if (ungrouped) {
          ungrouped.hide();
          delete this.groups[UNGROUPED];

          for (itemId in this.items) {
            if (this.items.hasOwnProperty(itemId)) {
              item = this.items[itemId];
              item.parent && item.parent.remove(item);
              var groupId = this._getGroupId(item.data);
              var group = this.groups[groupId];
              group && group.add(item) || item.hide();
            }
          }
        }
      } else {
        // create a group holding all (unfiltered) items
        if (!ungrouped) {
          var id = null;
          var data = null;
          ungrouped = new _Group2['default'](id, data, this);
          this.groups[UNGROUPED] = ungrouped;

          for (itemId in this.items) {
            if (this.items.hasOwnProperty(itemId)) {
              item = this.items[itemId];
              ungrouped.add(item);
            }
          }

          ungrouped.show();
        }
      }
    }

    /**
     * Get the element for the labelset
     * @return {HTMLElement} labelSet
     */

  }, {
    key: 'getLabelSet',
    value: function getLabelSet() {
      return this.dom.labelSet;
    }

    /**
     * Set items
     * @param {timeline.DataSet | null} items
     */

  }, {
    key: 'setItems',
    value: function setItems(items) {
      this.itemsSettingTime = new Date();
      var me = this;
      var ids = void 0;
      var oldItemsData = this.itemsData;

      // replace the dataset
      if (!items) {
        this.itemsData = null;
      } else if (items instanceof _DataSet2['default'] || items instanceof _DataView2['default']) {
        this.itemsData = items;
      } else {
        throw new TypeError('Data must be an instance of DataSet or DataView');
      }

      if (oldItemsData) {
        // unsubscribe from old dataset
        util.forEach(this.itemListeners, function (callback, event) {
          oldItemsData.off(event, callback);
        });

        // remove all drawn items
        ids = oldItemsData.getIds();
        this._onRemove(ids);
      }

      if (this.itemsData) {
        // subscribe to new dataset
        var id = this.id;
        util.forEach(this.itemListeners, function (callback, event) {
          me.itemsData.on(event, callback, id);
        });

        // add all new items
        ids = this.itemsData.getIds();
        this._onAdd(ids);

        // update the group holding all ungrouped items
        this._updateUngrouped();
      }

      this.body.emitter.emit('_change', { queue: true });
    }

    /**
     * Get the current items
     * @returns {timeline.DataSet | null}
     */

  }, {
    key: 'getItems',
    value: function getItems() {
      return this.itemsData;
    }

    /**
     * Set groups
     * @param {timeline.DataSet} groups
     */

  }, {
    key: 'setGroups',
    value: function setGroups(groups) {
      var me = this;
      var ids = void 0;

      // unsubscribe from current dataset
      if (this.groupsData) {
        util.forEach(this.groupListeners, function (callback, event) {
          me.groupsData.off(event, callback);
        });

        // remove all drawn groups
        ids = this.groupsData.getIds();
        this.groupsData = null;
        this._onRemoveGroups(ids); // note: this will cause a redraw
      }

      // replace the dataset
      if (!groups) {
        this.groupsData = null;
      } else if (groups instanceof _DataSet2['default'] || groups instanceof _DataView2['default']) {
        this.groupsData = groups;
      } else {
        throw new TypeError('Data must be an instance of DataSet or DataView');
      }

      if (this.groupsData) {
        // go over all groups nesting
        var groupsData = this.groupsData;
        if (this.groupsData instanceof _DataView2['default']) {
          groupsData = this.groupsData.getDataSet();
        }

        groupsData.get().forEach(function (group) {
          if (group.nestedGroups) {
            group.nestedGroups.forEach(function (nestedGroupId) {
              var updatedNestedGroup = groupsData.get(nestedGroupId);
              updatedNestedGroup.nestedInGroup = group.id;
              if (group.showNested == false) {
                updatedNestedGroup.visible = false;
              }
              groupsData.update(updatedNestedGroup);
            });
          }
        });

        // subscribe to new dataset
        var id = this.id;
        util.forEach(this.groupListeners, function (callback, event) {
          me.groupsData.on(event, callback, id);
        });

        // draw all ms
        ids = this.groupsData.getIds();
        this._onAddGroups(ids);
      }

      // update the group holding all ungrouped items
      this._updateUngrouped();

      // update the order of all items in each group
      this._order();

      this.body.emitter.emit('_change', { queue: true });
    }

    /**
     * Get the current groups
     * @returns {timeline.DataSet | null} groups
     */

  }, {
    key: 'getGroups',
    value: function getGroups() {
      return this.groupsData;
    }

    /**
     * Remove an item by its id
     * @param {string | number} id
     */

  }, {
    key: 'removeItem',
    value: function removeItem(id) {
      var item = this.itemsData.get(id);
      var dataset = this.itemsData.getDataSet();

      if (item) {
        // confirm deletion
        this.options.onRemove(item, function (item) {
          if (item) {
            // remove by id here, it is possible that an item has no id defined
            // itself, so better not delete by the item itself
            dataset.remove(id);
          }
        });
      }
    }

    /**
     * Get the time of an item based on it's data and options.type
     * @param {Object} itemData
     * @returns {string} Returns the type
     * @private
     */

  }, {
    key: '_getType',
    value: function _getType(itemData) {
      return itemData.type || this.options.type || (itemData.end ? 'range' : 'box');
    }

    /**
     * Get the group id for an item
     * @param {Object} itemData
     * @returns {string} Returns the groupId
     * @private
     */

  }, {
    key: '_getGroupId',
    value: function _getGroupId(itemData) {
      var type = this._getType(itemData);
      if (type == 'background' && itemData.group == undefined) {
        return BACKGROUND;
      } else {
        return this.groupsData ? itemData.group : UNGROUPED;
      }
    }

    /**
     * Handle updated items
     * @param {number[]} ids
     * @protected
     */

  }, {
    key: '_onUpdate',
    value: function _onUpdate(ids) {
      var _this5 = this;

      var me = this;

      ids.forEach(function (id) {
        var itemData = me.itemsData.get(id, me.itemOptions);
        var item = me.items[id];
        var type = itemData ? me._getType(itemData) : null;

        var constructor = ItemSet.types[type];
        var selected = void 0;

        if (item) {
          // update item   	
          if (!constructor || !(item instanceof constructor)) {
            // item type has changed, delete the item and recreate it
            selected = item.selected; // preserve selection of this item
            me._removeItem(item);
            item = null;
          } else {
            me._updateItem(item, itemData);
          }
        }

        if (!item && itemData) {
          // create item
          if (constructor) {
            item = new constructor(itemData, me.conversion, me.options);
            item.id = id; // TODO: not so nice setting id afterwards

            me._addItem(item);
            if (selected) {
              _this5.selection.push(id);
              item.select();
            }
          } else if (type == 'rangeoverflow') {
            // TODO: deprecated since version 2.1.0 (or 3.0.0?). cleanup some day
            throw new TypeError('Item type "rangeoverflow" is deprecated. Use css styling instead: ' + '.timeline-item.timeline-range .timeline-item-content {overflow: visible;}');
          } else {
            throw new TypeError('Unknown item type "' + type + '"');
          }
        }
      });

      this._order();
      this.body.emitter.emit('_change', { queue: true });
    }

    /**
     * Handle removed items
     * @param {number[]} ids
     * @protected
     */

  }, {
    key: '_onRemove',
    value: function _onRemove(ids) {
      var count = 0;
      var me = this;
      ids.forEach(function (id) {
        var item = me.items[id];
        if (item) {
          count++;
          me._removeItem(item);
        }
      });

      if (count) {
        // update order
        this._order();
        this.body.emitter.emit('_change', { queue: true });
      }
    }

    /**
     * Update the order of item in all groups
     * @private
     */

  }, {
    key: '_order',
    value: function _order() {
      // reorder the items in all groups
      // TODO: optimization: only reorder groups affected by the changed items
      util.forEach(this.groups, function (group) {
        group.order();
      });
    }

    /**
     * Handle updated groups
     * @param {number[]} ids
     * @private
     */

  }, {
    key: '_onUpdateGroups',
    value: function _onUpdateGroups(ids) {
      this._onAddGroups(ids);
    }

    /**
     * Handle changed groups (added or updated)
     * @param {number[]} ids
     * @private
     */

  }, {
    key: '_onAddGroups',
    value: function _onAddGroups(ids) {
      var me = this;

      ids.forEach(function (id) {
        var groupData = me.groupsData.get(id);
        var group = me.groups[id];

        if (!group) {
          // check for reserved ids
          if (id == UNGROUPED || id == BACKGROUND) {
            throw new Error('Illegal group id. ' + id + ' is a reserved id.');
          }

          var groupOptions = (0, _create3['default'])(me.options);
          util.extend(groupOptions, {
            height: null
          });

          group = new _Group2['default'](id, groupData, me);
          me.groups[id] = group;

          // add items with this groupId to the new group
          for (var itemId in me.items) {
            if (me.items.hasOwnProperty(itemId)) {
              var item = me.items[itemId];
              if (item.data.group == id) {
                group.add(item);
              }
            }
          }

          group.order();
          group.show();
        } else {
          // update group
          group.setData(groupData);
        }
      });

      this.body.emitter.emit('_change', { queue: true });
    }

    /**
     * Handle removed groups
     * @param {number[]} ids
     * @private
     */

  }, {
    key: '_onRemoveGroups',
    value: function _onRemoveGroups(ids) {
      var groups = this.groups;
      ids.forEach(function (id) {
        var group = groups[id];

        if (group) {
          group.hide();
          delete groups[id];
        }
      });

      this.markDirty();

      this.body.emitter.emit('_change', { queue: true });
    }

    /**
     * Reorder the groups if needed
     * @return {boolean} changed
     * @private
     */

  }, {
    key: '_orderGroups',
    value: function _orderGroups() {
      if (this.groupsData) {
        // reorder the groups
        var groupIds = this.groupsData.getIds({
          order: this.options.groupOrder
        });

        groupIds = this._orderNestedGroups(groupIds);

        var changed = !util.equalArray(groupIds, this.groupIds);
        if (changed) {
          // hide all groups, removes them from the DOM
          var groups = this.groups;
          groupIds.forEach(function (groupId) {
            groups[groupId].hide();
          });

          // show the groups again, attach them to the DOM in correct order
          groupIds.forEach(function (groupId) {
            groups[groupId].show();
          });

          this.groupIds = groupIds;
        }

        return changed;
      } else {
        return false;
      }
    }

    /**
     * Reorder the nested groups
     *
     * @param {Array.<number>} groupIds
     * @returns {Array.<number>}
     * @private
     */

  }, {
    key: '_orderNestedGroups',
    value: function _orderNestedGroups(groupIds) {
      var _this6 = this;

      /**
       * Recursively order nested groups
       *
       * @param {ItemSet} t
       * @param {Array.<number>} groupIds
       * @returns {Array.<number>}
       * @private
       */
      function getOrderedNestedGroups(t, groupIds) {
        var result = [];
        groupIds.forEach(function (groupId) {
          result.push(groupId);
          var groupData = t.groupsData.get(groupId);
          if (groupData.nestedGroups) {
            var nestedGroupIds = t.groupsData.get({
              filter: function filter(nestedGroup) {
                return nestedGroup.nestedInGroup == groupId;
              },

              order: t.options.groupOrder
            }).map(function (nestedGroup) {
              return nestedGroup.id;
            });
            result = result.concat(getOrderedNestedGroups(t, nestedGroupIds));
          }
        });

        return result;
      }

      var topGroupIds = groupIds.filter(function (groupId) {
        return !_this6.groupsData.get(groupId).nestedInGroup;
      });

      return getOrderedNestedGroups(this, topGroupIds);
    }

    /**
     * Add a new item
     * @param {Item} item
     * @private
     */

  }, {
    key: '_addItem',
    value: function _addItem(item) {
      this.items[item.id] = item;

      // add to group
      var groupId = this._getGroupId(item.data);
      var group = this.groups[groupId];

      if (!group) {
        item.groupShowing = false;
      } else if (group && group.data && group.data.showNested) {
        item.groupShowing = true;
      }

      if (group) group.add(item);
    }

    /**
     * Update an existing item
     * @param {Item} item
     * @param {Object} itemData
     * @private
     */

  }, {
    key: '_updateItem',
    value: function _updateItem(item, itemData) {
      // update the items data (will redraw the item when displayed)
      item.setData(itemData);

      var groupId = this._getGroupId(item.data);
      var group = this.groups[groupId];
      if (!group) {
        item.groupShowing = false;
      } else if (group && group.data && group.data.showNested) {
        item.groupShowing = true;
      }
    }

    /**
     * Delete an item from the ItemSet: remove it from the DOM, from the map
     * with items, and from the map with visible items, and from the selection
     * @param {Item} item
     * @private
     */

  }, {
    key: '_removeItem',
    value: function _removeItem(item) {
      // remove from DOM
      item.hide();

      // remove from items
      delete this.items[item.id];

      // remove from selection
      var index = this.selection.indexOf(item.id);
      if (index != -1) this.selection.splice(index, 1);

      // remove from group
      item.parent && item.parent.remove(item);
    }

    /**
     * Create an array containing all items being a range (having an end date)
     * @param {Array.<Object>} array
     * @returns {Array}
     * @private
     */

  }, {
    key: '_constructByEndArray',
    value: function _constructByEndArray(array) {
      var endArray = [];

      for (var i = 0; i < array.length; i++) {
        if (array[i] instanceof _RangeItem2['default']) {
          endArray.push(array[i]);
        }
      }
      return endArray;
    }

    /**
     * Register the clicked item on touch, before dragStart is initiated.
     *
     * dragStart is initiated from a mousemove event, AFTER the mouse/touch is
     * already moving. Therefore, the mouse/touch can sometimes be above an other
     * DOM element than the item itself.
     *
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onTouch',
    value: function _onTouch(event) {
      // store the touched item, used in _onDragStart
      this.touchParams.item = this.itemFromTarget(event);
      this.touchParams.dragLeftItem = event.target.dragLeftItem || false;
      this.touchParams.dragRightItem = event.target.dragRightItem || false;
      this.touchParams.itemProps = null;
    }

    /**
     * Given an group id, returns the index it has.
     *
     * @param {number} groupId
     * @returns {number} index / groupId
     * @private
     */

  }, {
    key: '_getGroupIndex',
    value: function _getGroupIndex(groupId) {
      for (var i = 0; i < this.groupIds.length; i++) {
        if (groupId == this.groupIds[i]) return i;
      }
    }

    /**
     * Start dragging the selected events
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onDragStart',
    value: function _onDragStart(event) {
      var _this7 = this;

      if (this.touchParams.itemIsDragging) {
        return;
      }
      var item = this.touchParams.item || null;
      var me = this;
      var props = void 0;

      if (item && (item.selected || this.options.itemsAlwaysDraggable.item)) {

        if (this.options.editable.overrideItems && !this.options.editable.updateTime && !this.options.editable.updateGroup) {
          return;
        }

        // override options.editable
        if (item.editable != null && !item.editable.updateTime && !item.editable.updateGroup && !this.options.editable.overrideItems) {
          return;
        }

        var dragLeftItem = this.touchParams.dragLeftItem;
        var dragRightItem = this.touchParams.dragRightItem;
        this.touchParams.itemIsDragging = true;
        this.touchParams.selectedItem = item;

        if (dragLeftItem) {
          props = {
            item: dragLeftItem,
            initialX: event.center.x,
            dragLeft: true,
            data: this._cloneItemData(item.data)
          };

          this.touchParams.itemProps = [props];
        } else if (dragRightItem) {
          props = {
            item: dragRightItem,
            initialX: event.center.x,
            dragRight: true,
            data: this._cloneItemData(item.data)
          };

          this.touchParams.itemProps = [props];
        } else if (this.options.editable.add && (event.srcEvent.ctrlKey || event.srcEvent.metaKey)) {
          // create a new range item when dragging with ctrl key down
          this._onDragStartAddItem(event);
        } else {
          if (this.groupIds.length < 1) {
            // Mitigates a race condition if _onDragStart() is
            // called after markDirty() without redraw() being called between.
            this.redraw();
          }

          var baseGroupIndex = this._getGroupIndex(item.data.group);

          var itemsToDrag = this.options.itemsAlwaysDraggable.item && !item.selected ? [item.id] : this.getSelection();

          this.touchParams.itemProps = itemsToDrag.map(function (id) {
            var item = me.items[id];
            var groupIndex = me._getGroupIndex(item.data.group);
            return {
              item: item,
              initialX: event.center.x,
              groupOffset: baseGroupIndex - groupIndex,
              data: _this7._cloneItemData(item.data)
            };
          });
        }

        event.stopPropagation();
      } else if (this.options.editable.add && (event.srcEvent.ctrlKey || event.srcEvent.metaKey)) {
        // create a new range item when dragging with ctrl key down
        this._onDragStartAddItem(event);
      }
    }

    /**
     * Start creating a new range item by dragging.
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onDragStartAddItem',
    value: function _onDragStartAddItem(event) {
      var xAbs = void 0;
      var x = void 0;
      var snap = this.options.snap || null;

      if (this.options.rtl) {
        xAbs = util.getAbsoluteRight(this.dom.frame);
        x = xAbs - event.center.x + 10; // plus 10 to compensate for the drag starting as soon as you've moved 10px
      } else {
        xAbs = util.getAbsoluteLeft(this.dom.frame);
        x = event.center.x - xAbs - 10; // minus 10 to compensate for the drag starting as soon as you've moved 10px
      }

      var time = this.body.util.toTime(x);
      var scale = this.body.util.getScale();
      var step = this.body.util.getStep();
      var start = snap ? snap(time, scale, step) : time;
      var end = start;

      var itemData = {
        type: 'range',
        start: start,
        end: end,
        content: 'new item'
      };

      var id = util.randomUUID();
      itemData[this.itemsData._fieldId] = id;

      var group = this.groupFromTarget(event);
      if (group) {
        itemData.group = group.groupId;
      }
      var newItem = new _RangeItem2['default'](itemData, this.conversion, this.options);
      newItem.id = id; // TODO: not so nice setting id afterwards
      newItem.data = this._cloneItemData(itemData);
      this._addItem(newItem);
      this.touchParams.selectedItem = newItem;

      var props = {
        item: newItem,
        initialX: event.center.x,
        data: newItem.data
      };

      if (this.options.rtl) {
        props.dragLeft = true;
      } else {
        props.dragRight = true;
      }
      this.touchParams.itemProps = [props];

      event.stopPropagation();
    }

    /**
     * Drag selected items
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onDrag',
    value: function _onDrag(event) {
      var _this8 = this;

      if (this.touchParams.itemProps) {
        event.stopPropagation();

        var me = this;
        var snap = this.options.snap || null;
        var xOffset = void 0;

        if (this.options.rtl) {
          xOffset = this.body.dom.root.offsetLeft + this.body.domProps.right.width;
        } else {
          xOffset = this.body.dom.root.offsetLeft + this.body.domProps.left.width;
        }

        var scale = this.body.util.getScale();
        var step = this.body.util.getStep();

        //only calculate the new group for the item that's actually dragged
        var selectedItem = this.touchParams.selectedItem;
        var updateGroupAllowed = (this.options.editable.overrideItems || selectedItem.editable == null) && this.options.editable.updateGroup || !this.options.editable.overrideItems && selectedItem.editable != null && selectedItem.editable.updateGroup;
        var newGroupBase = null;
        if (updateGroupAllowed && selectedItem) {
          if (selectedItem.data.group != undefined) {
            // drag from one group to another
            var group = me.groupFromTarget(event);
            if (group) {
              //we know the offset for all items, so the new group for all items
              //will be relative to this one.
              newGroupBase = this._getGroupIndex(group.groupId);
            }
          }
        }

        // move
        this.touchParams.itemProps.forEach(function (props) {
          var current = me.body.util.toTime(event.center.x - xOffset);
          var initial = me.body.util.toTime(props.initialX - xOffset);
          var offset = void 0;
          var initialStart = void 0;
          var initialEnd = void 0;
          var start = void 0;
          var end = void 0;

          if (_this8.options.rtl) {
            offset = -(current - initial); // ms
          } else {
            offset = current - initial; // ms
          }

          var itemData = _this8._cloneItemData(props.item.data); // clone the data
          if (props.item.editable != null && !props.item.editable.updateTime && !props.item.editable.updateGroup && !me.options.editable.overrideItems) {
            return;
          }

          var updateTimeAllowed = (_this8.options.editable.overrideItems || selectedItem.editable == null) && _this8.options.editable.updateTime || !_this8.options.editable.overrideItems && selectedItem.editable != null && selectedItem.editable.updateTime;
          if (updateTimeAllowed) {
            if (props.dragLeft) {
              // drag left side of a range item
              if (_this8.options.rtl) {
                if (itemData.end != undefined) {
                  initialEnd = util.convert(props.data.end, 'Date');
                  end = new Date(initialEnd.valueOf() + offset);
                  // TODO: pass a Moment instead of a Date to snap(). (Breaking change)
                  itemData.end = snap ? snap(end, scale, step) : end;
                }
              } else {
                if (itemData.start != undefined) {
                  initialStart = util.convert(props.data.start, 'Date');
                  start = new Date(initialStart.valueOf() + offset);
                  // TODO: pass a Moment instead of a Date to snap(). (Breaking change)
                  itemData.start = snap ? snap(start, scale, step) : start;
                }
              }
            } else if (props.dragRight) {
              // drag right side of a range item
              if (_this8.options.rtl) {
                if (itemData.start != undefined) {
                  initialStart = util.convert(props.data.start, 'Date');
                  start = new Date(initialStart.valueOf() + offset);
                  // TODO: pass a Moment instead of a Date to snap(). (Breaking change)
                  itemData.start = snap ? snap(start, scale, step) : start;
                }
              } else {
                if (itemData.end != undefined) {
                  initialEnd = util.convert(props.data.end, 'Date');
                  end = new Date(initialEnd.valueOf() + offset);
                  // TODO: pass a Moment instead of a Date to snap(). (Breaking change)
                  itemData.end = snap ? snap(end, scale, step) : end;
                }
              }
            } else {
              // drag both start and end
              if (itemData.start != undefined) {

                initialStart = util.convert(props.data.start, 'Date').valueOf();
                start = new Date(initialStart + offset);

                if (itemData.end != undefined) {
                  initialEnd = util.convert(props.data.end, 'Date');
                  var duration = initialEnd.valueOf() - initialStart.valueOf();

                  // TODO: pass a Moment instead of a Date to snap(). (Breaking change)
                  itemData.start = snap ? snap(start, scale, step) : start;
                  itemData.end = new Date(itemData.start.valueOf() + duration);
                } else {
                  // TODO: pass a Moment instead of a Date to snap(). (Breaking change)
                  itemData.start = snap ? snap(start, scale, step) : start;
                }
              }
            }
          }

          if (updateGroupAllowed && !props.dragLeft && !props.dragRight && newGroupBase != null) {
            if (itemData.group != undefined) {
              var newOffset = newGroupBase - props.groupOffset;

              //make sure we stay in bounds
              newOffset = Math.max(0, newOffset);
              newOffset = Math.min(me.groupIds.length - 1, newOffset);
              itemData.group = me.groupIds[newOffset];
            }
          }

          // confirm moving the item
          itemData = _this8._cloneItemData(itemData); // convert start and end to the correct type
          me.options.onMoving(itemData, function (itemData) {
            if (itemData) {
              props.item.setData(_this8._cloneItemData(itemData, 'Date'));
            }
          });
        });

        this.body.emitter.emit('_change');
      }
    }

    /**
     * Move an item to another group
     * @param {Item} item
     * @param {string | number} groupId
     * @private
     */

  }, {
    key: '_moveToGroup',
    value: function _moveToGroup(item, groupId) {
      var group = this.groups[groupId];
      if (group && group.groupId != item.data.group) {
        var oldGroup = item.parent;
        oldGroup.remove(item);
        oldGroup.order();

        item.data.group = group.groupId;

        group.add(item);
        group.order();
      }
    }

    /**
     * End of dragging selected items
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onDragEnd',
    value: function _onDragEnd(event) {
      var _this9 = this;

      this.touchParams.itemIsDragging = false;
      if (this.touchParams.itemProps) {
        event.stopPropagation();

        var me = this;
        var dataset = this.itemsData.getDataSet();
        var itemProps = this.touchParams.itemProps;
        this.touchParams.itemProps = null;

        itemProps.forEach(function (props) {
          var id = props.item.id;
          var exists = me.itemsData.get(id, me.itemOptions) != null;

          if (!exists) {
            // add a new item
            me.options.onAdd(props.item.data, function (itemData) {
              me._removeItem(props.item); // remove temporary item
              if (itemData) {
                me.itemsData.getDataSet().add(itemData);
              }

              // force re-stacking of all items next redraw
              me.body.emitter.emit('_change');
            });
          } else {
            // update existing item
            var itemData = _this9._cloneItemData(props.item.data); // convert start and end to the correct type
            me.options.onMove(itemData, function (itemData) {
              if (itemData) {
                // apply changes
                itemData[dataset._fieldId] = id; // ensure the item contains its id (can be undefined)
                dataset.update(itemData);
              } else {
                // restore original values
                props.item.setData(props.data);

                me.body.emitter.emit('_change');
              }
            });
          }
        });
      }
    }
  }, {
    key: '_onGroupClick',
    value: function _onGroupClick(event) {
      var group = this.groupFromTarget(event);

      if (!group || !group.nestedGroups) return;

      var groupsData = this.groupsData.getDataSet();

      group.showNested = !group.showNested;

      var nestingGroup = groupsData.get(group.groupId);
      nestingGroup.showNested = group.showNested;

      var fullNestedGroups = group.nestedGroups;
      var nextLevel = fullNestedGroups;
      while (nextLevel.length > 0) {
        var current = nextLevel;
        nextLevel = [];
        for (var i = 0; i < current.length; i++) {
          var node = groupsData.get(current[i]);
          if (node.nestedGroups) {
            nextLevel = nextLevel.concat(node.nestedGroups);
          }
        }
        if (nextLevel.length > 0) {
          fullNestedGroups = fullNestedGroups.concat(nextLevel);
        }
      }
      var nestedGroups = groupsData.get(fullNestedGroups).map(function (nestedGroup) {
        if (nestedGroup.visible == undefined) {
          nestedGroup.visible = true;
        }
        nestedGroup.visible = !!nestingGroup.showNested;
        return nestedGroup;
      });

      groupsData.update(nestedGroups.concat(nestingGroup));

      if (nestingGroup.showNested) {
        util.removeClassName(group.dom.label, 'collapsed');
        util.addClassName(group.dom.label, 'expanded');
      } else {
        util.removeClassName(group.dom.label, 'expanded');
        var collapsedDirClassName = this.options.rtl ? 'collapsed-rtl' : 'collapsed';
        util.addClassName(group.dom.label, collapsedDirClassName);
      }
    }
  }, {
    key: '_onGroupDragStart',
    value: function _onGroupDragStart(event) {
      if (this.options.groupEditable.order) {
        this.groupTouchParams.group = this.groupFromTarget(event);

        if (this.groupTouchParams.group) {
          event.stopPropagation();

          this.groupTouchParams.originalOrder = this.groupsData.getIds({
            order: this.options.groupOrder
          });
        }
      }
    }
  }, {
    key: '_onGroupDrag',
    value: function _onGroupDrag(event) {
      if (this.options.groupEditable.order && this.groupTouchParams.group) {
        event.stopPropagation();

        var groupsData = this.groupsData;
        if (this.groupsData instanceof _DataView2['default']) {
          groupsData = this.groupsData.getDataSet();
        }
        // drag from one group to another
        var group = this.groupFromTarget(event);

        // try to avoid toggling when groups differ in height
        if (group && group.height != this.groupTouchParams.group.height) {
          var movingUp = group.top < this.groupTouchParams.group.top;
          var clientY = event.center ? event.center.y : event.clientY;
          var targetGroupTop = util.getAbsoluteTop(group.dom.foreground);
          var draggedGroupHeight = this.groupTouchParams.group.height;
          if (movingUp) {
            // skip swapping the groups when the dragged group is not below clientY afterwards
            if (targetGroupTop + draggedGroupHeight < clientY) {
              return;
            }
          } else {
            var targetGroupHeight = group.height;
            // skip swapping the groups when the dragged group is not below clientY afterwards
            if (targetGroupTop + targetGroupHeight - draggedGroupHeight > clientY) {
              return;
            }
          }
        }

        if (group && group != this.groupTouchParams.group) {
          var targetGroup = groupsData.get(group.groupId);
          var draggedGroup = groupsData.get(this.groupTouchParams.group.groupId);

          // switch groups
          if (draggedGroup && targetGroup) {
            this.options.groupOrderSwap(draggedGroup, targetGroup, groupsData);
            groupsData.update(draggedGroup);
            groupsData.update(targetGroup);
          }

          // fetch current order of groups
          var newOrder = groupsData.getIds({
            order: this.options.groupOrder
          });

          // in case of changes since _onGroupDragStart
          if (!util.equalArray(newOrder, this.groupTouchParams.originalOrder)) {
            var origOrder = this.groupTouchParams.originalOrder;
            var draggedId = this.groupTouchParams.group.groupId;
            var numGroups = Math.min(origOrder.length, newOrder.length);
            var curPos = 0;
            var newOffset = 0;
            var orgOffset = 0;
            while (curPos < numGroups) {
              // as long as the groups are where they should be step down along the groups order
              while (curPos + newOffset < numGroups && curPos + orgOffset < numGroups && newOrder[curPos + newOffset] == origOrder[curPos + orgOffset]) {
                curPos++;
              }

              // all ok
              if (curPos + newOffset >= numGroups) {
                break;
              }

              // not all ok
              // if dragged group was move upwards everything below should have an offset
              if (newOrder[curPos + newOffset] == draggedId) {
                newOffset = 1;
              }
              // if dragged group was move downwards everything above should have an offset
              else if (origOrder[curPos + orgOffset] == draggedId) {
                  orgOffset = 1;
                }
                // found a group (apart from dragged group) that has the wrong position -> switch with the 
                // group at the position where other one should be, fix index arrays and continue
                else {
                    var slippedPosition = newOrder.indexOf(origOrder[curPos + orgOffset]);
                    var switchGroup = groupsData.get(newOrder[curPos + newOffset]);
                    var shouldBeGroup = groupsData.get(origOrder[curPos + orgOffset]);
                    this.options.groupOrderSwap(switchGroup, shouldBeGroup, groupsData);
                    groupsData.update(switchGroup);
                    groupsData.update(shouldBeGroup);

                    var switchGroupId = newOrder[curPos + newOffset];
                    newOrder[curPos + newOffset] = origOrder[curPos + orgOffset];
                    newOrder[slippedPosition] = switchGroupId;

                    curPos++;
                  }
            }
          }
        }
      }
    }
  }, {
    key: '_onGroupDragEnd',
    value: function _onGroupDragEnd(event) {
      if (this.options.groupEditable.order && this.groupTouchParams.group) {
        event.stopPropagation();

        // update existing group
        var me = this;
        var id = me.groupTouchParams.group.groupId;
        var dataset = me.groupsData.getDataSet();
        var groupData = util.extend({}, dataset.get(id)); // clone the data
        me.options.onMoveGroup(groupData, function (groupData) {
          if (groupData) {
            // apply changes
            groupData[dataset._fieldId] = id; // ensure the group contains its id (can be undefined)
            dataset.update(groupData);
          } else {

            // fetch current order of groups
            var newOrder = dataset.getIds({
              order: me.options.groupOrder
            });

            // restore original order
            if (!util.equalArray(newOrder, me.groupTouchParams.originalOrder)) {
              var origOrder = me.groupTouchParams.originalOrder;
              var numGroups = Math.min(origOrder.length, newOrder.length);
              var curPos = 0;
              while (curPos < numGroups) {
                // as long as the groups are where they should be step down along the groups order
                while (curPos < numGroups && newOrder[curPos] == origOrder[curPos]) {
                  curPos++;
                }

                // all ok
                if (curPos >= numGroups) {
                  break;
                }

                // found a group that has the wrong position -> switch with the
                // group at the position where other one should be, fix index arrays and continue
                var slippedPosition = newOrder.indexOf(origOrder[curPos]);
                var switchGroup = dataset.get(newOrder[curPos]);
                var shouldBeGroup = dataset.get(origOrder[curPos]);
                me.options.groupOrderSwap(switchGroup, shouldBeGroup, dataset);
                dataset.update(switchGroup);
                dataset.update(shouldBeGroup);

                var switchGroupId = newOrder[curPos];
                newOrder[curPos] = origOrder[curPos];
                newOrder[slippedPosition] = switchGroupId;

                curPos++;
              }
            }
          }
        });

        me.body.emitter.emit('groupDragged', { groupId: id });
      }
    }

    /**
     * Handle selecting/deselecting an item when tapping it
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onSelectItem',
    value: function _onSelectItem(event) {
      if (!this.options.selectable) return;

      var ctrlKey = event.srcEvent && (event.srcEvent.ctrlKey || event.srcEvent.metaKey);
      var shiftKey = event.srcEvent && event.srcEvent.shiftKey;
      if (ctrlKey || shiftKey) {
        this._onMultiSelectItem(event);
        return;
      }

      var oldSelection = this.getSelection();

      var item = this.itemFromTarget(event);
      var selection = item ? [item.id] : [];
      this.setSelection(selection);

      var newSelection = this.getSelection();

      // emit a select event,
      // except when old selection is empty and new selection is still empty
      if (newSelection.length > 0 || oldSelection.length > 0) {
        this.body.emitter.emit('select', {
          items: newSelection,
          event: event
        });
      }
    }

    /**
     * Handle hovering an item
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onMouseOver',
    value: function _onMouseOver(event) {
      var item = this.itemFromTarget(event);
      if (!item) return;

      // Item we just left
      var related = this.itemFromRelatedTarget(event);
      if (item === related) {
        // We haven't changed item, just element in the item
        return;
      }

      var title = item.getTitle();
      if (this.options.showTooltips && title) {
        if (this.popup == null) {
          this.popup = new _Popup2['default'](this.body.dom.root, this.options.tooltip.overflowMethod || 'flip');
        }

        this.popup.setText(title);
        var container = this.body.dom.centerContainer;
        this.popup.setPosition(event.clientX - util.getAbsoluteLeft(container) + container.offsetLeft, event.clientY - util.getAbsoluteTop(container) + container.offsetTop);
        this.popup.show();
      } else {
        // Hovering over item without a title, hide popup
        // Needed instead of _just_ in _onMouseOut due to #2572
        if (this.popup != null) {
          this.popup.hide();
        }
      }

      this.body.emitter.emit('itemover', {
        item: item.id,
        event: event
      });
    }
  }, {
    key: '_onMouseOut',
    value: function _onMouseOut(event) {
      var item = this.itemFromTarget(event);
      if (!item) return;

      // Item we are going to
      var related = this.itemFromRelatedTarget(event);
      if (item === related) {
        // We aren't changing item, just element in the item
        return;
      }

      if (this.popup != null) {
        this.popup.hide();
      }

      this.body.emitter.emit('itemout', {
        item: item.id,
        event: event
      });
    }
  }, {
    key: '_onMouseMove',
    value: function _onMouseMove(event) {
      var item = this.itemFromTarget(event);
      if (!item) return;

      if (this.options.showTooltips && this.options.tooltip.followMouse) {
        if (this.popup) {
          if (!this.popup.hidden) {
            var container = this.body.dom.centerContainer;
            this.popup.setPosition(event.clientX - util.getAbsoluteLeft(container) + container.offsetLeft, event.clientY - util.getAbsoluteTop(container) + container.offsetTop);
            this.popup.show(); // Redraw
          }
        }
      }
    }

    /**
     * Handle mousewheel
     * @param {Event}  event   The event
     * @private
     */

  }, {
    key: '_onMouseWheel',
    value: function _onMouseWheel(event) {
      if (this.touchParams.itemIsDragging) {
        this._onDragEnd(event);
      }
    }

    /**
     * Handle updates of an item on double tap
     * @param {timeline.Item}  item   The item
     * @private
     */

  }, {
    key: '_onUpdateItem',
    value: function _onUpdateItem(item) {
      if (!this.options.selectable) return;
      if (!this.options.editable.add) return;

      var me = this;

      if (item) {
        // execute async handler to update the item (or cancel it)
        var itemData = me.itemsData.get(item.id); // get a clone of the data from the dataset
        this.options.onUpdate(itemData, function (itemData) {
          if (itemData) {
            me.itemsData.getDataSet().update(itemData);
          }
        });
      }
    }

    /**
     * Handle drop event of data on item
     * Only called when `objectData.target === 'item'.
     * @param {Event} event The event 
     * @private
     */

  }, {
    key: '_onDropObjectOnItem',
    value: function _onDropObjectOnItem(event) {
      var item = this.itemFromTarget(event);
      var objectData = JSON.parse(event.dataTransfer.getData("text"));
      this.options.onDropObjectOnItem(objectData, item);
    }

    /**
     * Handle creation of an item on double tap or drop of a drag event
     * @param {Event} event   The event
     * @private
     */

  }, {
    key: '_onAddItem',
    value: function _onAddItem(event) {
      if (!this.options.selectable) return;
      if (!this.options.editable.add) return;

      var me = this;
      var snap = this.options.snap || null;
      var xAbs = void 0;
      var x = void 0;
      // add item
      if (this.options.rtl) {
        xAbs = util.getAbsoluteRight(this.dom.frame);
        x = xAbs - event.center.x;
      } else {
        xAbs = util.getAbsoluteLeft(this.dom.frame);
        x = event.center.x - xAbs;
      }
      // var xAbs = util.getAbsoluteLeft(this.dom.frame);
      // var x = event.center.x - xAbs;
      var start = this.body.util.toTime(x);
      var scale = this.body.util.getScale();
      var step = this.body.util.getStep();
      var end = void 0;

      var newItemData = void 0;
      if (event.type == 'drop') {
        newItemData = JSON.parse(event.dataTransfer.getData("text"));
        newItemData.content = newItemData.content ? newItemData.content : 'new item';
        newItemData.start = newItemData.start ? newItemData.start : snap ? snap(start, scale, step) : start;
        newItemData.type = newItemData.type || 'box';
        newItemData[this.itemsData._fieldId] = newItemData.id || util.randomUUID();

        if (newItemData.type == 'range' && !newItemData.end) {
          end = this.body.util.toTime(x + this.props.width / 5);
          newItemData.end = snap ? snap(end, scale, step) : end;
        }
      } else {
        newItemData = {
          start: snap ? snap(start, scale, step) : start,
          content: 'new item'
        };
        newItemData[this.itemsData._fieldId] = util.randomUUID();

        // when default type is a range, add a default end date to the new item
        if (this.options.type === 'range') {
          end = this.body.util.toTime(x + this.props.width / 5);
          newItemData.end = snap ? snap(end, scale, step) : end;
        }
      }

      var group = this.groupFromTarget(event);
      if (group) {
        newItemData.group = group.groupId;
      }

      // execute async handler to customize (or cancel) adding an item
      newItemData = this._cloneItemData(newItemData); // convert start and end to the correct type
      this.options.onAdd(newItemData, function (item) {
        if (item) {
          me.itemsData.getDataSet().add(item);
          if (event.type == 'drop') {
            me.setSelection([item.id]);
          }
          // TODO: need to trigger a redraw?
        }
      });
    }

    /**
     * Handle selecting/deselecting multiple items when holding an item
     * @param {Event} event
     * @private
     */

  }, {
    key: '_onMultiSelectItem',
    value: function _onMultiSelectItem(event) {
      if (!this.options.selectable) return;

      var item = this.itemFromTarget(event);

      if (item) {
        // multi select items (if allowed)

        var selection = this.options.multiselect ? this.getSelection() // take current selection
        : []; // deselect current selection

        var shiftKey = event.srcEvent && event.srcEvent.shiftKey || false;

        if (shiftKey && this.options.multiselect) {
          // select all items between the old selection and the tapped item
          var itemGroup = this.itemsData.get(item.id).group;

          // when filtering get the group of the last selected item
          var lastSelectedGroup = undefined;
          if (this.options.multiselectPerGroup) {
            if (selection.length > 0) {
              lastSelectedGroup = this.itemsData.get(selection[0]).group;
            }
          }

          // determine the selection range
          if (!this.options.multiselectPerGroup || lastSelectedGroup == undefined || lastSelectedGroup == itemGroup) {
            selection.push(item.id);
          }
          var range = ItemSet._getItemRange(this.itemsData.get(selection, this.itemOptions));

          if (!this.options.multiselectPerGroup || lastSelectedGroup == itemGroup) {
            // select all items within the selection range
            selection = [];
            for (var id in this.items) {
              if (this.items.hasOwnProperty(id)) {
                var _item = this.items[id];
                var start = _item.data.start;
                var end = _item.data.end !== undefined ? _item.data.end : start;

                if (start >= range.min && end <= range.max && (!this.options.multiselectPerGroup || lastSelectedGroup == this.itemsData.get(_item.id).group) && !(_item instanceof _BackgroundItem2['default'])) {
                  selection.push(_item.id); // do not use id but item.id, id itself is stringified
                }
              }
            }
          }
        } else {
          // add/remove this item from the current selection
          var index = selection.indexOf(item.id);
          if (index == -1) {
            // item is not yet selected -> select it
            selection.push(item.id);
          } else {
            // item is already selected -> deselect it
            selection.splice(index, 1);
          }
        }

        this.setSelection(selection);

        this.body.emitter.emit('select', {
          items: this.getSelection(),
          event: event
        });
      }
    }

    /**
     * Calculate the time range of a list of items
     * @param {Array.<Object>} itemsData
     * @return {{min: Date, max: Date}} Returns the range of the provided items
     * @private
     */

  }, {
    key: 'itemFromElement',


    /**
     * Find an item from an element:
     * searches for the attribute 'timeline-item' in the element's tree
     * @param {HTMLElement} element
     * @return {Item | null} item
     */
    value: function itemFromElement(element) {
      var cur = element;
      while (cur) {
        if (cur.hasOwnProperty('timeline-item')) {
          return cur['timeline-item'];
        }
        cur = cur.parentNode;
      }

      return null;
    }

    /**
     * Find an item from an event target:
     * searches for the attribute 'timeline-item' in the event target's element tree
     * @param {Event} event
     * @return {Item | null} item
     */

  }, {
    key: 'itemFromTarget',
    value: function itemFromTarget(event) {
      return this.itemFromElement(event.target);
    }

    /**
     * Find an item from an event's related target:
     * searches for the attribute 'timeline-item' in the related target's element tree
     * @param {Event} event
     * @return {Item | null} item
     */

  }, {
    key: 'itemFromRelatedTarget',
    value: function itemFromRelatedTarget(event) {
      return this.itemFromElement(event.relatedTarget);
    }

    /**
     * Find the Group from an event target:
     * searches for the attribute 'timeline-group' in the event target's element tree
     * @param {Event} event
     * @return {Group | null} group
     */

  }, {
    key: 'groupFromTarget',
    value: function groupFromTarget(event) {
      var clientY = event.center ? event.center.y : event.clientY;
      var groupIds = this.groupIds;

      if (groupIds.length <= 0 && this.groupsData) {
        groupIds = this.groupsData.getIds({
          order: this.options.groupOrder
        });
      }

      for (var i = 0; i < groupIds.length; i++) {
        var groupId = groupIds[i];
        var group = this.groups[groupId];
        var foreground = group.dom.foreground;
        var top = util.getAbsoluteTop(foreground);
        if (clientY >= top && clientY < top + foreground.offsetHeight) {
          return group;
        }

        if (this.options.orientation.item === 'top') {
          if (i === this.groupIds.length - 1 && clientY > top) {
            return group;
          }
        } else {
          if (i === 0 && clientY < top + foreground.offset) {
            return group;
          }
        }
      }

      return null;
    }

    /**
     * Find the ItemSet from an event target:
     * searches for the attribute 'timeline-itemset' in the event target's element tree
     * @param {Event} event
     * @return {ItemSet | null} item
     */

  }, {
    key: '_cloneItemData',


    /**
     * Clone the data of an item, and "normalize" it: convert the start and end date
     * to the type (Date, Moment, ...) configured in the DataSet. If not configured,
     * start and end are converted to Date.
     * @param {Object} itemData, typically `item.data`
     * @param {string} [type]  Optional Date type. If not provided, the type from the DataSet is taken
     * @return {Object} The cloned object
     * @private
     */
    value: function _cloneItemData(itemData, type) {
      var clone = util.extend({}, itemData);

      if (!type) {
        // convert start and end date to the type (Date, Moment, ...) configured in the DataSet
        type = this.itemsData.getDataSet()._options.type;
      }

      if (clone.start != undefined) {
        clone.start = util.convert(clone.start, type && type.start || 'Date');
      }
      if (clone.end != undefined) {
        clone.end = util.convert(clone.end, type && type.end || 'Date');
      }

      return clone;
    }
  }], [{
    key: '_getItemRange',
    value: function _getItemRange(itemsData) {
      var max = null;
      var min = null;

      itemsData.forEach(function (data) {
        if (min == null || data.start < min) {
          min = data.start;
        }

        if (data.end != undefined) {
          if (max == null || data.end > max) {
            max = data.end;
          }
        } else {
          if (max == null || data.start > max) {
            max = data.start;
          }
        }
      });

      return {
        min: min,
        max: max
      };
    }
  }, {
    key: 'itemSetFromTarget',
    value: function itemSetFromTarget(event) {
      var target = event.target;
      while (target) {
        if (target.hasOwnProperty('timeline-itemset')) {
          return target['timeline-itemset'];
        }
        target = target.parentNode;
      }

      return null;
    }
  }]);
  return ItemSet;
}(_Component3['default']);

// available item types will be registered here


ItemSet.types = {
  background: _BackgroundItem2['default'],
  box: _BoxItem2['default'],
  range: _RangeItem2['default'],
  point: _PointItem2['default']
};

/**
 * Handle added items
 * @param {number[]} ids
 * @protected
 */
ItemSet.prototype._onAdd = ItemSet.prototype._onUpdate;

exports['default'] = ItemSet;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderByStart = orderByStart;
exports.orderByEnd = orderByEnd;
exports.stack = stack;
exports.substack = substack;
exports.nostack = nostack;
exports.stackSubgroups = stackSubgroups;
exports.stackSubgroupsWithInnerStack = stackSubgroupsWithInnerStack;
exports.collision = collision;
exports.collisionByTimes = collisionByTimes;
// Utility functions for ordering and stacking of items
var EPSILON = 0.001; // used when checking collisions, to prevent round-off errors

/**
 * Order items by their start data
 * @param {Item[]} items
 */
function orderByStart(items) {
  items.sort(function (a, b) {
    return a.data.start - b.data.start;
  });
}

/**
 * Order items by their end date. If they have no end date, their start date
 * is used.
 * @param {Item[]} items
 */
function orderByEnd(items) {
  items.sort(function (a, b) {
    var aTime = 'end' in a.data ? a.data.end : a.data.start;
    var bTime = 'end' in b.data ? b.data.end : b.data.start;

    return aTime - bTime;
  });
}

/**
 * Adjust vertical positions of the items such that they don't overlap each
 * other.
 * @param {Item[]} items
 *            All visible items
 * @param {{item: {horizontal: number, vertical: number}, axis: number}} margin
 *            Margins between items and between items and the axis.
 * @param {boolean} [force=false]
 *            If true, all items will be repositioned. If false (default), only
 *            items having a top===null will be re-stacked
 * @param {function} shouldBailItemsRedrawFunction
 *            bailing function
 * @return {boolean} shouldBail
 */
function stack(items, margin, force, shouldBailItemsRedrawFunction) {
  if (force) {
    // reset top position of all items
    for (var i = 0; i < items.length; i++) {
      items[i].top = null;
    }
  }

  // calculate new, non-overlapping positions
  for (var i = 0; i < items.length; i++) {
    // eslint-disable-line no-redeclare
    var item = items[i];
    if (item.stack && item.top === null) {
      // initialize top position
      item.top = margin.axis;
      var shouldBail = false;

      do {
        // TODO: optimize checking for overlap. when there is a gap without items,
        //       you only need to check for items from the next item on, not from zero
        var collidingItem = null;
        for (var j = 0, jj = items.length; j < jj; j++) {
          var other = items[j];
          shouldBail = shouldBailItemsRedrawFunction() || false;

          if (shouldBail) {
            return true;
          }

          if (other.top !== null && other !== item && other.stack && exports.collision(item, other, margin.item, other.options.rtl)) {
            collidingItem = other;
            break;
          }
        }

        if (collidingItem != null) {
          // There is a collision. Reposition the items above the colliding element
          item.top = collidingItem.top + collidingItem.height + margin.item.vertical;
        }
      } while (collidingItem);
    }
  }
  return shouldBail;
}

/**
 * Adjust vertical positions of the items within a single subgroup such that they 
 * don't overlap each other.
 * @param {Item[]} items
 *            All items withina subgroup
 * @param {{item: {horizontal: number, vertical: number}, axis: number}} margin
 *            Margins between items and between items and the axis.
 * @param {subgroup} subgroup
 *            The subgroup that is being stacked 
 */
function substack(items, margin, subgroup) {
  for (var i = 0; i < items.length; i++) {
    items[i].top = null;
  }

  // Set the initial height
  var subgroupHeight = subgroup.height;

  // calculate new, non-overlapping positions
  for (i = 0; i < items.length; i++) {
    var item = items[i];

    if (item.stack && item.top === null) {
      // initialize top position
      item.top = item.baseTop; //margin.axis + item.baseTop;

      do {
        // TODO: optimize checking for overlap. when there is a gap without items,
        //       you only need to check for items from the next item on, not from zero
        var collidingItem = null;
        for (var j = 0, jj = items.length; j < jj; j++) {
          var other = items[j];
          if (other.top !== null && other !== item /*&& other.stack*/ && exports.collision(item, other, margin.item, other.options.rtl)) {
            collidingItem = other;
            break;
          }
        }

        if (collidingItem != null) {
          // There is a collision. Reposition the items above the colliding element
          item.top = collidingItem.top + collidingItem.height + margin.item.vertical; // + item.baseTop;
        }

        if (item.top + item.height > subgroupHeight) {
          subgroupHeight = item.top + item.height;
        }
      } while (collidingItem);
    }
  }

  // Set the new height
  subgroup.height = subgroupHeight - subgroup.top + 0.5 * margin.item.vertical;
}

/**
 * Adjust vertical positions of the items without stacking them
 * @param {Item[]} items
 *            All visible items
 * @param {{item: {horizontal: number, vertical: number}, axis: number}} margin
 *            Margins between items and between items and the axis.
 * @param {subgroups[]} subgroups
 *            All subgroups
 * @param {boolean} stackSubgroups
 */
function nostack(items, margin, subgroups, stackSubgroups) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].data.subgroup == undefined) {
      items[i].top = margin.item.vertical;
    } else if (items[i].data.subgroup !== undefined && stackSubgroups) {
      var newTop = 0;
      for (var subgroup in subgroups) {
        if (subgroups.hasOwnProperty(subgroup)) {
          if (subgroups[subgroup].visible == true && subgroups[subgroup].index < subgroups[items[i].data.subgroup].index) {
            newTop += subgroups[subgroup].height;
            subgroups[items[i].data.subgroup].top = newTop;
          }
        }
      }
      items[i].top = newTop + 0.5 * margin.item.vertical;
    }
  }
  if (!stackSubgroups) {
    exports.stackSubgroups(items, margin, subgroups);
  }
}

/**
 * Adjust vertical positions of the subgroups such that they don't overlap each
 * other.
 * @param {Array.<timeline.Item>} items
 * @param {{item: {horizontal: number, vertical: number}, axis: number}} margin Margins between items and between items and the axis.
 * @param {subgroups[]} subgroups
 *            All subgroups
 */
function stackSubgroups(items, margin, subgroups) {
  for (var subgroup in subgroups) {
    if (subgroups.hasOwnProperty(subgroup)) {

      subgroups[subgroup].top = 0;
      do {
        // TODO: optimize checking for overlap. when there is a gap without items,
        //       you only need to check for items from the next item on, not from zero
        var collidingItem = null;
        for (var otherSubgroup in subgroups) {
          if (subgroups[otherSubgroup].top !== null && otherSubgroup !== subgroup && subgroups[subgroup].index > subgroups[otherSubgroup].index && exports.collisionByTimes(subgroups[subgroup], subgroups[otherSubgroup])) {
            collidingItem = subgroups[otherSubgroup];
            break;
          }
        }

        if (collidingItem != null) {
          // There is a collision. Reposition the subgroups above the colliding element
          subgroups[subgroup].top = collidingItem.top + collidingItem.height;
        }
      } while (collidingItem);
    }
  }
  for (var i = 0; i < items.length; i++) {
    if (items[i].data.subgroup !== undefined) {
      items[i].top = subgroups[items[i].data.subgroup].top + 0.5 * margin.item.vertical;
    }
  }
}

/**
 * Adjust vertical positions of the subgroups such that they don't overlap each
 * other, then stacks the contents of each subgroup individually.
 * @param {Item[]} subgroupItems
 *            All the items in a subgroup
 * @param {{item: {horizontal: number, vertical: number}, axis: number}} margin
 *            Margins between items and between items and the axis.
 * @param {subgroups[]} subgroups
 *            All subgroups 
 */
function stackSubgroupsWithInnerStack(subgroupItems, margin, subgroups) {
  var doSubStack = false;

  // Run subgroups in their order (if any)
  var subgroupOrder = [];

  for (var subgroup in subgroups) {
    if (subgroups[subgroup].hasOwnProperty("index")) {
      subgroupOrder[subgroups[subgroup].index] = subgroup;
    } else {
      subgroupOrder.push(subgroup);
    }
  }

  for (var j = 0; j < subgroupOrder.length; j++) {
    subgroup = subgroupOrder[j];
    if (subgroups.hasOwnProperty(subgroup)) {

      doSubStack = doSubStack || subgroups[subgroup].stack;
      subgroups[subgroup].top = 0;

      for (var otherSubgroup in subgroups) {
        if (subgroups[otherSubgroup].visible && subgroups[subgroup].index > subgroups[otherSubgroup].index) {
          subgroups[subgroup].top += subgroups[otherSubgroup].height;
        }
      }

      var items = subgroupItems[subgroup];
      for (var i = 0; i < items.length; i++) {
        if (items[i].data.subgroup !== undefined) {
          items[i].top = subgroups[items[i].data.subgroup].top + 0.5 * margin.item.vertical;

          if (subgroups[subgroup].stack) {
            items[i].baseTop = items[i].top;
          }
        }
      }

      if (doSubStack && subgroups[subgroup].stack) {
        exports.substack(subgroupItems[subgroup], margin, subgroups[subgroup]);
      }
    }
  }
}

/**
 * Test if the two provided items collide
 * The items must have parameters left, width, top, and height.
 * @param {Item} a          The first item
 * @param {Item} b          The second item
 * @param {{horizontal: number, vertical: number}} margin
 *                          An object containing a horizontal and vertical
 *                          minimum required margin.
 * @param {boolean} rtl
 * @return {boolean}        true if a and b collide, else false
 */
function collision(a, b, margin, rtl) {
  if (rtl) {
    return a.right - margin.horizontal + EPSILON < b.right + b.width && a.right + a.width + margin.horizontal - EPSILON > b.right && a.top - margin.vertical + EPSILON < b.top + b.height && a.top + a.height + margin.vertical - EPSILON > b.top;
  } else {
    return a.left - margin.horizontal + EPSILON < b.left + b.width && a.left + a.width + margin.horizontal - EPSILON > b.left && a.top - margin.vertical + EPSILON < b.top + b.height && a.top + a.height + margin.vertical - EPSILON > b.top;
  }
}

/**
 * Test if the two provided objects collide
 * The objects must have parameters start, end, top, and height.
 * @param {Object} a          The first Object
 * @param {Object} b          The second Object
 * @return {boolean}        true if a and b collide, else false
 */
function collisionByTimes(a, b) {
  return a.start <= b.start && a.end >= b.start && a.top < b.top + b.height && a.top + a.height > b.top || b.start <= a.start && b.end >= a.start && b.top < a.top + a.height && b.top + b.height > a.top;
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Item2 = __webpack_require__(26);

var _Item3 = _interopRequireDefault(_Item2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * @constructor BoxItem
 * @extends Item
 */
var BoxItem = function (_Item) {
  (0, _inherits3['default'])(BoxItem, _Item);

  /**
  * @param {Object} data             Object containing parameters start
  *                                  content, className.
  * @param {{toScreen: function, toTime: function}} conversion
  *                                  Conversion functions from time to screen and vice versa
  * @param {Object} [options]        Configuration options
  *                                  // TODO: describe available options
  */
  function BoxItem(data, conversion, options) {
    (0, _classCallCheck3['default'])(this, BoxItem);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (BoxItem.__proto__ || (0, _getPrototypeOf2['default'])(BoxItem)).call(this));

    _this.props = {
      dot: {
        width: 0,
        height: 0
      },
      line: {
        width: 0,
        height: 0
      }
    };
    _this.options = options;
    // validate data
    if (data) {
      if (data.start == undefined) {
        throw new Error('Property "start" missing in item ' + data);
      }
    }

    _Item3['default'].call(_this, data, conversion, options);
    return _this;
  }

  /**
   * Check whether this item is visible inside given range
   * @param {{start: number, end: number}} range with a timestamp for start and end
   * @returns {boolean} True if visible
   */


  (0, _createClass3['default'])(BoxItem, [{
    key: 'isVisible',
    value: function isVisible(range) {
      // determine visibility
      var isVisible = void 0;
      var align = this.options.align;
      var widthInMs = this.width * range.getMillisecondsPerPixel();

      if (align == 'right') {
        isVisible = this.data.start.getTime() > range.start && this.data.start.getTime() - widthInMs < range.end;
      } else if (align == 'left') {
        isVisible = this.data.start.getTime() + widthInMs > range.start && this.data.start.getTime() < range.end;
      } else {
        // default or 'center'
        isVisible = this.data.start.getTime() + widthInMs / 2 > range.start && this.data.start.getTime() - widthInMs / 2 < range.end;
      }
      return isVisible;
    }
  }, {
    key: '_createDomElement',
    value: function _createDomElement() {
      if (!this.dom) {
        // create DOM
        this.dom = {};

        // create main box
        this.dom.box = document.createElement('DIV');

        // contents box (inside the background box). used for making margins
        this.dom.content = document.createElement('DIV');
        this.dom.content.className = 'timeline-item-content';
        this.dom.box.appendChild(this.dom.content);

        // line to axis
        this.dom.line = document.createElement('DIV');
        this.dom.line.className = 'timeline-line';

        // dot on axis
        this.dom.dot = document.createElement('DIV');
        this.dom.dot.className = 'timeline-dot';

        // attach this item as attribute
        this.dom.box['timeline-item'] = this;

        this.dirty = true;
      }
    }
  }, {
    key: '_appendDomElement',
    value: function _appendDomElement() {
      if (!this.parent) {
        throw new Error('Cannot redraw item: no parent attached');
      }
      if (!this.dom.box.parentNode) {
        var foreground = this.parent.dom.foreground;
        if (!foreground) throw new Error('Cannot redraw item: parent has no foreground container element');
        foreground.appendChild(this.dom.box);
      }
      if (!this.dom.line.parentNode) {
        var background = this.parent.dom.background;
        if (!background) throw new Error('Cannot redraw item: parent has no background container element');
        background.appendChild(this.dom.line);
      }
      if (!this.dom.dot.parentNode) {
        var axis = this.parent.dom.axis;
        if (!background) throw new Error('Cannot redraw item: parent has no axis container element');
        axis.appendChild(this.dom.dot);
      }
      this.displayed = true;
    }
  }, {
    key: '_updateDirtyDomComponents',
    value: function _updateDirtyDomComponents() {
      // An item is marked dirty when:
      // - the item is not yet rendered
      // - the item's data is changed
      // - the item is selected/deselected
      if (this.dirty) {
        this._updateContents(this.dom.content);
        this._updateDataAttributes(this.dom.box);
        this._updateStyle(this.dom.box);

        var editable = this.editable.updateTime || this.editable.updateGroup;

        // update class
        var className = (this.data.className ? ' ' + this.data.className : '') + (this.selected ? ' timeline-selected' : '') + (editable ? ' timeline-editable' : ' timeline-readonly');
        this.dom.box.className = 'timeline-item timeline-box' + className;
        this.dom.line.className = 'timeline-item timeline-line' + className;
        this.dom.dot.className = 'timeline-item timeline-dot' + className;
      }
    }
  }, {
    key: '_getDomComponentsSizes',
    value: function _getDomComponentsSizes() {
      return {
        previous: {
          right: this.dom.box.style.right,
          left: this.dom.box.style.left
        },
        dot: {
          height: this.dom.dot.offsetHeight,
          width: this.dom.dot.offsetWidth
        },
        line: {
          width: this.dom.line.offsetWidth
        },
        box: {
          width: this.dom.box.offsetWidth,
          height: this.dom.box.offsetHeight
        }
      };
    }
  }, {
    key: '_updateDomComponentsSizes',
    value: function _updateDomComponentsSizes(sizes) {
      if (this.options.rtl) {
        this.dom.box.style.right = "0px";
      } else {
        this.dom.box.style.left = "0px";
      }

      // recalculate size
      this.props.dot.height = sizes.dot.height;
      this.props.dot.width = sizes.dot.width;
      this.props.line.width = sizes.line.width;
      this.width = sizes.box.width;
      this.height = sizes.box.height;

      // restore previous position
      if (this.options.rtl) {
        this.dom.box.style.right = sizes.previous.right;
      } else {
        this.dom.box.style.left = sizes.previous.left;
      }

      this.dirty = false;
    }
  }, {
    key: '_repaintDomAdditionals',
    value: function _repaintDomAdditionals() {
      this._repaintOnItemUpdateTimeTooltip(this.dom.box);
      this._repaintDragCenter();
      this._repaintDeleteButton(this.dom.box);
    }

    /**
     * Repaint the item
     * @param {boolean} [returnQueue=false]  return the queue
     * @return {boolean} the redraw queue if returnQueue=true
     */

  }, {
    key: 'redraw',
    value: function redraw(returnQueue) {
      var _this2 = this;

      var sizes = void 0;
      var queue = [
      // create item DOM
      this._createDomElement.bind(this),

      // append DOM to parent DOM
      this._appendDomElement.bind(this),

      // update dirty DOM
      this._updateDirtyDomComponents.bind(this), function () {
        if (_this2.dirty) {
          sizes = _this2._getDomComponentsSizes();
        }
      }, function () {
        if (_this2.dirty) {
          _this2._updateDomComponentsSizes.bind(_this2)(sizes);
        }
      },

      // repaint DOM additionals
      this._repaintDomAdditionals.bind(this)];

      if (returnQueue) {
        return queue;
      } else {
        var result = void 0;
        queue.forEach(function (fn) {
          result = fn();
        });
        return result;
      }
    }

    /**
     * Show the item in the DOM (when not already visible). The items DOM will
     * be created when needed.
     * @param {boolean} [returnQueue=false]  whether to return a queue of functions to execute instead of just executing them
     * @return {boolean} the redraw queue if returnQueue=true
     */

  }, {
    key: 'show',
    value: function show(returnQueue) {
      if (!this.displayed) {
        return this.redraw(returnQueue);
      }
    }

    /**
     * Hide the item from the DOM (when visible)
     */

  }, {
    key: 'hide',
    value: function hide() {
      if (this.displayed) {
        var dom = this.dom;

        if (dom.box.parentNode) dom.box.parentNode.removeChild(dom.box);
        if (dom.line.parentNode) dom.line.parentNode.removeChild(dom.line);
        if (dom.dot.parentNode) dom.dot.parentNode.removeChild(dom.dot);

        this.displayed = false;
      }
    }

    /**
     * Reposition the item horizontally
     * @Override
     */

  }, {
    key: 'repositionX',
    value: function repositionX() {
      var start = this.conversion.toScreen(this.data.start);
      var align = this.options.align;

      // calculate left position of the box
      if (align == 'right') {
        if (this.options.rtl) {
          this.right = start - this.width;

          // reposition box, line, and dot
          this.dom.box.style.right = this.right + 'px';
          this.dom.line.style.right = start - this.props.line.width + 'px';
          this.dom.dot.style.right = start - this.props.line.width / 2 - this.props.dot.width / 2 + 'px';
        } else {
          this.left = start - this.width;

          // reposition box, line, and dot
          this.dom.box.style.left = this.left + 'px';
          this.dom.line.style.left = start - this.props.line.width + 'px';
          this.dom.dot.style.left = start - this.props.line.width / 2 - this.props.dot.width / 2 + 'px';
        }
      } else if (align == 'left') {
        if (this.options.rtl) {
          this.right = start;

          // reposition box, line, and dot
          this.dom.box.style.right = this.right + 'px';
          this.dom.line.style.right = start + 'px';
          this.dom.dot.style.right = start + this.props.line.width / 2 - this.props.dot.width / 2 + 'px';
        } else {
          this.left = start;

          // reposition box, line, and dot
          this.dom.box.style.left = this.left + 'px';
          this.dom.line.style.left = start + 'px';
          this.dom.dot.style.left = start + this.props.line.width / 2 - this.props.dot.width / 2 + 'px';
        }
      } else {
        // default or 'center'
        if (this.options.rtl) {
          this.right = start - this.width / 2;

          // reposition box, line, and dot
          this.dom.box.style.right = this.right + 'px';
          this.dom.line.style.right = start - this.props.line.width + 'px';
          this.dom.dot.style.right = start - this.props.dot.width / 2 + 'px';
        } else {
          this.left = start - this.width / 2;

          // reposition box, line, and dot
          this.dom.box.style.left = this.left + 'px';
          this.dom.line.style.left = start - this.props.line.width / 2 + 'px';
          this.dom.dot.style.left = start - this.props.dot.width / 2 + 'px';
        }
      }
    }

    /**
     * Reposition the item vertically
     * @Override
     */

  }, {
    key: 'repositionY',
    value: function repositionY() {
      var orientation = this.options.orientation.item;
      var box = this.dom.box;
      var line = this.dom.line;
      var dot = this.dom.dot;

      if (orientation == 'top') {
        box.style.top = (this.top || 0) + 'px';

        line.style.top = '0';
        line.style.height = this.parent.top + this.top + 1 + 'px';
        line.style.bottom = '';
      } else {
        // orientation 'bottom'
        var itemSetHeight = this.parent.itemSet.props.height; // TODO: this is nasty
        var lineHeight = itemSetHeight - this.parent.top - this.parent.height + this.top;

        box.style.top = (this.parent.height - this.top - this.height || 0) + 'px';
        line.style.top = itemSetHeight - lineHeight + 'px';
        line.style.bottom = '0';
      }

      dot.style.top = -this.props.dot.height / 2 + 'px';
    }

    /**
     * Return the width of the item left from its start date
     * @return {number}
     */

  }, {
    key: 'getWidthLeft',
    value: function getWidthLeft() {
      return this.width / 2;
    }

    /**
     * Return the width of the item right from its start date
     * @return {number}
     */

  }, {
    key: 'getWidthRight',
    value: function getWidthRight() {
      return this.width / 2;
    }
  }]);
  return BoxItem;
}(_Item3['default']);

exports['default'] = BoxItem;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Item2 = __webpack_require__(26);

var _Item3 = _interopRequireDefault(_Item2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * @constructor PointItem
 * @extends Item
 */
var PointItem = function (_Item) {
  (0, _inherits3['default'])(PointItem, _Item);

  /**
  * @param {Object} data             Object containing parameters start
  *                                  content, className.
  * @param {{toScreen: function, toTime: function}} conversion
  *                                  Conversion functions from time to screen and vice versa
  * @param {Object} [options]        Configuration options
  *                                  // TODO: describe available options
  */
  function PointItem(data, conversion, options) {
    (0, _classCallCheck3['default'])(this, PointItem);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (PointItem.__proto__ || (0, _getPrototypeOf2['default'])(PointItem)).call(this));

    _this.props = {
      dot: {
        top: 0,
        width: 0,
        height: 0
      },
      content: {
        height: 0,
        marginLeft: 0,
        marginRight: 0
      }
    };
    _this.options = options;
    // validate data
    if (data) {
      if (data.start == undefined) {
        throw new Error('Property "start" missing in item ' + data);
      }
    }

    _Item3['default'].call(_this, data, conversion, options);
    return _this;
  }

  /**
   * Check whether this item is visible inside given range
   * @param {{start: number, end: number}} range with a timestamp for start and end
   * @returns {boolean} True if visible
   */


  (0, _createClass3['default'])(PointItem, [{
    key: 'isVisible',
    value: function isVisible(range) {
      // determine visibility
      var widthInMs = this.width * range.getMillisecondsPerPixel();

      return this.data.start.getTime() + widthInMs > range.start && this.data.start < range.end;
    }
  }, {
    key: '_createDomElement',
    value: function _createDomElement() {
      if (!this.dom) {
        // create DOM
        this.dom = {};

        // background box
        this.dom.point = document.createElement('div');
        // className is updated in redraw()

        // contents box, right from the dot
        this.dom.content = document.createElement('div');
        this.dom.content.className = 'timeline-item-content';
        this.dom.point.appendChild(this.dom.content);

        // dot at start
        this.dom.dot = document.createElement('div');
        this.dom.point.appendChild(this.dom.dot);

        // attach this item as attribute
        this.dom.point['timeline-item'] = this;

        this.dirty = true;
      }
    }
  }, {
    key: '_appendDomElement',
    value: function _appendDomElement() {
      if (!this.parent) {
        throw new Error('Cannot redraw item: no parent attached');
      }
      if (!this.dom.point.parentNode) {
        var foreground = this.parent.dom.foreground;
        if (!foreground) {
          throw new Error('Cannot redraw item: parent has no foreground container element');
        }
        foreground.appendChild(this.dom.point);
      }
      this.displayed = true;
    }
  }, {
    key: '_updateDirtyDomComponents',
    value: function _updateDirtyDomComponents() {
      // An item is marked dirty when:
      // - the item is not yet rendered
      // - the item's data is changed
      // - the item is selected/deselected
      if (this.dirty) {
        this._updateContents(this.dom.content);
        this._updateDataAttributes(this.dom.point);
        this._updateStyle(this.dom.point);

        var editable = this.editable.updateTime || this.editable.updateGroup;
        // update class
        var className = (this.data.className ? ' ' + this.data.className : '') + (this.selected ? ' timeline-selected' : '') + (editable ? ' timeline-editable' : ' timeline-readonly');
        this.dom.point.className = 'timeline-item timeline-point' + className;
        this.dom.dot.className = 'timeline-item timeline-dot' + className;
      }
    }
  }, {
    key: '_getDomComponentsSizes',
    value: function _getDomComponentsSizes() {
      return {
        dot: {
          width: this.dom.dot.offsetWidth,
          height: this.dom.dot.offsetHeight
        },
        content: {
          width: this.dom.content.offsetWidth,
          height: this.dom.content.offsetHeight
        },
        point: {
          width: this.dom.point.offsetWidth,
          height: this.dom.point.offsetHeight
        }
      };
    }
  }, {
    key: '_updateDomComponentsSizes',
    value: function _updateDomComponentsSizes(sizes) {
      // recalculate size of dot and contents
      this.props.dot.width = sizes.dot.width;
      this.props.dot.height = sizes.dot.height;
      this.props.content.height = sizes.content.height;

      // resize contents
      if (this.options.rtl) {
        this.dom.content.style.marginRight = 2 * this.props.dot.width + 'px';
      } else {
        this.dom.content.style.marginLeft = 2 * this.props.dot.width + 'px';
      }
      //this.dom.content.style.marginRight = ... + 'px'; // TODO: margin right

      // recalculate size
      this.width = sizes.point.width;
      this.height = sizes.point.height;

      // reposition the dot
      this.dom.dot.style.top = (this.height - this.props.dot.height) / 2 + 'px';
      if (this.options.rtl) {
        this.dom.dot.style.right = this.props.dot.width / 2 + 'px';
      } else {
        this.dom.dot.style.left = this.props.dot.width / 2 + 'px';
      }

      this.dirty = false;
    }
  }, {
    key: '_repaintDomAdditionals',
    value: function _repaintDomAdditionals() {
      this._repaintOnItemUpdateTimeTooltip(this.dom.point);
      this._repaintDragCenter();
      this._repaintDeleteButton(this.dom.point);
    }

    /**
     * Repaint the item
     * @param {boolean} [returnQueue=false]  return the queue
     * @return {boolean} the redraw queue if returnQueue=true
     */

  }, {
    key: 'redraw',
    value: function redraw(returnQueue) {
      var _this2 = this;

      var sizes = void 0;
      var queue = [
      // create item DOM
      this._createDomElement.bind(this),

      // append DOM to parent DOM
      this._appendDomElement.bind(this),

      // update dirty DOM
      this._updateDirtyDomComponents.bind(this), function () {
        if (_this2.dirty) {
          sizes = _this2._getDomComponentsSizes();
        }
      }, function () {
        if (_this2.dirty) {
          _this2._updateDomComponentsSizes.bind(_this2)(sizes);
        }
      },

      // repaint DOM additionals
      this._repaintDomAdditionals.bind(this)];

      if (returnQueue) {
        return queue;
      } else {
        var result = void 0;
        queue.forEach(function (fn) {
          result = fn();
        });
        return result;
      }
    }

    /**
     * Show the item in the DOM (when not already visible). The items DOM will
     * be created when needed.
     * @param {boolean} [returnQueue=false]  whether to return a queue of functions to execute instead of just executing them
     * @return {boolean} the redraw queue if returnQueue=true
     */

  }, {
    key: 'show',
    value: function show(returnQueue) {
      if (!this.displayed) {
        return this.redraw(returnQueue);
      }
    }

    /**
     * Hide the item from the DOM (when visible)
     */

  }, {
    key: 'hide',
    value: function hide() {
      if (this.displayed) {
        if (this.dom.point.parentNode) {
          this.dom.point.parentNode.removeChild(this.dom.point);
        }

        this.displayed = false;
      }
    }

    /**
     * Reposition the item horizontally
     * @Override
     */

  }, {
    key: 'repositionX',
    value: function repositionX() {
      var start = this.conversion.toScreen(this.data.start);

      if (this.options.rtl) {
        this.right = start - this.props.dot.width;

        // reposition point
        this.dom.point.style.right = this.right + 'px';
      } else {
        this.left = start - this.props.dot.width;

        // reposition point
        this.dom.point.style.left = this.left + 'px';
      }
    }

    /**
     * Reposition the item vertically
     * @Override
     */

  }, {
    key: 'repositionY',
    value: function repositionY() {
      var orientation = this.options.orientation.item;
      var point = this.dom.point;
      if (orientation == 'top') {
        point.style.top = this.top + 'px';
      } else {
        point.style.top = this.parent.height - this.top - this.height + 'px';
      }
    }

    /**
     * Return the width of the item left from its start date
     * @return {number}
     */

  }, {
    key: 'getWidthLeft',
    value: function getWidthLeft() {
      return this.props.dot.width;
    }

    /**
     * Return the width of the item right from  its start date
     * @return {number}
     */

  }, {
    key: 'getWidthRight',
    value: function getWidthRight() {
      return this.props.dot.width;
    }
  }]);
  return PointItem;
}(_Item3['default']);

exports['default'] = PointItem;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Item2 = __webpack_require__(26);

var _Item3 = _interopRequireDefault(_Item2);

var _BackgroundGroup = __webpack_require__(52);

var _BackgroundGroup2 = _interopRequireDefault(_BackgroundGroup);

var _RangeItem = __webpack_require__(53);

var _RangeItem2 = _interopRequireDefault(_RangeItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * @constructor BackgroundItem
 * @extends Item
 */
var BackgroundItem = function (_Item) {
  (0, _inherits3['default'])(BackgroundItem, _Item);

  /**
  * @constructor BackgroundItem
  * @param {Object} data             Object containing parameters start, end
  *                                  content, className.
  * @param {{toScreen: function, toTime: function}} conversion
  *                                  Conversion functions from time to screen and vice versa
  * @param {Object} [options]        Configuration options
  *                                  // TODO: describe options
  * // TODO: implement support for the BackgroundItem just having a start, then being displayed as a sort of an annotation
  */
  function BackgroundItem(data, conversion, options) {
    (0, _classCallCheck3['default'])(this, BackgroundItem);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (BackgroundItem.__proto__ || (0, _getPrototypeOf2['default'])(BackgroundItem)).call(this));

    _this.props = {
      content: {
        width: 0
      }
    };
    _this.overflow = false; // if contents can overflow (css styling), this flag is set to true

    // validate data
    if (data) {
      if (data.start == undefined) {
        throw new Error('Property "start" missing in item ' + data.id);
      }
      if (data.end == undefined) {
        throw new Error('Property "end" missing in item ' + data.id);
      }
    }

    _Item3['default'].call(_this, data, conversion, options);
    return _this;
  }

  /**
   * Check whether this item is visible inside given range
   * @param {timeline.Range} range with a timestamp for start and end
   * @returns {boolean} True if visible
   */


  (0, _createClass3['default'])(BackgroundItem, [{
    key: 'isVisible',
    value: function isVisible(range) {
      // determine visibility
      return this.data.start < range.end && this.data.end > range.start;
    }
  }, {
    key: '_createDomElement',
    value: function _createDomElement() {
      if (!this.dom) {
        // create DOM
        this.dom = {};

        // background box
        this.dom.box = document.createElement('div');
        // className is updated in redraw()

        // frame box (to prevent the item contents from overflowing
        this.dom.frame = document.createElement('div');
        this.dom.frame.className = 'timeline-item-overflow';
        this.dom.box.appendChild(this.dom.frame);

        // contents box
        this.dom.content = document.createElement('div');
        this.dom.content.className = 'timeline-item-content';
        this.dom.frame.appendChild(this.dom.content);

        // Note: we do NOT attach this item as attribute to the DOM,
        //       such that background items cannot be selected
        //this.dom.box['timeline-item'] = this;

        this.dirty = true;
      }
    }
  }, {
    key: '_appendDomElement',
    value: function _appendDomElement() {
      if (!this.parent) {
        throw new Error('Cannot redraw item: no parent attached');
      }
      if (!this.dom.box.parentNode) {
        var background = this.parent.dom.background;
        if (!background) {
          throw new Error('Cannot redraw item: parent has no background container element');
        }
        background.appendChild(this.dom.box);
      }
      this.displayed = true;
    }
  }, {
    key: '_updateDirtyDomComponents',
    value: function _updateDirtyDomComponents() {
      // update dirty DOM. An item is marked dirty when:
      // - the item is not yet rendered
      // - the item's data is changed
      // - the item is selected/deselected
      if (this.dirty) {
        this._updateContents(this.dom.content);
        this._updateDataAttributes(this.dom.content);
        this._updateStyle(this.dom.box);

        // update class
        var className = (this.data.className ? ' ' + this.data.className : '') + (this.selected ? ' timeline-selected' : '');
        this.dom.box.className = this.baseClassName + className;
      }
    }
  }, {
    key: '_getDomComponentsSizes',
    value: function _getDomComponentsSizes() {
      // determine from css whether this box has overflow
      this.overflow = window.getComputedStyle(this.dom.content).overflow !== 'hidden';
      return {
        content: {
          width: this.dom.content.offsetWidth
        }
      };
    }
  }, {
    key: '_updateDomComponentsSizes',
    value: function _updateDomComponentsSizes(sizes) {
      // recalculate size
      this.props.content.width = sizes.content.width;
      this.height = 0; // set height zero, so this item will be ignored when stacking items

      this.dirty = false;
    }
  }, {
    key: '_repaintDomAdditionals',
    value: function _repaintDomAdditionals() {}

    /**
     * Repaint the item
     * @param {boolean} [returnQueue=false]  return the queue
     * @return {boolean} the redraw result or the redraw queue if returnQueue=true
     */

  }, {
    key: 'redraw',
    value: function redraw(returnQueue) {
      var _this2 = this;

      var sizes = void 0;
      var queue = [
      // create item DOM
      this._createDomElement.bind(this),

      // append DOM to parent DOM
      this._appendDomElement.bind(this), this._updateDirtyDomComponents.bind(this), function () {
        if (_this2.dirty) {
          sizes = _this2._getDomComponentsSizes.bind(_this2)();
        }
      }, function () {
        if (_this2.dirty) {
          _this2._updateDomComponentsSizes.bind(_this2)(sizes);
        }
      },

      // repaint DOM additionals
      this._repaintDomAdditionals.bind(this)];

      if (returnQueue) {
        return queue;
      } else {
        var result = void 0;
        queue.forEach(function (fn) {
          result = fn();
        });
        return result;
      }
    }

    /**
     * Reposition the item vertically
     * @Override
     */

  }, {
    key: 'repositionY',
    value: function repositionY(margin) {
      // eslint-disable-line no-unused-vars
      var height = void 0;
      var orientation = this.options.orientation.item;

      // special positioning for subgroups
      if (this.data.subgroup !== undefined) {
        // TODO: instead of calculating the top position of the subgroups here for every BackgroundItem, calculate the top of the subgroup once in Itemset
        var itemSubgroup = this.data.subgroup;

        this.dom.box.style.height = this.parent.subgroups[itemSubgroup].height + 'px';

        if (orientation == 'top') {
          this.dom.box.style.top = this.parent.top + this.parent.subgroups[itemSubgroup].top + 'px';
        } else {
          this.dom.box.style.top = this.parent.top + this.parent.height - this.parent.subgroups[itemSubgroup].top - this.parent.subgroups[itemSubgroup].height + 'px';
        }
        this.dom.box.style.bottom = '';
      }
      // and in the case of no subgroups:
      else {
          // we want backgrounds with groups to only show in groups.
          if (this.parent instanceof _BackgroundGroup2['default']) {
            // if the item is not in a group:
            height = Math.max(this.parent.height, this.parent.itemSet.body.domProps.center.height, this.parent.itemSet.body.domProps.centerContainer.height);
            this.dom.box.style.bottom = orientation == 'bottom' ? '0' : '';
            this.dom.box.style.top = orientation == 'top' ? '0' : '';
          } else {
            height = this.parent.height;
            // same alignment for items when orientation is top or bottom
            this.dom.box.style.top = this.parent.top + 'px';
            this.dom.box.style.bottom = '';
          }
        }
      this.dom.box.style.height = height + 'px';
    }
  }]);
  return BackgroundItem;
}(_Item3['default']);

BackgroundItem.prototype.baseClassName = 'timeline-item timeline-background';

BackgroundItem.prototype.stack = false;

/**
 * Show the item in the DOM (when not already visible). The items DOM will
 * be created when needed.
 */
BackgroundItem.prototype.show = _RangeItem2['default'].prototype.show;

/**
 * Hide the item from the DOM (when visible)
 * @return {Boolean} changed
 */
BackgroundItem.prototype.hide = _RangeItem2['default'].prototype.hide;

/**
 * Reposition the item horizontally
 * @Override
 */
BackgroundItem.prototype.repositionX = _RangeItem2['default'].prototype.repositionX;

exports['default'] = BackgroundItem;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *
 * @param {number} start
 * @param {number} end
 * @param {boolean} autoScaleStart
 * @param {boolean} autoScaleEnd
 * @param {number} containerHeight
 * @param {number} majorCharHeight
 * @param {boolean} zeroAlign
 * @param {function} formattingFunction
 * @constructor DataScale
 */
var DataScale = function () {
  function DataScale(start, end, autoScaleStart, autoScaleEnd, containerHeight, majorCharHeight) {
    var zeroAlign = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var formattingFunction = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
    (0, _classCallCheck3['default'])(this, DataScale);

    this.majorSteps = [1, 2, 5, 10];
    this.minorSteps = [0.25, 0.5, 1, 2];
    this.customLines = null;

    this.containerHeight = containerHeight;
    this.majorCharHeight = majorCharHeight;
    this._start = start;
    this._end = end;

    this.scale = 1;
    this.minorStepIdx = -1;
    this.magnitudefactor = 1;
    this.determineScale();

    this.zeroAlign = zeroAlign;
    this.autoScaleStart = autoScaleStart;
    this.autoScaleEnd = autoScaleEnd;

    this.formattingFunction = formattingFunction;

    if (autoScaleStart || autoScaleEnd) {
      var me = this;
      var roundToMinor = function roundToMinor(value) {
        var rounded = value - value % (me.magnitudefactor * me.minorSteps[me.minorStepIdx]);
        if (value % (me.magnitudefactor * me.minorSteps[me.minorStepIdx]) > 0.5 * (me.magnitudefactor * me.minorSteps[me.minorStepIdx])) {
          return rounded + me.magnitudefactor * me.minorSteps[me.minorStepIdx];
        } else {
          return rounded;
        }
      };
      if (autoScaleStart) {
        this._start -= this.magnitudefactor * 2 * this.minorSteps[this.minorStepIdx];
        this._start = roundToMinor(this._start);
      }

      if (autoScaleEnd) {
        this._end += this.magnitudefactor * this.minorSteps[this.minorStepIdx];
        this._end = roundToMinor(this._end);
      }
      this.determineScale();
    }
  }

  (0, _createClass3['default'])(DataScale, [{
    key: 'setCharHeight',
    value: function setCharHeight(majorCharHeight) {
      this.majorCharHeight = majorCharHeight;
    }
  }, {
    key: 'setHeight',
    value: function setHeight(containerHeight) {
      this.containerHeight = containerHeight;
    }
  }, {
    key: 'determineScale',
    value: function determineScale() {
      var range = this._end - this._start;
      this.scale = this.containerHeight / range;
      var minimumStepValue = this.majorCharHeight / this.scale;
      var orderOfMagnitude = range > 0 ? Math.round(Math.log(range) / Math.LN10) : 0;

      this.minorStepIdx = -1;
      this.magnitudefactor = Math.pow(10, orderOfMagnitude);

      var start = 0;
      if (orderOfMagnitude < 0) {
        start = orderOfMagnitude;
      }

      var solutionFound = false;
      for (var l = start; Math.abs(l) <= Math.abs(orderOfMagnitude); l++) {
        this.magnitudefactor = Math.pow(10, l);
        for (var j = 0; j < this.minorSteps.length; j++) {
          var stepSize = this.magnitudefactor * this.minorSteps[j];
          if (stepSize >= minimumStepValue) {
            solutionFound = true;
            this.minorStepIdx = j;
            break;
          }
        }
        if (solutionFound === true) {
          break;
        }
      }
    }
  }, {
    key: 'is_major',
    value: function is_major(value) {
      return value % (this.magnitudefactor * this.majorSteps[this.minorStepIdx]) === 0;
    }
  }, {
    key: 'getStep',
    value: function getStep() {
      return this.magnitudefactor * this.minorSteps[this.minorStepIdx];
    }
  }, {
    key: 'getFirstMajor',
    value: function getFirstMajor() {
      var majorStep = this.magnitudefactor * this.majorSteps[this.minorStepIdx];
      return this.convertValue(this._start + (majorStep - this._start % majorStep) % majorStep);
    }
  }, {
    key: 'formatValue',
    value: function formatValue(current) {
      var returnValue = current.toPrecision(5);
      if (typeof this.formattingFunction === 'function') {
        returnValue = this.formattingFunction(current);
      }

      if (typeof returnValue === 'number') {
        return '' + returnValue;
      } else if (typeof returnValue === 'string') {
        return returnValue;
      } else {
        return current.toPrecision(5);
      }
    }
  }, {
    key: 'getLines',
    value: function getLines() {
      var lines = [];
      var step = this.getStep();
      var bottomOffset = (step - this._start % step) % step;
      for (var i = this._start + bottomOffset; this._end - i > 0.00001; i += step) {
        if (i != this._start) {
          //Skip the bottom line
          lines.push({ major: this.is_major(i), y: this.convertValue(i), val: this.formatValue(i) });
        }
      }
      return lines;
    }
  }, {
    key: 'followScale',
    value: function followScale(other) {
      var oldStepIdx = this.minorStepIdx;
      var oldStart = this._start;
      var oldEnd = this._end;

      var me = this;
      var increaseMagnitude = function increaseMagnitude() {
        me.magnitudefactor *= 2;
      };
      var decreaseMagnitude = function decreaseMagnitude() {
        me.magnitudefactor /= 2;
      };

      if (other.minorStepIdx <= 1 && this.minorStepIdx <= 1 || other.minorStepIdx > 1 && this.minorStepIdx > 1) {
        //easy, no need to change stepIdx nor multiplication factor
      } else if (other.minorStepIdx < this.minorStepIdx) {
        //I'm 5, they are 4 per major.
        this.minorStepIdx = 1;
        if (oldStepIdx == 2) {
          increaseMagnitude();
        } else {
          increaseMagnitude();
          increaseMagnitude();
        }
      } else {
        //I'm 4, they are 5 per major
        this.minorStepIdx = 2;
        if (oldStepIdx == 1) {
          decreaseMagnitude();
        } else {
          decreaseMagnitude();
          decreaseMagnitude();
        }
      }

      //Get masters stats:
      var otherZero = other.convertValue(0);
      var otherStep = other.getStep() * other.scale;

      var done = false;
      var count = 0;
      //Loop until magnitude is correct for given constrains.
      while (!done && count++ < 5) {

        //Get my stats:
        this.scale = otherStep / (this.minorSteps[this.minorStepIdx] * this.magnitudefactor);
        var newRange = this.containerHeight / this.scale;

        //For the case the magnitudefactor has changed:
        this._start = oldStart;
        this._end = this._start + newRange;

        var myOriginalZero = this._end * this.scale;
        var majorStep = this.magnitudefactor * this.majorSteps[this.minorStepIdx];
        var majorOffset = this.getFirstMajor() - other.getFirstMajor();

        if (this.zeroAlign) {
          var zeroOffset = otherZero - myOriginalZero;
          this._end += zeroOffset / this.scale;
          this._start = this._end - newRange;
        } else {
          if (!this.autoScaleStart) {
            this._start += majorStep - majorOffset / this.scale;
            this._end = this._start + newRange;
          } else {
            this._start -= majorOffset / this.scale;
            this._end = this._start + newRange;
          }
        }
        if (!this.autoScaleEnd && this._end > oldEnd + 0.00001) {
          //Need to decrease magnitude to prevent scale overshoot! (end)
          decreaseMagnitude();
          done = false;
          continue;
        }
        if (!this.autoScaleStart && this._start < oldStart - 0.00001) {
          if (this.zeroAlign && oldStart >= 0) {
            console.warn("Can't adhere to given 'min' range, due to zeroalign");
          } else {
            //Need to decrease magnitude to prevent scale overshoot! (start)
            decreaseMagnitude();
            done = false;
            continue;
          }
        }
        if (this.autoScaleStart && this.autoScaleEnd && newRange < oldEnd - oldStart) {
          increaseMagnitude();
          done = false;
          continue;
        }
        done = true;
      }
    }
  }, {
    key: 'convertValue',
    value: function convertValue(value) {
      return this.containerHeight - (value - this._start) * this.scale;
    }
  }, {
    key: 'screenToValue',
    value: function screenToValue(pixels) {
      return (this.containerHeight - pixels) / this.scale + this._start;
    }
  }]);
  return DataScale;
}();

exports['default'] = DataScale;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// utils
var util = exports.util = __webpack_require__(2);

var DOMutil = exports.DOMutil = __webpack_require__(67);

// data
var DataSet = exports.DataSet = __webpack_require__(32)['default'];

var DataView = exports.DataView = __webpack_require__(47)['default'];
var Queue = exports.Queue = __webpack_require__(68)['default'];

// Timeline
var Timeline = exports.Timeline = __webpack_require__(124)['default'];

var timeline = exports.timeline = {
  Core: __webpack_require__(70)['default'],
  DateUtil: __webpack_require__(25),
  Range: __webpack_require__(69)['default'],
  stack: __webpack_require__(77),
  TimeStep: __webpack_require__(49)['default'],

  components: {
    items: {
      Item: __webpack_require__(26)['default'],
      BackgroundItem: __webpack_require__(80)['default'],
      BoxItem: __webpack_require__(78)['default'],
      PointItem: __webpack_require__(79)['default'],
      RangeItem: __webpack_require__(53)['default']
    },

    BackgroundGroup: __webpack_require__(52)['default'],
    Component: __webpack_require__(15)['default'],
    CurrentTime: __webpack_require__(75)['default'],
    CustomTime: __webpack_require__(50)['default'],
    DataAxis: __webpack_require__(139)['default'],
    DataScale: __webpack_require__(81)['default'],
    Group: __webpack_require__(51)['default'],
    ItemSet: __webpack_require__(76)['default'],
    TimeAxis: __webpack_require__(48)['default']
  }
};

// bundled external libraries
var moment = exports.moment = __webpack_require__(8)['default'];

var Hammer = exports.Hammer = __webpack_require__(16);
var keycharm = exports.keycharm = __webpack_require__(73);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(84);
var $Object = __webpack_require__(3).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(17);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(35) });


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var anObject = __webpack_require__(19);
var getKeys = __webpack_require__(28);

module.exports = __webpack_require__(13) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(36);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(21);
var toLength = __webpack_require__(89);
var toAbsoluteIndex = __webpack_require__(90);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(38);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(9).document;
module.exports = document && document.documentElement;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
module.exports = __webpack_require__(3).Object.keys;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(42);
var $keys = __webpack_require__(28);

__webpack_require__(58)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
__webpack_require__(63);
module.exports = __webpack_require__(100);


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(96);
var step = __webpack_require__(97);
var Iterators = __webpack_require__(31);
var toIObject = __webpack_require__(21);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(60)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(35);
var descriptor = __webpack_require__(27);
var setToStringTag = __webpack_require__(43);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(18)(IteratorPrototype, __webpack_require__(11)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38);
var defined = __webpack_require__(37);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var get = __webpack_require__(101);
module.exports = __webpack_require__(3).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(102);
var ITERATOR = __webpack_require__(11)('iterator');
var Iterators = __webpack_require__(31);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(36);
var TAG = __webpack_require__(11)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
__webpack_require__(59);
module.exports = __webpack_require__(44).f('iterator');


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(107);
__webpack_require__(112);
__webpack_require__(113);
__webpack_require__(114);
module.exports = __webpack_require__(3).Symbol;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(9);
var has = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(13);
var $export = __webpack_require__(17);
var redefine = __webpack_require__(61);
var META = __webpack_require__(108).KEY;
var $fails = __webpack_require__(23);
var shared = __webpack_require__(40);
var setToStringTag = __webpack_require__(43);
var uid = __webpack_require__(30);
var wks = __webpack_require__(11);
var wksExt = __webpack_require__(44);
var wksDefine = __webpack_require__(45);
var enumKeys = __webpack_require__(109);
var isArray = __webpack_require__(110);
var anObject = __webpack_require__(19);
var isObject = __webpack_require__(20);
var toIObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(34);
var createDesc = __webpack_require__(27);
var _create = __webpack_require__(35);
var gOPNExt = __webpack_require__(111);
var $GOPD = __webpack_require__(66);
var $DP = __webpack_require__(12);
var $keys = __webpack_require__(28);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(65).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(46).f = $propertyIsEnumerable;
  __webpack_require__(64).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(29)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(30)('meta');
var isObject = __webpack_require__(20);
var has = __webpack_require__(14);
var setDesc = __webpack_require__(12).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(23)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(28);
var gOPS = __webpack_require__(64);
var pIE = __webpack_require__(46);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(36);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(21);
var gOPN = __webpack_require__(65).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 112 */
/***/ (function(module, exports) {



/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45)('asyncIterator');


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45)('observable');


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var require;//! moment.js

;(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date = new Date(y, m, d, h, M, s, ms);

        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate (y) {
        var date = new Date(Date.UTC.apply(null, arguments));

        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        if (!m) {
            return isArray(this._weekdays) ? this._weekdays :
                this._weekdays['standalone'];
        }
        return isArray(this._weekdays) ? this._weekdays[m.day()] :
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                !(function webpackMissingModule() { var e = new Error("Cannot find module \"./locale\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input,units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input,units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
            case 'date':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }

        // 'date' is an alias for 'day', so it should be considered as such.
        if (units === 'date') {
            units = 'day';
        }

        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.22.2';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'YYYY-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(116)(module)))

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 117 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 117;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable require-jsdoc */

var _rng = void 0;

var globalVar = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null;

if (globalVar && globalVar.crypto && crypto.getRandomValues) {
  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
  // Moderately fast, high quality
  var _rnds8 = new Uint8Array(16);
  _rng = function whatwgRNG() {
    crypto.getRandomValues(_rnds8);
    return _rnds8;
  };
}

if (!_rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var _rnds = new Array(16);
  _rng = function _rng() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return _rnds;
  };
}

//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required

//var _rng = require('./rng');

// Maps for number <-> hex string conversion
var _byteToHex = [];
var _hexToByte = {};
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
  _hexToByte[_byteToHex[i]] = i;
}

// **`parse()` - Parse a UUID into it's component bytes**
function parse(s, buf, offset) {
  var i = buf && offset || 0;
  var ii = 0;

  buf = buf || [];
  s.toLowerCase().replace(/[0-9a-f]{2}/g, function (oct) {
    if (ii < 16) {
      // Don't overflow!
      buf[i + ii++] = _hexToByte[oct];
    }
  });

  // Zero out remaining bytes if string was short
  while (ii < 16) {
    buf[i + ii++] = 0;
  }

  return buf;
}

// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
function unparse(buf, offset) {
  var i = offset || 0;
  var bth = _byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
}

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = _rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [_seedBytes[0] | 0x01, _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0;

var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; n++) {
    b[i + n] = node[n];
  }

  return buf ? buf : unparse(b);
}

// **`v4()` - Generate random UUID**

// See https://github.com/broofa/node-uuid for API details
function v4(options, buf, offset) {
  // Deprecated - 'format' argument, as supported in v1.2
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || _rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ii++) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || unparse(rnds);
}

// Export public API
var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
uuid.parse = parse;
uuid.unparse = unparse;

exports['default'] = uuid;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(119)))

/***/ }),
/* 119 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(123);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(17);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(13), 'Object', { defineProperty: __webpack_require__(12).f });


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

var _DataSet = __webpack_require__(32);

var _DataSet2 = _interopRequireDefault(_DataSet);

var _DataView = __webpack_require__(47);

var _DataView2 = _interopRequireDefault(_DataView);

var _Range = __webpack_require__(69);

var _Range2 = _interopRequireDefault(_Range);

var _Core2 = __webpack_require__(70);

var _Core3 = _interopRequireDefault(_Core2);

var _TimeAxis = __webpack_require__(48);

var _TimeAxis2 = _interopRequireDefault(_TimeAxis);

var _CurrentTime = __webpack_require__(75);

var _CurrentTime2 = _interopRequireDefault(_CurrentTime);

var _CustomTime = __webpack_require__(50);

var _CustomTime2 = _interopRequireDefault(_CustomTime);

var _ItemSet = __webpack_require__(76);

var _ItemSet2 = _interopRequireDefault(_ItemSet);

var _Validator = __webpack_require__(135);

var _Validator2 = _interopRequireDefault(_Validator);

var _optionsTimeline = __webpack_require__(136);

var _Configurator = __webpack_require__(137);

var _Configurator2 = _interopRequireDefault(_Configurator);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Create a timeline visualization
 * @extends Core
 */
var Timeline = function (_Core) {
  (0, _inherits3['default'])(Timeline, _Core);

  /**
  * @param {HTMLElement} container
  * @param {timeline.DataSet | timeline.DataView | Array} [items]
  * @param {timeline.DataSet | timeline.DataView | Array} [groups]
  * @param {Object} [options]  See Timeline.setOptions for the available options.
  * @constructor Timeline
  */
  function Timeline(container, items, groups, options) {
    (0, _classCallCheck3['default'])(this, Timeline);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Timeline.__proto__ || (0, _getPrototypeOf2['default'])(Timeline)).call(this));

    _this.initTime = new Date();
    _this.itemsDone = false;

    if (!(_this instanceof Timeline)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    // if the third element is options, the forth is groups (optionally);
    if (!(Array.isArray(groups) || groups instanceof _DataSet2['default'] || groups instanceof _DataView2['default']) && groups instanceof Object) {
      var forthArgument = options;
      options = groups;
      groups = forthArgument;
    }

    // TODO: REMOVE THIS in the next MAJOR release
    // see https://github.com/almende/vis/issues/2511
    if (options && options.throttleRedraw) {
      console.warn("Timeline option \"throttleRedraw\" is DEPRICATED and no longer supported. It will be removed in the next MAJOR release.");
    }

    var me = _this;
    _this.defaultOptions = {
      autoResize: true,
      orientation: {
        axis: 'bottom', // axis orientation: 'bottom', 'top', or 'both'
        item: 'bottom' // not relevant
      },
      moment: _moment2['default']
    };
    _this.options = util.deepExtend({}, _this.defaultOptions);

    // Create the DOM, props, and emitter
    _this._create(container);
    if (!options || options && typeof options.rtl == "undefined") {
      _this.dom.root.style.visibility = 'hidden';
      var directionFromDom = void 0;
      var domNode = _this.dom.root;
      while (!directionFromDom && domNode) {
        directionFromDom = window.getComputedStyle(domNode, null).direction;
        domNode = domNode.parentElement;
      }
      _this.options.rtl = directionFromDom && directionFromDom.toLowerCase() == "rtl";
    } else {
      _this.options.rtl = options.rtl;
    }

    if (options) {
      if (options.rollingMode) {
        _this.options.rollingMode = options.rollingMode;
      }
      if (options.onInitialDrawComplete) {
        _this.options.onInitialDrawComplete = options.onInitialDrawComplete;
      }
      if (options.onTimeout) {
        _this.options.onTimeout = options.onTimeout;
      }
      if (options.loadingScreenTemplate) {
        _this.options.loadingScreenTemplate = options.loadingScreenTemplate;
      }
    }

    // Prepare loading screen
    var loadingScreenFragment = document.createElement('div');
    if (_this.options.loadingScreenTemplate) {
      var templateFunction = _this.options.loadingScreenTemplate.bind(_this);
      var loadingScreen = templateFunction(_this.dom.loadingScreen);
      if (loadingScreen instanceof Object && !(loadingScreen instanceof Element)) {
        templateFunction(loadingScreenFragment);
      } else {
        if (loadingScreen instanceof Element) {
          loadingScreenFragment.innerHTML = '';
          loadingScreenFragment.appendChild(loadingScreen);
        } else if (loadingScreen != undefined) {
          loadingScreenFragment.innerHTML = loadingScreen;
        }
      }
    }
    _this.dom.loadingScreen.appendChild(loadingScreenFragment);

    // all components listed here will be repainted automatically
    _this.components = [];

    _this.body = {
      dom: _this.dom,
      domProps: _this.props,
      emitter: {
        on: _this.on.bind(_this),
        off: _this.off.bind(_this),
        emit: _this.emit.bind(_this)
      },
      hiddenDates: [],
      util: {
        getScale: function getScale() {
          return me.timeAxis.step.scale;
        },
        getStep: function getStep() {
          return me.timeAxis.step.step;
        },


        toScreen: me._toScreen.bind(me),
        toGlobalScreen: me._toGlobalScreen.bind(me), // this refers to the root.width
        toTime: me._toTime.bind(me),
        toGlobalTime: me._toGlobalTime.bind(me)
      }
    };

    // range
    _this.range = new _Range2['default'](_this.body, _this.options);
    _this.components.push(_this.range);
    _this.body.range = _this.range;

    // time axis
    _this.timeAxis = new _TimeAxis2['default'](_this.body, _this.options);
    _this.timeAxis2 = null; // used in case of orientation option 'both'
    _this.components.push(_this.timeAxis);

    // current time bar
    _this.currentTime = new _CurrentTime2['default'](_this.body, _this.options);
    _this.components.push(_this.currentTime);

    // item set
    _this.itemSet = new _ItemSet2['default'](_this.body, _this.options);
    _this.components.push(_this.itemSet);

    _this.itemsData = null; // DataSet
    _this.groupsData = null; // DataSet

    _this.dom.root.onclick = function (event) {
      me.emit('click', me.getEventProperties(event));
    };
    _this.dom.root.ondblclick = function (event) {
      me.emit('doubleClick', me.getEventProperties(event));
    };
    _this.dom.root.oncontextmenu = function (event) {
      me.emit('contextmenu', me.getEventProperties(event));
    };
    _this.dom.root.onmouseover = function (event) {
      me.emit('mouseOver', me.getEventProperties(event));
    };
    if (window.PointerEvent) {
      _this.dom.root.onpointerdown = function (event) {
        me.emit('mouseDown', me.getEventProperties(event));
      };
      _this.dom.root.onpointermove = function (event) {
        me.emit('mouseMove', me.getEventProperties(event));
      };
      _this.dom.root.onpointerup = function (event) {
        me.emit('mouseUp', me.getEventProperties(event));
      };
    } else {
      _this.dom.root.onmousemove = function (event) {
        me.emit('mouseMove', me.getEventProperties(event));
      };
      _this.dom.root.onmousedown = function (event) {
        me.emit('mouseDown', me.getEventProperties(event));
      };
      _this.dom.root.onmouseup = function (event) {
        me.emit('mouseUp', me.getEventProperties(event));
      };
    }

    //Single time autoscale/fit
    _this.initialFitDone = false;
    _this.on('changed', function () {
      if (me.itemsData == null) return;
      if (!me.initialFitDone && !me.options.rollingMode) {
        me.initialFitDone = true;
        if (me.options.start != undefined || me.options.end != undefined) {
          if (me.options.start == undefined || me.options.end == undefined) {
            var range = me.getItemRange();
          }

          var start = me.options.start != undefined ? me.options.start : range.min;
          var end = me.options.end != undefined ? me.options.end : range.max;
          me.setWindow(start, end, { animation: false });
        } else {
          me.fit({ animation: false });
        }
      }

      if (!me.initialDrawDone && (me.initialRangeChangeDone || !me.options.start && !me.options.end || me.options.rollingMode)) {
        me.initialDrawDone = true;
        me.itemSet.initialDrawDone = true;
        me.dom.root.style.visibility = 'visible';
        me.dom.loadingScreen.parentNode.removeChild(me.dom.loadingScreen);
        if (me.options.onInitialDrawComplete) {
          setTimeout(function () {
            return me.options.onInitialDrawComplete();
          }, 0);
        }
      }
    });

    _this.on('destroyTimeline', function () {
      me.destroy();
    });

    // apply options
    if (options) {
      _this.setOptions(options);
    }

    // IMPORTANT: THIS HAPPENS BEFORE SET ITEMS!
    if (groups) {
      _this.setGroups(groups);
    }

    // create itemset
    if (items) {
      _this.setItems(items);
    }

    // draw for the first time
    _this._redraw();
    return _this;
  }

  /**
   * Load a configurator
   * @return {Object}
   * @private
   */


  (0, _createClass3['default'])(Timeline, [{
    key: '_createConfigurator',
    value: function _createConfigurator() {
      return new _Configurator2['default'](this, this.dom.container, _optionsTimeline.configureOptions);
    }

    /**
     * Force a redraw. The size of all items will be recalculated.
     * Can be useful to manually redraw when option autoResize=false and the window
     * has been resized, or when the items CSS has been changed.
     *
     * Note: this function will be overridden on construction with a trottled version
     */

  }, {
    key: 'redraw',
    value: function redraw() {
      this.itemSet && this.itemSet.markDirty({ refreshItems: true });
      this._redraw();
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      // validate options
      var errorFound = _Validator2['default'].validate(options, _optionsTimeline.allOptions);

      if (errorFound === true) {
        console.log('%cErrors have been found in the supplied options object.', _Validator.printStyle);
      }
      _Core3['default'].prototype.setOptions.call(this, options);

      if ('type' in options) {
        if (options.type !== this.options.type) {
          this.options.type = options.type;

          // force recreation of all items
          var itemsData = this.itemsData;
          if (itemsData) {
            var selection = this.getSelection();
            this.setItems(null); // remove all
            this.setItems(itemsData); // add all
            this.setSelection(selection); // restore selection
          }
        }
      }
    }

    /**
     * Set items
     * @param {timeline.DataSet | Array | null} items
     */

  }, {
    key: 'setItems',
    value: function setItems(items) {
      this.itemsDone = false;

      // convert to type DataSet when needed
      var newDataSet = void 0;
      if (!items) {
        newDataSet = null;
      } else if (items instanceof _DataSet2['default'] || items instanceof _DataView2['default']) {
        newDataSet = items;
      } else {
        // turn an array into a dataset
        newDataSet = new _DataSet2['default'](items, {
          type: {
            start: 'Date',
            end: 'Date'
          }
        });
      }

      // set items
      this.itemsData = newDataSet;
      this.itemSet && this.itemSet.setItems(newDataSet);
    }

    /**
     * Set groups
     * @param {timeline.DataSet | Array} groups
     */

  }, {
    key: 'setGroups',
    value: function setGroups(groups) {
      // convert to type DataSet when needed
      var newDataSet = void 0;
      if (!groups) {
        newDataSet = null;
      } else {
        var filter = function filter(group) {
          return group.visible !== false;
        };
        if (groups instanceof _DataSet2['default'] || groups instanceof _DataView2['default']) {
          newDataSet = new _DataView2['default'](groups, { filter: filter });
        } else {
          // turn an array into a dataset
          newDataSet = new _DataSet2['default'](groups.filter(filter));
        }
      }

      this.groupsData = newDataSet;
      this.itemSet.setGroups(newDataSet);
    }

    /**
     * Set both items and groups in one go
     * @param {{items: (Array | timeline.DataSet), groups: (Array | timeline.DataSet)}} data
     */

  }, {
    key: 'setData',
    value: function setData(data) {
      if (data && data.groups) {
        this.setGroups(data.groups);
      }

      if (data && data.items) {
        this.setItems(data.items);
      }
    }

    /**
     * Set selected items by their id. Replaces the current selection
     * Unknown id's are silently ignored.
     * @param {string[] | string} [ids]  An array with zero or more id's of the items to be
     *                                selected. If ids is an empty array, all items will be
     *                                unselected.
     * @param {Object} [options]      Available options:
     *                                `focus: boolean`
     *                                    If true, focus will be set to the selected item(s)
     *                                `animation: boolean | {duration: number, easingFunction: string}`
     *                                    If true (default), the range is animated
     *                                    smoothly to the new window. An object can be
     *                                    provided to specify duration and easing function.
     *                                    Default duration is 500 ms, and default easing
     *                                    function is 'easeInOutQuad'.
     *                                    Only applicable when option focus is true.
     */

  }, {
    key: 'setSelection',
    value: function setSelection(ids, options) {
      this.itemSet && this.itemSet.setSelection(ids);

      if (options && options.focus) {
        this.focus(ids, options);
      }
    }

    /**
     * Get the selected items by their id
     * @return {Array} ids  The ids of the selected items
     */

  }, {
    key: 'getSelection',
    value: function getSelection() {
      return this.itemSet && this.itemSet.getSelection() || [];
    }

    /**
     * Adjust the visible window such that the selected item (or multiple items)
     * are centered on screen.
     * @param {string | String[]} id     An item id or array with item ids
     * @param {Object} [options]      Available options:
     *                                `animation: boolean | {duration: number, easingFunction: string}`
     *                                    If true (default), the range is animated
     *                                    smoothly to the new window. An object can be
     *                                    provided to specify duration and easing function.
     *                                    Default duration is 500 ms, and default easing
     *                                    function is 'easeInOutQuad'.
     */

  }, {
    key: 'focus',
    value: function focus(id, options) {
      if (!this.itemsData || id == undefined) return;

      var ids = Array.isArray(id) ? id : [id];

      // get the specified item(s)
      var itemsData = this.itemsData.getDataSet().get(ids, {
        type: {
          start: 'Date',
          end: 'Date'
        }
      });

      // calculate minimum start and maximum end of specified items
      var start = null;
      var end = null;
      itemsData.forEach(function (itemData) {
        var s = itemData.start.valueOf();
        var e = 'end' in itemData ? itemData.end.valueOf() : itemData.start.valueOf();

        if (start === null || s < start) {
          start = s;
        }

        if (end === null || e > end) {
          end = e;
        }
      });

      if (start !== null && end !== null) {
        var me = this;
        // Use the first item for the vertical focus
        var item = this.itemSet.items[ids[0]];
        var startPos = this._getScrollTop() * -1;
        var initialVerticalScroll = null;

        // Setup a handler for each frame of the vertical scroll
        var verticalAnimationFrame = function verticalAnimationFrame(ease, willDraw, done) {
          var verticalScroll = getItemVerticalScroll(me, item);

          if (verticalScroll === false) {
            return; // We don't need to scroll, so do nothing
          }

          if (!initialVerticalScroll) {
            initialVerticalScroll = verticalScroll;
          }

          if (initialVerticalScroll.itemTop == verticalScroll.itemTop && !initialVerticalScroll.shouldScroll) {
            return; // We don't need to scroll, so do nothing
          } else if (initialVerticalScroll.itemTop != verticalScroll.itemTop && verticalScroll.shouldScroll) {
            // The redraw shifted elements, so reset the animation to correct
            initialVerticalScroll = verticalScroll;
            startPos = me._getScrollTop() * -1;
          }

          var from = startPos;
          var to = initialVerticalScroll.scrollOffset;
          var scrollTop = done ? to : from + (to - from) * ease;

          me._setScrollTop(-scrollTop);

          if (!willDraw) {
            me._redraw();
          }
        };

        // Enforces the final vertical scroll position
        var setFinalVerticalPosition = function setFinalVerticalPosition() {
          var finalVerticalScroll = getItemVerticalScroll(me, item);

          if (finalVerticalScroll.shouldScroll && finalVerticalScroll.itemTop != initialVerticalScroll.itemTop) {
            me._setScrollTop(-finalVerticalScroll.scrollOffset);
            me._redraw();
          }
        };

        // Perform one last check at the end to make sure the final vertical
        // position is correct
        var finalVerticalCallback = function finalVerticalCallback() {
          // Double check we ended at the proper scroll position
          setFinalVerticalPosition();

          // Let the redraw settle and finalize the position.      
          setTimeout(setFinalVerticalPosition, 100);
        };

        // calculate the new middle and interval for the window
        var middle = (start + end) / 2;
        var interval = (end - start) * 1.1;

        var animation = options && options.animation !== undefined ? options.animation : true;

        if (!animation) {
          // We aren't animating so set a default so that the final callback forces the vertical location
          initialVerticalScroll = { shouldScroll: false, scrollOffset: -1, itemTop: -1 };
        }

        this.range.setRange(middle - interval / 2, middle + interval / 2, { animation: animation }, finalVerticalCallback, verticalAnimationFrame);
      }
    }

    /**
     * Set Timeline window such that it fits all items
     * @param {Object} [options]  Available options:
     *                                `animation: boolean | {duration: number, easingFunction: string}`
     *                                    If true (default), the range is animated
     *                                    smoothly to the new window. An object can be
     *                                    provided to specify duration and easing function.
     *                                    Default duration is 500 ms, and default easing
     *                                    function is 'easeInOutQuad'.
     * @param {function} [callback]
     */

  }, {
    key: 'fit',
    value: function fit(options, callback) {
      var animation = options && options.animation !== undefined ? options.animation : true;
      var range = void 0;

      var dataset = this.itemsData && this.itemsData.getDataSet();
      if (dataset.length === 1 && dataset.get()[0].end === undefined) {
        // a single item -> don't fit, just show a range around the item from -4 to +3 days
        range = this.getDataRange();
        this.moveTo(range.min.valueOf(), { animation: animation }, callback);
      } else {
        // exactly fit the items (plus a small margin)
        range = this.getItemRange();
        this.range.setRange(range.min, range.max, { animation: animation }, callback);
      }
    }

    /**
     * Determine the range of the items, taking into account their actual width
     * and a margin of 10 pixels on both sides.
     *
     * @returns {{min: Date, max: Date}}
     */

  }, {
    key: 'getItemRange',
    value: function getItemRange() {
      var _this2 = this;

      // get a rough approximation for the range based on the items start and end dates
      var range = this.getDataRange();
      var min = range.min !== null ? range.min.valueOf() : null;
      var max = range.max !== null ? range.max.valueOf() : null;
      var minItem = null;
      var maxItem = null;

      if (min != null && max != null) {
        var interval = max - min; // ms
        if (interval <= 0) {
          interval = 10;
        }
        var factor = interval / this.props.center.width;

        var redrawQueue = {};
        var redrawQueueLength = 0;

        // collect redraw functions
        util.forEach(this.itemSet.items, function (item, key) {
          if (item.groupShowing) {
            var returnQueue = true;
            redrawQueue[key] = item.redraw(returnQueue);
            redrawQueueLength = redrawQueue[key].length;
          }
        });

        var needRedraw = redrawQueueLength > 0;
        if (needRedraw) {
          var _loop = function _loop(i) {
            util.forEach(redrawQueue, function (fns) {
              fns[i]();
            });
          };

          // redraw all regular items
          for (var i = 0; i < redrawQueueLength; i++) {
            _loop(i);
          }
        }

        // calculate the date of the left side and right side of the items given
        util.forEach(this.itemSet.items, function (item) {
          var start = getStart(item);
          var end = getEnd(item);
          var startSide = void 0;
          var endSide = void 0;

          if (_this2.options.rtl) {
            startSide = start - (item.getWidthRight() + 10) * factor;
            endSide = end + (item.getWidthLeft() + 10) * factor;
          } else {
            startSide = start - (item.getWidthLeft() + 10) * factor;
            endSide = end + (item.getWidthRight() + 10) * factor;
          }

          if (startSide < min) {
            min = startSide;
            minItem = item;
          }
          if (endSide > max) {
            max = endSide;
            maxItem = item;
          }
        });

        if (minItem && maxItem) {
          var lhs = minItem.getWidthLeft() + 10;
          var rhs = maxItem.getWidthRight() + 10;
          var delta = this.props.center.width - lhs - rhs; // px

          if (delta > 0) {
            if (this.options.rtl) {
              min = getStart(minItem) - rhs * interval / delta; // ms
              max = getEnd(maxItem) + lhs * interval / delta; // ms
            } else {
              min = getStart(minItem) - lhs * interval / delta; // ms
              max = getEnd(maxItem) + rhs * interval / delta; // ms
            }
          }
        }
      }

      return {
        min: min != null ? new Date(min) : null,
        max: max != null ? new Date(max) : null
      };
    }

    /**
     * Calculate the data range of the items start and end dates
     * @returns {{min: Date, max: Date}}
     */

  }, {
    key: 'getDataRange',
    value: function getDataRange() {
      var min = null;
      var max = null;

      var dataset = this.itemsData && this.itemsData.getDataSet();
      if (dataset) {
        dataset.forEach(function (item) {
          var start = util.convert(item.start, 'Date').valueOf();
          var end = util.convert(item.end != undefined ? item.end : item.start, 'Date').valueOf();
          if (min === null || start < min) {
            min = start;
          }
          if (max === null || end > max) {
            max = end;
          }
        });
      }

      return {
        min: min != null ? new Date(min) : null,
        max: max != null ? new Date(max) : null
      };
    }

    /**
     * Generate Timeline related information from an event
     * @param {Event} event
     * @return {Object} An object with related information, like on which area
     *                  The event happened, whether clicked on an item, etc.
     */

  }, {
    key: 'getEventProperties',
    value: function getEventProperties(event) {
      var clientX = event.center ? event.center.x : event.clientX;
      var clientY = event.center ? event.center.y : event.clientY;
      var x = void 0;
      if (this.options.rtl) {
        x = util.getAbsoluteRight(this.dom.centerContainer) - clientX;
      } else {
        x = clientX - util.getAbsoluteLeft(this.dom.centerContainer);
      }
      var y = clientY - util.getAbsoluteTop(this.dom.centerContainer);

      var item = this.itemSet.itemFromTarget(event);
      var group = this.itemSet.groupFromTarget(event);
      var customTime = _CustomTime2['default'].customTimeFromTarget(event);

      var snap = this.itemSet.options.snap || null;
      var scale = this.body.util.getScale();
      var step = this.body.util.getStep();
      var time = this._toTime(x);
      var snappedTime = snap ? snap(time, scale, step) : time;

      var element = util.getTarget(event);
      var what = null;
      if (item != null) {
        what = 'item';
      } else if (customTime != null) {
        what = 'custom-time';
      } else if (util.hasParent(element, this.timeAxis.dom.foreground)) {
        what = 'axis';
      } else if (this.timeAxis2 && util.hasParent(element, this.timeAxis2.dom.foreground)) {
        what = 'axis';
      } else if (util.hasParent(element, this.itemSet.dom.labelSet)) {
        what = 'group-label';
      } else if (util.hasParent(element, this.currentTime.bar)) {
        what = 'current-time';
      } else if (util.hasParent(element, this.dom.center)) {
        what = 'background';
      }

      return {
        event: event,
        item: item ? item.id : null,
        group: group ? group.groupId : null,
        what: what,
        pageX: event.srcEvent ? event.srcEvent.pageX : event.pageX,
        pageY: event.srcEvent ? event.srcEvent.pageY : event.pageY,
        x: x,
        y: y,
        time: time,
        snappedTime: snappedTime
      };
    }

    /**
     * Toggle Timeline rolling mode
     */

  }, {
    key: 'toggleRollingMode',
    value: function toggleRollingMode() {
      if (this.range.rolling) {
        this.range.stopRolling();
      } else {
        if (this.options.rollingMode == undefined) {
          this.setOptions(this.options);
        }
        this.range.startRolling();
      }
    }
  }]);
  return Timeline;
}(_Core3['default']);

/**
 *
 * @param {timeline.Item} item
 * @returns {number}
 */


exports['default'] = Timeline;
function getStart(item) {
  return util.convert(item.data.start, 'Date').valueOf();
}

/**
 *
 * @param {timeline.Item} item
 * @returns {number}
 */
function getEnd(item) {
  var end = item.data.end != undefined ? item.data.end : item.data.start;
  return util.convert(end, 'Date').valueOf();
}

/**
 * @param {timeline.Timeline} timeline
 * @param {timeline.Item} item
 * @return {{shouldScroll: bool, scrollOffset: number, itemTop: number}}
 */
function getItemVerticalScroll(timeline, item) {
  if (!item.parent) {
    // The item no longer exists, so ignore this focus.
    return false;
  }

  var itemsetHeight = timeline.options.rtl ? timeline.props.rightContainer.height : timeline.props.leftContainer.height;
  var contentHeight = timeline.props.center.height;

  var group = item.parent;
  var offset = group.top;
  var shouldScroll = true;
  var orientation = timeline.timeAxis.options.orientation.axis;

  var itemTop = function itemTop() {
    if (orientation == "bottom") {
      return group.height - item.top - item.height;
    } else {
      return item.top;
    }
  };

  var currentScrollHeight = timeline._getScrollTop() * -1;
  var targetOffset = offset + itemTop();
  var height = item.height;

  if (targetOffset < currentScrollHeight) {
    if (offset + itemsetHeight <= offset + itemTop() + height) {
      offset += itemTop() - timeline.itemSet.options.margin.item.vertical;
    }
  } else if (targetOffset + height > currentScrollHeight + itemsetHeight) {
    offset += itemTop() + height - itemsetHeight + timeline.itemSet.options.margin.item.vertical;
  } else {
    shouldScroll = false;
  }

  offset = Math.min(offset, contentHeight - itemsetHeight);

  return { shouldScroll: shouldScroll, scrollOffset: offset, itemTop: targetOffset };
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
module.exports = __webpack_require__(3).Object.getPrototypeOf;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(42);
var $getPrototypeOf = __webpack_require__(62);

__webpack_require__(58)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(128), __esModule: true };

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(129);
module.exports = __webpack_require__(3).Object.setPrototypeOf;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(17);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(130).set });


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(20);
var anObject = __webpack_require__(19);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(54)(Function.call, __webpack_require__(66).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    window.propagating = factory();
  }
}(function () {
  var _firstTarget = null; // singleton, will contain the target element where the touch event started

  /**
   * Extend an Hammer.js instance with event propagation.
   *
   * Features:
   * - Events emitted by hammer will propagate in order from child to parent
   *   elements.
   * - Events are extended with a function `event.stopPropagation()` to stop
   *   propagation to parent elements.
   * - An option `preventDefault` to stop all default browser behavior.
   *
   * Usage:
   *   var hammer = propagatingHammer(new Hammer(element));
   *   var hammer = propagatingHammer(new Hammer(element), {preventDefault: true});
   *
   * @param {Hammer.Manager} hammer   An hammer instance.
   * @param {Object} [options]        Available options:
   *                                  - `preventDefault: true | false | 'mouse' | 'touch' | 'pen'`.
   *                                    Enforce preventing the default browser behavior.
   *                                    Cannot be set to `false`.
   * @return {Hammer.Manager} Returns the same hammer instance with extended
   *                          functionality
   */
  return function propagating(hammer, options) {
    var _options = options || {
      preventDefault: false
    };

    if (hammer.Manager) {
      // This looks like the Hammer constructor.
      // Overload the constructors with our own.
      var Hammer = hammer;

      var PropagatingHammer = function(element, options) {
        var o = Object.create(_options);
        if (options) Hammer.assign(o, options);
        return propagating(new Hammer(element, o), o);
      };
      Hammer.assign(PropagatingHammer, Hammer);

      PropagatingHammer.Manager = function (element, options) {
        var o = Object.create(_options);
        if (options) Hammer.assign(o, options);
        return propagating(new Hammer.Manager(element, o), o);
      };

      return PropagatingHammer;
    }

    // create a wrapper object which will override the functions
    // `on`, `off`, `destroy`, and `emit` of the hammer instance
    var wrapper = Object.create(hammer);

    // attach to DOM element
    var element = hammer.element;

    if(!element.hammer) element.hammer = [];
    element.hammer.push(wrapper);

    // register an event to catch the start of a gesture and store the
    // target in a singleton
    hammer.on('hammer.input', function (event) {
      if (_options.preventDefault === true || (_options.preventDefault === event.pointerType)) {
        event.preventDefault();
      }
      if (event.isFirst) {
        _firstTarget = event.target;
      }
    });

    /** @type {Object.<String, Array.<function>>} */
    wrapper._handlers = {};

    /**
     * Register a handler for one or multiple events
     * @param {String} events    A space separated string with events
     * @param {function} handler A callback function, called as handler(event)
     * @returns {Hammer.Manager} Returns the hammer instance
     */
    wrapper.on = function (events, handler) {
      // register the handler
      split(events).forEach(function (event) {
        var _handlers = wrapper._handlers[event];
        if (!_handlers) {
          wrapper._handlers[event] = _handlers = [];

          // register the static, propagated handler
          hammer.on(event, propagatedHandler);
        }
        _handlers.push(handler);
      });

      return wrapper;
    };

    /**
     * Unregister a handler for one or multiple events
     * @param {String} events      A space separated string with events
     * @param {function} [handler] Optional. The registered handler. If not
     *                             provided, all handlers for given events
     *                             are removed.
     * @returns {Hammer.Manager}   Returns the hammer instance
     */
    wrapper.off = function (events, handler) {
      // unregister the handler
      split(events).forEach(function (event) {
        var _handlers = wrapper._handlers[event];
        if (_handlers) {
          _handlers = handler ? _handlers.filter(function (h) {
            return h !== handler;
          }) : [];

          if (_handlers.length > 0) {
            wrapper._handlers[event] = _handlers;
          }
          else {
            // remove static, propagated handler
            hammer.off(event, propagatedHandler);
            delete wrapper._handlers[event];
          }
        }
      });

      return wrapper;
    };

    /**
     * Emit to the event listeners
     * @param {string} eventType
     * @param {Event} event
     */
    wrapper.emit = function(eventType, event) {
      _firstTarget = event.target;
      hammer.emit(eventType, event);
    };

    wrapper.destroy = function () {
      // Detach from DOM element
      var hammers = hammer.element.hammer;
      var idx = hammers.indexOf(wrapper);
      if(idx !== -1) hammers.splice(idx,1);
      if(!hammers.length) delete hammer.element.hammer;

      // clear all handlers
      wrapper._handlers = {};

      // call original hammer destroy
      hammer.destroy();
    };

    // split a string with space separated words
    function split(events) {
      return events.match(/[^ ]+/g);
    }

    /**
     * A static event handler, applying event propagation.
     * @param {Object} event
     */
    function propagatedHandler(event) {
      // let only a single hammer instance handle this event
      if (event.type !== 'hammer.input') {
        // it is possible that the same srcEvent is used with multiple hammer events,
        // we keep track on which events are handled in an object _handled
        if (!event.srcEvent._handled) {
          event.srcEvent._handled = {};
        }

        if (event.srcEvent._handled[event.type]) {
          return;
        }
        else {
          event.srcEvent._handled[event.type] = true;
        }
      }

      // attach a stopPropagation function to the event
      var stopped = false;
      event.stopPropagation = function () {
        stopped = true;
      };

      //wrap the srcEvent's stopPropagation to also stop hammer propagation:
      var srcStop = event.srcEvent.stopPropagation.bind(event.srcEvent);
      if(typeof srcStop == "function") {
        event.srcEvent.stopPropagation = function(){
          srcStop();
          event.stopPropagation();
        }
      }

      // attach firstTarget property to the event
      event.firstTarget = _firstTarget;

      // propagate over all elements (until stopped)
      var elem = _firstTarget;
      while (elem && !stopped) {
        var elemHammer = elem.hammer;
        if(elemHammer){
          var _handlers;
          for(var k = 0; k < elemHammer.length; k++){
            _handlers = elemHammer[k]._handlers[event.type];
            if(_handlers) for (var i = 0; i < _handlers.length && !stopped; i++) {
              _handlers[i](event);
            }
          }
        }
        elem = elem.parentNode;
      }
    }

    return wrapper;
  };
}));


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keycharm = __webpack_require__(73);
var Emitter = __webpack_require__(71);
var Hammer = __webpack_require__(16);
var util = __webpack_require__(2);

/**
 * Turn an element into an clickToUse element.
 * When not active, the element has a transparent overlay. When the overlay is
 * clicked, the mode is changed to active.
 * When active, the element is displayed with a blue border around it, and
 * the interactive contents of the element can be used. When clicked outside
 * the element, the elements mode is changed to inactive.
 * @param {Element} container
 * @constructor Activator
 */
function Activator(container) {
  this.active = false;

  this.dom = {
    container: container
  };

  this.dom.overlay = document.createElement('div');
  this.dom.overlay.className = 'timeline-overlay';

  this.dom.container.appendChild(this.dom.overlay);

  this.hammer = Hammer(this.dom.overlay);
  this.hammer.on('tap', this._onTapOverlay.bind(this));

  // block all touch events (except tap)
  var me = this;
  var events = ['tap', 'doubletap', 'press', 'pinch', 'pan', 'panstart', 'panmove', 'panend'];
  events.forEach(function (event) {
    me.hammer.on(event, function (event) {
      event.stopPropagation();
    });
  });

  // attach a click event to the window, in order to deactivate when clicking outside the timeline
  if (document && document.body) {
    this.onClick = function (event) {
      if (!_hasParent(event.target, container)) {
        me.deactivate();
      }
    };
    document.body.addEventListener('click', this.onClick);
  }

  if (this.keycharm !== undefined) {
    this.keycharm.destroy();
  }
  this.keycharm = keycharm();

  // keycharm listener only bounded when active)
  this.escListener = this.deactivate.bind(this);
}

// turn into an event emitter
Emitter(Activator.prototype);

// The currently active activator
Activator.current = null;

/**
 * Destroy the activator. Cleans up all created DOM and event listeners
 */
Activator.prototype.destroy = function () {
  this.deactivate();

  // remove dom
  this.dom.overlay.parentNode.removeChild(this.dom.overlay);

  // remove global event listener
  if (this.onClick) {
    document.body.removeEventListener('click', this.onClick);
  }
  // remove keycharm
  if (this.keycharm !== undefined) {
    this.keycharm.destroy();
  }
  this.keycharm = null;
  // cleanup hammer instances
  this.hammer.destroy();
  this.hammer = null;
  // FIXME: cleaning up hammer instances doesn't work (Timeline not removed from memory)
};

/**
 * Activate the element
 * Overlay is hidden, element is decorated with a blue shadow border
 */
Activator.prototype.activate = function () {
  // we allow only one active activator at a time
  if (Activator.current) {
    Activator.current.deactivate();
  }
  Activator.current = this;

  this.active = true;
  this.dom.overlay.style.display = 'none';
  util.addClassName(this.dom.container, 'timeline-active');

  this.emit('change');
  this.emit('activate');

  // ugly hack: bind ESC after emitting the events, as the Network rebinds all
  // keyboard events on a 'change' event
  this.keycharm.bind('esc', this.escListener);
};

/**
 * Deactivate the element
 * Overlay is displayed on top of the element
 */
Activator.prototype.deactivate = function () {
  this.active = false;
  this.dom.overlay.style.display = '';
  util.removeClassName(this.dom.container, 'timeline-active');
  this.keycharm.unbind('esc', this.escListener);

  this.emit('change');
  this.emit('deactivate');
};

/**
 * Handle a tap event: activate the container
 * @param {Event}  event   The event
 * @private
 */
Activator.prototype._onTapOverlay = function (event) {
  // activate the container
  this.activate();
  event.stopPropagation();
};

/**
 * Test whether the element has the requested parent element somewhere in
 * its chain of parent nodes.
 * @param {HTMLElement} element
 * @param {HTMLElement} parent
 * @returns {boolean} Returns true when the parent is found somewhere in the
 *                    chain of parent nodes.
 * @private
 */
function _hasParent(element, parent) {
  while (element) {
    if (element === parent) {
      return true;
    }
    element = element.parentNode;
  }
  return false;
}

module.exports = Activator;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Popup is a class to create a popup window with some text
 */
var Popup = function () {
  /**
   * @param {Element} container       The container object.
   * @param {string}  overflowMethod  How the popup should act to overflowing ('flip' or 'cap')
   */
  function Popup(container, overflowMethod) {
    (0, _classCallCheck3['default'])(this, Popup);

    this.container = container;
    this.overflowMethod = overflowMethod || 'cap';

    this.x = 0;
    this.y = 0;
    this.padding = 5;
    this.hidden = false;

    // create the frame
    this.frame = document.createElement('div');
    this.frame.className = 'timeline-tooltip';
    this.container.appendChild(this.frame);
  }

  /**
   * @param {number} x   Horizontal position of the popup window
   * @param {number} y   Vertical position of the popup window
   */


  (0, _createClass3['default'])(Popup, [{
    key: 'setPosition',
    value: function setPosition(x, y) {
      this.x = parseInt(x);
      this.y = parseInt(y);
    }

    /**
     * Set the content for the popup window. This can be HTML code or text.
     * @param {string | Element} content
     */

  }, {
    key: 'setText',
    value: function setText(content) {
      if (content instanceof Element) {
        this.frame.innerHTML = '';
        this.frame.appendChild(content);
      } else {
        this.frame.innerHTML = content; // string containing text or HTML
      }
    }

    /**
     * Show the popup window
     * @param {boolean} [doShow]    Show or hide the window
     */

  }, {
    key: 'show',
    value: function show(doShow) {
      if (doShow === undefined) {
        doShow = true;
      }

      if (doShow === true) {
        var height = this.frame.clientHeight;
        var width = this.frame.clientWidth;
        var maxHeight = this.frame.parentNode.clientHeight;
        var maxWidth = this.frame.parentNode.clientWidth;

        var left = 0,
            top = 0;

        if (this.overflowMethod == 'flip') {
          var isLeft = false,
              isTop = true; // Where around the position it's located

          if (this.y - height < this.padding) {
            isTop = false;
          }

          if (this.x + width > maxWidth - this.padding) {
            isLeft = true;
          }

          if (isLeft) {
            left = this.x - width;
          } else {
            left = this.x;
          }

          if (isTop) {
            top = this.y - height;
          } else {
            top = this.y;
          }
        } else {
          top = this.y - height;
          if (top + height + this.padding > maxHeight) {
            top = maxHeight - height - this.padding;
          }
          if (top < this.padding) {
            top = this.padding;
          }

          left = this.x;
          if (left + width + this.padding > maxWidth) {
            left = maxWidth - width - this.padding;
          }
          if (left < this.padding) {
            left = this.padding;
          }
        }

        this.frame.style.left = left + "px";
        this.frame.style.top = top + "px";
        this.frame.style.visibility = "visible";
        this.hidden = false;
      } else {
        this.hide();
      }
    }

    /**
     * Hide the popup window
     */

  }, {
    key: 'hide',
    value: function hide() {
      this.hidden = true;
      this.frame.style.left = "0";
      this.frame.style.top = "0";
      this.frame.style.visibility = "hidden";
    }

    /**
     * Remove the popup window
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.frame.parentNode.removeChild(this.frame); // Remove element from DOM
    }
  }]);
  return Popup;
}();

exports['default'] = Popup;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printStyle = undefined;

var _stringify = __webpack_require__(22);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __webpack_require__(2);

var errorFound = false;
var allOptions = void 0;
var printStyle = 'background: #FFeeee; color: #dd0000';
/**
 *  Used to validate options.
 */

var Validator = function () {
  /**
   * @ignore
   */
  function Validator() {
    (0, _classCallCheck3['default'])(this, Validator);
  }

  /**
   * Main function to be called
   * @param {Object} options
   * @param {Object} referenceOptions
   * @param {Object} subObject
   * @returns {boolean}
   * @static
   */


  (0, _createClass3['default'])(Validator, null, [{
    key: 'validate',
    value: function validate(options, referenceOptions, subObject) {
      errorFound = false;
      allOptions = referenceOptions;
      var usedOptions = referenceOptions;
      if (subObject !== undefined) {
        usedOptions = referenceOptions[subObject];
      }
      Validator.parse(options, usedOptions, []);
      return errorFound;
    }

    /**
     * Will traverse an object recursively and check every value
     * @param {Object} options
     * @param {Object} referenceOptions
     * @param {array} path    | where to look for the actual option
     * @static
     */

  }, {
    key: 'parse',
    value: function parse(options, referenceOptions, path) {
      for (var option in options) {
        if (options.hasOwnProperty(option)) {
          Validator.check(option, options, referenceOptions, path);
        }
      }
    }

    /**
     * Check every value. If the value is an object, call the parse function on that object.
     * @param {string} option
     * @param {Object} options
     * @param {Object} referenceOptions
     * @param {array} path    | where to look for the actual option
     * @static
     */

  }, {
    key: 'check',
    value: function check(option, options, referenceOptions, path) {
      if (referenceOptions[option] === undefined && referenceOptions.__any__ === undefined) {
        Validator.getSuggestion(option, referenceOptions, path);
        return;
      }

      var referenceOption = option;
      var is_object = true;

      if (referenceOptions[option] === undefined && referenceOptions.__any__ !== undefined) {
        // NOTE: This only triggers if the __any__ is in the top level of the options object.
        //       THAT'S A REALLY BAD PLACE TO ALLOW IT!!!!
        // TODO: Examine if needed, remove if possible

        // __any__ is a wildcard. Any value is accepted and will be further analysed by reference.
        referenceOption = '__any__';

        // if the any-subgroup is not a predefined object in the configurator,
        // we do not look deeper into the object.
        is_object = Validator.getType(options[option]) === 'object';
      } else {
        // Since all options in the reference are objects, we can check whether 
        // they are supposed to be the object to look for the __type__ field.
        // if this is an object, we check if the correct type has been supplied to account for shorthand options.
      }

      var refOptionObj = referenceOptions[referenceOption];
      if (is_object && refOptionObj.__type__ !== undefined) {
        refOptionObj = refOptionObj.__type__;
      }

      Validator.checkFields(option, options, referenceOptions, referenceOption, refOptionObj, path);
    }

    /**
     *
     * @param {string}  option           | the option property
     * @param {Object}  options          | The supplied options object
     * @param {Object}  referenceOptions | The reference options containing all options and their allowed formats
     * @param {string}  referenceOption  | Usually this is the same as option, except when handling an __any__ tag.
     * @param {string}  refOptionObj     | This is the type object from the reference options
     * @param {Array}   path             | where in the object is the option
     * @static
     */

  }, {
    key: 'checkFields',
    value: function checkFields(option, options, referenceOptions, referenceOption, refOptionObj, path) {
      var log = function log(message) {
        console.log('%c' + message + Validator.printLocation(path, option), printStyle);
      };

      var optionType = Validator.getType(options[option]);
      var refOptionType = refOptionObj[optionType];

      if (refOptionType !== undefined) {
        // if the type is correct, we check if it is supposed to be one of a few select values
        if (Validator.getType(refOptionType) === 'array' && refOptionType.indexOf(options[option]) === -1) {
          log('Invalid option detected in "' + option + '".' + ' Allowed values are:' + Validator.print(refOptionType) + ' not "' + options[option] + '". ');
          errorFound = true;
        } else if (optionType === 'object' && referenceOption !== "__any__") {
          path = util.copyAndExtendArray(path, option);
          Validator.parse(options[option], referenceOptions[referenceOption], path);
        }
      } else if (refOptionObj['any'] === undefined) {
        // type of the field is incorrect and the field cannot be any
        log('Invalid type received for "' + option + '". Expected: ' + Validator.print((0, _keys2['default'])(refOptionObj)) + '. Received [' + optionType + '] "' + options[option] + '"');
        errorFound = true;
      }
    }

    /**
     *
     * @param {Object|boolean|number|string|Array.<number>|Date|Node|Moment|undefined|null} object
     * @returns {string}
     * @static
     */

  }, {
    key: 'getType',
    value: function getType(object) {
      var type = typeof object === 'undefined' ? 'undefined' : (0, _typeof3['default'])(object);

      if (type === 'object') {
        if (object === null) {
          return 'null';
        }
        if (object instanceof Boolean) {
          return 'boolean';
        }
        if (object instanceof Number) {
          return 'number';
        }
        if (object instanceof String) {
          return 'string';
        }
        if (Array.isArray(object)) {
          return 'array';
        }
        if (object instanceof Date) {
          return 'date';
        }
        if (object.nodeType !== undefined) {
          return 'dom';
        }
        if (object._isAMomentObject === true) {
          return 'moment';
        }
        return 'object';
      } else if (type === 'number') {
        return 'number';
      } else if (type === 'boolean') {
        return 'boolean';
      } else if (type === 'string') {
        return 'string';
      } else if (type === undefined) {
        return 'undefined';
      }
      return type;
    }

    /**
     * @param {string} option
     * @param {Object} options
     * @param {Array.<string>} path
     * @static
     */

  }, {
    key: 'getSuggestion',
    value: function getSuggestion(option, options, path) {
      var localSearch = Validator.findInOptions(option, options, path, false);
      var globalSearch = Validator.findInOptions(option, allOptions, [], true);

      var localSearchThreshold = 8;
      var globalSearchThreshold = 4;

      var msg = void 0;
      if (localSearch.indexMatch !== undefined) {
        msg = ' in ' + Validator.printLocation(localSearch.path, option, '') + 'Perhaps it was incomplete? Did you mean: "' + localSearch.indexMatch + '"?\n\n';
      } else if (globalSearch.distance <= globalSearchThreshold && localSearch.distance > globalSearch.distance) {
        msg = ' in ' + Validator.printLocation(localSearch.path, option, '') + 'Perhaps it was misplaced? Matching option found at: ' + Validator.printLocation(globalSearch.path, globalSearch.closestMatch, '');
      } else if (localSearch.distance <= localSearchThreshold) {
        msg = '. Did you mean "' + localSearch.closestMatch + '"?' + Validator.printLocation(localSearch.path, option);
      } else {
        msg = '. Did you mean one of these: ' + Validator.print((0, _keys2['default'])(options)) + Validator.printLocation(path, option);
      }

      console.log('%cUnknown option detected: "' + option + '"' + msg, printStyle);
      errorFound = true;
    }

    /**
     * traverse the options in search for a match.
     * @param {string} option
     * @param {Object} options
     * @param {Array} path    | where to look for the actual option
     * @param {boolean} [recursive=false]
     * @returns {{closestMatch: string, path: Array, distance: number}}
     * @static
     */

  }, {
    key: 'findInOptions',
    value: function findInOptions(option, options, path) {
      var recursive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var min = 1e9;
      var closestMatch = '';
      var closestMatchPath = [];
      var lowerCaseOption = option.toLowerCase();
      var indexMatch = undefined;
      for (var op in options) {
        // eslint-disable-line guard-for-in
        var distance = void 0;
        if (options[op].__type__ !== undefined && recursive === true) {
          var result = Validator.findInOptions(option, options[op], util.copyAndExtendArray(path, op));
          if (min > result.distance) {
            closestMatch = result.closestMatch;
            closestMatchPath = result.path;
            min = result.distance;
            indexMatch = result.indexMatch;
          }
        } else {
          if (op.toLowerCase().indexOf(lowerCaseOption) !== -1) {
            indexMatch = op;
          }
          distance = Validator.levenshteinDistance(option, op);
          if (min > distance) {
            closestMatch = op;
            closestMatchPath = util.copyArray(path);
            min = distance;
          }
        }
      }
      return { closestMatch: closestMatch, path: closestMatchPath, distance: min, indexMatch: indexMatch };
    }

    /**
     * @param {Array.<string>} path
     * @param {Object} option
     * @param {string} prefix
     * @returns {String}
     * @static
     */

  }, {
    key: 'printLocation',
    value: function printLocation(path, option) {
      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Problem value found at: \n';

      var str = '\n\n' + prefix + 'options = {\n';
      for (var i = 0; i < path.length; i++) {
        for (var j = 0; j < i + 1; j++) {
          str += '  ';
        }
        str += path[i] + ': {\n';
      }
      for (var _j = 0; _j < path.length + 1; _j++) {
        str += '  ';
      }
      str += option + '\n';
      for (var _i = 0; _i < path.length + 1; _i++) {
        for (var _j2 = 0; _j2 < path.length - _i; _j2++) {
          str += '  ';
        }
        str += '}\n';
      }
      return str + '\n\n';
    }

    /**
     * @param {Object} options
     * @returns {String}
     * @static
     */

  }, {
    key: 'print',
    value: function print(options) {
      return (0, _stringify2['default'])(options).replace(/(\")|(\[)|(\])|(,"__type__")/g, "").replace(/(\,)/g, ', ');
    }

    /**
     *  Compute the edit distance between the two given strings
     * http://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript
     *
     * Copyright (c) 2011 Andrei Mackenzie
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     *
     * @param {string} a
     * @param {string} b
     * @returns {Array.<Array.<number>>}}
     * @static
     */

  }, {
    key: 'levenshteinDistance',
    value: function levenshteinDistance(a, b) {
      if (a.length === 0) return b.length;
      if (b.length === 0) return a.length;

      var matrix = [];

      // increment along the first column of each row
      var i;
      for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
      }

      // increment each column in the first row
      var j;
      for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
      }

      // Fill in the rest of the matrix
      for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
          if (b.charAt(i - 1) == a.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
            Math.min(matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1)); // deletion
          }
        }
      }

      return matrix[b.length][a.length];
    }
  }]);
  return Validator;
}();

exports['default'] = Validator;
exports.printStyle = printStyle;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This object contains all possible options. It will check if the types are correct, if required if the option is one
 * of the allowed values.
 *
 * __any__ means that the name of the property does not matter.
 * __type__ is a required field for all objects and contains the allowed types of all objects
 */
var string = 'string';
var bool = 'boolean';
var number = 'number';
var array = 'array';
var date = 'date';
var object = 'object'; // should only be in a __type__ property
var dom = 'dom';
var moment = 'moment';
var any = 'any';

var allOptions = {
  configure: {
    enabled: { 'boolean': bool },
    filter: { 'boolean': bool, 'function': 'function' },
    container: { dom: dom },
    __type__: { object: object, 'boolean': bool, 'function': 'function' }
  },

  //globals :
  align: { string: string },
  alignCurrentTime: { string: string, 'undefined': 'undefined' },
  rtl: { 'boolean': bool, 'undefined': 'undefined' },
  rollingMode: {
    follow: { 'boolean': bool },
    offset: { number: number, 'undefined': 'undefined' },
    __type__: { object: object }
  },
  onTimeout: {
    timeoutMs: { number: number },
    callback: { 'function': 'function' },
    __type__: { object: object }
  },
  verticalScroll: { 'boolean': bool, 'undefined': 'undefined' },
  horizontalScroll: { 'boolean': bool, 'undefined': 'undefined' },
  autoResize: { 'boolean': bool },
  throttleRedraw: { number: number }, // TODO: DEPRICATED see https://github.com/almende/vis/issues/2511
  clickToUse: { 'boolean': bool },
  dataAttributes: { string: string, array: array },
  editable: {
    add: { 'boolean': bool, 'undefined': 'undefined' },
    remove: { 'boolean': bool, 'undefined': 'undefined' },
    updateGroup: { 'boolean': bool, 'undefined': 'undefined' },
    updateTime: { 'boolean': bool, 'undefined': 'undefined' },
    overrideItems: { 'boolean': bool, 'undefined': 'undefined' },
    __type__: { 'boolean': bool, object: object }
  },
  end: { number: number, date: date, string: string, moment: moment },
  format: {
    minorLabels: {
      millisecond: { string: string, 'undefined': 'undefined' },
      second: { string: string, 'undefined': 'undefined' },
      minute: { string: string, 'undefined': 'undefined' },
      hour: { string: string, 'undefined': 'undefined' },
      weekday: { string: string, 'undefined': 'undefined' },
      day: { string: string, 'undefined': 'undefined' },
      week: { string: string, 'undefined': 'undefined' },
      month: { string: string, 'undefined': 'undefined' },
      year: { string: string, 'undefined': 'undefined' },
      __type__: { object: object, 'function': 'function' }
    },
    majorLabels: {
      millisecond: { string: string, 'undefined': 'undefined' },
      second: { string: string, 'undefined': 'undefined' },
      minute: { string: string, 'undefined': 'undefined' },
      hour: { string: string, 'undefined': 'undefined' },
      weekday: { string: string, 'undefined': 'undefined' },
      day: { string: string, 'undefined': 'undefined' },
      week: { string: string, 'undefined': 'undefined' },
      month: { string: string, 'undefined': 'undefined' },
      year: { string: string, 'undefined': 'undefined' },
      __type__: { object: object, 'function': 'function' }
    },
    __type__: { object: object }
  },
  moment: { 'function': 'function' },
  groupHeightMode: { string: string },
  groupOrder: { string: string, 'function': 'function' },
  groupEditable: {
    add: { 'boolean': bool, 'undefined': 'undefined' },
    remove: { 'boolean': bool, 'undefined': 'undefined' },
    order: { 'boolean': bool, 'undefined': 'undefined' },
    __type__: { 'boolean': bool, object: object }
  },
  groupOrderSwap: { 'function': 'function' },
  height: { string: string, number: number },
  hiddenDates: {
    start: { date: date, number: number, string: string, moment: moment },
    end: { date: date, number: number, string: string, moment: moment },
    repeat: { string: string },
    __type__: { object: object, array: array }
  },
  itemsAlwaysDraggable: {
    item: { 'boolean': bool, 'undefined': 'undefined' },
    range: { 'boolean': bool, 'undefined': 'undefined' },
    __type__: { 'boolean': bool, object: object }
  },
  limitSize: { 'boolean': bool },
  locale: { string: string },
  locales: {
    __any__: { any: any },
    __type__: { object: object }
  },
  margin: {
    axis: { number: number },
    item: {
      horizontal: { number: number, 'undefined': 'undefined' },
      vertical: { number: number, 'undefined': 'undefined' },
      __type__: { object: object, number: number }
    },
    __type__: { object: object, number: number }
  },
  max: { date: date, number: number, string: string, moment: moment },
  maxHeight: { number: number, string: string },
  maxMinorChars: { number: number },
  min: { date: date, number: number, string: string, moment: moment },
  minHeight: { number: number, string: string },
  moveable: { 'boolean': bool },
  multiselect: { 'boolean': bool },
  multiselectPerGroup: { 'boolean': bool },
  onAdd: { 'function': 'function' },
  onDropObjectOnItem: { 'function': 'function' },
  onUpdate: { 'function': 'function' },
  onMove: { 'function': 'function' },
  onMoving: { 'function': 'function' },
  onRemove: { 'function': 'function' },
  onAddGroup: { 'function': 'function' },
  onMoveGroup: { 'function': 'function' },
  onRemoveGroup: { 'function': 'function' },
  onInitialDrawComplete: { 'function': 'function' },
  order: { 'function': 'function' },
  orientation: {
    axis: { string: string, 'undefined': 'undefined' },
    item: { string: string, 'undefined': 'undefined' },
    __type__: { string: string, object: object }
  },
  selectable: { 'boolean': bool },
  showCurrentTime: { 'boolean': bool },
  showMajorLabels: { 'boolean': bool },
  showMinorLabels: { 'boolean': bool },
  stack: { 'boolean': bool },
  stackSubgroups: { 'boolean': bool },
  snap: { 'function': 'function', 'null': 'null' },
  start: { date: date, number: number, string: string, moment: moment },
  template: { 'function': 'function' },
  loadingScreenTemplate: { 'function': 'function' },
  groupTemplate: { 'function': 'function' },
  visibleFrameTemplate: { string: string, 'function': 'function' },
  showTooltips: { 'boolean': bool },
  tooltip: {
    followMouse: { 'boolean': bool },
    overflowMethod: { 'string': ['cap', 'flip'] },
    __type__: { object: object }
  },
  tooltipOnItemUpdateTime: {
    template: { 'function': 'function' },
    __type__: { 'boolean': bool, object: object }
  },
  timeAxis: {
    scale: { string: string, 'undefined': 'undefined' },
    step: { number: number, 'undefined': 'undefined' },
    __type__: { object: object }
  },
  type: { string: string },
  width: { string: string, number: number },
  zoomable: { 'boolean': bool },
  zoomKey: { string: ['ctrlKey', 'altKey', 'metaKey', ''] },
  zoomMax: { number: number },
  zoomMin: { number: number },

  __type__: { object: object }
};

var configureOptions = {
  global: {
    align: ['center', 'left', 'right'],
    alignCurrentTime: ['none', 'year', 'month', 'quarter', 'week', 'isoWeek', 'day', 'date', 'hour', 'minute', 'second'],
    direction: false,
    autoResize: true,
    clickToUse: false,
    // dataAttributes: ['all'], // FIXME: can be 'all' or string[]
    editable: {
      add: false,
      remove: false,
      updateGroup: false,
      updateTime: false
    },
    end: '',
    format: {
      minorLabels: {
        millisecond: 'SSS',
        second: 's',
        minute: 'HH:mm',
        hour: 'HH:mm',
        weekday: 'ddd D',
        day: 'D',
        week: 'w',
        month: 'MMM',
        year: 'YYYY'
      },
      majorLabels: {
        millisecond: 'HH:mm:ss',
        second: 'D MMMM HH:mm',
        minute: 'ddd D MMMM',
        hour: 'ddd D MMMM',
        weekday: 'MMMM YYYY',
        day: 'MMMM YYYY',
        week: 'MMMM YYYY',
        month: 'YYYY',
        year: ''
      }
    },
    groupHeightMode: ['auto', 'fixed'],
    //groupOrder: {string, 'function': 'function'},
    groupsDraggable: false,
    height: '',
    //hiddenDates: {object, array},
    locale: '',
    margin: {
      axis: [20, 0, 100, 1],
      item: {
        horizontal: [10, 0, 100, 1],
        vertical: [10, 0, 100, 1]
      }
    },
    max: '',
    maxHeight: '',
    maxMinorChars: [7, 0, 20, 1],
    min: '',
    minHeight: '',
    moveable: false,
    multiselect: false,
    multiselectPerGroup: false,
    //onAdd: {'function': 'function'},
    //onUpdate: {'function': 'function'},
    //onMove: {'function': 'function'},
    //onMoving: {'function': 'function'},
    //onRename: {'function': 'function'},
    //order: {'function': 'function'},
    orientation: {
      axis: ['both', 'bottom', 'top'],
      item: ['bottom', 'top']
    },
    selectable: true,
    showCurrentTime: false,
    showMajorLabels: true,
    showMinorLabels: true,
    stack: true,
    stackSubgroups: true,
    //snap: {'function': 'function', nada},
    start: '',
    //template: {'function': 'function'},
    //timeAxis: {
    //  scale: ['millisecond', 'second', 'minute', 'hour', 'weekday', 'day', 'week', 'month', 'year'],
    //  step: [1, 1, 10, 1]
    //},
    showTooltips: true,
    tooltip: {
      followMouse: false,
      overflowMethod: 'flip'
    },
    tooltipOnItemUpdateTime: false,
    type: ['box', 'point', 'range', 'background'],
    width: '100%',
    zoomable: true,
    zoomKey: ['ctrlKey', 'altKey', 'metaKey', ''],
    zoomMax: [315360000000000, 10, 315360000000000, 1],
    zoomMin: [10, 10, 315360000000000, 1]
  }
};

exports.allOptions = allOptions;
exports.configureOptions = configureOptions;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(22);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __webpack_require__(2);

var ColorPicker = __webpack_require__(138)['default'];

/**
 * The way this works is for all properties of this.possible options, you can supply the property name in any form to list the options.
 * Boolean options are recognised as Boolean
 * Number options should be written as array: [default value, min value, max value, stepsize]
 * Colors should be written as array: ['color', '#ffffff']
 * Strings with should be written as array: [option1, option2, option3, ..]
 *
 * The options are matched with their counterparts in each of the modules and the values used in the configuration are
 */

var Configurator = function () {
  /**
   * @param {Object} parentModule        | the location where parentModule.setOptions() can be called
   * @param {Object} defaultContainer    | the default container of the module
   * @param {Object} configureOptions    | the fully configured and predefined options set found in allOptions.js
   * @param {number} pixelRatio          | canvas pixel ratio
   */
  function Configurator(parentModule, defaultContainer, configureOptions) {
    var pixelRatio = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    (0, _classCallCheck3['default'])(this, Configurator);

    this.parent = parentModule;
    this.changedOptions = [];
    this.container = defaultContainer;
    this.allowCreation = false;

    this.options = {};
    this.initialized = false;
    this.popupCounter = 0;
    this.defaultOptions = {
      enabled: false,
      filter: true,
      container: undefined,
      showButton: true
    };
    util.extend(this.options, this.defaultOptions);

    this.configureOptions = configureOptions;
    this.moduleOptions = {};
    this.domElements = [];
    this.popupDiv = {};
    this.popupLimit = 5;
    this.popupHistory = {};
    this.colorPicker = new ColorPicker(pixelRatio);
    this.wrapper = undefined;
  }

  /**
   * refresh all options.
   * Because all modules parse their options by themselves, we just use their options. We copy them here.
   *
   * @param {Object} options
   */


  (0, _createClass3['default'])(Configurator, [{
    key: 'setOptions',
    value: function setOptions(options) {
      if (options !== undefined) {
        // reset the popup history because the indices may have been changed.
        this.popupHistory = {};
        this._removePopup();

        var enabled = true;
        if (typeof options === 'string') {
          this.options.filter = options;
        } else if (options instanceof Array) {
          this.options.filter = options.join();
        } else if ((typeof options === 'undefined' ? 'undefined' : (0, _typeof3['default'])(options)) === 'object') {
          if (options == null) {
            throw new TypeError('options cannot be null');
          }
          if (options.container !== undefined) {
            this.options.container = options.container;
          }
          if (options.filter !== undefined) {
            this.options.filter = options.filter;
          }
          if (options.showButton !== undefined) {
            this.options.showButton = options.showButton;
          }
          if (options.enabled !== undefined) {
            enabled = options.enabled;
          }
        } else if (typeof options === 'boolean') {
          this.options.filter = true;
          enabled = options;
        } else if (typeof options === 'function') {
          this.options.filter = options;
          enabled = true;
        }
        if (this.options.filter === false) {
          enabled = false;
        }

        this.options.enabled = enabled;
      }
      this._clean();
    }

    /**
     *
     * @param {Object} moduleOptions
     */

  }, {
    key: 'setModuleOptions',
    value: function setModuleOptions(moduleOptions) {
      this.moduleOptions = moduleOptions;
      if (this.options.enabled === true) {
        this._clean();
        if (this.options.container !== undefined) {
          this.container = this.options.container;
        }
        this._create();
      }
    }

    /**
     * Create all DOM elements
     * @private
     */

  }, {
    key: '_create',
    value: function _create() {
      this._clean();
      this.changedOptions = [];

      var filter = this.options.filter;
      var counter = 0;
      var show = false;
      for (var option in this.configureOptions) {
        if (this.configureOptions.hasOwnProperty(option)) {
          this.allowCreation = false;
          show = false;
          if (typeof filter === 'function') {
            show = filter(option, []);
            show = show || this._handleObject(this.configureOptions[option], [option], true);
          } else if (filter === true || filter.indexOf(option) !== -1) {
            show = true;
          }

          if (show !== false) {
            this.allowCreation = true;

            // linebreak between categories
            if (counter > 0) {
              this._makeItem([]);
            }
            // a header for the category
            this._makeHeader(option);

            // get the sub options
            this._handleObject(this.configureOptions[option], [option]);
          }
          counter++;
        }
      }
      this._makeButton();
      this._push();
      //~ this.colorPicker.insertTo(this.container);
    }

    /**
     * draw all DOM elements on the screen
     * @private
     */

  }, {
    key: '_push',
    value: function _push() {
      this.wrapper = document.createElement('div');
      this.wrapper.className = 'timeline-configuration-wrapper';
      this.container.appendChild(this.wrapper);
      for (var i = 0; i < this.domElements.length; i++) {
        this.wrapper.appendChild(this.domElements[i]);
      }

      this._showPopupIfNeeded();
    }

    /**
     * delete all DOM elements
     * @private
     */

  }, {
    key: '_clean',
    value: function _clean() {
      for (var i = 0; i < this.domElements.length; i++) {
        this.wrapper.removeChild(this.domElements[i]);
      }

      if (this.wrapper !== undefined) {
        this.container.removeChild(this.wrapper);
        this.wrapper = undefined;
      }
      this.domElements = [];

      this._removePopup();
    }

    /**
     * get the value from the actualOptions if it exists
     * @param {array} path    | where to look for the actual option
     * @returns {*}
     * @private
     */

  }, {
    key: '_getValue',
    value: function _getValue(path) {
      var base = this.moduleOptions;
      for (var i = 0; i < path.length; i++) {
        if (base[path[i]] !== undefined) {
          base = base[path[i]];
        } else {
          base = undefined;
          break;
        }
      }
      return base;
    }

    /**
     * all option elements are wrapped in an item
     * @param {Array} path    | where to look for the actual option
     * @param {Array.<Element>} domElements
     * @returns {number}
     * @private
     */

  }, {
    key: '_makeItem',
    value: function _makeItem(path) {
      if (this.allowCreation === true) {
        var item = document.createElement('div');
        item.className = 'timeline-configuration timeline-config-item timeline-config-s' + path.length;

        for (var _len = arguments.length, domElements = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          domElements[_key - 1] = arguments[_key];
        }

        domElements.forEach(function (element) {
          item.appendChild(element);
        });
        this.domElements.push(item);
        return this.domElements.length;
      }
      return 0;
    }

    /**
     * header for major subjects
     * @param {string} name
     * @private
     */

  }, {
    key: '_makeHeader',
    value: function _makeHeader(name) {
      var div = document.createElement('div');
      div.className = 'timeline-configuration timeline-config-header';
      div.innerHTML = name;
      this._makeItem([], div);
    }

    /**
     * make a label, if it is an object label, it gets different styling.
     * @param {string} name
     * @param {array} path    | where to look for the actual option
     * @param {string} objectLabel
     * @returns {HTMLElement}
     * @private
     */

  }, {
    key: '_makeLabel',
    value: function _makeLabel(name, path) {
      var objectLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var div = document.createElement('div');
      div.className = 'timeline-configuration timeline-config-label timeline-config-s' + path.length;
      if (objectLabel === true) {
        div.innerHTML = '<i><b>' + name + ':</b></i>';
      } else {
        div.innerHTML = name + ':';
      }
      return div;
    }

    /**
     * make a dropdown list for multiple possible string optoins
     * @param {Array.<number>} arr
     * @param {number} value
     * @param {array} path    | where to look for the actual option
     * @private
     */

  }, {
    key: '_makeDropdown',
    value: function _makeDropdown(arr, value, path) {
      var select = document.createElement('select');
      select.className = 'timeline-configuration timeline-config-select';
      var selectedValue = 0;
      if (value !== undefined) {
        if (arr.indexOf(value) !== -1) {
          selectedValue = arr.indexOf(value);
        }
      }

      for (var i = 0; i < arr.length; i++) {
        var option = document.createElement('option');
        option.value = arr[i];
        if (i === selectedValue) {
          option.selected = 'selected';
        }
        option.innerHTML = arr[i];
        select.appendChild(option);
      }

      var me = this;
      select.onchange = function () {
        me._update(this.value, path);
      };

      var label = this._makeLabel(path[path.length - 1], path);
      this._makeItem(path, label, select);
    }

    /**
     * make a range object for numeric options
     * @param {Array.<number>} arr
     * @param {number} value
     * @param {array} path    | where to look for the actual option
     * @private
     */

  }, {
    key: '_makeRange',
    value: function _makeRange(arr, value, path) {
      var defaultValue = arr[0];
      var min = arr[1];
      var max = arr[2];
      var step = arr[3];
      var range = document.createElement('input');
      range.className = 'timeline-configuration timeline-config-range';
      try {
        range.type = 'range'; // not supported on IE9
        range.min = min;
        range.max = max;
      }
      // TODO: Add some error handling and remove this lint exception
      catch (err) {} // eslint-disable-line no-empty
      range.step = step;

      // set up the popup settings in case they are needed.
      var popupString = '';
      var popupValue = 0;

      if (value !== undefined) {
        var factor = 1.20;
        if (value < 0 && value * factor < min) {
          range.min = Math.ceil(value * factor);
          popupValue = range.min;
          popupString = 'range increased';
        } else if (value / factor < min) {
          range.min = Math.ceil(value / factor);
          popupValue = range.min;
          popupString = 'range increased';
        }
        if (value * factor > max && max !== 1) {
          range.max = Math.ceil(value * factor);
          popupValue = range.max;
          popupString = 'range increased';
        }
        range.value = value;
      } else {
        range.value = defaultValue;
      }

      var input = document.createElement('input');
      input.className = 'timeline-configuration timeline-config-rangeinput';
      input.value = range.value;

      var me = this;
      range.onchange = function () {
        input.value = this.value;me._update(Number(this.value), path);
      };
      range.oninput = function () {
        input.value = this.value;
      };

      var label = this._makeLabel(path[path.length - 1], path);
      var itemIndex = this._makeItem(path, label, range, input);

      // if a popup is needed AND it has not been shown for this value, show it.
      if (popupString !== '' && this.popupHistory[itemIndex] !== popupValue) {
        this.popupHistory[itemIndex] = popupValue;
        this._setupPopup(popupString, itemIndex);
      }
    }

    /**
     * make a button object
     * @private
     */

  }, {
    key: '_makeButton',
    value: function _makeButton() {
      var _this = this;

      if (this.options.showButton === true) {
        var generateButton = document.createElement('div');
        generateButton.className = 'timeline-configuration timeline-config-button';
        generateButton.innerHTML = 'generate options';
        generateButton.onclick = function () {
          _this._printOptions();
        };
        generateButton.onmouseover = function () {
          generateButton.className = 'timeline-configuration timeline-config-button hover';
        };
        generateButton.onmouseout = function () {
          generateButton.className = 'timeline-configuration timeline-config-button';
        };

        this.optionsContainer = document.createElement('div');
        this.optionsContainer.className = 'timeline-configuration timeline-config-option-container';

        this.domElements.push(this.optionsContainer);
        this.domElements.push(generateButton);
      }
    }

    /**
     * prepare the popup
     * @param {string} string
     * @param {number} index
     * @private
     */

  }, {
    key: '_setupPopup',
    value: function _setupPopup(string, index) {
      var _this2 = this;

      if (this.initialized === true && this.allowCreation === true && this.popupCounter < this.popupLimit) {
        var div = document.createElement("div");
        div.id = "timeline-configuration-popup";
        div.className = "timeline-configuration-popup";
        div.innerHTML = string;
        div.onclick = function () {
          _this2._removePopup();
        };
        this.popupCounter += 1;
        this.popupDiv = { html: div, index: index };
      }
    }

    /**
     * remove the popup from the dom
     * @private
     */

  }, {
    key: '_removePopup',
    value: function _removePopup() {
      if (this.popupDiv.html !== undefined) {
        this.popupDiv.html.parentNode.removeChild(this.popupDiv.html);
        clearTimeout(this.popupDiv.hideTimeout);
        clearTimeout(this.popupDiv.deleteTimeout);
        this.popupDiv = {};
      }
    }

    /**
     * Show the popup if it is needed.
     * @private
     */

  }, {
    key: '_showPopupIfNeeded',
    value: function _showPopupIfNeeded() {
      var _this3 = this;

      if (this.popupDiv.html !== undefined) {
        var correspondingElement = this.domElements[this.popupDiv.index];
        var rect = correspondingElement.getBoundingClientRect();
        this.popupDiv.html.style.left = rect.left + "px";
        this.popupDiv.html.style.top = rect.top - 30 + "px"; // 30 is the height;
        document.body.appendChild(this.popupDiv.html);
        this.popupDiv.hideTimeout = setTimeout(function () {
          _this3.popupDiv.html.style.opacity = 0;
        }, 1500);
        this.popupDiv.deleteTimeout = setTimeout(function () {
          _this3._removePopup();
        }, 1800);
      }
    }

    /**
     * make a checkbox for boolean options.
     * @param {number} defaultValue
     * @param {number} value
     * @param {array} path    | where to look for the actual option
     * @private
     */

  }, {
    key: '_makeCheckbox',
    value: function _makeCheckbox(defaultValue, value, path) {
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'timeline-configuration timeline-config-checkbox';
      checkbox.checked = defaultValue;
      if (value !== undefined) {
        checkbox.checked = value;
        if (value !== defaultValue) {
          if ((typeof defaultValue === 'undefined' ? 'undefined' : (0, _typeof3['default'])(defaultValue)) === 'object') {
            if (value !== defaultValue.enabled) {
              this.changedOptions.push({ path: path, value: value });
            }
          } else {
            this.changedOptions.push({ path: path, value: value });
          }
        }
      }

      var me = this;
      checkbox.onchange = function () {
        me._update(this.checked, path);
      };

      var label = this._makeLabel(path[path.length - 1], path);
      this._makeItem(path, label, checkbox);
    }

    /**
     * make a text input field for string options.
     * @param {number} defaultValue
     * @param {number} value
     * @param {array} path    | where to look for the actual option
     * @private
     */

  }, {
    key: '_makeTextInput',
    value: function _makeTextInput(defaultValue, value, path) {
      var checkbox = document.createElement('input');
      checkbox.type = 'text';
      checkbox.className = 'timeline-configuration timeline-config-text';
      checkbox.value = value;
      if (value !== defaultValue) {
        this.changedOptions.push({ path: path, value: value });
      }

      var me = this;
      checkbox.onchange = function () {
        me._update(this.value, path);
      };

      var label = this._makeLabel(path[path.length - 1], path);
      this._makeItem(path, label, checkbox);
    }

    /**
     * make a color field with a color picker for color fields
     * @param {Array.<number>} arr
     * @param {number} value
     * @param {array} path    | where to look for the actual option
     * @private
     */

  }, {
    key: '_makeColorField',
    value: function _makeColorField(arr, value, path) {
      var _this4 = this;

      var defaultColor = arr[1];
      var div = document.createElement('div');
      value = value === undefined ? defaultColor : value;

      if (value !== 'none') {
        div.className = 'timeline-configuration timeline-config-colorBlock';
        div.style.backgroundColor = value;
      } else {
        div.className = 'timeline-configuration timeline-config-colorBlock none';
      }

      value = value === undefined ? defaultColor : value;
      div.onclick = function () {
        _this4._showColorPicker(value, div, path);
      };

      var label = this._makeLabel(path[path.length - 1], path);
      this._makeItem(path, label, div);
    }

    /**
     * used by the color buttons to call the color picker.
     * @param {number} value
     * @param {HTMLElement} div
     * @param {array} path    | where to look for the actual option
     * @private
     */

  }, {
    key: '_showColorPicker',
    value: function _showColorPicker(value, div, path) {
      var _this5 = this;

      // clear the callback from this div
      div.onclick = function () {};

      this.colorPicker.insertTo(div);
      this.colorPicker.show();

      this.colorPicker.setColor(value);
      this.colorPicker.setUpdateCallback(function (color) {
        var colorString = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')';
        div.style.backgroundColor = colorString;
        _this5._update(colorString, path);
      });

      // on close of the colorpicker, restore the callback.
      this.colorPicker.setCloseCallback(function () {
        div.onclick = function () {
          _this5._showColorPicker(value, div, path);
        };
      });
    }

    /**
     * parse an object and draw the correct items
     * @param {Object} obj
     * @param {array} [path=[]]    | where to look for the actual option
     * @param {boolean} [checkOnly=false]
     * @returns {boolean}
     * @private
     */

  }, {
    key: '_handleObject',
    value: function _handleObject(obj) {
      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var checkOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var show = false;
      var filter = this.options.filter;
      var visibleInSet = false;
      for (var subObj in obj) {
        if (obj.hasOwnProperty(subObj)) {
          show = true;
          var item = obj[subObj];
          var newPath = util.copyAndExtendArray(path, subObj);
          if (typeof filter === 'function') {
            show = filter(subObj, path);

            // if needed we must go deeper into the object.
            if (show === false) {
              if (!(item instanceof Array) && typeof item !== 'string' && typeof item !== 'boolean' && item instanceof Object) {
                this.allowCreation = false;
                show = this._handleObject(item, newPath, true);
                this.allowCreation = checkOnly === false;
              }
            }
          }

          if (show !== false) {
            visibleInSet = true;
            var value = this._getValue(newPath);

            if (item instanceof Array) {
              this._handleArray(item, value, newPath);
            } else if (typeof item === 'string') {
              this._makeTextInput(item, value, newPath);
            } else if (typeof item === 'boolean') {
              this._makeCheckbox(item, value, newPath);
            } else if (item instanceof Object) {
              // collapse the physics options that are not enabled
              var draw = true;
              if (path.indexOf('physics') !== -1) {
                if (this.moduleOptions.physics.solver !== subObj) {
                  draw = false;
                }
              }

              if (draw === true) {
                // initially collapse options with an disabled enabled option.
                if (item.enabled !== undefined) {
                  var enabledPath = util.copyAndExtendArray(newPath, 'enabled');
                  var enabledValue = this._getValue(enabledPath);
                  if (enabledValue === true) {
                    var label = this._makeLabel(subObj, newPath, true);
                    this._makeItem(newPath, label);
                    visibleInSet = this._handleObject(item, newPath) || visibleInSet;
                  } else {
                    this._makeCheckbox(item, enabledValue, newPath);
                  }
                } else {
                  var _label = this._makeLabel(subObj, newPath, true);
                  this._makeItem(newPath, _label);
                  visibleInSet = this._handleObject(item, newPath) || visibleInSet;
                }
              }
            } else {
              console.error('dont know how to handle', item, subObj, newPath);
            }
          }
        }
      }
      return visibleInSet;
    }

    /**
     * handle the array type of option
     * @param {Array.<number>} arr
     * @param {number} value
     * @param {array} path    | where to look for the actual option
     * @private
     */

  }, {
    key: '_handleArray',
    value: function _handleArray(arr, value, path) {
      if (typeof arr[0] === 'string' && arr[0] === 'color') {
        this._makeColorField(arr, value, path);
        if (arr[1] !== value) {
          this.changedOptions.push({ path: path, value: value });
        }
      } else if (typeof arr[0] === 'string') {
        this._makeDropdown(arr, value, path);
        if (arr[0] !== value) {
          this.changedOptions.push({ path: path, value: value });
        }
      } else if (typeof arr[0] === 'number') {
        this._makeRange(arr, value, path);
        if (arr[0] !== value) {
          this.changedOptions.push({ path: path, value: Number(value) });
        }
      }
    }

    /**
     * called to update the network with the new settings.
     * @param {number} value
     * @param {array} path    | where to look for the actual option
     * @private
     */

  }, {
    key: '_update',
    value: function _update(value, path) {
      var options = this._constructOptions(value, path);

      if (this.parent.body && this.parent.body.emitter && this.parent.body.emitter.emit) {
        this.parent.body.emitter.emit("configChange", options);
      }
      this.initialized = true;
      this.parent.setOptions(options);
    }

    /**
     *
     * @param {string|Boolean} value
     * @param {Array.<string>} path
     * @param {{}} optionsObj
     * @returns {{}}
     * @private
     */

  }, {
    key: '_constructOptions',
    value: function _constructOptions(value, path) {
      var optionsObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var pointer = optionsObj;

      // when dropdown boxes can be string or boolean, we typecast it into correct types
      value = value === 'true' ? true : value;
      value = value === 'false' ? false : value;

      for (var i = 0; i < path.length; i++) {
        if (path[i] !== 'global') {
          if (pointer[path[i]] === undefined) {
            pointer[path[i]] = {};
          }
          if (i !== path.length - 1) {
            pointer = pointer[path[i]];
          } else {
            pointer[path[i]] = value;
          }
        }
      }
      return optionsObj;
    }

    /**
     * @private
     */

  }, {
    key: '_printOptions',
    value: function _printOptions() {
      var options = this.getOptions();
      this.optionsContainer.innerHTML = '<pre>var options = ' + (0, _stringify2['default'])(options, null, 2) + '</pre>';
    }

    /**
     *
     * @returns {{}} options
     */

  }, {
    key: 'getOptions',
    value: function getOptions() {
      var options = {};
      for (var i = 0; i < this.changedOptions.length; i++) {
        this._constructOptions(this.changedOptions[i].value, this.changedOptions[i].path, options);
      }
      return options;
    }
  }]);
  return Configurator;
}();

exports['default'] = Configurator;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(22);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Hammer = __webpack_require__(16);
var hammerUtil = __webpack_require__(72);
var util = __webpack_require__(2);

var htmlColors = { black: '#000000', navy: '#000080', darkblue: '#00008B', mediumblue: '#0000CD', blue: '#0000FF', darkgreen: '#006400', green: '#008000', teal: '#008080', darkcyan: '#008B8B', deepskyblue: '#00BFFF', darkturquoise: '#00CED1', mediumspringgreen: '#00FA9A', lime: '#00FF00', springgreen: '#00FF7F', aqua: '#00FFFF', cyan: '#00FFFF', midnightblue: '#191970', dodgerblue: '#1E90FF', lightseagreen: '#20B2AA', forestgreen: '#228B22', seagreen: '#2E8B57', darkslategray: '#2F4F4F', limegreen: '#32CD32', mediumseagreen: '#3CB371', turquoise: '#40E0D0', royalblue: '#4169E1', steelblue: '#4682B4', darkslateblue: '#483D8B', mediumturquoise: '#48D1CC', indigo: '#4B0082', darkolivegreen: '#556B2F', cadetblue: '#5F9EA0', cornflowerblue: '#6495ED', mediumaquamarine: '#66CDAA', dimgray: '#696969', slateblue: '#6A5ACD', olivedrab: '#6B8E23', slategray: '#708090', lightslategray: '#778899', mediumslateblue: '#7B68EE', lawngreen: '#7CFC00', chartreuse: '#7FFF00', aquamarine: '#7FFFD4', maroon: '#800000', purple: '#800080', olive: '#808000', gray: '#808080', skyblue: '#87CEEB', lightskyblue: '#87CEFA', blueviolet: '#8A2BE2', darkred: '#8B0000', darkmagenta: '#8B008B', saddlebrown: '#8B4513', darkseagreen: '#8FBC8F', lightgreen: '#90EE90', mediumpurple: '#9370D8', darkviolet: '#9400D3', palegreen: '#98FB98', darkorchid: '#9932CC', yellowgreen: '#9ACD32', sienna: '#A0522D', brown: '#A52A2A', darkgray: '#A9A9A9', lightblue: '#ADD8E6', greenyellow: '#ADFF2F', paleturquoise: '#AFEEEE', lightsteelblue: '#B0C4DE', powderblue: '#B0E0E6', firebrick: '#B22222', darkgoldenrod: '#B8860B', mediumorchid: '#BA55D3', rosybrown: '#BC8F8F', darkkhaki: '#BDB76B', silver: '#C0C0C0', mediumvioletred: '#C71585', indianred: '#CD5C5C', peru: '#CD853F', chocolate: '#D2691E', tan: '#D2B48C', lightgrey: '#D3D3D3', palevioletred: '#D87093', thistle: '#D8BFD8', orchid: '#DA70D6', goldenrod: '#DAA520', crimson: '#DC143C', gainsboro: '#DCDCDC', plum: '#DDA0DD', burlywood: '#DEB887', lightcyan: '#E0FFFF', lavender: '#E6E6FA', darksalmon: '#E9967A', violet: '#EE82EE', palegoldenrod: '#EEE8AA', lightcoral: '#F08080', khaki: '#F0E68C', aliceblue: '#F0F8FF', honeydew: '#F0FFF0', azure: '#F0FFFF', sandybrown: '#F4A460', wheat: '#F5DEB3', beige: '#F5F5DC', whitesmoke: '#F5F5F5', mintcream: '#F5FFFA', ghostwhite: '#F8F8FF', salmon: '#FA8072', antiquewhite: '#FAEBD7', linen: '#FAF0E6', lightgoldenrodyellow: '#FAFAD2', oldlace: '#FDF5E6', red: '#FF0000', fuchsia: '#FF00FF', magenta: '#FF00FF', deeppink: '#FF1493', orangered: '#FF4500', tomato: '#FF6347', hotpink: '#FF69B4', coral: '#FF7F50', darkorange: '#FF8C00', lightsalmon: '#FFA07A', orange: '#FFA500', lightpink: '#FFB6C1', pink: '#FFC0CB', gold: '#FFD700', peachpuff: '#FFDAB9', navajowhite: '#FFDEAD', moccasin: '#FFE4B5', bisque: '#FFE4C4', mistyrose: '#FFE4E1', blanchedalmond: '#FFEBCD', papayawhip: '#FFEFD5', lavenderblush: '#FFF0F5', seashell: '#FFF5EE', cornsilk: '#FFF8DC', lemonchiffon: '#FFFACD', floralwhite: '#FFFAF0', snow: '#FFFAFA', yellow: '#FFFF00', lightyellow: '#FFFFE0', ivory: '#FFFFF0', white: '#FFFFFF' };

/**
 * @param {number} [pixelRatio=1]
 */

var ColorPicker = function () {
  /**
   * @param {number} [pixelRatio=1]
   */
  function ColorPicker() {
    var pixelRatio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    (0, _classCallCheck3['default'])(this, ColorPicker);

    this.pixelRatio = pixelRatio;
    this.generated = false;
    this.centerCoordinates = { x: 289 / 2, y: 289 / 2 };
    this.r = 289 * 0.49;
    this.color = { r: 255, g: 255, b: 255, a: 1.0 };
    this.hueCircle = undefined;
    this.initialColor = { r: 255, g: 255, b: 255, a: 1.0 };
    this.previousColor = undefined;
    this.applied = false;

    // bound by
    this.updateCallback = function () {};
    this.closeCallback = function () {};

    // create all DOM elements
    this._create();
  }

  /**
   * this inserts the colorPicker into a div from the DOM
   * @param {Element} container
   */


  (0, _createClass3['default'])(ColorPicker, [{
    key: 'insertTo',
    value: function insertTo(container) {
      if (this.hammer !== undefined) {
        this.hammer.destroy();
        this.hammer = undefined;
      }
      this.container = container;
      this.container.appendChild(this.frame);
      this._bindHammer();

      this._setSize();
    }

    /**
     * the callback is executed on apply and save. Bind it to the application
     * @param {function} callback
     */

  }, {
    key: 'setUpdateCallback',
    value: function setUpdateCallback(callback) {
      if (typeof callback === 'function') {
        this.updateCallback = callback;
      } else {
        throw new Error("Function attempted to set as colorPicker update callback is not a function.");
      }
    }

    /**
     * the callback is executed on apply and save. Bind it to the application
     * @param {function} callback
     */

  }, {
    key: 'setCloseCallback',
    value: function setCloseCallback(callback) {
      if (typeof callback === 'function') {
        this.closeCallback = callback;
      } else {
        throw new Error("Function attempted to set as colorPicker closing callback is not a function.");
      }
    }

    /**
     *
     * @param {string} color
     * @returns {String}
     * @private
     */

  }, {
    key: '_isColorString',
    value: function _isColorString(color) {
      if (typeof color === 'string') {
        return htmlColors[color];
      }
    }

    /**
     * Set the color of the colorPicker
     * Supported formats:
     * 'red'                   --> HTML color string
     * '#ffffff'               --> hex string
     * 'rgb(255,255,255)'      --> rgb string
     * 'rgba(255,255,255,1.0)' --> rgba string
     * {r:255,g:255,b:255}     --> rgb object
     * {r:255,g:255,b:255,a:1.0} --> rgba object
     * @param {string|Object} color
     * @param {boolean} [setInitial=true]
     */

  }, {
    key: 'setColor',
    value: function setColor(color) {
      var setInitial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (color === 'none') {
        return;
      }

      var rgba = void 0;

      // if a html color shorthand is used, convert to hex
      var htmlColor = this._isColorString(color);
      if (htmlColor !== undefined) {
        color = htmlColor;
      }

      // check format
      if (util.isString(color) === true) {
        if (util.isValidRGB(color) === true) {
          var rgbaArray = color.substr(4).substr(0, color.length - 5).split(',');
          rgba = { r: rgbaArray[0], g: rgbaArray[1], b: rgbaArray[2], a: 1.0 };
        } else if (util.isValidRGBA(color) === true) {
          var _rgbaArray = color.substr(5).substr(0, color.length - 6).split(',');
          rgba = { r: _rgbaArray[0], g: _rgbaArray[1], b: _rgbaArray[2], a: _rgbaArray[3] };
        } else if (util.isValidHex(color) === true) {
          var rgbObj = util.hexToRGB(color);
          rgba = { r: rgbObj.r, g: rgbObj.g, b: rgbObj.b, a: 1.0 };
        }
      } else {
        if (color instanceof Object) {
          if (color.r !== undefined && color.g !== undefined && color.b !== undefined) {
            var alpha = color.a !== undefined ? color.a : '1.0';
            rgba = { r: color.r, g: color.g, b: color.b, a: alpha };
          }
        }
      }

      // set color
      if (rgba === undefined) {
        throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: " + (0, _stringify2['default'])(color));
      } else {
        this._setColor(rgba, setInitial);
      }
    }

    /**
     * this shows the color picker.
     * The hue circle is constructed once and stored.
     */

  }, {
    key: 'show',
    value: function show() {
      if (this.closeCallback !== undefined) {
        this.closeCallback();
        this.closeCallback = undefined;
      }

      this.applied = false;
      this.frame.style.display = 'block';
      this._generateHueCircle();
    }

    // ------------------------------------------ PRIVATE ----------------------------- //

    /**
     * Hide the picker. Is called by the cancel button.
     * Optional boolean to store the previous color for easy access later on.
     * @param {boolean} [storePrevious=true]
     * @private
     */

  }, {
    key: '_hide',
    value: function _hide() {
      var _this = this;

      var storePrevious = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      // store the previous color for next time;
      if (storePrevious === true) {
        this.previousColor = util.extend({}, this.color);
      }

      if (this.applied === true) {
        this.updateCallback(this.initialColor);
      }

      this.frame.style.display = 'none';

      // call the closing callback, restoring the onclick method.
      // this is in a setTimeout because it will trigger the show again before the click is done.
      setTimeout(function () {
        if (_this.closeCallback !== undefined) {
          _this.closeCallback();
          _this.closeCallback = undefined;
        }
      }, 0);
    }

    /**
     * bound to the save button. Saves and hides.
     * @private
     */

  }, {
    key: '_save',
    value: function _save() {
      this.updateCallback(this.color);
      this.applied = false;
      this._hide();
    }

    /**
     * Bound to apply button. Saves but does not close. Is undone by the cancel button.
     * @private
     */

  }, {
    key: '_apply',
    value: function _apply() {
      this.applied = true;
      this.updateCallback(this.color);
      this._updatePicker(this.color);
    }

    /**
     * load the color from the previous session.
     * @private
     */

  }, {
    key: '_loadLast',
    value: function _loadLast() {
      if (this.previousColor !== undefined) {
        this.setColor(this.previousColor, false);
      } else {
        alert("There is no last color to load...");
      }
    }

    /**
     * set the color, place the picker
     * @param {Object} rgba
     * @param {boolean} [setInitial=true]
     * @private
     */

  }, {
    key: '_setColor',
    value: function _setColor(rgba) {
      var setInitial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // store the initial color
      if (setInitial === true) {
        this.initialColor = util.extend({}, rgba);
      }

      this.color = rgba;
      var hsv = util.RGBToHSV(rgba.r, rgba.g, rgba.b);

      var angleConvert = 2 * Math.PI;
      var radius = this.r * hsv.s;
      var x = this.centerCoordinates.x + radius * Math.sin(angleConvert * hsv.h);
      var y = this.centerCoordinates.y + radius * Math.cos(angleConvert * hsv.h);

      this.colorPickerSelector.style.left = x - 0.5 * this.colorPickerSelector.clientWidth + 'px';
      this.colorPickerSelector.style.top = y - 0.5 * this.colorPickerSelector.clientHeight + 'px';

      this._updatePicker(rgba);
    }

    /**
     * bound to opacity control
     * @param {number} value
     * @private
     */

  }, {
    key: '_setOpacity',
    value: function _setOpacity(value) {
      this.color.a = value / 100;
      this._updatePicker(this.color);
    }

    /**
     * bound to brightness control
     * @param {number} value
     * @private
     */

  }, {
    key: '_setBrightness',
    value: function _setBrightness(value) {
      var hsv = util.RGBToHSV(this.color.r, this.color.g, this.color.b);
      hsv.v = value / 100;
      var rgba = util.HSVToRGB(hsv.h, hsv.s, hsv.v);
      rgba['a'] = this.color.a;
      this.color = rgba;
      this._updatePicker();
    }

    /**
     * update the color picker. A black circle overlays the hue circle to mimic the brightness decreasing.
     * @param {Object} rgba
     * @private
     */

  }, {
    key: '_updatePicker',
    value: function _updatePicker() {
      var rgba = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.color;

      var hsv = util.RGBToHSV(rgba.r, rgba.g, rgba.b);
      var ctx = this.colorPickerCanvas.getContext('2d');
      if (this.pixelRation === undefined) {
        this.pixelRatio = (window.devicePixelRatio || 1) / (ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
      }
      ctx.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);

      // clear the canvas
      var w = this.colorPickerCanvas.clientWidth;
      var h = this.colorPickerCanvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      ctx.putImageData(this.hueCircle, 0, 0);
      ctx.fillStyle = 'rgba(0,0,0,' + (1 - hsv.v) + ')';
      ctx.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r);
      ctx.fill();

      this.brightnessRange.value = 100 * hsv.v;
      this.opacityRange.value = 100 * rgba.a;

      this.initialColorDiv.style.backgroundColor = 'rgba(' + this.initialColor.r + ',' + this.initialColor.g + ',' + this.initialColor.b + ',' + this.initialColor.a + ')';
      this.newColorDiv.style.backgroundColor = 'rgba(' + this.color.r + ',' + this.color.g + ',' + this.color.b + ',' + this.color.a + ')';
    }

    /**
     * used by create to set the size of the canvas.
     * @private
     */

  }, {
    key: '_setSize',
    value: function _setSize() {
      this.colorPickerCanvas.style.width = '100%';
      this.colorPickerCanvas.style.height = '100%';

      this.colorPickerCanvas.width = 289 * this.pixelRatio;
      this.colorPickerCanvas.height = 289 * this.pixelRatio;
    }

    /**
     * create all dom elements
     * TODO: cleanup, lots of similar dom elements
     * @private
     */

  }, {
    key: '_create',
    value: function _create() {
      this.frame = document.createElement('div');
      this.frame.className = 'timeline-color-picker';

      this.colorPickerDiv = document.createElement('div');
      this.colorPickerSelector = document.createElement('div');
      this.colorPickerSelector.className = 'timeline-selector';
      this.colorPickerDiv.appendChild(this.colorPickerSelector);

      this.colorPickerCanvas = document.createElement('canvas');
      this.colorPickerDiv.appendChild(this.colorPickerCanvas);

      if (!this.colorPickerCanvas.getContext) {
        var noCanvas = document.createElement('DIV');
        noCanvas.style.color = 'red';
        noCanvas.style.fontWeight = 'bold';
        noCanvas.style.padding = '10px';
        noCanvas.innerHTML = 'Error: your browser does not support HTML canvas';
        this.colorPickerCanvas.appendChild(noCanvas);
      } else {
        var ctx = this.colorPickerCanvas.getContext("2d");
        this.pixelRatio = (window.devicePixelRatio || 1) / (ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
        this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
      }

      this.colorPickerDiv.className = 'timeline-color';

      this.opacityDiv = document.createElement('div');
      this.opacityDiv.className = 'timeline-opacity';

      this.brightnessDiv = document.createElement('div');
      this.brightnessDiv.className = 'timeline-brightness';

      this.arrowDiv = document.createElement('div');
      this.arrowDiv.className = 'timeline-arrow';

      this.opacityRange = document.createElement('input');
      try {
        this.opacityRange.type = 'range'; // Not supported on IE9
        this.opacityRange.min = '0';
        this.opacityRange.max = '100';
      }
      // TODO: Add some error handling and remove this lint exception
      catch (err) {} // eslint-disable-line no-empty
      this.opacityRange.value = '100';
      this.opacityRange.className = 'timeline-range';

      this.brightnessRange = document.createElement('input');
      try {
        this.brightnessRange.type = 'range'; // Not supported on IE9
        this.brightnessRange.min = '0';
        this.brightnessRange.max = '100';
      }
      // TODO: Add some error handling and remove this lint exception
      catch (err) {} // eslint-disable-line no-empty
      this.brightnessRange.value = '100';
      this.brightnessRange.className = 'timeline-range';

      this.opacityDiv.appendChild(this.opacityRange);
      this.brightnessDiv.appendChild(this.brightnessRange);

      var me = this;
      this.opacityRange.onchange = function () {
        me._setOpacity(this.value);
      };
      this.opacityRange.oninput = function () {
        me._setOpacity(this.value);
      };
      this.brightnessRange.onchange = function () {
        me._setBrightness(this.value);
      };
      this.brightnessRange.oninput = function () {
        me._setBrightness(this.value);
      };

      this.brightnessLabel = document.createElement("div");
      this.brightnessLabel.className = "timeline-label timeline-brightness";
      this.brightnessLabel.innerHTML = 'brightness:';

      this.opacityLabel = document.createElement("div");
      this.opacityLabel.className = "timeline-label timeline-opacity";
      this.opacityLabel.innerHTML = 'opacity:';

      this.newColorDiv = document.createElement("div");
      this.newColorDiv.className = "timeline-new-color";
      this.newColorDiv.innerHTML = 'new';

      this.initialColorDiv = document.createElement("div");
      this.initialColorDiv.className = "timeline-initial-color";
      this.initialColorDiv.innerHTML = 'initial';

      this.cancelButton = document.createElement("div");
      this.cancelButton.className = "timeline-button timeline-cancel";
      this.cancelButton.innerHTML = 'cancel';
      this.cancelButton.onclick = this._hide.bind(this, false);

      this.applyButton = document.createElement("div");
      this.applyButton.className = "timeline-button timeline-apply";
      this.applyButton.innerHTML = 'apply';
      this.applyButton.onclick = this._apply.bind(this);

      this.saveButton = document.createElement("div");
      this.saveButton.className = "timeline-button timeline-save";
      this.saveButton.innerHTML = 'save';
      this.saveButton.onclick = this._save.bind(this);

      this.loadButton = document.createElement("div");
      this.loadButton.className = "timeline-button timeline-load";
      this.loadButton.innerHTML = 'load last';
      this.loadButton.onclick = this._loadLast.bind(this);

      this.frame.appendChild(this.colorPickerDiv);
      this.frame.appendChild(this.arrowDiv);
      this.frame.appendChild(this.brightnessLabel);
      this.frame.appendChild(this.brightnessDiv);
      this.frame.appendChild(this.opacityLabel);
      this.frame.appendChild(this.opacityDiv);
      this.frame.appendChild(this.newColorDiv);
      this.frame.appendChild(this.initialColorDiv);

      this.frame.appendChild(this.cancelButton);
      this.frame.appendChild(this.applyButton);
      this.frame.appendChild(this.saveButton);
      this.frame.appendChild(this.loadButton);
    }

    /**
     * bind hammer to the color picker
     * @private
     */

  }, {
    key: '_bindHammer',
    value: function _bindHammer() {
      var _this2 = this;

      this.drag = {};
      this.pinch = {};
      this.hammer = new Hammer(this.colorPickerCanvas);
      this.hammer.get('pinch').set({ enable: true });

      hammerUtil.onTouch(this.hammer, function (event) {
        _this2._moveSelector(event);
      });
      this.hammer.on('tap', function (event) {
        _this2._moveSelector(event);
      });
      this.hammer.on('panstart', function (event) {
        _this2._moveSelector(event);
      });
      this.hammer.on('panmove', function (event) {
        _this2._moveSelector(event);
      });
      this.hammer.on('panend', function (event) {
        _this2._moveSelector(event);
      });
    }

    /**
     * generate the hue circle. This is relatively heavy (200ms) and is done only once on the first time it is shown.
     * @private
     */

  }, {
    key: '_generateHueCircle',
    value: function _generateHueCircle() {
      if (this.generated === false) {
        var ctx = this.colorPickerCanvas.getContext('2d');
        if (this.pixelRation === undefined) {
          this.pixelRatio = (window.devicePixelRatio || 1) / (ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
        }
        ctx.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);

        // clear the canvas
        var w = this.colorPickerCanvas.clientWidth;
        var h = this.colorPickerCanvas.clientHeight;
        ctx.clearRect(0, 0, w, h);

        // draw hue circle
        var x = void 0,
            y = void 0,
            hue = void 0,
            sat = void 0;
        this.centerCoordinates = { x: w * 0.5, y: h * 0.5 };
        this.r = 0.49 * w;
        var angleConvert = 2 * Math.PI / 360;
        var hfac = 1 / 360;
        var sfac = 1 / this.r;
        var rgb = void 0;
        for (hue = 0; hue < 360; hue++) {
          for (sat = 0; sat < this.r; sat++) {
            x = this.centerCoordinates.x + sat * Math.sin(angleConvert * hue);
            y = this.centerCoordinates.y + sat * Math.cos(angleConvert * hue);
            rgb = util.HSVToRGB(hue * hfac, sat * sfac, 1);
            ctx.fillStyle = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
            ctx.fillRect(x - 0.5, y - 0.5, 2, 2);
          }
        }
        ctx.strokeStyle = 'rgba(0,0,0,1)';
        ctx.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r);
        ctx.stroke();

        this.hueCircle = ctx.getImageData(0, 0, w, h);
      }
      this.generated = true;
    }

    /**
     * move the selector. This is called by hammer functions.
     *
     * @param {Event}  event   The event
     * @private
     */

  }, {
    key: '_moveSelector',
    value: function _moveSelector(event) {
      var rect = this.colorPickerDiv.getBoundingClientRect();
      var left = event.center.x - rect.left;
      var top = event.center.y - rect.top;

      var centerY = 0.5 * this.colorPickerDiv.clientHeight;
      var centerX = 0.5 * this.colorPickerDiv.clientWidth;

      var x = left - centerX;
      var y = top - centerY;

      var angle = Math.atan2(x, y);
      var radius = 0.98 * Math.min(Math.sqrt(x * x + y * y), centerX);

      var newTop = Math.cos(angle) * radius + centerY;
      var newLeft = Math.sin(angle) * radius + centerX;

      this.colorPickerSelector.style.top = newTop - 0.5 * this.colorPickerSelector.clientHeight + 'px';
      this.colorPickerSelector.style.left = newLeft - 0.5 * this.colorPickerSelector.clientWidth + 'px';

      // set color
      var h = angle / (2 * Math.PI);
      h = h < 0 ? h + 1 : h;
      var s = radius / this.r;
      var hsv = util.RGBToHSV(this.color.r, this.color.g, this.color.b);
      hsv.h = h;
      hsv.s = s;
      var rgba = util.HSVToRGB(hsv.h, hsv.s, hsv.v);
      rgba['a'] = this.color.a;
      this.color = rgba;

      // update previews
      this.initialColorDiv.style.backgroundColor = 'rgba(' + this.initialColor.r + ',' + this.initialColor.g + ',' + this.initialColor.b + ',' + this.initialColor.a + ')';
      this.newColorDiv.style.backgroundColor = 'rgba(' + this.color.r + ',' + this.color.g + ',' + this.color.b + ',' + this.color.a + ')';
    }
  }]);
  return ColorPicker;
}();

exports['default'] = ColorPicker;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(24);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

var _DOMutil = __webpack_require__(67);

var _DOMutil2 = _interopRequireDefault(_DOMutil);

var _Component2 = __webpack_require__(15);

var _Component3 = _interopRequireDefault(_Component2);

var _DataScale = __webpack_require__(81);

var _DataScale2 = _interopRequireDefault(_DataScale);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/** A horizontal time axis */
var DataAxis = function (_Component) {
  (0, _inherits3['default'])(DataAxis, _Component);

  /**
  * @param {Object} body
  * @param {Object} [options]        See DataAxis.setOptions for the available
  *                                  options.
  * @param {SVGElement} svg
  * @param {timeline.LineGraph.options} linegraphOptions
  * @constructor DataAxis
  * @extends Component
  */
  function DataAxis(body, options, svg, linegraphOptions) {
    (0, _classCallCheck3['default'])(this, DataAxis);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (DataAxis.__proto__ || (0, _getPrototypeOf2['default'])(DataAxis)).call(this));

    _this.id = util.randomUUID();
    _this.body = body;

    _this.defaultOptions = {
      orientation: 'left', // supported: 'left', 'right'
      showMinorLabels: true,
      showMajorLabels: true,
      icons: false,
      majorLinesOffset: 7,
      minorLinesOffset: 4,
      labelOffsetX: 10,
      labelOffsetY: 2,
      iconWidth: 20,
      width: '40px',
      visible: true,
      alignZeros: true,
      left: {
        range: { min: undefined, max: undefined },
        format: function format(value) {
          return '' + parseFloat(value.toPrecision(3));
        },

        title: { text: undefined, style: undefined }
      },
      right: {
        range: { min: undefined, max: undefined },
        format: function format(value) {
          return '' + parseFloat(value.toPrecision(3));
        },

        title: { text: undefined, style: undefined }
      }
    };

    _this.linegraphOptions = linegraphOptions;
    _this.linegraphSVG = svg;
    _this.props = {};
    _this.DOMelements = { // dynamic elements
      lines: {},
      labels: {},
      title: {}
    };

    _this.dom = {};
    _this.scale = undefined;
    _this.range = { start: 0, end: 0 };

    _this.options = util.extend({}, _this.defaultOptions);
    _this.conversionFactor = 1;

    _this.setOptions(options);
    _this.width = Number(('' + _this.options.width).replace("px", ""));
    _this.minWidth = _this.width;
    _this.height = _this.linegraphSVG.getBoundingClientRect().height;
    _this.hidden = false;

    _this.stepPixels = 25;
    _this.zeroCrossing = -1;
    _this.amountOfSteps = -1;

    _this.lineOffset = 0;
    _this.master = true;
    _this.masterAxis = null;
    _this.svgElements = {};
    _this.iconsRemoved = false;

    _this.groups = {};
    _this.amountOfGroups = 0;

    // create the HTML DOM
    _this._create();
    if (_this.scale == undefined) {
      _this._redrawLabels();
    }
    _this.framework = { svg: _this.svg, svgElements: _this.svgElements, options: _this.options, groups: _this.groups };

    var me = _this;
    _this.body.emitter.on("verticalDrag", function () {
      me.dom.lineContainer.style.top = me.body.domProps.scrollTop + 'px';
    });
    return _this;
  }

  (0, _createClass3['default'])(DataAxis, [{
    key: 'addGroup',
    value: function addGroup(label, graphOptions) {
      if (!this.groups.hasOwnProperty(label)) {
        this.groups[label] = graphOptions;
      }
      this.amountOfGroups += 1;
    }
  }, {
    key: 'updateGroup',
    value: function updateGroup(label, graphOptions) {
      if (!this.groups.hasOwnProperty(label)) {
        this.amountOfGroups += 1;
      }
      this.groups[label] = graphOptions;
    }
  }, {
    key: 'removeGroup',
    value: function removeGroup(label) {
      if (this.groups.hasOwnProperty(label)) {
        delete this.groups[label];
        this.amountOfGroups -= 1;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      if (options) {
        var redraw = false;
        if (this.options.orientation != options.orientation && options.orientation !== undefined) {
          redraw = true;
        }
        var fields = ['orientation', 'showMinorLabels', 'showMajorLabels', 'icons', 'majorLinesOffset', 'minorLinesOffset', 'labelOffsetX', 'labelOffsetY', 'iconWidth', 'width', 'visible', 'left', 'right', 'alignZeros'];
        util.selectiveDeepExtend(fields, this.options, options);

        this.minWidth = Number(('' + this.options.width).replace("px", ""));
        if (redraw === true && this.dom.frame) {
          this.hide();
          this.show();
        }
      }
    }

    /**
     * Create the HTML DOM for the DataAxis
     */

  }, {
    key: '_create',
    value: function _create() {
      this.dom.frame = document.createElement('div');
      this.dom.frame.style.width = this.options.width;
      this.dom.frame.style.height = this.height;

      this.dom.lineContainer = document.createElement('div');
      this.dom.lineContainer.style.width = '100%';
      this.dom.lineContainer.style.height = this.height;
      this.dom.lineContainer.style.position = 'relative';
      this.dom.lineContainer.style.visibility = 'visible';
      this.dom.lineContainer.style.display = 'block';

      // create svg element for graph drawing.
      this.svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
      this.svg.style.position = "absolute";
      this.svg.style.top = '0px';
      this.svg.style.height = '100%';
      this.svg.style.width = '100%';
      this.svg.style.display = "block";
      this.dom.frame.appendChild(this.svg);
    }
  }, {
    key: '_redrawGroupIcons',
    value: function _redrawGroupIcons() {
      _DOMutil2['default'].prepareElements(this.svgElements);

      var x = void 0;
      var iconWidth = this.options.iconWidth;
      var iconHeight = 15;
      var iconOffset = 4;
      var y = iconOffset + 0.5 * iconHeight;

      if (this.options.orientation === 'left') {
        x = iconOffset;
      } else {
        x = this.width - iconWidth - iconOffset;
      }

      var groupArray = (0, _keys2['default'])(this.groups);
      groupArray.sort(function (a, b) {
        return a < b ? -1 : 1;
      });

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3['default'])(groupArray), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var groupId = _step.value;

          if (this.groups[groupId].visible === true && (this.linegraphOptions.visibility[groupId] === undefined || this.linegraphOptions.visibility[groupId] === true)) {
            this.groups[groupId].getLegend(iconWidth, iconHeight, this.framework, x, y);
            y += iconHeight + iconOffset;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      _DOMutil2['default'].cleanupElements(this.svgElements);
      this.iconsRemoved = false;
    }
  }, {
    key: '_cleanupIcons',
    value: function _cleanupIcons() {
      if (this.iconsRemoved === false) {
        _DOMutil2['default'].prepareElements(this.svgElements);
        _DOMutil2['default'].cleanupElements(this.svgElements);
        this.iconsRemoved = true;
      }
    }

    /**
     * Create the HTML DOM for the DataAxis
     */

  }, {
    key: 'show',
    value: function show() {
      this.hidden = false;
      if (!this.dom.frame.parentNode) {
        if (this.options.orientation === 'left') {
          this.body.dom.left.appendChild(this.dom.frame);
        } else {
          this.body.dom.right.appendChild(this.dom.frame);
        }
      }

      if (!this.dom.lineContainer.parentNode) {
        this.body.dom.backgroundHorizontal.appendChild(this.dom.lineContainer);
      }
      this.dom.lineContainer.style.display = 'block';
    }

    /**
     * Create the HTML DOM for the DataAxis
     */

  }, {
    key: 'hide',
    value: function hide() {
      this.hidden = true;
      if (this.dom.frame.parentNode) {
        this.dom.frame.parentNode.removeChild(this.dom.frame);
      }

      this.dom.lineContainer.style.display = 'none';
    }

    /**
     * Set a range (start and end)
     * @param {number} start
     * @param {number} end
     */

  }, {
    key: 'setRange',
    value: function setRange(start, end) {
      this.range.start = start;
      this.range.end = end;
    }

    /**
     * Repaint the component
     * @return {boolean} Returns true if the component is resized
     */

  }, {
    key: 'redraw',
    value: function redraw() {
      var resized = false;
      var activeGroups = 0;

      // Make sure the line container adheres to the vertical scrolling.
      this.dom.lineContainer.style.top = this.body.domProps.scrollTop + 'px';

      for (var groupId in this.groups) {
        if (this.groups.hasOwnProperty(groupId)) {
          if (this.groups[groupId].visible === true && (this.linegraphOptions.visibility[groupId] === undefined || this.linegraphOptions.visibility[groupId] === true)) {
            activeGroups++;
          }
        }
      }
      if (this.amountOfGroups === 0 || activeGroups === 0) {
        this.hide();
      } else {
        this.show();
        this.height = Number(this.linegraphSVG.style.height.replace("px", ""));

        // svg offsetheight did not work in firefox and explorer...
        this.dom.lineContainer.style.height = this.height + 'px';
        this.width = this.options.visible === true ? Number(('' + this.options.width).replace("px", "")) : 0;

        var props = this.props;
        var frame = this.dom.frame;

        // update classname
        frame.className = 'timeline-data-axis';

        // calculate character width and height
        this._calculateCharSize();

        var orientation = this.options.orientation;
        var showMinorLabels = this.options.showMinorLabels;
        var showMajorLabels = this.options.showMajorLabels;

        // determine the width and height of the elements for the axis
        props.minorLabelHeight = showMinorLabels ? props.minorCharHeight : 0;
        props.majorLabelHeight = showMajorLabels ? props.majorCharHeight : 0;

        props.minorLineWidth = this.body.dom.backgroundHorizontal.offsetWidth - this.lineOffset - this.width + 2 * this.options.minorLinesOffset;
        props.minorLineHeight = 1;
        props.majorLineWidth = this.body.dom.backgroundHorizontal.offsetWidth - this.lineOffset - this.width + 2 * this.options.majorLinesOffset;
        props.majorLineHeight = 1;

        //  take frame offline while updating (is almost twice as fast)
        if (orientation === 'left') {
          frame.style.top = '0';
          frame.style.left = '0';
          frame.style.bottom = '';
          frame.style.width = this.width + 'px';
          frame.style.height = this.height + 'px';
          this.props.width = this.body.domProps.left.width;
          this.props.height = this.body.domProps.left.height;
        } else {
          // right
          frame.style.top = '';
          frame.style.bottom = '0';
          frame.style.left = '0';
          frame.style.width = this.width + 'px';
          frame.style.height = this.height + 'px';
          this.props.width = this.body.domProps.right.width;
          this.props.height = this.body.domProps.right.height;
        }

        resized = this._redrawLabels();
        resized = this._isResized() || resized;

        if (this.options.icons === true) {
          this._redrawGroupIcons();
        } else {
          this._cleanupIcons();
        }

        this._redrawTitle(orientation);
      }
      return resized;
    }

    /**
     * Repaint major and minor text labels and vertical grid lines
     *
     * @returns {boolean}
     * @private
     */

  }, {
    key: '_redrawLabels',
    value: function _redrawLabels() {
      var _this2 = this;

      var resized = false;
      _DOMutil2['default'].prepareElements(this.DOMelements.lines);
      _DOMutil2['default'].prepareElements(this.DOMelements.labels);
      var orientation = this.options['orientation'];
      var customRange = this.options[orientation].range != undefined ? this.options[orientation].range : {};

      //Override range with manual options:
      var autoScaleEnd = true;
      if (customRange.max != undefined) {
        this.range.end = customRange.max;
        autoScaleEnd = false;
      }
      var autoScaleStart = true;
      if (customRange.min != undefined) {
        this.range.start = customRange.min;
        autoScaleStart = false;
      }

      this.scale = new _DataScale2['default'](this.range.start, this.range.end, autoScaleStart, autoScaleEnd, this.dom.frame.offsetHeight, this.props.majorCharHeight, this.options.alignZeros, this.options[orientation].format);

      if (this.master === false && this.masterAxis != undefined) {
        this.scale.followScale(this.masterAxis.scale);
        this.dom.lineContainer.style.display = 'none';
      } else {
        this.dom.lineContainer.style.display = 'block';
      }

      //Is updated in side-effect of _redrawLabel():
      this.maxLabelSize = 0;

      var lines = this.scale.getLines();
      lines.forEach(function (line) {
        var y = line.y;
        var isMajor = line.major;
        if (_this2.options['showMinorLabels'] && isMajor === false) {
          _this2._redrawLabel(y - 2, line.val, orientation, 'timeline-y-axis timeline-minor', _this2.props.minorCharHeight);
        }
        if (isMajor) {
          if (y >= 0) {
            _this2._redrawLabel(y - 2, line.val, orientation, 'timeline-y-axis timeline-major', _this2.props.majorCharHeight);
          }
        }
        if (_this2.master === true) {
          if (isMajor) {
            _this2._redrawLine(y, orientation, 'timeline-grid timeline-horizontal timeline-major', _this2.options.majorLinesOffset, _this2.props.majorLineWidth);
          } else {
            _this2._redrawLine(y, orientation, 'timeline-grid timeline-horizontal timeline-minor', _this2.options.minorLinesOffset, _this2.props.minorLineWidth);
          }
        }
      });

      // Note that title is rotated, so we're using the height, not width!
      var titleWidth = 0;
      if (this.options[orientation].title !== undefined && this.options[orientation].title.text !== undefined) {
        titleWidth = this.props.titleCharHeight;
      }
      var offset = this.options.icons === true ? Math.max(this.options.iconWidth, titleWidth) + this.options.labelOffsetX + 15 : titleWidth + this.options.labelOffsetX + 15;

      // this will resize the yAxis to accommodate the labels.
      if (this.maxLabelSize > this.width - offset && this.options.visible === true) {
        this.width = this.maxLabelSize + offset;
        this.options.width = this.width + 'px';
        _DOMutil2['default'].cleanupElements(this.DOMelements.lines);
        _DOMutil2['default'].cleanupElements(this.DOMelements.labels);
        this.redraw();
        resized = true;
      }
      // this will resize the yAxis if it is too big for the labels.
      else if (this.maxLabelSize < this.width - offset && this.options.visible === true && this.width > this.minWidth) {
          this.width = Math.max(this.minWidth, this.maxLabelSize + offset);
          this.options.width = this.width + 'px';
          _DOMutil2['default'].cleanupElements(this.DOMelements.lines);
          _DOMutil2['default'].cleanupElements(this.DOMelements.labels);
          this.redraw();
          resized = true;
        } else {
          _DOMutil2['default'].cleanupElements(this.DOMelements.lines);
          _DOMutil2['default'].cleanupElements(this.DOMelements.labels);
          resized = false;
        }

      return resized;
    }
  }, {
    key: 'convertValue',
    value: function convertValue(value) {
      return this.scale.convertValue(value);
    }
  }, {
    key: 'screenToValue',
    value: function screenToValue(x) {
      return this.scale.screenToValue(x);
    }

    /**
     * Create a label for the axis at position x
     *
     * @param {number} y
     * @param {string} text
     * @param {'top'|'right'|'bottom'|'left'} orientation
     * @param {string} className
     * @param {number} characterHeight
     * @private
     */

  }, {
    key: '_redrawLabel',
    value: function _redrawLabel(y, text, orientation, className, characterHeight) {
      // reuse redundant label
      var label = _DOMutil2['default'].getDOMElement('div', this.DOMelements.labels, this.dom.frame); //this.dom.redundant.labels.shift();
      label.className = className;
      label.innerHTML = text;
      if (orientation === 'left') {
        label.style.left = '-' + this.options.labelOffsetX + 'px';
        label.style.textAlign = "right";
      } else {
        label.style.right = '-' + this.options.labelOffsetX + 'px';
        label.style.textAlign = "left";
      }

      label.style.top = y - 0.5 * characterHeight + this.options.labelOffsetY + 'px';

      text += '';

      var largestWidth = Math.max(this.props.majorCharWidth, this.props.minorCharWidth);
      if (this.maxLabelSize < text.length * largestWidth) {
        this.maxLabelSize = text.length * largestWidth;
      }
    }

    /**
     * Create a minor line for the axis at position y
     * @param {number} y
     * @param {'top'|'right'|'bottom'|'left'} orientation
     * @param {string} className
     * @param {number} offset
     * @param {number} width
     */

  }, {
    key: '_redrawLine',
    value: function _redrawLine(y, orientation, className, offset, width) {
      if (this.master === true) {
        var line = _DOMutil2['default'].getDOMElement('div', this.DOMelements.lines, this.dom.lineContainer); //this.dom.redundant.lines.shift();
        line.className = className;
        line.innerHTML = '';

        if (orientation === 'left') {
          line.style.left = this.width - offset + 'px';
        } else {
          line.style.right = this.width - offset + 'px';
        }

        line.style.width = width + 'px';
        line.style.top = y + 'px';
      }
    }

    /**
     * Create a title for the axis
     * @private
     * @param {'top'|'right'|'bottom'|'left'} orientation
     */

  }, {
    key: '_redrawTitle',
    value: function _redrawTitle(orientation) {
      _DOMutil2['default'].prepareElements(this.DOMelements.title);

      // Check if the title is defined for this axes
      if (this.options[orientation].title !== undefined && this.options[orientation].title.text !== undefined) {
        var title = _DOMutil2['default'].getDOMElement('div', this.DOMelements.title, this.dom.frame);
        title.className = 'timeline-y-axis timeline-title timeline-' + orientation;
        title.innerHTML = this.options[orientation].title.text;

        // Add style - if provided
        if (this.options[orientation].title.style !== undefined) {
          util.addCssText(title, this.options[orientation].title.style);
        }

        if (orientation === 'left') {
          title.style.left = this.props.titleCharHeight + 'px';
        } else {
          title.style.right = this.props.titleCharHeight + 'px';
        }

        title.style.width = this.height + 'px';
      }

      // we need to clean up in case we did not use all elements.
      _DOMutil2['default'].cleanupElements(this.DOMelements.title);
    }

    /**
     * Determine the size of text on the axis (both major and minor axis).
     * The size is calculated only once and then cached in this.props.
     * @private
     */

  }, {
    key: '_calculateCharSize',
    value: function _calculateCharSize() {
      // determine the char width and height on the minor axis
      if (!('minorCharHeight' in this.props)) {
        var textMinor = document.createTextNode('0');
        var measureCharMinor = document.createElement('div');
        measureCharMinor.className = 'timeline-y-axis timeline-minor timeline-measure';
        measureCharMinor.appendChild(textMinor);
        this.dom.frame.appendChild(measureCharMinor);

        this.props.minorCharHeight = measureCharMinor.clientHeight;
        this.props.minorCharWidth = measureCharMinor.clientWidth;

        this.dom.frame.removeChild(measureCharMinor);
      }

      if (!('majorCharHeight' in this.props)) {
        var textMajor = document.createTextNode('0');
        var measureCharMajor = document.createElement('div');
        measureCharMajor.className = 'timeline-y-axis timeline-major timeline-measure';
        measureCharMajor.appendChild(textMajor);
        this.dom.frame.appendChild(measureCharMajor);

        this.props.majorCharHeight = measureCharMajor.clientHeight;
        this.props.majorCharWidth = measureCharMajor.clientWidth;

        this.dom.frame.removeChild(measureCharMajor);
      }

      if (!('titleCharHeight' in this.props)) {
        var textTitle = document.createTextNode('0');
        var measureCharTitle = document.createElement('div');
        measureCharTitle.className = 'timeline-y-axis timeline-title timeline-measure';
        measureCharTitle.appendChild(textTitle);
        this.dom.frame.appendChild(measureCharTitle);

        this.props.titleCharHeight = measureCharTitle.clientHeight;
        this.props.titleCharWidth = measureCharTitle.clientWidth;

        this.dom.frame.removeChild(measureCharTitle);
      }
    }
  }]);
  return DataAxis;
}(_Component3['default']);

exports['default'] = DataAxis;

/***/ })
/******/ ]);
});
//# sourceMappingURL=timeline.js.map