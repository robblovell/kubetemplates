import { ResourceTemplate, Template } from "../resourceTemplate";
import { HTTPIngressPath, HTTPIngressRuleValue, IPBlock, Ingress, IngressBackend, IngressClass, IngressClassList, IngressClassParametersReference, IngressClassSpec, IngressList, IngressRule, IngressServiceBackend, IngressSpec, IngressStatus, IngressTLS, NetworkPolicy, NetworkPolicyEgressRule, NetworkPolicyIngressRule, NetworkPolicyList, NetworkPolicyPeer, NetworkPolicyPort, NetworkPolicySpec, ServiceBackendPort } from "./v1";
import { LabelSelector, ListMeta, ObjectMeta } from "../meta/v1";
import { LoadBalancerStatus, TypedLocalObjectReference } from "../core/v1";

export interface HTTPIngressPathHelper extends HTTPIngressPath {
    backend: IngressBackendHelper;
    $backend(x: IngressBackendHelper): HTTPIngressPathHelper;
    $path(x: string): HTTPIngressPathHelper;
    $pathType(x: string): HTTPIngressPathHelper;
}

/** HTTPIngressPath associates a path with a backend. Incoming urls matching the path are forwarded to the backend. */
export class HTTPIngressPathHelper extends Template implements HTTPIngressPathHelper {
    constructor(obj: any) {
        super(obj)
    }

    _backend: IngressBackendHelper;
    get backend(): IngressBackendHelper {
        return this._backend
    }
    set backend(x: IngressBackendHelper) {
        this._backend = x
    }
    $Backend(x: IngressBackendHelper) {
        this.backend = x; return this
    }

    _path: string;
    get path(): string {
        return this._path
    }
    set path(x: string) {
        this._path = x
    }
    $Path(x: string) {
        this.path = x; return this
    }

    _pathType: string;
    get pathType(): string {
        return this._pathType
    }
    set pathType(x: string) {
        this._pathType = x
    }
    $PathType(x: string) {
        this.pathType = x; return this
    }
}

export interface HTTPIngressRuleValueHelper extends HTTPIngressRuleValue {
    $paths(x: Array<HTTPIngressPath>): HTTPIngressRuleValueHelper;
}

/** HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'. */
export class HTTPIngressRuleValueHelper extends Template implements HTTPIngressRuleValueHelper {
    constructor(obj: any) {
        super(obj)
    }

    _paths: Array<HTTPIngressPath>;
    get paths(): Array<HTTPIngressPath> {
        return this._paths
    }
    set paths(x: Array<HTTPIngressPath>) {
        this._paths = this.set(this.paths, x)
    }
    $Paths(x: Array<HTTPIngressPath>) {
        this.paths = x; return this
    }
}

export interface IPBlockHelper extends IPBlock {
    $cidr(x: string): IPBlockHelper;
    $except(x: Array<string>): IPBlockHelper;
}

/** IPBlock describes a particular CIDR (Ex. "192.168.1.1/24","2001:db9::/64") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule. */
export class IPBlockHelper extends Template implements IPBlockHelper {
    constructor(obj: any) {
        super(obj)
    }

    _cidr: string;
    get cidr(): string {
        return this._cidr
    }
    set cidr(x: string) {
        this._cidr = x
    }
    $Cidr(x: string) {
        this.cidr = x; return this
    }

    _except: Array<string>;
    get except(): Array<string> {
        return this._except
    }
    set except(x: Array<string>) {
        this._except = this.set(this.except, x)
    }
    $Except(x: Array<string>) {
        this.except = x; return this
    }
}

export interface IngressHelper extends Ingress {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): IngressHelper;
    spec: IngressSpecHelper;
    $spec(x: IngressSpecHelper): IngressHelper;
    status: IngressStatusHelper;
    $status(x: IngressStatusHelper): IngressHelper;
}

/** Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. */
export class IngressHelper extends ResourceTemplate implements IngressHelper {
    static kind = 'Ingress';
    static apiVersion = 'networking/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, IngressHelper.kind, IngressHelper.apiVersion)
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

    _spec: IngressSpecHelper;
    get spec(): IngressSpecHelper {
        return this._spec
    }
    set spec(x: IngressSpecHelper) {
        this._spec = x
    }
    $Spec(x: IngressSpecHelper) {
        this.spec = x; return this
    }

    _status: IngressStatusHelper;
    get status(): IngressStatusHelper {
        return this._status
    }
    set status(x: IngressStatusHelper) {
        this._status = x
    }
    $Status(x: IngressStatusHelper) {
        this.status = x; return this
    }
}

export interface IngressBackendHelper extends IngressBackend {
    resource: TypedLocalObjectReferenceHelper;
    $resource(x: TypedLocalObjectReferenceHelper): IngressBackendHelper;
    service: IngressServiceBackendHelper;
    $service(x: IngressServiceBackendHelper): IngressBackendHelper;
}

/** IngressBackend describes all endpoints for a given service and port. */
export class IngressBackendHelper extends Template implements IngressBackendHelper {
    constructor(obj: any) {
        super(obj)
    }

    _resource: TypedLocalObjectReferenceHelper;
    get resource(): TypedLocalObjectReferenceHelper {
        return this._resource
    }
    set resource(x: TypedLocalObjectReferenceHelper) {
        this._resource = x
    }
    $Resource(x: TypedLocalObjectReferenceHelper) {
        this.resource = x; return this
    }

    _service: IngressServiceBackendHelper;
    get service(): IngressServiceBackendHelper {
        return this._service
    }
    set service(x: IngressServiceBackendHelper) {
        this._service = x
    }
    $Service(x: IngressServiceBackendHelper) {
        this.service = x; return this
    }
}

export interface IngressClassHelper extends IngressClass {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): IngressClassHelper;
    spec: IngressClassSpecHelper;
    $spec(x: IngressClassSpecHelper): IngressClassHelper;
}

/** IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class. */
export class IngressClassHelper extends ResourceTemplate implements IngressClassHelper {
    static kind = 'IngressClass';
    static apiVersion = 'networking/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, IngressClassHelper.kind, IngressClassHelper.apiVersion)
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

    _spec: IngressClassSpecHelper;
    get spec(): IngressClassSpecHelper {
        return this._spec
    }
    set spec(x: IngressClassSpecHelper) {
        this._spec = x
    }
    $Spec(x: IngressClassSpecHelper) {
        this.spec = x; return this
    }
}

export interface IngressClassListHelper extends IngressClassList {
    $items(x: Array<IngressClass>): IngressClassListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): IngressClassListHelper;
}

/** IngressClassList is a collection of IngressClasses. */
export class IngressClassListHelper extends ResourceTemplate implements IngressClassListHelper {
    static kind = 'IngressClassList';
    static apiVersion = 'networking/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, IngressClassListHelper.kind, IngressClassListHelper.apiVersion)
    }

    _items: Array<IngressClass>;
    get items(): Array<IngressClass> {
        return this._items
    }
    set items(x: Array<IngressClass>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<IngressClass>) {
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

export interface IngressClassParametersReferenceHelper extends IngressClassParametersReference {
    $apiGroup(x: string): IngressClassParametersReferenceHelper;
    $scope(x: string): IngressClassParametersReferenceHelper;
}

/** IngressClassParametersReference identifies an API object. This can be used to specify a cluster or namespace-scoped resource. */
export class IngressClassParametersReferenceHelper extends Template implements IngressClassParametersReferenceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _apiGroup: string;
    get apiGroup(): string {
        return this._apiGroup
    }
    set apiGroup(x: string) {
        this._apiGroup = x
    }
    $ApiGroup(x: string) {
        this.apiGroup = x; return this
    }

    _scope: string;
    get scope(): string {
        return this._scope
    }
    set scope(x: string) {
        this._scope = x
    }
    $Scope(x: string) {
        this.scope = x; return this
    }
}

