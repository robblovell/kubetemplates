import { ResourceTemplate, Template } from "../resourceTemplate";
import { LocalSubjectAccessReview, NonResourceAttributes, NonResourceRule, ResourceAttributes, ResourceRule, SelfSubjectAccessReview, SelfSubjectAccessReviewSpec, SelfSubjectRulesReview, SelfSubjectRulesReviewSpec, SubjectAccessReview, SubjectAccessReviewSpec, SubjectAccessReviewStatus, SubjectRulesReviewStatus } from "./v1";
import { ObjectMeta } from "../meta/v1";
import { ObjectMetaHelper } from "../meta/v1-helper";

export interface LocalSubjectAccessReviewHelper extends LocalSubjectAccessReview {
    $metadata(x: ObjectMetaHelper): LocalSubjectAccessReviewHelper;
    $spec(x: SubjectAccessReviewSpecHelper): LocalSubjectAccessReviewHelper;
    $status(x: SubjectAccessReviewStatusHelper): LocalSubjectAccessReviewHelper;
}

/** LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking. */
export class LocalSubjectAccessReviewHelper extends ResourceTemplate implements LocalSubjectAccessReviewHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "LocalSubjectAccessReview", "authorization.k8s.io/v1")
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: SubjectAccessReviewSpecHelper;
    get spec(): SubjectAccessReviewSpecHelper {
        return this._spec
    }
    set spec(x: SubjectAccessReviewSpecHelper) {
        this._spec = x
    }
    $spec(x: SubjectAccessReviewSpecHelper) {
        this.spec = x; return this
    }

    _status: SubjectAccessReviewStatusHelper;
    get status(): SubjectAccessReviewStatusHelper {
        return this._status
    }
    set status(x: SubjectAccessReviewStatusHelper) {
        this._status = x
    }
    $status(x: SubjectAccessReviewStatusHelper) {
        this.status = x; return this
    }
}

export interface NonResourceAttributesHelper extends NonResourceAttributes {
    $path(x: string): NonResourceAttributesHelper;
    $verb(x: string): NonResourceAttributesHelper;
}

/** NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface */
export class NonResourceAttributesHelper extends Template implements NonResourceAttributesHelper {
    constructor(obj: any) {
        super(obj)
    }

    _path: string;
    get path(): string {
        return this._path
    }
    set path(x: string) {
        this._path = x
    }
    $path(x: string) {
        this.path = x; return this
    }

    _verb: string;
    get verb(): string {
        return this._verb
    }
    set verb(x: string) {
        this._verb = x
    }
    $verb(x: string) {
        this.verb = x; return this
    }
}

export interface NonResourceRuleHelper extends NonResourceRule {
    $nonResourceURLs(x: Array<string>): NonResourceRuleHelper;
    $verbs(x: Array<string>): NonResourceRuleHelper;
}

/** NonResourceRule holds information that describes a rule for the non-resource */
export class NonResourceRuleHelper extends Template implements NonResourceRuleHelper {
    constructor(obj: any) {
        super(obj)
    }

    _nonResourceURLs: Array<string>;
    get nonResourceURLs(): Array<string> {
        return this._nonResourceURLs
    }
    set nonResourceURLs(x: Array<string>) {
        this._nonResourceURLs = this.set(this.nonResourceURLs, x)
    }
    $nonResourceURLs(x: Array<string>) {
        this.nonResourceURLs = x; return this
    }

    _verbs: Array<string>;
    get verbs(): Array<string> {
        return this._verbs
    }
    set verbs(x: Array<string>) {
        this._verbs = this.set(this.verbs, x)
    }
    $verbs(x: Array<string>) {
        this.verbs = x; return this
    }
}

export interface ResourceAttributesHelper extends ResourceAttributes {
    $group(x: string): ResourceAttributesHelper;
    $resource(x: string): ResourceAttributesHelper;
    $subresource(x: string): ResourceAttributesHelper;
    $verb(x: string): ResourceAttributesHelper;
    $version(x: string): ResourceAttributesHelper;
}

/** ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface */
export class ResourceAttributesHelper extends Template implements ResourceAttributesHelper {
    constructor(obj: any) {
        super(obj)
    }

    _group: string;
    get group(): string {
        return this._group
    }
    set group(x: string) {
        this._group = x
    }
    $group(x: string) {
        this.group = x; return this
    }

