import { ResourceTemplate } from "../resourceTemplate";
import { Quantity } from "../api/resource";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { ContainerResourceMetricSource, ContainerResourceMetricStatus, CrossVersionObjectReference, ExternalMetricSource, ExternalMetricStatus, HorizontalPodAutoscaler, HorizontalPodAutoscalerCondition, HorizontalPodAutoscalerSpec, HorizontalPodAutoscalerStatus, MetricSpec, MetricStatus, ObjectMetricSource, ObjectMetricStatus, PodsMetricSource, PodsMetricStatus, ResourceMetricSource, ResourceMetricStatus } from "./v2beta1";

/** ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export class ContainerResourceMetricSourceHelper extends ResourceTemplate {
    static kind = 'ContainerResourceMetricSource';
    static apiVersion = 'autoscaling/v2beta1';

    container(container: string): ContainerResourceMetricSourceHelper {
        this._template.container = container
        return this
    }

    targetAverageUtilization(targetAverageUtilization: number): ContainerResourceMetricSourceHelper {
        this._template.targetAverageUtilization = targetAverageUtilization
        return this
    }

    targetAverageValue(targetAverageValue: Quantity): ContainerResourceMetricSourceHelper {
        this._template.targetAverageValue = targetAverageValue
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
    static apiVersion = 'autoscaling/v2beta1';

    container(container: string): ContainerResourceMetricStatusHelper {
        this._template.container = container
        return this
    }

    currentAverageUtilization(currentAverageUtilization: number): ContainerResourceMetricStatusHelper {
        this._template.currentAverageUtilization = currentAverageUtilization
        return this
    }

    currentAverageValue(currentAverageValue: Quantity): ContainerResourceMetricStatusHelper {
        this._template.currentAverageValue = currentAverageValue
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
    static apiVersion = 'autoscaling/v2beta1';

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CrossVersionObjectReferenceHelper.kind
        this._template.apiVersion = CrossVersionObjectReferenceHelper.apiVersion
    }
}

/** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set. */
export class ExternalMetricSourceHelper extends ResourceTemplate {
    static kind = 'ExternalMetricSource';
    static apiVersion = 'autoscaling/v2beta1';

    metricName(metricName: string): ExternalMetricSourceHelper {
        this._template.metricName = metricName
        return this
    }

    metricSelector(metricSelector: LabelSelector): ExternalMetricSourceHelper {
        if (!this._template.metricSelector) this._template.metricSelector = []
        this._template.metricSelector = {
            ...this._template.metricSelector,
            ...metricSelector
        }
        return this
    }

    targetAverageValue(targetAverageValue: Quantity): ExternalMetricSourceHelper {
        this._template.targetAverageValue = targetAverageValue
        return this
    }

