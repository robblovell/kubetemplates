import { ResourceTemplate, Template } from "../resourceTemplate";
import { FlowDistinguisherMethod, FlowSchema, FlowSchemaCondition, FlowSchemaList, FlowSchemaSpec, FlowSchemaStatus, GroupSubject, LimitResponse, LimitedPriorityLevelConfiguration, NonResourcePolicyRule, PolicyRulesWithSubjects, PriorityLevelConfiguration, PriorityLevelConfigurationCondition, PriorityLevelConfigurationList, PriorityLevelConfigurationReference, PriorityLevelConfigurationSpec, PriorityLevelConfigurationStatus, QueuingConfiguration, ResourcePolicyRule, ServiceAccountSubject, Subject, UserSubject } from "./v1beta1";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";

export interface FlowDistinguisherMethodHelper extends FlowDistinguisherMethod {
    $type(x: any): any;
}

/** FlowDistinguisherMethod specifies the method of a flow distinguisher. */
export class FlowDistinguisherMethodHelper extends Template implements FlowDistinguisherMethodHelper {
    constructor(obj: any) {
        super(obj)
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface FlowSchemaHelper extends FlowSchema {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a "flow distinguisher". */
export class FlowSchemaHelper extends ResourceTemplate implements FlowSchemaHelper {
    static kind = 'FlowSchema';
    static apiVersion = 'flowcontrol/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, FlowSchemaHelper.kind, FlowSchemaHelper.apiVersion)
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
    get spec(): any /*FlowSchemaSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*FlowSchemaSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*FlowSchemaSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*FlowSchemaStatusHelper*/ {
        return this._status
    }
    set status(x: any /*FlowSchemaStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*FlowSchemaStatusHelper*/) {
        this.status = x; return this
    }
}

export interface FlowSchemaConditionHelper extends FlowSchemaCondition {
    $lastTransitionTime(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** FlowSchemaCondition describes conditions for a FlowSchema. */
export class FlowSchemaConditionHelper extends Template implements FlowSchemaConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastTransitionTime: any;
    get lastTransitionTime(): any /*Time*/ {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: any /*Time*/) {
        this._lastTransitionTime = x
    }
    setLastTransitionTime(x: any /*Time*/) {
        this.lastTransitionTime = x; return this
    }

    _message: any;
    get message(): any /*string*/ {
        return this._message
    }
    set message(x: any /*string*/) {
        this._message = x
    }
    setMessage(x: any /*string*/) {
        this.message = x; return this
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

    _status: any;
    get status(): any /*string*/ {
        return this._status
    }
    set status(x: any /*string*/) {
        this._status = x
    }
    setStatus(x: any /*string*/) {
        this.status = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface FlowSchemaListHelper extends FlowSchemaList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** FlowSchemaList is a list of FlowSchema objects. */
export class FlowSchemaListHelper extends ResourceTemplate implements FlowSchemaListHelper {
    static kind = 'FlowSchemaList';
    static apiVersion = 'flowcontrol/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, FlowSchemaListHelper.kind, FlowSchemaListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<FlowSchema>*/ {
        return this._items
    }
    set items(x: any /*Array<FlowSchema>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<FlowSchema>*/) {
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

export interface FlowSchemaSpecHelper extends FlowSchemaSpec {
    $distinguisherMethod(x: any): any;
    $matchingPrecedence(x: any): any;
    $priorityLevelConfiguration(x: any): any;
    $rules(x: any): any;
}

/** FlowSchemaSpec describes how the FlowSchema's specification looks like. */
export class FlowSchemaSpecHelper extends Template implements FlowSchemaSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _distinguisherMethod: any;
    get distinguisherMethod(): any /*FlowDistinguisherMethodHelper*/ {
        return this._distinguisherMethod
    }
    set distinguisherMethod(x: any /*FlowDistinguisherMethodHelper*/) {
        this._distinguisherMethod = x
    }
    setDistinguisherMethod(x: any /*FlowDistinguisherMethodHelper*/) {
        this.distinguisherMethod = x; return this
    }

    _matchingPrecedence: any;
    get matchingPrecedence(): any /*number*/ {
        return this._matchingPrecedence
    }
    set matchingPrecedence(x: any /*number*/) {
        this._matchingPrecedence = x
    }
    setMatchingPrecedence(x: any /*number*/) {
        this.matchingPrecedence = x; return this
    }

    _priorityLevelConfiguration: any;
    get priorityLevelConfiguration(): any /*PriorityLevelConfigurationReferenceHelper*/ {
        return this._priorityLevelConfiguration
    }
    set priorityLevelConfiguration(x: any /*PriorityLevelConfigurationReferenceHelper*/) {
        this._priorityLevelConfiguration = x
    }
    setPriorityLevelConfiguration(x: any /*PriorityLevelConfigurationReferenceHelper*/) {
        this.priorityLevelConfiguration = x; return this
    }

    _rules: any;
    get rules(): any /*Array<PolicyRulesWithSubjects>*/ {
        return this._rules
    }
    set rules(x: any /*Array<PolicyRulesWithSubjects>*/) {
        this._rules = this.set(this.rules, x)
    }
    setRules(x: any /*Array<PolicyRulesWithSubjects>*/) {
        this.rules = x; return this
    }
}

export interface FlowSchemaStatusHelper extends FlowSchemaStatus {
    $conditions(x: any): any;
}

/** FlowSchemaStatus represents the current state of a FlowSchema. */
export class FlowSchemaStatusHelper extends Template implements FlowSchemaStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conditions: any;
    get conditions(): any /*Array<FlowSchemaCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<FlowSchemaCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<FlowSchemaCondition>*/) {
        this.conditions = x; return this
    }
}

export interface GroupSubjectHelper extends GroupSubject {
}

/** GroupSubject holds detailed information for group-kind subject. */
export class GroupSubjectHelper extends Template implements GroupSubjectHelper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface LimitResponseHelper extends LimitResponse {
    $queuing(x: any): any;
    $type(x: any): any;
}

/** LimitResponse defines how to handle requests that can not be executed right now. */
export class LimitResponseHelper extends Template implements LimitResponseHelper {
    constructor(obj: any) {
        super(obj)
    }

    _queuing: any;
    get queuing(): any /*QueuingConfigurationHelper*/ {
        return this._queuing
    }
    set queuing(x: any /*QueuingConfigurationHelper*/) {
        this._queuing = x
    }
    setQueuing(x: any /*QueuingConfigurationHelper*/) {
        this.queuing = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface LimitedPriorityLevelConfigurationHelper extends LimitedPriorityLevelConfiguration {
    $assuredConcurrencyShares(x: any): any;
    $limitResponse(x: any): any;
}

/**
 * LimitedPriorityLevelConfiguration specifies how to handle requests that are subject to limits. It addresses two issues:
 *  * How are requests for this priority level limited?
 *  * What should be done with requests that exceed the limit?
 */
export class LimitedPriorityLevelConfigurationHelper extends Template implements LimitedPriorityLevelConfigurationHelper {
    constructor(obj: any) {
        super(obj)
    }

    _assuredConcurrencyShares: any;
    get assuredConcurrencyShares(): any /*number*/ {
        return this._assuredConcurrencyShares
    }
    set assuredConcurrencyShares(x: any /*number*/) {
        this._assuredConcurrencyShares = x
    }
    setAssuredConcurrencyShares(x: any /*number*/) {
        this.assuredConcurrencyShares = x; return this
    }

    _limitResponse: any;
    get limitResponse(): any /*LimitResponseHelper*/ {
        return this._limitResponse
    }
    set limitResponse(x: any /*LimitResponseHelper*/) {
        this._limitResponse = x
    }
    setLimitResponse(x: any /*LimitResponseHelper*/) {
        this.limitResponse = x; return this
    }
}

export interface NonResourcePolicyRuleHelper extends NonResourcePolicyRule {
    $nonResourceURLs(x: any): any;
    $verbs(x: any): any;
}

/** NonResourcePolicyRule is a predicate that matches non-resource requests according to their verb and the target non-resource URL. A NonResourcePolicyRule matches a request if and only if both (a) at least one member of verbs matches the request and (b) at least one member of nonResourceURLs matches the request. */
export class NonResourcePolicyRuleHelper extends Template implements NonResourcePolicyRuleHelper {
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

export interface PolicyRulesWithSubjectsHelper extends PolicyRulesWithSubjects {
    $nonResourceRules(x: any): any;
    $resourceRules(x: any): any;
    $subjects(x: any): any;
}

/** PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request. */
export class PolicyRulesWithSubjectsHelper extends Template implements PolicyRulesWithSubjectsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _nonResourceRules: any;
    get nonResourceRules(): any /*Array<NonResourcePolicyRule>*/ {
        return this._nonResourceRules
    }
    set nonResourceRules(x: any /*Array<NonResourcePolicyRule>*/) {
        this._nonResourceRules = this.set(this.nonResourceRules, x)
    }
    setNonResourceRules(x: any /*Array<NonResourcePolicyRule>*/) {
        this.nonResourceRules = x; return this
    }

    _resourceRules: any;
    get resourceRules(): any /*Array<ResourcePolicyRule>*/ {
        return this._resourceRules
    }
    set resourceRules(x: any /*Array<ResourcePolicyRule>*/) {
        this._resourceRules = this.set(this.resourceRules, x)
    }
    setResourceRules(x: any /*Array<ResourcePolicyRule>*/) {
        this.resourceRules = x; return this
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

export interface PriorityLevelConfigurationHelper extends PriorityLevelConfiguration {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** PriorityLevelConfiguration represents the configuration of a priority level. */
export class PriorityLevelConfigurationHelper extends ResourceTemplate implements PriorityLevelConfigurationHelper {
    static kind = 'PriorityLevelConfiguration';
    static apiVersion = 'flowcontrol/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PriorityLevelConfigurationHelper.kind, PriorityLevelConfigurationHelper.apiVersion)
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
    get spec(): any /*PriorityLevelConfigurationSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*PriorityLevelConfigurationSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*PriorityLevelConfigurationSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*PriorityLevelConfigurationStatusHelper*/ {
        return this._status
    }
    set status(x: any /*PriorityLevelConfigurationStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*PriorityLevelConfigurationStatusHelper*/) {
        this.status = x; return this
    }
}

export interface PriorityLevelConfigurationConditionHelper extends PriorityLevelConfigurationCondition {
    $lastTransitionTime(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** PriorityLevelConfigurationCondition defines the condition of priority level. */
export class PriorityLevelConfigurationConditionHelper extends Template implements PriorityLevelConfigurationConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastTransitionTime: any;
    get lastTransitionTime(): any /*Time*/ {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: any /*Time*/) {
        this._lastTransitionTime = x
    }
    setLastTransitionTime(x: any /*Time*/) {
        this.lastTransitionTime = x; return this
    }

    _message: any;
    get message(): any /*string*/ {
        return this._message
    }
    set message(x: any /*string*/) {
        this._message = x
    }
    setMessage(x: any /*string*/) {
        this.message = x; return this
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

    _status: any;
    get status(): any /*string*/ {
        return this._status
    }
    set status(x: any /*string*/) {
        this._status = x
    }
    setStatus(x: any /*string*/) {
        this.status = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface PriorityLevelConfigurationListHelper extends PriorityLevelConfigurationList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects. */
export class PriorityLevelConfigurationListHelper extends ResourceTemplate implements PriorityLevelConfigurationListHelper {
    static kind = 'PriorityLevelConfigurationList';
    static apiVersion = 'flowcontrol/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PriorityLevelConfigurationListHelper.kind, PriorityLevelConfigurationListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<PriorityLevelConfiguration>*/ {
        return this._items
    }
    set items(x: any /*Array<PriorityLevelConfiguration>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<PriorityLevelConfiguration>*/) {
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

export interface PriorityLevelConfigurationReferenceHelper extends PriorityLevelConfigurationReference {
}

/** PriorityLevelConfigurationReference contains information that points to the "request-priority" being used. */
export class PriorityLevelConfigurationReferenceHelper extends Template implements PriorityLevelConfigurationReferenceHelper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface PriorityLevelConfigurationSpecHelper extends PriorityLevelConfigurationSpec {
    $limited(x: any): any;
    $type(x: any): any;
}

/** PriorityLevelConfigurationSpec specifies the configuration of a priority level. */
export class PriorityLevelConfigurationSpecHelper extends Template implements PriorityLevelConfigurationSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _limited: any;
    get limited(): any /*LimitedPriorityLevelConfigurationHelper*/ {
        return this._limited
    }
    set limited(x: any /*LimitedPriorityLevelConfigurationHelper*/) {
        this._limited = x
    }
    setLimited(x: any /*LimitedPriorityLevelConfigurationHelper*/) {
        this.limited = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface PriorityLevelConfigurationStatusHelper extends PriorityLevelConfigurationStatus {
    $conditions(x: any): any;
}

/** PriorityLevelConfigurationStatus represents the current state of a "request-priority". */
export class PriorityLevelConfigurationStatusHelper extends Template implements PriorityLevelConfigurationStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conditions: any;
    get conditions(): any /*Array<PriorityLevelConfigurationCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<PriorityLevelConfigurationCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<PriorityLevelConfigurationCondition>*/) {
        this.conditions = x; return this
    }
}

export interface QueuingConfigurationHelper extends QueuingConfiguration {
    $handSize(x: any): any;
    $queueLengthLimit(x: any): any;
    $queues(x: any): any;
}

/** QueuingConfiguration holds the configuration parameters for queuing */
export class QueuingConfigurationHelper extends Template implements QueuingConfigurationHelper {
    constructor(obj: any) {
        super(obj)
    }

    _handSize: any;
    get handSize(): any /*number*/ {
        return this._handSize
    }
    set handSize(x: any /*number*/) {
        this._handSize = x
    }
    setHandSize(x: any /*number*/) {
        this.handSize = x; return this
    }

    _queueLengthLimit: any;
    get queueLengthLimit(): any /*number*/ {
        return this._queueLengthLimit
    }
    set queueLengthLimit(x: any /*number*/) {
        this._queueLengthLimit = x
    }
    setQueueLengthLimit(x: any /*number*/) {
        this.queueLengthLimit = x; return this
    }

    _queues: any;
    get queues(): any /*number*/ {
        return this._queues
    }
    set queues(x: any /*number*/) {
        this._queues = x
    }
    setQueues(x: any /*number*/) {
        this.queues = x; return this
    }
}

export interface ResourcePolicyRuleHelper extends ResourcePolicyRule {
    $apiGroups(x: any): any;
    $clusterScope(x: any): any;
    $namespaces(x: any): any;
    $resources(x: any): any;
    $verbs(x: any): any;
}

/** ResourcePolicyRule is a predicate that matches some resource requests, testing the request's verb and the target resource. A ResourcePolicyRule matches a resource request if and only if: (a) at least one member of verbs matches the request, (b) at least one member of apiGroups matches the request, (c) at least one member of resources matches the request, and (d) least one member of namespaces matches the request. */
export class ResourcePolicyRuleHelper extends Template implements ResourcePolicyRuleHelper {
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

    _clusterScope: any;
    get clusterScope(): any /*boolean*/ {
        return this._clusterScope
    }
    set clusterScope(x: any /*boolean*/) {
        this._clusterScope = x
    }
    setClusterScope(x: any /*boolean*/) {
        this.clusterScope = x; return this
    }

    _namespaces: any;
    get namespaces(): any /*Array<string>*/ {
        return this._namespaces
    }
    set namespaces(x: any /*Array<string>*/) {
        this._namespaces = this.set(this.namespaces, x)
    }
    setNamespaces(x: any /*Array<string>*/) {
        this.namespaces = x; return this
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

export interface ServiceAccountSubjectHelper extends ServiceAccountSubject {
}

/** ServiceAccountSubject holds detailed information for service-account-kind subject. */
export class ServiceAccountSubjectHelper extends Template implements ServiceAccountSubjectHelper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface SubjectHelper extends Subject {
    $group(x: any): any;
    $serviceAccount(x: any): any;
    $user(x: any): any;
}

/** Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account. */
export class SubjectHelper extends Template implements SubjectHelper {
    constructor(obj: any) {
        super(obj)
    }

    _group: any;
    get group(): any /*GroupSubjectHelper*/ {
        return this._group
    }
    set group(x: any /*GroupSubjectHelper*/) {
        this._group = x
    }
    setGroup(x: any /*GroupSubjectHelper*/) {
        this.group = x; return this
    }

    _serviceAccount: any;
    get serviceAccount(): any /*ServiceAccountSubjectHelper*/ {
        return this._serviceAccount
    }
    set serviceAccount(x: any /*ServiceAccountSubjectHelper*/) {
        this._serviceAccount = x
    }
    setServiceAccount(x: any /*ServiceAccountSubjectHelper*/) {
        this.serviceAccount = x; return this
    }

    _user: any;
    get user(): any /*UserSubjectHelper*/ {
        return this._user
    }
    set user(x: any /*UserSubjectHelper*/) {
        this._user = x
    }
    setUser(x: any /*UserSubjectHelper*/) {
        this.user = x; return this
    }
}

export interface UserSubjectHelper extends UserSubject {
}

/** UserSubject holds detailed information for user-kind subject. */
export class UserSubjectHelper extends Template implements UserSubjectHelper {
    constructor(obj: any) {
        super(obj)
    }
}
