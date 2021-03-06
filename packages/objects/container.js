const { Template } = require('../template')

class Container extends Template {

    constructor(image, name = undefined, imagePullPolicy = undefined) {
        super()
        this.template = {
            image,
            name: name ? // if this is a deployment, use the deployment name.
                name.template ? (name.template.metadata.name) : name :
                // if name doesn't exist, use the image name.
                image,
            imagePullPolicy: imagePullPolicy || 'never',
        }
        return this
    }

    image(image) {
        this.template = {
            ...this.template,
            name,
        }
        return this
    }

    name(name) {
        this.template = {
            ...this.template,
            image,
        }
        return this
    }

    imagePullPolicy(imagePullPolicy) {
        this.template = {
            ...this.template,
            imagePullPolicy
        }
        return this
    }

    command(command) {
        this.template = {
            ...this.template,
            command
        }
        return this
    }

    ports(ports) { //
        this.contianer = {
            ...this.template,
            ports: [...this.template.ports, ...ports]
        }
        return this
    }
}

module.exports = { Container }