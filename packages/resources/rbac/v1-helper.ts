import { ResourceTemplate, Template } from "../resourceTemplate";
import { AggregationRule, ClusterRole, ClusterRoleBinding, ClusterRoleBindingList, ClusterRoleList, PolicyRule, Role, RoleBinding, RoleBindingList, RoleList, RoleRef, Subject } from "./v1";
import { LabelSelector, ListMeta, ObjectMeta } from "../meta/v1";
import { ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";

export interface AggregationRuleHelper extends AggregationRule {
    $clusterRoleSelectors(x: Array<LabelSelector>): AggregationRuleHelper;
}

/** AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole */
export class AggregationRuleHelper extends Template implements AggregationRuleHelper {
    constructor(obj: any) {
        super(obj)
    }

    _clusterRoleSelectors: Array<LabelSelector>;
    get clusterRoleSelectors(): Array<LabelSelector> {
        return this._clusterRoleSelectors
    }
    set clusterRoleSelectors(x: Array<LabelSelector>) {
        this._clusterRoleSelectors = this.set(this.clusterRoleSelectors, x)
    }
    $clusterRoleSelectors(x: Array<LabelSelector>) {
        this.clusterRoleSelectors = x; return this
    }
}

export interface ClusterRoleHelper extends ClusterRole {
    $aggregationRule(x: AggregationRuleHelper): ClusterRoleHelper;
    $metadata(x: ObjectMetaHelper): ClusterRoleHelper;
    $rules(x: Array<PolicyRule>): ClusterRoleHelper;
}

/** ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding. */
export class ClusterRoleHelper extends ResourceTemplate implements ClusterRoleHelper {
    static kind = 'ClusterRole';
    static apiVersion = 'rbac/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ClusterRoleHelper.kind, ClusterRoleHelper.apiVersion)
    }

    _aggregationRule: AggregationRuleHelper;
    get aggregationRule(): AggregationRuleHelper {
        return this._aggregationRule
    }
    set aggregationRule(x: AggregationRuleHelper) {
        this._aggregationRule = x
    }
    $aggregationRule(x: AggregationRuleHelper) {
        this.aggregationRule = x; return this
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

    _rules: Array<PolicyRule>;
    get rules(): Array<PolicyRule> {
        return this._rules
    }
    set rules(x: Array<PolicyRule>) {
        this._rules = this.set(this.rules, x)
    }
    $rules(x: Array<PolicyRule>) {
        this.rules = x; return this
    }
}

export interface ClusterRoleBindingHelper extends ClusterRoleBinding {
    $metadata(x: ObjectMetaHelper): ClusterRoleBindingHelper;
    $roleRef(x: RoleRefHelper): ClusterRoleBindingHelper;
    $subjects(x: Array<Subject>): ClusterRoleBindingHelper;
}

/** ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject. */
export class ClusterRoleBindingHelper extends ResourceTemplate implements ClusterRoleBindingHelper {
    static kind = 'ClusterRoleBinding';
    static apiVersion = 'rbac/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ClusterRoleBindingHelper.kind, ClusterRoleBindingHelper.apiVersion)
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

    _roleRef: RoleRefHelper;
    get roleRef(): RoleRefHelper {
        return this._roleRef
    }
    set roleRef(x: RoleRefHelper) {
        this._roleRef = x
    }
    $roleRef(x: RoleRefHelper) {
        this.roleRef = x; return this
    }

    _subjects: Array<Subject>;
    get subjects(): Array<Subject> {
        return this._subjects
    }
    set subjects(x: Array<Subject>) {
        this._subjects = this.set(this.subjects, x)
    }
    $subjects(x: Array<Subject>) {
        this.subjects = x; return this
    }
}

export interface ClusterRoleBindingListHelper extends ClusterRoleBindingList {
    $items(x: Array<ClusterRoleBinding>): ClusterRoleBindingListHelper;
    $metadata(x: ListMetaHelper): ClusterRoleBindingListHelper;
}

/** ClusterRoleBindingList is a collection of ClusterRoleBindings */
export class ClusterRoleBindingListHelper extends ResourceTemplate implements ClusterRoleBindingListHelper {
    static kind = 'ClusterRoleBindingList';
    static apiVersion = 'rbac/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ClusterRoleBindingListHelper.kind, ClusterRoleBindingListHelper.apiVersion)
    }

    _items: Array<ClusterRoleBinding>;
    get items(): Array<ClusterRoleBinding> {
        return this._items
    }
    set items(x: Array<ClusterRoleBinding>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<ClusterRoleBinding>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $metadata(x: ListMetaHelper) {
        this.metadata = x; return this
    }
}

export interface ClusterRoleListHelper extends ClusterRoleList {
    $items(x: Array<ClusterRole>): ClusterRoleListHelper;
    $metadata(x: ListMetaHelper): ClusterRoleListHelper;
}

/** ClusterRoleList is a collection of ClusterRoles */
export class ClusterRoleListHelper extends ResourceTemplate implements ClusterRoleListHelper {
    static kind = 'ClusterRoleList';
    static apiVersion = 'rbac/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ClusterRoleListHelper.kind, ClusterRoleListHelper.apiVersion)
    }

    _items: Array<ClusterRole>;
    get items(): Array<ClusterRole> {
        return this._items
    }
    set items(x: Array<ClusterRole>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<ClusterRole>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $metadata(x: ListMetaHelper) {
        this.metadata = x; return this
    }
}

export interface PolicyRuleHelper extends PolicyRule {
    $apiGroups(x: Array<string>): PolicyRuleHelper;
    $nonResourceURLs(x: Array<string>): PolicyRuleHelper;
    $resourceNames(x: Array<string>): PolicyRuleHelper;
    $resources(x: Array<string>): PolicyRuleHelper;
    $verbs(x: Array<string>): PolicyRuleHelper;
}

/** PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to. */
export class PolicyRuleHelper extends Template implements PolicyRuleHelper {
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

export interface RoleHelper extends Role {
    $metadata(x: ObjectMetaHelper): RoleHelper;
    $rules(x: Array<PolicyRule>): RoleHelper;
}

/** Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. */
export class RoleHelper extends ResourceTemplate implements RoleHelper {
    static kind = 'Role';
    static apiVersion = 'rbac/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, RoleHelper.kind, RoleHelper.apiVersion)
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

    _rules: Array<PolicyRule>;
    get rules(): Array<PolicyRule> {
        return this._rules
    }
    set rules(x: Array<PolicyRule>) {
        this._rules = this.set(this.rules, x)
    }
    $rules(x: Array<PolicyRule>) {
        this.rules = x; return this
    }
}

export interface RoleBindingHelper extends RoleBinding {
    $metadata(x: ObjectMetaHelper): RoleBindingHelper;
    $roleRef(x: RoleRefHelper): RoleBindingHelper;
    $subjects(x: Array<Subject>): RoleBindingHelper;
}

/** RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace. */
export class RoleBindingHelper extends ResourceTemplate implements RoleBindingHelper {
    static kind = 'RoleBinding';
    static apiVersion = 'rbac/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, RoleBindingHelper.kind, RoleBindingHelper.apiVersion)
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

    _roleRef: RoleRefHelper;
    get roleRef(): RoleRefHelper {
        return this._roleRef
    }
    set roleRef(x: RoleRefHelper) {
        this._roleRef = x
    }
    $roleRef(x: RoleRefHelper) {
        this.roleRef = x; return this
    }

    _subjects: Array<Subject>;
    get subjects(): Array<Subject> {
        return this._subjects
    }
    set subjects(x: Array<Subject>) {
        this._subjects = this.set(this.subjects, x)
    }
    $subjects(x: Array<Subject>) {
        this.subjects = x; return this
    }
}

export interface RoleBindingListHelper extends RoleBindingList {
    $items(x: Array<RoleBinding>): RoleBindingListHelper;
    $metadata(x: ListMetaHelper): RoleBindingListHelper;
}

/** RoleBindingList is a collection of RoleBindings */
export class RoleBindingListHelper extends ResourceTemplate implements RoleBindingListHelper {
    static kind = 'RoleBindingList';
    static apiVersion = 'rbac/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, RoleBindingListHelper.kind, RoleBindingListHelper.apiVersion)
    }

    _items: Array<RoleBinding>;
    get items(): Array<RoleBinding> {
        return this._items
    }
    set items(x: Array<RoleBinding>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<RoleBinding>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $metadata(x: ListMetaHelper) {
        this.metadata = x; return this
    }
}

export interface RoleListHelper extends RoleList {
    $items(x: Array<Role>): RoleListHelper;
    $metadata(x: ListMetaHelper): RoleListHelper;
}

/** RoleList is a collection of Roles */
export class RoleListHelper extends ResourceTemplate implements RoleListHelper {
    static kind = 'RoleList';
    static apiVersion = 'rbac/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, RoleListHelper.kind, RoleListHelper.apiVersion)
    }

    _items: Array<Role>;
    get items(): Array<Role> {
        return this._items
    }
    set items(x: Array<Role>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<Role>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $metadata(x: ListMetaHelper) {
        this.metadata = x; return this
    }
}

export interface RoleRefHelper extends RoleRef {
    $apiGroup(x: string): RoleRefHelper;
}

/** RoleRef contains information that points to the role being used */
export class RoleRefHelper extends Template implements RoleRefHelper {
    constructor(obj: any) {
        super(obj)
    }

    _apiGroup: string;
    get apiGroup(): string {
        return this._apiGroup
    }
    set apiGroup(x: string) {
        this._apiGroup = x
    }
    $apiGroup(x: string) {
        this.apiGroup = x; return this
    }
}

export interface SubjectHelper extends Subject {
    $apiGroup(x: string): SubjectHelper;
}

/** Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names. */
export class SubjectHelper extends Template implements SubjectHelper {
    constructor(obj: any) {
        super(obj)
    }

    _apiGroup: string;
    get apiGroup(): string {
        return this._apiGroup
    }
    set apiGroup(x: string) {
        this._apiGroup = x
    }
    $apiGroup(x: string) {
        this.apiGroup = x; return this
    }
}
