import { APIError } from '../../types/api';
import { Tokens } from '../../types/Token';
import { PKCETransactionMeta } from '../../types/Transaction';
import { FlowIdentifier } from './FlowIdentifier';
import { IdxActions, IdxAuthenticator, IdxContext, IdxForm, IdxMessage, IdxOption, IdxRemediation, IdxResponse, RawIdxResponse } from './idx-js';
export declare enum IdxStatus {
    SUCCESS = "SUCCESS",
    PENDING = "PENDING",
    FAILURE = "FAILURE",
    TERMINAL = "TERMINAL",
    CANCELED = "CANCELED"
}
export declare enum AuthenticatorKey {
    OKTA_PASSWORD = "okta_password",
    OKTA_EMAIL = "okta_email",
    PHONE_NUMBER = "phone_number",
    GOOGLE_AUTHENTICATOR = "google_otp",
    SECURITY_QUESTION = "security_question",
    OKTA_VERIFY = "okta_verify",
    WEBAUTHN = "webauthn"
}
export declare type Input = {
    name: string;
    key?: string;
    type?: string;
    label?: string;
    value?: string | {
        form: IdxForm;
    };
    minLength?: number;
    maxLength?: number;
    secret?: boolean;
    required?: boolean;
};
export interface IdxPollOptions {
    required?: boolean;
    refresh?: number;
}
export declare type NextStep = {
    name: string;
    authenticator?: IdxAuthenticator;
    canSkip?: boolean;
    canResend?: boolean;
    inputs?: Input[];
    options?: IdxOption[];
    poll?: IdxPollOptions;
    authenticatorEnrollments?: IdxAuthenticator[];
};
export declare enum IdxFeature {
    PASSWORD_RECOVERY = "recover-password",
    REGISTRATION = "enroll-profile",
    SOCIAL_IDP = "redirect-idp",
    ACCOUNT_UNLOCK = "unlock-account"
}
export interface IdxTransactionMeta extends PKCETransactionMeta {
    interactionHandle?: string;
    remediations?: string[];
    flow?: FlowIdentifier;
    withCredentials?: boolean;
    activationToken?: string;
    recoveryToken?: string;
}
export interface IdxTransaction {
    status: IdxStatus;
    tokens?: Tokens;
    nextStep?: NextStep;
    messages?: IdxMessage[];
    error?: APIError | IdxResponse;
    meta?: IdxTransactionMeta;
    enabledFeatures?: IdxFeature[];
    availableSteps?: NextStep[];
    requestDidSucceed?: boolean;
    stepUp?: boolean;
    proceed: (remediationName: string, params: unknown) => Promise<IdxResponse>;
    neededToProceed: IdxRemediation[];
    rawIdxState: RawIdxResponse;
    interactionCode?: string;
    actions: IdxActions;
    context: IdxContext;
}
export declare type Authenticator = {
    id?: string;
    key?: string;
    methodType?: string;
    phoneNumber?: string;
};
export declare function isAuthenticator(obj: any): obj is Authenticator;
export interface RemediationResponse {
    idxResponse: IdxResponse;
    nextStep?: NextStep;
    messages?: IdxMessage[];
    terminal?: boolean;
    canceled?: boolean;
}
export interface InteractResponse {
    state?: string;
    interactionHandle: string;
    meta: IdxTransactionMeta;
}
