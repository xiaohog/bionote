"use strict";
exports.id = 763;
exports.ids = [763];
exports.modules = {

/***/ 4763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lingui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4238);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1815);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lingui_core__WEBPACK_IMPORTED_MODULE_2__, _lingui_react__WEBPACK_IMPORTED_MODULE_3__]);
([_lingui_core__WEBPACK_IMPORTED_MODULE_2__, _lingui_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Layout(payload) {
    let { title = "", children = null } = payload;
    /**
   * This hook is needed to subscribe your
   * component for changes if you use t`` macro
   */ (0,_lingui_react__WEBPACK_IMPORTED_MODULE_3__.useLingui)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { pathname, asPath, query } = router;
    // Default props can't be translated at module level because active locale
    // isn't known when module is imported, but rather when component
    // is rendered.
    if (title == "") {
        title = _lingui_core__WEBPACK_IMPORTED_MODULE_2__.i18n._({
            id: "27hs6a"
        });
    }
    const buttonClassName = "text-white hover:outline hover:outline-offset-2 p-0.5 rounded-md";
    const containerClassName = `min-h-screen flex items-center relative ${pathname === "/" ? "padding__animation--main " : ""}page__background--main`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: containerClassName,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "flex w-screen",
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                className: "absolute right-4 top-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: buttonClassName,
                        onClick: ()=>router.push({
                                pathname,
                                query
                            }, asPath, {
                                locale: "en"
                            }),
                        children: "English"
                    }),
                    " | ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: buttonClassName,
                        onClick: ()=>router.push({
                                pathname,
                                query
                            }, asPath, {
                                locale: "zh"
                            }),
                        children: "中文"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;