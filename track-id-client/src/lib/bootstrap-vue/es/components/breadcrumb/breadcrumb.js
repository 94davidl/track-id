"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.props = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _array = require("../../utils/array");

var _object = require("../../utils/object");

var _breadcrumbItem = _interopRequireDefault(require("./breadcrumb-item"));

var props = {
  items: {
    type: Array,
    default: null
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BBreadcrumb',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var childNodes = children; // Build child nodes from items if given.

    if ((0, _array.isArray)(props.items)) {
      var activeDefined = false;
      childNodes = props.items.map(function (item, idx) {
        if ((0, _typeof2.default)(item) !== 'object') {
          item = {
            text: item
          };
        } // Copy the value here so we can normalize it.


        var active = item.active;

        if (active) {
          activeDefined = true;
        }

        if (!active && !activeDefined) {
          // Auto-detect active by position in list.
          active = idx + 1 === props.items.length;
        }

        return h(_breadcrumbItem.default, {
          props: (0, _object.assign)({}, item, {
            active: active
          })
        });
      });
    }

    return h('ol', (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'breadcrumb'
    }), childNodes);
  }
};
exports.default = _default;