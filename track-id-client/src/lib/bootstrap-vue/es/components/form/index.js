"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _form = _interopRequireDefault(require("./form"));

var _formRow = _interopRequireDefault(require("./form-row"));

var _formText = _interopRequireDefault(require("./form-text"));

var _formInvalidFeedback = _interopRequireDefault(require("./form-invalid-feedback"));

var _formValidFeedback = _interopRequireDefault(require("./form-valid-feedback"));

var _plugins = require("../../utils/plugins");

var components = {
  BForm: _form.default,
  BFormRow: _formRow.default,
  BFormText: _formText.default,
  BFormInvalidFeedback: _formInvalidFeedback.default,
  BFormFeedback: _formInvalidFeedback.default,
  BFormValidFeedback: _formValidFeedback.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;