"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _navbar = _interopRequireDefault(require("./navbar"));

var _navbarNav = _interopRequireDefault(require("./navbar-nav"));

var _navbarBrand = _interopRequireDefault(require("./navbar-brand"));

var _navbarToggle = _interopRequireDefault(require("./navbar-toggle"));

var _nav = _interopRequireDefault(require("../nav"));

var _collapse = _interopRequireDefault(require("../collapse"));

var _dropdown = _interopRequireDefault(require("../dropdown"));

var _plugins = require("../../utils/plugins");

var components = {
  BNavbar: _navbar.default,
  BNavbarNav: _navbarNav.default,
  BNavbarBrand: _navbarBrand.default,
  BNavbarToggle: _navbarToggle.default,
  BNavToggle: _navbarToggle.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
    Vue.use(_nav.default);
    Vue.use(_collapse.default);
    Vue.use(_dropdown.default);
  }
};
exports.default = _default;