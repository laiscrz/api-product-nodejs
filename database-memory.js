export class DatabaseMemory {
    #products = []

    create(product) {
        this.#products.push(product);
    }

    update(id, product) {
        this.#products.push(product);
    }
};