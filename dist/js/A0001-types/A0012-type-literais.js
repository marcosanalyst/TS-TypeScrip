"use strict";
// utilizar valores como tipos!
Object.defineProperty(exports, "__esModule", { value: true });
// module mode : sai do escopo global da minha aplicação
exports.default = 1;
let x = 10;
x = 0b1010;
const y = 10;
const a = 100;
// não poderei atribuir um novo valor para "nome" pois está como const
const pessoa = {
    nome: 'Marcos',
    sobreNome: 'Vieira'
};
// nesta minha função, estou atribuindo o "tipo cor" como tipo vermelho ou azul ou amarelo
function escolherCor(cor) {
    return cor;
}
// quando eu chamar a função terá apenas estas opções, pois é um tipo literal!
console.log(escolherCor("Vermelho")); // funcionará
// console.log(escolherCor('Branco')); 
// Argument of type '"Branco"' is not assignable to parameter of type '"Vermelho" | "Azul" | "Amarelo"'.
