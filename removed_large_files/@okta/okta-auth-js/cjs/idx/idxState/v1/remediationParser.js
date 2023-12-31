"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

exports.generateRemediationFunctions = void 0;

var _fromEntries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/from-entries"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _generateIdxAction = _interopRequireDefault(require("./generateIdxAction"));

/*!
 * Copyright (c) 2021-Present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// auth-js/types
const generateRemediationFunctions = function generateRemediationFunctions(authClient, remediationValue, toPersist = {}) {
  return (0, _fromEntries.default)((0, _map.default)(remediationValue).call(remediationValue, remediation => {
    return [remediation.name, (0, _generateIdxAction.default)(authClient, remediation, toPersist)];
  }));
};

exports.generateRemediationFunctions = generateRemediationFunctions;
//# sourceMappingURL=remediationParser.js.map