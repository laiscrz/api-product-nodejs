import fastify from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();

const database = new DatabaseMemory();

// POST
// request body
server.post('/products', (request, reply) => {
    const { name, description, manufacturer, category, price, available} = request.body;

    database.create({
        name,
        description,
        manufacturer,
        category,
        price,
        available
    });

    console.log(database.list());

    return reply.status(201).send(); // CREATED
});

//GET
server.get('/products', () => {
    const products = Array.from(database.list());
    return products;
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