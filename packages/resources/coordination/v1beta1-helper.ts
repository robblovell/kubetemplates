import { ResourceTemplate, Template } from "../resourceTemplate";
import { Lease, LeaseList, LeaseSpec } from "./v1beta1";
import { ListMeta, MicroTime, ObjectMeta } from "../meta/v1";

export interface LeaseHelper extends Lease {
    $metadata(x: any): any;
    $spec(x: any): any;
}

/** Lease defines a lease concept. */
export class LeaseHelper extends ResourceTemplate implements LeaseHelper {
    static kind = 'Lease';
    static apiVersion = 'coordination/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, LeaseHelper.kind, LeaseHelper.apiVersion)
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
    get spec(): any /*LeaseSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*LeaseSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*LeaseSpecHelper*/) {
        this.spec = x; return this
    }
}

export interface LeaseListHelper extends LeaseList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** LeaseList is a list of Lease objects. */
export class LeaseListHelper extends ResourceTemplate implements LeaseListHelper {
    static kind = 'LeaseList';
    static apiVersion = 'coordination/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, LeaseListHelper.kind, LeaseListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<Lease>*/ {
        return this._items
    }
    set items(x: any /*Array<Lease>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<Lease>*/) {
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

export interface LeaseSpecHelper extends LeaseSpec {
    $acquireTime(x: any): any;
    $holderIdentity(x: any): any;
    $leaseDurationSeconds(x: any): any;
    $leaseTransitions(x: any): any;
    $renewTime(x: any): any;
}

/** LeaseSpec is a specification of a Lease. */
export class LeaseSpecHelper extends Template implements LeaseSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _acquireTime: any;
    get acquireTime(): any /*MicroTime*/ {
        return this._acquireTime
    }
    set acquireTime(x: any /*MicroTime*/) {
        this._acquireTime = x
    }
    setAcquireTime(x: any /*MicroTime*/) {
        this.acquireTime = x; return this
    }

    _holderIdentity: any;
    get holderIdentity(): any /*string*/ {
        return this._holderIdentity
    }
    set holderIdentity(x: any /*string*/) {
        this._holderIdentity = x
    }
    setHolderIdentity(x: any /*string*/) {
        this.holderIdentity = x; return this
    }

    _leaseDurationSeconds: any;
    get leaseDurationSeconds(): any /*number*/ {
        return this._leaseDurationSeconds
    }
    set leaseDurationSeconds(x: any /*number*/) {
        this._leaseDurationSeconds = x
    }
    setLeaseDurationSeconds(x: any /*number*/) {
        this.leaseDurationSeconds = x; return this
    }

    _leaseTransitions: any;
    get leaseTransitions(): any /*number*/ {
        return this._leaseTransitions
    }
    set leaseTransitions(x: any /*number*/) {
        this._leaseTransitions = x
    }
    setLeaseTransitions(x: any /*number*/) {
        this.leaseTransitions = x; return this
    }

    _renewTime: any;
    get renewTime(): any /*MicroTime*/ {
        return this._renewTime
    }
    set renewTime(x: any /*MicroTime*/) {
        this._renewTime = x
    }
    setRenewTime(x: any /*MicroTime*/) {
        this.renewTime = x; return this
    }
}
