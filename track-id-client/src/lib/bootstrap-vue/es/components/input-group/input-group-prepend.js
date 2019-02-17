"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _inputGroupAddon = _interopRequireWildcard(require("./input-group-addon"));

// @vue/component
var _default = {
  name: 'BInputGroupPrepend',
  functional: true,
  props: _inputGroupAddon.commonProps,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    // pass all our props/attrs down to child, and set`append` to false
    return h(_inputGroupAddon.default, (0, _vueFunctionalDataMerge.mergeData)(data, {
      props: (0, _objectSpread2.default)({}, props, {
        append: false
      })
    }), children);
  }
};
exports.default = _default;