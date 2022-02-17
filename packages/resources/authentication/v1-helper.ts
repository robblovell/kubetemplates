import { ResourceTemplate, Template } from "../resourceTemplate";
import { BoundObjectReference, TokenRequest, TokenRequestSpec, TokenRequestStatus, TokenReview, TokenReviewSpec, TokenReviewStatus, UserInfo } from "./v1";
import { ObjectMeta, Time } from "../meta/v1";

export interface BoundObjectReferenceHelper extends BoundObjectReference {
    $uid(x: any): any;
}

/** BoundObjectReference is a reference to an object that a token is bound to. */
export class BoundObjectReferenceHelper extends Template implements BoundObjectReferenceHelper {
    constructor(obj: any) {
        super(obj)
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
}

export interface TokenRequestHelper extends TokenRequest {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** TokenRequest requests a token for a given service account. */
export class TokenRequestHelper extends ResourceTemplate implements TokenRequestHelper {
    static kind = 'TokenRequest';
    static apiVersion = 'authentication/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, TokenRequestHelper.kind, TokenRequestHelper.apiVersion)
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
    get spec(): any /*TokenRequestSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*TokenRequestSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*TokenRequestSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*TokenRequestStatusHelper*/ {
        return this._status
    }
    set status(x: any /*TokenRequestStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*TokenRequestStatusHelper*/) {
        this.status = x; return this
    }
}

export interface TokenRequestSpecHelper extends TokenRequestSpec {
    $audiences(x: any): any;
    $boundObjectRef(x: any): any;
    $expirationSeconds(x: any): any;
}

/** TokenRequestSpec contains client provided parameters of a token request. */
export class TokenRequestSpecHelper extends Template implements TokenRequestSpecHelper {
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

    _boundObjectRef: any;
    get boundObjectRef(): any /*BoundObjectReferenceHelper*/ {
        return this._boundObjectRef
    }
    set boundObjectRef(x: any /*BoundObjectReferenceHelper*/) {
        this._boundObjectRef = x
    }
    setBoundObjectRef(x: any /*BoundObjectReferenceHelper*/) {
        this.boundObjectRef = x; return this
    }

    _expirationSeconds: any;
    get expirationSeconds(): any /*number*/ {
        return this._expirationSeconds
    }
    set expirationSeconds(x: any /*number*/) {
        this._expirationSeconds = x
    }
    setExpirationSeconds(x: any /*number*/) {
        this.expirationSeconds = x; return this
    }
}

export interface TokenRequestStatusHelper extends TokenRequestStatus {
    $expirationTimestamp(x: any): any;
    $token(x: any): any;
}

/** TokenRequestStatus is the result of a token request. */
export class TokenRequestStatusHelper extends Template implements TokenRequestStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _expirationTimestamp: any;
    get expirationTimestamp(): any /*Time*/ {
        return this._expirationTimestamp
    }
    set expirationTimestamp(x: any /*Time*/) {
        this._expirationTimestamp = x
    }
    setExpirationTimestamp(x: any /*Time*/) {
        this.expirationTimestamp = x; return this
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

export interface TokenReviewHelper extends TokenReview {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver. */
export class TokenReviewHelper extends ResourceTemplate implements TokenReviewHelper {
    static kind = 'TokenReview';
    static apiVersion = 'authentication/v1';

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
