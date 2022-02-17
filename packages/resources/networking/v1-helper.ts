import { ResourceTemplate, Template } from "../resourceTemplate";
import { HTTPIngressPath, HTTPIngressRuleValue, IPBlock, Ingress, IngressBackend, IngressClass, IngressClassList, IngressClassParametersReference, IngressClassSpec, IngressList, IngressRule, IngressServiceBackend, IngressSpec, IngressStatus, IngressTLS, NetworkPolicy, NetworkPolicyEgressRule, NetworkPolicyIngressRule, NetworkPolicyList, NetworkPolicyPeer, NetworkPolicyPort, NetworkPolicySpec, ServiceBackendPort } from "./v1";
import { LabelSelector, ListMeta, ObjectMeta } from "../meta/v1";
import { LoadBalancerStatus, TypedLocalObjectReference } from "../core/v1";

export interface HTTPIngressPathHelper extends HTTPIngressPath {
    $backend(x: any): any;
    $path(x: any): any;
    $pathType(x: any): any;
}

/** HTTPIngressPath associates a path with a backend. Incoming urls matching the path are forwarded to the backend. */
export class HTTPIngressPathHelper extends Template implements HTTPIngressPathHelper {
    constructor(obj: any) {
        super(obj)
    }

    _backend: any;
    get backend(): any /*IngressBackendHelper*/ {
        return this._backend
    }
    set backend(x: any /*IngressBackendHelper*/) {
        this._backend = x
    }
    setBackend(x: any /*IngressBackendHelper*/) {
        this.backend = x; return this
    }

    _path: any;
    get path(): any /*string*/ {
        return this._path
    }
    set path(x: any /*string*/) {
        this._path = x
    }
    setPath(x: any /*string*/) {
        this.path = x; return this
    }

    _pathType: any;
    get pathType(): any /*string*/ {
        return this._pathType
    }
    set pathType(x: any /*string*/) {
        this._pathType = x
    }
    setPathType(x: any /*string*/) {
        this.pathType = x; return this
    }
}

export interface HTTPIngressRuleValueHelper extends HTTPIngressRuleValue {
    $paths(x: any): any;
}

/** HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'. */
export class HTTPIngressRuleValueHelper extends Template implements HTTPIngressRuleValueHelper {
    constructor(obj: any) {
        super(obj)
    }

    _paths: any;
    get paths(): any /*Array<HTTPIngressPath>*/ {
        return this._paths
    }
    set paths(x: any /*Array<HTTPIngressPath>*/) {
        this._paths = this.set(this.paths, x)
    }
    setPaths(x: any /*Array<HTTPIngressPath>*/) {
        this.paths = x; return this
    }
}

export interface IPBlockHelper extends IPBlock {
    $cidr(x: any): any;
    $except(x: any): any;
}

/** IPBlock describes a particular CIDR (Ex. "192.168.1.1/24","2001:db9::/64") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule. */
export class IPBlockHelper extends Template implements IPBlockHelper {
    constructor(obj: any) {
        super(obj)
    }

    _cidr: any;
    get cidr(): any /*string*/ {
        return this._cidr
    }
    set cidr(x: any /*string*/) {
        this._cidr = x
    }
    setCidr(x: any /*string*/) {
        this.cidr = x; return this
    }

    _except: any;
    get except(): any /*Array<string>*/ {
        return this._except
    }
    set except(x: any /*Array<string>*/) {
        this._except = this.set(this.except, x)
    }
    setExcept(x: any /*Array<string>*/) {
        this.except = x; return this
    }
}

export interface IngressHelper extends Ingress {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. */
export class IngressHelper extends ResourceTemplate implements IngressHelper {
    static kind = 'Ingress';
    static apiVersion = 'networking/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, IngressHelper.kind, IngressHelper.apiVersion)
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

