import { ResourceTemplate, Template } from "../resourceTemplate";
import { ContainerResourceMetricSource, ContainerResourceMetricStatus, CrossVersionObjectReference, ExternalMetricSource, ExternalMetricStatus, HorizontalPodAutoscaler, HorizontalPodAutoscalerCondition, HorizontalPodAutoscalerList, HorizontalPodAutoscalerSpec, HorizontalPodAutoscalerStatus, MetricSpec, MetricStatus, ObjectMetricSource, ObjectMetricStatus, PodsMetricSource, PodsMetricStatus, ResourceMetricSource, ResourceMetricStatus } from "./v2beta1";
import { Quantity } from "../api/resource";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";

export interface ContainerResourceMetricSourceHelper extends ContainerResourceMetricSource {
    $container(x: any): any;
    $targetAverageUtilization(x: any): any;
    $targetAverageValue(x: any): any;
}

/** ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export class ContainerResourceMetricSourceHelper extends Template implements ContainerResourceMetricSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _container: any;
    get container(): any /*string*/ {
        return this._container
    }
    set container(x: any /*string*/) {
        this._container = x
    }
    setContainer(x: any /*string*/) {
        this.container = x; return this
    }

    _targetAverageUtilization: any;
    get targetAverageUtilization(): any /*number*/ {
        return this._targetAverageUtilization
    }
    set targetAverageUtilization(x: any /*number*/) {
        this._targetAverageUtilization = x
    }
    setTargetAverageUtilization(x: any /*number*/) {
        this.targetAverageUtilization = x; return this
    }

    _targetAverageValue: any;
    get targetAverageValue(): any /*Quantity*/ {
        return this._targetAverageValue
    }
    set targetAverageValue(x: any /*Quantity*/) {
        this._targetAverageValue = x
    }
    setTargetAverageValue(x: any /*Quantity*/) {
        this.targetAverageValue = x; return this
    }
}

export interface ContainerResourceMetricStatusHelper extends ContainerResourceMetricStatus {
    $container(x: any): any;
    $currentAverageUtilization(x: any): any;
    $currentAverageValue(x: any): any;
}

/** ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export class ContainerResourceMetricStatusHelper extends Template implements ContainerResourceMetricStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _container: any;
    get container(): any /*string*/ {
        return this._container
    }
    set container(x: any /*string*/) {
        this._container = x
    }
    setContainer(x: any /*string*/) {
        this.container = x; return this
    }

    _currentAverageUtilization: any;
    get currentAverageUtilization(): any /*number*/ {
        return this._currentAverageUtilization
    }
    set currentAverageUtilization(x: any /*number*/) {
        this._currentAverageUtilization = x
    }
    setCurrentAverageUtilization(x: any /*number*/) {
        this.currentAverageUtilization = x; return this
    }

    _currentAverageValue: any;
    get currentAverageValue(): any /*Quantity*/ {
        return this._currentAverageValue
    }
    set currentAverageValue(x: any /*Quantity*/) {
        this._currentAverageValue = x
    }
    setCurrentAverageValue(x: any /*Quantity*/) {
        this.currentAverageValue = x; return this
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
    $metricName(x: any): any;
    $metricSelector(x: any): any;
    $targetAverageValue(x: any): any;
    $targetValue(x: any): any;
}

/** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set. */
export class ExternalMetricSourceHelper extends Template implements ExternalMetricSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _metricName: any;
    get metricName(): any /*string*/ {
        return this._metricName
    }
    set metricName(x: any /*string*/) {
        this._metricName = x
    }
    setMetricName(x: any /*string*/) {
        this.metricName = x; return this
    }

    _metricSelector: any;
    get metricSelector(): any /*LabelSelectorHelper*/ {
        return this._metricSelector
    }
    set metricSelector(x: any /*LabelSelectorHelper*/) {
        this._metricSelector = x
    }
    setMetricSelector(x: any /*LabelSelectorHelper*/) {
        this.metricSelector = x; return this
    }

    _targetAverageValue: any;
    get targetAverageValue(): any /*Quantity*/ {
        return this._targetAverageValue
    }
    set targetAverageValue(x: any /*Quantity*/) {
        this._targetAverageValue = x
    }
    setTargetAverageValue(x: any /*Quantity*/) {
        this.targetAverageValue = x; return this
    }

    _targetValue: any;
    get targetValue(): any /*Quantity*/ {
        return this._targetValue
    }
    set targetValue(x: any /*Quantity*/) {
        this._targetValue = x
    }
    setTargetValue(x: any /*Quantity*/) {
        this.targetValue = x; return this
    }
}

