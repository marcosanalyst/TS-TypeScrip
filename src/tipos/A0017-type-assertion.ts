// precisa do "DOM" ativado em lib no arquivo .json

// quando não tem certeza se o elemento existe
const body = document.querySelector('body');
if (body) body.style.background = 'red';



/* variável chamada body do tipo HTMLBodyElement recebe uma variável do tipo documento,
querySelector: vai selecionar o primeiro elemento do meu document 
que tem como parâmetro 'body', após localizar, posso aplicar/alterar as propriedades desse elemento.

document.querySelector() é um método da API do DOM (Document Object Model), que permite buscar
 o primeiro elemento que corresponde a um seletor CSS especificado.

*/

// Non-null assertion (!) o objeto não vai ser nullo no meu código
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion    
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement existem vários tipos

const input = document.querySelector('.input') as HTMLInputElement;
input.value = "qualquer coisa";