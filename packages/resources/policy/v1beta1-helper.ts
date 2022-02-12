import { ResourceTemplate } from "../resourceTemplate";
import { Condition, DeleteOptions, LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { AllowedCSIDriver, AllowedFlexVolume, AllowedHostPath, FSGroupStrategyOptions, HostPortRange, IDRange, PodDisruptionBudget, PodDisruptionBudgetSpec, PodDisruptionBudgetStatus, PodSecurityPolicy, PodSecurityPolicySpec, RunAsGroupStrategyOptions, RunAsUserStrategyOptions, RuntimeClassStrategyOptions, SELinuxStrategyOptions, SupplementalGroupsStrategyOptions } from "./v1beta1";
import { SELinuxOptions } from "../core/v1";

/** AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used. */
export class AllowedCSIDriverHelper extends ResourceTemplate {
    static kind = 'AllowedCSIDriver';
    static apiVersion = 'policy/v1beta1';

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = AllowedCSIDriverHelper.kind
        this._template.apiVersion = AllowedCSIDriverHelper.apiVersion
    }
}

/** AllowedFlexVolume represents a single Flexvolume that is allowed to be used. */
export class AllowedFlexVolumeHelper extends ResourceTemplate {
    static kind = 'AllowedFlexVolume';
    static apiVersion = 'policy/v1beta1';

    driver(driver: string): AllowedFlexVolumeHelper {
        this._template.driver = driver
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = AllowedFlexVolumeHelper.kind
        this._template.apiVersion = AllowedFlexVolumeHelper.apiVersion
    }
}

/** AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined. */
export class AllowedHostPathHelper extends ResourceTemplate {
    static kind = 'AllowedHostPath';
    static apiVersion = 'policy/v1beta1';

    pathPrefix(pathPrefix: string): AllowedHostPathHelper {
        this._template.pathPrefix = pathPrefix
        return this
    }

    readOnly(readOnly: boolean): AllowedHostPathHelper {
        this._template.readOnly = readOnly
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = AllowedHostPathHelper.kind
        this._template.apiVersion = AllowedHostPathHelper.apiVersion
    }
}

/** Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions. */
export class EvictionHelper extends ResourceTemplate {
    static kind = 'Eviction';
    static apiVersion = 'policy/v1beta1';

    deleteOptions(deleteOptions: DeleteOptions): EvictionHelper {
        if (!this._template.deleteOptions) this._template.deleteOptions = []
        this._template.deleteOptions = {
            ...this._template.deleteOptions,
            ...deleteOptions
        }
        return this
    }

    metadata(metadata: ObjectMeta): EvictionHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = EvictionHelper.kind
        this._template.apiVersion = EvictionHelper.apiVersion
    }
}

/** FSGroupStrategyOptions defines the strategy type and options used to create the strategy. */
export class FSGroupStrategyOptionsHelper extends ResourceTemplate {
    static kind = 'FSGroupStrategyOptions';
    static apiVersion = 'policy/v1beta1';

    ranges(ranges: Array<IDRange>): FSGroupStrategyOptionsHelper {
        if (!Array.isArray(ranges)) { ranges = [ranges] }
        if (!this._template.ranges) this._template.ranges = ranges
        this._template.ranges = [...this._template.ranges, ...ranges]
        return this
    }

    rule(rule: string): FSGroupStrategyOptionsHelper {
        this._template.rule = rule
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = FSGroupStrategyOptionsHelper.kind
        this._template.apiVersion = FSGroupStrategyOptionsHelper.apiVersion
    }
}

/** HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. */
export class HostPortRangeHelper extends ResourceTemplate {
    static kind = 'HostPortRange';
    static apiVersion = 'policy/v1beta1';

    max(max: number): HostPortRangeHelper {
        this._template.max = max
        return this
    }

    min(min: number): HostPortRangeHelper {
        this._template.min = min
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = HostPortRangeHelper.kind
        this._template.apiVersion = HostPortRangeHelper.apiVersion
    }
}

/** IDRange provides a min/max of an allowed range of IDs. */
export class IDRangeHelper extends ResourceTemplate {
    static kind = 'IDRange';
    static apiVersion = 'policy/v1beta1';

    max(max: number): IDRangeHelper {
        this._template.max = max
        return this
    }

    min(min: number): IDRangeHelper {
        this._template.min = min
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = IDRangeHelper.kind
        this._template.apiVersion = IDRangeHelper.apiVersion
    }
}

/** PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods */
export class PodDisruptionBudgetHelper extends ResourceTemplate {
    static kind = 'PodDisruptionBudget';
    static apiVersion = 'policy/v1beta1';

    metadata(metadata: ObjectMeta): PodDisruptionBudgetHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: PodDisruptionBudgetSpec): PodDisruptionBudgetHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: PodDisruptionBudgetStatus): PodDisruptionBudgetHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodDisruptionBudgetHelper.kind
        this._template.apiVersion = PodDisruptionBudgetHelper.apiVersion
    }
}

/** PodDisruptionBudgetList is a collection of PodDisruptionBudgets. */
export class PodDisruptionBudgetListHelper extends ResourceTemplate {
    static kind = 'PodDisruptionBudgetList';
    static apiVersion = 'policy/v1beta1';

    items(items: Array<PodDisruptionBudget>): PodDisruptionBudgetListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): PodDisruptionBudgetListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodDisruptionBudgetListHelper.kind
        this._template.apiVersion = PodDisruptionBudgetListHelper.apiVersion
    }
}

/** PodDisruptionBudgetSpec is a description of a PodDisruptionBudget. */
export class PodDisruptionBudgetSpecHelper extends ResourceTemplate {
    static kind = 'PodDisruptionBudgetSpec';
    static apiVersion = 'policy/v1beta1';

    maxUnavailable(maxUnavailable: number | string): PodDisruptionBudgetSpecHelper {
        this._template.maxUnavailable = maxUnavailable
        return this
    }

    minAvailable(minAvailable: number | string): PodDisruptionBudgetSpecHelper {
        this._template.minAvailable = minAvailable
        return this
    }

    selector(selector: LabelSelector): PodDisruptionBudgetSpecHelper {
        if (!this._template.selector) this._template.selector = []
        this._template.selector = {
            ...this._template.selector,
            ...selector
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodDisruptionBudgetSpecHelper.kind
        this._template.apiVersion = PodDisruptionBudgetSpecHelper.apiVersion
    }
}

/** PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system. */
export class PodDisruptionBudgetStatusHelper extends ResourceTemplate {
    static kind = 'PodDisruptionBudgetStatus';
    static apiVersion = 'policy/v1beta1';

    conditions(conditions: Array<Condition>): PodDisruptionBudgetStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    currentHealthy(currentHealthy: number): PodDisruptionBudgetStatusHelper {
        this._template.currentHealthy = currentHealthy
        return this
    }

    desiredHealthy(desiredHealthy: number): PodDisruptionBudgetStatusHelper {
        this._template.desiredHealthy = desiredHealthy
        return this
    }

    disruptedPods(disruptedPods: {[name: string]: Time}): PodDisruptionBudgetStatusHelper {
        if (!this._template.disruptedPods) this._template.disruptedPods = []
        this._template.disruptedPods = {
            ...this._template.disruptedPods,
            ...disruptedPods
        }
        return this
    }

    disruptionsAllowed(disruptionsAllowed: number): PodDisruptionBudgetStatusHelper {
        this._template.disruptionsAllowed = disruptionsAllowed
        return this
    }

    expectedPods(expectedPods: number): PodDisruptionBudgetStatusHelper {
        this._template.expectedPods = expectedPods
        return this
    }

    observedGeneration(observedGeneration: number): PodDisruptionBudgetStatusHelper {
        this._template.observedGeneration = observedGeneration
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodDisruptionBudgetStatusHelper.kind
        this._template.apiVersion = PodDisruptionBudgetStatusHelper.apiVersion
    }
}

/** PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated in 1.21. */
export class PodSecurityPolicyHelper extends ResourceTemplate {
    static kind = 'PodSecurityPolicy';
    static apiVersion = 'policy/v1beta1';

    metadata(metadata: ObjectMeta): PodSecurityPolicyHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: PodSecurityPolicySpec): PodSecurityPolicyHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodSecurityPolicyHelper.kind
        this._template.apiVersion = PodSecurityPolicyHelper.apiVersion
    }
}

/** PodSecurityPolicyList is a list of PodSecurityPolicy objects. */
export class PodSecurityPolicyListHelper extends ResourceTemplate {
    static kind = 'PodSecurityPolicyList';
    static apiVersion = 'policy/v1beta1';

