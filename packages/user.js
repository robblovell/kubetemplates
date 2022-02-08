const { Resource } = require("./resource")
// const cryptico = require("cryptico-js")
// const { v4 } = require('uuid')
const NodeRSA = require('node-rsa');

const statuses = ['Pending', 'Approved', 'Denied', 'Revoked']

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

class User extends Resource {
    static kind = 'User'
    static apiVersion = 'system.codezero.io/v1'

    constructor(name) {
        super(name, User.kind, User.apiVersion)
    }

    spec(email, groups, keys = generateKeys()) {
        this.template.spec = {
            ...this.template.spec,
            email,
            groups,
            keys,
        }
        return this
    }

    revision(revision) {
        if (!this.template.spec) this.template.spec = {}
        this.template.spec.current = revision
        if (!this.template.spec.revisions) this.template.spec.revisions = []

        if (!this.template.spec.revisions.find(i=>i===revision)) {
            this.template.spec.revisions.push(revision)
        }
    }

    status(status) {
        if (!statuses.some(s => status === s))
            throw new Error(`Status must be one of the following: [${statuses}]`)
        this.template.status = status
        return this
    }
}

module.exports = { User }
