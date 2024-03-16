import { Product } from './product.model';

export class Order {
  constructor(
    public id: string,
    public orderDate: Date,
    public totalPrice: number,
    public products: Product[],
  ) {}
}
