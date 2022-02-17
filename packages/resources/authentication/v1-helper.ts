import { ResourceTemplate, Template } from "../resourceTemplate";
import { BoundObjectReference, TokenRequest, TokenRequestSpec, TokenRequestStatus, TokenReview, TokenReviewSpec, TokenReviewStatus, UserInfo } from "./v1";
import { ObjectMeta, Time } from "../meta/v1";

export interface BoundObjectReferenceHelper extends BoundObjectReference {
    $uid(x: string): BoundObjectReferenceHelper;
}

/** BoundObjectReference is a reference to an object that a token is bound to. */
export class BoundObjectReferenceHelper extends Template implements BoundObjectReferenceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _uid: string;
    get uid(): string {
        return this._uid
    }
    set uid(x: string) {
        this._uid = x
    }
    $Uid(x: string) {
        this.uid = x; return this
    }
}

export interface TokenRequestHelper extends TokenRequest {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): TokenRequestHelper;
    spec: TokenRequestSpecHelper;
    $spec(x: TokenRequestSpecHelper): TokenRequestHelper;
    status: TokenRequestStatusHelper;
    $status(x: TokenRequestStatusHelper): TokenRequestHelper;
}

/** TokenRequest requests a token for a given service account. */
export class TokenRequestHelper extends ResourceTemplate implements TokenRequestHelper {
    static kind = 'TokenRequest';
    static apiVersion = 'authentication/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, TokenRequestHelper.kind, TokenRequestHelper.apiVersion)
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: TokenRequestSpecHelper;
    get spec(): TokenRequestSpecHelper {
        return this._spec
    }
    set spec(x: TokenRequestSpecHelper) {
        this._spec = x
    }
    $Spec(x: TokenRequestSpecHelper) {
        this.spec = x; return this
    }

    _status: TokenRequestStatusHelper;
    get status(): TokenRequestStatusHelper {
        return this._status
    }
    set status(x: TokenRequestStatusHelper) {
        this._status = x
    }
    $Status(x: TokenRequestStatusHelper) {
        this.status = x; return this
    }
}

export interface TokenRequestSpecHelper extends TokenRequestSpec {
    $audiences(x: Array<string>): TokenRequestSpecHelper;
    boundObjectRef: BoundObjectReferenceHelper;
    $boundObjectRef(x: BoundObjectReferenceHelper): TokenRequestSpecHelper;
    $expirationSeconds(x: number): TokenRequestSpecHelper;
}

/** TokenRequestSpec contains client provided parameters of a token request. */
export class TokenRequestSpecHelper extends Template implements TokenRequestSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _audiences: Array<string>;
    get audiences(): Array<string> {
        return this._audiences
    }
    set audiences(x: Array<string>) {
        this._audiences = this.set(this.audiences, x)
    }
    $Audiences(x: Array<string>) {
        this.audiences = x; return this
    }

    _boundObjectRef: BoundObjectReferenceHelper;
    get boundObjectRef(): BoundObjectReferenceHelper {
        return this._boundObjectRef
    }
    set boundObjectRef(x: BoundObjectReferenceHelper) {
        this._boundObjectRef = x
    }
    $BoundObjectRef(x: BoundObjectReferenceHelper) {
        this.boundObjectRef = x; return this
    }

    _expirationSeconds: number;
    get expirationSeconds(): number {
        return this._expirationSeconds
    }
    set expirationSeconds(x: number) {
        this._expirationSeconds = x
    }
    $ExpirationSeconds(x: number) {
        this.expirationSeconds = x; return this
    }
}

export interface TokenRequestStatusHelper extends TokenRequestStatus {
    $expirationTimestamp(x: Time): TokenRequestStatusHelper;
    $token(x: string): TokenRequestStatusHelper;
}

/** TokenRequestStatus is the result of a token request. */
export class TokenRequestStatusHelper extends Template implements TokenRequestStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _expirationTimestamp: Time;
    get expirationTimestamp(): Time {
        return this._expirationTimestamp
    }
    set expirationTimestamp(x: Time) {
        this._expirationTimestamp = x
    }
    $ExpirationTimestamp(x: Time) {
        this.expirationTimestamp = x; return this
    }

    _token: string;
    get token(): string {
        return this._token
    }
    set token(x: string) {
        this._token = x
    }
    $Token(x: string) {
        this.token = x; return this
    }
}

export interface TokenReviewHelper extends TokenReview {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): TokenReviewHelper;
    spec: TokenReviewSpecHelper;
    $spec(x: TokenReviewSpecHelper): TokenReviewHelper;
    status: TokenReviewStatusHelper;
    $status(x: TokenReviewStatusHelper): TokenReviewHelper;
}

/** TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver. */
export class TokenReviewHelper extends ResourceTemplate implements TokenReviewHelper {
    static kind = 'TokenReview';
    static apiVersion = 'authentication/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, TokenReviewHelper.kind, TokenReviewHelper.apiVersion)
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: TokenReviewSpecHelper;
    get spec(): TokenReviewSpecHelper {
        return this._spec
    }
    set spec(x: TokenReviewSpecHelper) {
        this._spec = x
    }
    $Spec(x: TokenReviewSpecHelper) {
        this.spec = x; return this
    }

    _status: TokenReviewStatusHelper;
    get status(): TokenReviewStatusHelper {
        return this._status
    }
    set status(x: TokenReviewStatusHelper) {
        this._status = x
    }
    $Status(x: TokenReviewStatusHelper) {
        this.status = x; return this
    }
}

export interface TokenReviewSpecHelper extends TokenReviewSpec {
    $audiences(x: Array<string>): TokenReviewSpecHelper;
    $token(x: string): TokenReviewSpecHelper;
}

/** TokenReviewSpec is a description of the token authentication request. */
export class TokenReviewSpecHelper extends Template implements TokenReviewSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _audiences: Array<string>;
    get audiences(): Array<string> {
        return this._audiences
    }
    set audiences(x: Array<string>) {
        this._audiences = this.set(this.audiences, x)
    }
    $Audiences(x: Array<string>) {
        this.audiences = x; return this
    }

    _token: string;
    get token(): string {
        return this._token
    }
    set token(x: string) {
        this._token = x
    }
    $Token(x: string) {
        this.token = x; return this
    }
}

export interface TokenReviewStatusHelper extends TokenReviewStatus {
    $audiences(x: Array<string>): TokenReviewStatusHelper;
    $authenticated(x: boolean): TokenReviewStatusHelper;
    $error(x: string): TokenReviewStatusHelper;
    user: UserInfoHelper;
    $user(x: UserInfoHelper): TokenReviewStatusHelper;
}

/** TokenReviewStatus is the result of the token authentication request. */
export class TokenReviewStatusHelper extends Template implements TokenReviewStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _audiences: Array<string>;
    get audiences(): Array<string> {
        return this._audiences
    }
    set audiences(x: Array<string>) {
        this._audiences = this.set(this.audiences, x)
    }
    $Audiences(x: Array<string>) {
        this.audiences = x; return this
    }

    _authenticated: boolean;
    get authenticated(): boolean {
        return this._authenticated
    }
    set authenticated(x: boolean) {
        this._authenticated = x
    }
    $Authenticated(x: boolean) {
        this.authenticated = x; return this
    }

    _error: string;
    get error(): string {
        return this._error
    }
    set error(x: string) {
        this._error = x
    }
    $Error(x: string) {
        this.error = x; return this
    }

    _user: UserInfoHelper;
    get user(): UserInfoHelper {
        return this._user
    }
    set user(x: UserInfoHelper) {
        this._user = x
    }
    $User(x: UserInfoHelper) {
        this.user = x; return this
    }
}

export interface UserInfoHelper extends UserInfo {
    $extra(x: {[name: string]: Array<string>}): UserInfoHelper;
    $groups(x: Array<string>): UserInfoHelper;
    $uid(x: string): UserInfoHelper;
    $username(x: string): UserInfoHelper;
}

/** UserInfo holds the information about the user needed to implement the user.Info interface. */
export class UserInfoHelper extends Template implements UserInfoHelper {
    constructor(obj: any) {
        super(obj)
    }

    _extra: {[name: string]: Array<string>};
    get extra(): {[name: string]: Array<string>} {
        return this._extra
    }
    set extra(x: {[name: string]: Array<string>}) {
        this._extra = this.set(this.extra, x)
    }
    $Extra(x: {[name: string]: Array<string>}) {
        this.extra = x; return this
    }

    _groups: Array<string>;
    get groups(): Array<string> {
        return this._groups
    }
    set groups(x: Array<string>) {
        this._groups = this.set(this.groups, x)
    }
    $Groups(x: Array<string>) {
        this.groups = x; return this
    }

    _uid: string;
    get uid(): string {
        return this._uid
    }
    set uid(x: string) {
        this._uid = x
    }
    $Uid(x: string) {
        this.uid = x; return this
    }

    _username: string;
    get username(): string {
        return this._username
    }
    set username(x: string) {
        this._username = x
    }
    $Username(x: string) {
        this.username = x; return this
    }
}
