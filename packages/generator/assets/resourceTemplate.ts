const { Template } = require('./template')

export const ResourceTemplate = class extends Template {
    __apiVersion
    __kind
    __name
    __namespace

    constructor(name = undefined, namespace = undefined) {
        super()
        this.name = name
        this.namespace = namespace
    }

    get kind(): string {
        return this.__kind
    }
    set kind(x: string) {
        this.__kind = this.setPropertyByType(this.kind, x, 'string')
    }
    setKind(x: string) {
        this.kind = x; return this
    }

    get apiVersion(): string {
        return this.__apiVersion
    }
    set apiVersion(x: string) {
        this.__apiVersion = this.setPropertyByType(this.apiVersion, x, 'string')
    }
    setApiVersion(x: string) {
        this.apiVersion = x; return this
    }
    
    get name(): string {
        return this.__name
    }
    set name(x: string) {
        this.__name = this.setPropertyByType(this.name, x, 'string')
    }
    setName(x: string) {
        this.name = x; return this
    }

    get namespace(): string {
        return this.__namespace
    }
    set namespace(x: string) {
        this.__namespace = this.setPropertyByType(this.namespace, x, 'string')
    }
    setNamespace(x: string) {
        this.namespace = x; return this
    }

    static from(resource) {
        // add resource api and kind
        resource.kind = this.kind
        resource.apiVersion = this.apiVersion
        // TODO: call from on the child? or call this class from the child...
        return resource
    }

    // TODO: Instance from resource.
    // from(resource) {
    //     this = resource || new ResourceTemplate(null, )
    //     return this
    // }

}
