const fp = require('fastify-plugin')

function superPlugin (fastify, opts, next) {
  fastify.decorate('superMethod', () => {
    console.log(`Secret code: ${opts.secretCode}`)
  })
  next()
}

module.exports = fp(superPlugin, {
  fastify: '>=1.0.0',
  name: 'super-plugin'
})