import { app } from './../../app';
import supertest from 'supertest';

describe('Add Product', () => {
    it('shold create product', async () => {
        const response = await supertest(app).post('/product').send({
            name: 'Produto 01',
            price: 10.50,
            status: true,
            created_at: new Date()
        });
        expect(response.status).toBe(201);
    });
});