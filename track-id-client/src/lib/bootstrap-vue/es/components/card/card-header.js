"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.props = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _prefixPropName = _interopRequireDefault(require("../../utils/prefix-prop-name"));

var _copyProps = _interopRequireDefault(require("../../utils/copyProps"));

var _object = require("../../utils/object");

var _html = require("../../utils/html");

var _cardMixin = _interopRequireDefault(require("../../mixins/card-mixin"));

var props = (0, _object.assign)({}, (0, _copyProps.default)(_cardMixin.default.props, _prefixPropName.default.bind(null, 'header')), {
  header: {
    type: String,
    default: null
  },
  headerHTML: {
    type: String,
    default: null
  },
  headerClass: {
    type: [String, Object, Array],
    default: null
  }
}); // @vue/component

exports.props = props;
var _default = {
  name: 'BCardHeader',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.headerTag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card-header',
      class: [props.headerClass, (_ref2 = {}, (0, _defineProperty2.default)(_ref2, "bg-".concat(props.headerBgVariant), Boolean(props.headerBgVariant)), (0, _defineProperty2.default)(_ref2, "border-".concat(props.headerBorderVariant), Boolean(props.headerBorderVariant)), (0, _defineProperty2.default)(_ref2, "text-".concat(props.headerTextVariant), Boolean(props.headerTextVariant)), _ref2)]
    }), children || [h('div', {
      domProps: (0, _html.htmlOrText)(props.headerHTML, props.header)
    })]);
  }
};
exports.default = _default;