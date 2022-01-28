const { Resource } = require('./resource')

class Role extends Resource {
    constructor(name, rules = []) {
        super(name, 'Role', 'rbac.authorization.k8s.io/v1')
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