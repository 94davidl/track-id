"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formFile = _interopRequireDefault(require("./form-file"));

var _plugins = require("../../utils/plugins");

var components = {
  BFormFile: _formFile.default,
  BFile: _formFile.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;