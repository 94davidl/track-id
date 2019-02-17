"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buttonGroup = _interopRequireDefault(require("./button-group"));

var _plugins = require("../../utils/plugins");

var components = {
  BButtonGroup: _buttonGroup.default,
  BBtnGroup: _buttonGroup.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;