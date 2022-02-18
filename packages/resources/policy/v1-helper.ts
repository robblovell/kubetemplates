import { ResourceTemplate, Template } from "../resourceTemplate";
import { Eviction, PodDisruptionBudget, PodDisruptionBudgetList, PodDisruptionBudgetSpec, PodDisruptionBudgetStatus } from "./v1";
import { Condition, DeleteOptions, LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { DeleteOptionsHelper, LabelSelectorHelper, ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";

export interface EvictionHelper extends Eviction {
    $deleteOptions(x: DeleteOptionsHelper): EvictionHelper;
    $metadata(x: ObjectMetaHelper): EvictionHelper;
}

/** Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions. */
export class EvictionHelper extends ResourceTemplate implements EvictionHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "Eviction", "policy/v1")
    }

    _deleteOptions: DeleteOptionsHelper;
    get deleteOptions(): DeleteOptionsHelper {
        return this._deleteOptions
    }
    set deleteOptions(x: DeleteOptionsHelper) {
        this._deleteOptions = x
    }
    $deleteOptions(x: DeleteOptionsHelper) {
        this.deleteOptions = x; return this
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
}

export interface PodDisruptionBudgetHelper extends PodDisruptionBudget {
    $metadata(x: ObjectMetaHelper): PodDisruptionBudgetHelper;
    $spec(x: PodDisruptionBudgetSpecHelper): PodDisruptionBudgetHelper;
    $status(x: PodDisruptionBudgetStatusHelper): PodDisruptionBudgetHelper;
}

/** PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods */
export class PodDisruptionBudgetHelper extends ResourceTemplate implements PodDisruptionBudgetHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "PodDisruptionBudget", "policy/v1")
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

    _spec: PodDisruptionBudgetSpecHelper;
    get spec(): PodDisruptionBudgetSpecHelper {
        return this._spec
    }
    set spec(x: PodDisruptionBudgetSpecHelper) {
        this._spec = x
    }
    $spec(x: PodDisruptionBudgetSpecHelper) {
        this.spec = x; return this
    }

    _status: PodDisruptionBudgetStatusHelper;
    get status(): PodDisruptionBudgetStatusHelper {
        return this._status
    }
    set status(x: PodDisruptionBudgetStatusHelper) {
        this._status = x
    }
    $status(x: PodDisruptionBudgetStatusHelper) {
        this.status = x; return this
    }
}

export interface PodDisruptionBudgetListHelper extends PodDisruptionBudgetList {
    $items(x: Array<PodDisruptionBudget>): PodDisruptionBudgetListHelper;
    $metadata(x: ListMetaHelper): PodDisruptionBudgetListHelper;
}

/** PodDisruptionBudgetList is a collection of PodDisruptionBudgets. */
export class PodDisruptionBudgetListHelper extends ResourceTemplate implements PodDisruptionBudgetListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "PodDisruptionBudgetList", "policy/v1")
    }

    _items: Array<PodDisruptionBudget>;
    get items(): Array<PodDisruptionBudget> {
        return this._items
    }
    set items(x: Array<PodDisruptionBudget>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<PodDisruptionBudget>) {
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

export interface PodDisruptionBudgetSpecHelper extends PodDisruptionBudgetSpec {
    $maxUnavailable(x: number | string): PodDisruptionBudgetSpecHelper;
    $minAvailable(x: number | string): PodDisruptionBudgetSpecHelper;
    $selector(x: LabelSelectorHelper): PodDisruptionBudgetSpecHelper;
}

/** PodDisruptionBudgetSpec is a description of a PodDisruptionBudget. */
export class PodDisruptionBudgetSpecHelper extends Template implements PodDisruptionBudgetSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _maxUnavailable: number | string;
    get maxUnavailable(): number | string {
        return this._maxUnavailable
    }
    set maxUnavailable(x: number | string) {
        this._maxUnavailable = x
    }
    $maxUnavailable(x: number | string) {
        this.maxUnavailable = x; return this
    }

    _minAvailable: number | string;
    get minAvailable(): number | string {
        return this._minAvailable
    }
    set minAvailable(x: number | string) {
        this._minAvailable = x
    }
    $minAvailable(x: number | string) {
        this.minAvailable = x; return this
    }

    _selector: LabelSelectorHelper;
    get selector(): LabelSelectorHelper {
        return this._selector
    }
    set selector(x: LabelSelectorHelper) {
        this._selector = x
    }
    $selector(x: LabelSelectorHelper) {
        this.selector = x; return this
    }
}

export interface PodDisruptionBudgetStatusHelper extends PodDisruptionBudgetStatus {
    $conditions(x: Array<Condition>): PodDisruptionBudgetStatusHelper;
    $currentHealthy(x: number): PodDisruptionBudgetStatusHelper;
    $desiredHealthy(x: number): PodDisruptionBudgetStatusHelper;
    $disruptedPods(x: {[name: string]: Time}): PodDisruptionBudgetStatusHelper;
    $disruptionsAllowed(x: number): PodDisruptionBudgetStatusHelper;
    $expectedPods(x: number): PodDisruptionBudgetStatusHelper;
    $observedGeneration(x: number): PodDisruptionBudgetStatusHelper;
}

/** PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system. */
export class PodDisruptionBudgetStatusHelper extends Template implements PodDisruptionBudgetStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conditions: Array<Condition>;
    get conditions(): Array<Condition> {
        return this._conditions
    }
    set conditions(x: Array<Condition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $conditions(x: Array<Condition>) {
        this.conditions = x; return this
    }

    _currentHealthy: number;
    get currentHealthy(): number {
        return this._currentHealthy
    }
    set currentHealthy(x: number) {
        this._currentHealthy = x
    }
    $currentHealthy(x: number) {
        this.currentHealthy = x; return this
    }

    _desiredHealthy: number;
    get desiredHealthy(): number {
        return this._desiredHealthy
    }
    set desiredHealthy(x: number) {
        this._desiredHealthy = x
    }
    $desiredHealthy(x: number) {
        this.desiredHealthy = x; return this
    }

    _disruptedPods: {[name: string]: Time};
    get disruptedPods(): {[name: string]: Time} {
        return this._disruptedPods
    }
    set disruptedPods(x: {[name: string]: Time}) {
        this._disruptedPods = this.set(this.disruptedPods, x)
    }
    $disruptedPods(x: {[name: string]: Time}) {
        this.disruptedPods = x; return this
    }

    _disruptionsAllowed: number;
    get disruptionsAllowed(): number {
        return this._disruptionsAllowed
    }
    set disruptionsAllowed(x: number) {
        this._disruptionsAllowed = x
    }
    $disruptionsAllowed(x: number) {
        this.disruptionsAllowed = x; return this
    }

    _expectedPods: number;
    get expectedPods(): number {
        return this._expectedPods
    }
    set expectedPods(x: number) {
        this._expectedPods = x
    }
    $expectedPods(x: number) {
        this.expectedPods = x; return this
    }

    _observedGeneration: number;
    get observedGeneration(): number {
        return this._observedGeneration
    }
    set observedGeneration(x: number) {
        this._observedGeneration = x
    }
    $observedGeneration(x: number) {
        this.observedGeneration = x; return this
    }
}
