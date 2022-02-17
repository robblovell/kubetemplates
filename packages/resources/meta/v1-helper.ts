import { ResourceTemplate, Template } from "../resourceTemplate";
import { APIGroup, APIGroupList, APIResource, APIResourceList, APIVersions, Condition, DeleteOptions, FieldsV1, GroupVersionForDiscovery, LabelSelector, LabelSelectorRequirement, ListMeta, ManagedFieldsEntry, ObjectMeta, OwnerReference, Patch, Preconditions, ServerAddressByClientCIDR, Status, StatusCause, StatusDetails, Time, WatchEvent } from "./v1";
import { RawExtension } from "../runtime";

export interface APIGroupHelper extends APIGroup {
    $preferredVersion(x: any): any;
    $serverAddressByClientCIDRs(x: any): any;
    $versions(x: any): any;
}

/** APIGroup contains the name, the supported versions, and the preferred version of a group. */
export class APIGroupHelper extends Template implements APIGroupHelper {
    constructor(obj: any) {
        super(obj)
    }

    _preferredVersion: any;
    get preferredVersion(): any /*GroupVersionForDiscoveryHelper*/ {
        return this._preferredVersion
    }
    set preferredVersion(x: any /*GroupVersionForDiscoveryHelper*/) {
        this._preferredVersion = x
    }
    setPreferredVersion(x: any /*GroupVersionForDiscoveryHelper*/) {
        this.preferredVersion = x; return this
    }

    _serverAddressByClientCIDRs: any;
    get serverAddressByClientCIDRs(): any /*Array<ServerAddressByClientCIDR>*/ {
        return this._serverAddressByClientCIDRs
    }
    set serverAddressByClientCIDRs(x: any /*Array<ServerAddressByClientCIDR>*/) {
        this._serverAddressByClientCIDRs = this.set(this.serverAddressByClientCIDRs, x)
    }
    setServerAddressByClientCIDRs(x: any /*Array<ServerAddressByClientCIDR>*/) {
        this.serverAddressByClientCIDRs = x; return this
    }

    _versions: any;
    get versions(): any /*Array<GroupVersionForDiscovery>*/ {
        return this._versions
    }
    set versions(x: any /*Array<GroupVersionForDiscovery>*/) {
        this._versions = this.set(this.versions, x)
    }
    setVersions(x: any /*Array<GroupVersionForDiscovery>*/) {
        this.versions = x; return this
    }
}

export interface APIGroupListHelper extends APIGroupList {
    $groups(x: any): any;
}

/** APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis. */
export class APIGroupListHelper extends Template implements APIGroupListHelper {
    constructor(obj: any) {
        super(obj)
    }

    _groups: any;
    get groups(): any /*Array<APIGroup>*/ {
        return this._groups
    }
    set groups(x: any /*Array<APIGroup>*/) {
        this._groups = this.set(this.groups, x)
    }
    setGroups(x: any /*Array<APIGroup>*/) {
        this.groups = x; return this
    }
}

export interface APIResourceHelper extends APIResource {
    $categories(x: any): any;
    $group(x: any): any;
    $namespaced(x: any): any;
    $shortNames(x: any): any;
    $singularName(x: any): any;
    $storageVersionHash(x: any): any;
    $verbs(x: any): any;
    $version(x: any): any;
}