export interface ExternalMetricStatusHelper extends ExternalMetricStatus {
    $currentAverageValue(x: any): any;
    $currentValue(x: any): any;
    $metricName(x: any): any;
    $metricSelector(x: any): any;
}

/** ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object. */
export class ExternalMetricStatusHelper extends Template implements ExternalMetricStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _currentAverageValue: any;
    get currentAverageValue(): any /*Quantity*/ {
        return this._currentAverageValue
    }
    set currentAverageValue(x: any /*Quantity*/) {
        this._currentAverageValue = x
    }
    setCurrentAverageValue(x: any /*Quantity*/) {
        this.currentAverageValue = x; return this
    }

    _currentValue: any;
    get currentValue(): any /*Quantity*/ {
        return this._currentValue
    }
    set currentValue(x: any /*Quantity*/) {
        this._currentValue = x
    }
    setCurrentValue(x: any /*Quantity*/) {
        this.currentValue = x; return this
    }

    _metricName: any;
    get metricName(): any /*string*/ {
        return this._metricName
    }
    set metricName(x: any /*string*/) {
        this._metricName = x
    }
    setMetricName(x: any /*string*/) {
        this.metricName = x; return this
    }

    _metricSelector: any;
    get metricSelector(): any /*LabelSelectorHelper*/ {
        return this._metricSelector
    }
    set metricSelector(x: any /*LabelSelectorHelper*/) {
        this._metricSelector = x
    }
    setMetricSelector(x: any /*LabelSelectorHelper*/) {
        this.metricSelector = x; return this
    }
}

