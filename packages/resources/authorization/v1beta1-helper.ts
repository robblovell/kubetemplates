import { ResourceTemplate, Template } from "../resourceTemplate";
import { LocalSubjectAccessReview, NonResourceAttributes, NonResourceRule, ResourceAttributes, ResourceRule, SelfSubjectAccessReview, SelfSubjectAccessReviewSpec, SelfSubjectRulesReview, SelfSubjectRulesReviewSpec, SubjectAccessReview, SubjectAccessReviewSpec, SubjectAccessReviewStatus, SubjectRulesReviewStatus } from "./v1beta1";
import { ObjectMeta } from "../meta/v1";

export interface LocalSubjectAccessReviewHelper extends LocalSubjectAccessReview {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking. */
export class LocalSubjectAccessReviewHelper extends ResourceTemplate implements LocalSubjectAccessReviewHelper {
    static kind = 'LocalSubjectAccessReview';
    static apiVersion = 'authorization/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, LocalSubjectAccessReviewHelper.kind, LocalSubjectAccessReviewHelper.apiVersion)
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
    get spec(): any /*SubjectAccessReviewSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*SubjectAccessReviewSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*SubjectAccessReviewSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*SubjectAccessReviewStatusHelper*/ {
        return this._status
    }
    set status(x: any /*SubjectAccessReviewStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*SubjectAccessReviewStatusHelper*/) {
        this.status = x; return this
    }
}

export interface NonResourceAttributesHelper extends NonResourceAttributes {
    $path(x: any): any;
    $verb(x: any): any;
}

/** NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface */
export class NonResourceAttributesHelper extends Template implements NonResourceAttributesHelper {
    constructor(obj: any) {
        super(obj)
    }

    _path: any;
    get path(): any /*string*/ {
        return this._path
    }
    set path(x: any /*string*/) {
        this._path = x
    }
    setPath(x: any /*string*/) {
        this.path = x; return this
    }

    _verb: any;
    get verb(): any /*string*/ {
        return this._verb
    }
    set verb(x: any /*string*/) {
        this._verb = x
    }
    setVerb(x: any /*string*/) {
        this.verb = x; return this
    }
}

export interface NonResourceRuleHelper extends NonResourceRule {
    $nonResourceURLs(x: any): any;
    $verbs(x: any): any;
}

/** NonResourceRule holds information that describes a rule for the non-resource */
export class NonResourceRuleHelper extends Template implements NonResourceRuleHelper {
    constructor(obj: any) {
        super(obj)
    }

    _nonResourceURLs: any;
    get nonResourceURLs(): any /*Array<string>*/ {
        return this._nonResourceURLs
    }
    set nonResourceURLs(x: any /*Array<string>*/) {
        this._nonResourceURLs = this.set(this.nonResourceURLs, x)
    }
    setNonResourceURLs(x: any /*Array<string>*/) {
        this.nonResourceURLs = x; return this
    }

    _verbs: any;
    get verbs(): any /*Array<string>*/ {
        return this._verbs
    }
    set verbs(x: any /*Array<string>*/) {
        this._verbs = this.set(this.verbs, x)
    }
    setVerbs(x: any /*Array<string>*/) {
        this.verbs = x; return this
    }
}

export interface ResourceAttributesHelper extends ResourceAttributes {
    $group(x: any): any;
    $resource(x: any): any;
    $subresource(x: any): any;
    $verb(x: any): any;
    $version(x: any): any;
}

/** ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface */
export class ResourceAttributesHelper extends Template implements ResourceAttributesHelper {
    constructor(obj: any) {
        super(obj)
    }

    _group: any;
    get group(): any /*string*/ {
        return this._group
    }
    set group(x: any /*string*/) {
        this._group = x
    }
    setGroup(x: any /*string*/) {
        this.group = x; return this
    }

    _resource: any;
    get resource(): any /*string*/ {
        return this._resource
    }
    set resource(x: any /*string*/) {
        this._resource = x
    }
    setResource(x: any /*string*/) {
        this.resource = x; return this
    }

    _subresource: any;
    get subresource(): any /*string*/ {
        return this._subresource
    }
    set subresource(x: any /*string*/) {
        this._subresource = x
    }
    setSubresource(x: any /*string*/) {
        this.subresource = x; return this
    }

    _verb: any;
    get verb(): any /*string*/ {
        return this._verb
    }
    set verb(x: any /*string*/) {
        this._verb = x
    }
    setVerb(x: any /*string*/) {
        this.verb = x; return this
    }

    _version: any;
    get version(): any /*string*/ {
        return this._version
    }
    set version(x: any /*string*/) {
        this._version = x
    }
    setVersion(x: any /*string*/) {
        this.version = x; return this
    }
}

export interface ResourceRuleHelper extends ResourceRule {
    $apiGroups(x: any): any;
    $resourceNames(x: any): any;
    $resources(x: any): any;
    $verbs(x: any): any;
}

/** ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
export class ResourceRuleHelper extends Template implements ResourceRuleHelper {
    constructor(obj: any) {
        super(obj)
    }

    _apiGroups: any;
    get apiGroups(): any /*Array<string>*/ {
        return this._apiGroups
    }
    set apiGroups(x: any /*Array<string>*/) {
        this._apiGroups = this.set(this.apiGroups, x)
    }
    setApiGroups(x: any /*Array<string>*/) {
        this.apiGroups = x; return this
    }

