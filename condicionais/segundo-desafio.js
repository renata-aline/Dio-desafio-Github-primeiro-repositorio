/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis.Sendo elas:
1 - preço do etanol;
2 - preço da gasolina;
3 -o tipo de combustivel que está no seu carro;
4 - gasto médio de combustível do carro por km;
5 - Distância em km da viagem;

imprima no console o valor que será gasto para realizara viagem.

*/
const precoEtanol = 3;
const precoGasolina = 6;
const litrosConsumidoKm = 9;
const distancia = 300;
const tipoCombustivel = 'gasolina';


const carroEtanol = distancia / litrosConsumidoKm * precoEtanol;
const carroGasolina = distancia / litrosConsumidoKm * precoGasolina;

if (tipoCombustivel === 'Etanol') {
    console.log(distancia / litrosConsumidoKm * precoEtanol);
}else {
   console.log(distancia / litrosConsumidoKm * precoGasolina);
    }




/*se no meu carro estiver gasolina eu vou gastar.300/9*6=200
se no carro estiver etanol vou gastar 300/9/*4=100 .*/