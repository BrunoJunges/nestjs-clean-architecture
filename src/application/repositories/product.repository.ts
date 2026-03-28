import { Product } from '../../domain/entities/product.entity';

export abstract class ProductRepository {
  abstract create(product: Product): void;
  abstract findAll(): Product[];
  abstract findById(id: string): Product | undefined;
  abstract update(product: Product): void;
  abstract delete(id: string): void;
}