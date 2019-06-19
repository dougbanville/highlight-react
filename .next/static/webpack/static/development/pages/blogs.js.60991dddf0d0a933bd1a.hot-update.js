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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_10__);













var Blogs = function Blogs(_ref) {
  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("tubridy"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      searchQuery = _useState2[0],
      setSearchQuery = _useState2[1];

  var searchForm = function searchForm() {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      type: "text",
      value: searchQuery,
      onChange: handleTextChange
    }));
  };

  var handleTextChange = function handleTextChange(e) {
    setSearchQuery(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/blogs/?searchTerm=".concat(searchQuery));
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Blogs",
    footer: "Copyright ".concat(new Date().getFullYear())
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
    className: "jsx-3496881397"
  }, "Blogs")), searchForm(), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3496881397" + " " + "grid-container"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3496881397" + " " + "grid-x grid-margin-x"
  }, data.map(function (b, i) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: b.id,
      className: "jsx-3496881397" + " " + "cell medium-3"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      as: "/blog/".concat(b.id),
      href: "/blog/?id=".concat(b.id)
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
      className: "jsx-3496881397"
    }, react_html_parser__WEBPACK_IMPORTED_MODULE_10___default()(b.title.rendered))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      onClick: function onClick() {
        var audioPLayer = document.getElementById("audioPlayer");
        audioPLayer.setAttribute("src", b.rte_mp3_audio);
        audioPLayer.play();
      },
      className: "jsx-3496881397"
    }, "Play"));
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3496881397"
  }, "p.jsx-3496881397{font-size:18px;font-family:\"Comic Sans\";color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3VnYmFudmlsbGUvaGFja2VyLW5leHQvcGFnZXMvYmxvZ3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RTLEFBRzRCLGVBQ1UseUJBQ2QsV0FDYiIsImZpbGUiOiIvVXNlcnMvZG91Z2JhbnZpbGxlL2hhY2tlci1uZXh0L3BhZ2VzL2Jsb2dzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyIGZyb20gXCJyZWFjdC1odG1sLXBhcnNlclwiO1xuXG5jb25zdCBCbG9ncyA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwidHVicmlkeVwiKTtcbiAgY29uc3Qgc2VhcmNoRm9ybSA9ICgpID0+IChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtzZWFyY2hRdWVyeX0gb25DaGFuZ2U9e2hhbmRsZVRleHRDaGFuZ2V9IC8+XG4gICAgPC9mb3JtPlxuICApO1xuXG4gIGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSBlID0+IHtcbiAgICBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFJvdXRlci5wdXNoKGAvYmxvZ3MvP3NlYXJjaFRlcm09JHtzZWFyY2hRdWVyeX1gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJCbG9nc1wiIGZvb3Rlcj17YENvcHlyaWdodCAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmxvZ3M8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAge3NlYXJjaEZvcm0oKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLXggZ3JpZC1tYXJnaW4teFwiPlxuICAgICAgICAgIHtkYXRhLm1hcCgoYiwgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2IuaWR9IGNsYXNzTmFtZT1cImNlbGwgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYmxvZy8ke2IuaWR9YH0gaHJlZj17YC9ibG9nLz9pZD0ke2IuaWR9YH0+XG4gICAgICAgICAgICAgICAgPGg0PntSZWFjdEh0bWxQYXJzZXIoYi50aXRsZS5yZW5kZXJlZCl9PC9oND5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IGF1ZGlvUExheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWRpb1BsYXllclwiKTtcbiAgICAgICAgICAgICAgICAgIGF1ZGlvUExheWVyLnNldEF0dHJpYnV0ZShcInNyY1wiLCBiLnJ0ZV9tcDNfYXVkaW8pO1xuICAgICAgICAgICAgICAgICAgYXVkaW9QTGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQbGF5XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQ29taWMgU2Fuc1wiO1xuICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbkJsb2dzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc29sZS5sb2coYCR7cXVlcnkuc2VhcmNoVGVybX1gKTtcbiAgbGV0IHVybCA9IGBodHRwczovL3JhZGlvLnJ0ZS5pZS9yYWRpbzFoaWdobGlnaHRzL3dwLWpzb24vd3AvdjIvcG9zdHMvYDtcbiAgaWYgKHF1ZXJ5LnNlYXJjaFRlcm0pIHtcbiAgICB1cmwgPSBgaHR0cHM6Ly9yYWRpby5ydGUuaWUvcmFkaW8xaGlnaGxpZ2h0cy93cC1qc29uL3dwL3YyL3Bvc3RzP3NlYXJjaD0ke3F1ZXJ5LnNlYXJjaFRlcm19YDtcbiAgfVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKGBnb3QgJHtkYXRhLmxlbmd0aH0gcmVjb3Jkc2ApO1xuICByZXR1cm4ge1xuICAgIGRhdGFcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dzO1xuIl19 */\n/*@ sourceURL=/Users/dougbanville/hacker-next/pages/blogs.js */"));
};

Blogs.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query, url, response, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            console.log("".concat(query.searchTerm));
            url = "https://radio.rte.ie/radio1highlights/wp-json/wp/v2/posts/";

            if (query.searchTerm) {
              url = "https://radio.rte.ie/radio1highlights/wp-json/wp/v2/posts?search=".concat(query.searchTerm);
            }

            _context.next = 6;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default()(url);

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();

          case 9:
            data = _context.sent;
            console.log("got ".concat(data.length, " records"));
            return _context.abrupt("return", {
              data: data
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Blogs);

/***/ })

})
//# sourceMappingURL=blogs.js.60991dddf0d0a933bd1a.hot-update.js.map