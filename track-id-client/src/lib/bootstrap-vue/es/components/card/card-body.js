"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.props = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _prefixPropName = _interopRequireDefault(require("../../utils/prefix-prop-name"));

var _copyProps = _interopRequireDefault(require("../../utils/copyProps"));

var _pluckProps = _interopRequireDefault(require("../../utils/pluck-props"));

var _object = require("../../utils/object");

var _cardMixin = _interopRequireDefault(require("../../mixins/card-mixin"));

var _cardTitle = _interopRequireWildcard(require("./card-title"));

var _cardSubTitle = _interopRequireWildcard(require("./card-sub-title"));

var props = (0, _object.assign)({}, // Import common card props and prefix them with `body-`
(0, _copyProps.default)(_cardMixin.default.props, _prefixPropName.default.bind(null, 'body')), {
  bodyClass: {
    type: [String, Object, Array],
    default: null
  }
}, _cardTitle.props, _cardSubTitle.props, {
  overlay: {
    type: Boolean,
    default: false
  }
}); // @vue/component

exports.props = props;
var _default = {
  name: 'BCardBody',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var cardTitle = h(false);
    var cardSubTitle = h(false);
    var cardContent = children || [h(false)];

    if (props.title) {
      cardTitle = h(_cardTitle.default, {
        props: (0, _pluckProps.default)(_cardTitle.props, props)
      });
    }

    if (props.subTitle) {
      cardSubTitle = h(_cardSubTitle.default, {
        props: (0, _pluckProps.default)(_cardSubTitle.props, props),
        class: ['mb-2']
      });
    }

    return h(props.bodyTag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card-body',
      class: [(_ref2 = {
        'card-img-overlay': props.overlay
      }, (0, _defineProperty2.default)(_ref2, "bg-".concat(props.bodyBgVariant), Boolean(props.bodyBgVariant)), (0, _defineProperty2.default)(_ref2, "border-".concat(props.bodyBorderVariant), Boolean(props.bodyBorderVariant)), (0, _defineProperty2.default)(_ref2, "text-".concat(props.bodyTextVariant), Boolean(props.bodyTextVariant)), _ref2), props.bodyClass || {}]
    }), [cardTitle, cardSubTitle].concat((0, _toConsumableArray2.default)(cardContent)));
  }
};
exports.default = _default;