import { ResourceTemplate, Template } from "../resourceTemplate";
import { ControllerRevision, ControllerRevisionList, DaemonSet, DaemonSetCondition, DaemonSetList, DaemonSetSpec, DaemonSetStatus, DaemonSetUpdateStrategy, Deployment, DeploymentCondition, DeploymentList, DeploymentSpec, DeploymentStatus, DeploymentStrategy, ReplicaSet, ReplicaSetCondition, ReplicaSetList, ReplicaSetSpec, ReplicaSetStatus, RollingUpdateDaemonSet, RollingUpdateDeployment, RollingUpdateStatefulSetStrategy, StatefulSet, StatefulSetCondition, StatefulSetList, StatefulSetSpec, StatefulSetStatus, StatefulSetUpdateStrategy } from "./v1";
import { RawExtension } from "../runtime";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { RawExtensionHelper } from "../runtime-helper";
import { LabelSelectorHelper, ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";
import { PersistentVolumeClaim, PodTemplateSpec } from "../core/v1";
import { PodTemplateSpecHelper } from "../core/v1-helper";

export interface ControllerRevisionHelper extends ControllerRevision {
    $data(x: RawExtensionHelper): ControllerRevisionHelper;
    $metadata(x: ObjectMetaHelper): ControllerRevisionHelper;
    $revision(x: number): ControllerRevisionHelper;
}

/** ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers. */
export class ControllerRevisionHelper extends ResourceTemplate implements ControllerRevisionHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "ControllerRevision", "apps/v1")
    }

    _data: RawExtensionHelper;
    get data(): RawExtensionHelper {
        return this._data
    }
    set data(x: RawExtensionHelper) {
        this._data = x
    }
    $data(x: RawExtensionHelper) {
        this.data = x; return this
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

    _revision: number;
    get revision(): number {
        return this._revision
    }
    set revision(x: number) {
        this._revision = x
    }
    $revision(x: number) {
        this.revision = x; return this
    }
}

export interface ControllerRevisionListHelper extends ControllerRevisionList {
    $items(x: Array<ControllerRevision>): ControllerRevisionListHelper;
    $metadata(x: ListMetaHelper): ControllerRevisionListHelper;
}

/** ControllerRevisionList is a resource containing a list of ControllerRevision objects. */
export class ControllerRevisionListHelper extends ResourceTemplate implements ControllerRevisionListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "ControllerRevisionList", "apps/v1")
    }

    _items: Array<ControllerRevision>;
    get items(): Array<ControllerRevision> {
        return this._items
    }
    set items(x: Array<ControllerRevision>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<ControllerRevision>) {
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

export interface DaemonSetHelper extends DaemonSet {
    $metadata(x: ObjectMetaHelper): DaemonSetHelper;
    $spec(x: DaemonSetSpecHelper): DaemonSetHelper;
    $status(x: DaemonSetStatusHelper): DaemonSetHelper;
}

/** DaemonSet represents the configuration of a daemon set. */
export class DaemonSetHelper extends ResourceTemplate implements DaemonSetHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "DaemonSet", "apps/v1")
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

    _spec: DaemonSetSpecHelper;
    get spec(): DaemonSetSpecHelper {
        return this._spec
    }
    set spec(x: DaemonSetSpecHelper) {
        this._spec = x
    }
    $spec(x: DaemonSetSpecHelper) {
        this.spec = x; return this
    }

    _status: DaemonSetStatusHelper;
    get status(): DaemonSetStatusHelper {
        return this._status
    }
    set status(x: DaemonSetStatusHelper) {
        this._status = x
    }
    $status(x: DaemonSetStatusHelper) {
        this.status = x; return this
    }
}

export interface DaemonSetConditionHelper extends DaemonSetCondition {
    $lastTransitionTime(x: Time): DaemonSetConditionHelper;
    $message(x: string): DaemonSetConditionHelper;
    $reason(x: string): DaemonSetConditionHelper;
    $status(x: string): DaemonSetConditionHelper;
    $type(x: string): DaemonSetConditionHelper;
}

