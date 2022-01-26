const { Template } = require('./template')
const { Secret } = require('./secret')
const { PersistentVolumeClaim } = require('./pvc')
const { Deployment } = require('./deployment')
const { Container } = require('./container')
const { CSR } = require('./csr')

const deployment = new Deployment('cat-in-the-hat-core')
    .namespace('cat-in-the-hat')
    .labels({
        'system.cat-in-the-hat/type': 'home-mess'
    })
    .labels({
        thing1: 'mess1',
        thing2: 'mess2'
    })
    .spec({ app: 'a-name' }, {})

const container = new Container('cathat/home-mess:21345', deployment)
deployment.containers([container])
console.log(deployment.json())

const pvc = new PersistentVolumeClaim()
    .name('cat-in-the-hat-core')
    .namespace('cat-in-the-hat')
    .labels({
        'system.cat-in-the-hat.io/type': 'home-mess'
    })
    .labels({
        thing1: 'thing2'
    })
    .spec('10Gi')
console.log(pvc.json())

const csr = new CSR('bob-eng-csr')
    .spec('29387fasiudaiugw9er80asidf')

console.log(csr.json())

const secret = new Secret('cluster-certificate-tls')
    .namespace('mess-system')
    .type('kubernetes.io/tls')
    .data({
        'tls.crt': 'tls.crt',
        'tls.key': 'tls.key',
    })
console.log(secret.json())

Template.defaultAnnotations = {
    'system.cat-in-the-hat.io/id': 'cat-in-the-hat.io',
}
Template.labels({
    'system.cat-in-the-hat.io/version': '1.2.3'
})
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
