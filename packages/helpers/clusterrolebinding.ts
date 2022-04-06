import { ClusterRoleBindingHelper, RoleRefHelper, SubjectHelper } from '@rel/kubetemplate-resources/rbac/v1-helper'

class ClusterRoleBinding extends ClusterRoleBindingHelper {

    constructor(name, clusterRole, subjects) {
        super(name, null)
        if (clusterRole && subjects)
            this.binding(clusterRole, subjects)
        return this
    }

    $subjects(subjects: SubjectHelper[]) {
        this.subjects = subjects.map(subject => subject)
        return this
    }

    $roleRef(roleReference: RoleRefHelper) {
        this.roleRef = roleReference
        return this
    }

    binding(roleReference: RoleRefHelper, subjects: SubjectHelper[]) {
        this.$roleRef(roleReference)
        this.$subjects(subjects)
    }
}

module.exports = { ClusterRoleBinding }
