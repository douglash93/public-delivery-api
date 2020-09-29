import { app } from './../../app';
import supertest from 'supertest';

describe('Order', () => {
    it('shold add order', async () => {
        const response = await supertest(app).post('/public/order').send({
            payment_type: 'cartão',
            address: 'minha casa',
        });
        expect(response.status).toBe(201);
    });
});