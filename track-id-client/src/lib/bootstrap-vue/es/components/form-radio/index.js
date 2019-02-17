"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formRadio = _interopRequireDefault(require("./form-radio"));

var _formRadioGroup = _interopRequireDefault(require("./form-radio-group"));

var _plugins = require("../../utils/plugins");

var components = {
  BFormRadio: _formRadio.default,
  BRadio: _formRadio.default,
  BFormRadioGroup: _formRadioGroup.default,
  BRadioGroup: _formRadioGroup.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;