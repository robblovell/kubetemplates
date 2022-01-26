const { Template } = require('./template')

class CSR extends Template {
    constructor(name) {
        super(name,'CertificateSigningRequest')
    }

    apiserverClientSpec(request) {
        return this.spec(request)
    }

    spec(request, signerName = 'kubernetes.io/kube-apiserver-client', usages = [ 'client auth' ]) {
        this.template.spec = {
            request,
            signerName,
            usages,
        }
        return this
    }
}
module.exports = { CSR }