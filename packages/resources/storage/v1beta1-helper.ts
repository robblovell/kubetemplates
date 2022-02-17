import { ResourceTemplate, Template } from "../resourceTemplate";
import { CSIDriver, CSIDriverList, CSIDriverSpec, CSINode, CSINodeDriver, CSINodeList, CSINodeSpec, CSIStorageCapacity, CSIStorageCapacityList, StorageClass, StorageClassList, TokenRequest, VolumeAttachment, VolumeAttachmentList, VolumeAttachmentSource, VolumeAttachmentSpec, VolumeAttachmentStatus, VolumeError, VolumeNodeResources } from "./v1beta1";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { Quantity } from "../api/resource";
import { PersistentVolumeSpec, TopologySelectorTerm } from "../core/v1";
import { ObjectMetaHelper } from "../meta/v1-helper";

export interface CSIDriverHelper extends CSIDriver {
    metadata?: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): CSIDriverHelper;
    spec?: CSIDriverSpecHelper;
    $spec(x: CSIDriverSpecHelper): CSIDriverHelper;
}

/** CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. CSI drivers do not need to create the CSIDriver object directly. Instead they may use the cluster-driver-registrar sidecar container. When deployed with a CSI driver it automatically creates a CSIDriver object representing the driver. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced. */
export class CSIDriverHelper extends ResourceTemplate implements CSIDriverHelper {
    static kind = 'CSIDriver';
    static apiVersion = 'storage/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CSIDriverHelper.kind, CSIDriverHelper.apiVersion)
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: CSIDriverSpecHelper;
    get spec(): CSIDriverSpecHelper {
        return this._spec
    }
    set spec(x: CSIDriverSpecHelper) {
        this._spec = x
    }
    $Spec(x: CSIDriverSpecHelper) {
        this.spec = x; return this
    }
}

export interface CSIDriverListHelper extends CSIDriverList {
    $items(x: Array<CSIDriver>): CSIDriverListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): CSIDriverListHelper;
}

/** CSIDriverList is a collection of CSIDriver objects. */
export class CSIDriverListHelper extends ResourceTemplate implements CSIDriverListHelper {
    static kind = 'CSIDriverList';
    static apiVersion = 'storage/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CSIDriverListHelper.kind, CSIDriverListHelper.apiVersion)
    }

    _items: Array<CSIDriver>;
    get items(): Array<CSIDriver> {
        return this._items
    }
    set items(x: Array<CSIDriver>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<CSIDriver>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ListMetaHelper) {
        this.metadata = x; return this
    }
}

export interface CSIDriverSpecHelper extends CSIDriverSpec {
    $attachRequired(x: boolean): CSIDriverSpecHelper;
    $fsGroupPolicy(x: string): CSIDriverSpecHelper;
    $podInfoOnMount(x: boolean): CSIDriverSpecHelper;
    $requiresRepublish(x: boolean): CSIDriverSpecHelper;
    $storageCapacity(x: boolean): CSIDriverSpecHelper;
    $tokenRequests(x: Array<TokenRequest>): CSIDriverSpecHelper;
    $volumeLifecycleModes(x: Array<string>): CSIDriverSpecHelper;
}

