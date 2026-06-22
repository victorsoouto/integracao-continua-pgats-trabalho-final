import ServicoDePagamento from "../src/servicoDePagamento.js";
import assert from 'node:assert';

describe('Testes da classe servicoDePagamento', () =>{
    it('Validar que ao realizar um pagamento o mesmo é salvo na lista de pagamentos', () => {
        const servicoDePagamento = new ServicoDePagamento();
        const codigoDeBarras = '1234-5678-9009'
        const empresa = 'Lucas Films'
        const valor = 100.00

        servicoDePagamento.pagar(codigoDeBarras, empresa, valor);
        const pagamento = servicoDePagamento.consultar();

        assert.equal(pagamento.codigoDeBarras, '1234-5678-9009')
        assert.equal(pagamento.empresa, 'Lucas Films')
        assert.equal(pagamento.valor, 100.00)
        assert.equal(pagamento.categoria, 'padrao')

    });

    it('Validar que ao realizar um pagamento maior que 100.00 a categoria dele é igual a cara', () => {
        const servicoDePagamento = new ServicoDePagamento();
        const codigoDeBarras = '4002-8922-9090'
        const empresa = 'Disney'
        const valor = 1000.00

        servicoDePagamento.pagar(codigoDeBarras, empresa, valor);
        const pagamento = servicoDePagamento.consultar();

        assert.equal(pagamento.categoria, 'cara')
    });

    it('Validar que ao realizar um pagamento menor que 100.00 a categoria dele é igual a padrao', () => {
        const servicoDePagamento = new ServicoDePagamento();
        const codigoDeBarras = '9999-9999-9999'
        const empresa = 'Warner'
        const valor = 99.99

        servicoDePagamento.pagar(codigoDeBarras, empresa, valor);
        const pagamento = servicoDePagamento.consultar();

        assert.equal(pagamento.categoria, 'padrao')
    });

    it('Validar que ao realizar um pagamento igual a 100.00 a categoria dele é igual a padrao', () => {
        const servicoDePagamento = new ServicoDePagamento();
        const codigoDeBarras = '9090-9090-9090'
        const empresa = 'Netflix'
        const valor = 100.00

        servicoDePagamento.pagar(codigoDeBarras, empresa, valor);
        const pagamento = servicoDePagamento.consultar();

        assert.equal(pagamento.categoria, 'padrao')
    });

    it('Validar que a função consulta retorna de fato o ultimo pagamento', () => {
        const servicoDePagamento = new ServicoDePagamento();
        
        const codigoDeBarras1 = '4002-8922-9090'
        const empresa1 = 'Disney'
        const valor1 = 1000.00

        const codigoDeBarras = '9999-9999-9999'
        const empresa = 'Warner'
        const valor = 99.99

        servicoDePagamento.pagar(codigoDeBarras, empresa, valor);
        servicoDePagamento.pagar(codigoDeBarras1, empresa1, valor1);
        const pagamento = servicoDePagamento.consultar();

        assert.equal(pagamento.codigoDeBarras, '4002-8922-9090')
        assert.equal(pagamento.empresa, 'Disney')
        assert.equal(pagamento.valor, 1000.00)
        assert.equal(pagamento.categoria, 'cara')
    });
});