/** APIResource specifies the name of a resource and whether it is namespaced. */
export class APIResourceHelper extends Template implements APIResourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _categories: any;
    get categories(): any /*Array<string>*/ {
        return this._categories
    }
    set categories(x: any /*Array<string>*/) {
        this._categories = this.set(this.categories, x)
    }
    setCategories(x: any /*Array<string>*/) {
        this.categories = x; return this
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

    _namespaced: any;
    get namespaced(): any /*boolean*/ {
        return this._namespaced
    }
    set namespaced(x: any /*boolean*/) {
        this._namespaced = x
    }
    setNamespaced(x: any /*boolean*/) {
        this.namespaced = x; return this
    }

    _shortNames: any;
    get shortNames(): any /*Array<string>*/ {
        return this._shortNames
    }
    set shortNames(x: any /*Array<string>*/) {
        this._shortNames = this.set(this.shortNames, x)
    }
    setShortNames(x: any /*Array<string>*/) {
        this.shortNames = x; return this
    }

    _singularName: any;
    get singularName(): any /*string*/ {
        return this._singularName
    }
    set singularName(x: any /*string*/) {
        this._singularName = x
    }
    setSingularName(x: any /*string*/) {
        this.singularName = x; return this
    }

    _storageVersionHash: any;
    get storageVersionHash(): any /*string*/ {
        return this._storageVersionHash
    }
    set storageVersionHash(x: any /*string*/) {
        this._storageVersionHash = x
    }
    setStorageVersionHash(x: any /*string*/) {
        this.storageVersionHash = x; return this
    }

    _verbs: any;
    get verbs(): any /*Array<string>*/ {
        return this._verbs
    }
    set verbs(x: any /*Array<string>*/) {
        this._verbs = this.set(this.verbs, x)
    }
    setVerbs(x: any /*Array<string>*/) {
        this.verbs = x; return this
    }

    _version: any;
    get version(): any /*string*/ {
        return this._version
    }
    set version(x: any /*string*/) {
        this._version = x
    }
    setVersion(x: any /*string*/) {
        this.version = x; return this
    }
}

export interface APIResourceListHelper extends APIResourceList {
    $groupVersion(x: any): any;
    $resources(x: any): any;
}

/** APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced. */
export class APIResourceListHelper extends Template implements APIResourceListHelper {
    constructor(obj: any) {
        super(obj)
    }

    _groupVersion: any;
    get groupVersion(): any /*string*/ {
        return this._groupVersion
    }
    set groupVersion(x: any /*string*/) {
        this._groupVersion = x
    }
    setGroupVersion(x: any /*string*/) {
        this.groupVersion = x; return this
    }

    _resources: any;
    get resources(): any /*Array<APIResource>*/ {
        return this._resources
    }
    set resources(x: any /*Array<APIResource>*/) {
        this._resources = this.set(this.resources, x)
    }
    setResources(x: any /*Array<APIResource>*/) {
        this.resources = x; return this
    }
}

export interface APIVersionsHelper extends APIVersions {
    $serverAddressByClientCIDRs(x: any): any;
    $versions(x: any): any;
}

/** APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API. */
export class APIVersionsHelper extends Template implements APIVersionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _serverAddressByClientCIDRs: any;
    get serverAddressByClientCIDRs(): any /*Array<ServerAddressByClientCIDR>*/ {
        return this._serverAddressByClientCIDRs
    }
    set serverAddressByClientCIDRs(x: any /*Array<ServerAddressByClientCIDR>*/) {
        this._serverAddressByClientCIDRs = this.set(this.serverAddressByClientCIDRs, x)
    }
    setServerAddressByClientCIDRs(x: any /*Array<ServerAddressByClientCIDR>*/) {
        this.serverAddressByClientCIDRs = x; return this
    }

    _versions: any;
    get versions(): any /*Array<string>*/ {
        return this._versions
    }
    set versions(x: any /*Array<string>*/) {
        this._versions = this.set(this.versions, x)
    }
    setVersions(x: any /*Array<string>*/) {
        this.versions = x; return this
    }
}

