import { ResourceTemplate, Template } from "../resourceTemplate";
import { Endpoint, EndpointConditions, EndpointHints, EndpointPort, EndpointSlice, EndpointSliceList, ForZone } from "./v1";
import { ObjectReference } from "../core/v1";
import { ObjectReferenceHelper } from "../core/v1-helper";
import { ListMeta, ObjectMeta } from "../meta/v1";
import { ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";

export interface EndpointHelper extends Endpoint {
    $addresses(x: Array<string>): EndpointHelper;
    $conditions(x: EndpointConditionsHelper): EndpointHelper;
    $deprecatedTopology(x: any): EndpointHelper;
    $hints(x: EndpointHintsHelper): EndpointHelper;
    $hostname(x: string): EndpointHelper;
    $nodeName(x: string): EndpointHelper;
    $targetRef(x: ObjectReferenceHelper): EndpointHelper;
    $zone(x: string): EndpointHelper;
}

/** Endpoint represents a single logical "backend" implementing a service. */
export class EndpointHelper extends Template implements EndpointHelper {
    constructor(obj: any) {
        super(obj)
    }

    _addresses: Array<string>;
    get addresses(): Array<string> {
        return this._addresses
    }
    set addresses(x: Array<string>) {
        this._addresses = this.set(this.addresses, x)
    }
    $addresses(x: Array<string>) {
        this.addresses = x; return this
    }

    _conditions: EndpointConditionsHelper;
    get conditions(): EndpointConditionsHelper {
        return this._conditions
    }
    set conditions(x: EndpointConditionsHelper) {
        this._conditions = x
    }
    $conditions(x: EndpointConditionsHelper) {
        this.conditions = x; return this
    }

    _deprecatedTopology: any;
    get deprecatedTopology(): any {
        return this._deprecatedTopology
    }
    set deprecatedTopology(x: any) {
        this._deprecatedTopology = this.set(this.deprecatedTopology, x)
    }
    $deprecatedTopology(x: any) {
        this.deprecatedTopology = x; return this
    }

    _hints: EndpointHintsHelper;
    get hints(): EndpointHintsHelper {
        return this._hints
    }
    set hints(x: EndpointHintsHelper) {
        this._hints = x
    }
    $hints(x: EndpointHintsHelper) {
        this.hints = x; return this
    }

    _hostname: string;
    get hostname(): string {
        return this._hostname
    }
    set hostname(x: string) {
        this._hostname = x
    }
    $hostname(x: string) {
        this.hostname = x; return this
    }

    _nodeName: string;
    get nodeName(): string {
        return this._nodeName
    }
    set nodeName(x: string) {
        this._nodeName = x
    }
    $nodeName(x: string) {
        this.nodeName = x; return this
    }

    _targetRef: ObjectReferenceHelper;
    get targetRef(): ObjectReferenceHelper {
        return this._targetRef
    }
    set targetRef(x: ObjectReferenceHelper) {
        this._targetRef = x
    }
    $targetRef(x: ObjectReferenceHelper) {
        this.targetRef = x; return this
    }

    _zone: string;
    get zone(): string {
        return this._zone
    }
    set zone(x: string) {
        this._zone = x
    }
    $zone(x: string) {
        this.zone = x; return this
    }
}

export interface EndpointConditionsHelper extends EndpointConditions {
    $ready(x: boolean): EndpointConditionsHelper;
    $serving(x: boolean): EndpointConditionsHelper;
    $terminating(x: boolean): EndpointConditionsHelper;
}

/** EndpointConditions represents the current condition of an endpoint. */
export class EndpointConditionsHelper extends Template implements EndpointConditionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ready: boolean;
    get ready(): boolean {
        return this._ready
    }
    set ready(x: boolean) {
        this._ready = x
    }
    $ready(x: boolean) {
        this.ready = x; return this
    }

    _serving: boolean;
    get serving(): boolean {
        return this._serving
    }
    set serving(x: boolean) {
        this._serving = x
    }
    $serving(x: boolean) {
        this.serving = x; return this
    }

    _terminating: boolean;
    get terminating(): boolean {
        return this._terminating
    }
    set terminating(x: boolean) {
        this._terminating = x
    }
    $terminating(x: boolean) {
        this.terminating = x; return this
    }
}

