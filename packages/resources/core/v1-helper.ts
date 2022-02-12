import { ResourceTemplate } from "../resourceTemplate";
import { AWSElasticBlockStoreVolumeSource, Affinity, AttachedVolume, AzureDiskVolumeSource, AzureFilePersistentVolumeSource, AzureFileVolumeSource, CSIPersistentVolumeSource, CSIVolumeSource, Capabilities, CephFSPersistentVolumeSource, CephFSVolumeSource, CinderPersistentVolumeSource, CinderVolumeSource, ClientIPConfig, ComponentCondition, ComponentStatus, ConfigMap, ConfigMapEnvSource, ConfigMapKeySelector, ConfigMapNodeConfigSource, ConfigMapProjection, ConfigMapVolumeSource, Container, ContainerImage, ContainerPort, ContainerState, ContainerStateRunning, ContainerStateTerminated, ContainerStateWaiting, ContainerStatus, DaemonEndpoint, DownwardAPIProjection, DownwardAPIVolumeFile, DownwardAPIVolumeSource, EmptyDirVolumeSource, EndpointAddress, EndpointPort, EndpointSubset, Endpoints, EnvFromSource, EnvVar, EnvVarSource, EphemeralContainer, EphemeralVolumeSource, Event, EventSeries, EventSource, ExecAction, FCVolumeSource, FlexPersistentVolumeSource, FlexVolumeSource, FlockerVolumeSource, GCEPersistentDiskVolumeSource, GitRepoVolumeSource, GlusterfsPersistentVolumeSource, GlusterfsVolumeSource, HTTPGetAction, HTTPHeader, Handler, HostAlias, HostPathVolumeSource, ISCSIPersistentVolumeSource, ISCSIVolumeSource, KeyToPath, Lifecycle, LimitRange, LimitRangeItem, LimitRangeSpec, LoadBalancerIngress, LoadBalancerStatus, LocalObjectReference, LocalVolumeSource, NFSVolumeSource, Namespace, NamespaceCondition, NamespaceSpec, NamespaceStatus, Node, NodeAddress, NodeAffinity, NodeCondition, NodeConfigSource, NodeConfigStatus, NodeDaemonEndpoints, NodeSelector, NodeSelectorRequirement, NodeSelectorTerm, NodeSpec, NodeStatus, NodeSystemInfo, ObjectFieldSelector, ObjectReference, PersistentVolume, PersistentVolumeClaim, PersistentVolumeClaimCondition, PersistentVolumeClaimSpec, PersistentVolumeClaimStatus, PersistentVolumeClaimTemplate, PersistentVolumeClaimVolumeSource, PersistentVolumeSpec, PersistentVolumeStatus, PhotonPersistentDiskVolumeSource, Pod, PodAffinity, PodAffinityTerm, PodAntiAffinity, PodCondition, PodDNSConfig, PodDNSConfigOption, PodIP, PodReadinessGate, PodSecurityContext, PodSpec, PodStatus, PodTemplate, PodTemplateSpec, PortStatus, PortworxVolumeSource, PreferredSchedulingTerm, Probe, ProjectedVolumeSource, QuobyteVolumeSource, RBDPersistentVolumeSource, RBDVolumeSource, ReplicationController, ReplicationControllerCondition, ReplicationControllerSpec, ReplicationControllerStatus, ResourceFieldSelector, ResourceQuota, ResourceQuotaSpec, ResourceQuotaStatus, ResourceRequirements, SELinuxOptions, ScaleIOPersistentVolumeSource, ScaleIOVolumeSource, ScopeSelector, ScopedResourceSelectorRequirement, SeccompProfile, Secret, SecretEnvSource, SecretKeySelector, SecretProjection, SecretReference, SecretVolumeSource, SecurityContext, Service, ServiceAccount, ServiceAccountTokenProjection, ServicePort, ServiceSpec, ServiceStatus, SessionAffinityConfig, StorageOSPersistentVolumeSource, StorageOSVolumeSource, Sysctl, TCPSocketAction, Taint, Toleration, TopologySelectorLabelRequirement, TopologySpreadConstraint, TypedLocalObjectReference, Volume, VolumeDevice, VolumeMount, VolumeNodeAffinity, VolumeProjection, VsphereVirtualDiskVolumeSource, WeightedPodAffinityTerm, WindowsSecurityContextOptions } from "./v1";
import { Condition, LabelSelector, ListMeta, MicroTime, ObjectMeta, Time } from "../meta/v1";
import { Quantity } from "../api/resource";

/**
 * Represents a Persistent Disk resource in AWS.
 *
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 */
export class AWSElasticBlockStoreVolumeSourceHelper extends ResourceTemplate {
    static kind = 'AWSElasticBlockStoreVolumeSource';
    static apiVersion = 'core/v1';

    fsType(fsType: string): AWSElasticBlockStoreVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    partition(partition: number): AWSElasticBlockStoreVolumeSourceHelper {
        this._template.partition = partition
        return this
    }

    readOnly(readOnly: boolean): AWSElasticBlockStoreVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    volumeID(volumeID: string): AWSElasticBlockStoreVolumeSourceHelper {
        this._template.volumeID = volumeID
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = AWSElasticBlockStoreVolumeSourceHelper.kind
        this._template.apiVersion = AWSElasticBlockStoreVolumeSourceHelper.apiVersion
    }
}

/** Affinity is a group of affinity scheduling rules. */
export class AffinityHelper extends ResourceTemplate {
    static kind = 'Affinity';
    static apiVersion = 'core/v1';

    nodeAffinity(nodeAffinity: NodeAffinity): AffinityHelper {
        if (!this._template.nodeAffinity) this._template.nodeAffinity = []
        this._template.nodeAffinity = {
            ...this._template.nodeAffinity,
            ...nodeAffinity
        }
        return this
    }

    podAffinity(podAffinity: PodAffinity): AffinityHelper {
        if (!this._template.podAffinity) this._template.podAffinity = []
        this._template.podAffinity = {
            ...this._template.podAffinity,
            ...podAffinity
        }
        return this
    }

    podAntiAffinity(podAntiAffinity: PodAntiAffinity): AffinityHelper {
        if (!this._template.podAntiAffinity) this._template.podAntiAffinity = []
        this._template.podAntiAffinity = {
            ...this._template.podAntiAffinity,
            ...podAntiAffinity
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = AffinityHelper.kind
        this._template.apiVersion = AffinityHelper.apiVersion
    }
}

/** AttachedVolume describes a volume attached to a node */
export class AttachedVolumeHelper extends ResourceTemplate {
    static kind = 'AttachedVolume';
    static apiVersion = 'core/v1';

    devicePath(devicePath: string): AttachedVolumeHelper {
        this._template.devicePath = devicePath
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = AttachedVolumeHelper.kind
        this._template.apiVersion = AttachedVolumeHelper.apiVersion
    }
}

/** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
export class AzureDiskVolumeSourceHelper extends ResourceTemplate {
    static kind = 'AzureDiskVolumeSource';
    static apiVersion = 'core/v1';

    cachingMode(cachingMode: string): AzureDiskVolumeSourceHelper {
        this._template.cachingMode = cachingMode
        return this
    }

    diskName(diskName: string): AzureDiskVolumeSourceHelper {
        this._template.diskName = diskName
        return this
    }

    diskURI(diskURI: string): AzureDiskVolumeSourceHelper {
        this._template.diskURI = diskURI
        return this
    }

    fsType(fsType: string): AzureDiskVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    readOnly(readOnly: boolean): AzureDiskVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = AzureDiskVolumeSourceHelper.kind
        this._template.apiVersion = AzureDiskVolumeSourceHelper.apiVersion
    }
}

/** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export class AzureFilePersistentVolumeSourceHelper extends ResourceTemplate {
    static kind = 'AzureFilePersistentVolumeSource';
    static apiVersion = 'core/v1';

    readOnly(readOnly: boolean): AzureFilePersistentVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    secretName(secretName: string): AzureFilePersistentVolumeSourceHelper {
        this._template.secretName = secretName
        return this
    }

    secretNamespace(secretNamespace: string): AzureFilePersistentVolumeSourceHelper {
        this._template.secretNamespace = secretNamespace
        return this
    }

    shareName(shareName: string): AzureFilePersistentVolumeSourceHelper {
        this._template.shareName = shareName
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = AzureFilePersistentVolumeSourceHelper.kind
        this._template.apiVersion = AzureFilePersistentVolumeSourceHelper.apiVersion
    }
}

/** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export class AzureFileVolumeSourceHelper extends ResourceTemplate {
    static kind = 'AzureFileVolumeSource';
    static apiVersion = 'core/v1';

    readOnly(readOnly: boolean): AzureFileVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    secretName(secretName: string): AzureFileVolumeSourceHelper {
        this._template.secretName = secretName
        return this
    }

    shareName(shareName: string): AzureFileVolumeSourceHelper {
        this._template.shareName = shareName
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = AzureFileVolumeSourceHelper.kind
        this._template.apiVersion = AzureFileVolumeSourceHelper.apiVersion
    }
}

/** Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead. */
export class BindingHelper extends ResourceTemplate {
    static kind = 'Binding';
    static apiVersion = 'core/v1';

    metadata(metadata: ObjectMeta): BindingHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    target(target: ObjectReference): BindingHelper {
        if (!this._template.target) this._template.target = []
        this._template.target = {
            ...this._template.target,
            ...target
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = BindingHelper.kind
        this._template.apiVersion = BindingHelper.apiVersion
    }
}

/** Represents storage that is managed by an external CSI volume driver (Beta feature) */
export class CSIPersistentVolumeSourceHelper extends ResourceTemplate {
    static kind = 'CSIPersistentVolumeSource';
    static apiVersion = 'core/v1';

    controllerExpandSecretRef(controllerExpandSecretRef: SecretReference): CSIPersistentVolumeSourceHelper {
        if (!this._template.controllerExpandSecretRef) this._template.controllerExpandSecretRef = []
        this._template.controllerExpandSecretRef = {
            ...this._template.controllerExpandSecretRef,
            ...controllerExpandSecretRef
        }
        return this
    }

    controllerPublishSecretRef(controllerPublishSecretRef: SecretReference): CSIPersistentVolumeSourceHelper {
        if (!this._template.controllerPublishSecretRef) this._template.controllerPublishSecretRef = []
        this._template.controllerPublishSecretRef = {
            ...this._template.controllerPublishSecretRef,
            ...controllerPublishSecretRef
        }
        return this
    }

    driver(driver: string): CSIPersistentVolumeSourceHelper {
        this._template.driver = driver
        return this
    }

    fsType(fsType: string): CSIPersistentVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    nodePublishSecretRef(nodePublishSecretRef: SecretReference): CSIPersistentVolumeSourceHelper {
        if (!this._template.nodePublishSecretRef) this._template.nodePublishSecretRef = []
        this._template.nodePublishSecretRef = {
            ...this._template.nodePublishSecretRef,
            ...nodePublishSecretRef
        }
        return this
    }

    nodeStageSecretRef(nodeStageSecretRef: SecretReference): CSIPersistentVolumeSourceHelper {
        if (!this._template.nodeStageSecretRef) this._template.nodeStageSecretRef = []
        this._template.nodeStageSecretRef = {
            ...this._template.nodeStageSecretRef,
            ...nodeStageSecretRef
        }
        return this
    }

    readOnly(readOnly: boolean): CSIPersistentVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    volumeAttributes(volumeAttributes: {[name: string]: string}): CSIPersistentVolumeSourceHelper {
        if (!this._template.volumeAttributes) this._template.volumeAttributes = []
        this._template.volumeAttributes = {
            ...this._template.volumeAttributes,
            ...volumeAttributes
        }
        return this
    }

    volumeHandle(volumeHandle: string): CSIPersistentVolumeSourceHelper {
        this._template.volumeHandle = volumeHandle
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CSIPersistentVolumeSourceHelper.kind
        this._template.apiVersion = CSIPersistentVolumeSourceHelper.apiVersion
    }
}

/** Represents a source location of a volume to mount, managed by an external CSI driver */
export class CSIVolumeSourceHelper extends ResourceTemplate {
    static kind = 'CSIVolumeSource';
    static apiVersion = 'core/v1';

    driver(driver: string): CSIVolumeSourceHelper {
        this._template.driver = driver
        return this
    }

    fsType(fsType: string): CSIVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    nodePublishSecretRef(nodePublishSecretRef: LocalObjectReference): CSIVolumeSourceHelper {
        if (!this._template.nodePublishSecretRef) this._template.nodePublishSecretRef = []
        this._template.nodePublishSecretRef = {
            ...this._template.nodePublishSecretRef,
            ...nodePublishSecretRef
        }
        return this
    }

    readOnly(readOnly: boolean): CSIVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    volumeAttributes(volumeAttributes: {[name: string]: string}): CSIVolumeSourceHelper {
        if (!this._template.volumeAttributes) this._template.volumeAttributes = []
        this._template.volumeAttributes = {
            ...this._template.volumeAttributes,
            ...volumeAttributes
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CSIVolumeSourceHelper.kind
        this._template.apiVersion = CSIVolumeSourceHelper.apiVersion
    }
}

/** Adds and removes POSIX capabilities from running containers. */
export class CapabilitiesHelper extends ResourceTemplate {
    static kind = 'Capabilities';
    static apiVersion = 'core/v1';

    add(add: Array<string>): CapabilitiesHelper {
        if (!Array.isArray(add)) { add = [add] }
        if (!this._template.add) this._template.add = add
        this._template.add = [...this._template.add, ...add]
        return this
    }

    drop(drop: Array<string>): CapabilitiesHelper {
        if (!Array.isArray(drop)) { drop = [drop] }
        if (!this._template.drop) this._template.drop = drop
        this._template.drop = [...this._template.drop, ...drop]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CapabilitiesHelper.kind
        this._template.apiVersion = CapabilitiesHelper.apiVersion
    }
}

/** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export class CephFSPersistentVolumeSourceHelper extends ResourceTemplate {
    static kind = 'CephFSPersistentVolumeSource';
    static apiVersion = 'core/v1';

    monitors(monitors: Array<string>): CephFSPersistentVolumeSourceHelper {
        if (!Array.isArray(monitors)) { monitors = [monitors] }
        if (!this._template.monitors) this._template.monitors = monitors
        this._template.monitors = [...this._template.monitors, ...monitors]
        return this
    }

    path(path: string): CephFSPersistentVolumeSourceHelper {
        this._template.path = path
        return this
    }

    readOnly(readOnly: boolean): CephFSPersistentVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    secretFile(secretFile: string): CephFSPersistentVolumeSourceHelper {
        this._template.secretFile = secretFile
        return this
    }

    secretRef(secretRef: SecretReference): CephFSPersistentVolumeSourceHelper {
        if (!this._template.secretRef) this._template.secretRef = []
        this._template.secretRef = {
            ...this._template.secretRef,
            ...secretRef
        }
        return this
    }

    user(user: string): CephFSPersistentVolumeSourceHelper {
        this._template.user = user
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CephFSPersistentVolumeSourceHelper.kind
        this._template.apiVersion = CephFSPersistentVolumeSourceHelper.apiVersion
    }
}

/** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export class CephFSVolumeSourceHelper extends ResourceTemplate {
    static kind = 'CephFSVolumeSource';
    static apiVersion = 'core/v1';

    monitors(monitors: Array<string>): CephFSVolumeSourceHelper {
        if (!Array.isArray(monitors)) { monitors = [monitors] }
        if (!this._template.monitors) this._template.monitors = monitors
        this._template.monitors = [...this._template.monitors, ...monitors]
        return this
    }

    path(path: string): CephFSVolumeSourceHelper {
        this._template.path = path
        return this
    }

    readOnly(readOnly: boolean): CephFSVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    secretFile(secretFile: string): CephFSVolumeSourceHelper {
        this._template.secretFile = secretFile
        return this
    }

    secretRef(secretRef: LocalObjectReference): CephFSVolumeSourceHelper {
        if (!this._template.secretRef) this._template.secretRef = []
        this._template.secretRef = {
            ...this._template.secretRef,
            ...secretRef
        }
        return this
    }

    user(user: string): CephFSVolumeSourceHelper {
        this._template.user = user
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CephFSVolumeSourceHelper.kind
        this._template.apiVersion = CephFSVolumeSourceHelper.apiVersion
    }
}

/** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export class CinderPersistentVolumeSourceHelper extends ResourceTemplate {
    static kind = 'CinderPersistentVolumeSource';
    static apiVersion = 'core/v1';

    fsType(fsType: string): CinderPersistentVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    readOnly(readOnly: boolean): CinderPersistentVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    secretRef(secretRef: SecretReference): CinderPersistentVolumeSourceHelper {
        if (!this._template.secretRef) this._template.secretRef = []
        this._template.secretRef = {
            ...this._template.secretRef,
            ...secretRef
        }
        return this
    }

    volumeID(volumeID: string): CinderPersistentVolumeSourceHelper {
        this._template.volumeID = volumeID
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CinderPersistentVolumeSourceHelper.kind
        this._template.apiVersion = CinderPersistentVolumeSourceHelper.apiVersion
    }
}

/** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export class CinderVolumeSourceHelper extends ResourceTemplate {
    static kind = 'CinderVolumeSource';
    static apiVersion = 'core/v1';

    fsType(fsType: string): CinderVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    readOnly(readOnly: boolean): CinderVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    secretRef(secretRef: LocalObjectReference): CinderVolumeSourceHelper {
        if (!this._template.secretRef) this._template.secretRef = []
        this._template.secretRef = {
            ...this._template.secretRef,
            ...secretRef
        }
        return this
    }

    volumeID(volumeID: string): CinderVolumeSourceHelper {
        this._template.volumeID = volumeID
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CinderVolumeSourceHelper.kind
        this._template.apiVersion = CinderVolumeSourceHelper.apiVersion
    }
}

/** ClientIPConfig represents the configurations of Client IP based session affinity. */
export class ClientIPConfigHelper extends ResourceTemplate {
    static kind = 'ClientIPConfig';
    static apiVersion = 'core/v1';

    timeoutSeconds(timeoutSeconds: number): ClientIPConfigHelper {
        this._template.timeoutSeconds = timeoutSeconds
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ClientIPConfigHelper.kind
        this._template.apiVersion = ClientIPConfigHelper.apiVersion
    }
}

/** Information about the condition of a component. */
export class ComponentConditionHelper extends ResourceTemplate {
    static kind = 'ComponentCondition';
    static apiVersion = 'core/v1';

    error(error: string): ComponentConditionHelper {
        this._template.error = error
        return this
    }

    message(message: string): ComponentConditionHelper {
        this._template.message = message
        return this
    }

    status(status: string): ComponentConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): ComponentConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ComponentConditionHelper.kind
        this._template.apiVersion = ComponentConditionHelper.apiVersion
    }
}

/** ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+ */
export class ComponentStatusHelper extends ResourceTemplate {
    static kind = 'ComponentStatus';
    static apiVersion = 'core/v1';

    conditions(conditions: Array<ComponentCondition>): ComponentStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    metadata(metadata: ObjectMeta): ComponentStatusHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ComponentStatusHelper.kind
        this._template.apiVersion = ComponentStatusHelper.apiVersion
    }
}

/** Status of all the conditions for the component as a list of ComponentStatus objects. Deprecated: This API is deprecated in v1.19+ */
export class ComponentStatusListHelper extends ResourceTemplate {
    static kind = 'ComponentStatusList';
    static apiVersion = 'core/v1';

    items(items: Array<ComponentStatus>): ComponentStatusListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): ComponentStatusListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ComponentStatusListHelper.kind
        this._template.apiVersion = ComponentStatusListHelper.apiVersion
    }
}

/** ConfigMap holds configuration data for pods to consume. */
export class ConfigMapHelper extends ResourceTemplate {
    static kind = 'ConfigMap';
    static apiVersion = 'core/v1';

    binaryData(binaryData: {[name: string]: string}): ConfigMapHelper {
        if (!this._template.binaryData) this._template.binaryData = []
        this._template.binaryData = {
            ...this._template.binaryData,
            ...binaryData
        }
        return this
    }

    data(data: {[name: string]: string}): ConfigMapHelper {
        if (!this._template.data) this._template.data = []
        this._template.data = {
            ...this._template.data,
            ...data
        }
        return this
    }

    immutable(immutable: boolean): ConfigMapHelper {
        this._template.immutable = immutable
        return this
    }

    metadata(metadata: ObjectMeta): ConfigMapHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ConfigMapHelper.kind
        this._template.apiVersion = ConfigMapHelper.apiVersion
    }
}

/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 *
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export class ConfigMapEnvSourceHelper extends ResourceTemplate {
    static kind = 'ConfigMapEnvSource';
    static apiVersion = 'core/v1';

    optional(optional: boolean): ConfigMapEnvSourceHelper {
        this._template.optional = optional
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ConfigMapEnvSourceHelper.kind
        this._template.apiVersion = ConfigMapEnvSourceHelper.apiVersion
    }
}

/** Selects a key from a ConfigMap. */
export class ConfigMapKeySelectorHelper extends ResourceTemplate {
    static kind = 'ConfigMapKeySelector';
    static apiVersion = 'core/v1';

    key(key: string): ConfigMapKeySelectorHelper {
        this._template.key = key
        return this
    }

    optional(optional: boolean): ConfigMapKeySelectorHelper {
        this._template.optional = optional
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ConfigMapKeySelectorHelper.kind
        this._template.apiVersion = ConfigMapKeySelectorHelper.apiVersion
    }
}

/** ConfigMapList is a resource containing a list of ConfigMap objects. */
export class ConfigMapListHelper extends ResourceTemplate {
    static kind = 'ConfigMapList';
    static apiVersion = 'core/v1';

    items(items: Array<ConfigMap>): ConfigMapListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): ConfigMapListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ConfigMapListHelper.kind
        this._template.apiVersion = ConfigMapListHelper.apiVersion
    }
}

/** ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node. */
export class ConfigMapNodeConfigSourceHelper extends ResourceTemplate {
    static kind = 'ConfigMapNodeConfigSource';
    static apiVersion = 'core/v1';

    kubeletConfigKey(kubeletConfigKey: string): ConfigMapNodeConfigSourceHelper {
        this._template.kubeletConfigKey = kubeletConfigKey
        return this
    }

    resourceVersion(resourceVersion: string): ConfigMapNodeConfigSourceHelper {
        this._template.resourceVersion = resourceVersion
        return this
    }

    uid(uid: string): ConfigMapNodeConfigSourceHelper {
        this._template.uid = uid
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ConfigMapNodeConfigSourceHelper.kind
        this._template.apiVersion = ConfigMapNodeConfigSourceHelper.apiVersion
    }
}

/**
 * Adapts a ConfigMap into a projected volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
 */
export class ConfigMapProjectionHelper extends ResourceTemplate {
    static kind = 'ConfigMapProjection';
    static apiVersion = 'core/v1';

    items(items: Array<KeyToPath>): ConfigMapProjectionHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    optional(optional: boolean): ConfigMapProjectionHelper {
        this._template.optional = optional
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ConfigMapProjectionHelper.kind
        this._template.apiVersion = ConfigMapProjectionHelper.apiVersion
    }
}

/**
 * Adapts a ConfigMap into a volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
 */
export class ConfigMapVolumeSourceHelper extends ResourceTemplate {
    static kind = 'ConfigMapVolumeSource';
    static apiVersion = 'core/v1';

    defaultMode(defaultMode: number): ConfigMapVolumeSourceHelper {
        this._template.defaultMode = defaultMode
        return this
    }