export interface ConditionHelper extends Condition {
    $lastTransitionTime(x: any): any;
    $message(x: any): any;
    $observedGeneration(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** Condition contains details for one aspect of the current state of this API Resource. */
export class ConditionHelper extends Template implements ConditionHelper {
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

export interface DeleteOptionsHelper extends DeleteOptions {
    $dryRun(x: any): any;
    $gracePeriodSeconds(x: any): any;
    $orphanDependents(x: any): any;
    $preconditions(x: any): any;
    $propagationPolicy(x: any): any;
}

/** DeleteOptions may be provided when deleting an API object. */
export class DeleteOptionsHelper extends Template implements DeleteOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _dryRun: any;
    get dryRun(): any /*Array<string>*/ {
        return this._dryRun
    }
    set dryRun(x: any /*Array<string>*/) {
        this._dryRun = this.set(this.dryRun, x)
    }
    setDryRun(x: any /*Array<string>*/) {
        this.dryRun = x; return this
    }

    _gracePeriodSeconds: any;
    get gracePeriodSeconds(): any /*number*/ {
        return this._gracePeriodSeconds
    }
    set gracePeriodSeconds(x: any /*number*/) {
        this._gracePeriodSeconds = x
    }
    setGracePeriodSeconds(x: any /*number*/) {
        this.gracePeriodSeconds = x; return this
    }

    _orphanDependents: any;
    get orphanDependents(): any /*boolean*/ {
        return this._orphanDependents
    }
    set orphanDependents(x: any /*boolean*/) {
        this._orphanDependents = x
    }
    setOrphanDependents(x: any /*boolean*/) {
        this.orphanDependents = x; return this
    }

    _preconditions: any;
    get preconditions(): any /*PreconditionsHelper*/ {
        return this._preconditions
    }
    set preconditions(x: any /*PreconditionsHelper*/) {
        this._preconditions = x
    }
    setPreconditions(x: any /*PreconditionsHelper*/) {
        this.preconditions = x; return this
    }

    _propagationPolicy: any;
    get propagationPolicy(): any /*string*/ {
        return this._propagationPolicy
    }
    set propagationPolicy(x: any /*string*/) {
        this._propagationPolicy = x
    }
    setPropagationPolicy(x: any /*string*/) {
        this.propagationPolicy = x; return this
    }
}

export interface FieldsV1Helper extends FieldsV1 {
}

/**
 * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
 *
 * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
 *
 * The exact format is defined in sigs.k8s.io/structured-merge-diff
 */
export class FieldsV1Helper extends Template implements FieldsV1Helper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface GroupVersionForDiscoveryHelper extends GroupVersionForDiscovery {
    $groupVersion(x: any): any;
    $version(x: any): any;
}

/** GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility. */
export class GroupVersionForDiscoveryHelper extends Template implements GroupVersionForDiscoveryHelper {
    constructor(obj: any) {
        super(obj)
    }

    _groupVersion: any;
    get groupVersion(): any /*string*/ {
        return this._groupVersion
    }
    set groupVersion(x: any /*string*/) {
        this._groupVersion = x
    }
    setGroupVersion(x: any /*string*/) {
        this.groupVersion = x; return this
    }

    _version: any;
    get version(): any /*string*/ {
        return this._version
    }
    set version(x: any /*string*/) {
        this._version = x
    }
    setVersion(x: any /*string*/) {
        this.version = x; return this
    }
}

export interface LabelSelectorHelper extends LabelSelector {
    $matchExpressions(x: any): any;
    $matchLabels(x: any): any;
}

/** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
export class LabelSelectorHelper extends Template implements LabelSelectorHelper {
    constructor(obj: any) {
        super(obj)
    }

    _matchExpressions: any;
    get matchExpressions(): any /*Array<LabelSelectorRequirement>*/ {
        return this._matchExpressions
    }
    set matchExpressions(x: any /*Array<LabelSelectorRequirement>*/) {
        this._matchExpressions = this.set(this.matchExpressions, x)
    }
    setMatchExpressions(x: any /*Array<LabelSelectorRequirement>*/) {
        this.matchExpressions = x; return this
    }

    _matchLabels: any;
    get matchLabels(): any /*any*/ {
        return this._matchLabels
    }
    set matchLabels(x: any /*any*/) {
        this._matchLabels = this.set(this.matchLabels, x)
    }
    setMatchLabels(x: any /*any*/) {
        this.matchLabels = x; return this
    }
}

export interface LabelSelectorRequirementHelper extends LabelSelectorRequirement {
    $key(x: any): any;
    $operator(x: any): any;
    $values(x: any): any;
}

/** A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export class LabelSelectorRequirementHelper extends Template implements LabelSelectorRequirementHelper {
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

export interface ListMetaHelper extends ListMeta {
    $continue_(x: any): any;
    $remainingItemCount(x: any): any;
    $resourceVersion(x: any): any;
    $selfLink(x: any): any;
}

/** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
export class ListMetaHelper extends Template implements ListMetaHelper {
    constructor(obj: any) {
        super(obj)
    }

    _continue_: any;
    get continue_(): any /*string*/ {
        return this._continue_
    }
    set continue_(x: any /*string*/) {
        this._continue_ = x
    }
    setContinue_(x: any /*string*/) {
        this.continue_ = x; return this
    }

