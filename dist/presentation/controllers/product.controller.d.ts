import { CreateProductUseCase } from '../../application/repositories/use-cases/create-product.usecase';
import { FindAllProductsUseCase } from '../../application/repositories/use-cases/find-all-products.usecase';
import { UpdateProductUseCase } from '../../application/repositories/use-cases/update-product.usecase';
import { DeleteProductUseCase } from '../../application/repositories/use-cases/delete-product.usecase';
export declare class ProductController {
    private readonly createUseCase;
    private readonly findAllUseCase;
    private readonly updateUseCase;
    private readonly deleteUseCase;
    constructor(createUseCase: CreateProductUseCase, findAllUseCase: FindAllProductsUseCase, updateUseCase: UpdateProductUseCase, deleteUseCase: DeleteProductUseCase);
    create(body: any): import("../../domain/entities/product.entity").Product;
    findAll(): import("../../domain/entities/product.entity").Product[];
    update(id: string, body: any): import("../../domain/entities/product.entity").Product;
    delete(id: string): void;
}
