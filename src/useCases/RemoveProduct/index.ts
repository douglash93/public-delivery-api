import { MysqlProductRepository } from "../../repositories/implementations/MysqlProductRepository";
import { RemoveProductController } from "./RemoveProductController";
import { RemoveProductUseCase } from "./RemoveProductUseCase";

const mysqlProductRepository = new MysqlProductRepository();
const removeProductUseCase = new RemoveProductUseCase(mysqlProductRepository);
const removeProductController = new RemoveProductController(removeProductUseCase);

export { removeProductUseCase, removeProductController }