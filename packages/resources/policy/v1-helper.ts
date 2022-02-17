import { ResourceTemplate, Template } from "../resourceTemplate";
import { PodDisruptionBudget, PodDisruptionBudgetList, PodDisruptionBudgetSpec, PodDisruptionBudgetStatus } from "./v1";
import { Condition, LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";

export interface PodDisruptionBudgetHelper extends PodDisruptionBudget {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): PodDisruptionBudgetHelper;
    spec: PodDisruptionBudgetSpecHelper;
    $spec(x: PodDisruptionBudgetSpecHelper): PodDisruptionBudgetHelper;
    status: PodDisruptionBudgetStatusHelper;
    $status(x: PodDisruptionBudgetStatusHelper): PodDisruptionBudgetHelper;
}

/** PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods */
export class PodDisruptionBudgetHelper extends ResourceTemplate implements PodDisruptionBudgetHelper {
    static kind = 'PodDisruptionBudget';
    static apiVersion = 'policy/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodDisruptionBudgetHelper.kind, PodDisruptionBudgetHelper.apiVersion)
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: PodDisruptionBudgetSpecHelper;
    get spec(): PodDisruptionBudgetSpecHelper {
        return this._spec
    }
    set spec(x: PodDisruptionBudgetSpecHelper) {
        this._spec = x
    }
    $Spec(x: PodDisruptionBudgetSpecHelper) {
        this.spec = x; return this
    }

    _status: PodDisruptionBudgetStatusHelper;
    get status(): PodDisruptionBudgetStatusHelper {
        return this._status
    }
    set status(x: PodDisruptionBudgetStatusHelper) {
        this._status = x
    }
    $Status(x: PodDisruptionBudgetStatusHelper) {
        this.status = x; return this
    }
}

export interface PodDisruptionBudgetListHelper extends PodDisruptionBudgetList {
    $items(x: Array<PodDisruptionBudget>): PodDisruptionBudgetListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): PodDisruptionBudgetListHelper;
}

/** PodDisruptionBudgetList is a collection of PodDisruptionBudgets. */
export class PodDisruptionBudgetListHelper extends ResourceTemplate implements PodDisruptionBudgetListHelper {
    static kind = 'PodDisruptionBudgetList';
    static apiVersion = 'policy/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodDisruptionBudgetListHelper.kind, PodDisruptionBudgetListHelper.apiVersion)
    }

    _items: Array<PodDisruptionBudget>;
    get items(): Array<PodDisruptionBudget> {
        return this._items
    }
    set items(x: Array<PodDisruptionBudget>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<PodDisruptionBudget>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ListMetaHelper) {
        this.metadata = x; return this
    }
}

export interface PodDisruptionBudgetSpecHelper extends PodDisruptionBudgetSpec {
    maxUnavailable: number | stringHelper;
    $maxUnavailable(x: number | stringHelper): PodDisruptionBudgetSpecHelper;
    minAvailable: number | stringHelper;
    $minAvailable(x: number | stringHelper): PodDisruptionBudgetSpecHelper;
    selector: LabelSelectorHelper;
    $selector(x: LabelSelectorHelper): PodDisruptionBudgetSpecHelper;
}

/** PodDisruptionBudgetSpec is a description of a PodDisruptionBudget. */
export class PodDisruptionBudgetSpecHelper extends Template implements PodDisruptionBudgetSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _maxUnavailable: number | stringHelper;
    get maxUnavailable(): number | stringHelper {
        return this._maxUnavailable
    }
    set maxUnavailable(x: number | stringHelper) {
        this._maxUnavailable = x
    }
    $MaxUnavailable(x: number | stringHelper) {
        this.maxUnavailable = x; return this
    }

    _minAvailable: number | stringHelper;
    get minAvailable(): number | stringHelper {
        return this._minAvailable
    }
    set minAvailable(x: number | stringHelper) {
        this._minAvailable = x
    }
    $MinAvailable(x: number | stringHelper) {
        this.minAvailable = x; return this
    }

    _selector: LabelSelectorHelper;
    get selector(): LabelSelectorHelper {
        return this._selector
    }
    set selector(x: LabelSelectorHelper) {
        this._selector = x
    }
    $Selector(x: LabelSelectorHelper) {
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
    $Conditions(x: Array<Condition>) {
        this.conditions = x; return this
    }

    _currentHealthy: number;
    get currentHealthy(): number {
        return this._currentHealthy
    }
    set currentHealthy(x: number) {
        this._currentHealthy = x
    }
    $CurrentHealthy(x: number) {
        this.currentHealthy = x; return this
    }

    _desiredHealthy: number;
    get desiredHealthy(): number {
        return this._desiredHealthy
    }
    set desiredHealthy(x: number) {
        this._desiredHealthy = x
    }
    $DesiredHealthy(x: number) {
        this.desiredHealthy = x; return this
    }

    _disruptedPods: {[name: string]: Time};
    get disruptedPods(): {[name: string]: Time} {
        return this._disruptedPods
    }
    set disruptedPods(x: {[name: string]: Time}) {
        this._disruptedPods = this.set(this.disruptedPods, x)
    }
    $DisruptedPods(x: {[name: string]: Time}) {
        this.disruptedPods = x; return this
    }

    _disruptionsAllowed: number;
    get disruptionsAllowed(): number {
        return this._disruptionsAllowed
    }
    set disruptionsAllowed(x: number) {
        this._disruptionsAllowed = x
    }
    $DisruptionsAllowed(x: number) {
        this.disruptionsAllowed = x; return this
    }

    _expectedPods: number;
    get expectedPods(): number {
        return this._expectedPods
    }
    set expectedPods(x: number) {
        this._expectedPods = x
    }
    $ExpectedPods(x: number) {
        this.expectedPods = x; return this
    }

    _observedGeneration: number;
    get observedGeneration(): number {
        return this._observedGeneration
    }
    set observedGeneration(x: number) {
        this._observedGeneration = x
    }
    $ObservedGeneration(x: number) {
        this.observedGeneration = x; return this
    }
}
