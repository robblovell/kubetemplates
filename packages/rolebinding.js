const { Resource } = require('./resource')

class RoleBinding extends Resource {
    constructor(name, roleReference, subjects) {
        super(name, 'RoleBinding', 'rbac.authorization.k8s.io/v1')
        this.binding(roleReference, subjects)
        return this
    }

    subjects(subjects /* binding */) {
        this.template.subjects = subjects.map(subject => subject.template)
    }

    roleRef(roleReference /* binding */) {
        this.template.roleRef = roleReference.template
    }

    binding(roleReference, subjects) {
        this.roleRef(roleReference)
        this.subjects(subjects)
    }
}

module.exports = { RoleBinding }
