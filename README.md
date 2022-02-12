# A Fluent Kubernetes Resource Builder

[Under Construction]

This library helps in the formation of Kubernetes resource files by encapsulating knowledge about the structure of the resource files so that the end user just needs to give critical values.

Example:

```javascript
const csr = new CSR('bob-eng-csr')
    .spec('29387fasiudaiugw9er80asidf')
console.log(csr.json())
```
Results in:
```bash
{
  "apiVersion": "certificates.k8s.io/v1",
  "kind": "Secret",
  "metadata": {
    "name": "cluster-certificate-tls",
    "namespace": "mess-system"
  },
  "type": {
    "type": "kubernetes.io/tls"
  },
  "data": {
    "tls.crt": "tls.crt",
    "tls.key": "tls.key"
  }
}
```

You can set global defaults for annotations and labels by using the static functions `defaultAnnotaions` and `defaultLabels`.
For example:
```javascript
Resource.defaultAnnotations = {
    'system.cat-in-the-hat.io/id': 'cat-in-the-hat.io',
}
Resource.labels({
    'system.cat-in-the-hat.io/version': '1.2.3'
})
const secret = new Secret('cat-in-the-hat')
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
console.log(secret.json())
```
Results in:
```bash
{
  "apiVersion": "certificates.k8s.io/v1",
  "kind": "Secret",
  "metadata": {
    "labels": {
      "system.cat-in-the-hat.io/version": "1.2.3"
    },
    "annotations": {
      "system.cat-in-the-hat.io/id": "cat-in-the-hat.io",
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

Some objects are constructed from other objects, like Deployments which consist of a list of containers:

```javascript
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
```
Results in:
```bash
{
  "apiVersion": "certificates.k8s.io/v1",
  "kind": "Deployment",
  "metadata": {
    "labels": {
      "system.cat-in-the-hat/type": "home-mess",
      "thing1": "mess1",
      "thing2": "mess2"
    },
    "name": "cat-in-the-hat-core",
    "namespace": "cat-in-the-hat"
  },
  "spec": {
    "selector": {
      "matchLabels": {
        "app": "a-name"
      }
    },
    "_template": {
      "metadata": {},
      "spec": {
        "containers": [
          {
            "image": "cathat/home-mess:21345",
            "name": "cat-in-the-hat-core",
            "imagePullPolicy": "always"
          }
        ],
        "securityContext": {
          "fsGroup": 1000
        }
      }
    }
  }
}
```