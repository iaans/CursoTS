"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log("TOOOOOT!");
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
// }
const moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class Objeto2D {
    // public base: number = 0;
    // public altura: number = 0;
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo(5, 7);
retangulo.base = 5;
// retangulo.altura = 7;
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
// var estagiario = {
//   _primeiroNome: "",
// };
class Estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = "";
        }
    }
}
const estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "In";
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Ian";
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafios.js.map