    items(items: Array<KeyToPath>): ConfigMapVolumeSourceHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    optional(optional: boolean): ConfigMapVolumeSourceHelper {
        this._template.optional = optional
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ConfigMapVolumeSourceHelper.kind
        this._template.apiVersion = ConfigMapVolumeSourceHelper.apiVersion
    }
}

/** A single application container that you want to run within a pod. */
export class ContainerHelper extends ResourceTemplate {
    static kind = 'Container';
    static apiVersion = 'core/v1';

    args(args: Array<string>): ContainerHelper {
        if (!Array.isArray(args)) { args = [args] }
        if (!this._template.args) this._template.args = args
        this._template.args = [...this._template.args, ...args]
        return this
    }

    command(command: Array<string>): ContainerHelper {
        if (!Array.isArray(command)) { command = [command] }
        if (!this._template.command) this._template.command = command
        this._template.command = [...this._template.command, ...command]
        return this
    }

    env(env: Array<EnvVar>): ContainerHelper {
        if (!Array.isArray(env)) { env = [env] }
        if (!this._template.env) this._template.env = env
        this._template.env = [...this._template.env, ...env]
        return this
    }

    envFrom(envFrom: Array<EnvFromSource>): ContainerHelper {
        if (!Array.isArray(envFrom)) { envFrom = [envFrom] }
        if (!this._template.envFrom) this._template.envFrom = envFrom
        this._template.envFrom = [...this._template.envFrom, ...envFrom]
        return this
    }

    image(image: string): ContainerHelper {
        this._template.image = image
        return this
    }

    imagePullPolicy(imagePullPolicy: string): ContainerHelper {
        this._template.imagePullPolicy = imagePullPolicy
        return this
    }

    lifecycle(lifecycle: Lifecycle): ContainerHelper {
        if (!this._template.lifecycle) this._template.lifecycle = []
        this._template.lifecycle = {
            ...this._template.lifecycle,
            ...lifecycle
        }
        return this
    }

    livenessProbe(livenessProbe: Probe): ContainerHelper {
        if (!this._template.livenessProbe) this._template.livenessProbe = []
        this._template.livenessProbe = {
            ...this._template.livenessProbe,
            ...livenessProbe
        }
        return this
    }

    ports(ports: Array<ContainerPort>): ContainerHelper {
        if (!Array.isArray(ports)) { ports = [ports] }
        if (!this._template.ports) this._template.ports = ports
        this._template.ports = [...this._template.ports, ...ports]
        return this
    }

    readinessProbe(readinessProbe: Probe): ContainerHelper {
        if (!this._template.readinessProbe) this._template.readinessProbe = []
        this._template.readinessProbe = {
            ...this._template.readinessProbe,
            ...readinessProbe
        }
        return this
    }

    resources(resources: ResourceRequirements): ContainerHelper {
        if (!this._template.resources) this._template.resources = []
        this._template.resources = {
            ...this._template.resources,
            ...resources
        }
        return this
    }

    securityContext(securityContext: SecurityContext): ContainerHelper {
        if (!this._template.securityContext) this._template.securityContext = []
        this._template.securityContext = {
            ...this._template.securityContext,
            ...securityContext
        }
        return this
    }

    startupProbe(startupProbe: Probe): ContainerHelper {
        if (!this._template.startupProbe) this._template.startupProbe = []
        this._template.startupProbe = {
            ...this._template.startupProbe,
            ...startupProbe
        }
        return this
    }

    stdin(stdin: boolean): ContainerHelper {
        this._template.stdin = stdin
        return this
    }

    stdinOnce(stdinOnce: boolean): ContainerHelper {
        this._template.stdinOnce = stdinOnce
        return this
    }

    terminationMessagePath(terminationMessagePath: string): ContainerHelper {
        this._template.terminationMessagePath = terminationMessagePath
        return this
    }

    terminationMessagePolicy(terminationMessagePolicy: string): ContainerHelper {
        this._template.terminationMessagePolicy = terminationMessagePolicy
        return this
    }

    tty(tty: boolean): ContainerHelper {
        this._template.tty = tty
        return this
    }

    volumeDevices(volumeDevices: Array<VolumeDevice>): ContainerHelper {
        if (!Array.isArray(volumeDevices)) { volumeDevices = [volumeDevices] }
        if (!this._template.volumeDevices) this._template.volumeDevices = volumeDevices
        this._template.volumeDevices = [...this._template.volumeDevices, ...volumeDevices]
        return this
    }

    volumeMounts(volumeMounts: Array<VolumeMount>): ContainerHelper {
        if (!Array.isArray(volumeMounts)) { volumeMounts = [volumeMounts] }
        if (!this._template.volumeMounts) this._template.volumeMounts = volumeMounts
        this._template.volumeMounts = [...this._template.volumeMounts, ...volumeMounts]
        return this
    }

    workingDir(workingDir: string): ContainerHelper {
        this._template.workingDir = workingDir
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ContainerHelper.kind
        this._template.apiVersion = ContainerHelper.apiVersion
    }
}

/** Describe a container image */
export class ContainerImageHelper extends ResourceTemplate {
    static kind = 'ContainerImage';
    static apiVersion = 'core/v1';

    names(names: Array<string>): ContainerImageHelper {
        if (!Array.isArray(names)) { names = [names] }
        if (!this._template.names) this._template.names = names
        this._template.names = [...this._template.names, ...names]
        return this
    }

    sizeBytes(sizeBytes: number): ContainerImageHelper {
        this._template.sizeBytes = sizeBytes
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ContainerImageHelper.kind
        this._template.apiVersion = ContainerImageHelper.apiVersion
    }
}

/** ContainerPort represents a network port in a single container. */
export class ContainerPortHelper extends ResourceTemplate {
    static kind = 'ContainerPort';
    static apiVersion = 'core/v1';

    containerPort(containerPort: number): ContainerPortHelper {
        this._template.containerPort = containerPort
        return this
    }

    hostIP(hostIP: string): ContainerPortHelper {
        this._template.hostIP = hostIP
        return this
    }

    hostPort(hostPort: number): ContainerPortHelper {
        this._template.hostPort = hostPort
        return this
    }

    protocol(protocol: string): ContainerPortHelper {
        this._template.protocol = protocol
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ContainerPortHelper.kind
        this._template.apiVersion = ContainerPortHelper.apiVersion
    }
}

/** ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting. */
export class ContainerStateHelper extends ResourceTemplate {
    static kind = 'ContainerState';
    static apiVersion = 'core/v1';

    running(running: ContainerStateRunning): ContainerStateHelper {
        if (!this._template.running) this._template.running = []
        this._template.running = {
            ...this._template.running,
            ...running
        }
        return this
    }

    terminated(terminated: ContainerStateTerminated): ContainerStateHelper {
        if (!this._template.terminated) this._template.terminated = []
        this._template.terminated = {
            ...this._template.terminated,
            ...terminated
        }
        return this
    }

    waiting(waiting: ContainerStateWaiting): ContainerStateHelper {
        if (!this._template.waiting) this._template.waiting = []
        this._template.waiting = {
            ...this._template.waiting,
            ...waiting
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ContainerStateHelper.kind
        this._template.apiVersion = ContainerStateHelper.apiVersion
    }
}

/** ContainerStateRunning is a running state of a container. */
export class ContainerStateRunningHelper extends ResourceTemplate {
    static kind = 'ContainerStateRunning';
    static apiVersion = 'core/v1';

    startedAt(startedAt: Time): ContainerStateRunningHelper {
        this._template.startedAt = startedAt
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ContainerStateRunningHelper.kind
        this._template.apiVersion = ContainerStateRunningHelper.apiVersion
    }
}

/** ContainerStateTerminated is a terminated state of a container. */
export class ContainerStateTerminatedHelper extends ResourceTemplate {
    static kind = 'ContainerStateTerminated';
    static apiVersion = 'core/v1';

    containerID(containerID: string): ContainerStateTerminatedHelper {
        this._template.containerID = containerID
        return this
    }

    exitCode(exitCode: number): ContainerStateTerminatedHelper {
        this._template.exitCode = exitCode
        return this
    }

    finishedAt(finishedAt: Time): ContainerStateTerminatedHelper {
        this._template.finishedAt = finishedAt
        return this
    }

    message(message: string): ContainerStateTerminatedHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): ContainerStateTerminatedHelper {
        this._template.reason = reason
        return this
    }

    signal(signal: number): ContainerStateTerminatedHelper {
        this._template.signal = signal
        return this
    }

    startedAt(startedAt: Time): ContainerStateTerminatedHelper {
        this._template.startedAt = startedAt
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ContainerStateTerminatedHelper.kind
        this._template.apiVersion = ContainerStateTerminatedHelper.apiVersion
    }
}

/** ContainerStateWaiting is a waiting state of a container. */
export class ContainerStateWaitingHelper extends ResourceTemplate {
    static kind = 'ContainerStateWaiting';
    static apiVersion = 'core/v1';

    message(message: string): ContainerStateWaitingHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): ContainerStateWaitingHelper {
        this._template.reason = reason
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ContainerStateWaitingHelper.kind
        this._template.apiVersion = ContainerStateWaitingHelper.apiVersion
    }
}

/** ContainerStatus contains details for the current status of this container. */
export class ContainerStatusHelper extends ResourceTemplate {
    static kind = 'ContainerStatus';
    static apiVersion = 'core/v1';

    containerID(containerID: string): ContainerStatusHelper {
        this._template.containerID = containerID
        return this
    }

    image(image: string): ContainerStatusHelper {
        this._template.image = image
        return this
    }

    imageID(imageID: string): ContainerStatusHelper {
        this._template.imageID = imageID
        return this
    }

    lastState(lastState: ContainerState): ContainerStatusHelper {
        if (!this._template.lastState) this._template.lastState = []
        this._template.lastState = {
            ...this._template.lastState,
            ...lastState
        }
        return this
    }

    ready(ready: boolean): ContainerStatusHelper {
        this._template.ready = ready
        return this
    }

    restartCount(restartCount: number): ContainerStatusHelper {
        this._template.restartCount = restartCount
        return this
    }

    started(started: boolean): ContainerStatusHelper {
        this._template.started = started
        return this
    }

    state(state: ContainerState): ContainerStatusHelper {
        if (!this._template.state) this._template.state = []
        this._template.state = {
            ...this._template.state,
            ...state
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ContainerStatusHelper.kind
        this._template.apiVersion = ContainerStatusHelper.apiVersion
    }
}

/** DaemonEndpoint contains information about a single Daemon endpoint. */
export class DaemonEndpointHelper extends ResourceTemplate {
    static kind = 'DaemonEndpoint';
    static apiVersion = 'core/v1';

    Port(Port: number): DaemonEndpointHelper {
        this._template.Port = Port
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DaemonEndpointHelper.kind
        this._template.apiVersion = DaemonEndpointHelper.apiVersion
    }
}

/** Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
export class DownwardAPIProjectionHelper extends ResourceTemplate {
    static kind = 'DownwardAPIProjection';
    static apiVersion = 'core/v1';

    items(items: Array<DownwardAPIVolumeFile>): DownwardAPIProjectionHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DownwardAPIProjectionHelper.kind
        this._template.apiVersion = DownwardAPIProjectionHelper.apiVersion
    }
}

/** DownwardAPIVolumeFile represents information to create the file containing the pod field */
export class DownwardAPIVolumeFileHelper extends ResourceTemplate {
    static kind = 'DownwardAPIVolumeFile';
    static apiVersion = 'core/v1';

    fieldRef(fieldRef: ObjectFieldSelector): DownwardAPIVolumeFileHelper {
        if (!this._template.fieldRef) this._template.fieldRef = []
        this._template.fieldRef = {
            ...this._template.fieldRef,
            ...fieldRef
        }
        return this
    }

    mode(mode: number): DownwardAPIVolumeFileHelper {
        this._template.mode = mode
        return this
    }

    path(path: string): DownwardAPIVolumeFileHelper {
        this._template.path = path
        return this
    }

    resourceFieldRef(resourceFieldRef: ResourceFieldSelector): DownwardAPIVolumeFileHelper {
        if (!this._template.resourceFieldRef) this._template.resourceFieldRef = []
        this._template.resourceFieldRef = {
            ...this._template.resourceFieldRef,
            ...resourceFieldRef
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DownwardAPIVolumeFileHelper.kind
        this._template.apiVersion = DownwardAPIVolumeFileHelper.apiVersion
    }
}

/** DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
export class DownwardAPIVolumeSourceHelper extends ResourceTemplate {
    static kind = 'DownwardAPIVolumeSource';
    static apiVersion = 'core/v1';

    defaultMode(defaultMode: number): DownwardAPIVolumeSourceHelper {
        this._template.defaultMode = defaultMode
        return this
    }

    items(items: Array<DownwardAPIVolumeFile>): DownwardAPIVolumeSourceHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DownwardAPIVolumeSourceHelper.kind
        this._template.apiVersion = DownwardAPIVolumeSourceHelper.apiVersion
    }
}

/** Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
export class EmptyDirVolumeSourceHelper extends ResourceTemplate {
    static kind = 'EmptyDirVolumeSource';
    static apiVersion = 'core/v1';

    medium(medium: string): EmptyDirVolumeSourceHelper {
        this._template.medium = medium
        return this
    }

    sizeLimit(sizeLimit: Quantity): EmptyDirVolumeSourceHelper {
        this._template.sizeLimit = sizeLimit
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EmptyDirVolumeSourceHelper.kind
        this._template.apiVersion = EmptyDirVolumeSourceHelper.apiVersion
    }
}

/** EndpointAddress is a tuple that describes single IP address. */
export class EndpointAddressHelper extends ResourceTemplate {
    static kind = 'EndpointAddress';
    static apiVersion = 'core/v1';

    hostname(hostname: string): EndpointAddressHelper {
        this._template.hostname = hostname
        return this
    }

    ip(ip: string): EndpointAddressHelper {
        this._template.ip = ip
        return this
    }

    nodeName(nodeName: string): EndpointAddressHelper {
        this._template.nodeName = nodeName
        return this
    }

    targetRef(targetRef: ObjectReference): EndpointAddressHelper {
        if (!this._template.targetRef) this._template.targetRef = []
        this._template.targetRef = {
            ...this._template.targetRef,
            ...targetRef
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EndpointAddressHelper.kind
        this._template.apiVersion = EndpointAddressHelper.apiVersion
    }
}

/** EndpointPort is a tuple that describes a single port. */
export class EndpointPortHelper extends ResourceTemplate {
    static kind = 'EndpointPort';
    static apiVersion = 'core/v1';

    appProtocol(appProtocol: string): EndpointPortHelper {
        this._template.appProtocol = appProtocol
        return this
    }

    port(port: number): EndpointPortHelper {
        this._template.port = port
        return this
    }

    protocol(protocol: string): EndpointPortHelper {
        this._template.protocol = protocol
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EndpointPortHelper.kind
        this._template.apiVersion = EndpointPortHelper.apiVersion
    }
}

/**
 * EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:
 *   {
 *     Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
 *     Ports:     [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
 *   }
 * The resulting set of endpoints can be viewed as:
 *     a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],
 *     b: [ 10.10.1.1:309, 10.10.2.2:309 ]
 */
export class EndpointSubsetHelper extends ResourceTemplate {
    static kind = 'EndpointSubset';
    static apiVersion = 'core/v1';

    addresses(addresses: Array<EndpointAddress>): EndpointSubsetHelper {
        if (!Array.isArray(addresses)) { addresses = [addresses] }
        if (!this._template.addresses) this._template.addresses = addresses
        this._template.addresses = [...this._template.addresses, ...addresses]
        return this
    }

    notReadyAddresses(notReadyAddresses: Array<EndpointAddress>): EndpointSubsetHelper {
        if (!Array.isArray(notReadyAddresses)) { notReadyAddresses = [notReadyAddresses] }
        if (!this._template.notReadyAddresses) this._template.notReadyAddresses = notReadyAddresses
        this._template.notReadyAddresses = [...this._template.notReadyAddresses, ...notReadyAddresses]
        return this
    }

    ports(ports: Array<EndpointPort>): EndpointSubsetHelper {
        if (!Array.isArray(ports)) { ports = [ports] }
        if (!this._template.ports) this._template.ports = ports
        this._template.ports = [...this._template.ports, ...ports]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EndpointSubsetHelper.kind
        this._template.apiVersion = EndpointSubsetHelper.apiVersion
    }
}

/**
 * Endpoints is a collection of endpoints that implement the actual service. Example:
 *   Name: "mysvc",
 *   Subsets: [
 *     {
 *       Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
 *       Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
 *     },
 *     {
 *       Addresses: [{"ip": "10.10.3.3"}],
 *       Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
 *     },
 *  ]
 */
export class EndpointsHelper extends ResourceTemplate {
    static kind = 'Endpoints';
    static apiVersion = 'core/v1';

    metadata(metadata: ObjectMeta): EndpointsHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    subsets(subsets: Array<EndpointSubset>): EndpointsHelper {
        if (!Array.isArray(subsets)) { subsets = [subsets] }
        if (!this._template.subsets) this._template.subsets = subsets
        this._template.subsets = [...this._template.subsets, ...subsets]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EndpointsHelper.kind
        this._template.apiVersion = EndpointsHelper.apiVersion
    }
}

/** EndpointsList is a list of endpoints. */
export class EndpointsListHelper extends ResourceTemplate {
    static kind = 'EndpointsList';
    static apiVersion = 'core/v1';

    items(items: Array<Endpoints>): EndpointsListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): EndpointsListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EndpointsListHelper.kind
        this._template.apiVersion = EndpointsListHelper.apiVersion
    }
}

/** EnvFromSource represents the source of a set of ConfigMaps */
export class EnvFromSourceHelper extends ResourceTemplate {
    static kind = 'EnvFromSource';
    static apiVersion = 'core/v1';

    configMapRef(configMapRef: ConfigMapEnvSource): EnvFromSourceHelper {
        if (!this._template.configMapRef) this._template.configMapRef = []
        this._template.configMapRef = {
            ...this._template.configMapRef,
            ...configMapRef
        }
        return this
    }

    prefix(prefix: string): EnvFromSourceHelper {
        this._template.prefix = prefix
        return this
    }

    secretRef(secretRef: SecretEnvSource): EnvFromSourceHelper {
        if (!this._template.secretRef) this._template.secretRef = []
        this._template.secretRef = {
            ...this._template.secretRef,
            ...secretRef
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EnvFromSourceHelper.kind
        this._template.apiVersion = EnvFromSourceHelper.apiVersion
    }
}

/** EnvVar represents an environment variable present in a Container. */
export class EnvVarHelper extends ResourceTemplate {
    static kind = 'EnvVar';
    static apiVersion = 'core/v1';

    value(value: string): EnvVarHelper {
        this._template.value = value
        return this
    }

    valueFrom(valueFrom: EnvVarSource): EnvVarHelper {
        if (!this._template.valueFrom) this._template.valueFrom = []
        this._template.valueFrom = {
            ...this._template.valueFrom,
            ...valueFrom
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EnvVarHelper.kind
        this._template.apiVersion = EnvVarHelper.apiVersion
    }
}

/** EnvVarSource represents a source for the value of an EnvVar. */
export class EnvVarSourceHelper extends ResourceTemplate {
    static kind = 'EnvVarSource';
    static apiVersion = 'core/v1';

    configMapKeyRef(configMapKeyRef: ConfigMapKeySelector): EnvVarSourceHelper {
        if (!this._template.configMapKeyRef) this._template.configMapKeyRef = []
        this._template.configMapKeyRef = {
            ...this._template.configMapKeyRef,
            ...configMapKeyRef
        }
        return this
    }

    fieldRef(fieldRef: ObjectFieldSelector): EnvVarSourceHelper {
        if (!this._template.fieldRef) this._template.fieldRef = []
        this._template.fieldRef = {
            ...this._template.fieldRef,
            ...fieldRef
        }
        return this
    }

    resourceFieldRef(resourceFieldRef: ResourceFieldSelector): EnvVarSourceHelper {
        if (!this._template.resourceFieldRef) this._template.resourceFieldRef = []
        this._template.resourceFieldRef = {
            ...this._template.resourceFieldRef,
            ...resourceFieldRef
        }
        return this
    }

    secretKeyRef(secretKeyRef: SecretKeySelector): EnvVarSourceHelper {
        if (!this._template.secretKeyRef) this._template.secretKeyRef = []
        this._template.secretKeyRef = {
            ...this._template.secretKeyRef,
            ...secretKeyRef
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EnvVarSourceHelper.kind
        this._template.apiVersion = EnvVarSourceHelper.apiVersion
    }
}

/** An EphemeralContainer is a container that may be added temporarily to an existing pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a pod is removed or restarted. If an ephemeral container causes a pod to exceed its resource allocation, the pod may be evicted. Ephemeral containers may not be added by directly updating the pod spec. They must be added via the pod's ephemeralcontainers subresource, and they will appear in the pod spec once added. This is an alpha feature enabled by the EphemeralContainers feature flag. */
export class EphemeralContainerHelper extends ResourceTemplate {
    static kind = 'EphemeralContainer';
    static apiVersion = 'core/v1';

    args(args: Array<string>): EphemeralContainerHelper {
        if (!Array.isArray(args)) { args = [args] }
        if (!this._template.args) this._template.args = args
        this._template.args = [...this._template.args, ...args]
        return this
    }

    command(command: Array<string>): EphemeralContainerHelper {
        if (!Array.isArray(command)) { command = [command] }
        if (!this._template.command) this._template.command = command
        this._template.command = [...this._template.command, ...command]
        return this
    }

    env(env: Array<EnvVar>): EphemeralContainerHelper {
        if (!Array.isArray(env)) { env = [env] }
        if (!this._template.env) this._template.env = env
        this._template.env = [...this._template.env, ...env]
        return this
    }

    envFrom(envFrom: Array<EnvFromSource>): EphemeralContainerHelper {
        if (!Array.isArray(envFrom)) { envFrom = [envFrom] }
        if (!this._template.envFrom) this._template.envFrom = envFrom
        this._template.envFrom = [...this._template.envFrom, ...envFrom]
        return this
    }

    image(image: string): EphemeralContainerHelper {
        this._template.image = image
        return this
    }

    imagePullPolicy(imagePullPolicy: string): EphemeralContainerHelper {
        this._template.imagePullPolicy = imagePullPolicy
        return this
    }

    lifecycle(lifecycle: Lifecycle): EphemeralContainerHelper {
        if (!this._template.lifecycle) this._template.lifecycle = []
        this._template.lifecycle = {
            ...this._template.lifecycle,
            ...lifecycle
        }
        return this
    }

    livenessProbe(livenessProbe: Probe): EphemeralContainerHelper {
        if (!this._template.livenessProbe) this._template.livenessProbe = []
        this._template.livenessProbe = {
            ...this._template.livenessProbe,
            ...livenessProbe
        }
        return this
    }

    ports(ports: Array<ContainerPort>): EphemeralContainerHelper {
        if (!Array.isArray(ports)) { ports = [ports] }
        if (!this._template.ports) this._template.ports = ports
        this._template.ports = [...this._template.ports, ...ports]
        return this
    }

    readinessProbe(readinessProbe: Probe): EphemeralContainerHelper {
        if (!this._template.readinessProbe) this._template.readinessProbe = []
        this._template.readinessProbe = {
            ...this._template.readinessProbe,
            ...readinessProbe
        }
        return this
    }

    resources(resources: ResourceRequirements): EphemeralContainerHelper {
        if (!this._template.resources) this._template.resources = []
        this._template.resources = {
            ...this._template.resources,
            ...resources
        }
        return this
    }

