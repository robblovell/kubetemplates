import { ResourceTemplate, Template } from "../resourceTemplate";
import { ControllerRevision, ControllerRevisionList, DaemonSet, DaemonSetCondition, DaemonSetList, DaemonSetSpec, DaemonSetStatus, DaemonSetUpdateStrategy, Deployment, DeploymentCondition, DeploymentList, DeploymentSpec, DeploymentStatus, DeploymentStrategy, ReplicaSet, ReplicaSetCondition, ReplicaSetList, ReplicaSetSpec, ReplicaSetStatus, RollingUpdateDaemonSet, RollingUpdateDeployment, RollingUpdateStatefulSetStrategy, StatefulSet, StatefulSetCondition, StatefulSetList, StatefulSetSpec, StatefulSetStatus, StatefulSetUpdateStrategy } from "./v1";
import { RawExtension } from "../runtime";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { PersistentVolumeClaim, PodTemplateSpec } from "../core/v1";

export interface ControllerRevisionHelper extends ControllerRevision {
    $data(x: any): any;
    $metadata(x: any): any;
    $revision(x: any): any;
}

/** ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers. */
export class ControllerRevisionHelper extends ResourceTemplate implements ControllerRevisionHelper {
    static kind = 'ControllerRevision';
    static apiVersion = 'apps/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ControllerRevisionHelper.kind, ControllerRevisionHelper.apiVersion)
    }

    _data: any;
    get data(): any /*RawExtensionHelper*/ {
        return this._data
    }
    set data(x: any /*RawExtensionHelper*/) {
        this._data = x
    }
    setData(x: any /*RawExtensionHelper*/) {
        this.data = x; return this
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

    _revision: any;
    get revision(): any /*number*/ {
        return this._revision
    }
    set revision(x: any /*number*/) {
        this._revision = x
    }
    setRevision(x: any /*number*/) {
        this.revision = x; return this
    }
}