    _resource: string;
    get resource(): string {
        return this._resource
    }
    set resource(x: string) {
        this._resource = x
    }
    $resource(x: string) {
        this.resource = x; return this
    }

    _subresource: string;
    get subresource(): string {
        return this._subresource
    }
    set subresource(x: string) {
        this._subresource = x
    }
    $subresource(x: string) {
        this.subresource = x; return this
    }

    _verb: string;
    get verb(): string {
        return this._verb
    }
    set verb(x: string) {
        this._verb = x
    }
    $verb(x: string) {
        this.verb = x; return this
    }

    _version: string;
    get version(): string {
        return this._version
    }
    set version(x: string) {
        this._version = x
    }
    $version(x: string) {
        this.version = x; return this
    }
}

export interface ResourceRuleHelper extends ResourceRule {
    $apiGroups(x: Array<string>): ResourceRuleHelper;
    $resourceNames(x: Array<string>): ResourceRuleHelper;
    $resources(x: Array<string>): ResourceRuleHelper;
    $verbs(x: Array<string>): ResourceRuleHelper;
}

/** ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
export class ResourceRuleHelper extends Template implements ResourceRuleHelper {
    constructor(obj: any) {
        super(obj)
    }

    _apiGroups: Array<string>;
    get apiGroups(): Array<string> {
        return this._apiGroups
    }
    set apiGroups(x: Array<string>) {
        this._apiGroups = this.set(this.apiGroups, x)
    }
    $apiGroups(x: Array<string>) {
        this.apiGroups = x; return this
    }

    _resourceNames: Array<string>;
    get resourceNames(): Array<string> {
        return this._resourceNames
    }
    set resourceNames(x: Array<string>) {
        this._resourceNames = this.set(this.resourceNames, x)
    }
    $resourceNames(x: Array<string>) {
        this.resourceNames = x; return this
    }

    _resources: Array<string>;
    get resources(): Array<string> {
        return this._resources
    }
    set resources(x: Array<string>) {
        this._resources = this.set(this.resources, x)
    }
    $resources(x: Array<string>) {
        this.resources = x; return this
    }

    _verbs: Array<string>;
    get verbs(): Array<string> {
        return this._verbs
    }
    set verbs(x: Array<string>) {
        this._verbs = this.set(this.verbs, x)
    }
    $verbs(x: Array<string>) {
        this.verbs = x; return this
    }
}

export interface SelfSubjectAccessReviewHelper extends SelfSubjectAccessReview {
    $metadata(x: ObjectMetaHelper): SelfSubjectAccessReviewHelper;
    $spec(x: SelfSubjectAccessReviewSpecHelper): SelfSubjectAccessReviewHelper;
    $status(x: SubjectAccessReviewStatusHelper): SelfSubjectAccessReviewHelper;
}

/** SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action */
export class SelfSubjectAccessReviewHelper extends ResourceTemplate implements SelfSubjectAccessReviewHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "SelfSubjectAccessReview", "authorization.k8s.io/v1")
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: SelfSubjectAccessReviewSpecHelper;
    get spec(): SelfSubjectAccessReviewSpecHelper {
        return this._spec
    }
    set spec(x: SelfSubjectAccessReviewSpecHelper) {
        this._spec = x
    }
    $spec(x: SelfSubjectAccessReviewSpecHelper) {
        this.spec = x; return this
    }

    _status: SubjectAccessReviewStatusHelper;
    get status(): SubjectAccessReviewStatusHelper {
        return this._status
    }
    set status(x: SubjectAccessReviewStatusHelper) {
        this._status = x
    }
    $status(x: SubjectAccessReviewStatusHelper) {
        this.status = x; return this
    }
}

export interface SelfSubjectAccessReviewSpecHelper extends SelfSubjectAccessReviewSpec {
    $nonResourceAttributes(x: NonResourceAttributesHelper): SelfSubjectAccessReviewSpecHelper;
    $resourceAttributes(x: ResourceAttributesHelper): SelfSubjectAccessReviewSpecHelper;
}

/** SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export class SelfSubjectAccessReviewSpecHelper extends Template implements SelfSubjectAccessReviewSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _nonResourceAttributes: NonResourceAttributesHelper;
    get nonResourceAttributes(): NonResourceAttributesHelper {
        return this._nonResourceAttributes
    }
    set nonResourceAttributes(x: NonResourceAttributesHelper) {
        this._nonResourceAttributes = x
    }
    $nonResourceAttributes(x: NonResourceAttributesHelper) {
        this.nonResourceAttributes = x; return this
    }

    _resourceAttributes: ResourceAttributesHelper;
    get resourceAttributes(): ResourceAttributesHelper {
        return this._resourceAttributes
    }
    set resourceAttributes(x: ResourceAttributesHelper) {
        this._resourceAttributes = x
    }
    $resourceAttributes(x: ResourceAttributesHelper) {
        this.resourceAttributes = x; return this
    }
}

export interface SelfSubjectRulesReviewHelper extends SelfSubjectRulesReview {
    $metadata(x: ObjectMetaHelper): SelfSubjectRulesReviewHelper;
    $spec(x: SelfSubjectRulesReviewSpecHelper): SelfSubjectRulesReviewHelper;
    $status(x: SubjectRulesReviewStatusHelper): SelfSubjectRulesReviewHelper;
}

/** SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server. */
export class SelfSubjectRulesReviewHelper extends ResourceTemplate implements SelfSubjectRulesReviewHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "SelfSubjectRulesReview", "authorization.k8s.io/v1")
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: SelfSubjectRulesReviewSpecHelper;
    get spec(): SelfSubjectRulesReviewSpecHelper {
        return this._spec
    }
    set spec(x: SelfSubjectRulesReviewSpecHelper) {
        this._spec = x
    }
    $spec(x: SelfSubjectRulesReviewSpecHelper) {
        this.spec = x; return this
    }

    _status: SubjectRulesReviewStatusHelper;
    get status(): SubjectRulesReviewStatusHelper {
        return this._status
    }
    set status(x: SubjectRulesReviewStatusHelper) {
        this._status = x
    }
    $status(x: SubjectRulesReviewStatusHelper) {
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
    $metadata(x: ObjectMetaHelper): SubjectAccessReviewHelper;
    $spec(x: SubjectAccessReviewSpecHelper): SubjectAccessReviewHelper;
    $status(x: SubjectAccessReviewStatusHelper): SubjectAccessReviewHelper;
}

/** SubjectAccessReview checks whether or not a user or group can perform an action. */
export class SubjectAccessReviewHelper extends ResourceTemplate implements SubjectAccessReviewHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "SubjectAccessReview", "authorization.k8s.io/v1")
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: SubjectAccessReviewSpecHelper;
    get spec(): SubjectAccessReviewSpecHelper {
        return this._spec
    }
    set spec(x: SubjectAccessReviewSpecHelper) {
        this._spec = x
    }
    $spec(x: SubjectAccessReviewSpecHelper) {
        this.spec = x; return this
    }

    _status: SubjectAccessReviewStatusHelper;
    get status(): SubjectAccessReviewStatusHelper {
        return this._status
    }
    set status(x: SubjectAccessReviewStatusHelper) {
        this._status = x
    }
    $status(x: SubjectAccessReviewStatusHelper) {
        this.status = x; return this
    }
}

export interface SubjectAccessReviewSpecHelper extends SubjectAccessReviewSpec {
    $extra(x: {[name: string]: Array<string>}): SubjectAccessReviewSpecHelper;
    $groups(x: Array<string>): SubjectAccessReviewSpecHelper;
    $nonResourceAttributes(x: NonResourceAttributesHelper): SubjectAccessReviewSpecHelper;
    $resourceAttributes(x: ResourceAttributesHelper): SubjectAccessReviewSpecHelper;
    $uid(x: string): SubjectAccessReviewSpecHelper;
    $user(x: string): SubjectAccessReviewSpecHelper;
}

/** SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export class SubjectAccessReviewSpecHelper extends Template implements SubjectAccessReviewSpecHelper {
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
    $extra(x: {[name: string]: Array<string>}) {
        this.extra = x; return this
    }

    _groups: Array<string>;
    get groups(): Array<string> {
        return this._groups
    }
    set groups(x: Array<string>) {
        this._groups = this.set(this.groups, x)
    }
    $groups(x: Array<string>) {
        this.groups = x; return this
    }

    _nonResourceAttributes: NonResourceAttributesHelper;
    get nonResourceAttributes(): NonResourceAttributesHelper {
        return this._nonResourceAttributes
    }
    set nonResourceAttributes(x: NonResourceAttributesHelper) {
        this._nonResourceAttributes = x
    }
    $nonResourceAttributes(x: NonResourceAttributesHelper) {
        this.nonResourceAttributes = x; return this
    }

    _resourceAttributes: ResourceAttributesHelper;
    get resourceAttributes(): ResourceAttributesHelper {
        return this._resourceAttributes
    }
    set resourceAttributes(x: ResourceAttributesHelper) {
        this._resourceAttributes = x
    }
    $resourceAttributes(x: ResourceAttributesHelper) {
        this.resourceAttributes = x; return this
    }

    _uid: string;
    get uid(): string {
        return this._uid
    }
    set uid(x: string) {
        this._uid = x
    }
    $uid(x: string) {
        this.uid = x; return this
    }

    _user: string;
    get user(): string {
        return this._user
    }
    set user(x: string) {
        this._user = x
    }
    $user(x: string) {
        this.user = x; return this
    }
}

export interface SubjectAccessReviewStatusHelper extends SubjectAccessReviewStatus {
    $allowed(x: boolean): SubjectAccessReviewStatusHelper;
    $denied(x: boolean): SubjectAccessReviewStatusHelper;
    $evaluationError(x: string): SubjectAccessReviewStatusHelper;
    $reason(x: string): SubjectAccessReviewStatusHelper;
}

/** SubjectAccessReviewStatus */
export class SubjectAccessReviewStatusHelper extends Template implements SubjectAccessReviewStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _allowed: boolean;
    get allowed(): boolean {
        return this._allowed
    }
    set allowed(x: boolean) {
        this._allowed = x
    }
    $allowed(x: boolean) {
        this.allowed = x; return this
    }

    _denied: boolean;
    get denied(): boolean {
        return this._denied
    }
    set denied(x: boolean) {
        this._denied = x
    }
    $denied(x: boolean) {
        this.denied = x; return this
    }

    _evaluationError: string;
    get evaluationError(): string {
        return this._evaluationError
    }
    set evaluationError(x: string) {
        this._evaluationError = x
    }
    $evaluationError(x: string) {
        this.evaluationError = x; return this
    }

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $reason(x: string) {
        this.reason = x; return this
    }
}

export interface SubjectRulesReviewStatusHelper extends SubjectRulesReviewStatus {
    $evaluationError(x: string): SubjectRulesReviewStatusHelper;
    $incomplete(x: boolean): SubjectRulesReviewStatusHelper;
    $nonResourceRules(x: Array<NonResourceRule>): SubjectRulesReviewStatusHelper;
    $resourceRules(x: Array<ResourceRule>): SubjectRulesReviewStatusHelper;
}

/** SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete. */
export class SubjectRulesReviewStatusHelper extends Template implements SubjectRulesReviewStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _evaluationError: string;
    get evaluationError(): string {
        return this._evaluationError
    }
    set evaluationError(x: string) {
        this._evaluationError = x
    }
    $evaluationError(x: string) {
        this.evaluationError = x; return this
    }

    _incomplete: boolean;
    get incomplete(): boolean {
        return this._incomplete
    }
    set incomplete(x: boolean) {
        this._incomplete = x
    }
    $incomplete(x: boolean) {
        this.incomplete = x; return this
    }

    _nonResourceRules: Array<NonResourceRule>;
    get nonResourceRules(): Array<NonResourceRule> {
        return this._nonResourceRules
    }
    set nonResourceRules(x: Array<NonResourceRule>) {
        this._nonResourceRules = this.set(this.nonResourceRules, x)
    }
    $nonResourceRules(x: Array<NonResourceRule>) {
        this.nonResourceRules = x; return this
    }

    _resourceRules: Array<ResourceRule>;
    get resourceRules(): Array<ResourceRule> {
        return this._resourceRules
    }
    set resourceRules(x: Array<ResourceRule>) {
        this._resourceRules = this.set(this.resourceRules, x)
    }
    $resourceRules(x: Array<ResourceRule>) {
        this.resourceRules = x; return this
    }
}
