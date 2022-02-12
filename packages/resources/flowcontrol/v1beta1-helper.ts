import { ResourceTemplate } from "../resourceTemplate";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";
import { FlowDistinguisherMethod, FlowSchema, FlowSchemaCondition, FlowSchemaSpec, FlowSchemaStatus, GroupSubject, LimitResponse, LimitedPriorityLevelConfiguration, NonResourcePolicyRule, PolicyRulesWithSubjects, PriorityLevelConfiguration, PriorityLevelConfigurationCondition, PriorityLevelConfigurationReference, PriorityLevelConfigurationSpec, PriorityLevelConfigurationStatus, QueuingConfiguration, ResourcePolicyRule, ServiceAccountSubject, Subject, UserSubject } from "./v1beta1";

/** FlowDistinguisherMethod specifies the method of a flow distinguisher. */
export class FlowDistinguisherMethodHelper extends ResourceTemplate {
    static kind = 'FlowDistinguisherMethod';
    static apiVersion = 'flowcontrol/v1beta1';

    type(type: string): FlowDistinguisherMethodHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = FlowDistinguisherMethodHelper.kind
        this._template.apiVersion = FlowDistinguisherMethodHelper.apiVersion
    }
}

/** FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a "flow distinguisher". */
export class FlowSchemaHelper extends ResourceTemplate {
    static kind = 'FlowSchema';
    static apiVersion = 'flowcontrol/v1beta1';

    metadata(metadata: ObjectMeta): FlowSchemaHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: FlowSchemaSpec): FlowSchemaHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: FlowSchemaStatus): FlowSchemaHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = FlowSchemaHelper.kind
        this._template.apiVersion = FlowSchemaHelper.apiVersion
    }
}

/** FlowSchemaCondition describes conditions for a FlowSchema. */
export class FlowSchemaConditionHelper extends ResourceTemplate {
    static kind = 'FlowSchemaCondition';
    static apiVersion = 'flowcontrol/v1beta1';

    lastTransitionTime(lastTransitionTime: Time): FlowSchemaConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    message(message: string): FlowSchemaConditionHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): FlowSchemaConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): FlowSchemaConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): FlowSchemaConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = FlowSchemaConditionHelper.kind
        this._template.apiVersion = FlowSchemaConditionHelper.apiVersion
    }
}

/** FlowSchemaList is a list of FlowSchema objects. */
export class FlowSchemaListHelper extends ResourceTemplate {
    static kind = 'FlowSchemaList';
    static apiVersion = 'flowcontrol/v1beta1';

    items(items: Array<FlowSchema>): FlowSchemaListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): FlowSchemaListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = FlowSchemaListHelper.kind
        this._template.apiVersion = FlowSchemaListHelper.apiVersion
    }
}

/** FlowSchemaSpec describes how the FlowSchema's specification looks like. */
export class FlowSchemaSpecHelper extends ResourceTemplate {
    static kind = 'FlowSchemaSpec';
    static apiVersion = 'flowcontrol/v1beta1';

    distinguisherMethod(distinguisherMethod: FlowDistinguisherMethod): FlowSchemaSpecHelper {
        if (!this._template.distinguisherMethod) this._template.distinguisherMethod = []
        this._template.distinguisherMethod = {
            ...this._template.distinguisherMethod,
            ...distinguisherMethod
        }
        return this
    }

    matchingPrecedence(matchingPrecedence: number): FlowSchemaSpecHelper {
        this._template.matchingPrecedence = matchingPrecedence
        return this
    }

    priorityLevelConfiguration(priorityLevelConfiguration: PriorityLevelConfigurationReference): FlowSchemaSpecHelper {
        if (!this._template.priorityLevelConfiguration) this._template.priorityLevelConfiguration = []
        this._template.priorityLevelConfiguration = {
            ...this._template.priorityLevelConfiguration,
            ...priorityLevelConfiguration
        }
        return this
    }

    rules(rules: Array<PolicyRulesWithSubjects>): FlowSchemaSpecHelper {
        if (!Array.isArray(rules)) { rules = [rules] }
        if (!this._template.rules) this._template.rules = rules
        this._template.rules = [...this._template.rules, ...rules]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = FlowSchemaSpecHelper.kind
        this._template.apiVersion = FlowSchemaSpecHelper.apiVersion
    }
}

