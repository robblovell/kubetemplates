import { ResourceTemplate, Template } from "../resourceTemplate";
import { FlowDistinguisherMethod, FlowSchema, FlowSchemaCondition, FlowSchemaList, FlowSchemaSpec, FlowSchemaStatus, GroupSubject, LimitResponse, LimitedPriorityLevelConfiguration, NonResourcePolicyRule, PolicyRulesWithSubjects, PriorityLevelConfiguration, PriorityLevelConfigurationCondition, PriorityLevelConfigurationList, PriorityLevelConfigurationReference, PriorityLevelConfigurationSpec, PriorityLevelConfigurationStatus, QueuingConfiguration, ResourcePolicyRule, ServiceAccountSubject, Subject, UserSubject } from "./v1beta1";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";

export interface FlowDistinguisherMethodHelper extends FlowDistinguisherMethod {
    $type(x: string): FlowDistinguisherMethodHelper;
}

/** FlowDistinguisherMethod specifies the method of a flow distinguisher. */
export class FlowDistinguisherMethodHelper extends Template implements FlowDistinguisherMethodHelper {
    constructor(obj: any) {
        super(obj)
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $Type(x: string) {
        this.type = x; return this
    }
}

export interface FlowSchemaHelper extends FlowSchema {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): FlowSchemaHelper;
    spec: FlowSchemaSpecHelper;
    $spec(x: FlowSchemaSpecHelper): FlowSchemaHelper;
    status: FlowSchemaStatusHelper;
    $status(x: FlowSchemaStatusHelper): FlowSchemaHelper;
}

/** FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a "flow distinguisher". */
export class FlowSchemaHelper extends ResourceTemplate implements FlowSchemaHelper {
    static kind = 'FlowSchema';
    static apiVersion = 'flowcontrol/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, FlowSchemaHelper.kind, FlowSchemaHelper.apiVersion)
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: FlowSchemaSpecHelper;
    get spec(): FlowSchemaSpecHelper {
        return this._spec
    }
    set spec(x: FlowSchemaSpecHelper) {
        this._spec = x
    }
    $Spec(x: FlowSchemaSpecHelper) {
        this.spec = x; return this
    }

    _status: FlowSchemaStatusHelper;
    get status(): FlowSchemaStatusHelper {
        return this._status
    }
    set status(x: FlowSchemaStatusHelper) {
        this._status = x
    }
    $Status(x: FlowSchemaStatusHelper) {
        this.status = x; return this
    }
}

export interface FlowSchemaConditionHelper extends FlowSchemaCondition {
    $lastTransitionTime(x: Time): FlowSchemaConditionHelper;
    $message(x: string): FlowSchemaConditionHelper;
    $reason(x: string): FlowSchemaConditionHelper;
    $status(x: string): FlowSchemaConditionHelper;
    $type(x: string): FlowSchemaConditionHelper;
}

/** FlowSchemaCondition describes conditions for a FlowSchema. */
export class FlowSchemaConditionHelper extends Template implements FlowSchemaConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastTransitionTime: Time;
    get lastTransitionTime(): Time {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: Time) {
        this._lastTransitionTime = x
    }
    $LastTransitionTime(x: Time) {
        this.lastTransitionTime = x; return this
    }

    _message: string;
    get message(): string {
        return this._message
    }
    set message(x: string) {
        this._message = x
    }
    $Message(x: string) {
        this.message = x; return this
    }

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $Reason(x: string) {
        this.reason = x; return this
    }

    _status: string;
    get status(): string {
        return this._status
    }
    set status(x: string) {
        this._status = x
    }
    $Status(x: string) {
        this.status = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $Type(x: string) {
        this.type = x; return this
    }
}

export interface FlowSchemaListHelper extends FlowSchemaList {
    $items(x: Array<FlowSchema>): FlowSchemaListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): FlowSchemaListHelper;
}

/** FlowSchemaList is a list of FlowSchema objects. */
export class FlowSchemaListHelper extends ResourceTemplate implements FlowSchemaListHelper {
    static kind = 'FlowSchemaList';
    static apiVersion = 'flowcontrol/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, FlowSchemaListHelper.kind, FlowSchemaListHelper.apiVersion)
    }

    _items: Array<FlowSchema>;
    get items(): Array<FlowSchema> {
        return this._items
    }
    set items(x: Array<FlowSchema>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<FlowSchema>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ListMetaHelper) {
        this.metadata = x; return this
    }
}

