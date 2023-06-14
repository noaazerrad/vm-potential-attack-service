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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/MenuItem */ \"(app-client)/./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/InputLabel */ \"(app-client)/./node_modules/@mui/material/InputLabel/InputLabel.js\");\n/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Select */ \"(app-client)/./node_modules/@mui/material/Select/Select.js\");\n/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/FormControl */ \"(app-client)/./node_modules/@mui/material/FormControl/FormControl.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Machines = (props)=>{\n    _s();\n    const { vmData  } = props;\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    function handleChange(event) {\n        setId(event.target.value);\n    }\n    async function handleClick() {\n        const info = {\n            vms: vmData.data.vms,\n            rules: vmData.data.rules\n        };\n        console.log(\"info\", info);\n        const response = await fetch(\"/api/file_selection/attack?vm_id=\".concat(id), {\n            method: \"POST\",\n            body: JSON.stringify(info),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        console.log(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            alignItems: \"center\",\n            padding: \"10px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                fullWidth: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        lable: id,\n                        children: \"Machines Ids\"\n                    }, void 0, false, {\n                        fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: id,\n                        label: \"Machine Id\",\n                        onChange: handleChange,\n                        children: vmData.data.ids.map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                value: id,\n                                children: id\n                            }, void 0, false, {\n                                fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                                lineNumber: 45,\n                                columnNumber: 48\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                disable: id !== null,\n                onClick: handleClick,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Machines, \"/Li6T+2aYOMtLZoi3YjK/QlIYa4=\");\n_c = Machines;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Machines);\nvar _c;\n$RefreshReg$(_c, \"Machines\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL01hY2hpbmVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStEO0FBQ3pCO0FBQ1E7QUFDSTtBQUNSO0FBQ1U7QUFFcEQsTUFBTVMsV0FBVyxDQUFDQzs7SUFDZCxNQUFNLEVBQUNDLE9BQU0sRUFBQyxHQUFHRDtJQUNqQixNQUFNLENBQUNFLElBQUlDLE1BQU0sR0FBR1QsK0NBQVFBLENBQUM7SUFFN0IsU0FBU1UsYUFBYUMsS0FBSztRQUN2QkYsTUFBTUUsTUFBTUMsT0FBT0M7SUFDdkI7SUFFQSxlQUFlQztRQUNYLE1BQU1DLE9BQU87WUFDVEMsS0FBS1QsT0FBT1UsS0FBS0Q7WUFDakJFLE9BQU9YLE9BQU9VLEtBQUtDO1FBQ3ZCO1FBQ0FDLFFBQVFDLElBQUksUUFBUUw7UUFDcEIsTUFBTU0sV0FBVyxNQUFNQyxNQUFNLG9DQUF1QyxPQUFIZCxLQUM3RDtZQUNJZSxRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFVBQVVYO1lBQ3JCWSxTQUFTO2dCQUFDLGdCQUFnQjtZQUFrQjtRQUNoRDtRQUNKLE1BQU1WLE9BQU8sTUFBTUksU0FBU087UUFDNUJULFFBQVFDLElBQUlIO0lBQ2hCO0lBR0EscUJBQ0ksOERBQUNZO1FBQUlDLE9BQU87WUFDUkMsU0FBUztZQUNUQyxZQUFZO1lBQ1pDLFNBQVM7UUFDYjs7MEJBQ0ksOERBQUM3QixpRUFBV0E7Z0JBQUM4QixTQUFTOztrQ0FDbEIsOERBQUNoQyxnRUFBVUE7d0JBQUNpQyxPQUFPM0I7a0NBQUk7Ozs7OztrQ0FDdkIsOERBQUNMLDREQUFNQTt3QkFDSFUsT0FBT0w7d0JBQ1A0QixPQUFNO3dCQUNOQyxVQUFVM0I7a0NBQ1pILE9BQU9VLEtBQUtxQixJQUFJQyxJQUFJLENBQUMvQixtQkFBUSw4REFBQ1AsOERBQVFBO2dDQUFDWSxPQUFPTDswQ0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd6RCw4REFBQ1oscURBQU1BO2dCQUFDNEMsU0FBU2hDLE9BQU87Z0JBQU1pQyxTQUFTM0I7MEJBQWE7Ozs7Ozs7Ozs7OztBQUdoRTtHQTNDTVQ7S0FBQUE7QUE2Q04sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL01hY2hpbmVzLmpzPzM1OGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCdXR0b24sIE1lbnVMaXN0LCB1c2VDb2xvclNjaGVtZX0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9NZW51SXRlbVwiO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvSW5wdXRMYWJlbFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9TZWxlY3RcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbFwiO1xuXG5jb25zdCBNYWNoaW5lcyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHt2bURhdGF9ID0gcHJvcHNcbiAgICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgc2V0SWQoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBjb25zdCBpbmZvID0ge1xuICAgICAgICAgICAgdm1zOiB2bURhdGEuZGF0YS52bXMsXG4gICAgICAgICAgICBydWxlczogdm1EYXRhLmRhdGEucnVsZXNcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnaW5mbycsIGluZm8pXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvZmlsZV9zZWxlY3Rpb24vYXR0YWNrP3ZtX2lkPSR7aWR9YCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbmZvKSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ31cbiAgICAgICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWwgbGFibGU9e2lkfT5NYWNoaW5lcyBJZHM8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aWR9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWFjaGluZSBJZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgPnt2bURhdGEuZGF0YS5pZHMubWFwKChpZCkgPT4gKDxNZW51SXRlbSB2YWx1ZT17aWR9PntpZH08L01lbnVJdGVtPikpfVxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZT17aWQgIT09IG51bGx9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWNoaW5lcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJNZW51TGlzdCIsInVzZUNvbG9yU2NoZW1lIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1lbnVJdGVtIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIkZvcm1Db250cm9sIiwiTWFjaGluZXMiLCJwcm9wcyIsInZtRGF0YSIsImlkIiwic2V0SWQiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJpbmZvIiwidm1zIiwiZGF0YSIsInJ1bGVzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJqc29uIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJmdWxsV2lkdGgiLCJsYWJsZSIsImxhYmVsIiwib25DaGFuZ2UiLCJpZHMiLCJtYXAiLCJkaXNhYmxlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/Machines.js\n"));

/***/ })

});