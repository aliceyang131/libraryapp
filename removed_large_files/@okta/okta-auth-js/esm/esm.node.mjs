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

import _reduceInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/reduce';
import _Reflect$construct from '@babel/runtime-corejs3/core-js-stable/reflect/construct';
import _classCallCheck from '@babel/runtime-corejs3/helpers/classCallCheck';
import _inherits from '@babel/runtime-corejs3/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime-corejs3/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime-corejs3/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime-corejs3/helpers/assertThisInitialized';
import _wrapNativeSuper from '@babel/runtime-corejs3/helpers/wrapNativeSuper';
import _Object$setPrototypeOf from '@babel/runtime-corejs3/core-js-stable/object/set-prototype-of';
import _asyncToGenerator from '@babel/runtime-corejs3/helpers/asyncToGenerator';
import _regeneratorRuntime from '@babel/runtime-corejs3/regenerator';
import atobModule from 'atob';
import btoaModule from 'btoa';
import { Crypto } from '@peculiar/webcrypto';
import _sliceInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/slice';
import _Promise from '@babel/runtime-corejs3/core-js-stable/promise';
import _concatInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/concat';
import _JSON$stringify from '@babel/runtime-corejs3/core-js-stable/json/stringify';
import _indexOfInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/index-of';
import _createClass from '@babel/runtime-corejs3/helpers/createClass';
import _Object$assign from '@babel/runtime-corejs3/core-js-stable/object/assign';
import _Object$keys from '@babel/runtime-corejs3/core-js-stable/object/keys';
import _typeof from '@babel/runtime-corejs3/helpers/typeof';
import _Array$from from '@babel/runtime-corejs3/core-js-stable/array/from';
import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/map';
import _Object$entries from '@babel/runtime-corejs3/core-js-stable/object/entries';
import _keysInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/keys';
import _Object$values from '@babel/runtime-corejs3/core-js-stable/object/values';
import _findInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/find';
import Cookies from 'js-cookie';
import _filterInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/filter';
import _parseInt from '@babel/runtime-corejs3/core-js-stable/parse-int';
import _toConsumableArray from '@babel/runtime-corejs3/helpers/toConsumableArray';
import _Map from '@babel/runtime-corejs3/core-js-stable/map';
import _valuesInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/values';
import _Symbol from '@babel/runtime-corejs3/core-js-stable/symbol';
import _getIteratorMethod from '@babel/runtime-corejs3/core-js/get-iterator-method';
import { BroadcastChannel, createLeaderElection } from 'broadcast-channel';
import PCancelable from 'p-cancelable';
import _entriesInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/entries';
import crossFetch from 'cross-fetch';
import NodeCache from 'node-cache';
import _Object$fromEntries from '@babel/runtime-corejs3/core-js-stable/object/from-entries';
import { JSONPath } from 'jsonpath-plus';
import _includesInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/includes';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _get from '@babel/runtime-corejs3/helpers/get';
import _Number$isInteger from '@babel/runtime-corejs3/core-js-stable/number/is-integer';
import _URL2 from '@babel/runtime-corejs3/core-js-stable/url';
import Emitter from 'tiny-emitter';

function _createSuper$x(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$x(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$x() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var CustomError = function (_Error) {
  _inherits(CustomError, _Error);
  var _super = _createSuper$x(CustomError);
  function CustomError(message) {
    var _this;
    _classCallCheck(this, CustomError);
    _this = _super.call(this, message);
    _Object$setPrototypeOf(_assertThisInitialized(_this), (this instanceof CustomError ? this.constructor : void 0).prototype);
    return _this;
  }
  return CustomError;
}( _wrapNativeSuper(Error));

function _createSuper$w(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$w(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$w() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AuthApiError = function (_CustomError) {
  _inherits(AuthApiError, _CustomError);
  var _super = _createSuper$w(AuthApiError);
  function AuthApiError(err, xhr) {
    var _this;
    _classCallCheck(this, AuthApiError);
    var message = err.errorSummary;
    _this = _super.call(this, message);
    _this.name = 'AuthApiError';
    _this.errorSummary = err.errorSummary;
    _this.errorCode = err.errorCode;
    _this.errorLink = err.errorLink;
    _this.errorId = err.errorId;
    _this.errorCauses = err.errorCauses;
    if (xhr) {
      _this.xhr = xhr;
    }
    return _this;
  }
  return AuthApiError;
}(CustomError);

function _createSuper$v(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$v(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$v() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AuthPollStopError = function (_CustomError) {
  _inherits(AuthPollStopError, _CustomError);
  var _super = _createSuper$v(AuthPollStopError);
  function AuthPollStopError() {
    _classCallCheck(this, AuthPollStopError);
    var message = 'The poll was stopped by the sdk';
    return _super.call(this, message);
  }
  return AuthPollStopError;
}(CustomError);

function _createSuper$u(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$u(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$u() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AuthSdkError = function (_CustomError) {
  _inherits(AuthSdkError, _CustomError);
  var _super = _createSuper$u(AuthSdkError);
  function AuthSdkError(msg, xhr) {
    var _this;
    _classCallCheck(this, AuthSdkError);
    _this = _super.call(this, msg);
    _this.name = 'AuthSdkError';
    _this.errorCode = 'INTERNAL';
    _this.errorSummary = msg;
    _this.errorLink = 'INTERNAL';
    _this.errorId = 'INTERNAL';
    _this.errorCauses = [];
    if (xhr) {
      _this.xhr = xhr;
    }
    return _this;
  }
  return AuthSdkError;
}(CustomError);

function _createSuper$t(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$t(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$t() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var OAuthError = function (_CustomError) {
  _inherits(OAuthError, _CustomError);
  var _super = _createSuper$t(OAuthError);
  function OAuthError(errorCode, summary) {
    var _this;
    _classCallCheck(this, OAuthError);
    _this = _super.call(this, summary);
    _this.name = 'OAuthError';
    _this.errorCode = errorCode;
    _this.errorSummary = summary;
    _this.error = errorCode;
    _this.error_description = summary;
    return _this;
  }
  return OAuthError;
}(CustomError);

function isAuthApiError(obj) {
  return obj instanceof AuthApiError;
}

var a;
if (typeof atob !== 'undefined') {
  a = atob;
} else {
  a = atobModule;
}
var b;
if (typeof btoa !== 'undefined') {
  b = btoa;
} else {
  b = btoaModule;
}
var crypto$1 = _asyncToGenerator( _regeneratorRuntime.mark(function _callee() {
  return _regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return import('crypto');
        case 3:
          return _context.abrupt("return", _context.sent);
        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", undefined);
        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 6]]);
}))();
var webcrypto;
if (typeof crypto$1 !== 'undefined' && crypto$1['webcrypto']) {
  webcrypto = crypto$1['webcrypto'];
} else {
  webcrypto = new Crypto();
}

function stringToBase64Url(str) {
  var b64 = b(str);
  return base64ToBase64Url(b64);
}
function base64ToBase64Url(b64) {
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function base64UrlToBase64(b64u) {
  return b64u.replace(/-/g, '+').replace(/_/g, '/');
}
function base64UrlToString(b64u) {
  var b64 = base64UrlToBase64(b64u);
  switch (b64.length % 4) {
    case 0:
      break;
    case 2:
      b64 += '==';
      break;
    case 3:
      b64 += '=';
      break;
    default:
      throw new AuthSdkError('Not a valid Base64Url');
  }
  var utf8 = a(b64);
  try {
    return decodeURIComponent(escape(utf8));
  } catch (e) {
    return utf8;
  }
}
function stringToBuffer(str) {
  var buffer = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) {
    buffer[i] = str.charCodeAt(i);
  }
  return buffer;
}
function base64UrlDecode(str) {
  return a(base64UrlToBase64(str));
}
function base64UrlToBuffer(b64u) {
  return Uint8Array.from(base64UrlDecode(b64u), function (c) {
    return c.charCodeAt(0);
  });
}
function bufferToBase64Url(bin) {
  var _context;
  return b(_reduceInstanceProperty(_context = new Uint8Array(bin)).call(_context, function (s, byte) {
    return s + String.fromCharCode(byte);
  }, ''));
}

function getOidcHash(str) {
  var buffer = new TextEncoder().encode(str);
  return webcrypto.subtle.digest('SHA-256', buffer).then(function (arrayBuffer) {
    var intBuffer = new Uint8Array(arrayBuffer);
    var firstHalf = _sliceInstanceProperty(intBuffer).call(intBuffer, 0, 16);
    var hash = String.fromCharCode.apply(null, firstHalf);
    var b64u = stringToBase64Url(hash);
    return b64u;
  });
}

function getNativeConsole() {
  if (typeof window !== 'undefined') {
    return window.console;
  } else if (typeof console !== 'undefined') {
    return console;
  } else {
    return undefined;
  }
}
function getConsole() {
  var nativeConsole = getNativeConsole();
  if (nativeConsole && nativeConsole.log) {
    return nativeConsole;
  }
  return {
    log: function log() {},
    warn: function warn() {},
    group: function group() {},
    groupEnd: function groupEnd() {}
  };
}
function warn(text) {
  getConsole().warn('[okta-auth-sdk] WARN: ' + text);
}
function deprecate(text) {
  getConsole().warn('[okta-auth-sdk] DEPRECATION: ' + text);
}
function deprecateWrap(text, fn) {
  return function () {
    deprecate(text);
    return fn.apply(null, arguments);
  };
}

function isoToUTCString(str) {
  var parts = str.match(/\d+/g),
      isoTime = Date.UTC(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]),
      isoDate = new Date(isoTime);
  return isoDate.toUTCString();
}
function genRandomString(length) {
  var randomCharset = 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var random = '';
  for (var c = 0, cl = randomCharset.length; c < length; ++c) {
    random += randomCharset[Math.floor(Math.random() * cl)];
  }
  return random;
}
function delay(ms) {
  return new _Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

function bind(fn, ctx) {
  var additionalArgs = _sliceInstanceProperty(Array.prototype).call(arguments, 2);
  return function () {
    var args = _sliceInstanceProperty(Array.prototype).call(arguments);
    args = _concatInstanceProperty(additionalArgs).call(additionalArgs, args);
    return fn.apply(ctx, args);
  };
}
function extend() {
  var obj1 = arguments[0];
  var objArray = _sliceInstanceProperty([]).call(arguments, 1);
  objArray.forEach(function (obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop) && obj[prop] !== undefined) {
        obj1[prop] = obj[prop];
      }
    }
  });
  return obj1;
}
function removeNils(obj) {
  var cleaned = {};
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      var value = obj[prop];
      if (value !== null && value !== undefined) {
        cleaned[prop] = value;
      }
    }
  }
  return cleaned;
}
function clone(obj) {
  if (obj) {
    var str = _JSON$stringify(obj);
    if (str) {
      return JSON.parse(str);
    }
  }
  return obj;
}
function omit(obj) {
  var newobj = {};
  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }
  for (var p in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, p) && _indexOfInstanceProperty(props).call(props, p) == -1) {
      newobj[p] = obj[p];
    }
  }
  return clone(newobj);
}
function find(collection, searchParams) {
  var c = collection.length;
  while (c--) {
    var item = collection[c];
    var found = true;
    for (var prop in searchParams) {
      if (!Object.prototype.hasOwnProperty.call(searchParams, prop)) {
        continue;
      }
      if (item[prop] !== searchParams[prop]) {
        found = false;
        break;
      }
    }
    if (found) {
      return item;
    }
  }
}
function getLink(obj, linkName, altName) {
  if (!obj || !obj._links) {
    return;
  }
  var link = clone(obj._links[linkName]);
  if (link && link.name && altName) {
    if (link.name === altName) {
      return link;
    }
  } else {
    return link;
  }
}

function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function isNumber(obj) {
  return Object.prototype.toString.call(obj) === '[object Number]';
}
function isFunction(fn) {
  return !!fn && {}.toString.call(fn) === '[object Function]';
}
function isPromise(obj) {
  return obj && obj.finally && typeof obj.finally === 'function';
}

function isAbsoluteUrl(url) {
  return /^(?:[a-z]+:)?\/\//i.test(url);
}
function toAbsoluteUrl() {
  var _context, _context2;
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var baseUrl = arguments.length > 1 ? arguments[1] : undefined;
  if (isAbsoluteUrl(url)) {
    return url;
  }
  baseUrl = removeTrailingSlash(baseUrl);
  return url[0] === '/' ? _concatInstanceProperty(_context = "".concat(baseUrl)).call(_context, url) : _concatInstanceProperty(_context2 = "".concat(baseUrl, "/")).call(_context2, url);
}
function toRelativeUrl() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var baseUrl = arguments.length > 1 ? arguments[1] : undefined;
  if (isAbsoluteUrl(url)) {
    url = url.substring(baseUrl.length);
  }
  return url[0] === '/' ? url : "/".concat(url);
}
function toQueryString(obj) {
  var str = [];
  if (obj !== null) {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined && obj[key] !== null) {
        str.push(key + '=' + encodeURIComponent(obj[key]));
      }
    }
  }
  if (str.length) {
    return '?' + str.join('&');
  } else {
    return '';
  }
}
function removeTrailingSlash(path) {
  if (!path) {
    return;
  }
  var trimmed = path.replace(/^\s+|\s+$/gm, '');
  trimmed = trimmed.replace(/\/+$/, '');
  return trimmed;
}

function verifyToken$1(idToken, key) {
  key = clone(key);
  var format = 'jwk';
  var algo = {
    name: 'RSASSA-PKCS1-v1_5',
    hash: {
      name: 'SHA-256'
    }
  };
  var extractable = true;
  var usages = ['verify'];
  delete key.use;
  return webcrypto.subtle.importKey(format, key, algo, extractable, usages).then(function (cryptoKey) {
    var jwt = idToken.split('.');
    var payload = stringToBuffer(jwt[0] + '.' + jwt[1]);
    var b64Signature = base64UrlDecode(jwt[2]);
    var signature = stringToBuffer(b64Signature);
    return webcrypto.subtle.verify(algo, cryptoKey, signature, payload);
  });
}

var crypto = /*#__PURE__*/Object.freeze({
  __proto__: null,
  stringToBase64Url: stringToBase64Url,
  base64ToBase64Url: base64ToBase64Url,
  base64UrlToBase64: base64UrlToBase64,
  base64UrlToString: base64UrlToString,
  stringToBuffer: stringToBuffer,
  base64UrlDecode: base64UrlDecode,
  base64UrlToBuffer: base64UrlToBuffer,
  bufferToBase64Url: bufferToBase64Url,
  getOidcHash: getOidcHash,
  verifyToken: verifyToken$1,
  get atob () { return a; },
  get btoa () { return b; },
  get webcrypto () { return webcrypto; }
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var STATE_TOKEN_KEY_NAME = 'oktaStateToken';
var DEFAULT_POLLING_DELAY = 500;
var DEFAULT_MAX_CLOCK_SKEW = 300;
var DEFAULT_CACHE_DURATION = 86400;
var REDIRECT_OAUTH_PARAMS_NAME = 'okta-oauth-redirect-params';
var REDIRECT_STATE_COOKIE_NAME = 'okta-oauth-state';
var REDIRECT_NONCE_COOKIE_NAME = 'okta-oauth-nonce';
var TOKEN_STORAGE_NAME = 'okta-token-storage';
var CACHE_STORAGE_NAME = 'okta-cache-storage';
var PKCE_STORAGE_NAME = 'okta-pkce-storage';
var TRANSACTION_STORAGE_NAME = 'okta-transaction-storage';
var SHARED_TRANSACTION_STORAGE_NAME = 'okta-shared-transaction-storage';
var ORIGINAL_URI_STORAGE_NAME = 'okta-original-uri-storage';
var IDX_RESPONSE_STORAGE_NAME = 'okta-idx-response-storage';
var ACCESS_TOKEN_STORAGE_KEY = 'accessToken';
var ID_TOKEN_STORAGE_KEY = 'idToken';
var REFRESH_TOKEN_STORAGE_KEY = 'refreshToken';
var REFERRER_PATH_STORAGE_KEY = 'referrerPath';
var MIN_VERIFIER_LENGTH = 43;
var MAX_VERIFIER_LENGTH = 128;
var DEFAULT_CODE_CHALLENGE_METHOD = 'S256';
var IDX_API_VERSION = '1.0.0';

var constants = /*#__PURE__*/Object.freeze({
  __proto__: null,
  STATE_TOKEN_KEY_NAME: STATE_TOKEN_KEY_NAME,
  DEFAULT_POLLING_DELAY: DEFAULT_POLLING_DELAY,
  DEFAULT_MAX_CLOCK_SKEW: DEFAULT_MAX_CLOCK_SKEW,
  DEFAULT_CACHE_DURATION: DEFAULT_CACHE_DURATION,
  REDIRECT_OAUTH_PARAMS_NAME: REDIRECT_OAUTH_PARAMS_NAME,
  REDIRECT_STATE_COOKIE_NAME: REDIRECT_STATE_COOKIE_NAME,
  REDIRECT_NONCE_COOKIE_NAME: REDIRECT_NONCE_COOKIE_NAME,
  TOKEN_STORAGE_NAME: TOKEN_STORAGE_NAME,
  CACHE_STORAGE_NAME: CACHE_STORAGE_NAME,
  PKCE_STORAGE_NAME: PKCE_STORAGE_NAME,
  TRANSACTION_STORAGE_NAME: TRANSACTION_STORAGE_NAME,
  SHARED_TRANSACTION_STORAGE_NAME: SHARED_TRANSACTION_STORAGE_NAME,
  ORIGINAL_URI_STORAGE_NAME: ORIGINAL_URI_STORAGE_NAME,
  IDX_RESPONSE_STORAGE_NAME: IDX_RESPONSE_STORAGE_NAME,
  ACCESS_TOKEN_STORAGE_KEY: ACCESS_TOKEN_STORAGE_KEY,
  ID_TOKEN_STORAGE_KEY: ID_TOKEN_STORAGE_KEY,
  REFRESH_TOKEN_STORAGE_KEY: REFRESH_TOKEN_STORAGE_KEY,
  REFERRER_PATH_STORAGE_KEY: REFERRER_PATH_STORAGE_KEY,
  MIN_VERIFIER_LENGTH: MIN_VERIFIER_LENGTH,
  MAX_VERIFIER_LENGTH: MAX_VERIFIER_LENGTH,
  DEFAULT_CODE_CHALLENGE_METHOD: DEFAULT_CODE_CHALLENGE_METHOD,
  IDX_API_VERSION: IDX_API_VERSION
});

function setRequestHeader(authClient, headerName, headerValue) {
  authClient.options.headers = authClient.options.headers || {};
  authClient.options.headers[headerName] = headerValue;
}

function httpRequest(sdk, options) {
  options = options || {};
  var url = options.url,
      method = options.method,
      args = options.args,
      saveAuthnState = options.saveAuthnState,
      accessToken = options.accessToken,
      withCredentials = options.withCredentials === true,
  storageUtil = sdk.options.storageUtil,
      storage = storageUtil.storage,
      httpCache = sdk.storageManager.getHttpCache(sdk.options.cookies);
  if (options.cacheResponse) {
    var cacheContents = httpCache.getStorage();
    var cachedResponse = cacheContents[url];
    if (cachedResponse && Date.now() / 1000 < cachedResponse.expiresAt) {
      return _Promise.resolve(cachedResponse.response);
    }
  }
  var oktaUserAgentHeader = sdk._oktaUserAgent.getHttpHeader();
  var headers = _Object$assign({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, oktaUserAgentHeader);
  _Object$assign(headers, sdk.options.headers, options.headers);
  headers = removeNils(headers);
  if (accessToken && isString(accessToken)) {
    headers['Authorization'] = 'Bearer ' + accessToken;
  }
  var ajaxOptions = {
    headers: headers,
    data: args || undefined,
    withCredentials: withCredentials
  };
  var err, res;
  return sdk.options.httpRequestClient(method, url, ajaxOptions).then(function (resp) {
    res = resp.responseText;
    if (res && isString(res)) {
      res = JSON.parse(res);
      if (res && _typeof(res) === 'object' && !res.headers) {
        res.headers = resp.headers;
      }
    }
    if (saveAuthnState) {
      if (!res.stateToken) {
        storage.delete(STATE_TOKEN_KEY_NAME);
      }
    }
    if (res && res.stateToken && res.expiresAt) {
      storage.set(STATE_TOKEN_KEY_NAME, res.stateToken, res.expiresAt, sdk.options.cookies);
    }
    if (res && options.cacheResponse) {
      httpCache.updateStorage(url, {
        expiresAt: Math.floor(Date.now() / 1000) + DEFAULT_CACHE_DURATION,
        response: res
      });
    }
    return res;
  }).catch(function (resp) {
    var serverErr = resp.responseText || {};
    if (isString(serverErr)) {
      try {
        serverErr = JSON.parse(serverErr);
      } catch (e) {
        serverErr = {
          errorSummary: 'Unknown error'
        };
      }
    }
    if (resp.status >= 500) {
      serverErr.errorSummary = 'Unknown error';
    }
    if (sdk.options.transformErrorXHR) {
      resp = sdk.options.transformErrorXHR(clone(resp));
    }
    if (serverErr.error && serverErr.error_description) {
      err = new OAuthError(serverErr.error, serverErr.error_description);
    } else {
      err = new AuthApiError(serverErr, resp);
    }
    if (err.errorCode === 'E0000011') {
      storage.delete(STATE_TOKEN_KEY_NAME);
    }
    throw err;
  });
}
function get(sdk, url, options) {
  url = isAbsoluteUrl(url) ? url : sdk.getIssuerOrigin() + url;
  var getOptions = {
    url: url,
    method: 'GET'
  };
  _Object$assign(getOptions, options);
  return httpRequest(sdk, getOptions);
}
function post(sdk, url, args, options) {
  url = isAbsoluteUrl(url) ? url : sdk.getIssuerOrigin() + url;
  var postOptions = {
    url: url,
    method: 'POST',
    args: args,
    saveAuthnState: true
  };
  _Object$assign(postOptions, options);
  return httpRequest(sdk, postOptions);
}

function addStateToken(res, options) {
  var builtArgs = {};
  _Object$assign(builtArgs, options);
  if (!builtArgs.stateToken && res.stateToken) {
    builtArgs.stateToken = res.stateToken;
  }
  return builtArgs;
}
function getStateToken(res) {
  return addStateToken(res);
}

function getPollFn(sdk, res, ref) {
  return function (options) {
    var delay$1;
    var rememberDevice;
    var autoPush;
    var transactionCallBack;
    if (isNumber(options)) {
      delay$1 = options;
    } else if (isObject(options)) {
      options = options;
      delay$1 = options.delay;
      rememberDevice = options.rememberDevice;
      autoPush = options.autoPush;
      transactionCallBack = options.transactionCallBack;
    }
    if (!delay$1 && delay$1 !== 0) {
      delay$1 = DEFAULT_POLLING_DELAY;
    }
    var pollLink = getLink(res, 'next', 'poll');
    function pollFn() {
      var opts = {};
      if (typeof autoPush === 'function') {
        try {
          opts.autoPush = !!autoPush();
        } catch (e) {
          return _Promise.reject(new AuthSdkError('AutoPush resulted in an error.'));
        }
      } else if (autoPush !== undefined && autoPush !== null) {
        opts.autoPush = !!autoPush;
      }
      if (typeof rememberDevice === 'function') {
        try {
          opts.rememberDevice = !!rememberDevice();
        } catch (e) {
          return _Promise.reject(new AuthSdkError('RememberDevice resulted in an error.'));
        }
      } else if (rememberDevice !== undefined && rememberDevice !== null) {
        opts.rememberDevice = !!rememberDevice;
      }
      var href = pollLink.href + toQueryString(opts);
      return post(sdk, href, getStateToken(res), {
        saveAuthnState: false,
        withCredentials: true
      });
    }
    ref.isPolling = true;
    var retryCount = 0;
    var recursivePoll = function recursivePoll() {
      if (!ref.isPolling) {
        return _Promise.reject(new AuthPollStopError());
      }
      return pollFn().then(function (pollRes) {
        retryCount = 0;
        if (pollRes.factorResult && pollRes.factorResult === 'WAITING') {
          if (!ref.isPolling) {
            throw new AuthPollStopError();
          }
          if (typeof transactionCallBack === 'function') {
            transactionCallBack(pollRes);
          }
          return delay(delay$1).then(recursivePoll);
        } else {
          ref.isPolling = false;
          return new AuthTransaction(sdk, pollRes);
        }
      }).catch(function (err) {
        if (err.xhr && (err.xhr.status === 0 || err.xhr.status === 429) && retryCount <= 4) {
          var delayLength = Math.pow(2, retryCount) * 1000;
          retryCount++;
          return delay(delayLength).then(recursivePoll);
        }
        throw err;
      });
    };
    return recursivePoll().catch(function (err) {
      ref.isPolling = false;
      throw err;
    });
  };
}

var AuthTransaction = function AuthTransaction(sdk) {
  var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  _classCallCheck(this, AuthTransaction);
  this.data = undefined;
  this.status = undefined;
  if (res) {
    this.data = res;
    if (this.data.interactionHandle) {
      this.status = res.status;
      return;
    }
    _Object$assign(this, flattenEmbedded(sdk, res, res, {}));
    delete this.stateToken;
    if (res.status === 'RECOVERY_CHALLENGE' && !res._links) {
      this.cancel = function () {
        return _Promise.resolve(new AuthTransaction(sdk));
      };
    }
  }
};
function link2fn(sdk, res, obj, link, ref) {
  if (Array.isArray(link)) {
    return function (name, opts) {
      if (!name) {
        throw new AuthSdkError('Must provide a link name');
      }
      var lk = find(link, {
        name: name
      });
      if (!lk) {
        throw new AuthSdkError('No link found for that name');
      }
      return link2fn(sdk, res, obj, lk, ref)(opts);
    };
  } else if (link.hints && link.hints.allow && link.hints.allow.length === 1) {
    var method = link.hints.allow[0];
    switch (method) {
      case 'GET':
        return function () {
          return get(sdk, link.href, {
            withCredentials: true
          });
        };
      case 'POST':
        return function (opts) {
          if (ref && ref.isPolling) {
            ref.isPolling = false;
          }
          var data = addStateToken(res, opts);
          if (res.status === 'MFA_ENROLL' || res.status === 'FACTOR_ENROLL') {
            _Object$assign(data, {
              factorType: obj.factorType,
              provider: obj.provider
            });
          }
          var params = {};
          var autoPush = data.autoPush;
          if (autoPush !== undefined) {
            if (typeof autoPush === 'function') {
              try {
                params.autoPush = !!autoPush();
              } catch (e) {
                return _Promise.reject(new AuthSdkError('AutoPush resulted in an error.'));
              }
            } else if (autoPush !== null) {
              params.autoPush = !!autoPush;
            }
            data = omit(data, 'autoPush');
          }
          var rememberDevice = data.rememberDevice;
          if (rememberDevice !== undefined) {
            if (typeof rememberDevice === 'function') {
              try {
                params.rememberDevice = !!rememberDevice();
              } catch (e) {
                return _Promise.reject(new AuthSdkError('RememberDevice resulted in an error.'));
              }
            } else if (rememberDevice !== null) {
              params.rememberDevice = !!rememberDevice;
            }
            data = omit(data, 'rememberDevice');
          } else if (data.profile && data.profile.updatePhone !== undefined) {
            if (data.profile.updatePhone) {
              params.updatePhone = true;
            }
            data.profile = omit(data.profile, 'updatePhone');
          }
          var href = link.href + toQueryString(params);
          return postToTransaction(sdk, href, data);
        };
    }
  }
}
function links2fns(sdk, res, obj, ref) {
  var fns = {};
  for (var linkName in obj._links) {
    if (!Object.prototype.hasOwnProperty.call(obj._links, linkName)) {
      continue;
    }
    var link = obj._links[linkName];
    if (linkName === 'next') {
      linkName = link.name;
    }
    if (link.type) {
      fns[linkName] = link;
      continue;
    }
    switch (linkName) {
      case 'poll':
        fns.poll = getPollFn(sdk, res, ref);
        break;
      default:
        var fn = link2fn(sdk, res, obj, link, ref);
        if (fn) {
          fns[linkName] = fn;
        }
    }
  }
  return fns;
}
function flattenEmbedded(sdk, res, obj, ref) {
  obj = obj || res;
  obj = clone(obj);
  if (Array.isArray(obj)) {
    var objArr = [];
    for (var o = 0, ol = obj.length; o < ol; o++) {
      objArr.push(flattenEmbedded(sdk, res, obj[o], ref));
    }
    return objArr;
  }
  var embedded = obj._embedded || {};
  for (var key in embedded) {
    if (!Object.prototype.hasOwnProperty.call(embedded, key)) {
      continue;
    }
    if (isObject(embedded[key]) || Array.isArray(embedded[key])) {
      embedded[key] = flattenEmbedded(sdk, res, embedded[key], ref);
    }
  }
  var fns = links2fns(sdk, res, obj, ref);
  _Object$assign(embedded, fns);
  obj = omit(obj, '_embedded', '_links');
  _Object$assign(obj, embedded);
  return obj;
}

function transactionStatus(sdk, args) {
  args = addStateToken(sdk, args);
  return post(sdk, sdk.getIssuerOrigin() + '/api/v1/authn', args, {
    withCredentials: true
  });
}
function resumeTransaction(sdk, args) {
  if (!args || !args.stateToken) {
    var stateToken = sdk.tx.exists._get(STATE_TOKEN_KEY_NAME);
    if (stateToken) {
      args = {
        stateToken: stateToken
      };
    } else {
      return _Promise.reject(new AuthSdkError('No transaction to resume'));
    }
  }
  return sdk.tx.status(args).then(function (res) {
    return new AuthTransaction(sdk, res);
  });
}
function introspectAuthn(sdk, args) {
  if (!args || !args.stateToken) {
    var stateToken = sdk.tx.exists._get(STATE_TOKEN_KEY_NAME);
    if (stateToken) {
      args = {
        stateToken: stateToken
      };
    } else {
      return _Promise.reject(new AuthSdkError('No transaction to evaluate'));
    }
  }
  return transactionStep(sdk, args).then(function (res) {
    return new AuthTransaction(sdk, res);
  });
}
function transactionStep(sdk, args) {
  args = addStateToken(sdk, args);
  return post(sdk, sdk.getIssuerOrigin() + '/api/v1/authn/introspect', args, {
    withCredentials: true
  });
}
function transactionExists(sdk) {
  return !!sdk.tx.exists._get(STATE_TOKEN_KEY_NAME);
}
function postToTransaction(sdk, url, args, options) {
  options = _Object$assign({
    withCredentials: true
  }, options);
  return post(sdk, url, args, options).then(function (res) {
    return new AuthTransaction(sdk, res);
  });
}

function dec2hex(dec) {
  return ('0' + dec.toString(16)).substr(-2);
}
function getRandomString(length) {
  var a = new Uint8Array(Math.ceil(length / 2));
  webcrypto.getRandomValues(a);
  var str = _Array$from(a, dec2hex).join('');
  return _sliceInstanceProperty(str).call(str, 0, length);
}
function generateVerifier(prefix) {
  var _context;
  var verifier = prefix || '';
  if (verifier.length < MIN_VERIFIER_LENGTH) {
    verifier = verifier + getRandomString(MIN_VERIFIER_LENGTH - verifier.length);
  }
  return _sliceInstanceProperty(_context = encodeURIComponent(verifier)).call(_context, 0, MAX_VERIFIER_LENGTH);
}
function computeChallenge(str) {
  var buffer = new TextEncoder().encode(str);
  return webcrypto.subtle.digest('SHA-256', buffer).then(function (arrayBuffer) {
    var hash = String.fromCharCode.apply(null, new Uint8Array(arrayBuffer));
    var b64u = stringToBase64Url(hash);
    return b64u;
  });
}
var PKCE = {
  DEFAULT_CODE_CHALLENGE_METHOD: DEFAULT_CODE_CHALLENGE_METHOD,
  generateVerifier: generateVerifier,
  computeChallenge: computeChallenge
};

function sessionExists(sdk) {
  return sdk.session.get().then(function (res) {
    if (res.status === 'ACTIVE') {
      return true;
    }
    return false;
  }).catch(function () {
    return false;
  });
}
function getSession(sdk) {
  return get(sdk, '/api/v1/sessions/me', {
    withCredentials: true
  }).then(function (session) {
    var res = omit(session, '_links');
    res.refresh = function () {
      return post(sdk, getLink(session, 'refresh').href, {}, {
        withCredentials: true
      });
    };
    res.user = function () {
      return get(sdk, getLink(session, 'user').href, {
        withCredentials: true
      });
    };
    return res;
  }).catch(function () {
    return {
      status: 'INACTIVE'
    };
  });
}
function closeSession(sdk) {
  return httpRequest(sdk, {
    url: sdk.getIssuerOrigin() + '/api/v1/sessions/me',
    method: 'DELETE',
    withCredentials: true
  });
}
function refreshSession(sdk) {
  return post(sdk, '/api/v1/sessions/me/lifecycle/refresh', {}, {
    withCredentials: true
  });
}
function setCookieAndRedirect(sdk, sessionToken, redirectUrl) {
  redirectUrl = redirectUrl || window.location.href;
  window.location.assign(sdk.getIssuerOrigin() + '/login/sessionCookieRedirect' + toQueryString({
    checkAccountSetupComplete: true,
    token: sessionToken,
    redirectUrl: redirectUrl
  }));
}

function convertTokenParamsToOAuthParams(tokenParams) {
  var _context, _context2, _context3;
  if (!tokenParams.clientId) {
    throw new AuthSdkError('A clientId must be specified in the OktaAuth constructor to get a token');
  }
  if (isString(tokenParams.responseType) && _indexOfInstanceProperty(_context = tokenParams.responseType).call(_context, ' ') !== -1) {
    throw new AuthSdkError('Multiple OAuth responseTypes must be defined as an array');
  }
  var oauthParams = {
    'client_id': tokenParams.clientId,
    'code_challenge': tokenParams.codeChallenge,
    'code_challenge_method': tokenParams.codeChallengeMethod,
    'display': tokenParams.display,
    'idp': tokenParams.idp,
    'idp_scope': tokenParams.idpScope,
    'login_hint': tokenParams.loginHint,
    'max_age': tokenParams.maxAge,
    'nonce': tokenParams.nonce,
    'prompt': tokenParams.prompt,
    'redirect_uri': tokenParams.redirectUri,
    'response_mode': tokenParams.responseMode,
    'response_type': tokenParams.responseType,
    'sessionToken': tokenParams.sessionToken,
    'state': tokenParams.state
  };
  oauthParams = removeNils(oauthParams);
  ['idp_scope', 'response_type'].forEach(function (mayBeArray) {
    if (Array.isArray(oauthParams[mayBeArray])) {
      oauthParams[mayBeArray] = oauthParams[mayBeArray].join(' ');
    }
  });
  if (_indexOfInstanceProperty(_context2 = tokenParams.responseType).call(_context2, 'id_token') !== -1 && _indexOfInstanceProperty(_context3 = tokenParams.scopes).call(_context3, 'openid') === -1) {
    throw new AuthSdkError('openid scope must be specified in the scopes argument when requesting an id_token');
  } else {
    oauthParams.scope = tokenParams.scopes.join(' ');
  }
  return oauthParams;
}
function buildAuthorizeParams(tokenParams) {
  var oauthQueryParams = convertTokenParamsToOAuthParams(tokenParams);
  return toQueryString(_Object$assign(_Object$assign({}, oauthQueryParams), tokenParams.extraParams && _Object$assign({}, tokenParams.extraParams)));
}

function validateOptions(options) {
  if (!options.clientId) {
    throw new AuthSdkError('A clientId must be specified in the OktaAuth constructor to get a token');
  }
  if (!options.redirectUri) {
    throw new AuthSdkError('The redirectUri passed to /authorize must also be passed to /token');
  }
  if (!options.authorizationCode && !options.interactionCode) {
    throw new AuthSdkError('An authorization code (returned from /authorize) must be passed to /token');
  }
  if (!options.codeVerifier) {
    throw new AuthSdkError('The "codeVerifier" (generated and saved by your app) must be passed to /token');
  }
}
function getPostData(sdk, options) {
  var _context;
  var params = removeNils({
    'client_id': options.clientId,
    'redirect_uri': options.redirectUri,
    'grant_type': options.interactionCode ? 'interaction_code' : 'authorization_code',
    'code_verifier': options.codeVerifier
  });
  if (options.interactionCode) {
    params['interaction_code'] = options.interactionCode;
  } else if (options.authorizationCode) {
    params.code = options.authorizationCode;
  }
  var clientSecret = sdk.options.clientSecret;
  if (clientSecret) {
    params['client_secret'] = clientSecret;
  }
  return _sliceInstanceProperty(_context = toQueryString(params)).call(_context, 1);
}
function postToTokenEndpoint(sdk, options, urls) {
  validateOptions(options);
  var data = getPostData(sdk, options);
  var headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  return httpRequest(sdk, {
    url: urls.tokenUrl,
    method: 'POST',
    args: data,
    headers: headers
  });
}
function postRefreshToken(sdk, options, refreshToken) {
  var _context2;
  return httpRequest(sdk, {
    url: refreshToken.tokenUrl,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    args: _mapInstanceProperty(_context2 = _Object$entries({
      client_id: options.clientId,
      grant_type: 'refresh_token',
      scope: refreshToken.scopes.join(' '),
      refresh_token: refreshToken.refreshToken
    })).call(_context2, function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          value = _ref2[1];
      return name + '=' + encodeURIComponent(value);
    }).join('&')
  });
}

function getWellKnown(sdk, issuer) {
  var authServerUri = issuer || sdk.options.issuer;
  return get(sdk, authServerUri + '/.well-known/openid-configuration', {
    cacheResponse: true
  });
}
function getKey(sdk, issuer, kid) {
  var httpCache = sdk.storageManager.getHttpCache(sdk.options.cookies);
  return getWellKnown(sdk, issuer).then(function (wellKnown) {
    var jwksUri = wellKnown['jwks_uri'];
    var cacheContents = httpCache.getStorage();
    var cachedResponse = cacheContents[jwksUri];
    if (cachedResponse && Date.now() / 1000 < cachedResponse.expiresAt) {
      var cachedKey = find(_keysInstanceProperty(cachedResponse.response), {
        kid: kid
      });
      if (cachedKey) {
        return cachedKey;
      }
    }
    httpCache.clearStorage(jwksUri);
    return get(sdk, jwksUri, {
      cacheResponse: true
    }).then(function (res) {
      var key = find(_keysInstanceProperty(res), {
        kid: kid
      });
      if (key) {
        return key;
      }
      throw new AuthSdkError('The key id, ' + kid + ', was not found in the server\'s keys');
    });
  });
}

function addListener(eventTarget, name, fn) {
  if (eventTarget.addEventListener) {
    eventTarget.addEventListener(name, fn);
  } else {
    eventTarget.attachEvent('on' + name, fn);
  }
}
function removeListener(eventTarget, name, fn) {
  if (eventTarget.removeEventListener) {
    eventTarget.removeEventListener(name, fn);
  } else {
    eventTarget.detachEvent('on' + name, fn);
  }
}
function loadFrame(src) {
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = src;
  return document.body.appendChild(iframe);
}
function loadPopup(src, options) {
  var title = options.popupTitle || 'External Identity Provider User Authentication';
  var appearance = 'toolbar=no, scrollbars=yes, resizable=yes, ' + 'top=100, left=500, width=600, height=600';
  return window.open(src, title, appearance);
}
function addPostMessageListener(sdk, timeout, state) {
  var responseHandler;
  var timeoutId;
  var msgReceivedOrTimeout = new _Promise(function (resolve, reject) {
    responseHandler = function responseHandler(e) {
      if (!e.data || e.data.state !== state) {
        return;
      }
      if (e.origin !== sdk.getIssuerOrigin()) {
        return reject(new AuthSdkError('The request does not match client configuration'));
      }
      resolve(e.data);
    };
    addListener(window, 'message', responseHandler);
    timeoutId = setTimeout(function () {
      reject(new AuthSdkError('OAuth flow timed out'));
    }, timeout || 120000);
  });
  return msgReceivedOrTimeout.finally(function () {
    clearTimeout(timeoutId);
    removeListener(window, 'message', responseHandler);
  });
}

function generateState() {
  return genRandomString(64);
}
function generateNonce() {
  return genRandomString(64);
}
function getIssuer(sdk) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var issuer = removeTrailingSlash(options.issuer) || sdk.options.issuer;
  return issuer;
}
function getOAuthBaseUrl(sdk) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var issuer = getIssuer(sdk, options);
  var baseUrl = _indexOfInstanceProperty(issuer).call(issuer, '/oauth2') > 0 ? issuer : issuer + '/oauth2';
  return baseUrl;
}
function getOAuthDomain(sdk) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var issuer = getIssuer(sdk, options);
  var domain = issuer.split('/oauth2')[0];
  return domain;
}
function getOAuthUrls(sdk, options) {
  if (arguments.length > 2) {
    throw new AuthSdkError('As of version 3.0, "getOAuthUrls" takes only a single set of options');
  }
  options = options || {};
  var authorizeUrl = removeTrailingSlash(options.authorizeUrl) || sdk.options.authorizeUrl;
  var issuer = getIssuer(sdk, options);
  var userinfoUrl = removeTrailingSlash(options.userinfoUrl) || sdk.options.userinfoUrl;
  var tokenUrl = removeTrailingSlash(options.tokenUrl) || sdk.options.tokenUrl;
  var logoutUrl = removeTrailingSlash(options.logoutUrl) || sdk.options.logoutUrl;
  var revokeUrl = removeTrailingSlash(options.revokeUrl) || sdk.options.revokeUrl;
  var baseUrl = getOAuthBaseUrl(sdk, options);
  authorizeUrl = authorizeUrl || baseUrl + '/v1/authorize';
  userinfoUrl = userinfoUrl || baseUrl + '/v1/userinfo';
  tokenUrl = tokenUrl || baseUrl + '/v1/token';
  revokeUrl = revokeUrl || baseUrl + '/v1/revoke';
  logoutUrl = logoutUrl || baseUrl + '/v1/logout';
  return {
    issuer: issuer,
    authorizeUrl: authorizeUrl,
    userinfoUrl: userinfoUrl,
    tokenUrl: tokenUrl,
    revokeUrl: revokeUrl,
    logoutUrl: logoutUrl
  };
}

