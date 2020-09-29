import { Order } from "../../entities/Order";
import { OrderProduct } from "../../entities/OrderProduct";
import { IOrderRepository } from "../../repositories/IOrderRepository";
import { IAddOrderDTO } from "./IAddOrderDTO";

export class AddOrderUseCase {

    constructor(
        private orderRepository: IOrderRepository,
    ) {}

    async execute(data: IAddOrderDTO): Promise<number> {

        const order = new Order(data);

        // busca os produtos do carrinho pelo ID do usuário
        const productsFromCart = await this.orderRepository.findProductsFromCart(order.user_id);
        if(!productsFromCart || productsFromCart.length < 1) {
            throw new Error('O carrinho está vazio');
        }

        let sum_price = 0;
        for(let i=0;i<productsFromCart.length;i++) { 
            sum_price += (productsFromCart[i].price || 0) *  productsFromCart[i].quantity;
        }

        if(sum_price < 10.00) {
            throw new Error('O Valor mínimo é de 10 reais');
        }

        // adiciona cada produto do carrinho a orderProduct passando o id do usuário
        for(let i=0;i<productsFromCart.length;i++) {
            const orderToDb = new OrderProduct({
                user_id: order.user_id,
                product_id: productsFromCart[i].product_id,
                quantity: productsFromCart[i].quantity,
                name:  productsFromCart[i].name,
                price: productsFromCart[i].price
            });
            await this.orderRepository.addProduct(orderToDb)
        }

        order.price = sum_price;
        return await this.orderRepository.add(order);
    }
}