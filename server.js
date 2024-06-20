import fastify from 'fastify';

const server = fastify();

//GET
server.get('/products', () => {
    return 'Servidor ativo !'
});

// POST
server.post('/products', () => {
    return 'Servidor ativo !'
});

// PUT
server.put('/products/:id', () => {
    return 'Servidor ativo !'
});

// DELETE
server.delete('/products/:id', () => {
    return 'Servidor ativo !'
});

server.listen({
    port: 3000,
});