/** CSIDriverSpec is the specification of a CSIDriver. */
export class CSIDriverSpecHelper extends Template implements CSIDriverSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _attachRequired: boolean;
    get attachRequired(): boolean {
        return this._attachRequired
    }
    set attachRequired(x: boolean) {
        this._attachRequired = x
    }
    $AttachRequired(x: boolean) {
        this.attachRequired = x; return this
    }

    _fsGroupPolicy: string;
    get fsGroupPolicy(): string {
        return this._fsGroupPolicy
    }
    set fsGroupPolicy(x: string) {
        this._fsGroupPolicy = x
    }
    $FsGroupPolicy(x: string) {
        this.fsGroupPolicy = x; return this
    }

    _podInfoOnMount: boolean;
    get podInfoOnMount(): boolean {
        return this._podInfoOnMount
    }
    set podInfoOnMount(x: boolean) {
        this._podInfoOnMount = x
    }
    $PodInfoOnMount(x: boolean) {
        this.podInfoOnMount = x; return this
    }

    _requiresRepublish: boolean;
    get requiresRepublish(): boolean {
        return this._requiresRepublish
    }
    set requiresRepublish(x: boolean) {
        this._requiresRepublish = x
    }
    $RequiresRepublish(x: boolean) {
        this.requiresRepublish = x; return this
    }

    _storageCapacity: boolean;
    get storageCapacity(): boolean {
        return this._storageCapacity
    }
    set storageCapacity(x: boolean) {
        this._storageCapacity = x
    }
    $StorageCapacity(x: boolean) {
        this.storageCapacity = x; return this
    }

    _tokenRequests: Array<TokenRequest>;
    get tokenRequests(): Array<TokenRequest> {
        return this._tokenRequests
    }
    set tokenRequests(x: Array<TokenRequest>) {
        this._tokenRequests = this.set(this.tokenRequests, x)
    }
    $TokenRequests(x: Array<TokenRequest>) {
        this.tokenRequests = x; return this
    }

    _volumeLifecycleModes: Array<string>;
    get volumeLifecycleModes(): Array<string> {
        return this._volumeLifecycleModes
    }
    set volumeLifecycleModes(x: Array<string>) {
        this._volumeLifecycleModes = this.set(this.volumeLifecycleModes, x)
    }
    $VolumeLifecycleModes(x: Array<string>) {
        this.volumeLifecycleModes = x; return this
    }
}

export interface CSINodeHelper extends CSINode {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): CSINodeHelper;
    spec: CSINodeSpecHelper;
    $spec(x: CSINodeSpecHelper): CSINodeHelper;
}

/** DEPRECATED - This group version of CSINode is deprecated by storage/v1/CSINode. See the release notes for more information. CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object. */
export class CSINodeHelper extends ResourceTemplate implements CSINodeHelper {
    static kind = 'CSINode';
    static apiVersion = 'storage/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CSINodeHelper.kind, CSINodeHelper.apiVersion)
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: CSINodeSpecHelper;
    get spec(): CSINodeSpecHelper {
        return this._spec
    }
    set spec(x: CSINodeSpecHelper) {
        this._spec = x
    }
    $Spec(x: CSINodeSpecHelper) {
        this.spec = x; return this
    }
}

export interface CSINodeDriverHelper extends CSINodeDriver {
    allocatable: VolumeNodeResourcesHelper;
    $allocatable(x: VolumeNodeResourcesHelper): CSINodeDriverHelper;
    $nodeID(x: string): CSINodeDriverHelper;
    $topologyKeys(x: Array<string>): CSINodeDriverHelper;
}

/** CSINodeDriver holds information about the specification of one CSI driver installed on a node */
export class CSINodeDriverHelper extends Template implements CSINodeDriverHelper {
    constructor(obj: any) {
        super(obj)
    }

    _allocatable: VolumeNodeResourcesHelper;
    get allocatable(): VolumeNodeResourcesHelper {
        return this._allocatable
    }
    set allocatable(x: VolumeNodeResourcesHelper) {
        this._allocatable = x
    }
    $Allocatable(x: VolumeNodeResourcesHelper) {
        this.allocatable = x; return this
    }

    _nodeID: string;
    get nodeID(): string {
        return this._nodeID
    }
    set nodeID(x: string) {
        this._nodeID = x
    }
    $NodeID(x: string) {
        this.nodeID = x; return this
    }

    _topologyKeys: Array<string>;
    get topologyKeys(): Array<string> {
        return this._topologyKeys
    }
    set topologyKeys(x: Array<string>) {
        this._topologyKeys = this.set(this.topologyKeys, x)
    }
    $TopologyKeys(x: Array<string>) {
        this.topologyKeys = x; return this
    }
}

export interface CSINodeListHelper extends CSINodeList {
    $items(x: Array<CSINode>): CSINodeListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): CSINodeListHelper;
}

/** CSINodeList is a collection of CSINode objects. */
export class CSINodeListHelper extends ResourceTemplate implements CSINodeListHelper {
    static kind = 'CSINodeList';
    static apiVersion = 'storage/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CSINodeListHelper.kind, CSINodeListHelper.apiVersion)
    }

    _items: Array<CSINode>;
    get items(): Array<CSINode> {
        return this._items
    }
    set items(x: Array<CSINode>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<CSINode>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ListMetaHelper) {
        this.metadata = x; return this
    }
}

