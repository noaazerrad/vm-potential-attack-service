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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/MenuItem */ \"(app-client)/./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/InputLabel */ \"(app-client)/./node_modules/@mui/material/InputLabel/InputLabel.js\");\n/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Select */ \"(app-client)/./node_modules/@mui/material/Select/Select.js\");\n/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/FormControl */ \"(app-client)/./node_modules/@mui/material/FormControl/FormControl.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Machines = (props)=>{\n    _s();\n    const { vmData  } = props;\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    function handleChange(event) {\n        setId(event.target.value);\n    }\n    async function handleClick() {\n        const info = {\n            vms: vmData.vms,\n            rules: vmData.rules\n        };\n        const response = await fetch(\"/api/file_selection/attack?vm_id=\".concat(id), {\n            method: \"POST\",\n            body: JSON.stringify({\n                a: 1\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response;\n        console.log(data);\n    }\n    console.log(\"vmData\", vmData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            alignItems: \"center\",\n            padding: \"10px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                fullWidth: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        lable: id,\n                        children: \"Machines Ids\"\n                    }, void 0, false, {\n                        fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: id,\n                        label: \"Machine Id\",\n                        onChange: handleChange,\n                        children: vmData.data.ids.map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                value: id,\n                                children: id\n                            }, void 0, false, {\n                                fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                                lineNumber: 45,\n                                columnNumber: 48\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                disable: id !== null,\n                onClicke: handleClick,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Machines, \"/Li6T+2aYOMtLZoi3YjK/QlIYa4=\");\n_c = Machines;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Machines);\nvar _c;\n$RefreshReg$(_c, \"Machines\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL01hY2hpbmVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStEO0FBQ3pCO0FBQ1E7QUFDSTtBQUNSO0FBQ1U7QUFFcEQsTUFBTVMsV0FBVyxDQUFDQzs7SUFDZCxNQUFNLEVBQUNDLE9BQU0sRUFBQyxHQUFHRDtJQUNqQixNQUFNLENBQUNFLElBQUlDLE1BQU0sR0FBR1QsK0NBQVFBLENBQUM7SUFFN0IsU0FBU1UsYUFBYUMsS0FBSztRQUN2QkYsTUFBTUUsTUFBTUMsT0FBT0M7SUFDdkI7SUFFQSxlQUFlQztRQUNYLE1BQU1DLE9BQU87WUFDVEMsS0FBS1QsT0FBT1M7WUFDWkMsT0FBT1YsT0FBT1U7UUFDbEI7UUFFQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sb0NBQXVDLE9BQUhYLEtBQzdEO1lBQ0lZLFFBQVE7WUFDUkMsTUFBTUMsS0FBS0MsVUFBVTtnQkFBQ0MsR0FBRztZQUFDO1lBQzFCQyxTQUFTO2dCQUFDLGdCQUFnQjtZQUFrQjtRQUNoRDtRQUNKLE1BQU1DLE9BQU8sTUFBTVI7UUFDbkJTLFFBQVFDLElBQUlGO0lBQ2hCO0lBRUFDLFFBQVFDLElBQUksVUFBU3JCO0lBQ3JCLHFCQUNJLDhEQUFDc0I7UUFBSUMsT0FBTztZQUNSQyxTQUFTO1lBQ1RDLFlBQVk7WUFDWkMsU0FBUztRQUNiOzswQkFDSSw4REFBQzdCLGlFQUFXQTtnQkFBQzhCLFNBQVM7O2tDQUNsQiw4REFBQ2hDLGdFQUFVQTt3QkFBQ2lDLE9BQU8zQjtrQ0FBSTs7Ozs7O2tDQUN2Qiw4REFBQ0wsNERBQU1BO3dCQUNIVSxPQUFPTDt3QkFDUDRCLE9BQU07d0JBQ05DLFVBQVUzQjtrQ0FDWkgsT0FBT21CLEtBQUtZLElBQUlDLElBQUksQ0FBQy9CLG1CQUFRLDhEQUFDUCw4REFBUUE7Z0NBQUNZLE9BQU9MOzBDQUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3pELDhEQUFDWixxREFBTUE7Z0JBQUM0QyxTQUFTaEMsT0FBTztnQkFBTWlDLFVBQVUzQjswQkFBYTs7Ozs7Ozs7Ozs7O0FBR2pFO0dBM0NNVDtLQUFBQTtBQTZDTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvTWFjaGluZXMuanM/MzU4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0J1dHRvbiwgTWVudUxpc3QsIHVzZUNvbG9yU2NoZW1lfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL01lbnVJdGVtXCI7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9JbnB1dExhYmVsXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJAbXVpL21hdGVyaWFsL1NlbGVjdFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sXCI7XG5cbmNvbnN0IE1hY2hpbmVzID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge3ZtRGF0YX0gPSBwcm9wc1xuICAgIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUobnVsbClcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBzZXRJZChldmVudC50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSB7XG4gICAgICAgICAgICB2bXM6IHZtRGF0YS52bXMsXG4gICAgICAgICAgICBydWxlczogdm1EYXRhLnJ1bGVzXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2ZpbGVfc2VsZWN0aW9uL2F0dGFjaz92bV9pZD0ke2lkfWAsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2E6IDF9KSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ31cbiAgICAgICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCd2bURhdGEnLHZtRGF0YSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgICAgfX0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoPlxuICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGxhYmxlPXtpZH0+TWFjaGluZXMgSWRzPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lkfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1hY2hpbmUgSWRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgID57dm1EYXRhLmRhdGEuaWRzLm1hcCgoaWQpID0+ICg8TWVudUl0ZW0gdmFsdWU9e2lkfT57aWR9PC9NZW51SXRlbT4pKX1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICA8QnV0dG9uIGRpc2FibGU9e2lkICE9PSBudWxsfSBvbkNsaWNrZT17aGFuZGxlQ2xpY2t9PlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hY2hpbmVzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIk1lbnVMaXN0IiwidXNlQ29sb3JTY2hlbWUiLCJSZWFjdCIsInVzZVN0YXRlIiwiTWVudUl0ZW0iLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiRm9ybUNvbnRyb2wiLCJNYWNoaW5lcyIsInByb3BzIiwidm1EYXRhIiwiaWQiLCJzZXRJZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGljayIsImluZm8iLCJ2bXMiLCJydWxlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImEiLCJoZWFkZXJzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImZ1bGxXaWR0aCIsImxhYmxlIiwibGFiZWwiLCJvbkNoYW5nZSIsImlkcyIsIm1hcCIsImRpc2FibGUiLCJvbkNsaWNrZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/Machines.js\n"));

/***/ })

});