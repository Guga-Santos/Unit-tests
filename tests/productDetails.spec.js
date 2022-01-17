const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    it('Teste se productDetails é uma função', () => {
      expect(typeof productDetails).toBe('function');
    });
    // Teste se o retorno da função é um array.
    it('Teste se o retorno da função é um array.', () => {
      expect(Array.isArray(productDetails('abc', 'def'))).toBe(true);
    });
    // Teste se o array retornado pela função contém dois itens dentro.
    it('Teste se o array retornado pela função contém dois itens dentro.', () => {
      expect(productDetails('abc', 'def').length).toBe(2);
    });
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
      expect(typeof (productDetails('abc', 'def')[0]) && typeof (productDetails('abc', 'def')[1])).toBe('object');
    });
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
      expect(Object.values(productDetails('abc', 'def')[0]) !== Object.values(productDetails('abc', 'def')[1])).toBe(true);
    });
    // Teste se os dois productIds terminam com 123.
    it('Teste se os dois productIds terminam com 123.', () => {
      expect(productDetails('abc', 'def')[0].details.productId === 'abc123').toBe(true);
      expect(productDetails('abc', 'def')[1].details.productId === 'def123').toBe(true);
    });
});
