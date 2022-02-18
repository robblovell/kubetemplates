import { ResourceTemplate, Template } from "../resourceTemplate";
import { AWSElasticBlockStoreVolumeSource, Affinity, AttachedVolume, AzureDiskVolumeSource, AzureFilePersistentVolumeSource, AzureFileVolumeSource, Binding, CSIPersistentVolumeSource, CSIVolumeSource, Capabilities, CephFSPersistentVolumeSource, CephFSVolumeSource, CinderPersistentVolumeSource, CinderVolumeSource, ClientIPConfig, ComponentCondition, ComponentStatus, ComponentStatusList, ConfigMap, ConfigMapEnvSource, ConfigMapKeySelector, ConfigMapList, ConfigMapNodeConfigSource, ConfigMapProjection, ConfigMapVolumeSource, Container, ContainerImage, ContainerPort, ContainerState, ContainerStateRunning, ContainerStateTerminated, ContainerStateWaiting, ContainerStatus, DaemonEndpoint, DownwardAPIProjection, DownwardAPIVolumeFile, DownwardAPIVolumeSource, EmptyDirVolumeSource, EndpointAddress, EndpointPort, EndpointSubset, Endpoints, EndpointsList, EnvFromSource, EnvVar, EnvVarSource, EphemeralContainer, EphemeralVolumeSource, Event, EventList, EventSeries, EventSource, ExecAction, FCVolumeSource, FlexPersistentVolumeSource, FlexVolumeSource, FlockerVolumeSource, GCEPersistentDiskVolumeSource, GRPCAction, GitRepoVolumeSource, GlusterfsPersistentVolumeSource, GlusterfsVolumeSource, HTTPGetAction, HTTPHeader, HostAlias, HostPathVolumeSource, ISCSIPersistentVolumeSource, ISCSIVolumeSource, KeyToPath, Lifecycle, LifecycleHandler, LimitRange, LimitRangeItem, LimitRangeList, LimitRangeSpec, LoadBalancerIngress, LoadBalancerStatus, LocalObjectReference, LocalVolumeSource, NFSVolumeSource, Namespace, NamespaceCondition, NamespaceList, NamespaceSpec, NamespaceStatus, Node, NodeAddress, NodeAffinity, NodeCondition, NodeConfigSource, NodeConfigStatus, NodeDaemonEndpoints, NodeList, NodeSelector, NodeSelectorRequirement, NodeSelectorTerm, NodeSpec, NodeStatus, NodeSystemInfo, ObjectFieldSelector, ObjectReference, PersistentVolume, PersistentVolumeClaim, PersistentVolumeClaimCondition, PersistentVolumeClaimList, PersistentVolumeClaimSpec, PersistentVolumeClaimStatus, PersistentVolumeClaimTemplate, PersistentVolumeClaimVolumeSource, PersistentVolumeList, PersistentVolumeSpec, PersistentVolumeStatus, PhotonPersistentDiskVolumeSource, Pod, PodAffinity, PodAffinityTerm, PodAntiAffinity, PodCondition, PodDNSConfig, PodDNSConfigOption, PodIP, PodList, PodOS, PodReadinessGate, PodSecurityContext, PodSpec, PodStatus, PodTemplate, PodTemplateList, PodTemplateSpec, PortStatus, PortworxVolumeSource, PreferredSchedulingTerm, Probe, ProjectedVolumeSource, QuobyteVolumeSource, RBDPersistentVolumeSource, RBDVolumeSource, ReplicationController, ReplicationControllerCondition, ReplicationControllerList, ReplicationControllerSpec, ReplicationControllerStatus, ResourceFieldSelector, ResourceQuota, ResourceQuotaList, ResourceQuotaSpec, ResourceQuotaStatus, ResourceRequirements, SELinuxOptions, ScaleIOPersistentVolumeSource, ScaleIOVolumeSource, ScopeSelector, ScopedResourceSelectorRequirement, SeccompProfile, Secret, SecretEnvSource, SecretKeySelector, SecretList, SecretProjection, SecretReference, SecretVolumeSource, SecurityContext, Service, ServiceAccount, ServiceAccountList, ServiceAccountTokenProjection, ServiceList, ServicePort, ServiceSpec, ServiceStatus, SessionAffinityConfig, StorageOSPersistentVolumeSource, StorageOSVolumeSource, Sysctl, TCPSocketAction, Taint, Toleration, TopologySelectorLabelRequirement, TopologySelectorTerm, TopologySpreadConstraint, TypedLocalObjectReference, Volume, VolumeDevice, VolumeMount, VolumeNodeAffinity, VolumeProjection, VsphereVirtualDiskVolumeSource, WeightedPodAffinityTerm, WindowsSecurityContextOptions } from "./v1";
import { Condition, LabelSelector, ListMeta, MicroTime, ObjectMeta, Time } from "../meta/v1";
import { LabelSelectorHelper, ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";
import { Quantity } from "../api/resource";

export interface AWSElasticBlockStoreVolumeSourceHelper extends AWSElasticBlockStoreVolumeSource {
    $fsType(x: string): AWSElasticBlockStoreVolumeSourceHelper;
    $partition(x: number): AWSElasticBlockStoreVolumeSourceHelper;
    $readOnly(x: boolean): AWSElasticBlockStoreVolumeSourceHelper;
    $volumeID(x: string): AWSElasticBlockStoreVolumeSourceHelper;
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

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _partition: number;
    get partition(): number {
        return this._partition
    }
    set partition(x: number) {
        this._partition = x
    }
    $partition(x: number) {
        this.partition = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _volumeID: string;
    get volumeID(): string {
        return this._volumeID
    }
    set volumeID(x: string) {
        this._volumeID = x
    }
    $volumeID(x: string) {
        this.volumeID = x; return this
    }
}

export interface AffinityHelper extends Affinity {
    $nodeAffinity(x: NodeAffinityHelper): AffinityHelper;
    $podAffinity(x: PodAffinityHelper): AffinityHelper;
    $podAntiAffinity(x: PodAntiAffinityHelper): AffinityHelper;
}

/** Affinity is a group of affinity scheduling rules. */
export class AffinityHelper extends Template implements AffinityHelper {
    constructor(obj: any) {
        super(obj)
    }

    _nodeAffinity: NodeAffinityHelper;
    get nodeAffinity(): NodeAffinityHelper {
        return this._nodeAffinity
    }
    set nodeAffinity(x: NodeAffinityHelper) {
        this._nodeAffinity = x
    }
    $nodeAffinity(x: NodeAffinityHelper) {
        this.nodeAffinity = x; return this
    }

    _podAffinity: PodAffinityHelper;
    get podAffinity(): PodAffinityHelper {
        return this._podAffinity
    }
    set podAffinity(x: PodAffinityHelper) {
        this._podAffinity = x
    }
    $podAffinity(x: PodAffinityHelper) {
        this.podAffinity = x; return this
    }

    _podAntiAffinity: PodAntiAffinityHelper;
    get podAntiAffinity(): PodAntiAffinityHelper {
        return this._podAntiAffinity
    }
    set podAntiAffinity(x: PodAntiAffinityHelper) {
        this._podAntiAffinity = x
    }
    $podAntiAffinity(x: PodAntiAffinityHelper) {
        this.podAntiAffinity = x; return this
    }
}

export interface AttachedVolumeHelper extends AttachedVolume {
    $devicePath(x: string): AttachedVolumeHelper;
}

/** AttachedVolume describes a volume attached to a node */
export class AttachedVolumeHelper extends Template implements AttachedVolumeHelper {
    constructor(obj: any) {
        super(obj)
    }

    _devicePath: string;
    get devicePath(): string {
        return this._devicePath
    }
    set devicePath(x: string) {
        this._devicePath = x
    }
    $devicePath(x: string) {
        this.devicePath = x; return this
    }
}

export interface AzureDiskVolumeSourceHelper extends AzureDiskVolumeSource {
    $cachingMode(x: string): AzureDiskVolumeSourceHelper;
    $diskName(x: string): AzureDiskVolumeSourceHelper;
    $diskURI(x: string): AzureDiskVolumeSourceHelper;
    $fsType(x: string): AzureDiskVolumeSourceHelper;
    $readOnly(x: boolean): AzureDiskVolumeSourceHelper;
}

/** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
export class AzureDiskVolumeSourceHelper extends Template implements AzureDiskVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _cachingMode: string;
    get cachingMode(): string {
        return this._cachingMode
    }
    set cachingMode(x: string) {
        this._cachingMode = x
    }
    $cachingMode(x: string) {
        this.cachingMode = x; return this
    }

    _diskName: string;
    get diskName(): string {
        return this._diskName
    }
    set diskName(x: string) {
        this._diskName = x
    }
    $diskName(x: string) {
        this.diskName = x; return this
    }

    _diskURI: string;
    get diskURI(): string {
        return this._diskURI
    }
    set diskURI(x: string) {
        this._diskURI = x
    }
    $diskURI(x: string) {
        this.diskURI = x; return this
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }
}

export interface AzureFilePersistentVolumeSourceHelper extends AzureFilePersistentVolumeSource {
    $readOnly(x: boolean): AzureFilePersistentVolumeSourceHelper;
    $secretName(x: string): AzureFilePersistentVolumeSourceHelper;
    $secretNamespace(x: string): AzureFilePersistentVolumeSourceHelper;
    $shareName(x: string): AzureFilePersistentVolumeSourceHelper;
}

/** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export class AzureFilePersistentVolumeSourceHelper extends Template implements AzureFilePersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _secretName: string;
    get secretName(): string {
        return this._secretName
    }
    set secretName(x: string) {
        this._secretName = x
    }
    $secretName(x: string) {
        this.secretName = x; return this
    }

    _secretNamespace: string;
    get secretNamespace(): string {
        return this._secretNamespace
    }
    set secretNamespace(x: string) {
        this._secretNamespace = x
    }
    $secretNamespace(x: string) {
        this.secretNamespace = x; return this
    }

    _shareName: string;
    get shareName(): string {
        return this._shareName
    }
    set shareName(x: string) {
        this._shareName = x
    }
    $shareName(x: string) {
        this.shareName = x; return this
    }
}

export interface AzureFileVolumeSourceHelper extends AzureFileVolumeSource {
    $readOnly(x: boolean): AzureFileVolumeSourceHelper;
    $secretName(x: string): AzureFileVolumeSourceHelper;
    $shareName(x: string): AzureFileVolumeSourceHelper;
}

/** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export class AzureFileVolumeSourceHelper extends Template implements AzureFileVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _secretName: string;
    get secretName(): string {
        return this._secretName
    }
    set secretName(x: string) {
        this._secretName = x
    }
    $secretName(x: string) {
        this.secretName = x; return this
    }

    _shareName: string;
    get shareName(): string {
        return this._shareName
    }
    set shareName(x: string) {
        this._shareName = x
    }
    $shareName(x: string) {
        this.shareName = x; return this
    }
}

export interface BindingHelper extends Binding {
    $metadata(x: ObjectMetaHelper): BindingHelper;
    $target(x: ObjectReferenceHelper): BindingHelper;
}

/** Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead. */
export class BindingHelper extends ResourceTemplate implements BindingHelper {
    static kind = 'Binding';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, BindingHelper.kind, BindingHelper.apiVersion)
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

    _target: ObjectReferenceHelper;
    get target(): ObjectReferenceHelper {
        return this._target
    }
    set target(x: ObjectReferenceHelper) {
        this._target = x
    }
    $target(x: ObjectReferenceHelper) {
        this.target = x; return this
    }
}

export interface CSIPersistentVolumeSourceHelper extends CSIPersistentVolumeSource {
    $controllerExpandSecretRef(x: SecretReferenceHelper): CSIPersistentVolumeSourceHelper;
    $controllerPublishSecretRef(x: SecretReferenceHelper): CSIPersistentVolumeSourceHelper;
    $driver(x: string): CSIPersistentVolumeSourceHelper;
    $fsType(x: string): CSIPersistentVolumeSourceHelper;
    $nodePublishSecretRef(x: SecretReferenceHelper): CSIPersistentVolumeSourceHelper;
    $nodeStageSecretRef(x: SecretReferenceHelper): CSIPersistentVolumeSourceHelper;
    $readOnly(x: boolean): CSIPersistentVolumeSourceHelper;
    $volumeAttributes(x: any): CSIPersistentVolumeSourceHelper;
    $volumeHandle(x: string): CSIPersistentVolumeSourceHelper;
}

/** Represents storage that is managed by an external CSI volume driver (Beta feature) */
export class CSIPersistentVolumeSourceHelper extends Template implements CSIPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _controllerExpandSecretRef: SecretReferenceHelper;
    get controllerExpandSecretRef(): SecretReferenceHelper {
        return this._controllerExpandSecretRef
    }
    set controllerExpandSecretRef(x: SecretReferenceHelper) {
        this._controllerExpandSecretRef = x
    }
    $controllerExpandSecretRef(x: SecretReferenceHelper) {
        this.controllerExpandSecretRef = x; return this
    }

    _controllerPublishSecretRef: SecretReferenceHelper;
    get controllerPublishSecretRef(): SecretReferenceHelper {
        return this._controllerPublishSecretRef
    }
    set controllerPublishSecretRef(x: SecretReferenceHelper) {
        this._controllerPublishSecretRef = x
    }
    $controllerPublishSecretRef(x: SecretReferenceHelper) {
        this.controllerPublishSecretRef = x; return this
    }

    _driver: string;
    get driver(): string {
        return this._driver
    }
    set driver(x: string) {
        this._driver = x
    }
    $driver(x: string) {
        this.driver = x; return this
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _nodePublishSecretRef: SecretReferenceHelper;
    get nodePublishSecretRef(): SecretReferenceHelper {
        return this._nodePublishSecretRef
    }
    set nodePublishSecretRef(x: SecretReferenceHelper) {
        this._nodePublishSecretRef = x
    }
    $nodePublishSecretRef(x: SecretReferenceHelper) {
        this.nodePublishSecretRef = x; return this
    }

    _nodeStageSecretRef: SecretReferenceHelper;
    get nodeStageSecretRef(): SecretReferenceHelper {
        return this._nodeStageSecretRef
    }
    set nodeStageSecretRef(x: SecretReferenceHelper) {
        this._nodeStageSecretRef = x
    }
    $nodeStageSecretRef(x: SecretReferenceHelper) {
        this.nodeStageSecretRef = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _volumeAttributes: any;
    get volumeAttributes(): any {
        return this._volumeAttributes
    }
    set volumeAttributes(x: any) {
        this._volumeAttributes = this.set(this.volumeAttributes, x)
    }
    $volumeAttributes(x: any) {
        this.volumeAttributes = x; return this
    }

    _volumeHandle: string;
    get volumeHandle(): string {
        return this._volumeHandle
    }
    set volumeHandle(x: string) {
        this._volumeHandle = x
    }
    $volumeHandle(x: string) {
        this.volumeHandle = x; return this
    }
}

export interface CSIVolumeSourceHelper extends CSIVolumeSource {
    $driver(x: string): CSIVolumeSourceHelper;
    $fsType(x: string): CSIVolumeSourceHelper;
    $nodePublishSecretRef(x: LocalObjectReferenceHelper): CSIVolumeSourceHelper;
    $readOnly(x: boolean): CSIVolumeSourceHelper;
    $volumeAttributes(x: any): CSIVolumeSourceHelper;
}

/** Represents a source location of a volume to mount, managed by an external CSI driver */
export class CSIVolumeSourceHelper extends Template implements CSIVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _driver: string;
    get driver(): string {
        return this._driver
    }
    set driver(x: string) {
        this._driver = x
    }
    $driver(x: string) {
        this.driver = x; return this
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _nodePublishSecretRef: LocalObjectReferenceHelper;
    get nodePublishSecretRef(): LocalObjectReferenceHelper {
        return this._nodePublishSecretRef
    }
    set nodePublishSecretRef(x: LocalObjectReferenceHelper) {
        this._nodePublishSecretRef = x
    }
    $nodePublishSecretRef(x: LocalObjectReferenceHelper) {
        this.nodePublishSecretRef = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _volumeAttributes: any;
    get volumeAttributes(): any {
        return this._volumeAttributes
    }
    set volumeAttributes(x: any) {
        this._volumeAttributes = this.set(this.volumeAttributes, x)
    }
    $volumeAttributes(x: any) {
        this.volumeAttributes = x; return this
    }
}

export interface CapabilitiesHelper extends Capabilities {
    $add(x: Array<string>): CapabilitiesHelper;
    $drop(x: Array<string>): CapabilitiesHelper;
}

/** Adds and removes POSIX capabilities from running containers. */
export class CapabilitiesHelper extends Template implements CapabilitiesHelper {
    constructor(obj: any) {
        super(obj)
    }

    _add: Array<string>;
    get add(): Array<string> {
        return this._add
    }
    set add(x: Array<string>) {
        this._add = this.set(this.add, x)
    }
    $add(x: Array<string>) {
        this.add = x; return this
    }

    _drop: Array<string>;
    get drop(): Array<string> {
        return this._drop
    }
    set drop(x: Array<string>) {
        this._drop = this.set(this.drop, x)
    }
    $drop(x: Array<string>) {
        this.drop = x; return this
    }
}

export interface CephFSPersistentVolumeSourceHelper extends CephFSPersistentVolumeSource {
    $monitors(x: Array<string>): CephFSPersistentVolumeSourceHelper;
    $path(x: string): CephFSPersistentVolumeSourceHelper;
    $readOnly(x: boolean): CephFSPersistentVolumeSourceHelper;
    $secretFile(x: string): CephFSPersistentVolumeSourceHelper;
    $secretRef(x: SecretReferenceHelper): CephFSPersistentVolumeSourceHelper;
    $user(x: string): CephFSPersistentVolumeSourceHelper;
}

/** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export class CephFSPersistentVolumeSourceHelper extends Template implements CephFSPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _monitors: Array<string>;
    get monitors(): Array<string> {
        return this._monitors
    }
    set monitors(x: Array<string>) {
        this._monitors = this.set(this.monitors, x)
    }
    $monitors(x: Array<string>) {
        this.monitors = x; return this
    }

    _path: string;
    get path(): string {
        return this._path
    }
    set path(x: string) {
        this._path = x
    }
    $path(x: string) {
        this.path = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _secretFile: string;
    get secretFile(): string {
        return this._secretFile
    }
    set secretFile(x: string) {
        this._secretFile = x
    }
    $secretFile(x: string) {
        this.secretFile = x; return this
    }

    _secretRef: SecretReferenceHelper;
    get secretRef(): SecretReferenceHelper {
        return this._secretRef
    }
    set secretRef(x: SecretReferenceHelper) {
        this._secretRef = x
    }
    $secretRef(x: SecretReferenceHelper) {
        this.secretRef = x; return this
    }

    _user: string;
    get user(): string {
        return this._user
    }
    set user(x: string) {
        this._user = x
    }
    $user(x: string) {
        this.user = x; return this
    }
}

export interface CephFSVolumeSourceHelper extends CephFSVolumeSource {
    $monitors(x: Array<string>): CephFSVolumeSourceHelper;
    $path(x: string): CephFSVolumeSourceHelper;
    $readOnly(x: boolean): CephFSVolumeSourceHelper;
    $secretFile(x: string): CephFSVolumeSourceHelper;
    $secretRef(x: LocalObjectReferenceHelper): CephFSVolumeSourceHelper;
    $user(x: string): CephFSVolumeSourceHelper;
}

/** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export class CephFSVolumeSourceHelper extends Template implements CephFSVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _monitors: Array<string>;
    get monitors(): Array<string> {
        return this._monitors
    }
    set monitors(x: Array<string>) {
        this._monitors = this.set(this.monitors, x)
    }
    $monitors(x: Array<string>) {
        this.monitors = x; return this
    }

    _path: string;
    get path(): string {
        return this._path
    }
    set path(x: string) {
        this._path = x
    }
    $path(x: string) {
        this.path = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _secretFile: string;
    get secretFile(): string {
        return this._secretFile
    }
    set secretFile(x: string) {
        this._secretFile = x
    }
    $secretFile(x: string) {
        this.secretFile = x; return this
    }

    _secretRef: LocalObjectReferenceHelper;
    get secretRef(): LocalObjectReferenceHelper {
        return this._secretRef
    }
    set secretRef(x: LocalObjectReferenceHelper) {
        this._secretRef = x
    }
    $secretRef(x: LocalObjectReferenceHelper) {
        this.secretRef = x; return this
    }

    _user: string;
    get user(): string {
        return this._user
    }
    set user(x: string) {
        this._user = x
    }
    $user(x: string) {
        this.user = x; return this
    }
}

export interface CinderPersistentVolumeSourceHelper extends CinderPersistentVolumeSource {
    $fsType(x: string): CinderPersistentVolumeSourceHelper;
    $readOnly(x: boolean): CinderPersistentVolumeSourceHelper;
    $secretRef(x: SecretReferenceHelper): CinderPersistentVolumeSourceHelper;
    $volumeID(x: string): CinderPersistentVolumeSourceHelper;
}

/** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export class CinderPersistentVolumeSourceHelper extends Template implements CinderPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _secretRef: SecretReferenceHelper;
    get secretRef(): SecretReferenceHelper {
        return this._secretRef
    }
    set secretRef(x: SecretReferenceHelper) {
        this._secretRef = x
    }
    $secretRef(x: SecretReferenceHelper) {
        this.secretRef = x; return this
    }

    _volumeID: string;
    get volumeID(): string {
        return this._volumeID
    }
    set volumeID(x: string) {
        this._volumeID = x
    }
    $volumeID(x: string) {
        this.volumeID = x; return this
    }
}

export interface CinderVolumeSourceHelper extends CinderVolumeSource {
    $fsType(x: string): CinderVolumeSourceHelper;
    $readOnly(x: boolean): CinderVolumeSourceHelper;
    $secretRef(x: LocalObjectReferenceHelper): CinderVolumeSourceHelper;
    $volumeID(x: string): CinderVolumeSourceHelper;
}

/** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export class CinderVolumeSourceHelper extends Template implements CinderVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _secretRef: LocalObjectReferenceHelper;
    get secretRef(): LocalObjectReferenceHelper {
        return this._secretRef
    }
    set secretRef(x: LocalObjectReferenceHelper) {
        this._secretRef = x
    }
    $secretRef(x: LocalObjectReferenceHelper) {
        this.secretRef = x; return this
    }

    _volumeID: string;
    get volumeID(): string {
        return this._volumeID
    }
    set volumeID(x: string) {
        this._volumeID = x
    }
    $volumeID(x: string) {
        this.volumeID = x; return this
    }
}

export interface ClientIPConfigHelper extends ClientIPConfig {
    $timeoutSeconds(x: number): ClientIPConfigHelper;
}

/** ClientIPConfig represents the configurations of Client IP based session affinity. */
export class ClientIPConfigHelper extends Template implements ClientIPConfigHelper {
    constructor(obj: any) {
        super(obj)
    }

    _timeoutSeconds: number;
    get timeoutSeconds(): number {
        return this._timeoutSeconds
    }
    set timeoutSeconds(x: number) {
        this._timeoutSeconds = x
    }
    $timeoutSeconds(x: number) {
        this.timeoutSeconds = x; return this
    }
}

export interface ComponentConditionHelper extends ComponentCondition {
    $error(x: string): ComponentConditionHelper;
    $message(x: string): ComponentConditionHelper;
    $status(x: string): ComponentConditionHelper;
    $type(x: string): ComponentConditionHelper;
}

/** Information about the condition of a component. */
export class ComponentConditionHelper extends Template implements ComponentConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _error: string;
    get error(): string {
        return this._error
    }
    set error(x: string) {
        this._error = x
    }
    $error(x: string) {
        this.error = x; return this
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

    _status: string;
    get status(): string {
        return this._status
    }
    set status(x: string) {
        this._status = x
    }
    $status(x: string) {
        this.status = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface ComponentStatusHelper extends ComponentStatus {
    $conditions(x: Array<ComponentCondition>): ComponentStatusHelper;
    $metadata(x: ObjectMetaHelper): ComponentStatusHelper;
}

/** ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+ */
export class ComponentStatusHelper extends ResourceTemplate implements ComponentStatusHelper {
    static kind = 'ComponentStatus';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ComponentStatusHelper.kind, ComponentStatusHelper.apiVersion)
    }

    _conditions: Array<ComponentCondition>;
    get conditions(): Array<ComponentCondition> {
        return this._conditions
    }
    set conditions(x: Array<ComponentCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $conditions(x: Array<ComponentCondition>) {
        this.conditions = x; return this
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
}

export interface ComponentStatusListHelper extends ComponentStatusList {
    $items(x: Array<ComponentStatus>): ComponentStatusListHelper;
    $metadata(x: ListMetaHelper): ComponentStatusListHelper;
}

/** Status of all the conditions for the component as a list of ComponentStatus objects. Deprecated: This API is deprecated in v1.19+ */
export class ComponentStatusListHelper extends ResourceTemplate implements ComponentStatusListHelper {
    static kind = 'ComponentStatusList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ComponentStatusListHelper.kind, ComponentStatusListHelper.apiVersion)
    }

    _items: Array<ComponentStatus>;
    get items(): Array<ComponentStatus> {
        return this._items
    }
    set items(x: Array<ComponentStatus>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<ComponentStatus>) {
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

export interface ConfigMapHelper extends ConfigMap {
    $binaryData(x: any): ConfigMapHelper;
    $data(x: any): ConfigMapHelper;
    $immutable(x: boolean): ConfigMapHelper;
    $metadata(x: ObjectMetaHelper): ConfigMapHelper;
}

/** ConfigMap holds configuration data for pods to consume. */
export class ConfigMapHelper extends ResourceTemplate implements ConfigMapHelper {
    static kind = 'ConfigMap';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ConfigMapHelper.kind, ConfigMapHelper.apiVersion)
    }

    _binaryData: any;
    get binaryData(): any {
        return this._binaryData
    }
    set binaryData(x: any) {
        this._binaryData = this.set(this.binaryData, x)
    }
    $binaryData(x: any) {
        this.binaryData = x; return this
    }

    _data: any;
    get data(): any {
        return this._data
    }
    set data(x: any) {
        this._data = this.set(this.data, x)
    }
    $data(x: any) {
        this.data = x; return this
    }

    _immutable: boolean;
    get immutable(): boolean {
        return this._immutable
    }
    set immutable(x: boolean) {
        this._immutable = x
    }
    $immutable(x: boolean) {
        this.immutable = x; return this
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
}

export interface ConfigMapEnvSourceHelper extends ConfigMapEnvSource {
    $optional(x: boolean): ConfigMapEnvSourceHelper;
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

    _optional: boolean;
    get optional(): boolean {
        return this._optional
    }
    set optional(x: boolean) {
        this._optional = x
    }
    $optional(x: boolean) {
        this.optional = x; return this
    }
}

export interface ConfigMapKeySelectorHelper extends ConfigMapKeySelector {
    $key(x: string): ConfigMapKeySelectorHelper;
    $optional(x: boolean): ConfigMapKeySelectorHelper;
}

/** Selects a key from a ConfigMap. */
export class ConfigMapKeySelectorHelper extends Template implements ConfigMapKeySelectorHelper {
    constructor(obj: any) {
        super(obj)
    }

    _key: string;
    get key(): string {
        return this._key
    }
    set key(x: string) {
        this._key = x
    }
    $key(x: string) {
        this.key = x; return this
    }

    _optional: boolean;
    get optional(): boolean {
        return this._optional
    }
    set optional(x: boolean) {
        this._optional = x
    }
    $optional(x: boolean) {
        this.optional = x; return this
    }
}

export interface ConfigMapListHelper extends ConfigMapList {
    $items(x: Array<ConfigMap>): ConfigMapListHelper;
    $metadata(x: ListMetaHelper): ConfigMapListHelper;
}

/** ConfigMapList is a resource containing a list of ConfigMap objects. */
export class ConfigMapListHelper extends ResourceTemplate implements ConfigMapListHelper {
    static kind = 'ConfigMapList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ConfigMapListHelper.kind, ConfigMapListHelper.apiVersion)
    }

    _items: Array<ConfigMap>;
    get items(): Array<ConfigMap> {
        return this._items
    }
    set items(x: Array<ConfigMap>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<ConfigMap>) {
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

export interface ConfigMapNodeConfigSourceHelper extends ConfigMapNodeConfigSource {
    $kubeletConfigKey(x: string): ConfigMapNodeConfigSourceHelper;
    $resourceVersion(x: string): ConfigMapNodeConfigSourceHelper;
    $uid(x: string): ConfigMapNodeConfigSourceHelper;
}

/** ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node. This API is deprecated since 1.22: https://git.k8s.io/enhancements/keps/sig-node/281-dynamic-kubelet-configuration */
export class ConfigMapNodeConfigSourceHelper extends Template implements ConfigMapNodeConfigSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _kubeletConfigKey: string;
    get kubeletConfigKey(): string {
        return this._kubeletConfigKey
    }
    set kubeletConfigKey(x: string) {
        this._kubeletConfigKey = x
    }
    $kubeletConfigKey(x: string) {
        this.kubeletConfigKey = x; return this
    }

    _resourceVersion: string;
    get resourceVersion(): string {
        return this._resourceVersion
    }
    set resourceVersion(x: string) {
        this._resourceVersion = x
    }
    $resourceVersion(x: string) {
        this.resourceVersion = x; return this
    }

    _uid: string;
    get uid(): string {
        return this._uid
    }
    set uid(x: string) {
        this._uid = x
    }
    $uid(x: string) {
        this.uid = x; return this
    }
}

export interface ConfigMapProjectionHelper extends ConfigMapProjection {
    $items(x: Array<KeyToPath>): ConfigMapProjectionHelper;
    $optional(x: boolean): ConfigMapProjectionHelper;
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

    _items: Array<KeyToPath>;
    get items(): Array<KeyToPath> {
        return this._items
    }
    set items(x: Array<KeyToPath>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<KeyToPath>) {
        this.items = x; return this
    }

    _optional: boolean;
    get optional(): boolean {
        return this._optional
    }
    set optional(x: boolean) {
        this._optional = x
    }
    $optional(x: boolean) {
        this.optional = x; return this
    }
}

export interface ConfigMapVolumeSourceHelper extends ConfigMapVolumeSource {
    $defaultMode(x: number): ConfigMapVolumeSourceHelper;
    $items(x: Array<KeyToPath>): ConfigMapVolumeSourceHelper;
    $optional(x: boolean): ConfigMapVolumeSourceHelper;
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

    _defaultMode: number;
    get defaultMode(): number {
        return this._defaultMode
    }
    set defaultMode(x: number) {
        this._defaultMode = x
    }
    $defaultMode(x: number) {
        this.defaultMode = x; return this
    }

    _items: Array<KeyToPath>;
    get items(): Array<KeyToPath> {
        return this._items
    }
    set items(x: Array<KeyToPath>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<KeyToPath>) {
        this.items = x; return this
    }

    _optional: boolean;
    get optional(): boolean {
        return this._optional
    }
    set optional(x: boolean) {
        this._optional = x
    }
    $optional(x: boolean) {
        this.optional = x; return this
    }
}

export interface ContainerHelper extends Container {
    $args(x: Array<string>): ContainerHelper;
    $command(x: Array<string>): ContainerHelper;
    $env(x: Array<EnvVar>): ContainerHelper;
    $envFrom(x: Array<EnvFromSource>): ContainerHelper;
    $image(x: string): ContainerHelper;
    $imagePullPolicy(x: string): ContainerHelper;
    $lifecycle(x: LifecycleHelper): ContainerHelper;
    $livenessProbe(x: ProbeHelper): ContainerHelper;
    $ports(x: Array<ContainerPort>): ContainerHelper;
    $readinessProbe(x: ProbeHelper): ContainerHelper;
    $resources(x: ResourceRequirementsHelper): ContainerHelper;
    $securityContext(x: SecurityContextHelper): ContainerHelper;
    $startupProbe(x: ProbeHelper): ContainerHelper;
    $stdin(x: boolean): ContainerHelper;
    $stdinOnce(x: boolean): ContainerHelper;
    $terminationMessagePath(x: string): ContainerHelper;
    $terminationMessagePolicy(x: string): ContainerHelper;
    $tty(x: boolean): ContainerHelper;
    $volumeDevices(x: Array<VolumeDevice>): ContainerHelper;
    $volumeMounts(x: Array<VolumeMount>): ContainerHelper;
    $workingDir(x: string): ContainerHelper;
}

/** A single application container that you want to run within a pod. */
export class ContainerHelper extends Template implements ContainerHelper {
    constructor(obj: any) {
        super(obj)
    }

    _args: Array<string>;
    get args(): Array<string> {
        return this._args
    }
    set args(x: Array<string>) {
        this._args = this.set(this.args, x)
    }
    $args(x: Array<string>) {
        this.args = x; return this
    }

    _command: Array<string>;
    get command(): Array<string> {
        return this._command
    }
    set command(x: Array<string>) {
        this._command = this.set(this.command, x)
    }
    $command(x: Array<string>) {
        this.command = x; return this
    }

    _env: Array<EnvVar>;
    get env(): Array<EnvVar> {
        return this._env
    }
    set env(x: Array<EnvVar>) {
        this._env = this.set(this.env, x)
    }
    $env(x: Array<EnvVar>) {
        this.env = x; return this
    }

    _envFrom: Array<EnvFromSource>;
    get envFrom(): Array<EnvFromSource> {
        return this._envFrom
    }
    set envFrom(x: Array<EnvFromSource>) {
        this._envFrom = this.set(this.envFrom, x)
    }
    $envFrom(x: Array<EnvFromSource>) {
        this.envFrom = x; return this
    }

    _image: string;
    get image(): string {
        return this._image
    }
    set image(x: string) {
        this._image = x
    }
    $image(x: string) {
        this.image = x; return this
    }

    _imagePullPolicy: string;
    get imagePullPolicy(): string {
        return this._imagePullPolicy
    }
    set imagePullPolicy(x: string) {
        this._imagePullPolicy = x
    }
    $imagePullPolicy(x: string) {
        this.imagePullPolicy = x; return this
    }

    _lifecycle: LifecycleHelper;
    get lifecycle(): LifecycleHelper {
        return this._lifecycle
    }
    set lifecycle(x: LifecycleHelper) {
        this._lifecycle = x
    }
    $lifecycle(x: LifecycleHelper) {
        this.lifecycle = x; return this
    }

    _livenessProbe: ProbeHelper;
    get livenessProbe(): ProbeHelper {
        return this._livenessProbe
    }
    set livenessProbe(x: ProbeHelper) {
        this._livenessProbe = x
    }
    $livenessProbe(x: ProbeHelper) {
        this.livenessProbe = x; return this
    }

    _ports: Array<ContainerPort>;
    get ports(): Array<ContainerPort> {
        return this._ports
    }
    set ports(x: Array<ContainerPort>) {
        this._ports = this.set(this.ports, x)
    }
    $ports(x: Array<ContainerPort>) {
        this.ports = x; return this
    }

    _readinessProbe: ProbeHelper;
    get readinessProbe(): ProbeHelper {
        return this._readinessProbe
    }
    set readinessProbe(x: ProbeHelper) {
        this._readinessProbe = x
    }
    $readinessProbe(x: ProbeHelper) {
        this.readinessProbe = x; return this
    }

    _resources: ResourceRequirementsHelper;
    get resources(): ResourceRequirementsHelper {
        return this._resources
    }
    set resources(x: ResourceRequirementsHelper) {
        this._resources = x
    }
    $resources(x: ResourceRequirementsHelper) {
        this.resources = x; return this
    }

    _securityContext: SecurityContextHelper;
    get securityContext(): SecurityContextHelper {
        return this._securityContext
    }
    set securityContext(x: SecurityContextHelper) {
        this._securityContext = x
    }
    $securityContext(x: SecurityContextHelper) {
        this.securityContext = x; return this
    }

    _startupProbe: ProbeHelper;
    get startupProbe(): ProbeHelper {
        return this._startupProbe
    }
    set startupProbe(x: ProbeHelper) {
        this._startupProbe = x
    }
    $startupProbe(x: ProbeHelper) {
        this.startupProbe = x; return this
    }

    _stdin: boolean;
    get stdin(): boolean {
        return this._stdin
    }
    set stdin(x: boolean) {
        this._stdin = x
    }
    $stdin(x: boolean) {
        this.stdin = x; return this
    }

    _stdinOnce: boolean;
    get stdinOnce(): boolean {
        return this._stdinOnce
    }
    set stdinOnce(x: boolean) {
        this._stdinOnce = x
    }
    $stdinOnce(x: boolean) {
        this.stdinOnce = x; return this
    }

    _terminationMessagePath: string;
    get terminationMessagePath(): string {
        return this._terminationMessagePath
    }
    set terminationMessagePath(x: string) {
        this._terminationMessagePath = x
    }
    $terminationMessagePath(x: string) {
        this.terminationMessagePath = x; return this
    }

    _terminationMessagePolicy: string;
    get terminationMessagePolicy(): string {
        return this._terminationMessagePolicy
    }
    set terminationMessagePolicy(x: string) {
        this._terminationMessagePolicy = x
    }
    $terminationMessagePolicy(x: string) {
        this.terminationMessagePolicy = x; return this
    }

    _tty: boolean;
    get tty(): boolean {
        return this._tty
    }
    set tty(x: boolean) {
        this._tty = x
    }
    $tty(x: boolean) {
        this.tty = x; return this
    }

    _volumeDevices: Array<VolumeDevice>;
    get volumeDevices(): Array<VolumeDevice> {
        return this._volumeDevices
    }
    set volumeDevices(x: Array<VolumeDevice>) {
        this._volumeDevices = this.set(this.volumeDevices, x)
    }
    $volumeDevices(x: Array<VolumeDevice>) {
        this.volumeDevices = x; return this
    }

    _volumeMounts: Array<VolumeMount>;
    get volumeMounts(): Array<VolumeMount> {
        return this._volumeMounts
    }
    set volumeMounts(x: Array<VolumeMount>) {
        this._volumeMounts = this.set(this.volumeMounts, x)
    }
    $volumeMounts(x: Array<VolumeMount>) {
        this.volumeMounts = x; return this
    }

    _workingDir: string;
    get workingDir(): string {
        return this._workingDir
    }
    set workingDir(x: string) {
        this._workingDir = x
    }
    $workingDir(x: string) {
        this.workingDir = x; return this
    }
}

export interface ContainerImageHelper extends ContainerImage {
    $names(x: Array<string>): ContainerImageHelper;
    $sizeBytes(x: number): ContainerImageHelper;
}

/** Describe a container image */
export class ContainerImageHelper extends Template implements ContainerImageHelper {
    constructor(obj: any) {
        super(obj)
    }

    _names: Array<string>;
    get names(): Array<string> {
        return this._names
    }
    set names(x: Array<string>) {
        this._names = this.set(this.names, x)
    }
    $names(x: Array<string>) {
        this.names = x; return this
    }

    _sizeBytes: number;
    get sizeBytes(): number {
        return this._sizeBytes
    }
    set sizeBytes(x: number) {
        this._sizeBytes = x
    }
    $sizeBytes(x: number) {
        this.sizeBytes = x; return this
    }
}

export interface ContainerPortHelper extends ContainerPort {
    $containerPort(x: number): ContainerPortHelper;
    $hostIP(x: string): ContainerPortHelper;
    $hostPort(x: number): ContainerPortHelper;
    $protocol(x: string): ContainerPortHelper;
}

/** ContainerPort represents a network port in a single container. */
export class ContainerPortHelper extends Template implements ContainerPortHelper {
    constructor(obj: any) {
        super(obj)
    }

    _containerPort: number;
    get containerPort(): number {
        return this._containerPort
    }
    set containerPort(x: number) {
        this._containerPort = x
    }
    $containerPort(x: number) {
        this.containerPort = x; return this
    }

    _hostIP: string;
    get hostIP(): string {
        return this._hostIP
    }
    set hostIP(x: string) {
        this._hostIP = x
    }
    $hostIP(x: string) {
        this.hostIP = x; return this
    }

    _hostPort: number;
    get hostPort(): number {
        return this._hostPort
    }
    set hostPort(x: number) {
        this._hostPort = x
    }
    $hostPort(x: number) {
        this.hostPort = x; return this
    }

    _protocol: string;
    get protocol(): string {
        return this._protocol
    }
    set protocol(x: string) {
        this._protocol = x
    }
    $protocol(x: string) {
        this.protocol = x; return this
    }
}

export interface ContainerStateHelper extends ContainerState {
    $running(x: ContainerStateRunningHelper): ContainerStateHelper;
    $terminated(x: ContainerStateTerminatedHelper): ContainerStateHelper;
    $waiting(x: ContainerStateWaitingHelper): ContainerStateHelper;
}

/** ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting. */
export class ContainerStateHelper extends Template implements ContainerStateHelper {
    constructor(obj: any) {
        super(obj)
    }

    _running: ContainerStateRunningHelper;
    get running(): ContainerStateRunningHelper {
        return this._running
    }
    set running(x: ContainerStateRunningHelper) {
        this._running = x
    }
    $running(x: ContainerStateRunningHelper) {
        this.running = x; return this
    }

    _terminated: ContainerStateTerminatedHelper;
    get terminated(): ContainerStateTerminatedHelper {
        return this._terminated
    }
    set terminated(x: ContainerStateTerminatedHelper) {
        this._terminated = x
    }
    $terminated(x: ContainerStateTerminatedHelper) {
        this.terminated = x; return this
    }

    _waiting: ContainerStateWaitingHelper;
    get waiting(): ContainerStateWaitingHelper {
        return this._waiting
    }
    set waiting(x: ContainerStateWaitingHelper) {
        this._waiting = x
    }
    $waiting(x: ContainerStateWaitingHelper) {
        this.waiting = x; return this
    }
}

export interface ContainerStateRunningHelper extends ContainerStateRunning {
    $startedAt(x: Time): ContainerStateRunningHelper;
}

/** ContainerStateRunning is a running state of a container. */
export class ContainerStateRunningHelper extends Template implements ContainerStateRunningHelper {
    constructor(obj: any) {
        super(obj)
    }

    _startedAt: Time;
    get startedAt(): Time {
        return this._startedAt
    }
    set startedAt(x: Time) {
        this._startedAt = x
    }
    $startedAt(x: Time) {
        this.startedAt = x; return this
    }
}

export interface ContainerStateTerminatedHelper extends ContainerStateTerminated {
    $containerID(x: string): ContainerStateTerminatedHelper;
    $exitCode(x: number): ContainerStateTerminatedHelper;
    $finishedAt(x: Time): ContainerStateTerminatedHelper;
    $message(x: string): ContainerStateTerminatedHelper;
    $reason(x: string): ContainerStateTerminatedHelper;
    $signal(x: number): ContainerStateTerminatedHelper;
    $startedAt(x: Time): ContainerStateTerminatedHelper;
}

/** ContainerStateTerminated is a terminated state of a container. */
export class ContainerStateTerminatedHelper extends Template implements ContainerStateTerminatedHelper {
    constructor(obj: any) {
        super(obj)
    }

    _containerID: string;
    get containerID(): string {
        return this._containerID
    }
    set containerID(x: string) {
        this._containerID = x
    }
    $containerID(x: string) {
        this.containerID = x; return this
    }

    _exitCode: number;
    get exitCode(): number {
        return this._exitCode
    }
    set exitCode(x: number) {
        this._exitCode = x
    }
    $exitCode(x: number) {
        this.exitCode = x; return this
    }

    _finishedAt: Time;
    get finishedAt(): Time {
        return this._finishedAt
    }
    set finishedAt(x: Time) {
        this._finishedAt = x
    }
    $finishedAt(x: Time) {
        this.finishedAt = x; return this
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

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $reason(x: string) {
        this.reason = x; return this
    }

    _signal: number;
    get signal(): number {
        return this._signal
    }
    set signal(x: number) {
        this._signal = x
    }
    $signal(x: number) {
        this.signal = x; return this
    }

    _startedAt: Time;
    get startedAt(): Time {
        return this._startedAt
    }
    set startedAt(x: Time) {
        this._startedAt = x
    }
    $startedAt(x: Time) {
        this.startedAt = x; return this
    }
}

export interface ContainerStateWaitingHelper extends ContainerStateWaiting {
    $message(x: string): ContainerStateWaitingHelper;
    $reason(x: string): ContainerStateWaitingHelper;
}

/** ContainerStateWaiting is a waiting state of a container. */
export class ContainerStateWaitingHelper extends Template implements ContainerStateWaitingHelper {
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

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $reason(x: string) {
        this.reason = x; return this
    }
}

export interface ContainerStatusHelper extends ContainerStatus {
    $containerID(x: string): ContainerStatusHelper;
    $image(x: string): ContainerStatusHelper;
    $imageID(x: string): ContainerStatusHelper;
    $lastState(x: ContainerStateHelper): ContainerStatusHelper;
    $ready(x: boolean): ContainerStatusHelper;
    $restartCount(x: number): ContainerStatusHelper;
    $started(x: boolean): ContainerStatusHelper;
    $state(x: ContainerStateHelper): ContainerStatusHelper;
}

/** ContainerStatus contains details for the current status of this container. */
export class ContainerStatusHelper extends Template implements ContainerStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _containerID: string;
    get containerID(): string {
        return this._containerID
    }
    set containerID(x: string) {
        this._containerID = x
    }
    $containerID(x: string) {
        this.containerID = x; return this
    }

    _image: string;
    get image(): string {
        return this._image
    }
    set image(x: string) {
        this._image = x
    }
    $image(x: string) {
        this.image = x; return this
    }

    _imageID: string;
    get imageID(): string {
        return this._imageID
    }
    set imageID(x: string) {
        this._imageID = x
    }
    $imageID(x: string) {
        this.imageID = x; return this
    }

    _lastState: ContainerStateHelper;
    get lastState(): ContainerStateHelper {
        return this._lastState
    }
    set lastState(x: ContainerStateHelper) {
        this._lastState = x
    }
    $lastState(x: ContainerStateHelper) {
        this.lastState = x; return this
    }

    _ready: boolean;
    get ready(): boolean {
        return this._ready
    }
    set ready(x: boolean) {
        this._ready = x
    }
    $ready(x: boolean) {
        this.ready = x; return this
    }

    _restartCount: number;
    get restartCount(): number {
        return this._restartCount
    }
    set restartCount(x: number) {
        this._restartCount = x
    }
    $restartCount(x: number) {
        this.restartCount = x; return this
    }

    _started: boolean;
    get started(): boolean {
        return this._started
    }
    set started(x: boolean) {
        this._started = x
    }
    $started(x: boolean) {
        this.started = x; return this
    }

    _state: ContainerStateHelper;
    get state(): ContainerStateHelper {
        return this._state
    }
    set state(x: ContainerStateHelper) {
        this._state = x
    }
    $state(x: ContainerStateHelper) {
        this.state = x; return this
    }
}

export interface DaemonEndpointHelper extends DaemonEndpoint {
    $Port(x: number): DaemonEndpointHelper;
}

/** DaemonEndpoint contains information about a single Daemon endpoint. */
export class DaemonEndpointHelper extends Template implements DaemonEndpointHelper {
    constructor(obj: any) {
        super(obj)
    }

    _Port: number;
    get Port(): number {
        return this._Port
    }
    set Port(x: number) {
        this._Port = x
    }
    $Port(x: number) {
        this.Port = x; return this
    }
}

export interface DownwardAPIProjectionHelper extends DownwardAPIProjection {
    $items(x: Array<DownwardAPIVolumeFile>): DownwardAPIProjectionHelper;
}

/** Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
export class DownwardAPIProjectionHelper extends Template implements DownwardAPIProjectionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _items: Array<DownwardAPIVolumeFile>;
    get items(): Array<DownwardAPIVolumeFile> {
        return this._items
    }
    set items(x: Array<DownwardAPIVolumeFile>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<DownwardAPIVolumeFile>) {
        this.items = x; return this
    }
}

export interface DownwardAPIVolumeFileHelper extends DownwardAPIVolumeFile {
    $fieldRef(x: ObjectFieldSelectorHelper): DownwardAPIVolumeFileHelper;
    $mode(x: number): DownwardAPIVolumeFileHelper;
    $path(x: string): DownwardAPIVolumeFileHelper;
    $resourceFieldRef(x: ResourceFieldSelectorHelper): DownwardAPIVolumeFileHelper;
}

/** DownwardAPIVolumeFile represents information to create the file containing the pod field */
export class DownwardAPIVolumeFileHelper extends Template implements DownwardAPIVolumeFileHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fieldRef: ObjectFieldSelectorHelper;
    get fieldRef(): ObjectFieldSelectorHelper {
        return this._fieldRef
    }
    set fieldRef(x: ObjectFieldSelectorHelper) {
        this._fieldRef = x
    }
    $fieldRef(x: ObjectFieldSelectorHelper) {
        this.fieldRef = x; return this
    }

    _mode: number;
    get mode(): number {
        return this._mode
    }
    set mode(x: number) {
        this._mode = x
    }
    $mode(x: number) {
        this.mode = x; return this
    }

    _path: string;
    get path(): string {
        return this._path
    }
    set path(x: string) {
        this._path = x
    }
    $path(x: string) {
        this.path = x; return this
    }

    _resourceFieldRef: ResourceFieldSelectorHelper;
    get resourceFieldRef(): ResourceFieldSelectorHelper {
        return this._resourceFieldRef
    }
    set resourceFieldRef(x: ResourceFieldSelectorHelper) {
        this._resourceFieldRef = x
    }
    $resourceFieldRef(x: ResourceFieldSelectorHelper) {
        this.resourceFieldRef = x; return this
    }
}

export interface DownwardAPIVolumeSourceHelper extends DownwardAPIVolumeSource {
    $defaultMode(x: number): DownwardAPIVolumeSourceHelper;
    $items(x: Array<DownwardAPIVolumeFile>): DownwardAPIVolumeSourceHelper;
}

/** DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
export class DownwardAPIVolumeSourceHelper extends Template implements DownwardAPIVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _defaultMode: number;
    get defaultMode(): number {
        return this._defaultMode
    }
    set defaultMode(x: number) {
        this._defaultMode = x
    }
    $defaultMode(x: number) {
        this.defaultMode = x; return this
    }

    _items: Array<DownwardAPIVolumeFile>;
    get items(): Array<DownwardAPIVolumeFile> {
        return this._items
    }
    set items(x: Array<DownwardAPIVolumeFile>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<DownwardAPIVolumeFile>) {
        this.items = x; return this
    }
}

export interface EmptyDirVolumeSourceHelper extends EmptyDirVolumeSource {
    $medium(x: string): EmptyDirVolumeSourceHelper;
    $sizeLimit(x: Quantity): EmptyDirVolumeSourceHelper;
}

/** Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
export class EmptyDirVolumeSourceHelper extends Template implements EmptyDirVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _medium: string;
    get medium(): string {
        return this._medium
    }
    set medium(x: string) {
        this._medium = x
    }
    $medium(x: string) {
        this.medium = x; return this
    }

    _sizeLimit: Quantity;
    get sizeLimit(): Quantity {
        return this._sizeLimit
    }
    set sizeLimit(x: Quantity) {
        this._sizeLimit = x
    }
    $sizeLimit(x: Quantity) {
        this.sizeLimit = x; return this
    }
}

export interface EndpointAddressHelper extends EndpointAddress {
    $hostname(x: string): EndpointAddressHelper;
    $ip(x: string): EndpointAddressHelper;
    $nodeName(x: string): EndpointAddressHelper;
    $targetRef(x: ObjectReferenceHelper): EndpointAddressHelper;
}

/** EndpointAddress is a tuple that describes single IP address. */
export class EndpointAddressHelper extends Template implements EndpointAddressHelper {
    constructor(obj: any) {
        super(obj)
    }

    _hostname: string;
    get hostname(): string {
        return this._hostname
    }
    set hostname(x: string) {
        this._hostname = x
    }
    $hostname(x: string) {
        this.hostname = x; return this
    }

    _ip: string;
    get ip(): string {
        return this._ip
    }
    set ip(x: string) {
        this._ip = x
    }
    $ip(x: string) {
        this.ip = x; return this
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

    _targetRef: ObjectReferenceHelper;
    get targetRef(): ObjectReferenceHelper {
        return this._targetRef
    }
    set targetRef(x: ObjectReferenceHelper) {
        this._targetRef = x
    }
    $targetRef(x: ObjectReferenceHelper) {
        this.targetRef = x; return this
    }
}

export interface EndpointPortHelper extends EndpointPort {
    $appProtocol(x: string): EndpointPortHelper;
    $port(x: number): EndpointPortHelper;
    $protocol(x: string): EndpointPortHelper;
}

/** EndpointPort is a tuple that describes a single port. */
export class EndpointPortHelper extends Template implements EndpointPortHelper {
    constructor(obj: any) {
        super(obj)
    }

    _appProtocol: string;
    get appProtocol(): string {
        return this._appProtocol
    }
    set appProtocol(x: string) {
        this._appProtocol = x
    }
    $appProtocol(x: string) {
        this.appProtocol = x; return this
    }

    _port: number;
    get port(): number {
        return this._port
    }
    set port(x: number) {
        this._port = x
    }
    $port(x: number) {
        this.port = x; return this
    }

    _protocol: string;
    get protocol(): string {
        return this._protocol
    }
    set protocol(x: string) {
        this._protocol = x
    }
    $protocol(x: string) {
        this.protocol = x; return this
    }
}

export interface EndpointSubsetHelper extends EndpointSubset {
    $addresses(x: Array<EndpointAddress>): EndpointSubsetHelper;
    $notReadyAddresses(x: Array<EndpointAddress>): EndpointSubsetHelper;
    $ports(x: Array<EndpointPort>): EndpointSubsetHelper;
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

    _addresses: Array<EndpointAddress>;
    get addresses(): Array<EndpointAddress> {
        return this._addresses
    }
    set addresses(x: Array<EndpointAddress>) {
        this._addresses = this.set(this.addresses, x)
    }
    $addresses(x: Array<EndpointAddress>) {
        this.addresses = x; return this
    }

    _notReadyAddresses: Array<EndpointAddress>;
    get notReadyAddresses(): Array<EndpointAddress> {
        return this._notReadyAddresses
    }
    set notReadyAddresses(x: Array<EndpointAddress>) {
        this._notReadyAddresses = this.set(this.notReadyAddresses, x)
    }
    $notReadyAddresses(x: Array<EndpointAddress>) {
        this.notReadyAddresses = x; return this
    }

    _ports: Array<EndpointPort>;
    get ports(): Array<EndpointPort> {
        return this._ports
    }
    set ports(x: Array<EndpointPort>) {
        this._ports = this.set(this.ports, x)
    }
    $ports(x: Array<EndpointPort>) {
        this.ports = x; return this
    }
}

export interface EndpointsHelper extends Endpoints {
    $metadata(x: ObjectMetaHelper): EndpointsHelper;
    $subsets(x: Array<EndpointSubset>): EndpointsHelper;
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

    _subsets: Array<EndpointSubset>;
    get subsets(): Array<EndpointSubset> {
        return this._subsets
    }
    set subsets(x: Array<EndpointSubset>) {
        this._subsets = this.set(this.subsets, x)
    }
    $subsets(x: Array<EndpointSubset>) {
        this.subsets = x; return this
    }
}

export interface EndpointsListHelper extends EndpointsList {
    $items(x: Array<Endpoints>): EndpointsListHelper;
    $metadata(x: ListMetaHelper): EndpointsListHelper;
}

/** EndpointsList is a list of endpoints. */
export class EndpointsListHelper extends ResourceTemplate implements EndpointsListHelper {
    static kind = 'EndpointsList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, EndpointsListHelper.kind, EndpointsListHelper.apiVersion)
    }

    _items: Array<Endpoints>;
    get items(): Array<Endpoints> {
        return this._items
    }
    set items(x: Array<Endpoints>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<Endpoints>) {
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

export interface EnvFromSourceHelper extends EnvFromSource {
    $configMapRef(x: ConfigMapEnvSourceHelper): EnvFromSourceHelper;
    $prefix(x: string): EnvFromSourceHelper;
    $secretRef(x: SecretEnvSourceHelper): EnvFromSourceHelper;
}

/** EnvFromSource represents the source of a set of ConfigMaps */
export class EnvFromSourceHelper extends Template implements EnvFromSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _configMapRef: ConfigMapEnvSourceHelper;
    get configMapRef(): ConfigMapEnvSourceHelper {
        return this._configMapRef
    }
    set configMapRef(x: ConfigMapEnvSourceHelper) {
        this._configMapRef = x
    }
    $configMapRef(x: ConfigMapEnvSourceHelper) {
        this.configMapRef = x; return this
    }

    _prefix: string;
    get prefix(): string {
        return this._prefix
    }
    set prefix(x: string) {
        this._prefix = x
    }
    $prefix(x: string) {
        this.prefix = x; return this
    }

    _secretRef: SecretEnvSourceHelper;
    get secretRef(): SecretEnvSourceHelper {
        return this._secretRef
    }
    set secretRef(x: SecretEnvSourceHelper) {
        this._secretRef = x
    }
    $secretRef(x: SecretEnvSourceHelper) {
        this.secretRef = x; return this
    }
}

export interface EnvVarHelper extends EnvVar {
    $value(x: string): EnvVarHelper;
    $valueFrom(x: EnvVarSourceHelper): EnvVarHelper;
}

/** EnvVar represents an environment variable present in a Container. */
export class EnvVarHelper extends Template implements EnvVarHelper {
    constructor(obj: any) {
        super(obj)
    }

    _value: string;
    get value(): string {
        return this._value
    }
    set value(x: string) {
        this._value = x
    }
    $value(x: string) {
        this.value = x; return this
    }

    _valueFrom: EnvVarSourceHelper;
    get valueFrom(): EnvVarSourceHelper {
        return this._valueFrom
    }
    set valueFrom(x: EnvVarSourceHelper) {
        this._valueFrom = x
    }
    $valueFrom(x: EnvVarSourceHelper) {
        this.valueFrom = x; return this
    }
}

export interface EnvVarSourceHelper extends EnvVarSource {
    $configMapKeyRef(x: ConfigMapKeySelectorHelper): EnvVarSourceHelper;
    $fieldRef(x: ObjectFieldSelectorHelper): EnvVarSourceHelper;
    $resourceFieldRef(x: ResourceFieldSelectorHelper): EnvVarSourceHelper;
    $secretKeyRef(x: SecretKeySelectorHelper): EnvVarSourceHelper;
}

/** EnvVarSource represents a source for the value of an EnvVar. */
export class EnvVarSourceHelper extends Template implements EnvVarSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _configMapKeyRef: ConfigMapKeySelectorHelper;
    get configMapKeyRef(): ConfigMapKeySelectorHelper {
        return this._configMapKeyRef
    }
    set configMapKeyRef(x: ConfigMapKeySelectorHelper) {
        this._configMapKeyRef = x
    }
    $configMapKeyRef(x: ConfigMapKeySelectorHelper) {
        this.configMapKeyRef = x; return this
    }

    _fieldRef: ObjectFieldSelectorHelper;
    get fieldRef(): ObjectFieldSelectorHelper {
        return this._fieldRef
    }
    set fieldRef(x: ObjectFieldSelectorHelper) {
        this._fieldRef = x
    }
    $fieldRef(x: ObjectFieldSelectorHelper) {
        this.fieldRef = x; return this
    }

    _resourceFieldRef: ResourceFieldSelectorHelper;
    get resourceFieldRef(): ResourceFieldSelectorHelper {
        return this._resourceFieldRef
    }
    set resourceFieldRef(x: ResourceFieldSelectorHelper) {
        this._resourceFieldRef = x
    }
    $resourceFieldRef(x: ResourceFieldSelectorHelper) {
        this.resourceFieldRef = x; return this
    }

    _secretKeyRef: SecretKeySelectorHelper;
    get secretKeyRef(): SecretKeySelectorHelper {
        return this._secretKeyRef
    }
    set secretKeyRef(x: SecretKeySelectorHelper) {
        this._secretKeyRef = x
    }
    $secretKeyRef(x: SecretKeySelectorHelper) {
        this.secretKeyRef = x; return this
    }
}

export interface EphemeralContainerHelper extends EphemeralContainer {
    $args(x: Array<string>): EphemeralContainerHelper;
    $command(x: Array<string>): EphemeralContainerHelper;
    $env(x: Array<EnvVar>): EphemeralContainerHelper;
    $envFrom(x: Array<EnvFromSource>): EphemeralContainerHelper;
    $image(x: string): EphemeralContainerHelper;
    $imagePullPolicy(x: string): EphemeralContainerHelper;
    $lifecycle(x: LifecycleHelper): EphemeralContainerHelper;
    $livenessProbe(x: ProbeHelper): EphemeralContainerHelper;
    $ports(x: Array<ContainerPort>): EphemeralContainerHelper;
    $readinessProbe(x: ProbeHelper): EphemeralContainerHelper;
    $resources(x: ResourceRequirementsHelper): EphemeralContainerHelper;
    $securityContext(x: SecurityContextHelper): EphemeralContainerHelper;
    $startupProbe(x: ProbeHelper): EphemeralContainerHelper;
    $stdin(x: boolean): EphemeralContainerHelper;
    $stdinOnce(x: boolean): EphemeralContainerHelper;
    $targetContainerName(x: string): EphemeralContainerHelper;
    $terminationMessagePath(x: string): EphemeralContainerHelper;
    $terminationMessagePolicy(x: string): EphemeralContainerHelper;
    $tty(x: boolean): EphemeralContainerHelper;
    $volumeDevices(x: Array<VolumeDevice>): EphemeralContainerHelper;
    $volumeMounts(x: Array<VolumeMount>): EphemeralContainerHelper;
    $workingDir(x: string): EphemeralContainerHelper;
}

/**
 * An EphemeralContainer is a temporary container that you may add to an existing Pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a Pod is removed or restarted. The kubelet may evict a Pod if an ephemeral container causes the Pod to exceed its resource allocation.
 *
 * To add an ephemeral container, use the ephemeralcontainers subresource of an existing Pod. Ephemeral containers may not be removed or restarted.
 *
 * This is a beta feature available on clusters that haven't disabled the EphemeralContainers feature gate.
 */
export class EphemeralContainerHelper extends Template implements EphemeralContainerHelper {
    constructor(obj: any) {
        super(obj)
    }

    _args: Array<string>;
    get args(): Array<string> {
        return this._args
    }
    set args(x: Array<string>) {
        this._args = this.set(this.args, x)
    }
    $args(x: Array<string>) {
        this.args = x; return this
    }

    _command: Array<string>;
    get command(): Array<string> {
        return this._command
    }
    set command(x: Array<string>) {
        this._command = this.set(this.command, x)
    }
    $command(x: Array<string>) {
        this.command = x; return this
    }

    _env: Array<EnvVar>;
    get env(): Array<EnvVar> {
        return this._env
    }
    set env(x: Array<EnvVar>) {
        this._env = this.set(this.env, x)
    }
    $env(x: Array<EnvVar>) {
        this.env = x; return this
    }

    _envFrom: Array<EnvFromSource>;
    get envFrom(): Array<EnvFromSource> {
        return this._envFrom
    }
    set envFrom(x: Array<EnvFromSource>) {
        this._envFrom = this.set(this.envFrom, x)
    }
    $envFrom(x: Array<EnvFromSource>) {
        this.envFrom = x; return this
    }

    _image: string;
    get image(): string {
        return this._image
    }
    set image(x: string) {
        this._image = x
    }
    $image(x: string) {
        this.image = x; return this
    }

    _imagePullPolicy: string;
    get imagePullPolicy(): string {
        return this._imagePullPolicy
    }
    set imagePullPolicy(x: string) {
        this._imagePullPolicy = x
    }
    $imagePullPolicy(x: string) {
        this.imagePullPolicy = x; return this
    }

    _lifecycle: LifecycleHelper;
    get lifecycle(): LifecycleHelper {
        return this._lifecycle
    }
    set lifecycle(x: LifecycleHelper) {
        this._lifecycle = x
    }
    $lifecycle(x: LifecycleHelper) {
        this.lifecycle = x; return this
    }

    _livenessProbe: ProbeHelper;
    get livenessProbe(): ProbeHelper {
        return this._livenessProbe
    }
    set livenessProbe(x: ProbeHelper) {
        this._livenessProbe = x
    }
    $livenessProbe(x: ProbeHelper) {
        this.livenessProbe = x; return this
    }

    _ports: Array<ContainerPort>;
    get ports(): Array<ContainerPort> {
        return this._ports
    }
    set ports(x: Array<ContainerPort>) {
        this._ports = this.set(this.ports, x)
    }
    $ports(x: Array<ContainerPort>) {
        this.ports = x; return this
    }

    _readinessProbe: ProbeHelper;
    get readinessProbe(): ProbeHelper {
        return this._readinessProbe
    }
    set readinessProbe(x: ProbeHelper) {
        this._readinessProbe = x
    }
    $readinessProbe(x: ProbeHelper) {
        this.readinessProbe = x; return this
    }

    _resources: ResourceRequirementsHelper;
    get resources(): ResourceRequirementsHelper {
        return this._resources
    }
    set resources(x: ResourceRequirementsHelper) {
        this._resources = x
    }
    $resources(x: ResourceRequirementsHelper) {
        this.resources = x; return this
    }

    _securityContext: SecurityContextHelper;
    get securityContext(): SecurityContextHelper {
        return this._securityContext
    }
    set securityContext(x: SecurityContextHelper) {
        this._securityContext = x
    }
    $securityContext(x: SecurityContextHelper) {
        this.securityContext = x; return this
    }

    _startupProbe: ProbeHelper;
    get startupProbe(): ProbeHelper {
        return this._startupProbe
    }
    set startupProbe(x: ProbeHelper) {
        this._startupProbe = x
    }
    $startupProbe(x: ProbeHelper) {
        this.startupProbe = x; return this
    }

    _stdin: boolean;
    get stdin(): boolean {
        return this._stdin
    }
    set stdin(x: boolean) {
        this._stdin = x
    }
    $stdin(x: boolean) {
        this.stdin = x; return this
    }

    _stdinOnce: boolean;
    get stdinOnce(): boolean {
        return this._stdinOnce
    }
    set stdinOnce(x: boolean) {
        this._stdinOnce = x
    }
    $stdinOnce(x: boolean) {
        this.stdinOnce = x; return this
    }

    _targetContainerName: string;
    get targetContainerName(): string {
        return this._targetContainerName
    }
    set targetContainerName(x: string) {
        this._targetContainerName = x
    }
    $targetContainerName(x: string) {
        this.targetContainerName = x; return this
    }

    _terminationMessagePath: string;
    get terminationMessagePath(): string {
        return this._terminationMessagePath
    }
    set terminationMessagePath(x: string) {
        this._terminationMessagePath = x
    }
    $terminationMessagePath(x: string) {
        this.terminationMessagePath = x; return this
    }

    _terminationMessagePolicy: string;
    get terminationMessagePolicy(): string {
        return this._terminationMessagePolicy
    }
    set terminationMessagePolicy(x: string) {
        this._terminationMessagePolicy = x
    }
    $terminationMessagePolicy(x: string) {
        this.terminationMessagePolicy = x; return this
    }

    _tty: boolean;
    get tty(): boolean {
        return this._tty
    }
    set tty(x: boolean) {
        this._tty = x
    }
    $tty(x: boolean) {
        this.tty = x; return this
    }

    _volumeDevices: Array<VolumeDevice>;
    get volumeDevices(): Array<VolumeDevice> {
        return this._volumeDevices
    }
    set volumeDevices(x: Array<VolumeDevice>) {
        this._volumeDevices = this.set(this.volumeDevices, x)
    }
    $volumeDevices(x: Array<VolumeDevice>) {
        this.volumeDevices = x; return this
    }

    _volumeMounts: Array<VolumeMount>;
    get volumeMounts(): Array<VolumeMount> {
        return this._volumeMounts
    }
    set volumeMounts(x: Array<VolumeMount>) {
        this._volumeMounts = this.set(this.volumeMounts, x)
    }
    $volumeMounts(x: Array<VolumeMount>) {
        this.volumeMounts = x; return this
    }

    _workingDir: string;
    get workingDir(): string {
        return this._workingDir
    }
    set workingDir(x: string) {
        this._workingDir = x
    }
    $workingDir(x: string) {
        this.workingDir = x; return this
    }
}

export interface EphemeralVolumeSourceHelper extends EphemeralVolumeSource {
    $volumeClaimTemplate(x: PersistentVolumeClaimTemplateHelper): EphemeralVolumeSourceHelper;
}

/** Represents an ephemeral volume that is handled by a normal storage driver. */
export class EphemeralVolumeSourceHelper extends Template implements EphemeralVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _volumeClaimTemplate: PersistentVolumeClaimTemplateHelper;
    get volumeClaimTemplate(): PersistentVolumeClaimTemplateHelper {
        return this._volumeClaimTemplate
    }
    set volumeClaimTemplate(x: PersistentVolumeClaimTemplateHelper) {
        this._volumeClaimTemplate = x
    }
    $volumeClaimTemplate(x: PersistentVolumeClaimTemplateHelper) {
        this.volumeClaimTemplate = x; return this
    }
}

export interface EventHelper extends Event {
    $action(x: string): EventHelper;
    $count(x: number): EventHelper;
    $eventTime(x: MicroTime): EventHelper;
    $firstTimestamp(x: Time): EventHelper;
    $involvedObject(x: ObjectReferenceHelper): EventHelper;
    $lastTimestamp(x: Time): EventHelper;
    $message(x: string): EventHelper;
    $metadata(x: ObjectMetaHelper): EventHelper;
    $reason(x: string): EventHelper;
    $related(x: ObjectReferenceHelper): EventHelper;
    $reportingComponent(x: string): EventHelper;
    $reportingInstance(x: string): EventHelper;
    $series(x: EventSeriesHelper): EventHelper;
    $source(x: EventSourceHelper): EventHelper;
    $type(x: string): EventHelper;
}

/** Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data. */
export class EventHelper extends ResourceTemplate implements EventHelper {
    static kind = 'Event';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, EventHelper.kind, EventHelper.apiVersion)
    }

    _action: string;
    get action(): string {
        return this._action
    }
    set action(x: string) {
        this._action = x
    }
    $action(x: string) {
        this.action = x; return this
    }

    _count: number;
    get count(): number {
        return this._count
    }
    set count(x: number) {
        this._count = x
    }
    $count(x: number) {
        this.count = x; return this
    }

    _eventTime: MicroTime;
    get eventTime(): MicroTime {
        return this._eventTime
    }
    set eventTime(x: MicroTime) {
        this._eventTime = x
    }
    $eventTime(x: MicroTime) {
        this.eventTime = x; return this
    }

    _firstTimestamp: Time;
    get firstTimestamp(): Time {
        return this._firstTimestamp
    }
    set firstTimestamp(x: Time) {
        this._firstTimestamp = x
    }
    $firstTimestamp(x: Time) {
        this.firstTimestamp = x; return this
    }

    _involvedObject: ObjectReferenceHelper;
    get involvedObject(): ObjectReferenceHelper {
        return this._involvedObject
    }
    set involvedObject(x: ObjectReferenceHelper) {
        this._involvedObject = x
    }
    $involvedObject(x: ObjectReferenceHelper) {
        this.involvedObject = x; return this
    }

    _lastTimestamp: Time;
    get lastTimestamp(): Time {
        return this._lastTimestamp
    }
    set lastTimestamp(x: Time) {
        this._lastTimestamp = x
    }
    $lastTimestamp(x: Time) {
        this.lastTimestamp = x; return this
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

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $reason(x: string) {
        this.reason = x; return this
    }

    _related: ObjectReferenceHelper;
    get related(): ObjectReferenceHelper {
        return this._related
    }
    set related(x: ObjectReferenceHelper) {
        this._related = x
    }
    $related(x: ObjectReferenceHelper) {
        this.related = x; return this
    }

    _reportingComponent: string;
    get reportingComponent(): string {
        return this._reportingComponent
    }
    set reportingComponent(x: string) {
        this._reportingComponent = x
    }
    $reportingComponent(x: string) {
        this.reportingComponent = x; return this
    }

    _reportingInstance: string;
    get reportingInstance(): string {
        return this._reportingInstance
    }
    set reportingInstance(x: string) {
        this._reportingInstance = x
    }
    $reportingInstance(x: string) {
        this.reportingInstance = x; return this
    }

    _series: EventSeriesHelper;
    get series(): EventSeriesHelper {
        return this._series
    }
    set series(x: EventSeriesHelper) {
        this._series = x
    }
    $series(x: EventSeriesHelper) {
        this.series = x; return this
    }

    _source: EventSourceHelper;
    get source(): EventSourceHelper {
        return this._source
    }
    set source(x: EventSourceHelper) {
        this._source = x
    }
    $source(x: EventSourceHelper) {
        this.source = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface EventListHelper extends EventList {
    $items(x: Array<Event>): EventListHelper;
    $metadata(x: ListMetaHelper): EventListHelper;
}

/** EventList is a list of events. */
export class EventListHelper extends ResourceTemplate implements EventListHelper {
    static kind = 'EventList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, EventListHelper.kind, EventListHelper.apiVersion)
    }

    _items: Array<Event>;
    get items(): Array<Event> {
        return this._items
    }
    set items(x: Array<Event>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<Event>) {
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

export interface EventSeriesHelper extends EventSeries {
    $count(x: number): EventSeriesHelper;
    $lastObservedTime(x: MicroTime): EventSeriesHelper;
}

/** EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. */
export class EventSeriesHelper extends Template implements EventSeriesHelper {
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
    $count(x: number) {
        this.count = x; return this
    }

    _lastObservedTime: MicroTime;
    get lastObservedTime(): MicroTime {
        return this._lastObservedTime
    }
    set lastObservedTime(x: MicroTime) {
        this._lastObservedTime = x
    }
    $lastObservedTime(x: MicroTime) {
        this.lastObservedTime = x; return this
    }
}

export interface EventSourceHelper extends EventSource {
    $component(x: string): EventSourceHelper;
    $host(x: string): EventSourceHelper;
}

/** EventSource contains information for an event. */
export class EventSourceHelper extends Template implements EventSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _component: string;
    get component(): string {
        return this._component
    }
    set component(x: string) {
        this._component = x
    }
    $component(x: string) {
        this.component = x; return this
    }

    _host: string;
    get host(): string {
        return this._host
    }
    set host(x: string) {
        this._host = x
    }
    $host(x: string) {
        this.host = x; return this
    }
}

export interface ExecActionHelper extends ExecAction {
    $command(x: Array<string>): ExecActionHelper;
}

/** ExecAction describes a "run in container" action. */
export class ExecActionHelper extends Template implements ExecActionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _command: Array<string>;
    get command(): Array<string> {
        return this._command
    }
    set command(x: Array<string>) {
        this._command = this.set(this.command, x)
    }
    $command(x: Array<string>) {
        this.command = x; return this
    }
}

export interface FCVolumeSourceHelper extends FCVolumeSource {
    $fsType(x: string): FCVolumeSourceHelper;
    $lun(x: number): FCVolumeSourceHelper;
    $readOnly(x: boolean): FCVolumeSourceHelper;
    $targetWWNs(x: Array<string>): FCVolumeSourceHelper;
    $wwids(x: Array<string>): FCVolumeSourceHelper;
}

/** Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
export class FCVolumeSourceHelper extends Template implements FCVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _lun: number;
    get lun(): number {
        return this._lun
    }
    set lun(x: number) {
        this._lun = x
    }
    $lun(x: number) {
        this.lun = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _targetWWNs: Array<string>;
    get targetWWNs(): Array<string> {
        return this._targetWWNs
    }
    set targetWWNs(x: Array<string>) {
        this._targetWWNs = this.set(this.targetWWNs, x)
    }
    $targetWWNs(x: Array<string>) {
        this.targetWWNs = x; return this
    }

    _wwids: Array<string>;
    get wwids(): Array<string> {
        return this._wwids
    }
    set wwids(x: Array<string>) {
        this._wwids = this.set(this.wwids, x)
    }
    $wwids(x: Array<string>) {
        this.wwids = x; return this
    }
}

export interface FlexPersistentVolumeSourceHelper extends FlexPersistentVolumeSource {
    $driver(x: string): FlexPersistentVolumeSourceHelper;
    $fsType(x: string): FlexPersistentVolumeSourceHelper;
    $options(x: any): FlexPersistentVolumeSourceHelper;
    $readOnly(x: boolean): FlexPersistentVolumeSourceHelper;
    $secretRef(x: SecretReferenceHelper): FlexPersistentVolumeSourceHelper;
}

/** FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin. */
export class FlexPersistentVolumeSourceHelper extends Template implements FlexPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _driver: string;
    get driver(): string {
        return this._driver
    }
    set driver(x: string) {
        this._driver = x
    }
    $driver(x: string) {
        this.driver = x; return this
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _options: any;
    get options(): any {
        return this._options
    }
    set options(x: any) {
        this._options = this.set(this.options, x)
    }
    $options(x: any) {
        this.options = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _secretRef: SecretReferenceHelper;
    get secretRef(): SecretReferenceHelper {
        return this._secretRef
    }
    set secretRef(x: SecretReferenceHelper) {
        this._secretRef = x
    }
    $secretRef(x: SecretReferenceHelper) {
        this.secretRef = x; return this
    }
}

export interface FlexVolumeSourceHelper extends FlexVolumeSource {
    $driver(x: string): FlexVolumeSourceHelper;
    $fsType(x: string): FlexVolumeSourceHelper;
    $options(x: any): FlexVolumeSourceHelper;
    $readOnly(x: boolean): FlexVolumeSourceHelper;
    $secretRef(x: LocalObjectReferenceHelper): FlexVolumeSourceHelper;
}

/** FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
export class FlexVolumeSourceHelper extends Template implements FlexVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _driver: string;
    get driver(): string {
        return this._driver
    }
    set driver(x: string) {
        this._driver = x
    }
    $driver(x: string) {
        this.driver = x; return this
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _options: any;
    get options(): any {
        return this._options
    }
    set options(x: any) {
        this._options = this.set(this.options, x)
    }
    $options(x: any) {
        this.options = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _secretRef: LocalObjectReferenceHelper;
    get secretRef(): LocalObjectReferenceHelper {
        return this._secretRef
    }
    set secretRef(x: LocalObjectReferenceHelper) {
        this._secretRef = x
    }
    $secretRef(x: LocalObjectReferenceHelper) {
        this.secretRef = x; return this
    }
}

export interface FlockerVolumeSourceHelper extends FlockerVolumeSource {
    $datasetName(x: string): FlockerVolumeSourceHelper;
    $datasetUUID(x: string): FlockerVolumeSourceHelper;
}

/** Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
export class FlockerVolumeSourceHelper extends Template implements FlockerVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _datasetName: string;
    get datasetName(): string {
        return this._datasetName
    }
    set datasetName(x: string) {
        this._datasetName = x
    }
    $datasetName(x: string) {
        this.datasetName = x; return this
    }

    _datasetUUID: string;
    get datasetUUID(): string {
        return this._datasetUUID
    }
    set datasetUUID(x: string) {
        this._datasetUUID = x
    }
    $datasetUUID(x: string) {
        this.datasetUUID = x; return this
    }
}

export interface GCEPersistentDiskVolumeSourceHelper extends GCEPersistentDiskVolumeSource {
    $fsType(x: string): GCEPersistentDiskVolumeSourceHelper;
    $partition(x: number): GCEPersistentDiskVolumeSourceHelper;
    $pdName(x: string): GCEPersistentDiskVolumeSourceHelper;
    $readOnly(x: boolean): GCEPersistentDiskVolumeSourceHelper;
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

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _partition: number;
    get partition(): number {
        return this._partition
    }
    set partition(x: number) {
        this._partition = x
    }
    $partition(x: number) {
        this.partition = x; return this
    }

    _pdName: string;
    get pdName(): string {
        return this._pdName
    }
    set pdName(x: string) {
        this._pdName = x
    }
    $pdName(x: string) {
        this.pdName = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }
}

export interface GRPCActionHelper extends GRPCAction {
    $port(x: number): GRPCActionHelper;
    $service(x: string): GRPCActionHelper;
}

export class GRPCActionHelper extends Template implements GRPCActionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _port: number;
    get port(): number {
        return this._port
    }
    set port(x: number) {
        this._port = x
    }
    $port(x: number) {
        this.port = x; return this
    }

    _service: string;
    get service(): string {
        return this._service
    }
    set service(x: string) {
        this._service = x
    }
    $service(x: string) {
        this.service = x; return this
    }
}

export interface GitRepoVolumeSourceHelper extends GitRepoVolumeSource {
    $directory(x: string): GitRepoVolumeSourceHelper;
    $repository(x: string): GitRepoVolumeSourceHelper;
    $revision(x: string): GitRepoVolumeSourceHelper;
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

    _directory: string;
    get directory(): string {
        return this._directory
    }
    set directory(x: string) {
        this._directory = x
    }
    $directory(x: string) {
        this.directory = x; return this
    }

    _repository: string;
    get repository(): string {
        return this._repository
    }
    set repository(x: string) {
        this._repository = x
    }
    $repository(x: string) {
        this.repository = x; return this
    }

    _revision: string;
    get revision(): string {
        return this._revision
    }
    set revision(x: string) {
        this._revision = x
    }
    $revision(x: string) {
        this.revision = x; return this
    }
}

export interface GlusterfsPersistentVolumeSourceHelper extends GlusterfsPersistentVolumeSource {
    $endpoints(x: string): GlusterfsPersistentVolumeSourceHelper;
    $endpointsNamespace(x: string): GlusterfsPersistentVolumeSourceHelper;
    $path(x: string): GlusterfsPersistentVolumeSourceHelper;
    $readOnly(x: boolean): GlusterfsPersistentVolumeSourceHelper;
}

/** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export class GlusterfsPersistentVolumeSourceHelper extends Template implements GlusterfsPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _endpoints: string;
    get endpoints(): string {
        return this._endpoints
    }
    set endpoints(x: string) {
        this._endpoints = x
    }
    $endpoints(x: string) {
        this.endpoints = x; return this
    }

    _endpointsNamespace: string;
    get endpointsNamespace(): string {
        return this._endpointsNamespace
    }
    set endpointsNamespace(x: string) {
        this._endpointsNamespace = x
    }
    $endpointsNamespace(x: string) {
        this.endpointsNamespace = x; return this
    }

    _path: string;
    get path(): string {
        return this._path
    }
    set path(x: string) {
        this._path = x
    }
    $path(x: string) {
        this.path = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }
}

export interface GlusterfsVolumeSourceHelper extends GlusterfsVolumeSource {
    $endpoints(x: string): GlusterfsVolumeSourceHelper;
    $path(x: string): GlusterfsVolumeSourceHelper;
    $readOnly(x: boolean): GlusterfsVolumeSourceHelper;
}

/** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export class GlusterfsVolumeSourceHelper extends Template implements GlusterfsVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _endpoints: string;
    get endpoints(): string {
        return this._endpoints
    }
    set endpoints(x: string) {
        this._endpoints = x
    }
    $endpoints(x: string) {
        this.endpoints = x; return this
    }

    _path: string;
    get path(): string {
        return this._path
    }
    set path(x: string) {
        this._path = x
    }
    $path(x: string) {
        this.path = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }
}

export interface HTTPGetActionHelper extends HTTPGetAction {
    $host(x: string): HTTPGetActionHelper;
    $httpHeaders(x: Array<HTTPHeader>): HTTPGetActionHelper;
    $path(x: string): HTTPGetActionHelper;
    $port(x: number | string): HTTPGetActionHelper;
    $scheme(x: string): HTTPGetActionHelper;
}

/** HTTPGetAction describes an action based on HTTP Get requests. */
export class HTTPGetActionHelper extends Template implements HTTPGetActionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _host: string;
    get host(): string {
        return this._host
    }
    set host(x: string) {
        this._host = x
    }
    $host(x: string) {
        this.host = x; return this
    }

    _httpHeaders: Array<HTTPHeader>;
    get httpHeaders(): Array<HTTPHeader> {
        return this._httpHeaders
    }
    set httpHeaders(x: Array<HTTPHeader>) {
        this._httpHeaders = this.set(this.httpHeaders, x)
    }
    $httpHeaders(x: Array<HTTPHeader>) {
        this.httpHeaders = x; return this
    }

    _path: string;
    get path(): string {
        return this._path
    }
    set path(x: string) {
        this._path = x
    }
    $path(x: string) {
        this.path = x; return this
    }

    _port: number | string;
    get port(): number | string {
        return this._port
    }
    set port(x: number | string) {
        this._port = x
    }
    $port(x: number | string) {
        this.port = x; return this
    }

    _scheme: string;
    get scheme(): string {
        return this._scheme
    }
    set scheme(x: string) {
        this._scheme = x
    }
    $scheme(x: string) {
        this.scheme = x; return this
    }
}

export interface HTTPHeaderHelper extends HTTPHeader {
    $value(x: string): HTTPHeaderHelper;
}

/** HTTPHeader describes a custom header to be used in HTTP probes */
export class HTTPHeaderHelper extends Template implements HTTPHeaderHelper {
    constructor(obj: any) {
        super(obj)
    }

    _value: string;
    get value(): string {
        return this._value
    }
    set value(x: string) {
        this._value = x
    }
    $value(x: string) {
        this.value = x; return this
    }
}

export interface HostAliasHelper extends HostAlias {
    $hostnames(x: Array<string>): HostAliasHelper;
    $ip(x: string): HostAliasHelper;
}

/** HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file. */
export class HostAliasHelper extends Template implements HostAliasHelper {
    constructor(obj: any) {
        super(obj)
    }

    _hostnames: Array<string>;
    get hostnames(): Array<string> {
        return this._hostnames
    }
    set hostnames(x: Array<string>) {
        this._hostnames = this.set(this.hostnames, x)
    }
    $hostnames(x: Array<string>) {
        this.hostnames = x; return this
    }

    _ip: string;
    get ip(): string {
        return this._ip
    }
    set ip(x: string) {
        this._ip = x
    }
    $ip(x: string) {
        this.ip = x; return this
    }
}

export interface HostPathVolumeSourceHelper extends HostPathVolumeSource {
    $path(x: string): HostPathVolumeSourceHelper;
    $type(x: string): HostPathVolumeSourceHelper;
}

/** Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
export class HostPathVolumeSourceHelper extends Template implements HostPathVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _path: string;
    get path(): string {
        return this._path
    }
    set path(x: string) {
        this._path = x
    }
    $path(x: string) {
        this.path = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface ISCSIPersistentVolumeSourceHelper extends ISCSIPersistentVolumeSource {
    $chapAuthDiscovery(x: boolean): ISCSIPersistentVolumeSourceHelper;
    $chapAuthSession(x: boolean): ISCSIPersistentVolumeSourceHelper;
    $fsType(x: string): ISCSIPersistentVolumeSourceHelper;
    $initiatorName(x: string): ISCSIPersistentVolumeSourceHelper;
    $iqn(x: string): ISCSIPersistentVolumeSourceHelper;
    $iscsiInterface(x: string): ISCSIPersistentVolumeSourceHelper;
    $lun(x: number): ISCSIPersistentVolumeSourceHelper;
    $portals(x: Array<string>): ISCSIPersistentVolumeSourceHelper;
    $readOnly(x: boolean): ISCSIPersistentVolumeSourceHelper;
    $secretRef(x: SecretReferenceHelper): ISCSIPersistentVolumeSourceHelper;
    $targetPortal(x: string): ISCSIPersistentVolumeSourceHelper;
}

/** ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
export class ISCSIPersistentVolumeSourceHelper extends Template implements ISCSIPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _chapAuthDiscovery: boolean;
    get chapAuthDiscovery(): boolean {
        return this._chapAuthDiscovery
    }
    set chapAuthDiscovery(x: boolean) {
        this._chapAuthDiscovery = x
    }
    $chapAuthDiscovery(x: boolean) {
        this.chapAuthDiscovery = x; return this
    }

    _chapAuthSession: boolean;
    get chapAuthSession(): boolean {
        return this._chapAuthSession
    }
    set chapAuthSession(x: boolean) {
        this._chapAuthSession = x
    }
    $chapAuthSession(x: boolean) {
        this.chapAuthSession = x; return this
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _initiatorName: string;
    get initiatorName(): string {
        return this._initiatorName
    }
    set initiatorName(x: string) {
        this._initiatorName = x
    }
    $initiatorName(x: string) {
        this.initiatorName = x; return this
    }

    _iqn: string;
    get iqn(): string {
        return this._iqn
    }
    set iqn(x: string) {
        this._iqn = x
    }
    $iqn(x: string) {
        this.iqn = x; return this
    }

    _iscsiInterface: string;
    get iscsiInterface(): string {
        return this._iscsiInterface
    }
    set iscsiInterface(x: string) {
        this._iscsiInterface = x
    }
    $iscsiInterface(x: string) {
        this.iscsiInterface = x; return this
    }

    _lun: number;
    get lun(): number {
        return this._lun
    }
    set lun(x: number) {
        this._lun = x
    }
    $lun(x: number) {
        this.lun = x; return this
    }

    _portals: Array<string>;
    get portals(): Array<string> {
        return this._portals
    }
    set portals(x: Array<string>) {
        this._portals = this.set(this.portals, x)
    }
    $portals(x: Array<string>) {
        this.portals = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _secretRef: SecretReferenceHelper;
    get secretRef(): SecretReferenceHelper {
        return this._secretRef
    }
    set secretRef(x: SecretReferenceHelper) {
        this._secretRef = x
    }
    $secretRef(x: SecretReferenceHelper) {
        this.secretRef = x; return this
    }

    _targetPortal: string;
    get targetPortal(): string {
        return this._targetPortal
    }
    set targetPortal(x: string) {
        this._targetPortal = x
    }
    $targetPortal(x: string) {
        this.targetPortal = x; return this
    }
}

export interface ISCSIVolumeSourceHelper extends ISCSIVolumeSource {
    $chapAuthDiscovery(x: boolean): ISCSIVolumeSourceHelper;
    $chapAuthSession(x: boolean): ISCSIVolumeSourceHelper;
    $fsType(x: string): ISCSIVolumeSourceHelper;
    $initiatorName(x: string): ISCSIVolumeSourceHelper;
    $iqn(x: string): ISCSIVolumeSourceHelper;
    $iscsiInterface(x: string): ISCSIVolumeSourceHelper;
    $lun(x: number): ISCSIVolumeSourceHelper;
    $portals(x: Array<string>): ISCSIVolumeSourceHelper;
    $readOnly(x: boolean): ISCSIVolumeSourceHelper;
    $secretRef(x: LocalObjectReferenceHelper): ISCSIVolumeSourceHelper;
    $targetPortal(x: string): ISCSIVolumeSourceHelper;
}

/** Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
export class ISCSIVolumeSourceHelper extends Template implements ISCSIVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _chapAuthDiscovery: boolean;
    get chapAuthDiscovery(): boolean {
        return this._chapAuthDiscovery
    }
    set chapAuthDiscovery(x: boolean) {
        this._chapAuthDiscovery = x
    }
    $chapAuthDiscovery(x: boolean) {
        this.chapAuthDiscovery = x; return this
    }

    _chapAuthSession: boolean;
    get chapAuthSession(): boolean {
        return this._chapAuthSession
    }
    set chapAuthSession(x: boolean) {
        this._chapAuthSession = x
    }
    $chapAuthSession(x: boolean) {
        this.chapAuthSession = x; return this
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _initiatorName: string;
    get initiatorName(): string {
        return this._initiatorName
    }
    set initiatorName(x: string) {
        this._initiatorName = x
    }
    $initiatorName(x: string) {
        this.initiatorName = x; return this
    }

    _iqn: string;
    get iqn(): string {
        return this._iqn
    }
    set iqn(x: string) {
        this._iqn = x
    }
    $iqn(x: string) {
        this.iqn = x; return this
    }

    _iscsiInterface: string;
    get iscsiInterface(): string {
        return this._iscsiInterface
    }
    set iscsiInterface(x: string) {
        this._iscsiInterface = x
    }
    $iscsiInterface(x: string) {
        this.iscsiInterface = x; return this
    }

    _lun: number;
    get lun(): number {
        return this._lun
    }
    set lun(x: number) {
        this._lun = x
    }
    $lun(x: number) {
        this.lun = x; return this
    }

    _portals: Array<string>;
    get portals(): Array<string> {
        return this._portals
    }
    set portals(x: Array<string>) {
        this._portals = this.set(this.portals, x)
    }
    $portals(x: Array<string>) {
        this.portals = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _secretRef: LocalObjectReferenceHelper;
    get secretRef(): LocalObjectReferenceHelper {
        return this._secretRef
    }
    set secretRef(x: LocalObjectReferenceHelper) {
        this._secretRef = x
    }
    $secretRef(x: LocalObjectReferenceHelper) {
        this.secretRef = x; return this
    }

    _targetPortal: string;
    get targetPortal(): string {
        return this._targetPortal
    }
    set targetPortal(x: string) {
        this._targetPortal = x
    }
    $targetPortal(x: string) {
        this.targetPortal = x; return this
    }
}

export interface KeyToPathHelper extends KeyToPath {
    $key(x: string): KeyToPathHelper;
    $mode(x: number): KeyToPathHelper;
    $path(x: string): KeyToPathHelper;
}

/** Maps a string key to a path within a volume. */
export class KeyToPathHelper extends Template implements KeyToPathHelper {
    constructor(obj: any) {
        super(obj)
    }

    _key: string;
    get key(): string {
        return this._key
    }
    set key(x: string) {
        this._key = x
    }
    $key(x: string) {
        this.key = x; return this
    }

    _mode: number;
    get mode(): number {
        return this._mode
    }
    set mode(x: number) {
        this._mode = x
    }
    $mode(x: number) {
        this.mode = x; return this
    }

    _path: string;
    get path(): string {
        return this._path
    }
    set path(x: string) {
        this._path = x
    }
    $path(x: string) {
        this.path = x; return this
    }
}

export interface LifecycleHelper extends Lifecycle {
    $postStart(x: LifecycleHandlerHelper): LifecycleHelper;
    $preStop(x: LifecycleHandlerHelper): LifecycleHelper;
}

/** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
export class LifecycleHelper extends Template implements LifecycleHelper {
    constructor(obj: any) {
        super(obj)
    }

    _postStart: LifecycleHandlerHelper;
    get postStart(): LifecycleHandlerHelper {
        return this._postStart
    }
    set postStart(x: LifecycleHandlerHelper) {
        this._postStart = x
    }
    $postStart(x: LifecycleHandlerHelper) {
        this.postStart = x; return this
    }

    _preStop: LifecycleHandlerHelper;
    get preStop(): LifecycleHandlerHelper {
        return this._preStop
    }
    set preStop(x: LifecycleHandlerHelper) {
        this._preStop = x
    }
    $preStop(x: LifecycleHandlerHelper) {
        this.preStop = x; return this
    }
}

export interface LifecycleHandlerHelper extends LifecycleHandler {
    $exec(x: ExecActionHelper): LifecycleHandlerHelper;
    $httpGet(x: HTTPGetActionHelper): LifecycleHandlerHelper;
    $tcpSocket(x: TCPSocketActionHelper): LifecycleHandlerHelper;
}

/** LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified. */
export class LifecycleHandlerHelper extends Template implements LifecycleHandlerHelper {
    constructor(obj: any) {
        super(obj)
    }

    _exec: ExecActionHelper;
    get exec(): ExecActionHelper {
        return this._exec
    }
    set exec(x: ExecActionHelper) {
        this._exec = x
    }
    $exec(x: ExecActionHelper) {
        this.exec = x; return this
    }

    _httpGet: HTTPGetActionHelper;
    get httpGet(): HTTPGetActionHelper {
        return this._httpGet
    }
    set httpGet(x: HTTPGetActionHelper) {
        this._httpGet = x
    }
    $httpGet(x: HTTPGetActionHelper) {
        this.httpGet = x; return this
    }

    _tcpSocket: TCPSocketActionHelper;
    get tcpSocket(): TCPSocketActionHelper {
        return this._tcpSocket
    }
    set tcpSocket(x: TCPSocketActionHelper) {
        this._tcpSocket = x
    }
    $tcpSocket(x: TCPSocketActionHelper) {
        this.tcpSocket = x; return this
    }
}

export interface LimitRangeHelper extends LimitRange {
    $metadata(x: ObjectMetaHelper): LimitRangeHelper;
    $spec(x: LimitRangeSpecHelper): LimitRangeHelper;
}

/** LimitRange sets resource usage limits for each kind of resource in a Namespace. */
export class LimitRangeHelper extends ResourceTemplate implements LimitRangeHelper {
    static kind = 'LimitRange';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, LimitRangeHelper.kind, LimitRangeHelper.apiVersion)
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

    _spec: LimitRangeSpecHelper;
    get spec(): LimitRangeSpecHelper {
        return this._spec
    }
    set spec(x: LimitRangeSpecHelper) {
        this._spec = x
    }
    $spec(x: LimitRangeSpecHelper) {
        this.spec = x; return this
    }
}

export interface LimitRangeItemHelper extends LimitRangeItem {
    $default_(x: {[name: string]: Quantity}): LimitRangeItemHelper;
    $defaultRequest(x: {[name: string]: Quantity}): LimitRangeItemHelper;
    $max(x: {[name: string]: Quantity}): LimitRangeItemHelper;
    $maxLimitRequestRatio(x: {[name: string]: Quantity}): LimitRangeItemHelper;
    $min(x: {[name: string]: Quantity}): LimitRangeItemHelper;
    $type(x: string): LimitRangeItemHelper;
}

/** LimitRangeItem defines a min/max usage limit for any resource that matches on kind. */
export class LimitRangeItemHelper extends Template implements LimitRangeItemHelper {
    constructor(obj: any) {
        super(obj)
    }

    _default_: {[name: string]: Quantity};
    get default_(): {[name: string]: Quantity} {
        return this._default_
    }
    set default_(x: {[name: string]: Quantity}) {
        this._default_ = this.set(this.default_, x)
    }
    $default_(x: {[name: string]: Quantity}) {
        this.default_ = x; return this
    }

    _defaultRequest: {[name: string]: Quantity};
    get defaultRequest(): {[name: string]: Quantity} {
        return this._defaultRequest
    }
    set defaultRequest(x: {[name: string]: Quantity}) {
        this._defaultRequest = this.set(this.defaultRequest, x)
    }
    $defaultRequest(x: {[name: string]: Quantity}) {
        this.defaultRequest = x; return this
    }

    _max: {[name: string]: Quantity};
    get max(): {[name: string]: Quantity} {
        return this._max
    }
    set max(x: {[name: string]: Quantity}) {
        this._max = this.set(this.max, x)
    }
    $max(x: {[name: string]: Quantity}) {
        this.max = x; return this
    }

    _maxLimitRequestRatio: {[name: string]: Quantity};
    get maxLimitRequestRatio(): {[name: string]: Quantity} {
        return this._maxLimitRequestRatio
    }
    set maxLimitRequestRatio(x: {[name: string]: Quantity}) {
        this._maxLimitRequestRatio = this.set(this.maxLimitRequestRatio, x)
    }
    $maxLimitRequestRatio(x: {[name: string]: Quantity}) {
        this.maxLimitRequestRatio = x; return this
    }

    _min: {[name: string]: Quantity};
    get min(): {[name: string]: Quantity} {
        return this._min
    }
    set min(x: {[name: string]: Quantity}) {
        this._min = this.set(this.min, x)
    }
    $min(x: {[name: string]: Quantity}) {
        this.min = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface LimitRangeListHelper extends LimitRangeList {
    $items(x: Array<LimitRange>): LimitRangeListHelper;
    $metadata(x: ListMetaHelper): LimitRangeListHelper;
}

/** LimitRangeList is a list of LimitRange items. */
export class LimitRangeListHelper extends ResourceTemplate implements LimitRangeListHelper {
    static kind = 'LimitRangeList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, LimitRangeListHelper.kind, LimitRangeListHelper.apiVersion)
    }

    _items: Array<LimitRange>;
    get items(): Array<LimitRange> {
        return this._items
    }
    set items(x: Array<LimitRange>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<LimitRange>) {
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

export interface LimitRangeSpecHelper extends LimitRangeSpec {
    $limits(x: Array<LimitRangeItem>): LimitRangeSpecHelper;
}

/** LimitRangeSpec defines a min/max usage limit for resources that match on kind. */
export class LimitRangeSpecHelper extends Template implements LimitRangeSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _limits: Array<LimitRangeItem>;
    get limits(): Array<LimitRangeItem> {
        return this._limits
    }
    set limits(x: Array<LimitRangeItem>) {
        this._limits = this.set(this.limits, x)
    }
    $limits(x: Array<LimitRangeItem>) {
        this.limits = x; return this
    }
}

export interface LoadBalancerIngressHelper extends LoadBalancerIngress {
    $hostname(x: string): LoadBalancerIngressHelper;
    $ip(x: string): LoadBalancerIngressHelper;
    $ports(x: Array<PortStatus>): LoadBalancerIngressHelper;
}

/** LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point. */
export class LoadBalancerIngressHelper extends Template implements LoadBalancerIngressHelper {
    constructor(obj: any) {
        super(obj)
    }

    _hostname: string;
    get hostname(): string {
        return this._hostname
    }
    set hostname(x: string) {
        this._hostname = x
    }
    $hostname(x: string) {
        this.hostname = x; return this
    }

    _ip: string;
    get ip(): string {
        return this._ip
    }
    set ip(x: string) {
        this._ip = x
    }
    $ip(x: string) {
        this.ip = x; return this
    }

    _ports: Array<PortStatus>;
    get ports(): Array<PortStatus> {
        return this._ports
    }
    set ports(x: Array<PortStatus>) {
        this._ports = this.set(this.ports, x)
    }
    $ports(x: Array<PortStatus>) {
        this.ports = x; return this
    }
}

export interface LoadBalancerStatusHelper extends LoadBalancerStatus {
    $ingress(x: Array<LoadBalancerIngress>): LoadBalancerStatusHelper;
}

/** LoadBalancerStatus represents the status of a load-balancer. */
export class LoadBalancerStatusHelper extends Template implements LoadBalancerStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ingress: Array<LoadBalancerIngress>;
    get ingress(): Array<LoadBalancerIngress> {
        return this._ingress
    }
    set ingress(x: Array<LoadBalancerIngress>) {
        this._ingress = this.set(this.ingress, x)
    }
    $ingress(x: Array<LoadBalancerIngress>) {
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
    $fsType(x: string): LocalVolumeSourceHelper;
    $path(x: string): LocalVolumeSourceHelper;
}

/** Local represents directly-attached storage with node affinity (Beta feature) */
export class LocalVolumeSourceHelper extends Template implements LocalVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _path: string;
    get path(): string {
        return this._path
    }
    set path(x: string) {
        this._path = x
    }
    $path(x: string) {
        this.path = x; return this
    }
}

export interface NFSVolumeSourceHelper extends NFSVolumeSource {
    $path(x: string): NFSVolumeSourceHelper;
    $readOnly(x: boolean): NFSVolumeSourceHelper;
    $server(x: string): NFSVolumeSourceHelper;
}

/** Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
export class NFSVolumeSourceHelper extends Template implements NFSVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _path: string;
    get path(): string {
        return this._path
    }
    set path(x: string) {
        this._path = x
    }
    $path(x: string) {
        this.path = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _server: string;
    get server(): string {
        return this._server
    }
    set server(x: string) {
        this._server = x
    }
    $server(x: string) {
        this.server = x; return this
    }
}

export interface NamespaceHelper extends Namespace {
    $metadata(x: ObjectMetaHelper): NamespaceHelper;
    $spec(x: NamespaceSpecHelper): NamespaceHelper;
    $status(x: NamespaceStatusHelper): NamespaceHelper;
}

/** Namespace provides a scope for Names. Use of multiple namespaces is optional. */
export class NamespaceHelper extends ResourceTemplate implements NamespaceHelper {
    static kind = 'Namespace';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, NamespaceHelper.kind, NamespaceHelper.apiVersion)
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

    _spec: NamespaceSpecHelper;
    get spec(): NamespaceSpecHelper {
        return this._spec
    }
    set spec(x: NamespaceSpecHelper) {
        this._spec = x
    }
    $spec(x: NamespaceSpecHelper) {
        this.spec = x; return this
    }

    _status: NamespaceStatusHelper;
    get status(): NamespaceStatusHelper {
        return this._status
    }
    set status(x: NamespaceStatusHelper) {
        this._status = x
    }
    $status(x: NamespaceStatusHelper) {
        this.status = x; return this
    }
}

export interface NamespaceConditionHelper extends NamespaceCondition {
    $lastTransitionTime(x: Time): NamespaceConditionHelper;
    $message(x: string): NamespaceConditionHelper;
    $reason(x: string): NamespaceConditionHelper;
    $status(x: string): NamespaceConditionHelper;
    $type(x: string): NamespaceConditionHelper;
}

/** NamespaceCondition contains details about state of namespace. */
export class NamespaceConditionHelper extends Template implements NamespaceConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastTransitionTime: Time;
    get lastTransitionTime(): Time {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: Time) {
        this._lastTransitionTime = x
    }
    $lastTransitionTime(x: Time) {
        this.lastTransitionTime = x; return this
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

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $reason(x: string) {
        this.reason = x; return this
    }

    _status: string;
    get status(): string {
        return this._status
    }
    set status(x: string) {
        this._status = x
    }
    $status(x: string) {
        this.status = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface NamespaceListHelper extends NamespaceList {
    $items(x: Array<Namespace>): NamespaceListHelper;
    $metadata(x: ListMetaHelper): NamespaceListHelper;
}

/** NamespaceList is a list of Namespaces. */
export class NamespaceListHelper extends ResourceTemplate implements NamespaceListHelper {
    static kind = 'NamespaceList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, NamespaceListHelper.kind, NamespaceListHelper.apiVersion)
    }

    _items: Array<Namespace>;
    get items(): Array<Namespace> {
        return this._items
    }
    set items(x: Array<Namespace>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<Namespace>) {
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

export interface NamespaceSpecHelper extends NamespaceSpec {
    $finalizers(x: Array<string>): NamespaceSpecHelper;
}

/** NamespaceSpec describes the attributes on a Namespace. */
export class NamespaceSpecHelper extends Template implements NamespaceSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _finalizers: Array<string>;
    get finalizers(): Array<string> {
        return this._finalizers
    }
    set finalizers(x: Array<string>) {
        this._finalizers = this.set(this.finalizers, x)
    }
    $finalizers(x: Array<string>) {
        this.finalizers = x; return this
    }
}

export interface NamespaceStatusHelper extends NamespaceStatus {
    $conditions(x: Array<NamespaceCondition>): NamespaceStatusHelper;
    $phase(x: string): NamespaceStatusHelper;
}

/** NamespaceStatus is information about the current status of a Namespace. */
export class NamespaceStatusHelper extends Template implements NamespaceStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conditions: Array<NamespaceCondition>;
    get conditions(): Array<NamespaceCondition> {
        return this._conditions
    }
    set conditions(x: Array<NamespaceCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $conditions(x: Array<NamespaceCondition>) {
        this.conditions = x; return this
    }

    _phase: string;
    get phase(): string {
        return this._phase
    }
    set phase(x: string) {
        this._phase = x
    }
    $phase(x: string) {
        this.phase = x; return this
    }
}

export interface NodeHelper extends Node {
    $metadata(x: ObjectMetaHelper): NodeHelper;
    $spec(x: NodeSpecHelper): NodeHelper;
    $status(x: NodeStatusHelper): NodeHelper;
}

/** Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd). */
export class NodeHelper extends ResourceTemplate implements NodeHelper {
    static kind = 'Node';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, NodeHelper.kind, NodeHelper.apiVersion)
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

    _spec: NodeSpecHelper;
    get spec(): NodeSpecHelper {
        return this._spec
    }
    set spec(x: NodeSpecHelper) {
        this._spec = x
    }
    $spec(x: NodeSpecHelper) {
        this.spec = x; return this
    }

    _status: NodeStatusHelper;
    get status(): NodeStatusHelper {
        return this._status
    }
    set status(x: NodeStatusHelper) {
        this._status = x
    }
    $status(x: NodeStatusHelper) {
        this.status = x; return this
    }
}

export interface NodeAddressHelper extends NodeAddress {
    $address(x: string): NodeAddressHelper;
    $type(x: string): NodeAddressHelper;
}

/** NodeAddress contains information for the node's address. */
export class NodeAddressHelper extends Template implements NodeAddressHelper {
    constructor(obj: any) {
        super(obj)
    }

    _address: string;
    get address(): string {
        return this._address
    }
    set address(x: string) {
        this._address = x
    }
    $address(x: string) {
        this.address = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface NodeAffinityHelper extends NodeAffinity {
    $preferredDuringSchedulingIgnoredDuringExecution(x: Array<PreferredSchedulingTerm>): NodeAffinityHelper;
    $requiredDuringSchedulingIgnoredDuringExecution(x: NodeSelectorHelper): NodeAffinityHelper;
}

/** Node affinity is a group of node affinity scheduling rules. */
export class NodeAffinityHelper extends Template implements NodeAffinityHelper {
    constructor(obj: any) {
        super(obj)
    }

    _preferredDuringSchedulingIgnoredDuringExecution: Array<PreferredSchedulingTerm>;
    get preferredDuringSchedulingIgnoredDuringExecution(): Array<PreferredSchedulingTerm> {
        return this._preferredDuringSchedulingIgnoredDuringExecution
    }
    set preferredDuringSchedulingIgnoredDuringExecution(x: Array<PreferredSchedulingTerm>) {
        this._preferredDuringSchedulingIgnoredDuringExecution = this.set(this.preferredDuringSchedulingIgnoredDuringExecution, x)
    }
    $preferredDuringSchedulingIgnoredDuringExecution(x: Array<PreferredSchedulingTerm>) {
        this.preferredDuringSchedulingIgnoredDuringExecution = x; return this
    }

    _requiredDuringSchedulingIgnoredDuringExecution: NodeSelectorHelper;
    get requiredDuringSchedulingIgnoredDuringExecution(): NodeSelectorHelper {
        return this._requiredDuringSchedulingIgnoredDuringExecution
    }
    set requiredDuringSchedulingIgnoredDuringExecution(x: NodeSelectorHelper) {
        this._requiredDuringSchedulingIgnoredDuringExecution = x
    }
    $requiredDuringSchedulingIgnoredDuringExecution(x: NodeSelectorHelper) {
        this.requiredDuringSchedulingIgnoredDuringExecution = x; return this
    }
}

export interface NodeConditionHelper extends NodeCondition {
    $lastHeartbeatTime(x: Time): NodeConditionHelper;
    $lastTransitionTime(x: Time): NodeConditionHelper;
    $message(x: string): NodeConditionHelper;
    $reason(x: string): NodeConditionHelper;
    $status(x: string): NodeConditionHelper;
    $type(x: string): NodeConditionHelper;
}

/** NodeCondition contains condition information for a node. */
export class NodeConditionHelper extends Template implements NodeConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastHeartbeatTime: Time;
    get lastHeartbeatTime(): Time {
        return this._lastHeartbeatTime
    }
    set lastHeartbeatTime(x: Time) {
        this._lastHeartbeatTime = x
    }
    $lastHeartbeatTime(x: Time) {
        this.lastHeartbeatTime = x; return this
    }

    _lastTransitionTime: Time;
    get lastTransitionTime(): Time {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: Time) {
        this._lastTransitionTime = x
    }
    $lastTransitionTime(x: Time) {
        this.lastTransitionTime = x; return this
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

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $reason(x: string) {
        this.reason = x; return this
    }

    _status: string;
    get status(): string {
        return this._status
    }
    set status(x: string) {
        this._status = x
    }
    $status(x: string) {
        this.status = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface NodeConfigSourceHelper extends NodeConfigSource {
    $configMap(x: ConfigMapNodeConfigSourceHelper): NodeConfigSourceHelper;
}

/** NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22 */
export class NodeConfigSourceHelper extends Template implements NodeConfigSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _configMap: ConfigMapNodeConfigSourceHelper;
    get configMap(): ConfigMapNodeConfigSourceHelper {
        return this._configMap
    }
    set configMap(x: ConfigMapNodeConfigSourceHelper) {
        this._configMap = x
    }
    $configMap(x: ConfigMapNodeConfigSourceHelper) {
        this.configMap = x; return this
    }
}

export interface NodeConfigStatusHelper extends NodeConfigStatus {
    $active(x: NodeConfigSourceHelper): NodeConfigStatusHelper;
    $assigned(x: NodeConfigSourceHelper): NodeConfigStatusHelper;
    $error(x: string): NodeConfigStatusHelper;
    $lastKnownGood(x: NodeConfigSourceHelper): NodeConfigStatusHelper;
}

/** NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource. */
export class NodeConfigStatusHelper extends Template implements NodeConfigStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _active: NodeConfigSourceHelper;
    get active(): NodeConfigSourceHelper {
        return this._active
    }
    set active(x: NodeConfigSourceHelper) {
        this._active = x
    }
    $active(x: NodeConfigSourceHelper) {
        this.active = x; return this
    }

    _assigned: NodeConfigSourceHelper;
    get assigned(): NodeConfigSourceHelper {
        return this._assigned
    }
    set assigned(x: NodeConfigSourceHelper) {
        this._assigned = x
    }
    $assigned(x: NodeConfigSourceHelper) {
        this.assigned = x; return this
    }

    _error: string;
    get error(): string {
        return this._error
    }
    set error(x: string) {
        this._error = x
    }
    $error(x: string) {
        this.error = x; return this
    }

    _lastKnownGood: NodeConfigSourceHelper;
    get lastKnownGood(): NodeConfigSourceHelper {
        return this._lastKnownGood
    }
    set lastKnownGood(x: NodeConfigSourceHelper) {
        this._lastKnownGood = x
    }
    $lastKnownGood(x: NodeConfigSourceHelper) {
        this.lastKnownGood = x; return this
    }
}

export interface NodeDaemonEndpointsHelper extends NodeDaemonEndpoints {
    $kubeletEndpoint(x: DaemonEndpointHelper): NodeDaemonEndpointsHelper;
}

/** NodeDaemonEndpoints lists ports opened by daemons running on the Node. */
export class NodeDaemonEndpointsHelper extends Template implements NodeDaemonEndpointsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _kubeletEndpoint: DaemonEndpointHelper;
    get kubeletEndpoint(): DaemonEndpointHelper {
        return this._kubeletEndpoint
    }
    set kubeletEndpoint(x: DaemonEndpointHelper) {
        this._kubeletEndpoint = x
    }
    $kubeletEndpoint(x: DaemonEndpointHelper) {
        this.kubeletEndpoint = x; return this
    }
}

export interface NodeListHelper extends NodeList {
    $items(x: Array<Node>): NodeListHelper;
    $metadata(x: ListMetaHelper): NodeListHelper;
}

/** NodeList is the whole list of all Nodes which have been registered with master. */
export class NodeListHelper extends ResourceTemplate implements NodeListHelper {
    static kind = 'NodeList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, NodeListHelper.kind, NodeListHelper.apiVersion)
    }

    _items: Array<Node>;
    get items(): Array<Node> {
        return this._items
    }
    set items(x: Array<Node>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<Node>) {
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

export interface NodeSelectorHelper extends NodeSelector {
    $nodeSelectorTerms(x: Array<NodeSelectorTerm>): NodeSelectorHelper;
}

/** A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
export class NodeSelectorHelper extends Template implements NodeSelectorHelper {
    constructor(obj: any) {
        super(obj)
    }

    _nodeSelectorTerms: Array<NodeSelectorTerm>;
    get nodeSelectorTerms(): Array<NodeSelectorTerm> {
        return this._nodeSelectorTerms
    }
    set nodeSelectorTerms(x: Array<NodeSelectorTerm>) {
        this._nodeSelectorTerms = this.set(this.nodeSelectorTerms, x)
    }
    $nodeSelectorTerms(x: Array<NodeSelectorTerm>) {
        this.nodeSelectorTerms = x; return this
    }
}

export interface NodeSelectorRequirementHelper extends NodeSelectorRequirement {
    $key(x: string): NodeSelectorRequirementHelper;
    $operator(x: string): NodeSelectorRequirementHelper;
    $values(x: Array<string>): NodeSelectorRequirementHelper;
}

/** A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export class NodeSelectorRequirementHelper extends Template implements NodeSelectorRequirementHelper {
    constructor(obj: any) {
        super(obj)
    }

    _key: string;
    get key(): string {
        return this._key
    }
    set key(x: string) {
        this._key = x
    }
    $key(x: string) {
        this.key = x; return this
    }

    _operator: string;
    get operator(): string {
        return this._operator
    }
    set operator(x: string) {
        this._operator = x
    }
    $operator(x: string) {
        this.operator = x; return this
    }

    _values: Array<string>;
    get values(): Array<string> {
        return this._values
    }
    set values(x: Array<string>) {
        this._values = this.set(this.values, x)
    }
    $values(x: Array<string>) {
        this.values = x; return this
    }
}

export interface NodeSelectorTermHelper extends NodeSelectorTerm {
    $matchExpressions(x: Array<NodeSelectorRequirement>): NodeSelectorTermHelper;
    $matchFields(x: Array<NodeSelectorRequirement>): NodeSelectorTermHelper;
}

/** A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
export class NodeSelectorTermHelper extends Template implements NodeSelectorTermHelper {
    constructor(obj: any) {
        super(obj)
    }

    _matchExpressions: Array<NodeSelectorRequirement>;
    get matchExpressions(): Array<NodeSelectorRequirement> {
        return this._matchExpressions
    }
    set matchExpressions(x: Array<NodeSelectorRequirement>) {
        this._matchExpressions = this.set(this.matchExpressions, x)
    }
    $matchExpressions(x: Array<NodeSelectorRequirement>) {
        this.matchExpressions = x; return this
    }

    _matchFields: Array<NodeSelectorRequirement>;
    get matchFields(): Array<NodeSelectorRequirement> {
        return this._matchFields
    }
    set matchFields(x: Array<NodeSelectorRequirement>) {
        this._matchFields = this.set(this.matchFields, x)
    }
    $matchFields(x: Array<NodeSelectorRequirement>) {
        this.matchFields = x; return this
    }
}

export interface NodeSpecHelper extends NodeSpec {
    $configSource(x: NodeConfigSourceHelper): NodeSpecHelper;
    $externalID(x: string): NodeSpecHelper;
    $podCIDR(x: string): NodeSpecHelper;
    $podCIDRs(x: Array<string>): NodeSpecHelper;
    $providerID(x: string): NodeSpecHelper;
    $taints(x: Array<Taint>): NodeSpecHelper;
    $unschedulable(x: boolean): NodeSpecHelper;
}

/** NodeSpec describes the attributes that a node is created with. */
export class NodeSpecHelper extends Template implements NodeSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _configSource: NodeConfigSourceHelper;
    get configSource(): NodeConfigSourceHelper {
        return this._configSource
    }
    set configSource(x: NodeConfigSourceHelper) {
        this._configSource = x
    }
    $configSource(x: NodeConfigSourceHelper) {
        this.configSource = x; return this
    }

    _externalID: string;
    get externalID(): string {
        return this._externalID
    }
    set externalID(x: string) {
        this._externalID = x
    }
    $externalID(x: string) {
        this.externalID = x; return this
    }

    _podCIDR: string;
    get podCIDR(): string {
        return this._podCIDR
    }
    set podCIDR(x: string) {
        this._podCIDR = x
    }
    $podCIDR(x: string) {
        this.podCIDR = x; return this
    }

    _podCIDRs: Array<string>;
    get podCIDRs(): Array<string> {
        return this._podCIDRs
    }
    set podCIDRs(x: Array<string>) {
        this._podCIDRs = this.set(this.podCIDRs, x)
    }
    $podCIDRs(x: Array<string>) {
        this.podCIDRs = x; return this
    }

    _providerID: string;
    get providerID(): string {
        return this._providerID
    }
    set providerID(x: string) {
        this._providerID = x
    }
    $providerID(x: string) {
        this.providerID = x; return this
    }

    _taints: Array<Taint>;
    get taints(): Array<Taint> {
        return this._taints
    }
    set taints(x: Array<Taint>) {
        this._taints = this.set(this.taints, x)
    }
    $taints(x: Array<Taint>) {
        this.taints = x; return this
    }

    _unschedulable: boolean;
    get unschedulable(): boolean {
        return this._unschedulable
    }
    set unschedulable(x: boolean) {
        this._unschedulable = x
    }
    $unschedulable(x: boolean) {
        this.unschedulable = x; return this
    }
}

export interface NodeStatusHelper extends NodeStatus {
    $addresses(x: Array<NodeAddress>): NodeStatusHelper;
    $allocatable(x: {[name: string]: Quantity}): NodeStatusHelper;
    $capacity(x: {[name: string]: Quantity}): NodeStatusHelper;
    $conditions(x: Array<NodeCondition>): NodeStatusHelper;
    $config(x: NodeConfigStatusHelper): NodeStatusHelper;
    $daemonEndpoints(x: NodeDaemonEndpointsHelper): NodeStatusHelper;
    $images(x: Array<ContainerImage>): NodeStatusHelper;
    $nodeInfo(x: NodeSystemInfoHelper): NodeStatusHelper;
    $phase(x: string): NodeStatusHelper;
    $volumesAttached(x: Array<AttachedVolume>): NodeStatusHelper;
    $volumesInUse(x: Array<string>): NodeStatusHelper;
}

/** NodeStatus is information about the current status of a node. */
export class NodeStatusHelper extends Template implements NodeStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _addresses: Array<NodeAddress>;
    get addresses(): Array<NodeAddress> {
        return this._addresses
    }
    set addresses(x: Array<NodeAddress>) {
        this._addresses = this.set(this.addresses, x)
    }
    $addresses(x: Array<NodeAddress>) {
        this.addresses = x; return this
    }

    _allocatable: {[name: string]: Quantity};
    get allocatable(): {[name: string]: Quantity} {
        return this._allocatable
    }
    set allocatable(x: {[name: string]: Quantity}) {
        this._allocatable = this.set(this.allocatable, x)
    }
    $allocatable(x: {[name: string]: Quantity}) {
        this.allocatable = x; return this
    }

    _capacity: {[name: string]: Quantity};
    get capacity(): {[name: string]: Quantity} {
        return this._capacity
    }
    set capacity(x: {[name: string]: Quantity}) {
        this._capacity = this.set(this.capacity, x)
    }
    $capacity(x: {[name: string]: Quantity}) {
        this.capacity = x; return this
    }

    _conditions: Array<NodeCondition>;
    get conditions(): Array<NodeCondition> {
        return this._conditions
    }
    set conditions(x: Array<NodeCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $conditions(x: Array<NodeCondition>) {
        this.conditions = x; return this
    }

    _config: NodeConfigStatusHelper;
    get config(): NodeConfigStatusHelper {
        return this._config
    }
    set config(x: NodeConfigStatusHelper) {
        this._config = x
    }
    $config(x: NodeConfigStatusHelper) {
        this.config = x; return this
    }

    _daemonEndpoints: NodeDaemonEndpointsHelper;
    get daemonEndpoints(): NodeDaemonEndpointsHelper {
        return this._daemonEndpoints
    }
    set daemonEndpoints(x: NodeDaemonEndpointsHelper) {
        this._daemonEndpoints = x
    }
    $daemonEndpoints(x: NodeDaemonEndpointsHelper) {
        this.daemonEndpoints = x; return this
    }

    _images: Array<ContainerImage>;
    get images(): Array<ContainerImage> {
        return this._images
    }
    set images(x: Array<ContainerImage>) {
        this._images = this.set(this.images, x)
    }
    $images(x: Array<ContainerImage>) {
        this.images = x; return this
    }

    _nodeInfo: NodeSystemInfoHelper;
    get nodeInfo(): NodeSystemInfoHelper {
        return this._nodeInfo
    }
    set nodeInfo(x: NodeSystemInfoHelper) {
        this._nodeInfo = x
    }
    $nodeInfo(x: NodeSystemInfoHelper) {
        this.nodeInfo = x; return this
    }

    _phase: string;
    get phase(): string {
        return this._phase
    }
    set phase(x: string) {
        this._phase = x
    }
    $phase(x: string) {
        this.phase = x; return this
    }

    _volumesAttached: Array<AttachedVolume>;
    get volumesAttached(): Array<AttachedVolume> {
        return this._volumesAttached
    }
    set volumesAttached(x: Array<AttachedVolume>) {
        this._volumesAttached = this.set(this.volumesAttached, x)
    }
    $volumesAttached(x: Array<AttachedVolume>) {
        this.volumesAttached = x; return this
    }

    _volumesInUse: Array<string>;
    get volumesInUse(): Array<string> {
        return this._volumesInUse
    }
    set volumesInUse(x: Array<string>) {
        this._volumesInUse = this.set(this.volumesInUse, x)
    }
    $volumesInUse(x: Array<string>) {
        this.volumesInUse = x; return this
    }
}

export interface NodeSystemInfoHelper extends NodeSystemInfo {
    $architecture(x: string): NodeSystemInfoHelper;
    $bootID(x: string): NodeSystemInfoHelper;
    $containerRuntimeVersion(x: string): NodeSystemInfoHelper;
    $kernelVersion(x: string): NodeSystemInfoHelper;
    $kubeProxyVersion(x: string): NodeSystemInfoHelper;
    $kubeletVersion(x: string): NodeSystemInfoHelper;
    $machineID(x: string): NodeSystemInfoHelper;
    $operatingSystem(x: string): NodeSystemInfoHelper;
    $osImage(x: string): NodeSystemInfoHelper;
    $systemUUID(x: string): NodeSystemInfoHelper;
}

/** NodeSystemInfo is a set of ids/uuids to uniquely identify the node. */
export class NodeSystemInfoHelper extends Template implements NodeSystemInfoHelper {
    constructor(obj: any) {
        super(obj)
    }

    _architecture: string;
    get architecture(): string {
        return this._architecture
    }
    set architecture(x: string) {
        this._architecture = x
    }
    $architecture(x: string) {
        this.architecture = x; return this
    }

    _bootID: string;
    get bootID(): string {
        return this._bootID
    }
    set bootID(x: string) {
        this._bootID = x
    }
    $bootID(x: string) {
        this.bootID = x; return this
    }

    _containerRuntimeVersion: string;
    get containerRuntimeVersion(): string {
        return this._containerRuntimeVersion
    }
    set containerRuntimeVersion(x: string) {
        this._containerRuntimeVersion = x
    }
    $containerRuntimeVersion(x: string) {
        this.containerRuntimeVersion = x; return this
    }

    _kernelVersion: string;
    get kernelVersion(): string {
        return this._kernelVersion
    }
    set kernelVersion(x: string) {
        this._kernelVersion = x
    }
    $kernelVersion(x: string) {
        this.kernelVersion = x; return this
    }

    _kubeProxyVersion: string;
    get kubeProxyVersion(): string {
        return this._kubeProxyVersion
    }
    set kubeProxyVersion(x: string) {
        this._kubeProxyVersion = x
    }
    $kubeProxyVersion(x: string) {
        this.kubeProxyVersion = x; return this
    }

    _kubeletVersion: string;
    get kubeletVersion(): string {
        return this._kubeletVersion
    }
    set kubeletVersion(x: string) {
        this._kubeletVersion = x
    }
    $kubeletVersion(x: string) {
        this.kubeletVersion = x; return this
    }

    _machineID: string;
    get machineID(): string {
        return this._machineID
    }
    set machineID(x: string) {
        this._machineID = x
    }
    $machineID(x: string) {
        this.machineID = x; return this
    }

    _operatingSystem: string;
    get operatingSystem(): string {
        return this._operatingSystem
    }
    set operatingSystem(x: string) {
        this._operatingSystem = x
    }
    $operatingSystem(x: string) {
        this.operatingSystem = x; return this
    }

    _osImage: string;
    get osImage(): string {
        return this._osImage
    }
    set osImage(x: string) {
        this._osImage = x
    }
    $osImage(x: string) {
        this.osImage = x; return this
    }

    _systemUUID: string;
    get systemUUID(): string {
        return this._systemUUID
    }
    set systemUUID(x: string) {
        this._systemUUID = x
    }
    $systemUUID(x: string) {
        this.systemUUID = x; return this
    }
}

export interface ObjectFieldSelectorHelper extends ObjectFieldSelector {
    $fieldPath(x: string): ObjectFieldSelectorHelper;
}

/** ObjectFieldSelector selects an APIVersioned field of an object. */
export class ObjectFieldSelectorHelper extends Template implements ObjectFieldSelectorHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fieldPath: string;
    get fieldPath(): string {
        return this._fieldPath
    }
    set fieldPath(x: string) {
        this._fieldPath = x
    }
    $fieldPath(x: string) {
        this.fieldPath = x; return this
    }
}

export interface ObjectReferenceHelper extends ObjectReference {
    $fieldPath(x: string): ObjectReferenceHelper;
    $resourceVersion(x: string): ObjectReferenceHelper;
    $uid(x: string): ObjectReferenceHelper;
}

/** ObjectReference contains enough information to let you inspect or modify the referred object. */
export class ObjectReferenceHelper extends Template implements ObjectReferenceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fieldPath: string;
    get fieldPath(): string {
        return this._fieldPath
    }
    set fieldPath(x: string) {
        this._fieldPath = x
    }
    $fieldPath(x: string) {
        this.fieldPath = x; return this
    }

    _resourceVersion: string;
    get resourceVersion(): string {
        return this._resourceVersion
    }
    set resourceVersion(x: string) {
        this._resourceVersion = x
    }
    $resourceVersion(x: string) {
        this.resourceVersion = x; return this
    }

    _uid: string;
    get uid(): string {
        return this._uid
    }
    set uid(x: string) {
        this._uid = x
    }
    $uid(x: string) {
        this.uid = x; return this
    }
}

export interface PersistentVolumeHelper extends PersistentVolume {
    $metadata(x: ObjectMetaHelper): PersistentVolumeHelper;
    $spec(x: PersistentVolumeSpecHelper): PersistentVolumeHelper;
    $status(x: PersistentVolumeStatusHelper): PersistentVolumeHelper;
}

/** PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes */
export class PersistentVolumeHelper extends ResourceTemplate implements PersistentVolumeHelper {
    static kind = 'PersistentVolume';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PersistentVolumeHelper.kind, PersistentVolumeHelper.apiVersion)
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

    _spec: PersistentVolumeSpecHelper;
    get spec(): PersistentVolumeSpecHelper {
        return this._spec
    }
    set spec(x: PersistentVolumeSpecHelper) {
        this._spec = x
    }
    $spec(x: PersistentVolumeSpecHelper) {
        this.spec = x; return this
    }

    _status: PersistentVolumeStatusHelper;
    get status(): PersistentVolumeStatusHelper {
        return this._status
    }
    set status(x: PersistentVolumeStatusHelper) {
        this._status = x
    }
    $status(x: PersistentVolumeStatusHelper) {
        this.status = x; return this
    }
}

export interface PersistentVolumeClaimHelper extends PersistentVolumeClaim {
    $metadata(x: ObjectMetaHelper): PersistentVolumeClaimHelper;
    $spec(x: PersistentVolumeClaimSpecHelper): PersistentVolumeClaimHelper;
    $status(x: PersistentVolumeClaimStatusHelper): PersistentVolumeClaimHelper;
}

/** PersistentVolumeClaim is a user's request for and claim to a persistent volume */
export class PersistentVolumeClaimHelper extends ResourceTemplate implements PersistentVolumeClaimHelper {
    static kind = 'PersistentVolumeClaim';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PersistentVolumeClaimHelper.kind, PersistentVolumeClaimHelper.apiVersion)
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

    _spec: PersistentVolumeClaimSpecHelper;
    get spec(): PersistentVolumeClaimSpecHelper {
        return this._spec
    }
    set spec(x: PersistentVolumeClaimSpecHelper) {
        this._spec = x
    }
    $spec(x: PersistentVolumeClaimSpecHelper) {
        this.spec = x; return this
    }

    _status: PersistentVolumeClaimStatusHelper;
    get status(): PersistentVolumeClaimStatusHelper {
        return this._status
    }
    set status(x: PersistentVolumeClaimStatusHelper) {
        this._status = x
    }
    $status(x: PersistentVolumeClaimStatusHelper) {
        this.status = x; return this
    }
}

