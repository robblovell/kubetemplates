import { ResourceTemplate } from "../resourceTemplate";
import { Condition, LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { PodDisruptionBudget, PodDisruptionBudgetSpec, PodDisruptionBudgetStatus } from "./v1";

/** PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods */
export class PodDisruptionBudgetHelper extends ResourceTemplate {
    static kind = 'PodDisruptionBudget';
    static apiVersion = 'policy/v1';

    metadata(metadata: ObjectMeta): PodDisruptionBudgetHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: PodDisruptionBudgetSpec): PodDisruptionBudgetHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: PodDisruptionBudgetStatus): PodDisruptionBudgetHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodDisruptionBudgetHelper.kind
        this._template.apiVersion = PodDisruptionBudgetHelper.apiVersion
    }
}

/** PodDisruptionBudgetList is a collection of PodDisruptionBudgets. */
export class PodDisruptionBudgetListHelper extends ResourceTemplate {
    static kind = 'PodDisruptionBudgetList';
    static apiVersion = 'policy/v1';

    items(items: Array<PodDisruptionBudget>): PodDisruptionBudgetListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): PodDisruptionBudgetListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodDisruptionBudgetListHelper.kind
        this._template.apiVersion = PodDisruptionBudgetListHelper.apiVersion
    }
}

/** PodDisruptionBudgetSpec is a description of a PodDisruptionBudget. */
export class PodDisruptionBudgetSpecHelper extends ResourceTemplate {
    static kind = 'PodDisruptionBudgetSpec';
    static apiVersion = 'policy/v1';

    maxUnavailable(maxUnavailable: number | string): PodDisruptionBudgetSpecHelper {
        this._template.maxUnavailable = maxUnavailable
        return this
    }

    minAvailable(minAvailable: number | string): PodDisruptionBudgetSpecHelper {
        this._template.minAvailable = minAvailable
        return this
    }

    selector(selector: LabelSelector): PodDisruptionBudgetSpecHelper {
        if (!this._template.selector) this._template.selector = []
        this._template.selector = {
            ...this._template.selector,
            ...selector
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodDisruptionBudgetSpecHelper.kind
        this._template.apiVersion = PodDisruptionBudgetSpecHelper.apiVersion
    }
}

/** PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system. */
export class PodDisruptionBudgetStatusHelper extends ResourceTemplate {
    static kind = 'PodDisruptionBudgetStatus';
    static apiVersion = 'policy/v1';

    conditions(conditions: Array<Condition>): PodDisruptionBudgetStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    currentHealthy(currentHealthy: number): PodDisruptionBudgetStatusHelper {
        this._template.currentHealthy = currentHealthy
        return this
    }

    desiredHealthy(desiredHealthy: number): PodDisruptionBudgetStatusHelper {
        this._template.desiredHealthy = desiredHealthy
        return this
    }

    disruptedPods(disruptedPods: {[name: string]: Time}): PodDisruptionBudgetStatusHelper {
        if (!this._template.disruptedPods) this._template.disruptedPods = []
        this._template.disruptedPods = {
            ...this._template.disruptedPods,
            ...disruptedPods
        }
        return this
    }

    disruptionsAllowed(disruptionsAllowed: number): PodDisruptionBudgetStatusHelper {
        this._template.disruptionsAllowed = disruptionsAllowed
        return this
    }

    expectedPods(expectedPods: number): PodDisruptionBudgetStatusHelper {
        this._template.expectedPods = expectedPods
        return this
    }

    observedGeneration(observedGeneration: number): PodDisruptionBudgetStatusHelper {
        this._template.observedGeneration = observedGeneration
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodDisruptionBudgetStatusHelper.kind
        this._template.apiVersion = PodDisruptionBudgetStatusHelper.apiVersion
    }
}
