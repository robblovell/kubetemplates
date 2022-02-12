import { ResourceTemplate } from "../resourceTemplate";
import { HTTPIngressPath, HTTPIngressRuleValue, IPBlock, Ingress, IngressBackend, IngressClass, IngressClassParametersReference, IngressClassSpec, IngressRule, IngressServiceBackend, IngressSpec, IngressStatus, IngressTLS, NetworkPolicy, NetworkPolicyEgressRule, NetworkPolicyIngressRule, NetworkPolicyPeer, NetworkPolicyPort, NetworkPolicySpec, ServiceBackendPort } from "./v1";
import { LabelSelector, ListMeta, ObjectMeta } from "../meta/v1";
import { LoadBalancerStatus, TypedLocalObjectReference } from "../core/v1";

/** HTTPIngressPath associates a path with a backend. Incoming urls matching the path are forwarded to the backend. */
export class HTTPIngressPathHelper extends ResourceTemplate {
    static kind = 'HTTPIngressPath';
    static apiVersion = 'networking/v1';

    backend(backend: IngressBackend): HTTPIngressPathHelper {
        if (!this._template.backend) this._template.backend = []
        this._template.backend = {
            ...this._template.backend,
            ...backend
        }
        return this
    }

    path(path: string): HTTPIngressPathHelper {
        this._template.path = path
        return this
    }

    pathType(pathType: string): HTTPIngressPathHelper {
        this._template.pathType = pathType
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HTTPIngressPathHelper.kind
        this._template.apiVersion = HTTPIngressPathHelper.apiVersion
    }
}

/** HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'. */
export class HTTPIngressRuleValueHelper extends ResourceTemplate {
    static kind = 'HTTPIngressRuleValue';
    static apiVersion = 'networking/v1';

    paths(paths: Array<HTTPIngressPath>): HTTPIngressRuleValueHelper {
        if (!Array.isArray(paths)) { paths = [paths] }
        if (!this._template.paths) this._template.paths = paths
        this._template.paths = [...this._template.paths, ...paths]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HTTPIngressRuleValueHelper.kind
        this._template.apiVersion = HTTPIngressRuleValueHelper.apiVersion
    }
}

/** IPBlock describes a particular CIDR (Ex. "192.168.1.1/24","2001:db9::/64") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule. */
export class IPBlockHelper extends ResourceTemplate {
    static kind = 'IPBlock';
    static apiVersion = 'networking/v1';

    cidr(cidr: string): IPBlockHelper {
        this._template.cidr = cidr
        return this
    }

    except(except: Array<string>): IPBlockHelper {
        if (!Array.isArray(except)) { except = [except] }
        if (!this._template.except) this._template.except = except
        this._template.except = [...this._template.except, ...except]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = IPBlockHelper.kind
        this._template.apiVersion = IPBlockHelper.apiVersion
    }
}

/** Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. */
export class IngressHelper extends ResourceTemplate {
    static kind = 'Ingress';
    static apiVersion = 'networking/v1';

    metadata(metadata: ObjectMeta): IngressHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: IngressSpec): IngressHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: IngressStatus): IngressHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = IngressHelper.kind
        this._template.apiVersion = IngressHelper.apiVersion
    }
}

/** IngressBackend describes all endpoints for a given service and port. */
export class IngressBackendHelper extends ResourceTemplate {
    static kind = 'IngressBackend';
    static apiVersion = 'networking/v1';

    resource(resource: TypedLocalObjectReference): IngressBackendHelper {
        if (!this._template.resource) this._template.resource = []
        this._template.resource = {
            ...this._template.resource,
            ...resource
        }
        return this
    }

    service(service: IngressServiceBackend): IngressBackendHelper {
        if (!this._template.service) this._template.service = []
        this._template.service = {
            ...this._template.service,
            ...service
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = IngressBackendHelper.kind
        this._template.apiVersion = IngressBackendHelper.apiVersion
    }
}

/** IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class. */
export class IngressClassHelper extends ResourceTemplate {
    static kind = 'IngressClass';
    static apiVersion = 'networking/v1';

