import { Product } from "../../entities/Product";
import { findAll, ProductModel } from "../../models/ProductModel";
import { IProductRepository } from "../IProductRepository";

export class MysqlProductRepository implements IProductRepository {

    async list(): Promise<ProductModel[]> {
        const products = await findAll();
        return products;
    }

    async add(product: Product): Promise<void> {
        const productModel = new ProductModel();
        Object.assign(productModel, product);
        await productModel.save();
    }    

}