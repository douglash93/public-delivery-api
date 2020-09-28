import { Router } from 'express';
import { addProductController } from './useCases/AddProduct';
import { listProductController } from './useCases/ListProduct';

const router = Router();

router.post('/product', (request, response) => {
    return addProductController.handle(request, response);
});

router.get('/product', (request, response) => {
    return listProductController.handle(request, response);
});

export { router }