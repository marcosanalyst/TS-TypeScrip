
// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Marcos'; 
let idade: number = 32;
let adulto: boolean = true; 
let simbolo: symbol = Symbol('qualquer-symbol');
let big: bigint = 10n;

// Array, posso escrever de duas formas
let arrayDeNumeros: Array<number> = [1,2,3,4,5]; 
let arrayDeNumeros2: number[] = [1,2,3,4,5]; 

let arrayDeStrings: Array<string> = ['a','b','computador','Flávio'];
let arrayDeStrings2: string[] = ['a','b','computador','Flávio'];

// Objetos
let pessoa: {nome: string, idade: number, profissao: string, brasileiro: boolean, religiosa?: boolean} = 
{nome: 'Marcos', idade: 32, profissao: 'programador', brasileiro: true,}; // religiosa?: quer dizer que info é opcional ou undefined

// Funções, posso escrever de duas formas

function soma(x:number,y:number): number{ 
    return x + y;
};

function potencia(num1: number, num2: number): number {
    return num1 ** num2;
};

const soma2: (x2: number, y2: number) => number = (x2,y2) => x2 + y2;

const potencia2(valor1:number, valor2:number): number{
    return valor1 ** valor2;
}


