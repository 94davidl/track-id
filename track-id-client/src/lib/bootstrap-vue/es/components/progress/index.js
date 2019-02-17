"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _progress = _interopRequireDefault(require("./progress"));

var _progressBar = _interopRequireDefault(require("./progress-bar"));

var _plugins = require("../../utils/plugins");

var components = {
  BProgress: _progress.default,
  BProgressBar: _progressBar.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;