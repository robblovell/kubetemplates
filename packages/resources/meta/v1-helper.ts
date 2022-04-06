import { ResourceTemplate, Template } from "../resourceTemplate";
import { APIGroup, APIGroupList, APIResource, APIResourceList, APIVersions, Condition, DeleteOptions, FieldsV1, GroupVersionForDiscovery, LabelSelector, LabelSelectorRequirement, ListMeta, ManagedFieldsEntry, ObjectMeta, OwnerReference, Patch, Preconditions, ServerAddressByClientCIDR, Status, StatusCause, StatusDetails, Time, WatchEvent } from "./v1";
import { RawExtension } from "../runtime";
import { RawExtensionHelper } from "../runtime-helper";

export interface APIGroupHelper extends APIGroup {
    $preferredVersion(x: GroupVersionForDiscoveryHelper): APIGroupHelper;
    $serverAddressByClientCIDRs(x: Array<ServerAddressByClientCIDR>): APIGroupHelper;
    $versions(x: Array<GroupVersionForDiscovery>): APIGroupHelper;
}

/** APIGroup contains the name, the supported versions, and the preferred version of a group. */
export class APIGroupHelper extends Template implements APIGroupHelper {
    constructor(obj: any) {
        super(obj)
    }

    _preferredVersion: GroupVersionForDiscoveryHelper;
    get preferredVersion(): GroupVersionForDiscoveryHelper {
        return this._preferredVersion
    }
    set preferredVersion(x: GroupVersionForDiscoveryHelper) {
        this._preferredVersion = x
    }
    $preferredVersion(x: GroupVersionForDiscoveryHelper) {
        this.preferredVersion = x; return this
    }

    _serverAddressByClientCIDRs: Array<ServerAddressByClientCIDR>;
    get serverAddressByClientCIDRs(): Array<ServerAddressByClientCIDR> {
        return this._serverAddressByClientCIDRs
    }
    set serverAddressByClientCIDRs(x: Array<ServerAddressByClientCIDR>) {
        this._serverAddressByClientCIDRs = this.set(this.serverAddressByClientCIDRs, x)
    }
    $serverAddressByClientCIDRs(x: Array<ServerAddressByClientCIDR>) {
        this.serverAddressByClientCIDRs = x; return this
    }

    _versions: Array<GroupVersionForDiscovery>;
    get versions(): Array<GroupVersionForDiscovery> {
        return this._versions
    }
    set versions(x: Array<GroupVersionForDiscovery>) {
        this._versions = this.set(this.versions, x)
    }
    $versions(x: Array<GroupVersionForDiscovery>) {
        this.versions = x; return this
    }
}

export interface APIGroupListHelper extends APIGroupList {
    $groups(x: Array<APIGroup>): APIGroupListHelper;
}

/** APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis. */
export class APIGroupListHelper extends Template implements APIGroupListHelper {
    constructor(obj: any) {
        super(obj)
    }

    _groups: Array<APIGroup>;
    get groups(): Array<APIGroup> {
        return this._groups
    }
    set groups(x: Array<APIGroup>) {
        this._groups = this.set(this.groups, x)
    }
    $groups(x: Array<APIGroup>) {
        this.groups = x; return this
    }
}

export interface APIResourceHelper extends APIResource {
    $categories(x: Array<string>): APIResourceHelper;
    $group(x: string): APIResourceHelper;
    $namespaced(x: boolean): APIResourceHelper;
    $shortNames(x: Array<string>): APIResourceHelper;
    $singularName(x: string): APIResourceHelper;
    $storageVersionHash(x: string): APIResourceHelper;
    $verbs(x: Array<string>): APIResourceHelper;
    $version(x: string): APIResourceHelper;
}