    _spec: any;
    get spec(): any /*IngressSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*IngressSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*IngressSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*IngressStatusHelper*/ {
        return this._status
    }
    set status(x: any /*IngressStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*IngressStatusHelper*/) {
        this.status = x; return this
    }
}

export interface IngressBackendHelper extends IngressBackend {
    $resource(x: any): any;
    $service(x: any): any;
}

/** IngressBackend describes all endpoints for a given service and port. */
export class IngressBackendHelper extends Template implements IngressBackendHelper {
    constructor(obj: any) {
        super(obj)
    }

    _resource: any;
    get resource(): any /*TypedLocalObjectReferenceHelper*/ {
        return this._resource
    }
    set resource(x: any /*TypedLocalObjectReferenceHelper*/) {
        this._resource = x
    }
    setResource(x: any /*TypedLocalObjectReferenceHelper*/) {
        this.resource = x; return this
    }

    _service: any;
    get service(): any /*IngressServiceBackendHelper*/ {
        return this._service
    }
    set service(x: any /*IngressServiceBackendHelper*/) {
        this._service = x
    }
    setService(x: any /*IngressServiceBackendHelper*/) {
        this.service = x; return this
    }
}

export interface IngressClassHelper extends IngressClass {
    $metadata(x: any): any;
    $spec(x: any): any;
}

/** IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class. */
export class IngressClassHelper extends ResourceTemplate implements IngressClassHelper {
    static kind = 'IngressClass';
    static apiVersion = 'networking/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, IngressClassHelper.kind, IngressClassHelper.apiVersion)
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

    _spec: any;
    get spec(): any /*IngressClassSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*IngressClassSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*IngressClassSpecHelper*/) {
        this.spec = x; return this
    }
}

export interface IngressClassListHelper extends IngressClassList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** IngressClassList is a collection of IngressClasses. */
export class IngressClassListHelper extends ResourceTemplate implements IngressClassListHelper {
    static kind = 'IngressClassList';
    static apiVersion = 'networking/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, IngressClassListHelper.kind, IngressClassListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<IngressClass>*/ {
        return this._items
    }
    set items(x: any /*Array<IngressClass>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<IngressClass>*/) {
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

export interface IngressClassParametersReferenceHelper extends IngressClassParametersReference {
    $apiGroup(x: any): any;
    $scope(x: any): any;
}

/** IngressClassParametersReference identifies an API object. This can be used to specify a cluster or namespace-scoped resource. */
export class IngressClassParametersReferenceHelper extends Template implements IngressClassParametersReferenceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _apiGroup: any;
    get apiGroup(): any /*string*/ {
        return this._apiGroup
    }
    set apiGroup(x: any /*string*/) {
        this._apiGroup = x
    }
    setApiGroup(x: any /*string*/) {
        this.apiGroup = x; return this
    }

    _scope: any;
    get scope(): any /*string*/ {
        return this._scope
    }
    set scope(x: any /*string*/) {
        this._scope = x
    }
    setScope(x: any /*string*/) {
        this.scope = x; return this
    }
}

export interface IngressClassSpecHelper extends IngressClassSpec {
    $controller(x: any): any;
    $parameters(x: any): any;
}

/** IngressClassSpec provides information about the class of an Ingress. */
export class IngressClassSpecHelper extends Template implements IngressClassSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _controller: any;
    get controller(): any /*string*/ {
        return this._controller
    }
    set controller(x: any /*string*/) {
        this._controller = x
    }
    setController(x: any /*string*/) {
        this.controller = x; return this
    }

    _parameters: any;
    get parameters(): any /*IngressClassParametersReferenceHelper*/ {
        return this._parameters
    }
    set parameters(x: any /*IngressClassParametersReferenceHelper*/) {
        this._parameters = x
    }
    setParameters(x: any /*IngressClassParametersReferenceHelper*/) {
        this.parameters = x; return this
    }
}

