"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

exports.poll = poll;

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _isInteger = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/number/is-integer"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _proceed = require("./proceed");

var _transactionMeta = require("./transactionMeta");

var _util = require("../util");

/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
async function poll(authClient, options = {}) {
  var _meta$remediations;

  let transaction = await (0, _proceed.proceed)(authClient, {
    startPolling: true
  });
  const meta = (0, _transactionMeta.getSavedTransactionMeta)(authClient);
  let availablePollingRemeditaions = meta === null || meta === void 0 ? void 0 : (_meta$remediations = meta.remediations) === null || _meta$remediations === void 0 ? void 0 : (0, _find.default)(_meta$remediations).call(_meta$remediations, remediation => (0, _includes.default)(remediation).call(remediation, 'poll'));

  if (!(availablePollingRemeditaions !== null && availablePollingRemeditaions !== void 0 && availablePollingRemeditaions.length)) {
    (0, _util.warn)('No polling remediations available at the current IDX flow stage');
  }

  if ((0, _isInteger.default)(options.refresh)) {
    return new _promise.default(function (resolve, reject) {
      setTimeout(async function () {
        try {
          var _transaction$nextStep, _transaction$nextStep2;

          const refresh = (_transaction$nextStep = transaction.nextStep) === null || _transaction$nextStep === void 0 ? void 0 : (_transaction$nextStep2 = _transaction$nextStep.poll) === null || _transaction$nextStep2 === void 0 ? void 0 : _transaction$nextStep2.refresh;

          if (refresh) {
            resolve(poll(authClient, {
              refresh
            }));
          } else {
            resolve(transaction);
          }
        } catch (err) {
          reject(err);
        }
      }, options.refresh);
    });
  }

  return transaction;
}
//# sourceMappingURL=poll.js.map