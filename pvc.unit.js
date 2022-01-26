const { PersistentVolumeClaim } = require('./pvc')
const td = require('testdouble')
const test = require('ava')

test.beforeEach(t => {
    t.context.data = {
        name: 'name'
    }
})

test('New PVC', t => {
    const pvc = new PersistentVolumeClaim(t.context.data.name)
    t.like(pvc, {
        template: {
            apiVersion: 'certificates.k8s.io/v1',
            kind: 'PersistentVolumeClaim',
            metadata: {
                annotations: undefined,
                labels: undefined,
                name: 'name',

            }
        }
    })
})

test('PVC with spec', t => {
    const pvc = new PersistentVolumeClaim(t.context.data.name)
        .spec('15G', ['ReadWriteOnce'])
    t.deepEqual(pvc.template, {
        apiVersion: 'certificates.k8s.io/v1',
        kind: 'PersistentVolumeClaim',
        metadata: {
            annotations: undefined,
            labels: undefined,
            name: 'name',

        },
        "spec": {
            "accessModes": [
                "ReadWriteOnce"
            ],
            "resources": {
                "requests": {
                    "storage": "15G"
                }
            }
        }
    })
    t.pass()
})

