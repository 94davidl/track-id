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

var _unprefixPropName = _interopRequireDefault(require("../../utils/unprefix-prop-name"));

var _copyProps = _interopRequireDefault(require("../../utils/copyProps"));

var _pluckProps = _interopRequireDefault(require("../../utils/pluck-props"));

var _object = require("../../utils/object");

var _cardMixin = _interopRequireDefault(require("../../mixins/card-mixin"));

var _cardBody = _interopRequireWildcard(require("./card-body"));

var _cardHeader = _interopRequireWildcard(require("./card-header"));

var _cardFooter = _interopRequireWildcard(require("./card-footer"));

var _cardImg = _interopRequireWildcard(require("./card-img"));

var cardImgProps = (0, _copyProps.default)(_cardImg.props, _prefixPropName.default.bind(null, 'img'));
cardImgProps.imgSrc.required = false;
var props = (0, _object.assign)({}, _cardBody.props, _cardHeader.props, _cardFooter.props, cardImgProps, (0, _copyProps.default)(_cardMixin.default.props), {
  align: {
    type: String,
    default: null
  },
  noBody: {
    type: Boolean,
    default: false
  }
}); // @vue/component

exports.props = props;
var _default = {
  name: 'BCard',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;
    var $slots = slots(); // Create placeholder elements for each section

    var imgFirst = h(false);
    var header = h(false);
    var content = h(false);
    var footer = h(false);
    var imgLast = h(false);

    if (props.imgSrc) {
      var img = h(_cardImg.default, {
        props: (0, _pluckProps.default)(cardImgProps, props, _unprefixPropName.default.bind(null, 'img'))
      });

      if (props.imgBottom) {
        imgLast = img;
      } else {
        imgFirst = img;
      }
    }

    if (props.header || $slots.header) {
      header = h(_cardHeader.default, {
        props: (0, _pluckProps.default)(_cardHeader.props, props)
      }, $slots.header);
    }

    if (props.noBody) {
      content = $slots.default;
    } else {
      // Wrap content in card-body
      content = [h(_cardBody.default, {
        props: (0, _pluckProps.default)(_cardBody.props, props)
      }, $slots.default)];
    }

    if (props.footer || $slots.footer) {
      footer = h(_cardFooter.default, {
        props: (0, _pluckProps.default)(_cardFooter.props, props)
      }, $slots.footer);
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card',
      class: (_class = {
        'flex-row': props.imgLeft || props.imgStart,
        'flex-row-reverse': (props.imgRight || props.imgEnd) && !(props.imgLeft || props.imgStart)
      }, (0, _defineProperty2.default)(_class, "text-".concat(props.align), Boolean(props.align)), (0, _defineProperty2.default)(_class, "bg-".concat(props.bgVariant), Boolean(props.bgVariant)), (0, _defineProperty2.default)(_class, "border-".concat(props.borderVariant), Boolean(props.borderVariant)), (0, _defineProperty2.default)(_class, "text-".concat(props.textVariant), Boolean(props.textVariant)), _class)
    }), [imgFirst, header].concat((0, _toConsumableArray2.default)(content), [footer, imgLast]));
  }
};
exports.default = _default;