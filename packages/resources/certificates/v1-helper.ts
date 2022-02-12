import { ResourceTemplate } from "../resourceTemplate";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";
import { CertificateSigningRequest, CertificateSigningRequestCondition, CertificateSigningRequestSpec, CertificateSigningRequestStatus } from "./v1";

/**
 * CertificateSigningRequest objects provide a mechanism to obtain x509 certificates by submitting a certificate signing request, and having it asynchronously approved and issued.
 *
 * Kubelets use this API to obtain:
 *  1. client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client-kubelet" signerName).
 *  2. serving certificates for TLS endpoints kube-apiserver can connect to securely (with the "kubernetes.io/kubelet-serving" signerName).
 *
 * This API can be used to request client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client" signerName), or to obtain certificates from custom non-Kubernetes signers.
 */
export class CertificateSigningRequestHelper extends ResourceTemplate {
    static kind = 'CertificateSigningRequest';
    static apiVersion = 'certificates/v1';

    metadata(metadata: ObjectMeta): CertificateSigningRequestHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: CertificateSigningRequestSpec): CertificateSigningRequestHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: CertificateSigningRequestStatus): CertificateSigningRequestHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CertificateSigningRequestHelper.kind
        this._template.apiVersion = CertificateSigningRequestHelper.apiVersion
    }
}

/** CertificateSigningRequestCondition describes a condition of a CertificateSigningRequest object */
export class CertificateSigningRequestConditionHelper extends ResourceTemplate {
    static kind = 'CertificateSigningRequestCondition';
    static apiVersion = 'certificates/v1';

    lastTransitionTime(lastTransitionTime: Time): CertificateSigningRequestConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    lastUpdateTime(lastUpdateTime: Time): CertificateSigningRequestConditionHelper {
        this._template.lastUpdateTime = lastUpdateTime
        return this
    }

    message(message: string): CertificateSigningRequestConditionHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): CertificateSigningRequestConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): CertificateSigningRequestConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): CertificateSigningRequestConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CertificateSigningRequestConditionHelper.kind
        this._template.apiVersion = CertificateSigningRequestConditionHelper.apiVersion
    }
}

/** CertificateSigningRequestList is a collection of CertificateSigningRequest objects */
export class CertificateSigningRequestListHelper extends ResourceTemplate {
    static kind = 'CertificateSigningRequestList';
    static apiVersion = 'certificates/v1';

    items(items: Array<CertificateSigningRequest>): CertificateSigningRequestListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): CertificateSigningRequestListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CertificateSigningRequestListHelper.kind
        this._template.apiVersion = CertificateSigningRequestListHelper.apiVersion
    }
}

/** CertificateSigningRequestSpec contains the certificate request. */
export class CertificateSigningRequestSpecHelper extends ResourceTemplate {
    static kind = 'CertificateSigningRequestSpec';
    static apiVersion = 'certificates/v1';

    extra(extra: {[name: string]: Array<string>}): CertificateSigningRequestSpecHelper {
        if (!this._template.extra) this._template.extra = []
        this._template.extra = {
            ...this._template.extra,
            ...extra
        }
        return this
    }

    groups(groups: Array<string>): CertificateSigningRequestSpecHelper {
        if (!Array.isArray(groups)) { groups = [groups] }
        if (!this._template.groups) this._template.groups = groups
        this._template.groups = [...this._template.groups, ...groups]
        return this
    }

    request(request: string): CertificateSigningRequestSpecHelper {
        this._template.request = request
        return this
    }

    signerName(signerName: string): CertificateSigningRequestSpecHelper {
        this._template.signerName = signerName
        return this
    }

    uid(uid: string): CertificateSigningRequestSpecHelper {
        this._template.uid = uid
        return this
    }

    usages(usages: Array<string>): CertificateSigningRequestSpecHelper {
        if (!Array.isArray(usages)) { usages = [usages] }
        if (!this._template.usages) this._template.usages = usages
        this._template.usages = [...this._template.usages, ...usages]
        return this
    }

    username(username: string): CertificateSigningRequestSpecHelper {
        this._template.username = username
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CertificateSigningRequestSpecHelper.kind
        this._template.apiVersion = CertificateSigningRequestSpecHelper.apiVersion
    }
}

/** CertificateSigningRequestStatus contains conditions used to indicate approved/denied/failed status of the request, and the issued certificate. */
export class CertificateSigningRequestStatusHelper extends ResourceTemplate {
    static kind = 'CertificateSigningRequestStatus';
    static apiVersion = 'certificates/v1';

    certificate(certificate: string): CertificateSigningRequestStatusHelper {
        this._template.certificate = certificate
        return this
    }

    conditions(conditions: Array<CertificateSigningRequestCondition>): CertificateSigningRequestStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CertificateSigningRequestStatusHelper.kind
        this._template.apiVersion = CertificateSigningRequestStatusHelper.apiVersion
    }
}
