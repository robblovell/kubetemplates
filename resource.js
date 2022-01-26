const { Template } = require('./template')

class Resource extends Template {
    static defaultAnnotations = undefined
    static defaultLabels = undefined

    constructor(name = undefined, kind = undefined, apiVersion = "v1", metadata = undefined, spec = undefined) {
        super()
        if (!name) throw new Error('A name must be defined.')
        if (!kind) throw new Error('A kind must be defined.')
        this.template = {
            apiVersion: `certificates.k8s.io/${apiVersion}`,
            kind: kind,
            metadata: {
                labels: Resource.defaultLabels,
                annotations: Resource.defaultAnnotations,
                ...metadata,
                name,
            },
            spec: spec,
        }
        this.tidy()
        return this
    }

    name(name) {
        this.template.metadata = {
            ...this.template.metadata,
            name
        }
        return this
    }

    namespace(namespace) {
        this.template.metadata = {
            ...this.template.metadata,
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

    labels(labels) {
        this.template.metadata.labels = {
            ...Resource.defaultLabels,
            ...this.template.metadata.labels,
            ...labels
        }
        return this
    }

    static annotations(defaultAnnotations) {
        this.defaultAnnotations = {
            ...this.defaultAnnotations,
            ...defaultAnnotations
        }
    }

    annotations(annotations) {
        this.template.metadata.annotations = {
            ...Resource.defaultAnnotations,
            ...this.template.metadata.annotations,
            ...annotations
        }
        return this
    }

}

module.exports = { Resource }
