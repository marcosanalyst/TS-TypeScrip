enum Cores {
    verde,
    vermelho,
    amarelo, 
    azul,
    branco
}

console.log(Cores.amarelo); // 0 item do index
console.log(Cores.branco); // 4 item do index

// também posso colocar um inicializador 

enum Cores2{
    cinza = 20,
    preto = 50,
    marrom = 1 
}
console.log(Cores2.cinza); // 20
console.log(Cores2.marrom); // 1 

function escolhaACor(cor: Cores2): void {
    console.log(Cores2[cor]);
}

escolhaACor(50); // preto