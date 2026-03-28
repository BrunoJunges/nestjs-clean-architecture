import { ProductRepository } from '../product.repository';

export class FindAllProductsUseCase {
  constructor(private readonly repo: ProductRepository) {}

  execute() {
    return this.repo.findAll();
  }
}