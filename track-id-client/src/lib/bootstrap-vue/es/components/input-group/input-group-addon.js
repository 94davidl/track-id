"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.commonProps = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _inputGroupText = _interopRequireDefault(require("./input-group-text"));

var commonProps = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  },
  isText: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.commonProps = commonProps;
var _default = {
  name: 'BInputGroupAddon',
  functional: true,
  props: (0, _objectSpread2.default)({}, commonProps, {
    append: {
      type: Boolean,
      default: false
    }
  }),
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: {
        'input-group-append': props.append,
        'input-group-prepend': !props.append
      },
      attrs: {
        id: props.id
      }
    }), props.isText ? [h(_inputGroupText.default, children)] : children);
  }
};
exports.default = _default;