"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _object = require("../../utils/object");

var _breadcrumbLink = _interopRequireWildcard(require("./breadcrumb-link"));

var props = (0, _object.assign)({}, _breadcrumbLink.props, {
  text: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  }
}); // @vue/component

exports.props = props;
var _default = {
  name: 'BBreadcrumbItem',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('li', (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'breadcrumb-item',
      class: {
        active: props.active
      },
      attrs: {
        role: 'presentation'
      }
    }), [h(_breadcrumbLink.default, {
      props: props
    }, children)]);
  }
};
exports.default = _default;