import { Router } from 'express';

const router = Router()

router.post('/', (request, response) => {
    return response.status(200).json({ message: 'Hello API'});
});

export { router }