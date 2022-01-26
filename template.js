class Template {
    template = {}
    static defaultAnnotations = undefined
    static defaultLabels = undefined

    constructor(name = undefined, kind = "CertificateSigningRequest", apiVersion = "v1", metadata = undefined, spec = undefined) {
        this.template = {
            apiVersion: `certificates.k8s.io/${apiVersion}`,
            kind: kind,
            metadata: {
                labels: Template.defaultLabels,
                annotations: Template.defaultAnnotations,
                ...metadata,
                name,
            },
            spec: spec,
        }
        this.tidy()
        return this
    }

    tidy() {
        // delete the spec, or any other value if it is undefined
        Object.keys(this.template).forEach(key => {
            if (this.template[key] === undefined) {
                delete this.template[key];
            }
        })
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
            ...Template.defaultLabels,
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
            ...Template.defaultAnnotations,
            ...this.template.metadata.annotations,
            ...annotations
        }
        return this
    }

    json() {
        return JSON.stringify(this.template, null, 2)
    }
}

module.exports = { Template }
