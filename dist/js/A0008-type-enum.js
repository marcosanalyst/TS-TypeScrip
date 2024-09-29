"use strict";
var Cores;
(function (Cores) {
    Cores[Cores["verde"] = 0] = "verde";
    Cores[Cores["vermelho"] = 1] = "vermelho";
    Cores[Cores["amarelo"] = 2] = "amarelo";
    Cores[Cores["azul"] = 3] = "azul";
    Cores[Cores["branco"] = 4] = "branco";
})(Cores || (Cores = {}));
console.log(Cores.amarelo); // 0 item do index
console.log(Cores.branco); // 4 item do index
// também posso colocar um inicializador 
var Cores2;
(function (Cores2) {
    Cores2[Cores2["cinza"] = 20] = "cinza";
    Cores2[Cores2["preto"] = 50] = "preto";
    Cores2[Cores2["marrom"] = 1] = "marrom";
})(Cores2 || (Cores2 = {}));
console.log(Cores2.cinza); // 20
console.log(Cores2.marrom); // 1 
function escolhaACor(cor) {
    console.log(Cores2[cor]);
}
escolhaACor(50); // preto
