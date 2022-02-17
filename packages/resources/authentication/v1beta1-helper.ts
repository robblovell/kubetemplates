import { ResourceTemplate, Template } from "../resourceTemplate";
import { TokenReview, TokenReviewSpec, TokenReviewStatus, UserInfo } from "./v1beta1";
import { ObjectMeta } from "../meta/v1";

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
    static apiVersion = 'authentication/v1beta1';

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
