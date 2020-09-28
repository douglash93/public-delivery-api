import { ProductModel } from '../models/ProductModel';
import { Product } from './../entities/Product';

export interface IProductRepository {
    list(): Promise<ProductModel[]>;
    add(product: Product): Promise<void>;
    update(product: Product): Promise<void>;
    delete(productId: number): Promise<void>;
    listActives(): Promise<ProductModel[]>;
}