"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formInput = _interopRequireDefault(require("./form-input"));

var _plugins = require("../../utils/plugins");

var components = {
  BFormInput: _formInput.default,
  BInput: _formInput.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;