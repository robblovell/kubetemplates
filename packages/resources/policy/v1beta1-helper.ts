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
    $driver(x: string): AllowedFlexVolumeHelper;
}

/** AllowedFlexVolume represents a single Flexvolume that is allowed to be used. */
export class AllowedFlexVolumeHelper extends Template implements AllowedFlexVolumeHelper {
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
    $Driver(x: string) {
        this.driver = x; return this
    }
}

export interface AllowedHostPathHelper extends AllowedHostPath {
    $pathPrefix(x: string): AllowedHostPathHelper;
    $readOnly(x: boolean): AllowedHostPathHelper;
}

/** AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined. */
export class AllowedHostPathHelper extends Template implements AllowedHostPathHelper {
    constructor(obj: any) {
        super(obj)
    }

    _pathPrefix: string;
    get pathPrefix(): string {
        return this._pathPrefix
    }
    set pathPrefix(x: string) {
        this._pathPrefix = x
    }
    $PathPrefix(x: string) {
        this.pathPrefix = x; return this
    }

    _readOnly: boolean;
    get readOnly(): boolean {
        return this._readOnly
    }
    set readOnly(x: boolean) {
        this._readOnly = x
    }
    $ReadOnly(x: boolean) {
        this.readOnly = x; return this
    }
}

export interface EvictionHelper extends Eviction {
    deleteOptions: DeleteOptionsHelper;
    $deleteOptions(x: DeleteOptionsHelper): EvictionHelper;
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): EvictionHelper;
}

/** Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions. */
export class EvictionHelper extends ResourceTemplate implements EvictionHelper {
    static kind = 'Eviction';
    static apiVersion = 'policy/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, EvictionHelper.kind, EvictionHelper.apiVersion)
    }

    _deleteOptions: DeleteOptionsHelper;
    get deleteOptions(): DeleteOptionsHelper {
        return this._deleteOptions
    }
    set deleteOptions(x: DeleteOptionsHelper) {
        this._deleteOptions = x
    }
    $DeleteOptions(x: DeleteOptionsHelper) {
        this.deleteOptions = x; return this
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
}

export interface FSGroupStrategyOptionsHelper extends FSGroupStrategyOptions {
    $ranges(x: Array<IDRange>): FSGroupStrategyOptionsHelper;
    $rule(x: string): FSGroupStrategyOptionsHelper;
}

/** FSGroupStrategyOptions defines the strategy type and options used to create the strategy. */
export class FSGroupStrategyOptionsHelper extends Template implements FSGroupStrategyOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ranges: Array<IDRange>;
    get ranges(): Array<IDRange> {
        return this._ranges
    }
    set ranges(x: Array<IDRange>) {
        this._ranges = this.set(this.ranges, x)
    }
    $Ranges(x: Array<IDRange>) {
        this.ranges = x; return this
    }

    _rule: string;
    get rule(): string {
        return this._rule
    }
    set rule(x: string) {
        this._rule = x
    }
    $Rule(x: string) {
        this.rule = x; return this
    }
}

export interface HostPortRangeHelper extends HostPortRange {
    $max(x: number): HostPortRangeHelper;
    $min(x: number): HostPortRangeHelper;
}

/** HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. */
export class HostPortRangeHelper extends Template implements HostPortRangeHelper {
    constructor(obj: any) {
        super(obj)
    }

    _max: number;
    get max(): number {
        return this._max
    }
    set max(x: number) {
        this._max = x
    }
    $Max(x: number) {
        this.max = x; return this
    }

    _min: number;
    get min(): number {
        return this._min
    }
    set min(x: number) {
        this._min = x
    }
    $Min(x: number) {
        this.min = x; return this
    }
}

export interface IDRangeHelper extends IDRange {
    $max(x: number): IDRangeHelper;
    $min(x: number): IDRangeHelper;
}

/** IDRange provides a min/max of an allowed range of IDs. */
export class IDRangeHelper extends Template implements IDRangeHelper {
    constructor(obj: any) {
        super(obj)
    }

    _max: number;
    get max(): number {
        return this._max
    }
    set max(x: number) {
        this._max = x
    }
    $Max(x: number) {
        this.max = x; return this
    }

