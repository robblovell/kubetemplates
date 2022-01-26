const { Resource } = require('./resource')

class CSR extends Resource {
    constructor(name) {
        super(name, 'CertificateSigningRequest')
    }

    apiserverClientSpec(request) {
        return this.spec(request)
    }

    spec(request, signerName = 'kubernetes.io/kube-apiserver-client', usages = ['client auth']) {
        this.template.spec = {
            request,
            signerName,
            usages,
        }
        return this
    }
}

module.exports = { CSR }