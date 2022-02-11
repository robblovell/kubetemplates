export const Template = class {
    // template = {}

    constructor() {
    }

    // tidy() {
    //     // delete the spec, or any other value if it is undefined
    //     this._tidy(this.template)
    //     return this
    // }
    // _tidy(object) {
    //     Object.keys(object).forEach(key => {
    //         if (object[key] === undefined) {
    //             delete object[key];
    //         }
    //         if (typeof object[key] === 'object' &&
    //             !Array.isArray(object[key]) &&
    //             object[key] !== null) {
    //             this._tidy(object[key])
    //         }
    //     })
    // }
    toString() {
        return JSON.stringify(this).replace(/__/g,'')
    }
    toTemplate(): any {
        let obj = {}
        for (const key of Object.keys(this)) {
            const value = this[key]

            const field = key.replace(/__/g,'')
            if (Array.isArray(value)) {
                obj[field] = value.map(v => v.toTemplate ? v.toTemplate() : v)
            } else if (value instanceof Object) {
                obj[field] = value.toTemplate ? value.toTemplate(): value
            } else {
                obj[field] = value
            }
        }
        return obj
    }
    // for objects and arrays
    setPropertyByType(to, from, type=undefined) {
        if (Array.isArray(from)) {
            to = from.map(v => this.setPropertyByType(v, v, type))
        } else if (from instanceof Object) {
            to = from
        } else {
            if (type instanceof Object)
                to = new (<any>this).constructor(from)
            else
                to = from
        }
        return to
    }
    setArrayByType(to, from, type=undefined) {
        if (Array.isArray(from)) {
            to = from.map(v=>this.setPropertyByType(v,v, type))
        } else {
            to = [this.setPropertyByType(to, from, type)]
        }
        return to
    }
}