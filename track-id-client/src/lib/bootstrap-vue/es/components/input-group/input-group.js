"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.props = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _inputGroupPrepend = _interopRequireDefault(require("./input-group-prepend"));

var _inputGroupAppend = _interopRequireDefault(require("./input-group-append"));

var _inputGroupText = _interopRequireDefault(require("./input-group-text"));

var _html = require("../../utils/html");

var props = {
  id: {
    type: String
  },
  size: {
    type: String
  },
  prepend: {
    type: String
  },
  prependHTML: {
    type: String
  },
  append: {
    type: String
  },
  appendHTML: {
    type: String
  },
  tag: {
    type: String,
    default: 'div'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BInputGroup',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;
    var $slots = slots();
    var childNodes = []; // Prepend prop

    if (props.prepend) {
      childNodes.push(h(_inputGroupPrepend.default, [h(_inputGroupText.default, {
        domProps: (0, _html.htmlOrText)(props.prependHTML, props.prepend)
      })]));
    } else {
      childNodes.push(h(false));
    } // Prepend slot


    if ($slots.prepend) {
      childNodes.push(h(_inputGroupPrepend.default, $slots.prepend));
    } else {
      childNodes.push(h(false));
    } // Default slot


    if ($slots.default) {
      childNodes.push.apply(childNodes, (0, _toConsumableArray2.default)($slots.default));
    } else {
      childNodes.push(h(false));
    } // Append prop


    if (props.append) {
      childNodes.push(h(_inputGroupAppend.default, [h(_inputGroupText.default, {
        domProps: (0, _html.htmlOrText)(props.appendHTML, props.append)
      })]));
    } else {
      childNodes.push(h(false));
    } // Append slot


    if ($slots.append) {
      childNodes.push(h(_inputGroupAppend.default, $slots.append));
    } else {
      childNodes.push(h(false));
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'input-group',
      class: (0, _defineProperty2.default)({}, "input-group-".concat(props.size), Boolean(props.size)),
      attrs: {
        id: props.id || null,
        role: 'group'
      }
    }), childNodes);
  }
};
exports.default = _default;