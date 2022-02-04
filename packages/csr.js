const { Resource } = require('./resource')

class CSR extends Resource {
    static kind = 'CertificateSigningRequest'
    static apiVersion = 'certificates.k8s.io/v1'

    constructor(name) {
        super(name, CSR.kind, CSR.apiVersion)
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