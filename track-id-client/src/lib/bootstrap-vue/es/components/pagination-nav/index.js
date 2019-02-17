"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _paginationNav = _interopRequireDefault(require("./pagination-nav"));

var _plugins = require("../../utils/plugins");

var components = {
  BPaginationNav: _paginationNav.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;