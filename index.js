const fastify = require('fastify')()
const superPlugin = require('./superPlugin.js')

fastify.register(superPlugin, {
  secretCode: 'JavaScript is awesome!'
})

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen(3000, err => {
  fastify.superMethod()
})