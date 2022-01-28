const { ClusterRoleBinding } = require('./clusterrolebinding')
const { Binding } = require('./objects/binding')
const td = require('testdouble')
const test = require('ava')

test.beforeEach(t => {
    t.context.data = {
        name: 'name'
    }
})

test('Construct a ClusterRoleBinding', t => {
    const roleRef = new Binding('access', 'ClusterRole')
    const subject = new Binding('bob', 'User')
    const resource = new ClusterRoleBinding(t.context.data.name, roleRef, [subject])
    t.deepEqual(resource.template, {
            apiVersion: 'certificates.k8s.io/v1',
            kind: 'ClusterRoleBinding',
            metadata: {
                name: t.context.data.name
            },
            roleRef: roleRef.template,
            subjects: [subject.template],
        }
    )
    t.pass()
})

