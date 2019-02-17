"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _media = _interopRequireDefault(require("./media"));

var _mediaAside = _interopRequireDefault(require("./media-aside"));

var _mediaBody = _interopRequireDefault(require("./media-body"));

var _plugins = require("../../utils/plugins");

var components = {
  BMedia: _media.default,
  BMediaAside: _mediaAside.default,
  BMediaBody: _mediaBody.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;