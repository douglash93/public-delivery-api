import { CartProduct } from '../entities/CartProduct';
export interface ICartRepository {
    add(toCart: CartProduct): Promise<number>;
    addProductToCart(toCart: CartProduct): Promise<number>;
}