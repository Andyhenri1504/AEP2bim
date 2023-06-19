// matemagica.test.js

const Matemagica = require('./Matemagica');

describe('Matemagica', () => {
  let matemagica;

  beforeEach(() => {
    matemagica = new Matemagica();
  });

  describe('adicao', () => {
    test('deve retornar a soma de dois números', () => {
      expect(matemagica.adicao(2, 3)).toBe(5);
    });
  });

  describe('subtracao', () => {
    test('deve retornar a diferença entre dois números', () => {
      expect(matemagica.subtracao(5, 2)).toBe(3);
    });
  });

  describe('divisao', () => {
    test('deve retornar a divisão entre dois números', () => {
      expect(matemagica.divisao(10, 2)).toBe(5);
    });

    test('deve lançar um erro se o segundo número for zero', () => {
      expect(() => matemagica.divisao(10, 0)).toThrow('Divisão por zero não é permitida!');
    });
  });

  describe('multiplicacao', () => {
    test('deve retornar o produto de dois números', () => {
      expect(matemagica.multiplicacao(2, 3)).toBe(6);
    });
  });
});
