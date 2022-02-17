import { ResourceTemplate, Template } from "../resourceTemplate";
import { Endpoint, EndpointConditions, EndpointHints, EndpointPort, EndpointSlice, EndpointSliceList, ForZone } from "./v1";
import { ObjectReference } from "../core/v1";
import { ListMeta, ObjectMeta } from "../meta/v1";

export interface EndpointHelper extends Endpoint {
    $addresses(x: any): any;
    $conditions(x: any): any;
    $deprecatedTopology(x: any): any;
    $hints(x: any): any;
    $hostname(x: any): any;
    $nodeName(x: any): any;
    $targetRef(x: any): any;
    $zone(x: any): any;
}

/** Endpoint represents a single logical "backend" implementing a service. */
export class EndpointHelper extends Template implements EndpointHelper {
    constructor(obj: any) {
        super(obj)
    }

    _addresses: any;
    get addresses(): any /*Array<string>*/ {
        return this._addresses
    }
    set addresses(x: any /*Array<string>*/) {
        this._addresses = this.set(this.addresses, x)
    }
    setAddresses(x: any /*Array<string>*/) {
        this.addresses = x; return this
    }

    _conditions: any;
    get conditions(): any /*EndpointConditionsHelper*/ {
        return this._conditions
    }
    set conditions(x: any /*EndpointConditionsHelper*/) {
        this._conditions = x
    }
    setConditions(x: any /*EndpointConditionsHelper*/) {
        this.conditions = x; return this
    }

    _deprecatedTopology: any;
    get deprecatedTopology(): any /*any*/ {
        return this._deprecatedTopology
    }
    set deprecatedTopology(x: any /*any*/) {
        this._deprecatedTopology = this.set(this.deprecatedTopology, x)
    }
    setDeprecatedTopology(x: any /*any*/) {
        this.deprecatedTopology = x; return this
    }

    _hints: any;
    get hints(): any /*EndpointHintsHelper*/ {
        return this._hints
    }
    set hints(x: any /*EndpointHintsHelper*/) {
        this._hints = x
    }
    setHints(x: any /*EndpointHintsHelper*/) {
        this.hints = x; return this
    }

    _hostname: any;
    get hostname(): any /*string*/ {
        return this._hostname
    }
    set hostname(x: any /*string*/) {
        this._hostname = x
    }
    setHostname(x: any /*string*/) {
        this.hostname = x; return this
    }

    _nodeName: any;
    get nodeName(): any /*string*/ {
        return this._nodeName
    }
    set nodeName(x: any /*string*/) {
        this._nodeName = x
    }
    setNodeName(x: any /*string*/) {
        this.nodeName = x; return this
    }

    _targetRef: any;
    get targetRef(): any /*ObjectReferenceHelper*/ {
        return this._targetRef
    }
    set targetRef(x: any /*ObjectReferenceHelper*/) {
        this._targetRef = x
    }
    setTargetRef(x: any /*ObjectReferenceHelper*/) {
        this.targetRef = x; return this
    }

    _zone: any;
    get zone(): any /*string*/ {
        return this._zone
    }
    set zone(x: any /*string*/) {
        this._zone = x
    }
    setZone(x: any /*string*/) {
        this.zone = x; return this
    }
}

export interface EndpointConditionsHelper extends EndpointConditions {
    $ready(x: any): any;
    $serving(x: any): any;
    $terminating(x: any): any;
}

/** EndpointConditions represents the current condition of an endpoint. */
export class EndpointConditionsHelper extends Template implements EndpointConditionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ready: any;
    get ready(): any /*boolean*/ {
        return this._ready
    }
    set ready(x: any /*boolean*/) {
        this._ready = x
    }
    setReady(x: any /*boolean*/) {
        this.ready = x; return this
    }

    _serving: any;
    get serving(): any /*boolean*/ {
        return this._serving
    }
    set serving(x: any /*boolean*/) {
        this._serving = x
    }
    setServing(x: any /*boolean*/) {
        this.serving = x; return this
    }

    _terminating: any;
    get terminating(): any /*boolean*/ {
        return this._terminating
    }
    set terminating(x: any /*boolean*/) {
        this._terminating = x
    }
    setTerminating(x: any /*boolean*/) {
        this.terminating = x; return this
    }
}

