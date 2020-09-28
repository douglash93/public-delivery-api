import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProductRepository";
import { IUpdateProductDTO } from './IUpdateProductDTO';

export class UpdateProductUseCase {

    constructor(
        private productRepository: IProductRepository
    ) {}

    async execute(data: IUpdateProductDTO) {
        const product = new Product(data);
        console.log(data);
        await this.productRepository.update(product);
    }
}