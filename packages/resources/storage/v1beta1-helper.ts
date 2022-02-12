import { ResourceTemplate } from "../resourceTemplate";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { CSIDriver, CSIDriverSpec, CSINode, CSINodeDriver, CSINodeSpec, CSIStorageCapacity, StorageClass, TokenRequest, VolumeAttachment, VolumeAttachmentSource, VolumeAttachmentSpec, VolumeAttachmentStatus, VolumeError, VolumeNodeResources } from "./v1beta1";
import { Quantity } from "../api/resource";
import { PersistentVolumeSpec, TopologySelectorTerm } from "../core/v1";

/** CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. CSI drivers do not need to create the CSIDriver object directly. Instead they may use the cluster-driver-registrar sidecar container. When deployed with a CSI driver it automatically creates a CSIDriver object representing the driver. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced. */
export class CSIDriverHelper extends ResourceTemplate {
    static kind = 'CSIDriver';
    static apiVersion = 'storage/v1beta1';

    metadata(metadata: ObjectMeta): CSIDriverHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: CSIDriverSpec): CSIDriverHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CSIDriverHelper.kind
        this._template.apiVersion = CSIDriverHelper.apiVersion
    }
}

/** CSIDriverList is a collection of CSIDriver objects. */
export class CSIDriverListHelper extends ResourceTemplate {
    static kind = 'CSIDriverList';
    static apiVersion = 'storage/v1beta1';

    items(items: Array<CSIDriver>): CSIDriverListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): CSIDriverListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CSIDriverListHelper.kind
        this._template.apiVersion = CSIDriverListHelper.apiVersion
    }
}

/** CSIDriverSpec is the specification of a CSIDriver. */
export class CSIDriverSpecHelper extends ResourceTemplate {
    static kind = 'CSIDriverSpec';
    static apiVersion = 'storage/v1beta1';

    attachRequired(attachRequired: boolean): CSIDriverSpecHelper {
        this._template.attachRequired = attachRequired
        return this
    }

    fsGroupPolicy(fsGroupPolicy: string): CSIDriverSpecHelper {
        this._template.fsGroupPolicy = fsGroupPolicy
        return this
    }

    podInfoOnMount(podInfoOnMount: boolean): CSIDriverSpecHelper {
        this._template.podInfoOnMount = podInfoOnMount
        return this
    }

    requiresRepublish(requiresRepublish: boolean): CSIDriverSpecHelper {
        this._template.requiresRepublish = requiresRepublish
        return this
    }

    storageCapacity(storageCapacity: boolean): CSIDriverSpecHelper {
        this._template.storageCapacity = storageCapacity
        return this
    }

    tokenRequests(tokenRequests: Array<TokenRequest>): CSIDriverSpecHelper {
        if (!Array.isArray(tokenRequests)) { tokenRequests = [tokenRequests] }
        if (!this._template.tokenRequests) this._template.tokenRequests = tokenRequests
        this._template.tokenRequests = [...this._template.tokenRequests, ...tokenRequests]
        return this
    }

    volumeLifecycleModes(volumeLifecycleModes: Array<string>): CSIDriverSpecHelper {
        if (!Array.isArray(volumeLifecycleModes)) { volumeLifecycleModes = [volumeLifecycleModes] }
        if (!this._template.volumeLifecycleModes) this._template.volumeLifecycleModes = volumeLifecycleModes
        this._template.volumeLifecycleModes = [...this._template.volumeLifecycleModes, ...volumeLifecycleModes]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CSIDriverSpecHelper.kind
        this._template.apiVersion = CSIDriverSpecHelper.apiVersion
    }
}

/** DEPRECATED - This group version of CSINode is deprecated by storage/v1/CSINode. See the release notes for more information. CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object. */
export class CSINodeHelper extends ResourceTemplate {
    static kind = 'CSINode';
    static apiVersion = 'storage/v1beta1';

    metadata(metadata: ObjectMeta): CSINodeHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: CSINodeSpec): CSINodeHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CSINodeHelper.kind
        this._template.apiVersion = CSINodeHelper.apiVersion
    }
}

/** CSINodeDriver holds information about the specification of one CSI driver installed on a node */
export class CSINodeDriverHelper extends ResourceTemplate {
    static kind = 'CSINodeDriver';
    static apiVersion = 'storage/v1beta1';

    allocatable(allocatable: VolumeNodeResources): CSINodeDriverHelper {
        if (!this._template.allocatable) this._template.allocatable = []
        this._template.allocatable = {
            ...this._template.allocatable,
            ...allocatable
        }
        return this
    }

    nodeID(nodeID: string): CSINodeDriverHelper {
        this._template.nodeID = nodeID
        return this
    }

    topologyKeys(topologyKeys: Array<string>): CSINodeDriverHelper {
        if (!Array.isArray(topologyKeys)) { topologyKeys = [topologyKeys] }
        if (!this._template.topologyKeys) this._template.topologyKeys = topologyKeys
        this._template.topologyKeys = [...this._template.topologyKeys, ...topologyKeys]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CSINodeDriverHelper.kind
        this._template.apiVersion = CSINodeDriverHelper.apiVersion
    }
}

