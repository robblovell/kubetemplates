import { ResourceTemplate, Template } from "../resourceTemplate";
import { AWSElasticBlockStoreVolumeSource, Affinity, AttachedVolume, AzureDiskVolumeSource, AzureFilePersistentVolumeSource, AzureFileVolumeSource, Binding, CSIPersistentVolumeSource, CSIVolumeSource, Capabilities, CephFSPersistentVolumeSource, CephFSVolumeSource, CinderPersistentVolumeSource, CinderVolumeSource, ClientIPConfig, ComponentCondition, ComponentStatus, ComponentStatusList, ConfigMap, ConfigMapEnvSource, ConfigMapKeySelector, ConfigMapList, ConfigMapNodeConfigSource, ConfigMapProjection, ConfigMapVolumeSource, Container, ContainerImage, ContainerPort, ContainerState, ContainerStateRunning, ContainerStateTerminated, ContainerStateWaiting, ContainerStatus, DaemonEndpoint, DownwardAPIProjection, DownwardAPIVolumeFile, DownwardAPIVolumeSource, EmptyDirVolumeSource, EndpointAddress, EndpointPort, EndpointSubset, Endpoints, EndpointsList, EnvFromSource, EnvVar, EnvVarSource, EphemeralContainer, EphemeralContainers, EphemeralVolumeSource, Event, EventList, EventSeries, EventSource, ExecAction, FCVolumeSource, FlexPersistentVolumeSource, FlexVolumeSource, FlockerVolumeSource, GCEPersistentDiskVolumeSource, GitRepoVolumeSource, GlusterfsPersistentVolumeSource, GlusterfsVolumeSource, HTTPGetAction, HTTPHeader, Handler, HostAlias, HostPathVolumeSource, ISCSIPersistentVolumeSource, ISCSIVolumeSource, KeyToPath, Lifecycle, LimitRange, LimitRangeItem, LimitRangeList, LimitRangeSpec, LoadBalancerIngress, LoadBalancerStatus, LocalObjectReference, LocalVolumeSource, NFSVolumeSource, Namespace, NamespaceCondition, NamespaceList, NamespaceSpec, NamespaceStatus, Node, NodeAddress, NodeAffinity, NodeCondition, NodeConfigSource, NodeConfigStatus, NodeDaemonEndpoints, NodeList, NodeSelector, NodeSelectorRequirement, NodeSelectorTerm, NodeSpec, NodeStatus, NodeSystemInfo, ObjectFieldSelector, ObjectReference, PersistentVolume, PersistentVolumeClaim, PersistentVolumeClaimCondition, PersistentVolumeClaimList, PersistentVolumeClaimSpec, PersistentVolumeClaimStatus, PersistentVolumeClaimTemplate, PersistentVolumeClaimVolumeSource, PersistentVolumeList, PersistentVolumeSpec, PersistentVolumeStatus, PhotonPersistentDiskVolumeSource, Pod, PodAffinity, PodAffinityTerm, PodAntiAffinity, PodCondition, PodDNSConfig, PodDNSConfigOption, PodIP, PodList, PodReadinessGate, PodSecurityContext, PodSpec, PodStatus, PodTemplate, PodTemplateList, PodTemplateSpec, PortStatus, PortworxVolumeSource, PreferredSchedulingTerm, Probe, ProjectedVolumeSource, QuobyteVolumeSource, RBDPersistentVolumeSource, RBDVolumeSource, ReplicationController, ReplicationControllerCondition, ReplicationControllerList, ReplicationControllerSpec, ReplicationControllerStatus, ResourceFieldSelector, ResourceQuota, ResourceQuotaList, ResourceQuotaSpec, ResourceQuotaStatus, ResourceRequirements, SELinuxOptions, ScaleIOPersistentVolumeSource, ScaleIOVolumeSource, ScopeSelector, ScopedResourceSelectorRequirement, SeccompProfile, Secret, SecretEnvSource, SecretKeySelector, SecretList, SecretProjection, SecretReference, SecretVolumeSource, SecurityContext, Service, ServiceAccount, ServiceAccountList, ServiceAccountTokenProjection, ServiceList, ServicePort, ServiceSpec, ServiceStatus, SessionAffinityConfig, StorageOSPersistentVolumeSource, StorageOSVolumeSource, Sysctl, TCPSocketAction, Taint, Toleration, TopologySelectorLabelRequirement, TopologySelectorTerm, TopologySpreadConstraint, TypedLocalObjectReference, Volume, VolumeDevice, VolumeMount, VolumeNodeAffinity, VolumeProjection, VsphereVirtualDiskVolumeSource, WeightedPodAffinityTerm, WindowsSecurityContextOptions } from "./v1";
import { Condition, LabelSelector, ListMeta, MicroTime, ObjectMeta, Time } from "../meta/v1";
import { Quantity } from "../api/resource";

export interface AWSElasticBlockStoreVolumeSourceHelper extends AWSElasticBlockStoreVolumeSource {
    $fsType(x: any): any;
    $partition(x: any): any;
    $readOnly(x: any): any;
    $volumeID(x: any): any;
}

/**
 * Represents a Persistent Disk resource in AWS.
 *
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 */
export class AWSElasticBlockStoreVolumeSourceHelper extends Template implements AWSElasticBlockStoreVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _partition: any;
    get partition(): any /*number*/ {
        return this._partition
    }
    set partition(x: any /*number*/) {
        this._partition = x
    }
    setPartition(x: any /*number*/) {
        this.partition = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _volumeID: any;
    get volumeID(): any /*string*/ {
        return this._volumeID
    }
    set volumeID(x: any /*string*/) {
        this._volumeID = x
    }
    setVolumeID(x: any /*string*/) {
        this.volumeID = x; return this
    }
}

export interface AffinityHelper extends Affinity {
    $nodeAffinity(x: any): any;
    $podAffinity(x: any): any;
    $podAntiAffinity(x: any): any;
}

/** Affinity is a group of affinity scheduling rules. */
export class AffinityHelper extends Template implements AffinityHelper {
    constructor(obj: any) {
        super(obj)
    }

    _nodeAffinity: any;
    get nodeAffinity(): any /*NodeAffinityHelper*/ {
        return this._nodeAffinity
    }
    set nodeAffinity(x: any /*NodeAffinityHelper*/) {
        this._nodeAffinity = x
    }
    setNodeAffinity(x: any /*NodeAffinityHelper*/) {
        this.nodeAffinity = x; return this
    }

    _podAffinity: any;
    get podAffinity(): any /*PodAffinityHelper*/ {
        return this._podAffinity
    }
    set podAffinity(x: any /*PodAffinityHelper*/) {
        this._podAffinity = x
    }
    setPodAffinity(x: any /*PodAffinityHelper*/) {
        this.podAffinity = x; return this
    }

    _podAntiAffinity: any;
    get podAntiAffinity(): any /*PodAntiAffinityHelper*/ {
        return this._podAntiAffinity
    }
    set podAntiAffinity(x: any /*PodAntiAffinityHelper*/) {
        this._podAntiAffinity = x
    }
    setPodAntiAffinity(x: any /*PodAntiAffinityHelper*/) {
        this.podAntiAffinity = x; return this
    }
}

export interface AttachedVolumeHelper extends AttachedVolume {
    $devicePath(x: any): any;
}

/** AttachedVolume describes a volume attached to a node */
export class AttachedVolumeHelper extends Template implements AttachedVolumeHelper {
    constructor(obj: any) {
        super(obj)
    }

    _devicePath: any;
    get devicePath(): any /*string*/ {
        return this._devicePath
    }
    set devicePath(x: any /*string*/) {
        this._devicePath = x
    }
    setDevicePath(x: any /*string*/) {
        this.devicePath = x; return this
    }
}

export interface AzureDiskVolumeSourceHelper extends AzureDiskVolumeSource {
    $cachingMode(x: any): any;
    $diskName(x: any): any;
    $diskURI(x: any): any;
    $fsType(x: any): any;
    $readOnly(x: any): any;
}

/** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
export class AzureDiskVolumeSourceHelper extends Template implements AzureDiskVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _cachingMode: any;
    get cachingMode(): any /*string*/ {
        return this._cachingMode
    }
    set cachingMode(x: any /*string*/) {
        this._cachingMode = x
    }
    setCachingMode(x: any /*string*/) {
        this.cachingMode = x; return this
    }

    _diskName: any;
    get diskName(): any /*string*/ {
        return this._diskName
    }
    set diskName(x: any /*string*/) {
        this._diskName = x
    }
    setDiskName(x: any /*string*/) {
        this.diskName = x; return this
    }

    _diskURI: any;
    get diskURI(): any /*string*/ {
        return this._diskURI
    }
    set diskURI(x: any /*string*/) {
        this._diskURI = x
    }
    setDiskURI(x: any /*string*/) {
        this.diskURI = x; return this
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }
}

export interface AzureFilePersistentVolumeSourceHelper extends AzureFilePersistentVolumeSource {
    $readOnly(x: any): any;
    $secretName(x: any): any;
    $secretNamespace(x: any): any;
    $shareName(x: any): any;
}

/** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export class AzureFilePersistentVolumeSourceHelper extends Template implements AzureFilePersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _secretName: any;
    get secretName(): any /*string*/ {
        return this._secretName
    }
    set secretName(x: any /*string*/) {
        this._secretName = x
    }
    setSecretName(x: any /*string*/) {
        this.secretName = x; return this
    }

    _secretNamespace: any;
    get secretNamespace(): any /*string*/ {
        return this._secretNamespace
    }
    set secretNamespace(x: any /*string*/) {
        this._secretNamespace = x
    }
    setSecretNamespace(x: any /*string*/) {
        this.secretNamespace = x; return this
    }

    _shareName: any;
    get shareName(): any /*string*/ {
        return this._shareName
    }
    set shareName(x: any /*string*/) {
        this._shareName = x
    }
    setShareName(x: any /*string*/) {
        this.shareName = x; return this
    }
}

export interface AzureFileVolumeSourceHelper extends AzureFileVolumeSource {
    $readOnly(x: any): any;
    $secretName(x: any): any;
    $shareName(x: any): any;
}

/** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export class AzureFileVolumeSourceHelper extends Template implements AzureFileVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _secretName: any;
    get secretName(): any /*string*/ {
        return this._secretName
    }
    set secretName(x: any /*string*/) {
        this._secretName = x
    }
    setSecretName(x: any /*string*/) {
        this.secretName = x; return this
    }

    _shareName: any;
    get shareName(): any /*string*/ {
        return this._shareName
    }
    set shareName(x: any /*string*/) {
        this._shareName = x
    }
    setShareName(x: any /*string*/) {
        this.shareName = x; return this
    }
}

export interface BindingHelper extends Binding {
    $metadata(x: any): any;
    $target(x: any): any;
}

/** Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead. */
export class BindingHelper extends ResourceTemplate implements BindingHelper {
    static kind = 'Binding';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, BindingHelper.kind, BindingHelper.apiVersion)
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

    _target: any;
    get target(): any /*ObjectReferenceHelper*/ {
        return this._target
    }
    set target(x: any /*ObjectReferenceHelper*/) {
        this._target = x
    }
    setTarget(x: any /*ObjectReferenceHelper*/) {
        this.target = x; return this
    }
}

export interface CSIPersistentVolumeSourceHelper extends CSIPersistentVolumeSource {
    $controllerExpandSecretRef(x: any): any;
    $controllerPublishSecretRef(x: any): any;
    $driver(x: any): any;
    $fsType(x: any): any;
    $nodePublishSecretRef(x: any): any;
    $nodeStageSecretRef(x: any): any;
    $readOnly(x: any): any;
    $volumeAttributes(x: any): any;
    $volumeHandle(x: any): any;
}

/** Represents storage that is managed by an external CSI volume driver (Beta feature) */
export class CSIPersistentVolumeSourceHelper extends Template implements CSIPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _controllerExpandSecretRef: any;
    get controllerExpandSecretRef(): any /*SecretReferenceHelper*/ {
        return this._controllerExpandSecretRef
    }
    set controllerExpandSecretRef(x: any /*SecretReferenceHelper*/) {
        this._controllerExpandSecretRef = x
    }
    setControllerExpandSecretRef(x: any /*SecretReferenceHelper*/) {
        this.controllerExpandSecretRef = x; return this
    }

    _controllerPublishSecretRef: any;
    get controllerPublishSecretRef(): any /*SecretReferenceHelper*/ {
        return this._controllerPublishSecretRef
    }
    set controllerPublishSecretRef(x: any /*SecretReferenceHelper*/) {
        this._controllerPublishSecretRef = x
    }
    setControllerPublishSecretRef(x: any /*SecretReferenceHelper*/) {
        this.controllerPublishSecretRef = x; return this
    }

    _driver: any;
    get driver(): any /*string*/ {
        return this._driver
    }
    set driver(x: any /*string*/) {
        this._driver = x
    }
    setDriver(x: any /*string*/) {
        this.driver = x; return this
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _nodePublishSecretRef: any;
    get nodePublishSecretRef(): any /*SecretReferenceHelper*/ {
        return this._nodePublishSecretRef
    }
    set nodePublishSecretRef(x: any /*SecretReferenceHelper*/) {
        this._nodePublishSecretRef = x
    }
    setNodePublishSecretRef(x: any /*SecretReferenceHelper*/) {
        this.nodePublishSecretRef = x; return this
    }

    _nodeStageSecretRef: any;
    get nodeStageSecretRef(): any /*SecretReferenceHelper*/ {
        return this._nodeStageSecretRef
    }
    set nodeStageSecretRef(x: any /*SecretReferenceHelper*/) {
        this._nodeStageSecretRef = x
    }
    setNodeStageSecretRef(x: any /*SecretReferenceHelper*/) {
        this.nodeStageSecretRef = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _volumeAttributes: any;
    get volumeAttributes(): any /*any*/ {
        return this._volumeAttributes
    }
    set volumeAttributes(x: any /*any*/) {
        this._volumeAttributes = this.set(this.volumeAttributes, x)
    }
    setVolumeAttributes(x: any /*any*/) {
        this.volumeAttributes = x; return this
    }

    _volumeHandle: any;
    get volumeHandle(): any /*string*/ {
        return this._volumeHandle
    }
    set volumeHandle(x: any /*string*/) {
        this._volumeHandle = x
    }
    setVolumeHandle(x: any /*string*/) {
        this.volumeHandle = x; return this
    }
}

export interface CSIVolumeSourceHelper extends CSIVolumeSource {
    $driver(x: any): any;
    $fsType(x: any): any;
    $nodePublishSecretRef(x: any): any;
    $readOnly(x: any): any;
    $volumeAttributes(x: any): any;
}

/** Represents a source location of a volume to mount, managed by an external CSI driver */
export class CSIVolumeSourceHelper extends Template implements CSIVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _driver: any;
    get driver(): any /*string*/ {
        return this._driver
    }
    set driver(x: any /*string*/) {
        this._driver = x
    }
    setDriver(x: any /*string*/) {
        this.driver = x; return this
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _nodePublishSecretRef: any;
    get nodePublishSecretRef(): any /*LocalObjectReferenceHelper*/ {
        return this._nodePublishSecretRef
    }
    set nodePublishSecretRef(x: any /*LocalObjectReferenceHelper*/) {
        this._nodePublishSecretRef = x
    }
    setNodePublishSecretRef(x: any /*LocalObjectReferenceHelper*/) {
        this.nodePublishSecretRef = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _volumeAttributes: any;
    get volumeAttributes(): any /*any*/ {
        return this._volumeAttributes
    }
    set volumeAttributes(x: any /*any*/) {
        this._volumeAttributes = this.set(this.volumeAttributes, x)
    }
    setVolumeAttributes(x: any /*any*/) {
        this.volumeAttributes = x; return this
    }
}

export interface CapabilitiesHelper extends Capabilities {
    $add(x: any): any;
    $drop(x: any): any;
}

/** Adds and removes POSIX capabilities from running containers. */
export class CapabilitiesHelper extends Template implements CapabilitiesHelper {
    constructor(obj: any) {
        super(obj)
    }

    _add: any;
    get add(): any /*Array<string>*/ {
        return this._add
    }
    set add(x: any /*Array<string>*/) {
        this._add = this.set(this.add, x)
    }
    setAdd(x: any /*Array<string>*/) {
        this.add = x; return this
    }

    _drop: any;
    get drop(): any /*Array<string>*/ {
        return this._drop
    }
    set drop(x: any /*Array<string>*/) {
        this._drop = this.set(this.drop, x)
    }
    setDrop(x: any /*Array<string>*/) {
        this.drop = x; return this
    }
}

export interface CephFSPersistentVolumeSourceHelper extends CephFSPersistentVolumeSource {
    $monitors(x: any): any;
    $path(x: any): any;
    $readOnly(x: any): any;
    $secretFile(x: any): any;
    $secretRef(x: any): any;
    $user(x: any): any;
}

/** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export class CephFSPersistentVolumeSourceHelper extends Template implements CephFSPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _monitors: any;
    get monitors(): any /*Array<string>*/ {
        return this._monitors
    }
    set monitors(x: any /*Array<string>*/) {
        this._monitors = this.set(this.monitors, x)
    }
    setMonitors(x: any /*Array<string>*/) {
        this.monitors = x; return this
    }

    _path: any;
    get path(): any /*string*/ {
        return this._path
    }
    set path(x: any /*string*/) {
        this._path = x
    }
    setPath(x: any /*string*/) {
        this.path = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _secretFile: any;
    get secretFile(): any /*string*/ {
        return this._secretFile
    }
    set secretFile(x: any /*string*/) {
        this._secretFile = x
    }
    setSecretFile(x: any /*string*/) {
        this.secretFile = x; return this
    }

    _secretRef: any;
    get secretRef(): any /*SecretReferenceHelper*/ {
        return this._secretRef
    }
    set secretRef(x: any /*SecretReferenceHelper*/) {
        this._secretRef = x
    }
    setSecretRef(x: any /*SecretReferenceHelper*/) {
        this.secretRef = x; return this
    }

    _user: any;
    get user(): any /*string*/ {
        return this._user
    }
    set user(x: any /*string*/) {
        this._user = x
    }
    setUser(x: any /*string*/) {
        this.user = x; return this
    }
}

export interface CephFSVolumeSourceHelper extends CephFSVolumeSource {
    $monitors(x: any): any;
    $path(x: any): any;
    $readOnly(x: any): any;
    $secretFile(x: any): any;
    $secretRef(x: any): any;
    $user(x: any): any;
}

/** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export class CephFSVolumeSourceHelper extends Template implements CephFSVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _monitors: any;
    get monitors(): any /*Array<string>*/ {
        return this._monitors
    }
    set monitors(x: any /*Array<string>*/) {
        this._monitors = this.set(this.monitors, x)
    }
    setMonitors(x: any /*Array<string>*/) {
        this.monitors = x; return this
    }

    _path: any;
    get path(): any /*string*/ {
        return this._path
    }
    set path(x: any /*string*/) {
        this._path = x
    }
    setPath(x: any /*string*/) {
        this.path = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _secretFile: any;
    get secretFile(): any /*string*/ {
        return this._secretFile
    }
    set secretFile(x: any /*string*/) {
        this._secretFile = x
    }
    setSecretFile(x: any /*string*/) {
        this.secretFile = x; return this
    }

    _secretRef: any;
    get secretRef(): any /*LocalObjectReferenceHelper*/ {
        return this._secretRef
    }
    set secretRef(x: any /*LocalObjectReferenceHelper*/) {
        this._secretRef = x
    }
    setSecretRef(x: any /*LocalObjectReferenceHelper*/) {
        this.secretRef = x; return this
    }

    _user: any;
    get user(): any /*string*/ {
        return this._user
    }
    set user(x: any /*string*/) {
        this._user = x
    }
    setUser(x: any /*string*/) {
        this.user = x; return this
    }
}

export interface CinderPersistentVolumeSourceHelper extends CinderPersistentVolumeSource {
    $fsType(x: any): any;
    $readOnly(x: any): any;
    $secretRef(x: any): any;
    $volumeID(x: any): any;
}

/** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export class CinderPersistentVolumeSourceHelper extends Template implements CinderPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _secretRef: any;
    get secretRef(): any /*SecretReferenceHelper*/ {
        return this._secretRef
    }
    set secretRef(x: any /*SecretReferenceHelper*/) {
        this._secretRef = x
    }
    setSecretRef(x: any /*SecretReferenceHelper*/) {
        this.secretRef = x; return this
    }

    _volumeID: any;
    get volumeID(): any /*string*/ {
        return this._volumeID
    }
    set volumeID(x: any /*string*/) {
        this._volumeID = x
    }
    setVolumeID(x: any /*string*/) {
        this.volumeID = x; return this
    }
}

export interface CinderVolumeSourceHelper extends CinderVolumeSource {
    $fsType(x: any): any;
    $readOnly(x: any): any;
    $secretRef(x: any): any;
    $volumeID(x: any): any;
}

/** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export class CinderVolumeSourceHelper extends Template implements CinderVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _secretRef: any;
    get secretRef(): any /*LocalObjectReferenceHelper*/ {
        return this._secretRef
    }
    set secretRef(x: any /*LocalObjectReferenceHelper*/) {
        this._secretRef = x
    }
    setSecretRef(x: any /*LocalObjectReferenceHelper*/) {
        this.secretRef = x; return this
    }

    _volumeID: any;
    get volumeID(): any /*string*/ {
        return this._volumeID
    }
    set volumeID(x: any /*string*/) {
        this._volumeID = x
    }
    setVolumeID(x: any /*string*/) {
        this.volumeID = x; return this
    }
}

export interface ClientIPConfigHelper extends ClientIPConfig {
    $timeoutSeconds(x: any): any;
}

/** ClientIPConfig represents the configurations of Client IP based session affinity. */
export class ClientIPConfigHelper extends Template implements ClientIPConfigHelper {
    constructor(obj: any) {
        super(obj)
    }

    _timeoutSeconds: any;
    get timeoutSeconds(): any /*number*/ {
        return this._timeoutSeconds
    }
    set timeoutSeconds(x: any /*number*/) {
        this._timeoutSeconds = x
    }
    setTimeoutSeconds(x: any /*number*/) {
        this.timeoutSeconds = x; return this
    }
}

export interface ComponentConditionHelper extends ComponentCondition {
    $error(x: any): any;
    $message(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** Information about the condition of a component. */
export class ComponentConditionHelper extends Template implements ComponentConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _error: any;
    get error(): any /*string*/ {
        return this._error
    }
    set error(x: any /*string*/) {
        this._error = x
    }
    setError(x: any /*string*/) {
        this.error = x; return this
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

    _status: any;
    get status(): any /*string*/ {
        return this._status
    }
    set status(x: any /*string*/) {
        this._status = x
    }
    setStatus(x: any /*string*/) {
        this.status = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface ComponentStatusHelper extends ComponentStatus {
    $conditions(x: any): any;
    $metadata(x: any): any;
}

/** ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+ */
export class ComponentStatusHelper extends ResourceTemplate implements ComponentStatusHelper {
    static kind = 'ComponentStatus';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ComponentStatusHelper.kind, ComponentStatusHelper.apiVersion)
    }

    _conditions: any;
    get conditions(): any /*Array<ComponentCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<ComponentCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<ComponentCondition>*/) {
        this.conditions = x; return this
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
}

export interface ComponentStatusListHelper extends ComponentStatusList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** Status of all the conditions for the component as a list of ComponentStatus objects. Deprecated: This API is deprecated in v1.19+ */
export class ComponentStatusListHelper extends ResourceTemplate implements ComponentStatusListHelper {
    static kind = 'ComponentStatusList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ComponentStatusListHelper.kind, ComponentStatusListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<ComponentStatus>*/ {
        return this._items
    }
    set items(x: any /*Array<ComponentStatus>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<ComponentStatus>*/) {
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

export interface ConfigMapHelper extends ConfigMap {
    $binaryData(x: any): any;
    $data(x: any): any;
    $immutable(x: any): any;
    $metadata(x: any): any;
}

/** ConfigMap holds configuration data for pods to consume. */
export class ConfigMapHelper extends ResourceTemplate implements ConfigMapHelper {
    static kind = 'ConfigMap';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ConfigMapHelper.kind, ConfigMapHelper.apiVersion)
    }

    _binaryData: any;
    get binaryData(): any /*any*/ {
        return this._binaryData
    }
    set binaryData(x: any /*any*/) {
        this._binaryData = this.set(this.binaryData, x)
    }
    setBinaryData(x: any /*any*/) {
        this.binaryData = x; return this
    }

    _data: any;
    get data(): any /*any*/ {
        return this._data
    }
    set data(x: any /*any*/) {
        this._data = this.set(this.data, x)
    }
    setData(x: any /*any*/) {
        this.data = x; return this
    }

    _immutable: any;
    get immutable(): any /*boolean*/ {
        return this._immutable
    }
    set immutable(x: any /*boolean*/) {
        this._immutable = x
    }
    setImmutable(x: any /*boolean*/) {
        this.immutable = x; return this
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
}

export interface ConfigMapEnvSourceHelper extends ConfigMapEnvSource {
    $optional(x: any): any;
}

/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 *
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export class ConfigMapEnvSourceHelper extends Template implements ConfigMapEnvSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _optional: any;
    get optional(): any /*boolean*/ {
        return this._optional
    }
    set optional(x: any /*boolean*/) {
        this._optional = x
    }
    setOptional(x: any /*boolean*/) {
        this.optional = x; return this
    }
}

export interface ConfigMapKeySelectorHelper extends ConfigMapKeySelector {
    $key(x: any): any;
    $optional(x: any): any;
}

/** Selects a key from a ConfigMap. */
export class ConfigMapKeySelectorHelper extends Template implements ConfigMapKeySelectorHelper {
    constructor(obj: any) {
        super(obj)
    }

    _key: any;
    get key(): any /*string*/ {
        return this._key
    }
    set key(x: any /*string*/) {
        this._key = x
    }
    setKey(x: any /*string*/) {
        this.key = x; return this
    }

    _optional: any;
    get optional(): any /*boolean*/ {
        return this._optional
    }
    set optional(x: any /*boolean*/) {
        this._optional = x
    }
    setOptional(x: any /*boolean*/) {
        this.optional = x; return this
    }
}

export interface ConfigMapListHelper extends ConfigMapList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** ConfigMapList is a resource containing a list of ConfigMap objects. */
export class ConfigMapListHelper extends ResourceTemplate implements ConfigMapListHelper {
    static kind = 'ConfigMapList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ConfigMapListHelper.kind, ConfigMapListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<ConfigMap>*/ {
        return this._items
    }
    set items(x: any /*Array<ConfigMap>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<ConfigMap>*/) {
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

export interface ConfigMapNodeConfigSourceHelper extends ConfigMapNodeConfigSource {
    $kubeletConfigKey(x: any): any;
    $resourceVersion(x: any): any;
    $uid(x: any): any;
}

/** ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node. */
export class ConfigMapNodeConfigSourceHelper extends Template implements ConfigMapNodeConfigSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _kubeletConfigKey: any;
    get kubeletConfigKey(): any /*string*/ {
        return this._kubeletConfigKey
    }
    set kubeletConfigKey(x: any /*string*/) {
        this._kubeletConfigKey = x
    }
    setKubeletConfigKey(x: any /*string*/) {
        this.kubeletConfigKey = x; return this
    }

    _resourceVersion: any;
    get resourceVersion(): any /*string*/ {
        return this._resourceVersion
    }
    set resourceVersion(x: any /*string*/) {
        this._resourceVersion = x
    }
    setResourceVersion(x: any /*string*/) {
        this.resourceVersion = x; return this
    }

    _uid: any;
    get uid(): any /*string*/ {
        return this._uid
    }
    set uid(x: any /*string*/) {
        this._uid = x
    }
    setUid(x: any /*string*/) {
        this.uid = x; return this
    }
}

export interface ConfigMapProjectionHelper extends ConfigMapProjection {
    $items(x: any): any;
    $optional(x: any): any;
}

/**
 * Adapts a ConfigMap into a projected volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
 */
export class ConfigMapProjectionHelper extends Template implements ConfigMapProjectionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _items: any;
    get items(): any /*Array<KeyToPath>*/ {
        return this._items
    }
    set items(x: any /*Array<KeyToPath>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<KeyToPath>*/) {
        this.items = x; return this
    }

    _optional: any;
    get optional(): any /*boolean*/ {
        return this._optional
    }
    set optional(x: any /*boolean*/) {
        this._optional = x
    }
    setOptional(x: any /*boolean*/) {
        this.optional = x; return this
    }
}

export interface ConfigMapVolumeSourceHelper extends ConfigMapVolumeSource {
    $defaultMode(x: any): any;
    $items(x: any): any;
    $optional(x: any): any;
}

/**
 * Adapts a ConfigMap into a volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
 */
export class ConfigMapVolumeSourceHelper extends Template implements ConfigMapVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _defaultMode: any;
    get defaultMode(): any /*number*/ {
        return this._defaultMode
    }
    set defaultMode(x: any /*number*/) {
        this._defaultMode = x
    }
    setDefaultMode(x: any /*number*/) {
        this.defaultMode = x; return this
    }

    _items: any;
    get items(): any /*Array<KeyToPath>*/ {
        return this._items
    }
    set items(x: any /*Array<KeyToPath>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<KeyToPath>*/) {
        this.items = x; return this
    }

    _optional: any;
    get optional(): any /*boolean*/ {
        return this._optional
    }
    set optional(x: any /*boolean*/) {
        this._optional = x
    }
    setOptional(x: any /*boolean*/) {
        this.optional = x; return this
    }
}

export interface ContainerHelper extends Container {
    $args(x: any): any;
    $command(x: any): any;
    $env(x: any): any;
    $envFrom(x: any): any;
    $image(x: any): any;
    $imagePullPolicy(x: any): any;
    $lifecycle(x: any): any;
    $livenessProbe(x: any): any;
    $ports(x: any): any;
    $readinessProbe(x: any): any;
    $resources(x: any): any;
    $securityContext(x: any): any;
    $startupProbe(x: any): any;
    $stdin(x: any): any;
    $stdinOnce(x: any): any;
    $terminationMessagePath(x: any): any;
    $terminationMessagePolicy(x: any): any;
    $tty(x: any): any;
    $volumeDevices(x: any): any;
    $volumeMounts(x: any): any;
    $workingDir(x: any): any;
}

/** A single application container that you want to run within a pod. */
export class ContainerHelper extends Template implements ContainerHelper {
    constructor(obj: any) {
        super(obj)
    }

    _args: any;
    get args(): any /*Array<string>*/ {
        return this._args
    }
    set args(x: any /*Array<string>*/) {
        this._args = this.set(this.args, x)
    }
    setArgs(x: any /*Array<string>*/) {
        this.args = x; return this
    }

    _command: any;
    get command(): any /*Array<string>*/ {
        return this._command
    }
    set command(x: any /*Array<string>*/) {
        this._command = this.set(this.command, x)
    }
    setCommand(x: any /*Array<string>*/) {
        this.command = x; return this
    }

    _env: any;
    get env(): any /*Array<EnvVar>*/ {
        return this._env
    }
    set env(x: any /*Array<EnvVar>*/) {
        this._env = this.set(this.env, x)
    }
    setEnv(x: any /*Array<EnvVar>*/) {
        this.env = x; return this
    }

    _envFrom: any;
    get envFrom(): any /*Array<EnvFromSource>*/ {
        return this._envFrom
    }
    set envFrom(x: any /*Array<EnvFromSource>*/) {
        this._envFrom = this.set(this.envFrom, x)
    }
    setEnvFrom(x: any /*Array<EnvFromSource>*/) {
        this.envFrom = x; return this
    }

    _image: any;
    get image(): any /*string*/ {
        return this._image
    }
    set image(x: any /*string*/) {
        this._image = x
    }
    setImage(x: any /*string*/) {
        this.image = x; return this
    }

    _imagePullPolicy: any;
    get imagePullPolicy(): any /*string*/ {
        return this._imagePullPolicy
    }
    set imagePullPolicy(x: any /*string*/) {
        this._imagePullPolicy = x
    }
    setImagePullPolicy(x: any /*string*/) {
        this.imagePullPolicy = x; return this
    }

    _lifecycle: any;
    get lifecycle(): any /*LifecycleHelper*/ {
        return this._lifecycle
    }
    set lifecycle(x: any /*LifecycleHelper*/) {
        this._lifecycle = x
    }
    setLifecycle(x: any /*LifecycleHelper*/) {
        this.lifecycle = x; return this
    }

    _livenessProbe: any;
    get livenessProbe(): any /*ProbeHelper*/ {
        return this._livenessProbe
    }
    set livenessProbe(x: any /*ProbeHelper*/) {
        this._livenessProbe = x
    }
    setLivenessProbe(x: any /*ProbeHelper*/) {
        this.livenessProbe = x; return this
    }

    _ports: any;
    get ports(): any /*Array<ContainerPort>*/ {
        return this._ports
    }
    set ports(x: any /*Array<ContainerPort>*/) {
        this._ports = this.set(this.ports, x)
    }
    setPorts(x: any /*Array<ContainerPort>*/) {
        this.ports = x; return this
    }

