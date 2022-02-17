import { ResourceTemplate, Template } from "../resourceTemplate";
import { CustomResourceColumnDefinition, CustomResourceConversion, CustomResourceDefinition, CustomResourceDefinitionCondition, CustomResourceDefinitionList, CustomResourceDefinitionNames, CustomResourceDefinitionSpec, CustomResourceDefinitionStatus, CustomResourceDefinitionVersion, CustomResourceSubresourceScale, CustomResourceSubresourceStatus, CustomResourceSubresources, CustomResourceValidation, ExternalDocumentation, JSONSchemaProps, ServiceReference, WebhookClientConfig, WebhookConversion } from "./v1";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";

export interface CustomResourceColumnDefinitionHelper extends CustomResourceColumnDefinition {
    $description(x: any): any;
    $format(x: any): any;
    $jsonPath(x: any): any;
    $priority(x: any): any;
    $type(x: any): any;
}

/** CustomResourceColumnDefinition specifies a column for server side printing. */
export class CustomResourceColumnDefinitionHelper extends Template implements CustomResourceColumnDefinitionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _description: any;
    get description(): any /*string*/ {
        return this._description
    }
    set description(x: any /*string*/) {
        this._description = x
    }
    setDescription(x: any /*string*/) {
        this.description = x; return this
    }

    _format: any;
    get format(): any /*string*/ {
        return this._format
    }
    set format(x: any /*string*/) {
        this._format = x
    }
    setFormat(x: any /*string*/) {
        this.format = x; return this
    }

    _jsonPath: any;
    get jsonPath(): any /*string*/ {
        return this._jsonPath
    }
    set jsonPath(x: any /*string*/) {
        this._jsonPath = x
    }
    setJsonPath(x: any /*string*/) {
        this.jsonPath = x; return this
    }

    _priority: any;
    get priority(): any /*number*/ {
        return this._priority
    }
    set priority(x: any /*number*/) {
        this._priority = x
    }
    setPriority(x: any /*number*/) {
        this.priority = x; return this
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

export interface CustomResourceConversionHelper extends CustomResourceConversion {
    $strategy(x: any): any;
    $webhook(x: any): any;
}

/** CustomResourceConversion describes how to convert different versions of a CR. */
export class CustomResourceConversionHelper extends Template implements CustomResourceConversionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _strategy: any;
    get strategy(): any /*string*/ {
        return this._strategy
    }
    set strategy(x: any /*string*/) {
        this._strategy = x
    }
    setStrategy(x: any /*string*/) {
        this.strategy = x; return this
    }

    _webhook: any;
    get webhook(): any /*WebhookConversionHelper*/ {
        return this._webhook
    }
    set webhook(x: any /*WebhookConversionHelper*/) {
        this._webhook = x
    }
    setWebhook(x: any /*WebhookConversionHelper*/) {
        this.webhook = x; return this
    }
}

export interface CustomResourceDefinitionHelper extends CustomResourceDefinition {
    $metadata(x: any): any;
    $spec(x: any): any;
    $status(x: any): any;
}

/** CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>. */
export class CustomResourceDefinitionHelper extends ResourceTemplate implements CustomResourceDefinitionHelper {
    static kind = 'CustomResourceDefinition';
    static apiVersion = 'apiextensions/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CustomResourceDefinitionHelper.kind, CustomResourceDefinitionHelper.apiVersion)
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

    _spec: any;
    get spec(): any /*CustomResourceDefinitionSpecHelper*/ {
        return this._spec
    }
    set spec(x: any /*CustomResourceDefinitionSpecHelper*/) {
        this._spec = x
    }
    setSpec(x: any /*CustomResourceDefinitionSpecHelper*/) {
        this.spec = x; return this
    }

    _status: any;
    get status(): any /*CustomResourceDefinitionStatusHelper*/ {
        return this._status
    }
    set status(x: any /*CustomResourceDefinitionStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*CustomResourceDefinitionStatusHelper*/) {
        this.status = x; return this
    }
}

export interface CustomResourceDefinitionConditionHelper extends CustomResourceDefinitionCondition {
    $lastTransitionTime(x: any): any;
    $message(x: any): any;
    $reason(x: any): any;
    $status(x: any): any;
    $type(x: any): any;
}

