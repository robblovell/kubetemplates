const { Resource } = require('./resource')

class ClusterRoleBinding extends Resource {
    constructor(user, clusterRole) {
        super(name, 'ClusterRole')
        this.binding(user, clusterRole)
        return this
    }

    binding(user, clusterRole) {
        this.template = {
            
        }
    }
}

module.exports = { ClusterRoleBinding }