export interface CSINodeSpecHelper extends CSINodeSpec {
    $drivers(x: Array<CSINodeDriver>): CSINodeSpecHelper;
}

/** CSINodeSpec holds information about the specification of all CSI drivers installed on a node */
export class CSINodeSpecHelper extends Template implements CSINodeSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _drivers: Array<CSINodeDriver>;
    get drivers(): Array<CSINodeDriver> {
        return this._drivers
    }
    set drivers(x: Array<CSINodeDriver>) {
        this._drivers = this.set(this.drivers, x)
    }
    $Drivers(x: Array<CSINodeDriver>) {
        this.drivers = x; return this
    }
}

export interface CSIStorageCapacityHelper extends CSIStorageCapacity {
    $capacity(x: Quantity): CSIStorageCapacityHelper;
    $maximumVolumeSize(x: Quantity): CSIStorageCapacityHelper;
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): CSIStorageCapacityHelper;
    nodeTopology: LabelSelectorHelper;
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
    static kind = 'CSIStorageCapacity';
    static apiVersion = 'storage/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CSIStorageCapacityHelper.kind, CSIStorageCapacityHelper.apiVersion)
    }

    _capacity: Quantity;
    get capacity(): Quantity {
        return this._capacity
    }
    set capacity(x: Quantity) {
        this._capacity = x
    }
    $Capacity(x: Quantity) {
        this.capacity = x; return this
    }

    _maximumVolumeSize: Quantity;
    get maximumVolumeSize(): Quantity {
        return this._maximumVolumeSize
    }
    set maximumVolumeSize(x: Quantity) {
        this._maximumVolumeSize = x
    }
    $MaximumVolumeSize(x: Quantity) {
        this.maximumVolumeSize = x; return this
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _nodeTopology: LabelSelectorHelper;
    get nodeTopology(): LabelSelectorHelper {
        return this._nodeTopology
    }
    set nodeTopology(x: LabelSelectorHelper) {
        this._nodeTopology = x
    }
    $NodeTopology(x: LabelSelectorHelper) {
        this.nodeTopology = x; return this
    }

    _storageClassName: string;
    get storageClassName(): string {
        return this._storageClassName
    }
    set storageClassName(x: string) {
        this._storageClassName = x
    }
    $StorageClassName(x: string) {
        this.storageClassName = x; return this
    }
}

export interface CSIStorageCapacityListHelper extends CSIStorageCapacityList {
    $items(x: Array<CSIStorageCapacity>): CSIStorageCapacityListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): CSIStorageCapacityListHelper;
}

/** CSIStorageCapacityList is a collection of CSIStorageCapacity objects. */
export class CSIStorageCapacityListHelper extends ResourceTemplate implements CSIStorageCapacityListHelper {
    static kind = 'CSIStorageCapacityList';
    static apiVersion = 'storage/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CSIStorageCapacityListHelper.kind, CSIStorageCapacityListHelper.apiVersion)
    }

    _items: Array<CSIStorageCapacity>;
    get items(): Array<CSIStorageCapacity> {
        return this._items
    }
    set items(x: Array<CSIStorageCapacity>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<CSIStorageCapacity>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ListMetaHelper) {
        this.metadata = x; return this
    }
}