    securityContext(securityContext: SecurityContext): EphemeralContainerHelper {
        if (!this._template.securityContext) this._template.securityContext = []
        this._template.securityContext = {
            ...this._template.securityContext,
            ...securityContext
        }
        return this
    }

    startupProbe(startupProbe: Probe): EphemeralContainerHelper {
        if (!this._template.startupProbe) this._template.startupProbe = []
        this._template.startupProbe = {
            ...this._template.startupProbe,
            ...startupProbe
        }
        return this
    }

    stdin(stdin: boolean): EphemeralContainerHelper {
        this._template.stdin = stdin
        return this
    }

    stdinOnce(stdinOnce: boolean): EphemeralContainerHelper {
        this._template.stdinOnce = stdinOnce
        return this
    }

    targetContainerName(targetContainerName: string): EphemeralContainerHelper {
        this._template.targetContainerName = targetContainerName
        return this
    }

    terminationMessagePath(terminationMessagePath: string): EphemeralContainerHelper {
        this._template.terminationMessagePath = terminationMessagePath
        return this
    }

    terminationMessagePolicy(terminationMessagePolicy: string): EphemeralContainerHelper {
        this._template.terminationMessagePolicy = terminationMessagePolicy
        return this
    }

    tty(tty: boolean): EphemeralContainerHelper {
        this._template.tty = tty
        return this
    }

    volumeDevices(volumeDevices: Array<VolumeDevice>): EphemeralContainerHelper {
        if (!Array.isArray(volumeDevices)) { volumeDevices = [volumeDevices] }
        if (!this._template.volumeDevices) this._template.volumeDevices = volumeDevices
        this._template.volumeDevices = [...this._template.volumeDevices, ...volumeDevices]
        return this
    }

    volumeMounts(volumeMounts: Array<VolumeMount>): EphemeralContainerHelper {
        if (!Array.isArray(volumeMounts)) { volumeMounts = [volumeMounts] }
        if (!this._template.volumeMounts) this._template.volumeMounts = volumeMounts
        this._template.volumeMounts = [...this._template.volumeMounts, ...volumeMounts]
        return this
    }

    workingDir(workingDir: string): EphemeralContainerHelper {
        this._template.workingDir = workingDir
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EphemeralContainerHelper.kind
        this._template.apiVersion = EphemeralContainerHelper.apiVersion
    }
}

/** A list of ephemeral containers used with the Pod ephemeralcontainers subresource. */
export class EphemeralContainersHelper extends ResourceTemplate {
    static kind = 'EphemeralContainers';
    static apiVersion = 'core/v1';

    ephemeralContainers(ephemeralContainers: Array<EphemeralContainer>): EphemeralContainersHelper {
        if (!Array.isArray(ephemeralContainers)) { ephemeralContainers = [ephemeralContainers] }
        if (!this._template.ephemeralContainers) this._template.ephemeralContainers = ephemeralContainers
        this._template.ephemeralContainers = [...this._template.ephemeralContainers, ...ephemeralContainers]
        return this
    }

    metadata(metadata: ObjectMeta): EphemeralContainersHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EphemeralContainersHelper.kind
        this._template.apiVersion = EphemeralContainersHelper.apiVersion
    }
}

/** Represents an ephemeral volume that is handled by a normal storage driver. */
export class EphemeralVolumeSourceHelper extends ResourceTemplate {
    static kind = 'EphemeralVolumeSource';
    static apiVersion = 'core/v1';

    volumeClaimTemplate(volumeClaimTemplate: PersistentVolumeClaimTemplate): EphemeralVolumeSourceHelper {
        if (!this._template.volumeClaimTemplate) this._template.volumeClaimTemplate = []
        this._template.volumeClaimTemplate = {
            ...this._template.volumeClaimTemplate,
            ...volumeClaimTemplate
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EphemeralVolumeSourceHelper.kind
        this._template.apiVersion = EphemeralVolumeSourceHelper.apiVersion
    }
}

/** Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data. */
export class EventHelper extends ResourceTemplate {
    static kind = 'Event';
    static apiVersion = 'core/v1';

    action(action: string): EventHelper {
        this._template.action = action
        return this
    }

    count(count: number): EventHelper {
        this._template.count = count
        return this
    }

    eventTime(eventTime: MicroTime): EventHelper {
        this._template.eventTime = eventTime
        return this
    }

    firstTimestamp(firstTimestamp: Time): EventHelper {
        this._template.firstTimestamp = firstTimestamp
        return this
    }

    involvedObject(involvedObject: ObjectReference): EventHelper {
        if (!this._template.involvedObject) this._template.involvedObject = []
        this._template.involvedObject = {
            ...this._template.involvedObject,
            ...involvedObject
        }
        return this
    }

    lastTimestamp(lastTimestamp: Time): EventHelper {
        this._template.lastTimestamp = lastTimestamp
        return this
    }

    message(message: string): EventHelper {
        this._template.message = message
        return this
    }

    metadata(metadata: ObjectMeta): EventHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    reason(reason: string): EventHelper {
        this._template.reason = reason
        return this
    }

    related(related: ObjectReference): EventHelper {
        if (!this._template.related) this._template.related = []
        this._template.related = {
            ...this._template.related,
            ...related
        }
        return this
    }

    reportingComponent(reportingComponent: string): EventHelper {
        this._template.reportingComponent = reportingComponent
        return this
    }

    reportingInstance(reportingInstance: string): EventHelper {
        this._template.reportingInstance = reportingInstance
        return this
    }

    series(series: EventSeries): EventHelper {
        if (!this._template.series) this._template.series = []
        this._template.series = {
            ...this._template.series,
            ...series
        }
        return this
    }

    source(source: EventSource): EventHelper {
        if (!this._template.source) this._template.source = []
        this._template.source = {
            ...this._template.source,
            ...source
        }
        return this
    }

    type(type: string): EventHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EventHelper.kind
        this._template.apiVersion = EventHelper.apiVersion
    }
}

/** EventList is a list of events. */
export class EventListHelper extends ResourceTemplate {
    static kind = 'EventList';
    static apiVersion = 'core/v1';

    items(items: Array<Event>): EventListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): EventListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EventListHelper.kind
        this._template.apiVersion = EventListHelper.apiVersion
    }
}

/** EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. */
export class EventSeriesHelper extends ResourceTemplate {
    static kind = 'EventSeries';
    static apiVersion = 'core/v1';

    count(count: number): EventSeriesHelper {
        this._template.count = count
        return this
    }

    lastObservedTime(lastObservedTime: MicroTime): EventSeriesHelper {
        this._template.lastObservedTime = lastObservedTime
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EventSeriesHelper.kind
        this._template.apiVersion = EventSeriesHelper.apiVersion
    }
}

/** EventSource contains information for an event. */
export class EventSourceHelper extends ResourceTemplate {
    static kind = 'EventSource';
    static apiVersion = 'core/v1';

    component(component: string): EventSourceHelper {
        this._template.component = component
        return this
    }

    host(host: string): EventSourceHelper {
        this._template.host = host
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EventSourceHelper.kind
        this._template.apiVersion = EventSourceHelper.apiVersion
    }
}

/** ExecAction describes a "run in container" action. */
export class ExecActionHelper extends ResourceTemplate {
    static kind = 'ExecAction';
    static apiVersion = 'core/v1';

    command(command: Array<string>): ExecActionHelper {
        if (!Array.isArray(command)) { command = [command] }
        if (!this._template.command) this._template.command = command
        this._template.command = [...this._template.command, ...command]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ExecActionHelper.kind
        this._template.apiVersion = ExecActionHelper.apiVersion
    }
}

/** Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
export class FCVolumeSourceHelper extends ResourceTemplate {
    static kind = 'FCVolumeSource';
    static apiVersion = 'core/v1';

    fsType(fsType: string): FCVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    lun(lun: number): FCVolumeSourceHelper {
        this._template.lun = lun
        return this
    }

    readOnly(readOnly: boolean): FCVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    targetWWNs(targetWWNs: Array<string>): FCVolumeSourceHelper {
        if (!Array.isArray(targetWWNs)) { targetWWNs = [targetWWNs] }
        if (!this._template.targetWWNs) this._template.targetWWNs = targetWWNs
        this._template.targetWWNs = [...this._template.targetWWNs, ...targetWWNs]
        return this
    }

    wwids(wwids: Array<string>): FCVolumeSourceHelper {
        if (!Array.isArray(wwids)) { wwids = [wwids] }
        if (!this._template.wwids) this._template.wwids = wwids
        this._template.wwids = [...this._template.wwids, ...wwids]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = FCVolumeSourceHelper.kind
        this._template.apiVersion = FCVolumeSourceHelper.apiVersion
    }
}

/** FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin. */
export class FlexPersistentVolumeSourceHelper extends ResourceTemplate {
    static kind = 'FlexPersistentVolumeSource';
    static apiVersion = 'core/v1';

    driver(driver: string): FlexPersistentVolumeSourceHelper {
        this._template.driver = driver
        return this
    }

    fsType(fsType: string): FlexPersistentVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    options(options: {[name: string]: string}): FlexPersistentVolumeSourceHelper {
        if (!this._template.options) this._template.options = []
        this._template.options = {
            ...this._template.options,
            ...options
        }
        return this
    }

    readOnly(readOnly: boolean): FlexPersistentVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    secretRef(secretRef: SecretReference): FlexPersistentVolumeSourceHelper {
        if (!this._template.secretRef) this._template.secretRef = []
        this._template.secretRef = {
            ...this._template.secretRef,
            ...secretRef
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = FlexPersistentVolumeSourceHelper.kind
        this._template.apiVersion = FlexPersistentVolumeSourceHelper.apiVersion
    }
}

/** FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
export class FlexVolumeSourceHelper extends ResourceTemplate {
    static kind = 'FlexVolumeSource';
    static apiVersion = 'core/v1';

    driver(driver: string): FlexVolumeSourceHelper {
        this._template.driver = driver
        return this
    }

    fsType(fsType: string): FlexVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    options(options: {[name: string]: string}): FlexVolumeSourceHelper {
        if (!this._template.options) this._template.options = []
        this._template.options = {
            ...this._template.options,
            ...options
        }
        return this
    }

    readOnly(readOnly: boolean): FlexVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    secretRef(secretRef: LocalObjectReference): FlexVolumeSourceHelper {
        if (!this._template.secretRef) this._template.secretRef = []
        this._template.secretRef = {
            ...this._template.secretRef,
            ...secretRef
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = FlexVolumeSourceHelper.kind
        this._template.apiVersion = FlexVolumeSourceHelper.apiVersion
    }
}

/** Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
export class FlockerVolumeSourceHelper extends ResourceTemplate {
    static kind = 'FlockerVolumeSource';
    static apiVersion = 'core/v1';

    datasetName(datasetName: string): FlockerVolumeSourceHelper {
        this._template.datasetName = datasetName
        return this
    }

    datasetUUID(datasetUUID: string): FlockerVolumeSourceHelper {
        this._template.datasetUUID = datasetUUID
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = FlockerVolumeSourceHelper.kind
        this._template.apiVersion = FlockerVolumeSourceHelper.apiVersion
    }
}

/**
 * Represents a Persistent Disk resource in Google Compute Engine.
 *
 * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 */
export class GCEPersistentDiskVolumeSourceHelper extends ResourceTemplate {
    static kind = 'GCEPersistentDiskVolumeSource';
    static apiVersion = 'core/v1';

    fsType(fsType: string): GCEPersistentDiskVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    partition(partition: number): GCEPersistentDiskVolumeSourceHelper {
        this._template.partition = partition
        return this
    }

    pdName(pdName: string): GCEPersistentDiskVolumeSourceHelper {
        this._template.pdName = pdName
        return this
    }

    readOnly(readOnly: boolean): GCEPersistentDiskVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = GCEPersistentDiskVolumeSourceHelper.kind
        this._template.apiVersion = GCEPersistentDiskVolumeSourceHelper.apiVersion
    }
}

/**
 * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
 *
 * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 */
export class GitRepoVolumeSourceHelper extends ResourceTemplate {
    static kind = 'GitRepoVolumeSource';
    static apiVersion = 'core/v1';

    directory(directory: string): GitRepoVolumeSourceHelper {
        this._template.directory = directory
        return this
    }

    repository(repository: string): GitRepoVolumeSourceHelper {
        this._template.repository = repository
        return this
    }

    revision(revision: string): GitRepoVolumeSourceHelper {
        this._template.revision = revision
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = GitRepoVolumeSourceHelper.kind
        this._template.apiVersion = GitRepoVolumeSourceHelper.apiVersion
    }
}

/** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export class GlusterfsPersistentVolumeSourceHelper extends ResourceTemplate {
    static kind = 'GlusterfsPersistentVolumeSource';
    static apiVersion = 'core/v1';

    endpoints(endpoints: string): GlusterfsPersistentVolumeSourceHelper {
        this._template.endpoints = endpoints
        return this
    }

    endpointsNamespace(endpointsNamespace: string): GlusterfsPersistentVolumeSourceHelper {
        this._template.endpointsNamespace = endpointsNamespace
        return this
    }

    path(path: string): GlusterfsPersistentVolumeSourceHelper {
        this._template.path = path
        return this
    }

    readOnly(readOnly: boolean): GlusterfsPersistentVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = GlusterfsPersistentVolumeSourceHelper.kind
        this._template.apiVersion = GlusterfsPersistentVolumeSourceHelper.apiVersion
    }
}

/** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export class GlusterfsVolumeSourceHelper extends ResourceTemplate {
    static kind = 'GlusterfsVolumeSource';
    static apiVersion = 'core/v1';

    endpoints(endpoints: string): GlusterfsVolumeSourceHelper {
        this._template.endpoints = endpoints
        return this
    }

    path(path: string): GlusterfsVolumeSourceHelper {
        this._template.path = path
        return this
    }

    readOnly(readOnly: boolean): GlusterfsVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = GlusterfsVolumeSourceHelper.kind
        this._template.apiVersion = GlusterfsVolumeSourceHelper.apiVersion
    }
}

/** HTTPGetAction describes an action based on HTTP Get requests. */
export class HTTPGetActionHelper extends ResourceTemplate {
    static kind = 'HTTPGetAction';
    static apiVersion = 'core/v1';

    host(host: string): HTTPGetActionHelper {
        this._template.host = host
        return this
    }

    httpHeaders(httpHeaders: Array<HTTPHeader>): HTTPGetActionHelper {
        if (!Array.isArray(httpHeaders)) { httpHeaders = [httpHeaders] }
        if (!this._template.httpHeaders) this._template.httpHeaders = httpHeaders
        this._template.httpHeaders = [...this._template.httpHeaders, ...httpHeaders]
        return this
    }

    path(path: string): HTTPGetActionHelper {
        this._template.path = path
        return this
    }

    port(port: number | string): HTTPGetActionHelper {
        this._template.port = port
        return this
    }

    scheme(scheme: string): HTTPGetActionHelper {
        this._template.scheme = scheme
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HTTPGetActionHelper.kind
        this._template.apiVersion = HTTPGetActionHelper.apiVersion
    }
}

/** HTTPHeader describes a custom header to be used in HTTP probes */
export class HTTPHeaderHelper extends ResourceTemplate {
    static kind = 'HTTPHeader';
    static apiVersion = 'core/v1';

    value(value: string): HTTPHeaderHelper {
        this._template.value = value
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HTTPHeaderHelper.kind
        this._template.apiVersion = HTTPHeaderHelper.apiVersion
    }
}

/** Handler defines a specific action that should be taken */
export class HandlerHelper extends ResourceTemplate {
    static kind = 'Handler';
    static apiVersion = 'core/v1';

    exec(exec: ExecAction): HandlerHelper {
        if (!this._template.exec) this._template.exec = []
        this._template.exec = {
            ...this._template.exec,
            ...exec
        }
        return this
    }

    httpGet(httpGet: HTTPGetAction): HandlerHelper {
        if (!this._template.httpGet) this._template.httpGet = []
        this._template.httpGet = {
            ...this._template.httpGet,
            ...httpGet
        }
        return this
    }

    tcpSocket(tcpSocket: TCPSocketAction): HandlerHelper {
        if (!this._template.tcpSocket) this._template.tcpSocket = []
        this._template.tcpSocket = {
            ...this._template.tcpSocket,
            ...tcpSocket
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HandlerHelper.kind
        this._template.apiVersion = HandlerHelper.apiVersion
    }
}

/** HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file. */
export class HostAliasHelper extends ResourceTemplate {
    static kind = 'HostAlias';
    static apiVersion = 'core/v1';

    hostnames(hostnames: Array<string>): HostAliasHelper {
        if (!Array.isArray(hostnames)) { hostnames = [hostnames] }
        if (!this._template.hostnames) this._template.hostnames = hostnames
        this._template.hostnames = [...this._template.hostnames, ...hostnames]
        return this
    }

    ip(ip: string): HostAliasHelper {
        this._template.ip = ip
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HostAliasHelper.kind
        this._template.apiVersion = HostAliasHelper.apiVersion
    }
}

/** Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
export class HostPathVolumeSourceHelper extends ResourceTemplate {
    static kind = 'HostPathVolumeSource';
    static apiVersion = 'core/v1';

    path(path: string): HostPathVolumeSourceHelper {
        this._template.path = path
        return this
    }

    type(type: string): HostPathVolumeSourceHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HostPathVolumeSourceHelper.kind
        this._template.apiVersion = HostPathVolumeSourceHelper.apiVersion
    }
}

/** ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
export class ISCSIPersistentVolumeSourceHelper extends ResourceTemplate {
    static kind = 'ISCSIPersistentVolumeSource';
    static apiVersion = 'core/v1';

    chapAuthDiscovery(chapAuthDiscovery: boolean): ISCSIPersistentVolumeSourceHelper {
        this._template.chapAuthDiscovery = chapAuthDiscovery
        return this
    }

    chapAuthSession(chapAuthSession: boolean): ISCSIPersistentVolumeSourceHelper {
        this._template.chapAuthSession = chapAuthSession
        return this
    }

    fsType(fsType: string): ISCSIPersistentVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    initiatorName(initiatorName: string): ISCSIPersistentVolumeSourceHelper {
        this._template.initiatorName = initiatorName
        return this
    }

    iqn(iqn: string): ISCSIPersistentVolumeSourceHelper {
        this._template.iqn = iqn
        return this
    }

    iscsiInterface(iscsiInterface: string): ISCSIPersistentVolumeSourceHelper {
        this._template.iscsiInterface = iscsiInterface
        return this
    }

    lun(lun: number): ISCSIPersistentVolumeSourceHelper {
        this._template.lun = lun
        return this
    }

    portals(portals: Array<string>): ISCSIPersistentVolumeSourceHelper {
        if (!Array.isArray(portals)) { portals = [portals] }
        if (!this._template.portals) this._template.portals = portals
        this._template.portals = [...this._template.portals, ...portals]
        return this
    }

    readOnly(readOnly: boolean): ISCSIPersistentVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    secretRef(secretRef: SecretReference): ISCSIPersistentVolumeSourceHelper {
        if (!this._template.secretRef) this._template.secretRef = []
        this._template.secretRef = {
            ...this._template.secretRef,
            ...secretRef
        }
        return this
    }

    targetPortal(targetPortal: string): ISCSIPersistentVolumeSourceHelper {
        this._template.targetPortal = targetPortal
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ISCSIPersistentVolumeSourceHelper.kind
        this._template.apiVersion = ISCSIPersistentVolumeSourceHelper.apiVersion
    }
}

/** Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
export class ISCSIVolumeSourceHelper extends ResourceTemplate {
    static kind = 'ISCSIVolumeSource';
    static apiVersion = 'core/v1';

    chapAuthDiscovery(chapAuthDiscovery: boolean): ISCSIVolumeSourceHelper {
        this._template.chapAuthDiscovery = chapAuthDiscovery
        return this
    }

    chapAuthSession(chapAuthSession: boolean): ISCSIVolumeSourceHelper {
        this._template.chapAuthSession = chapAuthSession
        return this
    }

    fsType(fsType: string): ISCSIVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    initiatorName(initiatorName: string): ISCSIVolumeSourceHelper {
        this._template.initiatorName = initiatorName
        return this
    }

    iqn(iqn: string): ISCSIVolumeSourceHelper {
        this._template.iqn = iqn
        return this
    }

    iscsiInterface(iscsiInterface: string): ISCSIVolumeSourceHelper {
        this._template.iscsiInterface = iscsiInterface
        return this
    }

    lun(lun: number): ISCSIVolumeSourceHelper {
        this._template.lun = lun
        return this
    }

    portals(portals: Array<string>): ISCSIVolumeSourceHelper {
        if (!Array.isArray(portals)) { portals = [portals] }
        if (!this._template.portals) this._template.portals = portals
        this._template.portals = [...this._template.portals, ...portals]
        return this
    }

    readOnly(readOnly: boolean): ISCSIVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    secretRef(secretRef: LocalObjectReference): ISCSIVolumeSourceHelper {
        if (!this._template.secretRef) this._template.secretRef = []
        this._template.secretRef = {
            ...this._template.secretRef,
            ...secretRef
        }
        return this
    }

    targetPortal(targetPortal: string): ISCSIVolumeSourceHelper {
        this._template.targetPortal = targetPortal
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ISCSIVolumeSourceHelper.kind
        this._template.apiVersion = ISCSIVolumeSourceHelper.apiVersion
    }
}

/** Maps a string key to a path within a volume. */
export class KeyToPathHelper extends ResourceTemplate {
    static kind = 'KeyToPath';
    static apiVersion = 'core/v1';

    key(key: string): KeyToPathHelper {
        this._template.key = key
        return this
    }

    mode(mode: number): KeyToPathHelper {
        this._template.mode = mode
        return this
    }

    path(path: string): KeyToPathHelper {
        this._template.path = path
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = KeyToPathHelper.kind
        this._template.apiVersion = KeyToPathHelper.apiVersion
    }
}

/** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
export class LifecycleHelper extends ResourceTemplate {
    static kind = 'Lifecycle';
    static apiVersion = 'core/v1';

    postStart(postStart: Handler): LifecycleHelper {
        if (!this._template.postStart) this._template.postStart = []
        this._template.postStart = {
            ...this._template.postStart,
            ...postStart
        }
        return this
    }

    preStop(preStop: Handler): LifecycleHelper {
        if (!this._template.preStop) this._template.preStop = []
        this._template.preStop = {
            ...this._template.preStop,
            ...preStop
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LifecycleHelper.kind
        this._template.apiVersion = LifecycleHelper.apiVersion
    }
}

/** LimitRange sets resource usage limits for each kind of resource in a Namespace. */
export class LimitRangeHelper extends ResourceTemplate {
    static kind = 'LimitRange';
    static apiVersion = 'core/v1';

    metadata(metadata: ObjectMeta): LimitRangeHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: LimitRangeSpec): LimitRangeHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LimitRangeHelper.kind
        this._template.apiVersion = LimitRangeHelper.apiVersion
    }
}

/** LimitRangeItem defines a min/max usage limit for any resource that matches on kind. */
export class LimitRangeItemHelper extends ResourceTemplate {
    static kind = 'LimitRangeItem';
    static apiVersion = 'core/v1';

    default_(default_: {[name: string]: Quantity}): LimitRangeItemHelper {
        if (!this._template.default_) this._template.default_ = []
        this._template.default_ = {
            ...this._template.default_,
            ...default_
        }
        return this
    }

    defaultRequest(defaultRequest: {[name: string]: Quantity}): LimitRangeItemHelper {
        if (!this._template.defaultRequest) this._template.defaultRequest = []
        this._template.defaultRequest = {
            ...this._template.defaultRequest,
            ...defaultRequest
        }
        return this
    }

