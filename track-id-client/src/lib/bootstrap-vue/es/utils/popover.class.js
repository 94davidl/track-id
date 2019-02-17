"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _tooltip = _interopRequireDefault(require("./tooltip.class"));

var _object = require("./object");

var _dom = require("./dom");

var NAME = 'popover';
var CLASS_PREFIX = 'bs-popover';
var BSCLS_PREFIX_REGEX = new RegExp("\\b".concat(CLASS_PREFIX, "\\S+"), 'g');
var Defaults = (0, _object.assign)({}, _tooltip.default.Default, {
  placement: 'right',
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
});
var ClassName = {
  FADE: 'fade',
  SHOW: 'show'
};
var Selector = {
  TITLE: '.popover-header',
  CONTENT: '.popover-body'
  /* istanbul ignore next: dificult to test in Jest/JSDOM environment */

};

var PopOver =
/*#__PURE__*/
function (_ToolTip) {
  (0, _inherits2.default)(PopOver, _ToolTip);

  function PopOver() {
    (0, _classCallCheck2.default)(this, PopOver);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PopOver).apply(this, arguments));
  }

  (0, _createClass2.default)(PopOver, [{
    key: "isWithContent",
    // Method overrides
    value: function isWithContent(tip) {
      tip = tip || this.$tip;

      if (!tip) {
        return false;
      }

      var hasTitle = Boolean(((0, _dom.select)(Selector.TITLE, tip) || {}).innerHTML);
      var hasContent = Boolean(((0, _dom.select)(Selector.CONTENT, tip) || {}).innerHTML);
      return hasTitle || hasContent;
    }
  }, {
    key: "addAttachmentClass",
    value: function addAttachmentClass(attachment) {
      (0, _dom.addClass)(this.getTipElement(), "".concat(CLASS_PREFIX, "-").concat(attachment));
    }
  }, {
    key: "setContent",
    value: function setContent(tip) {
      // we use append for html objects to maintain js events/components
      this.setElementContent((0, _dom.select)(Selector.TITLE, tip), this.getTitle());
      this.setElementContent((0, _dom.select)(Selector.CONTENT, tip), this.getContent());
      (0, _dom.removeClass)(tip, ClassName.FADE);
      (0, _dom.removeClass)(tip, ClassName.SHOW);
    } // This method may look identical to ToolTip version, but it uses a different RegEx defined above

  }, {
    key: "cleanTipClass",
    value: function cleanTipClass() {
      var tip = this.getTipElement();
      var tabClass = tip.className.match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.forEach(function (cls) {
          (0, _dom.removeClass)(tip, cls);
        });
      }
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var title = this.$config.title || '';

      if (typeof title === 'function') {
        title = title(this.$element);
      }

      if ((0, _typeof2.default)(title) === 'object' && title.nodeType && !title.innerHTML.trim()) {
        // We have a dom node, but without inner content, so just return an empty string
        title = '';
      }

      if (typeof title === 'string') {
        title = title.trim();
      }

      if (!title) {
        // Try and grab element's title attribute
        title = (0, _dom.getAttr)(this.$element, 'title') || (0, _dom.getAttr)(this.$element, 'data-original-title') || '';
        title = title.trim();
      }

      return title;
    } // New methods

  }, {
    key: "getContent",
    value: function getContent() {
      var content = this.$config.content || '';

      if (typeof content === 'function') {
        content = content(this.$element);
      }

      if ((0, _typeof2.default)(content) === 'object' && content.nodeType && !content.innerHTML.trim()) {
        // We have a dom node, but without inner content, so just return an empty string
        content = '';
      }

      if (typeof content === 'string') {
        content = content.trim();
      }

      return content;
    }
  }], [{
    key: "Default",
    // Getter overrides
    get: function get() {
      return Defaults;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME;
    }
  }]);
  return PopOver;
}(_tooltip.default);

var _default = PopOver;
exports.default = _default;