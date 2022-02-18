import { Cluster as iCluster } from '@c6o/kubeclient-contracts/lib/cluster'

const jp = require('jsonpath')
type basic = string | number | boolean | undefined | null | unknown
type map = { [name: string]: basic }

// TODO: unit tests.
export const Template = class {
    constructor(obj: any = undefined) { this.fromObject(obj) }

    set(to: any, from: any) {
        if (!to) return from
        if (Array.isArray(from)) { // to is array too.
            for (const value of from) {
                if (!to.includes(value)) {
                    to.push(value)
                }
            }
        } else if (Array.isArray(to)) {
            to.push(from)
        } else if (typeof from == 'object') { // to is object or map too.
            const result = from
            for (const key of Object.keys(to)) {
                result[key] = to[key]
            }
            return result
        } else // to is not an array, from is not object or array.
            to = from
        return to
    }

    string() {
        return JSON.stringify(this, undefined, 2)
            .replace(/_/g,'')
    }
    toJson() {
        return this.string()
    }

    toTemplate(exclude: any = { cluster: true }): any {
        let obj = {}
        for (const key of Object.keys(this)) {
            if (exclude[key])
                continue
            const value = this[key]

            const field = key.replace(/_/g,'')
            if (Array.isArray(value)) {
                obj[field] = value.map(v => v.toTemplate ? v.toTemplate(exclude) : v)
            } else if (value instanceof Object) {
                obj[field] = value.toTemplate ? value.toTemplate(exclude): value
            } else {
                obj[field] = value
            }
        }
        return obj
    }

    fromObject(obj): any {
        if (!obj) return
        for (const key of Object.keys(obj)) {
            const value = obj[key]
            const field = key.replace(/_/g,'')
            this[field] = value
            // TODO: is this needed??? Need unit tests for from.
            // if (Array.isArray(value)) {
            //     this[field] = value.map(v => v) //v.from ? v.from() : v)
            // } else if (value instanceof Object) {
            //     this[field] = value //.from ? value.from(): value
            // } else {
            //     this[field] = value
            // }
        }
        return this
    }

    at(path) {
        return jp.query(this, path)
    }

    tidy() {
        // delete the spec, or any other value if it is undefined
        this._tidy(this)
        return this
    }

    _tidy(object) {
        Object.keys(object).forEach(key => {
            if (object[key] === undefined) {
                delete object[key];
            }
            if (typeof object[key] === 'object' &&
                !Array.isArray(object[key]) &&
                object[key] !== null) {
                this._tidy(object[key])
            }
        })
        return object
    }
}