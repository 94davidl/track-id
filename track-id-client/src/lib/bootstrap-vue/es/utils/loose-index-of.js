"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _looseEqual = _interopRequireDefault(require("./loose-equal"));

function _default(arr, val) {
  // Assumes that the first argument is an array
  for (var i = 0; i < arr.length; i++) {
    if ((0, _looseEqual.default)(arr[i], val)) {
      return i;
    }
  }

  return -1;
}