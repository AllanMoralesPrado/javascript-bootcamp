const chai = require('chai');
const chaiHttp = require('chai-http');
const { server } = require('../index');

chai.use(chaiHttp);

//describe() es de mocha
describe('Probando respuesta de servidor para método POST /series', () => {
    it('Comprueba que respuesta de de método POST es código 201', (done) => {
        chai.request(server).post('/series').send(
            {
                "nombre":"JoJo's Bizarre Adventure",
                "genero":"shonen",
                "año":"1987",
                "autor":"Hirohiko Araki"
            }
        ).end((error, respuesta) => {
            chai.expect(respuesta).to.have.status(201);
            done();
        });
    })
});