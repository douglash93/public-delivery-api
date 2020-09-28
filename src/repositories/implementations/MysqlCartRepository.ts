import { Cart } from "../../entities/Cart";
import { CartProduct } from "../../entities/CartProduct";
import { CartModel } from "../../models/CartModel";
import { CartProductModel } from "../../models/CartProductModel";
import { ICartRepository } from "../ICartRepository";

export class MysqlCartRepository implements ICartRepository {
    
    async addProductToCart(toCart: CartProduct): Promise<number> {
        const cartProductModel = new CartProductModel();
        Object.assign(cartProductModel, toCart);
        const result = await cartProductModel.save();
        return parseInt(result.id);
    }

    async add(cart: Cart): Promise<number> {
        const cartModel = new CartModel();
        Object.assign(cartModel, cart);
        const result = await cartModel.save();
        return parseInt(result.id);
    }
}