    max(max: {[name: string]: Quantity}): LimitRangeItemHelper {
        if (!this._template.max) this._template.max = []
        this._template.max = {
            ...this._template.max,
            ...max
        }
        return this
    }

    maxLimitRequestRatio(maxLimitRequestRatio: {[name: string]: Quantity}): LimitRangeItemHelper {
        if (!this._template.maxLimitRequestRatio) this._template.maxLimitRequestRatio = []
        this._template.maxLimitRequestRatio = {
            ...this._template.maxLimitRequestRatio,
            ...maxLimitRequestRatio
        }
        return this
    }

    min(min: {[name: string]: Quantity}): LimitRangeItemHelper {
        if (!this._template.min) this._template.min = []
        this._template.min = {
            ...this._template.min,
            ...min
        }
        return this
    }

    type(type: string): LimitRangeItemHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LimitRangeItemHelper.kind
        this._template.apiVersion = LimitRangeItemHelper.apiVersion
    }
}

/** LimitRangeList is a list of LimitRange items. */
export class LimitRangeListHelper extends ResourceTemplate {
    static kind = 'LimitRangeList';
    static apiVersion = 'core/v1';

    items(items: Array<LimitRange>): LimitRangeListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): LimitRangeListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LimitRangeListHelper.kind
        this._template.apiVersion = LimitRangeListHelper.apiVersion
    }
}

/** LimitRangeSpec defines a min/max usage limit for resources that match on kind. */
export class LimitRangeSpecHelper extends ResourceTemplate {
    static kind = 'LimitRangeSpec';
    static apiVersion = 'core/v1';

    limits(limits: Array<LimitRangeItem>): LimitRangeSpecHelper {
        if (!Array.isArray(limits)) { limits = [limits] }
        if (!this._template.limits) this._template.limits = limits
        this._template.limits = [...this._template.limits, ...limits]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LimitRangeSpecHelper.kind
        this._template.apiVersion = LimitRangeSpecHelper.apiVersion
    }
}

/** LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point. */
export class LoadBalancerIngressHelper extends ResourceTemplate {
    static kind = 'LoadBalancerIngress';
    static apiVersion = 'core/v1';

    hostname(hostname: string): LoadBalancerIngressHelper {
        this._template.hostname = hostname
        return this
    }

    ip(ip: string): LoadBalancerIngressHelper {
        this._template.ip = ip
        return this
    }

    ports(ports: Array<PortStatus>): LoadBalancerIngressHelper {
        if (!Array.isArray(ports)) { ports = [ports] }
        if (!this._template.ports) this._template.ports = ports
        this._template.ports = [...this._template.ports, ...ports]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LoadBalancerIngressHelper.kind
        this._template.apiVersion = LoadBalancerIngressHelper.apiVersion
    }
}

/** LoadBalancerStatus represents the status of a load-balancer. */
export class LoadBalancerStatusHelper extends ResourceTemplate {
    static kind = 'LoadBalancerStatus';
    static apiVersion = 'core/v1';

    ingress(ingress: Array<LoadBalancerIngress>): LoadBalancerStatusHelper {
        if (!Array.isArray(ingress)) { ingress = [ingress] }
        if (!this._template.ingress) this._template.ingress = ingress
        this._template.ingress = [...this._template.ingress, ...ingress]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LoadBalancerStatusHelper.kind
        this._template.apiVersion = LoadBalancerStatusHelper.apiVersion
    }
}

/** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
export class LocalObjectReferenceHelper extends ResourceTemplate {
    static kind = 'LocalObjectReference';
    static apiVersion = 'core/v1';

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LocalObjectReferenceHelper.kind
        this._template.apiVersion = LocalObjectReferenceHelper.apiVersion
    }
}

/** Local represents directly-attached storage with node affinity (Beta feature) */
export class LocalVolumeSourceHelper extends ResourceTemplate {
    static kind = 'LocalVolumeSource';
    static apiVersion = 'core/v1';

    fsType(fsType: string): LocalVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    path(path: string): LocalVolumeSourceHelper {
        this._template.path = path
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LocalVolumeSourceHelper.kind
        this._template.apiVersion = LocalVolumeSourceHelper.apiVersion
    }
}

/** Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
export class NFSVolumeSourceHelper extends ResourceTemplate {
    static kind = 'NFSVolumeSource';
    static apiVersion = 'core/v1';

    path(path: string): NFSVolumeSourceHelper {
        this._template.path = path
        return this
    }

    readOnly(readOnly: boolean): NFSVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    server(server: string): NFSVolumeSourceHelper {
        this._template.server = server
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NFSVolumeSourceHelper.kind
        this._template.apiVersion = NFSVolumeSourceHelper.apiVersion
    }
}

/** Namespace provides a scope for Names. Use of multiple namespaces is optional. */
export class NamespaceHelper extends ResourceTemplate {
    static kind = 'Namespace';
    static apiVersion = 'core/v1';

    metadata(metadata: ObjectMeta): NamespaceHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: NamespaceSpec): NamespaceHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: NamespaceStatus): NamespaceHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NamespaceHelper.kind
        this._template.apiVersion = NamespaceHelper.apiVersion
    }
}

/** NamespaceCondition contains details about state of namespace. */
export class NamespaceConditionHelper extends ResourceTemplate {
    static kind = 'NamespaceCondition';
    static apiVersion = 'core/v1';

    lastTransitionTime(lastTransitionTime: Time): NamespaceConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    message(message: string): NamespaceConditionHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): NamespaceConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): NamespaceConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): NamespaceConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NamespaceConditionHelper.kind
        this._template.apiVersion = NamespaceConditionHelper.apiVersion
    }
}

/** NamespaceList is a list of Namespaces. */
export class NamespaceListHelper extends ResourceTemplate {
    static kind = 'NamespaceList';
    static apiVersion = 'core/v1';

    items(items: Array<Namespace>): NamespaceListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): NamespaceListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NamespaceListHelper.kind
        this._template.apiVersion = NamespaceListHelper.apiVersion
    }
}

/** NamespaceSpec describes the attributes on a Namespace. */
export class NamespaceSpecHelper extends ResourceTemplate {
    static kind = 'NamespaceSpec';
    static apiVersion = 'core/v1';

    finalizers(finalizers: Array<string>): NamespaceSpecHelper {
        if (!Array.isArray(finalizers)) { finalizers = [finalizers] }
        if (!this._template.finalizers) this._template.finalizers = finalizers
        this._template.finalizers = [...this._template.finalizers, ...finalizers]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NamespaceSpecHelper.kind
        this._template.apiVersion = NamespaceSpecHelper.apiVersion
    }
}

/** NamespaceStatus is information about the current status of a Namespace. */
export class NamespaceStatusHelper extends ResourceTemplate {
    static kind = 'NamespaceStatus';
    static apiVersion = 'core/v1';

    conditions(conditions: Array<NamespaceCondition>): NamespaceStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    phase(phase: string): NamespaceStatusHelper {
        this._template.phase = phase
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NamespaceStatusHelper.kind
        this._template.apiVersion = NamespaceStatusHelper.apiVersion
    }
}

/** Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd). */
export class NodeHelper extends ResourceTemplate {
    static kind = 'Node';
    static apiVersion = 'core/v1';

    metadata(metadata: ObjectMeta): NodeHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: NodeSpec): NodeHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: NodeStatus): NodeHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NodeHelper.kind
        this._template.apiVersion = NodeHelper.apiVersion
    }
}

/** NodeAddress contains information for the node's address. */
export class NodeAddressHelper extends ResourceTemplate {
    static kind = 'NodeAddress';
    static apiVersion = 'core/v1';

    address(address: string): NodeAddressHelper {
        this._template.address = address
        return this
    }

    type(type: string): NodeAddressHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NodeAddressHelper.kind
        this._template.apiVersion = NodeAddressHelper.apiVersion
    }
}

/** Node affinity is a group of node affinity scheduling rules. */
export class NodeAffinityHelper extends ResourceTemplate {
    static kind = 'NodeAffinity';
    static apiVersion = 'core/v1';

    preferredDuringSchedulingIgnoredDuringExecution(preferredDuringSchedulingIgnoredDuringExecution: Array<PreferredSchedulingTerm>): NodeAffinityHelper {
        if (!Array.isArray(preferredDuringSchedulingIgnoredDuringExecution)) { preferredDuringSchedulingIgnoredDuringExecution = [preferredDuringSchedulingIgnoredDuringExecution] }
        if (!this._template.preferredDuringSchedulingIgnoredDuringExecution) this._template.preferredDuringSchedulingIgnoredDuringExecution = preferredDuringSchedulingIgnoredDuringExecution
        this._template.preferredDuringSchedulingIgnoredDuringExecution = [...this._template.preferredDuringSchedulingIgnoredDuringExecution, ...preferredDuringSchedulingIgnoredDuringExecution]
        return this
    }

    requiredDuringSchedulingIgnoredDuringExecution(requiredDuringSchedulingIgnoredDuringExecution: NodeSelector): NodeAffinityHelper {
        if (!this._template.requiredDuringSchedulingIgnoredDuringExecution) this._template.requiredDuringSchedulingIgnoredDuringExecution = []
        this._template.requiredDuringSchedulingIgnoredDuringExecution = {
            ...this._template.requiredDuringSchedulingIgnoredDuringExecution,
            ...requiredDuringSchedulingIgnoredDuringExecution
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NodeAffinityHelper.kind
        this._template.apiVersion = NodeAffinityHelper.apiVersion
    }
}

/** NodeCondition contains condition information for a node. */
export class NodeConditionHelper extends ResourceTemplate {
    static kind = 'NodeCondition';
    static apiVersion = 'core/v1';

    lastHeartbeatTime(lastHeartbeatTime: Time): NodeConditionHelper {
        this._template.lastHeartbeatTime = lastHeartbeatTime
        return this
    }

    lastTransitionTime(lastTransitionTime: Time): NodeConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    message(message: string): NodeConditionHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): NodeConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): NodeConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): NodeConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NodeConditionHelper.kind
        this._template.apiVersion = NodeConditionHelper.apiVersion
    }
}

/** NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. */
export class NodeConfigSourceHelper extends ResourceTemplate {
    static kind = 'NodeConfigSource';
    static apiVersion = 'core/v1';

    configMap(configMap: ConfigMapNodeConfigSource): NodeConfigSourceHelper {
        if (!this._template.configMap) this._template.configMap = []
        this._template.configMap = {
            ...this._template.configMap,
            ...configMap
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NodeConfigSourceHelper.kind
        this._template.apiVersion = NodeConfigSourceHelper.apiVersion
    }
}

/** NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource. */
export class NodeConfigStatusHelper extends ResourceTemplate {
    static kind = 'NodeConfigStatus';
    static apiVersion = 'core/v1';

    active(active: NodeConfigSource): NodeConfigStatusHelper {
        if (!this._template.active) this._template.active = []
        this._template.active = {
            ...this._template.active,
            ...active
        }
        return this
    }

    assigned(assigned: NodeConfigSource): NodeConfigStatusHelper {
        if (!this._template.assigned) this._template.assigned = []
        this._template.assigned = {
            ...this._template.assigned,
            ...assigned
        }
        return this
    }

    error(error: string): NodeConfigStatusHelper {
        this._template.error = error
        return this
    }

    lastKnownGood(lastKnownGood: NodeConfigSource): NodeConfigStatusHelper {
        if (!this._template.lastKnownGood) this._template.lastKnownGood = []
        this._template.lastKnownGood = {
            ...this._template.lastKnownGood,
            ...lastKnownGood
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NodeConfigStatusHelper.kind
        this._template.apiVersion = NodeConfigStatusHelper.apiVersion
    }
}

/** NodeDaemonEndpoints lists ports opened by daemons running on the Node. */
export class NodeDaemonEndpointsHelper extends ResourceTemplate {
    static kind = 'NodeDaemonEndpoints';
    static apiVersion = 'core/v1';

    kubeletEndpoint(kubeletEndpoint: DaemonEndpoint): NodeDaemonEndpointsHelper {
        if (!this._template.kubeletEndpoint) this._template.kubeletEndpoint = []
        this._template.kubeletEndpoint = {
            ...this._template.kubeletEndpoint,
            ...kubeletEndpoint
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NodeDaemonEndpointsHelper.kind
        this._template.apiVersion = NodeDaemonEndpointsHelper.apiVersion
    }
}

/** NodeList is the whole list of all Nodes which have been registered with master. */
export class NodeListHelper extends ResourceTemplate {
    static kind = 'NodeList';
    static apiVersion = 'core/v1';

    items(items: Array<Node>): NodeListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): NodeListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NodeListHelper.kind
        this._template.apiVersion = NodeListHelper.apiVersion
    }
}

/** A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
export class NodeSelectorHelper extends ResourceTemplate {
    static kind = 'NodeSelector';
    static apiVersion = 'core/v1';

    nodeSelectorTerms(nodeSelectorTerms: Array<NodeSelectorTerm>): NodeSelectorHelper {
        if (!Array.isArray(nodeSelectorTerms)) { nodeSelectorTerms = [nodeSelectorTerms] }
        if (!this._template.nodeSelectorTerms) this._template.nodeSelectorTerms = nodeSelectorTerms
        this._template.nodeSelectorTerms = [...this._template.nodeSelectorTerms, ...nodeSelectorTerms]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NodeSelectorHelper.kind
        this._template.apiVersion = NodeSelectorHelper.apiVersion
    }
}

/** A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export class NodeSelectorRequirementHelper extends ResourceTemplate {
    static kind = 'NodeSelectorRequirement';
    static apiVersion = 'core/v1';

    key(key: string): NodeSelectorRequirementHelper {
        this._template.key = key
        return this
    }

    operator(operator: string): NodeSelectorRequirementHelper {
        this._template.operator = operator
        return this
    }

    values(values: Array<string>): NodeSelectorRequirementHelper {
        if (!Array.isArray(values)) { values = [values] }
        if (!this._template.values) this._template.values = values
        this._template.values = [...this._template.values, ...values]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NodeSelectorRequirementHelper.kind
        this._template.apiVersion = NodeSelectorRequirementHelper.apiVersion
    }
}

/** A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
export class NodeSelectorTermHelper extends ResourceTemplate {
    static kind = 'NodeSelectorTerm';
    static apiVersion = 'core/v1';

    matchExpressions(matchExpressions: Array<NodeSelectorRequirement>): NodeSelectorTermHelper {
        if (!Array.isArray(matchExpressions)) { matchExpressions = [matchExpressions] }
        if (!this._template.matchExpressions) this._template.matchExpressions = matchExpressions
        this._template.matchExpressions = [...this._template.matchExpressions, ...matchExpressions]
        return this
    }

    matchFields(matchFields: Array<NodeSelectorRequirement>): NodeSelectorTermHelper {
        if (!Array.isArray(matchFields)) { matchFields = [matchFields] }
        if (!this._template.matchFields) this._template.matchFields = matchFields
        this._template.matchFields = [...this._template.matchFields, ...matchFields]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NodeSelectorTermHelper.kind
        this._template.apiVersion = NodeSelectorTermHelper.apiVersion
    }
}

/** NodeSpec describes the attributes that a node is created with. */
export class NodeSpecHelper extends ResourceTemplate {
    static kind = 'NodeSpec';
    static apiVersion = 'core/v1';

    configSource(configSource: NodeConfigSource): NodeSpecHelper {
        if (!this._template.configSource) this._template.configSource = []
        this._template.configSource = {
            ...this._template.configSource,
            ...configSource
        }
        return this
    }

    externalID(externalID: string): NodeSpecHelper {
        this._template.externalID = externalID
        return this
    }

    podCIDR(podCIDR: string): NodeSpecHelper {
        this._template.podCIDR = podCIDR
        return this
    }

    podCIDRs(podCIDRs: Array<string>): NodeSpecHelper {
        if (!Array.isArray(podCIDRs)) { podCIDRs = [podCIDRs] }
        if (!this._template.podCIDRs) this._template.podCIDRs = podCIDRs
        this._template.podCIDRs = [...this._template.podCIDRs, ...podCIDRs]
        return this
    }

    providerID(providerID: string): NodeSpecHelper {
        this._template.providerID = providerID
        return this
    }

    taints(taints: Array<Taint>): NodeSpecHelper {
        if (!Array.isArray(taints)) { taints = [taints] }
        if (!this._template.taints) this._template.taints = taints
        this._template.taints = [...this._template.taints, ...taints]
        return this
    }

    unschedulable(unschedulable: boolean): NodeSpecHelper {
        this._template.unschedulable = unschedulable
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NodeSpecHelper.kind
        this._template.apiVersion = NodeSpecHelper.apiVersion
    }
}

/** NodeStatus is information about the current status of a node. */
export class NodeStatusHelper extends ResourceTemplate {
    static kind = 'NodeStatus';
    static apiVersion = 'core/v1';

    addresses(addresses: Array<NodeAddress>): NodeStatusHelper {
        if (!Array.isArray(addresses)) { addresses = [addresses] }
        if (!this._template.addresses) this._template.addresses = addresses
        this._template.addresses = [...this._template.addresses, ...addresses]
        return this
    }

    allocatable(allocatable: {[name: string]: Quantity}): NodeStatusHelper {
        if (!this._template.allocatable) this._template.allocatable = []
        this._template.allocatable = {
            ...this._template.allocatable,
            ...allocatable
        }
        return this
    }

    capacity(capacity: {[name: string]: Quantity}): NodeStatusHelper {
        if (!this._template.capacity) this._template.capacity = []
        this._template.capacity = {
            ...this._template.capacity,
            ...capacity
        }
        return this
    }

    conditions(conditions: Array<NodeCondition>): NodeStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    config(config: NodeConfigStatus): NodeStatusHelper {
        if (!this._template.config) this._template.config = []
        this._template.config = {
            ...this._template.config,
            ...config
        }
        return this
    }

    daemonEndpoints(daemonEndpoints: NodeDaemonEndpoints): NodeStatusHelper {
        if (!this._template.daemonEndpoints) this._template.daemonEndpoints = []
        this._template.daemonEndpoints = {
            ...this._template.daemonEndpoints,
            ...daemonEndpoints
        }
        return this
    }

    images(images: Array<ContainerImage>): NodeStatusHelper {
        if (!Array.isArray(images)) { images = [images] }
        if (!this._template.images) this._template.images = images
        this._template.images = [...this._template.images, ...images]
        return this
    }

    nodeInfo(nodeInfo: NodeSystemInfo): NodeStatusHelper {
        if (!this._template.nodeInfo) this._template.nodeInfo = []
        this._template.nodeInfo = {
            ...this._template.nodeInfo,
            ...nodeInfo
        }
        return this
    }

    phase(phase: string): NodeStatusHelper {
        this._template.phase = phase
        return this
    }

    volumesAttached(volumesAttached: Array<AttachedVolume>): NodeStatusHelper {
        if (!Array.isArray(volumesAttached)) { volumesAttached = [volumesAttached] }
        if (!this._template.volumesAttached) this._template.volumesAttached = volumesAttached
        this._template.volumesAttached = [...this._template.volumesAttached, ...volumesAttached]
        return this
    }

    volumesInUse(volumesInUse: Array<string>): NodeStatusHelper {
        if (!Array.isArray(volumesInUse)) { volumesInUse = [volumesInUse] }
        if (!this._template.volumesInUse) this._template.volumesInUse = volumesInUse
        this._template.volumesInUse = [...this._template.volumesInUse, ...volumesInUse]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NodeStatusHelper.kind
        this._template.apiVersion = NodeStatusHelper.apiVersion
    }
}

/** NodeSystemInfo is a set of ids/uuids to uniquely identify the node. */
export class NodeSystemInfoHelper extends ResourceTemplate {
    static kind = 'NodeSystemInfo';
    static apiVersion = 'core/v1';

    architecture(architecture: string): NodeSystemInfoHelper {
        this._template.architecture = architecture
        return this
    }

    bootID(bootID: string): NodeSystemInfoHelper {
        this._template.bootID = bootID
        return this
    }

    containerRuntimeVersion(containerRuntimeVersion: string): NodeSystemInfoHelper {
        this._template.containerRuntimeVersion = containerRuntimeVersion
        return this
    }

    kernelVersion(kernelVersion: string): NodeSystemInfoHelper {
        this._template.kernelVersion = kernelVersion
        return this
    }

    kubeProxyVersion(kubeProxyVersion: string): NodeSystemInfoHelper {
        this._template.kubeProxyVersion = kubeProxyVersion
        return this
    }

    kubeletVersion(kubeletVersion: string): NodeSystemInfoHelper {
        this._template.kubeletVersion = kubeletVersion
        return this
    }

    machineID(machineID: string): NodeSystemInfoHelper {
        this._template.machineID = machineID
        return this
    }

    operatingSystem(operatingSystem: string): NodeSystemInfoHelper {
        this._template.operatingSystem = operatingSystem
        return this
    }

    osImage(osImage: string): NodeSystemInfoHelper {
        this._template.osImage = osImage
        return this
    }

    systemUUID(systemUUID: string): NodeSystemInfoHelper {
        this._template.systemUUID = systemUUID
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = NodeSystemInfoHelper.kind
        this._template.apiVersion = NodeSystemInfoHelper.apiVersion
    }
}

/** ObjectFieldSelector selects an APIVersioned field of an object. */
export class ObjectFieldSelectorHelper extends ResourceTemplate {
    static kind = 'ObjectFieldSelector';
    static apiVersion = 'core/v1';

    fieldPath(fieldPath: string): ObjectFieldSelectorHelper {
        this._template.fieldPath = fieldPath
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ObjectFieldSelectorHelper.kind
        this._template.apiVersion = ObjectFieldSelectorHelper.apiVersion
    }
}

/** ObjectReference contains enough information to let you inspect or modify the referred object. */
export class ObjectReferenceHelper extends ResourceTemplate {
    static kind = 'ObjectReference';
    static apiVersion = 'core/v1';

    fieldPath(fieldPath: string): ObjectReferenceHelper {
        this._template.fieldPath = fieldPath
        return this
    }

    resourceVersion(resourceVersion: string): ObjectReferenceHelper {
        this._template.resourceVersion = resourceVersion
        return this
    }

    uid(uid: string): ObjectReferenceHelper {
        this._template.uid = uid
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ObjectReferenceHelper.kind
        this._template.apiVersion = ObjectReferenceHelper.apiVersion
    }
}

/** PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes */
export class PersistentVolumeHelper extends ResourceTemplate {
    static kind = 'PersistentVolume';
    static apiVersion = 'core/v1';

    metadata(metadata: ObjectMeta): PersistentVolumeHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: PersistentVolumeSpec): PersistentVolumeHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: PersistentVolumeStatus): PersistentVolumeHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PersistentVolumeHelper.kind
        this._template.apiVersion = PersistentVolumeHelper.apiVersion
    }
}

/** PersistentVolumeClaim is a user's request for and claim to a persistent volume */
export class PersistentVolumeClaimHelper extends ResourceTemplate {
    static kind = 'PersistentVolumeClaim';
    static apiVersion = 'core/v1';

    metadata(metadata: ObjectMeta): PersistentVolumeClaimHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: PersistentVolumeClaimSpec): PersistentVolumeClaimHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: PersistentVolumeClaimStatus): PersistentVolumeClaimHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PersistentVolumeClaimHelper.kind
        this._template.apiVersion = PersistentVolumeClaimHelper.apiVersion
    }
}

