import { ResourceTemplate } from "../resourceTemplate";
import { CustomResourceColumnDefinition, CustomResourceConversion, CustomResourceDefinition, CustomResourceDefinitionCondition, CustomResourceDefinitionNames, CustomResourceDefinitionSpec, CustomResourceDefinitionStatus, CustomResourceDefinitionVersion, CustomResourceSubresourceScale, CustomResourceSubresourceStatus, CustomResourceSubresources, CustomResourceValidation, JSONSchemaProps, ServiceReference, WebhookClientConfig } from "./v1beta1";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";

/** CustomResourceColumnDefinition specifies a column for server side printing. */
export class CustomResourceColumnDefinitionHelper extends ResourceTemplate {
    static kind = 'CustomResourceColumnDefinition';
    static apiVersion = 'apiextensions/v1beta1';

    JSONPath(JSONPath: string): CustomResourceColumnDefinitionHelper {
        this._template.JSONPath = JSONPath
        return this
    }

    description(description: string): CustomResourceColumnDefinitionHelper {
        this._template.description = description
        return this
    }

    format(format: string): CustomResourceColumnDefinitionHelper {
        this._template.format = format
        return this
    }

    priority(priority: number): CustomResourceColumnDefinitionHelper {
        this._template.priority = priority
        return this
    }

    type(type: string): CustomResourceColumnDefinitionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CustomResourceColumnDefinitionHelper.kind
        this._template.apiVersion = CustomResourceColumnDefinitionHelper.apiVersion
    }
}

/** CustomResourceConversion describes how to convert different versions of a CR. */
export class CustomResourceConversionHelper extends ResourceTemplate {
    static kind = 'CustomResourceConversion';
    static apiVersion = 'apiextensions/v1beta1';

    conversionReviewVersions(conversionReviewVersions: Array<string>): CustomResourceConversionHelper {
        if (!Array.isArray(conversionReviewVersions)) { conversionReviewVersions = [conversionReviewVersions] }
        if (!this._template.conversionReviewVersions) this._template.conversionReviewVersions = conversionReviewVersions
        this._template.conversionReviewVersions = [...this._template.conversionReviewVersions, ...conversionReviewVersions]
        return this
    }

    strategy(strategy: string): CustomResourceConversionHelper {
        this._template.strategy = strategy
        return this
    }

    webhookClientConfig(webhookClientConfig: WebhookClientConfig): CustomResourceConversionHelper {
        if (!this._template.webhookClientConfig) this._template.webhookClientConfig = []
        this._template.webhookClientConfig = {
            ...this._template.webhookClientConfig,
            ...webhookClientConfig
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CustomResourceConversionHelper.kind
        this._template.apiVersion = CustomResourceConversionHelper.apiVersion
    }
}

/** CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>. Deprecated in v1.16, planned for removal in v1.22. Use apiextensions.k8s.io/v1 CustomResourceDefinition instead. */
export class CustomResourceDefinitionHelper extends ResourceTemplate {
    static kind = 'CustomResourceDefinition';
    static apiVersion = 'apiextensions/v1beta1';

    metadata(metadata: ObjectMeta): CustomResourceDefinitionHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: CustomResourceDefinitionSpec): CustomResourceDefinitionHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: CustomResourceDefinitionStatus): CustomResourceDefinitionHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CustomResourceDefinitionHelper.kind
        this._template.apiVersion = CustomResourceDefinitionHelper.apiVersion
    }
}

/** CustomResourceDefinitionCondition contains details for the current condition of this pod. */
export class CustomResourceDefinitionConditionHelper extends ResourceTemplate {
    static kind = 'CustomResourceDefinitionCondition';
    static apiVersion = 'apiextensions/v1beta1';

    lastTransitionTime(lastTransitionTime: Time): CustomResourceDefinitionConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    message(message: string): CustomResourceDefinitionConditionHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): CustomResourceDefinitionConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): CustomResourceDefinitionConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): CustomResourceDefinitionConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CustomResourceDefinitionConditionHelper.kind
        this._template.apiVersion = CustomResourceDefinitionConditionHelper.apiVersion
    }
}

/** CustomResourceDefinitionList is a list of CustomResourceDefinition objects. */
export class CustomResourceDefinitionListHelper extends ResourceTemplate {
    static kind = 'CustomResourceDefinitionList';
    static apiVersion = 'apiextensions/v1beta1';

    items(items: Array<CustomResourceDefinition>): CustomResourceDefinitionListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): CustomResourceDefinitionListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CustomResourceDefinitionListHelper.kind
        this._template.apiVersion = CustomResourceDefinitionListHelper.apiVersion
    }
}

/** CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition */
export class CustomResourceDefinitionNamesHelper extends ResourceTemplate {
    static kind = 'CustomResourceDefinitionNames';
    static apiVersion = 'apiextensions/v1beta1';

    categories(categories: Array<string>): CustomResourceDefinitionNamesHelper {
        if (!Array.isArray(categories)) { categories = [categories] }
        if (!this._template.categories) this._template.categories = categories
        this._template.categories = [...this._template.categories, ...categories]
        return this
    }

