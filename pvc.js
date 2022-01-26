const { Template } = require('./template')

class PersistentVolumeClaim extends Template {
    constructor(name) {
        super(name, 'PersistentVolumeClaim')
    }

    spec(size, accessModes = ['ReadWriteOnce']) {
        this.template.spec = {
            ...this.template.spec,
            ...{
                accessModes: accessModes,
                resources: {
                    requests: {
                        storage: size
                    }
                }
            }
        }
        return this
    }
}

module.exports = { PersistentVolumeClaim }