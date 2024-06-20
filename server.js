import fastify from 'fastify';

const server = fastify();

//GET
server.get('/produtos', () => {
    return 'Servidor ativo !'
});

// POST
server.post('/produtos', () => {
    return 'Servidor ativo !'
});

// PUT
server.put('/produtos/:id', () => {
    return 'Servidor ativo !'
});

// DELETE
server.delete('/produtos/:id', () => {
    return 'Servidor ativo !'
});

server.listen({
    port: 3000,
});