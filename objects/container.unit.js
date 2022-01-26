const { Container } = require('./container')
const td = require('testdouble')
const test = require('ava')

test.beforeEach(t => {
    t.context.data = {
        name: 'name'
    }
})

test('Construct a Container', t => {
    const image = 'image-name'
    const name = t.context.data.name
    const imagePullPolicy = 'never'
    const resource = new Container(image, name)
    t.deepEqual(resource.template, {
            image,
            name,
            imagePullPolicy,
        }
    )
    t.pass()
})