import { ProductModel } from '../models/ProductModel';
import { Product } from './../entities/Product';

export interface IProductRepository {
    list(): Promise<ProductModel[]>;
    add(product: Product): Promise<void>;
}