'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Cookies = _interopDefault(require('js-cookie'));

var sum = function sum(a, b) {
  // if ('development' === "development") {
  //   console.log('boop boop');
  // }
  return a + b;
};
var cookie = function cookie() {
  return Cookies.get();
};

exports.cookie = cookie;
exports.sum = sum;
//# sourceMappingURL=insticatorsession.cjs.development.js.map