export interface EndpointHintsHelper extends EndpointHints {
    $forZones(x: any): any;
}

/** EndpointHints provides hints describing how an endpoint should be consumed. */
export class EndpointHintsHelper extends Template implements EndpointHintsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _forZones: any;
    get forZones(): any /*Array<ForZone>*/ {
        return this._forZones
    }
    set forZones(x: any /*Array<ForZone>*/) {
        this._forZones = this.set(this.forZones, x)
    }
    setForZones(x: any /*Array<ForZone>*/) {
        this.forZones = x; return this
    }
}

export interface EndpointPortHelper extends EndpointPort {
    $appProtocol(x: any): any;
    $port(x: any): any;
    $protocol(x: any): any;
}

/** EndpointPort represents a Port used by an EndpointSlice */
export class EndpointPortHelper extends Template implements EndpointPortHelper {
    constructor(obj: any) {
        super(obj)
    }

    _appProtocol: any;
    get appProtocol(): any /*string*/ {
        return this._appProtocol
    }
    set appProtocol(x: any /*string*/) {
        this._appProtocol = x
    }
    setAppProtocol(x: any /*string*/) {
        this.appProtocol = x; return this
    }

    _port: any;
    get port(): any /*number*/ {
        return this._port
    }
    set port(x: any /*number*/) {
        this._port = x
    }
    setPort(x: any /*number*/) {
        this.port = x; return this
    }

    _protocol: any;
    get protocol(): any /*string*/ {
        return this._protocol
    }
    set protocol(x: any /*string*/) {
        this._protocol = x
    }
    setProtocol(x: any /*string*/) {
        this.protocol = x; return this
    }
}

export interface EndpointSliceHelper extends EndpointSlice {
    $addressType(x: any): any;
    $endpoints(x: any): any;
    $metadata(x: any): any;
    $ports(x: any): any;
}

/** EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints. */
export class EndpointSliceHelper extends ResourceTemplate implements EndpointSliceHelper {
    static kind = 'EndpointSlice';
    static apiVersion = 'discovery/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, EndpointSliceHelper.kind, EndpointSliceHelper.apiVersion)
    }

    _addressType: any;
    get addressType(): any /*string*/ {
        return this._addressType
    }
    set addressType(x: any /*string*/) {
        this._addressType = x
    }
    setAddressType(x: any /*string*/) {
        this.addressType = x; return this
    }

    _endpoints: any;
    get endpoints(): any /*Array<Endpoint>*/ {
        return this._endpoints
    }
    set endpoints(x: any /*Array<Endpoint>*/) {
        this._endpoints = this.set(this.endpoints, x)
    }
    setEndpoints(x: any /*Array<Endpoint>*/) {
        this.endpoints = x; return this
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

    _ports: any;
    get ports(): any /*Array<EndpointPort>*/ {
        return this._ports
    }
    set ports(x: any /*Array<EndpointPort>*/) {
        this._ports = this.set(this.ports, x)
    }
    setPorts(x: any /*Array<EndpointPort>*/) {
        this.ports = x; return this
    }
}

export interface EndpointSliceListHelper extends EndpointSliceList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** EndpointSliceList represents a list of endpoint slices */
export class EndpointSliceListHelper extends ResourceTemplate implements EndpointSliceListHelper {
    static kind = 'EndpointSliceList';
    static apiVersion = 'discovery/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, EndpointSliceListHelper.kind, EndpointSliceListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<EndpointSlice>*/ {
        return this._items
    }
    set items(x: any /*Array<EndpointSlice>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<EndpointSlice>*/) {
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

export interface ForZoneHelper extends ForZone {
}

/** ForZone provides information about which zones should consume this endpoint. */
export class ForZoneHelper extends Template implements ForZoneHelper {
    constructor(obj: any) {
        super(obj)
    }
}
