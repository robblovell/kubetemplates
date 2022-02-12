import { ResourceTemplate } from "../resourceTemplate";
import { HTTPIngressPath, HTTPIngressRuleValue, Ingress, IngressBackend, IngressRule, IngressSpec, IngressStatus, IngressTLS } from "./v1beta1";
import { ListMeta, ObjectMeta } from "../meta/v1";
import { LoadBalancerStatus, TypedLocalObjectReference } from "../core/v1";

/** HTTPIngressPath associates a path with a backend. Incoming urls matching the path are forwarded to the backend. */
export class HTTPIngressPathHelper extends ResourceTemplate {
    static kind = 'HTTPIngressPath';
    static apiVersion = 'extensions/v1beta1';

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
    static apiVersion = 'extensions/v1beta1';

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

/** Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. DEPRECATED - This group version of Ingress is deprecated by networking.k8s.io/v1beta1 Ingress. See the release notes for more information. */
export class IngressHelper extends ResourceTemplate {
    static kind = 'Ingress';
    static apiVersion = 'extensions/v1beta1';

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
    static apiVersion = 'extensions/v1beta1';

    resource(resource: TypedLocalObjectReference): IngressBackendHelper {
        if (!this._template.resource) this._template.resource = []
        this._template.resource = {
            ...this._template.resource,
            ...resource
        }
        return this
    }

    serviceName(serviceName: string): IngressBackendHelper {
        this._template.serviceName = serviceName
        return this
    }

    servicePort(servicePort: number | string): IngressBackendHelper {
        this._template.servicePort = servicePort
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = IngressBackendHelper.kind
        this._template.apiVersion = IngressBackendHelper.apiVersion
    }
}

/** IngressList is a collection of Ingress. */
export class IngressListHelper extends ResourceTemplate {
    static kind = 'IngressList';
    static apiVersion = 'extensions/v1beta1';

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
    static apiVersion = 'extensions/v1beta1';

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

/** IngressSpec describes the Ingress the user wishes to exist. */
export class IngressSpecHelper extends ResourceTemplate {
    static kind = 'IngressSpec';
    static apiVersion = 'extensions/v1beta1';

    backend(backend: IngressBackend): IngressSpecHelper {
        if (!this._template.backend) this._template.backend = []
        this._template.backend = {
            ...this._template.backend,
            ...backend
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
    static apiVersion = 'extensions/v1beta1';

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
    static apiVersion = 'extensions/v1beta1';

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