    items(items: Array<PodSecurityPolicy>): PodSecurityPolicyListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): PodSecurityPolicyListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodSecurityPolicyListHelper.kind
        this._template.apiVersion = PodSecurityPolicyListHelper.apiVersion
    }
}

/** PodSecurityPolicySpec defines the policy enforced. */
export class PodSecurityPolicySpecHelper extends ResourceTemplate {
    static kind = 'PodSecurityPolicySpec';
    static apiVersion = 'policy/v1beta1';

    allowPrivilegeEscalation(allowPrivilegeEscalation: boolean): PodSecurityPolicySpecHelper {
        this._template.allowPrivilegeEscalation = allowPrivilegeEscalation
        return this
    }

    allowedCSIDrivers(allowedCSIDrivers: Array<AllowedCSIDriver>): PodSecurityPolicySpecHelper {
        if (!Array.isArray(allowedCSIDrivers)) { allowedCSIDrivers = [allowedCSIDrivers] }
        if (!this._template.allowedCSIDrivers) this._template.allowedCSIDrivers = allowedCSIDrivers
        this._template.allowedCSIDrivers = [...this._template.allowedCSIDrivers, ...allowedCSIDrivers]
        return this
    }

    allowedCapabilities(allowedCapabilities: Array<string>): PodSecurityPolicySpecHelper {
        if (!Array.isArray(allowedCapabilities)) { allowedCapabilities = [allowedCapabilities] }
        if (!this._template.allowedCapabilities) this._template.allowedCapabilities = allowedCapabilities
        this._template.allowedCapabilities = [...this._template.allowedCapabilities, ...allowedCapabilities]
        return this
    }

    allowedFlexVolumes(allowedFlexVolumes: Array<AllowedFlexVolume>): PodSecurityPolicySpecHelper {
        if (!Array.isArray(allowedFlexVolumes)) { allowedFlexVolumes = [allowedFlexVolumes] }
        if (!this._template.allowedFlexVolumes) this._template.allowedFlexVolumes = allowedFlexVolumes
        this._template.allowedFlexVolumes = [...this._template.allowedFlexVolumes, ...allowedFlexVolumes]
        return this
    }

    allowedHostPaths(allowedHostPaths: Array<AllowedHostPath>): PodSecurityPolicySpecHelper {
        if (!Array.isArray(allowedHostPaths)) { allowedHostPaths = [allowedHostPaths] }
        if (!this._template.allowedHostPaths) this._template.allowedHostPaths = allowedHostPaths
        this._template.allowedHostPaths = [...this._template.allowedHostPaths, ...allowedHostPaths]
        return this
    }

    allowedProcMountTypes(allowedProcMountTypes: Array<string>): PodSecurityPolicySpecHelper {
        if (!Array.isArray(allowedProcMountTypes)) { allowedProcMountTypes = [allowedProcMountTypes] }
        if (!this._template.allowedProcMountTypes) this._template.allowedProcMountTypes = allowedProcMountTypes
        this._template.allowedProcMountTypes = [...this._template.allowedProcMountTypes, ...allowedProcMountTypes]
        return this
    }

    allowedUnsafeSysctls(allowedUnsafeSysctls: Array<string>): PodSecurityPolicySpecHelper {
        if (!Array.isArray(allowedUnsafeSysctls)) { allowedUnsafeSysctls = [allowedUnsafeSysctls] }
        if (!this._template.allowedUnsafeSysctls) this._template.allowedUnsafeSysctls = allowedUnsafeSysctls
        this._template.allowedUnsafeSysctls = [...this._template.allowedUnsafeSysctls, ...allowedUnsafeSysctls]
        return this
    }

    defaultAddCapabilities(defaultAddCapabilities: Array<string>): PodSecurityPolicySpecHelper {
        if (!Array.isArray(defaultAddCapabilities)) { defaultAddCapabilities = [defaultAddCapabilities] }
        if (!this._template.defaultAddCapabilities) this._template.defaultAddCapabilities = defaultAddCapabilities
        this._template.defaultAddCapabilities = [...this._template.defaultAddCapabilities, ...defaultAddCapabilities]
        return this
    }

    defaultAllowPrivilegeEscalation(defaultAllowPrivilegeEscalation: boolean): PodSecurityPolicySpecHelper {
        this._template.defaultAllowPrivilegeEscalation = defaultAllowPrivilegeEscalation
        return this
    }

