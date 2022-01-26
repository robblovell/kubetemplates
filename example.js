const { Template} = require('./template')
const { Secret } = require('./secret')
const { PersistentVolumeClaim } = require('./pvc')
const { Deployment } = require('./deployment')
const { Container } = require('./container')
const { CSR } = require('./csr')

Template.defaultAnnotations = {
    'system.codezero.io/id': 'codezero.io',
}
Template.labels({
    'system.codezero.io/version': '1.2.3'
})
const deployment = new Deployment('sample-project-core')
    .namespace('sample-project')
    .labels({
        'system.codezero.io/type': 'environment'
    })
    .labels({
        thing1: 'thing2'
    })
    .spec({app: 'a-name'}, {})
// .image()
// .imagePullPolicy()
// .command()
// .securityContext()
// .matchLabels()
// .templateLabels()

const container = new Container('c6oio/sample-project:21345', deployment)
deployment.containers([container])
console.log(deployment)
console.log(deployment.json())

const pvc = new PersistentVolumeClaim()
    .name('sample-project-core')
    .namespace('sample-project')
    .labels({
        'system.codezero.io/type': 'environment'
    })
    .labels({
        thing1: 'thing2'
    })
    .spec('10Gi')
console.log(pvc.json())

const secret = new Secret('cluster-certificate-tls')
    .namespace('istio-system')
    .type('kubernetes.io/tls')
    .data({
        'tls.crt': 'tls.crt',
        'tls.key': 'tls.key',
    })
console.log(secret.json())

const secret2 = new Secret('cat-in-the-hat')
    .namespace('mess-system')
    .data({
        'thing1': 'mess1',
        'thing2': 'mess2',
    })
    .annotations({
        'observe1': 1
    })
    .annotations({
        'observe2': 2
    })
console.log(secret2.json())

const csr = new CSR('bob-eng-csr')
    .spec('29387fasiudaiugw9er80asidf')

console.log(csr.json())
