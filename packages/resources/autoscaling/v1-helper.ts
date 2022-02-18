import { ResourceTemplate, Template } from "../resourceTemplate";
import { CrossVersionObjectReference, HorizontalPodAutoscaler, HorizontalPodAutoscalerList, HorizontalPodAutoscalerSpec, HorizontalPodAutoscalerStatus, Scale, ScaleSpec, ScaleStatus } from "./v1";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";
import { ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";

export interface CrossVersionObjectReferenceHelper extends CrossVersionObjectReference {
}

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export class CrossVersionObjectReferenceHelper extends Template implements CrossVersionObjectReferenceHelper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface HorizontalPodAutoscalerHelper extends HorizontalPodAutoscaler {
    $metadata(x: ObjectMetaHelper): HorizontalPodAutoscalerHelper;
    $spec(x: HorizontalPodAutoscalerSpecHelper): HorizontalPodAutoscalerHelper;
    $status(x: HorizontalPodAutoscalerStatusHelper): HorizontalPodAutoscalerHelper;
}

/** configuration of a horizontal pod autoscaler. */
export class HorizontalPodAutoscalerHelper extends ResourceTemplate implements HorizontalPodAutoscalerHelper {
    static kind = 'HorizontalPodAutoscaler';
    static apiVersion = 'autoscaling/v1';

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

export interface HorizontalPodAutoscalerListHelper extends HorizontalPodAutoscalerList {
    $items(x: Array<HorizontalPodAutoscaler>): HorizontalPodAutoscalerListHelper;
    $metadata(x: ListMetaHelper): HorizontalPodAutoscalerListHelper;
}

/** list of horizontal pod autoscaler objects. */
export class HorizontalPodAutoscalerListHelper extends ResourceTemplate implements HorizontalPodAutoscalerListHelper {
    static kind = 'HorizontalPodAutoscalerList';
    static apiVersion = 'autoscaling/v1';

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
    $maxReplicas(x: number): HorizontalPodAutoscalerSpecHelper;
    $minReplicas(x: number): HorizontalPodAutoscalerSpecHelper;
    $scaleTargetRef(x: CrossVersionObjectReferenceHelper): HorizontalPodAutoscalerSpecHelper;
    $targetCPUUtilizationPercentage(x: number): HorizontalPodAutoscalerSpecHelper;
}

/** specification of a horizontal pod autoscaler. */
export class HorizontalPodAutoscalerSpecHelper extends Template implements HorizontalPodAutoscalerSpecHelper {
    constructor(obj: any) {
        super(obj)
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

    _targetCPUUtilizationPercentage: number;
    get targetCPUUtilizationPercentage(): number {
        return this._targetCPUUtilizationPercentage
    }
    set targetCPUUtilizationPercentage(x: number) {
        this._targetCPUUtilizationPercentage = x
    }
    $targetCPUUtilizationPercentage(x: number) {
        this.targetCPUUtilizationPercentage = x; return this
    }
}

export interface HorizontalPodAutoscalerStatusHelper extends HorizontalPodAutoscalerStatus {
    $currentCPUUtilizationPercentage(x: number): HorizontalPodAutoscalerStatusHelper;
    $currentReplicas(x: number): HorizontalPodAutoscalerStatusHelper;
    $desiredReplicas(x: number): HorizontalPodAutoscalerStatusHelper;
    $lastScaleTime(x: Time): HorizontalPodAutoscalerStatusHelper;
    $observedGeneration(x: number): HorizontalPodAutoscalerStatusHelper;
}

/** current status of a horizontal pod autoscaler */
export class HorizontalPodAutoscalerStatusHelper extends Template implements HorizontalPodAutoscalerStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _currentCPUUtilizationPercentage: number;
    get currentCPUUtilizationPercentage(): number {
        return this._currentCPUUtilizationPercentage
    }
    set currentCPUUtilizationPercentage(x: number) {
        this._currentCPUUtilizationPercentage = x
    }
    $currentCPUUtilizationPercentage(x: number) {
        this.currentCPUUtilizationPercentage = x; return this
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

export interface ScaleHelper extends Scale {
    $metadata(x: ObjectMetaHelper): ScaleHelper;
    $spec(x: ScaleSpecHelper): ScaleHelper;
    $status(x: ScaleStatusHelper): ScaleHelper;
}

/** Scale represents a scaling request for a resource. */
export class ScaleHelper extends ResourceTemplate implements ScaleHelper {
    static kind = 'Scale';
    static apiVersion = 'autoscaling/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ScaleHelper.kind, ScaleHelper.apiVersion)
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

    _spec: ScaleSpecHelper;
    get spec(): ScaleSpecHelper {
        return this._spec
    }
    set spec(x: ScaleSpecHelper) {
        this._spec = x
    }
    $spec(x: ScaleSpecHelper) {
        this.spec = x; return this
    }

    _status: ScaleStatusHelper;
    get status(): ScaleStatusHelper {
        return this._status
    }
    set status(x: ScaleStatusHelper) {
        this._status = x
    }
    $status(x: ScaleStatusHelper) {
        this.status = x; return this
    }
}

export interface ScaleSpecHelper extends ScaleSpec {
    $replicas(x: number): ScaleSpecHelper;
}

/** ScaleSpec describes the attributes of a scale subresource. */
export class ScaleSpecHelper extends Template implements ScaleSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _replicas: number;
    get replicas(): number {
        return this._replicas
    }
    set replicas(x: number) {
        this._replicas = x
    }
    $replicas(x: number) {
        this.replicas = x; return this
    }
}

export interface ScaleStatusHelper extends ScaleStatus {
    $replicas(x: number): ScaleStatusHelper;
    $selector(x: string): ScaleStatusHelper;
}

/** ScaleStatus represents the current status of a scale subresource. */
export class ScaleStatusHelper extends Template implements ScaleStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _replicas: number;
    get replicas(): number {
        return this._replicas
    }
    set replicas(x: number) {
        this._replicas = x
    }
    $replicas(x: number) {
        this.replicas = x; return this
    }

    _selector: string;
    get selector(): string {
        return this._selector
    }
    set selector(x: string) {
        this._selector = x
    }
    $selector(x: string) {
        this.selector = x; return this
    }
}
