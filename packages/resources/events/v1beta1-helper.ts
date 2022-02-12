import { ResourceTemplate } from "../resourceTemplate";
import { ListMeta, MicroTime, ObjectMeta, Time } from "../meta/v1";
import { EventSource, ObjectReference } from "../core/v1";
import { Event, EventSeries } from "./v1beta1";

/** Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data. */
export class EventHelper extends ResourceTemplate {
    static kind = 'Event';
    static apiVersion = 'events/v1beta1';

    action(action: string): EventHelper {
        this._template.action = action
        return this
    }

    deprecatedCount(deprecatedCount: number): EventHelper {
        this._template.deprecatedCount = deprecatedCount
        return this
    }

    deprecatedFirstTimestamp(deprecatedFirstTimestamp: Time): EventHelper {
        this._template.deprecatedFirstTimestamp = deprecatedFirstTimestamp
        return this
    }

    deprecatedLastTimestamp(deprecatedLastTimestamp: Time): EventHelper {
        this._template.deprecatedLastTimestamp = deprecatedLastTimestamp
        return this
    }

    deprecatedSource(deprecatedSource: EventSource): EventHelper {
        if (!this._template.deprecatedSource) this._template.deprecatedSource = []
        this._template.deprecatedSource = {
            ...this._template.deprecatedSource,
            ...deprecatedSource
        }
        return this
    }

    eventTime(eventTime: MicroTime): EventHelper {
        this._template.eventTime = eventTime
        return this
    }

    metadata(metadata: ObjectMeta): EventHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    note(note: string): EventHelper {
        this._template.note = note
        return this
    }

    reason(reason: string): EventHelper {
        this._template.reason = reason
        return this
    }

    regarding(regarding: ObjectReference): EventHelper {
        if (!this._template.regarding) this._template.regarding = []
        this._template.regarding = {
            ...this._template.regarding,
            ...regarding
        }
        return this
    }

    related(related: ObjectReference): EventHelper {
        if (!this._template.related) this._template.related = []
        this._template.related = {
            ...this._template.related,
            ...related
        }
        return this
    }

    reportingController(reportingController: string): EventHelper {
        this._template.reportingController = reportingController
        return this
    }

    reportingInstance(reportingInstance: string): EventHelper {
        this._template.reportingInstance = reportingInstance
        return this
    }

    series(series: EventSeries): EventHelper {
        if (!this._template.series) this._template.series = []
        this._template.series = {
            ...this._template.series,
            ...series
        }
        return this
    }

    type(type: string): EventHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EventHelper.kind
        this._template.apiVersion = EventHelper.apiVersion
    }
}

/** EventList is a list of Event objects. */
export class EventListHelper extends ResourceTemplate {
    static kind = 'EventList';
    static apiVersion = 'events/v1beta1';

    items(items: Array<Event>): EventListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): EventListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EventListHelper.kind
        this._template.apiVersion = EventListHelper.apiVersion
    }
}

/** EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. */
export class EventSeriesHelper extends ResourceTemplate {
    static kind = 'EventSeries';
    static apiVersion = 'events/v1beta1';

    count(count: number): EventSeriesHelper {
        this._template.count = count
        return this
    }

    lastObservedTime(lastObservedTime: MicroTime): EventSeriesHelper {
        this._template.lastObservedTime = lastObservedTime
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EventSeriesHelper.kind
        this._template.apiVersion = EventSeriesHelper.apiVersion
    }
}
