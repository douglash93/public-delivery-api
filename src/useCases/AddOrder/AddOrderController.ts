import { Request, Response } from 'express';
import { AddOrderUseCase } from "./AddOrderUseCase";

export class AddOrderController {
  constructor(
    private addOrderUseCase: AddOrderUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { payment_type, address } = request.body;

    try {

        const orderId = await this.addOrderUseCase.execute({
            user_id: 1, // fixado para testes,
            payment_type: payment_type,
            address: address,
            status: 'novo'
        });

        return response.status(201).send({ order_id: orderId });

    } catch (err) {
        console.log(err);
        return response.status(400).json({
            message: err.message || 'Unexpected error.'
        });
    }
  }
}