    metadata(metadata: ObjectMeta): IngressClassHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: IngressClassSpec): IngressClassHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = IngressClassHelper.kind
        this._template.apiVersion = IngressClassHelper.apiVersion
    }
}

/** IngressClassList is a collection of IngressClasses. */
export class IngressClassListHelper extends ResourceTemplate {
    static kind = 'IngressClassList';
    static apiVersion = 'networking/v1';

    items(items: Array<IngressClass>): IngressClassListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): IngressClassListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = IngressClassListHelper.kind
        this._template.apiVersion = IngressClassListHelper.apiVersion
    }
}

/** IngressClassParametersReference identifies an API object. This can be used to specify a cluster or namespace-scoped resource. */
export class IngressClassParametersReferenceHelper extends ResourceTemplate {
    static kind = 'IngressClassParametersReference';
    static apiVersion = 'networking/v1';

    apiGroup(apiGroup: string): IngressClassParametersReferenceHelper {
        this._template.apiGroup = apiGroup
        return this
    }

    scope(scope: string): IngressClassParametersReferenceHelper {
        this._template.scope = scope
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = IngressClassParametersReferenceHelper.kind
        this._template.apiVersion = IngressClassParametersReferenceHelper.apiVersion
    }
}

/** IngressClassSpec provides information about the class of an Ingress. */
export class IngressClassSpecHelper extends ResourceTemplate {
    static kind = 'IngressClassSpec';
    static apiVersion = 'networking/v1';

    controller(controller: string): IngressClassSpecHelper {
        this._template.controller = controller
        return this
    }

    parameters(parameters: IngressClassParametersReference): IngressClassSpecHelper {
        if (!this._template.parameters) this._template.parameters = []
        this._template.parameters = {
            ...this._template.parameters,
            ...parameters
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = IngressClassSpecHelper.kind
        this._template.apiVersion = IngressClassSpecHelper.apiVersion
    }
}

/** IngressList is a collection of Ingress. */
export class IngressListHelper extends ResourceTemplate {
    static kind = 'IngressList';
    static apiVersion = 'networking/v1';

    items(items: Array<Ingress>): IngressListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): IngressListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = IngressListHelper.kind
        this._template.apiVersion = IngressListHelper.apiVersion
    }
}

/** IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue. */
export class IngressRuleHelper extends ResourceTemplate {
    static kind = 'IngressRule';
    static apiVersion = 'networking/v1';

    host(host: string): IngressRuleHelper {
        this._template.host = host
        return this
    }

    http(http: HTTPIngressRuleValue): IngressRuleHelper {
        if (!this._template.http) this._template.http = []
        this._template.http = {
            ...this._template.http,
            ...http
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = IngressRuleHelper.kind
        this._template.apiVersion = IngressRuleHelper.apiVersion
    }
}

/** IngressServiceBackend references a Kubernetes Service as a Backend. */
export class IngressServiceBackendHelper extends ResourceTemplate {
    static kind = 'IngressServiceBackend';
    static apiVersion = 'networking/v1';

    port(port: ServiceBackendPort): IngressServiceBackendHelper {
        if (!this._template.port) this._template.port = []
        this._template.port = {
            ...this._template.port,
            ...port
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = IngressServiceBackendHelper.kind
        this._template.apiVersion = IngressServiceBackendHelper.apiVersion
    }
}

/** IngressSpec describes the Ingress the user wishes to exist. */
export class IngressSpecHelper extends ResourceTemplate {
    static kind = 'IngressSpec';
    static apiVersion = 'networking/v1';

    defaultBackend(defaultBackend: IngressBackend): IngressSpecHelper {
        if (!this._template.defaultBackend) this._template.defaultBackend = []
        this._template.defaultBackend = {
            ...this._template.defaultBackend,
            ...defaultBackend
        }
        return this
    }

    ingressClassName(ingressClassName: string): IngressSpecHelper {
        this._template.ingressClassName = ingressClassName
        return this
    }

    rules(rules: Array<IngressRule>): IngressSpecHelper {
        if (!Array.isArray(rules)) { rules = [rules] }
        if (!this._template.rules) this._template.rules = rules
        this._template.rules = [...this._template.rules, ...rules]
        return this
    }

