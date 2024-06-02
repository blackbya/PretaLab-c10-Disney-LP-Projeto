let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let palpitesErrados = []

function jogoDeAdivinhacao() {
   const palpiteDigitado = pegarPalpiteDigitado();

   if (!palpiteDigitado) {
    alert("Digite um valor válido");
    return;
   } else if (palpiteDigitado < 1) {
    alert("O número deve estar entre 1 e 100");
    return;
} else if (palpiteDigitado > 100) {
    alert("O número deve estar entre 1 e 100");
    return;
}

if (palpitesErrados.includes(palpiteDigitado)) {
    alert("Não é permitido inserir números repetidos, tente novamente.");
    return;
   }

   if (palpiteDigitado === numeroAleatorio) {
    alert('Parabéns, você adivinhou!');
    reiniciarJogo();
    return;
   } else if(palpiteDigitado > numeroAleatorio) {
    tentativas++;
    atualizarFeedback('O número é muito alto. Tente novamente.');
   } else {
    tentativas++;
    atualizarFeedback('O número é muito baixo. Tente novamente.');
  }  
  palpitesErrados.push(palpiteDigitado);

    atualizarPalpitesFalhos(palpitesErrados.join(', '));

    const novaPontuacao = 100 - (tentativas * 10);
    atualizarPontuacao(novaPontuacao);

    const palpitesFalhos = pegarPalpitesFalhos();
    const novosPalpitesFalhos = palpitesFalhos + "" + palpiteDigitado;
    atualizarPalpitesFalhos(novosPalpitesFalhos)

    const pontuacaoAtual = pegarPontuacao();
    if (pontuacaoAtual === "Você tem 0 pontos.") {
        alert("Você perdeu =(  Jogue novamente!");
        reiniciarJogo();
}
}

function reiniciarJogo() {
    const vaiReiniciar = confirm("Deseja jogar novamente?");

    if (vaiReiniciar === true) {
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        tentativas = 0;
        palpitesErrados = [];
        atualizarPalpitesFalhos ("");
        atualizarPontuacao (100);
        atualizarFeedback ("");
        limparPalpiteDigitado();
    }
}
