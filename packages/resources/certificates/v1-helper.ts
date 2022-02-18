import { ResourceTemplate, Template } from "../resourceTemplate";
import { CertificateSigningRequest, CertificateSigningRequestCondition, CertificateSigningRequestList, CertificateSigningRequestSpec, CertificateSigningRequestStatus } from "./v1";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";
import { ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";

export interface CertificateSigningRequestHelper extends CertificateSigningRequest {
    $metadata(x: ObjectMetaHelper): CertificateSigningRequestHelper;
    $spec(x: CertificateSigningRequestSpecHelper): CertificateSigningRequestHelper;
    $status(x: CertificateSigningRequestStatusHelper): CertificateSigningRequestHelper;
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

    _spec: CertificateSigningRequestSpecHelper;
    get spec(): CertificateSigningRequestSpecHelper {
        return this._spec
    }
    set spec(x: CertificateSigningRequestSpecHelper) {
        this._spec = x
    }
    $spec(x: CertificateSigningRequestSpecHelper) {
        this.spec = x; return this
    }

    _status: CertificateSigningRequestStatusHelper;
    get status(): CertificateSigningRequestStatusHelper {
        return this._status
    }
    set status(x: CertificateSigningRequestStatusHelper) {
        this._status = x
    }
    $status(x: CertificateSigningRequestStatusHelper) {
        this.status = x; return this
    }
}

export interface CertificateSigningRequestConditionHelper extends CertificateSigningRequestCondition {
    $lastTransitionTime(x: Time): CertificateSigningRequestConditionHelper;
    $lastUpdateTime(x: Time): CertificateSigningRequestConditionHelper;
    $message(x: string): CertificateSigningRequestConditionHelper;
    $reason(x: string): CertificateSigningRequestConditionHelper;
    $status(x: string): CertificateSigningRequestConditionHelper;
    $type(x: string): CertificateSigningRequestConditionHelper;
}

/** CertificateSigningRequestCondition describes a condition of a CertificateSigningRequest object */
export class CertificateSigningRequestConditionHelper extends Template implements CertificateSigningRequestConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastTransitionTime: Time;
    get lastTransitionTime(): Time {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: Time) {
        this._lastTransitionTime = x
    }
    $lastTransitionTime(x: Time) {
        this.lastTransitionTime = x; return this
    }

    _lastUpdateTime: Time;
    get lastUpdateTime(): Time {
        return this._lastUpdateTime
    }
    set lastUpdateTime(x: Time) {
        this._lastUpdateTime = x
    }
    $lastUpdateTime(x: Time) {
        this.lastUpdateTime = x; return this
    }

    _message: string;
    get message(): string {
        return this._message
    }
    set message(x: string) {
        this._message = x
    }
    $message(x: string) {
        this.message = x; return this
    }

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $reason(x: string) {
        this.reason = x; return this
    }

    _status: string;
    get status(): string {
        return this._status
    }
    set status(x: string) {
        this._status = x
    }
    $status(x: string) {
        this.status = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface CertificateSigningRequestListHelper extends CertificateSigningRequestList {
    $items(x: Array<CertificateSigningRequest>): CertificateSigningRequestListHelper;
    $metadata(x: ListMetaHelper): CertificateSigningRequestListHelper;
}

/** CertificateSigningRequestList is a collection of CertificateSigningRequest objects */
export class CertificateSigningRequestListHelper extends ResourceTemplate implements CertificateSigningRequestListHelper {
    static kind = 'CertificateSigningRequestList';
    static apiVersion = 'certificates/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CertificateSigningRequestListHelper.kind, CertificateSigningRequestListHelper.apiVersion)
    }

    _items: Array<CertificateSigningRequest>;
    get items(): Array<CertificateSigningRequest> {
        return this._items
    }
    set items(x: Array<CertificateSigningRequest>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<CertificateSigningRequest>) {
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

export interface CertificateSigningRequestSpecHelper extends CertificateSigningRequestSpec {
    $expirationSeconds(x: number): CertificateSigningRequestSpecHelper;
    $extra(x: {[name: string]: Array<string>}): CertificateSigningRequestSpecHelper;
    $groups(x: Array<string>): CertificateSigningRequestSpecHelper;
    $request(x: string): CertificateSigningRequestSpecHelper;
    $signerName(x: string): CertificateSigningRequestSpecHelper;
    $uid(x: string): CertificateSigningRequestSpecHelper;
    $usages(x: Array<string>): CertificateSigningRequestSpecHelper;
    $username(x: string): CertificateSigningRequestSpecHelper;
}

/** CertificateSigningRequestSpec contains the certificate request. */
export class CertificateSigningRequestSpecHelper extends Template implements CertificateSigningRequestSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _expirationSeconds: number;
    get expirationSeconds(): number {
        return this._expirationSeconds
    }
    set expirationSeconds(x: number) {
        this._expirationSeconds = x
    }
    $expirationSeconds(x: number) {
        this.expirationSeconds = x; return this
    }

    _extra: {[name: string]: Array<string>};
    get extra(): {[name: string]: Array<string>} {
        return this._extra
    }
    set extra(x: {[name: string]: Array<string>}) {
        this._extra = this.set(this.extra, x)
    }
    $extra(x: {[name: string]: Array<string>}) {
        this.extra = x; return this
    }

    _groups: Array<string>;
    get groups(): Array<string> {
        return this._groups
    }
    set groups(x: Array<string>) {
        this._groups = this.set(this.groups, x)
    }
    $groups(x: Array<string>) {
        this.groups = x; return this
    }

    _request: string;
    get request(): string {
        return this._request
    }
    set request(x: string) {
        this._request = x
    }
    $request(x: string) {
        this.request = x; return this
    }

    _signerName: string;
    get signerName(): string {
        return this._signerName
    }
    set signerName(x: string) {
        this._signerName = x
    }
    $signerName(x: string) {
        this.signerName = x; return this
    }

    _uid: string;
    get uid(): string {
        return this._uid
    }
    set uid(x: string) {
        this._uid = x
    }
    $uid(x: string) {
        this.uid = x; return this
    }

    _usages: Array<string>;
    get usages(): Array<string> {
        return this._usages
    }
    set usages(x: Array<string>) {
        this._usages = this.set(this.usages, x)
    }
    $usages(x: Array<string>) {
        this.usages = x; return this
    }

    _username: string;
    get username(): string {
        return this._username
    }
    set username(x: string) {
        this._username = x
    }
    $username(x: string) {
        this.username = x; return this
    }
}

export interface CertificateSigningRequestStatusHelper extends CertificateSigningRequestStatus {
    $certificate(x: string): CertificateSigningRequestStatusHelper;
    $conditions(x: Array<CertificateSigningRequestCondition>): CertificateSigningRequestStatusHelper;
}

/** CertificateSigningRequestStatus contains conditions used to indicate approved/denied/failed status of the request, and the issued certificate. */
export class CertificateSigningRequestStatusHelper extends Template implements CertificateSigningRequestStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _certificate: string;
    get certificate(): string {
        return this._certificate
    }
    set certificate(x: string) {
        this._certificate = x
    }
    $certificate(x: string) {
        this.certificate = x; return this
    }

    _conditions: Array<CertificateSigningRequestCondition>;
    get conditions(): Array<CertificateSigningRequestCondition> {
        return this._conditions
    }
    set conditions(x: Array<CertificateSigningRequestCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $conditions(x: Array<CertificateSigningRequestCondition>) {
        this.conditions = x; return this
    }
}
