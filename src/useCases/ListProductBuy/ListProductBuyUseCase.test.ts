import { app } from '../../app';
import supertest from 'supertest';

describe('List Product Buy', () => {
    it('shold list all products status active', async () => {
        const response = await supertest(app).get('/public/product').send();
        expect(response.status).toBe(200);
    });
});