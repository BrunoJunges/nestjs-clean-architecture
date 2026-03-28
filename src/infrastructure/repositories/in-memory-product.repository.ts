import { ProductRepository } from '../../application/repositories/product.repository';
import { Product } from '../../domain/entities/product.entity';

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  create(product: Product): void {
    this.products.push(product);
  }

  findAll(): Product[] {
    return this.products;
  }

  findById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  update(product: Product): void {
    const index = this.products.findIndex(p => p.id === product.id);

    if (index === -1) {
      throw new Error('Produto não encontrado');
    }

    this.products[index] = product;
  }

  delete(id: string): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}