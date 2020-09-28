import { Request, Response } from 'express';
import { RemoveProductUseCase } from "./RemoveProductUseCase";

export class RemoveProductController {
  constructor(
    private removeProductUseCase: RemoveProductUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    try {
        await this.removeProductUseCase.execute(id);
        return response.status(200).send();
    } catch (err) {
        return response.status(400).json({
            message: err.message || 'Unexpected error.'
        });
    }
  }
}
