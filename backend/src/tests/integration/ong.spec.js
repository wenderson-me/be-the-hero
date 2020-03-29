const request = require ('supertest');
const app = require('../../app');
const connection = require('../../database/connection');

describe('ONG', () => {
    beforeEach( async () => {
       await connection.migrate.rollback();
       await connection.migrate.latest();
    });

    afterAll ( async ()=> {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
        name: "Wenderson",
        email: "wendrson22@gmail.com",
        whatsapp: "62981997999",
        city: "Goiania",
        uf: "GO"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});