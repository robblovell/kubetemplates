import { ResourceTemplate, Template } from "../resourceTemplate";
import { AllowedCSIDriver, AllowedFlexVolume, AllowedHostPath, Eviction, FSGroupStrategyOptions, HostPortRange, IDRange, PodDisruptionBudget, PodDisruptionBudgetList, PodDisruptionBudgetSpec, PodDisruptionBudgetStatus, PodSecurityPolicy, PodSecurityPolicyList, PodSecurityPolicySpec, RunAsGroupStrategyOptions, RunAsUserStrategyOptions, RuntimeClassStrategyOptions, SELinuxStrategyOptions, SupplementalGroupsStrategyOptions } from "./v1beta1";
import { Condition, DeleteOptions, LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { SELinuxOptions } from "../core/v1";

export interface AllowedCSIDriverHelper extends AllowedCSIDriver {
}

/** AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used. */
export class AllowedCSIDriverHelper extends Template implements AllowedCSIDriverHelper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface AllowedFlexVolumeHelper extends AllowedFlexVolume {
    $driver(x: any): any;
}

/** AllowedFlexVolume represents a single Flexvolume that is allowed to be used. */
export class AllowedFlexVolumeHelper extends Template implements AllowedFlexVolumeHelper {
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
}

export interface AllowedHostPathHelper extends AllowedHostPath {
    $pathPrefix(x: any): any;
    $readOnly(x: any): any;
}

/** AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined. */
export class AllowedHostPathHelper extends Template implements AllowedHostPathHelper {
    constructor(obj: any) {
        super(obj)
    }

    _pathPrefix: any;
    get pathPrefix(): any /*string*/ {
        return this._pathPrefix
    }
    set pathPrefix(x: any /*string*/) {
        this._pathPrefix = x
    }
    setPathPrefix(x: any /*string*/) {
        this.pathPrefix = x; return this
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

export interface EvictionHelper extends Eviction {
    $deleteOptions(x: any): any;
    $metadata(x: any): any;
}

/** Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions. */
export class EvictionHelper extends ResourceTemplate implements EvictionHelper {
    static kind = 'Eviction';
    static apiVersion = 'policy/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, EvictionHelper.kind, EvictionHelper.apiVersion)
    }

    _deleteOptions: any;
    get deleteOptions(): any /*DeleteOptionsHelper*/ {
        return this._deleteOptions
    }
    set deleteOptions(x: any /*DeleteOptionsHelper*/) {
        this._deleteOptions = x
    }
    setDeleteOptions(x: any /*DeleteOptionsHelper*/) {
        this.deleteOptions = x; return this
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

export interface FSGroupStrategyOptionsHelper extends FSGroupStrategyOptions {
    $ranges(x: any): any;
    $rule(x: any): any;
}

/** FSGroupStrategyOptions defines the strategy type and options used to create the strategy. */
export class FSGroupStrategyOptionsHelper extends Template implements FSGroupStrategyOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ranges: any;
    get ranges(): any /*Array<IDRange>*/ {
        return this._ranges
    }
    set ranges(x: any /*Array<IDRange>*/) {
        this._ranges = this.set(this.ranges, x)
    }
    setRanges(x: any /*Array<IDRange>*/) {
        this.ranges = x; return this
    }

    _rule: any;
    get rule(): any /*string*/ {
        return this._rule
    }
    set rule(x: any /*string*/) {
        this._rule = x
    }
    setRule(x: any /*string*/) {
        this.rule = x; return this
    }
}

export interface HostPortRangeHelper extends HostPortRange {
    $max(x: any): any;
    $min(x: any): any;
}

/** HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. */
export class HostPortRangeHelper extends Template implements HostPortRangeHelper {
    constructor(obj: any) {
        super(obj)
    }

    _max: any;
    get max(): any /*number*/ {
        return this._max
    }
    set max(x: any /*number*/) {
        this._max = x
    }
    setMax(x: any /*number*/) {
        this.max = x; return this
    }

    _min: any;
    get min(): any /*number*/ {
        return this._min
    }
    set min(x: any /*number*/) {
        this._min = x
    }
    setMin(x: any /*number*/) {
        this.min = x; return this
    }
}

export interface IDRangeHelper extends IDRange {
    $max(x: any): any;
    $min(x: any): any;
}

/** IDRange provides a min/max of an allowed range of IDs. */
export class IDRangeHelper extends Template implements IDRangeHelper {
    constructor(obj: any) {
        super(obj)
    }

    _max: any;
    get max(): any /*number*/ {
        return this._max
    }
    set max(x: any /*number*/) {
        this._max = x
    }
    setMax(x: any /*number*/) {
        this.max = x; return this
    }

    _min: any;
    get min(): any /*number*/ {
        return this._min
    }
    set min(x: any /*number*/) {
        this._min = x
    }
    setMin(x: any /*number*/) {
        this.min = x; return this
    }
}

export interface PodDisruptionBudgetHelper extends PodDisruptionBudget {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods */
export class PodDisruptionBudgetHelper extends ResourceTemplate implements PodDisruptionBudgetHelper {
    static kind = 'PodDisruptionBudget';
    static apiVersion = 'policy/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodDisruptionBudgetHelper.kind, PodDisruptionBudgetHelper.apiVersion)
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
    get spec(): any /*PodDisruptionBudgetSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*PodDisruptionBudgetSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*PodDisruptionBudgetSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*PodDisruptionBudgetStatusHelper*/ {
        return this._status
    }
    set status(x: any /*PodDisruptionBudgetStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*PodDisruptionBudgetStatusHelper*/) {
        this.status = x; return this
    }
}

export interface PodDisruptionBudgetListHelper extends PodDisruptionBudgetList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** PodDisruptionBudgetList is a collection of PodDisruptionBudgets. */
export class PodDisruptionBudgetListHelper extends ResourceTemplate implements PodDisruptionBudgetListHelper {
    static kind = 'PodDisruptionBudgetList';
    static apiVersion = 'policy/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodDisruptionBudgetListHelper.kind, PodDisruptionBudgetListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<PodDisruptionBudget>*/ {
        return this._items
    }
    set items(x: any /*Array<PodDisruptionBudget>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<PodDisruptionBudget>*/) {
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

export interface PodDisruptionBudgetSpecHelper extends PodDisruptionBudgetSpec {
    $maxUnavailable(x: any): any;
    $minAvailable(x: any): any;
    $selector(x: any): any;
}

/** PodDisruptionBudgetSpec is a description of a PodDisruptionBudget. */
export class PodDisruptionBudgetSpecHelper extends Template implements PodDisruptionBudgetSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _maxUnavailable: any;
    get maxUnavailable(): any /*number | stringHelper*/ {
        return this._maxUnavailable
    }
    set maxUnavailable(x: any /*number | stringHelper*/) {
        this._maxUnavailable = x
    }
    setMaxUnavailable(x: any /*number | stringHelper*/) {
        this.maxUnavailable = x; return this
    }

    _minAvailable: any;
    get minAvailable(): any /*number | stringHelper*/ {
        return this._minAvailable
    }
    set minAvailable(x: any /*number | stringHelper*/) {
        this._minAvailable = x
    }
    setMinAvailable(x: any /*number | stringHelper*/) {
        this.minAvailable = x; return this
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
}

export interface PodDisruptionBudgetStatusHelper extends PodDisruptionBudgetStatus {
    $conditions(x: any): any;
    $currentHealthy(x: any): any;
    $desiredHealthy(x: any): any;
    $disruptedPods(x: any): any;
    $disruptionsAllowed(x: any): any;
    $expectedPods(x: any): any;
    $observedGeneration(x: any): any;
}

/** PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system. */
export class PodDisruptionBudgetStatusHelper extends Template implements PodDisruptionBudgetStatusHelper {
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

    _currentHealthy: any;
    get currentHealthy(): any /*number*/ {
        return this._currentHealthy
    }
    set currentHealthy(x: any /*number*/) {
        this._currentHealthy = x
    }
    setCurrentHealthy(x: any /*number*/) {
        this.currentHealthy = x; return this
    }

    _desiredHealthy: any;
    get desiredHealthy(): any /*number*/ {
        return this._desiredHealthy
    }
    set desiredHealthy(x: any /*number*/) {
        this._desiredHealthy = x
    }
    setDesiredHealthy(x: any /*number*/) {
        this.desiredHealthy = x; return this
    }

    _disruptedPods: any;
    get disruptedPods(): any /*{[name: string]: Time}Helper*/ {
        return this._disruptedPods
    }
    set disruptedPods(x: any /*{[name: string]: Time}Helper*/) {
        this._disruptedPods = this.set(this.disruptedPods, x)
    }
    setDisruptedPods(x: any /*{[name: string]: Time}Helper*/) {
        this.disruptedPods = x; return this
    }

    _disruptionsAllowed: any;
    get disruptionsAllowed(): any /*number*/ {
        return this._disruptionsAllowed
    }
    set disruptionsAllowed(x: any /*number*/) {
        this._disruptionsAllowed = x
    }
    setDisruptionsAllowed(x: any /*number*/) {
        this.disruptionsAllowed = x; return this
    }

    _expectedPods: any;
    get expectedPods(): any /*number*/ {
        return this._expectedPods
    }
    set expectedPods(x: any /*number*/) {
        this._expectedPods = x
    }
    setExpectedPods(x: any /*number*/) {
        this.expectedPods = x; return this
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
}

export interface PodSecurityPolicyHelper extends PodSecurityPolicy {
    $metadata(x: any): any;
    $spec(x: any): any;
}

/** PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated in 1.21. */
export class PodSecurityPolicyHelper extends ResourceTemplate implements PodSecurityPolicyHelper {
    static kind = 'PodSecurityPolicy';
    static apiVersion = 'policy/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodSecurityPolicyHelper.kind, PodSecurityPolicyHelper.apiVersion)
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
    get spec(): any /*PodSecurityPolicySpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*PodSecurityPolicySpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*PodSecurityPolicySpecHelper*/) {
        this.spec = x; return this
    }
}

export interface PodSecurityPolicyListHelper extends PodSecurityPolicyList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** PodSecurityPolicyList is a list of PodSecurityPolicy objects. */
export class PodSecurityPolicyListHelper extends ResourceTemplate implements PodSecurityPolicyListHelper {
    static kind = 'PodSecurityPolicyList';
    static apiVersion = 'policy/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodSecurityPolicyListHelper.kind, PodSecurityPolicyListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<PodSecurityPolicy>*/ {
        return this._items
    }
    set items(x: any /*Array<PodSecurityPolicy>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<PodSecurityPolicy>*/) {
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

export interface PodSecurityPolicySpecHelper extends PodSecurityPolicySpec {
    $allowPrivilegeEscalation(x: any): any;
    $allowedCSIDrivers(x: any): any;
    $allowedCapabilities(x: any): any;
    $allowedFlexVolumes(x: any): any;
    $allowedHostPaths(x: any): any;
    $allowedProcMountTypes(x: any): any;
    $allowedUnsafeSysctls(x: any): any;
    $defaultAddCapabilities(x: any): any;
    $defaultAllowPrivilegeEscalation(x: any): any;
    $forbiddenSysctls(x: any): any;
    $fsGroup(x: any): any;
    $hostIPC(x: any): any;
    $hostNetwork(x: any): any;
    $hostPID(x: any): any;
    $hostPorts(x: any): any;
    $privileged(x: any): any;
    $readOnlyRootFilesystem(x: any): any;
    $requiredDropCapabilities(x: any): any;
    $runAsGroup(x: any): any;
    $runAsUser(x: any): any;
    $runtimeClass(x: any): any;
    $seLinux(x: any): any;
    $supplementalGroups(x: any): any;
    $volumes(x: any): any;
}

/** PodSecurityPolicySpec defines the policy enforced. */
export class PodSecurityPolicySpecHelper extends Template implements PodSecurityPolicySpecHelper {
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

    _allowedCSIDrivers: any;
    get allowedCSIDrivers(): any /*Array<AllowedCSIDriver>*/ {
        return this._allowedCSIDrivers
    }
    set allowedCSIDrivers(x: any /*Array<AllowedCSIDriver>*/) {
        this._allowedCSIDrivers = this.set(this.allowedCSIDrivers, x)
    }
    setAllowedCSIDrivers(x: any /*Array<AllowedCSIDriver>*/) {
        this.allowedCSIDrivers = x; return this
    }

    _allowedCapabilities: any;
    get allowedCapabilities(): any /*Array<string>*/ {
        return this._allowedCapabilities
    }
    set allowedCapabilities(x: any /*Array<string>*/) {
        this._allowedCapabilities = this.set(this.allowedCapabilities, x)
    }
    setAllowedCapabilities(x: any /*Array<string>*/) {
        this.allowedCapabilities = x; return this
    }

    _allowedFlexVolumes: any;
    get allowedFlexVolumes(): any /*Array<AllowedFlexVolume>*/ {
        return this._allowedFlexVolumes
    }
    set allowedFlexVolumes(x: any /*Array<AllowedFlexVolume>*/) {
        this._allowedFlexVolumes = this.set(this.allowedFlexVolumes, x)
    }
    setAllowedFlexVolumes(x: any /*Array<AllowedFlexVolume>*/) {
        this.allowedFlexVolumes = x; return this
    }

    _allowedHostPaths: any;
    get allowedHostPaths(): any /*Array<AllowedHostPath>*/ {
        return this._allowedHostPaths
    }
    set allowedHostPaths(x: any /*Array<AllowedHostPath>*/) {
        this._allowedHostPaths = this.set(this.allowedHostPaths, x)
    }
    setAllowedHostPaths(x: any /*Array<AllowedHostPath>*/) {
        this.allowedHostPaths = x; return this
    }

    _allowedProcMountTypes: any;
    get allowedProcMountTypes(): any /*Array<string>*/ {
        return this._allowedProcMountTypes
    }
    set allowedProcMountTypes(x: any /*Array<string>*/) {
        this._allowedProcMountTypes = this.set(this.allowedProcMountTypes, x)
    }
    setAllowedProcMountTypes(x: any /*Array<string>*/) {
        this.allowedProcMountTypes = x; return this
    }

    _allowedUnsafeSysctls: any;
    get allowedUnsafeSysctls(): any /*Array<string>*/ {
        return this._allowedUnsafeSysctls
    }
    set allowedUnsafeSysctls(x: any /*Array<string>*/) {
        this._allowedUnsafeSysctls = this.set(this.allowedUnsafeSysctls, x)
    }
    setAllowedUnsafeSysctls(x: any /*Array<string>*/) {
        this.allowedUnsafeSysctls = x; return this
    }

    _defaultAddCapabilities: any;
    get defaultAddCapabilities(): any /*Array<string>*/ {
        return this._defaultAddCapabilities
    }
    set defaultAddCapabilities(x: any /*Array<string>*/) {
        this._defaultAddCapabilities = this.set(this.defaultAddCapabilities, x)
    }
    setDefaultAddCapabilities(x: any /*Array<string>*/) {
        this.defaultAddCapabilities = x; return this
    }

    _defaultAllowPrivilegeEscalation: any;
    get defaultAllowPrivilegeEscalation(): any /*boolean*/ {
        return this._defaultAllowPrivilegeEscalation
    }
    set defaultAllowPrivilegeEscalation(x: any /*boolean*/) {
        this._defaultAllowPrivilegeEscalation = x
    }
    setDefaultAllowPrivilegeEscalation(x: any /*boolean*/) {
        this.defaultAllowPrivilegeEscalation = x; return this
    }

    _forbiddenSysctls: any;
    get forbiddenSysctls(): any /*Array<string>*/ {
        return this._forbiddenSysctls
    }
    set forbiddenSysctls(x: any /*Array<string>*/) {
        this._forbiddenSysctls = this.set(this.forbiddenSysctls, x)
    }
    setForbiddenSysctls(x: any /*Array<string>*/) {
        this.forbiddenSysctls = x; return this
    }

    _fsGroup: any;
    get fsGroup(): any /*FSGroupStrategyOptionsHelper*/ {
        return this._fsGroup
    }
    set fsGroup(x: any /*FSGroupStrategyOptionsHelper*/) {
        this._fsGroup = x
    }
    setFsGroup(x: any /*FSGroupStrategyOptionsHelper*/) {
        this.fsGroup = x; return this
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

    _hostPorts: any;
    get hostPorts(): any /*Array<HostPortRange>*/ {
        return this._hostPorts
    }
    set hostPorts(x: any /*Array<HostPortRange>*/) {
        this._hostPorts = this.set(this.hostPorts, x)
    }
    setHostPorts(x: any /*Array<HostPortRange>*/) {
        this.hostPorts = x; return this
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

    _requiredDropCapabilities: any;
    get requiredDropCapabilities(): any /*Array<string>*/ {
        return this._requiredDropCapabilities
    }
    set requiredDropCapabilities(x: any /*Array<string>*/) {
        this._requiredDropCapabilities = this.set(this.requiredDropCapabilities, x)
    }
    setRequiredDropCapabilities(x: any /*Array<string>*/) {
        this.requiredDropCapabilities = x; return this
    }

    _runAsGroup: any;
    get runAsGroup(): any /*RunAsGroupStrategyOptionsHelper*/ {
        return this._runAsGroup
    }
    set runAsGroup(x: any /*RunAsGroupStrategyOptionsHelper*/) {
        this._runAsGroup = x
    }
    setRunAsGroup(x: any /*RunAsGroupStrategyOptionsHelper*/) {
        this.runAsGroup = x; return this
    }

    _runAsUser: any;
    get runAsUser(): any /*RunAsUserStrategyOptionsHelper*/ {
        return this._runAsUser
    }
    set runAsUser(x: any /*RunAsUserStrategyOptionsHelper*/) {
        this._runAsUser = x
    }
    setRunAsUser(x: any /*RunAsUserStrategyOptionsHelper*/) {
        this.runAsUser = x; return this
    }

    _runtimeClass: any;
    get runtimeClass(): any /*RuntimeClassStrategyOptionsHelper*/ {
        return this._runtimeClass
    }
    set runtimeClass(x: any /*RuntimeClassStrategyOptionsHelper*/) {
        this._runtimeClass = x
    }
    setRuntimeClass(x: any /*RuntimeClassStrategyOptionsHelper*/) {
        this.runtimeClass = x; return this
    }

    _seLinux: any;
    get seLinux(): any /*SELinuxStrategyOptionsHelper*/ {
        return this._seLinux
    }
    set seLinux(x: any /*SELinuxStrategyOptionsHelper*/) {
        this._seLinux = x
    }
    setSeLinux(x: any /*SELinuxStrategyOptionsHelper*/) {
        this.seLinux = x; return this
    }

    _supplementalGroups: any;
    get supplementalGroups(): any /*SupplementalGroupsStrategyOptionsHelper*/ {
        return this._supplementalGroups
    }
    set supplementalGroups(x: any /*SupplementalGroupsStrategyOptionsHelper*/) {
        this._supplementalGroups = x
    }
    setSupplementalGroups(x: any /*SupplementalGroupsStrategyOptionsHelper*/) {
        this.supplementalGroups = x; return this
    }

    _volumes: any;
    get volumes(): any /*Array<string>*/ {
        return this._volumes
    }
    set volumes(x: any /*Array<string>*/) {
        this._volumes = this.set(this.volumes, x)
    }
    setVolumes(x: any /*Array<string>*/) {
        this.volumes = x; return this
    }
}

export interface RunAsGroupStrategyOptionsHelper extends RunAsGroupStrategyOptions {
    $ranges(x: any): any;
    $rule(x: any): any;
}

/** RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy. */
export class RunAsGroupStrategyOptionsHelper extends Template implements RunAsGroupStrategyOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ranges: any;
    get ranges(): any /*Array<IDRange>*/ {
        return this._ranges
    }
    set ranges(x: any /*Array<IDRange>*/) {
        this._ranges = this.set(this.ranges, x)
    }
    setRanges(x: any /*Array<IDRange>*/) {
        this.ranges = x; return this
    }

    _rule: any;
    get rule(): any /*string*/ {
        return this._rule
    }
    set rule(x: any /*string*/) {
        this._rule = x
    }
    setRule(x: any /*string*/) {
        this.rule = x; return this
    }
}

export interface RunAsUserStrategyOptionsHelper extends RunAsUserStrategyOptions {
    $ranges(x: any): any;
    $rule(x: any): any;
}

/** RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. */
export class RunAsUserStrategyOptionsHelper extends Template implements RunAsUserStrategyOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ranges: any;
    get ranges(): any /*Array<IDRange>*/ {
        return this._ranges
    }
    set ranges(x: any /*Array<IDRange>*/) {
        this._ranges = this.set(this.ranges, x)
    }
    setRanges(x: any /*Array<IDRange>*/) {
        this.ranges = x; return this
    }

    _rule: any;
    get rule(): any /*string*/ {
        return this._rule
    }
    set rule(x: any /*string*/) {
        this._rule = x
    }
    setRule(x: any /*string*/) {
        this.rule = x; return this
    }
}

export interface RuntimeClassStrategyOptionsHelper extends RuntimeClassStrategyOptions {
    $allowedRuntimeClassNames(x: any): any;
    $defaultRuntimeClassName(x: any): any;
}

/** RuntimeClassStrategyOptions define the strategy that will dictate the allowable RuntimeClasses for a pod. */
export class RuntimeClassStrategyOptionsHelper extends Template implements RuntimeClassStrategyOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _allowedRuntimeClassNames: any;
    get allowedRuntimeClassNames(): any /*Array<string>*/ {
        return this._allowedRuntimeClassNames
    }
    set allowedRuntimeClassNames(x: any /*Array<string>*/) {
        this._allowedRuntimeClassNames = this.set(this.allowedRuntimeClassNames, x)
    }
    setAllowedRuntimeClassNames(x: any /*Array<string>*/) {
        this.allowedRuntimeClassNames = x; return this
    }

    _defaultRuntimeClassName: any;
    get defaultRuntimeClassName(): any /*string*/ {
        return this._defaultRuntimeClassName
    }
    set defaultRuntimeClassName(x: any /*string*/) {
        this._defaultRuntimeClassName = x
    }
    setDefaultRuntimeClassName(x: any /*string*/) {
        this.defaultRuntimeClassName = x; return this
    }
}

export interface SELinuxStrategyOptionsHelper extends SELinuxStrategyOptions {
    $rule(x: any): any;
    $seLinuxOptions(x: any): any;
}

/** SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. */
export class SELinuxStrategyOptionsHelper extends Template implements SELinuxStrategyOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _rule: any;
    get rule(): any /*string*/ {
        return this._rule
    }
    set rule(x: any /*string*/) {
        this._rule = x
    }
    setRule(x: any /*string*/) {
        this.rule = x; return this
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
}

export interface SupplementalGroupsStrategyOptionsHelper extends SupplementalGroupsStrategyOptions {
    $ranges(x: any): any;
    $rule(x: any): any;
}

/** SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. */
export class SupplementalGroupsStrategyOptionsHelper extends Template implements SupplementalGroupsStrategyOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ranges: any;
    get ranges(): any /*Array<IDRange>*/ {
        return this._ranges
    }
    set ranges(x: any /*Array<IDRange>*/) {
        this._ranges = this.set(this.ranges, x)
    }
    setRanges(x: any /*Array<IDRange>*/) {
        this.ranges = x; return this
    }

    _rule: any;
    get rule(): any /*string*/ {
        return this._rule
    }
    set rule(x: any /*string*/) {
        this._rule = x
    }
    setRule(x: any /*string*/) {
        this.rule = x; return this
    }
}
