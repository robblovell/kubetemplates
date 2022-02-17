import { ResourceTemplate, Template } from "../resourceTemplate";
import { Overhead, RuntimeClass, RuntimeClassList, RuntimeClassSpec, Scheduling } from "./v1alpha1";
import { Quantity } from "../api/resource";
import { ListMeta, ObjectMeta } from "../meta/v1";
import { Toleration } from "../core/v1";

export interface OverheadHelper extends Overhead {
    $podFixed(x: any): any;
}

/** Overhead structure represents the resource overhead associated with running a pod. */
export class OverheadHelper extends Template implements OverheadHelper {
    constructor(obj: any) {
        super(obj)
    }

    _podFixed: any;
    get podFixed(): any /*{[name: string]: Quantity}Helper*/ {
        return this._podFixed
    }
    set podFixed(x: any /*{[name: string]: Quantity}Helper*/) {
        this._podFixed = this.set(this.podFixed, x)
    }
    setPodFixed(x: any /*{[name: string]: Quantity}Helper*/) {
        this.podFixed = x; return this
    }
}

export interface RuntimeClassHelper extends RuntimeClass {
    $metadata(x: any): any;
    $spec(x: any): any;
}

/** RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md */
export class RuntimeClassHelper extends ResourceTemplate implements RuntimeClassHelper {
    static kind = 'RuntimeClass';
    static apiVersion = 'node/v1alpha1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, RuntimeClassHelper.kind, RuntimeClassHelper.apiVersion)
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
    get spec(): any /*RuntimeClassSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*RuntimeClassSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*RuntimeClassSpecHelper*/) {
        this.spec = x; return this
    }
}

export interface RuntimeClassListHelper extends RuntimeClassList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** RuntimeClassList is a list of RuntimeClass objects. */
export class RuntimeClassListHelper extends ResourceTemplate implements RuntimeClassListHelper {
    static kind = 'RuntimeClassList';
    static apiVersion = 'node/v1alpha1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, RuntimeClassListHelper.kind, RuntimeClassListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<RuntimeClass>*/ {
        return this._items
    }
    set items(x: any /*Array<RuntimeClass>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<RuntimeClass>*/) {
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

export interface RuntimeClassSpecHelper extends RuntimeClassSpec {
    $overhead(x: any): any;
    $runtimeHandler(x: any): any;
    $scheduling(x: any): any;
}

/** RuntimeClassSpec is a specification of a RuntimeClass. It contains parameters that are required to describe the RuntimeClass to the Container Runtime Interface (CRI) implementation, as well as any other components that need to understand how the pod will be run. The RuntimeClassSpec is immutable. */
export class RuntimeClassSpecHelper extends Template implements RuntimeClassSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _overhead: any;
    get overhead(): any /*OverheadHelper*/ {
        return this._overhead
    }
    set overhead(x: any /*OverheadHelper*/) {
        this._overhead = x
    }
    setOverhead(x: any /*OverheadHelper*/) {
        this.overhead = x; return this
    }

    _runtimeHandler: any;
    get runtimeHandler(): any /*string*/ {
        return this._runtimeHandler
    }
    set runtimeHandler(x: any /*string*/) {
        this._runtimeHandler = x
    }
    setRuntimeHandler(x: any /*string*/) {
        this.runtimeHandler = x; return this
    }

    _scheduling: any;
    get scheduling(): any /*SchedulingHelper*/ {
        return this._scheduling
    }
    set scheduling(x: any /*SchedulingHelper*/) {
        this._scheduling = x
    }
    setScheduling(x: any /*SchedulingHelper*/) {
        this.scheduling = x; return this
    }
}

export interface SchedulingHelper extends Scheduling {
    $nodeSelector(x: any): any;
    $tolerations(x: any): any;
}

/** Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass. */
export class SchedulingHelper extends Template implements SchedulingHelper {
    constructor(obj: any) {
        super(obj)
    }

    _nodeSelector: any;
    get nodeSelector(): any /*any*/ {
        return this._nodeSelector
    }
    set nodeSelector(x: any /*any*/) {
        this._nodeSelector = this.set(this.nodeSelector, x)
    }
    setNodeSelector(x: any /*any*/) {
        this.nodeSelector = x; return this
    }

    _tolerations: any;
    get tolerations(): any /*Array<Toleration>*/ {
        return this._tolerations
    }
    set tolerations(x: any /*Array<Toleration>*/) {
        this._tolerations = this.set(this.tolerations, x)
    }
    setTolerations(x: any /*Array<Toleration>*/) {
        this.tolerations = x; return this
    }
}
