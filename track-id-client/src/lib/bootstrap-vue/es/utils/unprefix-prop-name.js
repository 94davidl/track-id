"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unPrefixPropName;

var _lowerFirst = _interopRequireDefault(require("./lower-first"));

/**
 * @param {string} prefix
 * @param {string} value
 */
function unPrefixPropName(prefix, value) {
  return (0, _lowerFirst.default)(value.replace(prefix, ''));
}