    _remainingItemCount: any;
    get remainingItemCount(): any /*number*/ {
        return this._remainingItemCount
    }
    set remainingItemCount(x: any /*number*/) {
        this._remainingItemCount = x
    }
    setRemainingItemCount(x: any /*number*/) {
        this.remainingItemCount = x; return this
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

    _selfLink: any;
    get selfLink(): any /*string*/ {
        return this._selfLink
    }
    set selfLink(x: any /*string*/) {
        this._selfLink = x
    }
    setSelfLink(x: any /*string*/) {
        this.selfLink = x; return this
    }
}

export interface ManagedFieldsEntryHelper extends ManagedFieldsEntry {
    $fieldsType(x: any): any;
    $fieldsV1(x: any): any;
    $manager(x: any): any;
    $operation(x: any): any;
    $time(x: any): any;
}

/** ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to. */
export class ManagedFieldsEntryHelper extends Template implements ManagedFieldsEntryHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fieldsType: any;
    get fieldsType(): any /*string*/ {
        return this._fieldsType
    }
    set fieldsType(x: any /*string*/) {
        this._fieldsType = x
    }
    setFieldsType(x: any /*string*/) {
        this.fieldsType = x; return this
    }

    _fieldsV1: any;
    get fieldsV1(): any /*FieldsV1Helper*/ {
        return this._fieldsV1
    }
    set fieldsV1(x: any /*FieldsV1Helper*/) {
        this._fieldsV1 = x
    }
    setFieldsV1(x: any /*FieldsV1Helper*/) {
        this.fieldsV1 = x; return this
    }

    _manager: any;
    get manager(): any /*string*/ {
        return this._manager
    }
    set manager(x: any /*string*/) {
        this._manager = x
    }
    setManager(x: any /*string*/) {
        this.manager = x; return this
    }

