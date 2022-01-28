const { Template } = require('../template')

class Binding extends Template {
    constructor(name, kind, apiGroup = 'rbac.authorization.k8s.io') {
        super()
        this.template = {
            name,
            kind,
            apiGroup,
        }
        return this
    }
}

module.exports = { Binding }