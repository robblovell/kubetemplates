import { ResourceTemplate, Template } from "../resourceTemplate";
import { MutatingWebhook, MutatingWebhookConfiguration, MutatingWebhookConfigurationList, RuleWithOperations, ServiceReference, ValidatingWebhook, ValidatingWebhookConfiguration, ValidatingWebhookConfigurationList, WebhookClientConfig } from "./v1beta1";
import { LabelSelector, ListMeta, ObjectMeta } from "../meta/v1";

export interface MutatingWebhookHelper extends MutatingWebhook {
    $admissionReviewVersions(x: any): any;
    $clientConfig(x: any): any;
    $failurePolicy(x: any): any;
    $matchPolicy(x: any): any;
    $namespaceSelector(x: any): any;
    $objectSelector(x: any): any;
    $reinvocationPolicy(x: any): any;
    $rules(x: any): any;
    $sideEffects(x: any): any;
    $timeoutSeconds(x: any): any;
}

/** MutatingWebhook describes an admission webhook and the resources and operations it applies to. */
export class MutatingWebhookHelper extends Template implements MutatingWebhookHelper {
    constructor(obj: any) {
        super(obj)
    }

    _admissionReviewVersions: any;
    get admissionReviewVersions(): any /*Array<string>*/ {
        return this._admissionReviewVersions
    }
    set admissionReviewVersions(x: any /*Array<string>*/) {
        this._admissionReviewVersions = this.set(this.admissionReviewVersions, x)
    }
    setAdmissionReviewVersions(x: any /*Array<string>*/) {
        this.admissionReviewVersions = x; return this
    }

    _clientConfig: any;
    get clientConfig(): any /*WebhookClientConfigHelper*/ {
        return this._clientConfig
    }
    set clientConfig(x: any /*WebhookClientConfigHelper*/) {
        this._clientConfig = x
    }
    setClientConfig(x: any /*WebhookClientConfigHelper*/) {
        this.clientConfig = x; return this
    }

    _failurePolicy: any;
    get failurePolicy(): any /*string*/ {
        return this._failurePolicy
    }
    set failurePolicy(x: any /*string*/) {
        this._failurePolicy = x
    }
    setFailurePolicy(x: any /*string*/) {
        this.failurePolicy = x; return this
    }

