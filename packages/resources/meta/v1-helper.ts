import { ResourceTemplate } from "../resourceTemplate";
import { APIGroup, APIResource, FieldsV1, GroupVersionForDiscovery, LabelSelectorRequirement, ListMeta, ManagedFieldsEntry, OwnerReference, Preconditions, ServerAddressByClientCIDR, StatusCause, StatusDetails, Time } from "./v1";
import { RawExtension } from "../runtime";

/** APIGroup contains the name, the supported versions, and the preferred version of a group. */
export class APIGroupHelper extends ResourceTemplate {
    static kind = 'APIGroup';
    static apiVersion = 'meta/v1';

    preferredVersion(preferredVersion: GroupVersionForDiscovery): APIGroupHelper {
        if (!this._template.preferredVersion) this._template.preferredVersion = []
        this._template.preferredVersion = {
            ...this._template.preferredVersion,
            ...preferredVersion
        }
        return this
    }

    serverAddressByClientCIDRs(serverAddressByClientCIDRs: Array<ServerAddressByClientCIDR>): APIGroupHelper {
        if (!Array.isArray(serverAddressByClientCIDRs)) { serverAddressByClientCIDRs = [serverAddressByClientCIDRs] }
        if (!this._template.serverAddressByClientCIDRs) this._template.serverAddressByClientCIDRs = serverAddressByClientCIDRs
        this._template.serverAddressByClientCIDRs = [...this._template.serverAddressByClientCIDRs, ...serverAddressByClientCIDRs]
        return this
    }

    versions(versions: Array<GroupVersionForDiscovery>): APIGroupHelper {
        if (!Array.isArray(versions)) { versions = [versions] }
        if (!this._template.versions) this._template.versions = versions
        this._template.versions = [...this._template.versions, ...versions]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = APIGroupHelper.kind
        this._template.apiVersion = APIGroupHelper.apiVersion
    }
}

/** APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis. */
export class APIGroupListHelper extends ResourceTemplate {
    static kind = 'APIGroupList';
    static apiVersion = 'meta/v1';

    groups(groups: Array<APIGroup>): APIGroupListHelper {
        if (!Array.isArray(groups)) { groups = [groups] }
        if (!this._template.groups) this._template.groups = groups
        this._template.groups = [...this._template.groups, ...groups]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = APIGroupListHelper.kind
        this._template.apiVersion = APIGroupListHelper.apiVersion
    }
}

/** APIResource specifies the name of a resource and whether it is namespaced. */
export class APIResourceHelper extends ResourceTemplate {
    static kind = 'APIResource';
    static apiVersion = 'meta/v1';

    categories(categories: Array<string>): APIResourceHelper {
        if (!Array.isArray(categories)) { categories = [categories] }
        if (!this._template.categories) this._template.categories = categories
        this._template.categories = [...this._template.categories, ...categories]
        return this
    }

    group(group: string): APIResourceHelper {
        this._template.group = group
        return this
    }

    namespaced(namespaced: boolean): APIResourceHelper {
        this._template.namespaced = namespaced
        return this
    }

    shortNames(shortNames: Array<string>): APIResourceHelper {
        if (!Array.isArray(shortNames)) { shortNames = [shortNames] }
        if (!this._template.shortNames) this._template.shortNames = shortNames
        this._template.shortNames = [...this._template.shortNames, ...shortNames]
        return this
    }

    singularName(singularName: string): APIResourceHelper {
        this._template.singularName = singularName
        return this
    }

    storageVersionHash(storageVersionHash: string): APIResourceHelper {
        this._template.storageVersionHash = storageVersionHash
        return this
    }

    verbs(verbs: Array<string>): APIResourceHelper {
        if (!Array.isArray(verbs)) { verbs = [verbs] }
        if (!this._template.verbs) this._template.verbs = verbs
        this._template.verbs = [...this._template.verbs, ...verbs]
        return this
    }

