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
import { OktaAuthInterface, OktaAuthOptions, AccessToken, RefreshToken, TokenAPI, FeaturesAPI, CryptoAPI, WebauthnAPI, SignoutAPI, FingerprintAPI, UserClaims, SigninWithRedirectOptions, SigninWithCredentialsOptions, SignoutOptions, Tokens, ForgotPasswordOptions, VerifyRecoveryTokenOptions, TransactionAPI, SessionAPI, SigninAPI, PkceAPI, SigninOptions, IdxAPI, SignoutRedirectUrlOptions, HttpAPI, RequestOptions, IsAuthenticatedOptions, OAuthResponseType } from './types';
import { AuthTransaction } from './tx';
import { TokenManager } from './TokenManager';
import { ServiceManager } from './ServiceManager';
import PromiseQueue from './PromiseQueue';
import { AuthStateManager } from './AuthStateManager';
import { StorageManager } from './StorageManager';
import TransactionManager from './TransactionManager';
import { OktaUserAgent } from './OktaUserAgent';
declare class OktaAuth implements OktaAuthInterface, SigninAPI, SignoutAPI {
    options: OktaAuthOptions;
    storageManager: StorageManager;
    transactionManager: TransactionManager;
    tx: TransactionAPI;
    idx: IdxAPI;
    session: SessionAPI;
    pkce: PkceAPI;
    static features: FeaturesAPI;
    static crypto: CryptoAPI;
    static webauthn: WebauthnAPI;
    features: FeaturesAPI;
    token: TokenAPI;
    _tokenQueue: PromiseQueue;
    emitter: any;
    tokenManager: TokenManager;
    authStateManager: AuthStateManager;
    serviceManager: ServiceManager;
    http: HttpAPI;
    fingerprint: FingerprintAPI;
    _oktaUserAgent: OktaUserAgent;
    _pending: {
        handleLogin: boolean;
    };
    constructor(args: OktaAuthOptions);
    start(): void;
    stop(): void;
    setHeaders(headers: any): void;
    signIn(opts: SigninOptions): Promise<AuthTransaction>;
    signInWithCredentials(opts: SigninWithCredentialsOptions): Promise<AuthTransaction>;
    signInWithRedirect(opts?: SigninWithRedirectOptions): Promise<void>;
    closeSession(): Promise<unknown>;
    revokeAccessToken(accessToken?: AccessToken): Promise<unknown>;
    revokeRefreshToken(refreshToken?: RefreshToken): Promise<unknown>;
    getSignOutRedirectUrl(options?: SignoutRedirectUrlOptions): string;
    signOut(options?: SignoutOptions): Promise<void>;
    webfinger(opts: any): Promise<object>;
    isAuthenticated(options?: IsAuthenticatedOptions): Promise<boolean>;
    getUser(): Promise<UserClaims>;
    getIdToken(): string | undefined;
    getAccessToken(): string | undefined;
    getRefreshToken(): string | undefined;
    /**
     * Store parsed tokens from redirect url
     */
    storeTokensFromRedirect(): Promise<void>;
    setOriginalUri(originalUri: string, state?: string): void;
    getOriginalUri(state?: string): string | undefined;
    removeOriginalUri(state?: string): void;
    isLoginRedirect(): boolean;
    handleLoginRedirect(tokens?: Tokens, originalUri?: string): Promise<void>;
    isPKCE(): boolean;
    hasResponseType(responseType: OAuthResponseType): boolean;
    isAuthorizationCodeFlow(): boolean;
    getIssuerOrigin(): string;
    forgotPassword(opts: any): Promise<AuthTransaction>;
    unlockAccount(opts: ForgotPasswordOptions): Promise<AuthTransaction>;
    verifyRecoveryToken(opts: VerifyRecoveryTokenOptions): Promise<AuthTransaction>;
    invokeApiMethod(options: RequestOptions): Promise<unknown>;
}
export default OktaAuth;
