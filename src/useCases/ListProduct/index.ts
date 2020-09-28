import { MysqlProductRepository } from "../../repositories/implementations/MysqlProductRepository";
import { ListProductController } from "./ListProductController";
import { ListProductUseCase } from "./ListProductUseCase";

const mysqlProductRepository = new MysqlProductRepository();
const listProductUseCase = new ListProductUseCase(mysqlProductRepository);
const listProductController = new ListProductController(listProductUseCase);

export { listProductUseCase, listProductController }