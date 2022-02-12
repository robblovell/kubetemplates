import { ResourceTemplate } from "../resourceTemplate";
import { Quantity } from "../api/resource";
import { ListMeta, ObjectMeta } from "../meta/v1";
import { Overhead, RuntimeClass, RuntimeClassSpec, Scheduling } from "./v1alpha1";
import { Toleration } from "../core/v1";

/** Overhead structure represents the resource overhead associated with running a pod. */
export class OverheadHelper extends ResourceTemplate {
    static kind = 'Overhead';
    static apiVersion = 'node/v1alpha1';

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

/** RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md */
export class RuntimeClassHelper extends ResourceTemplate {
    static kind = 'RuntimeClass';
    static apiVersion = 'node/v1alpha1';

    metadata(metadata: ObjectMeta): RuntimeClassHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: RuntimeClassSpec): RuntimeClassHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
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
    static apiVersion = 'node/v1alpha1';

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

/** RuntimeClassSpec is a specification of a RuntimeClass. It contains parameters that are required to describe the RuntimeClass to the Container Runtime Interface (CRI) implementation, as well as any other components that need to understand how the pod will be run. The RuntimeClassSpec is immutable. */
export class RuntimeClassSpecHelper extends ResourceTemplate {
    static kind = 'RuntimeClassSpec';
    static apiVersion = 'node/v1alpha1';

    overhead(overhead: Overhead): RuntimeClassSpecHelper {
        if (!this._template.overhead) this._template.overhead = []
        this._template.overhead = {
            ...this._template.overhead,
            ...overhead
        }
        return this
    }

    runtimeHandler(runtimeHandler: string): RuntimeClassSpecHelper {
        this._template.runtimeHandler = runtimeHandler
        return this
    }

    scheduling(scheduling: Scheduling): RuntimeClassSpecHelper {
        if (!this._template.scheduling) this._template.scheduling = []
        this._template.scheduling = {
            ...this._template.scheduling,
            ...scheduling
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RuntimeClassSpecHelper.kind
        this._template.apiVersion = RuntimeClassSpecHelper.apiVersion
    }
}

/** Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass. */
export class SchedulingHelper extends ResourceTemplate {
    static kind = 'Scheduling';
    static apiVersion = 'node/v1alpha1';

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