/** APIResource specifies the name of a resource and whether it is namespaced. */
export class APIResourceHelper extends Template implements APIResourceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _categories: Array<string>;
    get categories(): Array<string> {
        return this._categories
    }
    set categories(x: Array<string>) {
        this._categories = this.set(this.categories, x)
    }
    $categories(x: Array<string>) {
        this.categories = x; return this
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

    _namespaced: boolean;
    get namespaced(): boolean {
        return this._namespaced
    }
    set namespaced(x: boolean) {
        this._namespaced = x
    }
    $namespaced(x: boolean) {
        this.namespaced = x; return this
    }

    _shortNames: Array<string>;
    get shortNames(): Array<string> {
        return this._shortNames
    }
    set shortNames(x: Array<string>) {
        this._shortNames = this.set(this.shortNames, x)
    }
    $shortNames(x: Array<string>) {
        this.shortNames = x; return this
    }

    _singularName: string;
    get singularName(): string {
        return this._singularName
    }
    set singularName(x: string) {
        this._singularName = x
    }
    $singularName(x: string) {
        this.singularName = x; return this
    }

    _storageVersionHash: string;
    get storageVersionHash(): string {
        return this._storageVersionHash
    }
    set storageVersionHash(x: string) {
        this._storageVersionHash = x
    }
    $storageVersionHash(x: string) {
        this.storageVersionHash = x; return this
    }

    _verbs: Array<string>;
    get verbs(): Array<string> {
        return this._verbs
    }
    set verbs(x: Array<string>) {
        this._verbs = this.set(this.verbs, x)
    }
    $verbs(x: Array<string>) {
        this.verbs = x; return this
    }

    _version: string;
    get version(): string {
        return this._version
    }
    set version(x: string) {
        this._version = x
    }
    $version(x: string) {
        this.version = x; return this
    }
}

export interface APIResourceListHelper extends APIResourceList {
    $groupVersion(x: string): APIResourceListHelper;
    $resources(x: Array<APIResource>): APIResourceListHelper;
}

/** APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced. */
export class APIResourceListHelper extends Template implements APIResourceListHelper {
    constructor(obj: any) {
        super(obj)
    }

    _groupVersion: string;
    get groupVersion(): string {
        return this._groupVersion
    }
    set groupVersion(x: string) {
        this._groupVersion = x
    }
    $groupVersion(x: string) {
        this.groupVersion = x; return this
    }

    _resources: Array<APIResource>;
    get resources(): Array<APIResource> {
        return this._resources
    }
    set resources(x: Array<APIResource>) {
        this._resources = this.set(this.resources, x)
    }
    $resources(x: Array<APIResource>) {
        this.resources = x; return this
    }
}

export interface APIVersionsHelper extends APIVersions {
    $serverAddressByClientCIDRs(x: Array<ServerAddressByClientCIDR>): APIVersionsHelper;
    $versions(x: Array<string>): APIVersionsHelper;
}

/** APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API. */
export class APIVersionsHelper extends Template implements APIVersionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _serverAddressByClientCIDRs: Array<ServerAddressByClientCIDR>;
    get serverAddressByClientCIDRs(): Array<ServerAddressByClientCIDR> {
        return this._serverAddressByClientCIDRs
    }
    set serverAddressByClientCIDRs(x: Array<ServerAddressByClientCIDR>) {
        this._serverAddressByClientCIDRs = this.set(this.serverAddressByClientCIDRs, x)
    }
    $serverAddressByClientCIDRs(x: Array<ServerAddressByClientCIDR>) {
        this.serverAddressByClientCIDRs = x; return this
    }

    _versions: Array<string>;
    get versions(): Array<string> {
        return this._versions
    }
    set versions(x: Array<string>) {
        this._versions = this.set(this.versions, x)
    }
    $versions(x: Array<string>) {
        this.versions = x; return this
    }
}

export interface ConditionHelper extends Condition {
    $lastTransitionTime(x: Time): ConditionHelper;
    $message(x: string): ConditionHelper;
    $observedGeneration(x: number): ConditionHelper;
    $reason(x: string): ConditionHelper;
    $status(x: string): ConditionHelper;
    $type(x: string): ConditionHelper;
}

