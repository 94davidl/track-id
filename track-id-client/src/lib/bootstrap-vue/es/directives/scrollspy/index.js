"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _scrollspy = _interopRequireDefault(require("./scrollspy"));

var _plugins = require("../../utils/plugins");

var directives = {
  bScrollspy: _scrollspy.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerDirectives)(Vue, directives);
  }
};
exports.default = _default;