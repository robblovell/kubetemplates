import { DeploymentHelper } from '@c6o/kubetempletes-resources/lib/apps/v1-helper'
import { Container } from './objects'

class Deployment extends DeploymentHelper {
    constructor(name, namespace, containers: Container[]) {
        super(name, namespace)
        this.spec.template.spec.containers = containers
    }

    // for securityContext, see: // See https://github.com/c6o/provisioners/issues
}

module.exports = { Deployment }