// tipos próprio devem iniciar com letra maíuscula

type Idade = number;
type Pessoa = { 
    nome: string
    idade: Idade,
    profissao: string,
    salario: number,
    CorPreferida?: string
};

type CorRGB = "Vermelho" | "Verde" | "Azul";
type CorCMYK = "Ciano" | "Magenta" | "Amarelo" | "Preto";
type CorPreferida = CorCMYK | CorRGB;

const pessoa: Pessoa = {
    idade: 20,
    nome: "João",
    profissao: "programador",
    salario: 14_000,
  
}

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa{
    return{...pessoa, CorPreferida: cor};
}

console.log(setCorPreferida(pessoa, 'Magenta'));