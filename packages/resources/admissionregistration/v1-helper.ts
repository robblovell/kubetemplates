import { ResourceTemplate, Template } from "../resourceTemplate";
import { MutatingWebhook, MutatingWebhookConfiguration, MutatingWebhookConfigurationList, RuleWithOperations, ServiceReference, ValidatingWebhook, ValidatingWebhookConfiguration, ValidatingWebhookConfigurationList, WebhookClientConfig } from "./v1";
import { LabelSelector, ListMeta, ObjectMeta } from "../meta/v1";
import { LabelSelectorHelper, ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";

export interface MutatingWebhookHelper extends MutatingWebhook {
    $admissionReviewVersions(x: Array<string>): MutatingWebhookHelper;
    $clientConfig(x: WebhookClientConfigHelper): MutatingWebhookHelper;
    $failurePolicy(x: string): MutatingWebhookHelper;
    $matchPolicy(x: string): MutatingWebhookHelper;
    $namespaceSelector(x: LabelSelectorHelper): MutatingWebhookHelper;
    $objectSelector(x: LabelSelectorHelper): MutatingWebhookHelper;
    $reinvocationPolicy(x: string): MutatingWebhookHelper;
    $rules(x: Array<RuleWithOperations>): MutatingWebhookHelper;
    $sideEffects(x: string): MutatingWebhookHelper;
    $timeoutSeconds(x: number): MutatingWebhookHelper;
}

/** MutatingWebhook describes an admission webhook and the resources and operations it applies to. */
export class MutatingWebhookHelper extends Template implements MutatingWebhookHelper {
    constructor(obj: any) {
        super(obj)
    }

    _admissionReviewVersions: Array<string>;
    get admissionReviewVersions(): Array<string> {
        return this._admissionReviewVersions
    }
    set admissionReviewVersions(x: Array<string>) {
        this._admissionReviewVersions = this.set(this.admissionReviewVersions, x)
    }
    $admissionReviewVersions(x: Array<string>) {
        this.admissionReviewVersions = x; return this
    }

    _clientConfig: WebhookClientConfigHelper;
    get clientConfig(): WebhookClientConfigHelper {
        return this._clientConfig
    }
    set clientConfig(x: WebhookClientConfigHelper) {
        this._clientConfig = x
    }
    $clientConfig(x: WebhookClientConfigHelper) {
        this.clientConfig = x; return this
    }

    _failurePolicy: string;
    get failurePolicy(): string {
        return this._failurePolicy
    }
    set failurePolicy(x: string) {
        this._failurePolicy = x
    }
    $failurePolicy(x: string) {
        this.failurePolicy = x; return this
    }

    _matchPolicy: string;
    get matchPolicy(): string {
        return this._matchPolicy
    }
    set matchPolicy(x: string) {
        this._matchPolicy = x
    }
    $matchPolicy(x: string) {
        this.matchPolicy = x; return this
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

    _objectSelector: LabelSelectorHelper;
    get objectSelector(): LabelSelectorHelper {
        return this._objectSelector
    }
    set objectSelector(x: LabelSelectorHelper) {
        this._objectSelector = x
    }
    $objectSelector(x: LabelSelectorHelper) {
        this.objectSelector = x; return this
    }

    _reinvocationPolicy: string;
    get reinvocationPolicy(): string {
        return this._reinvocationPolicy
    }
    set reinvocationPolicy(x: string) {
        this._reinvocationPolicy = x
    }
    $reinvocationPolicy(x: string) {
        this.reinvocationPolicy = x; return this
    }

    _rules: Array<RuleWithOperations>;
    get rules(): Array<RuleWithOperations> {
        return this._rules
    }
    set rules(x: Array<RuleWithOperations>) {
        this._rules = this.set(this.rules, x)
    }
    $rules(x: Array<RuleWithOperations>) {
        this.rules = x; return this
    }

    _sideEffects: string;
    get sideEffects(): string {
        return this._sideEffects
    }
    set sideEffects(x: string) {
        this._sideEffects = x
    }
    $sideEffects(x: string) {
        this.sideEffects = x; return this
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

export interface MutatingWebhookConfigurationHelper extends MutatingWebhookConfiguration {
    $metadata(x: ObjectMetaHelper): MutatingWebhookConfigurationHelper;
    $webhooks(x: Array<MutatingWebhook>): MutatingWebhookConfigurationHelper;
}

/** MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object. */
export class MutatingWebhookConfigurationHelper extends ResourceTemplate implements MutatingWebhookConfigurationHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "MutatingWebhookConfiguration", "admissionregistration.k8s.io/v1")
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

    _webhooks: Array<MutatingWebhook>;
    get webhooks(): Array<MutatingWebhook> {
        return this._webhooks
    }
    set webhooks(x: Array<MutatingWebhook>) {
        this._webhooks = this.set(this.webhooks, x)
    }
    $webhooks(x: Array<MutatingWebhook>) {
        this.webhooks = x; return this
    }
}

export interface MutatingWebhookConfigurationListHelper extends MutatingWebhookConfigurationList {
    $items(x: Array<MutatingWebhookConfiguration>): MutatingWebhookConfigurationListHelper;
    $metadata(x: ListMetaHelper): MutatingWebhookConfigurationListHelper;
}

/** MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration. */
export class MutatingWebhookConfigurationListHelper extends ResourceTemplate implements MutatingWebhookConfigurationListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "MutatingWebhookConfigurationList", "admissionregistration.k8s.io/v1")
    }

    _items: Array<MutatingWebhookConfiguration>;
    get items(): Array<MutatingWebhookConfiguration> {
        return this._items
    }
    set items(x: Array<MutatingWebhookConfiguration>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<MutatingWebhookConfiguration>) {
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

export interface RuleWithOperationsHelper extends RuleWithOperations {
    $apiGroups(x: Array<string>): RuleWithOperationsHelper;
    $apiVersions(x: Array<string>): RuleWithOperationsHelper;
    $operations(x: Array<string>): RuleWithOperationsHelper;
    $resources(x: Array<string>): RuleWithOperationsHelper;
    $scope(x: string): RuleWithOperationsHelper;
}

/** RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid. */
export class RuleWithOperationsHelper extends Template implements RuleWithOperationsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _apiGroups: Array<string>;
    get apiGroups(): Array<string> {
        return this._apiGroups
    }
    set apiGroups(x: Array<string>) {
        this._apiGroups = this.set(this.apiGroups, x)
    }
    $apiGroups(x: Array<string>) {
        this.apiGroups = x; return this
    }

    _apiVersions: Array<string>;
    get apiVersions(): Array<string> {
        return this._apiVersions
    }
    set apiVersions(x: Array<string>) {
        this._apiVersions = this.set(this.apiVersions, x)
    }
    $apiVersions(x: Array<string>) {
        this.apiVersions = x; return this
    }

    _operations: Array<string>;
    get operations(): Array<string> {
        return this._operations
    }
    set operations(x: Array<string>) {
        this._operations = this.set(this.operations, x)
    }
    $operations(x: Array<string>) {
        this.operations = x; return this
    }

    _resources: Array<string>;
    get resources(): Array<string> {
        return this._resources
    }
    set resources(x: Array<string>) {
        this._resources = this.set(this.resources, x)
    }
    $resources(x: Array<string>) {
        this.resources = x; return this
    }

    _scope: string;
    get scope(): string {
        return this._scope
    }
    set scope(x: string) {
        this._scope = x
    }
    $scope(x: string) {
        this.scope = x; return this
    }
}