/** FlowSchemaStatus represents the current state of a FlowSchema. */
export class FlowSchemaStatusHelper extends ResourceTemplate {
    static kind = 'FlowSchemaStatus';
    static apiVersion = 'flowcontrol/v1beta1';

    conditions(conditions: Array<FlowSchemaCondition>): FlowSchemaStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = FlowSchemaStatusHelper.kind
        this._template.apiVersion = FlowSchemaStatusHelper.apiVersion
    }
}

/** GroupSubject holds detailed information for group-kind subject. */
export class GroupSubjectHelper extends ResourceTemplate {
    static kind = 'GroupSubject';
    static apiVersion = 'flowcontrol/v1beta1';

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = GroupSubjectHelper.kind
        this._template.apiVersion = GroupSubjectHelper.apiVersion
    }
}

/** LimitResponse defines how to handle requests that can not be executed right now. */
export class LimitResponseHelper extends ResourceTemplate {
    static kind = 'LimitResponse';
    static apiVersion = 'flowcontrol/v1beta1';

    queuing(queuing: QueuingConfiguration): LimitResponseHelper {
        if (!this._template.queuing) this._template.queuing = []
        this._template.queuing = {
            ...this._template.queuing,
            ...queuing
        }
        return this
    }

    type(type: string): LimitResponseHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LimitResponseHelper.kind
        this._template.apiVersion = LimitResponseHelper.apiVersion
    }
}

/**
 * LimitedPriorityLevelConfiguration specifies how to handle requests that are subject to limits. It addresses two issues:
 *  * How are requests for this priority level limited?
 *  * What should be done with requests that exceed the limit?
 */
export class LimitedPriorityLevelConfigurationHelper extends ResourceTemplate {
    static kind = 'LimitedPriorityLevelConfiguration';
    static apiVersion = 'flowcontrol/v1beta1';

    assuredConcurrencyShares(assuredConcurrencyShares: number): LimitedPriorityLevelConfigurationHelper {
        this._template.assuredConcurrencyShares = assuredConcurrencyShares
        return this
    }

    limitResponse(limitResponse: LimitResponse): LimitedPriorityLevelConfigurationHelper {
        if (!this._template.limitResponse) this._template.limitResponse = []
        this._template.limitResponse = {
            ...this._template.limitResponse,
            ...limitResponse
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LimitedPriorityLevelConfigurationHelper.kind
        this._template.apiVersion = LimitedPriorityLevelConfigurationHelper.apiVersion
    }
}

/** NonResourcePolicyRule is a predicate that matches non-resource requests according to their verb and the target non-resource URL. A NonResourcePolicyRule matches a request if and only if both (a) at least one member of verbs matches the request and (b) at least one member of nonResourceURLs matches the request. */
export class NonResourcePolicyRuleHelper extends ResourceTemplate {
    static kind = 'NonResourcePolicyRule';
    static apiVersion = 'flowcontrol/v1beta1';

    nonResourceURLs(nonResourceURLs: Array<string>): NonResourcePolicyRuleHelper {
        if (!Array.isArray(nonResourceURLs)) { nonResourceURLs = [nonResourceURLs] }
        if (!this._template.nonResourceURLs) this._template.nonResourceURLs = nonResourceURLs
        this._template.nonResourceURLs = [...this._template.nonResourceURLs, ...nonResourceURLs]
        return this
    }

    verbs(verbs: Array<string>): NonResourcePolicyRuleHelper {
        if (!Array.isArray(verbs)) { verbs = [verbs] }
        if (!this._template.verbs) this._template.verbs = verbs
        this._template.verbs = [...this._template.verbs, ...verbs]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NonResourcePolicyRuleHelper.kind
        this._template.apiVersion = NonResourcePolicyRuleHelper.apiVersion
    }
}

/** PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request. */
export class PolicyRulesWithSubjectsHelper extends ResourceTemplate {
    static kind = 'PolicyRulesWithSubjects';
    static apiVersion = 'flowcontrol/v1beta1';

    nonResourceRules(nonResourceRules: Array<NonResourcePolicyRule>): PolicyRulesWithSubjectsHelper {
        if (!Array.isArray(nonResourceRules)) { nonResourceRules = [nonResourceRules] }
        if (!this._template.nonResourceRules) this._template.nonResourceRules = nonResourceRules
        this._template.nonResourceRules = [...this._template.nonResourceRules, ...nonResourceRules]
        return this
    }

