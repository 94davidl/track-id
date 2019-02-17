"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _button = _interopRequireDefault(require("./button"));

var _buttonClose = _interopRequireDefault(require("./button-close"));

var _plugins = require("../../utils/plugins");

var components = {
  BButton: _button.default,
  BBtn: _button.default,
  BButtonClose: _buttonClose.default,
  BBtnClose: _buttonClose.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;