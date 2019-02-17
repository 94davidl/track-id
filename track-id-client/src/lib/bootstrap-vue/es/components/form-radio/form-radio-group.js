"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _id = _interopRequireDefault(require("../../mixins/id"));

var _form = _interopRequireDefault(require("../../mixins/form"));

var _formOptions = _interopRequireDefault(require("../../mixins/form-options"));

var _formRadioCheckGroup = _interopRequireDefault(require("../../mixins/form-radio-check-group"));

var _formSize = _interopRequireDefault(require("../../mixins/form-size"));

var _formState = _interopRequireDefault(require("../../mixins/form-state"));

var _formRadio = _interopRequireDefault(require("./form-radio"));

// @vue/component
var _default = {
  name: 'BFormRadioGroup',
  components: {
    BFormRadio: _formRadio.default
  },
  mixins: [_id.default, _form.default, _formRadioCheckGroup.default, // includes render function
  _formOptions.default, _formSize.default, _formState.default],
  provide: function provide() {
    return {
      bvRadioGroup: this
    };
  },
  props: {
    checked: {
      type: [String, Object, Number, Boolean],
      default: null
    }
  },
  data: function data() {
    return {
      localChecked: this.checked
    };
  },
  computed: {
    is_RadioGroup: function is_RadioGroup() {
      return true;
    }
  }
};
exports.default = _default;