    tls(tls: Array<IngressTLS>): IngressSpecHelper {
        if (!Array.isArray(tls)) { tls = [tls] }
        if (!this._template.tls) this._template.tls = tls
        this._template.tls = [...this._template.tls, ...tls]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = IngressSpecHelper.kind
        this._template.apiVersion = IngressSpecHelper.apiVersion
    }
}

/** IngressStatus describe the current state of the Ingress. */
export class IngressStatusHelper extends ResourceTemplate {
    static kind = 'IngressStatus';
    static apiVersion = 'networking/v1';

    loadBalancer(loadBalancer: LoadBalancerStatus): IngressStatusHelper {
        if (!this._template.loadBalancer) this._template.loadBalancer = []
        this._template.loadBalancer = {
            ...this._template.loadBalancer,
            ...loadBalancer
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = IngressStatusHelper.kind
        this._template.apiVersion = IngressStatusHelper.apiVersion
    }
}

/** IngressTLS describes the transport layer security associated with an Ingress. */
export class IngressTLSHelper extends ResourceTemplate {
    static kind = 'IngressTLS';
    static apiVersion = 'networking/v1';

    hosts(hosts: Array<string>): IngressTLSHelper {
        if (!Array.isArray(hosts)) { hosts = [hosts] }
        if (!this._template.hosts) this._template.hosts = hosts
        this._template.hosts = [...this._template.hosts, ...hosts]
        return this
    }

    secretName(secretName: string): IngressTLSHelper {
        this._template.secretName = secretName
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = IngressTLSHelper.kind
        this._template.apiVersion = IngressTLSHelper.apiVersion
    }
}

/** NetworkPolicy describes what network traffic is allowed for a set of Pods */
export class NetworkPolicyHelper extends ResourceTemplate {
    static kind = 'NetworkPolicy';
    static apiVersion = 'networking/v1';

    metadata(metadata: ObjectMeta): NetworkPolicyHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: NetworkPolicySpec): NetworkPolicyHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NetworkPolicyHelper.kind
        this._template.apiVersion = NetworkPolicyHelper.apiVersion
    }
}

/** NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8 */
export class NetworkPolicyEgressRuleHelper extends ResourceTemplate {
    static kind = 'NetworkPolicyEgressRule';
    static apiVersion = 'networking/v1';

    ports(ports: Array<NetworkPolicyPort>): NetworkPolicyEgressRuleHelper {
        if (!Array.isArray(ports)) { ports = [ports] }
        if (!this._template.ports) this._template.ports = ports
        this._template.ports = [...this._template.ports, ...ports]
        return this
    }

    to(to: Array<NetworkPolicyPeer>): NetworkPolicyEgressRuleHelper {
        if (!Array.isArray(to)) { to = [to] }
        if (!this._template.to) this._template.to = to
        this._template.to = [...this._template.to, ...to]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NetworkPolicyEgressRuleHelper.kind
        this._template.apiVersion = NetworkPolicyEgressRuleHelper.apiVersion
    }
}

/** NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from. */
export class NetworkPolicyIngressRuleHelper extends ResourceTemplate {
    static kind = 'NetworkPolicyIngressRule';
    static apiVersion = 'networking/v1';

    from(from: Array<NetworkPolicyPeer>): NetworkPolicyIngressRuleHelper {
        if (!Array.isArray(from)) { from = [from] }
        if (!this._template.from) this._template.from = from
        this._template.from = [...this._template.from, ...from]
        return this
    }

    ports(ports: Array<NetworkPolicyPort>): NetworkPolicyIngressRuleHelper {
        if (!Array.isArray(ports)) { ports = [ports] }
        if (!this._template.ports) this._template.ports = ports
        this._template.ports = [...this._template.ports, ...ports]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NetworkPolicyIngressRuleHelper.kind
        this._template.apiVersion = NetworkPolicyIngressRuleHelper.apiVersion
    }
}

/** NetworkPolicyList is a list of NetworkPolicy objects. */
export class NetworkPolicyListHelper extends ResourceTemplate {
    static kind = 'NetworkPolicyList';
    static apiVersion = 'networking/v1';

