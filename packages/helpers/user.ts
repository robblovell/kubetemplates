import { ResourceTemplate } from '@rel/kubetemplate-resources/resourceTemplate'

const NodeRSA = require('node-rsa');

const statuses = ['Pending', 'Approved', 'Denied', 'Revoked']

// TODO: this doesn't belong here.
const generateKeys = () => {
    // const passphrase = v4()
    // const bits = 2048
    //
    // const privateRSAkey = cryptico.generateRSAKey(passphrase, bits)
    // const publicKeyString = cryptico.publicKeyString(privateRSAkey)

    const key = new NodeRSA({b: 1024})
    const publicKey = key.exportKey('public')
    const privateKey = key.exportKey('pkcs8')

    return { publicKey, privateKey }
}

export class User extends ResourceTemplate {
    static kind = 'User'
    static apiVersion = 'system.codezero.io/v1'

    constructor(name) {
        super(name, null, User.kind, User.apiVersion)
    }
    
    // TODO: user spec helper
    _spec: any;
    get spec(): any {
        return this._spec
    }
    set spec(x: any) {
        this._spec = x
    }
    $spec(email, groups, keys = generateKeys()) {
        this.spec = {
            ...this.spec,
            email,
            groups,
            keys,
        }
        return this
    }
    
    $revision(revision) {
        if (!this.spec) this.spec = {}
        this.spec.current = revision
        if (!this.spec.revisions) this.spec.revisions = []

        if (!this.spec.revisions.find(i=>i===revision)) {
            this.spec.revisions.push(revision)
        }
    }

    // TODO: user status helper
    _status: any;
    get status(): any {
        return this._status
    }
    set status(x: any) {
        this._status = x
    }
    $status(status: any) {
        if (!statuses.some(s => status === s))
            throw new Error(`Status must be one of the following: [${statuses}]`)
        this.status = status
        return this
    }
}

module.exports = { User }