    listKind(listKind: string): CustomResourceDefinitionNamesHelper {
        this._template.listKind = listKind
        return this
    }

    plural(plural: string): CustomResourceDefinitionNamesHelper {
        this._template.plural = plural
        return this
    }

    shortNames(shortNames: Array<string>): CustomResourceDefinitionNamesHelper {
        if (!Array.isArray(shortNames)) { shortNames = [shortNames] }
        if (!this._template.shortNames) this._template.shortNames = shortNames
        this._template.shortNames = [...this._template.shortNames, ...shortNames]
        return this
    }

    singular(singular: string): CustomResourceDefinitionNamesHelper {
        this._template.singular = singular
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CustomResourceDefinitionNamesHelper.kind
        this._template.apiVersion = CustomResourceDefinitionNamesHelper.apiVersion
    }
}

/** CustomResourceDefinitionSpec describes how a user wants their resource to appear */
export class CustomResourceDefinitionSpecHelper extends ResourceTemplate {
    static kind = 'CustomResourceDefinitionSpec';
    static apiVersion = 'apiextensions/v1beta1';

    additionalPrinterColumns(additionalPrinterColumns: Array<CustomResourceColumnDefinition>): CustomResourceDefinitionSpecHelper {
        if (!Array.isArray(additionalPrinterColumns)) { additionalPrinterColumns = [additionalPrinterColumns] }
        if (!this._template.additionalPrinterColumns) this._template.additionalPrinterColumns = additionalPrinterColumns
        this._template.additionalPrinterColumns = [...this._template.additionalPrinterColumns, ...additionalPrinterColumns]
        return this
    }

    conversion(conversion: CustomResourceConversion): CustomResourceDefinitionSpecHelper {
        if (!this._template.conversion) this._template.conversion = []
        this._template.conversion = {
            ...this._template.conversion,
            ...conversion
        }
        return this
    }

    group(group: string): CustomResourceDefinitionSpecHelper {
        this._template.group = group
        return this
    }

    names(names: CustomResourceDefinitionNames): CustomResourceDefinitionSpecHelper {
        if (!this._template.names) this._template.names = []
        this._template.names = {
            ...this._template.names,
            ...names
        }
        return this
    }

    preserveUnknownFields(preserveUnknownFields: boolean): CustomResourceDefinitionSpecHelper {
        this._template.preserveUnknownFields = preserveUnknownFields
        return this
    }

    scope(scope: string): CustomResourceDefinitionSpecHelper {
        this._template.scope = scope
        return this
    }

    subresources(subresources: CustomResourceSubresources): CustomResourceDefinitionSpecHelper {
        if (!this._template.subresources) this._template.subresources = []
        this._template.subresources = {
            ...this._template.subresources,
            ...subresources
        }
        return this
    }

    validation(validation: CustomResourceValidation): CustomResourceDefinitionSpecHelper {
        if (!this._template.validation) this._template.validation = []
        this._template.validation = {
            ...this._template.validation,
            ...validation
        }
        return this
    }

    version(version: string): CustomResourceDefinitionSpecHelper {
        this._template.version = version
        return this
    }

    versions(versions: Array<CustomResourceDefinitionVersion>): CustomResourceDefinitionSpecHelper {
        if (!Array.isArray(versions)) { versions = [versions] }
        if (!this._template.versions) this._template.versions = versions
        this._template.versions = [...this._template.versions, ...versions]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CustomResourceDefinitionSpecHelper.kind
        this._template.apiVersion = CustomResourceDefinitionSpecHelper.apiVersion
    }
}

/** CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition */
export class CustomResourceDefinitionStatusHelper extends ResourceTemplate {
    static kind = 'CustomResourceDefinitionStatus';
    static apiVersion = 'apiextensions/v1beta1';

    acceptedNames(acceptedNames: CustomResourceDefinitionNames): CustomResourceDefinitionStatusHelper {
        if (!this._template.acceptedNames) this._template.acceptedNames = []
        this._template.acceptedNames = {
            ...this._template.acceptedNames,
            ...acceptedNames
        }
        return this
    }

    conditions(conditions: Array<CustomResourceDefinitionCondition>): CustomResourceDefinitionStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    storedVersions(storedVersions: Array<string>): CustomResourceDefinitionStatusHelper {
        if (!Array.isArray(storedVersions)) { storedVersions = [storedVersions] }
        if (!this._template.storedVersions) this._template.storedVersions = storedVersions
        this._template.storedVersions = [...this._template.storedVersions, ...storedVersions]
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CustomResourceDefinitionStatusHelper.kind
        this._template.apiVersion = CustomResourceDefinitionStatusHelper.apiVersion
    }
}

/** CustomResourceDefinitionVersion describes a version for CRD. */
export class CustomResourceDefinitionVersionHelper extends ResourceTemplate {
    static kind = 'CustomResourceDefinitionVersion';
    static apiVersion = 'apiextensions/v1beta1';

