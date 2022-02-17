import { ResourceTemplate, Template } from "../resourceTemplate";
import { CustomResourceColumnDefinition, CustomResourceConversion, CustomResourceDefinition, CustomResourceDefinitionCondition, CustomResourceDefinitionList, CustomResourceDefinitionNames, CustomResourceDefinitionSpec, CustomResourceDefinitionStatus, CustomResourceDefinitionVersion, CustomResourceSubresourceScale, CustomResourceSubresourceStatus, CustomResourceSubresources, CustomResourceValidation, ExternalDocumentation, JSONSchemaProps, ServiceReference, WebhookClientConfig } from "./v1beta1";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";

export interface CustomResourceColumnDefinitionHelper extends CustomResourceColumnDefinition {
    $JSONPath(x: string): CustomResourceColumnDefinitionHelper;
    $description(x: string): CustomResourceColumnDefinitionHelper;
    $format(x: string): CustomResourceColumnDefinitionHelper;
    $priority(x: number): CustomResourceColumnDefinitionHelper;
    $type(x: string): CustomResourceColumnDefinitionHelper;
}

/** CustomResourceColumnDefinition specifies a column for server side printing. */
export class CustomResourceColumnDefinitionHelper extends Template implements CustomResourceColumnDefinitionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _JSONPath: string;
    get JSONPath(): string {
        return this._JSONPath
    }
    set JSONPath(x: string) {
        this._JSONPath = x
    }
    $JSONPath(x: string) {
        this.JSONPath = x; return this
    }

    _description: string;
    get description(): string {
        return this._description
    }
    set description(x: string) {
        this._description = x
    }
    $Description(x: string) {
        this.description = x; return this
    }

    _format: string;
    get format(): string {
        return this._format
    }
    set format(x: string) {
        this._format = x
    }
    $Format(x: string) {
        this.format = x; return this
    }

    _priority: number;
    get priority(): number {
        return this._priority
    }
    set priority(x: number) {
        this._priority = x
    }
    $Priority(x: number) {
        this.priority = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $Type(x: string) {
        this.type = x; return this
    }
}

export interface CustomResourceConversionHelper extends CustomResourceConversion {
    $conversionReviewVersions(x: Array<string>): CustomResourceConversionHelper;
    $strategy(x: string): CustomResourceConversionHelper;
    webhookClientConfig: WebhookClientConfigHelper;
    $webhookClientConfig(x: WebhookClientConfigHelper): CustomResourceConversionHelper;
}

/** CustomResourceConversion describes how to convert different versions of a CR. */
export class CustomResourceConversionHelper extends Template implements CustomResourceConversionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conversionReviewVersions: Array<string>;
    get conversionReviewVersions(): Array<string> {
        return this._conversionReviewVersions
    }
    set conversionReviewVersions(x: Array<string>) {
        this._conversionReviewVersions = this.set(this.conversionReviewVersions, x)
    }
    $ConversionReviewVersions(x: Array<string>) {
        this.conversionReviewVersions = x; return this
    }

    _strategy: string;
    get strategy(): string {
        return this._strategy
    }
    set strategy(x: string) {
        this._strategy = x
    }
    $Strategy(x: string) {
        this.strategy = x; return this
    }

    _webhookClientConfig: WebhookClientConfigHelper;
    get webhookClientConfig(): WebhookClientConfigHelper {
        return this._webhookClientConfig
    }
    set webhookClientConfig(x: WebhookClientConfigHelper) {
        this._webhookClientConfig = x
    }
    $WebhookClientConfig(x: WebhookClientConfigHelper) {
        this.webhookClientConfig = x; return this
    }
}

export interface CustomResourceDefinitionHelper extends CustomResourceDefinition {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): CustomResourceDefinitionHelper;
    spec: CustomResourceDefinitionSpecHelper;
    $spec(x: CustomResourceDefinitionSpecHelper): CustomResourceDefinitionHelper;
    status: CustomResourceDefinitionStatusHelper;
    $status(x: CustomResourceDefinitionStatusHelper): CustomResourceDefinitionHelper;
}

/** CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>. Deprecated in v1.16, planned for removal in v1.22. Use apiextensions.k8s.io/v1 CustomResourceDefinition instead. */
export class CustomResourceDefinitionHelper extends ResourceTemplate implements CustomResourceDefinitionHelper {
    static kind = 'CustomResourceDefinition';
    static apiVersion = 'apiextensions/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CustomResourceDefinitionHelper.kind, CustomResourceDefinitionHelper.apiVersion)
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

