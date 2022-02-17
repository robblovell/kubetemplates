import { ResourceTemplate, Template } from "../resourceTemplate";
import { Event, EventList, EventSeries } from "./v1";
import { ListMeta, MicroTime, ObjectMeta, Time } from "../meta/v1";
import { EventSource, ObjectReference } from "../core/v1";

export interface EventHelper extends Event {
    $action(x: string): EventHelper;
    $deprecatedCount(x: number): EventHelper;
    $deprecatedFirstTimestamp(x: Time): EventHelper;
    $deprecatedLastTimestamp(x: Time): EventHelper;
    deprecatedSource: EventSourceHelper;
    $deprecatedSource(x: EventSourceHelper): EventHelper;
    $eventTime(x: MicroTime): EventHelper;
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): EventHelper;
    $note(x: string): EventHelper;
    $reason(x: string): EventHelper;
    regarding: ObjectReferenceHelper;
    $regarding(x: ObjectReferenceHelper): EventHelper;
    related: ObjectReferenceHelper;
    $related(x: ObjectReferenceHelper): EventHelper;
    $reportingController(x: string): EventHelper;
    $reportingInstance(x: string): EventHelper;
    series: EventSeriesHelper;
    $series(x: EventSeriesHelper): EventHelper;
    $type(x: string): EventHelper;
}

/** Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data. */
export class EventHelper extends ResourceTemplate implements EventHelper {
    static kind = 'Event';
    static apiVersion = 'events/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, EventHelper.kind, EventHelper.apiVersion)
    }

    _action: string;
    get action(): string {
        return this._action
    }
    set action(x: string) {
        this._action = x
    }
    $Action(x: string) {
        this.action = x; return this
    }

    _deprecatedCount: number;
    get deprecatedCount(): number {
        return this._deprecatedCount
    }
    set deprecatedCount(x: number) {
        this._deprecatedCount = x
    }
    $DeprecatedCount(x: number) {
        this.deprecatedCount = x; return this
    }

    _deprecatedFirstTimestamp: Time;
    get deprecatedFirstTimestamp(): Time {
        return this._deprecatedFirstTimestamp
    }
    set deprecatedFirstTimestamp(x: Time) {
        this._deprecatedFirstTimestamp = x
    }
    $DeprecatedFirstTimestamp(x: Time) {
        this.deprecatedFirstTimestamp = x; return this
    }

    _deprecatedLastTimestamp: Time;
    get deprecatedLastTimestamp(): Time {
        return this._deprecatedLastTimestamp
    }
    set deprecatedLastTimestamp(x: Time) {
        this._deprecatedLastTimestamp = x
    }
    $DeprecatedLastTimestamp(x: Time) {
        this.deprecatedLastTimestamp = x; return this
    }

    _deprecatedSource: EventSourceHelper;
    get deprecatedSource(): EventSourceHelper {
        return this._deprecatedSource
    }
    set deprecatedSource(x: EventSourceHelper) {
        this._deprecatedSource = x
    }
    $DeprecatedSource(x: EventSourceHelper) {
        this.deprecatedSource = x; return this
    }

    _eventTime: MicroTime;
    get eventTime(): MicroTime {
        return this._eventTime
    }
    set eventTime(x: MicroTime) {
        this._eventTime = x
    }
    $EventTime(x: MicroTime) {
        this.eventTime = x; return this
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

    _note: string;
    get note(): string {
        return this._note
    }
    set note(x: string) {
        this._note = x
    }
    $Note(x: string) {
        this.note = x; return this
    }

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $Reason(x: string) {
        this.reason = x; return this
    }

    _regarding: ObjectReferenceHelper;
    get regarding(): ObjectReferenceHelper {
        return this._regarding
    }
    set regarding(x: ObjectReferenceHelper) {
        this._regarding = x
    }
    $Regarding(x: ObjectReferenceHelper) {
        this.regarding = x; return this
    }

    _related: ObjectReferenceHelper;
    get related(): ObjectReferenceHelper {
        return this._related
    }
    set related(x: ObjectReferenceHelper) {
        this._related = x
    }
    $Related(x: ObjectReferenceHelper) {
        this.related = x; return this
    }

    _reportingController: string;
    get reportingController(): string {
        return this._reportingController
    }
    set reportingController(x: string) {
        this._reportingController = x
    }
    $ReportingController(x: string) {
        this.reportingController = x; return this
    }

    _reportingInstance: string;
    get reportingInstance(): string {
        return this._reportingInstance
    }
    set reportingInstance(x: string) {
        this._reportingInstance = x
    }
    $ReportingInstance(x: string) {
        this.reportingInstance = x; return this
    }

    _series: EventSeriesHelper;
    get series(): EventSeriesHelper {
        return this._series
    }
    set series(x: EventSeriesHelper) {
        this._series = x
    }
    $Series(x: EventSeriesHelper) {
        this.series = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $Type(x: string) {
        this.type = x; return this
    }
}

export interface EventListHelper extends EventList {
    $items(x: Array<Event>): EventListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): EventListHelper;
}

/** EventList is a list of Event objects. */
export class EventListHelper extends ResourceTemplate implements EventListHelper {
    static kind = 'EventList';
    static apiVersion = 'events/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, EventListHelper.kind, EventListHelper.apiVersion)
    }

    _items: Array<Event>;
    get items(): Array<Event> {
        return this._items
    }
    set items(x: Array<Event>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<Event>) {
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

export interface EventSeriesHelper extends EventSeries {
    $count(x: number): EventSeriesHelper;
    $lastObservedTime(x: MicroTime): EventSeriesHelper;
}

/** EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. How often to update the EventSeries is up to the event reporters. The default event reporter in "k8s.io/client-go/tools/events/event_broadcaster.go" shows how this struct is updated on heartbeats and can guide customized reporter implementations. */
export class EventSeriesHelper extends Template implements EventSeriesHelper {
    constructor(obj: any) {
        super(obj)
    }

    _count: number;
    get count(): number {
        return this._count
    }
    set count(x: number) {
        this._count = x
    }
    $Count(x: number) {
        this.count = x; return this
    }

    _lastObservedTime: MicroTime;
    get lastObservedTime(): MicroTime {
        return this._lastObservedTime
    }
    set lastObservedTime(x: MicroTime) {
        this._lastObservedTime = x
    }
    $LastObservedTime(x: MicroTime) {
        this.lastObservedTime = x; return this
    }
}
