import { MysqlProductRepository } from "../../repositories/implementations/MysqlProductRepository";
import { AddProductController } from "./AddProductController";
import { AddProductUseCase } from "./AddProductUseCase";

const mysqlProductRepository = new MysqlProductRepository();
const addProductUseCase = new AddProductUseCase(mysqlProductRepository);
const addProductController = new AddProductController(addProductUseCase);

export { addProductUseCase, addProductController }