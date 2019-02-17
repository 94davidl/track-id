"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _id = _interopRequireDefault(require("../../mixins/id"));

var _form = _interopRequireDefault(require("../../mixins/form"));

var _formSize = _interopRequireDefault(require("../../mixins/form-size"));

var _formState = _interopRequireDefault(require("../../mixins/form-state"));

var _formText = _interopRequireDefault(require("../../mixins/form-text"));

var _formSelection = _interopRequireDefault(require("../../mixins/form-selection"));

var _formValidity = _interopRequireDefault(require("../../mixins/form-validity"));

var _array = require("../../utils/array");

var _dom = require("../../utils/dom");

// Valid supported input types
var TYPES = ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'range', 'color', 'date', 'time', 'datetime', 'datetime-local', 'month', 'week']; // @vue/component

var _default = {
  name: 'BFormInput',
  mixins: [_id.default, _form.default, _formSize.default, _formState.default, _formText.default, _formSelection.default, _formValidity.default],
  props: {
    type: {
      type: String,
      default: 'text',
      validator: function validator(type) {
        return (0, _array.arrayIncludes)(TYPES, type);
      }
    },
    noWheel: {
      // Disable mousewheel to prevent wheel from changing values (i.e. number/date).
      type: Boolean,
      default: false
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    step: {
      type: [String, Number],
      default: null
    }
  },
  computed: {
    localType: function localType() {
      // We only allow certain types
      return (0, _array.arrayIncludes)(TYPES, this.type) ? this.type : 'text';
    }
  },
  watch: {
    noWheel: function noWheel(newVal) {
      this.setWheelStopper(newVal);
    }
  },
  mounted: function mounted() {
    this.setWheelStopper(this.noWheel);
  },
  deactivated: function deactivated() {
    // Turn off listeners when keep-alive component deactivated

    /* istanbul ignore next */
    this.setWheelStopper(false);
  },
  activated: function activated() {
    // Turn on listeners (if no-wheel) when keep-alive component activated

    /* istanbul ignore next */
    this.setWheelStopper(this.noWheel);
  },
  beforeDestroy: function beforeDestroy() {
    /* istanbul ignore next */
    this.setWheelStopper(false);
  },
  methods: {
    setWheelStopper: function setWheelStopper(on) {
      var input = this.$el; // We use native events, so that we don't interfere with propgation

      if (on) {
        (0, _dom.eventOn)(input, 'focus', this.onWheelFocus);
        (0, _dom.eventOn)(input, 'blur', this.onWheelBlur);
      } else {
        (0, _dom.eventOff)(input, 'focus', this.onWheelFocus);
        (0, _dom.eventOff)(input, 'blur', this.onWheelBlur);
        (0, _dom.eventOff)(document, 'wheel', this.stopWheel);
      }
    },
    onWheelFocus: function onWheelFocus(evt) {
      (0, _dom.eventOn)(document, 'wheel', this.stopWheel);
    },
    onWheelBlur: function onWheelBlur(evt) {
      (0, _dom.eventOff)(document, 'wheel', this.stopWheel);
    },
    stopWheel: function stopWheel(evt) {
      evt.preventDefault();
      this.$el.blur();
    }
  },
  render: function render(h) {
    var self = this;
    return h('input', {
      ref: 'input',
      class: self.computedClass,
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: self.localValue,
        expression: 'localValue'
      }],
      attrs: {
        id: self.safeId(),
        name: self.name,
        form: self.form || null,
        type: self.localType,
        disabled: self.disabled,
        placeholder: self.placeholder,
        required: self.required,
        autocomplete: self.autocomplete || null,
        readonly: self.readonly || self.plaintext,
        min: self.min,
        max: self.max,
        step: self.step,
        'aria-required': self.required ? 'true' : null,
        'aria-invalid': self.computedAriaInvalid
      },
      domProps: {
        value: self.localValue
      },
      on: (0, _objectSpread2.default)({}, self.$listeners, {
        input: self.onInput,
        change: self.onChange,
        blur: self.onBlur
      })
    });
  }
};
exports.default = _default;