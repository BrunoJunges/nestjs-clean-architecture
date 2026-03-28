import { ProductRepository } from '../product.repository';
import { Product } from '../../../domain/entities/product.entity';
export declare class CreateProductUseCase {
    private readonly repo;
    constructor(repo: ProductRepository);
    execute(data: {
        id: string;
        name: string;
        price: number;
    }): Product;
}
