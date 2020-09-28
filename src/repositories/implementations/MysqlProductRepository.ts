import { Product } from "../../entities/Product";
import { update, remove, findAll, findActives, ProductModel } from "../../models/ProductModel";
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

    async update(product: Product): Promise<void> {
        await update(product);
    }

    async delete(productId: number): Promise<void> {
        await remove(productId);
    }

    async listActives(): Promise<ProductModel[]> {
        return await findActives();
    }
}