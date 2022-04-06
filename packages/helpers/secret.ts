import { SecretHelper } from '@rel/kubetemplate-resources/core/v1-helper'

export class Secret extends SecretHelper {
    static kind = 'PersistentVolumeClaim'
    static apiVersion = 'v1'

    constructor(name, namespace) {
        super(name, namespace)
    }

    _type: any;
    get type(): any {
        return this._type
    }
    set type(x: any) {
        this._type = x
    }
    $type(type = 'kubernetes.io/tls') {
        this.type = {
            ...this.type,
            type
        }
        return this
    }

    _data: any;
    get data(): any {
        return this._data
    }
    set data(x: any) {
        this._data = x
    }
    $data(data) {
        this.data = {
            ...this.data,
            ...data
        }
        return this
    }
}