export interface EndpointHintsHelper extends EndpointHints {
    $forZones(x: Array<ForZone>): EndpointHintsHelper;
}

/** EndpointHints provides hints describing how an endpoint should be consumed. */
export class EndpointHintsHelper extends Template implements EndpointHintsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _forZones: Array<ForZone>;
    get forZones(): Array<ForZone> {
        return this._forZones
    }
    set forZones(x: Array<ForZone>) {
        this._forZones = this.set(this.forZones, x)
    }
    $forZones(x: Array<ForZone>) {
        this.forZones = x; return this
    }
}

export interface EndpointPortHelper extends EndpointPort {
    $appProtocol(x: string): EndpointPortHelper;
    $port(x: number): EndpointPortHelper;
    $protocol(x: string): EndpointPortHelper;
}

/** EndpointPort represents a Port used by an EndpointSlice */
export class EndpointPortHelper extends Template implements EndpointPortHelper {
    constructor(obj: any) {
        super(obj)
    }

    _appProtocol: string;
    get appProtocol(): string {
        return this._appProtocol
    }
    set appProtocol(x: string) {
        this._appProtocol = x
    }
    $appProtocol(x: string) {
        this.appProtocol = x; return this
    }

    _port: number;
    get port(): number {
        return this._port
    }
    set port(x: number) {
        this._port = x
    }
    $port(x: number) {
        this.port = x; return this
    }

    _protocol: string;
    get protocol(): string {
        return this._protocol
    }
    set protocol(x: string) {
        this._protocol = x
    }
    $protocol(x: string) {
        this.protocol = x; return this
    }
}

export interface EndpointSliceHelper extends EndpointSlice {
    $addressType(x: string): EndpointSliceHelper;
    $endpoints(x: Array<Endpoint>): EndpointSliceHelper;
    $metadata(x: ObjectMetaHelper): EndpointSliceHelper;
    $ports(x: Array<EndpointPort>): EndpointSliceHelper;
}

/** EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints. */
export class EndpointSliceHelper extends ResourceTemplate implements EndpointSliceHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "EndpointSlice", "discovery.k8s.io/v1")
    }

    _addressType: string;
    get addressType(): string {
        return this._addressType
    }
    set addressType(x: string) {
        this._addressType = x
    }
    $addressType(x: string) {
        this.addressType = x; return this
    }

    _endpoints: Array<Endpoint>;
    get endpoints(): Array<Endpoint> {
        return this._endpoints
    }
    set endpoints(x: Array<Endpoint>) {
        this._endpoints = this.set(this.endpoints, x)
    }
    $endpoints(x: Array<Endpoint>) {
        this.endpoints = x; return this
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

    _ports: Array<EndpointPort>;
    get ports(): Array<EndpointPort> {
        return this._ports
    }
    set ports(x: Array<EndpointPort>) {
        this._ports = this.set(this.ports, x)
    }
    $ports(x: Array<EndpointPort>) {
        this.ports = x; return this
    }
}

export interface EndpointSliceListHelper extends EndpointSliceList {
    $items(x: Array<EndpointSlice>): EndpointSliceListHelper;
    $metadata(x: ListMetaHelper): EndpointSliceListHelper;
}

/** EndpointSliceList represents a list of endpoint slices */
export class EndpointSliceListHelper extends ResourceTemplate implements EndpointSliceListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "EndpointSliceList", "discovery.k8s.io/v1")
    }

    _items: Array<EndpointSlice>;
    get items(): Array<EndpointSlice> {
        return this._items
    }
    set items(x: Array<EndpointSlice>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<EndpointSlice>) {
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

export interface ForZoneHelper extends ForZone {
}

/** ForZone provides information about which zones should consume this endpoint. */
export class ForZoneHelper extends Template implements ForZoneHelper {
    constructor(obj: any) {
        super(obj)
    }
}