export interface IngressClassSpecHelper extends IngressClassSpec {
    $controller(x: string): IngressClassSpecHelper;
    parameters: IngressClassParametersReferenceHelper;
    $parameters(x: IngressClassParametersReferenceHelper): IngressClassSpecHelper;
}

/** IngressClassSpec provides information about the class of an Ingress. */
export class IngressClassSpecHelper extends Template implements IngressClassSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _controller: string;
    get controller(): string {
        return this._controller
    }
    set controller(x: string) {
        this._controller = x
    }
    $Controller(x: string) {
        this.controller = x; return this
    }

    _parameters: IngressClassParametersReferenceHelper;
    get parameters(): IngressClassParametersReferenceHelper {
        return this._parameters
    }
    set parameters(x: IngressClassParametersReferenceHelper) {
        this._parameters = x
    }
    $Parameters(x: IngressClassParametersReferenceHelper) {
        this.parameters = x; return this
    }
}

export interface IngressListHelper extends IngressList {
    $items(x: Array<Ingress>): IngressListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): IngressListHelper;
}

/** IngressList is a collection of Ingress. */
export class IngressListHelper extends ResourceTemplate implements IngressListHelper {
    static kind = 'IngressList';
    static apiVersion = 'networking/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, IngressListHelper.kind, IngressListHelper.apiVersion)
    }

    _items: Array<Ingress>;
    get items(): Array<Ingress> {
        return this._items
    }
    set items(x: Array<Ingress>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<Ingress>) {
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

export interface IngressRuleHelper extends IngressRule {
    $host(x: string): IngressRuleHelper;
    http: HTTPIngressRuleValueHelper;
    $http(x: HTTPIngressRuleValueHelper): IngressRuleHelper;
}

/** IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue. */
export class IngressRuleHelper extends Template implements IngressRuleHelper {
    constructor(obj: any) {
        super(obj)
    }

    _host: string;
    get host(): string {
        return this._host
    }
    set host(x: string) {
        this._host = x
    }
    $Host(x: string) {
        this.host = x; return this
    }

    _http: HTTPIngressRuleValueHelper;
    get http(): HTTPIngressRuleValueHelper {
        return this._http
    }
    set http(x: HTTPIngressRuleValueHelper) {
        this._http = x
    }
    $Http(x: HTTPIngressRuleValueHelper) {
        this.http = x; return this
    }
}

export interface IngressServiceBackendHelper extends IngressServiceBackend {
    port: ServiceBackendPortHelper;
    $port(x: ServiceBackendPortHelper): IngressServiceBackendHelper;
}

/** IngressServiceBackend references a Kubernetes Service as a Backend. */
export class IngressServiceBackendHelper extends Template implements IngressServiceBackendHelper {
    constructor(obj: any) {
        super(obj)
    }

    _port: ServiceBackendPortHelper;
    get port(): ServiceBackendPortHelper {
        return this._port
    }
    set port(x: ServiceBackendPortHelper) {
        this._port = x
    }
    $Port(x: ServiceBackendPortHelper) {
        this.port = x; return this
    }
}

export interface IngressSpecHelper extends IngressSpec {
    defaultBackend: IngressBackendHelper;
    $defaultBackend(x: IngressBackendHelper): IngressSpecHelper;
    $ingressClassName(x: string): IngressSpecHelper;
    $rules(x: Array<IngressRule>): IngressSpecHelper;
    $tls(x: Array<IngressTLS>): IngressSpecHelper;
}

/** IngressSpec describes the Ingress the user wishes to exist. */
export class IngressSpecHelper extends Template implements IngressSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _defaultBackend: IngressBackendHelper;
    get defaultBackend(): IngressBackendHelper {
        return this._defaultBackend
    }
    set defaultBackend(x: IngressBackendHelper) {
        this._defaultBackend = x
    }
    $DefaultBackend(x: IngressBackendHelper) {
        this.defaultBackend = x; return this
    }

    _ingressClassName: string;
    get ingressClassName(): string {
        return this._ingressClassName
    }
    set ingressClassName(x: string) {
        this._ingressClassName = x
    }
    $IngressClassName(x: string) {
        this.ingressClassName = x; return this
    }

    _rules: Array<IngressRule>;
    get rules(): Array<IngressRule> {
        return this._rules
    }
    set rules(x: Array<IngressRule>) {
        this._rules = this.set(this.rules, x)
    }
    $Rules(x: Array<IngressRule>) {
        this.rules = x; return this
    }

    _tls: Array<IngressTLS>;
    get tls(): Array<IngressTLS> {
        return this._tls
    }
    set tls(x: Array<IngressTLS>) {
        this._tls = this.set(this.tls, x)
    }
    $Tls(x: Array<IngressTLS>) {
        this.tls = x; return this
    }
}

