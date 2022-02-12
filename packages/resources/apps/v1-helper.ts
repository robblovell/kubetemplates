import { ResourceTemplate } from "../resourceTemplate";
import { RawExtension } from "../runtime";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { ControllerRevision, DaemonSet, DaemonSetCondition, DaemonSetSpec, DaemonSetStatus, DaemonSetUpdateStrategy, Deployment, DeploymentCondition, DeploymentSpec, DeploymentStatus, DeploymentStrategy, ReplicaSet, ReplicaSetCondition, ReplicaSetSpec, ReplicaSetStatus, RollingUpdateDaemonSet, RollingUpdateDeployment, RollingUpdateStatefulSetStrategy, StatefulSet, StatefulSetCondition, StatefulSetSpec, StatefulSetStatus, StatefulSetUpdateStrategy } from "./v1";
import { PersistentVolumeClaim, PodTemplateSpec } from "../core/v1";

/** ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers. */
export class ControllerRevisionHelper extends ResourceTemplate {
    static kind = 'ControllerRevision';
    static apiVersion = 'apps/v1';

    data(data: RawExtension): ControllerRevisionHelper {
        if (!this._template.data) this._template.data = []
        this._template.data = {
            ...this._template.data,
            ...data
        }
        return this
    }

    metadata(metadata: ObjectMeta): ControllerRevisionHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    revision(revision: number): ControllerRevisionHelper {
        this._template.revision = revision
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ControllerRevisionHelper.kind
        this._template.apiVersion = ControllerRevisionHelper.apiVersion
    }
}

/** ControllerRevisionList is a resource containing a list of ControllerRevision objects. */
export class ControllerRevisionListHelper extends ResourceTemplate {
    static kind = 'ControllerRevisionList';
    static apiVersion = 'apps/v1';

    items(items: Array<ControllerRevision>): ControllerRevisionListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): ControllerRevisionListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ControllerRevisionListHelper.kind
        this._template.apiVersion = ControllerRevisionListHelper.apiVersion
    }
}

/** DaemonSet represents the configuration of a daemon set. */
export class DaemonSetHelper extends ResourceTemplate {
    static kind = 'DaemonSet';
    static apiVersion = 'apps/v1';

    metadata(metadata: ObjectMeta): DaemonSetHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: DaemonSetSpec): DaemonSetHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: DaemonSetStatus): DaemonSetHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DaemonSetHelper.kind
        this._template.apiVersion = DaemonSetHelper.apiVersion
    }
}

/** DaemonSetCondition describes the state of a DaemonSet at a certain point. */
export class DaemonSetConditionHelper extends ResourceTemplate {
    static kind = 'DaemonSetCondition';
    static apiVersion = 'apps/v1';

    lastTransitionTime(lastTransitionTime: Time): DaemonSetConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    message(message: string): DaemonSetConditionHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): DaemonSetConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): DaemonSetConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): DaemonSetConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DaemonSetConditionHelper.kind
        this._template.apiVersion = DaemonSetConditionHelper.apiVersion
    }
}

/** DaemonSetList is a collection of daemon sets. */
export class DaemonSetListHelper extends ResourceTemplate {
    static kind = 'DaemonSetList';
    static apiVersion = 'apps/v1';

    items(items: Array<DaemonSet>): DaemonSetListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): DaemonSetListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DaemonSetListHelper.kind
        this._template.apiVersion = DaemonSetListHelper.apiVersion
    }
}

/** DaemonSetSpec is the specification of a daemon set. */
export class DaemonSetSpecHelper extends ResourceTemplate {
    static kind = 'DaemonSetSpec';
    static apiVersion = 'apps/v1';

    minReadySeconds(minReadySeconds: number): DaemonSetSpecHelper {
        this._template.minReadySeconds = minReadySeconds
        return this
    }

    revisionHistoryLimit(revisionHistoryLimit: number): DaemonSetSpecHelper {
        this._template.revisionHistoryLimit = revisionHistoryLimit
        return this
    }

