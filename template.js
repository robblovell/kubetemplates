class Template {
    template = {}

    constructor() {
        return this
    }

    tidy() {
        // delete the spec, or any other value if it is undefined
        Object.keys(this.template).forEach(key => {
            if (this.template[key] === undefined) {
                delete this.template[key];
            }
        })
        return this
    }

    json() {
        return JSON.stringify(this.template, null, 2)
    }
}

module.exports = { Template }
