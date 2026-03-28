import { ProductRepository } from '../product.repository';
export declare class FindAllProductsUseCase {
    private readonly repo;
    constructor(repo: ProductRepository);
    execute(): import("../../../domain/entities/product.entity").Product[];
}