export interface FlowSchemaSpecHelper extends FlowSchemaSpec {
    distinguisherMethod: FlowDistinguisherMethodHelper;
    $distinguisherMethod(x: FlowDistinguisherMethodHelper): FlowSchemaSpecHelper;
    $matchingPrecedence(x: number): FlowSchemaSpecHelper;
    priorityLevelConfiguration: PriorityLevelConfigurationReferenceHelper;
    $priorityLevelConfiguration(x: PriorityLevelConfigurationReferenceHelper): FlowSchemaSpecHelper;
    $rules(x: Array<PolicyRulesWithSubjects>): FlowSchemaSpecHelper;
}

/** FlowSchemaSpec describes how the FlowSchema's specification looks like. */
export class FlowSchemaSpecHelper extends Template implements FlowSchemaSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _distinguisherMethod: FlowDistinguisherMethodHelper;
    get distinguisherMethod(): FlowDistinguisherMethodHelper {
        return this._distinguisherMethod
    }
    set distinguisherMethod(x: FlowDistinguisherMethodHelper) {
        this._distinguisherMethod = x
    }
    $DistinguisherMethod(x: FlowDistinguisherMethodHelper) {
        this.distinguisherMethod = x; return this
    }

    _matchingPrecedence: number;
    get matchingPrecedence(): number {
        return this._matchingPrecedence
    }
    set matchingPrecedence(x: number) {
        this._matchingPrecedence = x
    }
    $MatchingPrecedence(x: number) {
        this.matchingPrecedence = x; return this
    }

    _priorityLevelConfiguration: PriorityLevelConfigurationReferenceHelper;
    get priorityLevelConfiguration(): PriorityLevelConfigurationReferenceHelper {
        return this._priorityLevelConfiguration
    }
    set priorityLevelConfiguration(x: PriorityLevelConfigurationReferenceHelper) {
        this._priorityLevelConfiguration = x
    }
    $PriorityLevelConfiguration(x: PriorityLevelConfigurationReferenceHelper) {
        this.priorityLevelConfiguration = x; return this
    }

    _rules: Array<PolicyRulesWithSubjects>;
    get rules(): Array<PolicyRulesWithSubjects> {
        return this._rules
    }
    set rules(x: Array<PolicyRulesWithSubjects>) {
        this._rules = this.set(this.rules, x)
    }
    $Rules(x: Array<PolicyRulesWithSubjects>) {
        this.rules = x; return this
    }
}

export interface FlowSchemaStatusHelper extends FlowSchemaStatus {
    $conditions(x: Array<FlowSchemaCondition>): FlowSchemaStatusHelper;
}

