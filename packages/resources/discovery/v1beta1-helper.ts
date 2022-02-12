import { ResourceTemplate } from "../resourceTemplate";
import { Endpoint, EndpointConditions, EndpointHints, EndpointPort, EndpointSlice, ForZone } from "./v1beta1";
import { ObjectReference } from "../core/v1";
import { ListMeta, ObjectMeta } from "../meta/v1";

/** Endpoint represents a single logical "backend" implementing a service. */
export class EndpointHelper extends ResourceTemplate {
    static kind = 'Endpoint';
    static apiVersion = 'discovery/v1beta1';

    addresses(addresses: Array<string>): EndpointHelper {
        if (!Array.isArray(addresses)) { addresses = [addresses] }
        if (!this._template.addresses) this._template.addresses = addresses
        this._template.addresses = [...this._template.addresses, ...addresses]
        return this
    }

    conditions(conditions: EndpointConditions): EndpointHelper {
        if (!this._template.conditions) this._template.conditions = []
        this._template.conditions = {
            ...this._template.conditions,
            ...conditions
        }
        return this
    }

    hints(hints: EndpointHints): EndpointHelper {
        if (!this._template.hints) this._template.hints = []
        this._template.hints = {
            ...this._template.hints,
            ...hints
        }
        return this
    }

    hostname(hostname: string): EndpointHelper {
        this._template.hostname = hostname
        return this
    }

    nodeName(nodeName: string): EndpointHelper {
        this._template.nodeName = nodeName
        return this
    }

    targetRef(targetRef: ObjectReference): EndpointHelper {
        if (!this._template.targetRef) this._template.targetRef = []
        this._template.targetRef = {
            ...this._template.targetRef,
            ...targetRef
        }
        return this
    }

    topology(topology: {[name: string]: string}): EndpointHelper {
        if (!this._template.topology) this._template.topology = []
        this._template.topology = {
            ...this._template.topology,
            ...topology
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EndpointHelper.kind
        this._template.apiVersion = EndpointHelper.apiVersion
    }
}

/** EndpointConditions represents the current condition of an endpoint. */
export class EndpointConditionsHelper extends ResourceTemplate {
    static kind = 'EndpointConditions';
    static apiVersion = 'discovery/v1beta1';

    ready(ready: boolean): EndpointConditionsHelper {
        this._template.ready = ready
        return this
    }

    serving(serving: boolean): EndpointConditionsHelper {
        this._template.serving = serving
        return this
    }

    terminating(terminating: boolean): EndpointConditionsHelper {
        this._template.terminating = terminating
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EndpointConditionsHelper.kind
        this._template.apiVersion = EndpointConditionsHelper.apiVersion
    }
}

/** EndpointHints provides hints describing how an endpoint should be consumed. */
export class EndpointHintsHelper extends ResourceTemplate {
    static kind = 'EndpointHints';
    static apiVersion = 'discovery/v1beta1';

    forZones(forZones: Array<ForZone>): EndpointHintsHelper {
        if (!Array.isArray(forZones)) { forZones = [forZones] }
        if (!this._template.forZones) this._template.forZones = forZones
        this._template.forZones = [...this._template.forZones, ...forZones]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EndpointHintsHelper.kind
        this._template.apiVersion = EndpointHintsHelper.apiVersion
    }
}

/** EndpointPort represents a Port used by an EndpointSlice */
export class EndpointPortHelper extends ResourceTemplate {
    static kind = 'EndpointPort';
    static apiVersion = 'discovery/v1beta1';

    appProtocol(appProtocol: string): EndpointPortHelper {
        this._template.appProtocol = appProtocol
        return this
    }

    port(port: number): EndpointPortHelper {
        this._template.port = port
        return this
    }

    protocol(protocol: string): EndpointPortHelper {
        this._template.protocol = protocol
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EndpointPortHelper.kind
        this._template.apiVersion = EndpointPortHelper.apiVersion
    }
}

/** EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints. */
export class EndpointSliceHelper extends ResourceTemplate {
    static kind = 'EndpointSlice';
    static apiVersion = 'discovery/v1beta1';

    addressType(addressType: string): EndpointSliceHelper {
        this._template.addressType = addressType
        return this
    }

    endpoints(endpoints: Array<Endpoint>): EndpointSliceHelper {
        if (!Array.isArray(endpoints)) { endpoints = [endpoints] }
        if (!this._template.endpoints) this._template.endpoints = endpoints
        this._template.endpoints = [...this._template.endpoints, ...endpoints]
        return this
    }

    metadata(metadata: ObjectMeta): EndpointSliceHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    ports(ports: Array<EndpointPort>): EndpointSliceHelper {
        if (!Array.isArray(ports)) { ports = [ports] }
        if (!this._template.ports) this._template.ports = ports
        this._template.ports = [...this._template.ports, ...ports]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EndpointSliceHelper.kind
        this._template.apiVersion = EndpointSliceHelper.apiVersion
    }
}

/** EndpointSliceList represents a list of endpoint slices */
export class EndpointSliceListHelper extends ResourceTemplate {
    static kind = 'EndpointSliceList';
    static apiVersion = 'discovery/v1beta1';

    items(items: Array<EndpointSlice>): EndpointSliceListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): EndpointSliceListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EndpointSliceListHelper.kind
        this._template.apiVersion = EndpointSliceListHelper.apiVersion
    }
}

/** ForZone provides information about which zones should consume this endpoint. */
export class ForZoneHelper extends ResourceTemplate {
    static kind = 'ForZone';
    static apiVersion = 'discovery/v1beta1';

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ForZoneHelper.kind
        this._template.apiVersion = ForZoneHelper.apiVersion
    }
}