export interface IngressStatusHelper extends IngressStatus {
    loadBalancer: LoadBalancerStatusHelper;
    $loadBalancer(x: LoadBalancerStatusHelper): IngressStatusHelper;
}

/** IngressStatus describe the current state of the Ingress. */
export class IngressStatusHelper extends Template implements IngressStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _loadBalancer: LoadBalancerStatusHelper;
    get loadBalancer(): LoadBalancerStatusHelper {
        return this._loadBalancer
    }
    set loadBalancer(x: LoadBalancerStatusHelper) {
        this._loadBalancer = x
    }
    $LoadBalancer(x: LoadBalancerStatusHelper) {
        this.loadBalancer = x; return this
    }
}

export interface IngressTLSHelper extends IngressTLS {
    $hosts(x: Array<string>): IngressTLSHelper;
    $secretName(x: string): IngressTLSHelper;
}

/** IngressTLS describes the transport layer security associated with an Ingress. */
export class IngressTLSHelper extends Template implements IngressTLSHelper {
    constructor(obj: any) {
        super(obj)
    }

    _hosts: Array<string>;
    get hosts(): Array<string> {
        return this._hosts
    }
    set hosts(x: Array<string>) {
        this._hosts = this.set(this.hosts, x)
    }
    $Hosts(x: Array<string>) {
        this.hosts = x; return this
    }

    _secretName: string;
    get secretName(): string {
        return this._secretName
    }
    set secretName(x: string) {
        this._secretName = x
    }
    $SecretName(x: string) {
        this.secretName = x; return this
    }
}

export interface NetworkPolicyHelper extends NetworkPolicy {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): NetworkPolicyHelper;
    spec: NetworkPolicySpecHelper;
    $spec(x: NetworkPolicySpecHelper): NetworkPolicyHelper;
}

/** NetworkPolicy describes what network traffic is allowed for a set of Pods */
export class NetworkPolicyHelper extends ResourceTemplate implements NetworkPolicyHelper {
    static kind = 'NetworkPolicy';
    static apiVersion = 'networking/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, NetworkPolicyHelper.kind, NetworkPolicyHelper.apiVersion)
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

    _spec: NetworkPolicySpecHelper;
    get spec(): NetworkPolicySpecHelper {
        return this._spec
    }
    set spec(x: NetworkPolicySpecHelper) {
        this._spec = x
    }
    $Spec(x: NetworkPolicySpecHelper) {
        this.spec = x; return this
    }
}

export interface NetworkPolicyEgressRuleHelper extends NetworkPolicyEgressRule {
    $ports(x: Array<NetworkPolicyPort>): NetworkPolicyEgressRuleHelper;
    $to(x: Array<NetworkPolicyPeer>): NetworkPolicyEgressRuleHelper;
}

/** NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8 */
export class NetworkPolicyEgressRuleHelper extends Template implements NetworkPolicyEgressRuleHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ports: Array<NetworkPolicyPort>;
    get ports(): Array<NetworkPolicyPort> {
        return this._ports
    }
    set ports(x: Array<NetworkPolicyPort>) {
        this._ports = this.set(this.ports, x)
    }
    $Ports(x: Array<NetworkPolicyPort>) {
        this.ports = x; return this
    }

    _to: Array<NetworkPolicyPeer>;
    get to(): Array<NetworkPolicyPeer> {
        return this._to
    }
    set to(x: Array<NetworkPolicyPeer>) {
        this._to = this.set(this.to, x)
    }
    $To(x: Array<NetworkPolicyPeer>) {
        this.to = x; return this
    }
}

export interface NetworkPolicyIngressRuleHelper extends NetworkPolicyIngressRule {
    $from(x: Array<NetworkPolicyPeer>): NetworkPolicyIngressRuleHelper;
    $ports(x: Array<NetworkPolicyPort>): NetworkPolicyIngressRuleHelper;
}

/** NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from. */
export class NetworkPolicyIngressRuleHelper extends Template implements NetworkPolicyIngressRuleHelper {
    constructor(obj: any) {
        super(obj)
    }

    _from: Array<NetworkPolicyPeer>;
    get from(): Array<NetworkPolicyPeer> {
        return this._from
    }
    set from(x: Array<NetworkPolicyPeer>) {
        this._from = this.set(this.from, x)
    }
    $From(x: Array<NetworkPolicyPeer>) {
        this.from = x; return this
    }

    _ports: Array<NetworkPolicyPort>;
    get ports(): Array<NetworkPolicyPort> {
        return this._ports
    }
    set ports(x: Array<NetworkPolicyPort>) {
        this._ports = this.set(this.ports, x)
    }
    $Ports(x: Array<NetworkPolicyPort>) {
        this.ports = x; return this
    }
}

export interface NetworkPolicyListHelper extends NetworkPolicyList {
    $items(x: Array<NetworkPolicy>): NetworkPolicyListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): NetworkPolicyListHelper;
}

/** NetworkPolicyList is a list of NetworkPolicy objects. */
export class NetworkPolicyListHelper extends ResourceTemplate implements NetworkPolicyListHelper {
    static kind = 'NetworkPolicyList';
    static apiVersion = 'networking/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, NetworkPolicyListHelper.kind, NetworkPolicyListHelper.apiVersion)
    }

    _items: Array<NetworkPolicy>;
    get items(): Array<NetworkPolicy> {
        return this._items
    }
    set items(x: Array<NetworkPolicy>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<NetworkPolicy>) {
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

export interface NetworkPolicyPeerHelper extends NetworkPolicyPeer {
    ipBlock: IPBlockHelper;
    $ipBlock(x: IPBlockHelper): NetworkPolicyPeerHelper;
    namespaceSelector: LabelSelectorHelper;
    $namespaceSelector(x: LabelSelectorHelper): NetworkPolicyPeerHelper;
    podSelector: LabelSelectorHelper;
    $podSelector(x: LabelSelectorHelper): NetworkPolicyPeerHelper;
}

/** NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed */
export class NetworkPolicyPeerHelper extends Template implements NetworkPolicyPeerHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ipBlock: IPBlockHelper;
    get ipBlock(): IPBlockHelper {
        return this._ipBlock
    }
    set ipBlock(x: IPBlockHelper) {
        this._ipBlock = x
    }
    $IpBlock(x: IPBlockHelper) {
        this.ipBlock = x; return this
    }

    _namespaceSelector: LabelSelectorHelper;
    get namespaceSelector(): LabelSelectorHelper {
        return this._namespaceSelector
    }
    set namespaceSelector(x: LabelSelectorHelper) {
        this._namespaceSelector = x
    }
    $NamespaceSelector(x: LabelSelectorHelper) {
        this.namespaceSelector = x; return this
    }

    _podSelector: LabelSelectorHelper;
    get podSelector(): LabelSelectorHelper {
        return this._podSelector
    }
    set podSelector(x: LabelSelectorHelper) {
        this._podSelector = x
    }
    $PodSelector(x: LabelSelectorHelper) {
        this.podSelector = x; return this
    }
}

