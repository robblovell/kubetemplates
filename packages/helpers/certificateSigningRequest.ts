const {CertificateSigningRequestHelper} = require('@c6o/kubetempletes-resources/certificates/v1-helper');

class CertificateSigningRequest extends CertificateSigningRequestHelper {
    static kind = 'CertificateSigningRequest'
    static apiVersion = 'certificates.k8s.io/v1'

    constructor(name) {
        super(name, null)
    }

    spec(request, signerName = 'kubernetes.io/kube-apiserver-client', usages = ['client auth']) {
        return this.$spec({
            request,
            signerName,
            usages,
        })
    }
}

module.exports = { CertificateSigningRequest }