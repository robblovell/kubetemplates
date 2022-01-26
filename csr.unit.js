const { CSR } = require('./csr')
const td = require('testdouble')
const test = require('ava')
const { Role } = require('./role')

test.beforeEach(t => {
    t.context.data = {
        name: 'name'
    }
})

test('Construct a CSR', t => {
    const csr = new CSR(t.context.data.name)
    t.deepEqual(csr.template, {
            apiVersion: 'certificates.k8s.io/v1',
            kind: 'CertificateSigningRequest',
            metadata: {
                annotations: undefined,
                labels: undefined,
                name: 'name',
            },
        }
    )
    t.pass()
})