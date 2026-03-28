"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductUseCase = void 0;
const product_entity_1 = require("../../../domain/entities/product.entity");
class UpdateProductUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    execute(data) {
        const product = new product_entity_1.Product(data.id, data.name, data.price);
        this.repo.update(product);
        return product;
    }
}
exports.UpdateProductUseCase = UpdateProductUseCase;
//# sourceMappingURL=update-product.usecase.js.map