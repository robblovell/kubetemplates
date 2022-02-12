import { ResourceTemplate } from "../resourceTemplate";
import { LabelSelector, ListMeta, ObjectMeta } from "../meta/v1";
import { AggregationRule, ClusterRole, ClusterRoleBinding, PolicyRule, Role, RoleBinding, RoleRef, Subject } from "./v1";

/** AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole */
export class AggregationRuleHelper extends ResourceTemplate {
    static kind = 'AggregationRule';
    static apiVersion = 'rbac/v1';

    clusterRoleSelectors(clusterRoleSelectors: Array<LabelSelector>): AggregationRuleHelper {
        if (!Array.isArray(clusterRoleSelectors)) { clusterRoleSelectors = [clusterRoleSelectors] }
        if (!this._template.clusterRoleSelectors) this._template.clusterRoleSelectors = clusterRoleSelectors
        this._template.clusterRoleSelectors = [...this._template.clusterRoleSelectors, ...clusterRoleSelectors]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = AggregationRuleHelper.kind
        this._template.apiVersion = AggregationRuleHelper.apiVersion
    }
}

/** ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding. */
export class ClusterRoleHelper extends ResourceTemplate {
    static kind = 'ClusterRole';
    static apiVersion = 'rbac/v1';

    aggregationRule(aggregationRule: AggregationRule): ClusterRoleHelper {
        if (!this._template.aggregationRule) this._template.aggregationRule = []
        this._template.aggregationRule = {
            ...this._template.aggregationRule,
            ...aggregationRule
        }
        return this
    }

    metadata(metadata: ObjectMeta): ClusterRoleHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    rules(rules: Array<PolicyRule>): ClusterRoleHelper {
        if (!Array.isArray(rules)) { rules = [rules] }
        if (!this._template.rules) this._template.rules = rules
        this._template.rules = [...this._template.rules, ...rules]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ClusterRoleHelper.kind
        this._template.apiVersion = ClusterRoleHelper.apiVersion
    }
}

/** ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject. */
export class ClusterRoleBindingHelper extends ResourceTemplate {
    static kind = 'ClusterRoleBinding';
    static apiVersion = 'rbac/v1';

    metadata(metadata: ObjectMeta): ClusterRoleBindingHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    roleRef(roleRef: RoleRef): ClusterRoleBindingHelper {
        if (!this._template.roleRef) this._template.roleRef = []
        this._template.roleRef = {
            ...this._template.roleRef,
            ...roleRef
        }
        return this
    }

    subjects(subjects: Array<Subject>): ClusterRoleBindingHelper {
        if (!Array.isArray(subjects)) { subjects = [subjects] }
        if (!this._template.subjects) this._template.subjects = subjects
        this._template.subjects = [...this._template.subjects, ...subjects]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ClusterRoleBindingHelper.kind
        this._template.apiVersion = ClusterRoleBindingHelper.apiVersion
    }
}

/** ClusterRoleBindingList is a collection of ClusterRoleBindings */
export class ClusterRoleBindingListHelper extends ResourceTemplate {
    static kind = 'ClusterRoleBindingList';
    static apiVersion = 'rbac/v1';

    items(items: Array<ClusterRoleBinding>): ClusterRoleBindingListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): ClusterRoleBindingListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ClusterRoleBindingListHelper.kind
        this._template.apiVersion = ClusterRoleBindingListHelper.apiVersion
    }
}

/** ClusterRoleList is a collection of ClusterRoles */
export class ClusterRoleListHelper extends ResourceTemplate {
    static kind = 'ClusterRoleList';
    static apiVersion = 'rbac/v1';

    items(items: Array<ClusterRole>): ClusterRoleListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): ClusterRoleListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ClusterRoleListHelper.kind
        this._template.apiVersion = ClusterRoleListHelper.apiVersion
    }
}

/** PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to. */
export class PolicyRuleHelper extends ResourceTemplate {
    static kind = 'PolicyRule';
    static apiVersion = 'rbac/v1';

    apiGroups(apiGroups: Array<string>): PolicyRuleHelper {
        if (!Array.isArray(apiGroups)) { apiGroups = [apiGroups] }
        if (!this._template.apiGroups) this._template.apiGroups = apiGroups
        this._template.apiGroups = [...this._template.apiGroups, ...apiGroups]
        return this
    }

