import { CartProduct } from '../entities/CartProduct';
import { OrderProduct } from '../entities/OrderProduct';
import { IAddOrderDTO } from '../useCases/AddOrder/IAddOrderDTO';
export interface IOrderRepository {
    addProduct(order: OrderProduct): Promise<number>;
    add(order: IAddOrderDTO): Promise<number>;
    findProductsFromCart(user_id: number): Promise<CartProduct[]>;
}