// //let | const
// let seraQuePode = "?";
// console.log(seraQuePode);

// let estaFrio = true;
// if (estaFrio) {
//   let acao = "Colocar o casaco!";
//   console.log(acao);
// }

// const cpf: string = "123.456.789-00";
// // cpf = "123.444.555-33";
// console.log(cpf);

// var segredo = "externo";

// function revelar() {
//   const segredo = "interno";
//   console.log(segredo);
// }

// revelar();
// console.log(segredo);

// {
//   const def = "def";
//   console.log(def);
// }

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// // console.log(i);

// //Arrow Function

// const somar = function (n1: number, n2: number): number {
//   return n1 + n2;
// };

// console.log(somar(2, 2));

// const subtrair = (n1: number, n2: number) => n1 - n2;
// console.log(subtrair(2, 3));

// const saudacao = () => console.log("Olá");
// saudacao();

// const falarCom = (pessoa: string) => console.log("Olá " + pessoa);
// falarCom("Ian");

// // this

// function normalComThis() {
//   console.log(this);
// }

// const normalComThisEspecial = normalComThis.bind({ nome: "Ana" });
// normalComThisEspecial();

// console.log(this);
// const arrowComThis = () => console.log(this);
// arrowComThis();

// Parâmetro padrão

// function contagemRegressiva(
//   inicio: number = 5,
//   fim: number = inicio - 5
// ): void {
//   console.log(inicio);
//   while (inicio >= fim) {
//     inicio--;
//     console.log(inicio);
//   }
//   console.log("fim");
// }

// // contagemRegressiva();
// contagemRegressiva(3);

// Rest & Spread

//SPREAD

// const numbers = [1, 10, 99, -5, 200, 547, 548];
// console.log(Math.max(...numbers));

// const turmaA: string[] = ["João", "Maria", "Fernando", "Carol", "Gabriel"];
// const turmaB: string[] = ["Fernanda", "Miguel", ...turmaA, "Lorena"];

// console.log(turmaB);

// REST
// function retornarArray(...args: number[]): number[] {
//   return args;
// }

// const numeros = retornarArray(1, 2, 3, 4, 5, 6, 35487);
// console.log(numeros);
// console.log(retornarArray(...numbers));

// Rest & Spread

// const tupla: [number, string, boolean] = [1, "abc", false];

// function tuplaParam1(a: number, b: string, c: boolean): void {
//   console.log(`1) ${a}, ${b}, ${c}`);
// }
// tuplaParam1(...tupla);

// function tupla2Param2(...params: [number, string, boolean]) {
//   // console.log(Array.isArray(params));
//   console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
// }

// tupla2Param2(...tupla);

//Destructuring (array)

const caracteristicas = ["Motor Zetec 1.8", 2020];
// const motor = caracteristicas[0];
// const ano = caracteristicas[1];

const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);

//Destructuring (objeto)
const item = {
  nome: "SSD 480GB",
  preco: 200,
  caracteristicas: {
    w: "Importado",
  },
};

const nomeItem = item.nome;
const precoItem = item.preco;

console.log(nomeItem);
console.log(precoItem);

const {
  nome: n,
  preco: p,
  caracteristicas: { w },
} = item;
console.log(n);
console.log(p);
console.log(w);

//Template string

const usuarioID = "SuporteCord3r";
const notificacoes: string = "9";
// const boasVindas =
//   "Boas Vindas " + usuarioID + " você tem " + notificacoes + " notificações";
const boasVindas = `Boas vindas ${usuarioID} você tem ${notificacoes} notificações`;
console.log(boasVindas);
