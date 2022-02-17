import { ResourceTemplate, Template } from "../resourceTemplate";
import { CSIDriver, CSIDriverList, CSIDriverSpec, CSINode, CSINodeDriver, CSINodeList, CSINodeSpec, CSIStorageCapacity, CSIStorageCapacityList, StorageClass, StorageClassList, TokenRequest, VolumeAttachment, VolumeAttachmentList, VolumeAttachmentSource, VolumeAttachmentSpec, VolumeAttachmentStatus, VolumeError, VolumeNodeResources } from "./v1beta1";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { Quantity } from "../api/resource";
import { PersistentVolumeSpec, TopologySelectorTerm } from "../core/v1";

export interface CSIDriverHelper extends CSIDriver {
    $metadata(x: any): any;
    $spec(x: any): any;
}

/** CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. CSI drivers do not need to create the CSIDriver object directly. Instead they may use the cluster-driver-registrar sidecar container. When deployed with a CSI driver it automatically creates a CSIDriver object representing the driver. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced. */
export class CSIDriverHelper extends ResourceTemplate implements CSIDriverHelper {
    static kind = 'CSIDriver';
    static apiVersion = 'storage/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CSIDriverHelper.kind, CSIDriverHelper.apiVersion)
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
    get spec(): any /*CSIDriverSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*CSIDriverSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*CSIDriverSpecHelper*/) {
        this.spec = x; return this
    }
}

export interface CSIDriverListHelper extends CSIDriverList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** CSIDriverList is a collection of CSIDriver objects. */
export class CSIDriverListHelper extends ResourceTemplate implements CSIDriverListHelper {
    static kind = 'CSIDriverList';
    static apiVersion = 'storage/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CSIDriverListHelper.kind, CSIDriverListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<CSIDriver>*/ {
        return this._items
    }
    set items(x: any /*Array<CSIDriver>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<CSIDriver>*/) {
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

export interface CSIDriverSpecHelper extends CSIDriverSpec {
    $attachRequired(x: any): any;
    $fsGroupPolicy(x: any): any;
    $podInfoOnMount(x: any): any;
    $requiresRepublish(x: any): any;
    $storageCapacity(x: any): any;
    $tokenRequests(x: any): any;
    $volumeLifecycleModes(x: any): any;
}

/** CSIDriverSpec is the specification of a CSIDriver. */
export class CSIDriverSpecHelper extends Template implements CSIDriverSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _attachRequired: any;
    get attachRequired(): any /*boolean*/ {
        return this._attachRequired
    }
    set attachRequired(x: any /*boolean*/) {
        this._attachRequired = x
    }
    setAttachRequired(x: any /*boolean*/) {
        this.attachRequired = x; return this
    }

    _fsGroupPolicy: any;
    get fsGroupPolicy(): any /*string*/ {
        return this._fsGroupPolicy
    }
    set fsGroupPolicy(x: any /*string*/) {
        this._fsGroupPolicy = x
    }
    setFsGroupPolicy(x: any /*string*/) {
        this.fsGroupPolicy = x; return this
    }

    _podInfoOnMount: any;
    get podInfoOnMount(): any /*boolean*/ {
        return this._podInfoOnMount
    }
    set podInfoOnMount(x: any /*boolean*/) {
        this._podInfoOnMount = x
    }
    setPodInfoOnMount(x: any /*boolean*/) {
        this.podInfoOnMount = x; return this
    }

    _requiresRepublish: any;
    get requiresRepublish(): any /*boolean*/ {
        return this._requiresRepublish
    }
    set requiresRepublish(x: any /*boolean*/) {
        this._requiresRepublish = x
    }
    setRequiresRepublish(x: any /*boolean*/) {
        this.requiresRepublish = x; return this
    }

    _storageCapacity: any;
    get storageCapacity(): any /*boolean*/ {
        return this._storageCapacity
    }
    set storageCapacity(x: any /*boolean*/) {
        this._storageCapacity = x
    }
    setStorageCapacity(x: any /*boolean*/) {
        this.storageCapacity = x; return this
    }

    _tokenRequests: any;
    get tokenRequests(): any /*Array<TokenRequest>*/ {
        return this._tokenRequests
    }
    set tokenRequests(x: any /*Array<TokenRequest>*/) {
        this._tokenRequests = this.set(this.tokenRequests, x)
    }
    setTokenRequests(x: any /*Array<TokenRequest>*/) {
        this.tokenRequests = x; return this
    }

    _volumeLifecycleModes: any;
    get volumeLifecycleModes(): any /*Array<string>*/ {
        return this._volumeLifecycleModes
    }
    set volumeLifecycleModes(x: any /*Array<string>*/) {
        this._volumeLifecycleModes = this.set(this.volumeLifecycleModes, x)
    }
    setVolumeLifecycleModes(x: any /*Array<string>*/) {
        this.volumeLifecycleModes = x; return this
    }
}

