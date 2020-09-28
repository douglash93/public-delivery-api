import { Router } from 'express';
import { addProductController } from './useCases/AddProduct';
import { listProductController } from './useCases/ListProduct';
import { updateProductController } from './useCases/UpdateProduct';
import { removeProductController } from './useCases/RemoveProduct';

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

export { router }