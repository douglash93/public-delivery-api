import { CartProduct } from "../../entities/CartProduct";
import { OrderProduct } from "../../entities/OrderProduct";
import { listByUser } from "../../models/CartProductModel";
import { OrderModel } from "../../models/OrderModel";
import { OrderProductModel } from "../../models/OrderProductModel";
import { IAddOrderDTO } from "../../useCases/AddOrder/IAddOrderDTO";
import { IOrderRepository } from "../IOrderRepository";

export class MysqlOrderRepository implements IOrderRepository {
    
    async findProductsFromCart(user_id: number): Promise<CartProduct[]> {       
        var result = listByUser(user_id);
        return result;
    }

    async addProduct(order: OrderProduct): Promise<number> {
        const orderProductModel = new OrderProductModel();
        Object.assign(orderProductModel, order);
        var result = await orderProductModel.save();
        return result.id;
    }

    async add(order: IAddOrderDTO): Promise<number> {
        const orderModel = new OrderModel();
        Object.assign(orderModel, order);
        var result = await orderModel.save();
        return result.id;
    }    
}