    resourceRules(resourceRules: Array<ResourcePolicyRule>): PolicyRulesWithSubjectsHelper {
        if (!Array.isArray(resourceRules)) { resourceRules = [resourceRules] }
        if (!this._template.resourceRules) this._template.resourceRules = resourceRules
        this._template.resourceRules = [...this._template.resourceRules, ...resourceRules]
        return this
    }

    subjects(subjects: Array<Subject>): PolicyRulesWithSubjectsHelper {
        if (!Array.isArray(subjects)) { subjects = [subjects] }
        if (!this._template.subjects) this._template.subjects = subjects
        this._template.subjects = [...this._template.subjects, ...subjects]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PolicyRulesWithSubjectsHelper.kind
        this._template.apiVersion = PolicyRulesWithSubjectsHelper.apiVersion
    }
}

/** PriorityLevelConfiguration represents the configuration of a priority level. */
export class PriorityLevelConfigurationHelper extends ResourceTemplate {
    static kind = 'PriorityLevelConfiguration';
    static apiVersion = 'flowcontrol/v1beta1';

    metadata(metadata: ObjectMeta): PriorityLevelConfigurationHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: PriorityLevelConfigurationSpec): PriorityLevelConfigurationHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: PriorityLevelConfigurationStatus): PriorityLevelConfigurationHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PriorityLevelConfigurationHelper.kind
        this._template.apiVersion = PriorityLevelConfigurationHelper.apiVersion
    }
}

/** PriorityLevelConfigurationCondition defines the condition of priority level. */
export class PriorityLevelConfigurationConditionHelper extends ResourceTemplate {
    static kind = 'PriorityLevelConfigurationCondition';
    static apiVersion = 'flowcontrol/v1beta1';

    lastTransitionTime(lastTransitionTime: Time): PriorityLevelConfigurationConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    message(message: string): PriorityLevelConfigurationConditionHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): PriorityLevelConfigurationConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): PriorityLevelConfigurationConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): PriorityLevelConfigurationConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PriorityLevelConfigurationConditionHelper.kind
        this._template.apiVersion = PriorityLevelConfigurationConditionHelper.apiVersion
    }
}

/** PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects. */
export class PriorityLevelConfigurationListHelper extends ResourceTemplate {
    static kind = 'PriorityLevelConfigurationList';
    static apiVersion = 'flowcontrol/v1beta1';

    items(items: Array<PriorityLevelConfiguration>): PriorityLevelConfigurationListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): PriorityLevelConfigurationListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PriorityLevelConfigurationListHelper.kind
        this._template.apiVersion = PriorityLevelConfigurationListHelper.apiVersion
    }
}

/** PriorityLevelConfigurationReference contains information that points to the "request-priority" being used. */
export class PriorityLevelConfigurationReferenceHelper extends ResourceTemplate {
    static kind = 'PriorityLevelConfigurationReference';
    static apiVersion = 'flowcontrol/v1beta1';

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PriorityLevelConfigurationReferenceHelper.kind
        this._template.apiVersion = PriorityLevelConfigurationReferenceHelper.apiVersion
    }
}

/** PriorityLevelConfigurationSpec specifies the configuration of a priority level. */
export class PriorityLevelConfigurationSpecHelper extends ResourceTemplate {
    static kind = 'PriorityLevelConfigurationSpec';
    static apiVersion = 'flowcontrol/v1beta1';

    limited(limited: LimitedPriorityLevelConfiguration): PriorityLevelConfigurationSpecHelper {
        if (!this._template.limited) this._template.limited = []
        this._template.limited = {
            ...this._template.limited,
            ...limited
        }
        return this
    }

    type(type: string): PriorityLevelConfigurationSpecHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PriorityLevelConfigurationSpecHelper.kind
        this._template.apiVersion = PriorityLevelConfigurationSpecHelper.apiVersion
    }
}

/** PriorityLevelConfigurationStatus represents the current state of a "request-priority". */
export class PriorityLevelConfigurationStatusHelper extends ResourceTemplate {
    static kind = 'PriorityLevelConfigurationStatus';
    static apiVersion = 'flowcontrol/v1beta1';

    conditions(conditions: Array<PriorityLevelConfigurationCondition>): PriorityLevelConfigurationStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PriorityLevelConfigurationStatusHelper.kind
        this._template.apiVersion = PriorityLevelConfigurationStatusHelper.apiVersion
    }
}

