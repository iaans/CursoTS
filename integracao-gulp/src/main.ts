import $ from "jquery";

import Livro from "./modelo/livro";

const livro = new Livro("Cosmos", 110.09, 0.19);
// console.log(livro.precoComDesconto());

$("body").append(`<'h1'>${livro.nome}</'h1>`);
$("body").append(`<h2>Preço: R${livro.precoComDesconto()}</h2>`);
