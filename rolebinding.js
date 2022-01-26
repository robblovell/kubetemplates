const { Resource } = require('./resource')

class RoleBinding extends Resource {
    constructor(name, clusterRole, subjects) {
        super(name, 'RoleBinding')
        this.binding(clusterRole, subjects)
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