    _readinessProbe: any;
    get readinessProbe(): any /*ProbeHelper*/ {
        return this._readinessProbe
    }
    set readinessProbe(x: any /*ProbeHelper*/) {
        this._readinessProbe = x
    }
    setReadinessProbe(x: any /*ProbeHelper*/) {
        this.readinessProbe = x; return this
    }

    _resources: any;
    get resources(): any /*ResourceRequirementsHelper*/ {
        return this._resources
    }
    set resources(x: any /*ResourceRequirementsHelper*/) {
        this._resources = x
    }
    setResources(x: any /*ResourceRequirementsHelper*/) {
        this.resources = x; return this
    }

    _securityContext: any;
    get securityContext(): any /*SecurityContextHelper*/ {
        return this._securityContext
    }
    set securityContext(x: any /*SecurityContextHelper*/) {
        this._securityContext = x
    }
    setSecurityContext(x: any /*SecurityContextHelper*/) {
        this.securityContext = x; return this
    }

    _startupProbe: any;
    get startupProbe(): any /*ProbeHelper*/ {
        return this._startupProbe
    }
    set startupProbe(x: any /*ProbeHelper*/) {
        this._startupProbe = x
    }
    setStartupProbe(x: any /*ProbeHelper*/) {
        this.startupProbe = x; return this
    }

    _stdin: any;
    get stdin(): any /*boolean*/ {
        return this._stdin
    }
    set stdin(x: any /*boolean*/) {
        this._stdin = x
    }
    setStdin(x: any /*boolean*/) {
        this.stdin = x; return this
    }

    _stdinOnce: any;
    get stdinOnce(): any /*boolean*/ {
        return this._stdinOnce
    }
    set stdinOnce(x: any /*boolean*/) {
        this._stdinOnce = x
    }
    setStdinOnce(x: any /*boolean*/) {
        this.stdinOnce = x; return this
    }

    _terminationMessagePath: any;
    get terminationMessagePath(): any /*string*/ {
        return this._terminationMessagePath
    }
    set terminationMessagePath(x: any /*string*/) {
        this._terminationMessagePath = x
    }
    setTerminationMessagePath(x: any /*string*/) {
        this.terminationMessagePath = x; return this
    }

    _terminationMessagePolicy: any;
    get terminationMessagePolicy(): any /*string*/ {
        return this._terminationMessagePolicy
    }
    set terminationMessagePolicy(x: any /*string*/) {
        this._terminationMessagePolicy = x
    }
    setTerminationMessagePolicy(x: any /*string*/) {
        this.terminationMessagePolicy = x; return this
    }

    _tty: any;
    get tty(): any /*boolean*/ {
        return this._tty
    }
    set tty(x: any /*boolean*/) {
        this._tty = x
    }
    setTty(x: any /*boolean*/) {
        this.tty = x; return this
    }

    _volumeDevices: any;
    get volumeDevices(): any /*Array<VolumeDevice>*/ {
        return this._volumeDevices
    }
    set volumeDevices(x: any /*Array<VolumeDevice>*/) {
        this._volumeDevices = this.set(this.volumeDevices, x)
    }
    setVolumeDevices(x: any /*Array<VolumeDevice>*/) {
        this.volumeDevices = x; return this
    }

    _volumeMounts: any;
    get volumeMounts(): any /*Array<VolumeMount>*/ {
        return this._volumeMounts
    }
    set volumeMounts(x: any /*Array<VolumeMount>*/) {
        this._volumeMounts = this.set(this.volumeMounts, x)
    }
    setVolumeMounts(x: any /*Array<VolumeMount>*/) {
        this.volumeMounts = x; return this
    }

    _workingDir: any;
    get workingDir(): any /*string*/ {
        return this._workingDir
    }
    set workingDir(x: any /*string*/) {
        this._workingDir = x
    }
    setWorkingDir(x: any /*string*/) {
        this.workingDir = x; return this
    }
}

export interface ContainerImageHelper extends ContainerImage {
    $names(x: any): any;
    $sizeBytes(x: any): any;
}

/** Describe a container image */
export class ContainerImageHelper extends Template implements ContainerImageHelper {
    constructor(obj: any) {
        super(obj)
    }

    _names: any;
    get names(): any /*Array<string>*/ {
        return this._names
    }
    set names(x: any /*Array<string>*/) {
        this._names = this.set(this.names, x)
    }
    setNames(x: any /*Array<string>*/) {
        this.names = x; return this
    }

    _sizeBytes: any;
    get sizeBytes(): any /*number*/ {
        return this._sizeBytes
    }
    set sizeBytes(x: any /*number*/) {
        this._sizeBytes = x
    }
    setSizeBytes(x: any /*number*/) {
        this.sizeBytes = x; return this
    }
}

export interface ContainerPortHelper extends ContainerPort {
    $containerPort(x: any): any;
    $hostIP(x: any): any;
    $hostPort(x: any): any;
    $protocol(x: any): any;
}

/** ContainerPort represents a network port in a single container. */
export class ContainerPortHelper extends Template implements ContainerPortHelper {
    constructor(obj: any) {
        super(obj)
    }

    _containerPort: any;
    get containerPort(): any /*number*/ {
        return this._containerPort
    }
    set containerPort(x: any /*number*/) {
        this._containerPort = x
    }
    setContainerPort(x: any /*number*/) {
        this.containerPort = x; return this
    }

    _hostIP: any;
    get hostIP(): any /*string*/ {
        return this._hostIP
    }
    set hostIP(x: any /*string*/) {
        this._hostIP = x
    }
    setHostIP(x: any /*string*/) {
        this.hostIP = x; return this
    }

    _hostPort: any;
    get hostPort(): any /*number*/ {
        return this._hostPort
    }
    set hostPort(x: any /*number*/) {
        this._hostPort = x
    }
    setHostPort(x: any /*number*/) {
        this.hostPort = x; return this
    }

    _protocol: any;
    get protocol(): any /*string*/ {
        return this._protocol
    }
    set protocol(x: any /*string*/) {
        this._protocol = x
    }
    setProtocol(x: any /*string*/) {
        this.protocol = x; return this
    }
}

export interface ContainerStateHelper extends ContainerState {
    $running(x: any): any;
    $terminated(x: any): any;
    $waiting(x: any): any;
}

/** ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting. */
export class ContainerStateHelper extends Template implements ContainerStateHelper {
    constructor(obj: any) {
        super(obj)
    }

    _running: any;
    get running(): any /*ContainerStateRunningHelper*/ {
        return this._running
    }
    set running(x: any /*ContainerStateRunningHelper*/) {
        this._running = x
    }
    setRunning(x: any /*ContainerStateRunningHelper*/) {
        this.running = x; return this
    }

    _terminated: any;
    get terminated(): any /*ContainerStateTerminatedHelper*/ {
        return this._terminated
    }
    set terminated(x: any /*ContainerStateTerminatedHelper*/) {
        this._terminated = x
    }
    setTerminated(x: any /*ContainerStateTerminatedHelper*/) {
        this.terminated = x; return this
    }

    _waiting: any;
    get waiting(): any /*ContainerStateWaitingHelper*/ {
        return this._waiting
    }
    set waiting(x: any /*ContainerStateWaitingHelper*/) {
        this._waiting = x
    }
    setWaiting(x: any /*ContainerStateWaitingHelper*/) {
        this.waiting = x; return this
    }
}

export interface ContainerStateRunningHelper extends ContainerStateRunning {
    $startedAt(x: any): any;
}

/** ContainerStateRunning is a running state of a container. */
export class ContainerStateRunningHelper extends Template implements ContainerStateRunningHelper {
    constructor(obj: any) {
        super(obj)
    }

    _startedAt: any;
    get startedAt(): any /*Time*/ {
        return this._startedAt
    }
    set startedAt(x: any /*Time*/) {
        this._startedAt = x
    }
    setStartedAt(x: any /*Time*/) {
        this.startedAt = x; return this
    }
}

export interface ContainerStateTerminatedHelper extends ContainerStateTerminated {
    $containerID(x: any): any;
    $exitCode(x: any): any;
    $finishedAt(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
    $signal(x: any): any;
    $startedAt(x: any): any;
}

/** ContainerStateTerminated is a terminated state of a container. */
export class ContainerStateTerminatedHelper extends Template implements ContainerStateTerminatedHelper {
    constructor(obj: any) {
        super(obj)
    }

    _containerID: any;
    get containerID(): any /*string*/ {
        return this._containerID
    }
    set containerID(x: any /*string*/) {
        this._containerID = x
    }
    setContainerID(x: any /*string*/) {
        this.containerID = x; return this
    }

    _exitCode: any;
    get exitCode(): any /*number*/ {
        return this._exitCode
    }
    set exitCode(x: any /*number*/) {
        this._exitCode = x
    }
    setExitCode(x: any /*number*/) {
        this.exitCode = x; return this
    }

    _finishedAt: any;
    get finishedAt(): any /*Time*/ {
        return this._finishedAt
    }
    set finishedAt(x: any /*Time*/) {
        this._finishedAt = x
    }
    setFinishedAt(x: any /*Time*/) {
        this.finishedAt = x; return this
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

    _reason: any;
    get reason(): any /*string*/ {
        return this._reason
    }
    set reason(x: any /*string*/) {
        this._reason = x
    }
    setReason(x: any /*string*/) {
        this.reason = x; return this
    }

    _signal: any;
    get signal(): any /*number*/ {
        return this._signal
    }
    set signal(x: any /*number*/) {
        this._signal = x
    }
    setSignal(x: any /*number*/) {
        this.signal = x; return this
    }

    _startedAt: any;
    get startedAt(): any /*Time*/ {
        return this._startedAt
    }
    set startedAt(x: any /*Time*/) {
        this._startedAt = x
    }
    setStartedAt(x: any /*Time*/) {
        this.startedAt = x; return this
    }
}

export interface ContainerStateWaitingHelper extends ContainerStateWaiting {
    $message(x: any): any;
    $reason(x: any): any;
}

/** ContainerStateWaiting is a waiting state of a container. */
export class ContainerStateWaitingHelper extends Template implements ContainerStateWaitingHelper {
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

    _reason: any;
    get reason(): any /*string*/ {
        return this._reason
    }
    set reason(x: any /*string*/) {
        this._reason = x
    }
    setReason(x: any /*string*/) {
        this.reason = x; return this
    }
}

export interface ContainerStatusHelper extends ContainerStatus {
    $containerID(x: any): any;
    $image(x: any): any;
    $imageID(x: any): any;
    $lastState(x: any): any;
    $ready(x: any): any;
    $restartCount(x: any): any;
    $started(x: any): any;
    $state(x: any): any;
}

/** ContainerStatus contains details for the current status of this container. */
export class ContainerStatusHelper extends Template implements ContainerStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _containerID: any;
    get containerID(): any /*string*/ {
        return this._containerID
    }
    set containerID(x: any /*string*/) {
        this._containerID = x
    }
    setContainerID(x: any /*string*/) {
        this.containerID = x; return this
    }

    _image: any;
    get image(): any /*string*/ {
        return this._image
    }
    set image(x: any /*string*/) {
        this._image = x
    }
    setImage(x: any /*string*/) {
        this.image = x; return this
    }

    _imageID: any;
    get imageID(): any /*string*/ {
        return this._imageID
    }
    set imageID(x: any /*string*/) {
        this._imageID = x
    }
    setImageID(x: any /*string*/) {
        this.imageID = x; return this
    }

    _lastState: any;
    get lastState(): any /*ContainerStateHelper*/ {
        return this._lastState
    }
    set lastState(x: any /*ContainerStateHelper*/) {
        this._lastState = x
    }
    setLastState(x: any /*ContainerStateHelper*/) {
        this.lastState = x; return this
    }

    _ready: any;
    get ready(): any /*boolean*/ {
        return this._ready
    }
    set ready(x: any /*boolean*/) {
        this._ready = x
    }
    setReady(x: any /*boolean*/) {
        this.ready = x; return this
    }

    _restartCount: any;
    get restartCount(): any /*number*/ {
        return this._restartCount
    }
    set restartCount(x: any /*number*/) {
        this._restartCount = x
    }
    setRestartCount(x: any /*number*/) {
        this.restartCount = x; return this
    }

    _started: any;
    get started(): any /*boolean*/ {
        return this._started
    }
    set started(x: any /*boolean*/) {
        this._started = x
    }
    setStarted(x: any /*boolean*/) {
        this.started = x; return this
    }

    _state: any;
    get state(): any /*ContainerStateHelper*/ {
        return this._state
    }
    set state(x: any /*ContainerStateHelper*/) {
        this._state = x
    }
    setState(x: any /*ContainerStateHelper*/) {
        this.state = x; return this
    }
}

export interface DaemonEndpointHelper extends DaemonEndpoint {
    $Port(x: any): any;
}

/** DaemonEndpoint contains information about a single Daemon endpoint. */
export class DaemonEndpointHelper extends Template implements DaemonEndpointHelper {
    constructor(obj: any) {
        super(obj)
    }

    _Port: any;
    get Port(): any /*number*/ {
        return this._Port
    }
    set Port(x: any /*number*/) {
        this._Port = x
    }
    setPort(x: any /*number*/) {
        this.Port = x; return this
    }
}

export interface DownwardAPIProjectionHelper extends DownwardAPIProjection {
    $items(x: any): any;
}

/** Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
export class DownwardAPIProjectionHelper extends Template implements DownwardAPIProjectionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _items: any;
    get items(): any /*Array<DownwardAPIVolumeFile>*/ {
        return this._items
    }
    set items(x: any /*Array<DownwardAPIVolumeFile>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<DownwardAPIVolumeFile>*/) {
        this.items = x; return this
    }
}

export interface DownwardAPIVolumeFileHelper extends DownwardAPIVolumeFile {
    $fieldRef(x: any): any;
    $mode(x: any): any;
    $path(x: any): any;
    $resourceFieldRef(x: any): any;
}

/** DownwardAPIVolumeFile represents information to create the file containing the pod field */
export class DownwardAPIVolumeFileHelper extends Template implements DownwardAPIVolumeFileHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fieldRef: any;
    get fieldRef(): any /*ObjectFieldSelectorHelper*/ {
        return this._fieldRef
    }
    set fieldRef(x: any /*ObjectFieldSelectorHelper*/) {
        this._fieldRef = x
    }
    setFieldRef(x: any /*ObjectFieldSelectorHelper*/) {
        this.fieldRef = x; return this
    }

    _mode: any;
    get mode(): any /*number*/ {
        return this._mode
    }
    set mode(x: any /*number*/) {
        this._mode = x
    }
    setMode(x: any /*number*/) {
        this.mode = x; return this
    }

    _path: any;
    get path(): any /*string*/ {
        return this._path
    }
    set path(x: any /*string*/) {
        this._path = x
    }
    setPath(x: any /*string*/) {
        this.path = x; return this
    }

    _resourceFieldRef: any;
    get resourceFieldRef(): any /*ResourceFieldSelectorHelper*/ {
        return this._resourceFieldRef
    }
    set resourceFieldRef(x: any /*ResourceFieldSelectorHelper*/) {
        this._resourceFieldRef = x
    }
    setResourceFieldRef(x: any /*ResourceFieldSelectorHelper*/) {
        this.resourceFieldRef = x; return this
    }
}

export interface DownwardAPIVolumeSourceHelper extends DownwardAPIVolumeSource {
    $defaultMode(x: any): any;
    $items(x: any): any;
}

/** DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
export class DownwardAPIVolumeSourceHelper extends Template implements DownwardAPIVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _defaultMode: any;
    get defaultMode(): any /*number*/ {
        return this._defaultMode
    }
    set defaultMode(x: any /*number*/) {
        this._defaultMode = x
    }
    setDefaultMode(x: any /*number*/) {
        this.defaultMode = x; return this
    }

    _items: any;
    get items(): any /*Array<DownwardAPIVolumeFile>*/ {
        return this._items
    }
    set items(x: any /*Array<DownwardAPIVolumeFile>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<DownwardAPIVolumeFile>*/) {
        this.items = x; return this
    }
}

export interface EmptyDirVolumeSourceHelper extends EmptyDirVolumeSource {
    $medium(x: any): any;
    $sizeLimit(x: any): any;
}

/** Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
export class EmptyDirVolumeSourceHelper extends Template implements EmptyDirVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _medium: any;
    get medium(): any /*string*/ {
        return this._medium
    }
    set medium(x: any /*string*/) {
        this._medium = x
    }
    setMedium(x: any /*string*/) {
        this.medium = x; return this
    }

    _sizeLimit: any;
    get sizeLimit(): any /*Quantity*/ {
        return this._sizeLimit
    }
    set sizeLimit(x: any /*Quantity*/) {
        this._sizeLimit = x
    }
    setSizeLimit(x: any /*Quantity*/) {
        this.sizeLimit = x; return this
    }
}

export interface EndpointAddressHelper extends EndpointAddress {
    $hostname(x: any): any;
    $ip(x: any): any;
    $nodeName(x: any): any;
    $targetRef(x: any): any;
}

/** EndpointAddress is a tuple that describes single IP address. */
export class EndpointAddressHelper extends Template implements EndpointAddressHelper {
    constructor(obj: any) {
        super(obj)
    }

    _hostname: any;
    get hostname(): any /*string*/ {
        return this._hostname
    }
    set hostname(x: any /*string*/) {
        this._hostname = x
    }
    setHostname(x: any /*string*/) {
        this.hostname = x; return this
    }

    _ip: any;
    get ip(): any /*string*/ {
        return this._ip
    }
    set ip(x: any /*string*/) {
        this._ip = x
    }
    setIp(x: any /*string*/) {
        this.ip = x; return this
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

    _targetRef: any;
    get targetRef(): any /*ObjectReferenceHelper*/ {
        return this._targetRef
    }
    set targetRef(x: any /*ObjectReferenceHelper*/) {
        this._targetRef = x
    }
    setTargetRef(x: any /*ObjectReferenceHelper*/) {
        this.targetRef = x; return this
    }
}

export interface EndpointPortHelper extends EndpointPort {
    $appProtocol(x: any): any;
    $port(x: any): any;
    $protocol(x: any): any;
}

/** EndpointPort is a tuple that describes a single port. */
export class EndpointPortHelper extends Template implements EndpointPortHelper {
    constructor(obj: any) {
        super(obj)
    }

    _appProtocol: any;
    get appProtocol(): any /*string*/ {
        return this._appProtocol
    }
    set appProtocol(x: any /*string*/) {
        this._appProtocol = x
    }
    setAppProtocol(x: any /*string*/) {
        this.appProtocol = x; return this
    }

    _port: any;
    get port(): any /*number*/ {
        return this._port
    }
    set port(x: any /*number*/) {
        this._port = x
    }
    setPort(x: any /*number*/) {
        this.port = x; return this
    }

    _protocol: any;
    get protocol(): any /*string*/ {
        return this._protocol
    }
    set protocol(x: any /*string*/) {
        this._protocol = x
    }
    setProtocol(x: any /*string*/) {
        this.protocol = x; return this
    }
}

export interface EndpointSubsetHelper extends EndpointSubset {
    $addresses(x: any): any;
    $notReadyAddresses(x: any): any;
    $ports(x: any): any;
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
export class EndpointSubsetHelper extends Template implements EndpointSubsetHelper {
    constructor(obj: any) {
        super(obj)
    }

    _addresses: any;
    get addresses(): any /*Array<EndpointAddress>*/ {
        return this._addresses
    }
    set addresses(x: any /*Array<EndpointAddress>*/) {
        this._addresses = this.set(this.addresses, x)
    }
    setAddresses(x: any /*Array<EndpointAddress>*/) {
        this.addresses = x; return this
    }

    _notReadyAddresses: any;
    get notReadyAddresses(): any /*Array<EndpointAddress>*/ {
        return this._notReadyAddresses
    }
    set notReadyAddresses(x: any /*Array<EndpointAddress>*/) {
        this._notReadyAddresses = this.set(this.notReadyAddresses, x)
    }
    setNotReadyAddresses(x: any /*Array<EndpointAddress>*/) {
        this.notReadyAddresses = x; return this
    }

    _ports: any;
    get ports(): any /*Array<EndpointPort>*/ {
        return this._ports
    }
    set ports(x: any /*Array<EndpointPort>*/) {
        this._ports = this.set(this.ports, x)
    }
    setPorts(x: any /*Array<EndpointPort>*/) {
        this.ports = x; return this
    }
}

export interface EndpointsHelper extends Endpoints {
    $metadata(x: any): any;
    $subsets(x: any): any;
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
export class EndpointsHelper extends ResourceTemplate implements EndpointsHelper {
    static kind = 'Endpoints';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, EndpointsHelper.kind, EndpointsHelper.apiVersion)
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

    _subsets: any;
    get subsets(): any /*Array<EndpointSubset>*/ {
        return this._subsets
    }
    set subsets(x: any /*Array<EndpointSubset>*/) {
        this._subsets = this.set(this.subsets, x)
    }
    setSubsets(x: any /*Array<EndpointSubset>*/) {
        this.subsets = x; return this
    }
}

export interface EndpointsListHelper extends EndpointsList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** EndpointsList is a list of endpoints. */
export class EndpointsListHelper extends ResourceTemplate implements EndpointsListHelper {
    static kind = 'EndpointsList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, EndpointsListHelper.kind, EndpointsListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<Endpoints>*/ {
        return this._items
    }
    set items(x: any /*Array<Endpoints>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<Endpoints>*/) {
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

export interface EnvFromSourceHelper extends EnvFromSource {
    $configMapRef(x: any): any;
    $prefix(x: any): any;
    $secretRef(x: any): any;
}

/** EnvFromSource represents the source of a set of ConfigMaps */
export class EnvFromSourceHelper extends Template implements EnvFromSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _configMapRef: any;
    get configMapRef(): any /*ConfigMapEnvSourceHelper*/ {
        return this._configMapRef
    }
    set configMapRef(x: any /*ConfigMapEnvSourceHelper*/) {
        this._configMapRef = x
    }
    setConfigMapRef(x: any /*ConfigMapEnvSourceHelper*/) {
        this.configMapRef = x; return this
    }

    _prefix: any;
    get prefix(): any /*string*/ {
        return this._prefix
    }
    set prefix(x: any /*string*/) {
        this._prefix = x
    }
    setPrefix(x: any /*string*/) {
        this.prefix = x; return this
    }

    _secretRef: any;
    get secretRef(): any /*SecretEnvSourceHelper*/ {
        return this._secretRef
    }
    set secretRef(x: any /*SecretEnvSourceHelper*/) {
        this._secretRef = x
    }
    setSecretRef(x: any /*SecretEnvSourceHelper*/) {
        this.secretRef = x; return this
    }
}

export interface EnvVarHelper extends EnvVar {
    $value(x: any): any;
    $valueFrom(x: any): any;
}

/** EnvVar represents an environment variable present in a Container. */
export class EnvVarHelper extends Template implements EnvVarHelper {
    constructor(obj: any) {
        super(obj)
    }

    _value: any;
    get value(): any /*string*/ {
        return this._value
    }
    set value(x: any /*string*/) {
        this._value = x
    }
    setValue(x: any /*string*/) {
        this.value = x; return this
    }

    _valueFrom: any;
    get valueFrom(): any /*EnvVarSourceHelper*/ {
        return this._valueFrom
    }
    set valueFrom(x: any /*EnvVarSourceHelper*/) {
        this._valueFrom = x
    }
    setValueFrom(x: any /*EnvVarSourceHelper*/) {
        this.valueFrom = x; return this
    }
}

export interface EnvVarSourceHelper extends EnvVarSource {
    $configMapKeyRef(x: any): any;
    $fieldRef(x: any): any;
    $resourceFieldRef(x: any): any;
    $secretKeyRef(x: any): any;
}

/** EnvVarSource represents a source for the value of an EnvVar. */
export class EnvVarSourceHelper extends Template implements EnvVarSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _configMapKeyRef: any;
    get configMapKeyRef(): any /*ConfigMapKeySelectorHelper*/ {
        return this._configMapKeyRef
    }
    set configMapKeyRef(x: any /*ConfigMapKeySelectorHelper*/) {
        this._configMapKeyRef = x
    }
    setConfigMapKeyRef(x: any /*ConfigMapKeySelectorHelper*/) {
        this.configMapKeyRef = x; return this
    }

    _fieldRef: any;
    get fieldRef(): any /*ObjectFieldSelectorHelper*/ {
        return this._fieldRef
    }
    set fieldRef(x: any /*ObjectFieldSelectorHelper*/) {
        this._fieldRef = x
    }
    setFieldRef(x: any /*ObjectFieldSelectorHelper*/) {
        this.fieldRef = x; return this
    }

    _resourceFieldRef: any;
    get resourceFieldRef(): any /*ResourceFieldSelectorHelper*/ {
        return this._resourceFieldRef
    }
    set resourceFieldRef(x: any /*ResourceFieldSelectorHelper*/) {
        this._resourceFieldRef = x
    }
    setResourceFieldRef(x: any /*ResourceFieldSelectorHelper*/) {
        this.resourceFieldRef = x; return this
    }

    _secretKeyRef: any;
    get secretKeyRef(): any /*SecretKeySelectorHelper*/ {
        return this._secretKeyRef
    }
    set secretKeyRef(x: any /*SecretKeySelectorHelper*/) {
        this._secretKeyRef = x
    }
    setSecretKeyRef(x: any /*SecretKeySelectorHelper*/) {
        this.secretKeyRef = x; return this
    }
}

export interface EphemeralContainerHelper extends EphemeralContainer {
    $args(x: any): any;
    $command(x: any): any;
    $env(x: any): any;
    $envFrom(x: any): any;
    $image(x: any): any;
    $imagePullPolicy(x: any): any;
    $lifecycle(x: any): any;
    $livenessProbe(x: any): any;
    $ports(x: any): any;
    $readinessProbe(x: any): any;
    $resources(x: any): any;
    $securityContext(x: any): any;
    $startupProbe(x: any): any;
    $stdin(x: any): any;
    $stdinOnce(x: any): any;
    $targetContainerName(x: any): any;
    $terminationMessagePath(x: any): any;
    $terminationMessagePolicy(x: any): any;
    $tty(x: any): any;
    $volumeDevices(x: any): any;
    $volumeMounts(x: any): any;
    $workingDir(x: any): any;
}

/** An EphemeralContainer is a container that may be added temporarily to an existing pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a pod is removed or restarted. If an ephemeral container causes a pod to exceed its resource allocation, the pod may be evicted. Ephemeral containers may not be added by directly updating the pod spec. They must be added via the pod's ephemeralcontainers subresource, and they will appear in the pod spec once added. This is an alpha feature enabled by the EphemeralContainers feature flag. */
export class EphemeralContainerHelper extends Template implements EphemeralContainerHelper {
    constructor(obj: any) {
        super(obj)
    }

    _args: any;
    get args(): any /*Array<string>*/ {
        return this._args
    }
    set args(x: any /*Array<string>*/) {
        this._args = this.set(this.args, x)
    }
    setArgs(x: any /*Array<string>*/) {
        this.args = x; return this
    }

    _command: any;
    get command(): any /*Array<string>*/ {
        return this._command
    }
    set command(x: any /*Array<string>*/) {
        this._command = this.set(this.command, x)
    }
    setCommand(x: any /*Array<string>*/) {
        this.command = x; return this
    }

    _env: any;
    get env(): any /*Array<EnvVar>*/ {
        return this._env
    }
    set env(x: any /*Array<EnvVar>*/) {
        this._env = this.set(this.env, x)
    }
    setEnv(x: any /*Array<EnvVar>*/) {
        this.env = x; return this
    }

    _envFrom: any;
    get envFrom(): any /*Array<EnvFromSource>*/ {
        return this._envFrom
    }
    set envFrom(x: any /*Array<EnvFromSource>*/) {
        this._envFrom = this.set(this.envFrom, x)
    }
    setEnvFrom(x: any /*Array<EnvFromSource>*/) {
        this.envFrom = x; return this
    }

    _image: any;
    get image(): any /*string*/ {
        return this._image
    }
    set image(x: any /*string*/) {
        this._image = x
    }
    setImage(x: any /*string*/) {
        this.image = x; return this
    }

    _imagePullPolicy: any;
    get imagePullPolicy(): any /*string*/ {
        return this._imagePullPolicy
    }
    set imagePullPolicy(x: any /*string*/) {
        this._imagePullPolicy = x
    }
    setImagePullPolicy(x: any /*string*/) {
        this.imagePullPolicy = x; return this
    }

    _lifecycle: any;
    get lifecycle(): any /*LifecycleHelper*/ {
        return this._lifecycle
    }
    set lifecycle(x: any /*LifecycleHelper*/) {
        this._lifecycle = x
    }
    setLifecycle(x: any /*LifecycleHelper*/) {
        this.lifecycle = x; return this
    }

    _livenessProbe: any;
    get livenessProbe(): any /*ProbeHelper*/ {
        return this._livenessProbe
    }
    set livenessProbe(x: any /*ProbeHelper*/) {
        this._livenessProbe = x
    }
    setLivenessProbe(x: any /*ProbeHelper*/) {
        this.livenessProbe = x; return this
    }

    _ports: any;
    get ports(): any /*Array<ContainerPort>*/ {
        return this._ports
    }
    set ports(x: any /*Array<ContainerPort>*/) {
        this._ports = this.set(this.ports, x)
    }
    setPorts(x: any /*Array<ContainerPort>*/) {
        this.ports = x; return this
    }

    _readinessProbe: any;
    get readinessProbe(): any /*ProbeHelper*/ {
        return this._readinessProbe
    }
    set readinessProbe(x: any /*ProbeHelper*/) {
        this._readinessProbe = x
    }
    setReadinessProbe(x: any /*ProbeHelper*/) {
        this.readinessProbe = x; return this
    }

    _resources: any;
    get resources(): any /*ResourceRequirementsHelper*/ {
        return this._resources
    }
    set resources(x: any /*ResourceRequirementsHelper*/) {
        this._resources = x
    }
    setResources(x: any /*ResourceRequirementsHelper*/) {
        this.resources = x; return this
    }

    _securityContext: any;
    get securityContext(): any /*SecurityContextHelper*/ {
        return this._securityContext
    }
    set securityContext(x: any /*SecurityContextHelper*/) {
        this._securityContext = x
    }
    setSecurityContext(x: any /*SecurityContextHelper*/) {
        this.securityContext = x; return this
    }

    _startupProbe: any;
    get startupProbe(): any /*ProbeHelper*/ {
        return this._startupProbe
    }
    set startupProbe(x: any /*ProbeHelper*/) {
        this._startupProbe = x
    }
    setStartupProbe(x: any /*ProbeHelper*/) {
        this.startupProbe = x; return this
    }

    _stdin: any;
    get stdin(): any /*boolean*/ {
        return this._stdin
    }
    set stdin(x: any /*boolean*/) {
        this._stdin = x
    }
    setStdin(x: any /*boolean*/) {
        this.stdin = x; return this
    }

    _stdinOnce: any;
    get stdinOnce(): any /*boolean*/ {
        return this._stdinOnce
    }
    set stdinOnce(x: any /*boolean*/) {
        this._stdinOnce = x
    }
    setStdinOnce(x: any /*boolean*/) {
        this.stdinOnce = x; return this
    }

    _targetContainerName: any;
    get targetContainerName(): any /*string*/ {
        return this._targetContainerName
    }
    set targetContainerName(x: any /*string*/) {
        this._targetContainerName = x
    }
    setTargetContainerName(x: any /*string*/) {
        this.targetContainerName = x; return this
    }

    _terminationMessagePath: any;
    get terminationMessagePath(): any /*string*/ {
        return this._terminationMessagePath
    }
    set terminationMessagePath(x: any /*string*/) {
        this._terminationMessagePath = x
    }
    setTerminationMessagePath(x: any /*string*/) {
        this.terminationMessagePath = x; return this
    }

    _terminationMessagePolicy: any;
    get terminationMessagePolicy(): any /*string*/ {
        return this._terminationMessagePolicy
    }
    set terminationMessagePolicy(x: any /*string*/) {
        this._terminationMessagePolicy = x
    }
    setTerminationMessagePolicy(x: any /*string*/) {
        this.terminationMessagePolicy = x; return this
    }

    _tty: any;
    get tty(): any /*boolean*/ {
        return this._tty
    }
    set tty(x: any /*boolean*/) {
        this._tty = x
    }
    setTty(x: any /*boolean*/) {
        this.tty = x; return this
    }

    _volumeDevices: any;
    get volumeDevices(): any /*Array<VolumeDevice>*/ {
        return this._volumeDevices
    }
    set volumeDevices(x: any /*Array<VolumeDevice>*/) {
        this._volumeDevices = this.set(this.volumeDevices, x)
    }
    setVolumeDevices(x: any /*Array<VolumeDevice>*/) {
        this.volumeDevices = x; return this
    }

    _volumeMounts: any;
    get volumeMounts(): any /*Array<VolumeMount>*/ {
        return this._volumeMounts
    }
    set volumeMounts(x: any /*Array<VolumeMount>*/) {
        this._volumeMounts = this.set(this.volumeMounts, x)
    }
    setVolumeMounts(x: any /*Array<VolumeMount>*/) {
        this.volumeMounts = x; return this
    }

