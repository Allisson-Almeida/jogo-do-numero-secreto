let listaNumerosSorteados = [];
let numeroLimite = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

function MensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');
}

MensagemInicial();


function verificarChute (){
    tentativas++
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!!!');
        let palavraTentativa = tentativas >1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas) ;
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute>numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor!');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior!');
    }
    limparCampo();
}    
}


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2})
}


function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite +1);
    let qtdadeElementoLista = listaNumerosSorteados.length;

    if (qtdadeElementoLista == numeroLimite){
        listaNumerosSorteados =[];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaNumerosSorteados.push(numeroEscolhido); //push adiciona itens ao final da lista
        console.log(listaNumerosSorteados); 
        return numeroEscolhido;
    }

}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    MensagemInicial();
    tentativas = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);

}



