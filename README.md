# A Fluent Kubernetes Resource Builder

[Under Construction]

This library helps in the formation of Kubernetes resource files by encapsulating knowledge about the structure of the resource files so that the end user just needs to give critical values.

Example:

```javascript
const csr = new CSR('bob-eng-csr')
    .spec('29387fasiudaiugw9er80asidf')
```
Results in:
```bash
{
  "apiVersion": "certificates.k8s.io/v1",
  "kind": "CertificateSigningRequest",
  "metadata": {
    "name": "bob-eng-csr"
  },
  "spec": {
    "request": "29387fasiudaiugw9er80asidf",
    "signerName": "kubernetes.io/kube-apiserver-client",
    "usages": [
      "client auth"
    ]
  }
}

```

You can set global defaults for annotations and labels by using the static functions `defaultAnnotaions` and `defaultLabels`.
For example:
```javascript
Template.defaultAnnotations = {
    'system.codezero.io/id': 'codezero.io',
}
Template.labels({
    'system.codezero.io/version': '1.2.3'
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
```
Results in:
```bash
{
  "apiVersion": "certificates.k8s.io/v1",
  "kind": "Secret",
  "metadata": {
    "labels": {
      "system.codezero.io/version": "1.2.3"
    },
    "annotations": {
      "system.codezero.io/id": "codezero.io",
      "observe1": 1,
      "observe2": 2
    },
    "name": "cat-in-the-hat",
    "namespace": "mess-system"
  },
  "data": {
    "thing1": "mess1",
    "thing2": "mess2"
  }
}

```