    selector(selector: LabelSelector): DaemonSetSpecHelper {
        if (!this._template.selector) this._template.selector = []
        this._template.selector = {
            ...this._template.selector,
            ...selector
        }
        return this
    }

    template(template: PodTemplateSpec): DaemonSetSpecHelper {
        if (!this._template.template) this._template.template = []
        this._template.template = {
            ...this._template.template,
            ...template
        }
        return this
    }

    updateStrategy(updateStrategy: DaemonSetUpdateStrategy): DaemonSetSpecHelper {
        if (!this._template.updateStrategy) this._template.updateStrategy = []
        this._template.updateStrategy = {
            ...this._template.updateStrategy,
            ...updateStrategy
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DaemonSetSpecHelper.kind
        this._template.apiVersion = DaemonSetSpecHelper.apiVersion
    }
}

/** DaemonSetStatus represents the current status of a daemon set. */
export class DaemonSetStatusHelper extends ResourceTemplate {
    static kind = 'DaemonSetStatus';
    static apiVersion = 'apps/v1';

    collisionCount(collisionCount: number): DaemonSetStatusHelper {
        this._template.collisionCount = collisionCount
        return this
    }

    conditions(conditions: Array<DaemonSetCondition>): DaemonSetStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    currentNumberScheduled(currentNumberScheduled: number): DaemonSetStatusHelper {
        this._template.currentNumberScheduled = currentNumberScheduled
        return this
    }

    desiredNumberScheduled(desiredNumberScheduled: number): DaemonSetStatusHelper {
        this._template.desiredNumberScheduled = desiredNumberScheduled
        return this
    }

    numberAvailable(numberAvailable: number): DaemonSetStatusHelper {
        this._template.numberAvailable = numberAvailable
        return this
    }

    numberMisscheduled(numberMisscheduled: number): DaemonSetStatusHelper {
        this._template.numberMisscheduled = numberMisscheduled
        return this
    }

    numberReady(numberReady: number): DaemonSetStatusHelper {
        this._template.numberReady = numberReady
        return this
    }

    numberUnavailable(numberUnavailable: number): DaemonSetStatusHelper {
        this._template.numberUnavailable = numberUnavailable
        return this
    }

    observedGeneration(observedGeneration: number): DaemonSetStatusHelper {
        this._template.observedGeneration = observedGeneration
        return this
    }

    updatedNumberScheduled(updatedNumberScheduled: number): DaemonSetStatusHelper {
        this._template.updatedNumberScheduled = updatedNumberScheduled
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DaemonSetStatusHelper.kind
        this._template.apiVersion = DaemonSetStatusHelper.apiVersion
    }
}

/** DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet. */
export class DaemonSetUpdateStrategyHelper extends ResourceTemplate {
    static kind = 'DaemonSetUpdateStrategy';
    static apiVersion = 'apps/v1';

    rollingUpdate(rollingUpdate: RollingUpdateDaemonSet): DaemonSetUpdateStrategyHelper {
        if (!this._template.rollingUpdate) this._template.rollingUpdate = []
        this._template.rollingUpdate = {
            ...this._template.rollingUpdate,
            ...rollingUpdate
        }
        return this
    }

    type(type: string): DaemonSetUpdateStrategyHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DaemonSetUpdateStrategyHelper.kind
        this._template.apiVersion = DaemonSetUpdateStrategyHelper.apiVersion
    }
}

/** Deployment enables declarative updates for Pods and ReplicaSets. */
export class DeploymentHelper extends ResourceTemplate {
    static kind = 'Deployment';
    static apiVersion = 'apps/v1';

    metadata(metadata: ObjectMeta): DeploymentHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: DeploymentSpec): DeploymentHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: DeploymentStatus): DeploymentHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DeploymentHelper.kind
        this._template.apiVersion = DeploymentHelper.apiVersion
    }
}

/** DeploymentCondition describes the state of a deployment at a certain point. */
export class DeploymentConditionHelper extends ResourceTemplate {
    static kind = 'DeploymentCondition';
    static apiVersion = 'apps/v1';

