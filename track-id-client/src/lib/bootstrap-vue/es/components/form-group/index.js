"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formGroup = _interopRequireDefault(require("./form-group"));

var _plugins = require("../../utils/plugins");

var components = {
  BFormGroup: _formGroup.default,
  BFormFieldset: _formGroup.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;