    _resourceNames: any;
    get resourceNames(): any /*Array<string>*/ {
        return this._resourceNames
    }
    set resourceNames(x: any /*Array<string>*/) {
        this._resourceNames = this.set(this.resourceNames, x)
    }
    setResourceNames(x: any /*Array<string>*/) {
        this.resourceNames = x; return this
    }

    _resources: any;
    get resources(): any /*Array<string>*/ {
        return this._resources
    }
    set resources(x: any /*Array<string>*/) {
        this._resources = this.set(this.resources, x)
    }
    setResources(x: any /*Array<string>*/) {
        this.resources = x; return this
    }

    _verbs: any;
    get verbs(): any /*Array<string>*/ {
        return this._verbs
    }
    set verbs(x: any /*Array<string>*/) {
        this._verbs = this.set(this.verbs, x)
    }
    setVerbs(x: any /*Array<string>*/) {
        this.verbs = x; return this
    }
}

export interface SelfSubjectAccessReviewHelper extends SelfSubjectAccessReview {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action */
export class SelfSubjectAccessReviewHelper extends ResourceTemplate implements SelfSubjectAccessReviewHelper {
    static kind = 'SelfSubjectAccessReview';
    static apiVersion = 'authorization/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, SelfSubjectAccessReviewHelper.kind, SelfSubjectAccessReviewHelper.apiVersion)
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
    get spec(): any /*SelfSubjectAccessReviewSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*SelfSubjectAccessReviewSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*SelfSubjectAccessReviewSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*SubjectAccessReviewStatusHelper*/ {
        return this._status
    }
    set status(x: any /*SubjectAccessReviewStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*SubjectAccessReviewStatusHelper*/) {
        this.status = x; return this
    }
}

export interface SelfSubjectAccessReviewSpecHelper extends SelfSubjectAccessReviewSpec {
    $nonResourceAttributes(x: any): any;
    $resourceAttributes(x: any): any;
}

/** SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export class SelfSubjectAccessReviewSpecHelper extends Template implements SelfSubjectAccessReviewSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _nonResourceAttributes: any;
    get nonResourceAttributes(): any /*NonResourceAttributesHelper*/ {
        return this._nonResourceAttributes
    }
    set nonResourceAttributes(x: any /*NonResourceAttributesHelper*/) {
        this._nonResourceAttributes = x
    }
    setNonResourceAttributes(x: any /*NonResourceAttributesHelper*/) {
        this.nonResourceAttributes = x; return this
    }

    _resourceAttributes: any;
    get resourceAttributes(): any /*ResourceAttributesHelper*/ {
        return this._resourceAttributes
    }
    set resourceAttributes(x: any /*ResourceAttributesHelper*/) {
        this._resourceAttributes = x
    }
    setResourceAttributes(x: any /*ResourceAttributesHelper*/) {
        this.resourceAttributes = x; return this
    }
}

export interface SelfSubjectRulesReviewHelper extends SelfSubjectRulesReview {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server. */
export class SelfSubjectRulesReviewHelper extends ResourceTemplate implements SelfSubjectRulesReviewHelper {
    static kind = 'SelfSubjectRulesReview';
    static apiVersion = 'authorization/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, SelfSubjectRulesReviewHelper.kind, SelfSubjectRulesReviewHelper.apiVersion)
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
    get spec(): any /*SelfSubjectRulesReviewSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*SelfSubjectRulesReviewSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*SelfSubjectRulesReviewSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*SubjectRulesReviewStatusHelper*/ {
        return this._status
    }
    set status(x: any /*SubjectRulesReviewStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*SubjectRulesReviewStatusHelper*/) {
        this.status = x; return this
    }
}

export interface SelfSubjectRulesReviewSpecHelper extends SelfSubjectRulesReviewSpec {
}

export class SelfSubjectRulesReviewSpecHelper extends Template implements SelfSubjectRulesReviewSpecHelper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface SubjectAccessReviewHelper extends SubjectAccessReview {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** SubjectAccessReview checks whether or not a user or group can perform an action. */
export class SubjectAccessReviewHelper extends ResourceTemplate implements SubjectAccessReviewHelper {
    static kind = 'SubjectAccessReview';
    static apiVersion = 'authorization/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, SubjectAccessReviewHelper.kind, SubjectAccessReviewHelper.apiVersion)
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
    get spec(): any /*SubjectAccessReviewSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*SubjectAccessReviewSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*SubjectAccessReviewSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*SubjectAccessReviewStatusHelper*/ {
        return this._status
    }
    set status(x: any /*SubjectAccessReviewStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*SubjectAccessReviewStatusHelper*/) {
        this.status = x; return this
    }
}

export interface SubjectAccessReviewSpecHelper extends SubjectAccessReviewSpec {
    $extra(x: any): any;
    $group(x: any): any;
    $nonResourceAttributes(x: any): any;
    $resourceAttributes(x: any): any;
    $uid(x: any): any;
    $user(x: any): any;
}

/** SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export class SubjectAccessReviewSpecHelper extends Template implements SubjectAccessReviewSpecHelper {
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

    _group: any;
    get group(): any /*Array<string>*/ {
        return this._group
    }
    set group(x: any /*Array<string>*/) {
        this._group = this.set(this.group, x)
    }
    setGroup(x: any /*Array<string>*/) {
        this.group = x; return this
    }

