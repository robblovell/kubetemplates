import { ResourceTemplate } from "../resourceTemplate";
import { ListMeta, ObjectMeta } from "../meta/v1";
import { PriorityClass } from "./v1";

/** PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer. */
export class PriorityClassHelper extends ResourceTemplate {
    static kind = 'PriorityClass';
    static apiVersion = 'scheduling/v1';

    description(description: string): PriorityClassHelper {
        this._template.description = description
        return this
    }

    globalDefault(globalDefault: boolean): PriorityClassHelper {
        this._template.globalDefault = globalDefault
        return this
    }

    metadata(metadata: ObjectMeta): PriorityClassHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    preemptionPolicy(preemptionPolicy: string): PriorityClassHelper {
        this._template.preemptionPolicy = preemptionPolicy
        return this
    }

    value(value: number): PriorityClassHelper {
        this._template.value = value
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PriorityClassHelper.kind
        this._template.apiVersion = PriorityClassHelper.apiVersion
    }
}

/** PriorityClassList is a collection of priority classes. */
export class PriorityClassListHelper extends ResourceTemplate {
    static kind = 'PriorityClassList';
    static apiVersion = 'scheduling/v1';

    items(items: Array<PriorityClass>): PriorityClassListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): PriorityClassListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PriorityClassListHelper.kind
        this._template.apiVersion = PriorityClassListHelper.apiVersion
    }
}
