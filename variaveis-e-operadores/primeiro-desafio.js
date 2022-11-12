/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis.Sendo elas:
    1- preço do combustivel;
    2- gasto médio de combustivel do carro por km;
    3- Distância em km da viagem;

imprimir no console o valor que será gasto para realizar esta viagem.

*/

const precoCombustivelLitro = 5.79;
const consumoPorLitro = 12;
const distancia = 1580;

const valorGasto = distancia / consumoPorLitro * precoCombustivelLitro;



/*preco do litro de combustivel 2 reais
com 1 litro eu ando 5km
preciso andar 10km.
com 2 litros eu ando 10km
gasto de 4 reais para percorrer 10 km.


com quantos litros eu ando 10 km e porque?
eu ando 10 km com 2 litros porque a cada 1 litro de combustivel eu ando 5 km.

Qual a formula pra percurrer 10 km?
10/5*2*/

console.log(valorGasto.toFixed(2));



