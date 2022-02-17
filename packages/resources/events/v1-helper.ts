import { ResourceTemplate, Template } from "../resourceTemplate";
import { Event, EventList, EventSeries } from "./v1";
import { ListMeta, MicroTime, ObjectMeta, Time } from "../meta/v1";
import { EventSource, ObjectReference } from "../core/v1";

export interface EventHelper extends Event {
    $action(x: any): any;
    $deprecatedCount(x: any): any;
    $deprecatedFirstTimestamp(x: any): any;
    $deprecatedLastTimestamp(x: any): any;
    $deprecatedSource(x: any): any;
    $eventTime(x: any): any;
    $metadata(x: any): any;
    $note(x: any): any;
    $reason(x: any): any;
    $regarding(x: any): any;
    $related(x: any): any;
    $reportingController(x: any): any;
    $reportingInstance(x: any): any;
    $series(x: any): any;
    $type(x: any): any;
}

/** Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data. */
export class EventHelper extends ResourceTemplate implements EventHelper {
    static kind = 'Event';
    static apiVersion = 'events/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, EventHelper.kind, EventHelper.apiVersion)
    }

    _action: any;
    get action(): any /*string*/ {
        return this._action
    }
    set action(x: any /*string*/) {
        this._action = x
    }
    setAction(x: any /*string*/) {
        this.action = x; return this
    }

    _deprecatedCount: any;
    get deprecatedCount(): any /*number*/ {
        return this._deprecatedCount
    }
    set deprecatedCount(x: any /*number*/) {
        this._deprecatedCount = x
    }
    setDeprecatedCount(x: any /*number*/) {
        this.deprecatedCount = x; return this
    }

    _deprecatedFirstTimestamp: any;
    get deprecatedFirstTimestamp(): any /*Time*/ {
        return this._deprecatedFirstTimestamp
    }
    set deprecatedFirstTimestamp(x: any /*Time*/) {
        this._deprecatedFirstTimestamp = x
    }
    setDeprecatedFirstTimestamp(x: any /*Time*/) {
        this.deprecatedFirstTimestamp = x; return this
    }

    _deprecatedLastTimestamp: any;
    get deprecatedLastTimestamp(): any /*Time*/ {
        return this._deprecatedLastTimestamp
    }
    set deprecatedLastTimestamp(x: any /*Time*/) {
        this._deprecatedLastTimestamp = x
    }
    setDeprecatedLastTimestamp(x: any /*Time*/) {
        this.deprecatedLastTimestamp = x; return this
    }

    _deprecatedSource: any;
    get deprecatedSource(): any /*EventSourceHelper*/ {
        return this._deprecatedSource
    }
    set deprecatedSource(x: any /*EventSourceHelper*/) {
        this._deprecatedSource = x
    }
    setDeprecatedSource(x: any /*EventSourceHelper*/) {
        this.deprecatedSource = x; return this
    }

    _eventTime: any;
    get eventTime(): any /*MicroTime*/ {
        return this._eventTime
    }
    set eventTime(x: any /*MicroTime*/) {
        this._eventTime = x
    }
    setEventTime(x: any /*MicroTime*/) {
        this.eventTime = x; return this
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

    _note: any;
    get note(): any /*string*/ {
        return this._note
    }
    set note(x: any /*string*/) {
        this._note = x
    }
    setNote(x: any /*string*/) {
        this.note = x; return this
    }

    _reason: any;
    get reason(): any /*string*/ {
        return this._reason
    }
    set reason(x: any /*string*/) {
        this._reason = x
    }
    setReason(x: any /*string*/) {
        this.reason = x; return this
    }

    _regarding: any;
    get regarding(): any /*ObjectReferenceHelper*/ {
        return this._regarding
    }
    set regarding(x: any /*ObjectReferenceHelper*/) {
        this._regarding = x
    }
    setRegarding(x: any /*ObjectReferenceHelper*/) {
        this.regarding = x; return this
    }

    _related: any;
    get related(): any /*ObjectReferenceHelper*/ {
        return this._related
    }
    set related(x: any /*ObjectReferenceHelper*/) {
        this._related = x
    }
    setRelated(x: any /*ObjectReferenceHelper*/) {
        this.related = x; return this
    }

    _reportingController: any;
    get reportingController(): any /*string*/ {
        return this._reportingController
    }
    set reportingController(x: any /*string*/) {
        this._reportingController = x
    }
    setReportingController(x: any /*string*/) {
        this.reportingController = x; return this
    }

    _reportingInstance: any;
    get reportingInstance(): any /*string*/ {
        return this._reportingInstance
    }
    set reportingInstance(x: any /*string*/) {
        this._reportingInstance = x
    }
    setReportingInstance(x: any /*string*/) {
        this.reportingInstance = x; return this
    }

    _series: any;
    get series(): any /*EventSeriesHelper*/ {
        return this._series
    }
    set series(x: any /*EventSeriesHelper*/) {
        this._series = x
    }
    setSeries(x: any /*EventSeriesHelper*/) {
        this.series = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface EventListHelper extends EventList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** EventList is a list of Event objects. */
export class EventListHelper extends ResourceTemplate implements EventListHelper {
    static kind = 'EventList';
    static apiVersion = 'events/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, EventListHelper.kind, EventListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<Event>*/ {
        return this._items
    }
    set items(x: any /*Array<Event>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<Event>*/) {
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

export interface EventSeriesHelper extends EventSeries {
    $count(x: any): any;
    $lastObservedTime(x: any): any;
}

/** EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. How often to update the EventSeries is up to the event reporters. The default event reporter in "k8s.io/client-go/tools/events/event_broadcaster.go" shows how this struct is updated on heartbeats and can guide customized reporter implementations. */
export class EventSeriesHelper extends Template implements EventSeriesHelper {
    constructor(obj: any) {
        super(obj)
    }

    _count: any;
    get count(): any /*number*/ {
        return this._count
    }
    set count(x: any /*number*/) {
        this._count = x
    }
    setCount(x: any /*number*/) {
        this.count = x; return this
    }

    _lastObservedTime: any;
    get lastObservedTime(): any /*MicroTime*/ {
        return this._lastObservedTime
    }
    set lastObservedTime(x: any /*MicroTime*/) {
        this._lastObservedTime = x
    }
    setLastObservedTime(x: any /*MicroTime*/) {
        this.lastObservedTime = x; return this
    }
}
