import { ResourceTemplate, Template } from "../resourceTemplate";
import { PodDisruptionBudget, PodDisruptionBudgetList, PodDisruptionBudgetSpec, PodDisruptionBudgetStatus } from "./v1";
import { Condition, LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";

export interface PodDisruptionBudgetHelper extends PodDisruptionBudget {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods */
export class PodDisruptionBudgetHelper extends ResourceTemplate implements PodDisruptionBudgetHelper {
    static kind = 'PodDisruptionBudget';
    static apiVersion = 'policy/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodDisruptionBudgetHelper.kind, PodDisruptionBudgetHelper.apiVersion)
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
    get spec(): any /*PodDisruptionBudgetSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*PodDisruptionBudgetSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*PodDisruptionBudgetSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*PodDisruptionBudgetStatusHelper*/ {
        return this._status
    }
    set status(x: any /*PodDisruptionBudgetStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*PodDisruptionBudgetStatusHelper*/) {
        this.status = x; return this
    }
}

export interface PodDisruptionBudgetListHelper extends PodDisruptionBudgetList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** PodDisruptionBudgetList is a collection of PodDisruptionBudgets. */
export class PodDisruptionBudgetListHelper extends ResourceTemplate implements PodDisruptionBudgetListHelper {
    static kind = 'PodDisruptionBudgetList';
    static apiVersion = 'policy/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodDisruptionBudgetListHelper.kind, PodDisruptionBudgetListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<PodDisruptionBudget>*/ {
        return this._items
    }
    set items(x: any /*Array<PodDisruptionBudget>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<PodDisruptionBudget>*/) {
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

export interface PodDisruptionBudgetSpecHelper extends PodDisruptionBudgetSpec {
    $maxUnavailable(x: any): any;
    $minAvailable(x: any): any;
    $selector(x: any): any;
}

/** PodDisruptionBudgetSpec is a description of a PodDisruptionBudget. */
export class PodDisruptionBudgetSpecHelper extends Template implements PodDisruptionBudgetSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _maxUnavailable: any;
    get maxUnavailable(): any /*number | stringHelper*/ {
        return this._maxUnavailable
    }
    set maxUnavailable(x: any /*number | stringHelper*/) {
        this._maxUnavailable = x
    }
    setMaxUnavailable(x: any /*number | stringHelper*/) {
        this.maxUnavailable = x; return this
    }

    _minAvailable: any;
    get minAvailable(): any /*number | stringHelper*/ {
        return this._minAvailable
    }
    set minAvailable(x: any /*number | stringHelper*/) {
        this._minAvailable = x
    }
    setMinAvailable(x: any /*number | stringHelper*/) {
        this.minAvailable = x; return this
    }

    _selector: any;
    get selector(): any /*LabelSelectorHelper*/ {
        return this._selector
    }
    set selector(x: any /*LabelSelectorHelper*/) {
        this._selector = x
    }
    setSelector(x: any /*LabelSelectorHelper*/) {
        this.selector = x; return this
    }
}

export interface PodDisruptionBudgetStatusHelper extends PodDisruptionBudgetStatus {
    $conditions(x: any): any;
    $currentHealthy(x: any): any;
    $desiredHealthy(x: any): any;
    $disruptedPods(x: any): any;
    $disruptionsAllowed(x: any): any;
    $expectedPods(x: any): any;
    $observedGeneration(x: any): any;
}

/** PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system. */
export class PodDisruptionBudgetStatusHelper extends Template implements PodDisruptionBudgetStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conditions: any;
    get conditions(): any /*Array<Condition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<Condition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<Condition>*/) {
        this.conditions = x; return this
    }

    _currentHealthy: any;
    get currentHealthy(): any /*number*/ {
        return this._currentHealthy
    }
    set currentHealthy(x: any /*number*/) {
        this._currentHealthy = x
    }
    setCurrentHealthy(x: any /*number*/) {
        this.currentHealthy = x; return this
    }

    _desiredHealthy: any;
    get desiredHealthy(): any /*number*/ {
        return this._desiredHealthy
    }
    set desiredHealthy(x: any /*number*/) {
        this._desiredHealthy = x
    }
    setDesiredHealthy(x: any /*number*/) {
        this.desiredHealthy = x; return this
    }

    _disruptedPods: any;
    get disruptedPods(): any /*{[name: string]: Time}Helper*/ {
        return this._disruptedPods
    }
    set disruptedPods(x: any /*{[name: string]: Time}Helper*/) {
        this._disruptedPods = this.set(this.disruptedPods, x)
    }
    setDisruptedPods(x: any /*{[name: string]: Time}Helper*/) {
        this.disruptedPods = x; return this
    }

    _disruptionsAllowed: any;
    get disruptionsAllowed(): any /*number*/ {
        return this._disruptionsAllowed
    }
    set disruptionsAllowed(x: any /*number*/) {
        this._disruptionsAllowed = x
    }
    setDisruptionsAllowed(x: any /*number*/) {
        this.disruptionsAllowed = x; return this
    }

    _expectedPods: any;
    get expectedPods(): any /*number*/ {
        return this._expectedPods
    }
    set expectedPods(x: any /*number*/) {
        this._expectedPods = x
    }
    setExpectedPods(x: any /*number*/) {
        this.expectedPods = x; return this
    }

    _observedGeneration: any;
    get observedGeneration(): any /*number*/ {
        return this._observedGeneration
    }
    set observedGeneration(x: any /*number*/) {
        this._observedGeneration = x
    }
    setObservedGeneration(x: any /*number*/) {
        this.observedGeneration = x; return this
    }
}
