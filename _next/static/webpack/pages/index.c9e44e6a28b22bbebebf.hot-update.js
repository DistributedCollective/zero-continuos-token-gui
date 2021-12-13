webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ConvertForm/ManageConversion.js":
/*!****************************************************!*\
  !*** ./components/ConvertForm/ManageConversion.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/web3-contracts */ \"./lib/web3-contracts.js\");\n/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/utils */ \"./lib/utils.js\");\n/* harmony import */ var components_ConvertSteps_ConvertSteps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ConvertSteps/ConvertSteps */ \"./components/ConvertSteps/ConvertSteps.js\");\n/* harmony import */ var components_utils_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/utils/store */ \"./components/utils/store.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/alverbner/Projects/atix/sovryn/zero-continuos-token-gui/components/ConvertForm/ManageConversion.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\nfunction ManageConversion(_ref) {\n  _s();\n\n  var handleReturnHome = _ref.handleReturnHome;\n  var openOrder = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useOpenOrder\"])();\n  var claimOrder = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrder\"])();\n  var waitForBatch = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForBatchToFinish\"])();\n  var waitForTx = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForTx\"])();\n  var claimOrderReceiptAmount = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrderReceiptAmount\"])();\n  var changeAllowance = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useApprove\"])();\n  var getAllowance = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useAllowance\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      conversionSteps = _useState[0],\n      setConversionSteps = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(Object(lib_utils__WEBPACK_IMPORTED_MODULE_6__[\"bigNum\"])(-1)),\n      convertedTotal = _useState2[0],\n      setConvertedTotal = _useState2[1];\n\n  var _useStore = Object(components_utils_store__WEBPACK_IMPORTED_MODULE_8__[\"useStore\"])(function (state) {\n    return [state.toBonded, state.amountSource, state.openOrderHash, state.setOrderHash, state.savedSteps];\n  }),\n      _useStore2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useStore, 5),\n      toBonded = _useStore2[0],\n      amountSource = _useStore2[1],\n      openOrderHash = _useStore2[2],\n      setOrderHash = _useStore2[3],\n      savedSteps = _useStore2[4];\n\n  var updateConvertedValue = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useCallback\"])( /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(hash) {\n      var amount;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return claimOrderReceiptAmount(hash);\n\n            case 3:\n              amount = _context.sent;\n              setConvertedTotal(amount);\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              throw new Error(_context.t0);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function (_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(), [claimOrderReceiptAmount]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var cancelled = false; // Interacting with the bonding curve involves 2, 3 or 4 transactions (depending on the direction and state of allowance):\n    // 1. Reset approval (If we're converting COLLATERAL -> BONDED, an allowance was previously set but abandoned)\n    // 2. Raise approval (If we're converting COLLATERAL -> BONDED, the current allowance is not high enough)\n    // 3. Open a buy order\n    // 4. Claim the order\n\n    var createConvertSteps = /*#__PURE__*/function () {\n      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        var steps, allowance;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                steps = []; // First we check for allowance if the direction is COLLATERAL -> BONDED\n\n                if (!toBonded) {\n                  _context2.next = 6;\n                  break;\n                }\n\n                _context2.next = 4;\n                return getAllowance();\n\n              case 4:\n                allowance = _context2.sent;\n\n                // and if we need more, add a step to ask for an approval\n                if (allowance.lt(Object(lib_utils__WEBPACK_IMPORTED_MODULE_6__[\"bigNum\"])(amountSource))) {\n                  steps.unshift(['Raise approval', {\n                    onTxCreated: function onTxCreated() {\n                      return changeAllowance(amountSource);\n                    },\n                    onResumeWait: function onResumeWait(hash) {\n                      return waitForTx(hash);\n                    },\n                    showDesc: true\n                  }]); // Then there's the case when a user has an allowance set to the market maker contract\n                  // but wants to convert even more tokens this time. When dealing with this case\n                  // we want to first prepend a transaction to reset the allowance back to zero\n                  // (before raising it in the next transaction from above).\n                  // Note: the second part of the if statement is a workaround. When state is saved and restored \n                  //       and the buy order has been created already, the transfer was made and allowance is zero\n                  //       resulting on this step not to be included and not matching the saved steps.\n                  //       This is not a nice fix but due to time constraints is better than nothing.\n\n                  if (!allowance.isZero() || savedSteps.length === 5) {\n                    steps.unshift(['Reset approval', {\n                      onTxCreated: function onTxCreated() {\n                        return changeAllowance(0);\n                      },\n                      onResumeWait: function onResumeWait(hash) {\n                        return waitForTx(hash);\n                      },\n                      showDesc: true\n                    }]);\n                  }\n                }\n\n              case 6:\n                // Next add the open order\n                steps.push([\"Create \".concat(toBonded ? 'buy' : 'sell', \" order\"), {\n                  onTxCreated: function onTxCreated() {\n                    console.log('onTxCreated', amountSource, toBonded);\n                    return openOrder(amountSource, toBonded);\n                  },\n                  // We need to store a reference to the hash so we can use it in the following step\n                  onHashCreated: function onHashCreated(hash) {\n                    setOrderHash(hash);\n                  },\n                  onWaitForTx: function onWaitForTx(hash) {\n                    return waitForTx(hash);\n                  },\n                  showDesc: true\n                }]);\n                steps.push(['Wait for batch to finish', {\n                  onWaitCondition: function onWaitCondition(hash) {\n                    return waitForBatch(openOrderHash ? openOrderHash : hash);\n                  },\n                  showDesc: false\n                }]); // And finally the claim order\n\n                steps.push(['Claim order', {\n                  onOrderClaim: function onOrderClaim(hash) {\n                    return claimOrder(openOrderHash ? openOrderHash : hash, toBonded);\n                  },\n                  onResumeWait: function onResumeWait(hash) {\n                    return waitForTx(hash);\n                  },\n                  onTxMined: function onTxMined(hash) {\n                    return updateConvertedValue(hash);\n                  },\n                  disableAbandon: true,\n                  showDesc: true\n                }]); // Update state to reflect the correct amount of steps\n                // Show loader for a small amount of time to provide a smooth visual experience\n\n                setTimeout(function () {\n                  if (!cancelled) {\n                    setConversionSteps(steps);\n                  }\n                }, 900);\n\n              case 10:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function createConvertSteps() {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n\n    createConvertSteps();\n    return function () {\n      cancelled = true;\n    };\n  }, [changeAllowance, claimOrder, amountSource, getAllowance, openOrder, toBonded, updateConvertedValue]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, conversionSteps.length > 0 ? __jsx(components_ConvertSteps_ConvertSteps__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    steps: conversionSteps,\n    toBonded: toBonded,\n    fromAmount: amountSource,\n    convertedTotal: convertedTotal,\n    onReturnHome: handleReturnHome,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 9\n    }\n  }) : __jsx(_StyledDiv, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(ManageConversion, \"8lsjmf/0c5mZxGC5YntlOkt0pjw=\", false, function () {\n  return [lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useOpenOrder\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrder\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForBatchToFinish\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForTx\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrderReceiptAmount\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useApprove\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useAllowance\"], components_utils_store__WEBPACK_IMPORTED_MODULE_8__[\"useStore\"]];\n});\n\n_c = ManageConversion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageConversion);\n\nvar _StyledDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"div\").withConfig({\n  displayName: \"ManageConversion___StyledDiv\",\n  componentId: \"sc-rlfcuu-0\"\n})([\"display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"ManageConversion\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db252ZXJ0Rm9ybS9NYW5hZ2VDb252ZXJzaW9uLmpzP2RmYTAiXSwibmFtZXMiOlsiTWFuYWdlQ29udmVyc2lvbiIsImhhbmRsZVJldHVybkhvbWUiLCJvcGVuT3JkZXIiLCJ1c2VPcGVuT3JkZXIiLCJjbGFpbU9yZGVyIiwidXNlQ2xhaW1PcmRlciIsIndhaXRGb3JCYXRjaCIsInVzZVdhaXRGb3JCYXRjaFRvRmluaXNoIiwid2FpdEZvclR4IiwidXNlV2FpdEZvclR4IiwiY2xhaW1PcmRlclJlY2VpcHRBbW91bnQiLCJ1c2VDbGFpbU9yZGVyUmVjZWlwdEFtb3VudCIsImNoYW5nZUFsbG93YW5jZSIsInVzZUFwcHJvdmUiLCJnZXRBbGxvd2FuY2UiLCJ1c2VBbGxvd2FuY2UiLCJ1c2VTdGF0ZSIsImNvbnZlcnNpb25TdGVwcyIsInNldENvbnZlcnNpb25TdGVwcyIsImJpZ051bSIsImNvbnZlcnRlZFRvdGFsIiwic2V0Q29udmVydGVkVG90YWwiLCJ1c2VTdG9yZSIsInN0YXRlIiwidG9Cb25kZWQiLCJhbW91bnRTb3VyY2UiLCJvcGVuT3JkZXJIYXNoIiwic2V0T3JkZXJIYXNoIiwic2F2ZWRTdGVwcyIsInVwZGF0ZUNvbnZlcnRlZFZhbHVlIiwidXNlQ2FsbGJhY2siLCJoYXNoIiwiYW1vdW50IiwiRXJyb3IiLCJ1c2VFZmZlY3QiLCJjYW5jZWxsZWQiLCJjcmVhdGVDb252ZXJ0U3RlcHMiLCJzdGVwcyIsImFsbG93YW5jZSIsImx0IiwidW5zaGlmdCIsIm9uVHhDcmVhdGVkIiwib25SZXN1bWVXYWl0Iiwic2hvd0Rlc2MiLCJpc1plcm8iLCJsZW5ndGgiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIm9uSGFzaENyZWF0ZWQiLCJvbldhaXRGb3JUeCIsIm9uV2FpdENvbmRpdGlvbiIsIm9uT3JkZXJDbGFpbSIsIm9uVHhNaW5lZCIsImRpc2FibGVBYmFuZG9uIiwic2V0VGltZW91dCJdLCJtYXBwaW5n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O0FBQUE7QUFBQSxJQURELEdBU0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLENBREY7QUF1QkQ7O0dBbEtRRCxnQjtVQUNXRywrRCxFQUNDRSxnRSxFQUNFRSwwRSxFQUNIRSwrRCxFQUNjRSw2RSxFQUNSRSw2RCxFQUNIRSwrRCxFQUdxRE8sK0Q7OztLQVZuRXRCLGdCO0FBb0tNQSwrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29udmVydEZvcm0vTWFuYWdlQ29udmVyc2lvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgdXNlT3Blbk9yZGVyLFxuICB1c2VDbGFpbU9yZGVyLFxuICB1c2VBcHByb3ZlLFxuICB1c2VBbGxvd2FuY2UsXG4gIHVzZUNsYWltT3JkZXJSZWNlaXB0QW1vdW50LFxuICB1c2VXYWl0Rm9yQmF0Y2hUb0ZpbmlzaCxcbiAgdXNlV2FpdEZvclR4XG59IGZyb20gJ2xpYi93ZWIzLWNvbnRyYWN0cydcbmltcG9ydCB7IGJpZ051bSB9IGZyb20gJ2xpYi91dGlscydcbmltcG9ydCBDb252ZXJ0U3RlcHMgZnJvbSAnY29tcG9uZW50cy9Db252ZXJ0U3RlcHMvQ29udmVydFN0ZXBzJ1xuXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ2NvbXBvbmVudHMvdXRpbHMvc3RvcmUnO1xuXG5mdW5jdGlvbiBNYW5hZ2VDb252ZXJzaW9uKHsgaGFuZGxlUmV0dXJuSG9tZSB9KSB7XG4gIGNvbnN0IG9wZW5PcmRlciA9IHVzZU9wZW5PcmRlcigpXG4gIGNvbnN0IGNsYWltT3JkZXIgPSB1c2VDbGFpbU9yZGVyKClcbiAgY29uc3Qgd2FpdEZvckJhdGNoID0gdXNlV2FpdEZvckJhdGNoVG9GaW5pc2goKVxuICBjb25zdCB3YWl0Rm9yVHggPSB1c2VXYWl0Rm9yVHgoKVxuICBjb25zdCBjbGFpbU9yZGVyUmVjZWlwdEFtb3VudCA9IHVzZUNsYWltT3JkZXJSZWNlaXB0QW1vdW50KClcbiAgY29uc3QgY2hhbmdlQWxsb3dhbmNlID0gdXNlQXBwcm92ZSgpXG4gIGNvbnN0IGdldEFsbG93YW5jZSA9IHVzZUFsbG93YW5jZSgpXG4gIGNvbnN0IFtjb252ZXJzaW9uU3RlcHMsIHNldENvbnZlcnNpb25TdGVwc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2NvbnZlcnRlZFRvdGFsLCBzZXRDb252ZXJ0ZWRUb3RhbF0gPSB1c2VTdGF0ZShiaWdOdW0oLTEpKVxuICBjb25zdCBbdG9Cb25kZWQsIGFtb3VudFNvdXJjZSwgb3Blbk9yZGVySGFzaCwgc2V0T3JkZXJIYXNoLCBzYXZlZFN0ZXBzXSA9IHVzZVN0b3JlKHN0YXRlID0+IFtcbiAgICAgIHN0YXRlLnRvQm9uZGVkLFxuICAgICAgc3RhdGUuYW1vdW50U291cmNlLFxuICAgICAgc3RhdGUub3Blbk9yZGVySGFzaCxcbiAgICAgIHN0YXRlLnNldE9yZGVySGFzaCxcbiAgICAgIHN0YXRlLnNhdmVkU3RlcHNcbiAgXSlcblxuICBjb25zdCB1cGRhdGVDb252ZXJ0ZWRWYWx1ZSA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIGhhc2ggPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gYXdhaXQgY2xhaW1PcmRlclJlY2VpcHRBbW91bnQoaGFzaClcblxuICAgICAgICBzZXRDb252ZXJ0ZWRUb3RhbChhbW91bnQpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycilcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjbGFpbU9yZGVyUmVjZWlwdEFtb3VudF1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICAvLyBJbnRlcmFjdGluZyB3aXRoIHRoZSBib25kaW5nIGN1cnZlIGludm9sdmVzIDIsIDMgb3IgNCB0cmFuc2FjdGlvbnMgKGRlcGVuZGluZyBvbiB0aGUgZGlyZWN0aW9uIGFuZCBzdGF0ZSBvZiBhbGxvd2FuY2UpOlxuICAgIC8vIDEuIFJlc2V0IGFwcHJvdmFsIChJZiB3ZSdyZSBjb252ZXJ0aW5nIENPTExBVEVSQUwgLT4gQk9OREVELCBhbiBhbGxvd2FuY2Ugd2FzIHByZXZpb3VzbHkgc2V0IGJ1dCBhYmFuZG9uZWQpXG4gICAgLy8gMi4gUmFpc2UgYXBwcm92YWwgKElmIHdlJ3JlIGNvbnZlcnRpbmcgQ09MTEFURVJBTCAtPiBCT05ERUQsIHRoZSBjdXJyZW50IGFsbG93YW5jZSBpcyBub3QgaGlnaCBlbm91Z2gpXG4gICAgLy8gMy4gT3BlbiBhIGJ1eSBvcmRlclxuICAgIC8vIDQuIENsYWltIHRoZSBvcmRlclxuICAgIGNvbnN0IGNyZWF0ZUNvbnZlcnRTdGVwcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGxldCBzdGVwcyA9IFtdXG5cbiAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGZvciBhbGxvd2FuY2UgaWYgdGhlIGRpcmVjdGlvbiBpcyBDT0xMQVRFUkFMIC0+IEJPTkRFRFxuICAgICAgaWYgKHRvQm9uZGVkKSB7XG4gICAgICAgIGNvbnN0IGFsbG93YW5jZSA9IGF3YWl0IGdldEFsbG93YW5jZSgpXG5cbiAgICAgICAgLy8gYW5kIGlmIHdlIG5lZWQgbW9yZSwgYWRkIGEgc3RlcCB0byBhc2sgZm9yIGFuIGFwcHJvdmFsXG4gICAgICAgIGlmIChhbGxvd2FuY2UubHQoYmlnTnVtKGFtb3VudFNvdXJjZSkpKSB7XG4gICAgICAgICAgc3RlcHMudW5zaGlmdChbXG4gICAgICAgICAgICAnUmFpc2UgYXBwcm92YWwnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvblR4Q3JlYXRlZDogKCkgPT4gY2hhbmdlQWxsb3dhbmNlKGFtb3VudFNvdXJjZSksXG4gICAgICAgICAgICAgIG9uUmVzdW1lV2FpdDogKGhhc2gpID0+IHdhaXRGb3JUeChoYXNoKSxcbiAgICAgICAgICAgICAgc2hvd0Rlc2M6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0pXG5cbiAgICAgICAgICAvLyBUaGVuIHRoZXJlJ3MgdGhlIGNhc2Ugd2hlbiBhIHVzZXIgaGFzIGFuIGFsbG93YW5jZSBzZXQgdG8gdGhlIG1hcmtldCBtYWtlciBjb250cmFjdFxuICAgICAgICAgIC8vIGJ1dCB3YW50cyB0byBjb252ZXJ0IGV2ZW4gbW9yZSB0b2tlbnMgdGhpcyB0aW1lLiBXaGVuIGRlYWxpbmcgd2l0aCB0aGlzIGNhc2VcbiAgICAgICAgICAvLyB3ZSB3YW50IHRvIGZpcnN0IHByZXBlbmQgYSB0cmFuc2FjdGlvbiB0byByZXNldCB0aGUgYWxsb3dhbmNlIGJhY2sgdG8gemVyb1xuICAgICAgICAgIC8vIChiZWZvcmUgcmFpc2luZyBpdCBpbiB0aGUgbmV4dCB0cmFuc2FjdGlvbiBmcm9tIGFib3ZlKS5cbiAgICAgICAgICAvLyBOb3RlOiB0aGUgc2Vjb25kIHBhcnQgb2YgdGhlIGlmIHN0YXRlbWVudCBpcyBhIHdvcmthcm91bmQuIFdoZW4gc3RhdGUgaXMgc2F2ZWQgYW5kIHJlc3RvcmVkIFxuICAgICAgICAgIC8vICAgICAgIGFuZCB0aGUgYnV5IG9yZGVyIGhhcyBiZWVuIGNyZWF0ZWQgYWxyZWFkeSwgdGhlIHRyYW5zZmVyIHdhcyBtYWRlIGFuZCBhbGxvd2FuY2UgaXMgemVyb1xuICAgICAgICAgIC8vICAgICAgIHJlc3VsdGluZyBvbiB0aGlzIHN0ZXAgbm90IHRvIGJlIGluY2x1ZGVkIGFuZCBub3QgbWF0Y2hpbmcgdGhlIHNhdmVkIHN0ZXBzLlxuICAgICAgICAgIC8vICAgICAgIFRoaXMgaXMgbm90IGEgbmljZSBmaXggYnV0IGR1ZSB0byB0aW1lIGNvbnN0cmFpbnRzIGlzIGJldHRlciB0aGFuIG5vdGhpbmcuXG4gICAgICAgICAgaWYgKCFhbGxvd2FuY2UuaXNaZXJvKCkgfHwgc2F2ZWRTdGVwcy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIHN0ZXBzLnVuc2hpZnQoW1xuICAgICAgICAgICAgICAnUmVzZXQgYXBwcm92YWwnLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb25UeENyZWF0ZWQ6ICgpID0+IGNoYW5nZUFsbG93YW5jZSgwKSxcbiAgICAgICAgICAgICAgICBvblJlc3VtZVdhaXQ6IChoYXNoKSA9PiB3YWl0Rm9yVHgoaGFzaCksXG4gICAgICAgICAgICAgICAgc2hvd0Rlc2M6IHRydWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBOZXh0IGFkZCB0aGUgb3BlbiBvcmRlclxuICAgICAgc3RlcHMucHVzaChbXG4gICAgICAgIGBDcmVhdGUgJHt0b0JvbmRlZCA/ICdidXknIDogJ3NlbGwnfSBvcmRlcmAsXG4gICAgICAgIHtcbiAgICAgICAgICBvblR4Q3JlYXRlZDogKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ29uVHhDcmVhdGVkJywgYW1vdW50U291cmNlLCB0b0JvbmRlZClcbiAgICAgICAgICAgIHJldHVybiBvcGVuT3JkZXIoYW1vdW50U291cmNlLCB0b0JvbmRlZClcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLy8gV2UgbmVlZCB0byBzdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgaGFzaCBzbyB3ZSBjYW4gdXNlIGl0IGluIHRoZSBmb2xsb3dpbmcgc3RlcFxuICAgICAgICAgIG9uSGFzaENyZWF0ZWQ6IGhhc2ggPT4ge1xuICAgICAgICAgICAgc2V0T3JkZXJIYXNoKGhhc2gpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbldhaXRGb3JUeDogKGhhc2gpID0+IHdhaXRGb3JUeChoYXNoKSxcbiAgICAgICAgICBzaG93RGVzYzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0pXG5cbiAgICAgIHN0ZXBzLnB1c2goW1xuICAgICAgICAnV2FpdCBmb3IgYmF0Y2ggdG8gZmluaXNoJyxcbiAgICAgICAge1xuICAgICAgICAgIG9uV2FpdENvbmRpdGlvbjogKGhhc2gpID0+IHdhaXRGb3JCYXRjaChvcGVuT3JkZXJIYXNoID8gb3Blbk9yZGVySGFzaCA6IGhhc2gpLFxuICAgICAgICAgIHNob3dEZXNjOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgICAvLyBBbmQgZmluYWxseSB0aGUgY2xhaW0gb3JkZXJcbiAgICAgIHN0ZXBzLnB1c2goW1xuICAgICAgICAnQ2xhaW0gb3JkZXInLFxuICAgICAgICB7XG4gICAgICAgICAgb25PcmRlckNsYWltOiAoaGFzaCkgPT4gY2xhaW1PcmRlcihvcGVuT3JkZXJIYXNoID8gb3Blbk9yZGVySGFzaCA6IGhhc2gsIHRvQm9uZGVkKSxcbiAgICAgICAgICBvblJlc3VtZVdhaXQ6IChoYXNoKSA9PiB3YWl0Rm9yVHgoaGFzaCksXG4gICAgICAgICAgb25UeE1pbmVkOiBoYXNoID0+IHVwZGF0ZUNvbnZlcnRlZFZhbHVlKGhhc2gpLFxuICAgICAgICAgIGRpc2FibGVBYmFuZG9uOiB0cnVlLFxuICAgICAgICAgIHNob3dEZXNjOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSlcblxuICAgICAgLy8gVXBkYXRlIHN0YXRlIHRvIHJlZmxlY3QgdGhlIGNvcnJlY3QgYW1vdW50IG9mIHN0ZXBzXG4gICAgICAvLyBTaG93IGxvYWRlciBmb3IgYSBzbWFsbCBhbW91bnQgb2YgdGltZSB0byBwcm92aWRlIGEgc21vb3RoIHZpc3VhbCBleHBlcmllbmNlXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICBzZXRDb252ZXJzaW9uU3RlcHMoc3RlcHMpXG4gICAgICAgIH1cbiAgICAgIH0sIDkwMClcbiAgICB9XG5cbiAgICBjcmVhdGVDb252ZXJ0U3RlcHMoKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gIH0sIFtcbiAgICBjaGFuZ2VBbGxvd2FuY2UsXG4gICAgY2xhaW1PcmRlcixcbiAgICBhbW91bnRTb3VyY2UsXG4gICAgZ2V0QWxsb3dhbmNlLFxuICAgIG9wZW5PcmRlcixcbiAgICB0b0JvbmRlZCxcbiAgICB1cGRhdGVDb252ZXJ0ZWRWYWx1ZSxcbiAgXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Y29udmVyc2lvblN0ZXBzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDxDb252ZXJ0U3RlcHNcbiAgICAgICAgICBzdGVwcz17Y29udmVyc2lvblN0ZXBzfVxuICAgICAgICAgIHRvQm9uZGVkPXt0b0JvbmRlZH1cbiAgICAgICAgICBmcm9tQW1vdW50PXthbW91bnRTb3VyY2V9XG4gICAgICAgICAgY29udmVydGVkVG90YWw9e2NvbnZlcnRlZFRvdGFsfVxuICAgICAgICAgIG9uUmV0dXJuSG9tZT17aGFuZGxlUmV0dXJuSG9tZX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjc3M9e2BcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGB9XG4gICAgICAgID48L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlQ29udmVyc2lvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ConvertForm/ManageConversion.js\n");

/***/ })

})