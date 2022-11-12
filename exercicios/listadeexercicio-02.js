/*O IMC - Indice Massa Corporal é um critério da
Organização Mundial de Saúde para da uma indicação
sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algorítimo que dado o peso e a altura de um adulto
mostre sua condição de acordo com a tabela abaixo:

IMC em adultos condição:
-abaixo de 18.5 abaixo do peso;
-entre 18.5 e 25 peso normal;
-entre 25 e 30 acima do peso;
-entre 30 e 40 obeso;
-acima de 40 obsidade grave;
*/

const peso = 63;
const altura = 1.75;

const imc = peso / Math.pow(altura, 2);
console.log(imc);

if (imc < 18.5) {
    console.log('abaixo do peso');
}else if (imc >=18.5 && imc < 25) {
    console.log('peso normal');
}else if (imc >=25 && imc < 30){
    console.log('acima do peso');
}else if (imc >=30 && imc < 40) {
    console.log('obeso');
}else {
    console.log('obesidade grave');
}