    _min: number;
    get min(): number {
        return this._min
    }
    set min(x: number) {
        this._min = x
    }
    $Min(x: number) {
        this.min = x; return this
    }
}

export interface PodDisruptionBudgetHelper extends PodDisruptionBudget {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): PodDisruptionBudgetHelper;
    spec: PodDisruptionBudgetSpecHelper;
    $spec(x: PodDisruptionBudgetSpecHelper): PodDisruptionBudgetHelper;
    status: PodDisruptionBudgetStatusHelper;
    $status(x: PodDisruptionBudgetStatusHelper): PodDisruptionBudgetHelper;
}

/** PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods */
export class PodDisruptionBudgetHelper extends ResourceTemplate implements PodDisruptionBudgetHelper {
    static kind = 'PodDisruptionBudget';
    static apiVersion = 'policy/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodDisruptionBudgetHelper.kind, PodDisruptionBudgetHelper.apiVersion)
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

    _spec: PodDisruptionBudgetSpecHelper;
    get spec(): PodDisruptionBudgetSpecHelper {
        return this._spec
    }
    set spec(x: PodDisruptionBudgetSpecHelper) {
        this._spec = x
    }
    $Spec(x: PodDisruptionBudgetSpecHelper) {
        this.spec = x; return this
    }

    _status: PodDisruptionBudgetStatusHelper;
    get status(): PodDisruptionBudgetStatusHelper {
        return this._status
    }
    set status(x: PodDisruptionBudgetStatusHelper) {
        this._status = x
    }
    $Status(x: PodDisruptionBudgetStatusHelper) {
        this.status = x; return this
    }
}

export interface PodDisruptionBudgetListHelper extends PodDisruptionBudgetList {
    $items(x: Array<PodDisruptionBudget>): PodDisruptionBudgetListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): PodDisruptionBudgetListHelper;
}

/** PodDisruptionBudgetList is a collection of PodDisruptionBudgets. */
export class PodDisruptionBudgetListHelper extends ResourceTemplate implements PodDisruptionBudgetListHelper {
    static kind = 'PodDisruptionBudgetList';
    static apiVersion = 'policy/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodDisruptionBudgetListHelper.kind, PodDisruptionBudgetListHelper.apiVersion)
    }

    _items: Array<PodDisruptionBudget>;
    get items(): Array<PodDisruptionBudget> {
        return this._items
    }
    set items(x: Array<PodDisruptionBudget>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<PodDisruptionBudget>) {
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

export interface PodDisruptionBudgetSpecHelper extends PodDisruptionBudgetSpec {
    maxUnavailable: number | stringHelper;
    $maxUnavailable(x: number | stringHelper): PodDisruptionBudgetSpecHelper;
    minAvailable: number | stringHelper;
    $minAvailable(x: number | stringHelper): PodDisruptionBudgetSpecHelper;
    selector: LabelSelectorHelper;
    $selector(x: LabelSelectorHelper): PodDisruptionBudgetSpecHelper;
}

/** PodDisruptionBudgetSpec is a description of a PodDisruptionBudget. */
export class PodDisruptionBudgetSpecHelper extends Template implements PodDisruptionBudgetSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _maxUnavailable: number | stringHelper;
    get maxUnavailable(): number | stringHelper {
        return this._maxUnavailable
    }
    set maxUnavailable(x: number | stringHelper) {
        this._maxUnavailable = x
    }
    $MaxUnavailable(x: number | stringHelper) {
        this.maxUnavailable = x; return this
    }

    _minAvailable: number | stringHelper;
    get minAvailable(): number | stringHelper {
        return this._minAvailable
    }
    set minAvailable(x: number | stringHelper) {
        this._minAvailable = x
    }
    $MinAvailable(x: number | stringHelper) {
        this.minAvailable = x; return this
    }

    _selector: LabelSelectorHelper;
    get selector(): LabelSelectorHelper {
        return this._selector
    }
    set selector(x: LabelSelectorHelper) {
        this._selector = x
    }
    $Selector(x: LabelSelectorHelper) {
        this.selector = x; return this
    }
}

