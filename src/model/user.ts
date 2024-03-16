import { Order } from './order.model';

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  orders: Order[];
}
