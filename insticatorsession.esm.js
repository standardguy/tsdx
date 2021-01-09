import Cookies from 'js-cookie';

var sum = function sum(a, b) {
  // if ('development' === process.env.NODE_ENV) {
  //   console.log('boop boop');
  // }
  return a + b;
};
var cookie = function cookie() {
  return Cookies.get();
};

export { cookie, sum };
//# sourceMappingURL=insticatorsession.esm.js.map
