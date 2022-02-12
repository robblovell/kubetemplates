import { ResourceTemplate } from "../resourceTemplate";
import { ContainerResourceMetricSource, ContainerResourceMetricStatus, CrossVersionObjectReference, ExternalMetricSource, ExternalMetricStatus, HPAScalingPolicy, HPAScalingRules, HorizontalPodAutoscaler, HorizontalPodAutoscalerBehavior, HorizontalPodAutoscalerCondition, HorizontalPodAutoscalerSpec, HorizontalPodAutoscalerStatus, MetricIdentifier, MetricSpec, MetricStatus, MetricTarget, MetricValueStatus, ObjectMetricSource, ObjectMetricStatus, PodsMetricSource, PodsMetricStatus, ResourceMetricSource, ResourceMetricStatus } from "./v2beta2";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { Quantity } from "../api/resource";

/** ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export class ContainerResourceMetricSourceHelper extends ResourceTemplate {
    static kind = 'ContainerResourceMetricSource';
    static apiVersion = 'autoscaling/v2beta2';

    container(container: string): ContainerResourceMetricSourceHelper {
        this._template.container = container
        return this
    }

    target(target: MetricTarget): ContainerResourceMetricSourceHelper {
        if (!this._template.target) this._template.target = []
        this._template.target = {
            ...this._template.target,
            ...target
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ContainerResourceMetricSourceHelper.kind
        this._template.apiVersion = ContainerResourceMetricSourceHelper.apiVersion
    }
}

/** ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export class ContainerResourceMetricStatusHelper extends ResourceTemplate {
    static kind = 'ContainerResourceMetricStatus';
    static apiVersion = 'autoscaling/v2beta2';

    container(container: string): ContainerResourceMetricStatusHelper {
        this._template.container = container
        return this
    }

    current(current: MetricValueStatus): ContainerResourceMetricStatusHelper {
        if (!this._template.current) this._template.current = []
        this._template.current = {
            ...this._template.current,
            ...current
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ContainerResourceMetricStatusHelper.kind
        this._template.apiVersion = ContainerResourceMetricStatusHelper.apiVersion
    }
}

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export class CrossVersionObjectReferenceHelper extends ResourceTemplate {
    static kind = 'CrossVersionObjectReference';
    static apiVersion = 'autoscaling/v2beta2';

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CrossVersionObjectReferenceHelper.kind
        this._template.apiVersion = CrossVersionObjectReferenceHelper.apiVersion
    }
}

/** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
export class ExternalMetricSourceHelper extends ResourceTemplate {
    static kind = 'ExternalMetricSource';
    static apiVersion = 'autoscaling/v2beta2';

    metric(metric: MetricIdentifier): ExternalMetricSourceHelper {
        if (!this._template.metric) this._template.metric = []
        this._template.metric = {
            ...this._template.metric,
            ...metric
        }
        return this
    }

    target(target: MetricTarget): ExternalMetricSourceHelper {
        if (!this._template.target) this._template.target = []
        this._template.target = {
            ...this._template.target,
            ...target
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ExternalMetricSourceHelper.kind
        this._template.apiVersion = ExternalMetricSourceHelper.apiVersion
    }
}

/** ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object. */
export class ExternalMetricStatusHelper extends ResourceTemplate {
    static kind = 'ExternalMetricStatus';
    static apiVersion = 'autoscaling/v2beta2';

    current(current: MetricValueStatus): ExternalMetricStatusHelper {
        if (!this._template.current) this._template.current = []
        this._template.current = {
            ...this._template.current,
            ...current
        }
        return this
    }

    metric(metric: MetricIdentifier): ExternalMetricStatusHelper {
        if (!this._template.metric) this._template.metric = []
        this._template.metric = {
            ...this._template.metric,
            ...metric
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ExternalMetricStatusHelper.kind
        this._template.apiVersion = ExternalMetricStatusHelper.apiVersion
    }
}

/** HPAScalingPolicy is a single policy which must hold true for a specified past interval. */
export class HPAScalingPolicyHelper extends ResourceTemplate {
    static kind = 'HPAScalingPolicy';
    static apiVersion = 'autoscaling/v2beta2';

