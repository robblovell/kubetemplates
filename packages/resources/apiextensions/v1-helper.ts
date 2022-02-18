import { ResourceTemplate, Template } from "../resourceTemplate";
import { CustomResourceColumnDefinition, CustomResourceConversion, CustomResourceDefinition, CustomResourceDefinitionCondition, CustomResourceDefinitionList, CustomResourceDefinitionNames, CustomResourceDefinitionSpec, CustomResourceDefinitionStatus, CustomResourceDefinitionVersion, CustomResourceSubresourceScale, CustomResourceSubresourceStatus, CustomResourceSubresources, CustomResourceValidation, ExternalDocumentation, JSONSchemaProps, ServiceReference, ValidationRule, WebhookClientConfig, WebhookConversion } from "./v1";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";
import { ListMetaHelper, ObjectMetaHelper } from "../meta/v1-helper";

export interface CustomResourceColumnDefinitionHelper extends CustomResourceColumnDefinition {
    $description(x: string): CustomResourceColumnDefinitionHelper;
    $format(x: string): CustomResourceColumnDefinitionHelper;
    $jsonPath(x: string): CustomResourceColumnDefinitionHelper;
    $priority(x: number): CustomResourceColumnDefinitionHelper;
    $type(x: string): CustomResourceColumnDefinitionHelper;
}

/** CustomResourceColumnDefinition specifies a column for server side printing. */
export class CustomResourceColumnDefinitionHelper extends Template implements CustomResourceColumnDefinitionHelper {
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
    $description(x: string) {
        this.description = x; return this
    }

    _format: string;
    get format(): string {
        return this._format
    }
    set format(x: string) {
        this._format = x
    }
    $format(x: string) {
        this.format = x; return this
    }

    _jsonPath: string;
    get jsonPath(): string {
        return this._jsonPath
    }
    set jsonPath(x: string) {
        this._jsonPath = x
    }
    $jsonPath(x: string) {
        this.jsonPath = x; return this
    }

