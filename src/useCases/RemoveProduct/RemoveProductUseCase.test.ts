import { app } from './../../app';
import supertest from 'supertest';

describe('Remove Product', () => {
    it('shold remove product', async () => {
        const response = await supertest(app).delete('/product').send({
            id: 4,
        });
        expect(response.status).toBe(200);
    });
});