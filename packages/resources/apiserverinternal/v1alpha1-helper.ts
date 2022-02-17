import { ResourceTemplate, Template } from "../resourceTemplate";
import { ServerStorageVersion, StorageVersion, StorageVersionCondition, StorageVersionList, StorageVersionSpec, StorageVersionStatus } from "./v1alpha1";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";

export interface ServerStorageVersionHelper extends ServerStorageVersion {
    $apiServerID(x: any): any;
    $decodableVersions(x: any): any;
    $encodingVersion(x: any): any;
}

/** An API server instance reports the version it can decode and the version it encodes objects to when persisting objects in the backend. */
export class ServerStorageVersionHelper extends Template implements ServerStorageVersionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _apiServerID: any;
    get apiServerID(): any /*string*/ {
        return this._apiServerID
    }
    set apiServerID(x: any /*string*/) {
        this._apiServerID = x
    }
    setApiServerID(x: any /*string*/) {
        this.apiServerID = x; return this
    }

    _decodableVersions: any;
    get decodableVersions(): any /*Array<string>*/ {
        return this._decodableVersions
    }
    set decodableVersions(x: any /*Array<string>*/) {
        this._decodableVersions = this.set(this.decodableVersions, x)
    }
    setDecodableVersions(x: any /*Array<string>*/) {
        this.decodableVersions = x; return this
    }

    _encodingVersion: any;
    get encodingVersion(): any /*string*/ {
        return this._encodingVersion
    }
    set encodingVersion(x: any /*string*/) {
        this._encodingVersion = x
    }
    setEncodingVersion(x: any /*string*/) {
        this.encodingVersion = x; return this
    }
}

export interface StorageVersionHelper extends StorageVersion {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/**
 *  Storage version of a specific resource.
 */
export class StorageVersionHelper extends ResourceTemplate implements StorageVersionHelper {
    static kind = 'StorageVersion';
    static apiVersion = 'apiserverinternal/v1alpha1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, StorageVersionHelper.kind, StorageVersionHelper.apiVersion)
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
    get spec(): any /*StorageVersionSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*StorageVersionSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*StorageVersionSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*StorageVersionStatusHelper*/ {
        return this._status
    }
    set status(x: any /*StorageVersionStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*StorageVersionStatusHelper*/) {
        this.status = x; return this
    }
}

export interface StorageVersionConditionHelper extends StorageVersionCondition {
    $lastTransitionTime(x: any): any;
    $message(x: any): any;
    $observedGeneration(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** Describes the state of the storageVersion at a certain point. */
export class StorageVersionConditionHelper extends Template implements StorageVersionConditionHelper {
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

    _observedGeneration: any;
    get observedGeneration(): any /*number*/ {
        return this._observedGeneration
    }
    set observedGeneration(x: any /*number*/) {
        this._observedGeneration = x
    }
    setObservedGeneration(x: any /*number*/) {
        this.observedGeneration = x; return this
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

export interface StorageVersionListHelper extends StorageVersionList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** A list of StorageVersions. */
export class StorageVersionListHelper extends ResourceTemplate implements StorageVersionListHelper {
    static kind = 'StorageVersionList';
    static apiVersion = 'apiserverinternal/v1alpha1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, StorageVersionListHelper.kind, StorageVersionListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<StorageVersion>*/ {
        return this._items
    }
    set items(x: any /*Array<StorageVersion>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<StorageVersion>*/) {
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

export interface StorageVersionSpecHelper extends StorageVersionSpec {
}

/** StorageVersionSpec is an empty spec. */
export class StorageVersionSpecHelper extends Template implements StorageVersionSpecHelper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface StorageVersionStatusHelper extends StorageVersionStatus {
    $commonEncodingVersion(x: any): any;
    $conditions(x: any): any;
    $storageVersions(x: any): any;
}

/** API server instances report the versions they can decode and the version they encode objects to when persisting objects in the backend. */
export class StorageVersionStatusHelper extends Template implements StorageVersionStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _commonEncodingVersion: any;
    get commonEncodingVersion(): any /*string*/ {
        return this._commonEncodingVersion
    }
    set commonEncodingVersion(x: any /*string*/) {
        this._commonEncodingVersion = x
    }
    setCommonEncodingVersion(x: any /*string*/) {
        this.commonEncodingVersion = x; return this
    }

    _conditions: any;
    get conditions(): any /*Array<StorageVersionCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<StorageVersionCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<StorageVersionCondition>*/) {
        this.conditions = x; return this
    }

    _storageVersions: any;
    get storageVersions(): any /*Array<ServerStorageVersion>*/ {
        return this._storageVersions
    }
    set storageVersions(x: any /*Array<ServerStorageVersion>*/) {
        this._storageVersions = this.set(this.storageVersions, x)
    }
    setStorageVersions(x: any /*Array<ServerStorageVersion>*/) {
        this.storageVersions = x; return this
    }
}