/** CSINodeList is a collection of CSINode objects. */
export class CSINodeListHelper extends ResourceTemplate {
    static kind = 'CSINodeList';
    static apiVersion = 'storage/v1beta1';

    items(items: Array<CSINode>): CSINodeListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): CSINodeListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CSINodeListHelper.kind
        this._template.apiVersion = CSINodeListHelper.apiVersion
    }
}

/** CSINodeSpec holds information about the specification of all CSI drivers installed on a node */
export class CSINodeSpecHelper extends ResourceTemplate {
    static kind = 'CSINodeSpec';
    static apiVersion = 'storage/v1beta1';

    drivers(drivers: Array<CSINodeDriver>): CSINodeSpecHelper {
        if (!Array.isArray(drivers)) { drivers = [drivers] }
        if (!this._template.drivers) this._template.drivers = drivers
        this._template.drivers = [...this._template.drivers, ...drivers]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CSINodeSpecHelper.kind
        this._template.apiVersion = CSINodeSpecHelper.apiVersion
    }
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
export class CSIStorageCapacityHelper extends ResourceTemplate {
    static kind = 'CSIStorageCapacity';
    static apiVersion = 'storage/v1beta1';

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
    static apiVersion = 'storage/v1beta1';

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
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 *
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export class StorageClassHelper extends ResourceTemplate {
    static kind = 'StorageClass';
    static apiVersion = 'storage/v1beta1';

    allowVolumeExpansion(allowVolumeExpansion: boolean): StorageClassHelper {
        this._template.allowVolumeExpansion = allowVolumeExpansion
        return this
    }

    allowedTopologies(allowedTopologies: Array<TopologySelectorTerm>): StorageClassHelper {
        if (!Array.isArray(allowedTopologies)) { allowedTopologies = [allowedTopologies] }
        if (!this._template.allowedTopologies) this._template.allowedTopologies = allowedTopologies
        this._template.allowedTopologies = [...this._template.allowedTopologies, ...allowedTopologies]
        return this
    }

    metadata(metadata: ObjectMeta): StorageClassHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    mountOptions(mountOptions: Array<string>): StorageClassHelper {
        if (!Array.isArray(mountOptions)) { mountOptions = [mountOptions] }
        if (!this._template.mountOptions) this._template.mountOptions = mountOptions
        this._template.mountOptions = [...this._template.mountOptions, ...mountOptions]
        return this
    }

    parameters(parameters: {[name: string]: string}): StorageClassHelper {
        if (!this._template.parameters) this._template.parameters = []
        this._template.parameters = {
            ...this._template.parameters,
            ...parameters
        }
        return this
    }

    provisioner(provisioner: string): StorageClassHelper {
        this._template.provisioner = provisioner
        return this
    }

    reclaimPolicy(reclaimPolicy: string): StorageClassHelper {
        this._template.reclaimPolicy = reclaimPolicy
        return this
    }

    volumeBindingMode(volumeBindingMode: string): StorageClassHelper {
        this._template.volumeBindingMode = volumeBindingMode
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StorageClassHelper.kind
        this._template.apiVersion = StorageClassHelper.apiVersion
    }
}

/** StorageClassList is a collection of storage classes. */
export class StorageClassListHelper extends ResourceTemplate {
    static kind = 'StorageClassList';
    static apiVersion = 'storage/v1beta1';

    items(items: Array<StorageClass>): StorageClassListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): StorageClassListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StorageClassListHelper.kind
        this._template.apiVersion = StorageClassListHelper.apiVersion
    }
}

/** TokenRequest contains parameters of a service account token. */
export class TokenRequestHelper extends ResourceTemplate {
    static kind = 'TokenRequest';
    static apiVersion = 'storage/v1beta1';

    audience(audience: string): TokenRequestHelper {
        this._template.audience = audience
        return this
    }

    expirationSeconds(expirationSeconds: number): TokenRequestHelper {
        this._template.expirationSeconds = expirationSeconds
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = TokenRequestHelper.kind
        this._template.apiVersion = TokenRequestHelper.apiVersion
    }
}

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 *
 * VolumeAttachment objects are non-namespaced.
 */
export class VolumeAttachmentHelper extends ResourceTemplate {
    static kind = 'VolumeAttachment';
    static apiVersion = 'storage/v1beta1';

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
    static apiVersion = 'storage/v1beta1';

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
    static apiVersion = 'storage/v1beta1';

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
    static apiVersion = 'storage/v1beta1';

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
    static apiVersion = 'storage/v1beta1';

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
    static apiVersion = 'storage/v1beta1';

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

/** VolumeNodeResources is a set of resource limits for scheduling of volumes. */
export class VolumeNodeResourcesHelper extends ResourceTemplate {
    static kind = 'VolumeNodeResources';
    static apiVersion = 'storage/v1beta1';

    count(count: number): VolumeNodeResourcesHelper {
        this._template.count = count
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = VolumeNodeResourcesHelper.kind
        this._template.apiVersion = VolumeNodeResourcesHelper.apiVersion
    }
}
