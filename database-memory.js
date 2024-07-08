import { randomUUID } from 'node:crypto'
export class DatabaseMemory {
    #products = new Map();

    list() {
        return Array.from(this.#products.entries()).map((productsArray) => {
            const id = productsArray[0];
            const data = productsArray[1];

            return {
                id,
                ...data,
            }
        });
    }

    listByCategory(category) {
        return Array.from(this.#products.entries()).map(([id, data]) => {
            return {
                id,
                ...data,
            };
        }).filter(product => product.category === category);
    }

    create(product) {
        const productId = randomUUID();

        this.#products.set(productId, product);
    }

    update(id, product) {
        this.#products.set(id, product);
    }

    delete(id) {
        this.#products.delete(id);
    }
};