/** Condition contains details for one aspect of the current state of this API Resource. */
export class ConditionHelper extends Template implements ConditionHelper {
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

export interface DeleteOptionsHelper extends DeleteOptions {
    $dryRun(x: Array<string>): DeleteOptionsHelper;
    $gracePeriodSeconds(x: number): DeleteOptionsHelper;
    $orphanDependents(x: boolean): DeleteOptionsHelper;
    $preconditions(x: PreconditionsHelper): DeleteOptionsHelper;
    $propagationPolicy(x: string): DeleteOptionsHelper;
}

/** DeleteOptions may be provided when deleting an API object. */
export class DeleteOptionsHelper extends Template implements DeleteOptionsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _dryRun: Array<string>;
    get dryRun(): Array<string> {
        return this._dryRun
    }
    set dryRun(x: Array<string>) {
        this._dryRun = this.set(this.dryRun, x)
    }
    $dryRun(x: Array<string>) {
        this.dryRun = x; return this
    }

    _gracePeriodSeconds: number;
    get gracePeriodSeconds(): number {
        return this._gracePeriodSeconds
    }
    set gracePeriodSeconds(x: number) {
        this._gracePeriodSeconds = x
    }
    $gracePeriodSeconds(x: number) {
        this.gracePeriodSeconds = x; return this
    }

    _orphanDependents: boolean;
    get orphanDependents(): boolean {
        return this._orphanDependents
    }
    set orphanDependents(x: boolean) {
        this._orphanDependents = x
    }
    $orphanDependents(x: boolean) {
        this.orphanDependents = x; return this
    }

    _preconditions: PreconditionsHelper;
    get preconditions(): PreconditionsHelper {
        return this._preconditions
    }
    set preconditions(x: PreconditionsHelper) {
        this._preconditions = x
    }
    $preconditions(x: PreconditionsHelper) {
        this.preconditions = x; return this
    }

    _propagationPolicy: string;
    get propagationPolicy(): string {
        return this._propagationPolicy
    }
    set propagationPolicy(x: string) {
        this._propagationPolicy = x
    }
    $propagationPolicy(x: string) {
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
    $groupVersion(x: string): GroupVersionForDiscoveryHelper;
    $version(x: string): GroupVersionForDiscoveryHelper;
}

/** GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility. */
export class GroupVersionForDiscoveryHelper extends Template implements GroupVersionForDiscoveryHelper {
    constructor(obj: any) {
        super(obj)
    }

    _groupVersion: string;
    get groupVersion(): string {
        return this._groupVersion
    }
    set groupVersion(x: string) {
        this._groupVersion = x
    }
    $groupVersion(x: string) {
        this.groupVersion = x; return this
    }

    _version: string;
    get version(): string {
        return this._version
    }
    set version(x: string) {
        this._version = x
    }
    $version(x: string) {
        this.version = x; return this
    }
}

export interface LabelSelectorHelper extends LabelSelector {
    $matchExpressions(x: Array<LabelSelectorRequirement>): LabelSelectorHelper;
    $matchLabels(x: any): LabelSelectorHelper;
}

/** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
export class LabelSelectorHelper extends Template implements LabelSelectorHelper {
    constructor(obj: any) {
        super(obj)
    }

    _matchExpressions: Array<LabelSelectorRequirement>;
    get matchExpressions(): Array<LabelSelectorRequirement> {
        return this._matchExpressions
    }
    set matchExpressions(x: Array<LabelSelectorRequirement>) {
        this._matchExpressions = this.set(this.matchExpressions, x)
    }
    $matchExpressions(x: Array<LabelSelectorRequirement>) {
        this.matchExpressions = x; return this
    }

    _matchLabels: any;
    get matchLabels(): any {
        return this._matchLabels
    }
    set matchLabels(x: any) {
        this._matchLabels = this.set(this.matchLabels, x)
    }
    $matchLabels(x: any) {
        this.matchLabels = x; return this
    }
}

export interface LabelSelectorRequirementHelper extends LabelSelectorRequirement {
    $key(x: string): LabelSelectorRequirementHelper;
    $operator(x: string): LabelSelectorRequirementHelper;
    $values(x: Array<string>): LabelSelectorRequirementHelper;
}

/** A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export class LabelSelectorRequirementHelper extends Template implements LabelSelectorRequirementHelper {
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

export interface ListMetaHelper extends ListMeta {
    $continue_(x: string): ListMetaHelper;
    $remainingItemCount(x: number): ListMetaHelper;
    $resourceVersion(x: string): ListMetaHelper;
    $selfLink(x: string): ListMetaHelper;
}

/** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
export class ListMetaHelper extends Template implements ListMetaHelper {
    constructor(obj: any) {
        super(obj)
    }

    _continue_: string;
    get continue_(): string {
        return this._continue_
    }
    set continue_(x: string) {
        this._continue_ = x
    }
    $continue_(x: string) {
        this.continue_ = x; return this
    }

    _remainingItemCount: number;
    get remainingItemCount(): number {
        return this._remainingItemCount
    }
    set remainingItemCount(x: number) {
        this._remainingItemCount = x
    }
    $remainingItemCount(x: number) {
        this.remainingItemCount = x; return this
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

    _selfLink: string;
    get selfLink(): string {
        return this._selfLink
    }
    set selfLink(x: string) {
        this._selfLink = x
    }
    $selfLink(x: string) {
        this.selfLink = x; return this
    }
}

export interface ManagedFieldsEntryHelper extends ManagedFieldsEntry {
    $fieldsType(x: string): ManagedFieldsEntryHelper;
    $fieldsV1(x: FieldsV1Helper): ManagedFieldsEntryHelper;
    $manager(x: string): ManagedFieldsEntryHelper;
    $operation(x: string): ManagedFieldsEntryHelper;
    $time(x: Time): ManagedFieldsEntryHelper;
}

/** ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to. */
export class ManagedFieldsEntryHelper extends Template implements ManagedFieldsEntryHelper {
    constructor(obj: any) {
        super(obj)
    }

