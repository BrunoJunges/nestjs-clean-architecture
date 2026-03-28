"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
const product_entity_1 = require("../../../domain/entities/product.entity");
class CreateProductUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    execute(data) {
        const product = new product_entity_1.Product(data.id, data.name, data.price);
        this.repo.create(product);
        return product;
    }
}
exports.CreateProductUseCase = CreateProductUseCase;
//# sourceMappingURL=create-product.usecase.js.map