/** FlowSchemaStatus represents the current state of a FlowSchema. */
export class FlowSchemaStatusHelper extends Template implements FlowSchemaStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conditions: Array<FlowSchemaCondition>;
    get conditions(): Array<FlowSchemaCondition> {
        return this._conditions
    }
    set conditions(x: Array<FlowSchemaCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $Conditions(x: Array<FlowSchemaCondition>) {
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
    queuing: QueuingConfigurationHelper;
    $queuing(x: QueuingConfigurationHelper): LimitResponseHelper;
    $type(x: string): LimitResponseHelper;
}

/** LimitResponse defines how to handle requests that can not be executed right now. */
export class LimitResponseHelper extends Template implements LimitResponseHelper {
    constructor(obj: any) {
        super(obj)
    }

    _queuing: QueuingConfigurationHelper;
    get queuing(): QueuingConfigurationHelper {
        return this._queuing
    }
    set queuing(x: QueuingConfigurationHelper) {
        this._queuing = x
    }
    $Queuing(x: QueuingConfigurationHelper) {
        this.queuing = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $Type(x: string) {
        this.type = x; return this
    }
}

export interface LimitedPriorityLevelConfigurationHelper extends LimitedPriorityLevelConfiguration {
    $assuredConcurrencyShares(x: number): LimitedPriorityLevelConfigurationHelper;
    limitResponse: LimitResponseHelper;
    $limitResponse(x: LimitResponseHelper): LimitedPriorityLevelConfigurationHelper;
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

    _assuredConcurrencyShares: number;
    get assuredConcurrencyShares(): number {
        return this._assuredConcurrencyShares
    }
    set assuredConcurrencyShares(x: number) {
        this._assuredConcurrencyShares = x
    }
    $AssuredConcurrencyShares(x: number) {
        this.assuredConcurrencyShares = x; return this
    }

    _limitResponse: LimitResponseHelper;
    get limitResponse(): LimitResponseHelper {
        return this._limitResponse
    }
    set limitResponse(x: LimitResponseHelper) {
        this._limitResponse = x
    }
    $LimitResponse(x: LimitResponseHelper) {
        this.limitResponse = x; return this
    }
}

export interface NonResourcePolicyRuleHelper extends NonResourcePolicyRule {
    $nonResourceURLs(x: Array<string>): NonResourcePolicyRuleHelper;
    $verbs(x: Array<string>): NonResourcePolicyRuleHelper;
}

/** NonResourcePolicyRule is a predicate that matches non-resource requests according to their verb and the target non-resource URL. A NonResourcePolicyRule matches a request if and only if both (a) at least one member of verbs matches the request and (b) at least one member of nonResourceURLs matches the request. */
export class NonResourcePolicyRuleHelper extends Template implements NonResourcePolicyRuleHelper {
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
    $NonResourceURLs(x: Array<string>) {
        this.nonResourceURLs = x; return this
    }

    _verbs: Array<string>;
    get verbs(): Array<string> {
        return this._verbs
    }
    set verbs(x: Array<string>) {
        this._verbs = this.set(this.verbs, x)
    }
    $Verbs(x: Array<string>) {
        this.verbs = x; return this
    }
}

export interface PolicyRulesWithSubjectsHelper extends PolicyRulesWithSubjects {
    $nonResourceRules(x: Array<NonResourcePolicyRule>): PolicyRulesWithSubjectsHelper;
    $resourceRules(x: Array<ResourcePolicyRule>): PolicyRulesWithSubjectsHelper;
    $subjects(x: Array<Subject>): PolicyRulesWithSubjectsHelper;
}

/** PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request. */
export class PolicyRulesWithSubjectsHelper extends Template implements PolicyRulesWithSubjectsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _nonResourceRules: Array<NonResourcePolicyRule>;
    get nonResourceRules(): Array<NonResourcePolicyRule> {
        return this._nonResourceRules
    }
    set nonResourceRules(x: Array<NonResourcePolicyRule>) {
        this._nonResourceRules = this.set(this.nonResourceRules, x)
    }
    $NonResourceRules(x: Array<NonResourcePolicyRule>) {
        this.nonResourceRules = x; return this
    }

    _resourceRules: Array<ResourcePolicyRule>;
    get resourceRules(): Array<ResourcePolicyRule> {
        return this._resourceRules
    }
    set resourceRules(x: Array<ResourcePolicyRule>) {
        this._resourceRules = this.set(this.resourceRules, x)
    }
    $ResourceRules(x: Array<ResourcePolicyRule>) {
        this.resourceRules = x; return this
    }

    _subjects: Array<Subject>;
    get subjects(): Array<Subject> {
        return this._subjects
    }
    set subjects(x: Array<Subject>) {
        this._subjects = this.set(this.subjects, x)
    }
    $Subjects(x: Array<Subject>) {
        this.subjects = x; return this
    }
}

export interface PriorityLevelConfigurationHelper extends PriorityLevelConfiguration {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): PriorityLevelConfigurationHelper;
    spec: PriorityLevelConfigurationSpecHelper;
    $spec(x: PriorityLevelConfigurationSpecHelper): PriorityLevelConfigurationHelper;
    status: PriorityLevelConfigurationStatusHelper;
    $status(x: PriorityLevelConfigurationStatusHelper): PriorityLevelConfigurationHelper;
}

/** PriorityLevelConfiguration represents the configuration of a priority level. */
export class PriorityLevelConfigurationHelper extends ResourceTemplate implements PriorityLevelConfigurationHelper {
    static kind = 'PriorityLevelConfiguration';
    static apiVersion = 'flowcontrol/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PriorityLevelConfigurationHelper.kind, PriorityLevelConfigurationHelper.apiVersion)
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: PriorityLevelConfigurationSpecHelper;
    get spec(): PriorityLevelConfigurationSpecHelper {
        return this._spec
    }
    set spec(x: PriorityLevelConfigurationSpecHelper) {
        this._spec = x
    }
    $Spec(x: PriorityLevelConfigurationSpecHelper) {
        this.spec = x; return this
    }

