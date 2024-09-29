"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicarArgs = multiplicarArgs;
exports.concatenaString = concatenaString;
function multiplicarArgs(...args) {
    return args.reduce((ac, valor) => ac * valor, 1);
}
function concatenaString(...args) {
    return args.reduce((ac, valor) => ac + valor);
}
const result = multiplicarArgs(1, 2, 3, 4);
const concatenacao = concatenaString('a', 'b', 'c');
console.log(result);
console.log(concatenacao);
