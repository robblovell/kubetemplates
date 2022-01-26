const { RoleBinding } = require('./rolebinding')
const { Binding } = require('./objects/binding')
const td = require('testdouble')
const test = require('ava')

test.beforeEach(t => {
    t.context.data = {
        name: 'name'
    }
})

test('Construct a RoleBinding', t => {
    const roleRef = new Binding('access', 'Role')
    const subject = new Binding('bob', 'User')
    const resource = new RoleBinding(t.context.data.name, roleRef, [subject])
    t.deepEqual(resource.template, {
            apiVersion: 'certificates.k8s.io/v1',
            kind: 'RoleBinding',
            metadata: {
                name: t.context.data.name
            },
            roleRef: roleRef.template,
            subjects: [subject.template],
        }
    )
    t.pass()
})

