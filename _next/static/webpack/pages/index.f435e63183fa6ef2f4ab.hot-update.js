webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ConvertForm/ManageConversion.js":
/*!****************************************************!*\
  !*** ./components/ConvertForm/ManageConversion.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/web3-contracts */ \"./lib/web3-contracts.js\");\n/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/utils */ \"./lib/utils.js\");\n/* harmony import */ var components_ConvertSteps_ConvertSteps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ConvertSteps/ConvertSteps */ \"./components/ConvertSteps/ConvertSteps.js\");\n/* harmony import */ var components_utils_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/utils/store */ \"./components/utils/store.js\");\n/* harmony import */ var components_utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/utils/constants */ \"./components/utils/constants.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/alverbner/Projects/atix/sovryn/zero-continuos-token-gui/components/ConvertForm/ManageConversion.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\nfunction ManageConversion(_ref) {\n  _s();\n\n  var handleReturnHome = _ref.handleReturnHome;\n  var openOrder = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useOpenOrder\"])();\n  var claimOrder = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrder\"])();\n  var waitForBatch = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForBatchToFinish\"])();\n  var waitForTx = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForTx\"])();\n  var claimOrderReceiptAmount = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrderReceiptAmount\"])();\n  var changeAllowance = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useApprove\"])();\n  var getAllowance = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useAllowance\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      conversionSteps = _useState[0],\n      setConversionSteps = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(Object(lib_utils__WEBPACK_IMPORTED_MODULE_6__[\"bigNum\"])(-1)),\n      convertedTotal = _useState2[0],\n      setConvertedTotal = _useState2[1];\n\n  var _useStore = Object(components_utils_store__WEBPACK_IMPORTED_MODULE_8__[\"useStore\"])(function (state) {\n    return [state.toBonded, state.amountSource, state.openOrderHash, state.setOrderHash, state.savedSteps];\n  }),\n      _useStore2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useStore, 5),\n      toBonded = _useStore2[0],\n      amountSource = _useStore2[1],\n      openOrderHash = _useStore2[2],\n      setOrderHash = _useStore2[3],\n      savedSteps = _useStore2[4];\n\n  var updateConvertedValue = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useCallback\"])( /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(hash) {\n      var amount;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return claimOrderReceiptAmount(hash);\n\n            case 3:\n              amount = _context.sent;\n              setConvertedTotal(amount);\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              throw new Error(_context.t0);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function (_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(), [claimOrderReceiptAmount]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var cancelled = false; // Interacting with the bonding curve involves 2, 3 or 4 transactions (depending on the direction and state of allowance):\n    // 1. Reset approval (If we're converting COLLATERAL -> BONDED, an allowance was previously set but abandoned)\n    // 2. Raise approval (If we're converting COLLATERAL -> BONDED, the current allowance is not high enough)\n    // 3. Open a buy order\n    // 4. Claim the order\n\n    var createConvertSteps = /*#__PURE__*/function () {\n      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        var steps, allowance;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                steps = []; // First we check for allowance if the direction is COLLATERAL -> BONDED\n\n                if (!toBonded) {\n                  _context2.next = 6;\n                  break;\n                }\n\n                _context2.next = 4;\n                return getAllowance();\n\n              case 4:\n                allowance = _context2.sent;\n\n                // and if we need more, add a step to ask for an approval\n                if (allowance.lt(Object(lib_utils__WEBPACK_IMPORTED_MODULE_6__[\"bigNum\"])(amountSource)) && (savedSteps.length === 0 || savedSteps[0].name === components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_RESET_APPROVAL\"] || savedSteps[0].name === components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_RAISE_APPROVAL\"])) {\n                  steps.unshift(['Raise approval', {\n                    onTxCreated: function onTxCreated() {\n                      return changeAllowance(amountSource);\n                    },\n                    onResumeWait: function onResumeWait(hash) {\n                      return waitForTx(hash);\n                    },\n                    showDesc: true,\n                    name: components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_RAISE_APPROVAL\"]\n                  }]); // Then there's the case when a user has an allowance set to the market maker contract\n                  // but wants to convert even more tokens this time. When dealing with this case\n                  // we want to first prepend a transaction to reset the allowance back to zero\n                  // (before raising it in the next transaction from above).\n                  // Note: the second part of the if statement is a workaround. When state is saved and restored \n                  //       and the buy order has been created already, the transfer was made and allowance is zero\n                  //       resulting on this step not to be included and not matching the saved steps.\n                  //       This is not a nice fix but due to time constraints is better than nothing.\n\n                  if (!allowance.isZero() || savedSteps[0].name === components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_RESET_APPROVAL\"]) {\n                    steps.unshift(['Reset approval', {\n                      onTxCreated: function onTxCreated() {\n                        return changeAllowance(0);\n                      },\n                      onResumeWait: function onResumeWait(hash) {\n                        return waitForTx(hash);\n                      },\n                      showDesc: true,\n                      name: components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_RESET_APPROVAL\"]\n                    }]);\n                  }\n                }\n\n              case 6:\n                // Next add the open order\n                steps.push([\"Create \".concat(toBonded ? 'buy' : 'sell', \" order\"), {\n                  onTxCreated: function onTxCreated() {\n                    console.log('onTxCreated', amountSource, toBonded);\n                    return openOrder(amountSource, toBonded);\n                  },\n                  // We need to store a reference to the hash so we can use it in the following step\n                  onHashCreated: function onHashCreated(hash) {\n                    setOrderHash(hash);\n                  },\n                  onWaitForTx: function onWaitForTx(hash) {\n                    return waitForTx(hash);\n                  },\n                  showDesc: true,\n                  name: components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_CREATE_ORDER\"]\n                }]);\n                steps.push(['Wait for batch to finish', {\n                  onWaitCondition: function onWaitCondition(hash) {\n                    return waitForBatch(openOrderHash ? openOrderHash : hash);\n                  },\n                  showDesc: false,\n                  name: components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_WAIT_BATCH\"]\n                }]); // And finally the claim order\n\n                steps.push(['Claim order', {\n                  onOrderClaim: function onOrderClaim(hash) {\n                    return claimOrder(openOrderHash ? openOrderHash : hash, toBonded);\n                  },\n                  onResumeWait: function onResumeWait(hash) {\n                    return waitForTx(hash);\n                  },\n                  onTxMined: function onTxMined(hash) {\n                    return updateConvertedValue(hash);\n                  },\n                  showDesc: true,\n                  disableAbandon: true,\n                  name: components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_CLAIM_BATCH\"]\n                }]); // Update state to reflect the correct amount of steps\n                // Show loader for a small amount of time to provide a smooth visual experience\n\n                setTimeout(function () {\n                  if (!cancelled) {\n                    setConversionSteps(steps);\n                  }\n                }, 900);\n\n              case 10:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function createConvertSteps() {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n\n    createConvertSteps();\n    return function () {\n      cancelled = true;\n    };\n  }, [changeAllowance, claimOrder, amountSource, getAllowance, openOrder, toBonded, updateConvertedValue]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, conversionSteps.length > 0 ? __jsx(components_ConvertSteps_ConvertSteps__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    steps: conversionSteps,\n    toBonded: toBonded,\n    fromAmount: amountSource,\n    convertedTotal: convertedTotal,\n    onReturnHome: handleReturnHome,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 9\n    }\n  }) : __jsx(_StyledDiv, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(ManageConversion, \"8lsjmf/0c5mZxGC5YntlOkt0pjw=\", false, function () {\n  return [lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useOpenOrder\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrder\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForBatchToFinish\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForTx\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrderReceiptAmount\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useApprove\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useAllowance\"], components_utils_store__WEBPACK_IMPORTED_MODULE_8__[\"useStore\"]];\n});\n\n_c = ManageConversion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageConversion);\n\nvar _StyledDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"div\").withConfig({\n  displayName: \"ManageConversion___StyledDiv\",\n  componentId: \"sc-rlfcuu-0\"\n})([\"display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"ManageConversion\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db252ZXJ0Rm9ybS9NYW5hZ2VDb252ZXJzaW9uLmpzP2RmYTAiXSwibmFtZXMiOlsiTWFuYWdlQ29udmVyc2lvbiIsImhhbmRsZVJldHVybkhvbWUiLCJvcGVuT3JkZXIiLCJ1c2VPcGVuT3JkZXIiLCJjbGFpbU9yZGVyIiwidXNlQ2xhaW1PcmRlciIsIndhaXRGb3JCYXRjaCIsInVzZVdhaXRGb3JCYXRjaFRvRmluaXNoIiwid2FpdEZvclR4IiwidXNlV2FpdEZvclR4IiwiY2xhaW1PcmRlclJlY2VpcHRBbW91bnQiLCJ1c2VDbGFpbU9yZGVyUmVjZWlwdEFtb3VudCIsImNoYW5nZUFsbG93YW5jZSIsInVzZUFwcHJvdmUiLCJnZXRBbGxvd2FuY2UiLCJ1c2VBbGxvd2FuY2UiLCJ1c2VTdGF0ZSIsImNvbnZlcnNpb25TdGVwcyIsInNldENvbnZlcnNpb25TdGVwcyIsImJpZ051bSIsImNvbnZlcnRlZFRvdGFsIiwic2V0Q29udmVydGVkVG90YWwiLCJ1c2VTdG9yZSIsInN0YXRlIiwidG9Cb25kZWQiLCJhbW91bnRTb3VyY2UiLCJvcGVuT3JkZXJIYXNoIiwic2V0T3JkZXJIYXNoIiwic2F2ZWRTdGVwcyIsInVwZGF0ZUNvbnZlcnRlZFZhbHVlIiwidXNlQ2FsbGJhY2siLCJoYXNoIiwiYW1vdW50IiwiRXJyb3IiLCJ1c2VFZmZlY3QiLCJjYW5jZWxsZWQiLCJjcmVhdGVDb252ZXJ0U3RlcHMiLCJzdGVwcyIsImFsbG93YW5jZSIsImx0IiwibGVuZ3RoIiwibmFtZSIsIlNURVBfUkVTRVRfQVBQUk9WQUwiLCJTVEVQX1JBSVNFX0FQUFJPVkFMIiwidW5zaGlmdCIsIm9uVHhDcmVhdGVkIiwib25SZXN1bWVXYWl0Iiwic2hvd0Rlc2MiLCJpc1plcm8iLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIm9uSGFzaENyZWF0ZWQiLCJvbldhaXRGb3JUeCIsIlNURVBfQ1JFQVRFX09SREVSIiwib25XYWl0Q29uZGl0aW9uIiwiU1RFUF9XQUlUX0JBVENIIiwib25PcmRlckNsYWltIiwib25UeE1pbmVkIiwiZGlzYWJsZUFiYW5kb24iLCJTVEVQX0NMQUlNX0JBVENIIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxnQkFBVCxPQUFnRDtBQUFBOztBQUFBLE1BQXBCQyxnQkFBb0IsUUFBcEJBLGdCQUFvQjtBQUM5QyxNQUFNQyxTQUFTLEdBQUdDLHVFQUFZLEVBQTlCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHQyx3RUFBYSxFQUFoQztBQUNBLE1BQU1DLFlBQVksR0FBR0Msa0ZBQXVCLEVBQTVDO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQyx1RUFBWSxFQUE5QjtBQUNBLE1BQU1DLHVCQUF1QixHQUFHQyxxRkFBMEIsRUFBMUQ7QUFDQSxNQUFNQyxlQUFlLEdBQUdDLHFFQUFVLEVBQWxDO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyx1RUFBWSxFQUFqQzs7QUFDQSxrQkFBOENDLHNEQUFRLENBQUMsRUFBRCxDQUF0RDtBQUFBLE1BQU9DLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUNBLG1CQUE0Q0Ysc0RBQVEsQ0FBQ0csd0RBQU0sQ0FBQyxDQUFDLENBQUYsQ0FBUCxDQUFwRDtBQUFBLE1BQU9DLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLGtCQUEwRUMsdUVBQVEsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSSxDQUN4RkEsS0FBSyxDQUFDQyxRQURrRixFQUV4RkQsS0FBSyxDQUFDRSxZQUZrRixFQUd4RkYsS0FBSyxDQUFDRyxhQUhrRixFQUl4RkgsS0FBSyxDQUFDSSxZQUprRixFQUt4RkosS0FBSyxDQUFDSyxVQUxrRixDQUFKO0FBQUEsR0FBTixDQUFsRjtBQUFBO0FBQUEsTUFBT0osUUFBUDtBQUFBLE1BQWlCQyxZQUFqQjtBQUFBLE1BQStCQyxhQUEvQjtBQUFBLE1BQThDQyxZQUE5QztBQUFB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QUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBbEJELGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxPQUF4Qjs7QUEwRkFBLHNCQUFrQjtBQUVsQixXQUFPLFlBQU07QUFDWEQsZUFBUyxHQUFHLElBQVo7QUFDRCxLQUZEO0FBR0QsR0F2R1EsRUF1R04sQ0FDRHZCLGVBREMsRUFFRFIsVUFGQyxFQUdEcUIsWUFIQyxFQUlEWCxZQUpDLEVBS0RaLFNBTEMsRUFNRHNCLFFBTkMsRUFPREssb0JBUEMsQ0F2R00sQ0FBVDtBQWlIQSxTQUNFLG1FQUNHWixlQUFlLENBQUN1QixNQUFoQixHQUF5QixDQUF6QixHQUNDLE1BQUMsNEVBQUQ7QUFDRSxTQUFLLEVBQUV2QixlQURUO0FBRUUsWUFBUSxFQUFFTyxRQUZaO0FBR0UsY0FBVSxFQUFFQyxZQUhkO0FBSUUsa0JBQWMsRUFBRUwsY0FKbEI7QUFLRSxnQkFBWSxFQUFFbkIsZ0JBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxHQVNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixDQURGO0FBdUJEOztHQXZLUUQsZ0I7VUFDV0csK0QsRUFDQ0UsZ0UsRUFDRUUsMEUsRUFDSEUsK0QsRUFDY0UsNkUsRUFDUkUsNkQsRUFDSEUsK0QsRUFHcURPLCtEOzs7S0FWbkV0QixnQjtBQXlLTUEsK0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnZlcnRGb3JtL01hbmFnZUNvbnZlcnNpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHVzZU9wZW5PcmRlcixcbiAgdXNlQ2xhaW1PcmRlcixcbiAgdXNlQXBwcm92ZSxcbiAgdXNlQWxsb3dhbmNlLFxuICB1c2VDbGFpbU9yZGVyUmVjZWlwdEFtb3VudCxcbiAgdXNlV2FpdEZvckJhdGNoVG9GaW5pc2gsXG4gIHVzZVdhaXRGb3JUeFxufSBmcm9tICdsaWIvd2ViMy1jb250cmFjdHMnXG5pbXBvcnQgeyBiaWdOdW0gfSBmcm9tICdsaWIvdXRpbHMnXG5pbXBvcnQgQ29udmVydFN0ZXBzIGZyb20gJ2NvbXBvbmVudHMvQ29udmVydFN0ZXBzL0NvbnZlcnRTdGVwcydcblxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdjb21wb25lbnRzL3V0aWxzL3N0b3JlJztcbmltcG9ydCB7IFNURVBfQ0xBSU1fQkFUQ0gsIFNURVBfQ1JFQVRFX09SREVSLCBTVEVQX1JBSVNFX0FQUFJPVkFMLCBTVEVQX1JFU0VUX0FQUFJPVkFMLCBTVEVQX1dBSVRfQkFUQ0ggfSBmcm9tICdjb21wb25lbnRzL3V0aWxzL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIE1hbmFnZUNvbnZlcnNpb24oeyBoYW5kbGVSZXR1cm5Ib21lIH0pIHtcbiAgY29uc3Qgb3Blbk9yZGVyID0gdXNlT3Blbk9yZGVyKClcbiAgY29uc3QgY2xhaW1PcmRlciA9IHVzZUNsYWltT3JkZXIoKVxuICBjb25zdCB3YWl0Rm9yQmF0Y2ggPSB1c2VXYWl0Rm9yQmF0Y2hUb0ZpbmlzaCgpXG4gIGNvbnN0IHdhaXRGb3JUeCA9IHVzZVdhaXRGb3JUeCgpXG4gIGNvbnN0IGNsYWltT3JkZXJSZWNlaXB0QW1vdW50ID0gdXNlQ2xhaW1PcmRlclJlY2VpcHRBbW91bnQoKVxuICBjb25zdCBjaGFuZ2VBbGxvd2FuY2UgPSB1c2VBcHByb3ZlKClcbiAgY29uc3QgZ2V0QWxsb3dhbmNlID0gdXNlQWxsb3dhbmNlKClcbiAgY29uc3QgW2NvbnZlcnNpb25TdGVwcywgc2V0Q29udmVyc2lvblN0ZXBzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbY29udmVydGVkVG90YWwsIHNldENvbnZlcnRlZFRvdGFsXSA9IHVzZVN0YXRlKGJpZ051bSgtMSkpXG4gIGNvbnN0IFt0b0JvbmRlZCwgYW1vdW50U291cmNlLCBvcGVuT3JkZXJIYXNoLCBzZXRPcmRlckhhc2gsIHNhdmVkU3RlcHNdID0gdXNlU3RvcmUoc3RhdGUgPT4gW1xuICAgICAgc3RhdGUudG9Cb25kZWQsXG4gICAgICBzdGF0ZS5hbW91bnRTb3VyY2UsXG4gICAgICBzdGF0ZS5vcGVuT3JkZXJIYXNoLFxuICAgICAgc3RhdGUuc2V0T3JkZXJIYXNoLFxuICAgICAgc3RhdGUuc2F2ZWRTdGVwc1xuICBdKVxuXG4gIGNvbnN0IHVwZGF0ZUNvbnZlcnRlZFZhbHVlID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgaGFzaCA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhbW91bnQgPSBhd2FpdCBjbGFpbU9yZGVyUmVjZWlwdEFtb3VudChoYXNoKVxuXG4gICAgICAgIHNldENvbnZlcnRlZFRvdGFsKGFtb3VudClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NsYWltT3JkZXJSZWNlaXB0QW1vdW50XVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIC8vIEludGVyYWN0aW5nIHdpdGggdGhlIGJvbmRpbmcgY3VydmUgaW52b2x2ZXMgMiwgMyBvciA0IHRyYW5zYWN0aW9ucyAoZGVwZW5kaW5nIG9uIHRoZSBkaXJlY3Rpb24gYW5kIHN0YXRlIG9mIGFsbG93YW5jZSk6XG4gICAgLy8gMS4gUmVzZXQgYXBwcm92YWwgKElmIHdlJ3JlIGNvbnZlcnRpbmcgQ09MTEFURVJBTCAtPiBCT05ERUQsIGFuIGFsbG93YW5jZSB3YXMgcHJldmlvdXNseSBzZXQgYnV0IGFiYW5kb25lZClcbiAgICAvLyAyLiBSYWlzZSBhcHByb3ZhbCAoSWYgd2UncmUgY29udmVydGluZyBDT0xMQVRFUkFMIC0+IEJPTkRFRCwgdGhlIGN1cnJlbnQgYWxsb3dhbmNlIGlzIG5vdCBoaWdoIGVub3VnaClcbiAgICAvLyAzLiBPcGVuIGEgYnV5IG9yZGVyXG4gICAgLy8gNC4gQ2xhaW0gdGhlIG9yZGVyXG4gICAgY29uc3QgY3JlYXRlQ29udmVydFN0ZXBzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHN0ZXBzID0gW11cblxuICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgZm9yIGFsbG93YW5jZSBpZiB0aGUgZGlyZWN0aW9uIGlzIENPTExBVEVSQUwgLT4gQk9OREVEXG4gICAgICBpZiAodG9Cb25kZWQpIHtcbiAgICAgICAgY29uc3QgYWxsb3dhbmNlID0gYXdhaXQgZ2V0QWxsb3dhbmNlKClcblxuICAgICAgICAvLyBhbmQgaWYgd2UgbmVlZCBtb3JlLCBhZGQgYSBzdGVwIHRvIGFzayBmb3IgYW4gYXBwcm92YWxcbiAgICAgICAgaWYgKGFsbG93YW5jZS5sdChiaWdOdW0oYW1vdW50U291cmNlKSkgJiYgKHNhdmVkU3RlcHMubGVuZ3RoID09PSAwIHx8IHNhdmVkU3RlcHNbMF0ubmFtZSA9PT0gU1RFUF9SRVNFVF9BUFBST1ZBTCB8fCBzYXZlZFN0ZXBzWzBdLm5hbWUgPT09IFNURVBfUkFJU0VfQVBQUk9WQUwpKSB7XG4gICAgICAgICAgICBzdGVwcy51bnNoaWZ0KFtcbiAgICAgICAgICAgICAgJ1JhaXNlIGFwcHJvdmFsJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uVHhDcmVhdGVkOiAoKSA9PiBjaGFuZ2VBbGxvd2FuY2UoYW1vdW50U291cmNlKSxcbiAgICAgICAgICAgICAgICBvblJlc3VtZVdhaXQ6IChoYXNoKSA9PiB3YWl0Rm9yVHgoaGFzaCksXG4gICAgICAgICAgICAgICAgc2hvd0Rlc2M6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogU1RFUF9SQUlTRV9BUFBST1ZBTFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSlcblxuICAgICAgICAgIC8vIFRoZW4gdGhlcmUncyB0aGUgY2FzZSB3aGVuIGEgdXNlciBoYXMgYW4gYWxsb3dhbmNlIHNldCB0byB0aGUgbWFya2V0IG1ha2VyIGNvbnRyYWN0XG4gICAgICAgICAgLy8gYnV0IHdhbnRzIHRvIGNvbnZlcnQgZXZlbiBtb3JlIHRva2VucyB0aGlzIHRpbWUuIFdoZW4gZGVhbGluZyB3aXRoIHRoaXMgY2FzZVxuICAgICAgICAgIC8vIHdlIHdhbnQgdG8gZmlyc3QgcHJlcGVuZCBhIHRyYW5zYWN0aW9uIHRvIHJlc2V0IHRoZSBhbGxvd2FuY2UgYmFjayB0byB6ZXJvXG4gICAgICAgICAgLy8gKGJlZm9yZSByYWlzaW5nIGl0IGluIHRoZSBuZXh0IHRyYW5zYWN0aW9uIGZyb20gYWJvdmUpLlxuICAgICAgICAgIC8vIE5vdGU6IHRoZSBzZWNvbmQgcGFydCBvZiB0aGUgaWYgc3RhdGVtZW50IGlzIGEgd29ya2Fyb3VuZC4gV2hlbiBzdGF0ZSBpcyBzYXZlZCBhbmQgcmVzdG9yZWQgXG4gICAgICAgICAgLy8gICAgICAgYW5kIHRoZSBidXkgb3JkZXIgaGFzIGJlZW4gY3JlYXRlZCBhbHJlYWR5LCB0aGUgdHJhbnNmZXIgd2FzIG1hZGUgYW5kIGFsbG93YW5jZSBpcyB6ZXJvXG4gICAgICAgICAgLy8gICAgICAgcmVzdWx0aW5nIG9uIHRoaXMgc3RlcCBub3QgdG8gYmUgaW5jbHVkZWQgYW5kIG5vdCBtYXRjaGluZyB0aGUgc2F2ZWQgc3RlcHMuXG4gICAgICAgICAgLy8gICAgICAgVGhpcyBpcyBub3QgYSBuaWNlIGZpeCBidXQgZHVlIHRvIHRpbWUgY29uc3RyYWludHMgaXMgYmV0dGVyIHRoYW4gbm90aGluZy5cbiAgICAgICAgICBpZiAoIWFsbG93YW5jZS5pc1plcm8oKSB8fCBzYXZlZFN0ZXBzWzBdLm5hbWUgPT09IFNURVBfUkVTRVRfQVBQUk9WQUwpIHtcbiAgICAgICAgICAgIHN0ZXBzLnVuc2hpZnQoW1xuICAgICAgICAgICAgICAnUmVzZXQgYXBwcm92YWwnLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb25UeENyZWF0ZWQ6ICgpID0+IGNoYW5nZUFsbG93YW5jZSgwKSxcbiAgICAgICAgICAgICAgICBvblJlc3VtZVdhaXQ6IChoYXNoKSA9PiB3YWl0Rm9yVHgoaGFzaCksXG4gICAgICAgICAgICAgICAgc2hvd0Rlc2M6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogU1RFUF9SRVNFVF9BUFBST1ZBTFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTmV4dCBhZGQgdGhlIG9wZW4gb3JkZXJcbiAgICAgIHN0ZXBzLnB1c2goW1xuICAgICAgICBgQ3JlYXRlICR7dG9Cb25kZWQgPyAnYnV5JyA6ICdzZWxsJ30gb3JkZXJgLFxuICAgICAgICB7XG4gICAgICAgICAgb25UeENyZWF0ZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvblR4Q3JlYXRlZCcsIGFtb3VudFNvdXJjZSwgdG9Cb25kZWQpXG4gICAgICAgICAgICByZXR1cm4gb3Blbk9yZGVyKGFtb3VudFNvdXJjZSwgdG9Cb25kZWQpXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gc3RvcmUgYSByZWZlcmVuY2UgdG8gdGhlIGhhc2ggc28gd2UgY2FuIHVzZSBpdCBpbiB0aGUgZm9sbG93aW5nIHN0ZXBcbiAgICAgICAgICBvbkhhc2hDcmVhdGVkOiBoYXNoID0+IHtcbiAgICAgICAgICAgIHNldE9yZGVySGFzaChoYXNoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25XYWl0Rm9yVHg6IChoYXNoKSA9PiB3YWl0Rm9yVHgoaGFzaCksXG4gICAgICAgICAgc2hvd0Rlc2M6IHRydWUsXG4gICAgICAgICAgbmFtZTogU1RFUF9DUkVBVEVfT1JERVJcbiAgICAgICAgfSxcbiAgICAgIF0pXG5cbiAgICAgIHN0ZXBzLnB1c2goW1xuICAgICAgICAnV2FpdCBmb3IgYmF0Y2ggdG8gZmluaXNoJyxcbiAgICAgICAge1xuICAgICAgICAgIG9uV2FpdENvbmRpdGlvbjogKGhhc2gpID0+IHdhaXRGb3JCYXRjaChvcGVuT3JkZXJIYXNoID8gb3Blbk9yZGVySGFzaCA6IGhhc2gpLFxuICAgICAgICAgIHNob3dEZXNjOiBmYWxzZSxcbiAgICAgICAgICBuYW1lOiBTVEVQX1dBSVRfQkFUQ0hcbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgICAvLyBBbmQgZmluYWxseSB0aGUgY2xhaW0gb3JkZXJcbiAgICAgIHN0ZXBzLnB1c2goW1xuICAgICAgICAnQ2xhaW0gb3JkZXInLFxuICAgICAgICB7XG4gICAgICAgICAgb25PcmRlckNsYWltOiAoaGFzaCkgPT4gY2xhaW1PcmRlcihvcGVuT3JkZXJIYXNoID8gb3Blbk9yZGVySGFzaCA6IGhhc2gsIHRvQm9uZGVkKSxcbiAgICAgICAgICBvblJlc3VtZVdhaXQ6IChoYXNoKSA9PiB3YWl0Rm9yVHgoaGFzaCksXG4gICAgICAgICAgb25UeE1pbmVkOiBoYXNoID0+IHVwZGF0ZUNvbnZlcnRlZFZhbHVlKGhhc2gpLFxuICAgICAgICAgIHNob3dEZXNjOiB0cnVlLFxuICAgICAgICAgIGRpc2FibGVBYmFuZG9uOiB0cnVlLFxuICAgICAgICAgIG5hbWU6IFNURVBfQ0xBSU1fQkFUQ0hcbiAgICAgICAgfSxcbiAgICAgIF0pXG5cbiAgICAgIC8vIFVwZGF0ZSBzdGF0ZSB0byByZWZsZWN0IHRoZSBjb3JyZWN0IGFtb3VudCBvZiBzdGVwc1xuICAgICAgLy8gU2hvdyBsb2FkZXIgZm9yIGEgc21hbGwgYW1vdW50IG9mIHRpbWUgdG8gcHJvdmlkZSBhIHNtb290aCB2aXN1YWwgZXhwZXJpZW5jZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgc2V0Q29udmVyc2lvblN0ZXBzKHN0ZXBzKVxuICAgICAgICB9XG4gICAgICB9LCA5MDApXG4gICAgfVxuXG4gICAgY3JlYXRlQ29udmVydFN0ZXBzKClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICB9LCBbXG4gICAgY2hhbmdlQWxsb3dhbmNlLFxuICAgIGNsYWltT3JkZXIsXG4gICAgYW1vdW50U291cmNlLFxuICAgIGdldEFsbG93YW5jZSxcbiAgICBvcGVuT3JkZXIsXG4gICAgdG9Cb25kZWQsXG4gICAgdXBkYXRlQ29udmVydGVkVmFsdWUsXG4gIF0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NvbnZlcnNpb25TdGVwcy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8Q29udmVydFN0ZXBzXG4gICAgICAgICAgc3RlcHM9e2NvbnZlcnNpb25TdGVwc31cbiAgICAgICAgICB0b0JvbmRlZD17dG9Cb25kZWR9XG4gICAgICAgICAgZnJvbUFtb3VudD17YW1vdW50U291cmNlfVxuICAgICAgICAgIGNvbnZlcnRlZFRvdGFsPXtjb252ZXJ0ZWRUb3RhbH1cbiAgICAgICAgICBvblJldHVybkhvbWU9e2hhbmRsZVJldHVybkhvbWV9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY3NzPXtgXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBgfVxuICAgICAgICA+PC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZUNvbnZlcnNpb25cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ConvertForm/ManageConversion.js\n");

/***/ })

})