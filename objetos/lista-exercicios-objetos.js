/*
1 - Crie uma classe para representar carros.
os carros possuem uma marca,uma cor e um gasto médio de combustivel
por km rodado.
2 - Crie um método que dado a quantidade de km e o preço
do combustivel nos de o valor gasto em reais para realizar este percurso.*/


// const carro = {
//     marca: 'ford',
//     cor: 'branco',
//     gastoMedioCombustivel: 9,
//     kmRodado: 300,
//     valorCombustivel: 5,
// }


class Carros {
    marca;
    cor;
    gastoMedioCombustivel;

    constructor(marca, cor, gastoMedioCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivel = gastoMedioCombustivel;
    }


calcularGastoDePercurso(kmRodado,valorCombustivel){ 
    return kmRodado * this.gastoMedioCombustivel * valorCombustivel;
}
}

const uno = new Carros('fiat','prata',1 / 12);
console.log(uno.calcularGastoDePercurso(70,5));
const palio = new Carros('Fiat','preto', 1 / 10);
console.log(palio.calcularGastoDePercurso(70,5));



/*const kmRodado = 300;
const valorCombustivel = 5;

const fusca = new Carros('volks', 'preto', 4);
const ford = new Carros('ford', 'branco', 9);

function gastoMedio (gastoMedio){
    return (kmRodado / gastoMedio * valorCombustivel)

}

function funcReturnLog(carro) {
    console.log(`${carro.marca} da cor ${carro.cor} gasta em torno de: ${gastoMedio(carro.gastoMedioCombustivel)}`);
}

funcReturnLog(ford);
funcReturnLog(fusca);*/