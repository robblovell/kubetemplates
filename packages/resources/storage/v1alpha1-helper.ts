import { ResourceTemplate, Template } from "../resourceTemplate";
import { CSIStorageCapacity, CSIStorageCapacityList, VolumeAttachment, VolumeAttachmentList, VolumeAttachmentSource, VolumeAttachmentSpec, VolumeAttachmentStatus, VolumeError } from "./v1alpha1";
import { Quantity } from "../api/resource";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { LabelSelectorHelper, ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";
import { PersistentVolumeSpec } from "../core/v1";
import { PersistentVolumeSpecHelper } from "../core/v1-helper";

export interface CSIStorageCapacityHelper extends CSIStorageCapacity {
    $capacity(x: Quantity): CSIStorageCapacityHelper;
    $maximumVolumeSize(x: Quantity): CSIStorageCapacityHelper;
    $metadata(x: ObjectMetaHelper): CSIStorageCapacityHelper;
    $nodeTopology(x: LabelSelectorHelper): CSIStorageCapacityHelper;
    $storageClassName(x: string): CSIStorageCapacityHelper;
}

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
export class CSIStorageCapacityHelper extends ResourceTemplate implements CSIStorageCapacityHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "CSIStorageCapacity", "storage.k8s.io/v1alpha1")
    }

    _capacity: Quantity;
    get capacity(): Quantity {
        return this._capacity
    }
    set capacity(x: Quantity) {
        this._capacity = x
    }
    $capacity(x: Quantity) {
        this.capacity = x; return this
    }

    _maximumVolumeSize: Quantity;
    get maximumVolumeSize(): Quantity {
        return this._maximumVolumeSize
    }
    set maximumVolumeSize(x: Quantity) {
        this._maximumVolumeSize = x
    }
    $maximumVolumeSize(x: Quantity) {
        this.maximumVolumeSize = x; return this
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

    _nodeTopology: LabelSelectorHelper;
    get nodeTopology(): LabelSelectorHelper {
        return this._nodeTopology
    }
    set nodeTopology(x: LabelSelectorHelper) {
        this._nodeTopology = x
    }
    $nodeTopology(x: LabelSelectorHelper) {
        this.nodeTopology = x; return this
    }

    _storageClassName: string;
    get storageClassName(): string {
        return this._storageClassName
    }
    set storageClassName(x: string) {
        this._storageClassName = x
    }
    $storageClassName(x: string) {
        this.storageClassName = x; return this
    }
}

export interface CSIStorageCapacityListHelper extends CSIStorageCapacityList {
    $items(x: Array<CSIStorageCapacity>): CSIStorageCapacityListHelper;
    $metadata(x: ListMetaHelper): CSIStorageCapacityListHelper;
}

/** CSIStorageCapacityList is a collection of CSIStorageCapacity objects. */
export class CSIStorageCapacityListHelper extends ResourceTemplate implements CSIStorageCapacityListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "CSIStorageCapacityList", "storage.k8s.io/v1alpha1")
    }

    _items: Array<CSIStorageCapacity>;
    get items(): Array<CSIStorageCapacity> {
        return this._items
    }
    set items(x: Array<CSIStorageCapacity>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<CSIStorageCapacity>) {
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

export interface VolumeAttachmentHelper extends VolumeAttachment {
    $metadata(x: ObjectMetaHelper): VolumeAttachmentHelper;
    $spec(x: VolumeAttachmentSpecHelper): VolumeAttachmentHelper;
    $status(x: VolumeAttachmentStatusHelper): VolumeAttachmentHelper;
}

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 *
 * VolumeAttachment objects are non-namespaced.
 */
export class VolumeAttachmentHelper extends ResourceTemplate implements VolumeAttachmentHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "VolumeAttachment", "storage.k8s.io/v1alpha1")
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

    _spec: VolumeAttachmentSpecHelper;
    get spec(): VolumeAttachmentSpecHelper {
        return this._spec
    }
    set spec(x: VolumeAttachmentSpecHelper) {
        this._spec = x
    }
    $spec(x: VolumeAttachmentSpecHelper) {
        this.spec = x; return this
    }

    _status: VolumeAttachmentStatusHelper;
    get status(): VolumeAttachmentStatusHelper {
        return this._status
    }
    set status(x: VolumeAttachmentStatusHelper) {
        this._status = x
    }
    $status(x: VolumeAttachmentStatusHelper) {
        this.status = x; return this
    }
}

export interface VolumeAttachmentListHelper extends VolumeAttachmentList {
    $items(x: Array<VolumeAttachment>): VolumeAttachmentListHelper;
    $metadata(x: ListMetaHelper): VolumeAttachmentListHelper;
}