export interface PodDisruptionBudgetStatusHelper extends PodDisruptionBudgetStatus {
    $conditions(x: Array<Condition>): PodDisruptionBudgetStatusHelper;
    $currentHealthy(x: number): PodDisruptionBudgetStatusHelper;
    $desiredHealthy(x: number): PodDisruptionBudgetStatusHelper;
    $disruptedPods(x: {[name: string]: Time}): PodDisruptionBudgetStatusHelper;
    $disruptionsAllowed(x: number): PodDisruptionBudgetStatusHelper;
    $expectedPods(x: number): PodDisruptionBudgetStatusHelper;
    $observedGeneration(x: number): PodDisruptionBudgetStatusHelper;
}

/** PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system. */
export class PodDisruptionBudgetStatusHelper extends Template implements PodDisruptionBudgetStatusHelper {
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
    $Conditions(x: Array<Condition>) {
        this.conditions = x; return this
    }

    _currentHealthy: number;
    get currentHealthy(): number {
        return this._currentHealthy
    }
    set currentHealthy(x: number) {
        this._currentHealthy = x
    }
    $CurrentHealthy(x: number) {
        this.currentHealthy = x; return this
    }

    _desiredHealthy: number;
    get desiredHealthy(): number {
        return this._desiredHealthy
    }
    set desiredHealthy(x: number) {
        this._desiredHealthy = x
    }
    $DesiredHealthy(x: number) {
        this.desiredHealthy = x; return this
    }

    _disruptedPods: {[name: string]: Time};
    get disruptedPods(): {[name: string]: Time} {
        return this._disruptedPods
    }
    set disruptedPods(x: {[name: string]: Time}) {
        this._disruptedPods = this.set(this.disruptedPods, x)
    }
    $DisruptedPods(x: {[name: string]: Time}) {
        this.disruptedPods = x; return this
    }

    _disruptionsAllowed: number;
    get disruptionsAllowed(): number {
        return this._disruptionsAllowed
    }
    set disruptionsAllowed(x: number) {
        this._disruptionsAllowed = x
    }
    $DisruptionsAllowed(x: number) {
        this.disruptionsAllowed = x; return this
    }

    _expectedPods: number;
    get expectedPods(): number {
        return this._expectedPods
    }
    set expectedPods(x: number) {
        this._expectedPods = x
    }
    $ExpectedPods(x: number) {
        this.expectedPods = x; return this
    }

    _observedGeneration: number;
    get observedGeneration(): number {
        return this._observedGeneration
    }
    set observedGeneration(x: number) {
        this._observedGeneration = x
    }
    $ObservedGeneration(x: number) {
        this.observedGeneration = x; return this
    }
}

export interface PodSecurityPolicyHelper extends PodSecurityPolicy {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): PodSecurityPolicyHelper;
    spec: PodSecurityPolicySpecHelper;
    $spec(x: PodSecurityPolicySpecHelper): PodSecurityPolicyHelper;
}

/** PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated in 1.21. */
export class PodSecurityPolicyHelper extends ResourceTemplate implements PodSecurityPolicyHelper {
    static kind = 'PodSecurityPolicy';
    static apiVersion = 'policy/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodSecurityPolicyHelper.kind, PodSecurityPolicyHelper.apiVersion)
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

    _spec: PodSecurityPolicySpecHelper;
    get spec(): PodSecurityPolicySpecHelper {
        return this._spec
    }
    set spec(x: PodSecurityPolicySpecHelper) {
        this._spec = x
    }
    $Spec(x: PodSecurityPolicySpecHelper) {
        this.spec = x; return this
    }
}

export interface PodSecurityPolicyListHelper extends PodSecurityPolicyList {
    $items(x: Array<PodSecurityPolicy>): PodSecurityPolicyListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): PodSecurityPolicyListHelper;
}

