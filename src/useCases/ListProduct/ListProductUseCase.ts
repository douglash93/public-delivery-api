import { IProductRepository } from "../../repositories/IProductRepository";

export class ListProductUseCase {

    constructor(
        private productRepository: IProductRepository
    ) {}

    async execute() {
        return await this.productRepository.list();
    }
}