/** PersistentVolumeClaimCondition contails details about state of pvc */
export class PersistentVolumeClaimConditionHelper extends ResourceTemplate {
    static kind = 'PersistentVolumeClaimCondition';
    static apiVersion = 'core/v1';

    lastProbeTime(lastProbeTime: Time): PersistentVolumeClaimConditionHelper {
        this._template.lastProbeTime = lastProbeTime
        return this
    }

    lastTransitionTime(lastTransitionTime: Time): PersistentVolumeClaimConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    message(message: string): PersistentVolumeClaimConditionHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): PersistentVolumeClaimConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): PersistentVolumeClaimConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): PersistentVolumeClaimConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PersistentVolumeClaimConditionHelper.kind
        this._template.apiVersion = PersistentVolumeClaimConditionHelper.apiVersion
    }
}

/** PersistentVolumeClaimList is a list of PersistentVolumeClaim items. */
export class PersistentVolumeClaimListHelper extends ResourceTemplate {
    static kind = 'PersistentVolumeClaimList';
    static apiVersion = 'core/v1';

    items(items: Array<PersistentVolumeClaim>): PersistentVolumeClaimListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): PersistentVolumeClaimListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PersistentVolumeClaimListHelper.kind
        this._template.apiVersion = PersistentVolumeClaimListHelper.apiVersion
    }
}

/** PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
export class PersistentVolumeClaimSpecHelper extends ResourceTemplate {
    static kind = 'PersistentVolumeClaimSpec';
    static apiVersion = 'core/v1';

    accessModes(accessModes: Array<string>): PersistentVolumeClaimSpecHelper {
        if (!Array.isArray(accessModes)) { accessModes = [accessModes] }
        if (!this._template.accessModes) this._template.accessModes = accessModes
        this._template.accessModes = [...this._template.accessModes, ...accessModes]
        return this
    }

    dataSource(dataSource: TypedLocalObjectReference): PersistentVolumeClaimSpecHelper {
        if (!this._template.dataSource) this._template.dataSource = []
        this._template.dataSource = {
            ...this._template.dataSource,
            ...dataSource
        }
        return this
    }

    resources(resources: ResourceRequirements): PersistentVolumeClaimSpecHelper {
        if (!this._template.resources) this._template.resources = []
        this._template.resources = {
            ...this._template.resources,
            ...resources
        }
        return this
    }

    selector(selector: LabelSelector): PersistentVolumeClaimSpecHelper {
        if (!this._template.selector) this._template.selector = []
        this._template.selector = {
            ...this._template.selector,
            ...selector
        }
        return this
    }

    storageClassName(storageClassName: string): PersistentVolumeClaimSpecHelper {
        this._template.storageClassName = storageClassName
        return this
    }

    volumeMode(volumeMode: string): PersistentVolumeClaimSpecHelper {
        this._template.volumeMode = volumeMode
        return this
    }

    volumeName(volumeName: string): PersistentVolumeClaimSpecHelper {
        this._template.volumeName = volumeName
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PersistentVolumeClaimSpecHelper.kind
        this._template.apiVersion = PersistentVolumeClaimSpecHelper.apiVersion
    }
}

/** PersistentVolumeClaimStatus is the current status of a persistent volume claim. */
export class PersistentVolumeClaimStatusHelper extends ResourceTemplate {
    static kind = 'PersistentVolumeClaimStatus';
    static apiVersion = 'core/v1';

    accessModes(accessModes: Array<string>): PersistentVolumeClaimStatusHelper {
        if (!Array.isArray(accessModes)) { accessModes = [accessModes] }
        if (!this._template.accessModes) this._template.accessModes = accessModes
        this._template.accessModes = [...this._template.accessModes, ...accessModes]
        return this
    }

    capacity(capacity: {[name: string]: Quantity}): PersistentVolumeClaimStatusHelper {
        if (!this._template.capacity) this._template.capacity = []
        this._template.capacity = {
            ...this._template.capacity,
            ...capacity
        }
        return this
    }

    conditions(conditions: Array<PersistentVolumeClaimCondition>): PersistentVolumeClaimStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    phase(phase: string): PersistentVolumeClaimStatusHelper {
        this._template.phase = phase
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PersistentVolumeClaimStatusHelper.kind
        this._template.apiVersion = PersistentVolumeClaimStatusHelper.apiVersion
    }
}

/** PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
export class PersistentVolumeClaimTemplateHelper extends ResourceTemplate {
    static kind = 'PersistentVolumeClaimTemplate';
    static apiVersion = 'core/v1';

    metadata(metadata: ObjectMeta): PersistentVolumeClaimTemplateHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: PersistentVolumeClaimSpec): PersistentVolumeClaimTemplateHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PersistentVolumeClaimTemplateHelper.kind
        this._template.apiVersion = PersistentVolumeClaimTemplateHelper.apiVersion
    }
}

/** PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
export class PersistentVolumeClaimVolumeSourceHelper extends ResourceTemplate {
    static kind = 'PersistentVolumeClaimVolumeSource';
    static apiVersion = 'core/v1';

    claimName(claimName: string): PersistentVolumeClaimVolumeSourceHelper {
        this._template.claimName = claimName
        return this
    }

    readOnly(readOnly: boolean): PersistentVolumeClaimVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PersistentVolumeClaimVolumeSourceHelper.kind
        this._template.apiVersion = PersistentVolumeClaimVolumeSourceHelper.apiVersion
    }
}

/** PersistentVolumeList is a list of PersistentVolume items. */
export class PersistentVolumeListHelper extends ResourceTemplate {
    static kind = 'PersistentVolumeList';
    static apiVersion = 'core/v1';

    items(items: Array<PersistentVolume>): PersistentVolumeListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): PersistentVolumeListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PersistentVolumeListHelper.kind
        this._template.apiVersion = PersistentVolumeListHelper.apiVersion
    }
}

/** PersistentVolumeSpec is the specification of a persistent volume. */
export class PersistentVolumeSpecHelper extends ResourceTemplate {
    static kind = 'PersistentVolumeSpec';
    static apiVersion = 'core/v1';

    accessModes(accessModes: Array<string>): PersistentVolumeSpecHelper {
        if (!Array.isArray(accessModes)) { accessModes = [accessModes] }
        if (!this._template.accessModes) this._template.accessModes = accessModes
        this._template.accessModes = [...this._template.accessModes, ...accessModes]
        return this
    }

    awsElasticBlockStore(awsElasticBlockStore: AWSElasticBlockStoreVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.awsElasticBlockStore) this._template.awsElasticBlockStore = []
        this._template.awsElasticBlockStore = {
            ...this._template.awsElasticBlockStore,
            ...awsElasticBlockStore
        }
        return this
    }

    azureDisk(azureDisk: AzureDiskVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.azureDisk) this._template.azureDisk = []
        this._template.azureDisk = {
            ...this._template.azureDisk,
            ...azureDisk
        }
        return this
    }

    azureFile(azureFile: AzureFilePersistentVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.azureFile) this._template.azureFile = []
        this._template.azureFile = {
            ...this._template.azureFile,
            ...azureFile
        }
        return this
    }

    capacity(capacity: {[name: string]: Quantity}): PersistentVolumeSpecHelper {
        if (!this._template.capacity) this._template.capacity = []
        this._template.capacity = {
            ...this._template.capacity,
            ...capacity
        }
        return this
    }

    cephfs(cephfs: CephFSPersistentVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.cephfs) this._template.cephfs = []
        this._template.cephfs = {
            ...this._template.cephfs,
            ...cephfs
        }
        return this
    }

    cinder(cinder: CinderPersistentVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.cinder) this._template.cinder = []
        this._template.cinder = {
            ...this._template.cinder,
            ...cinder
        }
        return this
    }

    claimRef(claimRef: ObjectReference): PersistentVolumeSpecHelper {
        if (!this._template.claimRef) this._template.claimRef = []
        this._template.claimRef = {
            ...this._template.claimRef,
            ...claimRef
        }
        return this
    }

    csi(csi: CSIPersistentVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.csi) this._template.csi = []
        this._template.csi = {
            ...this._template.csi,
            ...csi
        }
        return this
    }

    fc(fc: FCVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.fc) this._template.fc = []
        this._template.fc = {
            ...this._template.fc,
            ...fc
        }
        return this
    }

    flexVolume(flexVolume: FlexPersistentVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.flexVolume) this._template.flexVolume = []
        this._template.flexVolume = {
            ...this._template.flexVolume,
            ...flexVolume
        }
        return this
    }

    flocker(flocker: FlockerVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.flocker) this._template.flocker = []
        this._template.flocker = {
            ...this._template.flocker,
            ...flocker
        }
        return this
    }

    gcePersistentDisk(gcePersistentDisk: GCEPersistentDiskVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.gcePersistentDisk) this._template.gcePersistentDisk = []
        this._template.gcePersistentDisk = {
            ...this._template.gcePersistentDisk,
            ...gcePersistentDisk
        }
        return this
    }

    glusterfs(glusterfs: GlusterfsPersistentVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.glusterfs) this._template.glusterfs = []
        this._template.glusterfs = {
            ...this._template.glusterfs,
            ...glusterfs
        }
        return this
    }

    hostPath(hostPath: HostPathVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.hostPath) this._template.hostPath = []
        this._template.hostPath = {
            ...this._template.hostPath,
            ...hostPath
        }
        return this
    }

    iscsi(iscsi: ISCSIPersistentVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.iscsi) this._template.iscsi = []
        this._template.iscsi = {
            ...this._template.iscsi,
            ...iscsi
        }
        return this
    }

    local(local: LocalVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.local) this._template.local = []
        this._template.local = {
            ...this._template.local,
            ...local
        }
        return this
    }

    mountOptions(mountOptions: Array<string>): PersistentVolumeSpecHelper {
        if (!Array.isArray(mountOptions)) { mountOptions = [mountOptions] }
        if (!this._template.mountOptions) this._template.mountOptions = mountOptions
        this._template.mountOptions = [...this._template.mountOptions, ...mountOptions]
        return this
    }

    nfs(nfs: NFSVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.nfs) this._template.nfs = []
        this._template.nfs = {
            ...this._template.nfs,
            ...nfs
        }
        return this
    }

    nodeAffinity(nodeAffinity: VolumeNodeAffinity): PersistentVolumeSpecHelper {
        if (!this._template.nodeAffinity) this._template.nodeAffinity = []
        this._template.nodeAffinity = {
            ...this._template.nodeAffinity,
            ...nodeAffinity
        }
        return this
    }

    persistentVolumeReclaimPolicy(persistentVolumeReclaimPolicy: string): PersistentVolumeSpecHelper {
        this._template.persistentVolumeReclaimPolicy = persistentVolumeReclaimPolicy
        return this
    }

    photonPersistentDisk(photonPersistentDisk: PhotonPersistentDiskVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.photonPersistentDisk) this._template.photonPersistentDisk = []
        this._template.photonPersistentDisk = {
            ...this._template.photonPersistentDisk,
            ...photonPersistentDisk
        }
        return this
    }

    portworxVolume(portworxVolume: PortworxVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.portworxVolume) this._template.portworxVolume = []
        this._template.portworxVolume = {
            ...this._template.portworxVolume,
            ...portworxVolume
        }
        return this
    }

    quobyte(quobyte: QuobyteVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.quobyte) this._template.quobyte = []
        this._template.quobyte = {
            ...this._template.quobyte,
            ...quobyte
        }
        return this
    }

    rbd(rbd: RBDPersistentVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.rbd) this._template.rbd = []
        this._template.rbd = {
            ...this._template.rbd,
            ...rbd
        }
        return this
    }

    scaleIO(scaleIO: ScaleIOPersistentVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.scaleIO) this._template.scaleIO = []
        this._template.scaleIO = {
            ...this._template.scaleIO,
            ...scaleIO
        }
        return this
    }

    storageClassName(storageClassName: string): PersistentVolumeSpecHelper {
        this._template.storageClassName = storageClassName
        return this
    }

    storageos(storageos: StorageOSPersistentVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.storageos) this._template.storageos = []
        this._template.storageos = {
            ...this._template.storageos,
            ...storageos
        }
        return this
    }

    volumeMode(volumeMode: string): PersistentVolumeSpecHelper {
        this._template.volumeMode = volumeMode
        return this
    }

    vsphereVolume(vsphereVolume: VsphereVirtualDiskVolumeSource): PersistentVolumeSpecHelper {
        if (!this._template.vsphereVolume) this._template.vsphereVolume = []
        this._template.vsphereVolume = {
            ...this._template.vsphereVolume,
            ...vsphereVolume
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PersistentVolumeSpecHelper.kind
        this._template.apiVersion = PersistentVolumeSpecHelper.apiVersion
    }
}

/** PersistentVolumeStatus is the current status of a persistent volume. */
export class PersistentVolumeStatusHelper extends ResourceTemplate {
    static kind = 'PersistentVolumeStatus';
    static apiVersion = 'core/v1';

    message(message: string): PersistentVolumeStatusHelper {
        this._template.message = message
        return this
    }

    phase(phase: string): PersistentVolumeStatusHelper {
        this._template.phase = phase
        return this
    }

    reason(reason: string): PersistentVolumeStatusHelper {
        this._template.reason = reason
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PersistentVolumeStatusHelper.kind
        this._template.apiVersion = PersistentVolumeStatusHelper.apiVersion
    }
}

/** Represents a Photon Controller persistent disk resource. */
export class PhotonPersistentDiskVolumeSourceHelper extends ResourceTemplate {
    static kind = 'PhotonPersistentDiskVolumeSource';
    static apiVersion = 'core/v1';

    fsType(fsType: string): PhotonPersistentDiskVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    pdID(pdID: string): PhotonPersistentDiskVolumeSourceHelper {
        this._template.pdID = pdID
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PhotonPersistentDiskVolumeSourceHelper.kind
        this._template.apiVersion = PhotonPersistentDiskVolumeSourceHelper.apiVersion
    }
}

/** Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts. */
export class PodHelper extends ResourceTemplate {
    static kind = 'Pod';
    static apiVersion = 'core/v1';

    metadata(metadata: ObjectMeta): PodHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: PodSpec): PodHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: PodStatus): PodHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodHelper.kind
        this._template.apiVersion = PodHelper.apiVersion
    }
}

/** Pod affinity is a group of inter pod affinity scheduling rules. */
export class PodAffinityHelper extends ResourceTemplate {
    static kind = 'PodAffinity';
    static apiVersion = 'core/v1';

    preferredDuringSchedulingIgnoredDuringExecution(preferredDuringSchedulingIgnoredDuringExecution: Array<WeightedPodAffinityTerm>): PodAffinityHelper {
        if (!Array.isArray(preferredDuringSchedulingIgnoredDuringExecution)) { preferredDuringSchedulingIgnoredDuringExecution = [preferredDuringSchedulingIgnoredDuringExecution] }
        if (!this._template.preferredDuringSchedulingIgnoredDuringExecution) this._template.preferredDuringSchedulingIgnoredDuringExecution = preferredDuringSchedulingIgnoredDuringExecution
        this._template.preferredDuringSchedulingIgnoredDuringExecution = [...this._template.preferredDuringSchedulingIgnoredDuringExecution, ...preferredDuringSchedulingIgnoredDuringExecution]
        return this
    }

    requiredDuringSchedulingIgnoredDuringExecution(requiredDuringSchedulingIgnoredDuringExecution: Array<PodAffinityTerm>): PodAffinityHelper {
        if (!Array.isArray(requiredDuringSchedulingIgnoredDuringExecution)) { requiredDuringSchedulingIgnoredDuringExecution = [requiredDuringSchedulingIgnoredDuringExecution] }
        if (!this._template.requiredDuringSchedulingIgnoredDuringExecution) this._template.requiredDuringSchedulingIgnoredDuringExecution = requiredDuringSchedulingIgnoredDuringExecution
        this._template.requiredDuringSchedulingIgnoredDuringExecution = [...this._template.requiredDuringSchedulingIgnoredDuringExecution, ...requiredDuringSchedulingIgnoredDuringExecution]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodAffinityHelper.kind
        this._template.apiVersion = PodAffinityHelper.apiVersion
    }
}

/** Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
export class PodAffinityTermHelper extends ResourceTemplate {
    static kind = 'PodAffinityTerm';
    static apiVersion = 'core/v1';

    labelSelector(labelSelector: LabelSelector): PodAffinityTermHelper {
        if (!this._template.labelSelector) this._template.labelSelector = []
        this._template.labelSelector = {
            ...this._template.labelSelector,
            ...labelSelector
        }
        return this
    }

    namespaceSelector(namespaceSelector: LabelSelector): PodAffinityTermHelper {
        if (!this._template.namespaceSelector) this._template.namespaceSelector = []
        this._template.namespaceSelector = {
            ...this._template.namespaceSelector,
            ...namespaceSelector
        }
        return this
    }

    namespaces(namespaces: Array<string>): PodAffinityTermHelper {
        if (!Array.isArray(namespaces)) { namespaces = [namespaces] }
        if (!this._template.namespaces) this._template.namespaces = namespaces
        this._template.namespaces = [...this._template.namespaces, ...namespaces]
        return this
    }

    topologyKey(topologyKey: string): PodAffinityTermHelper {
        this._template.topologyKey = topologyKey
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodAffinityTermHelper.kind
        this._template.apiVersion = PodAffinityTermHelper.apiVersion
    }
}

/** Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
export class PodAntiAffinityHelper extends ResourceTemplate {
    static kind = 'PodAntiAffinity';
    static apiVersion = 'core/v1';

    preferredDuringSchedulingIgnoredDuringExecution(preferredDuringSchedulingIgnoredDuringExecution: Array<WeightedPodAffinityTerm>): PodAntiAffinityHelper {
        if (!Array.isArray(preferredDuringSchedulingIgnoredDuringExecution)) { preferredDuringSchedulingIgnoredDuringExecution = [preferredDuringSchedulingIgnoredDuringExecution] }
        if (!this._template.preferredDuringSchedulingIgnoredDuringExecution) this._template.preferredDuringSchedulingIgnoredDuringExecution = preferredDuringSchedulingIgnoredDuringExecution
        this._template.preferredDuringSchedulingIgnoredDuringExecution = [...this._template.preferredDuringSchedulingIgnoredDuringExecution, ...preferredDuringSchedulingIgnoredDuringExecution]
        return this
    }

    requiredDuringSchedulingIgnoredDuringExecution(requiredDuringSchedulingIgnoredDuringExecution: Array<PodAffinityTerm>): PodAntiAffinityHelper {
        if (!Array.isArray(requiredDuringSchedulingIgnoredDuringExecution)) { requiredDuringSchedulingIgnoredDuringExecution = [requiredDuringSchedulingIgnoredDuringExecution] }
        if (!this._template.requiredDuringSchedulingIgnoredDuringExecution) this._template.requiredDuringSchedulingIgnoredDuringExecution = requiredDuringSchedulingIgnoredDuringExecution
        this._template.requiredDuringSchedulingIgnoredDuringExecution = [...this._template.requiredDuringSchedulingIgnoredDuringExecution, ...requiredDuringSchedulingIgnoredDuringExecution]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodAntiAffinityHelper.kind
        this._template.apiVersion = PodAntiAffinityHelper.apiVersion
    }
}

/** PodCondition contains details for the current condition of this pod. */
export class PodConditionHelper extends ResourceTemplate {
    static kind = 'PodCondition';
    static apiVersion = 'core/v1';

    lastProbeTime(lastProbeTime: Time): PodConditionHelper {
        this._template.lastProbeTime = lastProbeTime
        return this
    }

    lastTransitionTime(lastTransitionTime: Time): PodConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    message(message: string): PodConditionHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): PodConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): PodConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): PodConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodConditionHelper.kind
        this._template.apiVersion = PodConditionHelper.apiVersion
    }
}

/** PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
export class PodDNSConfigHelper extends ResourceTemplate {
    static kind = 'PodDNSConfig';
    static apiVersion = 'core/v1';

    nameservers(nameservers: Array<string>): PodDNSConfigHelper {
        if (!Array.isArray(nameservers)) { nameservers = [nameservers] }
        if (!this._template.nameservers) this._template.nameservers = nameservers
        this._template.nameservers = [...this._template.nameservers, ...nameservers]
        return this
    }

    options(options: Array<PodDNSConfigOption>): PodDNSConfigHelper {
        if (!Array.isArray(options)) { options = [options] }
        if (!this._template.options) this._template.options = options
        this._template.options = [...this._template.options, ...options]
        return this
    }

    searches(searches: Array<string>): PodDNSConfigHelper {
        if (!Array.isArray(searches)) { searches = [searches] }
        if (!this._template.searches) this._template.searches = searches
        this._template.searches = [...this._template.searches, ...searches]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodDNSConfigHelper.kind
        this._template.apiVersion = PodDNSConfigHelper.apiVersion
    }
}

/** PodDNSConfigOption defines DNS resolver options of a pod. */
export class PodDNSConfigOptionHelper extends ResourceTemplate {
    static kind = 'PodDNSConfigOption';
    static apiVersion = 'core/v1';

    value(value: string): PodDNSConfigOptionHelper {
        this._template.value = value
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodDNSConfigOptionHelper.kind
        this._template.apiVersion = PodDNSConfigOptionHelper.apiVersion
    }
}

/**
 * IP address information for entries in the (plural) PodIPs field. Each entry includes:
 *    IP: An IP address allocated to the pod. Routable at least within the cluster.
 */
export class PodIPHelper extends ResourceTemplate {
    static kind = 'PodIP';
    static apiVersion = 'core/v1';

    ip(ip: string): PodIPHelper {
        this._template.ip = ip
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodIPHelper.kind
        this._template.apiVersion = PodIPHelper.apiVersion
    }
}

/** PodList is a list of Pods. */
export class PodListHelper extends ResourceTemplate {
    static kind = 'PodList';
    static apiVersion = 'core/v1';

    items(items: Array<Pod>): PodListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): PodListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodListHelper.kind
        this._template.apiVersion = PodListHelper.apiVersion
    }
}

/** PodReadinessGate contains the reference to a pod condition */
export class PodReadinessGateHelper extends ResourceTemplate {
    static kind = 'PodReadinessGate';
    static apiVersion = 'core/v1';

    conditionType(conditionType: string): PodReadinessGateHelper {
        this._template.conditionType = conditionType
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodReadinessGateHelper.kind
        this._template.apiVersion = PodReadinessGateHelper.apiVersion
    }
}

/** PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
export class PodSecurityContextHelper extends ResourceTemplate {
    static kind = 'PodSecurityContext';
    static apiVersion = 'core/v1';

    fsGroup(fsGroup: number): PodSecurityContextHelper {
        this._template.fsGroup = fsGroup
        return this
    }

    fsGroupChangePolicy(fsGroupChangePolicy: string): PodSecurityContextHelper {
        this._template.fsGroupChangePolicy = fsGroupChangePolicy
        return this
    }

    runAsGroup(runAsGroup: number): PodSecurityContextHelper {
        this._template.runAsGroup = runAsGroup
        return this
    }

    runAsNonRoot(runAsNonRoot: boolean): PodSecurityContextHelper {
        this._template.runAsNonRoot = runAsNonRoot
        return this
    }

    runAsUser(runAsUser: number): PodSecurityContextHelper {
        this._template.runAsUser = runAsUser
        return this
    }

    seLinuxOptions(seLinuxOptions: SELinuxOptions): PodSecurityContextHelper {
        if (!this._template.seLinuxOptions) this._template.seLinuxOptions = []
        this._template.seLinuxOptions = {
            ...this._template.seLinuxOptions,
            ...seLinuxOptions
        }
        return this
    }

    seccompProfile(seccompProfile: SeccompProfile): PodSecurityContextHelper {
        if (!this._template.seccompProfile) this._template.seccompProfile = []
        this._template.seccompProfile = {
            ...this._template.seccompProfile,
            ...seccompProfile
        }
        return this
    }

    supplementalGroups(supplementalGroups: Array<number>): PodSecurityContextHelper {
        if (!Array.isArray(supplementalGroups)) { supplementalGroups = [supplementalGroups] }
        if (!this._template.supplementalGroups) this._template.supplementalGroups = supplementalGroups
        this._template.supplementalGroups = [...this._template.supplementalGroups, ...supplementalGroups]
        return this
    }

    sysctls(sysctls: Array<Sysctl>): PodSecurityContextHelper {
        if (!Array.isArray(sysctls)) { sysctls = [sysctls] }
        if (!this._template.sysctls) this._template.sysctls = sysctls
        this._template.sysctls = [...this._template.sysctls, ...sysctls]
        return this
    }

    windowsOptions(windowsOptions: WindowsSecurityContextOptions): PodSecurityContextHelper {
        if (!this._template.windowsOptions) this._template.windowsOptions = []
        this._template.windowsOptions = {
            ...this._template.windowsOptions,
            ...windowsOptions
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodSecurityContextHelper.kind
        this._template.apiVersion = PodSecurityContextHelper.apiVersion
    }
}

/** PodSpec is a description of a pod. */
export class PodSpecHelper extends ResourceTemplate {
    static kind = 'PodSpec';
    static apiVersion = 'core/v1';

    activeDeadlineSeconds(activeDeadlineSeconds: number): PodSpecHelper {
        this._template.activeDeadlineSeconds = activeDeadlineSeconds
        return this
    }

    affinity(affinity: Affinity): PodSpecHelper {
        if (!this._template.affinity) this._template.affinity = []
        this._template.affinity = {
            ...this._template.affinity,
            ...affinity
        }
        return this
    }

    automountServiceAccountToken(automountServiceAccountToken: boolean): PodSpecHelper {
        this._template.automountServiceAccountToken = automountServiceAccountToken
        return this
    }

    containers(containers: Array<Container>): PodSpecHelper {
        if (!Array.isArray(containers)) { containers = [containers] }
        if (!this._template.containers) this._template.containers = containers
        this._template.containers = [...this._template.containers, ...containers]
        return this
    }

    dnsConfig(dnsConfig: PodDNSConfig): PodSpecHelper {
        if (!this._template.dnsConfig) this._template.dnsConfig = []
        this._template.dnsConfig = {
            ...this._template.dnsConfig,
            ...dnsConfig
        }
        return this
    }

    dnsPolicy(dnsPolicy: string): PodSpecHelper {
        this._template.dnsPolicy = dnsPolicy
        return this
    }

    enableServiceLinks(enableServiceLinks: boolean): PodSpecHelper {
        this._template.enableServiceLinks = enableServiceLinks
        return this
    }

    ephemeralContainers(ephemeralContainers: Array<EphemeralContainer>): PodSpecHelper {
        if (!Array.isArray(ephemeralContainers)) { ephemeralContainers = [ephemeralContainers] }
        if (!this._template.ephemeralContainers) this._template.ephemeralContainers = ephemeralContainers
        this._template.ephemeralContainers = [...this._template.ephemeralContainers, ...ephemeralContainers]
        return this
    }

    hostAliases(hostAliases: Array<HostAlias>): PodSpecHelper {
        if (!Array.isArray(hostAliases)) { hostAliases = [hostAliases] }
        if (!this._template.hostAliases) this._template.hostAliases = hostAliases
        this._template.hostAliases = [...this._template.hostAliases, ...hostAliases]
        return this
    }

    hostIPC(hostIPC: boolean): PodSpecHelper {
        this._template.hostIPC = hostIPC
        return this
    }

    hostNetwork(hostNetwork: boolean): PodSpecHelper {
        this._template.hostNetwork = hostNetwork
        return this
    }

    hostPID(hostPID: boolean): PodSpecHelper {
        this._template.hostPID = hostPID
        return this
    }

    hostname(hostname: string): PodSpecHelper {
        this._template.hostname = hostname
        return this
    }

    imagePullSecrets(imagePullSecrets: Array<LocalObjectReference>): PodSpecHelper {
        if (!Array.isArray(imagePullSecrets)) { imagePullSecrets = [imagePullSecrets] }
        if (!this._template.imagePullSecrets) this._template.imagePullSecrets = imagePullSecrets
        this._template.imagePullSecrets = [...this._template.imagePullSecrets, ...imagePullSecrets]
        return this
    }

    initContainers(initContainers: Array<Container>): PodSpecHelper {
        if (!Array.isArray(initContainers)) { initContainers = [initContainers] }
        if (!this._template.initContainers) this._template.initContainers = initContainers
        this._template.initContainers = [...this._template.initContainers, ...initContainers]
        return this
    }

    nodeName(nodeName: string): PodSpecHelper {
        this._template.nodeName = nodeName
        return this
    }

    nodeSelector(nodeSelector: {[name: string]: string}): PodSpecHelper {
        if (!this._template.nodeSelector) this._template.nodeSelector = []
        this._template.nodeSelector = {
            ...this._template.nodeSelector,
            ...nodeSelector
        }
        return this
    }

    overhead(overhead: {[name: string]: Quantity}): PodSpecHelper {
        if (!this._template.overhead) this._template.overhead = []
        this._template.overhead = {
            ...this._template.overhead,
            ...overhead
        }
        return this
    }

    preemptionPolicy(preemptionPolicy: string): PodSpecHelper {
        this._template.preemptionPolicy = preemptionPolicy
        return this
    }

    priority(priority: number): PodSpecHelper {
        this._template.priority = priority
        return this
    }

    priorityClassName(priorityClassName: string): PodSpecHelper {
        this._template.priorityClassName = priorityClassName
        return this
    }

    readinessGates(readinessGates: Array<PodReadinessGate>): PodSpecHelper {
        if (!Array.isArray(readinessGates)) { readinessGates = [readinessGates] }
        if (!this._template.readinessGates) this._template.readinessGates = readinessGates
        this._template.readinessGates = [...this._template.readinessGates, ...readinessGates]
        return this
    }

    restartPolicy(restartPolicy: string): PodSpecHelper {
        this._template.restartPolicy = restartPolicy
        return this
    }

    runtimeClassName(runtimeClassName: string): PodSpecHelper {
        this._template.runtimeClassName = runtimeClassName
        return this
    }

    schedulerName(schedulerName: string): PodSpecHelper {
        this._template.schedulerName = schedulerName
        return this
    }

    securityContext(securityContext: PodSecurityContext): PodSpecHelper {
        if (!this._template.securityContext) this._template.securityContext = []
        this._template.securityContext = {
            ...this._template.securityContext,
            ...securityContext
        }
        return this
    }

    serviceAccount(serviceAccount: string): PodSpecHelper {
        this._template.serviceAccount = serviceAccount
        return this
    }

    serviceAccountName(serviceAccountName: string): PodSpecHelper {
        this._template.serviceAccountName = serviceAccountName
        return this
    }

    setHostnameAsFQDN(setHostnameAsFQDN: boolean): PodSpecHelper {
        this._template.setHostnameAsFQDN = setHostnameAsFQDN
        return this
    }

    shareProcessNamespace(shareProcessNamespace: boolean): PodSpecHelper {
        this._template.shareProcessNamespace = shareProcessNamespace
        return this
    }

    subdomain(subdomain: string): PodSpecHelper {
        this._template.subdomain = subdomain
        return this
    }

    terminationGracePeriodSeconds(terminationGracePeriodSeconds: number): PodSpecHelper {
        this._template.terminationGracePeriodSeconds = terminationGracePeriodSeconds
        return this
    }

    tolerations(tolerations: Array<Toleration>): PodSpecHelper {
        if (!Array.isArray(tolerations)) { tolerations = [tolerations] }
        if (!this._template.tolerations) this._template.tolerations = tolerations
        this._template.tolerations = [...this._template.tolerations, ...tolerations]
        return this
    }

    topologySpreadConstraints(topologySpreadConstraints: Array<TopologySpreadConstraint>): PodSpecHelper {
        if (!Array.isArray(topologySpreadConstraints)) { topologySpreadConstraints = [topologySpreadConstraints] }
        if (!this._template.topologySpreadConstraints) this._template.topologySpreadConstraints = topologySpreadConstraints
        this._template.topologySpreadConstraints = [...this._template.topologySpreadConstraints, ...topologySpreadConstraints]
        return this
    }

    volumes(volumes: Array<Volume>): PodSpecHelper {
        if (!Array.isArray(volumes)) { volumes = [volumes] }
        if (!this._template.volumes) this._template.volumes = volumes
        this._template.volumes = [...this._template.volumes, ...volumes]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodSpecHelper.kind
        this._template.apiVersion = PodSpecHelper.apiVersion
    }
}

/** PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane. */
export class PodStatusHelper extends ResourceTemplate {
    static kind = 'PodStatus';
    static apiVersion = 'core/v1';

    conditions(conditions: Array<PodCondition>): PodStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    containerStatuses(containerStatuses: Array<ContainerStatus>): PodStatusHelper {
        if (!Array.isArray(containerStatuses)) { containerStatuses = [containerStatuses] }
        if (!this._template.containerStatuses) this._template.containerStatuses = containerStatuses
        this._template.containerStatuses = [...this._template.containerStatuses, ...containerStatuses]
        return this
    }

    ephemeralContainerStatuses(ephemeralContainerStatuses: Array<ContainerStatus>): PodStatusHelper {
        if (!Array.isArray(ephemeralContainerStatuses)) { ephemeralContainerStatuses = [ephemeralContainerStatuses] }
        if (!this._template.ephemeralContainerStatuses) this._template.ephemeralContainerStatuses = ephemeralContainerStatuses
        this._template.ephemeralContainerStatuses = [...this._template.ephemeralContainerStatuses, ...ephemeralContainerStatuses]
        return this
    }

    hostIP(hostIP: string): PodStatusHelper {
        this._template.hostIP = hostIP
        return this
    }

    initContainerStatuses(initContainerStatuses: Array<ContainerStatus>): PodStatusHelper {
        if (!Array.isArray(initContainerStatuses)) { initContainerStatuses = [initContainerStatuses] }
        if (!this._template.initContainerStatuses) this._template.initContainerStatuses = initContainerStatuses
        this._template.initContainerStatuses = [...this._template.initContainerStatuses, ...initContainerStatuses]
        return this
    }

    message(message: string): PodStatusHelper {
        this._template.message = message
        return this
    }

    nominatedNodeName(nominatedNodeName: string): PodStatusHelper {
        this._template.nominatedNodeName = nominatedNodeName
        return this
    }

    phase(phase: string): PodStatusHelper {
        this._template.phase = phase
        return this
    }

    podIP(podIP: string): PodStatusHelper {
        this._template.podIP = podIP
        return this
    }

    podIPs(podIPs: Array<PodIP>): PodStatusHelper {
        if (!Array.isArray(podIPs)) { podIPs = [podIPs] }
        if (!this._template.podIPs) this._template.podIPs = podIPs
        this._template.podIPs = [...this._template.podIPs, ...podIPs]
        return this
    }

    qosClass(qosClass: string): PodStatusHelper {
        this._template.qosClass = qosClass
        return this
    }

    reason(reason: string): PodStatusHelper {
        this._template.reason = reason
        return this
    }

    startTime(startTime: Time): PodStatusHelper {
        this._template.startTime = startTime
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodStatusHelper.kind
        this._template.apiVersion = PodStatusHelper.apiVersion
    }
}

/** PodTemplate describes a template for creating copies of a predefined pod. */
export class PodTemplateHelper extends ResourceTemplate {
    static kind = 'PodTemplate';
    static apiVersion = 'core/v1';

    metadata(metadata: ObjectMeta): PodTemplateHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    template(template: PodTemplateSpec): PodTemplateHelper {
        if (!this._template.template) this._template.template = []
        this._template.template = {
            ...this._template.template,
            ...template
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodTemplateHelper.kind
        this._template.apiVersion = PodTemplateHelper.apiVersion
    }
}

/** PodTemplateList is a list of PodTemplates. */
export class PodTemplateListHelper extends ResourceTemplate {
    static kind = 'PodTemplateList';
    static apiVersion = 'core/v1';

    items(items: Array<PodTemplate>): PodTemplateListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): PodTemplateListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodTemplateListHelper.kind
        this._template.apiVersion = PodTemplateListHelper.apiVersion
    }
}

/** PodTemplateSpec describes the data a pod should have when created from a template */
export class PodTemplateSpecHelper extends ResourceTemplate {
    static kind = 'PodTemplateSpec';
    static apiVersion = 'core/v1';

    metadata(metadata: ObjectMeta): PodTemplateSpecHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: PodSpec): PodTemplateSpecHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodTemplateSpecHelper.kind
        this._template.apiVersion = PodTemplateSpecHelper.apiVersion
    }
}

export class PortStatusHelper extends ResourceTemplate {
    static kind = 'PortStatus';
    static apiVersion = 'core/v1';

    error(error: string): PortStatusHelper {
        this._template.error = error
        return this
    }

    port(port: number): PortStatusHelper {
        this._template.port = port
        return this
    }

    protocol(protocol: string): PortStatusHelper {
        this._template.protocol = protocol
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PortStatusHelper.kind
        this._template.apiVersion = PortStatusHelper.apiVersion
    }
}

/** PortworxVolumeSource represents a Portworx volume resource. */
export class PortworxVolumeSourceHelper extends ResourceTemplate {
    static kind = 'PortworxVolumeSource';
    static apiVersion = 'core/v1';

    fsType(fsType: string): PortworxVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    readOnly(readOnly: boolean): PortworxVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    volumeID(volumeID: string): PortworxVolumeSourceHelper {
        this._template.volumeID = volumeID
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PortworxVolumeSourceHelper.kind
        this._template.apiVersion = PortworxVolumeSourceHelper.apiVersion
    }
}

/** An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op). */
export class PreferredSchedulingTermHelper extends ResourceTemplate {
    static kind = 'PreferredSchedulingTerm';
    static apiVersion = 'core/v1';

    preference(preference: NodeSelectorTerm): PreferredSchedulingTermHelper {
        if (!this._template.preference) this._template.preference = []
        this._template.preference = {
            ...this._template.preference,
            ...preference
        }
        return this
    }

    weight(weight: number): PreferredSchedulingTermHelper {
        this._template.weight = weight
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PreferredSchedulingTermHelper.kind
        this._template.apiVersion = PreferredSchedulingTermHelper.apiVersion
    }
}

/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
export class ProbeHelper extends ResourceTemplate {
    static kind = 'Probe';
    static apiVersion = 'core/v1';

    exec(exec: ExecAction): ProbeHelper {
        if (!this._template.exec) this._template.exec = []
        this._template.exec = {
            ...this._template.exec,
            ...exec
        }
        return this
    }

    failureThreshold(failureThreshold: number): ProbeHelper {
        this._template.failureThreshold = failureThreshold
        return this
    }

    httpGet(httpGet: HTTPGetAction): ProbeHelper {
        if (!this._template.httpGet) this._template.httpGet = []
        this._template.httpGet = {
            ...this._template.httpGet,
            ...httpGet
        }
        return this
    }

    initialDelaySeconds(initialDelaySeconds: number): ProbeHelper {
        this._template.initialDelaySeconds = initialDelaySeconds
        return this
    }

    periodSeconds(periodSeconds: number): ProbeHelper {
        this._template.periodSeconds = periodSeconds
        return this
    }

    successThreshold(successThreshold: number): ProbeHelper {
        this._template.successThreshold = successThreshold
        return this
    }

    tcpSocket(tcpSocket: TCPSocketAction): ProbeHelper {
        if (!this._template.tcpSocket) this._template.tcpSocket = []
        this._template.tcpSocket = {
            ...this._template.tcpSocket,
            ...tcpSocket
        }
        return this
    }

    terminationGracePeriodSeconds(terminationGracePeriodSeconds: number): ProbeHelper {
        this._template.terminationGracePeriodSeconds = terminationGracePeriodSeconds
        return this
    }

    timeoutSeconds(timeoutSeconds: number): ProbeHelper {
        this._template.timeoutSeconds = timeoutSeconds
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ProbeHelper.kind
        this._template.apiVersion = ProbeHelper.apiVersion
    }
}

/** Represents a projected volume source */
export class ProjectedVolumeSourceHelper extends ResourceTemplate {
    static kind = 'ProjectedVolumeSource';
    static apiVersion = 'core/v1';

    defaultMode(defaultMode: number): ProjectedVolumeSourceHelper {
        this._template.defaultMode = defaultMode
        return this
    }

    sources(sources: Array<VolumeProjection>): ProjectedVolumeSourceHelper {
        if (!Array.isArray(sources)) { sources = [sources] }
        if (!this._template.sources) this._template.sources = sources
        this._template.sources = [...this._template.sources, ...sources]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ProjectedVolumeSourceHelper.kind
        this._template.apiVersion = ProjectedVolumeSourceHelper.apiVersion
    }
}

/** Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
export class QuobyteVolumeSourceHelper extends ResourceTemplate {
    static kind = 'QuobyteVolumeSource';
    static apiVersion = 'core/v1';

    group(group: string): QuobyteVolumeSourceHelper {
        this._template.group = group
        return this
    }

    readOnly(readOnly: boolean): QuobyteVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    registry(registry: string): QuobyteVolumeSourceHelper {
        this._template.registry = registry
        return this
    }

    tenant(tenant: string): QuobyteVolumeSourceHelper {
        this._template.tenant = tenant
        return this
    }

    user(user: string): QuobyteVolumeSourceHelper {
        this._template.user = user
        return this
    }

    volume(volume: string): QuobyteVolumeSourceHelper {
        this._template.volume = volume
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = QuobyteVolumeSourceHelper.kind
        this._template.apiVersion = QuobyteVolumeSourceHelper.apiVersion
    }
}

/** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
export class RBDPersistentVolumeSourceHelper extends ResourceTemplate {
    static kind = 'RBDPersistentVolumeSource';
    static apiVersion = 'core/v1';

    fsType(fsType: string): RBDPersistentVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    image(image: string): RBDPersistentVolumeSourceHelper {
        this._template.image = image
        return this
    }

    keyring(keyring: string): RBDPersistentVolumeSourceHelper {
        this._template.keyring = keyring
        return this
    }

    monitors(monitors: Array<string>): RBDPersistentVolumeSourceHelper {
        if (!Array.isArray(monitors)) { monitors = [monitors] }
        if (!this._template.monitors) this._template.monitors = monitors
        this._template.monitors = [...this._template.monitors, ...monitors]
        return this
    }

    pool(pool: string): RBDPersistentVolumeSourceHelper {
        this._template.pool = pool
        return this
    }

    readOnly(readOnly: boolean): RBDPersistentVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    secretRef(secretRef: SecretReference): RBDPersistentVolumeSourceHelper {
        if (!this._template.secretRef) this._template.secretRef = []
        this._template.secretRef = {
            ...this._template.secretRef,
            ...secretRef
        }
        return this
    }

    user(user: string): RBDPersistentVolumeSourceHelper {
        this._template.user = user
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RBDPersistentVolumeSourceHelper.kind
        this._template.apiVersion = RBDPersistentVolumeSourceHelper.apiVersion
    }
}

/** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
export class RBDVolumeSourceHelper extends ResourceTemplate {
    static kind = 'RBDVolumeSource';
    static apiVersion = 'core/v1';

    fsType(fsType: string): RBDVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    image(image: string): RBDVolumeSourceHelper {
        this._template.image = image
        return this
    }

    keyring(keyring: string): RBDVolumeSourceHelper {
        this._template.keyring = keyring
        return this
    }

    monitors(monitors: Array<string>): RBDVolumeSourceHelper {
        if (!Array.isArray(monitors)) { monitors = [monitors] }
        if (!this._template.monitors) this._template.monitors = monitors
        this._template.monitors = [...this._template.monitors, ...monitors]
        return this
    }

    pool(pool: string): RBDVolumeSourceHelper {
        this._template.pool = pool
        return this
    }

    readOnly(readOnly: boolean): RBDVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    secretRef(secretRef: LocalObjectReference): RBDVolumeSourceHelper {
        if (!this._template.secretRef) this._template.secretRef = []
        this._template.secretRef = {
            ...this._template.secretRef,
            ...secretRef
        }
        return this
    }

    user(user: string): RBDVolumeSourceHelper {
        this._template.user = user
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RBDVolumeSourceHelper.kind
        this._template.apiVersion = RBDVolumeSourceHelper.apiVersion
    }
}

/** ReplicationController represents the configuration of a replication controller. */
export class ReplicationControllerHelper extends ResourceTemplate {
    static kind = 'ReplicationController';
    static apiVersion = 'core/v1';

    metadata(metadata: ObjectMeta): ReplicationControllerHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: ReplicationControllerSpec): ReplicationControllerHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: ReplicationControllerStatus): ReplicationControllerHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ReplicationControllerHelper.kind
        this._template.apiVersion = ReplicationControllerHelper.apiVersion
    }
}

/** ReplicationControllerCondition describes the state of a replication controller at a certain point. */
export class ReplicationControllerConditionHelper extends ResourceTemplate {
    static kind = 'ReplicationControllerCondition';
    static apiVersion = 'core/v1';

    lastTransitionTime(lastTransitionTime: Time): ReplicationControllerConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    message(message: string): ReplicationControllerConditionHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): ReplicationControllerConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): ReplicationControllerConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): ReplicationControllerConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ReplicationControllerConditionHelper.kind
        this._template.apiVersion = ReplicationControllerConditionHelper.apiVersion
    }
}

/** ReplicationControllerList is a collection of replication controllers. */
export class ReplicationControllerListHelper extends ResourceTemplate {
    static kind = 'ReplicationControllerList';
    static apiVersion = 'core/v1';

    items(items: Array<ReplicationController>): ReplicationControllerListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): ReplicationControllerListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ReplicationControllerListHelper.kind
        this._template.apiVersion = ReplicationControllerListHelper.apiVersion
    }
}

/** ReplicationControllerSpec is the specification of a replication controller. */
export class ReplicationControllerSpecHelper extends ResourceTemplate {
    static kind = 'ReplicationControllerSpec';
    static apiVersion = 'core/v1';

    minReadySeconds(minReadySeconds: number): ReplicationControllerSpecHelper {
        this._template.minReadySeconds = minReadySeconds
        return this
    }

    replicas(replicas: number): ReplicationControllerSpecHelper {
        this._template.replicas = replicas
        return this
    }

    selector(selector: {[name: string]: string}): ReplicationControllerSpecHelper {
        if (!this._template.selector) this._template.selector = []
        this._template.selector = {
            ...this._template.selector,
            ...selector
        }
        return this
    }

    template(template: PodTemplateSpec): ReplicationControllerSpecHelper {
        if (!this._template.template) this._template.template = []
        this._template.template = {
            ...this._template.template,
            ...template
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ReplicationControllerSpecHelper.kind
        this._template.apiVersion = ReplicationControllerSpecHelper.apiVersion
    }
}

/** ReplicationControllerStatus represents the current status of a replication controller. */
export class ReplicationControllerStatusHelper extends ResourceTemplate {
    static kind = 'ReplicationControllerStatus';
    static apiVersion = 'core/v1';

    availableReplicas(availableReplicas: number): ReplicationControllerStatusHelper {
        this._template.availableReplicas = availableReplicas
        return this
    }

