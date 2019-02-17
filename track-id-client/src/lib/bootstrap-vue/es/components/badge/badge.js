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

var linkProps = (0, _link.propsFactory)();
delete linkProps.href.default;
delete linkProps.to.default;
var props = (0, _object.assign)(linkProps, {
  tag: {
    type: String,
    default: 'span'
  },
  variant: {
    type: String,
    default: 'secondary'
  },
  pill: {
    type: Boolean,
    default: false
  }
}); // @vue/component

exports.props = props;
var _default = {
  name: 'BBadge',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var tag = !props.href && !props.to ? props.tag : _link.default;
    var componentData = {
      staticClass: 'badge',
      class: [!props.variant ? 'badge-secondary' : "badge-".concat(props.variant), {
        'badge-pill': Boolean(props.pill),
        active: props.active,
        disabled: props.disabled
      }],
      props: (0, _pluckProps.default)(linkProps, props)
    };
    return h(tag, (0, _vueFunctionalDataMerge.mergeData)(data, componentData), children);
  }
};
exports.default = _default;