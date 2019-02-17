"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = copyProps;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _array = require("./array");

var _object = require("./object");

var _identity = _interopRequireDefault(require("./identity"));

/**
 * @param {[]|{}} props
 * @param {Function} transformFn
 */
function copyProps(props) {
  var transformFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity.default;

  if ((0, _array.isArray)(props)) {
    return props.map(transformFn);
  } // Props as an object.


  var copied = {};

  for (var prop in props) {
    if (props.hasOwnProperty(prop)) {
      if ((0, _typeof2.default)(prop) === 'object') {
        copied[transformFn(prop)] = (0, _object.assign)({}, props[prop]);
      } else {
        copied[transformFn(prop)] = props[prop];
      }
    }
  }

  return copied;
}