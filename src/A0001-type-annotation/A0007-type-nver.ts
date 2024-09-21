// nunca retorna nada

// laço infinito ou erro

function criaErro(): never {
    throw new Error('Erro qualquer');
}

criaErro();