    version(version: string): APIResourceHelper {
        this._template.version = version
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = APIResourceHelper.kind
        this._template.apiVersion = APIResourceHelper.apiVersion
    }
}

/** APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced. */
export class APIResourceListHelper extends ResourceTemplate {
    static kind = 'APIResourceList';
    static apiVersion = 'meta/v1';

    groupVersion(groupVersion: string): APIResourceListHelper {
        this._template.groupVersion = groupVersion
        return this
    }

    resources(resources: Array<APIResource>): APIResourceListHelper {
        if (!Array.isArray(resources)) { resources = [resources] }
        if (!this._template.resources) this._template.resources = resources
        this._template.resources = [...this._template.resources, ...resources]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = APIResourceListHelper.kind
        this._template.apiVersion = APIResourceListHelper.apiVersion
    }
}

/** APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API. */
export class APIVersionsHelper extends ResourceTemplate {
    static kind = 'APIVersions';
    static apiVersion = 'meta/v1';

    serverAddressByClientCIDRs(serverAddressByClientCIDRs: Array<ServerAddressByClientCIDR>): APIVersionsHelper {
        if (!Array.isArray(serverAddressByClientCIDRs)) { serverAddressByClientCIDRs = [serverAddressByClientCIDRs] }
        if (!this._template.serverAddressByClientCIDRs) this._template.serverAddressByClientCIDRs = serverAddressByClientCIDRs
        this._template.serverAddressByClientCIDRs = [...this._template.serverAddressByClientCIDRs, ...serverAddressByClientCIDRs]
        return this
    }

    versions(versions: Array<string>): APIVersionsHelper {
        if (!Array.isArray(versions)) { versions = [versions] }
        if (!this._template.versions) this._template.versions = versions
        this._template.versions = [...this._template.versions, ...versions]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = APIVersionsHelper.kind
        this._template.apiVersion = APIVersionsHelper.apiVersion
    }
}

/** Condition contains details for one aspect of the current state of this API Resource. */
export class ConditionHelper extends ResourceTemplate {
    static kind = 'Condition';
    static apiVersion = 'meta/v1';

    lastTransitionTime(lastTransitionTime: Time): ConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    message(message: string): ConditionHelper {
        this._template.message = message
        return this
    }

    observedGeneration(observedGeneration: number): ConditionHelper {
        this._template.observedGeneration = observedGeneration
        return this
    }

    reason(reason: string): ConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): ConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): ConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ConditionHelper.kind
        this._template.apiVersion = ConditionHelper.apiVersion
    }
}

/** DeleteOptions may be provided when deleting an API object. */
export class DeleteOptionsHelper extends ResourceTemplate {
    static kind = 'DeleteOptions';
    static apiVersion = 'meta/v1';

    dryRun(dryRun: Array<string>): DeleteOptionsHelper {
        if (!Array.isArray(dryRun)) { dryRun = [dryRun] }
        if (!this._template.dryRun) this._template.dryRun = dryRun
        this._template.dryRun = [...this._template.dryRun, ...dryRun]
        return this
    }

    gracePeriodSeconds(gracePeriodSeconds: number): DeleteOptionsHelper {
        this._template.gracePeriodSeconds = gracePeriodSeconds
        return this
    }

    orphanDependents(orphanDependents: boolean): DeleteOptionsHelper {
        this._template.orphanDependents = orphanDependents
        return this
    }

    preconditions(preconditions: Preconditions): DeleteOptionsHelper {
        if (!this._template.preconditions) this._template.preconditions = []
        this._template.preconditions = {
            ...this._template.preconditions,
            ...preconditions
        }
        return this
    }

    propagationPolicy(propagationPolicy: string): DeleteOptionsHelper {
        this._template.propagationPolicy = propagationPolicy
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = DeleteOptionsHelper.kind
        this._template.apiVersion = DeleteOptionsHelper.apiVersion
    }
}

/**
 * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
 *
 * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
 *
 * The exact format is defined in sigs.k8s.io/structured-merge-diff
 */
