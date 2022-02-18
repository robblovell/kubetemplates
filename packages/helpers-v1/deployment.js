const { Resource } = require('./resource')

class Deployment extends Resource {
    static kind = 'Deployment'
    static apiVersion = 'apps/v1'

    constructor(name, containers) {
        super(name, Deployment.kind, Deployment.apiVersion)
        this.containers(containers)
    }

    // for securityContext, see: // See https://github.com/c6o/provisioners/issues
}

module.exports = { Deployment }