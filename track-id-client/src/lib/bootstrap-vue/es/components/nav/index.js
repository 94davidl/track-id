"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nav = _interopRequireDefault(require("./nav"));

var _navItem = _interopRequireDefault(require("./nav-item"));

var _navText = _interopRequireDefault(require("./nav-text"));

var _navForm = _interopRequireDefault(require("./nav-form"));

var _navItemDropdown = _interopRequireDefault(require("./nav-item-dropdown"));

var _dropdown = _interopRequireDefault(require("../dropdown"));

var _plugins = require("../../utils/plugins");

var components = {
  BNav: _nav.default,
  BNavItem: _navItem.default,
  BNavText: _navText.default,
  BNavForm: _navForm.default,
  BNavItemDropdown: _navItemDropdown.default,
  BNavItemDd: _navItemDropdown.default,
  BNavDropdown: _navItemDropdown.default,
  BNavDd: _navItemDropdown.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
    Vue.use(_dropdown.default);
  }
};
exports.default = _default;