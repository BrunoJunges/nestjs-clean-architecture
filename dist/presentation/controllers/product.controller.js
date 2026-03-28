"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const create_product_usecase_1 = require("../../application/repositories/use-cases/create-product.usecase");
const find_all_products_usecase_1 = require("../../application/repositories/use-cases/find-all-products.usecase");
const update_product_usecase_1 = require("../../application/repositories/use-cases/update-product.usecase");
const delete_product_usecase_1 = require("../../application/repositories/use-cases/delete-product.usecase");
let ProductController = class ProductController {
    constructor(createUseCase, findAllUseCase, updateUseCase, deleteUseCase) {
        this.createUseCase = createUseCase;
        this.findAllUseCase = findAllUseCase;
        this.updateUseCase = updateUseCase;
        this.deleteUseCase = deleteUseCase;
    }
    create(body) {
        return this.createUseCase.execute(body);
    }
    findAll() {
        return this.findAllUseCase.execute();
    }
    update(id, body) {
        return this.updateUseCase.execute({ ...body, id });
    }
    delete(id) {
        return this.deleteUseCase.execute(id);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "delete", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [create_product_usecase_1.CreateProductUseCase,
        find_all_products_usecase_1.FindAllProductsUseCase,
        update_product_usecase_1.UpdateProductUseCase,
        delete_product_usecase_1.DeleteProductUseCase])
], ProductController);
//# sourceMappingURL=product.controller.js.map