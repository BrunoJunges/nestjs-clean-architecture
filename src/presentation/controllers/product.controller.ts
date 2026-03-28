import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateProductUseCase } from '../../application/repositories/use-cases/create-product.usecase';
import { FindAllProductsUseCase } from '../../application/repositories/use-cases/find-all-products.usecase';
import { UpdateProductUseCase } from '../../application/repositories/use-cases/update-product.usecase';
import { DeleteProductUseCase } from '../../application/repositories/use-cases/delete-product.usecase';

@Controller('products')
export class ProductController {
  constructor(
    private readonly createUseCase: CreateProductUseCase,
    private readonly findAllUseCase: FindAllProductsUseCase,
    private readonly updateUseCase: UpdateProductUseCase,
    private readonly deleteUseCase: DeleteProductUseCase,
  ) {}

  @Post()
  create(@Body() body) {
    return this.createUseCase.execute(body);
  }

  @Get()
  findAll() {
    return this.findAllUseCase.execute();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.updateUseCase.execute({ ...body, id });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteUseCase.execute(id);
  }
}