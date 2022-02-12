import { ResourceTemplate } from "../resourceTemplate";
import { ObjectMeta } from "../meta/v1";
import { TokenReviewSpec, TokenReviewStatus, UserInfo } from "./v1beta1";

/** TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver. */
export class TokenReviewHelper extends ResourceTemplate {
    static kind = 'TokenReview';
    static apiVersion = 'authentication/v1beta1';

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
    static apiVersion = 'authentication/v1beta1';

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
    static apiVersion = 'authentication/v1beta1';

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
    static apiVersion = 'authentication/v1beta1';

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
