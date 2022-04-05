import { RoleBindingHelper, RoleRefHelper, SubjectHelper } from '@c6o/kubetempletes-resources/rbac/v1-helper'

class RoleBinding extends RoleBindingHelper {
    static kind = 'RoleBinding'
    static apiVersion = 'rbac.authorization.k8s.io/v1'

    constructor(name, namespace, roleReference= {}, subjects= []) {
        super(name, namespace)
        this.binding(roleReference, subjects)
        return this
    }

    $subjects(subjects: SubjectHelper[] ) {
        this.subjects = subjects.map(subject => subject.toTemplate())
        return this
    }

    $roleRef(roleReference: RoleRefHelper /* binding */) {
        this.roleRef = roleReference.toTemplate()
        return this
    }

    binding(roleReference, subjects) {
        this.$roleRef(roleReference)
        this.$subjects(subjects)
    }
}

module.exports = { RoleBinding }
