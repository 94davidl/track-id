"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _popper = _interopRequireDefault(require("popper.js"));

var _popover = _interopRequireDefault(require("../../utils/popover.class"));

var _object = require("../../utils/object");

var _warn = _interopRequireDefault(require("../../utils/warn"));

var inBrowser = typeof window !== 'undefined' && typeof document !== 'undefined'; // Key which we use to store tooltip object on element

var BVPO = '__BV_PopOver__'; // Valid event triggers

var validTriggers = {
  focus: true,
  hover: true,
  click: true,
  blur: true // Build a PopOver config based on bindings (if any)
  // Arguments and modifiers take precedence over pased value config object

  /* istanbul ignore next: not easy to test */

};

function parseBindings(bindings) {
  // We start out with a blank config
  var config = {}; // Process bindings.value

  if (typeof bindings.value === 'string') {
    // Value is popover content (html optionally supported)
    config.content = bindings.value;
  } else if (typeof bindings.value === 'function') {
    // Content generator function
    config.content = bindings.value;
  } else if ((0, _typeof2.default)(bindings.value) === 'object') {
    // Value is config object, so merge
    config = (0, _object.assign)(bindings.value);
  } // If Argument, assume element ID of container element


  if (bindings.arg) {
    // Element ID specified as arg. We must prepend '#' to become a CSS selector
    config.container = "#".concat(bindings.arg);
  } // Process modifiers


  (0, _object.keys)(bindings.modifiers).forEach(function (mod) {
    if (/^html$/.test(mod)) {
      // Title allows HTML
      config.html = true;
    } else if (/^nofade$/.test(mod)) {
      // no animation
      config.animation = false;
    } else if (/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/.test(mod)) {
      // placement of popover
      config.placement = mod;
    } else if (/^(window|viewport)$/.test(mod)) {
      // bounday of popover
      config.boundary = mod;
    } else if (/^d\d+$/.test(mod)) {
      // delay value
      var delay = parseInt(mod.slice(1), 10) || 0;

      if (delay) {
        config.delay = delay;
      }
    } else if (/^o-?\d+$/.test(mod)) {
      // offset value (negative allowed)
      var offset = parseInt(mod.slice(1), 10) || 0;

      if (offset) {
        config.offset = offset;
      }
    }
  }); // Special handling of event trigger modifiers Trigger is a space separated list

  var selectedTriggers = {}; // parse current config object trigger

  var triggers = typeof config.trigger === 'string' ? config.trigger.trim().split(/\s+/) : [];
  triggers.forEach(function (trigger) {
    if (validTriggers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Parse Modifiers for triggers

  (0, _object.keys)(validTriggers).forEach(function (trigger) {
    if (bindings.modifiers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Sanitize triggers

  config.trigger = (0, _object.keys)(selectedTriggers).join(' ');

  if (config.trigger === 'blur') {
    // Blur by itself is useless, so convert it to focus
    config.trigger = 'focus';
  }

  if (!config.trigger) {
    // remove trigger config
    delete config.trigger;
  }

  return config;
} //
// Add or Update popover on our element
//

/* istanbul ignore next: not easy to test */


function applyBVPO(el, bindings, vnode) {
  if (!inBrowser) {
    return;
  }

  if (!_popper.default) {
    // Popper is required for tooltips to work
    (0, _warn.default)('v-b-popover: Popper.js is required for popovers to work');
    return;
  }

  if (el[BVPO]) {
    el[BVPO].updateConfig(parseBindings(bindings));
  } else {
    el[BVPO] = new _popover.default(el, parseBindings(bindings), vnode.context.$root);
  }
} //
// Remove popover on our element
//

/* istanbul ignore next */


function removeBVPO(el) {
  if (!inBrowser) {
    return;
  }

  if (el[BVPO]) {
    el[BVPO].destroy();
    el[BVPO] = null;
    delete el[BVPO];
  }
}
/*
 * Export our directive
 */

/* istanbul ignore next: not easy to test */


var _default = {
  bind: function bind(el, bindings, vnode) {
    applyBVPO(el, bindings, vnode);
  },
  inserted: function inserted(el, bindings, vnode) {
    applyBVPO(el, bindings, vnode);
  },
  update: function update(el, bindings, vnode) {
    if (bindings.value !== bindings.oldValue) {
      applyBVPO(el, bindings, vnode);
    }
  },
  componentUpdated: function componentUpdated(el, bindings, vnode) {
    if (bindings.value !== bindings.oldValue) {
      applyBVPO(el, bindings, vnode);
    }
  },
  unbind: function unbind(el) {
    removeBVPO(el);
  }
};
exports.default = _default;