import { MysqlCartRepository } from "../../repositories/implementations/MysqlCartRepository";
import { AddProductToCartController } from "./AddProductToCartController";
import { AddProductToCartUseCase } from "./AddProductToCartUseCase";

const mysqlCartRepository = new MysqlCartRepository();
const addProductToCartUseCase = new AddProductToCartUseCase(mysqlCartRepository);
const addProductToCartController = new AddProductToCartController(addProductToCartUseCase);

export { addProductToCartUseCase, addProductToCartController }