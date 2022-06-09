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

/***/ "./components/stepper/formStepper.jsx":
/*!********************************************!*\
  !*** ./components/stepper/formStepper.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _displayForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayForm */ \"./components/stepper/displayForm.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_steps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/steps.js */ \"./constants/steps.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Stepper = function() {\n    var _this1 = _this;\n    _s();\n    var notSelected = \"w-6 h-6 text-[10px] font-bold leading-6 bg-gray-100 text-center rounded-full\";\n    var selected = \"w-6 h-6 text-[10px] font-bold leading-6 bg-blue-600 text-white text-center rounded-full\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), stepNo = ref[0], setStepNo = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), currentColor = ref1[0], setCurrentColor = ref1[1];\n    var moveToNext = function(step) {\n        if (step < 3) {\n            setStepNo(step + 1);\n        }\n    };\n    var moveToPrevious = function(step) {\n        if (step > 0) {\n            setStepNo(step - 1);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"sr-only\",\n                children: \"Steps\"\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Desktop/BoxBuilder_dev/boxBuilder/components/stepper/formStepper.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative after:inset-x-0 after:h-0.5 after:absolute after:top-1/2 after:-translate-y-1/2 after:block after:rounded-lg after:bg-white-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                    className: \"relative z-10 flex justify-between text-sm font-medium text-gray-500\",\n                    children: _constants_steps_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === null || _constants_steps_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === void 0 ? void 0 : _constants_steps_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function(data, index) {\n                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex items-center p-2 bg-gray\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: stepNo == index ? selected : notSelected,\n                                    children: data === null || data === void 0 ? void 0 : data.index\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbook/Desktop/BoxBuilder_dev/boxBuilder/components/stepper/formStepper.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 37\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"hidden sm:block sm:ml-2\",\n                                    children: [\n                                        \" \",\n                                        data === null || data === void 0 ? void 0 : data.name,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/macbook/Desktop/BoxBuilder_dev/boxBuilder/components/stepper/formStepper.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 37\n                                }, _this1)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/macbook/Desktop/BoxBuilder_dev/boxBuilder/components/stepper/formStepper.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 33\n                        }, _this1));\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/macbook/Desktop/BoxBuilder_dev/boxBuilder/components/stepper/formStepper.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Desktop/BoxBuilder_dev/boxBuilder/components/stepper/formStepper.jsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_displayForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    stepNo: stepNo,\n                    moveToPrevious: moveToPrevious,\n                    moveToNext: moveToNext\n                }, void 0, false, {\n                    fileName: \"/Users/macbook/Desktop/BoxBuilder_dev/boxBuilder/components/stepper/formStepper.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Desktop/BoxBuilder_dev/boxBuilder/components/stepper/formStepper.jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbook/Desktop/BoxBuilder_dev/boxBuilder/components/stepper/formStepper.jsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, _this));\n};\n_s(Stepper, \"mwV2K1Bkf18ll3Avd8KkdC3C7F8=\");\n_c = Stepper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stepper);\nvar _c;\n$RefreshReg$(_c, \"Stepper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0ZXBwZXIvZm9ybVN0ZXBwZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUNBO0FBQ1M7OztBQUVoRCxHQUFLLENBQUNJLE9BQU8sR0FBRyxRQUNoQixHQURzQixDQUFDOzs7SUFFbkIsR0FBSyxDQUFDQyxXQUFXLEdBQUcsQ0FBOEU7SUFDbEcsR0FBSyxDQUFDQyxRQUFRLEdBQUcsQ0FBeUY7SUFDMUcsR0FBSyxDQUF1QkosR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBL0JLLE1BQU0sR0FBZUwsR0FBVyxLQUF4Qk0sU0FBUyxHQUFJTixHQUFXO0lBQ3ZDLEdBQUssQ0FBbUNBLElBQVUsR0FBVkEsK0NBQVEsSUFBekNPLFlBQVksR0FBcUJQLElBQVUsS0FBN0JRLGVBQWUsR0FBSVIsSUFBVTtJQUVsRCxHQUFLLENBQUNTLFVBQVUsR0FBRyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO1FBQzFCLEVBQUUsRUFBRUEsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ1hKLFNBQVMsQ0FBQ0ksSUFBSSxHQUFHLENBQUM7UUFDdEIsQ0FBQztJQUNMLENBQUM7SUFFRCxHQUFLLENBQUNDLGNBQWMsR0FBRyxRQUFRLENBQVBELElBQUksRUFBSyxDQUFDO1FBQzlCLEVBQUUsRUFBRUEsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ1hKLFNBQVMsQ0FBQ0ksSUFBSSxHQUFHLENBQUM7UUFDdEIsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLDZFQUNERSxDQUFHOzt3RkFDQ0MsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFDLENBQVM7MEJBQUMsQ0FBSzs7Ozs7O3dGQUM1QkYsQ0FBRztnQkFBQ0UsU0FBUyxFQUFDLENBQTBJO3NHQUNwSkMsQ0FBRTtvQkFBQ0QsU0FBUyxFQUFDLENBQXNFOzhCQUU1RWIsMkRBQVMsYUFBVEEsMkRBQVMsS0FBVEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSwrREFBYyxDQUFDLFFBQVEsQ0FBUGdCLElBQUksRUFBRUMsS0FBSyxFQUFLLENBQUM7d0JBQzdCLE1BQU0sNkVBQ0RDLENBQUU7NEJBQWFMLFNBQVMsRUFBQyxDQUErQjs7NEdBQ3BETSxDQUFJO29DQUFDTixTQUFTLEVBQUVULE1BQU0sSUFBSWEsS0FBSyxHQUFHZCxRQUFRLEdBQUdELFdBQVc7OENBQ3BEYyxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBSkEsQ0FBVyxHQUFYQSxJQUFJLENBQUVDLEtBQUs7Ozs7Ozs0R0FFZkUsQ0FBSTtvQ0FBQ04sU0FBUyxFQUFDLENBQXlCOzt3Q0FBQyxDQUFDO3dDQUFDRyxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFVLEdBQVZBLElBQUksQ0FBSkEsQ0FBVSxHQUFWQSxJQUFJLENBQUVJLElBQUk7d0NBQUMsQ0FBQzs7Ozs7Ozs7MkJBSm5ESCxLQUFLOzs7OztvQkFPdEIsQ0FBQzs7Ozs7Ozs7Ozs7d0ZBSVpOLENBQUc7c0dBQ0NkLG9EQUFXO29CQUFDTyxNQUFNLEVBQUVBLE1BQU07b0JBQUVNLGNBQWMsRUFBRUEsY0FBYztvQkFBRUYsVUFBVSxFQUFFQSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluRyxDQUFDO0dBM0NLUCxPQUFPO0tBQVBBLE9BQU87QUE2Q2IsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdGVwcGVyL2Zvcm1TdGVwcGVyLmpzeD8zMmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaXNwbGF5Rm9ybSBmcm9tICcuL2Rpc3BsYXlGb3JtJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0ZXBzRm9ybSBmcm9tICcuLi8uLi9jb25zdGFudHMvc3RlcHMuanMnO1xuXG5jb25zdCBTdGVwcGVyID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgbm90U2VsZWN0ZWQgPSBcInctNiBoLTYgdGV4dC1bMTBweF0gZm9udC1ib2xkIGxlYWRpbmctNiBiZy1ncmF5LTEwMCB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGxcIlxuICAgIGNvbnN0IHNlbGVjdGVkID0gXCJ3LTYgaC02IHRleHQtWzEwcHhdIGZvbnQtYm9sZCBsZWFkaW5nLTYgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGxcIlxuICAgIGNvbnN0IFtzdGVwTm8sIHNldFN0ZXBOb10gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtjdXJyZW50Q29sb3IsIHNldEN1cnJlbnRDb2xvcl0gPSB1c2VTdGF0ZSgpXG5cbiAgICBjb25zdCBtb3ZlVG9OZXh0ID0gKHN0ZXApID0+IHtcbiAgICAgICAgaWYgKHN0ZXAgPCAzKSB7XG4gICAgICAgICAgICBzZXRTdGVwTm8oc3RlcCArIDEpXG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY29uc3QgbW92ZVRvUHJldmlvdXMgPSAoc3RlcCkgPT4ge1xuICAgICAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgICAgICAgIHNldFN0ZXBObyhzdGVwIC0gMSlcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5TdGVwczwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGFmdGVyOmluc2V0LXgtMCBhZnRlcjpoLTAuNSBhZnRlcjphYnNvbHV0ZSBhZnRlcjp0b3AtMS8yIGFmdGVyOi10cmFuc2xhdGUteS0xLzIgYWZ0ZXI6YmxvY2sgYWZ0ZXI6cm91bmRlZC1sZyBhZnRlcjpiZy13aGl0ZS0xMDBcIiA+XG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCIgPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwc0Zvcm0/Lm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0yIGJnLWdyYXlcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0ZXBObyA9PSBpbmRleCA/IHNlbGVjdGVkIDogbm90U2VsZWN0ZWR9ICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE/LmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmJsb2NrIHNtOm1sLTJcIj4ge2RhdGE/Lm5hbWV9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8RGlzcGxheUZvcm0gc3RlcE5vPXtzdGVwTm99IG1vdmVUb1ByZXZpb3VzPXttb3ZlVG9QcmV2aW91c30gbW92ZVRvTmV4dD17bW92ZVRvTmV4dH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0ZXBwZXIiXSwibmFtZXMiOlsiRGlzcGxheUZvcm0iLCJSZWFjdCIsInVzZVN0YXRlIiwic3RlcHNGb3JtIiwiU3RlcHBlciIsIm5vdFNlbGVjdGVkIiwic2VsZWN0ZWQiLCJzdGVwTm8iLCJzZXRTdGVwTm8iLCJjdXJyZW50Q29sb3IiLCJzZXRDdXJyZW50Q29sb3IiLCJtb3ZlVG9OZXh0Iiwic3RlcCIsIm1vdmVUb1ByZXZpb3VzIiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJvbCIsIm1hcCIsImRhdGEiLCJpbmRleCIsImxpIiwic3BhbiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/stepper/formStepper.jsx\n");

/***/ })

});