export interface HorizontalPodAutoscalerHelper extends HorizontalPodAutoscaler {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified. */
export class HorizontalPodAutoscalerHelper extends ResourceTemplate implements HorizontalPodAutoscalerHelper {
    static kind = 'HorizontalPodAutoscaler';
    static apiVersion = 'autoscaling/v2beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, HorizontalPodAutoscalerHelper.kind, HorizontalPodAutoscalerHelper.apiVersion)
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
    get spec(): any /*HorizontalPodAutoscalerSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*HorizontalPodAutoscalerSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*HorizontalPodAutoscalerSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*HorizontalPodAutoscalerStatusHelper*/ {
        return this._status
    }
    set status(x: any /*HorizontalPodAutoscalerStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*HorizontalPodAutoscalerStatusHelper*/) {
        this.status = x; return this
    }
}

export interface HorizontalPodAutoscalerConditionHelper extends HorizontalPodAutoscalerCondition {
    $lastTransitionTime(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point. */
export class HorizontalPodAutoscalerConditionHelper extends Template implements HorizontalPodAutoscalerConditionHelper {
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

export interface HorizontalPodAutoscalerListHelper extends HorizontalPodAutoscalerList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects. */
export class HorizontalPodAutoscalerListHelper extends ResourceTemplate implements HorizontalPodAutoscalerListHelper {
    static kind = 'HorizontalPodAutoscalerList';
    static apiVersion = 'autoscaling/v2beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, HorizontalPodAutoscalerListHelper.kind, HorizontalPodAutoscalerListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<HorizontalPodAutoscaler>*/ {
        return this._items
    }
    set items(x: any /*Array<HorizontalPodAutoscaler>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<HorizontalPodAutoscaler>*/) {
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

export interface HorizontalPodAutoscalerSpecHelper extends HorizontalPodAutoscalerSpec {
    $maxReplicas(x: any): any;
    $metrics(x: any): any;
    $minReplicas(x: any): any;
    $scaleTargetRef(x: any): any;
}

/** HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler. */
export class HorizontalPodAutoscalerSpecHelper extends Template implements HorizontalPodAutoscalerSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _maxReplicas: any;
    get maxReplicas(): any /*number*/ {
        return this._maxReplicas
    }
    set maxReplicas(x: any /*number*/) {
        this._maxReplicas = x
    }
    setMaxReplicas(x: any /*number*/) {
        this.maxReplicas = x; return this
    }

    _metrics: any;
    get metrics(): any /*Array<MetricSpec>*/ {
        return this._metrics
    }
    set metrics(x: any /*Array<MetricSpec>*/) {
        this._metrics = this.set(this.metrics, x)
    }
    setMetrics(x: any /*Array<MetricSpec>*/) {
        this.metrics = x; return this
    }

    _minReplicas: any;
    get minReplicas(): any /*number*/ {
        return this._minReplicas
    }
    set minReplicas(x: any /*number*/) {
        this._minReplicas = x
    }
    setMinReplicas(x: any /*number*/) {
        this.minReplicas = x; return this
    }

    _scaleTargetRef: any;
    get scaleTargetRef(): any /*CrossVersionObjectReferenceHelper*/ {
        return this._scaleTargetRef
    }
    set scaleTargetRef(x: any /*CrossVersionObjectReferenceHelper*/) {
        this._scaleTargetRef = x
    }
    setScaleTargetRef(x: any /*CrossVersionObjectReferenceHelper*/) {
        this.scaleTargetRef = x; return this
    }
}

export interface HorizontalPodAutoscalerStatusHelper extends HorizontalPodAutoscalerStatus {
    $conditions(x: any): any;
    $currentMetrics(x: any): any;
    $currentReplicas(x: any): any;
    $desiredReplicas(x: any): any;
    $lastScaleTime(x: any): any;
    $observedGeneration(x: any): any;
}

/** HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler. */
export class HorizontalPodAutoscalerStatusHelper extends Template implements HorizontalPodAutoscalerStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conditions: any;
    get conditions(): any /*Array<HorizontalPodAutoscalerCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<HorizontalPodAutoscalerCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<HorizontalPodAutoscalerCondition>*/) {
        this.conditions = x; return this
    }

    _currentMetrics: any;
    get currentMetrics(): any /*Array<MetricStatus>*/ {
        return this._currentMetrics
    }
    set currentMetrics(x: any /*Array<MetricStatus>*/) {
        this._currentMetrics = this.set(this.currentMetrics, x)
    }
    setCurrentMetrics(x: any /*Array<MetricStatus>*/) {
        this.currentMetrics = x; return this
    }

    _currentReplicas: any;
    get currentReplicas(): any /*number*/ {
        return this._currentReplicas
    }
    set currentReplicas(x: any /*number*/) {
        this._currentReplicas = x
    }
    setCurrentReplicas(x: any /*number*/) {
        this.currentReplicas = x; return this
    }

    _desiredReplicas: any;
    get desiredReplicas(): any /*number*/ {
        return this._desiredReplicas
    }
    set desiredReplicas(x: any /*number*/) {
        this._desiredReplicas = x
    }
    setDesiredReplicas(x: any /*number*/) {
        this.desiredReplicas = x; return this
    }

    _lastScaleTime: any;
    get lastScaleTime(): any /*Time*/ {
        return this._lastScaleTime
    }
    set lastScaleTime(x: any /*Time*/) {
        this._lastScaleTime = x
    }
    setLastScaleTime(x: any /*Time*/) {
        this.lastScaleTime = x; return this
    }

    _observedGeneration: any;
    get observedGeneration(): any /*number*/ {
        return this._observedGeneration
    }
    set observedGeneration(x: any /*number*/) {
        this._observedGeneration = x
    }
    setObservedGeneration(x: any /*number*/) {
        this.observedGeneration = x; return this
    }
}

export interface MetricSpecHelper extends MetricSpec {
    $containerResource(x: any): any;
    $external(x: any): any;
    $object(x: any): any;
    $pods(x: any): any;
    $resource(x: any): any;
    $type(x: any): any;
}

/** MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once). */
export class MetricSpecHelper extends Template implements MetricSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _containerResource: any;
    get containerResource(): any /*ContainerResourceMetricSourceHelper*/ {
        return this._containerResource
    }
    set containerResource(x: any /*ContainerResourceMetricSourceHelper*/) {
        this._containerResource = x
    }
    setContainerResource(x: any /*ContainerResourceMetricSourceHelper*/) {
        this.containerResource = x; return this
    }

