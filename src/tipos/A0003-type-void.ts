function semRetorno(...args: string[]): void {
    console.log(args.join(' ')); 
}; // retorna nada de forma implicita 


const pessoa = {
    nome: "Silvano",
    sobrenome: "Sales",

    exibirNome(): void {
        console.log(this.nome + '' + this.sobrenome);
    }
}

semRetorno("Luiz", "Otávio");
pessoa.exibirNome();
export {pessoa};


