import { ResourceTemplate } from "../resourceTemplate";
import { Quantity } from "../api/resource";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { CSIStorageCapacity, VolumeAttachment, VolumeAttachmentSource, VolumeAttachmentSpec, VolumeAttachmentStatus, VolumeError } from "./v1alpha1";
import { PersistentVolumeSpec } from "../core/v1";

/**
 * CSIStorageCapacity stores the result of one CSI GetCapacity call. For a given StorageClass, this describes the available capacity in a particular topology segment.  This can be used when considering where to instantiate new PersistentVolumes.
 *
 * For example this can express things like: - StorageClass "standard" has "1234 GiB" available in "topology.kubernetes.io/zone=us-east1" - StorageClass "localssd" has "10 GiB" available in "kubernetes.io/hostname=knode-abc123"
 *
 * The following three cases all imply that no capacity is available for a certain combination: - no object exists with suitable topology and storage class name - such an object exists, but the capacity is unset - such an object exists, but the capacity is zero
 *
 * The producer of these objects can decide which approach is more suitable.
 *
 * They are consumed by the kube-scheduler if the CSIStorageCapacity beta feature gate is enabled there and a CSI driver opts into capacity-aware scheduling with CSIDriver.StorageCapacity.
 */
export class CSIStorageCapacityHelper extends ResourceTemplate {
    static kind = 'CSIStorageCapacity';
    static apiVersion = 'storage/v1alpha1';

    capacity(capacity: Quantity): CSIStorageCapacityHelper {
        this._template.capacity = capacity
        return this
    }

    maximumVolumeSize(maximumVolumeSize: Quantity): CSIStorageCapacityHelper {
        this._template.maximumVolumeSize = maximumVolumeSize
        return this
    }

    metadata(metadata: ObjectMeta): CSIStorageCapacityHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    nodeTopology(nodeTopology: LabelSelector): CSIStorageCapacityHelper {
        if (!this._template.nodeTopology) this._template.nodeTopology = []
        this._template.nodeTopology = {
            ...this._template.nodeTopology,
            ...nodeTopology
        }
        return this
    }

    storageClassName(storageClassName: string): CSIStorageCapacityHelper {
        this._template.storageClassName = storageClassName
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CSIStorageCapacityHelper.kind
        this._template.apiVersion = CSIStorageCapacityHelper.apiVersion
    }
}

/** CSIStorageCapacityList is a collection of CSIStorageCapacity objects. */
export class CSIStorageCapacityListHelper extends ResourceTemplate {
    static kind = 'CSIStorageCapacityList';
    static apiVersion = 'storage/v1alpha1';

    items(items: Array<CSIStorageCapacity>): CSIStorageCapacityListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): CSIStorageCapacityListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CSIStorageCapacityListHelper.kind
        this._template.apiVersion = CSIStorageCapacityListHelper.apiVersion
    }
}

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 *
 * VolumeAttachment objects are non-namespaced.
 */
export class VolumeAttachmentHelper extends ResourceTemplate {
    static kind = 'VolumeAttachment';
    static apiVersion = 'storage/v1alpha1';

    metadata(metadata: ObjectMeta): VolumeAttachmentHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: VolumeAttachmentSpec): VolumeAttachmentHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: VolumeAttachmentStatus): VolumeAttachmentHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = VolumeAttachmentHelper.kind
        this._template.apiVersion = VolumeAttachmentHelper.apiVersion
    }
}

/** VolumeAttachmentList is a collection of VolumeAttachment objects. */
export class VolumeAttachmentListHelper extends ResourceTemplate {
    static kind = 'VolumeAttachmentList';
    static apiVersion = 'storage/v1alpha1';

    items(items: Array<VolumeAttachment>): VolumeAttachmentListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): VolumeAttachmentListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = VolumeAttachmentListHelper.kind
        this._template.apiVersion = VolumeAttachmentListHelper.apiVersion
    }
}

/** VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set. */
export class VolumeAttachmentSourceHelper extends ResourceTemplate {
    static kind = 'VolumeAttachmentSource';
    static apiVersion = 'storage/v1alpha1';

    inlineVolumeSpec(inlineVolumeSpec: PersistentVolumeSpec): VolumeAttachmentSourceHelper {
        if (!this._template.inlineVolumeSpec) this._template.inlineVolumeSpec = []
        this._template.inlineVolumeSpec = {
            ...this._template.inlineVolumeSpec,
            ...inlineVolumeSpec
        }
        return this
    }

    persistentVolumeName(persistentVolumeName: string): VolumeAttachmentSourceHelper {
        this._template.persistentVolumeName = persistentVolumeName
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = VolumeAttachmentSourceHelper.kind
        this._template.apiVersion = VolumeAttachmentSourceHelper.apiVersion
    }
}

/** VolumeAttachmentSpec is the specification of a VolumeAttachment request. */
export class VolumeAttachmentSpecHelper extends ResourceTemplate {
    static kind = 'VolumeAttachmentSpec';
    static apiVersion = 'storage/v1alpha1';

    attacher(attacher: string): VolumeAttachmentSpecHelper {
        this._template.attacher = attacher
        return this
    }

    nodeName(nodeName: string): VolumeAttachmentSpecHelper {
        this._template.nodeName = nodeName
        return this
    }

    source(source: VolumeAttachmentSource): VolumeAttachmentSpecHelper {
        if (!this._template.source) this._template.source = []
        this._template.source = {
            ...this._template.source,
            ...source
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = VolumeAttachmentSpecHelper.kind
        this._template.apiVersion = VolumeAttachmentSpecHelper.apiVersion
    }
}

/** VolumeAttachmentStatus is the status of a VolumeAttachment request. */
export class VolumeAttachmentStatusHelper extends ResourceTemplate {
    static kind = 'VolumeAttachmentStatus';
    static apiVersion = 'storage/v1alpha1';

    attachError(attachError: VolumeError): VolumeAttachmentStatusHelper {
        if (!this._template.attachError) this._template.attachError = []
        this._template.attachError = {
            ...this._template.attachError,
            ...attachError
        }
        return this
    }

    attached(attached: boolean): VolumeAttachmentStatusHelper {
        this._template.attached = attached
        return this
    }

    attachmentMetadata(attachmentMetadata: {[name: string]: string}): VolumeAttachmentStatusHelper {
        if (!this._template.attachmentMetadata) this._template.attachmentMetadata = []
        this._template.attachmentMetadata = {
            ...this._template.attachmentMetadata,
            ...attachmentMetadata
        }
        return this
    }

    detachError(detachError: VolumeError): VolumeAttachmentStatusHelper {
        if (!this._template.detachError) this._template.detachError = []
        this._template.detachError = {
            ...this._template.detachError,
            ...detachError
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = VolumeAttachmentStatusHelper.kind
        this._template.apiVersion = VolumeAttachmentStatusHelper.apiVersion
    }
}

/** VolumeError captures an error encountered during a volume operation. */
export class VolumeErrorHelper extends ResourceTemplate {
    static kind = 'VolumeError';
    static apiVersion = 'storage/v1alpha1';

    message(message: string): VolumeErrorHelper {
        this._template.message = message
        return this
    }

    time(time: Time): VolumeErrorHelper {
        this._template.time = time
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = VolumeErrorHelper.kind
        this._template.apiVersion = VolumeErrorHelper.apiVersion
    }
}
