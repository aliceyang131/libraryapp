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
import { Remediator, RemediationValues } from './Base/Remediator';
import { IdxContext } from '../types/idx-js';
export declare type EnrollmentChannelDataValues = RemediationValues & {
    email?: string;
    phoneNumber?: string;
};
export declare class EnrollmentChannelData extends Remediator<EnrollmentChannelDataValues> {
    static remediationName: string;
    getInputEmail(): {
        name: string;
        type: string;
        required: boolean;
        label: string;
    }[];
    getInputPhoneNumber(): {
        name: string;
        type: string;
        required: boolean;
        label: string;
    }[];
    canRemediate(): boolean;
    getNextStep(context: IdxContext): {
        authenticator: import("../types/idx-js").IdxAuthenticator;
        name: string;
        canSkip?: boolean | undefined;
        canResend?: boolean | undefined;
        inputs?: import("../..").Input[] | undefined;
        options?: import("../types/idx-js").IdxOption[] | undefined;
        poll?: import("../..").IdxPollOptions | undefined;
        authenticatorEnrollments?: import("../types/idx-js").IdxAuthenticator[] | undefined;
    };
    getData(): {
        stateHandle: string | undefined;
        email: string | undefined;
        phoneNumber: string | undefined;
    };
    getValuesAfterProceed(): EnrollmentChannelDataValues;
}
