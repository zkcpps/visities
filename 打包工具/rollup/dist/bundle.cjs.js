'use strict';

var _ = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

var sayHello = function sayHello(content) {
  console.log(content);
};

var sayTs = function (name) {
    console.log(name);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".red {\r\n  background-color: red;\r\n}\r\n.blue {\r\n  background-color: blue;\r\n}\r\n";
styleInject(css_248z);

var arr = ___default["default"].concat([1, 2, 3], 4, [5, 6]);

sayHello("Hello Rollup!" + arr);
sayTs("Hello Ts!");
