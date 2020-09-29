import { app } from './../../app';
import supertest from 'supertest';

describe('Cart', () => {
    it('shold add cart', async () => {
        const response = await supertest(app).post('/public/cart').send({
            product_id: 1,
            quantity: 2
        });
        expect(response.status).toBe(201);
    });

    it('shold add product to cart', async () => {
        const response = await supertest(app).post('/public/cart').send({
            cart_id: 1,
            product_id: 1,
            quantity: 2
        });
        expect(response.status).toBe(201);
    });

});