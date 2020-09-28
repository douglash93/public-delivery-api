import { Request, Response } from 'express';
import { ListProductUseCase } from "./ListProductUseCase";

export class ListProductController {
  constructor(
    private listProductUseCase: ListProductUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    
    try {
        const result = await this.listProductUseCase.execute();
        return response.status(200).json({ products: result });
    } catch (err) {
        return response.status(400).json({
            message: err.message || 'Unexpected error.'
        });
    }
  }
}