export class FieldsV1Helper extends ResourceTemplate {
    static kind = 'FieldsV1';
    static apiVersion = 'meta/v1';

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = FieldsV1Helper.kind
        this._template.apiVersion = FieldsV1Helper.apiVersion
    }
}

/** GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility. */
export class GroupVersionForDiscoveryHelper extends ResourceTemplate {
    static kind = 'GroupVersionForDiscovery';
    static apiVersion = 'meta/v1';

    groupVersion(groupVersion: string): GroupVersionForDiscoveryHelper {
        this._template.groupVersion = groupVersion
        return this
    }

    version(version: string): GroupVersionForDiscoveryHelper {
        this._template.version = version
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = GroupVersionForDiscoveryHelper.kind
        this._template.apiVersion = GroupVersionForDiscoveryHelper.apiVersion
    }
}

/** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
export class LabelSelectorHelper extends ResourceTemplate {
    static kind = 'LabelSelector';
    static apiVersion = 'meta/v1';

    matchExpressions(matchExpressions: Array<LabelSelectorRequirement>): LabelSelectorHelper {
        if (!Array.isArray(matchExpressions)) { matchExpressions = [matchExpressions] }
        if (!this._template.matchExpressions) this._template.matchExpressions = matchExpressions
        this._template.matchExpressions = [...this._template.matchExpressions, ...matchExpressions]
        return this
    }

    matchLabels(matchLabels: {[name: string]: string}): LabelSelectorHelper {
        if (!this._template.matchLabels) this._template.matchLabels = []
        this._template.matchLabels = {
            ...this._template.matchLabels,
            ...matchLabels
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LabelSelectorHelper.kind
        this._template.apiVersion = LabelSelectorHelper.apiVersion
    }
}

/** A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export class LabelSelectorRequirementHelper extends ResourceTemplate {
    static kind = 'LabelSelectorRequirement';
    static apiVersion = 'meta/v1';

    key(key: string): LabelSelectorRequirementHelper {
        this._template.key = key
        return this
    }

    operator(operator: string): LabelSelectorRequirementHelper {
        this._template.operator = operator
        return this
    }

    values(values: Array<string>): LabelSelectorRequirementHelper {
        if (!Array.isArray(values)) { values = [values] }
        if (!this._template.values) this._template.values = values
        this._template.values = [...this._template.values, ...values]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = LabelSelectorRequirementHelper.kind
        this._template.apiVersion = LabelSelectorRequirementHelper.apiVersion
    }
}

/** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
export class ListMetaHelper extends ResourceTemplate {
    static kind = 'ListMeta';
    static apiVersion = 'meta/v1';

    continue_(continue_: string): ListMetaHelper {
        this._template.continue_ = continue_
        return this
    }

    remainingItemCount(remainingItemCount: number): ListMetaHelper {
        this._template.remainingItemCount = remainingItemCount
        return this
    }

    resourceVersion(resourceVersion: string): ListMetaHelper {
        this._template.resourceVersion = resourceVersion
        return this
    }

    selfLink(selfLink: string): ListMetaHelper {
        this._template.selfLink = selfLink
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ListMetaHelper.kind
        this._template.apiVersion = ListMetaHelper.apiVersion
    }
}

/** ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to. */
export class ManagedFieldsEntryHelper extends ResourceTemplate {
    static kind = 'ManagedFieldsEntry';
    static apiVersion = 'meta/v1';

    fieldsType(fieldsType: string): ManagedFieldsEntryHelper {
        this._template.fieldsType = fieldsType
        return this
    }

    fieldsV1(fieldsV1: FieldsV1): ManagedFieldsEntryHelper {
        if (!this._template.fieldsV1) this._template.fieldsV1 = []
        this._template.fieldsV1 = {
            ...this._template.fieldsV1,
            ...fieldsV1
        }
        return this
    }

    manager(manager: string): ManagedFieldsEntryHelper {
        this._template.manager = manager
        return this
    }

