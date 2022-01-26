const { Role } = require('./role')
const td = require('testdouble')
const test = require('ava')

test.beforeEach(t => {
    t.context.data = {
        name: 'name'
    }
})

test('Construct a Role', t => {
    const role = new Role(t.context.data.name)
    t.deepEqual(role.template, {
            apiVersion: 'certificates.k8s.io/v1',
            kind: 'Role',
            metadata: {
                annotations: undefined,
                labels: undefined,
                name: 'name',
            },
            rules: [],
        }
    )
    t.pass()
})

