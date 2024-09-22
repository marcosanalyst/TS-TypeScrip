let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2); 


export function createPerson(firstName: string,lastName: string,nickName?: string, ) : {
    firstName: string;
    lastName: string;
    nickName?: string;
  } {
    return {firstName, lastName}
  }

  // se o x for do tipo number faça a multiplicação, caso não, retorne nulo
  export function squareOf(x:any) {
    if(typeof x === 'number') return x * x;
    return null;
  }

  const squareOfTwoNumber = squareOf(2);
  const squareOfTwoString = squareOf('2');

  if (squareOfTwoNumber === null) {
    console.log('Conta inválida');
  }
    else {
        console.log(squareOfTwoNumber)
    }
  



