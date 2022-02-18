import { Template } from './template'
import { Resource, Cluster } from '@c6o/kubeclient-contracts'
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

    _kind: string
    _apiVersion: string

    constructor(nameOrObject: string | any = undefined, namespace = undefined, kind: string, apiVersion: string) {
        super(typeof (nameOrObject) == 'string' ? undefined : nameOrObject)

        this._kind = kind
        this._apiVersion = apiVersion

        if (typeof (nameOrObject) == 'string') {
            this.metadata = {
                labels: ResourceTemplate.defaultLabels,
                annotations: ResourceTemplate.defaultAnnotations,
                name: nameOrObject,
            }
            this._tidy(this.metadata)
        }
        // set a namespace if given.
        if (namespace) {
            this.metadata.namespace = namespace
        }
    }

    fromResource(resource) {
        this.fromObject( resource || new ResourceTemplate(null, null, this._kind, this._apiVersion))
        return this
    }

    get name() { return this.metadata.name }
    set name(x: string) { this.metadata.name = x }
    $name(x: string): ResourceTemplate { this.name = x; return this }

    get namespace() { return this.metadata.namespace }
    set namespace(x: string) { this.metadata.namespace = x }
    $namespace(x: string): ResourceTemplate { this.namespace = x; return this }

    get labels() { return this.metadata.labels }
    set labels(x: {[name: string]: string}) { this.metadata.labels = this.set(this.metadata.labels, x) }
    $labels(x: {[name: string]: string}): ResourceTemplate { this.labels = x; return this }

    get annotations() { return this.metadata.annotations }
    set annotations(x: {[name: string]: string}) { this.metadata.annotations = this.set(this.metadata.annotations, x) }
    $annotations(x: {[name: string]: string}): ResourceTemplate { this.annotations = x; return this }

    _metadata: any
    get metadata() { return this._metadata }
    set metadata(x: any ) { this._metadata = this.set(this._metadata, x) }
    $metadata(x: any): ResourceTemplate { this.metadata = x; return this }

    // TODO:
    // _spec: SpecHelper
    // get spec() { return this._spec }
    // set spec(x: SpecHelper ) { this._spec = this.set(this._spec, x) }
    // $spec(x: SpecHelper): ResourceTemplate { this.spec = x; return this }

    // TODO:
    // _status: StatusHelper
    // get status() { return this._status }
    // set status(x: StatusHelper ) { this._status = this.set(this._status, x) }
    // $status(x: StatusHelper): ResourceTemplate { this.status = x; return this }



    async create(cluster: Cluster) {
        const result = await cluster.create(this.toTemplate())
        result.throwIfError(`Create failed for ${this.toTemplate()}`)
        return result
    }
    async patch(cluster: Cluster) { return this }
    async get(cluster: Cluster) { return this }
    async watch(cluster: Cluster) { return this }
    async list(cluster: Cluster) { return this }
}