    lastTransitionTime(lastTransitionTime: Time): DeploymentConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    lastUpdateTime(lastUpdateTime: Time): DeploymentConditionHelper {
        this._template.lastUpdateTime = lastUpdateTime
        return this
    }

    message(message: string): DeploymentConditionHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): DeploymentConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): DeploymentConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): DeploymentConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DeploymentConditionHelper.kind
        this._template.apiVersion = DeploymentConditionHelper.apiVersion
    }
}

/** DeploymentList is a list of Deployments. */
export class DeploymentListHelper extends ResourceTemplate {
    static kind = 'DeploymentList';
    static apiVersion = 'apps/v1';

    items(items: Array<Deployment>): DeploymentListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): DeploymentListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DeploymentListHelper.kind
        this._template.apiVersion = DeploymentListHelper.apiVersion
    }
}

/** DeploymentSpec is the specification of the desired behavior of the Deployment. */
export class DeploymentSpecHelper extends ResourceTemplate {
    static kind = 'DeploymentSpec';
    static apiVersion = 'apps/v1';

    minReadySeconds(minReadySeconds: number): DeploymentSpecHelper {
        this._template.minReadySeconds = minReadySeconds
        return this
    }

    paused(paused: boolean): DeploymentSpecHelper {
        this._template.paused = paused
        return this
    }

    progressDeadlineSeconds(progressDeadlineSeconds: number): DeploymentSpecHelper {
        this._template.progressDeadlineSeconds = progressDeadlineSeconds
        return this
    }

    replicas(replicas: number): DeploymentSpecHelper {
        this._template.replicas = replicas
        return this
    }

    revisionHistoryLimit(revisionHistoryLimit: number): DeploymentSpecHelper {
        this._template.revisionHistoryLimit = revisionHistoryLimit
        return this
    }

    selector(selector: LabelSelector): DeploymentSpecHelper {
        if (!this._template.selector) this._template.selector = []
        this._template.selector = {
            ...this._template.selector,
            ...selector
        }
        return this
    }

    strategy(strategy: DeploymentStrategy): DeploymentSpecHelper {
        if (!this._template.strategy) this._template.strategy = []
        this._template.strategy = {
            ...this._template.strategy,
            ...strategy
        }
        return this
    }

    template(template: PodTemplateSpec): DeploymentSpecHelper {
        if (!this._template.template) this._template.template = []
        this._template.template = {
            ...this._template.template,
            ...template
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DeploymentSpecHelper.kind
        this._template.apiVersion = DeploymentSpecHelper.apiVersion
    }
}

/** DeploymentStatus is the most recently observed status of the Deployment. */
export class DeploymentStatusHelper extends ResourceTemplate {
    static kind = 'DeploymentStatus';
    static apiVersion = 'apps/v1';

    availableReplicas(availableReplicas: number): DeploymentStatusHelper {
        this._template.availableReplicas = availableReplicas
        return this
    }

    collisionCount(collisionCount: number): DeploymentStatusHelper {
        this._template.collisionCount = collisionCount
        return this
    }

    conditions(conditions: Array<DeploymentCondition>): DeploymentStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    observedGeneration(observedGeneration: number): DeploymentStatusHelper {
        this._template.observedGeneration = observedGeneration
        return this
    }

    readyReplicas(readyReplicas: number): DeploymentStatusHelper {
        this._template.readyReplicas = readyReplicas
        return this
    }

    replicas(replicas: number): DeploymentStatusHelper {
        this._template.replicas = replicas
        return this
    }

    unavailableReplicas(unavailableReplicas: number): DeploymentStatusHelper {
        this._template.unavailableReplicas = unavailableReplicas
        return this
    }

    updatedReplicas(updatedReplicas: number): DeploymentStatusHelper {
        this._template.updatedReplicas = updatedReplicas
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DeploymentStatusHelper.kind
        this._template.apiVersion = DeploymentStatusHelper.apiVersion
    }
}

/** DeploymentStrategy describes how to replace existing pods with new ones. */
export class DeploymentStrategyHelper extends ResourceTemplate {
    static kind = 'DeploymentStrategy';
    static apiVersion = 'apps/v1';

