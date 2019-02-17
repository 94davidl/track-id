"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _listGroup = _interopRequireDefault(require("./list-group"));

var _listGroupItem = _interopRequireDefault(require("./list-group-item"));

var _plugins = require("../../utils/plugins");

var components = {
  BListGroup: _listGroup.default,
  BListGroupItem: _listGroupItem.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;