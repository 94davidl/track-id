"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.props = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var props = {
  tag: {
    type: String,
    default: 'div'
  },
  flush: {
    type: Boolean,
    default: false
  },
  horizontal: {
    type: [Boolean, String],
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BListGroup',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var horizontal = props.horizontal === '' ? true : props.horizontal;
    horizontal = props.flush ? false : horizontal;
    var componentData = {
      staticClass: 'list-group',
      class: (0, _defineProperty2.default)({
        'list-group-flush': props.flush,
        'list-group-horizontal': horizontal === true
      }, "list-group-horizontal-".concat(horizontal), typeof horizontal === 'string')
    };
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, componentData), children);
  }
};
exports.default = _default;