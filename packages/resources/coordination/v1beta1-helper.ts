import { ResourceTemplate, Template } from "../resourceTemplate";
import { Lease, LeaseList, LeaseSpec } from "./v1beta1";
import { ListMeta, MicroTime, ObjectMeta } from "../meta/v1";
import { ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";

export interface LeaseHelper extends Lease {
    $metadata(x: ObjectMetaHelper): LeaseHelper;
    $spec(x: LeaseSpecHelper): LeaseHelper;
}

/** Lease defines a lease concept. */
export class LeaseHelper extends ResourceTemplate implements LeaseHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "Lease", "coordination.k8s.io/v1beta1")
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

    _spec: LeaseSpecHelper;
    get spec(): LeaseSpecHelper {
        return this._spec
    }
    set spec(x: LeaseSpecHelper) {
        this._spec = x
    }
    $spec(x: LeaseSpecHelper) {
        this.spec = x; return this
    }
}

export interface LeaseListHelper extends LeaseList {
    $items(x: Array<Lease>): LeaseListHelper;
    $metadata(x: ListMetaHelper): LeaseListHelper;
}

/** LeaseList is a list of Lease objects. */
export class LeaseListHelper extends ResourceTemplate implements LeaseListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "LeaseList", "coordination.k8s.io/v1beta1")
    }

    _items: Array<Lease>;
    get items(): Array<Lease> {
        return this._items
    }
    set items(x: Array<Lease>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<Lease>) {
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

export interface LeaseSpecHelper extends LeaseSpec {
    $acquireTime(x: MicroTime): LeaseSpecHelper;
    $holderIdentity(x: string): LeaseSpecHelper;
    $leaseDurationSeconds(x: number): LeaseSpecHelper;
    $leaseTransitions(x: number): LeaseSpecHelper;
    $renewTime(x: MicroTime): LeaseSpecHelper;
}

/** LeaseSpec is a specification of a Lease. */
export class LeaseSpecHelper extends Template implements LeaseSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _acquireTime: MicroTime;
    get acquireTime(): MicroTime {
        return this._acquireTime
    }
    set acquireTime(x: MicroTime) {
        this._acquireTime = x
    }
    $acquireTime(x: MicroTime) {
        this.acquireTime = x; return this
    }

    _holderIdentity: string;
    get holderIdentity(): string {
        return this._holderIdentity
    }
    set holderIdentity(x: string) {
        this._holderIdentity = x
    }
    $holderIdentity(x: string) {
        this.holderIdentity = x; return this
    }

    _leaseDurationSeconds: number;
    get leaseDurationSeconds(): number {
        return this._leaseDurationSeconds
    }
    set leaseDurationSeconds(x: number) {
        this._leaseDurationSeconds = x
    }
    $leaseDurationSeconds(x: number) {
        this.leaseDurationSeconds = x; return this
    }

    _leaseTransitions: number;
    get leaseTransitions(): number {
        return this._leaseTransitions
    }
    set leaseTransitions(x: number) {
        this._leaseTransitions = x
    }
    $leaseTransitions(x: number) {
        this.leaseTransitions = x; return this
    }

    _renewTime: MicroTime;
    get renewTime(): MicroTime {
        return this._renewTime
    }
    set renewTime(x: MicroTime) {
        this._renewTime = x
    }
    $renewTime(x: MicroTime) {
        this.renewTime = x; return this
    }
}