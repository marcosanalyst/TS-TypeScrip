export function multiplicarArgs(...args: Array<number>): number{
    return args.reduce((ac, valor) => ac * valor, 1); 

}

export function concatenaString(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}

const result = multiplicarArgs (1,2,3,4);
const concatenacao = concatenaString ('a','b','c');

console.log(result);
console.log(concatenacao);


