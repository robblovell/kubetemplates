import { ResourceTemplate, Template } from "../resourceTemplate";
import { ContainerResourceMetricSource, ContainerResourceMetricStatus, CrossVersionObjectReference, ExternalMetricSource, ExternalMetricStatus, HPAScalingPolicy, HPAScalingRules, HorizontalPodAutoscaler, HorizontalPodAutoscalerBehavior, HorizontalPodAutoscalerCondition, HorizontalPodAutoscalerList, HorizontalPodAutoscalerSpec, HorizontalPodAutoscalerStatus, MetricIdentifier, MetricSpec, MetricStatus, MetricTarget, MetricValueStatus, ObjectMetricSource, ObjectMetricStatus, PodsMetricSource, PodsMetricStatus, ResourceMetricSource, ResourceMetricStatus } from "./v2beta2";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { Quantity } from "../api/resource";

export interface ContainerResourceMetricSourceHelper extends ContainerResourceMetricSource {
    $container(x: string): ContainerResourceMetricSourceHelper;
    target: MetricTargetHelper;
    $target(x: MetricTargetHelper): ContainerResourceMetricSourceHelper;
}

/** ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export class ContainerResourceMetricSourceHelper extends Template implements ContainerResourceMetricSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _container: string;
    get container(): string {
        return this._container
    }
    set container(x: string) {
        this._container = x
    }
    $Container(x: string) {
        this.container = x; return this
    }

    _target: MetricTargetHelper;
    get target(): MetricTargetHelper {
        return this._target
    }
    set target(x: MetricTargetHelper) {
        this._target = x
    }
    $Target(x: MetricTargetHelper) {
        this.target = x; return this
    }
}

export interface ContainerResourceMetricStatusHelper extends ContainerResourceMetricStatus {
    $container(x: string): ContainerResourceMetricStatusHelper;
    current: MetricValueStatusHelper;
    $current(x: MetricValueStatusHelper): ContainerResourceMetricStatusHelper;
}

/** ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export class ContainerResourceMetricStatusHelper extends Template implements ContainerResourceMetricStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _container: string;
    get container(): string {
        return this._container
    }
    set container(x: string) {
        this._container = x
    }
    $Container(x: string) {
        this.container = x; return this
    }

    _current: MetricValueStatusHelper;
    get current(): MetricValueStatusHelper {
        return this._current
    }
    set current(x: MetricValueStatusHelper) {
        this._current = x
    }
    $Current(x: MetricValueStatusHelper) {
        this.current = x; return this
    }
}

export interface CrossVersionObjectReferenceHelper extends CrossVersionObjectReference {
}

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export class CrossVersionObjectReferenceHelper extends Template implements CrossVersionObjectReferenceHelper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface ExternalMetricSourceHelper extends ExternalMetricSource {
    metric: MetricIdentifierHelper;
    $metric(x: MetricIdentifierHelper): ExternalMetricSourceHelper;
    target: MetricTargetHelper;
    $target(x: MetricTargetHelper): ExternalMetricSourceHelper;
}

/** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
export class ExternalMetricSourceHelper extends Template implements ExternalMetricSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _metric: MetricIdentifierHelper;
    get metric(): MetricIdentifierHelper {
        return this._metric
    }
    set metric(x: MetricIdentifierHelper) {
        this._metric = x
    }
    $Metric(x: MetricIdentifierHelper) {
        this.metric = x; return this
    }

    _target: MetricTargetHelper;
    get target(): MetricTargetHelper {
        return this._target
    }
    set target(x: MetricTargetHelper) {
        this._target = x
    }
    $Target(x: MetricTargetHelper) {
        this.target = x; return this
    }
}

export interface ExternalMetricStatusHelper extends ExternalMetricStatus {
    current: MetricValueStatusHelper;
    $current(x: MetricValueStatusHelper): ExternalMetricStatusHelper;
    metric: MetricIdentifierHelper;
    $metric(x: MetricIdentifierHelper): ExternalMetricStatusHelper;
}

/** ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object. */
export class ExternalMetricStatusHelper extends Template implements ExternalMetricStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _current: MetricValueStatusHelper;
    get current(): MetricValueStatusHelper {
        return this._current
    }
    set current(x: MetricValueStatusHelper) {
        this._current = x
    }
    $Current(x: MetricValueStatusHelper) {
        this.current = x; return this
    }

    _metric: MetricIdentifierHelper;
    get metric(): MetricIdentifierHelper {
        return this._metric
    }
    set metric(x: MetricIdentifierHelper) {
        this._metric = x
    }
    $Metric(x: MetricIdentifierHelper) {
        this.metric = x; return this
    }
}

