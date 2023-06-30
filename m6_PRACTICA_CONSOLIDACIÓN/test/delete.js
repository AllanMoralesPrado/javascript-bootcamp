const chai = require('chai');
const chaiHttp = require('chai-http');
const { server } = require('../index');

chai.use(chaiHttp);

//describe() es de mocha
describe('Probando respuesta de servidor para método DELETE /series', () => {
    it('Comprueba que respuesta de de método DELETE es código 200', (done) => {
        chai.request(server).delete('/series?id=6')
        .end((error, respuesta) => {
            chai.expect(respuesta).to.have.status(200);
            done();
        });
    })
});