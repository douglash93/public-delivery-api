import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProductRepository";
import { IAddProductDTO } from './IAddProductDTO';

export class AddProductUseCase {

    constructor(
        private productRepository: IProductRepository
    ) {}

    async execute(data: IAddProductDTO) {
        const product = new Product(data);
        await this.productRepository.add(product);
    }
}