/** DaemonSetCondition describes the state of a DaemonSet at a certain point. */
export class DaemonSetConditionHelper extends Template implements DaemonSetConditionHelper {
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

export interface DaemonSetListHelper extends DaemonSetList {
    $items(x: Array<DaemonSet>): DaemonSetListHelper;
    $metadata(x: ListMetaHelper): DaemonSetListHelper;
}

/** DaemonSetList is a collection of daemon sets. */
export class DaemonSetListHelper extends ResourceTemplate implements DaemonSetListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "DaemonSetList", "apps/v1")
    }

    _items: Array<DaemonSet>;
    get items(): Array<DaemonSet> {
        return this._items
    }
    set items(x: Array<DaemonSet>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<DaemonSet>) {
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

export interface DaemonSetSpecHelper extends DaemonSetSpec {
    $minReadySeconds(x: number): DaemonSetSpecHelper;
    $revisionHistoryLimit(x: number): DaemonSetSpecHelper;
    $selector(x: LabelSelectorHelper): DaemonSetSpecHelper;
    $template(x: PodTemplateSpecHelper): DaemonSetSpecHelper;
    $updateStrategy(x: DaemonSetUpdateStrategyHelper): DaemonSetSpecHelper;
}

/** DaemonSetSpec is the specification of a daemon set. */
export class DaemonSetSpecHelper extends Template implements DaemonSetSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _minReadySeconds: number;
    get minReadySeconds(): number {
        return this._minReadySeconds
    }
    set minReadySeconds(x: number) {
        this._minReadySeconds = x
    }
    $minReadySeconds(x: number) {
        this.minReadySeconds = x; return this
    }

    _revisionHistoryLimit: number;
    get revisionHistoryLimit(): number {
        return this._revisionHistoryLimit
    }
    set revisionHistoryLimit(x: number) {
        this._revisionHistoryLimit = x
    }
    $revisionHistoryLimit(x: number) {
        this.revisionHistoryLimit = x; return this
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

    _template: PodTemplateSpecHelper;
    get template(): PodTemplateSpecHelper {
        return this._template
    }
    set template(x: PodTemplateSpecHelper) {
        this._template = x
    }
    $template(x: PodTemplateSpecHelper) {
        this.template = x; return this
    }

    _updateStrategy: DaemonSetUpdateStrategyHelper;
    get updateStrategy(): DaemonSetUpdateStrategyHelper {
        return this._updateStrategy
    }
    set updateStrategy(x: DaemonSetUpdateStrategyHelper) {
        this._updateStrategy = x
    }
    $updateStrategy(x: DaemonSetUpdateStrategyHelper) {
        this.updateStrategy = x; return this
    }
}

export interface DaemonSetStatusHelper extends DaemonSetStatus {
    $collisionCount(x: number): DaemonSetStatusHelper;
    $conditions(x: Array<DaemonSetCondition>): DaemonSetStatusHelper;
    $currentNumberScheduled(x: number): DaemonSetStatusHelper;
    $desiredNumberScheduled(x: number): DaemonSetStatusHelper;
    $numberAvailable(x: number): DaemonSetStatusHelper;
    $numberMisscheduled(x: number): DaemonSetStatusHelper;
    $numberReady(x: number): DaemonSetStatusHelper;
    $numberUnavailable(x: number): DaemonSetStatusHelper;
    $observedGeneration(x: number): DaemonSetStatusHelper;
    $updatedNumberScheduled(x: number): DaemonSetStatusHelper;
}

/** DaemonSetStatus represents the current status of a daemon set. */
export class DaemonSetStatusHelper extends Template implements DaemonSetStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _collisionCount: number;
    get collisionCount(): number {
        return this._collisionCount
    }
    set collisionCount(x: number) {
        this._collisionCount = x
    }
    $collisionCount(x: number) {
        this.collisionCount = x; return this
    }

    _conditions: Array<DaemonSetCondition>;
    get conditions(): Array<DaemonSetCondition> {
        return this._conditions
    }
    set conditions(x: Array<DaemonSetCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $conditions(x: Array<DaemonSetCondition>) {
        this.conditions = x; return this
    }

    _currentNumberScheduled: number;
    get currentNumberScheduled(): number {
        return this._currentNumberScheduled
    }
    set currentNumberScheduled(x: number) {
        this._currentNumberScheduled = x
    }
    $currentNumberScheduled(x: number) {
        this.currentNumberScheduled = x; return this
    }

    _desiredNumberScheduled: number;
    get desiredNumberScheduled(): number {
        return this._desiredNumberScheduled
    }
    set desiredNumberScheduled(x: number) {
        this._desiredNumberScheduled = x
    }
    $desiredNumberScheduled(x: number) {
        this.desiredNumberScheduled = x; return this
    }

    _numberAvailable: number;
    get numberAvailable(): number {
        return this._numberAvailable
    }
    set numberAvailable(x: number) {
        this._numberAvailable = x
    }
    $numberAvailable(x: number) {
        this.numberAvailable = x; return this
    }

    _numberMisscheduled: number;
    get numberMisscheduled(): number {
        return this._numberMisscheduled
    }
    set numberMisscheduled(x: number) {
        this._numberMisscheduled = x
    }
    $numberMisscheduled(x: number) {
        this.numberMisscheduled = x; return this
    }

    _numberReady: number;
    get numberReady(): number {
        return this._numberReady
    }
    set numberReady(x: number) {
        this._numberReady = x
    }
    $numberReady(x: number) {
        this.numberReady = x; return this
    }

    _numberUnavailable: number;
    get numberUnavailable(): number {
        return this._numberUnavailable
    }
    set numberUnavailable(x: number) {
        this._numberUnavailable = x
    }
    $numberUnavailable(x: number) {
        this.numberUnavailable = x; return this
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

    _updatedNumberScheduled: number;
    get updatedNumberScheduled(): number {
        return this._updatedNumberScheduled
    }
    set updatedNumberScheduled(x: number) {
        this._updatedNumberScheduled = x
    }
    $updatedNumberScheduled(x: number) {
        this.updatedNumberScheduled = x; return this
    }
}

export interface DaemonSetUpdateStrategyHelper extends DaemonSetUpdateStrategy {
    $rollingUpdate(x: RollingUpdateDaemonSetHelper): DaemonSetUpdateStrategyHelper;
    $type(x: string): DaemonSetUpdateStrategyHelper;
}

/** DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet. */
export class DaemonSetUpdateStrategyHelper extends Template implements DaemonSetUpdateStrategyHelper {
    constructor(obj: any) {
        super(obj)
    }

    _rollingUpdate: RollingUpdateDaemonSetHelper;
    get rollingUpdate(): RollingUpdateDaemonSetHelper {
        return this._rollingUpdate
    }
    set rollingUpdate(x: RollingUpdateDaemonSetHelper) {
        this._rollingUpdate = x
    }
    $rollingUpdate(x: RollingUpdateDaemonSetHelper) {
        this.rollingUpdate = x; return this
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

export interface DeploymentHelper extends Deployment {
    $metadata(x: ObjectMetaHelper): DeploymentHelper;
    $spec(x: DeploymentSpecHelper): DeploymentHelper;
    $status(x: DeploymentStatusHelper): DeploymentHelper;
}

/** Deployment enables declarative updates for Pods and ReplicaSets. */
export class DeploymentHelper extends ResourceTemplate implements DeploymentHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "Deployment", "apps/v1")
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

    _spec: DeploymentSpecHelper;
    get spec(): DeploymentSpecHelper {
        return this._spec
    }
    set spec(x: DeploymentSpecHelper) {
        this._spec = x
    }
    $spec(x: DeploymentSpecHelper) {
        this.spec = x; return this
    }

    _status: DeploymentStatusHelper;
    get status(): DeploymentStatusHelper {
        return this._status
    }
    set status(x: DeploymentStatusHelper) {
        this._status = x
    }
    $status(x: DeploymentStatusHelper) {
        this.status = x; return this
    }
}

export interface DeploymentConditionHelper extends DeploymentCondition {
    $lastTransitionTime(x: Time): DeploymentConditionHelper;
    $lastUpdateTime(x: Time): DeploymentConditionHelper;
    $message(x: string): DeploymentConditionHelper;
    $reason(x: string): DeploymentConditionHelper;
    $status(x: string): DeploymentConditionHelper;
    $type(x: string): DeploymentConditionHelper;
}

/** DeploymentCondition describes the state of a deployment at a certain point. */
export class DeploymentConditionHelper extends Template implements DeploymentConditionHelper {
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

    _lastUpdateTime: Time;
    get lastUpdateTime(): Time {
        return this._lastUpdateTime
    }
    set lastUpdateTime(x: Time) {
        this._lastUpdateTime = x
    }
    $lastUpdateTime(x: Time) {
        this.lastUpdateTime = x; return this
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

export interface DeploymentListHelper extends DeploymentList {
    $items(x: Array<Deployment>): DeploymentListHelper;
    $metadata(x: ListMetaHelper): DeploymentListHelper;
}

/** DeploymentList is a list of Deployments. */
export class DeploymentListHelper extends ResourceTemplate implements DeploymentListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "DeploymentList", "apps/v1")
    }

    _items: Array<Deployment>;
    get items(): Array<Deployment> {
        return this._items
    }
    set items(x: Array<Deployment>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<Deployment>) {
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

export interface DeploymentSpecHelper extends DeploymentSpec {
    $minReadySeconds(x: number): DeploymentSpecHelper;
    $paused(x: boolean): DeploymentSpecHelper;
    $progressDeadlineSeconds(x: number): DeploymentSpecHelper;
    $replicas(x: number): DeploymentSpecHelper;
    $revisionHistoryLimit(x: number): DeploymentSpecHelper;
    $selector(x: LabelSelectorHelper): DeploymentSpecHelper;
    $strategy(x: DeploymentStrategyHelper): DeploymentSpecHelper;
    $template(x: PodTemplateSpecHelper): DeploymentSpecHelper;
}

/** DeploymentSpec is the specification of the desired behavior of the Deployment. */
export class DeploymentSpecHelper extends Template implements DeploymentSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _minReadySeconds: number;
    get minReadySeconds(): number {
        return this._minReadySeconds
    }
    set minReadySeconds(x: number) {
        this._minReadySeconds = x
    }
    $minReadySeconds(x: number) {
        this.minReadySeconds = x; return this
    }

    _paused: boolean;
    get paused(): boolean {
        return this._paused
    }
    set paused(x: boolean) {
        this._paused = x
    }
    $paused(x: boolean) {
        this.paused = x; return this
    }

    _progressDeadlineSeconds: number;
    get progressDeadlineSeconds(): number {
        return this._progressDeadlineSeconds
    }
    set progressDeadlineSeconds(x: number) {
        this._progressDeadlineSeconds = x
    }
    $progressDeadlineSeconds(x: number) {
        this.progressDeadlineSeconds = x; return this
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

    _revisionHistoryLimit: number;
    get revisionHistoryLimit(): number {
        return this._revisionHistoryLimit
    }
    set revisionHistoryLimit(x: number) {
        this._revisionHistoryLimit = x
    }
    $revisionHistoryLimit(x: number) {
        this.revisionHistoryLimit = x; return this
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

    _strategy: DeploymentStrategyHelper;
    get strategy(): DeploymentStrategyHelper {
        return this._strategy
    }
    set strategy(x: DeploymentStrategyHelper) {
        this._strategy = x
    }
    $strategy(x: DeploymentStrategyHelper) {
        this.strategy = x; return this
    }

    _template: PodTemplateSpecHelper;
    get template(): PodTemplateSpecHelper {
        return this._template
    }
    set template(x: PodTemplateSpecHelper) {
        this._template = x
    }
    $template(x: PodTemplateSpecHelper) {
        this.template = x; return this
    }
}

export interface DeploymentStatusHelper extends DeploymentStatus {
    $availableReplicas(x: number): DeploymentStatusHelper;
    $collisionCount(x: number): DeploymentStatusHelper;
    $conditions(x: Array<DeploymentCondition>): DeploymentStatusHelper;
    $observedGeneration(x: number): DeploymentStatusHelper;
    $readyReplicas(x: number): DeploymentStatusHelper;
    $replicas(x: number): DeploymentStatusHelper;
    $unavailableReplicas(x: number): DeploymentStatusHelper;
    $updatedReplicas(x: number): DeploymentStatusHelper;
}

/** DeploymentStatus is the most recently observed status of the Deployment. */
export class DeploymentStatusHelper extends Template implements DeploymentStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _availableReplicas: number;
    get availableReplicas(): number {
        return this._availableReplicas
    }
    set availableReplicas(x: number) {
        this._availableReplicas = x
    }
    $availableReplicas(x: number) {
        this.availableReplicas = x; return this
    }

    _collisionCount: number;
    get collisionCount(): number {
        return this._collisionCount
    }
    set collisionCount(x: number) {
        this._collisionCount = x
    }
    $collisionCount(x: number) {
        this.collisionCount = x; return this
    }

    _conditions: Array<DeploymentCondition>;
    get conditions(): Array<DeploymentCondition> {
        return this._conditions
    }
    set conditions(x: Array<DeploymentCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $conditions(x: Array<DeploymentCondition>) {
        this.conditions = x; return this
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

    _readyReplicas: number;
    get readyReplicas(): number {
        return this._readyReplicas
    }
    set readyReplicas(x: number) {
        this._readyReplicas = x
    }
    $readyReplicas(x: number) {
        this.readyReplicas = x; return this
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

    _unavailableReplicas: number;
    get unavailableReplicas(): number {
        return this._unavailableReplicas
    }
    set unavailableReplicas(x: number) {
        this._unavailableReplicas = x
    }
    $unavailableReplicas(x: number) {
        this.unavailableReplicas = x; return this
    }

    _updatedReplicas: number;
    get updatedReplicas(): number {
        return this._updatedReplicas
    }
    set updatedReplicas(x: number) {
        this._updatedReplicas = x
    }
    $updatedReplicas(x: number) {
        this.updatedReplicas = x; return this
    }
}

export interface DeploymentStrategyHelper extends DeploymentStrategy {
    $rollingUpdate(x: RollingUpdateDeploymentHelper): DeploymentStrategyHelper;
    $type(x: string): DeploymentStrategyHelper;
}

/** DeploymentStrategy describes how to replace existing pods with new ones. */
export class DeploymentStrategyHelper extends Template implements DeploymentStrategyHelper {
    constructor(obj: any) {
        super(obj)
    }

    _rollingUpdate: RollingUpdateDeploymentHelper;
    get rollingUpdate(): RollingUpdateDeploymentHelper {
        return this._rollingUpdate
    }
    set rollingUpdate(x: RollingUpdateDeploymentHelper) {
        this._rollingUpdate = x
    }
    $rollingUpdate(x: RollingUpdateDeploymentHelper) {
        this.rollingUpdate = x; return this
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

export interface ReplicaSetHelper extends ReplicaSet {
    $metadata(x: ObjectMetaHelper): ReplicaSetHelper;
    $spec(x: ReplicaSetSpecHelper): ReplicaSetHelper;
    $status(x: ReplicaSetStatusHelper): ReplicaSetHelper;
}

/** ReplicaSet ensures that a specified number of pod replicas are running at any given time. */
export class ReplicaSetHelper extends ResourceTemplate implements ReplicaSetHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "ReplicaSet", "apps/v1")
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

    _spec: ReplicaSetSpecHelper;
    get spec(): ReplicaSetSpecHelper {
        return this._spec
    }
    set spec(x: ReplicaSetSpecHelper) {
        this._spec = x
    }
    $spec(x: ReplicaSetSpecHelper) {
        this.spec = x; return this
    }

    _status: ReplicaSetStatusHelper;
    get status(): ReplicaSetStatusHelper {
        return this._status
    }
    set status(x: ReplicaSetStatusHelper) {
        this._status = x
    }
    $status(x: ReplicaSetStatusHelper) {
        this.status = x; return this
    }
}

export interface ReplicaSetConditionHelper extends ReplicaSetCondition {
    $lastTransitionTime(x: Time): ReplicaSetConditionHelper;
    $message(x: string): ReplicaSetConditionHelper;
    $reason(x: string): ReplicaSetConditionHelper;
    $status(x: string): ReplicaSetConditionHelper;
    $type(x: string): ReplicaSetConditionHelper;
}

/** ReplicaSetCondition describes the state of a replica set at a certain point. */
export class ReplicaSetConditionHelper extends Template implements ReplicaSetConditionHelper {
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

export interface ReplicaSetListHelper extends ReplicaSetList {
    $items(x: Array<ReplicaSet>): ReplicaSetListHelper;
    $metadata(x: ListMetaHelper): ReplicaSetListHelper;
}

/** ReplicaSetList is a collection of ReplicaSets. */
export class ReplicaSetListHelper extends ResourceTemplate implements ReplicaSetListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "ReplicaSetList", "apps/v1")
    }

    _items: Array<ReplicaSet>;
    get items(): Array<ReplicaSet> {
        return this._items
    }
    set items(x: Array<ReplicaSet>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<ReplicaSet>) {
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

export interface ReplicaSetSpecHelper extends ReplicaSetSpec {
    $minReadySeconds(x: number): ReplicaSetSpecHelper;
    $replicas(x: number): ReplicaSetSpecHelper;
    $selector(x: LabelSelectorHelper): ReplicaSetSpecHelper;
    $template(x: PodTemplateSpecHelper): ReplicaSetSpecHelper;
}

/** ReplicaSetSpec is the specification of a ReplicaSet. */
export class ReplicaSetSpecHelper extends Template implements ReplicaSetSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _minReadySeconds: number;
    get minReadySeconds(): number {
        return this._minReadySeconds
    }
    set minReadySeconds(x: number) {
        this._minReadySeconds = x
    }
    $minReadySeconds(x: number) {
        this.minReadySeconds = x; return this
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

    _template: PodTemplateSpecHelper;
    get template(): PodTemplateSpecHelper {
        return this._template
    }
    set template(x: PodTemplateSpecHelper) {
        this._template = x
    }
    $template(x: PodTemplateSpecHelper) {
        this.template = x; return this
    }
}

export interface ReplicaSetStatusHelper extends ReplicaSetStatus {
    $availableReplicas(x: number): ReplicaSetStatusHelper;
    $conditions(x: Array<ReplicaSetCondition>): ReplicaSetStatusHelper;
    $fullyLabeledReplicas(x: number): ReplicaSetStatusHelper;
    $observedGeneration(x: number): ReplicaSetStatusHelper;
    $readyReplicas(x: number): ReplicaSetStatusHelper;
    $replicas(x: number): ReplicaSetStatusHelper;
}

/** ReplicaSetStatus represents the current status of a ReplicaSet. */
export class ReplicaSetStatusHelper extends Template implements ReplicaSetStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _availableReplicas: number;
    get availableReplicas(): number {
        return this._availableReplicas
    }
    set availableReplicas(x: number) {
        this._availableReplicas = x
    }
    $availableReplicas(x: number) {
        this.availableReplicas = x; return this
    }

    _conditions: Array<ReplicaSetCondition>;
    get conditions(): Array<ReplicaSetCondition> {
        return this._conditions
    }
    set conditions(x: Array<ReplicaSetCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $conditions(x: Array<ReplicaSetCondition>) {
        this.conditions = x; return this
    }

    _fullyLabeledReplicas: number;
    get fullyLabeledReplicas(): number {
        return this._fullyLabeledReplicas
    }
    set fullyLabeledReplicas(x: number) {
        this._fullyLabeledReplicas = x
    }
    $fullyLabeledReplicas(x: number) {
        this.fullyLabeledReplicas = x; return this
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

    _readyReplicas: number;
    get readyReplicas(): number {
        return this._readyReplicas
    }
    set readyReplicas(x: number) {
        this._readyReplicas = x
    }
    $readyReplicas(x: number) {
        this.readyReplicas = x; return this
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

export interface RollingUpdateDaemonSetHelper extends RollingUpdateDaemonSet {
    $maxSurge(x: number | string): RollingUpdateDaemonSetHelper;
    $maxUnavailable(x: number | string): RollingUpdateDaemonSetHelper;
}

/** Spec to control the desired behavior of daemon set rolling update. */
export class RollingUpdateDaemonSetHelper extends Template implements RollingUpdateDaemonSetHelper {
    constructor(obj: any) {
        super(obj)
    }

    _maxSurge: number | string;
    get maxSurge(): number | string {
        return this._maxSurge
    }
    set maxSurge(x: number | string) {
        this._maxSurge = x
    }
    $maxSurge(x: number | string) {
        this.maxSurge = x; return this
    }

    _maxUnavailable: number | string;
    get maxUnavailable(): number | string {
        return this._maxUnavailable
    }
    set maxUnavailable(x: number | string) {
        this._maxUnavailable = x
    }
    $maxUnavailable(x: number | string) {
        this.maxUnavailable = x; return this
    }
}

export interface RollingUpdateDeploymentHelper extends RollingUpdateDeployment {
    $maxSurge(x: number | string): RollingUpdateDeploymentHelper;
    $maxUnavailable(x: number | string): RollingUpdateDeploymentHelper;
}

/** Spec to control the desired behavior of rolling update. */
export class RollingUpdateDeploymentHelper extends Template implements RollingUpdateDeploymentHelper {
    constructor(obj: any) {
        super(obj)
    }

    _maxSurge: number | string;
    get maxSurge(): number | string {
        return this._maxSurge
    }
    set maxSurge(x: number | string) {
        this._maxSurge = x
    }
    $maxSurge(x: number | string) {
        this.maxSurge = x; return this
    }

    _maxUnavailable: number | string;
    get maxUnavailable(): number | string {
        return this._maxUnavailable
    }
    set maxUnavailable(x: number | string) {
        this._maxUnavailable = x
    }
    $maxUnavailable(x: number | string) {
        this.maxUnavailable = x; return this
    }
}

export interface RollingUpdateStatefulSetStrategyHelper extends RollingUpdateStatefulSetStrategy {
    $partition(x: number): RollingUpdateStatefulSetStrategyHelper;
}

/** RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType. */
export class RollingUpdateStatefulSetStrategyHelper extends Template implements RollingUpdateStatefulSetStrategyHelper {
    constructor(obj: any) {
        super(obj)
    }

    _partition: number;
    get partition(): number {
        return this._partition
    }
    set partition(x: number) {
        this._partition = x
    }
    $partition(x: number) {
        this.partition = x; return this
    }
}

export interface StatefulSetHelper extends StatefulSet {
    $metadata(x: ObjectMetaHelper): StatefulSetHelper;
    $spec(x: StatefulSetSpecHelper): StatefulSetHelper;
    $status(x: StatefulSetStatusHelper): StatefulSetHelper;
}

/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export class StatefulSetHelper extends ResourceTemplate implements StatefulSetHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "StatefulSet", "apps/v1")
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

    _spec: StatefulSetSpecHelper;
    get spec(): StatefulSetSpecHelper {
        return this._spec
    }
    set spec(x: StatefulSetSpecHelper) {
        this._spec = x
    }
    $spec(x: StatefulSetSpecHelper) {
        this.spec = x; return this
    }

    _status: StatefulSetStatusHelper;
    get status(): StatefulSetStatusHelper {
        return this._status
    }
    set status(x: StatefulSetStatusHelper) {
        this._status = x
    }
    $status(x: StatefulSetStatusHelper) {
        this.status = x; return this
    }
}

export interface StatefulSetConditionHelper extends StatefulSetCondition {
    $lastTransitionTime(x: Time): StatefulSetConditionHelper;
    $message(x: string): StatefulSetConditionHelper;
    $reason(x: string): StatefulSetConditionHelper;
    $status(x: string): StatefulSetConditionHelper;
    $type(x: string): StatefulSetConditionHelper;
}

/** StatefulSetCondition describes the state of a statefulset at a certain point. */
export class StatefulSetConditionHelper extends Template implements StatefulSetConditionHelper {
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

export interface StatefulSetListHelper extends StatefulSetList {
    $items(x: Array<StatefulSet>): StatefulSetListHelper;
    $metadata(x: ListMetaHelper): StatefulSetListHelper;
}

/** StatefulSetList is a collection of StatefulSets. */
export class StatefulSetListHelper extends ResourceTemplate implements StatefulSetListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "StatefulSetList", "apps/v1")
    }

    _items: Array<StatefulSet>;
    get items(): Array<StatefulSet> {
        return this._items
    }
    set items(x: Array<StatefulSet>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<StatefulSet>) {
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

export interface StatefulSetSpecHelper extends StatefulSetSpec {
    $podManagementPolicy(x: string): StatefulSetSpecHelper;
    $replicas(x: number): StatefulSetSpecHelper;
    $revisionHistoryLimit(x: number): StatefulSetSpecHelper;
    $selector(x: LabelSelectorHelper): StatefulSetSpecHelper;
    $serviceName(x: string): StatefulSetSpecHelper;
    $template(x: PodTemplateSpecHelper): StatefulSetSpecHelper;
    $updateStrategy(x: StatefulSetUpdateStrategyHelper): StatefulSetSpecHelper;
    $volumeClaimTemplates(x: Array<PersistentVolumeClaim>): StatefulSetSpecHelper;
}

/** A StatefulSetSpec is the specification of a StatefulSet. */
export class StatefulSetSpecHelper extends Template implements StatefulSetSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _podManagementPolicy: string;
    get podManagementPolicy(): string {
        return this._podManagementPolicy
    }
    set podManagementPolicy(x: string) {
        this._podManagementPolicy = x
    }
    $podManagementPolicy(x: string) {
        this.podManagementPolicy = x; return this
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

    _revisionHistoryLimit: number;
    get revisionHistoryLimit(): number {
        return this._revisionHistoryLimit
    }
    set revisionHistoryLimit(x: number) {
        this._revisionHistoryLimit = x
    }
    $revisionHistoryLimit(x: number) {
        this.revisionHistoryLimit = x; return this
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

    _serviceName: string;
    get serviceName(): string {
        return this._serviceName
    }
    set serviceName(x: string) {
        this._serviceName = x
    }
    $serviceName(x: string) {
        this.serviceName = x; return this
    }

    _template: PodTemplateSpecHelper;
    get template(): PodTemplateSpecHelper {
        return this._template
    }
    set template(x: PodTemplateSpecHelper) {
        this._template = x
    }
    $template(x: PodTemplateSpecHelper) {
        this.template = x; return this
    }

    _updateStrategy: StatefulSetUpdateStrategyHelper;
    get updateStrategy(): StatefulSetUpdateStrategyHelper {
        return this._updateStrategy
    }
    set updateStrategy(x: StatefulSetUpdateStrategyHelper) {
        this._updateStrategy = x
    }
    $updateStrategy(x: StatefulSetUpdateStrategyHelper) {
        this.updateStrategy = x; return this
    }

    _volumeClaimTemplates: Array<PersistentVolumeClaim>;
    get volumeClaimTemplates(): Array<PersistentVolumeClaim> {
        return this._volumeClaimTemplates
    }
    set volumeClaimTemplates(x: Array<PersistentVolumeClaim>) {
        this._volumeClaimTemplates = this.set(this.volumeClaimTemplates, x)
    }
    $volumeClaimTemplates(x: Array<PersistentVolumeClaim>) {
        this.volumeClaimTemplates = x; return this
    }
}

export interface StatefulSetStatusHelper extends StatefulSetStatus {
    $collisionCount(x: number): StatefulSetStatusHelper;
    $conditions(x: Array<StatefulSetCondition>): StatefulSetStatusHelper;
    $currentReplicas(x: number): StatefulSetStatusHelper;
    $currentRevision(x: string): StatefulSetStatusHelper;
    $observedGeneration(x: number): StatefulSetStatusHelper;
    $readyReplicas(x: number): StatefulSetStatusHelper;
    $replicas(x: number): StatefulSetStatusHelper;
    $updateRevision(x: string): StatefulSetStatusHelper;
    $updatedReplicas(x: number): StatefulSetStatusHelper;
}

/** StatefulSetStatus represents the current state of a StatefulSet. */
export class StatefulSetStatusHelper extends Template implements StatefulSetStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _collisionCount: number;
    get collisionCount(): number {
        return this._collisionCount
    }
    set collisionCount(x: number) {
        this._collisionCount = x
    }
    $collisionCount(x: number) {
        this.collisionCount = x; return this
    }

    _conditions: Array<StatefulSetCondition>;
    get conditions(): Array<StatefulSetCondition> {
        return this._conditions
    }
    set conditions(x: Array<StatefulSetCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $conditions(x: Array<StatefulSetCondition>) {
        this.conditions = x; return this
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

    _currentRevision: string;
    get currentRevision(): string {
        return this._currentRevision
    }
    set currentRevision(x: string) {
        this._currentRevision = x
    }
    $currentRevision(x: string) {
        this.currentRevision = x; return this
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

    _readyReplicas: number;
    get readyReplicas(): number {
        return this._readyReplicas
    }
    set readyReplicas(x: number) {
        this._readyReplicas = x
    }
    $readyReplicas(x: number) {
        this.readyReplicas = x; return this
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

    _updateRevision: string;
    get updateRevision(): string {
        return this._updateRevision
    }
    set updateRevision(x: string) {
        this._updateRevision = x
    }
    $updateRevision(x: string) {
        this.updateRevision = x; return this
    }

    _updatedReplicas: number;
    get updatedReplicas(): number {
        return this._updatedReplicas
    }
    set updatedReplicas(x: number) {
        this._updatedReplicas = x
    }
    $updatedReplicas(x: number) {
        this.updatedReplicas = x; return this
    }
}

export interface StatefulSetUpdateStrategyHelper extends StatefulSetUpdateStrategy {
    $rollingUpdate(x: RollingUpdateStatefulSetStrategyHelper): StatefulSetUpdateStrategyHelper;
    $type(x: string): StatefulSetUpdateStrategyHelper;
}

/** StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy. */
export class StatefulSetUpdateStrategyHelper extends Template implements StatefulSetUpdateStrategyHelper {
    constructor(obj: any) {
        super(obj)
    }

    _rollingUpdate: RollingUpdateStatefulSetStrategyHelper;
    get rollingUpdate(): RollingUpdateStatefulSetStrategyHelper {
        return this._rollingUpdate
    }
    set rollingUpdate(x: RollingUpdateStatefulSetStrategyHelper) {
        this._rollingUpdate = x
    }
    $rollingUpdate(x: RollingUpdateStatefulSetStrategyHelper) {
        this.rollingUpdate = x; return this
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
