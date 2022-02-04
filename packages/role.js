const { Resource } = require('./resource')

class Role extends Resource {

    static kind = 'Role'
    static apiVersion = 'rbac.authorization.k8s.io/v1'

    constructor(name, rules = []) {
        super(name, Role.kind, Role.apiVersion)
        this.rules(rules)
        return this
    }

    rules(rules) {
        if (!this.template.rules) this.template.rules = []
        this.template.rules = [
            ...this.template.rules,
            ...rules.map(rule => rule.template)
        ]
        return this
    }
}

module.exports = { Role }