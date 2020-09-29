import { CartProduct } from "../../entities/CartProduct";
import { getExistsCart } from "../../models/CartModel";
import { ICartRepository } from "../../repositories/ICartRepository";
import { IAddProductToCartDTO } from "./IAddProductToCartDTO";

export class AddProductToCartUseCase {

    constructor(
        private cartRepository: ICartRepository,
    ) {}

    async execute(data: IAddProductToCartDTO): Promise<number> {
        const product = new CartProduct(data);

        // TODO:: Passar o userId
        product.cart_id = await getExistsCart();
        if(product.cart_id == null) {
            // Cria o carrinho
            product.cart_id = await this.cartRepository.add(product);
        }

        return await this.cartRepository.addProductToCart(product);
    }
}