    _spec: CustomResourceDefinitionSpecHelper;
    get spec(): CustomResourceDefinitionSpecHelper {
        return this._spec
    }
    set spec(x: CustomResourceDefinitionSpecHelper) {
        this._spec = x
    }
    $Spec(x: CustomResourceDefinitionSpecHelper) {
        this.spec = x; return this
    }

    _status: CustomResourceDefinitionStatusHelper;
    get status(): CustomResourceDefinitionStatusHelper {
        return this._status
    }
    set status(x: CustomResourceDefinitionStatusHelper) {
        this._status = x
    }
    $Status(x: CustomResourceDefinitionStatusHelper) {
        this.status = x; return this
    }
}

export interface CustomResourceDefinitionConditionHelper extends CustomResourceDefinitionCondition {
    $lastTransitionTime(x: Time): CustomResourceDefinitionConditionHelper;
    $message(x: string): CustomResourceDefinitionConditionHelper;
    $reason(x: string): CustomResourceDefinitionConditionHelper;
    $status(x: string): CustomResourceDefinitionConditionHelper;
    $type(x: string): CustomResourceDefinitionConditionHelper;
}

/** CustomResourceDefinitionCondition contains details for the current condition of this pod. */
export class CustomResourceDefinitionConditionHelper extends Template implements CustomResourceDefinitionConditionHelper {
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
    $LastTransitionTime(x: Time) {
        this.lastTransitionTime = x; return this
    }

    _message: string;
    get message(): string {
        return this._message
    }
    set message(x: string) {
        this._message = x
    }
    $Message(x: string) {
        this.message = x; return this
    }

    _reason: string;
    get reason(): string {
        return this._reason
    }
    set reason(x: string) {
        this._reason = x
    }
    $Reason(x: string) {
        this.reason = x; return this
    }

    _status: string;
    get status(): string {
        return this._status
    }
    set status(x: string) {
        this._status = x
    }
    $Status(x: string) {
        this.status = x; return this
    }

    _type: string;
    get type(): string {
        return this._type
    }
    set type(x: string) {
        this._type = x
    }
    $Type(x: string) {
        this.type = x; return this
    }
}

export interface CustomResourceDefinitionListHelper extends CustomResourceDefinitionList {
    $items(x: Array<CustomResourceDefinition>): CustomResourceDefinitionListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): CustomResourceDefinitionListHelper;
}