export interface HPAScalingPolicyHelper extends HPAScalingPolicy {
    $periodSeconds(x: number): HPAScalingPolicyHelper;
    $type(x: string): HPAScalingPolicyHelper;
    $value(x: number): HPAScalingPolicyHelper;
}

/** HPAScalingPolicy is a single policy which must hold true for a specified past interval. */
export class HPAScalingPolicyHelper extends Template implements HPAScalingPolicyHelper {
    constructor(obj: any) {
        super(obj)
    }

    _periodSeconds: number;
    get periodSeconds(): number {
        return this._periodSeconds
    }
    set periodSeconds(x: number) {
        this._periodSeconds = x
    }
    $PeriodSeconds(x: number) {
        this.periodSeconds = x; return this
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

    _value: number;
    get value(): number {
        return this._value
    }
    set value(x: number) {
        this._value = x
    }
    $Value(x: number) {
        this.value = x; return this
    }
}

export interface HPAScalingRulesHelper extends HPAScalingRules {
    $policies(x: Array<HPAScalingPolicy>): HPAScalingRulesHelper;
    $selectPolicy(x: string): HPAScalingRulesHelper;
    $stabilizationWindowSeconds(x: number): HPAScalingRulesHelper;
}

/** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
export class HPAScalingRulesHelper extends Template implements HPAScalingRulesHelper {
    constructor(obj: any) {
        super(obj)
    }

    _policies: Array<HPAScalingPolicy>;
    get policies(): Array<HPAScalingPolicy> {
        return this._policies
    }
    set policies(x: Array<HPAScalingPolicy>) {
        this._policies = this.set(this.policies, x)
    }
    $Policies(x: Array<HPAScalingPolicy>) {
        this.policies = x; return this
    }

    _selectPolicy: string;
    get selectPolicy(): string {
        return this._selectPolicy
    }
    set selectPolicy(x: string) {
        this._selectPolicy = x
    }
    $SelectPolicy(x: string) {
        this.selectPolicy = x; return this
    }

    _stabilizationWindowSeconds: number;
    get stabilizationWindowSeconds(): number {
        return this._stabilizationWindowSeconds
    }
    set stabilizationWindowSeconds(x: number) {
        this._stabilizationWindowSeconds = x
    }
    $StabilizationWindowSeconds(x: number) {
        this.stabilizationWindowSeconds = x; return this
    }
}

export interface HorizontalPodAutoscalerHelper extends HorizontalPodAutoscaler {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): HorizontalPodAutoscalerHelper;
    spec: HorizontalPodAutoscalerSpecHelper;
    $spec(x: HorizontalPodAutoscalerSpecHelper): HorizontalPodAutoscalerHelper;
    status: HorizontalPodAutoscalerStatusHelper;
    $status(x: HorizontalPodAutoscalerStatusHelper): HorizontalPodAutoscalerHelper;
}

/** HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified. */
export class HorizontalPodAutoscalerHelper extends ResourceTemplate implements HorizontalPodAutoscalerHelper {
    static kind = 'HorizontalPodAutoscaler';
    static apiVersion = 'autoscaling/v2beta2';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, HorizontalPodAutoscalerHelper.kind, HorizontalPodAutoscalerHelper.apiVersion)
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

    _spec: HorizontalPodAutoscalerSpecHelper;
    get spec(): HorizontalPodAutoscalerSpecHelper {
        return this._spec
    }
    set spec(x: HorizontalPodAutoscalerSpecHelper) {
        this._spec = x
    }
    $Spec(x: HorizontalPodAutoscalerSpecHelper) {
        this.spec = x; return this
    }

    _status: HorizontalPodAutoscalerStatusHelper;
    get status(): HorizontalPodAutoscalerStatusHelper {
        return this._status
    }
    set status(x: HorizontalPodAutoscalerStatusHelper) {
        this._status = x
    }
    $Status(x: HorizontalPodAutoscalerStatusHelper) {
        this.status = x; return this
    }
}

