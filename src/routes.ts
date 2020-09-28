import { Router } from 'express';
import { addProductController } from './useCases/AddProduct';
import { listProductController } from './useCases/ListProduct';
import { listProductBuyController } from './useCases/ListProductBuy';
import { updateProductController } from './useCases/UpdateProduct';
import { removeProductController } from './useCases/RemoveProduct';
import { addProductToCartController } from './useCases/AddProductToCart';

const router = Router();

router.post('/product', (request, response) => {
    return addProductController.handle(request, response);
});

router.get('/product', (request, response) => {
    return listProductController.handle(request, response);
});

router.put('/product', (request, response) => {
    return updateProductController.handle(request, response);
});

router.delete('/product', (request, response) => {
    return removeProductController.handle(request, response);
});

router.get('/public/product', (request, response) => {
    return listProductBuyController.handle(request, response);
});

router.post('/public/cart', (request, response) => {
    return addProductToCartController.handle(request, response);
});

export { router }