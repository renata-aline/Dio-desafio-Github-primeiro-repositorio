/* Elabore um algoritimo que calcule o que deve ser
pago por um produto,considerando o preço normal da etiqueta
e a escolha da condiçao de pagamento.
Utilize os códigos da tabela a seguir para ler qual
a condiçao de pagamento escolhida e efetuar o cálculo adequadro.

Código condição de pagamento:
1-a vista débito, recebe 10% de desconto;
2-a vista no dinheiro ou pix,recebe 15% de desconto;
3-em duas vezes,preço normal de etiqueta sem juros;
4-acima de duas veses, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaDePagamento = 4; 

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
}else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}