export interface HorizontalPodAutoscalerBehaviorHelper extends HorizontalPodAutoscalerBehavior {
    scaleDown: HPAScalingRulesHelper;
    $scaleDown(x: HPAScalingRulesHelper): HorizontalPodAutoscalerBehaviorHelper;
    scaleUp: HPAScalingRulesHelper;
    $scaleUp(x: HPAScalingRulesHelper): HorizontalPodAutoscalerBehaviorHelper;
}

/** HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). */
export class HorizontalPodAutoscalerBehaviorHelper extends Template implements HorizontalPodAutoscalerBehaviorHelper {
    constructor(obj: any) {
        super(obj)
    }

    _scaleDown: HPAScalingRulesHelper;
    get scaleDown(): HPAScalingRulesHelper {
        return this._scaleDown
    }
    set scaleDown(x: HPAScalingRulesHelper) {
        this._scaleDown = x
    }
    $ScaleDown(x: HPAScalingRulesHelper) {
        this.scaleDown = x; return this
    }

    _scaleUp: HPAScalingRulesHelper;
    get scaleUp(): HPAScalingRulesHelper {
        return this._scaleUp
    }
    set scaleUp(x: HPAScalingRulesHelper) {
        this._scaleUp = x
    }
    $ScaleUp(x: HPAScalingRulesHelper) {
        this.scaleUp = x; return this
    }
}

export interface HorizontalPodAutoscalerConditionHelper extends HorizontalPodAutoscalerCondition {
    $lastTransitionTime(x: Time): HorizontalPodAutoscalerConditionHelper;
    $message(x: string): HorizontalPodAutoscalerConditionHelper;
    $reason(x: string): HorizontalPodAutoscalerConditionHelper;
    $status(x: string): HorizontalPodAutoscalerConditionHelper;
    $type(x: string): HorizontalPodAutoscalerConditionHelper;
}

/** HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point. */
export class HorizontalPodAutoscalerConditionHelper extends Template implements HorizontalPodAutoscalerConditionHelper {
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

export interface HorizontalPodAutoscalerListHelper extends HorizontalPodAutoscalerList {
    $items(x: Array<HorizontalPodAutoscaler>): HorizontalPodAutoscalerListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): HorizontalPodAutoscalerListHelper;
}

/** HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects. */
export class HorizontalPodAutoscalerListHelper extends ResourceTemplate implements HorizontalPodAutoscalerListHelper {
    static kind = 'HorizontalPodAutoscalerList';
    static apiVersion = 'autoscaling/v2beta2';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, HorizontalPodAutoscalerListHelper.kind, HorizontalPodAutoscalerListHelper.apiVersion)
    }

    _items: Array<HorizontalPodAutoscaler>;
    get items(): Array<HorizontalPodAutoscaler> {
        return this._items
    }
    set items(x: Array<HorizontalPodAutoscaler>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<HorizontalPodAutoscaler>) {
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

export interface HorizontalPodAutoscalerSpecHelper extends HorizontalPodAutoscalerSpec {
    behavior: HorizontalPodAutoscalerBehaviorHelper;
    $behavior(x: HorizontalPodAutoscalerBehaviorHelper): HorizontalPodAutoscalerSpecHelper;
    $maxReplicas(x: number): HorizontalPodAutoscalerSpecHelper;
    $metrics(x: Array<MetricSpec>): HorizontalPodAutoscalerSpecHelper;
    $minReplicas(x: number): HorizontalPodAutoscalerSpecHelper;
    scaleTargetRef: CrossVersionObjectReferenceHelper;
    $scaleTargetRef(x: CrossVersionObjectReferenceHelper): HorizontalPodAutoscalerSpecHelper;
}

/** HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler. */
export class HorizontalPodAutoscalerSpecHelper extends Template implements HorizontalPodAutoscalerSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _behavior: HorizontalPodAutoscalerBehaviorHelper;
    get behavior(): HorizontalPodAutoscalerBehaviorHelper {
        return this._behavior
    }
    set behavior(x: HorizontalPodAutoscalerBehaviorHelper) {
        this._behavior = x
    }
    $Behavior(x: HorizontalPodAutoscalerBehaviorHelper) {
        this.behavior = x; return this
    }

    _maxReplicas: number;
    get maxReplicas(): number {
        return this._maxReplicas
    }
    set maxReplicas(x: number) {
        this._maxReplicas = x
    }
    $MaxReplicas(x: number) {
        this.maxReplicas = x; return this
    }

    _metrics: Array<MetricSpec>;
    get metrics(): Array<MetricSpec> {
        return this._metrics
    }
    set metrics(x: Array<MetricSpec>) {
        this._metrics = this.set(this.metrics, x)
    }
    $Metrics(x: Array<MetricSpec>) {
        this.metrics = x; return this
    }

    _minReplicas: number;
    get minReplicas(): number {
        return this._minReplicas
    }
    set minReplicas(x: number) {
        this._minReplicas = x
    }
    $MinReplicas(x: number) {
        this.minReplicas = x; return this
    }

    _scaleTargetRef: CrossVersionObjectReferenceHelper;
    get scaleTargetRef(): CrossVersionObjectReferenceHelper {
        return this._scaleTargetRef
    }
    set scaleTargetRef(x: CrossVersionObjectReferenceHelper) {
        this._scaleTargetRef = x
    }
    $ScaleTargetRef(x: CrossVersionObjectReferenceHelper) {
        this.scaleTargetRef = x; return this
    }
}