/** QueuingConfiguration holds the configuration parameters for queuing */
export class QueuingConfigurationHelper extends ResourceTemplate {
    static kind = 'QueuingConfiguration';
    static apiVersion = 'flowcontrol/v1beta1';

    handSize(handSize: number): QueuingConfigurationHelper {
        this._template.handSize = handSize
        return this
    }

    queueLengthLimit(queueLengthLimit: number): QueuingConfigurationHelper {
        this._template.queueLengthLimit = queueLengthLimit
        return this
    }

    queues(queues: number): QueuingConfigurationHelper {
        this._template.queues = queues
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = QueuingConfigurationHelper.kind
        this._template.apiVersion = QueuingConfigurationHelper.apiVersion
    }
}

/** ResourcePolicyRule is a predicate that matches some resource requests, testing the request's verb and the target resource. A ResourcePolicyRule matches a resource request if and only if: (a) at least one member of verbs matches the request, (b) at least one member of apiGroups matches the request, (c) at least one member of resources matches the request, and (d) least one member of namespaces matches the request. */
export class ResourcePolicyRuleHelper extends ResourceTemplate {
    static kind = 'ResourcePolicyRule';
    static apiVersion = 'flowcontrol/v1beta1';

    apiGroups(apiGroups: Array<string>): ResourcePolicyRuleHelper {
        if (!Array.isArray(apiGroups)) { apiGroups = [apiGroups] }
        if (!this._template.apiGroups) this._template.apiGroups = apiGroups
        this._template.apiGroups = [...this._template.apiGroups, ...apiGroups]
        return this
    }

    clusterScope(clusterScope: boolean): ResourcePolicyRuleHelper {
        this._template.clusterScope = clusterScope
        return this
    }

    namespaces(namespaces: Array<string>): ResourcePolicyRuleHelper {
        if (!Array.isArray(namespaces)) { namespaces = [namespaces] }
        if (!this._template.namespaces) this._template.namespaces = namespaces
        this._template.namespaces = [...this._template.namespaces, ...namespaces]
        return this
    }

    resources(resources: Array<string>): ResourcePolicyRuleHelper {
        if (!Array.isArray(resources)) { resources = [resources] }
        if (!this._template.resources) this._template.resources = resources
        this._template.resources = [...this._template.resources, ...resources]
        return this
    }

    verbs(verbs: Array<string>): ResourcePolicyRuleHelper {
        if (!Array.isArray(verbs)) { verbs = [verbs] }
        if (!this._template.verbs) this._template.verbs = verbs
        this._template.verbs = [...this._template.verbs, ...verbs]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ResourcePolicyRuleHelper.kind
        this._template.apiVersion = ResourcePolicyRuleHelper.apiVersion
    }
}

/** ServiceAccountSubject holds detailed information for service-account-kind subject. */
export class ServiceAccountSubjectHelper extends ResourceTemplate {
    static kind = 'ServiceAccountSubject';
    static apiVersion = 'flowcontrol/v1beta1';

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ServiceAccountSubjectHelper.kind
        this._template.apiVersion = ServiceAccountSubjectHelper.apiVersion
    }
}

/** Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account. */
export class SubjectHelper extends ResourceTemplate {
    static kind = 'Subject';
    static apiVersion = 'flowcontrol/v1beta1';

    group(group: GroupSubject): SubjectHelper {
        if (!this._template.group) this._template.group = []
        this._template.group = {
            ...this._template.group,
            ...group
        }
        return this
    }

    serviceAccount(serviceAccount: ServiceAccountSubject): SubjectHelper {
        if (!this._template.serviceAccount) this._template.serviceAccount = []
        this._template.serviceAccount = {
            ...this._template.serviceAccount,
            ...serviceAccount
        }
        return this
    }

    user(user: UserSubject): SubjectHelper {
        if (!this._template.user) this._template.user = []
        this._template.user = {
            ...this._template.user,
            ...user
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SubjectHelper.kind
        this._template.apiVersion = SubjectHelper.apiVersion
    }
}

/** UserSubject holds detailed information for user-kind subject. */
export class UserSubjectHelper extends ResourceTemplate {
    static kind = 'UserSubject';
    static apiVersion = 'flowcontrol/v1beta1';

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = UserSubjectHelper.kind
        this._template.apiVersion = UserSubjectHelper.apiVersion
    }
}
