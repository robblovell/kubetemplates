const { Resource } = require('./resource')

class Secret extends Resource {
    static kind = 'PersistentVolumeClaim'
    static apiVersion = 'v1'

    constructor(name) {
        super(name, Secret.kind, Secret.apiVersion)
    }

    type(type = 'kubernetes.io/tls') {
        this.template.type = {
            ...this.template.type,
            type
        }
        return this
    }

    data(data) {
        this.template.data = {
            ...this.template.data,
            ...data
        }
        return this
    }
}

module.exports = { Secret }