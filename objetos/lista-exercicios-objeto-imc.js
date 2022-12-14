/* 2-Crie uma classe para representar pessoas.
para cada pessoa teremos os atributos nome,peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada josé que tenha 70kg de peso 
e 1,75 de altura e peça ao Jose para dizer o valor do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    setPeso(peso){
        this.peso = peso;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'obeso';
        } else {
            return 'obesidade grave';
        }
    }
}

const jose = new Pessoa('jose', 70, 1.75);
console.log(jose.classificarImc());
const Re = new Pessoa('Re', 50, 1.53);
console.log(Re.classificarImc());
Re.setPeso(Re.peso - 1);
console.log(Re.peso);