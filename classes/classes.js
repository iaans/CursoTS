"use strict";
// class Data {
//   //Público por padrão
//   dia: number;
//   public mes: number;
//   ano: number;
//   constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
//     this.dia = dia;
//     this.mes = mes;
//     this.ano = ano;
//   }
// }
// const aniversario = new Data(3, 11, 2009);
// aniversario.dia = 4;
// console.log(aniversario.dia);
// console.log(aniversario);
// const casamento = new Data(); // posso omitir parenteses
// casamento.ano = 2017;
// console.log(casamento);
// class DataEsperta {
//   constructor(
//     public dia: number = 1,
//     public mes: number = 1,
//     public ano: number = 1970
//   ) {}
// }
// const aniversarioEsperto = new DataEsperta(3, 11, 2009);
// aniversarioEsperto.dia = 4;
// console.log(aniversarioEsperto.dia);
// console.log(aniversarioEsperto);
// const casamentoEsperto = new DataEsperta(); // posso omitir parenteses
// casamentoEsperto.ano = 2017;
// console.log(casamentoEsperto);
/*

Desafio Produto

Atributos: nome, preco e desconto
Criar o construtor
Obs: Desconto é opcional(valor padrão 0)
Obs: Criar dois produtos: passando dois e três parametros
*/
// class Produto {
//   nome: string;
//   preco: number;
//   desconto: number;
//   constructor(nome: string = "Sabão", preco: 5, desconto: 0) {
//     this.nome = nome;
//     this.preco = preco;
//     this.desconto = desconto;
//   }
// }
// const produto = new Produto("café", 5, 0);
// console.log(produto.nome);
// console.log(produto.preco);
// console.log(produto.desconto);
// Correção;
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    //-  Criar método precoComDesconto
    // - X da questão = Quais paramêtros e o retorno?
    // - Alterar método resumo para mostrar o preço com desconto
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome}  custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
}
const prod1 = new Produto("Caneta preta", 4.2);
prod1.desconto = 0.05;
console.log(prod1.resumo());
const prod2 = new Produto("Caderno Escolar", 18.8, 0.15);
console.log(prod2.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro("Ford", "Ka", 185);
Array(50)
    .fill(0)
    .forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(40)
    .fill(0)
    .forEach(() => carro1.frear());
console.log(carro1.frear());
// carro1.velocidadeAtual = 300;
// console.log("atual ->" + carro1.velocidadeAtual);
// carro1.velocidadeMaxima = 500;
// console.log("máxima ->" + carro1.velocidadeMaxima);
// carro1.alterarVelocidade(150);
// console.log("atual" + carro1.velocidadeAtual);
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("F40", 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40.frear());
console.log(f40.acelerar());
console.log(f40.acelerar());
//Getters & setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
//Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica();
// m1.PI = 4.2;
// console.log(m1.areaCirc(4));
console.log(Matematica.areaCirc(4));
// Classe abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
}
//# sourceMappingURL=classes.js.map