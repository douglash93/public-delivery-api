import { MysqlProductRepository } from "../../repositories/implementations/MysqlProductRepository";
import { UpdateProductController } from "./UpdateProductController";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

const mysqlProductRepository = new MysqlProductRepository();
const updateProductUseCase = new UpdateProductUseCase(mysqlProductRepository);
const updateProductController = new UpdateProductController(updateProductUseCase);

export { updateProductUseCase, updateProductController }