    conditions(conditions: Array<ReplicationControllerCondition>): ReplicationControllerStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    fullyLabeledReplicas(fullyLabeledReplicas: number): ReplicationControllerStatusHelper {
        this._template.fullyLabeledReplicas = fullyLabeledReplicas
        return this
    }

    observedGeneration(observedGeneration: number): ReplicationControllerStatusHelper {
        this._template.observedGeneration = observedGeneration
        return this
    }

    readyReplicas(readyReplicas: number): ReplicationControllerStatusHelper {
        this._template.readyReplicas = readyReplicas
        return this
    }

    replicas(replicas: number): ReplicationControllerStatusHelper {
        this._template.replicas = replicas
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ReplicationControllerStatusHelper.kind
        this._template.apiVersion = ReplicationControllerStatusHelper.apiVersion
    }
}

/** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
export class ResourceFieldSelectorHelper extends ResourceTemplate {
    static kind = 'ResourceFieldSelector';
    static apiVersion = 'core/v1';

    containerName(containerName: string): ResourceFieldSelectorHelper {
        this._template.containerName = containerName
        return this
    }

    divisor(divisor: Quantity): ResourceFieldSelectorHelper {
        this._template.divisor = divisor
        return this
    }

    resource(resource: string): ResourceFieldSelectorHelper {
        this._template.resource = resource
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ResourceFieldSelectorHelper.kind
        this._template.apiVersion = ResourceFieldSelectorHelper.apiVersion
    }
}

/** ResourceQuota sets aggregate quota restrictions enforced per namespace */
export class ResourceQuotaHelper extends ResourceTemplate {
    static kind = 'ResourceQuota';
    static apiVersion = 'core/v1';

    metadata(metadata: ObjectMeta): ResourceQuotaHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: ResourceQuotaSpec): ResourceQuotaHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: ResourceQuotaStatus): ResourceQuotaHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ResourceQuotaHelper.kind
        this._template.apiVersion = ResourceQuotaHelper.apiVersion
    }
}

/** ResourceQuotaList is a list of ResourceQuota items. */
export class ResourceQuotaListHelper extends ResourceTemplate {
    static kind = 'ResourceQuotaList';
    static apiVersion = 'core/v1';

    items(items: Array<ResourceQuota>): ResourceQuotaListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): ResourceQuotaListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ResourceQuotaListHelper.kind
        this._template.apiVersion = ResourceQuotaListHelper.apiVersion
    }
}

/** ResourceQuotaSpec defines the desired hard limits to enforce for Quota. */
export class ResourceQuotaSpecHelper extends ResourceTemplate {
    static kind = 'ResourceQuotaSpec';
    static apiVersion = 'core/v1';

    hard(hard: {[name: string]: Quantity}): ResourceQuotaSpecHelper {
        if (!this._template.hard) this._template.hard = []
        this._template.hard = {
            ...this._template.hard,
            ...hard
        }
        return this
    }

    scopeSelector(scopeSelector: ScopeSelector): ResourceQuotaSpecHelper {
        if (!this._template.scopeSelector) this._template.scopeSelector = []
        this._template.scopeSelector = {
            ...this._template.scopeSelector,
            ...scopeSelector
        }
        return this
    }

    scopes(scopes: Array<string>): ResourceQuotaSpecHelper {
        if (!Array.isArray(scopes)) { scopes = [scopes] }
        if (!this._template.scopes) this._template.scopes = scopes
        this._template.scopes = [...this._template.scopes, ...scopes]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ResourceQuotaSpecHelper.kind
        this._template.apiVersion = ResourceQuotaSpecHelper.apiVersion
    }
}

/** ResourceQuotaStatus defines the enforced hard limits and observed use. */
export class ResourceQuotaStatusHelper extends ResourceTemplate {
    static kind = 'ResourceQuotaStatus';
    static apiVersion = 'core/v1';

    hard(hard: {[name: string]: Quantity}): ResourceQuotaStatusHelper {
        if (!this._template.hard) this._template.hard = []
        this._template.hard = {
            ...this._template.hard,
            ...hard
        }
        return this
    }

    used(used: {[name: string]: Quantity}): ResourceQuotaStatusHelper {
        if (!this._template.used) this._template.used = []
        this._template.used = {
            ...this._template.used,
            ...used
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ResourceQuotaStatusHelper.kind
        this._template.apiVersion = ResourceQuotaStatusHelper.apiVersion
    }
}

/** ResourceRequirements describes the compute resource requirements. */
export class ResourceRequirementsHelper extends ResourceTemplate {
    static kind = 'ResourceRequirements';
    static apiVersion = 'core/v1';

    limits(limits: {[name: string]: Quantity}): ResourceRequirementsHelper {
        if (!this._template.limits) this._template.limits = []
        this._template.limits = {
            ...this._template.limits,
            ...limits
        }
        return this
    }

    requests(requests: {[name: string]: Quantity}): ResourceRequirementsHelper {
        if (!this._template.requests) this._template.requests = []
        this._template.requests = {
            ...this._template.requests,
            ...requests
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ResourceRequirementsHelper.kind
        this._template.apiVersion = ResourceRequirementsHelper.apiVersion
    }
}

/** SELinuxOptions are the labels to be applied to the container */
export class SELinuxOptionsHelper extends ResourceTemplate {
    static kind = 'SELinuxOptions';
    static apiVersion = 'core/v1';

    level(level: string): SELinuxOptionsHelper {
        this._template.level = level
        return this
    }

    role(role: string): SELinuxOptionsHelper {
        this._template.role = role
        return this
    }

    type(type: string): SELinuxOptionsHelper {
        this._template.type = type
        return this
    }

    user(user: string): SELinuxOptionsHelper {
        this._template.user = user
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SELinuxOptionsHelper.kind
        this._template.apiVersion = SELinuxOptionsHelper.apiVersion
    }
}

/** ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume */
export class ScaleIOPersistentVolumeSourceHelper extends ResourceTemplate {
    static kind = 'ScaleIOPersistentVolumeSource';
    static apiVersion = 'core/v1';

    fsType(fsType: string): ScaleIOPersistentVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    gateway(gateway: string): ScaleIOPersistentVolumeSourceHelper {
        this._template.gateway = gateway
        return this
    }

    protectionDomain(protectionDomain: string): ScaleIOPersistentVolumeSourceHelper {
        this._template.protectionDomain = protectionDomain
        return this
    }

    readOnly(readOnly: boolean): ScaleIOPersistentVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    secretRef(secretRef: SecretReference): ScaleIOPersistentVolumeSourceHelper {
        if (!this._template.secretRef) this._template.secretRef = []
        this._template.secretRef = {
            ...this._template.secretRef,
            ...secretRef
        }
        return this
    }

    sslEnabled(sslEnabled: boolean): ScaleIOPersistentVolumeSourceHelper {
        this._template.sslEnabled = sslEnabled
        return this
    }

    storageMode(storageMode: string): ScaleIOPersistentVolumeSourceHelper {
        this._template.storageMode = storageMode
        return this
    }

    storagePool(storagePool: string): ScaleIOPersistentVolumeSourceHelper {
        this._template.storagePool = storagePool
        return this
    }

    system(system: string): ScaleIOPersistentVolumeSourceHelper {
        this._template.system = system
        return this
    }

    volumeName(volumeName: string): ScaleIOPersistentVolumeSourceHelper {
        this._template.volumeName = volumeName
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ScaleIOPersistentVolumeSourceHelper.kind
        this._template.apiVersion = ScaleIOPersistentVolumeSourceHelper.apiVersion
    }
}

/** ScaleIOVolumeSource represents a persistent ScaleIO volume */
export class ScaleIOVolumeSourceHelper extends ResourceTemplate {
    static kind = 'ScaleIOVolumeSource';
    static apiVersion = 'core/v1';

    fsType(fsType: string): ScaleIOVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    gateway(gateway: string): ScaleIOVolumeSourceHelper {
        this._template.gateway = gateway
        return this
    }

    protectionDomain(protectionDomain: string): ScaleIOVolumeSourceHelper {
        this._template.protectionDomain = protectionDomain
        return this
    }

    readOnly(readOnly: boolean): ScaleIOVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    secretRef(secretRef: LocalObjectReference): ScaleIOVolumeSourceHelper {
        if (!this._template.secretRef) this._template.secretRef = []
        this._template.secretRef = {
            ...this._template.secretRef,
            ...secretRef
        }
        return this
    }

    sslEnabled(sslEnabled: boolean): ScaleIOVolumeSourceHelper {
        this._template.sslEnabled = sslEnabled
        return this
    }

    storageMode(storageMode: string): ScaleIOVolumeSourceHelper {
        this._template.storageMode = storageMode
        return this
    }

    storagePool(storagePool: string): ScaleIOVolumeSourceHelper {
        this._template.storagePool = storagePool
        return this
    }

    system(system: string): ScaleIOVolumeSourceHelper {
        this._template.system = system
        return this
    }

    volumeName(volumeName: string): ScaleIOVolumeSourceHelper {
        this._template.volumeName = volumeName
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ScaleIOVolumeSourceHelper.kind
        this._template.apiVersion = ScaleIOVolumeSourceHelper.apiVersion
    }
}

/** A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements. */
export class ScopeSelectorHelper extends ResourceTemplate {
    static kind = 'ScopeSelector';
    static apiVersion = 'core/v1';

    matchExpressions(matchExpressions: Array<ScopedResourceSelectorRequirement>): ScopeSelectorHelper {
        if (!Array.isArray(matchExpressions)) { matchExpressions = [matchExpressions] }
        if (!this._template.matchExpressions) this._template.matchExpressions = matchExpressions
        this._template.matchExpressions = [...this._template.matchExpressions, ...matchExpressions]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ScopeSelectorHelper.kind
        this._template.apiVersion = ScopeSelectorHelper.apiVersion
    }
}

/** A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values. */
export class ScopedResourceSelectorRequirementHelper extends ResourceTemplate {
    static kind = 'ScopedResourceSelectorRequirement';
    static apiVersion = 'core/v1';

    operator(operator: string): ScopedResourceSelectorRequirementHelper {
        this._template.operator = operator
        return this
    }

    scopeName(scopeName: string): ScopedResourceSelectorRequirementHelper {
        this._template.scopeName = scopeName
        return this
    }

    values(values: Array<string>): ScopedResourceSelectorRequirementHelper {
        if (!Array.isArray(values)) { values = [values] }
        if (!this._template.values) this._template.values = values
        this._template.values = [...this._template.values, ...values]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ScopedResourceSelectorRequirementHelper.kind
        this._template.apiVersion = ScopedResourceSelectorRequirementHelper.apiVersion
    }
}

/** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
export class SeccompProfileHelper extends ResourceTemplate {
    static kind = 'SeccompProfile';
    static apiVersion = 'core/v1';

    localhostProfile(localhostProfile: string): SeccompProfileHelper {
        this._template.localhostProfile = localhostProfile
        return this
    }

    type(type: string): SeccompProfileHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SeccompProfileHelper.kind
        this._template.apiVersion = SeccompProfileHelper.apiVersion
    }
}

/** Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes. */
export class SecretHelper extends ResourceTemplate {
    static kind = 'Secret';
    static apiVersion = 'core/v1';

    data(data: {[name: string]: string}): SecretHelper {
        if (!this._template.data) this._template.data = []
        this._template.data = {
            ...this._template.data,
            ...data
        }
        return this
    }

    immutable(immutable: boolean): SecretHelper {
        this._template.immutable = immutable
        return this
    }

    metadata(metadata: ObjectMeta): SecretHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    stringData(stringData: {[name: string]: string}): SecretHelper {
        if (!this._template.stringData) this._template.stringData = []
        this._template.stringData = {
            ...this._template.stringData,
            ...stringData
        }
        return this
    }

    type(type: string): SecretHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SecretHelper.kind
        this._template.apiVersion = SecretHelper.apiVersion
    }
}

/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 *
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
export class SecretEnvSourceHelper extends ResourceTemplate {
    static kind = 'SecretEnvSource';
    static apiVersion = 'core/v1';

    optional(optional: boolean): SecretEnvSourceHelper {
        this._template.optional = optional
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SecretEnvSourceHelper.kind
        this._template.apiVersion = SecretEnvSourceHelper.apiVersion
    }
}

/** SecretKeySelector selects a key of a Secret. */
export class SecretKeySelectorHelper extends ResourceTemplate {
    static kind = 'SecretKeySelector';
    static apiVersion = 'core/v1';

    key(key: string): SecretKeySelectorHelper {
        this._template.key = key
        return this
    }

    optional(optional: boolean): SecretKeySelectorHelper {
        this._template.optional = optional
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SecretKeySelectorHelper.kind
        this._template.apiVersion = SecretKeySelectorHelper.apiVersion
    }
}

/** SecretList is a list of Secret. */
export class SecretListHelper extends ResourceTemplate {
    static kind = 'SecretList';
    static apiVersion = 'core/v1';

    items(items: Array<Secret>): SecretListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): SecretListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SecretListHelper.kind
        this._template.apiVersion = SecretListHelper.apiVersion
    }
}

/**
 * Adapts a secret into a projected volume.
 *
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 */
export class SecretProjectionHelper extends ResourceTemplate {
    static kind = 'SecretProjection';
    static apiVersion = 'core/v1';

    items(items: Array<KeyToPath>): SecretProjectionHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    optional(optional: boolean): SecretProjectionHelper {
        this._template.optional = optional
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SecretProjectionHelper.kind
        this._template.apiVersion = SecretProjectionHelper.apiVersion
    }
}

/** SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace */
export class SecretReferenceHelper extends ResourceTemplate {
    static kind = 'SecretReference';
    static apiVersion = 'core/v1';

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SecretReferenceHelper.kind
        this._template.apiVersion = SecretReferenceHelper.apiVersion
    }
}

/**
 * Adapts a Secret into a volume.
 *
 * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
 */
export class SecretVolumeSourceHelper extends ResourceTemplate {
    static kind = 'SecretVolumeSource';
    static apiVersion = 'core/v1';

    defaultMode(defaultMode: number): SecretVolumeSourceHelper {
        this._template.defaultMode = defaultMode
        return this
    }

    items(items: Array<KeyToPath>): SecretVolumeSourceHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    optional(optional: boolean): SecretVolumeSourceHelper {
        this._template.optional = optional
        return this
    }

    secretName(secretName: string): SecretVolumeSourceHelper {
        this._template.secretName = secretName
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SecretVolumeSourceHelper.kind
        this._template.apiVersion = SecretVolumeSourceHelper.apiVersion
    }
}

/** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
export class SecurityContextHelper extends ResourceTemplate {
    static kind = 'SecurityContext';
    static apiVersion = 'core/v1';

    allowPrivilegeEscalation(allowPrivilegeEscalation: boolean): SecurityContextHelper {
        this._template.allowPrivilegeEscalation = allowPrivilegeEscalation
        return this
    }

    capabilities(capabilities: Capabilities): SecurityContextHelper {
        if (!this._template.capabilities) this._template.capabilities = []
        this._template.capabilities = {
            ...this._template.capabilities,
            ...capabilities
        }
        return this
    }

    privileged(privileged: boolean): SecurityContextHelper {
        this._template.privileged = privileged
        return this
    }

    procMount(procMount: string): SecurityContextHelper {
        this._template.procMount = procMount
        return this
    }

    readOnlyRootFilesystem(readOnlyRootFilesystem: boolean): SecurityContextHelper {
        this._template.readOnlyRootFilesystem = readOnlyRootFilesystem
        return this
    }

    runAsGroup(runAsGroup: number): SecurityContextHelper {
        this._template.runAsGroup = runAsGroup
        return this
    }

    runAsNonRoot(runAsNonRoot: boolean): SecurityContextHelper {
        this._template.runAsNonRoot = runAsNonRoot
        return this
    }

    runAsUser(runAsUser: number): SecurityContextHelper {
        this._template.runAsUser = runAsUser
        return this
    }

    seLinuxOptions(seLinuxOptions: SELinuxOptions): SecurityContextHelper {
        if (!this._template.seLinuxOptions) this._template.seLinuxOptions = []
        this._template.seLinuxOptions = {
            ...this._template.seLinuxOptions,
            ...seLinuxOptions
        }
        return this
    }

    seccompProfile(seccompProfile: SeccompProfile): SecurityContextHelper {
        if (!this._template.seccompProfile) this._template.seccompProfile = []
        this._template.seccompProfile = {
            ...this._template.seccompProfile,
            ...seccompProfile
        }
        return this
    }

    windowsOptions(windowsOptions: WindowsSecurityContextOptions): SecurityContextHelper {
        if (!this._template.windowsOptions) this._template.windowsOptions = []
        this._template.windowsOptions = {
            ...this._template.windowsOptions,
            ...windowsOptions
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SecurityContextHelper.kind
        this._template.apiVersion = SecurityContextHelper.apiVersion
    }
}

/** Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy. */
export class ServiceHelper extends ResourceTemplate {
    static kind = 'Service';
    static apiVersion = 'core/v1';

    metadata(metadata: ObjectMeta): ServiceHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: ServiceSpec): ServiceHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: ServiceStatus): ServiceHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ServiceHelper.kind
        this._template.apiVersion = ServiceHelper.apiVersion
    }
}

/** ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets */
export class ServiceAccountHelper extends ResourceTemplate {
    static kind = 'ServiceAccount';
    static apiVersion = 'core/v1';

    automountServiceAccountToken(automountServiceAccountToken: boolean): ServiceAccountHelper {
        this._template.automountServiceAccountToken = automountServiceAccountToken
        return this
    }

    imagePullSecrets(imagePullSecrets: Array<LocalObjectReference>): ServiceAccountHelper {
        if (!Array.isArray(imagePullSecrets)) { imagePullSecrets = [imagePullSecrets] }
        if (!this._template.imagePullSecrets) this._template.imagePullSecrets = imagePullSecrets
        this._template.imagePullSecrets = [...this._template.imagePullSecrets, ...imagePullSecrets]
        return this
    }

    metadata(metadata: ObjectMeta): ServiceAccountHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    secrets(secrets: Array<ObjectReference>): ServiceAccountHelper {
        if (!Array.isArray(secrets)) { secrets = [secrets] }
        if (!this._template.secrets) this._template.secrets = secrets
        this._template.secrets = [...this._template.secrets, ...secrets]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ServiceAccountHelper.kind
        this._template.apiVersion = ServiceAccountHelper.apiVersion
    }
}

/** ServiceAccountList is a list of ServiceAccount objects */
export class ServiceAccountListHelper extends ResourceTemplate {
    static kind = 'ServiceAccountList';
    static apiVersion = 'core/v1';

    items(items: Array<ServiceAccount>): ServiceAccountListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): ServiceAccountListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ServiceAccountListHelper.kind
        this._template.apiVersion = ServiceAccountListHelper.apiVersion
    }
}

/** ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
export class ServiceAccountTokenProjectionHelper extends ResourceTemplate {
    static kind = 'ServiceAccountTokenProjection';
    static apiVersion = 'core/v1';

    audience(audience: string): ServiceAccountTokenProjectionHelper {
        this._template.audience = audience
        return this
    }

    expirationSeconds(expirationSeconds: number): ServiceAccountTokenProjectionHelper {
        this._template.expirationSeconds = expirationSeconds
        return this
    }

    path(path: string): ServiceAccountTokenProjectionHelper {
        this._template.path = path
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ServiceAccountTokenProjectionHelper.kind
        this._template.apiVersion = ServiceAccountTokenProjectionHelper.apiVersion
    }
}

/** ServiceList holds a list of services. */
export class ServiceListHelper extends ResourceTemplate {
    static kind = 'ServiceList';
    static apiVersion = 'core/v1';

    items(items: Array<Service>): ServiceListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): ServiceListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ServiceListHelper.kind
        this._template.apiVersion = ServiceListHelper.apiVersion
    }
}

/** ServicePort contains information on service's port. */
export class ServicePortHelper extends ResourceTemplate {
    static kind = 'ServicePort';
    static apiVersion = 'core/v1';

    appProtocol(appProtocol: string): ServicePortHelper {
        this._template.appProtocol = appProtocol
        return this
    }

    nodePort(nodePort: number): ServicePortHelper {
        this._template.nodePort = nodePort
        return this
    }

    port(port: number): ServicePortHelper {
        this._template.port = port
        return this
    }

    protocol(protocol: string): ServicePortHelper {
        this._template.protocol = protocol
        return this
    }

    targetPort(targetPort: number | string): ServicePortHelper {
        this._template.targetPort = targetPort
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ServicePortHelper.kind
        this._template.apiVersion = ServicePortHelper.apiVersion
    }
}

/** ServiceSpec describes the attributes that a user creates on a service. */
export class ServiceSpecHelper extends ResourceTemplate {
    static kind = 'ServiceSpec';
    static apiVersion = 'core/v1';

    allocateLoadBalancerNodePorts(allocateLoadBalancerNodePorts: boolean): ServiceSpecHelper {
        this._template.allocateLoadBalancerNodePorts = allocateLoadBalancerNodePorts
        return this
    }

    clusterIP(clusterIP: string): ServiceSpecHelper {
        this._template.clusterIP = clusterIP
        return this
    }

    clusterIPs(clusterIPs: Array<string>): ServiceSpecHelper {
        if (!Array.isArray(clusterIPs)) { clusterIPs = [clusterIPs] }
        if (!this._template.clusterIPs) this._template.clusterIPs = clusterIPs
        this._template.clusterIPs = [...this._template.clusterIPs, ...clusterIPs]
        return this
    }

    externalIPs(externalIPs: Array<string>): ServiceSpecHelper {
        if (!Array.isArray(externalIPs)) { externalIPs = [externalIPs] }
        if (!this._template.externalIPs) this._template.externalIPs = externalIPs
        this._template.externalIPs = [...this._template.externalIPs, ...externalIPs]
        return this
    }

    externalName(externalName: string): ServiceSpecHelper {
        this._template.externalName = externalName
        return this
    }

    externalTrafficPolicy(externalTrafficPolicy: string): ServiceSpecHelper {
        this._template.externalTrafficPolicy = externalTrafficPolicy
        return this
    }

    healthCheckNodePort(healthCheckNodePort: number): ServiceSpecHelper {
        this._template.healthCheckNodePort = healthCheckNodePort
        return this
    }

    internalTrafficPolicy(internalTrafficPolicy: string): ServiceSpecHelper {
        this._template.internalTrafficPolicy = internalTrafficPolicy
        return this
    }

    ipFamilies(ipFamilies: Array<string>): ServiceSpecHelper {
        if (!Array.isArray(ipFamilies)) { ipFamilies = [ipFamilies] }
        if (!this._template.ipFamilies) this._template.ipFamilies = ipFamilies
        this._template.ipFamilies = [...this._template.ipFamilies, ...ipFamilies]
        return this
    }

    ipFamilyPolicy(ipFamilyPolicy: string): ServiceSpecHelper {
        this._template.ipFamilyPolicy = ipFamilyPolicy
        return this
    }

    loadBalancerClass(loadBalancerClass: string): ServiceSpecHelper {
        this._template.loadBalancerClass = loadBalancerClass
        return this
    }

    loadBalancerIP(loadBalancerIP: string): ServiceSpecHelper {
        this._template.loadBalancerIP = loadBalancerIP
        return this
    }

    loadBalancerSourceRanges(loadBalancerSourceRanges: Array<string>): ServiceSpecHelper {
        if (!Array.isArray(loadBalancerSourceRanges)) { loadBalancerSourceRanges = [loadBalancerSourceRanges] }
        if (!this._template.loadBalancerSourceRanges) this._template.loadBalancerSourceRanges = loadBalancerSourceRanges
        this._template.loadBalancerSourceRanges = [...this._template.loadBalancerSourceRanges, ...loadBalancerSourceRanges]
        return this
    }

