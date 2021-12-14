webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ConvertForm/ManageConversion.js":
/*!****************************************************!*\
  !*** ./components/ConvertForm/ManageConversion.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/web3-contracts */ \"./lib/web3-contracts.js\");\n/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/utils */ \"./lib/utils.js\");\n/* harmony import */ var components_ConvertSteps_ConvertSteps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ConvertSteps/ConvertSteps */ \"./components/ConvertSteps/ConvertSteps.js\");\n/* harmony import */ var components_utils_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/utils/store */ \"./components/utils/store.js\");\n/* harmony import */ var components_utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/utils/constants */ \"./components/utils/constants.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/alverbner/Projects/atix/sovryn/zero-continuos-token-gui/components/ConvertForm/ManageConversion.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\nfunction ManageConversion(_ref) {\n  _s();\n\n  var handleReturnHome = _ref.handleReturnHome;\n  var openOrder = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useOpenOrder\"])();\n  var claimOrder = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrder\"])();\n  var waitForBatch = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForBatchToFinish\"])();\n  var waitForTx = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForTx\"])();\n  var claimOrderReceiptAmount = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrderReceiptAmount\"])();\n  var changeAllowance = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useApprove\"])();\n  var getAllowance = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useAllowance\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      conversionSteps = _useState[0],\n      setConversionSteps = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(Object(lib_utils__WEBPACK_IMPORTED_MODULE_6__[\"bigNum\"])(-1)),\n      convertedTotal = _useState2[0],\n      setConvertedTotal = _useState2[1];\n\n  var _useStore = Object(components_utils_store__WEBPACK_IMPORTED_MODULE_8__[\"useStore\"])(function (state) {\n    return [state.toBonded, state.amountSource, state.openOrderHash, state.setOrderHash, state.savedSteps];\n  }),\n      _useStore2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useStore, 5),\n      toBonded = _useStore2[0],\n      amountSource = _useStore2[1],\n      openOrderHash = _useStore2[2],\n      setOrderHash = _useStore2[3],\n      savedSteps = _useStore2[4];\n\n  var updateConvertedValue = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useCallback\"])( /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(hash) {\n      var amount;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return claimOrderReceiptAmount(hash);\n\n            case 3:\n              amount = _context.sent;\n              setConvertedTotal(amount);\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              throw new Error(_context.t0);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function (_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(), [claimOrderReceiptAmount]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var cancelled = false; // Interacting with the bonding curve involves 2, 3 or 4 transactions (depending on the direction and state of allowance):\n    // 1. Reset approval (If we're converting COLLATERAL -> BONDED, an allowance was previously set but abandoned)\n    // 2. Raise approval (If we're converting COLLATERAL -> BONDED, the current allowance is not high enough)\n    // 3. Open a buy order\n    // 4. Claim the order\n\n    var createConvertSteps = /*#__PURE__*/function () {\n      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        var steps, allowance;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                steps = []; // First we check for allowance if the direction is COLLATERAL -> BONDED\n\n                if (!toBonded) {\n                  _context2.next = 6;\n                  break;\n                }\n\n                _context2.next = 4;\n                return getAllowance();\n\n              case 4:\n                allowance = _context2.sent;\n\n                // and if we need more, add a step to ask for an approval\n                if (allowance.lt(Object(lib_utils__WEBPACK_IMPORTED_MODULE_6__[\"bigNum\"])(amountSource)) || savedSteps.length >= 4) {\n                  steps.unshift(['Raise approval', {\n                    onTxCreated: function onTxCreated() {\n                      return changeAllowance(amountSource);\n                    },\n                    onResumeWait: function onResumeWait(hash) {\n                      return waitForTx(hash);\n                    },\n                    showDesc: true,\n                    name: components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_RAISE_APPROVAL\"]\n                  }]); // Then there's the case when a user has an allowance set to the market maker contract\n                  // but wants to convert even more tokens this time. When dealing with this case\n                  // we want to first prepend a transaction to reset the allowance back to zero\n                  // (before raising it in the next transaction from above).\n                  // Note: the second part of the if statement is a workaround. When state is saved and restored \n                  //       and the buy order has been created already, the transfer was made and allowance is zero\n                  //       resulting on this step not to be included and not matching the saved steps.\n                  //       This is not a nice fix but due to time constraints is better than nothing.\n\n                  if (!allowance.isZero() || savedSteps.length === 5) {\n                    steps.unshift(['Reset approval', {\n                      onTxCreated: function onTxCreated() {\n                        return changeAllowance(0);\n                      },\n                      onResumeWait: function onResumeWait(hash) {\n                        return waitForTx(hash);\n                      },\n                      showDesc: true,\n                      name: components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_RESET_APPROVAL\"]\n                    }]);\n                  }\n                }\n\n              case 6:\n                // Next add the open order\n                steps.push([\"Create \".concat(toBonded ? 'buy' : 'sell', \" order\"), {\n                  onTxCreated: function onTxCreated() {\n                    console.log('onTxCreated', amountSource, toBonded);\n                    return openOrder(amountSource, toBonded);\n                  },\n                  // We need to store a reference to the hash so we can use it in the following step\n                  onHashCreated: function onHashCreated(hash) {\n                    setOrderHash(hash);\n                  },\n                  onWaitForTx: function onWaitForTx(hash) {\n                    return waitForTx(hash);\n                  },\n                  showDesc: true,\n                  name: components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_CREATE_ORDER\"]\n                }]);\n                steps.push(['Wait for batch to finish', {\n                  onWaitCondition: function onWaitCondition(hash) {\n                    return waitForBatch(openOrderHash ? openOrderHash : hash);\n                  },\n                  showDesc: false,\n                  name: components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_WAIT_BATCH\"]\n                }]); // And finally the claim order\n\n                steps.push(['Claim order', {\n                  onOrderClaim: function onOrderClaim(hash) {\n                    return claimOrder(openOrderHash ? openOrderHash : hash, toBonded);\n                  },\n                  onResumeWait: function onResumeWait(hash) {\n                    return waitForTx(hash);\n                  },\n                  onTxMined: function onTxMined(hash) {\n                    return updateConvertedValue(hash);\n                  },\n                  showDesc: true,\n                  disableAbandon: true,\n                  name: components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_CLAIM_BATCH\"]\n                }]); // Update state to reflect the correct amount of steps\n                // Show loader for a small amount of time to provide a smooth visual experience\n\n                setTimeout(function () {\n                  if (!cancelled) {\n                    setConversionSteps(steps);\n                  }\n                }, 900);\n\n              case 10:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function createConvertSteps() {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n\n    createConvertSteps();\n    return function () {\n      cancelled = true;\n    };\n  }, [changeAllowance, claimOrder, amountSource, getAllowance, openOrder, toBonded, updateConvertedValue]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, conversionSteps.length > 0 ? __jsx(components_ConvertSteps_ConvertSteps__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    steps: conversionSteps,\n    toBonded: toBonded,\n    fromAmount: amountSource,\n    convertedTotal: convertedTotal,\n    onReturnHome: handleReturnHome,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 9\n    }\n  }) : __jsx(_StyledDiv, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(ManageConversion, \"8lsjmf/0c5mZxGC5YntlOkt0pjw=\", false, function () {\n  return [lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useOpenOrder\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrder\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForBatchToFinish\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForTx\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrderReceiptAmount\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useApprove\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useAllowance\"], components_utils_store__WEBPACK_IMPORTED_MODULE_8__[\"useStore\"]];\n});\n\n_c = ManageConversion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageConversion);\n\nvar _StyledDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"div\").withConfig({\n  displayName: \"ManageConversion___StyledDiv\",\n  componentId: \"sc-rlfcuu-0\"\n})([\"display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"ManageConversion\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db252ZXJ0Rm9ybS9NYW5hZ2VDb252ZXJzaW9uLmpzP2RmYTAiXSwibmFtZXMiOlsiTWFuYWdlQ29udmVyc2lvbiIsImhhbmRsZVJldHVybkhvbWUiLCJvcGVuT3JkZXIiLCJ1c2VPcGVuT3JkZXIiLCJjbGFpbU9yZGVyIiwidXNlQ2xhaW1PcmRlciIsIndhaXRGb3JCYXRjaCIsInVzZVdhaXRGb3JCYXRjaFRvRmluaXNoIiwid2FpdEZvclR4IiwidXNlV2FpdEZvclR4IiwiY2xhaW1PcmRlclJlY2VpcHRBbW91bnQiLCJ1c2VDbGFpbU9yZGVyUmVjZWlwdEFtb3VudCIsImNoYW5nZUFsbG93YW5jZSIsInVzZUFwcHJvdmUiLCJnZXRBbGxvd2FuY2UiLCJ1c2VBbGxvd2FuY2UiLCJ1c2VTdGF0ZSIsImNvbnZlcnNpb25TdGVwcyIsInNldENvbnZlcnNpb25TdGVwcyIsImJpZ051bSIsImNvbnZlcnRlZFRvdGFsIiwic2V0Q29udmVydGVkVG90YWwiLCJ1c2VTdG9yZSIsInN0YXRlIiwidG9Cb25kZWQiLCJhbW91bnRTb3VyY2UiLCJvcGVuT3JkZXJIYXNoIiwic2V0T3JkZXJIYXNoIiwic2F2ZWRTdGVwcyIsInVwZGF0ZUNvbnZlcnRlZFZhbHVlIiwidXNlQ2FsbGJhY2siLCJoYXNoIiwiYW1vdW50IiwiRXJyb3IiLCJ1c2VFZmZlY3QiLCJjYW5jZWxsZWQiLCJjcmVhdGVDb252ZXJ0U3RlcHMiLCJzdGVwcyIsImFsbG93YW5jZSIsImx0IiwibGVuZ3RoIiwidW5zaGlmdCIsIm9uVHhDcmVhdGVkIiwib25SZXN1bWVXYWl0Iiwic2hvd0Rlc2MiLCJuYW1lIiwiU1RFUF9SQUlTRV9BUFBST1ZBTCIsImlzWmVybyIsIlNURVBfUkVTRVRfQVBQUk9WQUwiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIm9uSGFzaENyZWF0ZWQiLCJvbldhaXRGb3JUeCIsIlNURVBfQ1JFQVRFX09SREVSIiwib25XYWl0Q29uZGl0aW9uIiwiU1RFUF9XQUlUX0JBVENIIiwib25PcmRlckNsYWltIiwib25UeE1pbmVkIiwiZGlzYWJsZUFiYW5kb24iLCJTVEVQX0NMQUlNX0JBVENIIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxnQkFBVCxPQUFnRDtBQUFBOztBQUFBLE1BQXBCQyxnQkFBb0IsUUFBcEJBLGdCQUFvQjtBQUM5QyxNQUFNQyxTQUFTLEdBQUdDLHVFQUFZLEVBQTlCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHQyx3RUFBYSxFQUFoQztBQUNBLE1BQU1DLFlBQVksR0FBR0Msa0ZBQXVCLEVBQTVDO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQyx1RUFBWSxFQUE5QjtBQUNBLE1BQU1DLHVCQUF1QixHQUFHQyxxRkFBMEIsRUFBMUQ7QUFDQSxNQUFNQyxlQUFlLEdBQUdDLHFFQUFVLEVBQWxDO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyx1RUFBWSxFQUFqQzs7QUFDQSxrQkFBOENDLHNEQUFRLENBQUMsRUFBRCxDQUF0RDtBQUFBLE1BQU9DLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUNBLG1CQUE0Q0Ysc0RBQVEsQ0FBQ0csd0RBQU0sQ0FBQyxDQUFDLENBQUYsQ0FBUCxDQUFwRDtBQUFBLE1BQU9DLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLGtCQUEwRUMsdUVBQVEsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSSxDQUN4RkEsS0FBSyxDQUFDQyxRQURrRixFQUV4RkQsS0FBSyxDQUFDRSxZQUZrRixFQUd4RkYsS0FBSyxDQUFDRyxhQUhrRixFQUl4RkgsS0FBSyxDQUFDSSxZQUprRixFQUt4RkosS0FBSyxDQUFDSyxVQUxrRixDQUFKO0FBQUEsR0FBTixDQUFsRjtBQUFBO0FBQUEsTUFBT0osUUFBUDtBQUFBLE1BQWlCQyxZQUFqQjtBQUFBLE1BQStCQyxhQUEvQjtBQUFBLE1BQThDQyxZQUE5QztBQUFB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QXZHUSxFQXVHTixDQUNEdkIsZUFEQyxFQUVEUixVQUZDLEVBR0RxQixZQUhDLEVBSURYLFlBSkMsRUFLRFosU0FMQyxFQU1Ec0IsUUFOQyxFQU9ESyxvQkFQQyxDQXZHTSxDQUFUO0FBaUhBLFNBQ0UsbUVBQ0daLGVBQWUsQ0FBQ3VCLE1BQWhCLEdBQXlCLENBQXpCLEdBQ0MsTUFBQyw0RUFBRDtBQUNFLFNBQUssRUFBRXZCLGVBRFQ7QUFFRSxZQUFRLEVBQUVPLFFBRlo7QUFHRSxjQUFVLEVBQUVDLFlBSGQ7QUFJRSxrQkFBYyxFQUFFTCxjQUpsQjtBQUtFLGdCQUFZLEVBQUVuQixnQkFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEdBU0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLENBREY7QUF1QkQ7O0dBdktRRCxnQjtVQUNXRywrRCxFQUNDRSxnRSxFQUNFRSwwRSxFQUNIRSwrRCxFQUNjRSw2RSxFQUNSRSw2RCxFQUNIRSwrRCxFQUdxRE8sK0Q7OztLQVZuRXRCLGdCO0FBeUtNQSwrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29udmVydEZvcm0vTWFuYWdlQ29udmVyc2lvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgdXNlT3Blbk9yZGVyLFxuICB1c2VDbGFpbU9yZGVyLFxuICB1c2VBcHByb3ZlLFxuICB1c2VBbGxvd2FuY2UsXG4gIHVzZUNsYWltT3JkZXJSZWNlaXB0QW1vdW50LFxuICB1c2VXYWl0Rm9yQmF0Y2hUb0ZpbmlzaCxcbiAgdXNlV2FpdEZvclR4XG59IGZyb20gJ2xpYi93ZWIzLWNvbnRyYWN0cydcbmltcG9ydCB7IGJpZ051bSB9IGZyb20gJ2xpYi91dGlscydcbmltcG9ydCBDb252ZXJ0U3RlcHMgZnJvbSAnY29tcG9uZW50cy9Db252ZXJ0U3RlcHMvQ29udmVydFN0ZXBzJ1xuXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ2NvbXBvbmVudHMvdXRpbHMvc3RvcmUnO1xuaW1wb3J0IHsgU1RFUF9DTEFJTV9CQVRDSCwgU1RFUF9DUkVBVEVfT1JERVIsIFNURVBfUkFJU0VfQVBQUk9WQUwsIFNURVBfUkVTRVRfQVBQUk9WQUwsIFNURVBfV0FJVF9CQVRDSCB9IGZyb20gJ2NvbXBvbmVudHMvdXRpbHMvY29uc3RhbnRzJztcblxuZnVuY3Rpb24gTWFuYWdlQ29udmVyc2lvbih7IGhhbmRsZVJldHVybkhvbWUgfSkge1xuICBjb25zdCBvcGVuT3JkZXIgPSB1c2VPcGVuT3JkZXIoKVxuICBjb25zdCBjbGFpbU9yZGVyID0gdXNlQ2xhaW1PcmRlcigpXG4gIGNvbnN0IHdhaXRGb3JCYXRjaCA9IHVzZVdhaXRGb3JCYXRjaFRvRmluaXNoKClcbiAgY29uc3Qgd2FpdEZvclR4ID0gdXNlV2FpdEZvclR4KClcbiAgY29uc3QgY2xhaW1PcmRlclJlY2VpcHRBbW91bnQgPSB1c2VDbGFpbU9yZGVyUmVjZWlwdEFtb3VudCgpXG4gIGNvbnN0IGNoYW5nZUFsbG93YW5jZSA9IHVzZUFwcHJvdmUoKVxuICBjb25zdCBnZXRBbGxvd2FuY2UgPSB1c2VBbGxvd2FuY2UoKVxuICBjb25zdCBbY29udmVyc2lvblN0ZXBzLCBzZXRDb252ZXJzaW9uU3RlcHNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtjb252ZXJ0ZWRUb3RhbCwgc2V0Q29udmVydGVkVG90YWxdID0gdXNlU3RhdGUoYmlnTnVtKC0xKSlcbiAgY29uc3QgW3RvQm9uZGVkLCBhbW91bnRTb3VyY2UsIG9wZW5PcmRlckhhc2gsIHNldE9yZGVySGFzaCwgc2F2ZWRTdGVwc10gPSB1c2VTdG9yZShzdGF0ZSA9PiBbXG4gICAgICBzdGF0ZS50b0JvbmRlZCxcbiAgICAgIHN0YXRlLmFtb3VudFNvdXJjZSxcbiAgICAgIHN0YXRlLm9wZW5PcmRlckhhc2gsXG4gICAgICBzdGF0ZS5zZXRPcmRlckhhc2gsXG4gICAgICBzdGF0ZS5zYXZlZFN0ZXBzXG4gIF0pXG5cbiAgY29uc3QgdXBkYXRlQ29udmVydGVkVmFsdWUgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyBoYXNoID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFtb3VudCA9IGF3YWl0IGNsYWltT3JkZXJSZWNlaXB0QW1vdW50KGhhc2gpXG5cbiAgICAgICAgc2V0Q29udmVydGVkVG90YWwoYW1vdW50KVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpXG4gICAgICB9XG4gICAgfSxcbiAgICBbY2xhaW1PcmRlclJlY2VpcHRBbW91bnRdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgLy8gSW50ZXJhY3Rpbmcgd2l0aCB0aGUgYm9uZGluZyBjdXJ2ZSBpbnZvbHZlcyAyLCAzIG9yIDQgdHJhbnNhY3Rpb25zIChkZXBlbmRpbmcgb24gdGhlIGRpcmVjdGlvbiBhbmQgc3RhdGUgb2YgYWxsb3dhbmNlKTpcbiAgICAvLyAxLiBSZXNldCBhcHByb3ZhbCAoSWYgd2UncmUgY29udmVydGluZyBDT0xMQVRFUkFMIC0+IEJPTkRFRCwgYW4gYWxsb3dhbmNlIHdhcyBwcmV2aW91c2x5IHNldCBidXQgYWJhbmRvbmVkKVxuICAgIC8vIDIuIFJhaXNlIGFwcHJvdmFsIChJZiB3ZSdyZSBjb252ZXJ0aW5nIENPTExBVEVSQUwgLT4gQk9OREVELCB0aGUgY3VycmVudCBhbGxvd2FuY2UgaXMgbm90IGhpZ2ggZW5vdWdoKVxuICAgIC8vIDMuIE9wZW4gYSBidXkgb3JkZXJcbiAgICAvLyA0LiBDbGFpbSB0aGUgb3JkZXJcbiAgICBjb25zdCBjcmVhdGVDb252ZXJ0U3RlcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBsZXQgc3RlcHMgPSBbXVxuXG4gICAgICAvLyBGaXJzdCB3ZSBjaGVjayBmb3IgYWxsb3dhbmNlIGlmIHRoZSBkaXJlY3Rpb24gaXMgQ09MTEFURVJBTCAtPiBCT05ERURcbiAgICAgIGlmICh0b0JvbmRlZCkge1xuICAgICAgICBjb25zdCBhbGxvd2FuY2UgPSBhd2FpdCBnZXRBbGxvd2FuY2UoKVxuXG4gICAgICAgIC8vIGFuZCBpZiB3ZSBuZWVkIG1vcmUsIGFkZCBhIHN0ZXAgdG8gYXNrIGZvciBhbiBhcHByb3ZhbFxuICAgICAgICBpZiAoYWxsb3dhbmNlLmx0KGJpZ051bShhbW91bnRTb3VyY2UpKSB8fCBzYXZlZFN0ZXBzLmxlbmd0aCA+PSA0KSB7XG4gICAgICAgICAgICBzdGVwcy51bnNoaWZ0KFtcbiAgICAgICAgICAgICAgJ1JhaXNlIGFwcHJvdmFsJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uVHhDcmVhdGVkOiAoKSA9PiBjaGFuZ2VBbGxvd2FuY2UoYW1vdW50U291cmNlKSxcbiAgICAgICAgICAgICAgICBvblJlc3VtZVdhaXQ6IChoYXNoKSA9PiB3YWl0Rm9yVHgoaGFzaCksXG4gICAgICAgICAgICAgICAgc2hvd0Rlc2M6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogU1RFUF9SQUlTRV9BUFBST1ZBTFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSlcblxuICAgICAgICAgIC8vIFRoZW4gdGhlcmUncyB0aGUgY2FzZSB3aGVuIGEgdXNlciBoYXMgYW4gYWxsb3dhbmNlIHNldCB0byB0aGUgbWFya2V0IG1ha2VyIGNvbnRyYWN0XG4gICAgICAgICAgLy8gYnV0IHdhbnRzIHRvIGNvbnZlcnQgZXZlbiBtb3JlIHRva2VucyB0aGlzIHRpbWUuIFdoZW4gZGVhbGluZyB3aXRoIHRoaXMgY2FzZVxuICAgICAgICAgIC8vIHdlIHdhbnQgdG8gZmlyc3QgcHJlcGVuZCBhIHRyYW5zYWN0aW9uIHRvIHJlc2V0IHRoZSBhbGxvd2FuY2UgYmFjayB0byB6ZXJvXG4gICAgICAgICAgLy8gKGJlZm9yZSByYWlzaW5nIGl0IGluIHRoZSBuZXh0IHRyYW5zYWN0aW9uIGZyb20gYWJvdmUpLlxuICAgICAgICAgIC8vIE5vdGU6IHRoZSBzZWNvbmQgcGFydCBvZiB0aGUgaWYgc3RhdGVtZW50IGlzIGEgd29ya2Fyb3VuZC4gV2hlbiBzdGF0ZSBpcyBzYXZlZCBhbmQgcmVzdG9yZWQgXG4gICAgICAgICAgLy8gICAgICAgYW5kIHRoZSBidXkgb3JkZXIgaGFzIGJlZW4gY3JlYXRlZCBhbHJlYWR5LCB0aGUgdHJhbnNmZXIgd2FzIG1hZGUgYW5kIGFsbG93YW5jZSBpcyB6ZXJvXG4gICAgICAgICAgLy8gICAgICAgcmVzdWx0aW5nIG9uIHRoaXMgc3RlcCBub3QgdG8gYmUgaW5jbHVkZWQgYW5kIG5vdCBtYXRjaGluZyB0aGUgc2F2ZWQgc3RlcHMuXG4gICAgICAgICAgLy8gICAgICAgVGhpcyBpcyBub3QgYSBuaWNlIGZpeCBidXQgZHVlIHRvIHRpbWUgY29uc3RyYWludHMgaXMgYmV0dGVyIHRoYW4gbm90aGluZy5cbiAgICAgICAgICBpZiAoIWFsbG93YW5jZS5pc1plcm8oKSB8fCBzYXZlZFN0ZXBzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgc3RlcHMudW5zaGlmdChbXG4gICAgICAgICAgICAgICdSZXNldCBhcHByb3ZhbCcsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvblR4Q3JlYXRlZDogKCkgPT4gY2hhbmdlQWxsb3dhbmNlKDApLFxuICAgICAgICAgICAgICAgIG9uUmVzdW1lV2FpdDogKGhhc2gpID0+IHdhaXRGb3JUeChoYXNoKSxcbiAgICAgICAgICAgICAgICBzaG93RGVzYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBTVEVQX1JFU0VUX0FQUFJPVkFMXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBOZXh0IGFkZCB0aGUgb3BlbiBvcmRlclxuICAgICAgc3RlcHMucHVzaChbXG4gICAgICAgIGBDcmVhdGUgJHt0b0JvbmRlZCA/ICdidXknIDogJ3NlbGwnfSBvcmRlcmAsXG4gICAgICAgIHtcbiAgICAgICAgICBvblR4Q3JlYXRlZDogKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ29uVHhDcmVhdGVkJywgYW1vdW50U291cmNlLCB0b0JvbmRlZClcbiAgICAgICAgICAgIHJldHVybiBvcGVuT3JkZXIoYW1vdW50U291cmNlLCB0b0JvbmRlZClcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLy8gV2UgbmVlZCB0byBzdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgaGFzaCBzbyB3ZSBjYW4gdXNlIGl0IGluIHRoZSBmb2xsb3dpbmcgc3RlcFxuICAgICAgICAgIG9uSGFzaENyZWF0ZWQ6IGhhc2ggPT4ge1xuICAgICAgICAgICAgc2V0T3JkZXJIYXNoKGhhc2gpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbldhaXRGb3JUeDogKGhhc2gpID0+IHdhaXRGb3JUeChoYXNoKSxcbiAgICAgICAgICBzaG93RGVzYzogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiBTVEVQX0NSRUFURV9PUkRFUlxuICAgICAgICB9LFxuICAgICAgXSlcblxuICAgICAgc3RlcHMucHVzaChbXG4gICAgICAgICdXYWl0IGZvciBiYXRjaCB0byBmaW5pc2gnLFxuICAgICAgICB7XG4gICAgICAgICAgb25XYWl0Q29uZGl0aW9uOiAoaGFzaCkgPT4gd2FpdEZvckJhdGNoKG9wZW5PcmRlckhhc2ggPyBvcGVuT3JkZXJIYXNoIDogaGFzaCksXG4gICAgICAgICAgc2hvd0Rlc2M6IGZhbHNlLFxuICAgICAgICAgIG5hbWU6IFNURVBfV0FJVF9CQVRDSFxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICAgIC8vIEFuZCBmaW5hbGx5IHRoZSBjbGFpbSBvcmRlclxuICAgICAgc3RlcHMucHVzaChbXG4gICAgICAgICdDbGFpbSBvcmRlcicsXG4gICAgICAgIHtcbiAgICAgICAgICBvbk9yZGVyQ2xhaW06IChoYXNoKSA9PiBjbGFpbU9yZGVyKG9wZW5PcmRlckhhc2ggPyBvcGVuT3JkZXJIYXNoIDogaGFzaCwgdG9Cb25kZWQpLFxuICAgICAgICAgIG9uUmVzdW1lV2FpdDogKGhhc2gpID0+IHdhaXRGb3JUeChoYXNoKSxcbiAgICAgICAgICBvblR4TWluZWQ6IGhhc2ggPT4gdXBkYXRlQ29udmVydGVkVmFsdWUoaGFzaCksXG4gICAgICAgICAgc2hvd0Rlc2M6IHRydWUsXG4gICAgICAgICAgZGlzYWJsZUFiYW5kb246IHRydWUsXG4gICAgICAgICAgbmFtZTogU1RFUF9DTEFJTV9CQVRDSFxuICAgICAgICB9LFxuICAgICAgXSlcblxuICAgICAgLy8gVXBkYXRlIHN0YXRlIHRvIHJlZmxlY3QgdGhlIGNvcnJlY3QgYW1vdW50IG9mIHN0ZXBzXG4gICAgICAvLyBTaG93IGxvYWRlciBmb3IgYSBzbWFsbCBhbW91bnQgb2YgdGltZSB0byBwcm92aWRlIGEgc21vb3RoIHZpc3VhbCBleHBlcmllbmNlXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICBzZXRDb252ZXJzaW9uU3RlcHMoc3RlcHMpXG4gICAgICAgIH1cbiAgICAgIH0sIDkwMClcbiAgICB9XG5cbiAgICBjcmVhdGVDb252ZXJ0U3RlcHMoKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gIH0sIFtcbiAgICBjaGFuZ2VBbGxvd2FuY2UsXG4gICAgY2xhaW1PcmRlcixcbiAgICBhbW91bnRTb3VyY2UsXG4gICAgZ2V0QWxsb3dhbmNlLFxuICAgIG9wZW5PcmRlcixcbiAgICB0b0JvbmRlZCxcbiAgICB1cGRhdGVDb252ZXJ0ZWRWYWx1ZSxcbiAgXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Y29udmVyc2lvblN0ZXBzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDxDb252ZXJ0U3RlcHNcbiAgICAgICAgICBzdGVwcz17Y29udmVyc2lvblN0ZXBzfVxuICAgICAgICAgIHRvQm9uZGVkPXt0b0JvbmRlZH1cbiAgICAgICAgICBmcm9tQW1vdW50PXthbW91bnRTb3VyY2V9XG4gICAgICAgICAgY29udmVydGVkVG90YWw9e2NvbnZlcnRlZFRvdGFsfVxuICAgICAgICAgIG9uUmV0dXJuSG9tZT17aGFuZGxlUmV0dXJuSG9tZX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjc3M9e2BcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGB9XG4gICAgICAgID48L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlQ29udmVyc2lvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ConvertForm/ManageConversion.js\n");

/***/ })

})