export interface PersistentVolumeClaimConditionHelper extends PersistentVolumeClaimCondition {
    $lastProbeTime(x: Time): PersistentVolumeClaimConditionHelper;
    $lastTransitionTime(x: Time): PersistentVolumeClaimConditionHelper;
    $message(x: string): PersistentVolumeClaimConditionHelper;
    $reason(x: string): PersistentVolumeClaimConditionHelper;
    $status(x: string): PersistentVolumeClaimConditionHelper;
    $type(x: string): PersistentVolumeClaimConditionHelper;
}

/** PersistentVolumeClaimCondition contails details about state of pvc */
export class PersistentVolumeClaimConditionHelper extends Template implements PersistentVolumeClaimConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastProbeTime: Time;
    get lastProbeTime(): Time {
        return this._lastProbeTime
    }
    set lastProbeTime(x: Time) {
        this._lastProbeTime = x
    }
    $lastProbeTime(x: Time) {
        this.lastProbeTime = x; return this
    }

    _lastTransitionTime: Time;
    get lastTransitionTime(): Time {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: Time) {
        this._lastTransitionTime = x
    }
    $lastTransitionTime(x: Time) {
        this.lastTransitionTime = x; return this
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

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $reason(x: string) {
        this.reason = x; return this
    }

    _status: string;
    get status(): string {
        return this._status
    }
    set status(x: string) {
        this._status = x
    }
    $status(x: string) {
        this.status = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface PersistentVolumeClaimListHelper extends PersistentVolumeClaimList {
    $items(x: Array<PersistentVolumeClaim>): PersistentVolumeClaimListHelper;
    $metadata(x: ListMetaHelper): PersistentVolumeClaimListHelper;
}

/** PersistentVolumeClaimList is a list of PersistentVolumeClaim items. */
export class PersistentVolumeClaimListHelper extends ResourceTemplate implements PersistentVolumeClaimListHelper {
    static kind = 'PersistentVolumeClaimList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PersistentVolumeClaimListHelper.kind, PersistentVolumeClaimListHelper.apiVersion)
    }

    _items: Array<PersistentVolumeClaim>;
    get items(): Array<PersistentVolumeClaim> {
        return this._items
    }
    set items(x: Array<PersistentVolumeClaim>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<PersistentVolumeClaim>) {
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

export interface PersistentVolumeClaimSpecHelper extends PersistentVolumeClaimSpec {
    $accessModes(x: Array<string>): PersistentVolumeClaimSpecHelper;
    $dataSource(x: TypedLocalObjectReferenceHelper): PersistentVolumeClaimSpecHelper;
    $dataSourceRef(x: TypedLocalObjectReferenceHelper): PersistentVolumeClaimSpecHelper;
    $resources(x: ResourceRequirementsHelper): PersistentVolumeClaimSpecHelper;
    $selector(x: LabelSelectorHelper): PersistentVolumeClaimSpecHelper;
    $storageClassName(x: string): PersistentVolumeClaimSpecHelper;
    $volumeMode(x: string): PersistentVolumeClaimSpecHelper;
    $volumeName(x: string): PersistentVolumeClaimSpecHelper;
}

/** PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
export class PersistentVolumeClaimSpecHelper extends Template implements PersistentVolumeClaimSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _accessModes: Array<string>;
    get accessModes(): Array<string> {
        return this._accessModes
    }
    set accessModes(x: Array<string>) {
        this._accessModes = this.set(this.accessModes, x)
    }
    $accessModes(x: Array<string>) {
        this.accessModes = x; return this
    }

    _dataSource: TypedLocalObjectReferenceHelper;
    get dataSource(): TypedLocalObjectReferenceHelper {
        return this._dataSource
    }
    set dataSource(x: TypedLocalObjectReferenceHelper) {
        this._dataSource = x
    }
    $dataSource(x: TypedLocalObjectReferenceHelper) {
        this.dataSource = x; return this
    }

    _dataSourceRef: TypedLocalObjectReferenceHelper;
    get dataSourceRef(): TypedLocalObjectReferenceHelper {
        return this._dataSourceRef
    }
    set dataSourceRef(x: TypedLocalObjectReferenceHelper) {
        this._dataSourceRef = x
    }
    $dataSourceRef(x: TypedLocalObjectReferenceHelper) {
        this.dataSourceRef = x; return this
    }

    _resources: ResourceRequirementsHelper;
    get resources(): ResourceRequirementsHelper {
        return this._resources
    }
    set resources(x: ResourceRequirementsHelper) {
        this._resources = x
    }
    $resources(x: ResourceRequirementsHelper) {
        this.resources = x; return this
    }

    _selector: LabelSelectorHelper;
    get selector(): LabelSelectorHelper {
        return this._selector
    }
    set selector(x: LabelSelectorHelper) {
        this._selector = x
    }
    $selector(x: LabelSelectorHelper) {
        this.selector = x; return this
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

    _volumeMode: string;
    get volumeMode(): string {
        return this._volumeMode
    }
    set volumeMode(x: string) {
        this._volumeMode = x
    }
    $volumeMode(x: string) {
        this.volumeMode = x; return this
    }

    _volumeName: string;
    get volumeName(): string {
        return this._volumeName
    }
    set volumeName(x: string) {
        this._volumeName = x
    }
    $volumeName(x: string) {
        this.volumeName = x; return this
    }
}

export interface PersistentVolumeClaimStatusHelper extends PersistentVolumeClaimStatus {
    $accessModes(x: Array<string>): PersistentVolumeClaimStatusHelper;
    $allocatedResources(x: {[name: string]: Quantity}): PersistentVolumeClaimStatusHelper;
    $capacity(x: {[name: string]: Quantity}): PersistentVolumeClaimStatusHelper;
    $conditions(x: Array<PersistentVolumeClaimCondition>): PersistentVolumeClaimStatusHelper;
    $phase(x: string): PersistentVolumeClaimStatusHelper;
    $resizeStatus(x: string): PersistentVolumeClaimStatusHelper;
}

/** PersistentVolumeClaimStatus is the current status of a persistent volume claim. */
export class PersistentVolumeClaimStatusHelper extends Template implements PersistentVolumeClaimStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _accessModes: Array<string>;
    get accessModes(): Array<string> {
        return this._accessModes
    }
    set accessModes(x: Array<string>) {
        this._accessModes = this.set(this.accessModes, x)
    }
    $accessModes(x: Array<string>) {
        this.accessModes = x; return this
    }

    _allocatedResources: {[name: string]: Quantity};
    get allocatedResources(): {[name: string]: Quantity} {
        return this._allocatedResources
    }
    set allocatedResources(x: {[name: string]: Quantity}) {
        this._allocatedResources = this.set(this.allocatedResources, x)
    }
    $allocatedResources(x: {[name: string]: Quantity}) {
        this.allocatedResources = x; return this
    }

    _capacity: {[name: string]: Quantity};
    get capacity(): {[name: string]: Quantity} {
        return this._capacity
    }
    set capacity(x: {[name: string]: Quantity}) {
        this._capacity = this.set(this.capacity, x)
    }
    $capacity(x: {[name: string]: Quantity}) {
        this.capacity = x; return this
    }

    _conditions: Array<PersistentVolumeClaimCondition>;
    get conditions(): Array<PersistentVolumeClaimCondition> {
        return this._conditions
    }
    set conditions(x: Array<PersistentVolumeClaimCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $conditions(x: Array<PersistentVolumeClaimCondition>) {
        this.conditions = x; return this
    }

    _phase: string;
    get phase(): string {
        return this._phase
    }
    set phase(x: string) {
        this._phase = x
    }
    $phase(x: string) {
        this.phase = x; return this
    }

    _resizeStatus: string;
    get resizeStatus(): string {
        return this._resizeStatus
    }
    set resizeStatus(x: string) {
        this._resizeStatus = x
    }
    $resizeStatus(x: string) {
        this.resizeStatus = x; return this
    }
}

export interface PersistentVolumeClaimTemplateHelper extends PersistentVolumeClaimTemplate {
    $metadata(x: ObjectMetaHelper): PersistentVolumeClaimTemplateHelper;
    $spec(x: PersistentVolumeClaimSpecHelper): PersistentVolumeClaimTemplateHelper;
}

/** PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
export class PersistentVolumeClaimTemplateHelper extends Template implements PersistentVolumeClaimTemplateHelper {
    constructor(obj: any) {
        super(obj)
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

    _spec: PersistentVolumeClaimSpecHelper;
    get spec(): PersistentVolumeClaimSpecHelper {
        return this._spec
    }
    set spec(x: PersistentVolumeClaimSpecHelper) {
        this._spec = x
    }
    $spec(x: PersistentVolumeClaimSpecHelper) {
        this.spec = x; return this
    }
}

export interface PersistentVolumeClaimVolumeSourceHelper extends PersistentVolumeClaimVolumeSource {
    $claimName(x: string): PersistentVolumeClaimVolumeSourceHelper;
    $readOnly(x: boolean): PersistentVolumeClaimVolumeSourceHelper;
}

/** PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
export class PersistentVolumeClaimVolumeSourceHelper extends Template implements PersistentVolumeClaimVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _claimName: string;
    get claimName(): string {
        return this._claimName
    }
    set claimName(x: string) {
        this._claimName = x
    }
    $claimName(x: string) {
        this.claimName = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }
}

export interface PersistentVolumeListHelper extends PersistentVolumeList {
    $items(x: Array<PersistentVolume>): PersistentVolumeListHelper;
    $metadata(x: ListMetaHelper): PersistentVolumeListHelper;
}

/** PersistentVolumeList is a list of PersistentVolume items. */
export class PersistentVolumeListHelper extends ResourceTemplate implements PersistentVolumeListHelper {
    static kind = 'PersistentVolumeList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PersistentVolumeListHelper.kind, PersistentVolumeListHelper.apiVersion)
    }

    _items: Array<PersistentVolume>;
    get items(): Array<PersistentVolume> {
        return this._items
    }
    set items(x: Array<PersistentVolume>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<PersistentVolume>) {
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

export interface PersistentVolumeSpecHelper extends PersistentVolumeSpec {
    $accessModes(x: Array<string>): PersistentVolumeSpecHelper;
    $awsElasticBlockStore(x: AWSElasticBlockStoreVolumeSourceHelper): PersistentVolumeSpecHelper;
    $azureDisk(x: AzureDiskVolumeSourceHelper): PersistentVolumeSpecHelper;
    $azureFile(x: AzureFilePersistentVolumeSourceHelper): PersistentVolumeSpecHelper;
    $capacity(x: {[name: string]: Quantity}): PersistentVolumeSpecHelper;
    $cephfs(x: CephFSPersistentVolumeSourceHelper): PersistentVolumeSpecHelper;
    $cinder(x: CinderPersistentVolumeSourceHelper): PersistentVolumeSpecHelper;
    $claimRef(x: ObjectReferenceHelper): PersistentVolumeSpecHelper;
    $csi(x: CSIPersistentVolumeSourceHelper): PersistentVolumeSpecHelper;
    $fc(x: FCVolumeSourceHelper): PersistentVolumeSpecHelper;
    $flexVolume(x: FlexPersistentVolumeSourceHelper): PersistentVolumeSpecHelper;
    $flocker(x: FlockerVolumeSourceHelper): PersistentVolumeSpecHelper;
    $gcePersistentDisk(x: GCEPersistentDiskVolumeSourceHelper): PersistentVolumeSpecHelper;
    $glusterfs(x: GlusterfsPersistentVolumeSourceHelper): PersistentVolumeSpecHelper;
    $hostPath(x: HostPathVolumeSourceHelper): PersistentVolumeSpecHelper;
    $iscsi(x: ISCSIPersistentVolumeSourceHelper): PersistentVolumeSpecHelper;
    $local(x: LocalVolumeSourceHelper): PersistentVolumeSpecHelper;
    $mountOptions(x: Array<string>): PersistentVolumeSpecHelper;
    $nfs(x: NFSVolumeSourceHelper): PersistentVolumeSpecHelper;
    $nodeAffinity(x: VolumeNodeAffinityHelper): PersistentVolumeSpecHelper;
    $persistentVolumeReclaimPolicy(x: string): PersistentVolumeSpecHelper;
    $photonPersistentDisk(x: PhotonPersistentDiskVolumeSourceHelper): PersistentVolumeSpecHelper;
    $portworxVolume(x: PortworxVolumeSourceHelper): PersistentVolumeSpecHelper;
    $quobyte(x: QuobyteVolumeSourceHelper): PersistentVolumeSpecHelper;
    $rbd(x: RBDPersistentVolumeSourceHelper): PersistentVolumeSpecHelper;
    $scaleIO(x: ScaleIOPersistentVolumeSourceHelper): PersistentVolumeSpecHelper;
    $storageClassName(x: string): PersistentVolumeSpecHelper;
    $storageos(x: StorageOSPersistentVolumeSourceHelper): PersistentVolumeSpecHelper;
    $volumeMode(x: string): PersistentVolumeSpecHelper;
    $vsphereVolume(x: VsphereVirtualDiskVolumeSourceHelper): PersistentVolumeSpecHelper;
}

/** PersistentVolumeSpec is the specification of a persistent volume. */
export class PersistentVolumeSpecHelper extends Template implements PersistentVolumeSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _accessModes: Array<string>;
    get accessModes(): Array<string> {
        return this._accessModes
    }
    set accessModes(x: Array<string>) {
        this._accessModes = this.set(this.accessModes, x)
    }
    $accessModes(x: Array<string>) {
        this.accessModes = x; return this
    }

    _awsElasticBlockStore: AWSElasticBlockStoreVolumeSourceHelper;
    get awsElasticBlockStore(): AWSElasticBlockStoreVolumeSourceHelper {
        return this._awsElasticBlockStore
    }
    set awsElasticBlockStore(x: AWSElasticBlockStoreVolumeSourceHelper) {
        this._awsElasticBlockStore = x
    }
    $awsElasticBlockStore(x: AWSElasticBlockStoreVolumeSourceHelper) {
        this.awsElasticBlockStore = x; return this
    }

    _azureDisk: AzureDiskVolumeSourceHelper;
    get azureDisk(): AzureDiskVolumeSourceHelper {
        return this._azureDisk
    }
    set azureDisk(x: AzureDiskVolumeSourceHelper) {
        this._azureDisk = x
    }
    $azureDisk(x: AzureDiskVolumeSourceHelper) {
        this.azureDisk = x; return this
    }

    _azureFile: AzureFilePersistentVolumeSourceHelper;
    get azureFile(): AzureFilePersistentVolumeSourceHelper {
        return this._azureFile
    }
    set azureFile(x: AzureFilePersistentVolumeSourceHelper) {
        this._azureFile = x
    }
    $azureFile(x: AzureFilePersistentVolumeSourceHelper) {
        this.azureFile = x; return this
    }

    _capacity: {[name: string]: Quantity};
    get capacity(): {[name: string]: Quantity} {
        return this._capacity
    }
    set capacity(x: {[name: string]: Quantity}) {
        this._capacity = this.set(this.capacity, x)
    }
    $capacity(x: {[name: string]: Quantity}) {
        this.capacity = x; return this
    }

    _cephfs: CephFSPersistentVolumeSourceHelper;
    get cephfs(): CephFSPersistentVolumeSourceHelper {
        return this._cephfs
    }
    set cephfs(x: CephFSPersistentVolumeSourceHelper) {
        this._cephfs = x
    }
    $cephfs(x: CephFSPersistentVolumeSourceHelper) {
        this.cephfs = x; return this
    }

    _cinder: CinderPersistentVolumeSourceHelper;
    get cinder(): CinderPersistentVolumeSourceHelper {
        return this._cinder
    }
    set cinder(x: CinderPersistentVolumeSourceHelper) {
        this._cinder = x
    }
    $cinder(x: CinderPersistentVolumeSourceHelper) {
        this.cinder = x; return this
    }

    _claimRef: ObjectReferenceHelper;
    get claimRef(): ObjectReferenceHelper {
        return this._claimRef
    }
    set claimRef(x: ObjectReferenceHelper) {
        this._claimRef = x
    }
    $claimRef(x: ObjectReferenceHelper) {
        this.claimRef = x; return this
    }

    _csi: CSIPersistentVolumeSourceHelper;
    get csi(): CSIPersistentVolumeSourceHelper {
        return this._csi
    }
    set csi(x: CSIPersistentVolumeSourceHelper) {
        this._csi = x
    }
    $csi(x: CSIPersistentVolumeSourceHelper) {
        this.csi = x; return this
    }

    _fc: FCVolumeSourceHelper;
    get fc(): FCVolumeSourceHelper {
        return this._fc
    }
    set fc(x: FCVolumeSourceHelper) {
        this._fc = x
    }
    $fc(x: FCVolumeSourceHelper) {
        this.fc = x; return this
    }

    _flexVolume: FlexPersistentVolumeSourceHelper;
    get flexVolume(): FlexPersistentVolumeSourceHelper {
        return this._flexVolume
    }
    set flexVolume(x: FlexPersistentVolumeSourceHelper) {
        this._flexVolume = x
    }
    $flexVolume(x: FlexPersistentVolumeSourceHelper) {
        this.flexVolume = x; return this
    }

    _flocker: FlockerVolumeSourceHelper;
    get flocker(): FlockerVolumeSourceHelper {
        return this._flocker
    }
    set flocker(x: FlockerVolumeSourceHelper) {
        this._flocker = x
    }
    $flocker(x: FlockerVolumeSourceHelper) {
        this.flocker = x; return this
    }

    _gcePersistentDisk: GCEPersistentDiskVolumeSourceHelper;
    get gcePersistentDisk(): GCEPersistentDiskVolumeSourceHelper {
        return this._gcePersistentDisk
    }
    set gcePersistentDisk(x: GCEPersistentDiskVolumeSourceHelper) {
        this._gcePersistentDisk = x
    }
    $gcePersistentDisk(x: GCEPersistentDiskVolumeSourceHelper) {
        this.gcePersistentDisk = x; return this
    }

    _glusterfs: GlusterfsPersistentVolumeSourceHelper;
    get glusterfs(): GlusterfsPersistentVolumeSourceHelper {
        return this._glusterfs
    }
    set glusterfs(x: GlusterfsPersistentVolumeSourceHelper) {
        this._glusterfs = x
    }
    $glusterfs(x: GlusterfsPersistentVolumeSourceHelper) {
        this.glusterfs = x; return this
    }

    _hostPath: HostPathVolumeSourceHelper;
    get hostPath(): HostPathVolumeSourceHelper {
        return this._hostPath
    }
    set hostPath(x: HostPathVolumeSourceHelper) {
        this._hostPath = x
    }
    $hostPath(x: HostPathVolumeSourceHelper) {
        this.hostPath = x; return this
    }

    _iscsi: ISCSIPersistentVolumeSourceHelper;
    get iscsi(): ISCSIPersistentVolumeSourceHelper {
        return this._iscsi
    }
    set iscsi(x: ISCSIPersistentVolumeSourceHelper) {
        this._iscsi = x
    }
    $iscsi(x: ISCSIPersistentVolumeSourceHelper) {
        this.iscsi = x; return this
    }

    _local: LocalVolumeSourceHelper;
    get local(): LocalVolumeSourceHelper {
        return this._local
    }
    set local(x: LocalVolumeSourceHelper) {
        this._local = x
    }
    $local(x: LocalVolumeSourceHelper) {
        this.local = x; return this
    }

    _mountOptions: Array<string>;
    get mountOptions(): Array<string> {
        return this._mountOptions
    }
    set mountOptions(x: Array<string>) {
        this._mountOptions = this.set(this.mountOptions, x)
    }
    $mountOptions(x: Array<string>) {
        this.mountOptions = x; return this
    }

    _nfs: NFSVolumeSourceHelper;
    get nfs(): NFSVolumeSourceHelper {
        return this._nfs
    }
    set nfs(x: NFSVolumeSourceHelper) {
        this._nfs = x
    }
    $nfs(x: NFSVolumeSourceHelper) {
        this.nfs = x; return this
    }

    _nodeAffinity: VolumeNodeAffinityHelper;
    get nodeAffinity(): VolumeNodeAffinityHelper {
        return this._nodeAffinity
    }
    set nodeAffinity(x: VolumeNodeAffinityHelper) {
        this._nodeAffinity = x
    }
    $nodeAffinity(x: VolumeNodeAffinityHelper) {
        this.nodeAffinity = x; return this
    }

    _persistentVolumeReclaimPolicy: string;
    get persistentVolumeReclaimPolicy(): string {
        return this._persistentVolumeReclaimPolicy
    }
    set persistentVolumeReclaimPolicy(x: string) {
        this._persistentVolumeReclaimPolicy = x
    }
    $persistentVolumeReclaimPolicy(x: string) {
        this.persistentVolumeReclaimPolicy = x; return this
    }

    _photonPersistentDisk: PhotonPersistentDiskVolumeSourceHelper;
    get photonPersistentDisk(): PhotonPersistentDiskVolumeSourceHelper {
        return this._photonPersistentDisk
    }
    set photonPersistentDisk(x: PhotonPersistentDiskVolumeSourceHelper) {
        this._photonPersistentDisk = x
    }
    $photonPersistentDisk(x: PhotonPersistentDiskVolumeSourceHelper) {
        this.photonPersistentDisk = x; return this
    }

    _portworxVolume: PortworxVolumeSourceHelper;
    get portworxVolume(): PortworxVolumeSourceHelper {
        return this._portworxVolume
    }
    set portworxVolume(x: PortworxVolumeSourceHelper) {
        this._portworxVolume = x
    }
    $portworxVolume(x: PortworxVolumeSourceHelper) {
        this.portworxVolume = x; return this
    }

    _quobyte: QuobyteVolumeSourceHelper;
    get quobyte(): QuobyteVolumeSourceHelper {
        return this._quobyte
    }
    set quobyte(x: QuobyteVolumeSourceHelper) {
        this._quobyte = x
    }
    $quobyte(x: QuobyteVolumeSourceHelper) {
        this.quobyte = x; return this
    }

    _rbd: RBDPersistentVolumeSourceHelper;
    get rbd(): RBDPersistentVolumeSourceHelper {
        return this._rbd
    }
    set rbd(x: RBDPersistentVolumeSourceHelper) {
        this._rbd = x
    }
    $rbd(x: RBDPersistentVolumeSourceHelper) {
        this.rbd = x; return this
    }

    _scaleIO: ScaleIOPersistentVolumeSourceHelper;
    get scaleIO(): ScaleIOPersistentVolumeSourceHelper {
        return this._scaleIO
    }
    set scaleIO(x: ScaleIOPersistentVolumeSourceHelper) {
        this._scaleIO = x
    }
    $scaleIO(x: ScaleIOPersistentVolumeSourceHelper) {
        this.scaleIO = x; return this
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

    _storageos: StorageOSPersistentVolumeSourceHelper;
    get storageos(): StorageOSPersistentVolumeSourceHelper {
        return this._storageos
    }
    set storageos(x: StorageOSPersistentVolumeSourceHelper) {
        this._storageos = x
    }
    $storageos(x: StorageOSPersistentVolumeSourceHelper) {
        this.storageos = x; return this
    }

    _volumeMode: string;
    get volumeMode(): string {
        return this._volumeMode
    }
    set volumeMode(x: string) {
        this._volumeMode = x
    }
    $volumeMode(x: string) {
        this.volumeMode = x; return this
    }

    _vsphereVolume: VsphereVirtualDiskVolumeSourceHelper;
    get vsphereVolume(): VsphereVirtualDiskVolumeSourceHelper {
        return this._vsphereVolume
    }
    set vsphereVolume(x: VsphereVirtualDiskVolumeSourceHelper) {
        this._vsphereVolume = x
    }
    $vsphereVolume(x: VsphereVirtualDiskVolumeSourceHelper) {
        this.vsphereVolume = x; return this
    }
}

export interface PersistentVolumeStatusHelper extends PersistentVolumeStatus {
    $message(x: string): PersistentVolumeStatusHelper;
    $phase(x: string): PersistentVolumeStatusHelper;
    $reason(x: string): PersistentVolumeStatusHelper;
}

/** PersistentVolumeStatus is the current status of a persistent volume. */
export class PersistentVolumeStatusHelper extends Template implements PersistentVolumeStatusHelper {
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

    _phase: string;
    get phase(): string {
        return this._phase
    }
    set phase(x: string) {
        this._phase = x
    }
    $phase(x: string) {
        this.phase = x; return this
    }

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $reason(x: string) {
        this.reason = x; return this
    }
}

export interface PhotonPersistentDiskVolumeSourceHelper extends PhotonPersistentDiskVolumeSource {
    $fsType(x: string): PhotonPersistentDiskVolumeSourceHelper;
    $pdID(x: string): PhotonPersistentDiskVolumeSourceHelper;
}

/** Represents a Photon Controller persistent disk resource. */
export class PhotonPersistentDiskVolumeSourceHelper extends Template implements PhotonPersistentDiskVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _pdID: string;
    get pdID(): string {
        return this._pdID
    }
    set pdID(x: string) {
        this._pdID = x
    }
    $pdID(x: string) {
        this.pdID = x; return this
    }
}

export interface PodHelper extends Pod {
    $metadata(x: ObjectMetaHelper): PodHelper;
    $spec(x: PodSpecHelper): PodHelper;
    $status(x: PodStatusHelper): PodHelper;
}

/** Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts. */
export class PodHelper extends ResourceTemplate implements PodHelper {
    static kind = 'Pod';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodHelper.kind, PodHelper.apiVersion)
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

    _spec: PodSpecHelper;
    get spec(): PodSpecHelper {
        return this._spec
    }
    set spec(x: PodSpecHelper) {
        this._spec = x
    }
    $spec(x: PodSpecHelper) {
        this.spec = x; return this
    }

    _status: PodStatusHelper;
    get status(): PodStatusHelper {
        return this._status
    }
    set status(x: PodStatusHelper) {
        this._status = x
    }
    $status(x: PodStatusHelper) {
        this.status = x; return this
    }
}

export interface PodAffinityHelper extends PodAffinity {
    $preferredDuringSchedulingIgnoredDuringExecution(x: Array<WeightedPodAffinityTerm>): PodAffinityHelper;
    $requiredDuringSchedulingIgnoredDuringExecution(x: Array<PodAffinityTerm>): PodAffinityHelper;
}

/** Pod affinity is a group of inter pod affinity scheduling rules. */
export class PodAffinityHelper extends Template implements PodAffinityHelper {
    constructor(obj: any) {
        super(obj)
    }

    _preferredDuringSchedulingIgnoredDuringExecution: Array<WeightedPodAffinityTerm>;
    get preferredDuringSchedulingIgnoredDuringExecution(): Array<WeightedPodAffinityTerm> {
        return this._preferredDuringSchedulingIgnoredDuringExecution
    }
    set preferredDuringSchedulingIgnoredDuringExecution(x: Array<WeightedPodAffinityTerm>) {
        this._preferredDuringSchedulingIgnoredDuringExecution = this.set(this.preferredDuringSchedulingIgnoredDuringExecution, x)
    }
    $preferredDuringSchedulingIgnoredDuringExecution(x: Array<WeightedPodAffinityTerm>) {
        this.preferredDuringSchedulingIgnoredDuringExecution = x; return this
    }

    _requiredDuringSchedulingIgnoredDuringExecution: Array<PodAffinityTerm>;
    get requiredDuringSchedulingIgnoredDuringExecution(): Array<PodAffinityTerm> {
        return this._requiredDuringSchedulingIgnoredDuringExecution
    }
    set requiredDuringSchedulingIgnoredDuringExecution(x: Array<PodAffinityTerm>) {
        this._requiredDuringSchedulingIgnoredDuringExecution = this.set(this.requiredDuringSchedulingIgnoredDuringExecution, x)
    }
    $requiredDuringSchedulingIgnoredDuringExecution(x: Array<PodAffinityTerm>) {
        this.requiredDuringSchedulingIgnoredDuringExecution = x; return this
    }
}

export interface PodAffinityTermHelper extends PodAffinityTerm {
    $labelSelector(x: LabelSelectorHelper): PodAffinityTermHelper;
    $namespaceSelector(x: LabelSelectorHelper): PodAffinityTermHelper;
    $namespaces(x: Array<string>): PodAffinityTermHelper;
    $topologyKey(x: string): PodAffinityTermHelper;
}

/** Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
export class PodAffinityTermHelper extends Template implements PodAffinityTermHelper {
    constructor(obj: any) {
        super(obj)
    }

    _labelSelector: LabelSelectorHelper;
    get labelSelector(): LabelSelectorHelper {
        return this._labelSelector
    }
    set labelSelector(x: LabelSelectorHelper) {
        this._labelSelector = x
    }
    $labelSelector(x: LabelSelectorHelper) {
        this.labelSelector = x; return this
    }

    _namespaceSelector: LabelSelectorHelper;
    get namespaceSelector(): LabelSelectorHelper {
        return this._namespaceSelector
    }
    set namespaceSelector(x: LabelSelectorHelper) {
        this._namespaceSelector = x
    }
    $namespaceSelector(x: LabelSelectorHelper) {
        this.namespaceSelector = x; return this
    }

    _namespaces: Array<string>;
    get namespaces(): Array<string> {
        return this._namespaces
    }
    set namespaces(x: Array<string>) {
        this._namespaces = this.set(this.namespaces, x)
    }
    $namespaces(x: Array<string>) {
        this.namespaces = x; return this
    }

    _topologyKey: string;
    get topologyKey(): string {
        return this._topologyKey
    }
    set topologyKey(x: string) {
        this._topologyKey = x
    }
    $topologyKey(x: string) {
        this.topologyKey = x; return this
    }
}

export interface PodAntiAffinityHelper extends PodAntiAffinity {
    $preferredDuringSchedulingIgnoredDuringExecution(x: Array<WeightedPodAffinityTerm>): PodAntiAffinityHelper;
    $requiredDuringSchedulingIgnoredDuringExecution(x: Array<PodAffinityTerm>): PodAntiAffinityHelper;
}

/** Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
export class PodAntiAffinityHelper extends Template implements PodAntiAffinityHelper {
    constructor(obj: any) {
        super(obj)
    }

    _preferredDuringSchedulingIgnoredDuringExecution: Array<WeightedPodAffinityTerm>;
    get preferredDuringSchedulingIgnoredDuringExecution(): Array<WeightedPodAffinityTerm> {
        return this._preferredDuringSchedulingIgnoredDuringExecution
    }
    set preferredDuringSchedulingIgnoredDuringExecution(x: Array<WeightedPodAffinityTerm>) {
        this._preferredDuringSchedulingIgnoredDuringExecution = this.set(this.preferredDuringSchedulingIgnoredDuringExecution, x)
    }
    $preferredDuringSchedulingIgnoredDuringExecution(x: Array<WeightedPodAffinityTerm>) {
        this.preferredDuringSchedulingIgnoredDuringExecution = x; return this
    }

    _requiredDuringSchedulingIgnoredDuringExecution: Array<PodAffinityTerm>;
    get requiredDuringSchedulingIgnoredDuringExecution(): Array<PodAffinityTerm> {
        return this._requiredDuringSchedulingIgnoredDuringExecution
    }
    set requiredDuringSchedulingIgnoredDuringExecution(x: Array<PodAffinityTerm>) {
        this._requiredDuringSchedulingIgnoredDuringExecution = this.set(this.requiredDuringSchedulingIgnoredDuringExecution, x)
    }
    $requiredDuringSchedulingIgnoredDuringExecution(x: Array<PodAffinityTerm>) {
        this.requiredDuringSchedulingIgnoredDuringExecution = x; return this
    }
}

export interface PodConditionHelper extends PodCondition {
    $lastProbeTime(x: Time): PodConditionHelper;
    $lastTransitionTime(x: Time): PodConditionHelper;
    $message(x: string): PodConditionHelper;
    $reason(x: string): PodConditionHelper;
    $status(x: string): PodConditionHelper;
    $type(x: string): PodConditionHelper;
}

/** PodCondition contains details for the current condition of this pod. */
export class PodConditionHelper extends Template implements PodConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastProbeTime: Time;
    get lastProbeTime(): Time {
        return this._lastProbeTime
    }
    set lastProbeTime(x: Time) {
        this._lastProbeTime = x
    }
    $lastProbeTime(x: Time) {
        this.lastProbeTime = x; return this
    }

    _lastTransitionTime: Time;
    get lastTransitionTime(): Time {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: Time) {
        this._lastTransitionTime = x
    }
    $lastTransitionTime(x: Time) {
        this.lastTransitionTime = x; return this
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

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $reason(x: string) {
        this.reason = x; return this
    }

    _status: string;
    get status(): string {
        return this._status
    }
    set status(x: string) {
        this._status = x
    }
    $status(x: string) {
        this.status = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface PodDNSConfigHelper extends PodDNSConfig {
    $nameservers(x: Array<string>): PodDNSConfigHelper;
    $options(x: Array<PodDNSConfigOption>): PodDNSConfigHelper;
    $searches(x: Array<string>): PodDNSConfigHelper;
}

/** PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
export class PodDNSConfigHelper extends Template implements PodDNSConfigHelper {
    constructor(obj: any) {
        super(obj)
    }

    _nameservers: Array<string>;
    get nameservers(): Array<string> {
        return this._nameservers
    }
    set nameservers(x: Array<string>) {
        this._nameservers = this.set(this.nameservers, x)
    }
    $nameservers(x: Array<string>) {
        this.nameservers = x; return this
    }

    _options: Array<PodDNSConfigOption>;
    get options(): Array<PodDNSConfigOption> {
        return this._options
    }
    set options(x: Array<PodDNSConfigOption>) {
        this._options = this.set(this.options, x)
    }
    $options(x: Array<PodDNSConfigOption>) {
        this.options = x; return this
    }

    _searches: Array<string>;
    get searches(): Array<string> {
        return this._searches
    }
    set searches(x: Array<string>) {
        this._searches = this.set(this.searches, x)
    }
    $searches(x: Array<string>) {
        this.searches = x; return this
    }
}

export interface PodDNSConfigOptionHelper extends PodDNSConfigOption {
    $value(x: string): PodDNSConfigOptionHelper;
}

/** PodDNSConfigOption defines DNS resolver options of a pod. */
export class PodDNSConfigOptionHelper extends Template implements PodDNSConfigOptionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _value: string;
    get value(): string {
        return this._value
    }
    set value(x: string) {
        this._value = x
    }
    $value(x: string) {
        this.value = x; return this
    }
}

export interface PodIPHelper extends PodIP {
    $ip(x: string): PodIPHelper;
}

/**
 * IP address information for entries in the (plural) PodIPs field. Each entry includes:
 *    IP: An IP address allocated to the pod. Routable at least within the cluster.
 */
export class PodIPHelper extends Template implements PodIPHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ip: string;
    get ip(): string {
        return this._ip
    }
    set ip(x: string) {
        this._ip = x
    }
    $ip(x: string) {
        this.ip = x; return this
    }
}

export interface PodListHelper extends PodList {
    $items(x: Array<Pod>): PodListHelper;
    $metadata(x: ListMetaHelper): PodListHelper;
}

/** PodList is a list of Pods. */
export class PodListHelper extends ResourceTemplate implements PodListHelper {
    static kind = 'PodList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodListHelper.kind, PodListHelper.apiVersion)
    }

    _items: Array<Pod>;
    get items(): Array<Pod> {
        return this._items
    }
    set items(x: Array<Pod>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<Pod>) {
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

export interface PodOSHelper extends PodOS {
}

/** PodOS defines the OS parameters of a pod. */
export class PodOSHelper extends Template implements PodOSHelper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface PodReadinessGateHelper extends PodReadinessGate {
    $conditionType(x: string): PodReadinessGateHelper;
}

/** PodReadinessGate contains the reference to a pod condition */
export class PodReadinessGateHelper extends Template implements PodReadinessGateHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conditionType: string;
    get conditionType(): string {
        return this._conditionType
    }
    set conditionType(x: string) {
        this._conditionType = x
    }
    $conditionType(x: string) {
        this.conditionType = x; return this
    }
}

export interface PodSecurityContextHelper extends PodSecurityContext {
    $fsGroup(x: number): PodSecurityContextHelper;
    $fsGroupChangePolicy(x: string): PodSecurityContextHelper;
    $runAsGroup(x: number): PodSecurityContextHelper;
    $runAsNonRoot(x: boolean): PodSecurityContextHelper;
    $runAsUser(x: number): PodSecurityContextHelper;
    $seLinuxOptions(x: SELinuxOptionsHelper): PodSecurityContextHelper;
    $seccompProfile(x: SeccompProfileHelper): PodSecurityContextHelper;
    $supplementalGroups(x: Array<number>): PodSecurityContextHelper;
    $sysctls(x: Array<Sysctl>): PodSecurityContextHelper;
    $windowsOptions(x: WindowsSecurityContextOptionsHelper): PodSecurityContextHelper;
}

/** PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
export class PodSecurityContextHelper extends Template implements PodSecurityContextHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsGroup: number;
    get fsGroup(): number {
        return this._fsGroup
    }
    set fsGroup(x: number) {
        this._fsGroup = x
    }
    $fsGroup(x: number) {
        this.fsGroup = x; return this
    }

    _fsGroupChangePolicy: string;
    get fsGroupChangePolicy(): string {
        return this._fsGroupChangePolicy
    }
    set fsGroupChangePolicy(x: string) {
        this._fsGroupChangePolicy = x
    }
    $fsGroupChangePolicy(x: string) {
        this.fsGroupChangePolicy = x; return this
    }

    _runAsGroup: number;
    get runAsGroup(): number {
        return this._runAsGroup
    }
    set runAsGroup(x: number) {
        this._runAsGroup = x
    }
    $runAsGroup(x: number) {
        this.runAsGroup = x; return this
    }

    _runAsNonRoot: boolean;
    get runAsNonRoot(): boolean {
        return this._runAsNonRoot
    }
    set runAsNonRoot(x: boolean) {
        this._runAsNonRoot = x
    }
    $runAsNonRoot(x: boolean) {
        this.runAsNonRoot = x; return this
    }

    _runAsUser: number;
    get runAsUser(): number {
        return this._runAsUser
    }
    set runAsUser(x: number) {
        this._runAsUser = x
    }
    $runAsUser(x: number) {
        this.runAsUser = x; return this
    }

    _seLinuxOptions: SELinuxOptionsHelper;
    get seLinuxOptions(): SELinuxOptionsHelper {
        return this._seLinuxOptions
    }
    set seLinuxOptions(x: SELinuxOptionsHelper) {
        this._seLinuxOptions = x
    }
    $seLinuxOptions(x: SELinuxOptionsHelper) {
        this.seLinuxOptions = x; return this
    }

    _seccompProfile: SeccompProfileHelper;
    get seccompProfile(): SeccompProfileHelper {
        return this._seccompProfile
    }
    set seccompProfile(x: SeccompProfileHelper) {
        this._seccompProfile = x
    }
    $seccompProfile(x: SeccompProfileHelper) {
        this.seccompProfile = x; return this
    }

    _supplementalGroups: Array<number>;
    get supplementalGroups(): Array<number> {
        return this._supplementalGroups
    }
    set supplementalGroups(x: Array<number>) {
        this._supplementalGroups = this.set(this.supplementalGroups, x)
    }
    $supplementalGroups(x: Array<number>) {
        this.supplementalGroups = x; return this
    }

    _sysctls: Array<Sysctl>;
    get sysctls(): Array<Sysctl> {
        return this._sysctls
    }
    set sysctls(x: Array<Sysctl>) {
        this._sysctls = this.set(this.sysctls, x)
    }
    $sysctls(x: Array<Sysctl>) {
        this.sysctls = x; return this
    }

    _windowsOptions: WindowsSecurityContextOptionsHelper;
    get windowsOptions(): WindowsSecurityContextOptionsHelper {
        return this._windowsOptions
    }
    set windowsOptions(x: WindowsSecurityContextOptionsHelper) {
        this._windowsOptions = x
    }
    $windowsOptions(x: WindowsSecurityContextOptionsHelper) {
        this.windowsOptions = x; return this
    }
}

export interface PodSpecHelper extends PodSpec {
    $activeDeadlineSeconds(x: number): PodSpecHelper;
    $affinity(x: AffinityHelper): PodSpecHelper;
    $automountServiceAccountToken(x: boolean): PodSpecHelper;
    $containers(x: Array<Container>): PodSpecHelper;
    $dnsConfig(x: PodDNSConfigHelper): PodSpecHelper;
    $dnsPolicy(x: string): PodSpecHelper;
    $enableServiceLinks(x: boolean): PodSpecHelper;
    $ephemeralContainers(x: Array<EphemeralContainer>): PodSpecHelper;
    $hostAliases(x: Array<HostAlias>): PodSpecHelper;
    $hostIPC(x: boolean): PodSpecHelper;
    $hostNetwork(x: boolean): PodSpecHelper;
    $hostPID(x: boolean): PodSpecHelper;
    $hostname(x: string): PodSpecHelper;
    $imagePullSecrets(x: Array<LocalObjectReference>): PodSpecHelper;
    $initContainers(x: Array<Container>): PodSpecHelper;
    $nodeName(x: string): PodSpecHelper;
    $nodeSelector(x: any): PodSpecHelper;
    $os(x: PodOSHelper): PodSpecHelper;
    $overhead(x: {[name: string]: Quantity}): PodSpecHelper;
    $preemptionPolicy(x: string): PodSpecHelper;
    $priority(x: number): PodSpecHelper;
    $priorityClassName(x: string): PodSpecHelper;
    $readinessGates(x: Array<PodReadinessGate>): PodSpecHelper;
    $restartPolicy(x: string): PodSpecHelper;
    $runtimeClassName(x: string): PodSpecHelper;
    $schedulerName(x: string): PodSpecHelper;
    $securityContext(x: PodSecurityContextHelper): PodSpecHelper;
    $serviceAccount(x: string): PodSpecHelper;
    $serviceAccountName(x: string): PodSpecHelper;
    $setHostnameAsFQDN(x: boolean): PodSpecHelper;
    $shareProcessNamespace(x: boolean): PodSpecHelper;
    $subdomain(x: string): PodSpecHelper;
    $terminationGracePeriodSeconds(x: number): PodSpecHelper;
    $tolerations(x: Array<Toleration>): PodSpecHelper;
    $topologySpreadConstraints(x: Array<TopologySpreadConstraint>): PodSpecHelper;
    $volumes(x: Array<Volume>): PodSpecHelper;
}

/** PodSpec is a description of a pod. */
export class PodSpecHelper extends Template implements PodSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _activeDeadlineSeconds: number;
    get activeDeadlineSeconds(): number {
        return this._activeDeadlineSeconds
    }
    set activeDeadlineSeconds(x: number) {
        this._activeDeadlineSeconds = x
    }
    $activeDeadlineSeconds(x: number) {
        this.activeDeadlineSeconds = x; return this
    }

    _affinity: AffinityHelper;
    get affinity(): AffinityHelper {
        return this._affinity
    }
    set affinity(x: AffinityHelper) {
        this._affinity = x
    }
    $affinity(x: AffinityHelper) {
        this.affinity = x; return this
    }

    _automountServiceAccountToken: boolean;
    get automountServiceAccountToken(): boolean {
        return this._automountServiceAccountToken
    }
    set automountServiceAccountToken(x: boolean) {
        this._automountServiceAccountToken = x
    }
    $automountServiceAccountToken(x: boolean) {
        this.automountServiceAccountToken = x; return this
    }

    _containers: Array<Container>;
    get containers(): Array<Container> {
        return this._containers
    }
    set containers(x: Array<Container>) {
        this._containers = this.set(this.containers, x)
    }
    $containers(x: Array<Container>) {
        this.containers = x; return this
    }

    _dnsConfig: PodDNSConfigHelper;
    get dnsConfig(): PodDNSConfigHelper {
        return this._dnsConfig
    }
    set dnsConfig(x: PodDNSConfigHelper) {
        this._dnsConfig = x
    }
    $dnsConfig(x: PodDNSConfigHelper) {
        this.dnsConfig = x; return this
    }

    _dnsPolicy: string;
    get dnsPolicy(): string {
        return this._dnsPolicy
    }
    set dnsPolicy(x: string) {
        this._dnsPolicy = x
    }
    $dnsPolicy(x: string) {
        this.dnsPolicy = x; return this
    }

    _enableServiceLinks: boolean;
    get enableServiceLinks(): boolean {
        return this._enableServiceLinks
    }
    set enableServiceLinks(x: boolean) {
        this._enableServiceLinks = x
    }
    $enableServiceLinks(x: boolean) {
        this.enableServiceLinks = x; return this
    }

    _ephemeralContainers: Array<EphemeralContainer>;
    get ephemeralContainers(): Array<EphemeralContainer> {
        return this._ephemeralContainers
    }
    set ephemeralContainers(x: Array<EphemeralContainer>) {
        this._ephemeralContainers = this.set(this.ephemeralContainers, x)
    }
    $ephemeralContainers(x: Array<EphemeralContainer>) {
        this.ephemeralContainers = x; return this
    }

    _hostAliases: Array<HostAlias>;
    get hostAliases(): Array<HostAlias> {
        return this._hostAliases
    }
    set hostAliases(x: Array<HostAlias>) {
        this._hostAliases = this.set(this.hostAliases, x)
    }
    $hostAliases(x: Array<HostAlias>) {
        this.hostAliases = x; return this
    }

    _hostIPC: boolean;
    get hostIPC(): boolean {
        return this._hostIPC
    }
    set hostIPC(x: boolean) {
        this._hostIPC = x
    }
    $hostIPC(x: boolean) {
        this.hostIPC = x; return this
    }

    _hostNetwork: boolean;
    get hostNetwork(): boolean {
        return this._hostNetwork
    }
    set hostNetwork(x: boolean) {
        this._hostNetwork = x
    }
    $hostNetwork(x: boolean) {
        this.hostNetwork = x; return this
    }

    _hostPID: boolean;
    get hostPID(): boolean {
        return this._hostPID
    }
    set hostPID(x: boolean) {
        this._hostPID = x
    }
    $hostPID(x: boolean) {
        this.hostPID = x; return this
    }

    _hostname: string;
    get hostname(): string {
        return this._hostname
    }
    set hostname(x: string) {
        this._hostname = x
    }
    $hostname(x: string) {
        this.hostname = x; return this
    }

    _imagePullSecrets: Array<LocalObjectReference>;
    get imagePullSecrets(): Array<LocalObjectReference> {
        return this._imagePullSecrets
    }
    set imagePullSecrets(x: Array<LocalObjectReference>) {
        this._imagePullSecrets = this.set(this.imagePullSecrets, x)
    }
    $imagePullSecrets(x: Array<LocalObjectReference>) {
        this.imagePullSecrets = x; return this
    }

    _initContainers: Array<Container>;
    get initContainers(): Array<Container> {
        return this._initContainers
    }
    set initContainers(x: Array<Container>) {
        this._initContainers = this.set(this.initContainers, x)
    }
    $initContainers(x: Array<Container>) {
        this.initContainers = x; return this
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

    _nodeSelector: any;
    get nodeSelector(): any {
        return this._nodeSelector
    }
    set nodeSelector(x: any) {
        this._nodeSelector = this.set(this.nodeSelector, x)
    }
    $nodeSelector(x: any) {
        this.nodeSelector = x; return this
    }

    _os: PodOSHelper;
    get os(): PodOSHelper {
        return this._os
    }
    set os(x: PodOSHelper) {
        this._os = x
    }
    $os(x: PodOSHelper) {
        this.os = x; return this
    }

    _overhead: {[name: string]: Quantity};
    get overhead(): {[name: string]: Quantity} {
        return this._overhead
    }
    set overhead(x: {[name: string]: Quantity}) {
        this._overhead = this.set(this.overhead, x)
    }
    $overhead(x: {[name: string]: Quantity}) {
        this.overhead = x; return this
    }

    _preemptionPolicy: string;
    get preemptionPolicy(): string {
        return this._preemptionPolicy
    }
    set preemptionPolicy(x: string) {
        this._preemptionPolicy = x
    }
    $preemptionPolicy(x: string) {
        this.preemptionPolicy = x; return this
    }

    _priority: number;
    get priority(): number {
        return this._priority
    }
    set priority(x: number) {
        this._priority = x
    }
    $priority(x: number) {
        this.priority = x; return this
    }

    _priorityClassName: string;
    get priorityClassName(): string {
        return this._priorityClassName
    }
    set priorityClassName(x: string) {
        this._priorityClassName = x
    }
    $priorityClassName(x: string) {
        this.priorityClassName = x; return this
    }

    _readinessGates: Array<PodReadinessGate>;
    get readinessGates(): Array<PodReadinessGate> {
        return this._readinessGates
    }
    set readinessGates(x: Array<PodReadinessGate>) {
        this._readinessGates = this.set(this.readinessGates, x)
    }
    $readinessGates(x: Array<PodReadinessGate>) {
        this.readinessGates = x; return this
    }

    _restartPolicy: string;
    get restartPolicy(): string {
        return this._restartPolicy
    }
    set restartPolicy(x: string) {
        this._restartPolicy = x
    }
    $restartPolicy(x: string) {
        this.restartPolicy = x; return this
    }

    _runtimeClassName: string;
    get runtimeClassName(): string {
        return this._runtimeClassName
    }
    set runtimeClassName(x: string) {
        this._runtimeClassName = x
    }
    $runtimeClassName(x: string) {
        this.runtimeClassName = x; return this
    }

    _schedulerName: string;
    get schedulerName(): string {
        return this._schedulerName
    }
    set schedulerName(x: string) {
        this._schedulerName = x
    }
    $schedulerName(x: string) {
        this.schedulerName = x; return this
    }

    _securityContext: PodSecurityContextHelper;
    get securityContext(): PodSecurityContextHelper {
        return this._securityContext
    }
    set securityContext(x: PodSecurityContextHelper) {
        this._securityContext = x
    }
    $securityContext(x: PodSecurityContextHelper) {
        this.securityContext = x; return this
    }

    _serviceAccount: string;
    get serviceAccount(): string {
        return this._serviceAccount
    }
    set serviceAccount(x: string) {
        this._serviceAccount = x
    }
    $serviceAccount(x: string) {
        this.serviceAccount = x; return this
    }

    _serviceAccountName: string;
    get serviceAccountName(): string {
        return this._serviceAccountName
    }
    set serviceAccountName(x: string) {
        this._serviceAccountName = x
    }
    $serviceAccountName(x: string) {
        this.serviceAccountName = x; return this
    }

    _setHostnameAsFQDN: boolean;
    get setHostnameAsFQDN(): boolean {
        return this._setHostnameAsFQDN
    }
    set setHostnameAsFQDN(x: boolean) {
        this._setHostnameAsFQDN = x
    }
    $setHostnameAsFQDN(x: boolean) {
        this.setHostnameAsFQDN = x; return this
    }

    _shareProcessNamespace: boolean;
    get shareProcessNamespace(): boolean {
        return this._shareProcessNamespace
    }
    set shareProcessNamespace(x: boolean) {
        this._shareProcessNamespace = x
    }
    $shareProcessNamespace(x: boolean) {
        this.shareProcessNamespace = x; return this
    }

    _subdomain: string;
    get subdomain(): string {
        return this._subdomain
    }
    set subdomain(x: string) {
        this._subdomain = x
    }
    $subdomain(x: string) {
        this.subdomain = x; return this
    }

    _terminationGracePeriodSeconds: number;
    get terminationGracePeriodSeconds(): number {
        return this._terminationGracePeriodSeconds
    }
    set terminationGracePeriodSeconds(x: number) {
        this._terminationGracePeriodSeconds = x
    }
    $terminationGracePeriodSeconds(x: number) {
        this.terminationGracePeriodSeconds = x; return this
    }

    _tolerations: Array<Toleration>;
    get tolerations(): Array<Toleration> {
        return this._tolerations
    }
    set tolerations(x: Array<Toleration>) {
        this._tolerations = this.set(this.tolerations, x)
    }
    $tolerations(x: Array<Toleration>) {
        this.tolerations = x; return this
    }

    _topologySpreadConstraints: Array<TopologySpreadConstraint>;
    get topologySpreadConstraints(): Array<TopologySpreadConstraint> {
        return this._topologySpreadConstraints
    }
    set topologySpreadConstraints(x: Array<TopologySpreadConstraint>) {
        this._topologySpreadConstraints = this.set(this.topologySpreadConstraints, x)
    }
    $topologySpreadConstraints(x: Array<TopologySpreadConstraint>) {
        this.topologySpreadConstraints = x; return this
    }

    _volumes: Array<Volume>;
    get volumes(): Array<Volume> {
        return this._volumes
    }
    set volumes(x: Array<Volume>) {
        this._volumes = this.set(this.volumes, x)
    }
    $volumes(x: Array<Volume>) {
        this.volumes = x; return this
    }
}

export interface PodStatusHelper extends PodStatus {
    $conditions(x: Array<PodCondition>): PodStatusHelper;
    $containerStatuses(x: Array<ContainerStatus>): PodStatusHelper;
    $ephemeralContainerStatuses(x: Array<ContainerStatus>): PodStatusHelper;
    $hostIP(x: string): PodStatusHelper;
    $initContainerStatuses(x: Array<ContainerStatus>): PodStatusHelper;
    $message(x: string): PodStatusHelper;
    $nominatedNodeName(x: string): PodStatusHelper;
    $phase(x: string): PodStatusHelper;
    $podIP(x: string): PodStatusHelper;
    $podIPs(x: Array<PodIP>): PodStatusHelper;
    $qosClass(x: string): PodStatusHelper;
    $reason(x: string): PodStatusHelper;
    $startTime(x: Time): PodStatusHelper;
}

/** PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane. */
export class PodStatusHelper extends Template implements PodStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conditions: Array<PodCondition>;
    get conditions(): Array<PodCondition> {
        return this._conditions
    }
    set conditions(x: Array<PodCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $conditions(x: Array<PodCondition>) {
        this.conditions = x; return this
    }

    _containerStatuses: Array<ContainerStatus>;
    get containerStatuses(): Array<ContainerStatus> {
        return this._containerStatuses
    }
    set containerStatuses(x: Array<ContainerStatus>) {
        this._containerStatuses = this.set(this.containerStatuses, x)
    }
    $containerStatuses(x: Array<ContainerStatus>) {
        this.containerStatuses = x; return this
    }

    _ephemeralContainerStatuses: Array<ContainerStatus>;
    get ephemeralContainerStatuses(): Array<ContainerStatus> {
        return this._ephemeralContainerStatuses
    }
    set ephemeralContainerStatuses(x: Array<ContainerStatus>) {
        this._ephemeralContainerStatuses = this.set(this.ephemeralContainerStatuses, x)
    }
    $ephemeralContainerStatuses(x: Array<ContainerStatus>) {
        this.ephemeralContainerStatuses = x; return this
    }

    _hostIP: string;
    get hostIP(): string {
        return this._hostIP
    }
    set hostIP(x: string) {
        this._hostIP = x
    }
    $hostIP(x: string) {
        this.hostIP = x; return this
    }

    _initContainerStatuses: Array<ContainerStatus>;
    get initContainerStatuses(): Array<ContainerStatus> {
        return this._initContainerStatuses
    }
    set initContainerStatuses(x: Array<ContainerStatus>) {
        this._initContainerStatuses = this.set(this.initContainerStatuses, x)
    }
    $initContainerStatuses(x: Array<ContainerStatus>) {
        this.initContainerStatuses = x; return this
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

    _nominatedNodeName: string;
    get nominatedNodeName(): string {
        return this._nominatedNodeName
    }
    set nominatedNodeName(x: string) {
        this._nominatedNodeName = x
    }
    $nominatedNodeName(x: string) {
        this.nominatedNodeName = x; return this
    }

    _phase: string;
    get phase(): string {
        return this._phase
    }
    set phase(x: string) {
        this._phase = x
    }
    $phase(x: string) {
        this.phase = x; return this
    }

    _podIP: string;
    get podIP(): string {
        return this._podIP
    }
    set podIP(x: string) {
        this._podIP = x
    }
    $podIP(x: string) {
        this.podIP = x; return this
    }

    _podIPs: Array<PodIP>;
    get podIPs(): Array<PodIP> {
        return this._podIPs
    }
    set podIPs(x: Array<PodIP>) {
        this._podIPs = this.set(this.podIPs, x)
    }
    $podIPs(x: Array<PodIP>) {
        this.podIPs = x; return this
    }

    _qosClass: string;
    get qosClass(): string {
        return this._qosClass
    }
    set qosClass(x: string) {
        this._qosClass = x
    }
    $qosClass(x: string) {
        this.qosClass = x; return this
    }

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $reason(x: string) {
        this.reason = x; return this
    }

    _startTime: Time;
    get startTime(): Time {
        return this._startTime
    }
    set startTime(x: Time) {
        this._startTime = x
    }
    $startTime(x: Time) {
        this.startTime = x; return this
    }
}

export interface PodTemplateHelper extends PodTemplate {
    $metadata(x: ObjectMetaHelper): PodTemplateHelper;
    $template(x: PodTemplateSpecHelper): PodTemplateHelper;
}

/** PodTemplate describes a template for creating copies of a predefined pod. */
export class PodTemplateHelper extends ResourceTemplate implements PodTemplateHelper {
    static kind = 'PodTemplate';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodTemplateHelper.kind, PodTemplateHelper.apiVersion)
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

    _template: PodTemplateSpecHelper;
    get template(): PodTemplateSpecHelper {
        return this._template
    }
    set template(x: PodTemplateSpecHelper) {
        this._template = x
    }
    $template(x: PodTemplateSpecHelper) {
        this.template = x; return this
    }
}

export interface PodTemplateListHelper extends PodTemplateList {
    $items(x: Array<PodTemplate>): PodTemplateListHelper;
    $metadata(x: ListMetaHelper): PodTemplateListHelper;
}

/** PodTemplateList is a list of PodTemplates. */
export class PodTemplateListHelper extends ResourceTemplate implements PodTemplateListHelper {
    static kind = 'PodTemplateList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodTemplateListHelper.kind, PodTemplateListHelper.apiVersion)
    }

    _items: Array<PodTemplate>;
    get items(): Array<PodTemplate> {
        return this._items
    }
    set items(x: Array<PodTemplate>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<PodTemplate>) {
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

export interface PodTemplateSpecHelper extends PodTemplateSpec {
    $metadata(x: ObjectMetaHelper): PodTemplateSpecHelper;
    $spec(x: PodSpecHelper): PodTemplateSpecHelper;
}

/** PodTemplateSpec describes the data a pod should have when created from a template */
export class PodTemplateSpecHelper extends Template implements PodTemplateSpecHelper {
    constructor(obj: any) {
        super(obj)
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

    _spec: PodSpecHelper;
    get spec(): PodSpecHelper {
        return this._spec
    }
    set spec(x: PodSpecHelper) {
        this._spec = x
    }
    $spec(x: PodSpecHelper) {
        this.spec = x; return this
    }
}

export interface PortStatusHelper extends PortStatus {
    $error(x: string): PortStatusHelper;
    $port(x: number): PortStatusHelper;
    $protocol(x: string): PortStatusHelper;
}

export class PortStatusHelper extends Template implements PortStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _error: string;
    get error(): string {
        return this._error
    }
    set error(x: string) {
        this._error = x
    }
    $error(x: string) {
        this.error = x; return this
    }

    _port: number;
    get port(): number {
        return this._port
    }
    set port(x: number) {
        this._port = x
    }
    $port(x: number) {
        this.port = x; return this
    }

    _protocol: string;
    get protocol(): string {
        return this._protocol
    }
    set protocol(x: string) {
        this._protocol = x
    }
    $protocol(x: string) {
        this.protocol = x; return this
    }
}

export interface PortworxVolumeSourceHelper extends PortworxVolumeSource {
    $fsType(x: string): PortworxVolumeSourceHelper;
    $readOnly(x: boolean): PortworxVolumeSourceHelper;
    $volumeID(x: string): PortworxVolumeSourceHelper;
}

/** PortworxVolumeSource represents a Portworx volume resource. */
export class PortworxVolumeSourceHelper extends Template implements PortworxVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _volumeID: string;
    get volumeID(): string {
        return this._volumeID
    }
    set volumeID(x: string) {
        this._volumeID = x
    }
    $volumeID(x: string) {
        this.volumeID = x; return this
    }
}

export interface PreferredSchedulingTermHelper extends PreferredSchedulingTerm {
    $preference(x: NodeSelectorTermHelper): PreferredSchedulingTermHelper;
    $weight(x: number): PreferredSchedulingTermHelper;
}

/** An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op). */
export class PreferredSchedulingTermHelper extends Template implements PreferredSchedulingTermHelper {
    constructor(obj: any) {
        super(obj)
    }

    _preference: NodeSelectorTermHelper;
    get preference(): NodeSelectorTermHelper {
        return this._preference
    }
    set preference(x: NodeSelectorTermHelper) {
        this._preference = x
    }
    $preference(x: NodeSelectorTermHelper) {
        this.preference = x; return this
    }

    _weight: number;
    get weight(): number {
        return this._weight
    }
    set weight(x: number) {
        this._weight = x
    }
    $weight(x: number) {
        this.weight = x; return this
    }
}

export interface ProbeHelper extends Probe {
    $exec(x: ExecActionHelper): ProbeHelper;
    $failureThreshold(x: number): ProbeHelper;
    $grpc(x: GRPCActionHelper): ProbeHelper;
    $httpGet(x: HTTPGetActionHelper): ProbeHelper;
    $initialDelaySeconds(x: number): ProbeHelper;
    $periodSeconds(x: number): ProbeHelper;
    $successThreshold(x: number): ProbeHelper;
    $tcpSocket(x: TCPSocketActionHelper): ProbeHelper;
    $terminationGracePeriodSeconds(x: number): ProbeHelper;
    $timeoutSeconds(x: number): ProbeHelper;
}

/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
export class ProbeHelper extends Template implements ProbeHelper {
    constructor(obj: any) {
        super(obj)
    }

    _exec: ExecActionHelper;
    get exec(): ExecActionHelper {
        return this._exec
    }
    set exec(x: ExecActionHelper) {
        this._exec = x
    }
    $exec(x: ExecActionHelper) {
        this.exec = x; return this
    }

    _failureThreshold: number;
    get failureThreshold(): number {
        return this._failureThreshold
    }
    set failureThreshold(x: number) {
        this._failureThreshold = x
    }
    $failureThreshold(x: number) {
        this.failureThreshold = x; return this
    }

    _grpc: GRPCActionHelper;
    get grpc(): GRPCActionHelper {
        return this._grpc
    }
    set grpc(x: GRPCActionHelper) {
        this._grpc = x
    }
    $grpc(x: GRPCActionHelper) {
        this.grpc = x; return this
    }

    _httpGet: HTTPGetActionHelper;
    get httpGet(): HTTPGetActionHelper {
        return this._httpGet
    }
    set httpGet(x: HTTPGetActionHelper) {
        this._httpGet = x
    }
    $httpGet(x: HTTPGetActionHelper) {
        this.httpGet = x; return this
    }

    _initialDelaySeconds: number;
    get initialDelaySeconds(): number {
        return this._initialDelaySeconds
    }
    set initialDelaySeconds(x: number) {
        this._initialDelaySeconds = x
    }
    $initialDelaySeconds(x: number) {
        this.initialDelaySeconds = x; return this
    }

    _periodSeconds: number;
    get periodSeconds(): number {
        return this._periodSeconds
    }
    set periodSeconds(x: number) {
        this._periodSeconds = x
    }
    $periodSeconds(x: number) {
        this.periodSeconds = x; return this
    }

    _successThreshold: number;
    get successThreshold(): number {
        return this._successThreshold
    }
    set successThreshold(x: number) {
        this._successThreshold = x
    }
    $successThreshold(x: number) {
        this.successThreshold = x; return this
    }

    _tcpSocket: TCPSocketActionHelper;
    get tcpSocket(): TCPSocketActionHelper {
        return this._tcpSocket
    }
    set tcpSocket(x: TCPSocketActionHelper) {
        this._tcpSocket = x
    }
    $tcpSocket(x: TCPSocketActionHelper) {
        this.tcpSocket = x; return this
    }

    _terminationGracePeriodSeconds: number;
    get terminationGracePeriodSeconds(): number {
        return this._terminationGracePeriodSeconds
    }
    set terminationGracePeriodSeconds(x: number) {
        this._terminationGracePeriodSeconds = x
    }
    $terminationGracePeriodSeconds(x: number) {
        this.terminationGracePeriodSeconds = x; return this
    }

    _timeoutSeconds: number;
    get timeoutSeconds(): number {
        return this._timeoutSeconds
    }
    set timeoutSeconds(x: number) {
        this._timeoutSeconds = x
    }
    $timeoutSeconds(x: number) {
        this.timeoutSeconds = x; return this
    }
}

export interface ProjectedVolumeSourceHelper extends ProjectedVolumeSource {
    $defaultMode(x: number): ProjectedVolumeSourceHelper;
    $sources(x: Array<VolumeProjection>): ProjectedVolumeSourceHelper;
}

/** Represents a projected volume source */
export class ProjectedVolumeSourceHelper extends Template implements ProjectedVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _defaultMode: number;
    get defaultMode(): number {
        return this._defaultMode
    }
    set defaultMode(x: number) {
        this._defaultMode = x
    }
    $defaultMode(x: number) {
        this.defaultMode = x; return this
    }

    _sources: Array<VolumeProjection>;
    get sources(): Array<VolumeProjection> {
        return this._sources
    }
    set sources(x: Array<VolumeProjection>) {
        this._sources = this.set(this.sources, x)
    }
    $sources(x: Array<VolumeProjection>) {
        this.sources = x; return this
    }
}

export interface QuobyteVolumeSourceHelper extends QuobyteVolumeSource {
    $group(x: string): QuobyteVolumeSourceHelper;
    $readOnly(x: boolean): QuobyteVolumeSourceHelper;
    $registry(x: string): QuobyteVolumeSourceHelper;
    $tenant(x: string): QuobyteVolumeSourceHelper;
    $user(x: string): QuobyteVolumeSourceHelper;
    $volume(x: string): QuobyteVolumeSourceHelper;
}

/** Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
export class QuobyteVolumeSourceHelper extends Template implements QuobyteVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _group: string;
    get group(): string {
        return this._group
    }
    set group(x: string) {
        this._group = x
    }
    $group(x: string) {
        this.group = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _registry: string;
    get registry(): string {
        return this._registry
    }
    set registry(x: string) {
        this._registry = x
    }
    $registry(x: string) {
        this.registry = x; return this
    }

    _tenant: string;
    get tenant(): string {
        return this._tenant
    }
    set tenant(x: string) {
        this._tenant = x
    }
    $tenant(x: string) {
        this.tenant = x; return this
    }

    _user: string;
    get user(): string {
        return this._user
    }
    set user(x: string) {
        this._user = x
    }
    $user(x: string) {
        this.user = x; return this
    }

    _volume: string;
    get volume(): string {
        return this._volume
    }
    set volume(x: string) {
        this._volume = x
    }
    $volume(x: string) {
        this.volume = x; return this
    }
}

export interface RBDPersistentVolumeSourceHelper extends RBDPersistentVolumeSource {
    $fsType(x: string): RBDPersistentVolumeSourceHelper;
    $image(x: string): RBDPersistentVolumeSourceHelper;
    $keyring(x: string): RBDPersistentVolumeSourceHelper;
    $monitors(x: Array<string>): RBDPersistentVolumeSourceHelper;
    $pool(x: string): RBDPersistentVolumeSourceHelper;
    $readOnly(x: boolean): RBDPersistentVolumeSourceHelper;
    $secretRef(x: SecretReferenceHelper): RBDPersistentVolumeSourceHelper;
    $user(x: string): RBDPersistentVolumeSourceHelper;
}

/** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
export class RBDPersistentVolumeSourceHelper extends Template implements RBDPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _image: string;
    get image(): string {
        return this._image
    }
    set image(x: string) {
        this._image = x
    }
    $image(x: string) {
        this.image = x; return this
    }

    _keyring: string;
    get keyring(): string {
        return this._keyring
    }
    set keyring(x: string) {
        this._keyring = x
    }
    $keyring(x: string) {
        this.keyring = x; return this
    }

    _monitors: Array<string>;
    get monitors(): Array<string> {
        return this._monitors
    }
    set monitors(x: Array<string>) {
        this._monitors = this.set(this.monitors, x)
    }
    $monitors(x: Array<string>) {
        this.monitors = x; return this
    }

    _pool: string;
    get pool(): string {
        return this._pool
    }
    set pool(x: string) {
        this._pool = x
    }
    $pool(x: string) {
        this.pool = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _secretRef: SecretReferenceHelper;
    get secretRef(): SecretReferenceHelper {
        return this._secretRef
    }
    set secretRef(x: SecretReferenceHelper) {
        this._secretRef = x
    }
    $secretRef(x: SecretReferenceHelper) {
        this.secretRef = x; return this
    }

    _user: string;
    get user(): string {
        return this._user
    }
    set user(x: string) {
        this._user = x
    }
    $user(x: string) {
        this.user = x; return this
    }
}

export interface RBDVolumeSourceHelper extends RBDVolumeSource {
    $fsType(x: string): RBDVolumeSourceHelper;
    $image(x: string): RBDVolumeSourceHelper;
    $keyring(x: string): RBDVolumeSourceHelper;
    $monitors(x: Array<string>): RBDVolumeSourceHelper;
    $pool(x: string): RBDVolumeSourceHelper;
    $readOnly(x: boolean): RBDVolumeSourceHelper;
    $secretRef(x: LocalObjectReferenceHelper): RBDVolumeSourceHelper;
    $user(x: string): RBDVolumeSourceHelper;
}

/** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
export class RBDVolumeSourceHelper extends Template implements RBDVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _image: string;
    get image(): string {
        return this._image
    }
    set image(x: string) {
        this._image = x
    }
    $image(x: string) {
        this.image = x; return this
    }

    _keyring: string;
    get keyring(): string {
        return this._keyring
    }
    set keyring(x: string) {
        this._keyring = x
    }
    $keyring(x: string) {
        this.keyring = x; return this
    }

    _monitors: Array<string>;
    get monitors(): Array<string> {
        return this._monitors
    }
    set monitors(x: Array<string>) {
        this._monitors = this.set(this.monitors, x)
    }
    $monitors(x: Array<string>) {
        this.monitors = x; return this
    }

    _pool: string;
    get pool(): string {
        return this._pool
    }
    set pool(x: string) {
        this._pool = x
    }
    $pool(x: string) {
        this.pool = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _secretRef: LocalObjectReferenceHelper;
    get secretRef(): LocalObjectReferenceHelper {
        return this._secretRef
    }
    set secretRef(x: LocalObjectReferenceHelper) {
        this._secretRef = x
    }
    $secretRef(x: LocalObjectReferenceHelper) {
        this.secretRef = x; return this
    }

    _user: string;
    get user(): string {
        return this._user
    }
    set user(x: string) {
        this._user = x
    }
    $user(x: string) {
        this.user = x; return this
    }
}

export interface ReplicationControllerHelper extends ReplicationController {
    $metadata(x: ObjectMetaHelper): ReplicationControllerHelper;
    $spec(x: ReplicationControllerSpecHelper): ReplicationControllerHelper;
    $status(x: ReplicationControllerStatusHelper): ReplicationControllerHelper;
}

/** ReplicationController represents the configuration of a replication controller. */
export class ReplicationControllerHelper extends ResourceTemplate implements ReplicationControllerHelper {
    static kind = 'ReplicationController';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ReplicationControllerHelper.kind, ReplicationControllerHelper.apiVersion)
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

    _spec: ReplicationControllerSpecHelper;
    get spec(): ReplicationControllerSpecHelper {
        return this._spec
    }
    set spec(x: ReplicationControllerSpecHelper) {
        this._spec = x
    }
    $spec(x: ReplicationControllerSpecHelper) {
        this.spec = x; return this
    }

    _status: ReplicationControllerStatusHelper;
    get status(): ReplicationControllerStatusHelper {
        return this._status
    }
    set status(x: ReplicationControllerStatusHelper) {
        this._status = x
    }
    $status(x: ReplicationControllerStatusHelper) {
        this.status = x; return this
    }
}

