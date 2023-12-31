"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

exports.remediate = remediate;

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _errors = require("../errors");

var _util = require("./util");

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

/* eslint-disable max-statements, max-depth, complexity */
function getActionFromValues(values, idxResponse) {
  var _context;

  // Currently support resend actions only
  return (0, _find.default)(_context = (0, _keys.default)(idxResponse.actions)).call(_context, action => !!values.resend && (0, _includes.default)(action).call(action, '-resend'));
}

function removeActionFromValues(values) {
  // Currently support resend actions only
  return { ...values,
    resend: undefined
  };
}

function removeActionFromOptions(options, actionName) {
  let actions = options.actions || [];
  actions = (0, _filter.default)(actions).call(actions, entry => {
    if (typeof entry === 'string') {
      return entry !== actionName;
    }

    return entry.name !== actionName;
  });
  return { ...options,
    actions
  };
} // This function is called recursively until it reaches success or cannot be remediated


async function remediate(idxResponse, values, options) {
  let {
    neededToProceed,
    interactionCode
  } = idxResponse;
  const {
    flow
  } = options; // If the response contains an interaction code, there is no need to remediate

  if (interactionCode) {
    return {
      idxResponse
    };
  }

  const remediator = (0, _util.getRemediator)(neededToProceed, values, options); // Try actions in idxResponse first

  const actionFromValues = getActionFromValues(values, idxResponse);
  const actionFromOptions = options.actions || [];
  const actions = [...actionFromOptions, ...(actionFromValues && [actionFromValues] || [])];

  if (actions) {
    for (let action of actions) {
      // Action can either be specified as a string, or as an object with name and optional params
      let params = {};

      if (typeof action !== 'string') {
        params = action.params || {};
        action = action.name;
      }

      let valuesWithoutExecutedAction = removeActionFromValues(values);
      let optionsWithoutExecutedAction = removeActionFromOptions(options, action);

      if (typeof idxResponse.actions[action] === 'function') {
        try {
          idxResponse = await idxResponse.actions[action](params);
          idxResponse = { ...idxResponse,
            requestDidSucceed: true
          };
        } catch (e) {
          return (0, _util.handleIdxError)(e, remediator);
        }

        if (action === 'cancel') {
          return {
            idxResponse,
            canceled: true
          };
        }

        return remediate(idxResponse, valuesWithoutExecutedAction, optionsWithoutExecutedAction); // recursive call
      } // search for action in remediation list


      const remediationAction = (0, _find.default)(neededToProceed).call(neededToProceed, ({
        name
      }) => name === action);

      if (remediationAction) {
        try {
          idxResponse = await idxResponse.proceed(action, params);
          idxResponse = { ...idxResponse,
            requestDidSucceed: true
          };
        } catch (e) {
          return (0, _util.handleIdxError)(e, remediator);
        }

        return remediate(idxResponse, values, optionsWithoutExecutedAction); // recursive call
      }
    }
  } // Do not attempt to remediate if response is in terminal state


  const terminal = (0, _util.isTerminalResponse)(idxResponse);
  const messages = (0, _util.getMessagesFromResponse)(idxResponse);

  if (terminal) {
    return {
      idxResponse,
      terminal,
      messages
    };
  }

  if (!remediator) {
    if (options.step) {
      values = (0, _util.filterValuesForRemediation)(idxResponse, options.step, values); // include only requested values

      try {
        idxResponse = await idxResponse.proceed(options.step, values);
        idxResponse = { ...idxResponse,
          requestDidSucceed: true
        };
        return {
          idxResponse
        };
      } catch (e) {
        return (0, _util.handleIdxError)(e);
      }
    }

    if (flow === 'default') {
      return {
        idxResponse
      };
    }

    throw new _errors.AuthSdkError(`
      No remediation can match current flow, check policy settings in your org.
      Remediations: [${(0, _reduce.default)(neededToProceed).call(neededToProceed, (acc, curr) => acc ? acc + ' ,' + curr.name : curr.name, '')}]
    `);
  } // Return next step to the caller


  if (!remediator.canRemediate()) {
    const nextStep = (0, _util.getNextStep)(remediator, idxResponse);
    return {
      idxResponse,
      nextStep,
      messages: messages.length ? messages : undefined
    };
  }

  const name = remediator.getName();
  const data = remediator.getData();

  try {
    idxResponse = await idxResponse.proceed(name, data);
    idxResponse = { ...idxResponse,
      requestDidSucceed: true
    }; // We may want to trim the values bag for the next remediation
    // Let the remediator decide what the values should be (default to current values)

    values = remediator.getValuesAfterProceed();
    options = { ...options,
      step: undefined
    }; // do not re-use the step

    return remediate(idxResponse, values, options); // recursive call
  } catch (e) {
    return (0, _util.handleIdxError)(e, remediator);
  }
}
//# sourceMappingURL=remediate.js.map