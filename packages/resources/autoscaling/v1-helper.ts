import { ResourceTemplate, Template } from "../resourceTemplate";
import { CrossVersionObjectReference, HorizontalPodAutoscaler, HorizontalPodAutoscalerList, HorizontalPodAutoscalerSpec, HorizontalPodAutoscalerStatus, Scale, ScaleSpec, ScaleStatus } from "./v1";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";

export interface CrossVersionObjectReferenceHelper extends CrossVersionObjectReference {
}

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export class CrossVersionObjectReferenceHelper extends Template implements CrossVersionObjectReferenceHelper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface HorizontalPodAutoscalerHelper extends HorizontalPodAutoscaler {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** configuration of a horizontal pod autoscaler. */
export class HorizontalPodAutoscalerHelper extends ResourceTemplate implements HorizontalPodAutoscalerHelper {
    static kind = 'HorizontalPodAutoscaler';
    static apiVersion = 'autoscaling/v1';

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

export interface HorizontalPodAutoscalerListHelper extends HorizontalPodAutoscalerList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** list of horizontal pod autoscaler objects. */
export class HorizontalPodAutoscalerListHelper extends ResourceTemplate implements HorizontalPodAutoscalerListHelper {
    static kind = 'HorizontalPodAutoscalerList';
    static apiVersion = 'autoscaling/v1';

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
    $minReplicas(x: any): any;
    $scaleTargetRef(x: any): any;
    $targetCPUUtilizationPercentage(x: any): any;
}

/** specification of a horizontal pod autoscaler. */
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

    _targetCPUUtilizationPercentage: any;
    get targetCPUUtilizationPercentage(): any /*number*/ {
        return this._targetCPUUtilizationPercentage
    }
    set targetCPUUtilizationPercentage(x: any /*number*/) {
        this._targetCPUUtilizationPercentage = x
    }
    setTargetCPUUtilizationPercentage(x: any /*number*/) {
        this.targetCPUUtilizationPercentage = x; return this
    }
}

export interface HorizontalPodAutoscalerStatusHelper extends HorizontalPodAutoscalerStatus {
    $currentCPUUtilizationPercentage(x: any): any;
    $currentReplicas(x: any): any;
    $desiredReplicas(x: any): any;
    $lastScaleTime(x: any): any;
    $observedGeneration(x: any): any;
}

/** current status of a horizontal pod autoscaler */
export class HorizontalPodAutoscalerStatusHelper extends Template implements HorizontalPodAutoscalerStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _currentCPUUtilizationPercentage: any;
    get currentCPUUtilizationPercentage(): any /*number*/ {
        return this._currentCPUUtilizationPercentage
    }
    set currentCPUUtilizationPercentage(x: any /*number*/) {
        this._currentCPUUtilizationPercentage = x
    }
    setCurrentCPUUtilizationPercentage(x: any /*number*/) {
        this.currentCPUUtilizationPercentage = x; return this
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

export interface ScaleHelper extends Scale {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** Scale represents a scaling request for a resource. */
export class ScaleHelper extends ResourceTemplate implements ScaleHelper {
    static kind = 'Scale';
    static apiVersion = 'autoscaling/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ScaleHelper.kind, ScaleHelper.apiVersion)
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
    get spec(): any /*ScaleSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*ScaleSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*ScaleSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*ScaleStatusHelper*/ {
        return this._status
    }
    set status(x: any /*ScaleStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*ScaleStatusHelper*/) {
        this.status = x; return this
    }
}

export interface ScaleSpecHelper extends ScaleSpec {
    $replicas(x: any): any;
}

/** ScaleSpec describes the attributes of a scale subresource. */
export class ScaleSpecHelper extends Template implements ScaleSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _replicas: any;
    get replicas(): any /*number*/ {
        return this._replicas
    }
    set replicas(x: any /*number*/) {
        this._replicas = x
    }
    setReplicas(x: any /*number*/) {
        this.replicas = x; return this
    }
}

export interface ScaleStatusHelper extends ScaleStatus {
    $replicas(x: any): any;
    $selector(x: any): any;
}

/** ScaleStatus represents the current status of a scale subresource. */
export class ScaleStatusHelper extends Template implements ScaleStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _replicas: any;
    get replicas(): any /*number*/ {
        return this._replicas
    }
    set replicas(x: any /*number*/) {
        this._replicas = x
    }
    setReplicas(x: any /*number*/) {
        this.replicas = x; return this
    }

    _selector: any;
    get selector(): any /*string*/ {
        return this._selector
    }
    set selector(x: any /*string*/) {
        this._selector = x
    }
    setSelector(x: any /*string*/) {
        this.selector = x; return this
    }
}