    _workingDir: any;
    get workingDir(): any /*string*/ {
        return this._workingDir
    }
    set workingDir(x: any /*string*/) {
        this._workingDir = x
    }
    setWorkingDir(x: any /*string*/) {
        this.workingDir = x; return this
    }
}

export interface EphemeralContainersHelper extends EphemeralContainers {
    $ephemeralContainers(x: any): any;
    $metadata(x: any): any;
}

/** A list of ephemeral containers used with the Pod ephemeralcontainers subresource. */
export class EphemeralContainersHelper extends ResourceTemplate implements EphemeralContainersHelper {
    static kind = 'EphemeralContainers';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, EphemeralContainersHelper.kind, EphemeralContainersHelper.apiVersion)
    }

    _ephemeralContainers: any;
    get ephemeralContainers(): any /*Array<EphemeralContainer>*/ {
        return this._ephemeralContainers
    }
    set ephemeralContainers(x: any /*Array<EphemeralContainer>*/) {
        this._ephemeralContainers = this.set(this.ephemeralContainers, x)
    }
    setEphemeralContainers(x: any /*Array<EphemeralContainer>*/) {
        this.ephemeralContainers = x; return this
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
}

export interface EphemeralVolumeSourceHelper extends EphemeralVolumeSource {
    $volumeClaimTemplate(x: any): any;
}

/** Represents an ephemeral volume that is handled by a normal storage driver. */
export class EphemeralVolumeSourceHelper extends Template implements EphemeralVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _volumeClaimTemplate: any;
    get volumeClaimTemplate(): any /*PersistentVolumeClaimTemplateHelper*/ {
        return this._volumeClaimTemplate
    }
    set volumeClaimTemplate(x: any /*PersistentVolumeClaimTemplateHelper*/) {
        this._volumeClaimTemplate = x
    }
    setVolumeClaimTemplate(x: any /*PersistentVolumeClaimTemplateHelper*/) {
        this.volumeClaimTemplate = x; return this
    }
}

export interface EventHelper extends Event {
    $action(x: any): any;
    $count(x: any): any;
    $eventTime(x: any): any;
    $firstTimestamp(x: any): any;
    $involvedObject(x: any): any;
    $lastTimestamp(x: any): any;
    $message(x: any): any;
    $metadata(x: any): any;
    $reason(x: any): any;
    $related(x: any): any;
    $reportingComponent(x: any): any;
    $reportingInstance(x: any): any;
    $series(x: any): any;
    $source(x: any): any;
    $type(x: any): any;
}

/** Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data. */
export class EventHelper extends ResourceTemplate implements EventHelper {
    static kind = 'Event';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, EventHelper.kind, EventHelper.apiVersion)
    }

    _action: any;
    get action(): any /*string*/ {
        return this._action
    }
    set action(x: any /*string*/) {
        this._action = x
    }
    setAction(x: any /*string*/) {
        this.action = x; return this
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

    _eventTime: any;
    get eventTime(): any /*MicroTime*/ {
        return this._eventTime
    }
    set eventTime(x: any /*MicroTime*/) {
        this._eventTime = x
    }
    setEventTime(x: any /*MicroTime*/) {
        this.eventTime = x; return this
    }

    _firstTimestamp: any;
    get firstTimestamp(): any /*Time*/ {
        return this._firstTimestamp
    }
    set firstTimestamp(x: any /*Time*/) {
        this._firstTimestamp = x
    }
    setFirstTimestamp(x: any /*Time*/) {
        this.firstTimestamp = x; return this
    }

    _involvedObject: any;
    get involvedObject(): any /*ObjectReferenceHelper*/ {
        return this._involvedObject
    }
    set involvedObject(x: any /*ObjectReferenceHelper*/) {
        this._involvedObject = x
    }
    setInvolvedObject(x: any /*ObjectReferenceHelper*/) {
        this.involvedObject = x; return this
    }

    _lastTimestamp: any;
    get lastTimestamp(): any /*Time*/ {
        return this._lastTimestamp
    }
    set lastTimestamp(x: any /*Time*/) {
        this._lastTimestamp = x
    }
    setLastTimestamp(x: any /*Time*/) {
        this.lastTimestamp = x; return this
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

    _reason: any;
    get reason(): any /*string*/ {
        return this._reason
    }
    set reason(x: any /*string*/) {
        this._reason = x
    }
    setReason(x: any /*string*/) {
        this.reason = x; return this
    }

    _related: any;
    get related(): any /*ObjectReferenceHelper*/ {
        return this._related
    }
    set related(x: any /*ObjectReferenceHelper*/) {
        this._related = x
    }
    setRelated(x: any /*ObjectReferenceHelper*/) {
        this.related = x; return this
    }

    _reportingComponent: any;
    get reportingComponent(): any /*string*/ {
        return this._reportingComponent
    }
    set reportingComponent(x: any /*string*/) {
        this._reportingComponent = x
    }
    setReportingComponent(x: any /*string*/) {
        this.reportingComponent = x; return this
    }

    _reportingInstance: any;
    get reportingInstance(): any /*string*/ {
        return this._reportingInstance
    }
    set reportingInstance(x: any /*string*/) {
        this._reportingInstance = x
    }
    setReportingInstance(x: any /*string*/) {
        this.reportingInstance = x; return this
    }

    _series: any;
    get series(): any /*EventSeriesHelper*/ {
        return this._series
    }
    set series(x: any /*EventSeriesHelper*/) {
        this._series = x
    }
    setSeries(x: any /*EventSeriesHelper*/) {
        this.series = x; return this
    }

    _source: any;
    get source(): any /*EventSourceHelper*/ {
        return this._source
    }
    set source(x: any /*EventSourceHelper*/) {
        this._source = x
    }
    setSource(x: any /*EventSourceHelper*/) {
        this.source = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface EventListHelper extends EventList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** EventList is a list of events. */
export class EventListHelper extends ResourceTemplate implements EventListHelper {
    static kind = 'EventList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, EventListHelper.kind, EventListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<Event>*/ {
        return this._items
    }
    set items(x: any /*Array<Event>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<Event>*/) {
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

export interface EventSeriesHelper extends EventSeries {
    $count(x: any): any;
    $lastObservedTime(x: any): any;
}

/** EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. */
export class EventSeriesHelper extends Template implements EventSeriesHelper {
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

    _lastObservedTime: any;
    get lastObservedTime(): any /*MicroTime*/ {
        return this._lastObservedTime
    }
    set lastObservedTime(x: any /*MicroTime*/) {
        this._lastObservedTime = x
    }
    setLastObservedTime(x: any /*MicroTime*/) {
        this.lastObservedTime = x; return this
    }
}

export interface EventSourceHelper extends EventSource {
    $component(x: any): any;
    $host(x: any): any;
}

/** EventSource contains information for an event. */
export class EventSourceHelper extends Template implements EventSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _component: any;
    get component(): any /*string*/ {
        return this._component
    }
    set component(x: any /*string*/) {
        this._component = x
    }
    setComponent(x: any /*string*/) {
        this.component = x; return this
    }

    _host: any;
    get host(): any /*string*/ {
        return this._host
    }
    set host(x: any /*string*/) {
        this._host = x
    }
    setHost(x: any /*string*/) {
        this.host = x; return this
    }
}

export interface ExecActionHelper extends ExecAction {
    $command(x: any): any;
}

/** ExecAction describes a "run in container" action. */
export class ExecActionHelper extends Template implements ExecActionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _command: any;
    get command(): any /*Array<string>*/ {
        return this._command
    }
    set command(x: any /*Array<string>*/) {
        this._command = this.set(this.command, x)
    }
    setCommand(x: any /*Array<string>*/) {
        this.command = x; return this
    }
}

export interface FCVolumeSourceHelper extends FCVolumeSource {
    $fsType(x: any): any;
    $lun(x: any): any;
    $readOnly(x: any): any;
    $targetWWNs(x: any): any;
    $wwids(x: any): any;
}

/** Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
export class FCVolumeSourceHelper extends Template implements FCVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _lun: any;
    get lun(): any /*number*/ {
        return this._lun
    }
    set lun(x: any /*number*/) {
        this._lun = x
    }
    setLun(x: any /*number*/) {
        this.lun = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _targetWWNs: any;
    get targetWWNs(): any /*Array<string>*/ {
        return this._targetWWNs
    }
    set targetWWNs(x: any /*Array<string>*/) {
        this._targetWWNs = this.set(this.targetWWNs, x)
    }
    setTargetWWNs(x: any /*Array<string>*/) {
        this.targetWWNs = x; return this
    }

    _wwids: any;
    get wwids(): any /*Array<string>*/ {
        return this._wwids
    }
    set wwids(x: any /*Array<string>*/) {
        this._wwids = this.set(this.wwids, x)
    }
    setWwids(x: any /*Array<string>*/) {
        this.wwids = x; return this
    }
}

export interface FlexPersistentVolumeSourceHelper extends FlexPersistentVolumeSource {
    $driver(x: any): any;
    $fsType(x: any): any;
    $options(x: any): any;
    $readOnly(x: any): any;
    $secretRef(x: any): any;
}

/** FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin. */
export class FlexPersistentVolumeSourceHelper extends Template implements FlexPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _driver: any;
    get driver(): any /*string*/ {
        return this._driver
    }
    set driver(x: any /*string*/) {
        this._driver = x
    }
    setDriver(x: any /*string*/) {
        this.driver = x; return this
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _options: any;
    get options(): any /*any*/ {
        return this._options
    }
    set options(x: any /*any*/) {
        this._options = this.set(this.options, x)
    }
    setOptions(x: any /*any*/) {
        this.options = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _secretRef: any;
    get secretRef(): any /*SecretReferenceHelper*/ {
        return this._secretRef
    }
    set secretRef(x: any /*SecretReferenceHelper*/) {
        this._secretRef = x
    }
    setSecretRef(x: any /*SecretReferenceHelper*/) {
        this.secretRef = x; return this
    }
}

export interface FlexVolumeSourceHelper extends FlexVolumeSource {
    $driver(x: any): any;
    $fsType(x: any): any;
    $options(x: any): any;
    $readOnly(x: any): any;
    $secretRef(x: any): any;
}

/** FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
export class FlexVolumeSourceHelper extends Template implements FlexVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _driver: any;
    get driver(): any /*string*/ {
        return this._driver
    }
    set driver(x: any /*string*/) {
        this._driver = x
    }
    setDriver(x: any /*string*/) {
        this.driver = x; return this
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _options: any;
    get options(): any /*any*/ {
        return this._options
    }
    set options(x: any /*any*/) {
        this._options = this.set(this.options, x)
    }
    setOptions(x: any /*any*/) {
        this.options = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _secretRef: any;
    get secretRef(): any /*LocalObjectReferenceHelper*/ {
        return this._secretRef
    }
    set secretRef(x: any /*LocalObjectReferenceHelper*/) {
        this._secretRef = x
    }
    setSecretRef(x: any /*LocalObjectReferenceHelper*/) {
        this.secretRef = x; return this
    }
}

export interface FlockerVolumeSourceHelper extends FlockerVolumeSource {
    $datasetName(x: any): any;
    $datasetUUID(x: any): any;
}

/** Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
export class FlockerVolumeSourceHelper extends Template implements FlockerVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _datasetName: any;
    get datasetName(): any /*string*/ {
        return this._datasetName
    }
    set datasetName(x: any /*string*/) {
        this._datasetName = x
    }
    setDatasetName(x: any /*string*/) {
        this.datasetName = x; return this
    }

    _datasetUUID: any;
    get datasetUUID(): any /*string*/ {
        return this._datasetUUID
    }
    set datasetUUID(x: any /*string*/) {
        this._datasetUUID = x
    }
    setDatasetUUID(x: any /*string*/) {
        this.datasetUUID = x; return this
    }
}

export interface GCEPersistentDiskVolumeSourceHelper extends GCEPersistentDiskVolumeSource {
    $fsType(x: any): any;
    $partition(x: any): any;
    $pdName(x: any): any;
    $readOnly(x: any): any;
}

/**
 * Represents a Persistent Disk resource in Google Compute Engine.
 *
 * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 */
export class GCEPersistentDiskVolumeSourceHelper extends Template implements GCEPersistentDiskVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _partition: any;
    get partition(): any /*number*/ {
        return this._partition
    }
    set partition(x: any /*number*/) {
        this._partition = x
    }
    setPartition(x: any /*number*/) {
        this.partition = x; return this
    }

    _pdName: any;
    get pdName(): any /*string*/ {
        return this._pdName
    }
    set pdName(x: any /*string*/) {
        this._pdName = x
    }
    setPdName(x: any /*string*/) {
        this.pdName = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }
}

export interface GitRepoVolumeSourceHelper extends GitRepoVolumeSource {
    $directory(x: any): any;
    $repository(x: any): any;
    $revision(x: any): any;
}

/**
 * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
 *
 * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 */
export class GitRepoVolumeSourceHelper extends Template implements GitRepoVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _directory: any;
    get directory(): any /*string*/ {
        return this._directory
    }
    set directory(x: any /*string*/) {
        this._directory = x
    }
    setDirectory(x: any /*string*/) {
        this.directory = x; return this
    }

    _repository: any;
    get repository(): any /*string*/ {
        return this._repository
    }
    set repository(x: any /*string*/) {
        this._repository = x
    }
    setRepository(x: any /*string*/) {
        this.repository = x; return this
    }

    _revision: any;
    get revision(): any /*string*/ {
        return this._revision
    }
    set revision(x: any /*string*/) {
        this._revision = x
    }
    setRevision(x: any /*string*/) {
        this.revision = x; return this
    }
}

export interface GlusterfsPersistentVolumeSourceHelper extends GlusterfsPersistentVolumeSource {
    $endpoints(x: any): any;
    $endpointsNamespace(x: any): any;
    $path(x: any): any;
    $readOnly(x: any): any;
}

/** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export class GlusterfsPersistentVolumeSourceHelper extends Template implements GlusterfsPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _endpoints: any;
    get endpoints(): any /*string*/ {
        return this._endpoints
    }
    set endpoints(x: any /*string*/) {
        this._endpoints = x
    }
    setEndpoints(x: any /*string*/) {
        this.endpoints = x; return this
    }

    _endpointsNamespace: any;
    get endpointsNamespace(): any /*string*/ {
        return this._endpointsNamespace
    }
    set endpointsNamespace(x: any /*string*/) {
        this._endpointsNamespace = x
    }
    setEndpointsNamespace(x: any /*string*/) {
        this.endpointsNamespace = x; return this
    }

    _path: any;
    get path(): any /*string*/ {
        return this._path
    }
    set path(x: any /*string*/) {
        this._path = x
    }
    setPath(x: any /*string*/) {
        this.path = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }
}

export interface GlusterfsVolumeSourceHelper extends GlusterfsVolumeSource {
    $endpoints(x: any): any;
    $path(x: any): any;
    $readOnly(x: any): any;
}

/** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export class GlusterfsVolumeSourceHelper extends Template implements GlusterfsVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _endpoints: any;
    get endpoints(): any /*string*/ {
        return this._endpoints
    }
    set endpoints(x: any /*string*/) {
        this._endpoints = x
    }
    setEndpoints(x: any /*string*/) {
        this.endpoints = x; return this
    }

    _path: any;
    get path(): any /*string*/ {
        return this._path
    }
    set path(x: any /*string*/) {
        this._path = x
    }
    setPath(x: any /*string*/) {
        this.path = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }
}

export interface HTTPGetActionHelper extends HTTPGetAction {
    $host(x: any): any;
    $httpHeaders(x: any): any;
    $path(x: any): any;
    $port(x: any): any;
    $scheme(x: any): any;
}

/** HTTPGetAction describes an action based on HTTP Get requests. */
export class HTTPGetActionHelper extends Template implements HTTPGetActionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _host: any;
    get host(): any /*string*/ {
        return this._host
    }
    set host(x: any /*string*/) {
        this._host = x
    }
    setHost(x: any /*string*/) {
        this.host = x; return this
    }

    _httpHeaders: any;
    get httpHeaders(): any /*Array<HTTPHeader>*/ {
        return this._httpHeaders
    }
    set httpHeaders(x: any /*Array<HTTPHeader>*/) {
        this._httpHeaders = this.set(this.httpHeaders, x)
    }
    setHttpHeaders(x: any /*Array<HTTPHeader>*/) {
        this.httpHeaders = x; return this
    }

    _path: any;
    get path(): any /*string*/ {
        return this._path
    }
    set path(x: any /*string*/) {
        this._path = x
    }
    setPath(x: any /*string*/) {
        this.path = x; return this
    }

    _port: any;
    get port(): any /*number | stringHelper*/ {
        return this._port
    }
    set port(x: any /*number | stringHelper*/) {
        this._port = x
    }
    setPort(x: any /*number | stringHelper*/) {
        this.port = x; return this
    }

    _scheme: any;
    get scheme(): any /*string*/ {
        return this._scheme
    }
    set scheme(x: any /*string*/) {
        this._scheme = x
    }
    setScheme(x: any /*string*/) {
        this.scheme = x; return this
    }
}

export interface HTTPHeaderHelper extends HTTPHeader {
    $value(x: any): any;
}

/** HTTPHeader describes a custom header to be used in HTTP probes */
export class HTTPHeaderHelper extends Template implements HTTPHeaderHelper {
    constructor(obj: any) {
        super(obj)
    }

    _value: any;
    get value(): any /*string*/ {
        return this._value
    }
    set value(x: any /*string*/) {
        this._value = x
    }
    setValue(x: any /*string*/) {
        this.value = x; return this
    }
}

export interface HandlerHelper extends Handler {
    $exec(x: any): any;
    $httpGet(x: any): any;
    $tcpSocket(x: any): any;
}

/** Handler defines a specific action that should be taken */
export class HandlerHelper extends Template implements HandlerHelper {
    constructor(obj: any) {
        super(obj)
    }

    _exec: any;
    get exec(): any /*ExecActionHelper*/ {
        return this._exec
    }
    set exec(x: any /*ExecActionHelper*/) {
        this._exec = x
    }
    setExec(x: any /*ExecActionHelper*/) {
        this.exec = x; return this
    }

    _httpGet: any;
    get httpGet(): any /*HTTPGetActionHelper*/ {
        return this._httpGet
    }
    set httpGet(x: any /*HTTPGetActionHelper*/) {
        this._httpGet = x
    }
    setHttpGet(x: any /*HTTPGetActionHelper*/) {
        this.httpGet = x; return this
    }

    _tcpSocket: any;
    get tcpSocket(): any /*TCPSocketActionHelper*/ {
        return this._tcpSocket
    }
    set tcpSocket(x: any /*TCPSocketActionHelper*/) {
        this._tcpSocket = x
    }
    setTcpSocket(x: any /*TCPSocketActionHelper*/) {
        this.tcpSocket = x; return this
    }
}

export interface HostAliasHelper extends HostAlias {
    $hostnames(x: any): any;
    $ip(x: any): any;
}

/** HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file. */
export class HostAliasHelper extends Template implements HostAliasHelper {
    constructor(obj: any) {
        super(obj)
    }

    _hostnames: any;
    get hostnames(): any /*Array<string>*/ {
        return this._hostnames
    }
    set hostnames(x: any /*Array<string>*/) {
        this._hostnames = this.set(this.hostnames, x)
    }
    setHostnames(x: any /*Array<string>*/) {
        this.hostnames = x; return this
    }

    _ip: any;
    get ip(): any /*string*/ {
        return this._ip
    }
    set ip(x: any /*string*/) {
        this._ip = x
    }
    setIp(x: any /*string*/) {
        this.ip = x; return this
    }
}

export interface HostPathVolumeSourceHelper extends HostPathVolumeSource {
    $path(x: any): any;
    $type(x: any): any;
}

/** Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
export class HostPathVolumeSourceHelper extends Template implements HostPathVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _path: any;
    get path(): any /*string*/ {
        return this._path
    }
    set path(x: any /*string*/) {
        this._path = x
    }
    setPath(x: any /*string*/) {
        this.path = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface ISCSIPersistentVolumeSourceHelper extends ISCSIPersistentVolumeSource {
    $chapAuthDiscovery(x: any): any;
    $chapAuthSession(x: any): any;
    $fsType(x: any): any;
    $initiatorName(x: any): any;
    $iqn(x: any): any;
    $iscsiInterface(x: any): any;
    $lun(x: any): any;
    $portals(x: any): any;
    $readOnly(x: any): any;
    $secretRef(x: any): any;
    $targetPortal(x: any): any;
}

/** ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
export class ISCSIPersistentVolumeSourceHelper extends Template implements ISCSIPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _chapAuthDiscovery: any;
    get chapAuthDiscovery(): any /*boolean*/ {
        return this._chapAuthDiscovery
    }
    set chapAuthDiscovery(x: any /*boolean*/) {
        this._chapAuthDiscovery = x
    }
    setChapAuthDiscovery(x: any /*boolean*/) {
        this.chapAuthDiscovery = x; return this
    }

    _chapAuthSession: any;
    get chapAuthSession(): any /*boolean*/ {
        return this._chapAuthSession
    }
    set chapAuthSession(x: any /*boolean*/) {
        this._chapAuthSession = x
    }
    setChapAuthSession(x: any /*boolean*/) {
        this.chapAuthSession = x; return this
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _initiatorName: any;
    get initiatorName(): any /*string*/ {
        return this._initiatorName
    }
    set initiatorName(x: any /*string*/) {
        this._initiatorName = x
    }
    setInitiatorName(x: any /*string*/) {
        this.initiatorName = x; return this
    }

    _iqn: any;
    get iqn(): any /*string*/ {
        return this._iqn
    }
    set iqn(x: any /*string*/) {
        this._iqn = x
    }
    setIqn(x: any /*string*/) {
        this.iqn = x; return this
    }

    _iscsiInterface: any;
    get iscsiInterface(): any /*string*/ {
        return this._iscsiInterface
    }
    set iscsiInterface(x: any /*string*/) {
        this._iscsiInterface = x
    }
    setIscsiInterface(x: any /*string*/) {
        this.iscsiInterface = x; return this
    }

    _lun: any;
    get lun(): any /*number*/ {
        return this._lun
    }
    set lun(x: any /*number*/) {
        this._lun = x
    }
    setLun(x: any /*number*/) {
        this.lun = x; return this
    }

    _portals: any;
    get portals(): any /*Array<string>*/ {
        return this._portals
    }
    set portals(x: any /*Array<string>*/) {
        this._portals = this.set(this.portals, x)
    }
    setPortals(x: any /*Array<string>*/) {
        this.portals = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _secretRef: any;
    get secretRef(): any /*SecretReferenceHelper*/ {
        return this._secretRef
    }
    set secretRef(x: any /*SecretReferenceHelper*/) {
        this._secretRef = x
    }
    setSecretRef(x: any /*SecretReferenceHelper*/) {
        this.secretRef = x; return this
    }

    _targetPortal: any;
    get targetPortal(): any /*string*/ {
        return this._targetPortal
    }
    set targetPortal(x: any /*string*/) {
        this._targetPortal = x
    }
    setTargetPortal(x: any /*string*/) {
        this.targetPortal = x; return this
    }
}

export interface ISCSIVolumeSourceHelper extends ISCSIVolumeSource {
    $chapAuthDiscovery(x: any): any;
    $chapAuthSession(x: any): any;
    $fsType(x: any): any;
    $initiatorName(x: any): any;
    $iqn(x: any): any;
    $iscsiInterface(x: any): any;
    $lun(x: any): any;
    $portals(x: any): any;
    $readOnly(x: any): any;
    $secretRef(x: any): any;
    $targetPortal(x: any): any;
}

/** Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
export class ISCSIVolumeSourceHelper extends Template implements ISCSIVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _chapAuthDiscovery: any;
    get chapAuthDiscovery(): any /*boolean*/ {
        return this._chapAuthDiscovery
    }
    set chapAuthDiscovery(x: any /*boolean*/) {
        this._chapAuthDiscovery = x
    }
    setChapAuthDiscovery(x: any /*boolean*/) {
        this.chapAuthDiscovery = x; return this
    }

    _chapAuthSession: any;
    get chapAuthSession(): any /*boolean*/ {
        return this._chapAuthSession
    }
    set chapAuthSession(x: any /*boolean*/) {
        this._chapAuthSession = x
    }
    setChapAuthSession(x: any /*boolean*/) {
        this.chapAuthSession = x; return this
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _initiatorName: any;
    get initiatorName(): any /*string*/ {
        return this._initiatorName
    }
    set initiatorName(x: any /*string*/) {
        this._initiatorName = x
    }
    setInitiatorName(x: any /*string*/) {
        this.initiatorName = x; return this
    }

    _iqn: any;
    get iqn(): any /*string*/ {
        return this._iqn
    }
    set iqn(x: any /*string*/) {
        this._iqn = x
    }
    setIqn(x: any /*string*/) {
        this.iqn = x; return this
    }

    _iscsiInterface: any;
    get iscsiInterface(): any /*string*/ {
        return this._iscsiInterface
    }
    set iscsiInterface(x: any /*string*/) {
        this._iscsiInterface = x
    }
    setIscsiInterface(x: any /*string*/) {
        this.iscsiInterface = x; return this
    }

    _lun: any;
    get lun(): any /*number*/ {
        return this._lun
    }
    set lun(x: any /*number*/) {
        this._lun = x
    }
    setLun(x: any /*number*/) {
        this.lun = x; return this
    }

    _portals: any;
    get portals(): any /*Array<string>*/ {
        return this._portals
    }
    set portals(x: any /*Array<string>*/) {
        this._portals = this.set(this.portals, x)
    }
    setPortals(x: any /*Array<string>*/) {
        this.portals = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _secretRef: any;
    get secretRef(): any /*LocalObjectReferenceHelper*/ {
        return this._secretRef
    }
    set secretRef(x: any /*LocalObjectReferenceHelper*/) {
        this._secretRef = x
    }
    setSecretRef(x: any /*LocalObjectReferenceHelper*/) {
        this.secretRef = x; return this
    }

    _targetPortal: any;
    get targetPortal(): any /*string*/ {
        return this._targetPortal
    }
    set targetPortal(x: any /*string*/) {
        this._targetPortal = x
    }
    setTargetPortal(x: any /*string*/) {
        this.targetPortal = x; return this
    }
}

export interface KeyToPathHelper extends KeyToPath {
    $key(x: any): any;
    $mode(x: any): any;
    $path(x: any): any;
}

/** Maps a string key to a path within a volume. */
export class KeyToPathHelper extends Template implements KeyToPathHelper {
    constructor(obj: any) {
        super(obj)
    }

    _key: any;
    get key(): any /*string*/ {
        return this._key
    }
    set key(x: any /*string*/) {
        this._key = x
    }
    setKey(x: any /*string*/) {
        this.key = x; return this
    }

    _mode: any;
    get mode(): any /*number*/ {
        return this._mode
    }
    set mode(x: any /*number*/) {
        this._mode = x
    }
    setMode(x: any /*number*/) {
        this.mode = x; return this
    }

    _path: any;
    get path(): any /*string*/ {
        return this._path
    }
    set path(x: any /*string*/) {
        this._path = x
    }
    setPath(x: any /*string*/) {
        this.path = x; return this
    }
}

export interface LifecycleHelper extends Lifecycle {
    $postStart(x: any): any;
    $preStop(x: any): any;
}

/** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
export class LifecycleHelper extends Template implements LifecycleHelper {
    constructor(obj: any) {
        super(obj)
    }

    _postStart: any;
    get postStart(): any /*HandlerHelper*/ {
        return this._postStart
    }
    set postStart(x: any /*HandlerHelper*/) {
        this._postStart = x
    }
    setPostStart(x: any /*HandlerHelper*/) {
        this.postStart = x; return this
    }

    _preStop: any;
    get preStop(): any /*HandlerHelper*/ {
        return this._preStop
    }
    set preStop(x: any /*HandlerHelper*/) {
        this._preStop = x
    }
    setPreStop(x: any /*HandlerHelper*/) {
        this.preStop = x; return this
    }
}

export interface LimitRangeHelper extends LimitRange {
    $metadata(x: any): any;
    $spec(x: any): any;
}

/** LimitRange sets resource usage limits for each kind of resource in a Namespace. */
export class LimitRangeHelper extends ResourceTemplate implements LimitRangeHelper {
    static kind = 'LimitRange';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, LimitRangeHelper.kind, LimitRangeHelper.apiVersion)
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
    get spec(): any /*LimitRangeSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*LimitRangeSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*LimitRangeSpecHelper*/) {
        this.spec = x; return this
    }
}

export interface LimitRangeItemHelper extends LimitRangeItem {
    $default_(x: any): any;
    $defaultRequest(x: any): any;
    $max(x: any): any;
    $maxLimitRequestRatio(x: any): any;
    $min(x: any): any;
    $type(x: any): any;
}

/** LimitRangeItem defines a min/max usage limit for any resource that matches on kind. */
export class LimitRangeItemHelper extends Template implements LimitRangeItemHelper {
    constructor(obj: any) {
        super(obj)
    }

    _default_: any;
    get default_(): any /*{[name: string]: Quantity}Helper*/ {
        return this._default_
    }
    set default_(x: any /*{[name: string]: Quantity}Helper*/) {
        this._default_ = this.set(this.default_, x)
    }
    setDefault_(x: any /*{[name: string]: Quantity}Helper*/) {
        this.default_ = x; return this
    }

    _defaultRequest: any;
    get defaultRequest(): any /*{[name: string]: Quantity}Helper*/ {
        return this._defaultRequest
    }
    set defaultRequest(x: any /*{[name: string]: Quantity}Helper*/) {
        this._defaultRequest = this.set(this.defaultRequest, x)
    }
    setDefaultRequest(x: any /*{[name: string]: Quantity}Helper*/) {
        this.defaultRequest = x; return this
    }

    _max: any;
    get max(): any /*{[name: string]: Quantity}Helper*/ {
        return this._max
    }
    set max(x: any /*{[name: string]: Quantity}Helper*/) {
        this._max = this.set(this.max, x)
    }
    setMax(x: any /*{[name: string]: Quantity}Helper*/) {
        this.max = x; return this
    }

    _maxLimitRequestRatio: any;
    get maxLimitRequestRatio(): any /*{[name: string]: Quantity}Helper*/ {
        return this._maxLimitRequestRatio
    }
    set maxLimitRequestRatio(x: any /*{[name: string]: Quantity}Helper*/) {
        this._maxLimitRequestRatio = this.set(this.maxLimitRequestRatio, x)
    }
    setMaxLimitRequestRatio(x: any /*{[name: string]: Quantity}Helper*/) {
        this.maxLimitRequestRatio = x; return this
    }

    _min: any;
    get min(): any /*{[name: string]: Quantity}Helper*/ {
        return this._min
    }
    set min(x: any /*{[name: string]: Quantity}Helper*/) {
        this._min = this.set(this.min, x)
    }
    setMin(x: any /*{[name: string]: Quantity}Helper*/) {
        this.min = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface LimitRangeListHelper extends LimitRangeList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** LimitRangeList is a list of LimitRange items. */
export class LimitRangeListHelper extends ResourceTemplate implements LimitRangeListHelper {
    static kind = 'LimitRangeList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, LimitRangeListHelper.kind, LimitRangeListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<LimitRange>*/ {
        return this._items
    }
    set items(x: any /*Array<LimitRange>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<LimitRange>*/) {
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

export interface LimitRangeSpecHelper extends LimitRangeSpec {
    $limits(x: any): any;
}

/** LimitRangeSpec defines a min/max usage limit for resources that match on kind. */
export class LimitRangeSpecHelper extends Template implements LimitRangeSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _limits: any;
    get limits(): any /*Array<LimitRangeItem>*/ {
        return this._limits
    }
    set limits(x: any /*Array<LimitRangeItem>*/) {
        this._limits = this.set(this.limits, x)
    }
    setLimits(x: any /*Array<LimitRangeItem>*/) {
        this.limits = x; return this
    }
}

export interface LoadBalancerIngressHelper extends LoadBalancerIngress {
    $hostname(x: any): any;
    $ip(x: any): any;
    $ports(x: any): any;
}

/** LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point. */
export class LoadBalancerIngressHelper extends Template implements LoadBalancerIngressHelper {
    constructor(obj: any) {
        super(obj)
    }

    _hostname: any;
    get hostname(): any /*string*/ {
        return this._hostname
    }
    set hostname(x: any /*string*/) {
        this._hostname = x
    }
    setHostname(x: any /*string*/) {
        this.hostname = x; return this
    }

    _ip: any;
    get ip(): any /*string*/ {
        return this._ip
    }
    set ip(x: any /*string*/) {
        this._ip = x
    }
    setIp(x: any /*string*/) {
        this.ip = x; return this
    }

    _ports: any;
    get ports(): any /*Array<PortStatus>*/ {
        return this._ports
    }
    set ports(x: any /*Array<PortStatus>*/) {
        this._ports = this.set(this.ports, x)
    }
    setPorts(x: any /*Array<PortStatus>*/) {
        this.ports = x; return this
    }
}

export interface LoadBalancerStatusHelper extends LoadBalancerStatus {
    $ingress(x: any): any;
}

/** LoadBalancerStatus represents the status of a load-balancer. */
export class LoadBalancerStatusHelper extends Template implements LoadBalancerStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ingress: any;
    get ingress(): any /*Array<LoadBalancerIngress>*/ {
        return this._ingress
    }
    set ingress(x: any /*Array<LoadBalancerIngress>*/) {
        this._ingress = this.set(this.ingress, x)
    }
    setIngress(x: any /*Array<LoadBalancerIngress>*/) {
        this.ingress = x; return this
    }
}

export interface LocalObjectReferenceHelper extends LocalObjectReference {
}

/** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
export class LocalObjectReferenceHelper extends Template implements LocalObjectReferenceHelper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface LocalVolumeSourceHelper extends LocalVolumeSource {
    $fsType(x: any): any;
    $path(x: any): any;
}

/** Local represents directly-attached storage with node affinity (Beta feature) */
export class LocalVolumeSourceHelper extends Template implements LocalVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _path: any;
    get path(): any /*string*/ {
        return this._path
    }
    set path(x: any /*string*/) {
        this._path = x
    }
    setPath(x: any /*string*/) {
        this.path = x; return this
    }
}

