import { ProductRepository } from '../../application/repositories/product.repository';
import { Product } from '../../domain/entities/product.entity';
export declare class InMemoryProductRepository implements ProductRepository {
    private products;
    create(product: Product): void;
    findAll(): Product[];
    findById(id: string): Product | undefined;
    update(product: Product): void;
    delete(id: string): void;
}