export interface ServiceReferenceHelper extends ServiceReference {
    $path(x: string): ServiceReferenceHelper;
    $port(x: number): ServiceReferenceHelper;
}

/** ServiceReference holds a reference to Service.legacy.k8s.io */
export class ServiceReferenceHelper extends Template implements ServiceReferenceHelper {
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
}

export interface ValidatingWebhookHelper extends ValidatingWebhook {
    $admissionReviewVersions(x: Array<string>): ValidatingWebhookHelper;
    $clientConfig(x: WebhookClientConfigHelper): ValidatingWebhookHelper;
    $failurePolicy(x: string): ValidatingWebhookHelper;
    $matchPolicy(x: string): ValidatingWebhookHelper;
    $namespaceSelector(x: LabelSelectorHelper): ValidatingWebhookHelper;
    $objectSelector(x: LabelSelectorHelper): ValidatingWebhookHelper;
    $rules(x: Array<RuleWithOperations>): ValidatingWebhookHelper;
    $sideEffects(x: string): ValidatingWebhookHelper;
    $timeoutSeconds(x: number): ValidatingWebhookHelper;
}

/** ValidatingWebhook describes an admission webhook and the resources and operations it applies to. */
export class ValidatingWebhookHelper extends Template implements ValidatingWebhookHelper {
    constructor(obj: any) {
        super(obj)
    }

    _admissionReviewVersions: Array<string>;
    get admissionReviewVersions(): Array<string> {
        return this._admissionReviewVersions
    }
    set admissionReviewVersions(x: Array<string>) {
        this._admissionReviewVersions = this.set(this.admissionReviewVersions, x)
    }
    $admissionReviewVersions(x: Array<string>) {
        this.admissionReviewVersions = x; return this
    }