    rollingUpdate(rollingUpdate: RollingUpdateDeployment): DeploymentStrategyHelper {
        if (!this._template.rollingUpdate) this._template.rollingUpdate = []
        this._template.rollingUpdate = {
            ...this._template.rollingUpdate,
            ...rollingUpdate
        }
        return this
    }

    type(type: string): DeploymentStrategyHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DeploymentStrategyHelper.kind
        this._template.apiVersion = DeploymentStrategyHelper.apiVersion
    }
}

/** ReplicaSet ensures that a specified number of pod replicas are running at any given time. */
export class ReplicaSetHelper extends ResourceTemplate {
    static kind = 'ReplicaSet';
    static apiVersion = 'apps/v1';

    metadata(metadata: ObjectMeta): ReplicaSetHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: ReplicaSetSpec): ReplicaSetHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: ReplicaSetStatus): ReplicaSetHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ReplicaSetHelper.kind
        this._template.apiVersion = ReplicaSetHelper.apiVersion
    }
}

/** ReplicaSetCondition describes the state of a replica set at a certain point. */
export class ReplicaSetConditionHelper extends ResourceTemplate {
    static kind = 'ReplicaSetCondition';
    static apiVersion = 'apps/v1';

    lastTransitionTime(lastTransitionTime: Time): ReplicaSetConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    message(message: string): ReplicaSetConditionHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): ReplicaSetConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): ReplicaSetConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): ReplicaSetConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ReplicaSetConditionHelper.kind
        this._template.apiVersion = ReplicaSetConditionHelper.apiVersion
    }
}

/** ReplicaSetList is a collection of ReplicaSets. */
export class ReplicaSetListHelper extends ResourceTemplate {
    static kind = 'ReplicaSetList';
    static apiVersion = 'apps/v1';

    items(items: Array<ReplicaSet>): ReplicaSetListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): ReplicaSetListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ReplicaSetListHelper.kind
        this._template.apiVersion = ReplicaSetListHelper.apiVersion
    }
}

/** ReplicaSetSpec is the specification of a ReplicaSet. */
export class ReplicaSetSpecHelper extends ResourceTemplate {
    static kind = 'ReplicaSetSpec';
    static apiVersion = 'apps/v1';

    minReadySeconds(minReadySeconds: number): ReplicaSetSpecHelper {
        this._template.minReadySeconds = minReadySeconds
        return this
    }

    replicas(replicas: number): ReplicaSetSpecHelper {
        this._template.replicas = replicas
        return this
    }

    selector(selector: LabelSelector): ReplicaSetSpecHelper {
        if (!this._template.selector) this._template.selector = []
        this._template.selector = {
            ...this._template.selector,
            ...selector
        }
        return this
    }

    template(template: PodTemplateSpec): ReplicaSetSpecHelper {
        if (!this._template.template) this._template.template = []
        this._template.template = {
            ...this._template.template,
            ...template
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ReplicaSetSpecHelper.kind
        this._template.apiVersion = ReplicaSetSpecHelper.apiVersion
    }
}

/** ReplicaSetStatus represents the current status of a ReplicaSet. */
export class ReplicaSetStatusHelper extends ResourceTemplate {
    static kind = 'ReplicaSetStatus';
    static apiVersion = 'apps/v1';

    availableReplicas(availableReplicas: number): ReplicaSetStatusHelper {
        this._template.availableReplicas = availableReplicas
        return this
    }

    conditions(conditions: Array<ReplicaSetCondition>): ReplicaSetStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    fullyLabeledReplicas(fullyLabeledReplicas: number): ReplicaSetStatusHelper {
        this._template.fullyLabeledReplicas = fullyLabeledReplicas
        return this
    }

    observedGeneration(observedGeneration: number): ReplicaSetStatusHelper {
        this._template.observedGeneration = observedGeneration
        return this
    }

