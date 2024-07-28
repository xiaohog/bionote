exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 877:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ loadCatalog),
/* harmony export */   b: () => (/* binding */ useLinguiInit)
/* harmony export */ });
/* harmony import */ var _lingui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4238);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lingui_core__WEBPACK_IMPORTED_MODULE_0__]);
_lingui_core__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/**
 * Load messages for requested locale and activate it.
 * This function isn't part of the LinguiJS library because there are
 * many ways how to load messages — from REST API, from file, from cache, etc.
 */ async function loadCatalog(locale) {
    const catalog = await __webpack_require__(6799)(`./${locale}.po`);
    return catalog.messages;
}
function useLinguiInit(messages) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const locale = router.locale || router.defaultLocale;
    const isClient = "undefined" !== "undefined";
    if (!isClient && locale !== _lingui_core__WEBPACK_IMPORTED_MODULE_0__.i18n.locale) {
        // there is single instance of i18n on the server
        // note: on the server, we could have an instance of i18n per supported locale
        // to avoid calling loadAndActivate for (worst case) each request, but right now that's what we do
        _lingui_core__WEBPACK_IMPORTED_MODULE_0__.i18n.loadAndActivate({
            locale,
            messages
        });
    }
    if (isClient && _lingui_core__WEBPACK_IMPORTED_MODULE_0__.i18n.locale === undefined) {
        // first client render
        _lingui_core__WEBPACK_IMPORTED_MODULE_0__.i18n.loadAndActivate({
            locale,
            messages
        });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const localeDidChange = locale !== _lingui_core__WEBPACK_IMPORTED_MODULE_0__.i18n.locale;
        if (localeDidChange) {
            _lingui_core__WEBPACK_IMPORTED_MODULE_0__.i18n.loadAndActivate({
                locale,
                messages
            });
        }
    }, [
        locale
    ]);
    return _lingui_core__WEBPACK_IMPORTED_MODULE_0__.i18n;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1815);
/* harmony import */ var _lingui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4238);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7562);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lingui_react__WEBPACK_IMPORTED_MODULE_1__, _lingui_core__WEBPACK_IMPORTED_MODULE_2__, _i18n__WEBPACK_IMPORTED_MODULE_4__]);
([_lingui_react__WEBPACK_IMPORTED_MODULE_1__, _lingui_core__WEBPACK_IMPORTED_MODULE_2__, _i18n__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function MyApp({ Component, pageProps }) {
    (0,_i18n__WEBPACK_IMPORTED_MODULE_4__/* .useLinguiInit */ .b)(pageProps.translation);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lingui_react__WEBPACK_IMPORTED_MODULE_1__.I18nProvider, {
            i18n: _lingui_core__WEBPACK_IMPORTED_MODULE_2__.i18n,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7562:
/***/ (() => {



/***/ }),

/***/ 6799:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en.po": [
		2463,
		463
	],
	"./pseudo.po": [
		4043,
		43
	],
	"./zh.po": [
		8597,
		597
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 6799;
module.exports = webpackAsyncContext;

/***/ })

};
;