/** CustomResourceDefinitionList is a list of CustomResourceDefinition objects. */
export class CustomResourceDefinitionListHelper extends ResourceTemplate implements CustomResourceDefinitionListHelper {
    static kind = 'CustomResourceDefinitionList';
    static apiVersion = 'apiextensions/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CustomResourceDefinitionListHelper.kind, CustomResourceDefinitionListHelper.apiVersion)
    }

    _items: Array<CustomResourceDefinition>;
    get items(): Array<CustomResourceDefinition> {
        return this._items
    }
    set items(x: Array<CustomResourceDefinition>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<CustomResourceDefinition>) {
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

export interface CustomResourceDefinitionNamesHelper extends CustomResourceDefinitionNames {
    $categories(x: Array<string>): CustomResourceDefinitionNamesHelper;
    $listKind(x: string): CustomResourceDefinitionNamesHelper;
    $plural(x: string): CustomResourceDefinitionNamesHelper;
    $shortNames(x: Array<string>): CustomResourceDefinitionNamesHelper;
    $singular(x: string): CustomResourceDefinitionNamesHelper;
}

/** CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition */
export class CustomResourceDefinitionNamesHelper extends Template implements CustomResourceDefinitionNamesHelper {
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
    $Categories(x: Array<string>) {
        this.categories = x; return this
    }

    _listKind: string;
    get listKind(): string {
        return this._listKind
    }
    set listKind(x: string) {
        this._listKind = x
    }
    $ListKind(x: string) {
        this.listKind = x; return this
    }

    _plural: string;
    get plural(): string {
        return this._plural
    }
    set plural(x: string) {
        this._plural = x
    }
    $Plural(x: string) {
        this.plural = x; return this
    }

    _shortNames: Array<string>;
    get shortNames(): Array<string> {
        return this._shortNames
    }
    set shortNames(x: Array<string>) {
        this._shortNames = this.set(this.shortNames, x)
    }
    $ShortNames(x: Array<string>) {
        this.shortNames = x; return this
    }

    _singular: string;
    get singular(): string {
        return this._singular
    }
    set singular(x: string) {
        this._singular = x
    }
    $Singular(x: string) {
        this.singular = x; return this
    }
}

export interface CustomResourceDefinitionSpecHelper extends CustomResourceDefinitionSpec {
    $additionalPrinterColumns(x: Array<CustomResourceColumnDefinition>): CustomResourceDefinitionSpecHelper;
    conversion: CustomResourceConversionHelper;
    $conversion(x: CustomResourceConversionHelper): CustomResourceDefinitionSpecHelper;
    $group(x: string): CustomResourceDefinitionSpecHelper;
    names: CustomResourceDefinitionNamesHelper;
    $names(x: CustomResourceDefinitionNamesHelper): CustomResourceDefinitionSpecHelper;
    $preserveUnknownFields(x: boolean): CustomResourceDefinitionSpecHelper;
    $scope(x: string): CustomResourceDefinitionSpecHelper;
    subresources: CustomResourceSubresourcesHelper;
    $subresources(x: CustomResourceSubresourcesHelper): CustomResourceDefinitionSpecHelper;
    validation: CustomResourceValidationHelper;
    $validation(x: CustomResourceValidationHelper): CustomResourceDefinitionSpecHelper;
    $version(x: string): CustomResourceDefinitionSpecHelper;
    $versions(x: Array<CustomResourceDefinitionVersion>): CustomResourceDefinitionSpecHelper;
}

/** CustomResourceDefinitionSpec describes how a user wants their resource to appear */
export class CustomResourceDefinitionSpecHelper extends Template implements CustomResourceDefinitionSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _additionalPrinterColumns: Array<CustomResourceColumnDefinition>;
    get additionalPrinterColumns(): Array<CustomResourceColumnDefinition> {
        return this._additionalPrinterColumns
    }
    set additionalPrinterColumns(x: Array<CustomResourceColumnDefinition>) {
        this._additionalPrinterColumns = this.set(this.additionalPrinterColumns, x)
    }
    $AdditionalPrinterColumns(x: Array<CustomResourceColumnDefinition>) {
        this.additionalPrinterColumns = x; return this
    }

    _conversion: CustomResourceConversionHelper;
    get conversion(): CustomResourceConversionHelper {
        return this._conversion
    }
    set conversion(x: CustomResourceConversionHelper) {
        this._conversion = x
    }
    $Conversion(x: CustomResourceConversionHelper) {
        this.conversion = x; return this
    }

    _group: string;
    get group(): string {
        return this._group
    }
    set group(x: string) {
        this._group = x
    }
    $Group(x: string) {
        this.group = x; return this
    }

    _names: CustomResourceDefinitionNamesHelper;
    get names(): CustomResourceDefinitionNamesHelper {
        return this._names
    }
    set names(x: CustomResourceDefinitionNamesHelper) {
        this._names = x
    }
    $Names(x: CustomResourceDefinitionNamesHelper) {
        this.names = x; return this
    }

    _preserveUnknownFields: boolean;
    get preserveUnknownFields(): boolean {
        return this._preserveUnknownFields
    }
    set preserveUnknownFields(x: boolean) {
        this._preserveUnknownFields = x
    }
    $PreserveUnknownFields(x: boolean) {
        this.preserveUnknownFields = x; return this
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

    _subresources: CustomResourceSubresourcesHelper;
    get subresources(): CustomResourceSubresourcesHelper {
        return this._subresources
    }
    set subresources(x: CustomResourceSubresourcesHelper) {
        this._subresources = x
    }
    $Subresources(x: CustomResourceSubresourcesHelper) {
        this.subresources = x; return this
    }

    _validation: CustomResourceValidationHelper;
    get validation(): CustomResourceValidationHelper {
        return this._validation
    }
    set validation(x: CustomResourceValidationHelper) {
        this._validation = x
    }
    $Validation(x: CustomResourceValidationHelper) {
        this.validation = x; return this
    }

    _version: string;
    get version(): string {
        return this._version
    }
    set version(x: string) {
        this._version = x
    }
    $Version(x: string) {
        this.version = x; return this
    }

    _versions: Array<CustomResourceDefinitionVersion>;
    get versions(): Array<CustomResourceDefinitionVersion> {
        return this._versions
    }
    set versions(x: Array<CustomResourceDefinitionVersion>) {
        this._versions = this.set(this.versions, x)
    }
    $Versions(x: Array<CustomResourceDefinitionVersion>) {
        this.versions = x; return this
    }
}

export interface CustomResourceDefinitionStatusHelper extends CustomResourceDefinitionStatus {
    acceptedNames: CustomResourceDefinitionNamesHelper;
    $acceptedNames(x: CustomResourceDefinitionNamesHelper): CustomResourceDefinitionStatusHelper;
    $conditions(x: Array<CustomResourceDefinitionCondition>): CustomResourceDefinitionStatusHelper;
    $storedVersions(x: Array<string>): CustomResourceDefinitionStatusHelper;
}

/** CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition */
export class CustomResourceDefinitionStatusHelper extends Template implements CustomResourceDefinitionStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _acceptedNames: CustomResourceDefinitionNamesHelper;
    get acceptedNames(): CustomResourceDefinitionNamesHelper {
        return this._acceptedNames
    }
    set acceptedNames(x: CustomResourceDefinitionNamesHelper) {
        this._acceptedNames = x
    }
    $AcceptedNames(x: CustomResourceDefinitionNamesHelper) {
        this.acceptedNames = x; return this
    }

    _conditions: Array<CustomResourceDefinitionCondition>;
    get conditions(): Array<CustomResourceDefinitionCondition> {
        return this._conditions
    }
    set conditions(x: Array<CustomResourceDefinitionCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $Conditions(x: Array<CustomResourceDefinitionCondition>) {
        this.conditions = x; return this
    }

    _storedVersions: Array<string>;
    get storedVersions(): Array<string> {
        return this._storedVersions
    }
    set storedVersions(x: Array<string>) {
        this._storedVersions = this.set(this.storedVersions, x)
    }
    $StoredVersions(x: Array<string>) {
        this.storedVersions = x; return this
    }
}

export interface CustomResourceDefinitionVersionHelper extends CustomResourceDefinitionVersion {
    $additionalPrinterColumns(x: Array<CustomResourceColumnDefinition>): CustomResourceDefinitionVersionHelper;
    $deprecated(x: boolean): CustomResourceDefinitionVersionHelper;
    $deprecationWarning(x: string): CustomResourceDefinitionVersionHelper;
    schema: CustomResourceValidationHelper;
    $schema(x: CustomResourceValidationHelper): CustomResourceDefinitionVersionHelper;
    $served(x: boolean): CustomResourceDefinitionVersionHelper;
    $storage(x: boolean): CustomResourceDefinitionVersionHelper;
    subresources: CustomResourceSubresourcesHelper;
    $subresources(x: CustomResourceSubresourcesHelper): CustomResourceDefinitionVersionHelper;
}

/** CustomResourceDefinitionVersion describes a version for CRD. */
export class CustomResourceDefinitionVersionHelper extends Template implements CustomResourceDefinitionVersionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _additionalPrinterColumns: Array<CustomResourceColumnDefinition>;
    get additionalPrinterColumns(): Array<CustomResourceColumnDefinition> {
        return this._additionalPrinterColumns
    }
    set additionalPrinterColumns(x: Array<CustomResourceColumnDefinition>) {
        this._additionalPrinterColumns = this.set(this.additionalPrinterColumns, x)
    }
    $AdditionalPrinterColumns(x: Array<CustomResourceColumnDefinition>) {
        this.additionalPrinterColumns = x; return this
    }

    _deprecated: boolean;
    get deprecated(): boolean {
        return this._deprecated
    }
    set deprecated(x: boolean) {
        this._deprecated = x
    }
    $Deprecated(x: boolean) {
        this.deprecated = x; return this
    }

    _deprecationWarning: string;
    get deprecationWarning(): string {
        return this._deprecationWarning
    }
    set deprecationWarning(x: string) {
        this._deprecationWarning = x
    }
    $DeprecationWarning(x: string) {
        this.deprecationWarning = x; return this
    }

    _schema: CustomResourceValidationHelper;
    get schema(): CustomResourceValidationHelper {
        return this._schema
    }
    set schema(x: CustomResourceValidationHelper) {
        this._schema = x
    }
    $Schema(x: CustomResourceValidationHelper) {
        this.schema = x; return this
    }

    _served: boolean;
    get served(): boolean {
        return this._served
    }
    set served(x: boolean) {
        this._served = x
    }
    $Served(x: boolean) {
        this.served = x; return this
    }

    _storage: boolean;
    get storage(): boolean {
        return this._storage
    }
    set storage(x: boolean) {
        this._storage = x
    }
    $Storage(x: boolean) {
        this.storage = x; return this
    }

    _subresources: CustomResourceSubresourcesHelper;
    get subresources(): CustomResourceSubresourcesHelper {
        return this._subresources
    }
    set subresources(x: CustomResourceSubresourcesHelper) {
        this._subresources = x
    }
    $Subresources(x: CustomResourceSubresourcesHelper) {
        this.subresources = x; return this
    }
}

