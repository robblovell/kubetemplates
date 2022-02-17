import { ResourceTemplate, Template } from "../resourceTemplate";
import { CSIStorageCapacity, CSIStorageCapacityList, VolumeAttachment, VolumeAttachmentList, VolumeAttachmentSource, VolumeAttachmentSpec, VolumeAttachmentStatus, VolumeError } from "./v1alpha1";
import { Quantity } from "../api/resource";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { PersistentVolumeSpec } from "../core/v1";

export interface CSIStorageCapacityHelper extends CSIStorageCapacity {
    $capacity(x: any): any;
    $maximumVolumeSize(x: any): any;
    $metadata(x: any): any;
    $nodeTopology(x: any): any;
    $storageClassName(x: any): any;
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
    static kind = 'CSIStorageCapacity';
    static apiVersion = 'storage/v1alpha1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CSIStorageCapacityHelper.kind, CSIStorageCapacityHelper.apiVersion)
    }

    _capacity: any;
    get capacity(): any /*Quantity*/ {
        return this._capacity
    }
    set capacity(x: any /*Quantity*/) {
        this._capacity = x
    }
    setCapacity(x: any /*Quantity*/) {
        this.capacity = x; return this
    }

    _maximumVolumeSize: any;
    get maximumVolumeSize(): any /*Quantity*/ {
        return this._maximumVolumeSize
    }
    set maximumVolumeSize(x: any /*Quantity*/) {
        this._maximumVolumeSize = x
    }
    setMaximumVolumeSize(x: any /*Quantity*/) {
        this.maximumVolumeSize = x; return this
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

    _nodeTopology: any;
    get nodeTopology(): any /*LabelSelectorHelper*/ {
        return this._nodeTopology
    }
    set nodeTopology(x: any /*LabelSelectorHelper*/) {
        this._nodeTopology = x
    }
    setNodeTopology(x: any /*LabelSelectorHelper*/) {
        this.nodeTopology = x; return this
    }

    _storageClassName: any;
    get storageClassName(): any /*string*/ {
        return this._storageClassName
    }
    set storageClassName(x: any /*string*/) {
        this._storageClassName = x
    }
    setStorageClassName(x: any /*string*/) {
        this.storageClassName = x; return this
    }
}