export interface StorageClassHelper extends StorageClass {
    $allowVolumeExpansion(x: boolean): StorageClassHelper;
    $allowedTopologies(x: Array<TopologySelectorTerm>): StorageClassHelper;
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): StorageClassHelper;
    $mountOptions(x: Array<string>): StorageClassHelper;
    $parameters(x: any): StorageClassHelper;
    $provisioner(x: string): StorageClassHelper;
    $reclaimPolicy(x: string): StorageClassHelper;
    $volumeBindingMode(x: string): StorageClassHelper;
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

    _allowVolumeExpansion: boolean;
    get allowVolumeExpansion(): boolean {
        return this._allowVolumeExpansion
    }
    set allowVolumeExpansion(x: boolean) {
        this._allowVolumeExpansion = x
    }
    $AllowVolumeExpansion(x: boolean) {
        this.allowVolumeExpansion = x; return this
    }

    _allowedTopologies: Array<TopologySelectorTerm>;
    get allowedTopologies(): Array<TopologySelectorTerm> {
        return this._allowedTopologies
    }
    set allowedTopologies(x: Array<TopologySelectorTerm>) {
        this._allowedTopologies = this.set(this.allowedTopologies, x)
    }
    $AllowedTopologies(x: Array<TopologySelectorTerm>) {
        this.allowedTopologies = x; return this
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _mountOptions: Array<string>;
    get mountOptions(): Array<string> {
        return this._mountOptions
    }
    set mountOptions(x: Array<string>) {
        this._mountOptions = this.set(this.mountOptions, x)
    }
    $MountOptions(x: Array<string>) {
        this.mountOptions = x; return this
    }

    _parameters: any;
    get parameters(): any {
        return this._parameters
    }
    set parameters(x: any) {
        this._parameters = this.set(this.parameters, x)
    }
    $Parameters(x: any) {
        this.parameters = x; return this
    }

    _provisioner: string;
    get provisioner(): string {
        return this._provisioner
    }
    set provisioner(x: string) {
        this._provisioner = x
    }
    $Provisioner(x: string) {
        this.provisioner = x; return this
    }

    _reclaimPolicy: string;
    get reclaimPolicy(): string {
        return this._reclaimPolicy
    }
    set reclaimPolicy(x: string) {
        this._reclaimPolicy = x
    }
    $ReclaimPolicy(x: string) {
        this.reclaimPolicy = x; return this
    }

    _volumeBindingMode: string;
    get volumeBindingMode(): string {
        return this._volumeBindingMode
    }
    set volumeBindingMode(x: string) {
        this._volumeBindingMode = x
    }
    $VolumeBindingMode(x: string) {
        this.volumeBindingMode = x; return this
    }
}

export interface StorageClassListHelper extends StorageClassList {
    $items(x: Array<StorageClass>): StorageClassListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): StorageClassListHelper;
}

/** StorageClassList is a collection of storage classes. */
export class StorageClassListHelper extends ResourceTemplate implements StorageClassListHelper {
    static kind = 'StorageClassList';
    static apiVersion = 'storage/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, StorageClassListHelper.kind, StorageClassListHelper.apiVersion)
    }

    _items: Array<StorageClass>;
    get items(): Array<StorageClass> {
        return this._items
    }
    set items(x: Array<StorageClass>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<StorageClass>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ListMetaHelper) {
        this.metadata = x; return this
    }
}

export interface TokenRequestHelper extends TokenRequest {
    $audience(x: string): TokenRequestHelper;
    $expirationSeconds(x: number): TokenRequestHelper;
}

/** TokenRequest contains parameters of a service account token. */
export class TokenRequestHelper extends Template implements TokenRequestHelper {
    constructor(obj: any) {
        super(obj)
    }

    _audience: string;
    get audience(): string {
        return this._audience
    }
    set audience(x: string) {
        this._audience = x
    }
    $Audience(x: string) {
        this.audience = x; return this
    }

    _expirationSeconds: number;
    get expirationSeconds(): number {
        return this._expirationSeconds
    }
    set expirationSeconds(x: number) {
        this._expirationSeconds = x
    }
    $ExpirationSeconds(x: number) {
        this.expirationSeconds = x; return this
    }
}

export interface VolumeAttachmentHelper extends VolumeAttachment {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): VolumeAttachmentHelper;
    spec: VolumeAttachmentSpecHelper;
    $spec(x: VolumeAttachmentSpecHelper): VolumeAttachmentHelper;
    status: VolumeAttachmentStatusHelper;
    $status(x: VolumeAttachmentStatusHelper): VolumeAttachmentHelper;
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

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: VolumeAttachmentSpecHelper;
    get spec(): VolumeAttachmentSpecHelper {
        return this._spec
    }
    set spec(x: VolumeAttachmentSpecHelper) {
        this._spec = x
    }
    $Spec(x: VolumeAttachmentSpecHelper) {
        this.spec = x; return this
    }

    _status: VolumeAttachmentStatusHelper;
    get status(): VolumeAttachmentStatusHelper {
        return this._status
    }
    set status(x: VolumeAttachmentStatusHelper) {
        this._status = x
    }
    $Status(x: VolumeAttachmentStatusHelper) {
        this.status = x; return this
    }
}

export interface VolumeAttachmentListHelper extends VolumeAttachmentList {
    $items(x: Array<VolumeAttachment>): VolumeAttachmentListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): VolumeAttachmentListHelper;
}

