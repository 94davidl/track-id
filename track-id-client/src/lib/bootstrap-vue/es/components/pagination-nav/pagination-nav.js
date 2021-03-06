"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _warn = _interopRequireDefault(require("../../utils/warn"));

var _pagination = _interopRequireDefault(require("../../mixins/pagination"));

var _link = require("../link/link");

// Props needed for router links
var routerProps = (0, _link.pickLinkProps)('activeClass', 'exactActiveClass', 'append', 'exact', 'replace', 'target', 'rel'); // Props object

var props = (0, _objectSpread2.default)({
  // pagination-nav specific props
  numberOfPages: {
    type: [Number, String],
    default: 1,
    validator: function validator(value) {
      var num = parseInt(value, 10);
      /* istanbul ignore if */

      if (isNaN(num) || num < 1) {
        (0, _warn.default)('b-pagination: prop "number-of-pages" must be a number greater than 0');
        return false;
      }

      return true;
    }
  },
  baseUrl: {
    type: String,
    default: '/'
  },
  useRouter: {
    type: Boolean,
    default: false
  },
  linkGen: {
    type: Function,
    default: null
  },
  pageGen: {
    type: Function,
    default: null
  }
}, routerProps); // Our render function is brought in via the pagination mixin
// @vue/component

var _default = {
  name: 'BPaginatonNav',
  mixins: [_pagination.default],
  props: props,
  computed: {
    // Used by render function to trigger wraping in '<nav>' element
    isNav: function isNav() {
      return true;
    }
  },
  methods: {
    onClick: function onClick(pageNum, evt) {
      // Update the v-model
      this.currentPage = pageNum;
      this.$nextTick(function () {
        try {
          // Emulate native link click page reloading behaviour by bluring the
          // paginator and returing focus to the document
          var target = evt.currentTarget || evt.target;
          target.blur();
        } catch (e) {}
      });
    },
    makePage: function makePage(pagenum) {
      if (this.pageGen && typeof this.pageGen === 'function') {
        return this.pageGen(pagenum);
      }

      return pagenum;
    },
    makeLink: function makeLink(pagenum) {
      if (this.linkGen && typeof this.linkGen === 'function') {
        return this.linkGen(pagenum);
      }

      var link = "".concat(this.baseUrl).concat(pagenum);
      return this.useRouter ? {
        path: link
      } : link;
    },
    linkProps: function linkProps(pagenum) {
      var link = this.makeLink(pagenum);
      var props = {
        href: typeof link === 'string' ? link : void 0,
        target: this.target || null,
        rel: this.rel || null,
        disabled: this.disabled
      };

      if (this.useRouter || (0, _typeof2.default)(link) === 'object') {
        props = (0, _objectSpread2.default)({}, props, {
          to: link,
          exact: this.exact,
          activeClass: this.activeClass,
          exactActiveClass: this.exactActiveClass,
          append: this.append,
          replace: this.replace
        });
      }

      return props;
    }
  }
};
exports.default = _default;