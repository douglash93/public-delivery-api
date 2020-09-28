import { app } from './../../app';
import supertest from 'supertest';

describe('Cart', () => {
    it('shold add cart', async () => {
        const response = await supertest(app).put('/public/cart').send({
            productId: 1,
            quantity: 2
        });
        expect(response.status).toBe(201);
    });

    it('shold add product to cart', async () => {
        const response = await supertest(app).put('/public/cart').send({
            cartId: 1,
            productId: 1,
            quantity: 2
        });
        expect(response.status).toBe(201);
    });

});