export interface ReplicationControllerConditionHelper extends ReplicationControllerCondition {
    $lastTransitionTime(x: Time): ReplicationControllerConditionHelper;
    $message(x: string): ReplicationControllerConditionHelper;
    $reason(x: string): ReplicationControllerConditionHelper;
    $status(x: string): ReplicationControllerConditionHelper;
    $type(x: string): ReplicationControllerConditionHelper;
}

/** ReplicationControllerCondition describes the state of a replication controller at a certain point. */
export class ReplicationControllerConditionHelper extends Template implements ReplicationControllerConditionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _lastTransitionTime: Time;
    get lastTransitionTime(): Time {
        return this._lastTransitionTime
    }
    set lastTransitionTime(x: Time) {
        this._lastTransitionTime = x
    }
    $lastTransitionTime(x: Time) {
        this.lastTransitionTime = x; return this
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

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $reason(x: string) {
        this.reason = x; return this
    }

    _status: string;
    get status(): string {
        return this._status
    }
    set status(x: string) {
        this._status = x
    }
    $status(x: string) {
        this.status = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface ReplicationControllerListHelper extends ReplicationControllerList {
    $items(x: Array<ReplicationController>): ReplicationControllerListHelper;
    $metadata(x: ListMetaHelper): ReplicationControllerListHelper;
}

/** ReplicationControllerList is a collection of replication controllers. */
export class ReplicationControllerListHelper extends ResourceTemplate implements ReplicationControllerListHelper {
    static kind = 'ReplicationControllerList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ReplicationControllerListHelper.kind, ReplicationControllerListHelper.apiVersion)
    }

    _items: Array<ReplicationController>;
    get items(): Array<ReplicationController> {
        return this._items
    }
    set items(x: Array<ReplicationController>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<ReplicationController>) {
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

export interface ReplicationControllerSpecHelper extends ReplicationControllerSpec {
    $minReadySeconds(x: number): ReplicationControllerSpecHelper;
    $replicas(x: number): ReplicationControllerSpecHelper;
    $selector(x: any): ReplicationControllerSpecHelper;
    $template(x: PodTemplateSpecHelper): ReplicationControllerSpecHelper;
}

/** ReplicationControllerSpec is the specification of a replication controller. */
export class ReplicationControllerSpecHelper extends Template implements ReplicationControllerSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _minReadySeconds: number;
    get minReadySeconds(): number {
        return this._minReadySeconds
    }
    set minReadySeconds(x: number) {
        this._minReadySeconds = x
    }
    $minReadySeconds(x: number) {
        this.minReadySeconds = x; return this
    }

    _replicas: number;
    get replicas(): number {
        return this._replicas
    }
    set replicas(x: number) {
        this._replicas = x
    }
    $replicas(x: number) {
        this.replicas = x; return this
    }

    _selector: any;
    get selector(): any {
        return this._selector
    }
    set selector(x: any) {
        this._selector = this.set(this.selector, x)
    }
    $selector(x: any) {
        this.selector = x; return this
    }

    _template: PodTemplateSpecHelper;
    get template(): PodTemplateSpecHelper {
        return this._template
    }
    set template(x: PodTemplateSpecHelper) {
        this._template = x
    }
    $template(x: PodTemplateSpecHelper) {
        this.template = x; return this
    }
}

export interface ReplicationControllerStatusHelper extends ReplicationControllerStatus {
    $availableReplicas(x: number): ReplicationControllerStatusHelper;
    $conditions(x: Array<ReplicationControllerCondition>): ReplicationControllerStatusHelper;
    $fullyLabeledReplicas(x: number): ReplicationControllerStatusHelper;
    $observedGeneration(x: number): ReplicationControllerStatusHelper;
    $readyReplicas(x: number): ReplicationControllerStatusHelper;
    $replicas(x: number): ReplicationControllerStatusHelper;
}

/** ReplicationControllerStatus represents the current status of a replication controller. */
export class ReplicationControllerStatusHelper extends Template implements ReplicationControllerStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _availableReplicas: number;
    get availableReplicas(): number {
        return this._availableReplicas
    }
    set availableReplicas(x: number) {
        this._availableReplicas = x
    }
    $availableReplicas(x: number) {
        this.availableReplicas = x; return this
    }

    _conditions: Array<ReplicationControllerCondition>;
    get conditions(): Array<ReplicationControllerCondition> {
        return this._conditions
    }
    set conditions(x: Array<ReplicationControllerCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $conditions(x: Array<ReplicationControllerCondition>) {
        this.conditions = x; return this
    }

    _fullyLabeledReplicas: number;
    get fullyLabeledReplicas(): number {
        return this._fullyLabeledReplicas
    }
    set fullyLabeledReplicas(x: number) {
        this._fullyLabeledReplicas = x
    }
    $fullyLabeledReplicas(x: number) {
        this.fullyLabeledReplicas = x; return this
    }

    _observedGeneration: number;
    get observedGeneration(): number {
        return this._observedGeneration
    }
    set observedGeneration(x: number) {
        this._observedGeneration = x
    }
    $observedGeneration(x: number) {
        this.observedGeneration = x; return this
    }

    _readyReplicas: number;
    get readyReplicas(): number {
        return this._readyReplicas
    }
    set readyReplicas(x: number) {
        this._readyReplicas = x
    }
    $readyReplicas(x: number) {
        this.readyReplicas = x; return this
    }

    _replicas: number;
    get replicas(): number {
        return this._replicas
    }
    set replicas(x: number) {
        this._replicas = x
    }
    $replicas(x: number) {
        this.replicas = x; return this
    }
}

export interface ResourceFieldSelectorHelper extends ResourceFieldSelector {
    $containerName(x: string): ResourceFieldSelectorHelper;
    $divisor(x: Quantity): ResourceFieldSelectorHelper;
    $resource(x: string): ResourceFieldSelectorHelper;
}

/** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
export class ResourceFieldSelectorHelper extends Template implements ResourceFieldSelectorHelper {
    constructor(obj: any) {
        super(obj)
    }

    _containerName: string;
    get containerName(): string {
        return this._containerName
    }
    set containerName(x: string) {
        this._containerName = x
    }
    $containerName(x: string) {
        this.containerName = x; return this
    }

    _divisor: Quantity;
    get divisor(): Quantity {
        return this._divisor
    }
    set divisor(x: Quantity) {
        this._divisor = x
    }
    $divisor(x: Quantity) {
        this.divisor = x; return this
    }

    _resource: string;
    get resource(): string {
        return this._resource
    }
    set resource(x: string) {
        this._resource = x
    }
    $resource(x: string) {
        this.resource = x; return this
    }
}

export interface ResourceQuotaHelper extends ResourceQuota {
    $metadata(x: ObjectMetaHelper): ResourceQuotaHelper;
    $spec(x: ResourceQuotaSpecHelper): ResourceQuotaHelper;
    $status(x: ResourceQuotaStatusHelper): ResourceQuotaHelper;
}

/** ResourceQuota sets aggregate quota restrictions enforced per namespace */
export class ResourceQuotaHelper extends ResourceTemplate implements ResourceQuotaHelper {
    static kind = 'ResourceQuota';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ResourceQuotaHelper.kind, ResourceQuotaHelper.apiVersion)
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

    _spec: ResourceQuotaSpecHelper;
    get spec(): ResourceQuotaSpecHelper {
        return this._spec
    }
    set spec(x: ResourceQuotaSpecHelper) {
        this._spec = x
    }
    $spec(x: ResourceQuotaSpecHelper) {
        this.spec = x; return this
    }

    _status: ResourceQuotaStatusHelper;
    get status(): ResourceQuotaStatusHelper {
        return this._status
    }
    set status(x: ResourceQuotaStatusHelper) {
        this._status = x
    }
    $status(x: ResourceQuotaStatusHelper) {
        this.status = x; return this
    }
}

export interface ResourceQuotaListHelper extends ResourceQuotaList {
    $items(x: Array<ResourceQuota>): ResourceQuotaListHelper;
    $metadata(x: ListMetaHelper): ResourceQuotaListHelper;
}

/** ResourceQuotaList is a list of ResourceQuota items. */
export class ResourceQuotaListHelper extends ResourceTemplate implements ResourceQuotaListHelper {
    static kind = 'ResourceQuotaList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ResourceQuotaListHelper.kind, ResourceQuotaListHelper.apiVersion)
    }

    _items: Array<ResourceQuota>;
    get items(): Array<ResourceQuota> {
        return this._items
    }
    set items(x: Array<ResourceQuota>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<ResourceQuota>) {
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

export interface ResourceQuotaSpecHelper extends ResourceQuotaSpec {
    $hard(x: {[name: string]: Quantity}): ResourceQuotaSpecHelper;
    $scopeSelector(x: ScopeSelectorHelper): ResourceQuotaSpecHelper;
    $scopes(x: Array<string>): ResourceQuotaSpecHelper;
}

/** ResourceQuotaSpec defines the desired hard limits to enforce for Quota. */
export class ResourceQuotaSpecHelper extends Template implements ResourceQuotaSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _hard: {[name: string]: Quantity};
    get hard(): {[name: string]: Quantity} {
        return this._hard
    }
    set hard(x: {[name: string]: Quantity}) {
        this._hard = this.set(this.hard, x)
    }
    $hard(x: {[name: string]: Quantity}) {
        this.hard = x; return this
    }

    _scopeSelector: ScopeSelectorHelper;
    get scopeSelector(): ScopeSelectorHelper {
        return this._scopeSelector
    }
    set scopeSelector(x: ScopeSelectorHelper) {
        this._scopeSelector = x
    }
    $scopeSelector(x: ScopeSelectorHelper) {
        this.scopeSelector = x; return this
    }

    _scopes: Array<string>;
    get scopes(): Array<string> {
        return this._scopes
    }
    set scopes(x: Array<string>) {
        this._scopes = this.set(this.scopes, x)
    }
    $scopes(x: Array<string>) {
        this.scopes = x; return this
    }
}

export interface ResourceQuotaStatusHelper extends ResourceQuotaStatus {
    $hard(x: {[name: string]: Quantity}): ResourceQuotaStatusHelper;
    $used(x: {[name: string]: Quantity}): ResourceQuotaStatusHelper;
}

/** ResourceQuotaStatus defines the enforced hard limits and observed use. */
export class ResourceQuotaStatusHelper extends Template implements ResourceQuotaStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _hard: {[name: string]: Quantity};
    get hard(): {[name: string]: Quantity} {
        return this._hard
    }
    set hard(x: {[name: string]: Quantity}) {
        this._hard = this.set(this.hard, x)
    }
    $hard(x: {[name: string]: Quantity}) {
        this.hard = x; return this
    }

    _used: {[name: string]: Quantity};
    get used(): {[name: string]: Quantity} {
        return this._used
    }
    set used(x: {[name: string]: Quantity}) {
        this._used = this.set(this.used, x)
    }
    $used(x: {[name: string]: Quantity}) {
        this.used = x; return this
    }
}

