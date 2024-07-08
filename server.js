import fastify from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();

const database = new DatabaseMemory();

//GET
server.get('/products', () => {
    return 'Servidor ativo !'
});

// POST
// request body
server.post('/products', (request, reply) => {
    const body = request.body;
    
    database.create({
        name: "Produto 01",
        description: "Descrição do Produto 01",
        manufacturer: "XYZ Inc.",
        category: "Eletrônicos",
        price: 99.10,
        available: true
    });

    console.log(database.list());

    return reply.status(201).send(); // CREATED
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