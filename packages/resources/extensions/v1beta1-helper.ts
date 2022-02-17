import { ResourceTemplate, Template } from "../resourceTemplate";
import { HTTPIngressPath, HTTPIngressRuleValue, Ingress, IngressBackend, IngressList, IngressRule, IngressSpec, IngressStatus, IngressTLS } from "./v1beta1";
import { ListMeta, ObjectMeta } from "../meta/v1";
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

export interface IngressHelper extends Ingress {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. DEPRECATED - This group version of Ingress is deprecated by networking.k8s.io/v1beta1 Ingress. See the release notes for more information. */
export class IngressHelper extends ResourceTemplate implements IngressHelper {
    static kind = 'Ingress';
    static apiVersion = 'extensions/v1beta1';

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
    $serviceName(x: any): any;
    $servicePort(x: any): any;
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

    _serviceName: any;
    get serviceName(): any /*string*/ {
        return this._serviceName
    }
    set serviceName(x: any /*string*/) {
        this._serviceName = x
    }
    setServiceName(x: any /*string*/) {
        this.serviceName = x; return this
    }

    _servicePort: any;
    get servicePort(): any /*number | stringHelper*/ {
        return this._servicePort
    }
    set servicePort(x: any /*number | stringHelper*/) {
        this._servicePort = x
    }
    setServicePort(x: any /*number | stringHelper*/) {
        this.servicePort = x; return this
    }
}

export interface IngressListHelper extends IngressList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** IngressList is a collection of Ingress. */
export class IngressListHelper extends ResourceTemplate implements IngressListHelper {
    static kind = 'IngressList';
    static apiVersion = 'extensions/v1beta1';

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

export interface IngressSpecHelper extends IngressSpec {
    $backend(x: any): any;
    $ingressClassName(x: any): any;
    $rules(x: any): any;
    $tls(x: any): any;
}

/** IngressSpec describes the Ingress the user wishes to exist. */
export class IngressSpecHelper extends Template implements IngressSpecHelper {
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
