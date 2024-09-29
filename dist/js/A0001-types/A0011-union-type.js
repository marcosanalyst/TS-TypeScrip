"use strict";
/* uma variável, retorno de função ou parâmetro pode ter mais de um tipo
 
| o pipe ler-se como OU

é uma má prática utilizar uma função que faça mais de uma coisa!*/
function addOrConcat(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    return `${a}${b}`;
}
console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20'));
console.log(addOrConcat('10', 20));
