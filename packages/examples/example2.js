const { DeploymentHelper } = require('../resources/lib/apps/v1-helper')
const { Cluster } = require('@c6o/kubeclient')
const { Container } = require('../helpers-v1/objects/container');

const go = async () => {
    const deployment = new DeploymentHelper('cat-in-the-hat-core')
        .$namespace('default')
        // .$labels({
        //     'system.cat-in-the-hat/type': 'home-mess',
        //     thing3: 'mess3'
        // })
        // .$labels({
        //     thing1: 'thing1,',
        //     thing2: 'thing2'
        // })
        // .$annotations({
        //     annotation1: 'annotate this'
        // })
    const container = new Container('cathat/home-mess:21345', deployment)
    deployment.containers([container])
    console.log(deployment.toJson())
    console.log(JSON.stringify(deployment.toTemplate(), null, 2))
    await deployment.create(new Cluster())

    await (new DeploymentHelper('something').$namespace('default').create())
}
go().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})


