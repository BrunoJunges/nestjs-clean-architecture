"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllProductsUseCase = void 0;
class FindAllProductsUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    execute() {
        return this.repo.findAll();
    }
}
exports.FindAllProductsUseCase = FindAllProductsUseCase;
//# sourceMappingURL=find-all-products.usecase.js.map