    _external: any;
    get external(): any /*ExternalMetricSourceHelper*/ {
        return this._external
    }
    set external(x: any /*ExternalMetricSourceHelper*/) {
        this._external = x
    }
    setExternal(x: any /*ExternalMetricSourceHelper*/) {
        this.external = x; return this
    }

    _object: any;
    get object(): any /*ObjectMetricSourceHelper*/ {
        return this._object
    }
    set object(x: any /*ObjectMetricSourceHelper*/) {
        this._object = x
    }
    setObject(x: any /*ObjectMetricSourceHelper*/) {
        this.object = x; return this
    }

    _pods: any;
    get pods(): any /*PodsMetricSourceHelper*/ {
        return this._pods
    }
    set pods(x: any /*PodsMetricSourceHelper*/) {
        this._pods = x
    }
    setPods(x: any /*PodsMetricSourceHelper*/) {
        this.pods = x; return this
    }

    _resource: any;
    get resource(): any /*ResourceMetricSourceHelper*/ {
        return this._resource
    }
    set resource(x: any /*ResourceMetricSourceHelper*/) {
        this._resource = x
    }
    setResource(x: any /*ResourceMetricSourceHelper*/) {
        this.resource = x; return this
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

export interface MetricStatusHelper extends MetricStatus {
    $containerResource(x: any): any;
    $external(x: any): any;
    $object(x: any): any;
    $pods(x: any): any;
    $resource(x: any): any;
    $type(x: any): any;
}

/** MetricStatus describes the last-read state of a single metric. */
export class MetricStatusHelper extends Template implements MetricStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _containerResource: any;
    get containerResource(): any /*ContainerResourceMetricStatusHelper*/ {
        return this._containerResource
    }
    set containerResource(x: any /*ContainerResourceMetricStatusHelper*/) {
        this._containerResource = x
    }
    setContainerResource(x: any /*ContainerResourceMetricStatusHelper*/) {
        this.containerResource = x; return this
    }

    _external: any;
    get external(): any /*ExternalMetricStatusHelper*/ {
        return this._external
    }
    set external(x: any /*ExternalMetricStatusHelper*/) {
        this._external = x
    }
    setExternal(x: any /*ExternalMetricStatusHelper*/) {
        this.external = x; return this
    }

    _object: any;
    get object(): any /*ObjectMetricStatusHelper*/ {
        return this._object
    }
    set object(x: any /*ObjectMetricStatusHelper*/) {
        this._object = x
    }
    setObject(x: any /*ObjectMetricStatusHelper*/) {
        this.object = x; return this
    }

    _pods: any;
    get pods(): any /*PodsMetricStatusHelper*/ {
        return this._pods
    }
    set pods(x: any /*PodsMetricStatusHelper*/) {
        this._pods = x
    }
    setPods(x: any /*PodsMetricStatusHelper*/) {
        this.pods = x; return this
    }

    _resource: any;
    get resource(): any /*ResourceMetricStatusHelper*/ {
        return this._resource
    }
    set resource(x: any /*ResourceMetricStatusHelper*/) {
        this._resource = x
    }
    setResource(x: any /*ResourceMetricStatusHelper*/) {
        this.resource = x; return this
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

export interface ObjectMetricSourceHelper extends ObjectMetricSource {
    $averageValue(x: any): any;
    $metricName(x: any): any;
    $selector(x: any): any;
    $target(x: any): any;
    $targetValue(x: any): any;
}

/** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export class ObjectMetricSourceHelper extends Template implements ObjectMetricSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _averageValue: any;
    get averageValue(): any /*Quantity*/ {
        return this._averageValue
    }
    set averageValue(x: any /*Quantity*/) {
        this._averageValue = x
    }
    setAverageValue(x: any /*Quantity*/) {
        this.averageValue = x; return this
    }

    _metricName: any;
    get metricName(): any /*string*/ {
        return this._metricName
    }
    set metricName(x: any /*string*/) {
        this._metricName = x
    }
    setMetricName(x: any /*string*/) {
        this.metricName = x; return this
    }

    _selector: any;
    get selector(): any /*LabelSelectorHelper*/ {
        return this._selector
    }
    set selector(x: any /*LabelSelectorHelper*/) {
        this._selector = x
    }
    setSelector(x: any /*LabelSelectorHelper*/) {
        this.selector = x; return this
    }

    _target: any;
    get target(): any /*CrossVersionObjectReferenceHelper*/ {
        return this._target
    }
    set target(x: any /*CrossVersionObjectReferenceHelper*/) {
        this._target = x
    }
    setTarget(x: any /*CrossVersionObjectReferenceHelper*/) {
        this.target = x; return this
    }

    _targetValue: any;
    get targetValue(): any /*Quantity*/ {
        return this._targetValue
    }
    set targetValue(x: any /*Quantity*/) {
        this._targetValue = x
    }
    setTargetValue(x: any /*Quantity*/) {
        this.targetValue = x; return this
    }
}

export interface ObjectMetricStatusHelper extends ObjectMetricStatus {
    $averageValue(x: any): any;
    $currentValue(x: any): any;
    $metricName(x: any): any;
    $selector(x: any): any;
    $target(x: any): any;
}

/** ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export class ObjectMetricStatusHelper extends Template implements ObjectMetricStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _averageValue: any;
    get averageValue(): any /*Quantity*/ {
        return this._averageValue
    }
    set averageValue(x: any /*Quantity*/) {
        this._averageValue = x
    }
    setAverageValue(x: any /*Quantity*/) {
        this.averageValue = x; return this
    }

    _currentValue: any;
    get currentValue(): any /*Quantity*/ {
        return this._currentValue
    }
    set currentValue(x: any /*Quantity*/) {
        this._currentValue = x
    }
    setCurrentValue(x: any /*Quantity*/) {
        this.currentValue = x; return this
    }

    _metricName: any;
    get metricName(): any /*string*/ {
        return this._metricName
    }
    set metricName(x: any /*string*/) {
        this._metricName = x
    }
    setMetricName(x: any /*string*/) {
        this.metricName = x; return this
    }

    _selector: any;
    get selector(): any /*LabelSelectorHelper*/ {
        return this._selector
    }
    set selector(x: any /*LabelSelectorHelper*/) {
        this._selector = x
    }
    setSelector(x: any /*LabelSelectorHelper*/) {
        this.selector = x; return this
    }

    _target: any;
    get target(): any /*CrossVersionObjectReferenceHelper*/ {
        return this._target
    }
    set target(x: any /*CrossVersionObjectReferenceHelper*/) {
        this._target = x
    }
    setTarget(x: any /*CrossVersionObjectReferenceHelper*/) {
        this.target = x; return this
    }
}

export interface PodsMetricSourceHelper extends PodsMetricSource {
    $metricName(x: any): any;
    $selector(x: any): any;
    $targetAverageValue(x: any): any;
}

/** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
export class PodsMetricSourceHelper extends Template implements PodsMetricSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _metricName: any;
    get metricName(): any /*string*/ {
        return this._metricName
    }
    set metricName(x: any /*string*/) {
        this._metricName = x
    }
    setMetricName(x: any /*string*/) {
        this.metricName = x; return this
    }

