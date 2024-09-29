"use strict";
// unknown é um any mais seguro, ele faz a checagem de tipo antes de uma operação
// any
let qualquercoisa;
qualquercoisa = 100;
qualquercoisa = "Luiz";
qualquercoisa = 900;
qualquercoisa = false;
qualquercoisa = 10;
const y = 50;
if (typeof qualquercoisa === 'number')
    console.log(qualquercoisa + y); // 60
// unkown faria a checagem dos dados e não permitiria a operação
