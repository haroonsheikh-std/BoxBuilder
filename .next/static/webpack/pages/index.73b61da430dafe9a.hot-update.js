"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/builderForms/summaryForm/summaryForm.jsx":
/*!*************************************************************!*\
  !*** ./components/builderForms/summaryForm/summaryForm.jsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar SummaryForm = function(param) {\n    var moveToNext = param.moveToNext, stepNo = param.stepNo, moveToPrevious = param.moveToPrevious;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"SummaryForm\"\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Desktop/BoxBuilder_dev/boxBuilder/components/builderForms/summaryForm/summaryForm.jsx\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        variant: \"outline-danger\",\n                        size: \"sm\",\n                        onClick: function() {\n                            moveToPrevious(stepNo);\n                        },\n                        children: \"Previous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbook/Desktop/BoxBuilder_dev/boxBuilder/components/builderForms/summaryForm/summaryForm.jsx\",\n                        lineNumber: 8,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        variant: \"outline-primary\",\n                        size: \"sm\",\n                        onClick: function() {\n                            moveToNext(stepNo);\n                        },\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbook/Desktop/BoxBuilder_dev/boxBuilder/components/builderForms/summaryForm/summaryForm.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbook/Desktop/BoxBuilder_dev/boxBuilder/components/builderForms/summaryForm/summaryForm.jsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_c = SummaryForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SummaryForm);\nvar _c;\n$RefreshReg$(_c, \"SummaryForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2J1aWxkZXJGb3Jtcy9zdW1tYXJ5Rm9ybS9zdW1tYXJ5Rm9ybS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdDOztBQUV4QyxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUFRLFFBQW9DLENBQUM7UUFBMUNDLFVBQVUsU0FBVkEsVUFBVSxFQUFFQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsY0FBYyxTQUFkQSxjQUFjO0lBQ3JELE1BQU07O3dGQUVHQyxDQUFDOzBCQUFDLENBQVc7Ozs7Ozt3RkFDYkMsQ0FBRzs7Z0dBQ0NOLG1EQUFNO3dCQUFDTyxPQUFPLEVBQUMsQ0FBZ0I7d0JBQUNDLElBQUksRUFBQyxDQUFJO3dCQUFDQyxPQUFPLEVBQUUsUUFBUUwsR0FBRixDQUFDOzRCQUFDQSxjQUFjLENBQUNELE1BQU07d0JBQUUsQ0FBQztrQ0FBRyxDQUFROzs7Ozs7Z0dBQzlGSCxtREFBTTt3QkFBQ08sT0FBTyxFQUFDLENBQWlCO3dCQUFDQyxJQUFJLEVBQUMsQ0FBSTt3QkFBQ0MsT0FBTyxFQUFFLFFBQVFQLEdBQUYsQ0FBQzs0QkFBQ0EsVUFBVSxDQUFDQyxNQUFNO3dCQUFFLENBQUM7a0NBQUcsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7QUFLeEcsQ0FBQztLQVhLRixXQUFXO0FBWWpCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYnVpbGRlckZvcm1zL3N1bW1hcnlGb3JtL3N1bW1hcnlGb3JtLmpzeD84OWY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxuXG5jb25zdCBTdW1tYXJ5Rm9ybSA9ICh7IG1vdmVUb05leHQsIHN0ZXBObywgbW92ZVRvUHJldmlvdXMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cD5TdW1tYXJ5Rm9ybTwvcD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1kYW5nZXJcIiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiB7IG1vdmVUb1ByZXZpb3VzKHN0ZXBObykgfX0gPlByZXZpb3VzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCIgc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4geyBtb3ZlVG9OZXh0KHN0ZXBObykgfX0gPk5leHQ8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cblxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IFN1bW1hcnlGb3JtIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIlN1bW1hcnlGb3JtIiwibW92ZVRvTmV4dCIsInN0ZXBObyIsIm1vdmVUb1ByZXZpb3VzIiwicCIsImRpdiIsInZhcmlhbnQiLCJzaXplIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/builderForms/summaryForm/summaryForm.jsx\n");

/***/ })

});