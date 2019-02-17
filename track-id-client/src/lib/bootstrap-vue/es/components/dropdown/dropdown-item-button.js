"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.props = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var props = {
  active: {
    type: Boolean,
    default: false
  },
  activeClass: {
    type: String,
    default: 'active'
  },
  disabled: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BDropdownItemButton',
  inject: {
    dropdown: {
      from: 'dropdown',
      default: null
    }
  },
  props: props,
  methods: {
    closeDropdown: function closeDropdown() {
      if (this.dropdown) {
        this.dropdown.hide(true);
      }
    },
    onClick: function onClick(evt) {
      this.$emit('click', evt);
      this.closeDropdown();
    }
  },
  render: function render(h) {
    return h('button', {
      staticClass: 'dropdown-item',
      class: (0, _defineProperty2.default)({}, this.activeClass, this.active),
      attrs: {
        role: 'menuitem',
        type: 'button',
        disabled: this.disabled
      },
      on: {
        click: this.onClick
      }
    }, this.$slots.default);
  }
};
exports.default = _default;