/** CustomResourceDefinitionCondition contains details for the current condition of this pod. */
export class CustomResourceDefinitionConditionHelper extends Template implements CustomResourceDefinitionConditionHelper {
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

export interface CustomResourceDefinitionListHelper extends CustomResourceDefinitionList {
    $items(x: any): any;
    $metadata(x: any): any;
}

/** CustomResourceDefinitionList is a list of CustomResourceDefinition objects. */
export class CustomResourceDefinitionListHelper extends ResourceTemplate implements CustomResourceDefinitionListHelper {
    static kind = 'CustomResourceDefinitionList';
    static apiVersion = 'apiextensions/v1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CustomResourceDefinitionListHelper.kind, CustomResourceDefinitionListHelper.apiVersion)
    }

    _items: any;
    get items(): any /*Array<CustomResourceDefinition>*/ {
        return this._items
    }
    set items(x: any /*Array<CustomResourceDefinition>*/) {
        this._items = this.set(this.items, x)
    }
    setItems(x: any /*Array<CustomResourceDefinition>*/) {
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

export interface CustomResourceDefinitionNamesHelper extends CustomResourceDefinitionNames {
    $categories(x: any): any;
    $listKind(x: any): any;
    $plural(x: any): any;
    $shortNames(x: any): any;
    $singular(x: any): any;
}

/** CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition */
export class CustomResourceDefinitionNamesHelper extends Template implements CustomResourceDefinitionNamesHelper {
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

    _listKind: any;
    get listKind(): any /*string*/ {
        return this._listKind
    }
    set listKind(x: any /*string*/) {
        this._listKind = x
    }
    setListKind(x: any /*string*/) {
        this.listKind = x; return this
    }

    _plural: any;
    get plural(): any /*string*/ {
        return this._plural
    }
    set plural(x: any /*string*/) {
        this._plural = x
    }
    setPlural(x: any /*string*/) {
        this.plural = x; return this
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

    _singular: any;
    get singular(): any /*string*/ {
        return this._singular
    }
    set singular(x: any /*string*/) {
        this._singular = x
    }
    setSingular(x: any /*string*/) {
        this.singular = x; return this
    }
}

export interface CustomResourceDefinitionSpecHelper extends CustomResourceDefinitionSpec {
    $conversion(x: any): any;
    $group(x: any): any;
    $names(x: any): any;
    $preserveUnknownFields(x: any): any;
    $scope(x: any): any;
    $versions(x: any): any;
}

/** CustomResourceDefinitionSpec describes how a user wants their resource to appear */
export class CustomResourceDefinitionSpecHelper extends Template implements CustomResourceDefinitionSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conversion: any;
    get conversion(): any /*CustomResourceConversionHelper*/ {
        return this._conversion
    }
    set conversion(x: any /*CustomResourceConversionHelper*/) {
        this._conversion = x
    }
    setConversion(x: any /*CustomResourceConversionHelper*/) {
        this.conversion = x; return this
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

    _names: any;
    get names(): any /*CustomResourceDefinitionNamesHelper*/ {
        return this._names
    }
    set names(x: any /*CustomResourceDefinitionNamesHelper*/) {
        this._names = x
    }
    setNames(x: any /*CustomResourceDefinitionNamesHelper*/) {
        this.names = x; return this
    }

    _preserveUnknownFields: any;
    get preserveUnknownFields(): any /*boolean*/ {
        return this._preserveUnknownFields
    }
    set preserveUnknownFields(x: any /*boolean*/) {
        this._preserveUnknownFields = x
    }
    setPreserveUnknownFields(x: any /*boolean*/) {
        this.preserveUnknownFields = x; return this
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

    _versions: any;
    get versions(): any /*Array<CustomResourceDefinitionVersion>*/ {
        return this._versions
    }
    set versions(x: any /*Array<CustomResourceDefinitionVersion>*/) {
        this._versions = this.set(this.versions, x)
    }
    setVersions(x: any /*Array<CustomResourceDefinitionVersion>*/) {
        this.versions = x; return this
    }
}

export interface CustomResourceDefinitionStatusHelper extends CustomResourceDefinitionStatus {
    $acceptedNames(x: any): any;
    $conditions(x: any): any;
    $storedVersions(x: any): any;
}

/** CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition */
export class CustomResourceDefinitionStatusHelper extends Template implements CustomResourceDefinitionStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _acceptedNames: any;
    get acceptedNames(): any /*CustomResourceDefinitionNamesHelper*/ {
        return this._acceptedNames
    }
    set acceptedNames(x: any /*CustomResourceDefinitionNamesHelper*/) {
        this._acceptedNames = x
    }
    setAcceptedNames(x: any /*CustomResourceDefinitionNamesHelper*/) {
        this.acceptedNames = x; return this
    }

    _conditions: any;
    get conditions(): any /*Array<CustomResourceDefinitionCondition>*/ {
        return this._conditions
    }
    set conditions(x: any /*Array<CustomResourceDefinitionCondition>*/) {
        this._conditions = this.set(this.conditions, x)
    }
    setConditions(x: any /*Array<CustomResourceDefinitionCondition>*/) {
        this.conditions = x; return this
    }

    _storedVersions: any;
    get storedVersions(): any /*Array<string>*/ {
        return this._storedVersions
    }
    set storedVersions(x: any /*Array<string>*/) {
        this._storedVersions = this.set(this.storedVersions, x)
    }
    setStoredVersions(x: any /*Array<string>*/) {
        this.storedVersions = x; return this
    }
}

export interface CustomResourceDefinitionVersionHelper extends CustomResourceDefinitionVersion {
    $additionalPrinterColumns(x: any): any;
    $deprecated(x: any): any;
    $deprecationWarning(x: any): any;
    $schema(x: any): any;
    $served(x: any): any;
    $storage(x: any): any;
    $subresources(x: any): any;
}

/** CustomResourceDefinitionVersion describes a version for CRD. */
export class CustomResourceDefinitionVersionHelper extends Template implements CustomResourceDefinitionVersionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _additionalPrinterColumns: any;
    get additionalPrinterColumns(): any /*Array<CustomResourceColumnDefinition>*/ {
        return this._additionalPrinterColumns
    }
    set additionalPrinterColumns(x: any /*Array<CustomResourceColumnDefinition>*/) {
        this._additionalPrinterColumns = this.set(this.additionalPrinterColumns, x)
    }
    setAdditionalPrinterColumns(x: any /*Array<CustomResourceColumnDefinition>*/) {
        this.additionalPrinterColumns = x; return this
    }

    _deprecated: any;
    get deprecated(): any /*boolean*/ {
        return this._deprecated
    }
    set deprecated(x: any /*boolean*/) {
        this._deprecated = x
    }
    setDeprecated(x: any /*boolean*/) {
        this.deprecated = x; return this
    }

    _deprecationWarning: any;
    get deprecationWarning(): any /*string*/ {
        return this._deprecationWarning
    }
    set deprecationWarning(x: any /*string*/) {
        this._deprecationWarning = x
    }
    setDeprecationWarning(x: any /*string*/) {
        this.deprecationWarning = x; return this
    }

    _schema: any;
    get schema(): any /*CustomResourceValidationHelper*/ {
        return this._schema
    }
    set schema(x: any /*CustomResourceValidationHelper*/) {
        this._schema = x
    }
    setSchema(x: any /*CustomResourceValidationHelper*/) {
        this.schema = x; return this
    }

    _served: any;
    get served(): any /*boolean*/ {
        return this._served
    }
    set served(x: any /*boolean*/) {
        this._served = x
    }
    setServed(x: any /*boolean*/) {
        this.served = x; return this
    }

    _storage: any;
    get storage(): any /*boolean*/ {
        return this._storage
    }
    set storage(x: any /*boolean*/) {
        this._storage = x
    }
    setStorage(x: any /*boolean*/) {
        this.storage = x; return this
    }

    _subresources: any;
    get subresources(): any /*CustomResourceSubresourcesHelper*/ {
        return this._subresources
    }
    set subresources(x: any /*CustomResourceSubresourcesHelper*/) {
        this._subresources = x
    }
    setSubresources(x: any /*CustomResourceSubresourcesHelper*/) {
        this.subresources = x; return this
    }
}

export interface CustomResourceSubresourceScaleHelper extends CustomResourceSubresourceScale {
    $labelSelectorPath(x: any): any;
    $specReplicasPath(x: any): any;
    $statusReplicasPath(x: any): any;
}

/** CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources. */
export class CustomResourceSubresourceScaleHelper extends Template implements CustomResourceSubresourceScaleHelper {
    constructor(obj: any) {
        super(obj)
    }

    _labelSelectorPath: any;
    get labelSelectorPath(): any /*string*/ {
        return this._labelSelectorPath
    }
    set labelSelectorPath(x: any /*string*/) {
        this._labelSelectorPath = x
    }
    setLabelSelectorPath(x: any /*string*/) {
        this.labelSelectorPath = x; return this
    }

    _specReplicasPath: any;
    get specReplicasPath(): any /*string*/ {
        return this._specReplicasPath
    }
    set specReplicasPath(x: any /*string*/) {
        this._specReplicasPath = x
    }
    setSpecReplicasPath(x: any /*string*/) {
        this.specReplicasPath = x; return this
    }

    _statusReplicasPath: any;
    get statusReplicasPath(): any /*string*/ {
        return this._statusReplicasPath
    }
    set statusReplicasPath(x: any /*string*/) {
        this._statusReplicasPath = x
    }
    setStatusReplicasPath(x: any /*string*/) {
        this.statusReplicasPath = x; return this
    }
}

export interface CustomResourceSubresourceStatusHelper extends CustomResourceSubresourceStatus {
}

/** CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza */
export class CustomResourceSubresourceStatusHelper extends Template implements CustomResourceSubresourceStatusHelper {
    constructor(obj: any) {
        super(obj)
    }
}

export interface CustomResourceSubresourcesHelper extends CustomResourceSubresources {
    $scale(x: any): any;
    $status(x: any): any;
}

/** CustomResourceSubresources defines the status and scale subresources for CustomResources. */
export class CustomResourceSubresourcesHelper extends Template implements CustomResourceSubresourcesHelper {
    constructor(obj: any) {
        super(obj)
    }

    _scale: any;
    get scale(): any /*CustomResourceSubresourceScaleHelper*/ {
        return this._scale
    }
    set scale(x: any /*CustomResourceSubresourceScaleHelper*/) {
        this._scale = x
    }
    setScale(x: any /*CustomResourceSubresourceScaleHelper*/) {
        this.scale = x; return this
    }

    _status: any;
    get status(): any /*CustomResourceSubresourceStatusHelper*/ {
        return this._status
    }
    set status(x: any /*CustomResourceSubresourceStatusHelper*/) {
        this._status = x
    }
    setStatus(x: any /*CustomResourceSubresourceStatusHelper*/) {
        this.status = x; return this
    }
}

export interface CustomResourceValidationHelper extends CustomResourceValidation {
    $openAPIV3Schema(x: any): any;
}

/** CustomResourceValidation is a list of validation methods for CustomResources. */
export class CustomResourceValidationHelper extends Template implements CustomResourceValidationHelper {
    constructor(obj: any) {
        super(obj)
    }

    _openAPIV3Schema: any;
    get openAPIV3Schema(): any /*JSONSchemaProps*/ {
        return this._openAPIV3Schema
    }
    set openAPIV3Schema(x: any /*JSONSchemaProps*/) {
        this._openAPIV3Schema = x
    }
    setOpenAPIV3Schema(x: any /*JSONSchemaProps*/) {
        this.openAPIV3Schema = x; return this
    }
}

export interface ExternalDocumentationHelper extends ExternalDocumentation {
    $description(x: any): any;
    $url(x: any): any;
}

/** ExternalDocumentation allows referencing an external resource for extended documentation. */
export class ExternalDocumentationHelper extends Template implements ExternalDocumentationHelper {
    constructor(obj: any) {
        super(obj)
    }

    _description: any;
    get description(): any /*string*/ {
        return this._description
    }
    set description(x: any /*string*/) {
        this._description = x
    }
    setDescription(x: any /*string*/) {
        this.description = x; return this
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

export interface WebhookClientConfigHelper extends WebhookClientConfig {
    $caBundle(x: any): any;
    $service(x: any): any;
    $url(x: any): any;
}

/** WebhookClientConfig contains the information to make a TLS connection with the webhook. */
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

export interface WebhookConversionHelper extends WebhookConversion {
    $clientConfig(x: any): any;
    $conversionReviewVersions(x: any): any;
}

/** WebhookConversion describes how to call a conversion webhook */
export class WebhookConversionHelper extends Template implements WebhookConversionHelper {
    constructor(obj: any) {
        super(obj)
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

    _conversionReviewVersions: any;
    get conversionReviewVersions(): any /*Array<string>*/ {
        return this._conversionReviewVersions
    }
    set conversionReviewVersions(x: any /*Array<string>*/) {
        this._conversionReviewVersions = this.set(this.conversionReviewVersions, x)
    }
    setConversionReviewVersions(x: any /*Array<string>*/) {
        this.conversionReviewVersions = x; return this
    }
}
