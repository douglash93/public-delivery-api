import { MysqlProductRepository } from "../../repositories/implementations/MysqlProductRepository";
import { ListProductBuyUseCase } from "./ListProductBuyUseCase";
import { ListProductBuyController } from "./ListProductBuyController";

const mysqlProductRepository = new MysqlProductRepository();
const listProductBuyUseCase = new ListProductBuyUseCase(mysqlProductRepository);
const listProductBuyController = new ListProductBuyController(listProductBuyUseCase);

export { listProductBuyUseCase, listProductBuyController }