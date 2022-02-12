import { ResourceTemplate } from "../resourceTemplate";
import { MutatingWebhook, MutatingWebhookConfiguration, RuleWithOperations, ServiceReference, ValidatingWebhook, ValidatingWebhookConfiguration, WebhookClientConfig } from "./v1";
import { LabelSelector, ListMeta, ObjectMeta } from "../meta/v1";

/** MutatingWebhook describes an admission webhook and the resources and operations it applies to. */
export class MutatingWebhookHelper extends ResourceTemplate {
    static kind = 'MutatingWebhook';
    static apiVersion = 'admissionregistration/v1';

    admissionReviewVersions(admissionReviewVersions: Array<string>): MutatingWebhookHelper {
        if (!Array.isArray(admissionReviewVersions)) { admissionReviewVersions = [admissionReviewVersions] }
        if (!this._template.admissionReviewVersions) this._template.admissionReviewVersions = admissionReviewVersions
        this._template.admissionReviewVersions = [...this._template.admissionReviewVersions, ...admissionReviewVersions]
        return this
    }

    clientConfig(clientConfig: WebhookClientConfig): MutatingWebhookHelper {
        if (!this._template.clientConfig) this._template.clientConfig = []
        this._template.clientConfig = {
            ...this._template.clientConfig,
            ...clientConfig
        }
        return this
    }

    failurePolicy(failurePolicy: string): MutatingWebhookHelper {
        this._template.failurePolicy = failurePolicy
        return this
    }

    matchPolicy(matchPolicy: string): MutatingWebhookHelper {
        this._template.matchPolicy = matchPolicy
        return this
    }

    namespaceSelector(namespaceSelector: LabelSelector): MutatingWebhookHelper {
        if (!this._template.namespaceSelector) this._template.namespaceSelector = []
        this._template.namespaceSelector = {
            ...this._template.namespaceSelector,
            ...namespaceSelector
        }
        return this
    }

    objectSelector(objectSelector: LabelSelector): MutatingWebhookHelper {
        if (!this._template.objectSelector) this._template.objectSelector = []
        this._template.objectSelector = {
            ...this._template.objectSelector,
            ...objectSelector
        }
        return this
    }

    reinvocationPolicy(reinvocationPolicy: string): MutatingWebhookHelper {
        this._template.reinvocationPolicy = reinvocationPolicy
        return this
    }

    rules(rules: Array<RuleWithOperations>): MutatingWebhookHelper {
        if (!Array.isArray(rules)) { rules = [rules] }
        if (!this._template.rules) this._template.rules = rules
        this._template.rules = [...this._template.rules, ...rules]
        return this
    }

    sideEffects(sideEffects: string): MutatingWebhookHelper {
        this._template.sideEffects = sideEffects
        return this
    }

    timeoutSeconds(timeoutSeconds: number): MutatingWebhookHelper {
        this._template.timeoutSeconds = timeoutSeconds
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = MutatingWebhookHelper.kind
        this._template.apiVersion = MutatingWebhookHelper.apiVersion
    }
}

/** MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object. */
export class MutatingWebhookConfigurationHelper extends ResourceTemplate {
    static kind = 'MutatingWebhookConfiguration';
    static apiVersion = 'admissionregistration/v1';

    metadata(metadata: ObjectMeta): MutatingWebhookConfigurationHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    webhooks(webhooks: Array<MutatingWebhook>): MutatingWebhookConfigurationHelper {
        if (!Array.isArray(webhooks)) { webhooks = [webhooks] }
        if (!this._template.webhooks) this._template.webhooks = webhooks
        this._template.webhooks = [...this._template.webhooks, ...webhooks]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = MutatingWebhookConfigurationHelper.kind
        this._template.apiVersion = MutatingWebhookConfigurationHelper.apiVersion
    }
}

/** MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration. */
export class MutatingWebhookConfigurationListHelper extends ResourceTemplate {
    static kind = 'MutatingWebhookConfigurationList';
    static apiVersion = 'admissionregistration/v1';

    items(items: Array<MutatingWebhookConfiguration>): MutatingWebhookConfigurationListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): MutatingWebhookConfigurationListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = MutatingWebhookConfigurationListHelper.kind
        this._template.apiVersion = MutatingWebhookConfigurationListHelper.apiVersion
    }
}

/** RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid. */
export class RuleWithOperationsHelper extends ResourceTemplate {
    static kind = 'RuleWithOperations';
    static apiVersion = 'admissionregistration/v1';

    apiGroups(apiGroups: Array<string>): RuleWithOperationsHelper {
        if (!Array.isArray(apiGroups)) { apiGroups = [apiGroups] }
        if (!this._template.apiGroups) this._template.apiGroups = apiGroups
        this._template.apiGroups = [...this._template.apiGroups, ...apiGroups]
        return this
    }

    apiVersions(apiVersions: Array<string>): RuleWithOperationsHelper {
        if (!Array.isArray(apiVersions)) { apiVersions = [apiVersions] }
        if (!this._template.apiVersions) this._template.apiVersions = apiVersions
        this._template.apiVersions = [...this._template.apiVersions, ...apiVersions]
        return this
    }

    operations(operations: Array<string>): RuleWithOperationsHelper {
        if (!Array.isArray(operations)) { operations = [operations] }
        if (!this._template.operations) this._template.operations = operations
        this._template.operations = [...this._template.operations, ...operations]
        return this
    }