    _selector: any;
    get selector(): any /*LabelSelectorHelper*/ {
        return this._selector
    }
    set selector(x: any /*LabelSelectorHelper*/) {
        this._selector = x
    }
    setSelector(x: any /*LabelSelectorHelper*/) {
        this.selector = x; return this
    }

    _targetAverageValue: any;
    get targetAverageValue(): any /*Quantity*/ {
        return this._targetAverageValue
    }
    set targetAverageValue(x: any /*Quantity*/) {
        this._targetAverageValue = x
    }
    setTargetAverageValue(x: any /*Quantity*/) {
        this.targetAverageValue = x; return this
    }
}

export interface PodsMetricStatusHelper extends PodsMetricStatus {
    $currentAverageValue(x: any): any;
    $metricName(x: any): any;
    $selector(x: any): any;
}

/** PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second). */
export class PodsMetricStatusHelper extends Template implements PodsMetricStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _currentAverageValue: any;
    get currentAverageValue(): any /*Quantity*/ {
        return this._currentAverageValue
    }
    set currentAverageValue(x: any /*Quantity*/) {
        this._currentAverageValue = x
    }
    setCurrentAverageValue(x: any /*Quantity*/) {
        this.currentAverageValue = x; return this
    }

    _metricName: any;
    get metricName(): any /*string*/ {
        return this._metricName
    }
    set metricName(x: any /*string*/) {
        this._metricName = x
    }
    setMetricName(x: any /*string*/) {
        this.metricName = x; return this
    }

