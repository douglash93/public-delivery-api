import { app } from './../../app';
import supertest from 'supertest';

describe('Update Product', () => {
    it('shold remove product', async () => {
        const response = await supertest(app).put('/product').send({
            id: 6,
            name: 'Produto Atualizado',
            price: 50.50,
            status: true
        });
        expect(response.status).toBe(200);
    });
});