    _fieldsType: string;
    get fieldsType(): string {
        return this._fieldsType
    }
    set fieldsType(x: string) {
        this._fieldsType = x
    }
    $fieldsType(x: string) {
        this.fieldsType = x; return this
    }

    _fieldsV1: FieldsV1Helper;
    get fieldsV1(): FieldsV1Helper {
        return this._fieldsV1
    }
    set fieldsV1(x: FieldsV1Helper) {
        this._fieldsV1 = x
    }
    $fieldsV1(x: FieldsV1Helper) {
        this.fieldsV1 = x; return this
    }

    _manager: string;
    get manager(): string {
        return this._manager
    }
    set manager(x: string) {
        this._manager = x
    }
    $manager(x: string) {
        this.manager = x; return this
    }

    _operation: string;
    get operation(): string {
        return this._operation
    }
    set operation(x: string) {
        this._operation = x
    }
    $operation(x: string) {
        this.operation = x; return this
    }

    _time: Time;
    get time(): Time {
        return this._time
    }
    set time(x: Time) {
        this._time = x
    }
    $time(x: Time) {
        this.time = x; return this
    }
}

export interface ObjectMetaHelper extends ObjectMeta {
    $annotations(x: any): ObjectMetaHelper;
    $clusterName(x: string): ObjectMetaHelper;
    $creationTimestamp(x: Time): ObjectMetaHelper;
    $deletionGracePeriodSeconds(x: number): ObjectMetaHelper;
    $deletionTimestamp(x: Time): ObjectMetaHelper;
    $finalizers(x: Array<string>): ObjectMetaHelper;
    $generateName(x: string): ObjectMetaHelper;
    $generation(x: number): ObjectMetaHelper;
    $labels(x: any): ObjectMetaHelper;
    $managedFields(x: Array<ManagedFieldsEntry>): ObjectMetaHelper;
    $ownerReferences(x: Array<OwnerReference>): ObjectMetaHelper;
    $resourceVersion(x: string): ObjectMetaHelper;
    $selfLink(x: string): ObjectMetaHelper;
    $uid(x: string): ObjectMetaHelper;
}

/** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
export class ObjectMetaHelper extends Template implements ObjectMetaHelper {
    constructor(obj: any) {
        super(obj)
    }

    _annotations: any;
    get annotations(): any {
        return this._annotations
    }
    set annotations(x: any) {
        this._annotations = this.set(this.annotations, x)
    }
    $annotations(x: any) {
        this.annotations = x; return this
    }

    _clusterName: string;
    get clusterName(): string {
        return this._clusterName
    }
    set clusterName(x: string) {
        this._clusterName = x
    }
    $clusterName(x: string) {
        this.clusterName = x; return this
    }

    _creationTimestamp: Time;
    get creationTimestamp(): Time {
        return this._creationTimestamp
    }
    set creationTimestamp(x: Time) {
        this._creationTimestamp = x
    }
    $creationTimestamp(x: Time) {
        this.creationTimestamp = x; return this
    }

    _deletionGracePeriodSeconds: number;
    get deletionGracePeriodSeconds(): number {
        return this._deletionGracePeriodSeconds
    }
    set deletionGracePeriodSeconds(x: number) {
        this._deletionGracePeriodSeconds = x
    }
    $deletionGracePeriodSeconds(x: number) {
        this.deletionGracePeriodSeconds = x; return this
    }

    _deletionTimestamp: Time;
    get deletionTimestamp(): Time {
        return this._deletionTimestamp
    }
    set deletionTimestamp(x: Time) {
        this._deletionTimestamp = x
    }
    $deletionTimestamp(x: Time) {
        this.deletionTimestamp = x; return this
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

    _generateName: string;
    get generateName(): string {
        return this._generateName
    }
    set generateName(x: string) {
        this._generateName = x
    }
    $generateName(x: string) {
        this.generateName = x; return this
    }

    _generation: number;
    get generation(): number {
        return this._generation
    }
    set generation(x: number) {
        this._generation = x
    }
    $generation(x: number) {
        this.generation = x; return this
    }

    _labels: any;
    get labels(): any {
        return this._labels
    }
    set labels(x: any) {
        this._labels = this.set(this.labels, x)
    }
    $labels(x: any) {
        this.labels = x; return this
    }

    _managedFields: Array<ManagedFieldsEntry>;
    get managedFields(): Array<ManagedFieldsEntry> {
        return this._managedFields
    }
    set managedFields(x: Array<ManagedFieldsEntry>) {
        this._managedFields = this.set(this.managedFields, x)
    }
    $managedFields(x: Array<ManagedFieldsEntry>) {
        this.managedFields = x; return this
    }

    _ownerReferences: Array<OwnerReference>;
    get ownerReferences(): Array<OwnerReference> {
        return this._ownerReferences
    }
    set ownerReferences(x: Array<OwnerReference>) {
        this._ownerReferences = this.set(this.ownerReferences, x)
    }
    $ownerReferences(x: Array<OwnerReference>) {
        this.ownerReferences = x; return this
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

    _selfLink: string;
    get selfLink(): string {
        return this._selfLink
    }
    set selfLink(x: string) {
        this._selfLink = x
    }
    $selfLink(x: string) {
        this.selfLink = x; return this
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

export interface OwnerReferenceHelper extends OwnerReference {
    $blockOwnerDeletion(x: boolean): OwnerReferenceHelper;
    $controller(x: boolean): OwnerReferenceHelper;
    $uid(x: string): OwnerReferenceHelper;
}

/** OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field. */
export class OwnerReferenceHelper extends Template implements OwnerReferenceHelper {
    constructor(obj: any) {
        super(obj)
    }