export interface HorizontalPodAutoscalerStatusHelper extends HorizontalPodAutoscalerStatus {
    $conditions(x: Array<HorizontalPodAutoscalerCondition>): HorizontalPodAutoscalerStatusHelper;
    $currentMetrics(x: Array<MetricStatus>): HorizontalPodAutoscalerStatusHelper;
    $currentReplicas(x: number): HorizontalPodAutoscalerStatusHelper;
    $desiredReplicas(x: number): HorizontalPodAutoscalerStatusHelper;
    $lastScaleTime(x: Time): HorizontalPodAutoscalerStatusHelper;
    $observedGeneration(x: number): HorizontalPodAutoscalerStatusHelper;
}

/** HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler. */
export class HorizontalPodAutoscalerStatusHelper extends Template implements HorizontalPodAutoscalerStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conditions: Array<HorizontalPodAutoscalerCondition>;
    get conditions(): Array<HorizontalPodAutoscalerCondition> {
        return this._conditions
    }
    set conditions(x: Array<HorizontalPodAutoscalerCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $Conditions(x: Array<HorizontalPodAutoscalerCondition>) {
        this.conditions = x; return this
    }

    _currentMetrics: Array<MetricStatus>;
    get currentMetrics(): Array<MetricStatus> {
        return this._currentMetrics
    }
    set currentMetrics(x: Array<MetricStatus>) {
        this._currentMetrics = this.set(this.currentMetrics, x)
    }
    $CurrentMetrics(x: Array<MetricStatus>) {
        this.currentMetrics = x; return this
    }

    _currentReplicas: number;
    get currentReplicas(): number {
        return this._currentReplicas
    }
    set currentReplicas(x: number) {
        this._currentReplicas = x
    }
    $CurrentReplicas(x: number) {
        this.currentReplicas = x; return this
    }

    _desiredReplicas: number;
    get desiredReplicas(): number {
        return this._desiredReplicas
    }
    set desiredReplicas(x: number) {
        this._desiredReplicas = x
    }
    $DesiredReplicas(x: number) {
        this.desiredReplicas = x; return this
    }

    _lastScaleTime: Time;
    get lastScaleTime(): Time {
        return this._lastScaleTime
    }
    set lastScaleTime(x: Time) {
        this._lastScaleTime = x
    }
    $LastScaleTime(x: Time) {
        this.lastScaleTime = x; return this
    }

    _observedGeneration: number;
    get observedGeneration(): number {
        return this._observedGeneration
    }
    set observedGeneration(x: number) {
        this._observedGeneration = x
    }
    $ObservedGeneration(x: number) {
        this.observedGeneration = x; return this
    }
}

export interface MetricIdentifierHelper extends MetricIdentifier {
    selector: LabelSelectorHelper;
    $selector(x: LabelSelectorHelper): MetricIdentifierHelper;
}

/** MetricIdentifier defines the name and optionally selector for a metric */
export class MetricIdentifierHelper extends Template implements MetricIdentifierHelper {
    constructor(obj: any) {
        super(obj)
    }

    _selector: LabelSelectorHelper;
    get selector(): LabelSelectorHelper {
        return this._selector
    }
    set selector(x: LabelSelectorHelper) {
        this._selector = x
    }
    $Selector(x: LabelSelectorHelper) {
        this.selector = x; return this
    }
}

