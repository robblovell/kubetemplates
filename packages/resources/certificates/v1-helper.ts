import { ResourceTemplate, Template } from "../resourceTemplate";
import { CertificateSigningRequest, CertificateSigningRequestCondition, CertificateSigningRequestList, CertificateSigningRequestSpec, CertificateSigningRequestStatus } from "./v1";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";

export interface CertificateSigningRequestHelper extends CertificateSigningRequest {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/**
 * CertificateSigningRequest objects provide a mechanism to obtain x509 certificates by submitting a certificate signing request, and having it asynchronously approved and issued.
 *
 * Kubelets use this API to obtain:
 *  1. client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client-kubelet" signerName).
 *  2. serving certificates for TLS endpoints kube-apiserver can connect to securely (with the "kubernetes.io/kubelet-serving" signerName).
 *
 * This API can be used to request client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client" signerName), or to obtain certificates from custom non-Kubernetes signers.
 */
export class CertificateSigningRequestHelper extends ResourceTemplate implements CertificateSigningRequestHelper {
    static kind = 'CertificateSigningRequest';
    static apiVersion = 'certificates/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CertificateSigningRequestHelper.kind, CertificateSigningRequestHelper.apiVersion)
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
    get spec(): any /*CertificateSigningRequestSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*CertificateSigningRequestSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*CertificateSigningRequestSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*CertificateSigningRequestStatusHelper*/ {
        return this._status
    }
    set status(x: any /*CertificateSigningRequestStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*CertificateSigningRequestStatusHelper*/) {
        this.status = x; return this
    }
}

export interface CertificateSigningRequestConditionHelper extends CertificateSigningRequestCondition {
    $lastTransitionTime(x: any): any;
    $lastUpdateTime(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** CertificateSigningRequestCondition describes a condition of a CertificateSigningRequest object */
export class CertificateSigningRequestConditionHelper extends Template implements CertificateSigningRequestConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastTransitionTime: any;
    get lastTransitionTime(): any /*Time*/ {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: any /*Time*/) {
        this._lastTransitionTime = x
    }
    setLastTransitionTime(x: any /*Time*/) {
        this.lastTransitionTime = x; return this
    }

    _lastUpdateTime: any;
    get lastUpdateTime(): any /*Time*/ {
        return this._lastUpdateTime
    }
    set lastUpdateTime(x: any /*Time*/) {
        this._lastUpdateTime = x
    }
    setLastUpdateTime(x: any /*Time*/) {
        this.lastUpdateTime = x; return this
    }

    _message: any;
    get message(): any /*string*/ {
        return this._message
    }
    set message(x: any /*string*/) {
        this._message = x
    }
    setMessage(x: any /*string*/) {
        this.message = x; return this
    }

    _reason: any;
    get reason(): any /*string*/ {
        return this._reason
    }
    set reason(x: any /*string*/) {
        this._reason = x
    }
    setReason(x: any /*string*/) {
        this.reason = x; return this
    }

    _status: any;
    get status(): any /*string*/ {
        return this._status
    }
    set status(x: any /*string*/) {
        this._status = x
    }
    setStatus(x: any /*string*/) {
        this.status = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface CertificateSigningRequestListHelper extends CertificateSigningRequestList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** CertificateSigningRequestList is a collection of CertificateSigningRequest objects */
export class CertificateSigningRequestListHelper extends ResourceTemplate implements CertificateSigningRequestListHelper {
    static kind = 'CertificateSigningRequestList';
    static apiVersion = 'certificates/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CertificateSigningRequestListHelper.kind, CertificateSigningRequestListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<CertificateSigningRequest>*/ {
        return this._items
    }
    set items(x: any /*Array<CertificateSigningRequest>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<CertificateSigningRequest>*/) {
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

export interface CertificateSigningRequestSpecHelper extends CertificateSigningRequestSpec {
    $extra(x: any): any;
    $groups(x: any): any;
    $request(x: any): any;
    $signerName(x: any): any;
    $uid(x: any): any;
    $usages(x: any): any;
    $username(x: any): any;
}

/** CertificateSigningRequestSpec contains the certificate request. */
export class CertificateSigningRequestSpecHelper extends Template implements CertificateSigningRequestSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _extra: any;
    get extra(): any /*{[name: string]: Array<string>}Helper*/ {
        return this._extra
    }
    set extra(x: any /*{[name: string]: Array<string>}Helper*/) {
        this._extra = this.set(this.extra, x)
    }
    setExtra(x: any /*{[name: string]: Array<string>}Helper*/) {
        this.extra = x; return this
    }

    _groups: any;
    get groups(): any /*Array<string>*/ {
        return this._groups
    }
    set groups(x: any /*Array<string>*/) {
        this._groups = this.set(this.groups, x)
    }
    setGroups(x: any /*Array<string>*/) {
        this.groups = x; return this
    }

    _request: any;
    get request(): any /*string*/ {
        return this._request
    }
    set request(x: any /*string*/) {
        this._request = x
    }
    setRequest(x: any /*string*/) {
        this.request = x; return this
    }

    _signerName: any;
    get signerName(): any /*string*/ {
        return this._signerName
    }
    set signerName(x: any /*string*/) {
        this._signerName = x
    }
    setSignerName(x: any /*string*/) {
        this.signerName = x; return this
    }

    _uid: any;
    get uid(): any /*string*/ {
        return this._uid
    }
    set uid(x: any /*string*/) {
        this._uid = x
    }
    setUid(x: any /*string*/) {
        this.uid = x; return this
    }

    _usages: any;
    get usages(): any /*Array<string>*/ {
        return this._usages
    }
    set usages(x: any /*Array<string>*/) {
        this._usages = this.set(this.usages, x)
    }
    setUsages(x: any /*Array<string>*/) {
        this.usages = x; return this
    }

    _username: any;
    get username(): any /*string*/ {
        return this._username
    }
    set username(x: any /*string*/) {
        this._username = x
    }
    setUsername(x: any /*string*/) {
        this.username = x; return this
    }
}

export interface CertificateSigningRequestStatusHelper extends CertificateSigningRequestStatus {
    $certificate(x: any): any;
    $conditions(x: any): any;
}

/** CertificateSigningRequestStatus contains conditions used to indicate approved/denied/failed status of the request, and the issued certificate. */
export class CertificateSigningRequestStatusHelper extends Template implements CertificateSigningRequestStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _certificate: any;
    get certificate(): any /*string*/ {
        return this._certificate
    }
    set certificate(x: any /*string*/) {
        this._certificate = x
    }
    setCertificate(x: any /*string*/) {
        this.certificate = x; return this
    }

    _conditions: any;
    get conditions(): any /*Array<CertificateSigningRequestCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<CertificateSigningRequestCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<CertificateSigningRequestCondition>*/) {
        this.conditions = x; return this
    }
}