export interface NFSVolumeSourceHelper extends NFSVolumeSource {
    $path(x: any): any;
    $readOnly(x: any): any;
    $server(x: any): any;
}

/** Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
export class NFSVolumeSourceHelper extends Template implements NFSVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _path: any;
    get path(): any /*string*/ {
        return this._path
    }
    set path(x: any /*string*/) {
        this._path = x
    }
    setPath(x: any /*string*/) {
        this.path = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _server: any;
    get server(): any /*string*/ {
        return this._server
    }
    set server(x: any /*string*/) {
        this._server = x
    }
    setServer(x: any /*string*/) {
        this.server = x; return this
    }
}

export interface NamespaceHelper extends Namespace {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** Namespace provides a scope for Names. Use of multiple namespaces is optional. */
export class NamespaceHelper extends ResourceTemplate implements NamespaceHelper {
    static kind = 'Namespace';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, NamespaceHelper.kind, NamespaceHelper.apiVersion)
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
    get spec(): any /*NamespaceSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*NamespaceSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*NamespaceSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*NamespaceStatusHelper*/ {
        return this._status
    }
    set status(x: any /*NamespaceStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*NamespaceStatusHelper*/) {
        this.status = x; return this
    }
}

export interface NamespaceConditionHelper extends NamespaceCondition {
    $lastTransitionTime(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** NamespaceCondition contains details about state of namespace. */
export class NamespaceConditionHelper extends Template implements NamespaceConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastTransitionTime: any;
    get lastTransitionTime(): any /*Time*/ {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: any /*Time*/) {
        this._lastTransitionTime = x
    }
    setLastTransitionTime(x: any /*Time*/) {
        this.lastTransitionTime = x; return this
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

    _reason: any;
    get reason(): any /*string*/ {
        return this._reason
    }
    set reason(x: any /*string*/) {
        this._reason = x
    }
    setReason(x: any /*string*/) {
        this.reason = x; return this
    }

    _status: any;
    get status(): any /*string*/ {
        return this._status
    }
    set status(x: any /*string*/) {
        this._status = x
    }
    setStatus(x: any /*string*/) {
        this.status = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface NamespaceListHelper extends NamespaceList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** NamespaceList is a list of Namespaces. */
export class NamespaceListHelper extends ResourceTemplate implements NamespaceListHelper {
    static kind = 'NamespaceList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, NamespaceListHelper.kind, NamespaceListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<Namespace>*/ {
        return this._items
    }
    set items(x: any /*Array<Namespace>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<Namespace>*/) {
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

export interface NamespaceSpecHelper extends NamespaceSpec {
    $finalizers(x: any): any;
}

/** NamespaceSpec describes the attributes on a Namespace. */
export class NamespaceSpecHelper extends Template implements NamespaceSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _finalizers: any;
    get finalizers(): any /*Array<string>*/ {
        return this._finalizers
    }
    set finalizers(x: any /*Array<string>*/) {
        this._finalizers = this.set(this.finalizers, x)
    }
    setFinalizers(x: any /*Array<string>*/) {
        this.finalizers = x; return this
    }
}

export interface NamespaceStatusHelper extends NamespaceStatus {
    $conditions(x: any): any;
    $phase(x: any): any;
}

/** NamespaceStatus is information about the current status of a Namespace. */
export class NamespaceStatusHelper extends Template implements NamespaceStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conditions: any;
    get conditions(): any /*Array<NamespaceCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<NamespaceCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<NamespaceCondition>*/) {
        this.conditions = x; return this
    }

    _phase: any;
    get phase(): any /*string*/ {
        return this._phase
    }
    set phase(x: any /*string*/) {
        this._phase = x
    }
    setPhase(x: any /*string*/) {
        this.phase = x; return this
    }
}

export interface NodeHelper extends Node {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd). */
export class NodeHelper extends ResourceTemplate implements NodeHelper {
    static kind = 'Node';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, NodeHelper.kind, NodeHelper.apiVersion)
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
    get spec(): any /*NodeSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*NodeSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*NodeSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*NodeStatusHelper*/ {
        return this._status
    }
    set status(x: any /*NodeStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*NodeStatusHelper*/) {
        this.status = x; return this
    }
}

export interface NodeAddressHelper extends NodeAddress {
    $address(x: any): any;
    $type(x: any): any;
}

/** NodeAddress contains information for the node's address. */
export class NodeAddressHelper extends Template implements NodeAddressHelper {
    constructor(obj: any) {
        super(obj)
    }

    _address: any;
    get address(): any /*string*/ {
        return this._address
    }
    set address(x: any /*string*/) {
        this._address = x
    }
    setAddress(x: any /*string*/) {
        this.address = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface NodeAffinityHelper extends NodeAffinity {
    $preferredDuringSchedulingIgnoredDuringExecution(x: any): any;
    $requiredDuringSchedulingIgnoredDuringExecution(x: any): any;
}

/** Node affinity is a group of node affinity scheduling rules. */
export class NodeAffinityHelper extends Template implements NodeAffinityHelper {
    constructor(obj: any) {
        super(obj)
    }

    _preferredDuringSchedulingIgnoredDuringExecution: any;
    get preferredDuringSchedulingIgnoredDuringExecution(): any /*Array<PreferredSchedulingTerm>*/ {
        return this._preferredDuringSchedulingIgnoredDuringExecution
    }
    set preferredDuringSchedulingIgnoredDuringExecution(x: any /*Array<PreferredSchedulingTerm>*/) {
        this._preferredDuringSchedulingIgnoredDuringExecution = this.set(this.preferredDuringSchedulingIgnoredDuringExecution, x)
    }
    setPreferredDuringSchedulingIgnoredDuringExecution(x: any /*Array<PreferredSchedulingTerm>*/) {
        this.preferredDuringSchedulingIgnoredDuringExecution = x; return this
    }

    _requiredDuringSchedulingIgnoredDuringExecution: any;
    get requiredDuringSchedulingIgnoredDuringExecution(): any /*NodeSelectorHelper*/ {
        return this._requiredDuringSchedulingIgnoredDuringExecution
    }
    set requiredDuringSchedulingIgnoredDuringExecution(x: any /*NodeSelectorHelper*/) {
        this._requiredDuringSchedulingIgnoredDuringExecution = x
    }
    setRequiredDuringSchedulingIgnoredDuringExecution(x: any /*NodeSelectorHelper*/) {
        this.requiredDuringSchedulingIgnoredDuringExecution = x; return this
    }
}

export interface NodeConditionHelper extends NodeCondition {
    $lastHeartbeatTime(x: any): any;
    $lastTransitionTime(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** NodeCondition contains condition information for a node. */
export class NodeConditionHelper extends Template implements NodeConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastHeartbeatTime: any;
    get lastHeartbeatTime(): any /*Time*/ {
        return this._lastHeartbeatTime
    }
    set lastHeartbeatTime(x: any /*Time*/) {
        this._lastHeartbeatTime = x
    }
    setLastHeartbeatTime(x: any /*Time*/) {
        this.lastHeartbeatTime = x; return this
    }

    _lastTransitionTime: any;
    get lastTransitionTime(): any /*Time*/ {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: any /*Time*/) {
        this._lastTransitionTime = x
    }
    setLastTransitionTime(x: any /*Time*/) {
        this.lastTransitionTime = x; return this
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

    _reason: any;
    get reason(): any /*string*/ {
        return this._reason
    }
    set reason(x: any /*string*/) {
        this._reason = x
    }
    setReason(x: any /*string*/) {
        this.reason = x; return this
    }

    _status: any;
    get status(): any /*string*/ {
        return this._status
    }
    set status(x: any /*string*/) {
        this._status = x
    }
    setStatus(x: any /*string*/) {
        this.status = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface NodeConfigSourceHelper extends NodeConfigSource {
    $configMap(x: any): any;
}

/** NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. */
export class NodeConfigSourceHelper extends Template implements NodeConfigSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _configMap: any;
    get configMap(): any /*ConfigMapNodeConfigSourceHelper*/ {
        return this._configMap
    }
    set configMap(x: any /*ConfigMapNodeConfigSourceHelper*/) {
        this._configMap = x
    }
    setConfigMap(x: any /*ConfigMapNodeConfigSourceHelper*/) {
        this.configMap = x; return this
    }
}

export interface NodeConfigStatusHelper extends NodeConfigStatus {
    $active(x: any): any;
    $assigned(x: any): any;
    $error(x: any): any;
    $lastKnownGood(x: any): any;
}

/** NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource. */
export class NodeConfigStatusHelper extends Template implements NodeConfigStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _active: any;
    get active(): any /*NodeConfigSourceHelper*/ {
        return this._active
    }
    set active(x: any /*NodeConfigSourceHelper*/) {
        this._active = x
    }
    setActive(x: any /*NodeConfigSourceHelper*/) {
        this.active = x; return this
    }

    _assigned: any;
    get assigned(): any /*NodeConfigSourceHelper*/ {
        return this._assigned
    }
    set assigned(x: any /*NodeConfigSourceHelper*/) {
        this._assigned = x
    }
    setAssigned(x: any /*NodeConfigSourceHelper*/) {
        this.assigned = x; return this
    }

    _error: any;
    get error(): any /*string*/ {
        return this._error
    }
    set error(x: any /*string*/) {
        this._error = x
    }
    setError(x: any /*string*/) {
        this.error = x; return this
    }

    _lastKnownGood: any;
    get lastKnownGood(): any /*NodeConfigSourceHelper*/ {
        return this._lastKnownGood
    }
    set lastKnownGood(x: any /*NodeConfigSourceHelper*/) {
        this._lastKnownGood = x
    }
    setLastKnownGood(x: any /*NodeConfigSourceHelper*/) {
        this.lastKnownGood = x; return this
    }
}

export interface NodeDaemonEndpointsHelper extends NodeDaemonEndpoints {
    $kubeletEndpoint(x: any): any;
}

/** NodeDaemonEndpoints lists ports opened by daemons running on the Node. */
export class NodeDaemonEndpointsHelper extends Template implements NodeDaemonEndpointsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _kubeletEndpoint: any;
    get kubeletEndpoint(): any /*DaemonEndpointHelper*/ {
        return this._kubeletEndpoint
    }
    set kubeletEndpoint(x: any /*DaemonEndpointHelper*/) {
        this._kubeletEndpoint = x
    }
    setKubeletEndpoint(x: any /*DaemonEndpointHelper*/) {
        this.kubeletEndpoint = x; return this
    }
}

export interface NodeListHelper extends NodeList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** NodeList is the whole list of all Nodes which have been registered with master. */
export class NodeListHelper extends ResourceTemplate implements NodeListHelper {
    static kind = 'NodeList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, NodeListHelper.kind, NodeListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<Node>*/ {
        return this._items
    }
    set items(x: any /*Array<Node>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<Node>*/) {
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

export interface NodeSelectorHelper extends NodeSelector {
    $nodeSelectorTerms(x: any): any;
}

/** A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
export class NodeSelectorHelper extends Template implements NodeSelectorHelper {
    constructor(obj: any) {
        super(obj)
    }

    _nodeSelectorTerms: any;
    get nodeSelectorTerms(): any /*Array<NodeSelectorTerm>*/ {
        return this._nodeSelectorTerms
    }
    set nodeSelectorTerms(x: any /*Array<NodeSelectorTerm>*/) {
        this._nodeSelectorTerms = this.set(this.nodeSelectorTerms, x)
    }
    setNodeSelectorTerms(x: any /*Array<NodeSelectorTerm>*/) {
        this.nodeSelectorTerms = x; return this
    }
}

export interface NodeSelectorRequirementHelper extends NodeSelectorRequirement {
    $key(x: any): any;
    $operator(x: any): any;
    $values(x: any): any;
}

/** A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export class NodeSelectorRequirementHelper extends Template implements NodeSelectorRequirementHelper {
    constructor(obj: any) {
        super(obj)
    }

    _key: any;
    get key(): any /*string*/ {
        return this._key
    }
    set key(x: any /*string*/) {
        this._key = x
    }
    setKey(x: any /*string*/) {
        this.key = x; return this
    }

    _operator: any;
    get operator(): any /*string*/ {
        return this._operator
    }
    set operator(x: any /*string*/) {
        this._operator = x
    }
    setOperator(x: any /*string*/) {
        this.operator = x; return this
    }

    _values: any;
    get values(): any /*Array<string>*/ {
        return this._values
    }
    set values(x: any /*Array<string>*/) {
        this._values = this.set(this.values, x)
    }
    setValues(x: any /*Array<string>*/) {
        this.values = x; return this
    }
}

export interface NodeSelectorTermHelper extends NodeSelectorTerm {
    $matchExpressions(x: any): any;
    $matchFields(x: any): any;
}

/** A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
export class NodeSelectorTermHelper extends Template implements NodeSelectorTermHelper {
    constructor(obj: any) {
        super(obj)
    }

    _matchExpressions: any;
    get matchExpressions(): any /*Array<NodeSelectorRequirement>*/ {
        return this._matchExpressions
    }
    set matchExpressions(x: any /*Array<NodeSelectorRequirement>*/) {
        this._matchExpressions = this.set(this.matchExpressions, x)
    }
    setMatchExpressions(x: any /*Array<NodeSelectorRequirement>*/) {
        this.matchExpressions = x; return this
    }

    _matchFields: any;
    get matchFields(): any /*Array<NodeSelectorRequirement>*/ {
        return this._matchFields
    }
    set matchFields(x: any /*Array<NodeSelectorRequirement>*/) {
        this._matchFields = this.set(this.matchFields, x)
    }
    setMatchFields(x: any /*Array<NodeSelectorRequirement>*/) {
        this.matchFields = x; return this
    }
}

export interface NodeSpecHelper extends NodeSpec {
    $configSource(x: any): any;
    $externalID(x: any): any;
    $podCIDR(x: any): any;
    $podCIDRs(x: any): any;
    $providerID(x: any): any;
    $taints(x: any): any;
    $unschedulable(x: any): any;
}

/** NodeSpec describes the attributes that a node is created with. */
export class NodeSpecHelper extends Template implements NodeSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _configSource: any;
    get configSource(): any /*NodeConfigSourceHelper*/ {
        return this._configSource
    }
    set configSource(x: any /*NodeConfigSourceHelper*/) {
        this._configSource = x
    }
    setConfigSource(x: any /*NodeConfigSourceHelper*/) {
        this.configSource = x; return this
    }

    _externalID: any;
    get externalID(): any /*string*/ {
        return this._externalID
    }
    set externalID(x: any /*string*/) {
        this._externalID = x
    }
    setExternalID(x: any /*string*/) {
        this.externalID = x; return this
    }

    _podCIDR: any;
    get podCIDR(): any /*string*/ {
        return this._podCIDR
    }
    set podCIDR(x: any /*string*/) {
        this._podCIDR = x
    }
    setPodCIDR(x: any /*string*/) {
        this.podCIDR = x; return this
    }

    _podCIDRs: any;
    get podCIDRs(): any /*Array<string>*/ {
        return this._podCIDRs
    }
    set podCIDRs(x: any /*Array<string>*/) {
        this._podCIDRs = this.set(this.podCIDRs, x)
    }
    setPodCIDRs(x: any /*Array<string>*/) {
        this.podCIDRs = x; return this
    }

    _providerID: any;
    get providerID(): any /*string*/ {
        return this._providerID
    }
    set providerID(x: any /*string*/) {
        this._providerID = x
    }
    setProviderID(x: any /*string*/) {
        this.providerID = x; return this
    }

    _taints: any;
    get taints(): any /*Array<Taint>*/ {
        return this._taints
    }
    set taints(x: any /*Array<Taint>*/) {
        this._taints = this.set(this.taints, x)
    }
    setTaints(x: any /*Array<Taint>*/) {
        this.taints = x; return this
    }

    _unschedulable: any;
    get unschedulable(): any /*boolean*/ {
        return this._unschedulable
    }
    set unschedulable(x: any /*boolean*/) {
        this._unschedulable = x
    }
    setUnschedulable(x: any /*boolean*/) {
        this.unschedulable = x; return this
    }
}

export interface NodeStatusHelper extends NodeStatus {
    $addresses(x: any): any;
    $allocatable(x: any): any;
    $capacity(x: any): any;
    $conditions(x: any): any;
    $config(x: any): any;
    $daemonEndpoints(x: any): any;
    $images(x: any): any;
    $nodeInfo(x: any): any;
    $phase(x: any): any;
    $volumesAttached(x: any): any;
    $volumesInUse(x: any): any;
}

/** NodeStatus is information about the current status of a node. */
export class NodeStatusHelper extends Template implements NodeStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _addresses: any;
    get addresses(): any /*Array<NodeAddress>*/ {
        return this._addresses
    }
    set addresses(x: any /*Array<NodeAddress>*/) {
        this._addresses = this.set(this.addresses, x)
    }
    setAddresses(x: any /*Array<NodeAddress>*/) {
        this.addresses = x; return this
    }

    _allocatable: any;
    get allocatable(): any /*{[name: string]: Quantity}Helper*/ {
        return this._allocatable
    }
    set allocatable(x: any /*{[name: string]: Quantity}Helper*/) {
        this._allocatable = this.set(this.allocatable, x)
    }
    setAllocatable(x: any /*{[name: string]: Quantity}Helper*/) {
        this.allocatable = x; return this
    }

    _capacity: any;
    get capacity(): any /*{[name: string]: Quantity}Helper*/ {
        return this._capacity
    }
    set capacity(x: any /*{[name: string]: Quantity}Helper*/) {
        this._capacity = this.set(this.capacity, x)
    }
    setCapacity(x: any /*{[name: string]: Quantity}Helper*/) {
        this.capacity = x; return this
    }

    _conditions: any;
    get conditions(): any /*Array<NodeCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<NodeCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<NodeCondition>*/) {
        this.conditions = x; return this
    }

    _config: any;
    get config(): any /*NodeConfigStatusHelper*/ {
        return this._config
    }
    set config(x: any /*NodeConfigStatusHelper*/) {
        this._config = x
    }
    setConfig(x: any /*NodeConfigStatusHelper*/) {
        this.config = x; return this
    }

    _daemonEndpoints: any;
    get daemonEndpoints(): any /*NodeDaemonEndpointsHelper*/ {
        return this._daemonEndpoints
    }
    set daemonEndpoints(x: any /*NodeDaemonEndpointsHelper*/) {
        this._daemonEndpoints = x
    }
    setDaemonEndpoints(x: any /*NodeDaemonEndpointsHelper*/) {
        this.daemonEndpoints = x; return this
    }

    _images: any;
    get images(): any /*Array<ContainerImage>*/ {
        return this._images
    }
    set images(x: any /*Array<ContainerImage>*/) {
        this._images = this.set(this.images, x)
    }
    setImages(x: any /*Array<ContainerImage>*/) {
        this.images = x; return this
    }

    _nodeInfo: any;
    get nodeInfo(): any /*NodeSystemInfoHelper*/ {
        return this._nodeInfo
    }
    set nodeInfo(x: any /*NodeSystemInfoHelper*/) {
        this._nodeInfo = x
    }
    setNodeInfo(x: any /*NodeSystemInfoHelper*/) {
        this.nodeInfo = x; return this
    }

    _phase: any;
    get phase(): any /*string*/ {
        return this._phase
    }
    set phase(x: any /*string*/) {
        this._phase = x
    }
    setPhase(x: any /*string*/) {
        this.phase = x; return this
    }

    _volumesAttached: any;
    get volumesAttached(): any /*Array<AttachedVolume>*/ {
        return this._volumesAttached
    }
    set volumesAttached(x: any /*Array<AttachedVolume>*/) {
        this._volumesAttached = this.set(this.volumesAttached, x)
    }
    setVolumesAttached(x: any /*Array<AttachedVolume>*/) {
        this.volumesAttached = x; return this
    }

    _volumesInUse: any;
    get volumesInUse(): any /*Array<string>*/ {
        return this._volumesInUse
    }
    set volumesInUse(x: any /*Array<string>*/) {
        this._volumesInUse = this.set(this.volumesInUse, x)
    }
    setVolumesInUse(x: any /*Array<string>*/) {
        this.volumesInUse = x; return this
    }
}

export interface NodeSystemInfoHelper extends NodeSystemInfo {
    $architecture(x: any): any;
    $bootID(x: any): any;
    $containerRuntimeVersion(x: any): any;
    $kernelVersion(x: any): any;
    $kubeProxyVersion(x: any): any;
    $kubeletVersion(x: any): any;
    $machineID(x: any): any;
    $operatingSystem(x: any): any;
    $osImage(x: any): any;
    $systemUUID(x: any): any;
}

/** NodeSystemInfo is a set of ids/uuids to uniquely identify the node. */
export class NodeSystemInfoHelper extends Template implements NodeSystemInfoHelper {
    constructor(obj: any) {
        super(obj)
    }

    _architecture: any;
    get architecture(): any /*string*/ {
        return this._architecture
    }
    set architecture(x: any /*string*/) {
        this._architecture = x
    }
    setArchitecture(x: any /*string*/) {
        this.architecture = x; return this
    }

    _bootID: any;
    get bootID(): any /*string*/ {
        return this._bootID
    }
    set bootID(x: any /*string*/) {
        this._bootID = x
    }
    setBootID(x: any /*string*/) {
        this.bootID = x; return this
    }

    _containerRuntimeVersion: any;
    get containerRuntimeVersion(): any /*string*/ {
        return this._containerRuntimeVersion
    }
    set containerRuntimeVersion(x: any /*string*/) {
        this._containerRuntimeVersion = x
    }
    setContainerRuntimeVersion(x: any /*string*/) {
        this.containerRuntimeVersion = x; return this
    }

    _kernelVersion: any;
    get kernelVersion(): any /*string*/ {
        return this._kernelVersion
    }
    set kernelVersion(x: any /*string*/) {
        this._kernelVersion = x
    }
    setKernelVersion(x: any /*string*/) {
        this.kernelVersion = x; return this
    }

    _kubeProxyVersion: any;
    get kubeProxyVersion(): any /*string*/ {
        return this._kubeProxyVersion
    }
    set kubeProxyVersion(x: any /*string*/) {
        this._kubeProxyVersion = x
    }
    setKubeProxyVersion(x: any /*string*/) {
        this.kubeProxyVersion = x; return this
    }

    _kubeletVersion: any;
    get kubeletVersion(): any /*string*/ {
        return this._kubeletVersion
    }
    set kubeletVersion(x: any /*string*/) {
        this._kubeletVersion = x
    }
    setKubeletVersion(x: any /*string*/) {
        this.kubeletVersion = x; return this
    }

    _machineID: any;
    get machineID(): any /*string*/ {
        return this._machineID
    }
    set machineID(x: any /*string*/) {
        this._machineID = x
    }
    setMachineID(x: any /*string*/) {
        this.machineID = x; return this
    }

    _operatingSystem: any;
    get operatingSystem(): any /*string*/ {
        return this._operatingSystem
    }
    set operatingSystem(x: any /*string*/) {
        this._operatingSystem = x
    }
    setOperatingSystem(x: any /*string*/) {
        this.operatingSystem = x; return this
    }

    _osImage: any;
    get osImage(): any /*string*/ {
        return this._osImage
    }
    set osImage(x: any /*string*/) {
        this._osImage = x
    }
    setOsImage(x: any /*string*/) {
        this.osImage = x; return this
    }

    _systemUUID: any;
    get systemUUID(): any /*string*/ {
        return this._systemUUID
    }
    set systemUUID(x: any /*string*/) {
        this._systemUUID = x
    }
    setSystemUUID(x: any /*string*/) {
        this.systemUUID = x; return this
    }
}

export interface ObjectFieldSelectorHelper extends ObjectFieldSelector {
    $fieldPath(x: any): any;
}

/** ObjectFieldSelector selects an APIVersioned field of an object. */
export class ObjectFieldSelectorHelper extends Template implements ObjectFieldSelectorHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fieldPath: any;
    get fieldPath(): any /*string*/ {
        return this._fieldPath
    }
    set fieldPath(x: any /*string*/) {
        this._fieldPath = x
    }
    setFieldPath(x: any /*string*/) {
        this.fieldPath = x; return this
    }
}

export interface ObjectReferenceHelper extends ObjectReference {
    $fieldPath(x: any): any;
    $resourceVersion(x: any): any;
    $uid(x: any): any;
}

/** ObjectReference contains enough information to let you inspect or modify the referred object. */
export class ObjectReferenceHelper extends Template implements ObjectReferenceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fieldPath: any;
    get fieldPath(): any /*string*/ {
        return this._fieldPath
    }
    set fieldPath(x: any /*string*/) {
        this._fieldPath = x
    }
    setFieldPath(x: any /*string*/) {
        this.fieldPath = x; return this
    }

    _resourceVersion: any;
    get resourceVersion(): any /*string*/ {
        return this._resourceVersion
    }
    set resourceVersion(x: any /*string*/) {
        this._resourceVersion = x
    }
    setResourceVersion(x: any /*string*/) {
        this.resourceVersion = x; return this
    }

    _uid: any;
    get uid(): any /*string*/ {
        return this._uid
    }
    set uid(x: any /*string*/) {
        this._uid = x
    }
    setUid(x: any /*string*/) {
        this.uid = x; return this
    }
}

export interface PersistentVolumeHelper extends PersistentVolume {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes */
export class PersistentVolumeHelper extends ResourceTemplate implements PersistentVolumeHelper {
    static kind = 'PersistentVolume';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PersistentVolumeHelper.kind, PersistentVolumeHelper.apiVersion)
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
    get spec(): any /*PersistentVolumeSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*PersistentVolumeSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*PersistentVolumeSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*PersistentVolumeStatusHelper*/ {
        return this._status
    }
    set status(x: any /*PersistentVolumeStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*PersistentVolumeStatusHelper*/) {
        this.status = x; return this
    }
}

export interface PersistentVolumeClaimHelper extends PersistentVolumeClaim {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** PersistentVolumeClaim is a user's request for and claim to a persistent volume */
export class PersistentVolumeClaimHelper extends ResourceTemplate implements PersistentVolumeClaimHelper {
    static kind = 'PersistentVolumeClaim';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PersistentVolumeClaimHelper.kind, PersistentVolumeClaimHelper.apiVersion)
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
    get spec(): any /*PersistentVolumeClaimSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*PersistentVolumeClaimSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*PersistentVolumeClaimSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*PersistentVolumeClaimStatusHelper*/ {
        return this._status
    }
    set status(x: any /*PersistentVolumeClaimStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*PersistentVolumeClaimStatusHelper*/) {
        this.status = x; return this
    }
}

export interface PersistentVolumeClaimConditionHelper extends PersistentVolumeClaimCondition {
    $lastProbeTime(x: any): any;
    $lastTransitionTime(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** PersistentVolumeClaimCondition contails details about state of pvc */
export class PersistentVolumeClaimConditionHelper extends Template implements PersistentVolumeClaimConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastProbeTime: any;
    get lastProbeTime(): any /*Time*/ {
        return this._lastProbeTime
    }
    set lastProbeTime(x: any /*Time*/) {
        this._lastProbeTime = x
    }
    setLastProbeTime(x: any /*Time*/) {
        this.lastProbeTime = x; return this
    }

    _lastTransitionTime: any;
    get lastTransitionTime(): any /*Time*/ {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: any /*Time*/) {
        this._lastTransitionTime = x
    }
    setLastTransitionTime(x: any /*Time*/) {
        this.lastTransitionTime = x; return this
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

    _reason: any;
    get reason(): any /*string*/ {
        return this._reason
    }
    set reason(x: any /*string*/) {
        this._reason = x
    }
    setReason(x: any /*string*/) {
        this.reason = x; return this
    }

    _status: any;
    get status(): any /*string*/ {
        return this._status
    }
    set status(x: any /*string*/) {
        this._status = x
    }
    setStatus(x: any /*string*/) {
        this.status = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface PersistentVolumeClaimListHelper extends PersistentVolumeClaimList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** PersistentVolumeClaimList is a list of PersistentVolumeClaim items. */
export class PersistentVolumeClaimListHelper extends ResourceTemplate implements PersistentVolumeClaimListHelper {
    static kind = 'PersistentVolumeClaimList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PersistentVolumeClaimListHelper.kind, PersistentVolumeClaimListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<PersistentVolumeClaim>*/ {
        return this._items
    }
    set items(x: any /*Array<PersistentVolumeClaim>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<PersistentVolumeClaim>*/) {
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

export interface PersistentVolumeClaimSpecHelper extends PersistentVolumeClaimSpec {
    $accessModes(x: any): any;
    $dataSource(x: any): any;
    $resources(x: any): any;
    $selector(x: any): any;
    $storageClassName(x: any): any;
    $volumeMode(x: any): any;
    $volumeName(x: any): any;
}

/** PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
export class PersistentVolumeClaimSpecHelper extends Template implements PersistentVolumeClaimSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _accessModes: any;
    get accessModes(): any /*Array<string>*/ {
        return this._accessModes
    }
    set accessModes(x: any /*Array<string>*/) {
        this._accessModes = this.set(this.accessModes, x)
    }
    setAccessModes(x: any /*Array<string>*/) {
        this.accessModes = x; return this
    }

    _dataSource: any;
    get dataSource(): any /*TypedLocalObjectReferenceHelper*/ {
        return this._dataSource
    }
    set dataSource(x: any /*TypedLocalObjectReferenceHelper*/) {
        this._dataSource = x
    }
    setDataSource(x: any /*TypedLocalObjectReferenceHelper*/) {
        this.dataSource = x; return this
    }

    _resources: any;
    get resources(): any /*ResourceRequirementsHelper*/ {
        return this._resources
    }
    set resources(x: any /*ResourceRequirementsHelper*/) {
        this._resources = x
    }
    setResources(x: any /*ResourceRequirementsHelper*/) {
        this.resources = x; return this
    }

    _selector: any;
    get selector(): any /*LabelSelectorHelper*/ {
        return this._selector
    }
    set selector(x: any /*LabelSelectorHelper*/) {
        this._selector = x
    }
    setSelector(x: any /*LabelSelectorHelper*/) {
        this.selector = x; return this
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

    _volumeMode: any;
    get volumeMode(): any /*string*/ {
        return this._volumeMode
    }
    set volumeMode(x: any /*string*/) {
        this._volumeMode = x
    }
    setVolumeMode(x: any /*string*/) {
        this.volumeMode = x; return this
    }

    _volumeName: any;
    get volumeName(): any /*string*/ {
        return this._volumeName
    }
    set volumeName(x: any /*string*/) {
        this._volumeName = x
    }
    setVolumeName(x: any /*string*/) {
        this.volumeName = x; return this
    }
}

export interface PersistentVolumeClaimStatusHelper extends PersistentVolumeClaimStatus {
    $accessModes(x: any): any;
    $capacity(x: any): any;
    $conditions(x: any): any;
    $phase(x: any): any;
}

/** PersistentVolumeClaimStatus is the current status of a persistent volume claim. */
export class PersistentVolumeClaimStatusHelper extends Template implements PersistentVolumeClaimStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _accessModes: any;
    get accessModes(): any /*Array<string>*/ {
        return this._accessModes
    }
    set accessModes(x: any /*Array<string>*/) {
        this._accessModes = this.set(this.accessModes, x)
    }
    setAccessModes(x: any /*Array<string>*/) {
        this.accessModes = x; return this
    }

    _capacity: any;
    get capacity(): any /*{[name: string]: Quantity}Helper*/ {
        return this._capacity
    }
    set capacity(x: any /*{[name: string]: Quantity}Helper*/) {
        this._capacity = this.set(this.capacity, x)
    }
    setCapacity(x: any /*{[name: string]: Quantity}Helper*/) {
        this.capacity = x; return this
    }

    _conditions: any;
    get conditions(): any /*Array<PersistentVolumeClaimCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<PersistentVolumeClaimCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<PersistentVolumeClaimCondition>*/) {
        this.conditions = x; return this
    }

    _phase: any;
    get phase(): any /*string*/ {
        return this._phase
    }
    set phase(x: any /*string*/) {
        this._phase = x
    }
    setPhase(x: any /*string*/) {
        this.phase = x; return this
    }
}

export interface PersistentVolumeClaimTemplateHelper extends PersistentVolumeClaimTemplate {
    $metadata(x: any): any;
    $spec(x: any): any;
}

/** PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
export class PersistentVolumeClaimTemplateHelper extends Template implements PersistentVolumeClaimTemplateHelper {
    constructor(obj: any) {
        super(obj)
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
    get spec(): any /*PersistentVolumeClaimSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*PersistentVolumeClaimSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*PersistentVolumeClaimSpecHelper*/) {
        this.spec = x; return this
    }
}

export interface PersistentVolumeClaimVolumeSourceHelper extends PersistentVolumeClaimVolumeSource {
    $claimName(x: any): any;
    $readOnly(x: any): any;
}

/** PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
export class PersistentVolumeClaimVolumeSourceHelper extends Template implements PersistentVolumeClaimVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _claimName: any;
    get claimName(): any /*string*/ {
        return this._claimName
    }
    set claimName(x: any /*string*/) {
        this._claimName = x
    }
    setClaimName(x: any /*string*/) {
        this.claimName = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }
}

