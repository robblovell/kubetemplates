import { ResourceTemplate } from "../resourceTemplate";
import { ObjectMeta, Time } from "../meta/v1";
import { BoundObjectReference, TokenRequestSpec, TokenRequestStatus, TokenReviewSpec, TokenReviewStatus, UserInfo } from "./v1";

/** BoundObjectReference is a reference to an object that a token is bound to. */
export class BoundObjectReferenceHelper extends ResourceTemplate {
    static kind = 'BoundObjectReference';
    static apiVersion = 'authentication/v1';

    uid(uid: string): BoundObjectReferenceHelper {
        this._template.uid = uid
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = BoundObjectReferenceHelper.kind
        this._template.apiVersion = BoundObjectReferenceHelper.apiVersion
    }
}

/** TokenRequest requests a token for a given service account. */
export class TokenRequestHelper extends ResourceTemplate {
    static kind = 'TokenRequest';
    static apiVersion = 'authentication/v1';

    metadata(metadata: ObjectMeta): TokenRequestHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: TokenRequestSpec): TokenRequestHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: TokenRequestStatus): TokenRequestHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = TokenRequestHelper.kind
        this._template.apiVersion = TokenRequestHelper.apiVersion
    }
}

/** TokenRequestSpec contains client provided parameters of a token request. */
export class TokenRequestSpecHelper extends ResourceTemplate {
    static kind = 'TokenRequestSpec';
    static apiVersion = 'authentication/v1';

    audiences(audiences: Array<string>): TokenRequestSpecHelper {
        if (!Array.isArray(audiences)) { audiences = [audiences] }
        if (!this._template.audiences) this._template.audiences = audiences
        this._template.audiences = [...this._template.audiences, ...audiences]
        return this
    }

    boundObjectRef(boundObjectRef: BoundObjectReference): TokenRequestSpecHelper {
        if (!this._template.boundObjectRef) this._template.boundObjectRef = []
        this._template.boundObjectRef = {
            ...this._template.boundObjectRef,
            ...boundObjectRef
        }
        return this
    }

    expirationSeconds(expirationSeconds: number): TokenRequestSpecHelper {
        this._template.expirationSeconds = expirationSeconds
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = TokenRequestSpecHelper.kind
        this._template.apiVersion = TokenRequestSpecHelper.apiVersion
    }
}

/** TokenRequestStatus is the result of a token request. */
export class TokenRequestStatusHelper extends ResourceTemplate {
    static kind = 'TokenRequestStatus';
    static apiVersion = 'authentication/v1';

    expirationTimestamp(expirationTimestamp: Time): TokenRequestStatusHelper {
        this._template.expirationTimestamp = expirationTimestamp
        return this
    }

    token(token: string): TokenRequestStatusHelper {
        this._template.token = token
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = TokenRequestStatusHelper.kind
        this._template.apiVersion = TokenRequestStatusHelper.apiVersion
    }
}

/** TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver. */
export class TokenReviewHelper extends ResourceTemplate {
    static kind = 'TokenReview';
    static apiVersion = 'authentication/v1';

    metadata(metadata: ObjectMeta): TokenReviewHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: TokenReviewSpec): TokenReviewHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: TokenReviewStatus): TokenReviewHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = TokenReviewHelper.kind
        this._template.apiVersion = TokenReviewHelper.apiVersion
    }
}

/** TokenReviewSpec is a description of the token authentication request. */
export class TokenReviewSpecHelper extends ResourceTemplate {
    static kind = 'TokenReviewSpec';
    static apiVersion = 'authentication/v1';

    audiences(audiences: Array<string>): TokenReviewSpecHelper {
        if (!Array.isArray(audiences)) { audiences = [audiences] }
        if (!this._template.audiences) this._template.audiences = audiences
        this._template.audiences = [...this._template.audiences, ...audiences]
        return this
    }

    token(token: string): TokenReviewSpecHelper {
        this._template.token = token
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = TokenReviewSpecHelper.kind
        this._template.apiVersion = TokenReviewSpecHelper.apiVersion
    }
}

/** TokenReviewStatus is the result of the token authentication request. */
export class TokenReviewStatusHelper extends ResourceTemplate {
    static kind = 'TokenReviewStatus';
    static apiVersion = 'authentication/v1';

    audiences(audiences: Array<string>): TokenReviewStatusHelper {
        if (!Array.isArray(audiences)) { audiences = [audiences] }
        if (!this._template.audiences) this._template.audiences = audiences
        this._template.audiences = [...this._template.audiences, ...audiences]
        return this
    }

    authenticated(authenticated: boolean): TokenReviewStatusHelper {
        this._template.authenticated = authenticated
        return this
    }

    error(error: string): TokenReviewStatusHelper {
        this._template.error = error
        return this
    }

    user(user: UserInfo): TokenReviewStatusHelper {
        if (!this._template.user) this._template.user = []
        this._template.user = {
            ...this._template.user,
            ...user
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = TokenReviewStatusHelper.kind
        this._template.apiVersion = TokenReviewStatusHelper.apiVersion
    }
}

/** UserInfo holds the information about the user needed to implement the user.Info interface. */
export class UserInfoHelper extends ResourceTemplate {
    static kind = 'UserInfo';
    static apiVersion = 'authentication/v1';

    extra(extra: {[name: string]: Array<string>}): UserInfoHelper {
        if (!this._template.extra) this._template.extra = []
        this._template.extra = {
            ...this._template.extra,
            ...extra
        }
        return this
    }

    groups(groups: Array<string>): UserInfoHelper {
        if (!Array.isArray(groups)) { groups = [groups] }
        if (!this._template.groups) this._template.groups = groups
        this._template.groups = [...this._template.groups, ...groups]
        return this
    }

    uid(uid: string): UserInfoHelper {
        this._template.uid = uid
        return this
    }

    username(username: string): UserInfoHelper {
        this._template.username = username
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = UserInfoHelper.kind
        this._template.apiVersion = UserInfoHelper.apiVersion
    }
}