/** VolumeAttachmentList is a collection of VolumeAttachment objects. */
export class VolumeAttachmentListHelper extends ResourceTemplate implements VolumeAttachmentListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "VolumeAttachmentList", "storage.k8s.io/v1alpha1")
    }

    _items: Array<VolumeAttachment>;
    get items(): Array<VolumeAttachment> {
        return this._items
    }
    set items(x: Array<VolumeAttachment>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<VolumeAttachment>) {
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

export interface VolumeAttachmentSourceHelper extends VolumeAttachmentSource {
    $inlineVolumeSpec(x: PersistentVolumeSpecHelper): VolumeAttachmentSourceHelper;
    $persistentVolumeName(x: string): VolumeAttachmentSourceHelper;
}

/** VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set. */
export class VolumeAttachmentSourceHelper extends Template implements VolumeAttachmentSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _inlineVolumeSpec: PersistentVolumeSpecHelper;
    get inlineVolumeSpec(): PersistentVolumeSpecHelper {
        return this._inlineVolumeSpec
    }
    set inlineVolumeSpec(x: PersistentVolumeSpecHelper) {
        this._inlineVolumeSpec = x
    }
    $inlineVolumeSpec(x: PersistentVolumeSpecHelper) {
        this.inlineVolumeSpec = x; return this
    }

    _persistentVolumeName: string;
    get persistentVolumeName(): string {
        return this._persistentVolumeName
    }
    set persistentVolumeName(x: string) {
        this._persistentVolumeName = x
    }
    $persistentVolumeName(x: string) {
        this.persistentVolumeName = x; return this
    }
}

export interface VolumeAttachmentSpecHelper extends VolumeAttachmentSpec {
    $attacher(x: string): VolumeAttachmentSpecHelper;
    $nodeName(x: string): VolumeAttachmentSpecHelper;
    $source(x: VolumeAttachmentSourceHelper): VolumeAttachmentSpecHelper;
}

/** VolumeAttachmentSpec is the specification of a VolumeAttachment request. */
export class VolumeAttachmentSpecHelper extends Template implements VolumeAttachmentSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _attacher: string;
    get attacher(): string {
        return this._attacher
    }
    set attacher(x: string) {
        this._attacher = x
    }
    $attacher(x: string) {
        this.attacher = x; return this
    }

    _nodeName: string;
    get nodeName(): string {
        return this._nodeName
    }
    set nodeName(x: string) {
        this._nodeName = x
    }
    $nodeName(x: string) {
        this.nodeName = x; return this
    }

    _source: VolumeAttachmentSourceHelper;
    get source(): VolumeAttachmentSourceHelper {
        return this._source
    }
    set source(x: VolumeAttachmentSourceHelper) {
        this._source = x
    }
    $source(x: VolumeAttachmentSourceHelper) {
        this.source = x; return this
    }
}

export interface VolumeAttachmentStatusHelper extends VolumeAttachmentStatus {
    $attachError(x: VolumeErrorHelper): VolumeAttachmentStatusHelper;
    $attached(x: boolean): VolumeAttachmentStatusHelper;
    $attachmentMetadata(x: any): VolumeAttachmentStatusHelper;
    $detachError(x: VolumeErrorHelper): VolumeAttachmentStatusHelper;
}

/** VolumeAttachmentStatus is the status of a VolumeAttachment request. */
export class VolumeAttachmentStatusHelper extends Template implements VolumeAttachmentStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _attachError: VolumeErrorHelper;
    get attachError(): VolumeErrorHelper {
        return this._attachError
    }
    set attachError(x: VolumeErrorHelper) {
        this._attachError = x
    }
    $attachError(x: VolumeErrorHelper) {
        this.attachError = x; return this
    }

    _attached: boolean;
    get attached(): boolean {
        return this._attached
    }
    set attached(x: boolean) {
        this._attached = x
    }
    $attached(x: boolean) {
        this.attached = x; return this
    }

    _attachmentMetadata: any;
    get attachmentMetadata(): any {
        return this._attachmentMetadata
    }
    set attachmentMetadata(x: any) {
        this._attachmentMetadata = this.set(this.attachmentMetadata, x)
    }
    $attachmentMetadata(x: any) {
        this.attachmentMetadata = x; return this
    }

    _detachError: VolumeErrorHelper;
    get detachError(): VolumeErrorHelper {
        return this._detachError
    }
    set detachError(x: VolumeErrorHelper) {
        this._detachError = x
    }
    $detachError(x: VolumeErrorHelper) {
        this.detachError = x; return this
    }
}

export interface VolumeErrorHelper extends VolumeError {
    $message(x: string): VolumeErrorHelper;
    $time(x: Time): VolumeErrorHelper;
}

/** VolumeError captures an error encountered during a volume operation. */
export class VolumeErrorHelper extends Template implements VolumeErrorHelper {
    constructor(obj: any) {
        super(obj)
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

    _time: Time;
    get time(): Time {
        return this._time
    }
    set time(x: Time) {
        this._time = x
    }
    $time(x: Time) {
        this.time = x; return this
    }
}