export interface PersistentVolumeListHelper extends PersistentVolumeList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** PersistentVolumeList is a list of PersistentVolume items. */
export class PersistentVolumeListHelper extends ResourceTemplate implements PersistentVolumeListHelper {
    static kind = 'PersistentVolumeList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PersistentVolumeListHelper.kind, PersistentVolumeListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<PersistentVolume>*/ {
        return this._items
    }
    set items(x: any /*Array<PersistentVolume>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<PersistentVolume>*/) {
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

export interface PersistentVolumeSpecHelper extends PersistentVolumeSpec {
    $accessModes(x: any): any;
    $awsElasticBlockStore(x: any): any;
    $azureDisk(x: any): any;
    $azureFile(x: any): any;
    $capacity(x: any): any;
    $cephfs(x: any): any;
    $cinder(x: any): any;
    $claimRef(x: any): any;
    $csi(x: any): any;
    $fc(x: any): any;
    $flexVolume(x: any): any;
    $flocker(x: any): any;
    $gcePersistentDisk(x: any): any;
    $glusterfs(x: any): any;
    $hostPath(x: any): any;
    $iscsi(x: any): any;
    $local(x: any): any;
    $mountOptions(x: any): any;
    $nfs(x: any): any;
    $nodeAffinity(x: any): any;
    $persistentVolumeReclaimPolicy(x: any): any;
    $photonPersistentDisk(x: any): any;
    $portworxVolume(x: any): any;
    $quobyte(x: any): any;
    $rbd(x: any): any;
    $scaleIO(x: any): any;
    $storageClassName(x: any): any;
    $storageos(x: any): any;
    $volumeMode(x: any): any;
    $vsphereVolume(x: any): any;
}

/** PersistentVolumeSpec is the specification of a persistent volume. */
export class PersistentVolumeSpecHelper extends Template implements PersistentVolumeSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _accessModes: any;
    get accessModes(): any /*Array<string>*/ {
        return this._accessModes
    }
    set accessModes(x: any /*Array<string>*/) {
        this._accessModes = this.set(this.accessModes, x)
    }
    setAccessModes(x: any /*Array<string>*/) {
        this.accessModes = x; return this
    }

    _awsElasticBlockStore: any;
    get awsElasticBlockStore(): any /*AWSElasticBlockStoreVolumeSourceHelper*/ {
        return this._awsElasticBlockStore
    }
    set awsElasticBlockStore(x: any /*AWSElasticBlockStoreVolumeSourceHelper*/) {
        this._awsElasticBlockStore = x
    }
    setAwsElasticBlockStore(x: any /*AWSElasticBlockStoreVolumeSourceHelper*/) {
        this.awsElasticBlockStore = x; return this
    }

    _azureDisk: any;
    get azureDisk(): any /*AzureDiskVolumeSourceHelper*/ {
        return this._azureDisk
    }
    set azureDisk(x: any /*AzureDiskVolumeSourceHelper*/) {
        this._azureDisk = x
    }
    setAzureDisk(x: any /*AzureDiskVolumeSourceHelper*/) {
        this.azureDisk = x; return this
    }

    _azureFile: any;
    get azureFile(): any /*AzureFilePersistentVolumeSourceHelper*/ {
        return this._azureFile
    }
    set azureFile(x: any /*AzureFilePersistentVolumeSourceHelper*/) {
        this._azureFile = x
    }
    setAzureFile(x: any /*AzureFilePersistentVolumeSourceHelper*/) {
        this.azureFile = x; return this
    }

    _capacity: any;
    get capacity(): any /*{[name: string]: Quantity}Helper*/ {
        return this._capacity
    }
    set capacity(x: any /*{[name: string]: Quantity}Helper*/) {
        this._capacity = this.set(this.capacity, x)
    }
    setCapacity(x: any /*{[name: string]: Quantity}Helper*/) {
        this.capacity = x; return this
    }

    _cephfs: any;
    get cephfs(): any /*CephFSPersistentVolumeSourceHelper*/ {
        return this._cephfs
    }
    set cephfs(x: any /*CephFSPersistentVolumeSourceHelper*/) {
        this._cephfs = x
    }
    setCephfs(x: any /*CephFSPersistentVolumeSourceHelper*/) {
        this.cephfs = x; return this
    }

    _cinder: any;
    get cinder(): any /*CinderPersistentVolumeSourceHelper*/ {
        return this._cinder
    }
    set cinder(x: any /*CinderPersistentVolumeSourceHelper*/) {
        this._cinder = x
    }
    setCinder(x: any /*CinderPersistentVolumeSourceHelper*/) {
        this.cinder = x; return this
    }

    _claimRef: any;
    get claimRef(): any /*ObjectReferenceHelper*/ {
        return this._claimRef
    }
    set claimRef(x: any /*ObjectReferenceHelper*/) {
        this._claimRef = x
    }
    setClaimRef(x: any /*ObjectReferenceHelper*/) {
        this.claimRef = x; return this
    }

    _csi: any;
    get csi(): any /*CSIPersistentVolumeSourceHelper*/ {
        return this._csi
    }
    set csi(x: any /*CSIPersistentVolumeSourceHelper*/) {
        this._csi = x
    }
    setCsi(x: any /*CSIPersistentVolumeSourceHelper*/) {
        this.csi = x; return this
    }

    _fc: any;
    get fc(): any /*FCVolumeSourceHelper*/ {
        return this._fc
    }
    set fc(x: any /*FCVolumeSourceHelper*/) {
        this._fc = x
    }
    setFc(x: any /*FCVolumeSourceHelper*/) {
        this.fc = x; return this
    }

    _flexVolume: any;
    get flexVolume(): any /*FlexPersistentVolumeSourceHelper*/ {
        return this._flexVolume
    }
    set flexVolume(x: any /*FlexPersistentVolumeSourceHelper*/) {
        this._flexVolume = x
    }
    setFlexVolume(x: any /*FlexPersistentVolumeSourceHelper*/) {
        this.flexVolume = x; return this
    }

    _flocker: any;
    get flocker(): any /*FlockerVolumeSourceHelper*/ {
        return this._flocker
    }
    set flocker(x: any /*FlockerVolumeSourceHelper*/) {
        this._flocker = x
    }
    setFlocker(x: any /*FlockerVolumeSourceHelper*/) {
        this.flocker = x; return this
    }

    _gcePersistentDisk: any;
    get gcePersistentDisk(): any /*GCEPersistentDiskVolumeSourceHelper*/ {
        return this._gcePersistentDisk
    }
    set gcePersistentDisk(x: any /*GCEPersistentDiskVolumeSourceHelper*/) {
        this._gcePersistentDisk = x
    }
    setGcePersistentDisk(x: any /*GCEPersistentDiskVolumeSourceHelper*/) {
        this.gcePersistentDisk = x; return this
    }

    _glusterfs: any;
    get glusterfs(): any /*GlusterfsPersistentVolumeSourceHelper*/ {
        return this._glusterfs
    }
    set glusterfs(x: any /*GlusterfsPersistentVolumeSourceHelper*/) {
        this._glusterfs = x
    }
    setGlusterfs(x: any /*GlusterfsPersistentVolumeSourceHelper*/) {
        this.glusterfs = x; return this
    }

    _hostPath: any;
    get hostPath(): any /*HostPathVolumeSourceHelper*/ {
        return this._hostPath
    }
    set hostPath(x: any /*HostPathVolumeSourceHelper*/) {
        this._hostPath = x
    }
    setHostPath(x: any /*HostPathVolumeSourceHelper*/) {
        this.hostPath = x; return this
    }

    _iscsi: any;
    get iscsi(): any /*ISCSIPersistentVolumeSourceHelper*/ {
        return this._iscsi
    }
    set iscsi(x: any /*ISCSIPersistentVolumeSourceHelper*/) {
        this._iscsi = x
    }
    setIscsi(x: any /*ISCSIPersistentVolumeSourceHelper*/) {
        this.iscsi = x; return this
    }

    _local: any;
    get local(): any /*LocalVolumeSourceHelper*/ {
        return this._local
    }
    set local(x: any /*LocalVolumeSourceHelper*/) {
        this._local = x
    }
    setLocal(x: any /*LocalVolumeSourceHelper*/) {
        this.local = x; return this
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

    _nfs: any;
    get nfs(): any /*NFSVolumeSourceHelper*/ {
        return this._nfs
    }
    set nfs(x: any /*NFSVolumeSourceHelper*/) {
        this._nfs = x
    }
    setNfs(x: any /*NFSVolumeSourceHelper*/) {
        this.nfs = x; return this
    }

    _nodeAffinity: any;
    get nodeAffinity(): any /*VolumeNodeAffinityHelper*/ {
        return this._nodeAffinity
    }
    set nodeAffinity(x: any /*VolumeNodeAffinityHelper*/) {
        this._nodeAffinity = x
    }
    setNodeAffinity(x: any /*VolumeNodeAffinityHelper*/) {
        this.nodeAffinity = x; return this
    }

    _persistentVolumeReclaimPolicy: any;
    get persistentVolumeReclaimPolicy(): any /*string*/ {
        return this._persistentVolumeReclaimPolicy
    }
    set persistentVolumeReclaimPolicy(x: any /*string*/) {
        this._persistentVolumeReclaimPolicy = x
    }
    setPersistentVolumeReclaimPolicy(x: any /*string*/) {
        this.persistentVolumeReclaimPolicy = x; return this
    }

    _photonPersistentDisk: any;
    get photonPersistentDisk(): any /*PhotonPersistentDiskVolumeSourceHelper*/ {
        return this._photonPersistentDisk
    }
    set photonPersistentDisk(x: any /*PhotonPersistentDiskVolumeSourceHelper*/) {
        this._photonPersistentDisk = x
    }
    setPhotonPersistentDisk(x: any /*PhotonPersistentDiskVolumeSourceHelper*/) {
        this.photonPersistentDisk = x; return this
    }

    _portworxVolume: any;
    get portworxVolume(): any /*PortworxVolumeSourceHelper*/ {
        return this._portworxVolume
    }
    set portworxVolume(x: any /*PortworxVolumeSourceHelper*/) {
        this._portworxVolume = x
    }
    setPortworxVolume(x: any /*PortworxVolumeSourceHelper*/) {
        this.portworxVolume = x; return this
    }

    _quobyte: any;
    get quobyte(): any /*QuobyteVolumeSourceHelper*/ {
        return this._quobyte
    }
    set quobyte(x: any /*QuobyteVolumeSourceHelper*/) {
        this._quobyte = x
    }
    setQuobyte(x: any /*QuobyteVolumeSourceHelper*/) {
        this.quobyte = x; return this
    }

    _rbd: any;
    get rbd(): any /*RBDPersistentVolumeSourceHelper*/ {
        return this._rbd
    }
    set rbd(x: any /*RBDPersistentVolumeSourceHelper*/) {
        this._rbd = x
    }
    setRbd(x: any /*RBDPersistentVolumeSourceHelper*/) {
        this.rbd = x; return this
    }

    _scaleIO: any;
    get scaleIO(): any /*ScaleIOPersistentVolumeSourceHelper*/ {
        return this._scaleIO
    }
    set scaleIO(x: any /*ScaleIOPersistentVolumeSourceHelper*/) {
        this._scaleIO = x
    }
    setScaleIO(x: any /*ScaleIOPersistentVolumeSourceHelper*/) {
        this.scaleIO = x; return this
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

    _storageos: any;
    get storageos(): any /*StorageOSPersistentVolumeSourceHelper*/ {
        return this._storageos
    }
    set storageos(x: any /*StorageOSPersistentVolumeSourceHelper*/) {
        this._storageos = x
    }
    setStorageos(x: any /*StorageOSPersistentVolumeSourceHelper*/) {
        this.storageos = x; return this
    }

    _volumeMode: any;
    get volumeMode(): any /*string*/ {
        return this._volumeMode
    }
    set volumeMode(x: any /*string*/) {
        this._volumeMode = x
    }
    setVolumeMode(x: any /*string*/) {
        this.volumeMode = x; return this
    }

    _vsphereVolume: any;
    get vsphereVolume(): any /*VsphereVirtualDiskVolumeSourceHelper*/ {
        return this._vsphereVolume
    }
    set vsphereVolume(x: any /*VsphereVirtualDiskVolumeSourceHelper*/) {
        this._vsphereVolume = x
    }
    setVsphereVolume(x: any /*VsphereVirtualDiskVolumeSourceHelper*/) {
        this.vsphereVolume = x; return this
    }
}

export interface PersistentVolumeStatusHelper extends PersistentVolumeStatus {
    $message(x: any): any;
    $phase(x: any): any;
    $reason(x: any): any;
}

/** PersistentVolumeStatus is the current status of a persistent volume. */
export class PersistentVolumeStatusHelper extends Template implements PersistentVolumeStatusHelper {
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

    _phase: any;
    get phase(): any /*string*/ {
        return this._phase
    }
    set phase(x: any /*string*/) {
        this._phase = x
    }
    setPhase(x: any /*string*/) {
        this.phase = x; return this
    }

    _reason: any;
    get reason(): any /*string*/ {
        return this._reason
    }
    set reason(x: any /*string*/) {
        this._reason = x
    }
    setReason(x: any /*string*/) {
        this.reason = x; return this
    }
}

export interface PhotonPersistentDiskVolumeSourceHelper extends PhotonPersistentDiskVolumeSource {
    $fsType(x: any): any;
    $pdID(x: any): any;
}

/** Represents a Photon Controller persistent disk resource. */
export class PhotonPersistentDiskVolumeSourceHelper extends Template implements PhotonPersistentDiskVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _pdID: any;
    get pdID(): any /*string*/ {
        return this._pdID
    }
    set pdID(x: any /*string*/) {
        this._pdID = x
    }
    setPdID(x: any /*string*/) {
        this.pdID = x; return this
    }
}

export interface PodHelper extends Pod {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts. */
export class PodHelper extends ResourceTemplate implements PodHelper {
    static kind = 'Pod';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodHelper.kind, PodHelper.apiVersion)
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
    get spec(): any /*PodSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*PodSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*PodSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*PodStatusHelper*/ {
        return this._status
    }
    set status(x: any /*PodStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*PodStatusHelper*/) {
        this.status = x; return this
    }
}

export interface PodAffinityHelper extends PodAffinity {
    $preferredDuringSchedulingIgnoredDuringExecution(x: any): any;
    $requiredDuringSchedulingIgnoredDuringExecution(x: any): any;
}

/** Pod affinity is a group of inter pod affinity scheduling rules. */
export class PodAffinityHelper extends Template implements PodAffinityHelper {
    constructor(obj: any) {
        super(obj)
    }

    _preferredDuringSchedulingIgnoredDuringExecution: any;
    get preferredDuringSchedulingIgnoredDuringExecution(): any /*Array<WeightedPodAffinityTerm>*/ {
        return this._preferredDuringSchedulingIgnoredDuringExecution
    }
    set preferredDuringSchedulingIgnoredDuringExecution(x: any /*Array<WeightedPodAffinityTerm>*/) {
        this._preferredDuringSchedulingIgnoredDuringExecution = this.set(this.preferredDuringSchedulingIgnoredDuringExecution, x)
    }
    setPreferredDuringSchedulingIgnoredDuringExecution(x: any /*Array<WeightedPodAffinityTerm>*/) {
        this.preferredDuringSchedulingIgnoredDuringExecution = x; return this
    }

    _requiredDuringSchedulingIgnoredDuringExecution: any;
    get requiredDuringSchedulingIgnoredDuringExecution(): any /*Array<PodAffinityTerm>*/ {
        return this._requiredDuringSchedulingIgnoredDuringExecution
    }
    set requiredDuringSchedulingIgnoredDuringExecution(x: any /*Array<PodAffinityTerm>*/) {
        this._requiredDuringSchedulingIgnoredDuringExecution = this.set(this.requiredDuringSchedulingIgnoredDuringExecution, x)
    }
    setRequiredDuringSchedulingIgnoredDuringExecution(x: any /*Array<PodAffinityTerm>*/) {
        this.requiredDuringSchedulingIgnoredDuringExecution = x; return this
    }
}

export interface PodAffinityTermHelper extends PodAffinityTerm {
    $labelSelector(x: any): any;
    $namespaceSelector(x: any): any;
    $namespaces(x: any): any;
    $topologyKey(x: any): any;
}

/** Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
export class PodAffinityTermHelper extends Template implements PodAffinityTermHelper {
    constructor(obj: any) {
        super(obj)
    }

    _labelSelector: any;
    get labelSelector(): any /*LabelSelectorHelper*/ {
        return this._labelSelector
    }
    set labelSelector(x: any /*LabelSelectorHelper*/) {
        this._labelSelector = x
    }
    setLabelSelector(x: any /*LabelSelectorHelper*/) {
        this.labelSelector = x; return this
    }

    _namespaceSelector: any;
    get namespaceSelector(): any /*LabelSelectorHelper*/ {
        return this._namespaceSelector
    }
    set namespaceSelector(x: any /*LabelSelectorHelper*/) {
        this._namespaceSelector = x
    }
    setNamespaceSelector(x: any /*LabelSelectorHelper*/) {
        this.namespaceSelector = x; return this
    }

    _namespaces: any;
    get namespaces(): any /*Array<string>*/ {
        return this._namespaces
    }
    set namespaces(x: any /*Array<string>*/) {
        this._namespaces = this.set(this.namespaces, x)
    }
    setNamespaces(x: any /*Array<string>*/) {
        this.namespaces = x; return this
    }

    _topologyKey: any;
    get topologyKey(): any /*string*/ {
        return this._topologyKey
    }
    set topologyKey(x: any /*string*/) {
        this._topologyKey = x
    }
    setTopologyKey(x: any /*string*/) {
        this.topologyKey = x; return this
    }
}

export interface PodAntiAffinityHelper extends PodAntiAffinity {
    $preferredDuringSchedulingIgnoredDuringExecution(x: any): any;
    $requiredDuringSchedulingIgnoredDuringExecution(x: any): any;
}

/** Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
export class PodAntiAffinityHelper extends Template implements PodAntiAffinityHelper {
    constructor(obj: any) {
        super(obj)
    }

    _preferredDuringSchedulingIgnoredDuringExecution: any;
    get preferredDuringSchedulingIgnoredDuringExecution(): any /*Array<WeightedPodAffinityTerm>*/ {
        return this._preferredDuringSchedulingIgnoredDuringExecution
    }
    set preferredDuringSchedulingIgnoredDuringExecution(x: any /*Array<WeightedPodAffinityTerm>*/) {
        this._preferredDuringSchedulingIgnoredDuringExecution = this.set(this.preferredDuringSchedulingIgnoredDuringExecution, x)
    }
    setPreferredDuringSchedulingIgnoredDuringExecution(x: any /*Array<WeightedPodAffinityTerm>*/) {
        this.preferredDuringSchedulingIgnoredDuringExecution = x; return this
    }

    _requiredDuringSchedulingIgnoredDuringExecution: any;
    get requiredDuringSchedulingIgnoredDuringExecution(): any /*Array<PodAffinityTerm>*/ {
        return this._requiredDuringSchedulingIgnoredDuringExecution
    }
    set requiredDuringSchedulingIgnoredDuringExecution(x: any /*Array<PodAffinityTerm>*/) {
        this._requiredDuringSchedulingIgnoredDuringExecution = this.set(this.requiredDuringSchedulingIgnoredDuringExecution, x)
    }
    setRequiredDuringSchedulingIgnoredDuringExecution(x: any /*Array<PodAffinityTerm>*/) {
        this.requiredDuringSchedulingIgnoredDuringExecution = x; return this
    }
}

export interface PodConditionHelper extends PodCondition {
    $lastProbeTime(x: any): any;
    $lastTransitionTime(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** PodCondition contains details for the current condition of this pod. */
export class PodConditionHelper extends Template implements PodConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastProbeTime: any;
    get lastProbeTime(): any /*Time*/ {
        return this._lastProbeTime
    }
    set lastProbeTime(x: any /*Time*/) {
        this._lastProbeTime = x
    }
    setLastProbeTime(x: any /*Time*/) {
        this.lastProbeTime = x; return this
    }

    _lastTransitionTime: any;
    get lastTransitionTime(): any /*Time*/ {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: any /*Time*/) {
        this._lastTransitionTime = x
    }
    setLastTransitionTime(x: any /*Time*/) {
        this.lastTransitionTime = x; return this
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

    _reason: any;
    get reason(): any /*string*/ {
        return this._reason
    }
    set reason(x: any /*string*/) {
        this._reason = x
    }
    setReason(x: any /*string*/) {
        this.reason = x; return this
    }

    _status: any;
    get status(): any /*string*/ {
        return this._status
    }
    set status(x: any /*string*/) {
        this._status = x
    }
    setStatus(x: any /*string*/) {
        this.status = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface PodDNSConfigHelper extends PodDNSConfig {
    $nameservers(x: any): any;
    $options(x: any): any;
    $searches(x: any): any;
}

/** PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
export class PodDNSConfigHelper extends Template implements PodDNSConfigHelper {
    constructor(obj: any) {
        super(obj)
    }

    _nameservers: any;
    get nameservers(): any /*Array<string>*/ {
        return this._nameservers
    }
    set nameservers(x: any /*Array<string>*/) {
        this._nameservers = this.set(this.nameservers, x)
    }
    setNameservers(x: any /*Array<string>*/) {
        this.nameservers = x; return this
    }

    _options: any;
    get options(): any /*Array<PodDNSConfigOption>*/ {
        return this._options
    }
    set options(x: any /*Array<PodDNSConfigOption>*/) {
        this._options = this.set(this.options, x)
    }
    setOptions(x: any /*Array<PodDNSConfigOption>*/) {
        this.options = x; return this
    }

    _searches: any;
    get searches(): any /*Array<string>*/ {
        return this._searches
    }
    set searches(x: any /*Array<string>*/) {
        this._searches = this.set(this.searches, x)
    }
    setSearches(x: any /*Array<string>*/) {
        this.searches = x; return this
    }
}

export interface PodDNSConfigOptionHelper extends PodDNSConfigOption {
    $value(x: any): any;
}

/** PodDNSConfigOption defines DNS resolver options of a pod. */
export class PodDNSConfigOptionHelper extends Template implements PodDNSConfigOptionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _value: any;
    get value(): any /*string*/ {
        return this._value
    }
    set value(x: any /*string*/) {
        this._value = x
    }
    setValue(x: any /*string*/) {
        this.value = x; return this
    }
}

export interface PodIPHelper extends PodIP {
    $ip(x: any): any;
}

/**
 * IP address information for entries in the (plural) PodIPs field. Each entry includes:
 *    IP: An IP address allocated to the pod. Routable at least within the cluster.
 */
export class PodIPHelper extends Template implements PodIPHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ip: any;
    get ip(): any /*string*/ {
        return this._ip
    }
    set ip(x: any /*string*/) {
        this._ip = x
    }
    setIp(x: any /*string*/) {
        this.ip = x; return this
    }
}

export interface PodListHelper extends PodList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** PodList is a list of Pods. */
export class PodListHelper extends ResourceTemplate implements PodListHelper {
    static kind = 'PodList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodListHelper.kind, PodListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<Pod>*/ {
        return this._items
    }
    set items(x: any /*Array<Pod>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<Pod>*/) {
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

export interface PodReadinessGateHelper extends PodReadinessGate {
    $conditionType(x: any): any;
}

/** PodReadinessGate contains the reference to a pod condition */
export class PodReadinessGateHelper extends Template implements PodReadinessGateHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conditionType: any;
    get conditionType(): any /*string*/ {
        return this._conditionType
    }
    set conditionType(x: any /*string*/) {
        this._conditionType = x
    }
    setConditionType(x: any /*string*/) {
        this.conditionType = x; return this
    }
}

export interface PodSecurityContextHelper extends PodSecurityContext {
    $fsGroup(x: any): any;
    $fsGroupChangePolicy(x: any): any;
    $runAsGroup(x: any): any;
    $runAsNonRoot(x: any): any;
    $runAsUser(x: any): any;
    $seLinuxOptions(x: any): any;
    $seccompProfile(x: any): any;
    $supplementalGroups(x: any): any;
    $sysctls(x: any): any;
    $windowsOptions(x: any): any;
}

/** PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
export class PodSecurityContextHelper extends Template implements PodSecurityContextHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsGroup: any;
    get fsGroup(): any /*number*/ {
        return this._fsGroup
    }
    set fsGroup(x: any /*number*/) {
        this._fsGroup = x
    }
    setFsGroup(x: any /*number*/) {
        this.fsGroup = x; return this
    }

    _fsGroupChangePolicy: any;
    get fsGroupChangePolicy(): any /*string*/ {
        return this._fsGroupChangePolicy
    }
    set fsGroupChangePolicy(x: any /*string*/) {
        this._fsGroupChangePolicy = x
    }
    setFsGroupChangePolicy(x: any /*string*/) {
        this.fsGroupChangePolicy = x; return this
    }

    _runAsGroup: any;
    get runAsGroup(): any /*number*/ {
        return this._runAsGroup
    }
    set runAsGroup(x: any /*number*/) {
        this._runAsGroup = x
    }
    setRunAsGroup(x: any /*number*/) {
        this.runAsGroup = x; return this
    }

    _runAsNonRoot: any;
    get runAsNonRoot(): any /*boolean*/ {
        return this._runAsNonRoot
    }
    set runAsNonRoot(x: any /*boolean*/) {
        this._runAsNonRoot = x
    }
    setRunAsNonRoot(x: any /*boolean*/) {
        this.runAsNonRoot = x; return this
    }

    _runAsUser: any;
    get runAsUser(): any /*number*/ {
        return this._runAsUser
    }
    set runAsUser(x: any /*number*/) {
        this._runAsUser = x
    }
    setRunAsUser(x: any /*number*/) {
        this.runAsUser = x; return this
    }

    _seLinuxOptions: any;
    get seLinuxOptions(): any /*SELinuxOptionsHelper*/ {
        return this._seLinuxOptions
    }
    set seLinuxOptions(x: any /*SELinuxOptionsHelper*/) {
        this._seLinuxOptions = x
    }
    setSeLinuxOptions(x: any /*SELinuxOptionsHelper*/) {
        this.seLinuxOptions = x; return this
    }

    _seccompProfile: any;
    get seccompProfile(): any /*SeccompProfileHelper*/ {
        return this._seccompProfile
    }
    set seccompProfile(x: any /*SeccompProfileHelper*/) {
        this._seccompProfile = x
    }
    setSeccompProfile(x: any /*SeccompProfileHelper*/) {
        this.seccompProfile = x; return this
    }

    _supplementalGroups: any;
    get supplementalGroups(): any /*Array<number>*/ {
        return this._supplementalGroups
    }
    set supplementalGroups(x: any /*Array<number>*/) {
        this._supplementalGroups = this.set(this.supplementalGroups, x)
    }
    setSupplementalGroups(x: any /*Array<number>*/) {
        this.supplementalGroups = x; return this
    }

    _sysctls: any;
    get sysctls(): any /*Array<Sysctl>*/ {
        return this._sysctls
    }
    set sysctls(x: any /*Array<Sysctl>*/) {
        this._sysctls = this.set(this.sysctls, x)
    }
    setSysctls(x: any /*Array<Sysctl>*/) {
        this.sysctls = x; return this
    }

    _windowsOptions: any;
    get windowsOptions(): any /*WindowsSecurityContextOptionsHelper*/ {
        return this._windowsOptions
    }
    set windowsOptions(x: any /*WindowsSecurityContextOptionsHelper*/) {
        this._windowsOptions = x
    }
    setWindowsOptions(x: any /*WindowsSecurityContextOptionsHelper*/) {
        this.windowsOptions = x; return this
    }
}

export interface PodSpecHelper extends PodSpec {
    $activeDeadlineSeconds(x: any): any;
    $affinity(x: any): any;
    $automountServiceAccountToken(x: any): any;
    $containers(x: any): any;
    $dnsConfig(x: any): any;
    $dnsPolicy(x: any): any;
    $enableServiceLinks(x: any): any;
    $ephemeralContainers(x: any): any;
    $hostAliases(x: any): any;
    $hostIPC(x: any): any;
    $hostNetwork(x: any): any;
    $hostPID(x: any): any;
    $hostname(x: any): any;
    $imagePullSecrets(x: any): any;
    $initContainers(x: any): any;
    $nodeName(x: any): any;
    $nodeSelector(x: any): any;
    $overhead(x: any): any;
    $preemptionPolicy(x: any): any;
    $priority(x: any): any;
    $priorityClassName(x: any): any;
    $readinessGates(x: any): any;
    $restartPolicy(x: any): any;
    $runtimeClassName(x: any): any;
    $schedulerName(x: any): any;
    $securityContext(x: any): any;
    $serviceAccount(x: any): any;
    $serviceAccountName(x: any): any;
    $setHostnameAsFQDN(x: any): any;
    $shareProcessNamespace(x: any): any;
    $subdomain(x: any): any;
    $terminationGracePeriodSeconds(x: any): any;
    $tolerations(x: any): any;
    $topologySpreadConstraints(x: any): any;
    $volumes(x: any): any;
}

