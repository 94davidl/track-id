"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _container = _interopRequireDefault(require("./container"));

var _row = _interopRequireDefault(require("./row"));

var _col = _interopRequireDefault(require("./col"));

var _formRow = _interopRequireDefault(require("./form-row"));

var _plugins = require("../../utils/plugins");

var components = {
  BContainer: _container.default,
  BRow: _row.default,
  BCol: _col.default,
  BFormRow: _formRow.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;