    resources(resources: Array<string>): RuleWithOperationsHelper {
        if (!Array.isArray(resources)) { resources = [resources] }
        if (!this._template.resources) this._template.resources = resources
        this._template.resources = [...this._template.resources, ...resources]
        return this
    }

    scope(scope: string): RuleWithOperationsHelper {
        this._template.scope = scope
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = RuleWithOperationsHelper.kind
        this._template.apiVersion = RuleWithOperationsHelper.apiVersion
    }
}

/** ServiceReference holds a reference to Service.legacy.k8s.io */
export class ServiceReferenceHelper extends ResourceTemplate {
    static kind = 'ServiceReference';
    static apiVersion = 'admissionregistration/v1';

    path(path: string): ServiceReferenceHelper {
        this._template.path = path
        return this
    }

    port(port: number): ServiceReferenceHelper {
        this._template.port = port
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ServiceReferenceHelper.kind
        this._template.apiVersion = ServiceReferenceHelper.apiVersion
    }
}

/** ValidatingWebhook describes an admission webhook and the resources and operations it applies to. */
export class ValidatingWebhookHelper extends ResourceTemplate {
    static kind = 'ValidatingWebhook';
    static apiVersion = 'admissionregistration/v1';

    admissionReviewVersions(admissionReviewVersions: Array<string>): ValidatingWebhookHelper {
        if (!Array.isArray(admissionReviewVersions)) { admissionReviewVersions = [admissionReviewVersions] }
        if (!this._template.admissionReviewVersions) this._template.admissionReviewVersions = admissionReviewVersions
        this._template.admissionReviewVersions = [...this._template.admissionReviewVersions, ...admissionReviewVersions]
        return this
    }

    clientConfig(clientConfig: WebhookClientConfig): ValidatingWebhookHelper {
        if (!this._template.clientConfig) this._template.clientConfig = []
        this._template.clientConfig = {
            ...this._template.clientConfig,
            ...clientConfig
        }
        return this
    }

    failurePolicy(failurePolicy: string): ValidatingWebhookHelper {
        this._template.failurePolicy = failurePolicy
        return this
    }

    matchPolicy(matchPolicy: string): ValidatingWebhookHelper {
        this._template.matchPolicy = matchPolicy
        return this
    }

    namespaceSelector(namespaceSelector: LabelSelector): ValidatingWebhookHelper {
        if (!this._template.namespaceSelector) this._template.namespaceSelector = []
        this._template.namespaceSelector = {
            ...this._template.namespaceSelector,
            ...namespaceSelector
        }
        return this
    }

    objectSelector(objectSelector: LabelSelector): ValidatingWebhookHelper {
        if (!this._template.objectSelector) this._template.objectSelector = []
        this._template.objectSelector = {
            ...this._template.objectSelector,
            ...objectSelector
        }
        return this
    }

    rules(rules: Array<RuleWithOperations>): ValidatingWebhookHelper {
        if (!Array.isArray(rules)) { rules = [rules] }
        if (!this._template.rules) this._template.rules = rules
        this._template.rules = [...this._template.rules, ...rules]
        return this
    }

    sideEffects(sideEffects: string): ValidatingWebhookHelper {
        this._template.sideEffects = sideEffects
        return this
    }

    timeoutSeconds(timeoutSeconds: number): ValidatingWebhookHelper {
        this._template.timeoutSeconds = timeoutSeconds
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ValidatingWebhookHelper.kind
        this._template.apiVersion = ValidatingWebhookHelper.apiVersion
    }
}

/** ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it. */
export class ValidatingWebhookConfigurationHelper extends ResourceTemplate {
    static kind = 'ValidatingWebhookConfiguration';
    static apiVersion = 'admissionregistration/v1';

    metadata(metadata: ObjectMeta): ValidatingWebhookConfigurationHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    webhooks(webhooks: Array<ValidatingWebhook>): ValidatingWebhookConfigurationHelper {
        if (!Array.isArray(webhooks)) { webhooks = [webhooks] }
        if (!this._template.webhooks) this._template.webhooks = webhooks
        this._template.webhooks = [...this._template.webhooks, ...webhooks]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ValidatingWebhookConfigurationHelper.kind
        this._template.apiVersion = ValidatingWebhookConfigurationHelper.apiVersion
    }
}

/** ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration. */
export class ValidatingWebhookConfigurationListHelper extends ResourceTemplate {
    static kind = 'ValidatingWebhookConfigurationList';
    static apiVersion = 'admissionregistration/v1';

    items(items: Array<ValidatingWebhookConfiguration>): ValidatingWebhookConfigurationListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): ValidatingWebhookConfigurationListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ValidatingWebhookConfigurationListHelper.kind
        this._template.apiVersion = ValidatingWebhookConfigurationListHelper.apiVersion
    }
}

/** WebhookClientConfig contains the information to make a TLS connection with the webhook */
export class WebhookClientConfigHelper extends ResourceTemplate {
    static kind = 'WebhookClientConfig';
    static apiVersion = 'admissionregistration/v1';

    caBundle(caBundle: string): WebhookClientConfigHelper {
        this._template.caBundle = caBundle
        return this
    }

    service(service: ServiceReference): WebhookClientConfigHelper {
        if (!this._template.service) this._template.service = []
        this._template.service = {
            ...this._template.service,
            ...service
        }
        return this
    }

    url(url: string): WebhookClientConfigHelper {
        this._template.url = url
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = WebhookClientConfigHelper.kind
        this._template.apiVersion = WebhookClientConfigHelper.apiVersion
    }
}