export interface MetricSpecHelper extends MetricSpec {
    containerResource: ContainerResourceMetricSourceHelper;
    $containerResource(x: ContainerResourceMetricSourceHelper): MetricSpecHelper;
    external: ExternalMetricSourceHelper;
    $external(x: ExternalMetricSourceHelper): MetricSpecHelper;
    object: ObjectMetricSourceHelper;
    $object(x: ObjectMetricSourceHelper): MetricSpecHelper;
    pods: PodsMetricSourceHelper;
    $pods(x: PodsMetricSourceHelper): MetricSpecHelper;
    resource: ResourceMetricSourceHelper;
    $resource(x: ResourceMetricSourceHelper): MetricSpecHelper;
    $type(x: string): MetricSpecHelper;
}

/** MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once). */
export class MetricSpecHelper extends Template implements MetricSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _containerResource: ContainerResourceMetricSourceHelper;
    get containerResource(): ContainerResourceMetricSourceHelper {
        return this._containerResource
    }
    set containerResource(x: ContainerResourceMetricSourceHelper) {
        this._containerResource = x
    }
    $ContainerResource(x: ContainerResourceMetricSourceHelper) {
        this.containerResource = x; return this
    }

    _external: ExternalMetricSourceHelper;
    get external(): ExternalMetricSourceHelper {
        return this._external
    }
    set external(x: ExternalMetricSourceHelper) {
        this._external = x
    }
    $External(x: ExternalMetricSourceHelper) {
        this.external = x; return this
    }

    _object: ObjectMetricSourceHelper;
    get object(): ObjectMetricSourceHelper {
        return this._object
    }
    set object(x: ObjectMetricSourceHelper) {
        this._object = x
    }
    $Object(x: ObjectMetricSourceHelper) {
        this.object = x; return this
    }

    _pods: PodsMetricSourceHelper;
    get pods(): PodsMetricSourceHelper {
        return this._pods
    }
    set pods(x: PodsMetricSourceHelper) {
        this._pods = x
    }
    $Pods(x: PodsMetricSourceHelper) {
        this.pods = x; return this
    }

    _resource: ResourceMetricSourceHelper;
    get resource(): ResourceMetricSourceHelper {
        return this._resource
    }
    set resource(x: ResourceMetricSourceHelper) {
        this._resource = x
    }
    $Resource(x: ResourceMetricSourceHelper) {
        this.resource = x; return this
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

export interface MetricStatusHelper extends MetricStatus {
    containerResource: ContainerResourceMetricStatusHelper;
    $containerResource(x: ContainerResourceMetricStatusHelper): MetricStatusHelper;
    external: ExternalMetricStatusHelper;
    $external(x: ExternalMetricStatusHelper): MetricStatusHelper;
    object: ObjectMetricStatusHelper;
    $object(x: ObjectMetricStatusHelper): MetricStatusHelper;
    pods: PodsMetricStatusHelper;
    $pods(x: PodsMetricStatusHelper): MetricStatusHelper;
    resource: ResourceMetricStatusHelper;
    $resource(x: ResourceMetricStatusHelper): MetricStatusHelper;
    $type(x: string): MetricStatusHelper;
}

/** MetricStatus describes the last-read state of a single metric. */
export class MetricStatusHelper extends Template implements MetricStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _containerResource: ContainerResourceMetricStatusHelper;
    get containerResource(): ContainerResourceMetricStatusHelper {
        return this._containerResource
    }
    set containerResource(x: ContainerResourceMetricStatusHelper) {
        this._containerResource = x
    }
    $ContainerResource(x: ContainerResourceMetricStatusHelper) {
        this.containerResource = x; return this
    }

    _external: ExternalMetricStatusHelper;
    get external(): ExternalMetricStatusHelper {
        return this._external
    }
    set external(x: ExternalMetricStatusHelper) {
        this._external = x
    }
    $External(x: ExternalMetricStatusHelper) {
        this.external = x; return this
    }

    _object: ObjectMetricStatusHelper;
    get object(): ObjectMetricStatusHelper {
        return this._object
    }
    set object(x: ObjectMetricStatusHelper) {
        this._object = x
    }
    $Object(x: ObjectMetricStatusHelper) {
        this.object = x; return this
    }

    _pods: PodsMetricStatusHelper;
    get pods(): PodsMetricStatusHelper {
        return this._pods
    }
    set pods(x: PodsMetricStatusHelper) {
        this._pods = x
    }
    $Pods(x: PodsMetricStatusHelper) {
        this.pods = x; return this
    }

    _resource: ResourceMetricStatusHelper;
    get resource(): ResourceMetricStatusHelper {
        return this._resource
    }
    set resource(x: ResourceMetricStatusHelper) {
        this._resource = x
    }
    $Resource(x: ResourceMetricStatusHelper) {
        this.resource = x; return this
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

export interface MetricTargetHelper extends MetricTarget {
    $averageUtilization(x: number): MetricTargetHelper;
    $averageValue(x: Quantity): MetricTargetHelper;
    $type(x: string): MetricTargetHelper;
    $value(x: Quantity): MetricTargetHelper;
}

/** MetricTarget defines the target value, average value, or average utilization of a specific metric */
export class MetricTargetHelper extends Template implements MetricTargetHelper {
    constructor(obj: any) {
        super(obj)
    }

    _averageUtilization: number;
    get averageUtilization(): number {
        return this._averageUtilization
    }
    set averageUtilization(x: number) {
        this._averageUtilization = x
    }
    $AverageUtilization(x: number) {
        this.averageUtilization = x; return this
    }

    _averageValue: Quantity;
    get averageValue(): Quantity {
        return this._averageValue
    }
    set averageValue(x: Quantity) {
        this._averageValue = x
    }
    $AverageValue(x: Quantity) {
        this.averageValue = x; return this
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

    _value: Quantity;
    get value(): Quantity {
        return this._value
    }
    set value(x: Quantity) {
        this._value = x
    }
    $Value(x: Quantity) {
        this.value = x; return this
    }
}

export interface MetricValueStatusHelper extends MetricValueStatus {
    $averageUtilization(x: number): MetricValueStatusHelper;
    $averageValue(x: Quantity): MetricValueStatusHelper;
    $value(x: Quantity): MetricValueStatusHelper;
}

/** MetricValueStatus holds the current value for a metric */
export class MetricValueStatusHelper extends Template implements MetricValueStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _averageUtilization: number;
    get averageUtilization(): number {
        return this._averageUtilization
    }
    set averageUtilization(x: number) {
        this._averageUtilization = x
    }
    $AverageUtilization(x: number) {
        this.averageUtilization = x; return this
    }

    _averageValue: Quantity;
    get averageValue(): Quantity {
        return this._averageValue
    }
    set averageValue(x: Quantity) {
        this._averageValue = x
    }
    $AverageValue(x: Quantity) {
        this.averageValue = x; return this
    }

    _value: Quantity;
    get value(): Quantity {
        return this._value
    }
    set value(x: Quantity) {
        this._value = x
    }
    $Value(x: Quantity) {
        this.value = x; return this
    }
}

export interface ObjectMetricSourceHelper extends ObjectMetricSource {
    describedObject: CrossVersionObjectReferenceHelper;
    $describedObject(x: CrossVersionObjectReferenceHelper): ObjectMetricSourceHelper;
    metric: MetricIdentifierHelper;
    $metric(x: MetricIdentifierHelper): ObjectMetricSourceHelper;
    target: MetricTargetHelper;
    $target(x: MetricTargetHelper): ObjectMetricSourceHelper;
}

/** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export class ObjectMetricSourceHelper extends Template implements ObjectMetricSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _describedObject: CrossVersionObjectReferenceHelper;
    get describedObject(): CrossVersionObjectReferenceHelper {
        return this._describedObject
    }
    set describedObject(x: CrossVersionObjectReferenceHelper) {
        this._describedObject = x
    }
    $DescribedObject(x: CrossVersionObjectReferenceHelper) {
        this.describedObject = x; return this
    }

    _metric: MetricIdentifierHelper;
    get metric(): MetricIdentifierHelper {
        return this._metric
    }
    set metric(x: MetricIdentifierHelper) {
        this._metric = x
    }
    $Metric(x: MetricIdentifierHelper) {
        this.metric = x; return this
    }

    _target: MetricTargetHelper;
    get target(): MetricTargetHelper {
        return this._target
    }
    set target(x: MetricTargetHelper) {
        this._target = x
    }
    $Target(x: MetricTargetHelper) {
        this.target = x; return this
    }
}

export interface ObjectMetricStatusHelper extends ObjectMetricStatus {
    current: MetricValueStatusHelper;
    $current(x: MetricValueStatusHelper): ObjectMetricStatusHelper;
    describedObject: CrossVersionObjectReferenceHelper;
    $describedObject(x: CrossVersionObjectReferenceHelper): ObjectMetricStatusHelper;
    metric: MetricIdentifierHelper;
    $metric(x: MetricIdentifierHelper): ObjectMetricStatusHelper;
}

/** ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export class ObjectMetricStatusHelper extends Template implements ObjectMetricStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _current: MetricValueStatusHelper;
    get current(): MetricValueStatusHelper {
        return this._current
    }
    set current(x: MetricValueStatusHelper) {
        this._current = x
    }
    $Current(x: MetricValueStatusHelper) {
        this.current = x; return this
    }

    _describedObject: CrossVersionObjectReferenceHelper;
    get describedObject(): CrossVersionObjectReferenceHelper {
        return this._describedObject
    }
    set describedObject(x: CrossVersionObjectReferenceHelper) {
        this._describedObject = x
    }
    $DescribedObject(x: CrossVersionObjectReferenceHelper) {
        this.describedObject = x; return this
    }

    _metric: MetricIdentifierHelper;
    get metric(): MetricIdentifierHelper {
        return this._metric
    }
    set metric(x: MetricIdentifierHelper) {
        this._metric = x
    }
    $Metric(x: MetricIdentifierHelper) {
        this.metric = x; return this
    }
}

export interface PodsMetricSourceHelper extends PodsMetricSource {
    metric: MetricIdentifierHelper;
    $metric(x: MetricIdentifierHelper): PodsMetricSourceHelper;
    target: MetricTargetHelper;
    $target(x: MetricTargetHelper): PodsMetricSourceHelper;
}

/** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
export class PodsMetricSourceHelper extends Template implements PodsMetricSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _metric: MetricIdentifierHelper;
    get metric(): MetricIdentifierHelper {
        return this._metric
    }
    set metric(x: MetricIdentifierHelper) {
        this._metric = x
    }
    $Metric(x: MetricIdentifierHelper) {
        this.metric = x; return this
    }

    _target: MetricTargetHelper;
    get target(): MetricTargetHelper {
        return this._target
    }
    set target(x: MetricTargetHelper) {
        this._target = x
    }
    $Target(x: MetricTargetHelper) {
        this.target = x; return this
    }
}

export interface PodsMetricStatusHelper extends PodsMetricStatus {
    current: MetricValueStatusHelper;
    $current(x: MetricValueStatusHelper): PodsMetricStatusHelper;
    metric: MetricIdentifierHelper;
    $metric(x: MetricIdentifierHelper): PodsMetricStatusHelper;
}

/** PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second). */
export class PodsMetricStatusHelper extends Template implements PodsMetricStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _current: MetricValueStatusHelper;
    get current(): MetricValueStatusHelper {
        return this._current
    }
    set current(x: MetricValueStatusHelper) {
        this._current = x
    }
    $Current(x: MetricValueStatusHelper) {
        this.current = x; return this
    }

    _metric: MetricIdentifierHelper;
    get metric(): MetricIdentifierHelper {
        return this._metric
    }
    set metric(x: MetricIdentifierHelper) {
        this._metric = x
    }
    $Metric(x: MetricIdentifierHelper) {
        this.metric = x; return this
    }
}

export interface ResourceMetricSourceHelper extends ResourceMetricSource {
    target: MetricTargetHelper;
    $target(x: MetricTargetHelper): ResourceMetricSourceHelper;
}

/** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export class ResourceMetricSourceHelper extends Template implements ResourceMetricSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _target: MetricTargetHelper;
    get target(): MetricTargetHelper {
        return this._target
    }
    set target(x: MetricTargetHelper) {
        this._target = x
    }
    $Target(x: MetricTargetHelper) {
        this.target = x; return this
    }
}

export interface ResourceMetricStatusHelper extends ResourceMetricStatus {
    current: MetricValueStatusHelper;
    $current(x: MetricValueStatusHelper): ResourceMetricStatusHelper;
}

/** ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export class ResourceMetricStatusHelper extends Template implements ResourceMetricStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _current: MetricValueStatusHelper;
    get current(): MetricValueStatusHelper {
        return this._current
    }
    set current(x: MetricValueStatusHelper) {
        this._current = x
    }
    $Current(x: MetricValueStatusHelper) {
        this.current = x; return this
    }
}
