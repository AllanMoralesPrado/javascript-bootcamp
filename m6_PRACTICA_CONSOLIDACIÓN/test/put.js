const chai = require('chai');
const chaiHttp = require('chai-http');
const { server } = require('../index');

chai.use(chaiHttp);

//describe() es de mocha
describe('Probando respuesta de servidor para método PUT /series', () => {
    it('Comprueba que respuesta de de método PUT es código 201', (done) => {
        chai.request(server).put('/series?id=1').send(
            {
                "nombre":"Slam Dunk",
                "genero":"shonen",
                "año":"1990",
                "autor":"Takehiko Inoue"
            }
        ).end((error, respuesta) => {
            chai.expect(respuesta).to.have.status(201);
            done();
        });
    })
});