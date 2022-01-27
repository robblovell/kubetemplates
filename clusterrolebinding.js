const { Resource } = require('./resource')

class ClusterRoleBinding extends Resource {
    constructor(name, clusterRole, subjects) {
        super(name, 'ClusterRoleBinding', 'rbac.authorization.k8s.io/v1')
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

module.exports = { ClusterRoleBinding }