export interface CSIStorageCapacityListHelper extends CSIStorageCapacityList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** CSIStorageCapacityList is a collection of CSIStorageCapacity objects. */
export class CSIStorageCapacityListHelper extends ResourceTemplate implements CSIStorageCapacityListHelper {
    static kind = 'CSIStorageCapacityList';
    static apiVersion = 'storage/v1alpha1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CSIStorageCapacityListHelper.kind, CSIStorageCapacityListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<CSIStorageCapacity>*/ {
        return this._items
    }
    set items(x: any /*Array<CSIStorageCapacity>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<CSIStorageCapacity>*/) {
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

export interface VolumeAttachmentHelper extends VolumeAttachment {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 *
 * VolumeAttachment objects are non-namespaced.
 */
export class VolumeAttachmentHelper extends ResourceTemplate implements VolumeAttachmentHelper {
    static kind = 'VolumeAttachment';
    static apiVersion = 'storage/v1alpha1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, VolumeAttachmentHelper.kind, VolumeAttachmentHelper.apiVersion)
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
    get spec(): any /*VolumeAttachmentSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*VolumeAttachmentSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*VolumeAttachmentSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*VolumeAttachmentStatusHelper*/ {
        return this._status
    }
    set status(x: any /*VolumeAttachmentStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*VolumeAttachmentStatusHelper*/) {
        this.status = x; return this
    }
}

export interface VolumeAttachmentListHelper extends VolumeAttachmentList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** VolumeAttachmentList is a collection of VolumeAttachment objects. */
export class VolumeAttachmentListHelper extends ResourceTemplate implements VolumeAttachmentListHelper {
    static kind = 'VolumeAttachmentList';
    static apiVersion = 'storage/v1alpha1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, VolumeAttachmentListHelper.kind, VolumeAttachmentListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<VolumeAttachment>*/ {
        return this._items
    }
    set items(x: any /*Array<VolumeAttachment>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<VolumeAttachment>*/) {
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

export interface VolumeAttachmentSourceHelper extends VolumeAttachmentSource {
    $inlineVolumeSpec(x: any): any;
    $persistentVolumeName(x: any): any;
}

/** VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set. */
export class VolumeAttachmentSourceHelper extends Template implements VolumeAttachmentSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _inlineVolumeSpec: any;
    get inlineVolumeSpec(): any /*PersistentVolumeSpecHelper*/ {
        return this._inlineVolumeSpec
    }
    set inlineVolumeSpec(x: any /*PersistentVolumeSpecHelper*/) {
        this._inlineVolumeSpec = x
    }
    setInlineVolumeSpec(x: any /*PersistentVolumeSpecHelper*/) {
        this.inlineVolumeSpec = x; return this
    }

    _persistentVolumeName: any;
    get persistentVolumeName(): any /*string*/ {
        return this._persistentVolumeName
    }
    set persistentVolumeName(x: any /*string*/) {
        this._persistentVolumeName = x
    }
    setPersistentVolumeName(x: any /*string*/) {
        this.persistentVolumeName = x; return this
    }
}

export interface VolumeAttachmentSpecHelper extends VolumeAttachmentSpec {
    $attacher(x: any): any;
    $nodeName(x: any): any;
    $source(x: any): any;
}

/** VolumeAttachmentSpec is the specification of a VolumeAttachment request. */
export class VolumeAttachmentSpecHelper extends Template implements VolumeAttachmentSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _attacher: any;
    get attacher(): any /*string*/ {
        return this._attacher
    }
    set attacher(x: any /*string*/) {
        this._attacher = x
    }
    setAttacher(x: any /*string*/) {
        this.attacher = x; return this
    }

    _nodeName: any;
    get nodeName(): any /*string*/ {
        return this._nodeName
    }
    set nodeName(x: any /*string*/) {
        this._nodeName = x
    }
    setNodeName(x: any /*string*/) {
        this.nodeName = x; return this
    }

    _source: any;
    get source(): any /*VolumeAttachmentSourceHelper*/ {
        return this._source
    }
    set source(x: any /*VolumeAttachmentSourceHelper*/) {
        this._source = x
    }
    setSource(x: any /*VolumeAttachmentSourceHelper*/) {
        this.source = x; return this
    }
}

export interface VolumeAttachmentStatusHelper extends VolumeAttachmentStatus {
    $attachError(x: any): any;
    $attached(x: any): any;
    $attachmentMetadata(x: any): any;
    $detachError(x: any): any;
}

/** VolumeAttachmentStatus is the status of a VolumeAttachment request. */
export class VolumeAttachmentStatusHelper extends Template implements VolumeAttachmentStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _attachError: any;
    get attachError(): any /*VolumeErrorHelper*/ {
        return this._attachError
    }
    set attachError(x: any /*VolumeErrorHelper*/) {
        this._attachError = x
    }
    setAttachError(x: any /*VolumeErrorHelper*/) {
        this.attachError = x; return this
    }

    _attached: any;
    get attached(): any /*boolean*/ {
        return this._attached
    }
    set attached(x: any /*boolean*/) {
        this._attached = x
    }
    setAttached(x: any /*boolean*/) {
        this.attached = x; return this
    }

    _attachmentMetadata: any;
    get attachmentMetadata(): any /*any*/ {
        return this._attachmentMetadata
    }
    set attachmentMetadata(x: any /*any*/) {
        this._attachmentMetadata = this.set(this.attachmentMetadata, x)
    }
    setAttachmentMetadata(x: any /*any*/) {
        this.attachmentMetadata = x; return this
    }

    _detachError: any;
    get detachError(): any /*VolumeErrorHelper*/ {
        return this._detachError
    }
    set detachError(x: any /*VolumeErrorHelper*/) {
        this._detachError = x
    }
    setDetachError(x: any /*VolumeErrorHelper*/) {
        this.detachError = x; return this
    }
}

export interface VolumeErrorHelper extends VolumeError {
    $message(x: any): any;
    $time(x: any): any;
}

/** VolumeError captures an error encountered during a volume operation. */
export class VolumeErrorHelper extends Template implements VolumeErrorHelper {
    constructor(obj: any) {
        super(obj)
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

    _time: any;
    get time(): any /*Time*/ {
        return this._time
    }
    set time(x: any /*Time*/) {
        this._time = x
    }
    setTime(x: any /*Time*/) {
        this.time = x; return this
    }
}
