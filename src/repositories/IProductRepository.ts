import { Product } from './../entities/Product';

export interface IProductRepository {
    list(): Promise<Product[]>;
    add(product: Product): Promise<void>;
}