export interface CustomResourceSubresourceScaleHelper extends CustomResourceSubresourceScale {
    $labelSelectorPath(x: string): CustomResourceSubresourceScaleHelper;
    $specReplicasPath(x: string): CustomResourceSubresourceScaleHelper;
    $statusReplicasPath(x: string): CustomResourceSubresourceScaleHelper;
}

/** CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources. */
export class CustomResourceSubresourceScaleHelper extends Template implements CustomResourceSubresourceScaleHelper {
    constructor(obj: any) {
        super(obj)
    }

    _labelSelectorPath: string;
    get labelSelectorPath(): string {
        return this._labelSelectorPath
    }
    set labelSelectorPath(x: string) {
        this._labelSelectorPath = x
    }
    $LabelSelectorPath(x: string) {
        this.labelSelectorPath = x; return this
    }

    _specReplicasPath: string;
    get specReplicasPath(): string {
        return this._specReplicasPath
    }
    set specReplicasPath(x: string) {
        this._specReplicasPath = x
    }
    $SpecReplicasPath(x: string) {
        this.specReplicasPath = x; return this
    }

    _statusReplicasPath: string;
    get statusReplicasPath(): string {
        return this._statusReplicasPath
    }
    set statusReplicasPath(x: string) {
        this._statusReplicasPath = x
    }
    $StatusReplicasPath(x: string) {
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
    scale: CustomResourceSubresourceScaleHelper;
    $scale(x: CustomResourceSubresourceScaleHelper): CustomResourceSubresourcesHelper;
    status: CustomResourceSubresourceStatusHelper;
    $status(x: CustomResourceSubresourceStatusHelper): CustomResourceSubresourcesHelper;
}

/** CustomResourceSubresources defines the status and scale subresources for CustomResources. */
export class CustomResourceSubresourcesHelper extends Template implements CustomResourceSubresourcesHelper {
    constructor(obj: any) {
        super(obj)
    }

