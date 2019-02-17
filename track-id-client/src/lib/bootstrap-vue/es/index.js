"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var componentPlugins = _interopRequireWildcard(require("./components"));

var directivePlugins = _interopRequireWildcard(require("./directives"));

var _plugins = require("./utils/plugins");

var VuePlugin = {
  install: function install(Vue) {
    if (Vue._bootstrap_vue_installed) {
      return;
    }

    Vue._bootstrap_vue_installed = true; // Register component plugins

    for (var plugin in componentPlugins) {
      Vue.use(componentPlugins[plugin]);
    } // Register directive plugins


    for (var _plugin in directivePlugins) {
      Vue.use(directivePlugins[_plugin]);
    }
  }
};
(0, _plugins.vueUse)(VuePlugin);
var _default = VuePlugin;
exports.default = _default;