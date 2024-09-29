// moditicadores de acesso represento como '+'  public
// '-' private
// '#' protected

export class Pessoa{
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string
    ){}

    getIdade(): number{
        return this.idade;
    }

    getCpf(): string{
        return this.cpf;
    }

    getNomeCompleto(): string{
        return this.nome + ' ' + this.sobrenome;
    }

}

// Herança, herdando tudo! Atributos, construtor, métodos.
// ela é utilizada principalmente para polimorfismo e reutilização de código
// posso aproveitar o código e sobreescrever os métodos de acordo com cada necessidade!


export class Aluno extends Pessoa{
    getNomeCompleto(): string{
        return 'Isso vem do Aluno: ' + this.nome + ' ' + this.sobrenome;
    }
}

export class Cliente extends Pessoa{ 
    getNomeCompleto(): string{
        return 'Isso vem do Cliente: ' + this.nome + ' ' + this.sobrenome;
    }

}

// 3 tipos de classe 

const aluno1 = new Aluno('Gabriela', 'Soares', 25,'000.000.000-00');
console.log(aluno1.getNomeCompleto);

const cliente1 = new Cliente('Gabriela', 'Soares', 25,'000.000.000-00');
console.log(cliente1.getNomeCompleto);

const pessoa1= new Pessoa('Gabriela', 'Soares', 25,'000.000.000-00');
console.log(pessoa1.getNomeCompleto);