export interface CSINodeHelper extends CSINode {
    $metadata(x: any): any;
    $spec(x: any): any;
}

/** DEPRECATED - This group version of CSINode is deprecated by storage/v1/CSINode. See the release notes for more information. CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object. */
export class CSINodeHelper extends ResourceTemplate implements CSINodeHelper {
    static kind = 'CSINode';
    static apiVersion = 'storage/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CSINodeHelper.kind, CSINodeHelper.apiVersion)
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
    get spec(): any /*CSINodeSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*CSINodeSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*CSINodeSpecHelper*/) {
        this.spec = x; return this
    }
}

export interface CSINodeDriverHelper extends CSINodeDriver {
    $allocatable(x: any): any;
    $nodeID(x: any): any;
    $topologyKeys(x: any): any;
}

/** CSINodeDriver holds information about the specification of one CSI driver installed on a node */
export class CSINodeDriverHelper extends Template implements CSINodeDriverHelper {
    constructor(obj: any) {
        super(obj)
    }

    _allocatable: any;
    get allocatable(): any /*VolumeNodeResourcesHelper*/ {
        return this._allocatable
    }
    set allocatable(x: any /*VolumeNodeResourcesHelper*/) {
        this._allocatable = x
    }
    setAllocatable(x: any /*VolumeNodeResourcesHelper*/) {
        this.allocatable = x; return this
    }

    _nodeID: any;
    get nodeID(): any /*string*/ {
        return this._nodeID
    }
    set nodeID(x: any /*string*/) {
        this._nodeID = x
    }
    setNodeID(x: any /*string*/) {
        this.nodeID = x; return this
    }

    _topologyKeys: any;
    get topologyKeys(): any /*Array<string>*/ {
        return this._topologyKeys
    }
    set topologyKeys(x: any /*Array<string>*/) {
        this._topologyKeys = this.set(this.topologyKeys, x)
    }
    setTopologyKeys(x: any /*Array<string>*/) {
        this.topologyKeys = x; return this
    }
}

export interface CSINodeListHelper extends CSINodeList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** CSINodeList is a collection of CSINode objects. */
export class CSINodeListHelper extends ResourceTemplate implements CSINodeListHelper {
    static kind = 'CSINodeList';
    static apiVersion = 'storage/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CSINodeListHelper.kind, CSINodeListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<CSINode>*/ {
        return this._items
    }
    set items(x: any /*Array<CSINode>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<CSINode>*/) {
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

export interface CSINodeSpecHelper extends CSINodeSpec {
    $drivers(x: any): any;
}

/** CSINodeSpec holds information about the specification of all CSI drivers installed on a node */
export class CSINodeSpecHelper extends Template implements CSINodeSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _drivers: any;
    get drivers(): any /*Array<CSINodeDriver>*/ {
        return this._drivers
    }
    set drivers(x: any /*Array<CSINodeDriver>*/) {
        this._drivers = this.set(this.drivers, x)
    }
    setDrivers(x: any /*Array<CSINodeDriver>*/) {
        this.drivers = x; return this
    }
}

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
    static apiVersion = 'storage/v1beta1';

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
    static apiVersion = 'storage/v1beta1';

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

export interface StorageClassHelper extends StorageClass {
    $allowVolumeExpansion(x: any): any;
    $allowedTopologies(x: any): any;
    $metadata(x: any): any;
    $mountOptions(x: any): any;
    $parameters(x: any): any;
    $provisioner(x: any): any;
    $reclaimPolicy(x: any): any;
    $volumeBindingMode(x: any): any;
}

