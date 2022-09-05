// Require the framework and instantiate it
const fastify = require('fastify')();

// Declare a route
fastify.get('/', (request, reply) => {
  reply.send({ hello: 'dude' });
});

fastify.get('/hello', (request, reply) => {
  reply.send({ working: 'dude' });
});

// Run the server!
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
