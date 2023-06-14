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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/MenuItem */ \"(app-client)/./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/InputLabel */ \"(app-client)/./node_modules/@mui/material/InputLabel/InputLabel.js\");\n/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Select */ \"(app-client)/./node_modules/@mui/material/Select/Select.js\");\n/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/FormControl */ \"(app-client)/./node_modules/@mui/material/FormControl/FormControl.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Machines = (props)=>{\n    _s();\n    const { vmData  } = props;\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [idsWithRisk, setIdsWithRisk] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [\n        idsWithRisk\n    ]);\n    function handleChange(event) {\n        setId(event.target.value);\n    }\n    async function handleClick() {\n        const info = {\n            vms: vmData.data.vms,\n            rules: vmData.data.rules\n        };\n        console.log(\"info\", info);\n        const response = await fetch(\"/api/file_selection/attack?vm_id=\".concat(id), {\n            method: \"POST\",\n            body: JSON.stringify(info),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        setIdsWithRisk(data.ids);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    padding: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        fullWidth: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                lable: id,\n                                children: \"Machines Ids\"\n                            }, void 0, false, {\n                                fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                value: id,\n                                label: \"Machine Id\",\n                                onChange: handleChange,\n                                children: vmData.data.ids.map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        value: id,\n                                        children: id\n                                    }, void 0, false, {\n                                        fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 52\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        disable: id !== null,\n                        onClick: handleClick,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Machines with potential risk\"\n                        }, void 0, false, {\n                            fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                            lineNumber: 60,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: idsWithRisk ? idsWithRisk.join(\",\") : \"no potential risk was found\"\n                        }, void 0, false, {\n                            fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                            lineNumber: 61,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                    lineNumber: 59,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/noa/Documents/local-env/development/vm-potential-attack-service/vm-firewall/src/Machines.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Machines, \"p4ElfI6Fbg+IUNwOAYlOZyxn6EY=\");\n_c = Machines;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Machines);\nvar _c;\n$RefreshReg$(_c, \"Machines\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL01hY2hpbmVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJGO0FBQzFDO0FBQ0g7QUFDSTtBQUNSO0FBQ1U7QUFFcEQsTUFBTWEsV0FBVyxDQUFDQzs7SUFDZCxNQUFNLEVBQUNDLE9BQU0sRUFBQyxHQUFHRDtJQUNqQixNQUFNLENBQUNFLElBQUlDLE1BQU0sR0FBR1QsK0NBQVFBLENBQUM7SUFDN0IsTUFBTSxDQUFDVSxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDO0lBRS9DRCxnREFBU0EsQ0FBQyxLQUVWLEdBQUc7UUFBQ1c7S0FBWTtJQUVoQixTQUFTRSxhQUFhQyxLQUFLO1FBQ3ZCSixNQUFNSSxNQUFNQyxPQUFPQztJQUN2QjtJQUVBLGVBQWVDO1FBQ1gsTUFBTUMsT0FBTztZQUNUQyxLQUFLWCxPQUFPWSxLQUFLRDtZQUNqQkUsT0FBT2IsT0FBT1ksS0FBS0M7UUFDdkI7UUFDQUMsUUFBUUMsSUFBSSxRQUFRTDtRQUNwQixNQUFNTSxXQUFXLE1BQU1DLE1BQU0sb0NBQXVDLE9BQUhoQixLQUM3RDtZQUNJaUIsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxVQUFVWDtZQUNyQlksU0FBUztnQkFBQyxnQkFBZ0I7WUFBa0I7UUFDaEQ7UUFDSixNQUFNVixPQUFPLE1BQU1JLFNBQVNPO1FBQzVCbkIsZUFBZVEsS0FBS1k7SUFFeEI7SUFHQSxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQTtnQkFBSUMsT0FBTztvQkFDUkMsU0FBUztvQkFDVEMsWUFBWTtvQkFDWkMsU0FBUztnQkFDYjs7a0NBQ0ksOERBQUNoQyxpRUFBV0E7d0JBQUNpQyxTQUFTOzswQ0FDbEIsOERBQUNuQyxnRUFBVUE7Z0NBQUNvQyxPQUFPOUI7MENBQUk7Ozs7OzswQ0FDdkIsOERBQUNMLDREQUFNQTtnQ0FDSFksT0FBT1A7Z0NBQ1ArQixPQUFNO2dDQUNOQyxVQUFVNUI7MENBQ1pMLE9BQU9ZLEtBQUtZLElBQUlVLElBQUksQ0FBQ2pDLG1CQUFRLDhEQUFDUCw4REFBUUE7d0NBQUNjLE9BQU9QO2tEQUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3pELDhEQUFDZixxREFBTUE7d0JBQUNpRCxTQUFTbEMsT0FBTzt3QkFBTW1DLFNBQVMzQjtrQ0FBYTs7Ozs7Ozs7Ozs7OzBCQUd4RCw4REFBQ2dCOzBCQUNPLDRFQUFDQTs7c0NBQ0csOERBQUNZO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDO3NDQUFJbkMsY0FBY0EsWUFBWW9DLEtBQUssT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkU7R0ExRE16QztLQUFBQTtBQTRETiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvTWFjaGluZXMuanM/MzU4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JveCwgQnV0dG9uLCBNZW51TGlzdCwgVGV4dEZpZWxkLCBUeXBvZ3JhcGh5LCB1c2VDb2xvclNjaGVtZX0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL01lbnVJdGVtXCI7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9JbnB1dExhYmVsXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJAbXVpL21hdGVyaWFsL1NlbGVjdFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sXCI7XG5cbmNvbnN0IE1hY2hpbmVzID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge3ZtRGF0YX0gPSBwcm9wc1xuICAgIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbaWRzV2l0aFJpc2ssIHNldElkc1dpdGhSaXNrXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgfSwgW2lkc1dpdGhSaXNrXSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBzZXRJZChldmVudC50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSB7XG4gICAgICAgICAgICB2bXM6IHZtRGF0YS5kYXRhLnZtcyxcbiAgICAgICAgICAgIHJ1bGVzOiB2bURhdGEuZGF0YS5ydWxlc1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmZvJywgaW5mbylcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9maWxlX3NlbGVjdGlvbi9hdHRhY2s/dm1faWQ9JHtpZH1gLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGluZm8pLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBzZXRJZHNXaXRoUmlzayhkYXRhLmlkcylcblxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgbGFibGU9e2lkfT5NYWNoaW5lcyBJZHM8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWFjaGluZSBJZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICA+e3ZtRGF0YS5kYXRhLmlkcy5tYXAoKGlkKSA9PiAoPE1lbnVJdGVtIHZhbHVlPXtpZH0+e2lkfTwvTWVudUl0ZW0+KSl9XG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlPXtpZCAhPT0gbnVsbH0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+TWFjaGluZXMgd2l0aCBwb3RlbnRpYWwgcmlzazwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2lkc1dpdGhSaXNrID8gaWRzV2l0aFJpc2suam9pbignLCcpIDogJ25vIHBvdGVudGlhbCByaXNrIHdhcyBmb3VuZCd9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWNoaW5lcyJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJNZW51TGlzdCIsIlRleHRGaWVsZCIsIlR5cG9ncmFwaHkiLCJ1c2VDb2xvclNjaGVtZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNZW51SXRlbSIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJGb3JtQ29udHJvbCIsIk1hY2hpbmVzIiwicHJvcHMiLCJ2bURhdGEiLCJpZCIsInNldElkIiwiaWRzV2l0aFJpc2siLCJzZXRJZHNXaXRoUmlzayIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGljayIsImluZm8iLCJ2bXMiLCJkYXRhIiwicnVsZXMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImpzb24iLCJpZHMiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImZ1bGxXaWR0aCIsImxhYmxlIiwibGFiZWwiLCJvbkNoYW5nZSIsIm1hcCIsImRpc2FibGUiLCJvbkNsaWNrIiwiaDIiLCJoMyIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/Machines.js\n"));

/***/ })

});