"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductUseCase = void 0;
class DeleteProductUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    execute(id) {
        this.repo.delete(id);
    }
}
exports.DeleteProductUseCase = DeleteProductUseCase;
//# sourceMappingURL=delete-product.usecase.js.map