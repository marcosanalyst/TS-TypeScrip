// pouco utilizado

type TemNome = {nome: string};
type TemSobreNome = {sobrenome: string};
type TemIdade = {idade: number};
type Pessoa = TemNome  & TemSobreNome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersecao = AB & AC;

const pessoa: Pessoa = {
    nome: 'Jorge',
    sobrenome: 'Fontoura',
    idade: 18
}
console.log(pessoa);

export {pessoa};

