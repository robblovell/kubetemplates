const { Template } = require('./template')
const td = require('testdouble')
const test = require('ava')
const { Secret } = require('./secret')

test.beforeEach(t => {
    t.context.data = {
        name: 'name'
    }
})

test('Construct a Template', t => {
    const resource = new Template(t.context.data.name)
    t.deepEqual(resource.template, {})
    t.pass()
})