    _blockOwnerDeletion: boolean;
    get blockOwnerDeletion(): boolean {
        return this._blockOwnerDeletion
    }
    set blockOwnerDeletion(x: boolean) {
        this._blockOwnerDeletion = x
    }
    $blockOwnerDeletion(x: boolean) {
        this.blockOwnerDeletion = x; return this
    }

    _controller: boolean;
    get controller(): boolean {
        return this._controller
    }
    set controller(x: boolean) {
        this._controller = x
    }
    $controller(x: boolean) {
        this.controller = x; return this
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

export interface PatchHelper extends Patch {
}

/** Patch is provided to give a concrete name and type to the Kubernetes PATCH request body. */
export class PatchHelper extends Template implements PatchHelper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface PreconditionsHelper extends Preconditions {
    $resourceVersion(x: string): PreconditionsHelper;
    $uid(x: string): PreconditionsHelper;
}

/** Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out. */
export class PreconditionsHelper extends Template implements PreconditionsHelper {
    constructor(obj: any) {
        super(obj)
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

export interface ServerAddressByClientCIDRHelper extends ServerAddressByClientCIDR {
    $clientCIDR(x: string): ServerAddressByClientCIDRHelper;
    $serverAddress(x: string): ServerAddressByClientCIDRHelper;
}

/** ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match. */
export class ServerAddressByClientCIDRHelper extends Template implements ServerAddressByClientCIDRHelper {
    constructor(obj: any) {
        super(obj)
    }

    _clientCIDR: string;
    get clientCIDR(): string {
        return this._clientCIDR
    }
    set clientCIDR(x: string) {
        this._clientCIDR = x
    }
    $clientCIDR(x: string) {
        this.clientCIDR = x; return this
    }

    _serverAddress: string;
    get serverAddress(): string {
        return this._serverAddress
    }
    set serverAddress(x: string) {
        this._serverAddress = x
    }
    $serverAddress(x: string) {
        this.serverAddress = x; return this
    }
}

export interface StatusHelper extends Status {
    $code(x: number): StatusHelper;
    $details(x: StatusDetailsHelper): StatusHelper;
    $message(x: string): StatusHelper;
    $metadata(x: ListMetaHelper): StatusHelper;
    $reason(x: string): StatusHelper;
    $status(x: string): StatusHelper;
}

/** Status is a return value for calls that don't return other objects. */
export class StatusHelper extends ResourceTemplate implements StatusHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "Status", "v1")
    }

    _code: number;
    get code(): number {
        return this._code
    }
    set code(x: number) {
        this._code = x
    }
    $code(x: number) {
        this.code = x; return this
    }

    _details: StatusDetailsHelper;
    get details(): StatusDetailsHelper {
        return this._details
    }
    set details(x: StatusDetailsHelper) {
        this._details = x
    }
    $details(x: StatusDetailsHelper) {
        this.details = x; return this
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
}

export interface StatusCauseHelper extends StatusCause {
    $field(x: string): StatusCauseHelper;
    $message(x: string): StatusCauseHelper;
    $reason(x: string): StatusCauseHelper;
}

/** StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered. */
export class StatusCauseHelper extends Template implements StatusCauseHelper {
    constructor(obj: any) {
        super(obj)
    }

    _field: string;
    get field(): string {
        return this._field
    }
    set field(x: string) {
        this._field = x
    }
    $field(x: string) {
        this.field = x; return this
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

export interface StatusDetailsHelper extends StatusDetails {
    $causes(x: Array<StatusCause>): StatusDetailsHelper;
    $group(x: string): StatusDetailsHelper;
    $retryAfterSeconds(x: number): StatusDetailsHelper;
    $uid(x: string): StatusDetailsHelper;
}

/** StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined. */
export class StatusDetailsHelper extends Template implements StatusDetailsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _causes: Array<StatusCause>;
    get causes(): Array<StatusCause> {
        return this._causes
    }
    set causes(x: Array<StatusCause>) {
        this._causes = this.set(this.causes, x)
    }
    $causes(x: Array<StatusCause>) {
        this.causes = x; return this
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

    _retryAfterSeconds: number;
    get retryAfterSeconds(): number {
        return this._retryAfterSeconds
    }
    set retryAfterSeconds(x: number) {
        this._retryAfterSeconds = x
    }
    $retryAfterSeconds(x: number) {
        this.retryAfterSeconds = x; return this
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

export interface WatchEventHelper extends WatchEvent {
    $object(x: RawExtensionHelper): WatchEventHelper;
    $type(x: string): WatchEventHelper;
}

/** Event represents a single event to a watched resource. */
export class WatchEventHelper extends Template implements WatchEventHelper {
    constructor(obj: any) {
        super(obj)
    }

    _object: RawExtensionHelper;
    get object(): RawExtensionHelper {
        return this._object
    }
    set object(x: RawExtensionHelper) {
        this._object = x
    }
    $object(x: RawExtensionHelper) {
        this.object = x; return this
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