    periodSeconds(periodSeconds: number): HPAScalingPolicyHelper {
        this._template.periodSeconds = periodSeconds
        return this
    }

    type(type: string): HPAScalingPolicyHelper {
        this._template.type = type
        return this
    }

    value(value: number): HPAScalingPolicyHelper {
        this._template.value = value
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HPAScalingPolicyHelper.kind
        this._template.apiVersion = HPAScalingPolicyHelper.apiVersion
    }
}

/** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
export class HPAScalingRulesHelper extends ResourceTemplate {
    static kind = 'HPAScalingRules';
    static apiVersion = 'autoscaling/v2beta2';

    policies(policies: Array<HPAScalingPolicy>): HPAScalingRulesHelper {
        if (!Array.isArray(policies)) { policies = [policies] }
        if (!this._template.policies) this._template.policies = policies
        this._template.policies = [...this._template.policies, ...policies]
        return this
    }

    selectPolicy(selectPolicy: string): HPAScalingRulesHelper {
        this._template.selectPolicy = selectPolicy
        return this
    }

    stabilizationWindowSeconds(stabilizationWindowSeconds: number): HPAScalingRulesHelper {
        this._template.stabilizationWindowSeconds = stabilizationWindowSeconds
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HPAScalingRulesHelper.kind
        this._template.apiVersion = HPAScalingRulesHelper.apiVersion
    }
}

/** HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified. */
export class HorizontalPodAutoscalerHelper extends ResourceTemplate {
    static kind = 'HorizontalPodAutoscaler';
    static apiVersion = 'autoscaling/v2beta2';

    metadata(metadata: ObjectMeta): HorizontalPodAutoscalerHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: HorizontalPodAutoscalerSpec): HorizontalPodAutoscalerHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: HorizontalPodAutoscalerStatus): HorizontalPodAutoscalerHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HorizontalPodAutoscalerHelper.kind
        this._template.apiVersion = HorizontalPodAutoscalerHelper.apiVersion
    }
}

/** HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). */
export class HorizontalPodAutoscalerBehaviorHelper extends ResourceTemplate {
    static kind = 'HorizontalPodAutoscalerBehavior';
    static apiVersion = 'autoscaling/v2beta2';

    scaleDown(scaleDown: HPAScalingRules): HorizontalPodAutoscalerBehaviorHelper {
        if (!this._template.scaleDown) this._template.scaleDown = []
        this._template.scaleDown = {
            ...this._template.scaleDown,
            ...scaleDown
        }
        return this
    }

    scaleUp(scaleUp: HPAScalingRules): HorizontalPodAutoscalerBehaviorHelper {
        if (!this._template.scaleUp) this._template.scaleUp = []
        this._template.scaleUp = {
            ...this._template.scaleUp,
            ...scaleUp
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HorizontalPodAutoscalerBehaviorHelper.kind
        this._template.apiVersion = HorizontalPodAutoscalerBehaviorHelper.apiVersion
    }
}

/** HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point. */
export class HorizontalPodAutoscalerConditionHelper extends ResourceTemplate {
    static kind = 'HorizontalPodAutoscalerCondition';
    static apiVersion = 'autoscaling/v2beta2';

    lastTransitionTime(lastTransitionTime: Time): HorizontalPodAutoscalerConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    message(message: string): HorizontalPodAutoscalerConditionHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): HorizontalPodAutoscalerConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): HorizontalPodAutoscalerConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): HorizontalPodAutoscalerConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HorizontalPodAutoscalerConditionHelper.kind
        this._template.apiVersion = HorizontalPodAutoscalerConditionHelper.apiVersion
    }
}

/** HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects. */
export class HorizontalPodAutoscalerListHelper extends ResourceTemplate {
    static kind = 'HorizontalPodAutoscalerList';
    static apiVersion = 'autoscaling/v2beta2';

    items(items: Array<HorizontalPodAutoscaler>): HorizontalPodAutoscalerListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): HorizontalPodAutoscalerListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HorizontalPodAutoscalerListHelper.kind
        this._template.apiVersion = HorizontalPodAutoscalerListHelper.apiVersion
    }
}

/** HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler. */
export class HorizontalPodAutoscalerSpecHelper extends ResourceTemplate {
    static kind = 'HorizontalPodAutoscalerSpec';
    static apiVersion = 'autoscaling/v2beta2';

    behavior(behavior: HorizontalPodAutoscalerBehavior): HorizontalPodAutoscalerSpecHelper {
        if (!this._template.behavior) this._template.behavior = []
        this._template.behavior = {
            ...this._template.behavior,
            ...behavior
        }
        return this
    }

    maxReplicas(maxReplicas: number): HorizontalPodAutoscalerSpecHelper {
        this._template.maxReplicas = maxReplicas
        return this
    }

    metrics(metrics: Array<MetricSpec>): HorizontalPodAutoscalerSpecHelper {
        if (!Array.isArray(metrics)) { metrics = [metrics] }
        if (!this._template.metrics) this._template.metrics = metrics
        this._template.metrics = [...this._template.metrics, ...metrics]
        return this
    }

    minReplicas(minReplicas: number): HorizontalPodAutoscalerSpecHelper {
        this._template.minReplicas = minReplicas
        return this
    }

    scaleTargetRef(scaleTargetRef: CrossVersionObjectReference): HorizontalPodAutoscalerSpecHelper {
        if (!this._template.scaleTargetRef) this._template.scaleTargetRef = []
        this._template.scaleTargetRef = {
            ...this._template.scaleTargetRef,
            ...scaleTargetRef
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HorizontalPodAutoscalerSpecHelper.kind
        this._template.apiVersion = HorizontalPodAutoscalerSpecHelper.apiVersion
    }
}

/** HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler. */
export class HorizontalPodAutoscalerStatusHelper extends ResourceTemplate {
    static kind = 'HorizontalPodAutoscalerStatus';
    static apiVersion = 'autoscaling/v2beta2';

    conditions(conditions: Array<HorizontalPodAutoscalerCondition>): HorizontalPodAutoscalerStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    currentMetrics(currentMetrics: Array<MetricStatus>): HorizontalPodAutoscalerStatusHelper {
        if (!Array.isArray(currentMetrics)) { currentMetrics = [currentMetrics] }
        if (!this._template.currentMetrics) this._template.currentMetrics = currentMetrics
        this._template.currentMetrics = [...this._template.currentMetrics, ...currentMetrics]
        return this
    }

    currentReplicas(currentReplicas: number): HorizontalPodAutoscalerStatusHelper {
        this._template.currentReplicas = currentReplicas
        return this
    }

    desiredReplicas(desiredReplicas: number): HorizontalPodAutoscalerStatusHelper {
        this._template.desiredReplicas = desiredReplicas
        return this
    }

    lastScaleTime(lastScaleTime: Time): HorizontalPodAutoscalerStatusHelper {
        this._template.lastScaleTime = lastScaleTime
        return this
    }

    observedGeneration(observedGeneration: number): HorizontalPodAutoscalerStatusHelper {
        this._template.observedGeneration = observedGeneration
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HorizontalPodAutoscalerStatusHelper.kind
        this._template.apiVersion = HorizontalPodAutoscalerStatusHelper.apiVersion
    }
}

/** MetricIdentifier defines the name and optionally selector for a metric */
export class MetricIdentifierHelper extends ResourceTemplate {
    static kind = 'MetricIdentifier';
    static apiVersion = 'autoscaling/v2beta2';

    selector(selector: LabelSelector): MetricIdentifierHelper {
        if (!this._template.selector) this._template.selector = []
        this._template.selector = {
            ...this._template.selector,
            ...selector
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = MetricIdentifierHelper.kind
        this._template.apiVersion = MetricIdentifierHelper.apiVersion
    }
}

/** MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once). */
export class MetricSpecHelper extends ResourceTemplate {
    static kind = 'MetricSpec';
    static apiVersion = 'autoscaling/v2beta2';

    containerResource(containerResource: ContainerResourceMetricSource): MetricSpecHelper {
        if (!this._template.containerResource) this._template.containerResource = []
        this._template.containerResource = {
            ...this._template.containerResource,
            ...containerResource
        }
        return this
    }

