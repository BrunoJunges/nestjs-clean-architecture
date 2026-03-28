import { ProductRepository } from '../product.repository';

export class DeleteProductUseCase {
  constructor(private readonly repo: ProductRepository) {}

  execute(id: string) {
    this.repo.delete(id);
  }
}