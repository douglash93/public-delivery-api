import { Request, Response } from 'express';
import { ListProductBuyUseCase } from "./ListProductBuyUseCase";

export class ListProductBuyController {
  constructor(
    private listProductBuyUseCase: ListProductBuyUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    
    try {
        const result = await this.listProductBuyUseCase.execute();
        return response.status(200).json({ products: result });
    } catch (err) {
        return response.status(400).json({
            message: err.message || 'Unexpected error.'
        });
    }
  }
}