    _scale: CustomResourceSubresourceScaleHelper;
    get scale(): CustomResourceSubresourceScaleHelper {
        return this._scale
    }
    set scale(x: CustomResourceSubresourceScaleHelper) {
        this._scale = x
    }
    $Scale(x: CustomResourceSubresourceScaleHelper) {
        this.scale = x; return this
    }

    _status: CustomResourceSubresourceStatusHelper;
    get status(): CustomResourceSubresourceStatusHelper {
        return this._status
    }
    set status(x: CustomResourceSubresourceStatusHelper) {
        this._status = x
    }
    $Status(x: CustomResourceSubresourceStatusHelper) {
        this.status = x; return this
    }
}

export interface CustomResourceValidationHelper extends CustomResourceValidation {
    $openAPIV3Schema(x: JSONSchemaProps): CustomResourceValidationHelper;
}

/** CustomResourceValidation is a list of validation methods for CustomResources. */
export class CustomResourceValidationHelper extends Template implements CustomResourceValidationHelper {
    constructor(obj: any) {
        super(obj)
    }

    _openAPIV3Schema: JSONSchemaProps;
    get openAPIV3Schema(): JSONSchemaProps {
        return this._openAPIV3Schema
    }
    set openAPIV3Schema(x: JSONSchemaProps) {
        this._openAPIV3Schema = x
    }
    $OpenAPIV3Schema(x: JSONSchemaProps) {
        this.openAPIV3Schema = x; return this
    }
}

export interface ExternalDocumentationHelper extends ExternalDocumentation {
    $description(x: string): ExternalDocumentationHelper;
    $url(x: string): ExternalDocumentationHelper;
}

/** ExternalDocumentation allows referencing an external resource for extended documentation. */
export class ExternalDocumentationHelper extends Template implements ExternalDocumentationHelper {
    constructor(obj: any) {
        super(obj)
    }

    _description: string;
    get description(): string {
        return this._description
    }
    set description(x: string) {
        this._description = x
    }
    $Description(x: string) {
        this.description = x; return this
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

export interface WebhookClientConfigHelper extends WebhookClientConfig {
    $caBundle(x: string): WebhookClientConfigHelper;
    service: ServiceReferenceHelper;
    $service(x: ServiceReferenceHelper): WebhookClientConfigHelper;
    $url(x: string): WebhookClientConfigHelper;
}

/** WebhookClientConfig contains the information to make a TLS connection with the webhook. */
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
