// Require the framework and instantiate it
const fastify = require('fastify')();

// Declare a route
fastify.get('/', (request, reply) => {
  reply.send({ hello: 'dhanush' });
});

fastify.get('/hello', (request, reply) => {
  reply.send({ working: 'now' });
});

// Run the server!
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