/** VolumeAttachmentList is a collection of VolumeAttachment objects. */
export class VolumeAttachmentListHelper extends ResourceTemplate implements VolumeAttachmentListHelper {
    static kind = 'VolumeAttachmentList';
    static apiVersion = 'storage/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, VolumeAttachmentListHelper.kind, VolumeAttachmentListHelper.apiVersion)
    }

    _items: Array<VolumeAttachment>;
    get items(): Array<VolumeAttachment> {
        return this._items
    }
    set items(x: Array<VolumeAttachment>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<VolumeAttachment>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ListMetaHelper) {
        this.metadata = x; return this
    }
}

export interface VolumeAttachmentSourceHelper extends VolumeAttachmentSource {
    inlineVolumeSpec: PersistentVolumeSpecHelper;
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
    $InlineVolumeSpec(x: PersistentVolumeSpecHelper): VolumeAttachmentSourceHelper {
        this.inlineVolumeSpec = x; return this
    }

    _persistentVolumeName: string;
    get persistentVolumeName(): string {
        return this._persistentVolumeName
    }
    set persistentVolumeName(x: string) {
        this._persistentVolumeName = x
    }
    $PersistentVolumeName(x: string) {
        this.persistentVolumeName = x; return this
    }
}

export interface VolumeAttachmentSpecHelper extends VolumeAttachmentSpec {
    $attacher(x: string): VolumeAttachmentSpecHelper;
    $nodeName(x: string): VolumeAttachmentSpecHelper;
    source: VolumeAttachmentSourceHelper;
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
    $Attacher(x: string) {
        this.attacher = x; return this
    }

    _nodeName: string;
    get nodeName(): string {
        return this._nodeName
    }
    set nodeName(x: string) {
        this._nodeName = x
    }
    $NodeName(x: string) {
        this.nodeName = x; return this
    }

    _source: VolumeAttachmentSourceHelper;
    get source(): VolumeAttachmentSourceHelper {
        return this._source
    }
    set source(x: VolumeAttachmentSourceHelper) {
        this._source = x
    }
    $Source(x: VolumeAttachmentSourceHelper) {
        this.source = x; return this
    }
}

export interface VolumeAttachmentStatusHelper extends VolumeAttachmentStatus {
    attachError: VolumeErrorHelper;
    $attachError(x: VolumeErrorHelper): VolumeAttachmentStatusHelper;
    $attached(x: boolean): VolumeAttachmentStatusHelper;
    $attachmentMetadata(x: any): VolumeAttachmentStatusHelper;
    detachError: VolumeErrorHelper;
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
    $AttachError(x: VolumeErrorHelper) {
        this.attachError = x; return this
    }

    _attached: boolean;
    get attached(): boolean {
        return this._attached
    }
    set attached(x: boolean) {
        this._attached = x
    }
    $Attached(x: boolean) {
        this.attached = x; return this
    }

    _attachmentMetadata: any;
    get attachmentMetadata(): any {
        return this._attachmentMetadata
    }
    set attachmentMetadata(x: any) {
        this._attachmentMetadata = this.set(this.attachmentMetadata, x)
    }
    $AttachmentMetadata(x: any) {
        this.attachmentMetadata = x; return this
    }

    _detachError: VolumeErrorHelper;
    get detachError(): VolumeErrorHelper {
        return this._detachError
    }
    set detachError(x: VolumeErrorHelper) {
        this._detachError = x
    }
    $DetachError(x: VolumeErrorHelper) {
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
    $Message(x: string) {
        this.message = x; return this
    }

    _time: Time;
    get time(): Time {
        return this._time
    }
    set time(x: Time) {
        this._time = x
    }
    $Time(x: Time) {
        this.time = x; return this
    }
}

export interface VolumeNodeResourcesHelper extends VolumeNodeResources {
    $count(x: number): VolumeNodeResourcesHelper;
}

/** VolumeNodeResources is a set of resource limits for scheduling of volumes. */
export class VolumeNodeResourcesHelper extends Template implements VolumeNodeResourcesHelper {
    constructor(obj: any) {
        super(obj)
    }

    _count: number;
    get count(): number {
        return this._count
    }
    set count(x: number) {
        this._count = x
    }
    $Count(x: number) {
        this.count = x; return this
    }
}