    readyReplicas(readyReplicas: number): ReplicaSetStatusHelper {
        this._template.readyReplicas = readyReplicas
        return this
    }

    replicas(replicas: number): ReplicaSetStatusHelper {
        this._template.replicas = replicas
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ReplicaSetStatusHelper.kind
        this._template.apiVersion = ReplicaSetStatusHelper.apiVersion
    }
}

/** Spec to control the desired behavior of daemon set rolling update. */
export class RollingUpdateDaemonSetHelper extends ResourceTemplate {
    static kind = 'RollingUpdateDaemonSet';
    static apiVersion = 'apps/v1';

    maxSurge(maxSurge: number | string): RollingUpdateDaemonSetHelper {
        this._template.maxSurge = maxSurge
        return this
    }

    maxUnavailable(maxUnavailable: number | string): RollingUpdateDaemonSetHelper {
        this._template.maxUnavailable = maxUnavailable
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RollingUpdateDaemonSetHelper.kind
        this._template.apiVersion = RollingUpdateDaemonSetHelper.apiVersion
    }
}

/** Spec to control the desired behavior of rolling update. */
export class RollingUpdateDeploymentHelper extends ResourceTemplate {
    static kind = 'RollingUpdateDeployment';
    static apiVersion = 'apps/v1';

    maxSurge(maxSurge: number | string): RollingUpdateDeploymentHelper {
        this._template.maxSurge = maxSurge
        return this
    }

    maxUnavailable(maxUnavailable: number | string): RollingUpdateDeploymentHelper {
        this._template.maxUnavailable = maxUnavailable
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RollingUpdateDeploymentHelper.kind
        this._template.apiVersion = RollingUpdateDeploymentHelper.apiVersion
    }
}

/** RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType. */
export class RollingUpdateStatefulSetStrategyHelper extends ResourceTemplate {
    static kind = 'RollingUpdateStatefulSetStrategy';
    static apiVersion = 'apps/v1';

    partition(partition: number): RollingUpdateStatefulSetStrategyHelper {
        this._template.partition = partition
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RollingUpdateStatefulSetStrategyHelper.kind
        this._template.apiVersion = RollingUpdateStatefulSetStrategyHelper.apiVersion
    }
}

/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export class StatefulSetHelper extends ResourceTemplate {
    static kind = 'StatefulSet';
    static apiVersion = 'apps/v1';

    metadata(metadata: ObjectMeta): StatefulSetHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: StatefulSetSpec): StatefulSetHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: StatefulSetStatus): StatefulSetHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StatefulSetHelper.kind
        this._template.apiVersion = StatefulSetHelper.apiVersion
    }
}

/** StatefulSetCondition describes the state of a statefulset at a certain point. */
export class StatefulSetConditionHelper extends ResourceTemplate {
    static kind = 'StatefulSetCondition';
    static apiVersion = 'apps/v1';

    lastTransitionTime(lastTransitionTime: Time): StatefulSetConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    message(message: string): StatefulSetConditionHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): StatefulSetConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): StatefulSetConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): StatefulSetConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StatefulSetConditionHelper.kind
        this._template.apiVersion = StatefulSetConditionHelper.apiVersion
    }
}

/** StatefulSetList is a collection of StatefulSets. */
export class StatefulSetListHelper extends ResourceTemplate {
    static kind = 'StatefulSetList';
    static apiVersion = 'apps/v1';

    items(items: Array<StatefulSet>): StatefulSetListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): StatefulSetListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StatefulSetListHelper.kind
        this._template.apiVersion = StatefulSetListHelper.apiVersion
    }
}

/** A StatefulSetSpec is the specification of a StatefulSet. */
export class StatefulSetSpecHelper extends ResourceTemplate {
    static kind = 'StatefulSetSpec';
    static apiVersion = 'apps/v1';

    podManagementPolicy(podManagementPolicy: string): StatefulSetSpecHelper {
        this._template.podManagementPolicy = podManagementPolicy
        return this
    }