    _priority: number;
    get priority(): number {
        return this._priority
    }
    set priority(x: number) {
        this._priority = x
    }
    $priority(x: number) {
        this.priority = x; return this
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

export interface CustomResourceConversionHelper extends CustomResourceConversion {
    $strategy(x: string): CustomResourceConversionHelper;
    $webhook(x: WebhookConversionHelper): CustomResourceConversionHelper;
}

/** CustomResourceConversion describes how to convert different versions of a CR. */
export class CustomResourceConversionHelper extends Template implements CustomResourceConversionHelper {
    constructor(obj: any) {
        super(obj)
    }

    _strategy: string;
    get strategy(): string {
        return this._strategy
    }
    set strategy(x: string) {
        this._strategy = x
    }
    $strategy(x: string) {
        this.strategy = x; return this
    }

    _webhook: WebhookConversionHelper;
    get webhook(): WebhookConversionHelper {
        return this._webhook
    }
    set webhook(x: WebhookConversionHelper) {
        this._webhook = x
    }
    $webhook(x: WebhookConversionHelper) {
        this.webhook = x; return this
    }
}

export interface CustomResourceDefinitionHelper extends CustomResourceDefinition {
    $metadata(x: ObjectMetaHelper): CustomResourceDefinitionHelper;
    $spec(x: CustomResourceDefinitionSpecHelper): CustomResourceDefinitionHelper;
    $status(x: CustomResourceDefinitionStatusHelper): CustomResourceDefinitionHelper;
}

/** CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>. */
export class CustomResourceDefinitionHelper extends ResourceTemplate implements CustomResourceDefinitionHelper {
    static kind = 'CustomResourceDefinition';
    static apiVersion = 'apiextensions/v1';

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
    $metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: CustomResourceDefinitionSpecHelper;
    get spec(): CustomResourceDefinitionSpecHelper {
        return this._spec
    }
    set spec(x: CustomResourceDefinitionSpecHelper) {
        this._spec = x
    }
    $spec(x: CustomResourceDefinitionSpecHelper) {
        this.spec = x; return this
    }

    _status: CustomResourceDefinitionStatusHelper;
    get status(): CustomResourceDefinitionStatusHelper {
        return this._status
    }
    set status(x: CustomResourceDefinitionStatusHelper) {
        this._status = x
    }
    $status(x: CustomResourceDefinitionStatusHelper) {
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

export interface CustomResourceDefinitionListHelper extends CustomResourceDefinitionList {
    $items(x: Array<CustomResourceDefinition>): CustomResourceDefinitionListHelper;
    $metadata(x: ListMetaHelper): CustomResourceDefinitionListHelper;
}

/** CustomResourceDefinitionList is a list of CustomResourceDefinition objects. */
export class CustomResourceDefinitionListHelper extends ResourceTemplate implements CustomResourceDefinitionListHelper {
    static kind = 'CustomResourceDefinitionList';
    static apiVersion = 'apiextensions/v1';

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
    $items(x: Array<CustomResourceDefinition>) {
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
    $categories(x: Array<string>) {
        this.categories = x; return this
    }

    _listKind: string;
    get listKind(): string {
        return this._listKind
    }
    set listKind(x: string) {
        this._listKind = x
    }
    $listKind(x: string) {
        this.listKind = x; return this
    }

    _plural: string;
    get plural(): string {
        return this._plural
    }
    set plural(x: string) {
        this._plural = x
    }
    $plural(x: string) {
        this.plural = x; return this
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

    _singular: string;
    get singular(): string {
        return this._singular
    }
    set singular(x: string) {
        this._singular = x
    }
    $singular(x: string) {
        this.singular = x; return this
    }
}

export interface CustomResourceDefinitionSpecHelper extends CustomResourceDefinitionSpec {
    $conversion(x: CustomResourceConversionHelper): CustomResourceDefinitionSpecHelper;
    $group(x: string): CustomResourceDefinitionSpecHelper;
    $names(x: CustomResourceDefinitionNamesHelper): CustomResourceDefinitionSpecHelper;
    $preserveUnknownFields(x: boolean): CustomResourceDefinitionSpecHelper;
    $scope(x: string): CustomResourceDefinitionSpecHelper;
    $versions(x: Array<CustomResourceDefinitionVersion>): CustomResourceDefinitionSpecHelper;
}

/** CustomResourceDefinitionSpec describes how a user wants their resource to appear */
export class CustomResourceDefinitionSpecHelper extends Template implements CustomResourceDefinitionSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _conversion: CustomResourceConversionHelper;
    get conversion(): CustomResourceConversionHelper {
        return this._conversion
    }
    set conversion(x: CustomResourceConversionHelper) {
        this._conversion = x
    }
    $conversion(x: CustomResourceConversionHelper) {
        this.conversion = x; return this
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

    _names: CustomResourceDefinitionNamesHelper;
    get names(): CustomResourceDefinitionNamesHelper {
        return this._names
    }
    set names(x: CustomResourceDefinitionNamesHelper) {
        this._names = x
    }
    $names(x: CustomResourceDefinitionNamesHelper) {
        this.names = x; return this
    }

    _preserveUnknownFields: boolean;
    get preserveUnknownFields(): boolean {
        return this._preserveUnknownFields
    }
    set preserveUnknownFields(x: boolean) {
        this._preserveUnknownFields = x
    }
    $preserveUnknownFields(x: boolean) {
        this.preserveUnknownFields = x; return this
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

    _versions: Array<CustomResourceDefinitionVersion>;
    get versions(): Array<CustomResourceDefinitionVersion> {
        return this._versions
    }
    set versions(x: Array<CustomResourceDefinitionVersion>) {
        this._versions = this.set(this.versions, x)
    }
    $versions(x: Array<CustomResourceDefinitionVersion>) {
        this.versions = x; return this
    }
}

export interface CustomResourceDefinitionStatusHelper extends CustomResourceDefinitionStatus {
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
    $acceptedNames(x: CustomResourceDefinitionNamesHelper) {
        this.acceptedNames = x; return this
    }

    _conditions: Array<CustomResourceDefinitionCondition>;
    get conditions(): Array<CustomResourceDefinitionCondition> {
        return this._conditions
    }
    set conditions(x: Array<CustomResourceDefinitionCondition>) {
        this._conditions = this.set(this.conditions, x)
    }
    $conditions(x: Array<CustomResourceDefinitionCondition>) {
        this.conditions = x; return this
    }

    _storedVersions: Array<string>;
    get storedVersions(): Array<string> {
        return this._storedVersions
    }
    set storedVersions(x: Array<string>) {
        this._storedVersions = this.set(this.storedVersions, x)
    }
    $storedVersions(x: Array<string>) {
        this.storedVersions = x; return this
    }
}

export interface CustomResourceDefinitionVersionHelper extends CustomResourceDefinitionVersion {
    $additionalPrinterColumns(x: Array<CustomResourceColumnDefinition>): CustomResourceDefinitionVersionHelper;
    $deprecated(x: boolean): CustomResourceDefinitionVersionHelper;
    $deprecationWarning(x: string): CustomResourceDefinitionVersionHelper;
    $schema(x: CustomResourceValidationHelper): CustomResourceDefinitionVersionHelper;
    $served(x: boolean): CustomResourceDefinitionVersionHelper;
    $storage(x: boolean): CustomResourceDefinitionVersionHelper;
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
    $additionalPrinterColumns(x: Array<CustomResourceColumnDefinition>) {
        this.additionalPrinterColumns = x; return this
    }

    _deprecated: boolean;
    get deprecated(): boolean {
        return this._deprecated
    }
    set deprecated(x: boolean) {
        this._deprecated = x
    }
    $deprecated(x: boolean) {
        this.deprecated = x; return this
    }

    _deprecationWarning: string;
    get deprecationWarning(): string {
        return this._deprecationWarning
    }
    set deprecationWarning(x: string) {
        this._deprecationWarning = x
    }
    $deprecationWarning(x: string) {
        this.deprecationWarning = x; return this
    }

    _schema: CustomResourceValidationHelper;
    get schema(): CustomResourceValidationHelper {
        return this._schema
    }
    set schema(x: CustomResourceValidationHelper) {
        this._schema = x
    }
    $schema(x: CustomResourceValidationHelper) {
        this.schema = x; return this
    }

    _served: boolean;
    get served(): boolean {
        return this._served
    }
    set served(x: boolean) {
        this._served = x
    }
    $served(x: boolean) {
        this.served = x; return this
    }

    _storage: boolean;
    get storage(): boolean {
        return this._storage
    }
    set storage(x: boolean) {
        this._storage = x
    }
    $storage(x: boolean) {
        this.storage = x; return this
    }

    _subresources: CustomResourceSubresourcesHelper;
    get subresources(): CustomResourceSubresourcesHelper {
        return this._subresources
    }
    set subresources(x: CustomResourceSubresourcesHelper) {
        this._subresources = x
    }
    $subresources(x: CustomResourceSubresourcesHelper) {
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
    $labelSelectorPath(x: string) {
        this.labelSelectorPath = x; return this
    }

    _specReplicasPath: string;
    get specReplicasPath(): string {
        return this._specReplicasPath
    }
    set specReplicasPath(x: string) {
        this._specReplicasPath = x
    }
    $specReplicasPath(x: string) {
        this.specReplicasPath = x; return this
    }

    _statusReplicasPath: string;
    get statusReplicasPath(): string {
        return this._statusReplicasPath
    }
    set statusReplicasPath(x: string) {
        this._statusReplicasPath = x
    }
    $statusReplicasPath(x: string) {
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
    $scale(x: CustomResourceSubresourceScaleHelper): CustomResourceSubresourcesHelper;
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
    $scale(x: CustomResourceSubresourceScaleHelper) {
        this.scale = x; return this
    }

    _status: CustomResourceSubresourceStatusHelper;
    get status(): CustomResourceSubresourceStatusHelper {
        return this._status
    }
    set status(x: CustomResourceSubresourceStatusHelper) {
        this._status = x
    }
    $status(x: CustomResourceSubresourceStatusHelper) {
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
    $openAPIV3Schema(x: JSONSchemaProps) {
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
    $description(x: string) {
        this.description = x; return this
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

export interface ValidationRuleHelper extends ValidationRule {
    $message(x: string): ValidationRuleHelper;
    $rule(x: string): ValidationRuleHelper;
}

/** ValidationRule describes a validation rule written in the CEL expression language. */
export class ValidationRuleHelper extends Template implements ValidationRuleHelper {
    constructor(obj: any) {
        super(obj)
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

    _rule: string;
    get rule(): string {
        return this._rule
    }
    set rule(x: string) {
        this._rule = x
    }
    $rule(x: string) {
        this.rule = x; return this
    }
}

export interface WebhookClientConfigHelper extends WebhookClientConfig {
    $caBundle(x: string): WebhookClientConfigHelper;
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

export interface WebhookConversionHelper extends WebhookConversion {
    $clientConfig(x: WebhookClientConfigHelper): WebhookConversionHelper;
    $conversionReviewVersions(x: Array<string>): WebhookConversionHelper;
}

/** WebhookConversion describes how to call a conversion webhook */
export class WebhookConversionHelper extends Template implements WebhookConversionHelper {
    constructor(obj: any) {
        super(obj)
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

    _conversionReviewVersions: Array<string>;
    get conversionReviewVersions(): Array<string> {
        return this._conversionReviewVersions
    }
    set conversionReviewVersions(x: Array<string>) {
        this._conversionReviewVersions = this.set(this.conversionReviewVersions, x)
    }
    $conversionReviewVersions(x: Array<string>) {
        this.conversionReviewVersions = x; return this
    }
}
