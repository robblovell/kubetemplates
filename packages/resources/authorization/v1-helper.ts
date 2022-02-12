import { ResourceTemplate } from "../resourceTemplate";
import { ObjectMeta } from "../meta/v1";
import { NonResourceAttributes, NonResourceRule, ResourceAttributes, ResourceRule, SelfSubjectAccessReviewSpec, SelfSubjectRulesReviewSpec, SubjectAccessReviewSpec, SubjectAccessReviewStatus, SubjectRulesReviewStatus } from "./v1";

/** LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking. */
export class LocalSubjectAccessReviewHelper extends ResourceTemplate {
    static kind = 'LocalSubjectAccessReview';
    static apiVersion = 'authorization/v1';

    metadata(metadata: ObjectMeta): LocalSubjectAccessReviewHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: SubjectAccessReviewSpec): LocalSubjectAccessReviewHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: SubjectAccessReviewStatus): LocalSubjectAccessReviewHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LocalSubjectAccessReviewHelper.kind
        this._template.apiVersion = LocalSubjectAccessReviewHelper.apiVersion
    }
}

/** NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface */
export class NonResourceAttributesHelper extends ResourceTemplate {
    static kind = 'NonResourceAttributes';
    static apiVersion = 'authorization/v1';

    path(path: string): NonResourceAttributesHelper {
        this._template.path = path
        return this
    }

    verb(verb: string): NonResourceAttributesHelper {
        this._template.verb = verb
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NonResourceAttributesHelper.kind
        this._template.apiVersion = NonResourceAttributesHelper.apiVersion
    }
}

/** NonResourceRule holds information that describes a rule for the non-resource */
export class NonResourceRuleHelper extends ResourceTemplate {
    static kind = 'NonResourceRule';
    static apiVersion = 'authorization/v1';

    nonResourceURLs(nonResourceURLs: Array<string>): NonResourceRuleHelper {
        if (!Array.isArray(nonResourceURLs)) { nonResourceURLs = [nonResourceURLs] }
        if (!this._template.nonResourceURLs) this._template.nonResourceURLs = nonResourceURLs
        this._template.nonResourceURLs = [...this._template.nonResourceURLs, ...nonResourceURLs]
        return this
    }

    verbs(verbs: Array<string>): NonResourceRuleHelper {
        if (!Array.isArray(verbs)) { verbs = [verbs] }
        if (!this._template.verbs) this._template.verbs = verbs
        this._template.verbs = [...this._template.verbs, ...verbs]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NonResourceRuleHelper.kind
        this._template.apiVersion = NonResourceRuleHelper.apiVersion
    }
}

/** ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface */
export class ResourceAttributesHelper extends ResourceTemplate {
    static kind = 'ResourceAttributes';
    static apiVersion = 'authorization/v1';

    group(group: string): ResourceAttributesHelper {
        this._template.group = group
        return this
    }

    resource(resource: string): ResourceAttributesHelper {
        this._template.resource = resource
        return this
    }

    subresource(subresource: string): ResourceAttributesHelper {
        this._template.subresource = subresource
        return this
    }

    verb(verb: string): ResourceAttributesHelper {
        this._template.verb = verb
        return this
    }

    version(version: string): ResourceAttributesHelper {
        this._template.version = version
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ResourceAttributesHelper.kind
        this._template.apiVersion = ResourceAttributesHelper.apiVersion
    }
}

/** ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
export class ResourceRuleHelper extends ResourceTemplate {
    static kind = 'ResourceRule';
    static apiVersion = 'authorization/v1';

    apiGroups(apiGroups: Array<string>): ResourceRuleHelper {
        if (!Array.isArray(apiGroups)) { apiGroups = [apiGroups] }
        if (!this._template.apiGroups) this._template.apiGroups = apiGroups
        this._template.apiGroups = [...this._template.apiGroups, ...apiGroups]
        return this
    }

    resourceNames(resourceNames: Array<string>): ResourceRuleHelper {
        if (!Array.isArray(resourceNames)) { resourceNames = [resourceNames] }
        if (!this._template.resourceNames) this._template.resourceNames = resourceNames
        this._template.resourceNames = [...this._template.resourceNames, ...resourceNames]
        return this
    }

    resources(resources: Array<string>): ResourceRuleHelper {
        if (!Array.isArray(resources)) { resources = [resources] }
        if (!this._template.resources) this._template.resources = resources
        this._template.resources = [...this._template.resources, ...resources]
        return this
    }

    verbs(verbs: Array<string>): ResourceRuleHelper {
        if (!Array.isArray(verbs)) { verbs = [verbs] }
        if (!this._template.verbs) this._template.verbs = verbs
        this._template.verbs = [...this._template.verbs, ...verbs]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ResourceRuleHelper.kind
        this._template.apiVersion = ResourceRuleHelper.apiVersion
    }
}

/** SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action */
export class SelfSubjectAccessReviewHelper extends ResourceTemplate {
    static kind = 'SelfSubjectAccessReview';
    static apiVersion = 'authorization/v1';

    metadata(metadata: ObjectMeta): SelfSubjectAccessReviewHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: SelfSubjectAccessReviewSpec): SelfSubjectAccessReviewHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: SubjectAccessReviewStatus): SelfSubjectAccessReviewHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SelfSubjectAccessReviewHelper.kind
        this._template.apiVersion = SelfSubjectAccessReviewHelper.apiVersion
    }
}

/** SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export class SelfSubjectAccessReviewSpecHelper extends ResourceTemplate {
    static kind = 'SelfSubjectAccessReviewSpec';
    static apiVersion = 'authorization/v1';

    nonResourceAttributes(nonResourceAttributes: NonResourceAttributes): SelfSubjectAccessReviewSpecHelper {
        if (!this._template.nonResourceAttributes) this._template.nonResourceAttributes = []
        this._template.nonResourceAttributes = {
            ...this._template.nonResourceAttributes,
            ...nonResourceAttributes
        }
        return this
    }

    resourceAttributes(resourceAttributes: ResourceAttributes): SelfSubjectAccessReviewSpecHelper {
        if (!this._template.resourceAttributes) this._template.resourceAttributes = []
        this._template.resourceAttributes = {
            ...this._template.resourceAttributes,
            ...resourceAttributes
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SelfSubjectAccessReviewSpecHelper.kind
        this._template.apiVersion = SelfSubjectAccessReviewSpecHelper.apiVersion
    }
}

/** SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server. */
export class SelfSubjectRulesReviewHelper extends ResourceTemplate {
    static kind = 'SelfSubjectRulesReview';
    static apiVersion = 'authorization/v1';

    metadata(metadata: ObjectMeta): SelfSubjectRulesReviewHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: SelfSubjectRulesReviewSpec): SelfSubjectRulesReviewHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: SubjectRulesReviewStatus): SelfSubjectRulesReviewHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SelfSubjectRulesReviewHelper.kind
        this._template.apiVersion = SelfSubjectRulesReviewHelper.apiVersion
    }
}

export class SelfSubjectRulesReviewSpecHelper extends ResourceTemplate {
    static kind = 'SelfSubjectRulesReviewSpec';
    static apiVersion = 'authorization/v1';

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SelfSubjectRulesReviewSpecHelper.kind
        this._template.apiVersion = SelfSubjectRulesReviewSpecHelper.apiVersion
    }
}

/** SubjectAccessReview checks whether or not a user or group can perform an action. */
export class SubjectAccessReviewHelper extends ResourceTemplate {
    static kind = 'SubjectAccessReview';
    static apiVersion = 'authorization/v1';

    metadata(metadata: ObjectMeta): SubjectAccessReviewHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: SubjectAccessReviewSpec): SubjectAccessReviewHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: SubjectAccessReviewStatus): SubjectAccessReviewHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SubjectAccessReviewHelper.kind
        this._template.apiVersion = SubjectAccessReviewHelper.apiVersion
    }
}

/** SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export class SubjectAccessReviewSpecHelper extends ResourceTemplate {
    static kind = 'SubjectAccessReviewSpec';
    static apiVersion = 'authorization/v1';

    extra(extra: {[name: string]: Array<string>}): SubjectAccessReviewSpecHelper {
        if (!this._template.extra) this._template.extra = []
        this._template.extra = {
            ...this._template.extra,
            ...extra
        }
        return this
    }

    groups(groups: Array<string>): SubjectAccessReviewSpecHelper {
        if (!Array.isArray(groups)) { groups = [groups] }
        if (!this._template.groups) this._template.groups = groups
        this._template.groups = [...this._template.groups, ...groups]
        return this
    }

    nonResourceAttributes(nonResourceAttributes: NonResourceAttributes): SubjectAccessReviewSpecHelper {
        if (!this._template.nonResourceAttributes) this._template.nonResourceAttributes = []
        this._template.nonResourceAttributes = {
            ...this._template.nonResourceAttributes,
            ...nonResourceAttributes
        }
        return this
    }

    resourceAttributes(resourceAttributes: ResourceAttributes): SubjectAccessReviewSpecHelper {
        if (!this._template.resourceAttributes) this._template.resourceAttributes = []
        this._template.resourceAttributes = {
            ...this._template.resourceAttributes,
            ...resourceAttributes
        }
        return this
    }

    uid(uid: string): SubjectAccessReviewSpecHelper {
        this._template.uid = uid
        return this
    }

    user(user: string): SubjectAccessReviewSpecHelper {
        this._template.user = user
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SubjectAccessReviewSpecHelper.kind
        this._template.apiVersion = SubjectAccessReviewSpecHelper.apiVersion
    }
}

/** SubjectAccessReviewStatus */
export class SubjectAccessReviewStatusHelper extends ResourceTemplate {
    static kind = 'SubjectAccessReviewStatus';
    static apiVersion = 'authorization/v1';

    allowed(allowed: boolean): SubjectAccessReviewStatusHelper {
        this._template.allowed = allowed
        return this
    }

    denied(denied: boolean): SubjectAccessReviewStatusHelper {
        this._template.denied = denied
        return this
    }

    evaluationError(evaluationError: string): SubjectAccessReviewStatusHelper {
        this._template.evaluationError = evaluationError
        return this
    }

    reason(reason: string): SubjectAccessReviewStatusHelper {
        this._template.reason = reason
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SubjectAccessReviewStatusHelper.kind
        this._template.apiVersion = SubjectAccessReviewStatusHelper.apiVersion
    }
}

/** SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete. */
export class SubjectRulesReviewStatusHelper extends ResourceTemplate {
    static kind = 'SubjectRulesReviewStatus';
    static apiVersion = 'authorization/v1';

    evaluationError(evaluationError: string): SubjectRulesReviewStatusHelper {
        this._template.evaluationError = evaluationError
        return this
    }

    incomplete(incomplete: boolean): SubjectRulesReviewStatusHelper {
        this._template.incomplete = incomplete
        return this
    }

    nonResourceRules(nonResourceRules: Array<NonResourceRule>): SubjectRulesReviewStatusHelper {
        if (!Array.isArray(nonResourceRules)) { nonResourceRules = [nonResourceRules] }
        if (!this._template.nonResourceRules) this._template.nonResourceRules = nonResourceRules
        this._template.nonResourceRules = [...this._template.nonResourceRules, ...nonResourceRules]
        return this
    }

    resourceRules(resourceRules: Array<ResourceRule>): SubjectRulesReviewStatusHelper {
        if (!Array.isArray(resourceRules)) { resourceRules = [resourceRules] }
        if (!this._template.resourceRules) this._template.resourceRules = resourceRules
        this._template.resourceRules = [...this._template.resourceRules, ...resourceRules]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SubjectRulesReviewStatusHelper.kind
        this._template.apiVersion = SubjectRulesReviewStatusHelper.apiVersion
    }
}
