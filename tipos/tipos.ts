// // //string
// // let nome: string = "João";
// // console.log(nome);

// // // nome = 28;f

// // //numbers
// // let idade: number = 27;
// // idade = 27.5;
// // console.log(idade);

// // //bolean

// // let possuiHobies: boolean = false;
// // console.log(possuiHobies);

// // //tipos explícitos

// // let minhaIdade: number;
// // minhaIdade = 27;
// // console.log(typeof minhaIdade);
// // // minhaIdade = "idade é 27";

// // //array
// // let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
// // console.log(hobbies[0]);
// // console.log(typeof hobbies);

// // hobbies = [100];
// // // hobbies = 100;
// // console.log(hobbies);

// // //tuplas

// // let endereco: [string, number, string] = ["Av. Principal", 99, ""];
// // console.log(endereco);

// // endereco = ["Rua Importante", 140, "Bloco C"];
// // console.log(endereco);

// // //enums

// // enum Cor {
// //   Cinza,
// //   Verde = 100,
// //   Azul = 2,
// //   Laranja,
// //   Amarelo,
// // }

// // let minhaCor: Cor = Cor.Azul;
// // console.log(minhaCor);
// // console.log(Cor.Azul);
// // console.log(Cor.Amarelo);

// // //any
// // let carro: any = "BMW";
// // console.log(carro);
// // carro = { marca: "BMW", ano: 2019 };
// // console.log(carro);

// // // tipos em função

// // function retorneMeuNome(): string {
// //   return nome;
// // }
// // console.log(retorneMeuNome());

// // function digaOi(): void {
// //   console.log("OI");
// // }
// // digaOi();

// // function multiplicar(numA: number, numB: number): number {
// //   return numA * numB;
// // }

// // console.log(multiplicar(4.7, 9));

// // //tipos função

// // let calculo: (x: number, y: number) => number;
// // // calculo = digaOi;
// // // calculo();

// // calculo = multiplicar;
// // console.log(calculo(5, 6));

// //objetos
// let usuario: { nome: string; idade: number } = {
//   nome: "João",
//   idade: 27,
// };

// console.log(usuario);

// usuario = {
//   idade: 41,
//   nome: "Maria",
// };

// console.log(usuario);

// let funcionario: {
//   supervisores: string[];
//   baterPonto: (horas: number) => string;
// } = {
//   supervisores: ["Ana", "Fernando"],
//   baterPonto(horario: number): string {
//     console.log("alo");
//     if (horario <= 8) {
//       return "ponto normal";
//     } else {
//       return "Fora do horário";
//     }
//   },
// };

// console.log(funcionario.supervisores);
// console.log(funcionario.baterPonto(8));
// console.log(funcionario.baterPonto(9));

// //union types

// let nota: number | string = 10;
// console.log(`Minha nota é ${nota}`);
// nota = "10";
// console.log(`Minha nota é ${nota}`);

// //checando tipos

// let valor = 30;

// if (typeof valor === "number") {
//   console.log("É um number");
// } else {
//   console.log(typeof valor);
// }

// //type never

// function falha(msg: string): never {
//   throw new Error(msg);
// }

// const produto = {
//   nome: "Sabão",
//   preco: 14,
//   validarProduto() {
//     if (this.nome || this.nome.trim().length === 0) {
//       falha("precisa ter um nome");
//     }
//     if (this.preco <= 0) {
//       falha("Preço inválido!");
//     }
//   },
// };

// produto.validarProduto();

let altura = 12;
// altura = null;

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato1: Contato = {
  nome: "Ian Augusto",
  tel1: "41992486500",
  tel2: null,
};

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);

let podeSerNulo = null; // any!
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = "abc";
console.log(podeSerNulo);

//Desafio
type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor;
  },
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let correntista: Correntista = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["34567890", "98765432"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
