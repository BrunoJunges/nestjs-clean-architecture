"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryProductRepository = void 0;
class InMemoryProductRepository {
    constructor() {
        this.products = [];
    }
    create(product) {
        this.products.push(product);
    }
    findAll() {
        return this.products;
    }
    findById(id) {
        return this.products.find(p => p.id === id);
    }
    update(product) {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index === -1) {
            throw new Error('Produto não encontrado');
        }
        this.products[index] = product;
    }
    delete(id) {
        this.products = this.products.filter(p => p.id !== id);
    }
}
exports.InMemoryProductRepository = InMemoryProductRepository;
//# sourceMappingURL=in-memory-product.repository.js.map