export interface IngressListHelper extends IngressList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** IngressList is a collection of Ingress. */
export class IngressListHelper extends ResourceTemplate implements IngressListHelper {
    static kind = 'IngressList';
    static apiVersion = 'networking/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, IngressListHelper.kind, IngressListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<Ingress>*/ {
        return this._items
    }
    set items(x: any /*Array<Ingress>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<Ingress>*/) {
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

export interface IngressRuleHelper extends IngressRule {
    $host(x: any): any;
    $http(x: any): any;
}

/** IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue. */
export class IngressRuleHelper extends Template implements IngressRuleHelper {
    constructor(obj: any) {
        super(obj)
    }

    _host: any;
    get host(): any /*string*/ {
        return this._host
    }
    set host(x: any /*string*/) {
        this._host = x
    }
    setHost(x: any /*string*/) {
        this.host = x; return this
    }

    _http: any;
    get http(): any /*HTTPIngressRuleValueHelper*/ {
        return this._http
    }
    set http(x: any /*HTTPIngressRuleValueHelper*/) {
        this._http = x
    }
    setHttp(x: any /*HTTPIngressRuleValueHelper*/) {
        this.http = x; return this
    }
}

export interface IngressServiceBackendHelper extends IngressServiceBackend {
    $port(x: any): any;
}

/** IngressServiceBackend references a Kubernetes Service as a Backend. */
export class IngressServiceBackendHelper extends Template implements IngressServiceBackendHelper {
    constructor(obj: any) {
        super(obj)
    }

    _port: any;
    get port(): any /*ServiceBackendPortHelper*/ {
        return this._port
    }
    set port(x: any /*ServiceBackendPortHelper*/) {
        this._port = x
    }
    setPort(x: any /*ServiceBackendPortHelper*/) {
        this.port = x; return this
    }
}

export interface IngressSpecHelper extends IngressSpec {
    $defaultBackend(x: any): any;
    $ingressClassName(x: any): any;
    $rules(x: any): any;
    $tls(x: any): any;
}

/** IngressSpec describes the Ingress the user wishes to exist. */
export class IngressSpecHelper extends Template implements IngressSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _defaultBackend: any;
    get defaultBackend(): any /*IngressBackendHelper*/ {
        return this._defaultBackend
    }
    set defaultBackend(x: any /*IngressBackendHelper*/) {
        this._defaultBackend = x
    }
    setDefaultBackend(x: any /*IngressBackendHelper*/) {
        this.defaultBackend = x; return this
    }

    _ingressClassName: any;
    get ingressClassName(): any /*string*/ {
        return this._ingressClassName
    }
    set ingressClassName(x: any /*string*/) {
        this._ingressClassName = x
    }
    setIngressClassName(x: any /*string*/) {
        this.ingressClassName = x; return this
    }

    _rules: any;
    get rules(): any /*Array<IngressRule>*/ {
        return this._rules
    }
    set rules(x: any /*Array<IngressRule>*/) {
        this._rules = this.set(this.rules, x)
    }
    setRules(x: any /*Array<IngressRule>*/) {
        this.rules = x; return this
    }

    _tls: any;
    get tls(): any /*Array<IngressTLS>*/ {
        return this._tls
    }
    set tls(x: any /*Array<IngressTLS>*/) {
        this._tls = this.set(this.tls, x)
    }
    setTls(x: any /*Array<IngressTLS>*/) {
        this.tls = x; return this
    }
}

export interface IngressStatusHelper extends IngressStatus {
    $loadBalancer(x: any): any;
}

/** IngressStatus describe the current state of the Ingress. */
export class IngressStatusHelper extends Template implements IngressStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _loadBalancer: any;
    get loadBalancer(): any /*LoadBalancerStatusHelper*/ {
        return this._loadBalancer
    }
    set loadBalancer(x: any /*LoadBalancerStatusHelper*/) {
        this._loadBalancer = x
    }
    setLoadBalancer(x: any /*LoadBalancerStatusHelper*/) {
        this.loadBalancer = x; return this
    }
}

export interface IngressTLSHelper extends IngressTLS {
    $hosts(x: any): any;
    $secretName(x: any): any;
}

/** IngressTLS describes the transport layer security associated with an Ingress. */
export class IngressTLSHelper extends Template implements IngressTLSHelper {
    constructor(obj: any) {
        super(obj)
    }

    _hosts: any;
    get hosts(): any /*Array<string>*/ {
        return this._hosts
    }
    set hosts(x: any /*Array<string>*/) {
        this._hosts = this.set(this.hosts, x)
    }
    setHosts(x: any /*Array<string>*/) {
        this.hosts = x; return this
    }