    items(items: Array<NetworkPolicy>): NetworkPolicyListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): NetworkPolicyListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NetworkPolicyListHelper.kind
        this._template.apiVersion = NetworkPolicyListHelper.apiVersion
    }
}

/** NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed */
export class NetworkPolicyPeerHelper extends ResourceTemplate {
    static kind = 'NetworkPolicyPeer';
    static apiVersion = 'networking/v1';

    ipBlock(ipBlock: IPBlock): NetworkPolicyPeerHelper {
        if (!this._template.ipBlock) this._template.ipBlock = []
        this._template.ipBlock = {
            ...this._template.ipBlock,
            ...ipBlock
        }
        return this
    }

    namespaceSelector(namespaceSelector: LabelSelector): NetworkPolicyPeerHelper {
        if (!this._template.namespaceSelector) this._template.namespaceSelector = []
        this._template.namespaceSelector = {
            ...this._template.namespaceSelector,
            ...namespaceSelector
        }
        return this
    }

    podSelector(podSelector: LabelSelector): NetworkPolicyPeerHelper {
        if (!this._template.podSelector) this._template.podSelector = []
        this._template.podSelector = {
            ...this._template.podSelector,
            ...podSelector
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NetworkPolicyPeerHelper.kind
        this._template.apiVersion = NetworkPolicyPeerHelper.apiVersion
    }
}

/** NetworkPolicyPort describes a port to allow traffic on */
export class NetworkPolicyPortHelper extends ResourceTemplate {
    static kind = 'NetworkPolicyPort';
    static apiVersion = 'networking/v1';

    endPort(endPort: number): NetworkPolicyPortHelper {
        this._template.endPort = endPort
        return this
    }

    port(port: number | string): NetworkPolicyPortHelper {
        this._template.port = port
        return this
    }

    protocol(protocol: string): NetworkPolicyPortHelper {
        this._template.protocol = protocol
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NetworkPolicyPortHelper.kind
        this._template.apiVersion = NetworkPolicyPortHelper.apiVersion
    }
}

/** NetworkPolicySpec provides the specification of a NetworkPolicy */
export class NetworkPolicySpecHelper extends ResourceTemplate {
    static kind = 'NetworkPolicySpec';
    static apiVersion = 'networking/v1';

    egress(egress: Array<NetworkPolicyEgressRule>): NetworkPolicySpecHelper {
        if (!Array.isArray(egress)) { egress = [egress] }
        if (!this._template.egress) this._template.egress = egress
        this._template.egress = [...this._template.egress, ...egress]
        return this
    }

    ingress(ingress: Array<NetworkPolicyIngressRule>): NetworkPolicySpecHelper {
        if (!Array.isArray(ingress)) { ingress = [ingress] }
        if (!this._template.ingress) this._template.ingress = ingress
        this._template.ingress = [...this._template.ingress, ...ingress]
        return this
    }

    podSelector(podSelector: LabelSelector): NetworkPolicySpecHelper {
        if (!this._template.podSelector) this._template.podSelector = []
        this._template.podSelector = {
            ...this._template.podSelector,
            ...podSelector
        }
        return this
    }

    policyTypes(policyTypes: Array<string>): NetworkPolicySpecHelper {
        if (!Array.isArray(policyTypes)) { policyTypes = [policyTypes] }
        if (!this._template.policyTypes) this._template.policyTypes = policyTypes
        this._template.policyTypes = [...this._template.policyTypes, ...policyTypes]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NetworkPolicySpecHelper.kind
        this._template.apiVersion = NetworkPolicySpecHelper.apiVersion
    }
}

/** ServiceBackendPort is the service port being referenced. */
export class ServiceBackendPortHelper extends ResourceTemplate {
    static kind = 'ServiceBackendPort';
    static apiVersion = 'networking/v1';

    number(number: number): ServiceBackendPortHelper {
        this._template.number = number
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ServiceBackendPortHelper.kind
        this._template.apiVersion = ServiceBackendPortHelper.apiVersion
    }
}
