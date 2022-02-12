import { ResourceTemplate } from "../resourceTemplate";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";
import { ServerStorageVersion, StorageVersion, StorageVersionCondition, StorageVersionSpec, StorageVersionStatus } from "./v1alpha1";

/** An API server instance reports the version it can decode and the version it encodes objects to when persisting objects in the backend. */
export class ServerStorageVersionHelper extends ResourceTemplate {
    static kind = 'ServerStorageVersion';
    static apiVersion = 'apiserverinternal/v1alpha1';

    apiServerID(apiServerID: string): ServerStorageVersionHelper {
        this._template.apiServerID = apiServerID
        return this
    }

    decodableVersions(decodableVersions: Array<string>): ServerStorageVersionHelper {
        if (!Array.isArray(decodableVersions)) { decodableVersions = [decodableVersions] }
        if (!this._template.decodableVersions) this._template.decodableVersions = decodableVersions
        this._template.decodableVersions = [...this._template.decodableVersions, ...decodableVersions]
        return this
    }

    encodingVersion(encodingVersion: string): ServerStorageVersionHelper {
        this._template.encodingVersion = encodingVersion
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ServerStorageVersionHelper.kind
        this._template.apiVersion = ServerStorageVersionHelper.apiVersion
    }
}

/**
 *  Storage version of a specific resource.
 */
export class StorageVersionHelper extends ResourceTemplate {
    static kind = 'StorageVersion';
    static apiVersion = 'apiserverinternal/v1alpha1';

    metadata(metadata: ObjectMeta): StorageVersionHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: StorageVersionSpec): StorageVersionHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: StorageVersionStatus): StorageVersionHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StorageVersionHelper.kind
        this._template.apiVersion = StorageVersionHelper.apiVersion
    }
}

/** Describes the state of the storageVersion at a certain point. */
export class StorageVersionConditionHelper extends ResourceTemplate {
    static kind = 'StorageVersionCondition';
    static apiVersion = 'apiserverinternal/v1alpha1';

    lastTransitionTime(lastTransitionTime: Time): StorageVersionConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    message(message: string): StorageVersionConditionHelper {
        this._template.message = message
        return this
    }

    observedGeneration(observedGeneration: number): StorageVersionConditionHelper {
        this._template.observedGeneration = observedGeneration
        return this
    }

    reason(reason: string): StorageVersionConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): StorageVersionConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): StorageVersionConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StorageVersionConditionHelper.kind
        this._template.apiVersion = StorageVersionConditionHelper.apiVersion
    }
}

/** A list of StorageVersions. */
export class StorageVersionListHelper extends ResourceTemplate {
    static kind = 'StorageVersionList';
    static apiVersion = 'apiserverinternal/v1alpha1';

    items(items: Array<StorageVersion>): StorageVersionListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): StorageVersionListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StorageVersionListHelper.kind
        this._template.apiVersion = StorageVersionListHelper.apiVersion
    }
}

/** StorageVersionSpec is an empty spec. */
export class StorageVersionSpecHelper extends ResourceTemplate {
    static kind = 'StorageVersionSpec';
    static apiVersion = 'apiserverinternal/v1alpha1';

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StorageVersionSpecHelper.kind
        this._template.apiVersion = StorageVersionSpecHelper.apiVersion
    }
}

/** API server instances report the versions they can decode and the version they encode objects to when persisting objects in the backend. */
export class StorageVersionStatusHelper extends ResourceTemplate {
    static kind = 'StorageVersionStatus';
    static apiVersion = 'apiserverinternal/v1alpha1';

    commonEncodingVersion(commonEncodingVersion: string): StorageVersionStatusHelper {
        this._template.commonEncodingVersion = commonEncodingVersion
        return this
    }

    conditions(conditions: Array<StorageVersionCondition>): StorageVersionStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    storageVersions(storageVersions: Array<ServerStorageVersion>): StorageVersionStatusHelper {
        if (!Array.isArray(storageVersions)) { storageVersions = [storageVersions] }
        if (!this._template.storageVersions) this._template.storageVersions = storageVersions
        this._template.storageVersions = [...this._template.storageVersions, ...storageVersions]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StorageVersionStatusHelper.kind
        this._template.apiVersion = StorageVersionStatusHelper.apiVersion
    }
}
