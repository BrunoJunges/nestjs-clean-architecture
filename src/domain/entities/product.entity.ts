export class Product {
  constructor(
    public readonly id: string,
    public name: string,
    public price: number,
  ) {
    this.validate();
  }

  private validate() {
    if (!this.name || this.name.length < 2) {
      throw new Error('Nome inválido');
    }

    if (this.price <= 0) {
      throw new Error('Preço deve ser maior que zero');
    }
  }
}