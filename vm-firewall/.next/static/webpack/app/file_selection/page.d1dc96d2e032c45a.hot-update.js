"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/file_selection/page",{

/***/ "(app-client)/./src/Machines.js":
/*!*************************!*\
  !*** ./src/Machines.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/MenuItem */ \"(app-client)/./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/InputLabel */ \"(app-client)/./node_modules/@mui/material/InputLabel/InputLabel.js\");\n/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Select */ \"(app-client)/./node_modules/@mui/material/Select/Select.js\");\n/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/FormControl */ \"(app-client)/./node_modules/@mui/material/FormControl/FormControl.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Machines = (props)=>{\n    _s();\n    const { vmData  } = props;\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [idsWithRisk, setIdsWithRisk] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    function handleChange(event) {\n        setId(event.target.value);\n    }\n    async function handleClick() {\n        const info = {\n            vms: vmData.data.vms,\n            rules: vmData.data.rules\n        };\n        console.log(\"info\", info);\n        const response = await fetch(\"/api/file_selection/attack?vm_id=\".concat(id), {\n            method: \"POST\",\n            body: JSON.stringify(info),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        setIdsWithRisk(data.ids);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            alignItems: \"center\",\n            padding: \"10px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                fullWidth: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        lable: id,\n                        children: \"Machines Ids\"\n                    }, void 0, false, {\n                        fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: id,\n                        label: \"Machine Id\",\n                        onChange: handleChange,\n                        children: vmData.data.ids.map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                value: id,\n                                children: id\n                            }, void 0, false, {\n                                fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                                lineNumber: 47,\n                                columnNumber: 48\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                disable: id !== null,\n                onClick: handleClick,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Machines, \"Amkwf89Cq4ktrvsS/nST+SX6Sjk=\");\n_c = Machines;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Machines);\nvar _c;\n$RefreshReg$(_c, \"Machines\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL01hY2hpbmVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBFO0FBQ3BDO0FBQ1E7QUFDSTtBQUNSO0FBQ1U7QUFFcEQsTUFBTVUsV0FBVyxDQUFDQzs7SUFDZCxNQUFNLEVBQUNDLE9BQU0sRUFBQyxHQUFHRDtJQUNqQixNQUFNLENBQUNFLElBQUlDLE1BQU0sR0FBR1QsK0NBQVFBLENBQUM7SUFDN0IsTUFBTSxDQUFDVSxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDO0lBRS9DLFNBQVNZLGFBQWFDLEtBQUs7UUFDdkJKLE1BQU1JLE1BQU1DLE9BQU9DO0lBQ3ZCO0lBRUEsZUFBZUM7UUFDWCxNQUFNQyxPQUFPO1lBQ1RDLEtBQUtYLE9BQU9ZLEtBQUtEO1lBQ2pCRSxPQUFPYixPQUFPWSxLQUFLQztRQUN2QjtRQUNBQyxRQUFRQyxJQUFJLFFBQVFMO1FBQ3BCLE1BQU1NLFdBQVcsTUFBTUMsTUFBTSxvQ0FBdUMsT0FBSGhCLEtBQzdEO1lBQ0lpQixRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFVBQVVYO1lBQ3JCWSxTQUFTO2dCQUFDLGdCQUFnQjtZQUFrQjtRQUNoRDtRQUNKLE1BQU1WLE9BQU8sTUFBTUksU0FBU087UUFDNUJuQixlQUFlUSxLQUFLWTtJQUV4QjtJQUdBLHFCQUNJLDhEQUFDQztRQUFJQyxPQUFPO1lBQ1JDLFNBQVM7WUFDVEMsWUFBWTtZQUNaQyxTQUFTO1FBQ2I7OzBCQUNJLDhEQUFDaEMsaUVBQVdBO2dCQUFDaUMsU0FBUzs7a0NBQ2xCLDhEQUFDbkMsZ0VBQVVBO3dCQUFDb0MsT0FBTzlCO2tDQUFJOzs7Ozs7a0NBQ3ZCLDhEQUFDTCw0REFBTUE7d0JBQ0hZLE9BQU9QO3dCQUNQK0IsT0FBTTt3QkFDTkMsVUFBVTVCO2tDQUNaTCxPQUFPWSxLQUFLWSxJQUFJVSxJQUFJLENBQUNqQyxtQkFBUSw4REFBQ1AsOERBQVFBO2dDQUFDYyxPQUFPUDswQ0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd6RCw4REFBQ2IscURBQU1BO2dCQUFDK0MsU0FBU2xDLE9BQU87Z0JBQU1tQyxTQUFTM0I7MEJBQWE7Ozs7Ozs7Ozs7OztBQUloRTtHQTlDTVg7S0FBQUE7QUFnRE4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL01hY2hpbmVzLmpzPzM1OGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCdXR0b24sIE1lbnVMaXN0LCBUZXh0RmllbGQsIHVzZUNvbG9yU2NoZW1lfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL01lbnVJdGVtXCI7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9JbnB1dExhYmVsXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJAbXVpL21hdGVyaWFsL1NlbGVjdFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sXCI7XG5cbmNvbnN0IE1hY2hpbmVzID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge3ZtRGF0YX0gPSBwcm9wc1xuICAgIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbaWRzV2l0aFJpc2ssIHNldElkc1dpdGhSaXNrXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgc2V0SWQoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBjb25zdCBpbmZvID0ge1xuICAgICAgICAgICAgdm1zOiB2bURhdGEuZGF0YS52bXMsXG4gICAgICAgICAgICBydWxlczogdm1EYXRhLmRhdGEucnVsZXNcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnaW5mbycsIGluZm8pXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvZmlsZV9zZWxlY3Rpb24vYXR0YWNrP3ZtX2lkPSR7aWR9YCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbmZvKSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ31cbiAgICAgICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgc2V0SWRzV2l0aFJpc2soZGF0YS5pZHMpXG5cbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWwgbGFibGU9e2lkfT5NYWNoaW5lcyBJZHM8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aWR9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWFjaGluZSBJZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgPnt2bURhdGEuZGF0YS5pZHMubWFwKChpZCkgPT4gKDxNZW51SXRlbSB2YWx1ZT17aWR9PntpZH08L01lbnVJdGVtPikpfVxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZT17aWQgIT09IG51bGx9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFjaGluZXMiXSwibmFtZXMiOlsiQnV0dG9uIiwiTWVudUxpc3QiLCJUZXh0RmllbGQiLCJ1c2VDb2xvclNjaGVtZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJNZW51SXRlbSIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJGb3JtQ29udHJvbCIsIk1hY2hpbmVzIiwicHJvcHMiLCJ2bURhdGEiLCJpZCIsInNldElkIiwiaWRzV2l0aFJpc2siLCJzZXRJZHNXaXRoUmlzayIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGljayIsImluZm8iLCJ2bXMiLCJkYXRhIiwicnVsZXMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImpzb24iLCJpZHMiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImZ1bGxXaWR0aCIsImxhYmxlIiwibGFiZWwiLCJvbkNoYW5nZSIsIm1hcCIsImRpc2FibGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/Machines.js\n"));

/***/ })

});