/** PodSecurityPolicyList is a list of PodSecurityPolicy objects. */
export class PodSecurityPolicyListHelper extends ResourceTemplate implements PodSecurityPolicyListHelper {
    static kind = 'PodSecurityPolicyList';
    static apiVersion = 'policy/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, PodSecurityPolicyListHelper.kind, PodSecurityPolicyListHelper.apiVersion)
    }

    _items: Array<PodSecurityPolicy>;
    get items(): Array<PodSecurityPolicy> {
        return this._items
    }
    set items(x: Array<PodSecurityPolicy>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<PodSecurityPolicy>) {
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

export interface PodSecurityPolicySpecHelper extends PodSecurityPolicySpec {
    $allowPrivilegeEscalation(x: boolean): PodSecurityPolicySpecHelper;
    $allowedCSIDrivers(x: Array<AllowedCSIDriver>): PodSecurityPolicySpecHelper;
    $allowedCapabilities(x: Array<string>): PodSecurityPolicySpecHelper;
    $allowedFlexVolumes(x: Array<AllowedFlexVolume>): PodSecurityPolicySpecHelper;
    $allowedHostPaths(x: Array<AllowedHostPath>): PodSecurityPolicySpecHelper;
    $allowedProcMountTypes(x: Array<string>): PodSecurityPolicySpecHelper;
    $allowedUnsafeSysctls(x: Array<string>): PodSecurityPolicySpecHelper;
    $defaultAddCapabilities(x: Array<string>): PodSecurityPolicySpecHelper;
    $defaultAllowPrivilegeEscalation(x: boolean): PodSecurityPolicySpecHelper;
    $forbiddenSysctls(x: Array<string>): PodSecurityPolicySpecHelper;
    fsGroup: FSGroupStrategyOptionsHelper;
    $fsGroup(x: FSGroupStrategyOptionsHelper): PodSecurityPolicySpecHelper;
    $hostIPC(x: boolean): PodSecurityPolicySpecHelper;
    $hostNetwork(x: boolean): PodSecurityPolicySpecHelper;
    $hostPID(x: boolean): PodSecurityPolicySpecHelper;
    $hostPorts(x: Array<HostPortRange>): PodSecurityPolicySpecHelper;
    $privileged(x: boolean): PodSecurityPolicySpecHelper;
    $readOnlyRootFilesystem(x: boolean): PodSecurityPolicySpecHelper;
    $requiredDropCapabilities(x: Array<string>): PodSecurityPolicySpecHelper;
    runAsGroup: RunAsGroupStrategyOptionsHelper;
    $runAsGroup(x: RunAsGroupStrategyOptionsHelper): PodSecurityPolicySpecHelper;
    runAsUser: RunAsUserStrategyOptionsHelper;
    $runAsUser(x: RunAsUserStrategyOptionsHelper): PodSecurityPolicySpecHelper;
    runtimeClass: RuntimeClassStrategyOptionsHelper;
    $runtimeClass(x: RuntimeClassStrategyOptionsHelper): PodSecurityPolicySpecHelper;
    seLinux: SELinuxStrategyOptionsHelper;
    $seLinux(x: SELinuxStrategyOptionsHelper): PodSecurityPolicySpecHelper;
    supplementalGroups: SupplementalGroupsStrategyOptionsHelper;
    $supplementalGroups(x: SupplementalGroupsStrategyOptionsHelper): PodSecurityPolicySpecHelper;
    $volumes(x: Array<string>): PodSecurityPolicySpecHelper;
}

/** PodSecurityPolicySpec defines the policy enforced. */
export class PodSecurityPolicySpecHelper extends Template implements PodSecurityPolicySpecHelper {
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
    $AllowPrivilegeEscalation(x: boolean) {
        this.allowPrivilegeEscalation = x; return this
    }

    _allowedCSIDrivers: Array<AllowedCSIDriver>;
    get allowedCSIDrivers(): Array<AllowedCSIDriver> {
        return this._allowedCSIDrivers
    }
    set allowedCSIDrivers(x: Array<AllowedCSIDriver>) {
        this._allowedCSIDrivers = this.set(this.allowedCSIDrivers, x)
    }
    $AllowedCSIDrivers(x: Array<AllowedCSIDriver>) {
        this.allowedCSIDrivers = x; return this
    }

    _allowedCapabilities: Array<string>;
    get allowedCapabilities(): Array<string> {
        return this._allowedCapabilities
    }
    set allowedCapabilities(x: Array<string>) {
        this._allowedCapabilities = this.set(this.allowedCapabilities, x)
    }
    $AllowedCapabilities(x: Array<string>) {
        this.allowedCapabilities = x; return this
    }

    _allowedFlexVolumes: Array<AllowedFlexVolume>;
    get allowedFlexVolumes(): Array<AllowedFlexVolume> {
        return this._allowedFlexVolumes
    }
    set allowedFlexVolumes(x: Array<AllowedFlexVolume>) {
        this._allowedFlexVolumes = this.set(this.allowedFlexVolumes, x)
    }
    $AllowedFlexVolumes(x: Array<AllowedFlexVolume>) {
        this.allowedFlexVolumes = x; return this
    }

    _allowedHostPaths: Array<AllowedHostPath>;
    get allowedHostPaths(): Array<AllowedHostPath> {
        return this._allowedHostPaths
    }
    set allowedHostPaths(x: Array<AllowedHostPath>) {
        this._allowedHostPaths = this.set(this.allowedHostPaths, x)
    }
    $AllowedHostPaths(x: Array<AllowedHostPath>) {
        this.allowedHostPaths = x; return this
    }

    _allowedProcMountTypes: Array<string>;
    get allowedProcMountTypes(): Array<string> {
        return this._allowedProcMountTypes
    }
    set allowedProcMountTypes(x: Array<string>) {
        this._allowedProcMountTypes = this.set(this.allowedProcMountTypes, x)
    }
    $AllowedProcMountTypes(x: Array<string>) {
        this.allowedProcMountTypes = x; return this
    }

    _allowedUnsafeSysctls: Array<string>;
    get allowedUnsafeSysctls(): Array<string> {
        return this._allowedUnsafeSysctls
    }
    set allowedUnsafeSysctls(x: Array<string>) {
        this._allowedUnsafeSysctls = this.set(this.allowedUnsafeSysctls, x)
    }
    $AllowedUnsafeSysctls(x: Array<string>) {
        this.allowedUnsafeSysctls = x; return this
    }

    _defaultAddCapabilities: Array<string>;
    get defaultAddCapabilities(): Array<string> {
        return this._defaultAddCapabilities
    }
    set defaultAddCapabilities(x: Array<string>) {
        this._defaultAddCapabilities = this.set(this.defaultAddCapabilities, x)
    }
    $DefaultAddCapabilities(x: Array<string>) {
        this.defaultAddCapabilities = x; return this
    }

    _defaultAllowPrivilegeEscalation: boolean;
    get defaultAllowPrivilegeEscalation(): boolean {
        return this._defaultAllowPrivilegeEscalation
    }
    set defaultAllowPrivilegeEscalation(x: boolean) {
        this._defaultAllowPrivilegeEscalation = x
    }
    $DefaultAllowPrivilegeEscalation(x: boolean) {
        this.defaultAllowPrivilegeEscalation = x; return this
    }

    _forbiddenSysctls: Array<string>;
    get forbiddenSysctls(): Array<string> {
        return this._forbiddenSysctls
    }
    set forbiddenSysctls(x: Array<string>) {
        this._forbiddenSysctls = this.set(this.forbiddenSysctls, x)
    }
    $ForbiddenSysctls(x: Array<string>) {
        this.forbiddenSysctls = x; return this
    }

    _fsGroup: FSGroupStrategyOptionsHelper;
    get fsGroup(): FSGroupStrategyOptionsHelper {
        return this._fsGroup
    }
    set fsGroup(x: FSGroupStrategyOptionsHelper) {
        this._fsGroup = x
    }
    $FsGroup(x: FSGroupStrategyOptionsHelper) {
        this.fsGroup = x; return this
    }

    _hostIPC: boolean;
    get hostIPC(): boolean {
        return this._hostIPC
    }
    set hostIPC(x: boolean) {
        this._hostIPC = x
    }
    $HostIPC(x: boolean) {
        this.hostIPC = x; return this
    }

    _hostNetwork: boolean;
    get hostNetwork(): boolean {
        return this._hostNetwork
    }
    set hostNetwork(x: boolean) {
        this._hostNetwork = x
    }
    $HostNetwork(x: boolean) {
        this.hostNetwork = x; return this
    }

    _hostPID: boolean;
    get hostPID(): boolean {
        return this._hostPID
    }
    set hostPID(x: boolean) {
        this._hostPID = x
    }
    $HostPID(x: boolean) {
        this.hostPID = x; return this
    }

    _hostPorts: Array<HostPortRange>;
    get hostPorts(): Array<HostPortRange> {
        return this._hostPorts
    }
    set hostPorts(x: Array<HostPortRange>) {
        this._hostPorts = this.set(this.hostPorts, x)
    }
    $HostPorts(x: Array<HostPortRange>) {
        this.hostPorts = x; return this
    }

    _privileged: boolean;
    get privileged(): boolean {
        return this._privileged
    }
    set privileged(x: boolean) {
        this._privileged = x
    }
    $Privileged(x: boolean) {
        this.privileged = x; return this
    }

    _readOnlyRootFilesystem: boolean;
    get readOnlyRootFilesystem(): boolean {
        return this._readOnlyRootFilesystem
    }
    set readOnlyRootFilesystem(x: boolean) {
        this._readOnlyRootFilesystem = x
    }
    $ReadOnlyRootFilesystem(x: boolean) {
        this.readOnlyRootFilesystem = x; return this
    }

    _requiredDropCapabilities: Array<string>;
    get requiredDropCapabilities(): Array<string> {
        return this._requiredDropCapabilities
    }
    set requiredDropCapabilities(x: Array<string>) {
        this._requiredDropCapabilities = this.set(this.requiredDropCapabilities, x)
    }
    $RequiredDropCapabilities(x: Array<string>) {
        this.requiredDropCapabilities = x; return this
    }

    _runAsGroup: RunAsGroupStrategyOptionsHelper;
    get runAsGroup(): RunAsGroupStrategyOptionsHelper {
        return this._runAsGroup
    }
    set runAsGroup(x: RunAsGroupStrategyOptionsHelper) {
        this._runAsGroup = x
    }
    $RunAsGroup(x: RunAsGroupStrategyOptionsHelper) {
        this.runAsGroup = x; return this
    }

    _runAsUser: RunAsUserStrategyOptionsHelper;
    get runAsUser(): RunAsUserStrategyOptionsHelper {
        return this._runAsUser
    }
    set runAsUser(x: RunAsUserStrategyOptionsHelper) {
        this._runAsUser = x
    }
    $RunAsUser(x: RunAsUserStrategyOptionsHelper) {
        this.runAsUser = x; return this
    }

    _runtimeClass: RuntimeClassStrategyOptionsHelper;
    get runtimeClass(): RuntimeClassStrategyOptionsHelper {
        return this._runtimeClass
    }
    set runtimeClass(x: RuntimeClassStrategyOptionsHelper) {
        this._runtimeClass = x
    }
    $RuntimeClass(x: RuntimeClassStrategyOptionsHelper) {
        this.runtimeClass = x; return this
    }

    _seLinux: SELinuxStrategyOptionsHelper;
    get seLinux(): SELinuxStrategyOptionsHelper {
        return this._seLinux
    }
    set seLinux(x: SELinuxStrategyOptionsHelper) {
        this._seLinux = x
    }
    $SeLinux(x: SELinuxStrategyOptionsHelper) {
        this.seLinux = x; return this
    }

    _supplementalGroups: SupplementalGroupsStrategyOptionsHelper;
    get supplementalGroups(): SupplementalGroupsStrategyOptionsHelper {
        return this._supplementalGroups
    }
    set supplementalGroups(x: SupplementalGroupsStrategyOptionsHelper) {
        this._supplementalGroups = x
    }
    $SupplementalGroups(x: SupplementalGroupsStrategyOptionsHelper) {
        this.supplementalGroups = x; return this
    }

    _volumes: Array<string>;
    get volumes(): Array<string> {
        return this._volumes
    }
    set volumes(x: Array<string>) {
        this._volumes = this.set(this.volumes, x)
    }
    $Volumes(x: Array<string>) {
        this.volumes = x; return this
    }
}

export interface RunAsGroupStrategyOptionsHelper extends RunAsGroupStrategyOptions {
    $ranges(x: Array<IDRange>): RunAsGroupStrategyOptionsHelper;
    $rule(x: string): RunAsGroupStrategyOptionsHelper;
}

/** RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy. */
export class RunAsGroupStrategyOptionsHelper extends Template implements RunAsGroupStrategyOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ranges: Array<IDRange>;
    get ranges(): Array<IDRange> {
        return this._ranges
    }
    set ranges(x: Array<IDRange>) {
        this._ranges = this.set(this.ranges, x)
    }
    $Ranges(x: Array<IDRange>) {
        this.ranges = x; return this
    }

    _rule: string;
    get rule(): string {
        return this._rule
    }
    set rule(x: string) {
        this._rule = x
    }
    $Rule(x: string) {
        this.rule = x; return this
    }
}

