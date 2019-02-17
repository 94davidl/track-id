"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _breadcrumb = _interopRequireDefault(require("./breadcrumb"));

var _breadcrumbItem = _interopRequireDefault(require("./breadcrumb-item"));

var _breadcrumbLink = _interopRequireDefault(require("./breadcrumb-link"));

var _plugins = require("../../utils/plugins");

var components = {
  BBreadcrumb: _breadcrumb.default,
  BBreadcrumbItem: _breadcrumbItem.default,
  BBreadcrumbLink: _breadcrumbLink.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;