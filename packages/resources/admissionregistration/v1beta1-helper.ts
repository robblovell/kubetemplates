import { ResourceTemplate, Template } from "../resourceTemplate";
import { MutatingWebhook, MutatingWebhookConfiguration, MutatingWebhookConfigurationList, RuleWithOperations, ServiceReference, ValidatingWebhook, ValidatingWebhookConfiguration, ValidatingWebhookConfigurationList, WebhookClientConfig } from "./v1beta1";
import { LabelSelector, ListMeta, ObjectMeta } from "../meta/v1";

export interface MutatingWebhookHelper extends MutatingWebhook {
    $admissionReviewVersions(x: Array<string>): MutatingWebhookHelper;
    clientConfig: WebhookClientConfigHelper;
    $clientConfig(x: WebhookClientConfigHelper): MutatingWebhookHelper;
    $failurePolicy(x: string): MutatingWebhookHelper;
    $matchPolicy(x: string): MutatingWebhookHelper;
    namespaceSelector: LabelSelectorHelper;
    $namespaceSelector(x: LabelSelectorHelper): MutatingWebhookHelper;
    objectSelector: LabelSelectorHelper;
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
    $AdmissionReviewVersions(x: Array<string>) {
        this.admissionReviewVersions = x; return this
    }

    _clientConfig: WebhookClientConfigHelper;
    get clientConfig(): WebhookClientConfigHelper {
        return this._clientConfig
    }
    set clientConfig(x: WebhookClientConfigHelper) {
        this._clientConfig = x
    }
    $ClientConfig(x: WebhookClientConfigHelper) {
        this.clientConfig = x; return this
    }

    _failurePolicy: string;
    get failurePolicy(): string {
        return this._failurePolicy
    }
    set failurePolicy(x: string) {
        this._failurePolicy = x
    }
    $FailurePolicy(x: string) {
        this.failurePolicy = x; return this
    }

    _matchPolicy: string;
    get matchPolicy(): string {
        return this._matchPolicy
    }
    set matchPolicy(x: string) {
        this._matchPolicy = x
    }
    $MatchPolicy(x: string) {
        this.matchPolicy = x; return this
    }

    _namespaceSelector: LabelSelectorHelper;
    get namespaceSelector(): LabelSelectorHelper {
        return this._namespaceSelector
    }
    set namespaceSelector(x: LabelSelectorHelper) {
        this._namespaceSelector = x
    }
    $NamespaceSelector(x: LabelSelectorHelper) {
        this.namespaceSelector = x; return this
    }

    _objectSelector: LabelSelectorHelper;
    get objectSelector(): LabelSelectorHelper {
        return this._objectSelector
    }
    set objectSelector(x: LabelSelectorHelper) {
        this._objectSelector = x
    }
    $ObjectSelector(x: LabelSelectorHelper) {
        this.objectSelector = x; return this
    }

    _reinvocationPolicy: string;
    get reinvocationPolicy(): string {
        return this._reinvocationPolicy
    }
    set reinvocationPolicy(x: string) {
        this._reinvocationPolicy = x
    }
    $ReinvocationPolicy(x: string) {
        this.reinvocationPolicy = x; return this
    }

    _rules: Array<RuleWithOperations>;
    get rules(): Array<RuleWithOperations> {
        return this._rules
    }
    set rules(x: Array<RuleWithOperations>) {
        this._rules = this.set(this.rules, x)
    }
    $Rules(x: Array<RuleWithOperations>) {
        this.rules = x; return this
    }

    _sideEffects: string;
    get sideEffects(): string {
        return this._sideEffects
    }
    set sideEffects(x: string) {
        this._sideEffects = x
    }
    $SideEffects(x: string) {
        this.sideEffects = x; return this
    }

    _timeoutSeconds: number;
    get timeoutSeconds(): number {
        return this._timeoutSeconds
    }
    set timeoutSeconds(x: number) {
        this._timeoutSeconds = x
    }
    $TimeoutSeconds(x: number) {
        this.timeoutSeconds = x; return this
    }
}

export interface MutatingWebhookConfigurationHelper extends MutatingWebhookConfiguration {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): MutatingWebhookConfigurationHelper;
    $webhooks(x: Array<MutatingWebhook>): MutatingWebhookConfigurationHelper;
}

/** MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object. Deprecated in v1.16, planned for removal in v1.19. Use admissionregistration.k8s.io/v1 MutatingWebhookConfiguration instead. */
export class MutatingWebhookConfigurationHelper extends ResourceTemplate implements MutatingWebhookConfigurationHelper {
    static kind = 'MutatingWebhookConfiguration';
    static apiVersion = 'admissionregistration/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, MutatingWebhookConfigurationHelper.kind, MutatingWebhookConfigurationHelper.apiVersion)
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

    _webhooks: Array<MutatingWebhook>;
    get webhooks(): Array<MutatingWebhook> {
        return this._webhooks
    }
    set webhooks(x: Array<MutatingWebhook>) {
        this._webhooks = this.set(this.webhooks, x)
    }
    $Webhooks(x: Array<MutatingWebhook>) {
        this.webhooks = x; return this
    }
}

export interface MutatingWebhookConfigurationListHelper extends MutatingWebhookConfigurationList {
    $items(x: Array<MutatingWebhookConfiguration>): MutatingWebhookConfigurationListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): MutatingWebhookConfigurationListHelper;
}

/** MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration. */
export class MutatingWebhookConfigurationListHelper extends ResourceTemplate implements MutatingWebhookConfigurationListHelper {
    static kind = 'MutatingWebhookConfigurationList';
    static apiVersion = 'admissionregistration/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, MutatingWebhookConfigurationListHelper.kind, MutatingWebhookConfigurationListHelper.apiVersion)
    }

    _items: Array<MutatingWebhookConfiguration>;
    get items(): Array<MutatingWebhookConfiguration> {
        return this._items
    }
    set items(x: Array<MutatingWebhookConfiguration>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<MutatingWebhookConfiguration>) {
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
    $ApiGroups(x: Array<string>) {
        this.apiGroups = x; return this
    }

    _apiVersions: Array<string>;
    get apiVersions(): Array<string> {
        return this._apiVersions
    }
    set apiVersions(x: Array<string>) {
        this._apiVersions = this.set(this.apiVersions, x)
    }
    $ApiVersions(x: Array<string>) {
        this.apiVersions = x; return this
    }

    _operations: Array<string>;
    get operations(): Array<string> {
        return this._operations
    }
    set operations(x: Array<string>) {
        this._operations = this.set(this.operations, x)
    }
    $Operations(x: Array<string>) {
        this.operations = x; return this
    }

    _resources: Array<string>;
    get resources(): Array<string> {
        return this._resources
    }
    set resources(x: Array<string>) {
        this._resources = this.set(this.resources, x)
    }
    $Resources(x: Array<string>) {
        this.resources = x; return this
    }

    _scope: string;
    get scope(): string {
        return this._scope
    }
    set scope(x: string) {
        this._scope = x
    }
    $Scope(x: string) {
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
    $Path(x: string) {
        this.path = x; return this
    }

    _port: number;
    get port(): number {
        return this._port
    }
    set port(x: number) {
        this._port = x
    }
    $Port(x: number) {
        this.port = x; return this
    }
}

export interface ValidatingWebhookHelper extends ValidatingWebhook {
    $admissionReviewVersions(x: Array<string>): ValidatingWebhookHelper;
    clientConfig: WebhookClientConfigHelper;
    $clientConfig(x: WebhookClientConfigHelper): ValidatingWebhookHelper;
    $failurePolicy(x: string): ValidatingWebhookHelper;
    $matchPolicy(x: string): ValidatingWebhookHelper;
    namespaceSelector: LabelSelectorHelper;
    $namespaceSelector(x: LabelSelectorHelper): ValidatingWebhookHelper;
    objectSelector: LabelSelectorHelper;
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
    $AdmissionReviewVersions(x: Array<string>) {
        this.admissionReviewVersions = x; return this
    }

    _clientConfig: WebhookClientConfigHelper;
    get clientConfig(): WebhookClientConfigHelper {
        return this._clientConfig
    }
    set clientConfig(x: WebhookClientConfigHelper) {
        this._clientConfig = x
    }
    $ClientConfig(x: WebhookClientConfigHelper) {
        this.clientConfig = x; return this
    }

    _failurePolicy: string;
    get failurePolicy(): string {
        return this._failurePolicy
    }
    set failurePolicy(x: string) {
        this._failurePolicy = x
    }
    $FailurePolicy(x: string) {
        this.failurePolicy = x; return this
    }

    _matchPolicy: string;
    get matchPolicy(): string {
        return this._matchPolicy
    }
    set matchPolicy(x: string) {
        this._matchPolicy = x
    }
    $MatchPolicy(x: string) {
        this.matchPolicy = x; return this
    }

    _namespaceSelector: LabelSelectorHelper;
    get namespaceSelector(): LabelSelectorHelper {
        return this._namespaceSelector
    }
    set namespaceSelector(x: LabelSelectorHelper) {
        this._namespaceSelector = x
    }
    $NamespaceSelector(x: LabelSelectorHelper) {
        this.namespaceSelector = x; return this
    }

    _objectSelector: LabelSelectorHelper;
    get objectSelector(): LabelSelectorHelper {
        return this._objectSelector
    }
    set objectSelector(x: LabelSelectorHelper) {
        this._objectSelector = x
    }
    $ObjectSelector(x: LabelSelectorHelper) {
        this.objectSelector = x; return this
    }

    _rules: Array<RuleWithOperations>;
    get rules(): Array<RuleWithOperations> {
        return this._rules
    }
    set rules(x: Array<RuleWithOperations>) {
        this._rules = this.set(this.rules, x)
    }
    $Rules(x: Array<RuleWithOperations>) {
        this.rules = x; return this
    }

    _sideEffects: string;
    get sideEffects(): string {
        return this._sideEffects
    }
    set sideEffects(x: string) {
        this._sideEffects = x
    }
    $SideEffects(x: string) {
        this.sideEffects = x; return this
    }

    _timeoutSeconds: number;
    get timeoutSeconds(): number {
        return this._timeoutSeconds
    }
    set timeoutSeconds(x: number) {
        this._timeoutSeconds = x
    }
    $TimeoutSeconds(x: number) {
        this.timeoutSeconds = x; return this
    }
}

export interface ValidatingWebhookConfigurationHelper extends ValidatingWebhookConfiguration {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): ValidatingWebhookConfigurationHelper;
    $webhooks(x: Array<ValidatingWebhook>): ValidatingWebhookConfigurationHelper;
}

/** ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it. Deprecated in v1.16, planned for removal in v1.19. Use admissionregistration.k8s.io/v1 ValidatingWebhookConfiguration instead. */
export class ValidatingWebhookConfigurationHelper extends ResourceTemplate implements ValidatingWebhookConfigurationHelper {
    static kind = 'ValidatingWebhookConfiguration';
    static apiVersion = 'admissionregistration/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ValidatingWebhookConfigurationHelper.kind, ValidatingWebhookConfigurationHelper.apiVersion)
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

    _webhooks: Array<ValidatingWebhook>;
    get webhooks(): Array<ValidatingWebhook> {
        return this._webhooks
    }
    set webhooks(x: Array<ValidatingWebhook>) {
        this._webhooks = this.set(this.webhooks, x)
    }
    $Webhooks(x: Array<ValidatingWebhook>) {
        this.webhooks = x; return this
    }
}

export interface ValidatingWebhookConfigurationListHelper extends ValidatingWebhookConfigurationList {
    $items(x: Array<ValidatingWebhookConfiguration>): ValidatingWebhookConfigurationListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): ValidatingWebhookConfigurationListHelper;
}

/** ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration. */
export class ValidatingWebhookConfigurationListHelper extends ResourceTemplate implements ValidatingWebhookConfigurationListHelper {
    static kind = 'ValidatingWebhookConfigurationList';
    static apiVersion = 'admissionregistration/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ValidatingWebhookConfigurationListHelper.kind, ValidatingWebhookConfigurationListHelper.apiVersion)
    }

    _items: Array<ValidatingWebhookConfiguration>;
    get items(): Array<ValidatingWebhookConfiguration> {
        return this._items
    }
    set items(x: Array<ValidatingWebhookConfiguration>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<ValidatingWebhookConfiguration>) {
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

export interface WebhookClientConfigHelper extends WebhookClientConfig {
    $caBundle(x: string): WebhookClientConfigHelper;
    service: ServiceReferenceHelper;
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
    $CaBundle(x: string) {
        this.caBundle = x; return this
    }

    _service: ServiceReferenceHelper;
    get service(): ServiceReferenceHelper {
        return this._service
    }
    set service(x: ServiceReferenceHelper) {
        this._service = x
    }
    $Service(x: ServiceReferenceHelper) {
        this.service = x; return this
    }

    _url: string;
    get url(): string {
        return this._url
    }
    set url(x: string) {
        this._url = x
    }
    $Url(x: string) {
        this.url = x; return this
    }
}
