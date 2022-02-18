import { ResourceTemplate, Template } from "../resourceTemplate";
import { PriorityClass, PriorityClassList } from "./v1";
import { ListMeta, ObjectMeta } from "../meta/v1";
import { ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";

export interface PriorityClassHelper extends PriorityClass {
    $description(x: string): PriorityClassHelper;
    $globalDefault(x: boolean): PriorityClassHelper;
    $metadata(x: ObjectMetaHelper): PriorityClassHelper;
    $preemptionPolicy(x: string): PriorityClassHelper;
    $value(x: number): PriorityClassHelper;
}

/** PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer. */
export class PriorityClassHelper extends ResourceTemplate implements PriorityClassHelper {
    static kind = 'PriorityClass';
    static apiVersion = 'scheduling/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PriorityClassHelper.kind, PriorityClassHelper.apiVersion)
    }

    _description: string;
    get description(): string {
        return this._description
    }
    set description(x: string) {
        this._description = x
    }
    $description(x: string) {
        this.description = x; return this
    }

    _globalDefault: boolean;
    get globalDefault(): boolean {
        return this._globalDefault
    }
    set globalDefault(x: boolean) {
        this._globalDefault = x
    }
    $globalDefault(x: boolean) {
        this.globalDefault = x; return this
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

    _preemptionPolicy: string;
    get preemptionPolicy(): string {
        return this._preemptionPolicy
    }
    set preemptionPolicy(x: string) {
        this._preemptionPolicy = x
    }
    $preemptionPolicy(x: string) {
        this.preemptionPolicy = x; return this
    }

    _value: number;
    get value(): number {
        return this._value
    }
    set value(x: number) {
        this._value = x
    }
    $value(x: number) {
        this.value = x; return this
    }
}

export interface PriorityClassListHelper extends PriorityClassList {
    $items(x: Array<PriorityClass>): PriorityClassListHelper;
    $metadata(x: ListMetaHelper): PriorityClassListHelper;
}

/** PriorityClassList is a collection of priority classes. */
export class PriorityClassListHelper extends ResourceTemplate implements PriorityClassListHelper {
    static kind = 'PriorityClassList';
    static apiVersion = 'scheduling/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PriorityClassListHelper.kind, PriorityClassListHelper.apiVersion)
    }

    _items: Array<PriorityClass>;
    get items(): Array<PriorityClass> {
        return this._items
    }
    set items(x: Array<PriorityClass>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<PriorityClass>) {
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