/** PodSpec is a description of a pod. */
export class PodSpecHelper extends Template implements PodSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _activeDeadlineSeconds: any;
    get activeDeadlineSeconds(): any /*number*/ {
        return this._activeDeadlineSeconds
    }
    set activeDeadlineSeconds(x: any /*number*/) {
        this._activeDeadlineSeconds = x
    }
    setActiveDeadlineSeconds(x: any /*number*/) {
        this.activeDeadlineSeconds = x; return this
    }

    _affinity: any;
    get affinity(): any /*AffinityHelper*/ {
        return this._affinity
    }
    set affinity(x: any /*AffinityHelper*/) {
        this._affinity = x
    }
    setAffinity(x: any /*AffinityHelper*/) {
        this.affinity = x; return this
    }

    _automountServiceAccountToken: any;
    get automountServiceAccountToken(): any /*boolean*/ {
        return this._automountServiceAccountToken
    }
    set automountServiceAccountToken(x: any /*boolean*/) {
        this._automountServiceAccountToken = x
    }
    setAutomountServiceAccountToken(x: any /*boolean*/) {
        this.automountServiceAccountToken = x; return this
    }

    _containers: any;
    get containers(): any /*Array<Container>*/ {
        return this._containers
    }
    set containers(x: any /*Array<Container>*/) {
        this._containers = this.set(this.containers, x)
    }
    setContainers(x: any /*Array<Container>*/) {
        this.containers = x; return this
    }

    _dnsConfig: any;
    get dnsConfig(): any /*PodDNSConfigHelper*/ {
        return this._dnsConfig
    }
    set dnsConfig(x: any /*PodDNSConfigHelper*/) {
        this._dnsConfig = x
    }
    setDnsConfig(x: any /*PodDNSConfigHelper*/) {
        this.dnsConfig = x; return this
    }

    _dnsPolicy: any;
    get dnsPolicy(): any /*string*/ {
        return this._dnsPolicy
    }
    set dnsPolicy(x: any /*string*/) {
        this._dnsPolicy = x
    }
    setDnsPolicy(x: any /*string*/) {
        this.dnsPolicy = x; return this
    }

    _enableServiceLinks: any;
    get enableServiceLinks(): any /*boolean*/ {
        return this._enableServiceLinks
    }
    set enableServiceLinks(x: any /*boolean*/) {
        this._enableServiceLinks = x
    }
    setEnableServiceLinks(x: any /*boolean*/) {
        this.enableServiceLinks = x; return this
    }

    _ephemeralContainers: any;
    get ephemeralContainers(): any /*Array<EphemeralContainer>*/ {
        return this._ephemeralContainers
    }
    set ephemeralContainers(x: any /*Array<EphemeralContainer>*/) {
        this._ephemeralContainers = this.set(this.ephemeralContainers, x)
    }
    setEphemeralContainers(x: any /*Array<EphemeralContainer>*/) {
        this.ephemeralContainers = x; return this
    }

    _hostAliases: any;
    get hostAliases(): any /*Array<HostAlias>*/ {
        return this._hostAliases
    }
    set hostAliases(x: any /*Array<HostAlias>*/) {
        this._hostAliases = this.set(this.hostAliases, x)
    }
    setHostAliases(x: any /*Array<HostAlias>*/) {
        this.hostAliases = x; return this
    }

    _hostIPC: any;
    get hostIPC(): any /*boolean*/ {
        return this._hostIPC
    }
    set hostIPC(x: any /*boolean*/) {
        this._hostIPC = x
    }
    setHostIPC(x: any /*boolean*/) {
        this.hostIPC = x; return this
    }

    _hostNetwork: any;
    get hostNetwork(): any /*boolean*/ {
        return this._hostNetwork
    }
    set hostNetwork(x: any /*boolean*/) {
        this._hostNetwork = x
    }
    setHostNetwork(x: any /*boolean*/) {
        this.hostNetwork = x; return this
    }

    _hostPID: any;
    get hostPID(): any /*boolean*/ {
        return this._hostPID
    }
    set hostPID(x: any /*boolean*/) {
        this._hostPID = x
    }
    setHostPID(x: any /*boolean*/) {
        this.hostPID = x; return this
    }

    _hostname: any;
    get hostname(): any /*string*/ {
        return this._hostname
    }
    set hostname(x: any /*string*/) {
        this._hostname = x
    }
    setHostname(x: any /*string*/) {
        this.hostname = x; return this
    }

    _imagePullSecrets: any;
    get imagePullSecrets(): any /*Array<LocalObjectReference>*/ {
        return this._imagePullSecrets
    }
    set imagePullSecrets(x: any /*Array<LocalObjectReference>*/) {
        this._imagePullSecrets = this.set(this.imagePullSecrets, x)
    }
    setImagePullSecrets(x: any /*Array<LocalObjectReference>*/) {
        this.imagePullSecrets = x; return this
    }

    _initContainers: any;
    get initContainers(): any /*Array<Container>*/ {
        return this._initContainers
    }
    set initContainers(x: any /*Array<Container>*/) {
        this._initContainers = this.set(this.initContainers, x)
    }
    setInitContainers(x: any /*Array<Container>*/) {
        this.initContainers = x; return this
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

    _nodeSelector: any;
    get nodeSelector(): any /*any*/ {
        return this._nodeSelector
    }
    set nodeSelector(x: any /*any*/) {
        this._nodeSelector = this.set(this.nodeSelector, x)
    }
    setNodeSelector(x: any /*any*/) {
        this.nodeSelector = x; return this
    }

    _overhead: any;
    get overhead(): any /*{[name: string]: Quantity}Helper*/ {
        return this._overhead
    }
    set overhead(x: any /*{[name: string]: Quantity}Helper*/) {
        this._overhead = this.set(this.overhead, x)
    }
    setOverhead(x: any /*{[name: string]: Quantity}Helper*/) {
        this.overhead = x; return this
    }

    _preemptionPolicy: any;
    get preemptionPolicy(): any /*string*/ {
        return this._preemptionPolicy
    }
    set preemptionPolicy(x: any /*string*/) {
        this._preemptionPolicy = x
    }
    setPreemptionPolicy(x: any /*string*/) {
        this.preemptionPolicy = x; return this
    }

    _priority: any;
    get priority(): any /*number*/ {
        return this._priority
    }
    set priority(x: any /*number*/) {
        this._priority = x
    }
    setPriority(x: any /*number*/) {
        this.priority = x; return this
    }

    _priorityClassName: any;
    get priorityClassName(): any /*string*/ {
        return this._priorityClassName
    }
    set priorityClassName(x: any /*string*/) {
        this._priorityClassName = x
    }
    setPriorityClassName(x: any /*string*/) {
        this.priorityClassName = x; return this
    }

    _readinessGates: any;
    get readinessGates(): any /*Array<PodReadinessGate>*/ {
        return this._readinessGates
    }
    set readinessGates(x: any /*Array<PodReadinessGate>*/) {
        this._readinessGates = this.set(this.readinessGates, x)
    }
    setReadinessGates(x: any /*Array<PodReadinessGate>*/) {
        this.readinessGates = x; return this
    }

    _restartPolicy: any;
    get restartPolicy(): any /*string*/ {
        return this._restartPolicy
    }
    set restartPolicy(x: any /*string*/) {
        this._restartPolicy = x
    }
    setRestartPolicy(x: any /*string*/) {
        this.restartPolicy = x; return this
    }

    _runtimeClassName: any;
    get runtimeClassName(): any /*string*/ {
        return this._runtimeClassName
    }
    set runtimeClassName(x: any /*string*/) {
        this._runtimeClassName = x
    }
    setRuntimeClassName(x: any /*string*/) {
        this.runtimeClassName = x; return this
    }

    _schedulerName: any;
    get schedulerName(): any /*string*/ {
        return this._schedulerName
    }
    set schedulerName(x: any /*string*/) {
        this._schedulerName = x
    }
    setSchedulerName(x: any /*string*/) {
        this.schedulerName = x; return this
    }

    _securityContext: any;
    get securityContext(): any /*PodSecurityContextHelper*/ {
        return this._securityContext
    }
    set securityContext(x: any /*PodSecurityContextHelper*/) {
        this._securityContext = x
    }
    setSecurityContext(x: any /*PodSecurityContextHelper*/) {
        this.securityContext = x; return this
    }

    _serviceAccount: any;
    get serviceAccount(): any /*string*/ {
        return this._serviceAccount
    }
    set serviceAccount(x: any /*string*/) {
        this._serviceAccount = x
    }
    setServiceAccount(x: any /*string*/) {
        this.serviceAccount = x; return this
    }

    _serviceAccountName: any;
    get serviceAccountName(): any /*string*/ {
        return this._serviceAccountName
    }
    set serviceAccountName(x: any /*string*/) {
        this._serviceAccountName = x
    }
    setServiceAccountName(x: any /*string*/) {
        this.serviceAccountName = x; return this
    }

    _setHostnameAsFQDN: any;
    get setHostnameAsFQDN(): any /*boolean*/ {
        return this._setHostnameAsFQDN
    }
    set setHostnameAsFQDN(x: any /*boolean*/) {
        this._setHostnameAsFQDN = x
    }
    setSetHostnameAsFQDN(x: any /*boolean*/) {
        this.setHostnameAsFQDN = x; return this
    }

    _shareProcessNamespace: any;
    get shareProcessNamespace(): any /*boolean*/ {
        return this._shareProcessNamespace
    }
    set shareProcessNamespace(x: any /*boolean*/) {
        this._shareProcessNamespace = x
    }
    setShareProcessNamespace(x: any /*boolean*/) {
        this.shareProcessNamespace = x; return this
    }

    _subdomain: any;
    get subdomain(): any /*string*/ {
        return this._subdomain
    }
    set subdomain(x: any /*string*/) {
        this._subdomain = x
    }
    setSubdomain(x: any /*string*/) {
        this.subdomain = x; return this
    }

    _terminationGracePeriodSeconds: any;
    get terminationGracePeriodSeconds(): any /*number*/ {
        return this._terminationGracePeriodSeconds
    }
    set terminationGracePeriodSeconds(x: any /*number*/) {
        this._terminationGracePeriodSeconds = x
    }
    setTerminationGracePeriodSeconds(x: any /*number*/) {
        this.terminationGracePeriodSeconds = x; return this
    }

    _tolerations: any;
    get tolerations(): any /*Array<Toleration>*/ {
        return this._tolerations
    }
    set tolerations(x: any /*Array<Toleration>*/) {
        this._tolerations = this.set(this.tolerations, x)
    }
    setTolerations(x: any /*Array<Toleration>*/) {
        this.tolerations = x; return this
    }

    _topologySpreadConstraints: any;
    get topologySpreadConstraints(): any /*Array<TopologySpreadConstraint>*/ {
        return this._topologySpreadConstraints
    }
    set topologySpreadConstraints(x: any /*Array<TopologySpreadConstraint>*/) {
        this._topologySpreadConstraints = this.set(this.topologySpreadConstraints, x)
    }
    setTopologySpreadConstraints(x: any /*Array<TopologySpreadConstraint>*/) {
        this.topologySpreadConstraints = x; return this
    }

    _volumes: any;
    get volumes(): any /*Array<Volume>*/ {
        return this._volumes
    }
    set volumes(x: any /*Array<Volume>*/) {
        this._volumes = this.set(this.volumes, x)
    }
    setVolumes(x: any /*Array<Volume>*/) {
        this.volumes = x; return this
    }
}

export interface PodStatusHelper extends PodStatus {
    $conditions(x: any): any;
    $containerStatuses(x: any): any;
    $ephemeralContainerStatuses(x: any): any;
    $hostIP(x: any): any;
    $initContainerStatuses(x: any): any;
    $message(x: any): any;
    $nominatedNodeName(x: any): any;
    $phase(x: any): any;
    $podIP(x: any): any;
    $podIPs(x: any): any;
    $qosClass(x: any): any;
    $reason(x: any): any;
    $startTime(x: any): any;
}

/** PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane. */
export class PodStatusHelper extends Template implements PodStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conditions: any;
    get conditions(): any /*Array<PodCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<PodCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<PodCondition>*/) {
        this.conditions = x; return this
    }

    _containerStatuses: any;
    get containerStatuses(): any /*Array<ContainerStatus>*/ {
        return this._containerStatuses
    }
    set containerStatuses(x: any /*Array<ContainerStatus>*/) {
        this._containerStatuses = this.set(this.containerStatuses, x)
    }
    setContainerStatuses(x: any /*Array<ContainerStatus>*/) {
        this.containerStatuses = x; return this
    }

    _ephemeralContainerStatuses: any;
    get ephemeralContainerStatuses(): any /*Array<ContainerStatus>*/ {
        return this._ephemeralContainerStatuses
    }
    set ephemeralContainerStatuses(x: any /*Array<ContainerStatus>*/) {
        this._ephemeralContainerStatuses = this.set(this.ephemeralContainerStatuses, x)
    }
    setEphemeralContainerStatuses(x: any /*Array<ContainerStatus>*/) {
        this.ephemeralContainerStatuses = x; return this
    }

    _hostIP: any;
    get hostIP(): any /*string*/ {
        return this._hostIP
    }
    set hostIP(x: any /*string*/) {
        this._hostIP = x
    }
    setHostIP(x: any /*string*/) {
        this.hostIP = x; return this
    }

    _initContainerStatuses: any;
    get initContainerStatuses(): any /*Array<ContainerStatus>*/ {
        return this._initContainerStatuses
    }
    set initContainerStatuses(x: any /*Array<ContainerStatus>*/) {
        this._initContainerStatuses = this.set(this.initContainerStatuses, x)
    }
    setInitContainerStatuses(x: any /*Array<ContainerStatus>*/) {
        this.initContainerStatuses = x; return this
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

    _nominatedNodeName: any;
    get nominatedNodeName(): any /*string*/ {
        return this._nominatedNodeName
    }
    set nominatedNodeName(x: any /*string*/) {
        this._nominatedNodeName = x
    }
    setNominatedNodeName(x: any /*string*/) {
        this.nominatedNodeName = x; return this
    }

    _phase: any;
    get phase(): any /*string*/ {
        return this._phase
    }
    set phase(x: any /*string*/) {
        this._phase = x
    }
    setPhase(x: any /*string*/) {
        this.phase = x; return this
    }

    _podIP: any;
    get podIP(): any /*string*/ {
        return this._podIP
    }
    set podIP(x: any /*string*/) {
        this._podIP = x
    }
    setPodIP(x: any /*string*/) {
        this.podIP = x; return this
    }

    _podIPs: any;
    get podIPs(): any /*Array<PodIP>*/ {
        return this._podIPs
    }
    set podIPs(x: any /*Array<PodIP>*/) {
        this._podIPs = this.set(this.podIPs, x)
    }
    setPodIPs(x: any /*Array<PodIP>*/) {
        this.podIPs = x; return this
    }

    _qosClass: any;
    get qosClass(): any /*string*/ {
        return this._qosClass
    }
    set qosClass(x: any /*string*/) {
        this._qosClass = x
    }
    setQosClass(x: any /*string*/) {
        this.qosClass = x; return this
    }

    _reason: any;
    get reason(): any /*string*/ {
        return this._reason
    }
    set reason(x: any /*string*/) {
        this._reason = x
    }
    setReason(x: any /*string*/) {
        this.reason = x; return this
    }

    _startTime: any;
    get startTime(): any /*Time*/ {
        return this._startTime
    }
    set startTime(x: any /*Time*/) {
        this._startTime = x
    }
    setStartTime(x: any /*Time*/) {
        this.startTime = x; return this
    }
}

export interface PodTemplateHelper extends PodTemplate {
    $metadata(x: any): any;
    $template(x: any): any;
}

/** PodTemplate describes a template for creating copies of a predefined pod. */
export class PodTemplateHelper extends ResourceTemplate implements PodTemplateHelper {
    static kind = 'PodTemplate';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodTemplateHelper.kind, PodTemplateHelper.apiVersion)
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

    _template: any;
    get template(): any /*PodTemplateSpecHelper*/ {
        return this._template
    }
    set template(x: any /*PodTemplateSpecHelper*/) {
        this._template = x
    }
    setTemplate(x: any /*PodTemplateSpecHelper*/) {
        this.template = x; return this
    }
}

export interface PodTemplateListHelper extends PodTemplateList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** PodTemplateList is a list of PodTemplates. */
export class PodTemplateListHelper extends ResourceTemplate implements PodTemplateListHelper {
    static kind = 'PodTemplateList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodTemplateListHelper.kind, PodTemplateListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<PodTemplate>*/ {
        return this._items
    }
    set items(x: any /*Array<PodTemplate>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<PodTemplate>*/) {
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

export interface PodTemplateSpecHelper extends PodTemplateSpec {
    $metadata(x: any): any;
    $spec(x: any): any;
}

/** PodTemplateSpec describes the data a pod should have when created from a template */
export class PodTemplateSpecHelper extends Template implements PodTemplateSpecHelper {
    constructor(obj: any) {
        super(obj)
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
    get spec(): any /*PodSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*PodSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*PodSpecHelper*/) {
        this.spec = x; return this
    }
}

export interface PortStatusHelper extends PortStatus {
    $error(x: any): any;
    $port(x: any): any;
    $protocol(x: any): any;
}

export class PortStatusHelper extends Template implements PortStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _error: any;
    get error(): any /*string*/ {
        return this._error
    }
    set error(x: any /*string*/) {
        this._error = x
    }
    setError(x: any /*string*/) {
        this.error = x; return this
    }

    _port: any;
    get port(): any /*number*/ {
        return this._port
    }
    set port(x: any /*number*/) {
        this._port = x
    }
    setPort(x: any /*number*/) {
        this.port = x; return this
    }

    _protocol: any;
    get protocol(): any /*string*/ {
        return this._protocol
    }
    set protocol(x: any /*string*/) {
        this._protocol = x
    }
    setProtocol(x: any /*string*/) {
        this.protocol = x; return this
    }
}

export interface PortworxVolumeSourceHelper extends PortworxVolumeSource {
    $fsType(x: any): any;
    $readOnly(x: any): any;
    $volumeID(x: any): any;
}

/** PortworxVolumeSource represents a Portworx volume resource. */
export class PortworxVolumeSourceHelper extends Template implements PortworxVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _volumeID: any;
    get volumeID(): any /*string*/ {
        return this._volumeID
    }
    set volumeID(x: any /*string*/) {
        this._volumeID = x
    }
    setVolumeID(x: any /*string*/) {
        this.volumeID = x; return this
    }
}

export interface PreferredSchedulingTermHelper extends PreferredSchedulingTerm {
    $preference(x: any): any;
    $weight(x: any): any;
}

/** An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op). */
export class PreferredSchedulingTermHelper extends Template implements PreferredSchedulingTermHelper {
    constructor(obj: any) {
        super(obj)
    }

    _preference: any;
    get preference(): any /*NodeSelectorTermHelper*/ {
        return this._preference
    }
    set preference(x: any /*NodeSelectorTermHelper*/) {
        this._preference = x
    }
    setPreference(x: any /*NodeSelectorTermHelper*/) {
        this.preference = x; return this
    }

    _weight: any;
    get weight(): any /*number*/ {
        return this._weight
    }
    set weight(x: any /*number*/) {
        this._weight = x
    }
    setWeight(x: any /*number*/) {
        this.weight = x; return this
    }
}

export interface ProbeHelper extends Probe {
    $exec(x: any): any;
    $failureThreshold(x: any): any;
    $httpGet(x: any): any;
    $initialDelaySeconds(x: any): any;
    $periodSeconds(x: any): any;
    $successThreshold(x: any): any;
    $tcpSocket(x: any): any;
    $terminationGracePeriodSeconds(x: any): any;
    $timeoutSeconds(x: any): any;
}

/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
export class ProbeHelper extends Template implements ProbeHelper {
    constructor(obj: any) {
        super(obj)
    }

    _exec: any;
    get exec(): any /*ExecActionHelper*/ {
        return this._exec
    }
    set exec(x: any /*ExecActionHelper*/) {
        this._exec = x
    }
    setExec(x: any /*ExecActionHelper*/) {
        this.exec = x; return this
    }

    _failureThreshold: any;
    get failureThreshold(): any /*number*/ {
        return this._failureThreshold
    }
    set failureThreshold(x: any /*number*/) {
        this._failureThreshold = x
    }
    setFailureThreshold(x: any /*number*/) {
        this.failureThreshold = x; return this
    }

    _httpGet: any;
    get httpGet(): any /*HTTPGetActionHelper*/ {
        return this._httpGet
    }
    set httpGet(x: any /*HTTPGetActionHelper*/) {
        this._httpGet = x
    }
    setHttpGet(x: any /*HTTPGetActionHelper*/) {
        this.httpGet = x; return this
    }

    _initialDelaySeconds: any;
    get initialDelaySeconds(): any /*number*/ {
        return this._initialDelaySeconds
    }
    set initialDelaySeconds(x: any /*number*/) {
        this._initialDelaySeconds = x
    }
    setInitialDelaySeconds(x: any /*number*/) {
        this.initialDelaySeconds = x; return this
    }

    _periodSeconds: any;
    get periodSeconds(): any /*number*/ {
        return this._periodSeconds
    }
    set periodSeconds(x: any /*number*/) {
        this._periodSeconds = x
    }
    setPeriodSeconds(x: any /*number*/) {
        this.periodSeconds = x; return this
    }

    _successThreshold: any;
    get successThreshold(): any /*number*/ {
        return this._successThreshold
    }
    set successThreshold(x: any /*number*/) {
        this._successThreshold = x
    }
    setSuccessThreshold(x: any /*number*/) {
        this.successThreshold = x; return this
    }

    _tcpSocket: any;
    get tcpSocket(): any /*TCPSocketActionHelper*/ {
        return this._tcpSocket
    }
    set tcpSocket(x: any /*TCPSocketActionHelper*/) {
        this._tcpSocket = x
    }
    setTcpSocket(x: any /*TCPSocketActionHelper*/) {
        this.tcpSocket = x; return this
    }

    _terminationGracePeriodSeconds: any;
    get terminationGracePeriodSeconds(): any /*number*/ {
        return this._terminationGracePeriodSeconds
    }
    set terminationGracePeriodSeconds(x: any /*number*/) {
        this._terminationGracePeriodSeconds = x
    }
    setTerminationGracePeriodSeconds(x: any /*number*/) {
        this.terminationGracePeriodSeconds = x; return this
    }

    _timeoutSeconds: any;
    get timeoutSeconds(): any /*number*/ {
        return this._timeoutSeconds
    }
    set timeoutSeconds(x: any /*number*/) {
        this._timeoutSeconds = x
    }
    setTimeoutSeconds(x: any /*number*/) {
        this.timeoutSeconds = x; return this
    }
}

export interface ProjectedVolumeSourceHelper extends ProjectedVolumeSource {
    $defaultMode(x: any): any;
    $sources(x: any): any;
}

/** Represents a projected volume source */
export class ProjectedVolumeSourceHelper extends Template implements ProjectedVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _defaultMode: any;
    get defaultMode(): any /*number*/ {
        return this._defaultMode
    }
    set defaultMode(x: any /*number*/) {
        this._defaultMode = x
    }
    setDefaultMode(x: any /*number*/) {
        this.defaultMode = x; return this
    }

    _sources: any;
    get sources(): any /*Array<VolumeProjection>*/ {
        return this._sources
    }
    set sources(x: any /*Array<VolumeProjection>*/) {
        this._sources = this.set(this.sources, x)
    }
    setSources(x: any /*Array<VolumeProjection>*/) {
        this.sources = x; return this
    }
}

export interface QuobyteVolumeSourceHelper extends QuobyteVolumeSource {
    $group(x: any): any;
    $readOnly(x: any): any;
    $registry(x: any): any;
    $tenant(x: any): any;
    $user(x: any): any;
    $volume(x: any): any;
}

/** Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
export class QuobyteVolumeSourceHelper extends Template implements QuobyteVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _group: any;
    get group(): any /*string*/ {
        return this._group
    }
    set group(x: any /*string*/) {
        this._group = x
    }
    setGroup(x: any /*string*/) {
        this.group = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _registry: any;
    get registry(): any /*string*/ {
        return this._registry
    }
    set registry(x: any /*string*/) {
        this._registry = x
    }
    setRegistry(x: any /*string*/) {
        this.registry = x; return this
    }

    _tenant: any;
    get tenant(): any /*string*/ {
        return this._tenant
    }
    set tenant(x: any /*string*/) {
        this._tenant = x
    }
    setTenant(x: any /*string*/) {
        this.tenant = x; return this
    }

    _user: any;
    get user(): any /*string*/ {
        return this._user
    }
    set user(x: any /*string*/) {
        this._user = x
    }
    setUser(x: any /*string*/) {
        this.user = x; return this
    }

    _volume: any;
    get volume(): any /*string*/ {
        return this._volume
    }
    set volume(x: any /*string*/) {
        this._volume = x
    }
    setVolume(x: any /*string*/) {
        this.volume = x; return this
    }
}

export interface RBDPersistentVolumeSourceHelper extends RBDPersistentVolumeSource {
    $fsType(x: any): any;
    $image(x: any): any;
    $keyring(x: any): any;
    $monitors(x: any): any;
    $pool(x: any): any;
    $readOnly(x: any): any;
    $secretRef(x: any): any;
    $user(x: any): any;
}

/** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
export class RBDPersistentVolumeSourceHelper extends Template implements RBDPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _image: any;
    get image(): any /*string*/ {
        return this._image
    }
    set image(x: any /*string*/) {
        this._image = x
    }
    setImage(x: any /*string*/) {
        this.image = x; return this
    }

    _keyring: any;
    get keyring(): any /*string*/ {
        return this._keyring
    }
    set keyring(x: any /*string*/) {
        this._keyring = x
    }
    setKeyring(x: any /*string*/) {
        this.keyring = x; return this
    }

    _monitors: any;
    get monitors(): any /*Array<string>*/ {
        return this._monitors
    }
    set monitors(x: any /*Array<string>*/) {
        this._monitors = this.set(this.monitors, x)
    }
    setMonitors(x: any /*Array<string>*/) {
        this.monitors = x; return this
    }

    _pool: any;
    get pool(): any /*string*/ {
        return this._pool
    }
    set pool(x: any /*string*/) {
        this._pool = x
    }
    setPool(x: any /*string*/) {
        this.pool = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _secretRef: any;
    get secretRef(): any /*SecretReferenceHelper*/ {
        return this._secretRef
    }
    set secretRef(x: any /*SecretReferenceHelper*/) {
        this._secretRef = x
    }
    setSecretRef(x: any /*SecretReferenceHelper*/) {
        this.secretRef = x; return this
    }

    _user: any;
    get user(): any /*string*/ {
        return this._user
    }
    set user(x: any /*string*/) {
        this._user = x
    }
    setUser(x: any /*string*/) {
        this.user = x; return this
    }
}

export interface RBDVolumeSourceHelper extends RBDVolumeSource {
    $fsType(x: any): any;
    $image(x: any): any;
    $keyring(x: any): any;
    $monitors(x: any): any;
    $pool(x: any): any;
    $readOnly(x: any): any;
    $secretRef(x: any): any;
    $user(x: any): any;
}

/** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
export class RBDVolumeSourceHelper extends Template implements RBDVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _image: any;
    get image(): any /*string*/ {
        return this._image
    }
    set image(x: any /*string*/) {
        this._image = x
    }
    setImage(x: any /*string*/) {
        this.image = x; return this
    }

    _keyring: any;
    get keyring(): any /*string*/ {
        return this._keyring
    }
    set keyring(x: any /*string*/) {
        this._keyring = x
    }
    setKeyring(x: any /*string*/) {
        this.keyring = x; return this
    }

    _monitors: any;
    get monitors(): any /*Array<string>*/ {
        return this._monitors
    }
    set monitors(x: any /*Array<string>*/) {
        this._monitors = this.set(this.monitors, x)
    }
    setMonitors(x: any /*Array<string>*/) {
        this.monitors = x; return this
    }

    _pool: any;
    get pool(): any /*string*/ {
        return this._pool
    }
    set pool(x: any /*string*/) {
        this._pool = x
    }
    setPool(x: any /*string*/) {
        this.pool = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _secretRef: any;
    get secretRef(): any /*LocalObjectReferenceHelper*/ {
        return this._secretRef
    }
    set secretRef(x: any /*LocalObjectReferenceHelper*/) {
        this._secretRef = x
    }
    setSecretRef(x: any /*LocalObjectReferenceHelper*/) {
        this.secretRef = x; return this
    }

    _user: any;
    get user(): any /*string*/ {
        return this._user
    }
    set user(x: any /*string*/) {
        this._user = x
    }
    setUser(x: any /*string*/) {
        this.user = x; return this
    }
}

export interface ReplicationControllerHelper extends ReplicationController {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** ReplicationController represents the configuration of a replication controller. */
export class ReplicationControllerHelper extends ResourceTemplate implements ReplicationControllerHelper {
    static kind = 'ReplicationController';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ReplicationControllerHelper.kind, ReplicationControllerHelper.apiVersion)
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
    get spec(): any /*ReplicationControllerSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*ReplicationControllerSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*ReplicationControllerSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*ReplicationControllerStatusHelper*/ {
        return this._status
    }
    set status(x: any /*ReplicationControllerStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*ReplicationControllerStatusHelper*/) {
        this.status = x; return this
    }
}

export interface ReplicationControllerConditionHelper extends ReplicationControllerCondition {
    $lastTransitionTime(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** ReplicationControllerCondition describes the state of a replication controller at a certain point. */
export class ReplicationControllerConditionHelper extends Template implements ReplicationControllerConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastTransitionTime: any;
    get lastTransitionTime(): any /*Time*/ {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: any /*Time*/) {
        this._lastTransitionTime = x
    }
    setLastTransitionTime(x: any /*Time*/) {
        this.lastTransitionTime = x; return this
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

    _reason: any;
    get reason(): any /*string*/ {
        return this._reason
    }
    set reason(x: any /*string*/) {
        this._reason = x
    }
    setReason(x: any /*string*/) {
        this.reason = x; return this
    }

    _status: any;
    get status(): any /*string*/ {
        return this._status
    }
    set status(x: any /*string*/) {
        this._status = x
    }
    setStatus(x: any /*string*/) {
        this.status = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface ReplicationControllerListHelper extends ReplicationControllerList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** ReplicationControllerList is a collection of replication controllers. */
export class ReplicationControllerListHelper extends ResourceTemplate implements ReplicationControllerListHelper {
    static kind = 'ReplicationControllerList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ReplicationControllerListHelper.kind, ReplicationControllerListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<ReplicationController>*/ {
        return this._items
    }
    set items(x: any /*Array<ReplicationController>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<ReplicationController>*/) {
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

export interface ReplicationControllerSpecHelper extends ReplicationControllerSpec {
    $minReadySeconds(x: any): any;
    $replicas(x: any): any;
    $selector(x: any): any;
    $template(x: any): any;
}

/** ReplicationControllerSpec is the specification of a replication controller. */
export class ReplicationControllerSpecHelper extends Template implements ReplicationControllerSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _minReadySeconds: any;
    get minReadySeconds(): any /*number*/ {
        return this._minReadySeconds
    }
    set minReadySeconds(x: any /*number*/) {
        this._minReadySeconds = x
    }
    setMinReadySeconds(x: any /*number*/) {
        this.minReadySeconds = x; return this
    }

    _replicas: any;
    get replicas(): any /*number*/ {
        return this._replicas
    }
    set replicas(x: any /*number*/) {
        this._replicas = x
    }
    setReplicas(x: any /*number*/) {
        this.replicas = x; return this
    }

    _selector: any;
    get selector(): any /*any*/ {
        return this._selector
    }
    set selector(x: any /*any*/) {
        this._selector = this.set(this.selector, x)
    }
    setSelector(x: any /*any*/) {
        this.selector = x; return this
    }

    _template: any;
    get template(): any /*PodTemplateSpecHelper*/ {
        return this._template
    }
    set template(x: any /*PodTemplateSpecHelper*/) {
        this._template = x
    }
    setTemplate(x: any /*PodTemplateSpecHelper*/) {
        this.template = x; return this
    }
}

export interface ReplicationControllerStatusHelper extends ReplicationControllerStatus {
    $availableReplicas(x: any): any;
    $conditions(x: any): any;
    $fullyLabeledReplicas(x: any): any;
    $observedGeneration(x: any): any;
    $readyReplicas(x: any): any;
    $replicas(x: any): any;
}

/** ReplicationControllerStatus represents the current status of a replication controller. */
export class ReplicationControllerStatusHelper extends Template implements ReplicationControllerStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _availableReplicas: any;
    get availableReplicas(): any /*number*/ {
        return this._availableReplicas
    }
    set availableReplicas(x: any /*number*/) {
        this._availableReplicas = x
    }
    setAvailableReplicas(x: any /*number*/) {
        this.availableReplicas = x; return this
    }

    _conditions: any;
    get conditions(): any /*Array<ReplicationControllerCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<ReplicationControllerCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<ReplicationControllerCondition>*/) {
        this.conditions = x; return this
    }

    _fullyLabeledReplicas: any;
    get fullyLabeledReplicas(): any /*number*/ {
        return this._fullyLabeledReplicas
    }
    set fullyLabeledReplicas(x: any /*number*/) {
        this._fullyLabeledReplicas = x
    }
    setFullyLabeledReplicas(x: any /*number*/) {
        this.fullyLabeledReplicas = x; return this
    }

    _observedGeneration: any;
    get observedGeneration(): any /*number*/ {
        return this._observedGeneration
    }
    set observedGeneration(x: any /*number*/) {
        this._observedGeneration = x
    }
    setObservedGeneration(x: any /*number*/) {
        this.observedGeneration = x; return this
    }

    _readyReplicas: any;
    get readyReplicas(): any /*number*/ {
        return this._readyReplicas
    }
    set readyReplicas(x: any /*number*/) {
        this._readyReplicas = x
    }
    setReadyReplicas(x: any /*number*/) {
        this.readyReplicas = x; return this
    }

    _replicas: any;
    get replicas(): any /*number*/ {
        return this._replicas
    }
    set replicas(x: any /*number*/) {
        this._replicas = x
    }
    setReplicas(x: any /*number*/) {
        this.replicas = x; return this
    }
}

export interface ResourceFieldSelectorHelper extends ResourceFieldSelector {
    $containerName(x: any): any;
    $divisor(x: any): any;
    $resource(x: any): any;
}

/** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
export class ResourceFieldSelectorHelper extends Template implements ResourceFieldSelectorHelper {
    constructor(obj: any) {
        super(obj)
    }

    _containerName: any;
    get containerName(): any /*string*/ {
        return this._containerName
    }
    set containerName(x: any /*string*/) {
        this._containerName = x
    }
    setContainerName(x: any /*string*/) {
        this.containerName = x; return this
    }

    _divisor: any;
    get divisor(): any /*Quantity*/ {
        return this._divisor
    }
    set divisor(x: any /*Quantity*/) {
        this._divisor = x
    }
    setDivisor(x: any /*Quantity*/) {
        this.divisor = x; return this
    }

    _resource: any;
    get resource(): any /*string*/ {
        return this._resource
    }
    set resource(x: any /*string*/) {
        this._resource = x
    }
    setResource(x: any /*string*/) {
        this.resource = x; return this
    }
}

export interface ResourceQuotaHelper extends ResourceQuota {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** ResourceQuota sets aggregate quota restrictions enforced per namespace */
export class ResourceQuotaHelper extends ResourceTemplate implements ResourceQuotaHelper {
    static kind = 'ResourceQuota';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ResourceQuotaHelper.kind, ResourceQuotaHelper.apiVersion)
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
    get spec(): any /*ResourceQuotaSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*ResourceQuotaSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*ResourceQuotaSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*ResourceQuotaStatusHelper*/ {
        return this._status
    }
    set status(x: any /*ResourceQuotaStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*ResourceQuotaStatusHelper*/) {
        this.status = x; return this
    }
}

export interface ResourceQuotaListHelper extends ResourceQuotaList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** ResourceQuotaList is a list of ResourceQuota items. */
export class ResourceQuotaListHelper extends ResourceTemplate implements ResourceQuotaListHelper {
    static kind = 'ResourceQuotaList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ResourceQuotaListHelper.kind, ResourceQuotaListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<ResourceQuota>*/ {
        return this._items
    }
    set items(x: any /*Array<ResourceQuota>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<ResourceQuota>*/) {
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

export interface ResourceQuotaSpecHelper extends ResourceQuotaSpec {
    $hard(x: any): any;
    $scopeSelector(x: any): any;
    $scopes(x: any): any;
}

/** ResourceQuotaSpec defines the desired hard limits to enforce for Quota. */
export class ResourceQuotaSpecHelper extends Template implements ResourceQuotaSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _hard: any;
    get hard(): any /*{[name: string]: Quantity}Helper*/ {
        return this._hard
    }
    set hard(x: any /*{[name: string]: Quantity}Helper*/) {
        this._hard = this.set(this.hard, x)
    }
    setHard(x: any /*{[name: string]: Quantity}Helper*/) {
        this.hard = x; return this
    }

    _scopeSelector: any;
    get scopeSelector(): any /*ScopeSelectorHelper*/ {
        return this._scopeSelector
    }
    set scopeSelector(x: any /*ScopeSelectorHelper*/) {
        this._scopeSelector = x
    }
    setScopeSelector(x: any /*ScopeSelectorHelper*/) {
        this.scopeSelector = x; return this
    }

    _scopes: any;
    get scopes(): any /*Array<string>*/ {
        return this._scopes
    }
    set scopes(x: any /*Array<string>*/) {
        this._scopes = this.set(this.scopes, x)
    }
    setScopes(x: any /*Array<string>*/) {
        this.scopes = x; return this
    }
}

export interface ResourceQuotaStatusHelper extends ResourceQuotaStatus {
    $hard(x: any): any;
    $used(x: any): any;
}

/** ResourceQuotaStatus defines the enforced hard limits and observed use. */
export class ResourceQuotaStatusHelper extends Template implements ResourceQuotaStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _hard: any;
    get hard(): any /*{[name: string]: Quantity}Helper*/ {
        return this._hard
    }
    set hard(x: any /*{[name: string]: Quantity}Helper*/) {
        this._hard = this.set(this.hard, x)
    }
    setHard(x: any /*{[name: string]: Quantity}Helper*/) {
        this.hard = x; return this
    }

