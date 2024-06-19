import fastify from 'fastify';

const server = fastify();

server.get('/', () => {
    return 'Servidor ativo !'
});

server.listen({
    port: 3000,
});