import { ResourceTemplate } from "../resourceTemplate";
import { Quantity } from "../api/resource";
import { ListMeta, ObjectMeta } from "../meta/v1";
import { Overhead, RuntimeClass, Scheduling } from "./v1";
import { Toleration } from "../core/v1";

/** Overhead structure represents the resource overhead associated with running a pod. */
export class OverheadHelper extends ResourceTemplate {
    static kind = 'Overhead';
    static apiVersion = 'node/v1';

    podFixed(podFixed: {[name: string]: Quantity}): OverheadHelper {
        if (!this._template.podFixed) this._template.podFixed = []
        this._template.podFixed = {
            ...this._template.podFixed,
            ...podFixed
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = OverheadHelper.kind
        this._template.apiVersion = OverheadHelper.apiVersion
    }
}

/** RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://kubernetes.io/docs/concepts/containers/runtime-class/ */
export class RuntimeClassHelper extends ResourceTemplate {
    static kind = 'RuntimeClass';
    static apiVersion = 'node/v1';

    handler(handler: string): RuntimeClassHelper {
        this._template.handler = handler
        return this
    }

    metadata(metadata: ObjectMeta): RuntimeClassHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    overhead(overhead: Overhead): RuntimeClassHelper {
        if (!this._template.overhead) this._template.overhead = []
        this._template.overhead = {
            ...this._template.overhead,
            ...overhead
        }
        return this
    }

    scheduling(scheduling: Scheduling): RuntimeClassHelper {
        if (!this._template.scheduling) this._template.scheduling = []
        this._template.scheduling = {
            ...this._template.scheduling,
            ...scheduling
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RuntimeClassHelper.kind
        this._template.apiVersion = RuntimeClassHelper.apiVersion
    }
}

/** RuntimeClassList is a list of RuntimeClass objects. */
export class RuntimeClassListHelper extends ResourceTemplate {
    static kind = 'RuntimeClassList';
    static apiVersion = 'node/v1';

    items(items: Array<RuntimeClass>): RuntimeClassListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): RuntimeClassListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RuntimeClassListHelper.kind
        this._template.apiVersion = RuntimeClassListHelper.apiVersion
    }
}

/** Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass. */
export class SchedulingHelper extends ResourceTemplate {
    static kind = 'Scheduling';
    static apiVersion = 'node/v1';

    nodeSelector(nodeSelector: {[name: string]: string}): SchedulingHelper {
        if (!this._template.nodeSelector) this._template.nodeSelector = []
        this._template.nodeSelector = {
            ...this._template.nodeSelector,
            ...nodeSelector
        }
        return this
    }

    tolerations(tolerations: Array<Toleration>): SchedulingHelper {
        if (!Array.isArray(tolerations)) { tolerations = [tolerations] }
        if (!this._template.tolerations) this._template.tolerations = tolerations
        this._template.tolerations = [...this._template.tolerations, ...tolerations]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SchedulingHelper.kind
        this._template.apiVersion = SchedulingHelper.apiVersion
    }
}
