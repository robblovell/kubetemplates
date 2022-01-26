const { Secret } = require('./secret')
const td = require('testdouble')
const test = require('ava')

test.beforeEach(t => {
    t.context.data = {
        name: 'name'
    }
})

test('Construct a Secret', t => {
    const resource = new Secret(t.context.data.name)
    t.deepEqual(resource.template, {
            apiVersion: 'certificates.k8s.io/v1',
            kind: 'Secret',
            metadata: {
                annotations: undefined,
                labels: undefined,
                name: 'name',
            },
        }
    )
    t.pass()
})