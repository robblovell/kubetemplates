const { ClusterRole } = require('./clusterrole')
const td = require('testdouble')
const test = require('ava')

test.beforeEach(t => {
    t.context.data = {
        name: 'name'
    }
})

test('Construct a ClusterRole', t => {
    const resource = new ClusterRole(t.context.data.name)
    t.deepEqual(resource.template, {
            apiVersion: 'certificates.k8s.io/v1',
            kind: 'ClusterRole',
            metadata: {
                name: 'name',
            },
            rules: [],
        }
    )
    t.pass()
})

