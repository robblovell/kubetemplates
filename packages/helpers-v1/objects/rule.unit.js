const { Rule } = require('./rule')
const td = require('testdouble')
const test = require('ava')

test.beforeEach(t => {
    t.context.data = {
        name: 'name'
    }
})

test('Construct a Rule', t => {
    const apiGroups = ['']
    const resources = ['resource1']
    const verbs = ['get', 'watch', 'list']
    const resource = new Rule(resources)
    t.deepEqual(resource.template, {
        apiGroups,
        resources,
        verbs,
        }
    )
    t.pass()
})