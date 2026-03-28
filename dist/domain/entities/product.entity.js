"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.validate();
    }
    validate() {
        if (!this.name || this.name.length < 2) {
            throw new Error('Nome inválido');
        }
        if (this.price <= 0) {
            throw new Error('Preço deve ser maior que zero');
        }
    }
}
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map