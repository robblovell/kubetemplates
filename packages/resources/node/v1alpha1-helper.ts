import { ResourceTemplate, Template } from "../resourceTemplate";
import { Overhead, RuntimeClass, RuntimeClassList, RuntimeClassSpec, Scheduling } from "./v1alpha1";
import { Quantity } from "../api/resource";
import { ListMeta, ObjectMeta } from "../meta/v1";
import { ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";
import { Toleration } from "../core/v1";

export interface OverheadHelper extends Overhead {
    $podFixed(x: {[name: string]: Quantity}): OverheadHelper;
}

/** Overhead structure represents the resource overhead associated with running a pod. */
export class OverheadHelper extends Template implements OverheadHelper {
    constructor(obj: any) {
        super(obj)
    }

    _podFixed: {[name: string]: Quantity};
    get podFixed(): {[name: string]: Quantity} {
        return this._podFixed
    }
    set podFixed(x: {[name: string]: Quantity}) {
        this._podFixed = this.set(this.podFixed, x)
    }
    $podFixed(x: {[name: string]: Quantity}) {
        this.podFixed = x; return this
    }
}

export interface RuntimeClassHelper extends RuntimeClass {
    $metadata(x: ObjectMetaHelper): RuntimeClassHelper;
    $spec(x: RuntimeClassSpecHelper): RuntimeClassHelper;
}

/** RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md */
export class RuntimeClassHelper extends ResourceTemplate implements RuntimeClassHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "RuntimeClass", "node.k8s.io/v1alpha1")
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

    _spec: RuntimeClassSpecHelper;
    get spec(): RuntimeClassSpecHelper {
        return this._spec
    }
    set spec(x: RuntimeClassSpecHelper) {
        this._spec = x
    }
    $spec(x: RuntimeClassSpecHelper) {
        this.spec = x; return this
    }
}

export interface RuntimeClassListHelper extends RuntimeClassList {
    $items(x: Array<RuntimeClass>): RuntimeClassListHelper;
    $metadata(x: ListMetaHelper): RuntimeClassListHelper;
}

/** RuntimeClassList is a list of RuntimeClass objects. */
export class RuntimeClassListHelper extends ResourceTemplate implements RuntimeClassListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "RuntimeClassList", "node.k8s.io/v1alpha1")
    }

    _items: Array<RuntimeClass>;
    get items(): Array<RuntimeClass> {
        return this._items
    }
    set items(x: Array<RuntimeClass>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<RuntimeClass>) {
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

export interface RuntimeClassSpecHelper extends RuntimeClassSpec {
    $overhead(x: OverheadHelper): RuntimeClassSpecHelper;
    $runtimeHandler(x: string): RuntimeClassSpecHelper;
    $scheduling(x: SchedulingHelper): RuntimeClassSpecHelper;
}

/** RuntimeClassSpec is a specification of a RuntimeClass. It contains parameters that are required to describe the RuntimeClass to the Container Runtime Interface (CRI) implementation, as well as any other components that need to understand how the pod will be run. The RuntimeClassSpec is immutable. */
export class RuntimeClassSpecHelper extends Template implements RuntimeClassSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _overhead: OverheadHelper;
    get overhead(): OverheadHelper {
        return this._overhead
    }
    set overhead(x: OverheadHelper) {
        this._overhead = x
    }
    $overhead(x: OverheadHelper) {
        this.overhead = x; return this
    }

    _runtimeHandler: string;
    get runtimeHandler(): string {
        return this._runtimeHandler
    }
    set runtimeHandler(x: string) {
        this._runtimeHandler = x
    }
    $runtimeHandler(x: string) {
        this.runtimeHandler = x; return this
    }

    _scheduling: SchedulingHelper;
    get scheduling(): SchedulingHelper {
        return this._scheduling
    }
    set scheduling(x: SchedulingHelper) {
        this._scheduling = x
    }
    $scheduling(x: SchedulingHelper) {
        this.scheduling = x; return this
    }
}

export interface SchedulingHelper extends Scheduling {
    $nodeSelector(x: any): SchedulingHelper;
    $tolerations(x: Array<Toleration>): SchedulingHelper;
}

/** Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass. */
export class SchedulingHelper extends Template implements SchedulingHelper {
    constructor(obj: any) {
        super(obj)
    }

    _nodeSelector: any;
    get nodeSelector(): any {
        return this._nodeSelector
    }
    set nodeSelector(x: any) {
        this._nodeSelector = this.set(this.nodeSelector, x)
    }
    $nodeSelector(x: any) {
        this.nodeSelector = x; return this
    }

    _tolerations: Array<Toleration>;
    get tolerations(): Array<Toleration> {
        return this._tolerations
    }
    set tolerations(x: Array<Toleration>) {
        this._tolerations = this.set(this.tolerations, x)
    }
    $tolerations(x: Array<Toleration>) {
        this.tolerations = x; return this
    }
}
