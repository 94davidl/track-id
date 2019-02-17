"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lowerFirst;

/**
 * @param {string} str
 */
function lowerFirst(str) {
  if (typeof str !== 'string') {
    str = String(str);
  }

  return str.charAt(0).toLowerCase() + str.slice(1);
}