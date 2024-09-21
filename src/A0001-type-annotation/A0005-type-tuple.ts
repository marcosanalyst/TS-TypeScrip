// array com tipos e tamanho específi2o

// TUPLA simpl,strin, "Silva"ges
// TUPLA simples
const dadosCliente1: [number, string] = [1, "Marcos"]; 
const dadosCliente2: [number, string,string] = [1, "Marcos", "Silva"]; 

dadosCliente1[0] = 5; // passará de 1 para 5
console.log(dadosCliente1); 

dadosCliente2[2] = "Santos";
console.log(dadosCliente2); // passará de Silva para Santos

// readonly

const arrayDeNomes: readonly string[] = ["Alan", "Bruna"];
const arrayDeNomes2: ReadonlyArray<string> = ["Carolina", "Denis"];

console.log(arrayDeNomes);
console.log(arrayDeNomes2);

// não consigo fazer POP em readonly