import { Request, Response } from 'express';
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  constructor(
    private updateProductUseCase: UpdateProductUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, description, price, image, tags, status } = request.body;

    try {

        await this.updateProductUseCase.execute({
            id: id,
            name: name,
            description: description,
            price: price,
            image: image,
            tags: tags,
            status: status
        });

        return response.status(200).send();

    } catch (err) {
        console.log(err);
        return response.status(400).json({
            message: err.message || 'Unexpected error.'
        });
    }
  }
}
