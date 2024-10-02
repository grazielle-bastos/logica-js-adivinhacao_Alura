alert(`Boas vindas ao jogo do número secreto`);

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
console.log(`O segredo do número secreto é ${numeroSecreto}`);
let chute;
let qtdTentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  if (chute == numeroSecreto) {
    break;
  } else {
    // se chute for igual ao número secreto
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    // tentativas = tentativas +1;
    qtdTentativas++;
  }
}

let palavraTentativa = qtdTentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${qtdTentativas} ${palavraTentativa}`
);

// if (qtdTentativas > 1) {
//   alert(
//     `Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${qtdTentativas} tentativas`
//   );
// } else {
//   alert(
//     `Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${qtdTentativas} tentativa`
//   );
// }
