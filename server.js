import fastify from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();

const database = new DatabaseMemory();

// POST
// request body
server.post('/products', (request, reply) => {
    const { name, description, manufacturer, category, price, available } = request.body;

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

// GET all products
server.get('/products', () => {
    const products = database.list();
    return products;
});

// GET products by category
server.get('/products/category', (request, reply) => {
    const { category } = request.query;
    if (!category) {
        return reply.status(400).send({ error: 'Category query parameter is required' });
    }
    const products = database.listByCategory(category);
    return products;
});

// PUT
server.put('/products/:id', (request, reply) => {
    const productId = request.params.id;

    const { name, description, manufacturer, category, price, available } = request.body;

    database.update(productId, {
        name,
        description,
        manufacturer,
        category,
        price,
        available
    });

    return reply.status(204).send();
});

// DELETE
server.delete('/products/:id', ( request, reply) => {
    const productId = request.params.id;

    database.delete(productId);

    return reply.status(204).send();
});

server.listen({
    port: 3000,
});