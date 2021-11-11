// Teste 1: Se o valor da fatura for menor que 2000;

// Teste 2: Se o valor da fatura estiver entre 2000 e 2500 e a data for menor ou igual a de um
// mês atrás;

// Teste 3: Se o valor da fatura estiver entre 2500 e 3000 e a data de inclusão do cliente for
// menor ou igual a 2 meses atrás;

// Teste 4: Se o valor da fatura for maior que 4000 e pertencer a algum estado da região Sul do
// Brasil.

const filtrar = require('../lib/filtro');

class Fatura {
    constructor(codigo, valor, data, cliente) {
      this.codigo = codigo;
      this.valor = valor;
      this.data = data,
      this.cliente = cliente
    }
}

class Cliente {
    constructor(nome, dataInclusao, estado) {
      this.nome = nome;
      this.dataInclusao = dataInclusao,
      this.estado = estado
    }
}

describe("Filtrar salario", () => {
    test("Teste 1", () => {

        c1 = new Cliente("Gabriel", new Date(2021,9,12), "Paraná");
        c2 = new Cliente("José", new Date(2021,8,2), "Minas Gerais");
        c3 = new Cliente("João", new Date(2021,9,12), "São Paulo");

        f1 = new Fatura(0,1500,new Date(2021,8,5), c1);
        f2 = new Fatura(0,1900,new Date(2021,9,21), c2);
        f3 = new Fatura(0,1800,new Date(2021,9,5), c3);

        const faturas = [f1,f2,f3];

        const newFaturas = [];

        var result = filtrar(faturas);

        expect(result).toEqual((newFaturas));

    }),

    test("Teste 2", () => {

      c1 = new Cliente("Pedro", new Date(2021,10,12), "Paraná");
      c2 = new Cliente("Matheus", new Date(2021,9,2), "Minas Gerais");
      c3 = new Cliente("Jorge", new Date(2021,10,8), "São Paulo");

      f1 = new Fatura(0,2499, new Date(2021,9,5), c1);
      f2 = new Fatura(0,2100, new Date(2021,9,21), c2);
      f3 = new Fatura(0,2200, new Date(2021,9,5), c3);

      const faturas = [f1,f2,f3];

      const newFaturas = [];

      var result = filtrar(faturas);

      expect(result).toEqual(newFaturas);

  });
});