    nonResourceURLs(nonResourceURLs: Array<string>): PolicyRuleHelper {
        if (!Array.isArray(nonResourceURLs)) { nonResourceURLs = [nonResourceURLs] }
        if (!this._template.nonResourceURLs) this._template.nonResourceURLs = nonResourceURLs
        this._template.nonResourceURLs = [...this._template.nonResourceURLs, ...nonResourceURLs]
        return this
    }

    resourceNames(resourceNames: Array<string>): PolicyRuleHelper {
        if (!Array.isArray(resourceNames)) { resourceNames = [resourceNames] }
        if (!this._template.resourceNames) this._template.resourceNames = resourceNames
        this._template.resourceNames = [...this._template.resourceNames, ...resourceNames]
        return this
    }

    resources(resources: Array<string>): PolicyRuleHelper {
        if (!Array.isArray(resources)) { resources = [resources] }
        if (!this._template.resources) this._template.resources = resources
        this._template.resources = [...this._template.resources, ...resources]
        return this
    }

    verbs(verbs: Array<string>): PolicyRuleHelper {
        if (!Array.isArray(verbs)) { verbs = [verbs] }
        if (!this._template.verbs) this._template.verbs = verbs
        this._template.verbs = [...this._template.verbs, ...verbs]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PolicyRuleHelper.kind
        this._template.apiVersion = PolicyRuleHelper.apiVersion
    }
}

/** Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. */
export class RoleHelper extends ResourceTemplate {
    static kind = 'Role';
    static apiVersion = 'rbac/v1';

    metadata(metadata: ObjectMeta): RoleHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    rules(rules: Array<PolicyRule>): RoleHelper {
        if (!Array.isArray(rules)) { rules = [rules] }
        if (!this._template.rules) this._template.rules = rules
        this._template.rules = [...this._template.rules, ...rules]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RoleHelper.kind
        this._template.apiVersion = RoleHelper.apiVersion
    }
}

/** RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace. */
export class RoleBindingHelper extends ResourceTemplate {
    static kind = 'RoleBinding';
    static apiVersion = 'rbac/v1';

    metadata(metadata: ObjectMeta): RoleBindingHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    roleRef(roleRef: RoleRef): RoleBindingHelper {
        if (!this._template.roleRef) this._template.roleRef = []
        this._template.roleRef = {
            ...this._template.roleRef,
            ...roleRef
        }
        return this
    }

    subjects(subjects: Array<Subject>): RoleBindingHelper {
        if (!Array.isArray(subjects)) { subjects = [subjects] }
        if (!this._template.subjects) this._template.subjects = subjects
        this._template.subjects = [...this._template.subjects, ...subjects]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RoleBindingHelper.kind
        this._template.apiVersion = RoleBindingHelper.apiVersion
    }
}

/** RoleBindingList is a collection of RoleBindings */
export class RoleBindingListHelper extends ResourceTemplate {
    static kind = 'RoleBindingList';
    static apiVersion = 'rbac/v1';

    items(items: Array<RoleBinding>): RoleBindingListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): RoleBindingListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RoleBindingListHelper.kind
        this._template.apiVersion = RoleBindingListHelper.apiVersion
    }
}

/** RoleList is a collection of Roles */
export class RoleListHelper extends ResourceTemplate {
    static kind = 'RoleList';
    static apiVersion = 'rbac/v1';

    items(items: Array<Role>): RoleListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): RoleListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RoleListHelper.kind
        this._template.apiVersion = RoleListHelper.apiVersion
    }
}

/** RoleRef contains information that points to the role being used */
export class RoleRefHelper extends ResourceTemplate {
    static kind = 'RoleRef';
    static apiVersion = 'rbac/v1';

    apiGroup(apiGroup: string): RoleRefHelper {
        this._template.apiGroup = apiGroup
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RoleRefHelper.kind
        this._template.apiVersion = RoleRefHelper.apiVersion
    }
}

/** Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names. */
export class SubjectHelper extends ResourceTemplate {
    static kind = 'Subject';
    static apiVersion = 'rbac/v1';

    apiGroup(apiGroup: string): SubjectHelper {
        this._template.apiGroup = apiGroup
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SubjectHelper.kind
        this._template.apiVersion = SubjectHelper.apiVersion
    }
}
