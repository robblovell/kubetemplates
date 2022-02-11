const { Resource } = require('./resource')

class Deployment extends Resource {
    static kind = 'Deployment'
    static apiVersion = 'apps/v1'

    constructor(name, containers) {
        super(name, Deployment.kind, Deployment.apiVersion)
        this.containers(containers)
    }

    // for securityContext, see: // See https://github.com/c6o/provisioners/issues/182
    spec(matchLabels = {}, labels = {}, containers = [], securityContext = { fsGroup: 1000 }) {
        this.template.spec = {
            ...this.template.spec,
            ...{
                selector: {
                    matchLabels: {
                        ...(this.template.spec) ? this.template.spec.selector.matchLabels : undefined,
                        ...matchLabels
                    }
                },
                template: {
                    metadata: {
                        ...(this.template.spec) ? this.template.spec.template.metadata.labels : undefined,
                        ...labels
                    },
                    spec: {
                        containers: containers.map(container => container.template),
                        securityContext,
                    }
                }
            }
        }
        return this
    }

    containers(containers) {
        if (!this.template.spec || !this.template.spec.template || !this.template.spec.template.spec)
            return
        this.template.spec.template.spec.containers = [
            ...this.template.spec.template.spec.containers,
            ...containers.map(container => container.template),
        ]
        return this
    }
}

module.exports = { Deployment }