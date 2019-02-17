"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixPropName;

var _upperFirst = _interopRequireDefault(require("./upper-first"));

/**
 * @param {string} prefix
 * @param {string} value
 */
function prefixPropName(prefix, value) {
  return prefix + (0, _upperFirst.default)(value);
}