const { Resource } = require('./resource')

class ClusterRole extends Resource {
    static kind = 'ClusterRole'
    static apiVersion = 'rbac.authorization.k8s.io/v1'
    constructor(name, rules = []) {
        super(name, ClusterRole.kind, ClusterRole.apiVersion)
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

module.exports = { ClusterRole }