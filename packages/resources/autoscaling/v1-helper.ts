import { ResourceTemplate } from "../resourceTemplate";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";
import { CrossVersionObjectReference, HorizontalPodAutoscaler, HorizontalPodAutoscalerSpec, HorizontalPodAutoscalerStatus, ScaleSpec, ScaleStatus } from "./v1";

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export class CrossVersionObjectReferenceHelper extends ResourceTemplate {
    static kind = 'CrossVersionObjectReference';
    static apiVersion = 'autoscaling/v1';

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CrossVersionObjectReferenceHelper.kind
        this._template.apiVersion = CrossVersionObjectReferenceHelper.apiVersion
    }
}

/** configuration of a horizontal pod autoscaler. */
export class HorizontalPodAutoscalerHelper extends ResourceTemplate {
    static kind = 'HorizontalPodAutoscaler';
    static apiVersion = 'autoscaling/v1';

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

/** list of horizontal pod autoscaler objects. */
export class HorizontalPodAutoscalerListHelper extends ResourceTemplate {
    static kind = 'HorizontalPodAutoscalerList';
    static apiVersion = 'autoscaling/v1';

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

/** specification of a horizontal pod autoscaler. */
export class HorizontalPodAutoscalerSpecHelper extends ResourceTemplate {
    static kind = 'HorizontalPodAutoscalerSpec';
    static apiVersion = 'autoscaling/v1';

    maxReplicas(maxReplicas: number): HorizontalPodAutoscalerSpecHelper {
        this._template.maxReplicas = maxReplicas
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

    targetCPUUtilizationPercentage(targetCPUUtilizationPercentage: number): HorizontalPodAutoscalerSpecHelper {
        this._template.targetCPUUtilizationPercentage = targetCPUUtilizationPercentage
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HorizontalPodAutoscalerSpecHelper.kind
        this._template.apiVersion = HorizontalPodAutoscalerSpecHelper.apiVersion
    }
}

/** current status of a horizontal pod autoscaler */
export class HorizontalPodAutoscalerStatusHelper extends ResourceTemplate {
    static kind = 'HorizontalPodAutoscalerStatus';
    static apiVersion = 'autoscaling/v1';

    currentCPUUtilizationPercentage(currentCPUUtilizationPercentage: number): HorizontalPodAutoscalerStatusHelper {
        this._template.currentCPUUtilizationPercentage = currentCPUUtilizationPercentage
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

/** Scale represents a scaling request for a resource. */
export class ScaleHelper extends ResourceTemplate {
    static kind = 'Scale';
    static apiVersion = 'autoscaling/v1';

    metadata(metadata: ObjectMeta): ScaleHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: ScaleSpec): ScaleHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: ScaleStatus): ScaleHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ScaleHelper.kind
        this._template.apiVersion = ScaleHelper.apiVersion
    }
}

/** ScaleSpec describes the attributes of a scale subresource. */
export class ScaleSpecHelper extends ResourceTemplate {
    static kind = 'ScaleSpec';
    static apiVersion = 'autoscaling/v1';

    replicas(replicas: number): ScaleSpecHelper {
        this._template.replicas = replicas
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ScaleSpecHelper.kind
        this._template.apiVersion = ScaleSpecHelper.apiVersion
    }
}

/** ScaleStatus represents the current status of a scale subresource. */
export class ScaleStatusHelper extends ResourceTemplate {
    static kind = 'ScaleStatus';
    static apiVersion = 'autoscaling/v1';

    replicas(replicas: number): ScaleStatusHelper {
        this._template.replicas = replicas
        return this
    }

    selector(selector: string): ScaleStatusHelper {
        this._template.selector = selector
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ScaleStatusHelper.kind
        this._template.apiVersion = ScaleStatusHelper.apiVersion
    }
}