    _secretName: any;
    get secretName(): any /*string*/ {
        return this._secretName
    }
    set secretName(x: any /*string*/) {
        this._secretName = x
    }
    setSecretName(x: any /*string*/) {
        this.secretName = x; return this
    }
}

export interface NetworkPolicyHelper extends NetworkPolicy {
    $metadata(x: any): any;
    $spec(x: any): any;
}

/** NetworkPolicy describes what network traffic is allowed for a set of Pods */
export class NetworkPolicyHelper extends ResourceTemplate implements NetworkPolicyHelper {
    static kind = 'NetworkPolicy';
    static apiVersion = 'networking/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, NetworkPolicyHelper.kind, NetworkPolicyHelper.apiVersion)
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

    _spec: any;
    get spec(): any /*NetworkPolicySpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*NetworkPolicySpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*NetworkPolicySpecHelper*/) {
        this.spec = x; return this
    }
}

export interface NetworkPolicyEgressRuleHelper extends NetworkPolicyEgressRule {
    $ports(x: any): any;
    $to(x: any): any;
}

/** NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8 */
export class NetworkPolicyEgressRuleHelper extends Template implements NetworkPolicyEgressRuleHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ports: any;
    get ports(): any /*Array<NetworkPolicyPort>*/ {
        return this._ports
    }
    set ports(x: any /*Array<NetworkPolicyPort>*/) {
        this._ports = this.set(this.ports, x)
    }
    setPorts(x: any /*Array<NetworkPolicyPort>*/) {
        this.ports = x; return this
    }

    _to: any;
    get to(): any /*Array<NetworkPolicyPeer>*/ {
        return this._to
    }
    set to(x: any /*Array<NetworkPolicyPeer>*/) {
        this._to = this.set(this.to, x)
    }
    setTo(x: any /*Array<NetworkPolicyPeer>*/) {
        this.to = x; return this
    }
}

export interface NetworkPolicyIngressRuleHelper extends NetworkPolicyIngressRule {
    $from(x: any): any;
    $ports(x: any): any;
}

/** NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from. */
export class NetworkPolicyIngressRuleHelper extends Template implements NetworkPolicyIngressRuleHelper {
    constructor(obj: any) {
        super(obj)
    }

    _from: any;
    get from(): any /*Array<NetworkPolicyPeer>*/ {
        return this._from
    }
    set from(x: any /*Array<NetworkPolicyPeer>*/) {
        this._from = this.set(this.from, x)
    }
    setFrom(x: any /*Array<NetworkPolicyPeer>*/) {
        this.from = x; return this
    }

    _ports: any;
    get ports(): any /*Array<NetworkPolicyPort>*/ {
        return this._ports
    }
    set ports(x: any /*Array<NetworkPolicyPort>*/) {
        this._ports = this.set(this.ports, x)
    }
    setPorts(x: any /*Array<NetworkPolicyPort>*/) {
        this.ports = x; return this
    }
}

export interface NetworkPolicyListHelper extends NetworkPolicyList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** NetworkPolicyList is a list of NetworkPolicy objects. */
export class NetworkPolicyListHelper extends ResourceTemplate implements NetworkPolicyListHelper {
    static kind = 'NetworkPolicyList';
    static apiVersion = 'networking/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, NetworkPolicyListHelper.kind, NetworkPolicyListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<NetworkPolicy>*/ {
        return this._items
    }
    set items(x: any /*Array<NetworkPolicy>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<NetworkPolicy>*/) {
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

export interface NetworkPolicyPeerHelper extends NetworkPolicyPeer {
    $ipBlock(x: any): any;
    $namespaceSelector(x: any): any;
    $podSelector(x: any): any;
}

/** NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed */
export class NetworkPolicyPeerHelper extends Template implements NetworkPolicyPeerHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ipBlock: any;
    get ipBlock(): any /*IPBlockHelper*/ {
        return this._ipBlock
    }
    set ipBlock(x: any /*IPBlockHelper*/) {
        this._ipBlock = x
    }
    setIpBlock(x: any /*IPBlockHelper*/) {
        this.ipBlock = x; return this
    }

    _namespaceSelector: any;
    get namespaceSelector(): any /*LabelSelectorHelper*/ {
        return this._namespaceSelector
    }
    set namespaceSelector(x: any /*LabelSelectorHelper*/) {
        this._namespaceSelector = x
    }
    setNamespaceSelector(x: any /*LabelSelectorHelper*/) {
        this.namespaceSelector = x; return this
    }

    _podSelector: any;
    get podSelector(): any /*LabelSelectorHelper*/ {
        return this._podSelector
    }
    set podSelector(x: any /*LabelSelectorHelper*/) {
        this._podSelector = x
    }
    setPodSelector(x: any /*LabelSelectorHelper*/) {
        this.podSelector = x; return this
    }
}