    _status: PriorityLevelConfigurationStatusHelper;
    get status(): PriorityLevelConfigurationStatusHelper {
        return this._status
    }
    set status(x: PriorityLevelConfigurationStatusHelper) {
        this._status = x
    }
    $Status(x: PriorityLevelConfigurationStatusHelper) {
        this.status = x; return this
    }
}

export interface PriorityLevelConfigurationConditionHelper extends PriorityLevelConfigurationCondition {
    $lastTransitionTime(x: Time): PriorityLevelConfigurationConditionHelper;
    $message(x: string): PriorityLevelConfigurationConditionHelper;
    $reason(x: string): PriorityLevelConfigurationConditionHelper;
    $status(x: string): PriorityLevelConfigurationConditionHelper;
    $type(x: string): PriorityLevelConfigurationConditionHelper;
}

/** PriorityLevelConfigurationCondition defines the condition of priority level. */
export class PriorityLevelConfigurationConditionHelper extends Template implements PriorityLevelConfigurationConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastTransitionTime: Time;
    get lastTransitionTime(): Time {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: Time) {
        this._lastTransitionTime = x
    }
    $LastTransitionTime(x: Time) {
        this.lastTransitionTime = x; return this
    }

    _message: string;
    get message(): string {
        return this._message
    }
    set message(x: string) {
        this._message = x
    }
    $Message(x: string) {
        this.message = x; return this
    }

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $Reason(x: string) {
        this.reason = x; return this
    }

    _status: string;
    get status(): string {
        return this._status
    }
    set status(x: string) {
        this._status = x
    }
    $Status(x: string) {
        this.status = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $Type(x: string) {
        this.type = x; return this
    }
}

export interface PriorityLevelConfigurationListHelper extends PriorityLevelConfigurationList {
    $items(x: Array<PriorityLevelConfiguration>): PriorityLevelConfigurationListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): PriorityLevelConfigurationListHelper;
}

/** PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects. */
export class PriorityLevelConfigurationListHelper extends ResourceTemplate implements PriorityLevelConfigurationListHelper {
    static kind = 'PriorityLevelConfigurationList';
    static apiVersion = 'flowcontrol/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PriorityLevelConfigurationListHelper.kind, PriorityLevelConfigurationListHelper.apiVersion)
    }

    _items: Array<PriorityLevelConfiguration>;
    get items(): Array<PriorityLevelConfiguration> {
        return this._items
    }
    set items(x: Array<PriorityLevelConfiguration>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<PriorityLevelConfiguration>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ListMetaHelper) {
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
    limited: LimitedPriorityLevelConfigurationHelper;
    $limited(x: LimitedPriorityLevelConfigurationHelper): PriorityLevelConfigurationSpecHelper;
    $type(x: string): PriorityLevelConfigurationSpecHelper;
}

/** PriorityLevelConfigurationSpec specifies the configuration of a priority level. */
export class PriorityLevelConfigurationSpecHelper extends Template implements PriorityLevelConfigurationSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _limited: LimitedPriorityLevelConfigurationHelper;
    get limited(): LimitedPriorityLevelConfigurationHelper {
        return this._limited
    }
    set limited(x: LimitedPriorityLevelConfigurationHelper) {
        this._limited = x
    }
    $Limited(x: LimitedPriorityLevelConfigurationHelper) {
        this.limited = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $Type(x: string) {
        this.type = x; return this
    }
}

export interface PriorityLevelConfigurationStatusHelper extends PriorityLevelConfigurationStatus {
    $conditions(x: Array<PriorityLevelConfigurationCondition>): PriorityLevelConfigurationStatusHelper;
}

/** PriorityLevelConfigurationStatus represents the current state of a "request-priority". */
export class PriorityLevelConfigurationStatusHelper extends Template implements PriorityLevelConfigurationStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conditions: Array<PriorityLevelConfigurationCondition>;
    get conditions(): Array<PriorityLevelConfigurationCondition> {
        return this._conditions
    }
    set conditions(x: Array<PriorityLevelConfigurationCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $Conditions(x: Array<PriorityLevelConfigurationCondition>) {
        this.conditions = x; return this
    }
}

export interface QueuingConfigurationHelper extends QueuingConfiguration {
    $handSize(x: number): QueuingConfigurationHelper;
    $queueLengthLimit(x: number): QueuingConfigurationHelper;
    $queues(x: number): QueuingConfigurationHelper;
}

