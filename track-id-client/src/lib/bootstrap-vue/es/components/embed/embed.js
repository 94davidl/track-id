"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.props = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _array = require("../../utils/array");

var props = {
  type: {
    type: String,
    default: 'iframe',
    validator: function validator(str) {
      return (0, _array.arrayIncludes)(['iframe', 'embed', 'video', 'object', 'img', 'b-img', 'b-img-lazy'], str);
    }
  },
  tag: {
    type: String,
    default: 'div'
  },
  aspect: {
    type: String,
    default: '16by9'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BEmbed',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, {
      ref: data.ref,
      staticClass: 'embed-responsive',
      class: (0, _defineProperty2.default)({}, "embed-responsive-".concat(props.aspect), Boolean(props.aspect))
    }, [h(props.type, (0, _vueFunctionalDataMerge.mergeData)(data, {
      ref: '',
      staticClass: 'embed-responsive-item'
    }), children)]);
  }
};
exports.default = _default;