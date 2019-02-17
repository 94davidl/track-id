"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modal = _interopRequireDefault(require("./modal"));

var _plugins = require("../../utils/plugins");

var directives = {
  bModal: _modal.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerDirectives)(Vue, directives);
  }
};
exports.default = _default;