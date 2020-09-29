import { Request, Response } from 'express';
import { AddProductToCartUseCase } from "./AddProductToCartUseCase";

export class AddProductToCartController {
  constructor(
    private addProductToCartUseCase: AddProductToCartUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { cart_id, product_id, quantity } = request.body;

    try {

        const cartId = await this.addProductToCartUseCase.execute({
            user_id: 1, // fixado para testes,
            cart_id: cart_id,
            product_id: product_id,
            quantity: quantity
        });

        return response.status(201).send({ card_id: cartId });

    } catch (err) {
        console.log(err);
        return response.status(400).json({
            message: err.message || 'Unexpected error.'
        });
    }
  }
}
