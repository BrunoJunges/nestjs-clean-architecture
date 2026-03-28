import { Module } from '@nestjs/common';
import { ProductController } from './presentation/controllers/product.controller';
import { InMemoryProductRepository } from './infrastructure/repositories/in-memory-product.repository';

import { CreateProductUseCase } from './application/repositories/use-cases/create-product.usecase';
import { FindAllProductsUseCase } from './application/repositories/use-cases/find-all-products.usecase';
import { UpdateProductUseCase } from './application/repositories/use-cases/update-product.usecase';
import { DeleteProductUseCase } from './application/repositories/use-cases/delete-product.usecase';
import { ProductRepository } from './application/repositories/product.repository';

@Module({
  controllers: [ProductController],
  providers: [
    {
      provide: ProductRepository,
      useClass: InMemoryProductRepository,
    },
    {
      provide: CreateProductUseCase,
      useFactory: (repo: ProductRepository) => new CreateProductUseCase(repo),
      inject: [ProductRepository],
    },
    {
      provide: FindAllProductsUseCase,
      useFactory: (repo: ProductRepository) => new FindAllProductsUseCase(repo),
      inject: [ProductRepository],
    },
    {
      provide: UpdateProductUseCase,
      useFactory: (repo: ProductRepository) => new UpdateProductUseCase(repo),
      inject: [ProductRepository],
    },
    {
      provide: DeleteProductUseCase,
      useFactory: (repo: ProductRepository) => new DeleteProductUseCase(repo),
      inject: [ProductRepository],
    },
  ],
})
export class AppModule {}