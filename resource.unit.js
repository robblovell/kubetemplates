const { Resource } = require('./resource')
const td = require('testdouble')
const test = require('ava')

test.beforeEach(t => {
    t.context.data = {
        name: 'name',
        kind: 'kind'
    }
})

test('Construct a Resource', t => {
    const resource = new Resource(t.context.data.name, t.context.data.kind)
    t.deepEqual(resource.template, {
            apiVersion: 'certificates.k8s.io/v1',
            kind: 'kind',
            metadata: {
                annotations: undefined,
                labels: undefined,
                name: 'name',
            },
        }
    )
    t.pass()
})