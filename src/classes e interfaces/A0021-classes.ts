// usamos export pois 99% das vezes vamos utilizar a classe

// public é padrão em atributos

// classe
// construtor

// maneira longa
export class Empresa {
    public readonly nome: string;    
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cpnj: string;

    constructor(nome:string, cnpj: string){
        this.nome = nome;
        this.cpnj = cnpj;
    }

    adicionarColaborador(colaborador: Colaborador): void{
        this.colaboradores.push(colaborador);
    }

    mostrarColaboradores(): void{
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

// maneira curta
export class Colaborador { 
    constructor(
        public readonly nome: string,
        public readonly sobreNome: string,
    ){ }
}


const empresa1 = new Empresa('Apple', '11.111.11/0001-11');
const colaborador1 = new Colaborador('Marcos', 'Vieira');
const colaborador2 = new Colaborador('Flávia', 'Barbosa');
console.log(empresa1);

const empresa2 = new Empresa('Dell','00.000.00/0001-00');
console.log(empresa2); 

empresa1.adicionarColaborador(colaborador1);
empresa1.mostrarColaboradores();


