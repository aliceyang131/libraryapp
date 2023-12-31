"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

exports.default = fingerprint;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _errors = require("../errors");

var _features = require("../features");

var _oidc = require("../oidc");

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
function fingerprint(sdk, options) {
  options = options || {};

  if (!(0, _features.isFingerprintSupported)()) {
    return _promise.default.reject(new _errors.AuthSdkError('Fingerprinting is not supported on this device'));
  }

  var timeout;
  var iframe;
  var listener;
  var promise = new _promise.default(function (resolve, reject) {
    var _options;

    iframe = document.createElement('iframe');
    iframe.style.display = 'none'; // eslint-disable-next-line complexity

    listener = function listener(e) {
      if (!e || !e.data || e.origin !== sdk.getIssuerOrigin()) {
        return;
      }

      try {
        var msg = JSON.parse(e.data);
      } catch (err) {
        // iframe messages should all be parsable
        // skip not parsable messages come from other sources in same origin (browser extensions)
        // TODO: add namespace flag in okta-core to distinguish messages that come from other sources
        return;
      }

      if (!msg) {
        return;
      }

      if (msg.type === 'FingerprintAvailable') {
        return resolve(msg.fingerprint);
      }

      if (msg.type === 'FingerprintServiceReady') {
        e.source.postMessage((0, _stringify.default)({
          type: 'GetFingerprint'
        }), e.origin);
      }
    };

    (0, _oidc.addListener)(window, 'message', listener);
    iframe.src = sdk.getIssuerOrigin() + '/auth/services/devicefingerprint';
    document.body.appendChild(iframe);
    timeout = setTimeout(function () {
      reject(new _errors.AuthSdkError('Fingerprinting timed out'));
    }, ((_options = options) === null || _options === void 0 ? void 0 : _options.timeout) || 15000);
  });
  return promise.finally(function () {
    clearTimeout(timeout);
    (0, _oidc.removeListener)(window, 'message', listener);

    if (document.body.contains(iframe)) {
      iframe.parentElement.removeChild(iframe);
    }
  });
}

module.exports = exports.default;
//# sourceMappingURL=fingerprint.js.map