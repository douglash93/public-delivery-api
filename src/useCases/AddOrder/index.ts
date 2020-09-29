import { MysqlOrderRepository } from "../../repositories/implementations/MysqlOrderRepository";
import { AddOrderController } from "./AddOrderController";
import { AddOrderUseCase } from "./AddOrderUseCase";

const mysqlOrderRepository = new MysqlOrderRepository();
const addOrderUseCase  = new AddOrderUseCase(mysqlOrderRepository);
const addOrderController = new AddOrderController(addOrderUseCase);

export { addOrderUseCase, addOrderController }