/** QueuingConfiguration holds the configuration parameters for queuing */
export class QueuingConfigurationHelper extends Template implements QueuingConfigurationHelper {
    constructor(obj: any) {
        super(obj)
    }

    _handSize: number;
    get handSize(): number {
        return this._handSize
    }
    set handSize(x: number) {
        this._handSize = x
    }
    $HandSize(x: number) {
        this.handSize = x; return this
    }

    _queueLengthLimit: number;
    get queueLengthLimit(): number {
        return this._queueLengthLimit
    }
    set queueLengthLimit(x: number) {
        this._queueLengthLimit = x
    }
    $QueueLengthLimit(x: number) {
        this.queueLengthLimit = x; return this
    }

    _queues: number;
    get queues(): number {
        return this._queues
    }
    set queues(x: number) {
        this._queues = x
    }
    $Queues(x: number) {
        this.queues = x; return this
    }
}

export interface ResourcePolicyRuleHelper extends ResourcePolicyRule {
    $apiGroups(x: Array<string>): ResourcePolicyRuleHelper;
    $clusterScope(x: boolean): ResourcePolicyRuleHelper;
    $namespaces(x: Array<string>): ResourcePolicyRuleHelper;
    $resources(x: Array<string>): ResourcePolicyRuleHelper;
    $verbs(x: Array<string>): ResourcePolicyRuleHelper;
}

/** ResourcePolicyRule is a predicate that matches some resource requests, testing the request's verb and the target resource. A ResourcePolicyRule matches a resource request if and only if: (a) at least one member of verbs matches the request, (b) at least one member of apiGroups matches the request, (c) at least one member of resources matches the request, and (d) least one member of namespaces matches the request. */
export class ResourcePolicyRuleHelper extends Template implements ResourcePolicyRuleHelper {
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
    $ApiGroups(x: Array<string>) {
        this.apiGroups = x; return this
    }

    _clusterScope: boolean;
    get clusterScope(): boolean {
        return this._clusterScope
    }
    set clusterScope(x: boolean) {
        this._clusterScope = x
    }
    $ClusterScope(x: boolean) {
        this.clusterScope = x; return this
    }

    _namespaces: Array<string>;
    get namespaces(): Array<string> {
        return this._namespaces
    }
    set namespaces(x: Array<string>) {
        this._namespaces = this.set(this.namespaces, x)
    }
    $Namespaces(x: Array<string>) {
        this.namespaces = x; return this
    }

    _resources: Array<string>;
    get resources(): Array<string> {
        return this._resources
    }
    set resources(x: Array<string>) {
        this._resources = this.set(this.resources, x)
    }
    $Resources(x: Array<string>) {
        this.resources = x; return this
    }

    _verbs: Array<string>;
    get verbs(): Array<string> {
        return this._verbs
    }
    set verbs(x: Array<string>) {
        this._verbs = this.set(this.verbs, x)
    }
    $Verbs(x: Array<string>) {
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
    group: GroupSubjectHelper;
    $group(x: GroupSubjectHelper): SubjectHelper;
    serviceAccount: ServiceAccountSubjectHelper;
    $serviceAccount(x: ServiceAccountSubjectHelper): SubjectHelper;
    user: UserSubjectHelper;
    $user(x: UserSubjectHelper): SubjectHelper;
}

/** Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account. */
export class SubjectHelper extends Template implements SubjectHelper {
    constructor(obj: any) {
        super(obj)
    }

    _group: GroupSubjectHelper;
    get group(): GroupSubjectHelper {
        return this._group
    }
    set group(x: GroupSubjectHelper) {
        this._group = x
    }
    $Group(x: GroupSubjectHelper) {
        this.group = x; return this
    }

    _serviceAccount: ServiceAccountSubjectHelper;
    get serviceAccount(): ServiceAccountSubjectHelper {
        return this._serviceAccount
    }
    set serviceAccount(x: ServiceAccountSubjectHelper) {
        this._serviceAccount = x
    }
    $ServiceAccount(x: ServiceAccountSubjectHelper) {
        this.serviceAccount = x; return this
    }

    _user: UserSubjectHelper;
    get user(): UserSubjectHelper {
        return this._user
    }
    set user(x: UserSubjectHelper) {
        this._user = x
    }
    $User(x: UserSubjectHelper) {
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
