import { ProductRepository } from '../product.repository';
import { Product } from '../../../domain/entities/product.entity';

export class CreateProductUseCase {
  constructor(private readonly repo: ProductRepository) {}

  execute(data: { id: string; name: string; price: number }) {
    const product = new Product(data.id, data.name, data.price);
    this.repo.create(product);
    return product;
  }
}