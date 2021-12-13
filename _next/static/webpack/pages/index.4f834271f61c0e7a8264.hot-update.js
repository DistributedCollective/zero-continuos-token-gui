webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ConvertForm/ManageConversion.js":
/*!****************************************************!*\
  !*** ./components/ConvertForm/ManageConversion.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/web3-contracts */ \"./lib/web3-contracts.js\");\n/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/utils */ \"./lib/utils.js\");\n/* harmony import */ var components_ConvertSteps_ConvertSteps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ConvertSteps/ConvertSteps */ \"./components/ConvertSteps/ConvertSteps.js\");\n/* harmony import */ var components_utils_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/utils/store */ \"./components/utils/store.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/alverbner/Projects/atix/sovryn/zero-continuos-token-gui/components/ConvertForm/ManageConversion.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\nfunction ManageConversion(_ref) {\n  _s();\n\n  var handleReturnHome = _ref.handleReturnHome;\n  var openOrder = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useOpenOrder\"])();\n  var claimOrder = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrder\"])();\n  var waitForBatch = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForBatchToFinish\"])();\n  var waitForTx = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForTx\"])();\n  var claimOrderReceiptAmount = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrderReceiptAmount\"])();\n  var changeAllowance = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useApprove\"])();\n  var getAllowance = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useAllowance\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      conversionSteps = _useState[0],\n      setConversionSteps = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(Object(lib_utils__WEBPACK_IMPORTED_MODULE_6__[\"bigNum\"])(-1)),\n      convertedTotal = _useState2[0],\n      setConvertedTotal = _useState2[1];\n\n  var _useStore = Object(components_utils_store__WEBPACK_IMPORTED_MODULE_8__[\"useStore\"])(function (state) {\n    return [state.toBonded, state.amountSource, state.openOrderHash, state.setOrderHash, state.savedSteps];\n  }),\n      _useStore2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useStore, 5),\n      toBonded = _useStore2[0],\n      amountSource = _useStore2[1],\n      openOrderHash = _useStore2[2],\n      setOrderHash = _useStore2[3],\n      savedSteps = _useStore2[4];\n\n  var updateConvertedValue = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useCallback\"])( /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(hash) {\n      var amount;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return claimOrderReceiptAmount(hash);\n\n            case 3:\n              amount = _context.sent;\n              setConvertedTotal(amount);\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              throw new Error(_context.t0);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function (_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(), [claimOrderReceiptAmount]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var cancelled = false; // Interacting with the bonding curve involves 2, 3 or 4 transactions (depending on the direction and state of allowance):\n    // 1. Reset approval (If we're converting COLLATERAL -> BONDED, an allowance was previously set but abandoned)\n    // 2. Raise approval (If we're converting COLLATERAL -> BONDED, the current allowance is not high enough)\n    // 3. Open a buy order\n    // 4. Claim the order\n\n    var createConvertSteps = /*#__PURE__*/function () {\n      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        var steps, allowance;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                steps = []; // First we check for allowance if the direction is COLLATERAL -> BONDED\n\n                if (!toBonded) {\n                  _context2.next = 6;\n                  break;\n                }\n\n                _context2.next = 4;\n                return getAllowance();\n\n              case 4:\n                allowance = _context2.sent;\n\n                // and if we need more, add a step to ask for an approval\n                if (allowance.lt(Object(lib_utils__WEBPACK_IMPORTED_MODULE_6__[\"bigNum\"])(amountSource)) || savedSteps.length >= 4) {\n                  steps.unshift(['Raise approval', {\n                    onTxCreated: function onTxCreated() {\n                      return changeAllowance(amountSource);\n                    },\n                    onResumeWait: function onResumeWait(hash) {\n                      return waitForTx(hash);\n                    },\n                    showDesc: true\n                  }]); // Then there's the case when a user has an allowance set to the market maker contract\n                  // but wants to convert even more tokens this time. When dealing with this case\n                  // we want to first prepend a transaction to reset the allowance back to zero\n                  // (before raising it in the next transaction from above).\n                  // Note: the second part of the if statement is a workaround. When state is saved and restored \n                  //       and the buy order has been created already, the transfer was made and allowance is zero\n                  //       resulting on this step not to be included and not matching the saved steps.\n                  //       This is not a nice fix but due to time constraints is better than nothing.\n\n                  if (!allowance.isZero() || savedSteps.length === 5) {\n                    steps.unshift(['Reset approval', {\n                      onTxCreated: function onTxCreated() {\n                        return changeAllowance(0);\n                      },\n                      onResumeWait: function onResumeWait(hash) {\n                        return waitForTx(hash);\n                      },\n                      showDesc: true\n                    }]);\n                  }\n                }\n\n              case 6:\n                // Next add the open order\n                steps.push([\"Create \".concat(toBonded ? 'buy' : 'sell', \" order\"), {\n                  onTxCreated: function onTxCreated() {\n                    console.log('onTxCreated', amountSource, toBonded);\n                    return openOrder(amountSource, toBonded);\n                  },\n                  // We need to store a reference to the hash so we can use it in the following step\n                  onHashCreated: function onHashCreated(hash) {\n                    setOrderHash(hash);\n                  },\n                  onWaitForTx: function onWaitForTx(hash) {\n                    return waitForTx(hash);\n                  },\n                  showDesc: true\n                }]);\n                steps.push(['Wait for batch to finish', {\n                  onWaitCondition: function onWaitCondition(hash) {\n                    return waitForBatch(openOrderHash ? openOrderHash : hash);\n                  },\n                  showDesc: false\n                }]); // And finally the claim order\n\n                steps.push(['Claim order', {\n                  onOrderClaim: function onOrderClaim(hash) {\n                    return claimOrder(openOrderHash ? openOrderHash : hash, toBonded);\n                  },\n                  onResumeWait: function onResumeWait(hash) {\n                    return waitForTx(hash);\n                  },\n                  onTxMined: function onTxMined(hash) {\n                    return updateConvertedValue(hash);\n                  },\n                  showDesc: true,\n                  disableAbandon: true\n                }]); // Update state to reflect the correct amount of steps\n                // Show loader for a small amount of time to provide a smooth visual experience\n\n                setTimeout(function () {\n                  if (!cancelled) {\n                    setConversionSteps(steps);\n                  }\n                }, 900);\n\n              case 10:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function createConvertSteps() {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n\n    createConvertSteps();\n    return function () {\n      cancelled = true;\n    };\n  }, [changeAllowance, claimOrder, amountSource, getAllowance, openOrder, toBonded, updateConvertedValue]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, conversionSteps.length > 0 ? __jsx(components_ConvertSteps_ConvertSteps__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    steps: conversionSteps,\n    toBonded: toBonded,\n    fromAmount: amountSource,\n    convertedTotal: convertedTotal,\n    onReturnHome: handleReturnHome,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 9\n    }\n  }) : __jsx(_StyledDiv, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(ManageConversion, \"8lsjmf/0c5mZxGC5YntlOkt0pjw=\", false, function () {\n  return [lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useOpenOrder\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrder\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForBatchToFinish\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForTx\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrderReceiptAmount\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useApprove\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useAllowance\"], components_utils_store__WEBPACK_IMPORTED_MODULE_8__[\"useStore\"]];\n});\n\n_c = ManageConversion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageConversion);\n\nvar _StyledDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"div\").withConfig({\n  displayName: \"ManageConversion___StyledDiv\",\n  componentId: \"sc-rlfcuu-0\"\n})([\"display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"ManageConversion\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db252ZXJ0Rm9ybS9NYW5hZ2VDb252ZXJzaW9uLmpzP2RmYTAiXSwibmFtZXMiOlsiTWFuYWdlQ29udmVyc2lvbiIsImhhbmRsZVJldHVybkhvbWUiLCJvcGVuT3JkZXIiLCJ1c2VPcGVuT3JkZXIiLCJjbGFpbU9yZGVyIiwidXNlQ2xhaW1PcmRlciIsIndhaXRGb3JCYXRjaCIsInVzZVdhaXRGb3JCYXRjaFRvRmluaXNoIiwid2FpdEZvclR4IiwidXNlV2FpdEZvclR4IiwiY2xhaW1PcmRlclJlY2VpcHRBbW91bnQiLCJ1c2VDbGFpbU9yZGVyUmVjZWlwdEFtb3VudCIsImNoYW5nZUFsbG93YW5jZSIsInVzZUFwcHJvdmUiLCJnZXRBbGxvd2FuY2UiLCJ1c2VBbGxvd2FuY2UiLCJ1c2VTdGF0ZSIsImNvbnZlcnNpb25TdGVwcyIsInNldENvbnZlcnNpb25TdGVwcyIsImJpZ051bSIsImNvbnZlcnRlZFRvdGFsIiwic2V0Q29udmVydGVkVG90YWwiLCJ1c2VTdG9yZSIsInN0YXRlIiwidG9Cb25kZWQiLCJhbW91bnRTb3VyY2UiLCJvcGVuT3JkZXJIYXNoIiwic2V0T3JkZXJIYXNoIiwic2F2ZWRTdGVwcyIsInVwZGF0ZUNvbnZlcnRlZFZhbHVlIiwidXNlQ2FsbGJhY2siLCJoYXNoIiwiYW1vdW50IiwiRXJyb3IiLCJ1c2VFZmZlY3QiLCJjYW5jZWxsZWQiLCJjcmVhdGVDb252ZXJ0U3RlcHMiLCJzdGVwcyIsImFsbG93YW5jZSIsImx0IiwibGVuZ3RoIiwidW5zaGlmdCIsIm9uVHhDcmVhdGVkIiwib25SZXN1bWVXYWl0Iiwic2hvd0Rlc2MiLCJpc1plcm8iLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIm9uSGFzaENyZWF0ZWQiLCJvbldhaXRGb3JUeCIsIm9uV2FpdENvbmRpdGlvbiIsIm9uT3JkZXJDbGFpbSIsIm9uVHhNaW5lZCIsImRpc2FibGVBYmFuZG9uIiwic2V0VGltZW91dCJdLCJtYXBwaW5n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TGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxHQVNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixDQURGO0FBdUJEOztHQWxLUUQsZ0I7VUFDV0csK0QsRUFDQ0UsZ0UsRUFDRUUsMEUsRUFDSEUsK0QsRUFDY0UsNkUsRUFDUkUsNkQsRUFDSEUsK0QsRUFHcURPLCtEOzs7S0FWbkV0QixnQjtBQW9LTUEsK0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnZlcnRGb3JtL01hbmFnZUNvbnZlcnNpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHVzZU9wZW5PcmRlcixcbiAgdXNlQ2xhaW1PcmRlcixcbiAgdXNlQXBwcm92ZSxcbiAgdXNlQWxsb3dhbmNlLFxuICB1c2VDbGFpbU9yZGVyUmVjZWlwdEFtb3VudCxcbiAgdXNlV2FpdEZvckJhdGNoVG9GaW5pc2gsXG4gIHVzZVdhaXRGb3JUeFxufSBmcm9tICdsaWIvd2ViMy1jb250cmFjdHMnXG5pbXBvcnQgeyBiaWdOdW0gfSBmcm9tICdsaWIvdXRpbHMnXG5pbXBvcnQgQ29udmVydFN0ZXBzIGZyb20gJ2NvbXBvbmVudHMvQ29udmVydFN0ZXBzL0NvbnZlcnRTdGVwcydcblxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdjb21wb25lbnRzL3V0aWxzL3N0b3JlJztcblxuZnVuY3Rpb24gTWFuYWdlQ29udmVyc2lvbih7IGhhbmRsZVJldHVybkhvbWUgfSkge1xuICBjb25zdCBvcGVuT3JkZXIgPSB1c2VPcGVuT3JkZXIoKVxuICBjb25zdCBjbGFpbU9yZGVyID0gdXNlQ2xhaW1PcmRlcigpXG4gIGNvbnN0IHdhaXRGb3JCYXRjaCA9IHVzZVdhaXRGb3JCYXRjaFRvRmluaXNoKClcbiAgY29uc3Qgd2FpdEZvclR4ID0gdXNlV2FpdEZvclR4KClcbiAgY29uc3QgY2xhaW1PcmRlclJlY2VpcHRBbW91bnQgPSB1c2VDbGFpbU9yZGVyUmVjZWlwdEFtb3VudCgpXG4gIGNvbnN0IGNoYW5nZUFsbG93YW5jZSA9IHVzZUFwcHJvdmUoKVxuICBjb25zdCBnZXRBbGxvd2FuY2UgPSB1c2VBbGxvd2FuY2UoKVxuICBjb25zdCBbY29udmVyc2lvblN0ZXBzLCBzZXRDb252ZXJzaW9uU3RlcHNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtjb252ZXJ0ZWRUb3RhbCwgc2V0Q29udmVydGVkVG90YWxdID0gdXNlU3RhdGUoYmlnTnVtKC0xKSlcbiAgY29uc3QgW3RvQm9uZGVkLCBhbW91bnRTb3VyY2UsIG9wZW5PcmRlckhhc2gsIHNldE9yZGVySGFzaCwgc2F2ZWRTdGVwc10gPSB1c2VTdG9yZShzdGF0ZSA9PiBbXG4gICAgICBzdGF0ZS50b0JvbmRlZCxcbiAgICAgIHN0YXRlLmFtb3VudFNvdXJjZSxcbiAgICAgIHN0YXRlLm9wZW5PcmRlckhhc2gsXG4gICAgICBzdGF0ZS5zZXRPcmRlckhhc2gsXG4gICAgICBzdGF0ZS5zYXZlZFN0ZXBzXG4gIF0pXG5cbiAgY29uc3QgdXBkYXRlQ29udmVydGVkVmFsdWUgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyBoYXNoID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFtb3VudCA9IGF3YWl0IGNsYWltT3JkZXJSZWNlaXB0QW1vdW50KGhhc2gpXG5cbiAgICAgICAgc2V0Q29udmVydGVkVG90YWwoYW1vdW50KVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpXG4gICAgICB9XG4gICAgfSxcbiAgICBbY2xhaW1PcmRlclJlY2VpcHRBbW91bnRdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgLy8gSW50ZXJhY3Rpbmcgd2l0aCB0aGUgYm9uZGluZyBjdXJ2ZSBpbnZvbHZlcyAyLCAzIG9yIDQgdHJhbnNhY3Rpb25zIChkZXBlbmRpbmcgb24gdGhlIGRpcmVjdGlvbiBhbmQgc3RhdGUgb2YgYWxsb3dhbmNlKTpcbiAgICAvLyAxLiBSZXNldCBhcHByb3ZhbCAoSWYgd2UncmUgY29udmVydGluZyBDT0xMQVRFUkFMIC0+IEJPTkRFRCwgYW4gYWxsb3dhbmNlIHdhcyBwcmV2aW91c2x5IHNldCBidXQgYWJhbmRvbmVkKVxuICAgIC8vIDIuIFJhaXNlIGFwcHJvdmFsIChJZiB3ZSdyZSBjb252ZXJ0aW5nIENPTExBVEVSQUwgLT4gQk9OREVELCB0aGUgY3VycmVudCBhbGxvd2FuY2UgaXMgbm90IGhpZ2ggZW5vdWdoKVxuICAgIC8vIDMuIE9wZW4gYSBidXkgb3JkZXJcbiAgICAvLyA0LiBDbGFpbSB0aGUgb3JkZXJcbiAgICBjb25zdCBjcmVhdGVDb252ZXJ0U3RlcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBsZXQgc3RlcHMgPSBbXVxuXG4gICAgICAvLyBGaXJzdCB3ZSBjaGVjayBmb3IgYWxsb3dhbmNlIGlmIHRoZSBkaXJlY3Rpb24gaXMgQ09MTEFURVJBTCAtPiBCT05ERURcbiAgICAgIGlmICh0b0JvbmRlZCkge1xuICAgICAgICBjb25zdCBhbGxvd2FuY2UgPSBhd2FpdCBnZXRBbGxvd2FuY2UoKVxuXG4gICAgICAgIC8vIGFuZCBpZiB3ZSBuZWVkIG1vcmUsIGFkZCBhIHN0ZXAgdG8gYXNrIGZvciBhbiBhcHByb3ZhbFxuICAgICAgICBpZiAoYWxsb3dhbmNlLmx0KGJpZ051bShhbW91bnRTb3VyY2UpKSB8fCBzYXZlZFN0ZXBzLmxlbmd0aCA+PSA0KSB7XG4gICAgICAgICAgICBzdGVwcy51bnNoaWZ0KFtcbiAgICAgICAgICAgICAgJ1JhaXNlIGFwcHJvdmFsJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uVHhDcmVhdGVkOiAoKSA9PiBjaGFuZ2VBbGxvd2FuY2UoYW1vdW50U291cmNlKSxcbiAgICAgICAgICAgICAgICBvblJlc3VtZVdhaXQ6IChoYXNoKSA9PiB3YWl0Rm9yVHgoaGFzaCksXG4gICAgICAgICAgICAgICAgc2hvd0Rlc2M6IHRydWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKVxuXG4gICAgICAgICAgLy8gVGhlbiB0aGVyZSdzIHRoZSBjYXNlIHdoZW4gYSB1c2VyIGhhcyBhbiBhbGxvd2FuY2Ugc2V0IHRvIHRoZSBtYXJrZXQgbWFrZXIgY29udHJhY3RcbiAgICAgICAgICAvLyBidXQgd2FudHMgdG8gY29udmVydCBldmVuIG1vcmUgdG9rZW5zIHRoaXMgdGltZS4gV2hlbiBkZWFsaW5nIHdpdGggdGhpcyBjYXNlXG4gICAgICAgICAgLy8gd2Ugd2FudCB0byBmaXJzdCBwcmVwZW5kIGEgdHJhbnNhY3Rpb24gdG8gcmVzZXQgdGhlIGFsbG93YW5jZSBiYWNrIHRvIHplcm9cbiAgICAgICAgICAvLyAoYmVmb3JlIHJhaXNpbmcgaXQgaW4gdGhlIG5leHQgdHJhbnNhY3Rpb24gZnJvbSBhYm92ZSkuXG4gICAgICAgICAgLy8gTm90ZTogdGhlIHNlY29uZCBwYXJ0IG9mIHRoZSBpZiBzdGF0ZW1lbnQgaXMgYSB3b3JrYXJvdW5kLiBXaGVuIHN0YXRlIGlzIHNhdmVkIGFuZCByZXN0b3JlZCBcbiAgICAgICAgICAvLyAgICAgICBhbmQgdGhlIGJ1eSBvcmRlciBoYXMgYmVlbiBjcmVhdGVkIGFscmVhZHksIHRoZSB0cmFuc2ZlciB3YXMgbWFkZSBhbmQgYWxsb3dhbmNlIGlzIHplcm9cbiAgICAgICAgICAvLyAgICAgICByZXN1bHRpbmcgb24gdGhpcyBzdGVwIG5vdCB0byBiZSBpbmNsdWRlZCBhbmQgbm90IG1hdGNoaW5nIHRoZSBzYXZlZCBzdGVwcy5cbiAgICAgICAgICAvLyAgICAgICBUaGlzIGlzIG5vdCBhIG5pY2UgZml4IGJ1dCBkdWUgdG8gdGltZSBjb25zdHJhaW50cyBpcyBiZXR0ZXIgdGhhbiBub3RoaW5nLlxuICAgICAgICAgIGlmICghYWxsb3dhbmNlLmlzWmVybygpIHx8IHNhdmVkU3RlcHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICBzdGVwcy51bnNoaWZ0KFtcbiAgICAgICAgICAgICAgJ1Jlc2V0IGFwcHJvdmFsJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uVHhDcmVhdGVkOiAoKSA9PiBjaGFuZ2VBbGxvd2FuY2UoMCksXG4gICAgICAgICAgICAgICAgb25SZXN1bWVXYWl0OiAoaGFzaCkgPT4gd2FpdEZvclR4KGhhc2gpLFxuICAgICAgICAgICAgICAgIHNob3dEZXNjOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTmV4dCBhZGQgdGhlIG9wZW4gb3JkZXJcbiAgICAgIHN0ZXBzLnB1c2goW1xuICAgICAgICBgQ3JlYXRlICR7dG9Cb25kZWQgPyAnYnV5JyA6ICdzZWxsJ30gb3JkZXJgLFxuICAgICAgICB7XG4gICAgICAgICAgb25UeENyZWF0ZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvblR4Q3JlYXRlZCcsIGFtb3VudFNvdXJjZSwgdG9Cb25kZWQpXG4gICAgICAgICAgICByZXR1cm4gb3Blbk9yZGVyKGFtb3VudFNvdXJjZSwgdG9Cb25kZWQpXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gc3RvcmUgYSByZWZlcmVuY2UgdG8gdGhlIGhhc2ggc28gd2UgY2FuIHVzZSBpdCBpbiB0aGUgZm9sbG93aW5nIHN0ZXBcbiAgICAgICAgICBvbkhhc2hDcmVhdGVkOiBoYXNoID0+IHtcbiAgICAgICAgICAgIHNldE9yZGVySGFzaChoYXNoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25XYWl0Rm9yVHg6IChoYXNoKSA9PiB3YWl0Rm9yVHgoaGFzaCksXG4gICAgICAgICAgc2hvd0Rlc2M6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdKVxuXG4gICAgICBzdGVwcy5wdXNoKFtcbiAgICAgICAgJ1dhaXQgZm9yIGJhdGNoIHRvIGZpbmlzaCcsXG4gICAgICAgIHtcbiAgICAgICAgICBvbldhaXRDb25kaXRpb246IChoYXNoKSA9PiB3YWl0Rm9yQmF0Y2gob3Blbk9yZGVySGFzaCA/IG9wZW5PcmRlckhhc2ggOiBoYXNoKSxcbiAgICAgICAgICBzaG93RGVzYzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICAgLy8gQW5kIGZpbmFsbHkgdGhlIGNsYWltIG9yZGVyXG4gICAgICBzdGVwcy5wdXNoKFtcbiAgICAgICAgJ0NsYWltIG9yZGVyJyxcbiAgICAgICAge1xuICAgICAgICAgIG9uT3JkZXJDbGFpbTogKGhhc2gpID0+IGNsYWltT3JkZXIob3Blbk9yZGVySGFzaCA/IG9wZW5PcmRlckhhc2ggOiBoYXNoLCB0b0JvbmRlZCksXG4gICAgICAgICAgb25SZXN1bWVXYWl0OiAoaGFzaCkgPT4gd2FpdEZvclR4KGhhc2gpLFxuICAgICAgICAgIG9uVHhNaW5lZDogaGFzaCA9PiB1cGRhdGVDb252ZXJ0ZWRWYWx1ZShoYXNoKSxcbiAgICAgICAgICBzaG93RGVzYzogdHJ1ZSxcbiAgICAgICAgICBkaXNhYmxlQWJhbmRvbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0pXG5cbiAgICAgIC8vIFVwZGF0ZSBzdGF0ZSB0byByZWZsZWN0IHRoZSBjb3JyZWN0IGFtb3VudCBvZiBzdGVwc1xuICAgICAgLy8gU2hvdyBsb2FkZXIgZm9yIGEgc21hbGwgYW1vdW50IG9mIHRpbWUgdG8gcHJvdmlkZSBhIHNtb290aCB2aXN1YWwgZXhwZXJpZW5jZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgc2V0Q29udmVyc2lvblN0ZXBzKHN0ZXBzKVxuICAgICAgICB9XG4gICAgICB9LCA5MDApXG4gICAgfVxuXG4gICAgY3JlYXRlQ29udmVydFN0ZXBzKClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICB9LCBbXG4gICAgY2hhbmdlQWxsb3dhbmNlLFxuICAgIGNsYWltT3JkZXIsXG4gICAgYW1vdW50U291cmNlLFxuICAgIGdldEFsbG93YW5jZSxcbiAgICBvcGVuT3JkZXIsXG4gICAgdG9Cb25kZWQsXG4gICAgdXBkYXRlQ29udmVydGVkVmFsdWUsXG4gIF0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NvbnZlcnNpb25TdGVwcy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8Q29udmVydFN0ZXBzXG4gICAgICAgICAgc3RlcHM9e2NvbnZlcnNpb25TdGVwc31cbiAgICAgICAgICB0b0JvbmRlZD17dG9Cb25kZWR9XG4gICAgICAgICAgZnJvbUFtb3VudD17YW1vdW50U291cmNlfVxuICAgICAgICAgIGNvbnZlcnRlZFRvdGFsPXtjb252ZXJ0ZWRUb3RhbH1cbiAgICAgICAgICBvblJldHVybkhvbWU9e2hhbmRsZVJldHVybkhvbWV9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY3NzPXtgXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBgfVxuICAgICAgICA+PC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZUNvbnZlcnNpb25cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ConvertForm/ManageConversion.js\n");

/***/ })

})