var isWindowsPhone = /windows phone|iemobile|wpdesktop/i;
function isBrowser() {
  return typeof document !== 'undefined' && typeof window !== 'undefined';
}
function isIE11OrLess() {
  if (!isBrowser()) {
    return false;
  }
  var documentMode = document.documentMode;
  return !!documentMode && documentMode <= 11;
}
function getUserAgent() {
  return navigator.userAgent;
}
function isFingerprintSupported() {
  var agent = getUserAgent();
  return agent && !isWindowsPhone.test(agent);
}
function isPopupPostMessageSupported() {
  if (!isBrowser()) {
    return false;
  }
  var documentMode = document.documentMode;
  var isIE8or9 = documentMode && documentMode < 10;
  if (typeof window.postMessage !== 'undefined' && !isIE8or9) {
    return true;
  }
  return false;
}
function isTokenVerifySupported() {
  return typeof webcrypto !== 'undefined' && webcrypto !== null && typeof webcrypto.subtle !== 'undefined' && typeof Uint8Array !== 'undefined';
}
function hasTextEncoder() {
  return typeof TextEncoder !== 'undefined';
}
function isPKCESupported() {
  return isTokenVerifySupported() && hasTextEncoder();
}
function isHTTPS() {
  if (!isBrowser()) {
    return false;
  }
  return window.location.protocol === 'https:';
}
function isLocalhost() {
  return isBrowser() && window.location.hostname === 'localhost';
}

var features = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isBrowser: isBrowser,
  isIE11OrLess: isIE11OrLess,
  getUserAgent: getUserAgent,
  isFingerprintSupported: isFingerprintSupported,
  isPopupPostMessageSupported: isPopupPostMessageSupported,
  isTokenVerifySupported: isTokenVerifySupported,
  hasTextEncoder: hasTextEncoder,
  isPKCESupported: isPKCESupported,
  isHTTPS: isHTTPS,
  isLocalhost: isLocalhost
});

function getDefaultTokenParams(sdk) {
  var _sdk$options = sdk.options,
      pkce = _sdk$options.pkce,
      clientId = _sdk$options.clientId,
      redirectUri = _sdk$options.redirectUri,
      responseType = _sdk$options.responseType,
      responseMode = _sdk$options.responseMode,
      scopes = _sdk$options.scopes,
      state = _sdk$options.state,
      ignoreSignature = _sdk$options.ignoreSignature;
  var defaultRedirectUri = isBrowser() ? window.location.href : undefined;
  return removeNils({
    pkce: pkce,
    clientId: clientId,
    redirectUri: redirectUri || defaultRedirectUri,
    responseType: responseType || ['token', 'id_token'],
    responseMode: responseMode,
    state: state || generateState(),
    nonce: generateNonce(),
    scopes: scopes || ['openid', 'email'],
    ignoreSignature: ignoreSignature
  });
}

function isInteractionRequiredError(error) {
  if (error.name !== 'OAuthError') {
    return false;
  }
  var oauthError = error;
  return oauthError.errorCode === 'interaction_required';
}
function isAuthorizationCodeError(sdk, error) {
  if (error.name !== 'AuthApiError') {
    return false;
  }
  var authApiError = error;
  var errorResponse = authApiError.xhr;
  var responseJSON = errorResponse === null || errorResponse === void 0 ? void 0 : errorResponse.responseJSON;
  return sdk.options.pkce && (responseJSON === null || responseJSON === void 0 ? void 0 : responseJSON.error) === 'invalid_grant';
}

function hasTokensInHash(hash) {
  return /((id|access)_token=)/i.test(hash);
}
function hasAuthorizationCode(hashOrSearch) {
  return /(code=)/i.test(hashOrSearch);
}
function hasInteractionCode(hashOrSearch) {
  return /(interaction_code=)/i.test(hashOrSearch);
}
function hasErrorInUrl(hashOrSearch) {
  return /(error=)/i.test(hashOrSearch) || /(error_description)/i.test(hashOrSearch);
}
function isRedirectUri(uri, sdk) {
  var authParams = sdk.options;
  if (!uri || !authParams.redirectUri) {
    return false;
  }
  return _indexOfInstanceProperty(uri).call(uri, authParams.redirectUri) === 0;
}
function isCodeFlow(options) {
  return options.pkce || options.responseType === 'code' || options.responseMode === 'query';
}
function getHashOrSearch(options) {
  var codeFlow = isCodeFlow(options);
  var useQuery = codeFlow && options.responseMode !== 'fragment';
  return useQuery ? window.location.search : window.location.hash;
}
function isLoginRedirect(sdk) {
  if (!isRedirectUri(window.location.href, sdk)) {
    return false;
  }
  var codeFlow = isCodeFlow(sdk.options);
  var hashOrSearch = getHashOrSearch(sdk.options);
  if (hasErrorInUrl(hashOrSearch)) {
    return true;
  }
  if (codeFlow) {
    var hasCode = hasAuthorizationCode(hashOrSearch) || hasInteractionCode(hashOrSearch);
    return hasCode;
  }
  return hasTokensInHash(window.location.hash);
}
function isInteractionRequired(sdk, hashOrSearch) {
  if (!hashOrSearch) {
    if (!isLoginRedirect(sdk)) {
      return false;
    }
    hashOrSearch = getHashOrSearch(sdk.options);
  }
  return /(error=interaction_required)/i.test(hashOrSearch);
}

function createOAuthMeta(sdk, tokenParams) {
  var issuer = sdk.options.issuer;
  var urls = getOAuthUrls(sdk, tokenParams);
  var oauthMeta = {
    issuer: issuer,
    urls: urls,
    clientId: tokenParams.clientId,
    redirectUri: tokenParams.redirectUri,
    responseType: tokenParams.responseType,
    responseMode: tokenParams.responseMode,
    scopes: tokenParams.scopes,
    state: tokenParams.state,
    nonce: tokenParams.nonce,
    ignoreSignature: tokenParams.ignoreSignature
  };
  if (tokenParams.pkce === false) {
    return oauthMeta;
  }
  var pkceMeta = _Object$assign(_Object$assign({}, oauthMeta), {
    codeVerifier: tokenParams.codeVerifier,
    codeChallengeMethod: tokenParams.codeChallengeMethod,
    codeChallenge: tokenParams.codeChallenge
  });
  return pkceMeta;
}

function assertPKCESupport(sdk) {
  if (!sdk.features.isPKCESupported()) {
    var errorMessage = 'PKCE requires a modern browser with encryption support running in a secure context.';
    if (!sdk.features.isHTTPS()) {
      errorMessage += '\nThe current page is not being served with HTTPS protocol. PKCE requires secure HTTPS protocol.';
    }
    if (!sdk.features.hasTextEncoder()) {
      errorMessage += '\n"TextEncoder" is not defined. To use PKCE, you may need to include a polyfill/shim for this browser.';
    }
    throw new AuthSdkError(errorMessage);
  }
}
function validateCodeChallengeMethod(_x, _x2) {
  return _validateCodeChallengeMethod.apply(this, arguments);
}
function _validateCodeChallengeMethod() {
  _validateCodeChallengeMethod = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(sdk, codeChallengeMethod) {
    var wellKnownResponse, methods;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            codeChallengeMethod = codeChallengeMethod || sdk.options.codeChallengeMethod || DEFAULT_CODE_CHALLENGE_METHOD;
            _context.next = 3;
            return getWellKnown(sdk);
          case 3:
            wellKnownResponse = _context.sent;
            methods = wellKnownResponse['code_challenge_methods_supported'] || [];
            if (!(_indexOfInstanceProperty(methods).call(methods, codeChallengeMethod) === -1)) {
              _context.next = 7;
              break;
            }
            throw new AuthSdkError('Invalid code_challenge_method');
          case 7:
            return _context.abrupt("return", codeChallengeMethod);
          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _validateCodeChallengeMethod.apply(this, arguments);
}
function preparePKCE(_x3, _x4) {
  return _preparePKCE.apply(this, arguments);
}
function _preparePKCE() {
  _preparePKCE = _asyncToGenerator( _regeneratorRuntime.mark(function _callee2(sdk, tokenParams) {
    var _tokenParams, codeVerifier, codeChallenge, codeChallengeMethod;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _tokenParams = tokenParams, codeVerifier = _tokenParams.codeVerifier, codeChallenge = _tokenParams.codeChallenge, codeChallengeMethod = _tokenParams.codeChallengeMethod;
            codeChallenge = codeChallenge || sdk.options.codeChallenge;
            if (codeChallenge) {
              _context2.next = 8;
              break;
            }
            assertPKCESupport(sdk);
            codeVerifier = codeVerifier || PKCE.generateVerifier();
            _context2.next = 7;
            return PKCE.computeChallenge(codeVerifier);
          case 7:
            codeChallenge = _context2.sent;
          case 8:
            _context2.next = 10;
            return validateCodeChallengeMethod(sdk, codeChallengeMethod);
          case 10:
            codeChallengeMethod = _context2.sent;
            tokenParams = _Object$assign(_Object$assign({}, tokenParams), {
              responseType: 'code',
              codeVerifier: codeVerifier,
              codeChallenge: codeChallenge,
              codeChallengeMethod: codeChallengeMethod
            });
            return _context2.abrupt("return", tokenParams);
          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _preparePKCE.apply(this, arguments);
}
function prepareTokenParams(_x5) {
  return _prepareTokenParams.apply(this, arguments);
}
function _prepareTokenParams() {
  _prepareTokenParams = _asyncToGenerator( _regeneratorRuntime.mark(function _callee3(sdk) {
    var tokenParams,
        defaults,
        _args3 = arguments;
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            tokenParams = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
            defaults = getDefaultTokenParams(sdk);
            tokenParams = _Object$assign(_Object$assign({}, defaults), tokenParams);
            if (!(tokenParams.pkce === false)) {
              _context3.next = 5;
              break;
            }
            return _context3.abrupt("return", tokenParams);
          case 5:
            return _context3.abrupt("return", preparePKCE(sdk, tokenParams));
          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _prepareTokenParams.apply(this, arguments);
}

function isSameRefreshToken(a, b) {
  return a.refreshToken === b.refreshToken;
}
function isRefreshTokenError(err) {
  if (!isAuthApiError(err)) {
    return false;
  }
  if (!err.xhr || !err.xhr.responseJSON) {
    return false;
  }
  var responseJSON = err.xhr.responseJSON;
  if (responseJSON.error === 'invalid_grant') {
    return true;
  }
  return false;
}

function urlParamsToObject(hashOrSearch) {
  var plus2space = /\+/g;
  var paramSplit = /([^&=]+)=?([^&]*)/g;
  var fragment = hashOrSearch || '';
  if (fragment.charAt(0) === '#' && fragment.charAt(1) === '/') {
    fragment = fragment.substring(2);
  }
  if (fragment.charAt(0) === '#' || fragment.charAt(0) === '?') {
    fragment = fragment.substring(1);
  }
  var obj = {};
  var param;
  while (true) {
    param = paramSplit.exec(fragment);
    if (!param) {
      break;
    }
    var key = param[1];
    var value = param[2];
    if (key === 'id_token' || key === 'access_token' || key === 'code') {
      obj[key] = value;
    } else {
      obj[key] = decodeURIComponent(value.replace(plus2space, ' '));
    }
  }
  return obj;
}

function validateClaims(sdk, claims, validationParams) {
  var aud = validationParams.clientId;
  var iss = validationParams.issuer;
  var nonce = validationParams.nonce;
  if (!claims || !iss || !aud) {
    throw new AuthSdkError('The jwt, iss, and aud arguments are all required');
  }
  if (nonce && claims.nonce !== nonce) {
    throw new AuthSdkError('OAuth flow response nonce doesn\'t match request nonce');
  }
  var now = Math.floor(Date.now() / 1000);
  if (claims.iss !== iss) {
    throw new AuthSdkError('The issuer [' + claims.iss + '] ' + 'does not match [' + iss + ']');
  }
  if (claims.aud !== aud) {
    throw new AuthSdkError('The audience [' + claims.aud + '] ' + 'does not match [' + aud + ']');
  }
  if (claims.iat > claims.exp) {
    throw new AuthSdkError('The JWT expired before it was issued');
  }
  if (!sdk.options.ignoreLifetime) {
    if (now - sdk.options.maxClockSkew > claims.exp) {
      throw new AuthSdkError('The JWT expired and is no longer valid');
    }
    if (claims.iat > now + sdk.options.maxClockSkew) {
      throw new AuthSdkError('The JWT was issued in the future');
    }
  }
}

function isObjectWithProperties(obj) {
  if (!obj || _typeof(obj) !== 'object' || _Object$values(obj).length === 0) {
    return false;
  }
  return true;
}
function isOAuthTransactionMeta(obj) {
  if (!isObjectWithProperties(obj)) {
    return false;
  }
  return !!obj.redirectUri || !!obj.responseType;
}
function isPKCETransactionMeta(obj) {
  if (!isOAuthTransactionMeta(obj)) {
    return false;
  }
  return !!obj.codeVerifier;
}
function isIdxTransactionMeta(obj) {
  if (!isPKCETransactionMeta(obj)) {
    return false;
  }
  return !!obj.interactionHandle;
}
function isCustomAuthTransactionMeta(obj) {
  var _context;
  if (!isObjectWithProperties(obj)) {
    return false;
  }
  var isAllStringValues = _findInstanceProperty(_context = _Object$values(obj)).call(_context, function (value) {
    return typeof value !== 'string';
  }) === undefined;
  return isAllStringValues;
}
function isTransactionMeta(obj) {
  if (isOAuthTransactionMeta(obj) || isCustomAuthTransactionMeta(obj)) {
    return true;
  }
  return false;
}

var IdxStatus;
(function (IdxStatus) {
  IdxStatus["SUCCESS"] = "SUCCESS";
  IdxStatus["PENDING"] = "PENDING";
  IdxStatus["FAILURE"] = "FAILURE";
  IdxStatus["TERMINAL"] = "TERMINAL";
  IdxStatus["CANCELED"] = "CANCELED";
})(IdxStatus || (IdxStatus = {}));
var AuthenticatorKey;
(function (AuthenticatorKey) {
  AuthenticatorKey["OKTA_PASSWORD"] = "okta_password";
  AuthenticatorKey["OKTA_EMAIL"] = "okta_email";
  AuthenticatorKey["PHONE_NUMBER"] = "phone_number";
  AuthenticatorKey["GOOGLE_AUTHENTICATOR"] = "google_otp";
  AuthenticatorKey["SECURITY_QUESTION"] = "security_question";
  AuthenticatorKey["OKTA_VERIFY"] = "okta_verify";
  AuthenticatorKey["WEBAUTHN"] = "webauthn";
})(AuthenticatorKey || (AuthenticatorKey = {}));
var IdxFeature;
(function (IdxFeature) {
  IdxFeature["PASSWORD_RECOVERY"] = "recover-password";
  IdxFeature["REGISTRATION"] = "enroll-profile";
  IdxFeature["SOCIAL_IDP"] = "redirect-idp";
  IdxFeature["ACCOUNT_UNLOCK"] = "unlock-account";
})(IdxFeature || (IdxFeature = {}));
function isAuthenticator(obj) {
  return obj && (obj.key || obj.id);
}

function isToken(obj) {
  if (obj && (obj.accessToken || obj.idToken || obj.refreshToken) && Array.isArray(obj.scopes)) {
    return true;
  }
  return false;
}
function isAccessToken(obj) {
  return obj && obj.accessToken;
}
function isIDToken(obj) {
  return obj && obj.idToken;
}
function isRefreshToken(obj) {
  return obj && obj.refreshToken;
}

function validateToken(token, type) {
  if (!isIDToken(token) && !isAccessToken(token) && !isRefreshToken(token)) {
    throw new AuthSdkError('Token must be an Object with scopes, expiresAt, and one of: an idToken, accessToken, or refreshToken property');
  }
  if (type === 'accessToken' && !isAccessToken(token)) {
    throw new AuthSdkError('invalid accessToken');
  }
  if (type === 'idToken' && !isIDToken(token)) {
    throw new AuthSdkError('invalid idToken');
  }
  if (type === 'refreshToken' && !isRefreshToken(token)) {
    throw new AuthSdkError('invalid refreshToken');
  }
}

function decodeToken(token) {
  var jwt = token.split('.');
  var decodedToken;
  try {
    decodedToken = {
      header: JSON.parse(base64UrlToString(jwt[0])),
      payload: JSON.parse(base64UrlToString(jwt[1])),
      signature: jwt[2]
    };
  } catch (e) {
    throw new AuthSdkError('Malformed token');
  }
  return decodedToken;
}

function revokeToken(_x, _x2) {
  return _revokeToken.apply(this, arguments);
}
function _revokeToken() {
  _revokeToken = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(sdk, token) {
    var _context, _context2;
    var accessToken, refreshToken, clientId, clientSecret, revokeUrl, args, creds;
    return _regeneratorRuntime.wrap(function _callee$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            accessToken = '';
            refreshToken = '';
            if (token) {
              accessToken = token.accessToken;
              refreshToken = token.refreshToken;
            }
            if (!(!accessToken && !refreshToken)) {
              _context3.next = 5;
              break;
            }
            throw new AuthSdkError('A valid access or refresh token object is required');
          case 5:
            clientId = sdk.options.clientId;
            clientSecret = sdk.options.clientSecret;
            if (clientId) {
              _context3.next = 9;
              break;
            }
            throw new AuthSdkError('A clientId must be specified in the OktaAuth constructor to revoke a token');
          case 9:
            revokeUrl = getOAuthUrls(sdk).revokeUrl;
            args = _sliceInstanceProperty(_context = toQueryString({
              token_type_hint: refreshToken ? 'refresh_token' : 'access_token',
              token: refreshToken || accessToken
            })).call(_context, 1);
            creds = clientSecret ? b(_concatInstanceProperty(_context2 = "".concat(clientId, ":")).call(_context2, clientSecret)) : b(clientId);
            return _context3.abrupt("return", post(sdk, revokeUrl, args, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + creds
              }
            }));
          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee);
  }));
  return _revokeToken.apply(this, arguments);
}

function exchangeCodeForTokens(sdk, tokenParams, urls) {
  urls = urls || getOAuthUrls(sdk, tokenParams);
  tokenParams = _Object$assign({}, getDefaultTokenParams(sdk), clone(tokenParams));
  var _tokenParams = tokenParams,
      authorizationCode = _tokenParams.authorizationCode,
      interactionCode = _tokenParams.interactionCode,
      codeVerifier = _tokenParams.codeVerifier,
      clientId = _tokenParams.clientId,
      redirectUri = _tokenParams.redirectUri,
      scopes = _tokenParams.scopes,
      ignoreSignature = _tokenParams.ignoreSignature,
      state = _tokenParams.state;
  var getTokenOptions = {
    clientId: clientId,
    redirectUri: redirectUri,
    authorizationCode: authorizationCode,
    interactionCode: interactionCode,
    codeVerifier: codeVerifier
  };
  return postToTokenEndpoint(sdk, getTokenOptions, urls).then(function (response) {
    var responseType = ['token'];
    if (_indexOfInstanceProperty(scopes).call(scopes, 'openid') !== -1) {
      responseType.push('id_token');
    }
    var handleResponseOptions = {
      clientId: clientId,
      redirectUri: redirectUri,
      scopes: scopes,
      responseType: responseType,
      ignoreSignature: ignoreSignature
    };
    return handleOAuthResponse(sdk, handleResponseOptions, response, urls).then(function (response) {
      response.code = authorizationCode;
      response.state = state;
      return response;
    });
  }).finally(function () {
    sdk.transactionManager.clear();
  });
}

function verifyToken(_x, _x2, _x3) {
  return _verifyToken.apply(this, arguments);
}
function _verifyToken() {
  _verifyToken = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(sdk, token, validationParams) {
    var jwt, configuredIssuer, _yield$getWellKnown, issuer, validationOptions, key, valid, hash;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!token || !token.idToken)) {
              _context.next = 2;
              break;
            }
            throw new AuthSdkError('Only idTokens may be verified');
          case 2:
            jwt = decodeToken(token.idToken);
            configuredIssuer = (validationParams === null || validationParams === void 0 ? void 0 : validationParams.issuer) || sdk.options.issuer;
            _context.next = 6;
            return getWellKnown(sdk, configuredIssuer);
          case 6:
            _yield$getWellKnown = _context.sent;
            issuer = _yield$getWellKnown.issuer;
            validationOptions = _Object$assign({
              clientId: sdk.options.clientId,
              ignoreSignature: sdk.options.ignoreSignature
            }, validationParams, {
              issuer: issuer
            });
            validateClaims(sdk, jwt.payload, validationOptions);
            if (!(validationOptions.ignoreSignature == true || !sdk.features.isTokenVerifySupported())) {
              _context.next = 12;
              break;
            }
            return _context.abrupt("return", token);
          case 12:
            _context.next = 14;
            return getKey(sdk, token.issuer, jwt.header.kid);
          case 14:
            key = _context.sent;
            _context.next = 17;
            return verifyToken$1(token.idToken, key);
          case 17:
            valid = _context.sent;
            if (valid) {
              _context.next = 20;
              break;
            }
            throw new AuthSdkError('The token signature is not valid');
          case 20:
            if (!(validationParams && validationParams.accessToken && token.claims.at_hash)) {
              _context.next = 26;
              break;
            }
            _context.next = 23;
            return getOidcHash(validationParams.accessToken);
          case 23:
            hash = _context.sent;
            if (!(hash !== token.claims.at_hash)) {
              _context.next = 26;
              break;
            }
            throw new AuthSdkError('Token hash verification failed');
          case 26:
            return _context.abrupt("return", token);
          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _verifyToken.apply(this, arguments);
}

function validateResponse(res, oauthParams) {
  if (res['error'] && res['error_description']) {
    throw new OAuthError(res['error'], res['error_description']);
  }
  if (res.state !== oauthParams.state) {
    throw new AuthSdkError('OAuth flow response state doesn\'t match request state');
  }
}
function handleOAuthResponse(_x, _x2, _x3, _x4) {
  return _handleOAuthResponse.apply(this, arguments);
}
function _handleOAuthResponse() {
  _handleOAuthResponse = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(sdk, tokenParams, res, urls) {
    var pkce, responseType, scopes, clientId, tokenDict, expiresIn, tokenType, accessToken, idToken, refreshToken, now, accessJwt, idJwt, idTokenObj, validationParams;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pkce = sdk.options.pkce !== false;
            if (!(pkce && (res.code || res.interaction_code))) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", exchangeCodeForTokens(sdk, _Object$assign({}, tokenParams, {
              authorizationCode: res.code,
              interactionCode: res.interaction_code
            }), urls));
          case 3:
            tokenParams = tokenParams || getDefaultTokenParams(sdk);
            urls = urls || getOAuthUrls(sdk, tokenParams);
            responseType = tokenParams.responseType || [];
            if (!Array.isArray(responseType)) {
              responseType = [responseType];
            }
            if (res.scope) {
              scopes = res.scope.split(' ');
            } else {
              scopes = clone(tokenParams.scopes);
            }
            clientId = tokenParams.clientId || sdk.options.clientId;
            validateResponse(res, tokenParams);
            tokenDict = {};
            expiresIn = res.expires_in;
            tokenType = res.token_type;
            accessToken = res.access_token;
            idToken = res.id_token;
            refreshToken = res.refresh_token;
            now = Math.floor(Date.now() / 1000);
            if (accessToken) {
              accessJwt = sdk.token.decode(accessToken);
              tokenDict.accessToken = {
                accessToken: accessToken,
                claims: accessJwt.payload,
                expiresAt: Number(expiresIn) + now,
                tokenType: tokenType,
                scopes: scopes,
                authorizeUrl: urls.authorizeUrl,
                userinfoUrl: urls.userinfoUrl
              };
            }
            if (refreshToken) {
              tokenDict.refreshToken = {
                refreshToken: refreshToken,
                expiresAt: Number(expiresIn) + now,
                scopes: scopes,
                tokenUrl: urls.tokenUrl,
                authorizeUrl: urls.authorizeUrl,
                issuer: urls.issuer
              };
            }
            if (!idToken) {
              _context.next = 27;
              break;
            }
            idJwt = sdk.token.decode(idToken);
            idTokenObj = {
              idToken: idToken,
              claims: idJwt.payload,
              expiresAt: idJwt.payload.exp - idJwt.payload.iat + now,
              scopes: scopes,
              authorizeUrl: urls.authorizeUrl,
              issuer: urls.issuer,
              clientId: clientId
            };
            validationParams = {
              clientId: clientId,
              issuer: urls.issuer,
              nonce: tokenParams.nonce,
              accessToken: accessToken
            };
            if (tokenParams.ignoreSignature !== undefined) {
              validationParams.ignoreSignature = tokenParams.ignoreSignature;
            }
            _context.next = 26;
            return verifyToken(sdk, idTokenObj, validationParams);
          case 26:
            tokenDict.idToken = idTokenObj;
          case 27:
            if (!(_indexOfInstanceProperty(responseType).call(responseType, 'token') !== -1 && !tokenDict.accessToken)) {
              _context.next = 29;
              break;
            }
            throw new AuthSdkError('Unable to parse OAuth flow response: response type "token" was requested but "access_token" was not returned.');
          case 29:
            if (!(_indexOfInstanceProperty(responseType).call(responseType, 'id_token') !== -1 && !tokenDict.idToken)) {
              _context.next = 31;
              break;
            }
            throw new AuthSdkError('Unable to parse OAuth flow response: response type "id_token" was requested but "id_token" was not returned.');
          case 31:
            return _context.abrupt("return", {
              tokens: tokenDict,
              state: res.state,
              code: res.code
            });
          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _handleOAuthResponse.apply(this, arguments);
}