    _nonResourceAttributes: any;
    get nonResourceAttributes(): any /*NonResourceAttributesHelper*/ {
        return this._nonResourceAttributes
    }
    set nonResourceAttributes(x: any /*NonResourceAttributesHelper*/) {
        this._nonResourceAttributes = x
    }
    setNonResourceAttributes(x: any /*NonResourceAttributesHelper*/) {
        this.nonResourceAttributes = x; return this
    }

    _resourceAttributes: any;
    get resourceAttributes(): any /*ResourceAttributesHelper*/ {
        return this._resourceAttributes
    }
    set resourceAttributes(x: any /*ResourceAttributesHelper*/) {
        this._resourceAttributes = x
    }
    setResourceAttributes(x: any /*ResourceAttributesHelper*/) {
        this.resourceAttributes = x; return this
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

    _user: any;
    get user(): any /*string*/ {
        return this._user
    }
    set user(x: any /*string*/) {
        this._user = x
    }
    setUser(x: any /*string*/) {
        this.user = x; return this
    }
}

export interface SubjectAccessReviewStatusHelper extends SubjectAccessReviewStatus {
    $allowed(x: any): any;
    $denied(x: any): any;
    $evaluationError(x: any): any;
    $reason(x: any): any;
}

/** SubjectAccessReviewStatus */
export class SubjectAccessReviewStatusHelper extends Template implements SubjectAccessReviewStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _allowed: any;
    get allowed(): any /*boolean*/ {
        return this._allowed
    }
    set allowed(x: any /*boolean*/) {
        this._allowed = x
    }
    setAllowed(x: any /*boolean*/) {
        this.allowed = x; return this
    }

    _denied: any;
    get denied(): any /*boolean*/ {
        return this._denied
    }
    set denied(x: any /*boolean*/) {
        this._denied = x
    }
    setDenied(x: any /*boolean*/) {
        this.denied = x; return this
    }

    _evaluationError: any;
    get evaluationError(): any /*string*/ {
        return this._evaluationError
    }
    set evaluationError(x: any /*string*/) {
        this._evaluationError = x
    }
    setEvaluationError(x: any /*string*/) {
        this.evaluationError = x; return this
    }

    _reason: any;
    get reason(): any /*string*/ {
        return this._reason
    }
    set reason(x: any /*string*/) {
        this._reason = x
    }
    setReason(x: any /*string*/) {
        this.reason = x; return this
    }
}

export interface SubjectRulesReviewStatusHelper extends SubjectRulesReviewStatus {
    $evaluationError(x: any): any;
    $incomplete(x: any): any;
    $nonResourceRules(x: any): any;
    $resourceRules(x: any): any;
}

/** SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete. */
export class SubjectRulesReviewStatusHelper extends Template implements SubjectRulesReviewStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _evaluationError: any;
    get evaluationError(): any /*string*/ {
        return this._evaluationError
    }
    set evaluationError(x: any /*string*/) {
        this._evaluationError = x
    }
    setEvaluationError(x: any /*string*/) {
        this.evaluationError = x; return this
    }

    _incomplete: any;
    get incomplete(): any /*boolean*/ {
        return this._incomplete
    }
    set incomplete(x: any /*boolean*/) {
        this._incomplete = x
    }
    setIncomplete(x: any /*boolean*/) {
        this.incomplete = x; return this
    }

    _nonResourceRules: any;
    get nonResourceRules(): any /*Array<NonResourceRule>*/ {
        return this._nonResourceRules
    }
    set nonResourceRules(x: any /*Array<NonResourceRule>*/) {
        this._nonResourceRules = this.set(this.nonResourceRules, x)
    }
    setNonResourceRules(x: any /*Array<NonResourceRule>*/) {
        this.nonResourceRules = x; return this
    }

    _resourceRules: any;
    get resourceRules(): any /*Array<ResourceRule>*/ {
        return this._resourceRules
    }
    set resourceRules(x: any /*Array<ResourceRule>*/) {
        this._resourceRules = this.set(this.resourceRules, x)
    }
    setResourceRules(x: any /*Array<ResourceRule>*/) {
        this.resourceRules = x; return this
    }
}