export interface ControllerRevisionListHelper extends ControllerRevisionList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** ControllerRevisionList is a resource containing a list of ControllerRevision objects. */
export class ControllerRevisionListHelper extends ResourceTemplate implements ControllerRevisionListHelper {
    static kind = 'ControllerRevisionList';
    static apiVersion = 'apps/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ControllerRevisionListHelper.kind, ControllerRevisionListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<ControllerRevision>*/ {
        return this._items
    }
    set items(x: any /*Array<ControllerRevision>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<ControllerRevision>*/) {
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

export interface DaemonSetHelper extends DaemonSet {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** DaemonSet represents the configuration of a daemon set. */
export class DaemonSetHelper extends ResourceTemplate implements DaemonSetHelper {
    static kind = 'DaemonSet';
    static apiVersion = 'apps/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, DaemonSetHelper.kind, DaemonSetHelper.apiVersion)
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
    get spec(): any /*DaemonSetSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*DaemonSetSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*DaemonSetSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*DaemonSetStatusHelper*/ {
        return this._status
    }
    set status(x: any /*DaemonSetStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*DaemonSetStatusHelper*/) {
        this.status = x; return this
    }
}

export interface DaemonSetConditionHelper extends DaemonSetCondition {
    $lastTransitionTime(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** DaemonSetCondition describes the state of a DaemonSet at a certain point. */
export class DaemonSetConditionHelper extends Template implements DaemonSetConditionHelper {
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

export interface DaemonSetListHelper extends DaemonSetList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** DaemonSetList is a collection of daemon sets. */
export class DaemonSetListHelper extends ResourceTemplate implements DaemonSetListHelper {
    static kind = 'DaemonSetList';
    static apiVersion = 'apps/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, DaemonSetListHelper.kind, DaemonSetListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<DaemonSet>*/ {
        return this._items
    }
    set items(x: any /*Array<DaemonSet>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<DaemonSet>*/) {
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

export interface DaemonSetSpecHelper extends DaemonSetSpec {
    $minReadySeconds(x: any): any;
    $revisionHistoryLimit(x: any): any;
    $selector(x: any): any;
    $template(x: any): any;
    $updateStrategy(x: any): any;
}

/** DaemonSetSpec is the specification of a daemon set. */
export class DaemonSetSpecHelper extends Template implements DaemonSetSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _minReadySeconds: any;
    get minReadySeconds(): any /*number*/ {
        return this._minReadySeconds
    }
    set minReadySeconds(x: any /*number*/) {
        this._minReadySeconds = x
    }
    setMinReadySeconds(x: any /*number*/) {
        this.minReadySeconds = x; return this
    }

    _revisionHistoryLimit: any;
    get revisionHistoryLimit(): any /*number*/ {
        return this._revisionHistoryLimit
    }
    set revisionHistoryLimit(x: any /*number*/) {
        this._revisionHistoryLimit = x
    }
    setRevisionHistoryLimit(x: any /*number*/) {
        this.revisionHistoryLimit = x; return this
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

    _template: any;
    get template(): any /*PodTemplateSpecHelper*/ {
        return this._template
    }
    set template(x: any /*PodTemplateSpecHelper*/) {
        this._template = x
    }
    setTemplate(x: any /*PodTemplateSpecHelper*/) {
        this.template = x; return this
    }

    _updateStrategy: any;
    get updateStrategy(): any /*DaemonSetUpdateStrategyHelper*/ {
        return this._updateStrategy
    }
    set updateStrategy(x: any /*DaemonSetUpdateStrategyHelper*/) {
        this._updateStrategy = x
    }
    setUpdateStrategy(x: any /*DaemonSetUpdateStrategyHelper*/) {
        this.updateStrategy = x; return this
    }
}

export interface DaemonSetStatusHelper extends DaemonSetStatus {
    $collisionCount(x: any): any;
    $conditions(x: any): any;
    $currentNumberScheduled(x: any): any;
    $desiredNumberScheduled(x: any): any;
    $numberAvailable(x: any): any;
    $numberMisscheduled(x: any): any;
    $numberReady(x: any): any;
    $numberUnavailable(x: any): any;
    $observedGeneration(x: any): any;
    $updatedNumberScheduled(x: any): any;
}

/** DaemonSetStatus represents the current status of a daemon set. */
export class DaemonSetStatusHelper extends Template implements DaemonSetStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _collisionCount: any;
    get collisionCount(): any /*number*/ {
        return this._collisionCount
    }
    set collisionCount(x: any /*number*/) {
        this._collisionCount = x
    }
    setCollisionCount(x: any /*number*/) {
        this.collisionCount = x; return this
    }

    _conditions: any;
    get conditions(): any /*Array<DaemonSetCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<DaemonSetCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<DaemonSetCondition>*/) {
        this.conditions = x; return this
    }

    _currentNumberScheduled: any;
    get currentNumberScheduled(): any /*number*/ {
        return this._currentNumberScheduled
    }
    set currentNumberScheduled(x: any /*number*/) {
        this._currentNumberScheduled = x
    }
    setCurrentNumberScheduled(x: any /*number*/) {
        this.currentNumberScheduled = x; return this
    }

    _desiredNumberScheduled: any;
    get desiredNumberScheduled(): any /*number*/ {
        return this._desiredNumberScheduled
    }
    set desiredNumberScheduled(x: any /*number*/) {
        this._desiredNumberScheduled = x
    }
    setDesiredNumberScheduled(x: any /*number*/) {
        this.desiredNumberScheduled = x; return this
    }

    _numberAvailable: any;
    get numberAvailable(): any /*number*/ {
        return this._numberAvailable
    }
    set numberAvailable(x: any /*number*/) {
        this._numberAvailable = x
    }
    setNumberAvailable(x: any /*number*/) {
        this.numberAvailable = x; return this
    }

    _numberMisscheduled: any;
    get numberMisscheduled(): any /*number*/ {
        return this._numberMisscheduled
    }
    set numberMisscheduled(x: any /*number*/) {
        this._numberMisscheduled = x
    }
    setNumberMisscheduled(x: any /*number*/) {
        this.numberMisscheduled = x; return this
    }

    _numberReady: any;
    get numberReady(): any /*number*/ {
        return this._numberReady
    }
    set numberReady(x: any /*number*/) {
        this._numberReady = x
    }
    setNumberReady(x: any /*number*/) {
        this.numberReady = x; return this
    }

    _numberUnavailable: any;
    get numberUnavailable(): any /*number*/ {
        return this._numberUnavailable
    }
    set numberUnavailable(x: any /*number*/) {
        this._numberUnavailable = x
    }
    setNumberUnavailable(x: any /*number*/) {
        this.numberUnavailable = x; return this
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

    _updatedNumberScheduled: any;
    get updatedNumberScheduled(): any /*number*/ {
        return this._updatedNumberScheduled
    }
    set updatedNumberScheduled(x: any /*number*/) {
        this._updatedNumberScheduled = x
    }
    setUpdatedNumberScheduled(x: any /*number*/) {
        this.updatedNumberScheduled = x; return this
    }
}

export interface DaemonSetUpdateStrategyHelper extends DaemonSetUpdateStrategy {
    $rollingUpdate(x: any): any;
    $type(x: any): any;
}

/** DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet. */
export class DaemonSetUpdateStrategyHelper extends Template implements DaemonSetUpdateStrategyHelper {
    constructor(obj: any) {
        super(obj)
    }

    _rollingUpdate: any;
    get rollingUpdate(): any /*RollingUpdateDaemonSetHelper*/ {
        return this._rollingUpdate
    }
    set rollingUpdate(x: any /*RollingUpdateDaemonSetHelper*/) {
        this._rollingUpdate = x
    }
    setRollingUpdate(x: any /*RollingUpdateDaemonSetHelper*/) {
        this.rollingUpdate = x; return this
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

export interface DeploymentHelper extends Deployment {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** Deployment enables declarative updates for Pods and ReplicaSets. */
export class DeploymentHelper extends ResourceTemplate implements DeploymentHelper {
    static kind = 'Deployment';
    static apiVersion = 'apps/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, DeploymentHelper.kind, DeploymentHelper.apiVersion)
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
    get spec(): any /*DeploymentSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*DeploymentSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*DeploymentSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*DeploymentStatusHelper*/ {
        return this._status
    }
    set status(x: any /*DeploymentStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*DeploymentStatusHelper*/) {
        this.status = x; return this
    }
}

export interface DeploymentConditionHelper extends DeploymentCondition {
    $lastTransitionTime(x: any): any;
    $lastUpdateTime(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** DeploymentCondition describes the state of a deployment at a certain point. */
export class DeploymentConditionHelper extends Template implements DeploymentConditionHelper {
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

    _lastUpdateTime: any;
    get lastUpdateTime(): any /*Time*/ {
        return this._lastUpdateTime
    }
    set lastUpdateTime(x: any /*Time*/) {
        this._lastUpdateTime = x
    }
    setLastUpdateTime(x: any /*Time*/) {
        this.lastUpdateTime = x; return this
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

export interface DeploymentListHelper extends DeploymentList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** DeploymentList is a list of Deployments. */
export class DeploymentListHelper extends ResourceTemplate implements DeploymentListHelper {
    static kind = 'DeploymentList';
    static apiVersion = 'apps/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, DeploymentListHelper.kind, DeploymentListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<Deployment>*/ {
        return this._items
    }
    set items(x: any /*Array<Deployment>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<Deployment>*/) {
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

export interface DeploymentSpecHelper extends DeploymentSpec {
    $minReadySeconds(x: any): any;
    $paused(x: any): any;
    $progressDeadlineSeconds(x: any): any;
    $replicas(x: any): any;
    $revisionHistoryLimit(x: any): any;
    $selector(x: any): any;
    $strategy(x: any): any;
    $template(x: any): any;
}

/** DeploymentSpec is the specification of the desired behavior of the Deployment. */
export class DeploymentSpecHelper extends Template implements DeploymentSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _minReadySeconds: any;
    get minReadySeconds(): any /*number*/ {
        return this._minReadySeconds
    }
    set minReadySeconds(x: any /*number*/) {
        this._minReadySeconds = x
    }
    setMinReadySeconds(x: any /*number*/) {
        this.minReadySeconds = x; return this
    }

    _paused: any;
    get paused(): any /*boolean*/ {
        return this._paused
    }
    set paused(x: any /*boolean*/) {
        this._paused = x
    }
    setPaused(x: any /*boolean*/) {
        this.paused = x; return this
    }

    _progressDeadlineSeconds: any;
    get progressDeadlineSeconds(): any /*number*/ {
        return this._progressDeadlineSeconds
    }
    set progressDeadlineSeconds(x: any /*number*/) {
        this._progressDeadlineSeconds = x
    }
    setProgressDeadlineSeconds(x: any /*number*/) {
        this.progressDeadlineSeconds = x; return this
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

    _revisionHistoryLimit: any;
    get revisionHistoryLimit(): any /*number*/ {
        return this._revisionHistoryLimit
    }
    set revisionHistoryLimit(x: any /*number*/) {
        this._revisionHistoryLimit = x
    }
    setRevisionHistoryLimit(x: any /*number*/) {
        this.revisionHistoryLimit = x; return this
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

    _strategy: any;
    get strategy(): any /*DeploymentStrategyHelper*/ {
        return this._strategy
    }
    set strategy(x: any /*DeploymentStrategyHelper*/) {
        this._strategy = x
    }
    setStrategy(x: any /*DeploymentStrategyHelper*/) {
        this.strategy = x; return this
    }

    _template: any;
    get template(): any /*PodTemplateSpecHelper*/ {
        return this._template
    }
    set template(x: any /*PodTemplateSpecHelper*/) {
        this._template = x
    }
    setTemplate(x: any /*PodTemplateSpecHelper*/) {
        this.template = x; return this
    }
}

export interface DeploymentStatusHelper extends DeploymentStatus {
    $availableReplicas(x: any): any;
    $collisionCount(x: any): any;
    $conditions(x: any): any;
    $observedGeneration(x: any): any;
    $readyReplicas(x: any): any;
    $replicas(x: any): any;
    $unavailableReplicas(x: any): any;
    $updatedReplicas(x: any): any;
}

/** DeploymentStatus is the most recently observed status of the Deployment. */
export class DeploymentStatusHelper extends Template implements DeploymentStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _availableReplicas: any;
    get availableReplicas(): any /*number*/ {
        return this._availableReplicas
    }
    set availableReplicas(x: any /*number*/) {
        this._availableReplicas = x
    }
    setAvailableReplicas(x: any /*number*/) {
        this.availableReplicas = x; return this
    }

    _collisionCount: any;
    get collisionCount(): any /*number*/ {
        return this._collisionCount
    }
    set collisionCount(x: any /*number*/) {
        this._collisionCount = x
    }
    setCollisionCount(x: any /*number*/) {
        this.collisionCount = x; return this
    }

    _conditions: any;
    get conditions(): any /*Array<DeploymentCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<DeploymentCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<DeploymentCondition>*/) {
        this.conditions = x; return this
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

    _readyReplicas: any;
    get readyReplicas(): any /*number*/ {
        return this._readyReplicas
    }
    set readyReplicas(x: any /*number*/) {
        this._readyReplicas = x
    }
    setReadyReplicas(x: any /*number*/) {
        this.readyReplicas = x; return this
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

    _unavailableReplicas: any;
    get unavailableReplicas(): any /*number*/ {
        return this._unavailableReplicas
    }
    set unavailableReplicas(x: any /*number*/) {
        this._unavailableReplicas = x
    }
    setUnavailableReplicas(x: any /*number*/) {
        this.unavailableReplicas = x; return this
    }

    _updatedReplicas: any;
    get updatedReplicas(): any /*number*/ {
        return this._updatedReplicas
    }
    set updatedReplicas(x: any /*number*/) {
        this._updatedReplicas = x
    }
    setUpdatedReplicas(x: any /*number*/) {
        this.updatedReplicas = x; return this
    }
}

export interface DeploymentStrategyHelper extends DeploymentStrategy {
    $rollingUpdate(x: any): any;
    $type(x: any): any;
}

/** DeploymentStrategy describes how to replace existing pods with new ones. */
export class DeploymentStrategyHelper extends Template implements DeploymentStrategyHelper {
    constructor(obj: any) {
        super(obj)
    }

    _rollingUpdate: any;
    get rollingUpdate(): any /*RollingUpdateDeploymentHelper*/ {
        return this._rollingUpdate
    }
    set rollingUpdate(x: any /*RollingUpdateDeploymentHelper*/) {
        this._rollingUpdate = x
    }
    setRollingUpdate(x: any /*RollingUpdateDeploymentHelper*/) {
        this.rollingUpdate = x; return this
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

export interface ReplicaSetHelper extends ReplicaSet {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** ReplicaSet ensures that a specified number of pod replicas are running at any given time. */
export class ReplicaSetHelper extends ResourceTemplate implements ReplicaSetHelper {
    static kind = 'ReplicaSet';
    static apiVersion = 'apps/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ReplicaSetHelper.kind, ReplicaSetHelper.apiVersion)
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
    get spec(): any /*ReplicaSetSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*ReplicaSetSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*ReplicaSetSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*ReplicaSetStatusHelper*/ {
        return this._status
    }
    set status(x: any /*ReplicaSetStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*ReplicaSetStatusHelper*/) {
        this.status = x; return this
    }
}

export interface ReplicaSetConditionHelper extends ReplicaSetCondition {
    $lastTransitionTime(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** ReplicaSetCondition describes the state of a replica set at a certain point. */
export class ReplicaSetConditionHelper extends Template implements ReplicaSetConditionHelper {
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

export interface ReplicaSetListHelper extends ReplicaSetList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** ReplicaSetList is a collection of ReplicaSets. */
export class ReplicaSetListHelper extends ResourceTemplate implements ReplicaSetListHelper {
    static kind = 'ReplicaSetList';
    static apiVersion = 'apps/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ReplicaSetListHelper.kind, ReplicaSetListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<ReplicaSet>*/ {
        return this._items
    }
    set items(x: any /*Array<ReplicaSet>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<ReplicaSet>*/) {
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

export interface ReplicaSetSpecHelper extends ReplicaSetSpec {
    $minReadySeconds(x: any): any;
    $replicas(x: any): any;
    $selector(x: any): any;
    $template(x: any): any;
}

/** ReplicaSetSpec is the specification of a ReplicaSet. */
export class ReplicaSetSpecHelper extends Template implements ReplicaSetSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _minReadySeconds: any;
    get minReadySeconds(): any /*number*/ {
        return this._minReadySeconds
    }
    set minReadySeconds(x: any /*number*/) {
        this._minReadySeconds = x
    }
    setMinReadySeconds(x: any /*number*/) {
        this.minReadySeconds = x; return this
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
    get selector(): any /*LabelSelectorHelper*/ {
        return this._selector
    }
    set selector(x: any /*LabelSelectorHelper*/) {
        this._selector = x
    }
    setSelector(x: any /*LabelSelectorHelper*/) {
        this.selector = x; return this
    }

    _template: any;
    get template(): any /*PodTemplateSpecHelper*/ {
        return this._template
    }
    set template(x: any /*PodTemplateSpecHelper*/) {
        this._template = x
    }
    setTemplate(x: any /*PodTemplateSpecHelper*/) {
        this.template = x; return this
    }
}

export interface ReplicaSetStatusHelper extends ReplicaSetStatus {
    $availableReplicas(x: any): any;
    $conditions(x: any): any;
    $fullyLabeledReplicas(x: any): any;
    $observedGeneration(x: any): any;
    $readyReplicas(x: any): any;
    $replicas(x: any): any;
}

/** ReplicaSetStatus represents the current status of a ReplicaSet. */
export class ReplicaSetStatusHelper extends Template implements ReplicaSetStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _availableReplicas: any;
    get availableReplicas(): any /*number*/ {
        return this._availableReplicas
    }
    set availableReplicas(x: any /*number*/) {
        this._availableReplicas = x
    }
    setAvailableReplicas(x: any /*number*/) {
        this.availableReplicas = x; return this
    }

    _conditions: any;
    get conditions(): any /*Array<ReplicaSetCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<ReplicaSetCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<ReplicaSetCondition>*/) {
        this.conditions = x; return this
    }

    _fullyLabeledReplicas: any;
    get fullyLabeledReplicas(): any /*number*/ {
        return this._fullyLabeledReplicas
    }
    set fullyLabeledReplicas(x: any /*number*/) {
        this._fullyLabeledReplicas = x
    }
    setFullyLabeledReplicas(x: any /*number*/) {
        this.fullyLabeledReplicas = x; return this
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

    _readyReplicas: any;
    get readyReplicas(): any /*number*/ {
        return this._readyReplicas
    }
    set readyReplicas(x: any /*number*/) {
        this._readyReplicas = x
    }
    setReadyReplicas(x: any /*number*/) {
        this.readyReplicas = x; return this
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

export interface RollingUpdateDaemonSetHelper extends RollingUpdateDaemonSet {
    $maxSurge(x: any): any;
    $maxUnavailable(x: any): any;
}

/** Spec to control the desired behavior of daemon set rolling update. */
export class RollingUpdateDaemonSetHelper extends Template implements RollingUpdateDaemonSetHelper {
    constructor(obj: any) {
        super(obj)
    }

    _maxSurge: any;
    get maxSurge(): any /*number | stringHelper*/ {
        return this._maxSurge
    }
    set maxSurge(x: any /*number | stringHelper*/) {
        this._maxSurge = x
    }
    setMaxSurge(x: any /*number | stringHelper*/) {
        this.maxSurge = x; return this
    }

    _maxUnavailable: any;
    get maxUnavailable(): any /*number | stringHelper*/ {
        return this._maxUnavailable
    }
    set maxUnavailable(x: any /*number | stringHelper*/) {
        this._maxUnavailable = x
    }
    setMaxUnavailable(x: any /*number | stringHelper*/) {
        this.maxUnavailable = x; return this
    }
}

export interface RollingUpdateDeploymentHelper extends RollingUpdateDeployment {
    $maxSurge(x: any): any;
    $maxUnavailable(x: any): any;
}

/** Spec to control the desired behavior of rolling update. */
export class RollingUpdateDeploymentHelper extends Template implements RollingUpdateDeploymentHelper {
    constructor(obj: any) {
        super(obj)
    }

    _maxSurge: any;
    get maxSurge(): any /*number | stringHelper*/ {
        return this._maxSurge
    }
    set maxSurge(x: any /*number | stringHelper*/) {
        this._maxSurge = x
    }
    setMaxSurge(x: any /*number | stringHelper*/) {
        this.maxSurge = x; return this
    }

    _maxUnavailable: any;
    get maxUnavailable(): any /*number | stringHelper*/ {
        return this._maxUnavailable
    }
    set maxUnavailable(x: any /*number | stringHelper*/) {
        this._maxUnavailable = x
    }
    setMaxUnavailable(x: any /*number | stringHelper*/) {
        this.maxUnavailable = x; return this
    }
}

export interface RollingUpdateStatefulSetStrategyHelper extends RollingUpdateStatefulSetStrategy {
    $partition(x: any): any;
}

/** RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType. */
export class RollingUpdateStatefulSetStrategyHelper extends Template implements RollingUpdateStatefulSetStrategyHelper {
    constructor(obj: any) {
        super(obj)
    }

    _partition: any;
    get partition(): any /*number*/ {
        return this._partition
    }
    set partition(x: any /*number*/) {
        this._partition = x
    }
    setPartition(x: any /*number*/) {
        this.partition = x; return this
    }
}

export interface StatefulSetHelper extends StatefulSet {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export class StatefulSetHelper extends ResourceTemplate implements StatefulSetHelper {
    static kind = 'StatefulSet';
    static apiVersion = 'apps/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, StatefulSetHelper.kind, StatefulSetHelper.apiVersion)
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
    get spec(): any /*StatefulSetSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*StatefulSetSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*StatefulSetSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*StatefulSetStatusHelper*/ {
        return this._status
    }
    set status(x: any /*StatefulSetStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*StatefulSetStatusHelper*/) {
        this.status = x; return this
    }
}

export interface StatefulSetConditionHelper extends StatefulSetCondition {
    $lastTransitionTime(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** StatefulSetCondition describes the state of a statefulset at a certain point. */
export class StatefulSetConditionHelper extends Template implements StatefulSetConditionHelper {
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

export interface StatefulSetListHelper extends StatefulSetList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** StatefulSetList is a collection of StatefulSets. */
export class StatefulSetListHelper extends ResourceTemplate implements StatefulSetListHelper {
    static kind = 'StatefulSetList';
    static apiVersion = 'apps/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, StatefulSetListHelper.kind, StatefulSetListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<StatefulSet>*/ {
        return this._items
    }
    set items(x: any /*Array<StatefulSet>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<StatefulSet>*/) {
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

export interface StatefulSetSpecHelper extends StatefulSetSpec {
    $podManagementPolicy(x: any): any;
    $replicas(x: any): any;
    $revisionHistoryLimit(x: any): any;
    $selector(x: any): any;
    $serviceName(x: any): any;
    $template(x: any): any;
    $updateStrategy(x: any): any;
    $volumeClaimTemplates(x: any): any;
}

/** A StatefulSetSpec is the specification of a StatefulSet. */
export class StatefulSetSpecHelper extends Template implements StatefulSetSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _podManagementPolicy: any;
    get podManagementPolicy(): any /*string*/ {
        return this._podManagementPolicy
    }
    set podManagementPolicy(x: any /*string*/) {
        this._podManagementPolicy = x
    }
    setPodManagementPolicy(x: any /*string*/) {
        this.podManagementPolicy = x; return this
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

    _revisionHistoryLimit: any;
    get revisionHistoryLimit(): any /*number*/ {
        return this._revisionHistoryLimit
    }
    set revisionHistoryLimit(x: any /*number*/) {
        this._revisionHistoryLimit = x
    }
    setRevisionHistoryLimit(x: any /*number*/) {
        this.revisionHistoryLimit = x; return this
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

    _serviceName: any;
    get serviceName(): any /*string*/ {
        return this._serviceName
    }
    set serviceName(x: any /*string*/) {
        this._serviceName = x
    }
    setServiceName(x: any /*string*/) {
        this.serviceName = x; return this
    }

    _template: any;
    get template(): any /*PodTemplateSpecHelper*/ {
        return this._template
    }
    set template(x: any /*PodTemplateSpecHelper*/) {
        this._template = x
    }
    setTemplate(x: any /*PodTemplateSpecHelper*/) {
        this.template = x; return this
    }

    _updateStrategy: any;
    get updateStrategy(): any /*StatefulSetUpdateStrategyHelper*/ {
        return this._updateStrategy
    }
    set updateStrategy(x: any /*StatefulSetUpdateStrategyHelper*/) {
        this._updateStrategy = x
    }
    setUpdateStrategy(x: any /*StatefulSetUpdateStrategyHelper*/) {
        this.updateStrategy = x; return this
    }

    _volumeClaimTemplates: any;
    get volumeClaimTemplates(): any /*Array<PersistentVolumeClaim>*/ {
        return this._volumeClaimTemplates
    }
    set volumeClaimTemplates(x: any /*Array<PersistentVolumeClaim>*/) {
        this._volumeClaimTemplates = this.set(this.volumeClaimTemplates, x)
    }
    setVolumeClaimTemplates(x: any /*Array<PersistentVolumeClaim>*/) {
        this.volumeClaimTemplates = x; return this
    }
}

export interface StatefulSetStatusHelper extends StatefulSetStatus {
    $collisionCount(x: any): any;
    $conditions(x: any): any;
    $currentReplicas(x: any): any;
    $currentRevision(x: any): any;
    $observedGeneration(x: any): any;
    $readyReplicas(x: any): any;
    $replicas(x: any): any;
    $updateRevision(x: any): any;
    $updatedReplicas(x: any): any;
}

/** StatefulSetStatus represents the current state of a StatefulSet. */
export class StatefulSetStatusHelper extends Template implements StatefulSetStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _collisionCount: any;
    get collisionCount(): any /*number*/ {
        return this._collisionCount
    }
    set collisionCount(x: any /*number*/) {
        this._collisionCount = x
    }
    setCollisionCount(x: any /*number*/) {
        this.collisionCount = x; return this
    }

    _conditions: any;
    get conditions(): any /*Array<StatefulSetCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<StatefulSetCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<StatefulSetCondition>*/) {
        this.conditions = x; return this
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

    _currentRevision: any;
    get currentRevision(): any /*string*/ {
        return this._currentRevision
    }
    set currentRevision(x: any /*string*/) {
        this._currentRevision = x
    }
    setCurrentRevision(x: any /*string*/) {
        this.currentRevision = x; return this
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

    _readyReplicas: any;
    get readyReplicas(): any /*number*/ {
        return this._readyReplicas
    }
    set readyReplicas(x: any /*number*/) {
        this._readyReplicas = x
    }
    setReadyReplicas(x: any /*number*/) {
        this.readyReplicas = x; return this
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

    _updateRevision: any;
    get updateRevision(): any /*string*/ {
        return this._updateRevision
    }
    set updateRevision(x: any /*string*/) {
        this._updateRevision = x
    }
    setUpdateRevision(x: any /*string*/) {
        this.updateRevision = x; return this
    }

    _updatedReplicas: any;
    get updatedReplicas(): any /*number*/ {
        return this._updatedReplicas
    }
    set updatedReplicas(x: any /*number*/) {
        this._updatedReplicas = x
    }
    setUpdatedReplicas(x: any /*number*/) {
        this.updatedReplicas = x; return this
    }
}

export interface StatefulSetUpdateStrategyHelper extends StatefulSetUpdateStrategy {
    $rollingUpdate(x: any): any;
    $type(x: any): any;
}

/** StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy. */
export class StatefulSetUpdateStrategyHelper extends Template implements StatefulSetUpdateStrategyHelper {
    constructor(obj: any) {
        super(obj)
    }

    _rollingUpdate: any;
    get rollingUpdate(): any /*RollingUpdateStatefulSetStrategyHelper*/ {
        return this._rollingUpdate
    }
    set rollingUpdate(x: any /*RollingUpdateStatefulSetStrategyHelper*/) {
        this._rollingUpdate = x
    }
    setRollingUpdate(x: any /*RollingUpdateStatefulSetStrategyHelper*/) {
        this.rollingUpdate = x; return this
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
