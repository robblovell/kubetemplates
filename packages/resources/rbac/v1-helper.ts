import { ResourceTemplate, Template } from "../resourceTemplate";
import { AggregationRule, ClusterRole, ClusterRoleBinding, ClusterRoleBindingList, ClusterRoleList, PolicyRule, Role, RoleBinding, RoleBindingList, RoleList, RoleRef, Subject } from "./v1";
import { LabelSelector, ListMeta, ObjectMeta } from "../meta/v1";

export interface AggregationRuleHelper extends AggregationRule {
    $clusterRoleSelectors(x: any): any;
}

/** AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole */
export class AggregationRuleHelper extends Template implements AggregationRuleHelper {
    constructor(obj: any) {
        super(obj)
    }

    _clusterRoleSelectors: any;
    get clusterRoleSelectors(): any /*Array<LabelSelector>*/ {
        return this._clusterRoleSelectors
    }
    set clusterRoleSelectors(x: any /*Array<LabelSelector>*/) {
        this._clusterRoleSelectors = this.set(this.clusterRoleSelectors, x)
    }
    setClusterRoleSelectors(x: any /*Array<LabelSelector>*/) {
        this.clusterRoleSelectors = x; return this
    }
}

export interface ClusterRoleHelper extends ClusterRole {
    $aggregationRule(x: any): any;
    $metadata(x: any): any;
    $rules(x: any): any;
}

/** ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding. */
export class ClusterRoleHelper extends ResourceTemplate implements ClusterRoleHelper {
    static kind = 'ClusterRole';
    static apiVersion = 'rbac/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ClusterRoleHelper.kind, ClusterRoleHelper.apiVersion)
    }

    _aggregationRule: any;
    get aggregationRule(): any /*AggregationRuleHelper*/ {
        return this._aggregationRule
    }
    set aggregationRule(x: any /*AggregationRuleHelper*/) {
        this._aggregationRule = x
    }
    setAggregationRule(x: any /*AggregationRuleHelper*/) {
        this.aggregationRule = x; return this
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

    _rules: any;
    get rules(): any /*Array<PolicyRule>*/ {
        return this._rules
    }
    set rules(x: any /*Array<PolicyRule>*/) {
        this._rules = this.set(this.rules, x)
    }
    setRules(x: any /*Array<PolicyRule>*/) {
        this.rules = x; return this
    }
}

export interface ClusterRoleBindingHelper extends ClusterRoleBinding {
    $metadata(x: any): any;
    $roleRef(x: any): any;
    $subjects(x: any): any;
}

/** ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject. */
export class ClusterRoleBindingHelper extends ResourceTemplate implements ClusterRoleBindingHelper {
    static kind = 'ClusterRoleBinding';
    static apiVersion = 'rbac/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ClusterRoleBindingHelper.kind, ClusterRoleBindingHelper.apiVersion)
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

    _roleRef: any;
    get roleRef(): any /*RoleRefHelper*/ {
        return this._roleRef
    }
    set roleRef(x: any /*RoleRefHelper*/) {
        this._roleRef = x
    }
    setRoleRef(x: any /*RoleRefHelper*/) {
        this.roleRef = x; return this
    }

    _subjects: any;
    get subjects(): any /*Array<Subject>*/ {
        return this._subjects
    }
    set subjects(x: any /*Array<Subject>*/) {
        this._subjects = this.set(this.subjects, x)
    }
    setSubjects(x: any /*Array<Subject>*/) {
        this.subjects = x; return this
    }
}

export interface ClusterRoleBindingListHelper extends ClusterRoleBindingList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** ClusterRoleBindingList is a collection of ClusterRoleBindings */
export class ClusterRoleBindingListHelper extends ResourceTemplate implements ClusterRoleBindingListHelper {
    static kind = 'ClusterRoleBindingList';
    static apiVersion = 'rbac/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ClusterRoleBindingListHelper.kind, ClusterRoleBindingListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<ClusterRoleBinding>*/ {
        return this._items
    }
    set items(x: any /*Array<ClusterRoleBinding>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<ClusterRoleBinding>*/) {
        this.items = x; return this
    }

    _metadata: any;
    get metadata(): any /*ListMetaHelper*/ {
        return this._metadata
    }
    set metadata(x: any /*ListMetaHelper*/) {
        this._metadata = x
    }
    setMetadata(x: any /*ListMetaHelper*/) {
        this.metadata = x; return this
    }
}

export interface ClusterRoleListHelper extends ClusterRoleList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** ClusterRoleList is a collection of ClusterRoles */
export class ClusterRoleListHelper extends ResourceTemplate implements ClusterRoleListHelper {
    static kind = 'ClusterRoleList';
    static apiVersion = 'rbac/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ClusterRoleListHelper.kind, ClusterRoleListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<ClusterRole>*/ {
        return this._items
    }
    set items(x: any /*Array<ClusterRole>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<ClusterRole>*/) {
        this.items = x; return this
    }

    _metadata: any;
    get metadata(): any /*ListMetaHelper*/ {
        return this._metadata
    }
    set metadata(x: any /*ListMetaHelper*/) {
        this._metadata = x
    }
    setMetadata(x: any /*ListMetaHelper*/) {
        this.metadata = x; return this
    }
}

