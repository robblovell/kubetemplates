import {
    PersistentVolumeClaimHelper,
} from '@rel/kubetemplate-resources/lib/core/v1-helper'

class PersistentVolumeClaim extends PersistentVolumeClaimHelper {

    constructor(name, namespace) {
        super(name, namespace)
    }

    // todo, use PersistentVolumeClaimSpecHelper
    $spec(size, accessModes = ['ReadWriteOnce']) {
        if (accessModes.some(mode => mode != 'ReadOnlyMany' && mode != 'ReadWriteOnce' && mode != 'ReadWriteMany'))
            throw new Error('accessmMode must be ReadWriteMany, ReadOnlyMany, or ReadWriteOnce')
        this.spec = {
            ...this.spec,
            ...{
                accessModes: accessModes,
                resources: {
                    requests: {
                        storage: size
                    }
                }
            }
        } as any
        return this
    }
}

module.exports = { PersistentVolumeClaim }