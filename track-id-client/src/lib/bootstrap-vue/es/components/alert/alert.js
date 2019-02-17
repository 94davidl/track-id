"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buttonClose = _interopRequireDefault(require("../button/button-close"));

// @vue/component
var _default = {
  name: 'BAlert',
  components: {
    BButtonClose: _buttonClose.default
  },
  model: {
    prop: 'show',
    event: 'input'
  },
  props: {
    variant: {
      type: String,
      default: 'info'
    },
    dismissible: {
      type: Boolean,
      default: false
    },
    dismissLabel: {
      type: String,
      default: 'Close'
    },
    show: {
      type: [Boolean, Number],
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      countDownTimerId: null,
      dismissed: false
    };
  },
  computed: {
    classObject: function classObject() {
      return ['alert', this.alertVariant, this.dismissible ? 'alert-dismissible' : ''];
    },
    alertVariant: function alertVariant() {
      var variant = this.variant;
      return "alert-".concat(variant);
    },
    localShow: function localShow() {
      return !this.dismissed && (this.countDownTimerId || this.show);
    }
  },
  watch: {
    show: function show() {
      this.showChanged();
    }
  },
  mounted: function mounted() {
    this.showChanged();
  },
  destroyed
  /* istanbul ignore next */
  : function destroyed() {
    this.clearCounter();
  },
  methods: {
    dismiss: function dismiss() {
      this.clearCounter();
      this.dismissed = true;
      this.$emit('dismissed');
      this.$emit('input', false);

      if (typeof this.show === 'number') {
        this.$emit('dismiss-count-down', 0);
        this.$emit('input', 0);
      } else {
        this.$emit('input', false);
      }
    },
    clearCounter: function clearCounter() {
      if (this.countDownTimerId) {
        clearInterval(this.countDownTimerId);
        this.countDownTimerId = null;
      }
    },
    showChanged: function showChanged() {
      var _this = this;

      // Reset counter status
      this.clearCounter(); // Reset dismiss status

      this.dismissed = false; // No timer for boolean values

      if (this.show === true || this.show === false || this.show === null || this.show === 0) {
        return;
      } // Start counter (ensure we have an integer value)


      var dismissCountDown = parseInt(this.show, 10) || 1;
      this.countDownTimerId = setInterval(function () {
        if (dismissCountDown < 1) {
          _this.dismiss();

          return;
        }

        dismissCountDown--;

        _this.$emit('dismiss-count-down', dismissCountDown);

        _this.$emit('input', dismissCountDown);
      }, 1000);
    }
  },
  render: function render(h) {
    if (!this.localShow) {
      // If not showing, render placeholder
      return h(false);
    }

    var dismissBtn = h(false);

    if (this.dismissible) {
      // Add dismiss button
      dismissBtn = h('b-button-close', {
        attrs: {
          'aria-label': this.dismissLabel
        },
        on: {
          click: this.dismiss
        }
      }, [this.$slots.dismiss]);
    }

    var alert = h('div', {
      class: this.classObject,
      attrs: {
        role: 'alert',
        'aria-live': 'polite',
        'aria-atomic': true
      }
    }, [dismissBtn, this.$slots.default]);
    return !this.fade ? alert : h('transition', {
      props: {
        name: 'fade',
        appear: true
      }
    }, [alert]);
  }
};
exports.default = _default;