    _used: any;
    get used(): any /*{[name: string]: Quantity}Helper*/ {
        return this._used
    }
    set used(x: any /*{[name: string]: Quantity}Helper*/) {
        this._used = this.set(this.used, x)
    }
    setUsed(x: any /*{[name: string]: Quantity}Helper*/) {
        this.used = x; return this
    }
}

export interface ResourceRequirementsHelper extends ResourceRequirements {
    $limits(x: any): any;
    $requests(x: any): any;
}

/** ResourceRequirements describes the compute resource requirements. */
export class ResourceRequirementsHelper extends Template implements ResourceRequirementsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _limits: any;
    get limits(): any /*{[name: string]: Quantity}Helper*/ {
        return this._limits
    }
    set limits(x: any /*{[name: string]: Quantity}Helper*/) {
        this._limits = this.set(this.limits, x)
    }
    setLimits(x: any /*{[name: string]: Quantity}Helper*/) {
        this.limits = x; return this
    }

    _requests: any;
    get requests(): any /*{[name: string]: Quantity}Helper*/ {
        return this._requests
    }
    set requests(x: any /*{[name: string]: Quantity}Helper*/) {
        this._requests = this.set(this.requests, x)
    }
    setRequests(x: any /*{[name: string]: Quantity}Helper*/) {
        this.requests = x; return this
    }
}

export interface SELinuxOptionsHelper extends SELinuxOptions {
    $level(x: any): any;
    $role(x: any): any;
    $type(x: any): any;
    $user(x: any): any;
}

/** SELinuxOptions are the labels to be applied to the container */
export class SELinuxOptionsHelper extends Template implements SELinuxOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _level: any;
    get level(): any /*string*/ {
        return this._level
    }
    set level(x: any /*string*/) {
        this._level = x
    }
    setLevel(x: any /*string*/) {
        this.level = x; return this
    }

    _role: any;
    get role(): any /*string*/ {
        return this._role
    }
    set role(x: any /*string*/) {
        this._role = x
    }
    setRole(x: any /*string*/) {
        this.role = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }

    _user: any;
    get user(): any /*string*/ {
        return this._user
    }
    set user(x: any /*string*/) {
        this._user = x
    }
    setUser(x: any /*string*/) {
        this.user = x; return this
    }
}

export interface ScaleIOPersistentVolumeSourceHelper extends ScaleIOPersistentVolumeSource {
    $fsType(x: any): any;
    $gateway(x: any): any;
    $protectionDomain(x: any): any;
    $readOnly(x: any): any;
    $secretRef(x: any): any;
    $sslEnabled(x: any): any;
    $storageMode(x: any): any;
    $storagePool(x: any): any;
    $system(x: any): any;
    $volumeName(x: any): any;
}

/** ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume */
export class ScaleIOPersistentVolumeSourceHelper extends Template implements ScaleIOPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _gateway: any;
    get gateway(): any /*string*/ {
        return this._gateway
    }
    set gateway(x: any /*string*/) {
        this._gateway = x
    }
    setGateway(x: any /*string*/) {
        this.gateway = x; return this
    }

    _protectionDomain: any;
    get protectionDomain(): any /*string*/ {
        return this._protectionDomain
    }
    set protectionDomain(x: any /*string*/) {
        this._protectionDomain = x
    }
    setProtectionDomain(x: any /*string*/) {
        this.protectionDomain = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _secretRef: any;
    get secretRef(): any /*SecretReferenceHelper*/ {
        return this._secretRef
    }
    set secretRef(x: any /*SecretReferenceHelper*/) {
        this._secretRef = x
    }
    setSecretRef(x: any /*SecretReferenceHelper*/) {
        this.secretRef = x; return this
    }

    _sslEnabled: any;
    get sslEnabled(): any /*boolean*/ {
        return this._sslEnabled
    }
    set sslEnabled(x: any /*boolean*/) {
        this._sslEnabled = x
    }
    setSslEnabled(x: any /*boolean*/) {
        this.sslEnabled = x; return this
    }

    _storageMode: any;
    get storageMode(): any /*string*/ {
        return this._storageMode
    }
    set storageMode(x: any /*string*/) {
        this._storageMode = x
    }
    setStorageMode(x: any /*string*/) {
        this.storageMode = x; return this
    }

    _storagePool: any;
    get storagePool(): any /*string*/ {
        return this._storagePool
    }
    set storagePool(x: any /*string*/) {
        this._storagePool = x
    }
    setStoragePool(x: any /*string*/) {
        this.storagePool = x; return this
    }

    _system: any;
    get system(): any /*string*/ {
        return this._system
    }
    set system(x: any /*string*/) {
        this._system = x
    }
    setSystem(x: any /*string*/) {
        this.system = x; return this
    }

    _volumeName: any;
    get volumeName(): any /*string*/ {
        return this._volumeName
    }
    set volumeName(x: any /*string*/) {
        this._volumeName = x
    }
    setVolumeName(x: any /*string*/) {
        this.volumeName = x; return this
    }
}

export interface ScaleIOVolumeSourceHelper extends ScaleIOVolumeSource {
    $fsType(x: any): any;
    $gateway(x: any): any;
    $protectionDomain(x: any): any;
    $readOnly(x: any): any;
    $secretRef(x: any): any;
    $sslEnabled(x: any): any;
    $storageMode(x: any): any;
    $storagePool(x: any): any;
    $system(x: any): any;
    $volumeName(x: any): any;
}

/** ScaleIOVolumeSource represents a persistent ScaleIO volume */
export class ScaleIOVolumeSourceHelper extends Template implements ScaleIOVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _gateway: any;
    get gateway(): any /*string*/ {
        return this._gateway
    }
    set gateway(x: any /*string*/) {
        this._gateway = x
    }
    setGateway(x: any /*string*/) {
        this.gateway = x; return this
    }

    _protectionDomain: any;
    get protectionDomain(): any /*string*/ {
        return this._protectionDomain
    }
    set protectionDomain(x: any /*string*/) {
        this._protectionDomain = x
    }
    setProtectionDomain(x: any /*string*/) {
        this.protectionDomain = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _secretRef: any;
    get secretRef(): any /*LocalObjectReferenceHelper*/ {
        return this._secretRef
    }
    set secretRef(x: any /*LocalObjectReferenceHelper*/) {
        this._secretRef = x
    }
    setSecretRef(x: any /*LocalObjectReferenceHelper*/) {
        this.secretRef = x; return this
    }

    _sslEnabled: any;
    get sslEnabled(): any /*boolean*/ {
        return this._sslEnabled
    }
    set sslEnabled(x: any /*boolean*/) {
        this._sslEnabled = x
    }
    setSslEnabled(x: any /*boolean*/) {
        this.sslEnabled = x; return this
    }

    _storageMode: any;
    get storageMode(): any /*string*/ {
        return this._storageMode
    }
    set storageMode(x: any /*string*/) {
        this._storageMode = x
    }
    setStorageMode(x: any /*string*/) {
        this.storageMode = x; return this
    }

    _storagePool: any;
    get storagePool(): any /*string*/ {
        return this._storagePool
    }
    set storagePool(x: any /*string*/) {
        this._storagePool = x
    }
    setStoragePool(x: any /*string*/) {
        this.storagePool = x; return this
    }

    _system: any;
    get system(): any /*string*/ {
        return this._system
    }
    set system(x: any /*string*/) {
        this._system = x
    }
    setSystem(x: any /*string*/) {
        this.system = x; return this
    }

    _volumeName: any;
    get volumeName(): any /*string*/ {
        return this._volumeName
    }
    set volumeName(x: any /*string*/) {
        this._volumeName = x
    }
    setVolumeName(x: any /*string*/) {
        this.volumeName = x; return this
    }
}

export interface ScopeSelectorHelper extends ScopeSelector {
    $matchExpressions(x: any): any;
}

/** A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements. */
export class ScopeSelectorHelper extends Template implements ScopeSelectorHelper {
    constructor(obj: any) {
        super(obj)
    }

    _matchExpressions: any;
    get matchExpressions(): any /*Array<ScopedResourceSelectorRequirement>*/ {
        return this._matchExpressions
    }
    set matchExpressions(x: any /*Array<ScopedResourceSelectorRequirement>*/) {
        this._matchExpressions = this.set(this.matchExpressions, x)
    }
    setMatchExpressions(x: any /*Array<ScopedResourceSelectorRequirement>*/) {
        this.matchExpressions = x; return this
    }
}

export interface ScopedResourceSelectorRequirementHelper extends ScopedResourceSelectorRequirement {
    $operator(x: any): any;
    $scopeName(x: any): any;
    $values(x: any): any;
}

/** A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values. */
export class ScopedResourceSelectorRequirementHelper extends Template implements ScopedResourceSelectorRequirementHelper {
    constructor(obj: any) {
        super(obj)
    }

    _operator: any;
    get operator(): any /*string*/ {
        return this._operator
    }
    set operator(x: any /*string*/) {
        this._operator = x
    }
    setOperator(x: any /*string*/) {
        this.operator = x; return this
    }

    _scopeName: any;
    get scopeName(): any /*string*/ {
        return this._scopeName
    }
    set scopeName(x: any /*string*/) {
        this._scopeName = x
    }
    setScopeName(x: any /*string*/) {
        this.scopeName = x; return this
    }

    _values: any;
    get values(): any /*Array<string>*/ {
        return this._values
    }
    set values(x: any /*Array<string>*/) {
        this._values = this.set(this.values, x)
    }
    setValues(x: any /*Array<string>*/) {
        this.values = x; return this
    }
}

export interface SeccompProfileHelper extends SeccompProfile {
    $localhostProfile(x: any): any;
    $type(x: any): any;
}

/** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
export class SeccompProfileHelper extends Template implements SeccompProfileHelper {
    constructor(obj: any) {
        super(obj)
    }

    _localhostProfile: any;
    get localhostProfile(): any /*string*/ {
        return this._localhostProfile
    }
    set localhostProfile(x: any /*string*/) {
        this._localhostProfile = x
    }
    setLocalhostProfile(x: any /*string*/) {
        this.localhostProfile = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface SecretHelper extends Secret {
    $data(x: any): any;
    $immutable(x: any): any;
    $metadata(x: any): any;
    $stringData(x: any): any;
    $type(x: any): any;
}

/** Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes. */
export class SecretHelper extends ResourceTemplate implements SecretHelper {
    static kind = 'Secret';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, SecretHelper.kind, SecretHelper.apiVersion)
    }

    _data: any;
    get data(): any /*any*/ {
        return this._data
    }
    set data(x: any /*any*/) {
        this._data = this.set(this.data, x)
    }
    setData(x: any /*any*/) {
        this.data = x; return this
    }

    _immutable: any;
    get immutable(): any /*boolean*/ {
        return this._immutable
    }
    set immutable(x: any /*boolean*/) {
        this._immutable = x
    }
    setImmutable(x: any /*boolean*/) {
        this.immutable = x; return this
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

    _stringData: any;
    get stringData(): any /*any*/ {
        return this._stringData
    }
    set stringData(x: any /*any*/) {
        this._stringData = this.set(this.stringData, x)
    }
    setStringData(x: any /*any*/) {
        this.stringData = x; return this
    }

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface SecretEnvSourceHelper extends SecretEnvSource {
    $optional(x: any): any;
}

/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 *
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
export class SecretEnvSourceHelper extends Template implements SecretEnvSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _optional: any;
    get optional(): any /*boolean*/ {
        return this._optional
    }
    set optional(x: any /*boolean*/) {
        this._optional = x
    }
    setOptional(x: any /*boolean*/) {
        this.optional = x; return this
    }
}

export interface SecretKeySelectorHelper extends SecretKeySelector {
    $key(x: any): any;
    $optional(x: any): any;
}

/** SecretKeySelector selects a key of a Secret. */
export class SecretKeySelectorHelper extends Template implements SecretKeySelectorHelper {
    constructor(obj: any) {
        super(obj)
    }

    _key: any;
    get key(): any /*string*/ {
        return this._key
    }
    set key(x: any /*string*/) {
        this._key = x
    }
    setKey(x: any /*string*/) {
        this.key = x; return this
    }

    _optional: any;
    get optional(): any /*boolean*/ {
        return this._optional
    }
    set optional(x: any /*boolean*/) {
        this._optional = x
    }
    setOptional(x: any /*boolean*/) {
        this.optional = x; return this
    }
}

export interface SecretListHelper extends SecretList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** SecretList is a list of Secret. */
export class SecretListHelper extends ResourceTemplate implements SecretListHelper {
    static kind = 'SecretList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, SecretListHelper.kind, SecretListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<Secret>*/ {
        return this._items
    }
    set items(x: any /*Array<Secret>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<Secret>*/) {
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

export interface SecretProjectionHelper extends SecretProjection {
    $items(x: any): any;
    $optional(x: any): any;
}

/**
 * Adapts a secret into a projected volume.
 *
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 */
export class SecretProjectionHelper extends Template implements SecretProjectionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _items: any;
    get items(): any /*Array<KeyToPath>*/ {
        return this._items
    }
    set items(x: any /*Array<KeyToPath>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<KeyToPath>*/) {
        this.items = x; return this
    }

    _optional: any;
    get optional(): any /*boolean*/ {
        return this._optional
    }
    set optional(x: any /*boolean*/) {
        this._optional = x
    }
    setOptional(x: any /*boolean*/) {
        this.optional = x; return this
    }
}

export interface SecretReferenceHelper extends SecretReference {
}

/** SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace */
export class SecretReferenceHelper extends Template implements SecretReferenceHelper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface SecretVolumeSourceHelper extends SecretVolumeSource {
    $defaultMode(x: any): any;
    $items(x: any): any;
    $optional(x: any): any;
    $secretName(x: any): any;
}

/**
 * Adapts a Secret into a volume.
 *
 * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
 */
export class SecretVolumeSourceHelper extends Template implements SecretVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _defaultMode: any;
    get defaultMode(): any /*number*/ {
        return this._defaultMode
    }
    set defaultMode(x: any /*number*/) {
        this._defaultMode = x
    }
    setDefaultMode(x: any /*number*/) {
        this.defaultMode = x; return this
    }

    _items: any;
    get items(): any /*Array<KeyToPath>*/ {
        return this._items
    }
    set items(x: any /*Array<KeyToPath>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<KeyToPath>*/) {
        this.items = x; return this
    }

    _optional: any;
    get optional(): any /*boolean*/ {
        return this._optional
    }
    set optional(x: any /*boolean*/) {
        this._optional = x
    }
    setOptional(x: any /*boolean*/) {
        this.optional = x; return this
    }

    _secretName: any;
    get secretName(): any /*string*/ {
        return this._secretName
    }
    set secretName(x: any /*string*/) {
        this._secretName = x
    }
    setSecretName(x: any /*string*/) {
        this.secretName = x; return this
    }
}

export interface SecurityContextHelper extends SecurityContext {
    $allowPrivilegeEscalation(x: any): any;
    $capabilities(x: any): any;
    $privileged(x: any): any;
    $procMount(x: any): any;
    $readOnlyRootFilesystem(x: any): any;
    $runAsGroup(x: any): any;
    $runAsNonRoot(x: any): any;
    $runAsUser(x: any): any;
    $seLinuxOptions(x: any): any;
    $seccompProfile(x: any): any;
    $windowsOptions(x: any): any;
}

/** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
export class SecurityContextHelper extends Template implements SecurityContextHelper {
    constructor(obj: any) {
        super(obj)
    }

    _allowPrivilegeEscalation: any;
    get allowPrivilegeEscalation(): any /*boolean*/ {
        return this._allowPrivilegeEscalation
    }
    set allowPrivilegeEscalation(x: any /*boolean*/) {
        this._allowPrivilegeEscalation = x
    }
    setAllowPrivilegeEscalation(x: any /*boolean*/) {
        this.allowPrivilegeEscalation = x; return this
    }

    _capabilities: any;
    get capabilities(): any /*CapabilitiesHelper*/ {
        return this._capabilities
    }
    set capabilities(x: any /*CapabilitiesHelper*/) {
        this._capabilities = x
    }
    setCapabilities(x: any /*CapabilitiesHelper*/) {
        this.capabilities = x; return this
    }

    _privileged: any;
    get privileged(): any /*boolean*/ {
        return this._privileged
    }
    set privileged(x: any /*boolean*/) {
        this._privileged = x
    }
    setPrivileged(x: any /*boolean*/) {
        this.privileged = x; return this
    }

    _procMount: any;
    get procMount(): any /*string*/ {
        return this._procMount
    }
    set procMount(x: any /*string*/) {
        this._procMount = x
    }
    setProcMount(x: any /*string*/) {
        this.procMount = x; return this
    }

    _readOnlyRootFilesystem: any;
    get readOnlyRootFilesystem(): any /*boolean*/ {
        return this._readOnlyRootFilesystem
    }
    set readOnlyRootFilesystem(x: any /*boolean*/) {
        this._readOnlyRootFilesystem = x
    }
    setReadOnlyRootFilesystem(x: any /*boolean*/) {
        this.readOnlyRootFilesystem = x; return this
    }

    _runAsGroup: any;
    get runAsGroup(): any /*number*/ {
        return this._runAsGroup
    }
    set runAsGroup(x: any /*number*/) {
        this._runAsGroup = x
    }
    setRunAsGroup(x: any /*number*/) {
        this.runAsGroup = x; return this
    }

    _runAsNonRoot: any;
    get runAsNonRoot(): any /*boolean*/ {
        return this._runAsNonRoot
    }
    set runAsNonRoot(x: any /*boolean*/) {
        this._runAsNonRoot = x
    }
    setRunAsNonRoot(x: any /*boolean*/) {
        this.runAsNonRoot = x; return this
    }

    _runAsUser: any;
    get runAsUser(): any /*number*/ {
        return this._runAsUser
    }
    set runAsUser(x: any /*number*/) {
        this._runAsUser = x
    }
    setRunAsUser(x: any /*number*/) {
        this.runAsUser = x; return this
    }

    _seLinuxOptions: any;
    get seLinuxOptions(): any /*SELinuxOptionsHelper*/ {
        return this._seLinuxOptions
    }
    set seLinuxOptions(x: any /*SELinuxOptionsHelper*/) {
        this._seLinuxOptions = x
    }
    setSeLinuxOptions(x: any /*SELinuxOptionsHelper*/) {
        this.seLinuxOptions = x; return this
    }

    _seccompProfile: any;
    get seccompProfile(): any /*SeccompProfileHelper*/ {
        return this._seccompProfile
    }
    set seccompProfile(x: any /*SeccompProfileHelper*/) {
        this._seccompProfile = x
    }
    setSeccompProfile(x: any /*SeccompProfileHelper*/) {
        this.seccompProfile = x; return this
    }

    _windowsOptions: any;
    get windowsOptions(): any /*WindowsSecurityContextOptionsHelper*/ {
        return this._windowsOptions
    }
    set windowsOptions(x: any /*WindowsSecurityContextOptionsHelper*/) {
        this._windowsOptions = x
    }
    setWindowsOptions(x: any /*WindowsSecurityContextOptionsHelper*/) {
        this.windowsOptions = x; return this
    }
}

export interface ServiceHelper extends Service {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy. */
export class ServiceHelper extends ResourceTemplate implements ServiceHelper {
    static kind = 'Service';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ServiceHelper.kind, ServiceHelper.apiVersion)
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
    get spec(): any /*ServiceSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*ServiceSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*ServiceSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*ServiceStatusHelper*/ {
        return this._status
    }
    set status(x: any /*ServiceStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*ServiceStatusHelper*/) {
        this.status = x; return this
    }
}

export interface ServiceAccountHelper extends ServiceAccount {
    $automountServiceAccountToken(x: any): any;
    $imagePullSecrets(x: any): any;
    $metadata(x: any): any;
    $secrets(x: any): any;
}

/** ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets */
export class ServiceAccountHelper extends ResourceTemplate implements ServiceAccountHelper {
    static kind = 'ServiceAccount';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ServiceAccountHelper.kind, ServiceAccountHelper.apiVersion)
    }

    _automountServiceAccountToken: any;
    get automountServiceAccountToken(): any /*boolean*/ {
        return this._automountServiceAccountToken
    }
    set automountServiceAccountToken(x: any /*boolean*/) {
        this._automountServiceAccountToken = x
    }
    setAutomountServiceAccountToken(x: any /*boolean*/) {
        this.automountServiceAccountToken = x; return this
    }

    _imagePullSecrets: any;
    get imagePullSecrets(): any /*Array<LocalObjectReference>*/ {
        return this._imagePullSecrets
    }
    set imagePullSecrets(x: any /*Array<LocalObjectReference>*/) {
        this._imagePullSecrets = this.set(this.imagePullSecrets, x)
    }
    setImagePullSecrets(x: any /*Array<LocalObjectReference>*/) {
        this.imagePullSecrets = x; return this
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

    _secrets: any;
    get secrets(): any /*Array<ObjectReference>*/ {
        return this._secrets
    }
    set secrets(x: any /*Array<ObjectReference>*/) {
        this._secrets = this.set(this.secrets, x)
    }
    setSecrets(x: any /*Array<ObjectReference>*/) {
        this.secrets = x; return this
    }
}

export interface ServiceAccountListHelper extends ServiceAccountList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** ServiceAccountList is a list of ServiceAccount objects */
export class ServiceAccountListHelper extends ResourceTemplate implements ServiceAccountListHelper {
    static kind = 'ServiceAccountList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ServiceAccountListHelper.kind, ServiceAccountListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<ServiceAccount>*/ {
        return this._items
    }
    set items(x: any /*Array<ServiceAccount>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<ServiceAccount>*/) {
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

export interface ServiceAccountTokenProjectionHelper extends ServiceAccountTokenProjection {
    $audience(x: any): any;
    $expirationSeconds(x: any): any;
    $path(x: any): any;
}

/** ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
export class ServiceAccountTokenProjectionHelper extends Template implements ServiceAccountTokenProjectionHelper {
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

    _path: any;
    get path(): any /*string*/ {
        return this._path
    }
    set path(x: any /*string*/) {
        this._path = x
    }
    setPath(x: any /*string*/) {
        this.path = x; return this
    }
}

export interface ServiceListHelper extends ServiceList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** ServiceList holds a list of services. */
export class ServiceListHelper extends ResourceTemplate implements ServiceListHelper {
    static kind = 'ServiceList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ServiceListHelper.kind, ServiceListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<Service>*/ {
        return this._items
    }
    set items(x: any /*Array<Service>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<Service>*/) {
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

export interface ServicePortHelper extends ServicePort {
    $appProtocol(x: any): any;
    $nodePort(x: any): any;
    $port(x: any): any;
    $protocol(x: any): any;
    $targetPort(x: any): any;
}

/** ServicePort contains information on service's port. */
export class ServicePortHelper extends Template implements ServicePortHelper {
    constructor(obj: any) {
        super(obj)
    }

    _appProtocol: any;
    get appProtocol(): any /*string*/ {
        return this._appProtocol
    }
    set appProtocol(x: any /*string*/) {
        this._appProtocol = x
    }
    setAppProtocol(x: any /*string*/) {
        this.appProtocol = x; return this
    }

    _nodePort: any;
    get nodePort(): any /*number*/ {
        return this._nodePort
    }
    set nodePort(x: any /*number*/) {
        this._nodePort = x
    }
    setNodePort(x: any /*number*/) {
        this.nodePort = x; return this
    }

    _port: any;
    get port(): any /*number*/ {
        return this._port
    }
    set port(x: any /*number*/) {
        this._port = x
    }
    setPort(x: any /*number*/) {
        this.port = x; return this
    }

    _protocol: any;
    get protocol(): any /*string*/ {
        return this._protocol
    }
    set protocol(x: any /*string*/) {
        this._protocol = x
    }
    setProtocol(x: any /*string*/) {
        this.protocol = x; return this
    }

    _targetPort: any;
    get targetPort(): any /*number | stringHelper*/ {
        return this._targetPort
    }
    set targetPort(x: any /*number | stringHelper*/) {
        this._targetPort = x
    }
    setTargetPort(x: any /*number | stringHelper*/) {
        this.targetPort = x; return this
    }
}

export interface ServiceSpecHelper extends ServiceSpec {
    $allocateLoadBalancerNodePorts(x: any): any;
    $clusterIP(x: any): any;
    $clusterIPs(x: any): any;
    $externalIPs(x: any): any;
    $externalName(x: any): any;
    $externalTrafficPolicy(x: any): any;
    $healthCheckNodePort(x: any): any;
    $internalTrafficPolicy(x: any): any;
    $ipFamilies(x: any): any;
    $ipFamilyPolicy(x: any): any;
    $loadBalancerClass(x: any): any;
    $loadBalancerIP(x: any): any;
    $loadBalancerSourceRanges(x: any): any;
    $ports(x: any): any;
    $publishNotReadyAddresses(x: any): any;
    $selector(x: any): any;
    $sessionAffinity(x: any): any;
    $sessionAffinityConfig(x: any): any;
    $topologyKeys(x: any): any;
    $type(x: any): any;
}

/** ServiceSpec describes the attributes that a user creates on a service. */
export class ServiceSpecHelper extends Template implements ServiceSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _allocateLoadBalancerNodePorts: any;
    get allocateLoadBalancerNodePorts(): any /*boolean*/ {
        return this._allocateLoadBalancerNodePorts
    }
    set allocateLoadBalancerNodePorts(x: any /*boolean*/) {
        this._allocateLoadBalancerNodePorts = x
    }
    setAllocateLoadBalancerNodePorts(x: any /*boolean*/) {
        this.allocateLoadBalancerNodePorts = x; return this
    }

    _clusterIP: any;
    get clusterIP(): any /*string*/ {
        return this._clusterIP
    }
    set clusterIP(x: any /*string*/) {
        this._clusterIP = x
    }
    setClusterIP(x: any /*string*/) {
        this.clusterIP = x; return this
    }

    _clusterIPs: any;
    get clusterIPs(): any /*Array<string>*/ {
        return this._clusterIPs
    }
    set clusterIPs(x: any /*Array<string>*/) {
        this._clusterIPs = this.set(this.clusterIPs, x)
    }
    setClusterIPs(x: any /*Array<string>*/) {
        this.clusterIPs = x; return this
    }

    _externalIPs: any;
    get externalIPs(): any /*Array<string>*/ {
        return this._externalIPs
    }
    set externalIPs(x: any /*Array<string>*/) {
        this._externalIPs = this.set(this.externalIPs, x)
    }
    setExternalIPs(x: any /*Array<string>*/) {
        this.externalIPs = x; return this
    }

    _externalName: any;
    get externalName(): any /*string*/ {
        return this._externalName
    }
    set externalName(x: any /*string*/) {
        this._externalName = x
    }
    setExternalName(x: any /*string*/) {
        this.externalName = x; return this
    }

    _externalTrafficPolicy: any;
    get externalTrafficPolicy(): any /*string*/ {
        return this._externalTrafficPolicy
    }
    set externalTrafficPolicy(x: any /*string*/) {
        this._externalTrafficPolicy = x
    }
    setExternalTrafficPolicy(x: any /*string*/) {
        this.externalTrafficPolicy = x; return this
    }

    _healthCheckNodePort: any;
    get healthCheckNodePort(): any /*number*/ {
        return this._healthCheckNodePort
    }
    set healthCheckNodePort(x: any /*number*/) {
        this._healthCheckNodePort = x
    }
    setHealthCheckNodePort(x: any /*number*/) {
        this.healthCheckNodePort = x; return this
    }

    _internalTrafficPolicy: any;
    get internalTrafficPolicy(): any /*string*/ {
        return this._internalTrafficPolicy
    }
    set internalTrafficPolicy(x: any /*string*/) {
        this._internalTrafficPolicy = x
    }
    setInternalTrafficPolicy(x: any /*string*/) {
        this.internalTrafficPolicy = x; return this
    }

    _ipFamilies: any;
    get ipFamilies(): any /*Array<string>*/ {
        return this._ipFamilies
    }
    set ipFamilies(x: any /*Array<string>*/) {
        this._ipFamilies = this.set(this.ipFamilies, x)
    }
    setIpFamilies(x: any /*Array<string>*/) {
        this.ipFamilies = x; return this
    }

    _ipFamilyPolicy: any;
    get ipFamilyPolicy(): any /*string*/ {
        return this._ipFamilyPolicy
    }
    set ipFamilyPolicy(x: any /*string*/) {
        this._ipFamilyPolicy = x
    }
    setIpFamilyPolicy(x: any /*string*/) {
        this.ipFamilyPolicy = x; return this
    }

    _loadBalancerClass: any;
    get loadBalancerClass(): any /*string*/ {
        return this._loadBalancerClass
    }
    set loadBalancerClass(x: any /*string*/) {
        this._loadBalancerClass = x
    }
    setLoadBalancerClass(x: any /*string*/) {
        this.loadBalancerClass = x; return this
    }

    _loadBalancerIP: any;
    get loadBalancerIP(): any /*string*/ {
        return this._loadBalancerIP
    }
    set loadBalancerIP(x: any /*string*/) {
        this._loadBalancerIP = x
    }
    setLoadBalancerIP(x: any /*string*/) {
        this.loadBalancerIP = x; return this
    }

    _loadBalancerSourceRanges: any;
    get loadBalancerSourceRanges(): any /*Array<string>*/ {
        return this._loadBalancerSourceRanges
    }
    set loadBalancerSourceRanges(x: any /*Array<string>*/) {
        this._loadBalancerSourceRanges = this.set(this.loadBalancerSourceRanges, x)
    }
    setLoadBalancerSourceRanges(x: any /*Array<string>*/) {
        this.loadBalancerSourceRanges = x; return this
    }

    _ports: any;
    get ports(): any /*Array<ServicePort>*/ {
        return this._ports
    }
    set ports(x: any /*Array<ServicePort>*/) {
        this._ports = this.set(this.ports, x)
    }
    setPorts(x: any /*Array<ServicePort>*/) {
        this.ports = x; return this
    }

    _publishNotReadyAddresses: any;
    get publishNotReadyAddresses(): any /*boolean*/ {
        return this._publishNotReadyAddresses
    }
    set publishNotReadyAddresses(x: any /*boolean*/) {
        this._publishNotReadyAddresses = x
    }
    setPublishNotReadyAddresses(x: any /*boolean*/) {
        this.publishNotReadyAddresses = x; return this
    }

    _selector: any;
    get selector(): any /*any*/ {
        return this._selector
    }
    set selector(x: any /*any*/) {
        this._selector = this.set(this.selector, x)
    }
    setSelector(x: any /*any*/) {
        this.selector = x; return this
    }

    _sessionAffinity: any;
    get sessionAffinity(): any /*string*/ {
        return this._sessionAffinity
    }
    set sessionAffinity(x: any /*string*/) {
        this._sessionAffinity = x
    }
    setSessionAffinity(x: any /*string*/) {
        this.sessionAffinity = x; return this
    }

    _sessionAffinityConfig: any;
    get sessionAffinityConfig(): any /*SessionAffinityConfigHelper*/ {
        return this._sessionAffinityConfig
    }
    set sessionAffinityConfig(x: any /*SessionAffinityConfigHelper*/) {
        this._sessionAffinityConfig = x
    }
    setSessionAffinityConfig(x: any /*SessionAffinityConfigHelper*/) {
        this.sessionAffinityConfig = x; return this
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

    _type: any;
    get type(): any /*string*/ {
        return this._type
    }
    set type(x: any /*string*/) {
        this._type = x
    }
    setType(x: any /*string*/) {
        this.type = x; return this
    }
}

export interface ServiceStatusHelper extends ServiceStatus {
    $conditions(x: any): any;
    $loadBalancer(x: any): any;
}

/** ServiceStatus represents the current status of a service. */
export class ServiceStatusHelper extends Template implements ServiceStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conditions: any;
    get conditions(): any /*Array<Condition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<Condition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<Condition>*/) {
        this.conditions = x; return this
    }

    _loadBalancer: any;
    get loadBalancer(): any /*LoadBalancerStatusHelper*/ {
        return this._loadBalancer
    }
    set loadBalancer(x: any /*LoadBalancerStatusHelper*/) {
        this._loadBalancer = x
    }
    setLoadBalancer(x: any /*LoadBalancerStatusHelper*/) {
        this.loadBalancer = x; return this
    }
}