export interface NetworkPolicyPortHelper extends NetworkPolicyPort {
    $endPort(x: number): NetworkPolicyPortHelper;
    port: number | stringHelper;
    $port(x: number | stringHelper): NetworkPolicyPortHelper;
    $protocol(x: string): NetworkPolicyPortHelper;
}

/** NetworkPolicyPort describes a port to allow traffic on */
export class NetworkPolicyPortHelper extends Template implements NetworkPolicyPortHelper {
    constructor(obj: any) {
        super(obj)
    }

    _endPort: number;
    get endPort(): number {
        return this._endPort
    }
    set endPort(x: number) {
        this._endPort = x
    }
    $EndPort(x: number) {
        this.endPort = x; return this
    }

    _port: number | stringHelper;
    get port(): number | stringHelper {
        return this._port
    }
    set port(x: number | stringHelper) {
        this._port = x
    }
    $Port(x: number | stringHelper) {
        this.port = x; return this
    }

    _protocol: string;
    get protocol(): string {
        return this._protocol
    }
    set protocol(x: string) {
        this._protocol = x
    }
    $Protocol(x: string) {
        this.protocol = x; return this
    }
}

export interface NetworkPolicySpecHelper extends NetworkPolicySpec {
    $egress(x: Array<NetworkPolicyEgressRule>): NetworkPolicySpecHelper;
    $ingress(x: Array<NetworkPolicyIngressRule>): NetworkPolicySpecHelper;
    podSelector: LabelSelectorHelper;
    $podSelector(x: LabelSelectorHelper): NetworkPolicySpecHelper;
    $policyTypes(x: Array<string>): NetworkPolicySpecHelper;
}

/** NetworkPolicySpec provides the specification of a NetworkPolicy */
export class NetworkPolicySpecHelper extends Template implements NetworkPolicySpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _egress: Array<NetworkPolicyEgressRule>;
    get egress(): Array<NetworkPolicyEgressRule> {
        return this._egress
    }
    set egress(x: Array<NetworkPolicyEgressRule>) {
        this._egress = this.set(this.egress, x)
    }
    $Egress(x: Array<NetworkPolicyEgressRule>) {
        this.egress = x; return this
    }

    _ingress: Array<NetworkPolicyIngressRule>;
    get ingress(): Array<NetworkPolicyIngressRule> {
        return this._ingress
    }
    set ingress(x: Array<NetworkPolicyIngressRule>) {
        this._ingress = this.set(this.ingress, x)
    }
    $Ingress(x: Array<NetworkPolicyIngressRule>) {
        this.ingress = x; return this
    }

    _podSelector: LabelSelectorHelper;
    get podSelector(): LabelSelectorHelper {
        return this._podSelector
    }
    set podSelector(x: LabelSelectorHelper) {
        this._podSelector = x
    }
    $PodSelector(x: LabelSelectorHelper) {
        this.podSelector = x; return this
    }

    _policyTypes: Array<string>;
    get policyTypes(): Array<string> {
        return this._policyTypes
    }
    set policyTypes(x: Array<string>) {
        this._policyTypes = this.set(this.policyTypes, x)
    }
    $PolicyTypes(x: Array<string>) {
        this.policyTypes = x; return this
    }
}

export interface ServiceBackendPortHelper extends ServiceBackendPort {
    $number(x: number): ServiceBackendPortHelper;
}

/** ServiceBackendPort is the service port being referenced. */
export class ServiceBackendPortHelper extends Template implements ServiceBackendPortHelper {
    constructor(obj: any) {
        super(obj)
    }

    _number: number;
    get number(): number {
        return this._number
    }
    set number(x: number) {
        this._number = x
    }
    $Number(x: number) {
        this.number = x; return this
    }
}
