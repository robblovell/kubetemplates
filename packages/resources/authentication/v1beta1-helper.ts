import { ResourceTemplate, Template } from "../resourceTemplate";
import { TokenReview, TokenReviewSpec, TokenReviewStatus, UserInfo } from "./v1beta1";
import { ObjectMeta } from "../meta/v1";

export interface TokenReviewHelper extends TokenReview {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver. */
export class TokenReviewHelper extends ResourceTemplate implements TokenReviewHelper {
    static kind = 'TokenReview';
    static apiVersion = 'authentication/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, TokenReviewHelper.kind, TokenReviewHelper.apiVersion)
    }

    _metadata: any;
    get metadata(): any /*ObjectMetaHelper*/ {
        return this._metadata
    }
    set metadata(x: any /*ObjectMetaHelper*/) {
        this._metadata = x
    }
    setMetadata(x: any /*ObjectMetaHelper*/) {
        this.metadata = x; return this
    }

    _spec: any;
    get spec(): any /*TokenReviewSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*TokenReviewSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*TokenReviewSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*TokenReviewStatusHelper*/ {
        return this._status
    }
    set status(x: any /*TokenReviewStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*TokenReviewStatusHelper*/) {
        this.status = x; return this
    }
}

export interface TokenReviewSpecHelper extends TokenReviewSpec {
    $audiences(x: any): any;
    $token(x: any): any;
}

/** TokenReviewSpec is a description of the token authentication request. */
export class TokenReviewSpecHelper extends Template implements TokenReviewSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _audiences: any;
    get audiences(): any /*Array<string>*/ {
        return this._audiences
    }
    set audiences(x: any /*Array<string>*/) {
        this._audiences = this.set(this.audiences, x)
    }
    setAudiences(x: any /*Array<string>*/) {
        this.audiences = x; return this
    }

    _token: any;
    get token(): any /*string*/ {
        return this._token
    }
    set token(x: any /*string*/) {
        this._token = x
    }
    setToken(x: any /*string*/) {
        this.token = x; return this
    }
}

export interface TokenReviewStatusHelper extends TokenReviewStatus {
    $audiences(x: any): any;
    $authenticated(x: any): any;
    $error(x: any): any;
    $user(x: any): any;
}

/** TokenReviewStatus is the result of the token authentication request. */
export class TokenReviewStatusHelper extends Template implements TokenReviewStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _audiences: any;
    get audiences(): any /*Array<string>*/ {
        return this._audiences
    }
    set audiences(x: any /*Array<string>*/) {
        this._audiences = this.set(this.audiences, x)
    }
    setAudiences(x: any /*Array<string>*/) {
        this.audiences = x; return this
    }

    _authenticated: any;
    get authenticated(): any /*boolean*/ {
        return this._authenticated
    }
    set authenticated(x: any /*boolean*/) {
        this._authenticated = x
    }
    setAuthenticated(x: any /*boolean*/) {
        this.authenticated = x; return this
    }

    _error: any;
    get error(): any /*string*/ {
        return this._error
    }
    set error(x: any /*string*/) {
        this._error = x
    }
    setError(x: any /*string*/) {
        this.error = x; return this
    }

    _user: any;
    get user(): any /*UserInfoHelper*/ {
        return this._user
    }
    set user(x: any /*UserInfoHelper*/) {
        this._user = x
    }
    setUser(x: any /*UserInfoHelper*/) {
        this.user = x; return this
    }
}

export interface UserInfoHelper extends UserInfo {
    $extra(x: any): any;
    $groups(x: any): any;
    $uid(x: any): any;
    $username(x: any): any;
}

/** UserInfo holds the information about the user needed to implement the user.Info interface. */
export class UserInfoHelper extends Template implements UserInfoHelper {
    constructor(obj: any) {
        super(obj)
    }

    _extra: any;
    get extra(): any /*{[name: string]: Array<string>}Helper*/ {
        return this._extra
    }
    set extra(x: any /*{[name: string]: Array<string>}Helper*/) {
        this._extra = this.set(this.extra, x)
    }
    setExtra(x: any /*{[name: string]: Array<string>}Helper*/) {
        this.extra = x; return this
    }

    _groups: any;
    get groups(): any /*Array<string>*/ {
        return this._groups
    }
    set groups(x: any /*Array<string>*/) {
        this._groups = this.set(this.groups, x)
    }
    setGroups(x: any /*Array<string>*/) {
        this.groups = x; return this
    }

    _uid: any;
    get uid(): any /*string*/ {
        return this._uid
    }
    set uid(x: any /*string*/) {
        this._uid = x
    }
    setUid(x: any /*string*/) {
        this.uid = x; return this
    }

    _username: any;
    get username(): any /*string*/ {
        return this._username
    }
    set username(x: any /*string*/) {
        this._username = x
    }
    setUsername(x: any /*string*/) {
        this.username = x; return this
    }
}