    _operation: any;
    get operation(): any /*string*/ {
        return this._operation
    }
    set operation(x: any /*string*/) {
        this._operation = x
    }
    setOperation(x: any /*string*/) {
        this.operation = x; return this
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

export interface ObjectMetaHelper extends ObjectMeta {
    $annotations(x: any): any;
    $clusterName(x: any): any;
    $creationTimestamp(x: any): any;
    $deletionGracePeriodSeconds(x: any): any;
    $deletionTimestamp(x: any): any;
    $finalizers(x: any): any;
    $generateName(x: any): any;
    $generation(x: any): any;
    $labels(x: any): any;
    $managedFields(x: any): any;
    $ownerReferences(x: any): any;
    $resourceVersion(x: any): any;
    $selfLink(x: any): any;
    $uid(x: any): any;
}

/** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
export class ObjectMetaHelper extends Template implements ObjectMetaHelper {
    constructor(obj: any) {
        super(obj)
    }

    _annotations: any;
    get annotations(): any /*any*/ {
        return this._annotations
    }
    set annotations(x: any /*any*/) {
        this._annotations = this.set(this.annotations, x)
    }
    setAnnotations(x: any /*any*/) {
        this.annotations = x; return this
    }

    _clusterName: any;
    get clusterName(): any /*string*/ {
        return this._clusterName
    }
    set clusterName(x: any /*string*/) {
        this._clusterName = x
    }
    setClusterName(x: any /*string*/) {
        this.clusterName = x; return this
    }

    _creationTimestamp: any;
    get creationTimestamp(): any /*Time*/ {
        return this._creationTimestamp
    }
    set creationTimestamp(x: any /*Time*/) {
        this._creationTimestamp = x
    }
    setCreationTimestamp(x: any /*Time*/) {
        this.creationTimestamp = x; return this
    }

    _deletionGracePeriodSeconds: any;
    get deletionGracePeriodSeconds(): any /*number*/ {
        return this._deletionGracePeriodSeconds
    }
    set deletionGracePeriodSeconds(x: any /*number*/) {
        this._deletionGracePeriodSeconds = x
    }
    setDeletionGracePeriodSeconds(x: any /*number*/) {
        this.deletionGracePeriodSeconds = x; return this
    }

    _deletionTimestamp: any;
    get deletionTimestamp(): any /*Time*/ {
        return this._deletionTimestamp
    }
    set deletionTimestamp(x: any /*Time*/) {
        this._deletionTimestamp = x
    }
    setDeletionTimestamp(x: any /*Time*/) {
        this.deletionTimestamp = x; return this
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

    _generateName: any;
    get generateName(): any /*string*/ {
        return this._generateName
    }
    set generateName(x: any /*string*/) {
        this._generateName = x
    }
    setGenerateName(x: any /*string*/) {
        this.generateName = x; return this
    }

    _generation: any;
    get generation(): any /*number*/ {
        return this._generation
    }
    set generation(x: any /*number*/) {
        this._generation = x
    }
    setGeneration(x: any /*number*/) {
        this.generation = x; return this
    }

    _labels: any;
    get labels(): any /*any*/ {
        return this._labels
    }
    set labels(x: any /*any*/) {
        this._labels = this.set(this.labels, x)
    }
    setLabels(x: any /*any*/) {
        this.labels = x; return this
    }

    _managedFields: any;
    get managedFields(): any /*Array<ManagedFieldsEntry>*/ {
        return this._managedFields
    }
    set managedFields(x: any /*Array<ManagedFieldsEntry>*/) {
        this._managedFields = this.set(this.managedFields, x)
    }
    setManagedFields(x: any /*Array<ManagedFieldsEntry>*/) {
        this.managedFields = x; return this
    }

    _ownerReferences: any;
    get ownerReferences(): any /*Array<OwnerReference>*/ {
        return this._ownerReferences
    }
    set ownerReferences(x: any /*Array<OwnerReference>*/) {
        this._ownerReferences = this.set(this.ownerReferences, x)
    }
    setOwnerReferences(x: any /*Array<OwnerReference>*/) {
        this.ownerReferences = x; return this
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

    _selfLink: any;
    get selfLink(): any /*string*/ {
        return this._selfLink
    }
    set selfLink(x: any /*string*/) {
        this._selfLink = x
    }
    setSelfLink(x: any /*string*/) {
        this.selfLink = x; return this
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

export interface OwnerReferenceHelper extends OwnerReference {
    $blockOwnerDeletion(x: any): any;
    $controller(x: any): any;
    $uid(x: any): any;
}

/** OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field. */
export class OwnerReferenceHelper extends Template implements OwnerReferenceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _blockOwnerDeletion: any;
    get blockOwnerDeletion(): any /*boolean*/ {
        return this._blockOwnerDeletion
    }
    set blockOwnerDeletion(x: any /*boolean*/) {
        this._blockOwnerDeletion = x
    }
    setBlockOwnerDeletion(x: any /*boolean*/) {
        this.blockOwnerDeletion = x; return this
    }

    _controller: any;
    get controller(): any /*boolean*/ {
        return this._controller
    }
    set controller(x: any /*boolean*/) {
        this._controller = x
    }
    setController(x: any /*boolean*/) {
        this.controller = x; return this
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

export interface PatchHelper extends Patch {
}

/** Patch is provided to give a concrete name and type to the Kubernetes PATCH request body. */
export class PatchHelper extends Template implements PatchHelper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface PreconditionsHelper extends Preconditions {
    $resourceVersion(x: any): any;
    $uid(x: any): any;
}

/** Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out. */
export class PreconditionsHelper extends Template implements PreconditionsHelper {
    constructor(obj: any) {
        super(obj)
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

export interface ServerAddressByClientCIDRHelper extends ServerAddressByClientCIDR {
    $clientCIDR(x: any): any;
    $serverAddress(x: any): any;
}

/** ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match. */
export class ServerAddressByClientCIDRHelper extends Template implements ServerAddressByClientCIDRHelper {
    constructor(obj: any) {
        super(obj)
    }

    _clientCIDR: any;
    get clientCIDR(): any /*string*/ {
        return this._clientCIDR
    }
    set clientCIDR(x: any /*string*/) {
        this._clientCIDR = x
    }
    setClientCIDR(x: any /*string*/) {
        this.clientCIDR = x; return this
    }

    _serverAddress: any;
    get serverAddress(): any /*string*/ {
        return this._serverAddress
    }
    set serverAddress(x: any /*string*/) {
        this._serverAddress = x
    }
    setServerAddress(x: any /*string*/) {
        this.serverAddress = x; return this
    }
}

export interface StatusHelper extends Status {
    $code(x: any): any;
    $details(x: any): any;
    $message(x: any): any;
    $metadata(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
}

/** Status is a return value for calls that don't return other objects. */
export class StatusHelper extends ResourceTemplate implements StatusHelper {
    static kind = 'Status';
    static apiVersion = 'meta/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, StatusHelper.kind, StatusHelper.apiVersion)
    }

    _code: any;
    get code(): any /*number*/ {
        return this._code
    }
    set code(x: any /*number*/) {
        this._code = x
    }
    setCode(x: any /*number*/) {
        this.code = x; return this
    }

    _details: any;
    get details(): any /*StatusDetailsHelper*/ {
        return this._details
    }
    set details(x: any /*StatusDetailsHelper*/) {
        this._details = x
    }
    setDetails(x: any /*StatusDetailsHelper*/) {
        this.details = x; return this
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
    get metadata(): any /*ListMetaHelper*/ {
        return this._metadata
    }
    set metadata(x: any /*ListMetaHelper*/) {
        this._metadata = x
    }
    setMetadata(x: any /*ListMetaHelper*/) {
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
}

export interface StatusCauseHelper extends StatusCause {
    $field(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
}

/** StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered. */
export class StatusCauseHelper extends Template implements StatusCauseHelper {
    constructor(obj: any) {
        super(obj)
    }

    _field: any;
    get field(): any /*string*/ {
        return this._field
    }
    set field(x: any /*string*/) {
        this._field = x
    }
    setField(x: any /*string*/) {
        this.field = x; return this
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

export interface StatusDetailsHelper extends StatusDetails {
    $causes(x: any): any;
    $group(x: any): any;
    $retryAfterSeconds(x: any): any;
    $uid(x: any): any;
}

/** StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined. */
export class StatusDetailsHelper extends Template implements StatusDetailsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _causes: any;
    get causes(): any /*Array<StatusCause>*/ {
        return this._causes
    }
    set causes(x: any /*Array<StatusCause>*/) {
        this._causes = this.set(this.causes, x)
    }
    setCauses(x: any /*Array<StatusCause>*/) {
        this.causes = x; return this
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

    _retryAfterSeconds: any;
    get retryAfterSeconds(): any /*number*/ {
        return this._retryAfterSeconds
    }
    set retryAfterSeconds(x: any /*number*/) {
        this._retryAfterSeconds = x
    }
    setRetryAfterSeconds(x: any /*number*/) {
        this.retryAfterSeconds = x; return this
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

export interface WatchEventHelper extends WatchEvent {
    $object(x: any): any;
    $type(x: any): any;
}

/** Event represents a single event to a watched resource. */
export class WatchEventHelper extends Template implements WatchEventHelper {
    constructor(obj: any) {
        super(obj)
    }

    _object: any;
    get object(): any /*RawExtensionHelper*/ {
        return this._object
    }
    set object(x: any /*RawExtensionHelper*/) {
        this._object = x
    }
    setObject(x: any /*RawExtensionHelper*/) {
        this.object = x; return this
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
