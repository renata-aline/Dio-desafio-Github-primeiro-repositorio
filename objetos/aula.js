
/*const pessoa = {
    nome: 'Renata oliveira',
    idade: 34,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
    

};
 pessoa.nome = 'Re';
 pessoa.idade = 34;



pessoa.descrever();

//objeto: abre e fecha chave.
//e dentro tem uma coleçao de chave e valor.

class pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
const Renata = new pessoa();
Renata.nome = 'Renata oliveira';
Renata.idade = 34;

const Mario = new pessoa();
Mario.nome = 'Mario oliveira';
Mario.idade = 34;

console.log(Renata);
console.log(Mario);

Renata.descrever();


//class:como objeto deve ser.
//estancia e uma ocorrencia.*/


class pessoa {
    nome;
    idade;

    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
        this.dataDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

//const Renata = new pessoa('Renata',34);
//const Mario = new pessoa('Mario',38);

//console.log(Renata);
//console.log(Mario);



function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);  
    }else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`); 
    }
}

const Renata = new pessoa('Renata',34);
const Mario = new pessoa('Mario',38);

compararPessoas(Renata,Mario);