    _clientConfig: WebhookClientConfigHelper;
    get clientConfig(): WebhookClientConfigHelper {
        return this._clientConfig
    }
    set clientConfig(x: WebhookClientConfigHelper) {
        this._clientConfig = x
    }
    $clientConfig(x: WebhookClientConfigHelper) {
        this.clientConfig = x; return this
    }

    _failurePolicy: string;
    get failurePolicy(): string {
        return this._failurePolicy
    }
    set failurePolicy(x: string) {
        this._failurePolicy = x
    }
    $failurePolicy(x: string) {
        this.failurePolicy = x; return this
    }

    _matchPolicy: string;
    get matchPolicy(): string {
        return this._matchPolicy
    }
    set matchPolicy(x: string) {
        this._matchPolicy = x
    }
    $matchPolicy(x: string) {
        this.matchPolicy = x; return this
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

    _objectSelector: LabelSelectorHelper;
    get objectSelector(): LabelSelectorHelper {
        return this._objectSelector
    }
    set objectSelector(x: LabelSelectorHelper) {
        this._objectSelector = x
    }
    $objectSelector(x: LabelSelectorHelper) {
        this.objectSelector = x; return this
    }

    _rules: Array<RuleWithOperations>;
    get rules(): Array<RuleWithOperations> {
        return this._rules
    }
    set rules(x: Array<RuleWithOperations>) {
        this._rules = this.set(this.rules, x)
    }
    $rules(x: Array<RuleWithOperations>) {
        this.rules = x; return this
    }

    _sideEffects: string;
    get sideEffects(): string {
        return this._sideEffects
    }
    set sideEffects(x: string) {
        this._sideEffects = x
    }
    $sideEffects(x: string) {
        this.sideEffects = x; return this
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

export interface ValidatingWebhookConfigurationHelper extends ValidatingWebhookConfiguration {
    $metadata(x: ObjectMetaHelper): ValidatingWebhookConfigurationHelper;
    $webhooks(x: Array<ValidatingWebhook>): ValidatingWebhookConfigurationHelper;
}

/** ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it. */
export class ValidatingWebhookConfigurationHelper extends ResourceTemplate implements ValidatingWebhookConfigurationHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "ValidatingWebhookConfiguration", "admissionregistration.k8s.io/v1")
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

    _webhooks: Array<ValidatingWebhook>;
    get webhooks(): Array<ValidatingWebhook> {
        return this._webhooks
    }
    set webhooks(x: Array<ValidatingWebhook>) {
        this._webhooks = this.set(this.webhooks, x)
    }
    $webhooks(x: Array<ValidatingWebhook>) {
        this.webhooks = x; return this
    }
}

export interface ValidatingWebhookConfigurationListHelper extends ValidatingWebhookConfigurationList {
    $items(x: Array<ValidatingWebhookConfiguration>): ValidatingWebhookConfigurationListHelper;
    $metadata(x: ListMetaHelper): ValidatingWebhookConfigurationListHelper;
}

/** ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration. */
export class ValidatingWebhookConfigurationListHelper extends ResourceTemplate implements ValidatingWebhookConfigurationListHelper {
    constructor(nameOrObject: string | any, namespace: string) {
        super(nameOrObject, namespace, "ValidatingWebhookConfigurationList", "admissionregistration.k8s.io/v1")
    }

    _items: Array<ValidatingWebhookConfiguration>;
    get items(): Array<ValidatingWebhookConfiguration> {
        return this._items
    }
    set items(x: Array<ValidatingWebhookConfiguration>) {
        this._items = this.set(this.items, x)
    }
    $items(x: Array<ValidatingWebhookConfiguration>) {
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

export interface WebhookClientConfigHelper extends WebhookClientConfig {
    $caBundle(x: string): WebhookClientConfigHelper;
    $service(x: ServiceReferenceHelper): WebhookClientConfigHelper;
    $url(x: string): WebhookClientConfigHelper;
}

/** WebhookClientConfig contains the information to make a TLS connection with the webhook */
export class WebhookClientConfigHelper extends Template implements WebhookClientConfigHelper {
    constructor(obj: any) {
        super(obj)
    }

    _caBundle: string;
    get caBundle(): string {
        return this._caBundle
    }
    set caBundle(x: string) {
        this._caBundle = x
    }
    $caBundle(x: string) {
        this.caBundle = x; return this
    }

    _service: ServiceReferenceHelper;
    get service(): ServiceReferenceHelper {
        return this._service
    }
    set service(x: ServiceReferenceHelper) {
        this._service = x
    }
    $service(x: ServiceReferenceHelper) {
        this.service = x; return this
    }

    _url: string;
    get url(): string {
        return this._url
    }
    set url(x: string) {
        this._url = x
    }
    $url(x: string) {
        this.url = x; return this
    }
}
