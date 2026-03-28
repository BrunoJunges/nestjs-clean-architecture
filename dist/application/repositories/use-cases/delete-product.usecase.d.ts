import { ProductRepository } from '../product.repository';
export declare class DeleteProductUseCase {
    private readonly repo;
    constructor(repo: ProductRepository);
    execute(id: string): void;
}
