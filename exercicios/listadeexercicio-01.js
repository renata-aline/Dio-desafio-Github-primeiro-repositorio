/*faça um algorítimo que dado as 3 notas tiradas
 por um aluno em um semestre da faculdade.
 calcule e imprima a  média e a sua classificacao conforme a tabela abaixo.

 Média = (nota 1 + nota 2 + nota 3) / 3;

 Classificação:
 -Média menor que 5, reprovação;
 -Média entre 5 e 7, recuperação;
 -Média acima de 7, passou de semestre;
 */


 const nota1 = 9;
 const nota2 = 7;
 const nota3 = 7;

 const notaMedia = (nota1 + nota2 + nota3) / 3;

 console.log(notaMedia);

 if (notaMedia < 5) {
    console.log('reprovado');
 }else if (notaMedia >=5 && notaMedia <=7){
    console.log('recuperação');
 }else {
    console.log('aprovado');
 }