export interface ResourceRequirementsHelper extends ResourceRequirements {
    $limits(x: {[name: string]: Quantity}): ResourceRequirementsHelper;
    $requests(x: {[name: string]: Quantity}): ResourceRequirementsHelper;
}

/** ResourceRequirements describes the compute resource requirements. */
export class ResourceRequirementsHelper extends Template implements ResourceRequirementsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _limits: {[name: string]: Quantity};
    get limits(): {[name: string]: Quantity} {
        return this._limits
    }
    set limits(x: {[name: string]: Quantity}) {
        this._limits = this.set(this.limits, x)
    }
    $limits(x: {[name: string]: Quantity}) {
        this.limits = x; return this
    }

    _requests: {[name: string]: Quantity};
    get requests(): {[name: string]: Quantity} {
        return this._requests
    }
    set requests(x: {[name: string]: Quantity}) {
        this._requests = this.set(this.requests, x)
    }
    $requests(x: {[name: string]: Quantity}) {
        this.requests = x; return this
    }
}

export interface SELinuxOptionsHelper extends SELinuxOptions {
    $level(x: string): SELinuxOptionsHelper;
    $role(x: string): SELinuxOptionsHelper;
    $type(x: string): SELinuxOptionsHelper;
    $user(x: string): SELinuxOptionsHelper;
}

