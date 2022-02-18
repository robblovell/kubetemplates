import { ResourceTemplate, Template } from "../resourceTemplate";
import { ContainerResourceMetricSource, ContainerResourceMetricStatus, CrossVersionObjectReference, ExternalMetricSource, ExternalMetricStatus, HPAScalingPolicy, HPAScalingRules, HorizontalPodAutoscaler, HorizontalPodAutoscalerBehavior, HorizontalPodAutoscalerCondition, HorizontalPodAutoscalerList, HorizontalPodAutoscalerSpec, HorizontalPodAutoscalerStatus, MetricIdentifier, MetricSpec, MetricStatus, MetricTarget, MetricValueStatus, ObjectMetricSource, ObjectMetricStatus, PodsMetricSource, PodsMetricStatus, ResourceMetricSource, ResourceMetricStatus } from "./v2beta2";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { LabelSelectorHelper, ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";
import { Quantity } from "../api/resource";

export interface ContainerResourceMetricSourceHelper extends ContainerResourceMetricSource {
    $container(x: string): ContainerResourceMetricSourceHelper;
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
    $container(x: string) {
        this.container = x; return this
    }

    _target: MetricTargetHelper;
    get target(): MetricTargetHelper {
        return this._target
    }
    set target(x: MetricTargetHelper) {
        this._target = x
    }
    $target(x: MetricTargetHelper) {
        this.target = x; return this
    }
}

export interface ContainerResourceMetricStatusHelper extends ContainerResourceMetricStatus {
    $container(x: string): ContainerResourceMetricStatusHelper;
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
    $container(x: string) {
        this.container = x; return this
    }

    _current: MetricValueStatusHelper;
    get current(): MetricValueStatusHelper {
        return this._current
    }
    set current(x: MetricValueStatusHelper) {
        this._current = x
    }
    $current(x: MetricValueStatusHelper) {
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
    $metric(x: MetricIdentifierHelper): ExternalMetricSourceHelper;
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
    $metric(x: MetricIdentifierHelper) {
        this.metric = x; return this
    }

    _target: MetricTargetHelper;
    get target(): MetricTargetHelper {
        return this._target
    }
    set target(x: MetricTargetHelper) {
        this._target = x
    }
    $target(x: MetricTargetHelper) {
        this.target = x; return this
    }
}

export interface ExternalMetricStatusHelper extends ExternalMetricStatus {
    $current(x: MetricValueStatusHelper): ExternalMetricStatusHelper;
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
    $current(x: MetricValueStatusHelper) {
        this.current = x; return this
    }

    _metric: MetricIdentifierHelper;
    get metric(): MetricIdentifierHelper {
        return this._metric
    }
    set metric(x: MetricIdentifierHelper) {
        this._metric = x
    }
    $metric(x: MetricIdentifierHelper) {
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
    $periodSeconds(x: number) {
        this.periodSeconds = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }

    _value: number;
    get value(): number {
        return this._value
    }
    set value(x: number) {
        this._value = x
    }
    $value(x: number) {
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
    $policies(x: Array<HPAScalingPolicy>) {
        this.policies = x; return this
    }

    _selectPolicy: string;
    get selectPolicy(): string {
        return this._selectPolicy
    }
    set selectPolicy(x: string) {
        this._selectPolicy = x
    }
    $selectPolicy(x: string) {
        this.selectPolicy = x; return this
    }

    _stabilizationWindowSeconds: number;
    get stabilizationWindowSeconds(): number {
        return this._stabilizationWindowSeconds
    }
    set stabilizationWindowSeconds(x: number) {
        this._stabilizationWindowSeconds = x
    }
    $stabilizationWindowSeconds(x: number) {
        this.stabilizationWindowSeconds = x; return this
    }
}

export interface HorizontalPodAutoscalerHelper extends HorizontalPodAutoscaler {
    $metadata(x: ObjectMetaHelper): HorizontalPodAutoscalerHelper;
    $spec(x: HorizontalPodAutoscalerSpecHelper): HorizontalPodAutoscalerHelper;
    $status(x: HorizontalPodAutoscalerStatusHelper): HorizontalPodAutoscalerHelper;
}

/** HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified. */
export class HorizontalPodAutoscalerHelper extends ResourceTemplate implements HorizontalPodAutoscalerHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "HorizontalPodAutoscaler", "autoscaling/v2beta2")
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

    _spec: HorizontalPodAutoscalerSpecHelper;
    get spec(): HorizontalPodAutoscalerSpecHelper {
        return this._spec
    }
    set spec(x: HorizontalPodAutoscalerSpecHelper) {
        this._spec = x
    }
    $spec(x: HorizontalPodAutoscalerSpecHelper) {
        this.spec = x; return this
    }

    _status: HorizontalPodAutoscalerStatusHelper;
    get status(): HorizontalPodAutoscalerStatusHelper {
        return this._status
    }
    set status(x: HorizontalPodAutoscalerStatusHelper) {
        this._status = x
    }
    $status(x: HorizontalPodAutoscalerStatusHelper) {
        this.status = x; return this
    }
}

export interface HorizontalPodAutoscalerBehaviorHelper extends HorizontalPodAutoscalerBehavior {
    $scaleDown(x: HPAScalingRulesHelper): HorizontalPodAutoscalerBehaviorHelper;
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
    $scaleDown(x: HPAScalingRulesHelper) {
        this.scaleDown = x; return this
    }

    _scaleUp: HPAScalingRulesHelper;
    get scaleUp(): HPAScalingRulesHelper {
        return this._scaleUp
    }
    set scaleUp(x: HPAScalingRulesHelper) {
        this._scaleUp = x
    }
    $scaleUp(x: HPAScalingRulesHelper) {
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
    $lastTransitionTime(x: Time) {
        this.lastTransitionTime = x; return this
    }

    _message: string;
    get message(): string {
        return this._message
    }
    set message(x: string) {
        this._message = x
    }
    $message(x: string) {
        this.message = x; return this
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

    _status: string;
    get status(): string {
        return this._status
    }
    set status(x: string) {
        this._status = x
    }
    $status(x: string) {
        this.status = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface HorizontalPodAutoscalerListHelper extends HorizontalPodAutoscalerList {
    $items(x: Array<HorizontalPodAutoscaler>): HorizontalPodAutoscalerListHelper;
    $metadata(x: ListMetaHelper): HorizontalPodAutoscalerListHelper;
}

/** HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects. */
export class HorizontalPodAutoscalerListHelper extends ResourceTemplate implements HorizontalPodAutoscalerListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "HorizontalPodAutoscalerList", "autoscaling/v2beta2")
    }

    _items: Array<HorizontalPodAutoscaler>;
    get items(): Array<HorizontalPodAutoscaler> {
        return this._items
    }
    set items(x: Array<HorizontalPodAutoscaler>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<HorizontalPodAutoscaler>) {
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

export interface HorizontalPodAutoscalerSpecHelper extends HorizontalPodAutoscalerSpec {
    $behavior(x: HorizontalPodAutoscalerBehaviorHelper): HorizontalPodAutoscalerSpecHelper;
    $maxReplicas(x: number): HorizontalPodAutoscalerSpecHelper;
    $metrics(x: Array<MetricSpec>): HorizontalPodAutoscalerSpecHelper;
    $minReplicas(x: number): HorizontalPodAutoscalerSpecHelper;
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
    $behavior(x: HorizontalPodAutoscalerBehaviorHelper) {
        this.behavior = x; return this
    }

    _maxReplicas: number;
    get maxReplicas(): number {
        return this._maxReplicas
    }
    set maxReplicas(x: number) {
        this._maxReplicas = x
    }
    $maxReplicas(x: number) {
        this.maxReplicas = x; return this
    }

    _metrics: Array<MetricSpec>;
    get metrics(): Array<MetricSpec> {
        return this._metrics
    }
    set metrics(x: Array<MetricSpec>) {
        this._metrics = this.set(this.metrics, x)
    }
    $metrics(x: Array<MetricSpec>) {
        this.metrics = x; return this
    }

    _minReplicas: number;
    get minReplicas(): number {
        return this._minReplicas
    }
    set minReplicas(x: number) {
        this._minReplicas = x
    }
    $minReplicas(x: number) {
        this.minReplicas = x; return this
    }

    _scaleTargetRef: CrossVersionObjectReferenceHelper;
    get scaleTargetRef(): CrossVersionObjectReferenceHelper {
        return this._scaleTargetRef
    }
    set scaleTargetRef(x: CrossVersionObjectReferenceHelper) {
        this._scaleTargetRef = x
    }
    $scaleTargetRef(x: CrossVersionObjectReferenceHelper) {
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
    $conditions(x: Array<HorizontalPodAutoscalerCondition>) {
        this.conditions = x; return this
    }

    _currentMetrics: Array<MetricStatus>;
    get currentMetrics(): Array<MetricStatus> {
        return this._currentMetrics
    }
    set currentMetrics(x: Array<MetricStatus>) {
        this._currentMetrics = this.set(this.currentMetrics, x)
    }
    $currentMetrics(x: Array<MetricStatus>) {
        this.currentMetrics = x; return this
    }

    _currentReplicas: number;
    get currentReplicas(): number {
        return this._currentReplicas
    }
    set currentReplicas(x: number) {
        this._currentReplicas = x
    }
    $currentReplicas(x: number) {
        this.currentReplicas = x; return this
    }

    _desiredReplicas: number;
    get desiredReplicas(): number {
        return this._desiredReplicas
    }
    set desiredReplicas(x: number) {
        this._desiredReplicas = x
    }
    $desiredReplicas(x: number) {
        this.desiredReplicas = x; return this
    }

    _lastScaleTime: Time;
    get lastScaleTime(): Time {
        return this._lastScaleTime
    }
    set lastScaleTime(x: Time) {
        this._lastScaleTime = x
    }
    $lastScaleTime(x: Time) {
        this.lastScaleTime = x; return this
    }

    _observedGeneration: number;
    get observedGeneration(): number {
        return this._observedGeneration
    }
    set observedGeneration(x: number) {
        this._observedGeneration = x
    }
    $observedGeneration(x: number) {
        this.observedGeneration = x; return this
    }
}

export interface MetricIdentifierHelper extends MetricIdentifier {
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
    $selector(x: LabelSelectorHelper) {
        this.selector = x; return this
    }
}

export interface MetricSpecHelper extends MetricSpec {
    $containerResource(x: ContainerResourceMetricSourceHelper): MetricSpecHelper;
    $external(x: ExternalMetricSourceHelper): MetricSpecHelper;
    $object(x: ObjectMetricSourceHelper): MetricSpecHelper;
    $pods(x: PodsMetricSourceHelper): MetricSpecHelper;
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
    $containerResource(x: ContainerResourceMetricSourceHelper) {
        this.containerResource = x; return this
    }

    _external: ExternalMetricSourceHelper;
    get external(): ExternalMetricSourceHelper {
        return this._external
    }
    set external(x: ExternalMetricSourceHelper) {
        this._external = x
    }
    $external(x: ExternalMetricSourceHelper) {
        this.external = x; return this
    }

    _object: ObjectMetricSourceHelper;
    get object(): ObjectMetricSourceHelper {
        return this._object
    }
    set object(x: ObjectMetricSourceHelper) {
        this._object = x
    }
    $object(x: ObjectMetricSourceHelper) {
        this.object = x; return this
    }

    _pods: PodsMetricSourceHelper;
    get pods(): PodsMetricSourceHelper {
        return this._pods
    }
    set pods(x: PodsMetricSourceHelper) {
        this._pods = x
    }
    $pods(x: PodsMetricSourceHelper) {
        this.pods = x; return this
    }

    _resource: ResourceMetricSourceHelper;
    get resource(): ResourceMetricSourceHelper {
        return this._resource
    }
    set resource(x: ResourceMetricSourceHelper) {
        this._resource = x
    }
    $resource(x: ResourceMetricSourceHelper) {
        this.resource = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface MetricStatusHelper extends MetricStatus {
    $containerResource(x: ContainerResourceMetricStatusHelper): MetricStatusHelper;
    $external(x: ExternalMetricStatusHelper): MetricStatusHelper;
    $object(x: ObjectMetricStatusHelper): MetricStatusHelper;
    $pods(x: PodsMetricStatusHelper): MetricStatusHelper;
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
    $containerResource(x: ContainerResourceMetricStatusHelper) {
        this.containerResource = x; return this
    }

    _external: ExternalMetricStatusHelper;
    get external(): ExternalMetricStatusHelper {
        return this._external
    }
    set external(x: ExternalMetricStatusHelper) {
        this._external = x
    }
    $external(x: ExternalMetricStatusHelper) {
        this.external = x; return this
    }

    _object: ObjectMetricStatusHelper;
    get object(): ObjectMetricStatusHelper {
        return this._object
    }
    set object(x: ObjectMetricStatusHelper) {
        this._object = x
    }
    $object(x: ObjectMetricStatusHelper) {
        this.object = x; return this
    }

    _pods: PodsMetricStatusHelper;
    get pods(): PodsMetricStatusHelper {
        return this._pods
    }
    set pods(x: PodsMetricStatusHelper) {
        this._pods = x
    }
    $pods(x: PodsMetricStatusHelper) {
        this.pods = x; return this
    }

    _resource: ResourceMetricStatusHelper;
    get resource(): ResourceMetricStatusHelper {
        return this._resource
    }
    set resource(x: ResourceMetricStatusHelper) {
        this._resource = x
    }
    $resource(x: ResourceMetricStatusHelper) {
        this.resource = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
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
    $averageUtilization(x: number) {
        this.averageUtilization = x; return this
    }

    _averageValue: Quantity;
    get averageValue(): Quantity {
        return this._averageValue
    }
    set averageValue(x: Quantity) {
        this._averageValue = x
    }
    $averageValue(x: Quantity) {
        this.averageValue = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }

    _value: Quantity;
    get value(): Quantity {
        return this._value
    }
    set value(x: Quantity) {
        this._value = x
    }
    $value(x: Quantity) {
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
    $averageUtilization(x: number) {
        this.averageUtilization = x; return this
    }

    _averageValue: Quantity;
    get averageValue(): Quantity {
        return this._averageValue
    }
    set averageValue(x: Quantity) {
        this._averageValue = x
    }
    $averageValue(x: Quantity) {
        this.averageValue = x; return this
    }

    _value: Quantity;
    get value(): Quantity {
        return this._value
    }
    set value(x: Quantity) {
        this._value = x
    }
    $value(x: Quantity) {
        this.value = x; return this
    }
}

export interface ObjectMetricSourceHelper extends ObjectMetricSource {
    $describedObject(x: CrossVersionObjectReferenceHelper): ObjectMetricSourceHelper;
    $metric(x: MetricIdentifierHelper): ObjectMetricSourceHelper;
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
    $describedObject(x: CrossVersionObjectReferenceHelper) {
        this.describedObject = x; return this
    }

    _metric: MetricIdentifierHelper;
    get metric(): MetricIdentifierHelper {
        return this._metric
    }
    set metric(x: MetricIdentifierHelper) {
        this._metric = x
    }
    $metric(x: MetricIdentifierHelper) {
        this.metric = x; return this
    }

    _target: MetricTargetHelper;
    get target(): MetricTargetHelper {
        return this._target
    }
    set target(x: MetricTargetHelper) {
        this._target = x
    }
    $target(x: MetricTargetHelper) {
        this.target = x; return this
    }
}

export interface ObjectMetricStatusHelper extends ObjectMetricStatus {
    $current(x: MetricValueStatusHelper): ObjectMetricStatusHelper;
    $describedObject(x: CrossVersionObjectReferenceHelper): ObjectMetricStatusHelper;
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
    $current(x: MetricValueStatusHelper) {
        this.current = x; return this
    }

    _describedObject: CrossVersionObjectReferenceHelper;
    get describedObject(): CrossVersionObjectReferenceHelper {
        return this._describedObject
    }
    set describedObject(x: CrossVersionObjectReferenceHelper) {
        this._describedObject = x
    }
    $describedObject(x: CrossVersionObjectReferenceHelper) {
        this.describedObject = x; return this
    }

    _metric: MetricIdentifierHelper;
    get metric(): MetricIdentifierHelper {
        return this._metric
    }
    set metric(x: MetricIdentifierHelper) {
        this._metric = x
    }
    $metric(x: MetricIdentifierHelper) {
        this.metric = x; return this
    }
}

export interface PodsMetricSourceHelper extends PodsMetricSource {
    $metric(x: MetricIdentifierHelper): PodsMetricSourceHelper;
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
    $metric(x: MetricIdentifierHelper) {
        this.metric = x; return this
    }

    _target: MetricTargetHelper;
    get target(): MetricTargetHelper {
        return this._target
    }
    set target(x: MetricTargetHelper) {
        this._target = x
    }
    $target(x: MetricTargetHelper) {
        this.target = x; return this
    }
}

export interface PodsMetricStatusHelper extends PodsMetricStatus {
    $current(x: MetricValueStatusHelper): PodsMetricStatusHelper;
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
    $current(x: MetricValueStatusHelper) {
        this.current = x; return this
    }

    _metric: MetricIdentifierHelper;
    get metric(): MetricIdentifierHelper {
        return this._metric
    }
    set metric(x: MetricIdentifierHelper) {
        this._metric = x
    }
    $metric(x: MetricIdentifierHelper) {
        this.metric = x; return this
    }
}

export interface ResourceMetricSourceHelper extends ResourceMetricSource {
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
    $target(x: MetricTargetHelper) {
        this.target = x; return this
    }
}

export interface ResourceMetricStatusHelper extends ResourceMetricStatus {
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
    $current(x: MetricValueStatusHelper) {
        this.current = x; return this
    }
}
