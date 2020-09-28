import { app } from './../../app';
import supertest from 'supertest';

describe('Add Product', () => {
    it('shold list all products', async () => {
        const response = await supertest(app).get('/product').send();
        expect(response.status).toBe(200);
    });
});