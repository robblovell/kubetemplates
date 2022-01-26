const { Deployment } = require('./deployment')
const td = require('testdouble')
const test = require('ava')

test.beforeEach(t => {
    t.context.data = {
        name: 'name'
    }
})

test('Construct a Deployment', t => {
    const resource = new Deployment(t.context.data.name)
    t.deepEqual(resource.template, {
            apiVersion: 'certificates.k8s.io/v1',
            kind: 'Deployment',
            metadata: {
                annotations: undefined,
                labels: undefined,
                name: 'name',
            },
        }
    )
    t.pass()
})