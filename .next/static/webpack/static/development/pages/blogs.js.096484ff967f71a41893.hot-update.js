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
      className: "jsx-3496881397" + " " + "cell medium-6"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
      src: "",
      className: "jsx-3496881397"
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
  }, "p.jsx-3496881397{font-size:18px;font-family:\"Comic Sans\";color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3VnYmFudmlsbGUvaGFja2VyLW5leHQvcGFnZXMvYmxvZ3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURTLEFBRzRCLGVBQ1UseUJBQ2QsV0FDYiIsImZpbGUiOiIvVXNlcnMvZG91Z2JhbnZpbGxlL2hhY2tlci1uZXh0L3BhZ2VzL2Jsb2dzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyIGZyb20gXCJyZWFjdC1odG1sLXBhcnNlclwiO1xuXG5jb25zdCBCbG9ncyA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwidHVicmlkeVwiKTtcbiAgY29uc3Qgc2VhcmNoRm9ybSA9ICgpID0+IChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtzZWFyY2hRdWVyeX0gb25DaGFuZ2U9e2hhbmRsZVRleHRDaGFuZ2V9IC8+XG4gICAgPC9mb3JtPlxuICApO1xuXG4gIGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSBlID0+IHtcbiAgICBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFJvdXRlci5wdXNoKGAvYmxvZ3MvP3NlYXJjaFRlcm09JHtzZWFyY2hRdWVyeX1gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJCbG9nc1wiIGZvb3Rlcj17YENvcHlyaWdodCAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmxvZ3M8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAge3NlYXJjaEZvcm0oKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLXggZ3JpZC1tYXJnaW4teFwiPlxuICAgICAgICAgIHtkYXRhLm1hcCgoYiwgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2IuaWR9IGNsYXNzTmFtZT1cImNlbGwgbWVkaXVtLTZcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiAvPlxuICAgICAgICAgICAgICA8TGluayBhcz17YC9ibG9nLyR7Yi5pZH1gfSBocmVmPXtgL2Jsb2cvP2lkPSR7Yi5pZH1gfT5cbiAgICAgICAgICAgICAgICA8aDQ+e1JlYWN0SHRtbFBhcnNlcihiLnRpdGxlLnJlbmRlcmVkKX08L2g0PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgYXVkaW9QTGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvUGxheWVyXCIpO1xuICAgICAgICAgICAgICAgICAgYXVkaW9QTGF5ZXIuc2V0QXR0cmlidXRlKFwic3JjXCIsIGIucnRlX21wM19hdWRpbyk7XG4gICAgICAgICAgICAgICAgICBhdWRpb1BMYXllci5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFBsYXlcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zXCI7XG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuQmxvZ3MuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhgJHtxdWVyeS5zZWFyY2hUZXJtfWApO1xuICBsZXQgdXJsID0gYGh0dHBzOi8vcmFkaW8ucnRlLmllL3JhZGlvMWhpZ2hsaWdodHMvd3AtanNvbi93cC92Mi9wb3N0cy9gO1xuICBpZiAocXVlcnkuc2VhcmNoVGVybSkge1xuICAgIHVybCA9IGBodHRwczovL3JhZGlvLnJ0ZS5pZS9yYWRpbzFoaWdobGlnaHRzL3dwLWpzb24vd3AvdjIvcG9zdHM/c2VhcmNoPSR7cXVlcnkuc2VhcmNoVGVybX1gO1xuICB9XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2coYGdvdCAke2RhdGEubGVuZ3RofSByZWNvcmRzYCk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4ge1xuICAgIGRhdGFcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dzO1xuIl19 */\n/*@ sourceURL=/Users/dougbanville/hacker-next/pages/blogs.js */"));
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
            console.log(data);
            return _context.abrupt("return", {
              data: data
            });

          case 13:
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
//# sourceMappingURL=blogs.js.096484ff967f71a41893.hot-update.js.map