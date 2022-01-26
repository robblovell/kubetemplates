class Template {
    template = {}

    constructor() {
        return this
    }

    tidy() {
        // delete the spec, or any other value if it is undefined
        this._tidy(this.template)
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
    }

    json() {
        return JSON.stringify(this.template, null, 2)
    }
}

module.exports = { Template }
