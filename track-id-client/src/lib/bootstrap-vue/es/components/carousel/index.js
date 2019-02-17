"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _carousel = _interopRequireDefault(require("./carousel"));

var _carouselSlide = _interopRequireDefault(require("./carousel-slide"));

var _plugins = require("../../utils/plugins");

var components = {
  BCarousel: _carousel.default,
  BCarouselSlide: _carouselSlide.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;