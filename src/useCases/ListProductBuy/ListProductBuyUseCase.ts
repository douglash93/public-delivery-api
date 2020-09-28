import { IProductRepository } from "../../repositories/IProductRepository";

export class ListProductBuyUseCase {

    constructor(
        private productRepository: IProductRepository
    ) {}

    async execute() {
        return await this.productRepository.listActives();
    }
}