"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _plugins = require("../../utils/plugins");

var _inputGroup = _interopRequireDefault(require("./input-group"));

var _inputGroupAddon = _interopRequireDefault(require("./input-group-addon"));

var _inputGroupPrepend = _interopRequireDefault(require("./input-group-prepend"));

var _inputGroupAppend = _interopRequireDefault(require("./input-group-append"));

var _inputGroupText = _interopRequireDefault(require("./input-group-text"));

var components = {
  BInputGroup: _inputGroup.default,
  BInputGroupAddon: _inputGroupAddon.default,
  BInputGroupPrepend: _inputGroupPrepend.default,
  BInputGroupAppend: _inputGroupAppend.default,
  BInputGroupText: _inputGroupText.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;