"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _img = _interopRequireDefault(require("./img"));

var _imgLazy = _interopRequireDefault(require("./img-lazy"));

var _plugins = require("../../utils/plugins");

var components = {
  BImg: _img.default,
  BImgLazy: _imgLazy.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;