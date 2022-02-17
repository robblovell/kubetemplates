import { ResourceTemplate, Template } from "../resourceTemplate";
import { PriorityClass, PriorityClassList } from "./v1";
import { ListMeta, ObjectMeta } from "../meta/v1";

export interface PriorityClassHelper extends PriorityClass {
    $description(x: any): any;
    $globalDefault(x: any): any;
    $metadata(x: any): any;
    $preemptionPolicy(x: any): any;
    $value(x: any): any;
}

/** PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer. */
export class PriorityClassHelper extends ResourceTemplate implements PriorityClassHelper {
    static kind = 'PriorityClass';
    static apiVersion = 'scheduling/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PriorityClassHelper.kind, PriorityClassHelper.apiVersion)
    }

    _description: any;
    get description(): any /*string*/ {
        return this._description
    }
    set description(x: any /*string*/) {
        this._description = x
    }
    setDescription(x: any /*string*/) {
        this.description = x; return this
    }

    _globalDefault: any;
    get globalDefault(): any /*boolean*/ {
        return this._globalDefault
    }
    set globalDefault(x: any /*boolean*/) {
        this._globalDefault = x
    }
    setGlobalDefault(x: any /*boolean*/) {
        this.globalDefault = x; return this
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

    _preemptionPolicy: any;
    get preemptionPolicy(): any /*string*/ {
        return this._preemptionPolicy
    }
    set preemptionPolicy(x: any /*string*/) {
        this._preemptionPolicy = x
    }
    setPreemptionPolicy(x: any /*string*/) {
        this.preemptionPolicy = x; return this
    }

    _value: any;
    get value(): any /*number*/ {
        return this._value
    }
    set value(x: any /*number*/) {
        this._value = x
    }
    setValue(x: any /*number*/) {
        this.value = x; return this
    }
}

export interface PriorityClassListHelper extends PriorityClassList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** PriorityClassList is a collection of priority classes. */
export class PriorityClassListHelper extends ResourceTemplate implements PriorityClassListHelper {
    static kind = 'PriorityClassList';
    static apiVersion = 'scheduling/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PriorityClassListHelper.kind, PriorityClassListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<PriorityClass>*/ {
        return this._items
    }
    set items(x: any /*Array<PriorityClass>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<PriorityClass>*/) {
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