    targetValue(targetValue: Quantity): ExternalMetricSourceHelper {
        this._template.targetValue = targetValue
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
    static apiVersion = 'autoscaling/v2beta1';

    currentAverageValue(currentAverageValue: Quantity): ExternalMetricStatusHelper {
        this._template.currentAverageValue = currentAverageValue
        return this
    }

    currentValue(currentValue: Quantity): ExternalMetricStatusHelper {
        this._template.currentValue = currentValue
        return this
    }

    metricName(metricName: string): ExternalMetricStatusHelper {
        this._template.metricName = metricName
        return this
    }

    metricSelector(metricSelector: LabelSelector): ExternalMetricStatusHelper {
        if (!this._template.metricSelector) this._template.metricSelector = []
        this._template.metricSelector = {
            ...this._template.metricSelector,
            ...metricSelector
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ExternalMetricStatusHelper.kind
        this._template.apiVersion = ExternalMetricStatusHelper.apiVersion
    }
}

/** HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified. */
export class HorizontalPodAutoscalerHelper extends ResourceTemplate {
    static kind = 'HorizontalPodAutoscaler';
    static apiVersion = 'autoscaling/v2beta1';

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

/** HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point. */
export class HorizontalPodAutoscalerConditionHelper extends ResourceTemplate {
    static kind = 'HorizontalPodAutoscalerCondition';
    static apiVersion = 'autoscaling/v2beta1';

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

/** HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects. */
export class HorizontalPodAutoscalerListHelper extends ResourceTemplate {
    static kind = 'HorizontalPodAutoscalerList';
    static apiVersion = 'autoscaling/v2beta1';

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
    static apiVersion = 'autoscaling/v2beta1';

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
    static apiVersion = 'autoscaling/v2beta1';

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

/** MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once). */
export class MetricSpecHelper extends ResourceTemplate {
    static kind = 'MetricSpec';
    static apiVersion = 'autoscaling/v2beta1';

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
    static apiVersion = 'autoscaling/v2beta1';

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

/** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export class ObjectMetricSourceHelper extends ResourceTemplate {
    static kind = 'ObjectMetricSource';
    static apiVersion = 'autoscaling/v2beta1';

    averageValue(averageValue: Quantity): ObjectMetricSourceHelper {
        this._template.averageValue = averageValue
        return this
    }

    metricName(metricName: string): ObjectMetricSourceHelper {
        this._template.metricName = metricName
        return this
    }

    selector(selector: LabelSelector): ObjectMetricSourceHelper {
        if (!this._template.selector) this._template.selector = []
        this._template.selector = {
            ...this._template.selector,
            ...selector
        }
        return this
    }

    target(target: CrossVersionObjectReference): ObjectMetricSourceHelper {
        if (!this._template.target) this._template.target = []
        this._template.target = {
            ...this._template.target,
            ...target
        }
        return this
    }

    targetValue(targetValue: Quantity): ObjectMetricSourceHelper {
        this._template.targetValue = targetValue
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
    static apiVersion = 'autoscaling/v2beta1';

    averageValue(averageValue: Quantity): ObjectMetricStatusHelper {
        this._template.averageValue = averageValue
        return this
    }

    currentValue(currentValue: Quantity): ObjectMetricStatusHelper {
        this._template.currentValue = currentValue
        return this
    }

    metricName(metricName: string): ObjectMetricStatusHelper {
        this._template.metricName = metricName
        return this
    }

    selector(selector: LabelSelector): ObjectMetricStatusHelper {
        if (!this._template.selector) this._template.selector = []
        this._template.selector = {
            ...this._template.selector,
            ...selector
        }
        return this
    }

    target(target: CrossVersionObjectReference): ObjectMetricStatusHelper {
        if (!this._template.target) this._template.target = []
        this._template.target = {
            ...this._template.target,
            ...target
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
    static apiVersion = 'autoscaling/v2beta1';

    metricName(metricName: string): PodsMetricSourceHelper {
        this._template.metricName = metricName
        return this
    }

    selector(selector: LabelSelector): PodsMetricSourceHelper {
        if (!this._template.selector) this._template.selector = []
        this._template.selector = {
            ...this._template.selector,
            ...selector
        }
        return this
    }

    targetAverageValue(targetAverageValue: Quantity): PodsMetricSourceHelper {
        this._template.targetAverageValue = targetAverageValue
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
    static apiVersion = 'autoscaling/v2beta1';

    currentAverageValue(currentAverageValue: Quantity): PodsMetricStatusHelper {
        this._template.currentAverageValue = currentAverageValue
        return this
    }

    metricName(metricName: string): PodsMetricStatusHelper {
        this._template.metricName = metricName
        return this
    }

    selector(selector: LabelSelector): PodsMetricStatusHelper {
        if (!this._template.selector) this._template.selector = []
        this._template.selector = {
            ...this._template.selector,
            ...selector
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
    static apiVersion = 'autoscaling/v2beta1';

    targetAverageUtilization(targetAverageUtilization: number): ResourceMetricSourceHelper {
        this._template.targetAverageUtilization = targetAverageUtilization
        return this
    }

    targetAverageValue(targetAverageValue: Quantity): ResourceMetricSourceHelper {
        this._template.targetAverageValue = targetAverageValue
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
    static apiVersion = 'autoscaling/v2beta1';

    currentAverageUtilization(currentAverageUtilization: number): ResourceMetricStatusHelper {
        this._template.currentAverageUtilization = currentAverageUtilization
        return this
    }

    currentAverageValue(currentAverageValue: Quantity): ResourceMetricStatusHelper {
        this._template.currentAverageValue = currentAverageValue
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ResourceMetricStatusHelper.kind
        this._template.apiVersion = ResourceMetricStatusHelper.apiVersion
    }
}
