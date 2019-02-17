"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.props = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _pluckProps = _interopRequireDefault(require("../../utils/pluck-props"));

var _object = require("../../utils/object");

var _array = require("../../utils/array");

var _link = _interopRequireWildcard(require("../link/link"));

var actionTags = ['a', 'router-link', 'button', 'b-link'];
var linkProps = (0, _link.propsFactory)();
delete linkProps.href.default;
delete linkProps.to.default;
var props = (0, _object.assign)({
  tag: {
    type: String,
    default: 'div'
  },
  action: {
    type: Boolean,
    default: null
  },
  button: {
    type: Boolean,
    default: null
  },
  variant: {
    type: String,
    default: null
  }
}, linkProps); // @vue/component

exports.props = props;
var _default = {
  name: 'BListGroupItem',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var tag = props.button ? 'button' : !props.href && !props.to ? props.tag : _link.default;
    var isAction = Boolean(props.href || props.to || props.action || props.button || (0, _array.arrayIncludes)(actionTags, props.tag));
    var attrs = {};
    var itemProps = {};

    if (tag === 'button') {
      if (!data.attrs || !data.attrs.type) {
        // Add a type for button is one not provided in passed attributes
        attrs.type = 'button';
      }

      if (props.disabled) {
        // Set disabled attribute if button and disabled
        attrs.disabled = true;
      }
    } else {
      itemProps = (0, _pluckProps.default)(linkProps, props);
    }

    var componentData = {
      attrs: attrs,
      props: itemProps,
      staticClass: 'list-group-item',
      class: (_class = {}, (0, _defineProperty2.default)(_class, "list-group-item-".concat(props.variant), Boolean(props.variant)), (0, _defineProperty2.default)(_class, 'list-group-item-action', isAction), (0, _defineProperty2.default)(_class, "active", props.active), (0, _defineProperty2.default)(_class, "disabled", props.disabled), _class)
    };
    return h(tag, (0, _vueFunctionalDataMerge.mergeData)(data, componentData), children);
  }
};
exports.default = _default;