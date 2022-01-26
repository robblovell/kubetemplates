const { Template } = require('../template')

class Rule extends Template {
    constructor(resources = [], verbs = ['get', 'watch', 'list'], apiGroups = ['']) {
        super()
        this.template = {
            apiGroups,
            resources,
            verbs,
        }
        return this
    }
}

module.exports = { Rule }