"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _form = _interopRequireWildcard(require("../form/form"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _default = {
  name: 'BDropdownForm',
  functional: true,
  props: (0, _objectSpread2.default)({}, _form.props),
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(_form.default, (0, _vueFunctionalDataMerge.mergeData)(data, {
      props: props,
      staticClass: 'b-dropdown-form'
    }), children);
  }
};
exports.default = _default;