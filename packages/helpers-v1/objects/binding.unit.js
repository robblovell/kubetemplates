const { Binding } = require('./binding')
const td = require('testdouble')
const test = require('ava')

test.beforeEach(t => {
    t.context.data = {
        name: 'name',
        kind: 'Pod'
    }
})

test('Construct a Binder', t => {
    const apiGroups = ['']
    const resources = ['resource1']
    const verbs = ['get', 'watch', 'list']
    const resource = new Binding(t.context.data.name, t.context.data.kind)
    t.deepEqual(resource.template, {
            name: t.context.data.name,
            kind: t.context.data.kind,
            apiGroup: 'rbac.authorization.k8s.io'
        }
    )
    t.pass()
})