export interface NetworkPolicyPortHelper extends NetworkPolicyPort {
    $endPort(x: any): any;
    $port(x: any): any;
    $protocol(x: any): any;
}

/** NetworkPolicyPort describes a port to allow traffic on */
export class NetworkPolicyPortHelper extends Template implements NetworkPolicyPortHelper {
    constructor(obj: any) {
        super(obj)
    }

    _endPort: any;
    get endPort(): any /*number*/ {
        return this._endPort
    }
    set endPort(x: any /*number*/) {
        this._endPort = x
    }
    setEndPort(x: any /*number*/) {
        this.endPort = x; return this
    }

    _port: any;
    get port(): any /*number | stringHelper*/ {
        return this._port
    }
    set port(x: any /*number | stringHelper*/) {
        this._port = x
    }
    setPort(x: any /*number | stringHelper*/) {
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

export interface NetworkPolicySpecHelper extends NetworkPolicySpec {
    $egress(x: any): any;
    $ingress(x: any): any;
    $podSelector(x: any): any;
    $policyTypes(x: any): any;
}

/** NetworkPolicySpec provides the specification of a NetworkPolicy */
export class NetworkPolicySpecHelper extends Template implements NetworkPolicySpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _egress: any;
    get egress(): any /*Array<NetworkPolicyEgressRule>*/ {
        return this._egress
    }
    set egress(x: any /*Array<NetworkPolicyEgressRule>*/) {
        this._egress = this.set(this.egress, x)
    }
    setEgress(x: any /*Array<NetworkPolicyEgressRule>*/) {
        this.egress = x; return this
    }

    _ingress: any;
    get ingress(): any /*Array<NetworkPolicyIngressRule>*/ {
        return this._ingress
    }
    set ingress(x: any /*Array<NetworkPolicyIngressRule>*/) {
        this._ingress = this.set(this.ingress, x)
    }
    setIngress(x: any /*Array<NetworkPolicyIngressRule>*/) {
        this.ingress = x; return this
    }

    _podSelector: any;
    get podSelector(): any /*LabelSelectorHelper*/ {
        return this._podSelector
    }
    set podSelector(x: any /*LabelSelectorHelper*/) {
        this._podSelector = x
    }
    setPodSelector(x: any /*LabelSelectorHelper*/) {
        this.podSelector = x; return this
    }

    _policyTypes: any;
    get policyTypes(): any /*Array<string>*/ {
        return this._policyTypes
    }
    set policyTypes(x: any /*Array<string>*/) {
        this._policyTypes = this.set(this.policyTypes, x)
    }
    setPolicyTypes(x: any /*Array<string>*/) {
        this.policyTypes = x; return this
    }
}

export interface ServiceBackendPortHelper extends ServiceBackendPort {
    $number(x: any): any;
}

/** ServiceBackendPort is the service port being referenced. */
export class ServiceBackendPortHelper extends Template implements ServiceBackendPortHelper {
    constructor(obj: any) {
        super(obj)
    }

    _number: any;
    get number(): any /*number*/ {
        return this._number
    }
    set number(x: any /*number*/) {
        this._number = x
    }
    setNumber(x: any /*number*/) {
        this.number = x; return this
    }
}
