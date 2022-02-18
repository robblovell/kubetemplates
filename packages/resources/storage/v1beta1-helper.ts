import { ResourceTemplate, Template } from "../resourceTemplate";
import { CSIStorageCapacity, CSIStorageCapacityList } from "./v1beta1";
import { Quantity } from "../api/resource";
import { LabelSelector, ListMeta, ObjectMeta } from "../meta/v1";
import { LabelSelectorHelper, ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";

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
        super(nameOrObject, namespace, "CSIStorageCapacity", "storage.k8s.io/v1beta1")
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
        super(nameOrObject, namespace, "CSIStorageCapacityList", "storage.k8s.io/v1beta1")
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
