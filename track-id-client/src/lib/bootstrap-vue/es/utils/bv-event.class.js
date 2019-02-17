"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _object = require("../utils/object");

var BvEvent =
/*#__PURE__*/
function () {
  function BvEvent(type) {
    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, BvEvent);

    // Start by emulating native Event constructor.
    if (!type) {
      throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, " given."));
    } // Assign defaults first, the eventInit,
    // and the type last so it can't be overwritten.


    (0, _object.assign)(this, BvEvent.defaults(), eventInit, {
      type: type
    }); // Freeze some props as readonly, but leave them enumerable.

    (0, _object.defineProperties)(this, {
      type: (0, _object.readonlyDescriptor)(),
      cancelable: (0, _object.readonlyDescriptor)(),
      nativeEvent: (0, _object.readonlyDescriptor)(),
      target: (0, _object.readonlyDescriptor)(),
      relatedTarget: (0, _object.readonlyDescriptor)(),
      vueTarget: (0, _object.readonlyDescriptor)()
    }); // Create a private variable using closure scoping.

    var defaultPrevented = false; // Recreate preventDefault method. One way setter.

    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    }; // Create 'defaultPrevented' publicly accessible prop
    // that can only be altered by the preventDefault method.


    (0, _object.defineProperty)(this, 'defaultPrevented', {
      enumerable: true,
      get: function get() {
        return defaultPrevented;
      }
    });
  }

  (0, _createClass2.default)(BvEvent, null, [{
    key: "defaults",
    value: function defaults() {
      return {
        type: '',
        cancelable: true,
        nativeEvent: null,
        target: null,
        relatedTarget: null,
        vueTarget: null
      };
    }
  }]);
  return BvEvent;
}();

exports.default = BvEvent;