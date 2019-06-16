webpackHotUpdate("static/development/pages/blogs.js",{

/***/ "./pages/blogs.js":
/*!************************!*\
  !*** ./pages/blogs.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__);









var Blogs = function Blogs(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Blogs",
    footer: "Copyright ".concat(new Date().getFullYear())
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
    className: "jsx-1794912556"
  }, "Blogs")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1794912556" + " " + "grid-container"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1794912556" + " " + "grid-x grid-margin-x"
  }, data.map(function (b, i) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: b.id,
      className: "jsx-1794912556" + " " + "large-12"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      as: "/blog/".concat(b.id),
      href: "/blog/?id=".concat(b.id)
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
      className: "jsx-1794912556"
    }, b.title.rendered)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      onClick: function onClick() {
        var audioPLayer = document.getElementById("audioPlayer");
        audioPLayer.setAttribute("src", b.rte_mp3_audio);
        audioPLayer.play();
      },
      className: "jsx-1794912556"
    }, "Play"));
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1794912556"
  }, "p.jsx-1794912556{font-size:18px;font-family:\"Comic Sans\";color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3VnYmFudmlsbGUvaGFja2VyLW5leHQvcGFnZXMvYmxvZ3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JPLEFBRzBCLGVBQ1UseUJBQ2QsV0FDYiIsImZpbGUiOiIvVXNlcnMvZG91Z2JhbnZpbGxlL2hhY2tlci1uZXh0L3BhZ2VzL2Jsb2dzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xuXG5jb25zdCBCbG9ncyA9ICh7IGRhdGEgfSkgPT4gKFxuICA8TGF5b3V0IHRpdGxlPVwiQmxvZ3NcIiBmb290ZXI9e2BDb3B5cmlnaHQgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YH0+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+QmxvZ3M8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQteCBncmlkLW1hcmdpbi14XCI+XG4gICAgICAgIHtkYXRhLm1hcCgoYiwgaSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtiLmlkfSBjbGFzc05hbWU9XCJsYXJnZS0xMlwiPlxuICAgICAgICAgICAgPExpbmsgYXM9e2AvYmxvZy8ke2IuaWR9YH0gaHJlZj17YC9ibG9nLz9pZD0ke2IuaWR9YH0+XG4gICAgICAgICAgICAgIDxoND57Yi50aXRsZS5yZW5kZXJlZH08L2g0PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGF1ZGlvUExheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWRpb1BsYXllclwiKTtcbiAgICAgICAgICAgICAgICBhdWRpb1BMYXllci5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYi5ydGVfbXAzX2F1ZGlvKTtcbiAgICAgICAgICAgICAgICBhdWRpb1BMYXllci5wbGF5KCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFBsYXlcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQ29taWMgU2Fuc1wiO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuQmxvZ3MuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgdXJsID0gYGh0dHBzOi8vcmFkaW8ucnRlLmllL3JhZGlvMWhpZ2hsaWdodHMvd3AtanNvbi93cC92Mi9wb3N0cy9gO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2coYGdvdCAke2RhdGEubGVuZ3RofSByZWNvcmRzYCk7XG4gIHJldHVybiB7XG4gICAgZGF0YVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ3M7XG4iXX0= */\n/*@ sourceURL=/Users/dougbanville/hacker-next/pages/blogs.js */"));
};

Blogs.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var url, response, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "https://radio.rte.ie/radio1highlights/wp-json/wp/v2/posts/";
          _context.next = 3;
          return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default()(url);

        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();

        case 6:
          data = _context.sent;
          console.log("got ".concat(data.length, " records"));
          return _context.abrupt("return", {
            data: data
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Blogs);

/***/ })

})
//# sourceMappingURL=blogs.js.c26b689884a56a1a5107.hot-update.js.map