/** SELinuxOptions are the labels to be applied to the container */
export class SELinuxOptionsHelper extends Template implements SELinuxOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _level: string;
    get level(): string {
        return this._level
    }
    set level(x: string) {
        this._level = x
    }
    $level(x: string) {
        this.level = x; return this
    }

    _role: string;
    get role(): string {
        return this._role
    }
    set role(x: string) {
        this._role = x
    }
    $role(x: string) {
        this.role = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }

    _user: string;
    get user(): string {
        return this._user
    }
    set user(x: string) {
        this._user = x
    }
    $user(x: string) {
        this.user = x; return this
    }
}

export interface ScaleIOPersistentVolumeSourceHelper extends ScaleIOPersistentVolumeSource {
    $fsType(x: string): ScaleIOPersistentVolumeSourceHelper;
    $gateway(x: string): ScaleIOPersistentVolumeSourceHelper;
    $protectionDomain(x: string): ScaleIOPersistentVolumeSourceHelper;
    $readOnly(x: boolean): ScaleIOPersistentVolumeSourceHelper;
    $secretRef(x: SecretReferenceHelper): ScaleIOPersistentVolumeSourceHelper;
    $sslEnabled(x: boolean): ScaleIOPersistentVolumeSourceHelper;
    $storageMode(x: string): ScaleIOPersistentVolumeSourceHelper;
    $storagePool(x: string): ScaleIOPersistentVolumeSourceHelper;
    $system(x: string): ScaleIOPersistentVolumeSourceHelper;
    $volumeName(x: string): ScaleIOPersistentVolumeSourceHelper;
}

/** ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume */
export class ScaleIOPersistentVolumeSourceHelper extends Template implements ScaleIOPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _gateway: string;
    get gateway(): string {
        return this._gateway
    }
    set gateway(x: string) {
        this._gateway = x
    }
    $gateway(x: string) {
        this.gateway = x; return this
    }

    _protectionDomain: string;
    get protectionDomain(): string {
        return this._protectionDomain
    }
    set protectionDomain(x: string) {
        this._protectionDomain = x
    }
    $protectionDomain(x: string) {
        this.protectionDomain = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _secretRef: SecretReferenceHelper;
    get secretRef(): SecretReferenceHelper {
        return this._secretRef
    }
    set secretRef(x: SecretReferenceHelper) {
        this._secretRef = x
    }
    $secretRef(x: SecretReferenceHelper) {
        this.secretRef = x; return this
    }

    _sslEnabled: boolean;
    get sslEnabled(): boolean {
        return this._sslEnabled
    }
    set sslEnabled(x: boolean) {
        this._sslEnabled = x
    }
    $sslEnabled(x: boolean) {
        this.sslEnabled = x; return this
    }

    _storageMode: string;
    get storageMode(): string {
        return this._storageMode
    }
    set storageMode(x: string) {
        this._storageMode = x
    }
    $storageMode(x: string) {
        this.storageMode = x; return this
    }

    _storagePool: string;
    get storagePool(): string {
        return this._storagePool
    }
    set storagePool(x: string) {
        this._storagePool = x
    }
    $storagePool(x: string) {
        this.storagePool = x; return this
    }

    _system: string;
    get system(): string {
        return this._system
    }
    set system(x: string) {
        this._system = x
    }
    $system(x: string) {
        this.system = x; return this
    }

    _volumeName: string;
    get volumeName(): string {
        return this._volumeName
    }
    set volumeName(x: string) {
        this._volumeName = x
    }
    $volumeName(x: string) {
        this.volumeName = x; return this
    }
}