export interface SessionAffinityConfigHelper extends SessionAffinityConfig {
    $clientIP(x: any): any;
}

/** SessionAffinityConfig represents the configurations of session affinity. */
export class SessionAffinityConfigHelper extends Template implements SessionAffinityConfigHelper {
    constructor(obj: any) {
        super(obj)
    }

    _clientIP: any;
    get clientIP(): any /*ClientIPConfigHelper*/ {
        return this._clientIP
    }
    set clientIP(x: any /*ClientIPConfigHelper*/) {
        this._clientIP = x
    }
    setClientIP(x: any /*ClientIPConfigHelper*/) {
        this.clientIP = x; return this
    }
}

export interface StorageOSPersistentVolumeSourceHelper extends StorageOSPersistentVolumeSource {
    $fsType(x: any): any;
    $readOnly(x: any): any;
    $secretRef(x: any): any;
    $volumeName(x: any): any;
    $volumeNamespace(x: any): any;
}

/** Represents a StorageOS persistent volume resource. */
export class StorageOSPersistentVolumeSourceHelper extends Template implements StorageOSPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _secretRef: any;
    get secretRef(): any /*ObjectReferenceHelper*/ {
        return this._secretRef
    }
    set secretRef(x: any /*ObjectReferenceHelper*/) {
        this._secretRef = x
    }
    setSecretRef(x: any /*ObjectReferenceHelper*/) {
        this.secretRef = x; return this
    }

    _volumeName: any;
    get volumeName(): any /*string*/ {
        return this._volumeName
    }
    set volumeName(x: any /*string*/) {
        this._volumeName = x
    }
    setVolumeName(x: any /*string*/) {
        this.volumeName = x; return this
    }

    _volumeNamespace: any;
    get volumeNamespace(): any /*string*/ {
        return this._volumeNamespace
    }
    set volumeNamespace(x: any /*string*/) {
        this._volumeNamespace = x
    }
    setVolumeNamespace(x: any /*string*/) {
        this.volumeNamespace = x; return this
    }
}

export interface StorageOSVolumeSourceHelper extends StorageOSVolumeSource {
    $fsType(x: any): any;
    $readOnly(x: any): any;
    $secretRef(x: any): any;
    $volumeName(x: any): any;
    $volumeNamespace(x: any): any;
}

/** Represents a StorageOS persistent volume resource. */
export class StorageOSVolumeSourceHelper extends Template implements StorageOSVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _secretRef: any;
    get secretRef(): any /*LocalObjectReferenceHelper*/ {
        return this._secretRef
    }
    set secretRef(x: any /*LocalObjectReferenceHelper*/) {
        this._secretRef = x
    }
    setSecretRef(x: any /*LocalObjectReferenceHelper*/) {
        this.secretRef = x; return this
    }

    _volumeName: any;
    get volumeName(): any /*string*/ {
        return this._volumeName
    }
    set volumeName(x: any /*string*/) {
        this._volumeName = x
    }
    setVolumeName(x: any /*string*/) {
        this.volumeName = x; return this
    }

    _volumeNamespace: any;
    get volumeNamespace(): any /*string*/ {
        return this._volumeNamespace
    }
    set volumeNamespace(x: any /*string*/) {
        this._volumeNamespace = x
    }
    setVolumeNamespace(x: any /*string*/) {
        this.volumeNamespace = x; return this
    }
}

export interface SysctlHelper extends Sysctl {
    $value(x: any): any;
}

/** Sysctl defines a kernel parameter to be set */
export class SysctlHelper extends Template implements SysctlHelper {
    constructor(obj: any) {
        super(obj)
    }

    _value: any;
    get value(): any /*string*/ {
        return this._value
    }
    set value(x: any /*string*/) {
        this._value = x
    }
    setValue(x: any /*string*/) {
        this.value = x; return this
    }
}

export interface TCPSocketActionHelper extends TCPSocketAction {
    $host(x: any): any;
    $port(x: any): any;
}

/** TCPSocketAction describes an action based on opening a socket */
export class TCPSocketActionHelper extends Template implements TCPSocketActionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _host: any;
    get host(): any /*string*/ {
        return this._host
    }
    set host(x: any /*string*/) {
        this._host = x
    }
    setHost(x: any /*string*/) {
        this.host = x; return this
    }

    _port: any;
    get port(): any /*number | stringHelper*/ {
        return this._port
    }
    set port(x: any /*number | stringHelper*/) {
        this._port = x
    }
    setPort(x: any /*number | stringHelper*/) {
        this.port = x; return this
    }
}

export interface TaintHelper extends Taint {
    $effect(x: any): any;
    $key(x: any): any;
    $timeAdded(x: any): any;
    $value(x: any): any;
}

/** The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint. */
export class TaintHelper extends Template implements TaintHelper {
    constructor(obj: any) {
        super(obj)
    }

    _effect: any;
    get effect(): any /*string*/ {
        return this._effect
    }
    set effect(x: any /*string*/) {
        this._effect = x
    }
    setEffect(x: any /*string*/) {
        this.effect = x; return this
    }

    _key: any;
    get key(): any /*string*/ {
        return this._key
    }
    set key(x: any /*string*/) {
        this._key = x
    }
    setKey(x: any /*string*/) {
        this.key = x; return this
    }

    _timeAdded: any;
    get timeAdded(): any /*Time*/ {
        return this._timeAdded
    }
    set timeAdded(x: any /*Time*/) {
        this._timeAdded = x
    }
    setTimeAdded(x: any /*Time*/) {
        this.timeAdded = x; return this
    }

    _value: any;
    get value(): any /*string*/ {
        return this._value
    }
    set value(x: any /*string*/) {
        this._value = x
    }
    setValue(x: any /*string*/) {
        this.value = x; return this
    }
}

export interface TolerationHelper extends Toleration {
    $effect(x: any): any;
    $key(x: any): any;
    $operator(x: any): any;
    $tolerationSeconds(x: any): any;
    $value(x: any): any;
}

/** The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>. */
export class TolerationHelper extends Template implements TolerationHelper {
    constructor(obj: any) {
        super(obj)
    }

    _effect: any;
    get effect(): any /*string*/ {
        return this._effect
    }
    set effect(x: any /*string*/) {
        this._effect = x
    }
    setEffect(x: any /*string*/) {
        this.effect = x; return this
    }

    _key: any;
    get key(): any /*string*/ {
        return this._key
    }
    set key(x: any /*string*/) {
        this._key = x
    }
    setKey(x: any /*string*/) {
        this.key = x; return this
    }

    _operator: any;
    get operator(): any /*string*/ {
        return this._operator
    }
    set operator(x: any /*string*/) {
        this._operator = x
    }
    setOperator(x: any /*string*/) {
        this.operator = x; return this
    }

    _tolerationSeconds: any;
    get tolerationSeconds(): any /*number*/ {
        return this._tolerationSeconds
    }
    set tolerationSeconds(x: any /*number*/) {
        this._tolerationSeconds = x
    }
    setTolerationSeconds(x: any /*number*/) {
        this.tolerationSeconds = x; return this
    }

    _value: any;
    get value(): any /*string*/ {
        return this._value
    }
    set value(x: any /*string*/) {
        this._value = x
    }
    setValue(x: any /*string*/) {
        this.value = x; return this
    }
}

export interface TopologySelectorLabelRequirementHelper extends TopologySelectorLabelRequirement {
    $key(x: any): any;
    $values(x: any): any;
}

/** A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future. */
export class TopologySelectorLabelRequirementHelper extends Template implements TopologySelectorLabelRequirementHelper {
    constructor(obj: any) {
        super(obj)
    }

    _key: any;
    get key(): any /*string*/ {
        return this._key
    }
    set key(x: any /*string*/) {
        this._key = x
    }
    setKey(x: any /*string*/) {
        this.key = x; return this
    }

    _values: any;
    get values(): any /*Array<string>*/ {
        return this._values
    }
    set values(x: any /*Array<string>*/) {
        this._values = this.set(this.values, x)
    }
    setValues(x: any /*Array<string>*/) {
        this.values = x; return this
    }
}

export interface TopologySelectorTermHelper extends TopologySelectorTerm {
    $matchLabelExpressions(x: any): any;
}

/** A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future. */
export class TopologySelectorTermHelper extends Template implements TopologySelectorTermHelper {
    constructor(obj: any) {
        super(obj)
    }

    _matchLabelExpressions: any;
    get matchLabelExpressions(): any /*Array<TopologySelectorLabelRequirement>*/ {
        return this._matchLabelExpressions
    }
    set matchLabelExpressions(x: any /*Array<TopologySelectorLabelRequirement>*/) {
        this._matchLabelExpressions = this.set(this.matchLabelExpressions, x)
    }
    setMatchLabelExpressions(x: any /*Array<TopologySelectorLabelRequirement>*/) {
        this.matchLabelExpressions = x; return this
    }
}

export interface TopologySpreadConstraintHelper extends TopologySpreadConstraint {
    $labelSelector(x: any): any;
    $maxSkew(x: any): any;
    $topologyKey(x: any): any;
    $whenUnsatisfiable(x: any): any;
}

/** TopologySpreadConstraint specifies how to spread matching pods among the given topology. */
export class TopologySpreadConstraintHelper extends Template implements TopologySpreadConstraintHelper {
    constructor(obj: any) {
        super(obj)
    }

    _labelSelector: any;
    get labelSelector(): any /*LabelSelectorHelper*/ {
        return this._labelSelector
    }
    set labelSelector(x: any /*LabelSelectorHelper*/) {
        this._labelSelector = x
    }
    setLabelSelector(x: any /*LabelSelectorHelper*/) {
        this.labelSelector = x; return this
    }

    _maxSkew: any;
    get maxSkew(): any /*number*/ {
        return this._maxSkew
    }
    set maxSkew(x: any /*number*/) {
        this._maxSkew = x
    }
    setMaxSkew(x: any /*number*/) {
        this.maxSkew = x; return this
    }

    _topologyKey: any;
    get topologyKey(): any /*string*/ {
        return this._topologyKey
    }
    set topologyKey(x: any /*string*/) {
        this._topologyKey = x
    }
    setTopologyKey(x: any /*string*/) {
        this.topologyKey = x; return this
    }

    _whenUnsatisfiable: any;
    get whenUnsatisfiable(): any /*string*/ {
        return this._whenUnsatisfiable
    }
    set whenUnsatisfiable(x: any /*string*/) {
        this._whenUnsatisfiable = x
    }
    setWhenUnsatisfiable(x: any /*string*/) {
        this.whenUnsatisfiable = x; return this
    }
}

export interface TypedLocalObjectReferenceHelper extends TypedLocalObjectReference {
    $apiGroup(x: any): any;
}

/** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
export class TypedLocalObjectReferenceHelper extends Template implements TypedLocalObjectReferenceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _apiGroup: any;
    get apiGroup(): any /*string*/ {
        return this._apiGroup
    }
    set apiGroup(x: any /*string*/) {
        this._apiGroup = x
    }
    setApiGroup(x: any /*string*/) {
        this.apiGroup = x; return this
    }
}

export interface VolumeHelper extends Volume {
    $awsElasticBlockStore(x: any): any;
    $azureDisk(x: any): any;
    $azureFile(x: any): any;
    $cephfs(x: any): any;
    $cinder(x: any): any;
    $configMap(x: any): any;
    $csi(x: any): any;
    $downwardAPI(x: any): any;
    $emptyDir(x: any): any;
    $ephemeral(x: any): any;
    $fc(x: any): any;
    $flexVolume(x: any): any;
    $flocker(x: any): any;
    $gcePersistentDisk(x: any): any;
    $gitRepo(x: any): any;
    $glusterfs(x: any): any;
    $hostPath(x: any): any;
    $iscsi(x: any): any;
    $nfs(x: any): any;
    $persistentVolumeClaim(x: any): any;
    $photonPersistentDisk(x: any): any;
    $portworxVolume(x: any): any;
    $projected(x: any): any;
    $quobyte(x: any): any;
    $rbd(x: any): any;
    $scaleIO(x: any): any;
    $secret(x: any): any;
    $storageos(x: any): any;
    $vsphereVolume(x: any): any;
}

/** Volume represents a named volume in a pod that may be accessed by any container in the pod. */
export class VolumeHelper extends Template implements VolumeHelper {
    constructor(obj: any) {
        super(obj)
    }

    _awsElasticBlockStore: any;
    get awsElasticBlockStore(): any /*AWSElasticBlockStoreVolumeSourceHelper*/ {
        return this._awsElasticBlockStore
    }
    set awsElasticBlockStore(x: any /*AWSElasticBlockStoreVolumeSourceHelper*/) {
        this._awsElasticBlockStore = x
    }
    setAwsElasticBlockStore(x: any /*AWSElasticBlockStoreVolumeSourceHelper*/) {
        this.awsElasticBlockStore = x; return this
    }

    _azureDisk: any;
    get azureDisk(): any /*AzureDiskVolumeSourceHelper*/ {
        return this._azureDisk
    }
    set azureDisk(x: any /*AzureDiskVolumeSourceHelper*/) {
        this._azureDisk = x
    }
    setAzureDisk(x: any /*AzureDiskVolumeSourceHelper*/) {
        this.azureDisk = x; return this
    }

    _azureFile: any;
    get azureFile(): any /*AzureFileVolumeSourceHelper*/ {
        return this._azureFile
    }
    set azureFile(x: any /*AzureFileVolumeSourceHelper*/) {
        this._azureFile = x
    }
    setAzureFile(x: any /*AzureFileVolumeSourceHelper*/) {
        this.azureFile = x; return this
    }

    _cephfs: any;
    get cephfs(): any /*CephFSVolumeSourceHelper*/ {
        return this._cephfs
    }
    set cephfs(x: any /*CephFSVolumeSourceHelper*/) {
        this._cephfs = x
    }
    setCephfs(x: any /*CephFSVolumeSourceHelper*/) {
        this.cephfs = x; return this
    }

    _cinder: any;
    get cinder(): any /*CinderVolumeSourceHelper*/ {
        return this._cinder
    }
    set cinder(x: any /*CinderVolumeSourceHelper*/) {
        this._cinder = x
    }
    setCinder(x: any /*CinderVolumeSourceHelper*/) {
        this.cinder = x; return this
    }

    _configMap: any;
    get configMap(): any /*ConfigMapVolumeSourceHelper*/ {
        return this._configMap
    }
    set configMap(x: any /*ConfigMapVolumeSourceHelper*/) {
        this._configMap = x
    }
    setConfigMap(x: any /*ConfigMapVolumeSourceHelper*/) {
        this.configMap = x; return this
    }

    _csi: any;
    get csi(): any /*CSIVolumeSourceHelper*/ {
        return this._csi
    }
    set csi(x: any /*CSIVolumeSourceHelper*/) {
        this._csi = x
    }
    setCsi(x: any /*CSIVolumeSourceHelper*/) {
        this.csi = x; return this
    }

    _downwardAPI: any;
    get downwardAPI(): any /*DownwardAPIVolumeSourceHelper*/ {
        return this._downwardAPI
    }
    set downwardAPI(x: any /*DownwardAPIVolumeSourceHelper*/) {
        this._downwardAPI = x
    }
    setDownwardAPI(x: any /*DownwardAPIVolumeSourceHelper*/) {
        this.downwardAPI = x; return this
    }

    _emptyDir: any;
    get emptyDir(): any /*EmptyDirVolumeSourceHelper*/ {
        return this._emptyDir
    }
    set emptyDir(x: any /*EmptyDirVolumeSourceHelper*/) {
        this._emptyDir = x
    }
    setEmptyDir(x: any /*EmptyDirVolumeSourceHelper*/) {
        this.emptyDir = x; return this
    }

    _ephemeral: any;
    get ephemeral(): any /*EphemeralVolumeSourceHelper*/ {
        return this._ephemeral
    }
    set ephemeral(x: any /*EphemeralVolumeSourceHelper*/) {
        this._ephemeral = x
    }
    setEphemeral(x: any /*EphemeralVolumeSourceHelper*/) {
        this.ephemeral = x; return this
    }

    _fc: any;
    get fc(): any /*FCVolumeSourceHelper*/ {
        return this._fc
    }
    set fc(x: any /*FCVolumeSourceHelper*/) {
        this._fc = x
    }
    setFc(x: any /*FCVolumeSourceHelper*/) {
        this.fc = x; return this
    }

    _flexVolume: any;
    get flexVolume(): any /*FlexVolumeSourceHelper*/ {
        return this._flexVolume
    }
    set flexVolume(x: any /*FlexVolumeSourceHelper*/) {
        this._flexVolume = x
    }
    setFlexVolume(x: any /*FlexVolumeSourceHelper*/) {
        this.flexVolume = x; return this
    }

    _flocker: any;
    get flocker(): any /*FlockerVolumeSourceHelper*/ {
        return this._flocker
    }
    set flocker(x: any /*FlockerVolumeSourceHelper*/) {
        this._flocker = x
    }
    setFlocker(x: any /*FlockerVolumeSourceHelper*/) {
        this.flocker = x; return this
    }

    _gcePersistentDisk: any;
    get gcePersistentDisk(): any /*GCEPersistentDiskVolumeSourceHelper*/ {
        return this._gcePersistentDisk
    }
    set gcePersistentDisk(x: any /*GCEPersistentDiskVolumeSourceHelper*/) {
        this._gcePersistentDisk = x
    }
    setGcePersistentDisk(x: any /*GCEPersistentDiskVolumeSourceHelper*/) {
        this.gcePersistentDisk = x; return this
    }

    _gitRepo: any;
    get gitRepo(): any /*GitRepoVolumeSourceHelper*/ {
        return this._gitRepo
    }
    set gitRepo(x: any /*GitRepoVolumeSourceHelper*/) {
        this._gitRepo = x
    }
    setGitRepo(x: any /*GitRepoVolumeSourceHelper*/) {
        this.gitRepo = x; return this
    }

    _glusterfs: any;
    get glusterfs(): any /*GlusterfsVolumeSourceHelper*/ {
        return this._glusterfs
    }
    set glusterfs(x: any /*GlusterfsVolumeSourceHelper*/) {
        this._glusterfs = x
    }
    setGlusterfs(x: any /*GlusterfsVolumeSourceHelper*/) {
        this.glusterfs = x; return this
    }

    _hostPath: any;
    get hostPath(): any /*HostPathVolumeSourceHelper*/ {
        return this._hostPath
    }
    set hostPath(x: any /*HostPathVolumeSourceHelper*/) {
        this._hostPath = x
    }
    setHostPath(x: any /*HostPathVolumeSourceHelper*/) {
        this.hostPath = x; return this
    }

    _iscsi: any;
    get iscsi(): any /*ISCSIVolumeSourceHelper*/ {
        return this._iscsi
    }
    set iscsi(x: any /*ISCSIVolumeSourceHelper*/) {
        this._iscsi = x
    }
    setIscsi(x: any /*ISCSIVolumeSourceHelper*/) {
        this.iscsi = x; return this
    }

    _nfs: any;
    get nfs(): any /*NFSVolumeSourceHelper*/ {
        return this._nfs
    }
    set nfs(x: any /*NFSVolumeSourceHelper*/) {
        this._nfs = x
    }
    setNfs(x: any /*NFSVolumeSourceHelper*/) {
        this.nfs = x; return this
    }

    _persistentVolumeClaim: any;
    get persistentVolumeClaim(): any /*PersistentVolumeClaimVolumeSourceHelper*/ {
        return this._persistentVolumeClaim
    }
    set persistentVolumeClaim(x: any /*PersistentVolumeClaimVolumeSourceHelper*/) {
        this._persistentVolumeClaim = x
    }
    setPersistentVolumeClaim(x: any /*PersistentVolumeClaimVolumeSourceHelper*/) {
        this.persistentVolumeClaim = x; return this
    }

    _photonPersistentDisk: any;
    get photonPersistentDisk(): any /*PhotonPersistentDiskVolumeSourceHelper*/ {
        return this._photonPersistentDisk
    }
    set photonPersistentDisk(x: any /*PhotonPersistentDiskVolumeSourceHelper*/) {
        this._photonPersistentDisk = x
    }
    setPhotonPersistentDisk(x: any /*PhotonPersistentDiskVolumeSourceHelper*/) {
        this.photonPersistentDisk = x; return this
    }

    _portworxVolume: any;
    get portworxVolume(): any /*PortworxVolumeSourceHelper*/ {
        return this._portworxVolume
    }
    set portworxVolume(x: any /*PortworxVolumeSourceHelper*/) {
        this._portworxVolume = x
    }
    setPortworxVolume(x: any /*PortworxVolumeSourceHelper*/) {
        this.portworxVolume = x; return this
    }

    _projected: any;
    get projected(): any /*ProjectedVolumeSourceHelper*/ {
        return this._projected
    }
    set projected(x: any /*ProjectedVolumeSourceHelper*/) {
        this._projected = x
    }
    setProjected(x: any /*ProjectedVolumeSourceHelper*/) {
        this.projected = x; return this
    }

    _quobyte: any;
    get quobyte(): any /*QuobyteVolumeSourceHelper*/ {
        return this._quobyte
    }
    set quobyte(x: any /*QuobyteVolumeSourceHelper*/) {
        this._quobyte = x
    }
    setQuobyte(x: any /*QuobyteVolumeSourceHelper*/) {
        this.quobyte = x; return this
    }

    _rbd: any;
    get rbd(): any /*RBDVolumeSourceHelper*/ {
        return this._rbd
    }
    set rbd(x: any /*RBDVolumeSourceHelper*/) {
        this._rbd = x
    }
    setRbd(x: any /*RBDVolumeSourceHelper*/) {
        this.rbd = x; return this
    }

    _scaleIO: any;
    get scaleIO(): any /*ScaleIOVolumeSourceHelper*/ {
        return this._scaleIO
    }
    set scaleIO(x: any /*ScaleIOVolumeSourceHelper*/) {
        this._scaleIO = x
    }
    setScaleIO(x: any /*ScaleIOVolumeSourceHelper*/) {
        this.scaleIO = x; return this
    }

    _secret: any;
    get secret(): any /*SecretVolumeSourceHelper*/ {
        return this._secret
    }
    set secret(x: any /*SecretVolumeSourceHelper*/) {
        this._secret = x
    }
    setSecret(x: any /*SecretVolumeSourceHelper*/) {
        this.secret = x; return this
    }

    _storageos: any;
    get storageos(): any /*StorageOSVolumeSourceHelper*/ {
        return this._storageos
    }
    set storageos(x: any /*StorageOSVolumeSourceHelper*/) {
        this._storageos = x
    }
    setStorageos(x: any /*StorageOSVolumeSourceHelper*/) {
        this.storageos = x; return this
    }

    _vsphereVolume: any;
    get vsphereVolume(): any /*VsphereVirtualDiskVolumeSourceHelper*/ {
        return this._vsphereVolume
    }
    set vsphereVolume(x: any /*VsphereVirtualDiskVolumeSourceHelper*/) {
        this._vsphereVolume = x
    }
    setVsphereVolume(x: any /*VsphereVirtualDiskVolumeSourceHelper*/) {
        this.vsphereVolume = x; return this
    }
}

export interface VolumeDeviceHelper extends VolumeDevice {
    $devicePath(x: any): any;
}

/** volumeDevice describes a mapping of a raw block device within a container. */
export class VolumeDeviceHelper extends Template implements VolumeDeviceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _devicePath: any;
    get devicePath(): any /*string*/ {
        return this._devicePath
    }
    set devicePath(x: any /*string*/) {
        this._devicePath = x
    }
    setDevicePath(x: any /*string*/) {
        this.devicePath = x; return this
    }
}

export interface VolumeMountHelper extends VolumeMount {
    $mountPath(x: any): any;
    $mountPropagation(x: any): any;
    $readOnly(x: any): any;
    $subPath(x: any): any;
    $subPathExpr(x: any): any;
}

/** VolumeMount describes a mounting of a Volume within a container. */
export class VolumeMountHelper extends Template implements VolumeMountHelper {
    constructor(obj: any) {
        super(obj)
    }

    _mountPath: any;
    get mountPath(): any /*string*/ {
        return this._mountPath
    }
    set mountPath(x: any /*string*/) {
        this._mountPath = x
    }
    setMountPath(x: any /*string*/) {
        this.mountPath = x; return this
    }

    _mountPropagation: any;
    get mountPropagation(): any /*string*/ {
        return this._mountPropagation
    }
    set mountPropagation(x: any /*string*/) {
        this._mountPropagation = x
    }
    setMountPropagation(x: any /*string*/) {
        this.mountPropagation = x; return this
    }

    _readOnly: any;
    get readOnly(): any /*boolean*/ {
        return this._readOnly
    }
    set readOnly(x: any /*boolean*/) {
        this._readOnly = x
    }
    setReadOnly(x: any /*boolean*/) {
        this.readOnly = x; return this
    }

    _subPath: any;
    get subPath(): any /*string*/ {
        return this._subPath
    }
    set subPath(x: any /*string*/) {
        this._subPath = x
    }
    setSubPath(x: any /*string*/) {
        this.subPath = x; return this
    }

    _subPathExpr: any;
    get subPathExpr(): any /*string*/ {
        return this._subPathExpr
    }
    set subPathExpr(x: any /*string*/) {
        this._subPathExpr = x
    }
    setSubPathExpr(x: any /*string*/) {
        this.subPathExpr = x; return this
    }
}

export interface VolumeNodeAffinityHelper extends VolumeNodeAffinity {
    $required(x: any): any;
}

/** VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from. */
export class VolumeNodeAffinityHelper extends Template implements VolumeNodeAffinityHelper {
    constructor(obj: any) {
        super(obj)
    }

    _required: any;
    get required(): any /*NodeSelectorHelper*/ {
        return this._required
    }
    set required(x: any /*NodeSelectorHelper*/) {
        this._required = x
    }
    setRequired(x: any /*NodeSelectorHelper*/) {
        this.required = x; return this
    }
}

export interface VolumeProjectionHelper extends VolumeProjection {
    $configMap(x: any): any;
    $downwardAPI(x: any): any;
    $secret(x: any): any;
    $serviceAccountToken(x: any): any;
}

/** Projection that may be projected along with other supported volume types */
export class VolumeProjectionHelper extends Template implements VolumeProjectionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _configMap: any;
    get configMap(): any /*ConfigMapProjectionHelper*/ {
        return this._configMap
    }
    set configMap(x: any /*ConfigMapProjectionHelper*/) {
        this._configMap = x
    }
    setConfigMap(x: any /*ConfigMapProjectionHelper*/) {
        this.configMap = x; return this
    }

    _downwardAPI: any;
    get downwardAPI(): any /*DownwardAPIProjectionHelper*/ {
        return this._downwardAPI
    }
    set downwardAPI(x: any /*DownwardAPIProjectionHelper*/) {
        this._downwardAPI = x
    }
    setDownwardAPI(x: any /*DownwardAPIProjectionHelper*/) {
        this.downwardAPI = x; return this
    }

    _secret: any;
    get secret(): any /*SecretProjectionHelper*/ {
        return this._secret
    }
    set secret(x: any /*SecretProjectionHelper*/) {
        this._secret = x
    }
    setSecret(x: any /*SecretProjectionHelper*/) {
        this.secret = x; return this
    }

    _serviceAccountToken: any;
    get serviceAccountToken(): any /*ServiceAccountTokenProjectionHelper*/ {
        return this._serviceAccountToken
    }
    set serviceAccountToken(x: any /*ServiceAccountTokenProjectionHelper*/) {
        this._serviceAccountToken = x
    }
    setServiceAccountToken(x: any /*ServiceAccountTokenProjectionHelper*/) {
        this.serviceAccountToken = x; return this
    }
}

export interface VsphereVirtualDiskVolumeSourceHelper extends VsphereVirtualDiskVolumeSource {
    $fsType(x: any): any;
    $storagePolicyID(x: any): any;
    $storagePolicyName(x: any): any;
    $volumePath(x: any): any;
}

/** Represents a vSphere volume resource. */
export class VsphereVirtualDiskVolumeSourceHelper extends Template implements VsphereVirtualDiskVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: any;
    get fsType(): any /*string*/ {
        return this._fsType
    }
    set fsType(x: any /*string*/) {
        this._fsType = x
    }
    setFsType(x: any /*string*/) {
        this.fsType = x; return this
    }

    _storagePolicyID: any;
    get storagePolicyID(): any /*string*/ {
        return this._storagePolicyID
    }
    set storagePolicyID(x: any /*string*/) {
        this._storagePolicyID = x
    }
    setStoragePolicyID(x: any /*string*/) {
        this.storagePolicyID = x; return this
    }

    _storagePolicyName: any;
    get storagePolicyName(): any /*string*/ {
        return this._storagePolicyName
    }
    set storagePolicyName(x: any /*string*/) {
        this._storagePolicyName = x
    }
    setStoragePolicyName(x: any /*string*/) {
        this.storagePolicyName = x; return this
    }

    _volumePath: any;
    get volumePath(): any /*string*/ {
        return this._volumePath
    }
    set volumePath(x: any /*string*/) {
        this._volumePath = x
    }
    setVolumePath(x: any /*string*/) {
        this.volumePath = x; return this
    }
}

export interface WeightedPodAffinityTermHelper extends WeightedPodAffinityTerm {
    $podAffinityTerm(x: any): any;
    $weight(x: any): any;
}

/** The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s) */
export class WeightedPodAffinityTermHelper extends Template implements WeightedPodAffinityTermHelper {
    constructor(obj: any) {
        super(obj)
    }

    _podAffinityTerm: any;
    get podAffinityTerm(): any /*PodAffinityTermHelper*/ {
        return this._podAffinityTerm
    }
    set podAffinityTerm(x: any /*PodAffinityTermHelper*/) {
        this._podAffinityTerm = x
    }
    setPodAffinityTerm(x: any /*PodAffinityTermHelper*/) {
        this.podAffinityTerm = x; return this
    }

    _weight: any;
    get weight(): any /*number*/ {
        return this._weight
    }
    set weight(x: any /*number*/) {
        this._weight = x
    }
    setWeight(x: any /*number*/) {
        this.weight = x; return this
    }
}

export interface WindowsSecurityContextOptionsHelper extends WindowsSecurityContextOptions {
    $gmsaCredentialSpec(x: any): any;
    $gmsaCredentialSpecName(x: any): any;
    $runAsUserName(x: any): any;
}

/** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
export class WindowsSecurityContextOptionsHelper extends Template implements WindowsSecurityContextOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _gmsaCredentialSpec: any;
    get gmsaCredentialSpec(): any /*string*/ {
        return this._gmsaCredentialSpec
    }
    set gmsaCredentialSpec(x: any /*string*/) {
        this._gmsaCredentialSpec = x
    }
    setGmsaCredentialSpec(x: any /*string*/) {
        this.gmsaCredentialSpec = x; return this
    }

    _gmsaCredentialSpecName: any;
    get gmsaCredentialSpecName(): any /*string*/ {
        return this._gmsaCredentialSpecName
    }
    set gmsaCredentialSpecName(x: any /*string*/) {
        this._gmsaCredentialSpecName = x
    }
    setGmsaCredentialSpecName(x: any /*string*/) {
        this.gmsaCredentialSpecName = x; return this
    }

    _runAsUserName: any;
    get runAsUserName(): any /*string*/ {
        return this._runAsUserName
    }
    set runAsUserName(x: any /*string*/) {
        this._runAsUserName = x
    }
    setRunAsUserName(x: any /*string*/) {
        this.runAsUserName = x; return this
    }
}
