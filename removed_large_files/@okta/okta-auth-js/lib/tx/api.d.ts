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
 *
 */
import { AuthTransaction } from './AuthTransaction';
export declare function transactionStatus(sdk: any, args: any): Promise<any>;
export declare function resumeTransaction(sdk: any, args: any): any;
export declare function introspectAuthn(sdk: any, args: any): Promise<AuthTransaction>;
export declare function transactionStep(sdk: any, args: any): Promise<any>;
export declare function transactionExists(sdk: any): boolean;
export declare function postToTransaction(sdk: any, url: any, args: any, options?: any): Promise<AuthTransaction>;