    ports(ports: Array<ServicePort>): ServiceSpecHelper {
        if (!Array.isArray(ports)) { ports = [ports] }
        if (!this._template.ports) this._template.ports = ports
        this._template.ports = [...this._template.ports, ...ports]
        return this
    }

    publishNotReadyAddresses(publishNotReadyAddresses: boolean): ServiceSpecHelper {
        this._template.publishNotReadyAddresses = publishNotReadyAddresses
        return this
    }

    selector(selector: {[name: string]: string}): ServiceSpecHelper {
        if (!this._template.selector) this._template.selector = []
        this._template.selector = {
            ...this._template.selector,
            ...selector
        }
        return this
    }

    sessionAffinity(sessionAffinity: string): ServiceSpecHelper {
        this._template.sessionAffinity = sessionAffinity
        return this
    }

    sessionAffinityConfig(sessionAffinityConfig: SessionAffinityConfig): ServiceSpecHelper {
        if (!this._template.sessionAffinityConfig) this._template.sessionAffinityConfig = []
        this._template.sessionAffinityConfig = {
            ...this._template.sessionAffinityConfig,
            ...sessionAffinityConfig
        }
        return this
    }

    topologyKeys(topologyKeys: Array<string>): ServiceSpecHelper {
        if (!Array.isArray(topologyKeys)) { topologyKeys = [topologyKeys] }
        if (!this._template.topologyKeys) this._template.topologyKeys = topologyKeys
        this._template.topologyKeys = [...this._template.topologyKeys, ...topologyKeys]
        return this
    }

    type(type: string): ServiceSpecHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ServiceSpecHelper.kind
        this._template.apiVersion = ServiceSpecHelper.apiVersion
    }
}

/** ServiceStatus represents the current status of a service. */
export class ServiceStatusHelper extends ResourceTemplate {
    static kind = 'ServiceStatus';
    static apiVersion = 'core/v1';

    conditions(conditions: Array<Condition>): ServiceStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    loadBalancer(loadBalancer: LoadBalancerStatus): ServiceStatusHelper {
        if (!this._template.loadBalancer) this._template.loadBalancer = []
        this._template.loadBalancer = {
            ...this._template.loadBalancer,
            ...loadBalancer
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ServiceStatusHelper.kind
        this._template.apiVersion = ServiceStatusHelper.apiVersion
    }
}

/** SessionAffinityConfig represents the configurations of session affinity. */
export class SessionAffinityConfigHelper extends ResourceTemplate {
    static kind = 'SessionAffinityConfig';
    static apiVersion = 'core/v1';

    clientIP(clientIP: ClientIPConfig): SessionAffinityConfigHelper {
        if (!this._template.clientIP) this._template.clientIP = []
        this._template.clientIP = {
            ...this._template.clientIP,
            ...clientIP
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SessionAffinityConfigHelper.kind
        this._template.apiVersion = SessionAffinityConfigHelper.apiVersion
    }
}

/** Represents a StorageOS persistent volume resource. */
export class StorageOSPersistentVolumeSourceHelper extends ResourceTemplate {
    static kind = 'StorageOSPersistentVolumeSource';
    static apiVersion = 'core/v1';

    fsType(fsType: string): StorageOSPersistentVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    readOnly(readOnly: boolean): StorageOSPersistentVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    secretRef(secretRef: ObjectReference): StorageOSPersistentVolumeSourceHelper {
        if (!this._template.secretRef) this._template.secretRef = []
        this._template.secretRef = {
            ...this._template.secretRef,
            ...secretRef
        }
        return this
    }

    volumeName(volumeName: string): StorageOSPersistentVolumeSourceHelper {
        this._template.volumeName = volumeName
        return this
    }

    volumeNamespace(volumeNamespace: string): StorageOSPersistentVolumeSourceHelper {
        this._template.volumeNamespace = volumeNamespace
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StorageOSPersistentVolumeSourceHelper.kind
        this._template.apiVersion = StorageOSPersistentVolumeSourceHelper.apiVersion
    }
}

/** Represents a StorageOS persistent volume resource. */
export class StorageOSVolumeSourceHelper extends ResourceTemplate {
    static kind = 'StorageOSVolumeSource';
    static apiVersion = 'core/v1';

    fsType(fsType: string): StorageOSVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    readOnly(readOnly: boolean): StorageOSVolumeSourceHelper {
        this._template.readOnly = readOnly
        return this
    }

    secretRef(secretRef: LocalObjectReference): StorageOSVolumeSourceHelper {
        if (!this._template.secretRef) this._template.secretRef = []
        this._template.secretRef = {
            ...this._template.secretRef,
            ...secretRef
        }
        return this
    }

    volumeName(volumeName: string): StorageOSVolumeSourceHelper {
        this._template.volumeName = volumeName
        return this
    }

    volumeNamespace(volumeNamespace: string): StorageOSVolumeSourceHelper {
        this._template.volumeNamespace = volumeNamespace
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StorageOSVolumeSourceHelper.kind
        this._template.apiVersion = StorageOSVolumeSourceHelper.apiVersion
    }
}

/** Sysctl defines a kernel parameter to be set */
export class SysctlHelper extends ResourceTemplate {
    static kind = 'Sysctl';
    static apiVersion = 'core/v1';

    value(value: string): SysctlHelper {
        this._template.value = value
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SysctlHelper.kind
        this._template.apiVersion = SysctlHelper.apiVersion
    }
}

/** TCPSocketAction describes an action based on opening a socket */
export class TCPSocketActionHelper extends ResourceTemplate {
    static kind = 'TCPSocketAction';
    static apiVersion = 'core/v1';

    host(host: string): TCPSocketActionHelper {
        this._template.host = host
        return this
    }

    port(port: number | string): TCPSocketActionHelper {
        this._template.port = port
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = TCPSocketActionHelper.kind
        this._template.apiVersion = TCPSocketActionHelper.apiVersion
    }
}

/** The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint. */
export class TaintHelper extends ResourceTemplate {
    static kind = 'Taint';
    static apiVersion = 'core/v1';

    effect(effect: string): TaintHelper {
        this._template.effect = effect
        return this
    }

    key(key: string): TaintHelper {
        this._template.key = key
        return this
    }

    timeAdded(timeAdded: Time): TaintHelper {
        this._template.timeAdded = timeAdded
        return this
    }

    value(value: string): TaintHelper {
        this._template.value = value
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = TaintHelper.kind
        this._template.apiVersion = TaintHelper.apiVersion
    }
}

/** The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>. */
export class TolerationHelper extends ResourceTemplate {
    static kind = 'Toleration';
    static apiVersion = 'core/v1';

    effect(effect: string): TolerationHelper {
        this._template.effect = effect
        return this
    }

    key(key: string): TolerationHelper {
        this._template.key = key
        return this
    }

    operator(operator: string): TolerationHelper {
        this._template.operator = operator
        return this
    }

    tolerationSeconds(tolerationSeconds: number): TolerationHelper {
        this._template.tolerationSeconds = tolerationSeconds
        return this
    }

    value(value: string): TolerationHelper {
        this._template.value = value
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = TolerationHelper.kind
        this._template.apiVersion = TolerationHelper.apiVersion
    }
}

/** A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future. */
export class TopologySelectorLabelRequirementHelper extends ResourceTemplate {
    static kind = 'TopologySelectorLabelRequirement';
    static apiVersion = 'core/v1';

    key(key: string): TopologySelectorLabelRequirementHelper {
        this._template.key = key
        return this
    }

    values(values: Array<string>): TopologySelectorLabelRequirementHelper {
        if (!Array.isArray(values)) { values = [values] }
        if (!this._template.values) this._template.values = values
        this._template.values = [...this._template.values, ...values]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = TopologySelectorLabelRequirementHelper.kind
        this._template.apiVersion = TopologySelectorLabelRequirementHelper.apiVersion
    }
}

/** A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future. */
export class TopologySelectorTermHelper extends ResourceTemplate {
    static kind = 'TopologySelectorTerm';
    static apiVersion = 'core/v1';

    matchLabelExpressions(matchLabelExpressions: Array<TopologySelectorLabelRequirement>): TopologySelectorTermHelper {
        if (!Array.isArray(matchLabelExpressions)) { matchLabelExpressions = [matchLabelExpressions] }
        if (!this._template.matchLabelExpressions) this._template.matchLabelExpressions = matchLabelExpressions
        this._template.matchLabelExpressions = [...this._template.matchLabelExpressions, ...matchLabelExpressions]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = TopologySelectorTermHelper.kind
        this._template.apiVersion = TopologySelectorTermHelper.apiVersion
    }
}

/** TopologySpreadConstraint specifies how to spread matching pods among the given topology. */
export class TopologySpreadConstraintHelper extends ResourceTemplate {
    static kind = 'TopologySpreadConstraint';
    static apiVersion = 'core/v1';

    labelSelector(labelSelector: LabelSelector): TopologySpreadConstraintHelper {
        if (!this._template.labelSelector) this._template.labelSelector = []
        this._template.labelSelector = {
            ...this._template.labelSelector,
            ...labelSelector
        }
        return this
    }

    maxSkew(maxSkew: number): TopologySpreadConstraintHelper {
        this._template.maxSkew = maxSkew
        return this
    }

    topologyKey(topologyKey: string): TopologySpreadConstraintHelper {
        this._template.topologyKey = topologyKey
        return this
    }

    whenUnsatisfiable(whenUnsatisfiable: string): TopologySpreadConstraintHelper {
        this._template.whenUnsatisfiable = whenUnsatisfiable
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = TopologySpreadConstraintHelper.kind
        this._template.apiVersion = TopologySpreadConstraintHelper.apiVersion
    }
}

/** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
export class TypedLocalObjectReferenceHelper extends ResourceTemplate {
    static kind = 'TypedLocalObjectReference';
    static apiVersion = 'core/v1';

    apiGroup(apiGroup: string): TypedLocalObjectReferenceHelper {
        this._template.apiGroup = apiGroup
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = TypedLocalObjectReferenceHelper.kind
        this._template.apiVersion = TypedLocalObjectReferenceHelper.apiVersion
    }
}

/** Volume represents a named volume in a pod that may be accessed by any container in the pod. */
export class VolumeHelper extends ResourceTemplate {
    static kind = 'Volume';
    static apiVersion = 'core/v1';

    awsElasticBlockStore(awsElasticBlockStore: AWSElasticBlockStoreVolumeSource): VolumeHelper {
        if (!this._template.awsElasticBlockStore) this._template.awsElasticBlockStore = []
        this._template.awsElasticBlockStore = {
            ...this._template.awsElasticBlockStore,
            ...awsElasticBlockStore
        }
        return this
    }

    azureDisk(azureDisk: AzureDiskVolumeSource): VolumeHelper {
        if (!this._template.azureDisk) this._template.azureDisk = []
        this._template.azureDisk = {
            ...this._template.azureDisk,
            ...azureDisk
        }
        return this
    }

    azureFile(azureFile: AzureFileVolumeSource): VolumeHelper {
        if (!this._template.azureFile) this._template.azureFile = []
        this._template.azureFile = {
            ...this._template.azureFile,
            ...azureFile
        }
        return this
    }

    cephfs(cephfs: CephFSVolumeSource): VolumeHelper {
        if (!this._template.cephfs) this._template.cephfs = []
        this._template.cephfs = {
            ...this._template.cephfs,
            ...cephfs
        }
        return this
    }

    cinder(cinder: CinderVolumeSource): VolumeHelper {
        if (!this._template.cinder) this._template.cinder = []
        this._template.cinder = {
            ...this._template.cinder,
            ...cinder
        }
        return this
    }

    configMap(configMap: ConfigMapVolumeSource): VolumeHelper {
        if (!this._template.configMap) this._template.configMap = []
        this._template.configMap = {
            ...this._template.configMap,
            ...configMap
        }
        return this
    }

    csi(csi: CSIVolumeSource): VolumeHelper {
        if (!this._template.csi) this._template.csi = []
        this._template.csi = {
            ...this._template.csi,
            ...csi
        }
        return this
    }

    downwardAPI(downwardAPI: DownwardAPIVolumeSource): VolumeHelper {
        if (!this._template.downwardAPI) this._template.downwardAPI = []
        this._template.downwardAPI = {
            ...this._template.downwardAPI,
            ...downwardAPI
        }
        return this
    }

    emptyDir(emptyDir: EmptyDirVolumeSource): VolumeHelper {
        if (!this._template.emptyDir) this._template.emptyDir = []
        this._template.emptyDir = {
            ...this._template.emptyDir,
            ...emptyDir
        }
        return this
    }

    ephemeral(ephemeral: EphemeralVolumeSource): VolumeHelper {
        if (!this._template.ephemeral) this._template.ephemeral = []
        this._template.ephemeral = {
            ...this._template.ephemeral,
            ...ephemeral
        }
        return this
    }

    fc(fc: FCVolumeSource): VolumeHelper {
        if (!this._template.fc) this._template.fc = []
        this._template.fc = {
            ...this._template.fc,
            ...fc
        }
        return this
    }

    flexVolume(flexVolume: FlexVolumeSource): VolumeHelper {
        if (!this._template.flexVolume) this._template.flexVolume = []
        this._template.flexVolume = {
            ...this._template.flexVolume,
            ...flexVolume
        }
        return this
    }

    flocker(flocker: FlockerVolumeSource): VolumeHelper {
        if (!this._template.flocker) this._template.flocker = []
        this._template.flocker = {
            ...this._template.flocker,
            ...flocker
        }
        return this
    }

    gcePersistentDisk(gcePersistentDisk: GCEPersistentDiskVolumeSource): VolumeHelper {
        if (!this._template.gcePersistentDisk) this._template.gcePersistentDisk = []
        this._template.gcePersistentDisk = {
            ...this._template.gcePersistentDisk,
            ...gcePersistentDisk
        }
        return this
    }

    gitRepo(gitRepo: GitRepoVolumeSource): VolumeHelper {
        if (!this._template.gitRepo) this._template.gitRepo = []
        this._template.gitRepo = {
            ...this._template.gitRepo,
            ...gitRepo
        }
        return this
    }

    glusterfs(glusterfs: GlusterfsVolumeSource): VolumeHelper {
        if (!this._template.glusterfs) this._template.glusterfs = []
        this._template.glusterfs = {
            ...this._template.glusterfs,
            ...glusterfs
        }
        return this
    }

    hostPath(hostPath: HostPathVolumeSource): VolumeHelper {
        if (!this._template.hostPath) this._template.hostPath = []
        this._template.hostPath = {
            ...this._template.hostPath,
            ...hostPath
        }
        return this
    }

    iscsi(iscsi: ISCSIVolumeSource): VolumeHelper {
        if (!this._template.iscsi) this._template.iscsi = []
        this._template.iscsi = {
            ...this._template.iscsi,
            ...iscsi
        }
        return this
    }

    nfs(nfs: NFSVolumeSource): VolumeHelper {
        if (!this._template.nfs) this._template.nfs = []
        this._template.nfs = {
            ...this._template.nfs,
            ...nfs
        }
        return this
    }

    persistentVolumeClaim(persistentVolumeClaim: PersistentVolumeClaimVolumeSource): VolumeHelper {
        if (!this._template.persistentVolumeClaim) this._template.persistentVolumeClaim = []
        this._template.persistentVolumeClaim = {
            ...this._template.persistentVolumeClaim,
            ...persistentVolumeClaim
        }
        return this
    }

    photonPersistentDisk(photonPersistentDisk: PhotonPersistentDiskVolumeSource): VolumeHelper {
        if (!this._template.photonPersistentDisk) this._template.photonPersistentDisk = []
        this._template.photonPersistentDisk = {
            ...this._template.photonPersistentDisk,
            ...photonPersistentDisk
        }
        return this
    }

    portworxVolume(portworxVolume: PortworxVolumeSource): VolumeHelper {
        if (!this._template.portworxVolume) this._template.portworxVolume = []
        this._template.portworxVolume = {
            ...this._template.portworxVolume,
            ...portworxVolume
        }
        return this
    }

    projected(projected: ProjectedVolumeSource): VolumeHelper {
        if (!this._template.projected) this._template.projected = []
        this._template.projected = {
            ...this._template.projected,
            ...projected
        }
        return this
    }

    quobyte(quobyte: QuobyteVolumeSource): VolumeHelper {
        if (!this._template.quobyte) this._template.quobyte = []
        this._template.quobyte = {
            ...this._template.quobyte,
            ...quobyte
        }
        return this
    }

    rbd(rbd: RBDVolumeSource): VolumeHelper {
        if (!this._template.rbd) this._template.rbd = []
        this._template.rbd = {
            ...this._template.rbd,
            ...rbd
        }
        return this
    }

    scaleIO(scaleIO: ScaleIOVolumeSource): VolumeHelper {
        if (!this._template.scaleIO) this._template.scaleIO = []
        this._template.scaleIO = {
            ...this._template.scaleIO,
            ...scaleIO
        }
        return this
    }

    secret(secret: SecretVolumeSource): VolumeHelper {
        if (!this._template.secret) this._template.secret = []
        this._template.secret = {
            ...this._template.secret,
            ...secret
        }
        return this
    }

    storageos(storageos: StorageOSVolumeSource): VolumeHelper {
        if (!this._template.storageos) this._template.storageos = []
        this._template.storageos = {
            ...this._template.storageos,
            ...storageos
        }
        return this
    }

    vsphereVolume(vsphereVolume: VsphereVirtualDiskVolumeSource): VolumeHelper {
        if (!this._template.vsphereVolume) this._template.vsphereVolume = []
        this._template.vsphereVolume = {
            ...this._template.vsphereVolume,
            ...vsphereVolume
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = VolumeHelper.kind
        this._template.apiVersion = VolumeHelper.apiVersion
    }
}

/** volumeDevice describes a mapping of a raw block device within a container. */
export class VolumeDeviceHelper extends ResourceTemplate {
    static kind = 'VolumeDevice';
    static apiVersion = 'core/v1';

    devicePath(devicePath: string): VolumeDeviceHelper {
        this._template.devicePath = devicePath
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = VolumeDeviceHelper.kind
        this._template.apiVersion = VolumeDeviceHelper.apiVersion
    }
}

/** VolumeMount describes a mounting of a Volume within a container. */
export class VolumeMountHelper extends ResourceTemplate {
    static kind = 'VolumeMount';
    static apiVersion = 'core/v1';

    mountPath(mountPath: string): VolumeMountHelper {
        this._template.mountPath = mountPath
        return this
    }

    mountPropagation(mountPropagation: string): VolumeMountHelper {
        this._template.mountPropagation = mountPropagation
        return this
    }

    readOnly(readOnly: boolean): VolumeMountHelper {
        this._template.readOnly = readOnly
        return this
    }

    subPath(subPath: string): VolumeMountHelper {
        this._template.subPath = subPath
        return this
    }

    subPathExpr(subPathExpr: string): VolumeMountHelper {
        this._template.subPathExpr = subPathExpr
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = VolumeMountHelper.kind
        this._template.apiVersion = VolumeMountHelper.apiVersion
    }
}

/** VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from. */
export class VolumeNodeAffinityHelper extends ResourceTemplate {
    static kind = 'VolumeNodeAffinity';
    static apiVersion = 'core/v1';

    required(required: NodeSelector): VolumeNodeAffinityHelper {
        if (!this._template.required) this._template.required = []
        this._template.required = {
            ...this._template.required,
            ...required
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = VolumeNodeAffinityHelper.kind
        this._template.apiVersion = VolumeNodeAffinityHelper.apiVersion
    }
}

/** Projection that may be projected along with other supported volume types */
export class VolumeProjectionHelper extends ResourceTemplate {
    static kind = 'VolumeProjection';
    static apiVersion = 'core/v1';

    configMap(configMap: ConfigMapProjection): VolumeProjectionHelper {
        if (!this._template.configMap) this._template.configMap = []
        this._template.configMap = {
            ...this._template.configMap,
            ...configMap
        }
        return this
    }

    downwardAPI(downwardAPI: DownwardAPIProjection): VolumeProjectionHelper {
        if (!this._template.downwardAPI) this._template.downwardAPI = []
        this._template.downwardAPI = {
            ...this._template.downwardAPI,
            ...downwardAPI
        }
        return this
    }

    secret(secret: SecretProjection): VolumeProjectionHelper {
        if (!this._template.secret) this._template.secret = []
        this._template.secret = {
            ...this._template.secret,
            ...secret
        }
        return this
    }

    serviceAccountToken(serviceAccountToken: ServiceAccountTokenProjection): VolumeProjectionHelper {
        if (!this._template.serviceAccountToken) this._template.serviceAccountToken = []
        this._template.serviceAccountToken = {
            ...this._template.serviceAccountToken,
            ...serviceAccountToken
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = VolumeProjectionHelper.kind
        this._template.apiVersion = VolumeProjectionHelper.apiVersion
    }
}

/** Represents a vSphere volume resource. */
export class VsphereVirtualDiskVolumeSourceHelper extends ResourceTemplate {
    static kind = 'VsphereVirtualDiskVolumeSource';
    static apiVersion = 'core/v1';

    fsType(fsType: string): VsphereVirtualDiskVolumeSourceHelper {
        this._template.fsType = fsType
        return this
    }

    storagePolicyID(storagePolicyID: string): VsphereVirtualDiskVolumeSourceHelper {
        this._template.storagePolicyID = storagePolicyID
        return this
    }

    storagePolicyName(storagePolicyName: string): VsphereVirtualDiskVolumeSourceHelper {
        this._template.storagePolicyName = storagePolicyName
        return this
    }

    volumePath(volumePath: string): VsphereVirtualDiskVolumeSourceHelper {
        this._template.volumePath = volumePath
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = VsphereVirtualDiskVolumeSourceHelper.kind
        this._template.apiVersion = VsphereVirtualDiskVolumeSourceHelper.apiVersion
    }
}

/** The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s) */
export class WeightedPodAffinityTermHelper extends ResourceTemplate {
    static kind = 'WeightedPodAffinityTerm';
    static apiVersion = 'core/v1';

    podAffinityTerm(podAffinityTerm: PodAffinityTerm): WeightedPodAffinityTermHelper {
        if (!this._template.podAffinityTerm) this._template.podAffinityTerm = []
        this._template.podAffinityTerm = {
            ...this._template.podAffinityTerm,
            ...podAffinityTerm
        }
        return this
    }

    weight(weight: number): WeightedPodAffinityTermHelper {
        this._template.weight = weight
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = WeightedPodAffinityTermHelper.kind
        this._template.apiVersion = WeightedPodAffinityTermHelper.apiVersion
    }
}

/** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
export class WindowsSecurityContextOptionsHelper extends ResourceTemplate {
    static kind = 'WindowsSecurityContextOptions';
    static apiVersion = 'core/v1';

    gmsaCredentialSpec(gmsaCredentialSpec: string): WindowsSecurityContextOptionsHelper {
        this._template.gmsaCredentialSpec = gmsaCredentialSpec
        return this
    }

    gmsaCredentialSpecName(gmsaCredentialSpecName: string): WindowsSecurityContextOptionsHelper {
        this._template.gmsaCredentialSpecName = gmsaCredentialSpecName
        return this
    }

    runAsUserName(runAsUserName: string): WindowsSecurityContextOptionsHelper {
        this._template.runAsUserName = runAsUserName
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = WindowsSecurityContextOptionsHelper.kind
        this._template.apiVersion = WindowsSecurityContextOptionsHelper.apiVersion
    }
}
