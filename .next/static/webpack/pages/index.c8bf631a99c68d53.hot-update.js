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

/***/ "./components/builderForms/stepsForm/stepsForm.jsx":
/*!*********************************************************!*\
  !*** ./components/builderForms/stepsForm/stepsForm.jsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _this = undefined;\nvar StepsForm = function(param) {\n    var moveToNext = param.moveToNext, stepNo = param.stepNo, moveToPrevious = param.moveToPrevious;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"StepsForm\"\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Desktop/BoxBuilder_dev/boxBuilder/components/builderForms/stepsForm/stepsForm.jsx\",\n                lineNumber: 4,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                variant: \"outline-primary\",\n                onClick: function() {\n                    moveToPrevious(stepNo);\n                },\n                children: \"Previous\"\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Desktop/BoxBuilder_dev/boxBuilder/components/builderForms/stepsForm/stepsForm.jsx\",\n                lineNumber: 5,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                variant: \"outline-danger\",\n                onClick: function() {\n                    moveToNext(stepNo);\n                },\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Desktop/BoxBuilder_dev/boxBuilder/components/builderForms/stepsForm/stepsForm.jsx\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_c = StepsForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StepsForm);\nvar _c;\n$RefreshReg$(_c, \"StepsForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2J1aWxkZXJGb3Jtcy9zdGVwc0Zvcm0vc3RlcHNGb3JtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxHQUFLLENBQUNBLFNBQVMsR0FBRyxRQUFRLFFBQW9DLENBQUM7UUFBMUNDLFVBQVUsU0FBVkEsVUFBVSxFQUFFQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsY0FBYyxTQUFkQSxjQUFjO0lBQ25ELE1BQU07O3dGQUVHQyxDQUFDOzBCQUFDLENBQVM7Ozs7Ozt3RkFDWEMsTUFBTTtnQkFBQ0MsT0FBTyxFQUFDLENBQWlCO2dCQUFDQyxPQUFPLEVBQUUsUUFBUUosR0FBRixDQUFDO29CQUFDQSxjQUFjLENBQUNELE1BQU07Z0JBQUUsQ0FBQzswQkFBRyxDQUFROzs7Ozs7d0ZBQ3JGRyxNQUFNO2dCQUFDQyxPQUFPLEVBQUMsQ0FBZ0I7Z0JBQUNDLE9BQU8sRUFBRSxRQUFRTixHQUFGLENBQUM7b0JBQUNBLFVBQVUsQ0FBQ0MsTUFBTTtnQkFBRSxDQUFDOzBCQUFHLENBQUk7Ozs7Ozs7O0FBR3pGLENBQUM7S0FSS0YsU0FBUztBQVNmLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYnVpbGRlckZvcm1zL3N0ZXBzRm9ybS9zdGVwc0Zvcm0uanN4P2Y5NzkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3RlcHNGb3JtID0gKHsgbW92ZVRvTmV4dCwgc3RlcE5vLCBtb3ZlVG9QcmV2aW91cyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPlN0ZXBzRm9ybTwvcD5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHsgbW92ZVRvUHJldmlvdXMoc3RlcE5vKSB9fSA+UHJldmlvdXM8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCIgb25DbGljaz17KCkgPT4geyBtb3ZlVG9OZXh0KHN0ZXBObykgfX0gPk5leHQ8L0J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgU3RlcHNGb3JtIl0sIm5hbWVzIjpbIlN0ZXBzRm9ybSIsIm1vdmVUb05leHQiLCJzdGVwTm8iLCJtb3ZlVG9QcmV2aW91cyIsInAiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/builderForms/stepsForm/stepsForm.jsx\n");

/***/ })

});