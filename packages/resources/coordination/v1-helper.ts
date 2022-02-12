import { ResourceTemplate } from "../resourceTemplate";
import { ListMeta, MicroTime, ObjectMeta } from "../meta/v1";
import { Lease, LeaseSpec } from "./v1";

/** Lease defines a lease concept. */
export class LeaseHelper extends ResourceTemplate {
    static kind = 'Lease';
    static apiVersion = 'coordination/v1';

    metadata(metadata: ObjectMeta): LeaseHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: LeaseSpec): LeaseHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LeaseHelper.kind
        this._template.apiVersion = LeaseHelper.apiVersion
    }
}

/** LeaseList is a list of Lease objects. */
export class LeaseListHelper extends ResourceTemplate {
    static kind = 'LeaseList';
    static apiVersion = 'coordination/v1';

    items(items: Array<Lease>): LeaseListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): LeaseListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LeaseListHelper.kind
        this._template.apiVersion = LeaseListHelper.apiVersion
    }
}

/** LeaseSpec is a specification of a Lease. */
export class LeaseSpecHelper extends ResourceTemplate {
    static kind = 'LeaseSpec';
    static apiVersion = 'coordination/v1';

    acquireTime(acquireTime: MicroTime): LeaseSpecHelper {
        this._template.acquireTime = acquireTime
        return this
    }

    holderIdentity(holderIdentity: string): LeaseSpecHelper {
        this._template.holderIdentity = holderIdentity
        return this
    }

    leaseDurationSeconds(leaseDurationSeconds: number): LeaseSpecHelper {
        this._template.leaseDurationSeconds = leaseDurationSeconds
        return this
    }

    leaseTransitions(leaseTransitions: number): LeaseSpecHelper {
        this._template.leaseTransitions = leaseTransitions
        return this
    }

    renewTime(renewTime: MicroTime): LeaseSpecHelper {
        this._template.renewTime = renewTime
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LeaseSpecHelper.kind
        this._template.apiVersion = LeaseSpecHelper.apiVersion
    }
}
