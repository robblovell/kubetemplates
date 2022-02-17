import { Template } from './template'
import { Resource } from '@c6o/kubeclient-contracts'
export { Template }

export interface ResourceTemplate extends Resource {
    $name(x: string): ResourceTemplate
    $namespace(x: string): ResourceTemplate
    $labels(x: {[name: string]: string}): ResourceTemplate
    $annotations(x: {[name: string]: string}): ResourceTemplate
    $metadata(x: any): ResourceTemplate
}

export const ResourceTemplate = class extends Template implements ResourceTemplate {
    static defaultAnnotations = undefined
    static defaultLabels = undefined

    constructor(nameOrObject: string | any = undefined, namespace = undefined, kind: string, apiVersion: string) {
        super(typeof (nameOrObject) == 'string' ? undefined : nameOrObject)
        // TODO:
        // this.apiVersion = apiVersion
        // this.kind = kind
        if (typeof (nameOrObject) == 'string') {
            this.metadata = {
                labels: ResourceTemplate.defaultLabels,
                annotations: ResourceTemplate.defaultAnnotations,
                name: nameOrObject,
                namespace
            }
            this._tidy(this.metadata)
        }
        // TODO: decide if it is useful to set a namespace if the name is an object.
        // if (namespace) {
        //     this.namespace = namespace
        // }
    }

    // TODO:
    // fromResource(resource) {
    //     this.from( resource || new ResourceTemplate(null, this.kind, this.apiVersion))
    //     return this
    // }

    // TODO:
    // _kind: string
    // get kind() { return this._kind }
    // // set kind(x: string) { this._kind = x }

    // _apiVersion: string // 'v1' if not specified
    // get apiVersion() { return this._apiVersion }
    // // set apiVersion(x: string) { this._apiVersion = x }

    get name() { return this.metadata.name }
    set name(x: string) { this.metadata.name = x }
    $name(x: string): ResourceTemplate { this.name = x; return this as any }

    get namespace() { return this.metadata.namespace }
    set namespace(x: string) { this.metadata.namespace = x }
    $namespace(x: string): ResourceTemplate { this.namespace = x; return this as any }

    get labels() { return this.metadata.labels }
    set labels(x: {[name: string]: string}) { this.metadata.labels = x }
    $labels(x: {[name: string]: string}): ResourceTemplate { this.labels = x; return this as any }

    get annotations() { return this.metadata.annotations }
    set annotations(x: {[name: string]: string}) { this.metadata.annotations = x }
    $annotations(x: {[name: string]: string}): ResourceTemplate { this.annotations = x; return this as any }

    _metadata: any
    get metadata() { return this._metadata }
    set metadata(x: any ) { this._metadata = this.set(this._metadata, x) as any }
    $metadata(x: any): ResourceTemplate { this.metadata = x; return this }

    // TODO:
    // _spec: SpecHelper
    // get spec() { return this._spec }
    // set spec(x: SpecHelper ) { this._spec = this.set(this._spec, x) as any }
    // $spec(x: SpecHelper): ResourceTemplate { this.spec = x; return this }

    // _status: StatusHelper
    // get status() { return this._status }
    // set status(x: StatusHelper ) { this._status = this.set(this._status, x) as any }
    // $status(x: StatusHelper): ResourceTemplate { this.status = x; return this }

    create() {}
    patch() {}
    get() {}
    watch() {}
    list() {}
}