    _matchPolicy: any;
    get matchPolicy(): any /*string*/ {
        return this._matchPolicy
    }
    set matchPolicy(x: any /*string*/) {
        this._matchPolicy = x
    }
    setMatchPolicy(x: any /*string*/) {
        this.matchPolicy = x; return this
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

    _objectSelector: any;
    get objectSelector(): any /*LabelSelectorHelper*/ {
        return this._objectSelector
    }
    set objectSelector(x: any /*LabelSelectorHelper*/) {
        this._objectSelector = x
    }
    setObjectSelector(x: any /*LabelSelectorHelper*/) {
        this.objectSelector = x; return this
    }

    _reinvocationPolicy: any;
    get reinvocationPolicy(): any /*string*/ {
        return this._reinvocationPolicy
    }
    set reinvocationPolicy(x: any /*string*/) {
        this._reinvocationPolicy = x
    }
    setReinvocationPolicy(x: any /*string*/) {
        this.reinvocationPolicy = x; return this
    }

    _rules: any;
    get rules(): any /*Array<RuleWithOperations>*/ {
        return this._rules
    }
    set rules(x: any /*Array<RuleWithOperations>*/) {
        this._rules = this.set(this.rules, x)
    }
    setRules(x: any /*Array<RuleWithOperations>*/) {
        this.rules = x; return this
    }

    _sideEffects: any;
    get sideEffects(): any /*string*/ {
        return this._sideEffects
    }
    set sideEffects(x: any /*string*/) {
        this._sideEffects = x
    }
    setSideEffects(x: any /*string*/) {
        this.sideEffects = x; return this
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

export interface MutatingWebhookConfigurationHelper extends MutatingWebhookConfiguration {
    $metadata(x: any): any;
    $webhooks(x: any): any;
}

/** MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object. Deprecated in v1.16, planned for removal in v1.19. Use admissionregistration.k8s.io/v1 MutatingWebhookConfiguration instead. */
export class MutatingWebhookConfigurationHelper extends ResourceTemplate implements MutatingWebhookConfigurationHelper {
    static kind = 'MutatingWebhookConfiguration';
    static apiVersion = 'admissionregistration/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, MutatingWebhookConfigurationHelper.kind, MutatingWebhookConfigurationHelper.apiVersion)
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

    _webhooks: any;
    get webhooks(): any /*Array<MutatingWebhook>*/ {
        return this._webhooks
    }
    set webhooks(x: any /*Array<MutatingWebhook>*/) {
        this._webhooks = this.set(this.webhooks, x)
    }
    setWebhooks(x: any /*Array<MutatingWebhook>*/) {
        this.webhooks = x; return this
    }
}

export interface MutatingWebhookConfigurationListHelper extends MutatingWebhookConfigurationList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration. */
export class MutatingWebhookConfigurationListHelper extends ResourceTemplate implements MutatingWebhookConfigurationListHelper {
    static kind = 'MutatingWebhookConfigurationList';
    static apiVersion = 'admissionregistration/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, MutatingWebhookConfigurationListHelper.kind, MutatingWebhookConfigurationListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<MutatingWebhookConfiguration>*/ {
        return this._items
    }
    set items(x: any /*Array<MutatingWebhookConfiguration>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<MutatingWebhookConfiguration>*/) {
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

export interface RuleWithOperationsHelper extends RuleWithOperations {
    $apiGroups(x: any): any;
    $apiVersions(x: any): any;
    $operations(x: any): any;
    $resources(x: any): any;
    $scope(x: any): any;
}

/** RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid. */
export class RuleWithOperationsHelper extends Template implements RuleWithOperationsHelper {
    constructor(obj: any) {
        super(obj)
    }

    _apiGroups: any;
    get apiGroups(): any /*Array<string>*/ {
        return this._apiGroups
    }
    set apiGroups(x: any /*Array<string>*/) {
        this._apiGroups = this.set(this.apiGroups, x)
    }
    setApiGroups(x: any /*Array<string>*/) {
        this.apiGroups = x; return this
    }

    _apiVersions: any;
    get apiVersions(): any /*Array<string>*/ {
        return this._apiVersions
    }
    set apiVersions(x: any /*Array<string>*/) {
        this._apiVersions = this.set(this.apiVersions, x)
    }
    setApiVersions(x: any /*Array<string>*/) {
        this.apiVersions = x; return this
    }

    _operations: any;
    get operations(): any /*Array<string>*/ {
        return this._operations
    }
    set operations(x: any /*Array<string>*/) {
        this._operations = this.set(this.operations, x)
    }
    setOperations(x: any /*Array<string>*/) {
        this.operations = x; return this
    }

    _resources: any;
    get resources(): any /*Array<string>*/ {
        return this._resources
    }
    set resources(x: any /*Array<string>*/) {
        this._resources = this.set(this.resources, x)
    }
    setResources(x: any /*Array<string>*/) {
        this.resources = x; return this
    }

    _scope: any;
    get scope(): any /*string*/ {
        return this._scope
    }
    set scope(x: any /*string*/) {
        this._scope = x
    }
    setScope(x: any /*string*/) {
        this.scope = x; return this
    }
}

export interface ServiceReferenceHelper extends ServiceReference {
    $path(x: any): any;
    $port(x: any): any;
}

/** ServiceReference holds a reference to Service.legacy.k8s.io */
export class ServiceReferenceHelper extends Template implements ServiceReferenceHelper {
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
}

export interface ValidatingWebhookHelper extends ValidatingWebhook {
    $admissionReviewVersions(x: any): any;
    $clientConfig(x: any): any;
    $failurePolicy(x: any): any;
    $matchPolicy(x: any): any;
    $namespaceSelector(x: any): any;
    $objectSelector(x: any): any;
    $rules(x: any): any;
    $sideEffects(x: any): any;
    $timeoutSeconds(x: any): any;
}

/** ValidatingWebhook describes an admission webhook and the resources and operations it applies to. */
export class ValidatingWebhookHelper extends Template implements ValidatingWebhookHelper {
    constructor(obj: any) {
        super(obj)
    }

    _admissionReviewVersions: any;
    get admissionReviewVersions(): any /*Array<string>*/ {
        return this._admissionReviewVersions
    }
    set admissionReviewVersions(x: any /*Array<string>*/) {
        this._admissionReviewVersions = this.set(this.admissionReviewVersions, x)
    }
    setAdmissionReviewVersions(x: any /*Array<string>*/) {
        this.admissionReviewVersions = x; return this
    }

    _clientConfig: any;
    get clientConfig(): any /*WebhookClientConfigHelper*/ {
        return this._clientConfig
    }
    set clientConfig(x: any /*WebhookClientConfigHelper*/) {
        this._clientConfig = x
    }
    setClientConfig(x: any /*WebhookClientConfigHelper*/) {
        this.clientConfig = x; return this
    }

    _failurePolicy: any;
    get failurePolicy(): any /*string*/ {
        return this._failurePolicy
    }
    set failurePolicy(x: any /*string*/) {
        this._failurePolicy = x
    }
    setFailurePolicy(x: any /*string*/) {
        this.failurePolicy = x; return this
    }

    _matchPolicy: any;
    get matchPolicy(): any /*string*/ {
        return this._matchPolicy
    }
    set matchPolicy(x: any /*string*/) {
        this._matchPolicy = x
    }
    setMatchPolicy(x: any /*string*/) {
        this.matchPolicy = x; return this
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

    _objectSelector: any;
    get objectSelector(): any /*LabelSelectorHelper*/ {
        return this._objectSelector
    }
    set objectSelector(x: any /*LabelSelectorHelper*/) {
        this._objectSelector = x
    }
    setObjectSelector(x: any /*LabelSelectorHelper*/) {
        this.objectSelector = x; return this
    }

    _rules: any;
    get rules(): any /*Array<RuleWithOperations>*/ {
        return this._rules
    }
    set rules(x: any /*Array<RuleWithOperations>*/) {
        this._rules = this.set(this.rules, x)
    }
    setRules(x: any /*Array<RuleWithOperations>*/) {
        this.rules = x; return this
    }

    _sideEffects: any;
    get sideEffects(): any /*string*/ {
        return this._sideEffects
    }
    set sideEffects(x: any /*string*/) {
        this._sideEffects = x
    }
    setSideEffects(x: any /*string*/) {
        this.sideEffects = x; return this
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

export interface ValidatingWebhookConfigurationHelper extends ValidatingWebhookConfiguration {
    $metadata(x: any): any;
    $webhooks(x: any): any;
}

/** ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it. Deprecated in v1.16, planned for removal in v1.19. Use admissionregistration.k8s.io/v1 ValidatingWebhookConfiguration instead. */
export class ValidatingWebhookConfigurationHelper extends ResourceTemplate implements ValidatingWebhookConfigurationHelper {
    static kind = 'ValidatingWebhookConfiguration';
    static apiVersion = 'admissionregistration/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ValidatingWebhookConfigurationHelper.kind, ValidatingWebhookConfigurationHelper.apiVersion)
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

    _webhooks: any;
    get webhooks(): any /*Array<ValidatingWebhook>*/ {
        return this._webhooks
    }
    set webhooks(x: any /*Array<ValidatingWebhook>*/) {
        this._webhooks = this.set(this.webhooks, x)
    }
    setWebhooks(x: any /*Array<ValidatingWebhook>*/) {
        this.webhooks = x; return this
    }
}

export interface ValidatingWebhookConfigurationListHelper extends ValidatingWebhookConfigurationList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration. */
export class ValidatingWebhookConfigurationListHelper extends ResourceTemplate implements ValidatingWebhookConfigurationListHelper {
    static kind = 'ValidatingWebhookConfigurationList';
    static apiVersion = 'admissionregistration/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, ValidatingWebhookConfigurationListHelper.kind, ValidatingWebhookConfigurationListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<ValidatingWebhookConfiguration>*/ {
        return this._items
    }
    set items(x: any /*Array<ValidatingWebhookConfiguration>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<ValidatingWebhookConfiguration>*/) {
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

export interface WebhookClientConfigHelper extends WebhookClientConfig {
    $caBundle(x: any): any;
    $service(x: any): any;
    $url(x: any): any;
}

/** WebhookClientConfig contains the information to make a TLS connection with the webhook */
export class WebhookClientConfigHelper extends Template implements WebhookClientConfigHelper {
    constructor(obj: any) {
        super(obj)
    }

    _caBundle: any;
    get caBundle(): any /*string*/ {
        return this._caBundle
    }
    set caBundle(x: any /*string*/) {
        this._caBundle = x
    }
    setCaBundle(x: any /*string*/) {
        this.caBundle = x; return this
    }

    _service: any;
    get service(): any /*ServiceReferenceHelper*/ {
        return this._service
    }
    set service(x: any /*ServiceReferenceHelper*/) {
        this._service = x
    }
    setService(x: any /*ServiceReferenceHelper*/) {
        this.service = x; return this
    }

    _url: any;
    get url(): any /*string*/ {
        return this._url
    }
    set url(x: any /*string*/) {
        this._url = x
    }
    setUrl(x: any /*string*/) {
        this.url = x; return this
    }
}
