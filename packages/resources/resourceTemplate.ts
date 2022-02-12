import { Template } from './template'

export const ResourceTemplate = class extends Template {
    static defaultAnnotations = undefined
    static defaultLabels = undefined

    constructor(name = undefined, kind = undefined, apiVersion = "v1", metadata = undefined, spec = undefined) {
        super()
        // if (!name) throw new Error('A name must be defined.')
        if (!kind) throw new Error('A kind must be defined.')
        this._template = {
            apiVersion: apiVersion,
            kind: kind,
            metadata: {
                labels: ResourceTemplate.defaultLabels,
                annotations: ResourceTemplate.defaultAnnotations,
                ...metadata,
                name,
            },
            spec: spec,
        }
        // if (Resource.defaultLabels) this._template.metadata.labels = Resource.defaultLabels
        // if (Resource.defaultAnnotations) this._template.metadata.annotations = Resource.defaultAnnotations
        this.tidy()
        return this
    }

    name(name) {
        this._template.metadata = {
            ...this._template.metadata,
            name
        }
        return this
    }

    namespace(namespace) {
        this._template.metadata = {
            ...this._template.metadata,
            namespace
    }
        return this
    }

    static labels(defaultLabels) {
        this.defaultLabels = {
            ...this.defaultLabels,
            ...defaultLabels
        }
    }

    // labels(labels) {
    //     this._template.metadata.labels = {
    //         ...ResourceTemplate.defaultLabels,
    //         ...this._template.metadata.labels,
    //         ...labels
    // }
    //     return this
    // }
    
    static annotations(defaultAnnotations) {
        this.defaultAnnotations = {
            ...this.defaultAnnotations,
            ...defaultAnnotations
    }
    }

    // annotations(annotations) {
    //     this._template.metadata.annotations = {
    //         ...ResourceTemplate.defaultAnnotations,
    //         ...this._template.metadata.annotations,
    //         ...annotations
    // }
    //     return this
    // }

    // static from(resource) {
    //     // add resource api and kind
    //     resource.kind = this.kind
    //     resource.apiVersion = this.apiVersion
    //     // TODO: call from on the child? or call this class from the child...
    //     return resource
    // }

    fromResource(resource) {
        this._template = resource || new ResourceTemplate(null, this._template.kind)
        return this
    }

}
