import { ResourceTemplate, Template } from "../resourceTemplate";
import { HTTPIngressPath, HTTPIngressRuleValue, Ingress, IngressBackend, IngressList, IngressRule, IngressSpec, IngressStatus, IngressTLS } from "./v1beta1";
import { ListMeta, ObjectMeta } from "../meta/v1";
import { ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";
import { LoadBalancerStatus, TypedLocalObjectReference } from "../core/v1";
import { LoadBalancerStatusHelper, TypedLocalObjectReferenceHelper } from "../core/v1-helper";

export interface HTTPIngressPathHelper extends HTTPIngressPath {
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
    $backend(x: IngressBackendHelper) {
        this.backend = x; return this
    }

    _path: string;
    get path(): string {
        return this._path
    }
    set path(x: string) {
        this._path = x
    }
    $path(x: string) {
        this.path = x; return this
    }

    _pathType: string;
    get pathType(): string {
        return this._pathType
    }
    set pathType(x: string) {
        this._pathType = x
    }
    $pathType(x: string) {
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
    $paths(x: Array<HTTPIngressPath>) {
        this.paths = x; return this
    }
}

export interface IngressHelper extends Ingress {
    $metadata(x: ObjectMetaHelper): IngressHelper;
    $spec(x: IngressSpecHelper): IngressHelper;
    $status(x: IngressStatusHelper): IngressHelper;
}

/** Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. DEPRECATED - This group version of Ingress is deprecated by networking.k8s.io/v1beta1 Ingress. See the release notes for more information. */
export class IngressHelper extends ResourceTemplate implements IngressHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "Ingress", "extensions/v1beta1")
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

    _spec: IngressSpecHelper;
    get spec(): IngressSpecHelper {
        return this._spec
    }
    set spec(x: IngressSpecHelper) {
        this._spec = x
    }
    $spec(x: IngressSpecHelper) {
        this.spec = x; return this
    }

    _status: IngressStatusHelper;
    get status(): IngressStatusHelper {
        return this._status
    }
    set status(x: IngressStatusHelper) {
        this._status = x
    }
    $status(x: IngressStatusHelper) {
        this.status = x; return this
    }
}

export interface IngressBackendHelper extends IngressBackend {
    $resource(x: TypedLocalObjectReferenceHelper): IngressBackendHelper;
    $serviceName(x: string): IngressBackendHelper;
    $servicePort(x: number | string): IngressBackendHelper;
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
    $resource(x: TypedLocalObjectReferenceHelper) {
        this.resource = x; return this
    }

    _serviceName: string;
    get serviceName(): string {
        return this._serviceName
    }
    set serviceName(x: string) {
        this._serviceName = x
    }
    $serviceName(x: string) {
        this.serviceName = x; return this
    }

    _servicePort: number | string;
    get servicePort(): number | string {
        return this._servicePort
    }
    set servicePort(x: number | string) {
        this._servicePort = x
    }
    $servicePort(x: number | string) {
        this.servicePort = x; return this
    }
}

export interface IngressListHelper extends IngressList {
    $items(x: Array<Ingress>): IngressListHelper;
    $metadata(x: ListMetaHelper): IngressListHelper;
}

/** IngressList is a collection of Ingress. */
export class IngressListHelper extends ResourceTemplate implements IngressListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "IngressList", "extensions/v1beta1")
    }

    _items: Array<Ingress>;
    get items(): Array<Ingress> {
        return this._items
    }
    set items(x: Array<Ingress>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<Ingress>) {
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

export interface IngressRuleHelper extends IngressRule {
    $host(x: string): IngressRuleHelper;
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
    $host(x: string) {
        this.host = x; return this
    }

    _http: HTTPIngressRuleValueHelper;
    get http(): HTTPIngressRuleValueHelper {
        return this._http
    }
    set http(x: HTTPIngressRuleValueHelper) {
        this._http = x
    }
    $http(x: HTTPIngressRuleValueHelper) {
        this.http = x; return this
    }
}

export interface IngressSpecHelper extends IngressSpec {
    $backend(x: IngressBackendHelper): IngressSpecHelper;
    $ingressClassName(x: string): IngressSpecHelper;
    $rules(x: Array<IngressRule>): IngressSpecHelper;
    $tls(x: Array<IngressTLS>): IngressSpecHelper;
}

/** IngressSpec describes the Ingress the user wishes to exist. */
export class IngressSpecHelper extends Template implements IngressSpecHelper {
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
    $backend(x: IngressBackendHelper) {
        this.backend = x; return this
    }

    _ingressClassName: string;
    get ingressClassName(): string {
        return this._ingressClassName
    }
    set ingressClassName(x: string) {
        this._ingressClassName = x
    }
    $ingressClassName(x: string) {
        this.ingressClassName = x; return this
    }

    _rules: Array<IngressRule>;
    get rules(): Array<IngressRule> {
        return this._rules
    }
    set rules(x: Array<IngressRule>) {
        this._rules = this.set(this.rules, x)
    }
    $rules(x: Array<IngressRule>) {
        this.rules = x; return this
    }

    _tls: Array<IngressTLS>;
    get tls(): Array<IngressTLS> {
        return this._tls
    }
    set tls(x: Array<IngressTLS>) {
        this._tls = this.set(this.tls, x)
    }
    $tls(x: Array<IngressTLS>) {
        this.tls = x; return this
    }
}

export interface IngressStatusHelper extends IngressStatus {
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
    $loadBalancer(x: LoadBalancerStatusHelper) {
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
    $hosts(x: Array<string>) {
        this.hosts = x; return this
    }

    _secretName: string;
    get secretName(): string {
        return this._secretName
    }
    set secretName(x: string) {
        this._secretName = x
    }
    $secretName(x: string) {
        this.secretName = x; return this
    }
}
