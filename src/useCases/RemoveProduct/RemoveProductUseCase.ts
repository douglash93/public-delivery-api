import { IProductRepository } from "../../repositories/IProductRepository";

export class RemoveProductUseCase {

    constructor(
        private productRepository: IProductRepository
    ) {}

    async execute(id: number) {
        await this.productRepository.delete(id);
    }
}