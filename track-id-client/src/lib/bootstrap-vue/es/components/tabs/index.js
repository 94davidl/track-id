"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tabs = _interopRequireDefault(require("./tabs"));

var _tab = _interopRequireDefault(require("./tab"));

var _plugins = require("../../utils/plugins");

var components = {
  BTabs: _tabs.default,
  BTab: _tab.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;