const chai = require('chai');
const chaiHttp = require('chai-http');
const { server } = require('../server');

chai.use(chaiHttp);

//describe() es de mocha
describe('Probando respuesta de servidor para método GET /series', () => {
    it('Comprueba que metodo GET responde con codigo 200', (done) => {
        chai.request(server).get('/series').end((error, respuesta) => {
            chai.assert.equal(respuesta.status, 200, 'La respuesta no ha sido la esperada');
            done();
        });
    })
});