    operation(operation: string): ManagedFieldsEntryHelper {
        this._template.operation = operation
        return this
    }

    time(time: Time): ManagedFieldsEntryHelper {
        this._template.time = time
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ManagedFieldsEntryHelper.kind
        this._template.apiVersion = ManagedFieldsEntryHelper.apiVersion
    }
}

/** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
export class ObjectMetaHelper extends ResourceTemplate {
    static kind = 'ObjectMeta';
    static apiVersion = 'meta/v1';

    annotations(annotations: {[name: string]: string}): ObjectMetaHelper {
        if (!this._template.annotations) this._template.annotations = []
        this._template.annotations = {
            ...this._template.annotations,
            ...annotations
        }
        return this
    }

    clusterName(clusterName: string): ObjectMetaHelper {
        this._template.clusterName = clusterName
        return this
    }

    creationTimestamp(creationTimestamp: Time): ObjectMetaHelper {
        this._template.creationTimestamp = creationTimestamp
        return this
    }

    deletionGracePeriodSeconds(deletionGracePeriodSeconds: number): ObjectMetaHelper {
        this._template.deletionGracePeriodSeconds = deletionGracePeriodSeconds
        return this
    }

    deletionTimestamp(deletionTimestamp: Time): ObjectMetaHelper {
        this._template.deletionTimestamp = deletionTimestamp
        return this
    }

    finalizers(finalizers: Array<string>): ObjectMetaHelper {
        if (!Array.isArray(finalizers)) { finalizers = [finalizers] }
        if (!this._template.finalizers) this._template.finalizers = finalizers
        this._template.finalizers = [...this._template.finalizers, ...finalizers]
        return this
    }

    generateName(generateName: string): ObjectMetaHelper {
        this._template.generateName = generateName
        return this
    }

    generation(generation: number): ObjectMetaHelper {
        this._template.generation = generation
        return this
    }

    labels(labels: {[name: string]: string}): ObjectMetaHelper {
        if (!this._template.labels) this._template.labels = []
        this._template.labels = {
            ...this._template.labels,
            ...labels
        }
        return this
    }

    managedFields(managedFields: Array<ManagedFieldsEntry>): ObjectMetaHelper {
        if (!Array.isArray(managedFields)) { managedFields = [managedFields] }
        if (!this._template.managedFields) this._template.managedFields = managedFields
        this._template.managedFields = [...this._template.managedFields, ...managedFields]
        return this
    }

    ownerReferences(ownerReferences: Array<OwnerReference>): ObjectMetaHelper {
        if (!Array.isArray(ownerReferences)) { ownerReferences = [ownerReferences] }
        if (!this._template.ownerReferences) this._template.ownerReferences = ownerReferences
        this._template.ownerReferences = [...this._template.ownerReferences, ...ownerReferences]
        return this
    }

    resourceVersion(resourceVersion: string): ObjectMetaHelper {
        this._template.resourceVersion = resourceVersion
        return this
    }

    selfLink(selfLink: string): ObjectMetaHelper {
        this._template.selfLink = selfLink
        return this
    }

    uid(uid: string): ObjectMetaHelper {
        this._template.uid = uid
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ObjectMetaHelper.kind
        this._template.apiVersion = ObjectMetaHelper.apiVersion
    }
}

/** OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field. */
export class OwnerReferenceHelper extends ResourceTemplate {
    static kind = 'OwnerReference';
    static apiVersion = 'meta/v1';

    blockOwnerDeletion(blockOwnerDeletion: boolean): OwnerReferenceHelper {
        this._template.blockOwnerDeletion = blockOwnerDeletion
        return this
    }

    controller(controller: boolean): OwnerReferenceHelper {
        this._template.controller = controller
        return this
    }

    uid(uid: string): OwnerReferenceHelper {
        this._template.uid = uid
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = OwnerReferenceHelper.kind
        this._template.apiVersion = OwnerReferenceHelper.apiVersion
    }
}

