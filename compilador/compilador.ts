let canal: string = "Gaveta";
let inscritos: number = 613234;

// canal = inscritos;
console.log(`Canal = ${canal}`);

//let nome = 'Pedro'

function soma(a: any, b: any) {
  return a + b;
}

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = "abc";

function saudar(isManha: boolean): string {
  let saudacao: string;
  if (isManha) {
    saudacao = "Bom dia!";
  } else {
    saudacao = "Boa tarde!";
  }
  return saudacao;
}
