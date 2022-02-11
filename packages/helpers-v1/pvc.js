const { Resource } = require('./resource')

class PersistentVolumeClaim extends Resource {
    static kind = 'PersistentVolumeClaim'
    static apiVersion = 'v1'

    constructor(name) {
        super(name, PersistentVolumeClaim.kind, PersistentVolumeClaim.apiVersion)
    }

    spec(size, accessModes = ['ReadWriteOnce']) {
        if (accessModes.some(mode => mode != 'ReadOnlyMany' && mode != 'ReadWriteOnce' && mode != 'ReadWriteMany'))
            throw new Error('accessmMode must be ReadWriteMany, ReadOnlyMany, or ReadWriteOnce')
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