    _selector: any;
    get selector(): any /*LabelSelectorHelper*/ {
        return this._selector
    }
    set selector(x: any /*LabelSelectorHelper*/) {
        this._selector = x
    }
    setSelector(x: any /*LabelSelectorHelper*/) {
        this.selector = x; return this
    }
}

export interface ResourceMetricSourceHelper extends ResourceMetricSource {
    $targetAverageUtilization(x: any): any;
    $targetAverageValue(x: any): any;
}

/** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export class ResourceMetricSourceHelper extends Template implements ResourceMetricSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _targetAverageUtilization: any;
    get targetAverageUtilization(): any /*number*/ {
        return this._targetAverageUtilization
    }
    set targetAverageUtilization(x: any /*number*/) {
        this._targetAverageUtilization = x
    }
    setTargetAverageUtilization(x: any /*number*/) {
        this.targetAverageUtilization = x; return this
    }

    _targetAverageValue: any;
    get targetAverageValue(): any /*Quantity*/ {
        return this._targetAverageValue
    }
    set targetAverageValue(x: any /*Quantity*/) {
        this._targetAverageValue = x
    }
    setTargetAverageValue(x: any /*Quantity*/) {
        this.targetAverageValue = x; return this
    }
}

export interface ResourceMetricStatusHelper extends ResourceMetricStatus {
    $currentAverageUtilization(x: any): any;
    $currentAverageValue(x: any): any;
}

/** ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export class ResourceMetricStatusHelper extends Template implements ResourceMetricStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _currentAverageUtilization: any;
    get currentAverageUtilization(): any /*number*/ {
        return this._currentAverageUtilization
    }
    set currentAverageUtilization(x: any /*number*/) {
        this._currentAverageUtilization = x
    }
    setCurrentAverageUtilization(x: any /*number*/) {
        this.currentAverageUtilization = x; return this
    }

    _currentAverageValue: any;
    get currentAverageValue(): any /*Quantity*/ {
        return this._currentAverageValue
    }
    set currentAverageValue(x: any /*Quantity*/) {
        this._currentAverageValue = x
    }
    setCurrentAverageValue(x: any /*Quantity*/) {
        this.currentAverageValue = x; return this
    }
}