    replicas(replicas: number): StatefulSetSpecHelper {
        this._template.replicas = replicas
        return this
    }

    revisionHistoryLimit(revisionHistoryLimit: number): StatefulSetSpecHelper {
        this._template.revisionHistoryLimit = revisionHistoryLimit
        return this
    }

    selector(selector: LabelSelector): StatefulSetSpecHelper {
        if (!this._template.selector) this._template.selector = []
        this._template.selector = {
            ...this._template.selector,
            ...selector
        }
        return this
    }

    serviceName(serviceName: string): StatefulSetSpecHelper {
        this._template.serviceName = serviceName
        return this
    }

    template(template: PodTemplateSpec): StatefulSetSpecHelper {
        if (!this._template.template) this._template.template = []
        this._template.template = {
            ...this._template.template,
            ...template
        }
        return this
    }

    updateStrategy(updateStrategy: StatefulSetUpdateStrategy): StatefulSetSpecHelper {
        if (!this._template.updateStrategy) this._template.updateStrategy = []
        this._template.updateStrategy = {
            ...this._template.updateStrategy,
            ...updateStrategy
        }
        return this
    }

    volumeClaimTemplates(volumeClaimTemplates: Array<PersistentVolumeClaim>): StatefulSetSpecHelper {
        if (!Array.isArray(volumeClaimTemplates)) { volumeClaimTemplates = [volumeClaimTemplates] }
        if (!this._template.volumeClaimTemplates) this._template.volumeClaimTemplates = volumeClaimTemplates
        this._template.volumeClaimTemplates = [...this._template.volumeClaimTemplates, ...volumeClaimTemplates]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StatefulSetSpecHelper.kind
        this._template.apiVersion = StatefulSetSpecHelper.apiVersion
    }
}

/** StatefulSetStatus represents the current state of a StatefulSet. */
export class StatefulSetStatusHelper extends ResourceTemplate {
    static kind = 'StatefulSetStatus';
    static apiVersion = 'apps/v1';

    collisionCount(collisionCount: number): StatefulSetStatusHelper {
        this._template.collisionCount = collisionCount
        return this
    }

    conditions(conditions: Array<StatefulSetCondition>): StatefulSetStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    currentReplicas(currentReplicas: number): StatefulSetStatusHelper {
        this._template.currentReplicas = currentReplicas
        return this
    }

    currentRevision(currentRevision: string): StatefulSetStatusHelper {
        this._template.currentRevision = currentRevision
        return this
    }

    observedGeneration(observedGeneration: number): StatefulSetStatusHelper {
        this._template.observedGeneration = observedGeneration
        return this
    }

    readyReplicas(readyReplicas: number): StatefulSetStatusHelper {
        this._template.readyReplicas = readyReplicas
        return this
    }

    replicas(replicas: number): StatefulSetStatusHelper {
        this._template.replicas = replicas
        return this
    }

    updateRevision(updateRevision: string): StatefulSetStatusHelper {
        this._template.updateRevision = updateRevision
        return this
    }

    updatedReplicas(updatedReplicas: number): StatefulSetStatusHelper {
        this._template.updatedReplicas = updatedReplicas
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StatefulSetStatusHelper.kind
        this._template.apiVersion = StatefulSetStatusHelper.apiVersion
    }
}

/** StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy. */
export class StatefulSetUpdateStrategyHelper extends ResourceTemplate {
    static kind = 'StatefulSetUpdateStrategy';
    static apiVersion = 'apps/v1';

    rollingUpdate(rollingUpdate: RollingUpdateStatefulSetStrategy): StatefulSetUpdateStrategyHelper {
        if (!this._template.rollingUpdate) this._template.rollingUpdate = []
        this._template.rollingUpdate = {
            ...this._template.rollingUpdate,
            ...rollingUpdate
        }
        return this
    }

    type(type: string): StatefulSetUpdateStrategyHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StatefulSetUpdateStrategyHelper.kind
        this._template.apiVersion = StatefulSetUpdateStrategyHelper.apiVersion
    }
}