export interface PolicyRuleHelper extends PolicyRule {
    $apiGroups(x: any): any;
    $nonResourceURLs(x: any): any;
    $resourceNames(x: any): any;
    $resources(x: any): any;
    $verbs(x: any): any;
}

/** PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to. */
export class PolicyRuleHelper extends Template implements PolicyRuleHelper {
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

export interface RoleHelper extends Role {
    $metadata(x: any): any;
    $rules(x: any): any;
}

/** Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. */
export class RoleHelper extends ResourceTemplate implements RoleHelper {
    static kind = 'Role';
    static apiVersion = 'rbac/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, RoleHelper.kind, RoleHelper.apiVersion)
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

    _rules: any;
    get rules(): any /*Array<PolicyRule>*/ {
        return this._rules
    }
    set rules(x: any /*Array<PolicyRule>*/) {
        this._rules = this.set(this.rules, x)
    }
    setRules(x: any /*Array<PolicyRule>*/) {
        this.rules = x; return this
    }
}

export interface RoleBindingHelper extends RoleBinding {
    $metadata(x: any): any;
    $roleRef(x: any): any;
    $subjects(x: any): any;
}

/** RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace. */
export class RoleBindingHelper extends ResourceTemplate implements RoleBindingHelper {
    static kind = 'RoleBinding';
    static apiVersion = 'rbac/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, RoleBindingHelper.kind, RoleBindingHelper.apiVersion)
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

    _roleRef: any;
    get roleRef(): any /*RoleRefHelper*/ {
        return this._roleRef
    }
    set roleRef(x: any /*RoleRefHelper*/) {
        this._roleRef = x
    }
    setRoleRef(x: any /*RoleRefHelper*/) {
        this.roleRef = x; return this
    }

    _subjects: any;
    get subjects(): any /*Array<Subject>*/ {
        return this._subjects
    }
    set subjects(x: any /*Array<Subject>*/) {
        this._subjects = this.set(this.subjects, x)
    }
    setSubjects(x: any /*Array<Subject>*/) {
        this.subjects = x; return this
    }
}

export interface RoleBindingListHelper extends RoleBindingList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** RoleBindingList is a collection of RoleBindings */
export class RoleBindingListHelper extends ResourceTemplate implements RoleBindingListHelper {
    static kind = 'RoleBindingList';
    static apiVersion = 'rbac/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, RoleBindingListHelper.kind, RoleBindingListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<RoleBinding>*/ {
        return this._items
    }
    set items(x: any /*Array<RoleBinding>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<RoleBinding>*/) {
        this.items = x; return this
    }

    _metadata: any;
    get metadata(): any /*ListMetaHelper*/ {
        return this._metadata
    }
    set metadata(x: any /*ListMetaHelper*/) {
        this._metadata = x
    }
    setMetadata(x: any /*ListMetaHelper*/) {
        this.metadata = x; return this
    }
}

export interface RoleListHelper extends RoleList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** RoleList is a collection of Roles */
export class RoleListHelper extends ResourceTemplate implements RoleListHelper {
    static kind = 'RoleList';
    static apiVersion = 'rbac/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, RoleListHelper.kind, RoleListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<Role>*/ {
        return this._items
    }
    set items(x: any /*Array<Role>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<Role>*/) {
        this.items = x; return this
    }

    _metadata: any;
    get metadata(): any /*ListMetaHelper*/ {
        return this._metadata
    }
    set metadata(x: any /*ListMetaHelper*/) {
        this._metadata = x
    }
    setMetadata(x: any /*ListMetaHelper*/) {
        this.metadata = x; return this
    }
}

export interface RoleRefHelper extends RoleRef {
    $apiGroup(x: any): any;
}

/** RoleRef contains information that points to the role being used */
export class RoleRefHelper extends Template implements RoleRefHelper {
    constructor(obj: any) {
        super(obj)
    }

    _apiGroup: any;
    get apiGroup(): any /*string*/ {
        return this._apiGroup
    }
    set apiGroup(x: any /*string*/) {
        this._apiGroup = x
    }
    setApiGroup(x: any /*string*/) {
        this.apiGroup = x; return this
    }
}

export interface SubjectHelper extends Subject {
    $apiGroup(x: any): any;
}

/** Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names. */
export class SubjectHelper extends Template implements SubjectHelper {
    constructor(obj: any) {
        super(obj)
    }

    _apiGroup: any;
    get apiGroup(): any /*string*/ {
        return this._apiGroup
    }
    set apiGroup(x: any /*string*/) {
        this._apiGroup = x
    }
    setApiGroup(x: any /*string*/) {
        this.apiGroup = x; return this
    }
}
