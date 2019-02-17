"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTMLElement = void 0;
// Polyfills for SSR
var isSSR = typeof window === 'undefined';
var HTMLElement = isSSR ? Object : window.HTMLElement;
exports.HTMLElement = HTMLElement;