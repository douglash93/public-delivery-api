import { Request, Response } from 'express';
import { AddProductUseCase } from "./AddProductUseCase";

export class AddProductController {
  constructor(
    private addProductUseCase: AddProductUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, price, image, tags, status } = request.body;

    try {

        await this.addProductUseCase.execute({
            name: name,
            description: description,
            price: price,
            image: image,
            tags: tags,
            status: status
        });

        return response.status(201).send();

    } catch (err) {
        return response.status(400).json({
            message: err.message || 'Unexpected error.'
        });
    }
  }
}