function getToken(sdk, options) {
  if (arguments.length > 2) {
    return _Promise.reject(new AuthSdkError('As of version 3.0, "getToken" takes only a single set of options'));
  }
  options = options || {};
  var popupWindow = options.popupWindow;
  options.popupWindow = undefined;
  return prepareTokenParams(sdk, options).then(function (tokenParams) {
    var sessionTokenOverrides = {
      prompt: 'none',
      responseMode: 'okta_post_message',
      display: null
    };
    var idpOverrides = {
      display: 'popup'
    };
    if (options.sessionToken) {
      _Object$assign(tokenParams, sessionTokenOverrides);
    } else if (options.idp) {
      _Object$assign(tokenParams, idpOverrides);
    }
    var requestUrl, endpoint, urls;
    urls = getOAuthUrls(sdk, tokenParams);
    endpoint = options.codeVerifier ? urls.tokenUrl : urls.authorizeUrl;
    requestUrl = endpoint + buildAuthorizeParams(tokenParams);
    var flowType;
    if (tokenParams.sessionToken || tokenParams.display === null) {
      flowType = 'IFRAME';
    } else if (tokenParams.display === 'popup') {
      flowType = 'POPUP';
    } else {
      flowType = 'IMPLICIT';
    }
    switch (flowType) {
      case 'IFRAME':
        var iframePromise = addPostMessageListener(sdk, options.timeout, tokenParams.state);
        var iframeEl = loadFrame(requestUrl);
        return iframePromise.then(function (res) {
          return handleOAuthResponse(sdk, tokenParams, res, urls);
        }).finally(function () {
          var _a;
          if (document.body.contains(iframeEl)) {
            (_a = iframeEl.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(iframeEl);
          }
        });
      case 'POPUP':
        var oauthPromise;
        if (tokenParams.responseMode === 'okta_post_message') {
          if (!sdk.features.isPopupPostMessageSupported()) {
            throw new AuthSdkError('This browser doesn\'t have full postMessage support');
          }
          oauthPromise = addPostMessageListener(sdk, options.timeout, tokenParams.state);
        }
        if (popupWindow) {
          popupWindow.location.assign(requestUrl);
        }
        var popupPromise = new _Promise(function (resolve, reject) {
          var closePoller = setInterval(function () {
            if (!popupWindow || popupWindow.closed) {
              clearInterval(closePoller);
              reject(new AuthSdkError('Unable to parse OAuth flow response'));
            }
          }, 100);
          oauthPromise.then(function (res) {
            clearInterval(closePoller);
            resolve(res);
          }).catch(function (err) {
            clearInterval(closePoller);
            reject(err);
          });
        });
        return popupPromise.then(function (res) {
          return handleOAuthResponse(sdk, tokenParams, res, urls);
        }).finally(function () {
          if (popupWindow && !popupWindow.closed) {
            popupWindow.close();
          }
        });
      default:
        throw new AuthSdkError('The full page redirect flow is not supported');
    }
  });
}

function getWithoutPrompt(sdk, options) {
  if (arguments.length > 2) {
    return _Promise.reject(new AuthSdkError('As of version 3.0, "getWithoutPrompt" takes only a single set of options'));
  }
  options = clone(options) || {};
  _Object$assign(options, {
    prompt: 'none',
    responseMode: 'okta_post_message',
    display: null
  });
  return getToken(sdk, options);
}

function renewTokensWithRefresh(_x, _x2, _x3) {
  return _renewTokensWithRefresh.apply(this, arguments);
}
function _renewTokensWithRefresh() {
  _renewTokensWithRefresh = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(sdk, tokenParams, refreshTokenObject) {
    var clientId, renewTokenParams, tokenResponse, urls, _yield$handleOAuthRes, tokens, refreshToken;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            clientId = sdk.options.clientId;
            if (clientId) {
              _context.next = 3;
              break;
            }
            throw new AuthSdkError('A clientId must be specified in the OktaAuth constructor to renew tokens');
          case 3:
            renewTokenParams = _Object$assign({}, tokenParams, {
              clientId: clientId
            });
            _context.next = 6;
            return postRefreshToken(sdk, renewTokenParams, refreshTokenObject);
          case 6:
            tokenResponse = _context.sent;
            urls = getOAuthUrls(sdk, tokenParams);
            _context.next = 10;
            return handleOAuthResponse(sdk, renewTokenParams, tokenResponse, urls);
          case 10:
            _yield$handleOAuthRes = _context.sent;
            tokens = _yield$handleOAuthRes.tokens;
            refreshToken = tokens.refreshToken;
            if (refreshToken && !isSameRefreshToken(refreshToken, refreshTokenObject)) {
              sdk.tokenManager.updateRefreshToken(refreshToken);
            }
            return _context.abrupt("return", tokens);
          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _renewTokensWithRefresh.apply(this, arguments);
}

function throwInvalidTokenError() {
  throw new AuthSdkError('Renew must be passed a token with an array of scopes and an accessToken or idToken');
}
function getSingleToken(originalToken, tokens) {
  if (isIDToken(originalToken)) {
    return tokens.idToken;
  }
  if (isAccessToken(originalToken)) {
    return tokens.accessToken;
  }
  throwInvalidTokenError();
}
function renewToken(_x, _x2) {
  return _renewToken.apply(this, arguments);
}
function _renewToken() {
  _renewToken = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(sdk, token) {
    var tokens, responseType, scopes, authorizeUrl, userinfoUrl, issuer;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!isIDToken(token) && !isAccessToken(token)) {
              throwInvalidTokenError();
            }
            tokens = sdk.tokenManager.getTokensSync();
            if (!tokens.refreshToken) {
              _context.next = 7;
              break;
            }
            _context.next = 5;
            return renewTokensWithRefresh(sdk, {
              scopes: token.scopes
            }, tokens.refreshToken);
          case 5:
            tokens = _context.sent;
            return _context.abrupt("return", getSingleToken(token, tokens));
          case 7:
            if (sdk.options.pkce) {
              responseType = 'code';
            } else if (isAccessToken(token)) {
              responseType = 'token';
            } else {
              responseType = 'id_token';
            }
            scopes = token.scopes, authorizeUrl = token.authorizeUrl, userinfoUrl = token.userinfoUrl, issuer = token.issuer;
            return _context.abrupt("return", getWithoutPrompt(sdk, {
              responseType: responseType,
              scopes: scopes,
              authorizeUrl: authorizeUrl,
              userinfoUrl: userinfoUrl,
              issuer: issuer
            }).then(function (res) {
              return getSingleToken(token, res.tokens);
            }));
          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _renewToken.apply(this, arguments);
}

function renewTokens(_x, _x2) {
  return _renewTokens.apply(this, arguments);
}
function _renewTokens() {
  _renewTokens = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(sdk, options) {
    var tokens, accessToken, idToken, scopes, authorizeUrl, userinfoUrl, issuer, _getDefaultTokenParam, responseType;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tokens = sdk.tokenManager.getTokensSync();
            if (!tokens.refreshToken) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", renewTokensWithRefresh(sdk, options || {}, tokens.refreshToken));
          case 3:
            if (!(!tokens.accessToken && !tokens.idToken)) {
              _context.next = 5;
              break;
            }
            throw new AuthSdkError('renewTokens() was called but there is no existing token');
          case 5:
            accessToken = tokens.accessToken || {};
            idToken = tokens.idToken || {};
            scopes = accessToken.scopes || idToken.scopes;
            if (scopes) {
              _context.next = 10;
              break;
            }
            throw new AuthSdkError('renewTokens: invalid tokens: could not read scopes');
          case 10:
            authorizeUrl = accessToken.authorizeUrl || idToken.authorizeUrl;
            if (authorizeUrl) {
              _context.next = 13;
              break;
            }
            throw new AuthSdkError('renewTokens: invalid tokens: could not read authorizeUrl');
          case 13:
            userinfoUrl = accessToken.userinfoUrl || sdk.options.userinfoUrl;
            issuer = idToken.issuer || sdk.options.issuer;
            options = _Object$assign({
              scopes: scopes,
              authorizeUrl: authorizeUrl,
              userinfoUrl: userinfoUrl,
              issuer: issuer
            }, options);
            if (sdk.options.pkce) {
              options.responseType = 'code';
            } else {
              _getDefaultTokenParam = getDefaultTokenParams(sdk), responseType = _getDefaultTokenParam.responseType;
              options.responseType = responseType;
            }
            return _context.abrupt("return", getWithoutPrompt(sdk, options).then(function (res) {
              return res.tokens;
            }));
          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _renewTokens.apply(this, arguments);
}

function getUserInfo(_x, _x2, _x3) {
  return _getUserInfo.apply(this, arguments);
}
function _getUserInfo() {
  _getUserInfo = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(sdk, accessTokenObject, idTokenObject) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (accessTokenObject) {
              _context.next = 4;
              break;
            }
            _context.next = 3;
            return sdk.tokenManager.getTokens();
          case 3:
            accessTokenObject = _context.sent.accessToken;
          case 4:
            if (idTokenObject) {
              _context.next = 8;
              break;
            }
            _context.next = 7;
            return sdk.tokenManager.getTokens();
          case 7:
            idTokenObject = _context.sent.idToken;
          case 8:
            if (!(!accessTokenObject || !isAccessToken(accessTokenObject))) {
              _context.next = 10;
              break;
            }
            return _context.abrupt("return", _Promise.reject(new AuthSdkError('getUserInfo requires an access token object')));
          case 10:
            if (!(!idTokenObject || !isIDToken(idTokenObject))) {
              _context.next = 12;
              break;
            }
            return _context.abrupt("return", _Promise.reject(new AuthSdkError('getUserInfo requires an ID token object')));
          case 12:
            return _context.abrupt("return", httpRequest(sdk, {
              url: accessTokenObject.userinfoUrl,
              method: 'GET',
              accessToken: accessTokenObject.accessToken
            }).then(function (userInfo) {
              if (userInfo.sub === idTokenObject.claims.sub) {
                return userInfo;
              }
              return _Promise.reject(new AuthSdkError('getUserInfo request was rejected due to token mismatch'));
            }).catch(function (err) {
              if (err.xhr && (err.xhr.status === 401 || err.xhr.status === 403)) {
                var authenticateHeader;
                if (err.xhr.headers && isFunction(err.xhr.headers.get) && err.xhr.headers.get('WWW-Authenticate')) {
                  authenticateHeader = err.xhr.headers.get('WWW-Authenticate');
                } else if (isFunction(err.xhr.getResponseHeader)) {
                  authenticateHeader = err.xhr.getResponseHeader('WWW-Authenticate');
                }
                if (authenticateHeader) {
                  var errorMatches = authenticateHeader.match(/error="(.*?)"/) || [];
                  var errorDescriptionMatches = authenticateHeader.match(/error_description="(.*?)"/) || [];
                  var error = errorMatches[1];
                  var errorDescription = errorDescriptionMatches[1];
                  if (error && errorDescription) {
                    err = new OAuthError(error, errorDescription);
                  }
                }
              }
              throw err;
            }));
          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getUserInfo.apply(this, arguments);
}

function getWithPopup(sdk, options) {
  if (arguments.length > 2) {
    return _Promise.reject(new AuthSdkError('As of version 3.0, "getWithPopup" takes only a single set of options'));
  }
  var popupWindow = loadPopup('/', options);
  options = clone(options) || {};
  _Object$assign(options, {
    display: 'popup',
    responseMode: 'okta_post_message',
    popupWindow: popupWindow
  });
  return getToken(sdk, options);
}

function getWithRedirect(_x, _x2) {
  return _getWithRedirect.apply(this, arguments);
}
function _getWithRedirect() {
  _getWithRedirect = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(sdk, options) {
    var tokenParams,
        meta,
        requestUrl,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(_args.length > 2)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", _Promise.reject(new AuthSdkError('As of version 3.0, "getWithRedirect" takes only a single set of options')));
          case 2:
            options = clone(options) || {};
            _context.next = 5;
            return prepareTokenParams(sdk, options);
          case 5:
            tokenParams = _context.sent;
            meta = createOAuthMeta(sdk, tokenParams);
            requestUrl = meta.urls.authorizeUrl + buildAuthorizeParams(tokenParams);
            sdk.transactionManager.save(meta, {
              oauth: true
            });
            sdk.token.getWithRedirect._setLocation(requestUrl);
          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getWithRedirect.apply(this, arguments);
}

function removeHash(sdk) {
  var nativeHistory = sdk.token.parseFromUrl._getHistory();
  var nativeDoc = sdk.token.parseFromUrl._getDocument();
  var nativeLoc = sdk.token.parseFromUrl._getLocation();
  if (nativeHistory && nativeHistory.replaceState) {
    nativeHistory.replaceState(null, nativeDoc.title, nativeLoc.pathname + nativeLoc.search);
  } else {
    nativeLoc.hash = '';
  }
}
function removeSearch(sdk) {
  var nativeHistory = sdk.token.parseFromUrl._getHistory();
  var nativeDoc = sdk.token.parseFromUrl._getDocument();
  var nativeLoc = sdk.token.parseFromUrl._getLocation();
  if (nativeHistory && nativeHistory.replaceState) {
    nativeHistory.replaceState(null, nativeDoc.title, nativeLoc.pathname + nativeLoc.hash);
  } else {
    nativeLoc.search = '';
  }
}
function getResponseMode(sdk) {
  var defaultResponseMode = sdk.options.pkce ? 'query' : 'fragment';
  var responseMode = sdk.options.responseMode || defaultResponseMode;
  return responseMode;
}
function parseOAuthResponseFromUrl(sdk, options) {
  options = options || {};
  if (isString(options)) {
    options = {
      url: options
    };
  } else {
    options = options;
  }
  var url = options.url;
  var responseMode = options.responseMode || getResponseMode(sdk);
  var nativeLoc = sdk.token.parseFromUrl._getLocation();
  var paramStr;
  if (responseMode === 'query') {
    paramStr = url ? url.substring(_indexOfInstanceProperty(url).call(url, '?')) : nativeLoc.search;
  } else {
    paramStr = url ? url.substring(_indexOfInstanceProperty(url).call(url, '#')) : nativeLoc.hash;
  }
  if (!paramStr) {
    throw new AuthSdkError('Unable to parse a token from the url');
  }
  return urlParamsToObject(paramStr);
}
function cleanOAuthResponseFromUrl(sdk, options) {
  var responseMode = options.responseMode || getResponseMode(sdk);
  responseMode === 'query' ? removeSearch(sdk) : removeHash(sdk);
}
function parseFromUrl(_x, _x2) {
  return _parseFromUrl.apply(this, arguments);
}
function _parseFromUrl() {
  _parseFromUrl = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(sdk, options) {
    var res, state, oauthParams, urls;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = options || {};
            if (isString(options)) {
              options = {
                url: options
              };
            } else {
              options = options;
            }
            res = parseOAuthResponseFromUrl(sdk, options);
            state = res.state;
            oauthParams = sdk.transactionManager.load({
              oauth: true,
              pkce: sdk.options.pkce,
              state: state
            });
            if (oauthParams) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", _Promise.reject(new AuthSdkError('Unable to retrieve OAuth redirect params from storage')));
          case 7:
            urls = oauthParams.urls;
            delete oauthParams.urls;
            if (!options.url) {
              cleanOAuthResponseFromUrl(sdk, options);
            }
            return _context.abrupt("return", handleOAuthResponse(sdk, oauthParams, res, urls).catch(function (err) {
              if (!isInteractionRequiredError(err)) {
                sdk.transactionManager.clear({
                  state: state
                });
              }
              throw err;
            }).then(function (res) {
              sdk.transactionManager.clear({
                state: state
              });
              return res;
            }));
          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _parseFromUrl.apply(this, arguments);
}

var getEnrolledCredentials = function getEnrolledCredentials() {
  var authenticatorEnrollments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var credentials = [];
  authenticatorEnrollments.forEach(function (enrollement) {
    if (enrollement.key === 'webauthn') {
      credentials.push({
        type: 'public-key',
        id: base64UrlToBuffer(enrollement.credentialId)
      });
    }
  });
  return credentials;
};
var buildCredentialCreationOptions = function buildCredentialCreationOptions(activationData, authenticatorEnrollments) {
  return {
    publicKey: {
      rp: activationData.rp,
      user: {
        id: base64UrlToBuffer(activationData.user.id),
        name: activationData.user.name,
        displayName: activationData.user.displayName
      },
      challenge: base64UrlToBuffer(activationData.challenge),
      pubKeyCredParams: activationData.pubKeyCredParams,
      attestation: activationData.attestation,
      authenticatorSelection: activationData.authenticatorSelection,
      excludeCredentials: getEnrolledCredentials(authenticatorEnrollments)
    }
  };
};
var buildCredentialRequestOptions = function buildCredentialRequestOptions(challengeData, authenticatorEnrollments) {
  return {
    publicKey: {
      challenge: base64UrlToBuffer(challengeData.challenge),
      userVerification: challengeData.userVerification,
      allowCredentials: getEnrolledCredentials(authenticatorEnrollments)
    }
  };
};
var getAttestation = function getAttestation(credential) {
  var response = credential.response;
  var id = credential.id;
  var clientData = bufferToBase64Url(response.clientDataJSON);
  var attestation = bufferToBase64Url(response.attestationObject);
  return {
    id: id,
    clientData: clientData,
    attestation: attestation
  };
};
var getAssertion = function getAssertion(credential) {
  var response = credential.response;
  var id = credential.id;
  var clientData = bufferToBase64Url(response.clientDataJSON);
  var authenticatorData = bufferToBase64Url(response.authenticatorData);
  var signatureData = bufferToBase64Url(response.signature);
  return {
    id: id,
    clientData: clientData,
    authenticatorData: authenticatorData,
    signatureData: signatureData
  };
};

var webauthn = /*#__PURE__*/Object.freeze({
  __proto__: null,
  buildCredentialCreationOptions: buildCredentialCreationOptions,
  buildCredentialRequestOptions: buildCredentialRequestOptions,
  getAttestation: getAttestation,
  getAssertion: getAssertion
});

var storageUtil = {
  getHttpCache: function getHttpCache() {
    return null;
  },
  getPKCEStorage: function getPKCEStorage() {
    return null;
  },
  browserHasLocalStorage: function browserHasLocalStorage() {
    try {
      var storage = this.getLocalStorage();
      return this.testStorage(storage);
    } catch (e) {
      return false;
    }
  },
  browserHasSessionStorage: function browserHasSessionStorage() {
    try {
      var storage = this.getSessionStorage();
      return this.testStorage(storage);
    } catch (e) {
      return false;
    }
  },
  testStorageType: function testStorageType(storageType) {
    var supported = false;
    switch (storageType) {
      case 'sessionStorage':
        supported = this.browserHasSessionStorage();
        break;
      case 'localStorage':
        supported = this.browserHasLocalStorage();
        break;
      case 'cookie':
      case 'memory':
        supported = true;
        break;
      default:
        supported = false;
        break;
    }
    return supported;
  },
  getStorageByType: function getStorageByType(storageType, options) {
    var storageProvider;
    switch (storageType) {
      case 'sessionStorage':
        storageProvider = this.getSessionStorage();
        break;
      case 'localStorage':
        storageProvider = this.getLocalStorage();
        break;
      case 'cookie':
        storageProvider = this.getCookieStorage(options);
        break;
      case 'memory':
        storageProvider = this.getInMemoryStorage();
        break;
      default:
        throw new AuthSdkError("Unrecognized storage option: ".concat(storageType));
    }
    return storageProvider;
  },
  findStorageType: function findStorageType(types) {
    var _context;
    var curType;
    var nextType;
    types = _sliceInstanceProperty(types).call(types);
    curType = types.shift();
    nextType = types.length ? types[0] : null;
    if (!nextType) {
      return curType;
    }
    if (this.testStorageType(curType)) {
      return curType;
    }
    warn(_concatInstanceProperty(_context = "This browser doesn't support ".concat(curType, ". Switching to ")).call(_context, nextType, "."));
    return this.findStorageType(types);
  },
  getLocalStorage: function getLocalStorage() {
    return localStorage;
  },
  getSessionStorage: function getSessionStorage() {
    return sessionStorage;
  },
  getCookieStorage: function getCookieStorage(options) {
    var _this = this;
    var secure = options.secure;
    var sameSite = options.sameSite;
    var sessionCookie = options.sessionCookie;
    if (typeof secure === 'undefined' || typeof sameSite === 'undefined') {
      throw new AuthSdkError('getCookieStorage: "secure" and "sameSite" options must be provided');
    }
    var storage = {
      getItem: this.storage.get,
      setItem: function setItem(key, value) {
        var expiresAt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '2200-01-01T00:00:00.000Z';
        expiresAt = sessionCookie ? null : expiresAt;
        _this.storage.set(key, value, expiresAt, {
          secure: secure,
          sameSite: sameSite
        });
      },
      removeItem: function removeItem(key) {
        _this.storage.delete(key);
      }
    };
    if (!options.useSeparateCookies) {
      return storage;
    }
    return {
      getItem: function getItem(key) {
        var data = storage.getItem();
        var value = {};
        _Object$keys(data).forEach(function (k) {
          if (_indexOfInstanceProperty(k).call(k, key) === 0) {
            value[k.replace("".concat(key, "_"), '')] = JSON.parse(data[k]);
          }
        });
        return _JSON$stringify(value);
      },
      setItem: function setItem(key, value) {
        var existingValues = JSON.parse(this.getItem(key));
        value = JSON.parse(value);
        _Object$keys(value).forEach(function (k) {
          var storageKey = key + '_' + k;
          var valueToStore = _JSON$stringify(value[k]);
          storage.setItem(storageKey, valueToStore);
          delete existingValues[k];
        });
        _Object$keys(existingValues).forEach(function (k) {
          storage.removeItem(key + '_' + k);
        });
      },
      removeItem: function removeItem(key) {
        var existingValues = JSON.parse(this.getItem(key));
        _Object$keys(existingValues).forEach(function (k) {
          storage.removeItem(key + '_' + k);
        });
      }
    };
  },
  inMemoryStore: {},
  getInMemoryStorage: function getInMemoryStorage() {
    var _this2 = this;
    return {
      getItem: function getItem(key) {
        return _this2.inMemoryStore[key];
      },
      setItem: function setItem(key, value) {
        _this2.inMemoryStore[key] = value;
      }
    };
  },
  testStorage: function testStorage(storage) {
    var key = 'okta-test-storage';
    try {
      storage.setItem(key, key);
      storage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  },
  storage: {
    set: function set(name, value, expiresAt, options) {
      var sameSite = options.sameSite,
          secure = options.secure;
      if (typeof secure === 'undefined' || typeof sameSite === 'undefined') {
        throw new AuthSdkError('storage.set: "secure" and "sameSite" options must be provided');
      }
      var cookieOptions = {
        path: options.path || '/',
        secure: secure,
        sameSite: sameSite
      };
      if (!!Date.parse(expiresAt)) {
        cookieOptions.expires = new Date(expiresAt);
      }
      Cookies.set(name, value, cookieOptions);
      return this.get(name);
    },
    get: function get(name) {
      if (!arguments.length) {
        return Cookies.get();
      }
      return Cookies.get(name);
    },
    delete: function _delete(name) {
      return Cookies.remove(name, {
        path: '/'
      });
    }
  }
};

var SdkClock = function () {
  function SdkClock(localOffset) {
    _classCallCheck(this, SdkClock);
    this.localOffset = _parseInt(localOffset || 0);
  }
  _createClass(SdkClock, [{
    key: "now",
    value:
    function now() {
      var now = (Date.now() + this.localOffset) / 1000;
      return now;
    }
  }], [{
    key: "create",
    value: function create()
    {
      var localOffset = 0;
      return new SdkClock(localOffset);
    }
  }]);
  return SdkClock;
}();

var DEFAULT_OPTIONS = {
  autoRenew: true,
  autoRemove: true,
  syncStorage: true,
  clearPendingRemoveTokens: true,
  storage: undefined,
  expireEarlySeconds: 30,
  storageKey: TOKEN_STORAGE_NAME,
  _storageEventDelay: 0
};
var EVENT_EXPIRED = 'expired';
var EVENT_RENEWED = 'renewed';
var EVENT_ADDED = 'added';
var EVENT_REMOVED = 'removed';
var EVENT_ERROR = 'error';
function defaultState() {
  return {
    expireTimeouts: {},
    renewPromise: null
  };
}
var TokenManager = function () {
  function TokenManager(sdk) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, TokenManager);
    this.sdk = sdk;
    this.emitter = sdk.emitter;
    if (!this.emitter) {
      throw new AuthSdkError('Emitter should be initialized before TokenManager');
    }
    options = _Object$assign({}, DEFAULT_OPTIONS, removeNils(options));
    if (isIE11OrLess()) {
      options._storageEventDelay = options._storageEventDelay || 1000;
    }
    if (!isLocalhost()) {
      options.expireEarlySeconds = DEFAULT_OPTIONS.expireEarlySeconds;
    }
    this.options = options;
    var storageOptions = removeNils({
      storageKey: options.storageKey,
      secure: options.secure
    });
    if (_typeof(options.storage) === 'object') {
      storageOptions.storageProvider = options.storage;
    } else if (options.storage) {
      storageOptions.storageType = options.storage;
    }
    this.storage = sdk.storageManager.getTokenStorage(_Object$assign(_Object$assign({}, storageOptions), {
      useSeparateCookies: true
    }));
    this.clock = SdkClock.create();
    this.state = defaultState();
    this.on = this.emitter.on.bind(this.emitter);
    this.off = this.emitter.off.bind(this.emitter);
  }
  _createClass(TokenManager, [{
    key: "start",
    value: function start() {
      if (this.options.clearPendingRemoveTokens) {
        this.clearPendingRemoveTokens();
      }
      this.setExpireEventTimeoutAll();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.clearExpireEventTimeoutAll();
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      return clone(this.options);
    }
  }, {
    key: "getExpireTime",
    value: function getExpireTime(token) {
      var expireEarlySeconds = this.options.expireEarlySeconds || 0;
      var expireTime = token.expiresAt - expireEarlySeconds;
      return expireTime;
    }
  }, {
    key: "hasExpired",
    value: function hasExpired(token) {
      var expireTime = this.getExpireTime(token);
      return expireTime <= this.clock.now();
    }
  }, {
    key: "emitExpired",
    value: function emitExpired(key, token) {
      this.emitter.emit(EVENT_EXPIRED, key, token);
    }
  }, {
    key: "emitRenewed",
    value: function emitRenewed(key, freshToken, oldToken) {
      this.emitter.emit(EVENT_RENEWED, key, freshToken, oldToken);
    }
  }, {
    key: "emitAdded",
    value: function emitAdded(key, token) {
      this.emitter.emit(EVENT_ADDED, key, token);
    }
  }, {
    key: "emitRemoved",
    value: function emitRemoved(key, token) {
      this.emitter.emit(EVENT_REMOVED, key, token);
    }
  }, {
    key: "emitError",
    value: function emitError(error) {
      this.emitter.emit(EVENT_ERROR, error);
    }
  }, {
    key: "emitEventsForCrossTabsStorageUpdate",
    value: function emitEventsForCrossTabsStorageUpdate(newValue, oldValue) {
      var _this = this;
      var oldTokens = this.getTokensFromStorageValue(oldValue);
      var newTokens = this.getTokensFromStorageValue(newValue);
      _Object$keys(newTokens).forEach(function (key) {
        var oldToken = oldTokens[key];
        var newToken = newTokens[key];
        if (_JSON$stringify(oldToken) !== _JSON$stringify(newToken)) {
          _this.emitAdded(key, newToken);
        }
      });
      _Object$keys(oldTokens).forEach(function (key) {
        var oldToken = oldTokens[key];
        var newToken = newTokens[key];
        if (!newToken) {
          _this.emitRemoved(key, oldToken);
        }
      });
    }
  }, {
    key: "clearExpireEventTimeout",
    value: function clearExpireEventTimeout(key) {
      clearTimeout(this.state.expireTimeouts[key]);
      delete this.state.expireTimeouts[key];
      this.state.renewPromise = null;
    }
  }, {
    key: "clearExpireEventTimeoutAll",
    value: function clearExpireEventTimeoutAll() {
      var expireTimeouts = this.state.expireTimeouts;
      for (var key in expireTimeouts) {
        if (!Object.prototype.hasOwnProperty.call(expireTimeouts, key)) {
          continue;
        }
        this.clearExpireEventTimeout(key);
      }
    }
  }, {
    key: "setExpireEventTimeout",
    value: function setExpireEventTimeout(key, token) {
      var _this2 = this;
      if (isRefreshToken(token)) {
        return;
      }
      var expireTime = this.getExpireTime(token);
      var expireEventWait = Math.max(expireTime - this.clock.now(), 0) * 1000;
      this.clearExpireEventTimeout(key);
      var expireEventTimeout = setTimeout(function () {
        _this2.emitExpired(key, token);
      }, expireEventWait);
      this.state.expireTimeouts[key] = expireEventTimeout;
    }
  }, {
    key: "setExpireEventTimeoutAll",
    value: function setExpireEventTimeoutAll() {
      var tokenStorage = this.storage.getStorage();
      for (var key in tokenStorage) {
        if (!Object.prototype.hasOwnProperty.call(tokenStorage, key)) {
          continue;
        }
        var token = tokenStorage[key];
        this.setExpireEventTimeout(key, token);
      }
    }
  }, {
    key: "resetExpireEventTimeoutAll",
    value: function resetExpireEventTimeoutAll() {
      this.clearExpireEventTimeoutAll();
      this.setExpireEventTimeoutAll();
    }
  }, {
    key: "add",
    value: function add(key, token) {
      var tokenStorage = this.storage.getStorage();
      validateToken(token);
      tokenStorage[key] = token;
      this.storage.setStorage(tokenStorage);
      this.emitAdded(key, token);
      this.setExpireEventTimeout(key, token);
    }
  }, {
    key: "getSync",
    value: function getSync(key) {
      var tokenStorage = this.storage.getStorage();
      return tokenStorage[key];
    }
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(key) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.getSync(key));
              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function get(_x) {
        return _get.apply(this, arguments);
      }
      return get;
    }()
  }, {
    key: "getTokensSync",
    value: function getTokensSync() {
      var tokens = {};
      var tokenStorage = this.storage.getStorage();
      _Object$keys(tokenStorage).forEach(function (key) {
        var token = tokenStorage[key];
        if (isAccessToken(token)) {
          tokens.accessToken = token;
        } else if (isIDToken(token)) {
          tokens.idToken = token;
        } else if (isRefreshToken(token)) {
          tokens.refreshToken = token;
        }
      });
      return tokens;
    }
  }, {
    key: "getTokens",
    value: function () {
      var _getTokens = _asyncToGenerator( _regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.getTokensSync());
              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function getTokens() {
        return _getTokens.apply(this, arguments);
      }
      return getTokens;
    }()
  }, {
    key: "getStorageKeyByType",
    value: function getStorageKeyByType(type) {
      var _context3;
      var tokenStorage = this.storage.getStorage();
      var key = _filterInstanceProperty(_context3 = _Object$keys(tokenStorage)).call(_context3, function (key) {
        var token = tokenStorage[key];
        return isAccessToken(token) && type === 'accessToken' || isIDToken(token) && type === 'idToken' || isRefreshToken(token) && type === 'refreshToken';
      })[0];
      return key;
    }
  }, {
    key: "getTokenType",
    value: function getTokenType(token) {
      if (isAccessToken(token)) {
        return 'accessToken';
      }
      if (isIDToken(token)) {
        return 'idToken';
      }
      if (isRefreshToken(token)) {
        return 'refreshToken';
      }
      throw new AuthSdkError('Unknown token type');
    }
  }, {
    key: "setTokens",
    value: function setTokens(tokens,
    accessTokenCb, idTokenCb, refreshTokenCb) {
      var _this3 = this;
      var handleTokenCallback = function handleTokenCallback(key, token) {
        var type = _this3.getTokenType(token);
        if (type === 'accessToken') {
          accessTokenCb && accessTokenCb(key, token);
        } else if (type === 'idToken') {
          idTokenCb && idTokenCb(key, token);
        } else if (type === 'refreshToken') {
          refreshTokenCb && refreshTokenCb(key, token);
        }
      };
      var handleAdded = function handleAdded(key, token) {
        _this3.emitAdded(key, token);
        _this3.setExpireEventTimeout(key, token);
        handleTokenCallback(key, token);
      };
      var handleRenewed = function handleRenewed(key, token, oldToken) {
        _this3.emitRenewed(key, token, oldToken);
        _this3.clearExpireEventTimeout(key);
        _this3.setExpireEventTimeout(key, token);
        handleTokenCallback(key, token);
      };
      var handleRemoved = function handleRemoved(key, token) {
        _this3.clearExpireEventTimeout(key);
        _this3.emitRemoved(key, token);
        handleTokenCallback(key, token);
      };
      var types = ['idToken', 'accessToken', 'refreshToken'];
      var existingTokens = this.getTokensSync();
      types.forEach(function (type) {
        var token = tokens[type];
        if (token) {
          validateToken(token, type);
        }
      });
      var storage = _reduceInstanceProperty(types).call(types, function (storage, type) {
        var token = tokens[type];
        if (token) {
          var storageKey = _this3.getStorageKeyByType(type) || type;
          storage[storageKey] = token;
        }
        return storage;
      }, {});
      this.storage.setStorage(storage);
      types.forEach(function (type) {
        var newToken = tokens[type];
        var existingToken = existingTokens[type];
        var storageKey = _this3.getStorageKeyByType(type) || type;
        if (newToken && existingToken) {
          handleRemoved(storageKey, existingToken);
          handleAdded(storageKey, newToken);
          handleRenewed(storageKey, newToken, existingToken);
        } else if (newToken) {
          handleAdded(storageKey, newToken);
        } else if (existingToken) {
          handleRemoved(storageKey, existingToken);
        }
      });
    }
  }, {
    key: "remove",
    value: function remove(key) {
      this.clearExpireEventTimeout(key);
      var tokenStorage = this.storage.getStorage();
      var removedToken = tokenStorage[key];
      delete tokenStorage[key];
      this.storage.setStorage(tokenStorage);
      this.emitRemoved(key, removedToken);
    }
  }, {
    key: "renewToken",
    value: function () {
      var _renewToken = _asyncToGenerator( _regeneratorRuntime.mark(function _callee3(token) {
        var _a;
        return _regeneratorRuntime.wrap(function _callee3$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", (_a = this.sdk.token) === null || _a === void 0 ? void 0 : _a.renew(token));
              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee3, this);
      }));
      function renewToken(_x2) {
        return _renewToken.apply(this, arguments);
      }
      return renewToken;
    }()
  }, {
    key: "validateToken",
    value: function validateToken$1(token) {
      return validateToken(token);
    }
  }, {
    key: "renew",
    value: function renew(key) {
      var _this4 = this;
      if (this.state.renewPromise) {
        return this.state.renewPromise;
      }
      try {
        var token = this.getSync(key);
        if (!token) {
          throw new AuthSdkError('The tokenManager has no token for the key: ' + key);
        }
      } catch (e) {
        return _Promise.reject(e);
      }
      this.clearExpireEventTimeout(key);
      this.state.renewPromise = this.sdk.token.renewTokens().then(function (tokens) {
        _this4.setTokens(tokens);
        var tokenType = _this4.getTokenType(token);
        return tokens[tokenType];
      }).catch(function (err) {
        _this4.remove(key);
        err.tokenKey = key;
        _this4.emitError(err);
        throw err;
      }).finally(function () {
        _this4.state.renewPromise = null;
      });
      return this.state.renewPromise;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.clearExpireEventTimeoutAll();
      this.storage.clearStorage();
    }
  }, {
    key: "clearPendingRemoveTokens",
    value: function clearPendingRemoveTokens() {
      var _this5 = this;
      var tokens = this.getTokensSync();
      _Object$keys(tokens).forEach(function (key) {
        if (tokens[key].pendingRemove) {
          _this5.remove(key);
        }
      });
    }
  }, {
    key: "getTokensFromStorageValue",
    value: function getTokensFromStorageValue(value) {
      var tokens;
      try {
        tokens = JSON.parse(value) || {};
      } catch (e) {
        tokens = {};
      }
      return tokens;
    }
  }, {
    key: "updateRefreshToken",
    value: function updateRefreshToken(token) {
      var key = this.getStorageKeyByType('refreshToken') || REFRESH_TOKEN_STORAGE_KEY;
      var tokenStorage = this.storage.getStorage();
      validateToken(token);
      tokenStorage[key] = token;
      this.storage.setStorage(tokenStorage);
    }
  }, {
    key: "addPendingRemoveFlags",
    value: function addPendingRemoveFlags() {
      var tokens = this.getTokensSync();
      _Object$keys(tokens).forEach(function (key) {
        tokens[key].pendingRemove = true;
      });
      this.setTokens(tokens);
    }
  }]);
  return TokenManager;
}();

var AutoRenewService = function () {
  function AutoRenewService(tokenManager) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, AutoRenewService);
    this.started = false;
    this.tokenManager = tokenManager;
    this.options = options;
    this.renewTimeQueue = [];
    this.onTokenExpiredHandler = this.onTokenExpiredHandler.bind(this);
  }
  _createClass(AutoRenewService, [{
    key: "shouldThrottleRenew",
    value: function shouldThrottleRenew() {
      var res = false;
      this.renewTimeQueue.push(Date.now());
      if (this.renewTimeQueue.length >= 10) {
        var firstTime = this.renewTimeQueue.shift();
        var lastTime = this.renewTimeQueue[this.renewTimeQueue.length - 1];
        res = lastTime - firstTime < 30 * 1000;
      }
      return res;
    }
  }, {
    key: "requiresLeadership",
    value: function requiresLeadership() {
      return !!this.options.syncStorage && isBrowser();
    }
  }, {
    key: "onTokenExpiredHandler",
    value: function onTokenExpiredHandler(key) {
      if (this.options.autoRenew) {
        if (this.shouldThrottleRenew()) {
          var error = new AuthSdkError('Too many token renew requests');
          this.tokenManager.emitError(error);
        } else {
          this.tokenManager.renew(key).catch(function () {});
        }
      } else if (this.options.autoRemove) {
        this.tokenManager.remove(key);
      }
    }
  }, {
    key: "canStart",
    value: function canStart() {
      return !!this.options.autoRenew || !!this.options.autoRemove;
    }
  }, {
    key: "start",
    value: function start() {
      if (this.canStart()) {
        this.stop();
        this.tokenManager.on(EVENT_EXPIRED, this.onTokenExpiredHandler);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.tokenManager.off(EVENT_EXPIRED, this.onTokenExpiredHandler);
        this.renewTimeQueue = [];
        this.started = false;
      }
    }
  }, {
    key: "isStarted",
    value: function isStarted() {
      return this.started;
    }
  }]);
  return AutoRenewService;
}();

var SyncStorageService = function () {
  function SyncStorageService(tokenManager) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, SyncStorageService);
    this.started = false;
    this.tokenManager = tokenManager;
    this.options = options;
    this.storageListener = this.storageListener.bind(this);
  }
  _createClass(SyncStorageService, [{
    key: "storageListener",
    value: function storageListener(_ref) {
      var _this = this;
      var key = _ref.key,
          newValue = _ref.newValue,
          oldValue = _ref.oldValue;
      var opts = this.tokenManager.getOptions();
      var handleCrossTabsStorageChange = function handleCrossTabsStorageChange() {
        _this.tokenManager.resetExpireEventTimeoutAll();
        _this.tokenManager.emitEventsForCrossTabsStorageUpdate(newValue, oldValue);
      };
      if (key && (key !== opts.storageKey || newValue === oldValue)) {
        return;
      }
      this.syncTimeout = setTimeout(function () {
        return handleCrossTabsStorageChange();
      }, opts._storageEventDelay);
    }
  }, {
    key: "requiresLeadership",
    value: function requiresLeadership() {
      return false;
    }
  }, {
    key: "isStarted",
    value: function isStarted() {
      return this.started;
    }
  }, {
    key: "canStart",
    value: function canStart() {
      return !!this.options.syncStorage && isBrowser();
    }
  }, {
    key: "start",
    value: function start() {
      if (this.canStart()) {
        this.stop();
        window.addEventListener('storage', this.storageListener);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        window.removeEventListener('storage', this.storageListener);
        clearTimeout(this.syncTimeout);
        this.started = false;
      }
    }
  }]);
  return SyncStorageService;
}();

