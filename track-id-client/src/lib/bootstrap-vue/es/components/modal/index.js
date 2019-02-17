"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modal = _interopRequireDefault(require("./modal"));

var _modal2 = _interopRequireDefault(require("../../directives/modal"));

var _plugins = require("../../utils/plugins");

var components = {
  BModal: _modal.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
    Vue.use(_modal2.default);
  }
};
exports.default = _default;