function escrevaMeuNome(nome) {
    return'meu nome é ' + nome;
}
escrevaMeuNome('Renata');



function verificarIdade(idade){
    if (idade >= 18) {
        console.log(escrevaMeuNome('Renata') + ' maior de idade ');
    }else {
        console.log('menor de idade');
    }
}
verificarIdade(34);