"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _pluckProps = _interopRequireDefault(require("../../utils/pluck-props"));

var _object = require("../../utils/object");

var _link = _interopRequireWildcard(require("../link/link"));

var _html = require("../../utils/html");

var props = (0, _object.assign)((0, _link.propsFactory)(), {
  text: {
    type: String,
    default: null
  },
  html: {
    type: String,
    default: null
  },
  active: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: '#'
  },
  ariaCurrent: {
    type: String,
    default: 'location'
  }
}); // @vue/component

exports.props = props;
var _default = {
  name: 'BBreadcrumbLink',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var suppliedProps = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var tag = suppliedProps.active ? 'span' : _link.default;
    var componentData = {
      props: (0, _pluckProps.default)(props, suppliedProps)
    };

    if (suppliedProps.active) {
      componentData.attrs = {
        'aria-current': suppliedProps.ariaCurrent
      };
    } else {
      componentData.attrs = {
        href: suppliedProps.href
      };
    }

    if (!children) {
      componentData.domProps = (0, _html.htmlOrText)(suppliedProps.html, suppliedProps.text);
    }

    return h(tag, (0, _vueFunctionalDataMerge.mergeData)(data, componentData), children);
  }
};
exports.default = _default;