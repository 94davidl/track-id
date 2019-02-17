"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _card = _interopRequireDefault(require("./card"));

var _cardHeader = _interopRequireDefault(require("./card-header"));

var _cardBody = _interopRequireDefault(require("./card-body"));

var _cardTitle = _interopRequireDefault(require("./card-title"));

var _cardSubTitle = _interopRequireDefault(require("./card-sub-title"));

var _cardFooter = _interopRequireDefault(require("./card-footer"));

var _cardImg = _interopRequireDefault(require("./card-img"));

var _cardText = _interopRequireDefault(require("./card-text"));

var _cardGroup = _interopRequireDefault(require("./card-group"));

var _plugins = require("../../utils/plugins");

var components = {
  BCard: _card.default,
  BCardHeader: _cardHeader.default,
  BCardBody: _cardBody.default,
  BCardTitle: _cardTitle.default,
  BCardSubTitle: _cardSubTitle.default,
  BCardFooter: _cardFooter.default,
  BCardImg: _cardImg.default,
  BCardText: _cardText.default,
  BCardGroup: _cardGroup.default
};
var _default = {
  install: function install(Vue) {
    (0, _plugins.registerComponents)(Vue, components);
  }
};
exports.default = _default;