/** Patch is provided to give a concrete name and type to the Kubernetes PATCH request body. */
export class PatchHelper extends ResourceTemplate {
    static kind = 'Patch';
    static apiVersion = 'meta/v1';

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PatchHelper.kind
        this._template.apiVersion = PatchHelper.apiVersion
    }
}

/** Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out. */
export class PreconditionsHelper extends ResourceTemplate {
    static kind = 'Preconditions';
    static apiVersion = 'meta/v1';

    resourceVersion(resourceVersion: string): PreconditionsHelper {
        this._template.resourceVersion = resourceVersion
        return this
    }

    uid(uid: string): PreconditionsHelper {
        this._template.uid = uid
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = PreconditionsHelper.kind
        this._template.apiVersion = PreconditionsHelper.apiVersion
    }
}

/** ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match. */
export class ServerAddressByClientCIDRHelper extends ResourceTemplate {
    static kind = 'ServerAddressByClientCIDR';
    static apiVersion = 'meta/v1';

    clientCIDR(clientCIDR: string): ServerAddressByClientCIDRHelper {
        this._template.clientCIDR = clientCIDR
        return this
    }

    serverAddress(serverAddress: string): ServerAddressByClientCIDRHelper {
        this._template.serverAddress = serverAddress
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ServerAddressByClientCIDRHelper.kind
        this._template.apiVersion = ServerAddressByClientCIDRHelper.apiVersion
    }
}

/** Status is a return value for calls that don't return other objects. */
export class StatusHelper extends ResourceTemplate {
    static kind = 'Status';
    static apiVersion = 'meta/v1';

    code(code: number): StatusHelper {
        this._template.code = code
        return this
    }

    details(details: StatusDetails): StatusHelper {
        if (!this._template.details) this._template.details = []
        this._template.details = {
            ...this._template.details,
            ...details
        }
        return this
    }

    message(message: string): StatusHelper {
        this._template.message = message
        return this
    }

    metadata(metadata: ListMeta): StatusHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    reason(reason: string): StatusHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): StatusHelper {
        this._template.status = status
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StatusHelper.kind
        this._template.apiVersion = StatusHelper.apiVersion
    }
}

/** StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered. */
export class StatusCauseHelper extends ResourceTemplate {
    static kind = 'StatusCause';
    static apiVersion = 'meta/v1';

    field(field: string): StatusCauseHelper {
        this._template.field = field
        return this
    }

    message(message: string): StatusCauseHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): StatusCauseHelper {
        this._template.reason = reason
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StatusCauseHelper.kind
        this._template.apiVersion = StatusCauseHelper.apiVersion
    }
}

/** StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined. */
export class StatusDetailsHelper extends ResourceTemplate {
    static kind = 'StatusDetails';
    static apiVersion = 'meta/v1';

    causes(causes: Array<StatusCause>): StatusDetailsHelper {
        if (!Array.isArray(causes)) { causes = [causes] }
        if (!this._template.causes) this._template.causes = causes
        this._template.causes = [...this._template.causes, ...causes]
        return this
    }

    group(group: string): StatusDetailsHelper {
        this._template.group = group
        return this
    }

    retryAfterSeconds(retryAfterSeconds: number): StatusDetailsHelper {
        this._template.retryAfterSeconds = retryAfterSeconds
        return this
    }

    uid(uid: string): StatusDetailsHelper {
        this._template.uid = uid
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = StatusDetailsHelper.kind
        this._template.apiVersion = StatusDetailsHelper.apiVersion
    }
}

/** Event represents a single event to a watched resource. */
export class WatchEventHelper extends ResourceTemplate {
    static kind = 'WatchEvent';
    static apiVersion = 'meta/v1';

    object(object: RawExtension): WatchEventHelper {
        if (!this._template.object) this._template.object = []
        this._template.object = {
            ...this._template.object,
            ...object
        }
        return this
    }

    type(type: string): WatchEventHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = WatchEventHelper.kind
        this._template.apiVersion = WatchEventHelper.apiVersion
    }
}
