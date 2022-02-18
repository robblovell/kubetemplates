import { ResourceTemplate, Template } from "../resourceTemplate";
import { ServerStorageVersion, StorageVersion, StorageVersionCondition, StorageVersionList, StorageVersionSpec, StorageVersionStatus } from "./v1alpha1";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";
import { ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";

export interface ServerStorageVersionHelper extends ServerStorageVersion {
    $apiServerID(x: string): ServerStorageVersionHelper;
    $decodableVersions(x: Array<string>): ServerStorageVersionHelper;
    $encodingVersion(x: string): ServerStorageVersionHelper;
}

/** An API server instance reports the version it can decode and the version it encodes objects to when persisting objects in the backend. */
export class ServerStorageVersionHelper extends Template implements ServerStorageVersionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _apiServerID: string;
    get apiServerID(): string {
        return this._apiServerID
    }
    set apiServerID(x: string) {
        this._apiServerID = x
    }
    $apiServerID(x: string) {
        this.apiServerID = x; return this
    }

    _decodableVersions: Array<string>;
    get decodableVersions(): Array<string> {
        return this._decodableVersions
    }
    set decodableVersions(x: Array<string>) {
        this._decodableVersions = this.set(this.decodableVersions, x)
    }
    $decodableVersions(x: Array<string>) {
        this.decodableVersions = x; return this
    }

    _encodingVersion: string;
    get encodingVersion(): string {
        return this._encodingVersion
    }
    set encodingVersion(x: string) {
        this._encodingVersion = x
    }
    $encodingVersion(x: string) {
        this.encodingVersion = x; return this
    }
}

export interface StorageVersionHelper extends StorageVersion {
    $metadata(x: ObjectMetaHelper): StorageVersionHelper;
    $spec(x: StorageVersionSpecHelper): StorageVersionHelper;
    $status(x: StorageVersionStatusHelper): StorageVersionHelper;
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

    _spec: StorageVersionSpecHelper;
    get spec(): StorageVersionSpecHelper {
        return this._spec
    }
    set spec(x: StorageVersionSpecHelper) {
        this._spec = x
    }
    $spec(x: StorageVersionSpecHelper) {
        this.spec = x; return this
    }

    _status: StorageVersionStatusHelper;
    get status(): StorageVersionStatusHelper {
        return this._status
    }
    set status(x: StorageVersionStatusHelper) {
        this._status = x
    }
    $status(x: StorageVersionStatusHelper) {
        this.status = x; return this
    }
}

export interface StorageVersionConditionHelper extends StorageVersionCondition {
    $lastTransitionTime(x: Time): StorageVersionConditionHelper;
    $message(x: string): StorageVersionConditionHelper;
    $observedGeneration(x: number): StorageVersionConditionHelper;
    $reason(x: string): StorageVersionConditionHelper;
    $status(x: string): StorageVersionConditionHelper;
    $type(x: string): StorageVersionConditionHelper;
}

/** Describes the state of the storageVersion at a certain point. */
export class StorageVersionConditionHelper extends Template implements StorageVersionConditionHelper {
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

    _observedGeneration: number;
    get observedGeneration(): number {
        return this._observedGeneration
    }
    set observedGeneration(x: number) {
        this._observedGeneration = x
    }
    $observedGeneration(x: number) {
        this.observedGeneration = x; return this
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

export interface StorageVersionListHelper extends StorageVersionList {
    $items(x: Array<StorageVersion>): StorageVersionListHelper;
    $metadata(x: ListMetaHelper): StorageVersionListHelper;
}

/** A list of StorageVersions. */
export class StorageVersionListHelper extends ResourceTemplate implements StorageVersionListHelper {
    static kind = 'StorageVersionList';
    static apiVersion = 'apiserverinternal/v1alpha1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, StorageVersionListHelper.kind, StorageVersionListHelper.apiVersion)
    }

    _items: Array<StorageVersion>;
    get items(): Array<StorageVersion> {
        return this._items
    }
    set items(x: Array<StorageVersion>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<StorageVersion>) {
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

export interface StorageVersionSpecHelper extends StorageVersionSpec {
}

/** StorageVersionSpec is an empty spec. */
export class StorageVersionSpecHelper extends Template implements StorageVersionSpecHelper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface StorageVersionStatusHelper extends StorageVersionStatus {
    $commonEncodingVersion(x: string): StorageVersionStatusHelper;
    $conditions(x: Array<StorageVersionCondition>): StorageVersionStatusHelper;
    $storageVersions(x: Array<ServerStorageVersion>): StorageVersionStatusHelper;
}

/** API server instances report the versions they can decode and the version they encode objects to when persisting objects in the backend. */
export class StorageVersionStatusHelper extends Template implements StorageVersionStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _commonEncodingVersion: string;
    get commonEncodingVersion(): string {
        return this._commonEncodingVersion
    }
    set commonEncodingVersion(x: string) {
        this._commonEncodingVersion = x
    }
    $commonEncodingVersion(x: string) {
        this.commonEncodingVersion = x; return this
    }

    _conditions: Array<StorageVersionCondition>;
    get conditions(): Array<StorageVersionCondition> {
        return this._conditions
    }
    set conditions(x: Array<StorageVersionCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $conditions(x: Array<StorageVersionCondition>) {
        this.conditions = x; return this
    }

    _storageVersions: Array<ServerStorageVersion>;
    get storageVersions(): Array<ServerStorageVersion> {
        return this._storageVersions
    }
    set storageVersions(x: Array<ServerStorageVersion>) {
        this._storageVersions = this.set(this.storageVersions, x)
    }
    $storageVersions(x: Array<ServerStorageVersion>) {
        this.storageVersions = x; return this
    }
}
