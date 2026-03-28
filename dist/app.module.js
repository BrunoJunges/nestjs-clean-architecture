"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const product_controller_1 = require("./presentation/controllers/product.controller");
const in_memory_product_repository_1 = require("./infrastructure/repositories/in-memory-product.repository");
const create_product_usecase_1 = require("./application/repositories/use-cases/create-product.usecase");
const find_all_products_usecase_1 = require("./application/repositories/use-cases/find-all-products.usecase");
const update_product_usecase_1 = require("./application/repositories/use-cases/update-product.usecase");
const delete_product_usecase_1 = require("./application/repositories/use-cases/delete-product.usecase");
const product_repository_1 = require("./application/repositories/product.repository");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [product_controller_1.ProductController],
        providers: [
            {
                provide: product_repository_1.ProductRepository,
                useClass: in_memory_product_repository_1.InMemoryProductRepository,
            },
            {
                provide: create_product_usecase_1.CreateProductUseCase,
                useFactory: (repo) => new create_product_usecase_1.CreateProductUseCase(repo),
                inject: [product_repository_1.ProductRepository],
            },
            {
                provide: find_all_products_usecase_1.FindAllProductsUseCase,
                useFactory: (repo) => new find_all_products_usecase_1.FindAllProductsUseCase(repo),
                inject: [product_repository_1.ProductRepository],
            },
            {
                provide: update_product_usecase_1.UpdateProductUseCase,
                useFactory: (repo) => new update_product_usecase_1.UpdateProductUseCase(repo),
                inject: [product_repository_1.ProductRepository],
            },
            {
                provide: delete_product_usecase_1.DeleteProductUseCase,
                useFactory: (repo) => new delete_product_usecase_1.DeleteProductUseCase(repo),
                inject: [product_repository_1.ProductRepository],
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map