/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 *
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export class StorageClassHelper extends ResourceTemplate implements StorageClassHelper {
    static kind = 'StorageClass';
    static apiVersion = 'storage/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, StorageClassHelper.kind, StorageClassHelper.apiVersion)
    }

    _allowVolumeExpansion: any;
    get allowVolumeExpansion(): any /*boolean*/ {
        return this._allowVolumeExpansion
    }
    set allowVolumeExpansion(x: any /*boolean*/) {
        this._allowVolumeExpansion = x
    }
    setAllowVolumeExpansion(x: any /*boolean*/) {
        this.allowVolumeExpansion = x; return this
    }

    _allowedTopologies: any;
    get allowedTopologies(): any /*Array<TopologySelectorTerm>*/ {
        return this._allowedTopologies
    }
    set allowedTopologies(x: any /*Array<TopologySelectorTerm>*/) {
        this._allowedTopologies = this.set(this.allowedTopologies, x)
    }
    setAllowedTopologies(x: any /*Array<TopologySelectorTerm>*/) {
        this.allowedTopologies = x; return this
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

    _mountOptions: any;
    get mountOptions(): any /*Array<string>*/ {
        return this._mountOptions
    }
    set mountOptions(x: any /*Array<string>*/) {
        this._mountOptions = this.set(this.mountOptions, x)
    }
    setMountOptions(x: any /*Array<string>*/) {
        this.mountOptions = x; return this
    }

    _parameters: any;
    get parameters(): any /*any*/ {
        return this._parameters
    }
    set parameters(x: any /*any*/) {
        this._parameters = this.set(this.parameters, x)
    }
    setParameters(x: any /*any*/) {
        this.parameters = x; return this
    }

    _provisioner: any;
    get provisioner(): any /*string*/ {
        return this._provisioner
    }
    set provisioner(x: any /*string*/) {
        this._provisioner = x
    }
    setProvisioner(x: any /*string*/) {
        this.provisioner = x; return this
    }

    _reclaimPolicy: any;
    get reclaimPolicy(): any /*string*/ {
        return this._reclaimPolicy
    }
    set reclaimPolicy(x: any /*string*/) {
        this._reclaimPolicy = x
    }
    setReclaimPolicy(x: any /*string*/) {
        this.reclaimPolicy = x; return this
    }

    _volumeBindingMode: any;
    get volumeBindingMode(): any /*string*/ {
        return this._volumeBindingMode
    }
    set volumeBindingMode(x: any /*string*/) {
        this._volumeBindingMode = x
    }
    setVolumeBindingMode(x: any /*string*/) {
        this.volumeBindingMode = x; return this
    }
}

export interface StorageClassListHelper extends StorageClassList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** StorageClassList is a collection of storage classes. */
export class StorageClassListHelper extends ResourceTemplate implements StorageClassListHelper {
    static kind = 'StorageClassList';
    static apiVersion = 'storage/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, StorageClassListHelper.kind, StorageClassListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<StorageClass>*/ {
        return this._items
    }
    set items(x: any /*Array<StorageClass>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<StorageClass>*/) {
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

export interface TokenRequestHelper extends TokenRequest {
    $audience(x: any): any;
    $expirationSeconds(x: any): any;
}

/** TokenRequest contains parameters of a service account token. */
export class TokenRequestHelper extends Template implements TokenRequestHelper {
    constructor(obj: any) {
        super(obj)
    }

    _audience: any;
    get audience(): any /*string*/ {
        return this._audience
    }
    set audience(x: any /*string*/) {
        this._audience = x
    }
    setAudience(x: any /*string*/) {
        this.audience = x; return this
    }

    _expirationSeconds: any;
    get expirationSeconds(): any /*number*/ {
        return this._expirationSeconds
    }
    set expirationSeconds(x: any /*number*/) {
        this._expirationSeconds = x
    }
    setExpirationSeconds(x: any /*number*/) {
        this.expirationSeconds = x; return this
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
    static apiVersion = 'storage/v1beta1';

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
    static apiVersion = 'storage/v1beta1';

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

export interface VolumeNodeResourcesHelper extends VolumeNodeResources {
    $count(x: any): any;
}

/** VolumeNodeResources is a set of resource limits for scheduling of volumes. */
export class VolumeNodeResourcesHelper extends Template implements VolumeNodeResourcesHelper {
    constructor(obj: any) {
        super(obj)
    }

    _count: any;
    get count(): any /*number*/ {
        return this._count
    }
    set count(x: any /*number*/) {
        this._count = x
    }
    setCount(x: any /*number*/) {
        this.count = x; return this
    }
}