    additionalPrinterColumns(additionalPrinterColumns: Array<CustomResourceColumnDefinition>): CustomResourceDefinitionVersionHelper {
        if (!Array.isArray(additionalPrinterColumns)) { additionalPrinterColumns = [additionalPrinterColumns] }
        if (!this._template.additionalPrinterColumns) this._template.additionalPrinterColumns = additionalPrinterColumns
        this._template.additionalPrinterColumns = [...this._template.additionalPrinterColumns, ...additionalPrinterColumns]
        return this
    }

    deprecated(deprecated: boolean): CustomResourceDefinitionVersionHelper {
        this._template.deprecated = deprecated
        return this
    }

    deprecationWarning(deprecationWarning: string): CustomResourceDefinitionVersionHelper {
        this._template.deprecationWarning = deprecationWarning
        return this
    }

    schema(schema: CustomResourceValidation): CustomResourceDefinitionVersionHelper {
        if (!this._template.schema) this._template.schema = []
        this._template.schema = {
            ...this._template.schema,
            ...schema
        }
        return this
    }

    served(served: boolean): CustomResourceDefinitionVersionHelper {
        this._template.served = served
        return this
    }

    storage(storage: boolean): CustomResourceDefinitionVersionHelper {
        this._template.storage = storage
        return this
    }

    subresources(subresources: CustomResourceSubresources): CustomResourceDefinitionVersionHelper {
        if (!this._template.subresources) this._template.subresources = []
        this._template.subresources = {
            ...this._template.subresources,
            ...subresources
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CustomResourceDefinitionVersionHelper.kind
        this._template.apiVersion = CustomResourceDefinitionVersionHelper.apiVersion
    }
}

/** CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources. */
export class CustomResourceSubresourceScaleHelper extends ResourceTemplate {
    static kind = 'CustomResourceSubresourceScale';
    static apiVersion = 'apiextensions/v1beta1';

    labelSelectorPath(labelSelectorPath: string): CustomResourceSubresourceScaleHelper {
        this._template.labelSelectorPath = labelSelectorPath
        return this
    }

    specReplicasPath(specReplicasPath: string): CustomResourceSubresourceScaleHelper {
        this._template.specReplicasPath = specReplicasPath
        return this
    }

    statusReplicasPath(statusReplicasPath: string): CustomResourceSubresourceScaleHelper {
        this._template.statusReplicasPath = statusReplicasPath
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CustomResourceSubresourceScaleHelper.kind
        this._template.apiVersion = CustomResourceSubresourceScaleHelper.apiVersion
    }
}

/** CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza */
export class CustomResourceSubresourceStatusHelper extends ResourceTemplate {
    static kind = 'CustomResourceSubresourceStatus';
    static apiVersion = 'apiextensions/v1beta1';

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CustomResourceSubresourceStatusHelper.kind
        this._template.apiVersion = CustomResourceSubresourceStatusHelper.apiVersion
    }
}

/** CustomResourceSubresources defines the status and scale subresources for CustomResources. */
export class CustomResourceSubresourcesHelper extends ResourceTemplate {
    static kind = 'CustomResourceSubresources';
    static apiVersion = 'apiextensions/v1beta1';

    scale(scale: CustomResourceSubresourceScale): CustomResourceSubresourcesHelper {
        if (!this._template.scale) this._template.scale = []
        this._template.scale = {
            ...this._template.scale,
            ...scale
        }
        return this
    }

    status(status: CustomResourceSubresourceStatus): CustomResourceSubresourcesHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CustomResourceSubresourcesHelper.kind
        this._template.apiVersion = CustomResourceSubresourcesHelper.apiVersion
    }
}

/** CustomResourceValidation is a list of validation methods for CustomResources. */
export class CustomResourceValidationHelper extends ResourceTemplate {
    static kind = 'CustomResourceValidation';
    static apiVersion = 'apiextensions/v1beta1';

    openAPIV3Schema(openAPIV3Schema: JSONSchemaProps): CustomResourceValidationHelper {
        if (!this._template.openAPIV3Schema) this._template.openAPIV3Schema = []
        this._template.openAPIV3Schema = {
            ...this._template.openAPIV3Schema,
            ...openAPIV3Schema
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CustomResourceValidationHelper.kind
        this._template.apiVersion = CustomResourceValidationHelper.apiVersion
    }
}

/** ExternalDocumentation allows referencing an external resource for extended documentation. */
export class ExternalDocumentationHelper extends ResourceTemplate {
    static kind = 'ExternalDocumentation';
    static apiVersion = 'apiextensions/v1beta1';

    description(description: string): ExternalDocumentationHelper {
        this._template.description = description
        return this
    }

    url(url: string): ExternalDocumentationHelper {
        this._template.url = url
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = ExternalDocumentationHelper.kind
        this._template.apiVersion = ExternalDocumentationHelper.apiVersion
    }
}

/** ServiceReference holds a reference to Service.legacy.k8s.io */
export class ServiceReferenceHelper extends ResourceTemplate {
    static kind = 'ServiceReference';
    static apiVersion = 'apiextensions/v1beta1';

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

/** WebhookClientConfig contains the information to make a TLS connection with the webhook. */
export class WebhookClientConfigHelper extends ResourceTemplate {
    static kind = 'WebhookClientConfig';
    static apiVersion = 'apiextensions/v1beta1';

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