function _createForOfIteratorHelper$7(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$7(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$7(o, minLen) { var _context4; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$7(o, minLen); var n = _sliceInstanceProperty(_context4 = Object.prototype.toString.call(o)).call(_context4, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$7(o, minLen); }
function _arrayLikeToArray$7(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var ServiceManager = function () {
  function ServiceManager(sdk) {
    var _this = this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, ServiceManager);
    this.sdk = sdk;
    var _sdk$tokenManager$get = sdk.tokenManager.getOptions(),
        autoRenew = _sdk$tokenManager$get.autoRenew,
        autoRemove = _sdk$tokenManager$get.autoRemove,
        syncStorage = _sdk$tokenManager$get.syncStorage;
    this.options = _Object$assign({}, ServiceManager.defaultOptions, {
      autoRenew: autoRenew,
      autoRemove: autoRemove,
      syncStorage: syncStorage
    }, options);
    this.started = false;
    this.services = new _Map();
    this.onLeaderDuplicate = this.onLeaderDuplicate.bind(this);
    this.onLeader = this.onLeader.bind(this);
    ServiceManager.knownServices.forEach(function (name) {
      var svc = _this.createService(name);
      if (svc) {
        _this.services.set(name, svc);
      }
    });
  }
  _createClass(ServiceManager, [{
    key: "onLeader",
    value: function onLeader() {
      if (this.started) {
        this.startServices();
      }
    }
  }, {
    key: "onLeaderDuplicate",
    value: function onLeaderDuplicate() {}
  }, {
    key: "isLeader",
    value: function isLeader() {
      var _a;
      return !!((_a = this.elector) === null || _a === void 0 ? void 0 : _a.isLeader);
    }
  }, {
    key: "hasLeader",
    value: function hasLeader() {
      var _a;
      return (_a = this.elector) === null || _a === void 0 ? void 0 : _a.hasLeader;
    }
  }, {
    key: "isLeaderRequired",
    value: function isLeaderRequired() {
      var _context;
      return _toConsumableArray(_valuesInstanceProperty(_context = this.services).call(_context)).some(function (srv) {
        return srv.requiresLeadership();
      });
    }
  }, {
    key: "start",
    value: function start() {
      if (this.started) {
        return;
      }
      if (this.isLeaderRequired()) {
        this.startElector();
      }
      this.startServices();
      this.started = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.stopElector();
      this.stopServices();
      this.started = false;
    }
  }, {
    key: "getService",
    value: function getService(name) {
      return this.services.get(name);
    }
  }, {
    key: "startServices",
    value: function startServices() {
      var _context2;
      var _iterator = _createForOfIteratorHelper$7(_valuesInstanceProperty(_context2 = this.services).call(_context2)),
          _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var srv = _step.value;
          var canStart = srv.canStart() && !srv.isStarted() && (srv.requiresLeadership() ? this.isLeader() : true);
          if (canStart) {
            srv.start();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "stopServices",
    value: function stopServices() {
      var _context3;
      var _iterator2 = _createForOfIteratorHelper$7(_valuesInstanceProperty(_context3 = this.services).call(_context3)),
          _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var srv = _step2.value;
          srv.stop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "startElector",
    value: function startElector() {
      this.stopElector();
      if (ServiceManager.canUseLeaderElection()) {
        if (!this.channel) {
          var broadcastChannelName = this.options.broadcastChannelName;
          this.channel = new BroadcastChannel(broadcastChannelName);
        }
        if (!this.elector) {
          this.elector = createLeaderElection(this.channel);
          this.elector.onduplicate = this.onLeaderDuplicate;
          this.elector.awaitLeadership().then(this.onLeader);
        }
      }
    }
  }, {
    key: "stopElector",
    value: function stopElector() {
      var _a, _b;
      if (this.elector) {
        (_a = this.elector) === null || _a === void 0 ? void 0 : _a.die();
        this.elector = undefined;
        (_b = this.channel) === null || _b === void 0 ? void 0 : _b.close();
        this.channel = undefined;
      }
    }
  }, {
    key: "createService",
    value: function createService(name) {
      var tokenManager = this.sdk.tokenManager;
      var service;
      switch (name) {
        case 'autoRenew':
          service = new AutoRenewService(tokenManager, _Object$assign({}, this.options));
          break;
        case 'syncStorage':
          service = new SyncStorageService(tokenManager, _Object$assign({}, this.options));
          break;
        default:
          throw new Error("Unknown service ".concat(name));
      }
      return service;
    }
  }], [{
    key: "canUseLeaderElection",
    value: function canUseLeaderElection() {
      return isBrowser();
    }
  }]);
  return ServiceManager;
}();
ServiceManager.knownServices = ['autoRenew', 'syncStorage'];
ServiceManager.defaultOptions = {
  autoRenew: true,
  autoRemove: true,
  syncStorage: true
};

var PromiseQueue = function () {
  function PromiseQueue() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      quiet: false
    };
    _classCallCheck(this, PromiseQueue);
    this.queue = [];
    this.running = false;
    this.options = options;
  }
  _createClass(PromiseQueue, [{
    key: "push",
    value: function push(method, thisObject) {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      return new _Promise(function (resolve, reject) {
        if (_this.queue.length > 0) {
          if (_this.options.quiet !== false) {
            warn('Async method is being called but another async method is already running. ' + 'The new method will be delayed until the previous method completes.');
          }
        }
        _this.queue.push({
          method: method,
          thisObject: thisObject,
          args: args,
          resolve: resolve,
          reject: reject
        });
        _this.run();
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;
      if (this.running) {
        return;
      }
      if (this.queue.length === 0) {
        return;
      }
      this.running = true;
      var queueItem = this.queue.shift();
      var res = queueItem.method.apply(queueItem.thisObject, queueItem.args);
      if (isPromise(res)) {
        res.then(queueItem.resolve, queueItem.reject).finally(function () {
          _this2.running = false;
          _this2.run();
        });
      } else {
        queueItem.resolve(res);
        this.running = false;
        this.run();
      }
    }
  }]);
  return PromiseQueue;
}();

function fingerprint(sdk, options) {
  options = options || {};
  if (!isFingerprintSupported()) {
    return _Promise.reject(new AuthSdkError('Fingerprinting is not supported on this device'));
  }
  var timeout;
  var iframe;
  var listener;
  var promise = new _Promise(function (resolve, reject) {
    iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    listener = function listener(e) {
      if (!e || !e.data || e.origin !== sdk.getIssuerOrigin()) {
        return;
      }
      try {
        var msg = JSON.parse(e.data);
      } catch (err) {
        return;
      }
      if (!msg) {
        return;
      }
      if (msg.type === 'FingerprintAvailable') {
        return resolve(msg.fingerprint);
      }
      if (msg.type === 'FingerprintServiceReady') {
        e.source.postMessage(_JSON$stringify({
          type: 'GetFingerprint'
        }), e.origin);
      }
    };
    addListener(window, 'message', listener);
    iframe.src = sdk.getIssuerOrigin() + '/auth/services/devicefingerprint';
    document.body.appendChild(iframe);
    timeout = setTimeout(function () {
      reject(new AuthSdkError('Fingerprinting timed out'));
    }, (options === null || options === void 0 ? void 0 : options.timeout) || 15000);
  });
  return promise.finally(function () {
    clearTimeout(timeout);
    removeListener(window, 'message', listener);
    if (document.body.contains(iframe)) {
      iframe.parentElement.removeChild(iframe);
    }
  });
}

var INITIAL_AUTH_STATE = null;
var DEFAULT_PENDING = {
  updateAuthStatePromise: null,
  canceledTimes: 0
};
var EVENT_AUTH_STATE_CHANGE = 'authStateChange';
var MAX_PROMISE_CANCEL_TIMES = 10;
var isSameAuthState = function isSameAuthState(prevState, state) {
  if (!prevState) {
    return false;
  }
  return prevState.isAuthenticated === state.isAuthenticated && _JSON$stringify(prevState.idToken) === _JSON$stringify(state.idToken) && _JSON$stringify(prevState.accessToken) === _JSON$stringify(state.accessToken) && prevState.error === state.error;
};
var AuthStateManager = function () {
  function AuthStateManager(sdk) {
    var _this = this;
    _classCallCheck(this, AuthStateManager);
    if (!sdk.emitter) {
      throw new AuthSdkError('Emitter should be initialized before AuthStateManager');
    }
    this._sdk = sdk;
    this._pending = _Object$assign({}, DEFAULT_PENDING);
    this._authState = INITIAL_AUTH_STATE;
    this._logOptions = {};
    this._prevAuthState = null;
    this._transformQueue = new PromiseQueue({
      quiet: true
    });
    sdk.tokenManager.on(EVENT_ADDED, function (key, token) {
      _this._setLogOptions({
        event: EVENT_ADDED,
        key: key,
        token: token
      });
      _this.updateAuthState();
    });
    sdk.tokenManager.on(EVENT_REMOVED, function (key, token) {
      _this._setLogOptions({
        event: EVENT_REMOVED,
        key: key,
        token: token
      });
      _this.updateAuthState();
    });
  }
  _createClass(AuthStateManager, [{
    key: "_setLogOptions",
    value: function _setLogOptions(options) {
      this._logOptions = options;
    }
  }, {
    key: "getAuthState",
    value: function getAuthState() {
      return this._authState;
    }
  }, {
    key: "getPreviousAuthState",
    value: function getPreviousAuthState() {
      return this._prevAuthState;
    }
  }, {
    key: "updateAuthState",
    value: function () {
      var _updateAuthState = _asyncToGenerator( _regeneratorRuntime.mark(function _callee() {
        var _this2 = this;
        var _this$_sdk$options, transformAuthState, devMode, log, emitAuthStateChange, finalPromise, cancelablePromise;
        return _regeneratorRuntime.wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$_sdk$options = this._sdk.options, transformAuthState = _this$_sdk$options.transformAuthState, devMode = _this$_sdk$options.devMode;
                log = function log(status) {
                  var _context;
                  var _this2$_logOptions = _this2._logOptions,
                      event = _this2$_logOptions.event,
                      key = _this2$_logOptions.key,
                      token = _this2$_logOptions.token;
                  getConsole().group(_concatInstanceProperty(_context = "OKTA-AUTH-JS:updateAuthState: Event:".concat(event, " Status:")).call(_context, status));
                  getConsole().log(key, token);
                  getConsole().log('Current authState', _this2._authState);
                  getConsole().groupEnd();
                  _this2._logOptions = {};
                };
                emitAuthStateChange = function emitAuthStateChange(authState) {
                  if (isSameAuthState(_this2._authState, authState)) {
                    devMode && log('unchanged');
                    return;
                  }
                  _this2._prevAuthState = _this2._authState;
                  _this2._authState = authState;
                  _this2._sdk.emitter.emit(EVENT_AUTH_STATE_CHANGE, _Object$assign({}, authState));
                  devMode && log('emitted');
                };
                finalPromise = function finalPromise(origPromise) {
                  return _this2._pending.updateAuthStatePromise.then(function () {
                    var curPromise = _this2._pending.updateAuthStatePromise;
                    if (curPromise && curPromise !== origPromise) {
                      return finalPromise(curPromise);
                    }
                    return _this2.getAuthState();
                  });
                };
                if (!this._pending.updateAuthStatePromise) {
                  _context2.next = 11;
                  break;
                }
                if (!(this._pending.canceledTimes >= MAX_PROMISE_CANCEL_TIMES)) {
                  _context2.next = 10;
                  break;
                }
                devMode && log('terminated');
                return _context2.abrupt("return", finalPromise(this._pending.updateAuthStatePromise));
              case 10:
                this._pending.updateAuthStatePromise.cancel();
              case 11:
                cancelablePromise = new PCancelable(function (resolve, _, onCancel) {
                  onCancel.shouldReject = false;
                  onCancel(function () {
                    _this2._pending.updateAuthStatePromise = null;
                    _this2._pending.canceledTimes = _this2._pending.canceledTimes + 1;
                    devMode && log('canceled');
                  });
                  var emitAndResolve = function emitAndResolve(authState) {
                    if (cancelablePromise.isCanceled) {
                      resolve();
                      return;
                    }
                    emitAuthStateChange(authState);
                    resolve();
                    _this2._pending = _Object$assign({}, DEFAULT_PENDING);
                  };
                  _this2._sdk.isAuthenticated().then(function () {
                    if (cancelablePromise.isCanceled) {
                      resolve();
                      return;
                    }
                    var _this2$_sdk$tokenMana = _this2._sdk.tokenManager.getTokensSync(),
                        accessToken = _this2$_sdk$tokenMana.accessToken,
                        idToken = _this2$_sdk$tokenMana.idToken,
                        refreshToken = _this2$_sdk$tokenMana.refreshToken;
                    var authState = {
                      accessToken: accessToken,
                      idToken: idToken,
                      refreshToken: refreshToken,
                      isAuthenticated: !!(accessToken && idToken)
                    };
                    var promise = transformAuthState ? _this2._transformQueue.push(transformAuthState, null, _this2._sdk, authState) : _Promise.resolve(authState);
                    promise.then(function (authState) {
                      return emitAndResolve(authState);
                    }).catch(function (error) {
                      return emitAndResolve({
                        accessToken: accessToken,
                        idToken: idToken,
                        refreshToken: refreshToken,
                        isAuthenticated: false,
                        error: error
                      });
                    });
                  });
                });
                this._pending.updateAuthStatePromise = cancelablePromise;
                return _context2.abrupt("return", finalPromise(cancelablePromise));
              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, this);
      }));
      function updateAuthState() {
        return _updateAuthState.apply(this, arguments);
      }
      return updateAuthState;
    }()
  }, {
    key: "subscribe",
    value: function subscribe(handler) {
      this._sdk.emitter.on(EVENT_AUTH_STATE_CHANGE, handler);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(handler) {
      this._sdk.emitter.off(EVENT_AUTH_STATE_CHANGE, handler);
    }
  }]);
  return AuthStateManager;
}();

var SavedObject = function () {
  function SavedObject(storage, storageName) {
    _classCallCheck(this, SavedObject);
    if (!storage) {
      throw new AuthSdkError('"storage" is required');
    }
    if (typeof storageName !== 'string' || !storageName.length) {
      throw new AuthSdkError('"storageName" is required');
    }
    this.storageName = storageName;
    this.storageProvider = storage;
  }
  _createClass(SavedObject, [{
    key: "getItem",
    value: function getItem(key) {
      return this.getStorage()[key];
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      return this.updateStorage(key, value);
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      return this.clearStorage(key);
    }
  }, {
    key: "getStorage",
    value: function getStorage() {
      var storageString = this.storageProvider.getItem(this.storageName);
      storageString = storageString || '{}';
      try {
        return JSON.parse(storageString);
      } catch (e) {
        throw new AuthSdkError('Unable to parse storage string: ' + this.storageName);
      }
    }
  }, {
    key: "setStorage",
    value: function setStorage(obj) {
      try {
        var storageString = obj ? _JSON$stringify(obj) : '{}';
        this.storageProvider.setItem(this.storageName, storageString);
      } catch (e) {
        throw new AuthSdkError('Unable to set storage: ' + this.storageName);
      }
    }
  }, {
    key: "clearStorage",
    value: function clearStorage(key) {
      if (!key) {
        if (this.storageProvider.removeItem) {
          this.storageProvider.removeItem(this.storageName);
        } else {
          this.setStorage();
        }
        return;
      }
      var obj = this.getStorage();
      delete obj[key];
      this.setStorage(obj);
    }
  }, {
    key: "updateStorage",
    value: function updateStorage(key, value) {
      var obj = this.getStorage();
      obj[key] = value;
      this.setStorage(obj);
    }
  }]);
  return SavedObject;
}();

function logServerSideMemoryStorageWarning(options) {
  if (!isBrowser() && !options.storageProvider && !options.storageProvider) {
    warn('Memory storage can only support simple single user use case on server side, please provide custom storageProvider or storageKey if advanced scenarios need to be supported.');
  }
}
var StorageManager = function () {
  function StorageManager(storageManagerOptions, cookieOptions, storageUtil) {
    _classCallCheck(this, StorageManager);
    this.storageManagerOptions = storageManagerOptions;
    this.cookieOptions = cookieOptions;
    this.storageUtil = storageUtil;
  }
  _createClass(StorageManager, [{
    key: "getOptionsForSection",
    value: function getOptionsForSection(sectionName, overrideOptions) {
      return _Object$assign({}, this.storageManagerOptions[sectionName], overrideOptions);
    }
  }, {
    key: "getStorage",
    value: function getStorage(options) {
      options = _Object$assign({}, this.cookieOptions, options);
      if (options.storageProvider) {
        return options.storageProvider;
      }
      var _options = options,
          storageType = _options.storageType,
          storageTypes = _options.storageTypes;
      if (storageType === 'sessionStorage') {
        options.sessionCookie = true;
      }
      if (storageType && storageTypes) {
        var idx = _indexOfInstanceProperty(storageTypes).call(storageTypes, storageType);
        if (idx >= 0) {
          storageTypes = _sliceInstanceProperty(storageTypes).call(storageTypes, idx);
          storageType = undefined;
        }
      }
      if (!storageType) {
        storageType = this.storageUtil.findStorageType(storageTypes);
      }
      return this.storageUtil.getStorageByType(storageType, options);
    }
  }, {
    key: "getTransactionStorage",
    value: function getTransactionStorage(options) {
      options = this.getOptionsForSection('transaction', options);
      logServerSideMemoryStorageWarning(options);
      var storage = this.getStorage(options);
      var storageKey = options.storageKey || TRANSACTION_STORAGE_NAME;
      return new SavedObject(storage, storageKey);
    }
  }, {
    key: "getSharedTansactionStorage",
    value: function getSharedTansactionStorage(options) {
      options = this.getOptionsForSection('shared-transaction', options);
      logServerSideMemoryStorageWarning(options);
      var storage = this.getStorage(options);
      var storageKey = options.storageKey || SHARED_TRANSACTION_STORAGE_NAME;
      return new SavedObject(storage, storageKey);
    }
  }, {
    key: "getOriginalUriStorage",
    value: function getOriginalUriStorage(options) {
      options = this.getOptionsForSection('original-uri', options);
      logServerSideMemoryStorageWarning(options);
      var storage = this.getStorage(options);
      var storageKey = options.storageKey || ORIGINAL_URI_STORAGE_NAME;
      return new SavedObject(storage, storageKey);
    }
  }, {
    key: "getIdxResponseStorage",
    value: function getIdxResponseStorage(options) {
      var storage;
      if (isBrowser()) {
        try {
          storage = this.storageUtil.getStorageByType('memory', options);
        } catch (e) {
          warn('No response storage found, you may want to provide custom implementation for intermediate idx responses to optimize the network traffic');
        }
      } else {
        var transactionStorage = this.getTransactionStorage(options);
        if (transactionStorage) {
          storage = {
            getItem: function getItem(key) {
              var transaction = transactionStorage.getStorage();
              if (transaction && transaction[key]) {
                return transaction[key];
              }
              return null;
            },
            setItem: function setItem(key, val) {
              var transaction = transactionStorage.getStorage();
              if (!transaction) {
                throw new AuthSdkError('Transaction has been cleared, failed to save idxState');
              }
              transaction[key] = val;
              transactionStorage.setStorage(transaction);
            },
            removeItem: function removeItem(key) {
              var transaction = transactionStorage.getStorage();
              if (!transaction) {
                return;
              }
              delete transaction[key];
              transactionStorage.setStorage(transaction);
            }
          };
        }
      }
      if (!storage) {
        return null;
      }
      return new SavedObject(storage, IDX_RESPONSE_STORAGE_NAME);
    }
  }, {
    key: "getTokenStorage",
    value: function getTokenStorage(options) {
      options = this.getOptionsForSection('token', options);
      logServerSideMemoryStorageWarning(options);
      var storage = this.getStorage(options);
      var storageKey = options.storageKey || TOKEN_STORAGE_NAME;
      return new SavedObject(storage, storageKey);
    }
  }, {
    key: "getHttpCache",
    value: function getHttpCache(options) {
      options = this.getOptionsForSection('cache', options);
      var storage = this.getStorage(options);
      var storageKey = options.storageKey || CACHE_STORAGE_NAME;
      return new SavedObject(storage, storageKey);
    }
  }, {
    key: "getLegacyPKCEStorage",
    value: function getLegacyPKCEStorage(options) {
      options = this.getOptionsForSection('legacy-pkce', options);
      var storage = this.getStorage(options);
      var storageKey = options.storageKey || PKCE_STORAGE_NAME;
      return new SavedObject(storage, storageKey);
    }
  }, {
    key: "getLegacyOAuthParamsStorage",
    value: function getLegacyOAuthParamsStorage(options) {
      options = this.getOptionsForSection('legacy-oauth-params', options);
      var storage = this.getStorage(options);
      var storageKey = options.storageKey || REDIRECT_OAUTH_PARAMS_NAME;
      return new SavedObject(storage, storageKey);
    }
  }]);
  return StorageManager;
}();

function isRawIdxResponse(obj) {
  return obj && obj.version;
}
function isIdxResponse(obj) {
  return obj && isRawIdxResponse(obj.rawIdxState);
}

var MAX_ENTRY_LIFETIME = 30 * 60 * 1000;
function pruneSharedStorage(storageManager) {
  var sharedStorage = storageManager.getSharedTansactionStorage();
  var entries = sharedStorage.getStorage();
  _Object$keys(entries).forEach(function (state) {
    var entry = entries[state];
    var age = Date.now() - entry.dateCreated;
    if (age > MAX_ENTRY_LIFETIME) {
      delete entries[state];
    }
  });
  sharedStorage.setStorage(entries);
}
function saveTransactionToSharedStorage(storageManager, state, meta) {
  var sharedStorage = storageManager.getSharedTansactionStorage();
  var entries = sharedStorage.getStorage();
  entries[state] = {
    dateCreated: Date.now(),
    transaction: meta
  };
  sharedStorage.setStorage(entries);
}
function loadTransactionFromSharedStorage(storageManager, state) {
  var sharedStorage = storageManager.getSharedTansactionStorage();
  var entries = sharedStorage.getStorage();
  var entry = entries[state];
  if (entry && entry.transaction && isTransactionMeta(entry.transaction)) {
    return entry.transaction;
  }
  return null;
}
function clearTransactionFromSharedStorage(storageManager, state) {
  var sharedStorage = storageManager.getSharedTansactionStorage();
  var entries = sharedStorage.getStorage();
  delete entries[state];
  sharedStorage.setStorage(entries);
}

var TransactionManager = function () {
  function TransactionManager(options) {
    _classCallCheck(this, TransactionManager);
    this.storageManager = options.storageManager;
    this.legacyWidgetSupport = options.legacyWidgetSupport === false ? false : true;
    this.saveNonceCookie = options.saveNonceCookie === false ? false : true;
    this.saveStateCookie = options.saveStateCookie === false ? false : true;
    this.saveParamsCookie = options.saveParamsCookie === false ? false : true;
    this.enableSharedStorage = options.enableSharedStorage === false ? false : true;
    this.saveLastResponse = options.saveLastResponse === false ? false : true;
    this.options = options;
  }
  _createClass(TransactionManager, [{
    key: "clear",
    value: function clear() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var transactionStorage = this.storageManager.getTransactionStorage();
      var meta = transactionStorage.getStorage();
      transactionStorage.clearStorage();
      if (this.enableSharedStorage && options.clearSharedStorage !== false) {
        var state = options.state || (meta === null || meta === void 0 ? void 0 : meta.state);
        if (state) {
          clearTransactionFromSharedStorage(this.storageManager, state);
        }
      }
      if (options.clearIdxResponse !== false) {
        this.clearIdxResponse();
      }
      if (!this.legacyWidgetSupport) {
        return;
      }
      if (options.oauth) {
        this.clearLegacyOAuthParams();
      }
      if (options.pkce) {
        this.clearLegacyPKCE();
      }
    }
  }, {
    key: "save",
    value: function save(meta) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var storage = this.storageManager.getTransactionStorage();
      var obj = storage.getStorage();
      if (isTransactionMeta(obj) && !options.muteWarning) {
        warn('a saved auth transaction exists in storage. This may indicate another auth flow is already in progress.');
      }
      storage.setStorage(meta);
      if (this.enableSharedStorage && meta.state) {
        saveTransactionToSharedStorage(this.storageManager, meta.state, meta);
      }
      if (!options.oauth) {
        return;
      }
      if (this.saveNonceCookie || this.saveStateCookie || this.saveParamsCookie) {
        var cookieStorage = this.storageManager.getStorage({
          storageType: 'cookie'
        });
        if (this.saveParamsCookie) {
          var responseType = meta.responseType,
              state = meta.state,
              nonce = meta.nonce,
              scopes = meta.scopes,
              clientId = meta.clientId,
              urls = meta.urls,
              ignoreSignature = meta.ignoreSignature;
          var oauthParams = {
            responseType: responseType,
            state: state,
            nonce: nonce,
            scopes: scopes,
            clientId: clientId,
            urls: urls,
            ignoreSignature: ignoreSignature
          };
          cookieStorage.setItem(REDIRECT_OAUTH_PARAMS_NAME, _JSON$stringify(oauthParams), null);
        }
        if (this.saveNonceCookie && meta.nonce) {
          cookieStorage.setItem(REDIRECT_NONCE_COOKIE_NAME, meta.nonce, null);
        }
        if (this.saveStateCookie && meta.state) {
          cookieStorage.setItem(REDIRECT_STATE_COOKIE_NAME, meta.state, null);
        }
      }
    }
  }, {
    key: "exists",
    value: function exists() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        var meta = this.load(options);
        return !!meta;
      } catch (_a) {
        return false;
      }
    }
  }, {
    key: "load",
    value: function load() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var meta;
      if (this.enableSharedStorage && options.state) {
        pruneSharedStorage(this.storageManager);
        meta = loadTransactionFromSharedStorage(this.storageManager, options.state);
        if (isTransactionMeta(meta)) {
          return meta;
        }
      }
      var storage = this.storageManager.getTransactionStorage();
      meta = storage.getStorage();
      if (isTransactionMeta(meta)) {
        return meta;
      }
      if (!this.legacyWidgetSupport) {
        return null;
      }
      if (options.oauth) {
        try {
          var oauthParams = this.loadLegacyOAuthParams();
          _Object$assign(meta, oauthParams);
        } finally {
          this.clearLegacyOAuthParams();
        }
      }
      if (options.pkce) {
        try {
          var pkceMeta = this.loadLegacyPKCE();
          _Object$assign(meta, pkceMeta);
        } finally {
          this.clearLegacyPKCE();
        }
      }
      if (isTransactionMeta(meta)) {
        return meta;
      }
      return null;
    }
  }, {
    key: "clearLegacyPKCE",
    value: function clearLegacyPKCE() {
      var storage;
      if (this.storageManager.storageUtil.testStorageType('localStorage')) {
        storage = this.storageManager.getLegacyPKCEStorage({
          storageType: 'localStorage'
        });
        storage.clearStorage();
      }
      if (this.storageManager.storageUtil.testStorageType('sessionStorage')) {
        storage = this.storageManager.getLegacyPKCEStorage({
          storageType: 'sessionStorage'
        });
        storage.clearStorage();
      }
    }
  }, {
    key: "loadLegacyPKCE",
    value: function loadLegacyPKCE() {
      var storage;
      var obj;
      if (this.storageManager.storageUtil.testStorageType('localStorage')) {
        storage = this.storageManager.getLegacyPKCEStorage({
          storageType: 'localStorage'
        });
        obj = storage.getStorage();
        if (obj && obj.codeVerifier) {
          return obj;
        }
      }
      if (this.storageManager.storageUtil.testStorageType('sessionStorage')) {
        storage = this.storageManager.getLegacyPKCEStorage({
          storageType: 'sessionStorage'
        });
        obj = storage.getStorage();
        if (obj && obj.codeVerifier) {
          return obj;
        }
      }
      throw new AuthSdkError('Could not load PKCE codeVerifier from storage. This may indicate the auth flow has already completed or multiple auth flows are executing concurrently.', undefined);
    }
  }, {
    key: "clearLegacyOAuthParams",
    value: function clearLegacyOAuthParams() {
      var storage;
      if (this.storageManager.storageUtil.testStorageType('sessionStorage')) {
        storage = this.storageManager.getLegacyOAuthParamsStorage({
          storageType: 'sessionStorage'
        });
        storage.clearStorage();
      }
      if (this.storageManager.storageUtil.testStorageType('cookie')) {
        storage = this.storageManager.getLegacyOAuthParamsStorage({
          storageType: 'cookie'
        });
        storage.clearStorage();
      }
    }
  }, {
    key: "loadLegacyOAuthParams",
    value: function loadLegacyOAuthParams() {
      var storage;
      var oauthParams;
      if (this.storageManager.storageUtil.testStorageType('sessionStorage')) {
        storage = this.storageManager.getLegacyOAuthParamsStorage({
          storageType: 'sessionStorage'
        });
        oauthParams = storage.getStorage();
      }
      if (isOAuthTransactionMeta(oauthParams)) {
        return oauthParams;
      }
      if (this.storageManager.storageUtil.testStorageType('cookie')) {
        storage = this.storageManager.getLegacyOAuthParamsStorage({
          storageType: 'cookie'
        });
        oauthParams = storage.getStorage();
      }
      if (isOAuthTransactionMeta(oauthParams)) {
        return oauthParams;
      }
      throw new AuthSdkError('Unable to retrieve OAuth redirect params from storage');
    }
  }, {
    key: "saveIdxResponse",
    value: function saveIdxResponse(data) {
      if (!this.saveLastResponse) {
        return;
      }
      var storage = this.storageManager.getIdxResponseStorage();
      if (!storage) {
        return;
      }
      storage.setStorage(data);
    }
  }, {
    key: "loadIdxResponse",
    value: function loadIdxResponse(options) {
      if (!this.saveLastResponse) {
        return null;
      }
      var storage = this.storageManager.getIdxResponseStorage();
      if (!storage) {
        return null;
      }
      var storedValue = storage.getStorage();
      if (!storedValue || !isRawIdxResponse(storedValue.rawIdxResponse)) {
        return null;
      }
      if (options) {
        var stateHandle = options.stateHandle,
            interactionHandle = options.interactionHandle;
        if (stateHandle && storedValue.stateHandle !== stateHandle) {
          return null;
        }
        if (interactionHandle && storedValue.interactionHandle !== interactionHandle) {
          return null;
        }
      }
      return storedValue;
    }
  }, {
    key: "clearIdxResponse",
    value: function clearIdxResponse() {
      if (!this.saveLastResponse) {
        return;
      }
      var storage = this.storageManager.getIdxResponseStorage();
      storage === null || storage === void 0 ? void 0 : storage.clearStorage();
    }
  }]);
  return TransactionManager;
}();

function assertValidConfig(args) {
  args = args || {};
  var scopes = args.scopes;
  if (scopes && !Array.isArray(scopes)) {
    throw new AuthSdkError('scopes must be a array of strings. ' + 'Required usage: new OktaAuth({scopes: ["openid", "email"]})');
  }
  var issuer = args.issuer;
  if (!issuer) {
    throw new AuthSdkError('No issuer passed to constructor. ' + 'Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com/oauth2/{authServerId}"})');
  }
  var isUrlRegex = new RegExp('^http?s?://.+');
  if (!isUrlRegex.test(issuer)) {
    throw new AuthSdkError('Issuer must be a valid URL. ' + 'Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com/oauth2/{authServerId}"})');
  }
  if (_indexOfInstanceProperty(issuer).call(issuer, '-admin.') !== -1) {
    throw new AuthSdkError('Issuer URL passed to constructor contains "-admin" in subdomain. ' + 'Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com})');
  }
}

function _createForOfIteratorHelper$6(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$6(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$6(o, minLen) { var _context5; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$6(o, minLen); var n = _sliceInstanceProperty(_context5 = Object.prototype.toString.call(o)).call(_context5, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$6(o, minLen); }
function _arrayLikeToArray$6(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var appJsonContentTypeRegex = /application\/\w*\+?json/;
function readData(response) {
  var _context;
  if (response.headers.get('Content-Type') &&
  _indexOfInstanceProperty(_context = response.headers.get('Content-Type').toLowerCase()).call(_context, 'application/json') >= 0) {
    return response.json()
    .catch(function (e) {
      return {
        error: e,
        errorSummary: 'Could not parse server response'
      };
    });
  } else {
    return response.text();
  }
}
function formatResult(status, data, response) {
  var _context2;
  var isObject = _typeof(data) === 'object';
  var headers = {};
  var _iterator = _createForOfIteratorHelper$6(_entriesInstanceProperty(_context2 = response.headers).call(_context2)),
      _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var pair = _step.value;
      headers[pair[0]] = pair[1];
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var result = {
    responseText: isObject ? _JSON$stringify(data) : data,
    status: status,
    headers: headers
  };
  if (isObject) {
    result.responseType = 'json';
    result.responseJSON = data;
  }
  return result;
}
function fetchRequest(method, url, args) {
  var body = args.data;
  var headers = args.headers || {};
  var contentType = headers['Content-Type'] || headers['content-type'] || '';
  if (body && typeof body !== 'string') {
    if (appJsonContentTypeRegex.test(contentType)) {
      body = _JSON$stringify(body);
    } else if (contentType === 'application/x-www-form-urlencoded') {
      var _context3;
      body = _mapInstanceProperty(_context3 = _Object$entries(body)).call(_context3, function (_ref) {
        var _context4;
        var _ref2 = _slicedToArray(_ref, 2),
            param = _ref2[0],
            value = _ref2[1];
        return _concatInstanceProperty(_context4 = "".concat(param, "=")).call(_context4, encodeURIComponent(value));
      }).join('&');
    }
  }
  var fetch = window.fetch || crossFetch;
  var fetchPromise = fetch(url, {
    method: method,
    headers: args.headers,
    body: body,
    credentials: args.withCredentials ? 'include' : 'omit'
  });
  if (!fetchPromise.finally) {
    fetchPromise = _Promise.resolve(fetchPromise);
  }
  return fetchPromise.then(function (response) {
    var error = !response.ok;
    var status = response.status;
    return readData(response).then(function (data) {
      return formatResult(status, data, response);
    }).then(function (result) {
      var _a;
      if (error || ((_a = result.responseJSON) === null || _a === void 0 ? void 0 : _a.error)) {
        throw result;
      }
      return result;
    });
  });
}

var sharedStorage = typeof NodeCache === 'function' ? new NodeCache() : null;
var ServerCookies = function () {
  function ServerCookies(nodeCache) {
    _classCallCheck(this, ServerCookies);
    this.nodeCache = nodeCache;
  }
  _createClass(ServerCookies, [{
    key: "set",
    value: function set(name, value, expiresAt) {
      if (!!Date.parse(expiresAt)) {
        var ttl = (Date.parse(expiresAt) - Date.now()) / 1000;
        this.nodeCache.set(name, value, ttl);
      } else {
        this.nodeCache.set(name, value);
      }
      return this.get(name);
    }
  }, {
    key: "get",
    value: function get(name) {
      return this.nodeCache.get(name);
    }
  }, {
    key: "delete",
    value: function _delete(name) {
      return this.nodeCache.del(name);
    }
  }]);
  return ServerCookies;
}();
var ServerStorage = function () {
  function ServerStorage(nodeCache) {
    _classCallCheck(this, ServerStorage);
    this.nodeCache = nodeCache;
    this.storage = new ServerCookies(nodeCache);
  }
  _createClass(ServerStorage, [{
    key: "testStorageType",
    value: function testStorageType(storageType) {
      var supported = false;
      switch (storageType) {
        case 'memory':
          supported = true;
          break;
      }
      return supported;
    }
  }, {
    key: "getStorageByType",
    value: function getStorageByType(storageType) {
      var storageProvider;
      switch (storageType) {
        case 'memory':
          storageProvider = this.getStorage();
          break;
        default:
          throw new AuthSdkError("Unrecognized storage option: ".concat(storageType));
      }
      return storageProvider;
    }
  }, {
    key: "findStorageType",
    value: function findStorageType() {
      return 'memory';
    }
  }, {
    key: "getHttpCache",
    value: function getHttpCache() {
      return null;
    }
  }, {
    key: "getStorage",
    value: function getStorage() {
      var _this = this;
      return {
        getItem: this.nodeCache.get,
        setItem: function setItem(key, value) {
          _this.nodeCache.set(key, value, '2200-01-01T00:00:00.000Z');
        }
      };
    }
  }]);
  return ServerStorage;
}();
var storage = new ServerStorage(sharedStorage);

function getStorage() {
  return storage;
}
var STORAGE_MANAGER_OPTIONS = {
  token: {
    storageTypes: ['memory']
  },
  cache: {
    storageTypes: ['memory']
  },
  transaction: {
    storageTypes: ['memory']
  }
};
var enableSharedStorage = false;
function getCookieSettings() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return args.cookies;
}

function getDefaultOptions() {
  var options = {
    devMode: false,
    httpRequestClient: fetchRequest,
    storageUtil: getStorage(),
    storageManager: STORAGE_MANAGER_OPTIONS,
    transactionManager: {
      enableSharedStorage: enableSharedStorage
    }
  };
  return options;
}
function mergeOptions(options, args) {
  return _Object$assign({}, options, removeNils(args), {
    storageManager: _Object$assign({}, options.storageManager, args.storageManager),
    transactionManager: _Object$assign({}, options.transactionManager, args.transactionManager)
  });
}
function buildOptions() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  assertValidConfig(args);
  args = mergeOptions(getDefaultOptions(), args);
  return removeNils({
    issuer: removeTrailingSlash(args.issuer),
    tokenUrl: removeTrailingSlash(args.tokenUrl),
    authorizeUrl: removeTrailingSlash(args.authorizeUrl),
    userinfoUrl: removeTrailingSlash(args.userinfoUrl),
    revokeUrl: removeTrailingSlash(args.revokeUrl),
    logoutUrl: removeTrailingSlash(args.logoutUrl),
    clientId: args.clientId,
    redirectUri: args.redirectUri,
    state: args.state,
    scopes: args.scopes,
    postLogoutRedirectUri: args.postLogoutRedirectUri,
    responseMode: args.responseMode,
    responseType: args.responseType,
    pkce: args.pkce === false ? false : true,
    useInteractionCodeFlow: args.useInteractionCodeFlow,
    httpRequestClient: args.httpRequestClient,
    transformErrorXHR: args.transformErrorXHR,
    transformAuthState: args.transformAuthState,
    restoreOriginalUri: args.restoreOriginalUri,
    storageUtil: args.storageUtil,
    headers: args.headers,
    devMode: !!args.devMode,
    storageManager: args.storageManager,
    transactionManager: args.transactionManager,
    cookies: getCookieSettings(args, isHTTPS()),
    flow: args.flow,
    codeChallenge: args.codeChallenge,
    codeChallengeMethod: args.codeChallengeMethod,
    recoveryToken: args.recoveryToken,
    activationToken: args.activationToken,
    ignoreSignature: !!args.ignoreSignature,
    clientSecret: args.clientSecret
  });
}

function createTransactionMeta(_x) {
  return _createTransactionMeta.apply(this, arguments);
}
function _createTransactionMeta() {
  _createTransactionMeta = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(authClient) {
    var options,
        tokenParams,
        pkceMeta,
        _Object$assign2,
        _Object$assign2$flow,
        flow,
        _Object$assign2$withC,
        withCredentials,
        _Object$assign2$activ,
        activationToken,
        _Object$assign2$recov,
        recoveryToken,
        meta,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _context.next = 3;
            return authClient.token.prepareTokenParams(options);
          case 3:
            tokenParams = _context.sent;
            pkceMeta = createOAuthMeta(authClient, tokenParams);
            _Object$assign2 = _Object$assign(_Object$assign({}, authClient.options), options), _Object$assign2$flow = _Object$assign2.flow, flow = _Object$assign2$flow === void 0 ? 'default' : _Object$assign2$flow, _Object$assign2$withC = _Object$assign2.withCredentials, withCredentials = _Object$assign2$withC === void 0 ? true : _Object$assign2$withC, _Object$assign2$activ = _Object$assign2.activationToken, activationToken = _Object$assign2$activ === void 0 ? undefined : _Object$assign2$activ, _Object$assign2$recov = _Object$assign2.recoveryToken, recoveryToken = _Object$assign2$recov === void 0 ? undefined : _Object$assign2$recov;
            meta = _Object$assign(_Object$assign({}, pkceMeta), {
              flow: flow,
              withCredentials: withCredentials,
              activationToken: activationToken,
              recoveryToken: recoveryToken
            });
            return _context.abrupt("return", meta);
          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createTransactionMeta.apply(this, arguments);
}
function hasSavedInteractionHandle(authClient, options) {
  var savedMeta = getSavedTransactionMeta(authClient, options);
  if (savedMeta === null || savedMeta === void 0 ? void 0 : savedMeta.interactionHandle) {
    return true;
  }
  return false;
}
function getSavedTransactionMeta(authClient, options) {
  options = removeNils(options);
  options = _Object$assign(_Object$assign({}, authClient.options), options);
  var savedMeta;
  try {
    savedMeta = authClient.transactionManager.load(options);
  } catch (e) {
  }
  if (!savedMeta) {
    return;
  }
  if (isTransactionMetaValid(savedMeta, options)) {
    return savedMeta;
  }
  warn('Saved transaction meta does not match the current configuration. ' + 'This may indicate that two apps are sharing a storage key.');
}
function getTransactionMeta(_x2, _x3) {
  return _getTransactionMeta.apply(this, arguments);
}
function _getTransactionMeta() {
  _getTransactionMeta = _asyncToGenerator( _regeneratorRuntime.mark(function _callee2(authClient, options) {
    var validExistingMeta;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = removeNils(options);
            options = _Object$assign(_Object$assign({}, authClient.options), options);
            validExistingMeta = getSavedTransactionMeta(authClient, options);
            if (!validExistingMeta) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", validExistingMeta);
          case 5:
            return _context2.abrupt("return", createTransactionMeta(authClient, options));
          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getTransactionMeta.apply(this, arguments);
}
function saveTransactionMeta(authClient, meta) {
  authClient.transactionManager.save(meta, {
    muteWarning: true
  });
}
function clearTransactionMeta(authClient) {
  authClient.transactionManager.clear();
}
function isTransactionMetaValid(meta) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var keys = ['issuer', 'clientId', 'redirectUri', 'state', 'codeChallenge', 'codeChallengeMethod', 'activationToken', 'recoveryToken'];
  if (isTransactionMetaValidForOptions(meta, options, keys) === false) {
    return false;
  }
  var flow = options.flow;
  if (isTransactionMetaValidForFlow(meta, flow) === false) {
    return false;
  }
  return true;
}
function isTransactionMetaValidForFlow(meta, flow) {
  var shouldValidateFlow = flow && flow !== 'default' && flow !== 'proceed';
  if (shouldValidateFlow) {
    if (flow !== meta.flow) {
      return false;
    }
  }
  return true;
}
function isTransactionMetaValidForOptions(meta, options, keys) {
  var mismatch = keys.some(function (key) {
    var value = options[key];
    if (value && value !== meta[key]) {
      return true;
    }
  });
  return !mismatch;
}

function getResponse(meta) {
  return {
    meta: meta,
    interactionHandle: meta.interactionHandle,
    state: meta.state
  };
}
function interact(_x) {
  return _interact.apply(this, arguments);
}
function _interact() {
  _interact = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(authClient) {
    var options,
        meta,
        baseUrl,
        _meta,
        clientId,
        redirectUri,
        state,
        scopes,
        withCredentials,
        codeChallenge,
        codeChallengeMethod,
        activationToken,
        recoveryToken,
        clientSecret,
        url,
        params,
        headers,
        resp,
        interactionHandle,
        newMeta,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            options = removeNils(options);
            meta = getSavedTransactionMeta(authClient, options);
            if (!(meta === null || meta === void 0 ? void 0 : meta.interactionHandle)) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return", getResponse(meta));
          case 5:
            _context.next = 7;
            return createTransactionMeta(authClient, _Object$assign(_Object$assign({}, meta), options));
          case 7:
            meta = _context.sent;
            baseUrl = getOAuthBaseUrl(authClient);
            _meta = meta, clientId = _meta.clientId, redirectUri = _meta.redirectUri, state = _meta.state, scopes = _meta.scopes, withCredentials = _meta.withCredentials, codeChallenge = _meta.codeChallenge, codeChallengeMethod = _meta.codeChallengeMethod, activationToken = _meta.activationToken, recoveryToken = _meta.recoveryToken;
            clientSecret = options.clientSecret || authClient.options.clientSecret;
            withCredentials = withCredentials !== null && withCredentials !== void 0 ? withCredentials : true;
            url = "".concat(baseUrl, "/v1/interact");
            params = {
              client_id: clientId,
              scope: scopes.join(' '),
              redirect_uri: redirectUri,
              code_challenge: codeChallenge,
              code_challenge_method: codeChallengeMethod,
              state: state
            };
            if (activationToken) {
              params.activation_token = activationToken;
            }
            if (recoveryToken) {
              params.recovery_token = recoveryToken;
            }
            if (clientSecret) {
              params.client_secret = clientSecret;
            }
            headers = {
              'Content-Type': 'application/x-www-form-urlencoded'
            };
            _context.next = 20;
            return httpRequest(authClient, {
              method: 'POST',
              url: url,
              headers: headers,
              withCredentials: withCredentials,
              args: params
            });
          case 20:
            resp = _context.sent;
            interactionHandle = resp.interaction_handle;
            newMeta = _Object$assign(_Object$assign({}, meta), {
              interactionHandle: interactionHandle,
              withCredentials: withCredentials,
              state: state,
              scopes: scopes,
              recoveryToken: recoveryToken,
              activationToken: activationToken
            });
            saveTransactionMeta(authClient, newMeta);
            return _context.abrupt("return", getResponse(newMeta));
          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _interact.apply(this, arguments);
}

function _createForOfIteratorHelper$5(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$5(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$5(o, minLen) { var _context; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$5(o, minLen); var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen); }
function _arrayLikeToArray$5(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var isFieldMutable = function isFieldMutable(field) {
  return field.mutable !== false;
};
var divideSingleActionParamsByMutability = function divideSingleActionParamsByMutability(action) {
  var _a, _b;
  var defaultParamsForAction = {};
  var neededParamsForAction = [];
  var immutableParamsForAction = {};
  if (!action.value) {
    neededParamsForAction.push(action);
    return {
      defaultParamsForAction: defaultParamsForAction,
      neededParamsForAction: neededParamsForAction,
      immutableParamsForAction: immutableParamsForAction
    };
  }
  var _iterator = _createForOfIteratorHelper$5(action.value),
      _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var field = _step.value;
      if (isFieldMutable(field)) {
        neededParamsForAction.push(field);
        if ((_a = field.value) !== null && _a !== void 0 ? _a : false) {
          defaultParamsForAction[field.name] = field.value;
        }
      } else {
        immutableParamsForAction[field.name] = (_b = field.value) !== null && _b !== void 0 ? _b : '';
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return {
    defaultParamsForAction: defaultParamsForAction,
    neededParamsForAction: neededParamsForAction,
    immutableParamsForAction: immutableParamsForAction
  };
};
var divideActionParamsByMutability = function divideActionParamsByMutability(actionList) {
  actionList = Array.isArray(actionList) ? actionList : [actionList];
  var neededParams = [];
  var defaultParams = {};
  var immutableParams = {};
  var _iterator2 = _createForOfIteratorHelper$5(actionList),
      _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var action = _step2.value;
      var _divideSingleActionPa = divideSingleActionParamsByMutability(action),
          defaultParamsForAction = _divideSingleActionPa.defaultParamsForAction,
          neededParamsForAction = _divideSingleActionPa.neededParamsForAction,
          immutableParamsForAction = _divideSingleActionPa.immutableParamsForAction;
      neededParams.push(neededParamsForAction);
      defaultParams[action.name] = defaultParamsForAction;
      immutableParams[action.name] = immutableParamsForAction;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return {
    defaultParams: defaultParams,
    neededParams: neededParams,
    immutableParams: immutableParams
  };
};

var generateDirectFetch = function generateDirectFetch(authClient, _ref) {
  var actionDefinition = _ref.actionDefinition,
      _ref$defaultParamsFor = _ref.defaultParamsForAction,
      defaultParamsForAction = _ref$defaultParamsFor === void 0 ? {} : _ref$defaultParamsFor,
      _ref$immutableParamsF = _ref.immutableParamsForAction,
      immutableParamsForAction = _ref$immutableParamsF === void 0 ? {} : _ref$immutableParamsF,
      _ref$toPersist = _ref.toPersist,
      toPersist = _ref$toPersist === void 0 ? {} : _ref$toPersist;
  var target = actionDefinition.href;
  return _asyncToGenerator( _regeneratorRuntime.mark(function _callee() {
    var params,
        _a,
        headers,
        body,
        response,
        _response,
        payload,
        wwwAuthHeader,
        idxResponse,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            headers = {
              'Content-Type': 'application/json',
              'Accept': actionDefinition.accepts || 'application/ion+json'
            };
            body = _JSON$stringify(_Object$assign(_Object$assign(_Object$assign({}, defaultParamsForAction), params), immutableParamsForAction));
            _context.prev = 3;
            _context.next = 6;
            return httpRequest(authClient, {
              url: target,
              method: actionDefinition.method,
              headers: headers,
              args: body,
              withCredentials: (_a = toPersist === null || toPersist === void 0 ? void 0 : toPersist.withCredentials) !== null && _a !== void 0 ? _a : true
            });
          case 6:
            response = _context.sent;
            return _context.abrupt("return", makeIdxState$1(authClient, _Object$assign({}, response), toPersist, true));
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            if (!(!(_context.t0 instanceof AuthApiError) || !(_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.xhr))) {
              _context.next = 14;
              break;
            }
            throw _context.t0;
          case 14:
            _response = _context.t0.xhr;
            payload = _response.responseJSON || JSON.parse(_response.responseText);
            wwwAuthHeader = _response.headers['WWW-Authenticate'] || _response.headers['www-authenticate'];
            idxResponse = makeIdxState$1(authClient, _Object$assign({}, payload), toPersist, false);
            if (_response.status === 401 && wwwAuthHeader === 'Oktadevicejwt realm="Okta Device"') {
              idxResponse.stepUp = true;
            }
            throw idxResponse;
          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 10]]);
  }));
};
var generateIdxAction = function generateIdxAction(authClient, actionDefinition, toPersist) {
  var generator = generateDirectFetch;
  var _divideActionParamsBy = divideActionParamsByMutability(actionDefinition),
      defaultParams = _divideActionParamsBy.defaultParams,
      neededParams = _divideActionParamsBy.neededParams,
      immutableParams = _divideActionParamsBy.immutableParams;
  var action = generator(authClient, {
    actionDefinition: actionDefinition,
    defaultParamsForAction: defaultParams[actionDefinition.name],
    immutableParamsForAction: immutableParams[actionDefinition.name],
    toPersist: toPersist
  });
  action.neededParams = neededParams;
  return action;
};

var generateRemediationFunctions = function generateRemediationFunctions(authClient, remediationValue) {
  var toPersist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _Object$fromEntries(_mapInstanceProperty(remediationValue).call(remediationValue, function (remediation) {
    return [remediation.name, generateIdxAction(authClient, remediation, toPersist)];
  }));
};

var _context;
var SKIP_FIELDS = _Object$fromEntries(_mapInstanceProperty(_context = ['remediation', 'context'
]).call(_context, function (field) {
  return [field, !!'skip this field'];
}));
var parseNonRemediations = function parseNonRemediations(authClient, idxResponse) {
  var _context2;
  var toPersist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var actions = {};
  var context = {};
  _filterInstanceProperty(_context2 = _Object$keys(idxResponse)).call(_context2, function (field) {
    return !SKIP_FIELDS[field];
  }).forEach(function (field) {
    var fieldIsObject = _typeof(idxResponse[field]) === 'object' && !!idxResponse[field];
    if (!fieldIsObject) {
      context[field] = idxResponse[field];
      return;
    }
    if (idxResponse[field].rel) {
      actions[idxResponse[field].name] = generateIdxAction(authClient, idxResponse[field], toPersist);
      return;
    }
    var _a = idxResponse[field],
        fieldValue = _a.value,
        type = _a.type,
        info = __rest(_a, ["value", "type"]);
    context[field] = _Object$assign({
      type: type
    }, info);
    if (type !== 'object') {
      context[field].value = fieldValue;
      return;
    }
    context[field].value = {};
    _Object$entries(fieldValue).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          subField = _ref2[0],
          value = _ref2[1];
      if (value.rel) {
        var _context3;
        actions[_concatInstanceProperty(_context3 = "".concat(field, "-")).call(_context3, subField.name || subField)] = generateIdxAction(authClient, value, toPersist);
      } else {
        context[field].value[subField] = value;
      }
    });
  });
  return {
    context: context,
    actions: actions
  };
};
var expandRelatesTo = function expandRelatesTo(idxResponse, value) {
  _Object$keys(value).forEach(function (k) {
    if (k === 'relatesTo') {
      var query = Array.isArray(value[k]) ? value[k][0] : value[k];
      if (typeof query === 'string') {
        var result = JSONPath({
          path: query,
          json: idxResponse
        })[0];
        if (result) {
          value[k] = result;
          return;
        }
      }
    }
    if (Array.isArray(value[k])) {
      value[k].forEach(function (innerValue) {
        return expandRelatesTo(idxResponse, innerValue);
      });
    }
  });
};
var convertRemediationAction = function convertRemediationAction(authClient, remediation, toPersist) {
  var remediationActions = generateRemediationFunctions(authClient, [remediation], toPersist);
  var actionFn = remediationActions[remediation.name];
  return _Object$assign(_Object$assign({}, remediation), {
    action: actionFn
  });
};
var parseIdxResponse = function parseIdxResponse(authClient, idxResponse) {
  var toPersist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _a;
  var remediationData = ((_a = idxResponse.remediation) === null || _a === void 0 ? void 0 : _a.value) || [];
  remediationData.forEach(function (remediation) {
    return expandRelatesTo(idxResponse, remediation);
  });
  var remediations = _mapInstanceProperty(remediationData).call(remediationData, function (remediation) {
    return convertRemediationAction(authClient, remediation, toPersist);
  });
  var _parseNonRemediations = parseNonRemediations(authClient, idxResponse, toPersist),
      context = _parseNonRemediations.context,
      actions = _parseNonRemediations.actions;
  return {
    remediations: remediations,
    context: context,
    actions: actions
  };
};

function makeIdxState$1(authClient, idxResponse, toPersist, requestDidSucceed) {
  var _a, _b, _c;
  var rawIdxResponse = idxResponse;
  var _parseIdxResponse = parseIdxResponse(authClient, idxResponse, toPersist),
      remediations = _parseIdxResponse.remediations,
      context = _parseIdxResponse.context,
      actions = _parseIdxResponse.actions;
  var neededToProceed = _toConsumableArray(remediations);
  var proceed = function () {
    var _ref = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(remediationChoice) {
      var paramsFromUser,
          remediationChoiceObject,
          _args = arguments;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              paramsFromUser = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              remediationChoiceObject = _findInstanceProperty(remediations).call(remediations, function (remediation) {
                return remediation.name === remediationChoice;
              });
              if (remediationChoiceObject) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return", _Promise.reject("Unknown remediation choice: [".concat(remediationChoice, "]")));
            case 4:
              return _context.abrupt("return", remediationChoiceObject.action(paramsFromUser));
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function proceed(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var findCode = function findCode(item) {
    return item.name === 'interaction_code';
  };
  var interactionCode = (_c = (_b = (_a = rawIdxResponse.successWithInteractionCode) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _findInstanceProperty(_b).call(_b, findCode)) === null || _c === void 0 ? void 0 : _c.value;
  return {
    proceed: proceed,
    neededToProceed: neededToProceed,
    actions: actions,
    context: context,
    rawIdxState: rawIdxResponse,
    interactionCode: interactionCode,
    toPersist: toPersist,
    requestDidSucceed: requestDidSucceed
  };
}

var v1 = {
  makeIdxState: makeIdxState$1
};

var parsersForVersion = function parsersForVersion(version) {
  switch (version) {
    case '1.0.0':
      return v1;
    case undefined:
    case null:
      throw new Error('Api version is required');
    default:
      throw new Error("Unknown api version: ".concat(version, ".  Use an exact semver version."));
  }
};
function validateVersionConfig(version) {
  if (!version) {
    throw new Error('version is required');
  }
  var cleanVersion = (version !== null && version !== void 0 ? version : '').replace(/[^0-9a-zA-Z._-]/, '');
  if (cleanVersion !== version || !version) {
    throw new Error('invalid version supplied - version is required and uses semver syntax');
  }
  parsersForVersion(version);
}
function makeIdxState(authClient, rawIdxResponse) {
  var toPersist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var requestDidSucceed = arguments.length > 3 ? arguments[3] : undefined;
  var _a;
  var version = (_a = rawIdxResponse === null || rawIdxResponse === void 0 ? void 0 : rawIdxResponse.version) !== null && _a !== void 0 ? _a : IDX_API_VERSION;
  validateVersionConfig(version);
  var _parsersForVersion = parsersForVersion(version),
      makeIdxState = _parsersForVersion.makeIdxState;
  return makeIdxState(authClient, rawIdxResponse, toPersist, requestDidSucceed);
}

function introspect(_x) {
  return _introspect.apply(this, arguments);
}
function _introspect() {
  _introspect = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(authClient) {
    var options,
        _a,
        rawIdxResponse,
        requestDidSucceed,
        savedIdxResponse,
        version,
        domain,
        interactionHandle,
        stateHandle,
        _withCredentials,
        url,
        body,
        headers,
        withCredentials,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            savedIdxResponse = authClient.transactionManager.loadIdxResponse(options);
            if (savedIdxResponse) {
              rawIdxResponse = savedIdxResponse.rawIdxResponse;
              requestDidSucceed = savedIdxResponse.requestDidSucceed;
            }
            if (rawIdxResponse) {
              _context.next = 27;
              break;
            }
            version = options.version || IDX_API_VERSION;
            domain = getOAuthDomain(authClient);
            interactionHandle = options.interactionHandle, stateHandle = options.stateHandle;
            _withCredentials = (_a = options.withCredentials) !== null && _a !== void 0 ? _a : true;
            _context.prev = 8;
            requestDidSucceed = true;
            validateVersionConfig(version);
            url = "".concat(domain, "/idp/idx/introspect");
            body = stateHandle ? {
              stateToken: stateHandle
            } : {
              interactionHandle: interactionHandle
            };
            headers = {
              'Content-Type': "application/ion+json; okta-version=".concat(version),
              Accept: "application/ion+json; okta-version=".concat(version)
            };
            _context.next = 16;
            return httpRequest(authClient, {
              method: 'POST',
              url: url,
              headers: headers,
              withCredentials: _withCredentials,
              args: body
            });
          case 16:
            rawIdxResponse = _context.sent;
            _context.next = 27;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](8);
            if (!(isAuthApiError(_context.t0) && _context.t0.xhr && isRawIdxResponse(_context.t0.xhr.responseJSON))) {
              _context.next = 26;
              break;
            }
            rawIdxResponse = _context.t0.xhr.responseJSON;
            requestDidSucceed = false;
            _context.next = 27;
            break;
          case 26:
            throw _context.t0;
          case 27:
            withCredentials = options.withCredentials;
            return _context.abrupt("return", makeIdxState(authClient, rawIdxResponse, {
              withCredentials: withCredentials
            }, requestDidSucceed));
          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[8, 19]]);
  }));
  return _introspect.apply(this, arguments);
}

function getAllValues(idxRemediation) {
  var _a;
  return (_a = idxRemediation.value) === null || _a === void 0 ? void 0 : _mapInstanceProperty(_a).call(_a, function (r) {
    return r.name;
  });
}
function getRequiredValues(idxRemediation) {
  var _a;
  return (_a = idxRemediation.value) === null || _a === void 0 ? void 0 : _reduceInstanceProperty(_a).call(_a, function (required, cur) {
    if (cur.required) {
      required.push(cur.name);
    }
    return required;
  }, []);
}
function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}
function getAuthenticatorFromRemediation(remediation) {
  var _context;
  return _findInstanceProperty(_context = remediation.value).call(_context, function (_ref) {
    var name = _ref.name;
    return name === 'authenticator';
  });
}

function _createForOfIteratorHelper$4(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$4(o, minLen) { var _context; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }
function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function formatAuthenticator(incoming) {
  var authenticator;
  if (isAuthenticator(incoming)) {
    authenticator = incoming;
  } else if (typeof incoming === 'string') {
    authenticator = {
      key: incoming
    };
  } else {
    throw new Error('Invalid format for authenticator');
  }
  return authenticator;
}
function compareAuthenticators(auth1, auth2) {
  if (!auth1 || !auth2) {
    return false;
  }
  if (auth1.id && auth2.id) {
    return auth1.id === auth2.id;
  }
  if (auth1.key && auth2.key) {
    return auth1.key === auth2.key;
  }
  return false;
}
function findMatchedOption(authenticators, options) {
  var option;
  var _iterator = _createForOfIteratorHelper$4(authenticators),
      _step;
  try {
    var _loop = function _loop() {
      var authenticator = _step.value;
      option = _findInstanceProperty(options).call(options, function (_ref) {
        var relatesTo = _ref.relatesTo;
        return relatesTo.key === authenticator.key;
      });
      if (option) {
        return "break";
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ret = _loop();
      if (_ret === "break") break;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return option;
}

function _createForOfIteratorHelper$3(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$3(o, minLen) { var _context11; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = _sliceInstanceProperty(_context11 = Object.prototype.toString.call(o)).call(_context11, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }
function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var Remediator = function () {
  function Remediator(remediation) {
    var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, Remediator);
    this.values = _Object$assign({}, values);
    this.options = _Object$assign({}, options);
    this.formatAuthenticators();
    this.remediation = remediation;
  }
  _createClass(Remediator, [{
    key: "formatAuthenticators",
    value: function formatAuthenticators() {
      var _context2, _context3;
      _valuesInstanceProperty(this).authenticators = _valuesInstanceProperty(this).authenticators || [];
      _valuesInstanceProperty(this).authenticators = _mapInstanceProperty(_context2 = _valuesInstanceProperty(this).authenticators).call(_context2, function (authenticator) {
        return formatAuthenticator(authenticator);
      });
      if (_valuesInstanceProperty(this).authenticator) {
        var authenticator = formatAuthenticator(_valuesInstanceProperty(this).authenticator);
        var hasAuthenticatorInList = _valuesInstanceProperty(this).authenticators.some(function (existing) {
          return compareAuthenticators(authenticator, existing);
        });
        if (!hasAuthenticatorInList) {
          _valuesInstanceProperty(this).authenticators.push(authenticator);
        }
      }
      _valuesInstanceProperty(this).authenticatorsData = _reduceInstanceProperty(_context3 = _valuesInstanceProperty(this).authenticators).call(_context3, function (acc, authenticator) {
        if (_typeof(authenticator) === 'object' && _Object$keys(authenticator).length > 1) {
          acc.push(authenticator);
        }
        return acc;
      }, _valuesInstanceProperty(this).authenticatorsData || []);
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.remediation.name;
    }
  }, {
    key: "canRemediate",
    value: function canRemediate() {
      var _this = this;
      var required = getRequiredValues(this.remediation);
      var needed = _findInstanceProperty(required).call(required, function (key) {
        return !_this.hasData(key);
      });
      if (needed) {
        return false;
      }
      return true;
    }
  }, {
    key: "getData",
    value: function getData(key) {
      var _this2 = this;
      if (!key) {
        var allValues = getAllValues(this.remediation);
        var res = _reduceInstanceProperty(allValues).call(allValues, function (data, key) {
          data[key] = _this2.getData(key);
          return data;
        }, {});
        return res;
      }
      if (typeof this["map".concat(titleCase(key))] === 'function') {
        var _context4;
        var val = this["map".concat(titleCase(key))](_findInstanceProperty(_context4 = this.remediation.value).call(_context4, function (_ref) {
          var name = _ref.name;
          return name === key;
        }));
        if (val) {
          return val;
        }
      }
      if (_mapInstanceProperty(this) && _mapInstanceProperty(this)[key]) {
        var entry = _mapInstanceProperty(this)[key];
        for (var i = 0; i < entry.length; i++) {
          var _val = _valuesInstanceProperty(this)[entry[i]];
          if (_val) {
            return _val;
          }
        }
      }
      return _valuesInstanceProperty(this)[key];
    }
  }, {
    key: "hasData",
    value: function hasData(key
    ) {
      return !!this.getData(key);
    }
  }, {
    key: "getNextStep",
    value: function getNextStep(_context) {
      var name = this.getName();
      var inputs = this.getInputs();
      var authenticator = this.getAuthenticator();
      var type = authenticator === null || authenticator === void 0 ? void 0 : authenticator.type;
      return _Object$assign(_Object$assign({
        name: name,
        inputs: inputs
      }, type && {
        type: type
      }), authenticator && {
        authenticator: authenticator
      });
    }
  }, {
    key: "getInputs",
    value: function getInputs() {
      var _this3 = this;
      var inputs = [];
      var inputsFromRemediation = this.remediation.value || [];
      inputsFromRemediation.forEach(function (inputFromRemediation) {
        var input;
        var name = inputFromRemediation.name,
            type = inputFromRemediation.type,
            visible = inputFromRemediation.visible,
            messages = inputFromRemediation.messages;
        if (visible === false) {
          return;
        }
        if (typeof _this3["getInput".concat(titleCase(name))] === 'function') {
          input = _this3["getInput".concat(titleCase(name))](inputFromRemediation);
        } else if (type !== 'object') {
          var alias;
          var aliases = (_mapInstanceProperty(_this3) ? _mapInstanceProperty(_this3)[name] : null) || [];
          if (aliases.length === 1) {
            alias = aliases[0];
          } else {
            alias = _findInstanceProperty(aliases).call(aliases, function (name) {
              var _context5;
              return _includesInstanceProperty(_context5 = _Object$keys(_valuesInstanceProperty(_this3))).call(_context5, name);
            });
          }
          if (alias) {
            input = _Object$assign(_Object$assign({}, inputFromRemediation), {
              name: alias
            });
          }
        }
        if (!input) {
          input = inputFromRemediation;
        }
        if (Array.isArray(input)) {
          input.forEach(function (i) {
            return inputs.push(i);
          });
        } else {
          if (messages) {
            input.messages = messages;
          }
          inputs.push(input);
        }
      });
      return inputs;
    }
  }, {
    key: "getValuesAfterProceed",
    value:
    function getValuesAfterProceed() {
      var _context6;
      var inputsFromRemediation = this.remediation.value || [];
      var inputsFromRemediator = this.getInputs();
      var inputs = _concatInstanceProperty(_context6 = []).call(_context6, _toConsumableArray(inputsFromRemediation), _toConsumableArray(inputsFromRemediator));
      var _iterator = _createForOfIteratorHelper$3(inputs),
          _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var input = _step.value;
          delete _valuesInstanceProperty(this)[input.name];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return _valuesInstanceProperty(this);
    }
  }, {
    key: "getAuthenticator",
    value: function getAuthenticator() {
      var _context7, _context8;
      var _a, _b;
      var relatesTo = (_a = this.remediation.relatesTo) === null || _a === void 0 ? void 0 : _a.value;
      if (!relatesTo) {
        return;
      }
      var authenticatorFromRemediation = getAuthenticatorFromRemediation(this.remediation);
      if (!authenticatorFromRemediation) {
        return relatesTo;
      }
      var id = _findInstanceProperty(_context7 = authenticatorFromRemediation.form.value).call(_context7, function (_ref2) {
        var name = _ref2.name;
        return name === 'id';
      }).value;
      var enrollmentId = (_b = _findInstanceProperty(_context8 = authenticatorFromRemediation.form.value).call(_context8, function (_ref3) {
        var name = _ref3.name;
        return name === 'enrollmentId';
      })) === null || _b === void 0 ? void 0 : _b.value;
      return _Object$assign(_Object$assign({}, relatesTo), {
        id: id,
        enrollmentId: enrollmentId
      });
    }
  }], [{
    key: "getMessages",
    value: function getMessages(remediation) {
      var _context9;
      var _a, _b;
      if (!remediation.value) {
        return;
      }
      return (_b = (_a = remediation.value[0]) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _reduceInstanceProperty(_context9 = _b.value).call(_context9, function (messages, field) {
        if (field.messages) {
          var _context10;
          messages = _concatInstanceProperty(_context10 = []).call(_context10, _toConsumableArray(messages), _toConsumableArray(field.messages.value));
        }
        return messages;
      }, []);
    }
  }]);
  return Remediator;
}();

var Authenticator = function Authenticator(authenticator) {
  _classCallCheck(this, Authenticator);
  this.meta = authenticator;
};

function _createSuper$s(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$s(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$s() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var VerificationCodeAuthenticator = function (_Authenticator) {
  _inherits(VerificationCodeAuthenticator, _Authenticator);
  var _super = _createSuper$s(VerificationCodeAuthenticator);
  function VerificationCodeAuthenticator() {
    _classCallCheck(this, VerificationCodeAuthenticator);
    return _super.apply(this, arguments);
  }
  _createClass(VerificationCodeAuthenticator, [{
    key: "canVerify",
    value: function canVerify(values) {
      return !!(values.credentials || values.verificationCode || values.otp);
    }
  }, {
    key: "mapCredentials",
    value: function mapCredentials(values) {
      var credentials = values.credentials,
          verificationCode = values.verificationCode,
          otp = values.otp;
      if (!credentials && !verificationCode && !otp) {
        return;
      }
      return credentials || {
        passcode: verificationCode || otp
      };
    }
  }, {
    key: "getInputs",
    value: function getInputs(idxRemediationValue) {
      var _a;
      return _Object$assign(_Object$assign({}, (_a = idxRemediationValue.form) === null || _a === void 0 ? void 0 : _a.value[0]), {
        name: 'verificationCode',
        type: 'string',
        required: idxRemediationValue.required
      });
    }
  }]);
  return VerificationCodeAuthenticator;
}(Authenticator);

function _createSuper$r(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$r(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$r() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var OktaVerifyTotp = function (_VerificationCodeAuth) {
  _inherits(OktaVerifyTotp, _VerificationCodeAuth);
  var _super = _createSuper$r(OktaVerifyTotp);
  function OktaVerifyTotp() {
    _classCallCheck(this, OktaVerifyTotp);
    return _super.apply(this, arguments);
  }
  _createClass(OktaVerifyTotp, [{
    key: "mapCredentials",
    value: function mapCredentials(values) {
      var verificationCode = values.verificationCode;
      if (!verificationCode) {
        return;
      }
      return {
        totp: verificationCode
      };
    }
  }]);
  return OktaVerifyTotp;
}(VerificationCodeAuthenticator);

function _createSuper$q(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$q(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$q() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var OktaPassword = function (_Authenticator) {
  _inherits(OktaPassword, _Authenticator);
  var _super = _createSuper$q(OktaPassword);
  function OktaPassword() {
    _classCallCheck(this, OktaPassword);
    return _super.apply(this, arguments);
  }
  _createClass(OktaPassword, [{
    key: "canVerify",
    value: function canVerify(values) {
      return !!(values.credentials || values.password);
    }
  }, {
    key: "mapCredentials",
    value: function mapCredentials(values) {
      var credentials = values.credentials,
          password = values.password;
      if (!credentials && !password) {
        return;
      }
      return credentials || {
        passcode: password
      };
    }
  }, {
    key: "getInputs",
    value: function getInputs(idxRemediationValue) {
      var _a;
      return _Object$assign(_Object$assign({}, (_a = idxRemediationValue.form) === null || _a === void 0 ? void 0 : _a.value[0]), {
        name: 'password',
        type: 'string',
        required: idxRemediationValue.required
      });
    }
  }]);
  return OktaPassword;
}(Authenticator);

function _createSuper$p(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$p(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$p() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SecurityQuestionEnrollment = function (_Authenticator) {
  _inherits(SecurityQuestionEnrollment, _Authenticator);
  var _super = _createSuper$p(SecurityQuestionEnrollment);
  function SecurityQuestionEnrollment() {
    _classCallCheck(this, SecurityQuestionEnrollment);
    return _super.apply(this, arguments);
  }
  _createClass(SecurityQuestionEnrollment, [{
    key: "canVerify",
    value: function canVerify(values) {
      var credentials = values.credentials;
      if (credentials && credentials.questionKey && credentials.answer) {
        return true;
      }
      var questionKey = values.questionKey,
          question = values.question,
          answer = values.answer;
      return !!(questionKey && answer) || !!(question && answer);
    }
  }, {
    key: "mapCredentials",
    value: function mapCredentials(values) {
      var questionKey = values.questionKey,
          question = values.question,
          answer = values.answer;
      if (!answer || !questionKey && !question) {
        return;
      }
      return {
        questionKey: question ? 'custom' : questionKey,
        question: question,
        answer: answer
      };
    }
  }, {
    key: "getInputs",
    value: function getInputs() {
      return [{
        name: 'questionKey',
        type: 'string',
        required: true
      }, {
        name: 'question',
        type: 'string',
        label: 'Create a security question'
      }, {
        name: 'answer',
        type: 'string',
        label: 'Answer',
        required: true
      }];
    }
  }]);
  return SecurityQuestionEnrollment;
}(Authenticator);

function _createSuper$o(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$o(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$o() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SecurityQuestionVerification = function (_Authenticator) {
  _inherits(SecurityQuestionVerification, _Authenticator);
  var _super = _createSuper$o(SecurityQuestionVerification);
  function SecurityQuestionVerification() {
    _classCallCheck(this, SecurityQuestionVerification);
    return _super.apply(this, arguments);
  }
  _createClass(SecurityQuestionVerification, [{
    key: "canVerify",
    value: function canVerify(values) {
      var credentials = values.credentials;
      if (credentials && credentials.answer) {
        return true;
      }
      var answer = values.answer;
      return !!answer;
    }
  }, {
    key: "mapCredentials",
    value: function mapCredentials(values) {
      var answer = values.answer;
      if (!answer) {
        return;
      }
      return {
        questionKey: this.meta.contextualData.enrolledQuestion.questionKey,
        answer: answer
      };
    }
  }, {
    key: "getInputs",
    value: function getInputs() {
      return [{
        name: 'answer',
        type: 'string',
        label: 'Answer',
        required: true
      }];
    }
  }]);
  return SecurityQuestionVerification;
}(Authenticator);

function _createSuper$n(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$n(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$n() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var WebauthnEnrollment = function (_Authenticator) {
  _inherits(WebauthnEnrollment, _Authenticator);
  var _super = _createSuper$n(WebauthnEnrollment);
  function WebauthnEnrollment() {
    _classCallCheck(this, WebauthnEnrollment);
    return _super.apply(this, arguments);
  }
  _createClass(WebauthnEnrollment, [{
    key: "canVerify",
    value: function canVerify(values) {
      var credentials = values.credentials;
      var obj = credentials || values;
      var clientData = obj.clientData,
          attestation = obj.attestation;
      return !!(clientData && attestation);
    }
  }, {
    key: "mapCredentials",
    value: function mapCredentials(values) {
      var credentials = values.credentials,
          clientData = values.clientData,
          attestation = values.attestation;
      if (!credentials && !clientData && !attestation) {
        return;
      }
      return credentials || {
        clientData: clientData,
        attestation: attestation
      };
    }
  }, {
    key: "getInputs",
    value: function getInputs() {
      return [{
        name: 'clientData',
        type: 'string',
        required: true,
        visible: false,
        label: 'Client Data'
      }, {
        name: 'attestation',
        type: 'string',
        required: true,
        visible: false,
        label: 'Attestation'
      }];
    }
  }]);
  return WebauthnEnrollment;
}(Authenticator);

function _createSuper$m(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$m(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$m() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var WebauthnVerification = function (_Authenticator) {
  _inherits(WebauthnVerification, _Authenticator);
  var _super = _createSuper$m(WebauthnVerification);
  function WebauthnVerification() {
    _classCallCheck(this, WebauthnVerification);
    return _super.apply(this, arguments);
  }
  _createClass(WebauthnVerification, [{
    key: "canVerify",
    value: function canVerify(values) {
      var credentials = values.credentials;
      var obj = credentials || values;
      var clientData = obj.clientData,
          authenticatorData = obj.authenticatorData,
          signatureData = obj.signatureData;
      return !!(clientData && authenticatorData && signatureData);
    }
  }, {
    key: "mapCredentials",
    value: function mapCredentials(values) {
      var credentials = values.credentials,
          authenticatorData = values.authenticatorData,
          clientData = values.clientData,
          signatureData = values.signatureData;
      if (!credentials && !authenticatorData && !clientData && !signatureData) {
        return;
      }
      return credentials || {
        authenticatorData: authenticatorData,
        clientData: clientData,
        signatureData: signatureData
      };
    }
  }, {
    key: "getInputs",
    value: function getInputs() {
      return [{
        name: 'authenticatorData',
        type: 'string',
        label: 'Authenticator Data',
        required: true,
        visible: false
      }, {
        name: 'clientData',
        type: 'string',
        label: 'Client Data',
        required: true,
        visible: false
      }, {
        name: 'signatureData',
        type: 'string',
        label: 'Signature Data',
        required: true,
        visible: false
      }];
    }
  }]);
  return WebauthnVerification;
}(Authenticator);

function getAuthenticator(remediation) {
  var _a, _b;
  var relatesTo = remediation.relatesTo;
  var value = (relatesTo === null || relatesTo === void 0 ? void 0 : relatesTo.value) || {};
  switch (value.key) {
    case AuthenticatorKey.OKTA_PASSWORD:
      return new OktaPassword(value);
    case AuthenticatorKey.SECURITY_QUESTION:
      if ((_a = value.contextualData) === null || _a === void 0 ? void 0 : _a.enrolledQuestion) {
        return new SecurityQuestionVerification(value);
      } else {
        return new SecurityQuestionEnrollment(value);
      }
    case AuthenticatorKey.OKTA_VERIFY:
      return new OktaVerifyTotp(value);
    case AuthenticatorKey.WEBAUTHN:
      if ((_b = value.contextualData) === null || _b === void 0 ? void 0 : _b.challengeData) {
        return new WebauthnVerification(value);
      } else {
        return new WebauthnEnrollment(value);
      }
    default:
      return new VerificationCodeAuthenticator(value);
  }
}

function _createSuper$l(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$l(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$l() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var VerifyAuthenticator = function (_Remediator) {
  _inherits(VerifyAuthenticator, _Remediator);
  var _super = _createSuper$l(VerifyAuthenticator);
  function VerifyAuthenticator(remediation) {
    var _this;
    var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, VerifyAuthenticator);
    _this = _super.call(this, remediation, values);
    _this.authenticator = getAuthenticator(remediation);
    return _this;
  }
  _createClass(VerifyAuthenticator, [{
    key: "getNextStep",
    value: function getNextStep(context) {
      var _a;
      var nextStep = _get(_getPrototypeOf(VerifyAuthenticator.prototype), "getNextStep", this).call(this, context);
      var authenticatorEnrollments = (_a = context === null || context === void 0 ? void 0 : context.authenticatorEnrollments) === null || _a === void 0 ? void 0 : _a.value;
      return _Object$assign(_Object$assign({}, nextStep), {
        authenticatorEnrollments: authenticatorEnrollments
      });
    }
  }, {
    key: "canRemediate",
    value: function canRemediate() {
      return this.authenticator.canVerify(_valuesInstanceProperty(this));
    }
  }, {
    key: "mapCredentials",
    value: function mapCredentials() {
      return this.authenticator.mapCredentials(_valuesInstanceProperty(this));
    }
  }, {
    key: "getInputCredentials",
    value: function getInputCredentials(input) {
      return this.authenticator.getInputs(input);
    }
  }, {
    key: "getValuesAfterProceed",
    value: function getValuesAfterProceed() {
      var _context,
          _this2 = this;
      this.values = _get(_getPrototypeOf(VerifyAuthenticator.prototype), "getValuesAfterProceed", this).call(this);
      var trimmedValues = _filterInstanceProperty(_context = _Object$keys(_valuesInstanceProperty(this))).call(_context, function (valueKey) {
        return valueKey !== 'credentials';
      });
      return _reduceInstanceProperty(trimmedValues).call(trimmedValues, function (values, valueKey) {
        return _Object$assign(_Object$assign({}, values), _defineProperty({}, valueKey, _valuesInstanceProperty(_this2)[valueKey]));
      }, {});
    }
  }]);
  return VerifyAuthenticator;
}(Remediator);

function _createSuper$k(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$k(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$k() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var EnrollAuthenticator = function (_VerifyAuthenticator) {
  _inherits(EnrollAuthenticator, _VerifyAuthenticator);
  var _super = _createSuper$k(EnrollAuthenticator);
  function EnrollAuthenticator() {
    _classCallCheck(this, EnrollAuthenticator);
    return _super.apply(this, arguments);
  }
  return EnrollAuthenticator;
}(VerifyAuthenticator);
EnrollAuthenticator.remediationName = 'enroll-authenticator';

function _createSuper$j(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$j(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$j() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var EnrollPoll = function (_Remediator) {
  _inherits(EnrollPoll, _Remediator);
  var _super = _createSuper$j(EnrollPoll);
  function EnrollPoll() {
    _classCallCheck(this, EnrollPoll);
    return _super.apply(this, arguments);
  }
  _createClass(EnrollPoll, [{
    key: "canRemediate",
    value: function canRemediate() {
      return !!_valuesInstanceProperty(this).startPolling || this.options.step === 'enroll-poll';
    }
  }, {
    key: "getNextStep",
    value: function getNextStep(context) {
      var common = _get(_getPrototypeOf(EnrollPoll.prototype), "getNextStep", this).call(this, context);
      var authenticator = this.getAuthenticator();
      if (!authenticator && (context === null || context === void 0 ? void 0 : context.currentAuthenticator)) {
        authenticator = context.currentAuthenticator.value;
      }
      return _Object$assign(_Object$assign({}, common), {
        authenticator: authenticator,
        poll: {
          required: true,
          refresh: this.remediation.refresh
        }
      });
    }
  }, {
    key: "getValuesAfterProceed",
    value: function getValuesAfterProceed() {
      var _context,
          _this = this;
      var trimmedValues = _filterInstanceProperty(_context = _Object$keys(_valuesInstanceProperty(this))).call(_context, function (valueKey) {
        return valueKey !== 'startPolling';
      });
      return _reduceInstanceProperty(trimmedValues).call(trimmedValues, function (values, valueKey) {
        return _Object$assign(_Object$assign({}, values), _defineProperty({}, valueKey, _valuesInstanceProperty(_this)[valueKey]));
      }, {});
    }
  }]);
  return EnrollPoll;
}(Remediator);
EnrollPoll.remediationName = 'enroll-poll';

function _createSuper$i(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$i(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$i() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SelectEnrollmentChannel = function (_Remediator) {
  _inherits(SelectEnrollmentChannel, _Remediator);
  var _super = _createSuper$i(SelectEnrollmentChannel);
  function SelectEnrollmentChannel() {
    _classCallCheck(this, SelectEnrollmentChannel);
    return _super.apply(this, arguments);
  }
  _createClass(SelectEnrollmentChannel, [{
    key: "canRemediate",
    value: function canRemediate() {
      return Boolean(_valuesInstanceProperty(this).channel);
    }
  }, {
    key: "getNextStep",
    value: function getNextStep(context) {
      var common = _get(_getPrototypeOf(SelectEnrollmentChannel.prototype), "getNextStep", this).call(this);
      var options = this.getChannels();
      var authenticator = context.currentAuthenticator.value;
      return _Object$assign(_Object$assign(_Object$assign({}, common), options && {
        options: options
      }), {
        authenticator: authenticator
      });
    }
  }, {
    key: "getChannels",
    value: function getChannels() {
      var _context;
      var _a;
      var authenticator = getAuthenticatorFromRemediation(this.remediation);
      var remediationValue = authenticator.value;
      return (_a = _findInstanceProperty(_context = remediationValue.form.value).call(_context, function (_ref) {
        var name = _ref.name;
        return name === 'channel';
      })) === null || _a === void 0 ? void 0 : _a.options;
    }
  }, {
    key: "getData",
    value: function getData() {
      var remediationValue = this.remediation.value[0].value;
      return {
        authenticator: {
          id: remediationValue.form.value[0].value,
          channel: _valuesInstanceProperty(this).channel
        },
        stateHandle: _valuesInstanceProperty(this).stateHandle
      };
    }
  }, {
    key: "getValuesAfterProceed",
    value: function getValuesAfterProceed() {
      var _context2,
          _this = this;
      var trimmedValues = _filterInstanceProperty(_context2 = _Object$keys(_valuesInstanceProperty(this))).call(_context2, function (valueKey) {
        return valueKey !== 'channel';
      });
      return _reduceInstanceProperty(trimmedValues).call(trimmedValues, function (values, valueKey) {
        return _Object$assign(_Object$assign({}, values), _defineProperty({}, valueKey, _valuesInstanceProperty(_this)[valueKey]));
      }, {});
    }
  }]);
  return SelectEnrollmentChannel;
}(Remediator);
SelectEnrollmentChannel.remediationName = 'select-enrollment-channel';

function _createSuper$h(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$h(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$h() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var EnrollmentChannelData = function (_Remediator) {
  _inherits(EnrollmentChannelData, _Remediator);
  var _super = _createSuper$h(EnrollmentChannelData);
  function EnrollmentChannelData() {
    _classCallCheck(this, EnrollmentChannelData);
    return _super.apply(this, arguments);
  }
  _createClass(EnrollmentChannelData, [{
    key: "getInputEmail",
    value: function getInputEmail() {
      return [{
        name: 'email',
        type: 'string',
        required: true,
        label: 'Email'
      }];
    }
  }, {
    key: "getInputPhoneNumber",
    value: function getInputPhoneNumber() {
      return [{
        name: 'phoneNumber',
        type: 'string',
        required: true,
        label: 'Phone Number'
      }];
    }
  }, {
    key: "canRemediate",
    value: function canRemediate() {
      return Boolean(_valuesInstanceProperty(this).email || _valuesInstanceProperty(this).phoneNumber);
    }
  }, {
    key: "getNextStep",
    value: function getNextStep(context) {
      var common = _get(_getPrototypeOf(EnrollmentChannelData.prototype), "getNextStep", this).call(this);
      var authenticator = context.currentAuthenticator.value;
      return _Object$assign(_Object$assign({}, common), {
        authenticator: authenticator
      });
    }
  }, {
    key: "getData",
    value: function getData() {
      return {
        stateHandle: _valuesInstanceProperty(this).stateHandle,
        email: _valuesInstanceProperty(this).email,
        phoneNumber: _valuesInstanceProperty(this).phoneNumber
      };
    }
  }, {
    key: "getValuesAfterProceed",
    value: function getValuesAfterProceed() {
      var _context,
          _this = this;
      var trimmedValues = _filterInstanceProperty(_context = _Object$keys(_valuesInstanceProperty(this))).call(_context, function (valueKey) {
        var _context2;
        return !_includesInstanceProperty(_context2 = ['email', 'phoneNumber']).call(_context2, valueKey);
      });
      return _reduceInstanceProperty(trimmedValues).call(trimmedValues, function (values, valueKey) {
        return _Object$assign(_Object$assign({}, values), _defineProperty({}, valueKey, _valuesInstanceProperty(_this)[valueKey]));
      }, {});
    }
  }]);
  return EnrollmentChannelData;
}(Remediator);
EnrollmentChannelData.remediationName = 'enrollment-channel-data';

function _createSuper$g(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$g(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$g() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ChallengeAuthenticator = function (_VerifyAuthenticator) {
  _inherits(ChallengeAuthenticator, _VerifyAuthenticator);
  var _super = _createSuper$g(ChallengeAuthenticator);
  function ChallengeAuthenticator() {
    _classCallCheck(this, ChallengeAuthenticator);
    return _super.apply(this, arguments);
  }
  return ChallengeAuthenticator;
}(VerifyAuthenticator);
ChallengeAuthenticator.remediationName = 'challenge-authenticator';

function _createSuper$f(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$f(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$f() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ChallengePoll = function (_EnrollPoll) {
  _inherits(ChallengePoll, _EnrollPoll);
  var _super = _createSuper$f(ChallengePoll);
  function ChallengePoll() {
    _classCallCheck(this, ChallengePoll);
    return _super.apply(this, arguments);
  }
  _createClass(ChallengePoll, [{
    key: "canRemediate",
    value: function canRemediate() {
      return !!_valuesInstanceProperty(this).startPolling || this.options.step === 'challenge-poll';
    }
  }]);
  return ChallengePoll;
}(EnrollPoll);
ChallengePoll.remediationName = 'challenge-poll';

function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ResetAuthenticator = function (_VerifyAuthenticator) {
  _inherits(ResetAuthenticator, _VerifyAuthenticator);
  var _super = _createSuper$e(ResetAuthenticator);
  function ResetAuthenticator() {
    _classCallCheck(this, ResetAuthenticator);
    return _super.apply(this, arguments);
  }
  return ResetAuthenticator;
}(VerifyAuthenticator);
ResetAuthenticator.remediationName = 'reset-authenticator';

function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var EnrollProfile = function (_Remediator) {
  _inherits(EnrollProfile, _Remediator);
  var _super = _createSuper$d(EnrollProfile);
  function EnrollProfile() {
    _classCallCheck(this, EnrollProfile);
    return _super.apply(this, arguments);
  }
  _createClass(EnrollProfile, [{
    key: "canRemediate",
    value: function canRemediate() {
      var _context, _context2;
      var userProfileFromValues = this.getData().userProfile;
      if (!userProfileFromValues) {
        return false;
      }
      var userProfileFromRemediation = _findInstanceProperty(_context = this.remediation.value).call(_context, function (_ref) {
        var name = _ref.name;
        return name === 'userProfile';
      });
      return _reduceInstanceProperty(_context2 = userProfileFromRemediation.form.value).call(_context2, function (canRemediate, curr) {
        if (curr.required) {
          canRemediate = canRemediate && !!userProfileFromValues[curr.name];
        }
        return canRemediate;
      }, true);
    }
  }, {
    key: "mapUserProfile",
    value: function mapUserProfile(_ref2) {
      var _this = this;
      var profileAttributes = _ref2.form.value;
      var attributeNames = _mapInstanceProperty(profileAttributes).call(profileAttributes, function (_ref3) {
        var name = _ref3.name;
        return name;
      });
      var data = _reduceInstanceProperty(attributeNames).call(attributeNames, function (attributeValues, attributeName) {
        return _valuesInstanceProperty(_this)[attributeName] ? _Object$assign(_Object$assign({}, attributeValues), _defineProperty({}, attributeName, _valuesInstanceProperty(_this)[attributeName])) : attributeValues;
      }, {});
      if (_Object$keys(data).length === 0) {
        return;
      }
      return data;
    }
  }, {
    key: "getInputUserProfile",
    value: function getInputUserProfile(input) {
      return _toConsumableArray(input.form.value);
    }
  }, {
    key: "getErrorMessages",
    value: function getErrorMessages(errorRemediation) {
      var _context3;
      return _reduceInstanceProperty(_context3 = errorRemediation.value[0].form.value).call(_context3, function (errors, field) {
        if (field.messages) {
          errors.push(field.messages.value[0].message);
        }
        return errors;
      }, []);
    }
  }]);
  return EnrollProfile;
}(Remediator);
EnrollProfile.remediationName = 'enroll-profile';

function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Identify = function (_Remediator) {
  _inherits(Identify, _Remediator);
  var _super = _createSuper$c(Identify);
  function Identify() {
    var _this;
    _classCallCheck(this, Identify);
    _this = _super.apply(this, arguments);
    _this.map = {
      'identifier': ['username']
    };
    return _this;
  }
  _createClass(Identify, [{
    key: "canRemediate",
    value: function canRemediate() {
      var _this$getData = this.getData(),
          identifier = _this$getData.identifier;
      return !!identifier;
    }
  }, {
    key: "mapCredentials",
    value: function mapCredentials() {
      var _this$values = _valuesInstanceProperty(this),
          credentials = _this$values.credentials,
          password = _this$values.password;
      if (!credentials && !password) {
        return;
      }
      return credentials || {
        passcode: password
      };
    }
  }, {
    key: "getInputCredentials",
    value: function getInputCredentials(input) {
      return _Object$assign(_Object$assign({}, input.form.value[0]), {
        name: 'password',
        required: input.required
      });
    }
  }]);
  return Identify;
}(Remediator);
Identify.remediationName = 'identify';

function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ReEnrollAuthenticator = function (_Remediator) {
  _inherits(ReEnrollAuthenticator, _Remediator);
  var _super = _createSuper$b(ReEnrollAuthenticator);
  function ReEnrollAuthenticator() {
    _classCallCheck(this, ReEnrollAuthenticator);
    return _super.apply(this, arguments);
  }
  _createClass(ReEnrollAuthenticator, [{
    key: "mapCredentials",
    value: function mapCredentials() {
      var newPassword = _valuesInstanceProperty(this).newPassword;
      if (!newPassword) {
        return;
      }
      return {
        passcode: newPassword
      };
    }
  }, {
    key: "getInputCredentials",
    value: function getInputCredentials(input) {
      var challengeType = this.getAuthenticator().type;
      var name = challengeType === 'password' ? 'newPassword' : 'verificationCode';
      return _Object$assign(_Object$assign({}, input.form.value[0]), {
        name: name
      });
    }
  }]);
  return ReEnrollAuthenticator;
}(Remediator);
ReEnrollAuthenticator.remediationName = 'reenroll-authenticator';

function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var RedirectIdp = function (_Remediator) {
  _inherits(RedirectIdp, _Remediator);
  var _super = _createSuper$a(RedirectIdp);
  function RedirectIdp() {
    _classCallCheck(this, RedirectIdp);
    return _super.apply(this, arguments);
  }
  _createClass(RedirectIdp, [{
    key: "canRemediate",
    value: function canRemediate() {
      return false;
    }
  }, {
    key: "getNextStep",
    value: function getNextStep() {
      var _this$remediation = this.remediation,
          name = _this$remediation.name,
          type = _this$remediation.type,
          idp = _this$remediation.idp,
          href = _this$remediation.href;
      return {
        name: name,
        type: type,
        idp: idp,
        href: href
      };
    }
  }]);
  return RedirectIdp;
}(Remediator);
RedirectIdp.remediationName = 'redirect-idp';

function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$2(o, minLen) { var _context4; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = _sliceInstanceProperty(_context4 = Object.prototype.toString.call(o)).call(_context4, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }
function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SelectAuthenticator = function (_Remediator) {
  _inherits(SelectAuthenticator, _Remediator);
  var _super = _createSuper$9(SelectAuthenticator);
  function SelectAuthenticator() {
    _classCallCheck(this, SelectAuthenticator);
    return _super.apply(this, arguments);
  }
  _createClass(SelectAuthenticator, [{
    key: "findMatchedOption",
    value:
    function findMatchedOption(authenticators, options) {
      var option;
      var _iterator = _createForOfIteratorHelper$2(authenticators),
          _step;
      try {
        var _loop = function _loop() {
          var authenticator = _step.value;
          option = _findInstanceProperty(options).call(options, function (_ref) {
            var relatesTo = _ref.relatesTo;
            return relatesTo.key === authenticator.key;
          });
          if (option) {
            return "break";
          }
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();
          if (_ret === "break") break;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return option;
    }
  }, {
    key: "canRemediate",
    value: function canRemediate() {
      var _this$values = _valuesInstanceProperty(this),
          authenticators = _this$values.authenticators,
          authenticator = _this$values.authenticator;
      var authenticatorFromRemediation = getAuthenticatorFromRemediation(this.remediation);
      var options = authenticatorFromRemediation.options;
      if (!authenticators || !authenticators.length) {
        return false;
      }
      if (isAuthenticator(authenticator) && authenticator.id) {
        return true;
      }
      var matchedOption = this.findMatchedOption(authenticators, options);
      if (matchedOption) {
        return true;
      }
      return false;
    }
  }, {
    key: "getNextStep",
    value: function getNextStep() {
      var _context;
      var common = _get(_getPrototypeOf(SelectAuthenticator.prototype), "getNextStep", this).call(this);
      var authenticatorFromRemediation = getAuthenticatorFromRemediation(this.remediation);
      var options = _mapInstanceProperty(_context = authenticatorFromRemediation.options).call(_context, function (option) {
        var label = option.label,
            relatesTo = option.relatesTo;
        var key = relatesTo.key;
        return {
          label: label,
          value: key
        };
      });
      return _Object$assign(_Object$assign({}, common), {
        options: options
      });
    }
  }, {
    key: "mapAuthenticator",
    value: function mapAuthenticator(remediationValue) {
      var _context2;
      var _this$values2 = _valuesInstanceProperty(this),
          authenticators = _this$values2.authenticators,
          authenticator = _this$values2.authenticator;
      if (isAuthenticator(authenticator) && authenticator.id) {
        this.selectedAuthenticator = authenticator;
        return authenticator;
      }
      var options = remediationValue.options;
      var selectedOption = findMatchedOption(authenticators, options);
      this.selectedAuthenticator = selectedOption.relatesTo;
      this.selectedOption = selectedOption;
      return {
        id: selectedOption === null || selectedOption === void 0 ? void 0 : _findInstanceProperty(_context2 = selectedOption.value.form.value).call(_context2, function (_ref2) {
          var name = _ref2.name;
          return name === 'id';
        }).value
      };
    }
  }, {
    key: "getInputAuthenticator",
    value: function getInputAuthenticator() {
      return {
        name: 'authenticator',
        key: 'string'
      };
    }
  }, {
    key: "getValuesAfterProceed",
    value: function getValuesAfterProceed() {
      var _context3,
          _this = this;
      this.values = _get(_getPrototypeOf(SelectAuthenticator.prototype), "getValuesAfterProceed", this).call(this);
      var authenticators = _filterInstanceProperty(_context3 = _valuesInstanceProperty(this).authenticators).call(_context3, function (authenticator) {
        return compareAuthenticators(authenticator, _this.selectedAuthenticator) !== true;
      });
      return _Object$assign(_Object$assign({}, _valuesInstanceProperty(this)), {
        authenticators: authenticators
      });
    }
  }]);
  return SelectAuthenticator;
}(Remediator);

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SelectAuthenticatorAuthenticate = function (_SelectAuthenticator) {
  _inherits(SelectAuthenticatorAuthenticate, _SelectAuthenticator);
  var _super = _createSuper$8(SelectAuthenticatorAuthenticate);
  function SelectAuthenticatorAuthenticate(remediation) {
    var _this;
    var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, SelectAuthenticatorAuthenticate);
    var _a;
    _this = _super.call(this, remediation, values, options);
    var isRecoveryFlow = _this.options.flow === 'recoverPassword';
    var hasPasswordInOptions = (_a = getAuthenticatorFromRemediation(remediation).options) === null || _a === void 0 ? void 0 : _a.some(function (_ref) {
      var relatesTo = _ref.relatesTo;
      return (relatesTo === null || relatesTo === void 0 ? void 0 : relatesTo.key) === AuthenticatorKey.OKTA_PASSWORD;
    });
    if (hasPasswordInOptions && (isRecoveryFlow || _valuesInstanceProperty(_this).password)) {
      var _context;
      _valuesInstanceProperty(_this).authenticators = _concatInstanceProperty(_context = []).call(_context, _toConsumableArray(_valuesInstanceProperty(_this).authenticators || []), [{
        key: AuthenticatorKey.OKTA_PASSWORD
      }]);
    }
    return _this;
  }
  return SelectAuthenticatorAuthenticate;
}(SelectAuthenticator);
SelectAuthenticatorAuthenticate.remediationName = 'select-authenticator-authenticate';

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SelectAuthenticatorEnroll = function (_SelectAuthenticator) {
  _inherits(SelectAuthenticatorEnroll, _SelectAuthenticator);
  var _super = _createSuper$7(SelectAuthenticatorEnroll);
  function SelectAuthenticatorEnroll() {
    _classCallCheck(this, SelectAuthenticatorEnroll);
    return _super.apply(this, arguments);
  }
  return SelectAuthenticatorEnroll;
}(SelectAuthenticator);
SelectAuthenticatorEnroll.remediationName = 'select-authenticator-enroll';

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SelectAuthenticatorUnlockAccount = function (_SelectAuthenticator) {
  _inherits(SelectAuthenticatorUnlockAccount, _SelectAuthenticator);
  var _super = _createSuper$6(SelectAuthenticatorUnlockAccount);
  function SelectAuthenticatorUnlockAccount() {
    var _this;
    _classCallCheck(this, SelectAuthenticatorUnlockAccount);
    _this = _super.apply(this, arguments);
    _this.map = {
      identifier: ['username']
    };
    return _this;
  }
  _createClass(SelectAuthenticatorUnlockAccount, [{
    key: "canRemediate",
    value: function canRemediate() {
      var identifier = this.getData('identifier');
      return !!identifier && _get(_getPrototypeOf(SelectAuthenticatorUnlockAccount.prototype), "canRemediate", this).call(this);
    }
  }, {
    key: "mapAuthenticator",
    value: function mapAuthenticator(remediationValue) {
      var _context;
      var _a, _b, _c;
      var authenticatorMap = _get(_getPrototypeOf(SelectAuthenticatorUnlockAccount.prototype), "mapAuthenticator", this).call(this, remediationValue);
      var methodTypeOption = (_a = this.selectedOption) === null || _a === void 0 ? void 0 : _findInstanceProperty(_context = _a.value.form.value).call(_context, function (_ref) {
        var name = _ref.name;
        return name === 'methodType';
      });
      var methodTypeValue = _valuesInstanceProperty(this).methodType || (methodTypeOption === null || methodTypeOption === void 0 ? void 0 : methodTypeOption.value) || ((_c = (_b = methodTypeOption === null || methodTypeOption === void 0 ? void 0 : methodTypeOption.options) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.value);
      if (methodTypeValue) {
        return _Object$assign(_Object$assign({}, authenticatorMap), {
          methodType: methodTypeValue
        });
      }
      return authenticatorMap;
    }
  }, {
    key: "getInputUsername",
    value: function getInputUsername() {
      return {
        name: 'username',
        key: 'string'
      };
    }
  }]);
  return SelectAuthenticatorUnlockAccount;
}(SelectAuthenticator);
SelectAuthenticatorUnlockAccount.remediationName = 'select-authenticator-unlock-account';

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SelectEnrollProfile = function (_Remediator) {
  _inherits(SelectEnrollProfile, _Remediator);
  var _super = _createSuper$5(SelectEnrollProfile);
  function SelectEnrollProfile() {
    _classCallCheck(this, SelectEnrollProfile);
    return _super.apply(this, arguments);
  }
  _createClass(SelectEnrollProfile, [{
    key: "canRemediate",
    value: function canRemediate() {
      return true;
    }
  }]);
  return SelectEnrollProfile;
}(Remediator);
SelectEnrollProfile.remediationName = 'select-enroll-profile';

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AuthenticatorData = function (_Remediator) {
  _inherits(AuthenticatorData, _Remediator);
  var _super = _createSuper$4(AuthenticatorData);
  function AuthenticatorData(remediation) {
    var _this;
    var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, AuthenticatorData);
    _this = _super.call(this, remediation, values);
    _this.authenticator = _this.getAuthenticator();
    _this.formatAuthenticatorData();
    return _this;
  }
  _createClass(AuthenticatorData, [{
    key: "formatAuthenticatorData",
    value: function formatAuthenticatorData() {
      var _this2 = this;
      var authenticatorData = this.getAuthenticatorData();
      if (authenticatorData) {
        var _context;
        _valuesInstanceProperty(this).authenticatorsData = _mapInstanceProperty(_context = _valuesInstanceProperty(this).authenticatorsData).call(_context, function (data) {
          if (compareAuthenticators(_this2.authenticator, data)) {
            return _this2.mapAuthenticatorDataFromValues(data);
          }
          return data;
        });
      } else {
        var data = this.mapAuthenticatorDataFromValues();
        if (data) {
          _valuesInstanceProperty(this).authenticatorsData.push(data);
        }
      }
    }
  }, {
    key: "getAuthenticatorData",
    value: function getAuthenticatorData() {
      var _context2,
          _this3 = this;
      return _findInstanceProperty(_context2 = _valuesInstanceProperty(this).authenticatorsData).call(_context2, function (data) {
        return compareAuthenticators(_this3.authenticator, data);
      });
    }
  }, {
    key: "canRemediate",
    value: function canRemediate() {
      var _this4 = this;
      return _valuesInstanceProperty(this).authenticatorsData.some(function (data) {
        return compareAuthenticators(_this4.authenticator, data);
      });
    }
  }, {
    key: "getNextStep",
    value: function getNextStep() {
      var common = _get(_getPrototypeOf(AuthenticatorData.prototype), "getNextStep", this).call(this);
      var options = this.getMethodTypes();
      return _Object$assign(_Object$assign({}, common), options && {
        options: options
      });
    }
  }, {
    key: "mapAuthenticatorDataFromValues",
    value: function mapAuthenticatorDataFromValues(authenticatorData) {
      var _this$values = _valuesInstanceProperty(this),
          methodType = _this$values.methodType,
          authenticator = _this$values.authenticator;
      if (!methodType && isAuthenticator(authenticator)) {
        methodType = authenticator === null || authenticator === void 0 ? void 0 : authenticator.methodType;
      }
      var _this$authenticator = this.authenticator,
          id = _this$authenticator.id,
          enrollmentId = _this$authenticator.enrollmentId;
      var data = _Object$assign(_Object$assign({
        id: id,
        enrollmentId: enrollmentId
      }, authenticatorData && authenticatorData), methodType && {
        methodType: methodType
      });
      return data.methodType ? data : null;
    }
  }, {
    key: "getAuthenticatorFromRemediation",
    value: function getAuthenticatorFromRemediation() {
      var _context3;
      var authenticator = _findInstanceProperty(_context3 = this.remediation.value).call(_context3, function (_ref) {
        var name = _ref.name;
        return name === 'authenticator';
      });
      return authenticator;
    }
  }, {
    key: "getMethodTypes",
    value: function getMethodTypes() {
      var _context4;
      var _a;
      var authenticator = this.getAuthenticatorFromRemediation();
      return (_a = _findInstanceProperty(_context4 = authenticator.form.value).call(_context4, function (_ref2) {
        var name = _ref2.name;
        return name === 'methodType';
      })) === null || _a === void 0 ? void 0 : _a.options;
    }
  }, {
    key: "getValuesAfterProceed",
    value: function getValuesAfterProceed() {
      var _context5,
          _this5 = this;
      this.values = _get(_getPrototypeOf(AuthenticatorData.prototype), "getValuesAfterProceed", this).call(this);
      var authenticatorsData = _filterInstanceProperty(_context5 = _valuesInstanceProperty(this).authenticatorsData).call(_context5, function (data) {
        return compareAuthenticators(_this5.authenticator, data) !== true;
      });
      return _Object$assign(_Object$assign({}, _valuesInstanceProperty(this)), {
        authenticatorsData: authenticatorsData
      });
    }
  }]);
  return AuthenticatorData;
}(Remediator);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AuthenticatorVerificationData = function (_AuthenticatorData) {
  _inherits(AuthenticatorVerificationData, _AuthenticatorData);
  var _super = _createSuper$3(AuthenticatorVerificationData);
  function AuthenticatorVerificationData(remediation) {
    var _this;
    var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, AuthenticatorVerificationData);
    _this = _super.call(this, remediation, values);
    _this.shouldProceedWithEmailAuthenticator = options.shouldProceedWithEmailAuthenticator !== false && _this.authenticator.methods.length === 1 && _this.authenticator.methods[0].type === 'email';
    return _this;
  }
  _createClass(AuthenticatorVerificationData, [{
    key: "canRemediate",
    value: function canRemediate() {
      if (this.shouldProceedWithEmailAuthenticator !== false) {
        return true;
      }
      return _get(_getPrototypeOf(AuthenticatorVerificationData.prototype), "canRemediate", this).call(this);
    }
  }, {
    key: "mapAuthenticator",
    value: function mapAuthenticator() {
      var _a;
      if (this.shouldProceedWithEmailAuthenticator !== false) {
        var _context;
        var authenticatorFromRemediation = this.getAuthenticatorFromRemediation();
        return (_a = authenticatorFromRemediation.form) === null || _a === void 0 ? void 0 : _reduceInstanceProperty(_context = _a.value).call(_context, function (acc, curr) {
          if (curr.value) {
            acc[curr.name] = curr.value;
          } else if (curr.options) {
            acc[curr.name] = curr.options[0].value;
          } else {
            throw new AuthSdkError("Unsupported authenticator data type: ".concat(curr));
          }
          return acc;
        }, {});
      }
      return this.getAuthenticatorData();
    }
  }, {
    key: "getInputAuthenticator",
    value: function getInputAuthenticator() {
      var _context2;
      var authenticator = this.getAuthenticatorFromRemediation();
      var methodType = _findInstanceProperty(_context2 = authenticator.form.value).call(_context2, function (_ref) {
        var name = _ref.name;
        return name === 'methodType';
      });
      if (methodType && methodType.options) {
        return {
          name: 'methodType',
          type: 'string',
          required: true
        };
      }
      var inputs = _toConsumableArray(authenticator.form.value);
      return inputs;
    }
  }, {
    key: "getValuesAfterProceed",
    value: function getValuesAfterProceed() {
      var _context3,
          _this2 = this;
      this.values = _get(_getPrototypeOf(AuthenticatorVerificationData.prototype), "getValuesAfterProceed", this).call(this);
      var trimmedValues = _filterInstanceProperty(_context3 = _Object$keys(_valuesInstanceProperty(this))).call(_context3, function (valueKey) {
        return valueKey !== 'authenticator';
      });
      return _reduceInstanceProperty(trimmedValues).call(trimmedValues, function (values, valueKey) {
        return _Object$assign(_Object$assign({}, values), _defineProperty({}, valueKey, _valuesInstanceProperty(_this2)[valueKey]));
      }, {});
    }
  }]);
  return AuthenticatorVerificationData;
}(AuthenticatorData);
AuthenticatorVerificationData.remediationName = 'authenticator-verification-data';

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AuthenticatorEnrollmentData = function (_AuthenticatorData) {
  _inherits(AuthenticatorEnrollmentData, _AuthenticatorData);
  var _super = _createSuper$2(AuthenticatorEnrollmentData);
  function AuthenticatorEnrollmentData() {
    _classCallCheck(this, AuthenticatorEnrollmentData);
    return _super.apply(this, arguments);
  }
  _createClass(AuthenticatorEnrollmentData, [{
    key: "mapAuthenticator",
    value: function mapAuthenticator() {
      var _context;
      var authenticatorData = this.getAuthenticatorData();
      var authenticatorFromRemediation = getAuthenticatorFromRemediation(this.remediation);
      return {
        id: _findInstanceProperty(_context = authenticatorFromRemediation.form.value).call(_context, function (_ref) {
          var name = _ref.name;
          return name === 'id';
        }).value,
        methodType: authenticatorData.methodType,
        phoneNumber: authenticatorData.phoneNumber
      };
    }
  }, {
    key: "getInputAuthenticator",
    value: function getInputAuthenticator() {
      return [{
        name: 'methodType',
        type: 'string',
        required: true
      }, {
        name: 'phoneNumber',
        type: 'string',
        required: true,
        label: 'Phone Number'
      }];
    }
  }, {
    key: "mapAuthenticatorDataFromValues",
    value: function mapAuthenticatorDataFromValues(data) {
      data = _get(_getPrototypeOf(AuthenticatorEnrollmentData.prototype), "mapAuthenticatorDataFromValues", this).call(this, data);
      var phoneNumber = _valuesInstanceProperty(this).phoneNumber;
      if (!data && !phoneNumber) {
        return;
      }
      return _Object$assign(_Object$assign({}, data && data), phoneNumber && {
        phoneNumber: phoneNumber
      });
    }
  }]);
  return AuthenticatorEnrollmentData;
}(AuthenticatorData);
AuthenticatorEnrollmentData.remediationName = 'authenticator-enrollment-data';

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Skip = function (_Remediator) {
  _inherits(Skip, _Remediator);
  var _super = _createSuper$1(Skip);
  function Skip() {
    _classCallCheck(this, Skip);
    return _super.apply(this, arguments);
  }
  _createClass(Skip, [{
    key: "canRemediate",
    value: function canRemediate() {
      return !!_valuesInstanceProperty(this).skip || this.options.step === 'skip';
    }
  }]);
  return Skip;
}(Remediator);
Skip.remediationName = 'skip';

var remediators = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Remediator: Remediator,
  EnrollAuthenticator: EnrollAuthenticator,
  EnrollPoll: EnrollPoll,
  SelectEnrollmentChannel: SelectEnrollmentChannel,
  EnrollmentChannelData: EnrollmentChannelData,
  ChallengeAuthenticator: ChallengeAuthenticator,
  ChallengePoll: ChallengePoll,
  ResetAuthenticator: ResetAuthenticator,
  EnrollProfile: EnrollProfile,
  Identify: Identify,
  ReEnrollAuthenticator: ReEnrollAuthenticator,
  RedirectIdp: RedirectIdp,
  SelectAuthenticatorAuthenticate: SelectAuthenticatorAuthenticate,
  SelectAuthenticatorEnroll: SelectAuthenticatorEnroll,
  SelectAuthenticatorUnlockAccount: SelectAuthenticatorUnlockAccount,
  SelectEnrollProfile: SelectEnrollProfile,
  AuthenticatorVerificationData: AuthenticatorVerificationData,
  AuthenticatorEnrollmentData: AuthenticatorEnrollmentData,
  Skip: Skip
});

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$1(o, minLen) { var _context12; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = _sliceInstanceProperty(_context12 = Object.prototype.toString.call(o)).call(_context12, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function isTerminalResponse(idxResponse) {
  var neededToProceed = idxResponse.neededToProceed,
      interactionCode = idxResponse.interactionCode;
  return !neededToProceed.length && !interactionCode;
}
function canSkipFn(idxResponse) {
  return idxResponse.neededToProceed.some(function (_ref) {
    var name = _ref.name;
    return name === 'skip';
  });
}
function canResendFn(idxResponse) {
  return _Object$keys(idxResponse.actions).some(function (actionName) {
    return _includesInstanceProperty(actionName).call(actionName, 'resend');
  });
}
function getMessagesFromIdxRemediationValue(value) {
  if (!value || !Array.isArray(value)) {
    return;
  }
  return _reduceInstanceProperty(value).call(value, function (messages, value) {
    if (value.messages) {
      var _context;
      messages = _concatInstanceProperty(_context = []).call(_context, _toConsumableArray(messages), _toConsumableArray(value.messages.value));
    }
    if (value.form) {
      var _context2;
      var messagesFromForm = getMessagesFromIdxRemediationValue(value.form.value) || [];
      messages = _concatInstanceProperty(_context2 = []).call(_context2, _toConsumableArray(messages), _toConsumableArray(messagesFromForm));
    }
    if (value.options) {
      var _context4;
      var optionValues = [];
      value.options.forEach(function (option) {
        var _context3;
        if (!option.value || typeof option.value === 'string') {
          return;
        }
        optionValues = _concatInstanceProperty(_context3 = []).call(_context3, _toConsumableArray(optionValues), [option.value]);
      });
      var messagesFromOptions = getMessagesFromIdxRemediationValue(optionValues) || [];
      messages = _concatInstanceProperty(_context4 = []).call(_context4, _toConsumableArray(messages), _toConsumableArray(messagesFromOptions));
    }
    return messages;
  }, []);
}
function getMessagesFromResponse(idxResponse) {
  var _context5;
  var _a;
  var messages = [];
  var rawIdxState = idxResponse.rawIdxState,
      neededToProceed = idxResponse.neededToProceed;
  var globalMessages = (_a = rawIdxState.messages) === null || _a === void 0 ? void 0 : _mapInstanceProperty(_context5 = _a.value).call(_context5, function (message) {
    return message;
  });
  if (globalMessages) {
    var _context6;
    messages = _concatInstanceProperty(_context6 = []).call(_context6, _toConsumableArray(messages), _toConsumableArray(globalMessages));
  }
  var _iterator = _createForOfIteratorHelper$1(neededToProceed),
      _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var remediation = _step.value;
      var fieldMessages = getMessagesFromIdxRemediationValue(remediation.value);
      if (fieldMessages) {
        var _context8;
        messages = _concatInstanceProperty(_context8 = []).call(_context8, _toConsumableArray(messages), _toConsumableArray(fieldMessages));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var seen = {};
  messages = _reduceInstanceProperty(messages).call(messages, function (filtered, message) {
    var _context7;
    var _a;
    var key = (_a = message.i18n) === null || _a === void 0 ? void 0 : _a.key;
    if (key && seen[key]) {
      return filtered;
    }
    seen[key] = message;
    filtered = _concatInstanceProperty(_context7 = []).call(_context7, _toConsumableArray(filtered), [message]);
    return filtered;
  }, []);
  return messages;
}
function getEnabledFeatures(idxResponse) {
  var res = [];
  var actions = idxResponse.actions,
      neededToProceed = idxResponse.neededToProceed;
  if (actions['currentAuthenticator-recover']) {
    res.push(IdxFeature.PASSWORD_RECOVERY);
  }
  if (neededToProceed.some(function (_ref2) {
    var name = _ref2.name;
    return name === 'select-enroll-profile';
  })) {
    res.push(IdxFeature.REGISTRATION);
  }
  if (neededToProceed.some(function (_ref3) {
    var name = _ref3.name;
    return name === 'redirect-idp';
  })) {
    res.push(IdxFeature.SOCIAL_IDP);
  }
  if (neededToProceed.some(function (_ref4) {
    var name = _ref4.name;
    return name === 'unlock-account';
  })) {
    res.push(IdxFeature.ACCOUNT_UNLOCK);
  }
  return res;
}
function getAvailableSteps(idxResponse) {
  var _context9;
  var res = [];
  var remediatorMap = _reduceInstanceProperty(_context9 = _Object$values(remediators)).call(_context9, function (map, remediatorClass) {
    if (remediatorClass.remediationName) {
      map[remediatorClass.remediationName] = remediatorClass;
    }
    return map;
  }, {});
  var _iterator2 = _createForOfIteratorHelper$1(idxResponse.neededToProceed),
      _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var remediation = _step2.value;
      var T = remediatorMap[remediation.name];
      if (T) {
        var remediator = new T(remediation);
        res.push(remediator.getNextStep(idxResponse.context));
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return res;
}
function filterValuesForRemediation(idxResponse, remediationName, values) {
  var _context10;
  var remediations = idxResponse.neededToProceed || [];
  var remediation = _findInstanceProperty(remediations).call(remediations, function (r) {
    return r.name === remediationName;
  });
  if (!remediation) {
    warn("filterValuesForRemediation: \"".concat(remediationName, "\" did not match any remediations"));
    return values;
  }
  var valuesForRemediation = _reduceInstanceProperty(_context10 = remediation.value).call(_context10, function (res, entry) {
    var name = entry.name,
        value = entry.value;
    if (name === 'stateHandle') {
      res[name] = value;
    } else {
      res[name] = values[name];
    }
    return res;
  }, {});
  return valuesForRemediation;
}
function getRemediator(idxRemediations, values, options) {
  var remediators = options.remediators;
  var remediator;
  if (options.step) {
    var remediation = _findInstanceProperty(idxRemediations).call(idxRemediations, function (_ref5) {
      var name = _ref5.name;
      return name === options.step;
    });
    if (remediation) {
      var T = remediation ? remediators[remediation.name] : undefined;
      return T ? new T(remediation, values, options) : undefined;
    } else {
      warn("step \"".concat(options.step, "\" did not match any remediations"));
      return;
    }
  }
  var remediatorCandidates = [];
  var _iterator3 = _createForOfIteratorHelper$1(idxRemediations),
      _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _context11;
      var _remediation = _step3.value;
      var isRemeditionInFlow = _includesInstanceProperty(_context11 = _Object$keys(remediators)).call(_context11, _remediation.name);
      if (!isRemeditionInFlow) {
        continue;
      }
      var _T = remediators[_remediation.name];
      remediator = new _T(_remediation, values, options);
      if (remediator.canRemediate()) {
        return remediator;
      }
      remediatorCandidates.push(remediator);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return remediatorCandidates[0];
}
function getNextStep(remediator, idxResponse) {
  var nextStep = remediator.getNextStep(idxResponse.context);
  var canSkip = canSkipFn(idxResponse);
  var canResend = canResendFn(idxResponse);
  return _Object$assign(_Object$assign(_Object$assign({}, nextStep), canSkip && {
    canSkip: canSkip
  }), canResend && {
    canResend: canResend
  });
}
function handleIdxError(e, remediator) {
  var idxResponse = isIdxResponse(e) ? e : null;
  if (!idxResponse) {
    throw e;
  }
  idxResponse = _Object$assign(_Object$assign({}, idxResponse), {
    requestDidSucceed: false
  });
  var terminal = isTerminalResponse(idxResponse);
  var messages = getMessagesFromResponse(idxResponse);
  if (terminal) {
    return {
      idxResponse: idxResponse,
      terminal: terminal,
      messages: messages
    };
  } else {
    var nextStep = remediator && getNextStep(remediator, idxResponse);
    return _Object$assign({
      idxResponse: idxResponse,
      messages: messages
    }, nextStep && {
      nextStep: nextStep
    });
  }
}

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { var _context5; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _sliceInstanceProperty(_context5 = Object.prototype.toString.call(o)).call(_context5, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function getActionFromValues(values, idxResponse) {
  var _context;
  return _findInstanceProperty(_context = _Object$keys(idxResponse.actions)).call(_context, function (action) {
    return !!values.resend && _includesInstanceProperty(action).call(action, '-resend');
  });
}
function removeActionFromValues(values) {
  return _Object$assign(_Object$assign({}, values), {
    resend: undefined
  });
}
function removeActionFromOptions(options, actionName) {
  var actions = options.actions || [];
  actions = _filterInstanceProperty(actions).call(actions, function (entry) {
    if (typeof entry === 'string') {
      return entry !== actionName;
    }
    return entry.name !== actionName;
  });
  return _Object$assign(_Object$assign({}, options), {
    actions: actions
  });
}
function remediate(_x, _x2, _x3) {
  return _remediate.apply(this, arguments);
}
function _remediate() {
  _remediate = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(idxResponse, values, options) {
    var _context2;
    var _idxResponse, neededToProceed, interactionCode, _options, flow, remediator, actionFromValues, actionFromOptions, actions, _iterator, _step, _loop, _ret, terminal, messages, nextStep, name, data;
    return _regeneratorRuntime.wrap(function _callee$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _idxResponse = idxResponse, neededToProceed = _idxResponse.neededToProceed, interactionCode = _idxResponse.interactionCode;
            _options = options, flow = _options.flow;
            if (!interactionCode) {
              _context4.next = 4;
              break;
            }
            return _context4.abrupt("return", {
              idxResponse: idxResponse
            });
          case 4:
            remediator = getRemediator(neededToProceed, values, options);
            actionFromValues = getActionFromValues(values, idxResponse);
            actionFromOptions = options.actions || [];
            actions = _concatInstanceProperty(_context2 = []).call(_context2, _toConsumableArray(actionFromOptions), _toConsumableArray(actionFromValues && [actionFromValues] || []));
            if (!actions) {
              _context4.next = 28;
              break;
            }
            _iterator = _createForOfIteratorHelper(actions);
            _context4.prev = 10;
            _loop = _regeneratorRuntime.mark(function _loop() {
              var action, params, valuesWithoutExecutedAction, optionsWithoutExecutedAction, remediationAction;
              return _regeneratorRuntime.wrap(function _loop$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      action = _step.value;
                      params = {};
                      if (typeof action !== 'string') {
                        params = action.params || {};
                        action = action.name;
                      }
                      valuesWithoutExecutedAction = removeActionFromValues(values);
                      optionsWithoutExecutedAction = removeActionFromOptions(options, action);
                      if (!(typeof idxResponse.actions[action] === 'function')) {
                        _context3.next = 19;
                        break;
                      }
                      _context3.prev = 6;
                      _context3.next = 9;
                      return idxResponse.actions[action](params);
                    case 9:
                      idxResponse = _context3.sent;
                      idxResponse = _Object$assign(_Object$assign({}, idxResponse), {
                        requestDidSucceed: true
                      });
                      _context3.next = 16;
                      break;
                    case 13:
                      _context3.prev = 13;
                      _context3.t0 = _context3["catch"](6);
                      return _context3.abrupt("return", {
                        v: handleIdxError(_context3.t0, remediator)
                      });
                    case 16:
                      if (!(action === 'cancel')) {
                        _context3.next = 18;
                        break;
                      }
                      return _context3.abrupt("return", {
                        v: {
                          idxResponse: idxResponse,
                          canceled: true
                        }
                      });
                    case 18:
                      return _context3.abrupt("return", {
                        v: remediate(idxResponse, valuesWithoutExecutedAction, optionsWithoutExecutedAction)
                      });
                    case 19:
                      remediationAction = _findInstanceProperty(neededToProceed).call(neededToProceed, function (_ref) {
                        var name = _ref.name;
                        return name === action;
                      });
                      if (!remediationAction) {
                        _context3.next = 32;
                        break;
                      }
                      _context3.prev = 21;
                      _context3.next = 24;
                      return idxResponse.proceed(action, params);
                    case 24:
                      idxResponse = _context3.sent;
                      idxResponse = _Object$assign(_Object$assign({}, idxResponse), {
                        requestDidSucceed: true
                      });
                      _context3.next = 31;
                      break;
                    case 28:
                      _context3.prev = 28;
                      _context3.t1 = _context3["catch"](21);
                      return _context3.abrupt("return", {
                        v: handleIdxError(_context3.t1, remediator)
                      });
                    case 31:
                      return _context3.abrupt("return", {
                        v: remediate(idxResponse, values, optionsWithoutExecutedAction)
                      });
                    case 32:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _loop, null, [[6, 13], [21, 28]]);
            });
            _iterator.s();
          case 13:
            if ((_step = _iterator.n()).done) {
              _context4.next = 20;
              break;
            }
            return _context4.delegateYield(_loop(), "t0", 15);
          case 15:
            _ret = _context4.t0;
            if (!(_typeof(_ret) === "object")) {
              _context4.next = 18;
              break;
            }
            return _context4.abrupt("return", _ret.v);
          case 18:
            _context4.next = 13;
            break;
          case 20:
            _context4.next = 25;
            break;
          case 22:
            _context4.prev = 22;
            _context4.t1 = _context4["catch"](10);
            _iterator.e(_context4.t1);
          case 25:
            _context4.prev = 25;
            _iterator.f();
            return _context4.finish(25);
          case 28:
            terminal = isTerminalResponse(idxResponse);
            messages = getMessagesFromResponse(idxResponse);
            if (!terminal) {
              _context4.next = 32;
              break;
            }
            return _context4.abrupt("return", {
              idxResponse: idxResponse,
              terminal: terminal,
              messages: messages
            });
          case 32:
            if (remediator) {
              _context4.next = 49;
              break;
            }
            if (!options.step) {
              _context4.next = 46;
              break;
            }
            values = filterValuesForRemediation(idxResponse, options.step, values);
            _context4.prev = 35;
            _context4.next = 38;
            return idxResponse.proceed(options.step, values);
          case 38:
            idxResponse = _context4.sent;
            idxResponse = _Object$assign(_Object$assign({}, idxResponse), {
              requestDidSucceed: true
            });
            return _context4.abrupt("return", {
              idxResponse: idxResponse
            });
          case 43:
            _context4.prev = 43;
            _context4.t2 = _context4["catch"](35);
            return _context4.abrupt("return", handleIdxError(_context4.t2));
          case 46:
            if (!(flow === 'default')) {
              _context4.next = 48;
              break;
            }
            return _context4.abrupt("return", {
              idxResponse: idxResponse
            });
          case 48:
            throw new AuthSdkError("\n      No remediation can match current flow, check policy settings in your org.\n      Remediations: [".concat(_reduceInstanceProperty(neededToProceed).call(neededToProceed, function (acc, curr) {
              return acc ? acc + ' ,' + curr.name : curr.name;
            }, ''), "]\n    "));
          case 49:
            if (remediator.canRemediate()) {
              _context4.next = 52;
              break;
            }
            nextStep = getNextStep(remediator, idxResponse);
            return _context4.abrupt("return", {
              idxResponse: idxResponse,
              nextStep: nextStep,
              messages: messages.length ? messages : undefined
            });
          case 52:
            name = remediator.getName();
            data = remediator.getData();
            _context4.prev = 54;
            _context4.next = 57;
            return idxResponse.proceed(name, data);
          case 57:
            idxResponse = _context4.sent;
            idxResponse = _Object$assign(_Object$assign({}, idxResponse), {
              requestDidSucceed: true
            });
            values = remediator.getValuesAfterProceed();
            options = _Object$assign(_Object$assign({}, options), {
              step: undefined
            });
            return _context4.abrupt("return", remediate(idxResponse, values, options));
          case 64:
            _context4.prev = 64;
            _context4.t3 = _context4["catch"](54);
            return _context4.abrupt("return", handleIdxError(_context4.t3, remediator));
          case 67:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee, null, [[10, 22, 25, 28], [35, 43], [54, 64]]);
  }));
  return _remediate.apply(this, arguments);
}

var AuthenticationFlow = {
  'identify': Identify,
  'select-authenticator-authenticate': SelectAuthenticatorAuthenticate,
  'select-authenticator-enroll': SelectAuthenticatorEnroll,
  'authenticator-enrollment-data': AuthenticatorEnrollmentData,
  'authenticator-verification-data': AuthenticatorVerificationData,
  'enroll-authenticator': EnrollAuthenticator,
  'challenge-authenticator': ChallengeAuthenticator,
  'challenge-poll': ChallengePoll,
  'reenroll-authenticator': ReEnrollAuthenticator,
  'enroll-poll': EnrollPoll,
  'redirect-idp': RedirectIdp,
  'skip': Skip
};

var PasswordRecoveryFlow = {
  'identify': Identify,
  'identify-recovery': Identify,
  'select-authenticator-authenticate': SelectAuthenticatorAuthenticate,
  'select-authenticator-enroll': SelectAuthenticatorEnroll,
  'challenge-authenticator': ChallengeAuthenticator,
  'authenticator-verification-data': AuthenticatorVerificationData,
  'authenticator-enrollment-data': AuthenticatorEnrollmentData,
  'reset-authenticator': ResetAuthenticator,
  'reenroll-authenticator': ReEnrollAuthenticator,
  'enroll-poll': EnrollPoll
};

var RegistrationFlow = {
  'select-enroll-profile': SelectEnrollProfile,
  'enroll-profile': EnrollProfile,
  'authenticator-enrollment-data': AuthenticatorEnrollmentData,
  'select-authenticator-enroll': SelectAuthenticatorEnroll,
  'enroll-poll': EnrollPoll,
  'select-enrollment-channel': SelectEnrollmentChannel,
  'enrollment-channel-data': EnrollmentChannelData,
  'enroll-authenticator': EnrollAuthenticator,
  'skip': Skip
};

var AccountUnlockFlow = {
  'identify': Identify,
  'select-authenticator-unlock-account': SelectAuthenticatorUnlockAccount,
  'select-authenticator-authenticate': SelectAuthenticatorAuthenticate,
  'challenge-authenticator': ChallengeAuthenticator,
  'challenge-poll': ChallengePoll,
  'authenticator-verification-data': AuthenticatorVerificationData
};

function getFlowSpecification(oktaAuth) {
  var flow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  var remediators,
      actions,
      withCredentials = true;
  switch (flow) {
    case 'register':
    case 'signup':
    case 'enrollProfile':
      remediators = RegistrationFlow;
      withCredentials = false;
      break;
    case 'recoverPassword':
    case 'resetPassword':
      remediators = PasswordRecoveryFlow;
      actions = ['currentAuthenticator-recover', 'currentAuthenticatorEnrollment-recover'];
      withCredentials = false;
      break;
    case 'unlockAccount':
      remediators = AccountUnlockFlow;
      withCredentials = false;
      actions = ['unlock-account'];
      break;
    case 'authenticate':
    case 'login':
    case 'signin':
      remediators = AuthenticationFlow;
      break;
    default:
      remediators = AuthenticationFlow;
      break;
  }
  return {
    flow: flow,
    remediators: remediators,
    actions: actions,
    withCredentials: withCredentials
  };
}

function initializeValues(options) {
  var knownOptions = ['flow', 'remediators', 'actions', 'withCredentials', 'step', 'shouldProceedWithEmailAuthenticator'];
  var values = _Object$assign({}, options);
  knownOptions.forEach(function (option) {
    delete values[option];
  });
  return values;
}
function initializeData(authClient, data) {
  var options = data.options;
  var flow = options.flow,
      withCredentials = options.withCredentials,
      remediators = options.remediators,
      actions = options.actions;
  var status = IdxStatus.PENDING;
  flow = flow || authClient.idx.getFlow() || 'default';
  if (flow) {
    authClient.idx.setFlow(flow);
    var flowSpec = getFlowSpecification(authClient, flow);
    withCredentials = typeof withCredentials !== 'undefined' ? withCredentials : flowSpec.withCredentials;
    remediators = remediators || flowSpec.remediators;
    actions = actions || flowSpec.actions;
  }
  return _Object$assign(_Object$assign({}, data), {
    options: _Object$assign(_Object$assign({}, options), {
      flow: flow,
      withCredentials: withCredentials,
      remediators: remediators,
      actions: actions
    }),
    status: status
  });
}
function getDataFromIntrospect(_x, _x2) {
  return _getDataFromIntrospect.apply(this, arguments);
}
function _getDataFromIntrospect() {
  _getDataFromIntrospect = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(authClient, data) {
    var options, stateHandle, withCredentials, version, state, scopes, recoveryToken, activationToken, idxResponse, meta, interactionHandle, interactResponse;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = data.options;
            stateHandle = options.stateHandle, withCredentials = options.withCredentials, version = options.version, state = options.state, scopes = options.scopes, recoveryToken = options.recoveryToken, activationToken = options.activationToken;
            meta = getSavedTransactionMeta(authClient, {
              state: state,
              recoveryToken: recoveryToken,
              activationToken: activationToken
            });
            if (!stateHandle) {
              _context.next = 9;
              break;
            }
            _context.next = 6;
            return introspect(authClient, {
              withCredentials: withCredentials,
              version: version,
              stateHandle: stateHandle
            });
          case 6:
            idxResponse = _context.sent;
            _context.next = 20;
            break;
          case 9:
            interactionHandle = meta === null || meta === void 0 ? void 0 : meta.interactionHandle;
            if (interactionHandle) {
              _context.next = 17;
              break;
            }
            authClient.transactionManager.clear();
            _context.next = 14;
            return interact(authClient, {
              withCredentials: withCredentials,
              state: state,
              scopes: scopes,
              activationToken: activationToken,
              recoveryToken: recoveryToken
            });
          case 14:
            interactResponse = _context.sent;
            interactionHandle = interactResponse.interactionHandle;
            meta = interactResponse.meta;
          case 17:
            _context.next = 19;
            return introspect(authClient, {
              withCredentials: withCredentials,
              version: version,
              interactionHandle: interactionHandle
            });
          case 19:
            idxResponse = _context.sent;
          case 20:
            return _context.abrupt("return", _Object$assign(_Object$assign({}, data), {
              idxResponse: idxResponse,
              meta: meta
            }));
          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getDataFromIntrospect.apply(this, arguments);
}
function getDataFromRemediate(_x3) {
  return _getDataFromRemediate.apply(this, arguments);
}
function _getDataFromRemediate() {
  _getDataFromRemediate = _asyncToGenerator( _regeneratorRuntime.mark(function _callee2(data) {
    var idxResponse, options, values, autoRemediate, remediators, actions, flow, step, shouldProceedWithEmailAuthenticator, shouldRemediate, _yield$remediate, idxResponseFromRemediation, nextStep, canceled;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            idxResponse = data.idxResponse, options = data.options, values = _valuesInstanceProperty(data);
            autoRemediate = options.autoRemediate, remediators = options.remediators, actions = options.actions, flow = options.flow, step = options.step, shouldProceedWithEmailAuthenticator = options.shouldProceedWithEmailAuthenticator;
            shouldRemediate = autoRemediate !== false && (remediators || actions || step);
            if (shouldRemediate) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", data);
          case 5:
            values = _Object$assign(_Object$assign({}, values), {
              stateHandle: idxResponse.rawIdxState.stateHandle
            });
            _context2.next = 8;
            return remediate(idxResponse, values, {
              remediators: remediators,
              actions: actions,
              flow: flow,
              step: step,
              shouldProceedWithEmailAuthenticator: shouldProceedWithEmailAuthenticator
            });
          case 8:
            _yield$remediate = _context2.sent;
            idxResponseFromRemediation = _yield$remediate.idxResponse;
            nextStep = _yield$remediate.nextStep;
            canceled = _yield$remediate.canceled;
            idxResponse = idxResponseFromRemediation;
            return _context2.abrupt("return", _Object$assign(_Object$assign({}, data), {
              idxResponse: idxResponse,
              nextStep: nextStep,
              canceled: canceled
            }));
          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getDataFromRemediate.apply(this, arguments);
}
function getTokens(_x4, _x5) {
  return _getTokens.apply(this, arguments);
}
function _getTokens() {
  _getTokens = _asyncToGenerator( _regeneratorRuntime.mark(function _callee3(authClient, data) {
    var meta, idxResponse, interactionCode, clientId, codeVerifier, ignoreSignature, redirectUri, urls, scopes, tokenResponse;
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            meta = data.meta, idxResponse = data.idxResponse;
            interactionCode = idxResponse.interactionCode;
            clientId = meta.clientId, codeVerifier = meta.codeVerifier, ignoreSignature = meta.ignoreSignature, redirectUri = meta.redirectUri, urls = meta.urls, scopes = meta.scopes;
            _context3.next = 5;
            return authClient.token.exchangeCodeForTokens({
              interactionCode: interactionCode,
              clientId: clientId,
              codeVerifier: codeVerifier,
              ignoreSignature: ignoreSignature,
              redirectUri: redirectUri,
              scopes: scopes
            }, urls);
          case 5:
            tokenResponse = _context3.sent;
            return _context3.abrupt("return", tokenResponse.tokens);
          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getTokens.apply(this, arguments);
}
function finalizeData(_x6, _x7) {
  return _finalizeData.apply(this, arguments);
}
function _finalizeData() {
  _finalizeData = _asyncToGenerator( _regeneratorRuntime.mark(function _callee4(authClient, data) {
    var options, idxResponse, canceled, status, exchangeCodeForTokens, shouldSaveResponse, shouldClearTransaction, clearSharedStorage, interactionCode, tokens, enabledFeatures, availableSteps, messages, terminal, hasActions, hasErrors, isTerminalSuccess;
    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            options = data.options, idxResponse = data.idxResponse, canceled = data.canceled, status = data.status;
            exchangeCodeForTokens = options.exchangeCodeForTokens;
            shouldSaveResponse = false;
            shouldClearTransaction = false;
            clearSharedStorage = true;
            if (idxResponse) {
              shouldSaveResponse = !!(idxResponse.requestDidSucceed || idxResponse.stepUp);
              enabledFeatures = getEnabledFeatures(idxResponse);
              availableSteps = getAvailableSteps(idxResponse);
              messages = getMessagesFromResponse(idxResponse);
              terminal = isTerminalResponse(idxResponse);
            }
            if (!terminal) {
              _context4.next = 15;
              break;
            }
            status = IdxStatus.TERMINAL;
            hasActions = _Object$keys(idxResponse.actions).length > 0;
            hasErrors = !!_findInstanceProperty(messages).call(messages, function (msg) {
              return msg.class === 'ERROR';
            });
            isTerminalSuccess = !hasActions && !hasErrors && idxResponse.requestDidSucceed === true;
            if (isTerminalSuccess) {
              shouldClearTransaction = true;
            } else {
              shouldSaveResponse = shouldSaveResponse && hasActions;
            }
            clearSharedStorage = false;
            _context4.next = 32;
            break;
          case 15:
            if (!canceled) {
              _context4.next = 20;
              break;
            }
            status = IdxStatus.CANCELED;
            shouldClearTransaction = true;
            _context4.next = 32;
            break;
          case 20:
            if (!(idxResponse === null || idxResponse === void 0 ? void 0 : idxResponse.interactionCode)) {
              _context4.next = 32;
              break;
            }
            interactionCode = idxResponse.interactionCode;
            if (!(exchangeCodeForTokens === false)) {
              _context4.next = 27;
              break;
            }
            status = IdxStatus.SUCCESS;
            shouldClearTransaction = false;
            _context4.next = 32;
            break;
          case 27:
            _context4.next = 29;
            return getTokens(authClient, data);
          case 29:
            tokens = _context4.sent;
            status = IdxStatus.SUCCESS;
            shouldClearTransaction = true;
          case 32:
            return _context4.abrupt("return", _Object$assign(_Object$assign({}, data), {
              status: status,
              interactionCode: interactionCode,
              tokens: tokens,
              shouldSaveResponse: shouldSaveResponse,
              shouldClearTransaction: shouldClearTransaction,
              clearSharedStorage: clearSharedStorage,
              enabledFeatures: enabledFeatures,
              availableSteps: availableSteps,
              messages: messages,
              terminal: terminal
            }));
          case 33:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _finalizeData.apply(this, arguments);
}
function handleError(err, data) {
  var error = data.error,
      status = data.status,
      shouldClearTransaction = data.shouldClearTransaction;
  if (isIdxResponse(err)) {
    error = err;
    status = IdxStatus.FAILURE;
    shouldClearTransaction = true;
  } else {
    throw err;
  }
  return _Object$assign(_Object$assign({}, data), {
    error: error,
    status: status,
    shouldClearTransaction: shouldClearTransaction
  });
}
function run(_x8) {
  return _run.apply(this, arguments);
}
function _run() {
  _run = _asyncToGenerator( _regeneratorRuntime.mark(function _callee5(authClient) {
    var options,
        _a,
        data,
        _data,
        idxResponse,
        meta,
        shouldSaveResponse,
        shouldClearTransaction,
        clearSharedStorage,
        status,
        enabledFeatures,
        availableSteps,
        tokens,
        nextStep,
        messages,
        error,
        interactionCode,
        rawIdxResponse,
        _requestDidSucceed,
        _ref,
        actions,
        context,
        neededToProceed,
        proceed,
        rawIdxState,
        requestDidSucceed,
        stepUp,
        _args5 = arguments;
    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            options = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
            data = {
              options: options,
              values: initializeValues(options)
            };
            data = initializeData(authClient, data);
            _context5.prev = 3;
            _context5.next = 6;
            return getDataFromIntrospect(authClient, data);
          case 6:
            data = _context5.sent;
            _context5.next = 9;
            return getDataFromRemediate(data);
          case 9:
            data = _context5.sent;
            _context5.next = 15;
            break;
          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](3);
            data = handleError(_context5.t0, data);
          case 15:
            _context5.next = 17;
            return finalizeData(authClient, data);
          case 17:
            data = _context5.sent;
            _data = data, idxResponse = _data.idxResponse, meta = _data.meta, shouldSaveResponse = _data.shouldSaveResponse, shouldClearTransaction = _data.shouldClearTransaction, clearSharedStorage = _data.clearSharedStorage, status = _data.status, enabledFeatures = _data.enabledFeatures, availableSteps = _data.availableSteps, tokens = _data.tokens, nextStep = _data.nextStep, messages = _data.messages, error = _data.error, interactionCode = _data.interactionCode;
            if (shouldClearTransaction) {
              authClient.transactionManager.clear({
                clearSharedStorage: clearSharedStorage
              });
            } else {
              saveTransactionMeta(authClient, _Object$assign({}, meta));
              if (shouldSaveResponse) {
                rawIdxResponse = idxResponse.rawIdxState, _requestDidSucceed = idxResponse.requestDidSucceed;
                authClient.transactionManager.saveIdxResponse({
                  rawIdxResponse: rawIdxResponse,
                  requestDidSucceed: _requestDidSucceed,
                  stateHandle: (_a = idxResponse.context) === null || _a === void 0 ? void 0 : _a.stateHandle,
                  interactionHandle: meta === null || meta === void 0 ? void 0 : meta.interactionHandle
                });
              }
            }
            _ref = idxResponse || {}, actions = _ref.actions, context = _ref.context, neededToProceed = _ref.neededToProceed, proceed = _ref.proceed, rawIdxState = _ref.rawIdxState, requestDidSucceed = _ref.requestDidSucceed, stepUp = _ref.stepUp;
            return _context5.abrupt("return", _Object$assign(_Object$assign(_Object$assign(_Object$assign(_Object$assign(_Object$assign(_Object$assign(_Object$assign(_Object$assign({
              status: status
            }, meta && {
              meta: meta
            }), enabledFeatures && {
              enabledFeatures: enabledFeatures
            }), availableSteps && {
              availableSteps: availableSteps
            }), tokens && {
              tokens: tokens
            }), nextStep && {
              nextStep: nextStep
            }), messages && messages.length && {
              messages: messages
            }), error && {
              error: error
            }), stepUp && {
              stepUp: stepUp
            }), {
              interactionCode: interactionCode,
              actions: actions,
              context: context,
              neededToProceed: neededToProceed,
              proceed: proceed,
              rawIdxState: rawIdxState,
              requestDidSucceed: requestDidSucceed
            }));
          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 12]]);
  }));
  return _run.apply(this, arguments);
}

function authenticate(_x) {
  return _authenticate.apply(this, arguments);
}
function _authenticate() {
  _authenticate = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(authClient) {
    var options,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            if (options.password && !options.authenticator) {
              options.authenticator = AuthenticatorKey.OKTA_PASSWORD;
            }
            return _context.abrupt("return", run(authClient, _Object$assign(_Object$assign({}, options), {
              flow: 'authenticate'
            })));
          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _authenticate.apply(this, arguments);
}

function cancel(_x, _x2) {
  return _cancel.apply(this, arguments);
}
function _cancel() {
  _cancel = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(authClient, options) {
    var meta, flowSpec;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            meta = authClient.transactionManager.load();
            flowSpec = getFlowSpecification(authClient, meta.flow);
            return _context.abrupt("return", run(authClient, _Object$assign(_Object$assign(_Object$assign({}, options), flowSpec), {
              actions: ['cancel']
            })));
          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _cancel.apply(this, arguments);
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var EmailVerifyCallbackError = function (_CustomError) {
  _inherits(EmailVerifyCallbackError, _CustomError);
  var _super = _createSuper(EmailVerifyCallbackError);
  function EmailVerifyCallbackError(state, otp) {
    var _this;
    _classCallCheck(this, EmailVerifyCallbackError);
    _this = _super.call(this, "Enter the OTP code in the originating client: ".concat(otp));
    _this.name = 'EmailVerifyCallbackError';
    _this.state = state;
    _this.otp = otp;
    return _this;
  }
  return EmailVerifyCallbackError;
}(CustomError);
function isEmailVerifyCallbackError(error) {
  return error.name === 'EmailVerifyCallbackError';
}
function isEmailVerifyCallback(urlPath) {
  return /(otp=)/i.test(urlPath) && /(state=)/i.test(urlPath);
}
function parseEmailVerifyCallback(urlPath) {
  return urlParamsToObject(urlPath);
}
function handleEmailVerifyCallback(_x, _x2) {
  return _handleEmailVerifyCallback.apply(this, arguments);
}
function _handleEmailVerifyCallback() {
  _handleEmailVerifyCallback = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(authClient, search) {
    var _parseEmailVerifyCall, state, otp;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!isEmailVerifyCallback(search)) {
              _context.next = 9;
              break;
            }
            _parseEmailVerifyCall = parseEmailVerifyCallback(search), state = _parseEmailVerifyCall.state, otp = _parseEmailVerifyCall.otp;
            if (!authClient.idx.canProceed({
              state: state
            })) {
              _context.next = 8;
              break;
            }
            _context.next = 5;
            return authClient.idx.proceed({
              state: state,
              otp: otp
            });
          case 5:
            return _context.abrupt("return", _context.sent);
          case 8:
            throw new EmailVerifyCallbackError(state, otp);
          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _handleEmailVerifyCallback.apply(this, arguments);
}

function canProceed(authClient) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var meta = getSavedTransactionMeta(authClient, options);
  return !!(meta || options.stateHandle);
}
function proceed(_x) {
  return _proceed.apply(this, arguments);
}
function _proceed() {
  _proceed = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(authClient) {
    var options,
        flow,
        state,
        meta,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            if (canProceed(authClient, options)) {
              _context.next = 3;
              break;
            }
            throw new AuthSdkError('Unable to proceed: saved transaction could not be loaded');
          case 3:
            flow = options.flow, state = options.state;
            if (!flow) {
              meta = getSavedTransactionMeta(authClient, {
                state: state
              });
              flow = meta === null || meta === void 0 ? void 0 : meta.flow;
            }
            return _context.abrupt("return", run(authClient, _Object$assign(_Object$assign({}, options), {
              flow: flow
            })));
          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _proceed.apply(this, arguments);
}

function poll(_x) {
  return _poll.apply(this, arguments);
}
function _poll() {
  _poll = _asyncToGenerator( _regeneratorRuntime.mark(function _callee2(authClient) {
    var options,
        _a,
        transaction,
        meta,
        availablePollingRemeditaions,
        _args2 = arguments;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            _context2.next = 3;
            return proceed(authClient, {
              startPolling: true
            });
          case 3:
            transaction = _context2.sent;
            meta = getSavedTransactionMeta(authClient);
            availablePollingRemeditaions = (_a = meta === null || meta === void 0 ? void 0 : meta.remediations) === null || _a === void 0 ? void 0 : _findInstanceProperty(_a).call(_a, function (remediation) {
              return _includesInstanceProperty(remediation).call(remediation, 'poll');
            });
            if (!(availablePollingRemeditaions === null || availablePollingRemeditaions === void 0 ? void 0 : availablePollingRemeditaions.length)) {
              warn('No polling remediations available at the current IDX flow stage');
            }
            if (!_Number$isInteger(options.refresh)) {
              _context2.next = 9;
              break;
            }
            return _context2.abrupt("return", new _Promise(function (resolve, reject) {
              setTimeout( _asyncToGenerator( _regeneratorRuntime.mark(function _callee() {
                var _a, _b, refresh;
                return _regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        try {
                          refresh = (_b = (_a = transaction.nextStep) === null || _a === void 0 ? void 0 : _a.poll) === null || _b === void 0 ? void 0 : _b.refresh;
                          if (refresh) {
                            resolve(poll(authClient, {
                              refresh: refresh
                            }));
                          } else {
                            resolve(transaction);
                          }
                        } catch (err) {
                          reject(err);
                        }
                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })), options.refresh);
            }));
          case 9:
            return _context2.abrupt("return", transaction);
          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _poll.apply(this, arguments);
}

function startTransaction(_x) {
  return _startTransaction.apply(this, arguments);
}
function _startTransaction() {
  _startTransaction = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(authClient) {
    var options,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            authClient.transactionManager.clear();
            return _context.abrupt("return", run(authClient, _Object$assign({
              exchangeCodeForTokens: false
            }, options)));
          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _startTransaction.apply(this, arguments);
}

function register(_x) {
  return _register.apply(this, arguments);
}
function _register() {
  _register = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(authClient) {
    var options,
        _yield$startTransacti,
        enabledFeatures,
        availableSteps,
        error,
        _error,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            if (hasSavedInteractionHandle(authClient)) {
              _context.next = 13;
              break;
            }
            _context.next = 4;
            return startTransaction(authClient, _Object$assign(_Object$assign({}, options), {
              flow: 'register',
              autoRemediate: false
            }));
          case 4:
            _yield$startTransacti = _context.sent;
            enabledFeatures = _yield$startTransacti.enabledFeatures;
            availableSteps = _yield$startTransacti.availableSteps;
            if (!(!options.activationToken && enabledFeatures && !_includesInstanceProperty(enabledFeatures).call(enabledFeatures, IdxFeature.REGISTRATION))) {
              _context.next = 10;
              break;
            }
            error = new AuthSdkError('Registration is not supported based on your current org configuration.');
            throw error;
          case 10:
            if (!(options.activationToken && (availableSteps === null || availableSteps === void 0 ? void 0 : availableSteps.some(function (_ref) {
              var name = _ref.name;
              return name === 'identify';
            })))) {
              _context.next = 13;
              break;
            }
            _error = new AuthSdkError('activationToken is not supported based on your current org configuration.');
            throw _error;
          case 13:
            return _context.abrupt("return", run(authClient, _Object$assign(_Object$assign({}, options), {
              flow: 'register'
            })));
          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _register.apply(this, arguments);
}

function recoverPassword(_x) {
  return _recoverPassword.apply(this, arguments);
}
function _recoverPassword() {
  _recoverPassword = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(authClient) {
    var options,
        flowSpec,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            flowSpec = getFlowSpecification(authClient, 'recoverPassword');
            return _context.abrupt("return", run(authClient, _Object$assign(_Object$assign({}, options), flowSpec)));
          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _recoverPassword.apply(this, arguments);
}

function handleInteractionCodeRedirect(_x, _x2) {
  return _handleInteractionCodeRedirect.apply(this, arguments);
}
function _handleInteractionCodeRedirect() {
  _handleInteractionCodeRedirect = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(authClient, url) {
    var meta, codeVerifier, savedState, _URL, searchParams, state, interactionCode, error, _yield$authClient$tok, tokens;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            meta = authClient.transactionManager.load();
            if (meta) {
              _context.next = 3;
              break;
            }
            throw new AuthSdkError('No transaction data was found in storage');
          case 3:
            codeVerifier = meta.codeVerifier, savedState = meta.state;
            _URL = new _URL2(url), searchParams = _URL.searchParams;
            state = searchParams.get('state');
            interactionCode = searchParams.get('interaction_code');
            error = searchParams.get('error');
            if (!error) {
              _context.next = 10;
              break;
            }
            throw new OAuthError(error, searchParams.get('error_description'));
          case 10:
            if (!(state !== savedState)) {
              _context.next = 12;
              break;
            }
            throw new AuthSdkError('State in redirect uri does not match with transaction state');
          case 12:
            if (interactionCode) {
              _context.next = 14;
              break;
            }
            throw new AuthSdkError('Unable to parse interaction_code from the url');
          case 14:
            _context.next = 16;
            return authClient.token.exchangeCodeForTokens({
              interactionCode: interactionCode,
              codeVerifier: codeVerifier
            });
          case 16:
            _yield$authClient$tok = _context.sent;
            tokens = _yield$authClient$tok.tokens;
            authClient.tokenManager.setTokens(tokens);
          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _handleInteractionCodeRedirect.apply(this, arguments);
}

function unlockAccount(_x) {
  return _unlockAccount.apply(this, arguments);
}
function _unlockAccount() {
  _unlockAccount = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(authClient) {
    var options,
        _yield$startTransacti,
        enabledFeatures,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            options.flow = 'unlockAccount';
            if (hasSavedInteractionHandle(authClient)) {
              _context.next = 9;
              break;
            }
            _context.next = 5;
            return startTransaction(authClient, _Object$assign(_Object$assign({}, options), {
              autoRemediate: false
            }));
          case 5:
            _yield$startTransacti = _context.sent;
            enabledFeatures = _yield$startTransacti.enabledFeatures;
            if (!(enabledFeatures && !_includesInstanceProperty(enabledFeatures).call(enabledFeatures, IdxFeature.ACCOUNT_UNLOCK))) {
              _context.next = 9;
              break;
            }
            throw new AuthSdkError('Self Service Account Unlock is not supported based on your current org configuration.');
          case 9:
            return _context.abrupt("return", run(authClient, _Object$assign({}, options)));
          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _unlockAccount.apply(this, arguments);
}

var OktaUserAgent = function () {
  function OktaUserAgent() {
    _classCallCheck(this, OktaUserAgent);
    this.environments = ["okta-auth-js/".concat("6.4.5")];
  }
  _createClass(OktaUserAgent, [{
    key: "addEnvironment",
    value: function addEnvironment(env) {
      this.environments.push(env);
    }
  }, {
    key: "getHttpHeader",
    value: function getHttpHeader() {
      this.maybeAddNodeEnvironment();
      return {
        'X-Okta-User-Agent-Extended': this.environments.join(' ')
      };
    }
  }, {
    key: "getVersion",
    value: function getVersion() {
      return "6.4.5";
    }
  }, {
    key: "maybeAddNodeEnvironment",
    value: function maybeAddNodeEnvironment() {
      if (isBrowser() || !process || !process.versions) {
        return;
      }
      var version = process.versions.node;
      this.environments.push("nodejs/".concat(version));
    }
  }]);
  return OktaUserAgent;
}();

var OktaAuth = function () {
  function OktaAuth(args) {
    var _this = this;
    _classCallCheck(this, OktaAuth);
    this.features = features;
    var options = this.options = buildOptions(args);
    this.storageManager = new StorageManager(options.storageManager, options.cookies, options.storageUtil);
    this.transactionManager = new TransactionManager(_Object$assign({
      storageManager: this.storageManager
    }, options.transactionManager));
    this._oktaUserAgent = new OktaUserAgent();
    this.tx = {
      status: transactionStatus.bind(null, this),
      resume: resumeTransaction.bind(null, this),
      exists: _Object$assign(transactionExists.bind(null, this), {
        _get: function _get(name) {
          var storage = options.storageUtil.storage;
          return storage.get(name);
        }
      }),
      introspect: introspectAuthn.bind(null, this)
    };
    this.pkce = {
      DEFAULT_CODE_CHALLENGE_METHOD: PKCE.DEFAULT_CODE_CHALLENGE_METHOD,
      generateVerifier: PKCE.generateVerifier,
      computeChallenge: PKCE.computeChallenge
    };
    _Object$assign(this.options.storageUtil, {
      getPKCEStorage: this.storageManager.getLegacyPKCEStorage.bind(this.storageManager),
      getHttpCache: this.storageManager.getHttpCache.bind(this.storageManager)
    });
    this._pending = {
      handleLogin: false
    };
    if (isBrowser()) {
      this.options = _Object$assign(this.options, {
        redirectUri: toAbsoluteUrl(args.redirectUri, window.location.origin)
      });
    }
    if (!args.maxClockSkew && args.maxClockSkew !== 0) {
      this.options.maxClockSkew = DEFAULT_MAX_CLOCK_SKEW;
    } else {
      this.options.maxClockSkew = args.maxClockSkew;
    }
    this.options.ignoreLifetime = !!args.ignoreLifetime;
    this.session = {
      close: closeSession.bind(null, this),
      exists: sessionExists.bind(null, this),
      get: getSession.bind(null, this),
      refresh: refreshSession.bind(null, this),
      setCookieAndRedirect: setCookieAndRedirect.bind(null, this)
    };
    this._tokenQueue = new PromiseQueue();
    var useQueue = function useQueue(method) {
      return PromiseQueue.prototype.push.bind(_this._tokenQueue, method, null);
    };
    var getWithRedirectFn = useQueue(getWithRedirect.bind(null, this));
    var getWithRedirectApi = _Object$assign(getWithRedirectFn, {
      _setLocation: function _setLocation(url) {
        window.location = url;
      }
    });
    var parseFromUrlFn = useQueue(parseFromUrl.bind(null, this));
    var parseFromUrlApi = _Object$assign(parseFromUrlFn, {
      _getHistory: function _getHistory() {
        return window.history;
      },
      _getLocation: function _getLocation() {
        return window.location;
      },
      _getDocument: function _getDocument() {
        return window.document;
      }
    });
    this.token = {
      prepareTokenParams: prepareTokenParams.bind(null, this),
      exchangeCodeForTokens: exchangeCodeForTokens.bind(null, this),
      getWithoutPrompt: getWithoutPrompt.bind(null, this),
      getWithPopup: getWithPopup.bind(null, this),
      getWithRedirect: getWithRedirectApi,
      parseFromUrl: parseFromUrlApi,
      decode: decodeToken,
      revoke: revokeToken.bind(null, this),
      renew: renewToken.bind(null, this),
      renewTokensWithRefresh: renewTokensWithRefresh.bind(null, this),
      renewTokens: renewTokens.bind(null, this),
      getUserInfo: getUserInfo.bind(null, this),
      verify: verifyToken.bind(null, this),
      isLoginRedirect: isLoginRedirect.bind(null, this)
    };
    var syncMethods = [
    'decode', 'isLoginRedirect',
    'getWithRedirect', 'parseFromUrl'];
    _Object$keys(this.token).forEach(function (key) {
      if (_indexOfInstanceProperty(syncMethods).call(syncMethods, key) >= 0) {
        return;
      }
      var method = _this.token[key];
      _this.token[key] = PromiseQueue.prototype.push.bind(_this._tokenQueue, method, null);
    });
    var boundStartTransaction = startTransaction.bind(null, this);
    this.idx = {
      interact: interact.bind(null, this),
      introspect: introspect.bind(null, this),
      authenticate: authenticate.bind(null, this),
      register: register.bind(null, this),
      start: boundStartTransaction,
      startTransaction: boundStartTransaction,
      poll: poll.bind(null, this),
      proceed: proceed.bind(null, this),
      cancel: cancel.bind(null, this),
      recoverPassword: recoverPassword.bind(null, this),
      handleInteractionCodeRedirect: handleInteractionCodeRedirect.bind(null, this),
      isInteractionRequired: isInteractionRequired.bind(null, this),
      isInteractionRequiredError: isInteractionRequiredError,
      handleEmailVerifyCallback: handleEmailVerifyCallback.bind(null, this),
      isEmailVerifyCallback: isEmailVerifyCallback,
      parseEmailVerifyCallback: parseEmailVerifyCallback,
      isEmailVerifyCallbackError: isEmailVerifyCallbackError,
      getSavedTransactionMeta: getSavedTransactionMeta.bind(null, this),
      createTransactionMeta: createTransactionMeta.bind(null, this),
      getTransactionMeta: getTransactionMeta.bind(null, this),
      saveTransactionMeta: saveTransactionMeta.bind(null, this),
      clearTransactionMeta: clearTransactionMeta.bind(null, this),
      isTransactionMetaValid: isTransactionMetaValid,
      setFlow: function setFlow(flow) {
        _this.options.flow = flow;
      },
      getFlow: function getFlow() {
        return _this.options.flow;
      },
      canProceed: canProceed.bind(null, this),
      unlockAccount: unlockAccount.bind(null, this)
    };
    this.http = {
      setRequestHeader: setRequestHeader.bind(null, this)
    };
    this.fingerprint = fingerprint.bind(null, this);
    this.emitter = new Emitter();
    this.tokenManager = new TokenManager(this, args.tokenManager);
    this.authStateManager = new AuthStateManager(this);
    this.serviceManager = new ServiceManager(this, args.services);
  }
  _createClass(OktaAuth, [{
    key: "start",
    value: function start() {
      this.tokenManager.start();
      if (!this.token.isLoginRedirect()) {
        this.authStateManager.updateAuthState();
      }
      this.serviceManager.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.tokenManager.stop();
      this.serviceManager.stop();
    }
  }, {
    key: "setHeaders",
    value: function setHeaders(headers) {
      this.options.headers = _Object$assign({}, this.options.headers, headers);
    }
  }, {
    key: "signIn",
    value: function () {
      var _signIn = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(opts) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.signInWithCredentials(opts));
              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function signIn(_x) {
        return _signIn.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "signInWithCredentials",
    value: function () {
      var _signInWithCredentials = _asyncToGenerator( _regeneratorRuntime.mark(function _callee2(opts) {
        var _this2 = this;
        var _postToTransaction;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                opts = clone(opts || {});
                _postToTransaction = function _postToTransaction(options) {
                  delete opts.sendFingerprint;
                  return postToTransaction(_this2, '/api/v1/authn', opts, options);
                };
                if (opts.sendFingerprint) {
                  _context2.next = 4;
                  break;
                }
                return _context2.abrupt("return", _postToTransaction());
              case 4:
                return _context2.abrupt("return", this.fingerprint().then(function (fingerprint) {
                  return _postToTransaction({
                    headers: {
                      'X-Device-Fingerprint': fingerprint
                    }
                  });
                }));
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function signInWithCredentials(_x2) {
        return _signInWithCredentials.apply(this, arguments);
      }
      return signInWithCredentials;
    }()
  }, {
    key: "signInWithRedirect",
    value: function () {
      var _signInWithRedirect = _asyncToGenerator( _regeneratorRuntime.mark(function _callee3() {
        var opts,
            originalUri,
            additionalParams,
            params,
            _args3 = arguments;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                opts = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
                originalUri = opts.originalUri, additionalParams = __rest(opts, ["originalUri"]);
                if (!this._pending.handleLogin) {
                  _context3.next = 4;
                  break;
                }
                return _context3.abrupt("return");
              case 4:
                this._pending.handleLogin = true;
                _context3.prev = 5;
                if (originalUri) {
                  this.setOriginalUri(originalUri);
                }
                params = _Object$assign({
                  scopes: this.options.scopes || ['openid', 'email', 'profile']
                }, additionalParams);
                _context3.next = 10;
                return this.token.getWithRedirect(params);
              case 10:
                _context3.prev = 10;
                this._pending.handleLogin = false;
                return _context3.finish(10);
              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5,, 10, 13]]);
      }));
      function signInWithRedirect() {
        return _signInWithRedirect.apply(this, arguments);
      }
      return signInWithRedirect;
    }()
  }, {
    key: "closeSession",
    value: function closeSession() {
      var _this3 = this;
      return this.session.close()
      .then( _asyncToGenerator( _regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this3.tokenManager.clear();
              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))).catch(function (e) {
        if (e.name === 'AuthApiError' && e.errorCode === 'E0000007') {
          return null;
        }
        throw e;
      });
    }
  }, {
    key: "revokeAccessToken",
    value: function () {
      var _revokeAccessToken = _asyncToGenerator( _regeneratorRuntime.mark(function _callee5(accessToken) {
        var accessTokenKey;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (accessToken) {
                  _context5.next = 6;
                  break;
                }
                _context5.next = 3;
                return this.tokenManager.getTokens();
              case 3:
                accessToken = _context5.sent.accessToken;
                accessTokenKey = this.tokenManager.getStorageKeyByType('accessToken');
                this.tokenManager.remove(accessTokenKey);
              case 6:
                if (accessToken) {
                  _context5.next = 8;
                  break;
                }
                return _context5.abrupt("return", _Promise.resolve(null));
              case 8:
                return _context5.abrupt("return", this.token.revoke(accessToken));
              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function revokeAccessToken(_x3) {
        return _revokeAccessToken.apply(this, arguments);
      }
      return revokeAccessToken;
    }()
  }, {
    key: "revokeRefreshToken",
    value: function () {
      var _revokeRefreshToken = _asyncToGenerator( _regeneratorRuntime.mark(function _callee6(refreshToken) {
        var refreshTokenKey;
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (refreshToken) {
                  _context6.next = 6;
                  break;
                }
                _context6.next = 3;
                return this.tokenManager.getTokens();
              case 3:
                refreshToken = _context6.sent.refreshToken;
                refreshTokenKey = this.tokenManager.getStorageKeyByType('refreshToken');
                this.tokenManager.remove(refreshTokenKey);
              case 6:
                if (refreshToken) {
                  _context6.next = 8;
                  break;
                }
                return _context6.abrupt("return", _Promise.resolve(null));
              case 8:
                return _context6.abrupt("return", this.token.revoke(refreshToken));
              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function revokeRefreshToken(_x4) {
        return _revokeRefreshToken.apply(this, arguments);
      }
      return revokeRefreshToken;
    }()
  }, {
    key: "getSignOutRedirectUrl",
    value: function getSignOutRedirectUrl() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var idToken = options.idToken,
          postLogoutRedirectUri = options.postLogoutRedirectUri,
          state = options.state;
      if (!idToken) {
        idToken = this.tokenManager.getTokensSync().idToken;
      }
      if (!idToken) {
        return '';
      }
      if (!postLogoutRedirectUri) {
        postLogoutRedirectUri = this.options.postLogoutRedirectUri;
      }
      var logoutUrl = getOAuthUrls(this).logoutUrl;
      var idTokenHint = idToken.idToken;
      var logoutUri = logoutUrl + '?id_token_hint=' + encodeURIComponent(idTokenHint);
      if (postLogoutRedirectUri) {
        logoutUri += '&post_logout_redirect_uri=' + encodeURIComponent(postLogoutRedirectUri);
      }
      if (state) {
        logoutUri += '&state=' + encodeURIComponent(state);
      }
      return logoutUri;
    }
  }, {
    key: "signOut",
    value: function () {
      var _signOut = _asyncToGenerator( _regeneratorRuntime.mark(function _callee7(options) {
        var defaultUri, currentUri, postLogoutRedirectUri, accessToken, refreshToken, revokeAccessToken, revokeRefreshToken, logoutUri;
        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                options = _Object$assign({}, options);
                defaultUri = window.location.origin;
                currentUri = window.location.href;
                postLogoutRedirectUri = options.postLogoutRedirectUri || this.options.postLogoutRedirectUri || defaultUri;
                accessToken = options.accessToken;
                refreshToken = options.refreshToken;
                revokeAccessToken = options.revokeAccessToken !== false;
                revokeRefreshToken = options.revokeRefreshToken !== false;
                if (revokeRefreshToken && typeof refreshToken === 'undefined') {
                  refreshToken = this.tokenManager.getTokensSync().refreshToken;
                }
                if (revokeAccessToken && typeof accessToken === 'undefined') {
                  accessToken = this.tokenManager.getTokensSync().accessToken;
                }
                if (!options.idToken) {
                  options.idToken = this.tokenManager.getTokensSync().idToken;
                }
                if (!(revokeRefreshToken && refreshToken)) {
                  _context7.next = 14;
                  break;
                }
                _context7.next = 14;
                return this.revokeRefreshToken(refreshToken);
              case 14:
                if (!(revokeAccessToken && accessToken)) {
                  _context7.next = 17;
                  break;
                }
                _context7.next = 17;
                return this.revokeAccessToken(accessToken);
              case 17:
                logoutUri = this.getSignOutRedirectUrl(_Object$assign(_Object$assign({}, options), {
                  postLogoutRedirectUri: postLogoutRedirectUri
                }));
                if (logoutUri) {
                  _context7.next = 22;
                  break;
                }
                return _context7.abrupt("return", this.closeSession()
                .
                then(function () {
                  if (postLogoutRedirectUri === currentUri) {
                    window.location.reload();
                  } else {
                    window.location.assign(postLogoutRedirectUri);
                  }
                }));
              case 22:
                if (options.clearTokensBeforeRedirect) {
                  this.tokenManager.clear();
                } else {
                  this.tokenManager.addPendingRemoveFlags();
                }
                window.location.assign(logoutUri);
              case 24:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
      function signOut(_x5) {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }()
  }, {
    key: "webfinger",
    value: function webfinger(opts) {
      var url = '/.well-known/webfinger' + toQueryString(opts);
      var options = {
        headers: {
          'Accept': 'application/jrd+json'
        }
      };
      return get(this, url, options);
    }
  }, {
    key: "isAuthenticated",
    value: function () {
      var _isAuthenticated = _asyncToGenerator( _regeneratorRuntime.mark(function _callee8() {
        var options,
            _this$tokenManager$ge,
            autoRenew,
            autoRemove,
            shouldRenew,
            shouldRemove,
            _this$tokenManager$ge2,
            accessToken,
            _this$tokenManager$ge3,
            idToken,
            _args8 = arguments;
        return _regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                options = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
                _this$tokenManager$ge = this.tokenManager.getOptions(), autoRenew = _this$tokenManager$ge.autoRenew, autoRemove = _this$tokenManager$ge.autoRemove;
                shouldRenew = options.onExpiredToken ? options.onExpiredToken === 'renew' : autoRenew;
                shouldRemove = options.onExpiredToken ? options.onExpiredToken === 'remove' : autoRemove;
                _this$tokenManager$ge2 = this.tokenManager.getTokensSync(), accessToken = _this$tokenManager$ge2.accessToken;
                if (!(accessToken && this.tokenManager.hasExpired(accessToken))) {
                  _context8.next = 19;
                  break;
                }
                accessToken = undefined;
                if (!shouldRenew) {
                  _context8.next = 18;
                  break;
                }
                _context8.prev = 8;
                _context8.next = 11;
                return this.tokenManager.renew('accessToken');
              case 11:
                accessToken = _context8.sent;
                _context8.next = 16;
                break;
              case 14:
                _context8.prev = 14;
                _context8.t0 = _context8["catch"](8);
              case 16:
                _context8.next = 19;
                break;
              case 18:
                if (shouldRemove) {
                  this.tokenManager.remove('accessToken');
                }
              case 19:
                _this$tokenManager$ge3 = this.tokenManager.getTokensSync(), idToken = _this$tokenManager$ge3.idToken;
                if (!(idToken && this.tokenManager.hasExpired(idToken))) {
                  _context8.next = 34;
                  break;
                }
                idToken = undefined;
                if (!shouldRenew) {
                  _context8.next = 33;
                  break;
                }
                _context8.prev = 23;
                _context8.next = 26;
                return this.tokenManager.renew('idToken');
              case 26:
                idToken = _context8.sent;
                _context8.next = 31;
                break;
              case 29:
                _context8.prev = 29;
                _context8.t1 = _context8["catch"](23);
              case 31:
                _context8.next = 34;
                break;
              case 33:
                if (shouldRemove) {
                  this.tokenManager.remove('idToken');
                }
              case 34:
                return _context8.abrupt("return", !!(accessToken && idToken));
              case 35:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[8, 14], [23, 29]]);
      }));
      function isAuthenticated() {
        return _isAuthenticated.apply(this, arguments);
      }
      return isAuthenticated;
    }()
  }, {
    key: "getUser",
    value: function () {
      var _getUser = _asyncToGenerator( _regeneratorRuntime.mark(function _callee9() {
        var _this$tokenManager$ge4, idToken, accessToken;
        return _regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this$tokenManager$ge4 = this.tokenManager.getTokensSync(), idToken = _this$tokenManager$ge4.idToken, accessToken = _this$tokenManager$ge4.accessToken;
                return _context9.abrupt("return", this.token.getUserInfo(accessToken, idToken));
              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
      function getUser() {
        return _getUser.apply(this, arguments);
      }
      return getUser;
    }()
  }, {
    key: "getIdToken",
    value: function getIdToken() {
      var _this$tokenManager$ge5 = this.tokenManager.getTokensSync(),
          idToken = _this$tokenManager$ge5.idToken;
      return idToken ? idToken.idToken : undefined;
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this$tokenManager$ge6 = this.tokenManager.getTokensSync(),
          accessToken = _this$tokenManager$ge6.accessToken;
      return accessToken ? accessToken.accessToken : undefined;
    }
  }, {
    key: "getRefreshToken",
    value: function getRefreshToken() {
      var _this$tokenManager$ge7 = this.tokenManager.getTokensSync(),
          refreshToken = _this$tokenManager$ge7.refreshToken;
      return refreshToken ? refreshToken.refreshToken : undefined;
    }
  }, {
    key: "storeTokensFromRedirect",
    value: function () {
      var _storeTokensFromRedirect = _asyncToGenerator( _regeneratorRuntime.mark(function _callee10() {
        var _yield$this$token$par, tokens;
        return _regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.token.parseFromUrl();
              case 2:
                _yield$this$token$par = _context10.sent;
                tokens = _yield$this$token$par.tokens;
                this.tokenManager.setTokens(tokens);
              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function storeTokensFromRedirect() {
        return _storeTokensFromRedirect.apply(this, arguments);
      }
      return storeTokensFromRedirect;
    }()
  }, {
    key: "setOriginalUri",
    value: function setOriginalUri(originalUri, state) {
      var sessionStorage = storageUtil.getSessionStorage();
      sessionStorage.setItem(REFERRER_PATH_STORAGE_KEY, originalUri);
      state = state || this.options.state;
      if (state) {
        var sharedStorage = this.storageManager.getOriginalUriStorage();
        sharedStorage.setItem(state, originalUri);
      }
    }
  }, {
    key: "getOriginalUri",
    value: function getOriginalUri(state) {
      state = state || this.options.state;
      if (state) {
        var sharedStorage = this.storageManager.getOriginalUriStorage();
        var originalUri = sharedStorage.getItem(state);
        if (originalUri) {
          return originalUri;
        }
      }
      var storage = storageUtil.getSessionStorage();
      return storage ? storage.getItem(REFERRER_PATH_STORAGE_KEY) || undefined : undefined;
    }
  }, {
    key: "removeOriginalUri",
    value: function removeOriginalUri(state) {
      var storage = storageUtil.getSessionStorage();
      storage.removeItem(REFERRER_PATH_STORAGE_KEY);
      state = state || this.options.state;
      if (state) {
        var sharedStorage = this.storageManager.getOriginalUriStorage();
        sharedStorage.removeItem && sharedStorage.removeItem(state);
      }
    }
  }, {
    key: "isLoginRedirect",
    value: function isLoginRedirect$1() {
      return isLoginRedirect(this);
    }
  }, {
    key: "handleLoginRedirect",
    value: function () {
      var _handleLoginRedirect = _asyncToGenerator( _regeneratorRuntime.mark(function _callee11(tokens, originalUri) {
        var state, oAuthResponse, restoreOriginalUri;
        return _regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                state = this.options.state;
                if (!tokens) {
                  _context11.next = 6;
                  break;
                }
                this.tokenManager.setTokens(tokens);
                originalUri = originalUri || this.getOriginalUri(this.options.state);
                _context11.next = 25;
                break;
              case 6:
                if (!this.isLoginRedirect()) {
                  _context11.next = 24;
                  break;
                }
                _context11.prev = 7;
                _context11.next = 10;
                return parseOAuthResponseFromUrl(this, {});
              case 10:
                oAuthResponse = _context11.sent;
                state = oAuthResponse.state;
                originalUri = originalUri || this.getOriginalUri(state);
                _context11.next = 15;
                return this.storeTokensFromRedirect();
              case 15:
                _context11.next = 22;
                break;
              case 17:
                _context11.prev = 17;
                _context11.t0 = _context11["catch"](7);
                _context11.next = 21;
                return this.authStateManager.updateAuthState();
              case 21:
                throw _context11.t0;
              case 22:
                _context11.next = 25;
                break;
              case 24:
                return _context11.abrupt("return");
              case 25:
                _context11.next = 27;
                return this.authStateManager.updateAuthState();
              case 27:
                this.removeOriginalUri(state);
                restoreOriginalUri = this.options.restoreOriginalUri;
                if (!restoreOriginalUri) {
                  _context11.next = 34;
                  break;
                }
                _context11.next = 32;
                return restoreOriginalUri(this, originalUri);
              case 32:
                _context11.next = 35;
                break;
              case 34:
                if (originalUri) {
                  window.location.replace(originalUri);
                }
              case 35:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[7, 17]]);
      }));
      function handleLoginRedirect(_x6, _x7) {
        return _handleLoginRedirect.apply(this, arguments);
      }
      return handleLoginRedirect;
    }()
  }, {
    key: "isPKCE",
    value: function isPKCE() {
      return !!this.options.pkce;
    }
  }, {
    key: "hasResponseType",
    value: function hasResponseType(responseType) {
      var hasResponseType = false;
      if (Array.isArray(this.options.responseType) && this.options.responseType.length) {
        var _context12;
        hasResponseType = _indexOfInstanceProperty(_context12 = this.options.responseType).call(_context12, responseType) >= 0;
      } else {
        hasResponseType = this.options.responseType === responseType;
      }
      return hasResponseType;
    }
  }, {
    key: "isAuthorizationCodeFlow",
    value: function isAuthorizationCodeFlow() {
      return this.hasResponseType('code');
    }
  }, {
    key: "getIssuerOrigin",
    value: function getIssuerOrigin() {
      return this.options.issuer.split('/oauth2/')[0];
    }
  }, {
    key: "forgotPassword",
    value: function forgotPassword(opts) {
      return postToTransaction(this, '/api/v1/authn/recovery/password', opts);
    }
  }, {
    key: "unlockAccount",
    value: function unlockAccount(opts) {
      return postToTransaction(this, '/api/v1/authn/recovery/unlock', opts);
    }
  }, {
    key: "verifyRecoveryToken",
    value: function verifyRecoveryToken(opts) {
      return postToTransaction(this, '/api/v1/authn/recovery/token', opts);
    }
  }, {
    key: "invokeApiMethod",
    value: function () {
      var _invokeApiMethod = _asyncToGenerator( _regeneratorRuntime.mark(function _callee12(options) {
        var accessToken;
        return _regeneratorRuntime.wrap(function _callee12$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (options.accessToken) {
                  _context13.next = 5;
                  break;
                }
                _context13.next = 3;
                return this.tokenManager.getTokens();
              case 3:
                accessToken = _context13.sent.accessToken;
                options.accessToken = accessToken === null || accessToken === void 0 ? void 0 : accessToken.accessToken;
              case 5:
                return _context13.abrupt("return", httpRequest(this, options));
              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee12, this);
      }));
      function invokeApiMethod(_x8) {
        return _invokeApiMethod.apply(this, arguments);
      }
      return invokeApiMethod;
    }()
  }]);
  return OktaAuth;
}();
OktaAuth.features = features;
OktaAuth.crypto = crypto;
OktaAuth.webauthn = webauthn;
OktaAuth.features = OktaAuth.prototype.features = features;
_Object$assign(OktaAuth, {
  constants: constants
});

export { ACCESS_TOKEN_STORAGE_KEY, AuthApiError, AuthPollStopError, AuthSdkError, AuthStateManager, AuthTransaction, AuthenticatorKey, CACHE_STORAGE_NAME, DEFAULT_CACHE_DURATION, DEFAULT_CODE_CHALLENGE_METHOD, DEFAULT_MAX_CLOCK_SKEW, DEFAULT_POLLING_DELAY, EVENT_ADDED, EVENT_ERROR, EVENT_EXPIRED, EVENT_REMOVED, EVENT_RENEWED, IDX_API_VERSION, IDX_RESPONSE_STORAGE_NAME, ID_TOKEN_STORAGE_KEY, INITIAL_AUTH_STATE, IdxFeature, IdxStatus, MAX_VERIFIER_LENGTH, MIN_VERIFIER_LENGTH, OAuthError, ORIGINAL_URI_STORAGE_NAME, OktaAuth, PKCE_STORAGE_NAME, REDIRECT_NONCE_COOKIE_NAME, REDIRECT_OAUTH_PARAMS_NAME, REDIRECT_STATE_COOKIE_NAME, REFERRER_PATH_STORAGE_KEY, REFRESH_TOKEN_STORAGE_KEY, SHARED_TRANSACTION_STORAGE_NAME, STATE_TOKEN_KEY_NAME, StorageManager, TOKEN_STORAGE_NAME, TRANSACTION_STORAGE_NAME, TokenManager, addListener, addPostMessageListener, addStateToken, assertPKCESupport, authenticate, bind, buildAuthorizeParams, canProceed, cancel, clearTransactionMeta, clone, convertTokenParamsToOAuthParams, createOAuthMeta, createTransactionMeta, crypto, decodeToken, delay, deprecate, deprecateWrap, exchangeCodeForTokens, extend, find, genRandomString, generateNonce, generateState, getConsole, getDefaultTokenParams, getHashOrSearch, getKey, getLink, getNativeConsole, getOAuthBaseUrl, getOAuthDomain, getOAuthUrls, getPollFn, getSavedTransactionMeta, getStateToken, getToken, getTransactionMeta, getUserInfo, getWellKnown, getWithPopup, getWithRedirect, getWithoutPrompt, handleEmailVerifyCallback, handleInteractionCodeRedirect, handleOAuthResponse, hasAuthorizationCode, hasErrorInUrl, hasInteractionCode, hasSavedInteractionHandle, hasTokensInHash, interact, introspect, introspectAuthn, isAbsoluteUrl, isAccessToken, isAuthApiError, isAuthenticator, isAuthorizationCodeError, isCodeFlow, isCustomAuthTransactionMeta, isEmailVerifyCallback, isEmailVerifyCallbackError, isFunction, isIDToken, isIdxTransactionMeta, isInteractionRequired, isInteractionRequiredError, isLoginRedirect, isNumber, isOAuthTransactionMeta, isObject, isPKCETransactionMeta, isPromise, isRedirectUri, isRefreshToken, isRefreshTokenError, isSameRefreshToken, isString, isToken, isTransactionMeta, isTransactionMetaValid, isTransactionMetaValidForFlow, isTransactionMetaValidForOptions, isoToUTCString, loadFrame, loadPopup, omit, parseEmailVerifyCallback, parseFromUrl, PKCE as pkce, poll, postRefreshToken, postToTokenEndpoint, postToTransaction, preparePKCE, prepareTokenParams, proceed, recoverPassword, register, removeListener, removeNils, removeTrailingSlash, renewToken, renewTokens, renewTokensWithRefresh, resumeTransaction, revokeToken, saveTransactionMeta, startTransaction, toAbsoluteUrl, toQueryString, toRelativeUrl, transactionExists, transactionStatus, transactionStep, unlockAccount, urlParamsToObject, validateClaims, validateCodeChallengeMethod, validateToken, verifyToken, warn };
//# sourceMappingURL=esm.node.mjs.map