    forbiddenSysctls(forbiddenSysctls: Array<string>): PodSecurityPolicySpecHelper {
        if (!Array.isArray(forbiddenSysctls)) { forbiddenSysctls = [forbiddenSysctls] }
        if (!this._template.forbiddenSysctls) this._template.forbiddenSysctls = forbiddenSysctls
        this._template.forbiddenSysctls = [...this._template.forbiddenSysctls, ...forbiddenSysctls]
        return this
    }

    fsGroup(fsGroup: FSGroupStrategyOptions): PodSecurityPolicySpecHelper {
        if (!this._template.fsGroup) this._template.fsGroup = []
        this._template.fsGroup = {
            ...this._template.fsGroup,
            ...fsGroup
        }
        return this
    }

    hostIPC(hostIPC: boolean): PodSecurityPolicySpecHelper {
        this._template.hostIPC = hostIPC
        return this
    }

    hostNetwork(hostNetwork: boolean): PodSecurityPolicySpecHelper {
        this._template.hostNetwork = hostNetwork
        return this
    }

    hostPID(hostPID: boolean): PodSecurityPolicySpecHelper {
        this._template.hostPID = hostPID
        return this
    }

    hostPorts(hostPorts: Array<HostPortRange>): PodSecurityPolicySpecHelper {
        if (!Array.isArray(hostPorts)) { hostPorts = [hostPorts] }
        if (!this._template.hostPorts) this._template.hostPorts = hostPorts
        this._template.hostPorts = [...this._template.hostPorts, ...hostPorts]
        return this
    }

    privileged(privileged: boolean): PodSecurityPolicySpecHelper {
        this._template.privileged = privileged
        return this
    }

    readOnlyRootFilesystem(readOnlyRootFilesystem: boolean): PodSecurityPolicySpecHelper {
        this._template.readOnlyRootFilesystem = readOnlyRootFilesystem
        return this
    }

    requiredDropCapabilities(requiredDropCapabilities: Array<string>): PodSecurityPolicySpecHelper {
        if (!Array.isArray(requiredDropCapabilities)) { requiredDropCapabilities = [requiredDropCapabilities] }
        if (!this._template.requiredDropCapabilities) this._template.requiredDropCapabilities = requiredDropCapabilities
        this._template.requiredDropCapabilities = [...this._template.requiredDropCapabilities, ...requiredDropCapabilities]
        return this
    }

    runAsGroup(runAsGroup: RunAsGroupStrategyOptions): PodSecurityPolicySpecHelper {
        if (!this._template.runAsGroup) this._template.runAsGroup = []
        this._template.runAsGroup = {
            ...this._template.runAsGroup,
            ...runAsGroup
        }
        return this
    }

    runAsUser(runAsUser: RunAsUserStrategyOptions): PodSecurityPolicySpecHelper {
        if (!this._template.runAsUser) this._template.runAsUser = []
        this._template.runAsUser = {
            ...this._template.runAsUser,
            ...runAsUser
        }
        return this
    }

    runtimeClass(runtimeClass: RuntimeClassStrategyOptions): PodSecurityPolicySpecHelper {
        if (!this._template.runtimeClass) this._template.runtimeClass = []
        this._template.runtimeClass = {
            ...this._template.runtimeClass,
            ...runtimeClass
        }
        return this
    }

    seLinux(seLinux: SELinuxStrategyOptions): PodSecurityPolicySpecHelper {
        if (!this._template.seLinux) this._template.seLinux = []
        this._template.seLinux = {
            ...this._template.seLinux,
            ...seLinux
        }
        return this
    }

    supplementalGroups(supplementalGroups: SupplementalGroupsStrategyOptions): PodSecurityPolicySpecHelper {
        if (!this._template.supplementalGroups) this._template.supplementalGroups = []
        this._template.supplementalGroups = {
            ...this._template.supplementalGroups,
            ...supplementalGroups
        }
        return this
    }

    volumes(volumes: Array<string>): PodSecurityPolicySpecHelper {
        if (!Array.isArray(volumes)) { volumes = [volumes] }
        if (!this._template.volumes) this._template.volumes = volumes
        this._template.volumes = [...this._template.volumes, ...volumes]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PodSecurityPolicySpecHelper.kind
        this._template.apiVersion = PodSecurityPolicySpecHelper.apiVersion
    }
}

/** RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy. */
export class RunAsGroupStrategyOptionsHelper extends ResourceTemplate {
    static kind = 'RunAsGroupStrategyOptions';
    static apiVersion = 'policy/v1beta1';

    ranges(ranges: Array<IDRange>): RunAsGroupStrategyOptionsHelper {
        if (!Array.isArray(ranges)) { ranges = [ranges] }
        if (!this._template.ranges) this._template.ranges = ranges
        this._template.ranges = [...this._template.ranges, ...ranges]
        return this
    }

    rule(rule: string): RunAsGroupStrategyOptionsHelper {
        this._template.rule = rule
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RunAsGroupStrategyOptionsHelper.kind
        this._template.apiVersion = RunAsGroupStrategyOptionsHelper.apiVersion
    }
}

/** RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. */
export class RunAsUserStrategyOptionsHelper extends ResourceTemplate {
    static kind = 'RunAsUserStrategyOptions';
    static apiVersion = 'policy/v1beta1';

    ranges(ranges: Array<IDRange>): RunAsUserStrategyOptionsHelper {
        if (!Array.isArray(ranges)) { ranges = [ranges] }
        if (!this._template.ranges) this._template.ranges = ranges
        this._template.ranges = [...this._template.ranges, ...ranges]
        return this
    }

    rule(rule: string): RunAsUserStrategyOptionsHelper {
        this._template.rule = rule
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RunAsUserStrategyOptionsHelper.kind
        this._template.apiVersion = RunAsUserStrategyOptionsHelper.apiVersion
    }
}

/** RuntimeClassStrategyOptions define the strategy that will dictate the allowable RuntimeClasses for a pod. */
export class RuntimeClassStrategyOptionsHelper extends ResourceTemplate {
    static kind = 'RuntimeClassStrategyOptions';
    static apiVersion = 'policy/v1beta1';

    allowedRuntimeClassNames(allowedRuntimeClassNames: Array<string>): RuntimeClassStrategyOptionsHelper {
        if (!Array.isArray(allowedRuntimeClassNames)) { allowedRuntimeClassNames = [allowedRuntimeClassNames] }
        if (!this._template.allowedRuntimeClassNames) this._template.allowedRuntimeClassNames = allowedRuntimeClassNames
        this._template.allowedRuntimeClassNames = [...this._template.allowedRuntimeClassNames, ...allowedRuntimeClassNames]
        return this
    }

    defaultRuntimeClassName(defaultRuntimeClassName: string): RuntimeClassStrategyOptionsHelper {
        this._template.defaultRuntimeClassName = defaultRuntimeClassName
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RuntimeClassStrategyOptionsHelper.kind
        this._template.apiVersion = RuntimeClassStrategyOptionsHelper.apiVersion
    }
}

/** SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. */
export class SELinuxStrategyOptionsHelper extends ResourceTemplate {
    static kind = 'SELinuxStrategyOptions';
    static apiVersion = 'policy/v1beta1';

    rule(rule: string): SELinuxStrategyOptionsHelper {
        this._template.rule = rule
        return this
    }

    seLinuxOptions(seLinuxOptions: SELinuxOptions): SELinuxStrategyOptionsHelper {
        if (!this._template.seLinuxOptions) this._template.seLinuxOptions = []
        this._template.seLinuxOptions = {
            ...this._template.seLinuxOptions,
            ...seLinuxOptions
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SELinuxStrategyOptionsHelper.kind
        this._template.apiVersion = SELinuxStrategyOptionsHelper.apiVersion
    }
}

/** SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. */
export class SupplementalGroupsStrategyOptionsHelper extends ResourceTemplate {
    static kind = 'SupplementalGroupsStrategyOptions';
    static apiVersion = 'policy/v1beta1';

    ranges(ranges: Array<IDRange>): SupplementalGroupsStrategyOptionsHelper {
        if (!Array.isArray(ranges)) { ranges = [ranges] }
        if (!this._template.ranges) this._template.ranges = ranges
        this._template.ranges = [...this._template.ranges, ...ranges]
        return this
    }

    rule(rule: string): SupplementalGroupsStrategyOptionsHelper {
        this._template.rule = rule
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = SupplementalGroupsStrategyOptionsHelper.kind
        this._template.apiVersion = SupplementalGroupsStrategyOptionsHelper.apiVersion
    }
}