export interface ScaleIOVolumeSourceHelper extends ScaleIOVolumeSource {
    $fsType(x: string): ScaleIOVolumeSourceHelper;
    $gateway(x: string): ScaleIOVolumeSourceHelper;
    $protectionDomain(x: string): ScaleIOVolumeSourceHelper;
    $readOnly(x: boolean): ScaleIOVolumeSourceHelper;
    $secretRef(x: LocalObjectReferenceHelper): ScaleIOVolumeSourceHelper;
    $sslEnabled(x: boolean): ScaleIOVolumeSourceHelper;
    $storageMode(x: string): ScaleIOVolumeSourceHelper;
    $storagePool(x: string): ScaleIOVolumeSourceHelper;
    $system(x: string): ScaleIOVolumeSourceHelper;
    $volumeName(x: string): ScaleIOVolumeSourceHelper;
}

/** ScaleIOVolumeSource represents a persistent ScaleIO volume */
export class ScaleIOVolumeSourceHelper extends Template implements ScaleIOVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _gateway: string;
    get gateway(): string {
        return this._gateway
    }
    set gateway(x: string) {
        this._gateway = x
    }
    $gateway(x: string) {
        this.gateway = x; return this
    }

    _protectionDomain: string;
    get protectionDomain(): string {
        return this._protectionDomain
    }
    set protectionDomain(x: string) {
        this._protectionDomain = x
    }
    $protectionDomain(x: string) {
        this.protectionDomain = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _secretRef: LocalObjectReferenceHelper;
    get secretRef(): LocalObjectReferenceHelper {
        return this._secretRef
    }
    set secretRef(x: LocalObjectReferenceHelper) {
        this._secretRef = x
    }
    $secretRef(x: LocalObjectReferenceHelper) {
        this.secretRef = x; return this
    }

    _sslEnabled: boolean;
    get sslEnabled(): boolean {
        return this._sslEnabled
    }
    set sslEnabled(x: boolean) {
        this._sslEnabled = x
    }
    $sslEnabled(x: boolean) {
        this.sslEnabled = x; return this
    }

    _storageMode: string;
    get storageMode(): string {
        return this._storageMode
    }
    set storageMode(x: string) {
        this._storageMode = x
    }
    $storageMode(x: string) {
        this.storageMode = x; return this
    }

    _storagePool: string;
    get storagePool(): string {
        return this._storagePool
    }
    set storagePool(x: string) {
        this._storagePool = x
    }
    $storagePool(x: string) {
        this.storagePool = x; return this
    }

    _system: string;
    get system(): string {
        return this._system
    }
    set system(x: string) {
        this._system = x
    }
    $system(x: string) {
        this.system = x; return this
    }

    _volumeName: string;
    get volumeName(): string {
        return this._volumeName
    }
    set volumeName(x: string) {
        this._volumeName = x
    }
    $volumeName(x: string) {
        this.volumeName = x; return this
    }
}

export interface ScopeSelectorHelper extends ScopeSelector {
    $matchExpressions(x: Array<ScopedResourceSelectorRequirement>): ScopeSelectorHelper;
}

/** A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements. */
export class ScopeSelectorHelper extends Template implements ScopeSelectorHelper {
    constructor(obj: any) {
        super(obj)
    }

    _matchExpressions: Array<ScopedResourceSelectorRequirement>;
    get matchExpressions(): Array<ScopedResourceSelectorRequirement> {
        return this._matchExpressions
    }
    set matchExpressions(x: Array<ScopedResourceSelectorRequirement>) {
        this._matchExpressions = this.set(this.matchExpressions, x)
    }
    $matchExpressions(x: Array<ScopedResourceSelectorRequirement>) {
        this.matchExpressions = x; return this
    }
}

export interface ScopedResourceSelectorRequirementHelper extends ScopedResourceSelectorRequirement {
    $operator(x: string): ScopedResourceSelectorRequirementHelper;
    $scopeName(x: string): ScopedResourceSelectorRequirementHelper;
    $values(x: Array<string>): ScopedResourceSelectorRequirementHelper;
}

/** A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values. */
export class ScopedResourceSelectorRequirementHelper extends Template implements ScopedResourceSelectorRequirementHelper {
    constructor(obj: any) {
        super(obj)
    }

    _operator: string;
    get operator(): string {
        return this._operator
    }
    set operator(x: string) {
        this._operator = x
    }
    $operator(x: string) {
        this.operator = x; return this
    }

    _scopeName: string;
    get scopeName(): string {
        return this._scopeName
    }
    set scopeName(x: string) {
        this._scopeName = x
    }
    $scopeName(x: string) {
        this.scopeName = x; return this
    }

    _values: Array<string>;
    get values(): Array<string> {
        return this._values
    }
    set values(x: Array<string>) {
        this._values = this.set(this.values, x)
    }
    $values(x: Array<string>) {
        this.values = x; return this
    }
}

export interface SeccompProfileHelper extends SeccompProfile {
    $localhostProfile(x: string): SeccompProfileHelper;
    $type(x: string): SeccompProfileHelper;
}

/** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
export class SeccompProfileHelper extends Template implements SeccompProfileHelper {
    constructor(obj: any) {
        super(obj)
    }

    _localhostProfile: string;
    get localhostProfile(): string {
        return this._localhostProfile
    }
    set localhostProfile(x: string) {
        this._localhostProfile = x
    }
    $localhostProfile(x: string) {
        this.localhostProfile = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface SecretHelper extends Secret {
    $data(x: any): SecretHelper;
    $immutable(x: boolean): SecretHelper;
    $metadata(x: ObjectMetaHelper): SecretHelper;
    $stringData(x: any): SecretHelper;
    $type(x: string): SecretHelper;
}

/** Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes. */
export class SecretHelper extends ResourceTemplate implements SecretHelper {
    static kind = 'Secret';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, SecretHelper.kind, SecretHelper.apiVersion)
    }

    _data: any;
    get data(): any {
        return this._data
    }
    set data(x: any) {
        this._data = this.set(this.data, x)
    }
    $data(x: any) {
        this.data = x; return this
    }

    _immutable: boolean;
    get immutable(): boolean {
        return this._immutable
    }
    set immutable(x: boolean) {
        this._immutable = x
    }
    $immutable(x: boolean) {
        this.immutable = x; return this
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

    _stringData: any;
    get stringData(): any {
        return this._stringData
    }
    set stringData(x: any) {
        this._stringData = this.set(this.stringData, x)
    }
    $stringData(x: any) {
        this.stringData = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface SecretEnvSourceHelper extends SecretEnvSource {
    $optional(x: boolean): SecretEnvSourceHelper;
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

    _optional: boolean;
    get optional(): boolean {
        return this._optional
    }
    set optional(x: boolean) {
        this._optional = x
    }
    $optional(x: boolean) {
        this.optional = x; return this
    }
}

export interface SecretKeySelectorHelper extends SecretKeySelector {
    $key(x: string): SecretKeySelectorHelper;
    $optional(x: boolean): SecretKeySelectorHelper;
}

/** SecretKeySelector selects a key of a Secret. */
export class SecretKeySelectorHelper extends Template implements SecretKeySelectorHelper {
    constructor(obj: any) {
        super(obj)
    }

    _key: string;
    get key(): string {
        return this._key
    }
    set key(x: string) {
        this._key = x
    }
    $key(x: string) {
        this.key = x; return this
    }

    _optional: boolean;
    get optional(): boolean {
        return this._optional
    }
    set optional(x: boolean) {
        this._optional = x
    }
    $optional(x: boolean) {
        this.optional = x; return this
    }
}

export interface SecretListHelper extends SecretList {
    $items(x: Array<Secret>): SecretListHelper;
    $metadata(x: ListMetaHelper): SecretListHelper;
}

/** SecretList is a list of Secret. */
export class SecretListHelper extends ResourceTemplate implements SecretListHelper {
    static kind = 'SecretList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, SecretListHelper.kind, SecretListHelper.apiVersion)
    }

    _items: Array<Secret>;
    get items(): Array<Secret> {
        return this._items
    }
    set items(x: Array<Secret>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<Secret>) {
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

export interface SecretProjectionHelper extends SecretProjection {
    $items(x: Array<KeyToPath>): SecretProjectionHelper;
    $optional(x: boolean): SecretProjectionHelper;
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

    _items: Array<KeyToPath>;
    get items(): Array<KeyToPath> {
        return this._items
    }
    set items(x: Array<KeyToPath>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<KeyToPath>) {
        this.items = x; return this
    }

    _optional: boolean;
    get optional(): boolean {
        return this._optional
    }
    set optional(x: boolean) {
        this._optional = x
    }
    $optional(x: boolean) {
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
    $defaultMode(x: number): SecretVolumeSourceHelper;
    $items(x: Array<KeyToPath>): SecretVolumeSourceHelper;
    $optional(x: boolean): SecretVolumeSourceHelper;
    $secretName(x: string): SecretVolumeSourceHelper;
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

    _defaultMode: number;
    get defaultMode(): number {
        return this._defaultMode
    }
    set defaultMode(x: number) {
        this._defaultMode = x
    }
    $defaultMode(x: number) {
        this.defaultMode = x; return this
    }

    _items: Array<KeyToPath>;
    get items(): Array<KeyToPath> {
        return this._items
    }
    set items(x: Array<KeyToPath>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<KeyToPath>) {
        this.items = x; return this
    }

    _optional: boolean;
    get optional(): boolean {
        return this._optional
    }
    set optional(x: boolean) {
        this._optional = x
    }
    $optional(x: boolean) {
        this.optional = x; return this
    }

    _secretName: string;
    get secretName(): string {
        return this._secretName
    }
    set secretName(x: string) {
        this._secretName = x
    }
    $secretName(x: string) {
        this.secretName = x; return this
    }
}

export interface SecurityContextHelper extends SecurityContext {
    $allowPrivilegeEscalation(x: boolean): SecurityContextHelper;
    $capabilities(x: CapabilitiesHelper): SecurityContextHelper;
    $privileged(x: boolean): SecurityContextHelper;
    $procMount(x: string): SecurityContextHelper;
    $readOnlyRootFilesystem(x: boolean): SecurityContextHelper;
    $runAsGroup(x: number): SecurityContextHelper;
    $runAsNonRoot(x: boolean): SecurityContextHelper;
    $runAsUser(x: number): SecurityContextHelper;
    $seLinuxOptions(x: SELinuxOptionsHelper): SecurityContextHelper;
    $seccompProfile(x: SeccompProfileHelper): SecurityContextHelper;
    $windowsOptions(x: WindowsSecurityContextOptionsHelper): SecurityContextHelper;
}

/** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
export class SecurityContextHelper extends Template implements SecurityContextHelper {
    constructor(obj: any) {
        super(obj)
    }

    _allowPrivilegeEscalation: boolean;
    get allowPrivilegeEscalation(): boolean {
        return this._allowPrivilegeEscalation
    }
    set allowPrivilegeEscalation(x: boolean) {
        this._allowPrivilegeEscalation = x
    }
    $allowPrivilegeEscalation(x: boolean) {
        this.allowPrivilegeEscalation = x; return this
    }

    _capabilities: CapabilitiesHelper;
    get capabilities(): CapabilitiesHelper {
        return this._capabilities
    }
    set capabilities(x: CapabilitiesHelper) {
        this._capabilities = x
    }
    $capabilities(x: CapabilitiesHelper) {
        this.capabilities = x; return this
    }

    _privileged: boolean;
    get privileged(): boolean {
        return this._privileged
    }
    set privileged(x: boolean) {
        this._privileged = x
    }
    $privileged(x: boolean) {
        this.privileged = x; return this
    }

    _procMount: string;
    get procMount(): string {
        return this._procMount
    }
    set procMount(x: string) {
        this._procMount = x
    }
    $procMount(x: string) {
        this.procMount = x; return this
    }

    _readOnlyRootFilesystem: boolean;
    get readOnlyRootFilesystem(): boolean {
        return this._readOnlyRootFilesystem
    }
    set readOnlyRootFilesystem(x: boolean) {
        this._readOnlyRootFilesystem = x
    }
    $readOnlyRootFilesystem(x: boolean) {
        this.readOnlyRootFilesystem = x; return this
    }

    _runAsGroup: number;
    get runAsGroup(): number {
        return this._runAsGroup
    }
    set runAsGroup(x: number) {
        this._runAsGroup = x
    }
    $runAsGroup(x: number) {
        this.runAsGroup = x; return this
    }

    _runAsNonRoot: boolean;
    get runAsNonRoot(): boolean {
        return this._runAsNonRoot
    }
    set runAsNonRoot(x: boolean) {
        this._runAsNonRoot = x
    }
    $runAsNonRoot(x: boolean) {
        this.runAsNonRoot = x; return this
    }

    _runAsUser: number;
    get runAsUser(): number {
        return this._runAsUser
    }
    set runAsUser(x: number) {
        this._runAsUser = x
    }
    $runAsUser(x: number) {
        this.runAsUser = x; return this
    }

    _seLinuxOptions: SELinuxOptionsHelper;
    get seLinuxOptions(): SELinuxOptionsHelper {
        return this._seLinuxOptions
    }
    set seLinuxOptions(x: SELinuxOptionsHelper) {
        this._seLinuxOptions = x
    }
    $seLinuxOptions(x: SELinuxOptionsHelper) {
        this.seLinuxOptions = x; return this
    }

    _seccompProfile: SeccompProfileHelper;
    get seccompProfile(): SeccompProfileHelper {
        return this._seccompProfile
    }
    set seccompProfile(x: SeccompProfileHelper) {
        this._seccompProfile = x
    }
    $seccompProfile(x: SeccompProfileHelper) {
        this.seccompProfile = x; return this
    }

    _windowsOptions: WindowsSecurityContextOptionsHelper;
    get windowsOptions(): WindowsSecurityContextOptionsHelper {
        return this._windowsOptions
    }
    set windowsOptions(x: WindowsSecurityContextOptionsHelper) {
        this._windowsOptions = x
    }
    $windowsOptions(x: WindowsSecurityContextOptionsHelper) {
        this.windowsOptions = x; return this
    }
}

export interface ServiceHelper extends Service {
    $metadata(x: ObjectMetaHelper): ServiceHelper;
    $spec(x: ServiceSpecHelper): ServiceHelper;
    $status(x: ServiceStatusHelper): ServiceHelper;
}

/** Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy. */
export class ServiceHelper extends ResourceTemplate implements ServiceHelper {
    static kind = 'Service';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ServiceHelper.kind, ServiceHelper.apiVersion)
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

    _spec: ServiceSpecHelper;
    get spec(): ServiceSpecHelper {
        return this._spec
    }
    set spec(x: ServiceSpecHelper) {
        this._spec = x
    }
    $spec(x: ServiceSpecHelper) {
        this.spec = x; return this
    }

    _status: ServiceStatusHelper;
    get status(): ServiceStatusHelper {
        return this._status
    }
    set status(x: ServiceStatusHelper) {
        this._status = x
    }
    $status(x: ServiceStatusHelper) {
        this.status = x; return this
    }
}

export interface ServiceAccountHelper extends ServiceAccount {
    $automountServiceAccountToken(x: boolean): ServiceAccountHelper;
    $imagePullSecrets(x: Array<LocalObjectReference>): ServiceAccountHelper;
    $metadata(x: ObjectMetaHelper): ServiceAccountHelper;
    $secrets(x: Array<ObjectReference>): ServiceAccountHelper;
}

/** ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets */
export class ServiceAccountHelper extends ResourceTemplate implements ServiceAccountHelper {
    static kind = 'ServiceAccount';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ServiceAccountHelper.kind, ServiceAccountHelper.apiVersion)
    }

    _automountServiceAccountToken: boolean;
    get automountServiceAccountToken(): boolean {
        return this._automountServiceAccountToken
    }
    set automountServiceAccountToken(x: boolean) {
        this._automountServiceAccountToken = x
    }
    $automountServiceAccountToken(x: boolean) {
        this.automountServiceAccountToken = x; return this
    }

    _imagePullSecrets: Array<LocalObjectReference>;
    get imagePullSecrets(): Array<LocalObjectReference> {
        return this._imagePullSecrets
    }
    set imagePullSecrets(x: Array<LocalObjectReference>) {
        this._imagePullSecrets = this.set(this.imagePullSecrets, x)
    }
    $imagePullSecrets(x: Array<LocalObjectReference>) {
        this.imagePullSecrets = x; return this
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

    _secrets: Array<ObjectReference>;
    get secrets(): Array<ObjectReference> {
        return this._secrets
    }
    set secrets(x: Array<ObjectReference>) {
        this._secrets = this.set(this.secrets, x)
    }
    $secrets(x: Array<ObjectReference>) {
        this.secrets = x; return this
    }
}

export interface ServiceAccountListHelper extends ServiceAccountList {
    $items(x: Array<ServiceAccount>): ServiceAccountListHelper;
    $metadata(x: ListMetaHelper): ServiceAccountListHelper;
}

/** ServiceAccountList is a list of ServiceAccount objects */
export class ServiceAccountListHelper extends ResourceTemplate implements ServiceAccountListHelper {
    static kind = 'ServiceAccountList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ServiceAccountListHelper.kind, ServiceAccountListHelper.apiVersion)
    }

    _items: Array<ServiceAccount>;
    get items(): Array<ServiceAccount> {
        return this._items
    }
    set items(x: Array<ServiceAccount>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<ServiceAccount>) {
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

export interface ServiceAccountTokenProjectionHelper extends ServiceAccountTokenProjection {
    $audience(x: string): ServiceAccountTokenProjectionHelper;
    $expirationSeconds(x: number): ServiceAccountTokenProjectionHelper;
    $path(x: string): ServiceAccountTokenProjectionHelper;
}

/** ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
export class ServiceAccountTokenProjectionHelper extends Template implements ServiceAccountTokenProjectionHelper {
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
    $audience(x: string) {
        this.audience = x; return this
    }

    _expirationSeconds: number;
    get expirationSeconds(): number {
        return this._expirationSeconds
    }
    set expirationSeconds(x: number) {
        this._expirationSeconds = x
    }
    $expirationSeconds(x: number) {
        this.expirationSeconds = x; return this
    }

    _path: string;
    get path(): string {
        return this._path
    }
    set path(x: string) {
        this._path = x
    }
    $path(x: string) {
        this.path = x; return this
    }
}

export interface ServiceListHelper extends ServiceList {
    $items(x: Array<Service>): ServiceListHelper;
    $metadata(x: ListMetaHelper): ServiceListHelper;
}

/** ServiceList holds a list of services. */
export class ServiceListHelper extends ResourceTemplate implements ServiceListHelper {
    static kind = 'ServiceList';
    static apiVersion = 'core/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ServiceListHelper.kind, ServiceListHelper.apiVersion)
    }

    _items: Array<Service>;
    get items(): Array<Service> {
        return this._items
    }
    set items(x: Array<Service>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<Service>) {
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

export interface ServicePortHelper extends ServicePort {
    $appProtocol(x: string): ServicePortHelper;
    $nodePort(x: number): ServicePortHelper;
    $port(x: number): ServicePortHelper;
    $protocol(x: string): ServicePortHelper;
    $targetPort(x: number | string): ServicePortHelper;
}

/** ServicePort contains information on service's port. */
export class ServicePortHelper extends Template implements ServicePortHelper {
    constructor(obj: any) {
        super(obj)
    }

    _appProtocol: string;
    get appProtocol(): string {
        return this._appProtocol
    }
    set appProtocol(x: string) {
        this._appProtocol = x
    }
    $appProtocol(x: string) {
        this.appProtocol = x; return this
    }

    _nodePort: number;
    get nodePort(): number {
        return this._nodePort
    }
    set nodePort(x: number) {
        this._nodePort = x
    }
    $nodePort(x: number) {
        this.nodePort = x; return this
    }

    _port: number;
    get port(): number {
        return this._port
    }
    set port(x: number) {
        this._port = x
    }
    $port(x: number) {
        this.port = x; return this
    }

    _protocol: string;
    get protocol(): string {
        return this._protocol
    }
    set protocol(x: string) {
        this._protocol = x
    }
    $protocol(x: string) {
        this.protocol = x; return this
    }

    _targetPort: number | string;
    get targetPort(): number | string {
        return this._targetPort
    }
    set targetPort(x: number | string) {
        this._targetPort = x
    }
    $targetPort(x: number | string) {
        this.targetPort = x; return this
    }
}

export interface ServiceSpecHelper extends ServiceSpec {
    $allocateLoadBalancerNodePorts(x: boolean): ServiceSpecHelper;
    $clusterIP(x: string): ServiceSpecHelper;
    $clusterIPs(x: Array<string>): ServiceSpecHelper;
    $externalIPs(x: Array<string>): ServiceSpecHelper;
    $externalName(x: string): ServiceSpecHelper;
    $externalTrafficPolicy(x: string): ServiceSpecHelper;
    $healthCheckNodePort(x: number): ServiceSpecHelper;
    $internalTrafficPolicy(x: string): ServiceSpecHelper;
    $ipFamilies(x: Array<string>): ServiceSpecHelper;
    $ipFamilyPolicy(x: string): ServiceSpecHelper;
    $loadBalancerClass(x: string): ServiceSpecHelper;
    $loadBalancerIP(x: string): ServiceSpecHelper;
    $loadBalancerSourceRanges(x: Array<string>): ServiceSpecHelper;
    $ports(x: Array<ServicePort>): ServiceSpecHelper;
    $publishNotReadyAddresses(x: boolean): ServiceSpecHelper;
    $selector(x: any): ServiceSpecHelper;
    $sessionAffinity(x: string): ServiceSpecHelper;
    $sessionAffinityConfig(x: SessionAffinityConfigHelper): ServiceSpecHelper;
    $type(x: string): ServiceSpecHelper;
}

/** ServiceSpec describes the attributes that a user creates on a service. */
export class ServiceSpecHelper extends Template implements ServiceSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _allocateLoadBalancerNodePorts: boolean;
    get allocateLoadBalancerNodePorts(): boolean {
        return this._allocateLoadBalancerNodePorts
    }
    set allocateLoadBalancerNodePorts(x: boolean) {
        this._allocateLoadBalancerNodePorts = x
    }
    $allocateLoadBalancerNodePorts(x: boolean) {
        this.allocateLoadBalancerNodePorts = x; return this
    }

    _clusterIP: string;
    get clusterIP(): string {
        return this._clusterIP
    }
    set clusterIP(x: string) {
        this._clusterIP = x
    }
    $clusterIP(x: string) {
        this.clusterIP = x; return this
    }

    _clusterIPs: Array<string>;
    get clusterIPs(): Array<string> {
        return this._clusterIPs
    }
    set clusterIPs(x: Array<string>) {
        this._clusterIPs = this.set(this.clusterIPs, x)
    }
    $clusterIPs(x: Array<string>) {
        this.clusterIPs = x; return this
    }

    _externalIPs: Array<string>;
    get externalIPs(): Array<string> {
        return this._externalIPs
    }
    set externalIPs(x: Array<string>) {
        this._externalIPs = this.set(this.externalIPs, x)
    }
    $externalIPs(x: Array<string>) {
        this.externalIPs = x; return this
    }

    _externalName: string;
    get externalName(): string {
        return this._externalName
    }
    set externalName(x: string) {
        this._externalName = x
    }
    $externalName(x: string) {
        this.externalName = x; return this
    }

    _externalTrafficPolicy: string;
    get externalTrafficPolicy(): string {
        return this._externalTrafficPolicy
    }
    set externalTrafficPolicy(x: string) {
        this._externalTrafficPolicy = x
    }
    $externalTrafficPolicy(x: string) {
        this.externalTrafficPolicy = x; return this
    }

    _healthCheckNodePort: number;
    get healthCheckNodePort(): number {
        return this._healthCheckNodePort
    }
    set healthCheckNodePort(x: number) {
        this._healthCheckNodePort = x
    }
    $healthCheckNodePort(x: number) {
        this.healthCheckNodePort = x; return this
    }

    _internalTrafficPolicy: string;
    get internalTrafficPolicy(): string {
        return this._internalTrafficPolicy
    }
    set internalTrafficPolicy(x: string) {
        this._internalTrafficPolicy = x
    }
    $internalTrafficPolicy(x: string) {
        this.internalTrafficPolicy = x; return this
    }

    _ipFamilies: Array<string>;
    get ipFamilies(): Array<string> {
        return this._ipFamilies
    }
    set ipFamilies(x: Array<string>) {
        this._ipFamilies = this.set(this.ipFamilies, x)
    }
    $ipFamilies(x: Array<string>) {
        this.ipFamilies = x; return this
    }

    _ipFamilyPolicy: string;
    get ipFamilyPolicy(): string {
        return this._ipFamilyPolicy
    }
    set ipFamilyPolicy(x: string) {
        this._ipFamilyPolicy = x
    }
    $ipFamilyPolicy(x: string) {
        this.ipFamilyPolicy = x; return this
    }

    _loadBalancerClass: string;
    get loadBalancerClass(): string {
        return this._loadBalancerClass
    }
    set loadBalancerClass(x: string) {
        this._loadBalancerClass = x
    }
    $loadBalancerClass(x: string) {
        this.loadBalancerClass = x; return this
    }

    _loadBalancerIP: string;
    get loadBalancerIP(): string {
        return this._loadBalancerIP
    }
    set loadBalancerIP(x: string) {
        this._loadBalancerIP = x
    }
    $loadBalancerIP(x: string) {
        this.loadBalancerIP = x; return this
    }

    _loadBalancerSourceRanges: Array<string>;
    get loadBalancerSourceRanges(): Array<string> {
        return this._loadBalancerSourceRanges
    }
    set loadBalancerSourceRanges(x: Array<string>) {
        this._loadBalancerSourceRanges = this.set(this.loadBalancerSourceRanges, x)
    }
    $loadBalancerSourceRanges(x: Array<string>) {
        this.loadBalancerSourceRanges = x; return this
    }

    _ports: Array<ServicePort>;
    get ports(): Array<ServicePort> {
        return this._ports
    }
    set ports(x: Array<ServicePort>) {
        this._ports = this.set(this.ports, x)
    }
    $ports(x: Array<ServicePort>) {
        this.ports = x; return this
    }

    _publishNotReadyAddresses: boolean;
    get publishNotReadyAddresses(): boolean {
        return this._publishNotReadyAddresses
    }
    set publishNotReadyAddresses(x: boolean) {
        this._publishNotReadyAddresses = x
    }
    $publishNotReadyAddresses(x: boolean) {
        this.publishNotReadyAddresses = x; return this
    }

    _selector: any;
    get selector(): any {
        return this._selector
    }
    set selector(x: any) {
        this._selector = this.set(this.selector, x)
    }
    $selector(x: any) {
        this.selector = x; return this
    }

    _sessionAffinity: string;
    get sessionAffinity(): string {
        return this._sessionAffinity
    }
    set sessionAffinity(x: string) {
        this._sessionAffinity = x
    }
    $sessionAffinity(x: string) {
        this.sessionAffinity = x; return this
    }

    _sessionAffinityConfig: SessionAffinityConfigHelper;
    get sessionAffinityConfig(): SessionAffinityConfigHelper {
        return this._sessionAffinityConfig
    }
    set sessionAffinityConfig(x: SessionAffinityConfigHelper) {
        this._sessionAffinityConfig = x
    }
    $sessionAffinityConfig(x: SessionAffinityConfigHelper) {
        this.sessionAffinityConfig = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $type(x: string) {
        this.type = x; return this
    }
}

export interface ServiceStatusHelper extends ServiceStatus {
    $conditions(x: Array<Condition>): ServiceStatusHelper;
    $loadBalancer(x: LoadBalancerStatusHelper): ServiceStatusHelper;
}

/** ServiceStatus represents the current status of a service. */
export class ServiceStatusHelper extends Template implements ServiceStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conditions: Array<Condition>;
    get conditions(): Array<Condition> {
        return this._conditions
    }
    set conditions(x: Array<Condition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $conditions(x: Array<Condition>) {
        this.conditions = x; return this
    }

    _loadBalancer: LoadBalancerStatusHelper;
    get loadBalancer(): LoadBalancerStatusHelper {
        return this._loadBalancer
    }
    set loadBalancer(x: LoadBalancerStatusHelper) {
        this._loadBalancer = x
    }
    $loadBalancer(x: LoadBalancerStatusHelper) {
        this.loadBalancer = x; return this
    }
}

export interface SessionAffinityConfigHelper extends SessionAffinityConfig {
    $clientIP(x: ClientIPConfigHelper): SessionAffinityConfigHelper;
}

/** SessionAffinityConfig represents the configurations of session affinity. */
export class SessionAffinityConfigHelper extends Template implements SessionAffinityConfigHelper {
    constructor(obj: any) {
        super(obj)
    }

    _clientIP: ClientIPConfigHelper;
    get clientIP(): ClientIPConfigHelper {
        return this._clientIP
    }
    set clientIP(x: ClientIPConfigHelper) {
        this._clientIP = x
    }
    $clientIP(x: ClientIPConfigHelper) {
        this.clientIP = x; return this
    }
}

export interface StorageOSPersistentVolumeSourceHelper extends StorageOSPersistentVolumeSource {
    $fsType(x: string): StorageOSPersistentVolumeSourceHelper;
    $readOnly(x: boolean): StorageOSPersistentVolumeSourceHelper;
    $secretRef(x: ObjectReferenceHelper): StorageOSPersistentVolumeSourceHelper;
    $volumeName(x: string): StorageOSPersistentVolumeSourceHelper;
    $volumeNamespace(x: string): StorageOSPersistentVolumeSourceHelper;
}

/** Represents a StorageOS persistent volume resource. */
export class StorageOSPersistentVolumeSourceHelper extends Template implements StorageOSPersistentVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _secretRef: ObjectReferenceHelper;
    get secretRef(): ObjectReferenceHelper {
        return this._secretRef
    }
    set secretRef(x: ObjectReferenceHelper) {
        this._secretRef = x
    }
    $secretRef(x: ObjectReferenceHelper) {
        this.secretRef = x; return this
    }

    _volumeName: string;
    get volumeName(): string {
        return this._volumeName
    }
    set volumeName(x: string) {
        this._volumeName = x
    }
    $volumeName(x: string) {
        this.volumeName = x; return this
    }

    _volumeNamespace: string;
    get volumeNamespace(): string {
        return this._volumeNamespace
    }
    set volumeNamespace(x: string) {
        this._volumeNamespace = x
    }
    $volumeNamespace(x: string) {
        this.volumeNamespace = x; return this
    }
}

export interface StorageOSVolumeSourceHelper extends StorageOSVolumeSource {
    $fsType(x: string): StorageOSVolumeSourceHelper;
    $readOnly(x: boolean): StorageOSVolumeSourceHelper;
    $secretRef(x: LocalObjectReferenceHelper): StorageOSVolumeSourceHelper;
    $volumeName(x: string): StorageOSVolumeSourceHelper;
    $volumeNamespace(x: string): StorageOSVolumeSourceHelper;
}

/** Represents a StorageOS persistent volume resource. */
export class StorageOSVolumeSourceHelper extends Template implements StorageOSVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _secretRef: LocalObjectReferenceHelper;
    get secretRef(): LocalObjectReferenceHelper {
        return this._secretRef
    }
    set secretRef(x: LocalObjectReferenceHelper) {
        this._secretRef = x
    }
    $secretRef(x: LocalObjectReferenceHelper) {
        this.secretRef = x; return this
    }

    _volumeName: string;
    get volumeName(): string {
        return this._volumeName
    }
    set volumeName(x: string) {
        this._volumeName = x
    }
    $volumeName(x: string) {
        this.volumeName = x; return this
    }

    _volumeNamespace: string;
    get volumeNamespace(): string {
        return this._volumeNamespace
    }
    set volumeNamespace(x: string) {
        this._volumeNamespace = x
    }
    $volumeNamespace(x: string) {
        this.volumeNamespace = x; return this
    }
}

export interface SysctlHelper extends Sysctl {
    $value(x: string): SysctlHelper;
}

/** Sysctl defines a kernel parameter to be set */
export class SysctlHelper extends Template implements SysctlHelper {
    constructor(obj: any) {
        super(obj)
    }

    _value: string;
    get value(): string {
        return this._value
    }
    set value(x: string) {
        this._value = x
    }
    $value(x: string) {
        this.value = x; return this
    }
}

export interface TCPSocketActionHelper extends TCPSocketAction {
    $host(x: string): TCPSocketActionHelper;
    $port(x: number | string): TCPSocketActionHelper;
}

/** TCPSocketAction describes an action based on opening a socket */
export class TCPSocketActionHelper extends Template implements TCPSocketActionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _host: string;
    get host(): string {
        return this._host
    }
    set host(x: string) {
        this._host = x
    }
    $host(x: string) {
        this.host = x; return this
    }

    _port: number | string;
    get port(): number | string {
        return this._port
    }
    set port(x: number | string) {
        this._port = x
    }
    $port(x: number | string) {
        this.port = x; return this
    }
}

export interface TaintHelper extends Taint {
    $effect(x: string): TaintHelper;
    $key(x: string): TaintHelper;
    $timeAdded(x: Time): TaintHelper;
    $value(x: string): TaintHelper;
}

/** The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint. */
export class TaintHelper extends Template implements TaintHelper {
    constructor(obj: any) {
        super(obj)
    }

    _effect: string;
    get effect(): string {
        return this._effect
    }
    set effect(x: string) {
        this._effect = x
    }
    $effect(x: string) {
        this.effect = x; return this
    }

    _key: string;
    get key(): string {
        return this._key
    }
    set key(x: string) {
        this._key = x
    }
    $key(x: string) {
        this.key = x; return this
    }

    _timeAdded: Time;
    get timeAdded(): Time {
        return this._timeAdded
    }
    set timeAdded(x: Time) {
        this._timeAdded = x
    }
    $timeAdded(x: Time) {
        this.timeAdded = x; return this
    }

    _value: string;
    get value(): string {
        return this._value
    }
    set value(x: string) {
        this._value = x
    }
    $value(x: string) {
        this.value = x; return this
    }
}

export interface TolerationHelper extends Toleration {
    $effect(x: string): TolerationHelper;
    $key(x: string): TolerationHelper;
    $operator(x: string): TolerationHelper;
    $tolerationSeconds(x: number): TolerationHelper;
    $value(x: string): TolerationHelper;
}

/** The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>. */
export class TolerationHelper extends Template implements TolerationHelper {
    constructor(obj: any) {
        super(obj)
    }

    _effect: string;
    get effect(): string {
        return this._effect
    }
    set effect(x: string) {
        this._effect = x
    }
    $effect(x: string) {
        this.effect = x; return this
    }

    _key: string;
    get key(): string {
        return this._key
    }
    set key(x: string) {
        this._key = x
    }
    $key(x: string) {
        this.key = x; return this
    }

    _operator: string;
    get operator(): string {
        return this._operator
    }
    set operator(x: string) {
        this._operator = x
    }
    $operator(x: string) {
        this.operator = x; return this
    }

    _tolerationSeconds: number;
    get tolerationSeconds(): number {
        return this._tolerationSeconds
    }
    set tolerationSeconds(x: number) {
        this._tolerationSeconds = x
    }
    $tolerationSeconds(x: number) {
        this.tolerationSeconds = x; return this
    }

    _value: string;
    get value(): string {
        return this._value
    }
    set value(x: string) {
        this._value = x
    }
    $value(x: string) {
        this.value = x; return this
    }
}

export interface TopologySelectorLabelRequirementHelper extends TopologySelectorLabelRequirement {
    $key(x: string): TopologySelectorLabelRequirementHelper;
    $values(x: Array<string>): TopologySelectorLabelRequirementHelper;
}

/** A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future. */
export class TopologySelectorLabelRequirementHelper extends Template implements TopologySelectorLabelRequirementHelper {
    constructor(obj: any) {
        super(obj)
    }

    _key: string;
    get key(): string {
        return this._key
    }
    set key(x: string) {
        this._key = x
    }
    $key(x: string) {
        this.key = x; return this
    }

    _values: Array<string>;
    get values(): Array<string> {
        return this._values
    }
    set values(x: Array<string>) {
        this._values = this.set(this.values, x)
    }
    $values(x: Array<string>) {
        this.values = x; return this
    }
}

export interface TopologySelectorTermHelper extends TopologySelectorTerm {
    $matchLabelExpressions(x: Array<TopologySelectorLabelRequirement>): TopologySelectorTermHelper;
}

/** A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future. */
export class TopologySelectorTermHelper extends Template implements TopologySelectorTermHelper {
    constructor(obj: any) {
        super(obj)
    }

    _matchLabelExpressions: Array<TopologySelectorLabelRequirement>;
    get matchLabelExpressions(): Array<TopologySelectorLabelRequirement> {
        return this._matchLabelExpressions
    }
    set matchLabelExpressions(x: Array<TopologySelectorLabelRequirement>) {
        this._matchLabelExpressions = this.set(this.matchLabelExpressions, x)
    }
    $matchLabelExpressions(x: Array<TopologySelectorLabelRequirement>) {
        this.matchLabelExpressions = x; return this
    }
}

export interface TopologySpreadConstraintHelper extends TopologySpreadConstraint {
    $labelSelector(x: LabelSelectorHelper): TopologySpreadConstraintHelper;
    $maxSkew(x: number): TopologySpreadConstraintHelper;
    $topologyKey(x: string): TopologySpreadConstraintHelper;
    $whenUnsatisfiable(x: string): TopologySpreadConstraintHelper;
}

/** TopologySpreadConstraint specifies how to spread matching pods among the given topology. */
export class TopologySpreadConstraintHelper extends Template implements TopologySpreadConstraintHelper {
    constructor(obj: any) {
        super(obj)
    }

    _labelSelector: LabelSelectorHelper;
    get labelSelector(): LabelSelectorHelper {
        return this._labelSelector
    }
    set labelSelector(x: LabelSelectorHelper) {
        this._labelSelector = x
    }
    $labelSelector(x: LabelSelectorHelper) {
        this.labelSelector = x; return this
    }

    _maxSkew: number;
    get maxSkew(): number {
        return this._maxSkew
    }
    set maxSkew(x: number) {
        this._maxSkew = x
    }
    $maxSkew(x: number) {
        this.maxSkew = x; return this
    }

    _topologyKey: string;
    get topologyKey(): string {
        return this._topologyKey
    }
    set topologyKey(x: string) {
        this._topologyKey = x
    }
    $topologyKey(x: string) {
        this.topologyKey = x; return this
    }

    _whenUnsatisfiable: string;
    get whenUnsatisfiable(): string {
        return this._whenUnsatisfiable
    }
    set whenUnsatisfiable(x: string) {
        this._whenUnsatisfiable = x
    }
    $whenUnsatisfiable(x: string) {
        this.whenUnsatisfiable = x; return this
    }
}

export interface TypedLocalObjectReferenceHelper extends TypedLocalObjectReference {
    $apiGroup(x: string): TypedLocalObjectReferenceHelper;
}

/** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
export class TypedLocalObjectReferenceHelper extends Template implements TypedLocalObjectReferenceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _apiGroup: string;
    get apiGroup(): string {
        return this._apiGroup
    }
    set apiGroup(x: string) {
        this._apiGroup = x
    }
    $apiGroup(x: string) {
        this.apiGroup = x; return this
    }
}

export interface VolumeHelper extends Volume {
    $awsElasticBlockStore(x: AWSElasticBlockStoreVolumeSourceHelper): VolumeHelper;
    $azureDisk(x: AzureDiskVolumeSourceHelper): VolumeHelper;
    $azureFile(x: AzureFileVolumeSourceHelper): VolumeHelper;
    $cephfs(x: CephFSVolumeSourceHelper): VolumeHelper;
    $cinder(x: CinderVolumeSourceHelper): VolumeHelper;
    $configMap(x: ConfigMapVolumeSourceHelper): VolumeHelper;
    $csi(x: CSIVolumeSourceHelper): VolumeHelper;
    $downwardAPI(x: DownwardAPIVolumeSourceHelper): VolumeHelper;
    $emptyDir(x: EmptyDirVolumeSourceHelper): VolumeHelper;
    $ephemeral(x: EphemeralVolumeSourceHelper): VolumeHelper;
    $fc(x: FCVolumeSourceHelper): VolumeHelper;
    $flexVolume(x: FlexVolumeSourceHelper): VolumeHelper;
    $flocker(x: FlockerVolumeSourceHelper): VolumeHelper;
    $gcePersistentDisk(x: GCEPersistentDiskVolumeSourceHelper): VolumeHelper;
    $gitRepo(x: GitRepoVolumeSourceHelper): VolumeHelper;
    $glusterfs(x: GlusterfsVolumeSourceHelper): VolumeHelper;
    $hostPath(x: HostPathVolumeSourceHelper): VolumeHelper;
    $iscsi(x: ISCSIVolumeSourceHelper): VolumeHelper;
    $nfs(x: NFSVolumeSourceHelper): VolumeHelper;
    $persistentVolumeClaim(x: PersistentVolumeClaimVolumeSourceHelper): VolumeHelper;
    $photonPersistentDisk(x: PhotonPersistentDiskVolumeSourceHelper): VolumeHelper;
    $portworxVolume(x: PortworxVolumeSourceHelper): VolumeHelper;
    $projected(x: ProjectedVolumeSourceHelper): VolumeHelper;
    $quobyte(x: QuobyteVolumeSourceHelper): VolumeHelper;
    $rbd(x: RBDVolumeSourceHelper): VolumeHelper;
    $scaleIO(x: ScaleIOVolumeSourceHelper): VolumeHelper;
    $secret(x: SecretVolumeSourceHelper): VolumeHelper;
    $storageos(x: StorageOSVolumeSourceHelper): VolumeHelper;
    $vsphereVolume(x: VsphereVirtualDiskVolumeSourceHelper): VolumeHelper;
}

/** Volume represents a named volume in a pod that may be accessed by any container in the pod. */
export class VolumeHelper extends Template implements VolumeHelper {
    constructor(obj: any) {
        super(obj)
    }

    _awsElasticBlockStore: AWSElasticBlockStoreVolumeSourceHelper;
    get awsElasticBlockStore(): AWSElasticBlockStoreVolumeSourceHelper {
        return this._awsElasticBlockStore
    }
    set awsElasticBlockStore(x: AWSElasticBlockStoreVolumeSourceHelper) {
        this._awsElasticBlockStore = x
    }
    $awsElasticBlockStore(x: AWSElasticBlockStoreVolumeSourceHelper) {
        this.awsElasticBlockStore = x; return this
    }

    _azureDisk: AzureDiskVolumeSourceHelper;
    get azureDisk(): AzureDiskVolumeSourceHelper {
        return this._azureDisk
    }
    set azureDisk(x: AzureDiskVolumeSourceHelper) {
        this._azureDisk = x
    }
    $azureDisk(x: AzureDiskVolumeSourceHelper) {
        this.azureDisk = x; return this
    }

    _azureFile: AzureFileVolumeSourceHelper;
    get azureFile(): AzureFileVolumeSourceHelper {
        return this._azureFile
    }
    set azureFile(x: AzureFileVolumeSourceHelper) {
        this._azureFile = x
    }
    $azureFile(x: AzureFileVolumeSourceHelper) {
        this.azureFile = x; return this
    }

    _cephfs: CephFSVolumeSourceHelper;
    get cephfs(): CephFSVolumeSourceHelper {
        return this._cephfs
    }
    set cephfs(x: CephFSVolumeSourceHelper) {
        this._cephfs = x
    }
    $cephfs(x: CephFSVolumeSourceHelper) {
        this.cephfs = x; return this
    }

    _cinder: CinderVolumeSourceHelper;
    get cinder(): CinderVolumeSourceHelper {
        return this._cinder
    }
    set cinder(x: CinderVolumeSourceHelper) {
        this._cinder = x
    }
    $cinder(x: CinderVolumeSourceHelper) {
        this.cinder = x; return this
    }

    _configMap: ConfigMapVolumeSourceHelper;
    get configMap(): ConfigMapVolumeSourceHelper {
        return this._configMap
    }
    set configMap(x: ConfigMapVolumeSourceHelper) {
        this._configMap = x
    }
    $configMap(x: ConfigMapVolumeSourceHelper) {
        this.configMap = x; return this
    }

    _csi: CSIVolumeSourceHelper;
    get csi(): CSIVolumeSourceHelper {
        return this._csi
    }
    set csi(x: CSIVolumeSourceHelper) {
        this._csi = x
    }
    $csi(x: CSIVolumeSourceHelper) {
        this.csi = x; return this
    }

    _downwardAPI: DownwardAPIVolumeSourceHelper;
    get downwardAPI(): DownwardAPIVolumeSourceHelper {
        return this._downwardAPI
    }
    set downwardAPI(x: DownwardAPIVolumeSourceHelper) {
        this._downwardAPI = x
    }
    $downwardAPI(x: DownwardAPIVolumeSourceHelper) {
        this.downwardAPI = x; return this
    }

    _emptyDir: EmptyDirVolumeSourceHelper;
    get emptyDir(): EmptyDirVolumeSourceHelper {
        return this._emptyDir
    }
    set emptyDir(x: EmptyDirVolumeSourceHelper) {
        this._emptyDir = x
    }
    $emptyDir(x: EmptyDirVolumeSourceHelper) {
        this.emptyDir = x; return this
    }

    _ephemeral: EphemeralVolumeSourceHelper;
    get ephemeral(): EphemeralVolumeSourceHelper {
        return this._ephemeral
    }
    set ephemeral(x: EphemeralVolumeSourceHelper) {
        this._ephemeral = x
    }
    $ephemeral(x: EphemeralVolumeSourceHelper) {
        this.ephemeral = x; return this
    }

    _fc: FCVolumeSourceHelper;
    get fc(): FCVolumeSourceHelper {
        return this._fc
    }
    set fc(x: FCVolumeSourceHelper) {
        this._fc = x
    }
    $fc(x: FCVolumeSourceHelper) {
        this.fc = x; return this
    }

    _flexVolume: FlexVolumeSourceHelper;
    get flexVolume(): FlexVolumeSourceHelper {
        return this._flexVolume
    }
    set flexVolume(x: FlexVolumeSourceHelper) {
        this._flexVolume = x
    }
    $flexVolume(x: FlexVolumeSourceHelper) {
        this.flexVolume = x; return this
    }

    _flocker: FlockerVolumeSourceHelper;
    get flocker(): FlockerVolumeSourceHelper {
        return this._flocker
    }
    set flocker(x: FlockerVolumeSourceHelper) {
        this._flocker = x
    }
    $flocker(x: FlockerVolumeSourceHelper) {
        this.flocker = x; return this
    }

    _gcePersistentDisk: GCEPersistentDiskVolumeSourceHelper;
    get gcePersistentDisk(): GCEPersistentDiskVolumeSourceHelper {
        return this._gcePersistentDisk
    }
    set gcePersistentDisk(x: GCEPersistentDiskVolumeSourceHelper) {
        this._gcePersistentDisk = x
    }
    $gcePersistentDisk(x: GCEPersistentDiskVolumeSourceHelper) {
        this.gcePersistentDisk = x; return this
    }

    _gitRepo: GitRepoVolumeSourceHelper;
    get gitRepo(): GitRepoVolumeSourceHelper {
        return this._gitRepo
    }
    set gitRepo(x: GitRepoVolumeSourceHelper) {
        this._gitRepo = x
    }
    $gitRepo(x: GitRepoVolumeSourceHelper) {
        this.gitRepo = x; return this
    }

    _glusterfs: GlusterfsVolumeSourceHelper;
    get glusterfs(): GlusterfsVolumeSourceHelper {
        return this._glusterfs
    }
    set glusterfs(x: GlusterfsVolumeSourceHelper) {
        this._glusterfs = x
    }
    $glusterfs(x: GlusterfsVolumeSourceHelper) {
        this.glusterfs = x; return this
    }

    _hostPath: HostPathVolumeSourceHelper;
    get hostPath(): HostPathVolumeSourceHelper {
        return this._hostPath
    }
    set hostPath(x: HostPathVolumeSourceHelper) {
        this._hostPath = x
    }
    $hostPath(x: HostPathVolumeSourceHelper) {
        this.hostPath = x; return this
    }

    _iscsi: ISCSIVolumeSourceHelper;
    get iscsi(): ISCSIVolumeSourceHelper {
        return this._iscsi
    }
    set iscsi(x: ISCSIVolumeSourceHelper) {
        this._iscsi = x
    }
    $iscsi(x: ISCSIVolumeSourceHelper) {
        this.iscsi = x; return this
    }

    _nfs: NFSVolumeSourceHelper;
    get nfs(): NFSVolumeSourceHelper {
        return this._nfs
    }
    set nfs(x: NFSVolumeSourceHelper) {
        this._nfs = x
    }
    $nfs(x: NFSVolumeSourceHelper) {
        this.nfs = x; return this
    }

    _persistentVolumeClaim: PersistentVolumeClaimVolumeSourceHelper;
    get persistentVolumeClaim(): PersistentVolumeClaimVolumeSourceHelper {
        return this._persistentVolumeClaim
    }
    set persistentVolumeClaim(x: PersistentVolumeClaimVolumeSourceHelper) {
        this._persistentVolumeClaim = x
    }
    $persistentVolumeClaim(x: PersistentVolumeClaimVolumeSourceHelper) {
        this.persistentVolumeClaim = x; return this
    }

    _photonPersistentDisk: PhotonPersistentDiskVolumeSourceHelper;
    get photonPersistentDisk(): PhotonPersistentDiskVolumeSourceHelper {
        return this._photonPersistentDisk
    }
    set photonPersistentDisk(x: PhotonPersistentDiskVolumeSourceHelper) {
        this._photonPersistentDisk = x
    }
    $photonPersistentDisk(x: PhotonPersistentDiskVolumeSourceHelper) {
        this.photonPersistentDisk = x; return this
    }

    _portworxVolume: PortworxVolumeSourceHelper;
    get portworxVolume(): PortworxVolumeSourceHelper {
        return this._portworxVolume
    }
    set portworxVolume(x: PortworxVolumeSourceHelper) {
        this._portworxVolume = x
    }
    $portworxVolume(x: PortworxVolumeSourceHelper) {
        this.portworxVolume = x; return this
    }

    _projected: ProjectedVolumeSourceHelper;
    get projected(): ProjectedVolumeSourceHelper {
        return this._projected
    }
    set projected(x: ProjectedVolumeSourceHelper) {
        this._projected = x
    }
    $projected(x: ProjectedVolumeSourceHelper) {
        this.projected = x; return this
    }

    _quobyte: QuobyteVolumeSourceHelper;
    get quobyte(): QuobyteVolumeSourceHelper {
        return this._quobyte
    }
    set quobyte(x: QuobyteVolumeSourceHelper) {
        this._quobyte = x
    }
    $quobyte(x: QuobyteVolumeSourceHelper) {
        this.quobyte = x; return this
    }

    _rbd: RBDVolumeSourceHelper;
    get rbd(): RBDVolumeSourceHelper {
        return this._rbd
    }
    set rbd(x: RBDVolumeSourceHelper) {
        this._rbd = x
    }
    $rbd(x: RBDVolumeSourceHelper) {
        this.rbd = x; return this
    }

    _scaleIO: ScaleIOVolumeSourceHelper;
    get scaleIO(): ScaleIOVolumeSourceHelper {
        return this._scaleIO
    }
    set scaleIO(x: ScaleIOVolumeSourceHelper) {
        this._scaleIO = x
    }
    $scaleIO(x: ScaleIOVolumeSourceHelper) {
        this.scaleIO = x; return this
    }

    _secret: SecretVolumeSourceHelper;
    get secret(): SecretVolumeSourceHelper {
        return this._secret
    }
    set secret(x: SecretVolumeSourceHelper) {
        this._secret = x
    }
    $secret(x: SecretVolumeSourceHelper) {
        this.secret = x; return this
    }

    _storageos: StorageOSVolumeSourceHelper;
    get storageos(): StorageOSVolumeSourceHelper {
        return this._storageos
    }
    set storageos(x: StorageOSVolumeSourceHelper) {
        this._storageos = x
    }
    $storageos(x: StorageOSVolumeSourceHelper) {
        this.storageos = x; return this
    }

    _vsphereVolume: VsphereVirtualDiskVolumeSourceHelper;
    get vsphereVolume(): VsphereVirtualDiskVolumeSourceHelper {
        return this._vsphereVolume
    }
    set vsphereVolume(x: VsphereVirtualDiskVolumeSourceHelper) {
        this._vsphereVolume = x
    }
    $vsphereVolume(x: VsphereVirtualDiskVolumeSourceHelper) {
        this.vsphereVolume = x; return this
    }
}

export interface VolumeDeviceHelper extends VolumeDevice {
    $devicePath(x: string): VolumeDeviceHelper;
}

/** volumeDevice describes a mapping of a raw block device within a container. */
export class VolumeDeviceHelper extends Template implements VolumeDeviceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _devicePath: string;
    get devicePath(): string {
        return this._devicePath
    }
    set devicePath(x: string) {
        this._devicePath = x
    }
    $devicePath(x: string) {
        this.devicePath = x; return this
    }
}

export interface VolumeMountHelper extends VolumeMount {
    $mountPath(x: string): VolumeMountHelper;
    $mountPropagation(x: string): VolumeMountHelper;
    $readOnly(x: boolean): VolumeMountHelper;
    $subPath(x: string): VolumeMountHelper;
    $subPathExpr(x: string): VolumeMountHelper;
}

/** VolumeMount describes a mounting of a Volume within a container. */
export class VolumeMountHelper extends Template implements VolumeMountHelper {
    constructor(obj: any) {
        super(obj)
    }

    _mountPath: string;
    get mountPath(): string {
        return this._mountPath
    }
    set mountPath(x: string) {
        this._mountPath = x
    }
    $mountPath(x: string) {
        this.mountPath = x; return this
    }

    _mountPropagation: string;
    get mountPropagation(): string {
        return this._mountPropagation
    }
    set mountPropagation(x: string) {
        this._mountPropagation = x
    }
    $mountPropagation(x: string) {
        this.mountPropagation = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $readOnly(x: boolean) {
        this.readOnly = x; return this
    }

    _subPath: string;
    get subPath(): string {
        return this._subPath
    }
    set subPath(x: string) {
        this._subPath = x
    }
    $subPath(x: string) {
        this.subPath = x; return this
    }

    _subPathExpr: string;
    get subPathExpr(): string {
        return this._subPathExpr
    }
    set subPathExpr(x: string) {
        this._subPathExpr = x
    }
    $subPathExpr(x: string) {
        this.subPathExpr = x; return this
    }
}

export interface VolumeNodeAffinityHelper extends VolumeNodeAffinity {
    $required(x: NodeSelectorHelper): VolumeNodeAffinityHelper;
}

/** VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from. */
export class VolumeNodeAffinityHelper extends Template implements VolumeNodeAffinityHelper {
    constructor(obj: any) {
        super(obj)
    }

    _required: NodeSelectorHelper;
    get required(): NodeSelectorHelper {
        return this._required
    }
    set required(x: NodeSelectorHelper) {
        this._required = x
    }
    $required(x: NodeSelectorHelper) {
        this.required = x; return this
    }
}

export interface VolumeProjectionHelper extends VolumeProjection {
    $configMap(x: ConfigMapProjectionHelper): VolumeProjectionHelper;
    $downwardAPI(x: DownwardAPIProjectionHelper): VolumeProjectionHelper;
    $secret(x: SecretProjectionHelper): VolumeProjectionHelper;
    $serviceAccountToken(x: ServiceAccountTokenProjectionHelper): VolumeProjectionHelper;
}

/** Projection that may be projected along with other supported volume types */
export class VolumeProjectionHelper extends Template implements VolumeProjectionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _configMap: ConfigMapProjectionHelper;
    get configMap(): ConfigMapProjectionHelper {
        return this._configMap
    }
    set configMap(x: ConfigMapProjectionHelper) {
        this._configMap = x
    }
    $configMap(x: ConfigMapProjectionHelper) {
        this.configMap = x; return this
    }

    _downwardAPI: DownwardAPIProjectionHelper;
    get downwardAPI(): DownwardAPIProjectionHelper {
        return this._downwardAPI
    }
    set downwardAPI(x: DownwardAPIProjectionHelper) {
        this._downwardAPI = x
    }
    $downwardAPI(x: DownwardAPIProjectionHelper) {
        this.downwardAPI = x; return this
    }

    _secret: SecretProjectionHelper;
    get secret(): SecretProjectionHelper {
        return this._secret
    }
    set secret(x: SecretProjectionHelper) {
        this._secret = x
    }
    $secret(x: SecretProjectionHelper) {
        this.secret = x; return this
    }

    _serviceAccountToken: ServiceAccountTokenProjectionHelper;
    get serviceAccountToken(): ServiceAccountTokenProjectionHelper {
        return this._serviceAccountToken
    }
    set serviceAccountToken(x: ServiceAccountTokenProjectionHelper) {
        this._serviceAccountToken = x
    }
    $serviceAccountToken(x: ServiceAccountTokenProjectionHelper) {
        this.serviceAccountToken = x; return this
    }
}

export interface VsphereVirtualDiskVolumeSourceHelper extends VsphereVirtualDiskVolumeSource {
    $fsType(x: string): VsphereVirtualDiskVolumeSourceHelper;
    $storagePolicyID(x: string): VsphereVirtualDiskVolumeSourceHelper;
    $storagePolicyName(x: string): VsphereVirtualDiskVolumeSourceHelper;
    $volumePath(x: string): VsphereVirtualDiskVolumeSourceHelper;
}

/** Represents a vSphere volume resource. */
export class VsphereVirtualDiskVolumeSourceHelper extends Template implements VsphereVirtualDiskVolumeSourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fsType: string;
    get fsType(): string {
        return this._fsType
    }
    set fsType(x: string) {
        this._fsType = x
    }
    $fsType(x: string) {
        this.fsType = x; return this
    }

    _storagePolicyID: string;
    get storagePolicyID(): string {
        return this._storagePolicyID
    }
    set storagePolicyID(x: string) {
        this._storagePolicyID = x
    }
    $storagePolicyID(x: string) {
        this.storagePolicyID = x; return this
    }

    _storagePolicyName: string;
    get storagePolicyName(): string {
        return this._storagePolicyName
    }
    set storagePolicyName(x: string) {
        this._storagePolicyName = x
    }
    $storagePolicyName(x: string) {
        this.storagePolicyName = x; return this
    }

    _volumePath: string;
    get volumePath(): string {
        return this._volumePath
    }
    set volumePath(x: string) {
        this._volumePath = x
    }
    $volumePath(x: string) {
        this.volumePath = x; return this
    }
}

export interface WeightedPodAffinityTermHelper extends WeightedPodAffinityTerm {
    $podAffinityTerm(x: PodAffinityTermHelper): WeightedPodAffinityTermHelper;
    $weight(x: number): WeightedPodAffinityTermHelper;
}

/** The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s) */
export class WeightedPodAffinityTermHelper extends Template implements WeightedPodAffinityTermHelper {
    constructor(obj: any) {
        super(obj)
    }

    _podAffinityTerm: PodAffinityTermHelper;
    get podAffinityTerm(): PodAffinityTermHelper {
        return this._podAffinityTerm
    }
    set podAffinityTerm(x: PodAffinityTermHelper) {
        this._podAffinityTerm = x
    }
    $podAffinityTerm(x: PodAffinityTermHelper) {
        this.podAffinityTerm = x; return this
    }

    _weight: number;
    get weight(): number {
        return this._weight
    }
    set weight(x: number) {
        this._weight = x
    }
    $weight(x: number) {
        this.weight = x; return this
    }
}

export interface WindowsSecurityContextOptionsHelper extends WindowsSecurityContextOptions {
    $gmsaCredentialSpec(x: string): WindowsSecurityContextOptionsHelper;
    $gmsaCredentialSpecName(x: string): WindowsSecurityContextOptionsHelper;
    $hostProcess(x: boolean): WindowsSecurityContextOptionsHelper;
    $runAsUserName(x: string): WindowsSecurityContextOptionsHelper;
}

/** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
export class WindowsSecurityContextOptionsHelper extends Template implements WindowsSecurityContextOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _gmsaCredentialSpec: string;
    get gmsaCredentialSpec(): string {
        return this._gmsaCredentialSpec
    }
    set gmsaCredentialSpec(x: string) {
        this._gmsaCredentialSpec = x
    }
    $gmsaCredentialSpec(x: string) {
        this.gmsaCredentialSpec = x; return this
    }

    _gmsaCredentialSpecName: string;
    get gmsaCredentialSpecName(): string {
        return this._gmsaCredentialSpecName
    }
    set gmsaCredentialSpecName(x: string) {
        this._gmsaCredentialSpecName = x
    }
    $gmsaCredentialSpecName(x: string) {
        this.gmsaCredentialSpecName = x; return this
    }

    _hostProcess: boolean;
    get hostProcess(): boolean {
        return this._hostProcess
    }
    set hostProcess(x: boolean) {
        this._hostProcess = x
    }
    $hostProcess(x: boolean) {
        this.hostProcess = x; return this
    }

    _runAsUserName: string;
    get runAsUserName(): string {
        return this._runAsUserName
    }
    set runAsUserName(x: string) {
        this._runAsUserName = x
    }
    $runAsUserName(x: string) {
        this.runAsUserName = x; return this
    }
}
