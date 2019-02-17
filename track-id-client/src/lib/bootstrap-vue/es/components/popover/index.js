"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _popover = _interopRequireDefault(require("./popover"));

var _popover2 = _interopRequireDefault(require("../../directives/popover"));

var _plugins = require("../../utils/plugins");

var components = {
  BPopover: _popover.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
    Vue.use(_popover2.default);
  }
};
exports.default = _default;