    external(external: ExternalMetricSource): MetricSpecHelper {
        if (!this._template.external) this._template.external = []
        this._template.external = {
            ...this._template.external,
            ...external
        }
        return this
    }

    object(object: ObjectMetricSource): MetricSpecHelper {
        if (!this._template.object) this._template.object = []
        this._template.object = {
            ...this._template.object,
            ...object
        }
        return this
    }

    pods(pods: PodsMetricSource): MetricSpecHelper {
        if (!this._template.pods) this._template.pods = []
        this._template.pods = {
            ...this._template.pods,
            ...pods
        }
        return this
    }

    resource(resource: ResourceMetricSource): MetricSpecHelper {
        if (!this._template.resource) this._template.resource = []
        this._template.resource = {
            ...this._template.resource,
            ...resource
        }
        return this
    }

    type(type: string): MetricSpecHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = MetricSpecHelper.kind
        this._template.apiVersion = MetricSpecHelper.apiVersion
    }
}

/** MetricStatus describes the last-read state of a single metric. */
export class MetricStatusHelper extends ResourceTemplate {
    static kind = 'MetricStatus';
    static apiVersion = 'autoscaling/v2beta2';

    containerResource(containerResource: ContainerResourceMetricStatus): MetricStatusHelper {
        if (!this._template.containerResource) this._template.containerResource = []
        this._template.containerResource = {
            ...this._template.containerResource,
            ...containerResource
        }
        return this
    }

    external(external: ExternalMetricStatus): MetricStatusHelper {
        if (!this._template.external) this._template.external = []
        this._template.external = {
            ...this._template.external,
            ...external
        }
        return this
    }

    object(object: ObjectMetricStatus): MetricStatusHelper {
        if (!this._template.object) this._template.object = []
        this._template.object = {
            ...this._template.object,
            ...object
        }
        return this
    }

    pods(pods: PodsMetricStatus): MetricStatusHelper {
        if (!this._template.pods) this._template.pods = []
        this._template.pods = {
            ...this._template.pods,
            ...pods
        }
        return this
    }

    resource(resource: ResourceMetricStatus): MetricStatusHelper {
        if (!this._template.resource) this._template.resource = []
        this._template.resource = {
            ...this._template.resource,
            ...resource
        }
        return this
    }

    type(type: string): MetricStatusHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = MetricStatusHelper.kind
        this._template.apiVersion = MetricStatusHelper.apiVersion
    }
}

/** MetricTarget defines the target value, average value, or average utilization of a specific metric */
export class MetricTargetHelper extends ResourceTemplate {
    static kind = 'MetricTarget';
    static apiVersion = 'autoscaling/v2beta2';

    averageUtilization(averageUtilization: number): MetricTargetHelper {
        this._template.averageUtilization = averageUtilization
        return this
    }

    averageValue(averageValue: Quantity): MetricTargetHelper {
        this._template.averageValue = averageValue
        return this
    }

    type(type: string): MetricTargetHelper {
        this._template.type = type
        return this
    }

    value(value: Quantity): MetricTargetHelper {
        this._template.value = value
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = MetricTargetHelper.kind
        this._template.apiVersion = MetricTargetHelper.apiVersion
    }
}

/** MetricValueStatus holds the current value for a metric */
export class MetricValueStatusHelper extends ResourceTemplate {
    static kind = 'MetricValueStatus';
    static apiVersion = 'autoscaling/v2beta2';

    averageUtilization(averageUtilization: number): MetricValueStatusHelper {
        this._template.averageUtilization = averageUtilization
        return this
    }

    averageValue(averageValue: Quantity): MetricValueStatusHelper {
        this._template.averageValue = averageValue
        return this
    }

    value(value: Quantity): MetricValueStatusHelper {
        this._template.value = value
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = MetricValueStatusHelper.kind
        this._template.apiVersion = MetricValueStatusHelper.apiVersion
    }
}

/** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export class ObjectMetricSourceHelper extends ResourceTemplate {
    static kind = 'ObjectMetricSource';
    static apiVersion = 'autoscaling/v2beta2';

    describedObject(describedObject: CrossVersionObjectReference): ObjectMetricSourceHelper {
        if (!this._template.describedObject) this._template.describedObject = []
        this._template.describedObject = {
            ...this._template.describedObject,
            ...describedObject
        }
        return this
    }

    metric(metric: MetricIdentifier): ObjectMetricSourceHelper {
        if (!this._template.metric) this._template.metric = []
        this._template.metric = {
            ...this._template.metric,
            ...metric
        }
        return this
    }

    target(target: MetricTarget): ObjectMetricSourceHelper {
        if (!this._template.target) this._template.target = []
        this._template.target = {
            ...this._template.target,
            ...target
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ObjectMetricSourceHelper.kind
        this._template.apiVersion = ObjectMetricSourceHelper.apiVersion
    }
}

/** ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export class ObjectMetricStatusHelper extends ResourceTemplate {
    static kind = 'ObjectMetricStatus';
    static apiVersion = 'autoscaling/v2beta2';

    current(current: MetricValueStatus): ObjectMetricStatusHelper {
        if (!this._template.current) this._template.current = []
        this._template.current = {
            ...this._template.current,
            ...current
        }
        return this
    }

    describedObject(describedObject: CrossVersionObjectReference): ObjectMetricStatusHelper {
        if (!this._template.describedObject) this._template.describedObject = []
        this._template.describedObject = {
            ...this._template.describedObject,
            ...describedObject
        }
        return this
    }

    metric(metric: MetricIdentifier): ObjectMetricStatusHelper {
        if (!this._template.metric) this._template.metric = []
        this._template.metric = {
            ...this._template.metric,
            ...metric
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ObjectMetricStatusHelper.kind
        this._template.apiVersion = ObjectMetricStatusHelper.apiVersion
    }
}

/** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
export class PodsMetricSourceHelper extends ResourceTemplate {
    static kind = 'PodsMetricSource';
    static apiVersion = 'autoscaling/v2beta2';

    metric(metric: MetricIdentifier): PodsMetricSourceHelper {
        if (!this._template.metric) this._template.metric = []
        this._template.metric = {
            ...this._template.metric,
            ...metric
        }
        return this
    }

    target(target: MetricTarget): PodsMetricSourceHelper {
        if (!this._template.target) this._template.target = []
        this._template.target = {
            ...this._template.target,
            ...target
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodsMetricSourceHelper.kind
        this._template.apiVersion = PodsMetricSourceHelper.apiVersion
    }
}

/** PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second). */
export class PodsMetricStatusHelper extends ResourceTemplate {
    static kind = 'PodsMetricStatus';
    static apiVersion = 'autoscaling/v2beta2';

    current(current: MetricValueStatus): PodsMetricStatusHelper {
        if (!this._template.current) this._template.current = []
        this._template.current = {
            ...this._template.current,
            ...current
        }
        return this
    }

    metric(metric: MetricIdentifier): PodsMetricStatusHelper {
        if (!this._template.metric) this._template.metric = []
        this._template.metric = {
            ...this._template.metric,
            ...metric
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodsMetricStatusHelper.kind
        this._template.apiVersion = PodsMetricStatusHelper.apiVersion
    }
}

/** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export class ResourceMetricSourceHelper extends ResourceTemplate {
    static kind = 'ResourceMetricSource';
    static apiVersion = 'autoscaling/v2beta2';

    target(target: MetricTarget): ResourceMetricSourceHelper {
        if (!this._template.target) this._template.target = []
        this._template.target = {
            ...this._template.target,
            ...target
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ResourceMetricSourceHelper.kind
        this._template.apiVersion = ResourceMetricSourceHelper.apiVersion
    }
}

/** ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export class ResourceMetricStatusHelper extends ResourceTemplate {
    static kind = 'ResourceMetricStatus';
    static apiVersion = 'autoscaling/v2beta2';

    current(current: MetricValueStatus): ResourceMetricStatusHelper {
        if (!this._template.current) this._template.current = []
        this._template.current = {
            ...this._template.current,
            ...current
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ResourceMetricStatusHelper.kind
        this._template.apiVersion = ResourceMetricStatusHelper.apiVersion
    }
}
