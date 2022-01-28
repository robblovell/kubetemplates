const { Resource } = require('./resource')

class Secret extends Resource {
    constructor(name) {
        super(name, 'Secret')
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