export interface RunAsUserStrategyOptionsHelper extends RunAsUserStrategyOptions {
    $ranges(x: Array<IDRange>): RunAsUserStrategyOptionsHelper;
    $rule(x: string): RunAsUserStrategyOptionsHelper;
}

/** RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. */
export class RunAsUserStrategyOptionsHelper extends Template implements RunAsUserStrategyOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ranges: Array<IDRange>;
    get ranges(): Array<IDRange> {
        return this._ranges
    }
    set ranges(x: Array<IDRange>) {
        this._ranges = this.set(this.ranges, x)
    }
    $Ranges(x: Array<IDRange>) {
        this.ranges = x; return this
    }

    _rule: string;
    get rule(): string {
        return this._rule
    }
    set rule(x: string) {
        this._rule = x
    }
    $Rule(x: string) {
        this.rule = x; return this
    }
}

export interface RuntimeClassStrategyOptionsHelper extends RuntimeClassStrategyOptions {
    $allowedRuntimeClassNames(x: Array<string>): RuntimeClassStrategyOptionsHelper;
    $defaultRuntimeClassName(x: string): RuntimeClassStrategyOptionsHelper;
}

/** RuntimeClassStrategyOptions define the strategy that will dictate the allowable RuntimeClasses for a pod. */
export class RuntimeClassStrategyOptionsHelper extends Template implements RuntimeClassStrategyOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _allowedRuntimeClassNames: Array<string>;
    get allowedRuntimeClassNames(): Array<string> {
        return this._allowedRuntimeClassNames
    }
    set allowedRuntimeClassNames(x: Array<string>) {
        this._allowedRuntimeClassNames = this.set(this.allowedRuntimeClassNames, x)
    }
    $AllowedRuntimeClassNames(x: Array<string>) {
        this.allowedRuntimeClassNames = x; return this
    }

    _defaultRuntimeClassName: string;
    get defaultRuntimeClassName(): string {
        return this._defaultRuntimeClassName
    }
    set defaultRuntimeClassName(x: string) {
        this._defaultRuntimeClassName = x
    }
    $DefaultRuntimeClassName(x: string) {
        this.defaultRuntimeClassName = x; return this
    }
}

export interface SELinuxStrategyOptionsHelper extends SELinuxStrategyOptions {
    $rule(x: string): SELinuxStrategyOptionsHelper;
    seLinuxOptions: SELinuxOptionsHelper;
    $seLinuxOptions(x: SELinuxOptionsHelper): SELinuxStrategyOptionsHelper;
}

/** SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. */
export class SELinuxStrategyOptionsHelper extends Template implements SELinuxStrategyOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _rule: string;
    get rule(): string {
        return this._rule
    }
    set rule(x: string) {
        this._rule = x
    }
    $Rule(x: string) {
        this.rule = x; return this
    }

    _seLinuxOptions: SELinuxOptionsHelper;
    get seLinuxOptions(): SELinuxOptionsHelper {
        return this._seLinuxOptions
    }
    set seLinuxOptions(x: SELinuxOptionsHelper) {
        this._seLinuxOptions = x
    }
    $SeLinuxOptions(x: SELinuxOptionsHelper) {
        this.seLinuxOptions = x; return this
    }
}

export interface SupplementalGroupsStrategyOptionsHelper extends SupplementalGroupsStrategyOptions {
    $ranges(x: Array<IDRange>): SupplementalGroupsStrategyOptionsHelper;
    $rule(x: string): SupplementalGroupsStrategyOptionsHelper;
}

/** SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. */
export class SupplementalGroupsStrategyOptionsHelper extends Template implements SupplementalGroupsStrategyOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _ranges: Array<IDRange>;
    get ranges(): Array<IDRange> {
        return this._ranges
    }
    set ranges(x: Array<IDRange>) {
        this._ranges = this.set(this.ranges, x)
    }
    $Ranges(x: Array<IDRange>) {
        this.ranges = x; return this
    }

    _rule: string;
    get rule(): string {
        return this._rule
    }
    set rule(x: string) {
        this._rule = x
    }
    $Rule(x: string) {
        this.rule = x; return this
    }
}
